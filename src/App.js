import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import MainRouter from './mainRouter'
import Header from './header.js'


function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <MainRouter />
    </BrowserRouter>
    </>
  );
}

export default App;
