var SharkGame = SharkGame || {};
$.extend(SharkGame, {
  GAME_NAMES: [
    "Five Seconds A Shark",
    "Next Shark Game",
    "Next Shark Game: Barkfest",
    "Sharky Clicker",
    "Weird Oceans",
    "Angry Sharks",
    "Super Shark Bros.",
    "Grand Shark Auto V",
    "Sharky the Hedgehog",
    "Shark Crush Saga",
    "You Have To Name The Shark Game",
    "Shark A Lark",
    "Sharknite",
    "Sharkcraft",
    "Mineshark",
    "CS Shark",
    "Among Shark",
    "League of Sharks",
    "Apex Sharks",
    "Shark world",
    "Bark Shark",
    "Fin Idle",
    "Ray of Dreams",
    "Shark Saver",
    "Shoal Sharker",
    "Shark Souls",
    "Saucy Sharks",
    "Sharkfall",
    "Heart of Sharkness",
    "Sharks and Recreation",
    "Alone in the Shark",
    "Sharkpocalypse",
    "Shark of Darkness",
    "Strange Oceans",
  ],
  GAME_NAME: null,
  ACTUAL_GAME_NAME: "Idle Shark",
  VERSION: 0.71,
  VERSION_NAME: "Stranger Oceans",
  EPSILON: 1e-6,
  INTERVAL: 100,
  dt: 0.1,
  before: new Date(),
  timestampLastSave: !1,
  timestampGameStart: !1,
  timestampRunStart: !1,
  timestampRunEnd: !1,
  sidebarHidden: !0,
  paneGenerated: !1,
  gameOver: !1,
  wonGame: !1,
  credits:
    "<p>This game was originally created for my dear friend Sach.<br/><span class='smallDesc'>(Rest in peace sach)</span></p><p>It was made by <a href='/'></a> who has a cool website<br/><span class='smallDesc'>Thank you for playing</span></p>",
  ending:
    "<p>Congratulations! You did it.<br/>You saved the sharks!</p><p>The gate leads away from this strange ocean...</p><p>Back home to the oceans you came from!</p><h3>Or are they?</h3>",
  help: '<p>This game is a game about discovery, resources, and does not demand your full attention. You are free to pay as much attention to the game as you want. It will happily run in the background, and works even while closed.</p><p>To begin, you should catch fish. Once you have some fish, more actions will become available. If you have no idea what these actions do, click the "Toggle descriptions" button for more information.</p><p>If you are ever stuck, try actions you haven\'t yet tried. Remember, though, that sometimes patience is the only way forward. Patience and ever escalating numbers.</p>',
  donate:
    "<p>You can <a href='http://www.sharktrust.org/en/donate' target='_blank'>donate to help save sharks and mantas</a>!</p><p>Seems only fitting, given this game was made for a charity.</p><p><span class='smallDescAllowClicks'>Please help the sharkies</span></p>",
  spriteIconPath: "img/sharksprites.png",
  spriteHomeEventPath: "img/sharkeventsprites.png",
  choose: function (e) {
    return e[Math.floor(Math.random() * e.length)];
  },
  log10: function (e) {
    return Math.log(e) / Math.LN10;
  },
  plural: function (e) {
    return 1 === e ? "" : "s";
  },
  colorLum: function (e, a) {
    (e = String(e).replace(/[^0-9a-f]/gi, "")).length < 6 &&
      (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
      (a = a || 0);
    var t,
      r,
      n = "#";
    for (r = 0; r < 3; r++)
      (t = parseInt(e.substr(2 * r, 2), 16)),
        (n += (
          "00" +
          (t = Math.round(Math.min(Math.max(0, t + t * a), 255)).toString(16))
        ).substr(t.length));
    return n;
  },
  getImageIconHTML: function (e, a, t) {
    e ||
      (e = "http://placekitten.com/g/" + Math.floor(a) + "/" + Math.floor(t));
    var r = "";
    return (
      "off" !== SharkGame.Settings.current.iconPositions &&
        (r +=
          "<img width=" +
          a +
          " height=" +
          t +
          " src='" +
          e +
          "' class='button-icon-" +
          SharkGame.Settings.current.iconPositions +
          "'>"),
      r
    );
  },
  changeSprite: function (e, a, t, r) {
    var n = SharkGame.Sprites[a];
    return (
      t || (t = $("<div>")),
      n || (n = SharkGame.Sprites[r]),
      n
        ? (t.css("background-image", "url(" + e + ")"),
          t.css(
            "background-position",
            "-" + n.frame.x + "px -" + n.frame.y + "px",
          ),
          t.width(n.frame.w),
          t.height(n.frame.h))
        : (t.css("background-image", 'url("//placehold.it/50x50")'),
          t.width(50),
          t.height(50)),
      t
    );
  },
}),
  (SharkGame.TitleBar = {
    saveLink: {
      name: "save",
      main: !0,
      onClick: function () {
        try {
          try {
            SharkGame.Save.saveGame();
          } catch (e) {
            SharkGame.Log.addError(e), console.log(e);
          }
          SharkGame.Log.addMessage("Saved game.");
        } catch (e) {
          SharkGame.Log.addError(e.message);
        }
      },
    },
    optionsLink: {
      name: "options",
      main: !0,
      onClick: function () {
        SharkGame.Main.showOptions();
      },
    },
    changelogLink: {
      name: "changelog",
      main: !1,
      onClick: function () {
        SharkGame.Main.showChangelog();
      },
    },
    helpLink: {
      name: "help",
      main: !0,
      onClick: function () {
        SharkGame.Main.showHelp();
      },
    },
    skipLink: {
      name: "skip",
      main: !0,
      onClick: function () {
        SharkGame.Main.isFirstTime()
          ? confirm("Do you want to reset your game?") && SharkGame.Main.init()
          : confirm(
              "Is this world causing you too much trouble? Want to go back to the gateway?",
            ) && ((SharkGame.wonGame = !1), SharkGame.Main.endGame());
      },
    },
    creditsLink: {
      name: "credits",
      main: !1,
      onClick: function () {
        SharkGame.Main.showPane("Credits", SharkGame.credits);
      },
    },
    donateLink: {
      name: "donate",
      main: !1,
      onClick: function () {
        SharkGame.Main.showPane("Donate", SharkGame.donate);
      },
    },
  }),
  (SharkGame.Tabs = { current: "home" }),
  (SharkGame.Main = {
    tickHandler: -1,
    autosaveHandler: -1,
    beautify: function (e, a) {
      var t;
      if (e === Number.POSITIVE_INFINITY) t = "infinite";
      else if (e < 1 && e >= 0)
        t = a
          ? "0"
          : e > 0.001
            ? e.toFixed(2) + ""
            : e > 1e-4
              ? e.toFixed(3) + ""
              : 0;
      else {
        var r = !1;
        e < 0 && ((r = !0), (e *= -1));
        var n = ["", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc"],
          o = Math.floor(SharkGame.log10(e)),
          i = 2 - (Math.floor(SharkGame.log10(e)) % 3);
        i = Math.max(0, i);
        var s,
          h = Math.floor(o / 3);
        h >= n.length
          ? (t = "lots")
          : ((s = n[h]),
            h > 0 && (e /= Math.pow(1e3, h)),
            (t =
              0 === h
                ? (r ? "-" : "") + Math.floor(e) + s
                : h > 0
                  ? (r ? "-" : "") + e.toFixed(i) + s
                  : (r ? "-" : "") + e.toFixed(i)));
      }
      return t;
    },
    formatTime: function (e) {
      var a = e / 1e3,
        t = "";
      if (a > 60) {
        var r = Math.floor(a / 60);
        if (r > 60) {
          var n = Math.floor(a / 3600);
          if (n > 24) {
            var o = Math.floor(n / 24);
            if (o > 7) {
              var i = Math.floor(o / 7);
              if (i > 4) {
                var s = Math.floor(i / 4);
                if (s > 12) t += Math.floor(s / 12) + "Y, ";
                t += (s %= 12) + "M, ";
              }
              t += (i %= 4) + "W, ";
            }
            t += (o %= 7) + "D, ";
          }
          t += (n %= 24) + ":";
        }
        t += ((r %= 60) < 10 ? "0" + r : r) + ":";
      }
      return (a %= 60), (t += (a = Math.floor(a)) < 10 ? "0" + a : a);
    },
    toTitleCase: function (e) {
      return e.replace(/\w\S*/g, function (e) {
        return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
      });
    },
    init: function () {
      var e = new Date();
      (SharkGame.before = e),
        null === SharkGame.GAME_NAME &&
          ((SharkGame.GAME_NAME = SharkGame.choose(SharkGame.GAME_NAMES)),
          (document.title =
            SharkGame.ACTUAL_GAME_NAME + ": " + SharkGame.GAME_NAME)),
        $("#sidebar").hide();
      var a = $("#overlay");
      if (
        (a.hide(),
        $("#gameName").html("- " + SharkGame.GAME_NAME + " -"),
        $("#versionNumber").html(
          "v " + SharkGame.VERSION + " — " + SharkGame.VERSION_NAME,
        ),
        (SharkGame.sidebarHidden = !0),
        (SharkGame.gameOver = !1),
        $("#pane").removeClass("gateway"),
        a.removeClass("gateway"),
        (SharkGame.timestampLastSave =
          SharkGame.timestampLastSave || e.getTime()),
        (SharkGame.timestampGameStart =
          SharkGame.timestampGameStart || e.getTime()),
        (SharkGame.timestampRunStart =
          SharkGame.timestampRunStart || e.getTime()),
        $.each(SharkGame.Settings, function (e, a) {
          "current" !== e &&
            void 0 === SharkGame.Settings.current[e] &&
            (SharkGame.Settings.current[e] = a.defaultSetting);
        }),
        SharkGame.Resources.init(),
        SharkGame.World.init(),
        SharkGame.World.apply(),
        SharkGame.Gateway.init(),
        SharkGame.Gateway.applyArtifacts(),
        SharkGame.Log.clearMessages(),
        SharkGame.Home.init(),
        SharkGame.Lab.init(),
        SharkGame.Stats.init(),
        SharkGame.Recycler.init(),
        SharkGame.Gate.init(),
        SharkGame.Reflection.init(),
        SharkGame.Main.setUpTitleBar(),
        (SharkGame.Tabs.current = "home"),
        SharkGame.Save.savedGameExists())
      )
        try {
          SharkGame.Save.loadGame(), SharkGame.Log.addMessage("Loaded game.");
        } catch (e) {
          SharkGame.Log.addError(e.message);
        }
      SharkGame.Main.isFirstTime() &&
        ((SharkGame.TitleBar.skipLink.name = "reset"),
        SharkGame.Main.setUpTitleBar()),
        SharkGame.Home.discoverActions(),
        SharkGame.Main.setUpTab(),
        -1 === SharkGame.Main.tickHandler &&
          (SharkGame.Main.tickHandler = setInterval(
            SharkGame.Main.tick,
            SharkGame.INTERVAL,
          )),
        -1 === SharkGame.Main.autosaveHandler &&
          (SharkGame.Main.autosaveHandler = setInterval(
            SharkGame.Main.autosave,
            6e4 * SharkGame.Settings.current.autosaveFrequency,
          ));
    },
    tick: function () {
      if (SharkGame.gameOver) SharkGame.Gateway.update();
      else {
        var e = new Date().getTime() - SharkGame.before.getTime(),
          a = SharkGame.Resources,
          t = SharkGame.Main;
        SharkGame.sidebarHidden && t.showSidebarIfNeeded(),
          e > SharkGame.INTERVAL
            ? t.processSimTime(SharkGame.dt * (e / SharkGame.INTERVAL))
            : t.processSimTime(SharkGame.dt),
          a.updateResourcesTable(),
          SharkGame.Tabs[SharkGame.Tabs.current].code.update(),
          t.checkTabUnlocks(),
          (SharkGame.before = new Date());
      }
    },
    checkTabUnlocks: function () {
      $.each(SharkGame.Tabs, function (e, a) {
        if ("current" !== e && !a.discovered) {
          var t = !0;
          a.discoverReq.resource &&
            (t =
              t &&
              SharkGame.Resources.checkResources(a.discoverReq.resource, !0)),
            a.discoverReq.upgrade &&
              $.each(a.discoverReq.upgrade, function (e, a) {
                t =
                  !!SharkGame.Upgrades[a] &&
                  t &&
                  SharkGame.Upgrades[a].purchased;
              }),
            t &&
              (SharkGame.Main.discoverTab(e),
              SharkGame.Log.addDiscovery("Discovered " + a.name + "!"));
        }
      });
    },
    processSimTime: function (e) {
      SharkGame.Resources.processIncomes(e);
    },
    autosave: function () {
      try {
        SharkGame.Save.saveGame(), SharkGame.Log.addMessage("Autosaved.");
      } catch (e) {
        SharkGame.Log.addError(e.message), console.log(e.trace);
      }
    },
    setUpTitleBar: function () {
      var e = $("#titlemenu"),
        a = $("#subtitlemenu");
      e.empty(),
        a.empty(),
        $.each(SharkGame.TitleBar, function (t, r) {
          var n =
            "<li><a id='" + t + "' href='javascript:;'>" + r.name + "</a></li>";
          r.main ? e.append(n) : a.append(n), $("#" + t).click(r.onClick);
        });
    },
    setUpTab: function () {
      var e = SharkGame.Tabs,
        a = $("#content");
      a.empty(),
        a.append(
          '<div id="contentMenu"><ul id="tabList"></ul><ul id="tabButtons"></ul></div><div id="tabBorder" class="clear-fix"></div>',
        ),
        SharkGame.Main.createTabNavigation(),
        SharkGame.Main.createBuyButtons(),
        e[e.current].code.switchTo();
    },
    createTabMenu: function () {
      SharkGame.Main.createTabNavigation(), SharkGame.Main.createBuyButtons();
    },
    createTabNavigation: function () {
      var e = SharkGame.Tabs,
        a = $("#tabList");
      a.empty();
      var t = 0;
      $.each(e, function (e, a) {
        a.discovered && t++;
      }),
        t > 1 &&
          $.each(e, function (e, t) {
            var r = SharkGame.Tabs.current === e;
            if (t.discovered) {
              var n = $("<li>");
              r
                ? n.html(t.name)
                : n.append(
                    $("<a>")
                      .attr("id", "tab-" + e)
                      .attr("href", "javascript:;")
                      .html(t.name)
                      .click(function () {
                        var e = $(this).attr("id").split("-")[1];
                        SharkGame.Main.changeTab(e);
                      }),
                  ),
                a.append(n);
            }
          });
    },
    createBuyButtons: function (e) {
      var a = $("#tabButtons");
      a.empty(),
        $.each(SharkGame.Settings.buyAmount.options, function (t, r) {
          var n = r,
            o = r === SharkGame.Settings.current.buyAmount;
          a.prepend(
            $("<li>").append(
              $("<button>")
                .addClass("min")
                .attr("id", "buy-" + r)
                .prop("disabled", o),
            ),
          );
          var i = e ? e + " " : "buy ";
          n < 0
            ? n < -2
              ? (i += "1/3 max")
              : n < -1
                ? (i += "1/2 max")
                : n < 0 && (i += "max")
            : (i += SharkGame.Main.beautify(n)),
            $("#buy-" + r)
              .html(i)
              .click(function () {
                var e = $(this);
                (SharkGame.Settings.current.buyAmount = parseInt(
                  e.attr("id").slice(4),
                )),
                  $("button[id^='buy-']").prop("disabled", !1),
                  e.prop("disabled", !0);
              });
        });
    },
    changeTab: function (e) {
      (SharkGame.Tabs.current = e), SharkGame.Main.setUpTab();
    },
    discoverTab: function (e) {
      (SharkGame.Tabs[e].discovered = !0), SharkGame.Main.createTabMenu();
    },
    showSidebarIfNeeded: function () {
      (SharkGame.Resources.haveAnyResources() ||
        SharkGame.Log.haveAnyMessages()) &&
        (SharkGame.Settings.current.showAnimations
          ? $("#sidebar").show("500")
          : $("#sidebar").show(),
        (SharkGame.sidebarHidden = !1));
    },
    showOptions: function () {
      var e = SharkGame.Main.setUpOptions();
      SharkGame.Main.showPane("Options", e);
    },
    setUpOptions: function () {
      var e = $("<table>").attr("id", "optionTable");
      $.each(SharkGame.Settings, function (a, t) {
        if ("current" !== a && t.show) {
          var r = $("<tr>");
          r.append(
            $("<td>")
              .addClass("optionLabel")
              .html(
                t.name +
                  ":<br/><span class='smallDesc'>(" +
                  t.desc +
                  ")</span>",
              ),
          );
          var n = SharkGame.Settings.current[a];
          $.each(t.options, function (e, o) {
            var i = e == t.options.indexOf(n);
            r.append(
              $("<td>").append(
                $("<button>")
                  .attr("id", "optionButton-" + a + "-" + e)
                  .addClass("option-button")
                  .prop("disabled", i)
                  .html("boolean" == typeof o ? (o ? "on" : "off") : o)
                  .click(SharkGame.Main.onOptionClick),
              ),
            );
          }),
            e.append(r);
        }
      });
      var a = $("<tr>");
      return (
        a.append(
          $("<td>").html(
            "Import/Export Save:<br/><span class='smallDesc'>(You should probably save first!) Import or export save as text. Keep it safe!</span>",
          ),
        ),
        a.append(
          $("<td>").append(
            $("<button>")
              .html("import")
              .addClass("option-button")
              .click(function () {
                var e = $("#importExportField").val();
                "" === e
                  ? (SharkGame.hidePane(),
                    SharkGame.Log.addError(
                      "You need to paste something in first!",
                    ))
                  : confirm(
                      "Are you absolutely sure? This will override your current save.",
                    ) && SharkGame.Save.importData(e);
              }),
          ),
        ),
        a.append(
          $("<td>").append(
            $("<button>")
              .html("export")
              .addClass("option-button")
              .click(function () {
                $("#importExportField").val(SharkGame.Save.exportData());
              }),
          ),
        ),
        a.append(
          $("<td>")
            .attr("colSpan", 4)
            .append(
              $("<input>").attr("type", "text").attr("id", "importExportField"),
            ),
        ),
        e.append(a),
        (a = $("<tr>")).append(
          $("<td>").html(
            "Wipe Save<br/><span class='smallDesc'>(Completely wipe your save and reset the game. COMPLETELY. FOREVER.)</span>",
          ),
        ),
        a.append(
          $("<td>").append(
            $("<button>")
              .html("wipe")
              .addClass("option-button")
              .click(function () {
                confirm(
                  "Are you absolutely sure you want to wipe your save?\nIt'll be gone forever!",
                ) &&
                  (SharkGame.Save.deleteSave(),
                  SharkGame.Gateway.deleteArtifacts(),
                  SharkGame.Resources.reconstructResourcesTable(),
                  (SharkGame.World.worldType = "start"),
                  (SharkGame.World.planetLevel = 1),
                  SharkGame.Main.init());
              }),
          ),
        ),
        e.append(a),
        e
      );
    },
    onOptionClick: function () {
      var e = $(this).attr("id").split("-"),
        a = e[1],
        t = parseInt(e[2]);
      (SharkGame.Settings.current[a] = SharkGame.Settings[a].options[t]),
        $('button[id^="optionButton-' + a + '"]').prop("disabled", !1),
        $(this).attr("disabled", "true"),
        (SharkGame.Settings[a].onChange || $.noop)();
    },
    showChangelog: function () {
      var e = $("<div>").attr("id", "changelogDiv");
      $.each(SharkGame.Changelog, function (a, t) {
        var r = $("<div>").addClass("paneContentDiv");
        r.append($("<h3>").html(a + ": "));
        var n = $("<ul>");
        $.each(t, function (e, a) {
          n.append($("<li>").html(a));
        }),
          r.append(n),
          e.append(r);
      }),
        SharkGame.Main.showPane("Changelog", e);
    },
    showHelp: function () {
      var e = $("<div>");
      e.append($("<div>").append(SharkGame.help).addClass("paneContentDiv")),
        SharkGame.Main.showPane("Help", e);
    },
    endGame: function (e) {
      clearInterval(SharkGame.Main.autosaveHandler),
        (SharkGame.Main.autosaveHandler = -1),
        (SharkGame.gameOver = !0),
        (SharkGame.timestampRunEnd = new Date().getTime()),
        SharkGame.Gateway.enterGate(e);
    },
    purgeGame: function () {
      $("#status").empty(),
        SharkGame.Log.clearMessages(),
        $("#content").empty();
    },
    loopGame: function () {
      if (SharkGame.gameOver) {
        (SharkGame.gameOver = !1),
          (SharkGame.wonGame = !1),
          SharkGame.Main.hidePane();
        var e = {};
        _.each(SharkGame.ResourceCategories.special.resources, function (a) {
          e[a] = {
            amount: SharkGame.Resources.getResource(a),
            totalAmount: SharkGame.Resources.getTotalResource(a),
          };
        }),
          SharkGame.Save.deleteSave(),
          SharkGame.Main.init(),
          SharkGame.Log.addMessage(SharkGame.World.getWorldEntryMessage()),
          $.each(e, function (e, a) {
            SharkGame.Resources.setResource(e, a.amount),
              SharkGame.Resources.setTotalResource(e, a.totalAmount);
          }),
          (SharkGame.timestampRunStart = new Date().getTime());
        try {
          SharkGame.Save.saveGame(), SharkGame.Log.addMessage("Game saved.");
        } catch (e) {
          SharkGame.Log.addError(e.message), console.log(e.trace);
        }
      }
    },
    buildPane: function () {
      var e;
      (e = $("<div>").attr("id", "pane")), $("body").append(e);
      var a = $("<div>").attr("id", "paneHeader");
      return (
        a.append($("<div>").attr("id", "paneHeaderTitleDiv")),
        a.append(
          $("<div>")
            .attr("id", "paneHeaderCloseButtonDiv")
            .append(
              $("<button>")
                .attr("id", "paneHeaderCloseButton")
                .addClass("min")
                .html("&nbsp x &nbsp")
                .click(SharkGame.Main.hidePane),
            ),
        ),
        e.append(a),
        e.append($("<div>").attr("id", "paneHeaderEnd").addClass("clear-fix")),
        e.append($("<div>").attr("id", "paneContent")),
        e.hide(),
        (SharkGame.paneGenerated = !0),
        e
      );
    },
    showPane: function (e, a, t, r, n) {
      var o;
      o = SharkGame.paneGenerated ? $("#pane") : SharkGame.Main.buildPane();
      var i = $("#overlay");
      if (((r = r || 600), i.is(":hidden"))) {
        var s = n || 0.5;
        SharkGame.Settings.current.showAnimations
          ? i.show().css("opacity", 0).animate({ opacity: s }, r)
          : i.show().css("opacity", s),
          i.height($(document).height());
      }
      var h = $("#paneHeaderTitleDiv"),
        d = $("#paneHeaderCloseButtonDiv");
      e && "" !== e
        ? (h.show(),
          t
            ? (h.css({ float: "none", "text-align": "center", clear: "both" }),
              h.html("<h2>" + e + "</h2>"))
            : (h.css({ float: "left", "text-align": "left", clear: "none" }),
              h.html("<h3>" + e + "</h3>")))
        : h.hide(),
        t ? d.hide() : d.show();
      var m = $("#paneContent");
      m.empty(),
        m.append(a),
        SharkGame.Settings.current.showAnimations && n
          ? o.show().css("opacity", 0).animate({ opacity: 1 }, r)
          : o.show();
    },
    hidePane: function () {
      $("#overlay").hide(), $("#pane").hide();
    },
    isFirstTime: function () {
      return (
        "start" === SharkGame.World.worldType &&
        !(SharkGame.Resources.getTotalResource("essence") > 0)
      );
    },
    discoverAll: function () {
      $.each(SharkGame.Tabs, function (e, a) {
        "current" !== e && SharkGame.Main.discoverTab(e);
      });
    },
  }),
  (SharkGame.Button = {
    makeButton: function (e, a, t, r) {
      return $("<button>").html(a).attr("id", e).appendTo(t).click(r);
    },
    replaceButton: function (e, a, t) {
      return $("#" + e)
        .html(a)
        .unbind("click")
        .click(t);
    },
  }),
  (SharkGame.FunFacts = [
    "Shark Game's initial bare minimum code came from an abandoned idle game about bees. Almost no trace of bees remains!",
    "The existence of resources that create resources that create resources in this game were inspired by Derivative Clicker!",
    "Kitten Game was an inspiration for this game! This surprises probably no one. The very first message the game gives you is a nod of sorts.",
    "There have been social behaviours observed in lemon sharks, and evidence that suggests they prefer company to being alone.",
    "Sea apples are a type of sea cucumber.",
    "Magic crystals are probably not real.",
    "There is nothing suspicious about the machines.",
    "There are many species of sharks that investigate things with their mouths. This can end badly for the subject of investigation.",
    "Some shark species display 'tonic immobility' when rubbed on the nose. They stop moving, appear deeply relaxed, and can stay this way for up to 15 minutes before swimming away.",
    "In some shark species eggs hatch within their mothers, and in some of these species the hatched babies eat unfertilised or even unhatched eggs.",
    "Rays can be thought of as flattened sharks.",
    "Rays are pancakes of the sea. (note: probably not true)",
    "Chimaera are related to sharks and rays and have a venomous spine in front of their dorsal fin.",
    "More people are killed by lightning every year than by sharks.",
    "There are real eusocial shrimps that live as a community in sponges on reefs, complete with queens.",
    "White sharks have been observed to have a variety of body language signals to indicate submission and dominance towards each other without violence.",
    "Sharks with lasers were overdone, okay?",
    "There is a surprising deficit of cookie in this game.",
    "Remoras were banished from the oceans in the long bygone eras. The sharks hope they never come back.",
    "A kiss from a shark can make you immortal. But only if they want you to be immortal.",
    "A shark is worth one in the bush, and a bunch in the sea water. Don't put sharks in bushes.",
  ]),
  (SharkGame.Changelog = {
    "0.8 - Name Pending (2015/??/??)": [
      "Went back over the git repo history and added dates to changelog histories. No hiding my having dropped this for over half a year now! <span class='medDesc'>(it has been a while)</span>",
    ],
    "0.71 (2014/12/20)": [
      "Fixed and introduced and fixed a whole bunch of horrible game breaking bugs. If your save was lost, I'm sorry.",
      "Made the recycler stop lying about what could be made.",
      "Made the recycler not pay out so much for animals.",
      "Options are no longer reset after completing a run for real this time.",
      "Bunch of tweaked gate costs.",
      "One new machine, and one new job.",
      "Ten new post-chasm-exploration technologies to invest copious amounts of science into.",
    ],
    "0.7 - Stranger Oceans (2014/12/19)": [
      "WHOLE BUNCH OF NEW STUFF ADDED.",
      "Resource system slightly restructured for something in the future.",
      "New worlds with some slight changes to availabilities, gate demands, and some other stuff.",
      "Categories added to Home Sea tab for the benefit of trying to make sense of all the buttons.",
      "Newly added actions show up in highlights for your convenience.",
      "The way progress continues beyond the gate is now... a little tweaked.",
      "Options are no longer reset after completing a run.",
      "Artifacts exist.",
      "Images are a work in progress. Apologies for the placeholder graphics in these trying times.",
      "Partial production when there's insufficient resources for things that take costs. Enjoy watching your incomes slow to a trickle!",
    ],
    "0.62 (2014/12/12)": [
      "Fixed infinity resource requirement for gate.",
      "Attempted to fix resource table breaking in some browsers for some sidebar widths.",
    ],
    "0.61 (2014/12/12)": [
      "Added categories for buttons in the home sea, because there are going to be so many buttons.",
      "Miscellaneous shuffling of files.",
      "Some groundwork laid for v0.7, which will be the actual official release.",
    ],
    "0.6 - Return of Shark (2014/12/8)": [
      "Major graphical update!",
      "Now features graphics sort of!",
      "Some UI rearrangements:<ul><li>Researched techs now show in lab instead of grotto.</li><li>General stats now on right of grotto instead of left.</li><li>Large empty space in grotto right column reserved for future use!</li></ul>",
      "Pointless version subtitle!",
      "<span class='medDesc'>Added a donate link. Hey, sharks gotta eat.</span>",
    ],
    "0.59 (2014/09/30)": [
      "Bunch of small fixes and tweaks!",
      "End of run time now shown at the end of a run.",
      "A couple of fixes for issues only found in IE11.",
      "Fixed a bug that could let people buy hundreds of things for cheap by overwhelming the game's capacity for input. Hopefully fixed, anyway.",
      "Gaudy social media share menu shoehorned in below the game title. Enjoy!",
    ],
    "0.531 (2014/08/20)": [
      "Banned sea apples from the recycler because the feedback loop is actually far more crazy powerful than I was expecting. Whoops!",
    ],
    "0.53 (2014/08/18)": [
      "Changed Recycler so that residue into new machines is linear, but into new resources is constant.",
    ],
    "0.52 (2014/08/18)": [
      "Emergency bug-fixes.",
      "Cost to assemble residue into new things is now LINEAR (gets more expensive as you have more things) instead of CONSTANT.",
    ],
    "0.51 (2014/08/18)": [
      "Edited the wording of import/export saving.",
      "Made machine recycling less HORRIBLY BROKEN in terms of how much a machine is worth.",
    ],
    "0.5 (2014/08/18)": [
      "Added the Grotto - a way to better understand what you've accomplished so far.",
      "Added the Recycler. Enjoy discovering its function!",
      "Added sand machines for more machine sand goodness.",
      "Fixed oscillation/flickering of resources when at zero with anything providing a negative income.",
      "Added 'support' for people stumbling across the page with scripts turned off.",
      "Upped the gate kelp requirement by 10x, due to request.",
      "Added time tracking. Enjoy seeing how much of your life you've invested in this game.",
      "Added grouping for displaying resources on the left.",
      "Added some help and action descriptions.",
      "Added some text to the home tab to let people have an idea of where they should be heading in the very early game.",
      "Thanks to assistance from others, the saves are now much, much smaller than before.",
      "Made crab broods less ridiculously explosive.",
      "Adjusted some resource colours.",
      "Added a favicon, probably.",
      "<span class='medDesc'>Added an overdue copyright notice I guess.</span>",
    ],
    "0.48 (2014/08-ish)": [
      "Saves are now compressed both in local storage and in exported strings.",
      "Big costs significantly reduced.",
      "Buy 10, Buy 1/3 max and Buy 1/2 max buttons added.",
      "Research impact now displayed on research buttons.",
      "Resource effectiveness multipliers now displayed in table.<ul><li>These are not multipliers for how much of that resource you are getting.</li></ul>",
      "Some dumb behind the scenes things to make the code look nicer.",
      "Added this changelog!",
      "Removed upgrades list on the left. It'll come back in a future version.",
      "Added ray and crab generating resources, and unlocking techs.",
    ],
    "0.47 (2014/08-ish)": [
      "Bulk of game content added.",
      "Last update for Seamergency 2014!",
    ],
    "0.4 (2014/08-ish)": [
      "Added Laboratory tab.",
      "Added the end of the game tab.",
    ],
    "0.3 (2014/08-ish)": [
      "Added description to options.",
      "Added save import/export.",
      "Added the ending panel.",
    ],
    "0.23 (2014/08-ish)": [
      "Added autosave.",
      "Income system overhauled.",
      "Added options panel.",
    ],
    "0.22 (2014/08-ish)": [
      "Offline mode added. Resources will increase even with the game off!",
      "(Resource income not guaranteed to be 100% accurate.)",
    ],
    "0.21 (2014/08-ish)": ["Save and load added."],
    "<0.21 (2014/08-ish)": [
      "A whole bunch of stuff.",
      "Resource table, log, initial buttons, the works.",
    ],
  }),
  $(document).ready(function () {
    $("#game").show(),
      SharkGame.Main.init(),
      $(window).bind("keydown", function (e) {
        if (e.ctrlKey || e.metaKey)
          switch (String.fromCharCode(e.which).toLowerCase()) {
            case "s":
              e.preventDefault(), SharkGame.Save.saveGame();
              break;
            case "o":
              e.preventDefault(), SharkGame.Main.showOptions();
          }
      });
  });
