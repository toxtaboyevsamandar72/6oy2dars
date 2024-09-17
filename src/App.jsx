import './App.css'
import data from './assets/data.json'
import Card from './components/Card'

function App() {

  return (
    <div>
    {
        data.length && data.map((el,index) => {
          return <Card key={index} data = {el}/>
        })
      }
    </div>
  )
}

export default App
