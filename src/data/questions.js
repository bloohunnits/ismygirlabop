// =============================================
// QUESTION POOL — Red Flags & Green Flags
// =============================================
// type: "red" = bop indicator (yes = bad), "green" = anti-bop indicator (yes = good)
// weight: 1-10 strength of indicator
// "not_sure" answers scored asymmetrically: 30% for red, 20% for green

export const redFlags = [
  {
    id: "r1",
    type: "red",
    question: 'Does she overuse the word "lust" outside of a religious context?',
    weight: 4,
    icon: "🎭",
    context:
      'This is classic BOP trickery, bro. Women who throw around emotionally loaded words like "lust" are running a play — they use that language to get you emotionally invested in a way that benefits them, not you. It creates a fake deep connection. It\'s also textbook projection: women with a higher-than-average sex drive project that energy onto you through their word choices. If she\'s constantly framing things in terms of "lust," she\'s telling on herself.',
    yesExplanation:
      'She throws around "lust" a lot — bro, that\'s a manipulation flag. She may be projecting her own heightened sexuality onto you to build emotional leverage. Classic move.',
    noExplanation:
      "She's not using loaded language to reel you in. Good sign — means she's not running manipulation plays to keep your attention.",
    notSureExplanation:
      "You haven't clocked it yet. Pay attention going forward — it's subtle but once you hear it, you can't unhear it.",
  },
  {
    id: "r2",
    type: "red",
    question: "Does she enjoy horror movies and graphic gore?",
    weight: 5,
    icon: "🩸",
    context:
      "Here's the science, bro: evolutionary psychology has consistently linked low disgust sensitivity to higher sexual promiscuity. If she can sit through extreme horror and gore without flinching, she has a higher tolerance for stuff that would bother most people — and that tolerance doesn't stop at the screen. Studies show people with low disgust thresholds have more partners and take more sexual risks. It's not about the movies — it's about what her comfort level signals.",
    yesExplanation:
      "She's unfazed by horror and gore. That low disgust sensitivity? Research links it directly to higher sexual openness and more partners. Take note.",
    noExplanation:
      "She's not into horror and gore — that's actually a good sign. Higher disgust sensitivity generally means more selective with partners.",
    notSureExplanation:
      "Throw on a gnarly horror movie next time y'all chill. Watch her reaction — it's a lowkey but reliable litmus test.",
  },
  {
    id: "r3",
    type: "red",
    question: "Does she have tattoos in high-visibility places (face, neck, hands)?",
    weight: 6,
    icon: "🖋️",
    context:
      "Look bro, tattoos in those locations signal a few things at once. High pain tolerance — which research links to higher testosterone and sensation-seeking. Comfort with breaking social norms. And honestly, visible tattoos in extreme spots are often tied to unresolved trauma being expressed externally. The data is clear: more tattoos in visible locations = significantly more sexual partners on average. It's not about judging ink — it's about what the placement tells you.",
    yesExplanation:
      "Tattoos in extreme, visible spots — that signals sensation-seeking, comfort with being outside the norm, and possibly trauma expression. All of that tracks with higher partner counts.",
    noExplanation:
      "No face, neck, or hand tattoos. Removes one risk indicator — doesn't tell you everything, but it's one less flag.",
    notSureExplanation:
      "You haven't noticed? Tattoo placement matters way more than just having tattoos. Keep your eyes open.",
  },
  {
    id: "r4",
    type: "red",
    question: "Does she have a tramp stamp?",
    weight: 7,
    icon: "🔥",
    context:
      "Bro, let's keep it real — a lower-back tattoo has been associated with sexual availability for decades, and the research backs it up. Studies show men and women both read lower-back tattoos as a signal of sexual openness, and the women who get them statistically report more partners. It's branding, plain and simple. She chose to put a permanent mark in a spot that's really only visible in intimate or revealing situations. The placement IS the message.",
    yesExplanation:
      "A tramp stamp is one of the most culturally and statistically recognized signals out there. The placement is deliberate. The research confirms what everyone already knows.",
    noExplanation:
      "No tramp stamp. One less red flag to worry about.",
    notSureExplanation:
      "You haven't seen that area yet. When you do find out, you'll know exactly what it means.",
  },
  {
    id: "r5",
    type: "red",
    question: "Does she have an iPad?",
    weight: 2,
    icon: "📱",
    context:
      'Okay this one\'s kinda a joke — but not entirely. The "iPad girl" energy is real. That chronically-online, consumption-driven, attention-seeking lifestyle isn\'t a myth. If she fits the pattern of collecting trendy lifestyle stuff and living through social media, that\'s a vibe. It\'s a lightweight indicator but if you know, you know. IYKYK.',
    yesExplanation:
      "She's got the iPad. Look, it barely moves the needle, but it fits a certain lifestyle pattern. Don't panic — just note it and keep reading.",
    noExplanation:
      "No iPad. Honestly this one barely matters, but hey — one less box checked.",
    notSureExplanation:
      "You don't know her device setup. Fair enough — this is the lightest indicator on here anyway.",
  },
  {
    id: "r6",
    type: "red",
    question: "Does she keep her phone on Do Not Disturb indefinitely?",
    weight: 5,
    icon: "🔕",
    context:
      "If her phone stays on DND 24/7, ask yourself why bro. The most common reason? She's juggling multiple dudes and doesn't want the streams crossing. Permanent DND means she's controlling who sees what and when — keeping everyone on her timeline, on her terms. A woman with nothing to hide doesn't need to silence her phone around the clock. That crescent moon icon is telling you something.",
    yesExplanation:
      "Permanent DND is a classic sign she's managing multiple streams of attention. She's keeping her options compartmentalized. Big flag.",
    noExplanation:
      "Her phone isn't on lockdown — suggests she's not actively hiding incoming attention from other dudes.",
    notSureExplanation:
      "Next time y'all are together, peep that crescent moon icon at the top of her phone. It tells a whole story.",
  },
  {
    id: "r7",
    type: "red",
    question: "Are her close friends promiscuous?",
    weight: 8,
    icon: "👯",
    context:
      "Bro, birds of a feather. This isn't just a saying — it's one of the most proven principles in social psychology. People choose friends who share their values and lifestyle. If her closest girls are known for getting around, the overwhelming odds say she does too. Research shows sexual behavior norms are heavily shaped by your peer group. Her friends are a mirror. They're telling you everything you need to know.",
    yesExplanation:
      "Her friends are hoes? Bro, this is one of the STRONGEST indicators on the whole list. People pick friends who mirror their own values and behavior. Her circle is screaming the answer at you.",
    noExplanation:
      "Her friends are solid. A good social circle is genuinely one of the best signs that her values align with stability. Big green light.",
    notSureExplanation:
      "You don't know her friends well enough yet. Bro, make this a priority. This is one of the most important indicators — find out who she runs with.",
  },
  {
    id: "r8",
    type: "red",
    question: "Does she drink and party often?",
    weight: 7,
    icon: "🍾",
    context:
      "Bro think about it — frequent drinking and partying means she's repeatedly putting herself in environments where impulsive decisions are easy and consequences feel far away. Alcohol is one of the strongest situational predictors of casual sex in all the research. And if she's deliberately and regularly getting drunk and going out? She's actively seeking those high-opportunity environments. There may even be a thrill in the loss of control. It's not about one night out — it's the lifestyle pattern.",
    yesExplanation:
      "She's out drinking and partying regularly — that means she's consistently putting herself in low-inhibition, high-opportunity environments. That's one of the biggest lifestyle red flags, bro.",
    noExplanation:
      "She's not a party girl. That removes one of the most common environmental factors that lead to casual hookups. Solid.",
    notSureExplanation:
      "Pay attention to her weekends bro. How often does alcohol come up? How often is she \"out with the girls\"? The pattern will show itself.",
  },
  {
    id: "r9",
    type: "red",
    question: "Does she dress provocatively on a regular basis?",
    weight: 6,
    icon: "👗",
    context:
      "Look, everyone can dress how they want. But if we're analyzing behavioral indicators — and that's what we're doing — consistently provocative dressing is a documented signal of attention-seeking and comfort with sexual display. Women who regularly dress revealing report more partners and score higher on sociosexual orientation. She's signaling availability whether she realizes it or not. People who are more comfortable showcasing their body to the world tend to be more comfortable sharing it. Come on now.",
    yesExplanation:
      "She stays dressed provocatively — bro, that's a documented signal of higher sociosexual orientation. She's comfortable with sexual display and that correlates directly with more partners.",
    noExplanation:
      "She dresses modest or normal most of the time — not chasing constant sexual attention through her appearance. Good sign.",
    notSureExplanation:
      "Think about it: does she dress for the occasion, or does every occasion become an excuse to show skin? There's your answer.",
  },
  {
    id: "r10",
    type: "red",
    question: "Does she smoke cigarettes?",
    weight: 5,
    icon: "🚬",
    context:
      "Smoking is a risk-taking behavior, and risk-taking behaviors cluster together bro. Smokers consistently report more sexual partners than non-smokers. It's tied to impulsivity, sensation-seeking, and prioritizing short-term gratification over long-term consequences. Smoking also carries traditionally masculine behavioral associations — women who adopt more masculine behavior profiles tend to have higher partner counts. It's not the cigarette itself — it's what the habit signals about who she is.",
    yesExplanation:
      "She smokes — that signals impulsivity and comfort with risk. Research links these exact traits to higher partner counts. Note it.",
    noExplanation:
      "She doesn't smoke. One less risk-taking behavior on the board.",
    notSureExplanation:
      "Social smokers count too bro. If she lights up at parties or when drinking, that still fits the pattern.",
  },
  {
    id: "r11",
    type: "red",
    question: "Is she highly extroverted AND disorganized?",
    weight: 6,
    icon: "🎪",
    context:
      "Bro, this is one of the most research-backed indicators on this ENTIRE list. The Big Five personality model — that's the gold standard in psychology — shows that high Extroversion + low Conscientiousness is THE single strongest personality predictor of a high body count. She thrives on social stimulation and attention but can't keep her life organized or follow through on commitments? That combo creates a perfect storm: constantly around people, always seeking stimulation, and lacking the self-control to pump the brakes. Decades of data on this one.",
    yesExplanation:
      "High extroversion + disorganized? Bro, this is literally THE strongest personality predictor of high partner count in all of Big Five research. Decades of data back this. Major flag.",
    noExplanation:
      "She doesn't have this combo. That's actually significant — this is one of the most reliable personality-level predictors and she doesn't fit it.",
    notSureExplanation:
      "Think about it: is she the life of every party but can't keep her apartment clean or follow through on plans? That's the deadly combo right there.",
  },
  {
    id: "r12",
    type: "red",
    question: "Does she use recreational drugs?",
    weight: 7,
    icon: "💊",
    context:
      "Drug use is directly tied to impulsivity, sensation-seeking, and willingness to take risks — all of which strongly correlate with higher body counts. Beyond personality, the drugs themselves lower inhibitions and wreck judgment, creating situations where casual sex just... happens. Stimulants and party drugs especially are linked to hypersexual behavior. If she's using recreationally, she's showing you a comfort with risk and altered states that extends into her sexual decisions.",
    yesExplanation:
      "She does drugs — bro, that directly correlates with more partners through both who she is (impulsive, sensation-seeking) and what the substances do (lower inhibitions). Significant flag.",
    noExplanation:
      "She stays clean. That removes a big risk factor and suggests she's not driven by sensation-seeking impulses.",
    notSureExplanation:
      "If you're not sure, that itself might be telling bro. Drug use often gets hidden early in relationships.",
  },
  {
    id: "r13",
    type: "red",
    question: "Does she have a disproportionate number of male friends?",
    weight: 6,
    icon: "👥",
    context:
      "Bro, a woman surrounded by male friends is sitting in a social environment packed with sexual opportunity. Research shows men in cross-sex friendships almost always feel some attraction, even when she says it's \"just friends.\" Some women build male-heavy friend groups on purpose — being the one girl in a group of guys gives her insane leverage, attention, and validation. It can also mean she can't maintain friendships with other women, which usually signals deeper issues.",
    yesExplanation:
      "Mostly male friends? She's surrounded by opportunity and probably enjoys the attention dynamics of being the only girl in the group. That's a setup, bro.",
    noExplanation:
      "She has a balanced or mostly female social circle — healthy same-sex friendships and not relying on male attention for validation. That's solid.",
    notSureExplanation:
      "Pay attention to who she texts, who she hangs with, who she talks about. The ratio will become obvious real quick.",
  },
  {
    id: "r14",
    type: "red",
    question: "Is she bisexual?",
    weight: 5,
    icon: "🌈",
    context:
      "Just the data bro, no judgment: research consistently shows bisexual individuals report more sexual partners than both straight and gay individuals. Bisexuality doubles the pool of potential partners and is associated with higher overall sexual openness. Major psychology journals have found that bisexual women specifically report the highest average partner counts among all female sexual orientation categories. It's math plus openness.",
    yesExplanation:
      "Bisexual women statistically have the highest average partner counts across all female orientations. The expanded dating pool and the openness that comes with it are real factors.",
    noExplanation:
      "She's straight — which statistically correlates with lower average partner counts compared to bisexual women.",
    notSureExplanation:
      "If her sexuality is ambiguous to you, that ambiguity might be informative bro. People with clear boundaries tend to communicate them clearly.",
  },
  {
    id: "r15",
    type: "red",
    question: 'Is she overly concerned with whether men are "on the down low"?',
    weight: 4,
    icon: "🔍",
    context:
      "This is a controversial one but hear me out bro. When she's excessively preoccupied with whether men are secretly gay or bi, it's often classic BOP trickery — deflection and projection. This hyper-focus on male sexuality signals deep distrust of men from having tons of bad experiences — which itself correlates with a high body count. It can also mean she views everything through a sexual lens. If she's constantly suspicious of men's sexuality, she might be projecting her own sexual complexity.",
    yesExplanation:
      "Her obsession with men's hidden sexuality points to either projection, deep distrust from too many bad experiences, or an oversexualized worldview. All red flags bro.",
    noExplanation:
      "She doesn't fixate on this stuff — means she's not operating from a place of deep distrust or sexual preoccupation.",
    notSureExplanation:
      "This one's subtle. Listen for how often male sexuality comes up unprompted in her conversation.",
  },
  {
    id: "r16",
    type: "red",
    question: "Does she have a noticeable lying problem?",
    weight: 8,
    icon: "🤥",
    context:
      "Bro, this is one of the most serious flags on the whole list. A woman who lies frequently and comfortably developed that skill through PRACTICE. And one of the top reasons people get that good at lying is managing multiple relationships, hiding infidelity, or keeping contradictory stories straight across different groups. Chronic lying is also linked to dark triad traits — narcissism, manipulation, psychopathy — all of which correlate with more partners and exploitative relationship patterns. If she can lie to your face without blinking, she's done it many, many times before.",
    yesExplanation:
      "Bro — a lying problem is one of the most serious indicators here. That's a PRACTICED skill, usually developed through managing multiple situations. Huge red flag.",
    noExplanation:
      "She seems honest and straight up. Honesty is one of the most important green flags — it means she's probably not hiding a complicated history.",
    notSureExplanation:
      "If you're already questioning her honesty bro, trust that gut. Liars are skilled — if you're catching inconsistencies, there's way more you're missing.",
  },
  {
    id: "r17",
    type: "red",
    question: "Does she adopt a lot of traditionally male hobbies and interests?",
    weight: 4,
    icon: "🎮",
    context:
      "Context matters here bro. If she's genuinely passionate — actually skilled, actually knowledgeable — that's one thing. But if she's adopting male hobbies at a surface level just to be visible in male-dominated spaces? That's an attention play. Being \"the girl who games\" or \"the girl into cars\" guarantees male attention. Some women deliberately use cross-gender interests to maximize their access to men. Look for depth: does she actually know her stuff, or is she performing for an audience?",
    yesExplanation:
      "She collects male hobbies that seem more about being seen than being skilled — that's a deliberate play to maximize male attention in male-dominated spaces.",
    noExplanation:
      "Her interests seem genuine and not strategically picked to maximize attention from dudes. That's authentic.",
    notSureExplanation:
      "Test the depth bro: does she actually know her stuff, or does she just like being the only girl in the room?",
  },
  {
    id: "r18",
    type: "red",
    question: "Does she frequently use sexual innuendo in conversation?",
    weight: 6,
    icon: "💬",
    context:
      "Constant sexual innuendo in regular conversation is a strong signal bro. It shows high sexual preoccupation and comfort using sexuality as a social tool. Research shows sexually unrestricted people — more partners, more casual sex — are way more likely to use sexual language and innuendo casually. It's how she keeps sexuality at the front of every interaction — testing boundaries, signaling availability, keeping things charged. If she can't get through a conversation without making it suggestive, she's telling you where her mind lives.",
    yesExplanation:
      "Constant sexual innuendo tells you exactly where her mind is at. Strongly associated with an unrestricted sexual orientation and comfort using sexuality as a tool. Flag it.",
    noExplanation:
      "She keeps conversation appropriate and doesn't lean on sexual undertones. Not using sexuality as a constant social weapon.",
    notSureExplanation:
      "Think about your last few conversations bro. How often did things get suggestive — and who steered it there?",
  },
  {
    id: "r19",
    type: "red",
    question: "Did you have sex the first time you met in person?",
    weight: 9,
    icon: "⚡",
    context:
      "Bro — this is the heaviest hitter on the list for a reason. A woman who's down to have sex with someone she just met in person has, by definition, a very low bar for intimacy with new people. Research puts this at the extreme end of \"unrestricted\" sexual behavior. And I'ma keep it real: the willingness to be that vulnerable with a near-stranger almost always means it's a pattern. This is probably not her first time. People comfortable sharing their body with someone they barely know have done it many times before. This is the single strongest indicator there is.",
    yesExplanation:
      "Sex on the first meeting is THE strongest indicator of an unrestricted sexual strategy. Bro, this almost always reflects a pattern, not a one-time thing. This carries the most weight in your score.",
    noExplanation:
      "She didn't give it up immediately — that suggests a more selective approach to physical intimacy. Honestly the most direct positive signal you can get.",
    notSureExplanation:
      "If it's \"complicated\" or \"kind of\" happened — bro, that ambiguity leans yes. Clear boundaries don't usually need explaining.",
  },
  {
    id: "r20",
    type: "red",
    question: "Is she in one of the top promiscuous professions (bartender, flight attendant, nurse, model/entertainer, real estate)?",
    weight: 5,
    icon: "💼",
    context:
      "Research and large-scale surveys keep identifying the same professions with higher rates of infidelity and more partners. Bartenders are in nightlife surrounded by alcohol and flirtation. Flight attendants travel constantly with built-in anonymity. Nurses work intense shifts with deep emotional bonding among coworkers. Models and entertainers are in industries that reward looks and sexual appeal. Real estate agents have flexible schedules and private one-on-one showings. It's not that the job makes her promiscuous — it's that these environments create way more opportunity than a regular 9-to-5.",
    yesExplanation:
      "Her profession puts her in an environment with disproportionate opportunity — nightlife, travel, flexible schedules, or appearance-driven culture. The research on these industries is consistent bro.",
    noExplanation:
      "Her job doesn't fall in the high-risk category. One less environmental factor to think about.",
    notSureExplanation:
      "Think about her job's social dynamics: lots of travel? Nightlife? Flexible hours? Heavy interaction with strangers? Those are the patterns.",
  },
  {
    id: "r21",
    type: "red",
    question: "Has she been diagnosed with BPD, bipolar disorder, or ADHD?",
    weight: 7,
    icon: "🧠",
    context:
      "This isn't about stigmatizing mental health bro — it's about understanding documented correlations. BPD is characterized by impulsivity, fear of abandonment, and unstable relationships — people with BPD report significantly more partners. Bipolar disorder's manic episodes literally include hypersexuality as a clinical symptom. ADHD is tied to impulsivity and sensation-seeking, both strong predictors of higher body counts. Multiple studies across all three diagnoses consistently find elevated partner numbers. It's clinical data, not judgment.",
    yesExplanation:
      "These specific diagnoses have well-documented links to higher partner counts — impulsivity, hypersexuality during episodes, sensation-seeking. It's clinical research bro, not a moral judgment.",
    noExplanation:
      "No relevant diagnoses that research links to elevated partner counts. One less clinical risk factor on the board.",
    notSureExplanation:
      "Mental health history comes out over time. If she shows extreme impulsivity, wild mood swings, or intense fear of abandonment — there might be something underneath.",
  },
];

