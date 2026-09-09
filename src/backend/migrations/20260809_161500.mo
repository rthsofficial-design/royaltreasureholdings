// First migration in the enhanced-migration chain.
//
// This project was converted in place from legacy inline `(with migration = ...)`
// persistence (the deployed `.most` reports Version: 3.0.0). Per the
// troubleshooting-motoko-migrations skill, the first file in a converted
// project's chain is an IDENTITY migration: its `OldActor` describes the
// pre-conversion stable shape (the live canister state) and its `NewActor`
// passes that same state through unchanged. `OldActor = {}` would be wrong
// here — it would discard live state. Fresh installs of a converted project
// replay from the last legacy schema, not from `{}`, so the body reading
// `old.*` is correct on both fresh install and upgrade.
//
// Under enhanced migration the actor body declares its stable fields with
// types only (no inline initializers); this migration is what supplies their
// values. All project types are inlined because the chain replays forever —
// importing `../types` would freeze a snapshot that drifts the moment a type
// changes. Only `mo:core/...` imports are permitted.
import List "mo:core/List";

module {
  // --- Inlined row types (must match types/*.mo at conversion time) ---

  type Brand = {
    id : Nat;
    name : Text;
    logoUrl : Text;
    description : Text;
    sector : Text;
    website : Text;
    order : Nat;
  };

  type BoardMember = {
    id : Nat;
    name : Text;
    title : Text;
    bio : Text;
    photoUrl : Text;
    linkedIn : Text;
    order : Nat;
  };

  type JobType = { #fullTime; #partTime; #contract };

  type Job = {
    id : Nat;
    title : Text;
    department : Text;
    location : Text;
    description : Text;
    jobType : JobType;
    isActive : Bool;
  };

  type JobApplication = {
    id : Nat;
    jobId : Nat;
    applicantName : Text;
    email : Text;
    message : Text;
    submittedAt : Int;
  };

  type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    submittedAt : Int;
  };

  type FirmInfo = {
    heroHeadline : Text;
    heroCopy : Text;
    missionStatement : Text;
    investmentStrategy : Text;
    statsJson : Text;
  };

  // --- Actor stable shapes ---
  //
  // `OldActor` matches the deployed `.most` signature (the live canister state
  // at conversion time). `NewActor` is the same shape — this is an identity
  // pass-through. The `let` collection fields are non-var; the `nextXxxId`
  // counters and the `firmInfo.value` wrapper are `var`.

  type OldActor = {
    brands : List.List<Brand>;
    boardMembers : List.List<BoardMember>;
    jobs : List.List<Job>;
    applications : List.List<JobApplication>;
    contactSubmissions : List.List<ContactSubmission>;
    firmInfo : { var value : FirmInfo };
    nextBrandId : Nat;
    nextBoardMemberId : Nat;
    nextJobId : Nat;
    nextApplicationId : Nat;
    nextContactId : Nat;
  };

  type NewActor = {
    brands : List.List<Brand>;
    boardMembers : List.List<BoardMember>;
    jobs : List.List<Job>;
    applications : List.List<JobApplication>;
    contactSubmissions : List.List<ContactSubmission>;
    firmInfo : { var value : FirmInfo };
    nextBrandId : Nat;
    nextBoardMemberId : Nat;
    nextJobId : Nat;
    nextApplicationId : Nat;
    nextContactId : Nat;
  };

  public func migration(old : OldActor) : NewActor {
    // Field-by-field construction (no record spread — `firmInfo` and the
    // List internals carry `var` fields, which Motoko rejects under spread).
    {
      brands = old.brands;
      boardMembers = old.boardMembers;
      jobs = old.jobs;
      applications = old.applications;
      contactSubmissions = old.contactSubmissions;
      firmInfo = old.firmInfo;
      nextBrandId = old.nextBrandId;
      nextBoardMemberId = old.nextBoardMemberId;
      nextJobId = old.nextJobId;
      nextApplicationId = old.nextApplicationId;
      nextContactId = old.nextContactId;
    };
  };
};
