import { NextResponse } from 'next/server';
import { getDuasBySubcategory } from '../../../db/sqliteConnect';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const subcategoryId = searchParams.get('subcategoryId');

  if (!subcategoryId) {
    return NextResponse.json({ error: 'Subcategory ID is required' }, { status: 400 });
  }

  try {
    const duas = await getDuasBySubcategory(subcategoryId);
    return NextResponse.json(duas);
  } catch (error) {
    console.error('Error fetching duas:', error);
    return NextResponse.json({ error: 'Failed to fetch duas' }, { status: 500 });
  }
}