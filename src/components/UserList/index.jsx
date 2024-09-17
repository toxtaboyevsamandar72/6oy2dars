import './index.css'
import User from '../User'



function UserList(props) {
const {data} = props;


  return (
    <div className='user-list'>
      {
        data.length > 0 && data.map(function(value, index) {
          return (
          <User user = {value} key = {index}/>
        )
        })
      }
    </div>
  )
}

export default UserList