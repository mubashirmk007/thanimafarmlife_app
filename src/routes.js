import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';

function CustomRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default CustomRoutes