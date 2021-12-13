import {
  createContextStore,
  action,
  Action,
  Computed,
  computed
} from "easy-peasy";
import _diff from "lodash.difference";

interface AssetsState {
  tokens: string[];
  addresses: string[];
  usedOptions: string[];
  options: Computed<AssetsState, string[]>;
  availableOptions: Computed<AssetsState, string[]>;
  addUsedOption: Action<AssetsState, string>;
  removeUsedOption: Action<AssetsState, string>;
}

const AssetsStore = createContextStore<AssetsState>({
  tokens: ["ETH", "BTC", "SOL"],
  addresses: ["abc", "123", "987"],
  usedOptions: [],
  options: computed((state) => {
    const options = [];

    state.tokens.forEach((token) => {
      state.addresses.forEach((address) => {
        options.push(`${token}_${address}`);
      });
    });

    return options;
  }),
  availableOptions: computed((state) => {
    return _diff(state.options, state.usedOptions);
  }),
  addUsedOption: action((state, action) => {
    console.log({ action });
    state.usedOptions.push(action);
  }),
  removeUsedOption: action((state, action) => {
    state.usedOptions = state.usedOptions.filter((option) => option != action);
  })
});

export { AssetsStore };
