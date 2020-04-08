import Account from '@/api/account'

const state = {
    isFetching: false,
    isDone: false,
    isLoggedIn: false,
}

const actions = {
    fetch({ commit }) {
        commit('fetchStart', null)

        Account.fetch()
            .then((account) => commit('fetchSuccess', account))
    },
}

const getters = {
    isLoggedIn: (_) => _.isDone && !!_.username,
}

const mutations = {
    fetchStart(_) {
        Object.assign(_, {
            isFetching: true,
        })
    },

    fetchSuccess(_, account) {
        Object.assign(_, {
            isDone: true,
            isFetching: false,
            ...account,
        })
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
