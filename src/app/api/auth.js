import request from '@app/services/request'

class AuthApi {
    static resetPassword({ email }) {
        return request.put('/auth/password/reset', { email })
    }

    static setPassword({ password }) {
        return request.put('/auth/password/set', { password })
    }

    static signIn(payload) {
        return request.post('/auth/sign/in', payload)
    }

    static signOut() {
        return request.delete('/auth/sign/up')
    }

    static signUp(payload) {
        return request.put('/auth/sign/up', payload)
    }

    static touchEmail(email) {
        return request.get(`/touch/email/${email}`)
    }

    static touchUsername(username) {
        return request.get(`/touch/username/${username}`)
    }
}

export default AuthApi
