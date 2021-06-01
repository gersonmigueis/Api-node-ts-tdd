import express from 'express';

const app = express();

app.get('/', (request, response) =>{
  return response.json('API NODE-TS');
});
app.listen(3333);
