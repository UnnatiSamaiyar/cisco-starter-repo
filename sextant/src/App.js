import './App.css';

// Exhibit component to wrap child components
function Exhibit({ children }) {
  return (
    <div className="Exhibit">
      {children}
    </div>
  );
}

// Header component with the heading "SEXTANT"
function Header() {
  return (
    <header className="App-header">
      <h1 className="Header-title">SEXTANT</h1>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Exhibit>
        <Header />
        {/* Add other child components here */}
      </Exhibit>
    </div>
  );
}

export default App;

