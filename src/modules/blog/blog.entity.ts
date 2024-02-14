import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from '../../abstract/entity.interface';

@ObjectType()
export class Blog extends BaseEntity {
  @Field()
  published: Date;

  @Field()
  isDraft: boolean;
}
