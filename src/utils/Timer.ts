export default function Timer(
  type: string,
  progress: number,
  styles: string,
) {

if(type === "static"){
  staticTime(progress, styles);
}else if(type === "interval"){
  intervalTime(progress, styles);
}else return;

}
/** the function would be called repeted times to work */
const intervalTime = (i:number, styles:string)=>{
    magic(i, styles);
}

/** the function will act accordingly to the progress time passed */
const staticTime = (i:number, styles: string)=>{
  const time = i*1000;
  const timeout = time/100;

  let timer = 0;
  let count = 0
const id = setInterval(()=>{
  timer += timeout;
  count++;

  magic(count, styles);
  if(timer >= time) clearTimeout(id);
}, timeout)
}

const magic = (i:number, styles: string)=> {
  const $ = (id: string): HTMLDivElement | HTMLElement | null => document.getElementById(id);

  const bar: HTMLElement | null = $("progress-bar");
  const porcentage = $("count");
  const throttle = 0.7; // 0-1

    if (i <= 100) {
      const r = Math.random();

      if (bar) bar.style.width = i + "%";
      if (porcentage) porcentage.innerHTML = Math.round(i) + "%";

      if (r < throttle) {
        // Simulate d/l speed and uneven bitrate
        i = i + r;
      }
    } 
    if(i >= 100) {
      const power = $("power");
      const icons = $("loaderIcons");

      if (bar && icons && power) {
        icons.style.display = "none";
        power.style.display = "none";
        bar.classList.add(styles);
      }
    }
}