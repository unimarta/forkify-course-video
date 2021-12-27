import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

//const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id);

    if (!id) return;
    recipeView.renderSpinner();
    /// 0. update results view to mark selected search results
    resultsView.update(model.getSearchResultsPage());
    //1. updating bookmarks
    bookmarksView.update(model.state.bookmarks);
    /// 2. loading recipe
    await model.loadRecipe(id);
    //const { recipe } = model.state;
    ///3. rendering recipe
    recipeView.render(model.state.recipe);
    //const recipeView = new recipeView(model.state.recipe);
  } catch (err) {
    console.log(err);
    recipeView.renderError();
    console.error(err);
  }
};
const controlSearchResults = async function () {
  try {
    //resultsView.renderSpinner();
    //get search query
    const query = searchView.getQuery();
    if (!query) return;
    //load search results
    await model.loadSearchResults(query);
    //render results
    //console.log(model.state.search.results);
    //console.log(model.getSearchResultsPage(1));
    resultsView.render(model.getSearchResultsPage());
    ///render the initial pagination buttons
    paginationView.render(model.state.search);
    ///test
    // controlServings();
  } catch (err) {
    console.log(err);
  }
};
controlSearchResults();

const controlPagination = function (goToPage) {
  //console.log(goToPage);
  //render new results
  resultsView.render(model.getSearchResultsPage(goToPage));
  //render new pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  //update the recipe servings (in state)
  model.updateServings(newServings);
  //update the recipeView
  //recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};
const controlAddBookmark = function () {
  ///1).add or remove a bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);
  //console.log(model.state.recipe);
  //2).update recipe view
  recipeView.update(model.state.recipe);
  ///3).render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    //show loading spinner
    addRecipeView.renderSpinner();
    //upload the new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    //render recipe
    recipeView.render(model.state.recipe);
    //success message
    addRecipeView.renderMessage();
    //render bookmark view
    bookmarksView.render(model.state.bookmarks);

    //change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    //window.history.back();
    //close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error('💥', err);
    addRecipeView.renderError(err.message);
  }
};
const newFeature = function () {
  console.log('Welcome to the application');
};
const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
  newFeature();
};
init();
