import { NextResponse } from "next/server";

export const middleware = (request) => {
  // redirect and rewrite
  const cookies = request.cookies.get("token");
  console.log(cookies);
  if (!cookies || cookies.value !=='rahi-shahi') {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.redirect(new URL("/blogs", request.url));
};

export const config = {
  matcher: "/dashboard",
};
