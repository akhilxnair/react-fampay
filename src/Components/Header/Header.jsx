/*
 * Copyright ©2020 Akhil Nair - All rights reserved.
 */

// Import Modules
import React, { memo } from 'react';

// Import Media
import FampayLogo from '../../Media/svg/fampay-logo.svg';

// Import Styles
import style from './Header.module.css';

const Header = () => (
  <header className={style.header}>
    <img src={FampayLogo} alt="FamPay" />
  </header>
);

export default memo(Header);
