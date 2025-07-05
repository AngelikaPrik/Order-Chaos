import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const username = process.env.NEXT_PUBLIC_APP_LOGIN
const password = process.env.NEXT_PUBLIC_APP_PASSWORD
const authString = Buffer.from(`${username}:${password}`).toString('base64')

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get('authorization')
  if (authHeader === `Basic ${authString}`) {
    return NextResponse.next()
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Private"',
    },
  })
}
