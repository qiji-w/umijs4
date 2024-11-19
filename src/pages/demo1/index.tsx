import { Button } from 'antd';
import React from 'react';
import { useModel } from 'umi';

const Demo1: React.FC = () => {
  const { add, minus, counter } = useModel('counter', (ret: any) => {
    console.log(ret);
    return {
      counter: ret.counter,
      add: ret.increment,
      minus: ret.decrement,
    };
  });

  return (
    <div>
      {counter}
      <Button onClick={add}>add by 1</Button>
      <Button onClick={minus}>minus by 1</Button>
    </div>
  );
};
export default Demo1;
