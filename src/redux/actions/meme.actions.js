import * as types from "../constants/meme.constants";
import api from "../apiService";

const memesRequest = (pageNum) => async (dispatch) => {
  dispatch({ type: types.GET_MEMES_REQUEST });
  try {
    const url = `/memes?page=${pageNum}&perPage=9`;
    const res = await api.get(url);
    console.log ("res",res.data.memes)
    dispatch({ type: types.GET_MEMES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.GET_MEMES_FAILURE, payload: error });
  }
};

const memeActions = {
  memesRequest,
};

export default memeActions;