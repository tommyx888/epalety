# VISUAL STYLE GUIDE & MOODBOARD
## EPALETY.SK - Dizajnová identita

---

## 🎨 BRAND IDENTITY

### Logo koncept

```
 ███████╗██████╗  █████╗ ██╗     ███████╗████████╗██╗   ██╗
 ██╔════╝██╔══██╗██╔══██╗██║     ██╔════╝╚══██╔══╝╚██╗ ██╔╝
 █████╗  ██████╔╝███████║██║     █████╗     ██║    ╚████╔╝ 
 ██╔══╝  ██╔═══╝ ██╔══██║██║     ██╔══╝     ██║     ╚██╔╝  
 ███████╗██║     ██║  ██║███████╗███████╗   ██║      ██║   
 ╚══════╝╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝      ╚═╝   
                        .SK
```

**Variant 1: Ekologický**
```
E[PALETY].SK
  └─ Zelený strom/list symbol v "E"
```

**Variant 2: Industriálny**
```
E|PALETY|.SK
  └─ Paleta silueta ako background
```

**Variant 3: Moderný (AKTUÁLNY)**
```
EPALETY.SK
  └─ "E" zelená, "PALETY" čierna, ".SK" oranžová
```

---

## 🎨 FAREBNÁ PALETA

### PRIMARY COLORS

```css
┌─────────────────┐
│   FOREST GREEN  │  #2D5016
│                 │  RGB(45, 80, 22)
│   ████████████  │  CMYK(44, 0, 73, 69)
│                 │
│   Použitie:     │
│   - Logo        │
│   - Headery     │
│   - Primárne CTA│
└─────────────────┘

┌─────────────────┐
│   WOOD BROWN    │  #8B4513
│                 │  RGB(139, 69, 19)
│   ████████████  │  CMYK(0, 50, 86, 45)
│                 │
│   Použitie:     │
│   - Sekundárne  │
│   - Akcenty     │
│   - Borders     │
└─────────────────┘

┌─────────────────┐
│ VIBRANT ORANGE  │  #FF8C00
│                 │  RGB(255, 140, 0)
│   ████████████  │  CMYK(0, 45, 100, 0)
│                 │
│   Použitie:     │
│   - CTA tlačidlá│
│   - Hovery      │
│   - Akcenty     │
└─────────────────┘
```

### NEUTRALS

```
┌──────┬──────┬──────┬──────┬──────┐
│ #FFF │ #F9F9│ #E5E5│ #666 │ #1118│
│ White│ Gray │ Light│ Gray │ Black│
│ 100% │  50  │ Gray │ 500  │ 900  │
└──────┴──────┴──────┴──────┴──────┘
```

### COLOR PSYCHOLOGY

