# Darco-Loader
  ## A React Suspense Loader Component

This loader is purpose-built to seamlessly integrate with the `Suspense` React component. It serves as a visual aid, enhancing the user experience by providing loading feedback during asynchronous operations. The React Suspense Loader Component is designed to work effortlessly within React applications, ensuring a smooth and user-friendly interface while content is being fetched or loaded.


![](https://github.com/idahogurl/vs-code-prettier-eslint/assets/29819444/bc9e67a5-a02e-4922-a9b7-3646d3735b04)


## `Install`
```
npm i darco-loader
```

## `Usage`
```
  import Loader from 'darco-loader'

  const newStyles = {
      container: {
        width: '50%',
        height: '50vh',
      }
    }

  // change the with and height of the loader main container.
  <Loader styles={newStyles}/> 
    
```

## Props

## `Type:` Type "static" | "interval"
    - default  "static"
    - static: must be called once with a time, number parameter.
    - interval: must be called in loop.

## `Time:`Type number
    - must be an integer in seconds
    - default: 2

## `ProgressShow:` Type boolean 
    - show the progress porcentage.
    - default: true


## `Styles` Type React.CSSProperties

The `loaderStyleProps` type is an interface that defines various styling options for a loader component. It is used to configure the appearance of different parts of the 
loader.


### `container` Property

- **Type:** Object
- **Description:** Styling options for the main outer container of the loader.

  - `width` (optional): Width of the container.(default: 100%)
  - `height` (optional): Height of the container.(default: 100vh)
  - `backgroundColor` (optional): Background color of the container.
  

### `progressBarContainer` Property

- **Type:** Object
- **Description:** Styling options for the container that holds the progress bar.

  - `width` (optional): Width of the container.(default: 80%)
  - `height` (optional): Height of the container.(default: auto)
  - `backgroundColor` (optional): Background color of the container.
  - `display` (optional): Display mode of the container. Values can be `'block'` or `'none'`.
  - `borderRadius` (optional): Border radius of the container.

### `progressbar` Property

- **Type:** Object
- **Description:** Styling options for the progress bar itself.

  - `height` (optional): Height of the progress bar.
  - `backgroundColor` (optional): Background color of the progress bar.

### `progressPointer` Property

- **Type:** Object
- **Description:** Styling options for the progress pointer (indicator).

  - `width` (optional): Width of the progress pointer.
  - `height` (optional): Height of the progress pointer.
  - `backgroundColor` (optional): Background color of the progress pointer.
  - `shadowColor` (optional): Shadow color of the progress pointer.

### `finalScreen` Property

- **Type:** Object
- **Description:** Styling options for the final screen of the loader.

  - `backgroundColor` (optional): Background color of the final screen.
  - `time` (optional): Time delay (in milliseconds) before transitioning to the final screen.


---

The Styles type provides a flexible way to customize the appearance of a loader component by specifying different styling options for its various parts. You can use it to control the dimensions, colors, and other visual properties of the loader elements to match your application's design.

