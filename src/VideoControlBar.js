import React, { createContext, useState } from 'react';
import './App.css';
export const Context = createContext({});

const controlBar = () => {
  
  return (
    <footer className="controlBar">
        <p>This is the footer</p>
    </footer>
  );

}

export default controlBar
