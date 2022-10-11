import React from 'react'
import ReduxStore from './ReduxStore/Store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import ShowListOfTask from './Components/ShowListOfTask';
import './styles.css'

function App() {
  return (
    <>
      <Provider store={ReduxStore}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tasks' element={<ShowListOfTask />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
