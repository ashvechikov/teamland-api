import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class BaseEntity {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  created: Date;

  @Field()
  updated: Date;

  @Field()
  deleted: Date;
}
