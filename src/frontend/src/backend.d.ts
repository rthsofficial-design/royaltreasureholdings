import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Timestamp = bigint;
export interface SubmitApplicationArgs {
    applicantName: string;
    jobId: JobId;
    email: string;
    message: string;
}
export type ContactSubmissionId = bigint;
export interface ContactSubmission {
    id: ContactSubmissionId;
    subject: string;
    name: string;
    submittedAt: Timestamp;
    email: string;
    message: string;
}
export interface BoardMember {
    id: BoardMemberId;
    bio: string;
    linkedIn: string;
    title: string;
    order: bigint;
    name: string;
    photoUrl: string;
}
export interface UpdateBrandArgs {
    id: BrandId;
    order: bigint;
    name: string;
    description: string;
    sector: string;
    website: string;
    logoUrl: string;
}
export interface SubmitContactArgs {
    subject: string;
    name: string;
    email: string;
    message: string;
}
export type JobId = bigint;
export interface UpdateBoardMemberArgs {
    id: BoardMemberId;
    bio: string;
    linkedIn: string;
    title: string;
    order: bigint;
    name: string;
    photoUrl: string;
}
export interface JobApplication {
    id: ApplicationId;
    applicantName: string;
    jobId: JobId;
    submittedAt: Timestamp;
    email: string;
    message: string;
}
export interface FirmInfo {
    missionStatement: string;
    statsJson: string;
    heroCopy: string;
    investmentStrategy: string;
    heroHeadline: string;
}
export interface CreateBrandArgs {
    order: bigint;
    name: string;
    description: string;
    sector: string;
    website: string;
    logoUrl: string;
}
export interface Brand {
    id: BrandId;
    order: bigint;
    name: string;
    description: string;
    sector: string;
    website: string;
    logoUrl: string;
}
export interface UpdateFirmInfoArgs {
    missionStatement: string;
    statsJson: string;
    heroCopy: string;
    investmentStrategy: string;
    heroHeadline: string;
}
export interface Job {
    id: JobId;
    title: string;
    jobType: JobType;
    description: string;
    isActive: boolean;
    department: string;
    location: string;
}
export interface CreateBoardMemberArgs {
    bio: string;
    linkedIn: string;
    title: string;
    order: bigint;
    name: string;
    photoUrl: string;
}
export interface CreateJobArgs {
    title: string;
    jobType: JobType;
    description: string;
    isActive: boolean;
    department: string;
    location: string;
}
export type BrandId = bigint;
export type ApplicationId = bigint;
export interface UpdateJobArgs {
    id: JobId;
    title: string;
    jobType: JobType;
    description: string;
    isActive: boolean;
    department: string;
    location: string;
}
export type BoardMemberId = bigint;
export enum JobType {
    contract = "contract",
    partTime = "partTime",
    fullTime = "fullTime"
}
export interface backendInterface {
    createBoardMember(args: CreateBoardMemberArgs): Promise<BoardMember>;
    createBrand(args: CreateBrandArgs): Promise<Brand>;
    createJob(args: CreateJobArgs): Promise<Job>;
    deleteBoardMember(id: BoardMemberId): Promise<boolean>;
    deleteBrand(id: BrandId): Promise<boolean>;
    deleteJob(id: JobId): Promise<boolean>;
    getBoardMember(id: BoardMemberId): Promise<BoardMember | null>;
    getBrand(id: BrandId): Promise<Brand | null>;
    getFirmInfo(): Promise<FirmInfo>;
    getJob(id: JobId): Promise<Job | null>;
    listActiveJobs(): Promise<Array<Job>>;
    listApplications(): Promise<Array<JobApplication>>;
    listApplicationsForJob(jobId: JobId): Promise<Array<JobApplication>>;
    listBoardMembers(): Promise<Array<BoardMember>>;
    listBrands(): Promise<Array<Brand>>;
    listContactSubmissions(): Promise<Array<ContactSubmission>>;
    listJobs(): Promise<Array<Job>>;
    submitApplication(args: SubmitApplicationArgs): Promise<JobApplication>;
    submitContact(args: SubmitContactArgs): Promise<ContactSubmission>;
    updateBoardMember(args: UpdateBoardMemberArgs): Promise<BoardMember | null>;
    updateBrand(args: UpdateBrandArgs): Promise<Brand | null>;
    updateFirmInfo(args: UpdateFirmInfoArgs): Promise<FirmInfo>;
    updateJob(args: UpdateJobArgs): Promise<Job | null>;
}
