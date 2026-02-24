# JavaScript DOM Questions & Answers

---

## 1. Difference Between DOM Selection Methods

### getElementById
Selects a single element by ID.

### getElementsByClassName
Returns a live HTMLCollection of elements with that class.

### querySelector
Returns the first matching element using CSS selector syntax.

### querySelectorAll
Returns a static NodeList of all matching elements.

---

## 2. How to Create and Insert a New Element into the DOM

1. Create element using:
   document.createElement("div")

2. Add content:
   element.textContent = "Hello"

3. Insert into DOM:
   parent.appendChild(element)

---

## 3. What is Event Bubbling?

Event bubbling means when an event occurs on a child element,
it propagates upward to its parent elements.

---

## 4. What is Event Delegation?

Event delegation means attaching a single event listener to a parent element
instead of multiple listeners on child elements.
It works because of event bubbling.

Benefits:
- Better performance
- Works with dynamically added elements
- Cleaner code

---

## 5. Difference Between preventDefault() and stopPropagation()

preventDefault()
Stops the browser’s default behavior.

stopPropagation()
Stops the event from bubbling up to parent elements.