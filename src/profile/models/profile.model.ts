import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class LinkModel {
  @Field(() => ID)
  id: string;

  @Field()
  label: string;

  @Field()
  url: string;
}

@ObjectType()
export class SkillModel {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}

@ObjectType()
export class ExperienceModel {
  @Field(() => ID)
  id: string;

  @Field()
  company: string;

  @Field()
  position: string;

  @Field()
  period: string;

  @Field(() => [String])
  achievements: string[];
}

@ObjectType()
export class ProjectModel {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  link: string;
}

@ObjectType()
export class ProfileModel {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [LinkModel])
  links: LinkModel[];

  @Field(() => [SkillModel])
  skills: SkillModel[];

  @Field(() => [ExperienceModel])
  experience: ExperienceModel[];

  @Field(() => [ProjectModel])
  projects: ProjectModel[];
}

@ObjectType()
export class ProfileGraph {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;
}
