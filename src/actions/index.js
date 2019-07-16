export const setMovies = (movies) => ({
  type: 'SET_MOVIES',
  movies
})

export const setLoggedInUser = (user) => ({
  type: 'SET_LOGGED_IN_USER',
  user
})

export const signOutUser = (user) => ({
  type: 'SIGN_OUT_USER',
  user
})
