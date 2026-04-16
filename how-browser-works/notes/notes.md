# 🌐 Browser Rendering & JavaScript (Beginner Notes)

---

## 1. Parsing HTML → DOM

### 🔹 What is HTML parsing?

When a browser gets HTML, it **reads it line by line** and converts it into a structure.

### 🔹 What is DOM?

DOM (Document Object Model) = a **tree structure** of your HTML.

Example:

```
<html>
  <body>
    <h1>Hello</h1>
  </body>
</html>
```

Becomes:

```
Document
└── html
└── body
└── h1
```

---

### 🔹 Why DOM matters?

- JavaScript can **read/change** it
- Used to update UI dynamically

---

## 2. Parsing CSS → CSSOM

### 🔹 What is CSSOM?

CSSOM (CSS Object Model) = tree of CSS rules.

Example:
h1 { color: red; }

Becomes:
Rule → selector (h1) → styles (color: red)

---

### 🔹 Why CSSOM matters?

- Browser uses it to **style elements**
- Combined with DOM to render page

---

## 3. Render Tree Construction

### 🔹 What is Render Tree?

Browser combines:

- DOM (structure)
- CSSOM (styles)

To create:
👉 Render Tree (what actually shows on screen)

---

### 🔹 Important

- Hidden elements (`display: none`) are NOT included

---

## 4. Layout (Reflow)

### 🔹 What is Layout?

Browser calculates:

- Size
- Position

Of each element on screen

---

### 🔹 Example

- Width of div
- Position of text

---

### 🔹 Why called "Reflow"?

If something changes (like resizing window):
👉 Browser recalculates layout again

---

## 5. Paint & Composite

### 🔹 Paint

Browser fills pixels:

- Colors
- Text
- Borders
- Shadows

---

### 🔹 Composite

Combines layers to show final screen

---

### 🔹 Simple Flow

DOM + CSSOM → Render Tree → Layout → Paint → Screen

---

## 6. JavaScript Engine (V8)

### 🔹 What is V8?

JavaScript engine used in:

- Chrome
- Node.js

---

### 🔹 What it does?

- Reads JavaScript
- Converts it to machine code
- Executes it fast

---

### 🔹 Key Parts

- Memory Heap → stores data
- Call Stack → executes functions

---

## 7. Call Stack

### 🔹 What is Call Stack?

A stack where functions are executed one by one.

---

### 🔹 Example

```
function a() {
b();
}
function b() {
console.log("Hello");
}
a();
```

---

### 🔹 Execution

1. a() added to stack
2. b() added
3. console.log runs
4. stack clears

---

## 8. Event Loop

### 🔹 Problem

JavaScript is **single-threaded** (one task at a time)

---

### 🔹 Solution: Event Loop

Handles async tasks like:

- setTimeout
- API calls
- events

---

### 🔹 How it works?

1. Call stack runs code
2. Async tasks go to Web APIs
3. Callback queue waits
4. Event loop pushes tasks back to stack

---

## 9. Microtasks vs Macrotasks

### 🔹 Macrotasks (slow queue)

- setTimeout
- setInterval
- DOM events

---

### 🔹 Microtasks (high priority)

- Promises (.then, .catch)
- queueMicrotask

---

### 🔹 Order

1. Run main code
2. Run ALL microtasks
3. Then macrotasks

---

### 🔹 Example

console.log("1");

setTimeout(() => console.log("2"));

Promise.resolve().then(() => console.log("3"));

console.log("4");

Output:
1
4
3
2

---

## 10. Blocking Scripts

### 🔹 What is Blocking?

When browser stops rendering to run JavaScript.

---

### 🔹 Example

<script src="app.js"></script>

- HTML parsing stops
- JS runs
- Then continues

---

### 🔹 Problem

- Slower page load
- Bad performance

---

## 11. defer vs async

### 🔹 async

<script async src="app.js"></script>

- Downloads in parallel
- Executes immediately when ready
- DOES NOT guarantee order

---

### 🔹 defer

<script defer src="app.js"></script>

- Downloads in parallel
- Executes AFTER HTML parsing
- Maintains order

---

### 🔹 Difference Table

| Feature          | async       | defer      |
| ---------------- | ----------- | ---------- |
| Blocking         | No          | No         |
| Execution time   | Immediately | After HTML |
| Order guaranteed | ❌          | ✅         |

---

## 🚀 Full Browser Flow (Simple)

1. Browser gets HTML
2. Builds DOM
3. Builds CSSOM
4. Combines → Render Tree
5. Calculates layout
6. Paints pixels
7. Runs JavaScript (V8)
8. Handles async with event loop

---

## 🧠 Easy Analogy

Think of browser like cooking:

- HTML → ingredients 🍅
- CSS → recipe 🍳
- DOM + CSSOM → preparation
- Render tree → ready dish
- Layout → plating
- Paint → serving
- JS → chef actions

---

## 📚 Resources

- MDN Web Docs (best for beginners)
- JavaScript.info
- YouTube:
  - "Browser rendering explained"
  - "Event loop explained simply"

---

## 🛠️ Projects (Start Simple)

1. Change text using JavaScript
2. Create button → update DOM
3. Use setTimeout demo
4. Fetch API → display data
5. Build small todo app

---
