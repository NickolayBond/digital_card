import { Resolver, Query } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service.js';
import { ProfileGraph } from './models/profile.model.js';

@Resolver(() => ProfileGraph)
export class ProfileResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [ProfileGraph], { name: 'profiles' })
  async getProfiles() {
    return this.prisma.profile.findMany();
  }
}
