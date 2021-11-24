/* eslint-disable prettier/prettier */
import { registerEnumType } from '@nestjs/graphql';

export enum FileScalarFieldEnum {
    name = "name",
    id = "id",
    createdAt = "createdAt",
    description = "description"
}


registerEnumType(FileScalarFieldEnum, { name: 'FileScalarFieldEnum', description: undefined })
