export default (state, action) => {
  switch (action.type) {
    case "GET_TRANSACTION":
      return {
        ...state,
        laoding: false,
        transactions: action.payload
      };
    case "TRANSACTIONS_ERROR":
      return {
        ...state,
        laoding: false,
        error: action.payload
      };
    case "DELETE_TRANACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction._id !== action.payload
        )
      };
    case "ADD_TRANACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      };
    default:
      return state;
  }
};
