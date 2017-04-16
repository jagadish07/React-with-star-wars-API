import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import './App.css';
import Swapi from './Components/Swapi';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Star-wars Login</h2>
<form>
<label>
Name:< input type="text" name="name" />
</label>
<div>
<label>
Password:< input type="password" name="password" />
</label>
</div>
<form ref="form" onSubmit={this.handleSubmit}>
    <button type="submit">submit</button>
</form>

</form>
ReactDOM.render((
  <HashRouter>
    <Swapi />
  </HashRouter>
), holder)
     
      </div>
    );
  }
}

export default App;
