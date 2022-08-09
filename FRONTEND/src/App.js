import {Route} from 'react-router-dom'
import './App.css';
import PlayerRegistration from './user/PlayerRegistration';

function App() {
  return (
    <div className="App">
      <Route path ="/registration" component={PlayerRegistration} />
    
    </div>
  );
}

export default App;
