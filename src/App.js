import './App.css';
import Title from './components/title';
import Conversiontable from './components/conversiontable';
import Conversioninput from './components/conversioninput';

function App() {
  return (
    <div className="App">
    <Title />
    <Conversioninput />
    <Conversiontable />
    </div>
  );
}

export default App;