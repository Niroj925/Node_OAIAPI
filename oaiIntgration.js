import axios from 'axios';
import 'dotenv/config';

const apiKey = process.env.OPEN_API_KEY;

const openaiEndpoint = 'https://api.openai.com/v1/chat/completions';

async function generateResponse(userPrompt) {
  try {
    const response = await axios.post(openaiEndpoint, {
      model: 'gpt-3.5-turbo-1106',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant.',
        },
        {
          role: 'user',
          content: userPrompt,
        },
      ],
      max_tokens: 100,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    // console.log(response.data);
    return response.data.choices[0].message.content;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
}

export default generateResponse;
