import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, message } = req.body;

  if (!name || !email || !message)
    return res.status(422).json({ error: 'Invalid request body' });

  return res.status(200).json({ message: 'Success' });
}
