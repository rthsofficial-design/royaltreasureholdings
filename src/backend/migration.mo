import FirmTypes "./types/firm";

module {
  // The canister's last deployed stable shape already wraps firmInfo in
  // `{ var value : FirmInfo }` (the wrapper was introduced in an earlier
  // round). This round only changed string literals in defaultFirmInfo, so
  // the stable shape is unchanged; the migration is a structural pass-through
  // that satisfies the compatibility check against the previous wrapper shape.
  public type OldFirmInfo = {
    heroHeadline : Text;
    heroCopy : Text;
    missionStatement : Text;
    investmentStrategy : Text;
    statsJson : Text;
  };

  type OldActor = {
    firmInfo : { var value : OldFirmInfo };
  };

  type NewActor = {
    firmInfo : { var value : FirmTypes.FirmInfo };
  };

  public func run(old : OldActor) : NewActor {
    {
      firmInfo = {
        var value = {
          // Idempotent overwrite: the live canister's persisted firmInfo was
          // initialized from defaultFirmInfo() on first install and still
          // holds the old hero text. Changing the default string literal does
          // not retroactively update stored state, so the migration forces the
          // new RTHS hero strings on every upgrade. The other fields are
          // preserved as-is.
          heroHeadline = "RTHS is the leading multi-sector conglomerate";
          heroCopy = "Royal Treasure Holding's is a premier multi-sector conglomerate managing an elite portfolio of over 10 prestigious brands across fashion, finance, software, and retail";
          missionStatement = old.firmInfo.value.missionStatement;
          investmentStrategy = old.firmInfo.value.investmentStrategy;
          statsJson = old.firmInfo.value.statsJson;
        };
      };
    };
  };
};
