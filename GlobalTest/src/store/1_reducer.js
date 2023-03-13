export const ingredientsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BTN":
      return [
        ...state, // state의 불변성을 위해 기존 데이터들을 복사해준다.
        {
          id: Math.floor(Math.random() * 100000),
          name: action.payload.name,
          price: action.payload.price,
        },
      ];
    case "DELETE_BTN":
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return alert("에러발생");
  }
};
