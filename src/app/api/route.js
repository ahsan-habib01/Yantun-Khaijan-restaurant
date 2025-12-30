export let feedback = [
  { id: 1, message: 'খাবার খুব মজা ছিলো' },
  { id: 2, message: 'ওয়েটার দের ব্যবহার আরো ভালো ক্রয়া চাই' },
];

export async function GET(request) {
  return Response.json({
    status: 200,
    message: 'Yahooo. API created',
  });
}
