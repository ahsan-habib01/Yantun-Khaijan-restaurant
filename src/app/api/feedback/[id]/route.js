import { feedback } from "../../route";

export async function GET(request, { params }) {
  const { id } = await params;

  const singleFeedback = feedback.find(fb => fb.id == id);

  if (!singleFeedback) {    
    return Response.json({ error: 'Feedback not found' });
  }         

  return Response.json(singleFeedback)

}