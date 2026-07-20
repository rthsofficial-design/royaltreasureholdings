import FirmTypes "../types/firm";
import FirmLib "../lib/firm";

mixin (firmInfo : { var value : FirmTypes.FirmInfo }) {
  public query func getFirmInfo() : async FirmTypes.FirmInfo {
    firmInfo.value;
  };

  public shared func updateFirmInfo(args : FirmTypes.UpdateFirmInfoArgs) : async FirmTypes.FirmInfo {
    firmInfo.value := FirmLib.updateFirmInfo(firmInfo.value, args);
    firmInfo.value;
  };
};
