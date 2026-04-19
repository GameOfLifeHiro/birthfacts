export interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalMonths: number;
  totalWeeks: number;
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  dayOfWeek: string;
  nextBirthday: NextBirthday;
  shareUrl: string;
}

export interface NextBirthday {
  date: Date;
  daysUntil: number;
  isToday: boolean;
}

const DAYS_OF_WEEK = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
];

export function calculateAge(dob: Date, asOf: Date = new Date()): AgeResult {
  const birth = new Date(dob);
  const now = new Date(asOf);
  now.setHours(0, 0, 0, 0);
  birth.setHours(0, 0, 0, 0);

  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  let days = now.getDate() - birth.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const msPerDay = 1000 * 60 * 60 * 24;
  const totalDays = Math.floor((now.getTime() - birth.getTime()) / msPerDay);
  const totalWeeks = Math.floor(totalDays / 7);
  const totalMonths = years * 12 + months;
  const totalHours = totalDays * 24;
  const totalMinutes = totalHours * 60;

  const dayOfWeekIndex = birth.getDay();

  // Next birthday
  const thisYearBirthday = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
  let nextBirthdayDate: Date;
  if (thisYearBirthday <= now) {
    nextBirthdayDate = new Date(now.getFullYear() + 1, birth.getMonth(), birth.getDate());
  } else {
    nextBirthdayDate = thisYearBirthday;
  }
  const daysUntil = Math.floor((nextBirthdayDate.getTime() - now.getTime()) / msPerDay);
  const isToday = daysUntil === 0;

  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/?dob=${birth.toISOString().split("T")[0]}`
      : `/?dob=${birth.toISOString().split("T")[0]}`;

  return {
    years,
    months,
    days,
    totalMonths,
    totalWeeks,
    totalDays,
    totalHours,
    totalMinutes,
    dayOfWeek: DAYS_OF_WEEK[dayOfWeekIndex],
    nextBirthday: { date: nextBirthdayDate, daysUntil, isToday },
    shareUrl,
  };
}

export function formatNumber(n: number): string {
  return n.toLocaleString();
}
