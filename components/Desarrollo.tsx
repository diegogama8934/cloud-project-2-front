"use client"
import Image from "next/image";
import { useState, useRef } from "react";
import ImageMissing from '@/public/image-missing.svg';
import { Button } from "@nextui-org/react";

export const Desarrollo = () => {
  const [image, setImage] = useState(ImageMissing);
  const [imageURL, setImageURL] = useState("");
  const [imageReceived, setImageReceived] = useState(ImageMissing);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleShowImage = () => {
    const file = imageInputRef.current?.files?.[0];
    if (file) {
      setImage(file);
      setImageURL(URL.createObjectURL(file));
    }
  }

  const handleSendImage = async () => {

    const reqBody = new FormData();
    reqBody.append("image", image);

    const resBody = await fetch("http://localhost:5910/images", {
      method: "POST",
      body: reqBody
    });

    console.log(resBody);

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
          <Image
            src={imageReceived}
            width={100}
            height={100}
            alt="Imagen desencriptada"
            className="rounded-xl aspect-square object-contain bg-default-50 shadow-2xl w-80"
          />
        </div>
      </div>
    </div>
  )
}
