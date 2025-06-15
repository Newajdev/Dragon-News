import React from 'react';
import Header from '../Header/Header';

const Container = ({children}) => {
    return (
        <div className='max-w-7xl mx-auto mt-12'>
            {children}
        </div>
    );
};

export default Container;