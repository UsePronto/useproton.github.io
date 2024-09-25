(window._gsQueue || (window._gsQueue = [])).push(function () {
  "use strict";
  window._gsDefine(
    "TweenMax",
    ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function (t, e, i) {
      var s = [].slice,
        r = function (t, e, s) {
          i.call(this, t, e, s),
            (this._cycle = 0),
            (this._yoyo = this.vars.yoyo === !0),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            (this._dirty = !0),
            (this.render = r.prototype.render);
        },
        n = 1e-10,
        a = i._internals.isSelector,
        o = i._internals.isArray,
        h = (r.prototype = i.to({}, 0.1, {})),
        l = [];
      (r.version = "1.11.4"),
        (h.constructor = r),
        (h.kill()._gc = !1),
        (r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf),
        (r.getTweensOf = i.getTweensOf),
        (r.ticker = i.ticker),
        (h.invalidate = function () {
          return (
            (this._yoyo = this.vars.yoyo === !0),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            this._uncache(!0),
            i.prototype.invalidate.call(this)
          );
        }),
        (h.updateTo = function (t, e) {
          var s,
            r = this.ratio;
          e &&
            this._startTime < this._timeline._time &&
            ((this._startTime = this._timeline._time),
            this._uncache(!1),
            this._gc
              ? this._enabled(!0, !1)
              : this._timeline.insert(this, this._startTime - this._delay));
          for (s in t) this.vars[s] = t[s];
          if (this._initted)
            if (e) this._initted = !1;
            else if (
              (this._gc && this._enabled(!0, !1),
              this._notifyPluginsOfEnabled &&
                this._firstPT &&
                i._onPluginEvent("_onDisable", this),
              this._time / this._duration > 0.998)
            ) {
              var n = this._time;
              this.render(0, !0, !1),
                (this._initted = !1),
                this.render(n, !0, !1);
            } else if (this._time > 0) {
              (this._initted = !1), this._init();
              for (var a, o = 1 / (1 - r), h = this._firstPT; h; )
                (a = h.s + h.c), (h.c *= o), (h.s = a - h.c), (h = h._next);
            }
          return this;
        }),
        (h.render = function (t, e, i) {
          this._initted ||
            (0 === this._duration && this.vars.repeat && this.invalidate());
          var s,
            r,
            a,
            o,
            h,
            _,
            u,
            p,
            c = this._dirty ? this.totalDuration() : this._totalDuration,
            f = this._time,
            m = this._totalTime,
            d = this._cycle,
            g = this._duration;
          if (
            (t >= c
              ? ((this._totalTime = c),
                (this._cycle = this._repeat),
                this._yoyo && 0 !== (1 & this._cycle)
                  ? ((this._time = 0),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(0)
                      : 0))
                  : ((this._time = g),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(1)
                      : 1)),
                this._reversed || ((s = !0), (r = "onComplete")),
                0 === g &&
                  ((p = this._rawPrevTime),
                  (0 === t || p < 0 || p === n) &&
                    p !== t &&
                    ((i = !0), p > n && (r = "onReverseComplete")),
                  (this._rawPrevTime = p = !e || t || 0 === p ? t : n)))
              : t < 1e-7
                ? ((this._totalTime = this._time = this._cycle = 0),
                  (this.ratio = this._ease._calcEnd
                    ? this._ease.getRatio(0)
                    : 0),
                  (0 !== m || (0 === g && this._rawPrevTime > n)) &&
                    ((r = "onReverseComplete"), (s = this._reversed)),
                  t < 0
                    ? ((this._active = !1),
                      0 === g &&
                        (this._rawPrevTime >= 0 && (i = !0),
                        (this._rawPrevTime = p =
                          !e || t || 0 === this._rawPrevTime ? t : n)))
                    : this._initted || (i = !0))
                : ((this._totalTime = this._time = t),
                  0 !== this._repeat &&
                    ((o = g + this._repeatDelay),
                    (this._cycle = (this._totalTime / o) >> 0),
                    0 !== this._cycle &&
                      this._cycle === this._totalTime / o &&
                      this._cycle--,
                    (this._time = this._totalTime - this._cycle * o),
                    this._yoyo &&
                      0 !== (1 & this._cycle) &&
                      (this._time = g - this._time),
                    this._time > g
                      ? (this._time = g)
                      : this._time < 0 && (this._time = 0)),
                  this._easeType
                    ? ((h = this._time / g),
                      (_ = this._easeType),
                      (u = this._easePower),
                      (1 === _ || (3 === _ && h >= 0.5)) && (h = 1 - h),
                      3 === _ && (h *= 2),
                      1 === u
                        ? (h *= h)
                        : 2 === u
                          ? (h *= h * h)
                          : 3 === u
                            ? (h *= h * h * h)
                            : 4 === u && (h *= h * h * h * h),
                      1 === _
                        ? (this.ratio = 1 - h)
                        : 2 === _
                          ? (this.ratio = h)
                          : this._time / g < 0.5
                            ? (this.ratio = h / 2)
                            : (this.ratio = 1 - h / 2))
                    : (this.ratio = this._ease.getRatio(this._time / g))),
            f === this._time && !i && d === this._cycle)
          )
            return void (
              m !== this._totalTime &&
              this._onUpdate &&
              (e ||
                this._onUpdate.apply(
                  this.vars.onUpdateScope || this,
                  this.vars.onUpdateParams || l,
                ))
            );
          if (!this._initted) {
            if ((this._init(), !this._initted || this._gc)) return;
            this._time && !s
              ? (this.ratio = this._ease.getRatio(this._time / g))
              : s &&
                this._ease._calcEnd &&
                (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
          }
          for (
            this._active ||
              (!this._paused &&
                this._time !== f &&
                t >= 0 &&
                (this._active = !0)),
              0 === m &&
                (this._startAt &&
                  (t >= 0
                    ? this._startAt.render(t, e, i)
                    : r || (r = "_dummyGS")),
                this.vars.onStart &&
                  ((0 === this._totalTime && 0 !== g) ||
                    e ||
                    this.vars.onStart.apply(
                      this.vars.onStartScope || this,
                      this.vars.onStartParams || l,
                    ))),
              a = this._firstPT;
            a;

          )
            a.f
              ? a.t[a.p](a.c * this.ratio + a.s)
              : (a.t[a.p] = a.c * this.ratio + a.s),
              (a = a._next);
          this._onUpdate &&
            (t < 0 &&
              this._startAt &&
              this._startTime &&
              this._startAt.render(t, e, i),
            e ||
              ((this._totalTime !== m || s) &&
                this._onUpdate.apply(
                  this.vars.onUpdateScope || this,
                  this.vars.onUpdateParams || l,
                ))),
            this._cycle !== d &&
              (e ||
                this._gc ||
                (this.vars.onRepeat &&
                  this.vars.onRepeat.apply(
                    this.vars.onRepeatScope || this,
                    this.vars.onRepeatParams || l,
                  ))),
            r &&
              (this._gc ||
                (t < 0 &&
                  this._startAt &&
                  !this._onUpdate &&
                  this._startTime &&
                  this._startAt.render(t, e, i),
                s &&
                  (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                  (this._active = !1)),
                !e &&
                  this.vars[r] &&
                  this.vars[r].apply(
                    this.vars[r + "Scope"] || this,
                    this.vars[r + "Params"] || l,
                  ),
                0 === g &&
                  this._rawPrevTime === n &&
                  p !== n &&
                  (this._rawPrevTime = 0)));
        }),
        (r.to = function (t, e, i) {
          return new r(t, e, i);
        }),
        (r.from = function (t, e, i) {
          return (
            (i.runBackwards = !0),
            (i.immediateRender = 0 != i.immediateRender),
            new r(t, e, i)
          );
        }),
        (r.fromTo = function (t, e, i, s) {
          return (
            (s.startAt = i),
            (s.immediateRender =
              0 != s.immediateRender && 0 != i.immediateRender),
            new r(t, e, s)
          );
        }),
        (r.staggerTo = r.allTo =
          function (t, e, n, h, _, u, p) {
            h = h || 0;
            var c,
              f,
              m,
              d,
              g = n.delay || 0,
              v = [],
              y = function () {
                n.onComplete &&
                  n.onComplete.apply(n.onCompleteScope || this, arguments),
                  _.apply(p || this, u || l);
              };
            for (
              o(t) ||
                ("string" == typeof t && (t = i.selector(t) || t),
                a(t) && (t = s.call(t, 0))),
                c = t.length,
                m = 0;
              m < c;
              m++
            ) {
              f = {};
              for (d in n) f[d] = n[d];
              (f.delay = g),
                m === c - 1 && _ && (f.onComplete = y),
                (v[m] = new r(t[m], e, f)),
                (g += h);
            }
            return v;
          }),
        (r.staggerFrom = r.allFrom =
          function (t, e, i, s, n, a, o) {
            return (
              (i.runBackwards = !0),
              (i.immediateRender = 0 != i.immediateRender),
              r.staggerTo(t, e, i, s, n, a, o)
            );
          }),
        (r.staggerFromTo = r.allFromTo =
          function (t, e, i, s, n, a, o, h) {
            return (
              (s.startAt = i),
              (s.immediateRender =
                0 != s.immediateRender && 0 != i.immediateRender),
              r.staggerTo(t, e, s, n, a, o, h)
            );
          }),
        (r.delayedCall = function (t, e, i, s, n) {
          return new r(e, 0, {
            delay: t,
            onComplete: e,
            onCompleteParams: i,
            onCompleteScope: s,
            onReverseComplete: e,
            onReverseCompleteParams: i,
            onReverseCompleteScope: s,
            immediateRender: !1,
            useFrames: n,
            overwrite: 0,
          });
        }),
        (r.set = function (t, e) {
          return new r(t, 0, e);
        }),
        (r.isTweening = function (t) {
          return i.getTweensOf(t, !0).length > 0;
        });
      var _ = function (t, e) {
          for (var s = [], r = 0, n = t._first; n; )
            n instanceof i
              ? (s[r++] = n)
              : (e && (s[r++] = n), (s = s.concat(_(n, e))), (r = s.length)),
              (n = n._next);
          return s;
        },
        u = (r.getAllTweens = function (e) {
          return _(t._rootTimeline, e).concat(_(t._rootFramesTimeline, e));
        });
      (r.killAll = function (t, i, s, r) {
        null == i && (i = !0), null == s && (s = !0);
        var n,
          a,
          o,
          h = u(0 != r),
          l = h.length,
          _ = i && s && r;
        for (o = 0; o < l; o++)
          (a = h[o]),
            (_ ||
              a instanceof e ||
              ((n = a.target === a.vars.onComplete) && s) ||
              (i && !n)) &&
              (t ? a.totalTime(a.totalDuration()) : a._enabled(!1, !1));
      }),
        (r.killChildTweensOf = function (t, e) {
          if (null != t) {
            var n,
              h,
              l,
              _,
              u,
              p = i._tweenLookup;
            if (
              ("string" == typeof t && (t = i.selector(t) || t),
              a(t) && (t = s.call(t, 0)),
              o(t))
            )
              for (_ = t.length; --_ > -1; ) r.killChildTweensOf(t[_], e);
            else {
              n = [];
              for (l in p)
                for (h = p[l].target.parentNode; h; )
                  h === t && (n = n.concat(p[l].tweens)), (h = h.parentNode);
              for (u = n.length, _ = 0; _ < u; _++)
                e && n[_].totalTime(n[_].totalDuration()),
                  n[_]._enabled(!1, !1);
            }
          }
        });
      var p = function (t, i, s, r) {
        (i = i !== !1), (s = s !== !1), (r = r !== !1);
        for (var n, a, o = u(r), h = i && s && r, l = o.length; --l > -1; )
          (a = o[l]),
            (h ||
              a instanceof e ||
              ((n = a.target === a.vars.onComplete) && s) ||
              (i && !n)) &&
              a.paused(t);
      };
      return (
        (r.pauseAll = function (t, e, i) {
          p(!0, t, e, i);
        }),
        (r.resumeAll = function (t, e, i) {
          p(!1, t, e, i);
        }),
        (r.globalTimeScale = function (e) {
          var s = t._rootTimeline,
            r = i.ticker.time;
          return arguments.length
            ? ((e = e || n),
              (s._startTime = r - ((r - s._startTime) * s._timeScale) / e),
              (s = t._rootFramesTimeline),
              (r = i.ticker.frame),
              (s._startTime = r - ((r - s._startTime) * s._timeScale) / e),
              (s._timeScale = t._rootTimeline._timeScale = e),
              e)
            : s._timeScale;
        }),
        (h._progress = function (t) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) +
                  this._cycle * (this._duration + this._repeatDelay),
                !1,
              )
            : this._time / this.duration();
        }),
        (h.totalProgress = function (t) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * t, !1)
            : this._totalTime / this.totalDuration();
        }),
        (h.time = function (t, e) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              t > this._duration && (t = this._duration),
              this._yoyo && 0 !== (1 & this._cycle)
                ? (t =
                    this._duration -
                    t +
                    this._cycle * (this._duration + this._repeatDelay))
                : 0 !== this._repeat &&
                  (t += this._cycle * (this._duration + this._repeatDelay)),
              this.totalTime(t, e))
            : this._time;
        }),
        (h.duration = function (e) {
          return arguments.length
            ? t.prototype.duration.call(this, e)
            : this._duration;
        }),
        (h.totalDuration = function (t) {
          return arguments.length
            ? this._repeat === -1
              ? this
              : this.duration(
                  (t - this._repeat * this._repeatDelay) / (this._repeat + 1),
                )
            : (this._dirty &&
                ((this._totalDuration =
                  this._repeat === -1
                    ? 999999999999
                    : this._duration * (this._repeat + 1) +
                      this._repeatDelay * this._repeat),
                (this._dirty = !1)),
              this._totalDuration);
        }),
        (h.repeat = function (t) {
          return arguments.length
            ? ((this._repeat = t), this._uncache(!0))
            : this._repeat;
        }),
        (h.repeatDelay = function (t) {
          return arguments.length
            ? ((this._repeatDelay = t), this._uncache(!0))
            : this._repeatDelay;
        }),
        (h.yoyo = function (t) {
          return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
        }),
        r
      );
    },
    !0,
  ),
    window._gsDefine(
      "TimelineLite",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function (t, e, i) {
        var s = function (t) {
            e.call(this, t),
              (this._labels = {}),
              (this.autoRemoveChildren = this.vars.autoRemoveChildren === !0),
              (this.smoothChildTiming = this.vars.smoothChildTiming === !0),
              (this._sortChildren = !0),
              (this._onUpdate = this.vars.onUpdate);
            var i,
              s,
              r = this.vars;
            for (s in r)
              (i = r[s]),
                a(i) &&
                  i.join("").indexOf("{self}") !== -1 &&
                  (r[s] = this._swapSelfInParams(i));
            a(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger);
          },
          r = 1e-10,
          n = i._internals.isSelector,
          a = i._internals.isArray,
          o = [],
          h = function (t) {
            var e,
              i = {};
            for (e in t) i[e] = t[e];
            return i;
          },
          l = function (t, e, i, s) {
            t._timeline.pause(t._startTime),
              e && e.apply(s || t._timeline, i || o);
          },
          _ = o.slice,
          u = (s.prototype = new e());
        return (
          (s.version = "1.11.4"),
          (u.constructor = s),
          (u.kill()._gc = !1),
          (u.to = function (t, e, s, r) {
            return e ? this.add(new i(t, e, s), r) : this.set(t, s, r);
          }),
          (u.from = function (t, e, s, r) {
            return this.add(i.from(t, e, s), r);
          }),
          (u.fromTo = function (t, e, s, r, n) {
            return e ? this.add(i.fromTo(t, e, s, r), n) : this.set(t, r, n);
          }),
          (u.staggerTo = function (t, e, r, a, o, l, u, p) {
            var c,
              f = new s({
                onComplete: l,
                onCompleteParams: u,
                onCompleteScope: p,
                smoothChildTiming: this.smoothChildTiming,
              });
            for (
              "string" == typeof t && (t = i.selector(t) || t),
                n(t) && (t = _.call(t, 0)),
                a = a || 0,
                c = 0;
              c < t.length;
              c++
            )
              r.startAt && (r.startAt = h(r.startAt)),
                f.to(t[c], e, h(r), c * a);
            return this.add(f, o);
          }),
          (u.staggerFrom = function (t, e, i, s, r, n, a, o) {
            return (
              (i.immediateRender = 0 != i.immediateRender),
              (i.runBackwards = !0),
              this.staggerTo(t, e, i, s, r, n, a, o)
            );
          }),
          (u.staggerFromTo = function (t, e, i, s, r, n, a, o, h) {
            return (
              (s.startAt = i),
              (s.immediateRender =
                0 != s.immediateRender && 0 != i.immediateRender),
              this.staggerTo(t, e, s, r, n, a, o, h)
            );
          }),
          (u.call = function (t, e, s, r) {
            return this.add(i.delayedCall(0, t, e, s), r);
          }),
          (u.set = function (t, e, s) {
            return (
              (s = this._parseTimeOrLabel(s, 0, !0)),
              null == e.immediateRender &&
                (e.immediateRender = s === this._time && !this._paused),
              this.add(new i(t, 0, e), s)
            );
          }),
          (s.exportRoot = function (t, e) {
            (t = t || {}),
              null == t.smoothChildTiming && (t.smoothChildTiming = !0);
            var r,
              n,
              a = new s(t),
              o = a._timeline;
            for (
              null == e && (e = !0),
                o._remove(a, !0),
                a._startTime = 0,
                a._rawPrevTime = a._time = a._totalTime = o._time,
                r = o._first;
              r;

            )
              (n = r._next),
                (e && r instanceof i && r.target === r.vars.onComplete) ||
                  a.add(r, r._startTime - r._delay),
                (r = n);
            return o.add(a, 0), a;
          }),
          (u.add = function (r, n, o, h) {
            var l, _, u, p, c, f;
            if (
              ("number" != typeof n &&
                (n = this._parseTimeOrLabel(n, 0, !0, r)),
              !(r instanceof t))
            ) {
              if (r instanceof Array || (r && r.push && a(r))) {
                for (
                  o = o || "normal", h = h || 0, l = n, _ = r.length, u = 0;
                  u < _;
                  u++
                )
                  a((p = r[u])) && (p = new s({ tweens: p })),
                    this.add(p, l),
                    "string" != typeof p &&
                      "function" != typeof p &&
                      ("sequence" === o
                        ? (l = p._startTime + p.totalDuration() / p._timeScale)
                        : "start" === o && (p._startTime -= p.delay())),
                    (l += h);
                return this._uncache(!0);
              }
              if ("string" == typeof r) return this.addLabel(r, n);
              if ("function" != typeof r)
                throw (
                  "Cannot add " +
                  r +
                  " into the timeline; it is not a tween, timeline, function, or string."
                );
              r = i.delayedCall(0, r);
            }
            if (
              (e.prototype.add.call(this, r, n),
              this._gc && !this._paused && this._duration < this.duration())
            )
              for (
                c = this, f = c.rawTime() > r._startTime;
                c._gc && c._timeline;

              )
                c._timeline.smoothChildTiming && f
                  ? c.totalTime(c._totalTime, !0)
                  : c._enabled(!0, !1),
                  (c = c._timeline);
            return this;
          }),
          (u.remove = function (e) {
            if (e instanceof t) return this._remove(e, !1);
            if (e instanceof Array || (e && e.push && a(e))) {
              for (var i = e.length; --i > -1; ) this.remove(e[i]);
              return this;
            }
            return "string" == typeof e
              ? this.removeLabel(e)
              : this.kill(null, e);
          }),
          (u._remove = function (t, i) {
            e.prototype._remove.call(this, t, i);
            var s = this._last;
            return (
              s
                ? this._time > s._startTime + s._totalDuration / s._timeScale &&
                  ((this._time = this.duration()),
                  (this._totalTime = this._totalDuration))
                : (this._time = this._totalTime = 0),
              this
            );
          }),
          (u.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
          }),
          (u.insert = u.insertMultiple =
            function (t, e, i, s) {
              return this.add(t, e || 0, i, s);
            }),
          (u.appendMultiple = function (t, e, i, s) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s);
          }),
          (u.addLabel = function (t, e) {
            return (this._labels[t] = this._parseTimeOrLabel(e)), this;
          }),
          (u.addPause = function (t, e, i, s) {
            return this.call(l, ["{self}", e, i, s], this, t);
          }),
          (u.removeLabel = function (t) {
            return delete this._labels[t], this;
          }),
          (u.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1;
          }),
          (u._parseTimeOrLabel = function (e, i, s, r) {
            var n;
            if (r instanceof t && r.timeline === this) this.remove(r);
            else if (r && (r instanceof Array || (r.push && a(r))))
              for (n = r.length; --n > -1; )
                r[n] instanceof t &&
                  r[n].timeline === this &&
                  this.remove(r[n]);
            if ("string" == typeof i)
              return this._parseTimeOrLabel(
                i,
                s && "number" == typeof e && null == this._labels[i]
                  ? e - this.duration()
                  : 0,
                s,
              );
            if (
              ((i = i || 0),
              "string" != typeof e || (!isNaN(e) && null == this._labels[e]))
            )
              null == e && (e = this.duration());
            else {
              if (((n = e.indexOf("=")), n === -1))
                return null == this._labels[e]
                  ? s
                    ? (this._labels[e] = this.duration() + i)
                    : i
                  : this._labels[e] + i;
              (i =
                parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1))),
                (e =
                  n > 1
                    ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s)
                    : this.duration());
            }
            return Number(e) + i;
          }),
          (u.seek = function (t, e) {
            return this.totalTime(
              "number" == typeof t ? t : this._parseTimeOrLabel(t),
              e !== !1,
            );
          }),
          (u.stop = function () {
            return this.paused(!0);
          }),
          (u.gotoAndPlay = function (t, e) {
            return this.play(t, e);
          }),
          (u.gotoAndStop = function (t, e) {
            return this.pause(t, e);
          }),
          (u.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s,
              n,
              a,
              h,
              l,
              _ = this._dirty ? this.totalDuration() : this._totalDuration,
              u = this._time,
              p = this._startTime,
              c = this._timeScale,
              f = this._paused;
            if (
              (t >= _
                ? ((this._totalTime = this._time = _),
                  this._reversed ||
                    this._hasPausedChild() ||
                    ((n = !0),
                    (h = "onComplete"),
                    0 === this._duration &&
                      (0 === t ||
                        this._rawPrevTime < 0 ||
                        this._rawPrevTime === r) &&
                      this._rawPrevTime !== t &&
                      this._first &&
                      ((l = !0),
                      this._rawPrevTime > r && (h = "onReverseComplete"))),
                  (this._rawPrevTime =
                    this._duration || !e || t || 0 === this._rawPrevTime
                      ? t
                      : r),
                  (t = _ + 1e-4))
                : t < 1e-7
                  ? ((this._totalTime = this._time = 0),
                    (0 !== u ||
                      (0 === this._duration &&
                        (this._rawPrevTime > r ||
                          (t < 0 && this._rawPrevTime >= 0)))) &&
                      ((h = "onReverseComplete"), (n = this._reversed)),
                    t < 0
                      ? ((this._active = !1),
                        0 === this._duration &&
                          this._rawPrevTime >= 0 &&
                          this._first &&
                          (l = !0),
                        (this._rawPrevTime = t))
                      : ((this._rawPrevTime =
                          this._duration || !e || t || 0 === this._rawPrevTime
                            ? t
                            : r),
                        (t = 0),
                        this._initted || (l = !0)))
                  : (this._totalTime = this._time = this._rawPrevTime = t),
              (this._time !== u && this._first) || i || l)
            ) {
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._time !== u &&
                    t > 0 &&
                    (this._active = !0)),
                0 === u &&
                  this.vars.onStart &&
                  0 !== this._time &&
                  (e ||
                    this.vars.onStart.apply(
                      this.vars.onStartScope || this,
                      this.vars.onStartParams || o,
                    )),
                this._time >= u)
              )
                for (
                  s = this._first;
                  s && ((a = s._next), !this._paused || f);

                )
                  (s._active ||
                    (s._startTime <= this._time && !s._paused && !s._gc)) &&
                    (s._reversed
                      ? s.render(
                          (s._dirty ? s.totalDuration() : s._totalDuration) -
                            (t - s._startTime) * s._timeScale,
                          e,
                          i,
                        )
                      : s.render((t - s._startTime) * s._timeScale, e, i)),
                    (s = a);
              else
                for (s = this._last; s && ((a = s._prev), !this._paused || f); )
                  (s._active || (s._startTime <= u && !s._paused && !s._gc)) &&
                    (s._reversed
                      ? s.render(
                          (s._dirty ? s.totalDuration() : s._totalDuration) -
                            (t - s._startTime) * s._timeScale,
                          e,
                          i,
                        )
                      : s.render((t - s._startTime) * s._timeScale, e, i)),
                    (s = a);
              this._onUpdate &&
                (e ||
                  this._onUpdate.apply(
                    this.vars.onUpdateScope || this,
                    this.vars.onUpdateParams || o,
                  )),
                h &&
                  (this._gc ||
                    (p !== this._startTime && c === this._timeScale) ||
                    ((0 === this._time || _ >= this.totalDuration()) &&
                      (n &&
                        (this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !e &&
                        this.vars[h] &&
                        this.vars[h].apply(
                          this.vars[h + "Scope"] || this,
                          this.vars[h + "Params"] || o,
                        ))));
            }
          }),
          (u._hasPausedChild = function () {
            for (var t = this._first; t; ) {
              if (t._paused || (t instanceof s && t._hasPausedChild()))
                return !0;
              t = t._next;
            }
            return !1;
          }),
          (u.getChildren = function (t, e, s, r) {
            r = r || -9999999999;
            for (var n = [], a = this._first, o = 0; a; )
              a._startTime < r ||
                (a instanceof i
                  ? e !== !1 && (n[o++] = a)
                  : (s !== !1 && (n[o++] = a),
                    t !== !1 &&
                      ((n = n.concat(a.getChildren(!0, e, s))),
                      (o = n.length)))),
                (a = a._next);
            return n;
          }),
          (u.getTweensOf = function (t, e) {
            for (
              var s = i.getTweensOf(t), r = s.length, n = [], a = 0;
              --r > -1;

            )
              (s[r].timeline === this || (e && this._contains(s[r]))) &&
                (n[a++] = s[r]);
            return n;
          }),
          (u._contains = function (t) {
            for (var e = t.timeline; e; ) {
              if (e === this) return !0;
              e = e.timeline;
            }
            return !1;
          }),
          (u.shiftChildren = function (t, e, i) {
            i = i || 0;
            for (var s, r = this._first, n = this._labels; r; )
              r._startTime >= i && (r._startTime += t), (r = r._next);
            if (e) for (s in n) n[s] >= i && (n[s] += t);
            return this._uncache(!0);
          }),
          (u._kill = function (t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (
              var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1),
                s = i.length,
                r = !1;
              --s > -1;

            )
              i[s]._kill(t, e) && (r = !0);
            return r;
          }),
          (u.clear = function (t) {
            var e = this.getChildren(!1, !0, !0),
              i = e.length;
            for (this._time = this._totalTime = 0; --i > -1; )
              e[i]._enabled(!1, !1);
            return t !== !1 && (this._labels = {}), this._uncache(!0);
          }),
          (u.invalidate = function () {
            for (var t = this._first; t; ) t.invalidate(), (t = t._next);
            return this;
          }),
          (u._enabled = function (t, i) {
            if (t === this._gc)
              for (var s = this._first; s; ) s._enabled(t, !0), (s = s._next);
            return e.prototype._enabled.call(this, t, i);
          }),
          (u.duration = function (t) {
            return arguments.length
              ? (0 !== this.duration() &&
                  0 !== t &&
                  this.timeScale(this._duration / t),
                this)
              : (this._dirty && this.totalDuration(), this._duration);
          }),
          (u.totalDuration = function (t) {
            if (!arguments.length) {
              if (this._dirty) {
                for (var e, i, s = 0, r = this._last, n = 999999999999; r; )
                  (e = r._prev),
                    r._dirty && r.totalDuration(),
                    r._startTime > n && this._sortChildren && !r._paused
                      ? this.add(r, r._startTime - r._delay)
                      : (n = r._startTime),
                    r._startTime < 0 &&
                      !r._paused &&
                      ((s -= r._startTime),
                      this._timeline.smoothChildTiming &&
                        (this._startTime += r._startTime / this._timeScale),
                      this.shiftChildren(-r._startTime, !1, -9999999999),
                      (n = 0)),
                    (i = r._startTime + r._totalDuration / r._timeScale),
                    i > s && (s = i),
                    (r = e);
                (this._duration = this._totalDuration = s), (this._dirty = !1);
              }
              return this._totalDuration;
            }
            return (
              0 !== this.totalDuration() &&
                0 !== t &&
                this.timeScale(this._totalDuration / t),
              this
            );
          }),
          (u.usesFrames = function () {
            for (var e = this._timeline; e._timeline; ) e = e._timeline;
            return e === t._rootFramesTimeline;
          }),
          (u.rawTime = function () {
            return this._paused
              ? this._totalTime
              : (this._timeline.rawTime() - this._startTime) * this._timeScale;
          }),
          s
        );
      },
      !0,
    ),
    window._gsDefine(
      "TimelineMax",
      ["TimelineLite", "TweenLite", "easing.Ease"],
      function (t, e, i) {
        var s = function (e) {
            t.call(this, e),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._cycle = 0),
              (this._yoyo = this.vars.yoyo === !0),
              (this._dirty = !0);
          },
          r = 1e-10,
          n = [],
          a = new i(null, null, 1, 0),
          o = (s.prototype = new t());
        return (
          (o.constructor = s),
          (o.kill()._gc = !1),
          (s.version = "1.11.4"),
          (o.invalidate = function () {
            return (
              (this._yoyo = this.vars.yoyo === !0),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._uncache(!0),
              t.prototype.invalidate.call(this)
            );
          }),
          (o.addCallback = function (t, i, s, r) {
            return this.add(e.delayedCall(0, t, s, r), i);
          }),
          (o.removeCallback = function (t, e) {
            if (t)
              if (null == e) this._kill(null, t);
              else
                for (
                  var i = this.getTweensOf(t, !1),
                    s = i.length,
                    r = this._parseTimeOrLabel(e);
                  --s > -1;

                )
                  i[s]._startTime === r && i[s]._enabled(!1, !1);
            return this;
          }),
          (o.tweenTo = function (t, i) {
            i = i || {};
            var s,
              r,
              o,
              h = {
                ease: a,
                overwrite: 2,
                useFrames: this.usesFrames(),
                immediateRender: !1,
              };
            for (r in i) h[r] = i[r];
            return (
              (h.time = this._parseTimeOrLabel(t)),
              (s =
                Math.abs(Number(h.time) - this._time) / this._timeScale ||
                0.001),
              (o = new e(this, s, h)),
              (h.onStart = function () {
                o.target.paused(!0),
                  o.vars.time !== o.target.time() &&
                    s === o.duration() &&
                    o.duration(
                      Math.abs(o.vars.time - o.target.time()) /
                        o.target._timeScale,
                    ),
                  i.onStart &&
                    i.onStart.apply(i.onStartScope || o, i.onStartParams || n);
              }),
              o
            );
          }),
          (o.tweenFromTo = function (t, e, i) {
            (i = i || {}),
              (t = this._parseTimeOrLabel(t)),
              (i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                onCompleteScope: this,
              }),
              (i.immediateRender = i.immediateRender !== !1);
            var s = this.tweenTo(e, i);
            return s.duration(
              Math.abs(s.vars.time - t) / this._timeScale || 0.001,
            );
          }),
          (o.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s,
              a,
              o,
              h,
              l,
              _,
              u = this._dirty ? this.totalDuration() : this._totalDuration,
              p = this._duration,
              c = this._time,
              f = this._totalTime,
              m = this._startTime,
              d = this._timeScale,
              g = this._rawPrevTime,
              v = this._paused,
              y = this._cycle;
            if (
              (t >= u
                ? (this._locked ||
                    ((this._totalTime = u), (this._cycle = this._repeat)),
                  this._reversed ||
                    this._hasPausedChild() ||
                    ((a = !0),
                    (h = "onComplete"),
                    0 === this._duration &&
                      (0 === t || g < 0 || g === r) &&
                      g !== t &&
                      this._first &&
                      ((l = !0), g > r && (h = "onReverseComplete"))),
                  (this._rawPrevTime =
                    this._duration || !e || t || 0 === this._rawPrevTime
                      ? t
                      : r),
                  this._yoyo && 0 !== (1 & this._cycle)
                    ? (this._time = t = 0)
                    : ((this._time = p), (t = p + 1e-4)))
                : t < 1e-7
                  ? (this._locked || (this._totalTime = this._cycle = 0),
                    (this._time = 0),
                    (0 !== c ||
                      (0 === p &&
                        (g > r || (t < 0 && g >= 0)) &&
                        !this._locked)) &&
                      ((h = "onReverseComplete"), (a = this._reversed)),
                    t < 0
                      ? ((this._active = !1),
                        0 === p && g >= 0 && this._first && (l = !0),
                        (this._rawPrevTime = t))
                      : ((this._rawPrevTime =
                          p || !e || t || 0 === this._rawPrevTime ? t : r),
                        (t = 0),
                        this._initted || (l = !0)))
                  : (0 === p && g < 0 && (l = !0),
                    (this._time = this._rawPrevTime = t),
                    this._locked ||
                      ((this._totalTime = t),
                      0 !== this._repeat &&
                        ((_ = p + this._repeatDelay),
                        (this._cycle = (this._totalTime / _) >> 0),
                        0 !== this._cycle &&
                          this._cycle === this._totalTime / _ &&
                          this._cycle--,
                        (this._time = this._totalTime - this._cycle * _),
                        this._yoyo &&
                          0 !== (1 & this._cycle) &&
                          (this._time = p - this._time),
                        this._time > p
                          ? ((this._time = p), (t = p + 1e-4))
                          : this._time < 0
                            ? (this._time = t = 0)
                            : (t = this._time)))),
              this._cycle !== y && !this._locked)
            ) {
              var T = this._yoyo && 0 !== (1 & y),
                w = T === (this._yoyo && 0 !== (1 & this._cycle)),
                x = this._totalTime,
                b = this._cycle,
                P = this._rawPrevTime,
                S = this._time;
              if (
                ((this._totalTime = y * p),
                this._cycle < y ? (T = !T) : (this._totalTime += p),
                (this._time = c),
                (this._rawPrevTime = 0 === p ? g - 1e-4 : g),
                (this._cycle = y),
                (this._locked = !0),
                (c = T ? 0 : p),
                this.render(c, e, 0 === p),
                e ||
                  this._gc ||
                  (this.vars.onRepeat &&
                    this.vars.onRepeat.apply(
                      this.vars.onRepeatScope || this,
                      this.vars.onRepeatParams || n,
                    )),
                w && ((c = T ? p + 1e-4 : -1e-4), this.render(c, !0, !1)),
                (this._locked = !1),
                this._paused && !v)
              )
                return;
              (this._time = S),
                (this._totalTime = x),
                (this._cycle = b),
                (this._rawPrevTime = P);
            }
            if (!((this._time !== c && this._first) || i || l))
              return void (
                f !== this._totalTime &&
                this._onUpdate &&
                (e ||
                  this._onUpdate.apply(
                    this.vars.onUpdateScope || this,
                    this.vars.onUpdateParams || n,
                  ))
              );
            if (
              (this._initted || (this._initted = !0),
              this._active ||
                (!this._paused &&
                  this._totalTime !== f &&
                  t > 0 &&
                  (this._active = !0)),
              0 === f &&
                this.vars.onStart &&
                0 !== this._totalTime &&
                (e ||
                  this.vars.onStart.apply(
                    this.vars.onStartScope || this,
                    this.vars.onStartParams || n,
                  )),
              this._time >= c)
            )
              for (s = this._first; s && ((o = s._next), !this._paused || v); )
                (s._active ||
                  (s._startTime <= this._time && !s._paused && !s._gc)) &&
                  (s._reversed
                    ? s.render(
                        (s._dirty ? s.totalDuration() : s._totalDuration) -
                          (t - s._startTime) * s._timeScale,
                        e,
                        i,
                      )
                    : s.render((t - s._startTime) * s._timeScale, e, i)),
                  (s = o);
            else
              for (s = this._last; s && ((o = s._prev), !this._paused || v); )
                (s._active || (s._startTime <= c && !s._paused && !s._gc)) &&
                  (s._reversed
                    ? s.render(
                        (s._dirty ? s.totalDuration() : s._totalDuration) -
                          (t - s._startTime) * s._timeScale,
                        e,
                        i,
                      )
                    : s.render((t - s._startTime) * s._timeScale, e, i)),
                  (s = o);
            this._onUpdate &&
              (e ||
                this._onUpdate.apply(
                  this.vars.onUpdateScope || this,
                  this.vars.onUpdateParams || n,
                )),
              h &&
                (this._locked ||
                  this._gc ||
                  (m !== this._startTime && d === this._timeScale) ||
                  ((0 === this._time || u >= this.totalDuration()) &&
                    (a &&
                      (this._timeline.autoRemoveChildren &&
                        this._enabled(!1, !1),
                      (this._active = !1)),
                    !e &&
                      this.vars[h] &&
                      this.vars[h].apply(
                        this.vars[h + "Scope"] || this,
                        this.vars[h + "Params"] || n,
                      ))));
          }),
          (o.getActive = function (t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var s,
              r,
              n = [],
              a = this.getChildren(t, e, i),
              o = 0,
              h = a.length;
            for (s = 0; s < h; s++) (r = a[s]), r.isActive() && (n[o++] = r);
            return n;
          }),
          (o.getLabelAfter = function (t) {
            t || (0 !== t && (t = this._time));
            var e,
              i = this.getLabelsArray(),
              s = i.length;
            for (e = 0; e < s; e++) if (i[e].time > t) return i[e].name;
            return null;
          }),
          (o.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
              if (e[i].time < t) return e[i].name;
            return null;
          }),
          (o.getLabelsArray = function () {
            var t,
              e = [],
              i = 0;
            for (t in this._labels) e[i++] = { time: this._labels[t], name: t };
            return (
              e.sort(function (t, e) {
                return t.time - e.time;
              }),
              e
            );
          }),
          (o._progress = function (t) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) +
                    this._cycle * (this._duration + this._repeatDelay),
                  !1,
                )
              : this._time / this.duration();
          }),
          (o.totalProgress = function (t) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, !1)
              : this._totalTime / this.totalDuration();
          }),
          (o.totalDuration = function (e) {
            return arguments.length
              ? this._repeat === -1
                ? this
                : this.duration(
                    (e - this._repeat * this._repeatDelay) / (this._repeat + 1),
                  )
              : (this._dirty &&
                  (t.prototype.totalDuration.call(this),
                  (this._totalDuration =
                    this._repeat === -1
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat)),
                this._totalDuration);
          }),
          (o.time = function (t, e) {
            return arguments.length
              ? (this._dirty && this.totalDuration(),
                t > this._duration && (t = this._duration),
                this._yoyo && 0 !== (1 & this._cycle)
                  ? (t =
                      this._duration -
                      t +
                      this._cycle * (this._duration + this._repeatDelay))
                  : 0 !== this._repeat &&
                    (t += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(t, e))
              : this._time;
          }),
          (o.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t), this._uncache(!0))
              : this._repeat;
          }),
          (o.repeatDelay = function (t) {
            return arguments.length
              ? ((this._repeatDelay = t), this._uncache(!0))
              : this._repeatDelay;
          }),
          (o.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (o.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.getLabelBefore(this._time + 1e-8);
          }),
          s
        );
      },
      !0,
    ),
    (function () {
      var t = 180 / Math.PI,
        e = [],
        i = [],
        s = [],
        r = {},
        n = function (t, e, i, s) {
          (this.a = t),
            (this.b = e),
            (this.c = i),
            (this.d = s),
            (this.da = s - t),
            (this.ca = i - t),
            (this.ba = e - t);
        },
        a =
          ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        o = function (t, e, i, s) {
          var r = { a: t },
            n = {},
            a = {},
            o = { c: s },
            h = (t + e) / 2,
            l = (e + i) / 2,
            _ = (i + s) / 2,
            u = (h + l) / 2,
            p = (l + _) / 2,
            c = (p - u) / 8;
          return (
            (r.b = h + (t - h) / 4),
            (n.b = u + c),
            (r.c = n.a = (r.b + n.b) / 2),
            (n.c = a.a = (u + p) / 2),
            (a.b = p - c),
            (o.b = _ + (s - _) / 4),
            (a.c = o.a = (a.b + o.b) / 2),
            [r, n, a, o]
          );
        },
        h = function (t, r, n, a, h) {
          var l,
            _,
            u,
            p,
            c,
            f,
            m,
            d,
            g,
            v,
            y,
            T,
            w,
            x = t.length - 1,
            b = 0,
            P = t[0].a;
          for (l = 0; l < x; l++)
            (c = t[b]),
              (_ = c.a),
              (u = c.d),
              (p = t[b + 1].d),
              h
                ? ((y = e[l]),
                  (T = i[l]),
                  (w = ((T + y) * r * 0.25) / (a ? 0.5 : s[l] || 0.5)),
                  (f = u - (u - _) * (a ? 0.5 * r : 0 !== y ? w / y : 0)),
                  (m = u + (p - u) * (a ? 0.5 * r : 0 !== T ? w / T : 0)),
                  (d =
                    u - (f + (((m - f) * ((3 * y) / (y + T) + 0.5)) / 4 || 0))))
                : ((f = u - (u - _) * r * 0.5),
                  (m = u + (p - u) * r * 0.5),
                  (d = u - (f + m) / 2)),
              (f += d),
              (m += d),
              (c.c = g = f),
              0 !== l ? (c.b = P) : (c.b = P = c.a + 0.6 * (c.c - c.a)),
              (c.da = u - _),
              (c.ca = g - _),
              (c.ba = P - _),
              n
                ? ((v = o(_, P, g, u)),
                  t.splice(b, 1, v[0], v[1], v[2], v[3]),
                  (b += 4))
                : b++,
              (P = m);
          (c = t[b]),
            (c.b = P),
            (c.c = P + 0.4 * (c.d - P)),
            (c.da = c.d - c.a),
            (c.ca = c.c - c.a),
            (c.ba = P - c.a),
            n &&
              ((v = o(c.a, P, c.c, c.d)),
              t.splice(b, 1, v[0], v[1], v[2], v[3]));
        },
        l = function (t, s, r, a) {
          var o,
            h,
            l,
            _,
            u,
            p,
            c = [];
          if (a)
            for (t = [a].concat(t), h = t.length; --h > -1; )
              "string" == typeof (p = t[h][s]) &&
                "=" === p.charAt(1) &&
                (t[h][s] = a[s] + Number(p.charAt(0) + p.substr(2)));
          if (((o = t.length - 2), o < 0))
            return (c[0] = new n(t[0][s], 0, 0, t[o < -1 ? 0 : 1][s])), c;
          for (h = 0; h < o; h++)
            (l = t[h][s]),
              (_ = t[h + 1][s]),
              (c[h] = new n(l, 0, 0, _)),
              r &&
                ((u = t[h + 2][s]),
                (e[h] = (e[h] || 0) + (_ - l) * (_ - l)),
                (i[h] = (i[h] || 0) + (u - _) * (u - _)));
          return (c[h] = new n(t[h][s], 0, 0, t[h + 1][s])), c;
        },
        _ = function (t, n, o, _, u, p) {
          var c,
            f,
            m,
            d,
            g,
            v,
            y,
            T,
            w = {},
            x = [],
            b = p || t[0];
          (u = "string" == typeof u ? "," + u + "," : a), null == n && (n = 1);
          for (f in t[0]) x.push(f);
          if (t.length > 1) {
            for (T = t[t.length - 1], y = !0, c = x.length; --c > -1; )
              if (((f = x[c]), Math.abs(b[f] - T[f]) > 0.05)) {
                y = !1;
                break;
              }
            y &&
              ((t = t.concat()),
              p && t.unshift(p),
              t.push(t[1]),
              (p = t[t.length - 3]));
          }
          for (e.length = i.length = s.length = 0, c = x.length; --c > -1; )
            (f = x[c]),
              (r[f] = u.indexOf("," + f + ",") !== -1),
              (w[f] = l(t, f, r[f], p));
          for (c = e.length; --c > -1; )
            (e[c] = Math.sqrt(e[c])), (i[c] = Math.sqrt(i[c]));
          if (!_) {
            for (c = x.length; --c > -1; )
              if (r[f])
                for (m = w[x[c]], v = m.length - 1, d = 0; d < v; d++)
                  (g = m[d + 1].da / i[d] + m[d].da / e[d]),
                    (s[d] = (s[d] || 0) + g * g);
            for (c = s.length; --c > -1; ) s[c] = Math.sqrt(s[c]);
          }
          for (c = x.length, d = o ? 4 : 1; --c > -1; )
            (f = x[c]),
              (m = w[f]),
              h(m, n, o, _, r[f]),
              y && (m.splice(0, d), m.splice(m.length - d, d));
          return w;
        },
        u = function (t, e, i) {
          e = e || "soft";
          var s,
            r,
            a,
            o,
            h,
            l,
            _,
            u,
            p,
            c,
            f,
            m = {},
            d = "cubic" === e ? 3 : 2,
            g = "soft" === e,
            v = [];
          if ((g && i && (t = [i].concat(t)), null == t || t.length < d + 1))
            throw "invalid Bezier data";
          for (p in t[0]) v.push(p);
          for (l = v.length; --l > -1; ) {
            for (
              p = v[l], m[p] = h = [], c = 0, u = t.length, _ = 0;
              _ < u;
              _++
            )
              (s =
                null == i
                  ? t[_][p]
                  : "string" == typeof (f = t[_][p]) && "=" === f.charAt(1)
                    ? i[p] + Number(f.charAt(0) + f.substr(2))
                    : Number(f)),
                g && _ > 1 && _ < u - 1 && (h[c++] = (s + h[c - 2]) / 2),
                (h[c++] = s);
            for (u = c - d + 1, c = 0, _ = 0; _ < u; _ += d)
              (s = h[_]),
                (r = h[_ + 1]),
                (a = h[_ + 2]),
                (o = 2 === d ? 0 : h[_ + 3]),
                (h[c++] = f =
                  3 === d
                    ? new n(s, r, a, o)
                    : new n(s, (2 * r + s) / 3, (2 * r + a) / 3, a));
            h.length = c;
          }
          return m;
        },
        p = function (t, e, i) {
          for (
            var s, r, n, a, o, h, l, _, u, p, c, f = 1 / i, m = t.length;
            --m > -1;

          )
            for (
              p = t[m],
                n = p.a,
                a = p.d - n,
                o = p.c - n,
                h = p.b - n,
                s = r = 0,
                _ = 1;
              _ <= i;
              _++
            )
              (l = f * _),
                (u = 1 - l),
                (s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l)),
                (c = m * i + _ - 1),
                (e[c] = (e[c] || 0) + s * s);
        },
        c = function (t, e) {
          e = e >> 0 || 6;
          var i,
            s,
            r,
            n,
            a = [],
            o = [],
            h = 0,
            l = 0,
            _ = e - 1,
            u = [],
            c = [];
          for (i in t) p(t[i], a, e);
          for (r = a.length, s = 0; s < r; s++)
            (h += Math.sqrt(a[s])),
              (n = s % e),
              (c[n] = h),
              n === _ &&
                ((l += h),
                (n = (s / e) >> 0),
                (u[n] = c),
                (o[n] = l),
                (h = 0),
                (c = []));
          return { length: l, lengths: o, segments: u };
        },
        f = window._gsDefine.plugin({
          propName: "bezier",
          priority: -1,
          API: 2,
          global: !0,
          init: function (t, e, i) {
            (this._target = t),
              e instanceof Array && (e = { values: e }),
              (this._func = {}),
              (this._round = {}),
              (this._props = []),
              (this._timeRes =
                null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10));
            var s,
              r,
              n,
              a,
              o,
              h = e.values || [],
              l = {},
              p = h[0],
              f = e.autoRotate || i.vars.orientToBezier;
            this._autoRotate = f
              ? f instanceof Array
                ? f
                : [["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]]
              : null;
            for (s in p) this._props.push(s);
            for (n = this._props.length; --n > -1; )
              (s = this._props[n]),
                this._overwriteProps.push(s),
                (r = this._func[s] = "function" == typeof t[s]),
                (l[s] = r
                  ? t[
                      s.indexOf("set") ||
                      "function" != typeof t["get" + s.substr(3)]
                        ? s
                        : "get" + s.substr(3)
                    ]()
                  : parseFloat(t[s])),
                o || (l[s] !== h[0][s] && (o = l));
            if (
              ((this._beziers =
                "cubic" !== e.type &&
                "quadratic" !== e.type &&
                "soft" !== e.type
                  ? _(
                      h,
                      isNaN(e.curviness) ? 1 : e.curviness,
                      !1,
                      "thruBasic" === e.type,
                      e.correlate,
                      o,
                    )
                  : u(h, e.type, l)),
              (this._segCount = this._beziers[s].length),
              this._timeRes)
            ) {
              var m = c(this._beziers, this._timeRes);
              (this._length = m.length),
                (this._lengths = m.lengths),
                (this._segments = m.segments),
                (this._l1 = this._li = this._s1 = this._si = 0),
                (this._l2 = this._lengths[0]),
                (this._curSeg = this._segments[0]),
                (this._s2 = this._curSeg[0]),
                (this._prec = 1 / this._curSeg.length);
            }
            if ((f = this._autoRotate))
              for (
                f[0] instanceof Array || (this._autoRotate = f = [f]),
                  n = f.length;
                --n > -1;

              )
                for (a = 0; a < 3; a++)
                  (s = f[n][a]),
                    (this._func[s] =
                      "function" == typeof t[s] &&
                      t[
                        s.indexOf("set") ||
                        "function" != typeof t["get" + s.substr(3)]
                          ? s
                          : "get" + s.substr(3)
                      ]);
            return !0;
          },
          set: function (e) {
            var i,
              s,
              r,
              n,
              a,
              o,
              h,
              l,
              _,
              u,
              p = this._segCount,
              c = this._func,
              f = this._target;
            if (this._timeRes) {
              if (
                ((_ = this._lengths),
                (u = this._curSeg),
                (e *= this._length),
                (r = this._li),
                e > this._l2 && r < p - 1)
              ) {
                for (l = p - 1; r < l && (this._l2 = _[++r]) <= e; );
                (this._l1 = _[r - 1]),
                  (this._li = r),
                  (this._curSeg = u = this._segments[r]),
                  (this._s2 = u[(this._s1 = this._si = 0)]);
              } else if (e < this._l1 && r > 0) {
                for (; r > 0 && (this._l1 = _[--r]) >= e; );
                0 === r && e < this._l1 ? (this._l1 = 0) : r++,
                  (this._l2 = _[r]),
                  (this._li = r),
                  (this._curSeg = u = this._segments[r]),
                  (this._s1 = u[(this._si = u.length - 1) - 1] || 0),
                  (this._s2 = u[this._si]);
              }
              if (
                ((i = r),
                (e -= this._l1),
                (r = this._si),
                e > this._s2 && r < u.length - 1)
              ) {
                for (l = u.length - 1; r < l && (this._s2 = u[++r]) <= e; );
                (this._s1 = u[r - 1]), (this._si = r);
              } else if (e < this._s1 && r > 0) {
                for (; r > 0 && (this._s1 = u[--r]) >= e; );
                0 === r && e < this._s1 ? (this._s1 = 0) : r++,
                  (this._s2 = u[r]),
                  (this._si = r);
              }
              o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec;
            } else
              (i = e < 0 ? 0 : e >= 1 ? p - 1 : (p * e) >> 0),
                (o = (e - i * (1 / p)) * p);
            for (s = 1 - o, r = this._props.length; --r > -1; )
              (n = this._props[r]),
                (a = this._beziers[n][i]),
                (h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a),
                this._round[n] && (h = (h + (h > 0 ? 0.5 : -0.5)) >> 0),
                c[n] ? f[n](h) : (f[n] = h);
            if (this._autoRotate) {
              var m,
                d,
                g,
                v,
                y,
                T,
                w,
                x = this._autoRotate;
              for (r = x.length; --r > -1; )
                (n = x[r][2]),
                  (T = x[r][3] || 0),
                  (w = x[r][4] === !0 ? 1 : t),
                  (a = this._beziers[x[r][0]]),
                  (m = this._beziers[x[r][1]]),
                  a &&
                    m &&
                    ((a = a[i]),
                    (m = m[i]),
                    (d = a.a + (a.b - a.a) * o),
                    (v = a.b + (a.c - a.b) * o),
                    (d += (v - d) * o),
                    (v += (a.c + (a.d - a.c) * o - v) * o),
                    (g = m.a + (m.b - m.a) * o),
                    (y = m.b + (m.c - m.b) * o),
                    (g += (y - g) * o),
                    (y += (m.c + (m.d - m.c) * o - y) * o),
                    (h = Math.atan2(y - g, v - d) * w + T),
                    c[n] ? f[n](h) : (f[n] = h));
            }
          },
        }),
        m = f.prototype;
      (f.bezierThrough = _),
        (f.cubicToQuadratic = o),
        (f._autoCSS = !0),
        (f.quadraticToCubic = function (t, e, i) {
          return new n(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
        }),
        (f._cssRegister = function () {
          var t = window._gsDefine.globals.CSSPlugin;
          if (t) {
            var e = t._internals,
              i = e._parseToProxy,
              s = e._setPluginRatio,
              r = e.CSSPropTween;
            e._registerComplexSpecialProp("bezier", {
              parser: function (t, e, n, a, o, h) {
                e instanceof Array && (e = { values: e }), (h = new f());
                var l,
                  _,
                  u,
                  p = e.values,
                  c = p.length - 1,
                  m = [],
                  d = {};
                if (c < 0) return o;
                for (l = 0; l <= c; l++)
                  (u = i(t, p[l], a, o, h, c !== l)), (m[l] = u.end);
                for (_ in e) d[_] = e[_];
                return (
                  (d.values = m),
                  (o = new r(t, "bezier", 0, 0, u.pt, 2)),
                  (o.data = u),
                  (o.plugin = h),
                  (o.setRatio = s),
                  0 === d.autoRotate && (d.autoRotate = !0),
                  !d.autoRotate ||
                    d.autoRotate instanceof Array ||
                    ((l = d.autoRotate === !0 ? 0 : Number(d.autoRotate)),
                    (d.autoRotate =
                      null != u.end.left
                        ? [["left", "top", "rotation", l, !1]]
                        : null != u.end.x && [["x", "y", "rotation", l, !1]])),
                  d.autoRotate &&
                    (a._transform || a._enableTransforms(!1),
                    (u.autoRotate = a._target._gsTransform)),
                  h._onInitTween(u.proxy, d, a._tween),
                  o
                );
              },
            });
          }
        }),
        (m._roundProps = function (t, e) {
          for (var i = this._overwriteProps, s = i.length; --s > -1; )
            (t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e);
        }),
        (m._kill = function (t) {
          var e,
            i,
            s = this._props;
          for (e in this._beziers)
            if (e in t)
              for (
                delete this._beziers[e], delete this._func[e], i = s.length;
                --i > -1;

              )
                s[i] === e && s.splice(i, 1);
          return this._super._kill.call(this, t);
        });
    })(),
    window._gsDefine(
      "plugins.CSSPlugin",
      ["plugins.TweenPlugin", "TweenLite"],
      function (t, e) {
        var i,
          s,
          r,
          n,
          a = function () {
            t.call(this, "css"),
              (this._overwriteProps.length = 0),
              (this.setRatio = a.prototype.setRatio);
          },
          o = {},
          h = (a.prototype = new t("css"));
        (h.constructor = a),
          (a.version = "1.11.4"),
          (a.API = 2),
          (a.defaultTransformPerspective = 0),
          (h = "px"),
          (a.suffixMap = {
            top: h,
            right: h,
            bottom: h,
            left: h,
            width: h,
            height: h,
            fontSize: h,
            padding: h,
            margin: h,
            perspective: h,
            lineHeight: "",
          });
        var l,
          _,
          u,
          p,
          c,
          f,
          m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
          d = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          v = /[^\d\-\.]/g,
          y = /(?:\d|\-|\+|=|#|\.)*/g,
          T = /opacity *= *([^)]*)/,
          w = /opacity:([^;]*)/,
          x = /alpha\(opacity *=.+?\)/i,
          b = /^(rgb|hsl)/,
          P = /([A-Z])/g,
          S = /-([a-z])/gi,
          R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          k = function (t, e) {
            return e.toUpperCase();
          },
          A = /(?:Left|Right|Width)/i,
          C = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          D = /,(?=[^\)]*(?:\(|$))/gi,
          M = Math.PI / 180,
          X = 180 / Math.PI,
          I = {},
          N = document,
          F = N.createElement("div"),
          L = N.createElement("img"),
          E = (a._internals = { _specialProps: o }),
          z = navigator.userAgent,
          Y = (function () {
            var t,
              e = z.indexOf("Android"),
              i = N.createElement("div");
            return (
              (u =
                z.indexOf("Safari") !== -1 &&
                z.indexOf("Chrome") === -1 &&
                (e === -1 || Number(z.substr(e + 8, 1)) > 3)),
              (c = u && Number(z.substr(z.indexOf("Version/") + 8, 1)) < 6),
              (p = z.indexOf("Firefox") !== -1),
              /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(z) &&
                (f = parseFloat(RegExp.$1)),
              (i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>"),
              (t = i.getElementsByTagName("a")[0]),
              !!t && /^0.55/.test(t.style.opacity)
            );
          })(),
          U = function (t) {
            return T.test(
              "string" == typeof t
                ? t
                : (t.currentStyle ? t.currentStyle.filter : t.style.filter) ||
                    "",
            )
              ? parseFloat(RegExp.$1) / 100
              : 1;
          },
          j = function (t) {
            window.console && console.log(t);
          },
          B = "",
          V = "",
          q = function (t, e) {
            e = e || F;
            var i,
              s,
              r = e.style;
            if (void 0 !== r[t]) return t;
            for (
              t = t.charAt(0).toUpperCase() + t.substr(1),
                i = ["O", "Moz", "ms", "Ms", "Webkit"],
                s = 5;
              --s > -1 && void 0 === r[i[s] + t];

            );
            return s >= 0
              ? ((V = 3 === s ? "ms" : i[s]),
                (B = "-" + V.toLowerCase() + "-"),
                V + t)
              : null;
          },
          W = N.defaultView ? N.defaultView.getComputedStyle : function () {},
          Z = (a.getStyle = function (t, e, i, s, r) {
            var n;
            return Y || "opacity" !== e
              ? (!s && t.style[e]
                  ? (n = t.style[e])
                  : (i = i || W(t, null))
                    ? ((t = i.getPropertyValue(
                        e.replace(P, "-$1").toLowerCase(),
                      )),
                      (n = t || i.length ? t : i[e]))
                    : t.currentStyle && (n = t.currentStyle[e]),
                null == r ||
                (n && "none" !== n && "auto" !== n && "auto auto" !== n)
                  ? n
                  : r)
              : U(t);
          }),
          $ = function (t, e, i, s, r) {
            if ("px" === s || !s) return i;
            if ("auto" === s || !i) return 0;
            var n,
              a = A.test(e),
              o = t,
              h = F.style,
              l = i < 0;
            return (
              l && (i = -i),
              "%" === s && e.indexOf("border") !== -1
                ? (n = (i / 100) * (a ? t.clientWidth : t.clientHeight))
                : ((h.cssText =
                    "border:0 solid red;position:" +
                    Z(t, "position") +
                    ";line-height:0;"),
                  "%" !== s && o.appendChild
                    ? (h[a ? "borderLeftWidth" : "borderTopWidth"] = i + s)
                    : ((o = t.parentNode || N.body),
                      (h[a ? "width" : "height"] = i + s)),
                  o.appendChild(F),
                  (n = parseFloat(F[a ? "offsetWidth" : "offsetHeight"])),
                  o.removeChild(F),
                  0 !== n || r || (n = $(t, e, i, s, !0))),
              l ? -n : n
            );
          },
          G = function (t, e, i) {
            if ("absolute" !== Z(t, "position", i)) return 0;
            var s = "left" === e ? "Left" : "Top",
              r = Z(t, "margin" + s, i);
            return (
              t["offset" + s] - ($(t, e, parseFloat(r), r.replace(y, "")) || 0)
            );
          },
          Q = function (t, e) {
            var i,
              s,
              r = {};
            if ((e = e || W(t, null)))
              if ((i = e.length))
                for (; --i > -1; )
                  r[e[i].replace(S, k)] = e.getPropertyValue(e[i]);
              else for (i in e) r[i] = e[i];
            else if ((e = t.currentStyle || t.style))
              for (i in e)
                "string" == typeof i &&
                  void 0 !== r[i] &&
                  (r[i.replace(S, k)] = e[i]);
            return (
              Y || (r.opacity = U(t)),
              (s = bt(t, e, !1)),
              (r.rotation = s.rotation),
              (r.skewX = s.skewX),
              (r.scaleX = s.scaleX),
              (r.scaleY = s.scaleY),
              (r.x = s.x),
              (r.y = s.y),
              xt &&
                ((r.z = s.z),
                (r.rotationX = s.rotationX),
                (r.rotationY = s.rotationY),
                (r.scaleZ = s.scaleZ)),
              r.filters && delete r.filters,
              r
            );
          },
          H = function (t, e, i, s, r) {
            var n,
              a,
              o,
              h = {},
              l = t.style;
            for (a in i)
              "cssText" !== a &&
                "length" !== a &&
                isNaN(a) &&
                (e[a] !== (n = i[a]) || (r && r[a])) &&
                a.indexOf("Origin") === -1 &&
                (("number" != typeof n && "string" != typeof n) ||
                  ((h[a] =
                    "auto" !== n || ("left" !== a && "top" !== a)
                      ? ("" !== n && "auto" !== n && "none" !== n) ||
                        "string" != typeof e[a] ||
                        "" === e[a].replace(v, "")
                        ? n
                        : 0
                      : G(t, a)),
                  void 0 !== l[a] && (o = new ut(l, a, l[a], o))));
            if (s) for (a in s) "className" !== a && (h[a] = s[a]);
            return { difs: h, firstMPT: o };
          },
          K = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
          J = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
          tt = function (t, e, i) {
            var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
              r = K[e],
              n = r.length;
            for (i = i || W(t, null); --n > -1; )
              (s -= parseFloat(Z(t, "padding" + r[n], i, !0)) || 0),
                (s -= parseFloat(Z(t, "border" + r[n] + "Width", i, !0)) || 0);
            return s;
          },
          et = function (t, e) {
            (null != t && "" !== t && "auto" !== t && "auto auto" !== t) ||
              (t = "0 0");
            var i = t.split(" "),
              s =
                t.indexOf("left") !== -1
                  ? "0%"
                  : t.indexOf("right") !== -1
                    ? "100%"
                    : i[0],
              r =
                t.indexOf("top") !== -1
                  ? "0%"
                  : t.indexOf("bottom") !== -1
                    ? "100%"
                    : i[1];
            return (
              null == r ? (r = "0") : "center" === r && (r = "50%"),
              ("center" === s ||
                (isNaN(parseFloat(s)) && (s + "").indexOf("=") === -1)) &&
                (s = "50%"),
              e &&
                ((e.oxp = s.indexOf("%") !== -1),
                (e.oyp = r.indexOf("%") !== -1),
                (e.oxr = "=" === s.charAt(1)),
                (e.oyr = "=" === r.charAt(1)),
                (e.ox = parseFloat(s.replace(v, ""))),
                (e.oy = parseFloat(r.replace(v, "")))),
              s + " " + r + (i.length > 2 ? " " + i[2] : "")
            );
          },
          it = function (t, e) {
            return "string" == typeof t && "=" === t.charAt(1)
              ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2))
              : parseFloat(t) - parseFloat(e);
          },
          st = function (t, e) {
            return null == t
              ? e
              : "string" == typeof t && "=" === t.charAt(1)
                ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e
                : parseFloat(t);
          },
          rt = function (t, e, i, s) {
            var r,
              n,
              a,
              o,
              h = 1e-6;
            return (
              null == t
                ? (o = e)
                : "number" == typeof t
                  ? (o = t)
                  : ((r = 360),
                    (n = t.split("_")),
                    (a =
                      Number(n[0].replace(v, "")) *
                        (t.indexOf("rad") === -1 ? 1 : X) -
                      ("=" === t.charAt(1) ? 0 : e)),
                    n.length &&
                      (s && (s[i] = e + a),
                      t.indexOf("short") !== -1 &&
                        ((a %= r),
                        a !== a % (r / 2) && (a = a < 0 ? a + r : a - r)),
                      t.indexOf("_cw") !== -1 && a < 0
                        ? (a = ((a + 9999999999 * r) % r) - ((a / r) | 0) * r)
                        : t.indexOf("ccw") !== -1 &&
                          a > 0 &&
                          (a = ((a - 9999999999 * r) % r) - ((a / r) | 0) * r)),
                    (o = e + a)),
              o < h && o > -h && (o = 0),
              o
            );
          },
          nt = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0],
          },
          at = function (t, e, i) {
            return (
              (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t),
              (255 *
                (6 * t < 1
                  ? e + (i - e) * t * 6
                  : t < 0.5
                    ? i
                    : 3 * t < 2
                      ? e + (i - e) * (2 / 3 - t) * 6
                      : e) +
                0.5) |
                0
            );
          },
          ot = function (t) {
            var e, i, s, r, n, a;
            return t && "" !== t
              ? "number" == typeof t
                ? [t >> 16, (t >> 8) & 255, 255 & t]
                : ("," === t.charAt(t.length - 1) &&
                    (t = t.substr(0, t.length - 1)),
                  nt[t]
                    ? nt[t]
                    : "#" === t.charAt(0)
                      ? (4 === t.length &&
                          ((e = t.charAt(1)),
                          (i = t.charAt(2)),
                          (s = t.charAt(3)),
                          (t = "#" + e + e + i + i + s + s)),
                        (t = parseInt(t.substr(1), 16)),
                        [t >> 16, (t >> 8) & 255, 255 & t])
                      : "hsl" === t.substr(0, 3)
                        ? ((t = t.match(m)),
                          (r = (Number(t[0]) % 360) / 360),
                          (n = Number(t[1]) / 100),
                          (a = Number(t[2]) / 100),
                          (i = a <= 0.5 ? a * (n + 1) : a + n - a * n),
                          (e = 2 * a - i),
                          t.length > 3 && (t[3] = Number(t[3])),
                          (t[0] = at(r + 1 / 3, e, i)),
                          (t[1] = at(r, e, i)),
                          (t[2] = at(r - 1 / 3, e, i)),
                          t)
                        : ((t = t.match(m) || nt.transparent),
                          (t[0] = Number(t[0])),
                          (t[1] = Number(t[1])),
                          (t[2] = Number(t[2])),
                          t.length > 3 && (t[3] = Number(t[3])),
                          t))
              : nt.black;
          },
          ht = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (h in nt) ht += "|" + h + "\\b";
        ht = new RegExp(ht + ")", "gi");
        var lt = function (t, e, i, s) {
            if (null == t)
              return function (t) {
                return t;
              };
            var r,
              n = e ? (t.match(ht) || [""])[0] : "",
              a = t.split(n).join("").match(g) || [],
              o = t.substr(0, t.indexOf(a[0])),
              h = ")" === t.charAt(t.length - 1) ? ")" : "",
              l = t.indexOf(" ") !== -1 ? " " : ",",
              _ = a.length,
              u = _ > 0 ? a[0].replace(m, "") : "";
            return _
              ? (r = e
                  ? function (t) {
                      var e, p, c, f;
                      if ("number" == typeof t) t += u;
                      else if (s && D.test(t)) {
                        for (
                          f = t.replace(D, "|").split("|"), c = 0;
                          c < f.length;
                          c++
                        )
                          f[c] = r(f[c]);
                        return f.join(",");
                      }
                      if (
                        ((e = (t.match(ht) || [n])[0]),
                        (p = t.split(e).join("").match(g) || []),
                        (c = p.length),
                        _ > c--)
                      )
                        for (; ++c < _; )
                          p[c] = i ? p[((c - 1) / 2) | 0] : a[c];
                      return (
                        o +
                        p.join(l) +
                        l +
                        e +
                        h +
                        (t.indexOf("inset") !== -1 ? " inset" : "")
                      );
                    }
                  : function (t) {
                      var e, n, p;
                      if ("number" == typeof t) t += u;
                      else if (s && D.test(t)) {
                        for (
                          n = t.replace(D, "|").split("|"), p = 0;
                          p < n.length;
                          p++
                        )
                          n[p] = r(n[p]);
                        return n.join(",");
                      }
                      if (((e = t.match(g) || []), (p = e.length), _ > p--))
                        for (; ++p < _; )
                          e[p] = i ? e[((p - 1) / 2) | 0] : a[p];
                      return o + e.join(l) + h;
                    })
              : function (t) {
                  return t;
                };
          },
          _t = function (t) {
            return (
              (t = t.split(",")),
              function (e, i, s, r, n, a, o) {
                var h,
                  l = (i + "").split(" ");
                for (o = {}, h = 0; h < 4; h++)
                  o[t[h]] = l[h] = l[h] || l[((h - 1) / 2) >> 0];
                return r.parse(e, o, n, a);
              }
            );
          },
          ut =
            ((E._setPluginRatio = function (t) {
              this.plugin.setRatio(t);
              for (
                var e,
                  i,
                  s,
                  r,
                  n = this.data,
                  a = n.proxy,
                  o = n.firstMPT,
                  h = 1e-6;
                o;

              )
                (e = a[o.v]),
                  o.r
                    ? (e = e > 0 ? (e + 0.5) | 0 : (e - 0.5) | 0)
                    : e < h && e > -h && (e = 0),
                  (o.t[o.p] = e),
                  (o = o._next);
              if (
                (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
              )
                for (o = n.firstMPT; o; ) {
                  if (((i = o.t), i.type)) {
                    if (1 === i.type) {
                      for (r = i.xs0 + i.s + i.xs1, s = 1; s < i.l; s++)
                        r += i["xn" + s] + i["xs" + (s + 1)];
                      i.e = r;
                    }
                  } else i.e = i.s + i.xs0;
                  o = o._next;
                }
            }),
            function (t, e, i, s, r) {
              (this.t = t),
                (this.p = e),
                (this.v = i),
                (this.r = r),
                s && ((s._prev = this), (this._next = s));
            }),
          pt =
            ((E._parseToProxy = function (t, e, i, s, r, n) {
              var a,
                o,
                h,
                l,
                _,
                u = s,
                p = {},
                c = {},
                f = i._transform,
                m = I;
              for (
                i._transform = null,
                  I = e,
                  s = _ = i.parse(t, e, s, r),
                  I = m,
                  n &&
                    ((i._transform = f),
                    u && ((u._prev = null), u._prev && (u._prev._next = null)));
                s && s !== u;

              ) {
                if (
                  s.type <= 1 &&
                  ((o = s.p),
                  (c[o] = s.s + s.c),
                  (p[o] = s.s),
                  n || ((l = new ut(s, "s", o, l, s.r)), (s.c = 0)),
                  1 === s.type)
                )
                  for (a = s.l; --a > 0; )
                    (h = "xn" + a),
                      (o = s.p + "_" + h),
                      (c[o] = s.data[h]),
                      (p[o] = s[h]),
                      n || (l = new ut(s, h, o, l, s.rxp[h]));
                s = s._next;
              }
              return { proxy: p, end: c, firstMPT: l, pt: _ };
            }),
            (E.CSSPropTween = function (t, e, s, r, a, o, h, l, _, u, p) {
              (this.t = t),
                (this.p = e),
                (this.s = s),
                (this.c = r),
                (this.n = h || e),
                t instanceof pt || n.push(this.n),
                (this.r = l),
                (this.type = o || 0),
                _ && ((this.pr = _), (i = !0)),
                (this.b = void 0 === u ? s : u),
                (this.e = void 0 === p ? s + r : p),
                a && ((this._next = a), (a._prev = this));
            })),
          ct = (a.parseComplex = function (t, e, i, s, r, n, a, o, h, _) {
            (i = i || n || ""),
              (a = new pt(t, e, 0, 0, a, _ ? 2 : 1, null, !1, o, i, s)),
              (s += "");
            var u,
              p,
              c,
              f,
              g,
              v,
              y,
              T,
              w,
              x,
              P,
              S,
              R = i.split(", ").join(",").split(" "),
              k = s.split(", ").join(",").split(" "),
              A = R.length,
              C = l !== !1;
            for (
              (s.indexOf(",") === -1 && i.indexOf(",") === -1) ||
                ((R = R.join(" ").replace(D, ", ").split(" ")),
                (k = k.join(" ").replace(D, ", ").split(" ")),
                (A = R.length)),
                A !== k.length && ((R = (n || "").split(" ")), (A = R.length)),
                a.plugin = h,
                a.setRatio = _,
                u = 0;
              u < A;
              u++
            )
              if (((f = R[u]), (g = k[u]), (T = parseFloat(f)), T || 0 === T))
                a.appendXtra(
                  "",
                  T,
                  it(g, T),
                  g.replace(d, ""),
                  C && g.indexOf("px") !== -1,
                  !0,
                );
              else if (r && ("#" === f.charAt(0) || nt[f] || b.test(f)))
                (S = "," === g.charAt(g.length - 1) ? ")," : ")"),
                  (f = ot(f)),
                  (g = ot(g)),
                  (w = f.length + g.length > 6),
                  w && !Y && 0 === g[3]
                    ? ((a["xs" + a.l] += a.l ? " transparent" : "transparent"),
                      (a.e = a.e.split(k[u]).join("transparent")))
                    : (Y || (w = !1),
                      a
                        .appendXtra(
                          w ? "rgba(" : "rgb(",
                          f[0],
                          g[0] - f[0],
                          ",",
                          !0,
                          !0,
                        )
                        .appendXtra("", f[1], g[1] - f[1], ",", !0)
                        .appendXtra("", f[2], g[2] - f[2], w ? "," : S, !0),
                      w &&
                        ((f = f.length < 4 ? 1 : f[3]),
                        a.appendXtra(
                          "",
                          f,
                          (g.length < 4 ? 1 : g[3]) - f,
                          S,
                          !1,
                        )));
              else if ((v = f.match(m))) {
                if (((y = g.match(d)), !y || y.length !== v.length)) return a;
                for (c = 0, p = 0; p < v.length; p++)
                  (P = v[p]),
                    (x = f.indexOf(P, c)),
                    a.appendXtra(
                      f.substr(c, x - c),
                      Number(P),
                      it(y[p], P),
                      "",
                      C && "px" === f.substr(x + P.length, 2),
                      0 === p,
                    ),
                    (c = x + P.length);
                a["xs" + a.l] += f.substr(c);
              } else a["xs" + a.l] += a.l ? " " + f : f;
            if (s.indexOf("=") !== -1 && a.data) {
              for (S = a.xs0 + a.data.s, u = 1; u < a.l; u++)
                S += a["xs" + u] + a.data["xn" + u];
              a.e = S + a["xs" + u];
            }
            return a.l || ((a.type = -1), (a.xs0 = a.e)), a.xfirst || a;
          }),
          ft = 9;
        for (h = pt.prototype, h.l = h.pr = 0; --ft > 0; )
          (h["xn" + ft] = 0), (h["xs" + ft] = "");
        (h.xs0 = ""),
          (h._next =
            h._prev =
            h.xfirst =
            h.data =
            h.plugin =
            h.setRatio =
            h.rxp =
              null),
          (h.appendXtra = function (t, e, i, s, r, n) {
            var a = this,
              o = a.l;
            return (
              (a["xs" + o] += n && o ? " " + t : t || ""),
              i || 0 === o || a.plugin
                ? (a.l++,
                  (a.type = a.setRatio ? 2 : 1),
                  (a["xs" + a.l] = s || ""),
                  o > 0
                    ? ((a.data["xn" + o] = e + i),
                      (a.rxp["xn" + o] = r),
                      (a["xn" + o] = e),
                      a.plugin ||
                        ((a.xfirst = new pt(
                          a,
                          "xn" + o,
                          e,
                          i,
                          a.xfirst || a,
                          0,
                          a.n,
                          r,
                          a.pr,
                        )),
                        (a.xfirst.xs0 = 0)),
                      a)
                    : ((a.data = { s: e + i }),
                      (a.rxp = {}),
                      (a.s = e),
                      (a.c = i),
                      (a.r = r),
                      a))
                : ((a["xs" + o] += e + (s || "")), a)
            );
          });
        var mt = function (t, e) {
            (e = e || {}),
              (this.p = e.prefix ? q(t) || t : t),
              (o[t] = o[this.p] = this),
              (this.format =
                e.formatter ||
                lt(e.defaultValue, e.color, e.collapsible, e.multi)),
              e.parser && (this.parse = e.parser),
              (this.clrs = e.color),
              (this.multi = e.multi),
              (this.keyword = e.keyword),
              (this.dflt = e.defaultValue),
              (this.pr = e.priority || 0);
          },
          dt = (E._registerComplexSpecialProp = function (t, e, i) {
            "object" != typeof e && (e = { parser: i });
            var s,
              r,
              n = t.split(","),
              a = e.defaultValue;
            for (i = i || [a], s = 0; s < n.length; s++)
              (e.prefix = 0 === s && e.prefix),
                (e.defaultValue = i[s] || a),
                (r = new mt(n[s], e));
          }),
          gt = function (t) {
            if (!o[t]) {
              var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
              dt(t, {
                parser: function (t, i, s, r, n, a, h) {
                  var l = (window.GreenSockGlobals || window).com.greensock
                    .plugins[e];
                  return l
                    ? (l._cssRegister(), o[s].parse(t, i, s, r, n, a, h))
                    : (j("Error: " + e + " js file not loaded."), n);
                },
              });
            }
          };
        (h = mt.prototype),
          (h.parseComplex = function (t, e, i, s, r, n) {
            var a,
              o,
              h,
              l,
              _,
              u,
              p = this.keyword;
            if (
              (this.multi &&
                (D.test(i) || D.test(e)
                  ? ((o = e.replace(D, "|").split("|")),
                    (h = i.replace(D, "|").split("|")))
                  : p && ((o = [e]), (h = [i]))),
              h)
            ) {
              for (
                l = h.length > o.length ? h.length : o.length, a = 0;
                a < l;
                a++
              )
                (e = o[a] = o[a] || this.dflt),
                  (i = h[a] = h[a] || this.dflt),
                  p &&
                    ((_ = e.indexOf(p)),
                    (u = i.indexOf(p)),
                    _ !== u && ((i = u === -1 ? h : o), (i[a] += " " + p)));
              (e = o.join(", ")), (i = h.join(", "));
            }
            return ct(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n);
          }),
          (h.parse = function (t, e, i, s, n, a, o) {
            return this.parseComplex(
              t.style,
              this.format(Z(t, this.p, r, !1, this.dflt)),
              this.format(e),
              n,
              a,
            );
          }),
          (a.registerSpecialProp = function (t, e, i) {
            dt(t, {
              parser: function (t, s, r, n, a, o, h) {
                var l = new pt(t, r, 0, 0, a, 2, r, !1, i);
                return (l.plugin = o), (l.setRatio = e(t, s, n._tween, r)), l;
              },
              priority: i,
            });
          });
        var vt =
            "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(
              ",",
            ),
          yt = q("transform"),
          Tt = B + "transform",
          wt = q("transformOrigin"),
          xt = null !== q("perspective"),
          bt = function (t, e, i, s) {
            if (t._gsTransform && i && !s) return t._gsTransform;
            var r,
              n,
              o,
              h,
              l,
              _,
              u,
              p,
              c,
              f,
              m,
              d,
              g,
              v = i ? t._gsTransform || { skewY: 0 } : { skewY: 0 },
              y = v.scaleX < 0,
              T = 2e-5,
              w = 1e5,
              x = 179.99,
              b = x * M,
              P = xt
                ? parseFloat(Z(t, wt, e, !1, "0 0 0").split(" ")[2]) ||
                  v.zOrigin ||
                  0
                : 0;
            for (
              yt
                ? (r = Z(t, Tt, e, !0))
                : t.currentStyle &&
                  ((r = t.currentStyle.filter.match(C)),
                  (r =
                    r && 4 === r.length
                      ? [
                          r[0].substr(4),
                          Number(r[2].substr(4)),
                          Number(r[1].substr(4)),
                          r[3].substr(4),
                          v.x || 0,
                          v.y || 0,
                        ].join(",")
                      : "")),
                n = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [],
                o = n.length;
              --o > -1;

            )
              (h = Number(n[o])),
                (n[o] = (l = h - (h |= 0))
                  ? ((l * w + (l < 0 ? -0.5 : 0.5)) | 0) / w + h
                  : h);
            if (16 === n.length) {
              var S = n[8],
                R = n[9],
                k = n[10],
                A = n[12],
                O = n[13],
                D = n[14];
              if (
                (v.zOrigin &&
                  ((D = -v.zOrigin),
                  (A = S * D - n[12]),
                  (O = R * D - n[13]),
                  (D = k * D + v.zOrigin - n[14])),
                !i || s || null == v.rotationX)
              ) {
                var I,
                  N,
                  F,
                  L,
                  E,
                  z,
                  Y,
                  U = n[0],
                  j = n[1],
                  B = n[2],
                  V = n[3],
                  q = n[4],
                  W = n[5],
                  $ = n[6],
                  G = n[7],
                  Q = n[11],
                  H = Math.atan2($, k),
                  K = H < -b || H > b;
                (v.rotationX = H * X),
                  H &&
                    ((L = Math.cos(-H)),
                    (E = Math.sin(-H)),
                    (I = q * L + S * E),
                    (N = W * L + R * E),
                    (F = $ * L + k * E),
                    (S = q * -E + S * L),
                    (R = W * -E + R * L),
                    (k = $ * -E + k * L),
                    (Q = G * -E + Q * L),
                    (q = I),
                    (W = N),
                    ($ = F)),
                  (H = Math.atan2(S, U)),
                  (v.rotationY = H * X),
                  H &&
                    ((z = H < -b || H > b),
                    (L = Math.cos(-H)),
                    (E = Math.sin(-H)),
                    (I = U * L - S * E),
                    (N = j * L - R * E),
                    (F = B * L - k * E),
                    (R = j * E + R * L),
                    (k = B * E + k * L),
                    (Q = V * E + Q * L),
                    (U = I),
                    (j = N),
                    (B = F)),
                  (H = Math.atan2(j, W)),
                  (v.rotation = H * X),
                  H &&
                    ((Y = H < -b || H > b),
                    (L = Math.cos(-H)),
                    (E = Math.sin(-H)),
                    (U = U * L + q * E),
                    (N = j * L + W * E),
                    (W = j * -E + W * L),
                    ($ = B * -E + $ * L),
                    (j = N)),
                  Y && K
                    ? (v.rotation = v.rotationX = 0)
                    : Y && z
                      ? (v.rotation = v.rotationY = 0)
                      : z && K && (v.rotationY = v.rotationX = 0),
                  (v.scaleX = ((Math.sqrt(U * U + j * j) * w + 0.5) | 0) / w),
                  (v.scaleY = ((Math.sqrt(W * W + R * R) * w + 0.5) | 0) / w),
                  (v.scaleZ = ((Math.sqrt($ * $ + k * k) * w + 0.5) | 0) / w),
                  (v.skewX = 0),
                  (v.perspective = Q ? 1 / (Q < 0 ? -Q : Q) : 0),
                  (v.x = A),
                  (v.y = O),
                  (v.z = D);
              }
            } else if (
              (!xt ||
                s ||
                !n.length ||
                v.x !== n[4] ||
                v.y !== n[5] ||
                (!v.rotationX && !v.rotationY)) &&
              (void 0 === v.x || "none" !== Z(t, "display", e))
            ) {
              var J = n.length >= 6,
                tt = J ? n[0] : 1,
                et = n[1] || 0,
                it = n[2] || 0,
                st = J ? n[3] : 1;
              (v.x = n[4] || 0),
                (v.y = n[5] || 0),
                (_ = Math.sqrt(tt * tt + et * et)),
                (u = Math.sqrt(st * st + it * it)),
                (p = tt || et ? Math.atan2(et, tt) * X : v.rotation || 0),
                (c = it || st ? Math.atan2(it, st) * X + p : v.skewX || 0),
                (f = _ - Math.abs(v.scaleX || 0)),
                (m = u - Math.abs(v.scaleY || 0)),
                Math.abs(c) > 90 &&
                  Math.abs(c) < 270 &&
                  (y
                    ? ((_ *= -1),
                      (c += p <= 0 ? 180 : -180),
                      (p += p <= 0 ? 180 : -180))
                    : ((u *= -1), (c += c <= 0 ? 180 : -180))),
                (d = (p - v.rotation) % 180),
                (g = (c - v.skewX) % 180),
                (void 0 === v.skewX ||
                  f > T ||
                  f < -T ||
                  m > T ||
                  m < -T ||
                  (d > -x && d < x && (d * w) | !1) ||
                  (g > -x && g < x && (g * w) | !1)) &&
                  ((v.scaleX = _),
                  (v.scaleY = u),
                  (v.rotation = p),
                  (v.skewX = c)),
                xt &&
                  ((v.rotationX = v.rotationY = v.z = 0),
                  (v.perspective =
                    parseFloat(a.defaultTransformPerspective) || 0),
                  (v.scaleZ = 1));
            }
            v.zOrigin = P;
            for (o in v) v[o] < T && v[o] > -T && (v[o] = 0);
            return i && (t._gsTransform = v), v;
          },
          Pt = function (t) {
            var e,
              i,
              s = this.data,
              r = -s.rotation * M,
              n = r + s.skewX * M,
              a = 1e5,
              o = ((Math.cos(r) * s.scaleX * a) | 0) / a,
              h = ((Math.sin(r) * s.scaleX * a) | 0) / a,
              l = ((Math.sin(n) * -s.scaleY * a) | 0) / a,
              _ = ((Math.cos(n) * s.scaleY * a) | 0) / a,
              u = this.t.style,
              p = this.t.currentStyle;
            if (p) {
              (i = h), (h = -l), (l = -i), (e = p.filter), (u.filter = "");
              var c,
                m,
                d = this.t.offsetWidth,
                g = this.t.offsetHeight,
                v = "absolute" !== p.position,
                w =
                  "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                  o +
                  ", M12=" +
                  h +
                  ", M21=" +
                  l +
                  ", M22=" +
                  _,
                x = s.x,
                b = s.y;
              if (
                (null != s.ox &&
                  ((c = (s.oxp ? d * s.ox * 0.01 : s.ox) - d / 2),
                  (m = (s.oyp ? g * s.oy * 0.01 : s.oy) - g / 2),
                  (x += c - (c * o + m * h)),
                  (b += m - (c * l + m * _))),
                v
                  ? ((c = d / 2),
                    (m = g / 2),
                    (w +=
                      ", Dx=" +
                      (c - (c * o + m * h) + x) +
                      ", Dy=" +
                      (m - (c * l + m * _) + b) +
                      ")"))
                  : (w += ", sizingMethod='auto expand')"),
                e.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1
                  ? (u.filter = e.replace(O, w))
                  : (u.filter = w + " " + e),
                (0 !== t && 1 !== t) ||
                  (1 === o &&
                    0 === h &&
                    0 === l &&
                    1 === _ &&
                    ((v && w.indexOf("Dx=0, Dy=0") === -1) ||
                      (T.test(e) && 100 !== parseFloat(RegExp.$1)) ||
                      (e.indexOf(e.indexOf("Alpha")) === -1 &&
                        u.removeAttribute("filter")))),
                !v)
              ) {
                var P,
                  S,
                  R,
                  k = f < 8 ? 1 : -1;
                for (
                  c = s.ieOffsetX || 0,
                    m = s.ieOffsetY || 0,
                    s.ieOffsetX = Math.round(
                      (d - ((o < 0 ? -o : o) * d + (h < 0 ? -h : h) * g)) / 2 +
                        x,
                    ),
                    s.ieOffsetY = Math.round(
                      (g - ((_ < 0 ? -_ : _) * g + (l < 0 ? -l : l) * d)) / 2 +
                        b,
                    ),
                    ft = 0;
                  ft < 4;
                  ft++
                )
                  (S = J[ft]),
                    (P = p[S]),
                    (i =
                      P.indexOf("px") !== -1
                        ? parseFloat(P)
                        : $(this.t, S, parseFloat(P), P.replace(y, "")) || 0),
                    (R =
                      i !== s[S]
                        ? ft < 2
                          ? -s.ieOffsetX
                          : -s.ieOffsetY
                        : ft < 2
                          ? c - s.ieOffsetX
                          : m - s.ieOffsetY),
                    (u[S] =
                      (s[S] = Math.round(
                        i - R * (0 === ft || 2 === ft ? 1 : k),
                      )) + "px");
              }
            }
          },
          St = function (t) {
            var e,
              i,
              s,
              r,
              n,
              a,
              o,
              h,
              l,
              _,
              u,
              c,
              f,
              m,
              d,
              g,
              v,
              y,
              T,
              w,
              x,
              b,
              P,
              S = this.data,
              R = this.t.style,
              k = S.rotation * M,
              A = S.scaleX,
              C = S.scaleY,
              O = S.scaleZ,
              D = S.perspective;
            if (p) {
              var X = 1e-4;
              A < X && A > -X && (A = O = 2e-5),
                C < X && C > -X && (C = O = 2e-5),
                !D || S.z || S.rotationX || S.rotationY || (D = 0);
            }
            if (k || S.skewX)
              (y = Math.cos(k)),
                (T = Math.sin(k)),
                (e = y),
                (n = T),
                S.skewX &&
                  ((k -= S.skewX * M), (y = Math.cos(k)), (T = Math.sin(k))),
                (i = -T),
                (a = y);
            else {
              if (!(S.rotationY || S.rotationX || 1 !== O || D))
                return void (R[yt] =
                  "translate3d(" +
                  S.x +
                  "px," +
                  S.y +
                  "px," +
                  S.z +
                  "px)" +
                  (1 !== A || 1 !== C ? " scale(" + A + "," + C + ")" : ""));
              (e = a = 1), (i = n = 0);
            }
            (u = 1),
              (s = r = o = h = l = _ = c = f = m = 0),
              (d = D ? -1 / D : 0),
              (g = S.zOrigin),
              (v = 1e5),
              (k = S.rotationY * M),
              k &&
                ((y = Math.cos(k)),
                (T = Math.sin(k)),
                (l = u * -T),
                (f = d * -T),
                (s = e * T),
                (o = n * T),
                (u *= y),
                (d *= y),
                (e *= y),
                (n *= y)),
              (k = S.rotationX * M),
              k &&
                ((y = Math.cos(k)),
                (T = Math.sin(k)),
                (w = i * y + s * T),
                (x = a * y + o * T),
                (b = _ * y + u * T),
                (P = m * y + d * T),
                (s = i * -T + s * y),
                (o = a * -T + o * y),
                (u = _ * -T + u * y),
                (d = m * -T + d * y),
                (i = w),
                (a = x),
                (_ = b),
                (m = P)),
              1 !== O && ((s *= O), (o *= O), (u *= O), (d *= O)),
              1 !== C && ((i *= C), (a *= C), (_ *= C), (m *= C)),
              1 !== A && ((e *= A), (n *= A), (l *= A), (f *= A)),
              g && ((c -= g), (r = s * c), (h = o * c), (c = u * c + g)),
              (r = (w = (r += S.x) - (r |= 0))
                ? ((w * v + (w < 0 ? -0.5 : 0.5)) | 0) / v + r
                : r),
              (h = (w = (h += S.y) - (h |= 0))
                ? ((w * v + (w < 0 ? -0.5 : 0.5)) | 0) / v + h
                : h),
              (c = (w = (c += S.z) - (c |= 0))
                ? ((w * v + (w < 0 ? -0.5 : 0.5)) | 0) / v + c
                : c),
              (R[yt] =
                "matrix3d(" +
                [
                  ((e * v) | 0) / v,
                  ((n * v) | 0) / v,
                  ((l * v) | 0) / v,
                  ((f * v) | 0) / v,
                  ((i * v) | 0) / v,
                  ((a * v) | 0) / v,
                  ((_ * v) | 0) / v,
                  ((m * v) | 0) / v,
                  ((s * v) | 0) / v,
                  ((o * v) | 0) / v,
                  ((u * v) | 0) / v,
                  ((d * v) | 0) / v,
                  r,
                  h,
                  c,
                  D ? 1 + -c / D : 1,
                ].join(",") +
                ")");
          },
          Rt = function (t) {
            var e,
              i,
              s,
              r,
              n,
              a = this.data,
              o = this.t,
              h = o.style;
            return a.rotationX || a.rotationY || a.z || a.force3D
              ? ((this.setRatio = St), void St.call(this, t))
              : void (a.rotation || a.skewX
                  ? ((e = a.rotation * M),
                    (i = e - a.skewX * M),
                    (s = 1e5),
                    (r = a.scaleX * s),
                    (n = a.scaleY * s),
                    (h[yt] =
                      "matrix(" +
                      ((Math.cos(e) * r) | 0) / s +
                      "," +
                      ((Math.sin(e) * r) | 0) / s +
                      "," +
                      ((Math.sin(i) * -n) | 0) / s +
                      "," +
                      ((Math.cos(i) * n) | 0) / s +
                      "," +
                      a.x +
                      "," +
                      a.y +
                      ")"))
                  : (h[yt] =
                      "matrix(" +
                      a.scaleX +
                      ",0,0," +
                      a.scaleY +
                      "," +
                      a.x +
                      "," +
                      a.y +
                      ")"));
          };
        dt(
          "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D",
          {
            parser: function (t, e, i, s, n, a, o) {
              if (s._transform) return n;
              var h,
                l,
                _,
                u,
                p,
                c,
                f,
                m = (s._transform = bt(t, r, !0, o.parseTransform)),
                d = t.style,
                g = 1e-6,
                v = vt.length,
                y = o,
                T = {};
              if ("string" == typeof y.transform && yt)
                (_ = d.cssText),
                  (d[yt] = y.transform),
                  (d.display = "block"),
                  (h = bt(t, null, !1)),
                  (d.cssText = _);
              else if ("object" == typeof y) {
                if (
                  ((h = {
                    scaleX: st(null != y.scaleX ? y.scaleX : y.scale, m.scaleX),
                    scaleY: st(null != y.scaleY ? y.scaleY : y.scale, m.scaleY),
                    scaleZ: st(y.scaleZ, m.scaleZ),
                    x: st(y.x, m.x),
                    y: st(y.y, m.y),
                    z: st(y.z, m.z),
                    perspective: st(y.transformPerspective, m.perspective),
                  }),
                  (f = y.directionalRotation),
                  null != f)
                )
                  if ("object" == typeof f) for (_ in f) y[_] = f[_];
                  else y.rotation = f;
                (h.rotation = rt(
                  "rotation" in y
                    ? y.rotation
                    : "shortRotation" in y
                      ? y.shortRotation + "_short"
                      : "rotationZ" in y
                        ? y.rotationZ
                        : m.rotation,
                  m.rotation,
                  "rotation",
                  T,
                )),
                  xt &&
                    ((h.rotationX = rt(
                      "rotationX" in y
                        ? y.rotationX
                        : "shortRotationX" in y
                          ? y.shortRotationX + "_short"
                          : m.rotationX || 0,
                      m.rotationX,
                      "rotationX",
                      T,
                    )),
                    (h.rotationY = rt(
                      "rotationY" in y
                        ? y.rotationY
                        : "shortRotationY" in y
                          ? y.shortRotationY + "_short"
                          : m.rotationY || 0,
                      m.rotationY,
                      "rotationY",
                      T,
                    ))),
                  (h.skewX = null == y.skewX ? m.skewX : rt(y.skewX, m.skewX)),
                  (h.skewY = null == y.skewY ? m.skewY : rt(y.skewY, m.skewY)),
                  (l = h.skewY - m.skewY) &&
                    ((h.skewX += l), (h.rotation += l));
              }
              for (
                xt && null != y.force3D && ((m.force3D = y.force3D), (c = !0)),
                  p =
                    m.force3D ||
                    m.z ||
                    m.rotationX ||
                    m.rotationY ||
                    h.z ||
                    h.rotationX ||
                    h.rotationY ||
                    h.perspective,
                  p || null == y.scale || (h.scaleZ = 1);
                --v > -1;

              )
                (i = vt[v]),
                  (u = h[i] - m[i]),
                  (u > g || u < -g || null != I[i]) &&
                    ((c = !0),
                    (n = new pt(m, i, m[i], u, n)),
                    i in T && (n.e = T[i]),
                    (n.xs0 = 0),
                    (n.plugin = a),
                    s._overwriteProps.push(n.n));
              return (
                (u = y.transformOrigin),
                (u || (xt && p && m.zOrigin)) &&
                  (yt
                    ? ((c = !0),
                      (i = wt),
                      (u = (u || Z(t, i, r, !1, "50% 50%")) + ""),
                      (n = new pt(d, i, 0, 0, n, -1, "transformOrigin")),
                      (n.b = d[i]),
                      (n.plugin = a),
                      xt
                        ? ((_ = m.zOrigin),
                          (u = u.split(" ")),
                          (m.zOrigin =
                            (u.length > 2 && (0 === _ || "0px" !== u[2])
                              ? parseFloat(u[2])
                              : _) || 0),
                          (n.xs0 =
                            n.e =
                            d[i] =
                              u[0] + " " + (u[1] || "50%") + " 0px"),
                          (n = new pt(m, "zOrigin", 0, 0, n, -1, n.n)),
                          (n.b = _),
                          (n.xs0 = n.e = m.zOrigin))
                        : (n.xs0 = n.e = d[i] = u))
                    : et(u + "", m)),
                c &&
                  (s._transformType = p || 3 === this._transformType ? 3 : 2),
                n
              );
            },
            prefix: !0,
          },
        ),
          dt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset",
          }),
          dt("borderRadius", {
            defaultValue: "0px",
            parser: function (t, e, i, n, a, o) {
              e = this.format(e);
              var h,
                l,
                _,
                u,
                p,
                c,
                f,
                m,
                d,
                g,
                v,
                y,
                T,
                w,
                x,
                b,
                P = [
                  "borderTopLeftRadius",
                  "borderTopRightRadius",
                  "borderBottomRightRadius",
                  "borderBottomLeftRadius",
                ],
                S = t.style;
              for (
                d = parseFloat(t.offsetWidth),
                  g = parseFloat(t.offsetHeight),
                  h = e.split(" "),
                  l = 0;
                l < P.length;
                l++
              )
                this.p.indexOf("border") && (P[l] = q(P[l])),
                  (p = u = Z(t, P[l], r, !1, "0px")),
                  p.indexOf(" ") !== -1 &&
                    ((u = p.split(" ")), (p = u[0]), (u = u[1])),
                  (c = _ = h[l]),
                  (f = parseFloat(p)),
                  (y = p.substr((f + "").length)),
                  (T = "=" === c.charAt(1)),
                  T
                    ? ((m = parseInt(c.charAt(0) + "1", 10)),
                      (c = c.substr(2)),
                      (m *= parseFloat(c)),
                      (v = c.substr((m + "").length - (m < 0 ? 1 : 0)) || ""))
                    : ((m = parseFloat(c)), (v = c.substr((m + "").length))),
                  "" === v && (v = s[i] || y),
                  v !== y &&
                    ((w = $(t, "borderLeft", f, y)),
                    (x = $(t, "borderTop", f, y)),
                    "%" === v
                      ? ((p = (w / d) * 100 + "%"), (u = (x / g) * 100 + "%"))
                      : "em" === v
                        ? ((b = $(t, "borderLeft", 1, "em")),
                          (p = w / b + "em"),
                          (u = x / b + "em"))
                        : ((p = w + "px"), (u = x + "px")),
                    T &&
                      ((c = parseFloat(p) + m + v),
                      (_ = parseFloat(u) + m + v))),
                  (a = ct(S, P[l], p + " " + u, c + " " + _, !1, "0px", a));
              return a;
            },
            prefix: !0,
            formatter: lt("0px 0px 0px 0px", !1, !0),
          }),
          dt("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (t, e, i, s, n, a) {
              var o,
                h,
                l,
                _,
                u,
                p,
                c = "background-position",
                m = r || W(t, null),
                d = this.format(
                  (m
                    ? f
                      ? m.getPropertyValue(c + "-x") +
                        " " +
                        m.getPropertyValue(c + "-y")
                      : m.getPropertyValue(c)
                    : t.currentStyle.backgroundPositionX +
                      " " +
                      t.currentStyle.backgroundPositionY) || "0 0",
                ),
                g = this.format(e);
              if (
                (d.indexOf("%") !== -1) != (g.indexOf("%") !== -1) &&
                ((p = Z(t, "backgroundImage").replace(R, "")),
                p && "none" !== p)
              ) {
                for (
                  o = d.split(" "),
                    h = g.split(" "),
                    L.setAttribute("src", p),
                    l = 2;
                  --l > -1;

                )
                  (d = o[l]),
                    (_ = d.indexOf("%") !== -1),
                    _ !== (h[l].indexOf("%") !== -1) &&
                      ((u =
                        0 === l
                          ? t.offsetWidth - L.width
                          : t.offsetHeight - L.height),
                      (o[l] = _
                        ? (parseFloat(d) / 100) * u + "px"
                        : (parseFloat(d) / u) * 100 + "%"));
                d = o.join(" ");
              }
              return this.parseComplex(t.style, d, g, n, a);
            },
            formatter: et,
          }),
          dt("backgroundSize", { defaultValue: "0 0", formatter: et }),
          dt("perspective", { defaultValue: "0px", prefix: !0 }),
          dt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
          dt("transformStyle", { prefix: !0 }),
          dt("backfaceVisibility", { prefix: !0 }),
          dt("userSelect", { prefix: !0 }),
          dt("margin", {
            parser: _t("marginTop,marginRight,marginBottom,marginLeft"),
          }),
          dt("padding", {
            parser: _t("paddingTop,paddingRight,paddingBottom,paddingLeft"),
          }),
          dt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (t, e, i, s, n, a) {
              var o, h, l;
              return (
                f < 9
                  ? ((h = t.currentStyle),
                    (l = f < 8 ? " " : ","),
                    (o =
                      "rect(" +
                      h.clipTop +
                      l +
                      h.clipRight +
                      l +
                      h.clipBottom +
                      l +
                      h.clipLeft +
                      ")"),
                    (e = this.format(e).split(",").join(l)))
                  : ((o = this.format(Z(t, this.p, r, !1, this.dflt))),
                    (e = this.format(e))),
                this.parseComplex(t.style, o, e, n, a)
              );
            },
          }),
          dt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0,
          }),
          dt("autoRound,strictUnits", {
            parser: function (t, e, i, s, r) {
              return r;
            },
          }),
          dt("border", {
            defaultValue: "0px solid #000",
            parser: function (t, e, i, s, n, a) {
              return this.parseComplex(
                t.style,
                this.format(
                  Z(t, "borderTopWidth", r, !1, "0px") +
                    " " +
                    Z(t, "borderTopStyle", r, !1, "solid") +
                    " " +
                    Z(t, "borderTopColor", r, !1, "#000"),
                ),
                this.format(e),
                n,
                a,
              );
            },
            color: !0,
            formatter: function (t) {
              var e = t.split(" ");
              return (
                e[0] +
                " " +
                (e[1] || "solid") +
                " " +
                (t.match(ht) || ["#000"])[0]
              );
            },
          }),
          dt("borderWidth", {
            parser: _t(
              "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth",
            ),
          }),
          dt("float,cssFloat,styleFloat", {
            parser: function (t, e, i, s, r, n) {
              var a = t.style,
                o = "cssFloat" in a ? "cssFloat" : "styleFloat";
              return new pt(a, o, 0, 0, r, -1, i, !1, 0, a[o], e);
            },
          });
        var kt = function (t) {
          var e,
            i = this.t,
            s = i.filter || Z(this.data, "filter"),
            r = (this.s + this.c * t) | 0;
          100 === r &&
            (s.indexOf("atrix(") === -1 &&
            s.indexOf("radient(") === -1 &&
            s.indexOf("oader(") === -1
              ? (i.removeAttribute("filter"), (e = !Z(this.data, "filter")))
              : ((i.filter = s.replace(x, "")), (e = !0))),
            e ||
              (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"),
              s.indexOf("opacity") === -1
                ? (0 === r && this.xn1) ||
                  (i.filter = s + " alpha(opacity=" + r + ")")
                : (i.filter = s.replace(T, "opacity=" + r)));
        };
        dt("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function (t, e, i, s, n, a) {
            var o = parseFloat(Z(t, "opacity", r, !1, "1")),
              h = t.style,
              l = "autoAlpha" === i;
            return (
              "string" == typeof e &&
                "=" === e.charAt(1) &&
                (e =
                  ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
              l &&
                1 === o &&
                "hidden" === Z(t, "visibility", r) &&
                0 !== e &&
                (o = 0),
              Y
                ? (n = new pt(h, "opacity", o, e - o, n))
                : ((n = new pt(h, "opacity", 100 * o, 100 * (e - o), n)),
                  (n.xn1 = l ? 1 : 0),
                  (h.zoom = 1),
                  (n.type = 2),
                  (n.b = "alpha(opacity=" + n.s + ")"),
                  (n.e = "alpha(opacity=" + (n.s + n.c) + ")"),
                  (n.data = t),
                  (n.plugin = a),
                  (n.setRatio = kt)),
              l &&
                ((n = new pt(
                  h,
                  "visibility",
                  0,
                  0,
                  n,
                  -1,
                  null,
                  !1,
                  0,
                  0 !== o ? "inherit" : "hidden",
                  0 === e ? "hidden" : "inherit",
                )),
                (n.xs0 = "inherit"),
                s._overwriteProps.push(n.n),
                s._overwriteProps.push(i)),
              n
            );
          },
        });
        var At = function (t, e) {
            e &&
              (t.removeProperty
                ? t.removeProperty(e.replace(P, "-$1").toLowerCase())
                : t.removeAttribute(e));
          },
          Ct = function (t) {
            if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
              this.t.className = 0 === t ? this.b : this.e;
              for (var e = this.data, i = this.t.style; e; )
                e.v ? (i[e.p] = e.v) : At(i, e.p), (e = e._next);
              1 === t &&
                this.t._gsClassPT === this &&
                (this.t._gsClassPT = null);
            } else this.t.className !== this.e && (this.t.className = this.e);
          };
        dt("className", {
          parser: function (t, e, s, n, a, o, h) {
            var l,
              _,
              u,
              p,
              c,
              f = t.className,
              m = t.style.cssText;
            if (
              ((a = n._classNamePT = new pt(t, s, 0, 0, a, 2)),
              (a.setRatio = Ct),
              (a.pr = -11),
              (i = !0),
              (a.b = f),
              (_ = Q(t, r)),
              (u = t._gsClassPT))
            ) {
              for (p = {}, c = u.data; c; ) (p[c.p] = 1), (c = c._next);
              u.setRatio(1);
            }
            return (
              (t._gsClassPT = a),
              (a.e =
                "=" !== e.charAt(1)
                  ? e
                  : f.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") +
                    ("+" === e.charAt(0) ? " " + e.substr(2) : "")),
              n._tween._duration &&
                ((t.className = a.e),
                (l = H(t, _, Q(t), h, p)),
                (t.className = f),
                (a.data = l.firstMPT),
                (t.style.cssText = m),
                (a = a.xfirst = n.parse(t, l.difs, a, o))),
              a
            );
          },
        });
        var Ot = function (t) {
          if (
            (1 === t || 0 === t) &&
            this.data._totalTime === this.data._totalDuration &&
            "isFromStart" !== this.data.data
          ) {
            var e,
              i,
              s,
              r,
              n = this.t.style,
              a = o.transform.parse;
            if ("all" === this.e) (n.cssText = ""), (r = !0);
            else
              for (e = this.e.split(","), s = e.length; --s > -1; )
                (i = e[s]),
                  o[i] &&
                    (o[i].parse === a
                      ? (r = !0)
                      : (i = "transformOrigin" === i ? wt : o[i].p)),
                  At(n, i);
            r && (At(n, yt), this.t._gsTransform && delete this.t._gsTransform);
          }
        };
        for (
          dt("clearProps", {
            parser: function (t, e, s, r, n) {
              return (
                (n = new pt(t, s, 0, 0, n, 2)),
                (n.setRatio = Ot),
                (n.e = e),
                (n.pr = -10),
                (n.data = r._tween),
                (i = !0),
                n
              );
            },
          }),
            h = "bezier,throwProps,physicsProps,physics2D".split(","),
            ft = h.length;
          ft--;

        )
          gt(h[ft]);
        (h = a.prototype),
          (h._firstPT = null),
          (h._onInitTween = function (t, e, o) {
            if (!t.nodeType) return !1;
            (this._target = t),
              (this._tween = o),
              (this._vars = e),
              (l = e.autoRound),
              (i = !1),
              (s = e.suffixMap || a.suffixMap),
              (r = W(t, "")),
              (n = this._overwriteProps);
            var h,
              p,
              f,
              m,
              d,
              g,
              v,
              y,
              T,
              x = t.style;
            if (
              (_ &&
                "" === x.zIndex &&
                ((h = Z(t, "zIndex", r)),
                ("auto" !== h && "" !== h) || (x.zIndex = 0)),
              "string" == typeof e &&
                ((m = x.cssText),
                (h = Q(t, r)),
                (x.cssText = m + ";" + e),
                (h = H(t, h, Q(t)).difs),
                !Y && w.test(e) && (h.opacity = parseFloat(RegExp.$1)),
                (e = h),
                (x.cssText = m)),
              (this._firstPT = p = this.parse(t, e, null)),
              this._transformType)
            ) {
              for (
                T = 3 === this._transformType,
                  yt
                    ? u &&
                      ((_ = !0),
                      "" === x.zIndex &&
                        ((v = Z(t, "zIndex", r)),
                        ("auto" !== v && "" !== v) || (x.zIndex = 0)),
                      c &&
                        (x.WebkitBackfaceVisibility =
                          this._vars.WebkitBackfaceVisibility ||
                          (T ? "visible" : "hidden")))
                    : (x.zoom = 1),
                  f = p;
                f && f._next;

              )
                f = f._next;
              (y = new pt(t, "transform", 0, 0, null, 2)),
                this._linkCSSP(y, null, f),
                (y.setRatio = T && xt ? St : yt ? Rt : Pt),
                (y.data = this._transform || bt(t, r, !0)),
                n.pop();
            }
            if (i) {
              for (; p; ) {
                for (g = p._next, f = m; f && f.pr > p.pr; ) f = f._next;
                (p._prev = f ? f._prev : d) ? (p._prev._next = p) : (m = p),
                  (p._next = f) ? (f._prev = p) : (d = p),
                  (p = g);
              }
              this._firstPT = m;
            }
            return !0;
          }),
          (h.parse = function (t, e, i, n) {
            var a,
              h,
              _,
              u,
              p,
              c,
              f,
              m,
              d,
              g,
              v = t.style;
            for (a in e)
              (c = e[a]),
                (h = o[a]),
                h
                  ? (i = h.parse(t, c, a, this, i, n, e))
                  : ((p = Z(t, a, r) + ""),
                    (d = "string" == typeof c),
                    "color" === a ||
                    "fill" === a ||
                    "stroke" === a ||
                    a.indexOf("Color") !== -1 ||
                    (d && b.test(c))
                      ? (d ||
                          ((c = ot(c)),
                          (c =
                            (c.length > 3 ? "rgba(" : "rgb(") +
                            c.join(",") +
                            ")")),
                        (i = ct(v, a, p, c, !0, "transparent", i, 0, n)))
                      : !d || (c.indexOf(" ") === -1 && c.indexOf(",") === -1)
                        ? ((_ = parseFloat(p)),
                          (f = _ || 0 === _ ? p.substr((_ + "").length) : ""),
                          ("" !== p && "auto" !== p) ||
                            ("width" === a || "height" === a
                              ? ((_ = tt(t, a, r)), (f = "px"))
                              : "left" === a || "top" === a
                                ? ((_ = G(t, a, r)), (f = "px"))
                                : ((_ = "opacity" !== a ? 0 : 1), (f = ""))),
                          (g = d && "=" === c.charAt(1)),
                          g
                            ? ((u = parseInt(c.charAt(0) + "1", 10)),
                              (c = c.substr(2)),
                              (u *= parseFloat(c)),
                              (m = c.replace(y, "")))
                            : ((u = parseFloat(c)),
                              (m = d ? c.substr((u + "").length) || "" : "")),
                          "" === m && (m = a in s ? s[a] : f),
                          (c = u || 0 === u ? (g ? u + _ : u) + m : e[a]),
                          f !== m &&
                            "" !== m &&
                            (u || 0 === u) &&
                            (_ || 0 === _) &&
                            ((_ = $(t, a, _, f)),
                            "%" === m
                              ? ((_ /= $(t, a, 100, "%") / 100),
                                e.strictUnits !== !0 && (p = _ + "%"))
                              : "em" === m
                                ? (_ /= $(t, a, 1, "em"))
                                : ((u = $(t, a, u, m)), (m = "px")),
                            g && (u || 0 === u) && (c = u + _ + m)),
                          g && (u += _),
                          (!_ && 0 !== _) || (!u && 0 !== u)
                            ? void 0 !== v[a] &&
                              (c || (c + "" != "NaN" && null != c))
                              ? ((i = new pt(
                                  v,
                                  a,
                                  u || _ || 0,
                                  0,
                                  i,
                                  -1,
                                  a,
                                  !1,
                                  0,
                                  p,
                                  c,
                                )),
                                (i.xs0 =
                                  "none" !== c ||
                                  ("display" !== a && a.indexOf("Style") === -1)
                                    ? c
                                    : p))
                              : j("invalid " + a + " tween value: " + e[a])
                            : ((i = new pt(
                                v,
                                a,
                                _,
                                u - _,
                                i,
                                0,
                                a,
                                l !== !1 && ("px" === m || "zIndex" === a),
                                0,
                                p,
                                c,
                              )),
                              (i.xs0 = m)))
                        : (i = ct(v, a, p, c, !0, null, i, 0, n))),
                n && i && !i.plugin && (i.plugin = n);
            return i;
          }),
          (h.setRatio = function (t) {
            var e,
              i,
              s,
              r = this._firstPT,
              n = 1e-6;
            if (
              1 !== t ||
              (this._tween._time !== this._tween._duration &&
                0 !== this._tween._time)
            )
              if (
                t ||
                (this._tween._time !== this._tween._duration &&
                  0 !== this._tween._time) ||
                this._tween._rawPrevTime === -1e-6
              )
                for (; r; ) {
                  if (
                    ((e = r.c * t + r.s),
                    r.r
                      ? (e = e > 0 ? (e + 0.5) | 0 : (e - 0.5) | 0)
                      : e < n && e > -n && (e = 0),
                    r.type)
                  )
                    if (1 === r.type)
                      if (((s = r.l), 2 === s))
                        r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                      else if (3 === s)
                        r.t[r.p] =
                          r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                      else if (4 === s)
                        r.t[r.p] =
                          r.xs0 +
                          e +
                          r.xs1 +
                          r.xn1 +
                          r.xs2 +
                          r.xn2 +
                          r.xs3 +
                          r.xn3 +
                          r.xs4;
                      else if (5 === s)
                        r.t[r.p] =
                          r.xs0 +
                          e +
                          r.xs1 +
                          r.xn1 +
                          r.xs2 +
                          r.xn2 +
                          r.xs3 +
                          r.xn3 +
                          r.xs4 +
                          r.xn4 +
                          r.xs5;
                      else {
                        for (i = r.xs0 + e + r.xs1, s = 1; s < r.l; s++)
                          i += r["xn" + s] + r["xs" + (s + 1)];
                        r.t[r.p] = i;
                      }
                    else
                      r.type === -1
                        ? (r.t[r.p] = r.xs0)
                        : r.setRatio && r.setRatio(t);
                  else r.t[r.p] = e + r.xs0;
                  r = r._next;
                }
              else
                for (; r; )
                  2 !== r.type ? (r.t[r.p] = r.b) : r.setRatio(t),
                    (r = r._next);
            else
              for (; r; )
                2 !== r.type ? (r.t[r.p] = r.e) : r.setRatio(t), (r = r._next);
          }),
          (h._enableTransforms = function (t) {
            (this._transformType = t || 3 === this._transformType ? 3 : 2),
              (this._transform = this._transform || bt(this._target, r, !0));
          }),
          (h._linkCSSP = function (t, e, i, s) {
            return (
              t &&
                (e && (e._prev = t),
                t._next && (t._next._prev = t._prev),
                t._prev
                  ? (t._prev._next = t._next)
                  : this._firstPT === t &&
                    ((this._firstPT = t._next), (s = !0)),
                i
                  ? (i._next = t)
                  : s || null !== this._firstPT || (this._firstPT = t),
                (t._next = e),
                (t._prev = i)),
              t
            );
          }),
          (h._kill = function (e) {
            var i,
              s,
              r,
              n = e;
            if (e.autoAlpha || e.alpha) {
              n = {};
              for (s in e) n[s] = e[s];
              (n.opacity = 1), n.autoAlpha && (n.visibility = 1);
            }
            return (
              e.className &&
                (i = this._classNamePT) &&
                ((r = i.xfirst),
                r && r._prev
                  ? this._linkCSSP(r._prev, i._next, r._prev._prev)
                  : r === this._firstPT && (this._firstPT = i._next),
                i._next && this._linkCSSP(i._next, i._next._next, r._prev),
                (this._classNamePT = null)),
              t.prototype._kill.call(this, n)
            );
          });
        var Dt = function (t, e, i) {
          var s, r, n, a;
          if (t.slice) for (r = t.length; --r > -1; ) Dt(t[r], e, i);
          else
            for (s = t.childNodes, r = s.length; --r > -1; )
              (n = s[r]),
                (a = n.type),
                n.style && (e.push(Q(n)), i && i.push(n)),
                (1 !== a && 9 !== a && 11 !== a) ||
                  !n.childNodes.length ||
                  Dt(n, e, i);
        };
        return (
          (a.cascadeTo = function (t, i, s) {
            var r,
              n,
              a,
              o = e.to(t, i, s),
              h = [o],
              l = [],
              _ = [],
              u = [],
              p = e._internals.reservedProps;
            for (
              t = o._targets || o.target,
                Dt(t, l, u),
                o.render(i, !0),
                Dt(t, _),
                o.render(0, !0),
                o._enabled(!0),
                r = u.length;
              --r > -1;

            )
              if (((n = H(u[r], l[r], _[r])), n.firstMPT)) {
                n = n.difs;
                for (a in s) p[a] && (n[a] = s[a]);
                h.push(e.to(u[r], i, n));
              }
            return h;
          }),
          t.activate([a]),
          a
        );
      },
      !0,
    ),
    (function () {
      var t = window._gsDefine.plugin({
          propName: "roundProps",
          priority: -1,
          API: 2,
          init: function (t, e, i) {
            return (this._tween = i), !0;
          },
        }),
        e = t.prototype;
      (e._onInitAllProps = function () {
        for (
          var t,
            e,
            i,
            s = this._tween,
            r =
              s.vars.roundProps instanceof Array
                ? s.vars.roundProps
                : s.vars.roundProps.split(","),
            n = r.length,
            a = {},
            o = s._propLookup.roundProps;
          --n > -1;

        )
          a[r[n]] = 1;
        for (n = r.length; --n > -1; )
          for (t = r[n], e = s._firstPT; e; )
            (i = e._next),
              e.pg
                ? e.t._roundProps(a, !0)
                : e.n === t &&
                  (this._add(e.t, t, e.s, e.c),
                  i && (i._prev = e._prev),
                  e._prev
                    ? (e._prev._next = i)
                    : s._firstPT === e && (s._firstPT = i),
                  (e._next = e._prev = null),
                  (s._propLookup[t] = o)),
              (e = i);
        return !1;
      }),
        (e._add = function (t, e, i, s) {
          this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e);
        });
    })(),
    window._gsDefine.plugin({
      propName: "attr",
      API: 2,
      version: "0.2.0",
      init: function (t, e, i) {
        var s;
        if ("function" != typeof t.setAttribute) return !1;
        (this._target = t), (this._proxy = {});
        for (s in e)
          this._addTween(
            this._proxy,
            s,
            parseFloat(t.getAttribute(s)),
            e[s],
            s,
          ) && this._overwriteProps.push(s);
        return !0;
      },
      set: function (t) {
        this._super.setRatio.call(this, t);
        for (var e, i = this._overwriteProps, s = i.length; --s > -1; )
          (e = i[s]), this._target.setAttribute(e, this._proxy[e] + "");
      },
    }),
    (window._gsDefine.plugin({
      propName: "directionalRotation",
      API: 2,
      version: "0.2.0",
      init: function (t, e, i) {
        "object" != typeof e && (e = { rotation: e }), (this.finals = {});
        var s,
          r,
          n,
          a,
          o,
          h,
          l = e.useRadians === !0 ? 2 * Math.PI : 360,
          _ = 1e-6;
        for (s in e)
          "useRadians" !== s &&
            ((h = (e[s] + "").split("_")),
            (r = h[0]),
            (n = parseFloat(
              "function" != typeof t[s]
                ? t[s]
                : t[
                    s.indexOf("set") ||
                    "function" != typeof t["get" + s.substr(3)]
                      ? s
                      : "get" + s.substr(3)
                  ](),
            )),
            (a = this.finals[s] =
              "string" == typeof r && "=" === r.charAt(1)
                ? n + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2))
                : Number(r) || 0),
            (o = a - n),
            h.length &&
              ((r = h.join("_")),
              r.indexOf("short") !== -1 &&
                ((o %= l), o !== o % (l / 2) && (o = o < 0 ? o + l : o - l)),
              r.indexOf("_cw") !== -1 && o < 0
                ? (o = ((o + 9999999999 * l) % l) - ((o / l) | 0) * l)
                : r.indexOf("ccw") !== -1 &&
                  o > 0 &&
                  (o = ((o - 9999999999 * l) % l) - ((o / l) | 0) * l)),
            (o > _ || o < -_) &&
              (this._addTween(t, s, n, n + o, s),
              this._overwriteProps.push(s)));
        return !0;
      },
      set: function (t) {
        var e;
        if (1 !== t) this._super.setRatio.call(this, t);
        else
          for (e = this._firstPT; e; )
            e.f ? e.t[e.p](this.finals[e.p]) : (e.t[e.p] = this.finals[e.p]),
              (e = e._next);
      },
    })._autoCSS = !0),
    window._gsDefine(
      "easing.Back",
      ["easing.Ease"],
      function (t) {
        var e,
          i,
          s,
          r = window.GreenSockGlobals || window,
          n = r.com.greensock,
          a = 2 * Math.PI,
          o = Math.PI / 2,
          h = n._class,
          l = function (e, i) {
            var s = h("easing." + e, function () {}, !0),
              r = (s.prototype = new t());
            return (r.constructor = s), (r.getRatio = i), s;
          },
          _ = t.register || function () {},
          u = function (t, e, i, s, r) {
            var n = h(
              "easing." + t,
              { easeOut: new e(), easeIn: new i(), easeInOut: new s() },
              !0,
            );
            return _(n, t), n;
          },
          p = function (t, e, i) {
            (this.t = t),
              (this.v = e),
              i &&
                ((this.next = i),
                (i.prev = this),
                (this.c = i.v - e),
                (this.gap = i.t - t));
          },
          c = function (e, i) {
            var s = h(
                "easing." + e,
                function (t) {
                  (this._p1 = t || 0 === t ? t : 1.70158),
                    (this._p2 = 1.525 * this._p1);
                },
                !0,
              ),
              r = (s.prototype = new t());
            return (
              (r.constructor = s),
              (r.getRatio = i),
              (r.config = function (t) {
                return new s(t);
              }),
              s
            );
          },
          f = u(
            "Back",
            c("BackOut", function (t) {
              return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
            }),
            c("BackIn", function (t) {
              return t * t * ((this._p1 + 1) * t - this._p1);
            }),
            c("BackInOut", function (t) {
              return (t *= 2) < 1
                ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2)
                : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
            }),
          ),
          m = h(
            "easing.SlowMo",
            function (t, e, i) {
              (e = e || 0 === e ? e : 0.7),
                null == t ? (t = 0.7) : t > 1 && (t = 1),
                (this._p = 1 !== t ? e : 0),
                (this._p1 = (1 - t) / 2),
                (this._p2 = t),
                (this._p3 = this._p1 + this._p2),
                (this._calcEnd = i === !0);
            },
            !0,
          ),
          d = (m.prototype = new t());
        return (
          (d.constructor = m),
          (d.getRatio = function (t) {
            var e = t + (0.5 - t) * this._p;
            return t < this._p1
              ? this._calcEnd
                ? 1 - (t = 1 - t / this._p1) * t
                : e - (t = 1 - t / this._p1) * t * t * t * e
              : t > this._p3
                ? this._calcEnd
                  ? 1 - (t = (t - this._p3) / this._p1) * t
                  : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
                : this._calcEnd
                  ? 1
                  : e;
          }),
          (m.ease = new m(0.7, 0.7)),
          (d.config = m.config =
            function (t, e, i) {
              return new m(t, e, i);
            }),
          (e = h(
            "easing.SteppedEase",
            function (t) {
              (t = t || 1), (this._p1 = 1 / t), (this._p2 = t + 1);
            },
            !0,
          )),
          (d = e.prototype = new t()),
          (d.constructor = e),
          (d.getRatio = function (t) {
            return (
              t < 0 ? (t = 0) : t >= 1 && (t = 0.999999999),
              ((this._p2 * t) >> 0) * this._p1
            );
          }),
          (d.config = e.config =
            function (t) {
              return new e(t);
            }),
          (i = h(
            "easing.RoughEase",
            function (e) {
              e = e || {};
              for (
                var i,
                  s,
                  r,
                  n,
                  a,
                  o,
                  h = e.taper || "none",
                  l = [],
                  _ = 0,
                  u = 0 | (e.points || 20),
                  c = u,
                  f = e.randomize !== !1,
                  m = e.clamp === !0,
                  d = e.template instanceof t ? e.template : null,
                  g = "number" == typeof e.strength ? 0.4 * e.strength : 0.4;
                --c > -1;

              )
                (i = f ? Math.random() : (1 / u) * c),
                  (s = d ? d.getRatio(i) : i),
                  "none" === h
                    ? (r = g)
                    : "out" === h
                      ? ((n = 1 - i), (r = n * n * g))
                      : "in" === h
                        ? (r = i * i * g)
                        : i < 0.5
                          ? ((n = 2 * i), (r = n * n * 0.5 * g))
                          : ((n = 2 * (1 - i)), (r = n * n * 0.5 * g)),
                  f
                    ? (s += Math.random() * r - 0.5 * r)
                    : c % 2
                      ? (s += 0.5 * r)
                      : (s -= 0.5 * r),
                  m && (s > 1 ? (s = 1) : s < 0 && (s = 0)),
                  (l[_++] = { x: i, y: s });
              for (
                l.sort(function (t, e) {
                  return t.x - e.x;
                }),
                  o = new p(1, 1, null),
                  c = u;
                --c > -1;

              )
                (a = l[c]), (o = new p(a.x, a.y, o));
              this._prev = new p(0, 0, 0 !== o.t ? o : o.next);
            },
            !0,
          )),
          (d = i.prototype = new t()),
          (d.constructor = i),
          (d.getRatio = function (t) {
            var e = this._prev;
            if (t > e.t) {
              for (; e.next && t >= e.t; ) e = e.next;
              e = e.prev;
            } else for (; e.prev && t <= e.t; ) e = e.prev;
            return (this._prev = e), e.v + ((t - e.t) / e.gap) * e.c;
          }),
          (d.config = function (t) {
            return new i(t);
          }),
          (i.ease = new i()),
          u(
            "Bounce",
            l("BounceOut", function (t) {
              return t < 1 / 2.75
                ? 7.5625 * t * t
                : t < 2 / 2.75
                  ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                  : t < 2.5 / 2.75
                    ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                    : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            }),
            l("BounceIn", function (t) {
              return (t = 1 - t) < 1 / 2.75
                ? 1 - 7.5625 * t * t
                : t < 2 / 2.75
                  ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                  : t < 2.5 / 2.75
                    ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                    : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
            }),
            l("BounceInOut", function (t) {
              var e = t < 0.5;
              return (
                (t = e ? 1 - 2 * t : 2 * t - 1),
                t < 1 / 2.75
                  ? (t *= 7.5625 * t)
                  : (t =
                      t < 2 / 2.75
                        ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                        : t < 2.5 / 2.75
                          ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                          : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                e ? 0.5 * (1 - t) : 0.5 * t + 0.5
              );
            }),
          ),
          u(
            "Circ",
            l("CircOut", function (t) {
              return Math.sqrt(1 - (t -= 1) * t);
            }),
            l("CircIn", function (t) {
              return -(Math.sqrt(1 - t * t) - 1);
            }),
            l("CircInOut", function (t) {
              return (t *= 2) < 1
                ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            }),
          ),
          (s = function (e, i, s) {
            var r = h(
                "easing." + e,
                function (t, e) {
                  (this._p1 = t || 1),
                    (this._p2 = e || s),
                    (this._p3 =
                      (this._p2 / a) * (Math.asin(1 / this._p1) || 0));
                },
                !0,
              ),
              n = (r.prototype = new t());
            return (
              (n.constructor = r),
              (n.getRatio = i),
              (n.config = function (t, e) {
                return new r(t, e);
              }),
              r
            );
          }),
          u(
            "Elastic",
            s(
              "ElasticOut",
              function (t) {
                return (
                  this._p1 *
                    Math.pow(2, -10 * t) *
                    Math.sin(((t - this._p3) * a) / this._p2) +
                  1
                );
              },
              0.3,
            ),
            s(
              "ElasticIn",
              function (t) {
                return -(
                  this._p1 *
                  Math.pow(2, 10 * (t -= 1)) *
                  Math.sin(((t - this._p3) * a) / this._p2)
                );
              },
              0.3,
            ),
            s(
              "ElasticInOut",
              function (t) {
                return (t *= 2) < 1
                  ? -0.5 *
                      (this._p1 *
                        Math.pow(2, 10 * (t -= 1)) *
                        Math.sin(((t - this._p3) * a) / this._p2))
                  : this._p1 *
                      Math.pow(2, -10 * (t -= 1)) *
                      Math.sin(((t - this._p3) * a) / this._p2) *
                      0.5 +
                      1;
              },
              0.45,
            ),
          ),
          u(
            "Expo",
            l("ExpoOut", function (t) {
              return 1 - Math.pow(2, -10 * t);
            }),
            l("ExpoIn", function (t) {
              return Math.pow(2, 10 * (t - 1)) - 0.001;
            }),
            l("ExpoInOut", function (t) {
              return (t *= 2) < 1
                ? 0.5 * Math.pow(2, 10 * (t - 1))
                : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
            }),
          ),
          u(
            "Sine",
            l("SineOut", function (t) {
              return Math.sin(t * o);
            }),
            l("SineIn", function (t) {
              return -Math.cos(t * o) + 1;
            }),
            l("SineInOut", function (t) {
              return -0.5 * (Math.cos(Math.PI * t) - 1);
            }),
          ),
          h(
            "easing.EaseLookup",
            {
              find: function (e) {
                return t.map[e];
              },
            },
            !0,
          ),
          _(r.SlowMo, "SlowMo", "ease,"),
          _(i, "RoughEase", "ease,"),
          _(e, "SteppedEase", "ease,"),
          f
        );
      },
      !0,
    );
}),
  (function (t) {
    "use strict";
    var e = t.GreenSockGlobals || t;
    if (!e.TweenLite) {
      var i,
        s,
        r,
        n,
        a,
        o = function (t) {
          var i,
            s = t.split("."),
            r = e;
          for (i = 0; i < s.length; i++) r[s[i]] = r = r[s[i]] || {};
          return r;
        },
        h = o("com.greensock"),
        l = 1e-10,
        _ = [].slice,
        u = function () {},
        p = (function () {
          var t = Object.prototype.toString,
            e = t.call([]);
          return function (i) {
            return (
              null != i &&
              (i instanceof Array ||
                ("object" == typeof i && !!i.push && t.call(i) === e))
            );
          };
        })(),
        c = {},
        f = function (i, s, r, n) {
          (this.sc = c[i] ? c[i].sc : []),
            (c[i] = this),
            (this.gsClass = null),
            (this.func = r);
          var a = [];
          (this.check = function (h) {
            for (var l, _, u, p, m = s.length, d = m; --m > -1; )
              (l = c[s[m]] || new f(s[m], [])).gsClass
                ? ((a[m] = l.gsClass), d--)
                : h && l.sc.push(this);
            if (0 === d && r)
              for (
                _ = ("com.greensock." + i).split("."),
                  u = _.pop(),
                  p = o(_.join("."))[u] = this.gsClass = r.apply(r, a),
                  n &&
                    ((e[u] = p),
                    "function" == typeof define && define.amd
                      ? define(
                          (t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") +
                            i.split(".").join("/"),
                          [],
                          function () {
                            return p;
                          },
                        )
                      : "undefined" != typeof module &&
                        module.exports &&
                        (module.exports = p)),
                  m = 0;
                m < this.sc.length;
                m++
              )
                this.sc[m].check();
          }),
            this.check(!0);
        },
        m = (t._gsDefine = function (t, e, i, s) {
          return new f(t, e, i, s);
        }),
        d = (h._class = function (t, e, i) {
          return (
            (e = e || function () {}),
            m(
              t,
              [],
              function () {
                return e;
              },
              i,
            ),
            e
          );
        });
      m.globals = e;
      var g = [0, 0, 1, 1],
        v = [],
        y = d(
          "easing.Ease",
          function (t, e, i, s) {
            (this._func = t),
              (this._type = i || 0),
              (this._power = s || 0),
              (this._params = e ? g.concat(e) : g);
          },
          !0,
        ),
        T = (y.map = {}),
        w = (y.register = function (t, e, i, s) {
          for (
            var r,
              n,
              a,
              o,
              l = e.split(","),
              _ = l.length,
              u = (i || "easeIn,easeOut,easeInOut").split(",");
            --_ > -1;

          )
            for (
              n = l[_],
                r = s ? d("easing." + n, null, !0) : h.easing[n] || {},
                a = u.length;
              --a > -1;

            )
              (o = u[a]),
                (T[n + "." + o] =
                  T[o + n] =
                  r[o] =
                    t.getRatio ? t : t[o] || new t());
        });
      for (
        r = y.prototype,
          r._calcEnd = !1,
          r.getRatio = function (t) {
            if (this._func)
              return (
                (this._params[0] = t), this._func.apply(null, this._params)
              );
            var e = this._type,
              i = this._power,
              s = 1 === e ? 1 - t : 2 === e ? t : t < 0.5 ? 2 * t : 2 * (1 - t);
            return (
              1 === i
                ? (s *= s)
                : 2 === i
                  ? (s *= s * s)
                  : 3 === i
                    ? (s *= s * s * s)
                    : 4 === i && (s *= s * s * s * s),
              1 === e ? 1 - s : 2 === e ? s : t < 0.5 ? s / 2 : 1 - s / 2
            );
          },
          i = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
          s = i.length;
        --s > -1;

      )
        (r = i[s] + ",Power" + s),
          w(new y(null, null, 1, s), r, "easeOut", !0),
          w(
            new y(null, null, 2, s),
            r,
            "easeIn" + (0 === s ? ",easeNone" : ""),
          ),
          w(new y(null, null, 3, s), r, "easeInOut");
      (T.linear = h.easing.Linear.easeIn), (T.swing = h.easing.Quad.easeInOut);
      var x = d("events.EventDispatcher", function (t) {
        (this._listeners = {}), (this._eventTarget = t || this);
      });
      (r = x.prototype),
        (r.addEventListener = function (t, e, i, s, r) {
          r = r || 0;
          var o,
            h,
            l = this._listeners[t],
            _ = 0;
          for (
            null == l && (this._listeners[t] = l = []), h = l.length;
            --h > -1;

          )
            (o = l[h]),
              o.c === e && o.s === i
                ? l.splice(h, 1)
                : 0 === _ && o.pr < r && (_ = h + 1);
          l.splice(_, 0, { c: e, s: i, up: s, pr: r }),
            this !== n || a || n.wake();
        }),
        (r.removeEventListener = function (t, e) {
          var i,
            s = this._listeners[t];
          if (s)
            for (i = s.length; --i > -1; )
              if (s[i].c === e) return void s.splice(i, 1);
        }),
        (r.dispatchEvent = function (t) {
          var e,
            i,
            s,
            r = this._listeners[t];
          if (r)
            for (e = r.length, i = this._eventTarget; --e > -1; )
              (s = r[e]),
                s.up
                  ? s.c.call(s.s || i, { type: t, target: i })
                  : s.c.call(s.s || i);
        });
      var b = t.requestAnimationFrame,
        P = t.cancelAnimationFrame,
        S =
          Date.now ||
          function () {
            return new Date().getTime();
          },
        R = S();
      for (i = ["ms", "moz", "webkit", "o"], s = i.length; --s > -1 && !b; )
        (b = t[i[s] + "RequestAnimationFrame"]),
          (P =
            t[i[s] + "CancelAnimationFrame"] ||
            t[i[s] + "CancelRequestAnimationFrame"]);
      d("Ticker", function (t, e) {
        var i,
          s,
          r,
          o,
          h,
          l = this,
          _ = S(),
          p = e !== !1 && b,
          c = function (t) {
            (R = S()), (l.time = (R - _) / 1e3);
            var e,
              n = l.time - h;
            (!i || n > 0 || t === !0) &&
              (l.frame++, (h += n + (n >= o ? 0.004 : o - n)), (e = !0)),
              t !== !0 && (r = s(c)),
              e && l.dispatchEvent("tick");
          };
        x.call(l),
          (l.time = l.frame = 0),
          (l.tick = function () {
            c(!0);
          }),
          (l.sleep = function () {
            null != r &&
              (p && P ? P(r) : clearTimeout(r),
              (s = u),
              (r = null),
              l === n && (a = !1));
          }),
          (l.wake = function () {
            null !== r && l.sleep(),
              (s =
                0 === i
                  ? u
                  : p && b
                    ? b
                    : function (t) {
                        return setTimeout(t, (1e3 * (h - l.time) + 1) | 0);
                      }),
              l === n && (a = !0),
              c(2);
          }),
          (l.fps = function (t) {
            return arguments.length
              ? ((i = t),
                (o = 1 / (i || 60)),
                (h = this.time + o),
                void l.wake())
              : i;
          }),
          (l.useRAF = function (t) {
            return arguments.length ? (l.sleep(), (p = t), void l.fps(i)) : p;
          }),
          l.fps(t),
          setTimeout(function () {
            p && (!r || l.frame < 5) && l.useRAF(!1);
          }, 1500);
      }),
        (r = h.Ticker.prototype = new h.events.EventDispatcher()),
        (r.constructor = h.Ticker);
      var k = d("core.Animation", function (t, e) {
        if (
          ((this.vars = e = e || {}),
          (this._duration = this._totalDuration = t || 0),
          (this._delay = Number(e.delay) || 0),
          (this._timeScale = 1),
          (this._active = e.immediateRender === !0),
          (this.data = e.data),
          (this._reversed = e.reversed === !0),
          Y)
        ) {
          a || n.wake();
          var i = this.vars.useFrames ? z : Y;
          i.add(this, i._time), this.vars.paused && this.paused(!0);
        }
      });
      (n = k.ticker = new h.Ticker()),
        (r = k.prototype),
        (r._dirty = r._gc = r._initted = r._paused = !1),
        (r._totalTime = r._time = 0),
        (r._rawPrevTime = -1),
        (r._next = r._last = r._onUpdate = r._timeline = r.timeline = null),
        (r._paused = !1);
      var A = function () {
        a && S() - R > 2e3 && n.wake(), setTimeout(A, 2e3);
      };
      A(),
        (r.play = function (t, e) {
          return (
            arguments.length && this.seek(t, e), this.reversed(!1).paused(!1)
          );
        }),
        (r.pause = function (t, e) {
          return arguments.length && this.seek(t, e), this.paused(!0);
        }),
        (r.resume = function (t, e) {
          return arguments.length && this.seek(t, e), this.paused(!1);
        }),
        (r.seek = function (t, e) {
          return this.totalTime(Number(t), e !== !1);
        }),
        (r.restart = function (t, e) {
          return this.reversed(!1)
            .paused(!1)
            .totalTime(t ? -this._delay : 0, e !== !1, !0);
        }),
        (r.reverse = function (t, e) {
          return (
            arguments.length && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
          );
        }),
        (r.render = function (t, e, i) {}),
        (r.invalidate = function () {
          return this;
        }),
        (r.isActive = function () {
          var t,
            e = this._timeline,
            i = this._startTime;
          return (
            !e ||
            (!this._gc &&
              !this._paused &&
              e.isActive() &&
              (t = e.rawTime()) >= i &&
              t < i + this.totalDuration() / this._timeScale)
          );
        }),
        (r._enabled = function (t, e) {
          return (
            a || n.wake(),
            (this._gc = !t),
            (this._active = this.isActive()),
            e !== !0 &&
              (t && !this.timeline
                ? this._timeline.add(this, this._startTime - this._delay)
                : !t && this.timeline && this._timeline._remove(this, !0)),
            !1
          );
        }),
        (r._kill = function (t, e) {
          return this._enabled(!1, !1);
        }),
        (r.kill = function (t, e) {
          return this._kill(t, e), this;
        }),
        (r._uncache = function (t) {
          for (var e = t ? this : this.timeline; e; )
            (e._dirty = !0), (e = e.timeline);
          return this;
        }),
        (r._swapSelfInParams = function (t) {
          for (var e = t.length, i = t.concat(); --e > -1; )
            "{self}" === t[e] && (i[e] = this);
          return i;
        }),
        (r.eventCallback = function (t, e, i, s) {
          if ("on" === (t || "").substr(0, 2)) {
            var r = this.vars;
            if (1 === arguments.length) return r[t];
            null == e
              ? delete r[t]
              : ((r[t] = e),
                (r[t + "Params"] =
                  p(i) && i.join("").indexOf("{self}") !== -1
                    ? this._swapSelfInParams(i)
                    : i),
                (r[t + "Scope"] = s)),
              "onUpdate" === t && (this._onUpdate = e);
          }
          return this;
        }),
        (r.delay = function (t) {
          return arguments.length
            ? (this._timeline.smoothChildTiming &&
                this.startTime(this._startTime + t - this._delay),
              (this._delay = t),
              this)
            : this._delay;
        }),
        (r.duration = function (t) {
          return arguments.length
            ? ((this._duration = this._totalDuration = t),
              this._uncache(!0),
              this._timeline.smoothChildTiming &&
                this._time > 0 &&
                this._time < this._duration &&
                0 !== t &&
                this.totalTime(this._totalTime * (t / this._duration), !0),
              this)
            : ((this._dirty = !1), this._duration);
        }),
        (r.totalDuration = function (t) {
          return (
            (this._dirty = !1),
            arguments.length ? this.duration(t) : this._totalDuration
          );
        }),
        (r.time = function (t, e) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              this.totalTime(t > this._duration ? this._duration : t, e))
            : this._time;
        }),
        (r.totalTime = function (t, e, i) {
          if ((a || n.wake(), !arguments.length)) return this._totalTime;
          if (this._timeline) {
            if (
              (t < 0 && !i && (t += this.totalDuration()),
              this._timeline.smoothChildTiming)
            ) {
              this._dirty && this.totalDuration();
              var s = this._totalDuration,
                r = this._timeline;
              if (
                (t > s && !i && (t = s),
                (this._startTime =
                  (this._paused ? this._pauseTime : r._time) -
                  (this._reversed ? s - t : t) / this._timeScale),
                r._dirty || this._uncache(!1),
                r._timeline)
              )
                for (; r._timeline; )
                  r._timeline._time !==
                    (r._startTime + r._totalTime) / r._timeScale &&
                    r.totalTime(r._totalTime, !0),
                    (r = r._timeline);
            }
            this._gc && this._enabled(!0, !1),
              (this._totalTime === t && 0 !== this._duration) ||
                this.render(t, e, !1);
          }
          return this;
        }),
        (r._progress = r.totalProgress =
          function (t, e) {
            return arguments.length
              ? this.totalTime(this.duration() * t, e)
              : this._time / this.duration();
          }),
        (r.startTime = function (t) {
          return arguments.length
            ? (t !== this._startTime &&
                ((this._startTime = t),
                this.timeline &&
                  this.timeline._sortChildren &&
                  this.timeline.add(this, t - this._delay)),
              this)
            : this._startTime;
        }),
        (r.timeScale = function (t) {
          if (!arguments.length) return this._timeScale;
          if (
            ((t = t || l), this._timeline && this._timeline.smoothChildTiming)
          ) {
            var e = this._pauseTime,
              i = e || 0 === e ? e : this._timeline.totalTime();
            this._startTime = i - ((i - this._startTime) * this._timeScale) / t;
          }
          return (this._timeScale = t), this._uncache(!1);
        }),
        (r.reversed = function (t) {
          return arguments.length
            ? (t != this._reversed &&
                ((this._reversed = t),
                this.totalTime(
                  this._timeline && !this._timeline.smoothChildTiming
                    ? this.totalDuration() - this._totalTime
                    : this._totalTime,
                  !0,
                )),
              this)
            : this._reversed;
        }),
        (r.paused = function (t) {
          if (!arguments.length) return this._paused;
          if (t != this._paused && this._timeline) {
            a || t || n.wake();
            var e = this._timeline,
              i = e.rawTime(),
              s = i - this._pauseTime;
            !t &&
              e.smoothChildTiming &&
              ((this._startTime += s), this._uncache(!1)),
              (this._pauseTime = t ? i : null),
              (this._paused = t),
              (this._active = this.isActive()),
              !t &&
                0 !== s &&
                this._initted &&
                this.duration() &&
                this.render(
                  e.smoothChildTiming
                    ? this._totalTime
                    : (i - this._startTime) / this._timeScale,
                  !0,
                  !0,
                );
          }
          return this._gc && !t && this._enabled(!0, !1), this;
        });
      var C = d("core.SimpleTimeline", function (t) {
        k.call(this, 0, t),
          (this.autoRemoveChildren = this.smoothChildTiming = !0);
      });
      (r = C.prototype = new k()),
        (r.constructor = C),
        (r.kill()._gc = !1),
        (r._first = r._last = null),
        (r._sortChildren = !1),
        (r.add = r.insert =
          function (t, e, i, s) {
            var r, n;
            if (
              ((t._startTime = Number(e || 0) + t._delay),
              t._paused &&
                this !== t._timeline &&
                (t._pauseTime =
                  t._startTime +
                  (this.rawTime() - t._startTime) / t._timeScale),
              t.timeline && t.timeline._remove(t, !0),
              (t.timeline = t._timeline = this),
              t._gc && t._enabled(!0, !0),
              (r = this._last),
              this._sortChildren)
            )
              for (n = t._startTime; r && r._startTime > n; ) r = r._prev;
            return (
              r
                ? ((t._next = r._next), (r._next = t))
                : ((t._next = this._first), (this._first = t)),
              t._next ? (t._next._prev = t) : (this._last = t),
              (t._prev = r),
              this._timeline && this._uncache(!0),
              this
            );
          }),
        (r._remove = function (t, e) {
          return (
            t.timeline === this &&
              (e || t._enabled(!1, !0),
              (t.timeline = null),
              t._prev
                ? (t._prev._next = t._next)
                : this._first === t && (this._first = t._next),
              t._next
                ? (t._next._prev = t._prev)
                : this._last === t && (this._last = t._prev),
              this._timeline && this._uncache(!0)),
            this
          );
        }),
        (r.render = function (t, e, i) {
          var s,
            r = this._first;
          for (this._totalTime = this._time = this._rawPrevTime = t; r; )
            (s = r._next),
              (r._active || (t >= r._startTime && !r._paused)) &&
                (r._reversed
                  ? r.render(
                      (r._dirty ? r.totalDuration() : r._totalDuration) -
                        (t - r._startTime) * r._timeScale,
                      e,
                      i,
                    )
                  : r.render((t - r._startTime) * r._timeScale, e, i)),
              (r = s);
        }),
        (r.rawTime = function () {
          return a || n.wake(), this._totalTime;
        });
      var O = d(
          "TweenLite",
          function (e, i, s) {
            if (
              (k.call(this, i, s),
              (this.render = O.prototype.render),
              null == e)
            )
              throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : O.selector(e) || e;
            var r,
              n,
              a,
              o =
                e.jquery ||
                (e.length &&
                  e !== t &&
                  e[0] &&
                  (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))),
              h = this.vars.overwrite;
            if (
              ((this._overwrite = h =
                null == h
                  ? E[O.defaultOverwrite]
                  : "number" == typeof h
                    ? h >> 0
                    : E[h]),
              (o || e instanceof Array || (e.push && p(e))) &&
                "number" != typeof e[0])
            )
              for (
                this._targets = a = _.call(e, 0),
                  this._propLookup = [],
                  this._siblings = [],
                  r = 0;
                r < a.length;
                r++
              )
                (n = a[r]),
                  n
                    ? "string" != typeof n
                      ? n.length &&
                        n !== t &&
                        n[0] &&
                        (n[0] === t ||
                          (n[0].nodeType && n[0].style && !n.nodeType))
                        ? (a.splice(r--, 1),
                          (this._targets = a = a.concat(_.call(n, 0))))
                        : ((this._siblings[r] = U(n, this, !1)),
                          1 === h &&
                            this._siblings[r].length > 1 &&
                            j(n, this, null, 1, this._siblings[r]))
                      : ((n = a[r--] = O.selector(n)),
                        "string" == typeof n && a.splice(r + 1, 1))
                    : a.splice(r--, 1);
            else
              (this._propLookup = {}),
                (this._siblings = U(e, this, !1)),
                1 === h &&
                  this._siblings.length > 1 &&
                  j(e, this, null, 1, this._siblings);
            (this.vars.immediateRender ||
              (0 === i &&
                0 === this._delay &&
                this.vars.immediateRender !== !1)) &&
              this.render(-this._delay, !1, !0);
          },
          !0,
        ),
        D = function (e) {
          return (
            e.length &&
            e !== t &&
            e[0] &&
            (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))
          );
        },
        M = function (t, e) {
          var i,
            s = {};
          for (i in t)
            L[i] ||
              (i in e &&
                "x" !== i &&
                "y" !== i &&
                "width" !== i &&
                "height" !== i &&
                "className" !== i &&
                "border" !== i) ||
              !(!I[i] || (I[i] && I[i]._autoCSS)) ||
              ((s[i] = t[i]), delete t[i]);
          t.css = s;
        };
      (r = O.prototype = new k()),
        (r.constructor = O),
        (r.kill()._gc = !1),
        (r.ratio = 0),
        (r._firstPT = r._targets = r._overwrittenProps = r._startAt = null),
        (r._notifyPluginsOfEnabled = !1),
        (O.version = "1.11.4"),
        (O.defaultEase = r._ease = new y(null, null, 1, 1)),
        (O.defaultOverwrite = "auto"),
        (O.ticker = n),
        (O.autoSleep = !0),
        (O.selector =
          t.$ ||
          t.jQuery ||
          function (e) {
            return t.$
              ? ((O.selector = t.$), t.$(e))
              : t.document
                ? t.document.getElementById(
                    "#" === e.charAt(0) ? e.substr(1) : e,
                  )
                : e;
          });
      var X = (O._internals = { isArray: p, isSelector: D }),
        I = (O._plugins = {}),
        N = (O._tweenLookup = {}),
        F = 0,
        L = (X.reservedProps = {
          ease: 1,
          delay: 1,
          overwrite: 1,
          onComplete: 1,
          onCompleteParams: 1,
          onCompleteScope: 1,
          useFrames: 1,
          runBackwards: 1,
          startAt: 1,
          onUpdate: 1,
          onUpdateParams: 1,
          onUpdateScope: 1,
          onStart: 1,
          onStartParams: 1,
          onStartScope: 1,
          onReverseComplete: 1,
          onReverseCompleteParams: 1,
          onReverseCompleteScope: 1,
          onRepeat: 1,
          onRepeatParams: 1,
          onRepeatScope: 1,
          easeParams: 1,
          yoyo: 1,
          immediateRender: 1,
          repeat: 1,
          repeatDelay: 1,
          data: 1,
          paused: 1,
          reversed: 1,
          autoCSS: 1,
        }),
        E = {
          none: 0,
          all: 1,
          auto: 2,
          concurrent: 3,
          allOnStart: 4,
          preexisting: 5,
          true: 1,
          false: 0,
        },
        z = (k._rootFramesTimeline = new C()),
        Y = (k._rootTimeline = new C());
      (Y._startTime = n.time),
        (z._startTime = n.frame),
        (Y._active = z._active = !0),
        (k._updateRoot = function () {
          if (
            (Y.render((n.time - Y._startTime) * Y._timeScale, !1, !1),
            z.render((n.frame - z._startTime) * z._timeScale, !1, !1),
            !(n.frame % 120))
          ) {
            var t, e, i;
            for (i in N) {
              for (e = N[i].tweens, t = e.length; --t > -1; )
                e[t]._gc && e.splice(t, 1);
              0 === e.length && delete N[i];
            }
            if (
              ((i = Y._first),
              (!i || i._paused) &&
                O.autoSleep &&
                !z._first &&
                1 === n._listeners.tick.length)
            ) {
              for (; i && i._paused; ) i = i._next;
              i || n.sleep();
            }
          }
        }),
        n.addEventListener("tick", k._updateRoot);
      var U = function (t, e, i) {
          var s,
            r,
            n = t._gsTweenID;
          if (
            (N[n || (t._gsTweenID = n = "t" + F++)] ||
              (N[n] = { target: t, tweens: [] }),
            e && ((s = N[n].tweens), (s[(r = s.length)] = e), i))
          )
            for (; --r > -1; ) s[r] === e && s.splice(r, 1);
          return N[n].tweens;
        },
        j = function (t, e, i, s, r) {
          var n, a, o, h;
          if (1 === s || s >= 4) {
            for (h = r.length, n = 0; n < h; n++)
              if ((o = r[n]) !== e) o._gc || (o._enabled(!1, !1) && (a = !0));
              else if (5 === s) break;
            return a;
          }
          var _,
            u = e._startTime + l,
            p = [],
            c = 0,
            f = 0 === e._duration;
          for (n = r.length; --n > -1; )
            (o = r[n]) === e ||
              o._gc ||
              o._paused ||
              (o._timeline !== e._timeline
                ? ((_ = _ || B(e, 0, f)), 0 === B(o, _, f) && (p[c++] = o))
                : o._startTime <= u &&
                  o._startTime + o.totalDuration() / o._timeScale > u &&
                  (((f || !o._initted) && u - o._startTime <= 2e-10) ||
                    (p[c++] = o)));
          for (n = c; --n > -1; )
            (o = p[n]),
              2 === s && o._kill(i, t) && (a = !0),
              (2 !== s || (!o._firstPT && o._initted)) &&
                o._enabled(!1, !1) &&
                (a = !0);
          return a;
        },
        B = function (t, e, i) {
          for (
            var s = t._timeline, r = s._timeScale, n = t._startTime;
            s._timeline;

          ) {
            if (((n += s._startTime), (r *= s._timeScale), s._paused))
              return -100;
            s = s._timeline;
          }
          return (
            (n /= r),
            n > e
              ? n - e
              : (i && n === e) || (!t._initted && n - e < 2 * l)
                ? l
                : (n += t.totalDuration() / t._timeScale / r) > e + l
                  ? 0
                  : n - e - l
          );
        };
      (r._init = function () {
        var t,
          e,
          i,
          s,
          r = this.vars,
          n = this._overwrittenProps,
          a = this._duration,
          o = r.immediateRender,
          h = r.ease;
        if (r.startAt) {
          if (
            (this._startAt && this._startAt.render(-1, !0),
            (r.startAt.overwrite = 0),
            (r.startAt.immediateRender = !0),
            (this._startAt = O.to(this.target, 0, r.startAt)),
            o)
          )
            if (this._time > 0) this._startAt = null;
            else if (0 !== a) return;
        } else if (r.runBackwards && 0 !== a)
          if (this._startAt)
            this._startAt.render(-1, !0), (this._startAt = null);
          else {
            i = {};
            for (s in r) (L[s] && "autoCSS" !== s) || (i[s] = r[s]);
            if (
              ((i.overwrite = 0),
              (i.data = "isFromStart"),
              (this._startAt = O.to(this.target, 0, i)),
              r.immediateRender)
            ) {
              if (0 === this._time) return;
            } else this._startAt.render(-1, !0);
          }
        if (
          (h
            ? h instanceof y
              ? (this._ease =
                  r.easeParams instanceof Array
                    ? h.config.apply(h, r.easeParams)
                    : h)
              : (this._ease =
                  "function" == typeof h
                    ? new y(h, r.easeParams)
                    : T[h] || O.defaultEase)
            : (this._ease = O.defaultEase),
          (this._easeType = this._ease._type),
          (this._easePower = this._ease._power),
          (this._firstPT = null),
          this._targets)
        )
          for (t = this._targets.length; --t > -1; )
            this._initProps(
              this._targets[t],
              (this._propLookup[t] = {}),
              this._siblings[t],
              n ? n[t] : null,
            ) && (e = !0);
        else
          e = this._initProps(this.target, this._propLookup, this._siblings, n);
        if (
          (e && O._onPluginEvent("_onInitAllProps", this),
          n &&
            (this._firstPT ||
              ("function" != typeof this.target && this._enabled(!1, !1))),
          r.runBackwards)
        )
          for (i = this._firstPT; i; )
            (i.s += i.c), (i.c = -i.c), (i = i._next);
        (this._onUpdate = r.onUpdate), (this._initted = !0);
      }),
        (r._initProps = function (e, i, s, r) {
          var n, a, o, h, l, _;
          if (null == e) return !1;
          this.vars.css ||
            (e.style &&
              e !== t &&
              e.nodeType &&
              I.css &&
              this.vars.autoCSS !== !1 &&
              M(this.vars, e));
          for (n in this.vars) {
            if (((_ = this.vars[n]), L[n]))
              _ &&
                (_ instanceof Array || (_.push && p(_))) &&
                _.join("").indexOf("{self}") !== -1 &&
                (this.vars[n] = _ = this._swapSelfInParams(_, this));
            else if (
              I[n] &&
              (h = new I[n]())._onInitTween(e, this.vars[n], this)
            ) {
              for (
                this._firstPT = l =
                  {
                    _next: this._firstPT,
                    t: h,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: !0,
                    n: n,
                    pg: !0,
                    pr: h._priority,
                  },
                  a = h._overwriteProps.length;
                --a > -1;

              )
                i[h._overwriteProps[a]] = this._firstPT;
              (h._priority || h._onInitAllProps) && (o = !0),
                (h._onDisable || h._onEnable) &&
                  (this._notifyPluginsOfEnabled = !0);
            } else
              (this._firstPT =
                i[n] =
                l =
                  {
                    _next: this._firstPT,
                    t: e,
                    p: n,
                    f: "function" == typeof e[n],
                    n: n,
                    pg: !1,
                    pr: 0,
                  }),
                (l.s = l.f
                  ? e[
                      n.indexOf("set") ||
                      "function" != typeof e["get" + n.substr(3)]
                        ? n
                        : "get" + n.substr(3)
                    ]()
                  : parseFloat(e[n])),
                (l.c =
                  "string" == typeof _ && "=" === _.charAt(1)
                    ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2))
                    : Number(_) - l.s || 0);
            l && l._next && (l._next._prev = l);
          }
          return r && this._kill(r, e)
            ? this._initProps(e, i, s, r)
            : this._overwrite > 1 &&
                this._firstPT &&
                s.length > 1 &&
                j(e, this, i, this._overwrite, s)
              ? (this._kill(i, e), this._initProps(e, i, s, r))
              : o;
        }),
        (r.render = function (t, e, i) {
          var s,
            r,
            n,
            a,
            o = this._time,
            h = this._duration;
          if (t >= h)
            (this._totalTime = this._time = h),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
              this._reversed || ((s = !0), (r = "onComplete")),
              0 === h &&
                ((a = this._rawPrevTime),
                (0 === t || a < 0 || a === l) &&
                  a !== t &&
                  ((i = !0), a > l && (r = "onReverseComplete")),
                (this._rawPrevTime = a = !e || t || 0 === a ? t : l));
          else if (t < 1e-7)
            (this._totalTime = this._time = 0),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
              (0 !== o || (0 === h && this._rawPrevTime > l)) &&
                ((r = "onReverseComplete"), (s = this._reversed)),
              t < 0
                ? ((this._active = !1),
                  0 === h &&
                    (this._rawPrevTime >= 0 && (i = !0),
                    (this._rawPrevTime = a =
                      !e || t || 0 === this._rawPrevTime ? t : l)))
                : this._initted || (i = !0);
          else if (((this._totalTime = this._time = t), this._easeType)) {
            var _ = t / h,
              u = this._easeType,
              p = this._easePower;
            (1 === u || (3 === u && _ >= 0.5)) && (_ = 1 - _),
              3 === u && (_ *= 2),
              1 === p
                ? (_ *= _)
                : 2 === p
                  ? (_ *= _ * _)
                  : 3 === p
                    ? (_ *= _ * _ * _)
                    : 4 === p && (_ *= _ * _ * _ * _),
              1 === u
                ? (this.ratio = 1 - _)
                : 2 === u
                  ? (this.ratio = _)
                  : t / h < 0.5
                    ? (this.ratio = _ / 2)
                    : (this.ratio = 1 - _ / 2);
          } else this.ratio = this._ease.getRatio(t / h);
          if (this._time !== o || i) {
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return;
              this._time && !s
                ? (this.ratio = this._ease.getRatio(this._time / h))
                : s &&
                  this._ease._calcEnd &&
                  (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
            }
            for (
              this._active ||
                (!this._paused &&
                  this._time !== o &&
                  t >= 0 &&
                  (this._active = !0)),
                0 === o &&
                  (this._startAt &&
                    (t >= 0
                      ? this._startAt.render(t, e, i)
                      : r || (r = "_dummyGS")),
                  this.vars.onStart &&
                    ((0 === this._time && 0 !== h) ||
                      e ||
                      this.vars.onStart.apply(
                        this.vars.onStartScope || this,
                        this.vars.onStartParams || v,
                      ))),
                n = this._firstPT;
              n;

            )
              n.f
                ? n.t[n.p](n.c * this.ratio + n.s)
                : (n.t[n.p] = n.c * this.ratio + n.s),
                (n = n._next);
            this._onUpdate &&
              (t < 0 &&
                this._startAt &&
                this._startTime &&
                this._startAt.render(t, e, i),
              e ||
                ((this._time !== o || s) &&
                  this._onUpdate.apply(
                    this.vars.onUpdateScope || this,
                    this.vars.onUpdateParams || v,
                  ))),
              r &&
                (this._gc ||
                  (t < 0 &&
                    this._startAt &&
                    !this._onUpdate &&
                    this._startTime &&
                    this._startAt.render(t, e, i),
                  s &&
                    (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                    (this._active = !1)),
                  !e &&
                    this.vars[r] &&
                    this.vars[r].apply(
                      this.vars[r + "Scope"] || this,
                      this.vars[r + "Params"] || v,
                    ),
                  0 === h &&
                    this._rawPrevTime === l &&
                    a !== l &&
                    (this._rawPrevTime = 0)));
          }
        }),
        (r._kill = function (t, e) {
          if (
            ("all" === t && (t = null),
            null == t && (null == e || e === this.target))
          )
            return this._enabled(!1, !1);
          e =
            "string" != typeof e
              ? e || this._targets || this.target
              : O.selector(e) || e;
          var i, s, r, n, a, o, h, l;
          if ((p(e) || D(e)) && "number" != typeof e[0])
            for (i = e.length; --i > -1; ) this._kill(t, e[i]) && (o = !0);
          else {
            if (this._targets) {
              for (i = this._targets.length; --i > -1; )
                if (e === this._targets[i]) {
                  (a = this._propLookup[i] || {}),
                    (this._overwrittenProps = this._overwrittenProps || []),
                    (s = this._overwrittenProps[i] =
                      t ? this._overwrittenProps[i] || {} : "all");
                  break;
                }
            } else {
              if (e !== this.target) return !1;
              (a = this._propLookup),
                (s = this._overwrittenProps =
                  t ? this._overwrittenProps || {} : "all");
            }
            if (a) {
              (h = t || a),
                (l =
                  t !== s &&
                  "all" !== s &&
                  t !== a &&
                  ("object" != typeof t || !t._tempKill));
              for (r in h)
                (n = a[r]) &&
                  (n.pg && n.t._kill(h) && (o = !0),
                  (n.pg && 0 !== n.t._overwriteProps.length) ||
                    (n._prev
                      ? (n._prev._next = n._next)
                      : n === this._firstPT && (this._firstPT = n._next),
                    n._next && (n._next._prev = n._prev),
                    (n._next = n._prev = null)),
                  delete a[r]),
                  l && (s[r] = 1);
              !this._firstPT && this._initted && this._enabled(!1, !1);
            }
          }
          return o;
        }),
        (r.invalidate = function () {
          return (
            this._notifyPluginsOfEnabled &&
              O._onPluginEvent("_onDisable", this),
            (this._firstPT = null),
            (this._overwrittenProps = null),
            (this._onUpdate = null),
            (this._startAt = null),
            (this._initted = this._active = this._notifyPluginsOfEnabled = !1),
            (this._propLookup = this._targets ? {} : []),
            this
          );
        }),
        (r._enabled = function (t, e) {
          if ((a || n.wake(), t && this._gc)) {
            var i,
              s = this._targets;
            if (s)
              for (i = s.length; --i > -1; )
                this._siblings[i] = U(s[i], this, !0);
            else this._siblings = U(this.target, this, !0);
          }
          return (
            k.prototype._enabled.call(this, t, e),
            !(!this._notifyPluginsOfEnabled || !this._firstPT) &&
              O._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
          );
        }),
        (O.to = function (t, e, i) {
          return new O(t, e, i);
        }),
        (O.from = function (t, e, i) {
          return (
            (i.runBackwards = !0),
            (i.immediateRender = 0 != i.immediateRender),
            new O(t, e, i)
          );
        }),
        (O.fromTo = function (t, e, i, s) {
          return (
            (s.startAt = i),
            (s.immediateRender =
              0 != s.immediateRender && 0 != i.immediateRender),
            new O(t, e, s)
          );
        }),
        (O.delayedCall = function (t, e, i, s, r) {
          return new O(e, 0, {
            delay: t,
            onComplete: e,
            onCompleteParams: i,
            onCompleteScope: s,
            onReverseComplete: e,
            onReverseCompleteParams: i,
            onReverseCompleteScope: s,
            immediateRender: !1,
            useFrames: r,
            overwrite: 0,
          });
        }),
        (O.set = function (t, e) {
          return new O(t, 0, e);
        }),
        (O.getTweensOf = function (t, e) {
          if (null == t) return [];
          t = "string" != typeof t ? t : O.selector(t) || t;
          var i, s, r, n;
          if ((p(t) || D(t)) && "number" != typeof t[0]) {
            for (i = t.length, s = []; --i > -1; )
              s = s.concat(O.getTweensOf(t[i], e));
            for (i = s.length; --i > -1; )
              for (n = s[i], r = i; --r > -1; ) n === s[r] && s.splice(i, 1);
          } else
            for (s = U(t).concat(), i = s.length; --i > -1; )
              (s[i]._gc || (e && !s[i].isActive())) && s.splice(i, 1);
          return s;
        }),
        (O.killTweensOf = O.killDelayedCallsTo =
          function (t, e, i) {
            "object" == typeof e && ((i = e), (e = !1));
            for (var s = O.getTweensOf(t, e), r = s.length; --r > -1; )
              s[r]._kill(i, t);
          });
      var V = d(
        "plugins.TweenPlugin",
        function (t, e) {
          (this._overwriteProps = (t || "").split(",")),
            (this._propName = this._overwriteProps[0]),
            (this._priority = e || 0),
            (this._super = V.prototype);
        },
        !0,
      );
      if (
        ((r = V.prototype),
        (V.version = "1.10.1"),
        (V.API = 2),
        (r._firstPT = null),
        (r._addTween = function (t, e, i, s, r, n) {
          var a, o;
          if (
            null != s &&
            (a =
              "number" == typeof s || "=" !== s.charAt(1)
                ? Number(s) - i
                : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)))
          )
            return (
              (this._firstPT = o =
                {
                  _next: this._firstPT,
                  t: t,
                  p: e,
                  s: i,
                  c: a,
                  f: "function" == typeof t[e],
                  n: r || e,
                  r: n,
                }),
              o._next && (o._next._prev = o),
              o
            );
        }),
        (r.setRatio = function (t) {
          for (var e, i = this._firstPT, s = 1e-6; i; )
            (e = i.c * t + i.s),
              i.r
                ? (e = (e + (e > 0 ? 0.5 : -0.5)) | 0)
                : e < s && e > -s && (e = 0),
              i.f ? i.t[i.p](e) : (i.t[i.p] = e),
              (i = i._next);
        }),
        (r._kill = function (t) {
          var e,
            i = this._overwriteProps,
            s = this._firstPT;
          if (null != t[this._propName]) this._overwriteProps = [];
          else for (e = i.length; --e > -1; ) null != t[i[e]] && i.splice(e, 1);
          for (; s; )
            null != t[s.n] &&
              (s._next && (s._next._prev = s._prev),
              s._prev
                ? ((s._prev._next = s._next), (s._prev = null))
                : this._firstPT === s && (this._firstPT = s._next)),
              (s = s._next);
          return !1;
        }),
        (r._roundProps = function (t, e) {
          for (var i = this._firstPT; i; )
            (t[this._propName] ||
              (null != i.n && t[i.n.split(this._propName + "_").join("")])) &&
              (i.r = e),
              (i = i._next);
        }),
        (O._onPluginEvent = function (t, e) {
          var i,
            s,
            r,
            n,
            a,
            o = e._firstPT;
          if ("_onInitAllProps" === t) {
            for (; o; ) {
              for (a = o._next, s = r; s && s.pr > o.pr; ) s = s._next;
              (o._prev = s ? s._prev : n) ? (o._prev._next = o) : (r = o),
                (o._next = s) ? (s._prev = o) : (n = o),
                (o = a);
            }
            o = e._firstPT = r;
          }
          for (; o; )
            o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
              (o = o._next);
          return i;
        }),
        (V.activate = function (t) {
          for (var e = t.length; --e > -1; )
            t[e].API === V.API && (I[new t[e]()._propName] = t[e]);
          return !0;
        }),
        (m.plugin = function (t) {
          if (!(t && t.propName && t.init && t.API))
            throw "illegal plugin definition.";
          var e,
            i = t.propName,
            s = t.priority || 0,
            r = t.overwriteProps,
            n = {
              init: "_onInitTween",
              set: "setRatio",
              kill: "_kill",
              round: "_roundProps",
              initAll: "_onInitAllProps",
            },
            a = d(
              "plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
              function () {
                V.call(this, i, s), (this._overwriteProps = r || []);
              },
              t.global === !0,
            ),
            o = (a.prototype = new V(i));
          (o.constructor = a), (a.API = t.API);
          for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
          return (a.version = t.version), V.activate([a]), a;
        }),
        (i = t._gsQueue))
      ) {
        for (s = 0; s < i.length; s++) i[s]();
        for (r in c)
          c[r].func ||
            t.console.log(
              "GSAP encountered missing dependency: com.greensock." + r,
            );
      }
      a = !1;
    }
  })(window);
