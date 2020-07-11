export default function home(state = [], action) {
  switch (action.type) {
    case "ADD_TO_HOME":
      // return [...state, action.product];
      console.log(action);
    default:
      return state;
  }
  return [];
}
