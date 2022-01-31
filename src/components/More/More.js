import './More.css';
import React from 'react';

const More = React.memo((props) =>{
    return (
    <section className="more">
      <button className="more__button" name="submit" type="submit" onClick=''>Ещё</button>
    </section>
  )
})

export default More;