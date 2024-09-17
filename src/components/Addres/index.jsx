import React from 'react';

function Address(props) {
  const { region, zip } = props.data;

  return (
    <div className='address'>
      <p>Region: {region}</p>
      <p>Zip Code: {zip}</p>
    </div>
  );
}

export default Address;
