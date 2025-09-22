// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const res = NextResponse.next();

  // Franchise redirect cookie names to clear
  const cookiesToClear = ["franchise_redirect", "redirect_to_franchise"];

  cookiesToClear.forEach((name) => {
    if (req.cookies.get(name)) {
      res.cookies.set(name, "", {
        expires: new Date(0), // expire immediately
        path: "/",
      });
    }
  });

  return res;
}

// Apply to all pages
export const config = {
  matcher: ["/:path*"],
};
