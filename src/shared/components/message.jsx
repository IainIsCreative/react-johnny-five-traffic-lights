// @flow

import React, { PropTypes } from 'react';

/**
 *
 * Message Component
 *
 * This is a reusable component for visual modals and the like, can be
 * used on a container to act with our redux store.
 *
 */

const Message = ({ message } : { message: string }) => (
  <div className="message-modal">
    {message}
  </div>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
