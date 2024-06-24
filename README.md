This is a React Profile community App - allows user for all CRUD operations.

* It allows User's to create their profile as profile cards which are displayed in the dashboard.
* Read - All the profile details are displayed as profile cards in dashboard.
	- the profile cards are built as flip cards.
	- the front side of the flip card shows profile details like company name, role, email and so on.
	- the back side of the flip card shows contact details like address, location, phone number and website details.
	- Also the EDIT and DELETE ICONS are available on the back side of the flip card, allows the user for edit and delete operations.
* Edit on the back side of the flip card, navigates the user to edit page.
  	- where all the details of the profile clicked will be displayed on the appropriate input fields for the user to edit easily.
  	- once clicked on the submit button, user will be navigated to dashboard page to view the updated details.
* DELETE on the back side of the flip card, deletes the profile immediately and pops up deleted toast notification.

* Create - 'Add User' tab on the sidebar, allows user to add profiles to the profile community.
  	- once the user clicks on the submit button, page navigates to dashboard to view the added details.
*'status report tab' on the sidebar - opens a page displaying basic details of the profile( ID, USERNAME, EMAIL WITH STATUS as 'ACTIVE' or 'Inactive')
	- Also allows the user to update the status by just clicking on the toggle button.

* All the user details are stored in mockAPI and CRUD operations are performed using AXIOS fetch.
* Achieved responsive design using css and media queries.
  
  


