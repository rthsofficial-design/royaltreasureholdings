import List "mo:core/List";
import BrandTypes "types/brands";
import BoardTypes "types/board";
import JobTypes "types/jobs";
import ContactTypes "types/contact";
import BrandsApi "mixins/brands-api";
import BoardApi "mixins/board-api";
import JobsApi "mixins/jobs-api";
import ContactApi "mixins/contact-api";
import FirmApi "mixins/firm-api";

actor {
  let brands = List.empty<BrandTypes.Brand>();
  let boardMembers = List.empty<BoardTypes.BoardMember>();
  let jobs = List.empty<JobTypes.Job>();
  let applications = List.empty<JobTypes.JobApplication>();
  let contactSubmissions = List.empty<ContactTypes.ContactSubmission>();

  include BrandsApi(brands);
  include BoardApi(boardMembers);
  include JobsApi(jobs, applications);
  include ContactApi(contactSubmissions);
  include FirmApi();
};
