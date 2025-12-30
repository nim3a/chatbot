import { createClient } from "@/lib/supabase/middleware"
import { i18nRouter } from "next-i18n-router"
import { NextResponse, type NextRequest } from "next/server"
import i18nConfig from "./i18nConfig"

export async function middleware(request: NextRequest) {
  // Handle i18n routing first - this will redirect to /fa if needed
  const i18nResult = i18nRouter(request, i18nConfig)
  if (i18nResult) return i18nResult

  try {
    const { supabase, response } = createClient(request)

    const session = await supabase.auth.getSession()

    // Extract locale from pathname (e.g., /fa/...)
    const pathSegments = request.nextUrl.pathname.split('/').filter(Boolean)
    const locale = i18nConfig.locales.includes(pathSegments[0]) 
      ? pathSegments[0] 
      : i18nConfig.defaultLocale

    // Check if user is on root path for their locale (e.g., /fa or /fa/)
    const isLocaleRoot = 
      request.nextUrl.pathname === `/${locale}` || 
      request.nextUrl.pathname === `/${locale}/`

    const redirectToChat = session && isLocaleRoot

    if (redirectToChat) {
      const { data: homeWorkspace, error } = await supabase
        .from("workspaces")
        .select("*")
        .eq("user_id", session.data.session?.user.id)
        .eq("is_home", true)
        .single()

      if (!homeWorkspace) {
        throw new Error(error?.message)
      }

      return NextResponse.redirect(
        new URL(`/${locale}/${homeWorkspace.id}/chat`, request.url)
      )
    }

    return response
  } catch (e) {
    return NextResponse.next({
      request: {
        headers: request.headers
      }
    })
  }
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next|auth).*)"
}
