import { action, makeObservable, observable, runInAction } from 'mobx';
import 'tslib';
export default class ToolStore {
  @observable shortConnectStore = new ShortConnectStore();

  constructor() {
    makeObservable(this);
  }
}

const timer: any = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(111);
    }, 500);
  });
};

class ShortConnectStore {
  @observable shortConnectData: number = 0;

  constructor() {
    makeObservable(this);
  }

  @action getNum = async () => {
    const response = await timer();
    runInAction(() => {
      this.shortConnectData = response;
    });
  };
}
