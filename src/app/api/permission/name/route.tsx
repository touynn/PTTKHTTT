// src/app/api/authenticate/route.ts (Next.js 13+ App Router)
import { NextResponse } from 'next/server';
import { Query } from '@/api/query';

export async function POST(req: Request) {
    const { id } = await req.json();
  
    try {
      const query = `SELECT ten_quyen FROM quyen WHERE id = ${id}`;
      const response = await Query(query);
      const data = await response.json();
  
      return NextResponse.json(data);
    } catch (error) {
      console.error('Database Error:', error);
      return NextResponse.json({ error: 'Not existed permission' }, { status: 500 });
    }
  }