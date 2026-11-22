# The World in One Day — Sunday 22 November 2026

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![make.fun · rank](https://make.fun/badge/news-image-20261122/Abdududu/news-image-20261122-v4/rank.svg)](https://make.fun/bounty/news-image-20261122)
[![make.fun · reward](https://make.fun/badge/news-image-20261122/Abdududu/news-image-20261122-v4/reward.svg)](https://make.fun/bounty/news-image-20261122)

One image that sums up Sunday 22 November 2026: **35 stories from 7 regions**,
drawn as a single illustrated digest page.

## The day in one line

COP31 nears a deal on day 14 in Antalya, Iran hits two US bases in Bahrain,
and Peru counts the cost of its 6.7 quake — while Russia fires 400 drones at
Ukraine, a Russian-linked ship burns in the Baltic, Bitcoin plunges to a
two-year low and surges back past $60,000, and Wall Street slides into
correction.

## What is inside

- **3 hero stories** — COP31 day 14, Iran's strikes on US bases in Bahrain,
  Peru's 6.7 earthquake — each with its own illustrated scene.
- **10 smaller illustrated cards** — Russia's 400-drone barrage, the burning
  Sparta II, tankers hit off Oman, missiles over Riyadh, Cyclone Akvan,
  'El Chapo Isidro' captured, Brazil's deadly supercell, Bitcoin's wild
  weekend, Wall Street in correction, Cyclone Xavier at Category 5.
- **2 mini data charts** — Bitcoin's weekend arc ($55,130 low to $60,200)
  and the weekend's shakers (Timor-Leste 6.8, Peru 6.7, Qinghai 5.6,
  Myanmar 4.1).
- **A world map** with numbered pins matching the cards, and an "Also on"
  list carrying the other 22 stories.

Regions: Europe 6 · Asia 6 · Middle East 5 · Africa 2 · Americas 10 ·
Oceania 2 · Global 4 = 35 stories.

## How it is built

`entry.html` is the whole page — one 1024×1024 illustrated digest, drawn
with hand-written HTML, CSS and inline SVG. `npm run render` screenshots it
with Playwright into `assets/news.png` (296 KB, deterministic for the same
page). `node main.ts` (pure Node, no dependencies) validates the PNG and
copies it to the output directory as `entry.png` with a `manifest.json`.

Sources: Reuters, AP, Al Jazeera, USGS, CoinDesk — compiled Sunday
22 November 2026.

## License

MIT — see [LICENSE](LICENSE).
