import * as fs from "node:fs";
const outDir = "output";
fs.mkdirSync(outDir, { recursive: true });
const LT = String.fromCharCode(60);
const GT = String.fromCharCode(62);
const p: string[] = [];
function tag(name: string, attrs: string, inner: string) {
  return LT + name + " " + attrs + GT + inner + LT + "/" + name + GT;
}
function rect(attrs: string) {
  return LT + "rect " + attrs + " /" + GT;
}
p.push(LT + 'svg width="1080" height="1920" viewBox="0 0 1080 1920"' + GT);
p.push(rect('width="1080" height="1920" fill="#050b1a"'));
p.push(rect('y="0" width="1080" height="90" fill="#b00020"'));
p.push(tag("text", 'x="540" y="58" font-family="Arial" font-size="38" font-weight="bold" fill="white" text-anchor="middle"', "LIVE - BREAKING NEWS - 21 NOV 2026"));
p.push(tag("text", 'x="60" y="220" font-family="Arial" font-size="110" font-weight="900" fill="white"', "COP31: OVERTIME"));
p.push(tag("text", 'x="60" y="300" font-family="Arial" font-size="52" font-weight="bold" fill="#ff2b2b"', "NO DEAL - DAY 13"));
p.push(rect('x="60" y="360" width="960" height="280" rx="20" fill="#0a1a3a"'));
p.push(tag("text", 'x="90" y="410" font-family="Arial" font-size="42" font-weight="bold" fill="#5eeaff"', "CLIMATE SUMMIT STALLED"));
p.push(tag("text", 'x="90" y="470" font-family="Arial" font-size="28" fill="white"', "Negotiations collapse in Antalya - Day 13,"));
p.push(tag("text", 'x="90" y="510" font-family="Arial" font-size="28" fill="white"', "no agreement on fossil fuel phase-out."));
p.push(rect('x="60" y="680" width="960" height="280" rx="20" fill="#2a0505"'));
p.push(tag("text", 'x="90" y="730" font-family="Arial" font-size="42" font-weight="bold" fill="#ffe14d"', "SAUDI: 5 MISSILES DOWN"));
p.push(tag("text", 'x="90" y="790" font-family="Arial" font-size="28" fill="white"', "Five missiles intercepted over Riyadh and Jizan."));
p.push(tag("text", 'x="90" y="830" font-family="Arial" font-size="28" fill="white"', "No casualties reported."));
p.push(rect('x="60" y="1000" width="960" height="280" rx="20" fill="#1a0a00"'));
p.push(tag("text", 'x="90" y="1050" font-family="Arial" font-size="42" font-weight="bold" fill="#ff8c1a"', "PERU: MAG 6.7 EARTHQUAKE"));
p.push(tag("text", 'x="90" y="1110" font-family="Arial" font-size="28" fill="white"', "Strong 6.7 quake near Junin - 108km deep."));
p.push(tag("text", 'x="90" y="1150" font-family="Arial" font-size="28" fill="white"', "Felt in Lima. No tsunami alert."));
p.push(rect('x="60" y="1320" width="960" height="280" rx="20" fill="#0a1a00"'));
p.push(tag("text", 'x="90" y="1370" font-family="Arial" font-size="42" font-weight="bold" fill="#ffe14d"', "BITCOIN DROPS $58,983"));
p.push(tag("text", 'x="90" y="1430" font-family="Arial" font-size="28" fill="white"', "Bitcoin falls below $59k - Down 3.9% in 24h."));
p.push(rect('x="60" y="1680" width="960" height="80" rx="40" fill="#0077cc"'));
p.push(tag("text", 'x="540" y="1732" font-family="Arial" font-size="32" font-weight="bold" fill="white" text-anchor="middle"', "FOLLOW @WorldInOneDay FOR LIVE UPDATES"));
p.push(tag("text", 'x="540" y="1820" font-family="Arial" font-size="28" fill="#5eeaff" text-anchor="middle"', "#BreakingNews #WorldInOneDay #21Nov2026 #LiveNews"));
p.push(LT + "/svg" + GT);
fs.writeFileSync(outDir + "/world-in-one-day-21-nov-2026.svg", p.join("\n"));
console.log("WROTE: output/world-in-one-day-21-nov-2026.svg");
