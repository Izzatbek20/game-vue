import {
    createStore
} from 'vuex'
import {
    getItem,
    setItem
} from '@/helpers/rwLocalStorage';


const store = createStore({
    state() {
        return {
            coin: 0
        }
    },
    mutations: {
        initCoin(state) {
            if (getItem('c_init')) {
                state.coin = getItem('c_init')
            } else {
                setItem('c_init', state.coin)
            }
        },
        changeCoint(state) {
            state.coin += 20
            setItem('c_init', state.coin)
        }
    },
    actions: {
        initCoin(context) {
            context.commit('initCoin')
        },
        changeCoint(context) {
            context.commit('changeCoint')
        }
    },
})

export default store