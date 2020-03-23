# reactnativeserverrender


## Demo

![demo](./README.md.assets/demo.gif)

## How to run?

1. server
    ```
    cd server
    yarn
    yarn serve
    ```

2. html
    ```
    cd web
    yarn
    yarn start
    ```

3. react-native
    ```
    cd app
    yarn
    react-native run-ios
    ```

## What is this?

Roughly written POC of "server rendering" of react-native components.

1. html page with textarea where one can enter yaml, e.g.:

```yaml
component: View
props:
  style:
    flex: 1
    backgroundColor: red
    padding: 50
children:
  - component: View
    props:
      style:
        flex: 1
        backgroundColor: green
        padding: 30
    children:
      - component: View
        props:
         style:
           flex: 1
           backgroundColor: blue
           padding: 30
```

2. server in socket io that relays data from webview to rn client
3. rn client that renders structure sent from html page


## Any plans on making this a lib?

Yes. Sometime.
