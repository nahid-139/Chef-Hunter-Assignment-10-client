import React from 'react';
import { Outlet,useNavigation } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const Main = () => {
    const navigation =useNavigation();
    return (
        <div>
            <Header></Header>
            <div>{navigation.state ==='loading'&& 'Loading.....'}</div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;