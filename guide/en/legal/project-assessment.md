# Project Type and Legal Obligation Assessment
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Developer Warning
- Contracts and legal texts produced based on this file are only ready-made draft content; they do not replace legal advice and do not provide a legal basis.
- When the AI produces a legal text or page, at the end of the work it must clearly tell the developer that the text is a draft and must not be published without being checked by a lawyer.
- In draft texts, information such as company title, address, tax information and competent court must not be invented; it must be left as square-bracket placeholders (e.g., [COMPANY TITLE]).
- The draft text's code or database must keep fields for draft status, last reviewer and lawyer approval date.
- Texts without lawyer approval must remain as open items in the go-live checklist.
- When legislation (KVKK (Turkish data protection law), Law No. 6563 (Turkish e-commerce law), Mesafeli Sözleşmeler Yönetmeliği (Distance Contracts Regulation), GDPR) changes, the developer must be reminded to check that texts are up to date.

## The AI's Task in This File
- When starting a new project, the AI must ask the developer the "Questions To Ask at Project Start" section of this file and write the answers to the project's system document.
- When adding a new feature to the project, the AI must check the "Obligations Arising When a Feature Is Added" section and, if a new obligation arises, warn the developer before writing the feature.
- Warnings must be short, concrete and outcome-focused: what is needed, why it is needed, what happens if it is not done, whom to get support from.
- The AI must not give definitive rulings on legal, tax or financial matters; it must say "a lawyer / accountant should be consulted on this", but must not skip the topic.
- If the developer knowingly skips a warning, this decision must be written with a date to the open items in the system document and reminded again at go-live.
- Warnings must be given according to the project type; commercial company obligations must not be imposed on a hobby project, and a commercial project must not be told "not needed".
- Since legislative knowledge can change over time, the AI must consider the date of its own knowledge and suggest verifying the current status from an official source.

## Questions To Ask at Project Start
- Whether the project is for personal / hobby purposes or part of a commercial activity must be asked.
- Whether there is a company behind the project (sole proprietorship, limited, joint-stock), and if so whether its title and tax information are ready, must be asked.
- Who will use the application must be asked: only the developer, a closed team, companies (B2B), individual consumers (B2C).
- Whether the application collects other people's personal data (name, email, phone, IP, location) must be asked.
- Whether special category personal data (health, biometric, religion, ethnic origin, criminal convictions) will be processed must be asked.
- Whether there will be users under 18 must be asked.
- Whether the application will accept payments, and whether there are subscriptions, sales or donations, must be asked.
- Whether users can upload content (comments, images, listings, products) and whether this content will be public must be asked.
- Whether the application will accept users from abroad (especially the EU) must be asked.
- Whether marketing emails or SMS will be sent must be asked.
- Whether the application will use data from other platforms (API, scraping) must be asked.
- Whether content will be generated with AI in the application or user data will be sent to an AI service must be asked.
- Whether it will be published on mobile app stores (App Store, Google Play) must be asked.
- Whether the project is being developed for a client (agency / freelance work) or as one's own product must be asked; if it is client work, ownership of code, domain and accounts must be clarified.

## If Individual / Hobby Project
- It must be stated that projects used only by the developer and not collecting others' data may not need a contract or information notice.
- Even if the project is a hobby, if other people's personal data is collected, the developer must be told that KVKK may apply and that the "personal / household use" exemption does not cover public applications.
- Since a hobby project has no company title, a fake company name must not be written in the contract; it must be clearly stated that the service is provided as a natural person, or the text must not be added at all.
- It must be stated that copying large companies' texts into a hobby project may mean committing to non-existent services and obligations.
- For public hobby projects, at least a short and honest privacy note (what data is collected, for what, how it is deleted) should be suggested.
- It must be reminded that if a hobby project starts earning income over time (ads, donations, paid features), the commercial project items come into effect.
- Even in a hobby project, password, email and session security must be applied as seriously as in a commercial project; responsibility for a data breach does not depend on the project's size.

