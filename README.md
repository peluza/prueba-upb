# PRUEBA UPB

Este proyecto consiste en un CRUD (Crear, Leer, Actualizar, Eliminar) de registros de usuario, con un enfoque en el backend desarrollado en C# con .NET, y un frontend web en React, así como una aplicación móvil en React Native.

## Características
### Backend (.NET):

- Endpoint para crear un nuevo usuario.
- Endpoint para obtener la lista de usuarios.
- Endpoint para actualizar los datos de un usuario.
- Endpoint para eliminar un usuario.

### Frontend (React):

- Interfaz para mostrar la lista de usuarios.
- Formulario para agregar/editar usuarios.
- Integración con los endpoints del backend para realizar operaciones CRUD.

### Aplicación móvil (React Native):

- Pantallas para listar, crear, actualizar y eliminar usuarios.
- Consumo de los endpoints proporcionados por el backend para gestionar los usuarios.


## Tecnologías Utilizadas
- Backend: C# con .NET
- Frontend: React
- Aplicación móvil: React Native

## Inicio Rápido
Clona este repositorio: git clone https://github.com/peluza/prueba-upb

### Backend (.NET):

Abre la solución en tu IDE de preferencia (por ejemplo, Visual Studio). En la carpeta backEnd 
Configura la cadena de conexión a la base de datos en Profram.cs.
y ejecuta el comando:

```
dotnet run
```

### Frontend (React):

Navega a la carpeta frontEnd en la línea de comandos.
Ejecuta el siguiente comando para instalar las dependencias.

```
npm install
``` 

Luego ejecuta el siguiente comando  para iniciar el servidor de desarrollo.

```
 npm start
```

### Aplicación móvil (React Native):

Navega a la carpeta app en la línea de comandos.
Ejecuta el siguiente comando  para instalar las dependencias.
```
npm install
```
Ejecuta el siguiente comando  para iniciar la aplicación en expo y probarla en un dispositivo Android o IOS por medio del programa expo.

```
npm start
```

## Librerias usadas


### Librerias usadas en react

- bootstrap

### Librerias usadas en reac-native

- @react-navigation/native 
- react-native-screens
- react-native-safe-area-context
- @react-navigation/native-stack
- @react-navigation/bottom-tabs
- react-native-vector-icons
- @react-navigation/stack
- formik
- yup

