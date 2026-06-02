import List "mo:core/List";
import JobTypes "../types/jobs";
import JobLib "../lib/jobs";

mixin (
  jobs : List.List<JobTypes.Job>,
  applications : List.List<JobTypes.JobApplication>,
) {
  var nextJobId : Nat = 1;
  var nextApplicationId : Nat = 1;

  public query func listJobs() : async [JobTypes.Job] {
    JobLib.listJobs(jobs);
  };

  public query func listActiveJobs() : async [JobTypes.Job] {
    JobLib.listActiveJobs(jobs);
  };

  public query func getJob(id : JobTypes.JobId) : async ?JobTypes.Job {
    JobLib.getJob(jobs, id);
  };

  public shared func createJob(args : JobTypes.CreateJobArgs) : async JobTypes.Job {
    let job = JobLib.createJob(jobs, nextJobId, args);
    nextJobId += 1;
    job;
  };

  public shared func updateJob(args : JobTypes.UpdateJobArgs) : async ?JobTypes.Job {
    JobLib.updateJob(jobs, args);
  };

  public shared func deleteJob(id : JobTypes.JobId) : async Bool {
    JobLib.deleteJob(jobs, id);
  };

  public shared func submitApplication(args : JobTypes.SubmitApplicationArgs) : async JobTypes.JobApplication {
    let app = JobLib.submitApplication(applications, nextApplicationId, args);
    nextApplicationId += 1;
    app;
  };

  public query func listApplications() : async [JobTypes.JobApplication] {
    JobLib.listApplications(applications);
  };

  public query func listApplicationsForJob(jobId : JobTypes.JobId) : async [JobTypes.JobApplication] {
    JobLib.listApplicationsForJob(applications, jobId);
  };
};
