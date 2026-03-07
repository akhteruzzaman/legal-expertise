import { mergeProps, withCtx, createVNode, useSSRContext, unref, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { _ as __nuxt_component_0 } from "./nuxt-link-DIEMWijX.js";
import { _ as _imports_0 } from "./virtual_public-BGu3sNhM.js";
import { _ as _export_sfc, u as useHead } from "./_plugin-vue_export-helper-ChBMeibh.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import { _ as _imports_0$1, a as _imports_0$2, b as _imports_2 } from "./virtual_public-DO9UfAUU.js";
import { _ as _imports_0$3, a as _imports_1, b as _imports_2$1 } from "./virtual_public-CP3K-QAO.js";
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
const _sfc_main$a = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar navbar-expand-lg landing-2-navbar" }, _attrs))} data-v-8dc38e00><div class="container-fluid px-lg-5" data-v-8dc38e00>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "navbar-brand me-lg-4 ms-0",
    to: "/landing-page-2/ar"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="logo-with-text" data-v-8dc38e00${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="logo-img" data-v-8dc38e00${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "logo-with-text" }, [
            createVNode("img", {
              src: _imports_0,
              alt: "Logo",
              class: "logo-img"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" data-v-8dc38e00><span class="navbar-toggler-icon" data-v-8dc38e00></span></button><div class="collapse navbar-collapse" id="navbarNav" data-v-8dc38e00><ul class="navbar-nav mx-auto" data-v-8dc38e00><li class="nav-item" data-v-8dc38e00><a class="nav-link" href="#" data-v-8dc38e00>الرئيسية</a></li><li class="nav-item" data-v-8dc38e00><a class="nav-link" href="#" data-v-8dc38e00>من نحن</a></li><li class="nav-item" data-v-8dc38e00><a class="nav-link" href="#" data-v-8dc38e00>خدماتنا</a></li><li class="nav-item" data-v-8dc38e00><a class="nav-link" href="#" data-v-8dc38e00>فريق العمل</a></li><li class="nav-item" data-v-8dc38e00><a class="nav-link" href="#" data-v-8dc38e00>المدونة</a></li><li class="nav-item" data-v-8dc38e00><a class="nav-link" href="#" data-v-8dc38e00>تواصل معنا</a></li></ul></div><div class="d-flex align-items-center" data-v-8dc38e00><a href="#" class="btn btn-consult-white" data-v-8dc38e00>طلب استشارة قانونية</a></div></div></nav>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing-4/Header.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Landing4Header = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-8dc38e00"]]);
const _sfc_main$9 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hero-outer-wrapper" }, _attrs))} data-v-2c23a515><section class="landing-2-hero" data-v-2c23a515><div class="hero-overlay" data-v-2c23a515></div><div class="container hero-container" data-v-2c23a515><div class="row justify-content-center text-center" data-v-2c23a515><div class="col-lg-10" data-v-2c23a515><h1 class="hero-title animate-up" data-v-2c23a515>خبرة قانونية موثوقة<br data-v-2c23a515>لحماية حقوقك</h1><p class="hero-subtitle animate-up-delayed" data-v-2c23a515> نقدّم خدمات قانونية احترافية للأفراد والشركات،<br data-v-2c23a515> تعتمد على الخبرة، النزاهة، والالتزام التام بأعلى<br data-v-2c23a515> المعايير المهنية. </p><div class="hero-actions animate-up-more-delayed" data-v-2c23a515><a href="#" class="btn-hero-centered" data-v-2c23a515>طلب استشارة قانونية</a></div></div></div></div></section></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing-4/Hero.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Landing4Hero = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-2c23a515"]]);
const _sfc_main$8 = {
  __name: "WhyUs",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      {
        icon: "gavel",
        title: "خبرة قانونية متخصصة",
        description: "فريق من المحامين والمستشارين القانونيين ذوي خبرة واسعة في مختلف المجالات القانونية."
      },
      {
        icon: "shield-check",
        title: "سرية ومهنية تامة",
        description: "نلتزم بأعلى معايير السرية المهنية والأخلاق القانونية في جميع القضايا."
      },
      {
        icon: "user-check",
        title: "تمثيل قانوني قوي",
        description: "ندافع عن حقوق عملائنا أمام الجهات القضائية بكل احترافية وكفاءة."
      },
      {
        icon: "file-text",
        title: "متابعة دقيقة للقضايا",
        description: "نحرص على متابعة جميع القضايا خطوة بخطوة وإبقاء عملائنا على اطلاع دائم."
      },
      {
        icon: "calendar-check",
        title: "التزام بالمواعيد والنتائج",
        description: "نلتزم بالدقة واحترام الوقت، مع التركيز على تحقيق أفضل النتائج الممكنة."
      },
      {
        icon: "scale",
        title: "حلول قانونية مخصصة",
        description: "نقدّم حلولاً قانونية مدروسة تناسب طبيعة كل قضية واحتياجات كل عميل."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "why-us-landing-2" }, _attrs))} data-v-624b8ce6><div class="container" data-v-624b8ce6><div class="text-center mb-5" data-v-624b8ce6><h2 class="section-title-centered text-dark" data-v-624b8ce6>لماذا يثق بنا عملاؤنا</h2></div><div class="row g-4" data-v-624b8ce6><!--[-->`);
      ssrRenderList(features, (item, index) => {
        _push(`<div class="col-lg-4 col-md-6" data-v-624b8ce6><div class="feature-card-v2" data-v-624b8ce6><div class="feature-icon-v2" data-v-624b8ce6><i${ssrRenderAttr("data-lucide", item.icon)} data-v-624b8ce6></i></div><h3 class="feature-title-v2" data-v-624b8ce6>${ssrInterpolate(item.title)}</h3><p class="feature-text-v2" data-v-624b8ce6>${ssrInterpolate(item.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing-4/WhyUs.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Landing4WhyUs = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-624b8ce6"]]);
const _sfc_main$7 = {
  __name: "ServicesSlider",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        icon: "gavel",
        title: "صياغة ومراجعة العقود",
        description: "إعداد ومراجعة العقود بما يحفظ الحقوق ويقلل المخاطر القانونية."
      },
      {
        icon: "shield",
        title: "القضايا المدنية والجنائية",
        description: "التعامل مع القضايا المدنية والجنائية باحترافية وسرية تامة."
      },
      {
        icon: "user-check",
        title: "التحكيم وتسوية النزاعات",
        description: "حل النزاعات بطرق قانونية بديلة تحفظ الوقت والتكاليف."
      },
      {
        icon: "scale",
        title: "الاستشارات القانونية",
        description: "تقديم استشارات قانونية دقيقة تساعد في اتخاذ القرارات الصحيحة."
      },
      {
        icon: "briefcase",
        title: "قانون الشركات",
        description: "تأسيس الشركات وتقديم الدعم القانوني المستمر للأعمال."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-slider-section" }, _attrs))} data-v-21be7c1f><div class="container" data-v-21be7c1f><div class="section-header text-end mb-5" data-v-21be7c1f><h2 class="section-title" data-v-21be7c1f>خدماتنا القانونية</h2><p class="section-subtitle" data-v-21be7c1f>نقدم خدمات قانونية مبنية على الخبرة والالتزام، مع حلول واضحة وموثوقة تناسب احتياجات عملائنا.</p></div><div class="slider-wrapper" data-v-21be7c1f>`);
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
          "640": { slidesPerView: 1.5 },
          "768": { slidesPerView: 2.2 },
          "1024": { slidesPerView: 3.2 },
          "1200": { slidesPerView: 3.5 }
        },
        class: "services-swiper"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(services, (service, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="service-slider-card" data-v-21be7c1f${_scopeId2}><div class="service-icon mb-4" data-v-21be7c1f${_scopeId2}><i${ssrRenderAttr("data-lucide", service.icon)} data-v-21be7c1f${_scopeId2}></i></div><h3 class="service-title mb-3" data-v-21be7c1f${_scopeId2}>${ssrInterpolate(service.title)}</h3><p class="service-desc mb-4" data-v-21be7c1f${_scopeId2}>${ssrInterpolate(service.description)}</p><a href="#" class="service-btn" data-v-21be7c1f${_scopeId2}> تفاصيل أكثر <i data-lucide="chevron-left" class="ms-1" data-v-21be7c1f${_scopeId2}></i></a></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "service-slider-card" }, [
                        createVNode("div", { class: "service-icon mb-4" }, [
                          createVNode("i", {
                            "data-lucide": service.icon
                          }, null, 8, ["data-lucide"])
                        ]),
                        createVNode("h3", { class: "service-title mb-3" }, toDisplayString(service.title), 1),
                        createVNode("p", { class: "service-desc mb-4" }, toDisplayString(service.description), 1),
                        createVNode("a", {
                          href: "#",
                          class: "service-btn"
                        }, [
                          createTextVNode(" تفاصيل أكثر "),
                          createVNode("i", {
                            "data-lucide": "chevron-left",
                            class: "ms-1"
                          })
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(services, (service, index) => {
                return createVNode(unref(SwiperSlide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "service-slider-card" }, [
                      createVNode("div", { class: "service-icon mb-4" }, [
                        createVNode("i", {
                          "data-lucide": service.icon
                        }, null, 8, ["data-lucide"])
                      ]),
                      createVNode("h3", { class: "service-title mb-3" }, toDisplayString(service.title), 1),
                      createVNode("p", { class: "service-desc mb-4" }, toDisplayString(service.description), 1),
                      createVNode("a", {
                        href: "#",
                        class: "service-btn"
                      }, [
                        createTextVNode(" تفاصيل أكثر "),
                        createVNode("i", {
                          "data-lucide": "chevron-left",
                          class: "ms-1"
                        })
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing-4/ServicesSlider.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Landing4ServicesSlider = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-21be7c1f"]]);
const _sfc_main$6 = {
  __name: "Team",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "team-section" }, _attrs))} data-v-4723cf35><div class="container" data-v-4723cf35><div class="text-center mb-5" data-v-4723cf35><h2 class="section-title mb-2 text-center" data-v-4723cf35>فريق العمل</h2><p class="section-subtitle text-muted text-center" data-v-4723cf35>يضم مكتبنا نخبة من المحامين والمستشارين القانونيين الذين يعملون بروح الفريق لتقديم أفضل الحلول القانونية لعملائنا.</p></div><div class="swiper-container-wrapper" data-v-4723cf35>`);
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
                  _push3(`<div class="team-card" data-v-4723cf35${_scopeId2}><div class="team-img-wrapper" data-v-4723cf35${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt="المحامي عبدالله بن محمد القحطاني" data-v-4723cf35${_scopeId2}></div><h4 class="team-member-name" data-v-4723cf35${_scopeId2}>المحامي عبدالله بن محمد القحطاني</h4><p class="team-member-role" data-v-4723cf35${_scopeId2}>محام ومستشار قانوني متخصص في القضايا التجارية وصياغة العقود، يتمتع بخبرة عملية في تمثيل الشركات والأفراد.</p><a href="#" class="team-link" data-v-4723cf35${_scopeId2}>تفاصيل أكثر <i data-lucide="chevron-left" data-v-4723cf35${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: "المحامي عبدالله بن محمد القحطاني"
                        })
                      ]),
                      createVNode("h4", { class: "team-member-name" }, "المحامي عبدالله بن محمد القحطاني"),
                      createVNode("p", { class: "team-member-role" }, "محام ومستشار قانوني متخصص في القضايا التجارية وصياغة العقود، يتمتع بخبرة عملية في تمثيل الشركات والأفراد."),
                      createVNode("a", {
                        href: "#",
                        class: "team-link"
                      }, [
                        createTextVNode("تفاصيل أكثر "),
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
                  _push3(`<div class="team-card" data-v-4723cf35${_scopeId2}><div class="team-img-wrapper" data-v-4723cf35${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt="المحامي فهد بن سعود العتيبي" data-v-4723cf35${_scopeId2}></div><h4 class="team-member-name" data-v-4723cf35${_scopeId2}>المحامي فهد بن سعود العتيبي</h4><p class="team-member-role" data-v-4723cf35${_scopeId2}>مختص في التقاضي والتمثيل أمام المحاكم، مع خبرة في القضايا المدنية والنزاعات القانونية المختلفة.</p><a href="#" class="team-link" data-v-4723cf35${_scopeId2}>تفاصيل أكثر <i data-lucide="chevron-left" data-v-4723cf35${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: "المحامي فهد بن سعود العتيبي"
                        })
                      ]),
                      createVNode("h4", { class: "team-member-name" }, "المحامي فهد بن سعود العتيبي"),
                      createVNode("p", { class: "team-member-role" }, "مختص في التقاضي والتمثيل أمام المحاكم، مع خبرة في القضايا المدنية والنزاعات القانونية المختلفة."),
                      createVNode("a", {
                        href: "#",
                        class: "team-link"
                      }, [
                        createTextVNode("تفاصيل أكثر "),
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
                  _push3(`<div class="team-card" data-v-4723cf35${_scopeId2}><div class="team-img-wrapper" data-v-4723cf35${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt="المستشار القانوني أحمد بن خالد الحربي" data-v-4723cf35${_scopeId2}></div><h4 class="team-member-name" data-v-4723cf35${_scopeId2}>المستشار القانوني أحمد بن خالد الحربي</h4><p class="team-member-role" data-v-4723cf35${_scopeId2}>مستشار قانوني في شؤون الشركات والأنظمة التجارية، يقدم حلولاً قانونية مدروسة تدعم نمو الأعمال.</p><a href="#" class="team-link" data-v-4723cf35${_scopeId2}>تفاصيل أكثر <i data-lucide="chevron-left" data-v-4723cf35${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: "المستشار القانوني أحمد بن خالد الحربي"
                        })
                      ]),
                      createVNode("h4", { class: "team-member-name" }, "المستشار القانوني أحمد بن خالد الحربي"),
                      createVNode("p", { class: "team-member-role" }, "مستشار قانوني في شؤون الشركات والأنظمة التجارية، يقدم حلولاً قانونية مدروسة تدعم نمو الأعمال."),
                      createVNode("a", {
                        href: "#",
                        class: "team-link"
                      }, [
                        createTextVNode("تفاصيل أكثر "),
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
                  _push3(`<div class="team-card" data-v-4723cf35${_scopeId2}><div class="team-img-wrapper" data-v-4723cf35${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt="المحامي" data-v-4723cf35${_scopeId2}></div><h4 class="team-member-name" data-v-4723cf35${_scopeId2}>المحامي</h4><p class="team-member-role" data-v-4723cf35${_scopeId2}>مختص في القضايا المدنية، مع خبرة في الدفاع عن حقوق العملاء وفق الأنظمة والقوانين.</p><a href="#" class="team-link" data-v-4723cf35${_scopeId2}>تفاصيل أكثر <i data-lucide="chevron-left" data-v-4723cf35${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: "المحامي"
                        })
                      ]),
                      createVNode("h4", { class: "team-member-name" }, "المحامي"),
                      createVNode("p", { class: "team-member-role" }, "مختص في القضايا المدنية، مع خبرة في الدفاع عن حقوق العملاء وفق الأنظمة والقوانين."),
                      createVNode("a", {
                        href: "#",
                        class: "team-link"
                      }, [
                        createTextVNode("تفاصيل أكثر "),
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
                  _push3(`<div class="team-card" data-v-4723cf35${_scopeId2}><div class="team-img-wrapper" data-v-4723cf35${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt="المحامي خالد بن وليد" data-v-4723cf35${_scopeId2}></div><h4 class="team-member-name" data-v-4723cf35${_scopeId2}>المحامي خالد بن وليد</h4><p class="team-member-role" data-v-4723cf35${_scopeId2}>متخصص في قضايا الأحوال الشخصية والمواريث، بخبرة واسعة في الترافع أمام محاكم الأحوال الشخصية.</p><a href="#" class="team-link" data-v-4723cf35${_scopeId2}>تفاصيل أكثر <i data-lucide="chevron-left" data-v-4723cf35${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: "المحامي خالد بن وليد"
                        })
                      ]),
                      createVNode("h4", { class: "team-member-name" }, "المحامي خالد بن وليد"),
                      createVNode("p", { class: "team-member-role" }, "متخصص في قضايا الأحوال الشخصية والمواريث، بخبرة واسعة في الترافع أمام محاكم الأحوال الشخصية."),
                      createVNode("a", {
                        href: "#",
                        class: "team-link"
                      }, [
                        createTextVNode("تفاصيل أكثر "),
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
                  _push3(`<div class="team-card" data-v-4723cf35${_scopeId2}><div class="team-img-wrapper" data-v-4723cf35${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt="المستشارة نورة عبدالعزيز" data-v-4723cf35${_scopeId2}></div><h4 class="team-member-name" data-v-4723cf35${_scopeId2}>المستشارة نورة عبدالعزيز</h4><p class="team-member-role" data-v-4723cf35${_scopeId2}>خبيرة في الأنظمة العمالية وحماية حقوق الموظفين، وتقديم الاستشارات في عقود العمل والتوظيف.</p><a href="#" class="team-link" data-v-4723cf35${_scopeId2}>تفاصيل أكثر <i data-lucide="chevron-left" data-v-4723cf35${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: "المستشارة نورة عبدالعزيز"
                        })
                      ]),
                      createVNode("h4", { class: "team-member-name" }, "المستشارة نورة عبدالعزيز"),
                      createVNode("p", { class: "team-member-role" }, "خبيرة في الأنظمة العمالية وحماية حقوق الموظفين، وتقديم الاستشارات في عقود العمل والتوظيف."),
                      createVNode("a", {
                        href: "#",
                        class: "team-link"
                      }, [
                        createTextVNode("تفاصيل أكثر "),
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
                  _push3(`<div class="team-card" data-v-4723cf35${_scopeId2}><div class="team-img-wrapper" data-v-4723cf35${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt="المحامي فيصل عبدالرحمن" data-v-4723cf35${_scopeId2}></div><h4 class="team-member-name" data-v-4723cf35${_scopeId2}>المحامي فيصل عبدالرحمن</h4><p class="team-member-role" data-v-4723cf35${_scopeId2}>متخصص في القضايا العقارية ومنازعات الأراضي، مع خبرة في توثيق العقود والإفراغ العقاري.</p><a href="#" class="team-link" data-v-4723cf35${_scopeId2}>تفاصيل أكثر <i data-lucide="chevron-left" data-v-4723cf35${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: "المحامي فيصل عبدالرحمن"
                        })
                      ]),
                      createVNode("h4", { class: "team-member-name" }, "المحامي فيصل عبدالرحمن"),
                      createVNode("p", { class: "team-member-role" }, "متخصص في القضايا العقارية ومنازعات الأراضي، مع خبرة في توثيق العقود والإفراغ العقاري."),
                      createVNode("a", {
                        href: "#",
                        class: "team-link"
                      }, [
                        createTextVNode("تفاصيل أكثر "),
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
                        src: _imports_0$1,
                        alt: "المحامي عبدالله بن محمد القحطاني"
                      })
                    ]),
                    createVNode("h4", { class: "team-member-name" }, "المحامي عبدالله بن محمد القحطاني"),
                    createVNode("p", { class: "team-member-role" }, "محام ومستشار قانوني متخصص في القضايا التجارية وصياغة العقود، يتمتع بخبرة عملية في تمثيل الشركات والأفراد."),
                    createVNode("a", {
                      href: "#",
                      class: "team-link"
                    }, [
                      createTextVNode("تفاصيل أكثر "),
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
                        src: _imports_0$1,
                        alt: "المحامي فهد بن سعود العتيبي"
                      })
                    ]),
                    createVNode("h4", { class: "team-member-name" }, "المحامي فهد بن سعود العتيبي"),
                    createVNode("p", { class: "team-member-role" }, "مختص في التقاضي والتمثيل أمام المحاكم، مع خبرة في القضايا المدنية والنزاعات القانونية المختلفة."),
                    createVNode("a", {
                      href: "#",
                      class: "team-link"
                    }, [
                      createTextVNode("تفاصيل أكثر "),
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
                        src: _imports_0$1,
                        alt: "المستشار القانوني أحمد بن خالد الحربي"
                      })
                    ]),
                    createVNode("h4", { class: "team-member-name" }, "المستشار القانوني أحمد بن خالد الحربي"),
                    createVNode("p", { class: "team-member-role" }, "مستشار قانوني في شؤون الشركات والأنظمة التجارية، يقدم حلولاً قانونية مدروسة تدعم نمو الأعمال."),
                    createVNode("a", {
                      href: "#",
                      class: "team-link"
                    }, [
                      createTextVNode("تفاصيل أكثر "),
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
                        src: _imports_0$1,
                        alt: "المحامي"
                      })
                    ]),
                    createVNode("h4", { class: "team-member-name" }, "المحامي"),
                    createVNode("p", { class: "team-member-role" }, "مختص في القضايا المدنية، مع خبرة في الدفاع عن حقوق العملاء وفق الأنظمة والقوانين."),
                    createVNode("a", {
                      href: "#",
                      class: "team-link"
                    }, [
                      createTextVNode("تفاصيل أكثر "),
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
                        src: _imports_0$1,
                        alt: "المحامي خالد بن وليد"
                      })
                    ]),
                    createVNode("h4", { class: "team-member-name" }, "المحامي خالد بن وليد"),
                    createVNode("p", { class: "team-member-role" }, "متخصص في قضايا الأحوال الشخصية والمواريث، بخبرة واسعة في الترافع أمام محاكم الأحوال الشخصية."),
                    createVNode("a", {
                      href: "#",
                      class: "team-link"
                    }, [
                      createTextVNode("تفاصيل أكثر "),
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
                        src: _imports_0$1,
                        alt: "المستشارة نورة عبدالعزيز"
                      })
                    ]),
                    createVNode("h4", { class: "team-member-name" }, "المستشارة نورة عبدالعزيز"),
                    createVNode("p", { class: "team-member-role" }, "خبيرة في الأنظمة العمالية وحماية حقوق الموظفين، وتقديم الاستشارات في عقود العمل والتوظيف."),
                    createVNode("a", {
                      href: "#",
                      class: "team-link"
                    }, [
                      createTextVNode("تفاصيل أكثر "),
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
                        src: _imports_0$1,
                        alt: "المحامي فيصل عبدالرحمن"
                      })
                    ]),
                    createVNode("h4", { class: "team-member-name" }, "المحامي فيصل عبدالرحمن"),
                    createVNode("p", { class: "team-member-role" }, "متخصص في القضايا العقارية ومنازعات الأراضي، مع خبرة في توثيق العقود والإفراغ العقاري."),
                    createVNode("a", {
                      href: "#",
                      class: "team-link"
                    }, [
                      createTextVNode("تفاصيل أكثر "),
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing-4/Team.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Landing4Team = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-4723cf35"]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-outer-wrapper" }, _attrs))} data-v-a0960b48><section class="blog-section-inner pt-5 pb-5" data-v-a0960b48><div class="container" data-v-a0960b48><div class="text-center mb-5" data-v-a0960b48><h2 class="section-title mb-2 text-center" data-v-a0960b48>المدونة القانونية</h2><p class="section-subtitle text-muted text-center" data-v-a0960b48>نشارككم مقالات قانونية مبسطة تسلّط الضوء على الأنظمة والتشريعات، وتساعد الأفراد والشركات على فهم حقوقهم واتخاذ قرارات قانونية واعية.</p></div><div class="row g-4 px-lg-5" data-v-a0960b48><div class="col-lg-8" data-v-a0960b48><div class="blog-card wide-card h-100" data-v-a0960b48><div class="blog-img-wrapper wide-img mb-4" data-v-a0960b48><img${ssrRenderAttr("src", _imports_0$2)} alt="أهمية الاستشارة القانونية قبل توقيع العقود" class="img-fluid rounded-4" data-v-a0960b48></div><div class="blog-content" data-v-a0960b48><h3 class="blog-title mb-3" data-v-a0960b48>أهمية الاستشارة القانونية قبل توقيع العقود</h3><p class="blog-description mb-4" data-v-a0960b48>تعرف على أهمية الحصول على استشارة قانونية قبل توقيع أي عقد، وكيف تساهم في حماية حقوقك وتجنب المخاطر القانونية.</p><a href="#" class="blog-link" data-v-a0960b48>اقرأ المزيد <i data-lucide="chevron-left" data-v-a0960b48></i></a></div></div></div><div class="col-lg-4" data-v-a0960b48><div class="blog-card fixed-card h-100" data-v-a0960b48><div class="blog-img-wrapper mb-4" data-v-a0960b48><img${ssrRenderAttr("src", _imports_2)} alt="أبرز الأخطاء القانونية التي تقع فيها الشركات الناشئة" class="img-fluid rounded-4" data-v-a0960b48></div><div class="blog-content" data-v-a0960b48><h3 class="blog-title mb-3" data-v-a0960b48>أبرز الأخطاء القانونية التي تقع فيها الشركات الناشئة</h3><p class="blog-description mb-4" data-v-a0960b48>نستعرض أكثر الأخطاء القانونية شيوعاً لدى الشركات الناشئة، مع نصائح عملية لتجنبها منذ البداية.</p><a href="#" class="blog-link" data-v-a0960b48>اقرأ المزيد <i data-lucide="chevron-left" data-v-a0960b48></i></a></div></div></div></div><div class="text-center mt-5" data-v-a0960b48><a href="#" class="btn-blog-more" data-v-a0960b48>اقرأ أكثر</a></div></div></section></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing-4/Blog.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Landing4Blog = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-a0960b48"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "accreditations-outer-wrapper" }, _attrs))} data-v-a04e328a><section class="accreditations-section-inner pt-5 pb-5" data-v-a04e328a><div class="container" data-v-a04e328a><div class="text-center mb-5" data-v-a04e328a><h2 class="section-title mb-2 text-center" data-v-a04e328a>اعتمادات الشركة</h2><p class="section-subtitle text-muted text-center" data-v-a04e328a>نمتلك اعتمادات وتراخيص مهنية تعكس التزامنا بالمعايير النظامية وأفضل الممارسات في تقديم الخدمات القانونية والاستشارية، محلياً ودولياً.</p></div><div class="row g-4" data-v-a04e328a><div class="col-lg-4 col-md-6" data-v-a04e328a><div class="accreditation-card text-center" data-v-a04e328a><div class="accreditation-logo-wrapper mb-4" data-v-a04e328a><img${ssrRenderAttr("src", _imports_0$3)} alt="الهيئة السعودية للملكية الفكرية" class="img-fluid" style="${ssrRenderStyle({ "height": "60px", "object-fit": "contain" })}" data-v-a04e328a></div><h3 class="accreditation-title h5 fw-bold mb-3" data-v-a04e328a>الهيئة السعودية للملكية الفكرية</h3><p class="accreditation-description text-muted mb-3" data-v-a04e328a>نساعد في حماية الحقوق الفكرية عبر إعداد الطلبات والمتطلبات التنظيمية ذات الصلة وتقديم الاستشارات المتخصصة.</p><a href="#" class="accreditation-link text-decoration-none fw-bold" style="${ssrRenderStyle({ "color": "#c3a46e" })}" data-v-a04e328a>تفاصيل أكثر <i data-lucide="chevron-left" data-v-a04e328a></i></a></div></div><div class="col-lg-4 col-md-6" data-v-a04e328a><div class="accreditation-card text-center" data-v-a04e328a><div class="accreditation-logo-wrapper mb-4" data-v-a04e328a><img${ssrRenderAttr("src", _imports_1)} alt="وزارة الموارد البشرية والتنمية الاجتماعية" class="img-fluid" style="${ssrRenderStyle({ "height": "60px", "object-fit": "contain" })}" data-v-a04e328a></div><h3 class="accreditation-title h5 fw-bold mb-3" data-v-a04e328a>وزارة الموارد البشرية والتنمية الاجتماعية</h3><p class="accreditation-description text-muted mb-3" data-v-a04e328a>نقـدّم دعمـاً في إعـداد ومراجعـة اللوائـح الداخليـة والامتثـال التنظيمـي، بمـا يضمـن توافـق المنشـأة مع المتطلبـات النظاميـة.</p><a href="#" class="accreditation-link text-decoration-none fw-bold" style="${ssrRenderStyle({ "color": "#c3a46e" })}" data-v-a04e328a>تفاصيل أكثر <i data-lucide="chevron-left" data-v-a04e328a></i></a></div></div><div class="col-lg-4 col-md-6" data-v-a04e328a><div class="accreditation-card text-center" data-v-a04e328a><div class="accreditation-logo-wrapper mb-4" data-v-a04e328a><img${ssrRenderAttr("src", _imports_2$1)} alt="الهيئة السعودية للمحامين" class="img-fluid" style="${ssrRenderStyle({ "height": "60px", "object-fit": "contain" })}" data-v-a04e328a></div><h3 class="accreditation-title h5 fw-bold mb-3" data-v-a04e328a>الهيئة السعودية للمحامين</h3><p class="accreditation-description text-muted mb-3" data-v-a04e328a>مكتبنا مسجل وملتزم بالمعايير المهنية المعتمدة، ونقـدم خدمات قانونية وفق الأنظمة واللوائح ذات العلاقة.</p><a href="#" class="accreditation-link text-decoration-none fw-bold" style="${ssrRenderStyle({ "color": "#c3a46e" })}" data-v-a04e328a>تفاصيل أكثر <i data-lucide="chevron-left" data-v-a04e328a></i></a></div></div></div></div></section></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing-4/Accreditations.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Landing4Accreditations = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-a04e328a"]]);
const _sfc_main$3 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonials-section" }, _attrs))} data-v-900aa70f><div class="container" data-v-900aa70f><div class="text-center mb-5" data-v-900aa70f><h2 class="section-title mb-2 text-center" data-v-900aa70f>آراء عملائنا</h2><p class="section-subtitle text-muted text-center" data-v-900aa70f>نعتز بثقة عملائنا ونسعى دائماً لتقديم خدمات قانونية ترتقي لتوقعاتهم.</p></div><div class="swiper-container-wrapper" data-v-900aa70f>`);
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
                  _push3(`<div class="testimonial-card" data-v-900aa70f${_scopeId2}><div class="testimonial-stars" data-v-900aa70f${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i></div><p class="testimonial-text" data-v-900aa70f${_scopeId2}>&quot;تعامل راق وااحترافية عالية، حصلت على استشارة قانونية واضحة ساعدتني في اتخاذ القرار الصحيح بكل ثقة.&quot;</p><div class="testimonial-author" data-v-900aa70f${_scopeId2}><span class="testimonial-name" data-v-900aa70f${_scopeId2}>محمد بن عبدالله السبيعي</span><span class="testimonial-role" data-v-900aa70f${_scopeId2}>رجل أعمال</span></div></div>`);
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
                      createVNode("p", { class: "testimonial-text" }, '"تعامل راق وااحترافية عالية، حصلت على استشارة قانونية واضحة ساعدتني في اتخاذ القرار الصحيح بكل ثقة."'),
                      createVNode("div", { class: "testimonial-author" }, [
                        createVNode("span", { class: "testimonial-name" }, "محمد بن عبدالله السبيعي"),
                        createVNode("span", { class: "testimonial-role" }, "رجل أعمال")
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
                  _push3(`<div class="testimonial-card" data-v-900aa70f${_scopeId2}><div class="testimonial-stars" data-v-900aa70f${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i></div><p class="testimonial-text" data-v-900aa70f${_scopeId2}>&quot;فريق قانوني متميز، متابعة دقيقة للقضية وتواصل مستمر حتى الوصول إلى نتيجة مرضية.&quot;</p><div class="testimonial-author" data-v-900aa70f${_scopeId2}><span class="testimonial-name" data-v-900aa70f${_scopeId2}>سارة بنت خالد العتيبي</span><span class="testimonial-role" data-v-900aa70f${_scopeId2}>صاحبة منشأة</span></div></div>`);
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
                      createVNode("p", { class: "testimonial-text" }, '"فريق قانوني متميز، متابعة دقيقة للقضية وتواصل مستمر حتى الوصول إلى نتيجة مرضية."'),
                      createVNode("div", { class: "testimonial-author" }, [
                        createVNode("span", { class: "testimonial-name" }, "سارة بنت خالد العتيبي"),
                        createVNode("span", { class: "testimonial-role" }, "صاحبة منشأة")
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
                  _push3(`<div class="testimonial-card" data-v-900aa70f${_scopeId2}><div class="testimonial-stars" data-v-900aa70f${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i></div><p class="testimonial-text" data-v-900aa70f${_scopeId2}>&quot;خبرة قانونية وااضحة وحرص على مصلحة العميل، أنصح بالتعامل معهم لمن يبحث عن الثقة والمهنية.&quot;</p><div class="testimonial-author" data-v-900aa70f${_scopeId2}><span class="testimonial-name" data-v-900aa70f${_scopeId2}>عبدالرحمن بن فهد القحطاني</span><span class="testimonial-role" data-v-900aa70f${_scopeId2}>مدير شركة</span></div></div>`);
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
                      createVNode("p", { class: "testimonial-text" }, '"خبرة قانونية وااضحة وحرص على مصلحة العميل، أنصح بالتعامل معهم لمن يبحث عن الثقة والمهنية."'),
                      createVNode("div", { class: "testimonial-author" }, [
                        createVNode("span", { class: "testimonial-name" }, "عبدالرحمن بن فهد القحطاني"),
                        createVNode("span", { class: "testimonial-role" }, "مدير شركة")
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
                  _push3(`<div class="testimonial-card" data-v-900aa70f${_scopeId2}><div class="testimonial-stars" data-v-900aa70f${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i></div><p class="testimonial-text" data-v-900aa70f${_scopeId2}>&quot;خدمة ممتازة ودقة في المواعيد. مكتب محترف للغاية وتعاملهم يبعث على الاطمئنان.&quot;</p><div class="testimonial-author" data-v-900aa70f${_scopeId2}><span class="testimonial-name" data-v-900aa70f${_scopeId2}>خالد العتيبي</span><span class="testimonial-role" data-v-900aa70f${_scopeId2}>عميل</span></div></div>`);
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
                      createVNode("p", { class: "testimonial-text" }, '"خدمة ممتازة ودقة في المواعيد. مكتب محترف للغاية وتعاملهم يبعث على الاطمئنان."'),
                      createVNode("div", { class: "testimonial-author" }, [
                        createVNode("span", { class: "testimonial-name" }, "خالد العتيبي"),
                        createVNode("span", { class: "testimonial-role" }, "عميل")
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
                  _push3(`<div class="testimonial-card" data-v-900aa70f${_scopeId2}><div class="testimonial-stars" data-v-900aa70f${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i></div><p class="testimonial-text" data-v-900aa70f${_scopeId2}>&quot;ساعدوني في حل قضية تجارية معقدة بنجاح باهر. خبرتهم في القانون التجاري لا تضاهى.&quot;</p><div class="testimonial-author" data-v-900aa70f${_scopeId2}><span class="testimonial-name" data-v-900aa70f${_scopeId2}>شركة النور العقارية</span><span class="testimonial-role" data-v-900aa70f${_scopeId2}>شريك استراتيجي</span></div></div>`);
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
                      createVNode("p", { class: "testimonial-text" }, '"ساعدوني في حل قضية تجارية معقدة بنجاح باهر. خبرتهم في القانون التجاري لا تضاهى."'),
                      createVNode("div", { class: "testimonial-author" }, [
                        createVNode("span", { class: "testimonial-name" }, "شركة النور العقارية"),
                        createVNode("span", { class: "testimonial-role" }, "شريك استراتيجي")
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
                  _push3(`<div class="testimonial-card" data-v-900aa70f${_scopeId2}><div class="testimonial-stars" data-v-900aa70f${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-900aa70f${_scopeId2}></i></div><p class="testimonial-text" data-v-900aa70f${_scopeId2}>&quot;أنصح كل من لديه استشارة قانونية بالتوجه إليهم. سرعة في الرد وحلول قانونية مبتكرة.&quot;</p><div class="testimonial-author" data-v-900aa70f${_scopeId2}><span class="testimonial-name" data-v-900aa70f${_scopeId2}>ناصر الحربي</span><span class="testimonial-role" data-v-900aa70f${_scopeId2}>مستشار أعمال</span></div></div>`);
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
                      createVNode("p", { class: "testimonial-text" }, '"أنصح كل من لديه استشارة قانونية بالتوجه إليهم. سرعة في الرد وحلول قانونية مبتكرة."'),
                      createVNode("div", { class: "testimonial-author" }, [
                        createVNode("span", { class: "testimonial-name" }, "ناصر الحربي"),
                        createVNode("span", { class: "testimonial-role" }, "مستشار أعمال")
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
                    createVNode("p", { class: "testimonial-text" }, '"تعامل راق وااحترافية عالية، حصلت على استشارة قانونية واضحة ساعدتني في اتخاذ القرار الصحيح بكل ثقة."'),
                    createVNode("div", { class: "testimonial-author" }, [
                      createVNode("span", { class: "testimonial-name" }, "محمد بن عبدالله السبيعي"),
                      createVNode("span", { class: "testimonial-role" }, "رجل أعمال")
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
                    createVNode("p", { class: "testimonial-text" }, '"فريق قانوني متميز، متابعة دقيقة للقضية وتواصل مستمر حتى الوصول إلى نتيجة مرضية."'),
                    createVNode("div", { class: "testimonial-author" }, [
                      createVNode("span", { class: "testimonial-name" }, "سارة بنت خالد العتيبي"),
                      createVNode("span", { class: "testimonial-role" }, "صاحبة منشأة")
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
                    createVNode("p", { class: "testimonial-text" }, '"خبرة قانونية وااضحة وحرص على مصلحة العميل، أنصح بالتعامل معهم لمن يبحث عن الثقة والمهنية."'),
                    createVNode("div", { class: "testimonial-author" }, [
                      createVNode("span", { class: "testimonial-name" }, "عبدالرحمن بن فهد القحطاني"),
                      createVNode("span", { class: "testimonial-role" }, "مدير شركة")
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
                    createVNode("p", { class: "testimonial-text" }, '"خدمة ممتازة ودقة في المواعيد. مكتب محترف للغاية وتعاملهم يبعث على الاطمئنان."'),
                    createVNode("div", { class: "testimonial-author" }, [
                      createVNode("span", { class: "testimonial-name" }, "خالد العتيبي"),
                      createVNode("span", { class: "testimonial-role" }, "عميل")
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
                    createVNode("p", { class: "testimonial-text" }, '"ساعدوني في حل قضية تجارية معقدة بنجاح باهر. خبرتهم في القانون التجاري لا تضاهى."'),
                    createVNode("div", { class: "testimonial-author" }, [
                      createVNode("span", { class: "testimonial-name" }, "شركة النور العقارية"),
                      createVNode("span", { class: "testimonial-role" }, "شريك استراتيجي")
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
                    createVNode("p", { class: "testimonial-text" }, '"أنصح كل من لديه استشارة قانونية بالتوجه إليهم. سرعة في الرد وحلول قانونية مبتكرة."'),
                    createVNode("div", { class: "testimonial-author" }, [
                      createVNode("span", { class: "testimonial-name" }, "ناصر الحربي"),
                      createVNode("span", { class: "testimonial-role" }, "مستشار أعمال")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing-4/Testimonials.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Landing4Testimonials = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-900aa70f"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "cta-section" }, _attrs))}><div class="container"><div class="cta-container"><div class="cta-pattern"></div><div class="cta-content"><h2 class="cta-title">هل تحتاج إلى دعم قانوني؟</h2><p class="cta-subtitle">احصل على استشارة قانونية من فريقنا المتخصص، ودعنا نساعدك في اتخاذ القرار القانوني الصحيح.</p><a href="#" class="cta-btn">طلب استشارة قانونية</a></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing-4/CTA.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Landing4CTA = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "pb-5" }, _attrs))}><div class="container"><footer class="footer-section"><div class="footer-content"><div class="footer-top mb-5"><div class="d-flex justify-content-start align-items-center mb-4"><img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="footer-logo"></div></div><div class="row g-4 footer-links-row"><div class="col-lg-3 col-md-6"><h5 class="footer-heading mb-4">روابط سريعة</h5><ul class="list-unstyled footer-list"><li><a href="#" class="footer-link">الرئيسية</a></li><li><a href="#" class="footer-link">من نحن</a></li><li><a href="#" class="footer-link">الخدمات</a></li><li><a href="#" class="footer-link">فريق العمل</a></li><li><a href="#" class="footer-link">المدونة</a></li><li><a href="#" class="footer-link">وظائف</a></li></ul></div><div class="col-lg-3 col-md-6"><h5 class="footer-heading mb-4">خدماتنا</h5><ul class="list-unstyled footer-list"><li><a href="#" class="footer-link">الاستشارات القانونية</a></li><li><a href="#" class="footer-link">التقاضي والتمثيل أمام المحاكم</a></li><li><a href="#" class="footer-link">قضايا الشركات والقانون التجاري</a></li><li><a href="#" class="footer-link">صياغة ومراجعة العقود</a></li><li><a href="#" class="footer-link">القضايا المدنية والجنائية</a></li><li><a href="#" class="footer-link">التحكيم وتسوية النزاعات</a></li></ul></div><div class="col-lg-3 col-md-6"><h5 class="footer-heading mb-4">المدونة</h5><ul class="list-unstyled footer-list"><li><a href="#" class="footer-link">العقود والاتفاقيات</a></li><li><a href="#" class="footer-link">القانون التجاري والشركات</a></li><li><a href="#" class="footer-link">القضايا المدنية</a></li><li><a href="#" class="footer-link">القضايا الجنائية</a></li><li><a href="#" class="footer-link">التحكيم وتسوية النزاعات</a></li><li><a href="#" class="footer-link">أنظمة ولوائح سعودية</a></li><li><a href="#" class="footer-link">حوكمة وامتثال</a></li></ul></div><div class="col-lg-3 col-md-6"><h5 class="footer-heading mb-4">معلومات التواصل</h5><div class="contact-item mb-3"><span class="contact-label">الهاتف:</span><br><a href="tel:05XXXXXXXX" class="footer-link">05XXXXXXXX</a></div><div class="contact-item mb-3"><span class="contact-label">البريد الإلكتروني:</span><br><a href="mailto:info@lawfirm.sa" class="footer-link">info@lawfirm.sa</a></div><div class="contact-item"><span class="contact-label">العنوان:</span><br><span class="footer-text">المملكة العربية السعودية</span></div></div></div><div class="footer-bottom mt-5 pt-4 border-top border-secondary d-flex flex-md-row flex-column justify-content-between align-items-center"><p class="copyright mb-0">© جميع الحقوق محفوظة - مكتب محاماة</p><div class="social-links mb-3 mb-md-0"><a href="#" class="social-icon"><i data-lucide="instagram"></i></a><a href="#" class="social-icon"><i data-lucide="facebook"></i></a><a href="#" class="social-icon brand-icon-x"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a><a href="#" class="social-icon"><i data-lucide="linkedin"></i></a><a href="#" class="social-icon"><i data-lucide="youtube"></i></a></div></div></div></footer></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing-4/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Landing4Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "مكتب الرياض للمحاماة | خبرة قانونية موثوقة",
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
      _push(ssrRenderComponent(Landing4Header, null, null, _parent));
      _push(ssrRenderComponent(Landing4Hero, null, null, _parent));
      _push(ssrRenderComponent(Landing4WhyUs, null, null, _parent));
      _push(ssrRenderComponent(Landing4ServicesSlider, null, null, _parent));
      _push(ssrRenderComponent(Landing4Blog, null, null, _parent));
      _push(ssrRenderComponent(Landing4Team, null, null, _parent));
      _push(ssrRenderComponent(Landing4Accreditations, null, null, _parent));
      _push(ssrRenderComponent(Landing4Testimonials, null, null, _parent));
      _push(ssrRenderComponent(Landing4CTA, null, null, _parent));
      _push(ssrRenderComponent(Landing4Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/landing-page-4/ar/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-I0qYYlkk.js.map
