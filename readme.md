# Tech Used
Used HTML, CSS and JavaScript. Some Illustrator and Photoshop for logo editing.

# Approach
Mobile-first approach.
For each page: 
- wireframe mobile, then wireframe tablet, then wireframe laptop.

My first round, I created separate html docs and stylesheets for each nav link:
- Created a main.css to house all nav, footer and any global styles.
- Then created invidividual stylesheets for each separate page

My second round: A UX friend said it looked too bare on each page, and expected to scroll, so then I combined Home, Portfolio and Skills into the Home Page. Then Bio and Contact was it's own separate page:
- Originally I had my hero, portfolio and skills all separate pages. After a friend in UX looked at it, it made more sense to combine it into one, so had to re-work and consolidate. But I still kept bio and contact as separate pages. Then another UX friend said keep it consistent, either all separate, or all together. So together it is.

My third round: Another UX friend said that if I choose parallax scrolling, it should all be parallax or if I choose to do separate pages, all should be separate pages, so then I decided to consolidate and make everything into one page for parallax scrolling. I still kept my main.css style separate for header/footer in case in the event I do choose to separate out the pages down the road.

One thing to note: I created a resume page per project requirements to show work experience. But I chose not to spend as much time on styling with CSS, as I do not plan to have this in my portfolio in the future. I have a link that downloads my resume into a PDF should a recruiter be interested in my resume in the contact section. In place of spending time on styling the resume, I chose to put my time and effort in starting a second project to call a cocktail API.


# Link to Live Site
Two options

GitHub Repo
https://github.com/vickievien/vickievien.github.io

Deployed Website
www.vickievien.com

# Installation Instructions
Not applicable. No installation needed to view website

# Additional Notes - Issues to be fixed in the Future
NAV HAMBURGER ON MOBILE (BOTH DEV TOOLS AND REAL MOBILE DEVICE):
Currently, the only way to close the nav, is if you click on the hamburger again.

Ideally, I would like to click a link, have it scroll to the section AND close the nav.

However, right now, I can only seem to do either. I can either click on the nav link and it'll close the nav section, but it won't scroll to the section (e.g. clicked on Portfolio, nav section closes, but doesn't scroll to portfolio section). 

Or I can do the opposite, click on a nav link, it'll scroll to the section, but it won't close the nav section.

Would love to have both, but not sure why, if I add an event listener on the nav items, it'll close the section but won't scroll to the section as well.

In main.js lines 23-27 would close the nav section, but won't have it scroll to the section, so for now, I'd rather it scroll to the right section and not close (unless I click the hamburger) so I grayed it out for now. That way, I can access the code at a later time.


PORTFOLIO SECTION:
In the deployed version (vickievien.com), if you click on the Wandering Wanderlust image or the "view" button for the project, it'll open up a new page with the project.

However, if I open up index.html (locally), for some odd reason, when I click on the Wandering Wanderlust image or the view button for the project, in a separate tab, it just shows a list of the files, not the project.

Not sure why deployment works but local server doesn't. It's beyond me.


FORM SUBMIT BUTTON ON MOBILE (ON A REAL MOBILE DEVICE - NOT DEV TOOLS)
On the mobile version in dev tools, the submit button shows and works perfectly fine in the deployed/live server version (vickievien.com).

However, if you go to vickievien.com on an actual mobile device, the text "submit" inside the form submit button disappears. 

Why does it show in dev tools when it's mobile size and not on a real mobile device is also beyond me.