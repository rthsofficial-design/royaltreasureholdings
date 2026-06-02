import List "mo:core/List";
import ContactTypes "../types/contact";
import ContactLib "../lib/contact";

mixin (contactSubmissions : List.List<ContactTypes.ContactSubmission>) {
  var nextContactId : Nat = 1;

  public shared func submitContact(args : ContactTypes.SubmitContactArgs) : async ContactTypes.ContactSubmission {
    let submission = ContactLib.submitContact(contactSubmissions, nextContactId, args);
    nextContactId += 1;
    submission;
  };

  public query func listContactSubmissions() : async [ContactTypes.ContactSubmission] {
    ContactLib.listContactSubmissions(contactSubmissions);
  };
};
