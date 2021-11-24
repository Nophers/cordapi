import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { userUpdateInput } from './user-update.input';
import { userWhereUniqueInput } from './user-where-unique.input';

@ArgsType()
export class UpdateOneuserArgs {

    @Field(() => userUpdateInput, {nullable:false})
    data!: userUpdateInput;

    @Field(() => userWhereUniqueInput, {nullable:false})
    where!: userWhereUniqueInput;
}
