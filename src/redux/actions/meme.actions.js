import * as types from "../constants/meme.constants";
import api from "../apiService";
import { toast } from "react-toastify";

const memesRequest = (pageNum) => async (dispatch) => {
  dispatch({ type: types.GET_MEMES_REQUEST });
  try {
    const url = `/memes?page=${pageNum}&perPage=9`;
    const res = await api.get(url);
    console.log("res", res.data.data.memes);
    dispatch({ type: types.GET_MEMES_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.GET_MEMES_FAILURE, payload: error });
  }
};
const createMemeRequest = (image) => async (dispatch) => {
  dispatch({ type: types.CREATE_MEME_REQUEST, payload: null });
  try {
    const formData = new FormData();
    formData.append("image", image);
    const res = await api.post(`/memes`, formData);
    dispatch({
      type: types.CREATE_MEME_SUCCESS,
      payload: res.data.data,
    });
    toast.success("You can put your idea on the meme now!");
  } catch (error) {
    console.log(error);
    dispatch({ type: types.CREATE_MEME_FAILURE, payload: error });
  }
};

const setSelectedMeme = (meme) => ({
  type: types.SET_SELECTED_MEME,
  payload: meme,
});

const updateMemeRequest = (texts, memeId) => async (dispatch) => {
  dispatch({ type: types.UPDATE_MEME_REQUEST, payload: null });
  try {
    const body = { texts };
    console.log("body",body)
    const res = await api.put(`/memes/${memeId}`, body);
    dispatch({
      type: types.UPDATE_MEME_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: types.UPDATE_MEME_FAILURE, payload: error });
  }
};


const memeActions = {
  memesRequest,
  createMemeRequest,
  setSelectedMeme,
  updateMemeRequest,
};

export default memeActions;
