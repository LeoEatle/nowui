import pick from 'lodash.pick';
import { types } from './';
import { features } from '../../../libs/key_events';
import apiActions from '../../api/actions';
import { defaultState } from '../configs/reducers/shortcuts';

export default {
  handleEvent(context, event) {
    const { reduxStore } = context;
    switch (event) {
      case features.NEXT_STORY:
        apiActions.api.jumpToStory(context, 1);
        break;
      case features.PREV_STORY:
        apiActions.api.jumpToStory(context, -1);
        break;
      default:
        reduxStore.dispatch({
          type: types.HANDLE_EVENT,
          event,
        });
    }
  },

  setLayout(context, layout) {
    const { reduxStore } = context;
    reduxStore.dispatch({
      type: types.SET_LAYOUT,
      layout,
    });
  },

  setOptions(context, options) {
    const { reduxStore } = context;
    reduxStore.dispatch({
      type: types.SET_LAYOUT,
      layout: pick(options, Object.keys(defaultState)),
    });
  },
};
