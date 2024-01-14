import React from 'react'

function Darkmode() {
    let mystyle ={
        color:'red',
        backgroundColor:'blue'

    }
  return (
    <>  
    <div className='container' style={mystyle}>
    <h1>this is h1</h1>
    <h1>this is h1</h1>
    <div>darkmode</div>
  <button>Dark mode</button>
  </div>
    </>
  )
}

export default Darkmode