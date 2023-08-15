import { API_HOST } from "../utils/constants"

export async function getUserApi() {
    try {
        const response = await fetch(API_HOST)
        const result = await response.json()
        return result
    } catch (err) {
        throw err;
    }
}

export async function putUserApi(id, request) {
    try {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(request)
        };
        const url = `${API_HOST}/${id}`
        console.log(url)
        const response = await fetch(url, requestOptions)
        if (response.ok) {
            const result =  response.status;
            console.log(result)
            return result;
        }
    } catch (error) {
        throw error
    }
}

export async function postUserApi(request) {
    try {
        const listaUser = await getUserApi()
        let maxUserid = 2;

        for (let element in listaUser) {
            if (element.userId > maxUserid) {
                maxUserid = element.userId
            }
        }
        request.userId = maxUserid + 20
        console.log(request.userId)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(request)
        };
        const url = `${API_HOST}`
        const response = await fetch(url, requestOptions)
        if (response.ok) {
            const result = response.status;
            console.log(result)
            return result;
        }
    } catch (error) {
        throw error
    }
}

export async function deleteUserApi(id) {
    try {
        const requestOptions = {
            method: 'DELETE'
        };
        const url = `${API_HOST}/${id}`
        console.log(url)
        const response = await fetch(url, requestOptions)
        if (response.ok) {
            const result = response.status;
            console.log(result)
            return result;
        }
    } catch (error) {
        throw error
    }
}