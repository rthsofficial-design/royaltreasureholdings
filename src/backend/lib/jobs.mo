import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/jobs";

module {
  public func listJobs(jobs : List.List<Types.Job>) : [Types.Job] {
    jobs.toArray();
  };

  public func listActiveJobs(jobs : List.List<Types.Job>) : [Types.Job] {
    jobs.filter(func(j) { j.isActive }).toArray();
  };

  public func getJob(jobs : List.List<Types.Job>, id : Types.JobId) : ?Types.Job {
    jobs.find(func(j) { j.id == id });
  };

  public func createJob(jobs : List.List<Types.Job>, nextId : Nat, args : Types.CreateJobArgs) : Types.Job {
    let job : Types.Job = {
      id = nextId;
      title = args.title;
      department = args.department;
      location = args.location;
      description = args.description;
      jobType = args.jobType;
      isActive = args.isActive;
    };
    jobs.add(job);
    job;
  };

  public func updateJob(jobs : List.List<Types.Job>, args : Types.UpdateJobArgs) : ?Types.Job {
    var updated : ?Types.Job = null;
    jobs.mapInPlace(func(j) {
      if (j.id == args.id) {
        let newJob : Types.Job = {
          id = j.id;
          title = args.title;
          department = args.department;
          location = args.location;
          description = args.description;
          jobType = args.jobType;
          isActive = args.isActive;
        };
        updated := ?newJob;
        newJob;
      } else {
        j;
      };
    });
    updated;
  };

  public func deleteJob(jobs : List.List<Types.Job>, id : Types.JobId) : Bool {
    let sizeBefore = jobs.size();
    let kept = jobs.filter(func(j) { j.id != id });
    jobs.clear();
    jobs.append(kept);
    jobs.size() < sizeBefore;
  };

  public func submitApplication(applications : List.List<Types.JobApplication>, nextId : Nat, args : Types.SubmitApplicationArgs) : Types.JobApplication {
    let app : Types.JobApplication = {
      id = nextId;
      jobId = args.jobId;
      applicantName = args.applicantName;
      email = args.email;
      message = args.message;
      submittedAt = Time.now();
    };
    applications.add(app);
    app;
  };

  public func listApplications(applications : List.List<Types.JobApplication>) : [Types.JobApplication] {
    applications.toArray();
  };

  public func listApplicationsForJob(applications : List.List<Types.JobApplication>, jobId : Types.JobId) : [Types.JobApplication] {
    applications.filter(func(a) { a.jobId == jobId }).toArray();
  };
};
