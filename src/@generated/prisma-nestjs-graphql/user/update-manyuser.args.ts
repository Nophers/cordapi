import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { userUpdateManyMutationInput } from './user-update-many-mutation.input';
import { userWhereInput } from './user-where.input';

@ArgsType()
export class UpdateManyuserArgs {

    @Field(() => userUpdateManyMutationInput, {nullable:false})
    data!: userUpdateManyMutationInput;

    @Field(() => userWhereInput, {nullable:true})
    where?: userWhereInput;
}
