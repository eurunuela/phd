import type { ActionFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { getQueryEngine } from './queryEngine';

export async function action({ request }: ActionFunctionArgs) {
  // try {
  let data = await request.json();
  console.log('Data:', data);
  let queryEngine = await getQueryEngine();
  let answer = await queryEngine.chat({ message: data.message }); //, chatHistory: data.chatHistory });
  // console.log('Answer:', answer);

  let responseObj = {
    response: answer.toString(),
  };

  return new Response(JSON.stringify(responseObj), {
    status: 200,
  });
  // } catch (error) {
  //   console.error('Error in action function:', error);
  //   return json({ error: 'An error occurred' }, { status: 500 });
  // }
}
