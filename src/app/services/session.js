import { SESSION } from '@app/env'

class SessionService {
    static get() {
        return localStorage.getItem(SESSION) || null
    }

    static set(token = null) {
        return localStorage.setItem(SESSION, token) || null
    }
}

export default SessionService
