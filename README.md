# GitHub Copilot Use-Case Showcase

## Developer Persona

### Scenario

I am an Intermediate Software Engineer joining a new team.

My team lead has assigned me the task of building a new backend microservice that should aggregate the Bitcoin price from different exchanges so that we can report select cross-exchange prices on our landing screen.

### Pick up an existing project

```
@workspace how do I launch this microservice using npm?
```

Follow the recommendation to add a `start` script and launch and test the empty microservice.

### Create Prices API

Chat prompt:

```
Create a GET request handler at /crypto_price that takes a cryptocurrency symbol as input and returns a corresponding associative array mapping the symbol to the last sell price.  Use the CoinGecko API to retrieve the price and use Axios for HTTP requests.
```

Apply the code as suggested

See if it works

```
npm start

GET http://localhost:3000/crypto_price?symbol=bitcoin
```

Get the price from a second exchange:

```
Add logic to get the price from the Binance public API and put the prices from both CoinGecko and Binance into an associative map like this:

{
    "coingecko": 123,
    "binance": "432
}
```

Make it less hardcoded:

```
We need to clean this up by creating a map of symbols and exchanges to the argument that should be passed to the exchange API.  When BTC is supplied as the symbol, "bitcoin" should be passed to coingecko and BTCUSDT should be passed to Binance
```

### Front-End

```
Update this code to pull Bitcoin prices from the URL http://localhost:3000/crypto_price?symbol=BTC

This will provide a response like this:

{
    "coingecko": 72672,
    "binance": 72355.99
}

Display the prices in a table
```

Deal with CORS - Copilot can help here! 😍



### Unit Testing

```
Write a succes case unit test for this code.  Mock the HTTP requests
```

### TDD

```
This code should yield an "Unsupported symbol" HTTP 400 error if anything other than "BTC" is supplied for the symbol.  Create a fail unit test case for this situation
```



