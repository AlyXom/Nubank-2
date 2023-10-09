import { store } from "@redux/store/store";
import { Provider } from "react-redux";
import Routes from "@routes/index";






export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}