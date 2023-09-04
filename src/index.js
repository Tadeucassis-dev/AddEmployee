import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@chakra-ui/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import AddEmployee from './pages/AddEmployee';
import RegisteredEmployees from './pages/RegisteredEmployees';
ReactDOM.render(
  <Router>
    <ChakraProvider theme={theme}>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Add-employee" element={<AddEmployee />} />
          <Route path="/RegisteredEmployees" element={<RegisteredEmployees />} />
        </Routes>
      </React.StrictMode>
    </ChakraProvider>
  </Router>,
  document.getElementById('root')
);