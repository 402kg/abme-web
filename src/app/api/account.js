import request from '@app/services/request'

class AccountApi {
    static get() {
        return request.get('/user')
    }
}

export default AccountApi
