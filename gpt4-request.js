import * as dotenv from 'dotenv'
dotenv.config()

import { Configuration, OpenAIApi } from 'openai'

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
)

const response = await openai.createChatCompletion({
  model: 'gpt-4',
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'Is this a test?' },
  ],
  max_tokens: 150,
  n: 1,
  stop: null,
  temperature: 0.8,
  top_p: 1,
})

console.log(JSON.stringify(response.data, undefined, 2))
