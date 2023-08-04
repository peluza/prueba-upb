import React, { useEffect, useState } from 'react'
import { getUserApi, deleteUserApi } from '../../api/UserApi';

export default function UserList() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchData() {
      const users = await getUserApi()
      setUsers(users)
    }
    fetchData()
  }, []);

  const hadleDeleteUser = async (id) => {
    async function fetchData() {
      console.log("onclick")
      await deleteUserApi(id)
      const users = await getUserApi()
      setUsers(users)
    }
    fetchData()
  }

  return (
    <div>
      <div className='col-md-4'>
        {users.map((item, index) => (
          <div className="card mb-4" key={index}>
            <div className="card-header">
              {"Datos del usuairo " + item.usario}
            </div>
            <h5 className="card-title">{item.nombres + item.apellidos}</h5> 
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{item.correo}</li>
            </ul>
            <a href="#" className="btn btn-primary">Editar</a>
            <button type='button' className="btn btn-danger" onClick={() => { hadleDeleteUser(item.userId) }}>Eliminar</button>
          </div>
        ))}
    </div>
    </div >
  )
}
