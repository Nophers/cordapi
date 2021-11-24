import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { userCountOrderByAggregateInput } from './user-count-order-by-aggregate.input';
import { userAvgOrderByAggregateInput } from './user-avg-order-by-aggregate.input';
import { userMaxOrderByAggregateInput } from './user-max-order-by-aggregate.input';
import { userMinOrderByAggregateInput } from './user-min-order-by-aggregate.input';
import { userSumOrderByAggregateInput } from './user-sum-order-by-aggregate.input';

@InputType()
export class userOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    count?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    displayName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mobile?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    message?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    team?: keyof typeof SortOrder;

    @Field(() => userCountOrderByAggregateInput, {nullable:true})
    _count?: userCountOrderByAggregateInput;

    @Field(() => userAvgOrderByAggregateInput, {nullable:true})
    _avg?: userAvgOrderByAggregateInput;

    @Field(() => userMaxOrderByAggregateInput, {nullable:true})
    _max?: userMaxOrderByAggregateInput;

    @Field(() => userMinOrderByAggregateInput, {nullable:true})
    _min?: userMinOrderByAggregateInput;

    @Field(() => userSumOrderByAggregateInput, {nullable:true})
    _sum?: userSumOrderByAggregateInput;
}
