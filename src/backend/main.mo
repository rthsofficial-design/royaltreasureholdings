import List "mo:core/List";
import OQL "mo:caffeineai-oql";
import Expose "mo:caffeineai-oql/Expose";
import BrandTypes "types/brands";
import BoardTypes "types/board";
import JobTypes "types/jobs";
import ContactTypes "types/contact";
import FirmTypes "types/firm";
// Top-level import required by the OQL field resolver so it can find the
// _toRow conversion for the JobType variant field on Job.
import JobTypeValue "types/JobTypeValue";
import BrandsApi "mixins/brands-api";
import BoardApi "mixins/board-api";
import JobsApi "mixins/jobs-api";
import ContactApi "mixins/contact-api";
import FirmApi "mixins/firm-api";
import FirmLib "lib/firm";
import Migration "migration";

(with migration = Migration.run)
actor {
  let brands = List.empty<BrandTypes.Brand>();
  let boardMembers = List.empty<BoardTypes.BoardMember>();
  let jobs = List.empty<JobTypes.Job>();
  let applications = List.empty<JobTypes.JobApplication>();
  let contactSubmissions = List.empty<ContactTypes.ContactSubmission>();
  let firmInfo = { var value = FirmLib.defaultFirmInfo() };

  include BrandsApi(brands);
  include BoardApi(boardMembers);
  include JobsApi(jobs, applications);
  include ContactApi(contactSubmissions);
  include FirmApi(firmInfo);

  include Expose({
    entities = [
      brands
        .toEntity("brand", "Brand", "id")
        .sample({ id = 0; name = ""; logoUrl = ""; description = ""; sector = ""; website = ""; order = 0 })
        .public_()
        .build(),
      boardMembers
        .toEntity("boardMember", "BoardMember", "id")
        .sample({ id = 0; name = ""; title = ""; bio = ""; photoUrl = ""; linkedIn = ""; order = 0 })
        .public_()
        .build(),
      jobs
        .toEntity("job", "Job", "id")
        .sample({ id = 0; title = ""; department = ""; location = ""; description = ""; jobType = #fullTime; isActive = false })
        .public_()
        .build(),
      applications
        .toEntity("jobApplication", "JobApplication", "id")
        .sample({ id = 0; jobId = 0; applicantName = ""; email = ""; message = ""; submittedAt = 0 })
        .controllerOnly()
        .build(),
      contactSubmissions
        .toEntity("contactSubmission", "ContactSubmission", "id")
        .sample({ id = 0; name = ""; email = ""; subject = ""; message = ""; submittedAt = 0 })
        .controllerOnly()
        .build(),
      // firmInfo is a single record, not a collection — expose it as a one-row
      // manual entity so the firm's public copy is queryable.
      OQL.Entity.manual<FirmTypes.FirmInfo>(
        "firmInfo",
        func() = [firmInfo.value].vals(),
        "FirmInfo",
        "heroHeadline",
      )
        .payload("heroHeadline", func(f) = f.heroHeadline)
        .payload("heroCopy", func(f) = f.heroCopy)
        .payload("missionStatement", func(f) = f.missionStatement)
        .payload("investmentStrategy", func(f) = f.investmentStrategy)
        .payload("statsJson", func(f) = f.statsJson)
        .public_()
        .build(),
    ];
  });
};
