import * as types from './mutation-types'

export default {
  [types.AUTH_LOGIN] (state, payload) {
    throw new Error('AUTH_LOGIN mutation should be implement')
  },
  [types.FETCH_ALL_TASKLIST] (state, payload) {
    throw new Error('FETCH_ALL_TASKLIST mutation should be implement')
  },
  [types.ADD_TASK] (state, payload) {
    throw new Error('ADD_TASK mutation should be implement')
  },
  [types.UPDATE_TASK] (state, payload) {
    throw new Error('UPDATE_TASK mutation should be implement')
  },
  [types.DELETE_TASK] (state, payload) {
    throw new Error('DELETE_TASK mutation should be implement')
  },
  [types.AUTH_LOGOUT] (state, payload) {
    throw new Error('AUTH_LOGOUT mutation should be implement')
  }
}
