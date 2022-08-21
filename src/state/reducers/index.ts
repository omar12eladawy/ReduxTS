import { combineReducers } from "redux";
import reposreducer from "./reporeducers";

const reducers = combineReducers({
    repos: reposreducer
});

export default reducers

export type RootState = ReturnType<typeof reducers>