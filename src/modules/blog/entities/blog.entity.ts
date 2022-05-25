import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class Blog {

  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String, { description: 'Blog Title' })
  title: string;

  @Prop()
  @Field(() => String, { description: 'Blog Description' })
  description: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
