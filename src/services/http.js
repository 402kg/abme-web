import axios from 'axios'

import ENV from '@/env'

import Session from '@/services/session'

export class Request {
    constructor() {
        this.http = axios.create({
            baseURL: ENV.host || '/',
            headers: {
                Authorization: Session.get(),
            },
        })
    }

    get(URL = '/', params = { }, headers = { }) {
        return this.http.get(URL, { headers, params })
            .then((response) => response.data)
    }
}

export default new Request()
