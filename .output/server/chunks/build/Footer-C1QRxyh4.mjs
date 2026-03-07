import { _ as __nuxt_component_0 } from './nuxt-link-DIEMWijX.mjs';
import { mergeProps, withCtx, createVNode, unref, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-B8MnIwJ6.mjs';
import { _ as _imports_0$1 } from './virtual_public-xmrLAXfw.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-ChBMeibh.mjs';
import { _ as _imports_0$2, a as _imports_1, b as _imports_2, c as _imports_3, d as _imports_4, e as _imports_5 } from './virtual_public-7f3uwKVF.mjs';
import { _ as _imports_0$1$1, a as _imports_0$3, b as _imports_2$1 } from './virtual_public-DO9UfAUU.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import { _ as _imports_1$1 } from './virtual_public-BwrrH5yG.mjs';
import { _ as _imports_0$4, a as _imports_1$2, b as _imports_2$2 } from './virtual_public-CP3K-QAO.mjs';
import { _ as _imports_0$5 } from './virtual_public-BGu3sNhM.mjs';

const _sfc_main$9 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar navbar-expand-lg" }, _attrs))}><div class="container">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "navbar-brand",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Logo"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav mx-auto"><li class="nav-item"><a class="nav-link active" href="#">\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629</a></li><li class="nav-item"><a class="nav-link" href="#">\u0645\u0646 \u0646\u062D\u0646</a></li><li class="nav-item"><a class="nav-link" href="#">\u062E\u062F\u0645\u0627\u062A\u0646\u0627</a></li><li class="nav-item"><a class="nav-link" href="#">\u0641\u0631\u064A\u0642 \u0627\u0644\u0639\u0645\u0644</a></li><li class="nav-item"><a class="nav-link" href="#">\u0627\u0644\u0645\u062F\u0648\u0646\u0629</a></li><li class="nav-item"><a class="nav-link" href="#">\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627</a></li></ul><div class="d-flex"><a href="#" class="btn btn-consult">\u0637\u0644\u0628 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0642\u0627\u0646\u0648\u0646\u064A\u0629</a></div></div></div></nav>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/Header.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "Hero",
  __ssrInlineRender: true,
  props: {
    showPlayButton: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero-section" }, _attrs))}><div class="container"><div class="row align-items-center gx-lg-5"><div class="col-lg-5 hero-content ps-lg-0"><h1 class="hero-title">\u062E\u0628\u0631\u0629 \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0645\u0648\u062B\u0648\u0642\u0629 \u0644\u062D\u0645\u0627\u064A\u0629 \u062D\u0642\u0648\u0642\u0643</h1><p class="hero-subtitle"> \u0646\u0642\u062F\u0645 \u062E\u062F\u0645\u0627\u062A \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629 \u0644\u0644\u0623\u0641\u0631\u0627\u062F \u0648\u0627\u0644\u0634\u0631\u0643\u0627\u062A\u060C \u062A\u0639\u062A\u0645\u062F \u0639\u0644\u0649 \u0627\u0644\u062E\u0628\u0631\u0629\u060C \u0627\u0644\u0646\u0632\u0627\u0647\u0629\u060C \u0648\u0627\u0644\u0627\u0644\u062A\u0632\u0627\u0645 \u0627\u0644\u062A\u0627\u0645 \u0628\u0623\u0639\u0644\u0649 \u0627\u0644\u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u0645\u0647\u0646\u064A\u0629. </p><a href="#" class="btn-hero">\u0637\u0644\u0628 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0642\u0627\u0646\u0648\u0646\u064A\u0629</a></div><div class="col-lg-7"><div class="hero-img-container"><img${ssrRenderAttr("src", _imports_0$1)} alt="Legal Expertise" class="hero-img">`);
      if (__props.showPlayButton) {
        _push(`<div class="play-button"><i data-lucide="play"></i></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/Hero.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "why-us-section" }, _attrs))} data-v-b4d5e5a0><div class="container" data-v-b4d5e5a0><h2 class="section-title" data-v-b4d5e5a0>\u0644\u0645\u0627\u0630\u0627 \u064A\u062B\u0642 \u0628\u0646\u0627 \u0639\u0645\u0644\u0627\u0624\u0646\u0627</h2><div class="row g-4" data-v-b4d5e5a0><div class="col-lg-3 col-md-6" data-v-b4d5e5a0><div class="feature-card" data-v-b4d5e5a0><div class="feature-icon" data-v-b4d5e5a0><i data-lucide="clipboard-list" data-v-b4d5e5a0></i></div><h3 class="feature-title" data-v-b4d5e5a0>\u0645\u062A\u0627\u0628\u0639\u0629 \u062F\u0642\u064A\u0642\u0629 \u0644\u0644\u0642\u0636\u0627\u064A\u0627</h3><p class="feature-text" data-v-b4d5e5a0> \u0646\u062D\u0631\u0635 \u0639\u0644\u0649 \u0645\u062A\u0627\u0628\u0639\u0629 \u062C\u0645\u064A\u0639 \u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u062E\u0637\u0648\u0629 \u0628\u062E\u0637\u0648\u0629 \u0648\u0625\u0628\u0642\u0627\u0621 \u0639\u0645\u0644\u0627\u0626\u0646\u0627 \u0639\u0644\u0649 \u0627\u0637\u0644\u0627\u0639 \u062F\u0627\u0626\u0645. </p></div></div><div class="col-lg-3 col-md-6" data-v-b4d5e5a0><div class="feature-card" data-v-b4d5e5a0><div class="feature-icon" data-v-b4d5e5a0><i data-lucide="gavel" data-v-b4d5e5a0></i></div><h3 class="feature-title" data-v-b4d5e5a0>\u062E\u0628\u0631\u0629 \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0645\u062A\u062E\u0635\u0635\u0629</h3><p class="feature-text" data-v-b4d5e5a0> \u0641\u0631\u064A\u0642 \u0645\u0646 \u0627\u0644\u0645\u062D\u0627\u0645\u064A\u0646 \u0648\u0627\u0644\u0645\u0633\u062A\u0634\u0627\u0631\u064A\u0646 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u064A\u0646 \u0630\u0648\u064A \u062E\u0628\u0631\u0629 \u0648\u0627\u0633\u0639\u0629 \u0641\u064A \u0645\u062E\u062A\u0644\u0641 \u0627\u0644\u0645\u062C\u0627\u0644\u0627\u062A \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629. </p></div></div><div class="col-lg-3 col-md-6" data-v-b4d5e5a0><div class="feature-card" data-v-b4d5e5a0><div class="feature-icon" data-v-b4d5e5a0><i data-lucide="shield" data-v-b4d5e5a0></i></div><h3 class="feature-title" data-v-b4d5e5a0>\u0633\u0631\u064A\u0629 \u0648\u0645\u0647\u0646\u064A\u0629 \u062A\u0627\u0645\u0629</h3><p class="feature-text" data-v-b4d5e5a0> \u0646\u0644\u062A\u0632\u0645 \u0628\u0623\u0639\u0644\u0649 \u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u0633\u0631\u064A\u0629 \u0627\u0644\u0645\u0647\u0646\u064A\u0629 \u0648\u0627\u0644\u0623\u062E\u0644\u0627\u0642 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0641\u064A \u062C\u0645\u064A\u0639 \u0627\u0644\u0642\u0636\u0627\u064A\u0627. </p></div></div><div class="col-lg-3 col-md-6" data-v-b4d5e5a0><div class="feature-card" data-v-b4d5e5a0><div class="feature-icon" data-v-b4d5e5a0><i data-lucide="user-round-check" data-v-b4d5e5a0></i></div><h3 class="feature-title" data-v-b4d5e5a0>\u062A\u0645\u062B\u064A\u0644 \u0642\u0627\u0646\u0648\u0646\u064A \u0642\u0648\u064A</h3><p class="feature-text" data-v-b4d5e5a0> \u0646\u062F\u0627\u0641\u0639 \u0639\u0646 \u062D\u0642\u0648\u0642 \u0639\u0645\u0644\u0627\u0626\u0646\u0627 \u0623\u0645\u0627\u0645 \u0627\u0644\u062C\u0647\u0627\u062A \u0627\u0644\u0642\u0636\u0627\u0626\u064A\u0629 \u0628\u0643\u0644 \u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629 \u0648\u0643\u0641\u0627\u0621\u0629. </p></div></div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/WhyUs.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const LightWhyUs = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-b4d5e5a0"]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-section" }, _attrs))}><div class="container"><div class="mb-5"><h2 class="section-title mb-2">\u062E\u062F\u0645\u0627\u062A\u0646\u0627 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629</h2><p class="section-subtitle text-muted">\u0646\u0642\u062F\u0645 \u062E\u062F\u0645\u0627\u062A \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0645\u0628\u0646\u064A\u0629 \u0639\u0644\u0649 \u0627\u0644\u062E\u0628\u0631\u0629 \u0648\u0627\u0644\u0627\u0644\u062A\u0632\u0627\u0645\u060C \u0645\u0639 \u062D\u0644\u0648\u0644 \u0648\u0627\u0636\u062D\u0629 \u0648\u0645\u0648\u062B\u0648\u0642\u0629 \u062A\u0646\u0627\u0633\u0628 \u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A \u0639\u0645\u0644\u0627\u0626\u0646\u0627.</p></div><div class="row align-items-center staggered-row flex-lg-row-reverse"><div class="col-lg-6"><img${ssrRenderAttr("src", _imports_0$2)} alt="\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629" class="img-fluid rounded-4 shadow service-img"></div><div class="col-lg-6"><div class="service-content p-lg-5"><h3 class="service-item-title mb-3">\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629</h3><p class="service-description text-muted mb-4"> \u062A\u0642\u062F\u064A\u0645 \u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u062F\u0642\u064A\u0642\u0629 \u0648\u0645\u0628\u0646\u064A\u0629 \u0639\u0644\u0649 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0645\u0639\u062A\u0645\u062F\u0629\u060C \u062A\u0633\u0627\u0639\u062F \u0627\u0644\u0623\u0641\u0631\u0627\u062F \u0648\u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0639\u0644\u0649 \u0627\u062A\u062E\u0627\u0630 \u0642\u0631\u0627\u0631\u0627\u062A \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0635\u062D\u064A\u062D\u0629 \u0648\u0645\u062F\u0631\u0648\u0633\u0629. </p><a href="#" class="btn-read-more">\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 <i data-lucide="chevron-left" class="ms-1"></i></a></div></div></div><div class="row align-items-center staggered-row"><div class="col-lg-6"><img${ssrRenderAttr("src", _imports_1)} alt="\u0627\u0644\u062A\u0642\u0627\u0636\u064A \u0648\u0627\u0644\u062A\u0645\u062B\u064A\u0644 \u0623\u0645\u0627\u0645 \u0627\u0644\u0645\u062D\u0627\u0643\u0645" class="img-fluid rounded-4 shadow service-img"></div><div class="col-lg-6"><div class="service-content p-lg-5"><h3 class="service-item-title mb-3">\u0627\u0644\u062A\u0642\u0627\u0636\u064A \u0648\u0627\u0644\u062A\u0645\u062B\u064A\u0644 \u0623\u0645\u0627\u0645 \u0627\u0644\u0645\u062D\u0627\u0643\u0645</h3><p class="service-description text-muted mb-4"> \u062A\u0645\u062B\u064A\u0644 \u0642\u0627\u0646\u0648\u0646\u064A \u0627\u062D\u062A\u0631\u0627\u0641\u064A \u0623\u0645\u0627\u0645 \u0645\u062E\u062A\u0644\u0641 \u0627\u0644\u062C\u0647\u0627\u062A \u0627\u0644\u0642\u0636\u0627\u0626\u064A\u0629\u060C \u0645\u0639 \u0645\u062A\u0627\u0628\u0639\u0629 \u0634\u0627\u0645\u0644\u0629 \u0644\u0644\u0642\u0636\u0627\u064A\u0627 \u0641\u064A \u062C\u0645\u064A\u0639 \u0645\u0631\u0627\u062D\u0644\u0647\u0627 \u062D\u062A\u0649 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0623\u0641\u0636\u0644 \u0627\u0644\u0646\u062A\u0627\u0626\u062C \u0627\u0644\u0645\u0645\u0643\u0646\u0629. </p><a href="#" class="btn-read-more">\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 <i data-lucide="chevron-left" class="ms-1"></i></a></div></div></div><div class="row align-items-center staggered-row flex-lg-row-reverse"><div class="col-lg-6"><img${ssrRenderAttr("src", _imports_2)} alt="\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0648\u0627\u0644\u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u062A\u062C\u0627\u0631\u064A" class="img-fluid rounded-4 shadow service-img"></div><div class="col-lg-6"><div class="service-content p-lg-5"><h3 class="service-item-title mb-3">\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0648\u0627\u0644\u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u062A\u062C\u0627\u0631\u064A</h3><p class="service-description text-muted mb-4"> \u062A\u0642\u062F\u064A\u0645 \u062F\u0639\u0645 \u0642\u0627\u0646\u0648\u0646\u064A \u0645\u062A\u0643\u0627\u0645\u0644 \u0644\u0644\u0634\u0631\u0643\u0627\u062A \u064A\u0634\u0645\u0644 \u0627\u0644\u062A\u0623\u0633\u064A\u0633\u060C \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0646\u0632\u0627\u0639\u0627\u062A\u060C \u0648\u062A\u0646\u0638\u064A\u0645 \u0627\u0644\u0639\u0644\u0627\u0642\u0627\u062A \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629 \u0628\u0645\u0627 \u064A\u0636\u0645\u0646 \u0627\u0644\u0627\u0645\u062A\u062B\u0627\u0644 \u0648\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0645\u0635\u0627\u0644\u062D. </p><a href="#" class="btn-read-more">\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 <i data-lucide="chevron-left" class="ms-1"></i></a></div></div></div><div class="row align-items-center staggered-row"><div class="col-lg-6"><img${ssrRenderAttr("src", _imports_3)} alt="\u0635\u064A\u0627\u063A\u0629 \u0648\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0639\u0642\u0648\u062F" class="img-fluid rounded-4 shadow service-img"></div><div class="col-lg-6"><div class="service-content p-lg-5"><h3 class="service-item-title mb-3">\u0635\u064A\u0627\u063A\u0629 \u0648\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0639\u0642\u0648\u062F</h3><p class="service-description text-muted mb-4"> \u0625\u0639\u062F\u0627\u062F \u0648\u0635\u064A\u0627\u063A\u0629 \u0648\u0645\u0631\u0627\u062C\u0639\u0629 \u0643\u0627\u0641\u0629 \u0627\u0644\u0639\u0642\u0648\u062F \u0648\u0627\u0644\u0627\u062A\u0641\u0627\u0642\u064A\u0627\u062A \u0628\u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629\u060C \u0645\u0639 \u0627\u0644\u062A\u0631\u0643\u064A\u0632 \u0639\u0644\u0649 \u0648\u0636\u0648\u062D \u0627\u0644\u0628\u0646\u0648\u062F \u0648\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u062D\u0642\u0648\u0642 \u0648\u062A\u0642\u0644\u064A\u0644 \u0627\u0644\u0645\u062E\u0627\u0637\u0631 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629. </p><a href="#" class="btn-read-more">\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 <i data-lucide="chevron-left" class="ms-1"></i></a></div></div></div><div class="row align-items-center staggered-row flex-lg-row-reverse"><div class="col-lg-6"><img${ssrRenderAttr("src", _imports_4)} alt="\u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0645\u062F\u0646\u064A\u0629 \u0648\u0627\u0644\u062C\u0646\u0627\u0626\u064A\u0629" class="img-fluid rounded-4 shadow service-img"></div><div class="col-lg-6"><div class="service-content p-lg-5"><h3 class="service-item-title mb-3">\u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0645\u062F\u0646\u064A\u0629 \u0648\u0627\u0644\u062C\u0646\u0627\u0626\u064A\u0629</h3><p class="service-description text-muted mb-4"> \u0627\u0644\u062A\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0645\u062F\u0646\u064A\u0629 \u0648\u0627\u0644\u062C\u0646\u0627\u0626\u064A\u0629 \u0628\u0643\u0641\u0627\u0621\u0629 \u0639\u0627\u0644\u064A\u0629\u060C \u0645\u0639 \u0627\u0644\u0627\u0644\u062A\u0632\u0627\u0645 \u0628\u0627\u0644\u0633\u0631\u064A\u0629 \u0627\u0644\u062A\u0627\u0645\u0629 \u0648\u0627\u0644\u062F\u0641\u0627\u0639 \u0639\u0646 \u062D\u0642\u0648\u0642 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0648\u0641\u0642 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0648\u0627\u0644\u0642\u0648\u0627\u0646\u064A\u0646. </p><a href="#" class="btn-read-more">\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 <i data-lucide="chevron-left" class="ms-1"></i></a></div></div></div><div class="row align-items-center staggered-row"><div class="col-lg-6"><img${ssrRenderAttr("src", _imports_5)} alt="\u0627\u0644\u062A\u062D\u0643\u064A\u0645 \u0648\u062A\u0633\u0648\u064A\u0629 \u0627\u0644\u0646\u0632\u0627\u0639\u0627\u062A" class="img-fluid rounded-4 shadow service-img"></div><div class="col-lg-6"><div class="service-content p-lg-5"><h3 class="service-item-title mb-3">\u0627\u0644\u062A\u062D\u0643\u064A\u0645 \u0648\u062A\u0633\u0648\u064A\u0629 \u0627\u0644\u0646\u0632\u0627\u0639\u0627\u062A</h3><p class="service-description text-muted mb-4"> \u062A\u0633\u0648\u064A\u0629 \u0627\u0644\u0646\u0632\u0627\u0639\u0627\u062A \u0628\u0648\u0633\u0627\u0626\u0644 \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0628\u062F\u064A\u0644\u0629 \u0645\u062B\u0644 \u0627\u0644\u062A\u062D\u0643\u064A\u0645 \u0648\u0627\u0644\u0648\u0633\u0627\u0637\u0629\u060C \u0628\u0645\u0627 \u064A\u0633\u0627\u0647\u0645 \u0641\u064A \u062A\u0648\u0641\u064A\u0631 \u0627\u0644\u0648\u0642\u062A \u0648\u0627\u0644\u062A\u0643\u0627\u0644\u064A\u0641 \u0648\u062A\u062D\u0642\u064A\u0642 \u062D\u0644\u0648\u0644 \u0639\u0627\u062F\u0644\u0629. </p><a href="#" class="btn-read-more">\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 <i data-lucide="chevron-left" class="ms-1"></i></a></div></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/Services.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const LightServices = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$5 = {
  __name: "Team",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "team-section" }, _attrs))} data-v-70ebec3e><div class="container" data-v-70ebec3e><div class="mb-5" data-v-70ebec3e><h2 class="section-title mb-2" data-v-70ebec3e>\u0641\u0631\u064A\u0642 \u0627\u0644\u0639\u0645\u0644</h2><p class="section-subtitle text-muted" data-v-70ebec3e>\u064A\u0636\u0645 \u0645\u0643\u062A\u0628\u0646\u0627 \u0646\u062E\u0628\u0629 \u0645\u0646 \u0627\u0644\u0645\u062D\u0627\u0645\u064A\u0646 \u0648\u0627\u0644\u0645\u0633\u062A\u0634\u0627\u0631\u064A\u0646 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u064A\u0646 \u0627\u0644\u0630\u064A\u0646 \u064A\u0639\u0645\u0644\u0648\u0646 \u0628\u0631\u0648\u062D \u0627\u0644\u0641\u0631\u064A\u0642 \u0644\u062A\u0642\u062F\u064A\u0645 \u0623\u0641\u0636\u0644 \u0627\u0644\u062D\u0644\u0648\u0644 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0644\u0639\u0645\u0644\u0627\u0626\u0646\u0627.</p></div><div class="swiper-container-wrapper" data-v-70ebec3e>`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: [unref(Autoplay)],
        "slides-per-view": 1,
        "space-between": 30,
        dir: "rtl",
        loop: true,
        autoplay: {
          delay: 3e3,
          disableOnInteraction: false
        },
        breakpoints: {
          "640": { slidesPerView: 2 },
          "992": { slidesPerView: 3 },
          "1200": { slidesPerView: 4 }
        },
        class: "team-swiper"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="team-card" data-v-70ebec3e${_scopeId2}><div class="team-img-wrapper" data-v-70ebec3e${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1$1)} alt="\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u0639\u0628\u062F\u0627\u0644\u0644\u0647 \u0628\u0646 \u0645\u062D\u0645\u062F \u0627\u0644\u0642\u062D\u0637\u0627\u0646\u064A" data-v-70ebec3e${_scopeId2}></div><h4 class="team-member-name" data-v-70ebec3e${_scopeId2}>\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u0639\u0628\u062F\u0627\u0644\u0644\u0647 \u0628\u0646 \u0645\u062D\u0645\u062F \u0627\u0644\u0642\u062D\u0637\u0627\u0646\u064A</h4><p class="team-member-role" data-v-70ebec3e${_scopeId2}>\u0645\u062D\u0627\u0645 \u0648\u0645\u0633\u062A\u0634\u0627\u0631 \u0642\u0627\u0646\u0648\u0646\u064A \u0645\u062A\u062E\u0635\u0635 \u0641\u064A \u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629 \u0648\u0635\u064A\u0627\u063A\u0629 \u0627\u0644\u0639\u0642\u0648\u062F\u060C \u064A\u062A\u0645\u062A\u0639 \u0628\u062E\u0628\u0631\u0629 \u0639\u0645\u0644\u064A\u0629 \u0641\u064A \u062A\u0645\u062B\u064A\u0644 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0648\u0627\u0644\u0623\u0641\u0631\u0627\u062F.</p><a href="#" class="team-link" data-v-70ebec3e${_scopeId2}>\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 <i data-lucide="chevron-left" data-v-70ebec3e${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$1$1,
                          alt: "\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u0639\u0628\u062F\u0627\u0644\u0644\u0647 \u0628\u0646 \u0645\u062D\u0645\u062F \u0627\u0644\u0642\u062D\u0637\u0627\u0646\u064A"
                        })
                      ]),
                      createVNode("h4", { class: "team-member-name" }, "\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u0639\u0628\u062F\u0627\u0644\u0644\u0647 \u0628\u0646 \u0645\u062D\u0645\u062F \u0627\u0644\u0642\u062D\u0637\u0627\u0646\u064A"),
                      createVNode("p", { class: "team-member-role" }, "\u0645\u062D\u0627\u0645 \u0648\u0645\u0633\u062A\u0634\u0627\u0631 \u0642\u0627\u0646\u0648\u0646\u064A \u0645\u062A\u062E\u0635\u0635 \u0641\u064A \u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629 \u0648\u0635\u064A\u0627\u063A\u0629 \u0627\u0644\u0639\u0642\u0648\u062F\u060C \u064A\u062A\u0645\u062A\u0639 \u0628\u062E\u0628\u0631\u0629 \u0639\u0645\u0644\u064A\u0629 \u0641\u064A \u062A\u0645\u062B\u064A\u0644 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0648\u0627\u0644\u0623\u0641\u0631\u0627\u062F."),
                      createVNode("a", {
                        href: "#",
                        class: "team-link"
                      }, [
                        createTextVNode("\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 "),
                        createVNode("i", { "data-lucide": "chevron-left" })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="team-card" data-v-70ebec3e${_scopeId2}><div class="team-img-wrapper" data-v-70ebec3e${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1$1)} alt="\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u0641\u0647\u062F \u0628\u0646 \u0633\u0639\u0648\u062F \u0627\u0644\u0639\u062A\u064A\u0628\u064A" data-v-70ebec3e${_scopeId2}></div><h4 class="team-member-name" data-v-70ebec3e${_scopeId2}>\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u0641\u0647\u062F \u0628\u0646 \u0633\u0639\u0648\u062F \u0627\u0644\u0639\u062A\u064A\u0628\u064A</h4><p class="team-member-role" data-v-70ebec3e${_scopeId2}>\u0645\u062E\u062A\u0635 \u0641\u064A \u0627\u0644\u062A\u0642\u0627\u0636\u064A \u0648\u0627\u0644\u062A\u0645\u062B\u064A\u0644 \u0623\u0645\u0627\u0645 \u0627\u0644\u0645\u062D\u0627\u0643\u0645\u060C \u0645\u0639 \u062E\u0628\u0631\u0629 \u0641\u064A \u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0645\u062F\u0646\u064A\u0629 \u0648\u0627\u0644\u0646\u0632\u0627\u0639\u0627\u062A \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0627\u0644\u0645\u062E\u062A\u0644\u0641\u0629.</p><a href="#" class="team-link" data-v-70ebec3e${_scopeId2}>\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 <i data-lucide="chevron-left" data-v-70ebec3e${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$1$1,
                          alt: "\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u0641\u0647\u062F \u0628\u0646 \u0633\u0639\u0648\u062F \u0627\u0644\u0639\u062A\u064A\u0628\u064A"
                        })
                      ]),
                      createVNode("h4", { class: "team-member-name" }, "\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u0641\u0647\u062F \u0628\u0646 \u0633\u0639\u0648\u062F \u0627\u0644\u0639\u062A\u064A\u0628\u064A"),
                      createVNode("p", { class: "team-member-role" }, "\u0645\u062E\u062A\u0635 \u0641\u064A \u0627\u0644\u062A\u0642\u0627\u0636\u064A \u0648\u0627\u0644\u062A\u0645\u062B\u064A\u0644 \u0623\u0645\u0627\u0645 \u0627\u0644\u0645\u062D\u0627\u0643\u0645\u060C \u0645\u0639 \u062E\u0628\u0631\u0629 \u0641\u064A \u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0645\u062F\u0646\u064A\u0629 \u0648\u0627\u0644\u0646\u0632\u0627\u0639\u0627\u062A \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0627\u0644\u0645\u062E\u062A\u0644\u0641\u0629."),
                      createVNode("a", {
                        href: "#",
                        class: "team-link"
                      }, [
                        createTextVNode("\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 "),
                        createVNode("i", { "data-lucide": "chevron-left" })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="team-card" data-v-70ebec3e${_scopeId2}><div class="team-img-wrapper" data-v-70ebec3e${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1$1)} alt="\u0627\u0644\u0645\u0633\u062A\u0634\u0627\u0631 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A \u0623\u062D\u0645\u062F \u0628\u0646 \u062E\u0627\u0644\u062F \u0627\u0644\u062D\u0631\u0628\u064A" data-v-70ebec3e${_scopeId2}></div><h4 class="team-member-name" data-v-70ebec3e${_scopeId2}>\u0627\u0644\u0645\u0633\u062A\u0634\u0627\u0631 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A \u0623\u062D\u0645\u062F \u0628\u0646 \u062E\u0627\u0644\u062F \u0627\u0644\u062D\u0631\u0628\u064A</h4><p class="team-member-role" data-v-70ebec3e${_scopeId2}>\u0645\u0633\u062A\u0634\u0627\u0631 \u0642\u0627\u0646\u0648\u0646\u064A \u0641\u064A \u0634\u0624\u0648\u0646 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0648\u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629\u060C \u064A\u0642\u062F\u0645 \u062D\u0644\u0648\u0644\u0627\u064B \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0645\u062F\u0631\u0648\u0633\u0629 \u062A\u062F\u0639\u0645 \u0646\u0645\u0648 \u0627\u0644\u0623\u0639\u0645\u0627\u0644.</p><a href="#" class="team-link" data-v-70ebec3e${_scopeId2}>\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 <i data-lucide="chevron-left" data-v-70ebec3e${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$1$1,
                          alt: "\u0627\u0644\u0645\u0633\u062A\u0634\u0627\u0631 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A \u0623\u062D\u0645\u062F \u0628\u0646 \u062E\u0627\u0644\u062F \u0627\u0644\u062D\u0631\u0628\u064A"
                        })
                      ]),
                      createVNode("h4", { class: "team-member-name" }, "\u0627\u0644\u0645\u0633\u062A\u0634\u0627\u0631 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A \u0623\u062D\u0645\u062F \u0628\u0646 \u062E\u0627\u0644\u062F \u0627\u0644\u062D\u0631\u0628\u064A"),
                      createVNode("p", { class: "team-member-role" }, "\u0645\u0633\u062A\u0634\u0627\u0631 \u0642\u0627\u0646\u0648\u0646\u064A \u0641\u064A \u0634\u0624\u0648\u0646 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0648\u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629\u060C \u064A\u0642\u062F\u0645 \u062D\u0644\u0648\u0644\u0627\u064B \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0645\u062F\u0631\u0648\u0633\u0629 \u062A\u062F\u0639\u0645 \u0646\u0645\u0648 \u0627\u0644\u0623\u0639\u0645\u0627\u0644."),
                      createVNode("a", {
                        href: "#",
                        class: "team-link"
                      }, [
                        createTextVNode("\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 "),
                        createVNode("i", { "data-lucide": "chevron-left" })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="team-card" data-v-70ebec3e${_scopeId2}><div class="team-img-wrapper" data-v-70ebec3e${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1$1)} alt="\u0627\u0644\u0645\u062D\u0627\u0645\u064A" data-v-70ebec3e${_scopeId2}></div><h4 class="team-member-name" data-v-70ebec3e${_scopeId2}>\u0627\u0644\u0645\u062D\u0627\u0645\u064A</h4><p class="team-member-role" data-v-70ebec3e${_scopeId2}>\u0645\u062E\u062A\u0635 \u0641\u064A \u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0645\u062F\u0646\u064A\u0629\u060C \u0645\u0639 \u062E\u0628\u0631\u0629 \u0641\u064A \u0627\u0644\u062F\u0641\u0627\u0639 \u0639\u0646 \u062D\u0642\u0648\u0642 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0648\u0641\u0642 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0648\u0627\u0644\u0642\u0648\u0627\u0646\u064A\u0646.</p><a href="#" class="team-link" data-v-70ebec3e${_scopeId2}>\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 <i data-lucide="chevron-left" data-v-70ebec3e${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$1$1,
                          alt: "\u0627\u0644\u0645\u062D\u0627\u0645\u064A"
                        })
                      ]),
                      createVNode("h4", { class: "team-member-name" }, "\u0627\u0644\u0645\u062D\u0627\u0645\u064A"),
                      createVNode("p", { class: "team-member-role" }, "\u0645\u062E\u062A\u0635 \u0641\u064A \u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0645\u062F\u0646\u064A\u0629\u060C \u0645\u0639 \u062E\u0628\u0631\u0629 \u0641\u064A \u0627\u0644\u062F\u0641\u0627\u0639 \u0639\u0646 \u062D\u0642\u0648\u0642 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0648\u0641\u0642 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0648\u0627\u0644\u0642\u0648\u0627\u0646\u064A\u0646."),
                      createVNode("a", {
                        href: "#",
                        class: "team-link"
                      }, [
                        createTextVNode("\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 "),
                        createVNode("i", { "data-lucide": "chevron-left" })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="team-card" data-v-70ebec3e${_scopeId2}><div class="team-img-wrapper" data-v-70ebec3e${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1$1)} alt="\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u062E\u0627\u0644\u062F \u0628\u0646 \u0648\u0644\u064A\u062F" data-v-70ebec3e${_scopeId2}></div><h4 class="team-member-name" data-v-70ebec3e${_scopeId2}>\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u062E\u0627\u0644\u062F \u0628\u0646 \u0648\u0644\u064A\u062F</h4><p class="team-member-role" data-v-70ebec3e${_scopeId2}>\u0645\u062A\u062E\u0635\u0635 \u0641\u064A \u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0623\u062D\u0648\u0627\u0644 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0648\u0627\u0644\u0645\u0648\u0627\u0631\u064A\u062B\u060C \u0628\u062E\u0628\u0631\u0629 \u0648\u0627\u0633\u0639\u0629 \u0641\u064A \u0627\u0644\u062A\u0631\u0627\u0641\u0639 \u0623\u0645\u0627\u0645 \u0645\u062D\u0627\u0643\u0645 \u0627\u0644\u0623\u062D\u0648\u0627\u0644 \u0627\u0644\u0634\u062E\u0635\u064A\u0629.</p><a href="#" class="team-link" data-v-70ebec3e${_scopeId2}>\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 <i data-lucide="chevron-left" data-v-70ebec3e${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$1$1,
                          alt: "\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u062E\u0627\u0644\u062F \u0628\u0646 \u0648\u0644\u064A\u062F"
                        })
                      ]),
                      createVNode("h4", { class: "team-member-name" }, "\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u062E\u0627\u0644\u062F \u0628\u0646 \u0648\u0644\u064A\u062F"),
                      createVNode("p", { class: "team-member-role" }, "\u0645\u062A\u062E\u0635\u0635 \u0641\u064A \u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0623\u062D\u0648\u0627\u0644 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0648\u0627\u0644\u0645\u0648\u0627\u0631\u064A\u062B\u060C \u0628\u062E\u0628\u0631\u0629 \u0648\u0627\u0633\u0639\u0629 \u0641\u064A \u0627\u0644\u062A\u0631\u0627\u0641\u0639 \u0623\u0645\u0627\u0645 \u0645\u062D\u0627\u0643\u0645 \u0627\u0644\u0623\u062D\u0648\u0627\u0644 \u0627\u0644\u0634\u062E\u0635\u064A\u0629."),
                      createVNode("a", {
                        href: "#",
                        class: "team-link"
                      }, [
                        createTextVNode("\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 "),
                        createVNode("i", { "data-lucide": "chevron-left" })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="team-card" data-v-70ebec3e${_scopeId2}><div class="team-img-wrapper" data-v-70ebec3e${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1$1)} alt="\u0627\u0644\u0645\u0633\u062A\u0634\u0627\u0631\u0629 \u0646\u0648\u0631\u0629 \u0639\u0628\u062F\u0627\u0644\u0639\u0632\u064A\u0632" data-v-70ebec3e${_scopeId2}></div><h4 class="team-member-name" data-v-70ebec3e${_scopeId2}>\u0627\u0644\u0645\u0633\u062A\u0634\u0627\u0631\u0629 \u0646\u0648\u0631\u0629 \u0639\u0628\u062F\u0627\u0644\u0639\u0632\u064A\u0632</h4><p class="team-member-role" data-v-70ebec3e${_scopeId2}>\u062E\u0628\u064A\u0631\u0629 \u0641\u064A \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0639\u0645\u0627\u0644\u064A\u0629 \u0648\u062D\u0645\u0627\u064A\u0629 \u062D\u0642\u0648\u0642 \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646\u060C \u0648\u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0641\u064A \u0639\u0642\u0648\u062F \u0627\u0644\u0639\u0645\u0644 \u0648\u0627\u0644\u062A\u0648\u0638\u064A\u0641.</p><a href="#" class="team-link" data-v-70ebec3e${_scopeId2}>\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 <i data-lucide="chevron-left" data-v-70ebec3e${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$1$1,
                          alt: "\u0627\u0644\u0645\u0633\u062A\u0634\u0627\u0631\u0629 \u0646\u0648\u0631\u0629 \u0639\u0628\u062F\u0627\u0644\u0639\u0632\u064A\u0632"
                        })
                      ]),
                      createVNode("h4", { class: "team-member-name" }, "\u0627\u0644\u0645\u0633\u062A\u0634\u0627\u0631\u0629 \u0646\u0648\u0631\u0629 \u0639\u0628\u062F\u0627\u0644\u0639\u0632\u064A\u0632"),
                      createVNode("p", { class: "team-member-role" }, "\u062E\u0628\u064A\u0631\u0629 \u0641\u064A \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0639\u0645\u0627\u0644\u064A\u0629 \u0648\u062D\u0645\u0627\u064A\u0629 \u062D\u0642\u0648\u0642 \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646\u060C \u0648\u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0641\u064A \u0639\u0642\u0648\u062F \u0627\u0644\u0639\u0645\u0644 \u0648\u0627\u0644\u062A\u0648\u0638\u064A\u0641."),
                      createVNode("a", {
                        href: "#",
                        class: "team-link"
                      }, [
                        createTextVNode("\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 "),
                        createVNode("i", { "data-lucide": "chevron-left" })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="team-card" data-v-70ebec3e${_scopeId2}><div class="team-img-wrapper" data-v-70ebec3e${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1$1)} alt="\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u0641\u064A\u0635\u0644 \u0639\u0628\u062F\u0627\u0644\u0631\u062D\u0645\u0646" data-v-70ebec3e${_scopeId2}></div><h4 class="team-member-name" data-v-70ebec3e${_scopeId2}>\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u0641\u064A\u0635\u0644 \u0639\u0628\u062F\u0627\u0644\u0631\u062D\u0645\u0646</h4><p class="team-member-role" data-v-70ebec3e${_scopeId2}>\u0645\u062A\u062E\u0635\u0635 \u0641\u064A \u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0639\u0642\u0627\u0631\u064A\u0629 \u0648\u0645\u0646\u0627\u0632\u0639\u0627\u062A \u0627\u0644\u0623\u0631\u0627\u0636\u064A\u060C \u0645\u0639 \u062E\u0628\u0631\u0629 \u0641\u064A \u062A\u0648\u062B\u064A\u0642 \u0627\u0644\u0639\u0642\u0648\u062F \u0648\u0627\u0644\u0625\u0641\u0631\u0627\u063A \u0627\u0644\u0639\u0642\u0627\u0631\u064A.</p><a href="#" class="team-link" data-v-70ebec3e${_scopeId2}>\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 <i data-lucide="chevron-left" data-v-70ebec3e${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$1$1,
                          alt: "\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u0641\u064A\u0635\u0644 \u0639\u0628\u062F\u0627\u0644\u0631\u062D\u0645\u0646"
                        })
                      ]),
                      createVNode("h4", { class: "team-member-name" }, "\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u0641\u064A\u0635\u0644 \u0639\u0628\u062F\u0627\u0644\u0631\u062D\u0645\u0646"),
                      createVNode("p", { class: "team-member-role" }, "\u0645\u062A\u062E\u0635\u0635 \u0641\u064A \u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0639\u0642\u0627\u0631\u064A\u0629 \u0648\u0645\u0646\u0627\u0632\u0639\u0627\u062A \u0627\u0644\u0623\u0631\u0627\u0636\u064A\u060C \u0645\u0639 \u062E\u0628\u0631\u0629 \u0641\u064A \u062A\u0648\u062B\u064A\u0642 \u0627\u0644\u0639\u0642\u0648\u062F \u0648\u0627\u0644\u0625\u0641\u0631\u0627\u063A \u0627\u0644\u0639\u0642\u0627\u0631\u064A."),
                      createVNode("a", {
                        href: "#",
                        class: "team-link"
                      }, [
                        createTextVNode("\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 "),
                        createVNode("i", { "data-lucide": "chevron-left" })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "team-card" }, [
                    createVNode("div", { class: "team-img-wrapper" }, [
                      createVNode("img", {
                        src: _imports_0$1$1,
                        alt: "\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u0639\u0628\u062F\u0627\u0644\u0644\u0647 \u0628\u0646 \u0645\u062D\u0645\u062F \u0627\u0644\u0642\u062D\u0637\u0627\u0646\u064A"
                      })
                    ]),
                    createVNode("h4", { class: "team-member-name" }, "\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u0639\u0628\u062F\u0627\u0644\u0644\u0647 \u0628\u0646 \u0645\u062D\u0645\u062F \u0627\u0644\u0642\u062D\u0637\u0627\u0646\u064A"),
                    createVNode("p", { class: "team-member-role" }, "\u0645\u062D\u0627\u0645 \u0648\u0645\u0633\u062A\u0634\u0627\u0631 \u0642\u0627\u0646\u0648\u0646\u064A \u0645\u062A\u062E\u0635\u0635 \u0641\u064A \u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629 \u0648\u0635\u064A\u0627\u063A\u0629 \u0627\u0644\u0639\u0642\u0648\u062F\u060C \u064A\u062A\u0645\u062A\u0639 \u0628\u062E\u0628\u0631\u0629 \u0639\u0645\u0644\u064A\u0629 \u0641\u064A \u062A\u0645\u062B\u064A\u0644 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0648\u0627\u0644\u0623\u0641\u0631\u0627\u062F."),
                    createVNode("a", {
                      href: "#",
                      class: "team-link"
                    }, [
                      createTextVNode("\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 "),
                      createVNode("i", { "data-lucide": "chevron-left" })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "team-card" }, [
                    createVNode("div", { class: "team-img-wrapper" }, [
                      createVNode("img", {
                        src: _imports_0$1$1,
                        alt: "\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u0641\u0647\u062F \u0628\u0646 \u0633\u0639\u0648\u062F \u0627\u0644\u0639\u062A\u064A\u0628\u064A"
                      })
                    ]),
                    createVNode("h4", { class: "team-member-name" }, "\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u0641\u0647\u062F \u0628\u0646 \u0633\u0639\u0648\u062F \u0627\u0644\u0639\u062A\u064A\u0628\u064A"),
                    createVNode("p", { class: "team-member-role" }, "\u0645\u062E\u062A\u0635 \u0641\u064A \u0627\u0644\u062A\u0642\u0627\u0636\u064A \u0648\u0627\u0644\u062A\u0645\u062B\u064A\u0644 \u0623\u0645\u0627\u0645 \u0627\u0644\u0645\u062D\u0627\u0643\u0645\u060C \u0645\u0639 \u062E\u0628\u0631\u0629 \u0641\u064A \u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0645\u062F\u0646\u064A\u0629 \u0648\u0627\u0644\u0646\u0632\u0627\u0639\u0627\u062A \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0627\u0644\u0645\u062E\u062A\u0644\u0641\u0629."),
                    createVNode("a", {
                      href: "#",
                      class: "team-link"
                    }, [
                      createTextVNode("\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 "),
                      createVNode("i", { "data-lucide": "chevron-left" })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "team-card" }, [
                    createVNode("div", { class: "team-img-wrapper" }, [
                      createVNode("img", {
                        src: _imports_0$1$1,
                        alt: "\u0627\u0644\u0645\u0633\u062A\u0634\u0627\u0631 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A \u0623\u062D\u0645\u062F \u0628\u0646 \u062E\u0627\u0644\u062F \u0627\u0644\u062D\u0631\u0628\u064A"
                      })
                    ]),
                    createVNode("h4", { class: "team-member-name" }, "\u0627\u0644\u0645\u0633\u062A\u0634\u0627\u0631 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A \u0623\u062D\u0645\u062F \u0628\u0646 \u062E\u0627\u0644\u062F \u0627\u0644\u062D\u0631\u0628\u064A"),
                    createVNode("p", { class: "team-member-role" }, "\u0645\u0633\u062A\u0634\u0627\u0631 \u0642\u0627\u0646\u0648\u0646\u064A \u0641\u064A \u0634\u0624\u0648\u0646 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0648\u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629\u060C \u064A\u0642\u062F\u0645 \u062D\u0644\u0648\u0644\u0627\u064B \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0645\u062F\u0631\u0648\u0633\u0629 \u062A\u062F\u0639\u0645 \u0646\u0645\u0648 \u0627\u0644\u0623\u0639\u0645\u0627\u0644."),
                    createVNode("a", {
                      href: "#",
                      class: "team-link"
                    }, [
                      createTextVNode("\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 "),
                      createVNode("i", { "data-lucide": "chevron-left" })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "team-card" }, [
                    createVNode("div", { class: "team-img-wrapper" }, [
                      createVNode("img", {
                        src: _imports_0$1$1,
                        alt: "\u0627\u0644\u0645\u062D\u0627\u0645\u064A"
                      })
                    ]),
                    createVNode("h4", { class: "team-member-name" }, "\u0627\u0644\u0645\u062D\u0627\u0645\u064A"),
                    createVNode("p", { class: "team-member-role" }, "\u0645\u062E\u062A\u0635 \u0641\u064A \u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0645\u062F\u0646\u064A\u0629\u060C \u0645\u0639 \u062E\u0628\u0631\u0629 \u0641\u064A \u0627\u0644\u062F\u0641\u0627\u0639 \u0639\u0646 \u062D\u0642\u0648\u0642 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0648\u0641\u0642 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0648\u0627\u0644\u0642\u0648\u0627\u0646\u064A\u0646."),
                    createVNode("a", {
                      href: "#",
                      class: "team-link"
                    }, [
                      createTextVNode("\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 "),
                      createVNode("i", { "data-lucide": "chevron-left" })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "team-card" }, [
                    createVNode("div", { class: "team-img-wrapper" }, [
                      createVNode("img", {
                        src: _imports_0$1$1,
                        alt: "\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u062E\u0627\u0644\u062F \u0628\u0646 \u0648\u0644\u064A\u062F"
                      })
                    ]),
                    createVNode("h4", { class: "team-member-name" }, "\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u062E\u0627\u0644\u062F \u0628\u0646 \u0648\u0644\u064A\u062F"),
                    createVNode("p", { class: "team-member-role" }, "\u0645\u062A\u062E\u0635\u0635 \u0641\u064A \u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0623\u062D\u0648\u0627\u0644 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0648\u0627\u0644\u0645\u0648\u0627\u0631\u064A\u062B\u060C \u0628\u062E\u0628\u0631\u0629 \u0648\u0627\u0633\u0639\u0629 \u0641\u064A \u0627\u0644\u062A\u0631\u0627\u0641\u0639 \u0623\u0645\u0627\u0645 \u0645\u062D\u0627\u0643\u0645 \u0627\u0644\u0623\u062D\u0648\u0627\u0644 \u0627\u0644\u0634\u062E\u0635\u064A\u0629."),
                    createVNode("a", {
                      href: "#",
                      class: "team-link"
                    }, [
                      createTextVNode("\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 "),
                      createVNode("i", { "data-lucide": "chevron-left" })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "team-card" }, [
                    createVNode("div", { class: "team-img-wrapper" }, [
                      createVNode("img", {
                        src: _imports_0$1$1,
                        alt: "\u0627\u0644\u0645\u0633\u062A\u0634\u0627\u0631\u0629 \u0646\u0648\u0631\u0629 \u0639\u0628\u062F\u0627\u0644\u0639\u0632\u064A\u0632"
                      })
                    ]),
                    createVNode("h4", { class: "team-member-name" }, "\u0627\u0644\u0645\u0633\u062A\u0634\u0627\u0631\u0629 \u0646\u0648\u0631\u0629 \u0639\u0628\u062F\u0627\u0644\u0639\u0632\u064A\u0632"),
                    createVNode("p", { class: "team-member-role" }, "\u062E\u0628\u064A\u0631\u0629 \u0641\u064A \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0639\u0645\u0627\u0644\u064A\u0629 \u0648\u062D\u0645\u0627\u064A\u0629 \u062D\u0642\u0648\u0642 \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646\u060C \u0648\u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0641\u064A \u0639\u0642\u0648\u062F \u0627\u0644\u0639\u0645\u0644 \u0648\u0627\u0644\u062A\u0648\u0638\u064A\u0641."),
                    createVNode("a", {
                      href: "#",
                      class: "team-link"
                    }, [
                      createTextVNode("\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 "),
                      createVNode("i", { "data-lucide": "chevron-left" })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "team-card" }, [
                    createVNode("div", { class: "team-img-wrapper" }, [
                      createVNode("img", {
                        src: _imports_0$1$1,
                        alt: "\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u0641\u064A\u0635\u0644 \u0639\u0628\u062F\u0627\u0644\u0631\u062D\u0645\u0646"
                      })
                    ]),
                    createVNode("h4", { class: "team-member-name" }, "\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u0641\u064A\u0635\u0644 \u0639\u0628\u062F\u0627\u0644\u0631\u062D\u0645\u0646"),
                    createVNode("p", { class: "team-member-role" }, "\u0645\u062A\u062E\u0635\u0635 \u0641\u064A \u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0639\u0642\u0627\u0631\u064A\u0629 \u0648\u0645\u0646\u0627\u0632\u0639\u0627\u062A \u0627\u0644\u0623\u0631\u0627\u0636\u064A\u060C \u0645\u0639 \u062E\u0628\u0631\u0629 \u0641\u064A \u062A\u0648\u062B\u064A\u0642 \u0627\u0644\u0639\u0642\u0648\u062F \u0648\u0627\u0644\u0625\u0641\u0631\u0627\u063A \u0627\u0644\u0639\u0642\u0627\u0631\u064A."),
                    createVNode("a", {
                      href: "#",
                      class: "team-link"
                    }, [
                      createTextVNode("\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 "),
                      createVNode("i", { "data-lucide": "chevron-left" })
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/Team.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const LightTeam = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-70ebec3e"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-section" }, _attrs))}><div class="container"><div class="blog-inner-container"><div class="mb-5"><h2 class="section-title mb-2">\u0627\u0644\u0645\u062F\u0648\u0646\u0629 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629</h2><p class="section-subtitle text-muted">\u0646\u0634\u0627\u0631\u0643\u0643\u0645 \u0645\u0642\u0627\u0644\u0627\u062A \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0645\u0628\u0633\u0637\u0629 \u062A\u0633\u0644\u0651\u0637 \u0627\u0644\u0636\u0648\u0621 \u0639\u0644\u0649 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0648\u0627\u0644\u062A\u0634\u0631\u064A\u0639\u0627\u062A\u060C \u0648\u062A\u0633\u0627\u0639\u062F \u0627\u0644\u0623\u0641\u0631\u0627\u062F \u0648\u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0639\u0644\u0649 \u0641\u0647\u0645 \u062D\u0642\u0648\u0642\u0647\u0645 \u0648\u0627\u062A\u062E\u0627\u0630 \u0642\u0631\u0627\u0631\u0627\u062A \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0648\u0627\u0639\u064A\u0629.</p></div><div class="row g-4"><div class="col-lg-4 col-md-6"><div class="blog-card"><div class="blog-img-wrapper"><img${ssrRenderAttr("src", _imports_0$3)} alt="\u0623\u0647\u0645\u064A\u0629 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0642\u0628\u0644 \u062A\u0648\u0642\u064A\u0639 \u0627\u0644\u0639\u0642\u0648\u062F"></div><div class="blog-content"><h3 class="blog-title">\u0623\u0647\u0645\u064A\u0629 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0642\u0628\u0644 \u062A\u0648\u0642\u064A\u0639 \u0627\u0644\u0639\u0642\u0648\u062F</h3><p class="blog-description">\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0623\u0647\u0645\u064A\u0629 \u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0642\u0628\u0644 \u062A\u0648\u0642\u064A\u0639 \u0623\u064A \u0639\u0642\u062F\u060C \u0648\u0643\u064A\u0641 \u062A\u0633\u0627\u0647\u0645 \u0641\u064A \u062D\u0645\u0627\u064A\u0629 \u062D\u0642\u0648\u0642\u0643 \u0648\u062A\u062C\u0646\u0628 \u0627\u0644\u0645\u062E\u0627\u0637\u0631 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629.</p><a href="#" class="blog-link">\u0627\u0642\u0631\u0623 \u0627\u0644\u0645\u0632\u064A\u062F <i data-lucide="chevron-left"></i></a></div></div></div><div class="col-lg-4 col-md-6"><div class="blog-card"><div class="blog-img-wrapper"><img${ssrRenderAttr("src", _imports_1$1)} alt="\u0645\u062A\u0649 \u062A\u062D\u062A\u0627\u062C \u0625\u0644\u0649 \u0627\u0644\u0644\u062C\u0648\u0621 \u0644\u0644\u062A\u062D\u0643\u064A\u0645 \u0628\u062F\u0644\u0627\u064B \u0645\u0646 \u0627\u0644\u062A\u0642\u0627\u0636\u064A\u061F"></div><div class="blog-content"><h3 class="blog-title">\u0645\u062A\u0649 \u062A\u062D\u062A\u0627\u062C \u0625\u0644\u0649 \u0627\u0644\u0644\u062C\u0648\u0621 \u0644\u0644\u062A\u062D\u0643\u064A\u0645 \u0628\u062F\u0644\u0627\u064B \u0645\u0646 \u0627\u0644\u062A\u0642\u0627\u0636\u064A\u061F</h3><p class="blog-description">\u0634\u0631\u062D \u0645\u0628\u0633\u0637 \u0644\u0644\u0641\u0631\u0648\u0642\u0627\u062A \u0628\u064A\u0646 \u0627\u0644\u062A\u062D\u0643\u064A\u0645 \u0648\u0627\u0644\u062A\u0642\u0627\u0636\u064A\u060C \u0648\u0645\u062A\u0649 \u064A\u0643\u0648\u0646 \u0627\u0644\u062A\u062D\u0643\u064A\u0645 \u0627\u0644\u062E\u064A\u0627\u0631 \u0627\u0644\u0623\u0646\u0633\u0628 \u0644\u062D\u0644 \u0627\u0644\u0646\u0632\u0627\u0639\u0627\u062A.</p><a href="#" class="blog-link">\u0627\u0642\u0631\u0623 \u0627\u0644\u0645\u0632\u064A\u062F <i data-lucide="chevron-left"></i></a></div></div></div><div class="col-lg-4 col-md-6"><div class="blog-card"><div class="blog-img-wrapper"><img${ssrRenderAttr("src", _imports_2$1)} alt="\u0623\u0628\u0631\u0632 \u0627\u0644\u0623\u062E\u0637\u0627\u0621 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0627\u0644\u062A\u064A \u062A\u0642\u0639 \u0641\u064A\u0647\u0627 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0646\u0627\u0634\u0626\u0629"></div><div class="blog-content"><h3 class="blog-title">\u0623\u0628\u0631\u0632 \u0627\u0644\u0623\u062E\u0637\u0627\u0621 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0627\u0644\u062A\u064A \u062A\u0642\u0639 \u0641\u064A\u0647\u0627 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0646\u0627\u0634\u0626\u0629</h3><p class="blog-description">\u0646\u0633\u062A\u0639\u0631\u0636 \u0623\u0643\u062B\u0631 \u0627\u0644\u0623\u062E\u0637\u0627\u0621 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0634\u064A\u0648\u0639\u0627\u064B \u0644\u062F\u0649 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0646\u0627\u0634\u0626\u0629\u060C \u0645\u0639 \u0646\u0635\u0627\u0626\u062D \u0639\u0645\u0644\u064A\u0629 \u0644\u062A\u062C\u0646\u0628\u0647\u0627 \u0645\u0646\u0630 \u0627\u0644\u0628\u062F\u0627\u064A\u0629.</p><a href="#" class="blog-link">\u0627\u0642\u0631\u0623 \u0627\u0644\u0645\u0632\u064A\u062F <i data-lucide="chevron-left"></i></a></div></div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/Blog.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const LightBlog = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "accreditations-section" }, _attrs))}><div class="container"><div class="mb-5"><h2 class="section-title mb-2">\u0627\u0639\u062A\u0645\u0627\u062F\u0627\u062A \u0627\u0644\u0634\u0631\u0643\u0629</h2><p class="section-subtitle text-muted">\u0646\u0645\u062A\u0644\u0643 \u0627\u0639\u062A\u0645\u0627\u062F\u0627\u062A \u0648\u062A\u0631\u0627\u062E\u064A\u0635 \u0645\u0647\u0646\u064A\u0629 \u062A\u0639\u0643\u0633 \u0627\u0644\u062A\u0632\u0627\u0645\u0646\u0627 \u0628\u0627\u0644\u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u0646\u0638\u0627\u0645\u064A\u0629 \u0648\u0623\u0641\u0636\u0644 \u0627\u0644\u0645\u0645\u0627\u0631\u0633\u0627\u062A \u0641\u064A \u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0648\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u064A\u0629\u060C \u0645\u062D\u0644\u064A\u0627\u064B \u0648\u062F\u0648\u0644\u064A\u0627\u064B.</p></div><div class="row g-4"><div class="col-lg-4 col-md-6"><div class="accreditation-card"><div class="accreditation-logo-wrapper"><img${ssrRenderAttr("src", _imports_0$4)} alt="\u0627\u0644\u0647\u064A\u0626\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629 \u0644\u0644\u0645\u0644\u0643\u064A\u0629 \u0627\u0644\u0641\u0643\u0631\u064A\u0629"></div><h3 class="accreditation-title">\u0627\u0644\u0647\u064A\u0626\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629 \u0644\u0644\u0645\u0644\u0643\u064A\u0629 \u0627\u0644\u0641\u0643\u0631\u064A\u0629</h3><p class="accreditation-description">\u0646\u0633\u0627\u0639\u062F \u0641\u064A \u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u062D\u0642\u0648\u0642 \u0627\u0644\u0641\u0643\u0631\u064A\u0629 \u0639\u0628\u0631 \u0625\u0639\u062F\u0627\u062F \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0648\u0627\u0644\u0645\u062A\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u062A\u0646\u0638\u064A\u0645\u064A\u0629 \u0630\u0627\u062A \u0627\u0644\u0635\u0644\u0629 \u0648\u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u062A\u062E\u0635\u0635\u0629.</p><a href="#" class="accreditation-link">\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 <i data-lucide="chevron-left"></i></a></div></div><div class="col-lg-4 col-md-6"><div class="accreditation-card"><div class="accreditation-logo-wrapper"><img${ssrRenderAttr("src", _imports_1$2)} alt="\u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062F \u0627\u0644\u0628\u0634\u0631\u064A\u0629 \u0648\u0627\u0644\u062A\u0646\u0645\u064A\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629"></div><h3 class="accreditation-title">\u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062F \u0627\u0644\u0628\u0634\u0631\u064A\u0629 \u0648\u0627\u0644\u062A\u0646\u0645\u064A\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629</h3><p class="accreditation-description">\u0646\u0642\u0640\u062F\u0651\u0645 \u062F\u0639\u0645\u0640\u0627\u064B \u0641\u064A \u0625\u0639\u0640\u062F\u0627\u062F \u0648\u0645\u0631\u0627\u062C\u0639\u0640\u0629 \u0627\u0644\u0644\u0648\u0627\u0626\u0640\u062D \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0640\u0629 \u0648\u0627\u0644\u0627\u0645\u062A\u062B\u0640\u0627\u0644 \u0627\u0644\u062A\u0646\u0638\u064A\u0645\u0640\u064A\u060C \u0628\u0645\u0640\u0627 \u064A\u0636\u0645\u0640\u0646 \u062A\u0648\u0627\u0641\u0640\u0642 \u0627\u0644\u0645\u0646\u0634\u0640\u0623\u0629 \u0645\u0639 \u0627\u0644\u0645\u062A\u0637\u0644\u0628\u0640\u0627\u062A \u0627\u0644\u0646\u0638\u0627\u0645\u064A\u0640\u0629.</p><a href="#" class="accreditation-link">\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 <i data-lucide="chevron-left"></i></a></div></div><div class="col-lg-4 col-md-6"><div class="accreditation-card"><div class="accreditation-logo-wrapper"><img${ssrRenderAttr("src", _imports_2$2)} alt="\u0627\u0644\u0647\u064A\u0626\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629 \u0644\u0644\u0645\u062D\u0627\u0645\u064A\u0646"></div><h3 class="accreditation-title">\u0627\u0644\u0647\u064A\u0626\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629 \u0644\u0644\u0645\u062D\u0627\u0645\u064A\u0646</h3><p class="accreditation-description">\u0645\u0643\u062A\u0628\u0646\u0627 \u0645\u0633\u062C\u0644 \u0648\u0645\u0644\u062A\u0632\u0645 \u0628\u0627\u0644\u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u0645\u0647\u0646\u064A\u0629 \u0627\u0644\u0645\u0639\u062A\u0645\u062F\u0629\u060C \u0648\u0646\u0642\u0640\u062F\u0645 \u062E\u062F\u0645\u0627\u062A \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0648\u0641\u0642 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0648\u0627\u0644\u0644\u0648\u0627\u0626\u062D \u0630\u0627\u062A \u0627\u0644\u0639\u0644\u0627\u0642\u0629.</p><a href="#" class="accreditation-link">\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 <i data-lucide="chevron-left"></i></a></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/Accreditations.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const LightAccreditations = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonials-section" }, _attrs))} data-v-4ed75415><div class="container" data-v-4ed75415><div class="mb-5" data-v-4ed75415><h2 class="section-title mb-2" data-v-4ed75415>\u0622\u0631\u0627\u0621 \u0639\u0645\u0644\u0627\u0626\u0646\u0627</h2><p class="section-subtitle text-muted" data-v-4ed75415>\u0646\u0639\u062A\u0632 \u0628\u062B\u0642\u0629 \u0639\u0645\u0644\u0627\u0626\u0646\u0627 \u0648\u0646\u0633\u0639\u0649 \u062F\u0627\u0626\u0645\u0627\u064B \u0644\u062A\u0642\u062F\u064A\u0645 \u062E\u062F\u0645\u0627\u062A \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u062A\u0631\u062A\u0642\u064A \u0644\u062A\u0648\u0642\u0639\u0627\u062A\u0647\u0645.</p></div><div class="swiper-container-wrapper" data-v-4ed75415>`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: [unref(Autoplay)],
        "slides-per-view": 1,
        "space-between": 30,
        dir: "rtl",
        loop: true,
        autoplay: {
          delay: 4e3,
          disableOnInteraction: false
        },
        breakpoints: {
          "768": { slidesPerView: 2 },
          "1024": { slidesPerView: 3 }
        },
        class: "testimonials-swiper"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="testimonial-card" data-v-4ed75415${_scopeId2}><div class="testimonial-stars" data-v-4ed75415${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i></div><p class="testimonial-text" data-v-4ed75415${_scopeId2}>&quot;\u062A\u0639\u0627\u0645\u0644 \u0631\u0627\u0642 \u0648\u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629 \u0639\u0627\u0644\u064A\u0629\u060C \u062D\u0635\u0644\u062A \u0639\u0644\u0649 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0648\u0627\u0636\u062D\u0629 \u0633\u0627\u0639\u062F\u062A\u0646\u064A \u0641\u064A \u0627\u062A\u062E\u0627\u0630 \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0635\u062D\u064A\u062D \u0628\u0643\u0644 \u062B\u0642\u0629.&quot;</p><div class="testimonial-author" data-v-4ed75415${_scopeId2}><span class="testimonial-name" data-v-4ed75415${_scopeId2}>\u0645\u062D\u0645\u062F \u0628\u0646 \u0639\u0628\u062F\u0627\u0644\u0644\u0647 \u0627\u0644\u0633\u0628\u064A\u0639\u064A</span><span class="testimonial-role" data-v-4ed75415${_scopeId2}>\u0631\u062C\u0644 \u0623\u0639\u0645\u0627\u0644</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "testimonial-card" }, [
                      createVNode("div", { class: "testimonial-stars" }, [
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        })
                      ]),
                      createVNode("p", { class: "testimonial-text" }, '"\u062A\u0639\u0627\u0645\u0644 \u0631\u0627\u0642 \u0648\u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629 \u0639\u0627\u0644\u064A\u0629\u060C \u062D\u0635\u0644\u062A \u0639\u0644\u0649 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0648\u0627\u0636\u062D\u0629 \u0633\u0627\u0639\u062F\u062A\u0646\u064A \u0641\u064A \u0627\u062A\u062E\u0627\u0630 \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0635\u062D\u064A\u062D \u0628\u0643\u0644 \u062B\u0642\u0629."'),
                      createVNode("div", { class: "testimonial-author" }, [
                        createVNode("span", { class: "testimonial-name" }, "\u0645\u062D\u0645\u062F \u0628\u0646 \u0639\u0628\u062F\u0627\u0644\u0644\u0647 \u0627\u0644\u0633\u0628\u064A\u0639\u064A"),
                        createVNode("span", { class: "testimonial-role" }, "\u0631\u062C\u0644 \u0623\u0639\u0645\u0627\u0644")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="testimonial-card" data-v-4ed75415${_scopeId2}><div class="testimonial-stars" data-v-4ed75415${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i></div><p class="testimonial-text" data-v-4ed75415${_scopeId2}>&quot;\u0641\u0631\u064A\u0642 \u0642\u0627\u0646\u0648\u0646\u064A \u0645\u062A\u0645\u064A\u0632\u060C \u0645\u062A\u0627\u0628\u0639\u0629 \u062F\u0642\u064A\u0642\u0629 \u0644\u0644\u0642\u0636\u064A\u0629 \u0648\u062A\u0648\u0627\u0635\u0644 \u0645\u0633\u062A\u0645\u0631 \u062D\u062A\u0649 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0646\u062A\u064A\u062C\u0629 \u0645\u0631\u0636\u064A\u0629.&quot;</p><div class="testimonial-author" data-v-4ed75415${_scopeId2}><span class="testimonial-name" data-v-4ed75415${_scopeId2}>\u0633\u0627\u0631\u0629 \u0628\u0646\u062A \u062E\u0627\u0644\u062F \u0627\u0644\u0639\u062A\u064A\u0628\u064A</span><span class="testimonial-role" data-v-4ed75415${_scopeId2}>\u0635\u0627\u062D\u0628\u0629 \u0645\u0646\u0634\u0623\u0629</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "testimonial-card" }, [
                      createVNode("div", { class: "testimonial-stars" }, [
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        })
                      ]),
                      createVNode("p", { class: "testimonial-text" }, '"\u0641\u0631\u064A\u0642 \u0642\u0627\u0646\u0648\u0646\u064A \u0645\u062A\u0645\u064A\u0632\u060C \u0645\u062A\u0627\u0628\u0639\u0629 \u062F\u0642\u064A\u0642\u0629 \u0644\u0644\u0642\u0636\u064A\u0629 \u0648\u062A\u0648\u0627\u0635\u0644 \u0645\u0633\u062A\u0645\u0631 \u062D\u062A\u0649 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0646\u062A\u064A\u062C\u0629 \u0645\u0631\u0636\u064A\u0629."'),
                      createVNode("div", { class: "testimonial-author" }, [
                        createVNode("span", { class: "testimonial-name" }, "\u0633\u0627\u0631\u0629 \u0628\u0646\u062A \u062E\u0627\u0644\u062F \u0627\u0644\u0639\u062A\u064A\u0628\u064A"),
                        createVNode("span", { class: "testimonial-role" }, "\u0635\u0627\u062D\u0628\u0629 \u0645\u0646\u0634\u0623\u0629")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="testimonial-card" data-v-4ed75415${_scopeId2}><div class="testimonial-stars" data-v-4ed75415${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i></div><p class="testimonial-text" data-v-4ed75415${_scopeId2}>&quot;\u062E\u0628\u0631\u0629 \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0648\u0627\u0636\u062D\u0629 \u0648\u062D\u0631\u0635 \u0639\u0644\u0649 \u0645\u0635\u0644\u062D\u0629 \u0627\u0644\u0639\u0645\u064A\u0644\u060C \u0623\u0646\u0635\u062D \u0628\u0627\u0644\u062A\u0639\u0627\u0645\u0644 \u0645\u0639\u0647\u0645 \u0644\u0645\u0646 \u064A\u0628\u062D\u062B \u0639\u0646 \u0627\u0644\u062B\u0642\u0629 \u0648\u0627\u0644\u0645\u0647\u0646\u064A\u0629.&quot;</p><div class="testimonial-author" data-v-4ed75415${_scopeId2}><span class="testimonial-name" data-v-4ed75415${_scopeId2}>\u0639\u0628\u062F\u0627\u0644\u0631\u062D\u0645\u0646 \u0628\u0646 \u0641\u0647\u062F \u0627\u0644\u0642\u062D\u0637\u0627\u0646\u064A</span><span class="testimonial-role" data-v-4ed75415${_scopeId2}>\u0645\u062F\u064A\u0631 \u0634\u0631\u0643\u0629</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "testimonial-card" }, [
                      createVNode("div", { class: "testimonial-stars" }, [
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        })
                      ]),
                      createVNode("p", { class: "testimonial-text" }, '"\u062E\u0628\u0631\u0629 \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0648\u0627\u0636\u062D\u0629 \u0648\u062D\u0631\u0635 \u0639\u0644\u0649 \u0645\u0635\u0644\u062D\u0629 \u0627\u0644\u0639\u0645\u064A\u0644\u060C \u0623\u0646\u0635\u062D \u0628\u0627\u0644\u062A\u0639\u0627\u0645\u0644 \u0645\u0639\u0647\u0645 \u0644\u0645\u0646 \u064A\u0628\u062D\u062B \u0639\u0646 \u0627\u0644\u062B\u0642\u0629 \u0648\u0627\u0644\u0645\u0647\u0646\u064A\u0629."'),
                      createVNode("div", { class: "testimonial-author" }, [
                        createVNode("span", { class: "testimonial-name" }, "\u0639\u0628\u062F\u0627\u0644\u0631\u062D\u0645\u0646 \u0628\u0646 \u0641\u0647\u062F \u0627\u0644\u0642\u062D\u0637\u0627\u0646\u064A"),
                        createVNode("span", { class: "testimonial-role" }, "\u0645\u062F\u064A\u0631 \u0634\u0631\u0643\u0629")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="testimonial-card" data-v-4ed75415${_scopeId2}><div class="testimonial-stars" data-v-4ed75415${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i></div><p class="testimonial-text" data-v-4ed75415${_scopeId2}>&quot;\u062E\u062F\u0645\u0629 \u0645\u0645\u062A\u0627\u0632\u0629 \u0648\u062F\u0642\u0629 \u0641\u064A \u0627\u0644\u0645\u0648\u0627\u0639\u064A\u062F. \u0645\u0643\u062A\u0628 \u0645\u062D\u062A\u0631\u0641 \u0644\u0644\u063A\u0627\u064A\u0629 \u0648\u062A\u0639\u0627\u0645\u0644\u0647\u0645 \u064A\u0628\u0639\u062B \u0639\u0644\u0649 \u0627\u0644\u0627\u0637\u0645\u0626\u0646\u0627\u0646.&quot;</p><div class="testimonial-author" data-v-4ed75415${_scopeId2}><span class="testimonial-name" data-v-4ed75415${_scopeId2}>\u062E\u0627\u0644\u062F \u0627\u0644\u0639\u062A\u064A\u0628\u064A</span><span class="testimonial-role" data-v-4ed75415${_scopeId2}>\u0639\u0645\u064A\u0644</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "testimonial-card" }, [
                      createVNode("div", { class: "testimonial-stars" }, [
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        })
                      ]),
                      createVNode("p", { class: "testimonial-text" }, '"\u062E\u062F\u0645\u0629 \u0645\u0645\u062A\u0627\u0632\u0629 \u0648\u062F\u0642\u0629 \u0641\u064A \u0627\u0644\u0645\u0648\u0627\u0639\u064A\u062F. \u0645\u0643\u062A\u0628 \u0645\u062D\u062A\u0631\u0641 \u0644\u0644\u063A\u0627\u064A\u0629 \u0648\u062A\u0639\u0627\u0645\u0644\u0647\u0645 \u064A\u0628\u0639\u062B \u0639\u0644\u0649 \u0627\u0644\u0627\u0637\u0645\u0626\u0646\u0627\u0646."'),
                      createVNode("div", { class: "testimonial-author" }, [
                        createVNode("span", { class: "testimonial-name" }, "\u062E\u0627\u0644\u062F \u0627\u0644\u0639\u062A\u064A\u0628\u064A"),
                        createVNode("span", { class: "testimonial-role" }, "\u0639\u0645\u064A\u0644")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="testimonial-card" data-v-4ed75415${_scopeId2}><div class="testimonial-stars" data-v-4ed75415${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i></div><p class="testimonial-text" data-v-4ed75415${_scopeId2}>&quot;\u0633\u0627\u0639\u062F\u0648\u0646\u064A \u0641\u064A \u062D\u0644 \u0642\u0636\u064A\u0629 \u062A\u062C\u0627\u0631\u064A\u0629 \u0645\u0639\u0642\u062F\u0629 \u0628\u0646\u062C\u0627\u062D \u0628\u0627\u0647\u0631. \u062E\u0628\u0631\u062A\u0647\u0645 \u0641\u064A \u0627\u0644\u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u062A\u062C\u0627\u0631\u064A \u0644\u0627 \u062A\u0636\u0627\u0647\u0649.&quot;</p><div class="testimonial-author" data-v-4ed75415${_scopeId2}><span class="testimonial-name" data-v-4ed75415${_scopeId2}>\u0634\u0631\u0643\u0629 \u0627\u0644\u0646\u0648\u0631 \u0627\u0644\u0639\u0642\u0627\u0631\u064A\u0629</span><span class="testimonial-role" data-v-4ed75415${_scopeId2}>\u0634\u0631\u064A\u0643 \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "testimonial-card" }, [
                      createVNode("div", { class: "testimonial-stars" }, [
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        })
                      ]),
                      createVNode("p", { class: "testimonial-text" }, '"\u0633\u0627\u0639\u062F\u0648\u0646\u064A \u0641\u064A \u062D\u0644 \u0642\u0636\u064A\u0629 \u062A\u062C\u0627\u0631\u064A\u0629 \u0645\u0639\u0642\u062F\u0629 \u0628\u0646\u062C\u0627\u062D \u0628\u0627\u0647\u0631. \u062E\u0628\u0631\u062A\u0647\u0645 \u0641\u064A \u0627\u0644\u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u062A\u062C\u0627\u0631\u064A \u0644\u0627 \u062A\u0636\u0627\u0647\u0649."'),
                      createVNode("div", { class: "testimonial-author" }, [
                        createVNode("span", { class: "testimonial-name" }, "\u0634\u0631\u0643\u0629 \u0627\u0644\u0646\u0648\u0631 \u0627\u0644\u0639\u0642\u0627\u0631\u064A\u0629"),
                        createVNode("span", { class: "testimonial-role" }, "\u0634\u0631\u064A\u0643 \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="testimonial-card" data-v-4ed75415${_scopeId2}><div class="testimonial-stars" data-v-4ed75415${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i></div><p class="testimonial-text" data-v-4ed75415${_scopeId2}>&quot;\u0623\u0646\u0635\u062D \u0643\u0644 \u0645\u0646 \u0644\u062F\u064A\u0647 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0628\u0627\u0644\u062A\u0648\u062C\u0647 \u0625\u0644\u064A\u0647\u0645. \u0633\u0631\u0639\u0629 \u0641\u064A \u0627\u0644\u0631\u062F \u0648\u062D\u0644\u0648\u0644 \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0645\u0628\u062A\u0643\u0631\u0629.&quot;</p><div class="testimonial-author" data-v-4ed75415${_scopeId2}><span class="testimonial-name" data-v-4ed75415${_scopeId2}>\u0646\u0627\u0635\u0631 \u0627\u0644\u062D\u0631\u0628\u064A</span><span class="testimonial-role" data-v-4ed75415${_scopeId2}>\u0645\u0633\u062A\u0634\u0627\u0631 \u0623\u0639\u0645\u0627\u0644</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "testimonial-card" }, [
                      createVNode("div", { class: "testimonial-stars" }, [
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        })
                      ]),
                      createVNode("p", { class: "testimonial-text" }, '"\u0623\u0646\u0635\u062D \u0643\u0644 \u0645\u0646 \u0644\u062F\u064A\u0647 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0628\u0627\u0644\u062A\u0648\u062C\u0647 \u0625\u0644\u064A\u0647\u0645. \u0633\u0631\u0639\u0629 \u0641\u064A \u0627\u0644\u0631\u062F \u0648\u062D\u0644\u0648\u0644 \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0645\u0628\u062A\u0643\u0631\u0629."'),
                      createVNode("div", { class: "testimonial-author" }, [
                        createVNode("span", { class: "testimonial-name" }, "\u0646\u0627\u0635\u0631 \u0627\u0644\u062D\u0631\u0628\u064A"),
                        createVNode("span", { class: "testimonial-role" }, "\u0645\u0633\u062A\u0634\u0627\u0631 \u0623\u0639\u0645\u0627\u0644")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "testimonial-card" }, [
                    createVNode("div", { class: "testimonial-stars" }, [
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      })
                    ]),
                    createVNode("p", { class: "testimonial-text" }, '"\u062A\u0639\u0627\u0645\u0644 \u0631\u0627\u0642 \u0648\u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629 \u0639\u0627\u0644\u064A\u0629\u060C \u062D\u0635\u0644\u062A \u0639\u0644\u0649 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0648\u0627\u0636\u062D\u0629 \u0633\u0627\u0639\u062F\u062A\u0646\u064A \u0641\u064A \u0627\u062A\u062E\u0627\u0630 \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0635\u062D\u064A\u062D \u0628\u0643\u0644 \u062B\u0642\u0629."'),
                    createVNode("div", { class: "testimonial-author" }, [
                      createVNode("span", { class: "testimonial-name" }, "\u0645\u062D\u0645\u062F \u0628\u0646 \u0639\u0628\u062F\u0627\u0644\u0644\u0647 \u0627\u0644\u0633\u0628\u064A\u0639\u064A"),
                      createVNode("span", { class: "testimonial-role" }, "\u0631\u062C\u0644 \u0623\u0639\u0645\u0627\u0644")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "testimonial-card" }, [
                    createVNode("div", { class: "testimonial-stars" }, [
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      })
                    ]),
                    createVNode("p", { class: "testimonial-text" }, '"\u0641\u0631\u064A\u0642 \u0642\u0627\u0646\u0648\u0646\u064A \u0645\u062A\u0645\u064A\u0632\u060C \u0645\u062A\u0627\u0628\u0639\u0629 \u062F\u0642\u064A\u0642\u0629 \u0644\u0644\u0642\u0636\u064A\u0629 \u0648\u062A\u0648\u0627\u0635\u0644 \u0645\u0633\u062A\u0645\u0631 \u062D\u062A\u0649 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0646\u062A\u064A\u062C\u0629 \u0645\u0631\u0636\u064A\u0629."'),
                    createVNode("div", { class: "testimonial-author" }, [
                      createVNode("span", { class: "testimonial-name" }, "\u0633\u0627\u0631\u0629 \u0628\u0646\u062A \u062E\u0627\u0644\u062F \u0627\u0644\u0639\u062A\u064A\u0628\u064A"),
                      createVNode("span", { class: "testimonial-role" }, "\u0635\u0627\u062D\u0628\u0629 \u0645\u0646\u0634\u0623\u0629")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "testimonial-card" }, [
                    createVNode("div", { class: "testimonial-stars" }, [
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      })
                    ]),
                    createVNode("p", { class: "testimonial-text" }, '"\u062E\u0628\u0631\u0629 \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0648\u0627\u0636\u062D\u0629 \u0648\u062D\u0631\u0635 \u0639\u0644\u0649 \u0645\u0635\u0644\u062D\u0629 \u0627\u0644\u0639\u0645\u064A\u0644\u060C \u0623\u0646\u0635\u062D \u0628\u0627\u0644\u062A\u0639\u0627\u0645\u0644 \u0645\u0639\u0647\u0645 \u0644\u0645\u0646 \u064A\u0628\u062D\u062B \u0639\u0646 \u0627\u0644\u062B\u0642\u0629 \u0648\u0627\u0644\u0645\u0647\u0646\u064A\u0629."'),
                    createVNode("div", { class: "testimonial-author" }, [
                      createVNode("span", { class: "testimonial-name" }, "\u0639\u0628\u062F\u0627\u0644\u0631\u062D\u0645\u0646 \u0628\u0646 \u0641\u0647\u062F \u0627\u0644\u0642\u062D\u0637\u0627\u0646\u064A"),
                      createVNode("span", { class: "testimonial-role" }, "\u0645\u062F\u064A\u0631 \u0634\u0631\u0643\u0629")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "testimonial-card" }, [
                    createVNode("div", { class: "testimonial-stars" }, [
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      })
                    ]),
                    createVNode("p", { class: "testimonial-text" }, '"\u062E\u062F\u0645\u0629 \u0645\u0645\u062A\u0627\u0632\u0629 \u0648\u062F\u0642\u0629 \u0641\u064A \u0627\u0644\u0645\u0648\u0627\u0639\u064A\u062F. \u0645\u0643\u062A\u0628 \u0645\u062D\u062A\u0631\u0641 \u0644\u0644\u063A\u0627\u064A\u0629 \u0648\u062A\u0639\u0627\u0645\u0644\u0647\u0645 \u064A\u0628\u0639\u062B \u0639\u0644\u0649 \u0627\u0644\u0627\u0637\u0645\u0626\u0646\u0627\u0646."'),
                    createVNode("div", { class: "testimonial-author" }, [
                      createVNode("span", { class: "testimonial-name" }, "\u062E\u0627\u0644\u062F \u0627\u0644\u0639\u062A\u064A\u0628\u064A"),
                      createVNode("span", { class: "testimonial-role" }, "\u0639\u0645\u064A\u0644")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "testimonial-card" }, [
                    createVNode("div", { class: "testimonial-stars" }, [
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      })
                    ]),
                    createVNode("p", { class: "testimonial-text" }, '"\u0633\u0627\u0639\u062F\u0648\u0646\u064A \u0641\u064A \u062D\u0644 \u0642\u0636\u064A\u0629 \u062A\u062C\u0627\u0631\u064A\u0629 \u0645\u0639\u0642\u062F\u0629 \u0628\u0646\u062C\u0627\u062D \u0628\u0627\u0647\u0631. \u062E\u0628\u0631\u062A\u0647\u0645 \u0641\u064A \u0627\u0644\u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u062A\u062C\u0627\u0631\u064A \u0644\u0627 \u062A\u0636\u0627\u0647\u0649."'),
                    createVNode("div", { class: "testimonial-author" }, [
                      createVNode("span", { class: "testimonial-name" }, "\u0634\u0631\u0643\u0629 \u0627\u0644\u0646\u0648\u0631 \u0627\u0644\u0639\u0642\u0627\u0631\u064A\u0629"),
                      createVNode("span", { class: "testimonial-role" }, "\u0634\u0631\u064A\u0643 \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "testimonial-card" }, [
                    createVNode("div", { class: "testimonial-stars" }, [
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      })
                    ]),
                    createVNode("p", { class: "testimonial-text" }, '"\u0623\u0646\u0635\u062D \u0643\u0644 \u0645\u0646 \u0644\u062F\u064A\u0647 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0628\u0627\u0644\u062A\u0648\u062C\u0647 \u0625\u0644\u064A\u0647\u0645. \u0633\u0631\u0639\u0629 \u0641\u064A \u0627\u0644\u0631\u062F \u0648\u062D\u0644\u0648\u0644 \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0645\u0628\u062A\u0643\u0631\u0629."'),
                    createVNode("div", { class: "testimonial-author" }, [
                      createVNode("span", { class: "testimonial-name" }, "\u0646\u0627\u0635\u0631 \u0627\u0644\u062D\u0631\u0628\u064A"),
                      createVNode("span", { class: "testimonial-role" }, "\u0645\u0633\u062A\u0634\u0627\u0631 \u0623\u0639\u0645\u0627\u0644")
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/Testimonials.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const LightTestimonials = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-4ed75415"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "cta-section" }, _attrs))}><div class="container"><div class="cta-container"><div class="cta-pattern"></div><div class="cta-content"><h2 class="cta-title">\u0647\u0644 \u062A\u062D\u062A\u0627\u062C \u0625\u0644\u0649 \u062F\u0639\u0645 \u0642\u0627\u0646\u0648\u0646\u064A\u061F</h2><p class="cta-subtitle">\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0645\u0646 \u0641\u0631\u064A\u0642\u0646\u0627 \u0627\u0644\u0645\u062A\u062E\u0635\u0635\u060C \u0648\u062F\u0639\u0646\u0627 \u0646\u0633\u0627\u0639\u062F\u0643 \u0641\u064A \u0627\u062A\u062E\u0627\u0630 \u0627\u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A \u0627\u0644\u0635\u062D\u064A\u062D.</p><a href="#" class="cta-btn">\u0637\u0644\u0628 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0642\u0627\u0646\u0648\u0646\u064A\u0629</a></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/CTA.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LightCTA = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "pb-5" }, _attrs))}><div class="container"><footer class="footer-section"><div class="footer-content"><div class="footer-top mb-5"><div class="d-flex justify-content-start align-items-center mb-4"><img${ssrRenderAttr("src", _imports_0$5)} alt="Logo" class="footer-logo"></div></div><div class="row g-4 footer-links-row"><div class="col-lg-3 col-md-6"><h5 class="footer-heading mb-4">\u0631\u0648\u0627\u0628\u0637 \u0633\u0631\u064A\u0639\u0629</h5><ul class="list-unstyled footer-list"><li><a href="#" class="footer-link">\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629</a></li><li><a href="#" class="footer-link">\u0645\u0646 \u0646\u062D\u0646</a></li><li><a href="#" class="footer-link">\u0627\u0644\u062E\u062F\u0645\u0627\u062A</a></li><li><a href="#" class="footer-link">\u0641\u0631\u064A\u0642 \u0627\u0644\u0639\u0645\u0644</a></li><li><a href="#" class="footer-link">\u0627\u0644\u0645\u062F\u0648\u0646\u0629</a></li><li><a href="#" class="footer-link">\u0648\u0638\u0627\u0626\u0641</a></li></ul></div><div class="col-lg-3 col-md-6"><h5 class="footer-heading mb-4">\u062E\u062F\u0645\u0627\u062A\u0646\u0627</h5><ul class="list-unstyled footer-list"><li><a href="#" class="footer-link">\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629</a></li><li><a href="#" class="footer-link">\u0627\u0644\u062A\u0642\u0627\u0636\u064A \u0648\u0627\u0644\u062A\u0645\u062B\u064A\u0644 \u0623\u0645\u0627\u0645 \u0627\u0644\u0645\u062D\u0627\u0643\u0645</a></li><li><a href="#" class="footer-link">\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0648\u0627\u0644\u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u062A\u062C\u0627\u0631\u064A</a></li><li><a href="#" class="footer-link">\u0635\u064A\u0627\u063A\u0629 \u0648\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0639\u0642\u0648\u062F</a></li><li><a href="#" class="footer-link">\u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0645\u062F\u0646\u064A\u0629 \u0648\u0627\u0644\u062C\u0646\u0627\u0626\u064A\u0629</a></li><li><a href="#" class="footer-link">\u0627\u0644\u062A\u062D\u0643\u064A\u0645 \u0648\u062A\u0633\u0648\u064A\u0629 \u0627\u0644\u0646\u0632\u0627\u0639\u0627\u062A</a></li></ul></div><div class="col-lg-3 col-md-6"><h5 class="footer-heading mb-4">\u0627\u0644\u0645\u062F\u0648\u0646\u0629</h5><ul class="list-unstyled footer-list"><li><a href="#" class="footer-link">\u0627\u0644\u0639\u0642\u0648\u062F \u0648\u0627\u0644\u0627\u062A\u0641\u0627\u0642\u064A\u0627\u062A</a></li><li><a href="#" class="footer-link">\u0627\u0644\u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u062A\u062C\u0627\u0631\u064A \u0648\u0627\u0644\u0634\u0631\u0643\u0627\u062A</a></li><li><a href="#" class="footer-link">\u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0645\u062F\u0646\u064A\u0629</a></li><li><a href="#" class="footer-link">\u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u062C\u0646\u0627\u0626\u064A\u0629</a></li><li><a href="#" class="footer-link">\u0627\u0644\u062A\u062D\u0643\u064A\u0645 \u0648\u062A\u0633\u0648\u064A\u0629 \u0627\u0644\u0646\u0632\u0627\u0639\u0627\u062A</a></li><li><a href="#" class="footer-link">\u0623\u0646\u0638\u0645\u0629 \u0648\u0644\u0648\u0627\u0626\u062D \u0633\u0639\u0648\u062F\u064A\u0629</a></li><li><a href="#" class="footer-link">\u062D\u0648\u0643\u0645\u0629 \u0648\u0627\u0645\u062A\u062B\u0627\u0644</a></li></ul></div><div class="col-lg-3 col-md-6"><h5 class="footer-heading mb-4">\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u062A\u0648\u0627\u0635\u0644</h5><div class="contact-item mb-3"><span class="contact-label">\u0627\u0644\u0647\u0627\u062A\u0641:</span><br><a href="tel:05XXXXXXXX" class="footer-link">05XXXXXXXX</a></div><div class="contact-item mb-3"><span class="contact-label">\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A:</span><br><a href="mailto:info@lawfirm.sa" class="footer-link">info@lawfirm.sa</a></div><div class="contact-item"><span class="contact-label">\u0627\u0644\u0639\u0646\u0648\u0627\u0646:</span><br><span class="footer-text">\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629</span></div></div></div><div class="footer-bottom mt-5 pt-4 border-top border-secondary d-flex flex-md-row flex-column justify-content-between align-items-center"><p class="copyright mb-0">\xA9 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629 - \u0645\u0643\u062A\u0628 \u0645\u062D\u0627\u0645\u0627\u0629</p><div class="social-links mb-3 mb-md-0"><a href="#" class="social-icon"><i data-lucide="instagram"></i></a><a href="#" class="social-icon"><i data-lucide="facebook"></i></a><a href="#" class="social-icon brand-icon-x"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a><a href="#" class="social-icon"><i data-lucide="linkedin"></i></a><a href="#" class="social-icon"><i data-lucide="youtube"></i></a></div></div></div></footer></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LightFooter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { LightWhyUs as L, _sfc_main$9 as _, _sfc_main$8 as a, LightServices as b, LightTeam as c, LightBlog as d, LightAccreditations as e, LightTestimonials as f, LightCTA as g, LightFooter as h };
//# sourceMappingURL=Footer-C1QRxyh4.mjs.map