## If Commercial Project
- It must be stated that tax registration (sole proprietorship or company) may be required for commercial activity, and that an accountant should be consulted before accepting payments.
- Contracts, invoices and the site footer must include the company's full title, address, tax office and number, MERSİS number (if any) and contact information.
- If e-commerce is done, whether ETBİS (Electronic Commerce Information System) registration is required must be checked.
- If sales are made, a distance sales contract, pre-information form, right of withdrawal and return conditions are mandatory; prices must be shown including taxes.
- An invoice / e-archive invoice must be issued for everything sold; e-invoice / e-archive integration must be reminded to the developer.
- If subscriptions are sold, automatic renewal, the cancellation path and pre-renewal notification must be clearly designed; cancelling must be as easy as subscribing.
- Payment card data must not be stored in the application; a licensed payment institution (iyzico, PayTR, Stripe, etc.) must be used.
- If the application holds or transfers money on behalf of users or offers a wallet / balance, it must be warned that a license may be required under payment services legislation (Law No. 6493).
- In a commercial project, the VERBİS (data controllers registry) registration obligation (employee count, balance sheet threshold or main activity being special category data processing) must be checked.
- If a brand name will be used, trademark registration (TÜRKPATENT) and a similar-trademark search should be suggested.
- The domain and all service accounts (server, email, payment, analytics) must be opened in the company's name and with the company's corporate email; they must not be left tied to personal accounts.

