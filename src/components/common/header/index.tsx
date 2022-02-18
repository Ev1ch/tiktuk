import React from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router';
import { Logotype } from '@ev1ch/test-library';
import { Routes } from 'common';
import styles from './header.module.scss';

const Header = function Header(): JSX.Element {
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate(Routes.TRENDING);
  };

  return (
    <header className={styles.header}>
      <div
        className={clsx('container', styles.container)}
        onClick={onLogoClick}
        role="link"
        tabIndex={0}
      >
        <Logotype className={styles.logotype} />
      </div>
    </header>
  );
};

export default Header;
