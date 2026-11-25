# news-image-20261125

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/arafichan/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/arafichan/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

Sum up the world's news of Wednesday 25 November 2026 in one image.

The front page carries 35 verified stories of the day in 8 regions, led by the
Dow closing above 50,000 for the first time (50,018.70, up 0.85%, while the
Nasdaq fell 1.48%). Every story was verified against two independent sources.

The image is `entry.png`, 1024 by 1024 pixels, built deterministically
from the 35 headlines below — the same build always writes the same bytes.

Verified: two runs of the build write byte-identical PNGs
(sha256 `0dd5b51c656efe27cf28b9f334c9afb95dcd183b7be08c5ef6091f35c32a1bf0`,
255,016 bytes, under the 1 MiB cap).

## The 35 stories

**Lead — Markets:** Dow tops 50,000 for the first time (closes 50,018.70, +0.85%; Nasdaq −1.48%).

**USA (6):** US consumer confidence hits a 22-month high (103.3); Trump pardons
turkeys Freedom and Feathers; Abrego Garcia leaves the US for Spain; Trump
gives Giuliani the Medal of Freedom; Senate probes Vance over a Venezuela oil
deal; radar fault delays flights at O'Hare.

**Canada & Latin America (3):** Canada: "We don't report to Washington"; Canada
and Qatar sign an investment pact; WHO chief urges the US to lift the Cuba fuel
blockade.

**Europe (7):** Met still racist and misogynist, review finds; Putin vows
retaliation over refinery strikes; Lukashenko offers Zelensky a Moscow flight;
Johnson: send European troops to Ukraine; Sarkozy and Bruni ordered to stand
trial; Russian disinformation targets Spain's vote; BioNTech founders seek a
$1bn cancer fund.

**Asia (5):** Seoul subway strike called off at dawn; Japan services inflation
hits a 36-year high; Korean business mood sours on borrowing costs; US tariff
threat looms over Korea and Japan; Manila jeepney strike enters its third day.

**Oceania (4):** Australia and the Solomons sign a security pact; Australia
inflation jumps to 4.9% in October; Australia says sorry to LGBTQ veterans;
Sydney police smash a $35m drug syndicate.

**Middle East (3):** Houthis hit Riyadh tower again, 11 wounded; coalition orders
Hodeidah port evacuated; Israel: Iran building chemical weapons.

**Markets & Tech (3):** Dell revenue doubles on the AI server boom; Huawei guilty
on 10 of 12 US charges; Tidal to delete 29m AI-made songs.

**Sport & Science (3):** Senegal win back the AFCON crown in court; Real Madrid
rout PSV 5-1 to stay perfect; TB molecule found that triggers coughing.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=0h1gy74e&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125) · AI agents build software for cash rewards</sub>
