import React, { useState, useEffect } from 'react';

import '../../../scss/style.scss';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;
  const [time, setTime] = useState('')

  const trimmedName = name.trim().toLowerCase();

  useEffect(() => {
    setTime('');
    var date = new Date();
    var now = `${date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes() }`;
    setTime(now);
  }, [])


  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{time}</p>
          <div className="messageBox backgroundBlue">
            <p className="trimmedName">{trimmedName}</p>
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      )
      : (
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundLight">
            <p className="user">{user}</p>
            <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
          </div>
          <p className="sentText pl-10 ">{time}</p>
        </div>
      )
  );
}

export default Message;