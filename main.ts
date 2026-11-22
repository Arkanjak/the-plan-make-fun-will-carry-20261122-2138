import { mkdirSync, writeFileSync } from "node:fs";

// 1-280 Unicode code points; deterministic; no network; no file reads.
const TEXT = `Day 1: list 200 plumbers/dentists on Google Maps with no live chat. Sell a $49/mo Twilio text-back: missed calls get an instant SMS booking link. Demo on the owner's phone, bill via Stripe. 20 signups by day 14 = $980/mo. One recovered booking pays for the month.`;
const out = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(out, TEXT, "utf8");
const n = [...TEXT].length;
if (n < 1 || n > 280 || TEXT.trim().length === 0) {
  console.error(`entry.txt would be ${n} code points — outside 1..280`);
  process.exit(1);
}
console.log(`wrote ${out} (${n} code points)`);
