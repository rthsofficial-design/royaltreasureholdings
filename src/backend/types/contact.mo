import Common "common";

module {
  public type ContactSubmissionId = Common.Id;

  public type ContactSubmission = {
    id : ContactSubmissionId;
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    submittedAt : Common.Timestamp;
  };

  public type SubmitContactArgs = {
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
  };
};
