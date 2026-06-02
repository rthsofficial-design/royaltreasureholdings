import Common "common";

module {
  public type BrandId = Common.Id;

  public type Brand = {
    id : BrandId;
    name : Text;
    logoUrl : Text;
    description : Text;
    sector : Text;
    website : Text;
    order : Nat;
  };

  public type CreateBrandArgs = {
    name : Text;
    logoUrl : Text;
    description : Text;
    sector : Text;
    website : Text;
    order : Nat;
  };

  public type UpdateBrandArgs = {
    id : BrandId;
    name : Text;
    logoUrl : Text;
    description : Text;
    sector : Text;
    website : Text;
    order : Nat;
  };
};
