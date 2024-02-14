import { Field, InputType, Int, PartialType } from "@nestjs/graphql";
import { CreateBlogInput } from "./create.dto";

@InputType("updateBlogInput")
export class UpdateBlogInput extends PartialType(CreateBlogInput) {
  @Field(() => Int)
  id: number;
}
