import { useLoaderData } from "react-router-dom";
import { Client } from "../components/Client";

export function loader() {
  
  const clients = [
    {
        id: 1,
        name: 'Messi',
        phone: 102013313,
        email: "liomessi@afa.com",
        company: 'Seleccion Argentina'
    },
    {
        id: 2,
        name: 'Julian',
        phone: 138198313,
        email: "julianaraña@afa.com",
        company: 'Seleccion Argentina'
    },
    {
        id: 3,
        name: 'Enzo',
        phone: 31983913,
        email: "enzoelhombre@afa.com",
        company: 'Seleccion Argentina'
    },
    {
        id: 4,
        name: 'Cuti',
        phone: 319381983,
        email: "cutiromero@afa.com",
        company: 'Seleccion Argentina'
    },
    {
        id: 5,
        name: 'Dibu',
        phone: 1398198938,
        email: "dibumartinez@afa.com",
        company: 'Seleccion Argentina'
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

      { clients.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>

          <tbody>
            { clients.map( client => (
              <Client
                client={ client }
                key={ client.id }
              />
            )) }
          </tbody>
          

        </table>
      ) : (
        <p>No hay Clientes registrados todavia...</p>
      )}
    </>
  )
}
