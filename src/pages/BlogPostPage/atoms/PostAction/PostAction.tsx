import React from 'react';
import { Icon } from 'resources/icons/Icons';
import './PostAction.scss';

interface Props {
  iconType: string;
  message: string;
  onClick?: () => void;
}

export const PostAction: React.FC<Props> = ({
  iconType,
  message,
  onClick,
}): React.ReactElement => {
  return (
    <div className="post-action" onClick={onClick}>
      <Icon type={iconType} className="post-action__icon" />
      <div>{message}</div>
    </div>
  );
};
