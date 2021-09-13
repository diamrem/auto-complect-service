import './App.css';
import Spec_display from './components/hull_specs_display';
// Это корневой компонент
// Сохраняйте компоненты в папке components
// Если создаёте универсальный компонет (например кнопка) сохраняйте в папку components/generic
// Для своих корневых компонентов можно создавать свои подпапки. Например components/products для компонета автомобиля


function App() {
  return (
    <div className="App">
      <Spec_display />
    </div>
  );
}

export default App;