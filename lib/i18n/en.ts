import type { Translations } from "./types";

const en: Translations = {
  locale: "en",
  dir: "ltr",

  meta: {
    title: "BirthFacts — Age Calculator & Birthday Profile",
    description: "Free birthday profile: exact age, zodiac, moon phase, Mayan Kin number, Life Path Number, spiritual generation, historical facts, dog & cat age calculator.",
    keywords: ["age calculator", "birthday calculator", "zodiac sign", "moon phase birthday", "mayan kin number", "life path number", "dog age calculator", "cat age calculator"],
  },

  nav: {
    calculator: "Calculator",
    faq: "FAQ",
    about: "About",
  },

  home: {
    heading: "Age Calculator",
    subheading: "Discover your exact age in years, months, weeks, days, hours & minutes — plus your zodiac sign, generational identity, and more.",
  },

  input: {
    sectionTitle: "Enter your date of birth",
    monthPlaceholder: "Month",
    dayPlaceholder: "Day",
    yearPlaceholder: "Year",
    calculateButton: "Calculate",
  },

  result: {
    exactAge: "Your exact age",
    youAre: "You are",
    yearsOld: "old",
    bornOn: "Born on a",
    months: "Months",
    weeks: "Weeks",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
  },

  countdown: {
    happyBirthday: "Happy Birthday!",
    todayIsYourDay: "Today is your special day!",
    nextBirthdayIn: "🎂 Next birthday in",
    countdownDays: "days",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
  },

  profile: {
    heading: "Your Birthday Profile",
    westernZodiac: "Western Zodiac",
    chineseZodiac: "Chinese Zodiac",
    lifePathNumber: "Life Path Number",
    masterNumber: "Master",
    strengths: "Strengths",
    moonPhase: "Moon Phase at Birth",
    illuminated: "illuminated",
    mayanCalendar: "Mayan Dreamspell Calendar",
    kin: "Kin",
    daySign: "Day Sign (Solar Seal)",
    galacticTone: "Galactic Tone",
    wavespell: "Wavespell",
    wavespellIntro: "You are in the",
    wavespellTheme: "Wavespell — a 13-day journey guided by the",
    bornOnA: "Born on a...",
    traits: "Traits",
    birthstone: "Birthstone",
    birthFlower: "Birth Flower",
    generation: "Your Generation",
    spiritualGeneration: "Spiritual Generation",
    starChild: "Star Child",
    famousBirthdays: "Famous People Born on Your Day",
    luckyNumbers: "Lucky numbers",
  },

  history: {
    heading: "The World in",
    subtitle: "What was happening when you were born?",
    worldEvents: "🌍 World Events",
    tech: "💡 Tech",
    popCulture: "🎭 Pop Culture",
    music: "🎵 Music",
    movies: "🎬 Movies",
    noData: "Historical data not yet available for",
  },

  lifeTimeline: {
    heading: "Your Life Timeline",
    subtitle: "Key moments in your life, and what was happening in the world at each milestone.",
    youAreHere: "← You are here",
    today: "Today",
  },

  dogCalc: {
    heading: "Dog Age Calculator",
    subheading: "How old is your dog in human years? Enter your dog's age and size for an accurate conversion.",
    ageLabel: "Dog's age (in years)",
    agePlaceholder: "e.g. 7",
    sizeLabel: "Dog's size",
    small: "Small",
    smallSub: "< 20 lbs",
    medium: "Medium",
    mediumSub: "20–50 lbs",
    large: "Large",
    largeSub: "50+ lbs",
    calculateButton: "Calculate Human Age",
    resultPrefix: "Your dog is approximately",
    resultSuffix: "years old in human terms",
    lifeStage: "Life stage",
    stagesTitle: "Dog life stages",
    howTitle: "How is dog age calculated?",
    howText: "The old \"1 dog year = 7 human years\" rule is a myth. Modern veterinary science uses a more accurate model: the first year equals ~15 human years (rapid development), the second year adds ~9 more (24 total), and each subsequent year adds ~4 human years. Large dogs age faster than small dogs, so we apply a size modifier to reflect this difference.",
    backToCalc: "🎂 Birthday Age Calculator",
    toCatCalc: "🐱 Cat Age Calculator",
  },

  catCalc: {
    heading: "Cat Age Calculator",
    subheading: "How old is your cat in human years? Enter your cat's age for an accurate conversion.",
    ageLabel: "Cat's age (in years)",
    agePlaceholder: "e.g. 5",
    calculateButton: "Calculate Human Age",
    resultPrefix: "Your cat is approximately",
    resultSuffix: "years old in human terms",
    stagesTitle: "Cat life stages",
    howTitle: "How is cat age calculated?",
    howText1: "Cats mature very rapidly in their first two years. Year 1 is equivalent to approximately 15 human years, year 2 adds 9 more (24 total), and each year after that equals about 4 human years. Unlike dogs, there is no significant size variation in cat aging.",
    howText2: "This formula is based on guidelines from the International Cat Care organization and is widely used by veterinarians worldwide.",
    backToCalc: "🎂 Birthday Age Calculator",
    toDogCalc: "🐶 Dog Age Calculator",
  },

  daysBetween: {
    heading: "Days Between Dates",
    subheading: "Calculate the exact number of days, weeks, months, and years between any two dates.",
    startLabel: "Start date",
    endLabel: "End date",
    calculateButton: "Calculate",
    resultDays: "days",
    resultWeeks: "weeks",
    resultMonths: "months",
    resultYears: "years",
  },

  footer: {
    tagline: "Your complete birthday profile",
    about: "About",
    privacy: "Privacy Policy",
    contact: "Contact",
    faq: "FAQ",
    daysBetween: "Days Between Dates",
    dogCalc: "Dog Age Calculator",
    catCalc: "Cat Age Calculator",
  },

  fortune: {
    title: "Today's Fortune",
    for: "for",
    refreshes: "Refreshes daily",
    moreStats: "More stats",
    hideStats: "Hide stats",
  },

  milestones: {
    0: "Born",
    5: "Age 5",
    10: "Age 10",
    13: "Teen",
    18: "Adult",
    21: "Age 21",
    30: "Age 30",
    40: "Age 40",
    50: "Age 50",
    60: "Age 60",
    70: "Age 70",
  },

  dogStages: {
    Puppy: "Puppy",
    Junior: "Junior",
    Adult: "Adult",
    Mature: "Mature",
    Senior: "Senior",
    Geriatric: "Geriatric",
  },

  catStages: {
    Kitten: { label: "Kitten", desc: "Rapid growth and development" },
    Junior: { label: "Junior", desc: "Reaching social and sexual maturity" },
    Prime: { label: "Prime", desc: "At the peak of health and activity" },
    Mature: { label: "Mature", desc: "Equivalent to a person in their 40s–50s" },
    Senior: { label: "Senior", desc: "Extra health monitoring recommended" },
    "Super Senior": { label: "Super Senior", desc: "Special care and regular vet visits" },
  },
};

export default en;
