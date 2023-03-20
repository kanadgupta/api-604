# Testing repo for https://github.com/jaredwray/keyv/issues/516

By https://github.com/afreemanio

Forked from:
https://github.com/jsynowiec/node-typescript-boilerplate


Check notes.md for commands I ran to get the repo to this state, and issues I've
been having with the activecampaign API (their fault or this tool's?)


# Installation and running
- Clone the repo
- Copy .env.example to .env, fill the values if you'd like (you don't need them
  to see the intended behavior)
- Run the following commands to install
```
npm install
```
- Run the following commands to run on OS with ts-node/debugger (broken)
```
npm run debug
```
- Run the following commands to run on OS with ts-node/debugger, hot reload
  (broken)
```
npm run debug2
```
- Run the following commands to build and run on OS (working)
```
npm run build
npm run start
```


# The problem

So, it appears to be an issue when I want to run ts-node. First encountered this 
issue with nodemon, then node itself.


```
SyntaxError: Cannot use import statement outside a module
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1166:20)
    at Module._compile (node:internal/modules/cjs/loader:1210:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1300:10)
    at Object.require.extensions.<computed> [as .ts] (/home/ubuntu/repositories/andrew/api-604/node_modules/ts-node/src/index.ts:1608:43)
    at Module.load (node:internal/modules/cjs/loader:1103:32)
    at Function.Module._load (node:internal/modules/cjs/loader:942:12)
    at Module.require (node:internal/modules/cjs/loader:1127:19)
    at require (node:internal/modules/helpers:112:18)
    at Object.<anonymous> (/home/ubuntu/repositories/andrew/api-604/src/activecampaign.ts:2:1)
```



# How I got here

Exploring activecampaign API:
https://developers.activecampaign.com/reference/update-list-status-for-contact
See the tool 'api' for node.js, looks great.
Go to the website for the tool, have no sweet clue how to install.
Follow the instructions on the main page, and doesn't work.

After some googling, I figure out that I have to use an API call to find the
same openAPI definition they are using on the website:

https://dash.readme.com/api/v1/api-registry/42ian3xklfclgj2y


Then, I copy paste this locally into my repo, find the readme for the API tool,
follow the instructions it gives to install, THEN have the issues from notes.md,
THEN run into this issue (https://github.com/readmeio/api/issues/604)






