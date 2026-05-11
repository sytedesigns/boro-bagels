# Boros Bagels — Design Tokens

Eyedropped from boro-bagels.com · April 2026. All values are declared as CSS custom properties in `css/style.css`.

---

## Colors

### Brand Palette
| Token | Value | Role |
|---|---|---|
| `--color-navy` | `#153359` | ★ Primary brand blue |
| `--color-navy-dark` | `#0E2440` | |
| `--color-navy-light` | `#1E4070` | |
| `--color-navy-tint` | `#D0DCF0` | |
| `--color-espresso` | `#2B1A0E` | ★ Primary text |
| `--color-dark-roast` | `#5C3317` | |
| `--color-cinnamon` | `#8B4513` | |
| `--color-golden-crust` | `#B8860B` | ★ Accent |
| `--color-sesame` | `#D4A843` | |
| `--color-golden-tint` | `#F5E8C0` | |
| `--color-parchment` | `#E8D9B5` | |
| `--color-cream` | `#F5EDD6` | ★ Page background |
| `--color-linen` | `#FDF8EE` | |
| `--color-white` | `#FFFFFF` | |
| `--color-herb` | `#3D6B45` | Success green |
| `--color-tomato` | `#C0392B` | Danger red |

### Semantic Roles
| Token | Resolves To |
|---|---|
| `--color-bg-page` | `--color-cream` |
| `--color-bg-surface` | `--color-linen` |
| `--color-bg-nav` | `--color-navy` |
| `--color-bg-feature` | `--color-navy` |
| `--color-bg-card` | `--color-white` |
| `--color-accent` | `--color-golden-crust` |
| `--color-accent-hover` | `--color-sesame` |
| `--color-text-primary` | `--color-espresso` |
| `--color-text-on-navy` | `--color-white` |
| `--color-text-brand` | `--color-navy` |
| `--color-text-muted` | `--color-cinnamon` |
| `--color-border` | `--color-parchment` |
| `--color-success` | `--color-herb` |
| `--color-danger` | `--color-tomato` |

---

## Typography

### Font Families
| Token | Value |
|---|---|
| `--font-display` | `'Georgia', 'Times New Roman', serif` |
| `--font-body` | `'Georgia', serif` |
| `--font-ui` | `'Arial', 'Helvetica', sans-serif` |
| `--font-heavy` | `'Arial Black', 'Impact', sans-serif` |

### Size Scale
| Token | Value |
|---|---|
| `--text-hero` | `clamp(40px, 7vw, 72px)` |
| `--text-h1` | `clamp(32px, 5vw, 52px)` |
| `--text-h2` | `clamp(24px, 3.5vw, 36px)` |
| `--text-h3` | `clamp(18px, 2.5vw, 24px)` |
| `--text-body-lg` | `18px` |
| `--text-body` | `16px` |
| `--text-sm` | `14px` |
| `--text-label` | `12px` |

### Weight
| Token | Value |
|---|---|
| `--weight-regular` | `400` |
| `--weight-medium` | `500` |
| `--weight-bold` | `700` |
| `--weight-black` | `900` |

### Letter Spacing
| Token | Value |
|---|---|
| `--tracking-tight` | `-0.02em` |
| `--tracking-normal` | `0em` |
| `--tracking-wide` | `0.06em` |
| `--tracking-widest` | `0.12em` |

### Line Height
| Token | Value |
|---|---|
| `--leading-tight` | `1.1` |
| `--leading-snug` | `1.3` |
| `--leading-normal` | `1.6` |
| `--leading-loose` | `1.8` |

---

## Spacing

13-step scale from 4px to 128px.

| Token | Value |
|---|---|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `20px` |
| `--space-6` | `24px` |
| `--space-8` | `32px` |
| `--space-10` | `40px` |
| `--space-12` | `48px` |
| `--space-16` | `64px` |
| `--space-20` | `80px` |
| `--space-24` | `96px` |
| `--space-32` | `128px` |

---

## Border Radius

| Token | Value | Note |
|---|---|---|
| `--radius-none` | `0px` | |
| `--radius-sm` | `4px` | |
| `--radius-md` | `8px` | |
| `--radius-lg` | `16px` | |
| `--radius-xl` | `24px` | |
| `--radius-pill` | `999px` | "Apply Now" button shape |

---

## Motion

### Duration
| Token | Value |
|---|---|
| `--duration-instant` | `80ms` |
| `--duration-fast` | `150ms` |
| `--duration-base` | `250ms` |
| `--duration-slow` | `400ms` |
| `--duration-marquee` | `20s` |

