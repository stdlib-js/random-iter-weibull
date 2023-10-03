// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.1.0-esm/index.mjs";import{factory as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-weibull@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function u(f,c,g){var v,b,x,y,w;if(!o(f))throw new TypeError(a("0qZ71,NQ",f));if(!o(c))throw new TypeError(a("0qZ72,Go",c));if(arguments.length>2){if(!d(g))throw new TypeError(a("0qZ2V,FD",g));if(v=i({},g),l(v,"iter")){if(!m(v.iter))throw new TypeError(a("0qZ2t,G9","iter",v.iter))}else v.iter=h;x=j(f,c,v),void 0===v.prng&&!1!==v.copy&&(v.state=x.state)}else x=j(f,c),v={iter:h,state:x.state};return w=0,e(b={},"next",G),e(b,"return",L),v&&v.prng?(e(b,"seed",null),e(b,"seedLength",null),s(b,"state",n(null),r),e(b,"stateLength",null),e(b,"byteLength",null)):(t(b,"seed",P),t(b,"seedLength",R),s(b,"state",T,Z),t(b,"stateLength",q),t(b,"byteLength",E)),e(b,"PRNG",x.PRNG),p&&e(b,p,N),b;function G(){return w+=1,y||w>v.iter?{done:!0}:{value:x(),done:!1}}function L(e){return y=!0,arguments.length?{value:e,done:!0}:{done:!0}}function N(){return u(f,c,v)}function P(){return x.PRNG.seed}function R(){return x.PRNG.seedLength}function q(){return x.PRNG.stateLength}function E(){return x.PRNG.byteLength}function T(){return x.PRNG.state}function Z(e){x.PRNG.state=e}}export{u as default};
//# sourceMappingURL=index.mjs.map
