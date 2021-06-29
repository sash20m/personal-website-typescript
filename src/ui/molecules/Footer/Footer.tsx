import React from 'react';
import env from '@beam-australia/react-env';
import { useMenu } from 'hooks/useMenu';
import { Icon } from 'resources/icons/Icons';
import { history } from 'libs/history';
import './Footer.scss';

export const Footer = (): React.ReactElement => {
  const menu = useMenu();

  const goToPage = (route: string): void => {
    history.push(route);
  };

  return (
    <div className="footer">
      <div className="footer__menu">
        {menu.map((item) => (
          <span
            className={`menu__item${item.active ? '--active' : ''}`}
            key={item.route}
            onClick={() => goToPage(item.route)}
          >
            {item.label}
          </span>
        ))}
      </div>
      <div className="footer__socials">
        <a href={env('LINKEDIN_URL')} target="_blank" rel="noopener noreferrer">
          <Icon type="linkedin" />
        </a>
        <a href={env('TWITTER_URL')} target="_blank" rel="noopener noreferrer">
          <Icon type="twitter" />
        </a>
        <a href={env('FAECBOOK_URL')} target="_blank" rel="noopener noreferrer">
          <Icon type="facebook" />
        </a>
        <a
          href={env('INSTAGRAM_URL')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon type="instagram" />
        </a>
        <a href={env('GITHUB_URL')} target="_blank" rel="noopener noreferrer">
          <Icon type="github" />
        </a>
      </div>
    </div>
  );
};
