import React from 'react';

const Button = ({
  text = '',
  onClick = () => {},
  style = null,
  className = '',
  htmlType = 'button',
  loading = false,
}) => (
  <button
    onClick={onClick}
    className={`button button-primary ${className || ''}`}
    style={style}
    type={htmlType}
    disabled={loading}
  >
    {loading ? 'Подождите...' : text}
  </button>
);

export default Button;
