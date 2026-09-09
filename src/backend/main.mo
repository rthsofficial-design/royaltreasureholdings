import List "mo:core/List";
import OQL "mo:caffeineai-oql";
import Expose "mo:caffeineai-oql/Expose";
// Top-level import required so the OQL resolver finds the `toEntity` receiver
// extension for List.List<T> (the extension lives in its own module and is not
// re-exported by the main OQL import).
import ListEntity "mo:caffeineai-oql/ListEntity";
// Top-level imports required by the OQL implicit resolver: RecordValue drives
// the _toRow derivation for record types, Entity exposes the Builder methods
// (sample/public_/controllerOnly/build), and the primitive value modules
// back the implicit resolver for each field type.
import RecordValue "mo:caffeineai-oql/RecordValue";
import Entity "mo:caffeineai-oql/Entity";
import NatValue "mo:caffeineai-oql/NatValue";
import IntValue "mo:caffeineai-oql/IntValue";
import TextValue "mo:caffeineai-oql/TextValue";
import BoolValue "mo:caffeineai-oql/BoolValue";
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

actor {
  let brands : List.List<BrandTypes.Brand>;
  let boardMembers : List.List<BoardTypes.BoardMember>;
  let jobs : List.List<JobTypes.Job>;
  let applications : List.List<JobTypes.JobApplication>;
  let contactSubmissions : List.List<ContactTypes.ContactSubmission>;
  let firmInfo : { var value : FirmTypes.FirmInfo };

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
