1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   Ans : getElementById : We can access a specific element using its unique ID. Returns a single DOM element.
   getElementsByClassName : We can access all the classes that has the same name . Returns a HTML collection.
   querySelector : Uses CSS selectors (class ,id etc ) to access elements . Returns the first element by the selector's name.
    querySelectorAll : Uses CSS selectors (class ,id etc ) to access elements . Returns a Nodelist by the same name of the selector .

2. How do you **create and insert a new element into the DOM**?
   Ans :  Like this :
        //create an element
        const element = document.getCreateElement('div');
        //add some innerText or innerHTML in the element
        div.innerText = 'something';
        //get acccess to the parent
        const parent = document.getElementById('-----');
        //append the new element in its parent
        parent.appendChild(element);
   
4. What is **Event Bubbling** and how does it work?
   Ans :  When an event happens on an element, it runs on that element itself then bubbles up to its parents , grandparents , all the way upto the document or window

5. What is **Event Delegation** in JavaScript? Why is it useful?
  Ans : It's technique of adding event listeners to a parent element instead of adding to its multiple child elements . It's useful because we can implement functionalities using fewer event listeners.

6. What is the difference between **preventDefault() and stopPropagation()** methods?
   Ans : preventDefault : stops the browser's default actions for an event
         stopPropagation : stops the event bubbling up .
                     
          
      
   
