document.addEventListener("DOMContentLoaded", () => {
  // 각각의 const변수에 id값으로 요소 가져오기기
  // const변수는 재할당 불가 let, var는 재할당가능능
  const inputField = document.getElementById("todo-input");
  const addButton = document.getElementById("add-todo-button");
  const todoList = document.getElementById("todo-list");

  function addTodo() {
    // trim 공백을 제거
    const todoText = inputField.value.trim();
    if (todoText !== "") {
      const listItem = document.createElement("li");
      // 리스트 아이템에 CSS 클래스를 추가
      listItem.classList.add("todo-item");
      // 리스트 아이템의 HTML 추가가
      listItem.innerHTML = `
                <span>${todoText}</span>
                <button class="delete-button">삭제</button>
            `;
      todoList.appendChild(listItem);
      // 입력 필드 초기화
      inputField.value = "";
      inputField.focus();
      // 삭제 버튼 클릭 시 해당 리스트 아이템 제거
      listItem.querySelector(".delete-button").addEventListener("click", () => {
        listItem.remove();
      });
    }
  }

  addButton.addEventListener("click", addTodo);
  inputField.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  });
});
