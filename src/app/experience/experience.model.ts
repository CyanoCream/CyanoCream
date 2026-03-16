import { Skill } from '../skills/skill.model';

export class Experience {
  constructor(
    public id: string,
    public title: string,
    public company: string,
    public companyLogoImageUrl: string,
    public location: string,
    public countryFlagImageUrl: string,
    public skillIds: string[],
    public taskPerformed: string[],
    public startDate: Date,
    public endDate?: Date,
    public employmentType?: string
  ) {}
}

export class ExperienceWithSkills extends Experience {
  constructor(
    id: string,
    title: string,
    company: string,
    companyLogoImageUrl: string,
    location: string,
    countryFlagImageUrl: string,
    skillIds: string[],
    public skills: Skill[],
    taskPerformed: string[],
    startDate: Date,
    endDate?: Date,
    employmentType?: string
  ) {
    super(
      id,
      title,
      company,
      companyLogoImageUrl,
      location,
      countryFlagImageUrl,
      skillIds,
      taskPerformed,
      startDate,
      endDate,
      employmentType
    );
  }
}
