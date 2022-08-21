import { ActionInterfaces } from "../actions"
import {ActionTypes} from "../actionstypes"

interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[]
}
const atypes = ActionTypes

const initialState = {
    loading: false,
    error: null,
    data: []
}

const reposreducer = (state: RepositoriesState= initialState, action: ActionInterfaces ): RepositoriesState => {
    switch(action.type) {
        case atypes.SEARCH: 
            return {loading: true, error: null, data: []}
        case atypes.SUCCESS: 
            return {loading: false, error: null, data: action.payload}
        case atypes.ERROR:
            return {loading: false, error: action.payload, data: []}
        default: 
            return state;
    }

}

export default reposreducer