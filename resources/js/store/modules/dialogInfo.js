export default {
    state: {
        dialog:{
            text: '',
            isError: false
        }
    },
    getters: {
        getDialog: (state) => state.dialog
    },
    mutations: {
        setDialog: (state, dialog) => {
            state.dialog = dialog;
        }
    }
}