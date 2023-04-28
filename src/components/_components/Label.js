import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const Label = (props) => {
  const { value, size = 20, color = 'white', type = 'text', href, weight = 700, underlined = false } = props.text;

  const textColor =
    color === 'grey'
      ? '#A7A7A7'
      : color === 'green'
      ? '#02FF7B'
      : color === 'black'
      ? '#4B4B4B'
      : color === 'white'
      ? '#fff'
      : color;

  if (type === 'text') {
    return <Typography sx={{ ...props.sx, fontSize: size, fontWeight: weight, color: textColor }}>{value}</Typography>;
  }
  if (type === 'link') {
    return (
      <Link to={href}>
        <Typography
          sx={{
            ...props.sx,
            fontSize: size,
            fontWeight: weight,
            color: textColor,
            textDecoration: `${underlined ? 'underline' : 'none'}`
          }}
        >
          {value}
        </Typography>
      </Link>
    );
  }
};

export const Span = (props) => {
  const { value, size = 20, color = 'white', type = 'text', href, weight = 300, underlined = false } = props.text;

  const textColor =
    color === 'grey' ? '#A7A7A7' : color === 'green' ? '#02FF7B' : color === 'black' ? '#4B4B4B' : '#fff';

  if (type === 'text') {
    return (
      <span style={{ ...props.sx, fontSize: size, fontWeight: weight, color: textColor }}>
        {value}
        {props.children}
      </span>
    );
  }
  if (type === 'link') {
    return (
      <Link to={href}>
        <span
          style={{
            ...props.sx,
            fontSize: size,
            fontWeight: weight,
            color: textColor,
            textDecoration: `${underlined ? 'underline' : 'none'}`
          }}
        >
          {value}
          {props.children}
        </span>
      </Link>
    );
  }
};
