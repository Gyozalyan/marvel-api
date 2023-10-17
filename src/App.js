import NavBar from './Components/Nav/NavBar';
import CharacterDescription from './Components/Body/CharacterDescription';
import Content from './Components/Body/Content';
import "./App.scss"

// import { useState } from 'react';


function App() {

  // const [selectedChar, setSelectedChar] = useState(null)

  // const onSelectChar = (id)=>{
  //   selectedChar(id)
  // }

  return (
 <div className="app">
      <NavBar/>
      <CharacterDescription/>
      <Content/>
    </div>
  )
}

export default App;
