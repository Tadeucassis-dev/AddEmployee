import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@chakra-ui/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import AddEmployee from './pages/AddEmployee'; 

ReactDOM.render(
  <Router>
    <ChakraProvider theme={theme}>
      <React.StrictMode>
        <Routes> 
          <Route path="/" element={<Register />} /> 
          <Route path="/Register" element={<Register />} />
          <Route path="/Add-employee" element={<AddEmployee />} />
        </Routes>
      </React.StrictMode>
    </ChakraProvider>
  </Router>,
  document.getElementById('root')
);