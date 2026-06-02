import Common "common";

module {
  public type JobId = Common.Id;

  public type JobType = {
    #fullTime;
    #partTime;
    #contract;
  };

  public type Job = {
    id : JobId;
    title : Text;
    department : Text;
    location : Text;
    description : Text;
    jobType : JobType;
    isActive : Bool;
  };

  public type CreateJobArgs = {
    title : Text;
    department : Text;
    location : Text;
    description : Text;
    jobType : JobType;
    isActive : Bool;
  };

  public type UpdateJobArgs = {
    id : JobId;
    title : Text;
    department : Text;
    location : Text;
    description : Text;
    jobType : JobType;
    isActive : Bool;
  };

  public type ApplicationId = Common.Id;

  public type JobApplication = {
    id : ApplicationId;
    jobId : JobId;
    applicantName : Text;
    email : Text;
    message : Text;
    submittedAt : Common.Timestamp;
  };

  public type SubmitApplicationArgs = {
    jobId : JobId;
    applicantName : Text;
    email : Text;
    message : Text;
  };
};
