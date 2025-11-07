import { NextRequest, NextResponse } from "next/server";

const slugs = [
  "thermopro-tp20-wireless-thermometer",
  "cuisinart-premium-grilling-set",
  "weber-q-compact-stand",
  "kona-bbq-grill-mats",
  "kingsford-charcoal-chimney-starter",
  "grillpro-cast-iron-smoker-box",
  "traeger-hickory-pellets",
  "grilltough-heavy-duty-grill-cover",
  "oxo-good-grips-basting-brush",
];

export function middleware(req: NextRequest) {
  const referer = req.headers.get("refeHrer") || "";

  if (referer.startsWith("https://rivucharge.com")) {
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
    const url = req.nextUrl.clone();
    url.pathname = `/products/${randomSlug}`;

    const res = NextResponse.redirect(url);
    res.cookies.set("bbq", "true", { path: "/", maxAge: 60 });

    return res;
  }
}

export const config = {
  matcher: ["/charge"],
};
