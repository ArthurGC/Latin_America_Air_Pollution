import React from 'react';
import style from './loading.module.css';

const Loading = () => (
  <div className={style.loaderWrapper}>
    <div className={style.loader} />
  </div>
);

export default Loading;
