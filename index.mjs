// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.13-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.0.8-esm/index.mjs";import{factory as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-weibull@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function a(f,c,g){var b,v,x,y,w;if(!o(f))throw new TypeError(u("0QB7P",f));if(!o(c))throw new TypeError(u("0QB7T",c));if(arguments.length>2){if(!d(g))throw new TypeError(u("0QB2h",g));if(b=i(g,1),l(b,"iter")){if(!m(b.iter))throw new TypeError(u("0QB35","iter",b.iter))}else b.iter=h;x=p(f,c,b),void 0===b.prng&&!1!==b.copy&&(b.state=x.state)}else x=p(f,c),b={iter:h,state:x.state};return w=0,e(v={},"next",P),e(v,"return",L),b&&b.prng?(e(v,"seed",null),e(v,"seedLength",null),s(v,"state",n(null),r),e(v,"stateLength",null),e(v,"byteLength",null)):(t(v,"seed",N),t(v,"seedLength",R),s(v,"state",E,Q),t(v,"stateLength",T),t(v,"byteLength",B)),e(v,"PRNG",x.PRNG),j&&e(v,j,G),v;function P(){return w+=1,y||w>b.iter?{done:!0}:{value:x(),done:!1}}function L(e){return y=!0,arguments.length?{value:e,done:!0}:{done:!0}}function G(){return a(f,c,b)}function N(){return x.PRNG.seed}function R(){return x.PRNG.seedLength}function T(){return x.PRNG.stateLength}function B(){return x.PRNG.byteLength}function E(){return x.PRNG.state}function Q(e){x.PRNG.state=e}}export{a as default};
//# sourceMappingURL=index.mjs.map
