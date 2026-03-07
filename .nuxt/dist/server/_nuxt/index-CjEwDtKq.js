import { mergeProps, useSSRContext, unref, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./virtual_public-BGu3sNhM.js";
import { _ as _export_sfc, u as useHead } from "./_plugin-vue_export-helper-ChBMeibh.js";
import { _ as _imports_0$1, a as _imports_0$3, b as _imports_2$1 } from "./virtual_public-DO9UfAUU.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import { _ as _imports_0$2, a as _imports_1, b as _imports_2 } from "./virtual_public-k4-vkUz6.js";
import { _ as _imports_1$1 } from "./virtual_public-BwrrH5yG.js";
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
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar navbar-expand-lg" }, _attrs))}><div class="container"><a class="navbar-brand" href="#"><img${ssrRenderAttr("src", _imports_0)} alt="Logo"></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav mx-auto"><li class="nav-item"><a class="nav-link" href="#">الرئيسية</a></li><li class="nav-item"><a class="nav-link" href="#">من نحن</a></li><li class="nav-item"><a class="nav-link" href="#">خدماتنا</a></li><li class="nav-item"><a class="nav-link" href="#">فريق العمل</a></li><li class="nav-item"><a class="nav-link" href="#">المدونة</a></li><li class="nav-item"><a class="nav-link" href="#">تواصل معنا</a></li></ul><div class="d-flex"><a href="#" class="btn btn-consult">طلب استشارة قانونية</a></div></div></div></nav>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/Header.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const DarkHeader = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$9 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero-section" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "nav", {}, null, _push, _parent);
  _push(`<div class="hero-overlay"></div><div class="hero-content"><h1 class="hero-title">خبرة قانونية موثوقة<br>لحماية حقوقك</h1><p class="hero-subtitle"> نقدم خدمات قانونية احترافية للأفراد والشركات،<br> تعتمد على الخبرة، النزاهة، والالتزام التام بأعلى<br> المعايير المهنية. </p><a href="#" class="hero-btn">طلب استشارة قانونية</a></div><h2 class="section-title-hero">لماذا يثق بنا عملاؤنا</h2></section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/Hero.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const DarkHero = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "why-us-section" }, _attrs))}><div class="container"><div class="row g-4 justify-content-center"><div class="col-md-4"><div class="feature-card h-100 text-center"><div class="feature-icon mb-4"><i data-lucide="shield"></i></div><h3 class="feature-title">سرية ومهنية تامة</h3><p class="feature-text"> نلتزم بأعلى معايير السرية المهنية والأخلاق القانونية في جميع القضايا. </p></div></div><div class="col-md-4"><div class="feature-card h-100 text-center"><div class="feature-icon mb-4"><i data-lucide="gavel"></i></div><h3 class="feature-title">خبرة قانونية متخصصة</h3><p class="feature-text"> فريق من المحامين والمستشارين القانونيين ذوي خبرة واسعة في مختلف المجالات القانونية. </p></div></div><div class="col-md-4"><div class="feature-card h-100 text-center"><div class="feature-icon mb-4"><i data-lucide="user"></i></div><h3 class="feature-title">تمثيل قانوني قوي</h3><p class="feature-text"> ندافع عن حقوق عملائنا أمام الجهات القضائية بكل احترافية وكفاءة. </p></div></div></div></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/WhyUs.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const DarkWhyUs = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-section" }, _attrs))}><div class="container"><h2 class="section-title-services mb-2">الخدمات القانونية</h2><p class="section-subtitle-services mb-5"> نقدم خدمات قانونية مبنية على الخبرة والالتزام، مع حلول واضحة وموثوقة تناسب احتياجات عملائنا. </p><div class="row g-4 justify-content-center"><div class="col-md-4"><div class="feature-card h-100 text-center"><div class="feature-icon mb-4"><i data-lucide="gavel"></i></div><h3 class="feature-title">صياغة ومراجعة العقود</h3><p class="feature-text"> إعداد ومراجعة العقود بما يحفظ الحقوق ويقلل المخاطر. </p><a href="#" class="details-link">تفاصيل أكثر <i data-lucide="chevron-left" class="small-icon"></i></a></div></div><div class="col-md-4"><div class="feature-card h-100 text-center"><div class="feature-icon mb-4"><i data-lucide="shield"></i></div><h3 class="feature-title">القضايا المدنية والجنائية</h3><p class="feature-text"> التعامل مع القضايا المدنية والجنائية باحترافية وسرية تامة. </p><a href="#" class="details-link">تفاصيل أكثر <i data-lucide="chevron-left" class="small-icon"></i></a></div></div><div class="col-md-4"><div class="feature-card h-100 text-center"><div class="feature-icon mb-4"><i data-lucide="stamp"></i></div><h3 class="feature-title">التحكيم وتسوية النزاعات</h3><p class="feature-text"> حل النزاعات بطرق قانونية بديلة تحفظ الوقت والتكاليف. </p><a href="#" class="details-link">تفاصيل أكثر <i data-lucide="chevron-left" class="small-icon"></i></a></div></div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/Services.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const DarkServices = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$6 = {
  __name: "Team",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "team-section" }, _attrs))} data-v-5380f415><div class="container" data-v-5380f415><h2 class="section-title-services mb-2" data-v-5380f415>فريق العمل</h2><p class="section-subtitle-services mb-5" data-v-5380f415> يضم مكتبنا نخبة من المحامين والمستشارين القانونيين الذين يعملون بروح الفريق لتقديم أفضل الحلول القانونية لعملائنا. </p><div class="swiper-container-wrapper" data-v-5380f415>`);
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
                  _push3(`<div class="feature-card team-card h-100 text-center" data-v-5380f415${_scopeId2}><div class="team-img-container mb-4" data-v-5380f415${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt="المحامي عبدالله بن محمد القحطاني" class="team-img" data-v-5380f415${_scopeId2}></div><h3 class="feature-title" data-v-5380f415${_scopeId2}>المحامي عبدالله بن محمد القحطاني</h3><p class="feature-text" data-v-5380f415${_scopeId2}> محام ومستشار قانوني متخصص في القضايا التجارية وصياغة العقود، يتمتع بخبرة عملية في تمثيل الشركات والأفراد. </p><a href="#" class="details-link" data-v-5380f415${_scopeId2}>تفاصيل أكثر <i data-lucide="chevron-left" class="small-icon" data-v-5380f415${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "feature-card team-card h-100 text-center" }, [
                      createVNode("div", { class: "team-img-container mb-4" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: "المحامي عبدالله بن محمد القحطاني",
                          class: "team-img"
                        })
                      ]),
                      createVNode("h3", { class: "feature-title" }, "المحامي عبدالله بن محمد القحطاني"),
                      createVNode("p", { class: "feature-text" }, " محام ومستشار قانوني متخصص في القضايا التجارية وصياغة العقود، يتمتع بخبرة عملية في تمثيل الشركات والأفراد. "),
                      createVNode("a", {
                        href: "#",
                        class: "details-link"
                      }, [
                        createTextVNode("تفاصيل أكثر "),
                        createVNode("i", {
                          "data-lucide": "chevron-left",
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
                  _push3(`<div class="feature-card team-card h-100 text-center" data-v-5380f415${_scopeId2}><div class="team-img-container mb-4" data-v-5380f415${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt="المحامي فهد بن سعود العتيبي" class="team-img" data-v-5380f415${_scopeId2}></div><h3 class="feature-title" data-v-5380f415${_scopeId2}>المحامي فهد بن سعود العتيبي</h3><p class="feature-text" data-v-5380f415${_scopeId2}> مختص في التقاضي والتمثيل أمام المحاكم، مع خبرة في القضايا المدنية والنزاعات القانونية المختلفة. </p><a href="#" class="details-link" data-v-5380f415${_scopeId2}>تفاصيل أكثر <i data-lucide="chevron-left" class="small-icon" data-v-5380f415${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "feature-card team-card h-100 text-center" }, [
                      createVNode("div", { class: "team-img-container mb-4" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: "المحامي فهد بن سعود العتيبي",
                          class: "team-img"
                        })
                      ]),
                      createVNode("h3", { class: "feature-title" }, "المحامي فهد بن سعود العتيبي"),
                      createVNode("p", { class: "feature-text" }, " مختص في التقاضي والتمثيل أمام المحاكم، مع خبرة في القضايا المدنية والنزاعات القانونية المختلفة. "),
                      createVNode("a", {
                        href: "#",
                        class: "details-link"
                      }, [
                        createTextVNode("تفاصيل أكثر "),
                        createVNode("i", {
                          "data-lucide": "chevron-left",
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
                  _push3(`<div class="feature-card team-card h-100 text-center" data-v-5380f415${_scopeId2}><div class="team-img-container mb-4" data-v-5380f415${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt="المستشار القانوني أحمد بن خالد الحربي" class="team-img" data-v-5380f415${_scopeId2}></div><h3 class="feature-title" data-v-5380f415${_scopeId2}>المستشار القانوني أحمد بن خالد الحربي</h3><p class="feature-text" data-v-5380f415${_scopeId2}> مستشار قانوني في شؤون الشركات والأنظمة التجارية، يقدم حلول قانونية مدروسة تدعم نمو الأعمال. </p><a href="#" class="details-link" data-v-5380f415${_scopeId2}>تفاصيل أكثر <i data-lucide="chevron-left" class="small-icon" data-v-5380f415${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "feature-card team-card h-100 text-center" }, [
                      createVNode("div", { class: "team-img-container mb-4" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: "المستشار القانوني أحمد بن خالد الحربي",
                          class: "team-img"
                        })
                      ]),
                      createVNode("h3", { class: "feature-title" }, "المستشار القانوني أحمد بن خالد الحربي"),
                      createVNode("p", { class: "feature-text" }, " مستشار قانوني في شؤون الشركات والأنظمة التجارية، يقدم حلول قانونية مدروسة تدعم نمو الأعمال. "),
                      createVNode("a", {
                        href: "#",
                        class: "details-link"
                      }, [
                        createTextVNode("تفاصيل أكثر "),
                        createVNode("i", {
                          "data-lucide": "chevron-left",
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
                  _push3(`<div class="feature-card team-card h-100 text-center" data-v-5380f415${_scopeId2}><div class="team-img-container mb-4" data-v-5380f415${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt="المحامي خالد بن وليد" class="team-img" data-v-5380f415${_scopeId2}></div><h3 class="feature-title" data-v-5380f415${_scopeId2}>المحامي خالد بن وليد</h3><p class="feature-text" data-v-5380f415${_scopeId2}> متخصص في قضايا الأحوال الشخصية والمواريث، بخبرة واسعة في الترافع أمام محاكم الأحوال الشخصية. </p><a href="#" class="details-link" data-v-5380f415${_scopeId2}>تفاصيل أكثر <i data-lucide="chevron-left" class="small-icon" data-v-5380f415${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "feature-card team-card h-100 text-center" }, [
                      createVNode("div", { class: "team-img-container mb-4" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: "المحامي خالد بن وليد",
                          class: "team-img"
                        })
                      ]),
                      createVNode("h3", { class: "feature-title" }, "المحامي خالد بن وليد"),
                      createVNode("p", { class: "feature-text" }, " متخصص في قضايا الأحوال الشخصية والمواريث، بخبرة واسعة في الترافع أمام محاكم الأحوال الشخصية. "),
                      createVNode("a", {
                        href: "#",
                        class: "details-link"
                      }, [
                        createTextVNode("تفاصيل أكثر "),
                        createVNode("i", {
                          "data-lucide": "chevron-left",
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
                  _push3(`<div class="feature-card team-card h-100 text-center" data-v-5380f415${_scopeId2}><div class="team-img-container mb-4" data-v-5380f415${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt="المستشارة نورة عبدالعزيز" class="team-img" data-v-5380f415${_scopeId2}></div><h3 class="feature-title" data-v-5380f415${_scopeId2}>المستشارة نورة عبدالعزيز</h3><p class="feature-text" data-v-5380f415${_scopeId2}> خبيرة في الأنظمة العمالية وحماية حقوق الموظفين، وتقديم الاستشارات في عقود العمل والتوظيف. </p><a href="#" class="details-link" data-v-5380f415${_scopeId2}>تفاصيل أكثر <i data-lucide="chevron-left" class="small-icon" data-v-5380f415${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "feature-card team-card h-100 text-center" }, [
                      createVNode("div", { class: "team-img-container mb-4" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: "المستشارة نورة عبدالعزيز",
                          class: "team-img"
                        })
                      ]),
                      createVNode("h3", { class: "feature-title" }, "المستشارة نورة عبدالعزيز"),
                      createVNode("p", { class: "feature-text" }, " خبيرة في الأنظمة العمالية وحماية حقوق الموظفين، وتقديم الاستشارات في عقود العمل والتوظيف. "),
                      createVNode("a", {
                        href: "#",
                        class: "details-link"
                      }, [
                        createTextVNode("تفاصيل أكثر "),
                        createVNode("i", {
                          "data-lucide": "chevron-left",
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
                  _push3(`<div class="feature-card team-card h-100 text-center" data-v-5380f415${_scopeId2}><div class="team-img-container mb-4" data-v-5380f415${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt="المحامي فيصل عبدالرحمن" class="team-img" data-v-5380f415${_scopeId2}></div><h3 class="feature-title" data-v-5380f415${_scopeId2}>المحامي فيصل عبدالرحمن</h3><p class="feature-text" data-v-5380f415${_scopeId2}> متخصص في القضايا العقارية ومنازعات الأراضي، مع خبرة في توثيق العقود والإفراغ العقاري. </p><a href="#" class="details-link" data-v-5380f415${_scopeId2}>تفاصيل أكثر <i data-lucide="chevron-left" class="small-icon" data-v-5380f415${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "feature-card team-card h-100 text-center" }, [
                      createVNode("div", { class: "team-img-container mb-4" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: "المحامي فيصل عبدالرحمن",
                          class: "team-img"
                        })
                      ]),
                      createVNode("h3", { class: "feature-title" }, "المحامي فيصل عبدالرحمن"),
                      createVNode("p", { class: "feature-text" }, " متخصص في القضايا العقارية ومنازعات الأراضي، مع خبرة في توثيق العقود والإفراغ العقاري. "),
                      createVNode("a", {
                        href: "#",
                        class: "details-link"
                      }, [
                        createTextVNode("تفاصيل أكثر "),
                        createVNode("i", {
                          "data-lucide": "chevron-left",
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
                        alt: "المحامي عبدالله بن محمد القحطاني",
                        class: "team-img"
                      })
                    ]),
                    createVNode("h3", { class: "feature-title" }, "المحامي عبدالله بن محمد القحطاني"),
                    createVNode("p", { class: "feature-text" }, " محام ومستشار قانوني متخصص في القضايا التجارية وصياغة العقود، يتمتع بخبرة عملية في تمثيل الشركات والأفراد. "),
                    createVNode("a", {
                      href: "#",
                      class: "details-link"
                    }, [
                      createTextVNode("تفاصيل أكثر "),
                      createVNode("i", {
                        "data-lucide": "chevron-left",
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
                        alt: "المحامي فهد بن سعود العتيبي",
                        class: "team-img"
                      })
                    ]),
                    createVNode("h3", { class: "feature-title" }, "المحامي فهد بن سعود العتيبي"),
                    createVNode("p", { class: "feature-text" }, " مختص في التقاضي والتمثيل أمام المحاكم، مع خبرة في القضايا المدنية والنزاعات القانونية المختلفة. "),
                    createVNode("a", {
                      href: "#",
                      class: "details-link"
                    }, [
                      createTextVNode("تفاصيل أكثر "),
                      createVNode("i", {
                        "data-lucide": "chevron-left",
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
                        alt: "المستشار القانوني أحمد بن خالد الحربي",
                        class: "team-img"
                      })
                    ]),
                    createVNode("h3", { class: "feature-title" }, "المستشار القانوني أحمد بن خالد الحربي"),
                    createVNode("p", { class: "feature-text" }, " مستشار قانوني في شؤون الشركات والأنظمة التجارية، يقدم حلول قانونية مدروسة تدعم نمو الأعمال. "),
                    createVNode("a", {
                      href: "#",
                      class: "details-link"
                    }, [
                      createTextVNode("تفاصيل أكثر "),
                      createVNode("i", {
                        "data-lucide": "chevron-left",
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
                        alt: "المحامي خالد بن وليد",
                        class: "team-img"
                      })
                    ]),
                    createVNode("h3", { class: "feature-title" }, "المحامي خالد بن وليد"),
                    createVNode("p", { class: "feature-text" }, " متخصص في قضايا الأحوال الشخصية والمواريث، بخبرة واسعة في الترافع أمام محاكم الأحوال الشخصية. "),
                    createVNode("a", {
                      href: "#",
                      class: "details-link"
                    }, [
                      createTextVNode("تفاصيل أكثر "),
                      createVNode("i", {
                        "data-lucide": "chevron-left",
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
                        alt: "المستشارة نورة عبدالعزيز",
                        class: "team-img"
                      })
                    ]),
                    createVNode("h3", { class: "feature-title" }, "المستشارة نورة عبدالعزيز"),
                    createVNode("p", { class: "feature-text" }, " خبيرة في الأنظمة العمالية وحماية حقوق الموظفين، وتقديم الاستشارات في عقود العمل والتوظيف. "),
                    createVNode("a", {
                      href: "#",
                      class: "details-link"
                    }, [
                      createTextVNode("تفاصيل أكثر "),
                      createVNode("i", {
                        "data-lucide": "chevron-left",
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
                        alt: "المحامي فيصل عبدالرحمن",
                        class: "team-img"
                      })
                    ]),
                    createVNode("h3", { class: "feature-title" }, "المحامي فيصل عبدالرحمن"),
                    createVNode("p", { class: "feature-text" }, " متخصص في القضايا العقارية ومنازعات الأراضي، مع خبرة في توثيق العقود والإفراغ العقاري. "),
                    createVNode("a", {
                      href: "#",
                      class: "details-link"
                    }, [
                      createTextVNode("تفاصيل أكثر "),
                      createVNode("i", {
                        "data-lucide": "chevron-left",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/Team.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const DarkTeam = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-5380f415"]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "accreditations-section" }, _attrs))}><div class="container"><h2 class="section-title-services mb-2">اعتمادات الشركة</h2><p class="section-subtitle-services mb-5"> نمتلك اعتمادات وتراخيص مهنية تعكس التزامنا بالمعايير النظامية وأفضل الممارسات في تقديم الخدمات القانونية والاستشارية، محلياً ودولياً. </p><div class="row g-4 justify-content-center"><div class="col-md-4"><div class="feature-card accreditation-card h-100 text-center"><div class="logo-container mb-4"><img${ssrRenderAttr("src", _imports_0$2)} alt="الهيئة السعودية للمحامين" class="accreditation-logo"></div><h3 class="feature-title">الهيئة السعودية للمحامين</h3><p class="feature-text"> مكتبنا مسجل وملتزم بالمعايير المهنية المعتمدة، ونقدم خدمات قانونية وفق الأنظمة واللوائح ذات العلاقة. </p><a href="#" class="details-link">تفاصيل أكثر <i data-lucide="chevron-left" class="small-icon"></i></a></div></div><div class="col-md-4"><div class="feature-card accreditation-card h-100 text-center"><div class="logo-container mb-4"><img${ssrRenderAttr("src", _imports_1)} alt="وزارة الموارد البشرية والتنمية الاجتماعية" class="accreditation-logo"></div><h3 class="feature-title">وزارة الموارد البشرية والتنمية الاجتماعية</h3><p class="feature-text"> نقدم دعماً في إعداد ومراجعة اللوائح الداخلية والامتثال التنظيمي، بما يضمن توافق المنشآت مع المتطلبات النظامية. </p><a href="#" class="details-link">تفاصيل أكثر <i data-lucide="chevron-left" class="small-icon"></i></a></div></div><div class="col-md-4"><div class="feature-card accreditation-card h-100 text-center"><div class="logo-container mb-4"><img${ssrRenderAttr("src", _imports_2)} alt="الهيئة السعودية للملكية الفكرية" class="accreditation-logo"></div><h3 class="feature-title">الهيئة السعودية للملكية الفكرية</h3><p class="feature-text"> نساعد في حماية الحقوق الفكرية عبر إعداد الطلبات والمتطلبات التنظيمية ذات الصلة وتقديم الاستشارات المتخصصة. </p><a href="#" class="details-link">تفاصيل أكثر <i data-lucide="chevron-left" class="small-icon"></i></a></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/Accreditations.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const DarkAccreditations = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-section" }, _attrs))}><div class="container"><h2 class="section-title-services mb-2">المدونة القانونية</h2><p class="section-subtitle-services mb-5"> نشارككم مقالات قانونية مبسطة تسلّط الضوء على الأنظمة والتشريعات، وتساعد الأفراد والشركات على فهم حقوقهم واتخاذ قرارات قانونية واعية. </p><div class="row g-4 justify-content-center"><div class="col-md-4"><div class="feature-card blog-card h-100"><div class="blog-img-container mb-4"><img${ssrRenderAttr("src", _imports_0$3)} alt="أهمية الاستشارة القانونية" class="blog-img"></div><h3 class="feature-title">أهمية الاستشارة القانونية قبل توقيع العقود</h3><p class="feature-text"> تعرّف على أهمية الحصول على استشارة قانونية قبل توقيع أي عقد، وكيف تساهم في حماية حقوقك وتجنب المخاطر القانونية. </p><a href="#" class="details-link">اقرأ المزيد <i data-lucide="chevron-left" class="small-icon"></i></a></div></div><div class="col-md-4"><div class="feature-card blog-card h-100"><div class="blog-img-container mb-4"><img${ssrRenderAttr("src", _imports_1$1)} alt="متى تحتاج إلى اللجوء للتحكيم" class="blog-img"></div><h3 class="feature-title">متى تحتاج إلى اللجوء للتحكيم بدلاً من التقاضي؟</h3><p class="feature-text"> شرح مبسط للفروقات بين التحكيم والتقاضي، ومتى يكون التحكيم الخيار الأنسب لحل النزاعات. </p><a href="#" class="details-link">اقرأ المزيد <i data-lucide="chevron-left" class="small-icon"></i></a></div></div><div class="col-md-4"><div class="feature-card blog-card h-100"><div class="blog-img-container mb-4"><img${ssrRenderAttr("src", _imports_2$1)} alt="أبرز الأخطاء القانونية" class="blog-img"></div><h3 class="feature-title">أبرز الأخطاء القانونية التي تقع فيها الشركات الناشئة</h3><p class="feature-text"> نستعرض أكثر الأخطاء القانونية شيوعاً لدى الشركات الناشئة، مع نصائح عملية لتجنبها منذ البداية. </p><a href="#" class="details-link">اقرأ المزيد <i data-lucide="chevron-left" class="small-icon"></i></a></div></div></div><div class="text-center mt-5"><a href="#" class="btn-read-more">اقرأ أكثر</a></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/Blog.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const DarkBlog = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonials-section" }, _attrs))} data-v-6e2abc22><div class="container" data-v-6e2abc22><h2 class="section-title-services mb-2" data-v-6e2abc22>آراء عملائنا</h2><p class="section-subtitle-services mb-5" data-v-6e2abc22> نعتز بثقة عملائنا ونسعى دائماً لتقديم خدمات قانونية ترتقي لتوقعاتهم. </p><div class="swiper-container-wrapper" data-v-6e2abc22>`);
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
                  _push3(`<div class="feature-card testimonial-card h-100" data-v-6e2abc22${_scopeId2}><div class="star-rating mb-3" data-v-6e2abc22${_scopeId2}><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i></div><p class="feature-text testimonial-text mb-4" data-v-6e2abc22${_scopeId2}> &quot;تعامل راقٍ واحترافية عالية، حصلت على استشارة قانونية واضحة ساعدتني في اتخاذ القرار الصحيح بكل ثقة.&quot; </p><div class="reviewer-info" data-v-6e2abc22${_scopeId2}><h4 class="reviewer-name" data-v-6e2abc22${_scopeId2}>محمد بن عبدالله السبيعي</h4><span class="reviewer-role" data-v-6e2abc22${_scopeId2}>رجل أعمال</span></div></div>`);
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
                      createVNode("p", { class: "feature-text testimonial-text mb-4" }, ' "تعامل راقٍ واحترافية عالية، حصلت على استشارة قانونية واضحة ساعدتني في اتخاذ القرار الصحيح بكل ثقة." '),
                      createVNode("div", { class: "reviewer-info" }, [
                        createVNode("h4", { class: "reviewer-name" }, "محمد بن عبدالله السبيعي"),
                        createVNode("span", { class: "reviewer-role" }, "رجل أعمال")
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
                  _push3(`<div class="feature-card testimonial-card h-100" data-v-6e2abc22${_scopeId2}><div class="star-rating mb-3" data-v-6e2abc22${_scopeId2}><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i></div><p class="feature-text testimonial-text mb-4" data-v-6e2abc22${_scopeId2}> &quot;فريق قانوني متميز، متابعة دقيقة للقضية وتواصل مستمر حتى الوصول إلى نتيجة مرضية.&quot; </p><div class="reviewer-info" data-v-6e2abc22${_scopeId2}><h4 class="reviewer-name" data-v-6e2abc22${_scopeId2}>سارة بنت خالد العتيبي</h4><span class="reviewer-role" data-v-6e2abc22${_scopeId2}>صاحبة منشأة</span></div></div>`);
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
                      createVNode("p", { class: "feature-text testimonial-text mb-4" }, ' "فريق قانوني متميز، متابعة دقيقة للقضية وتواصل مستمر حتى الوصول إلى نتيجة مرضية." '),
                      createVNode("div", { class: "reviewer-info" }, [
                        createVNode("h4", { class: "reviewer-name" }, "سارة بنت خالد العتيبي"),
                        createVNode("span", { class: "reviewer-role" }, "صاحبة منشأة")
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
                  _push3(`<div class="feature-card testimonial-card h-100" data-v-6e2abc22${_scopeId2}><div class="star-rating mb-3" data-v-6e2abc22${_scopeId2}><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i></div><p class="feature-text testimonial-text mb-4" data-v-6e2abc22${_scopeId2}> &quot;خبرة قانونية واضحة وحرص على مصلحة العميل، أنصح بالتعامل معهم لمن يبحث عن الثقة والمهنية.&quot; </p><div class="reviewer-info" data-v-6e2abc22${_scopeId2}><h4 class="reviewer-name" data-v-6e2abc22${_scopeId2}>عبدالرحمن بن فهد القحطاني</h4><span class="reviewer-role" data-v-6e2abc22${_scopeId2}>مدير شركة</span></div></div>`);
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
                      createVNode("p", { class: "feature-text testimonial-text mb-4" }, ' "خبرة قانونية واضحة وحرص على مصلحة العميل، أنصح بالتعامل معهم لمن يبحث عن الثقة والمهنية." '),
                      createVNode("div", { class: "reviewer-info" }, [
                        createVNode("h4", { class: "reviewer-name" }, "عبدالرحمن بن فهد القحطاني"),
                        createVNode("span", { class: "reviewer-role" }, "مدير شركة")
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
                  _push3(`<div class="feature-card testimonial-card h-100" data-v-6e2abc22${_scopeId2}><div class="star-rating mb-3" data-v-6e2abc22${_scopeId2}><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i></div><p class="feature-text testimonial-text mb-4" data-v-6e2abc22${_scopeId2}> &quot;خدمة ممتازة ودقة في المواعيد. مكتب محترف للغاية وتعاملهم يبعث على الاطمئنان في كل خطوة.&quot; </p><div class="reviewer-info" data-v-6e2abc22${_scopeId2}><h4 class="reviewer-name" data-v-6e2abc22${_scopeId2}>خالد العتيبي</h4><span class="reviewer-role" data-v-6e2abc22${_scopeId2}>عميل</span></div></div>`);
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
                      createVNode("p", { class: "feature-text testimonial-text mb-4" }, ' "خدمة ممتازة ودقة في المواعيد. مكتب محترف للغاية وتعاملهم يبعث على الاطمئنان في كل خطوة." '),
                      createVNode("div", { class: "reviewer-info" }, [
                        createVNode("h4", { class: "reviewer-name" }, "خالد العتيبي"),
                        createVNode("span", { class: "reviewer-role" }, "عميل")
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
                  _push3(`<div class="feature-card testimonial-card h-100" data-v-6e2abc22${_scopeId2}><div class="star-rating mb-3" data-v-6e2abc22${_scopeId2}><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i></div><p class="feature-text testimonial-text mb-4" data-v-6e2abc22${_scopeId2}> &quot;ساعدوني في حل قضية تجارية معقدة بنجاح باهر. خبرتهم في القانون التجاري لا تضاهى في المنطقة.&quot; </p><div class="reviewer-info" data-v-6e2abc22${_scopeId2}><h4 class="reviewer-name" data-v-6e2abc22${_scopeId2}>شركة النور العقارية</h4><span class="reviewer-role" data-v-6e2abc22${_scopeId2}>شريك استراتيجي</span></div></div>`);
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
                      createVNode("p", { class: "feature-text testimonial-text mb-4" }, ' "ساعدوني في حل قضية تجارية معقدة بنجاح باهر. خبرتهم في القانون التجاري لا تضاهى في المنطقة." '),
                      createVNode("div", { class: "reviewer-info" }, [
                        createVNode("h4", { class: "reviewer-name" }, "شركة النور العقارية"),
                        createVNode("span", { class: "reviewer-role" }, "شريك استراتيجي")
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
                  _push3(`<div class="feature-card testimonial-card h-100" data-v-6e2abc22${_scopeId2}><div class="star-rating mb-3" data-v-6e2abc22${_scopeId2}><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i><i data-lucide="star" class="star-icon" data-v-6e2abc22${_scopeId2}></i></div><p class="feature-text testimonial-text mb-4" data-v-6e2abc22${_scopeId2}> &quot;أنصح كل من لديه استشارة قانونية بالتوجه إليهم. سرعة في الرد واهتمام بالتفاصيل وحلول قانونية مبتكرة.&quot; </p><div class="reviewer-info" data-v-6e2abc22${_scopeId2}><h4 class="reviewer-name" data-v-6e2abc22${_scopeId2}>ناصر الحربي</h4><span class="reviewer-role" data-v-6e2abc22${_scopeId2}>مستشار أعمال</span></div></div>`);
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
                      createVNode("p", { class: "feature-text testimonial-text mb-4" }, ' "أنصح كل من لديه استشارة قانونية بالتوجه إليهم. سرعة في الرد واهتمام بالتفاصيل وحلول قانونية مبتكرة." '),
                      createVNode("div", { class: "reviewer-info" }, [
                        createVNode("h4", { class: "reviewer-name" }, "ناصر الحربي"),
                        createVNode("span", { class: "reviewer-role" }, "مستشار أعمال")
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
                    createVNode("p", { class: "feature-text testimonial-text mb-4" }, ' "تعامل راقٍ واحترافية عالية، حصلت على استشارة قانونية واضحة ساعدتني في اتخاذ القرار الصحيح بكل ثقة." '),
                    createVNode("div", { class: "reviewer-info" }, [
                      createVNode("h4", { class: "reviewer-name" }, "محمد بن عبدالله السبيعي"),
                      createVNode("span", { class: "reviewer-role" }, "رجل أعمال")
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
                    createVNode("p", { class: "feature-text testimonial-text mb-4" }, ' "فريق قانوني متميز، متابعة دقيقة للقضية وتواصل مستمر حتى الوصول إلى نتيجة مرضية." '),
                    createVNode("div", { class: "reviewer-info" }, [
                      createVNode("h4", { class: "reviewer-name" }, "سارة بنت خالد العتيبي"),
                      createVNode("span", { class: "reviewer-role" }, "صاحبة منشأة")
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
                    createVNode("p", { class: "feature-text testimonial-text mb-4" }, ' "خبرة قانونية واضحة وحرص على مصلحة العميل، أنصح بالتعامل معهم لمن يبحث عن الثقة والمهنية." '),
                    createVNode("div", { class: "reviewer-info" }, [
                      createVNode("h4", { class: "reviewer-name" }, "عبدالرحمن بن فهد القحطاني"),
                      createVNode("span", { class: "reviewer-role" }, "مدير شركة")
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
                    createVNode("p", { class: "feature-text testimonial-text mb-4" }, ' "خدمة ممتازة ودقة في المواعيد. مكتب محترف للغاية وتعاملهم يبعث على الاطمئنان في كل خطوة." '),
                    createVNode("div", { class: "reviewer-info" }, [
                      createVNode("h4", { class: "reviewer-name" }, "خالد العتيبي"),
                      createVNode("span", { class: "reviewer-role" }, "عميل")
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
                    createVNode("p", { class: "feature-text testimonial-text mb-4" }, ' "ساعدوني في حل قضية تجارية معقدة بنجاح باهر. خبرتهم في القانون التجاري لا تضاهى في المنطقة." '),
                    createVNode("div", { class: "reviewer-info" }, [
                      createVNode("h4", { class: "reviewer-name" }, "شركة النور العقارية"),
                      createVNode("span", { class: "reviewer-role" }, "شريك استراتيجي")
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
                    createVNode("p", { class: "feature-text testimonial-text mb-4" }, ' "أنصح كل من لديه استشارة قانونية بالتوجه إليهم. سرعة في الرد واهتمام بالتفاصيل وحلول قانونية مبتكرة." '),
                    createVNode("div", { class: "reviewer-info" }, [
                      createVNode("h4", { class: "reviewer-name" }, "ناصر الحربي"),
                      createVNode("span", { class: "reviewer-role" }, "مستشار أعمال")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/Testimonials.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const DarkTestimonials = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-6e2abc22"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "cta-section" }, _attrs))}><div class="container"><div class="cta-container p-5"><h2 class="cta-title mb-3">هل تحتاج إلى دعم قانوني؟</h2><p class="cta-text mb-4"> احصل على استشارة قانونية من فريقنا المتخصص، ودعنا نساعدك في اتخاذ القرار القانوني الصحيح. </p><div class="mt-4"><a href="#" class="btn-cta">طلب استشارة قانونية</a></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/CTA.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const DarkCTA = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer-section" }, _attrs))}><div class="container"><div class="footer-top mb-5"><div class="d-flex justify-content-start align-items-center mb-4"><img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="footer-logo"></div></div><div class="row g-4 footer-links-row"><div class="col-lg-3 col-md-6"><h5 class="footer-heading mb-4">روابط سريعة</h5><ul class="list-unstyled footer-list"><li><a href="#" class="footer-link">الرئيسية</a></li><li><a href="#" class="footer-link">من نحن</a></li><li><a href="#" class="footer-link">الخدمات</a></li><li><a href="#" class="footer-link">فريق العمل</a></li><li><a href="#" class="footer-link">المدونة</a></li><li><a href="#" class="footer-link">وظائف</a></li></ul></div><div class="col-lg-3 col-md-6"><h5 class="footer-heading mb-4">خدماتنا</h5><ul class="list-unstyled footer-list"><li><a href="#" class="footer-link">الاستشارات القانونية</a></li><li><a href="#" class="footer-link">التقاضي والتمثيل أمام المحاكم</a></li><li><a href="#" class="footer-link">قضايا الشركات والقانون التجاري</a></li><li><a href="#" class="footer-link">صياغة ومراجعة العقود</a></li><li><a href="#" class="footer-link">القضايا المدنية والجنائية</a></li><li><a href="#" class="footer-link">التحكيم وتسوية النزاعات</a></li></ul></div><div class="col-lg-3 col-md-6"><h5 class="footer-heading mb-4">المدونة</h5><ul class="list-unstyled footer-list"><li><a href="#" class="footer-link">العقود والاتفاقيات</a></li><li><a href="#" class="footer-link">القانون التجاري والشركات</a></li><li><a href="#" class="footer-link">القضايا المدنية</a></li><li><a href="#" class="footer-link">القضايا الجنائية</a></li><li><a href="#" class="footer-link">التحكيم وتسوية النزاعات</a></li><li><a href="#" class="footer-link">أنظمة ولوائح سعودية</a></li><li><a href="#" class="footer-link">حوكمة وامتثال</a></li></ul></div><div class="col-lg-3 col-md-6"><h5 class="footer-heading mb-4">معلومات التواصل</h5><div class="contact-item mb-3"><span class="contact-label">الهاتف:</span><br><a href="tel:05XXXXXXXX" class="footer-link">05XXXXXXXX</a></div><div class="contact-item mb-3"><span class="contact-label">البريد الإلكتروني:</span><br><a href="mailto:info@lawfirm.sa" class="footer-link">info@lawfirm.sa</a></div><div class="contact-item"><span class="contact-label">العنوان:</span><br><span class="footer-text">المملكة العربية السعودية</span></div></div></div><div class="footer-bottom mt-5 pt-4 border-top border-secondary d-flex flex-md-row flex-column justify-content-between align-items-center"><p class="copyright mb-0">© جميع الحقوق محفوظة - مكتب محاماة</p><div class="social-links mb-3 mb-md-0"><a href="#" class="social-icon"><i data-lucide="instagram"></i></a><a href="#" class="social-icon"><i data-lucide="facebook"></i></a><a href="#" class="social-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a><a href="#" class="social-icon"><i data-lucide="linkedin"></i></a><a href="#" class="social-icon"><i data-lucide="youtube"></i></a></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DarkFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "مكتب الرياض للمحاماة | نسخة داكنة",
      htmlAttrs: {
        lang: "ar",
        dir: "rtl"
      },
      link: [
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css" },
        { rel: "stylesheet", href: "/assets/css/dark.css" }
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
      _push(ssrRenderComponent(DarkAccreditations, null, null, _parent));
      _push(ssrRenderComponent(DarkBlog, null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/landing-page-dark/ar/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CjEwDtKq.js.map
