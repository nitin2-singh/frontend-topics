# ♿ Web Accessibility (a11y) -- Beginner Notes

## 1. WCAG 2.1 AA Guidelines

WCAG = Web Content Accessibility Guidelines

Principles: - Perceivable - Operable - Understandable - Robust

AA level includes: - Color contrast - Keyboard navigation - Labels

---

## 2. ARIA Roles

```html
<div role="button">Click</div>
<nav role="navigation"></nav>
<div role="alert">Error</div>
```

Use semantic HTML first.

---

## 3. aria-label, aria-labelledby, aria-describedby

```html
<button aria-label="Close">X</button>

<h2 id="title">Menu</h2>
<div aria-labelledby="title"></div>

<input aria-describedby="hint" />
<p id="hint">Enter name</p>
```

---

## 4. aria-hidden & aria-live

```html
<div aria-hidden="true">Hidden</div>
<div aria-live="polite">Updated</div>
```

---

## 5. Focus & tabindex

```html
<div tabindex="0">Focusable</div>
<div tabindex="-1"></div>
```

---

## 6. Skip Navigation

```html
<a href="#main">Skip</a>
<main id="main"></main>
```

---

## 7. Color Contrast

Minimum: 4.5:1

---

## 8. Keyboard Navigation

- Tab
- Enter
- Space

---

## 9. Screen Readers

- NVDA
- VoiceOver

---

## 10. Accessible Forms

```html
<label for="name">Name</label>
<input id="name" />

<input aria-describedby="error" />
<p id="error">Required</p>
```

Rules: - Always use label - Placeholder is not label
