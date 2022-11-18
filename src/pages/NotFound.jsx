import React from 'react';
import { Link } from "react-router-dom";

import Main from './Main';

const NotFound = () => {
    return (
        <div>
            <h1>Страница не найдена, возможно что-то пошло не так. Перейти на главную -- <Link to='/main' element={<Main />}>Link</Link></h1>
        </div>
    );
}

export default NotFound;