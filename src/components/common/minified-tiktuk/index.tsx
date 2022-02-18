import React from 'react';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IFeedTikTuk } from 'domain/feed';
import { convertToMinifiedNumber } from 'helpers';
import styles from './minified-tiktuk.module.scss';

interface IMinifiedTikTuk {
  tiktuk: IFeedTikTuk;
}

const MinifiedTikTuk = function MinifiedTikTuk({
  tiktuk,
}: IMinifiedTikTuk): JSX.Element {
  const viewsCaption = convertToMinifiedNumber(tiktuk.stats.playCount);

  return (
    <div className={styles.minifiedTikTuk}>
      <p className={styles.views}>
        <FontAwesomeIcon icon={faPlay} className={styles.icon} />
        {viewsCaption}
      </p>
      <div className={styles.overlay} />
      <video src={tiktuk.video.playAddr} className={styles.video} role="button">
        <track kind="captions" />
      </video>
    </div>
  );
};

export default MinifiedTikTuk;
