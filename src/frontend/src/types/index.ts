export type {
  Brand,
  BrandId,
  BoardMember,
  BoardMemberId,
  Job,
  JobId,
  JobType,
  JobApplication,
  ApplicationId,
  FirmInfo,
  ContactSubmission,
  ContactSubmissionId,
  Timestamp,
  CreateBrandArgs,
  UpdateBrandArgs,
  CreateBoardMemberArgs,
  UpdateBoardMemberArgs,
  CreateJobArgs,
  UpdateJobArgs,
  SubmitApplicationArgs,
  SubmitContactArgs,
  UpdateFirmInfoArgs,
} from "../backend";

export { JobType as JobTypeEnum } from "../backend";

export interface NavItem {
  label: string;
  path: string;
}

export interface Stat {
  label: string;
  value: string;
}
