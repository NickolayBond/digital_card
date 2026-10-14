import { Resolver, Query } from '@nestjs/graphql';
import { ProfileModel } from './models/profile.model.js';
import { ProfileService } from './profile.service.js';



@Resolver(() => ProfileModel)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => ProfileModel, { nullable: true })
  async profile() {
    return this.profileService.getProfile();
  }
}