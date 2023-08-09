import './App.css';
import {BrowserRouter ,Routes,Route } from 'react-router-dom'
import Blog from './Blog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Blog/>} to='/blog'/>
        </Routes>
      </BrowserRouter>

      asldfkja;sldkfjfal
    </div>
  );
}

export default App;
