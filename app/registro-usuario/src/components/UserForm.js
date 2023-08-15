import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { postUserApi, putUserApi } from '../api/users'

export default function UserForm(props) {
    const { userData } = props

    useEffect(() => {
        initialValues(userData)
    },[userData])

    const formik = useFormik({
        validationSchema: Yup.object(validationSchema()),
        initialValues: initialValues(userData.user),
        validateOnChange: false,
        onSubmit: (formData) => {
            try {
                console.log("Fomulario enviado")
                if (userData.title === "Editar Usuarios") {
                    console.log("Enviando datos para su edision")
                    formik.setFieldValue('userId', userData.user.userId)
                    console.log(formData)
                    putUserApi(formData.userId, formData)
                } else  {
                    console.log("Enviando datos para su creacion")
                    postUserApi(formData)
                }
            } catch (error) {
                console.error(error)
            }
        }
    })

    return (
        <View>
            <Text style={styles.title} >{userData.title}</Text>
            <TextInput style={styles.input} placeholder={"Nombre de usuario"} autoCapitalize='none' value={formik.values.usuario} onChangeText={(text) => formik.setFieldValue('usuario', text)} />
            <Text style={styles.error}>{formik.errors.usuario}</Text>
            <TextInput style={styles.input} placeholder={"Nombres"} value={formik.values.nombres} onChangeText={(text) => formik.setFieldValue('nombres', text)} />
            <Text style={styles.error}>{formik.errors.nombres}</Text>
            <TextInput style={styles.input} placeholder={"Apellidos"} value={formik.values.apellidos} onChangeText={(text) => formik.setFieldValue('apellidos', text)} />
            <Text style={styles.error}>{formik.errors.apellidos}</Text>
            <TextInput style={styles.input} placeholder={"Correo"} autoCapitalize='none' value={formik.values.correo} onChangeText={(text) => formik.setFieldValue('correo', text)} />
            <Text style={styles.error}>{formik.errors.correo}</Text>
            <Button title="Enviar" onPress={formik.handleSubmit} />
        </View>
    )
}

function initialValues(userData) {
    const user = {
        nombres: "",
        apellidos: "",
        usuario: "",
        correo: "",
    }
    if (userData.userId != "") {
        user.userId = userData.userId
        user.nombres = userData.nombres
        user.apellidos = userData.apellidos
        user.usuario = userData.usuario
        user.correo = userData.correo
    }
    return user
}

function validationSchema() {
    return {
        nombres: Yup.string().required("Los nombres es obligatorio"),
        apellidos: Yup.string().required("Los Apellidos es obligatorio"),
        usuario: Yup.string().required("El Usuario es obligatorio"),
        correo: Yup.string().email("Correo inválido").required("Correo es obligatorio"),
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    error: {
        textAlign: "center",
        color: "#f00",
        marginTop: 1
    }
})