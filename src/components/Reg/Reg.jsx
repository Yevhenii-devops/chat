import React from 'react';

const Reg = () => {
    return (
        <div>
            <h1>Registration</h1>
            <div>
                <input placeholder="Email" className="joinInput" type="text" />
            </div>
            <div>
                <input placeholder="Password" className="joinInput mt-20" />
            </div>
        </div>
    );
}

export default Reg;