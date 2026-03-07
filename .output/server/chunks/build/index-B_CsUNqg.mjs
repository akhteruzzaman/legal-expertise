import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$9, a as _sfc_main$8, L as LightEnWhyUs, b as LightEnServices, c as LightEnTeam, d as LightEnBlog, e as LightEnAccreditations, f as LightEnTestimonials, g as LightEnCTA, h as LightEnFooter } from './Footer-CVP35ypU.mjs';
import { u as useHead } from './_plugin-vue_export-helper-ChBMeibh.mjs';
import './nuxt-link-DIEMWijX.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import './virtual_public-B8MnIwJ6.mjs';
import './virtual_public-xmrLAXfw.mjs';
import './virtual_public-7f3uwKVF.mjs';
import './virtual_public-DO9UfAUU.mjs';
import 'swiper/vue';
import 'swiper/modules';
import './virtual_public-BwrrH5yG.mjs';
import './virtual_public-CP3K-QAO.mjs';
import './virtual_public-BGu3sNhM.mjs';

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
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
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

export { _sfc_main as default };
//# sourceMappingURL=index-B_CsUNqg.mjs.map
