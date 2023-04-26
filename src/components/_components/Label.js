import React from 'react';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Label = (props) => <Typography {...props}>{props.text}</Typography>;

export const LCaption = (props) => <Label {...{ ...props, variant: 'caption' }} />;

export const LBody = (props) => <Label className={props.className ?? 'mandatory'} {...{ ...props, variant: 'body' }} />;

export const BoldLabel = styled((props) => <LBody {...props} />)(() => ({
  fontWeight: 500,
  width: 250
}));

export const CLabel = styled((props) => <Label {...props} />)(() => ({
  fontWeight: 300,
  fontSize: 16
}));

export const TLabel = styled((props) => <Label {...props} />)(() => ({
  fontWeight: 300,
  fontSize: 26
}));

export const LH5 = (props) => <Label {...{ ...props, variant: 'h5' }} />;

export const LH4 = (props) => <Label {...{ ...props, variant: 'h4' }} />;

export const H4Link = (props) => (
  <Link to={props.href}>
    <LH5 text={props.href} {...props} />
  </Link>
);
