import FeedbackCard from '@/components/cards/FeedbackCard';
import Link from 'next/link';
import React from 'react';
import { getFeedback } from '@/action/server/feedback';
export const metadata = {
  title: 'feedback',
};

export const dynamic = 'force-dynamic';

// const getFeedback = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback/`, {
//     // cache: "force-cache",
//     next: { revalidate: 60 },
//   });
//   return await res.json();
// };

const FeedbackPage = async () => {
  const feedback = await getFeedback();

  return (
    <div>
      <div className="">
        <h2 className="text-2xl font-bold">
          {feedback.length} Feedbacks found
        </h2>
        <div className="my-5">
          <Link href={'/feedback/add'} className="btn">
            Add Feedback
          </Link>
        </div>
        <div className="my-3 space-y-5">
          {feedback.map(fd => (
            <FeedbackCard key={fd._id} feedback={fd}></FeedbackCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
