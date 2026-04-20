export interface Translations {
  locale: string;
  dir: "ltr" | "rtl";

  // ── Meta ──────────────────────────────────────────────────────────────────
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };

  // ── Navigation ────────────────────────────────────────────────────────────
  nav: {
    calculator: string;
    faq: string;
    about: string;
  };

  // ── Home page ─────────────────────────────────────────────────────────────
  home: {
    heading: string;
    subheading: string;
  };

  // ── Input card ────────────────────────────────────────────────────────────
  input: {
    sectionTitle: string;
    monthPlaceholder: string;
    dayPlaceholder: string;
    yearPlaceholder: string;
    calculateButton: string;
  };

  // ── Result display ────────────────────────────────────────────────────────
  result: {
    exactAge: string;
    youAre: string;
    yearsOld: string;
    bornOn: string;
    months: string;
    weeks: string;
    days: string;
    hours: string;
    minutes: string;
  };

  // ── Birthday countdown ────────────────────────────────────────────────────
  countdown: {
    happyBirthday: string;
    todayIsYourDay: string;
    nextBirthdayIn: string;
    countdownDays: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };

  // ── Birthday profile ──────────────────────────────────────────────────────
  profile: {
    heading: string;
    westernZodiac: string;
    chineseZodiac: string;
    lifePathNumber: string;
    masterNumber: string;
    strengths: string;
    moonPhase: string;
    illuminated: string;
    mayanCalendar: string;
    kin: string;
    daySign: string;
    galacticTone: string;
    wavespell: string;
    wavespellIntro: string;
    wavespellTheme: string;
    bornOnA: string;
    traits: string;
    birthstone: string;
    birthFlower: string;
    generation: string;
    spiritualGeneration: string;
    starChild: string;
    famousBirthdays: string;
    luckyNumbers: string;
  };

  // ── Japan-exclusive section ───────────────────────────────────────────────
  japan?: {
    gengoSectionTitle: string;
    etoSectionTitle: string;
    bloodTypeSectionTitle: string;
    bloodTypeInputLabel: string;
    bloodTypePlaceholder: string;
    shichuSectionTitle: string;
    shichuSubtitle: string;
    yearPillar: string;
    monthPillar: string;
    dayPillar: string;
    fiveElements: string;
    dayMaster: string;
    kyuseiSectionTitle: string;
    kyuseiSubtitle: string;
  };

  // ── History & timeline ────────────────────────────────────────────────────
  history: {
    heading: string;
    subtitle: string;
    worldEvents: string;
    tech: string;
    popCulture: string;
    music: string;
    movies: string;
    noData: string;
  };

  lifeTimeline: {
    heading: string;
    subtitle: string;
    youAreHere: string;
    today: string;
  };

  // ── Sub-pages ─────────────────────────────────────────────────────────────
  dogCalc: {
    heading: string;
    subheading: string;
    ageLabel: string;
    agePlaceholder: string;
    sizeLabel: string;
    small: string;
    smallSub: string;
    medium: string;
    mediumSub: string;
    large: string;
    largeSub: string;
    calculateButton: string;
    resultPrefix: string;
    resultSuffix: string;
    lifeStage: string;
    stagesTitle: string;
    howTitle: string;
    howText: string;
    backToCalc: string;
    toCatCalc: string;
  };

  catCalc: {
    heading: string;
    subheading: string;
    ageLabel: string;
    agePlaceholder: string;
    calculateButton: string;
    resultPrefix: string;
    resultSuffix: string;
    stagesTitle: string;
    howTitle: string;
    howText1: string;
    howText2: string;
    backToCalc: string;
    toDogCalc: string;
  };

  daysBetween: {
    heading: string;
    subheading: string;
    startLabel: string;
    endLabel: string;
    calculateButton: string;
    resultDays: string;
    resultWeeks: string;
    resultMonths: string;
    resultYears: string;
  };

  // ── Footer ────────────────────────────────────────────────────────────────
  footer: {
    tagline: string;
    about: string;
    privacy: string;
    contact: string;
    faq: string;
    daysBetween: string;
    dogCalc: string;
    catCalc: string;
  };

  // ── Daily fortune ─────────────────────────────────────────────────────────
  fortune: {
    title: string;        // e.g. "Today's Fortune"
    for: string;          // e.g. "for" (between title and sign name)
    refreshes: string;    // e.g. "Refreshes daily"
    moreStats: string;    // e.g. "More stats"
    hideStats: string;    // e.g. "Hide stats"
  };

  // ── Milestone labels (life timeline) ─────────────────────────────────────
  milestones: Record<number, string>;

  // ── Dog life stages ───────────────────────────────────────────────────────
  dogStages: Record<string, string>;

  // ── Cat life stages ───────────────────────────────────────────────────────
  catStages: Record<string, { label: string; desc: string }>;
}
