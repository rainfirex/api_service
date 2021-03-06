export default {
    state: {
        isLoading: false
    },
    getters: {
        isLoading: state => {
            return state.isLoading;
        }
    },
    mutations: {
        setIsLoading: (state, isStatus) => {
            state.isLoading = isStatus;
        },
    }
}