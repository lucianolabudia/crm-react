import { getClient } from "../data/clients";


export async function loader({ params }) {

  const client = await getClient(params.clienteId);

  if ( Object.values(client).length === 0 ) {
    throw new Response('', {
      status: 404, 
      statusText: 'El Cliente no fue encontrado'
    })
  }

  return client;
}

export const EditClient = () => {
  return (
    <div>EditClient</div>
  )
}

