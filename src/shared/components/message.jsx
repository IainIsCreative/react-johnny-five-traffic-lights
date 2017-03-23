// @flow

import React, { PropTypes } from 'react';

const Message = ({ message } : { message: string }) => (
  <div className="message-modal">
    {message}
  </div>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
