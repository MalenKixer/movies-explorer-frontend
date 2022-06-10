import { moviesReducer } from "./moviesReducer";
import { userReducer } from "./userReducer";
import { messageReducer } from "./messageReducer";
import { interactiveReducer } from "./interactiveReducer";
import { authReducer } from "./authReducer";
import { movieReducer } from "./movieReducer";
import { searchFormReducer } from "./searchFormReducer";

export const rootReducer = {
  movies: moviesReducer,
  user: userReducer,
  message: messageReducer,
  interactive: interactiveReducer,
  auth: authReducer,
  movie: movieReducer,
  searchForm: searchFormReducer,
};
