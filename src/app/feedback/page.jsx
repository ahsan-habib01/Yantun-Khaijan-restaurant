import FeedbackCard from "@/components/cards/FeedbackCard";
import Link from "next/link";

export const metadata = {
  title: 'feedback',
};

const getFeedbacks = async () => {
  const res = await fetch('http://localhost:3000/api/feedback');
  return res.json();
};

// export const dynamic = "force-dynamic";

// // const getFeedback = async () => {
// //   const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback/`, {
// //     // cache: "force-cache",
// //     next: { revalidate: 60 },
// //   });
// //   return await res.json();
// // };

export default async function feedbackPage() {
  const feedback = await getFeedbacks();

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
}
