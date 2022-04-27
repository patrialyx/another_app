**Features and capabilities** <br>
Donor User Interface <br>
1 Home Page
- Landing page for users and donors
2 Plant a Seed Page
- Users must be able to view Tree cards.
- Users must be able to click on ‘Plant’ to access the ‘Donation’ Page.
3 Profile Page 
- Users must be able to view real-time information about the projects that they have adopted.
Multiple projects
4 Donation Page
Users must be able to submit the form.
- The form will contain the location of the tree.
- The form will contain the type of tree.
- The form will contain the number of trees.
- The form will contain the donation amount to be made.
- Users must be able to send Eth to the designated organization.
5 Login to Eth account
- Users must be able to login into their account upon clicking ‘Submit’.
- Users must be able to enter their eth address and password as text input into designated text input boxes
- Password must be hidden
- Users must be prompted that their username or password is invalid when either doesn’t match the data about their account 

Backend<br>
1 Transaction<br>
- User transactions must be recorded on the Ethereum blockchain.
- Transaction struct must include a pointer to IPFS where the data relating to the project is stored

Organization User Interface<br>
1 Home Page<br>
- The beneficiary must be able to click on ‘I want to list a project’ to be able to access a form.
- The beneficiary must be able to submit the form.
- The form will contain the description of the project to be listed.

**Architecture** <br>
Frontend - React.js <br>
Backend - Ethereum blockchain, IPFS for file storage

**How to run application**
- `npm install`
- `npm start`


