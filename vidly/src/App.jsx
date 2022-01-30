//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Movies  from  './components/movies';

// function App() {
//   return (
//     <main className="container">
//       <h1>Hello World.</h1>
//     </main>
//   );
// }
 
class App extends Component
{
   render (){
     return (
          <main className="container">
              <Movies />
          </main>
        );
   }
}

export default App;
