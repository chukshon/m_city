const match_reducer = (state: any, action: any) => {
  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default match_reducer
