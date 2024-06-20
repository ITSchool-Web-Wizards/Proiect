"use server";
// https://platform.openai.com/docs/guides/text-generation/chat-completions-api?lang=node.js
// https://dangrio.medium.com/exploring-the-traditional-route-making-openai-api-requests-with-html-and-javascript-001fcdf7b96c


async function main() {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: 'You are a personal math tutor. Write and run code to answer math questions.' },
        // {role: "user", content: 'Solve: 3x+2=4'},
      ],
      temperature: 0.21,
      max_tokens: 125,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    }),
  });
      const data = await response.json();
      const reply = data.choices[0].message.content.trim();
    console.log(reply);
}
main();




// import dotenv from 'dotenv';
// dotenv.config();
// import OpenAI from 'openai';

// if (!process.env.OPENAI_API_KEY) {
//   throw new Error('The OPENAI_API_KEY environment variable is missing or empty.');
// }

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// dotenv.config();

// export const generateChatResponse = async (chatMessages) => {
//   try {
//     const response = await openai.chat.completions.create({
//       messages: [
//         { role: 'system', content: 'you are a helpful assistant' },
//         ...chatMessages,
//       ],
//       model: 'gpt-3.5-turbo',
//       temperature: 0.21,
//       max_tokens: 125,
//       top_p: 1,
//       frequency_penalty: 0,
//       presence_penalty: 0,
//     });
//     return {
//       message: response.choices[0].message,
//     };
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// };
// generateChatResponse ();
// console.log('OpenAI API Key:', process.env.OPENAI_API_KEY);