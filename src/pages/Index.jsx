import { useLoaderData } from "react-router-dom";

export function loader() {
  
  const clients = [
    {
        id: 1,
        nombre: 'Messi',
        telefono: 102013313,
        email: "liomessi@afa.com",
        empresa: 'Seleccion Argentina'
    },
    {
        id: 2,
        nombre: 'Julian',
        telefono: 138198313,
        email: "julianaraña@afa.com",
        empresa: 'Seleccion Argentina'
    },
    {
        id: 3,
        nombre: 'Enzo',
        telefono: 31983913,
        email: "enzoelhombre@afa.com",
        empresa: 'Seleccion Argentina'
    },
    {
        id: 4,
        nombre: 'Cuti',
        telefono: 319381983,
        email: "cutiromero@afa.com",
        empresa: 'Seleccion Argentina'
    },
    {
        id: 5,
        nombre: 'Dibu',
        telefono: 1398198938,
        email: "dibumartinez@afa.com",
        empresa: 'Seleccion Argentina'
    },
  ];

  return clients;
}


export const Index = () => {

  const clients = useLoaderData();
  console.log(clients)


  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus Clientes</p>
    </>
  )
}
