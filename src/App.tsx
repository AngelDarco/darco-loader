import "./App.css";
import Loader, { LoaderProps } from "./components/Loader";

function App(props: LoaderProps) {
  return (
    <Loader {...props} />
  );
}

export default App;