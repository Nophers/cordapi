import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    name = "name",
    id = "id",
    createdAt = "createdAt",
    count = "count",
    displayName = "displayName",
    email = "email",
    mobile = "mobile",
    message = "message",
    team = "team"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
