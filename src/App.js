import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Explore from './pages/Explore'
import Contact from './pages/Contact'
import Recommendations from './pages/Recommendations'
import Blog from './pages/Blog';
import NoPage from './pages/NoPage'
  
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='explore' element={<Explore />} />
          <Route path='contact' element={<Contact />} />
          <Route path='recommendations' element={<Recommendations />} />
          <Route path='blog' element={<Blog />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
