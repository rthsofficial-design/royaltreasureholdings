import List "mo:core/List";
import Types "../types/board";

module {
  public func listBoardMembers(members : List.List<Types.BoardMember>) : [Types.BoardMember] {
    members.toArray();
  };

  public func getBoardMember(members : List.List<Types.BoardMember>, id : Types.BoardMemberId) : ?Types.BoardMember {
    members.find(func(m) { m.id == id });
  };

  public func createBoardMember(members : List.List<Types.BoardMember>, nextId : Nat, args : Types.CreateBoardMemberArgs) : Types.BoardMember {
    let member : Types.BoardMember = {
      id = nextId;
      name = args.name;
      title = args.title;
      bio = args.bio;
      photoUrl = args.photoUrl;
      linkedIn = args.linkedIn;
      order = args.order;
    };
    members.add(member);
    member;
  };

  public func updateBoardMember(members : List.List<Types.BoardMember>, args : Types.UpdateBoardMemberArgs) : ?Types.BoardMember {
    var updated : ?Types.BoardMember = null;
    members.mapInPlace(func(m) {
      if (m.id == args.id) {
        let newMember : Types.BoardMember = {
          id = m.id;
          name = args.name;
          title = args.title;
          bio = args.bio;
          photoUrl = args.photoUrl;
          linkedIn = args.linkedIn;
          order = args.order;
        };
        updated := ?newMember;
        newMember;
      } else {
        m;
      };
    });
    updated;
  };

  public func deleteBoardMember(members : List.List<Types.BoardMember>, id : Types.BoardMemberId) : Bool {
    let sizeBefore = members.size();
    let kept = members.filter(func(m) { m.id != id });
    members.clear();
    members.append(kept);
    members.size() < sizeBefore;
  };
};
