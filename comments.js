// Create web server
// 1. Create a web server with express
// 2. Create a route for GET /comments
// 3. Return the comments array
// 4. Create a route for POST /comments
// 5. Add a new comment to the array
// 6. Return the new comment

const express = require('express');
const app = express();
app.use(express.json());

const comments = [
    { username: 'Tammy', comment: 'lol that is so funny' },
    { username: 'FishBoi', comment: 'haha rofl' },
    { username: 'Luv2Blog', comment: 'noice' }
];

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const newComment = req.body;
    comments.push(newComment);
    res.json(newComment);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});