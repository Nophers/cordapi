import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { userWhereInput } from './user-where.input';

@ArgsType()
export class DeleteManyuserArgs {

    @Field(() => userWhereInput, {nullable:true})
    where?: userWhereInput;
}
