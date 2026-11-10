import { formatLocale } from 'd3';

// Locale configurations for number formatting
const esES = {
  decimal: ',',
  thousands: '.',
  grouping: [3],
  currency: ['', '\u00a0€'],
};

const enEN = {
  decimal: '.',
  thousands: ',',
  grouping: [3],
  currency: ['', '\u00a0€'],
};

export const formatIntegers = {
  en: formatLocale(enEN).format(',d'),
  de: formatLocale(esES).format(',d'),
  es: formatLocale(esES).format(',d'),
  fr: formatLocale(esES).format(',d'),
  it: formatLocale(esES).format(',d'),
};

export const formatDecimals = {
  en: formatLocale(enEN).format('.2f'),
  de: formatLocale(esES).format('.2f'),
  es: formatLocale(esES).format('.2f'),
  fr: formatLocale(esES).format('.2f'),
  it: formatLocale(esES).format('.2f'),
};

export const formatEuros = {
  en: formatLocale(enEN).format('$,.2f'),
  de: formatLocale(esES).format('$,.2f'),
  es: formatLocale(esES).format('$,.2f'),
  fr: formatLocale(esES).format('$,.2f'),
  it: formatLocale(esES).format('$,.2f'),
};
