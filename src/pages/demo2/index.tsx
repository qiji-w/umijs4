import { useIntl } from '@umijs/max';

import React from 'react';

const Demo2: React.FC = () => {
  const intl = useIntl();
  console.log('intl', intl);
  return <div>demo2</div>;
};

export default Demo2;
