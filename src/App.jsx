import './App.css'
import data from './assets/data/data.json'
import UserList from './components/UserList'

function App() {

  return (
    <div>
   <UserList data = {data}/>
    </div>
  )
}

export default App
