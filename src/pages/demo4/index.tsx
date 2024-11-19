import { useIntl } from '@umijs/max';
import React from 'react';
import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '@/hooks/use-root-store';
const Demo4: React.FC = () => {
  const intl = useIntl();
  console.log('intl', intl);

  const { toolStore } = useRootStore();
  const { shortConnectStore } = toolStore;

  return (
    <div>
      <div>Demo4</div>
      <Button
        onClick={() => {
          shortConnectStore.getNum();
        }}
      >
        按钮(调用Mobx)
      </Button>
      <div>record: {JSON.stringify(shortConnectStore.shortConnectData)}</div>
    </div>
  );
};

export default observer(Demo4);
