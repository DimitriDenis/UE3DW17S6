import { InputType, Field, ID, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  firstname: string;
  @Field()
  lastname: string;
  @Field()
  email: string;
}

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;
  @Field()
  firstname: string;
  @Field()
  lastname: string;
  @Field()
  email: string;
}
