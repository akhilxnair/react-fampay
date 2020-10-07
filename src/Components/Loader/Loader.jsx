/*
 * Copyright ©2020 Akhil Nair - All rights reserved.
 */

// Import Modules
import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = () => (
  <ContentLoader
    speed={1}
    width={320}
    height={600}
    viewBox="0 0 320 600"
    backgroundColor="#ffcc4d"
    foregroundColor="#FFAD00"
  >
    <rect x="0" y="0" rx="12" ry="12" width="280" height="250" />
    <rect x="0" y="265" rx="12" ry="12" width="280" height="60" />
    <rect x="0" y="340" rx="12" ry="12" width="280" height="130" />
  </ContentLoader>
);

export default Loader;
