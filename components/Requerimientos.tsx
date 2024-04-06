import { Card, CardHeader, CardBody } from "@nextui-org/react"

export const Requerimientos = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h3 className="text-3xl">Requerimientos</h3>
      <div className="w-4/5 flex flex-wrap justify-center gap-8">
        <Card className="w-80 p-4">
          <CardHeader>
            <h2 className="text-2xl">Servicio EC2</h2>
          </CardHeader>
          <CardBody>
            <p>Implementar un servicio en la nube en servicio EC2.</p>
          </CardBody>
        </Card>
        <Card className="w-80 p-4">
          <CardHeader>
            <h2 className="text-2xl">Storage</h2>
          </CardHeader>
          <CardBody>
            <p>Implementar un servicio de storage.</p>
          </CardBody>
        </Card>
        <Card className="w-80 p-4">
          <CardHeader>
            <h2 className="text-2xl">Conexión</h2>
          </CardHeader>
          <CardBody>
            <p>El cliente se conectará al servidor EC2 y enviara una imagen, el servidor EC2 realizará las operaciones sobre la imagen.</p>
          </CardBody>
        </Card>
        <Card className="w-80 p-4">
          <CardHeader>
            <h2 className="text-2xl">Guardar imágenes</h2>
          </CardHeader>
          <CardBody>
            <p>La imagen se almacenara en el storage y se encriptara y también la imagen encriptada se almacenara en storage.</p>
          </CardBody>
        </Card>
        <Card className="w-80 p-4">
          <CardHeader>
            <h2 className="text-2xl">Regresar imagen</h2>
          </CardHeader>
          <CardBody>
            <p>El servidor EC2 regresará la imagen encriptada y el cliente comprobará la imagen desencriptándola y obteniendo la original.</p>
          </CardBody>
        </Card>
        <Card className="w-80 p-4">
          <CardHeader>
            <h2 className="text-2xl">Plataforma</h2>
          </CardHeader>
          <CardBody>
            <p>Se puede ocupar cualquier plataforma de nube.</p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
