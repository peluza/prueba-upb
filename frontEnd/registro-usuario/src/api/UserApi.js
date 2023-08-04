import { API_HOST } from "../utils/constants";

export async function getUserApi(){
    try {
        console.log(API_HOST)
        const url = `${API_HOST}`
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (err) {
        throw err;
    }
}

export async function postUserApi(request) {
    try {
        const listaUser = await getUserApi()
        let maxUserid = 2;

        for (let element in listaUser) {
            if(element.userId > maxUserid) {
                maxUserid = element.userId
            }
        }
        request.userId = maxUserid + 1
        console.log(request.userId)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        };
        const url = `${API_HOST}`
        console.log(request)
        const response = await fetch(url, requestOptions)
        const result = await response.json()
        return result  
    } catch (error) {
        throw error
    }
}

export async function putUserApi(id, request) {
    try {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        };
        const url = `${API_HOST}/${id}`
        const response = await fetch(url, requestOptions)
        const result = await response.json()
        return result  
    } catch (error) {
        throw error
    }
}

export async function deleteUserApi(id) {
    try {
        const requestOptions = {
            method: 'DELETE',
            headers : { 
                'Content-Type': 'application/json'
               }
        };
        const url = `${API_HOST}/${id}`
        const response = await fetch(url, requestOptions)
        const result = await response.json()
        return result  
    } catch (error) {
        throw error
    }
}

export async function getUserApiById(id) {
    try {
        console.log(API_HOST)
        const url = `${API_HOST}`
        const response = await fetch(url)
        const result = await response.json()
        return result.find(user => user.userId == id)
    } catch (err) {
        throw err;
    }
}