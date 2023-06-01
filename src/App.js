import { Route, Routes } from 'react-router-dom';
import './App.css';
import Allrestuarant from './Components/Allrestuarant/Allrestuarant';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ViewRestuarant from './Components/ViewRestuarant';



function App() {
  return (
    <>
<header>
  <Header/>
</header>
<section>
<Routes>
  <Route path="/" element={ <Allrestuarant/>} />
   
  <Route path="/view/:id" element={ <ViewRestuarant/> } />
  
</Routes>
</section>
<footer>
<Footer/>
</footer>
    </>
  );
}

export default App;
