const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('8byte Intern Assignment Successfully Deployed ');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

Create `package.json`:
```json
{
  "name": "8byte-intern-assignment",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.2"
  }
}
