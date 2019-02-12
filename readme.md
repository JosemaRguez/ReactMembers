# Mediasmart members
This ReacJS app feeds a viewport with members from Mediasmart. To get more members navigate between pages using the buttons on bottom.

When you click on a member you will be redirected to a page with the specific member. If you press the button 'Close' you wil come back to the viewport, so you can keep looking for members!


## Express
This project uses express.js as backend and it's connected by a proxy with the app. Server will be listening on 3001. 

## ES6 and ReactJS

This project use JavaScript (ES6) and ReactJS as frontend. App will run on port 3000

## Design
- Home page has the list of members (12 members per page). On bottom, you will find two buttons to go to the next page of members or to the previous page. We do not know how many members are in DB or if there are more members today than yesterday, so this is useful to keep our page working even if the members change in DB.
- When a page is loaded, a circle appears between the buttons. User can use these to go to the exactly members' page, skipping others.
- All members have a button to check their bios, when you click on it, a big card appears with all data of the member. In this page you can go back to members' page clicking on the button 'Close' under the bio. 
- There is a 404 page not found in case the app can not find a members' page or a bio.
- Some members have a fake link to the image. It exists a default icon to show in case the server responses with an error when is trying to load any image.

## To run this project

- Clone the project in your local. 

- Go to the root folder and run this command:
```
> npm run update
```
This install all  packages that app needs(both backend and frontend side)

- This command runs the app:
```
> npm start
```

- Open the browser and go to localhost:3000

- Test the app in all devices :)