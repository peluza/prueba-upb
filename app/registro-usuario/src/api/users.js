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