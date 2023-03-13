const Q1Form = ({ onSubmit }) => {
  const onAddIngredients = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;

    if (!name || !price) return alert("재료 또는 가격을 입력하세요");

    onSubmit(name, price); // 추가할 데이터를 인자로 q1의 OnSubmit함수 호출
    e.target.name.value = ""; // 추가 뒤 input값 초기화
    e.target.price.value = "";
  };

  return (
    <form onSubmit={onAddIngredients}>
      <label>
        <input type="text" name="name" placeholder="재료" />
      </label>
      <label>
        <input type="number" name="price" placeholder="가격" />
      </label>
      <button type="submit">추가</button>
    </form>
  );
};
export default Q1Form;
