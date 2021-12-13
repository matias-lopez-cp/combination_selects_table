import { AssetsStore } from "./AssetsStore";
import "./styles.css";

export default function App() {
  const { options, availableOptions, usedOptions } = AssetsStore.useStoreState(
    (state) => state
  );
  const { addUsedOption, removeUsedOption } = AssetsStore.useStoreActions(
    (actions) => actions
  );

  return (
    <div className="App">
      <>
        <div>All options</div>
        {options.map((option) => {
          return (
            <div style={{ display: "flex" }}>
              <div>{option}</div>
              <button onClick={() => addUsedOption(option)}>Add</button>
            </div>
          );
        })}
      </>
      <>
        <div>Used options</div>
        {usedOptions.map((option) => {
          return (
            <div style={{ display: "flex" }}>
              <div>{option}</div>
              <button onClick={() => removeUsedOption(option)}>Remove</button>
            </div>
          );
        })}
      </>
      <>
        <div>Available options</div>
        {availableOptions.map((option) => {
          const [token, address] = option.split("_");

          return (
            <div style={{ display: "flex" }}>
              <select>
                <option>{token}</option>
              </select>
              <select>
                <option>{address}</option>
              </select>
            </div>
          );
        })}
      </>
    </div>
  );
}
