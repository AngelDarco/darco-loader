export type loaderProps = {
  type?: string;
  time?: number;
  showPorcentage?: boolean;
  className?: string;
  callback?: (state: boolean) => void;
};

declare const Loader: (props: loaderProps) => JSX.Element | null;
export default Loader;
