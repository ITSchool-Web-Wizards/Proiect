import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import { Navbar } from './components/navbar';
import { Auth } from "./pages/auth";
import { Home } from "./pages/home";
import { Movie } from './pages/movie';
import { TvShow } from './pages/tvshow';
import { Rated } from './pages/rated';


function App() {
  return (
  <>
  <div>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={< Home/>}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/rated" element={<Rated /> }></Route>
        <Route path="/movie/:id" element={<Movie />}></Route>
        <Route path="/tvshow/:id" element={<TvShow />}></Route>
      </Routes>
    </Router> 
  </div>
</>

);
}

export default App
