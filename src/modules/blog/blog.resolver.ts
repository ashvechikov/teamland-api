import { Resolver } from "@nestjs/graphql";
import { Blog } from "./blog.entity";
import { BlogService } from "./service/blog.service";
import { BaseResolver } from "src/abstract/base.resolver";
import { CreateBlogInput } from "./dto/create.dto";
import { UpdateBlogInput } from "./dto/update.dto";

@Resolver(() => Blog)
export class BlogResolver extends BaseResolver(Blog, CreateBlogInput, UpdateBlogInput) {
  constructor(private readonly service: BlogService) {
    super(service);
  }
}
