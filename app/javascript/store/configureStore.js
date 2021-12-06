import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { GET_GREETING, GET_GREETING_SUCCESS } from '../components/HelloWorld';

const initialState = {
  greeting: 'Hello From Redux',
  loading: false
};

function rootReducer(state, action) {
  switch (action.type) {
    case GET_GREETING:
      return { ...state, loading: true }
    case GET_GREETING_SUCCESS:
      return { ...state, greeting: action.payload}
    default:
      return state
  }
}

export default function configureStore() {
  const store = createStore(
    rootReducer, 
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
      )
    )
  );
  return store
}