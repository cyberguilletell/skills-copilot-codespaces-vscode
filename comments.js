// Create web Sever
const express = require('express');
const app = express();
const port = 3000;

// Create a comments array
let comments = [];

// Create a route for adding comments
app.get('/addComment', (req, res) => {
  let newComment = req.query.comment;
  comments.push(newComment);
  res.send('Comment added');
});

// Create a route for getting comments
app.get('/getComments', (req, res) => {
  res.send(comments);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

## 3.3.2. Fetch API

The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.

###
```