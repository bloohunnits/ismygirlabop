const questions = [
  {
    id: 1,
    question: "Does she overuse the word \"lust\" outside of a religious context?",
    weight: 4,
    category: "Manipulation",
    icon: "🎭",
    context:
      "This is classic BOP trickery. Women who frequently use emotionally charged words like \"lust\" are often employing a subtle manipulation tactic — they use this language to get you emotionally invested in a way that benefits them, not you. It creates a false sense of deep connection. It's also textbook projection: women with a higher-than-average sex drive often project that intensity onto others through their choice of words. If she's constantly framing things in terms of \"lust,\" she may be telling on herself.",
    yesExplanation:
      "She uses the word \"lust\" frequently outside of religious settings — this is a manipulation red flag. She may be projecting her own heightened sexuality onto you to create emotional leverage.",
    noExplanation:
      "She doesn't lean on emotionally loaded language to draw you in. That's a good sign — it suggests she's not relying on manipulation tactics to keep your attention.",
  },
  {
    id: 2,
    question: "Does she enjoy horror movies and gore?",
    weight: 5,
    category: "Disgust Sensitivity",
    icon: "🩸",
    context:
      "Research in evolutionary psychology has consistently linked low disgust sensitivity to higher sexual promiscuity. A woman who can sit through extreme horror and gore without flinching has a measurably higher tolerance for things that would make most people uncomfortable — and that tolerance extends beyond the screen. Studies show that individuals with low disgust thresholds tend to have more sexual partners and engage in riskier sexual behavior. It's not about the movies themselves; it's about what her comfort with graphic content signals about her psychological makeup.",
    yesExplanation:
      "Her comfort with horror and graphic content suggests a lower disgust sensitivity, which research links to higher sexual openness and a greater number of partners.",
    noExplanation:
      "She's not drawn to horror and gore, which suggests a typical or higher disgust sensitivity — generally correlated with more selective partner choices.",
  },
  {
    id: 3,
    question: "Is she generally hard to disgust?",
    weight: 5,
    category: "Disgust Sensitivity",
    icon: "😐",
    context:
      "This builds directly on the disgust sensitivity research. If she's the type who doesn't flinch at much of anything — crude humor, graphic stories, uncomfortable situations — that low disgust threshold is a well-documented psychological correlate of higher partner counts. Multiple peer-reviewed studies have found that disgust sensitivity is one of the strongest personality-level predictors of sexual behavior. People who are easily disgusted tend to be more sexually restricted; people who aren't tend to be more sexually unrestricted. It's one of the most robust findings in the field.",
    yesExplanation:
      "She's hard to gross out in general. This is one of the strongest personality-level predictors of an unrestricted sexual strategy — meaning more partners and less selectivity.",
    noExplanation:
      "She has a normal or high disgust sensitivity, which is one of the most reliable indicators of a more restricted, selective approach to sexual partners.",
  },
  {
    id: 4,
    question: "Does she have tattoos on her face, neck, or hands?",
    weight: 6,
    category: "Risk-Taking",
    icon: "🖋️",
    context:
      "Tattoos in highly visible, socially stigmatized locations (face, neck, hands) signal several things simultaneously. First, high pain tolerance — which research associates with higher testosterone levels and sensation-seeking behavior. Second, comfort with social deviance and rejection of conventional norms. Third, and perhaps most importantly, visible tattoos in extreme locations are often tied to unresolved trauma and a need for external expression of internal pain. The research is clear: individuals with more tattoos, particularly in visible locations, report significantly more sexual partners on average. It's not about judging ink — it's about understanding what the placement signals psychologically.",
    yesExplanation:
      "Tattoos in extreme, highly visible locations signal high sensation-seeking, comfort with social deviance, and possible trauma expression — all of which correlate with higher partner counts.",
    noExplanation:
      "No extreme placement tattoos. This doesn't tell us everything, but the absence of high-visibility ink removes one common risk indicator.",
  },
  {
    id: 5,
    question: "Does she have a tramp stamp?",
    weight: 7,
    category: "Risk-Taking",
    icon: "🔥",
    context:
      "Let's be real — a lower-back tattoo has been culturally associated with sexual availability for decades, and the research backs it up. Studies show that men and women alike perceive lower-back tattoos as a signal of sexual openness, and the women who get them are statistically more likely to report higher numbers of sexual partners. It's essentially branding — a deliberate choice to place a permanent mark in a location that's primarily visible in intimate or revealing contexts. The placement itself is the message.",
    yesExplanation:
      "A lower-back tattoo is one of the most culturally and statistically recognized signals of sexual openness. The placement is deliberate and the research supports what everyone already intuits.",
    noExplanation:
      "No lower-back tattoo. One less culturally loaded signal to worry about.",
  },
  {
    id: 6,
    question: "Does she have an iPad?",
    weight: 2,
    category: "Lifestyle",
    icon: "📱",
    context:
      "Okay, this one's partly a joke — but there's a kernel of truth. The \"iPad kid\" stereotype and the cultural association between iPads and a certain type of chronically-online, attention-seeking lifestyle isn't entirely baseless. More importantly, it's a lighthearted check: does she fit a pattern of someone who collects trendy lifestyle accessories that signal a particular type of consumption-driven, social-media-heavy existence? It's a low-weight indicator, but if you know, you know. Sometimes the vibes are just off.",
    yesExplanation:
      "She's got the iPad. It's a minor indicator at best, but it fits a certain lifestyle pattern. Don't panic — just note it and keep reading.",
    noExplanation:
      "No iPad. This barely matters, but hey — one less box checked.",
  },
  {
    id: 7,
    question: "Does she keep her phone on Do Not Disturb indefinitely?",
    weight: 5,
    category: "Communication",
    icon: "🔕",
    context:
      "If her phone is permanently on Do Not Disturb, ask yourself why. The most common reason? She's managing multiple streams of attention and doesn't want them to collide. Constant DND means she's controlling who sees what and when — a classic sign of someone juggling options. It also means she can selectively respond to people on her own timeline, which is a power move designed to keep multiple people on the hook without any of them knowing about each other. A woman who has nothing to hide doesn't need to silence her phone 24/7.",
    yesExplanation:
      "Permanent DND is a classic sign of someone managing multiple attention streams. She's controlling the flow of communication to keep her options compartmentalized.",
    noExplanation:
      "Her phone isn't locked down in DND mode. That suggests she's not actively trying to hide incoming attention from multiple sources.",
  },
  {
    id: 8,
    question: "Are her close friends promiscuous?",
    weight: 8,
    category: "Social Circle",
    icon: "👯",
    context:
      "\"Birds of a feather flock together\" isn't just a saying — it's one of the most well-established principles in social psychology. People self-select into friend groups that share their values, behaviors, and lifestyle choices. If her closest friends are known for being promiscuous, the overwhelming likelihood is that she shares those same tendencies. Research on social influence shows that sexual behavior norms are heavily shaped by peer groups. Your friends are a mirror of who you are — and her friends are telling you exactly who she is. This is one of the strongest non-direct indicators available.",
    yesExplanation:
      "Her closest friends are promiscuous. This is one of the single strongest indicators — people self-select into social groups that mirror their values and behavior. Her circle is telling you everything.",
    noExplanation:
      "Her friends don't raise red flags. A solid social circle is one of the best signs that her values align with stability and selectivity.",
  },
  {
    id: 9,
    question: "Does she drink and party often?",
    weight: 7,
    category: "Lifestyle",
    icon: "🍾",
    context:
      "Frequent drinking and partying isn't just about having fun — it's about repeatedly placing yourself in environments where impulsive decisions are easy to make and consequences feel distant. Research consistently shows that alcohol consumption is one of the strongest situational predictors of casual sex. But here's the deeper layer: if she's deliberately and regularly getting drunk and going out, she's actively seeking environments where sexual opportunities are abundant. There may even be a thrill in the loss of control — a pattern that's well-documented in studies on sensation-seeking personality types. It's not about one night out. It's about a lifestyle pattern.",
    yesExplanation:
      "Regular drinking and partying means she's consistently placing herself in high-opportunity, low-inhibition environments. This is one of the strongest lifestyle predictors of a high partner count.",
    noExplanation:
      "She's not a regular on the party scene. This removes one of the most common environmental factors that lead to casual encounters.",
  },
  {
    id: 10,
    question: "Does she dress provocatively on a regular basis?",
    weight: 6,
    category: "Attention-Seeking",
    icon: "👗",
    context:
      "Let's be clear: everyone has the right to dress however they want. But if we're analyzing behavioral indicators, consistently provocative dressing is a well-documented signal of attention-seeking behavior and comfort with sexual display. Research shows that women who regularly dress in revealing clothing report higher numbers of sexual partners and score higher on measures of sociosexual orientation (willingness to engage in uncommitted sex). It's about the pattern — someone who consistently chooses to maximize sexual attention through clothing is signaling availability, whether consciously or not. People who are more comfortable showcasing their body to the world tend to be more comfortable sharing it.",
    yesExplanation:
      "Consistently provocative dressing is a documented signal of higher sociosexual orientation — she's comfortable with sexual display and attention, which correlates with more partners.",
    noExplanation:
      "She dresses modestly or normally most of the time. This suggests she's not driven by a need for constant sexual attention through appearance.",
  },
  {
    id: 11,
    question: "Does she smoke cigarettes?",
    weight: 5,
    category: "Risk-Taking",
    icon: "🚬",
    context:
      "Cigarette smoking is a risk-taking behavior, and risk-taking behaviors tend to cluster together. Research consistently finds that smokers report more sexual partners than non-smokers. Smoking is also associated with higher impulsivity, sensation-seeking, and a general comfort with behaviors that prioritize short-term gratification over long-term consequences. Additionally, smoking has historically been associated with more traditionally masculine behavioral traits in women, and women who adopt more masculine behavioral profiles tend to have higher partner counts. It's not the cigarette itself — it's what the habit signals about her personality.",
    yesExplanation:
      "Smoking signals impulsivity, sensation-seeking, and comfort with risk — all traits that research links to higher numbers of sexual partners.",
    noExplanation:
      "She doesn't smoke. One less risk-taking behavior in the picture, which is generally a positive indicator.",
  },
  {
    id: 12,
    question: "Is she highly extroverted AND disorganized?",
    weight: 6,
    category: "Personality",
    icon: "🎪",
    context:
      "This is one of the most research-backed indicators on this entire list. The Big Five personality model — the gold standard in personality psychology — shows that the combination of high Extroversion and low Conscientiousness is the single strongest personality predictor of a high number of sexual partners. Extroversion means she thrives on social stimulation, attention, and novelty. Low conscientiousness (disorganization, lack of follow-through, impulsivity) means she's less likely to exercise restraint or think through long-term consequences. Together, these traits create a perfect storm: someone who's constantly seeking stimulation, surrounded by people, and lacking the self-regulation to say no. This isn't speculation — it's decades of personality research.",
    yesExplanation:
      "High extroversion + low conscientiousness is the single strongest personality predictor of high partner count according to Big Five research. This is a major red flag backed by decades of data.",
    noExplanation:
      "She doesn't show this particular personality combination. That's significant — this is one of the most reliable personality-level predictors, and she doesn't fit it.",
  },
  {
    id: 13,
    question: "Does she use recreational drugs?",
    weight: 7,
    category: "Risk-Taking",
    icon: "💊",
    context:
      "Drug use is directly tied to impulsivity, sensation-seeking, and a willingness to engage in risky behavior — all of which are strongly correlated with higher sexual partner counts. Beyond the personality traits, drugs themselves lower inhibitions and impair judgment, creating situations where casual sex becomes more likely. Studies consistently show that individuals who use recreational drugs report significantly more sexual partners than those who don't. The type of drug matters too — stimulants and party drugs in particular are associated with hypersexual behavior. If she's using recreationally, she's signaling a comfort with risk and altered states that extends into her sexual behavior.",
    yesExplanation:
      "Recreational drug use directly correlates with higher partner counts through both personality traits (impulsivity, sensation-seeking) and the situational effects of the substances themselves.",
    noExplanation:
      "She stays away from drugs. This removes a significant risk factor and suggests she's not driven by sensation-seeking impulses.",
  },
  {
    id: 14,
    question: "Does she have a lot of male friends?",
    weight: 6,
    category: "Social Dynamics",
    icon: "👥",
    context:
      "A woman with a disproportionately large number of male friends is operating in a social environment saturated with sexual opportunity. Research on cross-sex friendships shows that men in these friendships almost always experience some degree of sexual attraction, even if the woman claims the friendships are purely platonic. Beyond opportunity, some women deliberately cultivate male-heavy social circles because of the social dynamics it creates — being the sole woman in a group of men gives her enormous social leverage, attention, and validation. It can also indicate emotional instability in same-sex friendships, since women who can't maintain female friendships often have interpersonal issues that drive them toward male attention as a substitute.",
    yesExplanation:
      "A disproportionate number of male friends means she's surrounded by sexual opportunity and likely enjoys the attention dynamics of being the woman in a male group.",
    noExplanation:
      "She maintains a balanced or female-heavy social circle. This suggests healthy same-sex friendships and less reliance on male attention for validation.",
  },
  {
    id: 15,
    question: "Is she bisexual?",
    weight: 5,
    category: "Sexuality",
    icon: "🌈",
    context:
      "Research consistently shows that bisexual individuals report higher numbers of sexual partners than both heterosexual and homosexual individuals. This isn't a moral judgment — it's a statistical reality. Bisexuality effectively doubles the pool of potential partners and is associated with higher overall sexual openness and sociosexual orientation scores. Studies published in major psychology journals have found that bisexual women specifically report the highest average number of sexual partners among all female sexual orientation categories. If she identifies as bisexual, the math alone suggests a higher probability of an elevated partner count.",
    yesExplanation:
      "Bisexual women statistically report the highest average partner counts across all female sexual orientation categories. The expanded dating pool and associated openness are significant factors.",
    noExplanation:
      "She identifies as straight, which statistically correlates with a lower average number of sexual partners compared to bisexual women.",
  },
  {
    id: 16,
    question:
      'Is she overly concerned with whether men are "on the down low"?',
    weight: 4,
    category: "Projection",
    icon: "🔍",
    context:
      "This is a controversial one, but hear it out. When a woman is excessively preoccupied with whether men are secretly bisexual or gay (\"on the down low\"), it often falls into the same category as classic BOP trickery — deflection and projection. This hyper-focus on male sexuality can signal a deeper distrust of men that stems from having had many negative experiences with them — which itself correlates with a high partner count. It can also indicate a general oversexualization of relationships, where she views everything through a sexual lens. Additionally, if she's constantly suspicious of men's sexuality, she may be projecting her own sexual complexity onto others.",
    yesExplanation:
      "Her obsession with men's hidden sexuality suggests either projection, deep distrust from many negative experiences with men, or an oversexualized worldview — all red flags.",
    noExplanation:
      "She doesn't fixate on this topic. That's a good sign — it suggests she's not operating from a place of deep distrust or sexual preoccupation.",
  },
  {
    id: 17,
    question: "Does she have a noticeable lying problem?",
    weight: 8,
    category: "Character",
    icon: "🤥",
    context:
      "Habitual lying is one of the most serious red flags on this list, and for good reason. A woman who lies frequently and comfortably has developed that skill through practice — and one of the most common reasons people develop advanced deception skills is to manage multiple relationships, hide infidelity, or maintain contradictory narratives across different social groups. Chronic lying is also associated with dark triad personality traits (narcissism, Machiavellianism, psychopathy), all of which correlate with higher partner counts and exploitative relationship strategies. If she can lie to your face without flinching, she's done it many, many times before.",
    yesExplanation:
      "A lying problem is one of the most serious indicators. Habitual deception is a practiced skill, often developed through managing multiple relationships and hiding sexual history. Major red flag.",
    noExplanation:
      "She seems honest and transparent. This is one of the most important green flags — honesty suggests she isn't hiding a complicated past.",
  },
  {
    id: 18,
    question:
      "Does she adopt a lot of traditionally male hobbies and interests?",
    weight: 4,
    category: "Attention-Seeking",
    icon: "🎮",
    context:
      "There's nothing wrong with a woman having traditionally male interests — but context matters. If she's genuinely passionate about these hobbies, that's one thing. But if she adopts male hobbies superficially — just enough to be visible in male-dominated spaces without deep engagement — it's likely an attention strategy. Being \"the girl who games\" or \"the girl who's into cars\" is a powerful social tool that guarantees attention and validation from men. Research on mating strategies shows that women sometimes adopt cross-gender interests specifically to increase their access to potential mates. Look for depth of engagement: is she genuinely skilled and knowledgeable, or is she performing interest for an audience?",
    yesExplanation:
      "She collects male hobbies that seem more performative than genuine. This can be a deliberate strategy to maximize male attention and access in male-dominated spaces.",
    noExplanation:
      "Her interests seem genuine and not strategically chosen to maximize male attention. This suggests authenticity over attention-seeking.",
  },
  {
    id: 19,
    question: "Does she frequently use sexual innuendo in conversation?",
    weight: 6,
    category: "Communication",
    icon: "💬",
    context:
      "Frequent sexual innuendo in casual conversation is a strong signal of high sexual preoccupation and comfort with sexuality as a social tool. Research on sociosexual orientation shows that individuals who are more sexually unrestricted (more partners, more casual sex) are significantly more likely to use sexual language, jokes, and innuendo in everyday interactions. It's a way of keeping sexuality at the forefront of social dynamics — testing boundaries, signaling availability, and maintaining a sexually charged atmosphere. If she can't go a conversation without making it suggestive, she's telling you where her mind naturally lives.",
    yesExplanation:
      "Constant sexual innuendo reveals where her mind naturally lives. This is strongly associated with high sociosexual orientation and a comfort with sexuality as a social tool.",
    noExplanation:
      "She keeps conversation appropriate and doesn't lean on sexual undertones. This suggests she's not using sexuality as a constant social tool.",
  },
  {
    id: 20,
    question:
      "Did you have sex the first time you met in person?",
    weight: 9,
    category: "Direct Indicator",
    icon: "⚡",
    context:
      "This is the most direct and heavily weighted indicator on the list for a reason. A woman who is willing to have sex with someone she's just met in person has, by definition, a very low threshold for sexual intimacy with new people. Research on sociosexual orientation places this behavior at the extreme end of the \"unrestricted\" spectrum. While there can be genuine chemistry and connection, the willingness to be that physically vulnerable with a near-stranger almost always indicates a pattern — this is unlikely to be the first time she's done it. People who are comfortable sharing their body with someone they barely know tend to have done so many times before. This is the single strongest behavioral indicator available.",
    yesExplanation:
      "Having sex on the first meeting is the strongest single indicator of an unrestricted sexual strategy. This behavior almost always reflects a pattern, not a one-time exception. This carries the most weight in your score.",
    noExplanation:
      "She didn't sleep with you immediately. This suggests a more selective approach to physical intimacy, which is the most direct positive signal possible.",
  },
];

export default questions;
