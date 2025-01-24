import React from 'react';
import styles from './styles.module.scss';
import { GhostIcon } from '../icons/icons';

const GhostIconCustom = () => {
  return (
    <div className={styles.iconContainer}>
      <div className={styles.ghostIcon}><GhostIcon/></div>
      <div className={styles.shadow}></div>
    </div>
  );
};

export default GhostIconCustom;
