import { _ as __nuxt_component_0 } from "./nuxt-link-DIEMWijX.js";
import { mergeProps, withCtx, createVNode, useSSRContext, unref, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./virtual_public-B8MnIwJ6.js";
import { _ as _imports_0$1 } from "./virtual_public-xmrLAXfw.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-ChBMeibh.js";
import { _ as _imports_0$2, a as _imports_1, b as _imports_2, c as _imports_3, d as _imports_4, e as _imports_5 } from "./virtual_public-7f3uwKVF.js";
import { _ as _imports_0$3, a as _imports_0$4, b as _imports_2$1 } from "./virtual_public-DO9UfAUU.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import { _ as _imports_1$1 } from "./virtual_public-BwrrH5yG.js";
import { _ as _imports_0$5, a as _imports_1$2, b as _imports_2$2 } from "./virtual_public-CP3K-QAO.js";
import { _ as _imports_0$6 } from "./virtual_public-BGu3sNhM.js";
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
      _push(`<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav mx-auto"><li class="nav-item"><a class="nav-link active" href="#">الرئيسية</a></li><li class="nav-item"><a class="nav-link" href="#">من نحن</a></li><li class="nav-item"><a class="nav-link" href="#">خدماتنا</a></li><li class="nav-item"><a class="nav-link" href="#">فريق العمل</a></li><li class="nav-item"><a class="nav-link" href="#">المدونة</a></li><li class="nav-item"><a class="nav-link" href="#">تواصل معنا</a></li></ul><div class="d-flex"><a href="#" class="btn btn-consult">طلب استشارة قانونية</a></div></div></div></nav>`);
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero-section" }, _attrs))}><div class="container"><div class="row align-items-center gx-lg-5"><div class="col-lg-5 hero-content ps-lg-0"><h1 class="hero-title">خبرة قانونية موثوقة لحماية حقوقك</h1><p class="hero-subtitle"> نقدم خدمات قانونية احترافية للأفراد والشركات، تعتمد على الخبرة، النزاهة، والالتزام التام بأعلى المعايير المهنية. </p><a href="#" class="btn-hero">طلب استشارة قانونية</a></div><div class="col-lg-7"><div class="hero-img-container"><img${ssrRenderAttr("src", _imports_0$1)} alt="Legal Expertise" class="hero-img">`);
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
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "why-us-section" }, _attrs))} data-v-b4d5e5a0><div class="container" data-v-b4d5e5a0><h2 class="section-title" data-v-b4d5e5a0>لماذا يثق بنا عملاؤنا</h2><div class="row g-4" data-v-b4d5e5a0><div class="col-lg-3 col-md-6" data-v-b4d5e5a0><div class="feature-card" data-v-b4d5e5a0><div class="feature-icon" data-v-b4d5e5a0><i data-lucide="clipboard-list" data-v-b4d5e5a0></i></div><h3 class="feature-title" data-v-b4d5e5a0>متابعة دقيقة للقضايا</h3><p class="feature-text" data-v-b4d5e5a0> نحرص على متابعة جميع القضايا خطوة بخطوة وإبقاء عملائنا على اطلاع دائم. </p></div></div><div class="col-lg-3 col-md-6" data-v-b4d5e5a0><div class="feature-card" data-v-b4d5e5a0><div class="feature-icon" data-v-b4d5e5a0><i data-lucide="gavel" data-v-b4d5e5a0></i></div><h3 class="feature-title" data-v-b4d5e5a0>خبرة قانونية متخصصة</h3><p class="feature-text" data-v-b4d5e5a0> فريق من المحامين والمستشارين القانونيين ذوي خبرة واسعة في مختلف المجالات القانونية. </p></div></div><div class="col-lg-3 col-md-6" data-v-b4d5e5a0><div class="feature-card" data-v-b4d5e5a0><div class="feature-icon" data-v-b4d5e5a0><i data-lucide="shield" data-v-b4d5e5a0></i></div><h3 class="feature-title" data-v-b4d5e5a0>سرية ومهنية تامة</h3><p class="feature-text" data-v-b4d5e5a0> نلتزم بأعلى معايير السرية المهنية والأخلاق القانونية في جميع القضايا. </p></div></div><div class="col-lg-3 col-md-6" data-v-b4d5e5a0><div class="feature-card" data-v-b4d5e5a0><div class="feature-icon" data-v-b4d5e5a0><i data-lucide="user-round-check" data-v-b4d5e5a0></i></div><h3 class="feature-title" data-v-b4d5e5a0>تمثيل قانوني قوي</h3><p class="feature-text" data-v-b4d5e5a0> ندافع عن حقوق عملائنا أمام الجهات القضائية بكل احترافية وكفاءة. </p></div></div></div></div></section>`);
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
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-section" }, _attrs))}><div class="container"><div class="mb-5"><h2 class="section-title mb-2">خدماتنا القانونية</h2><p class="section-subtitle text-muted">نقدم خدمات قانونية مبنية على الخبرة والالتزام، مع حلول واضحة وموثوقة تناسب احتياجات عملائنا.</p></div><div class="row align-items-center staggered-row flex-lg-row-reverse"><div class="col-lg-6"><img${ssrRenderAttr("src", _imports_0$2)} alt="الاستشارات القانونية" class="img-fluid rounded-4 shadow service-img"></div><div class="col-lg-6"><div class="service-content p-lg-5"><h3 class="service-item-title mb-3">الاستشارات القانونية</h3><p class="service-description text-muted mb-4"> تقديم استشارات قانونية دقيقة ومبنية على الأنظمة المعتمدة، تساعد الأفراد والشركات على اتخاذ قرارات قانونية صحيحة ومدروسة. </p><a href="#" class="btn-read-more">تفاصيل أكثر <i data-lucide="chevron-left" class="ms-1"></i></a></div></div></div><div class="row align-items-center staggered-row"><div class="col-lg-6"><img${ssrRenderAttr("src", _imports_1)} alt="التقاضي والتمثيل أمام المحاكم" class="img-fluid rounded-4 shadow service-img"></div><div class="col-lg-6"><div class="service-content p-lg-5"><h3 class="service-item-title mb-3">التقاضي والتمثيل أمام المحاكم</h3><p class="service-description text-muted mb-4"> تمثيل قانوني احترافي أمام مختلف الجهات القضائية، مع متابعة شاملة للقضايا في جميع مراحلها حتى الوصول إلى أفضل النتائج الممكنة. </p><a href="#" class="btn-read-more">تفاصيل أكثر <i data-lucide="chevron-left" class="ms-1"></i></a></div></div></div><div class="row align-items-center staggered-row flex-lg-row-reverse"><div class="col-lg-6"><img${ssrRenderAttr("src", _imports_2)} alt="قضايا الشركات والقانون التجاري" class="img-fluid rounded-4 shadow service-img"></div><div class="col-lg-6"><div class="service-content p-lg-5"><h3 class="service-item-title mb-3">قضايا الشركات والقانون التجاري</h3><p class="service-description text-muted mb-4"> تقديم دعم قانوني متكامل للشركات يشمل التأسيس، إدارة النزاعات، وتنظيم العلاقات التجارية بما يضمن الامتثال وحماية المصالح. </p><a href="#" class="btn-read-more">تفاصيل أكثر <i data-lucide="chevron-left" class="ms-1"></i></a></div></div></div><div class="row align-items-center staggered-row"><div class="col-lg-6"><img${ssrRenderAttr("src", _imports_3)} alt="صياغة ومراجعة العقود" class="img-fluid rounded-4 shadow service-img"></div><div class="col-lg-6"><div class="service-content p-lg-5"><h3 class="service-item-title mb-3">صياغة ومراجعة العقود</h3><p class="service-description text-muted mb-4"> إعداد وصياغة ومراجعة كافة العقود والاتفاقيات باحترافية، مع التركيز على وضوح البنود وحماية الحقوق وتقليل المخاطر القانونية. </p><a href="#" class="btn-read-more">تفاصيل أكثر <i data-lucide="chevron-left" class="ms-1"></i></a></div></div></div><div class="row align-items-center staggered-row flex-lg-row-reverse"><div class="col-lg-6"><img${ssrRenderAttr("src", _imports_4)} alt="القضايا المدنية والجنائية" class="img-fluid rounded-4 shadow service-img"></div><div class="col-lg-6"><div class="service-content p-lg-5"><h3 class="service-item-title mb-3">القضايا المدنية والجنائية</h3><p class="service-description text-muted mb-4"> التعامل مع القضايا المدنية والجنائية بكفاءة عالية، مع الالتزام بالسرية التامة والدفاع عن حقوق العملاء وفق الأنظمة والقوانين. </p><a href="#" class="btn-read-more">تفاصيل أكثر <i data-lucide="chevron-left" class="ms-1"></i></a></div></div></div><div class="row align-items-center staggered-row"><div class="col-lg-6"><img${ssrRenderAttr("src", _imports_5)} alt="التحكيم وتسوية النزاعات" class="img-fluid rounded-4 shadow service-img"></div><div class="col-lg-6"><div class="service-content p-lg-5"><h3 class="service-item-title mb-3">التحكيم وتسوية النزاعات</h3><p class="service-description text-muted mb-4"> تسوية النزاعات بوسائل قانونية بديلة مثل التحكيم والوساطة، بما يساهم في توفير الوقت والتكاليف وتحقيق حلول عادلة. </p><a href="#" class="btn-read-more">تفاصيل أكثر <i data-lucide="chevron-left" class="ms-1"></i></a></div></div></div></div></section>`);
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "team-section" }, _attrs))} data-v-70ebec3e><div class="container" data-v-70ebec3e><div class="mb-5" data-v-70ebec3e><h2 class="section-title mb-2" data-v-70ebec3e>فريق العمل</h2><p class="section-subtitle text-muted" data-v-70ebec3e>يضم مكتبنا نخبة من المحامين والمستشارين القانونيين الذين يعملون بروح الفريق لتقديم أفضل الحلول القانونية لعملائنا.</p></div><div class="swiper-container-wrapper" data-v-70ebec3e>`);
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
                  _push3(`<div class="team-card" data-v-70ebec3e${_scopeId2}><div class="team-img-wrapper" data-v-70ebec3e${_scopeId2}><img${ssrRenderAttr("src", _imports_0$3)} alt="المحامي عبدالله بن محمد القحطاني" data-v-70ebec3e${_scopeId2}></div><h4 class="team-member-name" data-v-70ebec3e${_scopeId2}>المحامي عبدالله بن محمد القحطاني</h4><p class="team-member-role" data-v-70ebec3e${_scopeId2}>محام ومستشار قانوني متخصص في القضايا التجارية وصياغة العقود، يتمتع بخبرة عملية في تمثيل الشركات والأفراد.</p><a href="#" class="team-link" data-v-70ebec3e${_scopeId2}>تفاصيل أكثر <i data-lucide="chevron-left" data-v-70ebec3e${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$3,
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
                  _push3(`<div class="team-card" data-v-70ebec3e${_scopeId2}><div class="team-img-wrapper" data-v-70ebec3e${_scopeId2}><img${ssrRenderAttr("src", _imports_0$3)} alt="المحامي فهد بن سعود العتيبي" data-v-70ebec3e${_scopeId2}></div><h4 class="team-member-name" data-v-70ebec3e${_scopeId2}>المحامي فهد بن سعود العتيبي</h4><p class="team-member-role" data-v-70ebec3e${_scopeId2}>مختص في التقاضي والتمثيل أمام المحاكم، مع خبرة في القضايا المدنية والنزاعات القانونية المختلفة.</p><a href="#" class="team-link" data-v-70ebec3e${_scopeId2}>تفاصيل أكثر <i data-lucide="chevron-left" data-v-70ebec3e${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$3,
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
                  _push3(`<div class="team-card" data-v-70ebec3e${_scopeId2}><div class="team-img-wrapper" data-v-70ebec3e${_scopeId2}><img${ssrRenderAttr("src", _imports_0$3)} alt="المستشار القانوني أحمد بن خالد الحربي" data-v-70ebec3e${_scopeId2}></div><h4 class="team-member-name" data-v-70ebec3e${_scopeId2}>المستشار القانوني أحمد بن خالد الحربي</h4><p class="team-member-role" data-v-70ebec3e${_scopeId2}>مستشار قانوني في شؤون الشركات والأنظمة التجارية، يقدم حلولاً قانونية مدروسة تدعم نمو الأعمال.</p><a href="#" class="team-link" data-v-70ebec3e${_scopeId2}>تفاصيل أكثر <i data-lucide="chevron-left" data-v-70ebec3e${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$3,
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
                  _push3(`<div class="team-card" data-v-70ebec3e${_scopeId2}><div class="team-img-wrapper" data-v-70ebec3e${_scopeId2}><img${ssrRenderAttr("src", _imports_0$3)} alt="المحامي" data-v-70ebec3e${_scopeId2}></div><h4 class="team-member-name" data-v-70ebec3e${_scopeId2}>المحامي</h4><p class="team-member-role" data-v-70ebec3e${_scopeId2}>مختص في القضايا المدنية، مع خبرة في الدفاع عن حقوق العملاء وفق الأنظمة والقوانين.</p><a href="#" class="team-link" data-v-70ebec3e${_scopeId2}>تفاصيل أكثر <i data-lucide="chevron-left" data-v-70ebec3e${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$3,
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
                  _push3(`<div class="team-card" data-v-70ebec3e${_scopeId2}><div class="team-img-wrapper" data-v-70ebec3e${_scopeId2}><img${ssrRenderAttr("src", _imports_0$3)} alt="المحامي خالد بن وليد" data-v-70ebec3e${_scopeId2}></div><h4 class="team-member-name" data-v-70ebec3e${_scopeId2}>المحامي خالد بن وليد</h4><p class="team-member-role" data-v-70ebec3e${_scopeId2}>متخصص في قضايا الأحوال الشخصية والمواريث، بخبرة واسعة في الترافع أمام محاكم الأحوال الشخصية.</p><a href="#" class="team-link" data-v-70ebec3e${_scopeId2}>تفاصيل أكثر <i data-lucide="chevron-left" data-v-70ebec3e${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$3,
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
                  _push3(`<div class="team-card" data-v-70ebec3e${_scopeId2}><div class="team-img-wrapper" data-v-70ebec3e${_scopeId2}><img${ssrRenderAttr("src", _imports_0$3)} alt="المستشارة نورة عبدالعزيز" data-v-70ebec3e${_scopeId2}></div><h4 class="team-member-name" data-v-70ebec3e${_scopeId2}>المستشارة نورة عبدالعزيز</h4><p class="team-member-role" data-v-70ebec3e${_scopeId2}>خبيرة في الأنظمة العمالية وحماية حقوق الموظفين، وتقديم الاستشارات في عقود العمل والتوظيف.</p><a href="#" class="team-link" data-v-70ebec3e${_scopeId2}>تفاصيل أكثر <i data-lucide="chevron-left" data-v-70ebec3e${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$3,
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
                  _push3(`<div class="team-card" data-v-70ebec3e${_scopeId2}><div class="team-img-wrapper" data-v-70ebec3e${_scopeId2}><img${ssrRenderAttr("src", _imports_0$3)} alt="المحامي فيصل عبدالرحمن" data-v-70ebec3e${_scopeId2}></div><h4 class="team-member-name" data-v-70ebec3e${_scopeId2}>المحامي فيصل عبدالرحمن</h4><p class="team-member-role" data-v-70ebec3e${_scopeId2}>متخصص في القضايا العقارية ومنازعات الأراضي، مع خبرة في توثيق العقود والإفراغ العقاري.</p><a href="#" class="team-link" data-v-70ebec3e${_scopeId2}>تفاصيل أكثر <i data-lucide="chevron-left" data-v-70ebec3e${_scopeId2}></i></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "team-card" }, [
                      createVNode("div", { class: "team-img-wrapper" }, [
                        createVNode("img", {
                          src: _imports_0$3,
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
                        src: _imports_0$3,
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
                        src: _imports_0$3,
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
                        src: _imports_0$3,
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
                        src: _imports_0$3,
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
                        src: _imports_0$3,
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
                        src: _imports_0$3,
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
                        src: _imports_0$3,
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/Team.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const LightTeam = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-70ebec3e"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-section" }, _attrs))}><div class="container"><div class="blog-inner-container"><div class="mb-5"><h2 class="section-title mb-2">المدونة القانونية</h2><p class="section-subtitle text-muted">نشارككم مقالات قانونية مبسطة تسلّط الضوء على الأنظمة والتشريعات، وتساعد الأفراد والشركات على فهم حقوقهم واتخاذ قرارات قانونية واعية.</p></div><div class="row g-4"><div class="col-lg-4 col-md-6"><div class="blog-card"><div class="blog-img-wrapper"><img${ssrRenderAttr("src", _imports_0$4)} alt="أهمية الاستشارة القانونية قبل توقيع العقود"></div><div class="blog-content"><h3 class="blog-title">أهمية الاستشارة القانونية قبل توقيع العقود</h3><p class="blog-description">تعرف على أهمية الحصول على استشارة قانونية قبل توقيع أي عقد، وكيف تساهم في حماية حقوقك وتجنب المخاطر القانونية.</p><a href="#" class="blog-link">اقرأ المزيد <i data-lucide="chevron-left"></i></a></div></div></div><div class="col-lg-4 col-md-6"><div class="blog-card"><div class="blog-img-wrapper"><img${ssrRenderAttr("src", _imports_1$1)} alt="متى تحتاج إلى اللجوء للتحكيم بدلاً من التقاضي؟"></div><div class="blog-content"><h3 class="blog-title">متى تحتاج إلى اللجوء للتحكيم بدلاً من التقاضي؟</h3><p class="blog-description">شرح مبسط للفروقات بين التحكيم والتقاضي، ومتى يكون التحكيم الخيار الأنسب لحل النزاعات.</p><a href="#" class="blog-link">اقرأ المزيد <i data-lucide="chevron-left"></i></a></div></div></div><div class="col-lg-4 col-md-6"><div class="blog-card"><div class="blog-img-wrapper"><img${ssrRenderAttr("src", _imports_2$1)} alt="أبرز الأخطاء القانونية التي تقع فيها الشركات الناشئة"></div><div class="blog-content"><h3 class="blog-title">أبرز الأخطاء القانونية التي تقع فيها الشركات الناشئة</h3><p class="blog-description">نستعرض أكثر الأخطاء القانونية شيوعاً لدى الشركات الناشئة، مع نصائح عملية لتجنبها منذ البداية.</p><a href="#" class="blog-link">اقرأ المزيد <i data-lucide="chevron-left"></i></a></div></div></div></div></div></div></section>`);
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
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "accreditations-section" }, _attrs))}><div class="container"><div class="mb-5"><h2 class="section-title mb-2">اعتمادات الشركة</h2><p class="section-subtitle text-muted">نمتلك اعتمادات وتراخيص مهنية تعكس التزامنا بالمعايير النظامية وأفضل الممارسات في تقديم الخدمات القانونية والاستشارية، محلياً ودولياً.</p></div><div class="row g-4"><div class="col-lg-4 col-md-6"><div class="accreditation-card"><div class="accreditation-logo-wrapper"><img${ssrRenderAttr("src", _imports_0$5)} alt="الهيئة السعودية للملكية الفكرية"></div><h3 class="accreditation-title">الهيئة السعودية للملكية الفكرية</h3><p class="accreditation-description">نساعد في حماية الحقوق الفكرية عبر إعداد الطلبات والمتطلبات التنظيمية ذات الصلة وتقديم الاستشارات المتخصصة.</p><a href="#" class="accreditation-link">تفاصيل أكثر <i data-lucide="chevron-left"></i></a></div></div><div class="col-lg-4 col-md-6"><div class="accreditation-card"><div class="accreditation-logo-wrapper"><img${ssrRenderAttr("src", _imports_1$2)} alt="وزارة الموارد البشرية والتنمية الاجتماعية"></div><h3 class="accreditation-title">وزارة الموارد البشرية والتنمية الاجتماعية</h3><p class="accreditation-description">نقـدّم دعمـاً في إعـداد ومراجعـة اللوائـح الداخليـة والامتثـال التنظيمـي، بمـا يضمـن توافـق المنشـأة مع المتطلبـات النظاميـة.</p><a href="#" class="accreditation-link">تفاصيل أكثر <i data-lucide="chevron-left"></i></a></div></div><div class="col-lg-4 col-md-6"><div class="accreditation-card"><div class="accreditation-logo-wrapper"><img${ssrRenderAttr("src", _imports_2$2)} alt="الهيئة السعودية للمحامين"></div><h3 class="accreditation-title">الهيئة السعودية للمحامين</h3><p class="accreditation-description">مكتبنا مسجل وملتزم بالمعايير المهنية المعتمدة، ونقـدم خدمات قانونية وفق الأنظمة واللوائح ذات العلاقة.</p><a href="#" class="accreditation-link">تفاصيل أكثر <i data-lucide="chevron-left"></i></a></div></div></div></div></section>`);
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonials-section" }, _attrs))} data-v-4ed75415><div class="container" data-v-4ed75415><div class="mb-5" data-v-4ed75415><h2 class="section-title mb-2" data-v-4ed75415>آراء عملائنا</h2><p class="section-subtitle text-muted" data-v-4ed75415>نعتز بثقة عملائنا ونسعى دائماً لتقديم خدمات قانونية ترتقي لتوقعاتهم.</p></div><div class="swiper-container-wrapper" data-v-4ed75415>`);
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
                  _push3(`<div class="testimonial-card" data-v-4ed75415${_scopeId2}><div class="testimonial-stars" data-v-4ed75415${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i></div><p class="testimonial-text" data-v-4ed75415${_scopeId2}>&quot;تعامل راق واحترافية عالية، حصلت على استشارة قانونية واضحة ساعدتني في اتخاذ القرار الصحيح بكل ثقة.&quot;</p><div class="testimonial-author" data-v-4ed75415${_scopeId2}><span class="testimonial-name" data-v-4ed75415${_scopeId2}>محمد بن عبدالله السبيعي</span><span class="testimonial-role" data-v-4ed75415${_scopeId2}>رجل أعمال</span></div></div>`);
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
                      createVNode("p", { class: "testimonial-text" }, '"تعامل راق واحترافية عالية، حصلت على استشارة قانونية واضحة ساعدتني في اتخاذ القرار الصحيح بكل ثقة."'),
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
                  _push3(`<div class="testimonial-card" data-v-4ed75415${_scopeId2}><div class="testimonial-stars" data-v-4ed75415${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i></div><p class="testimonial-text" data-v-4ed75415${_scopeId2}>&quot;فريق قانوني متميز، متابعة دقيقة للقضية وتواصل مستمر حتى الوصول إلى نتيجة مرضية.&quot;</p><div class="testimonial-author" data-v-4ed75415${_scopeId2}><span class="testimonial-name" data-v-4ed75415${_scopeId2}>سارة بنت خالد العتيبي</span><span class="testimonial-role" data-v-4ed75415${_scopeId2}>صاحبة منشأة</span></div></div>`);
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
                  _push3(`<div class="testimonial-card" data-v-4ed75415${_scopeId2}><div class="testimonial-stars" data-v-4ed75415${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i></div><p class="testimonial-text" data-v-4ed75415${_scopeId2}>&quot;خبرة قانونية واضحة وحرص على مصلحة العميل، أنصح بالتعامل معهم لمن يبحث عن الثقة والمهنية.&quot;</p><div class="testimonial-author" data-v-4ed75415${_scopeId2}><span class="testimonial-name" data-v-4ed75415${_scopeId2}>عبدالرحمن بن فهد القحطاني</span><span class="testimonial-role" data-v-4ed75415${_scopeId2}>مدير شركة</span></div></div>`);
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
                      createVNode("p", { class: "testimonial-text" }, '"خبرة قانونية واضحة وحرص على مصلحة العميل، أنصح بالتعامل معهم لمن يبحث عن الثقة والمهنية."'),
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
                  _push3(`<div class="testimonial-card" data-v-4ed75415${_scopeId2}><div class="testimonial-stars" data-v-4ed75415${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i></div><p class="testimonial-text" data-v-4ed75415${_scopeId2}>&quot;خدمة ممتازة ودقة في المواعيد. مكتب محترف للغاية وتعاملهم يبعث على الاطمئنان.&quot;</p><div class="testimonial-author" data-v-4ed75415${_scopeId2}><span class="testimonial-name" data-v-4ed75415${_scopeId2}>خالد العتيبي</span><span class="testimonial-role" data-v-4ed75415${_scopeId2}>عميل</span></div></div>`);
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
                  _push3(`<div class="testimonial-card" data-v-4ed75415${_scopeId2}><div class="testimonial-stars" data-v-4ed75415${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i></div><p class="testimonial-text" data-v-4ed75415${_scopeId2}>&quot;ساعدوني في حل قضية تجارية معقدة بنجاح باهر. خبرتهم في القانون التجاري لا تضاهى.&quot;</p><div class="testimonial-author" data-v-4ed75415${_scopeId2}><span class="testimonial-name" data-v-4ed75415${_scopeId2}>شركة النور العقارية</span><span class="testimonial-role" data-v-4ed75415${_scopeId2}>شريك استراتيجي</span></div></div>`);
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
                  _push3(`<div class="testimonial-card" data-v-4ed75415${_scopeId2}><div class="testimonial-stars" data-v-4ed75415${_scopeId2}><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i><i data-lucide="star" fill="#c3a46e" data-v-4ed75415${_scopeId2}></i></div><p class="testimonial-text" data-v-4ed75415${_scopeId2}>&quot;أنصح كل من لديه استشارة قانونية بالتوجه إليهم. سرعة في الرد وحلول قانونية مبتكرة.&quot;</p><div class="testimonial-author" data-v-4ed75415${_scopeId2}><span class="testimonial-name" data-v-4ed75415${_scopeId2}>ناصر الحربي</span><span class="testimonial-role" data-v-4ed75415${_scopeId2}>مستشار أعمال</span></div></div>`);
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
                    createVNode("p", { class: "testimonial-text" }, '"تعامل راق واحترافية عالية، حصلت على استشارة قانونية واضحة ساعدتني في اتخاذ القرار الصحيح بكل ثقة."'),
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
                    createVNode("p", { class: "testimonial-text" }, '"خبرة قانونية واضحة وحرص على مصلحة العميل، أنصح بالتعامل معهم لمن يبحث عن الثقة والمهنية."'),
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/Testimonials.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const LightTestimonials = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-4ed75415"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "cta-section" }, _attrs))}><div class="container"><div class="cta-container"><div class="cta-pattern"></div><div class="cta-content"><h2 class="cta-title">هل تحتاج إلى دعم قانوني؟</h2><p class="cta-subtitle">احصل على استشارة قانونية من فريقنا المتخصص، ودعنا نساعدك في اتخاذ القرار القانوني الصحيح.</p><a href="#" class="cta-btn">طلب استشارة قانونية</a></div></div></div></section>`);
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
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "pb-5" }, _attrs))}><div class="container"><footer class="footer-section"><div class="footer-content"><div class="footer-top mb-5"><div class="d-flex justify-content-start align-items-center mb-4"><img${ssrRenderAttr("src", _imports_0$6)} alt="Logo" class="footer-logo"></div></div><div class="row g-4 footer-links-row"><div class="col-lg-3 col-md-6"><h5 class="footer-heading mb-4">روابط سريعة</h5><ul class="list-unstyled footer-list"><li><a href="#" class="footer-link">الرئيسية</a></li><li><a href="#" class="footer-link">من نحن</a></li><li><a href="#" class="footer-link">الخدمات</a></li><li><a href="#" class="footer-link">فريق العمل</a></li><li><a href="#" class="footer-link">المدونة</a></li><li><a href="#" class="footer-link">وظائف</a></li></ul></div><div class="col-lg-3 col-md-6"><h5 class="footer-heading mb-4">خدماتنا</h5><ul class="list-unstyled footer-list"><li><a href="#" class="footer-link">الاستشارات القانونية</a></li><li><a href="#" class="footer-link">التقاضي والتمثيل أمام المحاكم</a></li><li><a href="#" class="footer-link">قضايا الشركات والقانون التجاري</a></li><li><a href="#" class="footer-link">صياغة ومراجعة العقود</a></li><li><a href="#" class="footer-link">القضايا المدنية والجنائية</a></li><li><a href="#" class="footer-link">التحكيم وتسوية النزاعات</a></li></ul></div><div class="col-lg-3 col-md-6"><h5 class="footer-heading mb-4">المدونة</h5><ul class="list-unstyled footer-list"><li><a href="#" class="footer-link">العقود والاتفاقيات</a></li><li><a href="#" class="footer-link">القانون التجاري والشركات</a></li><li><a href="#" class="footer-link">القضايا المدنية</a></li><li><a href="#" class="footer-link">القضايا الجنائية</a></li><li><a href="#" class="footer-link">التحكيم وتسوية النزاعات</a></li><li><a href="#" class="footer-link">أنظمة ولوائح سعودية</a></li><li><a href="#" class="footer-link">حوكمة وامتثال</a></li></ul></div><div class="col-lg-3 col-md-6"><h5 class="footer-heading mb-4">معلومات التواصل</h5><div class="contact-item mb-3"><span class="contact-label">الهاتف:</span><br><a href="tel:05XXXXXXXX" class="footer-link">05XXXXXXXX</a></div><div class="contact-item mb-3"><span class="contact-label">البريد الإلكتروني:</span><br><a href="mailto:info@lawfirm.sa" class="footer-link">info@lawfirm.sa</a></div><div class="contact-item"><span class="contact-label">العنوان:</span><br><span class="footer-text">المملكة العربية السعودية</span></div></div></div><div class="footer-bottom mt-5 pt-4 border-top border-secondary d-flex flex-md-row flex-column justify-content-between align-items-center"><p class="copyright mb-0">© جميع الحقوق محفوظة - مكتب محاماة</p><div class="social-links mb-3 mb-md-0"><a href="#" class="social-icon"><i data-lucide="instagram"></i></a><a href="#" class="social-icon"><i data-lucide="facebook"></i></a><a href="#" class="social-icon brand-icon-x"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a><a href="#" class="social-icon"><i data-lucide="linkedin"></i></a><a href="#" class="social-icon"><i data-lucide="youtube"></i></a></div></div></div></footer></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LightFooter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  LightWhyUs as L,
  _sfc_main$9 as _,
  _sfc_main$8 as a,
  LightServices as b,
  LightTeam as c,
  LightBlog as d,
  LightAccreditations as e,
  LightTestimonials as f,
  LightCTA as g,
  LightFooter as h
};
//# sourceMappingURL=Footer-C1QRxyh4.js.map
