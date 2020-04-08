import ENV from '@/env'

export default class Session {
    static get() {
        return localStorage.getItem(ENV.session)
    }

    static set(token = '') {
        localStorage.setItem(ENV.session, token)
    }
}
