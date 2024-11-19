export const formsJson = [
    {
      "name": "_id",
      "hidden": true,
    },
    {
      "name": "firstname",
      "label": "First Name",
      "placeholder": "leave empty to see error",
      "hint": "Use only letters",
      "required": true,
      "type": "textbox",
      
    },
    {
      "name": "lastname",
      "label": "Last Name",
      "placeholder": "add a number to see error",
      "hint": "Use only letters",
      "type": "textbox",
    },
    {
      "name": "age",
      "label": "Age",
      "placeholder": "enter an age less than 10 to see error",
      "hint": "Use only digits",
      "type": "textbox",
    },
    {
      "name": "country",
      "label": "Country",
      "placeholder": "enter your country",
      "hint": "",
      "type": "dropdown",
      "options": ["USA", "Canada", "Iran", "Pakistan"]
    },
];