import { createSelector } from "reselect";

// const LOG_COLOR = "color: blue; font-size: 24px;";

const selectCategoryReducer = (state) => {
  // console.log("%c[selectCategoryReducer] : fired", LOG_COLOR);

  return state.categories;
};

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    // console.log("%c[selectCategories] : fired", LOG_COLOR);

    return categoriesSlice.categories;
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((accumulator, category) => {
      const { title, items } = category;
      accumulator[title.toLowerCase()] = items;
      return accumulator;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
