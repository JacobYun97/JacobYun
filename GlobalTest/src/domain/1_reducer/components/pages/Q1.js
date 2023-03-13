import React, { useReducer, useState } from "react";
import NavigateButton from "../../../../components/NavigateButton";
import { ingredientsReducer } from "../../../../store/1_reducer";
import Q1Form from "../atom/Form";
import ReducerQ1List from "../atom/List";

const ReducerQ1Page = () => {
  /* 
      문제 1)
      로직 분리하기
    
      재료 추가 로직 분리하기

      1) 재료 추가 로직 작성하기 
      2) 재료 삭제 로직 작성하기 
       > 1_reducer.js에 reducer 코드 작성

      3) 위 로직을 현재 컴포넌트가 아닌 비즈니스 로직을 분리하여
          src/store/1_reducer.js에 구현해보세요
    */

  const [ingredients, dispatch] = useReducer(ingredientsReducer, [
    // state와 action을 발생 시킬 함수, 초기값
    { id: 1, name: "피자 도우", price: 1000 },
    { id: 2, name: "토마토 소스", price: 500 },
    { id: 3, name: "치즈", price: 1000 },
    { id: 4, name: "피망", price: 500 },
    { id: 5, name: "양파", price: 500 },
  ]);

  const onSubmit = (name, price) => {
    dispatch({
      type: "ADD_BTN",
      payload: {
        name,
        price,
      },
    });
  };
  const onDeleteIngredient = (id) => {
    dispatch({ type: "DELETE_BTN", payload: { id } });
  };
  console.log(ingredients);
  return (
    <>
      <h2>문제 1</h2>
      <table>
        <thead>
          <tr>
            <th>재료</th>
            <th>가격</th>
          </tr>
        </thead>
        <ReducerQ1List
          ingredients={ingredients}
          onDeleteIngredient={onDeleteIngredient}
        />
      </table>
      <Q1Form onSubmit={onSubmit} />
      <NavigateButton isFistPage to={"/2_context/q1"} />
    </>
  );
};
export default ReducerQ1Page;
