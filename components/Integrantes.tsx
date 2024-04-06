import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react';
import Image from 'next/image';

export const Integrantes = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h3 className="text-3xl">Integrantes</h3>
      <div className="flex flex-wrap gap-16 justify-center">
        <Card className="w-[350px] py-4">
          <CardHeader className='flex flex-col gap-2 items-start'>
            <div className='flex flex-col'>
              <b>Expediente</b>
              <small>281971</small>
            </div>
            <h3 className="text-2xl line-clamp-1">Favio Jardínez Montiel</h3>
          </CardHeader>
          <CardBody className='flex flex-col gap-2'>
            <Image
              src='/integrante1.jpg'
              width={400}
              height={400}
              alt=''
              className='w-full aspect-video rounded-lg object-cover'
            />
          </CardBody>
        </Card>

        <Card className="w-[350px] py-4">
          <CardHeader className='flex flex-col gap-2 items-start'>
            <div className='flex flex-col'>
              <b>Expediente</b>
              <small>307024</small>
            </div>
            <h3 className="text-2xl line-clamp-1">Diego Martínez García</h3>
          </CardHeader>
          <CardBody className='flex flex-col gap-2'>
            <Image
              src='/integrante2.jpg'
              width={400}
              height={400}
              alt=''
              className='w-full aspect-video rounded-lg object-cover'
            />
          </CardBody>
        </Card>

        <Card className="w-[350px] py-4">
          <CardHeader className='flex flex-col gap-2 items-start'>
            <div className='flex flex-col'>
              <b>Expediente</b>
              <small>307012</small>
            </div>
            <h3 className="text-2xl line-clamp-1">Rafael Bárcena González</h3>
          </CardHeader>
          <CardBody className='flex flex-col gap-2'>
            <Image
              src='/integrante3.jpg'
              width={400}
              height={400}
              alt=''
              className='w-full aspect-video rounded-lg object-cover'
            />
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
