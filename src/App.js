import NavBar from './Components/Nav/NavBar';
import CharacterDescription from './Components/Body/CharacterDescription';
import Content from './Components/Body/Content';
import "./App.scss"


function App() {
  return (
 <div className="app">
      <NavBar/>
      <CharacterDescription/>
      <Content/>
    </div>
  )
}

export default App;
