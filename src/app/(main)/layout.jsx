import Header from '@/components/shared/Header';
import MovingElement from '@/components/shared/MovingElement';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div>
            <Header></Header>
            <MovingElement></MovingElement>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default MainLayout;