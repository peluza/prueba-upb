import React, { useEffect, useState } from 'react'
import { getUserApi, deleteUserApi } from '../../api/UserApi'
import NewUser from '../form/NewUser'
import EditUser from '../form/EditUser'
import { Modal, Row, Col, Card, ListGroup, Button } from 'react-bootstrap'

export default function UserList() {

  const [users, setUsers] = useState([])
  const [seEdit, setEdit] = useState(false)
  const [seeNew, setNew] = useState(false)
  const [userId, setUserId] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const users = await getUserApi()
      setUsers(users)
    }
    fetchData()
  }, []);

  const hadleDeleteUser = async (id) => {
    async function fetchData() {
      await deleteUserApi(id)
      const users = await getUserApi()
      setUsers(users)
    }
    fetchData()
  }

  const hadleEditUser = (userId) => {
    setUserId(userId)
    if (seeNew) {
      setEdit(true)
      setNew(false)
    } else {
      setEdit(true)
    }

  }

  const hadleNewUser = () => {
    if (seEdit) {
      setNew(true)
      setEdit(false)
    } else {
      setNew(true)
    }

  }

  const handleCloseNew = () => setNew(false);
  const handleCloseEdit = () => setEdit(false);

  return (
    <div>
      <Row className=" justify-content-center align-items-center">
        <Col xs={20} sm={16}>
          <div className='text-center'>
            <div className='col-md-4'>
              <h2>Nuevo Usuario</h2>
              <button className="btn btn-primary" onClick={hadleNewUser}>Nuevo</button>
              {users.map((item, index) => (
                <Card className='text-center' key={index}>
                  <ListGroup variant="flush">
                    <ListGroup.Item> {"Datos del usuairo " + item.usuario} </ListGroup.Item>
                    <ListGroup.Item>{item.nombres}</ListGroup.Item>
                    <ListGroup.Item>{item.apellidos}</ListGroup.Item>
                    <ListGroup.Item>{item.correo}</ListGroup.Item>
                  </ListGroup>
                  <Button className="btn btn-primary" onClick={() => hadleEditUser(item.userId)}>Editar</Button>
                  <Button type='button' className="btn btn-danger" onClick={() => hadleDeleteUser(item.userId)}>Eliminar</Button>
                </Card>
              ))}
              {/* {seeNew ? <NewUser />: null} */}
              {/* {seEdit ? <EditUser userId={userId} /> : null} */}
              <Modal show={seeNew} onHide={handleCloseNew}>
                <Modal.Header closeButton>
                  <Modal.Title>Nuevo Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <NewUser />
                </Modal.Body>
              </Modal>
              <Modal show={seEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                  <Modal.Title>Editar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <EditUser userId={userId} />
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </Col>
      </Row>
    </div >
  )
}
