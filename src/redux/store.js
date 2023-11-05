import { createStore  , combineReducers , applyMiddleware} from "redux";
import bookReducer from "./reducers/bookReducer";
import googleBookApiReducer from "./reducers/googleBookApiReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    book : bookReducer ,
    googleBookApi : googleBookApiReducer
})

const store = createStore(rootReducer , composeWithDevTools(applyMiddleware(thunk)));
export default store;