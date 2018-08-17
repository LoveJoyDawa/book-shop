"use strict";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers/index";
import { addToCart } from "./actions/cartActions";
import { postBooks, deleteBooks, updateBooks } from "./actions/booksActions";
import logger from "redux-logger";

//STEP 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import BooksList from "./components/pages/booksList";

render(
  <Provider store={store}>
    <BooksList />
  </Provider>,
  document.getElementById("app")
);

//STEP2 create the dispatch action
/* store.dispatch(
  postBooks([
    
  ])
); */

/* //DELETE a book
store.dispatch(
  deleteBooks({
    id: 1
  })
);

//UPDATE a book
store.dispatch(
  updateBooks({
    id: 2,
    title: "Learn react in 24h"
  })
);

//-->> CART ACTIONS <<--
//ADD to cart
store.dispatch(addToCart([{ id: 1 }])); */
