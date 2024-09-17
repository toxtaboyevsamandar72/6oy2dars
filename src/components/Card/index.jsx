import './index.css'

function Card(props) {
  const {data} = props;
  return (
    <div className="container">
      <div className="card">
      <img className='images' src={data.image} alt="" />
      <h1> <span>FirstName: </span>{data.firstName}</h1>
      <h1 className='last'><span>LastName: </span>{data.lastName}</h1>
      <h4><span>Phone: </span>{data.phone}</h4>
      <h3><span>Email: </span>{data.email}</h3>
      <h2><span className='bmw'>Cars: </span>{data.cars}</h2>
    </div>
    </div>
  )
}

export default Card;



 