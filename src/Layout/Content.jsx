import React from 'react';

import {Route, Routes} from 'react-router-dom'

import Main from '../pages/Main';
import List from '../pages/List';
import Favorites from '../pages/Favorites';

const Content = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path="/main" element={<Main />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/list' element={<List />} />
        </Routes>
        </div >
    );
}

export default Content;