**Zelená (#2D5016):**
- 🌲 Príroda, drevený materiál
- ♻️ Ekológia, udržateľnosť
- 💪 Spoľahlivosť, stabilita
- ✅ Dôvera, kvalita

**Hnedá (#8B4513):**
- 🪵 Drevo, autenticita
- 🏭 Priemysel, robustnosť
- 🤝 Tradícia, skúsenosti

**Oranžová (#FF8C00):**
- ⚡ Energia, akcia
- 📞 Call-to-action
- 🎯 Dôraz, pozornosť
- 🔥 Teplo, prístupnosť

---

## 🔤 TYPOGRAFIA

### FONT STACK

```
HEADINGS: Poppins
──────────────────────────────
Bold (700)   - H1, Logo
SemiBold (600) - H2, H3
Medium (500) - H4, Navigation

BODY: Inter
──────────────────────────────
Regular (400) - Body text
Medium (500) - Emphasis
SemiBold (600) - Strong emphasis
```

### TYPE SCALE

```
H1:    48px / 56px  │ ███████████████████
       Bold         │ HLAVNÝ NADPIS

H2:    36px / 44px  │ ████████████████
       SemiBold     │ Section Title

H3:    30px / 38px  │ ██████████████
       SemiBold     │ Card Title

H4:    24px / 32px  │ ████████████
       SemiBold     │ Small Title

Body:  16px / 24px  │ ████████
       Regular      │ Body text

Small: 14px / 20px  │ ██████
       Regular      │ Captions
```

---

## 📐 SPACING & LAYOUT

### SPACING SCALE

```
xs:   4px   │ ▪
s:    8px   │ ▪▪
m:    16px  │ ▪▪▪▪
l:    24px  │ ▪▪▪▪▪▪
xl:   48px  │ ▪▪▪▪▪▪▪▪▪▪▪▪
2xl:  64px  │ ▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪
3xl:  96px  │ ▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪
```

### GRID SYSTEM

```
Desktop (1440px):
┌────────────────────────────────┐
│ [--] Content [--] [--] [--]    │  4 columns
│ 2rem padding                   │
└────────────────────────────────┘

Tablet (768px):
┌──────────────────┐
│ [--] [--] [--]   │  2 columns
│ 1.5rem padding   │
└──────────────────┘

Mobile (375px):
┌──────────┐
│ [------] │  1 column
│ 1rem pad │
└──────────┘
```

---

## 🎯 DESIGN PATTERNS

### BUTTONS

```
PRIMARY (CTA):
┌─────────────────────┐
│ Získať ponuku       │  #FF8C00
│ padding: 12px 24px  │  Bold, White text
│ border-radius: 8px  │  Hover: darken + lift
└─────────────────────┘

SECONDARY:
┌─────────────────────┐
│ Naše služby         │  Transparent
│ border: 2px green   │  Green text
│ border-radius: 8px  │  Hover: fill green
└─────────────────────┘

TERTIARY (Text link):
Zistiť viac →           Green text
                        Hover: Orange + underline
```

### CARDS

```
┌───────────────────────────┐
│  [    Icon/Image    ]     │
│                           │
│  Title                    │  Shadow: soft
│  Description text here... │  Radius: 12px
│                           │  Padding: 24px
│  [Action Button]          │  Hover: lift + shadow
└───────────────────────────┘
```

### FORMS

```
Input field:
┌───────────────────────────┐
│ Placeholder text...       │  Border: 2px gray
│                           │  Radius: 8px
└───────────────────────────┘  Padding: 16px
Focus: Green border           Hover: lighter gray

Dropdown:
┌───────────────────────────┐
│ Vyberte produkt...     ▼ │
└───────────────────────────┘
```

---

## 📸 PHOTOGRAPHY STYLE

### IMAGE GUIDELINES

**DO's ✅**
- Prírodné osvetlenie (golden hour)
- Organizované, čisté prostredie
- Profesionálne, ale autentické
- Ukázať kvalitu a detail
- Reálni ľudia (nie stock models)
- Shallow depth of field
- Warm color grading

**DON'Ts ❌**
- Príliš темné/tmavé fotky
- Neporiadok na pozadí
- Príliš artificiálne
- Generické stock photos
- Príliš studené farby
- Cluttered compositions

### PHOTO STYLES

**Hero Images:**
```
Type: Wide landscape shots
Subject: Warehouse, pallets, logistics
Mood: Professional, organized, trustworthy
Color: Warm tones, natural light
```

**Product Shots:**
```
Type: Clean, isolated on white
Subject: Individual pallets, boxes
Mood: Catalog-quality, detailed
Lighting: Studio, even lighting
```

**Lifestyle/Team:**
```
Type: Candid, natural poses
Subject: Workers, warehouse scenes
Mood: Friendly, professional, human
Color: Warm, inviting
```

---

## 🎨 ICON STYLE

### STYLE RULES

```
┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐
│ 📦  │  │ 💰  │  │ 🔧  │  │ ♻️  │
└─────┘  └─────┘  └─────┘  └─────┘
Simple   Clear    Bold    Minimal

Characteristics:
- Line weight: 2px
- Corner radius: 2-4px
- Style: Outline or flat
- Colors: Primary palette only
- Size: 24px, 32px, 48px, 64px
```

### ICON SET

```
Služby:
📦 Predaj     - Box/Package icon
💰 Výkup      - Money/Coins icon
🔧 Opravy     - Wrench/Tool icon
♻️ Recyklácia - Recycle/Loop icon

Features:
✓ Kvalita     - Checkmark
⚡ Rýchlosť   - Lightning bolt
👨‍💼 Servis     - Person/Support
🏭 Sklad      - Warehouse/Building
```

---

## 🌟 VISUAL HIERARCHY

### IMPORTANCE LEVELS

```
LEVEL 1: Hero / Main CTA
█████████████████████████  100% Attention
Size: Largest (H1)
Color: High contrast
Position: Above fold

LEVEL 2: Section Titles
███████████████            60% Attention
Size: Large (H2)
Color: Primary brand
Spacing: Generous

LEVEL 3: Content Blocks
██████████                 40% Attention
Size: Medium (H3, Body)
Color: Primary + Gray
Spacing: Moderate

LEVEL 4: Supporting Info
█████                      20% Attention
Size: Small
Color: Gray
Spacing: Tight
```

---

## 🎭 MOOD & TONE

### BRAND PERSONALITY

```
Professional     ████████░░  80%
Trustworthy      ██████████  100%
Modern           ████████░░  80%
Eco-friendly     ███████░░░  70%
Accessible       ████████░░  80%
Industrial       ██████░░░░  60%
```

### EMOTIONAL SPECTRUM

```
Serious ←────────●─────→ Playful
        Professional
        but approachable

Cold ←───────────────●→ Warm
              Balanced, slightly warm

Corporate ←──────●──────→ Personal
          Professional SME feel
```

---

## 📱 RESPONSIVE BREAKPOINTS

```
┌─────────────────────────────────┐
│ Desktop   │ 1440px+  │ 4 cols   │
├─────────────────────────────────┤
│ Laptop    │ 1024px   │ 3 cols   │
├─────────────────────────────────┤
│ Tablet    │ 768px    │ 2 cols   │
├─────────────────────────────────┤
│ Mobile L  │ 425px    │ 1 col    │
├─────────────────────────────────┤
│ Mobile M  │ 375px    │ 1 col    │
├─────────────────────────────────┤
│ Mobile S  │ 320px    │ 1 col    │
└─────────────────────────────────┘

Mobile-first approach ✅
```

---

## 🎬 ANIMATIONS

### MICRO-INTERACTIONS

**Hover Effects:**
```css
Button:
- Transform: translateY(-2px)
- Shadow: increase
- Duration: 300ms
- Easing: ease-out

Card:
- Transform: translateY(-8px)
- Shadow: increase (0 → 12px)
- Duration: 300ms
- Easing: ease-out

Link:
- Color: gray → orange
- Underline: fade in
- Duration: 200ms
```

**Scroll Animations:**
```
Fade In:      opacity 0 → 1
Slide Up:     translateY(20px) → 0
Stagger:      delay each item by 100ms
Duration:     500-800ms
Easing:       ease-out
```

**Loading States:**
```
Skeleton:     Shimmer effect
Spinner:      Rotating circle (primary color)
Progress:     Linear bar (orange)
```

---

## 🖼️ MOODBOARD REFERENCE

### VISUAL INSPIRATION

**Industrial & Natural:**
```
🏭 Modern warehouses (organized, clean)
🌲 Natural wood textures (authentic, warm)
♻️ Sustainability imagery (eco-conscious)
📦 Logistics & supply chain (professional)
🤝 B2B interactions (trustworthy, human)
```

**Color Inspiration:**
```
🌲 Forest greens from nature
🪵 Wood grain browns
🍊 Safety equipment oranges
⚪ Clean warehouse whites
🌅 Golden hour lighting
```

**Style References:**
```
Similar to:
- IKEA (sustainable, organized)
- UPS (professional, reliable)
- Patagonia (eco-conscious)
- Uline (industrial, b2b)
- Home Depot (practical, accessible)
```

---

## ✨ VISUAL EXAMPLES

### Homepage Sections

**Hero:**
```
┌────────────────────────────────┐
│                                │
│    [Background: Warehouse]     │
│                                │
│   KVALITNÉ PALETY PRE VÁŠ     │
│         BIZNIS                 │
│                                │
│   15+ rokov | Najlepšie ceny  │
│                                │
│  [Orange CTA] [Green CTA]     │
│                                │
└────────────────────────────────┘
```

**Services Grid:**
```
┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐
│ 📦   │  │ 💰   │  │ 🔧   │  │ ♻️   │
│Predaj│  │Výkup │  │Opravy│  │Recy  │
└──────┘  └──────┘  └──────┘  └──────┘
White cards, green icons, soft shadows
```

**Product Card:**
```
┌─────────────────┐
│  [Product Img]  │
│  🏷️ POPULÁRNE   │
│                 │
│  EUR Palety     │
│  Description... │
│                 │
│  od 8€          │
│                 │
│  ✓ Feature 1    │
│  ✓ Feature 2    │
│                 │
│  [Orange CTA]   │
└─────────────────┘
```

---

## 🎯 DESIGN DO's & DON'Ts

### ✅ DO:

```
✓ Používaj 8px spacing grid
✓ Dodržuj color palette
✓ Používaj hover states
✓ Mobile-first thinking
✓ Accessibility (WCAG AA)
✓ Consistent icon style
✓ Professional photography
✓ Generous whitespace
✓ Clear visual hierarchy
✓ Smooth animations (300ms)
```

### ❌ DON'T:

```
✗ Random spacing
✗ Custom colors mimo palette
✗ Static elements (no hover)
✗ Desktop-only design
✗ Low contrast text
✗ Mixing icon styles
✗ Poor quality images
✗ Cluttered layouts
✗ Everything same size
✗ Jarring animations (>500ms)
```

---

## 📊 BRAND APPLICATION EXAMPLES

### Business Cards
```
┌──────────────────────┐
│ EPALETY.SK           │  Front: Logo + tagline
│                      │
│ Kvalitné palety      │
│ pre váš biznis       │
└──────────────────────┘

┌──────────────────────┐
│ Ján Novák            │  Back: Contact info
│ Obchodný manažér     │
│                      │
│ 📞 +421 XXX XXX XXX  │
│ ✉️  info@epalety.sk  │
│ 🌐 www.epalety.sk    │
└──────────────────────┘
```

### Email Signature
```
───────────────────────────
Ján Novák
Obchodný manažér
EPALETY.SK

📞 +421 XXX XXX XXX
✉️  jan.novak@epalety.sk
🌐 www.epalety.sk

15+ rokov skúseností | Najlepšie ceny
───────────────────────────
```

### Social Media
```
Profile Picture:
- Logo (circular crop)
- Green background (#2D5016)
- White logo

Cover Photo:
- Hero warehouse image
- Overlay with tagline
- Brand colors prominent
```

---

## 🎓 STYLE GUIDE USAGE

### Pre dizajnéra:
```
1. Použiť farby len z palety
2. Dodržať spacing scale
3. Používať definované fonty
4. Následovať button styles
5. Konzistentné shadows/borders
```

### Pre developera:
```
1. CSS variables pre farby
2. Tailwind spacing classes
3. Component library (shadcn/ui)
4. Responsive breakpoints
5. Animation timings
```

### Pre copywritera:
```
1. Tone: Professional but friendly
2. Voice: Trustworthy, experienced
3. Language: Slovak, clear
4. Style: Concise, action-oriented
5. Avoid: Jargon, corporate speak
```

---

**Prepared by:** Digital Evolution  
**Version:** 1.0  
**Date:** November 2024

---

**TL;DR Visual Guide:**
- Farby: Zelená + Hnedá + Oranžová
- Fonty: Poppins (headings) + Inter (body)
- Štýl: Profesionálny, moderný, ekologický
- Fotky: Prírodné svetlo, organizované, autentické
- Spacing: 8px grid system
- Animácie: 300ms, smooth, subtle

---

## 💻 IMPLEMENTATION GUIDE

### CSS VARIABLES

```css
:root {
  /* Primary Colors */
  --forest-green: #2D5016;
  --wood-brown: #8B4513;
  --vibrant-orange: #FF8C00;
  
  /* Neutrals */
  --white: #FFFFFF;
  --gray-50: #F9F9F9;
  --gray-200: #E5E5E5;
  --gray-500: #666666;
  --gray-900: #111111;
  
  /* Spacing Scale (8px grid) */
  --spacing-xs: 4px;
  --spacing-s: 8px;
  --spacing-m: 16px;
  --spacing-l: 24px;
  --spacing-xl: 48px;
  --spacing-2xl: 64px;
  --spacing-3xl: 96px;
  
  /* Shadows */
  --shadow-soft: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-card: 0 4px 12px rgba(0, 0, 0, 0.1);
  --shadow-card-hover: 0 8px 24px rgba(0, 0, 0, 0.15);
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  
  /* Transitions */
  --transition-fast: 200ms ease-out;
  --transition-smooth: 300ms ease-out;
  --transition-slow: 500ms ease-out;
}
```

### TAILWIND CONFIG

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#2D5016',
          light: '#4A7A2B',
          dark: '#1F350F',
        },
        wood: {
          DEFAULT: '#8B4513',
          light: '#A0522D',
          dark: '#654321',
        },
        orange: {
          DEFAULT: '#FF8C00',
          light: '#FFA500',
          dark: '#FF7700',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      spacing: {
        'xs': '4px',
        's': '8px',
        'm': '16px',
        'l': '24px',
        'xl': '48px',
        '2xl': '64px',
        '3xl': '96px',
      },
      borderRadius: {
        'card': '12px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.15)',
      },
      transitionDuration: {
        'smooth': '300ms',
      },
    },
  },
}
```

---

## 🧩 COMPONENT SPECIFICATIONS

### BUTTON COMPONENT

**Variants:**

```tsx
// Primary (Orange CTA)
<Button variant="primary">
  Získať ponuku
