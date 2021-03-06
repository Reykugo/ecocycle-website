import { SET_LANGUAGE} from '../../utils/CONST';

const intialState = {
    language: "FR",
}

export default (state = intialState, action = {}) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.language,
            }
        default: return state;
    }
}
