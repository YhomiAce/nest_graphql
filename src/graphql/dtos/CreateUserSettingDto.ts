import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserSettingDto {
  @Field((type) => Int)
  userId: number;
  
  @Field({ nullable: true, defaultValue: false })
  enableNotifications: boolean;

  @Field({ nullable: true, defaultValue: false })
  smsEnabled: boolean;
}
