import List "mo:core/List";
import BoardTypes "../types/board";
import BoardLib "../lib/board";

mixin (boardMembers : List.List<BoardTypes.BoardMember>) {
  var nextBoardMemberId : Nat = 1;

  public query func listBoardMembers() : async [BoardTypes.BoardMember] {
    BoardLib.listBoardMembers(boardMembers);
  };

  public query func getBoardMember(id : BoardTypes.BoardMemberId) : async ?BoardTypes.BoardMember {
    BoardLib.getBoardMember(boardMembers, id);
  };

  public shared func createBoardMember(args : BoardTypes.CreateBoardMemberArgs) : async BoardTypes.BoardMember {
    let member = BoardLib.createBoardMember(boardMembers, nextBoardMemberId, args);
    nextBoardMemberId += 1;
    member;
  };

  public shared func updateBoardMember(args : BoardTypes.UpdateBoardMemberArgs) : async ?BoardTypes.BoardMember {
    BoardLib.updateBoardMember(boardMembers, args);
  };

  public shared func deleteBoardMember(id : BoardTypes.BoardMemberId) : async Bool {
    BoardLib.deleteBoardMember(boardMembers, id);
  };
};
