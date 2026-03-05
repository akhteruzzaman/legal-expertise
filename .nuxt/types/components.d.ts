
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  DarkAccreditations: typeof import("../../components/dark/Accreditations.vue")['default']
  DarkBlog: typeof import("../../components/dark/Blog.vue")['default']
  DarkCTA: typeof import("../../components/dark/CTA.vue")['default']
  DarkFooter: typeof import("../../components/dark/Footer.vue")['default']
  DarkHeader: typeof import("../../components/dark/Header.vue")['default']
  DarkHero: typeof import("../../components/dark/Hero.vue")['default']
  DarkServices: typeof import("../../components/dark/Services.vue")['default']
  DarkTeam: typeof import("../../components/dark/Team.vue")['default']
  DarkTestimonials: typeof import("../../components/dark/Testimonials.vue")['default']
  DarkWhyUs: typeof import("../../components/dark/WhyUs.vue")['default']
  LightAccreditations: typeof import("../../components/light/Accreditations.vue")['default']
  LightBlog: typeof import("../../components/light/Blog.vue")['default']
  LightCTA: typeof import("../../components/light/CTA.vue")['default']
  LightFooter: typeof import("../../components/light/Footer.vue")['default']
  LightHeader: typeof import("../../components/light/Header.vue")['default']
  LightHero: typeof import("../../components/light/Hero.vue")['default']
  LightServices: typeof import("../../components/light/Services.vue")['default']
  LightTeam: typeof import("../../components/light/Team.vue")['default']
  LightTestimonials: typeof import("../../components/light/Testimonials.vue")['default']
  LightWhyUs: typeof import("../../components/light/WhyUs.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyDarkAccreditations: LazyComponent<typeof import("../../components/dark/Accreditations.vue")['default']>
  LazyDarkBlog: LazyComponent<typeof import("../../components/dark/Blog.vue")['default']>
  LazyDarkCTA: LazyComponent<typeof import("../../components/dark/CTA.vue")['default']>
  LazyDarkFooter: LazyComponent<typeof import("../../components/dark/Footer.vue")['default']>
  LazyDarkHeader: LazyComponent<typeof import("../../components/dark/Header.vue")['default']>
  LazyDarkHero: LazyComponent<typeof import("../../components/dark/Hero.vue")['default']>
  LazyDarkServices: LazyComponent<typeof import("../../components/dark/Services.vue")['default']>
  LazyDarkTeam: LazyComponent<typeof import("../../components/dark/Team.vue")['default']>
  LazyDarkTestimonials: LazyComponent<typeof import("../../components/dark/Testimonials.vue")['default']>
  LazyDarkWhyUs: LazyComponent<typeof import("../../components/dark/WhyUs.vue")['default']>
  LazyLightAccreditations: LazyComponent<typeof import("../../components/light/Accreditations.vue")['default']>
  LazyLightBlog: LazyComponent<typeof import("../../components/light/Blog.vue")['default']>
  LazyLightCTA: LazyComponent<typeof import("../../components/light/CTA.vue")['default']>
  LazyLightFooter: LazyComponent<typeof import("../../components/light/Footer.vue")['default']>
  LazyLightHeader: LazyComponent<typeof import("../../components/light/Header.vue")['default']>
  LazyLightHero: LazyComponent<typeof import("../../components/light/Hero.vue")['default']>
  LazyLightServices: LazyComponent<typeof import("../../components/light/Services.vue")['default']>
  LazyLightTeam: LazyComponent<typeof import("../../components/light/Team.vue")['default']>
  LazyLightTestimonials: LazyComponent<typeof import("../../components/light/Testimonials.vue")['default']>
  LazyLightWhyUs: LazyComponent<typeof import("../../components/light/WhyUs.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
