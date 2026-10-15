import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service.js';
import { ProfileModel } from './models/profile.model.js';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async getProfile():Promise<ProfileModel | null> {
    return this.prisma.profile.findFirst({
      include: {
        links: true,
        skills: true,
        experience: true,
        projects: true,
      },
    });
  }
}