## React Loader component



![](https://github.com/idahogurl/vs-code-prettier-eslint/assets/29819444/bc9e67a5-a02e-4922-a9b7-3646d3735b04)

## install
> ``` npm i darco-loader ```

## use
> ``` import { Loader } from 'darco-loader' ```

> ```  <Loader props />  ```


## Props

> ####  type: ``` string  static | interval ```
  - ``` static: default, must be called once with a time (:number) parameter. ```

    - ``` interval: must be called in a loop to work.```

> #### time: ``` number = must be an integer in seconds ```
- ``` default: 3 ```

- #### progressShow: ``` boolean = show or not the progress porcentage. ```
    - ``` default: true ```

- #### styles: ``` object = css styles ```
    - ``` default: ``` 
        - > width: 100%
        - > height: 100vh