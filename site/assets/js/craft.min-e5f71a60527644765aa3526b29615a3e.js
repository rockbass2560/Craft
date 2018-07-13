require = function e(t, a, s) {
    function o(n, r) {
        if (!a[n]) {
            if (!t[n]) {
                var l = "function" == typeof require && require;
                if (!r && l) return l(n, !0);
                if (i) return i(n, !0);
                var c = new Error("Cannot find module '" + n + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var u = a[n] = {
                exports: {}
            };
            t[n][0].call(u.exports, function(e) {
                var a = t[n][1][e];
                return o(a ? a : e)
            }, u, u.exports, e, t, a, s)
        }
        return a[n].exports
    }
    for (var i = "function" == typeof require && require, n = 0; n < s.length; n++) o(s[n]);
    return o
}({
    "/home/ubuntu/static-hoc/apps/build/js/craft/main.js": [function(e) {
        (function(t) {
            "use strict";
            var a = e("../appMain");
            window.Craft = e("./craft"), "undefined" != typeof t && (t.Craft = window.Craft);
            var s = e("./blocks"),
                o = e("./levels"),
                i = e("./skins");
            window.craftMain = function(e) {
                e.skinsModule = i, e.blocksModule = s, e.maxVisualizationWidth = 600;
                var t = 434,
                    n = 477;
                e.nativeVizWidth = t, e.vizAspectRatio = t / n, e.mobileNoPaddingShareWidth = e.nativeVizWidth, a(window.Craft, o, e)
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../appMain": "/home/ubuntu/static-hoc/apps/build/js/appMain.js",
        "./blocks": "/home/ubuntu/static-hoc/apps/build/js/craft/blocks.js",
        "./craft": "/home/ubuntu/static-hoc/apps/build/js/craft/craft.js",
        "./levels": "/home/ubuntu/static-hoc/apps/build/js/craft/levels.js",
        "./skins": "/home/ubuntu/static-hoc/apps/build/js/craft/skins.js"
    }],
    "/home/ubuntu/static-hoc/apps/build/js/craft/skins.js": [function(e, t, a) {
        "use strict";
        var s = e("../skins");
        a.load = function(e, t) {
            var a = s.load(e, t);
            return a
        }
    }, {
        "../skins": "/home/ubuntu/static-hoc/apps/build/js/skins.js"
    }],
    "/home/ubuntu/static-hoc/apps/build/js/craft/levels.js": [function(e, t) {
        "use strict";

        function a(e) {
            return s("craft_" + e)
        }

        function s(e) {
            return '<block type="' + e + '"></block>'
        }
        var o = e("../block_utils").createToolbox,
            i = (e("../utils"), '<block type="craft_moveForward"></block>'),
            n = '<block type="controls_repeat_dropdown">  <title name="TIMES" config="3-10">???</title></block>',
            r = '<block type="craft_turn">  <title name="DIR">left</title></block>',
            l = '<block type="craft_turn"><title name="DIR">right</title></block>';
        t.exports = {
            playground: {
                requiredBlocks: [],
                freePlay: !0,
                toolbox: o(a("moveForward") + a("turnRight") + a("turnLeft") + a("destroyBlock") + a("placeBlock") + s("controls_repeat") + n + a("whileBlockAhead")),
                startBlocks: '<block type="when_run" deletable="false" x="20" y="20"></block>',
                groundPlane: ["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "coarseDirt", "coarseDirt", "coarseDirt", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
                groundDecorationPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "tallGrass", "", "", "", "", "", "", "", "", ""],
                actionPlane: ["grass", "grass", "", "", "", "", "", "", "grass", "grass", "", "grass", "", "", "", "", "", "", "", "grass", "", "", "", "logOak", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "logOak", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "logOak", "", "", "", "", "", "", "", "", "", "", "", "", "", "logOak", "", "", ""],
                fluffPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "leavesOak", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "leavesOak", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "leavesOak", "", "", "", "", "", "", "", "", "", "", "", "", "", "leavesOak", "", "", ""]
            },
            1: {
                requiredBlocks: [],
                freePlay: !0,
                toolbox: o(a("moveForward") + a("turnRight") + a("turnLeft")),
                startBlocks: '<block type="when_run" deletable="false" x="20" y="20"></block>',
                playerStartPosition: [3, 4],
                groundPlane: ["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "coarseDirt", "coarseDirt", "coarseDirt", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
                groundDecorationPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "tallGrass", "", "", "", "", "", "", "", "", ""],
                actionPlane: ["grass", "grass", "", "", "", "", "", "", "grass", "grass", "", "grass", "", "", "", "", "", "", "", "grass", "", "", "", "logOak", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "logOak", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "logOak", "", "", "", "", "", "", "", "", "", "", "", "", "", "logOak", "", "", ""],
                fluffPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "leavesOak", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "leavesOak", "", "", "", "", "", "", "", "", "", "", "", "", "", "leavesOak", "", "", ""],
                verificationFunction: function(e) {
                    return e.isPlayerNextTo("logOak")
                }
            },
            2: {
                requiredBlocks: [],
                freePlay: !0,
                toolbox: o(a("moveForward") + a("turnRight") + a("turnLeft") + a("destroyBlock") + a("placeBlock") + s("controls_repeat") + n + a("whileBlockAhead")),
                startBlocks: '<block type="when_run" deletable="false" x="20" y="20"></block>',
                groundPlane: ["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "planksOak", "planksOak", "planksOak", "planksOak", "grass", "grass", "grass", "coarseDirt", "coarseDirt", "coarseDirt", "planksOak", "planksOak", "planksOak", "planksOak", "grass", "grass", "grass", "grass", "grass", "grass", "planksOak", "planksOak", "planksOak", "planksOak", "grass", "grass", "grass", "grass", "grass", "grass", "planksOak", "planksOak", "planksOak", "planksOak", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
                groundDecorationPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "tallGrass", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "tallGrass", "", "", "", "", "", "", "", "", ""],
                actionPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
                fluffPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
            },
            custom: {
                requiredBlocks: [],
                freePlay: !1,
                toolbox: o(i + r + l)
            }
        }
    }, {
        "../block_utils": "/home/ubuntu/static-hoc/apps/build/js/block_utils.js",
        "../utils": "/home/ubuntu/static-hoc/apps/build/js/utils.js"
    }],
    "/home/ubuntu/static-hoc/apps/build/js/craft/craft.js": [function(require, module, exports) {
        "use strict";

        function trySetLocalStorageItem(e, t) {
            try {
                window.localStorage.setItem(e, t)
            } catch (a) {
                console && console.log && console.log("Couldn't set local storage item for key " + e)
            }
        }
        var studioApp = require("../StudioApp").singleton,
            commonMsg = require("../locale"),
            craftMsg = require("./locale"),
            skins = require("../skins"),
            codegen = require("../codegen"),
            api = require("./api"),
            GameController = require("./game/GameController"),
            dom = require("../dom"),
            houseLevels = require("./houseLevels"),
            levelbuilderOverrides = require("./levelbuilderOverrides"),
            MusicController = require("../MusicController"),
            ResultType = studioApp.ResultType,
            TestResults = studioApp.TestResults,
            MEDIA_URL = "/blockly/media/craft/",
            Craft = module.exports,
            characters = {
                Steve: {
                    name: "Steve",
                    staticAvatar: MEDIA_URL + "Sliced_Parts/Pop_Up_Character_Steve_Neutral.png",
                    smallStaticAvatar: MEDIA_URL + "Sliced_Parts/Pop_Up_Character_Steve_Neutral.png",
                    failureAvatar: MEDIA_URL + "Sliced_Parts/Pop_Up_Character_Steve_Fail.png",
                    winAvatar: MEDIA_URL + "Sliced_Parts/Pop_Up_Character_Steve_Win.png"
                },
                Alex: {
                    name: "Alex",
                    staticAvatar: MEDIA_URL + "Sliced_Parts/Pop_Up_Character_Alex_Neutral.png",
                    smallStaticAvatar: MEDIA_URL + "Sliced_Parts/Pop_Up_Character_Alex_Neutral.png",
                    failureAvatar: MEDIA_URL + "Sliced_Parts/Pop_Up_Character_Alex_Fail.png",
                    winAvatar: MEDIA_URL + "Sliced_Parts/Pop_Up_Character_Alex_Win.png"
                }
            },
            interfaceImages = {
                DEFAULT: [MEDIA_URL + "Sliced_Parts/MC_Loading_Spinner.gif", MEDIA_URL + "Sliced_Parts/Frame_Large_Plus_Logo.png", MEDIA_URL + "Sliced_Parts/Pop_Up_Slice.png", MEDIA_URL + "Sliced_Parts/X_Button.png", MEDIA_URL + "Sliced_Parts/Button_Grey_Slice.png", MEDIA_URL + "Sliced_Parts/Run_Button_Up_Slice.png", MEDIA_URL + "Sliced_Parts/MC_Run_Arrow_Icon.png", MEDIA_URL + "Sliced_Parts/Run_Button_Down_Slice.png", MEDIA_URL + "Sliced_Parts/Reset_Button_Up_Slice.png", MEDIA_URL + "Sliced_Parts/MC_Reset_Arrow_Icon.png", MEDIA_URL + "Sliced_Parts/Reset_Button_Down_Slice.png", MEDIA_URL + "Sliced_Parts/Callout_Tail.png"],
                1: [MEDIA_URL + "Sliced_Parts/Steve_Character_Select.png", MEDIA_URL + "Sliced_Parts/Alex_Character_Select.png", characters.Steve.staticAvatar, characters.Steve.smallStaticAvatar, characters.Alex.staticAvatar, characters.Alex.smallStaticAvatar],
                2: [characters.Alex.winAvatar, characters.Steve.winAvatar, characters.Alex.failureAvatar, characters.Steve.failureAvatar],
                6: [MEDIA_URL + "Sliced_Parts/House_Option_A_v3.png", MEDIA_URL + "Sliced_Parts/House_Option_B_v3.png", MEDIA_URL + "Sliced_Parts/House_Option_C_v3.png"]
            },
            MUSIC_METADATA = [{
                volume: 1,
                hasOgg: !0,
                name: "vignette1"
            }, {
                volume: 1,
                hasOgg: !0,
                name: "vignette2-quiet"
            }, {
                volume: 1,
                hasOgg: !0,
                name: "vignette3"
            }, {
                volume: 1,
                hasOgg: !0,
                name: "vignette4-intro"
            }, {
                volume: 1,
                hasOgg: !0,
                name: "vignette5-shortpiano"
            }, {
                volume: 1,
                hasOgg: !0,
                name: "vignette7-funky-chirps-short"
            }, {
                volume: 1,
                hasOgg: !0,
                name: "vignette8-free-play"
            }],
            CHARACTER_STEVE = "Steve",
            CHARACTER_ALEX = "Alex",
            DEFAULT_CHARACTER = CHARACTER_STEVE,
            AUTO_LOAD_CHARACTER_ASSET_PACK = "player" + DEFAULT_CHARACTER;
        Craft.init = function(e) {
            1 === e.level.puzzle_number && 1 === e.level.stage_total && (e.level.puzzle_number = 999), e.level.isTestLevel && (e.level.customSlowMotion = .1), e.level.disableFinalStageMessage = !0;
            var t = function() {
                    return document.documentMode
                },
                a = t();
            a && $("body").addClass("ieVersion" + a);
            var s = document.body;
            s.className = s.className + " minecraft", e.level.showPopupOnLoad && (e.level.afterVideoBeforeInstructionsFn = function(t) {
                var a = document.createEvent("Event");
                a.initEvent("instructionsShown", !0, !0), document.dispatchEvent(a), "playerSelection" === e.level.showPopupOnLoad ? Craft.showPlayerSelectionPopup(function(a) {
                    trackEvent("Minecraft", "ChoseCharacter", a), Craft.clearPlayerState(), trySetLocalStorageItem("craftSelectedPlayer", a), Craft.updateUIForCharacter(a), Craft.initializeAppLevel(e.level), t()
                }) : "houseLayoutSelection" === e.level.showPopupOnLoad && Craft.showHouseSelectionPopup(function(a) {
                    trackEvent("Minecraft", "ChoseHouse", a), r.edit_blocks || ($.extend(e.level, houseLevels[a]), Blockly.mainBlockSpace.clear(), studioApp.setStartBlocks_(e, !0)), Craft.initializeAppLevel(e.level), t()
                })
            }), e.level.puzzle_number && levelbuilderOverrides[e.level.puzzle_number] && $.extend(e.level, levelbuilderOverrides[e.level.puzzle_number]), Craft.initialConfig = e, studioApp.reset = this.reset.bind(this), studioApp.runButtonClick = this.runButtonClick.bind(this), Craft.level = e.level, Craft.skin = e.skin;
            var o = [];
            Craft.level.songs && MUSIC_METADATA && (o = MUSIC_METADATA.filter(function(e) {
                return -1 !== Craft.level.songs.indexOf(e.name)
            })), Craft.musicController = new MusicController(studioApp.cdoSounds, function(t) {
                return e.skin.assetUrl("music/" + t)
            }, o, o.length > 1 ? 7500 : null);
            var i = function d() {
                document.removeEventListener("instructionsHidden", d), studioApp.cdoSounds && studioApp.cdoSounds.whenAudioUnlocked(function() {
                    var e = Craft.level.songs && Craft.level.songs.length > 1,
                        t = e ? Craft.level.songs[0] : null;
                    Craft.musicController.play(t)
                })
            };
            document.addEventListener("instructionsHidden", i);
            var n = characters[Craft.getCurrentCharacter()];
            e.skin.staticAvatar = n.staticAvatar, e.skin.smallStaticAvatar = n.smallStaticAvatar, e.skin.failureAvatar = n.failureAvatar, e.skin.winAvatar = n.winAvatar;
            var r = e.level,
                l = r.specialLevelType;
            switch (l) {
                case "houseWallBuild":
                    r.blocksToStore = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "houseBottomA", "houseBottomB", "houseBottomC", "houseBottomD", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
            }
            studioApp.init($.extend({}, e, {
                forceInsertTopBlock: "when_run",
                html: require("../templates/page.html.ejs")({
                    assetUrl: studioApp.assetUrl,
                    data: {
                        localeDirection: studioApp.localeDirection(),
                        visualization: require("./visualization.html.ejs")(),
                        controls: require("./controls.html.ejs")({
                            assetUrl: studioApp.assetUrl,
                            shareable: e.level.shareable
                        }),
                        editCode: e.level.editCode,
                        blockCounterClass: "block-counter-default",
                        readonlyWorkspace: e.readonlyWorkspace
                    }
                }),
                appStrings: {
                    generatedCodeDescription: craftMsg.generatedCodeDescription()
                },
                loadAudio: function() {},
                afterInject: function() {
                    var t = parseFloat((location.search.split("customSlowMotion=")[1] || "").split("&")[0]);
                    Craft.gameController = new GameController({
                        Phaser: window.Phaser,
                        containerId: "phaser-game",
                        assetRoot: Craft.skin.assetUrl(""),
                        audioPlayer: {
                            register: studioApp.registerAudio.bind(studioApp),
                            play: studioApp.playAudio.bind(studioApp)
                        },
                        debug: !1,
                        customSlowMotion: t,
                        earlyLoadAssetPacks: Craft.earlyLoadAssetsForLevel(r.puzzle_number),
                        afterAssetsLoaded: function() {
                            Craft.musicController.preload()
                        },
                        earlyLoadNiceToHaveAssetPacks: Craft.niceToHaveAssetsForLevel(r.puzzle_number)
                    }), e.level.showPopupOnLoad || Craft.initializeAppLevel(e.level)
                },
                twitter: {
                    text: "Share on Twitter",
                    hashtag: "Craft"
                }
            }));
            var c = [];
            c = c.concat(interfaceImages.DEFAULT), e.level.puzzle_number && interfaceImages[e.level.puzzle_number] && (c = c.concat(interfaceImages[e.level.puzzle_number])), c.forEach(function(e) {
                preloadImage(e)
            });
            var u = $(".mc-share-button");
            u.length && dom.addClickTouchEvent(u[0], function() {
                Craft.reportResult(!0)
            })
        };
        var preloadImage = function(e) {
            var t = new Image;
            t.src = e
        };
        Craft.characterAssetPackName = function(e) {
            return "player" + e
        }, Craft.getCurrentCharacter = function() {
            return window.localStorage.getItem("craftSelectedPlayer") || DEFAULT_CHARACTER
        }, Craft.updateUIForCharacter = function(e) {
            Craft.initialConfig.skin.staticAvatar = characters[e].staticAvatar, Craft.initialConfig.skin.smallStaticAvatar = characters[e].smallStaticAvatar, Craft.initialConfig.skin.failureAvatar = characters[e].failureAvatar, Craft.initialConfig.skin.winAvatar = characters[e].winAvatar, studioApp.setIconsFromSkin(Craft.initialConfig.skin), $("#prompt-icon").attr("src", characters[e].smallStaticAvatar)
        }, Craft.showPlayerSelectionPopup = function(e) {
            var t = DEFAULT_CHARACTER,
                a = document.createElement("div");
            a.innerHTML = require("./dialogs/playerSelection.html.ejs")({
                image: studioApp.assetUrl()
            });
            var s = studioApp.createModalDialog({
                contentDiv: a,
                defaultBtnSelector: "#choose-steve",
                onHidden: function() {
                    e(t)
                },
                id: "craft-popup-player-selection"
            });
            dom.addClickTouchEvent($("#close-character-select")[0], function() {
                s.hide()
            }.bind(this)), dom.addClickTouchEvent($("#choose-steve")[0], function() {
                t = CHARACTER_STEVE, trackEvent("Minecraft", "ClickedCharacter", t), s.hide()
            }.bind(this)), dom.addClickTouchEvent($("#choose-alex")[0], function() {
                t = CHARACTER_ALEX, trackEvent("Minecraft", "ClickedCharacter", t), s.hide()
            }.bind(this)), s.show()
        }, Craft.showHouseSelectionPopup = function(e) {
            var t = document.createElement("div");
            t.innerHTML = require("./dialogs/houseSelection.html.ejs")({
                image: studioApp.assetUrl()
            });
            var a = "houseA",
                s = studioApp.createModalDialog({
                    contentDiv: t,
                    defaultBtnSelector: "#choose-house-a",
                    onHidden: function() {
                        e(a)
                    },
                    id: "craft-popup-house-selection",
                    icon: characters[Craft.getCurrentCharacter()].staticAvatar
                });
            dom.addClickTouchEvent($("#close-house-select")[0], function() {
                s.hide()
            }.bind(this)), dom.addClickTouchEvent($("#choose-house-a")[0], function() {
                a = "houseA", trackEvent("Minecraft", "ClickedHouse", a), s.hide()
            }.bind(this)), dom.addClickTouchEvent($("#choose-house-b")[0], function() {
                a = "houseB", trackEvent("Minecraft", "ClickedHouse", a), s.hide()
            }.bind(this)), dom.addClickTouchEvent($("#choose-house-c")[0], function() {
                a = "houseC", trackEvent("Minecraft", "ClickedHouse", a), s.hide()
            }.bind(this)), s.show()
        }, Craft.clearPlayerState = function() {
            window.localStorage.removeItem("craftHouseBlocks"), window.localStorage.removeItem("craftPlayerInventory"), window.localStorage.removeItem("craftSelectedPlayer"), window.localStorage.removeItem("craftSelectedHouse")
        }, Craft.onHouseSelected = function(e) {
            trySetLocalStorageItem("craftSelectedHouse", e)
        }, Craft.initializeAppLevel = function(levelConfig) {
            var houseBlocks = JSON.parse(window.localStorage.getItem("craftHouseBlocks"));
            Craft.foldInCustomHouseBlocks(houseBlocks, levelConfig);
            for (var fluffPlane = [], i = 0; i < (levelConfig.gridWidth || 10) * (levelConfig.gridHeight || 10); i++) fluffPlane.push("");
            var levelAssetPacks = {
                beforeLoad: Craft.minAssetsForLevelWithCharacter(levelConfig.puzzle_number),
                afterLoad: Craft.afterLoadAssetsForLevel(levelConfig.puzzle_number)
            };
            Craft.gameController.loadLevel({
                isDaytime: levelConfig.isDaytime,
                groundPlane: levelConfig.groundPlane,
                groundDecorationPlane: levelConfig.groundDecorationPlane,
                actionPlane: levelConfig.actionPlane,
                fluffPlane: fluffPlane,
                playerStartPosition: levelConfig.playerStartPosition,
                playerStartDirection: levelConfig.playerStartDirection,
                playerName: Craft.getCurrentCharacter(),
                assetPacks: levelAssetPacks,
                specialLevelType: levelConfig.specialLevelType,
                houseBottomRight: levelConfig.houseBottomRight,
                gridDimensions: levelConfig.gridWidth && levelConfig.gridHeight ? [levelConfig.gridWidth, levelConfig.gridHeight] : null,
                verificationFunction: eval("[" + levelConfig.verificationFunction + "]")[0]
            })
        }, Craft.minAssetsForLevelWithCharacter = function(e) {
            return Craft.minAssetsForLevelNumber(e).concat([Craft.characterAssetPackName(Craft.getCurrentCharacter())])
        }, Craft.minAssetsForLevelNumber = function(e) {
            switch (e) {
                case 1:
                    return ["levelOneAssets"];
                case 2:
                    return ["levelTwoAssets"];
                case 3:
                    return ["levelThreeAssets"];
                default:
                    return ["allAssetsMinusPlayer"]
            }
        }, Craft.afterLoadAssetsForLevel = function(e) {
            switch (e) {
                case 1:
                    return Craft.minAssetsForLevelNumber(2);
                case 2:
                    return Craft.minAssetsForLevelNumber(3);
                default:
                    return ["allAssetsMinusPlayer"]
            }
        }, Craft.earlyLoadAssetsForLevel = function(e) {
            switch (e) {
                case 1:
                    return Craft.minAssetsForLevelNumber(e);
                default:
                    return Craft.minAssetsForLevelWithCharacter(e)
            }
        }, Craft.niceToHaveAssetsForLevel = function(e) {
            switch (e) {
                case 1:
                    return ["playerSteve", "playerAlex"];
                default:
                    return ["allAssetsMinusPlayer"]
            }
        }, Craft.foldInArray = function(e, t) {
            for (var a = 0; a < e.length; a++) "" !== t[a] && (e[a] = t[a])
        }, Craft.foldInCustomHouseBlocks = function(e, t) {
            var a = [t.groundPlane, t.actionPlane];
            a.forEach(function(t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.match(/house/) && (t[a] = e && e[s] ? e[s] : "planksBirch")
                }
            })
        }, Craft.reset = function(e) {
            e || Craft.gameController.codeOrgAPI.resetAttempt()
        }, Craft.phaserLoaded = function() {
            return Craft.gameController && Craft.gameController.game && !Craft.gameController.game.load.isLoading
        }, Craft.runButtonClick = function() {
            if (Craft.phaserLoaded()) {
                var e = document.getElementById("runButton"),
                    t = document.getElementById("resetButton");
                if (t.style.minWidth || (t.style.minWidth = e.offsetWidth + "px"), studioApp.toggleRunReset("reset"), Blockly.mainBlockSpace.traceOn(!0), studioApp.attempts++, Craft.executeUserCode(), Craft.level.freePlay && !studioApp.hideSource) {
                    var a = $("#right-button-cell");
                    if (a.length && !a.hasClass("right-button-cell-enabled")) {
                        a.addClass("right-button-cell-enabled"), studioApp.onResize();
                        var s = document.createEvent("Event");
                        s.initEvent("finishButtonShown", !0, !0), document.dispatchEvent(s)
                    }
                }
            }
        }, Craft.executeUserCode = function() {
            if (Craft.initialConfig.level.edit_blocks) return void this.reportResult(!0);
            if (studioApp.hasExtraTopBlocks()) return void this.reportResult(!1);
            studioApp.playAudio("start"), Blockly.mainBlockSpace.traceOn(!0);
            var e = Craft.gameController.codeOrgAPI;
            e.startCommandCollection();
            var t = Blockly.Generator.blockSpaceToCode("JavaScript");
            codegen.evalWith(t, {
                moveForward: function(t) {
                    e.moveForward(studioApp.highlight.bind(studioApp, t))
                },
                turnLeft: function(t) {
                    e.turn(studioApp.highlight.bind(studioApp, t), "left")
                },
                turnRight: function(t) {
                    e.turn(studioApp.highlight.bind(studioApp, t), "right")
                },
                destroyBlock: function(t) {
                    e.destroyBlock(studioApp.highlight.bind(studioApp, t))
                },
                shear: function(t) {
                    e.destroyBlock(studioApp.highlight.bind(studioApp, t))
                },
                tillSoil: function(t) {
                    e.tillSoil(studioApp.highlight.bind(studioApp, t))
                },
                whilePathAhead: function(t, a) {
                    e.whilePathAhead(studioApp.highlight.bind(studioApp, t), "", a)
                },
                whileBlockAhead: function(t, a, s) {
                    e.whilePathAhead(studioApp.highlight.bind(studioApp, t), a, s)
                },
                ifLavaAhead: function(t, a) {
                    e.ifBlockAhead(studioApp.highlight.bind(studioApp, a), "lava", t)
                },
                ifBlockAhead: function(t, a, s) {
                    e.ifBlockAhead(studioApp.highlight.bind(studioApp, s), t, a)
                },
                placeBlock: function(t, a) {
                    e.placeBlock(studioApp.highlight.bind(studioApp, a), t)
                },
                plantCrop: function(t) {
                    e.placeBlock(studioApp.highlight.bind(studioApp, t), "cropWheat")
                },
                placeTorch: function(t) {
                    e.placeBlock(studioApp.highlight.bind(studioApp, t), "torch")
                },
                placeBlockAhead: function(t, a) {
                    e.placeInFront(studioApp.highlight.bind(studioApp, a), t)
                }
            }), e.startAttempt(function(e, t) {
                if (!Craft.level.freePlay) {
                    this.reportResult(e);
                    var a = Craft.initialConfig.level.blocksToStore;
                    if (e && a) {
                        for (var s = JSON.parse(window.localStorage.getItem("craftHouseBlocks")) || {}, o = 0; o < t.actionPlane.length; o++) "" !== a[o] && (s[a[o]] = t.actionPlane[o].blockType);
                        trySetLocalStorageItem("craftHouseBlocks", JSON.stringify(s))
                    }
                    var i = t.getInventoryTypes(),
                        n = JSON.parse(window.localStorage.getItem("craftPlayerInventory")) || [],
                        r = {};
                    i.concat(n).forEach(function(e) {
                        r[e] = !0
                    }), trySetLocalStorageItem("craftPlayerInventory", JSON.stringify(Object.keys(r)))
                }
            }.bind(this))
        }, Craft.getTestResultFrom = function(e, t) {
            return t === TestResults.LEVEL_INCOMPLETE_FAIL ? TestResults.APP_SPECIFIC_FAIL : Craft.initialConfig.level.freePlay ? TestResults.FREE_PLAY : t
        }, Craft.reportResult = function(e) {
            var t = studioApp.getTestResults(e),
                a = Craft.getTestResultFrom(e, t),
                s = Craft.replayTextForResult(a);
            studioApp.report({
                app: "craft",
                level: Craft.initialConfig.level.id,
                result: Craft.initialConfig.level.freePlay ? !0 : e,
                testResult: a,
                program: encodeURIComponent(Blockly.Xml.domToText(Blockly.Xml.blockSpaceToDom(Blockly.mainBlockSpace))),
                onComplete: function(e) {
                    studioApp.displayFeedback({
                        keepPlayingText: s,
                        app: "craft",
                        skin: Craft.initialConfig.skin.id,
                        feedbackType: a,
                        response: e,
                        level: Craft.initialConfig.level,
                        appStrings: {
                            reinfFeedbackMsg: craftMsg.reinfFeedbackMsg(),
                            nextLevelMsg: craftMsg.nextLevelMsg({
                                puzzleNumber: Craft.initialConfig.level.puzzle_number
                            }),
                            tooManyBlocksFailMsgFunction: craftMsg.tooManyBlocksFail,
                            generatedCodeDescription: craftMsg.generatedCodeDescription()
                        },
                        feedbackImage: Craft.initialConfig.level.freePlay ? Craft.gameController.getScreenshot() : null,
                        showingSharing: Craft.initialConfig.level.freePlay
                    })
                }
            })
        }, Craft.replayTextForResult = function(e) {
            return e === TestResults.FREE_PLAY ? craftMsg.keepPlayingButton() : e <= TestResults.APP_SPECIFIC_ACCEPTABLE_FAIL ? commonMsg.tryAgain() : craftMsg.replayButton()
        }
    }, {
        "../MusicController": "/home/ubuntu/static-hoc/apps/build/js/MusicController.js",
        "../StudioApp": "/home/ubuntu/static-hoc/apps/build/js/StudioApp.js",
        "../codegen": "/home/ubuntu/static-hoc/apps/build/js/codegen.js",
        "../dom": "/home/ubuntu/static-hoc/apps/build/js/dom.js",
        "../locale": "/home/ubuntu/static-hoc/apps/build/js/locale.js",
        "../skins": "/home/ubuntu/static-hoc/apps/build/js/skins.js",
        "../templates/page.html.ejs": "/home/ubuntu/static-hoc/apps/build/js/templates/page.html.ejs",
        "./api": "/home/ubuntu/static-hoc/apps/build/js/craft/api.js",
        "./controls.html.ejs": "/home/ubuntu/static-hoc/apps/build/js/craft/controls.html.ejs",
        "./dialogs/houseSelection.html.ejs": "/home/ubuntu/static-hoc/apps/build/js/craft/dialogs/houseSelection.html.ejs",
        "./dialogs/playerSelection.html.ejs": "/home/ubuntu/static-hoc/apps/build/js/craft/dialogs/playerSelection.html.ejs",
        "./game/GameController": "/home/ubuntu/static-hoc/apps/build/js/craft/game/GameController.js",
        "./houseLevels": "/home/ubuntu/static-hoc/apps/build/js/craft/houseLevels.js",
        "./levelbuilderOverrides": "/home/ubuntu/static-hoc/apps/build/js/craft/levelbuilderOverrides.js",
        "./locale": "/home/ubuntu/static-hoc/apps/build/js/craft/locale.js",
        "./visualization.html.ejs": "/home/ubuntu/static-hoc/apps/build/js/craft/visualization.html.ejs"
    }],
    "/home/ubuntu/static-hoc/apps/build/js/craft/visualization.html.ejs": [function(require, module, exports) {
        module.exports = function() {
            var t = function anonymous(locals, filters, escape) {
                escape = escape || function(e) {
                    return String(e).replace(/&(?!\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                };
                var buf = [];
                with(locals || {}) ! function() {
                    buf.push('<div id="minecraft-frame">\n  <div id="phaser-game">\n  </div>\n</div>\n')
                }();
                return buf.join("")
            };
            return function(e) {
                return t(e, require("ejs").filters)
            }
        }()
    }, {
        ejs: "/home/ubuntu/static-hoc/apps/node_modules/ejs/lib/ejs.js"
    }],
    "/home/ubuntu/static-hoc/apps/build/js/craft/levelbuilderOverrides.js": [function(e, t) {
        "use strict";
        var a = (e("../utils"), e("./locale"));
        t.exports = {
            1: {
                appSpecificFailError: a.level1FailureMessage(),
                tooFewBlocksMsg: a.level1TooFewBlocksMessage(),
                songs: ["vignette4-intro"]
            },
            2: {
                appSpecificFailError: a.level2FailureMessage(),
                tooFewBlocksMsg: a.level2TooFewBlocksMessage(),
                songs: ["vignette5-shortpiano"]
            },
            3: {
                appSpecificFailError: a.level3FailureMessage(),
                tooFewBlocksMsg: a.level3TooFewBlocksMessage(),
                songs: ["vignette2-quiet", "vignette5-shortpiano", "vignette4-intro"]
            },
            4: {
                appSpecificFailError: a.level4FailureMessage(),
                tooFewBlocksMsg: a.level4FailureMessage(),
                songs: ["vignette3", "vignette2-quiet", "vignette5-shortpiano", "vignette4-intro"],
                songDelay: 4e3
            },
            5: {
                appSpecificFailError: a.level5FailureMessage(),
                tooFewBlocksMsg: a.level5FailureMessage(),
                songs: ["vignette7-funky-chirps-short", "vignette2-quiet", "vignette4-intro", "vignette3"]
            },
            6: {
                appSpecificFailError: a.level6FailureMessage(),
                tooFewBlocksMsg: a.level6FailureMessage(),
                songs: ["vignette1", "vignette2-quiet", "vignette4-intro", "vignette3"],
                songDelay: 4e3
            },
            7: {
                appSpecificFailError: a.level7FailureMessage(),
                tooFewBlocksMsg: a.level7FailureMessage(),
                songs: ["vignette2-quiet", "vignette7-funky-chirps-short", "vignette4-intro", "vignette1", "vignette3"]
            },
            8: {
                appSpecificFailError: a.level8FailureMessage(),
                tooFewBlocksMsg: a.level8FailureMessage(),
                songs: ["vignette5-shortpiano", "vignette2-quiet", "vignette1", "vignette4-intro", "vignette3"]
            },
            9: {
                appSpecificFailError: a.level9FailureMessage(),
                tooFewBlocksMsg: a.level9FailureMessage(),
                songs: ["vignette3", "vignette5-shortpiano", "vignette7-funky-chirps-short", "vignette2-quiet", "vignette4-intro", "vignette1"]
            },
            10: {
                appSpecificFailError: a.level10FailureMessage(),
                tooFewBlocksMsg: a.level10FailureMessage(),
                songs: ["vignette4-intro", "vignette3", "vignette5-shortpiano", "vignette2-quiet", "vignette7-funky-chirps-short"]
            },
            11: {
                appSpecificFailError: a.level11FailureMessage(),
                tooFewBlocksMsg: a.level11FailureMessage(),
                songs: ["vignette7-funky-chirps-short", "vignette3", "vignette2-quiet"]
            },
            12: {
                appSpecificFailError: a.level12FailureMessage(),
                tooFewBlocksMsg: a.level12FailureMessage(),
                songs: ["vignette5-shortpiano", "vignette2-quiet", "vignette4-intro", "vignette1"]
            },
            13: {
                appSpecificFailError: a.level13FailureMessage(),
                tooFewBlocksMsg: a.level13FailureMessage(),
                songs: ["vignette1", "vignette3", "vignette2-quiet", "vignette4-intro"]
            },
            14: {
                songs: ["vignette8-free-play", "vignette3", "vignette2-quiet", "vignette4-intro", "vignette1"]
            }
        }
    }, {
        "../utils": "/home/ubuntu/static-hoc/apps/build/js/utils.js",
        "./locale": "/home/ubuntu/static-hoc/apps/build/js/craft/locale.js"
    }],
    "/home/ubuntu/static-hoc/apps/build/js/craft/houseLevels.js": [function(e, t) {
        "use strict";
        e("../utils"), t.exports = {
            houseA: {
                groundPlane: ["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "dirtCoarse", "dirtCoarse", "dirtCoarse", "dirtCoarse", "grass", "grass", "grass", "grass", "grass", "grass", "dirtCoarse", "grass", "grass", "dirtCoarse", "grass", "grass", "grass", "grass", "grass", "grass", "dirtCoarse", "grass", "grass", "dirtCoarse", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
                verificationFunction: function(e) {
                    return e.solutionMapMatchesResultMap(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "any", "any", "any", "any", "", "", "", "", "", "", "any", "", "", "any", "", "", "", "", "", "", "any", "", "", "any", "", "", "", "", "", "", "any", "any", "any", "any", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""])
                }.toString(),
                blocksToStore: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "houseRightC", "", "", "", "", "", "", "", "", "", "houseRightB", "", "", "", "", "", "", "houseLeftA", "", "", "houseRightA", "", "", "", "", "", "", "houseBottomA", "houseBottomB", "houseBottomC", "houseBottomD", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
                houseBottomRight: [5, 5]
            },
            houseC: {
                groundPlane: ["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "dirtCoarse", "dirtCoarse", "dirtCoarse", "dirtCoarse", "grass", "grass", "grass", "grass", "grass", "grass", "dirtCoarse", "grass", "grass", "grass", "dirtCoarse", "grass", "grass", "grass", "grass", "grass", "dirtCoarse", "dirtCoarse", "grass", "grass", "dirtCoarse", "grass", "grass", "grass", "grass", "grass", "grass", "dirtCoarse", "grass", "grass", "dirtCoarse", "grass", "grass", "grass", "grass", "grass", "grass", "dirtCoarse", "dirtCoarse", "dirtCoarse", "dirtCoarse", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
                groundDecorationPlane: ["", "", "", "", "", "tallGrass", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "tallGrass", "", "", "", "", "", "", "", "", ""],
                actionPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "houseBottomA", "houseBottomB", "houseBottomC", "houseBottomD", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
                verificationFunction: 'function (verificationAPI) {\r\n      return verificationAPI.solutionMapMatchesResultMap(\r\n            [\r\n              "", "", "", "", "", "", "", "", "", "",\r\n              "", "", "", "", "", "", "", "", "", "",\r\n              "", "", "any", "any", "any", "any", "", "", "", "",\r\n              "", "", "any", "", "", "", "any", "", "", "",\r\n              "", "", "any", "any", "", "", "any", "", "", "",\r\n              "", "", "", "any", "", "", "any", "", "", "",\r\n              "", "", "", "any", "any", "any", "any", "", "", "",\r\n              "", "", "", "", "", "", "", "", "", "",\r\n              "", "", "", "", "", "", "", "", "", "",\r\n              "", "", "", "", "", "", "", "", "", ""\r\n            ]);\r\n}',
                startBlocks: '<xml><block type="when_run" deletable="false" movable="false"><next><block type="controls_repeat_dropdown"><title name="TIMES" config="2-10">2</title><statement name="DO"><block type="craft_moveForward"><next><block type="craft_placeBlock"><title name="TYPE">planksBirch</title></block></next></block></statement><next><block type="craft_turn"><title name="DIR">left</title><next><block type="craft_moveForward"><next><block type="craft_placeBlock"><title name="TYPE">planksBirch</title><next><block type="craft_turn"><title name="DIR">right</title></block></next></block></next></block></next></block></next></block></next></block></xml>',
                blocksToStore: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "houseRightC", "", "", "", "", "", "", "", "", "", "houseRightB", "", "", "", "", "", "", "houseLeftA", "", "", "houseRightA", "", "", "", "", "", "", "houseBottomA", "houseBottomB", "houseBottomC", "houseBottomD", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
                houseBottomRight: [5, 5]
            },
            houseB: {
                groundPlane: ["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "dirtCoarse", "dirtCoarse", "dirtCoarse", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "dirtCoarse", "grass", "dirtCoarse", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "dirtCoarse", "grass", "dirtCoarse", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "dirtCoarse", "grass", "dirtCoarse", "dirtCoarse", "grass", "grass", "grass", "grass", "grass", "grass", "dirtCoarse", "grass", "grass", "dirtCoarse", "grass", "grass", "grass", "grass", "grass", "grass", "dirtCoarse", "grass", "grass", "dirtCoarse", "grass", "grass", "grass", "grass", "grass", "grass", "dirtCoarse", "dirtCoarse", "dirtCoarse", "dirtCoarse", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
                verificationFunction: 'function (verificationAPI) {\r\n      return verificationAPI.solutionMapMatchesResultMap(\r\n            [\r\n              "", "", "", "", "", "", "", "", "", "",\r\n              "", "", "", "any", "any", "any", "", "", "", "",\r\n              "", "", "", "any", "", "any", "", "", "", "",\r\n              "", "", "", "any", "", "any", "", "", "", "",\r\n              "", "", "", "any", "", "any", "any", "", "", "",\r\n              "", "", "", "any", "", "", "any", "", "", "",\r\n              "", "", "", "any", "", "", "any", "", "", "",\r\n              "", "", "", "any", "any", "any", "any", "", "", "",\r\n              "", "", "", "", "", "", "", "", "", "",\r\n              "", "", "", "", "", "", "", "", "", ""\r\n            ]);\r\n}',
                startBlocks: '<xml><block type="when_run" deletable="false" movable="false"><next><block type="controls_repeat_dropdown"><title name="TIMES" config="2-10">6</title><statement name="DO"><block type="craft_moveForward"><next><block type="craft_placeBlock"><title name="TYPE">planksBirch</title></block></next></block></statement></block></next></block></xml>',
                blocksToStore: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "houseRightC", "", "", "", "", "", "", "", "", "", "houseRightB", "", "", "", "", "", "", "houseLeftA", "", "", "houseRightA", "", "", "", "", "", "", "houseBottomA", "houseBottomB", "houseBottomC", "houseBottomD", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
                actionPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "houseBottomA", "houseBottomB", "houseBottomC", "houseBottomD", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
                playerStartPosition: [3, 7],
                houseBottomRight: [5, 6]
            }
        }
    }, {
        "../utils": "/home/ubuntu/static-hoc/apps/build/js/utils.js"
    }],
    "/home/ubuntu/static-hoc/apps/build/js/craft/game/GameController.js": [function(e, t, a) {
        "use strict";

        function s(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return t["default"] = e, t
        }

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function e(e, t) {
                    var a = [],
                        s = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var n, r = e[Symbol.iterator](); !(s = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); s = !0);
                    } catch (l) {
                        o = !0, i = l
                    } finally {
                        try {
                            !s && r["return"] && r["return"]()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return a
                }
                return function(t, a) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, a);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            r = function() {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var s = t[a];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }
                return function(t, a, s) {
                    return a && e(t.prototype, a), s && e(t, s), t
                }
            }(),
            l = e("./CommandQueue/CommandQueue.js"),
            c = o(l),
            u = e("./CommandQueue/BaseCommand.js"),
            d = (o(u), e("./CommandQueue/DestroyBlockCommand.js")),
            h = (o(d), e("./CommandQueue/MoveForwardCommand.js")),
            p = (o(h), e("./CommandQueue/TurnCommand.js")),
            m = (o(p), e("./CommandQueue/WhileCommand.js")),
            g = (o(m), e("./CommandQueue/IfBlockAheadCommand.js")),
            f = (o(g), e("./LevelMVC/LevelModel.js")),
            y = o(f),
            v = e("./LevelMVC/LevelView.js"),
            k = o(v),
            b = e("./LevelMVC/AssetLoader.js"),
            P = o(b),
            C = e("./API/CodeOrgAPI.js"),
            _ = s(C),
            S = 400,
            A = 400,
            w = function() {
                function e(t) {
                    var a = this;
                    i(this, e), this.DEBUG = t.debug, window.PhaserGlobal = {
                        disableAudio: !0,
                        disableWebAudio: !0,
                        hideBanner: !this.DEBUG
                    }, this.codeOrgAPI = _.get(this);
                    var s = t.Phaser;
                    this.game = new s.Game({
                        width: S,
                        height: A,
                        renderer: s.CANVAS,
                        parent: t.containerId,
                        state: "earlyLoad",
                        preserveDrawingBuffer: !0
                    }), this.specialLevelType = null, this.queue = new c["default"](this), this.OnCompleteCallback = null, this.assetRoot = t.assetRoot, this.audioPlayer = t.audioPlayer, this.afterAssetsLoaded = t.afterAssetsLoaded, this.assetLoader = new P["default"](this), this.earlyLoadAssetPacks = t.earlyLoadAssetPacks || [], this.earlyLoadNiceToHaveAssetPacks = t.earlyLoadNiceToHaveAssetPacks || [], this.resettableTimers = [], this.assumedSlowMotion = 1.5, this.initialSlowMotion = t.customSlowMotion || this.assumedSlowMotion, this.playerDelayFactor = 1, this.game.state.add("earlyLoad", {
                        preload: function() {
                            a.game.load.resetLocked = !0, a.assetLoader.loadPacks(a.earlyLoadAssetPacks)
                        },
                        create: function() {
                            a.assetLoader.loadPacks(a.earlyLoadNiceToHaveAssetPacks), a.game.load.start()
                        }
                    }), this.game.state.add("levelRunner", {
                        preload: this.preload.bind(this),
                        create: this.create.bind(this),
                        update: this.update.bind(this),
                        render: this.render.bind(this)
                    })
                }
                return r(e, [{
                    key: "loadLevel",
                    value: function(e) {
                        this.levelData = Object.freeze(e), this.levelModel = new y["default"](this.levelData), this.levelView = new k["default"](this), this.specialLevelType = e.specialLevelType, this.game.state.start("levelRunner")
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.levelModel.reset(), this.levelView.reset(this.levelModel), this.resettableTimers.forEach(function(e) {
                            e.stop(!0)
                        }), this.resettableTimers.length = 0
                    }
                }, {
                    key: "preload",
                    value: function() {
                        this.game.load.resetLocked = !0, this.game.time.advancedTiming = this.DEBUG, this.game.stage.disableVisibilityChange = !0, this.assetLoader.loadPacks(this.levelData.assetPacks.beforeLoad)
                    }
                }, {
                    key: "create",
                    value: function() {
                        var e = this;
                        this.levelView.create(this.levelModel), this.game.time.slowMotion = this.initialSlowMotion, this.addCheatKeys(), this.assetLoader.loadPacks(this.levelData.assetPacks.afterLoad), this.game.load.onLoadComplete.addOnce(function() {
                            e.afterAssetsLoaded && e.afterAssetsLoaded()
                        }), this.game.load.start()
                    }
                }, {
                    key: "followingPlayer",
                    value: function() {
                        return !!this.levelData.gridDimensions
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.queue.tick(), this.levelView.update(), this.queue.isFinished() && this.handleEndState()
                    }
                }, {
                    key: "addCheatKeys",
                    value: function() {
                        var e = this;
                        this.game.input.keyboard.addKey(Phaser.Keyboard.TILDE).onUp.add(function() {
                            e.game.input.keyboard.addKey(Phaser.Keyboard.UP).onUp.add(function() {
                                var t = function() {
                                    console.log("highlight move forward command.")
                                };
                                e.codeOrgAPI.moveForward(t)
                            }), e.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT).onUp.add(function() {
                                var t = function() {
                                    console.log("highlight turn right command.")
                                };
                                e.codeOrgAPI.turnRight(t)
                            }), e.game.input.keyboard.addKey(Phaser.Keyboard.LEFT).onUp.add(function() {
                                var t = function() {
                                    console.log("highlight turn left command.")
                                };
                                e.codeOrgAPI.turnLeft(t)
                            }), e.game.input.keyboard.addKey(Phaser.Keyboard.P).onUp.add(function() {
                                var t = function() {
                                    console.log("highlight placeBlock command.")
                                };
                                e.codeOrgAPI.placeBlock(t, "logOak")
                            }), e.game.input.keyboard.addKey(Phaser.Keyboard.D).onUp.add(function() {
                                var t = function() {
                                    console.log("highlight destroy block command.")
                                };
                                e.codeOrgAPI.destroyBlock(t)
                            }), e.game.input.keyboard.addKey(Phaser.Keyboard.E).onUp.add(function() {
                                var t = function(e) {
                                    console.log("Execute command list done: " + e + " ")
                                };
                                e.codeOrgAPI.startAttempt(t)
                            }), e.game.input.keyboard.addKey(Phaser.Keyboard.W).onUp.add(function() {
                                var t = function() {
                                        console.log("Execute While command list")
                                    },
                                    a = "empty",
                                    s = function() {
                                        this.GameController.codeOrgAPI.moveForward(function() {
                                            console.log("Execute While command move block")
                                        }), this.GameController.codeOrgAPI.moveForward(function() {
                                            console.log("Execute While command move block2")
                                        }), this.GameController.codeOrgAPI.turnLeft(function() {
                                            console.log("Execute While command turn")
                                        })
                                    };
                                e.codeOrgAPI.whilePathAhead(t, a, s)
                            })
                        })
                    }
                }, {
                    key: "handleEndState",
                    value: function() {
                        this.OnCompleteCallback && (this.queue.isSucceeded() ? this.OnCompleteCallback(!0, this.levelModel) : this.OnCompleteCallback(!1, this.levelModel), this.OnCompleteCallback = null)
                    }
                }, {
                    key: "render",
                    value: function() {
                        this.DEBUG && this.game.debug.text(this.game.time.fps || "--", 2, 14, "#00ff00"), this.levelView.render()
                    }
                }, {
                    key: "scaleFromOriginal",
                    value: function() {
                        var e = this.levelData.gridDimensions || [10, 10],
                            t = n(e, 2),
                            a = t[0],
                            s = t[1],
                            o = 10,
                            i = 10;
                        return [a / o, s / i]
                    }
                }, {
                    key: "getScreenshot",
                    value: function() {
                        return this.game.canvas.toDataURL("image/png")
                    }
                }, {
                    key: "moveForward",
                    value: function(e) {
                        var t, a, s, o = this,
                            i = this.levelModel.player;
                        if (this.levelModel.canMoveForward()) {
                            var n = i.isOnBlock;
                            this.levelModel.moveForward(), s = n && n != i.isOnBlock, a = i.isOnBlock || s ? this.levelModel.actionPlane[this.levelModel.yToIndex(i.position[1]) + i.position[0]].blockType : this.levelModel.groundPlane[this.levelModel.yToIndex(i.position[1]) + i.position[0]].blockType, this.levelView.playMoveForwardAnimation(i.position, i.facing, s, i.isOnBlock, a, function() {
                                o.levelView.playIdleAnimation(i.position, i.facing, i.isOnBlock), t = o.levelModel.isPlayerStandingNearCreeper(), o.levelModel.isPlayerStandingInWater() ? o.levelView.playDrownFailureAnimation(i.position, i.facing, i.isOnBlock, function() {
                                    e.failed()
                                }) : o.levelModel.isPlayerStandingInLava() ? o.levelView.playBurnInLavaAnimation(i.position, i.facing, i.isOnBlock, function() {
                                    e.failed()
                                }) : o.delayPlayerMoveBy(30, 200, function() {
                                    e.succeeded()
                                })
                            })
                        } else this.levelModel.isForwardBlockOfType("creeper") ? this.levelView.playCreeperExplodeAnimation(i.position, i.facing, this.levelModel.getMoveForwardPosition(), i.isOnBlock, function() {
                            e.failed()
                        }) : (this.levelView.playBumpAnimation(i.position, i.facing, !1), this.delayPlayerMoveBy(400, 800, function() {
                            e.succeeded()
                        }))
                    }
                }, {
                    key: "turn",
                    value: function(e, t) {
                        -1 == t && this.levelModel.turnLeft(), 1 == t && this.levelModel.turnRight(), this.levelView.updatePlayerDirection(this.levelModel.player.position, this.levelModel.player.facing), this.delayPlayerMoveBy(200, 800, function() {
                            e.succeeded()
                        })
                    }
                }, {
                    key: "destroyBlockWithoutPlayerInteraction",
                    value: function(e) {
                        var t = this.levelModel.actionPlane[this.levelModel.yToIndex(e[1]) + e[0]];
                        if (this.levelModel.destroyBlock(e), null !== t) {
                            var a = t.position,
                                s = t.blockType;
                            if (t.isDestroyable) {
                                switch (this.levelModel.computeShadingPlane(), this.levelModel.computeFowPlane(), s) {
                                    case "logAcacia":
                                    case "treeAcacia":
                                        s = "planksAcacia";
                                        break;
                                    case "logBirch":
                                    case "treeBirch":
                                        s = "planksBirch";
                                        break;
                                    case "logJungle":
                                    case "treeJungle":
                                        s = "planksJungle";
                                        break;
                                    case "logOak":
                                    case "treeOak":
                                        s = "planksOak";
                                        break;
                                    case "logSpruce":
                                    case "treeSpruce":
                                        s = "planksSpruce"
                                }
                                this.levelView.actionPlaneBlocks[this.levelModel.yToIndex(a[1]) + a[0]].kill(), this.levelView.playExplosionAnimation(this.levelModel.player.position, this.levelModel.player.facing, a, s, function() {}, !0)
                            } else if (t.isUsable) switch (s) {
                                case "sheep":
                                    this.levelView.playShearAnimation(this.levelModel.player.position, this.levelModel.player.facing, a, s, function() {})
                            }
                        }
                    }
                }, {
                    key: "destroyBlock",
                    value: function(e) {
                        var t = this,
                            a = this.levelModel.player;
                        if (this.levelModel.canDestroyBlockForward()) {
                            var s = this.levelModel.destroyBlockForward();
                            if (null !== s) {
                                var o = s.position,
                                    i = s.blockType;
                                if (s.isDestroyable) {
                                    switch (this.levelModel.computeShadingPlane(), this.levelModel.computeFowPlane(), i) {
                                        case "logAcacia":
                                        case "treeAcacia":
                                            i = "planksAcacia";
                                            break;
                                        case "logBirch":
                                        case "treeBirch":
                                            i = "planksBirch";
                                            break;
                                        case "logJungle":
                                        case "treeJungle":
                                            i = "planksJungle";
                                            break;
                                        case "logOak":
                                        case "treeOak":
                                            i = "planksOak";
                                            break;
                                        case "logSpruce":
                                        case "treeSpruce":
                                            i = "planksSpruce"
                                    }
                                    this.levelView.playDestroyBlockAnimation(a.position, a.facing, o, i, this.levelModel.shadingPlane, this.levelModel.fowPlane, function() {
                                        e.succeeded()
                                    })
                                } else if (s.isUsable) switch (i) {
                                    case "sheep":
                                        this.levelView.playShearSheepAnimation(a.position, a.facing, o, i, function() {
                                            e.succeeded()
                                        });
                                        break;
                                    default:
                                        e.succeeded()
                                } else e.succeeded()
                            }
                        } else this.levelView.playPunchDestroyAirAnimation(a.position, a.facing, this.levelModel.getMoveForwardPosition(), function() {
                            t.levelView.setSelectionIndicatorPosition(a.position[0], a.position[1]), t.levelView.playIdleAnimation(a.position, a.facing, a.isOnBlock), t.delayPlayerMoveBy(200, 600, function() {
                                e.succeeded()
                            })
                        })
                    }
                }, {
                    key: "canUseTints",
                    value: function() {
                        return !0
                    }
                }, {
                    key: "checkTntAnimation",
                    value: function() {
                        return "freeplay" === this.specialLevelType
                    }
                }, {
                    key: "checkMinecartLevelEndAnimation",
                    value: function() {
                        return "minecart" === this.specialLevelType
                    }
                }, {
                    key: "checkHouseBuiltEndAnimation",
                    value: function() {
                        return "houseBuild" === this.specialLevelType
                    }
                }, {
                    key: "checkRailBlock",
                    value: function t(e) {
                        var t = this.levelModel.railMap[this.levelModel.yToIndex(this.levelModel.player.position[1]) + this.levelModel.player.position[0]];
                        return e = "" !== t ? t : "railsVertical"
                    }
                }, {
                    key: "placeBlock",
                    value: function(e, t) {
                        var a = this,
                            s = this.levelModel.yToIndex(this.levelModel.player.position[1]) + this.levelModel.player.position[0],
                            o = this.levelModel.actionPlane[s].blockType;
                        if (this.levelModel.canPlaceBlock())
                            if (this.checkMinecartLevelEndAnimation() && "rail" == t && (t = this.checkRailBlock(t)), "" !== o && this.levelModel.destroyBlock(s), this.levelModel.placeBlock(t)) this.levelView.playPlaceBlockAnimation(this.levelModel.player.position, this.levelModel.player.facing, t, o, function() {
                                a.levelModel.computeShadingPlane(), a.levelModel.computeFowPlane(), a.levelView.updateShadingPlane(a.levelModel.shadingPlane), a.levelView.updateFowPlane(a.levelModel.fowPlane), a.delayBy(200, function() {
                                    a.levelView.playIdleAnimation(a.levelModel.player.position, a.levelModel.player.facing, !1)
                                }), a.delayPlayerMoveBy(200, 400, function() {
                                    e.succeeded()
                                })
                            });
                            else var i = this.levelView.playPlayerAnimation("jumpUp", this.levelModel.player.position, this.levelModel.player.facing, !1).onLoop.add(function() {
                                a.levelView.playIdleAnimation(a.levelModel.player.position, a.levelModel.player.facing, !1), i.detach(), a.delayBy(800, function() {
                                    e.succeeded()
                                })
                            }, this);
                        else e.failed()
                    }
                }, {
                    key: "setPlayerActionDelayByQueueLength",
                    value: function() {
                        var e = 10,
                            t = 20,
                            a = this.queue.getLength(),
                            s = t - e,
                            o = Math.min(Math.max(a - e, 0), s);
                        this.playerDelayFactor = 1 - o / s
                    }
                }, {
                    key: "delayBy",
                    value: function(e, t) {
                        var a = this.game.time.create(!0);
                        a.add(this.originalMsToScaled(e), t, this), a.start(), this.resettableTimers.push(a)
                    }
                }, {
                    key: "delayPlayerMoveBy",
                    value: function(e, t, a) {
                        this.delayBy(Math.max(e, t * this.playerDelayFactor), a)
                    }
                }, {
                    key: "originalMsToScaled",
                    value: function(e) {
                        var t = e / this.assumedSlowMotion;
                        return t * this.game.time.slowMotion
                    }
                }, {
                    key: "originalFpsToScaled",
                    value: function(e) {
                        var t = e * this.assumedSlowMotion;
                        return t / this.game.time.slowMotion
                    }
                }, {
                    key: "placeBlockForward",
                    value: function(e, t) {
                        var a, s, o = this,
                            i = function() {};
                        return this.levelModel.canPlaceBlockForward() ? (a = this.levelModel.getMoveForwardPosition(), s = this.levelModel.getPlaneToPlaceOn(a), this.levelModel.isBlockOfTypeOnPlane(a, "lava", s) && (i = function() {
                            o.levelView.audioPlayer.play("fizz")
                        }), this.levelModel.placeBlockForward(t, s), void this.levelView.playPlaceBlockInFrontAnimation(this.levelModel.player.position, this.levelModel.player.facing, this.levelModel.getMoveForwardPosition(), s, t, function() {
                            o.levelModel.computeShadingPlane(), o.levelModel.computeFowPlane(), o.levelView.updateShadingPlane(o.levelModel.shadingPlane), o.levelView.updateFowPlane(o.levelModel.fowPlane), i(), o.delayBy(200, function() {
                                o.levelView.playIdleAnimation(o.levelModel.player.position, o.levelModel.player.facing, !1)
                            }), o.delayPlayerMoveBy(200, 400, function() {
                                e.succeeded()
                            })
                        })) : void this.levelView.playPunchAirAnimation(this.levelModel.player.position, this.levelModel.player.facing, this.levelModel.player.position, function() {
                            o.levelView.playIdleAnimation(o.levelModel.player.position, o.levelModel.player.facing, !1), e.succeeded()
                        })
                    }
                }, {
                    key: "checkSolution",
                    value: function(e) {
                        var t = this,
                            a = this.levelModel.player;
                        if (this.levelView.setSelectionIndicatorPosition(a.position[0], a.position[1]), this.levelModel.isSolved())
                            if (this.checkHouseBuiltEndAnimation()) {
                                var s = this.levelModel.getHouseBottomRight(),
                                    o = [s[0] - 1, s[1] + 2],
                                    i = [s[0], s[1]],
                                    n = [s[0] - 1, s[1] + 1];
                                this.levelModel.moveTo(o), this.levelView.playSuccessHouseBuiltAnimation(a.position, a.facing, a.isOnBlock, this.levelModel.houseGroundToFloorBlocks(s), [i, n], function() {
                                    e.succeeded()
                                }, function() {
                                    t.levelModel.destroyBlock(i), t.levelModel.destroyBlock(n), t.levelModel.computeShadingPlane(), t.levelModel.computeFowPlane(), t.levelView.updateShadingPlane(t.levelModel.shadingPlane), t.levelView.updateFowPlane(t.levelModel.fowPlane)
                                })
                            } else if (this.checkMinecartLevelEndAnimation()) this.levelView.playMinecartAnimation(a.position, a.facing, a.isOnBlock, function() {
                            e.succeeded()
                        }, this.levelModel.getMinecartTrack(), this.levelModel.getUnpoweredRails());
                        else if (this.checkTntAnimation()) {
                            this.levelView.scaleShowWholeWorld(function() {});
                            var r = this.levelModel.getTnt(),
                                l = a.isOnBlock;
                            this.levelView.playDestroyTntAnimation(a.position, a.facing, a.isOnBlock, this.levelModel.getTnt(), this.levelModel.shadingPlane, function() {
                                r.length;
                                for (var s in r) {
                                    r[s].x === t.levelModel.player.position.x && r[s].y === t.levelModel.player.position.y && (t.levelModel.player.isOnBlock = !1);
                                    var o = t.levelModel.getAllBorderingPositionNotOfType(r[s], "tnt");
                                    t.levelModel.destroyBlock(r[s]);
                                    for (var i = 1; i < o.length; ++i) o[i][0] && t.destroyBlockWithoutPlayerInteraction(o[i][1])
                                }!a.isOnBlock && l && t.levelView.playPlayerJumpDownVerticalAnimation(a.position, a.facing), t.levelModel.computeShadingPlane(), t.levelModel.computeFowPlane(), t.levelView.updateShadingPlane(t.levelModel.shadingPlane), t.levelView.updateFowPlane(t.levelModel.fowPlane), t.delayBy(200, function() {
                                    t.levelView.playSuccessAnimation(a.position, a.facing, a.isOnBlock, function() {
                                        e.succeeded()
                                    })
                                })
                            })
                        } else this.levelView.playSuccessAnimation(a.position, a.facing, a.isOnBlock, function() {
                            e.succeeded()
                        });
                        else this.levelView.playFailureAnimation(a.position, a.facing, a.isOnBlock, function() {
                            e.failed()
                        })
                    }
                }, {
                    key: "isPathAhead",
                    value: function(e) {
                        return this.levelModel.isForwardBlockOfType(e)
                    }
                }]), e
            }();
        window.GameController = w, a["default"] = w, t.exports = a["default"]
    }, {
        "./API/CodeOrgAPI.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/API/CodeOrgAPI.js",
        "./CommandQueue/BaseCommand.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/BaseCommand.js",
        "./CommandQueue/CommandQueue.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/CommandQueue.js",
        "./CommandQueue/DestroyBlockCommand.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/DestroyBlockCommand.js",
        "./CommandQueue/IfBlockAheadCommand.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/IfBlockAheadCommand.js",
        "./CommandQueue/MoveForwardCommand.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/MoveForwardCommand.js",
        "./CommandQueue/TurnCommand.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/TurnCommand.js",
        "./CommandQueue/WhileCommand.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/WhileCommand.js",
        "./LevelMVC/AssetLoader.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/LevelMVC/AssetLoader.js",
        "./LevelMVC/LevelModel.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/LevelMVC/LevelModel.js",
        "./LevelMVC/LevelView.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/LevelMVC/LevelView.js"
    }],
    "/home/ubuntu/static-hoc/apps/build/js/craft/game/LevelMVC/LevelView.js": [function(e, t, a) {
        "use strict";

        function s(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    var a = [],
                        s = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var n, r = e[Symbol.iterator](); !(s = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); s = !0);
                    } catch (l) {
                        o = !0, i = l
                    } finally {
                        try {
                            !s && r["return"] && r["return"]()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return a
                }
                return function(t, a) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, a);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            n = function() {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var s = t[a];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }
                return function(t, a, s) {
                    return a && e(t.prototype, a), s && e(t, s), t
                }
            }(),
            r = e("./FacingDirection.js"),
            l = s(r),
            c = function() {
                function e(t) {
                    o(this, e), this.controller = t, this.audioPlayer = t.audioPlayer, this.game = t.game, this.baseShading = null, this.playerSprite = null, this.playerGhost = null, this.selectionIndicator = null, this.groundPlane = null, this.shadingPlane = null, this.actionPlane = null, this.fluffPlane = null, this.fowPlane = null, this.miniBlocks = {
                        dirt: ["Miniblocks", 0, 5],
                        dirtCoarse: ["Miniblocks", 6, 11],
                        sand: ["Miniblocks", 12, 17],
                        gravel: ["Miniblocks", 18, 23],
                        bricks: ["Miniblocks", 24, 29],
                        logAcacia: ["Miniblocks", 30, 35],
                        logBirch: ["Miniblocks", 36, 41],
                        logJungle: ["Miniblocks", 42, 47],
                        logOak: ["Miniblocks", 48, 53],
                        logSpruce: ["Miniblocks", 54, 59],
                        planksAcacia: ["Miniblocks", 60, 65],
                        planksBirch: ["Miniblocks", 66, 71],
                        planksJungle: ["Miniblocks", 72, 77],
                        planksOak: ["Miniblocks", 78, 83],
                        planksSpruce: ["Miniblocks", 84, 89],
                        cobblestone: ["Miniblocks", 90, 95],
                        sandstone: ["Miniblocks", 96, 101],
                        wool: ["Miniblocks", 102, 107],
                        redstoneDust: ["Miniblocks", 108, 113],
                        lapisLazuli: ["Miniblocks", 114, 119],
                        ingotIron: ["Miniblocks", 120, 125],
                        ingotGold: ["Miniblocks", 126, 131],
                        emerald: ["Miniblocks", 132, 137],
                        diamond: ["Miniblocks", 138, 143],
                        coal: ["Miniblocks", 144, 149],
                        bucketWater: ["Miniblocks", 150, 155],
                        bucketLava: ["Miniblocks", 156, 161],
                        gunPowder: ["Miniblocks", 162, 167],
                        wheat: ["Miniblocks", 168, 173],
                        potato: ["Miniblocks", 174, 179],
                        carrots: ["Miniblocks", 180, 185],
                        sheep: ["Miniblocks", 102, 107]
                    }, this.blocks = {
                        bedrock: ["blocks", "Bedrock", -13, 0],
                        bricks: ["blocks", "Bricks", -13, 0],
                        oreCoal: ["blocks", "Coal_Ore", -13, 0],
                        dirtCoarse: ["blocks", "Coarse_Dirt", -13, 0],
                        cobblestone: ["blocks", "Cobblestone", -13, 0],
                        oreDiamond: ["blocks", "Diamond_Ore", -13, 0],
                        dirt: ["blocks", "Dirt", -13, 0],
                        oreEmerald: ["blocks", "Emerald_Ore", -13, 0],
                        farmlandWet: ["blocks", "Farmland_Wet", -13, 0],
                        flowerDandelion: ["blocks", "Flower_Dandelion", -13, 0],
                        flowerOxeeye: ["blocks", "Flower_Oxeeye", -13, 0],
                        flowerRose: ["blocks", "Flower_Rose", -13, 0],
                        glass: ["blocks", "Glass", -13, 0],
                        oreGold: ["blocks", "Gold_Ore", -13, 0],
                        grass: ["blocks", "Grass", -13, 0],
                        gravel: ["blocks", "Gravel", -13, 0],
                        oreIron: ["blocks", "Iron_Ore", -13, 0],
                        oreLapis: ["blocks", "Lapis_Ore", -13, 0],
                        lava: ["blocks", "Lava_0", -13, 0],
                        logAcacia: ["blocks", "Log_Acacia", -13, 0],
                        logBirch: ["blocks", "Log_Birch", -13, 0],
                        logJungle: ["blocks", "Log_Jungle", -13, 0],
                        logOak: ["blocks", "Log_Oak", -13, 0],
                        logSpruce: ["blocks", "Log_Spruce", -13, 0],
                        planksAcacia: ["blocks", "Planks_Acacia", -13, 0],
                        planksBirch: ["blocks", "Planks_Birch", -13, 0],
                        planksJungle: ["blocks", "Planks_Jungle", -13, 0],
                        planksOak: ["blocks", "Planks_Oak", -13, 0],
                        planksSpruce: ["blocks", "Planks_Spruce", -13, 0],
                        oreRedstone: ["blocks", "Redstone_Ore", -13, 0],
                        sand: ["blocks", "Sand", -13, 0],
                        sandstone: ["blocks", "Sandstone", -13, 0],
                        stone: ["blocks", "Stone", -13, 0],
                        tnt: ["tnt", "TNTexplosion0", -80, -58],
                        water: ["blocks", "Water_0", -13, 0],
                        wool: ["blocks", "Wool_White", -13, 0],
                        wool_orange: ["blocks", "Wool_Orange", -13, 0],
                        leavesAcacia: ["leavesAcacia", "Leaves0", -42, 80],
                        leavesBirch: ["leavesBirch", "Leaves0", -100, -10],
                        leavesJungle: ["leavesJungle", "Leaves0", -69, 43],
                        leavesOak: ["leavesOak", "Leaves0", -100, 0],
                        leavesSpruce: ["leavesSpruce", "Leaves0", -76, 60],
                        watering: ["blocks", "Water_0", -13, 0],
                        cropWheat: ["blocks", "Wheat0", -13, 0],
                        torch: ["torch", "Torch0", -13, 0],
                        tallGrass: ["tallGrass", "", -13, 0],
                        lavaPop: ["lavaPop", "LavaPop01", -13, 0],
                        fire: ["fire", "", -11, 135],
                        bubbles: ["bubbles", "", -11, 135],
                        explosion: ["explosion", "", -70, 60],
                        door: ["door", "", -12, -15],
                        railsBottomLeft: ["blocks", "Rails_BottomLeft", -13, 0],
                        railsBottomRight: ["blocks", "Rails_BottomRight", -13, 0],
                        railsHorizontal: ["blocks", "Rails_Horizontal", -13, 0],
                        railsTopLeft: ["blocks", "Rails_TopLeft", -13, 0],
                        railsTopRight: ["blocks", "Rails_TopRight", -13, 0],
                        railsUnpoweredHorizontal: ["blocks", "Rails_UnpoweredHorizontal", -13, 0],
                        railsUnpoweredVertical: ["blocks", "Rails_UnpoweredVertical", -13, 0],
                        railsVertical: ["blocks", "Rails_Vertical", -13, -0],
                        railsPoweredHorizontal: ["blocks", "Rails_PoweredHorizontal", -13, 0],
                        railsPoweredVertical: ["blocks", "Rails_PoweredVertical", -13, 0],
                        railsRedstoneTorch: ["blocks", "Rails_RedstoneTorch", -12, 9]
                    }, this.actionPlaneBlocks = [], this.toDestroy = [], this.resettableTweens = []
                }
                return n(e, [{
                    key: "yToIndex",
                    value: function(e) {
                        return this.controller.levelModel.yToIndex(e)
                    }
                }, {
                    key: "create",
                    value: function(e) {
                        this.createPlanes(), this.reset(e)
                    }
                }, {
                    key: "reset",
                    value: function(e) {
                        var t = e.player;
                        this.resettableTweens.forEach(function(e) {
                            e.stop(!1)
                        }), this.resettableTweens.length = 0, this.resetPlanes(e), this.preparePlayerSprite(t.name), this.playerSprite.animations.stop(), this.updateShadingPlane(e.shadingPlane), this.updateFowPlane(e.fowPlane), this.setPlayerPosition(t.position[0], t.position[1], t.isOnBlock), this.setSelectionIndicatorPosition(t.position[0], t.position[1]), this.selectionIndicator.visible = !0, this.playIdleAnimation(t.position, t.facing, t.isOnBlock), this.controller.followingPlayer() && (this.game.world.setBounds(0, 0, 40 * e.planeWidth, 40 * e.planeHeight), this.game.camera.follow(this.playerSprite), this.game.world.scale.x = 1, this.game.world.scale.y = 1)
                    }
                }, {
                    key: "update",
                    value: function() {
                        var e;
                        for (e = 0; e < this.toDestroy.length; ++e) this.toDestroy[e].destroy();
                        this.toDestroy = [], this.playerGhost && (this.playerGhost.frame = this.playerSprite.frame, this.playerGhost.z = 1e3)
                    }
                }, {
                    key: "render",
                    value: function() {
                        this.actionPlane.sort("sortOrder"), this.fluffPlane.sort("z")
                    }
                }, {
                    key: "getDirectionName",
                    value: function(e) {
                        var t;
                        switch (e) {
                            case l["default"].Up:
                                t = "_up";
                                break;
                            case l["default"].Right:
                                t = "_right";
                                break;
                            case l["default"].Down:
                                t = "_down";
                                break;
                            case l["default"].Left:
                                t = "_left"
                        }
                        return t
                    }
                }, {
                    key: "updatePlayerDirection",
                    value: function(e, t) {
                        var a = this.getDirectionName(t);
                        this.setSelectionIndicatorPosition(e[0], e[1]), this.playScaledSpeed(this.playerSprite.animations, "idle" + a)
                    }
                }, {
                    key: "playPlayerAnimation",
                    value: function(e, t, a) {
                        var s = this.getDirectionName(a);
                        this.playerSprite.sortOrder = this.yToIndex(t[1]) + 5;
                        var o = e + s;
                        return this.playScaledSpeed(this.playerSprite.animations, o)
                    }
                }, {
                    key: "playIdleAnimation",
                    value: function(e, t, a) {
                        this.playPlayerAnimation("idle", e, t, a)
                    }
                }, {
                    key: "scaleShowWholeWorld",
                    value: function(e) {
                        var t = this.controller.scaleFromOriginal(),
                            a = i(t, 2),
                            s = a[0],
                            o = a[1],
                            n = this.addResettableTween(this.game.world.scale).to({
                                x: 1 / s,
                                y: 1 / o
                            }, 1e3, Phaser.Easing.Exponential.Out);
                        this.game.camera.unfollow();
                        var r = this.addResettableTween(this.game.camera).to({
                            x: 0,
                            y: 0
                        }, 1e3, Phaser.Easing.Exponential.Out);
                        n.onComplete.addOnce(function() {
                            e()
                        }), r.start(), n.start()
                    }
                }, {
                    key: "playSuccessAnimation",
                    value: function(e, t, a, s) {
                        var o = this;
                        this.controller.delayBy(250, function() {
                            o.audioPlayer.play("success"), o.onAnimationEnd(o.playPlayerAnimation("celebrate", e, t, a), function() {
                                s()
                            })
                        })
                    }
                }, {
                    key: "playFailureAnimation",
                    value: function(e, t, a, s) {
                        var o = this;
                        this.controller.delayBy(500, function() {
                            o.audioPlayer.play("failure"), o.onAnimationEnd(o.playPlayerAnimation("fail", e, t, a), function() {
                                o.controller.delayBy(800, s)
                            })
                        })
                    }
                }, {
                    key: "playBumpAnimation",
                    value: function(e, t, a) {
                        var s = this,
                            o = this.playPlayerAnimation("bump", e, t, a);
                        return o.onComplete.add(function() {
                            s.playIdleAnimation(e, t, a)
                        }), o
                    }
                }, {
                    key: "playDrownFailureAnimation",
                    value: function(e, t, a, s) {
                        var o, n;
                        this.playPlayerAnimation("fail", e, t, a), this.createBlock(this.fluffPlane, e[0], e[1], "bubbles"), o = this.fluffPlane.create(0, 0, "finishOverlay");
                        var r = this.controller.scaleFromOriginal(),
                            l = i(r, 2),
                            c = l[0],
                            u = l[1];
                        o.scale.x = c, o.scale.y = u, o.alpha = 0, this.controller.canUseTints() && (o.tint = 3296255), n = this.addResettableTween(o).to({
                            alpha: .5
                        }, 200, Phaser.Easing.Linear.None), n.onComplete.add(function() {
                            s()
                        }), n.start()
                    }
                }, {
                    key: "playBurnInLavaAnimation",
                    value: function(e, t, a, s) {
                        var o, n;
                        this.playPlayerAnimation("jumpUp", e, t, a), this.createBlock(this.fluffPlane, e[0], e[1], "fire"), o = this.fluffPlane.create(0, 0, "finishOverlay");
                        var r = this.controller.scaleFromOriginal(),
                            l = i(r, 2),
                            c = l[0],
                            u = l[1];
                        o.scale.x = c, o.scale.y = u, o.alpha = 0, this.controller.canUseTints() && (o.tint = 13719565), n = this.addResettableTween(o).to({
                            alpha: .5
                        }, 200, Phaser.Easing.Linear.None), n.onComplete.add(function() {
                            s()
                        }), n.start()
                    }
                }, {
                    key: "playDestroyTntAnimation",
                    value: function(e, t, a, s, o, i) {
                        var n, r, l = this;
                        if (0 === s.length) return void i();
                        this.audioPlayer.play("fuse");
                        for (var c in s) n = this.actionPlaneBlocks[this.coordinatesToIndex(s[c])], r = this.playScaledSpeed(n.animations, "explode");
                        this.onAnimationEnd(r, function() {
                            l.audioPlayer.play("explode"), i()
                        })
                    }
                }, {
                    key: "playCreeperExplodeAnimation",
                    value: function(e, t, a, s, o) {
                        var i = this;
                        this.controller.delayBy(180, function() {
                            i.playPlayerAnimation("bump", e, t, !1).onComplete.add(function() {
                                i.audioPlayer.play("fuse"), i.playExplodingCreeperAnimation(e, t, a, s, o, i), i.controller.delayBy(200, function() {
                                    i.onAnimationLoopOnce(i.playPlayerAnimation("jumpUp", e, t, !1), function() {
                                        i.playIdleAnimation(e, t, s)
                                    })
                                })
                            })
                        })
                    }
                }, {
                    key: "playExplodingCreeperAnimation",
                    value: function(e, t, a, s, o) {
                        var i = this,
                            n = (this.getDirectionName(t), this.yToIndex(a[1]) + a[0]),
                            r = this.actionPlaneBlocks[n],
                            l = r.animations.getAnimation("explode");
                        l.onComplete.add(function() {
                            r.kill(), i.playExplosionAnimation(e, t, a, s, function() {
                                i.controller.delayBy(100, function() {
                                    i.playFailureAnimation(e, t, !1, o)
                                })
                            }, !1), i.audioPlayer.play("explode"), i.playExplosionCloudAnimation(a)
                        }), l.play()
                    }
                }, {
                    key: "playExplosionCloudAnimation",
                    value: function(e) {
                        this.createBlock(this.fluffPlane, e[0], e[1], "explosion")
                    }
                }, {
                    key: "coordinatesToIndex",
                    value: function(e) {
                        return this.yToIndex(e[1]) + e[0]
                    }
                }, {
                    key: "playMinecartTurnAnimation",
                    value: function(e, t, a, s, o) {
                        var i = this.playPlayerAnimation("mineCart_turn" + o, e, l["default"].Down, !1);
                        return i
                    }
                }, {
                    key: "playMinecartMoveForwardAnimation",
                    value: function(e, t, a, s, o, i) {
                        var n;
                        return this.audioPlayer.play("minecart"), this.playPlayerAnimation("mineCart", e, t, !1), n = this.addResettableTween(this.playerSprite).to({
                            x: -18 + 40 * o[0],
                            y: -32 + 40 * o[1]
                        }, i, Phaser.Easing.Linear.None), n.start(), this.playerSprite.sortOrder = this.yToIndex(o[1]) + 5, n
                    }
                }, {
                    key: "activateUnpoweredRails",
                    value: function(e) {
                        for (var t = 0; t < e.length; t += 2) {
                            var a = e[t + 1],
                                s = e[t];
                            this.createActionPlaneBlock(s, a)
                        }
                    }
                }, {
                    key: "playMinecartAnimation",
                    value: function(e, t, a, s, o, i) {
                        var n, r = this;
                        this.track = o, this.i = 0, this.setPlayerPosition(3, 2, a), e = [3, 2], n = this.playLevelEndAnimation(e, t, a, s, !1), n.onComplete.add(function() {
                            r.activateUnpoweredRails(i), r.playTrack(e, t, a, s, o)
                        })
                    }
                }, {
                    key: "playTrack",
                    value: function(e, t, a, s, o) {
                        var i = this;
                        if (this.i < this.track.length) {
                            var n, r = this.track[this.i][0],
                                l = this.track[this.i][1],
                                c = this.track[this.i][3];
                            t = this.track[this.i][2], "turn" === r.substring(0, 4) ? (n = r.substring(5), this.playMinecartTurnAnimation(e, t, a, s, n).onComplete.add(function() {
                                i.playMinecartMoveForwardAnimation(e, t, a, s, l, c).onComplete.add(function() {
                                    e = l, i.playTrack(e, t, a, s, o)
                                })
                            })) : this.playMinecartMoveForwardAnimation(e, t, a, s, l, c).onComplete.add(function() {
                                i.playTrack(e, t, a, s, o)
                            }), this.i++
                        } else this.playSuccessAnimation(e, t, a, function() {}), s()
                    }
                }, {
                    key: "addHouseBed",
                    value: function(e) {
                        var t = e[1] - 1,
                            a = this.actionPlane.create(38 * e[0], 35 * t, "bed");
                        a.sortOrder = this.yToIndex(e[1])
                    }
                }, {
                    key: "addDoor",
                    value: function(e) {
                        var t, a = this.actionPlaneBlocks[this.coordinatesToIndex(e)];
                        this.createActionPlaneBlock(e, "door"), t = this.createBlock(this.groundPlane, e[0], e[1], "wool_orange"), a.kill(), t.sortOrder = this.yToIndex(6)
                    }
                }, {
                    key: "playSuccessHouseBuiltAnimation",
                    value: function(e, t, a, s, o, i, n) {
                        var r, l = this;
                        r = this.playLevelEndAnimation(e, t, a, function() {
                            l.controller.delayBy(4e3, i)
                        }, !0), r.onComplete.add(function() {
                            l.audioPlayer.play("houseSuccess");
                            for (var e, t, a, i = 0; i < s.length; ++i) e = s[i][1], t = s[i][2], a = l.createBlock(l.groundPlane, e, t, "wool_orange"), a.sortOrder = l.yToIndex(t);
                            l.addHouseBed(o[0]), l.addDoor(o[1]), l.groundPlane.sort("sortOrder"), n()
                        })
                    }
                }, {
                    key: "playLevelEndAnimation",
                    value: function(e, t, a, s, o) {
                        var n, r, l, c = this;
                        n = this.fluffPlane.create(0, 0, "finishOverlay");
                        var u = this.controller.scaleFromOriginal(),
                            d = i(u, 2),
                            h = d[0],
                            p = d[1];
                        return n.scale.x = h, n.scale.y = p, n.alpha = 0, r = this.tweenToWhite(n), l = this.tweenFromWhiteToClear(n), r.onComplete.add(function() {
                            c.selectionIndicator.visible = !1, c.setPlayerPosition(e[0], e[1], a), l.start()
                        }), o && l.onComplete.add(function() {
                            c.playSuccessAnimation(e, t, a, s)
                        }), r.start(), r
                    }
                }, {
                    key: "tweenFromWhiteToClear",
                    value: function(e) {
                        var t;
                        return t = this.addResettableTween(e).to({
                            alpha: 0
                        }, 700, Phaser.Easing.Linear.None)
                    }
                }, {
                    key: "tweenToWhite",
                    value: function t(e) {
                        var t;
                        return t = this.addResettableTween(e).to({
                            alpha: 1
                        }, 300, Phaser.Easing.Linear.None)
                    }
                }, {
                    key: "playBlockSound",
                    value: function(e) {
                        var t = e.substring(0, 3);
                        this.audioPlayer.play("stone" === e || "cobblestone" === e || "bedrock" === e || "ore" === t || "bricks" === e ? "stepStone" : "grass" === e || "dirt" === e || "dirtCoarse" === e || "wool_orange" == e || "wool" == e ? "stepGrass" : "gravel" === e ? "stepGravel" : "farmlandWet" === e ? "stepFarmland" : "stepWood")
                    }
                }, {
                    key: "playMoveForwardAnimation",
                    value: function(e, t, a, s, o, i) {
                        var n, r, c, u, d = this,
                            h = -32;
                        this.playBlockSound(o);
                        var p = this.getDirectionName(t);
                        this.setSelectionIndicatorPosition(e[0], e[1]);
                        var m = e[1] + (t === l["default"].Up ? 1 : 0);
                        return this.playerSprite.sortOrder = this.yToIndex(m) + 5, r = [Math.trunc((this.playerSprite.position.x + 18) / 40), Math.ceil((this.playerSprite.position.y + 32) / 40)], c = [e[0] - r[0], e[1] - r[1]], s && (h -= 22), a ? (u = "jumpDown" + p, this.playScaledSpeed(this.playerSprite.animations, u), n = this.addResettableTween(this.playerSprite).to({
                            x: [-18 + 40 * r[0], -18 + 40 * (r[0] + c[0]), -18 + 40 * e[0]],
                            y: [-32 + 40 * r[1], -32 + 40 * (r[1] + c[1]) - 50, -32 + 40 * e[1]]
                        }, 300, Phaser.Easing.Linear.None).interpolation(function(e, t) {
                            return Phaser.Math.bezierInterpolation(e, t)
                        }), n.onComplete.add(function() {
                            d.audioPlayer.play("fall")
                        })) : (u = "walk" + p, this.playScaledSpeed(this.playerSprite.animations, u), n = this.addResettableTween(this.playerSprite).to({
                            x: -18 + 40 * e[0],
                            y: h + 40 * e[1]
                        }, 200, Phaser.Easing.Linear.None)), n.onComplete.add(function() {
                            i()
                        }), n.start(), n
                    }
                }, {
                    key: "playPlayerJumpDownVerticalAnimation",
                    value: function(e, t) {
                        var a = this,
                            s = "jumpDown" + this.getDirectionName(t);
                        this.playScaledSpeed(this.playerSprite.animations, s);
                        var o = this.addResettableTween(this.playerSprite).to({
                            x: [-18 + 40 * e[0], -18 + 40 * e[0], -18 + 40 * e[0]],
                            y: [-32 + 40 * e[1], -32 + 40 * e[1] - 50, -32 + 40 * e[1]]
                        }, 300, Phaser.Easing.Linear.None).interpolation(function(e, t) {
                            return Phaser.Math.bezierInterpolation(e, t)
                        });
                        o.onComplete.addOnce(function() {
                            a.audioPlayer.play("fall")
                        }), o.start()
                    }
                }, {
                    key: "playPlaceBlockAnimation",
                    value: function(e, t, a, s, o) {
                        var i, n = this,
                            r = this.yToIndex(e[1]) + e[0];
                        if ("cropWheat" === a || "torch" === a || "rails" === a.substring(0, 5)) {
                            this.setSelectionIndicatorPosition(e[0], e[1]);
                            var l = this.playPlayerAnimation("punch", e, t, !1).onComplete.add(function() {
                                var t;
                                l.detach();
                                var s = n.yToIndex(e[1]) + e[0];
                                t = n.createBlock(n.actionPlane, e[0], e[1], a), t && (t.sortOrder = n.yToIndex(e[1])), n.actionPlaneBlocks[s] = t, o()
                            })
                        } else {
                            this.audioPlayer.play("placeBlock");
                            var c = this.getDirectionName(t);
                            this.setSelectionIndicatorPosition(e[0], e[1]), i = "jumpUp" + c, "" !== s && this.playExplosionAnimation(e, t, e, s, function() {}, !1), this.playScaledSpeed(this.playerSprite.animations, i);
                            var u = this.addResettableTween(this.playerSprite).to({
                                y: -55 + 40 * e[1]
                            }, 125, Phaser.Easing.Cubic.EaseOut);
                            u.onComplete.addOnce(function() {
                                u = null, "" !== s && n.actionPlaneBlocks[r].kill();
                                var t = n.createBlock(n.actionPlane, e[0], e[1], a);
                                t && (t.sortOrder = n.yToIndex(e[1])), n.actionPlaneBlocks[r] = t, o()
                            }), u.start()
                        }
                    }
                }, {
                    key: "playPlaceBlockInFrontAnimation",
                    value: function(e, t, a, s, o, i) {
                        var n = this;
                        this.setSelectionIndicatorPosition(a[0], a[1]), this.playPlayerAnimation("punch", e, t, !1).onComplete.addOnce(function() {
                            s === n.controller.levelModel.actionPlane ? n.createActionPlaneBlock(a, o) : n.refreshGroundPlane(), i()
                        })
                    }
                }, {
                    key: "createActionPlaneBlock",
                    value: function(e, t) {
                        var a = this.yToIndex(e[1]) + e[0],
                            s = this.createBlock(this.actionPlane, e[0], e[1], t);
                        s && (s.sortOrder = this.yToIndex(e[1])), this.actionPlaneBlocks[a] = s
                    }
                }, {
                    key: "playShearAnimation",
                    value: function(e, t, a, s, o) {
                        var i = this,
                            n = this.yToIndex(a[1]) + a[0],
                            r = this.actionPlaneBlocks[n];
                        r.animations.stop(null, !0), this.onAnimationLoopOnce(this.playScaledSpeed(r.animations, "used"), function() {
                            i.playScaledSpeed(r.animations, "face")
                        }), this.playExplosionAnimation(e, t, a, s, o, !0)
                    }
                }, {
                    key: "playShearSheepAnimation",
                    value: function(e, t, a, s, o) {
                        var i = this;
                        this.getDirectionName(t), this.setSelectionIndicatorPosition(a[0], a[1]), this.onAnimationEnd(this.playPlayerAnimation("punch", e, t, !1), function() {
                            var n = i.yToIndex(a[1]) + a[0],
                                r = i.actionPlaneBlocks[n];
                            r.animations.stop(null, !0), i.onAnimationLoopOnce(i.playScaledSpeed(r.animations, "used"), function() {
                                i.playScaledSpeed(r.animations, "face")
                            }), i.playExplosionAnimation(e, t, a, s, o, !0)
                        })
                    }
                }, {
                    key: "playDestroyBlockAnimation",
                    value: function(e, t, a, s, o, i, n) {
                        this.setSelectionIndicatorPosition(a[0], a[1]);
                        var r = s.match(/(ore|stone|clay|bricks|bedrock)/) ? "mine" : "punchDestroy";
                        this.playPlayerAnimation(r, e, t, !1), this.playMiningParticlesAnimation(t, a), this.playBlockDestroyOverlayAnimation(e, t, a, s, o, i, n)
                    }
                }, {
                    key: "playPunchDestroyAirAnimation",
                    value: function(e, t, a, s) {
                        this.playPunchAnimation(e, t, a, "punchDestroy", s)
                    }
                }, {
                    key: "playPunchAirAnimation",
                    value: function(e, t, a, s) {
                        this.playPunchAnimation(e, t, a, "punch", s)
                    }
                }, {
                    key: "playPunchAnimation",
                    value: function(e, t, a, s, o) {
                        this.setSelectionIndicatorPosition(a[0], a[1]), this.onAnimationEnd(this.playPlayerAnimation(s, e, t, !1), function() {
                            o()
                        })
                    }
                }, {
                    key: "playBlockDestroyOverlayAnimation",
                    value: function(e, t, a, s, o, i, n) {
                        var r = this,
                            l = this.yToIndex(a[1]) + a[0],
                            c = this.actionPlaneBlocks[l],
                            u = (this.getDirectionName(t), this.actionPlane.create(-12 + 40 * a[0], -22 + 40 * a[1], "destroyOverlay", "destroy1"));
                        u.sortOrder = this.yToIndex(a[1]) + 2, this.onAnimationEnd(u.animations.add("destroy", Phaser.Animation.generateFrameNames("destroy", 1, 12, "", 0), 30, !1), function() {
                            r.actionPlaneBlocks[l] = null, c.hasOwnProperty("onBlockDestroy") && c.onBlockDestroy(c), c.kill(), u.kill(), r.toDestroy.push(c), r.toDestroy.push(u), r.updateShadingPlane(o), r.updateFowPlane(i), r.setSelectionIndicatorPosition(e[0], e[1]), r.audioPlayer.play("dig_wood1"), r.playExplosionAnimation(e, t, a, s, n, !0)
                        }), this.playScaledSpeed(u.animations, "destroy")
                    }
                }, {
                    key: "playMiningParticlesAnimation",
                    value: function(e, t) {
                        var a = this,
                            s = [
                                [24, -100, -80],
                                [12, -120, -80],
                                [0, -60, -80],
                                [36, -80, -60]
                            ],
                            o = this.getDirectionName(e),
                            i = "_left" === o ? 0 : "_bottom" === o ? 1 : "_right" === o ? 2 : 3,
                            n = s[i][0],
                            r = s[i][1],
                            l = s[i][2],
                            c = this.actionPlane.create(r + 40 * t[0], l + 40 * t[1], "miningParticles", "MiningParticles" + n);
                        c.sortOrder = this.yToIndex(t[1]) + 2, this.onAnimationEnd(c.animations.add("miningParticles", Phaser.Animation.generateFrameNames("MiningParticles", n, n + 11, "", 0), 30, !1), function() {
                            c.kill(), a.toDestroy.push(c)
                        }), this.playScaledSpeed(c.animations, "miningParticles")
                    }
                }, {
                    key: "playExplosionAnimation",
                    value: function(e, t, a, s, o, i) {
                        var n = this,
                            r = this.actionPlane.create(-36 + 40 * a[0], -30 + 40 * a[1], "blockExplode", "BlockBreakParticle0");
                        if (this.controller.canUseTints()) switch (s) {
                            case "treeAcacia":
                            case "logAcacia":
                                r.tint = 7103834;
                                break;
                            case "treeBirch":
                            case "logBirch":
                                r.tint = 14341836;
                                break;
                            case "treeJungle":
                            case "logJungle":
                                r.tint = 6967089;
                                break;
                            case "treeOak":
                            case "logOak":
                                r.tint = 6771249;
                                break;
                            case "treeSpruce":
                            case "logSpruce":
                                r.tint = 4929827;
                                break;
                            case "planksAcacia":
                                r.tint = 12215095;
                                break;
                            case "planksBirch":
                                r.tint = 14142349;
                                break;
                            case "planksJungle":
                                r.tint = 12093284;
                                break;
                            case "planksOak":
                                r.tint = 11833434;
                                break;
                            case "planksSpruce":
                                r.tint = 8412726;
                                break;
                            case "stone":
                            case "oreCoal":
                            case "oreDiamond":
                            case "oreIron":
                            case "oreGold":
                            case "oreEmerald":
                            case "oreRedstone":
                                r.tint = 13027014;
                                break;
                            case "grass":
                            case "cropWheat":
                                r.tint = 6131491;
                                break;
                            case "dirt":
                                r.tint = 9068083
                        }
                        r.sortOrder = this.yToIndex(a[1]) + 2, this.onAnimationEnd(r.animations.add("explode", Phaser.Animation.generateFrameNames("BlockBreakParticle", 0, 7, "", 0), 30, !1), function() {
                            r.kill(), n.toDestroy.push(r), i && (n.playPlayerAnimation("idle", e, t, !1), n.playItemDropAnimation(e, t, a, s, o))
                        }), this.playScaledSpeed(r.animations, "explode"), i || o()
                    }
                }, {
                    key: "playItemDropAnimation",
                    value: function(e, t, a, s, o) {
                        var i = this,
                            n = this.createMiniBlock(a[0], a[1], s);
                        n.sortOrder = this.yToIndex(a[1]) + 2, this.onAnimationEnd(this.playScaledSpeed(n.animations, "animate"), function() {
                            i.playItemAcquireAnimation(e, t, a, s, n, o)
                        })
                    }
                }, {
                    key: "playScaledSpeed",
                    value: function(e, t) {
                        var a = e.getAnimation(t);
                        return a.originalFps || (a.originalFps = 1e3 / a.delay), e.play(t, this.controller.originalFpsToScaled(a.originalFps))
                    }
                }, {
                    key: "playItemAcquireAnimation",
                    value: function(e, t, a, s, o, i) {
                        var n, r = this;
                        n = this.addResettableTween(o).to({
                            x: -18 + 40 * e[0],
                            y: -32 + 40 * e[1]
                        }, 200, Phaser.Easing.Linear.None), n.onComplete.add(function() {
                            r.audioPlayer.play("collectedBlock"), o.kill(), r.toDestroy.push(o), i()
                        }), n.start()
                    }
                }, {
                    key: "setPlayerPosition",
                    value: function(e, t, a) {
                        this.playerSprite.x = -18 + 40 * e, this.playerSprite.y = -32 + (a ? -23 : 0) + 40 * t, this.playerSprite.sortOrder = this.yToIndex(t) + 5
                    }
                }, {
                    key: "setSelectionIndicatorPosition",
                    value: function(e, t) {
                        this.selectionIndicator.x = -12 + 40 * e, this.selectionIndicator.y = -12 + 40 * t
                    }
                }, {
                    key: "createPlanes",
                    value: function() {
                        this.groundPlane = this.game.add.group(), this.groundPlane.yOffset = -2, this.shadingPlane = this.game.add.group(), this.shadingPlane.yOffset = -2, this.actionPlane = this.game.add.group(), this.actionPlane.yOffset = -22, this.fluffPlane = this.game.add.group(), this.fluffPlane.yOffset = -160, this.fowPlane = this.game.add.group(), this.fowPlane.yOffset = 0
                    }
                }, {
                    key: "resetPlanes",
                    value: function(e) {
                        var t, a, s, o;
                        this.groundPlane.removeAll(!0), this.actionPlane.removeAll(!0), this.fluffPlane.removeAll(!0), this.shadingPlane.removeAll(!0), this.fowPlane.removeAll(!0), this.baseShading = this.game.add.group();
                        for (var i = 0; i < 40 * this.controller.levelModel.planeWidth; i += 400)
                            for (var n = 0; n < 40 * this.controller.levelModel.planeHeight; n += 400) this.baseShading.create(i, n, "shadeLayer");
                        for (this.refreshGroundPlane(), this.actionPlaneBlocks = [], s = 0; s < this.controller.levelModel.planeHeight; ++s)
                            for (a = 0; a < this.controller.levelModel.planeWidth; ++a) {
                                var r = this.yToIndex(s) + a;
                                t = null, e.groundDecorationPlane[r].isEmpty || (t = this.createBlock(this.actionPlane, a, s, e.groundDecorationPlane[r].blockType), t && (t.sortOrder = this.yToIndex(s))), t = null, e.actionPlane[r].isEmpty || (o = e.actionPlane[r].blockType, t = this.createBlock(this.actionPlane, a, s, o), null !== t && (t.sortOrder = this.yToIndex(s))), this.actionPlaneBlocks.push(t)
                            }
                        for (s = 0; s < this.controller.levelModel.planeHeight; ++s)
                            for (a = 0; a < this.controller.levelModel.planeWidth; ++a) {
                                var r = this.yToIndex(s) + a;
                                e.fluffPlane[r].isEmpty || (t = this.createBlock(this.fluffPlane, a, s, e.fluffPlane[r].blockType))
                            }
                    }
                }, {
                    key: "refreshGroundPlane",
                    value: function() {
                        this.groundPlane.removeAll(!0);
                        for (var e = 0; e < this.controller.levelModel.planeHeight; ++e)
                            for (var t = 0; t < this.controller.levelModel.planeWidth; ++t) {
                                var a = this.yToIndex(e) + t,
                                    s = this.createBlock(this.groundPlane, t, e, this.controller.levelModel.groundPlane[a].blockType);
                                s && (s.sortOrder = this.yToIndex(e))
                            }
                    }
                }, {
                    key: "updateShadingPlane",
                    value: function(e) {
                        var t, a, s, o, i;
                        for (this.shadingPlane.removeAll(), this.shadingPlane.add(this.baseShading), this.shadingPlane.add(this.selectionIndicator), t = 0; t < e.length; ++t) {
                            switch (a = e[t], i = "AO", s = 40 * a.x, o = -22 + 40 * a.y, a.type) {
                                case "AOeffect_Left":
                                    s += 26, o += 22;
                                    break;
                                case "AOeffect_Right":
                                    s += 0, o += 22;
                                    break;
                                case "AOeffect_Bottom":
                                    s += 0, o += 22;
                                    break;
                                case "AOeffect_BottomLeft":
                                    s += 25, o += 22;
                                    break;
                                case "AOeffect_BottomRight":
                                    s += 0, o += 22;
                                    break;
                                case "AOeffect_Top":
                                    s += 0, o += 47;
                                    break;
                                case "AOeffect_TopLeft":
                                    s += 25, o += 47;
                                    break;
                                case "AOeffect_TopRight":
                                    s += 0, o += 47;
                                    break;
                                case "Shadow_Parts_Fade_base.png":
                                    i = "blockShadows", s -= 52, o += 0;
                                    break;
                                case "Shadow_Parts_Fade_top.png":
                                    i = "blockShadows", s -= 52, o += 0
                            }
                            this.shadingPlane.create(s, o, i, a.type)
                        }
                    }
                }, {
                    key: "updateFowPlane",
                    value: function(e) {
                        var t, a, s, o;
                        for (this.fowPlane.removeAll(), t = 0; t < e.length; ++t) {
                            var i = e[t];
                            if ("" !== i) {
                                switch (o = "undergroundFow", a = -40 + 40 * i.x, s = -40 + 40 * i.y, i.type) {
                                    case "FogOfWar_Center":
                                }
                                this.fowPlane.create(a, s, o, i.type)
                            }
                        }
                    }
                }, {
                    key: "playRandomPlayerIdle",
                    value: function(e) {
                        var t, a, s;
                        switch (t = this.getDirectionName(e), a = Math.trunc(4 * Math.random()) + 1) {
                            case 1:
                                s = "idle";
                                break;
                            case 2:
                                s = "lookLeft";
                                break;
                            case 3:
                                s = "lookRight";
                                break;
                            case 4:
                                s = "lookAtCam"
                        }
                        s += t, this.playScaledSpeed(this.playerSprite.animations, s)
                    }
                }, {
                    key: "generatePlayerCelebrateFrames",
                    value: function() {
                        var e, t = [];
                        for (e = 0; 6 > e; ++e) t.push("Player_001");
                        return t = t.concat("Player_259"), t = t.concat("Player_260"), t.push("Player_261"), t.push("Player_297"), t.push("Player_298"), t.push("Player_297"), t.push("Player_261"), t.push("Player_261"), t.push("Player_297"), t.push("Player_298"), t.push("Player_297"), t.push("Player_261"), t.push("Player_001"), t.push("Player_001"), t.push("Player_001"), t.push("Player_001"), t.push("Player_001"), t.push("Player_261"), t.push("Player_297"), t.push("Player_298"), t.push("Player_297"), t.push("Player_261"), t.push("Player_261"), t.push("Player_297"), t.push("Player_298"), t.push("Player_297"), t.push("Player_261"), t
                    }
                }, {
                    key: "generateFramesWithEndDelay",
                    value: function(e, t, a, s, o, i) {
                        for (var n = Phaser.Animation.generateFrameNames(e, t, a, "", o), r = 0; i > r; ++r) n.push(s);
                        return n
                    }
                }, {
                    key: "preparePlayerSprite",
                    value: function(e) {
                        var t, a, s, o, i = this,
                            n = 10,
                            r = 20;
                        for (this.playerSprite = this.actionPlane.create(0, 0, "player" + e, "Player_121"), this.controller.followingPlayer() && this.game.camera.follow(this.playerSprite), this.playerGhost = this.fluffPlane.create(0, 0, "player" + e, "Player_121"), this.playerGhost.parent = this.playerSprite, this.playerGhost.alpha = .2, this.selectionIndicator = this.shadingPlane.create(24, 44, "selectionIndicator"), o = Phaser.Animation.generateFrameNames("Player_", 285, 296, "", 3), t = [], t.push("Player_001"), t.push("Player_003"), t.push("Player_001"), t.push("Player_007"), t.push("Player_009"), t.push("Player_007"), a = 0; 5 > a; ++a) t.push("Player_001");
                        for (this.playerSprite.animations.add("idle_down", t, r / 3, !1).onComplete.add(function() {
                                i.playRandomPlayerIdle(l["default"].Down)
                            }), t = this.generateFramesWithEndDelay("Player_", 6, 5, "Player_005", 3, 5), t.push("Player_006"), this.playerSprite.animations.add("lookLeft_down", t, n, !1).onComplete.add(function() {
                                i.playScaledSpeed(i.playerSprite.animations, "idlePause_down")
                            }), t = this.generateFramesWithEndDelay("Player_", 12, 11, "Player_011", 3, 5), t.push("Player_012"), this.playerSprite.animations.add("lookRight_down", t, n, !1).onComplete.add(function() {
                                i.playScaledSpeed(i.playerSprite.animations, "idlePause_down")
                            }), t = this.generateFramesWithEndDelay("Player_", 263, 262, "Player_262", 3, 5), t.push("Player_263"), this.playerSprite.animations.add("lookAtCam_down", t, n, !1).onComplete.add(function() {
                                i.playScaledSpeed(i.playerSprite.animations, "idlePause_down")
                            }), t = [], a = 0; 13 > a; ++a) t.push("Player_001");
                        for (this.playerSprite.animations.add("idlePause_down", t, r / 3, !1).onComplete.add(function() {
                                i.playRandomPlayerIdle(l["default"].Down)
                            }), this.playerSprite.animations.add("walk_down", Phaser.Animation.generateFrameNames("Player_", 13, r, "", 3), r, !0), s = Phaser.Animation.generateFrameNames("Player_", 21, 24, "", 3), this.playerSprite.animations.add("punch_down", s, r, !1).onComplete.add(function() {
                                i.audioPlayer.play("punch")
                            }), this.playerSprite.animations.add("punchDestroy_down", s.concat(s).concat(s), r, !1), this.playerSprite.animations.add("hurt_down", Phaser.Animation.generateFrameNames("Player_", 25, 28, "", 3), r, !0), this.playerSprite.animations.add("crouch_down", Phaser.Animation.generateFrameNames("Player_", 29, 32, "", 3), r, !0), this.playerSprite.animations.add("jumpUp_down", Phaser.Animation.generateFrameNames("Player_", 33, 36, "", 3), r / 2, !0), this.playerSprite.animations.add("fail_down", Phaser.Animation.generateFrameNames("Player_", 45, 48, "", 3), r, !1), this.playerSprite.animations.add("celebrate_down", this.generatePlayerCelebrateFrames(), r / 2, !1), this.playerSprite.animations.add("bump_down", Phaser.Animation.generateFrameNames("Player_", 49, 54, "", 3), r, !1).onStart.add(function() {
                                i.audioPlayer.play("bump")
                            }), this.playerSprite.animations.add("jumpDown_down", Phaser.Animation.generateFrameNames("Player_", 55, 60, "", 3), r, !0), this.playerSprite.animations.add("mine_down", Phaser.Animation.generateFrameNames("Player_", 241, 244, "", 3), r, !0), this.playerSprite.animations.add("mineCart_down", Phaser.Animation.generateFrameNames("Minecart_", 5, 5, "", 2), r, !1), this.playerSprite.animations.add("mineCart_turnleft_down", Phaser.Animation.generateFrameNames("Minecart_", 6, 6, "", 2), r, !1), this.playerSprite.animations.add("mineCart_turnright_down", Phaser.Animation.generateFrameNames("Minecart_", 12, 12, "", 2), r, !1), t = [], t.push("Player_061"), t.push("Player_063"), t.push("Player_061"), t.push("Player_067"), t.push("Player_069"), t.push("Player_067"), a = 0; 5 > a; ++a) t.push("Player_061");
                        for (this.playerSprite.animations.add("idle_right", t, r / 3, !1).onComplete.add(function() {
                                i.playRandomPlayerIdle(l["default"].Right)
                            }), t = this.generateFramesWithEndDelay("Player_", 66, 65, "Player_065", 3, 5), t.push("Player_066"), this.playerSprite.animations.add("lookLeft_right", t, n, !1).onComplete.add(function() {
                                i.playScaledSpeed(i.playerSprite.animations, "idlePause_right")
                            }), t = this.generateFramesWithEndDelay("Player_", 72, 71, "Player_071", 3, 5), t.push("Player_072"), this.playerSprite.animations.add("lookRight_right", t, n, !1).onComplete.add(function() {
                                i.playScaledSpeed(i.playerSprite.animations, "idlePause_right")
                            }), t = this.generateFramesWithEndDelay("Player_", 270, 269, "Player_269", 3, 5), t.push("Player_270"), this.playerSprite.animations.add("lookAtCam_right", t, n, !1).onComplete.add(function() {
                                i.playScaledSpeed(i.playerSprite.animations, "idlePause_right")
                            }), t = [], a = 0; 13 > a; ++a) t.push("Player_061");
                        for (this.playerSprite.animations.add("idlePause_right", t, r / 3, !1).onComplete.add(function() {
                                i.playRandomPlayerIdle(l["default"].Right)
                            }), this.playerSprite.animations.add("walk_right", Phaser.Animation.generateFrameNames("Player_", 73, 80, "", 3), r, !0), s = Phaser.Animation.generateFrameNames("Player_", 81, 84, "", 3), this.playerSprite.animations.add("punch_right", s, r, !1).onComplete.add(function() {
                                i.audioPlayer.play("punch")
                            }), this.playerSprite.animations.add("punchDestroy_right", s.concat(s).concat(s), r, !1), this.playerSprite.animations.add("hurt_right", Phaser.Animation.generateFrameNames("Player_", 85, 88, "", 3), r, !0), this.playerSprite.animations.add("crouch_right", Phaser.Animation.generateFrameNames("Player_", 89, 92, "", 3), r, !0), this.playerSprite.animations.add("jumpUp_right", Phaser.Animation.generateFrameNames("Player_", 93, 96, "", 3), r / 2, !0), this.playerSprite.animations.add("fail_right", Phaser.Animation.generateFrameNames("Player_", 105, 108, "", 3), r / 2, !1), this.playerSprite.animations.add("celebrate_right", this.generatePlayerCelebrateFrames(), r / 2, !1), this.playerSprite.animations.add("bump_right", Phaser.Animation.generateFrameNames("Player_", 109, 114, "", 3), r, !1).onStart.add(function() {
                                i.audioPlayer.play("bump")
                            }), this.playerSprite.animations.add("jumpDown_right", Phaser.Animation.generateFrameNames("Player_", 115, 120, "", 3), r, !0), this.playerSprite.animations.add("mine_right", Phaser.Animation.generateFrameNames("Player_", 245, 248, "", 3), r, !0), this.playerSprite.animations.add("mineCart_right", Phaser.Animation.generateFrameNames("Minecart_", 7, 7, "", 2), r, !1), t = [], t.push("Player_181"), t.push("Player_183"), t.push("Player_181"), t.push("Player_187"), t.push("Player_189"), t.push("Player_187"), a = 0; 5 > a; ++a) t.push("Player_181");
                        for (this.playerSprite.animations.add("idle_left", t, r / 3, !1).onComplete.add(function() {
                                i.playRandomPlayerIdle(l["default"].Left)
                            }), t = this.generateFramesWithEndDelay("Player_", 186, 185, "Player_185", 3, 5), t.push("Player_186"), this.playerSprite.animations.add("lookLeft_left", t, n, !1).onComplete.add(function() {
                                i.playScaledSpeed(i.playerSprite.animations, "idlePause_left")
                            }), t = this.generateFramesWithEndDelay("Player_", 192, 191, "Player_191", 3, 5), t.push("Player_192"), this.playerSprite.animations.add("lookRight_left", t, n, !1).onComplete.add(function() {
                                i.playScaledSpeed(i.playerSprite.animations, "idlePause_left")
                            }), t = this.generateFramesWithEndDelay("Player_", 284, 283, "Player_283", 3, 5), t.push("Player_284"), this.playerSprite.animations.add("lookAtCam_left", t, n, !1).onComplete.add(function() {
                                i.playScaledSpeed(i.playerSprite.animations, "idlePause_left")
                            }), t = [], a = 0; 13 > a; ++a) t.push("Player_181");
                        for (this.playerSprite.animations.add("idlePause_left", t, r / 3, !1).onComplete.add(function() {
                                i.playRandomPlayerIdle(l["default"].Left)
                            }), this.playerSprite.animations.add("walk_left", Phaser.Animation.generateFrameNames("Player_", 193, 200, "", 3), r, !0), s = Phaser.Animation.generateFrameNames("Player_", 201, 204, "", 3), this.playerSprite.animations.add("punch_left", s, r, !1).onComplete.add(function() {
                                i.audioPlayer.play("punch")
                            }), this.playerSprite.animations.add("punchDestroy_left", s.concat(s).concat(s), r, !1), this.playerSprite.animations.add("hurt_left", Phaser.Animation.generateFrameNames("Player_", 205, 208, "", 3), r, !0), this.playerSprite.animations.add("crouch_left", Phaser.Animation.generateFrameNames("Player_", 209, 212, "", 3), r, !0), this.playerSprite.animations.add("jumpUp_left", Phaser.Animation.generateFrameNames("Player_", 213, 216, "", 3), r / 2, !0), this.playerSprite.animations.add("fail_left", Phaser.Animation.generateFrameNames("Player_", 225, 228, "", 3), r / 2, !1), this.playerSprite.animations.add("celebrate_left", this.generatePlayerCelebrateFrames(), r / 2, !1), this.playerSprite.animations.add("bump_left", Phaser.Animation.generateFrameNames("Player_", 229, 234, "", 3), r, !1).onStart.add(function() {
                                i.audioPlayer.play("bump")
                            }), this.playerSprite.animations.add("jumpDown_left", Phaser.Animation.generateFrameNames("Player_", 235, 240, "", 3), r, !0), this.playerSprite.animations.add("mine_left", Phaser.Animation.generateFrameNames("Player_", 253, 256, "", 3), r, !0), this.playerSprite.animations.add("mineCart_left", Phaser.Animation.generateFrameNames("Minecart_", 11, 11, "", 2), r, !1), t = [], t.push("Player_121"), t.push("Player_123"), t.push("Player_121"), t.push("Player_127"), t.push("Player_129"), t.push("Player_127"), a = 0; 5 > a; ++a) t.push("Player_121");
                        for (this.playerSprite.animations.add("idle_up", t, r / 3, !1).onComplete.add(function() {
                                i.playRandomPlayerIdle(l["default"].Up)
                            }), t = this.generateFramesWithEndDelay("Player_", 126, 125, "Player_125", 3, 5), t.push("Player_126"), this.playerSprite.animations.add("lookLeft_up", t, n, !1).onComplete.add(function() {
                                i.playScaledSpeed(i.playerSprite.animations, "idlePause_up")
                            }), t = this.generateFramesWithEndDelay("Player_", 132, 131, "Player_131", 3, 5), t.push("Player_132"), this.playerSprite.animations.add("lookRight_up", t, n, !1).onComplete.add(function() {
                                i.playScaledSpeed(i.playerSprite.animations, "idlePause_up")
                            }), t = this.generateFramesWithEndDelay("Player_", 277, 276, "Player_276", 3, 5), t.push("Player_277"), this.playerSprite.animations.add("lookAtCam_up", t, n, !1).onComplete.add(function() {
                                i.playScaledSpeed(i.playerSprite.animations, "idlePause_up")
                            }), t = [], a = 0; 13 > a; ++a) t.push("Player_121");
                        this.playerSprite.animations.add("idlePause_up", t, r / 3, !1).onComplete.add(function() {
                            i.playRandomPlayerIdle(l["default"].Up)
                        }), this.playerSprite.animations.add("walk_up", Phaser.Animation.generateFrameNames("Player_", 133, 140, "", 3), r, !0), s = Phaser.Animation.generateFrameNames("Player_", 141, 144, "", 3), this.playerSprite.animations.add("punch_up", s, r, !1).onComplete.add(function() {
                            i.audioPlayer.play("punch")
                        }), this.playerSprite.animations.add("punchDestroy_up", s.concat(s).concat(s), r, !1), this.playerSprite.animations.add("hurt_up", Phaser.Animation.generateFrameNames("Player_", 145, 148, "", 3), r, !0), this.playerSprite.animations.add("crouch_up", Phaser.Animation.generateFrameNames("Player_", 149, 152, "", 3), r, !0), this.playerSprite.animations.add("jumpUp_up", Phaser.Animation.generateFrameNames("Player_", 153, 156, "", 3), r / 2, !0), this.playerSprite.animations.add("fail_up", Phaser.Animation.generateFrameNames("Player_", 165, 168, "", 3), r / 2, !1), this.playerSprite.animations.add("celebrate_up", this.generatePlayerCelebrateFrames(), r / 2, !1), this.playerSprite.animations.add("bump_up", Phaser.Animation.generateFrameNames("Player_", 169, 174, "", 3), r, !1).onStart.add(function() {
                            i.audioPlayer.play("bump")
                        }), this.playerSprite.animations.add("jumpDown_up", Phaser.Animation.generateFrameNames("Player_", 175, 180, "", 3), r, !0), this.playerSprite.animations.add("mine_up", Phaser.Animation.generateFrameNames("Player_", 249, 252, "", 3), r, !0), this.playerSprite.animations.add("mineCart_up", Phaser.Animation.generateFrameNames("Minecart_", 9, 9, "", 2), r, !1), this.playerSprite.animations.add("mineCart_turnleft_up", Phaser.Animation.generateFrameNames("Minecart_", 10, 10, "", 2), r, !1), this.playerSprite.animations.add("mineCart_turnright_up", Phaser.Animation.generateFrameNames("Minecart_", 8, 8, "", 2), r, !1)
                    }
                }, {
                    key: "createMiniBlock",
                    value: function(e, t, a) {
                        var s, o = "",
                            i = null;
                        switch (a) {
                            case "treeAcacia":
                            case "treeBirch":
                            case "treeJungle":
                            case "treeOak":
                            case "treeSpruce":
                                o = "log" + a.substring(4);
                                break;
                            case "stone":
                                o = "cobblestone";
                                break;
                            case "oreCoal":
                                o = "coal";
                                break;
                            case "oreDiamond":
                                o = "diamond";
                                break;
                            case "oreIron":
                                o = "ingotIron";
                                break;
                            case "oreLapis":
                                o = "lapisLazuli";
                                break;
                            case "oreGold":
                                o = "ingotGold";
                                break;
                            case "oreEmerald":
                                o = "emerald";
                                break;
                            case "oreRedstone":
                                o = "redstoneDust";
                                break;
                            case "grass":
                                o = "dirt";
                                break;
                            case "wool_orange":
                                o = "wool";
                                break;
                            case "tnt":
                                o = "gunPowder";
                                break;
                            default:
                                o = a
                        }
                        var n = "miniBlocks",
                            r = this.miniBlocks[o][0],
                            l = this.miniBlocks[o][1],
                            c = this.miniBlocks[o][2],
                            u = -10,
                            d = 0;
                        return s = Phaser.Animation.generateFrameNames(r, l, c, "", 3), i = this.actionPlane.create(u + 40 * e, d + this.actionPlane.yOffset + 40 * t, n, ""), i.animations.add("animate", s, 10, !1), i
                    }
                }, {
                    key: "playAnimationWithOffset",
                    value: function(e, t, a, s) {
                        var o = Math.trunc(Math.random() * a) + s;
                        this.playScaledSpeed(e.animations, t).setFrame(o, !0)
                    }
                }, {
                    key: "playRandomSheepAnimation",
                    value: function(e) {
                        var t = Math.trunc(20 * Math.random() + 1);
                        switch (t) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                                e.play("idle");
                                break;
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                                e.play("lookLeft");
                                break;
                            case 11:
                            case 12:
                            case 13:
                            case 14:
                                e.play("lookRight");
                                break;
                            case 15:
                            case 16:
                            case 17:
                                e.play("lookAtCam");
                                break;
                            case 18:
                            case 19:
                                e.play("kick");
                                break;
                            case 20:
                                e.play("idlePause")
                        }
                    }
                }, {
                    key: "playRandomCreeperAnimation",
                    value: function(e) {
                        var t = Math.trunc(this.yToIndex(Math.random()) + 1);
                        switch (t) {
                            case 1:
                            case 2:
                            case 3:
                                e.play("lookLeft");
                                break;
                            case 4:
                            case 5:
                            case 6:
                                e.play("lookRight");
                                break;
                            case 7:
                            case 8:
                                e.play("lookAtCam");
                                break;
                            case 9:
                            case 10:
                                e.play("idle")
                        }
                    }
                }, {
                    key: "createBlock",
                    value: function(e, t, a, s) {
                        var o, i, n, r, l, c, u, d = this,
                            h = null;
                        switch (s) {
                            case "treeAcacia":
                            case "treeBirch":
                            case "treeJungle":
                            case "treeOak":
                            case "treeSpruce":
                                h = this.createBlock(e, t, a, "log" + s.substring(4)), h.fluff = this.createBlock(this.fluffPlane, t, a, "leaves" + s.substring(4)), h.onBlockDestroy = function(e) {
                                    e.fluff.animations.add("despawn", Phaser.Animation.generateFrameNames("Leaves", 0, 6, "", 0), 10, !1).onComplete.add(function() {
                                        d.toDestroy.push(e.fluff), e.fluff.kill()
                                    }), d.playScaledSpeed(e.fluff.animations, "despawn")
                                };
                                break;
                            case "sheep":
                                var p = 10;
                                for (h = e.create(-22 + 40 * t, -12 + 40 * a, "sheep", "Sheep_199"), i = Phaser.Animation.generateFrameNames("Sheep_", 199, 215, "", 0), o = 0; p > o; ++o) i.push("Sheep_215");
                                for (h.animations.add("idle", i, 15, !1).onComplete.add(function() {
                                        h.play("idlePause")
                                    }), i = Phaser.Animation.generateFrameNames("Sheep_", 184, 186, "", 0), o = 0; p > o; ++o) i.push("Sheep_186");
                                for (i.push("Sheep_188"), h.animations.add("lookRight", i, 15, !1).onComplete.add(function() {
                                        h.play("idlePause")
                                    }), i = Phaser.Animation.generateFrameNames("Sheep_", 193, 195, "", 0), o = 0; p > o; ++o) i.push("Sheep_195");
                                for (i.push("Sheep_197"), h.animations.add("lookLeft", i, 15, !1).onComplete.add(function() {
                                        h.play("idlePause")
                                    }), i = Phaser.Animation.generateFrameNames("Sheep_", 217, 233, "", 0), h.animations.add("kick", i, 15, !1).onComplete.add(function() {
                                        h.play("idlePause")
                                    }), i = Phaser.Animation.generateFrameNames("Sheep_", 484, 485, "", 0), o = 0; p > o; ++o) i.push("Sheep_485");
                                for (i.push("Sheep_486"), h.animations.add("lookAtCam", i, 15, !1).onComplete.add(function() {
                                        h.play("idlePause")
                                    }), i = [], o = 0; 15 > o; ++o) i.push("Sheep_215");
                                for (h.animations.add("idlePause", i, 15, !1).onComplete.add(function() {
                                        d.playRandomSheepAnimation(h)
                                    }), i = Phaser.Animation.generateFrameNames("Sheep_", 490, 491, "", 0), u = Math.trunc(3 * Math.random()) + 3, o = 0; u > o; ++o) i.push("Sheep_491");
                                for (this.onAnimationStart(h.animations.add("face", i, 2, !0), function() {
                                        d.audioPlayer.play("sheepBaa")
                                    }), i = Phaser.Animation.generateFrameNames("Sheep_", 439, 455, "", 0), o = 0; 3 > o; ++o) i.push("Sheep_455");
                                h.animations.add("used", i, 15, !0), this.playAnimationWithOffset(h, "idle", 17, 199);
                                break;
                            case "creeper":
                                for (h = e.create(-6 + 40 * t, 0 + e.yOffset + 40 * a, "creeper", "Creeper_053"), i = Phaser.Animation.generateFrameNames("Creeper_", 37, 51, "", 3), h.animations.add("explode", i, 10, !1), i = Phaser.Animation.generateFrameNames("Creeper_", 4, 7, "", 3), o = 0; 15 > o; ++o) i.push("Creeper_007");
                                for (i.push("Creeper_008"), i.push("Creeper_009"), i.push("Creeper_010"), i.push("Creeper_011"), h.animations.add("lookLeft", i, 15, !1).onComplete.add(function() {
                                        h.play("idlePause")
                                    }), i = Phaser.Animation.generateFrameNames("Creeper_", 16, 19, "", 3), o = 0; 15 > o; ++o) i.push("Creeper_019");
                                for (i.push("Creeper_020"), i.push("Creeper_021"), i.push("Creeper_022"), i.push("Creeper_023"), h.animations.add("lookRight", i, 15, !1).onComplete.add(function() {
                                        h.play("idlePause")
                                    }), i = Phaser.Animation.generateFrameNames("Creeper_", 244, 245, "", 3), o = 0; 15 > o; ++o) i.push("Creeper_245");
                                for (i.push("Creeper_246"), h.animations.add("lookAtCam", i, 15, !1).onComplete.add(function() {
                                        h.play("idlePause")
                                    }), i = [], o = 0; 15 > o; ++o) i.push("Creeper_004");
                                for (h.animations.add("idlePause", i, 15, !1).onComplete.add(function() {
                                        d.playRandomCreeperAnimation(h)
                                    }), i = Phaser.Animation.generateFrameNames("Creeper_", 53, 59, "", 3), u = Math.trunc(this.yToIndex(Math.random())) + 20, o = 0; u > o; ++o) i.push("Creeper_004");
                                h.animations.add("idle", i, 15, !1).onComplete.add(function() {
                                    h.play("idlePause")
                                }), this.playAnimationWithOffset(h, "idle", 8, 52);
                                break;
                            case "cropWheat":
                                n = this.blocks[s][0], r = this.blocks[s][1], l = this.blocks[s][2], c = this.blocks[s][3], h = e.create(l + 40 * t, c + e.yOffset + 40 * a, n, r), i = Phaser.Animation.generateFrameNames("Wheat", 0, 2, "", 0), h.animations.add("idle", i, .4, !1), this.playScaledSpeed(h.animations, "idle");
                                break;
                            case "torch":
                                n = this.blocks[s][0], r = this.blocks[s][1], l = this.blocks[s][2], c = this.blocks[s][3], h = e.create(l + 40 * t, c + e.yOffset + 40 * a, n, r), i = Phaser.Animation.generateFrameNames("Torch", 0, 23, "", 0), h.animations.add("idle", i, 15, !0), this.playScaledSpeed(h.animations, "idle");
                                break;
                            case "water":
                                n = this.blocks[s][0], r = this.blocks[s][1], l = this.blocks[s][2], c = this.blocks[s][3], h = e.create(l + 40 * t, c + e.yOffset + 40 * a, n, r), i = Phaser.Animation.generateFrameNames("Water_", 0, 5, "", 0), h.animations.add("idle", i, 5, !0), this.playScaledSpeed(h.animations, "idle");
                                break;
                            case "watering":
                                n = this.blocks[s][0], r = this.blocks[s][1], l = this.blocks[s][2], c = this.blocks[s][3], h = e.create(l + 40 * t, c + e.yOffset + 40 * a, n, r), h.kill(), this.toDestroy.push(h), this.createBlock(this.groundPlane, t, a, "farmlandWet"), this.refreshGroundPlane();
                                break;
                            case "lava":
                                n = this.blocks[s][0], r = this.blocks[s][1], l = this.blocks[s][2], c = this.blocks[s][3], h = e.create(l + 40 * t, c + e.yOffset + 40 * a, n, r), i = Phaser.Animation.generateFrameNames("Lava_", 0, 5, "", 0), h.animations.add("idle", i, 5, !0), this.playScaledSpeed(h.animations, "idle");
                                break;
                            case "lavaPop":
                                for (n = this.blocks[s][0], r = this.blocks[s][1], l = this.blocks[s][2], c = this.blocks[s][3], h = e.create(l + 40 * t, c + e.yOffset + 40 * a, n, r), i = Phaser.Animation.generateFrameNames("LavaPop", 1, 7, "", 2), o = 0; 4 > o; ++o) i.push("LavaPop07");
                                for (i = i.concat(Phaser.Animation.generateFrameNames("LavaPop", 8, 13, "", 2)), o = 0; 3 > o; ++o) i.push("LavaPop13");
                                for (i = i.concat(Phaser.Animation.generateFrameNames("LavaPop", 14, 30, "", 2)), o = 0; 8 > o; ++o) i.push("LavaPop01");
                                h.animations.add("idle", i, 5, !0), this.playAnimationWithOffset(h, "idle", 29, 1);
                                break;
                            case "fire":
                                n = this.blocks[s][0], r = this.blocks[s][1], l = this.blocks[s][2], c = this.blocks[s][3], h = e.create(l + 40 * t, c + e.yOffset + 40 * a, n, r), i = Phaser.Animation.generateFrameNames("Fire", 0, 14, "", 2), h.animations.add("idle", i, 5, !0), this.playScaledSpeed(h.animations, "idle");
                                break;
                            case "bubbles":
                                n = this.blocks[s][0], r = this.blocks[s][1], l = this.blocks[s][2], c = this.blocks[s][3], h = e.create(l + 40 * t, c + e.yOffset + 40 * a, n, r), i = Phaser.Animation.generateFrameNames("Bubbles", 0, 14, "", 2), h.animations.add("idle", i, 5, !0), this.playScaledSpeed(h.animations, "idle");
                                break;
                            case "explosion":
                                n = this.blocks[s][0], r = this.blocks[s][1], l = this.blocks[s][2], c = this.blocks[s][3], h = e.create(l + 40 * t, c + e.yOffset + 40 * a, n, r), i = Phaser.Animation.generateFrameNames("Explosion", 0, 16, "", 1), h.animations.add("idle", i, 15, !1).onComplete.add(function() {
                                    d.toDestroy.push(h), h.kill()
                                }), this.playScaledSpeed(h.animations, "idle");
                                break;
                            case "door":
                                n = this.blocks[s][0], r = this.blocks[s][1], l = this.blocks[s][2], c = this.blocks[s][3], h = e.create(l + 40 * t, c + e.yOffset + 40 * a, n, r), i = [];
                                for (var m = Phaser.Animation.generateFrameNames("Door", 0, 3, "", 1), g = 0; 5 > g; ++g) i.push("Door0");
                                i = i.concat(m);
                                var f = h.animations.add("open", i, 5, !1);
                                f.enableUpdate = !0, f.onUpdate.add(function() {
                                    1 === f.frame && d.audioPlayer.play("doorOpen")
                                }), this.playScaledSpeed(h.animations, "open");
                                break;
                            case "tnt":
                                n = this.blocks[s][0], r = this.blocks[s][1], l = this.blocks[s][2], c = this.blocks[s][3], h = e.create(l + 40 * t, c + e.yOffset + 40 * a, n, r), i = Phaser.Animation.generateFrameNames("TNTexplosion", 0, 8, "", 0), h.animations.add("explode", i, 7, !1).onComplete.add(function() {
                                    d.playExplosionCloudAnimation([t, a]), h.kill(), d.toDestroy.push(h), d.actionPlaneBlocks[d.coordinatesToIndex([t, a])] = null
                                });
                                break;
                            default:
                                n = this.blocks[s][0], r = this.blocks[s][1], l = this.blocks[s][2], c = this.blocks[s][3], h = e.create(l + 40 * t, c + e.yOffset + 40 * a, n, r)
                        }
                        return h
                    }
                }, {
                    key: "onAnimationEnd",
                    value: function(e, t) {
                        var a = e.onComplete.add(function() {
                            a.detach(), t()
                        })
                    }
                }, {
                    key: "onAnimationStart",
                    value: function(e, t) {
                        var a = e.onStart.add(function() {
                            a.detach(), t()
                        })
                    }
                }, {
                    key: "onAnimationLoopOnce",
                    value: function(e, t) {
                        var a = e.onLoop.add(function() {
                            a.detach(), t()
                        })
                    }
                }, {
                    key: "addResettableTween",
                    value: function(e) {
                        var t = this.game.add.tween(e);
                        return this.resettableTweens.push(t), t
                    }
                }]), e
            }();
        a["default"] = c, t.exports = a["default"]
    }, {
        "./FacingDirection.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/LevelMVC/FacingDirection.js"
    }],
    "/home/ubuntu/static-hoc/apps/build/js/craft/game/LevelMVC/LevelModel.js": [function(e, t, a) {
        "use strict";

        function s(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var s = t[a];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }
                return function(t, a, s) {
                    return a && e(t.prototype, a), s && e(t, s), t
                }
            }(),
            n = e("./LevelBlock.js"),
            r = s(n),
            l = e("./FacingDirection.js"),
            c = s(l),
            u = function() {
                function e(t) {
                    o(this, e), this.planeWidth = t.gridDimensions ? t.gridDimensions[0] : 10, this.planeHeight = t.gridDimensions ? t.gridDimensions[1] : 10, this.player = {}, this.railMap = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "railsUnpoweredVertical", "", "", "", "", "", "", "", "", "", "railsUnpoweredVertical", "", "", "", "", "", "", "", "", "", "railsUnpoweredVertical", "", "", "", "", "", "", "", "", "", "railsUnpoweredVertical", "", "", "", "", "", "", "", "", "", "railsUnpoweredVertical", "", "", "", "", "", "", "", "", "", "railsBottomLeft", "railsHorizontal", "railsHorizontal", "railsHorizontal", "railsHorizontal", "railsHorizontal", "railsHorizontal", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], this.initialLevelData = Object.create(t), this.reset(), this.initialPlayerState = Object.create(this.player)
                }
                return i(e, [{
                    key: "planeArea",
                    value: function() {
                        return this.planeWidth * this.planeHeight
                    }
                }, {
                    key: "inBounds",
                    value: function(e, t) {
                        return e >= 0 && e < this.planeWidth && t >= 0 && t < this.planeHeight
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.groundPlane = this.constructPlane(this.initialLevelData.groundPlane, !1), this.groundDecorationPlane = this.constructPlane(this.initialLevelData.groundDecorationPlane, !1), this.shadingPlane = [], this.actionPlane = this.constructPlane(this.initialLevelData.actionPlane, !0), this.fluffPlane = this.constructPlane(this.initialLevelData.fluffPlane, !1), this.fowPlane = [], this.isDaytime = void 0 === this.initialLevelData.isDaytime || this.initialLevelData.isDaytime;
                        var e = Object.create(this.initialLevelData),
                            t = e.playerStartPosition[0],
                            a = e.playerStartPosition[1];
                        this.player.name = this.initialLevelData.playerName || "Steve", this.player.position = e.playerStartPosition, this.player.isOnBlock = !this.actionPlane[this.yToIndex(a) + t].getIsEmptyOrEntity(), this.player.facing = e.playerStartDirection, this.player.inventory = {}, this.computeShadingPlane(), this.computeFowPlane()
                    }
                }, {
                    key: "yToIndex",
                    value: function(e) {
                        return e * this.planeWidth
                    }
                }, {
                    key: "constructPlane",
                    value: function(e, t) {
                        var a, s, o = [];
                        for (a = 0; a < e.length; ++a) s = new r["default"](e[a]), s.isWalkable = s.isWalkable || !t, o.push(s);
                        return o
                    }
                }, {
                    key: "isSolved",
                    value: function() {
                        return this.initialLevelData.verificationFunction(this)
                    }
                }, {
                    key: "getHouseBottomRight",
                    value: function() {
                        return this.initialLevelData.houseBottomRight
                    }
                }, {
                    key: "isPlayerNextTo",
                    value: function(e) {
                        var t;
                        return t = [this.player.position[0], this.player.position[1] - 1], this.isBlockOfType(t, e) ? !0 : (t = [this.player.position[0], this.player.position[1] + 1], this.isBlockOfType(t, e) ? !0 : (t = [this.player.position[0] + 1, this.player.position[1]], this.isBlockOfType(t, e) ? !0 : (t = [this.player.position[0] - 1, this.player.position[1]], this.isBlockOfType(t, e) ? !0 : !1)))
                    }
                }, {
                    key: "getInventoryAmount",
                    value: function(e) {
                        return this.player.inventory[e] || 0
                    }
                }, {
                    key: "getInventoryTypes",
                    value: function() {
                        return Object.keys(this.player.inventory)
                    }
                }, {
                    key: "countOfTypeOnMap",
                    value: function(e) {
                        var t, a = 0;
                        for (t = 0; t < this.planeArea(); ++t) e == this.actionPlane[t].blockType && ++a;
                        return a
                    }
                }, {
                    key: "isPlayerAt",
                    value: function(e) {
                        return this.player.position[0] === e[0] && this.player.position[1] === e[1]
                    }
                }, {
                    key: "solutionMapMatchesResultMap",
                    value: function(e) {
                        for (var t = 0; t < this.planeArea(); t++) {
                            var a = e[t];
                            if ("" !== a)
                                if ("empty" === a) {
                                    if (!this.actionPlane[t].isEmpty) return !1
                                } else if ("any" === a) {
                                if (this.actionPlane[t].isEmpty) return !1
                            } else if (this.actionPlane[t].blockType !== a) return !1
                        }
                        return !0
                    }
                }, {
                    key: "getTnt",
                    value: function() {
                        for (var e = [], t = 0; t < this.planeWidth; ++t)
                            for (var a = 0; a < this.planeHeight; ++a) {
                                var s = this.coordinatesToIndex([t, a]),
                                    o = this.actionPlane[s];
                                "tnt" === o.blockType && e.push([t, a])
                            }
                        return e
                    }
                }, {
                    key: "getUnpoweredRails",
                    value: function() {
                        for (var e = [], t = 0; t < this.planeWidth; ++t)
                            for (var a = 0; a < this.planeHeight; ++a) {
                                var s = this.coordinatesToIndex([t, a]),
                                    o = this.actionPlane[s];
                                "railsUn" == o.blockType.substring(0, 7) && e.push([t, a], "railsPowered" + this.actionPlane[s].blockType.substring(14))
                            }
                        return e
                    }
                }, {
                    key: "getMoveForwardPosition",
                    value: function() {
                        var e = this.player.position[0],
                            t = this.player.position[1];
                        switch (this.player.facing) {
                            case c["default"].Up:
                                --t;
                                break;
                            case c["default"].Down:
                                ++t;
                                break;
                            case c["default"].Left:
                                --e;
                                break;
                            case c["default"].Right:
                                ++e
                        }
                        return [e, t]
                    }
                }, {
                    key: "isForwardBlockOfType",
                    value: function(e) {
                        var t = this.getMoveForwardPosition(),
                            a = this.isBlockOfTypeOnPlane(t, "empty", this.actionPlane);
                        return "" === e && a ? !0 : a ? this.isBlockOfTypeOnPlane(t, e, this.groundPlane) : this.isBlockOfTypeOnPlane(t, e, this.actionPlane)
                    }
                }, {
                    key: "isBlockOfType",
                    value: function(e, t) {
                        return this.isBlockOfTypeOnPlane(e, t, this.actionPlane)
                    }
                }, {
                    key: "isBlockOfTypeOnPlane",
                    value: function(e, t, a) {
                        var s = !1,
                            o = this.yToIndex(e[1]) + e[0];
                        return o >= 0 && o < this.planeArea() && (s = "empty" == t ? a[o].isEmpty : "tree" == t ? a[o].getIsTree() : t == a[o].blockType), s
                    }
                }, {
                    key: "isPlayerStandingInWater",
                    value: function() {
                        var e = this.yToIndex(this.player.position[1]) + this.player.position[0];
                        return "water" === this.groundPlane[e].blockType
                    }
                }, {
                    key: "isPlayerStandingInLava",
                    value: function() {
                        var e = this.yToIndex(this.player.position[1]) + this.player.position[0];
                        return "lava" === this.groundPlane[e].blockType
                    }
                }, {
                    key: "coordinatesToIndex",
                    value: function(e) {
                        return this.yToIndex(e[1]) + e[0]
                    }
                }, {
                    key: "checkPositionForTypeAndPush",
                    value: function(e, t, a) {
                        return !e && "" !== this.actionPlane[this.coordinatesToIndex(t)].blockType || this.isBlockOfType(t, e) ? (a.push([!0, t]), !0) : (a.push([!1, null]), !1)
                    }
                }, {
                    key: "houseGroundToFloorHelper",
                    value: function(e, t, a) {
                        var s, o, i, n, r, l, c = 0,
                            u = a,
                            d = this.yToIndex(e[2]) + e[1];
                        44 === d && (d = 44), i = [0, e[1], e[2] + 1], i[0] = this.yToIndex(i[2]) + i[1], n = [0, e[1], e[2] - 1], n[0] = this.yToIndex(n[2]) + n[1], r = [0, e[1] + 1, e[2]], r[0] = this.yToIndex(r[2]) + r[1], l = [0, e[1] - 1, e[2]], r[0] = this.yToIndex(r[2]) + r[1], s = this.actionPlane[d], o = this.groundPlane[d];
                        for (var h = 0; h < u.length; ++h)
                            if (u[h][0] === d) {
                                c = -1;
                                break
                            }
                        return "" !== s.blockType ? {} : u.length > 0 && -1 === c ? {} : (u.push(e), u.concat(this.houseGroundToFloorHelper(i, t, u)), u.concat(this.houseGroundToFloorHelper(n, t, u)), u.concat(this.houseGroundToFloorHelper(r, t, u)), u.concat(this.houseGroundToFloorHelper(l, t, u)), u)
                    }
                }, {
                    key: "houseGroundToFloorBlocks",
                    value: function(e) {
                        var t = "wool_orange",
                            a = [0, e[0], e[1]];
                        return this.houseGroundToFloorHelper(a, t, [])
                    }
                }, {
                    key: "getAllBorderingPositionNotOfType",
                    value: function(e, t) {
                        for (var a = this.getAllBorderingPosition(e, null), s = 1; s < a.length; ++s) a[s][0] && this.actionPlane[this.coordinatesToIndex(a[s][1])].blockType == t && (a[s][0] = !1);
                        return a
                    }
                }, {
                    key: "getAllBorderingPosition",
                    value: function(e, t) {
                        var a, s = [!1];
                        return a = [e[0] + 1, e[1] + 1], this.checkPositionForTypeAndPush(t, a, s) && (s[0] = !0), a = [e[0] - 1, e[1] + 1], this.checkPositionForTypeAndPush(t, a, s) && (s[0] = !0), a = [e[0] + 1, e[1] - 1], this.checkPositionForTypeAndPush(t, a, s) && (s[0] = !0), a = [e[0] - 1, e[1] - 1], this.checkPositionForTypeAndPush(t, a, s) && (s[0] = !0), a = [e[0], e[1] + 1], this.checkPositionForTypeAndPush(t, a, s) && (s[0] = !0), a = [e[0], e[1] - 1], this.checkPositionForTypeAndPush(t, a, s) && (s[0] = !0), a = [e[0] + 1, e[1]], this.checkPositionForTypeAndPush(t, a, s) && (s[0] = !0), a = [e[0] - 1, e[1]], this.checkPositionForTypeAndPush(t, a, s) && (s[0] = !0), s
                    }
                }, {
                    key: "getAllBorderingPlayer",
                    value: function(e) {
                        return this.getAllBorderingPosition(this.player.position, e)
                    }
                }, {
                    key: "isPlayerStandingNearCreeper",
                    value: function() {
                        return this.getAllBorderingPlayer("creeper")
                    }
                }, {
                    key: "getMinecartTrack",
                    value: function() {
                        var e = [];
                        return e.push(["down", [3, 2], c["default"].Down, 300]), e.push(["down", [3, 3], c["default"].Down, 300]), e.push(["down", [3, 4], c["default"].Down, 300]), e.push(["down", [3, 5], c["default"].Down, 300]), e.push(["down", [3, 6], c["default"].Down, 300]), e.push(["down", [3, 7], c["default"].Down, 300]), e.push(["turn_left", [3, 7], c["default"].Right, 400]), e.push(["right", [4, 7], c["default"].Right, 400]), e.push(["right", [5, 7], c["default"].Right, 400]), e.push(["right", [6, 7], c["default"].Right, 400]), e.push(["right", [7, 7], c["default"].Right, 400]), e.push(["right", [8, 7], c["default"].Right, 400]), e.push(["right", [9, 7], c["default"].Right, 400]), e.push(["right", [10, 7], c["default"].Right, 400]), e.push(["right", [11, 7], c["default"].Right, 400]), e
                    }
                }, {
                    key: "canMoveForward",
                    value: function() {
                        var e = !1,
                            t = this.getMoveForwardPosition(),
                            a = this.yToIndex(t[1]) + t[0],
                            s = t[0],
                            o = t[1];
                        return this.inBounds(s, o) && (e = this.actionPlane[a].isWalkable || this.player.isOnBlock && !this.actionPlane[a].isEmpty), e
                    }
                }, {
                    key: "canPlaceBlock",
                    value: function() {
                        return !0
                    }
                }, {
                    key: "canPlaceBlockForward",
                    value: function() {
                        return this.player.isOnBlock ? !1 : null !== this.getPlaneToPlaceOn(this.getMoveForwardPosition())
                    }
                }, {
                    key: "getPlaneToPlaceOn",
                    value: function(e) {
                        var t = this.yToIndex(e[1]) + e[0],
                            a = e[0],
                            s = e[1];
                        if (this.inBounds(a, s)) {
                            var o = this.actionPlane[t];
                            if (o.isPlacable) {
                                var i = this.groundPlane[t];
                                return i.isPlacable ? this.groundPlane : this.actionPlane
                            }
                        }
                        return null
                    }
                }, {
                    key: "canDestroyBlockForward",
                    value: function() {
                        var e = !1;
                        if (!this.player.isOnBlock) {
                            var t = this.getMoveForwardPosition(),
                                a = this.yToIndex(t[1]) + t[0],
                                s = t[0],
                                o = t[1];
                            if (this.inBounds(s, o)) {
                                var i = this.actionPlane[a];
                                e = !i.isEmpty && (i.isDestroyable || i.isUsable)
                            }
                        }
                        return e
                    }
                }, {
                    key: "moveForward",
                    value: function() {
                        var e = this.getMoveForwardPosition();
                        this.moveTo(e)
                    }
                }, {
                    key: "moveTo",
                    value: function(e) {
                        var t = this.yToIndex(e[1]) + e[0];
                        this.player.position = e, this.actionPlane[t].isEmpty && (this.player.isOnBlock = !1)
                    }
                }, {
                    key: "turnLeft",
                    value: function() {
                        switch (this.player.facing) {
                            case c["default"].Up:
                                this.player.facing = c["default"].Left;
                                break;
                            case c["default"].Left:
                                this.player.facing = c["default"].Down;
                                break;
                            case c["default"].Down:
                                this.player.facing = c["default"].Right;
                                break;
                            case c["default"].Right:
                                this.player.facing = c["default"].Up
                        }
                    }
                }, {
                    key: "turnRight",
                    value: function() {
                        switch (this.player.facing) {
                            case c["default"].Up:
                                this.player.facing = c["default"].Right;
                                break;
                            case c["default"].Right:
                                this.player.facing = c["default"].Down;
                                break;
                            case c["default"].Down:
                                this.player.facing = c["default"].Left;
                                break;
                            case c["default"].Left:
                                this.player.facing = c["default"].Up
                        }
                    }
                }, {
                    key: "placeBlock",
                    value: function(e) {
                        var t = this.player.position,
                            a = this.yToIndex(t[1]) + t[0],
                            s = !1;
                        switch (e) {
                            case "cropWheat":
                                s = "farmlandWet" === this.groundPlane[a].blockType;
                                break;
                            default:
                                s = !0
                        }
                        if (s === !0) {
                            var o = new r["default"](e);
                            this.actionPlane[a] = o, this.player.isOnBlock = !o.isWalkable
                        }
                        return s
                    }
                }, {
                    key: "placeBlockForward",
                    value: function(e, t) {
                        var a = this.getMoveForwardPosition(),
                            s = this.yToIndex(a[1]) + a[0];
                        "watering" === e && (e = "farmlandWet", t = this.groundPlane), t[s] = new r["default"](e)
                    }
                }, {
                    key: "destroyBlock",
                    value: function(e) {
                        var t = null,
                            a = e,
                            s = this.yToIndex(a[1]) + a[0],
                            o = a[0],
                            i = a[1];
                        return this.inBounds(o, i) && (t = this.actionPlane[s], null !== t && (t.position = [o, i], t.isDestroyable && (this.actionPlane[s] = new r["default"]("")))), t
                    }
                }, {
                    key: "destroyBlockForward",
                    value: function() {
                        var e = null,
                            t = this.getMoveForwardPosition(),
                            a = this.yToIndex(t[1]) + t[0],
                            s = t[0],
                            o = t[1];
                        if (this.inBounds(s, o) && (e = this.actionPlane[a], null !== e)) {
                            e.position = [s, o];
                            var i = this.getInventoryType(e.blockType);
                            this.player.inventory[i] = (this.player.inventory[i] || 0) + 1, e.isDestroyable && (this.actionPlane[a] = new r["default"](""))
                        }
                        return e
                    }
                }, {
                    key: "getInventoryType",
                    value: function(e) {
                        switch (e) {
                            case "sheep":
                                return "wool";
                            case "stone":
                                return "cobblestone";
                            case "treeAcacia":
                            case "treeBirch":
                            case "treeJungle":
                            case "treeOak":
                            case "treeSpruce":
                                return "planks" + e.substring(4);
                            default:
                                return e
                        }
                    }
                }, {
                    key: "solveFOWTypeForMap",
                    value: function() {
                        var e, t;
                        e = this.getAllEmissives(), t = this.findBlocksAffectedByEmissives(e);
                        for (var a in t) t.hasOwnProperty(a) && this.solveFOWTypeFor(t[a], e)
                    }
                }, {
                    key: "solveFOWTypeFor",
                    value: function(e, t) {
                        var a, s, o, i = !1,
                            n = !1,
                            r = !1,
                            l = !1,
                            c = !1,
                            u = !1,
                            d = !1,
                            h = !1,
                            p = 0,
                            m = this.coordinatesToIndex(e);
                        a = this.findEmissivesThatTouch(e, t);
                        for (var g in a) {
                            var f = a[g];
                            o = e[1], s = e[0], p = Math.atan2(f[1] - e[1], f[0] - e[0]), p = -p, 0 > p && (p += 2 * Math.PI), p *= 360 / (2 * Math.PI), !u && p > 32.5 && 57.5 >= p && (l = !0, this.pushIfHigherPrecedence(m, {
                                x: s,
                                y: o,
                                type: "FogOfWar_InCorner_TopRight",
                                precedence: 0
                            })), !r && p > 122.5 && 147.5 >= p && (i = !0, this.pushIfHigherPrecedence(m, {
                                x: s,
                                y: o,
                                type: "FogOfWar_InCorner_TopLeft",
                                precedence: 0
                            })), !r && p > 212.5 && 237.5 >= p && (n = !0, this.pushIfHigherPrecedence(m, {
                                x: s,
                                y: o,
                                type: "FogOfWar_InCorner_BottomLeft",
                                precedence: 0
                            })), !u && p > 302.5 && 317.5 >= p && (c = !0, this.pushIfHigherPrecedence(m, {
                                x: s,
                                y: o,
                                type: "FogOfWar_InCorner_BottomRight",
                                precedence: 0
                            })), (p >= 327.5 || 32.5 >= p) && (u = !0, this.pushIfHigherPrecedence(m, {
                                x: s,
                                y: o,
                                type: "FogOfWar_Right",
                                precedence: 1
                            })), p > 237.5 && 302.5 >= p && (h = !0, this.pushIfHigherPrecedence(m, {
                                x: s,
                                y: o,
                                type: "FogOfWar_Bottom",
                                precedence: 1
                            })), p > 147.5 && 212.5 >= p && (r = !0, this.pushIfHigherPrecedence(m, {
                                x: s,
                                y: o,
                                type: "FogOfWar_Left",
                                precedence: 1
                            })), p > 57.5 && 122.5 >= p && (d = !0, this.pushIfHigherPrecedence(m, {
                                x: s,
                                y: o,
                                type: "FogOfWar_Top",
                                precedence: 1
                            }))
                        }
                        i && n && this.pushIfHigherPrecedence(m, {
                            x: s,
                            y: o,
                            type: "FogOfWar_Left",
                            precedence: 1
                        }), l && c && this.pushIfHigherPrecedence(m, {
                            x: s,
                            y: o,
                            type: "FogOfWar_Right",
                            precedence: 1
                        }), i && l && this.pushIfHigherPrecedence(m, {
                            x: s,
                            y: o,
                            type: "FogOfWar_Top",
                            precedence: 1
                        }), c && n && this.pushIfHigherPrecedence(m, {
                            x: s,
                            y: o,
                            type: "FogOfWar_Bottom",
                            precedence: 1
                        }), c && i || n && l || r && u || d && h || u && h && i || h && l && i || d && c && n || r && l && c || r && h && l ? this.fowPlane[m] = "" : h && r || h && i || r && c ? this.pushIfHigherPrecedence(m, {
                            x: s,
                            y: o,
                            type: "FogOfWar_Bottom_Left",
                            precedence: 2
                        }) : h && u || h && l || u && n ? this.pushIfHigherPrecedence(m, {
                            x: s,
                            y: o,
                            type: "FogOfWar_Bottom_Right",
                            precedence: 2
                        }) : d && u || d && c || u && i ? this.pushIfHigherPrecedence(m, {
                            x: s,
                            y: o,
                            type: "FogOfWar_Top_Right",
                            precedence: 2
                        }) : (d && r || d && n || r && l) && this.pushIfHigherPrecedence(m, {
                            x: s,
                            y: o,
                            type: "FogOfWar_Top_Left",
                            precedence: 2
                        })
                    }
                }, {
                    key: "pushIfHigherPrecedence",
                    value: function(e, t) {
                        if ("" === t) return void(this.fowPlane[e] = "");
                        var a = this.fowPlane[e];
                        a && a.precedence > t.precedence || (this.fowPlane[e] = t)
                    }
                }, {
                    key: "getAllEmissives",
                    value: function() {
                        for (var e = [], t = 0; t < this.planeHeight; ++t)
                            for (var a = 0; a < this.planeWidth; ++a) {
                                var s = this.coordinatesToIndex([a, t]);
                                (!this.actionPlane[s].isEmpty && this.actionPlane[s].isEmissive || this.groundPlane[s].isEmissive && this.actionPlane[s].isEmpty) && e.push([a, t])
                            }
                        return e
                    }
                }, {
                    key: "findBlocksAffectedByEmissives",
                    value: function(e) {
                        var t = {};
                        for (var a in e)
                            for (var s = e[a], o = s[1], i = s[0], n = s[1] - 2; n <= s[1] + 2; ++n)
                                for (var r = s[0] - 2; r <= s[0] + 2; ++r) this.inBounds(r, n) && (n >= o - 1 && o + 1 >= n && r >= i - 1 && i + 1 >= r || (t[n.toString() + r.toString()] = [r, n]));
                        return t
                    }
                }, {
                    key: "findEmissivesThatTouch",
                    value: function(e, t) {
                        for (var a = [], s = e[1], o = e[0], i = s - 2; s + 2 >= i; ++i)
                            for (var n = o - 2; o + 2 >= n; ++n)
                                if (this.inBounds(n, i) && !(i >= s - 1 && s + 1 >= i && n >= o - 1 && o + 1 >= n))
                                    for (var r in t) t[r][0] === n && t[r][1] === i && a.push(t[r]);
                        return a
                    }
                }, {
                    key: "computeFowPlane",
                    value: function() {
                        var e, t;
                        if (this.fowPlane = [], this.isDaytime)
                            for (t = 0; t < this.planeHeight; ++t)
                                for (e = 0; e < this.planeWidth; ++e);
                        else {
                            for (t = 0; t < this.planeHeight; ++t)
                                for (e = 0; e < this.planeWidth; ++e) this.fowPlane.push({
                                    x: e,
                                    y: t,
                                    type: "FogOfWar_Center"
                                });
                            for (this.solveFOWTypeForMap(), t = 0; t < this.planeHeight; ++t)
                                for (e = 0; e < this.planeWidth; ++e) {
                                    var a = this.yToIndex(t) + e;
                                    (this.groundPlane[a].isEmissive && this.actionPlane[a].isEmpty || !this.actionPlane[a].isEmpty && this.actionPlane[a].isEmissive) && this.clearFowAround(e, t)
                                }
                        }
                    }
                }, {
                    key: "clearFowAround",
                    value: function(e, t) {
                        var a, s;
                        for (s = -1; 1 >= s; ++s)
                            for (a = -1; 1 >= a; ++a) this.clearFowAt(e + a, t + s)
                    }
                }, {
                    key: "clearFowAt",
                    value: function(e, t) {
                        if (e >= 0 && e < this.planeWidth && t >= 0 && t < this.planeHeight) {
                            var a = this.yToIndex(t) + e;
                            this.fowPlane[a] = ""
                        }
                    }
                }, {
                    key: "computeShadingPlane",
                    value: function() {
                        var e, t, a, s, o;
                        for (this.shadingPlane = [], a = 0; a < this.planeArea(); ++a) e = a % this.planeWidth, t = Math.floor(a / this.planeWidth), s = !1, o = !1, (this.actionPlane[a].isEmpty || this.actionPlane[a].isTransparent) && (0 === t && this.shadingPlane.push({
                            x: e,
                            y: t,
                            type: "AOeffect_Bottom"
                        }), t === this.planeHeight - 1 && this.shadingPlane.push({
                            x: e,
                            y: t,
                            type: "AOeffect_Top"
                        }), 0 === e && this.shadingPlane.push({
                            x: e,
                            y: t,
                            type: "AOeffect_Right"
                        }), e === this.planeWidth - 1 && this.shadingPlane.push({
                            x: e,
                            y: t,
                            type: "AOeffect_Left"
                        }), e < this.planeWidth - 1 && !this.actionPlane[this.yToIndex(t) + e + 1].getIsEmptyOrEntity() && (this.shadingPlane.push({
                            x: e,
                            y: t,
                            type: "AOeffect_Left"
                        }), s = !0), e > 0 && !this.actionPlane[this.yToIndex(t) + e - 1].getIsEmptyOrEntity() && (this.shadingPlane.push({
                            x: e,
                            y: t,
                            type: "AOeffect_Right"
                        }), this.shadingPlane.push({
                            x: e,
                            y: t,
                            type: "Shadow_Parts_Fade_base.png"
                        }), t > 0 && e > 0 && this.actionPlane[this.yToIndex(t - 1) + e - 1].getIsEmptyOrEntity() && this.shadingPlane.push({
                            x: e,
                            y: t,
                            type: "Shadow_Parts_Fade_top.png"
                        }), o = !0), t > 0 && !this.actionPlane[this.yToIndex(t - 1) + e].getIsEmptyOrEntity() ? this.shadingPlane.push({
                            x: e,
                            y: t,
                            type: "AOeffect_Bottom"
                        }) : t > 0 && (e < this.planeWidth - 1 && !this.actionPlane[this.yToIndex(t - 1) + e + 1].getIsEmptyOrEntity() && this.actionPlane[this.yToIndex(t) + e + 1].getIsEmptyOrEntity() && this.shadingPlane.push({
                            x: e,
                            y: t,
                            type: "AOeffect_BottomLeft"
                        }), !o && e > 0 && !this.actionPlane[this.yToIndex(t - 1) + e - 1].getIsEmptyOrEntity() && this.shadingPlane.push({
                            x: e,
                            y: t,
                            type: "AOeffect_BottomRight"
                        })), t < this.planeHeight - 1 && (e < this.planeWidth - 1 && !this.actionPlane[this.yToIndex(t + 1) + e + 1].getIsEmptyOrEntity() && this.actionPlane[this.yToIndex(t) + e + 1].getIsEmptyOrEntity() && this.shadingPlane.push({
                            x: e,
                            y: t,
                            type: "AOeffect_TopLeft"
                        }), !o && e > 0 && !this.actionPlane[this.yToIndex(t + 1) + e - 1].getIsEmptyOrEntity() && this.shadingPlane.push({
                            x: e,
                            y: t,
                            type: "AOeffect_TopRight"
                        })))
                    }
                }]), e
            }();
        a["default"] = u, t.exports = a["default"]
    }, {
        "./FacingDirection.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/LevelMVC/FacingDirection.js",
        "./LevelBlock.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/LevelMVC/LevelBlock.js"
    }],
    "/home/ubuntu/static-hoc/apps/build/js/craft/game/LevelMVC/LevelBlock.js": [function(e, t, a) {
        "use strict";

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var s = t[a];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }
                return function(t, a, s) {
                    return a && e(t.prototype, a), s && e(t, s), t
                }
            }(),
            i = function() {
                function e(t) {
                    s(this, e), this.blockType = t, this.isEntity = !1, this.isWalkable = !1, this.isDeadly = !1, this.isPlacable = !1, this.isDestroyable = !0, this.isUsable = !0, this.isEmpty = !1, this.isEmissive = !1, this.isTransparent = !1, "" === t && (this.isWalkable = !0, this.isDestroyable = !1, this.isEmpty = !0, this.isPlacable = !0, this.isUsable = !1), t.match("torch") && (this.isWalkable = !0, this.isPlacable = !0), "rails" == t.substring(0, 5) && (this.isEntity = !0, this.isWalkable = !0, this.isUsable = !0, this.isDestroyable = !1, this.isTransparent = !0), "sheep" == t && (this.isEntity = !0, this.isDestroyable = !1, this.isUsable = !0), "creeper" == t && (this.isEntity = !0), "glass" == t && (this.isDestroyable = !1), "bedrock" == t && (this.isDestroyable = !1), "lava" == t && (this.isEmissive = !0, this.isWalkable = !0, this.isDeadly = !0, this.isPlacable = !0), "water" == t && (this.isPlacable = !0), "torch" == t && (this.isEmissive = !0, this.isEntity = !0, this.isWalkable = !0, this.isUsable = !0, this.isDestroyable = !1, this.isTransparent = !0), "cropWheat" == t && (this.isEmissive = !1, this.isEntity = !0, this.isWalkable = !0, this.isUsable = !0, this.isDestroyable = !1, this.isTransparent = !0), "tnt" == t && (this.isUsable = !0, this.isDestroyable = !0), "door" == t && (this.isEntity = !0, this.isWalkable = !0, this.isUsable = !0, this.isDestroyable = !1, this.isTransparent = !0)
                }
                return o(e, [{
                    key: "getIsTree",
                    value: function() {
                        return !!this.blockType.match(/^tree/)
                    }
                }, {
                    key: "getIsEmptyOrEntity",
                    value: function() {
                        return this.isEmpty || this.isEntity
                    }
                }]), e
            }();
        a["default"] = i, t.exports = a["default"]
    }, {}],
    "/home/ubuntu/static-hoc/apps/build/js/craft/game/LevelMVC/FacingDirection.js": [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a["default"] = Object.freeze({
            Up: 0,
            Right: 1,
            Down: 2,
            Left: 3
        }), t.exports = a["default"]
    }, {}],
    "/home/ubuntu/static-hoc/apps/build/js/craft/game/LevelMVC/AssetLoader.js": [function(e, t, a) {
        "use strict";

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var s = t[a];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }
                return function(t, a, s) {
                    return a && e(t.prototype, a), s && e(t, s), t
                }
            }(),
            i = function() {
                function e(t) {
                    s(this, e), this.controller = t, this.audioPlayer = t.audioPlayer, this.game = t.game, this.assetRoot = t.assetRoot, this.assets = {
                        entityShadow: {
                            type: "image",
                            path: this.assetRoot + "images/Character_Shadow.png"
                        },
                        selectionIndicator: {
                            type: "image",
                            path: this.assetRoot + "images/Selection_Indicator.png"
                        },
                        shadeLayer: {
                            type: "image",
                            path: this.assetRoot + "images/Shade_Layer.png"
                        },
                        tallGrass: {
                            type: "image",
                            path: this.assetRoot + "images/TallGrass.png"
                        },
                        finishOverlay: {
                            type: "image",
                            path: this.assetRoot + "images/WhiteRect.png"
                        },
                        bed: {
                            type: "image",
                            path: this.assetRoot + "images/Bed.png"
                        },
                        playerSteve: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/Steve1013.png",
                            jsonPath: this.assetRoot + "images/Steve1013.json"
                        },
                        playerAlex: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/Alex1013.png",
                            jsonPath: this.assetRoot + "images/Alex1013.json"
                        },
                        AO: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/AO.png",
                            jsonPath: this.assetRoot + "images/AO.json"
                        },
                        blockShadows: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/Block_Shadows.png",
                            jsonPath: this.assetRoot + "images/Block_Shadows.json"
                        },
                        undergroundFow: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/UndergroundFoW.png",
                            jsonPath: this.assetRoot + "images/UndergroundFoW.json"
                        },
                        blocks: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/Blocks.png",
                            jsonPath: this.assetRoot + "images/Blocks.json"
                        },
                        leavesAcacia: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/Leaves_Acacia_Decay.png",
                            jsonPath: this.assetRoot + "images/Leaves_Acacia_Decay.json"
                        },
                        leavesBirch: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/Leaves_Birch_Decay.png",
                            jsonPath: this.assetRoot + "images/Leaves_Birch_Decay.json"
                        },
                        leavesJungle: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/Leaves_Jungle_Decay.png",
                            jsonPath: this.assetRoot + "images/Leaves_Jungle_Decay.json"
                        },
                        leavesOak: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/Leaves_Oak_Decay.png",
                            jsonPath: this.assetRoot + "images/Leaves_Oak_Decay.json"
                        },
                        leavesSpruce: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/Leaves_Spruce_Decay.png",
                            jsonPath: this.assetRoot + "images/Leaves_Spruce_Decay.json"
                        },
                        sheep: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/Sheep.png",
                            jsonPath: this.assetRoot + "images/Sheep.json"
                        },
                        creeper: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/Creeper.png",
                            jsonPath: this.assetRoot + "images/Creeper.json"
                        },
                        crops: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/Crops.png",
                            jsonPath: this.assetRoot + "images/Crops.json"
                        },
                        torch: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/Torch.png",
                            jsonPath: this.assetRoot + "images/Torch.json"
                        },
                        destroyOverlay: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/Destroy_Overlay.png",
                            jsonPath: this.assetRoot + "images/Destroy_Overlay.json"
                        },
                        blockExplode: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/BlockExplode.png",
                            jsonPath: this.assetRoot + "images/BlockExplode.json"
                        },
                        miningParticles: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/MiningParticles.png",
                            jsonPath: this.assetRoot + "images/MiningParticles.json"
                        },
                        miniBlocks: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/Miniblocks.png",
                            jsonPath: this.assetRoot + "images/Miniblocks.json"
                        },
                        lavaPop: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/LavaPop.png",
                            jsonPath: this.assetRoot + "images/LavaPop.json"
                        },
                        fire: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/Fire.png",
                            jsonPath: this.assetRoot + "images/Fire.json"
                        },
                        bubbles: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/Bubbles.png",
                            jsonPath: this.assetRoot + "images/Bubbles.json"
                        },
                        explosion: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/Explosion.png",
                            jsonPath: this.assetRoot + "images/Explosion.json"
                        },
                        door: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/Door.png",
                            jsonPath: this.assetRoot + "images/Door.json"
                        },
                        rails: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/Rails.png",
                            jsonPath: this.assetRoot + "images/Rails.json"
                        },
                        tnt: {
                            type: "atlasJSON",
                            pngPath: this.assetRoot + "images/TNT.png",
                            jsonPath: this.assetRoot + "images/TNT.json"
                        },
                        dig_wood1: {
                            type: "sound",
                            mp3: this.assetRoot + "audio/dig_wood1.mp3",
                            wav: this.assetRoot + "audio/dig_wood1.wav",
                            ogg: this.assetRoot + "audio/dig_wood1.ogg"
                        },
                        stepGrass: {
                            type: "sound",
                            mp3: this.assetRoot + "audio/step_grass1.mp3",
                            wav: this.assetRoot + "audio/step_grass1.wav",
                            ogg: this.assetRoot + "audio/step_grass1.ogg"
                        },
                        stepWood: {
                            type: "sound",
                            mp3: this.assetRoot + "audio/wood2.mp3",
                            ogg: this.assetRoot + "audio/wood2.ogg"
                        },
                        stepStone: {
                            type: "sound",
                            mp3: this.assetRoot + "audio/stone2.mp3",
                            ogg: this.assetRoot + "audio/stone2.ogg"
                        },
                        stepGravel: {
                            type: "sound",
                            mp3: this.assetRoot + "audio/gravel1.mp3",
                            ogg: this.assetRoot + "audio/gravel1.ogg"
                        },
                        stepFarmland: {
                            type: "sound",
                            mp3: this.assetRoot + "audio/cloth4.mp3",
                            ogg: this.assetRoot + "audio/cloth4.ogg"
                        },
                        failure: {
                            type: "sound",
                            mp3: this.assetRoot + "audio/break.mp3",
                            ogg: this.assetRoot + "audio/break.ogg"
                        },
                        success: {
                            type: "sound",
                            mp3: this.assetRoot + "audio/levelup.mp3",
                            ogg: this.assetRoot + "audio/levelup.ogg"
                        },
                        fall: {
                            type: "sound",
                            mp3: this.assetRoot + "audio/fallsmall.mp3",
                            ogg: this.assetRoot + "audio/fallsmall.ogg"
                        },
                        fuse: {
                            type: "sound",
                            mp3: this.assetRoot + "audio/fuse.mp3",
                            ogg: this.assetRoot + "audio/fuse.ogg"
                        },
                        explode: {
                            type: "sound",
                            mp3: this.assetRoot + "audio/explode3.mp3",
                            ogg: this.assetRoot + "audio/explode3.ogg"
                        },
                        placeBlock: {
                            type: "sound",
                            mp3: this.assetRoot + "audio/cloth1.mp3",
                            ogg: this.assetRoot + "audio/cloth1.ogg"
                        },
                        collectedBlock: {
                            type: "sound",
                            mp3: this.assetRoot + "audio/pop.mp3",
                            ogg: this.assetRoot + "audio/pop.ogg"
                        },
                        bump: {
                            type: "sound",
                            mp3: this.assetRoot + "audio/hit3.mp3",
                            ogg: this.assetRoot + "audio/hit3.ogg"
                        },
                        punch: {
                            type: "sound",
                            mp3: this.assetRoot + "audio/cloth1.mp3",
                            ogg: this.assetRoot + "audio/cloth1.ogg"
                        },
                        fizz: {
                            type: "sound",
                            mp3: this.assetRoot + "audio/fizz.mp3",
                            ogg: this.assetRoot + "audio/fizz.ogg"
                        },
                        doorOpen: {
                            type: "sound",
                            mp3: this.assetRoot + "audio/door_open.mp3",
                            ogg: this.assetRoot + "audio/door_open.ogg"
                        },
                        houseSuccess: {
                            type: "sound",
                            mp3: this.assetRoot + "audio/launch1.mp3",
                            ogg: this.assetRoot + "audio/launch1.ogg"
                        },
                        minecart: {
                            type: "sound",
                            mp3: this.assetRoot + "audio/minecartBase.mp3",
                            ogg: this.assetRoot + "audio/minecartBase.ogg"
                        },
                        sheepBaa: {
                            type: "sound",
                            mp3: this.assetRoot + "audio/say3.mp3",
                            ogg: this.assetRoot + "audio/say3.ogg"
                        }
                    }, this.assetPacks = {
                        levelOneAssets: ["entityShadow", "selectionIndicator", "shadeLayer", "AO", "blockShadows", "leavesOak", "leavesBirch", "tallGrass", "blocks", "sheep", "bump", "stepGrass", "failure", "success"],
                        levelTwoAssets: ["entityShadow", "selectionIndicator", "shadeLayer", "AO", "blockShadows", "leavesSpruce", "tallGrass", "blocks", "sheep", "bump", "stepGrass", "failure", "playerSteve", "success", "miniBlocks", "blockExplode", "miningParticles", "destroyOverlay", "dig_wood1", "collectedBlock", "punch"],
                        levelThreeAssets: ["entityShadow", "selectionIndicator", "shadeLayer", "AO", "blockShadows", "leavesOak", "tallGrass", "blocks", "sheep", "bump", "stepGrass", "failure", "playerSteve", "success", "miniBlocks", "blockExplode", "miningParticles", "destroyOverlay", "dig_wood1", "collectedBlock", "sheepBaa", "punch"],
                        allAssetsMinusPlayer: ["entityShadow", "selectionIndicator", "shadeLayer", "tallGrass", "finishOverlay", "bed", "AO", "blockShadows", "undergroundFow", "blocks", "leavesAcacia", "leavesBirch", "leavesJungle", "leavesOak", "leavesSpruce", "sheep", "creeper", "crops", "torch", "destroyOverlay", "blockExplode", "miningParticles", "miniBlocks", "lavaPop", "fire", "bubbles", "explosion", "door", "rails", "tnt", "dig_wood1", "stepGrass", "stepWood", "stepStone", "stepGravel", "stepFarmland", "failure", "success", "fall", "fuse", "explode", "placeBlock", "collectedBlock", "bump", "punch", "fizz", "doorOpen", "houseSuccess", "minecart", "sheepBaa"],
                        playerSteve: ["playerSteve"],
                        playerAlex: ["playerAlex"],
                        grass: ["tallGrass"]
                    }
                }
                return o(e, [{
                    key: "loadPacks",
                    value: function(e) {
                        var t = this;
                        e.forEach(function(e) {
                            t.loadPack(e)
                        })
                    }
                }, {
                    key: "loadPack",
                    value: function(e) {
                        var t = this.assetPacks[e];
                        this.loadAssets(t)
                    }
                }, {
                    key: "loadAssets",
                    value: function(e) {
                        var t = this;
                        e.forEach(function(e) {
                            var a = t.assets[e];
                            t.loadAsset(e, a)
                        })
                    }
                }, {
                    key: "loadAsset",
                    value: function(e, t) {
                        switch (t.type) {
                            case "image":
                                this.game.load.image(e, t.path);
                                break;
                            case "sound":
                                this.audioPlayer.register({
                                    id: e,
                                    mp3: t.mp3,
                                    ogg: t.ogg
                                });
                                break;
                            case "atlasJSON":
                                this.game.load.atlasJSONHash(e, t.pngPath, t.jsonPath);
                                break;
                            default:
                                throw "Asset " + e + " needs config.type set in configuration."
                        }
                    }
                }]), e
            }();
        a["default"] = i, t.exports = a["default"]
    }, {}],
    "/home/ubuntu/static-hoc/apps/build/js/craft/game/API/CodeOrgAPI.js": [function(e, t, a) {
        "use strict";

        function s(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e) {
            return {
                startCommandCollection: function() {
                    e.DEBUG && console.log("Collecting commands.")
                },
                startAttempt: function(t) {
                    e.OnCompleteCallback = t, e.queue.addCommand(new C["default"](e)), e.setPlayerActionDelayByQueueLength(), e.queue.begin()
                },
                resetAttempt: function() {
                    e.reset(), e.queue.reset(), e.OnCompleteCallback = null
                },
                moveForward: function(t) {
                    e.queue.addCommand(new m["default"](e, t))
                },
                turn: function(t, a) {
                    e.queue.addCommand(new f["default"](e, t, "right" === a ? 1 : -1))
                },
                turnRight: function(t) {
                    e.queue.addCommand(new f["default"](e, t, 1))
                },
                turnLeft: function(t) {
                    e.queue.addCommand(new f["default"](e, t, -1))
                },
                destroyBlock: function(t) {
                    e.queue.addCommand(new l["default"](e, t))
                },
                placeBlock: function(t, a) {
                    e.queue.addCommand(new u["default"](e, t, a))
                },
                placeInFront: function(t, a) {
                    e.queue.addCommand(new h["default"](e, t, a))
                },
                tillSoil: function(t) {
                    e.queue.addCommand(new h["default"](e, t, "watering"))
                },
                whilePathAhead: function(t, a, s) {
                    e.queue.addCommand(new v["default"](e, t, a, s))
                },
                ifBlockAhead: function(t, a, s) {
                    e.queue.addCommand(new b["default"](e, t, a, s))
                },
                getScreenshot: function() {
                    return e.getScreenshot()
                }
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.get = o;
        var i = e("../CommandQueue/CommandQueue.js"),
            n = (s(i), e("../CommandQueue/BaseCommand.js")),
            r = (s(n), e("../CommandQueue/DestroyBlockCommand.js")),
            l = s(r),
            c = e("../CommandQueue/PlaceBlockCommand.js"),
            u = s(c),
            d = e("../CommandQueue/PlaceInFrontCommand.js"),
            h = s(d),
            p = e("../CommandQueue/MoveForwardCommand.js"),
            m = s(p),
            g = e("../CommandQueue/TurnCommand.js"),
            f = s(g),
            y = e("../CommandQueue/WhileCommand.js"),
            v = s(y),
            k = e("../CommandQueue/IfBlockAheadCommand.js"),
            b = s(k),
            P = e("../CommandQueue/CheckSolutionCommand.js"),
            C = s(P)
    }, {
        "../CommandQueue/BaseCommand.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/BaseCommand.js",
        "../CommandQueue/CheckSolutionCommand.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/CheckSolutionCommand.js",
        "../CommandQueue/CommandQueue.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/CommandQueue.js",
        "../CommandQueue/DestroyBlockCommand.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/DestroyBlockCommand.js",
        "../CommandQueue/IfBlockAheadCommand.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/IfBlockAheadCommand.js",
        "../CommandQueue/MoveForwardCommand.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/MoveForwardCommand.js",
        "../CommandQueue/PlaceBlockCommand.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/PlaceBlockCommand.js",
        "../CommandQueue/PlaceInFrontCommand.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/PlaceInFrontCommand.js",
        "../CommandQueue/TurnCommand.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/TurnCommand.js",
        "../CommandQueue/WhileCommand.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/WhileCommand.js"
    }],
    "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/WhileCommand.js": [function(e, t, a) {
        "use strict";

        function s(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var s = t[a];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }
                return function(t, a, s) {
                    return a && e(t.prototype, a), s && e(t, s), t
                }
            }(),
            r = function(e, t, a) {
                for (var s = !0; s;) {
                    var o = e,
                        i = t,
                        n = a;
                    s = !1, null === o && (o = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(o, i);
                    if (void 0 !== r) {
                        if ("value" in r) return r.value;
                        var l = r.get;
                        return void 0 === l ? void 0 : l.call(n)
                    }
                    var c = Object.getPrototypeOf(o);
                    if (null === c) return void 0;
                    e = c, t = i, a = n, s = !0, r = c = void 0
                }
            },
            l = e("./CommandState.js"),
            c = s(l),
            u = e("./CommandQueue.js"),
            d = s(u),
            h = e("./BaseCommand.js"),
            p = s(h),
            m = function(e) {
                function t(e, a, s, i) {
                    o(this, t), r(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e, a), this.iterationsLeft = 15, this.BlockType = s, this.WhileCode = i, this.queue = new d["default"](this)
                }
                return i(t, e), n(t, [{
                    key: "tick",
                    value: function() {
                        this.state === c["default"].WORKING && this.queue.tick(), this.queue.isFailed() && (this.state = c["default"].FAILURE), this.queue.isSucceeded() && this.handleWhileCheck()
                    }
                }, {
                    key: "begin",
                    value: function() {
                        r(Object.getPrototypeOf(t.prototype), "begin", this).call(this), this.GameController.DEBUG && console.log("WHILE command: BEGIN"), this.handleWhileCheck()
                    }
                }, {
                    key: "handleWhileCheck",
                    value: function() {
                        this.iterationsLeft <= 0 && (this.state = c["default"].FAILURE), this.GameController.isPathAhead(this.BlockType) ? (this.queue.reset(), this.GameController.queue.setWhileCommandInsertState(this.queue), this.WhileCode(), this.GameController.queue.setWhileCommandInsertState(null), this.queue.begin()) : this.state = c["default"].SUCCESS, this.iterationsLeft--, this.GameController.DEBUG && console.log("While command: Iterationsleft   " + this.iterationsLeft + " ")
                    }
                }]), t
            }(p["default"]);
        a["default"] = m, t.exports = a["default"]
    }, {
        "./BaseCommand.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/BaseCommand.js",
        "./CommandQueue.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/CommandQueue.js",
        "./CommandState.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/CommandState.js"
    }],
    "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/TurnCommand.js": [function(e, t, a) {
        "use strict";

        function s(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var s = t[a];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }
                return function(t, a, s) {
                    return a && e(t.prototype, a), s && e(t, s), t
                }
            }(),
            r = function(e, t, a) {
                for (var s = !0; s;) {
                    var o = e,
                        i = t,
                        n = a;
                    s = !1, null === o && (o = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(o, i);
                    if (void 0 !== r) {
                        if ("value" in r) return r.value;
                        var l = r.get;
                        return void 0 === l ? void 0 : l.call(n)
                    }
                    var c = Object.getPrototypeOf(o);
                    if (null === c) return void 0;
                    e = c, t = i, a = n, s = !0, r = c = void 0
                }
            },
            l = e("./CommandState.js"),
            c = (s(l), e("./BaseCommand.js")),
            u = s(c),
            d = function(e) {
                function t(e, a, s) {
                    o(this, t), r(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e, a), this.Direction = s
                }
                return i(t, e), n(t, [{
                    key: "tick",
                    value: function() {}
                }, {
                    key: "begin",
                    value: function() {
                        r(Object.getPrototypeOf(t.prototype), "begin", this).call(this), this.GameController.DEBUG && console.log("TURN command: BEGIN turning " + this.Direction + "  "), this.GameController.turn(this, this.Direction)
                    }
                }]), t
            }(u["default"]);
        a["default"] = d, t.exports = a["default"]
    }, {
        "./BaseCommand.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/BaseCommand.js",
        "./CommandState.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/CommandState.js"
    }],
    "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/PlaceInFrontCommand.js": [function(e, t, a) {
        "use strict";

        function s(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var s = t[a];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }
                return function(t, a, s) {
                    return a && e(t.prototype, a), s && e(t, s), t
                }
            }(),
            r = function(e, t, a) {
                for (var s = !0; s;) {
                    var o = e,
                        i = t,
                        n = a;
                    s = !1, null === o && (o = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(o, i);
                    if (void 0 !== r) {
                        if ("value" in r) return r.value;
                        var l = r.get;
                        return void 0 === l ? void 0 : l.call(n)
                    }
                    var c = Object.getPrototypeOf(o);
                    if (null === c) return void 0;
                    e = c, t = i, a = n, s = !0, r = c = void 0
                }
            },
            l = e("./CommandState.js"),
            c = (s(l), e("./BaseCommand.js")),
            u = s(c),
            d = function(e) {
                function t(e, a, s) {
                    o(this, t), r(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e, a), this.BlockType = s
                }
                return i(t, e), n(t, [{
                    key: "tick",
                    value: function() {}
                }, {
                    key: "begin",
                    value: function() {
                        r(Object.getPrototypeOf(t.prototype), "begin", this).call(this), this.GameController.placeBlockForward(this, this.BlockType)
                    }
                }]), t
            }(u["default"]);
        a["default"] = d, t.exports = a["default"]
    }, {
        "./BaseCommand.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/BaseCommand.js",
        "./CommandState.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/CommandState.js"
    }],
    "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/PlaceBlockCommand.js": [function(e, t, a) {
        "use strict";

        function s(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var s = t[a];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }
                return function(t, a, s) {
                    return a && e(t.prototype, a), s && e(t, s), t
                }
            }(),
            r = function(e, t, a) {
                for (var s = !0; s;) {
                    var o = e,
                        i = t,
                        n = a;
                    s = !1, null === o && (o = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(o, i);
                    if (void 0 !== r) {
                        if ("value" in r) return r.value;
                        var l = r.get;
                        return void 0 === l ? void 0 : l.call(n)
                    }
                    var c = Object.getPrototypeOf(o);
                    if (null === c) return void 0;
                    e = c, t = i, a = n, s = !0, r = c = void 0
                }
            },
            l = e("./CommandState.js"),
            c = (s(l), e("./BaseCommand.js")),
            u = s(c),
            d = function(e) {
                function t(e, a, s) {
                    o(this, t), r(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e, a), this.BlockType = s
                }
                return i(t, e), n(t, [{
                    key: "tick",
                    value: function() {}
                }, {
                    key: "begin",
                    value: function() {
                        r(Object.getPrototypeOf(t.prototype), "begin", this).call(this), this.GameController.placeBlock(this, this.BlockType)
                    }
                }]), t
            }(u["default"]);
        a["default"] = d, t.exports = a["default"]
    }, {
        "./BaseCommand.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/BaseCommand.js",
        "./CommandState.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/CommandState.js"
    }],
    "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/MoveForwardCommand.js": [function(e, t, a) {
        "use strict";

        function s(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var s = t[a];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }
                return function(t, a, s) {
                    return a && e(t.prototype, a), s && e(t, s), t
                }
            }(),
            r = function(e, t, a) {
                for (var s = !0; s;) {
                    var o = e,
                        i = t,
                        n = a;
                    s = !1, null === o && (o = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(o, i);
                    if (void 0 !== r) {
                        if ("value" in r) return r.value;
                        var l = r.get;
                        return void 0 === l ? void 0 : l.call(n)
                    }
                    var c = Object.getPrototypeOf(o);
                    if (null === c) return void 0;
                    e = c, t = i, a = n, s = !0, r = c = void 0
                }
            },
            l = e("./CommandState.js"),
            c = (s(l), e("./BaseCommand.js")),
            u = s(c),
            d = function(e) {
                function t(e, a) {
                    o(this, t), r(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e, a)
                }
                return i(t, e), n(t, [{
                    key: "tick",
                    value: function() {}
                }, {
                    key: "begin",
                    value: function() {
                        r(Object.getPrototypeOf(t.prototype), "begin", this).call(this), this.GameController.moveForward(this)
                    }
                }]), t
            }(u["default"]);
        a["default"] = d, t.exports = a["default"]
    }, {
        "./BaseCommand.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/BaseCommand.js",
        "./CommandState.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/CommandState.js"
    }],
    "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/IfBlockAheadCommand.js": [function(e, t, a) {
        "use strict";

        function s(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var s = t[a];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }
                return function(t, a, s) {
                    return a && e(t.prototype, a), s && e(t, s), t
                }
            }(),
            r = function(e, t, a) {
                for (var s = !0; s;) {
                    var o = e,
                        i = t,
                        n = a;
                    s = !1, null === o && (o = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(o, i);
                    if (void 0 !== r) {
                        if ("value" in r) return r.value;
                        var l = r.get;
                        return void 0 === l ? void 0 : l.call(n)
                    }
                    var c = Object.getPrototypeOf(o);
                    if (null === c) return void 0;
                    e = c, t = i, a = n, s = !0, r = c = void 0
                }
            },
            l = e("./CommandState.js"),
            c = s(l),
            u = e("./CommandQueue.js"),
            d = s(u),
            h = e("./BaseCommand.js"),
            p = s(h),
            m = function(e) {
                function t(e, a, s, i) {
                    o(this, t), r(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e, a), this.blockType = s, this.ifCodeCallback = i, this.queue = new d["default"](this)
                }
                return i(t, e), n(t, [{
                    key: "tick",
                    value: function() {
                        this.state === c["default"].WORKING && this.queue.tick(), this.queue.isFailed() && (this.state = c["default"].FAILURE), this.queue.isSucceeded() && (this.state = c["default"].SUCCESS)
                    }
                }, {
                    key: "begin",
                    value: function() {
                        r(Object.getPrototypeOf(t.prototype), "begin", this).call(this), this.GameController.DEBUG && console.log("WHILE command: BEGIN"), this.handleIfCheck()
                    }
                }, {
                    key: "handleIfCheck",
                    value: function() {
                        this.GameController.isPathAhead(this.blockType) ? (this.queue.reset(), this.GameController.queue.setWhileCommandInsertState(this.queue), this.ifCodeCallback(), this.GameController.queue.setWhileCommandInsertState(null), this.queue.begin()) : this.state = c["default"].SUCCESS
                    }
                }]), t
            }(p["default"]);
        a["default"] = m, t.exports = a["default"]
    }, {
        "./BaseCommand.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/BaseCommand.js",
        "./CommandQueue.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/CommandQueue.js",
        "./CommandState.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/CommandState.js"
    }],
    "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/DestroyBlockCommand.js": [function(e, t, a) {
        "use strict";

        function s(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var s = t[a];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }
                return function(t, a, s) {
                    return a && e(t.prototype, a), s && e(t, s), t
                }
            }(),
            r = function(e, t, a) {
                for (var s = !0; s;) {
                    var o = e,
                        i = t,
                        n = a;
                    s = !1, null === o && (o = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(o, i);
                    if (void 0 !== r) {
                        if ("value" in r) return r.value;
                        var l = r.get;
                        return void 0 === l ? void 0 : l.call(n)
                    }
                    var c = Object.getPrototypeOf(o);
                    if (null === c) return void 0;
                    e = c, t = i, a = n, s = !0, r = c = void 0
                }
            },
            l = e("./CommandState.js"),
            c = (s(l), e("./BaseCommand.js")),
            u = s(c),
            d = function(e) {
                function t(e, a) {
                    o(this, t), r(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e, a)
                }
                return i(t, e), n(t, [{
                    key: "tick",
                    value: function() {}
                }, {
                    key: "begin",
                    value: function() {
                        r(Object.getPrototypeOf(t.prototype), "begin", this).call(this), this.GameController.destroyBlock(this)
                    }
                }]), t
            }(u["default"]);
        a["default"] = d, t.exports = a["default"]
    }, {
        "./BaseCommand.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/BaseCommand.js",
        "./CommandState.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/CommandState.js"
    }],
    "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/CheckSolutionCommand.js": [function(e, t, a) {
        "use strict";

        function s(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = function() {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var s = t[a];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }
                return function(t, a, s) {
                    return a && e(t.prototype, a), s && e(t, s), t
                }
            }(),
            r = function(e, t, a) {
                for (var s = !0; s;) {
                    var o = e,
                        i = t,
                        n = a;
                    s = !1, null === o && (o = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(o, i);
                    if (void 0 !== r) {
                        if ("value" in r) return r.value;
                        var l = r.get;
                        return void 0 === l ? void 0 : l.call(n)
                    }
                    var c = Object.getPrototypeOf(o);
                    if (null === c) return void 0;
                    e = c, t = i, a = n, s = !0, r = c = void 0
                }
            },
            l = e("./CommandState.js"),
            c = (s(l), e("./CommandQueue.js")),
            u = (s(c), e("./BaseCommand.js")),
            d = s(u),
            h = function(e) {
                function t(e) {
                    o(this, t);
                    var a = function() {
                        e.DEBUG && console.log("Execute solve command")
                    };
                    r(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e, a)
                }
                return i(t, e), n(t, [{
                    key: "tick",
                    value: function() {}
                }, {
                    key: "begin",
                    value: function() {
                        r(Object.getPrototypeOf(t.prototype), "begin", this).call(this), this.GameController.DEBUG && console.log("Solve command: BEGIN"), this.GameController.checkSolution(this)
                    }
                }]), t
            }(d["default"]);
        a["default"] = h, t.exports = a["default"]
    }, {
        "./BaseCommand.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/BaseCommand.js",
        "./CommandQueue.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/CommandQueue.js",
        "./CommandState.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/CommandState.js"
    }],
    "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/CommandQueue.js": [function(e, t, a) {
        "use strict";

        function s(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var s = t[a];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }
                return function(t, a, s) {
                    return a && e(t.prototype, a), s && e(t, s), t
                }
            }(),
            n = e("./BaseCommand"),
            r = (s(n), e("./CommandState.js")),
            l = s(r),
            c = function() {
                function e(t) {
                    o(this, e), this.gameController = t, this.game = t.game, this.reset()
                }
                return i(e, [{
                    key: "addCommand",
                    value: function(e) {
                        this.whileCommandQueue ? this.whileCommandQueue.addCommand(e) : this.commandList_.push(e)
                    }
                }, {
                    key: "setWhileCommandInsertState",
                    value: function(e) {
                        this.whileCommandQueue = e
                    }
                }, {
                    key: "begin",
                    value: function() {
                        this.state = l["default"].WORKING, this.gameController.DEBUG && console.log("Debug Queue: BEGIN")
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.state = l["default"].NOT_STARTED, this.currentCommand = null, this.commandList_ = [], this.whileCommandQueue && this.whileCommandQueue.reset(), this.whileCommandQueue = null
                    }
                }, {
                    key: "tick",
                    value: function() {
                        if (this.state === l["default"].WORKING) {
                            if (!this.currentCommand) {
                                if (0 === this.commandList_.length) return void(this.state = l["default"].SUCCESS);
                                this.currentCommand = this.commandList_.shift()
                            }
                            this.currentCommand.isStarted() ? this.currentCommand.tick() : this.currentCommand.begin(), this.currentCommand.isSucceeded() ? this.currentCommand = null : this.currentCommand.isFailed() && (this.state = l["default"].FAILURE)
                        }
                    }
                }, {
                    key: "getLength",
                    value: function() {
                        return this.commandList_ ? this.commandList_.length : 0
                    }
                }, {
                    key: "isStarted",
                    value: function() {
                        return this.state !== l["default"].NOT_STARTED
                    }
                }, {
                    key: "isFinished",
                    value: function() {
                        return this.isSucceeded() || this.isFailed()
                    }
                }, {
                    key: "isSucceeded",
                    value: function() {
                        return this.state === l["default"].SUCCESS
                    }
                }, {
                    key: "isFailed",
                    value: function() {
                        return this.state === l["default"].FAILURE
                    }
                }]), e
            }();
        a["default"] = c, t.exports = a["default"]
    }, {
        "./BaseCommand": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/BaseCommand.js",
        "./CommandState.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/CommandState.js"
    }],
    "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/BaseCommand.js": [function(e, t, a) {
        "use strict";

        function s(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var s = t[a];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }
                return function(t, a, s) {
                    return a && e(t.prototype, a), s && e(t, s), t
                }
            }(),
            n = e("./CommandState.js"),
            r = s(n),
            l = function() {
                function e(t, a) {
                    o(this, e), this.GameController = t, this.Game = t.game, this.HighlightCallback = a, this.state = r["default"].NOT_STARTED
                }
                return i(e, [{
                    key: "tick",
                    value: function() {}
                }, {
                    key: "begin",
                    value: function() {
                        this.HighlightCallback && this.HighlightCallback(), this.state = r["default"].WORKING
                    }
                }, {
                    key: "isStarted",
                    value: function() {
                        return this.state != r["default"].NOT_STARTED
                    }
                }, {
                    key: "isFinished",
                    value: function() {
                        return this.isSucceeded() || this.isFailed()
                    }
                }, {
                    key: "isSucceeded",
                    value: function() {
                        return this.state === r["default"].SUCCESS
                    }
                }, {
                    key: "isFailed",
                    value: function() {
                        return this.state === r["default"].FAILURE
                    }
                }, {
                    key: "succeeded",
                    value: function() {
                        this.state = r["default"].SUCCESS
                    }
                }, {
                    key: "failed",
                    value: function() {
                        this.state = r["default"].FAILURE
                    }
                }]), e
            }();
        a["default"] = l, t.exports = a["default"]
    }, {
        "./CommandState.js": "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/CommandState.js"
    }],
    "/home/ubuntu/static-hoc/apps/build/js/craft/game/CommandQueue/CommandState.js": [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a["default"] = Object.freeze({
            NOT_STARTED: 0,
            WORKING: 1,
            SUCCESS: 2,
            FAILURE: 3
        }), t.exports = a["default"]
    }, {}],
    "/home/ubuntu/static-hoc/apps/build/js/craft/dialogs/playerSelection.html.ejs": [function(require, module, exports) {
        module.exports = function() {
            var t = function anonymous(locals, filters, escape) {
                escape = escape || function(e) {
                    return String(e).replace(/&(?!\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                };
                var buf = [];
                with(locals || {}) ! function() {
                    buf.push("");
                    var e = require("../locale");
                    buf.push('\n<h1 class="minecraft-big-yellow-header" id="getting-started-header">', escape(e.playerSelectLetsGetStarted()), '</h1>\n\n<h2 id="select-character-text">', escape(e.playerSelectChooseCharacter()), '</h2>\n\n<div id="choose-character-container">\n  <div class="minecraft-character" id="choose-steve">\n    <h1 class="minecraft-big-yellow-header">Steve</h1>\n    <div class="character-portrait" id="steve-portrait"></div>\n    <div class="choose-character-button" id="choose-steve-select">', escape(e.selectChooseButton()), '</div>\n  </div>\n  <div class="minecraft-character" id="choose-alex">\n    <h1 class="minecraft-big-yellow-header">Alex</h1>\n    <div class="character-portrait" id="alex-portrait"></div>\n    <div class="choose-character-button" id="choose-alex-select">', escape(e.selectChooseButton()), '</div>\n  </div>\n</div>\n\n<div id="close-character-select"></div>\n')
                }();
                return buf.join("")
            };
            return function(e) {
                return t(e, require("ejs").filters)
            }
        }()
    }, {
        "../locale": "/home/ubuntu/static-hoc/apps/build/js/craft/locale.js",
        ejs: "/home/ubuntu/static-hoc/apps/node_modules/ejs/lib/ejs.js"
    }],
    "/home/ubuntu/static-hoc/apps/build/js/craft/dialogs/houseSelection.html.ejs": [function(require, module, exports) {
        module.exports = function() {
            var t = function anonymous(locals, filters, escape) {
                escape = escape || function(e) {
                    return String(e).replace(/&(?!\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                };
                var buf = [];
                with(locals || {}) ! function() {
                    buf.push("");
                    var e = require("../locale");
                    buf.push('\n<h1 class="minecraft-big-yellow-header" id="getting-started-header">', escape(e.houseSelectLetsBuild()), '</h1>\n\n<h2 id="select-house-text">', escape(e.houseSelectChooseFloorPlan()), '</h2>\n\n<div id="choose-house-container">\n  <div class="minecraft-house" id="choose-house-a">\n    <h1 class="minecraft-big-yellow-header">', escape(e.houseSelectEasy()), '</h1>\n    <div class="house-outline-container">\n      <div class="house-photo" id="house-a-picture"></div>\n    </div>\n    <div class="choose-house-button">', escape(e.selectChooseButton()), '</div>\n  </div>\n  <div class="minecraft-house" id="choose-house-b">\n    <h1 class="minecraft-big-yellow-header">', escape(e.houseSelectMedium()), '</h1>\n    <div class="house-outline-container">\n      <div class="house-photo" id="house-b-picture"></div>\n    </div>\n    <div class="choose-house-button">', escape(e.selectChooseButton()), '</div>\n  </div>\n  <div class="minecraft-house" id="choose-house-c">\n    <h1 class="minecraft-big-yellow-header">', escape(e.houseSelectHard()), '</h1>\n    <div class="house-outline-container">\n      <div class="house-photo" id="house-c-picture"></div>\n    </div>\n    <div class="choose-house-button">', escape(e.selectChooseButton()), '</div>\n  </div>\n</div>\n\n<div id="close-house-select"></div>\n')
                }();
                return buf.join("")
            };
            return function(e) {
                return t(e, require("ejs").filters)
            }
        }()
    }, {
        "../locale": "/home/ubuntu/static-hoc/apps/build/js/craft/locale.js",
        ejs: "/home/ubuntu/static-hoc/apps/node_modules/ejs/lib/ejs.js"
    }],
    "/home/ubuntu/static-hoc/apps/build/js/craft/controls.html.ejs": [function(require, module, exports) {
        module.exports = function() {
            var t = function anonymous(locals, filters, escape) {
                escape = escape || function(e) {
                    return String(e).replace(/&(?!\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                };
                var buf = [];
                with(locals || {}) ! function() {
                    buf.push("");
                    var e = require("../locale");
                    buf.push('\n\n<div id="right-button-cell">\n  <button id="rightButton" class="share mc-share-button">\n    <div>', escape(e.finish()), "</div>\n  </button>\n</div>\n\n<!-- This is a comment unique to Craft -->\n")
                }();
                return buf.join("")
            };
            return function(e) {
                return t(e, require("ejs").filters)
            }
        }()
    }, {
        "../locale": "/home/ubuntu/static-hoc/apps/build/js/locale.js",
        ejs: "/home/ubuntu/static-hoc/apps/node_modules/ejs/lib/ejs.js"
    }],
    "/home/ubuntu/static-hoc/apps/build/js/craft/blocks.js": [function(e, t, a) {
        "use strict";

        function s(e) {
            return e.map(function(e) {
                var t = i[e] || e;
                return [t, e]
            })
        }
        var o = e("./locale"),
            i = {
                bedrock: o.blockTypeBedrock(),
                bricks: o.blockTypeBricks(),
                clay: o.blockTypeClay(),
                oreCoal: o.blockTypeOreCoal(),
                dirtCoarse: o.blockTypeDirtCoarse(),
                cobblestone: o.blockTypeCobblestone(),
                oreDiamond: o.blockTypeOreDiamond(),
                dirt: o.blockTypeDirt(),
                oreEmerald: o.blockTypeOreEmerald(),
                farmlandWet: o.blockTypeFarmlandWet(),
                glass: o.blockTypeGlass(),
                oreGold: o.blockTypeOreGold(),
                grass: o.blockTypeGrass(),
                gravel: o.blockTypeGravel(),
                clayHardened: o.blockTypeClayHardened(),
                oreIron: o.blockTypeOreIron(),
                oreLapis: o.blockTypeOreLapis(),
                lava: o.blockTypeLava(),
                logAcacia: o.blockTypeLogAcacia(),
                logBirch: o.blockTypeLogBirch(),
                logJungle: o.blockTypeLogJungle(),
                logOak: o.blockTypeLogOak(),
                logSpruce: o.blockTypeLogSpruce(),
                planksAcacia: o.blockTypePlanksAcacia(),
                planksBirch: o.blockTypePlanksBirch(),
                planksJungle: o.blockTypePlanksJungle(),
                planksOak: o.blockTypePlanksOak(),
                planksSpruce: o.blockTypePlanksSpruce(),
                oreRedstone: o.blockTypeOreRedstone(),
                rail: o.blockTypeRail(),
                sand: o.blockTypeSand(),
                sandstone: o.blockTypeSandstone(),
                stone: o.blockTypeStone(),
                tnt: o.blockTypeTnt(),
                tree: o.blockTypeTree(),
                water: o.blockTypeWater(),
                wool: o.blockTypeWool(),
                "": o.blockTypeEmpty()
            },
            n = ["bedrock", "bricks", "clay", "oreCoal", "dirtCoarse", "cobblestone", "oreDiamond", "dirt", "oreEmerald", "farmlandWet", "glass", "oreGold", "grass", "gravel", "clayHardened", "oreIron", "oreLapis", "lava", "logAcacia", "logBirch", "logJungle", "logOak", "logSpruce", "planksAcacia", "planksBirch", "planksJungle", "planksOak", "planksSpruce", "oreRedstone", "sand", "sandstone", "stone", "tnt", "tree", "wool"];
        a.install = function(e, t) {
            var a = (t.level.availableBlocks || []).concat(JSON.parse(window.localStorage.getItem("craftPlayerInventory")) || []),
                i = {};
            a.forEach(function(e) {
                i[e] = !0
            });
            var r = {
                    inventoryBlocks: Object.keys(i),
                    ifBlockOptions: t.level.ifBlockOptions,
                    placeBlockOptions: t.level.placeBlockOptions
                },
                l = !r.inventoryBlocks || 0 === r.inventoryBlocks.length,
                c = l ? n : r.inventoryBlocks;
            e.Blocks.craft_moveForward = {
                helpUrl: "",
                init: function() {
                    this.setHSV(184, 1, .74), this.appendDummyInput().appendTitle(new e.FieldLabel(o.blockMoveForward())), this.setPreviousStatement(!0), this.setNextStatement(!0)
                }
            }, e.Generator.get("JavaScript").craft_moveForward = function() {
                return "moveForward('block_id_" + this.id + "');\n"
            }, e.Blocks.craft_turn = {
                helpUrl: "http://code.google.com/p/blockly/wiki/Turn",
                init: function() {
                    this.setHSV(184, 1, .74), this.appendDummyInput().appendTitle(new e.FieldDropdown(this.DIRECTIONS), "DIR"), this.setPreviousStatement(!0), this.setNextStatement(!0)
                }
            }, e.Blocks.craft_turn.DIRECTIONS = [
                [o.blockTurnLeft() + " \u21ba", "left"],
                [o.blockTurnRight() + " \u21bb", "right"]
            ], e.Generator.get("JavaScript").craft_turn = function() {
                var e = this.getTitleValue("DIR"),
                    t = "left" === e ? "turnLeft" : "turnRight";
                return t + "('block_id_" + this.id + "');\n"
            }, e.Blocks.craft_destroyBlock = {
                helpUrl: "",
                init: function() {
                    this.setHSV(184, 1, .74), this.appendDummyInput().appendTitle(new e.FieldLabel(o.blockDestroyBlock())), this.setPreviousStatement(!0), this.setNextStatement(!0)
                }
            }, e.Generator.get("JavaScript").craft_destroyBlock = function() {
                return "destroyBlock('block_id_" + this.id + "');\n"
            }, e.Blocks.craft_shear = {
                helpUrl: "",
                init: function() {
                    this.setHSV(184, 1, .74), this.appendDummyInput().appendTitle(new e.FieldLabel(o.blockShear())), this.setPreviousStatement(!0), this.setNextStatement(!0)
                }
            }, e.Generator.get("JavaScript").craft_shear = function() {
                return "shear('block_id_" + this.id + "');\n"
            }, e.Blocks.craft_whileBlockAhead = {
                helpUrl: "",
                init: function() {
                    var t = s(r.ifBlockOptions || c),
                        a = new e.FieldDropdown(t);
                    a.setValue(t[0][1]), this.setHSV(322, .9, .95), this.appendDummyInput().appendTitle(o.blockWhileXAheadWhile()).appendTitle(a, "TYPE").appendTitle(o.blockWhileXAheadAhead()), this.appendStatementInput("DO").appendTitle(o.blockWhileXAheadDo()), this.setPreviousStatement(!0), this.setNextStatement(!0)
                }
            }, e.Generator.get("JavaScript").craft_whileBlockAhead = function() {
                var t = e.Generator.get("JavaScript").statementToCode(this, "DO"),
                    a = this.getTitleValue("TYPE");
                return "whileBlockAhead('block_id_" + this.id + "',\n\"" + a + '",   function() { ' + t + "  });\n"
            }, e.Blocks.craft_ifBlockAhead = {
                helpUrl: "",
                init: function() {
                    var t = s(r.ifBlockOptions || c),
                        a = new e.FieldDropdown(t);
                    a.setValue(t[0][1]), this.setHSV(196, 1, .79), this.appendDummyInput().appendTitle(o.blockIf()).appendTitle(a, "TYPE").appendTitle(o.blockWhileXAheadAhead()), this.appendStatementInput("DO").appendTitle(o.blockWhileXAheadDo()), this.setPreviousStatement(!0), this.setNextStatement(!0)
                }
            }, e.Generator.get("JavaScript").craft_ifBlockAhead = function() {
                var t = e.Generator.get("JavaScript").statementToCode(this, "DO"),
                    a = this.getTitleValue("TYPE");
                return 'ifBlockAhead("' + a + '", function() {\n' + t + "}, 'block_id_" + this.id + "');\n"
            }, e.Blocks.craft_ifLavaAhead = {
                helpUrl: "",
                init: function() {
                    this.setHSV(196, 1, .79), this.appendDummyInput().appendTitle(o.blockIfLavaAhead()), this.appendStatementInput("DO").appendTitle(o.blockWhileXAheadDo()), this.setPreviousStatement(!0), this.setNextStatement(!0)
                }
            }, e.Generator.get("JavaScript").craft_ifLavaAhead = function() {
                var t = e.Generator.get("JavaScript").statementToCode(this, "DO");
                return "ifLavaAhead(function() {\n" + t + "}, 'block_id_" + this.id + "');\n"
            }, e.Blocks.craft_placeBlock = {
                helpUrl: "",
                init: function() {
                    var t = s(r.placeBlockOptions || c),
                        a = new e.FieldDropdown(t);
                    a.setValue(t[0][1]), this.setHSV(184, 1, .74), this.appendDummyInput().appendTitle(o.blockPlaceXPlace()).appendTitle(a, "TYPE"), this.setPreviousStatement(!0), this.setNextStatement(!0)
                }
            }, e.Generator.get("JavaScript").craft_placeBlock = function() {
                var e = this.getTitleValue("TYPE");
                return 'placeBlock("' + e + "\", 'block_id_" + this.id + "');\n"
            }, e.Blocks.craft_placeTorch = {
                helpUrl: "",
                init: function() {
                    this.setHSV(184, 1, .74), this.appendDummyInput().appendTitle(o.blockPlaceTorch()), this.setPreviousStatement(!0), this.setNextStatement(!0)
                }
            }, e.Generator.get("JavaScript").craft_placeTorch = function() {
                return "placeTorch('block_id_" + this.id + "');\n"
            }, e.Blocks.craft_plantCrop = {
                helpUrl: "",
                init: function() {
                    this.setHSV(184, 1, .74), this.appendDummyInput().appendTitle(o.blockPlantCrop()), this.setPreviousStatement(!0), this.setNextStatement(!0)
                }
            }, e.Generator.get("JavaScript").craft_plantCrop = function() {
                return "plantCrop('block_id_" + this.id + "');\n"
            }, e.Blocks.craft_tillSoil = {
                helpUrl: "",
                init: function() {
                    this.setHSV(184, 1, .74), this.appendDummyInput().appendTitle(o.blockTillSoil), this.setPreviousStatement(!0), this.setNextStatement(!0)
                }
            }, e.Generator.get("JavaScript").craft_tillSoil = function() {
                return "tillSoil('block_id_" + this.id + "');\n"
            }, e.Blocks.craft_placeBlockAhead = {
                helpUrl: "",
                init: function() {
                    var t = s(r.placeBlockOptions || c),
                        a = new e.FieldDropdown(t);
                    a.setValue(t[0][1]), this.setHSV(184, 1, .74), this.appendDummyInput().appendTitle(o.blockPlaceXAheadPlace()).appendTitle(a, "TYPE").appendTitle(o.blockPlaceXAheadAhead()), this.setPreviousStatement(!0), this.setNextStatement(!0)
                }
            }, e.Generator.get("JavaScript").craft_placeBlockAhead = function() {
                var e = this.getTitleValue("TYPE");
                return 'placeBlockAhead("' + e + "\", 'block_id_" + this.id + "');\n"
            }
        }
    }, {
        "./locale": "/home/ubuntu/static-hoc/apps/build/js/craft/locale.js"
    }],
    "/home/ubuntu/static-hoc/apps/build/js/craft/locale.js": [function(e, t) {
        "use strict";
        t.exports = window.blockly.craft_locale
    }, {}],
    "/home/ubuntu/static-hoc/apps/build/js/craft/api.js": [function() {
        "use strict"
    }, {}]
}, {}, ["/home/ubuntu/static-hoc/apps/build/js/craft/main.js"]);