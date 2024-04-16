import Image from "next/image";
import { useState, useRef } from "react";
import ImageMissing from '@/public/image-missing.svg';
import { Button } from "@nextui-org/react";

// Clave de encriptación (debes reemplazarla con tu propia clave)
const encryptionKey = "0123456789abcdef0123456789abcdef";

export const Desarrollo = () => {
  const [image, setImage] = useState(ImageMissing);
  const [imageURL, setImageURL] = useState("");
  const [imageReceived, setImageReceived] = useState("");
  const [imageDecrypted, setImageDecrypted] = useState(""); // Estado para la imagen desencriptada
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleShowImage = () => {
    const file = imageInputRef.current?.files?.[0];
    if (file) {
      setImage(file);
      setImageURL(URL.createObjectURL(file));
    }
  }

  const handleSendImage = async () => {
    const file = imageInputRef.current?.files?.[0];
    if (!file) {
      console.error("No se seleccionó ninguna imagen");
      return;
    }
  
    const formData = new FormData();
    formData.append("image", file);
  
    try {
      const response = await fetch("http://localhost:5910/images", {
        method: "POST",
        body: formData
      });
  
      if (!response.ok) {
        throw new Error("Error al enviar la imagen");
      }
  
      const encryptedImageString = await response.text();
      setImageReceived(`data:image/jpeg;base64,${encryptedImageString}`);
  
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  const handleDecryptImage = async () => {
    if (!imageReceived) {
      console.error("No hay imagen recibida para desencriptar");
      return;
    }
  
    const encryptedImageData = imageReceived.split(",")[1];
    const encryptedImageArrayBuffer = Uint8Array.from(atob(encryptedImageData), c => c.charCodeAt(0)).buffer;
  
    try {
      // Convertir la clave de encriptación a formato adecuado
      const keyBuffer = new TextEncoder().encode(encryptionKey);
      const importedKey = await window.crypto.subtle.importKey(
        "raw", // formato de la clave
        keyBuffer, // clave codificada como Uint8Array
        { name: "AES-CBC" }, // algoritmo de encriptación
        false, // no es extractable
        ["decrypt"] // operaciones permitidas
      );
  
      // Desencriptar la imagen
      const decryptedImage = await window.crypto.subtle.decrypt(
        {
          name: "AES-CBC",
          iv: new Uint8Array(16) // Si la IV es estática, debes proporcionarla aquí
        },
        importedKey,
        encryptedImageArrayBuffer
      );
  
      // Convertir el ArrayBuffer a Blob
      const decryptedImageBlob = new Blob([new Uint8Array(decryptedImage)], { type: 'image/jpeg' });
  
      // Crear una URL local para la imagen desencriptada
      const decryptedImageURL = URL.createObjectURL(decryptedImageBlob);
  
      // Mostrar la imagen desencriptada
      setImageDecrypted(decryptedImageURL);
    } catch (error) {
      console.error("Error al desencriptar la imagen:", error);
    }
  }
  
  
  return (
    <div className="flex flex-col gap-4 items-center">
      <h3 className="text-3xl">Desarrollo del proyecto</h3>
      <div className="flex gap-16">
        <div className="flex flex-col gap-4 items-center">
          <h4 className="text-xl">Imagen a encriptar</h4>
          <div className="hover:cursor-pointer" onClick={() => imageInputRef.current?.click()}>
            <Image
              src={imageURL ? imageURL : ImageMissing}
              width={100}
              height={100}
              alt="Imagen inicial"
              className="rounded-xl aspect-square object-contain bg-default-50 shadow-2xl w-80"
            />
          </div>
          <Button color="primary" onPress={handleSendImage}>Enviar</Button>
          <input className="hidden" type="file" accept="image/*" ref={imageInputRef} onChange={handleShowImage} />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h4 className="text-xl">Imagen desencriptada</h4>
          <img
            src={imageDecrypted}
            alt="Imagen desencriptada"
            className="rounded-xl aspect-square object-contain bg-default-50 shadow-2xl w-80"
          />
          <Button color="success" onPress={handleDecryptImage}>Desencriptar</Button>
        </div>
      </div>
    </div>
  )
}
