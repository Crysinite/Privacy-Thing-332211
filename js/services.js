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
        detailContent: `
            <p class="detail-summary">Facebook is a US-based public company owned by Meta. Meta (formerly known as Facebook) is the largest social media company in the world. While not an official member, Meta has a history of sharing information with the 5 Eyes intelligence alliance.</p>

            <h3 class="detail-section-title">Pros & Cons</h3>
            <div class="concerns-grid">
                <div class="concern-item"><div class="concern-icon">✅</div><div class="concern-text"><strong>Tor Availability:</strong> For users seeking higher anonymity, Facebook can be accessed via its own Tor onion service.</div></div>
                <div class="concern-item"><div class="concern-icon">✅</div><div class="concern-text"><strong>Partially Open Source:</strong> While the core platform is proprietary, Meta has released some significant projects as open source (e.g., React), allowing for some transparency.</div></div>
                <div class="concern-item"><div class="concern-icon">❌</div><div class="concern-text"><strong>Extreme Data Collection:</strong> Collects vast amounts of personal data including posts, messages, location data, Browse history, and behavioral patterns.</div></div>
                <div class="concern-item"><div class="concern-icon">❌</div><div class="concern-text"><strong>Third-Party Data Sharing:</strong> Your data is shared with thousands of third-party advertisers, developers, and partners.</div></div>
                <div class="concern-item"><div class="concern-icon">❌</div><div class="concern-text"><strong>Shadow Profiles:</strong> Creates profiles even for non-users through data collected from users' contacts and web tracking.</div></div>
                <div class="concern-item"><div class="concern-icon">❌</div><div class="concern-text"><strong>History of Scandals:</strong> Known for major privacy violations like the Cambridge Analytica scandal, demonstrating a disregard for user privacy.</div></div>
                <div class="concern-item"><div class="concern-icon">❌</div><div class="concern-text"><strong>Cross-Platform Tracking:</strong> Data is combined and tracked across Facebook, Instagram, WhatsApp, and other Meta properties to build a comprehensive user profile.</div></div>
                <div class="concern-item"><div class="concern-icon">❌</div><div class="concern-text"><strong>No E2E Encryption by Default:</strong> Messenger conversations are not end-to-end encrypted by default, allowing Meta to access message content.</div></div>
            </div>

            <h3 class="detail-section-title">Evidence & Sources</h3>
            <div class="links-container">
                <a href="https://www.nytimes.com/2018/04/04/us/politics/cambridge-analytica-scandal-fallout.html" target="_blank" rel="noopener noreferrer" class="detail-link-item">NYT - Cambridge Analytica Scandal</a>
                <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer" class="detail-link-item">Facebook's Official Data Policy</a>
            </div>

            <h3 class="detail-section-title">Alternatives to Consider</h3>
            <div class="links-container">
                <a href="#" class="detail-link-item">Signal (Messaging)</a>
                <a href="#" class="detail-link-item">Mastodon (Social Networking)</a>
            </div>
        `
    },
    {
        name: "X/Twitter",
        category: "social",
        rating: 11,
        popularity: 85,
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
        detailContent: `
            <p class="detail-summary">X (formerly Twitter) presents privacy concerns through data collection, tracking, and recent changes in privacy policies under new ownership.</p>

            <h3 class="detail-section-title">Pros & Cons</h3>
            <div class="concerns-grid">
                <div class="concern-item"><div class="concern-icon">✅</div><div class="concern-text"><strong>Partially Open Source:</strong> Some algorithms used by X have been made open source, allowing for some public scrutiny into content recommendations.</div></div>
                <div class="concern-item"><div class="concern-icon">❌</div><div class="concern-text"><strong>Data Collection:</strong> Extensive collection of tweets, interactions, location, and behavioral data for targeted advertising.</div></div>
                <div class="concern-item"><div class="concern-icon">❌</div><div class="concern-text"><strong>Third-Party Sharing:</strong> Data is regularly shared with advertisers and business partners.</div></div>
                <div class="concern-item"><div class="concern-icon">❌</div><div class="concern-text"><strong>Browser History Access:</strong> X/Twitter can view your search history and the websites you visit.</div></div>
                <div class="concern-item"><div class="concern-icon">❌</div><div class="concern-text"><strong>Data Collection Even Off of X/Twitter:</strong> Even if you're not on the X/Twitter website or app, they can use tracking technologies in third-party website to track your online activity.</div></div>
            </div>

            <h3 class="detail-section-title">Evidence & Sources</h3>
            <div class="links-container">
                <a href="https://twitter.com/en/privacy" target="_blank" rel="noopener noreferrer" class="detail-link-item">X's Official Privacy Policy</a>
            </div>

            <h3 class="detail-section-title">Privacy-Focused Alternatives</h3>
             <div class="links-container">
                <a href="#" class="detail-link-item">Mastodon</a>
                <a href="#" class="detail-link-item">Bluesky</a>
            </div>
        `
    },
    {
        name: "Discord",
        category: "social",
        rating: 9,
        popularity: 75,
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
        description: "Private, US-based company.",
        detailContent: `
            <p class="detail-summary">Discord collects extensive user data including messages, voice communications, and behavioral patterns for advertising and analytics purposes. Only their voice call feature is end-to-end encrypted. Sending text messages and files is NOT end-to-end encrypted (E2E for short).</p>

            <h3 class="detail-section-title">Pros & Cons</h3>
            <div class="concerns-grid">
                <div class="concern-item"><div class="concern-icon">✅</div><div class="concern-text"><strong>E2E Encrypted Voice Calls:</strong> Voice calls are end-to-end encrypted. However, voice calling has been around since May 2015, and end-to-end encryption just got added in September 2024. That means for almost a decade, voice calls have NOT been end-to-end encrypted.</div></div>
                <div class="concern-item"><div class="concern-icon">❌</div><div class="concern-text"><strong>Text Messages Not Encrypted:</strong> Except for voice calls, everything else is NOT end-to-end encrypted. Discord can see every message and any file you send (even if the message or file is edited or deleted).</div></div>
                <div class="concern-item"><div class="concern-icon">❌</div><div class="concern-text"><strong>Voice Data Telemetry:</strong> While calls are E2E encrypted, metadata and telemetry about who you call and when may still be collected.</div></div>
                <div class="concern-item"><div class="concern-icon">❌</div><div class="concern-text"><strong>Unfair Account Banning Concerns:</strong> Discord can ban you at any time with no warning. If a Discord server breaks the rules and the server is banned, every account (even innocent ones) from that server are banned as well.</div></div>
                <div class="concern-item"><div class="concern-icon">❌</div><div class="concern-text"><strong>Extensive User Tracking:</strong> Tracks user behavior, game activity, and interactions for analytics and potential advertising.</div></div>
                <div class="concern-item"><div class="concern-icon">❌</div><div class="concern-text"><strong>Data Sharing with Third Parties:</strong> The privacy policy allows sharing your information with third parties for various business purposes.</div></div>
                <div class="concern-item"><div class="concern-icon">❌</div><div class="concern-text"><strong>Poor Moderation:</strong> Discord has a strong history of controversy in relation to poor moderation. Some controversies include the 2019 furry moderator abuse incident, false banning, poor customer support, and CSAM image abuse.</div></div>
            </div>

            <h3 class="detail-section-title">Evidence & Sources</h3>
            <div class="links-container">
                <a href="https://discord.com/privacy" target="_blank" rel="noopener noreferrer" class="detail-link-item">Discord's Official Privacy Policy</a>
            </div>

            <h3 class="detail-section-title">Privacy-Focused Alternatives</h3>
            <div class="links-container">
                <a href="#" class="detail-link-item">Element</a>
                <a href="#" class="detail-link-item">Revolt</a>
            </div>
        `
    }
];
