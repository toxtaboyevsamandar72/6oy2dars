import Card from "../Card";
import Address from "../Addres";
import "./index.css";

function User(props) {
  const { firstName, lastName, image, cars , address} = props.user;

  return (
    <div className="user">
      <img src={image} alt="" />
      <p className="color">
        {firstName} {lastName}
      </p>

      <Address data={address} />

      {cars.length > 0 &&
        cars.map(function (value, index) {
          return <Card card={value} key={index} />;
        })}
      {cars.length == 0 && <p className="mosh">mashina yo'q</p>}
    </div>
  );
}

export default User;
