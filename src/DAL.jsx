import axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        "API-KEY": "c8d2414e-08fc-4a3c-a2b5-5ba07a434ed8",
    },
    withCredentials: true,//cookie не посылается автоматически если стоит CORS, поэтому TRUE
})

export const httpReq = {
    follow: (id) => instance.post(`follow/${id}`, { userId: id }),
    unfollow: (id) => instance.delete(`follow/${id}`),
    getUsers: () => instance.get(`users`),
    getPage: (count, page) => instance.get(`users?count=${count}&page=${page}`),
    authMe: () => instance.get(`auth/me`),
    getProfile: (id) => instance.get(`profile/${id}`),
    getStatus: (id) => instance.get(`profile/status/${id}`),
    setStatus: ( status ) => instance.put(`profile/status`, { status })
}