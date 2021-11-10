import './App.css';
import './components/FormSection.css';
import HomePage from './components/HomePage';
import MainPage from './components/MainPage';
import {Route, Routes} from 'react-router-dom';
// import Contact from './components/contact';
// import Chatbot from './components/Chatbot';
// import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Link to="/name">Name</Link> */}
     <Routes>
     <Route path='/' element={<HomePage/>} />
     <Route path='/main' element={<MainPage/>} />
     </Routes>
    </div>
  );
}

export default App;