import { createStore, Store, MutationTree } from 'vuex';

import state from './state';
import mutations from './state';
export const store = createStore({
  state,
});