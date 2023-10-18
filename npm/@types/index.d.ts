// @types/index.d.ts
export {};

export type displayLoader = "hidden" | "show";

export type loaderProps = {
    type?: string;
    time?: number;
    porcentageShow?: boolean;
    styles?: loaderStyleProps;
};

export type loaderStyleProps = {
    container?: {
        width?: string;
        height?: string;
        backgroundColor?: string;
    };
    progressBarContainer?: {
        width?: string;
        height?: string;
        backgroundColor?: string;
        display?: displayLoader;
        borderRadius?: string;
    };
    progressbar?: {
        height?: string;
        backgroundColor?: string;
    };
    progressPointer?: {
        width?: string;
        height?: string;
        backgroundColor?: string;
        shadowColor?: string;
    };
    finalScreen?: {
        backgroundColor?: string;
        time?: number;
        class?: string
    };
};

declare module "darco-loader" {
    export default function Darkmode(props: loaderProps): JSX.Element | null;
  }