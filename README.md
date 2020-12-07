# React project with the minimum third party libraries

## Requirements:

React
Redux or Context API (optional)

## Description:

Candidate is expected to implement the features provided in the mock up. The layout of the test is designed responsive and the expected implementation needs to be the same. Below is the guide to the implementation. All the functionalities are must haves except the one’s are marked as “optional”. 

Coin Gecko API Documentation: https://www.coingecko.com/api/documentations/v3

1. Create a table to list the coins.
 - Use https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad for fetching market data.
2. Create a section for displaying coin details for a selected coin
- Create a button “Add to favorites” to add a coin as a favorite.
- Use a method to persist favorite coins through a refresh
3. Create the component for displaying favorite coins
- Add hover effect to remove favorite coin (see mockup)
4. Create a section to buy/sell cryptocurrency
- Create dropdown to select a cryptocurrency
- Create an input to take an amount of cryptocurrency to buy or sell
- Add a submit button. When submitted, calculate the amount of cryptocurrency sold/bought for that pair. (ETH/BTC)
5. Write an automated test for any one of the components. (optional)

Please use this endpoint for fetching price information between two currencies. Check out the documentation for simple/price if needed.

	Example API call URL for fetching ETH/BTC pricing.

	https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eth

	Result: 
	Example: You have purchased 1 BTC for 33.08880705 ETH



## Dependencies

    "@testing-library/jest-dom": "^5.11.6",
    "@testing-library/react": "^11.2.2",
    "@testing-library/user-event": "^12.2.2",
    "enzyme": "^3.11.0",
    "enzyme-adapter-react-16": "^1.15.5",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-scripts": "4.0.1",
    "react-test-renderer": "^17.0.1",
    "web-vitals": "^0.2.4"

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

The project tested with Jest and Enzyme

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
