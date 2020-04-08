import ENV from '@/env'
import request from '@/services/http'

export default class Account {
    static fetch() {
        return request.get(ENV.account)
    }
}
