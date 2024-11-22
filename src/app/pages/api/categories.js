import { getCategories } from '../../../db/sqliteConnect';

export default async function handler(req, res) {
  try {
    const data = await getCategories();
    res.status(200).json(data);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
}