import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = ["/about", "/contact"];
const AUTH_PATHS = ["/sign-in", "/sign-up"];
const PROTECTED_PATHS = ["/orders"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const accessToken = req.cookies.get("access_token")?.value;

  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  if (AUTH_PATHS.some((path) => pathname.startsWith(path)) && accessToken) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (
    PROTECTED_PATHS.some((path) => pathname.startsWith(path)) &&
    !accessToken
  ) {
    const signInUrl = new URL("/sign-in", req.url);
    signInUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/orders/:path*", "/sign-in/:path*", "/sign-up/:path*"],
};
