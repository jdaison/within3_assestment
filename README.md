# Description

Backend to get zip code info using country code and zip code consuming https://api.zippopotam.us/

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## File structure

```bash
├───root_reporitory
│   ├───── postman                          // collection to do test with postman
│   ├───── src                              // files with the source
│       ├── zipcode-inf                     // files with controller, service, interface
│       ├── app.module                      // app modules 
│       ├── main.ts                         // entry point 
│       ├── back-end-storage-data
│   ├───── test                             // files to setup testing
│   ├── .eslintrc.js
│   ├── .gitignore
│   ├── .prettierrc
│   ├── nest-cli.json
│   ├── package.json
└── └── tsconfig.json
```