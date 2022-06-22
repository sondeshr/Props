
import './App.css';
import Profile from './components/Profile';

function App() {
  const fullName="sondes";
  const bio="Sondes Harizi";
  const profession="developpement web";
  const handleAlert=(x)=>alert(x);
  
  

  return (
    <div className="App">
    <Profile fullName={fullName} bio={bio} profession={profession} handleAlert={handleAlert}/>
    </div>
  );
}

export default App;