## Obligations Arising When a Feature Is Added
- If registration / membership is added: terms of use, KVKK information notice, an account closure path and a data deletion process are required.
- If email communication is added: no consent is required for transactional emails, but marketing emails require separate consent, an unsubscribe link and İYS (Message Management System) registration.
- If an analytics / advertising tag (GA4, Meta Pixel, Hotjar, Clarity) is added: cookie consent, a cookie policy and cross-border transfer information in the information notice are required.
- If a session recording tool (Hotjar, Clarity) is added: it must be clearly disclosed that the user's screen movements are recorded, and form fields must be masked.
- If payment is added: a distance sales contract, pre-information, return conditions, invoicing, a payment institution agreement and tax registration are required.
- If user content (comments, images, listings) is added: content rules, a report / flag button, a removal process, content ownership and usage permission clauses are required.
- If messaging between users is added: abuse reporting, blocking and a content retention period must be defined.
- If public content is hosted: hosting provider obligations under Law No. 5651 (Turkish internet law) (traffic data retention, notice-and-takedown process, contact information) must be checked.
- If location data is added: explicit consent, purpose limitation and how precisely the location is kept must be determined.
- If file / document upload is added: that it may contain personal data, retention period, virus scanning and access authorization must be considered.
- If ID, tax number or Turkish national ID number is collected: whether it is truly necessary must be questioned; if necessary it must be stored encrypted and displayed masked.
- If users under 18 are accepted: parental consent, age-appropriate content and additional data protection measures are required.
- If health, biometric or other special category data is added: explicit consent, additional security measures (the Board's adequate measures decision) and most likely VERBİS registration are required.
- If social login (Google, Apple, Facebook) is added: privacy policy and terms of use links required by the providers and app verification processes are required.
- If a mobile app store is added: in-app account deletion, privacy labels (App Privacy, Data Safety) and a privacy policy link are mandatory.
- If users from abroad are accepted: GDPR, the need for an EU representative and cross-border transfer rules must be evaluated.
- If a marketplace / multi-vendor structure is added: intermediary service provider obligations, seller verification and a seller agreement are required.
- If an AI feature is added: the "AI Features" section must be applied.
- If other platforms' data is used: the "Third-Party Platform Rules" section must be applied.

## Risks of Adding and Not Adding a Contract
- Not adding a contract is not always risk-free: if personal data is collected, the information obligation exists with or without a contract.
- Adding a ready-made or copied contract is also risky: every commitment written in the text (e.g., "your data is deleted within 30 days", "24/7 support", "your data is stored in Turkey") must be something the application actually does.
- Another company's contract text must not be copied; it creates a copyright problem and commits to things that company does but the project does not.
- General disclaimers such as "no liability is accepted" against consumers are often invalid; the developer must not rely on these clauses.
- Asking for explicit consent where it is not needed is also wrong: if consent is requested for operations the service already requires, the service cannot be provided when consent is withdrawn.
- The company title, address and tax information written in the contract must be real; a text with empty or invented information must not be published.
- Competent court and governing law clauses must not be written in a way that restricts the consumer's legal rights.
- When the contract changes, which text old users are subject to must not remain unclear; versioning and a re-acceptance process must be set up.
- Text written by the AI is only a draft; publishing it without lawyer review is the developer's responsibility.

## Consistency Between Text and System
- Everything written in the contract, information notice and cookie policy must match the system's actual behavior exactly.
- The data types listed in the information notice must be compared with the fields actually stored in the database.
- The third parties listed in the information notice must be compared with the services the application actually sends data to (email, analytics, CDN, AI, error tracking).
- The list in the cookie policy must be compared with the cookies actually created in the browser.
- The retention periods written in the text must be the same as the periods the maintenance tasks actually delete after.
- The account deletion process written in the text must actually work in the application.
- When a new service, field or cookie is added, the AI must remind that the related text needs updating.
- The consistency check must be done before go-live and in every major release.

## Third-Party Platform Rules
- The Terms of Service of every API used must be read, and how the data may be stored and displayed must be checked.
- If Google APIs (YouTube, Search Console, Ads) are used, requirements such as publishing a privacy policy, data retention period limits and OAuth app verification must be checked.
- If the YouTube API is used, it must be reminded that the YouTube API Services Terms impose additional requirements such as linking to YouTube and the Google Privacy Policy in the privacy policy.
- Marketplace APIs (Trendyol, Hepsiburada, Amazon) must be used only for the account owner's own data; other sellers' data must not be collected.
- If scraping websites, the site's terms of use, robots.txt, copyright and personal data aspects must be evaluated, and the developer must be warned about legal risk.
- License and attribution requirements of map, font, icon and image services must be applied.
- When embedding social media content, the method permitted by the platform must be used.
- Whether services used on a free plan allow commercial use must be checked.

## Intellectual Property and Licenses
- Licenses of the open source packages used must be checked; it must be warned that licenses such as GPL / AGPL may create an obligation to share source code in closed-source commercial projects.
- Images, icons, fonts, videos and music used in the project must be licensed; images found on the internet must not be used without permission.
- Usage rights of AI-generated images and texts must be checked according to the terms of the tool used.
- Other brands' logos and names must be used only with permission or within the limits of descriptive (nominative) use.
- In work done for a client, ownership of the code, design and content must be determined in writing.
- The license of the project's own code (closed, MIT, etc.) must be chosen consciously, and public repositories must contain a license file.

## AI Features
- If user data is sent to an AI service (OpenAI, Anthropic, Google), this transfer must be included in the information notice and cross-border transfer information.
- Whether the AI service uses the sent data for training and how long it retains it must be checked; enterprise / API terms should be preferred.
- Personal or confidential data must not be sent to AI unnecessarily and should be masked where possible.
- It should be indicated to the user that AI-generated content is an AI product. (Recommended)
- If decisions made by AI (e.g., automatic rejection, scoring) affect people, human oversight and an appeal path must be offered.
- If serving the EU, transparency and risk obligations under the EU AI Act must be evaluated.
- It must be clearly stated to the user that AI outputs may be wrong, especially in health, law and finance topics.
- Per-user and daily limits must be set for AI costs, and the billing risk from abuse must be stated to the developer.

## Accessibility and Consumer Protection
- Accessibility (WCAG) rules must be followed in public services; it must be stated that this may be a legal requirement in some sectors and countries.
- Designs that mislead the user (dark patterns) must not be used: hidden fees, hard cancellation, pre-checked consent boxes, fake countdowns, misleading "last 2 items" warnings.
- Price, discount and campaign displays must comply with consumer legislation (e.g., the pre-discount price must be real).
- User reviews and ratings must be real; fake reviews must not be generated or purchased.
