/** Twin Stars - contact, hours, and map (keep in sync with printed materials & live site). */

export const SITE_ADDRESS = '874 Crassula Crescent, New Modder, Benoni 1501';

export const SITE_PHONES = [
  { display: '084 863 1003', tel: '0848631003' },
  { display: '061 161 4413', tel: '0611614413' },
] as const;

/** Weekday/Saturday times match the flyer; call us if you need a half-day Saturday. */
export const SITE_HOURS_PRIMARY = 'Mon-Fri: 6:00am - 6:00pm';

export const SITE_HOURS_SATURDAY = 'Sat: 6:30am - 6:00pm';

export const SITE_HOURS_CALENDAR = 'Open Jan-Dec, closed on public holidays';

export function getGoogleMapsEmbedSrc(): string {
  const q = '874 Crassula Crescent, New Modder, Benoni 1501, South Africa';
  return `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
}
