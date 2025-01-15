## ** Color Box Maker**

A React application with the following components:

***App***

This component renders the ***BoxList*** component.

***BoxList***

Holds state that contains all of the boxes. This component renders all of the ***Box*** components along with the ***NewBoxForm*** component.

***Box***

This component displays a ***div*** with a background color, width and height based on the props passed to it.

***NewBoxForm***

This component renders a form that when submitted creates a new ***Box***. Client is able to specify the ***Box***’s width, height, and background color. When the form is submitted, the input value clears.

- When each ***Box*** component is displayed, there is a button with the text of “X” in each ***Box***. When this button is clicked, that specific box is deleted.



## ** Todo App **

A Todo App that allows users to see, add, edit, and remove todos. It contains the following components:

***App***

This component renders the ***TodoList*** component.

***TodoList***

This component renders the ***NewTodoForm*** component and renders the list of Todo components. The state that contains all of the todos is in this component.

***NewTodoForm***

This component renders a form with one text input for the task to be created. When this form is submitted, a new ***Todo*** component is created. 

***Todo***

This component displays a ***div*** with the task of the todo.

For each Todo component, there is a button with the text “X” that when clicked, removes the todo.
