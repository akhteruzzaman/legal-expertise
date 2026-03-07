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
      _push(`<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav mx-auto"><li class="nav-item"><a class="nav-link active" href="#">Home</a></li><li class="nav-item"><a class="nav-link" href="#">About Us</a></li><li class="nav-item"><a class="nav-link" href="#">Our Services</a></li><li class="nav-item"><a class="nav-link" href="#">Our Team</a></li><li class="nav-item"><a class="nav-link" href="#">Blog</a></li><li class="nav-item"><a class="nav-link" href="#">Contact Us</a></li></ul><div class="d-flex"><a href="#" class="btn btn-consult">Request Consultation</a></div></div></div></nav>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light-en/Header.vue");
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero-section" }, _attrs))}><div class="container"><div class="row align-items-center gx-lg-5"><div class="col-lg-5 text-start hero-content ps-lg-0"><h1 class="hero-title text-start">Trusted legal expertise to protect your rights</h1><p class="hero-subtitle text-start"> We provide professional legal services for individuals and companies, based on expertise, integrity, and strict adherence to the highest professional standards. </p><a href="#" class="btn-hero">Request Consultation</a></div><div class="col-lg-7"><div class="hero-img-container"><img${ssrRenderAttr("src", _imports_0$1)} alt="Legal Expertise" class="hero-img">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light-en/Hero.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "why-us-section" }, _attrs))} data-v-0f9db2a1><div class="container" data-v-0f9db2a1><h2 class="section-title text-start" data-v-0f9db2a1>Why our clients trust us</h2><div class="row g-4" data-v-0f9db2a1><div class="col-lg-3 col-md-6" data-v-0f9db2a1><div class="feature-card" data-v-0f9db2a1><div class="feature-icon" data-v-0f9db2a1><i data-lucide="clipboard-list" data-v-0f9db2a1></i></div><h3 class="feature-title" data-v-0f9db2a1>Accurate case tracking</h3><p class="feature-text" data-v-0f9db2a1> We ensure to follow all cases step-by-step and keep our clients constantly informed. </p></div></div><div class="col-lg-3 col-md-6" data-v-0f9db2a1><div class="feature-card" data-v-0f9db2a1><div class="feature-icon" data-v-0f9db2a1><i data-lucide="gavel" data-v-0f9db2a1></i></div><h3 class="feature-title" data-v-0f9db2a1>Specialized legal expertise</h3><p class="feature-text" data-v-0f9db2a1> A team of lawyers and legal consultants with extensive experience in various legal fields. </p></div></div><div class="col-lg-3 col-md-6" data-v-0f9db2a1><div class="feature-card" data-v-0f9db2a1><div class="feature-icon" data-v-0f9db2a1><i data-lucide="shield" data-v-0f9db2a1></i></div><h3 class="feature-title" data-v-0f9db2a1>Complete confidentiality and professionalism</h3><p class="feature-text" data-v-0f9db2a1> We commit to the highest standards of professional confidentiality and legal ethics in all cases. </p></div></div><div class="col-lg-3 col-md-6" data-v-0f9db2a1><div class="feature-card" data-v-0f9db2a1><div class="feature-icon" data-v-0f9db2a1><i data-lucide="user-round-check" data-v-0f9db2a1></i></div><h3 class="feature-title" data-v-0f9db2a1>Strong legal representation</h3><p class="feature-text" data-v-0f9db2a1> We defend our clients&#39; rights before judicial authorities with utmost professionalism and competence. </p></div></div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light-en/WhyUs.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const LightEnWhyUs = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-0f9db2a1"]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-section" }, _attrs))}><div class="container"><div class="mb-5"><h2 class="section-title mb-2 text-start">Our Legal Services</h2><p class="section-subtitle text-muted text-start">We provide legal services based on expertise and commitment, with clear and reliable solutions tailored to our clients&#39; needs.</p></div><div class="row align-items-center staggered-row flex-lg-row-reverse"><div class="col-lg-6"><img${ssrRenderAttr("src", _imports_0$2)} alt="Legal Consultations" class="img-fluid rounded-4 shadow service-img"></div><div class="col-lg-6"><div class="service-content p-lg-5"><h3 class="service-item-title mb-3">Legal Consultations</h3><p class="service-description text-muted mb-4"> Providing accurate legal advice based on approved regulations, helping individuals and businesses make sound and well-studied legal decisions. </p><a href="#" class="btn-read-more">Read More <i data-lucide="chevron-right" class="ms-1"></i></a></div></div></div><div class="row align-items-center staggered-row"><div class="col-lg-6"><img${ssrRenderAttr("src", _imports_1)} alt="Litigation and Court Representation" class="img-fluid rounded-4 shadow service-img"></div><div class="col-lg-6"><div class="service-content p-lg-5"><h3 class="service-item-title mb-3">Litigation and Court Representation</h3><p class="service-description text-muted mb-4"> Professional legal representation before various judicial authorities, with comprehensive follow-up of cases at all stages until the best possible outcomes are achieved. </p><a href="#" class="btn-read-more">Read More <i data-lucide="chevron-right" class="ms-1"></i></a></div></div></div><div class="row align-items-center staggered-row flex-lg-row-reverse"><div class="col-lg-6"><img${ssrRenderAttr("src", _imports_2)} alt="Corporate Cases and Commercial Law" class="img-fluid rounded-4 shadow service-img"></div><div class="col-lg-6"><div class="service-content p-lg-5"><h3 class="service-item-title mb-3">Corporate Cases and Commercial Law</h3><p class="service-description text-muted mb-4"> Providing comprehensive legal support for companies, including establishment, dispute management, and organizing commercial relations to ensure compliance and protect interests. </p><a href="#" class="btn-read-more">Read More <i data-lucide="chevron-right" class="ms-1"></i></a></div></div></div><div class="row align-items-center staggered-row"><div class="col-lg-6"><img${ssrRenderAttr("src", _imports_3)} alt="Drafting and Reviewing Contracts" class="img-fluid rounded-4 shadow service-img"></div><div class="col-lg-6"><div class="service-content p-lg-5"><h3 class="service-item-title mb-3">Drafting and Reviewing Contracts</h3><p class="service-description text-muted mb-4"> Preparing, drafting, and reviewing all contracts and agreements professionally, focusing on clarity of clauses, protecting rights, and minimizing legal risks. </p><a href="#" class="btn-read-more">Read More <i data-lucide="chevron-right" class="ms-1"></i></a></div></div></div><div class="row align-items-center staggered-row flex-lg-row-reverse"><div class="col-lg-6"><img${ssrRenderAttr("src", _imports_4)} alt="Civil and Criminal Cases" class="img-fluid rounded-4 shadow service-img"></div><div class="col-lg-6"><div class="service-content p-lg-5"><h3 class="service-item-title mb-3">Civil and Criminal Cases</h3><p class="service-description text-muted mb-4"> Handling civil and criminal cases highly efficiently, maintaining complete confidentiality, and defending clients&#39; rights according to rules and regulations. </p><a href="#" class="btn-read-more">Read More <i data-lucide="chevron-right" class="ms-1"></i></a></div></div></div><div class="row align-items-center staggered-row"><div class="col-lg-6"><img${ssrRenderAttr("src", _imports_5)} alt="Arbitration and Dispute Settlement" class="img-fluid rounded-4 shadow service-img"></div><div class="col-lg-6"><div class="service-content p-lg-5"><h3 class="service-item-title mb-3">Arbitration and Dispute Settlement</h3><p class="service-description text-muted mb-4"> Resolving disputes through alternative legal means such as arbitration and mediation, helping to save time and costs while achieving fair solutions. </p><a href="#" class="btn-read-more">Read More <i data-lucide="chevron-right" class="ms-1"></i></a></div></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light-en/Services.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const LightEnServices = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$5 = {
  __name: "Team",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "team-section" }, _attrs))} data-v-1e762da4><div class="container" data-v-1e762da4><div class="mb-5" data-v-1e762da4><h2 class="section-title mb-2 text-start" data-v-1e762da4>Our Team</h2><p class="section-subtitle text-muted text-start" data-v-1e762da4>Our office includes a group of elite lawyers and legal consultants who work as a team to provide the best legal solutions for our clients.</p></div><div class="swiper-container-wrapper" data-v-1e762da4>`);
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
                  _push3(`<div class="team-card" data-v-1e762da4${_scopeId2}><div class="team-img-wrapper" data-v-1e762da4${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1$1)} alt="Lawyer Abdullah bin Mohammed Al-Qahtani" data-v-1e762da4${_scopeId2}></div><h4 class="team-member-name" data-v-1e762da4${_scopeId2}>Lawyer Abdullah bin Mohammed Al-Qahtani</h4><p class="team-member-role" data-v-1e762da4${_scopeId2}>Lawyer and legal consultant specialized in commercial cases and contract drafting, with practical experience in representing companies and individuals.</p><a href="#" class="team-link" data-v-1e762da4${_scopeId2}>Read More <i data-lucide="chevron-right" data-v-1e762da4${_scopeId2}></i></a></div>`);
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
                  _push3(`<div class="team-card" data-v-1e762da4${_scopeId2}><div class="team-img-wrapper" data-v-1e762da4${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1$1)} alt="Lawyer Fahad bin Saud Al-Otaibi" data-v-1e762da4${_scopeId2}></div><h4 class="team-member-name" data-v-1e762da4${_scopeId2}>Lawyer Fahad bin Saud Al-Otaibi</h4><p class="team-member-role" data-v-1e762da4${_scopeId2}>Specialized in litigation and court representation, with experience in civil cases and various legal disputes.</p><a href="#" class="team-link" data-v-1e762da4${_scopeId2}>Read More <i data-lucide="chevron-right" data-v-1e762da4${_scopeId2}></i></a></div>`);
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
                  _push3(`<div class="team-card" data-v-1e762da4${_scopeId2}><div class="team-img-wrapper" data-v-1e762da4${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1$1)} alt="Legal Consultant Ahmed bin Khalid Al-Harbi" data-v-1e762da4${_scopeId2}></div><h4 class="team-member-name" data-v-1e762da4${_scopeId2}>Legal Consultant Ahmed bin Khalid Al-Harbi</h4><p class="team-member-role" data-v-1e762da4${_scopeId2}>Legal consultant in corporate affairs and commercial regulations, providing well-studied legal solutions that support business growth.</p><a href="#" class="team-link" data-v-1e762da4${_scopeId2}>Read More <i data-lucide="chevron-right" data-v-1e762da4${_scopeId2}></i></a></div>`);
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
                  _push3(`<div class="team-card" data-v-1e762da4${_scopeId2}><div class="team-img-wrapper" data-v-1e762da4${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1$1)} alt="Lawyer" data-v-1e762da4${_scopeId2}></div><h4 class="team-member-name" data-v-1e762da4${_scopeId2}>Lawyer</h4><p class="team-member-role" data-v-1e762da4${_scopeId2}>Specialized in civil cases, with experience in defending clients&#39; rights according to rules and regulations.</p><a href="#" class="team-link" data-v-1e762da4${_scopeId2}>Read More <i data-lucide="chevron-right" data-v-1e762da4${_scopeId2}></i></a></div>`);
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
                  _push3(`<div class="team-card" data-v-1e762da4${_scopeId2}><div class="team-img-wrapper" data-v-1e762da4${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1$1)} alt="Lawyer Khalid bin Walid" data-v-1e762da4${_scopeId2}></div><h4 class="team-member-name" data-v-1e762da4${_scopeId2}>Lawyer Khalid bin Walid</h4><p class="team-member-role" data-v-1e762da4${_scopeId2}>Specialized in personal status and inheritance cases, with extensive experience in family courts.</p><a href="#" class="team-link" data-v-1e762da4${_scopeId2}>Read More <i data-lucide="chevron-right" data-v-1e762da4${_scopeId2}></i></a></div>`);
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
                  _push3(`<div class="team-card" data-v-1e762da4${_scopeId2}><div class="team-img-wrapper" data-v-1e762da4${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1$1)} alt="Consultant Noura Abdulaziz" data-v-1e762da4${_scopeId2}></div><h4 class="team-member-name" data-v-1e762da4${_scopeId2}>Consultant Noura Abdulaziz</h4><p class="team-member-role" data-v-1e762da4${_scopeId2}>Expert in labor regulations and employee rights protection, providing consultations on labor contracts.</p><a href="#" class="team-link" data-v-1e762da4${_scopeId2}>Read More <i data-lucide="chevron-right" data-v-1e762da4${_scopeId2}></i></a></div>`);
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
                  _push3(`<div class="team-card" data-v-1e762da4${_scopeId2}><div class="team-img-wrapper" data-v-1e762da4${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1$1)} alt="Lawyer Faisal Abdulrahman" data-v-1e762da4${_scopeId2}></div><h4 class="team-member-name" data-v-1e762da4${_scopeId2}>Lawyer Faisal Abdulrahman</h4><p class="team-member-role" data-v-1e762da4${_scopeId2}>Specialized in real estate cases and land disputes, with experience in contract documentation.</p><a href="#" class="team-link" data-v-1e762da4${_scopeId2}>Read More <i data-lucide="chevron-right" data-v-1e762da4${_scopeId2}></i></a></div>`);
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light-en/Team.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const LightEnTeam = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-1e762da4"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-section" }, _attrs))}><div class="container"><div class="blog-inner-container"><div class="mb-5"><h2 class="section-title mb-2 text-start">Legal Blog</h2><p class="section-subtitle text-muted text-start">We share simplified legal articles highlighting regulations and legislation, helping individuals and companies understand their rights and make informed legal decisions.</p></div><div class="row g-4"><div class="col-lg-4 col-md-6"><div class="blog-card"><div class="blog-img-wrapper"><img${ssrRenderAttr("src", _imports_0$3)} alt="The Importance of Legal Consultation before Signing Contracts"></div><div class="blog-content"><h3 class="blog-title">The Importance of Legal Consultation before Signing Contracts</h3><p class="blog-description">Learn about the importance of getting a legal consultation before signing any contract, and how it helps protect your rights and avoid legal risks.</p><a href="#" class="blog-link">Read More <i data-lucide="chevron-right"></i></a></div></div></div><div class="col-lg-4 col-md-6"><div class="blog-card"><div class="blog-img-wrapper"><img${ssrRenderAttr("src", _imports_1$1)} alt="When Do You Need to Resort to Arbitration instead of Litigation?"></div><div class="blog-content"><h3 class="blog-title">When Do You Need to Resort to Arbitration instead of Litigation?</h3><p class="blog-description">A simplified explanation of the differences between arbitration and litigation, and when arbitration is the most suitable choice for resolving disputes.</p><a href="#" class="blog-link">Read More <i data-lucide="chevron-right"></i></a></div></div></div><div class="col-lg-4 col-md-6"><div class="blog-card"><div class="blog-img-wrapper"><img${ssrRenderAttr("src", _imports_2$1)} alt="The Most Prominent Legal Mistakes Made by Startups"></div><div class="blog-content"><h3 class="blog-title">The Most Prominent Legal Mistakes Made by Startups</h3><p class="blog-description">We review the most common legal mistakes made by startups, with practical advice on how to avoid them from the start.</p><a href="#" class="blog-link">Read More <i data-lucide="chevron-right"></i></a></div></div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light-en/Blog.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const LightEnBlog = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "accreditations-section" }, _attrs))}><div class="container"><div class="mb-5"><h2 class="section-title mb-2 text-start">Company Accreditations</h2><p class="section-subtitle text-muted text-start">We hold professional accreditations and licenses reflecting our commitment to regulatory standards and best practices in providing legal and consulting services, locally and internationally.</p></div><div class="row g-4"><div class="col-lg-4 col-md-6"><div class="accreditation-card"><div class="accreditation-logo-wrapper"><img${ssrRenderAttr("src", _imports_0$4)} alt="Saudi Authority for Intellectual Property"></div><h3 class="accreditation-title">Saudi Authority for Intellectual Property</h3><p class="accreditation-description">We help protect intellectual property rights by preparing applications and related regulatory requirements and providing specialized consultations.</p><a href="#" class="accreditation-link">Read More <i data-lucide="chevron-right"></i></a></div></div><div class="col-lg-4 col-md-6"><div class="accreditation-card"><div class="accreditation-logo-wrapper"><img${ssrRenderAttr("src", _imports_1$2)} alt="Ministry of Human Resources and Social Development"></div><h3 class="accreditation-title">Ministry of Human Resources and Social Development</h3><p class="accreditation-description">We provide support in preparing and reviewing internal regulations and regulatory compliance, ensuring the facility aligns with regulatory requirements.</p><a href="#" class="accreditation-link">Read More <i data-lucide="chevron-right"></i></a></div></div><div class="col-lg-4 col-md-6"><div class="accreditation-card"><div class="accreditation-logo-wrapper"><img${ssrRenderAttr("src", _imports_2$2)} alt="Saudi Bar Association"></div><h3 class="accreditation-title">Saudi Bar Association</h3><p class="accreditation-description">Our office is registered and committed to approved professional standards, providing legal services in accordance with relevant laws and regulations.</p><a href="#" class="accreditation-link">Read More <i data-lucide="chevron-right"></i></a></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light-en/Accreditations.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const LightEnAccreditations = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonials-section" }, _attrs))} data-v-ef7878c0><div class="container" data-v-ef7878c0><div class="mb-5" data-v-ef7878c0><h2 class="section-title mb-2 text-start" data-v-ef7878c0>Client Testimonials</h2><p class="section-subtitle text-muted text-start" data-v-ef7878c0>We cherish our clients&#39; trust and continuously strive to provide legal services that exceed their expectations.</p></div><div class="swiper-container-wrapper" data-v-ef7878c0>`);
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
                  _push3(`<div class="testimonial-card" data-v-ef7878c0${_scopeId2}><div class="testimonial-stars" data-v-ef7878c0${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i></div><p class="testimonial-text" data-v-ef7878c0${_scopeId2}>&quot;Classy treatment and high professionalism. I received a clear legal consultation that helped me make the right decision with complete confidence.&quot;</p><div class="testimonial-author" data-v-ef7878c0${_scopeId2}><span class="testimonial-name" data-v-ef7878c0${_scopeId2}>Mohammed bin Abdullah Al-Subaie</span><span class="testimonial-role" data-v-ef7878c0${_scopeId2}>Businessman</span></div></div>`);
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
                  _push3(`<div class="testimonial-card" data-v-ef7878c0${_scopeId2}><div class="testimonial-stars" data-v-ef7878c0${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i></div><p class="testimonial-text" data-v-ef7878c0${_scopeId2}>&quot;An outstanding legal team, precise case follow-up, and continuous communication until reaching a satisfactory result.&quot;</p><div class="testimonial-author" data-v-ef7878c0${_scopeId2}><span class="testimonial-name" data-v-ef7878c0${_scopeId2}>Sarah bint Khalid Al-Otaibi</span><span class="testimonial-role" data-v-ef7878c0${_scopeId2}>Business Owner</span></div></div>`);
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
                  _push3(`<div class="testimonial-card" data-v-ef7878c0${_scopeId2}><div class="testimonial-stars" data-v-ef7878c0${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i></div><p class="testimonial-text" data-v-ef7878c0${_scopeId2}>&quot;Evident legal expertise and dedication to the client&#39;s best interests. I recommend dealing with them for anyone looking for trust and professionalism.&quot;</p><div class="testimonial-author" data-v-ef7878c0${_scopeId2}><span class="testimonial-name" data-v-ef7878c0${_scopeId2}>Abdulrahman bin Fahad Al-Qahtani</span><span class="testimonial-role" data-v-ef7878c0${_scopeId2}>Company Manager</span></div></div>`);
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
                  _push3(`<div class="testimonial-card" data-v-ef7878c0${_scopeId2}><div class="testimonial-stars" data-v-ef7878c0${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i></div><p class="testimonial-text" data-v-ef7878c0${_scopeId2}>&quot;Excellent service and punctuality. A highly professional office and their treatment is reassuring for any legal matter.&quot;</p><div class="testimonial-author" data-v-ef7878c0${_scopeId2}><span class="testimonial-name" data-v-ef7878c0${_scopeId2}>Khalid Al-Otaibi</span><span class="testimonial-role" data-v-ef7878c0${_scopeId2}>Client</span></div></div>`);
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
                  _push3(`<div class="testimonial-card" data-v-ef7878c0${_scopeId2}><div class="testimonial-stars" data-v-ef7878c0${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i></div><p class="testimonial-text" data-v-ef7878c0${_scopeId2}>&quot;They helped us solve a complex commercial case with great success. Their expertise in commercial law is truly unmatched in the region.&quot;</p><div class="testimonial-author" data-v-ef7878c0${_scopeId2}><span class="testimonial-name" data-v-ef7878c0${_scopeId2}>Al-Noor Real Estate Co.</span><span class="testimonial-role" data-v-ef7878c0${_scopeId2}>Strategic Partner</span></div></div>`);
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
                  _push3(`<div class="testimonial-card" data-v-ef7878c0${_scopeId2}><div class="testimonial-stars" data-v-ef7878c0${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-ef7878c0${_scopeId2}></i></div><p class="testimonial-text" data-v-ef7878c0${_scopeId2}>&quot;I advise anyone with a legal consultation to go to them. Fast response, attention to detail, and many innovative legal solutions.&quot;</p><div class="testimonial-author" data-v-ef7878c0${_scopeId2}><span class="testimonial-name" data-v-ef7878c0${_scopeId2}>Nasser Al-Harbi</span><span class="testimonial-role" data-v-ef7878c0${_scopeId2}>Business Consultant</span></div></div>`);
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light-en/Testimonials.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const LightEnTestimonials = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ef7878c0"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "cta-section" }, _attrs))}><div class="container"><div class="cta-container"><div class="cta-pattern"></div><div class="cta-content text-start d-flex flex-column align-items-start"><h2 class="cta-title">Do you need legal support?</h2><p class="cta-subtitle">Get a legal consultation from our specialized team, and let us help you make the right legal decision.</p><a href="#" class="cta-btn mt-3 p-3">Request Consultation</a></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light-en/CTA.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LightEnCTA = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "pb-5" }, _attrs))}><div class="container"><footer class="footer-section"><div class="footer-content text-start"><div class="footer-top mb-5"><div class="d-flex justify-content-start align-items-center mb-4"><img${ssrRenderAttr("src", _imports_0$5)} alt="Logo" class="footer-logo"></div></div><div class="row g-4 footer-links-row"><div class="col-lg-3 col-md-6 text-start"><h5 class="footer-heading text-start mb-4">Quick Links</h5><ul class="list-unstyled footer-list ps-0 text-start"><li><a href="#" class="footer-link text-start">Home</a></li><li><a href="#" class="footer-link text-start">About Us</a></li><li><a href="#" class="footer-link text-start">Services</a></li><li><a href="#" class="footer-link text-start">Our Team</a></li><li><a href="#" class="footer-link text-start">Blog</a></li><li><a href="#" class="footer-link text-start">Jobs</a></li></ul></div><div class="col-lg-3 col-md-6 text-start"><h5 class="footer-heading text-start mb-4">Our Services</h5><ul class="list-unstyled footer-list ps-0 text-start"><li><a href="#" class="footer-link text-start">Legal Consultations</a></li><li><a href="#" class="footer-link text-start">Litigation and Court Representation</a></li><li><a href="#" class="footer-link text-start">Corporate Cases and Commercial Law</a></li><li><a href="#" class="footer-link text-start">Drafting and Reviewing Contracts</a></li><li><a href="#" class="footer-link text-start">Civil and Criminal Cases</a></li><li><a href="#" class="footer-link text-start">Arbitration and Dispute Settlement</a></li></ul></div><div class="col-lg-3 col-md-6 text-start"><h5 class="footer-heading text-start mb-4">Blog</h5><ul class="list-unstyled footer-list ps-0 text-start"><li><a href="#" class="footer-link text-start">Contracts and Agreements</a></li><li><a href="#" class="footer-link text-start">Commercial and Corporate Law</a></li><li><a href="#" class="footer-link text-start">Civil Cases</a></li><li><a href="#" class="footer-link text-start">Criminal Cases</a></li><li><a href="#" class="footer-link text-start">Arbitration and Dispute Settlement</a></li><li><a href="#" class="footer-link text-start">Saudi Systems and Regulations</a></li><li><a href="#" class="footer-link text-start">Governance and Compliance</a></li></ul></div><div class="col-lg-3 col-md-6 text-start"><h5 class="footer-heading text-start mb-4">Contact Information</h5><div class="contact-item mb-3 text-start"><span class="contact-label">Phone:</span><br><a href="tel:05XXXXXXXX" class="footer-link text-start px-0">05XXXXXXXX</a></div><div class="contact-item mb-3 text-start"><span class="contact-label">Email:</span><br><a href="mailto:info@lawfirm.sa" class="footer-link text-start px-0">info@lawfirm.sa</a></div><div class="contact-item text-start"><span class="contact-label">Address:</span><br><span class="footer-text">Saudi Arabia</span></div></div></div><div class="footer-bottom mt-5 pt-4 border-top border-secondary d-flex flex-md-row flex-column justify-content-between align-items-center"><p class="copyright mb-0">\xA9 All Rights Reserved - Law Firm</p><div class="social-links mb-3 mb-md-0"><a href="#" class="social-icon"><i data-lucide="instagram"></i></a><a href="#" class="social-icon"><i data-lucide="facebook"></i></a><a href="#" class="social-icon brand-icon-x"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a><a href="#" class="social-icon"><i data-lucide="linkedin"></i></a><a href="#" class="social-icon"><i data-lucide="youtube"></i></a></div></div></div></footer></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light-en/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LightEnFooter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { LightEnWhyUs as L, _sfc_main$9 as _, _sfc_main$8 as a, LightEnServices as b, LightEnTeam as c, LightEnBlog as d, LightEnAccreditations as e, LightEnTestimonials as f, LightEnCTA as g, LightEnFooter as h };
//# sourceMappingURL=Footer-CVP35ypU.mjs.map
