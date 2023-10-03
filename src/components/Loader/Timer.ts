import { style } from "./Loader";
export default function Timer(
  type: string,
  time: number,
) {

if(type === "static"){
  staticTime(time);
}else if(type === "interval"){
  intervalTime(time);
}else return;

}
/** the function would be called repeted times to work */
const intervalTime = (i:number)=>{
    magic(i);
}

/** the function will act accordingly to the time time passed */
const staticTime = (i:number)=>{
  const time = i*1000;
  const timeout = time/100;

  let timer = 0;
  let count = 0
const id = setInterval(()=>{
  timer += timeout;
  count++;

  magic(count);
  if(timer >= time) clearTimeout(id);
}, timeout)
}

const magic = (i:number)=> {
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

        bar.classList.add(style);
      }
    }
}