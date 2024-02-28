import { createStore } from "vuex";

export default createStore ({
    state: {
        scrollToTarget: '#home',    
    },
    mutations: {
        setScrollTarget(state, target) {
            state.scrollToTarget = target;
        }
    }

});