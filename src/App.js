
import './App.css';
import ArcButtonUp from './components/arcButtonUp';
import ArcButtonDown from './components/arcButtonDown';
import ArcButtonRight from './components/arcButtonRight';
import ArcButtonLeft from './components/arcButtonLeft';

function App() {
  return (
    <div className="App">
      <h2>ARC Control Panel</h2>
      <ArcButtonUp/>
      <ArcButtonLeft/>
      <ArcButtonRight/>
      <ArcButtonDown/>
    </div>
  );
}

export default App;
