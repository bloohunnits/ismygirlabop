// =============================================
// QUESTION POOL — Red Flags & Green Flags
// =============================================
// type: "red" = bop indicator (yes = bad), "green" = anti-bop indicator (yes = good)
// weight: 1-10 strength of indicator
// "not_sure" answers are treated as half-weight

export const redFlags = [
  {
    id: "r1",
    type: "red",
    question: 'Does she overuse the word "lust" outside of a religious context?',
    weight: 4,
    icon: "🎭",
    context:
      'This is classic BOP trickery. Women who frequently use emotionally charged words like "lust" are employing a subtle manipulation tactic — they use this language to get you emotionally invested in a way that benefits them, not you. It creates a false sense of deep connection. It\'s also textbook projection: women with a higher-than-average sex drive often project that intensity onto others through their choice of words. If she\'s constantly framing things in terms of "lust," she may be telling on herself.',
    yesExplanation:
      'She uses the word "lust" frequently — this is a manipulation red flag. She may be projecting her own heightened sexuality onto you to create emotional leverage.',
    noExplanation:
      "She doesn't lean on emotionally loaded language to draw you in — she's not relying on manipulation tactics to keep your attention.",
    notSureExplanation:
      "You're not sure about this one. Pay attention going forward — it's a subtle but telling verbal pattern.",
  },
  {
    id: "r2",
    type: "red",
    question: "Does she enjoy horror movies and graphic gore?",
    weight: 5,
    icon: "🩸",
    context:
      "Research in evolutionary psychology has consistently linked low disgust sensitivity to higher sexual promiscuity. A woman who can sit through extreme horror and gore without flinching has a measurably higher tolerance for things that would make most people uncomfortable — and that tolerance extends beyond the screen. Studies show that individuals with low disgust thresholds tend to have more sexual partners and engage in riskier sexual behavior. It's not about the movies — it's what her comfort with graphic content signals about her psychological makeup.",
    yesExplanation:
      "Her comfort with horror and graphic content suggests lower disgust sensitivity, which research links to higher sexual openness and more partners.",
    noExplanation:
      "She's not drawn to horror and gore — suggests typical or higher disgust sensitivity, generally correlated with more selective partner choices.",
    notSureExplanation:
      "If you haven't tested this yet, try suggesting a graphic horror movie and watch her reaction. It's a reliable low-key litmus test.",
  },
  {
    id: "r3",
    type: "red",
    question: "Does she have tattoos in high-visibility places (face, neck, hands)?",
    weight: 6,
    icon: "🖋️",
    context:
      "Tattoos in highly visible, socially stigmatized locations signal several things simultaneously. High pain tolerance — which research associates with higher testosterone and sensation-seeking. Comfort with social deviance and rejection of conventional norms. And visible tattoos in extreme locations are often tied to unresolved trauma and a need for external expression of internal pain. Individuals with more tattoos, particularly in visible locations, report significantly more sexual partners on average.",
    yesExplanation:
      "Tattoos in extreme, visible locations signal high sensation-seeking, comfort with social deviance, and possible trauma expression — all correlate with higher partner counts.",
    noExplanation:
      "No extreme placement tattoos. The absence of high-visibility ink removes one common risk indicator.",
    notSureExplanation:
      "You haven't noticed or aren't sure. Tattoo placement matters more than having tattoos at all — keep an eye out.",
  },
  {
    id: "r4",
    type: "red",
    question: "Does she have a tramp stamp?",
    weight: 7,
    icon: "🔥",
    context:
      'A lower-back tattoo has been culturally associated with sexual availability for decades, and the research backs it up. Studies show that men and women alike perceive lower-back tattoos as a signal of sexual openness, and the women who get them are statistically more likely to report higher numbers of sexual partners. It\'s essentially branding — a deliberate choice to place a permanent mark in a location that\'s primarily visible in intimate or revealing contexts. The placement itself is the message.',
    yesExplanation:
      "A lower-back tattoo is one of the most culturally and statistically recognized signals of sexual openness. The placement is deliberate and the research supports what everyone already intuits.",
    noExplanation:
      "No tramp stamp. One less culturally loaded signal to worry about.",
    notSureExplanation:
      "You haven't seen that area yet. If you find out later, you'll know what it means.",
  },
  {
    id: "r5",
    type: "red",
    question: "Does she have an iPad?",
    weight: 2,
    icon: "📱",
    context:
      'This one\'s partly tongue-in-cheek — but there\'s a kernel of truth. The "iPad kid" stereotype and the cultural association between iPads and a certain type of chronically-online, attention-seeking lifestyle isn\'t entirely baseless. It\'s a lighthearted check: does she fit a pattern of someone who collects trendy lifestyle accessories signaling a consumption-driven, social-media-heavy existence? Low-weight indicator, but if you know, you know.',
    yesExplanation:
      "She's got the iPad. It's a minor indicator at best, but it fits a certain lifestyle pattern. Don't panic — just note it.",
    noExplanation:
      "No iPad. This barely matters, but hey — one less box checked.",
    notSureExplanation:
      "You don't know her device lineup. Fair enough — this is the lightest indicator on the list anyway.",
  },
  {
    id: "r6",
    type: "red",
    question: "Does she keep her phone on Do Not Disturb indefinitely?",
    weight: 5,
    icon: "🔕",
    context:
      "If her phone is permanently on Do Not Disturb, ask yourself why. The most common reason? She's managing multiple streams of attention and doesn't want them to collide. Constant DND means she's controlling who sees what and when — a classic sign of someone juggling options. She can selectively respond on her own timeline, keeping multiple people on the hook without any of them knowing about each other. A woman who has nothing to hide doesn't need to silence her phone 24/7.",
    yesExplanation:
      "Permanent DND is a classic sign of someone managing multiple attention streams. She's controlling communication flow to keep her options compartmentalized.",
    noExplanation:
      "Her phone isn't locked down in DND mode — suggests she's not actively hiding incoming attention from multiple sources.",
    notSureExplanation:
      "You haven't noticed. Next time you're together, glance at that crescent moon icon. It tells a story.",
  },
  {
    id: "r7",
    type: "red",
    question: "Are her close friends promiscuous?",
    weight: 8,
    icon: "👯",
    context:
      '"Birds of a feather flock together" isn\'t just a saying — it\'s one of the most well-established principles in social psychology. People self-select into friend groups that share their values, behaviors, and lifestyle choices. If her closest friends are promiscuous, the overwhelming likelihood is that she shares those tendencies. Research on social influence shows that sexual behavior norms are heavily shaped by peer groups. Your friends are a mirror of who you are — and her friends are telling you exactly who she is.',
    yesExplanation:
      "Her closest friends are promiscuous. This is one of the single strongest indicators — people self-select into groups that mirror their values. Her circle is telling you everything.",
    noExplanation:
      "Her friends don't raise red flags. A solid social circle is one of the best signs her values align with stability and selectivity.",
    notSureExplanation:
      "You don't know her friends well enough yet. This is one of the most important indicators — make it a priority to find out.",
  },
  {
    id: "r8",
    type: "red",
    question: "Does she drink and party often?",
    weight: 7,
    icon: "🍾",
    context:
      "Frequent drinking and partying isn't just about having fun — it's about repeatedly placing yourself in environments where impulsive decisions are easy and consequences feel distant. Alcohol consumption is one of the strongest situational predictors of casual sex. If she's deliberately and regularly getting drunk and going out, she's actively seeking environments where sexual opportunities are abundant. There may even be a thrill in the loss of control — a pattern well-documented in sensation-seeking personality types.",
    yesExplanation:
      "Regular drinking and partying means she's consistently in high-opportunity, low-inhibition environments. One of the strongest lifestyle predictors of a high partner count.",
    noExplanation:
      "She's not a regular on the party scene. This removes one of the most common environmental factors leading to casual encounters.",
    notSureExplanation:
      "You're not sure how often she goes out. Pay attention to weekend patterns and how often alcohol comes up in her stories.",
  },
  {
    id: "r9",
    type: "red",
    question: "Does she dress provocatively on a regular basis?",
    weight: 6,
    icon: "👗",
    context:
      "Consistently provocative dressing is a well-documented signal of attention-seeking behavior and comfort with sexual display. Women who regularly dress in revealing clothing report higher numbers of sexual partners and score higher on sociosexual orientation — the willingness to engage in uncommitted sex. Someone who consistently maximizes sexual attention through clothing is signaling availability, whether consciously or not. People more comfortable showcasing their body to the world tend to be more comfortable sharing it.",
    yesExplanation:
      "Consistently provocative dressing is a documented signal of higher sociosexual orientation — she's comfortable with sexual display, which correlates with more partners.",
    noExplanation:
      "She dresses modestly or normally most of the time — not driven by a need for constant sexual attention through appearance.",
    notSureExplanation:
      "Think about it: does she dress for the occasion, or does every occasion become an opportunity to show skin?",
  },
  {
    id: "r10",
    type: "red",
    question: "Does she smoke cigarettes?",
    weight: 5,
    icon: "🚬",
    context:
      "Cigarette smoking is a risk-taking behavior, and risk-taking behaviors cluster together. Smokers report more sexual partners than non-smokers. Smoking is associated with higher impulsivity, sensation-seeking, and comfort with behaviors that prioritize short-term gratification over long-term consequences. It also carries historically masculine behavioral associations — women who adopt more masculine behavioral profiles tend to have higher partner counts.",
    yesExplanation:
      "Smoking signals impulsivity, sensation-seeking, and comfort with risk — all traits research links to higher numbers of sexual partners.",
    noExplanation:
      "She doesn't smoke. One less risk-taking behavior in the picture.",
    notSureExplanation:
      "Social smokers count too. If she lights up at parties or when drinking, that still fits the pattern.",
  },
  {
    id: "r11",
    type: "red",
    question: "Is she highly extroverted AND disorganized?",
    weight: 6,
    icon: "🎪",
    context:
      "This is one of the most research-backed indicators on this list. The Big Five personality model shows that high Extroversion combined with low Conscientiousness is the single strongest personality predictor of a high number of sexual partners. Extroversion means she thrives on social stimulation, attention, and novelty. Low conscientiousness means impulsivity and lack of follow-through. Together: someone constantly seeking stimulation, surrounded by people, and lacking the self-regulation to say no. Decades of personality research back this up.",
    yesExplanation:
      "High extroversion + low conscientiousness is the single strongest personality predictor of high partner count according to Big Five research. Major red flag backed by decades of data.",
    noExplanation:
      "She doesn't show this personality combination — one of the most reliable predictors, and she doesn't fit it.",
    notSureExplanation:
      "Think about it: is she the life of every party but can't keep her apartment clean or follow through on plans? That's the combo.",
  },
  {
    id: "r12",
    type: "red",
    question: "Does she use recreational drugs?",
    weight: 7,
    icon: "💊",
    context:
      "Drug use is directly tied to impulsivity, sensation-seeking, and willingness to engage in risky behavior — all strongly correlated with higher partner counts. Beyond personality, drugs lower inhibitions and impair judgment, creating situations where casual sex becomes more likely. Individuals who use recreational drugs report significantly more sexual partners. Stimulants and party drugs in particular are associated with hypersexual behavior.",
    yesExplanation:
      "Recreational drug use directly correlates with higher partner counts through both personality traits and the situational effects of the substances.",
    noExplanation:
      "She stays away from drugs. This removes a significant risk factor.",
    notSureExplanation:
      "If you're not sure, that itself might be a flag — drug use often gets hidden early in relationships.",
  },
  {
    id: "r13",
    type: "red",
    question: "Does she have a disproportionate number of male friends?",
    weight: 6,
    icon: "👥",
    context:
      "A woman with a disproportionately large number of male friends is operating in a social environment saturated with sexual opportunity. Research on cross-sex friendships shows that men in these friendships almost always experience some degree of sexual attraction. Some women deliberately cultivate male-heavy social circles for the social dynamics — being the sole woman gives her enormous leverage, attention, and validation. It can also indicate difficulty maintaining female friendships, which often signals deeper interpersonal issues.",
    yesExplanation:
      "A disproportionate number of male friends means she's surrounded by sexual opportunity and likely enjoys the attention dynamics of being the woman in a male group.",
    noExplanation:
      "She maintains a balanced or female-heavy social circle — suggests healthy same-sex friendships and less reliance on male attention.",
    notSureExplanation:
      "Pay attention to who she texts, who she hangs out with, and who she talks about. The ratio will become clear.",
  },
  {
    id: "r14",
    type: "red",
    question: "Is she bisexual?",
    weight: 5,
    icon: "🌈",
    context:
      "Research consistently shows that bisexual individuals report higher numbers of sexual partners than both heterosexual and homosexual individuals. Bisexuality effectively doubles the pool of potential partners and is associated with higher overall sexual openness. Studies in major psychology journals have found that bisexual women specifically report the highest average number of sexual partners among all female sexual orientation categories.",
    yesExplanation:
      "Bisexual women statistically report the highest average partner counts across all female orientation categories. The expanded dating pool and associated openness are significant factors.",
    noExplanation:
      "She identifies as straight, which statistically correlates with a lower average number of partners compared to bisexual women.",
    notSureExplanation:
      "If her sexuality is ambiguous to you, that ambiguity itself may be informative. People with clear boundaries tend to communicate them.",
  },
  {
    id: "r15",
    type: "red",
    question: 'Is she overly concerned with whether men are "on the down low"?',
    weight: 4,
    icon: "🔍",
    context:
      "When a woman is excessively preoccupied with whether men are secretly bisexual or gay, it often falls into classic BOP trickery — deflection and projection. This hyper-focus on male sexuality can signal a deeper distrust of men stemming from many negative experiences — which itself correlates with a high partner count. It can also indicate an oversexualization of relationships where she views everything through a sexual lens.",
    yesExplanation:
      "Her obsession with men's hidden sexuality suggests projection, deep distrust from many negative experiences, or an oversexualized worldview — all red flags.",
    noExplanation:
      "She doesn't fixate on this topic — suggests she's not operating from a place of deep distrust or sexual preoccupation.",
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
      "Habitual lying is one of the most serious red flags. A woman who lies frequently and comfortably has developed that skill through practice — and one of the most common reasons people develop advanced deception skills is to manage multiple relationships, hide infidelity, or maintain contradictory narratives. Chronic lying is associated with dark triad personality traits (narcissism, Machiavellianism, psychopathy), all of which correlate with higher partner counts and exploitative relationship strategies.",
    yesExplanation:
      "A lying problem is one of the most serious indicators. Habitual deception is a practiced skill, often developed through managing multiple relationships. Major red flag.",
    noExplanation:
      "She seems honest and transparent. Honesty suggests she isn't hiding a complicated past.",
    notSureExplanation:
      "If you're already questioning her honesty, trust that instinct. Liars are skilled — if you're catching inconsistencies, there are more you're missing.",
  },
  {
    id: "r17",
    type: "red",
    question: "Does she adopt a lot of traditionally male hobbies and interests?",
    weight: 4,
    icon: "🎮",
    context:
      "Context matters here. If she's genuinely passionate, that's one thing. But if she adopts male hobbies superficially — just enough to be visible in male-dominated spaces without deep engagement — it's likely an attention strategy. Being \"the girl who games\" or \"the girl into cars\" guarantees male attention and validation. Research on mating strategies shows women sometimes adopt cross-gender interests specifically to increase access to potential mates. Look for depth: is she genuinely skilled, or performing interest for an audience?",
    yesExplanation:
      "She collects male hobbies that seem more performative than genuine — a deliberate strategy to maximize male attention in male-dominated spaces.",
    noExplanation:
      "Her interests seem genuine and not strategically chosen to maximize male attention.",
    notSureExplanation:
      "Test the depth: does she actually know her stuff, or does she just like being seen in the space?",
  },
  {
    id: "r18",
    type: "red",
    question: "Does she frequently use sexual innuendo in conversation?",
    weight: 6,
    icon: "💬",
    context:
      "Frequent sexual innuendo is a strong signal of high sexual preoccupation and comfort with sexuality as a social tool. Research on sociosexual orientation shows that sexually unrestricted individuals are significantly more likely to use sexual language and innuendo in everyday interactions. It's a way of keeping sexuality at the forefront — testing boundaries, signaling availability, and maintaining a sexually charged atmosphere. If she can't go a conversation without making it suggestive, she's telling you where her mind lives.",
    yesExplanation:
      "Constant sexual innuendo reveals where her mind naturally lives — strongly associated with high sociosexual orientation and comfort with sexuality as a social tool.",
    noExplanation:
      "She keeps conversation appropriate and doesn't lean on sexual undertones.",
    notSureExplanation:
      "Think about your last few conversations. How often did things take a suggestive turn — and who steered it there?",
  },
  {
    id: "r19",
    type: "red",
    question: "Did you have sex the first time you met in person?",
    weight: 9,
    icon: "⚡",
    context:
      "This is the most direct and heavily weighted indicator. A woman willing to have sex with someone she's just met in person has, by definition, a very low threshold for sexual intimacy with new people. Research on sociosexual orientation places this at the extreme end of \"unrestricted.\" The willingness to be that physically vulnerable with a near-stranger almost always indicates a pattern — this is unlikely to be her first time doing it. People comfortable sharing their body with someone they barely know tend to have done so many times before.",
    yesExplanation:
      "Sex on the first meeting is the strongest single indicator of an unrestricted sexual strategy. This almost always reflects a pattern, not a one-time exception.",
    noExplanation:
      "She didn't sleep with you immediately — suggests a more selective approach to physical intimacy, the most direct positive signal possible.",
    notSureExplanation:
      "If it's complicated or \"kind of\" happened, that ambiguity leans toward yes. Clear boundaries don't usually need explaining.",
  },
  {
    id: "r20",
    type: "red",
    question: "Is she working in one of the top promiscuous professions (bartender, flight attendant, nurse, model/entertainer, or real estate)?",
    weight: 5,
    icon: "💼",
    context:
      "Research and large-scale surveys consistently identify certain professions as having significantly higher rates of infidelity and sexual partners. Bartenders operate in nightlife environments saturated with alcohol and flirtation. Flight attendants travel constantly with built-in anonymity and access to new cities. Nurses work long, high-stress shifts with intense emotional bonding among coworkers. Models and entertainers are immersed in industries that reward physical appearance and sexual appeal. Real estate agents have flexible schedules with private showings and a client-driven social life. It's not that these jobs make someone promiscuous — it's that the environments, schedules, and social dynamics of these professions create disproportionate opportunity.",
    yesExplanation:
      "Her profession puts her in an environment with disproportionate opportunity — high travel, nightlife, flexible schedules, or appearance-driven culture. The research on these industries is consistent.",
    noExplanation:
      "Her profession doesn't fall into the high-risk category. One less environmental factor to consider.",
    notSureExplanation:
      "Think about her job's social dynamics: does it involve lots of travel, nightlife, flexible hours, or heavy interaction with strangers?",
  },
  {
    id: "r21",
    type: "red",
    question: "Has she been diagnosed with BPD, bipolar disorder, or ADHD?",
    weight: 7,
    icon: "🧠",
    context:
      "This isn't about stigmatizing mental health — it's about understanding documented correlations. Borderline Personality Disorder (BPD) is characterized by impulsivity, fear of abandonment, and unstable relationships, and research shows individuals with BPD report significantly more sexual partners. Bipolar disorder's manic episodes often include hypersexuality as a clinical symptom. ADHD is associated with impulsivity and sensation-seeking, both strong predictors of higher partner counts. Multiple peer-reviewed studies across these diagnoses consistently find elevated numbers of sexual partners compared to the general population.",
    yesExplanation:
      "These specific diagnoses have well-documented correlations with higher partner counts — through impulsivity, hypersexuality during episodes, or sensation-seeking behavior. This is clinical research, not judgment.",
    noExplanation:
      "No relevant mental health diagnoses that the research links to elevated partner counts. One less clinical risk factor.",
    notSureExplanation:
      "Mental health history often comes out over time. If she shows signs of extreme impulsivity, mood swings, or fear of abandonment, it may be worth understanding why.",
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
      "Regular reading — particularly long-form books — is associated with higher cognitive ability, patience, and a preference for depth over stimulation. Research links higher IQ and intellectual engagement to lower partner counts, as individuals with higher cognitive ability tend to employ more deliberate, long-term mating strategies. A woman who reads regularly is exercising delayed gratification and focused attention — the opposite of the impulsive, sensation-seeking profile associated with promiscuity.",
    yesExplanation:
      "Regular reading signals intellectual engagement, patience, and preference for depth — traits associated with more selective, deliberate relationship choices.",
    noExplanation:
      "She's not a reader. This doesn't seal the deal, but it removes one indicator of the deliberate, long-term oriented personality type.",
    notSureExplanation:
      "Does she talk about books? Does she have a bookshelf? The answer tells you about her attention span and what stimulates her.",
  },
  {
    id: "g2",
    type: "green",
    question: "Does she have a close, healthy relationship with her father?",
    weight: 8,
    icon: "👨‍👧",
    context:
      "This is one of the most robust findings in relationship psychology. Women with strong, positive father-daughter relationships consistently report fewer sexual partners, later sexual debut, and more stable romantic relationships. A present, engaged father provides a model for male behavior and healthy attachment, reducing the likelihood of seeking male validation through sexual relationships. The absence of a father figure is one of the single strongest predictors of early and frequent sexual activity in women.",
    yesExplanation:
      "A strong father-daughter relationship is one of the most powerful protective factors against promiscuity. She had a healthy model for male relationships from the start.",
    noExplanation:
      "Absence of a healthy paternal relationship is one of the strongest predictors of seeking male validation through sexual relationships. Significant finding.",
    notSureExplanation:
      "Pay attention to how she talks about her dad — or whether she avoids the topic entirely. Both are informative.",
  },
  {
    id: "g3",
    type: "green",
    question: "Is she religious or spiritually disciplined?",
    weight: 6,
    icon: "🙏",
    context:
      "Religiosity is one of the most consistent predictors of sexual restraint across decades of research. Religious women report fewer sexual partners, later first sexual experiences, and stronger preferences for committed relationships. This isn't just about rules — it's about having an internalized moral framework and community accountability structure that reinforces long-term mating strategies. The discipline aspect matters: actively practicing faith (attending services, prayer routines) is a stronger predictor than simply identifying as religious.",
    yesExplanation:
      "Active religiosity or spiritual discipline is one of the most consistent predictors of lower partner counts and commitment-oriented relationship behavior.",
    noExplanation:
      "She's not religious or spiritually disciplined — removes one of the most reliable protective factors against unrestricted sexual behavior.",
    notSureExplanation:
      "There's a difference between 'spiritual' as an Instagram aesthetic and genuine disciplined practice. Look for consistency and depth.",
  },
  {
    id: "g4",
    type: "green",
    question: "Does she have long-term goals and actively work toward them?",
    weight: 6,
    icon: "🎯",
    context:
      "Goal-oriented behavior is a hallmark of high conscientiousness — the personality trait most strongly associated with sexual restraint. Women who set long-term goals and systematically pursue them are demonstrating delayed gratification, self-regulation, and future-orientation. These are K-selected traits: prioritizing quality over quantity, investment over impulse. Research consistently shows that conscientious, future-oriented individuals have fewer sexual partners because they weigh consequences and prioritize long-term outcomes over momentary pleasure.",
    yesExplanation:
      "Long-term goal pursuit signals high conscientiousness and future-orientation — K-selected traits strongly associated with fewer sexual partners and more committed relationships.",
    noExplanation:
      "Lack of long-term goals suggests lower conscientiousness and possibly more present-oriented decision-making, which correlates with less sexual restraint.",
    notSureExplanation:
      "Ask her where she sees herself in 5 years. The specificity and conviction of her answer tells you a lot about her orientation.",
  },
  {
    id: "g5",
    type: "green",
    question: "Has she had few but long-lasting relationships?",
    weight: 7,
    icon: "💍",
    context:
      "Relationship history is one of the most direct indicators of mating strategy. Women who have had a small number of long-duration relationships are demonstrating a classic K-selected pattern: high investment, pair bonding, and commitment orientation. This pattern is associated with secure attachment style, emotional stability, and the ability to maintain deep connections over time. It's the behavioral opposite of serial short-term relationships, which indicate an unrestricted sociosexual orientation.",
    yesExplanation:
      "Few, long relationships signal a K-selected mating strategy — high investment, strong pair bonding, and genuine commitment orientation. One of the best direct indicators.",
    noExplanation:
      "A pattern of many short relationships or no long-term relationships suggests a more unrestricted approach to relationships and intimacy.",
    notSureExplanation:
      "Her relationship history will come out in conversation. Listen for how she talks about exes — duration, depth, and how they ended all matter.",
  },
  {
    id: "g6",
    type: "green",
    question: "Is she financially responsible and disciplined with money?",
    weight: 5,
    icon: "💰",
    context:
      "Financial discipline is a strong proxy for conscientiousness and impulse control — both of which are protective factors against promiscuity. Research shows that individuals who are good with money, save consistently, and avoid impulsive spending score higher on self-regulation measures that predict fewer sexual partners. Financial responsibility requires the same delayed gratification that characterizes sexually restricted mating strategies. If she can say no to a purchase, she can say no to a person.",
    yesExplanation:
      "Financial discipline signals strong impulse control and conscientiousness — the same self-regulation traits that predict more selective sexual behavior.",
    noExplanation:
      "Financial irresponsibility suggests impulsivity and poor self-regulation, which are associated with less selective sexual behavior.",
    notSureExplanation:
      "Look at her lifestyle versus her income. Does she live within her means, or is she always chasing the next purchase?",
  },
  {
    id: "g7",
    type: "green",
    question: "Does she cook at home and value domestic skills?",
    weight: 4,
    icon: "🍳",
    context:
      "Domestic investment — cooking, maintaining a home, building a comfortable living space — signals nesting behavior and long-term orientation. Research on life history theory shows that women who invest in domestic skills are prioritizing stability and pair bonding over social signaling and novelty-seeking. It's a K-selected trait: investing energy in building a home rather than maintaining a social presence. Women who cook at home also tend to spend less time in bars, restaurants, and nightlife environments where casual encounters are more likely.",
    yesExplanation:
      "Domestic investment signals nesting behavior and long-term orientation — she's building a home rather than maintaining a party lifestyle.",
    noExplanation:
      "No interest in domestic skills could mean she's more socially oriented than home-oriented, which shifts where she spends her time and energy.",
    notSureExplanation:
      "Does she ever invite you over for a home-cooked meal, or is every date at a bar or restaurant? The pattern is telling.",
  },
  {
    id: "g8",
    type: "green",
    question: "Does she have low social media usage and presence?",
    weight: 5,
    icon: "📵",
    context:
      "High social media usage is consistently linked to attention-seeking behavior, narcissistic traits, and higher numbers of sexual partners in research. Conversely, women with low social media presence are opting out of the validation economy — they don't need constant external affirmation of their attractiveness or social status. Low social media usage correlates with higher self-esteem, lower narcissism, and more secure attachment styles — all protective factors against promiscuity.",
    yesExplanation:
      "Low social media usage signals she doesn't need constant external validation — associated with higher self-esteem, lower narcissism, and more secure attachment.",
    noExplanation:
      "High social media presence and engagement is linked to attention-seeking and narcissistic traits that correlate with higher partner counts.",
    notSureExplanation:
      "Check her screen time habits. Is she constantly posting, scrolling, and checking likes, or does she treat her phone as a tool?",
  },
  {
    id: "g9",
    type: "green",
    question: "Does she have a stable, close-knit female friend group?",
    weight: 6,
    icon: "👭",
    context:
      "Women who maintain long-term, stable female friendships demonstrate emotional maturity, loyalty, and the ability to sustain deep relationships — all traits associated with committed, low-partner-count lifestyles. Research shows that strong same-sex friendships are protective against risky sexual behavior because they provide emotional support and accountability. A woman who can keep close female friends for years has the interpersonal skills and emotional stability that predict relationship success.",
    yesExplanation:
      "Stable female friendships signal emotional maturity, loyalty, and interpersonal skills — all protective factors against promiscuity and predictors of relationship success.",
    noExplanation:
      "Inability to maintain female friendships often signals interpersonal issues — jealousy, drama, or instability — that are associated with riskier sexual behavior.",
    notSureExplanation:
      "How does she talk about her friends? Long-time besties or a rotating cast? The stability of her friendships mirrors her relationship patterns.",
  },
  {
    id: "g10",
    type: "green",
    question: "Is she introverted or comfortable being alone?",
    weight: 5,
    icon: "🧘",
    context:
      "Introversion is associated with lower partner counts across virtually all research on personality and sexual behavior. Introverts are less driven by social stimulation, less likely to seek novelty through new people, and more comfortable with solitude — meaning they don't need external validation to feel fulfilled. Women who are genuinely comfortable being alone aren't driven to fill emotional voids with new partners. This is a K-selected trait: quality of connection matters more than quantity of social interaction.",
    yesExplanation:
      "Introversion and comfort with solitude signal she doesn't need constant social stimulation or external validation — strongly associated with fewer sexual partners.",
    noExplanation:
      "High extroversion without other balancing traits is one of the strongest predictors of higher partner counts in personality research.",
    notSureExplanation:
      "Does she need plans every weekend or is she content with a quiet night in? How she recharges tells you about her orientation.",
  },
  {
    id: "g11",
    type: "green",
    question: "Does she journal, meditate, or practice genuine self-reflection?",
    weight: 4,
    icon: "📝",
    context:
      "Genuine self-reflective practices — journaling, meditation, therapy for growth — indicate high self-awareness, emotional intelligence, and intentionality. Research links these traits to more deliberate decision-making in relationships and lower impulsivity. A woman who regularly examines her own thoughts and behaviors is less likely to act on impulse and more likely to be intentional about who she lets into her life. Self-awareness is a protective factor — people who understand their own patterns are less likely to repeat destructive ones.",
    yesExplanation:
      "Self-reflective practices signal high emotional intelligence and intentionality — she's deliberate about her choices, which is protective against impulsive sexual behavior.",
    noExplanation:
      "Lack of self-reflection means less awareness of personal patterns, which can lead to repeated impulsive decisions in relationships.",
    notSureExplanation:
      "Does she talk about personal growth with specifics, or just aesthetics? Real self-reflection changes behavior — look for evidence.",
  },
  {
    id: "g12",
    type: "green",
    question: "Does she value family and talk about wanting a stable future?",
    weight: 6,
    icon: "🏠",
    context:
      "Orientation toward family and long-term stability is the hallmark of a K-selected reproductive strategy — high investment, careful mate selection, and prioritization of quality over quantity. Women who genuinely value family (not just performatively) tend to have fewer sexual partners because their mating decisions are filtered through a long-term lens. Research consistently shows that family-oriented women report lower sociosexual orientation scores and more committed relationship histories.",
    yesExplanation:
      "Family orientation and desire for stability signal a K-selected strategy — careful mate selection and long-term thinking. One of the strongest green flags available.",
    noExplanation:
      "No strong family orientation or future stability goals suggests she may be more present-oriented in her relationship decisions.",
    notSureExplanation:
      "Listen for how she talks about the future. Does she mention family, settling down, building something — or does she avoid long-term planning?",
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
