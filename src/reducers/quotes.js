export default quotes;

function quotes(state = [], action) {
  let idx;
  let quote;
  let quoteUpdated
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];

    case "REMOVE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId )
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    
    case "UPVOTE_QUOTE":
      quote = state.find(quote => quote.id === action.quoteId )
      idx = state.findIndex(quote => quote.id === action.quoteId )
      quoteUpdated = Object.assign({}, quote, {votes: quote.votes + 1})
      return [...state.slice(0, idx), quoteUpdated, ...state.slice(idx + 1)]

    case "DOWNVOTE_QUOTE":
      quote = state.find(quote => quote.id === action.quoteId )
      idx = state.findIndex(quote => quote.id === action.quoteId )
      if (quote.votes > 0) { 
      quoteUpdated = Object.assign({}, quote, {votes: quote.votes - 1})
      return [...state.slice(0, idx), quoteUpdated, ...state.slice(idx + 1)]
      } else {
        return state
      }
    
    default:
      return state;
  }
}
