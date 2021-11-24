import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { userCreateInput } from './user-create.input';

@ArgsType()
export class CreateOneuserArgs {

    @Field(() => userCreateInput, {nullable:false})
    data!: userCreateInput;
}
