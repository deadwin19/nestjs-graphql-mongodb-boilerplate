import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBlogInput {
  @Field(() => String, { description: 'Blog Title' })
  title: string;

  @Field(() => String, { description: 'Blog Description' })
  description: string;
}
