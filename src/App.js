import React, { Component } from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

class App extends Component {
  render() {
    const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
    return (
      <div className="App">
<Admin dataProvider={dataProvider}>
<Resource name ="users" list={ListGuesser}/>
<Resource name ="ufg" list={ListGuesser}/>
<Resource name ="sd" list={ListGuesser}/>
</Admin>
      </div>
    );
  }
}

export default App;
