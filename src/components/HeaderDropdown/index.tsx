import { useEmotionCss } from '@ant-design/use-emotion-css';
import { Dropdown } from 'antd';
import type { DropDownProps } from 'antd/es/dropdown';
import classNames from 'classnames';
import React from 'react';

export type HeaderDropdownProps = {
  overlayClassName?: string;
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight' | 'bottomCenter';
} & Omit<DropDownProps, 'overlay'>;

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ overlayClassName: cls, ...restProps }) => {
  const className = useEmotionCss(({ token }) => {
    return {
      [`@media screen and (max-width: ${token.screenXS})`]: {
        width: '100%',
      },
    };
  });
  console.log('restProps', restProps);
  return <Dropdown overlayClassName={classNames(className, cls)} {...restProps} />;
};

export default HeaderDropdown;
