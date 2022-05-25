import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BlogService } from './blog.service';
import { Blog } from './entities/blog.entity';
//import { Blog } from './blog.schema';
import { CreateBlogInput } from './dto/create-blog.input';
import { UpdateBlogInput } from './dto/update-blog.input';

@Resolver(() => Blog)
export class BlogResolver {
  constructor(private readonly blogService: BlogService) {}

  @Mutation(() => Blog)
  createBlog(@Args('createBlogInput') createBlogInput: CreateBlogInput) {
    return this.blogService.create(createBlogInput);
  }

  @Query(() => [Blog], { name: 'blog' })
  findAll() {
    console.log ("Hui");
    return this.blogService.findAll();
  }

  @Query(() => Blog, { name: 'blog' })
  findOne(@Args('_id', { type: () => String }) id: string) {
    return this.blogService.findOne(id);
  }

  @Mutation(() => Blog)
  updateBlog(@Args('updateBlogInput') updateBlogInput: UpdateBlogInput) {
    return this.blogService.update(updateBlogInput._id, updateBlogInput);
  }

  /*
  

  @Mutation(() => Blog)
  removeBlog(@Args('id', { type: () => Int }) id: number) {
    return this.blogService.remove(id);
  }
  */
}
