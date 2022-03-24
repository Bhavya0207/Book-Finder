# Book-Pedia


This is a react web app that allows you to search for
books and get information an links about them

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Features

- Auto search for thousands of books

- Get information about the books
  - Title
  - Cover page
  - Description
  - Rating
  - Raters
  - Published Date
  - Authors
## API Reference
### Google Books api has been used for this project

Base url - https://www.googleapis.com/books/v1/
#### Get all items for the value

```http
  GET /volumes?q=${searchValue}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `search_value` | `string` | **Required**. Any Keyword |

#### Get item

```http
  GET /volumes/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `id`      | `string` | **Required**. Id of item to fetch |



## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

`REACT_APP_API_KEY="YourAPIKeyHere"`




## Run Locally

Clone the project

```bash
  git clone https://github.com/Bhavya0207/Book-Pedia
```

Go to the project directory

```bash
  cd Book-Pedia
```

Create .env.local file in root

```
REACT_APP_API_KEY="YourAPIKeyHere"
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Build the project

```bash
  npm run build
```

Stop the development Server


<kbd>Ctrl</kbd> +<kbd> C</kbd> (same for Mac and Windows)


## Tech Used

**Client:** React, Google Books API


