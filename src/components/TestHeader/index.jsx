import React from 'react';
// css
import style from './testHeader.module.css';

const TestHeader = ({ title, desc }) => {
  return (
    <div className={style.wrap}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default TestHeader;
