import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import ViewBook from './component/pages/ViewBook';
import AddBook from './component/pages/AddBook';
import EditBook from './component/pages/EditBook';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/viewBook/:id' element={<ViewBook />} />
          <Route path='/addBook' element={<AddBook />} />
          <Route path='/EditBook/:id' element={<EditBook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
