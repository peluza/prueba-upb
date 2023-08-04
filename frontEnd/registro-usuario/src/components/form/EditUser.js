import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { getUserApiById, putUserApi } from "../../api/UserApi";
import { USER } from "../../utils/constants";

export default function EditUser(props) {
    const [formdata, setFormData] = useState(USER);

    const { userId } = props
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSumit = (e) => {
        e.preventDefault();
        putUserApi(userId, formdata)
    }

    useEffect(() => {
        async function fetchData() {
          const users = await getUserApiById(userId)
          setFormData(users)
          console.log(users)
          console.log(formdata)
        }
        fetchData()
      }, [userId]);

    return (
        <div>
            <Form onSubmit={handleSumit}>
                <Form.Group className="mb-3" controlId="nombres">
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombres"
                        value={formdata.nombres}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="apellidos">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control
                        type="text"
                        name="apellidos"
                        value={formdata.apellidos}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="usuarios">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                        type="text"
                        name="usuarios"
                        value={formdata.usuario}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="correo">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        name="correo"
                        value={formdata.correo}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Enviar</Button>
            </Form>
        </div>
    );
}
