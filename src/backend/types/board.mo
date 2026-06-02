import Common "common";

module {
  public type BoardMemberId = Common.Id;

  public type BoardMember = {
    id : BoardMemberId;
    name : Text;
    title : Text;
    bio : Text;
    photoUrl : Text;
    linkedIn : Text;
    order : Nat;
  };

  public type CreateBoardMemberArgs = {
    name : Text;
    title : Text;
    bio : Text;
    photoUrl : Text;
    linkedIn : Text;
    order : Nat;
  };

  public type UpdateBoardMemberArgs = {
    id : BoardMemberId;
    name : Text;
    title : Text;
    bio : Text;
    photoUrl : Text;
    linkedIn : Text;
    order : Nat;
  };
};
