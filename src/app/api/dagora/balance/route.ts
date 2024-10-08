import { DAGORA_API_BASE_URL } from '@constants/nft';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get('address');
  const page = searchParams.get('page');
  const size = searchParams.get('size');

  const query = `page=${page}&size=${size}`;

  const res = await fetch(
    `${DAGORA_API_BASE_URL}/user/balanceV3/${address}?${query}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'PostmanRuntime/7.40.0',
      },
    },
  );
  const data = await res.json();
  // console.log('=== res ', data);
  return Response.json({ data });
}
