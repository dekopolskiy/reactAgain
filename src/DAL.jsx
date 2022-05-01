import axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        "API-KEY": "c8d2414e-08fc-4a3c-a2b5-5ba07a434ed8",
    },
    withCredentials: true,
})

export const httpReq = {
    follow: (id) => instance.post(`follow/${id}`, { userId: id }),
    unfollow: (id) => instance.delete(`follow/${id}`),
    getUsers: () => instance.get('users'),
    authMe: () => instance.get('auth/me'),
    getPage: (count, page) => instance.get(`users?count=${count}&page=${page}`),
    getProfile: (id) => instance.get(`profile/${id}`),
}