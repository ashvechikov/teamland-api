import { InputType, Field } from '@nestjs/graphql';

@InputType('createBlogInput')
export class CreateBlogInput {
  @Field()
  name: string;
}
