import { mergeProps, useSSRContext, unref, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./virtual_public-BGu3sNhM.js";
import { _ as _export_sfc, u as useHead } from "./_plugin-vue_export-helper-ChBMeibh.js";
import { _ as _imports_0$1, a as _imports_0$2, b as _imports_2 } from "./virtual_public-DO9UfAUU.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import { _ as _imports_1 } from "./virtual_public-BwrrH5yG.js";
import { _ as _imports_0$3, a as _imports_1$1, b as _imports_2$1 } from "./virtual_public-k4-vkUz6.js";
import "#internal/nuxt/paths";
import "D:/PROJECTS/legal-expertise/node_modules/@unhead/vue/dist/index.mjs";
import "../server.mjs";
import "D:/PROJECTS/legal-expertise/node_modules/ofetch/dist/node.mjs";
import "D:/PROJECTS/legal-expertise/node_modules/hookable/dist/index.mjs";
import "D:/PROJECTS/legal-expertise/node_modules/unctx/dist/index.mjs";
import "D:/PROJECTS/legal-expertise/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/PROJECTS/legal-expertise/node_modules/defu/dist/defu.mjs";
import "D:/PROJECTS/legal-expertise/node_modules/ufo/dist/index.mjs";
const _sfc_main$a = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar navbar-expand-lg" }, _attrs))}><div class="container"><a class="navbar-brand" href="#"><img${ssrRenderAttr("src", _imports_0)} alt="Logo"></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav mx-auto"><li class="nav-item"><a class="nav-link" href="#">Home</a></li><li class="nav-item"><a class="nav-link" href="#">About Us</a></li><li class="nav-item"><a class="nav-link" href="#">Services</a></li><li class="nav-item"><a class="nav-link" href="#">Our Team</a></li><li class="nav-item"><a class="nav-link" href="#">Blog</a></li><li class="nav-item"><a class="nav-link" href="#">Contact Us</a></li></ul><div class="d-flex"><a href="#" class="btn btn-consult">Request Legal Consultation</a></div></div></div></nav>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark-en/Header.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const DarkHeader = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$9 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero-section" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "nav", {}, null, _push, _parent);
  _push(`<div class="hero-overlay"></div><div class="hero-content"><h1 class="hero-title">Trusted legal expertise<br>to protect your rights</h1><p class="hero-subtitle"> We provide professional legal services for individuals and companies,<br> based on expertise, integrity, and absolute commitment to the highest<br> professional standards. </p><a href="#" class="hero-btn">Request Legal Consultation</a></div><h2 class="section-title-hero">Why Our Clients Trust Us</h2></section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark-en/Hero.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const DarkHero = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "why-us-section" }, _attrs))}><div class="container"><div class="row g-4 justify-content-center"><div class="col-md-4"><div class="feature-card h-100 text-center"><div class="feature-icon mb-4"><i data-lucide="shield"></i></div><h3 class="feature-title">Complete Confidentiality and Professionalism</h3><p class="feature-text"> We adhere to the highest standards of professional confidentiality and legal ethics in all cases. </p></div></div><div class="col-md-4"><div class="feature-card h-100 text-center"><div class="feature-icon mb-4"><i data-lucide="gavel"></i></div><h3 class="feature-title">Specialized Legal Expertise</h3><p class="feature-text"> A team of lawyers and legal consultants with extensive experience in various legal fields. </p></div></div><div class="col-md-4"><div class="feature-card h-100 text-center"><div class="feature-icon mb-4"><i data-lucide="user"></i></div><h3 class="feature-title">Strong Legal Representation</h3><p class="feature-text"> We defend our clients&#39; rights before judicial authorities with utmost professionalism and efficiency. </p></div></div></div></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark-en/WhyUs.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const DarkWhyUs = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-section" }, _attrs))}><div class="container"><h2 class="section-title-services mb-2">Legal Services</h2><p class="section-subtitle-services mb-5"> We provide legal services based on expertise and commitment, with clear and reliable solutions tailored to our clients&#39; needs. </p><div class="row g-4 justify-content-center"><div class="col-md-4"><div class="feature-card h-100 text-center"><div class="feature-icon mb-4"><i data-lucide="gavel"></i></div><h3 class="feature-title">Contract Drafting and Review</h3><p class="feature-text"> Drafting and reviewing contracts to preserve rights and minimize risks. </p><a href="#" class="details-link">Read More <i data-lucide="chevron-right" class="small-icon"></i></a></div></div><div class="col-md-4"><div class="feature-card h-100 text-center"><div class="feature-icon mb-4"><i data-lucide="shield"></i></div><h3 class="feature-title">Civil and Criminal Cases</h3><p class="feature-text"> Handling civil and criminal cases with professionalism and complete confidentiality. </p><a href="#" class="details-link">Read More <i data-lucide="chevron-right" class="small-icon"></i></a></div></div><div class="col-md-4"><div class="feature-card h-100 text-center"><div class="feature-icon mb-4"><i data-lucide="stamp"></i></div><h3 class="feature-title">Arbitration and Dispute Settlement</h3><p class="feature-text"> Resolving disputes through alternative legal methods preserving time and costs. </p><a href="#" class="details-link">Read More <i data-lucide="chevron-right" class="small-icon"></i></a></div></div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark-en/Services.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const DarkServices = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$6 = {
  __name: "Team",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "team-section" }, _attrs))} data-v-df0ad332><div class="container" data-v-df0ad332><h2 class="section-title-services mb-2" data-v-df0ad332>Our Team</h2><p class="section-subtitle-services mb-5" data-v-df0ad332> Our firm includes elite lawyers and legal consultants who work with team spirit to provide the best legal solutions for our clients. </p><div class="swiper-container-wrapper" data-v-df0ad332>`);
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
          "768": { slidesPerView: 2 },
          "992": { slidesPerView: 3 }
        },
        class: "team-swiper"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="feature-card team-card h-100 text-center" data-v-df0ad332${_scopeId2}><div class="team-img-container mb-4" data-v-df0ad332${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt="Lawyer Abdullah bin Mohammed Al-Qahtani" class="team-img" data-v-df0ad332${_scopeId2}></div><h3 class="feature-title" data-v-df0ad332${_scopeId2}>Lawyer Abdullah bin Mohammed Al-Qahtani</h3><p class="feature-text" data-v-df0ad332${_scopeId2}> Lawyer and legal consultant specializing in commercial cases and contract drafting, with practical experience representing companies and individuals. </p><a href="#" class="details-link" data-v-df0ad332${_scopeId2}>Read More <i data-lucide="chevron-right" class="small-icon" data-v-df0ad332${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "feature-card team-card h-100 text-center" }, [
                      createVNode("div", { class: "team-img-container mb-4" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: "Lawyer Abdullah bin Mohammed Al-Qahtani",
                          class: "team-img"
                        })
                      ]),
                      createVNode("h3", { class: "feature-title" }, "Lawyer Abdullah bin Mohammed Al-Qahtani"),
                      createVNode("p", { class: "feature-text" }, " Lawyer and legal consultant specializing in commercial cases and contract drafting, with practical experience representing companies and individuals. "),
                      createVNode("a", {
                        href: "#",
                        class: "details-link"
                      }, [
                        createTextVNode("Read More "),
                        createVNode("i", {
                          "data-lucide": "chevron-right",
                          class: "small-icon"
                        })
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
                  _push3(`<div class="feature-card team-card h-100 text-center" data-v-df0ad332${_scopeId2}><div class="team-img-container mb-4" data-v-df0ad332${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt="Lawyer Fahd bin Saud Al-Otaibi" class="team-img" data-v-df0ad332${_scopeId2}></div><h3 class="feature-title" data-v-df0ad332${_scopeId2}>Lawyer Fahd bin Saud Al-Otaibi</h3><p class="feature-text" data-v-df0ad332${_scopeId2}> Specialist in litigation and court representation, with experience in civil cases and various legal disputes. </p><a href="#" class="details-link" data-v-df0ad332${_scopeId2}>Read More <i data-lucide="chevron-right" class="small-icon" data-v-df0ad332${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "feature-card team-card h-100 text-center" }, [
                      createVNode("div", { class: "team-img-container mb-4" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: "Lawyer Fahd bin Saud Al-Otaibi",
                          class: "team-img"
                        })
                      ]),
                      createVNode("h3", { class: "feature-title" }, "Lawyer Fahd bin Saud Al-Otaibi"),
                      createVNode("p", { class: "feature-text" }, " Specialist in litigation and court representation, with experience in civil cases and various legal disputes. "),
                      createVNode("a", {
                        href: "#",
                        class: "details-link"
                      }, [
                        createTextVNode("Read More "),
                        createVNode("i", {
                          "data-lucide": "chevron-right",
                          class: "small-icon"
                        })
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
                  _push3(`<div class="feature-card team-card h-100 text-center" data-v-df0ad332${_scopeId2}><div class="team-img-container mb-4" data-v-df0ad332${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt="Legal Consultant Ahmed bin Khalid Al-Harbi" class="team-img" data-v-df0ad332${_scopeId2}></div><h3 class="feature-title" data-v-df0ad332${_scopeId2}>Legal Consultant Ahmed bin Khalid Al-Harbi</h3><p class="feature-text" data-v-df0ad332${_scopeId2}> Legal consultant in corporate affairs and commercial regulations, providing deliberate legal solutions supporting business growth. </p><a href="#" class="details-link" data-v-df0ad332${_scopeId2}>Read More <i data-lucide="chevron-right" class="small-icon" data-v-df0ad332${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "feature-card team-card h-100 text-center" }, [
                      createVNode("div", { class: "team-img-container mb-4" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: "Legal Consultant Ahmed bin Khalid Al-Harbi",
                          class: "team-img"
                        })
                      ]),
                      createVNode("h3", { class: "feature-title" }, "Legal Consultant Ahmed bin Khalid Al-Harbi"),
                      createVNode("p", { class: "feature-text" }, " Legal consultant in corporate affairs and commercial regulations, providing deliberate legal solutions supporting business growth. "),
                      createVNode("a", {
                        href: "#",
                        class: "details-link"
                      }, [
                        createTextVNode("Read More "),
                        createVNode("i", {
                          "data-lucide": "chevron-right",
                          class: "small-icon"
                        })
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
                  _push3(`<div class="feature-card team-card h-100 text-center" data-v-df0ad332${_scopeId2}><div class="team-img-container mb-4" data-v-df0ad332${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt="Lawyer Khalid bin Walid" class="team-img" data-v-df0ad332${_scopeId2}></div><h3 class="feature-title" data-v-df0ad332${_scopeId2}>Lawyer Khalid bin Walid</h3><p class="feature-text" data-v-df0ad332${_scopeId2}> Specialized in personal status and inheritance cases, with extensive experience in family courts. </p><a href="#" class="details-link" data-v-df0ad332${_scopeId2}>Read More <i data-lucide="chevron-right" class="small-icon" data-v-df0ad332${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "feature-card team-card h-100 text-center" }, [
                      createVNode("div", { class: "team-img-container mb-4" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: "Lawyer Khalid bin Walid",
                          class: "team-img"
                        })
                      ]),
                      createVNode("h3", { class: "feature-title" }, "Lawyer Khalid bin Walid"),
                      createVNode("p", { class: "feature-text" }, " Specialized in personal status and inheritance cases, with extensive experience in family courts. "),
                      createVNode("a", {
                        href: "#",
                        class: "details-link"
                      }, [
                        createTextVNode("Read More "),
                        createVNode("i", {
                          "data-lucide": "chevron-right",
                          class: "small-icon"
                        })
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
                  _push3(`<div class="feature-card team-card h-100 text-center" data-v-df0ad332${_scopeId2}><div class="team-img-container mb-4" data-v-df0ad332${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt="Consultant Noura Abdulaziz" class="team-img" data-v-df0ad332${_scopeId2}></div><h3 class="feature-title" data-v-df0ad332${_scopeId2}>Consultant Noura Abdulaziz</h3><p class="feature-text" data-v-df0ad332${_scopeId2}> Expert in labor regulations and employee rights protection, providing consultations on labor contracts. </p><a href="#" class="details-link" data-v-df0ad332${_scopeId2}>Read More <i data-lucide="chevron-right" class="small-icon" data-v-df0ad332${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "feature-card team-card h-100 text-center" }, [
                      createVNode("div", { class: "team-img-container mb-4" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: "Consultant Noura Abdulaziz",
                          class: "team-img"
                        })
                      ]),
                      createVNode("h3", { class: "feature-title" }, "Consultant Noura Abdulaziz"),
                      createVNode("p", { class: "feature-text" }, " Expert in labor regulations and employee rights protection, providing consultations on labor contracts. "),
                      createVNode("a", {
                        href: "#",
                        class: "details-link"
                      }, [
                        createTextVNode("Read More "),
                        createVNode("i", {
                          "data-lucide": "chevron-right",
                          class: "small-icon"
                        })
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
                  _push3(`<div class="feature-card team-card h-100 text-center" data-v-df0ad332${_scopeId2}><div class="team-img-container mb-4" data-v-df0ad332${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt="Lawyer Faisal Abdulrahman" class="team-img" data-v-df0ad332${_scopeId2}></div><h3 class="feature-title" data-v-df0ad332${_scopeId2}>Lawyer Faisal Abdulrahman</h3><p class="feature-text" data-v-df0ad332${_scopeId2}> Specialized in real estate cases and land disputes, with experience in contract documentation. </p><a href="#" class="details-link" data-v-df0ad332${_scopeId2}>Read More <i data-lucide="chevron-right" class="small-icon" data-v-df0ad332${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "feature-card team-card h-100 text-center" }, [
                      createVNode("div", { class: "team-img-container mb-4" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: "Lawyer Faisal Abdulrahman",
                          class: "team-img"
                        })
                      ]),
                      createVNode("h3", { class: "feature-title" }, "Lawyer Faisal Abdulrahman"),
                      createVNode("p", { class: "feature-text" }, " Specialized in real estate cases and land disputes, with experience in contract documentation. "),
                      createVNode("a", {
                        href: "#",
                        class: "details-link"
                      }, [
                        createTextVNode("Read More "),
                        createVNode("i", {
                          "data-lucide": "chevron-right",
                          class: "small-icon"
                        })
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
                  createVNode("div", { class: "feature-card team-card h-100 text-center" }, [
                    createVNode("div", { class: "team-img-container mb-4" }, [
                      createVNode("img", {
                        src: _imports_0$1,
                        alt: "Lawyer Abdullah bin Mohammed Al-Qahtani",
                        class: "team-img"
                      })
                    ]),
                    createVNode("h3", { class: "feature-title" }, "Lawyer Abdullah bin Mohammed Al-Qahtani"),
                    createVNode("p", { class: "feature-text" }, " Lawyer and legal consultant specializing in commercial cases and contract drafting, with practical experience representing companies and individuals. "),
                    createVNode("a", {
                      href: "#",
                      class: "details-link"
                    }, [
                      createTextVNode("Read More "),
                      createVNode("i", {
                        "data-lucide": "chevron-right",
                        class: "small-icon"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "feature-card team-card h-100 text-center" }, [
                    createVNode("div", { class: "team-img-container mb-4" }, [
                      createVNode("img", {
                        src: _imports_0$1,
                        alt: "Lawyer Fahd bin Saud Al-Otaibi",
                        class: "team-img"
                      })
                    ]),
                    createVNode("h3", { class: "feature-title" }, "Lawyer Fahd bin Saud Al-Otaibi"),
                    createVNode("p", { class: "feature-text" }, " Specialist in litigation and court representation, with experience in civil cases and various legal disputes. "),
                    createVNode("a", {
                      href: "#",
                      class: "details-link"
                    }, [
                      createTextVNode("Read More "),
                      createVNode("i", {
                        "data-lucide": "chevron-right",
                        class: "small-icon"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "feature-card team-card h-100 text-center" }, [
                    createVNode("div", { class: "team-img-container mb-4" }, [
                      createVNode("img", {
                        src: _imports_0$1,
                        alt: "Legal Consultant Ahmed bin Khalid Al-Harbi",
                        class: "team-img"
                      })
                    ]),
                    createVNode("h3", { class: "feature-title" }, "Legal Consultant Ahmed bin Khalid Al-Harbi"),
                    createVNode("p", { class: "feature-text" }, " Legal consultant in corporate affairs and commercial regulations, providing deliberate legal solutions supporting business growth. "),
                    createVNode("a", {
                      href: "#",
                      class: "details-link"
                    }, [
                      createTextVNode("Read More "),
                      createVNode("i", {
                        "data-lucide": "chevron-right",
                        class: "small-icon"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "feature-card team-card h-100 text-center" }, [
                    createVNode("div", { class: "team-img-container mb-4" }, [
                      createVNode("img", {
                        src: _imports_0$1,
                        alt: "Lawyer Khalid bin Walid",
                        class: "team-img"
                      })
                    ]),
                    createVNode("h3", { class: "feature-title" }, "Lawyer Khalid bin Walid"),
                    createVNode("p", { class: "feature-text" }, " Specialized in personal status and inheritance cases, with extensive experience in family courts. "),
                    createVNode("a", {
                      href: "#",
                      class: "details-link"
                    }, [
                      createTextVNode("Read More "),
                      createVNode("i", {
                        "data-lucide": "chevron-right",
                        class: "small-icon"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "feature-card team-card h-100 text-center" }, [
                    createVNode("div", { class: "team-img-container mb-4" }, [
                      createVNode("img", {
                        src: _imports_0$1,
                        alt: "Consultant Noura Abdulaziz",
                        class: "team-img"
                      })
                    ]),
                    createVNode("h3", { class: "feature-title" }, "Consultant Noura Abdulaziz"),
                    createVNode("p", { class: "feature-text" }, " Expert in labor regulations and employee rights protection, providing consultations on labor contracts. "),
                    createVNode("a", {
                      href: "#",
                      class: "details-link"
                    }, [
                      createTextVNode("Read More "),
                      createVNode("i", {
                        "data-lucide": "chevron-right",
                        class: "small-icon"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "feature-card team-card h-100 text-center" }, [
                    createVNode("div", { class: "team-img-container mb-4" }, [
                      createVNode("img", {
                        src: _imports_0$1,
                        alt: "Lawyer Faisal Abdulrahman",
                        class: "team-img"
                      })
                    ]),
                    createVNode("h3", { class: "feature-title" }, "Lawyer Faisal Abdulrahman"),
                    createVNode("p", { class: "feature-text" }, " Specialized in real estate cases and land disputes, with experience in contract documentation. "),
                    createVNode("a", {
                      href: "#",
                      class: "details-link"
                    }, [
                      createTextVNode("Read More "),
                      createVNode("i", {
                        "data-lucide": "chevron-right",
                        class: "small-icon"
                      })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark-en/Team.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const DarkTeam = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-df0ad332"]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-section" }, _attrs))}><div class="container"><h2 class="section-title-services mb-2">Blog</h2><p class="section-subtitle-services mb-5"> We share simplified legal articles highlighting regulations and legislation, helping individuals and companies understand their rights and make informed legal decisions. </p><div class="row g-4 justify-content-center"><div class="col-md-4"><div class="feature-card blog-card h-100"><div class="blog-img-container mb-4"><img${ssrRenderAttr("src", _imports_0$2)} alt="أهمية الاستشارة القانونية" class="blog-img"></div><h3 class="feature-title">The Importance of Legal Consultation Before Signing Contracts</h3><p class="feature-text"> Learn about the importance of obtaining legal consultation before signing any contract, and how it helps protect your rights and avoid legal risks. </p><a href="#" class="details-link">Read More <i data-lucide="chevron-right" class="small-icon"></i></a></div></div><div class="col-md-4"><div class="feature-card blog-card h-100"><div class="blog-img-container mb-4"><img${ssrRenderAttr("src", _imports_1)} alt="متى تحتاج إلى اللجوء للتحكيم" class="blog-img"></div><h3 class="feature-title">When Do You Need to Resort to Arbitration Instead of Litigation?</h3><p class="feature-text"> A simplified explanation of the differences between arbitration and litigation, and when arbitration is the most suitable choice for dispute resolution. </p><a href="#" class="details-link">Read More <i data-lucide="chevron-right" class="small-icon"></i></a></div></div><div class="col-md-4"><div class="feature-card blog-card h-100"><div class="blog-img-container mb-4"><img${ssrRenderAttr("src", _imports_2)} alt="أبرز الأخطاء القانونية" class="blog-img"></div><h3 class="feature-title">Prominent Legal Mistakes Made by Startups</h3><p class="feature-text"> We review the most common legal errors among startups, with practical advice to avoid them from the beginning. </p><a href="#" class="details-link">Read More <i data-lucide="chevron-right" class="small-icon"></i></a></div></div></div><div class="text-center mt-5"><a href="#" class="btn-read-more">Read More</a></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark-en/Blog.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const DarkBlog = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "accreditations-section" }, _attrs))}><div class="container"><h2 class="section-title-services mb-2">Company Accreditations</h2><p class="section-subtitle-services mb-5"> We hold professional accreditations and licenses reflecting our commitment to regulatory standards and best practices in providing legal and consulting services, locally and internationally. </p><div class="row g-4 justify-content-center"><div class="col-md-4"><div class="feature-card accreditation-card h-100 text-center"><div class="logo-container mb-4"><img${ssrRenderAttr("src", _imports_0$3)} alt="Saudi Bar Association" class="accreditation-logo"></div><h3 class="feature-title">Saudi Bar Association</h3><p class="feature-text"> Our firm is registered and committed to approved professional standards, providing legal services according to relevant regulations and rules. </p><a href="#" class="details-link">Read More <i data-lucide="chevron-right" class="small-icon"></i></a></div></div><div class="col-md-4"><div class="feature-card accreditation-card h-100 text-center"><div class="logo-container mb-4"><img${ssrRenderAttr("src", _imports_1$1)} alt="Ministry of Human Resources and Social Development" class="accreditation-logo"></div><h3 class="feature-title">Ministry of Human Resources and Social Development</h3><p class="feature-text"> We provide support in preparing and reviewing internal regulations and regulatory compliance, ensuring organizational alignment with regulatory requirements. </p><a href="#" class="details-link">Read More <i data-lucide="chevron-right" class="small-icon"></i></a></div></div><div class="col-md-4"><div class="feature-card accreditation-card h-100 text-center"><div class="logo-container mb-4"><img${ssrRenderAttr("src", _imports_2$1)} alt="Saudi Authority for Intellectual Property" class="accreditation-logo"></div><h3 class="feature-title">Saudi Authority for Intellectual Property</h3><p class="feature-text"> We assist in protecting intellectual property rights through the preparation of applications, related regulatory requirements, and specialized consultations. </p><a href="#" class="details-link">Read More <i data-lucide="chevron-right" class="small-icon"></i></a></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark-en/Accreditations.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const DarkAccreditations = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonials-section" }, _attrs))} data-v-ad8804cc><div class="container" data-v-ad8804cc><h2 class="section-title-services mb-2" data-v-ad8804cc>Our Clients&#39; Reviews</h2><p class="section-subtitle-services mb-5" data-v-ad8804cc> We cherish the trust of our clients and always strive to provide legal services exceeding their expectations. </p><div class="swiper-container-wrapper" data-v-ad8804cc>`);
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
                  _push3(`<div class="feature-card testimonial-card h-100" data-v-ad8804cc${_scopeId2}><div class="star-rating mb-3" data-v-ad8804cc${_scopeId2}><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i></div><p class="feature-text testimonial-text mb-4" data-v-ad8804cc${_scopeId2}> &quot;Elegant dealing and high professionalism, I got clear legal consultation helping me make the right decision with confidence.&quot; </p><div class="reviewer-info" data-v-ad8804cc${_scopeId2}><h4 class="reviewer-name" data-v-ad8804cc${_scopeId2}>Mohammed bin Abdullah Al-Subaie</h4><span class="reviewer-role" data-v-ad8804cc${_scopeId2}>Businessman</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "feature-card testimonial-card h-100" }, [
                      createVNode("div", { class: "star-rating mb-3" }, [
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        })
                      ]),
                      createVNode("p", { class: "feature-text testimonial-text mb-4" }, ' "Elegant dealing and high professionalism, I got clear legal consultation helping me make the right decision with confidence." '),
                      createVNode("div", { class: "reviewer-info" }, [
                        createVNode("h4", { class: "reviewer-name" }, "Mohammed bin Abdullah Al-Subaie"),
                        createVNode("span", { class: "reviewer-role" }, "Businessman")
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
                  _push3(`<div class="feature-card testimonial-card h-100" data-v-ad8804cc${_scopeId2}><div class="star-rating mb-3" data-v-ad8804cc${_scopeId2}><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i></div><p class="feature-text testimonial-text mb-4" data-v-ad8804cc${_scopeId2}> &quot;Outstanding legal team, precise case tracking, and continuous communication until reaching a satisfactory result.&quot; </p><div class="reviewer-info" data-v-ad8804cc${_scopeId2}><h4 class="reviewer-name" data-v-ad8804cc${_scopeId2}>Sarah bint Khalid Al-Otaibi</h4><span class="reviewer-role" data-v-ad8804cc${_scopeId2}>Business Owner</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "feature-card testimonial-card h-100" }, [
                      createVNode("div", { class: "star-rating mb-3" }, [
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        })
                      ]),
                      createVNode("p", { class: "feature-text testimonial-text mb-4" }, ' "Outstanding legal team, precise case tracking, and continuous communication until reaching a satisfactory result." '),
                      createVNode("div", { class: "reviewer-info" }, [
                        createVNode("h4", { class: "reviewer-name" }, "Sarah bint Khalid Al-Otaibi"),
                        createVNode("span", { class: "reviewer-role" }, "Business Owner")
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
                  _push3(`<div class="feature-card testimonial-card h-100" data-v-ad8804cc${_scopeId2}><div class="star-rating mb-3" data-v-ad8804cc${_scopeId2}><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i></div><p class="feature-text testimonial-text mb-4" data-v-ad8804cc${_scopeId2}> &quot;Clear legal expertise and care for the client&#39;s interest, I advise dealing with them for those seeking trust and professionalism.&quot; </p><div class="reviewer-info" data-v-ad8804cc${_scopeId2}><h4 class="reviewer-name" data-v-ad8804cc${_scopeId2}>Abdulrahman bin Fahad Al-Qahtani</h4><span class="reviewer-role" data-v-ad8804cc${_scopeId2}>Company Manager</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "feature-card testimonial-card h-100" }, [
                      createVNode("div", { class: "star-rating mb-3" }, [
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        })
                      ]),
                      createVNode("p", { class: "feature-text testimonial-text mb-4" }, ` "Clear legal expertise and care for the client's interest, I advise dealing with them for those seeking trust and professionalism." `),
                      createVNode("div", { class: "reviewer-info" }, [
                        createVNode("h4", { class: "reviewer-name" }, "Abdulrahman bin Fahad Al-Qahtani"),
                        createVNode("span", { class: "reviewer-role" }, "Company Manager")
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
                  _push3(`<div class="feature-card testimonial-card h-100" data-v-ad8804cc${_scopeId2}><div class="star-rating mb-3" data-v-ad8804cc${_scopeId2}><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i></div><p class="feature-text testimonial-text mb-4" data-v-ad8804cc${_scopeId2}> &quot;Excellent service and punctuality. A highly professional office and their treatment is reassuring for any legal matter.&quot; </p><div class="reviewer-info" data-v-ad8804cc${_scopeId2}><h4 class="reviewer-name" data-v-ad8804cc${_scopeId2}>Khalid Al-Otaibi</h4><span class="reviewer-role" data-v-ad8804cc${_scopeId2}>Client</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "feature-card testimonial-card h-100" }, [
                      createVNode("div", { class: "star-rating mb-3" }, [
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        })
                      ]),
                      createVNode("p", { class: "feature-text testimonial-text mb-4" }, ' "Excellent service and punctuality. A highly professional office and their treatment is reassuring for any legal matter." '),
                      createVNode("div", { class: "reviewer-info" }, [
                        createVNode("h4", { class: "reviewer-name" }, "Khalid Al-Otaibi"),
                        createVNode("span", { class: "reviewer-role" }, "Client")
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
                  _push3(`<div class="feature-card testimonial-card h-100" data-v-ad8804cc${_scopeId2}><div class="star-rating mb-3" data-v-ad8804cc${_scopeId2}><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i></div><p class="feature-text testimonial-text mb-4" data-v-ad8804cc${_scopeId2}> &quot;They helped us solve a complex commercial case with great success. Their expertise in commercial law is truly unmatched in the region.&quot; </p><div class="reviewer-info" data-v-ad8804cc${_scopeId2}><h4 class="reviewer-name" data-v-ad8804cc${_scopeId2}>Al-Noor Real Estate Co.</h4><span class="reviewer-role" data-v-ad8804cc${_scopeId2}>Strategic Partner</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "feature-card testimonial-card h-100" }, [
                      createVNode("div", { class: "star-rating mb-3" }, [
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        })
                      ]),
                      createVNode("p", { class: "feature-text testimonial-text mb-4" }, ' "They helped us solve a complex commercial case with great success. Their expertise in commercial law is truly unmatched in the region." '),
                      createVNode("div", { class: "reviewer-info" }, [
                        createVNode("h4", { class: "reviewer-name" }, "Al-Noor Real Estate Co."),
                        createVNode("span", { class: "reviewer-role" }, "Strategic Partner")
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
                  _push3(`<div class="feature-card testimonial-card h-100" data-v-ad8804cc${_scopeId2}><div class="star-rating mb-3" data-v-ad8804cc${_scopeId2}><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-ad8804cc${_scopeId2}></i></div><p class="feature-text testimonial-text mb-4" data-v-ad8804cc${_scopeId2}> &quot;I advise anyone with a legal consultation to go to them. Fast response, attention to detail, and many innovative legal solutions.&quot; </p><div class="reviewer-info" data-v-ad8804cc${_scopeId2}><h4 class="reviewer-name" data-v-ad8804cc${_scopeId2}>Nasser Al-Harbi</h4><span class="reviewer-role" data-v-ad8804cc${_scopeId2}>Business Consultant</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "feature-card testimonial-card h-100" }, [
                      createVNode("div", { class: "star-rating mb-3" }, [
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        }),
                        createVNode("i", {
                          "data-lucide": "star",
                          class: "star-icon"
                        })
                      ]),
                      createVNode("p", { class: "feature-text testimonial-text mb-4" }, ' "I advise anyone with a legal consultation to go to them. Fast response, attention to detail, and many innovative legal solutions." '),
                      createVNode("div", { class: "reviewer-info" }, [
                        createVNode("h4", { class: "reviewer-name" }, "Nasser Al-Harbi"),
                        createVNode("span", { class: "reviewer-role" }, "Business Consultant")
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
                  createVNode("div", { class: "feature-card testimonial-card h-100" }, [
                    createVNode("div", { class: "star-rating mb-3" }, [
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      })
                    ]),
                    createVNode("p", { class: "feature-text testimonial-text mb-4" }, ' "Elegant dealing and high professionalism, I got clear legal consultation helping me make the right decision with confidence." '),
                    createVNode("div", { class: "reviewer-info" }, [
                      createVNode("h4", { class: "reviewer-name" }, "Mohammed bin Abdullah Al-Subaie"),
                      createVNode("span", { class: "reviewer-role" }, "Businessman")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "feature-card testimonial-card h-100" }, [
                    createVNode("div", { class: "star-rating mb-3" }, [
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      })
                    ]),
                    createVNode("p", { class: "feature-text testimonial-text mb-4" }, ' "Outstanding legal team, precise case tracking, and continuous communication until reaching a satisfactory result." '),
                    createVNode("div", { class: "reviewer-info" }, [
                      createVNode("h4", { class: "reviewer-name" }, "Sarah bint Khalid Al-Otaibi"),
                      createVNode("span", { class: "reviewer-role" }, "Business Owner")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "feature-card testimonial-card h-100" }, [
                    createVNode("div", { class: "star-rating mb-3" }, [
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      })
                    ]),
                    createVNode("p", { class: "feature-text testimonial-text mb-4" }, ` "Clear legal expertise and care for the client's interest, I advise dealing with them for those seeking trust and professionalism." `),
                    createVNode("div", { class: "reviewer-info" }, [
                      createVNode("h4", { class: "reviewer-name" }, "Abdulrahman bin Fahad Al-Qahtani"),
                      createVNode("span", { class: "reviewer-role" }, "Company Manager")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "feature-card testimonial-card h-100" }, [
                    createVNode("div", { class: "star-rating mb-3" }, [
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      })
                    ]),
                    createVNode("p", { class: "feature-text testimonial-text mb-4" }, ' "Excellent service and punctuality. A highly professional office and their treatment is reassuring for any legal matter." '),
                    createVNode("div", { class: "reviewer-info" }, [
                      createVNode("h4", { class: "reviewer-name" }, "Khalid Al-Otaibi"),
                      createVNode("span", { class: "reviewer-role" }, "Client")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "feature-card testimonial-card h-100" }, [
                    createVNode("div", { class: "star-rating mb-3" }, [
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      })
                    ]),
                    createVNode("p", { class: "feature-text testimonial-text mb-4" }, ' "They helped us solve a complex commercial case with great success. Their expertise in commercial law is truly unmatched in the region." '),
                    createVNode("div", { class: "reviewer-info" }, [
                      createVNode("h4", { class: "reviewer-name" }, "Al-Noor Real Estate Co."),
                      createVNode("span", { class: "reviewer-role" }, "Strategic Partner")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "feature-card testimonial-card h-100" }, [
                    createVNode("div", { class: "star-rating mb-3" }, [
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      }),
                      createVNode("i", {
                        "data-lucide": "star",
                        class: "star-icon"
                      })
                    ]),
                    createVNode("p", { class: "feature-text testimonial-text mb-4" }, ' "I advise anyone with a legal consultation to go to them. Fast response, attention to detail, and many innovative legal solutions." '),
                    createVNode("div", { class: "reviewer-info" }, [
                      createVNode("h4", { class: "reviewer-name" }, "Nasser Al-Harbi"),
                      createVNode("span", { class: "reviewer-role" }, "Business Consultant")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark-en/Testimonials.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const DarkTestimonials = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ad8804cc"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "cta-section" }, _attrs))}><div class="container"><div class="cta-container p-5"><h2 class="cta-title mb-3">Do You Need Legal Support?</h2><p class="cta-text mb-4"> Get legal consultation from our specialized team, and let us help you make the right legal decision. </p><div class="mt-4"><a href="#" class="btn-cta">Request Legal Consultation</a></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark-en/CTA.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const DarkCTA = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer-section" }, _attrs))}><div class="container"><div class="footer-top mb-5"><div class="d-flex justify-content-start align-items-center mb-4"><img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="footer-logo"></div></div><div class="row g-4 footer-links-row"><div class="col-lg-3 col-md-6"><h5 class="footer-heading mb-4">Quick Links</h5><ul class="list-unstyled footer-list"><li><a href="#" class="footer-link">Home</a></li><li><a href="#" class="footer-link">About Us</a></li><li><a href="#" class="footer-link">Services</a></li><li><a href="#" class="footer-link">Our Team</a></li><li><a href="#" class="footer-link">Blog</a></li><li><a href="#" class="footer-link">Jobs</a></li></ul></div><div class="col-lg-3 col-md-6"><h5 class="footer-heading mb-4">Services</h5><ul class="list-unstyled footer-list"><li><a href="#" class="footer-link">Legal Consultations</a></li><li><a href="#" class="footer-link">Litigation and Court Representation</a></li><li><a href="#" class="footer-link">Corporate Cases and Commercial Law</a></li><li><a href="#" class="footer-link">Contract Drafting and Review</a></li><li><a href="#" class="footer-link">Civil and Criminal Cases</a></li><li><a href="#" class="footer-link">Arbitration and Dispute Settlement</a></li></ul></div><div class="col-lg-3 col-md-6"><h5 class="footer-heading mb-4">Blog</h5><ul class="list-unstyled footer-list"><li><a href="#" class="footer-link">Contracts and Agreements</a></li><li><a href="#" class="footer-link">Commercial and Corporate Law</a></li><li><a href="#" class="footer-link">Civil Cases</a></li><li><a href="#" class="footer-link">Criminal Cases</a></li><li><a href="#" class="footer-link">Arbitration and Dispute Settlement</a></li><li><a href="#" class="footer-link">Saudi Systems and Regulations</a></li><li><a href="#" class="footer-link">Governance and Compliance</a></li></ul></div><div class="col-lg-3 col-md-6"><h5 class="footer-heading mb-4">Contact Information</h5><div class="contact-item mb-3"><span class="contact-label">Phone:</span><br><a href="tel:05XXXXXXXX" class="footer-link">05XXXXXXXX</a></div><div class="contact-item mb-3"><span class="contact-label">Email:</span><br><a href="mailto:info@lawfirm.sa" class="footer-link">info@lawfirm.sa</a></div><div class="contact-item"><span class="contact-label">Address:</span><br><span class="footer-text">Saudi Arabia</span></div></div></div><div class="footer-bottom mt-5 pt-4 border-top border-secondary d-flex flex-md-row flex-column justify-content-between align-items-center"><p class="copyright mb-0">© All rights reserved - Law Firm</p><div class="social-links mb-3 mb-md-0"><a href="#" class="social-icon"><i data-lucide="instagram"></i></a><a href="#" class="social-icon"><i data-lucide="facebook"></i></a><a href="#" class="social-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a><a href="#" class="social-icon"><i data-lucide="linkedin"></i></a><a href="#" class="social-icon"><i data-lucide="youtube"></i></a></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark-en/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DarkFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
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
        { rel: "stylesheet", href: "/assets/css/dark-en.css" }
      ],
      script: [
        { src: "https://unpkg.com/lucide@latest" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark-version" }, _attrs))}>`);
      _push(ssrRenderComponent(DarkHero, null, {
        nav: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(DarkHeader, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(DarkHeader)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(DarkWhyUs, null, null, _parent));
      _push(ssrRenderComponent(DarkServices, null, null, _parent));
      _push(ssrRenderComponent(DarkTeam, null, null, _parent));
      _push(ssrRenderComponent(DarkBlog, null, null, _parent));
      _push(ssrRenderComponent(DarkAccreditations, null, null, _parent));
      _push(ssrRenderComponent(DarkTestimonials, null, null, _parent));
      _push(ssrRenderComponent(DarkCTA, null, null, _parent));
      _push(ssrRenderComponent(DarkFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/landing-page-dark/en/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-3ILg-cP0.js.map
