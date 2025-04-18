import { sql } from '../lib/db';
import { NextResponse } from 'next/server';

export async function Query(request: string){
  try {
    // Use tagged template literals for safe queries
    // Example: Fetching users
    const result = await sql`
      SELECT ten_quyen FROM quyen ORDER BY RANDOM() LIMIT 1
    `;

    // Note: sql`` returns a special array object. Access rows via standard array methods.
    return NextResponse.json({ result });

  } catch (error) {
    console.error('Database Error:', error);
    // Avoid sending detailed error messages to the client in production
    return NextResponse.json(
        { message: 'Failed to fetch' },
        { status: 500 }
    );
  }
}

// You can add POST, PUT, DELETE handlers similarly
// export async function POST(request: Request) { ... }