</Button>
// Classes: bg-orange, text-white, hover:bg-orange-dark
// Transform: translateY(-2px) on hover
// Shadow: soft → card on hover

// Secondary (Green Outline)
<Button variant="secondary">
  Naše služby
</Button>
// Classes: border-2 border-forest, text-forest
// Hover: bg-forest, text-white

// Tertiary (Text Link)
<Button variant="tertiary">
  Zistiť viac →
</Button>
// Classes: text-forest, hover:text-orange, hover:underline

// Sizes
<Button size="sm">Small</Button>   // px-3 py-1.5 text-sm
<Button size="md">Medium</Button>  // px-6 py-3 text-base
<Button size="lg">Large</Button>   // px-8 py-4 text-lg
```

**States:**
```
Default:    Normal styling
Hover:      Transform + shadow increase + color change
Focus:      Ring-2 ring-forest with offset
Active:     Slight scale down (0.98)
Disabled:   Opacity 50%, pointer-events-none
Loading:    Spinner icon + disabled state
```

### CARD COMPONENT

```tsx
<Card>
  <CardHeader>
    <CardTitle>Nadpis</CardTitle>
    <CardDescription>Popis</CardDescription>
  </CardHeader>
  <CardContent>
    Obsah karty...
  </CardContent>
  <CardFooter>
    <Button>Akcia</Button>
  </CardFooter>
