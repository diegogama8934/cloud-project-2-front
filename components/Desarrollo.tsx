"use client"
import Image from "next/image";
import { useState, useRef } from "react";

export const Desarrollo = () => {
  const [urlImage, setUrlImage] = useState("");
  const [imageReceived, setImageReceived] = useState("");
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleShowImage = () => {
    const file = imageInputRef.current?.files?.[0];
    if (file) setUrlImage(URL.createObjectURL(file));
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <h3 className="text-3xl">Desarrollo del proyecto</h3>

      <div className="flex gap-16">
        <div className="flex flex-col gap-4 items-center">
          <h4 className="text-xl">Imagen a encriptar</h4>
          <div className="hover:cursor-pointer" onClick={() => imageInputRef.current?.click()}>
            <Image
              src={urlImage ? urlImage : "/image-missing.svg"}
              width={100}
              height={100}
              alt="Imagen inicial"
              className="rounded-xl aspect-square object-contain bg-default-50 shadow-2xl w-80"
            />
          </div>
          <input className="hidden" type="file" accept="image/*" ref={imageInputRef} onChange={handleShowImage} />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h4 className="text-xl">Imagen desencriptada</h4>
          <Image
            src={imageReceived ? imageReceived : "/image-missing.svg"}
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
