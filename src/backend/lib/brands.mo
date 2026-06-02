import List "mo:core/List";
import Types "../types/brands";

module {
  public func listBrands(brands : List.List<Types.Brand>) : [Types.Brand] {
    brands.toArray();
  };

  public func getBrand(brands : List.List<Types.Brand>, id : Types.BrandId) : ?Types.Brand {
    brands.find(func(b) { b.id == id });
  };

  public func createBrand(brands : List.List<Types.Brand>, nextId : Nat, args : Types.CreateBrandArgs) : Types.Brand {
    let brand : Types.Brand = {
      id = nextId;
      name = args.name;
      logoUrl = args.logoUrl;
      description = args.description;
      sector = args.sector;
      website = args.website;
      order = args.order;
    };
    brands.add(brand);
    brand;
  };

  public func updateBrand(brands : List.List<Types.Brand>, args : Types.UpdateBrandArgs) : ?Types.Brand {
    var updated : ?Types.Brand = null;
    brands.mapInPlace(func(b) {
      if (b.id == args.id) {
        let newBrand : Types.Brand = {
          id = b.id;
          name = args.name;
          logoUrl = args.logoUrl;
          description = args.description;
          sector = args.sector;
          website = args.website;
          order = args.order;
        };
        updated := ?newBrand;
        newBrand;
      } else {
        b;
      };
    });
    updated;
  };

  public func deleteBrand(brands : List.List<Types.Brand>, id : Types.BrandId) : Bool {
    let sizeBefore = brands.size();
    let kept = brands.filter(func(b) { b.id != id });
    brands.clear();
    brands.append(kept);
    brands.size() < sizeBefore;
  };
};
