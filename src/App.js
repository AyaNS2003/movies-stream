import Window from './Window';

function App() {
  const styling = {
    background: 'linear-gradient(to right, #FFA41C, #1D1D1D)',
    height: '100vh',
    margin: 0,
    position: 'relative',
    top: 0,
    left: 0
  };

  return (
    <div className="App"style={styling}>
      <Window/>
    </div>
  );
}

export default App;
