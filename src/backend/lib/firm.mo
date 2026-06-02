import Types "../types/firm";

module {
  public func defaultFirmInfo() : Types.FirmInfo {
    {
      heroHeadline = "Building Exceptional Companies";
      heroCopy = "We partner with visionary founders and management teams to create lasting value through strategic investment and operational excellence.";
      missionStatement = "Our mission is to identify, invest in, and grow outstanding businesses that create sustainable value for all stakeholders.";
      investmentStrategy = "We focus on middle-market companies with strong fundamentals, proven management teams, and significant growth potential across diverse sectors.";
      statsJson = "{\"aum\":\"$2.5B\",\"portfolioCompanies\":\"10\",\"yearsOfExperience\":\"25+\",\"portfolioReturns\":\"18%\"}";
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