</Card>

// Base Styles:
// - bg-white
// - rounded-card (12px)
// - p-6 (24px padding)
// - shadow-soft
// - hover:shadow-card-hover
// - hover:-translate-y-2
// - transition-all duration-smooth
```

### INPUT COMPONENT

```tsx
<Input
  type="text"
  placeholder="Zadajte text..."
  className="input-field"
/>

// Styles:
// - w-full
// - px-4 py-4 (16px padding)
// - border-2 border-gray-200
// - rounded-lg (8px)
// - focus:border-forest
// - hover:border-gray-300
// - transition-colors duration-200
```

### PRODUCT CARD

```tsx
<ProductCard
  image="/products/paleta.jpg"
  title="EUR Palety"
  price="od 8€"
  features={["Kvalitné", "Certifikované"]}
  badge="POPULÁRNE"
/>

// Layout:
// ┌─────────────────┐
// │  [Image]        │  Aspect ratio: 16:9
// │  🏷️ BADGE       │  Position: top-right
// │                 │
// │  Title          │  H3, font-semibold
// │  Description    │  Body text, gray-500
// │                 │
// │  Price          │  Large, bold, orange
// │                 │
// │  ✓ Feature 1    │  List with checkmarks
// │  ✓ Feature 2    │
// │                 │
// │  [CTA Button]   │  Full width, primary
// └─────────────────┘
```

---

## 📐 LAYOUT PATTERNS

### CONTAINER

```tsx
<div className="container-custom">
  {/* Content */}
