import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { postUserApi } from "../../api/UserApi";
import { USER } from "../../utils/constants";

export default function NewUser() {
    const [formdata, setFormData] = useState(USER);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSumit = (e) => {
        e.preventDefault();
        postUserApi(formdata)
    }

    return (
        <div>
            <Form onSubmit={handleSumit}>
                <Form.Group className="mb-3" controlId="nombres">
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombres"
                        placeholder="Nombres"
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
                        placeholder="Apellidos"
                        value={formdata.apellidos}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="usuario">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                        type="text"
                        name="usuario"
                        placeholder="Usario"
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
