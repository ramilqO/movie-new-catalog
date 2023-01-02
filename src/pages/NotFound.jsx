import React from 'react';
import { Link } from "react-router-dom";

import List from './List';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-light'>Страница не найдена, возможно что-то пошло не так. Перейти на главную -- <Link to='/' element={<List />}>На главную</Link></h1>
        </div>
    );
}

export default NotFound;