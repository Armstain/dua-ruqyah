import { getCategories } from '../../../db/sqliteConnect';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = await getCategories();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
} 