### Easing
| Token | Value |
|---|---|
| `--ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `--ease-out` | `cubic-bezier(0.0, 0, 0.2, 1)` |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` |
| `--ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` |

---

## Layout

| Token | Value |
|---|---|
| `--layout-max` | `1200px` |
| `--layout-content` | `760px` |
| `--layout-gutter` | `clamp(24px, 5vw, 48px)` |
| `--layout-nav-h` | `80px` |
| `--layout-section-gap` | `clamp(64px, 10vw, 120px)` |

---

## CSS `:root` Block

```css
/* ═══════════════════════════════════════════
   BORO BAGELS DESIGN TOKENS
   Eyedropped from boro-bagels.com · April 2026
   ═══════════════════════════════════════════ */

:root {

  /* — Colors: Brand Palette — */
  --color-navy:           #153359;
  --color-navy-dark:      #0E2440;
  --color-navy-light:     #1E4070;
  --color-navy-tint:      #D0DCF0;

  --color-espresso:       #2B1A0E;
  --color-dark-roast:     #5C3317;
  --color-cinnamon:       #8B4513;

  --color-golden-crust:   #B8860B;
  --color-sesame:         #D4A843;
  --color-golden-tint:    #F5E8C0;

  --color-parchment:      #E8D9B5;
  --color-cream:          #F5EDD6;
  --color-linen:          #FDF8EE;
  --color-white:          #FFFFFF;

  --color-herb:           #3D6B45;
  --color-tomato:         #C0392B;

  /* — Colors: Semantic Roles — */
  --color-bg-page:        var(--color-cream);
  --color-bg-surface:     var(--color-linen);
  --color-bg-nav:         var(--color-navy);
  --color-bg-feature:     var(--color-navy);
  --color-bg-card:        var(--color-white);
  --color-accent:         var(--color-golden-crust);
  --color-accent-hover:   var(--color-sesame);
  --color-text-primary:   var(--color-espresso);
  --color-text-on-navy:   var(--color-white);
  --color-text-brand:     var(--color-navy);
  --color-text-muted:     var(--color-cinnamon);
  --color-border:         var(--color-parchment);
  --color-success:        var(--color-herb);
  --color-danger:         var(--color-tomato);

  /* — Typography — */
  --font-display:         'Georgia', 'Times New Roman', serif;
  --font-body:            'Georgia', serif;
  --font-ui:              'Arial', 'Helvetica', sans-serif;
  --font-heavy:           'Arial Black', 'Impact', sans-serif;

  --text-hero:            clamp(40px, 7vw, 72px);
  --text-h1:              clamp(32px, 5vw, 52px);
  --text-h2:              clamp(24px, 3.5vw, 36px);
  --text-h3:              clamp(18px, 2.5vw, 24px);
  --text-body-lg:         18px;
  --text-body:            16px;
  --text-sm:              14px;
  --text-label:           12px;

  --weight-regular:       400;
  --weight-medium:        500;
  --weight-bold:          700;
  --weight-black:         900;

  --tracking-tight:       -0.02em;
  --tracking-normal:      0em;
  --tracking-wide:        0.06em;
  --tracking-widest:      0.12em;

  --leading-tight:        1.1;
  --leading-snug:         1.3;
  --leading-normal:       1.6;
  --leading-loose:        1.8;

  /* — Spacing — */
  --space-1:    4px;   --space-2:    8px;
  --space-3:   12px;   --space-4:   16px;
  --space-5:   20px;   --space-6:   24px;
  --space-8:   32px;   --space-10:  40px;
  --space-12:  48px;   --space-16:  64px;
  --space-20:  80px;   --space-24:  96px;
  --space-32: 128px;

  /* — Border Radius — */
  --radius-none:   0px;
  --radius-sm:     4px;
  --radius-md:     8px;
  --radius-lg:    16px;
  --radius-xl:    24px;
  --radius-pill: 999px;

  /* — Motion — */
  --duration-instant:  80ms;
  --duration-fast:    150ms;
  --duration-base:    250ms;
  --duration-slow:    400ms;
  --duration-marquee: 20s;

  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out:      cubic-bezier(0.0, 0, 0.2, 1);
  --ease-in:       cubic-bezier(0.4, 0, 1, 1);
  --ease-bounce:   cubic-bezier(0.34, 1.56, 0.64, 1);

  /* — Layout — */
  --layout-max:         1200px;
  --layout-content:     760px;
  --layout-gutter:      clamp(24px, 5vw, 48px);
  --layout-nav-h:       80px;
  --layout-section-gap: clamp(64px, 10vw, 120px);
}
```
