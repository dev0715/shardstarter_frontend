import React from 'react';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Label = (props) => <Typography {...props}>{props.text}</Typography>;

export const LCaption = (props) => <Label {...{ ...props, variant: 'caption' }} />;

export const LBody = (props) => <Label {...{ ...props, variant: 'body' }} />;

export const TLabel = styled((props) => <Label {...props} />)(() => ({
  fontWeight: 700,
  fontSize: 40
}));

export const GLabel = styled((props) => <TLabel {...props} />)(() => ({
  color: '#02FF7B'
}));

export const LH5 = (props) => <Label {...{ ...props, variant: 'h5', fontSize: '18px' }} />;

export const LH4 = (props) => <Label {...{ ...props, variant: 'h4', fontSize: '20px' }} />;

export const H4Link = (props) => (
  <Link to={props.href}>
    <LH5 text={props.href} {...props} />
  </Link>
);
