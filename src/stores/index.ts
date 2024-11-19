import { makeObservable, observable } from 'mobx';
import ToolStore from './tool-store';

export default class RootStore {
  @observable toolStore = new ToolStore();

  constructor() {
    makeObservable(this);
  }
}
