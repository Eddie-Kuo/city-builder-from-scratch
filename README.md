## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)

<!-- html elements that are needed -->
<!-- 3 divs to display the images from the choice of the user
- why? so the user can see what they picked. how? const selection = dropdown.value
3 dropdowns. 
- why? so the user can select the choice they want to display. how? <select><option> dropdown.addeventlistener('change', () => {}) 
space for user to input the slogan they want 
- why? so the user can input the slogan of their choice. how? slogan.getelementbyid() -> slogan.textcontent = sloganinput.value
a button to submit the slogan 
why? so the user can submit the entry that they want. how? sloganbutton.addeventlistener('click', () => {} )
p tag to display how many times each feature was changed 
- why? so the user can see how many times each category was changed. how? `string ${value} ...` with the values++; upon selects in the eventlistener
area to display the slogans that the user inputted
- why? so the user can see all the slogans they wrote. how? variable = .value to display the contents of the user

Evenets: 
- when the user selects an item from the dropdown, the picture corresponging to the selection should change
    - when an item is selected from the dropdown, the display of how many times something was changed should update 
- when the user clicks the slogan submit button, the list of slogans entered should all be displayed with the new slogan added in 
    - the list of slogans should clear and reappear with the new one added in 

Vertical slices: 
- drop down selections should be able to change the picture corresponding to the dropdown selection 
- user should be able to see how many times each feature was changed from the dropdown selection
- user should be able to add new slogans into the list of slogans 
- Stretch goals: add in an option to type in the city name and it should update in real time in according to what's being typed -->
