import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { UserSetting } from "../models/UserSetting";
import { CreateUserSettingDto } from "../dtos/CreateUserSettingDto";
import { mockUserSettings } from "src/__mocks__/mockUserSettings";

@Resolver()
export class UserSettingResolver {
    @Mutation(returns => UserSetting)
    createUserSetting(@Args("dto") dto: CreateUserSettingDto){
        mockUserSettings.push(dto);
        return dto;
    }
}