import './NotFound.css';
const { NavLink } = require('react-router-dom');
function NotFound(props){
   return(
      <div className='not-found'>
         <h1 className='not-found__title'>404</h1>
         <p className='not-found__subtitle'>Страница не найдена</p>
         <NavLink className='not-found__link' activeClassName='not-found__link_active' to=''>Назад</NavLink>
      </div>
   )
}

export default NotFound;