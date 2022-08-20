import React from "react";

// Import Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import reducers from './reducers'


import { createRoot } from 'react-dom/client';
import App from "./App";

// Setting up redux
const store = createStore(reducers, compose(applyMiddleware(thunk)))


const root = createRoot( document.getElementById("root") );
root.render( <App /> );
