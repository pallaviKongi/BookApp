const initialState = {
  booksList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BOOKS':
      return { booksList: [...action.payload] };
    case 'DELETE_BOOK':
      return {
        booksList: [
          ...state.booksList.filter((val, index) => index !== action.payload)
        ]
      };
    case 'ADD_BOOK':
      let updatedBookList = [...state.booksList];
      updatedBookList.push(action.payload);
      return { booksList: updatedBookList };
    default:
      return state;
  }
};
