import Types "../types/firm";

module {
  public func defaultFirmInfo() : Types.FirmInfo {
    {
      heroHeadline = "RTHS is the leading multi-sector conglomerate";
      heroCopy = "Royal Treasure Holding's is a premier multi-sector conglomerate managing an elite portfolio of over 10 prestigious brands across fashion, finance, software, and retail";
      missionStatement = "Our mission is to identify, invest in, and grow outstanding businesses that create sustainable value for all stakeholders.";
      investmentStrategy = "We focus on middle-market companies with strong fundamentals, proven management teams, and significant growth potential across diverse sectors.";
      statsJson = "{\"aum\":\"$2.5B\",\"portfolioCompanies\":\"10\",\"portfolioReturns\":\"18%\"}";
    };
  };

  public func updateFirmInfo(_current : Types.FirmInfo, args : Types.UpdateFirmInfoArgs) : Types.FirmInfo {
    {
      heroHeadline = args.heroHeadline;
      heroCopy = args.heroCopy;
      missionStatement = args.missionStatement;
      investmentStrategy = args.investmentStrategy;
      statsJson = args.statsJson;
    };
  };
};
