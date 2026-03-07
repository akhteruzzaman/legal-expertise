import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2, L as LightEnWhyUs, b as LightEnServices, c as LightEnTeam, d as LightEnBlog, e as LightEnAccreditations, f as LightEnTestimonials, g as LightEnCTA, h as LightEnFooter } from "./Footer-CVP35ypU.js";
import { u as useHead } from "./_plugin-vue_export-helper-ChBMeibh.js";
import "./nuxt-link-DIEMWijX.js";
import "D:/PROJECTS/legal-expertise/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "D:/PROJECTS/legal-expertise/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "D:/PROJECTS/legal-expertise/node_modules/hookable/dist/index.mjs";
import "D:/PROJECTS/legal-expertise/node_modules/unctx/dist/index.mjs";
import "D:/PROJECTS/legal-expertise/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/PROJECTS/legal-expertise/node_modules/defu/dist/defu.mjs";
import "./virtual_public-B8MnIwJ6.js";
import "./virtual_public-xmrLAXfw.js";
import "./virtual_public-7f3uwKVF.js";
import "./virtual_public-DO9UfAUU.js";
import "swiper/vue";
import "swiper/modules";
import "./virtual_public-BwrrH5yG.js";
import "./virtual_public-CP3K-QAO.js";
import "./virtual_public-BGu3sNhM.js";
import "D:/PROJECTS/legal-expertise/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Al Riyadh Law Firm | Trusted Legal Expertise",
      htmlAttrs: {
        lang: "en",
        dir: "ltr"
      },
      link: [
        { id: "bootstrap-css", rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" },
        { rel: "stylesheet", href: "/assets/css/light-en.css" }
      ],
      script: [
        { src: "https://unpkg.com/lucide@latest" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "light-version" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(LightEnWhyUs, null, null, _parent));
      _push(ssrRenderComponent(LightEnServices, null, null, _parent));
      _push(ssrRenderComponent(LightEnTeam, null, null, _parent));
      _push(ssrRenderComponent(LightEnBlog, null, null, _parent));
      _push(ssrRenderComponent(LightEnAccreditations, null, null, _parent));
      _push(ssrRenderComponent(LightEnTestimonials, null, null, _parent));
      _push(ssrRenderComponent(LightEnCTA, null, null, _parent));
      _push(ssrRenderComponent(LightEnFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/landing-page-5/en/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-B_CsUNqg.js.map
