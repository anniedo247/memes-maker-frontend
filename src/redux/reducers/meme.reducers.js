import * as types from "../constants/meme.constants";

const initialState = {
  memes: [],
  totalPages: 1,
  loading: false,
};

const memeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // Get Meme List
    case types.GET_MEMES_REQUEST:
      return { ...state, loading: true };
    case types.GET_MEMES_SUCCESS:
      return {
        ...state,
        memes: payload.memes,
        totalPages: payload.totalPages,
        loading: false,
      };
    case types.GET_MEMES_FAILURE:
      return { ...state, loading: false };
    //Create New Meme
    case types.CREATE_MEME_REQUEST:
        return { ...state, loading: true };
    case types.CREATE_MEME_SUCCESS:
      return {
        ...state,
        selectedMeme: {
          ...state.selectedMeme,
          ...payload,
          localImageUrl: `${process.env.REACT_APP_BACKEND_API}/${
            payload.outputMemePath.split("public/")[1]
          }?${payload.updatedAt}`,
        },
        loading: false,
      };
    case types.CREATE_MEME_FAILURE:
      return { ...state, loading: false };
    
    case types.SET_SELECTED_MEME:
      return { ...state, selectedMeme: payload };
    default:
      return state;
  }
};

export default memeReducer;
