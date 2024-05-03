import moduleStyles from "./loader.module.css";
import Timer from "../utils/Timer";
import { loaderProps } from "../types/types.d";
import { useEffect, useState } from "react";

const Loader = (props: loaderProps) => {
  const {
    type = "static",
    time = 2,
    showPorcentage = true,
    className,
    callback,
  } = props;
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = new Timer(moduleStyles);
    let id = 0;
    const fn = () => {
      id = setTimeout(() => {
        setLoader(false);
        callback && callback(loader);
      }, 1200);
    };
    if (type === "static") {
      time && timer.staticTime(time, fn);
    } else if (type === "interval") {
      time && timer.intervalTime(time, fn);
    }
    return () => {
      timer.destroy();
      clearTimeout(id);
    };
  }, [loader]);

  return (
    <>
      {loader ? (
        <div id={moduleStyles.loaderContainer} className={className}>
          <div id={moduleStyles.loaderIcons}>
            {showPorcentage ? <h1 id={moduleStyles.count}></h1> : null}
          </div>
          <div id={moduleStyles.progressbarContainer}>
            <div id={moduleStyles.progressBar}></div>
            <div id={moduleStyles.progressPointer}></div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Loader;
