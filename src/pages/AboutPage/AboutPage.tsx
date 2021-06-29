import React, { useState } from 'react';
import { Layout } from 'ui/organisms/Layout/Layout';
import Photo1 from './resources/1.jpg';
import Photo2 from './resources/2.jpg';
import Photo3 from './resources/3.jpg';
import Photo4 from './resources/4.jpg';
import Photo5 from './resources/5.jpg';
import { PhotoModal } from 'ui/molecules/PhotoModal/PhotoModal';
import './AboutPage.scss';

export const AboutPage = (): React.ReactElement => {
  const [modalVisible, setModalVisible] = useState(false);
  const [photoSrc, setPhotoSrc] = useState('');

  const setModalVisibility = (src: string): void => {
    setModalVisible(true);
    setPhotoSrc(src);
  };

  return (
    <Layout>
      <div className="about">
        <div className="gallery">
          <img
            className="gallery__img"
            src={Photo1}
            onClick={() => setModalVisibility(Photo1)}
            alt="Photo 1"
          />
          <div className="gallery__photos">
            <img
              className="gallery__photos__img"
              src={Photo2}
              alt="Photo 2"
              onClick={() => setModalVisibility(Photo2)}
            />
            <img
              className="gallery__photos__img"
              src={Photo3}
              alt="Photo 3"
              onClick={() => setModalVisibility(Photo3)}
            />
            <img
              className="gallery__photos__img"
              src={Photo4}
              alt="Photo 4"
              onClick={() => setModalVisibility(Photo4)}
            />
            <img
              className="gallery__photos__img"
              src={Photo5}
              alt="Photo 5"
              onClick={() => setModalVisibility(Photo5)}
            />
          </div>
        </div>
        <div className="about-me">
          <div className="about-me__p">
            I’m a <span className="bold color-black">Software Engineer </span>{' '}
            and <span className="bold color-black">UX/UI Designer</span> living
            currently in Chisinau, Moldova. I’ve studied
            <br /> Web Development & Informatics and now I’m studying business
            at UBB in Cluj-Napoca.
          </div>

          <div className="about-me__p">
            I was introduced to computers from an early age and since then it
            became my passion. Being driven by curiosity, I got into design,
            programming and others IT areas that sparked my interest.
          </div>

          <div className="about-me__p">
            Moreover, there are a lot of things that I am passionate about, such
            as music, math, meditating, artificial intelligence, books, health &
            performance optimization ( and frankly optimization of any sort
            really ), photography, investing and personal development.
          </div>

          <div className="about-me__p">
            I think that anything can be achieved with hard work, perseverance,
            ambition & determination and I strongly believe that, on a personal
            level, change starts from within.
          </div>

          <div className="about-me__p">
            You can get in touch with me via{' '}
            <span className="bold color-black underline">email</span> or on
            Twitter at <span className="bold color-black">@alex_matei20</span>
          </div>
        </div>
        {modalVisible && (
          <PhotoModal photo={photoSrc} setModalVisibility={setModalVisible} />
        )}
      </div>
    </Layout>
  );
};
