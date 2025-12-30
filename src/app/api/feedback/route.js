import { connect } from '@/app/lib/dbConnect';
import { feedback } from '../route';

const feedbackCollection = connect('feedbacks');

export async function GET(request) {
  const result = await feedbackCollection.find().toArray();
  return Response.json(result);
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
