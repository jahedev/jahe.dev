import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import UnderConstruction from './routes/UnderConstruction';

function App() {
  return (
    <Router>
      <main className='m-auto flex flex-col  items-center w-screen h-screen bg-zwhite-100'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/status' element={<UnderConstruction />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
