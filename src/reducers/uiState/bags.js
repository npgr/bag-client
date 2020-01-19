const defaultState = {
  uiData: ''
}

export default (state = defaultState, { type, payload, meta }) => {
  switch (type) {
    case 'RELOAD':
      return state
    default:
      return state
  }
}
