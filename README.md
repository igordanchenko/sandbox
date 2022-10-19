# typescript-50647

https://github.com/microsoft/TypeScript/issues/50647#issuecomment-1245994280

Steps to reproduce:

```shell
npm i
npm run build
cat dist/index.js
```

- config.cjs compiles to CJS - OK
- index.ts compiles to CJS - FAIL

Change `moduleResolution` to `NodeNext` in `tsconfig.json` and try compiling again.

```shell
npm run build
```

Compilation fails with the following error:

```shell
src/index.ts:3:43 - error TS2349: This expression is not callable.
  Type 'typeof import("[REDACTED]/sandbox/node_modules/clsx/clsx")' has no call signatures.

3 export const foo = (className: string) => clsx(className);
                                            ~~~~


Found 1 error in src/index.ts:3

ERROR: "build:js" exited with 2.
```
