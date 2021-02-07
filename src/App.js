import logo from './logo.svg';
import React from 'react';
import Table from './components/Table';
import Nav from './components/Nav';
import './App.css';

class App extends React.Component {
  state = {
    employees: []
  };

render() {
    return (
      <div className="App">
        <header className="App-header">
            <div className="flex items-center">
              <img src={logo} className="App-logo" alt="logo" />
              <p className="text-2xl font-mono">React Directory</p>
            </div>
            <p className="text-2xl font-mono">❤️ Nick Graffis</p>
        </header>
        <section className="App-body">
          <Table />
        </section>
      </div>
    );
  }
}

export default App;
