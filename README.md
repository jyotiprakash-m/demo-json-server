# demo-json-server

## Overview

`json-server` is a simple and powerful tool that allows you to create a full fake REST API with zero coding in less than 30 seconds. It is perfect for prototyping, testing, and developing front-end applications.

## Installation

To install `json-server`, you can use npm:

```bash
npm install -g json-server
```

## Usage

1. Create a `db.json` file with your data structure. For example:

```json
{
  "posts": [
    { "id": "1", "title": "a title", "views": 100 },
    { "id": "2", "title": "another title", "views": 200 }
  ],
  "comments": [
    { "id": "1", "text": "a comment about post 1", "postId": "1" },
    { "id": "2", "text": "another comment about post 1", "postId": "1" }
  ],
  "profile": {
    "name": "typicode"
  }
}
```

2. Start the server by running:

```bash
npx json-server db.json --port 4000
```

3. Your API will be available at `http://localhost:4000`.

## API Endpoints

### Posts

#### API Endpoints

- **_GET /posts_**: Retrieve all posts
- **_GET /posts/:id_**: Retrieve a single post by ID
- **_POST /posts_**: Create a new post
- **_PUT /posts/:id_**: Update an existing post
- **_DELETE /posts/:id_**: Delete a post

### Comments

#### API Endpoints

- **_GET /comments_**: Retrieve all comments
- **_GET /comments/:id_**: Retrieve a single comment by ID
- **_POST /comments_**: Create a new comment
- **_PUT /comments/:id_**: Update an existing comment
- **_DELETE /comments/:id_**: Delete a comment

### Profile

#### API Endpoints

- **_GET /profile_**: Retrieve profile information

## Customization

You can customize the server behavior by using middleware or by modifying the `db.json` structure.

## Conclusion

`json-server` is a great tool for developers looking to quickly set up a mock API for testing and development purposes. For more information, visit the [json-server GitHub repository](https://github.com/typicode/json-server).

### Start Command

The command to start your app with each deploy using Cargo is:

```bash
cargo run
```
