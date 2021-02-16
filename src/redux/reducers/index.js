import { combineReducers } from "redux";
import memeReducer from "../reducers/meme.reducers";

export default combineReducers({
  meme: memeReducer,
});