</div>

// Styles:
// - max-w-[1440px]
// - mx-auto
// - px-4 (mobile)
// - md:px-8 (tablet)
// - lg:px-16 (desktop)
```

### SECTION SPACING

```tsx
<section className="py-xl md:py-2xl lg:py-3xl">
  {/* Section content */}
</section>

// Vertical spacing:
// Mobile: 48px (xl)
// Tablet: 64px (2xl)
// Desktop: 96px (3xl)
```

### GRID LAYOUTS

```tsx
// Services Grid (4 columns → 2 → 1)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {services.map(service => <ServiceCard key={service.id} />)}
</div>

// Products Grid (3 columns → 2 → 1)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {products.map(product => <ProductCard key={product.id} />)}
</div>
```

---

## 🎨 UTILITY CLASSES

### TEXT UTILITIES

```css
.text-heading    /* Poppins font */
.text-body       /* Inter font */
.text-balance    /* Balanced text wrapping */

.text-forest     /* #2D5016 */
.text-wood       /* #8B4513 */
.text-orange     /* #FF8C00 */
```

### SPACING UTILITIES

```css
.p-xs, .m-xs     /* 4px */
.p-s, .m-s       /* 8px */
.p-m, .m-m       /* 16px */
.p-l, .m-l       /* 24px */
.p-xl, .m-xl     /* 48px */
.p-2xl, .m-2xl   /* 64px */
.p-3xl, .m-3xl   /* 96px */
```

### SHADOW UTILITIES

```css
.shadow-soft          /* Subtle shadow */
.shadow-card          /* Card shadow */
.shadow-card-hover    /* Hover shadow */
```

---

## ♿ ACCESSIBILITY GUIDELINES

### COLOR CONTRAST

```
Text on White:
- Forest Green (#2D5016): ✅ 8.2:1 (AA Large, AAA)
- Wood Brown (#8B4513): ✅ 7.1:1 (AA Large, AAA)
- Gray-900 (#111111): ✅ 16.8:1 (AAA)

Text on Orange (#FF8C00):
- White: ✅ 2.8:1 (AA Large only)
- Black: ✅ 8.9:1 (AAA)

Text on Forest Green (#2D5016):
- White: ✅ 8.2:1 (AAA)
```

### FOCUS STATES

```css
/* All interactive elements */
:focus-visible {
  outline: 2px solid var(--forest-green);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Buttons */
button:focus-visible {
  ring: 2px;
  ring-color: var(--forest-green);
  ring-offset: 2px;
}
```

### KEYBOARD NAVIGATION

```
✓ All interactive elements focusable
✓ Logical tab order
✓ Skip links for main content
✓ ARIA labels where needed
✓ Screen reader friendly
```

### SEMANTIC HTML

```html
<!-- Use semantic elements -->
<header>, <nav>, <main>, <section>, <article>
<aside>, <footer>, <button>, <a>

<!-- Proper heading hierarchy -->
<h1> → <h2> → <h3> → <h4>

<!-- Form labels -->
<label for="input-id">Label text</label>
<input id="input-id" />
```

---

## 📱 RESPONSIVE PATTERNS

### MOBILE-FIRST BREAKPOINTS

```css
/* Mobile (default) */
/* Styles apply to all sizes */

/* Tablet (768px+) */
@media (min-width: 768px) {
  /* md: prefix */
}

/* Laptop (1024px+) */
@media (min-width: 1024px) {
  /* lg: prefix */
}

/* Desktop (1440px+) */
@media (min-width: 1440px) {
  /* xl: prefix */
}
```

### TYPOGRAPHY SCALING

```css
/* Mobile */
h1 { font-size: 32px; line-height: 40px; }
h2 { font-size: 28px; line-height: 36px; }
h3 { font-size: 24px; line-height: 32px; }

/* Tablet */
@media (min-width: 768px) {
  h1 { font-size: 40px; line-height: 48px; }
  h2 { font-size: 32px; line-height: 40px; }
  h3 { font-size: 28px; line-height: 36px; }
}

/* Desktop */
@media (min-width: 1024px) {
  h1 { font-size: 48px; line-height: 56px; }
  h2 { font-size: 36px; line-height: 44px; }
  h3 { font-size: 30px; line-height: 38px; }
}
```

### IMAGE RESPONSIVENESS

```tsx
// Next.js Image component
<Image
  src="/hero.jpg"
  alt="Description"
  width={1440}
  height={600}
  className="w-full h-auto"
  priority
/>

// Aspect ratios
.aspect-video    /* 16:9 */
.aspect-square   /* 1:1 */
.aspect-[4/3]    /* 4:3 */
```

---

## 🎭 ANIMATION SPECIFICATIONS

### FADE IN

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 500ms ease-out;
}
```

### SLIDE UP

```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up {
  animation: slideUp 600ms ease-out;
}
```

### STAGGER ANIMATION

```tsx
// Framer Motion example
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }}
>
  {items.map((item, i) => (
    <motion.div
      key={i}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

### LOADING STATES

```tsx
// Skeleton loader
<div className="animate-pulse">
  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
</div>

// Spinner
<div className="animate-spin rounded-full h-8 w-8 border-2 border-forest border-t-transparent"></div>
```

---

## 🖼️ IMAGE GUIDELINES

### OPTIMIZATION

```
Format: WebP (with JPEG fallback)
Quality: 80-85%
Max width: 1920px (desktop), 768px (mobile)
Lazy loading: Enabled (except hero)
Alt text: Required, descriptive
```

### PLACEMENT

```tsx
// Hero images
<Image
  src="/hero.jpg"
  alt="EPALETY.SK sklad s paletami"
  width={1920}
  height={800}
  priority
  className="object-cover w-full h-[600px]"
/>

// Product images
<Image
  src="/products/paleta.jpg"
  alt="EUR Paleta - detail"
  width={400}
  height={300}
  className="rounded-lg object-cover"
/>
```

---

## 📋 CHECKLIST

### DESIGN REVIEW

```
□ Colors match brand palette
□ Typography follows scale
□ Spacing uses 8px grid
□ Buttons have hover states
□ Cards have hover effects
□ Forms have focus states
□ Images have alt text
□ Responsive on all breakpoints
□ Animations are smooth (300ms)
□ Accessibility standards met
```

### DEVELOPMENT CHECKLIST

```
□ CSS variables defined
□ Tailwind config updated
□ Components use design tokens
□ Responsive breakpoints correct
□ Focus states implemented
□ Keyboard navigation works
□ Screen reader tested
□ Performance optimized
□ Images optimized
□ Cross-browser tested
```

---

## 🔧 TROUBLESHOOTING

### COMMON ISSUES

**Colors not matching:**
```
✓ Check CSS variables are defined
✓ Verify Tailwind config colors
✓ Ensure no hardcoded hex values
```

**Spacing inconsistent:**
```
✓ Use spacing scale (xs, s, m, l, xl, 2xl, 3xl)
✓ Follow 8px grid system
✓ Check container padding
```

**Animations janky:**
```
✓ Use transform instead of position
✓ Enable GPU acceleration (will-change)
✓ Keep duration ≤ 300ms
✓ Use ease-out timing
```

**Responsive issues:**
```
✓ Mobile-first approach
✓ Test all breakpoints
✓ Check container max-width
✓ Verify grid column counts
```

---

## 📚 RESOURCES

### FONTS
- Poppins: https://fonts.google.com/specimen/Poppins
- Inter: https://fonts.google.com/specimen/Inter

### TOOLS
- Color contrast checker: https://webaim.org/resources/contrastchecker/
- Spacing generator: https://8px.xyz/
- Shadow generator: https://shadows.brumm.af/

### INSPIRATION
- IKEA (sustainability, organization)
- UPS (professional, reliable)
- Uline (industrial, B2B)

---

**Last Updated:** December 2024  
**Version:** 2.0  
**Status:** Implementation Ready ✅

---

## 📄 SKUTOČNÝ OBSAH Z EPALETY.SK

### TEXTOVÝ OBSAH (Scraped December 2024)

**Hlavný nadpis:**
```
www.epalety.sk – Predaj a výkup paliet
```

**Sekcie:**

**Naše služby:**
- Využite špeciálny produkt dlhodobého prenájmu euro paliet, KTP a Gitterboxov.
- Naše skladové zásoby stačia aj na tie najväčšie projekty. Neváhajte nás kontaktovať s Vašim dopytom.
- Výkup paliet za najlepšie ceny, ktoré si dohodneme individuálne na základe stavu a počtu.
- Zaoberáme sa výkupom, predajom, opravou paliet, KTP boxov, Gitterboxov a recykláciou dreveného odpadu.
- Zabezpečujeme servis a poradenstvo pre jednotlivé spoločnosti pri voľbe, dodania a použitia obalového materiálu.
- Našou prioritou je spokojnosť zákazníka, vďaka ktorej sa rýchlo stávame úspešnou firmou na trhu s paletami.

**Spolupracujte s profesionálmi:**
- Dlhoročné skúsenosti s obalovým materiálom
- Zaručujeme bezkonkurenčné ceny pri výkupe a predaji obalového materiálu predovšetkým drevených paliet, ktoré sa stanovia dohodou so zákazníkom. Plynulé dodanie tovaru, materiálu podľa požiadaviek zákazníka, profesionálny prístup, technické a skladové zabezpečenie, vďaka ktorému môžeme vyhovieť každému zákazníkovi. Tešíme sa na dlhodobú spoluprácu s Vami.
- Vďaka pobočkám sme Vám vždy na blízku a máme dostatočné kapacity pre Vaše potreby.
- Kvalitu paliet a boxov starostlivo kontrolujeme už pri výkupe.
- Realizujeme výkup euro paliet, jednorazových paliet, KTP a Glitterboxov po dohode NON STOP.

**Produkty v ponuke:**
- Euro palety (nové, použité, tmavé)
- Jednorázová paleta 120cm x 80 cm
- Jednorázová paleta 120 cm x 100 cm
- Paletové nádstavce
- KTP boxy
- Gitterboxy

**Služby:**
- Predaj / Výkup paliet: Potrebujete predať, alebo máte záujem o kúpu drevených paliet alebo europaliet? Kontaktujte nás pre cenovú ponuku
- Prenájom: Ponúkame aj dlhodobý prenájom euro paliet, KTP boxov a Gitterboxov.

**Kontaktné informácie:**
- Telefón: +421 905 896 685, +421 910 444 024
- Email: info@epalety.sk

**Pobočky:**

**Malacky 1:**
- Adresa: Poľná ulica 3589 (smer na Veľké Leváre)
- Telefón: +421 905 896 685, +421 910 444 024
- Email: info@epalety.sk
- Otváracie hodiny: Pon - Pia: 08.00 - 16.00

**Malacky 2:**
- Adresa: Pezinská ulica 5547/1 (pri Shell pumpe)
- Telefón: +421 905 896 685, +421 910 444 024
- Email: info@epalety.sk
- Otváracie hodiny: Pon - Pia: 08.00 - 16.00

**Kúty:**
- Adresa: Bratislavská cesta 1352
- Telefón: +421 905 896 685, +421 910 444 024
- Email: info@epalety.sk
- Otváracie hodiny: Pon - Pia: 08.00 - 16.00

**Navigácia:**
- O nás
- Výkup
- Ponuka
- Pobočky
- Kontakt

---

### OBRAZKY (Scraped December 2024)

**Logo:**
- `public/images/scraped/logo-male.png` - Logo EPALETY.SK (Arctica)

**Banner:**
- `public/images/scraped/banner.jpg` - Hlavný banner

**Produktové obrázky:**
- `public/images/scraped/pallets-2215366_1280.jpg` - Palety (hero image)
- `public/images/scraped/120x80.png` - Jednorázová paleta 120x80
- `public/images/scraped/120x100.png` - Jednorázová paleta 120x100
- `public/images/scraped/biela-pouzita.png` - Biela použitá paleta
- `public/images/scraped/eur.png` - EUR paleta
- `public/images/scraped/nadstavec.png` - Paletový nádstavec
- `public/images/scraped/tmava.png` - Tmavá paleta
- `public/images/scraped/888.jpg` - KTP box 888
- `public/images/scraped/Gitterbox.jpg` - Gitterbox
- `public/images/scraped/KTP-777.jpg` - KTP box 777

**Použitie obrázkov:**
```
Hero Section:     pallets-2215366_1280.jpg
Logo:             logo-male.png
Product Cards:    120x80.png, 120x100.png, eur.png, tmava.png, biela-pouzita.png
Box Products:     888.jpg, 999.jpg, Gitterbox.jpg, KTP-777.jpg
Banner:           banner.jpg
```

---

### KLÚČOVÉ SLOVÁ A FRÁZY

**Z epalety.sk:**
- Predaj a výkup paliet
- Euro palety
- KTP boxy
- Gitterboxy
- Dlhodobý prenájom
- Bezkonkurenčné ceny
- Profesionálny prístup
- Kvalitné palety
- Skladové zásoby
- Kontrola kvality
- NON STOP výkup
- Individuálne ceny
- Dlhodobá spolupráca

**Produkty:**
- Euro palety (nové, použité, tmavé)
- Jednorázové palety (120x80, 120x100)
- Paletové nádstavce
- KTP boxy
- Gitterboxy

**Služby:**
- Predaj paliet
- Výkup paliet
- Prenájom paliet
- Oprava paliet
- Recyklácia dreveného odpadu
- Servis a poradenstvo

---

### COPYWRITING INSPIRÁCIA

**Hlavné hodnoty:**
- Dlhoročné skúsenosti
- Profesionálny prístup
- Bezkonkurenčné ceny
- Spokojnosť zákazníka
- Dostatočné kapacity
- Kvalitná kontrola
- NON STOP dostupnosť
- Individuálny prístup

**Call-to-Action frázy:**
- "Kontaktujte nás pre cenovú ponuku"
- "Neváhajte nás kontaktovať s Vašim dopytom"
- "Tešíme sa na dlhodobú spoluprácu s Vami"
- "Vďaka pobočkám sme Vám vždy na blízku"

**Trust signals:**
- "15+ rokov skúseností" (možno pridať)
- "Dlhoročné skúsenosti"
- "Kvalitu paliet starostlivo kontrolujeme"
- "Naše skladové zásoby stačia aj na tie najväčšie projekty"

---

### STRUKTÚRA OBSAHU PRE WEB

**Homepage sekcie:**
1. Hero - "Kvalitné palety pre váš biznis"
2. Naše služby (4 karty: Predaj, Výkup, Prenájom, Opravy)
3. Produkty v ponuke (grid s obrázkami)
4. Prečo my (hodnoty, skúsenosti)
5. Pobočky (3 lokácie)
6. Kontakt / CTA

**Produktové stránky:**
- Euro palety (nové, použité, tmavé)
- Jednorázové palety (120x80, 120x100)
- Paletové nádstavce
- KTP boxy
- Gitterboxy

**Služby:**
- Predaj paliet
- Výkup paliet
- Prenájom paliet
- Opravy a servis

---

**Scraped:** December 2024  
**Source:** https://www.epalety.sk  
**Images:** 10 downloaded to `public/images/scraped/`  
**Status:** Ready for content integration ✅