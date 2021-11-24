import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { userWhereUniqueInput } from './user-where-unique.input';
import { userCreateInput } from './user-create.input';
import { userUpdateInput } from './user-update.input';

@ArgsType()
export class UpsertOneuserArgs {

    @Field(() => userWhereUniqueInput, {nullable:false})
    where!: userWhereUniqueInput;

    @Field(() => userCreateInput, {nullable:false})
    create!: userCreateInput;

    @Field(() => userUpdateInput, {nullable:false})
    update!: userUpdateInput;
}
