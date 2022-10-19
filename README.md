# typescript-50647

https://github.com/microsoft/TypeScript/issues/50647#issuecomment-1245994280

Steps to reproduce:

1) Build with TS 4.7.4

```shell
npm i
npm run build
cat dist/config.cjs
```

TS 4.7.4 produces valid JavaScript:

```javascript
"use strict";
module.exports = {
    "some": "stuff"
};
```

2) Build with TS 4.8.4

```shell
npm i -D --save-exact typescript@4.8.4 
npm run build
cat dist/config.cjs
```

TS 4.8.4 produces **invalid** JavaScript:

```javascript
module.exports = {
    "some": "stuff"
};
export {};
```