export const greenFlags = [
  {
    id: "g1",
    type: "green",
    question: "Does she read books regularly (not just social media)?",
    weight: 5,
    icon: "📚",
    context:
      "Regular reading — actual books, not Instagram captions — is linked to higher cognitive ability, patience, and preference for depth over cheap stimulation. Research connects higher IQ and intellectual engagement to lower partner counts. Smart women tend to use more deliberate, long-term mating strategies. A girl who reads regularly is exercising delayed gratification and focused attention — that's the opposite of the impulsive, sensation-seeking profile associated with being a bop.",
    yesExplanation:
      "She reads real books regularly — that signals intellectual depth, patience, and preference for substance. Those traits track with more selective, deliberate relationship choices. Green flag bro.",
    noExplanation:
      "She's not a reader. Doesn't seal the deal either way, but it removes one indicator of that deliberate, long-term-oriented personality type.",
    notSureExplanation:
      "Does she talk about books? Have a bookshelf? The answer tells you about her attention span and what actually stimulates her.",
  },
  {
    id: "g2",
    type: "green",
    question: "Does she have a close, healthy relationship with her father?",
    weight: 8,
    icon: "👨‍👧",
    context:
      "Bro, this is one of the most solid findings in ALL of relationship psychology. Women with strong, positive father-daughter relationships consistently report fewer partners, later first sexual experience, and more stable relationships. A present father provides a model for how men should treat her AND healthy attachment. Without that? She's way more likely to seek male validation through sex. The absence of a father figure is literally one of the single strongest predictors of early and frequent sexual activity in women.",
    yesExplanation:
      "A strong relationship with her dad is one of the most powerful protective factors there is. She had a healthy model for male relationships from the jump. Major green flag, bro.",
    noExplanation:
      "No healthy dad relationship — bro, this is one of the strongest predictors of seeking male validation through sexual relationships. That's a big deal.",
    notSureExplanation:
      "Pay attention to how she talks about her dad — or whether she dodges the topic entirely. Both tell you a lot.",
  },
  {
    id: "g3",
    type: "green",
    question: "Is she religious or spiritually disciplined?",
    weight: 6,
    icon: "🙏",
    context:
      "Religiosity is one of the most consistent predictors of sexual restraint across decades of research bro. Religious women report fewer partners, later first experiences, and stronger preferences for committed relationships. It's not just rules — it's an internalized moral framework plus community accountability that reinforces long-term thinking. Key word is DISCIPLINE though: actually practicing faith (going to services, daily prayer) is a stronger predictor than just saying \"I'm spiritual\" on her Hinge profile.",
    yesExplanation:
      "Active religious or spiritual discipline is one of the most consistent predictors of lower partner counts and commitment-oriented behavior. Solid green flag.",
    noExplanation:
      "She's not religious or spiritually disciplined — removes one of the most reliable protective factors against unrestricted behavior.",
    notSureExplanation:
      'There\'s a big difference between "spiritual" as an aesthetic and actual disciplined practice bro. Look for consistency and depth, not just vibes.',
  },
  {
    id: "g4",
    type: "green",
    question: "Does she have long-term goals and actively work toward them?",
    weight: 6,
    icon: "🎯",
    context:
      "Goal-oriented behavior is a hallmark of high conscientiousness — the personality trait most strongly linked to sexual restraint. A woman who sets long-term goals and actually grinds toward them is showing you delayed gratification, self-regulation, and future-orientation. These are K-selected traits bro: quality over quantity, investment over impulse. Conscientious, future-oriented people have fewer partners because they think about consequences and prioritize long-term outcomes over momentary pleasure.",
    yesExplanation:
      "She's got real goals and actually works toward them — that's high conscientiousness and future-orientation. These traits are strongly tied to fewer partners and more committed relationships. She's built different.",
    noExplanation:
      "No real long-term direction suggests lower conscientiousness and more present-focused decision-making, which correlates with less restraint.",
    notSureExplanation:
      "Ask her where she sees herself in 5 years bro. The specificity and conviction of her answer tells you everything about her orientation.",
  },
  {
    id: "g5",
    type: "green",
    question: "Has she had few but long-lasting relationships?",
    weight: 7,
    icon: "💍",
    context:
      "Relationship history is one of the most direct indicators of mating strategy bro. A woman with a small number of long-duration relationships is showing you a K-selected pattern: high investment, real pair bonding, genuine commitment. This pattern comes from secure attachment, emotional stability, and the ability to go deep. It's the behavioral opposite of a revolving door of short-term flings.",
    yesExplanation:
      "Few, long relationships — bro, that's the K-selected playbook. High investment, real bonding, genuine commitment. One of the best direct indicators you can find.",
    noExplanation:
      "A pattern of many short relationships or no long-term ones at all suggests a more unrestricted approach. Something to think about.",
    notSureExplanation:
      "Her relationship history will come out in conversation. Listen for how she talks about exes — how long they lasted, how deep they went, and how they ended.",
  },
  {
    id: "g6",
    type: "green",
    question: "Is she financially responsible and disciplined with money?",
    weight: 5,
    icon: "💰",
    context:
      "Financial discipline is a strong proxy for conscientiousness and impulse control bro — and both of those protect against promiscuity. People who are good with money and can resist impulse purchases score higher on the exact same self-regulation measures that predict fewer partners. Financial responsibility requires delayed gratification — the same thing that drives sexually restricted mating strategies. If she can say no to a purchase, she can say no to a person.",
    yesExplanation:
      "She's smart with her money — that signals the same impulse control and conscientiousness that predicts selective sexual behavior. Green flag bro.",
    noExplanation:
      "Financial recklessness suggests impulsivity and poor self-regulation — the same traits tied to less selective behavior.",
    notSureExplanation:
      "Look at her lifestyle versus her income bro. Does she live within her means, or is she always chasing the next thing?",
  },
  {
    id: "g7",
    type: "green",
    question: "Does she cook at home and value domestic skills?",
    weight: 4,
    icon: "🍳",
    context:
      "Domestic investment — cooking, keeping a clean place, building a real home — signals nesting behavior and long-term orientation. Women who invest in domestic skills are prioritizing stability and building something over social signaling and chasing novelty. It's a K-selected trait bro: putting energy into a home instead of maintaining a social media presence and party lifestyle. Plus she's spending less time in bars and clubs where hookups happen.",
    yesExplanation:
      "She invests in her home and domestic skills — that's nesting behavior and long-term orientation. She's building, not partying. Green flag.",
    noExplanation:
      "No interest in domestic life could mean she's more socially oriented than home-oriented, which shifts where she spends her time and energy.",
    notSureExplanation:
      "Does she ever cook for you or invite you over to her place? Or is every hangout at a bar or restaurant? The pattern is telling bro.",
  },
  {
    id: "g8",
    type: "green",
    question: "Does she have low social media usage and presence?",
    weight: 5,
    icon: "📵",
    context:
      "High social media usage is consistently linked to attention-seeking, narcissistic traits, and more partners in research. On the flip side, women with low social media presence have opted out of the validation economy — they don't need strangers double-tapping to feel good about themselves. Low usage correlates with higher self-esteem, lower narcissism, and more secure attachment. All protective factors. If she doesn't need the likes, she doesn't need the attention bro.",
    yesExplanation:
      "Low social media means she's not chasing validation from strangers — linked to higher self-esteem, lower narcissism, and secure attachment. Big green flag bro.",
    noExplanation:
      "Heavy social media presence and engagement is tied to attention-seeking and narcissistic traits that track with higher partner counts.",
    notSureExplanation:
      "Check her screen time habits bro. Is she constantly posting, scrolling, and counting likes, or does she treat her phone like a tool?",
  },
  {
    id: "g9",
    type: "green",
    question: "Does she have a stable, close-knit female friend group?",
    weight: 6,
    icon: "👭",
    context:
      "Women who keep long-term, stable female friendships are showing you emotional maturity, loyalty, and the ability to maintain deep relationships — all traits tied to committed, low-body-count lifestyles. Strong same-sex friendships are actually protective against risky sexual behavior because they provide emotional support and accountability. A girl who's kept the same close friends for years has the interpersonal skills and emotional stability that predict relationship success. If she can't keep female friends though? That usually means jealousy, drama, or instability bro.",
    yesExplanation:
      "Stable female friendships = emotional maturity, loyalty, and real interpersonal skills. All protective factors against promiscuity and predictors of relationship success. Green flag bro.",
    noExplanation:
      "Can't keep female friends? That often signals jealousy, drama, or emotional instability — all associated with riskier sexual behavior.",
    notSureExplanation:
      "How does she talk about her friends? Long-time besties or a rotating cast of characters? The stability of her friendships mirrors her relationship patterns bro.",
  },
  {
    id: "g10",
    type: "green",
    question: "Is she introverted or comfortable being alone?",
    weight: 5,
    icon: "🧘",
    context:
      "Introversion is linked to lower partner counts across basically all the research bro. Introverts aren't driven by social stimulation, don't seek novelty through new people, and are genuinely comfortable solo — meaning they don't need external validation to feel whole. A woman who's good being alone isn't driven to fill emotional voids with new partners. Quality of connection over quantity of interaction — that's K-selected behavior.",
    yesExplanation:
      "She's introverted or genuinely comfortable alone — that means she doesn't need constant stimulation or validation from other people. Strongly linked to fewer partners. Green flag.",
    noExplanation:
      "High extroversion without balancing traits is one of the strongest predictors of higher partner counts in personality research.",
    notSureExplanation:
      "Does she need plans every weekend or is she cool with a quiet night in? How she recharges tells you about her whole orientation bro.",
  },
  {
    id: "g11",
    type: "green",
    question: "Does she journal, meditate, or practice genuine self-reflection?",
    weight: 4,
    icon: "📝",
    context:
      "Real self-reflective practices — journaling, meditation, therapy for actual growth — indicate high self-awareness, emotional intelligence, and intentionality. These traits lead to more deliberate decision-making and lower impulsivity. A woman who regularly examines her own thoughts and patterns is less likely to act on impulse and more intentional about who she lets in. Self-awareness is protective bro — people who understand their patterns are less likely to repeat destructive ones.",
    yesExplanation:
      "She does real self-reflection — journaling, meditation, actual growth work. That signals emotional intelligence and intentionality. She's deliberate about her choices. Green flag.",
    noExplanation:
      "No self-reflection means less awareness of personal patterns, which can lead to repeated impulsive decisions in relationships.",
    notSureExplanation:
      "Does she talk about personal growth with actual specifics, or just the aesthetics? Real self-reflection changes behavior bro — look for evidence.",
  },
  {
    id: "g12",
    type: "green",
    question: "Does she value family and talk about wanting a stable future?",
    weight: 6,
    icon: "🏠",
    context:
      "Family orientation and desire for long-term stability is the hallmark of K-selected mating strategy — careful mate selection, high investment, quality over quantity. Women who genuinely value family (not performatively) tend to have fewer partners because every decision is filtered through a long-term lens. Research consistently shows family-oriented women have lower sociosexual orientation scores and more committed relationship histories. If she's really about building something, she's not out here wasting time bro.",
    yesExplanation:
      "She's family-oriented and wants real stability — that's K-selected all the way. Careful mate selection, long-term thinking. One of the strongest green flags you can find bro.",
    noExplanation:
      "No strong family orientation or stability goals — suggests she may be more present-focused in her relationship decisions.",
    notSureExplanation:
      "Listen for how she talks about the future bro. Does she mention family, settling down, building something? Or does she dodge long-term planning?",
  },
];

