import { createSlice, configureStore } from "@reduxjs/toolkit";

const collectionSlice = createSlice({
  name: "counter",
  initialState: {
    collection: [],
  },
  reducers: {
    addNewArticle: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.collection.push(action.payload);
    },
  },
});

export const { addNewArticle } = collectionSlice.actions;

export const collectionStore = configureStore({
  reducer: collectionSlice.reducer,
});

// // Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented())
// // {value: 1}
// store.dispatch(incremented())
// // {value: 2}
// store.dispatch(decremented())
// // {value: 1}
