import React from 'react';
import { Spinner } from '@ev1ch/test-library';
import styles from './loader.module.scss';

const Loader = function Loader(): JSX.Element {
  return (
    <div className={styles.loader}>
      <div className={styles.container}>
        <Spinner />
      </div>
    </div>
  );
};

export default Loader;
