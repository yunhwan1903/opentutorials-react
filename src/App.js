import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Subject extends Component {

    render(){
        return (
            <header>
                <h1>WEB</h1>
                word wide web !
            </header>
        );
    }
}

class Subject2 extends Component {
    render(){
        return (
                <nav>
                    <ul>
                    <li><a href="1.html">HTML</a></li>
                    <li><a href="2.html">CSS</a></li>
                    <li><a href="3.html">JavaScript</a></li>
                    </ul>
                </nav>
        );
    }
}

class Content extends Component {
    render(){
        return (
                <article>
                    <h2>HTML</h2>
                    HTML is HyperText Markup Language.
                </article>
        );
    }
}
class App extends Component {

    render() {
        return (
            <div className="App">
                <Subject></Subject>
                <Subject2></Subject2>
                <Content></Content>
            </div>

        );
    }
}



//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

export default App;
