import {
    createStore as reduxCreateStore,
    applyMiddleware,combineReducers
} from 'redux';
import { UsersReducer } from "../users/reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../../sagas/index";
import { reducer as formReducer } from 'redux-form'

export default function createStore() {
    const sagaMiddleware = createSagaMiddleware();
    const rootReducer = combineReducers({
        form: formReducer,
        weather: UsersReducer
        })
    const store = reduxCreateStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(rootSaga);

    return store
}
