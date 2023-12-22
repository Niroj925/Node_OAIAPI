import  generateResponse  from '../oaiIntgration.js';

export default class userController{

async getInfo(req, res) {
    const prompt = req.body.prompt;
    const query=req.body.query;

    const fprompt= query?`from this description ${prompt} this is the description. Now, find ${query}`:prompt;

    try {
      const generatedResponse = await generateResponse(fprompt);
    //   console.log('Generated Response:', generatedResponse);
      res.status(200).json({ GeneratedResponse: generatedResponse });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
}