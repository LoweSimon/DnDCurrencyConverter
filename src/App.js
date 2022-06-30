import './App.css';
import Header from './components/Header';
import ConversionTable from './components/ConversionTable';
import ConversionInput from './components/ConversionInput';

function App() {
  return (
    <div className="ui container">
    <Header />
    <ConversionInput />
    <ConversionTable />
    </div>
  );
}

export default App;