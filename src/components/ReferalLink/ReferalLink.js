import React, {useContext} from 'react';

import Context from '../../Context';

import '../../scss/style.scss';

const ReferalLink = ({ friendName, room, setInviteStatus, setFriendName }) => {
    const { location } = useContext(Context);
    const copy = () => {
        var copyText = document.getElementById("link");
        copyText.select();
        document.execCommand("copy");
    }
    return (
        <div>
            <p>Give this link to your friend</p>
            <form className="formLink">
                <div>
                    <input className="linkInput" id="link" type="text" value={`${location}/chat?name=${friendName}&room=${room}`} />
                </div>
                <button className="copyButton" onClick={(event) => {
                    event.preventDefault();
                    copy();
                }}>COPY</button>
            </form>
            <button className="button" onClick={() => {
                setInviteStatus('1');
                setFriendName('');
            }}>Back</button>
        </div>
    )
};

export default ReferalLink;