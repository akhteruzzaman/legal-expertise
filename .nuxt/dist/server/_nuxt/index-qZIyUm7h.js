import { _ as __nuxt_component_0 } from "./nuxt-link-DIEMWijX.js";
import { ref, watch, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./virtual_public-BGu3sNhM.js";
import { _ as _export_sfc, u as useHead } from "./_plugin-vue_export-helper-ChBMeibh.js";
import "D:/PROJECTS/legal-expertise/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "D:/PROJECTS/legal-expertise/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "D:/PROJECTS/legal-expertise/node_modules/hookable/dist/index.mjs";
import "D:/PROJECTS/legal-expertise/node_modules/unctx/dist/index.mjs";
import "D:/PROJECTS/legal-expertise/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/PROJECTS/legal-expertise/node_modules/defu/dist/defu.mjs";
import "D:/PROJECTS/legal-expertise/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedTheme = ref(null);
    useHead({
      title: "Al Riyadh Law Firm | Version Selection",
      link: [
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" }
      ],
      script: [
        { src: "https://unpkg.com/lucide@latest" }
      ]
    });
    const initIcons = () => {
      if ((void 0).lucide) {
        (void 0).lucide.createIcons();
      }
    };
    watch(selectedTheme, () => {
      setTimeout(initIcons, 50);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "selection-page" }, _attrs))} data-v-b204a969><div class="container text-center" data-v-b204a969><div class="logo-wrapper" data-v-b204a969><img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="main-logo" data-v-b204a969></div>`);
      if (!selectedTheme.value) {
        _push(`<div data-v-b204a969><h1 class="main-title" data-v-b204a969>Choose Your Version</h1><p class="subtitle" data-v-b204a969>Select the theme for your Legal Law experience</p><div class="row g-4 mt-4 justify-content-center" data-v-b204a969><div class="col-md-5 col-lg-4" data-v-b204a969><div class="choice-card clickable" data-v-b204a969><div class="icon-box light" data-v-b204a969><i data-lucide="sun" data-v-b204a969></i></div><div class="content" data-v-b204a969><h3 data-v-b204a969>Landing Page 1</h3><span data-v-b204a969>Light Version</span></div></div></div><div class="col-md-5 col-lg-4" data-v-b204a969><div class="choice-card clickable" data-v-b204a969><div class="icon-box light" data-v-b204a969><i data-lucide="sun" data-v-b204a969></i></div><div class="content" data-v-b204a969><h3 data-v-b204a969>Landing Page 2</h3><span data-v-b204a969>Light Version</span></div></div></div><div class="col-md-5 col-lg-4" data-v-b204a969><div class="choice-card clickable" data-v-b204a969><div class="icon-box light" data-v-b204a969><i data-lucide="sun" data-v-b204a969></i></div><div class="content" data-v-b204a969><h3 data-v-b204a969>Landing Page 3</h3><span data-v-b204a969>Light Version</span></div></div></div><div class="col-md-5 col-lg-4" data-v-b204a969><div class="choice-card clickable" data-v-b204a969><div class="icon-box light" data-v-b204a969><i data-lucide="sun" data-v-b204a969></i></div><div class="content" data-v-b204a969><h3 data-v-b204a969>Landing Page 4</h3><span data-v-b204a969>Light Version</span></div></div></div><div class="col-md-5 col-lg-4" data-v-b204a969><div class="choice-card clickable" data-v-b204a969><div class="icon-box light" data-v-b204a969><i data-lucide="sun" data-v-b204a969></i></div><div class="content" data-v-b204a969><h3 data-v-b204a969>Landing Page 5</h3><span data-v-b204a969>Light Version</span></div></div></div><div class="col-md-5 col-lg-4" data-v-b204a969><div class="choice-card dark clickable" data-v-b204a969><div class="icon-box dark" data-v-b204a969><i data-lucide="moon" data-v-b204a969></i></div><div class="content" data-v-b204a969><h3 data-v-b204a969>Landing Page Dark</h3><span data-v-b204a969>Dark Version</span></div></div></div></div></div>`);
      } else {
        _push(`<div data-v-b204a969><h1 class="main-title" data-v-b204a969>${ssrInterpolate(selectedTheme.value === "landing-page-5" || selectedTheme.value === "landing-page-4" || selectedTheme.value === "landing-page-3" || selectedTheme.value === "landing-page-1" || selectedTheme.value === "landing-page-2" ? "Light Version" : "Dark Version")}</h1><p class="subtitle" data-v-b204a969>Select your preferred language</p><div class="row g-4 mt-4 justify-content-center" data-v-b204a969><div class="col-md-5 col-lg-4" data-v-b204a969>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/${selectedTheme.value}/ar`,
          class: "choice-card"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="icon-box gold" data-v-b204a969${_scopeId}><i data-lucide="languages" data-v-b204a969${_scopeId}></i></div><div class="content" data-v-b204a969${_scopeId}><h3 data-v-b204a969${_scopeId}>العربية</h3><span data-v-b204a969${_scopeId}>Arabic</span></div>`);
            } else {
              return [
                createVNode("div", { class: "icon-box gold" }, [
                  createVNode("i", { "data-lucide": "languages" })
                ]),
                createVNode("div", { class: "content" }, [
                  createVNode("h3", null, "العربية"),
                  createVNode("span", null, "Arabic")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="col-md-5 col-lg-4" data-v-b204a969>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/${selectedTheme.value}/en`,
          class: "choice-card"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="icon-box gold" data-v-b204a969${_scopeId}><i data-lucide="languages" data-v-b204a969${_scopeId}></i></div><div class="content" data-v-b204a969${_scopeId}><h3 data-v-b204a969${_scopeId}>English</h3><span data-v-b204a969${_scopeId}>English</span></div>`);
            } else {
              return [
                createVNode("div", { class: "icon-box gold" }, [
                  createVNode("i", { "data-lucide": "languages" })
                ]),
                createVNode("div", { class: "content" }, [
                  createVNode("h3", null, "English"),
                  createVNode("span", null, "English")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="mt-5" data-v-b204a969><button class="btn-back" data-v-b204a969><i data-lucide="arrow-left" data-v-b204a969></i> Back to Versions </button></div></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b204a969"]]);
export {
  index as default
};
//# sourceMappingURL=index-qZIyUm7h.js.map
