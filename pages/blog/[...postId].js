import dbConnect from '../utils/dbUtils';
import BlogPost from '../../models/Blog';

export default async function handler(req, res) {
  const {
    query: { postId },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const post = await BlogPost.findById(postId);
        if (!post) {
          return res.status(404).json({ error: 'Blog post not found' });
        }
        res.status(200).json(post);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
