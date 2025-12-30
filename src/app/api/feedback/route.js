import { feedback } from '../route';

export async function GET(request) {
  return Response.json(feedback);
}

export async function POST(request) {
  const { message } = await request.json();

  if (!message || typeof message !== 'string') {
    return Response.json({
      status: 400,
      message: 'please send a message',
    });
  }

  const newFeedback = {
    id: feedback.length + 1,
    message,
  };
  feedback.push(newFeedback);

  return Response.json({
    acheknowledged: true,
    insertedId: newFeedback.id,
  });
}
