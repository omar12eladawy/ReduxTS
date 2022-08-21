import React from 'react';
import { Provider } from 'react-redux';
import { store } from './state';
import ReposList from './components /ReposList';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">   
    <ReposList></ReposList>
    </div>
    </Provider>
  );
}

export default App;
