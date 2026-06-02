import List "mo:core/List";
import Runtime "mo:core/Runtime";
import BrandTypes "../types/brands";
import BrandLib "../lib/brands";

mixin (brands : List.List<BrandTypes.Brand>) {
  var nextBrandId : Nat = 1;

  public query func listBrands() : async [BrandTypes.Brand] {
    BrandLib.listBrands(brands);
  };

  public query func getBrand(id : BrandTypes.BrandId) : async ?BrandTypes.Brand {
    BrandLib.getBrand(brands, id);
  };

  public shared func createBrand(args : BrandTypes.CreateBrandArgs) : async BrandTypes.Brand {
    if (brands.size() >= 10) {
      Runtime.trap("Maximum of 10 brands allowed");
    };
    let brand = BrandLib.createBrand(brands, nextBrandId, args);
    nextBrandId += 1;
    brand;
  };

  public shared func updateBrand(args : BrandTypes.UpdateBrandArgs) : async ?BrandTypes.Brand {
    BrandLib.updateBrand(brands, args);
  };

  public shared func deleteBrand(id : BrandTypes.BrandId) : async Bool {
    BrandLib.deleteBrand(brands, id);
  };
};
