import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/contact";

module {
  public func submitContact(submissions : List.List<Types.ContactSubmission>, nextId : Nat, args : Types.SubmitContactArgs) : Types.ContactSubmission {
    let submission : Types.ContactSubmission = {
      id = nextId;
      name = args.name;
      email = args.email;
      subject = args.subject;
      message = args.message;
      submittedAt = Time.now();
    };
    submissions.add(submission);
    submission;
  };

  public func listContactSubmissions(submissions : List.List<Types.ContactSubmission>) : [Types.ContactSubmission] {
    submissions.toArray();
  };
};
