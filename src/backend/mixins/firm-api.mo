import FirmTypes "../types/firm";
import FirmLib "../lib/firm";

mixin () {
  var firmInfo : FirmTypes.FirmInfo = FirmLib.defaultFirmInfo();

  public query func getFirmInfo() : async FirmTypes.FirmInfo {
    firmInfo;
  };

  public shared func updateFirmInfo(args : FirmTypes.UpdateFirmInfoArgs) : async FirmTypes.FirmInfo {
    firmInfo := FirmLib.updateFirmInfo(firmInfo, args);
    firmInfo;
  };
};
