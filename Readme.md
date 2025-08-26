1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: 
One by ID → getElementById

Many by class → getElementsByClassName

First match with CSS selector → querySelector

All matches with CSS selector → querySelectorAll


2. How do you create and insert a new element into the DOM?

Ans:
Just create a new element with ".createElement"

Set it by a variable

set innerText of that variable

create a variable with getElementById where you wanna put this new element

then append it by ".appendChild"

3. What is Event Bubbling and how does it work?

Ans: 
If you click on a button inside a div, the click event first happens on the button, then it also “bubbles” to the div, then to the body, then to the document

if you want to stop it: "event.stopPropagation();"

In short: Event bubbling = events go from the innermost element → up through all ancestors → document.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans:
Instead of adding hundreds of listeners, I can add just one.

If new items are added later with JS, I don’t need to re-attach listeners. The parent still “hears” them.

Easier to manage one listener than many.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:
event.stopPropagation()

It stops the event from bubbling (or capturing) any further in the DOM tree.
It does NOT prevent the default browser action.


preventDefault()
Stops default browser behavior.


A form submit button inside a modal, where I don’t want it to submit (defaultively) or bubble I can use both at the same time.