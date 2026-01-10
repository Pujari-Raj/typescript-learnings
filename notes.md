# TypeScript – Notes

## What is TypeScript?

TypeScript (TS) is a **superset of JavaScript (JS)**. This means:

* Every valid JavaScript code is also valid TypeScript code.
* TypeScript adds **extra features** on top of JavaScript, mainly **static typing**.

TypeScript code **cannot run directly in the browser or Node.js**. It must first be converted into JavaScript.

### How TypeScript Works

1. You write code in `.ts` files
2. The TypeScript compiler (`tsc`) checks the code for errors
3. The code is **compiled (transpiled)** into `.js` files
4. The generated JavaScript runs in the browser or Node.js

So, **TypeScript acts as a wrapper around JavaScript**, helping developers write safer and more predictable code.

---

## TypeScript Has Types & Data Types

Unlike JavaScript, TypeScript allows us to **define types explicitly**.

### Example:

```ts
let age: number = 25;
let username: string = "Basavaraj";
let isLoggedIn: boolean = true;
```

### Common Data Types in TypeScript

* `number`
* `string`
* `boolean`
* `array` (`number[]`, `string[]`)
* `object`
* `any`
* `unknown`
* `void`
* `null` & `undefined`

Using types helps catch errors **at compile time**, before the code runs.

---

## Cons of JavaScript

JavaScript is powerful but comes with some drawbacks.

### 1. Freedom of Writing Code in Any Manner

JavaScript is very flexible:

* No strict rules
* No enforced structure
* Variables can change types at runtime

Example:

```js
let value = 10;
value = "ten"; // No error
```

This freedom often leads to:

* Poorly structured code
* Hidden bugs
* Hard-to-maintain large applications

TypeScript restricts this freedom in a **good way** by enforcing types.

---

### 2. Loose Documentation (JSDocs)

In JavaScript, developers rely on **JSDocs** for documentation.

Example:

```js
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}
```

#### Problems with JSDocs:

* Optional and not enforced
* Can easily become outdated
* No compile-time error if documentation is wrong

TypeScript **eliminates the need for JSDocs for types** because types are part of the code itself.

---

### 3. Poor Developer Tooling (in Plain JS)

In large JavaScript projects:

* Autocomplete is limited
* Refactoring is risky
* Hard to track function parameters and return types

This reduces developer productivity and confidence.

---

## TypeScript Is an Add-on to JavaScript

TypeScript does **not replace JavaScript**.

* JavaScript handles runtime execution
* TypeScript works at development time

You still deploy JavaScript, not TypeScript.

Think of TypeScript as a **safety layer** over JavaScript.

---

## TypeScript Has a Type Checker

One of the biggest advantages of TypeScript is its **type checker**.

### Example:

```ts
function add(a: number, b: number): number {
  return a + b;
}

add(5, "10"); // ❌ Error
```

The type checker:

* Detects mismatched types
* Prevents invalid assignments
* Catches bugs before runtime

---

## TypeScript Is Consistent

TypeScript enforces:

* Consistent data types
* Predictable function behavior
* Better code readability

This consistency is extremely useful for:

* Team collaboration
* Large-scale applications
* Long-term maintenance

---

## POints to Remember

* TypeScript is a superset (wrapper) of JavaScript
* It compiles TS into JS
* Adds static typing and type safety
* Solves major JavaScript problems like poor structure, loose documentation, and weak tooling
* Provides strong developer tooling and compile-time error checking

---

✅ **Best suited for medium to large applications** where maintainability and scalability matter.

# TypeScript: Compile-time vs Runtime (Important Concept)

This note explains **why TypeScript warnings/errors do not stop code execution**
and **why Node.js still runs your code even when types are wrong**.

---

## 1. Key Concept (Most Important)

> **TypeScript exists only at compile time.**  
> **JavaScript exists at runtime.**

TypeScript helps developers **before running the code**, but it does **not**
change how JavaScript executes.

---

## 2. What Happens in the Below Example

### Code:
```ts
function greet(name: string) {
    return "Hello", name;
}

console.log(greet("bengaluru"));
console.log(greet(24));
```

---

## 3. Why Does the Above Code Run Successfully in VS Code?

### Node.js Does NOT Understand TypeScript

When you run:
```bash
node basic.ts
```

- Node.js executes **JavaScript only**
- TypeScript types are **ignored completely**
- `.ts` files are treated like normal `.js` files

### Code (TypeScript):
```ts
function greet(name: string)
```

### Code (At Runtime):
```js
function greet(name)
```

- Type annotations (`: string`) are completely removed and ignored at runtime.

---

## 4. Why `24` Is Accepted Even Though the Type Is `string`

### TypeScript:
- Performs type checking **only at compile time**
- Has **NO runtime enforcement**

### JavaScript:
- Does not restrict argument types
- Allows passing any value

Example:
```ts
greet(24);
```

- ❌ **TypeScript** → Gives type error
- ✅ **JavaScript** → Runs successfully

---

## 5. Important Rule to Remember

> **TypeScript warnings and errors do NOT stop JavaScript execution**

They are:
- Compile-time checks
- Developer guidance
- NOT runtime blockers

---

## 6. Correct Way to Run TypeScript Code

### Step 1: Compile TypeScript
```bash
tsc basic.ts
```

This generates:
```bash
basic.js
```

### Step 2: Run JavaScript
```bash
node basic.js
```

- TypeScript checks first  
- JavaScript runs **only after successful compilation**

---
