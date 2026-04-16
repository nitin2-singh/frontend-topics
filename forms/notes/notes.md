# 📝 HTML Forms -- Beginner Notes

---

## 1. Input Types

```html
<input type="text" />
<input type="email" />
<input type="password" />
<input type="number" />
<input type="date" />
<input type="file" />
<input type="checkbox" />
<input type="radio" />
<input type="range" />
<input type="color" />
```

---

## 2. label & for

```html
<label for="name">Name</label> <input id="name" />
```

Connects label with input.

---

## 3. fieldset & legend

```html
<fieldset>
  <legend>User Info</legend>
  <input />
</fieldset>
```

Groups related inputs.

---

## 4. Attributes

```html
<input required />
<input pattern="[A-Za-z]+" />
<input min="1" max="10" />
<input minlength="3" />
```

---

## 5. HTML5 Validation

Browser automatically validates: - required - email format - min/max

---

## 6. novalidate & Custom Validation

```html
<form novalidate></form>
```

Disable default validation.

Custom JS:

```js
input.setCustomValidity("Error");
```

---

## 7. FormData API

```js
const formData = new FormData(form);
formData.get("name");
```

Used to collect form data.

---

## 8. GET vs POST

GET: - Data in URL - Used for fetching

POST: - Data in body - Used for submitting

---

## 🧠 Key Points

- Always use labels
- Use validation attributes
- Prefer POST for sensitive data
