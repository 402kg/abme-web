import axios from 'axios'

import ENV from '@/env'

export class Request {
    constructor() {
        this.http = axios.create({
            baseHost: ENV.host || '/',
            headers: {
                Authorization: '',
            },
        })
    }

    get(URL = '/', params = { }, headers = { }) {
        return this.http.get(URL, { headers, params })
            .then((response) => response.data)
    }
}

export default new Request()
