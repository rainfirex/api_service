export default {
    state: {
        equipments: [],
        paginate: {}
    },
    getters:{
        getEquipments: (state) => {
            return {
                equipments: state.equipments,
                paginate: state.paginate
            };
        },
        getEquipment: (state) => (id) => {
            return state.equipments.find(item => +item.id === +id);
        }
    },
    mutations:{
        setEquipments: (state, {equipments, paginate}) => {
            state.equipments = equipments;
            state.paginate = paginate;
        }
    }
}