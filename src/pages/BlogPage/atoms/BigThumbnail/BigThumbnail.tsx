import React from 'react';
import { history } from 'libs/history';
import './BigThumbnail.scss';

interface Props {
  data: {
    id: number;
    coverUrl: string;
    title: string;
  };
}

export const BigThumbnail: React.FC<Props> = ({ data }): React.ReactElement => {
  const goToPostPage = (): void => {
    history.push(`/blog/${data.id}`);
  };

  return (
    <div className="big-thumbnail" onClick={goToPostPage}>
      <img
        src={data?.coverUrl ? data.coverUrl : ''}
        className="big-thumbnail__cover-container"
        alt="Blog post Photo"
      />
      <div className="big-thumbnail__title">{data.title}</div>
    </div>
  );
};
