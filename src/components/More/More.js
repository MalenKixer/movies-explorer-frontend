import './More.css';
import React from 'react';

const More = React.memo((props) =>{
    return (
    <section className="more">
      <button className={props.addButton ? 'more__button' : 'more__button_disabled'} name="submit" type="submit" onClick=''>Ещё</button>
    </section>
  )
})

export default More;