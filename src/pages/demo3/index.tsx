import { useIntl } from '@umijs/max';

import React from 'react';

const Demo3: React.FC = () => {
  const intl = useIntl();
  console.log('intl', intl);
  return <div>demo3</div>;
};

export default Demo3;
