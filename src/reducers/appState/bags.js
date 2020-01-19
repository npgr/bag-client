const defaultState = {
  data: [],
  loading: false,
  error: false
}

export default (state = defaultState, { type, payload, meta }) => {
  switch (type) {
    case 'FETCH_BAGS_PENDING':
      return {
        ...state,
        loading: true,
        error: false
      }
    case 'FETCH_BAGS_FULFILLED':
      return {
        ...state,
        data: [
          { name: 'Pedro', bags: 5 },
          { name: 'Maria', bags: 5 }
        ],
        loading: false,
        error: false
      }
    case 'FETCH_BAGS_FAILED':
      return {
        ...state,
        data: payload,
        loading: false,
        error: true
      }
    default:
      return state
  }
}
