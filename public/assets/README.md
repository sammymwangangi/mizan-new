# Drop your exported Figma assets here

Required files (exact names matter — referenced from components):

- `iphone.png`  — the iPhone mockup with the Mizan app screen
- `coin.png`    — the floating M-coin asset
- `arrow.png`   — the curved black arrow asset
- `logo.svg`    — the Mizan wordmark with Arabic script

Optional:

- `pattern.svg` — the decorative "M" watermark (otherwise the inline SVG in DecorPattern.tsx is used)

Export tips from Figma:
- iPhone: PNG @2x with shadow baked in (transparent bg)
- Coin & arrow: PNG @2x with transparent bg
- Logo: SVG (smaller than PNG, scales to any size)
