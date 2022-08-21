import axios from 'axios'
import { Action, Dispatch } from 'redux'
import { ActionTypes } from '../actionstypes'
import { ActionInterfaces} from '../actions'

export const SearchRepos =  (term: string) => {
    return async (dispatch: Dispatch<ActionInterfaces>) : Promise<void> => {
        dispatch({
            type: ActionTypes.SEARCH
        })
        try {
            console.log('we are in the try block')
            const {data} = await axios.get('https://registry.npmjs.org/v1/search/', {
                params: {
                    text: term
                }
            })

            console.log("data from the api", data)

            const names = data.objects.map((result: any) => {
                return result.package.name
            })
            dispatch({
                type: ActionTypes.SUCCESS,
                payload: names
            })
        } catch (err: any) {
            dispatch({
                type: ActionTypes.ERROR,
                payload: err.message
            })
        }
    }
}