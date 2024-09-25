(() => {
  "use strict";
  var e = {
      931: (e, t, n) => {
        e.exports = n.p + "c5c02c4e65c1c4423a97.wasm";
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.m = e),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.p = ""),
    (n.b = document.baseURI || self.location.href),
    (() => {
      const e =
        "undefined" != typeof AudioContext
          ? AudioContext
          : "undefined" != typeof webkitAudioContext
            ? webkitAudioContext
            : void 0;
      let t;
      const r = new Array(32).fill(void 0);
      function i(e) {
        return r[e];
      }
      r.push(void 0, null, !0, !1);
      let o = r.length;
      function a(e) {
        const t = i(e);
        return (
          (function (e) {
            e < 36 || ((r[e] = o), (o = e));
          })(e),
          t
        );
      }
      let s = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
      s.decode();
      let c = null;
      function u() {
        return (
          (null !== c && c.buffer === t.memory.buffer) ||
            (c = new Uint8Array(t.memory.buffer)),
          c
        );
      }
      function l(e, t) {
        return s.decode(u().subarray(e, e + t));
      }
      function _(e) {
        o === r.length && r.push(r.length + 1);
        const t = o;
        return (o = r[t]), (r[t] = e), t;
      }
      let f = 0,
        b = new TextEncoder("utf-8");
      const d =
        "function" == typeof b.encodeInto
          ? function (e, t) {
              return b.encodeInto(e, t);
            }
          : function (e, t) {
              const n = b.encode(e);
              return t.set(n), { read: e.length, written: n.length };
            };
      function g(e, t, n) {
        if (void 0 === n) {
          const n = b.encode(e),
            r = t(n.length);
          return (
            u()
              .subarray(r, r + n.length)
              .set(n),
            (f = n.length),
            r
          );
        }
        let r = e.length,
          i = t(r);
        const o = u();
        let a = 0;
        for (; a < r; a++) {
          const t = e.charCodeAt(a);
          if (t > 127) break;
          o[i + a] = t;
        }
        if (a !== r) {
          0 !== a && (e = e.slice(a)), (i = n(i, r, (r = a + 3 * e.length)));
          const t = u().subarray(i + a, i + r);
          a += d(e, t).written;
        }
        return (f = a), i;
      }
      let w = null;
      function h() {
        return (
          (null !== w && w.buffer === t.memory.buffer) ||
            (w = new Int32Array(t.memory.buffer)),
          w
        );
      }
      function m(e) {
        return null == e;
      }
      let p = null;
      function y(e) {
        const t = typeof e;
        if ("number" == t || "boolean" == t || null == e) return `${e}`;
        if ("string" == t) return `"${e}"`;
        if ("symbol" == t) {
          const t = e.description;
          return null == t ? "Symbol" : `Symbol(${t})`;
        }
        if ("function" == t) {
          const t = e.name;
          return "string" == typeof t && t.length > 0
            ? `Function(${t})`
            : "Function";
        }
        if (Array.isArray(e)) {
          const t = e.length;
          let n = "[";
          t > 0 && (n += y(e[0]));
          for (let r = 1; r < t; r++) n += ", " + y(e[r]);
          return (n += "]"), n;
        }
        const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
        let r;
        if (!(n.length > 1)) return toString.call(e);
        if (((r = n[1]), "Object" == r))
          try {
            return "Object(" + JSON.stringify(e) + ")";
          } catch (e) {
            return "Object";
          }
        return e instanceof Error ? `${e.name}: ${e.message}\n${e.stack}` : r;
      }
      function v(e, n, r, i) {
        const o = { a: e, b: n, cnt: 1, dtor: r },
          a = (...e) => {
            o.cnt++;
            const n = o.a;
            o.a = 0;
            try {
              return i(n, o.b, ...e);
            } finally {
              0 == --o.cnt
                ? t.__wbindgen_export_2.get(o.dtor)(n, o.b)
                : (o.a = n);
            }
          };
        return (a.original = o), a;
      }
      function x(e, n, r) {
        t._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h032da3a86d7b7284(
          e,
          n,
          _(r),
        );
      }
      function k(e, n) {
        t._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h3997552940d24653(
          e,
          n,
        );
      }
      function E(e, n, r) {
        t._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h032da3a86d7b7284(
          e,
          n,
          _(r),
        );
      }
      function A(e, n, r) {
        t._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h032da3a86d7b7284(
          e,
          n,
          _(r),
        );
      }
      function S(e, n, r) {
        t._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h032da3a86d7b7284(
          e,
          n,
          _(r),
        );
      }
      function C(e, n, r) {
        t._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h032da3a86d7b7284(
          e,
          n,
          _(r),
        );
      }
      function I(e, n, r) {
        t._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hbff278d7d235bc6d(
          e,
          n,
          r,
        );
      }
      function R(e, n, r) {
        t._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h032da3a86d7b7284(
          e,
          n,
          _(r),
        );
      }
      function F(e, n, r) {
        t._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hc0b78603ab34567f(
          e,
          n,
          _(r),
        );
      }
      let T = null;
      function P(e, n) {
        return ((null !== T && T.buffer === t.memory.buffer) ||
          (T = new Float32Array(t.memory.buffer)),
        T).subarray(e / 4, e / 4 + n);
      }
      function O(e, n) {
        try {
          return e.apply(this, n);
        } catch (e) {
          t.__wbindgen_exn_store(_(e));
        }
      }
      let M = 32;
      function L(e) {
        if (1 == M) throw new Error("out of js stack");
        return (r[--M] = e), M;
      }
      let j = null;
      function D(e, t) {
        return u().subarray(e / 1, e / 1 + t);
      }
      let N = null;
      function U(e, n) {
        return ((null !== N && N.buffer === t.memory.buffer) ||
          (N = new Uint8ClampedArray(t.memory.buffer)),
        N).subarray(e / 1, e / 1 + n);
      }
      class B {
        static __wrap(e) {
          const t = Object.create(B.prototype);
          return (t.ptr = e), t;
        }
        __destroy_into_raw() {
          const e = this.ptr;
          return (this.ptr = 0), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          t.__wbg_ruffle_free(e);
        }
        constructor(e, n, i) {
          try {
            return a(t.ruffle_new(_(e), _(n), L(i)));
          } finally {
            r[M++] = void 0;
          }
        }
        stream_from(e, n) {
          try {
            var i = g(e, t.__wbindgen_malloc, t.__wbindgen_realloc),
              o = f;
            t.ruffle_stream_from(this.ptr, i, o, L(n));
          } finally {
            r[M++] = void 0;
          }
        }
        load_data(e, n) {
          try {
            t.ruffle_load_data(this.ptr, _(e), L(n));
          } finally {
            r[M++] = void 0;
          }
        }
        play() {
          t.ruffle_play(this.ptr);
        }
        pause() {
          t.ruffle_pause(this.ptr);
        }
        is_playing() {
          return 0 !== t.ruffle_is_playing(this.ptr);
        }
        prepare_context_menu() {
          return a(t.ruffle_prepare_context_menu(this.ptr));
        }
        run_context_menu_callback(e) {
          t.ruffle_run_context_menu_callback(this.ptr, e);
        }
        set_fullscreen(e) {
          t.ruffle_set_fullscreen(this.ptr, e);
        }
        clear_custom_menu_items() {
          t.ruffle_clear_custom_menu_items(this.ptr);
        }
        destroy() {
          t.ruffle_destroy(this.ptr);
        }
        call_exposed_callback(e, n) {
          var r = g(e, t.__wbindgen_malloc, t.__wbindgen_realloc),
            i = f,
            o = (function (e, n) {
              const r = n(4 * e.length),
                i =
                  ((null !== j && j.buffer === t.memory.buffer) ||
                    (j = new Uint32Array(t.memory.buffer)),
                  j);
              for (let t = 0; t < e.length; t++) i[r / 4 + t] = _(e[t]);
              return (f = e.length), r;
            })(n, t.__wbindgen_malloc),
            s = f;
          return a(t.ruffle_call_exposed_callback(this.ptr, r, i, o, s));
        }
        set_trace_observer(e) {
          t.ruffle_set_trace_observer(this.ptr, _(e));
        }
        audio_context() {
          return a(t.ruffle_audio_context(this.ptr));
        }
      }
      const W = async function r(o) {
        void 0 === o && (o = new URL(n(931), n.b));
        const s = { wbg: {} };
        (s.wbg.__wbindgen_object_drop_ref = function (e) {
          a(e);
        }),
          (s.wbg.__wbindgen_cb_drop = function (e) {
            const t = a(e).original;
            return 1 == t.cnt-- && ((t.a = 0), !0);
          }),
          (s.wbg.__wbindgen_string_new = function (e, t) {
            return _(l(e, t));
          }),
          (s.wbg.__wbindgen_object_clone_ref = function (e) {
            return _(i(e));
          }),
          (s.wbg.__wbg_ruffle_new = function (e) {
            return _(B.__wrap(e));
          }),
          (s.wbg.__wbindgen_is_function = function (e) {
            return "function" == typeof i(e);
          }),
          (s.wbg.__wbindgen_json_parse = function (e, t) {
            return _(JSON.parse(l(e, t)));
          }),
          (s.wbg.__wbindgen_json_serialize = function (e, n) {
            const r = i(n);
            var o = g(
                JSON.stringify(void 0 === r ? null : r),
                t.__wbindgen_malloc,
                t.__wbindgen_realloc,
              ),
              a = f;
            (h()[e / 4 + 1] = a), (h()[e / 4 + 0] = o);
          }),
          (s.wbg.__wbg_new_df6e6ab7a65c4c4d = function (e, t) {
            return _(new Error(l(e, t)));
          }),
          (s.wbg.__wbg_panic_bbc809dd04a12c60 = function (e, t) {
            i(e).panic(i(t));
          }),
          (s.wbg.__wbg_copyToAudioBuffer_58f244be94bac1d2 = function (
            e,
            t,
            n,
            r,
            o,
          ) {
            var a, s, c;
            (a = i(e)),
              (s = 0 === t ? void 0 : P(t, n)),
              (c = 0 === r ? void 0 : P(r, o)),
              s && a.getChannelData(0).set(s),
              c && a.getChannelData(1).set(c);
          }),
          (s.wbg.__wbg_getAudioOutputTimestamp_a67aa6687740cd15 = function (e) {
            var t = (function (e) {
              var t, n;
              const r =
                null === (t = e.getOutputTimestamp) || void 0 === t
                  ? void 0
                  : t.call(e);
              return null !== (n = null == r ? void 0 : r.contextTime) &&
                void 0 !== n
                ? n
                : e.currentTime - e.baseLatency;
            })(i(e));
            return t;
          }),
          (s.wbg.__wbg_setFullscreen_9819a8b20564e39b = function () {
            return O(function (e, t) {
              i(e).setFullscreen(0 !== t);
            }, arguments);
          }),
          (s.wbg.__wbindgen_string_get = function (e, n) {
            const r = i(n);
            var o = "string" == typeof r ? r : void 0,
              a = m(o) ? 0 : g(o, t.__wbindgen_malloc, t.__wbindgen_realloc),
              s = f;
            (h()[e / 4 + 1] = s), (h()[e / 4 + 0] = a);
          }),
          (s.wbg.__wbg_displayUnsupportedMessage_a8f81a8e054e5e91 = function (
            e,
          ) {
            i(e).displayUnsupportedMessage();
          }),
          (s.wbg.__wbg_displayRootMovieDownloadFailedMessage_1a5c34096259685a =
            function (e) {
              i(e).displayRootMovieDownloadFailedMessage();
            }),
          (s.wbg.__wbg_displayMessage_c57c20204892da2b = function (e, t, n) {
            i(e).displayMessage(l(t, n));
          }),
          (s.wbg.__wbg_setMetadata_bbaeaee7f48274e6 = function (e, t) {
            i(e).setMetadata(a(t));
          }),
          (s.wbg.__wbg_onCallbackAvailable_3a48fae397926c96 = function (
            e,
            t,
            n,
          ) {
            i(e).onCallbackAvailable(l(t, n));
          }),
          (s.wbg.__wbg_onFSCommand_fb2f94653f71796e = function () {
            return O(function (e, t, n, r, o) {
              return i(e).onFSCommand(l(t, n), l(r, o));
            }, arguments);
          }),
          (s.wbg.__wbindgen_number_get = function (e, n) {
            const r = i(n);
            var o = "number" == typeof r ? r : void 0;
            (((null !== p && p.buffer === t.memory.buffer) ||
              (p = new Float64Array(t.memory.buffer)),
            p)[e / 8 + 1] = m(o) ? 0 : o),
              (h()[e / 4 + 0] = !m(o));
          }),
          (s.wbg.__wbindgen_boolean_get = function (e) {
            const t = i(e);
            return "boolean" == typeof t ? (t ? 1 : 0) : 2;
          }),
          (s.wbg.__wbindgen_number_new = function (e) {
            return _(e);
          }),
          (s.wbg.__wbg_new_693216e109162396 = function () {
            return _(new Error());
          }),
          (s.wbg.__wbg_stack_0ddaca5d1abfb52f = function (e, n) {
            var r = g(i(n).stack, t.__wbindgen_malloc, t.__wbindgen_realloc),
              o = f;
            (h()[e / 4 + 1] = o), (h()[e / 4 + 0] = r);
          }),
          (s.wbg.__wbg_error_09919627ac0992f5 = function (e, n) {
            try {
              console.error(l(e, n));
            } finally {
              t.__wbindgen_free(e, n);
            }
          }),
          (s.wbg.__wbindgen_is_undefined = function (e) {
            return void 0 === i(e);
          }),
          (s.wbg.__wbg_instanceof_WebGl2RenderingContext_56ad96bfac3f5531 =
            function (e) {
              return i(e) instanceof WebGL2RenderingContext;
            }),
          (s.wbg.__wbg_bindVertexArray_52b8b2f5fd93d81d = function (e, t) {
            i(e).bindVertexArray(i(t));
          }),
          (s.wbg.__wbg_blitFramebuffer_d6dafd082e3b1266 = function (
            e,
            t,
            n,
            r,
            o,
            a,
            s,
            c,
            u,
            l,
            _,
          ) {
            i(e).blitFramebuffer(t, n, r, o, a, s, c, u, l >>> 0, _ >>> 0);
          }),
          (s.wbg.__wbg_createVertexArray_d59135c0a43c410b = function (e) {
            var t = i(e).createVertexArray();
            return m(t) ? 0 : _(t);
          }),
          (s.wbg.__wbg_renderbufferStorageMultisample_41916a754c02df64 =
            function (e, t, n, r, o, a) {
              i(e).renderbufferStorageMultisample(t >>> 0, n, r >>> 0, o, a);
            }),
          (s.wbg.__wbg_texImage2D_29ea0a7f026e239b = function () {
            return O(function (e, t, n, r, o, a, s, c, u, l, _) {
              i(e).texImage2D(
                t >>> 0,
                n,
                r,
                o,
                a,
                s,
                c >>> 0,
                u >>> 0,
                0 === l ? void 0 : D(l, _),
              );
            }, arguments);
          }),
          (s.wbg.__wbg_bindFramebuffer_48c4bf8ff82bf7e9 = function (e, t, n) {
            i(e).bindFramebuffer(t >>> 0, i(n));
          }),
          (s.wbg.__wbg_bindRenderbuffer_4a9ad1cf80580397 = function (e, t, n) {
            i(e).bindRenderbuffer(t >>> 0, i(n));
          }),
          (s.wbg.__wbg_bindTexture_9d8ed0fcd83eb0a9 = function (e, t, n) {
            i(e).bindTexture(t >>> 0, i(n));
          }),
          (s.wbg.__wbg_createFramebuffer_9818fc04b4a38c18 = function (e) {
            var t = i(e).createFramebuffer();
            return m(t) ? 0 : _(t);
          }),
          (s.wbg.__wbg_createRenderbuffer_d1a55ec78e26295b = function (e) {
            var t = i(e).createRenderbuffer();
            return m(t) ? 0 : _(t);
          }),
          (s.wbg.__wbg_createTexture_8f31e7386e22fc37 = function (e) {
            var t = i(e).createTexture();
            return m(t) ? 0 : _(t);
          }),
          (s.wbg.__wbg_deleteFramebuffer_5f58ccb548438c57 = function (e, t) {
            i(e).deleteFramebuffer(i(t));
          }),
          (s.wbg.__wbg_deleteRenderbuffer_6372146d4689793e = function (e, t) {
            i(e).deleteRenderbuffer(i(t));
          }),
          (s.wbg.__wbg_deleteTexture_a0632c71429795ac = function (e, t) {
            i(e).deleteTexture(i(t));
          }),
          (s.wbg.__wbg_framebufferRenderbuffer_9d619e8bf8f2aeb6 = function (
            e,
            t,
            n,
            r,
            o,
          ) {
            i(e).framebufferRenderbuffer(t >>> 0, n >>> 0, r >>> 0, i(o));
          }),
          (s.wbg.__wbg_framebufferTexture2D_3da41a7f38e2c523 = function (
            e,
            t,
            n,
            r,
            o,
            a,
          ) {
            i(e).framebufferTexture2D(t >>> 0, n >>> 0, r >>> 0, i(o), a);
          }),
          (s.wbg.__wbg_getError_868f7c8ef6475b32 = function (e) {
            return i(e).getError();
          }),
          (s.wbg.__wbg_getParameter_e3aea13dd0a2904d = function () {
            return O(function (e, t) {
              return _(i(e).getParameter(t >>> 0));
            }, arguments);
          }),
          (s.wbg.__wbg_texParameteri_c54aab65b2f8cf6d = function (e, t, n, r) {
            i(e).texParameteri(t >>> 0, n >>> 0, r);
          }),
          (s.wbg.__wbg_instanceof_Window_c4b70662a0d2c5ec = function (e) {
            return i(e) instanceof Window;
          }),
          (s.wbg.__wbg_document_1c64944725c0d81d = function (e) {
            var t = i(e).document;
            return m(t) ? 0 : _(t);
          }),
          (s.wbg.__wbg_location_f98ad02632f88c43 = function (e) {
            return _(i(e).location);
          }),
          (s.wbg.__wbg_navigator_480e592af6ad365b = function (e) {
            return _(i(e).navigator);
          }),
          (s.wbg.__wbg_devicePixelRatio_d8c3852bb37f76bf = function (e) {
            return i(e).devicePixelRatio;
          }),
          (s.wbg.__wbg_performance_947628766699c5bb = function (e) {
            var t = i(e).performance;
            return m(t) ? 0 : _(t);
          }),
          (s.wbg.__wbg_localStorage_6775414303ab5085 = function () {
            return O(function (e) {
              var t = i(e).localStorage;
              return m(t) ? 0 : _(t);
            }, arguments);
          }),
          (s.wbg.__wbg_cancelAnimationFrame_5f2a1e987a6de100 = function () {
            return O(function (e, t) {
              i(e).cancelAnimationFrame(t);
            }, arguments);
          }),
          (s.wbg.__wbg_focus_70ecc8fcab4bdb61 = function () {
            return O(function (e) {
              i(e).focus();
            }, arguments);
          }),
          (s.wbg.__wbg_open_5416e4448a959cfa = function () {
            return O(function (e, t, n, r, o) {
              var a = i(e).open(l(t, n), l(r, o));
              return m(a) ? 0 : _(a);
            }, arguments);
          }),
          (s.wbg.__wbg_requestAnimationFrame_71638ca922068239 = function () {
            return O(function (e, t) {
              return i(e).requestAnimationFrame(i(t));
            }, arguments);
          }),
          (s.wbg.__wbg_fetch_cfe0d1dd786e9cd4 = function (e, t) {
            return _(i(e).fetch(i(t)));
          }),
          (s.wbg.__wbg_destination_6c3ac66ee8b2fe85 = function (e) {
            return _(i(e).destination);
          }),
          (s.wbg.__wbg_sampleRate_ffa6f08191b00934 = function (e) {
            return i(e).sampleRate;
          }),
          (s.wbg.__wbg_currentTime_e231c76a3c011126 = function (e) {
            return i(e).currentTime;
          }),
          (s.wbg.__wbg_new_52bbbd81ffc19dff = function () {
            return O(function () {
              return _(new e());
            }, arguments);
          }),
          (s.wbg.__wbg_suspend_5b2c4674b28d07f2 = function () {
            return O(function (e) {
              return _(i(e).suspend());
            }, arguments);
          }),
          (s.wbg.__wbg_createBuffer_79833a4052d7b42a = function () {
            return O(function (e, t, n, r) {
              return _(i(e).createBuffer(t >>> 0, n >>> 0, r));
            }, arguments);
          }),
          (s.wbg.__wbg_createBufferSource_7244d810d62a0bed = function () {
            return O(function (e) {
              return _(i(e).createBufferSource());
            }, arguments);
          }),
          (s.wbg.__wbg_createChannelMerger_542d0885aa4bdc09 = function () {
            return O(function (e, t) {
              return _(i(e).createChannelMerger(t >>> 0));
            }, arguments);
          }),
          (s.wbg.__wbg_createChannelSplitter_95302cbc3f9b9f85 = function () {
            return O(function (e, t) {
              return _(i(e).createChannelSplitter(t >>> 0));
            }, arguments);
          }),
          (s.wbg.__wbg_createGain_c5f114390c363029 = function () {
            return O(function (e) {
              return _(i(e).createGain());
            }, arguments);
          }),
          (s.wbg.__wbg_createScriptProcessor_ec30f8ab6ea543d1 = function () {
            return O(function (e, t, n, r) {
              return _(i(e).createScriptProcessor(t >>> 0, n >>> 0, r >>> 0));
            }, arguments);
          }),
          (s.wbg.__wbg_decodeAudioData_66b886741a4167f4 = function () {
            return O(function (e, t, n, r) {
              return _(i(e).decodeAudioData(i(t), i(n), i(r)));
            }, arguments);
          }),
          (s.wbg.__wbg_resume_ca50287e91c0323e = function () {
            return O(function (e) {
              return _(i(e).resume());
            }, arguments);
          }),
          (s.wbg.__wbg_setvalue_df8236adf40ea2d3 = function (e, t) {
            i(e).value = t;
          }),
          (s.wbg.__wbg_linearRampToValueAtTime_113d2920c90f1851 = function () {
            return O(function (e, t, n) {
              return _(i(e).linearRampToValueAtTime(t, n));
            }, arguments);
          }),
          (s.wbg.__wbg_setValueAtTime_9396570ff0d3cc1f = function () {
            return O(function (e, t, n) {
              return _(i(e).setValueAtTime(t, n));
            }, arguments);
          }),
          (s.wbg.__wbg_gain_d4eaca6128dcfd90 = function (e) {
            return _(i(e).gain);
          }),
          (s.wbg.__wbg_baseURI_083fd53f8bea9af2 = function () {
            return O(function (e, n) {
              var r = i(n).baseURI,
                o = m(r) ? 0 : g(r, t.__wbindgen_malloc, t.__wbindgen_realloc),
                a = f;
              (h()[e / 4 + 1] = a), (h()[e / 4 + 0] = o);
            }, arguments);
          }),
          (s.wbg.__wbg_appendChild_d318db34c4559916 = function () {
            return O(function (e, t) {
              return _(i(e).appendChild(i(t)));
            }, arguments);
          }),
          (s.wbg.__wbg_instanceof_SvgsvgElement_631275f115d8f8e3 = function (
            e,
          ) {
            return i(e) instanceof SVGSVGElement;
          }),
          (s.wbg.__wbg_createSVGMatrix_037d6368ea06b02d = function (e) {
            return _(i(e).createSVGMatrix());
          }),
          (s.wbg.__wbg_protocol_f17adabd4e662b06 = function () {
            return O(function (e, n) {
              var r = g(
                  i(n).protocol,
                  t.__wbindgen_malloc,
                  t.__wbindgen_realloc,
                ),
                o = f;
              (h()[e / 4 + 1] = o), (h()[e / 4 + 0] = r);
            }, arguments);
          }),
          (s.wbg.__wbg_assign_26269af9ce90e6c7 = function () {
            return O(function (e, t, n) {
              i(e).assign(l(t, n));
            }, arguments);
          }),
          (s.wbg.__wbg_new_a3422e0170c31454 = function () {
            return O(function () {
              return _(new Path2D());
            }, arguments);
          }),
          (s.wbg.__wbg_addPath_18881cd56483fe63 = function (e, t, n) {
            i(e).addPath(i(t), i(n));
          }),
          (s.wbg.__wbg_closePath_bf39ada268053aea = function (e) {
            i(e).closePath();
          }),
          (s.wbg.__wbg_lineTo_4d75fbab7308c3d2 = function (e, t, n) {
            i(e).lineTo(t, n);
          }),
          (s.wbg.__wbg_moveTo_70f7a4760893f917 = function (e, t, n) {
            i(e).moveTo(t, n);
          }),
          (s.wbg.__wbg_quadraticCurveTo_7724e01d766ebfe2 = function (
            e,
            t,
            n,
            r,
            o,
          ) {
            i(e).quadraticCurveTo(t, n, r, o);
          }),
          (s.wbg.__wbg_get_f0092ad67dc97639 = function () {
            return O(function (e, n, r, o) {
              var a = i(n)[l(r, o)],
                s = m(a) ? 0 : g(a, t.__wbindgen_malloc, t.__wbindgen_realloc),
                c = f;
              (h()[e / 4 + 1] = c), (h()[e / 4 + 0] = s);
            }, arguments);
          }),
          (s.wbg.__wbg_set_3a236a97145dc780 = function () {
            return O(function (e, t, n, r, o) {
              i(e)[l(t, n)] = l(r, o);
            }, arguments);
          }),
          (s.wbg.__wbg_delete_881ab2d2a830b82f = function () {
            return O(function (e, t, n) {
              delete i(e)[l(t, n)];
            }, arguments);
          }),
          (s.wbg.__wbg_length_b398b347bd3c9cd5 = function (e) {
            return i(e).length;
          }),
          (s.wbg.__wbg_setTransform_3f9fc1784a580fff = function (e, t) {
            i(e).setTransform(i(t));
          }),
          (s.wbg.__wbg_setProperty_1460c660bc329763 = function () {
            return O(function (e, t, n, r, o) {
              i(e).setProperty(l(t, n), l(r, o));
            }, arguments);
          }),
          (s.wbg.__wbg_offsetX_5da3ebf8a8cda8a4 = function (e) {
            return i(e).offsetX;
          }),
          (s.wbg.__wbg_offsetY_b0edbc16723a55cb = function (e) {
            return i(e).offsetY;
          }),
          (s.wbg.__wbg_button_a02c0467d38e8338 = function (e) {
            return i(e).button;
          }),
          (s.wbg.__wbg_bindVertexArrayOES_7104c80fb0d31cb0 = function (e, t) {
            i(e).bindVertexArrayOES(i(t));
          }),
          (s.wbg.__wbg_createVertexArrayOES_ced4f8a084b789b7 = function (e) {
            var t = i(e).createVertexArrayOES();
            return m(t) ? 0 : _(t);
          }),
          (s.wbg.__wbg_deltaY_080604c20160c0e8 = function (e) {
            return i(e).deltaY;
          }),
          (s.wbg.__wbg_deltaMode_c5ec1ee518ea0a08 = function (e) {
            return i(e).deltaMode;
          }),
          (s.wbg.__wbg_connect_723cc4823fe3e6c0 = function () {
            return O(function (e, t) {
              return _(i(e).connect(i(t)));
            }, arguments);
          }),
          (s.wbg.__wbg_connect_cb8dcaafd6d14fe4 = function () {
            return O(function (e, t, n) {
              return _(i(e).connect(i(t), n >>> 0));
            }, arguments);
          }),
          (s.wbg.__wbg_connect_eb8fcb61cab88f0b = function () {
            return O(function (e, t, n, r) {
              return _(i(e).connect(i(t), n >>> 0, r >>> 0));
            }, arguments);
          }),
          (s.wbg.__wbg_disconnect_661941cf5b88fa5a = function () {
            return O(function (e) {
              i(e).disconnect();
            }, arguments);
          }),
          (s.wbg.__wbg_instanceof_HtmlFormElement_aeafa27e92962efa = function (
            e,
          ) {
            return i(e) instanceof HTMLFormElement;
          }),
          (s.wbg.__wbg_submit_7479ea6e99f76174 = function () {
            return O(function (e) {
              i(e).submit();
            }, arguments);
          }),
          (s.wbg.__wbg_instanceof_Response_e1b11afbefa5b563 = function (e) {
            return i(e) instanceof Response;
          }),
          (s.wbg.__wbg_ok_270f6d403efe7e7b = function (e) {
            return i(e).ok;
          }),
          (s.wbg.__wbg_statusText_97740db9b8bb12e3 = function (e, n) {
            var r = g(
                i(n).statusText,
                t.__wbindgen_malloc,
                t.__wbindgen_realloc,
              ),
              o = f;
            (h()[e / 4 + 1] = o), (h()[e / 4 + 0] = r);
          }),
          (s.wbg.__wbg_arrayBuffer_b8937ed04beb0d36 = function () {
            return O(function (e) {
              return _(i(e).arrayBuffer());
            }, arguments);
          }),
          (s.wbg.__wbg_seta_f5667df13832f473 = function (e, t) {
            i(e).a = t;
          }),
          (s.wbg.__wbg_setb_51b68c87004ceb92 = function (e, t) {
            i(e).b = t;
          }),
          (s.wbg.__wbg_setc_62d7a8abc0082fcc = function (e, t) {
            i(e).c = t;
          }),
          (s.wbg.__wbg_setd_544fd4902db40bca = function (e, t) {
            i(e).d = t;
          }),
          (s.wbg.__wbg_sete_a3575dd88c8f17a3 = function (e, t) {
            i(e).e = t;
          }),
          (s.wbg.__wbg_setf_956eaea5b3047302 = function (e, t) {
            i(e).f = t;
          }),
          (s.wbg.__wbg_setbuffer_c643a88bac27b2bd = function (e, t) {
            i(e).buffer = i(t);
          }),
          (s.wbg.__wbg_setloop_32c84ea32fabef74 = function (e, t) {
            i(e).loop = 0 !== t;
          }),
          (s.wbg.__wbg_setloopStart_a113b4d478da7f93 = function (e, t) {
            i(e).loopStart = t;
          }),
          (s.wbg.__wbg_setloopEnd_b83c2563fe5be665 = function (e, t) {
            i(e).loopEnd = t;
          }),
          (s.wbg.__wbg_setonended_6ce8715add45953e = function (e, t) {
            i(e).onended = i(t);
          }),
          (s.wbg.__wbg_start_551bedf1ecfdc0e2 = function () {
            return O(function (e) {
              i(e).start();
            }, arguments);
          }),
          (s.wbg.__wbg_start_885262ec460f3ef3 = function () {
            return O(function (e, t, n) {
              i(e).start(t, n);
            }, arguments);
          }),
          (s.wbg.__wbg_stop_c6532de1aeb2e765 = function () {
            return O(function (e, t) {
              i(e).stop(t);
            }, arguments);
          }),
          (s.wbg.__wbg_outputBuffer_3f27dc3af0998ec9 = function () {
            return O(function (e) {
              return _(i(e).outputBuffer);
            }, arguments);
          }),
          (s.wbg.__wbg_now_559193109055ebad = function (e) {
            return i(e).now();
          }),
          (s.wbg.__wbg_pointerId_9302f0e125f0b48e = function (e) {
            return i(e).pointerId;
          }),
          (s.wbg.__wbg_currentTarget_65309531208d5df3 = function (e) {
            var t = i(e).currentTarget;
            return m(t) ? 0 : _(t);
          }),
          (s.wbg.__wbg_preventDefault_9866c9fd51eecfb6 = function (e) {
            i(e).preventDefault();
          }),
          (s.wbg.__wbg_setsrc_3eb04f553f8335c7 = function (e, t, n) {
            i(e).src = l(t, n);
          }),
          (s.wbg.__wbg_new_265b3e027a3022bd = function () {
            return O(function () {
              return _(new Image());
            }, arguments);
          }),
          (s.wbg.__wbg_key_10dcaa4bb6d5449f = function (e, n) {
            var r = g(i(n).key, t.__wbindgen_malloc, t.__wbindgen_realloc),
              o = f;
            (h()[e / 4 + 1] = o), (h()[e / 4 + 0] = r);
          }),
          (s.wbg.__wbg_code_1c2fd251f38b398a = function (e, n) {
            var r = g(i(n).code, t.__wbindgen_malloc, t.__wbindgen_realloc),
              o = f;
            (h()[e / 4 + 1] = o), (h()[e / 4 + 0] = r);
          }),
          (s.wbg.__wbg_newwithstrandinit_9b0fa00478c37287 = function () {
            return O(function (e, t, n) {
              return _(new Request(l(e, t), i(n)));
            }, arguments);
          }),
          (s.wbg.__wbg_setonaudioprocess_4334efc34353560d = function (e, t) {
            i(e).onaudioprocess = i(t);
          }),
          (s.wbg.__wbg_body_78ae4fd43b446013 = function (e) {
            var t = i(e).body;
            return m(t) ? 0 : _(t);
          }),
          (s.wbg.__wbg_createElement_86c152812a141a62 = function () {
            return O(function (e, t, n) {
              return _(i(e).createElement(l(t, n)));
            }, arguments);
          }),
          (s.wbg.__wbg_createElementNS_ae12b8681c3957a3 = function () {
            return O(function (e, t, n, r, o) {
              return _(
                i(e).createElementNS(0 === t ? void 0 : l(t, n), l(r, o)),
              );
            }, arguments);
          }),
          (s.wbg.__wbg_setid_681bb5a14c3d5850 = function (e, t, n) {
            i(e).id = l(t, n);
          }),
          (s.wbg.__wbg_clientWidth_4d9e01af2b5b9f21 = function (e) {
            return i(e).clientWidth;
          }),
          (s.wbg.__wbg_clientHeight_87c209f0cacf2e97 = function (e) {
            return i(e).clientHeight;
          }),
          (s.wbg.__wbg_querySelector_dc71838110c91f39 = function () {
            return O(function (e, t, n) {
              var r = i(e).querySelector(l(t, n));
              return m(r) ? 0 : _(r);
            }, arguments);
          }),
          (s.wbg.__wbg_releasePointerCapture_326599f769b49681 = function () {
            return O(function (e, t) {
              i(e).releasePointerCapture(t);
            }, arguments);
          }),
          (s.wbg.__wbg_setAttribute_1b533bf07966de55 = function () {
            return O(function (e, t, n, r, o) {
              i(e).setAttribute(l(t, n), l(r, o));
            }, arguments);
          }),
          (s.wbg.__wbg_setAttributeNS_92db6decf2ec8400 = function () {
            return O(function (e, t, n, r, o, a, s) {
              i(e).setAttributeNS(0 === t ? void 0 : l(t, n), l(r, o), l(a, s));
            }, arguments);
          }),
          (s.wbg.__wbg_setPointerCapture_bd3244d9f008798f = function () {
            return O(function (e, t) {
              i(e).setPointerCapture(t);
            }, arguments);
          }),
          (s.wbg.__wbg_remove_c63cabc94a77cacb = function (e) {
            i(e).remove();
          }),
          (s.wbg.__wbg_instanceof_WebGlRenderingContext_101b938bec1286a3 =
            function (e) {
              return i(e) instanceof WebGLRenderingContext;
            }),
          (s.wbg.__wbg_drawingBufferWidth_8b0c2b31d9d6eee7 = function (e) {
            return i(e).drawingBufferWidth;
          }),
          (s.wbg.__wbg_drawingBufferHeight_f62678018bab567c = function (e) {
            return i(e).drawingBufferHeight;
          }),
          (s.wbg.__wbg_bufferData_2f9be23b37e5a1a4 = function (e, t, n, r, o) {
            i(e).bufferData(t >>> 0, D(n, r), o >>> 0);
          }),
          (s.wbg.__wbg_texImage2D_712c56fe5a9825ed = function () {
            return O(function (e, t, n, r, o, a, s, c, u, l, _) {
              i(e).texImage2D(
                t >>> 0,
                n,
                r,
                o,
                a,
                s,
                c >>> 0,
                u >>> 0,
                0 === l ? void 0 : D(l, _),
              );
            }, arguments);
          }),
          (s.wbg.__wbg_uniform1fv_02b26dddaa3ea984 = function (e, t, n, r) {
            i(e).uniform1fv(i(t), P(n, r));
          }),
          (s.wbg.__wbg_uniform4fv_ca394beb323215c6 = function (e, t, n, r) {
            i(e).uniform4fv(i(t), P(n, r));
          }),
          (s.wbg.__wbg_uniformMatrix3fv_340429fe0911bc6f = function (
            e,
            t,
            n,
            r,
            o,
          ) {
            i(e).uniformMatrix3fv(i(t), 0 !== n, P(r, o));
          }),
          (s.wbg.__wbg_uniformMatrix4fv_a92133b68236ac68 = function (
            e,
            t,
            n,
            r,
            o,
          ) {
            i(e).uniformMatrix4fv(i(t), 0 !== n, P(r, o));
          }),
          (s.wbg.__wbg_activeTexture_b34aca0c2110966c = function (e, t) {
            i(e).activeTexture(t >>> 0);
          }),
          (s.wbg.__wbg_attachShader_eaa824fd5b37a770 = function (e, t, n) {
            i(e).attachShader(i(t), i(n));
          }),
          (s.wbg.__wbg_bindBuffer_2ca7e1c18819ecb2 = function (e, t, n) {
            i(e).bindBuffer(t >>> 0, i(n));
          }),
          (s.wbg.__wbg_bindFramebuffer_c9f468afa9d42a5f = function (e, t, n) {
            i(e).bindFramebuffer(t >>> 0, i(n));
          }),
          (s.wbg.__wbg_bindRenderbuffer_7b2b49f71f3eeef9 = function (e, t, n) {
            i(e).bindRenderbuffer(t >>> 0, i(n));
          }),
          (s.wbg.__wbg_bindTexture_edd827f3dba6038e = function (e, t, n) {
            i(e).bindTexture(t >>> 0, i(n));
          }),
          (s.wbg.__wbg_blendFunc_d5ab9f0ff5a40a48 = function (e, t, n) {
            i(e).blendFunc(t >>> 0, n >>> 0);
          }),
          (s.wbg.__wbg_clear_da26620d46f0a11a = function (e, t) {
            i(e).clear(t >>> 0);
          }),
          (s.wbg.__wbg_clearColor_cbf22f8faa5a52c1 = function (e, t, n, r, o) {
            i(e).clearColor(t, n, r, o);
          }),
          (s.wbg.__wbg_colorMask_035708eb94fe9af8 = function (e, t, n, r, o) {
            i(e).colorMask(0 !== t, 0 !== n, 0 !== r, 0 !== o);
          }),
          (s.wbg.__wbg_compileShader_8fb70a472f32552c = function (e, t) {
            i(e).compileShader(i(t));
          }),
          (s.wbg.__wbg_createBuffer_4802e2f0e1b1acdf = function (e) {
            var t = i(e).createBuffer();
            return m(t) ? 0 : _(t);
          }),
          (s.wbg.__wbg_createProgram_b1d94f4c7554d3a1 = function (e) {
            var t = i(e).createProgram();
            return m(t) ? 0 : _(t);
          }),
          (s.wbg.__wbg_createShader_da09e167692f0dc7 = function (e, t) {
            var n = i(e).createShader(t >>> 0);
            return m(n) ? 0 : _(n);
          }),
          (s.wbg.__wbg_createTexture_bafc7c08393ae59d = function (e) {
            var t = i(e).createTexture();
            return m(t) ? 0 : _(t);
          }),
          (s.wbg.__wbg_disable_b07faddb7d04349f = function (e, t) {
            i(e).disable(t >>> 0);
          }),
          (s.wbg.__wbg_disableVertexAttribArray_c9fdabd5f12b0539 = function (
            e,
            t,
          ) {
            i(e).disableVertexAttribArray(t >>> 0);
          }),
          (s.wbg.__wbg_drawElements_8e8af4b6757fedce = function (
            e,
            t,
            n,
            r,
            o,
          ) {
            i(e).drawElements(t >>> 0, n, r >>> 0, o);
          }),
          (s.wbg.__wbg_enable_d3d210aeb08eff52 = function (e, t) {
            i(e).enable(t >>> 0);
          }),
          (s.wbg.__wbg_enableVertexAttribArray_d539e547495bea44 = function (
            e,
            t,
          ) {
            i(e).enableVertexAttribArray(t >>> 0);
          }),
          (s.wbg.__wbg_getAttribLocation_706a0beabcdaebcf = function (
            e,
            t,
            n,
            r,
          ) {
            return i(e).getAttribLocation(i(t), l(n, r));
          }),
          (s.wbg.__wbg_getExtension_045789240c50a108 = function () {
            return O(function (e, t, n) {
              var r = i(e).getExtension(l(t, n));
              return m(r) ? 0 : _(r);
            }, arguments);
          }),
          (s.wbg.__wbg_getParameter_6412bd2d0602696d = function () {
            return O(function (e, t) {
              return _(i(e).getParameter(t >>> 0));
            }, arguments);
          }),
          (s.wbg.__wbg_getProgramInfoLog_b60e82d52c200cbd = function (e, n, r) {
            var o = i(n).getProgramInfoLog(i(r)),
              a = m(o) ? 0 : g(o, t.__wbindgen_malloc, t.__wbindgen_realloc),
              s = f;
            (h()[e / 4 + 1] = s), (h()[e / 4 + 0] = a);
          }),
          (s.wbg.__wbg_getProgramParameter_229c193895936bbe = function (
            e,
            t,
            n,
          ) {
            return _(i(e).getProgramParameter(i(t), n >>> 0));
          }),
          (s.wbg.__wbg_getShaderInfoLog_ba51160c01b98360 = function (e, n, r) {
            var o = i(n).getShaderInfoLog(i(r)),
              a = m(o) ? 0 : g(o, t.__wbindgen_malloc, t.__wbindgen_realloc),
              s = f;
            (h()[e / 4 + 1] = s), (h()[e / 4 + 0] = a);
          }),
          (s.wbg.__wbg_getUniformLocation_c3b3570b4632cc5c = function (
            e,
            t,
            n,
            r,
          ) {
            var o = i(e).getUniformLocation(i(t), l(n, r));
            return m(o) ? 0 : _(o);
          }),
          (s.wbg.__wbg_linkProgram_7080c84b0233cea2 = function (e, t) {
            i(e).linkProgram(i(t));
          }),
          (s.wbg.__wbg_pixelStorei_3cd96723ae22a5c6 = function (e, t, n) {
            i(e).pixelStorei(t >>> 0, n);
          }),
          (s.wbg.__wbg_shaderSource_67b991301db003d0 = function (e, t, n, r) {
            i(e).shaderSource(i(t), l(n, r));
          }),
          (s.wbg.__wbg_stencilFunc_bbc24750c2db9a15 = function (e, t, n, r) {
            i(e).stencilFunc(t >>> 0, n, r >>> 0);
          }),
          (s.wbg.__wbg_stencilMask_0ec7662710f598d4 = function (e, t) {
            i(e).stencilMask(t >>> 0);
          }),
          (s.wbg.__wbg_stencilOp_fd4ec71a7de6ac85 = function (e, t, n, r) {
            i(e).stencilOp(t >>> 0, n >>> 0, r >>> 0);
          }),
          (s.wbg.__wbg_texParameteri_bd724f6a5ad0cbbc = function (e, t, n, r) {
            i(e).texParameteri(t >>> 0, n >>> 0, r);
          }),
          (s.wbg.__wbg_uniform1f_b9cff1cea32def5a = function (e, t, n) {
            i(e).uniform1f(i(t), n);
          }),
          (s.wbg.__wbg_uniform1i_0811c29c0eebe191 = function (e, t, n) {
            i(e).uniform1i(i(t), n);
          }),
          (s.wbg.__wbg_useProgram_b72b0bfcbc720fa9 = function (e, t) {
            i(e).useProgram(i(t));
          }),
          (s.wbg.__wbg_vertexAttribPointer_b5cb524c6fe9eec8 = function (
            e,
            t,
            n,
            r,
            o,
            a,
            s,
          ) {
            i(e).vertexAttribPointer(t >>> 0, n, r >>> 0, 0 !== o, a, s);
          }),
          (s.wbg.__wbg_viewport_89af3aceb7036a2c = function (e, t, n, r, o) {
            i(e).viewport(t, n, r, o);
          }),
          (s.wbg.__wbg_debug_675b0ecb65722d2a = function (e) {
            console.debug(i(e));
          }),
          (s.wbg.__wbg_error_cc38ce2b4b661e1d = function (e) {
            console.error(i(e));
          }),
          (s.wbg.__wbg_info_e0c9813e6fd3bdc1 = function (e) {
            console.info(i(e));
          }),
          (s.wbg.__wbg_log_3445347661d4505e = function (e) {
            console.log(i(e));
          }),
          (s.wbg.__wbg_warn_5ec7c7c02d0b3841 = function (e) {
            console.warn(i(e));
          }),
          (s.wbg.__wbg_style_c88e323890d3a091 = function (e) {
            return _(i(e).style);
          }),
          (s.wbg.__wbg_instanceof_CanvasRenderingContext2d_3abbe7ec7af32cae =
            function (e) {
              return i(e) instanceof CanvasRenderingContext2D;
            }),
          (s.wbg.__wbg_setglobalAlpha_27b14e5f5b7567ec = function (e, t) {
            i(e).globalAlpha = t;
          }),
          (s.wbg.__wbg_setglobalCompositeOperation_c650e9805cc6316f =
            function () {
              return O(function (e, t, n) {
                i(e).globalCompositeOperation = l(t, n);
              }, arguments);
            }),
          (s.wbg.__wbg_setstrokeStyle_947bd4c26c94673f = function (e, t) {
            i(e).strokeStyle = i(t);
          }),
          (s.wbg.__wbg_setfillStyle_528a6a267c863ae7 = function (e, t) {
            i(e).fillStyle = i(t);
          }),
          (s.wbg.__wbg_setfilter_3d48443a4a710be8 = function (e, t, n) {
            i(e).filter = l(t, n);
          }),
          (s.wbg.__wbg_setimageSmoothingEnabled_92d14a22667eae22 = function (
            e,
            t,
          ) {
            i(e).imageSmoothingEnabled = 0 !== t;
          }),
          (s.wbg.__wbg_setlineWidth_3221b7818c00ed48 = function (e, t) {
            i(e).lineWidth = t;
          }),
          (s.wbg.__wbg_setlineCap_5284a001e1efcecd = function (e, t, n) {
            i(e).lineCap = l(t, n);
          }),
          (s.wbg.__wbg_setlineJoin_a6af4e7d24a3a67e = function (e, t, n) {
            i(e).lineJoin = l(t, n);
          }),
          (s.wbg.__wbg_setmiterLimit_9fa0d72650341727 = function (e, t) {
            i(e).miterLimit = t;
          }),
          (s.wbg.__wbg_drawImage_5e8203c5b210fce3 = function () {
            return O(function (e, t, n, r) {
              i(e).drawImage(i(t), n, r);
            }, arguments);
          }),
          (s.wbg.__wbg_drawImage_9492b361f8b31282 = function () {
            return O(function (e, t, n, r) {
              i(e).drawImage(i(t), n, r);
            }, arguments);
          }),
          (s.wbg.__wbg_fill_75988ff43d6e3499 = function (e, t, n) {
            i(e).fill(i(t), a(n));
          }),
          (s.wbg.__wbg_stroke_d91ac76d5b1eb792 = function (e, t) {
            i(e).stroke(i(t));
          }),
          (s.wbg.__wbg_createPattern_1d0b3c3750c8448c = function () {
            return O(function (e, t, n, r) {
              var o = i(e).createPattern(i(t), l(n, r));
              return m(o) ? 0 : _(o);
            }, arguments);
          }),
          (s.wbg.__wbg_createPattern_b824d17776fa1f1e = function () {
            return O(function (e, t, n, r) {
              var o = i(e).createPattern(i(t), l(n, r));
              return m(o) ? 0 : _(o);
            }, arguments);
          }),
          (s.wbg.__wbg_getImageData_9ffc3df78ca3dbc9 = function () {
            return O(function (e, t, n, r, o) {
              return _(i(e).getImageData(t, n, r, o));
            }, arguments);
          }),
          (s.wbg.__wbg_putImageData_b9544b271e569392 = function () {
            return O(function (e, t, n, r) {
              i(e).putImageData(i(t), n, r);
            }, arguments);
          }),
          (s.wbg.__wbg_clearRect_07caefec3496ced1 = function (e, t, n, r, o) {
            i(e).clearRect(t, n, r, o);
          }),
          (s.wbg.__wbg_fillRect_10e42dc7a5e8cccd = function (e, t, n, r, o) {
            i(e).fillRect(t, n, r, o);
          }),
          (s.wbg.__wbg_resetTransform_26f86c1cc48a4fae = function () {
            return O(function (e) {
              i(e).resetTransform();
            }, arguments);
          }),
          (s.wbg.__wbg_setTransform_8ffd6a5c85396174 = function () {
            return O(function (e, t, n, r, o, a, s) {
              i(e).setTransform(t, n, r, o, a, s);
            }, arguments);
          }),
          (s.wbg.__wbg_newwithbuffersourcesequenceandoptions_2b60b470c130cb1a =
            function () {
              return O(function (e, t) {
                return _(new Blob(i(e), i(t)));
              }, arguments);
            }),
          (s.wbg.__wbg_addEventListener_52721772cc0a7f30 = function () {
            return O(function (e, t, n, r) {
              i(e).addEventListener(l(t, n), i(r));
            }, arguments);
          }),
          (s.wbg.__wbg_addEventListener_09e11fbf8b4b719b = function () {
            return O(function (e, t, n, r, o) {
              i(e).addEventListener(l(t, n), i(r), i(o));
            }, arguments);
          }),
          (s.wbg.__wbg_addEventListener_0ed522a6d9900d5d = function () {
            return O(function (e, t, n, r, o) {
              i(e).addEventListener(l(t, n), i(r), 0 !== o);
            }, arguments);
          }),
          (s.wbg.__wbg_removeEventListener_f2adc9b2b318de99 = function () {
            return O(function (e, t, n, r) {
              i(e).removeEventListener(l(t, n), i(r));
            }, arguments);
          }),
          (s.wbg.__wbg_removeEventListener_24d5a7c12c3f3c39 = function () {
            return O(function (e, t, n, r, o) {
              i(e).removeEventListener(l(t, n), i(r), 0 !== o);
            }, arguments);
          }),
          (s.wbg.__wbg_instanceof_HtmlCanvasElement_25d964a0dde6717e =
            function (e) {
              return i(e) instanceof HTMLCanvasElement;
            }),
          (s.wbg.__wbg_width_555f63ab09ba7d3f = function (e) {
            return i(e).width;
          }),
          (s.wbg.__wbg_setwidth_c1a7061891b71f25 = function (e, t) {
            i(e).width = t >>> 0;
          }),
          (s.wbg.__wbg_height_7153faec70fbaf7b = function (e) {
            return i(e).height;
          }),
          (s.wbg.__wbg_setheight_88894b05710ff752 = function (e, t) {
            i(e).height = t >>> 0;
          }),
          (s.wbg.__wbg_getContext_f701d0231ae22393 = function () {
            return O(function (e, t, n) {
              var r = i(e).getContext(l(t, n));
              return m(r) ? 0 : _(r);
            }, arguments);
          }),
          (s.wbg.__wbg_getContext_3e21e21280a332fc = function () {
            return O(function (e, t, n, r) {
              var o = i(e).getContext(l(t, n), i(r));
              return m(o) ? 0 : _(o);
            }, arguments);
          }),
          (s.wbg.__wbg_width_16bd64d09cbf5661 = function (e) {
            return i(e).width;
          }),
          (s.wbg.__wbg_height_368bb86c37d51bc9 = function (e) {
            return i(e).height;
          }),
          (s.wbg.__wbg_data_1ae7496c58caf755 = function (e, n) {
            var r = (function (e, t) {
                const n = t(1 * e.length);
                return u().set(e, n / 1), (f = e.length), n;
              })(i(n).data, t.__wbindgen_malloc),
              o = f;
            (h()[e / 4 + 1] = o), (h()[e / 4 + 0] = r);
          }),
          (s.wbg.__wbg_newwithu8clampedarray_45da2809f7882d12 = function () {
            return O(function (e, t, n) {
              return _(new ImageData(U(e, t), n >>> 0));
            }, arguments);
          }),
          (s.wbg.__wbg_userAgent_bdd46cceef222f52 = function () {
            return O(function (e, n) {
              var r = g(
                  i(n).userAgent,
                  t.__wbindgen_malloc,
                  t.__wbindgen_realloc,
                ),
                o = f;
              (h()[e / 4 + 1] = o), (h()[e / 4 + 0] = r);
            }, arguments);
          }),
          (s.wbg.__wbg_randomFillSync_64cc7d048f228ca8 = function () {
            return O(function (e, t, n) {
              i(e).randomFillSync(D(t, n));
            }, arguments);
          }),
          (s.wbg.__wbg_getRandomValues_98117e9a7e993920 = function () {
            return O(function (e, t) {
              i(e).getRandomValues(i(t));
            }, arguments);
          }),
          (s.wbg.__wbg_process_2f24d6544ea7b200 = function (e) {
            return _(i(e).process);
          }),
          (s.wbg.__wbindgen_is_object = function (e) {
            const t = i(e);
            return "object" == typeof t && null !== t;
          }),
          (s.wbg.__wbg_versions_6164651e75405d4a = function (e) {
            return _(i(e).versions);
          }),
          (s.wbg.__wbg_node_4b517d861cbcb3bc = function (e) {
            return _(i(e).node);
          }),
          (s.wbg.__wbindgen_is_string = function (e) {
            return "string" == typeof i(e);
          }),
          (s.wbg.__wbg_modulerequire_3440a4bcf44437db = function () {
            return O(function (e, t) {
              return _(b.require(l(e, t)));
            }, arguments);
          }),
          (s.wbg.__wbg_crypto_98fc271021c7d2ad = function (e) {
            return _(i(e).crypto);
          }),
          (s.wbg.__wbg_msCrypto_a2cdb043d2bfe57f = function (e) {
            return _(i(e).msCrypto);
          }),
          (s.wbg.__wbg_get_67189fe0b323d288 = function (e, t) {
            return _(i(e)[t >>> 0]);
          }),
          (s.wbg.__wbg_new_949bbc1147195c4e = function () {
            return _(new Array());
          }),
          (s.wbg.__wbg_newnoargs_be86524d73f67598 = function (e, t) {
            return _(new Function(l(e, t)));
          }),
          (s.wbg.__wbg_next_7720502039b96d00 = function () {
            return O(function (e) {
              return _(i(e).next());
            }, arguments);
          }),
          (s.wbg.__wbg_done_b06cf0578e89ff68 = function (e) {
            return i(e).done;
          }),
          (s.wbg.__wbg_value_e74a542443d92451 = function (e) {
            return _(i(e).value);
          }),
          (s.wbg.__wbg_get_4d0f21c2f823742e = function () {
            return O(function (e, t) {
              return _(Reflect.get(i(e), i(t)));
            }, arguments);
          }),
          (s.wbg.__wbg_call_888d259a5fefc347 = function () {
            return O(function (e, t) {
              return _(i(e).call(i(t)));
            }, arguments);
          }),
          (s.wbg.__wbg_new_0b83d3df67ecb33e = function () {
            return _(new Object());
          }),
          (s.wbg.__wbg_isArray_eb7ad55f2da67dde = function (e) {
            return Array.isArray(i(e));
          }),
          (s.wbg.__wbg_of_db9e1b8e0a7ed9bc = function (e, t) {
            return _(Array.of(i(e), i(t)));
          }),
          (s.wbg.__wbg_push_284486ca27c6aa8b = function (e, t) {
            return i(e).push(i(t));
          }),
          (s.wbg.__wbg_instanceof_ArrayBuffer_764b6d4119231cb3 = function (e) {
            return i(e) instanceof ArrayBuffer;
          }),
          (s.wbg.__wbg_new_3e02a228090b2e72 = function (e) {
            return _(new ArrayBuffer(e >>> 0));
          }),
          (s.wbg.__wbg_slice_dcc477bca8fe38b1 = function (e, t, n) {
            return _(i(e).slice(t >>> 0, n >>> 0));
          }),
          (s.wbg.__wbg_values_364ae56c608e6824 = function (e) {
            return _(i(e).values());
          }),
          (s.wbg.__wbg_apply_7cfa6ebf144990a5 = function () {
            return O(function (e, t, n) {
              return _(i(e).apply(i(t), i(n)));
            }, arguments);
          }),
          (s.wbg.__wbg_call_346669c262382ad7 = function () {
            return O(function (e, t, n) {
              return _(i(e).call(i(t), i(n)));
            }, arguments);
          }),
          (s.wbg.__wbg_getTime_10d33f4f2959e5dd = function (e) {
            return i(e).getTime();
          }),
          (s.wbg.__wbg_getTimezoneOffset_d3e5a22a1b7fb1d8 = function (e) {
            return i(e).getTimezoneOffset();
          }),
          (s.wbg.__wbg_new0_fd3a3a290b25cdac = function () {
            return _(new Date());
          }),
          (s.wbg.__wbg_instanceof_Object_66786225e0dbc8ba = function (e) {
            return i(e) instanceof Object;
          }),
          (s.wbg.__wbg_entries_aadf9c3f38203a12 = function (e) {
            return _(Object.entries(i(e)));
          }),
          (s.wbg.__wbg_fromEntries_164ebf0f69983a8e = function () {
            return O(function (e) {
              return _(Object.fromEntries(i(e)));
            }, arguments);
          }),
          (s.wbg.__wbg_is_0f5efc7977a2c50b = function (e, t) {
            return Object.is(i(e), i(t));
          }),
          (s.wbg.__wbg_new_b1d61b5687f5e73a = function (e, n) {
            try {
              var r = { a: e, b: n },
                i = new Promise((e, n) => {
                  const i = r.a;
                  r.a = 0;
                  try {
                    return (function (e, n, r, i) {
                      t.wasm_bindgen__convert__closures__invoke2_mut__h467dd8b938077480(
                        e,
                        n,
                        _(r),
                        _(i),
                      );
                    })(i, r.b, e, n);
                  } finally {
                    r.a = i;
                  }
                });
              return _(i);
            } finally {
              r.a = r.b = 0;
            }
          }),
          (s.wbg.__wbg_resolve_d23068002f584f22 = function (e) {
            return _(Promise.resolve(i(e)));
          }),
          (s.wbg.__wbg_then_2fcac196782070cc = function (e, t) {
            return _(i(e).then(i(t)));
          }),
          (s.wbg.__wbg_then_8c2d62e8ae5978f7 = function (e, t, n) {
            return _(i(e).then(i(t), i(n)));
          }),
          (s.wbg.__wbg_self_c6fbdfc2918d5e58 = function () {
            return O(function () {
              return _(self.self);
            }, arguments);
          }),
          (s.wbg.__wbg_window_baec038b5ab35c54 = function () {
            return O(function () {
              return _(window.window);
            }, arguments);
          }),
          (s.wbg.__wbg_globalThis_3f735a5746d41fbd = function () {
            return O(function () {
              return _(globalThis.globalThis);
            }, arguments);
          }),
          (s.wbg.__wbg_global_1bc0b39582740e95 = function () {
            return O(function () {
              return _(n.g.global);
            }, arguments);
          }),
          (s.wbg.__wbg_buffer_397eaa4d72ee94dd = function (e) {
            return _(i(e).buffer);
          }),
          (s.wbg.__wbg_newwithbyteoffsetandlength_4b9b8c4e3f5adbff = function (
            e,
            t,
            n,
          ) {
            return _(new Uint8Array(i(e), t >>> 0, n >>> 0));
          }),
          (s.wbg.__wbg_new_a7ce447f15ff496f = function (e) {
            return _(new Uint8Array(i(e)));
          }),
          (s.wbg.__wbg_set_969ad0a60e51d320 = function (e, t, n) {
            i(e).set(i(t), n >>> 0);
          }),
          (s.wbg.__wbg_length_1eb8fc608a0d4cdb = function (e) {
            return i(e).length;
          }),
          (s.wbg.__wbg_newwithlength_929232475839a482 = function (e) {
            return _(new Uint8Array(e >>> 0));
          }),
          (s.wbg.__wbg_fill_cd6951964c67ad3a = function (e, t, n, r) {
            return _(i(e).fill(t, n >>> 0, r >>> 0));
          }),
          (s.wbg.__wbg_buffer_facf0398a281c85b = function (e) {
            return _(i(e).buffer);
          }),
          (s.wbg.__wbg_subarray_8b658422a224f479 = function (e, t, n) {
            return _(i(e).subarray(t >>> 0, n >>> 0));
          }),
          (s.wbg.__wbg_byteLength_3e250b41a8915757 = function (e) {
            return i(e).byteLength;
          }),
          (s.wbg.__wbg_byteOffset_4204ecb24a6e5df9 = function (e) {
            return i(e).byteOffset;
          }),
          (s.wbg.__wbg_ownKeys_f3f1916b5564918f = function () {
            return O(function (e) {
              return _(Reflect.ownKeys(i(e)));
            }, arguments);
          }),
          (s.wbg.__wbg_set_82a4e8a85e31ac42 = function () {
            return O(function (e, t, n) {
              return Reflect.set(i(e), i(t), i(n));
            }, arguments);
          }),
          (s.wbg.__wbindgen_debug_string = function (e, n) {
            var r = g(y(i(n)), t.__wbindgen_malloc, t.__wbindgen_realloc),
              o = f;
            (h()[e / 4 + 1] = o), (h()[e / 4 + 0] = r);
          }),
          (s.wbg.__wbindgen_throw = function (e, t) {
            throw new Error(l(e, t));
          }),
          (s.wbg.__wbindgen_rethrow = function (e) {
            throw a(e);
          }),
          (s.wbg.__wbindgen_memory = function () {
            return _(t.memory);
          }),
          (s.wbg.__wbindgen_closure_wrapper413 = function (e, t, n) {
            return _(v(e, t, 3, x));
          }),
          (s.wbg.__wbindgen_closure_wrapper415 = function (e, t, n) {
            return _(v(e, t, 3, k));
          }),
          (s.wbg.__wbindgen_closure_wrapper417 = function (e, t, n) {
            return _(v(e, t, 3, E));
          }),
          (s.wbg.__wbindgen_closure_wrapper419 = function (e, t, n) {
            return _(v(e, t, 3, A));
          }),
          (s.wbg.__wbindgen_closure_wrapper421 = function (e, t, n) {
            return _(v(e, t, 3, S));
          }),
          (s.wbg.__wbindgen_closure_wrapper423 = function (e, t, n) {
            return _(v(e, t, 3, C));
          }),
          (s.wbg.__wbindgen_closure_wrapper425 = function (e, t, n) {
            return _(v(e, t, 3, I));
          }),
          (s.wbg.__wbindgen_closure_wrapper427 = function (e, t, n) {
            return _(v(e, t, 3, R));
          }),
          (s.wbg.__wbindgen_closure_wrapper1856 = function (e, t, n) {
            return _(v(e, t, 915, F));
          }),
          ("string" == typeof o ||
            ("function" == typeof Request && o instanceof Request) ||
            ("function" == typeof URL && o instanceof URL)) &&
            (o = fetch(o));
        const { instance: c, module: b } = await (async function (e, t) {
          if ("function" == typeof Response && e instanceof Response) {
            if ("function" == typeof WebAssembly.instantiateStreaming)
              try {
                return await WebAssembly.instantiateStreaming(e, t);
              } catch (t) {
                if ("application/wasm" == e.headers.get("Content-Type"))
                  throw t;
                console.warn(
                  "`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
                  t,
                );
              }
            const n = await e.arrayBuffer();
            return await WebAssembly.instantiate(n, t);
          }
          {
            const n = await WebAssembly.instantiate(e, t);
            return n instanceof WebAssembly.Instance
              ? { instance: n, module: e }
              : n;
          }
        })(await o, s);
        return (t = c.exports), (r.__wbindgen_wasm_module = b), t;
      };
      function $(e) {
        const t =
          "function" == typeof Function.prototype.toString
            ? Function.prototype.toString()
            : null;
        return (
          "string" == typeof t &&
          t.indexOf("[native code]") >= 0 &&
          Function.prototype.toString.call(e).indexOf("[native code]") >= 0
        );
      }
      let V = "";
      try {
        void 0 !== document.currentScript &&
          null !== document.currentScript &&
          "src" in document.currentScript &&
          "" !== document.currentScript.src &&
          (V = new URL(".", document.currentScript.src).href);
      } catch (e) {
        console.warn("Unable to get currentScript URL");
      }
      function q(e) {
        let t = V;
        return (
          void 0 !== e && void 0 !== e.publicPath && (t = e.publicPath),
          "" === t || t.endsWith("/") || (t += "/"),
          t
        );
      }
      let z = null;
      function H(e) {
        return (
          null == z &&
            (z = (async function (e) {
              return (
                ("function" == typeof Array.prototype.reduce &&
                  $(Array.prototype.reduce)) ||
                  Object.defineProperty(Array.prototype, "reduce", {
                    value(...e) {
                      if (
                        0 === e.length &&
                        window.Prototype &&
                        window.Prototype.Version &&
                        window.Prototype.Version < "1.6.1"
                      )
                        return this.length > 1 ? this : this[0];
                      const t = e[0];
                      if (null === this)
                        throw new TypeError(
                          "Array.prototype.reduce called on null or undefined",
                        );
                      if ("function" != typeof t)
                        throw new TypeError(`${t} is not a function`);
                      const n = Object(this),
                        r = n.length >>> 0;
                      let i,
                        o = 0;
                      if (e.length >= 2) i = e[1];
                      else {
                        for (; o < r && !(o in n); ) o++;
                        if (o >= r)
                          throw new TypeError(
                            "Reduce of empty array with no initial value",
                          );
                        i = n[o++];
                      }
                      for (; o < r; ) o in n && (i = t(i, n[o], o, n)), o++;
                      return i;
                    },
                  }),
                ("function" == typeof Window && $(Window)) ||
                  ("function" == typeof window.constructor &&
                    $(window.constructor) &&
                    (window.Window = window.constructor)),
                null == window.Reflect && (window.Reflect = {}),
                "function" != typeof Reflect.get &&
                  Object.defineProperty(Reflect, "get", {
                    value: (e, t) => e[t],
                  }),
                "function" != typeof Reflect.set &&
                  Object.defineProperty(Reflect, "set", {
                    value(e, t, n) {
                      e[t] = n;
                    },
                  }),
                (n.p = q(e)),
                await W(),
                B
              );
            })(e)),
          z
        );
      }
      class G {
        constructor(e) {
          if (((this.__mimetypes = []), (this.__named_mimetypes = {}), e))
            for (let t = 0; t < e.length; t++) this.install(e[t]);
        }
        install(e) {
          const t = this.__mimetypes.length;
          this.__mimetypes.push(e),
            (this.__named_mimetypes[e.type] = e),
            (this[e.type] = e),
            (this[t] = e);
        }
        item(e) {
          return this.__mimetypes[e];
        }
        namedItem(e) {
          return this.__named_mimetypes[e];
        }
        get length() {
          return this.__mimetypes.length;
        }
        [Symbol.iterator]() {
          return this.__mimetypes[Symbol.iterator]();
        }
      }
      class Y extends G {
        constructor(e, t, n, r) {
          super(r),
            (this.name = e),
            (this.description = t),
            (this.filename = n);
        }
        install(e) {
          super.install(e);
        }
        [Symbol.iterator]() {
          return super[Symbol.iterator]();
        }
      }
      class J {
        constructor(e) {
          (this.__plugins = []), (this.__named_plugins = {});
          for (let t = 0; t < e.length; t++) this.install(e[t]);
        }
        install(e) {
          const t = this.__plugins.length;
          this.__plugins.push(e),
            (this.__named_plugins[e.name] = e),
            (this[e.name] = e),
            (this[t] = e);
        }
        item(e) {
          return this.__plugins[e];
        }
        namedItem(e) {
          return this.__named_plugins[e];
        }
        get length() {
          return this.__plugins.length;
        }
      }
      const Q = new Y(
        "Shockwave Flash",
        "Shockwave Flash 32.0 r0",
        "ruffle.js",
        null,
      );
      Q.install({
        type: "application/futuresplash",
        description: "Shockwave Flash",
        suffixes: "spl",
        enabledPlugin: Q,
      }),
        Q.install({
          type: "application/x-shockwave-flash",
          description: "Shockwave Flash",
          suffixes: "swf",
          enabledPlugin: Q,
        }),
        Q.install({
          type: "application/x-shockwave-flash2-preview",
          description: "Shockwave Flash",
          suffixes: "swf",
          enabledPlugin: Q,
        }),
        Q.install({
          type: "application/vnd.adobe.flash-movie",
          description: "Shockwave Flash",
          suffixes: "swf",
          enabledPlugin: Q,
        });
      const X = document.createElement("template");
      X.innerHTML =
        '\n    <style>\n        :host {\n            --ruffle-blue: #37528c;\n            --ruffle-orange: #ffad33;\n\n            display: inline-block;\n            position: relative;\n            /* Default width/height; this will get overridden by user styles/attributes. */\n            width: 550px;\n            height: 400px;\n            font-family: Arial, sans-serif;\n            letter-spacing: 0.4px;\n            touch-action: none;\n            user-select: none;\n            -webkit-user-select: none;\n            -webkit-tap-highlight-color: transparent;\n        }\n\n        /* Ruffle\'s width/height CSS interferes Safari fullscreen CSS. */\n        /* Ensure that Safari\'s fullscreen mode actually fills the screen. */\n        :host(:-webkit-full-screen) {\n            display: block;\n            width: 100% !important;\n            height: 100% !important;\n        }\n\n        /* All of these use the dimensions specified by the embed. */\n        #container,\n        #play_button,\n        #unmute_overlay,\n        #unmute_overlay .background,\n        #panic,\n        #message_overlay {\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n        }\n\n        #container {\n            overflow: hidden;\n        }\n\n        #container canvas {\n            width: 100%;\n            height: 100%;\n        }\n\n        #play_button,\n        #unmute_overlay {\n            cursor: pointer;\n            display: none;\n        }\n\n        #unmute_overlay .background {\n            background: black;\n            opacity: 0.7;\n        }\n\n        #play_button .icon,\n        #unmute_overlay .icon {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            width: 50%;\n            height: 50%;\n            max-width: 384px;\n            max-height: 384px;\n            transform: translate(-50%, -50%);\n            opacity: 0.8;\n        }\n\n        #play_button:hover .icon,\n        #unmute_overlay:hover .icon {\n            opacity: 1;\n        }\n\n        #panic {\n            font-size: 20px;\n            text-align: center;\n            /* Inverted colors from play button! */\n            background: linear-gradient(180deg, #fd3a40 0%, #fda138 100%);\n            color: white;\n            display: flex;\n            flex-flow: column;\n            justify-content: space-around;\n        }\n\n        #panic a {\n            color: var(--ruffle-blue);\n            font-weight: bold;\n        }\n\n        #panic-title {\n            font-size: xxx-large;\n            font-weight: bold;\n        }\n\n        #panic-body.details {\n            flex: 0.9;\n            margin: 0 10px;\n        }\n\n        #panic-body textarea {\n            width: 100%;\n            height: 100%;\n            resize: none;\n        }\n\n        #panic ul {\n            padding: 0;\n            display: flex;\n            list-style-type: none;\n            justify-content: space-evenly;\n        }\n\n        #message_overlay {\n            position: absolute;\n            background: var(--ruffle-blue);\n            color: var(--ruffle-orange);\n            opacity: 1;\n            z-index: 2;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            overflow: auto;\n        }\n\n        #message_overlay .message {\n            text-align: center;\n            max-height: 100%;\n            max-width: 100%;\n            padding: 5%;\n        }\n\n        #message_overlay p {\n            margin: 0.5em 0;\n        }\n\n        #message_overlay .message div {\n            display: flex;\n            justify-content: center;\n            flex-wrap: wrap;\n            column-gap: 1em;\n        }\n\n        #message_overlay a, #message_overlay button {\n            cursor: pointer;\n            background: var(--ruffle-blue);\n            color: var(--ruffle-orange);\n            border: 2px solid var(--ruffle-orange);\n            font-weight: bold;\n            font-size: 1.25em;\n            border-radius: 0.6em;\n            padding: 10px;\n            text-decoration: none;\n            margin: 2% 0;\n        }\n\n        #message_overlay a:hover, #message_overlay button:hover {\n            background: #ffffff4c;\n        }\n\n        #continue-btn {\n             cursor: pointer;\n             background: var(--ruffle-blue);\n             color: var(--ruffle-orange);\n             border: 2px solid var(--ruffle-orange);\n             font-weight: bold;\n             font-size: 20px;\n             border-radius: 20px;\n             padding: 10px;\n        }\n\n        #continue-btn:hover {\n            background: #ffffff4c;\n        }\n\n        #context-menu {\n            display: none;\n            color: black;\n            background: #fafafa;\n            border: 1px solid gray;\n            box-shadow: 0px 5px 10px -5px black;\n            position: absolute;\n            font-size: 14px;\n            text-align: left;\n            list-style: none;\n            padding: 0;\n            margin: 0;\n        }\n\n        #context-menu .menu_item {\n            padding: 5px 10px;\n            cursor: pointer;\n            color: black;\n        }\n\n        #context-menu .menu_item.disabled {\n            cursor: default;\n            color: gray;\n        }\n\n        #context-menu .menu_item:not(.disabled):hover {\n            background: lightgray;\n        }\n\n        #context-menu .menu_separator hr {\n            border: none;\n            border-bottom: 1px solid lightgray;\n            margin: 2px;\n        }\n    </style>\n    <style id="dynamic_styles"></style>\n\n    <div id="container">\n        <div id="play_button"><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" viewBox="0 0 250 250" style="width:100%;height:100%;"><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="125" y1="0" x2="125" y2="250" spreadMethod="pad"><stop offset="0%" stop-color="#FDA138"/><stop offset="100%" stop-color="#FD3A40"/></linearGradient><g id="b"><path fill="url(#a)" d="M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z"/><path fill="#FFF" d="M87 55v140l100-70L87 55z"/></g></defs><use xlink:href="#b"/></svg></div></div>\n        <div id="unmute_overlay"><div class="background"></div><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" viewBox="0 0 512 584" style="width:100%;height:100%;scale:0.8;"><path fill="#FFF" stroke="#FFF" d="m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z"/><path fill="#FFF" stroke="#FFF" d="m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z"/><path fill="#FFF" stroke="#FFF" d="m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z"/><text x="256" y="560" text-anchor="middle" style="font-size:60px;fill:#FFF;stroke:#FFF;">Click to unmute</text></svg></div></div>\n    </div>\n\n    <ul id="context-menu"></ul>\n';
      const Z = {};
      function K(e, t) {
        if (void 0 !== Z[e]) {
          if (Z[e].class !== t)
            throw new Error("Internal naming conflict on " + e);
          return Z[e].name;
        }
        let n = 0;
        if (void 0 !== window.customElements)
          for (; n < 999; ) {
            let r = e;
            if (
              (n > 0 && (r = r + "-" + n),
              void 0 === window.customElements.get(r))
            )
              return (
                window.customElements.define(r, t),
                (Z[e] = { class: t, name: r, internalName: e }),
                r
              );
            n += 1;
          }
        throw new Error("Failed to assign custom element " + e);
      }
      const ee = "application/x-shockwave-flash",
        te = "application/futuresplash",
        ne = "application/x-shockwave-flash2-preview",
        re = "application/vnd.adobe.flash-movie",
        ie = "https://ruffle.rs",
        oe = /^\s*(\d+(\.\d+)?(%)?)/;
      let ae = !1;
      function se(e) {
        if (null == e) return {};
        e instanceof URLSearchParams || (e = new URLSearchParams(e));
        const t = {};
        for (const [n, r] of e) t[n] = r.toString();
        return t;
      }
      class ce extends HTMLElement {
        constructor() {
          return (
            super(),
            (this.hasContextMenu = !1),
            (this.contextMenuForceDisabled = !1),
            (this.isTouch = !1),
            (this.showSwfDownload = !1),
            (this.panicked = !1),
            (this.isExtension = !1),
            (this.config = {}),
            (this.shadow = this.attachShadow({ mode: "open" })),
            this.shadow.appendChild(X.content.cloneNode(!0)),
            (this.dynamicStyles = this.shadow.getElementById("dynamic_styles")),
            (this.container = this.shadow.getElementById("container")),
            (this.playButton = this.shadow.getElementById("play_button")),
            this.playButton &&
              this.playButton.addEventListener("click", () => this.play()),
            (this.unmuteOverlay = this.shadow.getElementById("unmute_overlay")),
            (this.contextMenuElement =
              this.shadow.getElementById("context-menu")),
            this.addEventListener(
              "contextmenu",
              this.showContextMenu.bind(this),
            ),
            this.addEventListener("pointerdown", this.pointerDown.bind(this)),
            this.addEventListener(
              "fullscreenchange",
              this.fullScreenChange.bind(this),
            ),
            this.addEventListener(
              "webkitfullscreenchange",
              this.fullScreenChange.bind(this),
            ),
            window.addEventListener("click", this.hideContextMenu.bind(this)),
            (this.instance = null),
            (this.options = null),
            (this.onFSCommand = null),
            (this._readyState = 0),
            (this._metadata = null),
            (this.lastActivePlayingState = !1),
            this.setupPauseOnTabHidden(),
            this
          );
        }
        get readyState() {
          return this._readyState;
        }
        get metadata() {
          return this._metadata;
        }
        setupPauseOnTabHidden() {
          document.addEventListener(
            "visibilitychange",
            () => {
              this.instance &&
                (document.hidden &&
                  ((this.lastActivePlayingState = this.instance.is_playing()),
                  this.instance.pause()),
                document.hidden ||
                  !0 !== this.lastActivePlayingState ||
                  this.instance.play());
            },
            !1,
          );
        }
        connectedCallback() {
          this.updateStyles();
        }
        static get observedAttributes() {
          return ["width", "height"];
        }
        attributeChangedCallback(e, t, n) {
          ("width" !== e && "height" !== e) || this.updateStyles();
        }
        disconnectedCallback() {
          this.destroy();
        }
        updateStyles() {
          if (this.dynamicStyles.sheet) {
            if (this.dynamicStyles.sheet.rules)
              for (let e = 0; e < this.dynamicStyles.sheet.rules.length; e++)
                this.dynamicStyles.sheet.deleteRule(e);
            const e = this.attributes.getNamedItem("width");
            if (null != e) {
              const t = ce.htmlDimensionToCssDimension(e.value);
              null !== t &&
                this.dynamicStyles.sheet.insertRule(`:host { width: ${t}; }`);
            }
            const t = this.attributes.getNamedItem("height");
            if (null != t) {
              const e = ce.htmlDimensionToCssDimension(t.value);
              null !== e &&
                this.dynamicStyles.sheet.insertRule(`:host { height: ${e}; }`);
            }
          }
        }
        isUnusedFallbackObject() {
          let e = this.parentNode;
          const t = (function (e) {
            const t = Z[e];
            return void 0 !== t
              ? { internalName: e, name: t.name, class: t.class }
              : null;
          })("ruffle-object");
          if (null !== t)
            for (; e != document && null != e; ) {
              if (e.nodeName === t.name) return !0;
              e = e.parentNode;
            }
          return !1;
        }
        async ensureFreshInstance(e) {
          var t;
          this.destroy();
          const n = await H(e).catch((e) => {
            if (
              (console.error(`Serious error loading Ruffle: ${e}`),
              "file:" === window.location.protocol)
            )
              e.ruffleIndexError = 2;
            else {
              e.ruffleIndexError = 9;
              const t = String(e.message).toLowerCase();
              t.includes("mime")
                ? (e.ruffleIndexError = 8)
                : t.includes("networkerror") || t.includes("failed to fetch")
                  ? (e.ruffleIndexError = 6)
                  : t.includes("disallowed by embedder")
                    ? (e.ruffleIndexError = 1)
                    : "CompileError" === e.name
                      ? (e.ruffleIndexError = 3)
                      : t.includes("could not download wasm module") &&
                          "TypeError" === e.name
                        ? (e.ruffleIndexError = 7)
                        : "TypeError" === e.name && (e.ruffleIndexError = 5);
            }
            throw (this.panic(e), e);
          });
          if (
            ((this.instance = await new n(this.container, this, e)),
            console.log("New Ruffle instance created."),
            "running" !== this.audioState() &&
              ((this.container.style.visibility = "hidden"),
              await new Promise((e) => {
                window.setTimeout(() => {
                  e();
                }, 200);
              }),
              (this.container.style.visibility = "")),
            this.unmuteAudioContext(),
            "on" === e.autoplay ||
              ("off" !== e.autoplay && "running" === this.audioState()))
          ) {
            if ((this.play(), "running" !== this.audioState())) {
              "hidden" !== e.unmuteOverlay &&
                (this.unmuteOverlay.style.display = "block"),
                this.container.addEventListener(
                  "click",
                  this.unmuteOverlayClicked.bind(this),
                  { once: !0 },
                );
              const n =
                null === (t = this.instance) || void 0 === t
                  ? void 0
                  : t.audio_context();
              n &&
                (n.onstatechange = () => {
                  "running" === n.state && this.unmuteOverlayClicked(),
                    (n.onstatechange = null);
                });
            }
          } else this.playButton.style.display = "block";
        }
        destroy() {
          this.instance &&
            (this.instance.destroy(),
            (this.instance = null),
            (this._metadata = null),
            (this._readyState = 0),
            console.log("Ruffle instance destroyed."));
        }
        async load(e) {
          var t, n;
          let r = "";
          switch (typeof e) {
            case "string":
              e = { url: e };
              break;
            case "object":
              null === e
                ? (r = "Argument 0 must be a string or object")
                : "url" in e || "data" in e
                  ? "url" in e &&
                    "string" != typeof e.url &&
                    (r = "`url` must be a string")
                  : (r = "Argument 0 must contain a `url` or `data` key");
              break;
            default:
              r = "Argument 0 must be a string or object";
          }
          if (r.length > 0) {
            const e = new TypeError(r);
            throw ((e.ruffleIndexError = 4), this.panic(e), e);
          }
          if (this.isConnected && !this.isUnusedFallbackObject()) {
            if (!fe(this))
              try {
                const r = Object.assign(
                  Object.assign(
                    Object.assign(
                      {},
                      null !==
                        (n =
                          null === (t = window.RufflePlayer) || void 0 === t
                            ? void 0
                            : t.config) && void 0 !== n
                        ? n
                        : {},
                    ),
                    this.config,
                  ),
                  e,
                );
                if (
                  ((r.allowScriptAccess = e.allowScriptAccess),
                  (this.showSwfDownload = !0 === r.showSwfDownload),
                  (this.options = e),
                  (this.hasContextMenu = !1 !== r.contextMenu),
                  r.backgroundColor &&
                    (this.container.style.backgroundColor = r.backgroundColor),
                  await this.ensureFreshInstance(r),
                  "url" in e)
                ) {
                  console.log(`Loading SWF file ${e.url}`);
                  try {
                    this.swfUrl = new URL(e.url, document.location.href).href;
                  } catch (t) {
                    this.swfUrl = e.url;
                  }
                  const t = Object.assign(
                    Object.assign({}, se(e.url.substring(e.url.indexOf("?")))),
                    se(e.parameters),
                  );
                  this.instance.stream_from(this.swfUrl, t);
                } else
                  "data" in e &&
                    (console.log("Loading SWF data"),
                    this.instance.load_data(
                      new Uint8Array(e.data),
                      se(e.parameters),
                    ));
              } catch (e) {
                throw (
                  (console.error(
                    `Serious error occurred loading SWF file: ${e}`,
                  ),
                  e)
                );
              }
          } else
            console.warn(
              "Ignoring attempt to play a disconnected or suspended Ruffle element",
            );
        }
        play() {
          this.instance &&
            (this.instance.play(),
            this.playButton && (this.playButton.style.display = "none"));
        }
        get fullscreenEnabled() {
          return !(
            !document.fullscreenEnabled && !document.webkitFullscreenEnabled
          );
        }
        get isFullscreen() {
          return (
            (document.fullscreenElement || document.webkitFullscreenElement) ===
            this
          );
        }
        setFullscreen(e) {
          this.fullscreenEnabled &&
            (e ? this.enterFullscreen() : this.exitFullscreen());
        }
        enterFullscreen() {
          const e = { navigationUI: "hide" };
          this.requestFullscreen
            ? this.requestFullscreen(e)
            : this.webkitRequestFullscreen
              ? this.webkitRequestFullscreen(e)
              : this.webkitRequestFullScreen && this.webkitRequestFullScreen(e);
        }
        exitFullscreen() {
          document.exitFullscreen
            ? document.exitFullscreen()
            : document.webkitExitFullscreen
              ? document.webkitExitFullscreen()
              : document.webkitCancelFullScreen &&
                document.webkitCancelFullScreen();
        }
        fullScreenChange() {
          var e;
          null === (e = this.instance) ||
            void 0 === e ||
            e.set_fullscreen(this.isFullscreen);
        }
        pointerDown(e) {
          ("touch" !== e.pointerType && "pen" !== e.pointerType) ||
            (this.isTouch = !0);
        }
        async downloadSwf() {
          try {
            if (this.swfUrl) {
              console.log("Downloading SWF: " + this.swfUrl);
              const e = await fetch(this.swfUrl);
              if (!e.ok) return void console.error("SWF download failed");
              const t = await e.blob(),
                n = URL.createObjectURL(t),
                r = document.createElement("a");
              (r.style.display = "none"),
                (r.href = n),
                (r.download = this.swfUrl.substring(
                  this.swfUrl.lastIndexOf("/") + 1,
                )),
                document.body.appendChild(r),
                r.click(),
                document.body.removeChild(r),
                URL.revokeObjectURL(n);
            } else console.error("SWF download failed");
          } catch (e) {
            console.error("SWF download failed");
          }
        }
        contextMenuItems() {
          const e = String.fromCharCode(10003),
            t = [];
          this.instance &&
            this.instance.prepare_context_menu().forEach((n, r) => {
              n.separatorBefore && t.push(null),
                t.push({
                  text: n.caption + (n.checked ? ` (${e})` : ""),
                  onClick: () => {
                    var e;
                    return null === (e = this.instance) || void 0 === e
                      ? void 0
                      : e.run_context_menu_callback(r);
                  },
                  enabled: n.enabled,
                });
            }),
            t.push(null),
            this.fullscreenEnabled &&
              (this.isFullscreen
                ? t.push({
                    text: "Exit fullscreen",
                    onClick: () => {
                      var e;
                      return null === (e = this.instance) || void 0 === e
                        ? void 0
                        : e.set_fullscreen(!1);
                    },
                  })
                : t.push({
                    text: "Enter fullscreen",
                    onClick: () => {
                      var e;
                      return null === (e = this.instance) || void 0 === e
                        ? void 0
                        : e.set_fullscreen(!0);
                    },
                  })),
            this.instance &&
              this.swfUrl &&
              this.showSwfDownload &&
              (t.push(null),
              t.push({
                text: "Download .swf",
                onClick: this.downloadSwf.bind(this),
              })),
            t.push(null);
          const n = this.isExtension ? "extension" : "";
          return (
            t.push({
              text: `About Ruffle ${n} (nightly 2021-12-22)`,
              onClick() {
                window.open(ie, "_blank");
              },
            }),
            this.isTouch &&
              (t.push(null),
              t.push({
                text: "Hide this menu",
                onClick: () => (this.contextMenuForceDisabled = !0),
              })),
            t
          );
        }
        showContextMenu(e) {
          if (
            (e.preventDefault(),
            !this.hasContextMenu || this.contextMenuForceDisabled)
          )
            return;
          for (; this.contextMenuElement.firstChild; )
            this.contextMenuElement.removeChild(
              this.contextMenuElement.firstChild,
            );
          for (const e of this.contextMenuItems())
            if (null === e) {
              if (!this.contextMenuElement.lastElementChild) continue;
              if (
                this.contextMenuElement.lastElementChild.classList.contains(
                  "menu_separator",
                )
              )
                continue;
              const e = document.createElement("li");
              e.className = "menu_separator";
              const t = document.createElement("hr");
              e.appendChild(t), this.contextMenuElement.appendChild(e);
            } else {
              const { text: t, onClick: n, enabled: r } = e,
                i = document.createElement("li");
              (i.className = "menu_item"),
                (i.textContent = t),
                this.contextMenuElement.appendChild(i),
                !1 !== r
                  ? i.addEventListener("click", n)
                  : i.classList.add("disabled");
            }
          (this.contextMenuElement.style.left = "0"),
            (this.contextMenuElement.style.top = "0"),
            (this.contextMenuElement.style.display = "block");
          const t = this.getBoundingClientRect(),
            n = e.clientX - t.x,
            r = e.clientY - t.y,
            i = t.width - this.contextMenuElement.clientWidth - 1,
            o = t.height - this.contextMenuElement.clientHeight - 1;
          (this.contextMenuElement.style.left =
            Math.floor(Math.min(n, i)) + "px"),
            (this.contextMenuElement.style.top =
              Math.floor(Math.min(r, o)) + "px");
        }
        hideContextMenu() {
          var e;
          null === (e = this.instance) ||
            void 0 === e ||
            e.clear_custom_menu_items(),
            (this.contextMenuElement.style.display = "none");
        }
        pause() {
          this.instance &&
            (this.instance.pause(),
            this.playButton && (this.playButton.style.display = "block"));
        }
        audioState() {
          if (this.instance) {
            const e = this.instance.audio_context();
            return (e && e.state) || "running";
          }
          return "suspended";
        }
        unmuteOverlayClicked() {
          if (this.instance) {
            if ("running" !== this.audioState()) {
              const e = this.instance.audio_context();
              e && e.resume();
            }
            this.unmuteOverlay && (this.unmuteOverlay.style.display = "none");
          }
        }
        unmuteAudioContext() {
          ae ||
            (navigator.maxTouchPoints < 1
              ? (ae = !0)
              : this.container.addEventListener(
                  "click",
                  () => {
                    var e;
                    if (ae) return;
                    const t =
                      null === (e = this.instance) || void 0 === e
                        ? void 0
                        : e.audio_context();
                    if (!t) return;
                    const n = new Audio();
                    (n.src = (() => {
                      const e = new ArrayBuffer(10),
                        n = new DataView(e),
                        r = t.sampleRate;
                      return (
                        n.setUint32(0, r, !0),
                        n.setUint32(4, r, !0),
                        n.setUint16(8, 1, !0),
                        `data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${window.btoa(String.fromCharCode(...new Uint8Array(e))).slice(0, 13)}AgAZGF0YQcAAACAgICAgICAAAA=`
                      );
                    })()),
                      n.load(),
                      n
                        .play()
                        .then(() => {
                          ae = !0;
                        })
                        .catch((e) => {
                          console.warn(`Failed to play dummy sound: ${e}`);
                        });
                  },
                  { once: !0 },
                ));
        }
        copyElement(e) {
          if (e) {
            for (let t = 0; t < e.attributes.length; t++) {
              const n = e.attributes[t];
              if (n.specified) {
                if ("title" === n.name && "Adobe Flash Player" === n.value)
                  continue;
                try {
                  this.setAttribute(n.name, n.value);
                } catch (e) {
                  console.warn(
                    `Unable to set attribute ${n.name} on Ruffle instance`,
                  );
                }
              }
            }
            for (const t of Array.from(e.children)) this.appendChild(t);
          }
        }
        static htmlDimensionToCssDimension(e) {
          if (e) {
            const t = e.match(oe);
            if (t) {
              let e = t[1];
              return t[3] || (e += "px"), e;
            }
          }
          return null;
        }
        onCallbackAvailable(e) {
          const t = this.instance;
          this[e] = (...n) =>
            null == t ? void 0 : t.call_exposed_callback(e, n);
        }
        set traceObserver(e) {
          var t;
          null === (t = this.instance) ||
            void 0 === t ||
            t.set_trace_observer(e);
        }
        panic(e) {
          var t;
          if (this.panicked) return;
          if (
            ((this.panicked = !0),
            e instanceof Error &&
              ("AbortError" === e.name || e.message.includes("AbortError")))
          )
            return;
          const n =
              null !== (t = null == e ? void 0 : e.ruffleIndexError) &&
              void 0 !== t
                ? t
                : 0,
            r = Object.assign([], { stackIndex: -1 });
          if ((r.push("# Error Info\n"), e instanceof Error)) {
            if (
              (r.push(`Error name: ${e.name}\n`),
              r.push(`Error message: ${e.message}\n`),
              e.stack)
            ) {
              const t =
                r.push(`Error stack:\n\`\`\`\n${e.stack}\n\`\`\`\n`) - 1;
              r.stackIndex = t;
            }
          } else r.push(`Error: ${e}\n`);
          r.push("\n# Player Info\n"),
            r.push(this.debugPlayerInfo()),
            r.push("\n# Page Info\n"),
            r.push(`Page URL: ${document.location.href}\n`),
            this.swfUrl && r.push(`SWF URL: ${this.swfUrl}\n`),
            r.push("\n# Browser Info\n"),
            r.push(`Useragent: ${window.navigator.userAgent}\n`),
            r.push(`OS: ${window.navigator.platform}\n`),
            r.push("\n# Ruffle Info\n"),
            r.push("Version: 0.1.0\n"),
            r.push("Name: nightly 2021-12-22\n"),
            r.push("Channel: nightly\n"),
            r.push("Built: 2021-12-22T00:14:15.814Z\n"),
            r.push("Commit: 74ab24c0c3345025a1b7297c526c37783ecc9990\n"),
            r.push(`Is extension: ${this.isExtension}\n`);
          const i = r.join(""),
            o = document.location.href.split(/[?#]/)[0];
          let a,
            s,
            c = `https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(`Error on ${o}`)}&labels=error-report&body=`,
            u = encodeURIComponent(i);
          switch (
            (r.stackIndex > -1 &&
              String(c + u).length > 8195 &&
              ((r[r.stackIndex] = null), (u = encodeURIComponent(r.join("")))),
            (c += u),
            n)
          ) {
            case 2:
              (a =
                '\n                    <p>It appears you are running Ruffle on the "file:" protocol.</p>\n                    <p>This doesn\'t work as browsers block many features from working for security reasons.</p>\n                    <p>Instead, we invite you to setup a local server or either use the web demo or the desktop application.</p>\n                '),
                (s = `\n                    <li><a target="_top" href="${ie}/demo">Web Demo</a></li>\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/tags">Desktop Application</a></li>\n                `);
              break;
            case 4:
              (a =
                "\n                    <p>Ruffle has encountered a major issue due to an incorrect JavaScript configuration.</p>\n                    <p>If you are the server administrator, we invite you to check the error details to find out which parameter is at fault.</p>\n                    <p>You can also consult the Ruffle wiki for help.</p>\n                "),
                (s =
                  '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#javascript-api">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ');
              break;
            case 9:
              (a =
                '\n                    <p>Ruffle failed to load the required ".wasm" file component.</p>\n                    <p>If you are the server administrator, please ensure the file has correctly been uploaded.</p>\n                    <p>If the issue persists, you may need to use the "publicPath" setting: please consult the Ruffle wiki for help.</p>\n                '),
                (s =
                  '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configuration-options">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ');
              break;
            case 8:
              (a =
                '\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>This web server is not serving ".wasm" files with the correct MIME type.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                '),
                (s =
                  '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-webassembly-mime-type">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ');
              break;
            case 10:
              (a =
                "\n                    <p>Ruffle failed to load the Flash SWF file.</p>\n                    <p>The most likely reason is that the file no longer exists, so there is nothing for Ruffle to load.</p>\n                    <p>Try contacting the website administrator for help.</p>\n                "),
                (s =
                  '\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ');
              break;
            case 6:
              (a =
                '\n                    <p>Ruffle failed to load the required ".wasm" file component.</p>\n                    <p>Access to fetch has likely been blocked by CORS policy.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                '),
                (s =
                  '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#web">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ');
              break;
            case 3:
              (a =
                "\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>It seems like this page has missing or invalid files for running Ruffle.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                "),
                (s =
                  '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#addressing-a-compileerror">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ');
              break;
            case 7:
              (a =
                "\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>This can often resolve itself, so you can try reloading the page.</p>\n                    <p>Otherwise, please contact the website administrator.</p>\n                "),
                (s =
                  '\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ');
              break;
            case 5:
              (a =
                "\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>It seems like this page uses JavaScript code that conflicts with Ruffle.</p>\n                    <p>If you are the server administrator, we invite you to try loading the file on a blank page.</p>\n                "),
                (s = `\n                    <li><a target="_top" href="${c}">Report Bug</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                `);
              break;
            case 1:
              (a =
                '\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>This web server\'s Content Security Policy does not allow the required ".wasm" component to run.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                '),
                (s =
                  '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-wasm-csp">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ');
              break;
            default:
              (a =
                "\n                    <p>Ruffle has encountered a major issue whilst trying to display this Flash content.</p>\n                    <p>This isn't supposed to happen, so we'd really appreciate if you could file a bug!</p>\n                "),
                (s = `\n                    <li><a target="_top" href="${c}">Report Bug</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                `);
          }
          this.container.innerHTML = `\n            <div id="panic">\n                <div id="panic-title">Something went wrong :(</div>\n                <div id="panic-body">${a}</div>\n                <div id="panic-footer">\n                    <ul>${s}</ul>\n                </div>\n            </div>\n        `;
          const l = this.container.querySelector("#panic-view-details");
          l &&
            (l.onclick = () => {
              const e = this.container.querySelector("#panic-body");
              return (
                e.classList.add("details"),
                (e.innerHTML = `<textarea>${i}</textarea>`),
                !1
              );
            }),
            this.destroy();
        }
        displayRootMovieDownloadFailedMessage() {
          const e = new URL(this.swfUrl);
          if (
            window.location.origin == e.origin ||
            !this.isExtension ||
            !window.location.protocol.includes("http")
          ) {
            const e = new Error("Failed to fetch: " + this.swfUrl);
            return (e.ruffleIndexError = 10), void this.panic(e);
          }
          const t = document.createElement("div");
          (t.id = "message_overlay"),
            (t.innerHTML = `<div class="message">\n            <p>Ruffle wasn't able to run the Flash embedded in this page.</p>\n            <p>You can try to open the file in a separate tab, to sidestep this issue.</p>\n            <div>\n                <a target="_blank" href="${this.swfUrl}">Open in a new tab</a>\n            </div>\n        </div>`),
            this.container.prepend(t);
        }
        displayUnsupportedMessage() {
          const e = document.createElement("div");
          (e.id = "message_overlay"),
            (e.innerHTML =
              '<div class="message">\n            <p>Flash Player has been removed from browsers in 2021.</p>\n            <p>This content is not yet supported by the Ruffle emulator and will likely not run as intended.</p>\n            <div>\n                <a target="_blank" class="more-info-link" href="https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users">More info</a>\n                <button id="run-anyway-btn">Run anyway</button>\n            </div>\n        </div>'),
            this.container.prepend(e),
            (e.querySelector("#run-anyway-btn").onclick = () => {
              e.parentNode.removeChild(e);
            });
        }
        displayMessage(e) {
          const t = document.createElement("div");
          (t.id = "message_overlay"),
            (t.innerHTML = `<div class="message">\n            <p>${e}</p>\n            <div>\n                <button id="continue-btn">continue</button>\n            </div>\n        </div>`),
            this.container.prepend(t),
            (this.container.querySelector("#continue-btn").onclick = () => {
              t.parentNode.removeChild(t);
            });
        }
        debugPlayerInfo() {
          var e, t;
          return `Allows script access: ${null !== (t = null === (e = this.options) || void 0 === e ? void 0 : e.allowScriptAccess) && void 0 !== t && t}\n`;
        }
        setMetadata(e) {
          (this._metadata = e),
            (this._readyState = 2),
            this.dispatchEvent(new Event(ce.LOADED_METADATA)),
            this.dispatchEvent(new Event(ce.LOADED_DATA));
        }
        setIsExtension(e) {
          this.isExtension = e;
        }
      }
      function ue(e, t) {
        switch ((e || (e = "sameDomain"), e.toLowerCase())) {
          case "always":
            return !0;
          case "never":
            return !1;
          default:
            try {
              return (
                new URL(window.location.href).origin ===
                new URL(t, window.location.href).origin
              );
            } catch (e) {
              return !1;
            }
        }
      }
      function le(e) {
        return null === e || "true" === e.toLowerCase();
      }
      function _e(e) {
        if (e) {
          let t = "";
          try {
            t = new URL(e, ie).pathname;
          } catch (e) {}
          if (t && t.length >= 4) {
            const e = t.slice(-4).toLowerCase();
            if (".swf" === e || ".spl" === e) return !0;
          }
        }
        return !1;
      }
      function fe(e) {
        let t = e.parentElement;
        for (; null !== t; ) {
          switch (t.tagName) {
            case "AUDIO":
            case "VIDEO":
              return !0;
          }
          t = t.parentElement;
        }
        return !1;
      }
      (ce.LOADED_METADATA = "loadedmetadata"), (ce.LOADED_DATA = "loadeddata");
      class be extends ce {
        constructor() {
          super();
        }
        connectedCallback() {
          var e, t, n, r, i, o, a, s, c, u, l, _, f;
          super.connectedCallback();
          const b = this.attributes.getNamedItem("src");
          if (b) {
            const d =
                null !==
                  (t =
                    null ===
                      (e = this.attributes.getNamedItem("allowScriptAccess")) ||
                    void 0 === e
                      ? void 0
                      : e.value) && void 0 !== t
                  ? t
                  : null,
              g =
                null !==
                  (r =
                    null === (n = this.attributes.getNamedItem("menu")) ||
                    void 0 === n
                      ? void 0
                      : n.value) && void 0 !== r
                  ? r
                  : null;
            this.load({
              url: b.value,
              allowScriptAccess: ue(d, b.value),
              parameters:
                null === (i = this.attributes.getNamedItem("flashvars")) ||
                void 0 === i
                  ? void 0
                  : i.value,
              backgroundColor:
                null === (o = this.attributes.getNamedItem("bgcolor")) ||
                void 0 === o
                  ? void 0
                  : o.value,
              base:
                null === (a = this.attributes.getNamedItem("base")) ||
                void 0 === a
                  ? void 0
                  : a.value,
              menu: le(g),
              salign:
                null !==
                  (c =
                    null === (s = this.attributes.getNamedItem("salign")) ||
                    void 0 === s
                      ? void 0
                      : s.value) && void 0 !== c
                  ? c
                  : "",
              quality:
                null !==
                  (l =
                    null === (u = this.attributes.getNamedItem("quality")) ||
                    void 0 === u
                      ? void 0
                      : u.value) && void 0 !== l
                  ? l
                  : "high",
              scale:
                null !==
                  (f =
                    null === (_ = this.attributes.getNamedItem("scale")) ||
                    void 0 === _
                      ? void 0
                      : _.value) && void 0 !== f
                  ? f
                  : "showAll",
            });
          }
        }
        get src() {
          var e;
          return null === (e = this.attributes.getNamedItem("src")) ||
            void 0 === e
            ? void 0
            : e.value;
        }
        set src(e) {
          if (null != e) {
            const t = document.createAttribute("src");
            (t.value = e), this.attributes.setNamedItem(t);
          } else this.attributes.removeNamedItem("src");
        }
        static get observedAttributes() {
          return ["src", "width", "height"];
        }
        attributeChangedCallback(e, t, n) {
          var r;
          if (
            (super.attributeChangedCallback(e, t, n),
            this.isConnected && "src" === e)
          ) {
            let e;
            const t = this.attributes.getNamedItem("flashvars");
            t && (e = t.value);
            const n = this.attributes.getNamedItem("src");
            n &&
              this.load({
                url: n.value,
                parameters: e,
                base:
                  null === (r = this.attributes.getNamedItem("base")) ||
                  void 0 === r
                    ? void 0
                    : r.value,
              });
          }
        }
        static isInterdictable(e) {
          var t;
          if (fe(e)) return !1;
          if (!e.getAttribute("src")) return !1;
          const n =
            null === (t = e.getAttribute("type")) || void 0 === t
              ? void 0
              : t.toLowerCase();
          return (
            n === ee.toLowerCase() ||
            n === te.toLowerCase() ||
            n === ne.toLowerCase() ||
            n === re.toLowerCase() ||
            ((null == n || "" === n) && _e(e.getAttribute("src")))
          );
        }
        static fromNativeEmbedElement(e) {
          const t = K("ruffle-embed", be),
            n = document.createElement(t);
          return n.copyElement(e), n;
        }
      }
      function de(e, t, n) {
        t = t.toLowerCase();
        for (const n in e)
          if (Object.hasOwnProperty.call(e, n) && t === n.toLowerCase())
            return e[n];
        return n;
      }
      function ge(e) {
        var t, n;
        const r = {};
        for (const i of e.children)
          if (i instanceof HTMLParamElement) {
            const e =
                null === (t = i.attributes.getNamedItem("name")) || void 0 === t
                  ? void 0
                  : t.value,
              o =
                null === (n = i.attributes.getNamedItem("value")) ||
                void 0 === n
                  ? void 0
                  : n.value;
            e && o && (r[e] = o);
          }
        return r;
      }
      class we extends ce {
        constructor() {
          super(), (this.params = {});
        }
        connectedCallback() {
          var e;
          super.connectedCallback(), (this.params = ge(this));
          let t = null;
          this.attributes.getNamedItem("data")
            ? (t =
                null === (e = this.attributes.getNamedItem("data")) ||
                void 0 === e
                  ? void 0
                  : e.value)
            : this.params.movie && (t = this.params.movie);
          const n = de(this.params, "allowScriptAccess", null),
            r = de(this.params, "flashvars", this.getAttribute("flashvars")),
            i = de(this.params, "bgcolor", this.getAttribute("bgcolor")),
            o = de(this.params, "base", this.getAttribute("base")),
            a = de(this.params, "menu", null),
            s = de(this.params, "salign", ""),
            c = de(this.params, "quality", "high"),
            u = de(this.params, "scale", "showAll");
          if (t) {
            const e = { url: t };
            (e.allowScriptAccess = ue(n, t)),
              r && (e.parameters = r),
              i && (e.backgroundColor = i),
              o && (e.base = o),
              (e.menu = le(a)),
              s && (e.salign = s),
              c && (e.quality = c),
              u && (e.scale = u),
              this.load(e);
          }
        }
        debugPlayerInfo() {
          var e;
          let t = super.debugPlayerInfo();
          t += "Player type: Object\n";
          let n = null;
          return (
            this.attributes.getNamedItem("data")
              ? (n =
                  null === (e = this.attributes.getNamedItem("data")) ||
                  void 0 === e
                    ? void 0
                    : e.value)
              : this.params.movie && (n = this.params.movie),
            (t += `SWF URL: ${n}\n`),
            Object.keys(this.params).forEach((e) => {
              t += `Param ${e}: ${this.params[e]}\n`;
            }),
            Object.keys(this.attributes).forEach((e) => {
              var n;
              t += `Attribute ${e}: ${null === (n = this.attributes.getNamedItem(e)) || void 0 === n ? void 0 : n.value}\n`;
            }),
            t
          );
        }
        get data() {
          return this.getAttribute("data");
        }
        set data(e) {
          if (null != e) {
            const t = document.createAttribute("data");
            (t.value = e), this.attributes.setNamedItem(t);
          } else this.attributes.removeNamedItem("data");
        }
        static isInterdictable(e) {
          var t, n, r;
          if (fe(e)) return !1;
          if (e.getElementsByTagName("ruffle-embed").length > 0) return !1;
          const i =
              null === (t = e.attributes.getNamedItem("data")) || void 0 === t
                ? void 0
                : t.value.toLowerCase(),
            o = ge(e);
          let a;
          if (i) a = _e(i);
          else {
            if (!o || !o.movie) return !1;
            a = _e(o.movie);
          }
          const s =
            null === (n = e.attributes.getNamedItem("classid")) || void 0 === n
              ? void 0
              : n.value.toLowerCase();
          if (s === "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000".toLowerCase())
            return !Array.from(e.getElementsByTagName("embed")).some(
              be.isInterdictable,
            );
          if (null != s && "" !== s) return !1;
          const c =
            null === (r = e.attributes.getNamedItem("type")) || void 0 === r
              ? void 0
              : r.value.toLowerCase();
          return (
            c === ee.toLowerCase() ||
            c === te.toLowerCase() ||
            c === ne.toLowerCase() ||
            c === re.toLowerCase() ||
            ((null == c || "" === c) && a)
          );
        }
        static fromNativeObjectElement(e) {
          const t = K("ruffle-object", we),
            n = document.createElement(t);
          for (const t of Array.from(e.getElementsByTagName("embed")))
            be.isInterdictable(t) && t.remove();
          for (const t of Array.from(e.getElementsByTagName("object")))
            we.isInterdictable(t) && t.remove();
          return n.copyElement(e), n;
        }
      }
      var he, me;
      let pe;
      const ye =
          null !==
            (me =
              null === (he = window.RufflePlayer) || void 0 === he
                ? void 0
                : he.config) && void 0 !== me
            ? me
            : {},
        ve = q(ye) + "ruffle.js";
      let xe, ke, Ee, Ae;
      function Se() {
        try {
          (xe = null != xe ? xe : document.getElementsByTagName("object")),
            (ke = null != ke ? ke : document.getElementsByTagName("embed"));
          for (const e of Array.from(xe))
            if (we.isInterdictable(e)) {
              const t = we.fromNativeObjectElement(e);
              t.setIsExtension(pe), e.replaceWith(t);
            }
          for (const e of Array.from(ke))
            if (be.isInterdictable(e)) {
              const t = be.fromNativeEmbedElement(e);
              t.setIsExtension(pe), e.replaceWith(t);
            }
        } catch (e) {
          console.error(
            `Serious error encountered when polyfilling native Flash elements: ${e}`,
          );
        }
      }
      function Ce() {
        (Ee = null != Ee ? Ee : document.getElementsByTagName("iframe")),
          (Ae = null != Ae ? Ae : document.getElementsByTagName("frame")),
          [Ee, Ae].forEach((e) => {
            for (let t = 0; t < e.length; t++) {
              const n = e[t];
              if (void 0 !== n.dataset.rufflePolyfilled) continue;
              n.dataset.rufflePolyfilled = "";
              const r = n.contentWindow,
                i = `Couldn't load Ruffle into ${n.tagName}[${n.src}]: `;
              try {
                "complete" === r.document.readyState && Ie(r, i);
              } catch (e) {
                pe || console.warn(i + e);
              }
              n.addEventListener(
                "load",
                () => {
                  Ie(r, i);
                },
                !1,
              );
            }
          });
      }
      async function Ie(e, t) {
        var n;
        let r;
        await new Promise((e) => {
          window.setTimeout(() => {
            e();
          }, 100);
        });
        try {
          if (((r = e.document), !r)) return;
        } catch (e) {
          return void (pe || console.warn(t + e));
        }
        if (pe || void 0 === r.documentElement.dataset.ruffleOptout)
          if (pe)
            e.RufflePlayer || (e.RufflePlayer = {}),
              (e.RufflePlayer.config = Object.assign(
                Object.assign({}, ye),
                null !== (n = e.RufflePlayer.config) && void 0 !== n ? n : {},
              ));
          else if (!e.RufflePlayer) {
            const t = r.createElement("script");
            t.setAttribute("src", ve),
              (t.onload = () => {
                (e.RufflePlayer = {}), (e.RufflePlayer.config = ye);
              }),
              r.head.appendChild(t);
          }
      }
      class Re {
        constructor(e, t, n, r, i) {
          (this.major = e),
            (this.minor = t),
            (this.patch = n),
            (this.prIdent = r),
            (this.buildIdent = i);
        }
        static fromSemver(e) {
          const t = e.split("+"),
            n = t[0].split("-"),
            r = n[0].split("."),
            i = parseInt(r[0], 10);
          let o = 0,
            a = 0,
            s = null,
            c = null;
          return (
            null != r[1] && (o = parseInt(r[1], 10)),
            null != r[2] && (a = parseInt(r[2], 10)),
            null != n[1] && (s = n[1].split(".")),
            null != t[1] && (c = t[1].split(".")),
            new Re(i, o, a, s, c)
          );
        }
        isCompatibleWith(e) {
          return (
            (0 !== this.major && this.major === e.major) ||
            (0 === this.major &&
              0 === e.major &&
              0 !== this.minor &&
              this.minor === e.minor) ||
            (0 === this.major &&
              0 === e.major &&
              0 === this.minor &&
              0 === e.minor &&
              0 !== this.patch &&
              this.patch === e.patch)
          );
        }
        hasPrecedenceOver(e) {
          if (this.major > e.major) return !0;
          if (this.major < e.major) return !1;
          if (this.minor > e.minor) return !0;
          if (this.minor < e.minor) return !1;
          if (this.patch > e.patch) return !0;
          if (this.patch < e.patch) return !1;
          if (null == this.prIdent && null != e.prIdent) return !0;
          if (null != this.prIdent && null != e.prIdent) {
            const t = /^[0-9]*$/;
            for (
              let n = 0;
              n < this.prIdent.length && n < e.prIdent.length;
              n += 1
            ) {
              if (!t.test(this.prIdent[n]) && t.test(e.prIdent[n])) return !0;
              if (t.test(this.prIdent[n]) && t.test(e.prIdent[n])) {
                if (parseInt(this.prIdent[n], 10) > parseInt(e.prIdent[n], 10))
                  return !0;
                if (parseInt(this.prIdent[n], 10) < parseInt(e.prIdent[n], 10))
                  return !1;
              } else {
                if (t.test(this.prIdent[n]) && !t.test(e.prIdent[n])) return !1;
                if (!t.test(this.prIdent[n]) && !t.test(e.prIdent[n])) {
                  if (this.prIdent[n] > e.prIdent[n]) return !0;
                  if (this.prIdent[n] < e.prIdent[n]) return !1;
                }
              }
            }
            return this.prIdent.length > e.prIdent.length;
          }
          return !1;
        }
        isEqual(e) {
          return (
            this.major === e.major &&
            this.minor === e.minor &&
            this.patch === e.patch
          );
        }
        isStableOrCompatiblePrerelease(e) {
          return (
            null == e.prIdent ||
            (this.major === e.major &&
              this.minor === e.minor &&
              this.patch === e.patch)
          );
        }
      }
      class Fe {
        constructor(e) {
          this.requirements = e;
        }
        satisfiedBy(e) {
          for (let t = 0; t < this.requirements.length; t += 1) {
            let n = !0;
            for (let r = 0; r < this.requirements[t].length; r += 1) {
              const i = this.requirements[t][r].comparator,
                o = this.requirements[t][r].version;
              (n = n && o.isStableOrCompatiblePrerelease(e)),
                "" === i || "=" === i
                  ? (n = n && o.isEqual(e))
                  : ">" === i
                    ? (n = n && e.hasPrecedenceOver(o))
                    : ">=" === i
                      ? (n = n && (e.hasPrecedenceOver(o) || o.isEqual(e)))
                      : "<" === i
                        ? (n = n && o.hasPrecedenceOver(e))
                        : "<=" === i
                          ? (n = n && (o.hasPrecedenceOver(e) || o.isEqual(e)))
                          : "^" === i && (n = n && o.isCompatibleWith(e));
            }
            if (n) return !0;
          }
          return !1;
        }
        static fromRequirementString(e) {
          const t = e.split(" ");
          let n = [];
          const r = [];
          for (let e = 0; e < t.length; e += 1)
            if ("||" === t[e]) n.length > 0 && (r.push(n), (n = []));
            else if (t[e].length > 0) {
              const r = /[0-9]/.exec(t[e]);
              if (r) {
                const i = t[e].slice(0, r.index).trim(),
                  o = Re.fromSemver(t[e].slice(r.index).trim());
                n.push({ comparator: i, version: o });
              }
            }
          return n.length > 0 && r.push(n), new Fe(r);
        }
      }
      class Te {
        constructor(e) {
          (this.sources = {}),
            (this.config = {}),
            (this.invoked = !1),
            (this.newestName = null),
            (this.conflict = null),
            null != e &&
              (e instanceof Te
                ? ((this.sources = e.sources),
                  (this.config = e.config),
                  (this.invoked = e.invoked),
                  (this.conflict = e.conflict),
                  (this.newestName = e.newestName),
                  e.superseded())
                : e.constructor === Object && e.config instanceof Object
                  ? (this.config = e.config)
                  : (this.conflict = e)),
            "loading" === document.readyState
              ? window.addEventListener(
                  "DOMContentLoaded",
                  this.init.bind(this),
                )
              : window.setTimeout(this.init.bind(this), 0);
        }
        get version() {
          return "0.1.0";
        }
        registerSource(e, t) {
          this.sources[e] = t;
        }
        newestSourceName() {
          let e = null,
            t = Re.fromSemver("0.0.0");
          for (const n in this.sources)
            if (Object.prototype.hasOwnProperty.call(this.sources, n)) {
              const r = Re.fromSemver(this.sources[n].version);
              r.hasPrecedenceOver(t) && ((e = n), (t = r));
            }
          return e;
        }
        init() {
          if (!this.invoked) {
            if (
              ((this.invoked = !0),
              (this.newestName = this.newestSourceName()),
              null === this.newestName)
            )
              throw new Error("No registered Ruffle source!");
            !1 !== this.config.polyfills &&
              this.sources[this.newestName].polyfill(
                "extension" === this.newestName,
              );
          }
        }
        newest() {
          const e = this.newestSourceName();
          return null != e ? this.sources[e] : null;
        }
        satisfying(e) {
          const t = Fe.fromRequirementString(e);
          let n = null;
          for (const e in this.sources)
            if (Object.prototype.hasOwnProperty.call(this.sources, e)) {
              const r = Re.fromSemver(this.sources[e].version);
              t.satisfiedBy(r) && (n = this.sources[e]);
            }
          return n;
        }
        localCompatible() {
          return void 0 !== this.sources.local
            ? this.satisfying("^" + this.sources.local.version)
            : this.newest();
        }
        local() {
          return void 0 !== this.sources.local
            ? this.satisfying("=" + this.sources.local.version)
            : this.newest();
        }
        superseded() {
          this.invoked = !0;
        }
        static negotiate(e, t, n) {
          let r;
          return (
            (r = e instanceof Te ? e : new Te(e)),
            void 0 !== t &&
              void 0 !== n &&
              (r.registerSource(t, n),
              !1 !== r.config.polyfills && n.pluginPolyfill()),
            r
          );
        }
      }
      window.RufflePlayer = Te.negotiate(
        window.RufflePlayer,
        "local",
        new (class {
          constructor(e) {
            this.name = e;
          }
          get version() {
            return "0.1.0";
          }
          polyfill(e) {
            !(function (e) {
              (pe = e),
                Se(),
                Ce(),
                new MutationObserver(function (e) {
                  e.some((e) => e.addedNodes.length > 0) && (Se(), Ce());
                }).observe(document, { childList: !0, subtree: !0 });
            })(e);
          }
          pluginPolyfill() {
            !(function (e) {
              ("install" in navigator.plugins && navigator.plugins.install) ||
                Object.defineProperty(navigator, "plugins", {
                  value: new J(navigator.plugins),
                  writable: !1,
                }),
                navigator.plugins.install(e),
                !(e.length > 0) ||
                  ("install" in navigator.mimeTypes &&
                    navigator.mimeTypes.install) ||
                  Object.defineProperty(navigator, "mimeTypes", {
                    value: new G(navigator.mimeTypes),
                    writable: !1,
                  });
              const t = navigator.mimeTypes;
              for (let n = 0; n < e.length; n += 1) t.install(e[n]);
            })(Q);
          }
          createPlayer() {
            const e = K("ruffle-player", ce);
            return document.createElement(e);
          }
        })("local"),
      );
    })();
})();
//# sourceMappingURL=ruffle.js.map
