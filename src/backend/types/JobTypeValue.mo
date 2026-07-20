import JobTypes "jobs";
import OQL "mo:caffeineai-oql";

module {
  public func _toRow(self : JobTypes.JobType) : OQL.Value {
    #text(
      switch (self) {
        case (#fullTime) "fullTime";
        case (#partTime) "partTime";
        case (#contract) "contract";
      }
    );
  };
};
