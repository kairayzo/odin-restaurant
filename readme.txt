Create a bare-bones homepage for a restaurant. 
Include an image, headline, and some copy about how wonderful the restaurant is. 
It’s okay to hard-code these into the HTML for now just to see how they look on the page.

Now remove those elements from the HTML (so leave only the <html>, <body>, and <div id="content"> tags)
and instead create them by using JavaScript only, 
e.g. by appending each new element to div#content once the page is first loaded. 
Since we’re all set up to write our code in multiple files, 
let’s write this initial page-load function inside of its own module 
and then import and call it inside of index.js.

Next, set up your restaurant site to use tabbed browsing to access the Contact and Menu pages. 
Look at the behavior of this student solution for visual inspiration.

Put the contents of each ‘tab’ inside of its own module. 
Each module will export a function that creates a div element, 
adds the appropriate content and styles to that element and then appends it to the DOM.

Write the tab-switching logic inside of index.js. 
You should have event listeners for each tab that wipes out the current contents 
0and then runs the correct ‘tab module’ to populate it again.

Menu items:
Freddy's Award Winning Pizza
Bonnie's Fresh Green Salads
Foxy's Nautical Nuggets
Chica's Delicious Donuts

Arcade
Birthday Parties

Links:
logo: https://thefreddypizzeria.wordpress.com/our-history/
menu: https://www.reddit.com/r/fivenightsatfreddys/comments/8n39ub/freddy_fazbears_pizzeria_menu_concept_larger_pics/?rdt=40323
band: https://corpserabbit.tumblr.com/post/666712668760080384/the-hd-version-of-the-freddy-fazbears-pizza