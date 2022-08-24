# 🔬👷🇹Testing all my npm packages (in Typescript)

[![CircleCI](https://circleci.com/gh/ayonious/my-npm-packages-tester-ts.svg?style=svg)](https://circleci.com/gh/ayonious/my-npm-packages-tester-ts)

> Testing all my npm packages directly downloading them from npmjs. Nothing better than a real end to end testing.

## How this works

- This is a project that has all my npmjs packages as dependency 👪 . And in the tests I have written all the important tests of all my npmjs packages.
- Every time there is a npmjs package update 🆕 (in any of my npmpjs packages), this repo will update that package (using renovate bot) and trigger a PR.
- If the pr succeeds ✅ , it will be merged and means all was good. No action needed from me anymore :)
- If the pr fails ❌ , I will see the email and know something went wrong. Gotta fix it manually then

```
Commands to test some cases
ts-node src/console-table-printer/test1/tryTable.ts
ts-node src/console-table-printer/test2:\ Readme1/tryTable1.ts
ts-node src/console-table-printer/test3:\ Readme2/tryTable1.ts
ts-node src/console-table-printer/test4:\ Readme3/tryTable1.ts
ts-node src/console-table-printer/test4:\ Readme4/tryTable1.ts
ts-node src/console-table-printer/test5:\ Readme5/tryTable1.ts
ts-node src/console-table-printer/test6:\ Readme6/tryTable1.ts
ts-node src/console-table-printer/test7/tryTable1.ts
```
