import axios from "axios";

export const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
})

export const apiGet = async (path) => {
    return apiClient.get(path)
}

export const apiPost = async (path, body) => {
    return apiClient.post(path, body)
}

export const apiPatch = async (path, body) => {
    return apiClient.patch(path, body)
}
