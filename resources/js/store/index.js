import { createStore } from 'vuex';
import user from './modules/user';
import status from './modules/statusLoading';
import equipments from './modules/equipments';
import dialoginfo from './modules/dialogInfo';

const store = createStore({
    modules: {
        user,
        status,
        equipments,
        dialoginfo
    }
});

export default store;
