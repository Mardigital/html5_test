# Html5Test on React

This is a preliminary test to determine the technical ability of developers applying for front-end positions at Digia.

Following this assignment
Your task is to create a small signup form and a list of participants with React that meets the following requirements:

-Use Create React App to scaffold your application...COMPLETED

Generate 20 participants that contain randomized values for the following properties: id, name, email address, and phone number...COMPLETED

Render a table that displays the participants on individual rows...
COMPLETED

Create a form for adding new participants to the table (remember to validate the form)
...COMPLETED

Make each participant editable by clicking on a table cell (inline editing)
COMPLETED

Add support for deleting rows... NOT COMPLETED

Make each column sortable upon clicking on a column header
I didn't understand this question.

Write a developer-friendly installation guide...
COMPLETED

Deploy a live build on the internet...
COMPLETED

Follow the design as accurately as possible (sizes and colors)...
NOT SURE ABOUT THIS

So this web application list of users with possibility to add new, edit existing or sort every column you need.Show information such  as name, email and phone number.


Try it here  http://localhost:5000/

- FOR DEVELOPERS -

#Just clone this repo and run on your comand control `npm install` on the terminal
You can use the doccumentation of create react app to make your life easy 
There is lot of tuto online and some installation guide but still you may have some hard time if you are new on the eviroment of react.

##`npm run start` to start a local dev server 
`npm run build` to create a production build

Also, pay attention that `api/db.js` will generate new list of users on every page refresh.
You can easily change the number of participants on line 3 in `api/db.js`

## Styling

You can add your own color scheme to app elements.
Take a look at `src/styles.css`. 

To apply new styles you should change line 17 in `src/App.js` from 'gray' to 'personal'.
Of course you can make a default props in `App.js` and add theme name as a prop to the `<App />` component.
Also you can apply new color style to the header at Header.css, to the form at Form.css to the Caption at Caption.css
##To change logo you delete the file logo.png at src/img the create your own logo file logo.png


## Deployment

The build was run sucessfully on my local host but i hade lot of problem to have it on my Github.

Conclusion
For my first expirience with react i like it even if I was really challenging to fine my way.

## Source File Structure

```
src
   ├── App.css
   ├── App.js
   ├── App.test.js
   ├── api
   |  └── db.js
   ├── components
   |  ├── Caption.css
   |  ├── Caption.js
   |  ├── Footer.css
   |  ├── Footer.js
   |  ├── Form.css
   |  ├── Form.js
   |  ├── FormContainer.js
   |  ├── Header.css
   |  ├── Header.js
   |  ├── Table
   |  |  ├── Body.js
   |  |  ├── Head.css
   |  |  ├── Head.js
   |  |  ├── HeadContainer.js
   |  |  ├── Row.js
   |  |  ├── RowContainer.js
   |  |  ├── Table.css
   |  |  └── Table.js
   |  ├── common.js
   |  └── elements
   |     ├── Button.css
   |     ├── Button.js
   |     ├── Input.css
   |     └── Input.js
   ├── img
   |  ├── icon-arrow-down.svg
   |  ├── icon-arrow-up.svg
   |  ├── icon-delete.svg
   |  ├── icon-edit.svg
   |  └── logo.png
   ├── index.js
   └── styles.css
```

