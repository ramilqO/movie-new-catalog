import React from 'react';

import {Route, Routes} from 'react-router-dom'

import Main from '../pages/Main';
import List from '../pages/List';
import Favorites from '../pages/Favorites';
import NotFound from '../pages/NotFound';

const Content = () => {
    return (
        <div style={{marginTop: "10vh"}}>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path="/main" element={<Main />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/list' element={<List />} />
                <Route path='*' element={<NotFound />} />
        </Routes>
        </div >
    );
}

export default Content;
