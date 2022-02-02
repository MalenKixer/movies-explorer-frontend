import './Main.css';
import React from 'react';
import Promo from '../Promo/Promo';
import Footer from '../Footer/Footer';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import HeaderMain from '../HeaderMain/HeaderMain';

const Main = React.memo((props) =>{
    return (
    <main className="content">
        <HeaderMain></HeaderMain>
        <Promo></Promo>
        <NavTab></NavTab>
        <AboutProject></AboutProject>
        <Techs></Techs>
        <AboutMe></AboutMe>
        <Footer></Footer> 
    </main>
  )
})

export default Main;