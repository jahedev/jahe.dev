import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UnderConstruction from './routes/UnderConstruction';
import About from './routes/About';

function App() {
  return (
    <Router>
      <main className='flex flex-col w-screen h-screen'>
        <Routes>
          <Route path='/' element={<UnderConstruction />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
