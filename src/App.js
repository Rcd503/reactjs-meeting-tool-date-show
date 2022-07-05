import "./App.css";
import DateSelector from "./components/DateSelector";
import DaySelector from "./components/DaySelector";
import ResultShow from "./components/ResultShow";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DateSelector />
        <DaySelector />
        <ResultShow />
      </div>
    </Provider>
  );
}

export default App;
