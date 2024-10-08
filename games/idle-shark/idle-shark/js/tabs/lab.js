SharkGame.Lab = {
  tabId: "lab",
  tabDiscovered: !1,
  tabName: "Laboratory",
  tabBg: "img/bg/bg-lab.png",
  sceneImage: "img/events/misc/scene-lab.png",
  sceneDoneImage: "img/events/misc/scene-lab-done.png",
  discoverReq: { resource: { science: 10 } },
  message:
    "Sort of just off to the side, the science sharks congregate and discuss things with words you've never heard before.",
  messageDone:
    "Sort of just off to the side, the science sharks quietly wrap up their badly disguised party and pretend to work.<br/>Looks like that's it! No more things to figure out.",
  init: function () {
    var e = SharkGame.Lab;
    (SharkGame.Tabs[e.tabId] = {
      id: e.tabId,
      name: e.tabName,
      discovered: e.tabDiscovered,
      discoverReq: e.discoverReq,
      code: e,
    }),
      $.each(SharkGame.Upgrades, function (e, a) {
        SharkGame.Upgrades[e].purchased = !1;
      });
  },
  switchTo: function () {
    var e = SharkGame.Lab,
      a = $("#content"),
      r = e.allResearchDone(),
      s = r ? e.messageDone : e.message,
      t = r ? e.sceneDoneImage : e.sceneImage,
      i = $("<div>").attr("id", "tabMessage");
    SharkGame.Settings.current.showTabImages &&
      ((s =
        "<img width=400 height=200 src='" + t + "' id='tabSceneImage'>" + s),
      i.css("background-image", "url('" + e.tabBg + "')")),
      i.html(s),
      a.append(i);
    var n = $("<div>").attr("id", "buttonLeftContainer");
    n.append(
      $("<div>")
        .attr("id", "buttonList")
        .append($("<h3>").html("Available Upgrades")),
    ),
      a.append(n),
      a.append($("<div>").attr("id", "upgradeList")),
      a.append($("<div>").addClass("clear-fix")),
      e.updateUpgradeList(),
      r && $("#buttonList").append($("<p>").html("All clear here!"));
  },
  update: function () {
    var e = SharkGame.Lab,
      a = $("#buttonList");
    $.each(SharkGame.Upgrades, function (r, s) {
      if (!s.purchased)
        if (0 === $("#" + r).length) {
          var t = !0;
          if (
            (s.required &&
              (s.required.upgrades &&
                $.each(s.required.upgrades, function (e, a) {
                  t =
                    !!SharkGame.Upgrades[a] &&
                    t &&
                    SharkGame.Upgrades[a].purchased;
                }),
              (t = t && e.isUpgradePossible(r))),
            t)
          ) {
            var i = SharkGame.Lab.getResearchEffects(s),
              n = SharkGame.Button.makeButton(
                r,
                s.name + "<br/>" + s.desc + "<br/>" + i,
                a,
                e.onLabButton,
              );
            e.updateLabButton(r),
              SharkGame.Settings.current.showAnimations &&
                n
                  .hide()
                  .css("opacity", 0)
                  .slideDown(50)
                  .animate({ opacity: 1 }, 50);
          }
        } else e.updateLabButton(r);
    });
  },
  updateLabButton: function (e) {
    var a,
      r = SharkGame.Resources,
      s = $("#" + e),
      t = SharkGame.Upgrades[e],
      i = t.cost;
    a = !!$.isEmptyObject(i) || r.checkResources(i);
    var n = SharkGame.Lab.getResearchEffects(t, !a),
      c = t.name + "<br/>" + t.desc + "<br/>" + n,
      d = r.resourceListToString(i, !a);
    "" != d && (c += "<br/>Cost: " + d), s.prop("disabled", !a).html(c);
    var o = "technologies/" + e;
    if ("off" !== SharkGame.Settings.current.iconPositions) {
      var h = SharkGame.changeSprite(
        SharkGame.spriteIconPath,
        o,
        null,
        "general/missing-technology",
      );
      h &&
        (h.addClass("button-icon-" + SharkGame.Settings.current.iconPositions),
        a ? s.prepend(h) : s.prepend($("<div>").append(h).addClass("tint")));
    }
  },
  onLabButton: function () {
    var e = SharkGame.Resources,
      a = SharkGame.Lab,
      r = SharkGame.Upgrades,
      s = $(this).attr("id"),
      t = r[s];
    if (t.purchased) $(this).remove();
    else {
      var i = r[s].cost;
      e.checkResources(i) &&
        ($(this).remove(),
        e.changeManyResources(i, !0),
        a.addUpgrade(s),
        a.updateUpgradeList(),
        t.researchedMessage && SharkGame.Log.addMessage(t.researchedMessage));
    }
  },
  addUpgrade: function (e) {
    SharkGame.Lab;
    var a = SharkGame.Resources,
      r = SharkGame.Upgrades[e];
    r &&
      (r.purchased ||
        ((r.purchased = !0),
        r.effect &&
          r.effect.multiplier &&
          $.each(r.effect.multiplier, function (e, r) {
            var s = r * a.getMultiplier(e);
            a.setMultiplier(e, s);
          })));
  },
  allResearchDone: function () {
    var e = SharkGame.Upgrades,
      a = SharkGame.Lab,
      r = !0;
    return (
      $.each(e, function (e, s) {
        a.isUpgradePossible(e) && (r = r && s.purchased);
      }),
      r
    );
  },
  isUpgradePossible: function (e) {
    var a = SharkGame.World,
      r = SharkGame.Lab,
      s = SharkGame.Upgrades[e],
      t = !0;
    if (s.required) {
      if (s.required.resources) {
        var i = !1;
        _.each(s.required.resources, function (e) {
          i = i || a.doesResourceExist(e);
        }),
          (t = t && i);
      }
      s.required.upgrades &&
        _.each(s.required.upgrades, function (e) {
          t = t && r.isUpgradePossible(e);
        }),
        $.each(s.cost, function (e, r) {
          t = t && a.doesResourceExist(e);
        });
    }
    return t;
  },
  getResearchEffects: function (e, a) {
    var r = "<span class='medDesc' class='click-passthrough'>(Effects: ";
    return (
      e.effect
        ? e.effect.multiplier &&
          ($.each(e.effect.multiplier, function (e, s) {
            SharkGame.World.doesResourceExist(e) &&
              (r +=
                SharkGame.Resources.getResourceName(e, a, !0) +
                " power x " +
                s +
                ", ");
          }),
          (r = r.slice(0, -2)))
        : (r += "???"),
      (r += ")</span>")
    );
  },
  updateUpgradeList: function () {
    var e = SharkGame.Upgrades,
      a = $("#upgradeList");
    a.empty(), a.append($("<h3>").html("Researched Upgrades"));
    var r = $("<ul>");
    $.each(e, function (e, a) {
      a.purchased &&
        r.append(
          $("<li>").html(
            a.name + "<br/><span class='medDesc'>" + a.effectDesc + "</span>",
          ),
        );
    }),
      a.append(r);
  },
};
