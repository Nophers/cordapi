import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { userWhereUniqueInput } from './user-where-unique.input';

@ArgsType()
export class FindUniqueuserArgs {

    @Field(() => userWhereUniqueInput, {nullable:false})
    where!: userWhereUniqueInput;
}
