import { Form, useNavigate, useLoaderData, useActionData, redirect } from "react-router-dom";
import { getClient, updateClient } from "../data/clients";
import { FormClient } from "../components/FormClient";
import { Error } from "../components/Error";


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

export async function action({ request, params }) {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  const email = formData.get('email');

  // Validacion
  const errors = [];
  if (Object.values(data).includes('')) {
    errors.push('Todos los campos son obligatorios');
  }

  // Validacion Email
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if (!regex.test(email)) {
    errors.push('El Email no es valido');
  }

  // Retornar datos si hay errores
  if (Object.keys(errors).length) {
    return errors;    
  }

  // Actualizar el cliente
  await updateClient(params.clienteId, data);
  return redirect('/');
  
}

export const EditClient = () => {

  const navigate = useNavigate();
  const client = useLoaderData();
  const errors = useActionData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">A continuacion podras modificar los datos del Cliente</p>
    
      <div className='flex justify-end'>
        <button
          className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
          onClick={ () => navigate('/') }
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        
        { errors?.length && errors.map( (error, i) => <Error key={ i }>{ error }</Error> ) }

        <Form
          method="post"
          noValidate
        >
          <FormClient
            client={ client }
          />

          <input 
            type="submit" 
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
            value="Guardar Cambios"
          />
        </Form>      
      </div>

    </>
  )

}

