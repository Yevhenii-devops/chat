import React from 'react';

import '../../scss/style.scss';

const InviteForm = ({ friendName, setFriendName, setInviteStatus }) => {
    return (
        <div>
            <div>
                <input placeholder="Friend Name" className="friendInput" type="text" onChange={(event) => setFriendName(event.target.value)} />
            </div>
            <button className="button" onClick={event => !friendName ? event.preventDefault() : setInviteStatus('3')}>Oh nice</button>
        </div>
    )
};

export default InviteForm;