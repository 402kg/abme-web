import axios from 'axios'

import { API } from '@app/env'
import SessionService from './session'

export class Request {
    constructor() {
        this.http = axios.create({
            baseURL: API,
            headers: { 'Cache-Control': 'no-cache' },
        })
    }

    get(url = '/', params = { }) {
        const Authorization = SessionService.get()

        return this.http.get(url, { headers: { Authorization }, params })
            .then((res) => res.data)
    }

    delete(url = '/', params = { }) {
        const Authorization = SessionService.get()

        return this.http.delete(url, { headers: { Authorization }, params })
            .then((res) => res.data)
    }

    patch(url = '/', data = { }, params = { }) {
        const Authorization = SessionService.get()

        return this.http.patch(url, data, { headers: { Authorization }, params })
            .then((res) => res.data)
    }

    put(url = '/', data = { }, params = { }) {
        const Authorization = SessionService.get()

        return this.http.put(url, data, { headers: { Authorization }, params })
            .then((res) => res.data)
    }

    post(url = '/', data = { }, params = { }) {
        const Authorization = SessionService.get()

        return this.http.post(url, data, { headers: { Authorization }, params })
            .then((res) => res.data)
    }
}

export default new Request()
