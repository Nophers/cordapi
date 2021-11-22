## Description

[Konicord](https://github.com/vKxni/konicord) helping APi for the konicord website.

## Setup

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

# genereate Prisma Database 
$ npm run gen-typing

# start the watch mode for the sql prisma database
$ npm run prisma:generate

# test database query with John as a donation example
$ npm run seed

# regenerate prisma schema
$ npx prisma generate

You defined a user model which translates to a database table, and you defined properties on that model which translates to database columns, you created a displayName property (column) and marked it as required because it doesn’t have a question (displayName String?) mark, so whenever you want to create a row for users with prisma.user.create, inside data you need to provide a value for displayName
If you didn’t mean to make it a required value, you can add a question mark in your schema and regenerate again
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

## Support

* If you find any errors or typos, feel free to open a Issue request to solve the problem.
* Discord Support [Server](https://discord.gg/McDe44pbgG)


