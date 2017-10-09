import actions from './actions';
import reducers from './configs/reducers';
import initApi from './configs/init_api';

export default {
  reducers,
  actions,
  load({ reduxStore, provider }, _actions) {
    initApi(provider, reduxStore, _actions);
  },
};
