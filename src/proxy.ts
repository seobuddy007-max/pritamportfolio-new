import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("x-forwarded-host") || request.headers.get("host") || request.nextUrl.host;
  const proto = request.headers.get("x-forwarded-proto") || (request.nextUrl.protocol.startsWith("https") ? "https" : "http");

  const cleanHost = host.split(":")[0].toLowerCase();

  // If request domain is pritamchatterjee.com or www.pritamchatterjee.com
  const isTargetDomain = cleanHost === "pritamchatterjee.com" || cleanHost === "www.pritamchatterjee.com";
  const needsWwwRedirect = cleanHost === "pritamchatterjee.com";
  const needsHttpsRedirect = proto.toLowerCase() === "http";

  if (isTargetDomain && (needsWwwRedirect || needsHttpsRedirect)) {
    const redirectUrl = new URL(
      request.nextUrl.pathname + request.nextUrl.search,
      "https://www.pritamchatterjee.com"
    );
    return NextResponse.redirect(redirectUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for internal Next.js assets
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
