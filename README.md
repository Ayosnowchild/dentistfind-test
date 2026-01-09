

# dentistfind-test
Ayokunle Adekoya attempt at DentistFind Dental Practice Summary Card
# clone the project
git clone https://github.com/Ayosnowchild/dentistfind-test.git
# install dependencies
npm install
# start local instance
npm start

# Summary of Approach
To ensure keeping to time and making sure of submission, i had to time myself and ignore usage of any additional package like tailwindcss that might delay installations. Made use of legible fonts sizes to limit writing too many media queries and only did where necessary like in Practice Summary card arrangements in mobile and desktop view and major text sizings. I made sure to do away with animations or complex graphics and kept display simple, nice and detailed. 
# Answers to Q3 1
1. Components structure: When building a component, i try to break it down into parts, these parts interact to form the whole, this is the same approach i applied in breaking down the whole UI into several components. The general structure is to have a folder for each component and this folder houses both the stylesheet and functional component respective files for said component e.g for Recommendation component, i created a Recommendation folder and then created a Recommendation.css and Recommendation.tsx in this folder.
2. CSS Choice: As mentioned above, the time to setup tailwindcss or any other UI library might prove expensive and also since the  Dental Practice Summary Card doesn't have that many components or parts, using tailwind might be overdoing it and i decided to stick with regular CSS.
3. To ensure visual consistency and responsiveness, I stuck with using bright colors as background, and darker colors as text color, i also used feint colors for some text with lower hierachy. I made use of the CSS color palette available on VSCode to ultimately pick some colors. For the Status colors, I used the colors advised.
# Answers to Q3 2
1. To integrate this card into a larger PracticeFuel dashboard, i would:
   - add more details to each card.
   - make it possible to enlarge the charts, i.e more than 6-months view
2. With extra time, i would add the following:
   - little animations, especially on the charts section/components
   - hover/focus animation on each card
   - improve color scheme to beautify the whole page
   - use tailwindcss to convey my expertise in using UI libraries
# Answers to Q3 3
Time Management
- Setup/Brainstorming and planning: 5-20mins
- Layout and structure (interloped with setup): 10mins
- Component setup/mock data defining: 40mins
- Styling/Component polishing/ responsiveness testing: 20mins
- Color adjustments: 10mins
- Repo setup and ReadMe explanation: 40mins
   
   # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).