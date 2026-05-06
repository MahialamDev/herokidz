import { getServerSession } from 'next-auth';
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    const url = request.url;
    const token = await getToken({req: request});
    if (!token) {
        
          return NextResponse.redirect(new URL(`/login?callback=${url}`, request.url))
    } 
        
    return NextResponse.next();
   

   
}


 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: '/about/:path*',
}