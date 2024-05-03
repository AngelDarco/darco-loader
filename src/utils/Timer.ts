export default class Timer {
  private styles: CSSModuleClasses;
  private bar: HTMLElement | null;
  private porcentage: HTMLElement | null;
  private progressPointer: HTMLElement | null;
  private icons: HTMLElement | null;
  private throttle: number;
  private id: number;

  constructor(styles: CSSModuleClasses) {
    this.styles = styles;

    const $ = (id: string) => document.getElementById(id);
    this.bar = $(this.styles.progressBar);
    this.porcentage = $(this.styles.count);
    this.progressPointer = $(this.styles.progressPointer);
    this.icons = $(this.styles.loaderIcons);
    this.throttle = 0.7; // 0-1
    this.id = 0;
  }

  /** the function should be called repeted times to work */
  intervalTime(i: number, callback?: () => void) {
    this.progressMaker(i, callback);
  }

  /** the function will act accordingly to the time time passed */
  staticTime(i: number, callback?: () => void) {
    const time = i * 1000;
    const timeout = time / 100;

    let timer = 0;
    let count = 0;

    this.id = setInterval(() => {
      timer += timeout;
      count++;

      this.progressMaker(count, callback);
      if (timer >= time) clearTimeout(this.id);
    }, timeout);
  }

  destroy() {
    if (this.id) clearInterval(this.id);
  }

  private progressMaker(i: number, callback?: () => void) {
    if (i <= 100) {
      const r = Math.random();

      if (this.bar) this.bar.style.width = i + "%";
      if (this.porcentage) this.porcentage.innerHTML = Math.round(i) + "%";
      if (r < this.throttle) {
        // Simulate d/l speed and uneven bitrate
        i = i + r;
      }
    }

    if (i >= 100) {
      if (this.bar && this.icons && this.progressPointer) {
        this.icons.style.display = "none";
        this.progressPointer.style.display = "none";
        this.bar.classList.add(this.styles.finalScreen);
      }
      callback && callback();
    }
  }
}
