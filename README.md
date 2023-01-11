# typescript-50647-1

https://github.com/microsoft/TypeScript/issues/50647#issuecomment-1379506506

Steps to reproduce:

```shell
npm i
npm run build
```

Compilation fails with the following error:

```shell
src/index.tsx:5:21 - error TS2349: This expression is not callable.
  Type 'typeof import("[REDACTED]/node_modules/clsx/clsx")' has no call signatures.

5     <div className={clsx("fancy", "div")}>{children}</div>;
                      ~~~~


Found 1 error in src/index.tsx:5

ERROR: "build:js" exited with 2.

```

But at the same time this test project compiles just fine with `"moduleResolution": "Node"`.
