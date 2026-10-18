# for bella ♡

A tiny, butter-yellow corner of the internet, made by Andrew for his close friend Bella.

This is a **five-page interactive story** rather than a long scrolling landing page. It is a thoughtful friendship gift, not a romantic confession. The writing is deliberately gentle about personal experiences: it leaves private details private while offering support, understanding, and a bit of teasing.

## Five little chapters

| Page | What it does |
| --- | --- |
| `index.html` | A cute envelope invitation. Tap the envelope to open the next page, or reveal a little joke. |
| `letter.html` | A heartfelt personal letter from Andrew, with a stationery-card design. |
| `comfort.html` | Four selectable messages for overwhelming days, resurfacing past feelings, self-doubt, or needing a smile. |
| `reasons.html` | Four interactive flip-over cards describing things worth remembering about Bella. |
| `forever.html` | A final message, illustrated flowers, a hidden extra note, and a virtual hug button. |

Visuals use Bella's favorite shade **`#fefeca`**, plus sage, peach, rose and lavender. The site has scrapbook-style stickers, paper, an envelope, flowers and gentle transitions.

## Project files

- `style.css`: all page layouts, animations, and mobile/responsive styling.
- `site.js`: navigation transitions and interactive buttons/cards. All content is local, with no backend.
- `favicon.svg`: custom yellow favicon.
- Each `.html` file is its own page with a shared chapter navigation.

There are no analytics, forms, tracking, cookies, or messages sent to Andrew. The website does not collect anything from Bella. No build tools or frameworks are needed.

## Publishing with GitHub Pages

To publish on GitHub Pages, open [Settings → Pages](https://github.com/Sfg246/4bella/settings/pages), choose **Deploy from a branch**, select `main` and `/(root)`, then save.

Once publication completes, the site is intended to be available at:

**https://sfg246.github.io/4bella/**

The HTML files use relative links, so all five pages can be visited from the published site.

## Notes

The linked Google Fonts are optional; system and Georgia fallbacks are in place if the font service is unavailable. Animations respect the operating system's reduced-motion setting. All controls are regular links or buttons, including flip cards, so they are keyboard-accessible.

Made for Bella, just because. ✿
