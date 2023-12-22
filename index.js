
import express from 'express';
import bodyParser from 'body-parser';
import router from './route/userRoute.js';

const app=express();

app.use(bodyParser.json());

app.use('/api',router);


app.listen(8080,()=>{
    console.log('server is running');
})


// import  generateResponse  from './oaiIntgration.js';

// const userPrompt = 'what is nest.js ?';
// generateResponse(userPrompt)
//   .then(generatedResponse => {
//     console.log('Generated Response:', generatedResponse);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });