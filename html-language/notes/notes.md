# 🌐 HTML Fundamentals (Beginner Notes)

## 1. DOCTYPE & Document Structure

DOCTYPE defines HTML5 document.

```html
<!DOCTYPE html>
```

Basic structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    Hello World
  </body>
</html>
```

- html → root
- head → metadata
- body → visible content

---

## 2. Semantic Tags

```{=html}
<header>
```

→ top\

```{=html}
<nav>
```

→ navigation\

```{=html}
<main>
```

→ main content\

```{=html}
<footer>
```

→ bottom\

```{=html}
<article>
```

→ independent content\

```{=html}
<section>
```

→ grouped content\

```{=html}
<aside>
```

→ sidebar

---

## 3. Headings

```html
<h1>Main</h1>
<h2>Sub</h2>
<h3>Section</h3>
```

Use one h1 and follow order.

---

## 4. Text

```html
<p>Paragraph</p>
<span>Inline</span>
<strong>Bold</strong>
<em>Italic</em>
<blockquote>Quote</blockquote>
```

---

## 5. Lists

Unordered:

```html
<ul>
  <li>Item</li>
</ul>
```

Ordered:

```html
<ol>
  <li>Item</li>
</ol>
```

Description:

```html
<dl>
  <dt>HTML</dt>
  <dd>Markup</dd>
</dl>
```

---

## 6. Links

```html
<a href="https://google.com">Link</a>
```

---

## 7. Images

```html
<img src="img.jpg" alt="desc" />
```

Attributes: - src - alt - loading="lazy" - srcset

---

## 8. Tables

```html
<table>
  <caption>
    Data
  </caption>
  <thead>
    <tr>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nitin</td>
    </tr>
  </tbody>
</table>
```

---

## 9. Meta Tags

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="site" />
```

Open Graph:

```html
<meta property="og:title" content="Page" />
```

---

## 10. Data Attributes

```html
<div data-user-id="123"></div>
```

JS:

```js
element.dataset.userId;
```

---

## 11. figure & figcaption

```html
<figure>
  <img src="img.jpg" />
  <figcaption>Caption</figcaption>
</figure>
```

---

## 12. time, address, abbr

```html
<time datetime="2026-04-16">April 16</time>
<address>India</address>
<abbr title="HyperText Markup Language">HTML</abbr>
```
