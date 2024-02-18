function App() {
  const sampleText = 'This is a sample text.';
  const paragraphElement = document.createElement('p');
  const paragraphTextNode = document.createTextNode(sampleText);
  paragraphElement.appendChild(paragraphTextNode);
  paragraphElement.id = 'main-paragraph';
  paragraphElement.className = 'mainElement';

  return paragraphElement;
}

export default App;
