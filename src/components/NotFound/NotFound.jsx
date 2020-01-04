import React from 'react';
import { Link } from 'react-router-dom';

import '../../scss/style.scss';

const NotFound = () => {
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <p className="heading">404 Page not found</p>
                <Link to="/">
                    <button className="button">HOME</button>
                </Link>
            </div>
        </div>
    )
};

export default NotFound;