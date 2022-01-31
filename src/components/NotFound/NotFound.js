import './NotFound.css';
import React from 'react';
const { useNavigate } = require('react-router-dom');

const NotFound = React.memo((props) =>{
   const navigate = useNavigate();
   return(
      <section className='not-found'>
         <h1 className='not-found__title'>404</h1>
         <p className='not-found__subtitle'>Страница не найдена</p>
         <button className='not-found__link' activeClassName='not-found__link_active' onClick={() => navigate(-1)}>Назад</button>
      </section>
   )
})

export default NotFound;