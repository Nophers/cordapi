# Information for Prisma
You defined a user model which translates to a database table,
and you defined properties on that model which translates
to database columns.
You created a displayName property (column) and marked it as required because it doesn’t have a question (displayName String?) mark, 
so whenever you want to create a row for users with prisma.user.create, 
inside data you need to provide a value for displayName
If you didn’t mean to make it a required value, 
you can add a question mark in your schema and regenerate again (npx prisma generate) + optional: refresh IDE/Editor

# Useful Links
* [Generate Prisma](https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/generating-prisma-client)
* [Prisma Migrate](https://www.prisma.io/docs/guides/database/developing-with-prisma-migrate)