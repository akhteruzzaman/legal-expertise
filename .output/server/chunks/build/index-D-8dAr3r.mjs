import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$9, a as _sfc_main$8, L as LightWhyUs, b as LightServices, c as LightTeam, d as LightBlog, e as LightAccreditations, f as LightTestimonials, g as LightCTA, h as LightFooter } from './Footer-C1QRxyh4.mjs';
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
      title: "\u0645\u0643\u062A\u0628 \u0627\u0644\u0631\u064A\u0627\u0636 \u0644\u0644\u0645\u062D\u0627\u0645\u0627\u0629 | \u062E\u0628\u0631\u0629 \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0645\u0648\u062B\u0648\u0642\u0629",
      htmlAttrs: {
        lang: "ar",
        dir: "rtl"
      },
      link: [
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css" },
        { rel: "stylesheet", href: "/assets/css/light.css" }
      ],
      script: [
        { src: "https://unpkg.com/lucide@latest" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "light-version" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(ssrRenderComponent(LightWhyUs, null, null, _parent));
      _push(ssrRenderComponent(LightServices, null, null, _parent));
      _push(ssrRenderComponent(LightTeam, null, null, _parent));
      _push(ssrRenderComponent(LightBlog, null, null, _parent));
      _push(ssrRenderComponent(LightAccreditations, null, null, _parent));
      _push(ssrRenderComponent(LightTestimonials, null, null, _parent));
      _push(ssrRenderComponent(LightCTA, null, null, _parent));
      _push(ssrRenderComponent(LightFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/landing-page-5/ar/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D-8dAr3r.mjs.map
