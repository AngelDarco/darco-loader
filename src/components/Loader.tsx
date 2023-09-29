import styles from "./loader.module.css";
import Timer from "../utils/Timer";

type loaderTypes = "static" | "interval"
export type LoaderProps = {
  type: loaderTypes;
  time: number;
  porcentageShow: boolean;
};
export default function Loader(props: LoaderProps) {
  const {type,time, porcentageShow } = props;

  Timer(type, time, styles.done);
  
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderIcons} id="loaderIcons">
        {porcentageShow && <h1 className={styles.count} id="count"></h1>}
      </div>

      <div className={styles.progressbarContainer}>
        <div className={styles.progressbar} id="progress-bar"></div>
        <div className={styles.power} id="power"></div>
      </div>
    </div>
  );
}
