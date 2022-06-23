export default {
    state: {
        user: {}
    },
    getters: {
        getUser: state => {
            return state.user;
        }
    },
    mutations: {
        setUser: (state, user) => {
            state.user = user;
        }
    }
}

