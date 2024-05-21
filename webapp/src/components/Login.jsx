import {useState} from "react";

export const Login = () => {
    const [status   , setStatus] = useState(-1);
    const [users    , setUsers]  = useState([]);

    const submit = async () => {
        const body = JSON.stringify({
            user: document.getElementById('usuario').value,
            password: document.getElementById('password').value
        })

        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body,
        })

        setStatus(response.status)
        const data = await response.json()
        setUsers(data?.users)
    }

    return (
        <div className="flex flex-col w-screen justify-center items-center">
            <div className="mb-4">
                <h1>Inicio sesión</h1>
                <h2 className="text-center">Seguridad Informatica</h2>
            </div>
            <div>
                <form className="card flex flex-col gap-2 mt-4">
                    <div className="flex gap-2 justify-between">
                        <label htmlFor="usuario">Usuario:</label>
                        <input type="text" id="usuario" name="usuario"></input>
                    </div>
                    <div className="flex gap-2 justify-between mb-2">
                        <label htmlFor="password">Contraseña:</label>
                        <input type="text" id="password" name="password"></input>
                    </div>
                    <button type="submit" onClick={async (event) => {
                        event.preventDefault()
                        await submit();
                    }}>Iniciar sesión</button>
                </form>
            </div>

            {
                status !== -1 &&
            <div className="flex flex-col gap-2 mt-4">
                <div>
                    <h2 className="text-2xl ">{ status === 200 ? 'Bienvenido a nuestro sistema' : 'Tus credenciales son invalidas'}</h2>
                </div>
                {status === 200 && users?.length > 0 && <div>
                    <h2>Información usuario</h2>
                    <ul className="flex flex-wrap flex-col ">
                        <li>
                            <p>Nombre: {users[0].name}</p>
                            <p>Apellido: {users[0].lastname}</p>
                            <p>Correo: {users[0].email}</p>
                        </li>
                    </ul>
                </div>}
            </div>
            }
        </div>
    )
}