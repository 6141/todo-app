export const saveTodoToLocalStorage = () => {
     const existingTodos = JSON.parse(localStorage.getItem('todos')) || [];
     existingTodos.push(todo);
     localStorage.setItem('todos', JSON.stringify(existingTodos));
     return true
}