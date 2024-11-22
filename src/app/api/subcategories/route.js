import { NextResponse } from 'next/server';
import { getSubCategories } from '../../../db/sqliteConnect';
export async function GET() {
  try {
   const data = await getSubCategories();

   return NextResponse.json(data);
} catch (error) {
  console.error('Database error:', error);
  return NextResponse.json(
    { error: 'Failed to fetch categories' },
    { status: 500 }
  );
}
} 