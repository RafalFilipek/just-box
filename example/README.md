# Example

# How to run?

## Native

1. create new react-native project
2. copy `index.*.js` files and `src` directory into your project
3. `yarn install just-box`

## Web

Look at `webpack.config.js` in this direcotry. You can copy file into any webpack project. There is only one important setting.

```
resolve: {
  extensions: ['.web.js', '.js', '.json'],
},
```

