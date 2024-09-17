import './index.css'

function Card(props) {
const {card} = props;


  return (
      <ul className='card'>
        <li>{card}</li>
      </ul>
  )
}

export default Card