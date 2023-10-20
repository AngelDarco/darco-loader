import moduleStyles from "./loader.module.css";
import timer from "./timer";
import { loaderStyleProps, loaderProps } from "./types"

let finalScreen: string | loaderStyleProps["finalScreen"];
const Loader = (props: loaderProps) => {
  const {
    type = "static",
    time = 2,
    porcentageShow = true,
    styles,
  } = props;

  timer(type, time);

  const containerStyle = styles?.container;
  let progressBarContainerStyle = styles?.progressBarContainer;

  if (
    styles?.progressBarContainer &&
    styles?.progressBarContainer["display"] === "hidden"
  ) {
    progressBarContainerStyle = {
      ...progressBarContainerStyle,
      backgroundColor: "transparent",
    };
  }

  if (
    styles?.progressPointer &&
    styles?.progressPointer["shadowColor"]
  ) {
    document.documentElement.style.setProperty(
      "--shadow-pointer-color",
      styles?.progressPointer["shadowColor"],
    );
  }

  const progressbarStyle = styles?.progressbar;
  const progressPointerStyle = styles?.progressPointer;

  finalScreen = customStylesFinalScreen(styles?.finalScreen);

  return (
    <div style={{ ...containerStyle }} className={moduleStyles.loaderContainer}>
      <div className={moduleStyles.loaderIcons} id="loaderIcons">
        {porcentageShow && <h1 className={moduleStyles.count} id="count"></h1>}
      </div>

      <div
        style={{ ...progressBarContainerStyle }}
        className={moduleStyles.progressbarContainer}
      >
        <div
          style={{ ...progressbarStyle }}
          className={moduleStyles.progressbar}
          id="progress-bar"
        ></div>
        <div
          style={{ ...progressPointerStyle }}
          className={moduleStyles.progressPointer}
          id="progressPointer"
        ></div>
      </div>
    </div>
  );
};

const customStylesFinalScreen = (
  styles?: loaderStyleProps["finalScreen"],
) => {
  if (styles && Object.keys(styles).length > 0)
    return { ...styles, class: moduleStyles.finalScreen };
  return moduleStyles.finalScreen;
};

export { finalScreen };
export default Loader;
