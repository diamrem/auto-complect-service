import './App.css';
import Block_ford_cards from "./Block_ford_cards"
// Это корневой компонент
// Сохраняйте компоненты в папке components
// Если создаёте универсальный компонет (например кнопка) сохраняйте в папку components/generic
// Для своих корневых компонентов можно создавать свои подпапки. Например components/products для компонета автомобиля


function App() {
  return (
    <div className="App">
      <Block_ford_cards />

    </div>
  );
}

export default App;