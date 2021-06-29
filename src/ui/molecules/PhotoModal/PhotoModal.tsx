import React from 'react';
import { createPortal } from 'react-dom';
import './PhotoModal.scss';

interface Props {
  setModalVisibility: (state: boolean) => void;
  photo: string;
}

export const PhotoModal: React.FC<Props> = ({
  photo,
  setModalVisibility,
}): React.ReactPortal | null => {
  const modalRoot = document.getElementById('modal');

  return modalRoot
    ? createPortal(
        <>
          <div className="modal-bg" onClick={() => setModalVisibility(false)} />
          <img
            className="modal-photo"
            src={photo}
            onClick={() => setModalVisibility(false)}
          />
        </>,
        modalRoot
      )
    : null;
};
