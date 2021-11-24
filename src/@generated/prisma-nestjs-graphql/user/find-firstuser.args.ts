import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { userWhereInput } from './user-where.input';
import { userOrderByWithRelationInput } from './user-order-by-with-relation.input';
import { userWhereUniqueInput } from './user-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserScalarFieldEnum } from '../prisma/user-scalar-field.enum';

@ArgsType()
export class FindFirstuserArgs {

    @Field(() => userWhereInput, {nullable:true})
    where?: userWhereInput;

    @Field(() => [userOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<userOrderByWithRelationInput>;

    @Field(() => userWhereUniqueInput, {nullable:true})
    cursor?: userWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
