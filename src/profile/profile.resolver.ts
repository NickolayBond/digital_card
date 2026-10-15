import { Resolver, Query } from '@nestjs/graphql';
import { ProfileModel } from './models/profile.model.js';
import { ProfileService } from './profile.service.js';

@Resolver(() => ProfileModel)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => ProfileModel, { name: 'profile', nullable: true })
  async getProfile(): Promise<ProfileModel  | null> {
    return this.profileService.getProfile();
  }
}
