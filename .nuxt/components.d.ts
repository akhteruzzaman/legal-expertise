
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


export const DarkEnAccreditations: typeof import("../components/dark-en/Accreditations.vue")['default']
export const DarkEnBlog: typeof import("../components/dark-en/Blog.vue")['default']
export const DarkEnCTA: typeof import("../components/dark-en/CTA.vue")['default']
export const DarkEnFooter: typeof import("../components/dark-en/Footer.vue")['default']
export const DarkEnHeader: typeof import("../components/dark-en/Header.vue")['default']
export const DarkEnHero: typeof import("../components/dark-en/Hero.vue")['default']
export const DarkEnServices: typeof import("../components/dark-en/Services.vue")['default']
export const DarkEnTeam: typeof import("../components/dark-en/Team.vue")['default']
export const DarkEnTestimonials: typeof import("../components/dark-en/Testimonials.vue")['default']
export const DarkEnWhyUs: typeof import("../components/dark-en/WhyUs.vue")['default']
export const DarkAccreditations: typeof import("../components/dark/Accreditations.vue")['default']
export const DarkBlog: typeof import("../components/dark/Blog.vue")['default']
export const DarkCTA: typeof import("../components/dark/CTA.vue")['default']
export const DarkFooter: typeof import("../components/dark/Footer.vue")['default']
export const DarkHeader: typeof import("../components/dark/Header.vue")['default']
export const DarkHero: typeof import("../components/dark/Hero.vue")['default']
export const DarkServices: typeof import("../components/dark/Services.vue")['default']
export const DarkTeam: typeof import("../components/dark/Team.vue")['default']
export const DarkTestimonials: typeof import("../components/dark/Testimonials.vue")['default']
export const DarkWhyUs: typeof import("../components/dark/WhyUs.vue")['default']
export const LightEnAccreditations: typeof import("../components/light-en/Accreditations.vue")['default']
export const LightEnBlog: typeof import("../components/light-en/Blog.vue")['default']
export const LightEnCTA: typeof import("../components/light-en/CTA.vue")['default']
export const LightEnFooter: typeof import("../components/light-en/Footer.vue")['default']
export const LightEnHeader: typeof import("../components/light-en/Header.vue")['default']
export const LightEnHero: typeof import("../components/light-en/Hero.vue")['default']
export const LightEnServices: typeof import("../components/light-en/Services.vue")['default']
export const LightEnTeam: typeof import("../components/light-en/Team.vue")['default']
export const LightEnTestimonials: typeof import("../components/light-en/Testimonials.vue")['default']
export const LightEnWhyUs: typeof import("../components/light-en/WhyUs.vue")['default']
export const LightAccreditations: typeof import("../components/light/Accreditations.vue")['default']
export const LightBlog: typeof import("../components/light/Blog.vue")['default']
export const LightCTA: typeof import("../components/light/CTA.vue")['default']
export const LightFooter: typeof import("../components/light/Footer.vue")['default']
export const LightHeader: typeof import("../components/light/Header.vue")['default']
export const LightHero: typeof import("../components/light/Hero.vue")['default']
export const LightServices: typeof import("../components/light/Services.vue")['default']
export const LightTeam: typeof import("../components/light/Team.vue")['default']
export const LightTestimonials: typeof import("../components/light/Testimonials.vue")['default']
export const LightWhyUs: typeof import("../components/light/WhyUs.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyDarkEnAccreditations: LazyComponent<typeof import("../components/dark-en/Accreditations.vue")['default']>
export const LazyDarkEnBlog: LazyComponent<typeof import("../components/dark-en/Blog.vue")['default']>
export const LazyDarkEnCTA: LazyComponent<typeof import("../components/dark-en/CTA.vue")['default']>
export const LazyDarkEnFooter: LazyComponent<typeof import("../components/dark-en/Footer.vue")['default']>
export const LazyDarkEnHeader: LazyComponent<typeof import("../components/dark-en/Header.vue")['default']>
export const LazyDarkEnHero: LazyComponent<typeof import("../components/dark-en/Hero.vue")['default']>
export const LazyDarkEnServices: LazyComponent<typeof import("../components/dark-en/Services.vue")['default']>
export const LazyDarkEnTeam: LazyComponent<typeof import("../components/dark-en/Team.vue")['default']>
export const LazyDarkEnTestimonials: LazyComponent<typeof import("../components/dark-en/Testimonials.vue")['default']>
export const LazyDarkEnWhyUs: LazyComponent<typeof import("../components/dark-en/WhyUs.vue")['default']>
export const LazyDarkAccreditations: LazyComponent<typeof import("../components/dark/Accreditations.vue")['default']>
export const LazyDarkBlog: LazyComponent<typeof import("../components/dark/Blog.vue")['default']>
export const LazyDarkCTA: LazyComponent<typeof import("../components/dark/CTA.vue")['default']>
export const LazyDarkFooter: LazyComponent<typeof import("../components/dark/Footer.vue")['default']>
export const LazyDarkHeader: LazyComponent<typeof import("../components/dark/Header.vue")['default']>
export const LazyDarkHero: LazyComponent<typeof import("../components/dark/Hero.vue")['default']>
export const LazyDarkServices: LazyComponent<typeof import("../components/dark/Services.vue")['default']>
export const LazyDarkTeam: LazyComponent<typeof import("../components/dark/Team.vue")['default']>
export const LazyDarkTestimonials: LazyComponent<typeof import("../components/dark/Testimonials.vue")['default']>
export const LazyDarkWhyUs: LazyComponent<typeof import("../components/dark/WhyUs.vue")['default']>
export const LazyLightEnAccreditations: LazyComponent<typeof import("../components/light-en/Accreditations.vue")['default']>
export const LazyLightEnBlog: LazyComponent<typeof import("../components/light-en/Blog.vue")['default']>
export const LazyLightEnCTA: LazyComponent<typeof import("../components/light-en/CTA.vue")['default']>
export const LazyLightEnFooter: LazyComponent<typeof import("../components/light-en/Footer.vue")['default']>
export const LazyLightEnHeader: LazyComponent<typeof import("../components/light-en/Header.vue")['default']>
export const LazyLightEnHero: LazyComponent<typeof import("../components/light-en/Hero.vue")['default']>
export const LazyLightEnServices: LazyComponent<typeof import("../components/light-en/Services.vue")['default']>
export const LazyLightEnTeam: LazyComponent<typeof import("../components/light-en/Team.vue")['default']>
export const LazyLightEnTestimonials: LazyComponent<typeof import("../components/light-en/Testimonials.vue")['default']>
export const LazyLightEnWhyUs: LazyComponent<typeof import("../components/light-en/WhyUs.vue")['default']>
export const LazyLightAccreditations: LazyComponent<typeof import("../components/light/Accreditations.vue")['default']>
export const LazyLightBlog: LazyComponent<typeof import("../components/light/Blog.vue")['default']>
export const LazyLightCTA: LazyComponent<typeof import("../components/light/CTA.vue")['default']>
export const LazyLightFooter: LazyComponent<typeof import("../components/light/Footer.vue")['default']>
export const LazyLightHeader: LazyComponent<typeof import("../components/light/Header.vue")['default']>
export const LazyLightHero: LazyComponent<typeof import("../components/light/Hero.vue")['default']>
export const LazyLightServices: LazyComponent<typeof import("../components/light/Services.vue")['default']>
export const LazyLightTeam: LazyComponent<typeof import("../components/light/Team.vue")['default']>
export const LazyLightTestimonials: LazyComponent<typeof import("../components/light/Testimonials.vue")['default']>
export const LazyLightWhyUs: LazyComponent<typeof import("../components/light/WhyUs.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
