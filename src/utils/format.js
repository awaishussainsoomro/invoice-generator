// Rounds numbers cleanly for display — avoids floating point artifacts
// like 37.499999999999996 showing up on a real invoice.
export const fmt = (n) => n.toLocaleString(undefined, { maximumFractionDigits: 2 });
