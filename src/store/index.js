import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const initialState = { favs: [] };

const favReducer = (state = initialState, action) => {
  if (action.type === "addFav") {
    var copy = [...state.favs];
    //var copy=state.favs
    if (!copy.includes(action.newFav)) {

      copy.push(action.newFav);
      
    } else {
      var index = copy.indexOf(action.newFav);
      if (index !== -1) {
        copy.splice(index, 1);
      }
    }
    console.log("C",copy)
    return { favs: copy };
  }

  return state;
};
const store = createStore(favReducer,applyMiddleware(thunk));
export default store;
