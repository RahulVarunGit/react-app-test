import React, { Component }  from 'react';
/*
const Comp = () => {
  return <h1>Component</h1>
};
*/

//Using function component
function Comp2(){
  return (
    <>
      <h1>Function Component</h1>
      <Comp3 />
    </>
  );

}

function Comp3(){
  return(<h1>Additional Component</h1>);
}

export default Comp2;
