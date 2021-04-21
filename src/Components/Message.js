import React from 'react';
import "./Message.css";

import Alert from 'react-bootstrap/Alert';

const Message = ({msg, variant}) => {
    
    
    return (
        <Alert variant={variant}>{msg}</Alert>
    )
}

export default Message;
