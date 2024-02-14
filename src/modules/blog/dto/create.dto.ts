import { Field, InputType } from "@nestjs/graphql";

@InputType("createBlogInput")
export class CreateBlogInput {
  @Field()
  name: string;
}
