import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from "./components/Main";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import reducers from './reducers';
import CityView from "./components/CityView";
import thunk from "redux-thunk";

const root = ReactDOM.createRoot(document.getElementById('root'));
const reduxStore = createStore(reducers,applyMiddleware(thunk))
root.render(
  <React.StrictMode>
    {/*<App />*/}
      <Provider store={reduxStore}>
          {/*<Main />*/}
          <CityView />
      </Provider>
  </React.StrictMode>
);


