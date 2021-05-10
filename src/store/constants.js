export default {
  status: {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected',
  },
  type: {
    FETCH_COLORS: 'FETCH_COLORS',
    FETCH_LOCATIONS: 'FETCH_LOCATIONS',
    FETCH_POKEMON: 'FETCH_POKEMON',
    FETCH_POKEMONS: 'FETCH_POKEMONS',
    FETCH_SPECIES: 'FETCH_SPECIES',
    USER_LOGIN: 'USER_LOGIN',
    USER_LOGOUT: 'USER_LOGOUT',
    USER_ERROR: 'USER_ERROR',
    SELECT_TO_COMPARE_A: 'SELECT_TO_COMPARE_A',
    SELECT_TO_COMPARE_B: 'SELECT_TO_COMPARE_B',
  },
  payload: {
    meta: {
      initialised: 'initialised',
      uninitialised: 'uninitialised',
      logged_in: 'logged_in',
      logged_out: 'logged_in',
    },
  },
}
