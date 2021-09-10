export const initialState = {
  user: null,
  token: null,
  // "BQA406AGQcGPI7auMPPf0bAkwCbmCx2JkIg5apKGqT2Zb3e9Yt…rY3gc2Uw9s2IzTN_qSFD7gxu02n9PL3bBswpnyWQigUFqyqxg",
  playlists: [],
  discover_weekly: null,
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    default:
      return state;
  }
};

export default reducer;
