const services = [
    {
        name: "Facebook",
        category: "social",
        rating: 11,
        popularity: 90,
        free: true,
        openSource: false,
        partiallyOpenSource: true,
        ads: true,
        inAppPurchases: true,
        endToEndEncrypted: false,
        fiveEyes: true,
        nineEyes: false,
        fourteenEyes: false,
        torAvailable: true,
        description: "US-based public company owned by Meta.",
        detailPage: "pages/services/facebook.html"
    },
    {
        name: "X/Twitter",
        category: "social",
        rating: 11,
        popularity: 83,
        free: true,
        openSource: false,
        partiallyOpenSource: true,
        ads: true,
        inAppPurchases: true,
        endToEndEncrypted: false,
        fiveEyes: true,
        nineEyes: false,
        fourteenEyes: false,
        torAvailable: false,
        description: "Owned by X Corp, a private company based in the US.",
        detailPage: "pages/services/twitter.html"
    },
    {
        name: "Discord",
        category: "messaging",
        rating: 9,
        popularity: 55,
        free: true,
        openSource: false,
        partiallyOpenSource: false,
        ads: true,
        inAppPurchases: true,
        endToEndEncrypted: false, // Voice is E2E, text is not. False is safer for the card.
        fiveEyes: true,
        nineEyes: false,
        fourteenEyes: false,
        torAvailable: false,
        description: "Private, US-based company.",
        detailPage: "pages/services/discord.html"
    },
    {
        name: "YouTube",
        category: "social",
        rating: 11,
        popularity: 95,
        free: true,
        openSource: false,
        partiallyOpenSource: false,
        ads: true,
        inAppPurchases: true,
        endToEndEncrypted: false,
        fiveEyes: true,
        nineEyes: false,
        fourteenEyes: false,
        torAvailable: false,
        description: "US-based video-sharing platform owned by Google.",
        detailPage: "pages/services/youtube.html"
    },
    {
        name: "Snapchat",
        category: "messaging",
        rating: 10,
        popularity: 65,
        free: true,
        openSource: false,
        partiallyOpenSource: false,
        ads: true,
        inAppPurchases: true,
        endToEndEncrypted: false, // Marked false due to MITM risk.
        fiveEyes: true,
        nineEyes: false,
        fourteenEyes: false,
        torAvailable: false,
        description: "US-based multimedia messaging app owned by Snap Inc.",
        detailPage: "pages/services/snapchat.html"
    },
    {
        name: "Instagram",
        category: "social",
        rating: 11,
        popularity: 87,
        free: true,
        openSource: false,
        partiallyOpenSource: false,
        ads: true,
        inAppPurchases: true,
        endToEndEncrypted: false,
        fiveEyes: true,
        nineEyes: false,
        fourteenEyes: false,
        torAvailable: false,
        description: "US-based photo and video sharing service owned by Meta.",
        detailPage: "pages/services/instagram.html"
    },
    {
        name: "Bluesky",
        category: "social",
        rating: 4,
        popularity: 20,
        free: true,
        openSource: true,
        partiallyOpenSource: false,
        ads: false,
        inAppPurchases: false,
        endToEndEncrypted: false,
        fiveEyes: true,
        nineEyes: false,
        fourteenEyes: false,
        torAvailable: false,
        description: "A decentralized social network protocol, spun out of Twitter.",
        detailPage: "pages/services/bluesky.html"
    },
    {
        name: "Google",
        category: "search",
        rating: 11,
        popularity: 100,
        free: true, openSource: false, partiallyOpenSource: false, ads: true, inAppPurchases: false, endToEndEncrypted: false,
        fiveEyes: true, nineEyes: false, fourteenEyes: false, torAvailable: false,
        description: "The world's most dominant search engine with extensive data collection practices.",
        detailPage: "pages/services/google.html"
    },
    {
        name: "Bing",
        category: "search",
        rating: 10,
        popularity: 48,
        free: true, openSource: false, partiallyOpenSource: false, ads: true, inAppPurchases: false, endToEndEncrypted: false,
        fiveEyes: true, nineEyes: false, fourteenEyes: false, torAvailable: false,
        description: "Microsoft's web search engine, integrated with its AI chatbot, Copilot.",
        detailPage: "pages/services/bing.html"
    },
    {
        name: "Yahoo",
        category: "search",
        rating: 9,
        popularity: 75,
        free: true, openSource: false, partiallyOpenSource: false, ads: true, inAppPurchases: false, endToEndEncrypted: false,
        fiveEyes: true, nineEyes: false, fourteenEyes: false, torAvailable: false,
        description: "A web portal and search engine powered by Bing, with a history of major data breaches.",
        detailPage: "pages/services/yahoo.html"
    }
];
