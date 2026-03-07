import { mergeProps, withCtx, createVNode, unref, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-DIEMWijX.mjs';
import { _ as _imports_0 } from './virtual_public-B8MnIwJ6.mjs';
import { u as useHead, _ as _export_sfc } from './_plugin-vue_export-helper-ChBMeibh.mjs';
import { _ as _imports_0$1$1, a as _imports_0$2, b as _imports_2$1 } from './virtual_public-DO9UfAUU.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import { _ as _imports_0$1, a as _imports_1, b as _imports_2 } from './virtual_public-CP3K-QAO.mjs';
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

const _sfc_main$a = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "landing-3-header py-3 bg-white" }, _attrs))} data-v-4e87343d><div class="container-fluid px-lg-5" data-v-4e87343d><div class="d-flex align-items-center justify-content-between w-100" data-v-4e87343d><div class="header-logo-left" data-v-4e87343d>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/landing-page-3/en",
    class: "navbar-brand"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="logo-img" data-v-4e87343d${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "Logo",
            class: "logo-img"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="header-nav-center d-none d-lg-block" data-v-4e87343d><ul class="nav justify-content-center" data-v-4e87343d><li class="nav-item" data-v-4e87343d><a class="nav-link active" href="#" data-v-4e87343d>Home</a></li><li class="nav-item" data-v-4e87343d><a class="nav-link" href="#" data-v-4e87343d>About Us</a></li><li class="nav-item" data-v-4e87343d><a class="nav-link" href="#" data-v-4e87343d>Services</a></li><li class="nav-item" data-v-4e87343d><a class="nav-link" href="#" data-v-4e87343d>Our Team</a></li><li class="nav-item" data-v-4e87343d><a class="nav-link" href="#" data-v-4e87343d>Blog</a></li><li class="nav-item" data-v-4e87343d><a class="nav-link" href="#" data-v-4e87343d>Contact Us</a></li></ul></div><div class="header-action-right" data-v-4e87343d><a href="#" class="btn-consult-cream" data-v-4e87343d>Request Consultation</a></div><button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navCollapseEn" data-v-4e87343d><i data-lucide="menu" data-v-4e87343d></i></button></div><div class="collapse d-lg-none mt-3" id="navCollapseEn" data-v-4e87343d><ul class="nav flex-column text-center" data-v-4e87343d><li class="nav-item py-2" data-v-4e87343d><a class="nav-link" href="#" data-v-4e87343d>Home</a></li><li class="nav-item py-2" data-v-4e87343d><a class="nav-link" href="#" data-v-4e87343d>About Us</a></li><li class="nav-item py-2" data-v-4e87343d><a class="nav-link" href="#" data-v-4e87343d>Services</a></li><li class="nav-item py-2" data-v-4e87343d><a class="nav-link" href="#" data-v-4e87343d>Our Team</a></li><li class="nav-item py-2" data-v-4e87343d><a class="nav-link" href="#" data-v-4e87343d>Blog</a></li><li class="nav-item py-2" data-v-4e87343d><a class="nav-link" href="#" data-v-4e87343d>Contact Us</a></li><li class="nav-item py-2 mt-2" data-v-4e87343d><a href="#" class="btn-consult-cream w-100" data-v-4e87343d>Request Consultation</a></li></ul></div></div></header>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing-3/HeaderEn.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Landing3Header = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-4e87343d"]]);
const _sfc_main$9 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hero-outer-wrapper" }, _attrs))} data-v-824f381c><section class="landing-3-hero" data-v-824f381c><div class="watermark-pattern" data-v-824f381c></div><div class="container hero-container" data-v-824f381c><div class="row justify-content-center text-center" data-v-824f381c><div class="col-lg-10" data-v-824f381c><h1 class="hero-title animate-up" data-v-824f381c>Trusted Legal Expertise<br data-v-824f381c>to Protect Your Rights</h1><p class="hero-subtitle animate-up-delayed" data-v-824f381c> We provide professional legal services for individuals and companies,<br data-v-824f381c> based on expertise, integrity, and strict adherence to the highest<br data-v-824f381c> professional standards. </p><div class="hero-actions animate-up-more-delayed" data-v-824f381c><a href="#" class="btn-hero-centered" data-v-824f381c>Request Consultation</a></div></div></div></div></section></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing-3/HeroEn.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Landing3Hero = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-824f381c"]]);
const _sfc_main$8 = {
  __name: "WhyUsEn",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      {
        icon: "gavel",
        title: "Specialized Legal Expertise",
        description: "A team of lawyers and legal consultants with extensive experience in various legal fields."
      },
      {
        icon: "shield-check",
        title: "Complete Confidentiality",
        description: "We commit to the highest standards of professional confidentiality and legal ethics."
      },
      {
        icon: "user-check",
        title: "Strong Legal Representation",
        description: "We defend our clients' rights before judicial authorities with utmost professionalism."
      },
      {
        icon: "file-text",
        title: "Accurate Case Tracking",
        description: "We ensure to follow all cases step-by-step and keep our clients constantly informed."
      },
      {
        icon: "calendar-check",
        title: "Commitment to Deadlines",
        description: "We are committed to accuracy and respecting time, focusing on achieving the best results."
      },
      {
        icon: "scale",
        title: "Customized Legal Solutions",
        description: "We provide studied legal solutions that suit the nature of each case and client needs."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "why-us-landing-2" }, _attrs))} data-v-4ae0a945><div class="container" data-v-4ae0a945><div class="text-center mb-5" data-v-4ae0a945><h2 class="section-title-centered text-dark" data-v-4ae0a945>Why Our Clients Trust Us</h2></div><div class="row g-4" data-v-4ae0a945><!--[-->`);
      ssrRenderList(features, (item, index) => {
        _push(`<div class="col-lg-4 col-md-6" data-v-4ae0a945><div class="feature-card-v2" data-v-4ae0a945><div class="feature-icon-v2" data-v-4ae0a945><i${ssrRenderAttr("data-lucide", item.icon)} data-v-4ae0a945></i></div><h3 class="feature-title-v2" data-v-4ae0a945>${ssrInterpolate(item.title)}</h3><p class="feature-text-v2" data-v-4ae0a945>${ssrInterpolate(item.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing-3/WhyUsEn.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Landing3WhyUs = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-4ae0a945"]]);
const _sfc_main$7 = {
  __name: "ServicesEn",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-section py-5" }, _attrs))} data-v-584f33b6><div class="container py-lg-5" data-v-584f33b6><div class="row justify-content-center mb-5" data-v-584f33b6><div class="col-lg-8 mx-auto text-center" data-v-584f33b6><h2 class="section-title mb-3 text-center" data-v-584f33b6>Our Legal Services</h2><p class="section-subtitle text-muted text-center" data-v-584f33b6> We provide legal services based on expertise and commitment, with clear and reliable solutions tailored to our clients&#39; needs. </p></div></div><div class="row g-4" data-v-584f33b6><div class="col-lg-4 col-md-6" data-v-584f33b6><div class="service-card-v3 h-100" data-v-584f33b6><div class="card-icon-box" data-v-584f33b6><i data-lucide="scale" class="card-icon" data-v-584f33b6></i></div><h3 class="card-title" data-v-584f33b6>Legal Consultations</h3><p class="card-text text-muted" data-v-584f33b6> Providing accurate legal advice to help you make informed decisions. </p><a href="#" class="card-link" data-v-584f33b6>Read More <i data-lucide="chevron-right" class="link-icon" data-v-584f33b6></i></a></div></div><div class="col-lg-4 col-md-6" data-v-584f33b6><div class="service-card-v3 h-100" data-v-584f33b6><div class="card-icon-box" data-v-584f33b6><i data-lucide="shield-check" class="card-icon" data-v-584f33b6></i></div><h3 class="card-title" data-v-584f33b6>Litigation &amp; Court Representation</h3><p class="card-text text-muted" data-v-584f33b6> Professional legal representation before various judicial authorities. </p><a href="#" class="card-link" data-v-584f33b6>Read More <i data-lucide="chevron-right" class="link-icon" data-v-584f33b6></i></a></div></div><div class="col-lg-4 col-md-6" data-v-584f33b6><div class="service-card-v3 h-100" data-v-584f33b6><div class="card-icon-box" data-v-584f33b6><i data-lucide="briefcase" class="card-icon" data-v-584f33b6></i></div><h3 class="card-title" data-v-584f33b6>Corporate &amp; Commercial Law</h3><p class="card-text text-muted" data-v-584f33b6> Comprehensive legal support for companies in various transactions and disputes. </p><a href="#" class="card-link" data-v-584f33b6>Read More <i data-lucide="chevron-right" class="link-icon" data-v-584f33b6></i></a></div></div><div class="col-lg-4 col-md-6" data-v-584f33b6><div class="service-card-v3 h-100" data-v-584f33b6><div class="card-icon-box" data-v-584f33b6><i data-lucide="scroll-text" class="card-icon" data-v-584f33b6></i></div><h3 class="card-title" data-v-584f33b6>Drafting &amp; Reviewing Contracts</h3><p class="card-text text-muted" data-v-584f33b6> Preparing and reviewing contracts to protect rights and minimize risks. </p><a href="#" class="card-link" data-v-584f33b6>Read More <i data-lucide="chevron-right" class="link-icon" data-v-584f33b6></i></a></div></div><div class="col-lg-4 col-md-6" data-v-584f33b6><div class="service-card-v3 h-100" data-v-584f33b6><div class="card-icon-box" data-v-584f33b6><i data-lucide="gavel" class="card-icon" data-v-584f33b6></i></div><h3 class="card-title" data-v-584f33b6>Civil &amp; Criminal Cases</h3><p class="card-text text-muted" data-v-584f33b6> Handling civil and criminal cases with professionalism and complete confidentiality. </p><a href="#" class="card-link" data-v-584f33b6>Read More <i data-lucide="chevron-right" class="link-icon" data-v-584f33b6></i></a></div></div><div class="col-lg-4 col-md-6" data-v-584f33b6><div class="service-card-v3 h-100" data-v-584f33b6><div class="card-icon-box" data-v-584f33b6><i data-lucide="users-2" class="card-icon" data-v-584f33b6></i></div><h3 class="card-title" data-v-584f33b6>Arbitration &amp; Dispute Resolution</h3><p class="card-text text-muted" data-v-584f33b6> Resolving disputes through alternative legal means that save time and costs. </p><a href="#" class="card-link" data-v-584f33b6>Read More <i data-lucide="chevron-right" class="link-icon" data-v-584f33b6></i></a></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing-3/ServicesEn.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Landing3Services = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-584f33b6"]]);
const _sfc_main$6 = {
  __name: "TeamEn",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "team-section" }, _attrs))} data-v-482c7595><div class="container" data-v-482c7595><div class="text-center mb-5" data-v-482c7595><h2 class="section-title mb-2 text-center" data-v-482c7595>Our Team</h2><p class="section-subtitle text-muted text-center" data-v-482c7595>Our office includes a group of elite lawyers and legal consultants who work as a team to provide the best legal solutions for our clients.</p></div><div class="swiper-container-wrapper" data-v-482c7595>`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: [unref(Autoplay)],
        "slides-per-view": 1,
        "space-between": 30,
        dir: "ltr",
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
                  _push3(`<div class="team-card" data-v-482c7595${_scopeId2}><div class="team-img-wrapper" data-v-482c7595${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1$1)} alt="Lawyer Abdullah bin Mohammed Al-Qahtani" data-v-482c7595${_scopeId2}></div><h4 class="team-member-name" data-v-482c7595${_scopeId2}>Lawyer Abdullah bin Mohammed Al-Qahtani</h4><p class="team-member-role" data-v-482c7595${_scopeId2}>Lawyer and legal consultant specialized in commercial cases and contract drafting, with practical experience in representing companies and individuals.</p><a href="#" class="team-link" data-v-482c7595${_scopeId2}>Read More <i data-lucide="chevron-right" data-v-482c7595${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$1$1,
                          alt: "Lawyer Abdullah bin Mohammed Al-Qahtani"
                        })
                      ]),
                      createVNode("h4", { class: "team-member-name" }, "Lawyer Abdullah bin Mohammed Al-Qahtani"),
                      createVNode("p", { class: "team-member-role" }, "Lawyer and legal consultant specialized in commercial cases and contract drafting, with practical experience in representing companies and individuals."),
                      createVNode("a", {
                        href: "#",
                        class: "team-link"
                      }, [
                        createTextVNode("Read More "),
                        createVNode("i", { "data-lucide": "chevron-right" })
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
                  _push3(`<div class="team-card" data-v-482c7595${_scopeId2}><div class="team-img-wrapper" data-v-482c7595${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1$1)} alt="Lawyer Fahad bin Saud Al-Otaibi" data-v-482c7595${_scopeId2}></div><h4 class="team-member-name" data-v-482c7595${_scopeId2}>Lawyer Fahad bin Saud Al-Otaibi</h4><p class="team-member-role" data-v-482c7595${_scopeId2}>Specialized in litigation and court representation, with experience in civil cases and various legal disputes.</p><a href="#" class="team-link" data-v-482c7595${_scopeId2}>Read More <i data-lucide="chevron-right" data-v-482c7595${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$1$1,
                          alt: "Lawyer Fahad bin Saud Al-Otaibi"
                        })
                      ]),
                      createVNode("h4", { class: "team-member-name" }, "Lawyer Fahad bin Saud Al-Otaibi"),
                      createVNode("p", { class: "team-member-role" }, "Specialized in litigation and court representation, with experience in civil cases and various legal disputes."),
                      createVNode("a", {
                        href: "#",
                        class: "team-link"
                      }, [
                        createTextVNode("Read More "),
                        createVNode("i", { "data-lucide": "chevron-right" })
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
                  _push3(`<div class="team-card" data-v-482c7595${_scopeId2}><div class="team-img-wrapper" data-v-482c7595${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1$1)} alt="Legal Consultant Ahmed bin Khalid Al-Harbi" data-v-482c7595${_scopeId2}></div><h4 class="team-member-name" data-v-482c7595${_scopeId2}>Legal Consultant Ahmed bin Khalid Al-Harbi</h4><p class="team-member-role" data-v-482c7595${_scopeId2}>Legal consultant in corporate affairs and commercial regulations, providing well-studied legal solutions that support business growth.</p><a href="#" class="team-link" data-v-482c7595${_scopeId2}>Read More <i data-lucide="chevron-right" data-v-482c7595${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$1$1,
                          alt: "Legal Consultant Ahmed bin Khalid Al-Harbi"
                        })
                      ]),
                      createVNode("h4", { class: "team-member-name" }, "Legal Consultant Ahmed bin Khalid Al-Harbi"),
                      createVNode("p", { class: "team-member-role" }, "Legal consultant in corporate affairs and commercial regulations, providing well-studied legal solutions that support business growth."),
                      createVNode("a", {
                        href: "#",
                        class: "team-link"
                      }, [
                        createTextVNode("Read More "),
                        createVNode("i", { "data-lucide": "chevron-right" })
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
                  _push3(`<div class="team-card" data-v-482c7595${_scopeId2}><div class="team-img-wrapper" data-v-482c7595${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1$1)} alt="Lawyer" data-v-482c7595${_scopeId2}></div><h4 class="team-member-name" data-v-482c7595${_scopeId2}>Lawyer</h4><p class="team-member-role" data-v-482c7595${_scopeId2}>Specialized in civil cases, with experience in defending clients&#39; rights according to rules and regulations.</p><a href="#" class="team-link" data-v-482c7595${_scopeId2}>Read More <i data-lucide="chevron-right" data-v-482c7595${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$1$1,
                          alt: "Lawyer"
                        })
                      ]),
                      createVNode("h4", { class: "team-member-name" }, "Lawyer"),
                      createVNode("p", { class: "team-member-role" }, "Specialized in civil cases, with experience in defending clients' rights according to rules and regulations."),
                      createVNode("a", {
                        href: "#",
                        class: "team-link"
                      }, [
                        createTextVNode("Read More "),
                        createVNode("i", { "data-lucide": "chevron-right" })
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
                  _push3(`<div class="team-card" data-v-482c7595${_scopeId2}><div class="team-img-wrapper" data-v-482c7595${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1$1)} alt="Lawyer Khalid bin Walid" data-v-482c7595${_scopeId2}></div><h4 class="team-member-name" data-v-482c7595${_scopeId2}>Lawyer Khalid bin Walid</h4><p class="team-member-role" data-v-482c7595${_scopeId2}>Specialized in personal status and inheritance cases, with extensive experience in family courts.</p><a href="#" class="team-link" data-v-482c7595${_scopeId2}>Read More <i data-lucide="chevron-right" data-v-482c7595${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$1$1,
                          alt: "Lawyer Khalid bin Walid"
                        })
                      ]),
                      createVNode("h4", { class: "team-member-name" }, "Lawyer Khalid bin Walid"),
                      createVNode("p", { class: "team-member-role" }, "Specialized in personal status and inheritance cases, with extensive experience in family courts."),
                      createVNode("a", {
                        href: "#",
                        class: "team-link"
                      }, [
                        createTextVNode("Read More "),
                        createVNode("i", { "data-lucide": "chevron-right" })
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
                  _push3(`<div class="team-card" data-v-482c7595${_scopeId2}><div class="team-img-wrapper" data-v-482c7595${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1$1)} alt="Consultant Noura Abdulaziz" data-v-482c7595${_scopeId2}></div><h4 class="team-member-name" data-v-482c7595${_scopeId2}>Consultant Noura Abdulaziz</h4><p class="team-member-role" data-v-482c7595${_scopeId2}>Expert in labor regulations and employee rights protection, providing consultations on labor contracts.</p><a href="#" class="team-link" data-v-482c7595${_scopeId2}>Read More <i data-lucide="chevron-right" data-v-482c7595${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$1$1,
                          alt: "Consultant Noura Abdulaziz"
                        })
                      ]),
                      createVNode("h4", { class: "team-member-name" }, "Consultant Noura Abdulaziz"),
                      createVNode("p", { class: "team-member-role" }, "Expert in labor regulations and employee rights protection, providing consultations on labor contracts."),
                      createVNode("a", {
                        href: "#",
                        class: "team-link"
                      }, [
                        createTextVNode("Read More "),
                        createVNode("i", { "data-lucide": "chevron-right" })
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
                  _push3(`<div class="team-card" data-v-482c7595${_scopeId2}><div class="team-img-wrapper" data-v-482c7595${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1$1)} alt="Lawyer Faisal Abdulrahman" data-v-482c7595${_scopeId2}></div><h4 class="team-member-name" data-v-482c7595${_scopeId2}>Lawyer Faisal Abdulrahman</h4><p class="team-member-role" data-v-482c7595${_scopeId2}>Specialized in real estate cases and land disputes, with experience in contract documentation.</p><a href="#" class="team-link" data-v-482c7595${_scopeId2}>Read More <i data-lucide="chevron-right" data-v-482c7595${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$1$1,
                          alt: "Lawyer Faisal Abdulrahman"
                        })
                      ]),
                      createVNode("h4", { class: "team-member-name" }, "Lawyer Faisal Abdulrahman"),
                      createVNode("p", { class: "team-member-role" }, "Specialized in real estate cases and land disputes, with experience in contract documentation."),
                      createVNode("a", {
                        href: "#",
                        class: "team-link"
                      }, [
                        createTextVNode("Read More "),
                        createVNode("i", { "data-lucide": "chevron-right" })
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
                        alt: "Lawyer Abdullah bin Mohammed Al-Qahtani"
                      })
                    ]),
                    createVNode("h4", { class: "team-member-name" }, "Lawyer Abdullah bin Mohammed Al-Qahtani"),
                    createVNode("p", { class: "team-member-role" }, "Lawyer and legal consultant specialized in commercial cases and contract drafting, with practical experience in representing companies and individuals."),
                    createVNode("a", {
                      href: "#",
                      class: "team-link"
                    }, [
                      createTextVNode("Read More "),
                      createVNode("i", { "data-lucide": "chevron-right" })
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
                        alt: "Lawyer Fahad bin Saud Al-Otaibi"
                      })
                    ]),
                    createVNode("h4", { class: "team-member-name" }, "Lawyer Fahad bin Saud Al-Otaibi"),
                    createVNode("p", { class: "team-member-role" }, "Specialized in litigation and court representation, with experience in civil cases and various legal disputes."),
                    createVNode("a", {
                      href: "#",
                      class: "team-link"
                    }, [
                      createTextVNode("Read More "),
                      createVNode("i", { "data-lucide": "chevron-right" })
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
                        alt: "Legal Consultant Ahmed bin Khalid Al-Harbi"
                      })
                    ]),
                    createVNode("h4", { class: "team-member-name" }, "Legal Consultant Ahmed bin Khalid Al-Harbi"),
                    createVNode("p", { class: "team-member-role" }, "Legal consultant in corporate affairs and commercial regulations, providing well-studied legal solutions that support business growth."),
                    createVNode("a", {
                      href: "#",
                      class: "team-link"
                    }, [
                      createTextVNode("Read More "),
                      createVNode("i", { "data-lucide": "chevron-right" })
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
                        alt: "Lawyer"
                      })
                    ]),
                    createVNode("h4", { class: "team-member-name" }, "Lawyer"),
                    createVNode("p", { class: "team-member-role" }, "Specialized in civil cases, with experience in defending clients' rights according to rules and regulations."),
                    createVNode("a", {
                      href: "#",
                      class: "team-link"
                    }, [
                      createTextVNode("Read More "),
                      createVNode("i", { "data-lucide": "chevron-right" })
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
                        alt: "Lawyer Khalid bin Walid"
                      })
                    ]),
                    createVNode("h4", { class: "team-member-name" }, "Lawyer Khalid bin Walid"),
                    createVNode("p", { class: "team-member-role" }, "Specialized in personal status and inheritance cases, with extensive experience in family courts."),
                    createVNode("a", {
                      href: "#",
                      class: "team-link"
                    }, [
                      createTextVNode("Read More "),
                      createVNode("i", { "data-lucide": "chevron-right" })
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
                        alt: "Consultant Noura Abdulaziz"
                      })
                    ]),
                    createVNode("h4", { class: "team-member-name" }, "Consultant Noura Abdulaziz"),
                    createVNode("p", { class: "team-member-role" }, "Expert in labor regulations and employee rights protection, providing consultations on labor contracts."),
                    createVNode("a", {
                      href: "#",
                      class: "team-link"
                    }, [
                      createTextVNode("Read More "),
                      createVNode("i", { "data-lucide": "chevron-right" })
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
                        alt: "Lawyer Faisal Abdulrahman"
                      })
                    ]),
                    createVNode("h4", { class: "team-member-name" }, "Lawyer Faisal Abdulrahman"),
                    createVNode("p", { class: "team-member-role" }, "Specialized in real estate cases and land disputes, with experience in contract documentation."),
                    createVNode("a", {
                      href: "#",
                      class: "team-link"
                    }, [
                      createTextVNode("Read More "),
                      createVNode("i", { "data-lucide": "chevron-right" })
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing-3/TeamEn.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Landing3Team = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-482c7595"]]);
const _sfc_main$5 = {
  __name: "BlogEn",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-outer-wrapper" }, _attrs))} data-v-a998e6fe><section class="blog-section-inner pt-5 pb-5" data-v-a998e6fe><div class="container py-4" data-v-a998e6fe><div class="row justify-content-center mb-5" data-v-a998e6fe><div class="col-lg-8 mx-auto text-center" data-v-a998e6fe><h2 class="section-title mb-3 text-center" data-v-a998e6fe>Legal Blog</h2><p class="section-subtitle text-center" data-v-a998e6fe>We share simplified legal articles highlighting regulations and legislation, helping individuals and companies understand their rights and make informed legal decisions.</p></div></div><div class="row g-4 px-lg-5 justify-content-center" data-v-a998e6fe><div class="col-lg-6 col-md-10" data-v-a998e6fe><div class="blog-card-v3 h-100" data-v-a998e6fe><div class="blog-img-wrapper mb-4" data-v-a998e6fe><img${ssrRenderAttr("src", _imports_0$2)} alt="The Importance of Legal Consultation before Signing Contracts" class="img-fluid" data-v-a998e6fe></div><div class="blog-content" data-v-a998e6fe><h3 class="blog-title mb-3" data-v-a998e6fe>The Importance of Legal Consultation before Signing Contracts</h3><p class="blog-description mb-4" data-v-a998e6fe>Learn about the importance of getting a legal consultation before signing any contract, and how it helps protect your rights and avoid legal risks.</p><a href="#" class="blog-link" data-v-a998e6fe>Read More <i data-lucide="chevron-right" data-v-a998e6fe></i></a></div></div></div><div class="col-lg-6 col-md-10" data-v-a998e6fe><div class="blog-card-v3 h-100" data-v-a998e6fe><div class="blog-img-wrapper mb-4" data-v-a998e6fe><img${ssrRenderAttr("src", _imports_2$1)} alt="The Most Prominent Legal Mistakes Made by Startups" class="img-fluid" data-v-a998e6fe></div><div class="blog-content" data-v-a998e6fe><h3 class="blog-title mb-3" data-v-a998e6fe>The Most Prominent Legal Mistakes Made by Startups</h3><p class="blog-description mb-4" data-v-a998e6fe>We review the most common legal mistakes made by startups, with practical advice on how to avoid them from the start.</p><a href="#" class="blog-link" data-v-a998e6fe>Read More <i data-lucide="chevron-right" data-v-a998e6fe></i></a></div></div></div></div><div class="text-center mt-5" data-v-a998e6fe><a href="#" class="btn-blog-main" data-v-a998e6fe>Read More</a></div></div></section></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing-3/BlogEn.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Landing3Blog = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-a998e6fe"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "accreditations-outer-wrapper" }, _attrs))} data-v-3cdccb8c><section class="accreditations-section-inner pt-5 pb-5" data-v-3cdccb8c><div class="container" data-v-3cdccb8c><div class="text-center mb-5" data-v-3cdccb8c><h2 class="section-title mb-2 text-center text-white" data-v-3cdccb8c>Company Accreditations</h2><p class="section-subtitle text-center" style="${ssrRenderStyle({ "color": "rgba(255, 255, 255, 0.8)" })}" data-v-3cdccb8c>We hold professional accreditations and licenses reflecting our commitment to regulatory standards and best practices in providing legal and consulting services, locally and internationally.</p></div><div class="row g-4" data-v-3cdccb8c><div class="col-lg-4 col-md-6" data-v-3cdccb8c><div class="accreditation-card text-center" data-v-3cdccb8c><div class="accreditation-logo-wrapper mb-4" data-v-3cdccb8c><img${ssrRenderAttr("src", _imports_0$1)} alt="Saudi Authority for Intellectual Property" class="img-fluid" style="${ssrRenderStyle({ "height": "60px", "object-fit": "contain" })}" data-v-3cdccb8c></div><h3 class="accreditation-title h5 fw-bold mb-3" data-v-3cdccb8c>Saudi Authority for Intellectual Property</h3><p class="accreditation-description text-muted mb-3" data-v-3cdccb8c>We help protect intellectual property rights by preparing applications and related regulatory requirements and providing specialized consultations.</p><a href="#" class="accreditation-link text-decoration-none fw-bold" style="${ssrRenderStyle({ "color": "#c3a46e" })}" data-v-3cdccb8c>Read More <i data-lucide="chevron-right" data-v-3cdccb8c></i></a></div></div><div class="col-lg-4 col-md-6" data-v-3cdccb8c><div class="accreditation-card text-center" data-v-3cdccb8c><div class="accreditation-logo-wrapper mb-4" data-v-3cdccb8c><img${ssrRenderAttr("src", _imports_1)} alt="Ministry of Human Resources and Social Development" class="img-fluid" style="${ssrRenderStyle({ "height": "60px", "object-fit": "contain" })}" data-v-3cdccb8c></div><h3 class="accreditation-title h5 fw-bold mb-3" data-v-3cdccb8c>Ministry of Human Resources and Social Development</h3><p class="accreditation-description text-muted mb-3" data-v-3cdccb8c>We provide support in preparing and reviewing internal regulations and regulatory compliance, ensuring the facility aligns with regulatory requirements.</p><a href="#" class="accreditation-link text-decoration-none fw-bold" style="${ssrRenderStyle({ "color": "#c3a46e" })}" data-v-3cdccb8c>Read More <i data-lucide="chevron-right" data-v-3cdccb8c></i></a></div></div><div class="col-lg-4 col-md-6" data-v-3cdccb8c><div class="accreditation-card text-center" data-v-3cdccb8c><div class="accreditation-logo-wrapper mb-4" data-v-3cdccb8c><img${ssrRenderAttr("src", _imports_2)} alt="Saudi Bar Association" class="img-fluid" style="${ssrRenderStyle({ "height": "60px", "object-fit": "contain" })}" data-v-3cdccb8c></div><h3 class="accreditation-title h5 fw-bold mb-3" data-v-3cdccb8c>Saudi Bar Association</h3><p class="accreditation-description text-muted mb-3" data-v-3cdccb8c>Our office is registered and committed to approved professional standards, providing legal services in accordance with relevant laws and regulations.</p><a href="#" class="accreditation-link text-decoration-none fw-bold" style="${ssrRenderStyle({ "color": "#c3a46e" })}" data-v-3cdccb8c>Read More <i data-lucide="chevron-right" data-v-3cdccb8c></i></a></div></div></div></div></section></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing-3/AccreditationsEn.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Landing3Accreditations = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-3cdccb8c"]]);
const _sfc_main$3 = {
  __name: "TestimonialsEn",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonials-section" }, _attrs))} data-v-f3d555db><div class="container" data-v-f3d555db><div class="text-center mb-5" data-v-f3d555db><h2 class="section-title mb-2 text-center" data-v-f3d555db>Client Testimonials</h2><p class="section-subtitle text-muted text-center" data-v-f3d555db>We cherish our clients&#39; trust and continuously strive to provide legal services that exceed their expectations.</p></div><div class="swiper-container-wrapper" data-v-f3d555db>`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: [unref(Autoplay)],
        "slides-per-view": 1,
        "space-between": 30,
        dir: "ltr",
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
                  _push3(`<div class="testimonial-card" data-v-f3d555db${_scopeId2}><div class="testimonial-stars" data-v-f3d555db${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i></div><p class="testimonial-text" data-v-f3d555db${_scopeId2}>&quot;Classy treatment and high professionalism. I received a clear legal consultation that helped me make the right decision with complete confidence.&quot;</p><div class="testimonial-author" data-v-f3d555db${_scopeId2}><span class="testimonial-name" data-v-f3d555db${_scopeId2}>Mohammed bin Abdullah Al-Subaie</span><span class="testimonial-role" data-v-f3d555db${_scopeId2}>Businessman</span></div></div>`);
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
                      createVNode("p", { class: "testimonial-text" }, '"Classy treatment and high professionalism. I received a clear legal consultation that helped me make the right decision with complete confidence."'),
                      createVNode("div", { class: "testimonial-author" }, [
                        createVNode("span", { class: "testimonial-name" }, "Mohammed bin Abdullah Al-Subaie"),
                        createVNode("span", { class: "testimonial-role" }, "Businessman")
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
                  _push3(`<div class="testimonial-card" data-v-f3d555db${_scopeId2}><div class="testimonial-stars" data-v-f3d555db${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i></div><p class="testimonial-text" data-v-f3d555db${_scopeId2}>&quot;An outstanding legal team, precise case follow-up, and continuous communication until reaching a satisfactory result.&quot;</p><div class="testimonial-author" data-v-f3d555db${_scopeId2}><span class="testimonial-name" data-v-f3d555db${_scopeId2}>Sarah bint Khalid Al-Otaibi</span><span class="testimonial-role" data-v-f3d555db${_scopeId2}>Business Owner</span></div></div>`);
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
                      createVNode("p", { class: "testimonial-text" }, '"An outstanding legal team, precise case follow-up, and continuous communication until reaching a satisfactory result."'),
                      createVNode("div", { class: "testimonial-author" }, [
                        createVNode("span", { class: "testimonial-name" }, "Sarah bint Khalid Al-Otaibi"),
                        createVNode("span", { class: "testimonial-role" }, "Business Owner")
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
                  _push3(`<div class="testimonial-card" data-v-f3d555db${_scopeId2}><div class="testimonial-stars" data-v-f3d555db${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i></div><p class="testimonial-text" data-v-f3d555db${_scopeId2}>&quot;Evident legal expertise and dedication to the client&#39;s best interests. I recommend dealing with them for anyone looking for trust and professionalism.&quot;</p><div class="testimonial-author" data-v-f3d555db${_scopeId2}><span class="testimonial-name" data-v-f3d555db${_scopeId2}>Abdulrahman bin Fahad Al-Qahtani</span><span class="testimonial-role" data-v-f3d555db${_scopeId2}>Company Manager</span></div></div>`);
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
                      createVNode("p", { class: "testimonial-text" }, `"Evident legal expertise and dedication to the client's best interests. I recommend dealing with them for anyone looking for trust and professionalism."`),
                      createVNode("div", { class: "testimonial-author" }, [
                        createVNode("span", { class: "testimonial-name" }, "Abdulrahman bin Fahad Al-Qahtani"),
                        createVNode("span", { class: "testimonial-role" }, "Company Manager")
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
                  _push3(`<div class="testimonial-card" data-v-f3d555db${_scopeId2}><div class="testimonial-stars" data-v-f3d555db${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i></div><p class="testimonial-text" data-v-f3d555db${_scopeId2}>&quot;Excellent service and punctuality. A highly professional office and their treatment is reassuring for any legal matter.&quot;</p><div class="testimonial-author" data-v-f3d555db${_scopeId2}><span class="testimonial-name" data-v-f3d555db${_scopeId2}>Khalid Al-Otaibi</span><span class="testimonial-role" data-v-f3d555db${_scopeId2}>Client</span></div></div>`);
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
                      createVNode("p", { class: "testimonial-text" }, '"Excellent service and punctuality. A highly professional office and their treatment is reassuring for any legal matter."'),
                      createVNode("div", { class: "testimonial-author" }, [
                        createVNode("span", { class: "testimonial-name" }, "Khalid Al-Otaibi"),
                        createVNode("span", { class: "testimonial-role" }, "Client")
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
                  _push3(`<div class="testimonial-card" data-v-f3d555db${_scopeId2}><div class="testimonial-stars" data-v-f3d555db${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i></div><p class="testimonial-text" data-v-f3d555db${_scopeId2}>&quot;They helped us solve a complex commercial case with great success. Their expertise in commercial law is truly unmatched in the region.&quot;</p><div class="testimonial-author" data-v-f3d555db${_scopeId2}><span class="testimonial-name" data-v-f3d555db${_scopeId2}>Al-Noor Real Estate Co.</span><span class="testimonial-role" data-v-f3d555db${_scopeId2}>Strategic Partner</span></div></div>`);
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
                      createVNode("p", { class: "testimonial-text" }, '"They helped us solve a complex commercial case with great success. Their expertise in commercial law is truly unmatched in the region."'),
                      createVNode("div", { class: "testimonial-author" }, [
                        createVNode("span", { class: "testimonial-name" }, "Al-Noor Real Estate Co."),
                        createVNode("span", { class: "testimonial-role" }, "Strategic Partner")
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
                  _push3(`<div class="testimonial-card" data-v-f3d555db${_scopeId2}><div class="testimonial-stars" data-v-f3d555db${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-f3d555db${_scopeId2}></i></div><p class="testimonial-text" data-v-f3d555db${_scopeId2}>&quot;I advise anyone with a legal consultation to go to them. Fast response, attention to detail, and many innovative legal solutions.&quot;</p><div class="testimonial-author" data-v-f3d555db${_scopeId2}><span class="testimonial-name" data-v-f3d555db${_scopeId2}>Nasser Al-Harbi</span><span class="testimonial-role" data-v-f3d555db${_scopeId2}>Business Consultant</span></div></div>`);
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
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          fill: "#c3a46e"
                        })
                      ]),
                      createVNode("p", { class: "testimonial-text" }, '"I advise anyone with a legal consultation to go to them. Fast response, attention to detail, and many innovative legal solutions."'),
                      createVNode("div", { class: "testimonial-author" }, [
                        createVNode("span", { class: "testimonial-name" }, "Nasser Al-Harbi"),
                        createVNode("span", { class: "testimonial-role" }, "Business Consultant")
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
                    createVNode("p", { class: "testimonial-text" }, '"Classy treatment and high professionalism. I received a clear legal consultation that helped me make the right decision with complete confidence."'),
                    createVNode("div", { class: "testimonial-author" }, [
                      createVNode("span", { class: "testimonial-name" }, "Mohammed bin Abdullah Al-Subaie"),
                      createVNode("span", { class: "testimonial-role" }, "Businessman")
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
                    createVNode("p", { class: "testimonial-text" }, '"An outstanding legal team, precise case follow-up, and continuous communication until reaching a satisfactory result."'),
                    createVNode("div", { class: "testimonial-author" }, [
                      createVNode("span", { class: "testimonial-name" }, "Sarah bint Khalid Al-Otaibi"),
                      createVNode("span", { class: "testimonial-role" }, "Business Owner")
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
                    createVNode("p", { class: "testimonial-text" }, `"Evident legal expertise and dedication to the client's best interests. I recommend dealing with them for anyone looking for trust and professionalism."`),
                    createVNode("div", { class: "testimonial-author" }, [
                      createVNode("span", { class: "testimonial-name" }, "Abdulrahman bin Fahad Al-Qahtani"),
                      createVNode("span", { class: "testimonial-role" }, "Company Manager")
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
                    createVNode("p", { class: "testimonial-text" }, '"Excellent service and punctuality. A highly professional office and their treatment is reassuring for any legal matter."'),
                    createVNode("div", { class: "testimonial-author" }, [
                      createVNode("span", { class: "testimonial-name" }, "Khalid Al-Otaibi"),
                      createVNode("span", { class: "testimonial-role" }, "Client")
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
                    createVNode("p", { class: "testimonial-text" }, '"They helped us solve a complex commercial case with great success. Their expertise in commercial law is truly unmatched in the region."'),
                    createVNode("div", { class: "testimonial-author" }, [
                      createVNode("span", { class: "testimonial-name" }, "Al-Noor Real Estate Co."),
                      createVNode("span", { class: "testimonial-role" }, "Strategic Partner")
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
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        fill: "#c3a46e"
                      })
                    ]),
                    createVNode("p", { class: "testimonial-text" }, '"I advise anyone with a legal consultation to go to them. Fast response, attention to detail, and many innovative legal solutions."'),
                    createVNode("div", { class: "testimonial-author" }, [
                      createVNode("span", { class: "testimonial-name" }, "Nasser Al-Harbi"),
                      createVNode("span", { class: "testimonial-role" }, "Business Consultant")
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing-3/TestimonialsEn.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Landing3Testimonials = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f3d555db"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "cta-section" }, _attrs))} data-v-aa845ad9><div class="container" data-v-aa845ad9><div class="cta-container" data-v-aa845ad9><div class="cta-content text-start d-flex flex-column align-items-start" data-v-aa845ad9><h2 class="cta-title" data-v-aa845ad9>Do you need legal support?</h2><p class="cta-subtitle" data-v-aa845ad9>Get a legal consultation from our specialized team, and let us help you make the right legal decision.</p><a href="#" class="cta-btn mt-3 p-3" data-v-aa845ad9>Request Consultation</a></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing-3/CTAEn.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Landing3CTA = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-aa845ad9"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "pb-5" }, _attrs))} data-v-db528458><div class="container" data-v-db528458><footer class="footer-section" data-v-db528458><div class="footer-content text-start" data-v-db528458><div class="footer-top mb-5" data-v-db528458><div class="d-flex justify-content-start align-items-center mb-4" data-v-db528458><img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="footer-logo" data-v-db528458></div></div><div class="row g-4 footer-links-row" data-v-db528458><div class="col-lg-3 col-md-6 text-start" data-v-db528458><h5 class="footer-heading text-start mb-4" data-v-db528458>Quick Links</h5><ul class="list-unstyled footer-list ps-0 text-start" data-v-db528458><li data-v-db528458><a href="#" class="footer-link text-start" data-v-db528458>Home</a></li><li data-v-db528458><a href="#" class="footer-link text-start" data-v-db528458>About Us</a></li><li data-v-db528458><a href="#" class="footer-link text-start" data-v-db528458>Services</a></li><li data-v-db528458><a href="#" class="footer-link text-start" data-v-db528458>Our Team</a></li><li data-v-db528458><a href="#" class="footer-link text-start" data-v-db528458>Blog</a></li><li data-v-db528458><a href="#" class="footer-link text-start" data-v-db528458>Jobs</a></li></ul></div><div class="col-lg-3 col-md-6 text-start" data-v-db528458><h5 class="footer-heading text-start mb-4" data-v-db528458>Our Services</h5><ul class="list-unstyled footer-list ps-0 text-start" data-v-db528458><li data-v-db528458><a href="#" class="footer-link text-start" data-v-db528458>Legal Consultations</a></li><li data-v-db528458><a href="#" class="footer-link text-start" data-v-db528458>Litigation and Court Representation</a></li><li data-v-db528458><a href="#" class="footer-link text-start" data-v-db528458>Corporate Cases and Commercial Law</a></li><li data-v-db528458><a href="#" class="footer-link text-start" data-v-db528458>Drafting and Reviewing Contracts</a></li><li data-v-db528458><a href="#" class="footer-link text-start" data-v-db528458>Civil and Criminal Cases</a></li><li data-v-db528458><a href="#" class="footer-link text-start" data-v-db528458>Arbitration and Dispute Settlement</a></li></ul></div><div class="col-lg-3 col-md-6 text-start" data-v-db528458><h5 class="footer-heading text-start mb-4" data-v-db528458>Blog</h5><ul class="list-unstyled footer-list ps-0 text-start" data-v-db528458><li data-v-db528458><a href="#" class="footer-link text-start" data-v-db528458>Contracts and Agreements</a></li><li data-v-db528458><a href="#" class="footer-link text-start" data-v-db528458>Commercial and Corporate Law</a></li><li data-v-db528458><a href="#" class="footer-link text-start" data-v-db528458>Civil Cases</a></li><li data-v-db528458><a href="#" class="footer-link text-start" data-v-db528458>Criminal Cases</a></li><li data-v-db528458><a href="#" class="footer-link text-start" data-v-db528458>Arbitration and Dispute Settlement</a></li><li data-v-db528458><a href="#" class="footer-link text-start" data-v-db528458>Saudi Systems and Regulations</a></li><li data-v-db528458><a href="#" class="footer-link text-start" data-v-db528458>Governance and Compliance</a></li></ul></div><div class="col-lg-3 col-md-6 text-start" data-v-db528458><h5 class="footer-heading text-start mb-4" data-v-db528458>Contact Information</h5><div class="contact-item mb-3 text-start" data-v-db528458><span class="contact-label" data-v-db528458>Phone:</span><br data-v-db528458><a href="tel:05XXXXXXXX" class="footer-link text-start px-0" data-v-db528458>05XXXXXXXX</a></div><div class="contact-item mb-3 text-start" data-v-db528458><span class="contact-label" data-v-db528458>Email:</span><br data-v-db528458><a href="mailto:info@lawfirm.sa" class="footer-link text-start px-0" data-v-db528458>info@lawfirm.sa</a></div><div class="contact-item text-start" data-v-db528458><span class="contact-label" data-v-db528458>Address:</span><br data-v-db528458><span class="footer-text" data-v-db528458>Saudi Arabia</span></div></div></div><div class="footer-bottom mt-5 pt-4 border-top border-secondary d-flex flex-md-row flex-column justify-content-between align-items-center" data-v-db528458><p class="copyright mb-0" data-v-db528458>\xA9 All Rights Reserved - Law Firm</p><div class="social-links mb-3 mb-md-0 d-flex gap-3" data-v-db528458><a href="#" class="social-icon social-icon-primary" data-v-db528458><i data-lucide="instagram" data-v-db528458></i></a><a href="#" class="social-icon" data-v-db528458><i data-lucide="facebook" data-v-db528458></i></a><a href="#" class="social-icon brand-icon-x" data-v-db528458><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" data-v-db528458><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" data-v-db528458></path></svg></a><a href="#" class="social-icon" data-v-db528458><i data-lucide="linkedin" data-v-db528458></i></a><a href="#" class="social-icon" data-v-db528458><i data-lucide="youtube" data-v-db528458></i></a></div></div></div></footer></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing-3/FooterEn.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Landing3Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-db528458"]]);
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
      _push(ssrRenderComponent(Landing3Header, null, null, _parent));
      _push(ssrRenderComponent(Landing3Hero, null, null, _parent));
      _push(ssrRenderComponent(Landing3WhyUs, null, null, _parent));
      _push(ssrRenderComponent(Landing3Services, null, null, _parent));
      _push(ssrRenderComponent(Landing3Accreditations, null, null, _parent));
      _push(ssrRenderComponent(Landing3Team, null, null, _parent));
      _push(ssrRenderComponent(Landing3Blog, null, null, _parent));
      _push(ssrRenderComponent(Landing3Testimonials, null, null, _parent));
      _push(ssrRenderComponent(Landing3CTA, null, null, _parent));
      _push(ssrRenderComponent(Landing3Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/landing-page-3/en/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DtVZVOEl.mjs.map
