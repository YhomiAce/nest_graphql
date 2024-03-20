import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../graphql/models/User';
import { mockUsers } from 'src/__mocks__/mockusers';
import { UserSetting } from '../graphql/models/UserSetting';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';
import { CreateUserInput } from '../graphql/dtos/CreateUserInput';

@Resolver((of) => User)
export class UserResolver {
  @Query((returns) => User, { nullable: true, name: 'userById' })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((item) => item.id === id);
  }

  @Query((returns) => [User], { name: 'users' })
  getUsers() {
    return mockUsers;
  }

  @ResolveField((returns) => UserSetting, { name: 'settings', nullable: true })
  getUserSettings(@Parent() user: User) {
    return mockUserSettings.find((item) => item.userId === user.id);
  }

  @Mutation((returns) => User)
  createUser(
    // @Args('username') username: string,
    // @Args('displayName', { nullable: true }) displayName: string,
    @Args('CreateUserInput') { displayName, username }: CreateUserInput,
  ) {
    const newUser = {
      id: mockUsers.length + 1,
      username,
      displayName,
    };
    mockUsers.push(newUser);
    return newUser;
  }
}
