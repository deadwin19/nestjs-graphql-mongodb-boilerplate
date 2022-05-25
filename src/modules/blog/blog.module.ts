import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogResolver } from './blog.resolver';
//import { Blog, BlogSchema } from './blog.schema';
import { Blog, BlogSchema} from './entities/blog.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Blog.name, schema: BlogSchema}
    ])
  ],
  providers: [BlogResolver, BlogService]
})
export class BlogModule {}
