import React from 'react';
import { history } from 'libs/history';
import './SmallThumbnail.scss';

interface Props {
  data: {
    id: number;
    coverUrl: string;
    title: string;
  };
}

export const SmallThumbnail: React.FC<Props> = ({
  data,
}): React.ReactElement => {
  const goToPostPage = (): void => {
    history.push(`/blog/${data.id}`);
  };

  return (
    <div className="small-thumbnail" onClick={goToPostPage}>
      <img
        src={data?.coverUrl ? data.coverUrl : ''}
        className="small-thumbnail__cover-container"
        alt="Blog post Photo"
      />
      <div className="small-thumbnail__title">{data.title}</div>
    </div>
  );
};
