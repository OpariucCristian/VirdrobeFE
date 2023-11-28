import { createSlice, configureStore } from "@reduxjs/toolkit";
import { ArticleTypesEnum } from "../constants/ArticleTypesConstant";

const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    collection: [
      {
        type: ArticleTypesEnum.T_SHIRT,
        articles: [],
      },
    ],
  },
  reducers: {
    addNewArticle: (state, action) => {
      const typeAlreadyExists = state.collection.find(
        (collectionItem) => collectionItem.type === action.payload.type
      );

      if (typeAlreadyExists) {
        state.collection[
          state.collection.indexOf(typeAlreadyExists)
        ].articles.push(action.payload);
      } else {
        state.collection.push({
          type: action.payload.type,
          articles: [action.payload],
        });
      }
    },
  },
});

export const { addNewArticle } = collectionSlice.actions;

export const collectionStore = configureStore({
  reducer: collectionSlice.reducer,
});

// store.subscribe(() => console.log(store.getState()))
