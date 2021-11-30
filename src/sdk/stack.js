const contentstack = require("contentstack")

const Stack = contentstack.Stack({
  api_key: process.env.REACT_APP_APIKEY,
  delivery_token: process.env.REACT_APP_DELIVERY_TOKEN,
  environment: process.env.REACT_APP_ENVIRONMENT,
  region: process.env.REACT_APP_REGION ? process.env.REACT_APP_REGION : "us",
})

if (process.env.REACT_APP_CUSTOM_HOST) {
  Stack.setHost(process.env.REACT_APP_CUSTOM_HOST)
}

export default Stack;