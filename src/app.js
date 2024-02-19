import './App.css';
import Products from './components/Products';

function App() {
  const sampleText = 'and it is awesome';

  return (
    <div id="appMainDiv">
      <h1 id="main-h1">This is a React Component {sampleText}</h1>
      <p id="main-p">This is a sample paragraph element</p>
      <Products></Products>
      <button className="btn" type="button">
        Click Me
      </button>
      <input id="textInput" type="text" title="text-input"></input>
    </div>
  );
}

export default App;
