// src/app/api/authenticate/route.ts (Next.js 13+ App Router)
import { NextResponse } from 'next/server';
import { Query } from '@/api/query';

export async function POST(req: Request) {
    const { username, password } = await req.json();
  
    try {
      const query = `SELECT id, ma_quyen FROM tai_khoan WHERE ten_dang_nhap = '${username}' AND mat_khau = '${password}' ORDER BY id LIMIT 1`;
      const response = await Query(query);
      const data = await response.json();
      return NextResponse.json(data);
    } catch (error) {
      console.error('Database Error:', error);
      return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
    }
  }

  export interface User {
    id: number
    ma_quyen: number
  }