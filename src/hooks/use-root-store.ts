import React from 'react';
import RootStore from '@/stores';

const defaultValue = new RootStore();

const RootStoreContext = React.createContext<RootStore>(defaultValue);

const useRootStore = () => React.useContext(RootStoreContext);

export { RootStoreContext, useRootStore };