// =============================================
// QUIZ SELECTION ENGINE
// =============================================
// Selects a balanced, structured set of questions

const TOTAL_QUESTIONS = 12;
const RED_COUNT = 6;
const GREEN_COUNT = 6;

function weightedSample(arr, count) {
  // Group by weight tiers: high (7+), mid (4-6), low (1-3)
  const high = arr.filter((q) => q.weight >= 7);
  const mid = arr.filter((q) => q.weight >= 4 && q.weight < 7);
  const low = arr.filter((q) => q.weight < 4);

  const selected = [];
  const pools = [high, mid, low];

  // Try to get a spread: at least 1 from each tier if possible
  for (const pool of pools) {
    if (pool.length > 0 && selected.length < count) {
      const idx = Math.floor(Math.random() * pool.length);
      selected.push(pool[idx]);
    }
  }

  // Fill remaining from all unused
  const remaining = arr.filter((q) => !selected.includes(q));
  while (selected.length < count && remaining.length > 0) {
    const idx = Math.floor(Math.random() * remaining.length);
    selected.push(remaining.splice(idx, 1)[0]);
  }

  return selected;
}

export function selectQuizQuestions() {
  const selectedRed = weightedSample([...redFlags], RED_COUNT);
  const selectedGreen = weightedSample([...greenFlags], GREEN_COUNT);
  const all = [...selectedRed, ...selectedGreen];

  // Shuffle
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }

  return all;
}

export const QUIZ_LENGTH = TOTAL_QUESTIONS;
