import "./App.css";
import Loader from "../../src/components/Loader";
import { useEffect, useRef, useState } from "react";
import * as dat from "dat.gui";

function App() {
  const [time, setTime] = useState(2);
  const [showLoader, setShowLoader] = useState(false);

  const option = useRef({
    "--pointer": "#f1c40f",
    "--progressbar": "#fff",
    "--shadow-progressbar": "#f1c40f",
    "--shadow-pointer": "#f1c40f",
    "--final-screen": "#fff",
    time: 2,
  });

  useEffect(() => {
    const data = new dat.GUI();
    const ref = option.current;

    const cssVariables = (key: string, value: string) =>
      document.documentElement.style.setProperty(key, value);

    data
      .add(ref, "--pointer")
      .onChange((x: string) => cssVariables("--pointer", x));
    data
      .add(ref, "--progressbar")
      .onChange((x: string) => cssVariables("--progressbar", x));
    data
      .add(ref, "--shadow-progressbar")
      .onChange((x: string) => cssVariables("--shadow-progressbar", x));
    data
      .add(ref, "--shadow-pointer")
      .onChange((x: string) => cssVariables("--shadow-pointer", x));
    data
      .add(ref, "--final-screen")
      .onChange((x: string) => cssVariables("--final-screen", x));
    data.add(ref, "time").onChange((x: number) => {
      setTime(x);
    });
    return () => data.destroy();
  }, []);

  return (
    <div className="App">
      <h1>Darco Loader ...</h1>
      <button onClick={() => setShowLoader(!showLoader)}>Click me</button>
      {showLoader && <Loader time={time} callback={setShowLoader} />}
    </div>
  );
}

export default App;
