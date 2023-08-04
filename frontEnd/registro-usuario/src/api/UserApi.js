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

export async function postUserApi(id, request) {
    try {
        const requestOptions = {
            method: 'POST',
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
        };
        const url = `${API_HOST}/${id}`
        const response = await fetch(url, requestOptions)
        const result = await response.json()
        return result  
    } catch (error) {
        throw error
    }
}