import { Routes, Route} from 'react-router-dom'
import Header from './components/Header';
// import Nav from './components/Nav'
import './App.css';
import Articles from './components/Articles'

function App() {
  return (
    <div className="App">
     <Header />
     {/* <Nav /> */}
    <Routes>
      <Route path="/" element={<Articles />}></Route>
     
    </Routes>
    </div>
  );
}

export default App;
