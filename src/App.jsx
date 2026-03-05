import './App.css';
import Home from './pages/Home/Home';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar isHome={true} />
      <main style={{ paddingTop: '90px' }}>
        <Home />
      </main>
    </div>
  );
}

export default App;