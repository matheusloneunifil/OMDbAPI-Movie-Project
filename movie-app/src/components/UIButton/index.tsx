import React, { ReactNode } from 'react';
import { Button } from '@ui5/webcomponents-react';
import HeartIcon from '../../assets/images/heart.svg';

interface UIButtonProps {
  onClick?: () => void;
  children: ReactNode;
}

const UIButton: React.FC<UIButtonProps> = ({ onClick, children }) => {
  return <Button onClick={onClick} style={{ display: 'flex', alignItems: 'center' }}>{children}</Button>;
};

export default UIButton;
