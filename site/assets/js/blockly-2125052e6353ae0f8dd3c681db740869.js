function brokenControlPointWorkaround() {
    return Blockly.BROKEN_CONTROL_POINTS ? "c 0,5 0,-5 0,0" : ""
}

function oppositeIfRTL(e) {
    return Blockly.RTL ? -e : e
}

function thickenInlineRows(e) {
    for (var t, o = 0; t = e[o]; o++)
        if (t.thicker = !1, t.type === INLINE_ROW)
            for (var n, i = 0; n = t[i]; i++)
                if (n.type === Blockly.INPUT_VALUE || n.type === Blockly.FUNCTIONAL_INPUT) {
                    t.height += 2 * BS.INLINE_PADDING_Y, t.thicker = !0;
                    break
                }
}

function inputRenderSize(e) {
    var t = BS.MIN_BLOCK_Y,
        o = BS.TAB_WIDTH + BS.SEP_SPACE_X;
    return e.type === Blockly.FUNCTIONAL_INPUT && (o = BS.NOTCH_WIDTH + BS.SEP_SPACE_X), e.connection && e.connection.targetConnection && (e = e.connection.targetBlock().getHeightWidth(), t = Math.max(t, e.height), o = Math.max(o, e.width)), {
        width: o,
        height: t
    }
}

function inputTitleRenderSize(e, t) {
    for (var o, n = oppositeIfRTL(t), i = 0, r = 0; o = e.titleRow[r]; r++) o = o.getSize(), o.width && (n += o.width + (r > 0 ? BS.SEP_SPACE_X : 0)), i = Math.max(i, o.height);
    return {
        width: n,
        height: i
    }
}

function chooseNumberOfColumns(e) {
    return 7 >= e ? 1 : Math.floor(Math.sqrt(e))
}
var COMPILED = !0,
    goog = goog || {};
goog.global = this, goog.exportPath_ = function(e, t, o) {
    e = e.split("."), o = o || goog.global, e[0] in o || !o.execScript || o.execScript("var " + e[0]);
    for (var n; e.length && (n = e.shift());) e.length || void 0 === t ? o = o[n] ? o[n] : o[n] = {} : o[n] = t
}, goog.define = function(e, t) {
    var o = t;
    COMPILED || goog.global.CLOSURE_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, e) && (o = goog.global.CLOSURE_DEFINES[e]), goog.exportPath_(e, o)
}, goog.DEBUG = !0, goog.LOCALE = "en", goog.TRUSTED_SITE = !0, goog.provide = function(e) {
    if (!COMPILED) {
        if (goog.isProvided_(e)) throw Error('Namespace "' + e + '" already declared.');
        delete goog.implicitNamespaces_[e];
        for (var t = e;
            (t = t.substring(0, t.lastIndexOf("."))) && !goog.getObjectByName(t);) goog.implicitNamespaces_[t] = !0
    }
    goog.exportPath_(e)
}, goog.setTestOnly = function(e) {
    if (COMPILED && !goog.DEBUG) throw e = e || "", Error(": " + e)
}, goog.forwardDeclare = function() {}, COMPILED || (goog.isProvided_ = function(e) {
    return !goog.implicitNamespaces_[e] && goog.isDefAndNotNull(goog.getObjectByName(e))
}, goog.implicitNamespaces_ = {}), goog.getObjectByName = function(e, t) {
    for (var o, n = e.split("."), i = t || goog.global; o = n.shift();) {
        if (!goog.isDefAndNotNull(i[o])) return null;
        i = i[o]
    }
    return i
}, goog.globalize = function(e, t) {
    var o, n = t || goog.global;
    for (o in e) n[o] = e[o]
}, goog.addDependency = function(e, t, o) {
    if (goog.DEPENDENCIES_ENABLED) {
        var n;
        e = e.replace(/\\/g, "/");
        for (var i = goog.dependencies_, r = 0; n = t[r]; r++) i.nameToPath[n] = e, e in i.pathToNames || (i.pathToNames[e] = {}), i.pathToNames[e][n] = !0;
        for (n = 0; t = o[n]; n++) e in i.requires || (i.requires[e] = {}), i.requires[e][t] = !0
    }
}, goog.ENABLE_DEBUG_LOADER = !0, goog.require = function(e) {
    if (!COMPILED && !goog.isProvided_(e)) {
        if (goog.ENABLE_DEBUG_LOADER) {
            var t = goog.getPathFromDeps_(e);
            if (t) return goog.included_[t] = !0, void goog.writeScripts_()
        }
        throw e = "goog.require could not find: " + e, goog.global.console && goog.global.console.error(e), Error(e)
    }
}, goog.basePath = "", goog.nullFunction = function() {}, goog.identityFunction = function(e) {
    return e
}, goog.abstractMethod = function() {
    throw Error("unimplemented abstract method")
}, goog.addSingletonGetter = function(e) {
    e.getInstance = function() {
        return e.instance_ ? e.instance_ : (goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = e), e.instance_ = new e)
    }
}, goog.instantiatedSingletons_ = [], goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER, goog.DEPENDENCIES_ENABLED && (goog.included_ = {}, goog.dependencies_ = {
    pathToNames: {},
    nameToPath: {},
    requires: {},
    visited: {},
    written: {}
}, goog.inHtmlDocument_ = function() {
    var e = goog.global.document;
    return "undefined" != typeof e && "write" in e
}, goog.findBasePath_ = function() {
    if (goog.global.CLOSURE_BASE_PATH) goog.basePath = goog.global.CLOSURE_BASE_PATH;
    else if (goog.inHtmlDocument_())
        for (var e = goog.global.document.getElementsByTagName("script"), t = e.length - 1; t >= 0; --t) {
            var o = e[t].src,
                n = o.lastIndexOf("?"),
                n = -1 == n ? o.length : n;
            if ("base.js" == o.substr(n - 7, 7)) {
                goog.basePath = o.substr(0, n - 7);
                break
            }
        }
}, goog.importScript_ = function(e) {
    var t = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
    !goog.dependencies_.written[e] && t(e) && (goog.dependencies_.written[e] = !0)
}, goog.writeScriptTag_ = function(e) {
    if (goog.inHtmlDocument_()) {
        var t = goog.global.document;
        if ("complete" == t.readyState) {
            if (/\bdeps.js$/.test(e)) return !1;
            throw Error('Cannot write "' + e + '" after document load')
        }
        return t.write('<script type="text/javascript" src="' + e + '"></script>'), !0
    }
    return !1
}, goog.writeScripts_ = function() {
    function e(t) {
        if (!(t in i.written)) {
            if (!(t in i.visited) && (i.visited[t] = !0, t in i.requires))
                for (var r in i.requires[t])
                    if (!goog.isProvided_(r)) {
                        if (!(r in i.nameToPath)) throw Error("Undefined nameToPath for " + r);
                        e(i.nameToPath[r])
                    }
            t in n || (n[t] = !0, o.push(t))
        }
    }
    var t, o = [],
        n = {},
        i = goog.dependencies_;
    for (t in goog.included_) i.written[t] || e(t);
    for (t = 0; t < o.length; t++) {
        if (!o[t]) throw Error("Undefined script input");
        goog.importScript_(goog.basePath + o[t])
    }
}, goog.getPathFromDeps_ = function(e) {
    return e in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[e] : null
}, goog.findBasePath_(), goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js")), goog.typeOf = function(e) {
    var t = typeof e;
    if ("object" == t) {
        if (!e) return "null";
        if (e instanceof Array) return "array";
        if (e instanceof Object) return t;
        var o = Object.prototype.toString.call(e);
        if ("[object Window]" == o) return "object";
        if ("[object Array]" == o || "number" == typeof e.length && "undefined" != typeof e.splice && "undefined" != typeof e.propertyIsEnumerable && !e.propertyIsEnumerable("splice")) return "array";
        if ("[object Function]" == o || "undefined" != typeof e.call && "undefined" != typeof e.propertyIsEnumerable && !e.propertyIsEnumerable("call")) return "function"
    } else if ("function" == t && "undefined" == typeof e.call) return "object";
    return t
}, goog.isDef = function(e) {
    return void 0 !== e
}, goog.isNull = function(e) {
    return null === e
}, goog.isDefAndNotNull = function(e) {
    return null != e
}, goog.isArray = function(e) {
    return "array" == goog.typeOf(e)
}, goog.isArrayLike = function(e) {
    var t = goog.typeOf(e);
    return "array" == t || "object" == t && "number" == typeof e.length
}, goog.isDateLike = function(e) {
    return goog.isObject(e) && "function" == typeof e.getFullYear
}, goog.isString = function(e) {
    return "string" == typeof e
}, goog.isBoolean = function(e) {
    return "boolean" == typeof e
}, goog.isNumber = function(e) {
    return "number" == typeof e
}, goog.isFunction = function(e) {
    return "function" == goog.typeOf(e)
}, goog.isObject = function(e) {
    var t = typeof e;
    return "object" == t && null != e || "function" == t
}, goog.getUid = function(e) {
    return e[goog.UID_PROPERTY_] || (e[goog.UID_PROPERTY_] = ++goog.uidCounter_)
}, goog.hasUid = function(e) {
    return !!e[goog.UID_PROPERTY_]
}, goog.removeUid = function(e) {
    "removeAttribute" in e && e.removeAttribute(goog.UID_PROPERTY_);
    try {
        delete e[goog.UID_PROPERTY_]
    } catch (t) {}
}, goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0), goog.uidCounter_ = 0, goog.getHashCode = goog.getUid, goog.removeHashCode = goog.removeUid, goog.cloneObject = function(e) {
    var t = goog.typeOf(e);
    if ("object" == t || "array" == t) {
        if (e.clone) return e.clone();
        var o, t = "array" == t ? [] : {};
        for (o in e) t[o] = goog.cloneObject(e[o]);
        return t
    }
    return e
}, goog.bindNative_ = function(e) {
    return e.call.apply(e.bind, arguments)
}, goog.bindJs_ = function(e, t) {
    if (!e) throw Error();
    if (2 < arguments.length) {
        var o = Array.prototype.slice.call(arguments, 2);
        return function() {
            var n = Array.prototype.slice.call(arguments);
            return Array.prototype.unshift.apply(n, o), e.apply(t, n)
        }
    }
    return function() {
        return e.apply(t, arguments)
    }
}, goog.bind = function() {
    return goog.bind = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bindNative_ : goog.bindJs_, goog.bind.apply(null, arguments)
}, goog.partial = function(e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return function() {
        var o = t.slice();
        return o.push.apply(o, arguments), e.apply(this, o)
    }
}, goog.mixin = function(e, t) {
    for (var o in t) e[o] = t[o]
}, goog.now = goog.TRUSTED_SITE && Date.now || function() {
    return +new Date
}, goog.globalEval = function(e) {
    if (goog.global.execScript) goog.global.execScript(e, "JavaScript");
    else {
        if (!goog.global.eval) throw Error("goog.globalEval not available");
        if (null == goog.evalWorksForGlobals_ && (goog.global.eval("var _et_ = 1;"), "undefined" != typeof goog.global._et_ ? (delete goog.global._et_, goog.evalWorksForGlobals_ = !0) : goog.evalWorksForGlobals_ = !1), goog.evalWorksForGlobals_) goog.global.eval(e);
        else {
            var t = goog.global.document,
                o = t.createElement("script");
            o.type = "text/javascript", o.defer = !1, o.appendChild(t.createTextNode(e)), t.body.appendChild(o), t.body.removeChild(o)
        }
    }
}, goog.evalWorksForGlobals_ = null, goog.getCssName = function(e, t) {
    var o = function(e) {
            return goog.cssNameMapping_[e] || e
        },
        n = function(e) {
            e = e.split("-");
            for (var t = [], n = 0; n < e.length; n++) t.push(o(e[n]));
            return t.join("-")
        },
        n = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? o : n : function(e) {
            return e
        };
    return t ? e + "-" + n(t) : n(e)
}, goog.setCssNameMapping = function(e, t) {
    goog.cssNameMapping_ = e, goog.cssNameMappingStyle_ = t
}, !COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING), goog.getMsg = function(e, t) {
    var o, n = t || {};
    for (o in n) {
        var i = ("" + n[o]).replace(/\$/g, "$$$$");
        e = e.replace(RegExp("\\{\\$" + o + "\\}", "gi"), i)
    }
    return e
}, goog.getMsgWithFallback = function(e) {
    return e
}, goog.exportSymbol = function(e, t, o) {
    goog.exportPath_(e, t, o)
}, goog.exportProperty = function(e, t, o) {
    e[t] = o
}, goog.inherits = function(e, t) {
    function o() {}
    o.prototype = t.prototype, e.superClass_ = t.prototype, e.prototype = new o, e.prototype.constructor = e, e.base = function(e, o) {
        var n = Array.prototype.slice.call(arguments, 2);
        return t.prototype[o].apply(e, n)
    }
}, goog.base = function(e, t) {
    var o = arguments.callee.caller;
    if (goog.DEBUG && !o) throw Error("arguments.caller not defined.  goog.base() expects not to be running in strict mode. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
    if (o.superClass_) return o.superClass_.constructor.apply(e, Array.prototype.slice.call(arguments, 1));
    for (var n = Array.prototype.slice.call(arguments, 2), i = !1, r = e.constructor; r; r = r.superClass_ && r.superClass_.constructor)
        if (r.prototype[t] === o) i = !0;
        else if (i) return r.prototype[t].apply(e, n);
    if (e[t] === o) return e.constructor.prototype[t].apply(e, n);
    throw Error("goog.base called from a method of one name to a method of a different name")
}, goog.scope = function(e) {
    e.call(goog.global)
};
var Blockly = {
    ImageDimensionCache: {}
};
Blockly.ImageDimensionCache.imageDimensions_ = {}, Blockly.ImageDimensionCache.IMAGE_LOADING_WIDTH = 40, Blockly.ImageDimensionCache.IMAGE_LOADING_HEIGHT = 40, Blockly.ImageDimensionCache.getCachedDimensionsOrDefaultAndUpdate = function(e, t) {
    var o = Blockly.ImageDimensionCache.getCachedDimensions(e);
    return o ? o : (Blockly.ImageDimensionCache.getDimensionsAsync(e, t), {
        width: Blockly.ImageDimensionCache.IMAGE_LOADING_WIDTH,
        height: Blockly.ImageDimensionCache.IMAGE_LOADING_HEIGHT
    })
}, Blockly.ImageDimensionCache.getCachedDimensions = function(e) {
    return Blockly.ImageDimensionCache.imageDimensions_[e]
}, Blockly.ImageDimensionCache.storeDimensions = function(e, t, o) {
    Blockly.ImageDimensionCache.imageDimensions_[e] = {
        width: t,
        height: o
    }
}, Blockly.ImageDimensionCache.getDimensionsAsync = function(e, t) {
    var o = new Image;
    o.onload = function() {
        Blockly.ImageDimensionCache.storeDimensions(e, o.width, o.height), t(o.width, o.height)
    }, o.src = e
}, goog.string = {}, goog.string.Unicode = {
    NBSP: "\xa0"
}, goog.string.startsWith = function(e, t) {
    return 0 == e.lastIndexOf(t, 0)
}, goog.string.endsWith = function(e, t) {
    var o = e.length - t.length;
    return o >= 0 && e.indexOf(t, o) == o
}, goog.string.caseInsensitiveStartsWith = function(e, t) {
    return 0 == goog.string.caseInsensitiveCompare(t, e.substr(0, t.length))
}, goog.string.caseInsensitiveEndsWith = function(e, t) {
    return 0 == goog.string.caseInsensitiveCompare(t, e.substr(e.length - t.length, t.length))
}, goog.string.caseInsensitiveEquals = function(e, t) {
    return e.toLowerCase() == t.toLowerCase()
}, goog.string.subs = function(e) {
    for (var t = e.split("%s"), o = "", n = Array.prototype.slice.call(arguments, 1); n.length && 1 < t.length;) o += t.shift() + n.shift();
    return o + t.join("%s")
}, goog.string.collapseWhitespace = function(e) {
    return e.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
}, goog.string.isEmpty = function(e) {
    return /^[\s\xa0]*$/.test(e)
}, goog.string.isEmptySafe = function(e) {
    return goog.string.isEmpty(goog.string.makeSafe(e))
}, goog.string.isBreakingWhitespace = function(e) {
    return !/[^\t\n\r ]/.test(e)
}, goog.string.isAlpha = function(e) {
    return !/[^a-zA-Z]/.test(e)
}, goog.string.isNumeric = function(e) {
    return !/[^0-9]/.test(e)
}, goog.string.isAlphaNumeric = function(e) {
    return !/[^a-zA-Z0-9]/.test(e)
}, goog.string.isSpace = function(e) {
    return " " == e
}, goog.string.isUnicodeChar = function(e) {
    return 1 == e.length && e >= " " && "~" >= e || e >= "\x80" && "\ufffd" >= e
}, goog.string.stripNewlines = function(e) {
    return e.replace(/(\r\n|\r|\n)+/g, " ")
}, goog.string.canonicalizeNewlines = function(e) {
    return e.replace(/(\r\n|\r|\n)/g, "\n")
}, goog.string.normalizeWhitespace = function(e) {
    return e.replace(/\xa0|\s/g, " ")
}, goog.string.normalizeSpaces = function(e) {
    return e.replace(/\xa0|[ \t]+/g, " ")
}, goog.string.collapseBreakingSpaces = function(e) {
    return e.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}, goog.string.trim = function(e) {
    return e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}, goog.string.trimLeft = function(e) {
    return e.replace(/^[\s\xa0]+/, "")
}, goog.string.trimRight = function(e) {
    return e.replace(/[\s\xa0]+$/, "")
}, goog.string.caseInsensitiveCompare = function(e, t) {
    var o = String(e).toLowerCase(),
        n = String(t).toLowerCase();
    return n > o ? -1 : o == n ? 0 : 1
}, goog.string.numerateCompareRegExp_ = /(\.\d+)|(\d+)|(\D+)/g, goog.string.numerateCompare = function(e, t) {
    if (e == t) return 0;
    if (!e) return -1;
    if (!t) return 1;
    for (var o = e.toLowerCase().match(goog.string.numerateCompareRegExp_), n = t.toLowerCase().match(goog.string.numerateCompareRegExp_), i = Math.min(o.length, n.length), r = 0; i > r; r++) {
        var l = o[r],
            s = n[r];
        if (l != s) return o = parseInt(l, 10), !isNaN(o) && (n = parseInt(s, 10), !isNaN(n) && o - n) ? o - n : s > l ? -1 : 1
    }
    return o.length != n.length ? o.length - n.length : t > e ? -1 : 1
}, goog.string.urlEncode = function(e) {
    return encodeURIComponent(String(e))
}, goog.string.urlDecode = function(e) {
    return decodeURIComponent(e.replace(/\+/g, " "))
}, goog.string.newLineToBr = function(e, t) {
    return e.replace(/(\r\n|\r|\n)/g, t ? "<br />" : "<br>")
}, goog.string.htmlEscape = function(e, t) {
    return t ? e.replace(goog.string.amperRe_, "&amp;").replace(goog.string.ltRe_, "&lt;").replace(goog.string.gtRe_, "&gt;").replace(goog.string.quotRe_, "&quot;").replace(goog.string.singleQuoteRe_, "&#39;") : goog.string.allRe_.test(e) ? (-1 != e.indexOf("&") && (e = e.replace(goog.string.amperRe_, "&amp;")), -1 != e.indexOf("<") && (e = e.replace(goog.string.ltRe_, "&lt;")), -1 != e.indexOf(">") && (e = e.replace(goog.string.gtRe_, "&gt;")), -1 != e.indexOf('"') && (e = e.replace(goog.string.quotRe_, "&quot;")), -1 != e.indexOf("'") && (e = e.replace(goog.string.singleQuoteRe_, "&#39;")), e) : e
}, goog.string.amperRe_ = /&/g, goog.string.ltRe_ = /</g, goog.string.gtRe_ = />/g, goog.string.quotRe_ = /"/g, goog.string.singleQuoteRe_ = /'/g, goog.string.allRe_ = /[&<>"']/, goog.string.unescapeEntities = function(e) {
    return goog.string.contains(e, "&") ? "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(e) : goog.string.unescapePureXmlEntities_(e) : e
}, goog.string.unescapeEntitiesWithDocument = function(e, t) {
    return goog.string.contains(e, "&") ? goog.string.unescapeEntitiesUsingDom_(e, t) : e
}, goog.string.unescapeEntitiesUsingDom_ = function(e, t) {
    var o, n = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"'
    };
    return o = t ? t.createElement("div") : document.createElement("div"), e.replace(goog.string.HTML_ENTITY_PATTERN_, function(e, t) {
        var i = n[e];
        if (i) return i;
        if ("#" == t.charAt(0)) {
            var r = Number("0" + t.substr(1));
            isNaN(r) || (i = String.fromCharCode(r))
        }
        return i || (o.innerHTML = e + " ", i = o.firstChild.nodeValue.slice(0, -1)), n[e] = i
    })
}, goog.string.unescapePureXmlEntities_ = function(e) {
    return e.replace(/&([^;]+);/g, function(e, t) {
        switch (t) {
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "quot":
                return '"';
            default:
                if ("#" == t.charAt(0)) {
                    var o = Number("0" + t.substr(1));
                    if (!isNaN(o)) return String.fromCharCode(o)
                }
                return e
        }
    })
}, goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g, goog.string.whitespaceEscape = function(e, t) {
    return goog.string.newLineToBr(e.replace(/  /g, " &#160;"), t)
}, goog.string.stripQuotes = function(e, t) {
    for (var o = t.length, n = 0; o > n; n++) {
        var i = 1 == o ? t : t.charAt(n);
        if (e.charAt(0) == i && e.charAt(e.length - 1) == i) return e.substring(1, e.length - 1)
    }
    return e
}, goog.string.truncate = function(e, t, o) {
    return o && (e = goog.string.unescapeEntities(e)), e.length > t && (e = e.substring(0, t - 3) + "..."), o && (e = goog.string.htmlEscape(e)), e
}, goog.string.truncateMiddle = function(e, t, o, n) {
    if (o && (e = goog.string.unescapeEntities(e)), n && e.length > t) {
        n > t && (n = t);
        var i = e.length - n;
        e = e.substring(0, t - n) + "..." + e.substring(i)
    } else e.length > t && (n = Math.floor(t / 2), i = e.length - n, e = e.substring(0, n + t % 2) + "..." + e.substring(i));
    return o && (e = goog.string.htmlEscape(e)), e
}, goog.string.specialEscapeChars_ = {
    "\x00": "\\0",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "": "\\x0B",
    '"': '\\"',
    "\\": "\\\\"
}, goog.string.jsEscapeCache_ = {
    "'": "\\'"
}, goog.string.quote = function(e) {
    if (e = String(e), e.quote) return e.quote();
    for (var t = ['"'], o = 0; o < e.length; o++) {
        var n = e.charAt(o),
            i = n.charCodeAt(0);
        t[o + 1] = goog.string.specialEscapeChars_[n] || (i > 31 && 127 > i ? n : goog.string.escapeChar(n))
    }
    return t.push('"'), t.join("")
}, goog.string.escapeString = function(e) {
    for (var t = [], o = 0; o < e.length; o++) t[o] = goog.string.escapeChar(e.charAt(o));
    return t.join("")
}, goog.string.escapeChar = function(e) {
    if (e in goog.string.jsEscapeCache_) return goog.string.jsEscapeCache_[e];
    if (e in goog.string.specialEscapeChars_) return goog.string.jsEscapeCache_[e] = goog.string.specialEscapeChars_[e];
    var t = e,
        o = e.charCodeAt(0);
    return o > 31 && 127 > o ? t = e : (256 > o ? (t = "\\x", (16 > o || o > 256) && (t += "0")) : (t = "\\u", 4096 > o && (t += "0")), t += o.toString(16).toUpperCase()), goog.string.jsEscapeCache_[e] = t
}, goog.string.toMap = function(e) {
    for (var t = {}, o = 0; o < e.length; o++) t[e.charAt(o)] = !0;
    return t
}, goog.string.contains = function(e, t) {
    return -1 != e.indexOf(t)
}, goog.string.countOf = function(e, t) {
    return e && t ? e.split(t).length - 1 : 0
}, goog.string.removeAt = function(e, t, o) {
    var n = e;
    return t >= 0 && t < e.length && o > 0 && (n = e.substr(0, t) + e.substr(t + o, e.length - t - o)), n
}, goog.string.remove = function(e, t) {
    var o = RegExp(goog.string.regExpEscape(t), "");
    return e.replace(o, "")
}, goog.string.removeAll = function(e, t) {
    var o = RegExp(goog.string.regExpEscape(t), "g");
    return e.replace(o, "")
}, goog.string.regExpEscape = function(e) {
    return String(e).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
}, goog.string.repeat = function(e, t) {
    return Array(t + 1).join(e)
}, goog.string.padNumber = function(e, t, o) {
    return e = goog.isDef(o) ? e.toFixed(o) : String(e), o = e.indexOf("."), -1 == o && (o = e.length), goog.string.repeat("0", Math.max(0, t - o)) + e
}, goog.string.makeSafe = function(e) {
    return null == e ? "" : String(e)
}, goog.string.buildString = function() {
    return Array.prototype.join.call(arguments, "")
}, goog.string.getRandomString = function() {
    return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36)
}, goog.string.compareVersions = function(e, t) {
    for (var o = 0, n = goog.string.trim(String(e)).split("."), i = goog.string.trim(String(t)).split("."), r = Math.max(n.length, i.length), l = 0; 0 == o && r > l; l++) {
        var s = n[l] || "",
            a = i[l] || "",
            g = RegExp("(\\d*)(\\D*)", "g"),
            c = RegExp("(\\d*)(\\D*)", "g");
        do {
            var u = g.exec(s) || ["", "", ""],
                h = c.exec(a) || ["", "", ""];
            if (0 == u[0].length && 0 == h[0].length) break;
            var o = 0 == u[1].length ? 0 : parseInt(u[1], 10),
                p = 0 == h[1].length ? 0 : parseInt(h[1], 10),
                o = goog.string.compareElements_(o, p) || goog.string.compareElements_(0 == u[2].length, 0 == h[2].length) || goog.string.compareElements_(u[2], h[2])
        } while (0 == o)
    }
    return o
}, goog.string.compareElements_ = function(e, t) {
    return t > e ? -1 : e > t ? 1 : 0
}, goog.string.HASHCODE_MAX_ = 4294967296, goog.string.hashCode = function(e) {
    for (var t = 0, o = 0; o < e.length; ++o) t = 31 * t + e.charCodeAt(o), t %= goog.string.HASHCODE_MAX_;
    return t
}, goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0, goog.string.createUniqueString = function() {
    return "goog_" + goog.string.uniqueStringCounter_++
}, goog.string.toNumber = function(e) {
    var t = Number(e);
    return 0 == t && goog.string.isEmpty(e) ? 0 / 0 : t
}, goog.string.isLowerCamelCase = function(e) {
    return /^[a-z]+([A-Z][a-z]*)*$/.test(e)
}, goog.string.isUpperCamelCase = function(e) {
    return /^([A-Z][a-z]*)+$/.test(e)
}, goog.string.toCamelCase = function(e) {
    return String(e).replace(/\-([a-z])/g, function(e, t) {
        return t.toUpperCase()
    })
}, goog.string.toSelectorCase = function(e) {
    return String(e).replace(/([A-Z])/g, "-$1").toLowerCase()
}, goog.string.toTitleCase = function(e, t) {
    var o = goog.isString(t) ? goog.string.regExpEscape(t) : "\\s";
    return e.replace(RegExp("(^" + (o ? "|[" + o + "]+" : "") + ")([a-z])", "g"), function(e, t, o) {
        return t + o.toUpperCase()
    })
}, goog.string.parseInt = function(e) {
    return isFinite(e) && (e = String(e)), goog.isString(e) ? /^\s*-?0x/i.test(e) ? parseInt(e, 16) : parseInt(e, 10) : 0 / 0
}, goog.string.splitLimit = function(e, t, o) {
    e = e.split(t);
    for (var n = []; o > 0 && e.length;) n.push(e.shift()), o--;
    return e.length && n.push(e.join(t)), n
}, goog.userAgent = {}, goog.userAgent.ASSUME_IE = !1, goog.userAgent.ASSUME_GECKO = !1, goog.userAgent.ASSUME_WEBKIT = !1, goog.userAgent.ASSUME_MOBILE_WEBKIT = !1, goog.userAgent.ASSUME_OPERA = !1, goog.userAgent.ASSUME_ANY_VERSION = !1, goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA, goog.userAgent.getUserAgentString = function() {
    return goog.global.navigator ? goog.global.navigator.userAgent : null
}, goog.userAgent.getNavigator = function() {
    return goog.global.navigator
}, goog.userAgent.init_ = function() {
    goog.userAgent.detectedOpera_ = !1, goog.userAgent.detectedIe_ = !1, goog.userAgent.detectedWebkit_ = !1, goog.userAgent.detectedMobile_ = !1, goog.userAgent.detectedGecko_ = !1;
    var e;
    if (!goog.userAgent.BROWSER_KNOWN_ && (e = goog.userAgent.getUserAgentString())) {
        var t = goog.userAgent.getNavigator();
        goog.userAgent.detectedOpera_ = goog.string.startsWith(e, "Opera"), goog.userAgent.detectedIe_ = !goog.userAgent.detectedOpera_ && (goog.string.contains(e, "MSIE") || goog.string.contains(e, "Trident")), goog.userAgent.detectedWebkit_ = !goog.userAgent.detectedOpera_ && goog.string.contains(e, "WebKit"), goog.userAgent.detectedMobile_ = goog.userAgent.detectedWebkit_ && goog.string.contains(e, "Mobile"), goog.userAgent.detectedGecko_ = !goog.userAgent.detectedOpera_ && !goog.userAgent.detectedWebkit_ && !goog.userAgent.detectedIe_ && "Gecko" == t.product
    }
}, goog.userAgent.BROWSER_KNOWN_ || goog.userAgent.init_(), goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.userAgent.detectedOpera_, goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.userAgent.detectedIe_, goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.userAgent.detectedGecko_, goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.userAgent.detectedWebkit_, goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.detectedMobile_, goog.userAgent.SAFARI = goog.userAgent.WEBKIT, goog.userAgent.determinePlatform_ = function() {
    var e = goog.userAgent.getNavigator();
    return e && e.platform || ""
}, goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_(), goog.userAgent.ASSUME_MAC = !1, goog.userAgent.ASSUME_WINDOWS = !1, goog.userAgent.ASSUME_LINUX = !1, goog.userAgent.ASSUME_X11 = !1, goog.userAgent.ASSUME_ANDROID = !1, goog.userAgent.ASSUME_IPHONE = !1, goog.userAgent.ASSUME_IPAD = !1, goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD, goog.userAgent.initPlatform_ = function() {
    goog.userAgent.detectedMac_ = goog.string.contains(goog.userAgent.PLATFORM, "Mac"), goog.userAgent.detectedWindows_ = goog.string.contains(goog.userAgent.PLATFORM, "Win"), goog.userAgent.detectedLinux_ = goog.string.contains(goog.userAgent.PLATFORM, "Linux"), goog.userAgent.detectedX11_ = !!goog.userAgent.getNavigator() && goog.string.contains(goog.userAgent.getNavigator().appVersion || "", "X11");
    var e = goog.userAgent.getUserAgentString();
    goog.userAgent.detectedAndroid_ = !!e && goog.string.contains(e, "Android"), goog.userAgent.detectedIPhone_ = !!e && goog.string.contains(e, "iPhone"), goog.userAgent.detectedIPad_ = !!e && goog.string.contains(e, "iPad")
}, goog.userAgent.PLATFORM_KNOWN_ || goog.userAgent.initPlatform_(), goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.userAgent.detectedMac_, goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.userAgent.detectedWindows_, goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.detectedLinux_, goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.detectedX11_, goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.userAgent.detectedAndroid_, goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.userAgent.detectedIPhone_, goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.userAgent.detectedIPad_, goog.userAgent.determineVersion_ = function() {
    var e, t = "";
    return goog.userAgent.OPERA && goog.global.opera ? (t = goog.global.opera.version, t = "function" == typeof t ? t() : t) : (goog.userAgent.GECKO ? e = /rv\:([^\);]+)(\)|;)/ : goog.userAgent.IE ? e = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : goog.userAgent.WEBKIT && (e = /WebKit\/(\S+)/), e && (t = (t = e.exec(goog.userAgent.getUserAgentString())) ? t[1] : "")), goog.userAgent.IE && (e = goog.userAgent.getDocumentMode_(), e > parseFloat(t)) ? String(e) : t
}, goog.userAgent.getDocumentMode_ = function() {
    var e = goog.global.document;
    return e ? e.documentMode : void 0
}, goog.userAgent.VERSION = goog.userAgent.determineVersion_(), goog.userAgent.compare = function(e, t) {
    return goog.string.compareVersions(e, t)
}, goog.userAgent.isVersionOrHigherCache_ = {}, goog.userAgent.isVersionOrHigher = function(e) {
    return goog.userAgent.ASSUME_ANY_VERSION || goog.userAgent.isVersionOrHigherCache_[e] || (goog.userAgent.isVersionOrHigherCache_[e] = 0 <= goog.string.compareVersions(goog.userAgent.VERSION, e))
}, goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher, goog.userAgent.isDocumentModeOrHigher = function(e) {
    return goog.userAgent.IE && goog.userAgent.DOCUMENT_MODE >= e
}, goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher, goog.userAgent.DOCUMENT_MODE = function() {
    var e = goog.global.document;
    return e && goog.userAgent.IE ? goog.userAgent.getDocumentMode_() || ("CSS1Compat" == e.compatMode ? parseInt(goog.userAgent.VERSION, 10) : 5) : void 0
}();
var INLINE_ROW = -1;
Blockly.BlockSvg = function(e) {
    this.block_ = e;
    var t = {
        "block-id": e.id
    };
    e.htmlId && (t.id = e.htmlId), this.svgGroup_ = Blockly.createSvgElement("g", t, null), this.initChildren(), this.forcedInputWidths = {}
}, Blockly.BlockSvg.prototype.initChildren = function() {
    this.svgPathDark_ = Blockly.createSvgElement("path", {
        "class": "blocklyPathDark",
        transform: "translate(1, 1)",
        "fill-rule": "evenodd"
    }, this.svgGroup_), this.svgPath_ = Blockly.createSvgElement("path", {
        "class": "blocklyPath",
        "fill-rule": "evenodd"
    }, this.svgGroup_), this.block_.getFillPattern() && (this.svgPathFill_ = Blockly.createSvgElement("path", {
        "class": "blocklyPath"
    }, this.svgGroup_)), this.svgPathLight_ = Blockly.createSvgElement("path", {
        "class": "blocklyPathLight"
    }, this.svgGroup_), this.svgPath_.tooltip = this.block_, Blockly.Tooltip.bindMouseEvents(this.svgPath_), this.updateMovable()
}, Blockly.BlockSvg.DISABLED_COLOUR = "#808080", Blockly.BlockSvg.prototype.init = function() {
    var e = this.block_;
    this.updateColour();
    for (var t, o = 0; t = e.inputList[o]; o++) t.init();
    e.mutator && e.mutator.createIcon()
}, Blockly.BlockSvg.prototype.updateMovable = function() {
    this.block_.isMovable() ? (Blockly.addClass_(this.svgGroup_, "blocklyDraggable"), Blockly.removeClass_(this.svgGroup_, "blocklyUndraggable")) : (Blockly.removeClass_(this.svgGroup_, "blocklyDraggable"), Blockly.addClass_(this.svgGroup_, "blocklyUndraggable")), this.updateColour()
}, Blockly.BlockSvg.prototype.grayOut = function(e) {
    e ? (Blockly.addClass_(this.svgGroup_, "blocklyUndeletable"), Blockly.removeClass_(this.svgGroup_, "blocklyDeletable")) : (Blockly.addClass_(this.svgGroup_, "blocklyDeletable"), Blockly.removeClass_(this.svgGroup_, "blocklyUndeletable")), this.updateColour()
}, Blockly.BlockSvg.prototype.getRootElement = function() {
    return this.svgGroup_
};
var BS = Blockly.BlockSvg;
BS.SEP_SPACE_X = 10, BS.SEP_SPACE_Y = 10, BS.INLINE_PADDING_Y = 5, BS.MIN_BLOCK_Y = 25, BS.TAB_HEIGHT = 20, BS.TAB_WIDTH = 8, BS.NOTCH_WIDTH = 30, BS.CORNER_RADIUS = 8, BS.TITLE_HEIGHT = 18, BS.DISTANCE_45_INSIDE = (1 - Math.SQRT1_2) * (BS.CORNER_RADIUS - 1) + 1, BS.DISTANCE_45_OUTSIDE = (1 - Math.SQRT1_2) * (BS.CORNER_RADIUS + 1) - 1, BS.NOTCH_PATH_WIDTH = 15, BS.JAGGED_TEETH = "l 8,0 0,4 8,4 -16,8 8,4", BS.JAGGED_TEETH_HEIGHT = 20, BS.TAB_PATH_DOWN = "v 5 c 0,10 -" + BS.TAB_WIDTH + ",-8 -" + BS.TAB_WIDTH + ",7.5 s " + BS.TAB_WIDTH + ",-2.5 " + BS.TAB_WIDTH + ",7.5", BS.TAB_PATH_DOWN_HIGHLIGHT_RTL = "v 6.5 m -" + .98 * BS.TAB_WIDTH + ",2.5 q -" + .05 * BS.TAB_WIDTH + ",10 " + .27 * BS.TAB_WIDTH + ",10 m " + .71 * BS.TAB_WIDTH + ",-2.5 v 1.5", BS.TOP_LEFT_CORNER_START = "m 0," + BS.CORNER_RADIUS, BS.TOP_LEFT_CORNER_START_HIGHLIGHT_RTL = "m " + BS.DISTANCE_45_INSIDE + "," + BS.DISTANCE_45_INSIDE, BS.TOP_LEFT_CORNER_START_HIGHLIGHT_LTR = "m 1," + (BS.CORNER_RADIUS - 1), BS.TOP_LEFT_CORNER = "A " + BS.CORNER_RADIUS + "," + BS.CORNER_RADIUS + " 0 0,1 " + BS.CORNER_RADIUS + ",0", BS.TOP_LEFT_CORNER_HIGHLIGHT = "A " + (BS.CORNER_RADIUS - 1) + "," + (BS.CORNER_RADIUS - 1) + " 0 0,1 " + BS.CORNER_RADIUS + ",1", BS.INNER_BOTTOM_LEFT_CORNER = "a " + BS.CORNER_RADIUS + "," + BS.CORNER_RADIUS + " 0 0,0 " + BS.CORNER_RADIUS + "," + BS.CORNER_RADIUS, BS.INNER_TOP_LEFT_CORNER_HIGHLIGHT_RTL = "a " + (BS.CORNER_RADIUS + 1) + "," + (BS.CORNER_RADIUS + 1) + " 0 0,0 " + (-BS.DISTANCE_45_OUTSIDE - 1) + "," + (BS.CORNER_RADIUS - BS.DISTANCE_45_OUTSIDE), BS.INNER_BOTTOM_LEFT_CORNER_HIGHLIGHT_RTL = "a " + (BS.CORNER_RADIUS + 1) + "," + (BS.CORNER_RADIUS + 1) + " 0 0,0 " + (BS.CORNER_RADIUS + 1) + "," + (BS.CORNER_RADIUS + 1), BS.INNER_BOTTOM_LEFT_CORNER_HIGHLIGHT_LTR = "a " + (BS.CORNER_RADIUS + 1) + "," + (BS.CORNER_RADIUS + 1) + " 0 0,0 " + (BS.CORNER_RADIUS - BS.DISTANCE_45_OUTSIDE) + "," + (BS.DISTANCE_45_OUTSIDE + 1), Blockly.BlockSvg.prototype.getPadding = function() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
}, Blockly.BlockSvg.prototype.dispose = function() {
    goog.dom.removeNode(this.svgGroup_), this.block_ = this.svgPathDark_ = this.svgPathLight_ = this.svgPath_ = this.svgGroup_ = null
}, Blockly.BlockSvg.prototype.disposeUiEffect = function() {
    Blockly.playAudio("delete");
    var e = this.block_.blockSpace.blockSpaceEditor.svg_,
        t = Blockly.getSvgXY_(this.svgGroup_, e),
        o = this.svgGroup_.cloneNode(!0);
    o.translateX_ = t.x, o.translateY_ = t.y, o.setAttribute("transform", "translate(" + o.translateX_ + "," + o.translateY_ + ")"), e.appendChild(o), 0 <= navigator.userAgent.indexOf("MSIE") || 0 <= navigator.userAgent.indexOf("Trident") ? (o.style.display = "inline", o.bBox_ = {
        x: o.getBBox().x,
        y: o.getBBox().y,
        width: o.scrollWidth,
        height: o.scrollHeight
    }) : o.bBox_ = o.getBBox(), o.startDate_ = new Date, Blockly.BlockSvg.disposeUiStep_(o)
}, Blockly.BlockSvg.disposeUiStep_ = function(e) {
    var t = (new Date - e.startDate_) / 150;
    if (t > 1) goog.dom.removeNode(e);
    else {
        var o = e.translateX_ + oppositeIfRTL(e.bBox_.width / 2 * t);
        e.setAttribute("transform", "translate(" + (o + ", " + (e.translateY_ + e.bBox_.height * t)) + ") scale(" + (1 - t) + ")"), window.setTimeout(function() {
            Blockly.BlockSvg.disposeUiStep_(e)
        }, 10)
    }
}, Blockly.BlockSvg.prototype.connectionUiEffect = function() {
    Blockly.playAudio("click");
    var e = Blockly.getSvgXY_(this.svgGroup_, this.block_.blockSpace.blockSpaceEditor.svg_);
    this.block_.outputConnection ? (e.x += oppositeIfRTL(-3), e.y += 13) : this.block_.previousConnection && (e.x += oppositeIfRTL(23), e.y += 3), e = Blockly.createSvgElement("circle", {
        cx: e.x,
        cy: e.y,
        r: 0,
        fill: "none",
        stroke: "#888",
        "stroke-width": 10
    }, this.block_.blockSpace.blockSpaceEditor.svg_), e.startDate_ = new Date, Blockly.BlockSvg.connectionUiStep_(e)
}, Blockly.BlockSvg.connectionUiStep_ = function(e) {
    var t = (new Date - e.startDate_) / 150;
    t > 1 ? goog.dom.removeNode(e) : (e.setAttribute("r", 25 * t), e.style.opacity = 1 - t, window.setTimeout(function() {
        Blockly.BlockSvg.connectionUiStep_(e)
    }, 10))
}, Blockly.BlockSvg.prototype.updateColour = function() {
    if (!this.block_.disabled) {
        var e;
        e = this.block_.shouldBeGrayedOut() ? BS.DISABLED_COLOUR : this.block_.getHexColour(), this.updateToColour_(e)
    }
}, Blockly.BlockSvg.prototype.updateToColour_ = function(e) {
    var t = goog.color.hexToRgb(e),
        o = goog.color.lighten(t, .3),
        t = goog.color.darken(t, .4);
    this.svgPathLight_.setAttribute("stroke", goog.color.rgbArrayToHex(o)), this.svgPathDark_.setAttribute("fill", goog.color.rgbArrayToHex(t)), this.svgPath_.setAttribute("fill", e), (e = this.block_.getFillPattern()) && this.svgPathFill_.setAttribute("fill", "url(#" + e + ")")
}, Blockly.BlockSvg.prototype.updateDisabled = function() {
    this.block_.disabled || this.block_.getInheritedDisabled() ? (Blockly.addClass_(this.svgGroup_, "blocklyDisabled"), this.svgPath_.setAttribute("fill", "url(#blocklyDisabledPattern)")) : (Blockly.removeClass_(this.svgGroup_, "blocklyDisabled"), this.updateColour());
    for (var e, t = this.block_.getChildren(), o = 0; e = t[o]; o++) e.svg_.updateDisabled()
}, Blockly.BlockSvg.prototype.addSelect = function() {
    Blockly.addClass_(this.svgGroup_, "blocklySelected"), this.svgGroup_.parentNode.appendChild(this.svgGroup_)
}, Blockly.BlockSvg.prototype.addSelectNoMove = function() {
    Blockly.addClass_(this.svgGroup_, "blocklySelected")
}, Blockly.BlockSvg.prototype.removeSelect = function() {
    Blockly.removeClass_(this.svgGroup_, "blocklySelected")
}, Blockly.BlockSvg.prototype.addDragging = function() {
    Blockly.addClass_(this.svgGroup_, "blocklyDragging")
}, Blockly.BlockSvg.prototype.removeDragging = function() {
    Blockly.removeClass_(this.svgGroup_, "blocklyDragging")
}, Blockly.BlockSvg.prototype.addSpotlight = function() {
    Blockly.addClass_(this.svgGroup_, "blocklySpotlight")
}, Blockly.BlockSvg.prototype.removeSpotlight = function() {
    Blockly.removeClass_(this.svgGroup_, "blocklySpotlight")
}, Blockly.BlockSvg.prototype.render = function(e) {
    this.block_.rendered = !0;
    for (var t = oppositeIfRTL(BS.SEP_SPACE_X), o = this.block_.getIcons(), n = 0; n < o.length; n++) t = o[n].renderIcon(t);
    t -= oppositeIfRTL(BS.SEP_SPACE_X), o = this.renderCompute_(t), this.renderDraw_(t, o), e || ((e = this.block_.getParent()) ? e.render() : Blockly.fireUiEvent(window, "resize"))
}, Blockly.BlockSvg.prototype.renderTitles_ = function(e, t, o) {
    for (var n, i = t, r = 0; n = e[r]; r++) {
        var l = n.getSize(),
            s = t;
        Blockly.RTL && (s = -(t + l.width)), n.getRootElement().setAttribute("transform", "translate(" + s + ", " + (o + n.getBufferY()) + ")"), l.width && (t += l.width + BS.SEP_SPACE_X)
    }
    return t - i
}, Blockly.BlockSvg.prototype.renderCompute_ = function(e) {
    var t = this.block_.inputList,
        o = [];
    o.rightEdge = e + 2 * BS.SEP_SPACE_X, (this.block_.previousConnection || this.block_.nextConnection) && (o.rightEdge = Math.max(o.rightEdge, BS.NOTCH_WIDTH + BS.SEP_SPACE_X));
    for (var n, i, r = 0, l = 0, s = !1, a = !1, g = !1, c = 0; i = t[c]; c++)
        if (i.isVisible()) {
            0 !== c && i.isInline() || (n = [], n.type = i.type, n.height = 0, o.push(n)), (0 < n.length || i.isInline()) && (n.type = INLINE_ROW), 0 === n.length && i.type === Blockly.FUNCTIONAL_INPUT && (n.type = INLINE_ROW), n.push(i);
            var u = inputRenderSize(i);
            i.renderHeight = u.height, i.renderWidth = u.width, n.height = Math.max(n.height, i.renderHeight), u = inputTitleRenderSize(i, 0 === c ? e : 0), i.titleWidth = u.width, n.height = Math.max(n.height, u.height), n.type != INLINE_ROW && (n.type == Blockly.NEXT_STATEMENT ? (a = !0, l = Math.max(l, i.titleWidth)) : (n.type === Blockly.INPUT_VALUE || n.type === Blockly.FUNCTIONAL_INPUT ? s = !0 : n.type === Blockly.DUMMY_INPUT && (g = !0), r = Math.max(r, i.titleWidth)))
        }
    for (thickenInlineRows(o), o.statementEdge = 2 * BS.SEP_SPACE_X + l, a && (o.rightEdge = Math.max(o.rightEdge, o.statementEdge + BS.NOTCH_WIDTH)), s ? o.rightEdge = Math.max(o.rightEdge, r + 2 * BS.SEP_SPACE_X + BS.TAB_WIDTH) : g && (o.rightEdge = Math.max(o.rightEdge, r + 2 * BS.SEP_SPACE_X)), o.hasValue = s, o.hasStatement = a, o.hasDummy = g, o.rightEdgeWithoutInline = o.rightEdge, c = 0; n = o[c]; c++) n.type === INLINE_ROW && (o.rightEdge = Math.max(o.rightEdge, this.widthInlineRow(n)));
    return o
}, Blockly.BlockSvg.prototype.widthInlineRow = function(e) {
    for (var t, o = BS.SEP_SPACE_X, n = 0; t = e[n]; n++) o += BS.SEP_SPACE_X + this.inputWidthToOccupy_(t);
    return o
}, Blockly.BlockSvg.prototype.renderDraw_ = function(e, t) {
    if (this.block_.outputConnection) this.squareBottomLeftCorner_ = this.squareTopLeftCorner_ = !0;
    else {
        if (this.squareBottomLeftCorner_ = this.squareTopLeftCorner_ = !1, this.block_.previousConnection) {
            var o = this.block_.previousConnection.targetBlock();
            o && o.nextConnection && o.nextConnection.targetConnection == this.block_.previousConnection && (this.squareTopLeftCorner_ = !0)
        }
        this.block_.nextConnection && (o = this.block_.nextConnection.targetBlock()) && o.previousConnection && o.previousConnection.targetConnection == this.block_.nextConnection && (this.squareBottomLeftCorner_ = !0)
    }
    for (this.block_.previousConnection && this.block_.previousConnection.type === Blockly.FUNCTIONAL_OUTPUT && (this.squareBottomLeftCorner_ = this.squareTopLeftCorner_ = !0), o = 0; o < this.block_.inputList.length; o++) this.block_.inputList[o].type === Blockly.FUNCTIONAL_INPUT && (this.squareBottomLeftCorner_ = this.squareTopLeftCorner_ = !0);
    var n = this.block_.getRelativeToSurfaceXY(),
        o = {
            core: [],
            inline: [],
            highlight: [],
            highlightInline: [],
            curX: e,
            curY: 0
        };
    this.renderDrawTop_(o, t.rightEdge, n), this.renderDrawRight_(o, n, t, e), this.renderDrawBottom_(o, n), this.renderDrawLeft_(o), n = o.core.join(" ") + "\n" + o.inline.join(" "), this.svgPath_.setAttribute("d", n), this.svgPathFill_ && this.svgPathFill_.setAttribute("d", n), this.svgPathDark_.setAttribute("d", n), n = o.highlight.join(" ") + "\n" + o.highlightInline.join(" "), this.svgPathLight_.setAttribute("d", n), Blockly.RTL && (this.svgPath_.setAttribute("transform", "scale(-1 1)"), this.svgPathLight_.setAttribute("transform", "scale(-1 1)"), this.svgPathDark_.setAttribute("transform", "translate(1,1) scale(-1 1)"))
}, Blockly.BlockSvg.prototype.renderDrawTop_ = function(e, t, o) {
    if (this.squareTopLeftCorner_ ? (e.core.push("m 0,0"), e.highlight.push("m 1,1")) : (e.core.push(BS.TOP_LEFT_CORNER_START), e.highlight.push(Blockly.RTL ? BS.TOP_LEFT_CORNER_START_HIGHLIGHT_RTL : BS.TOP_LEFT_CORNER_START_HIGHLIGHT_LTR), e.core.push(BS.TOP_LEFT_CORNER), e.highlight.push(BS.TOP_LEFT_CORNER_HIGHLIGHT)), e.core.push(brokenControlPointWorkaround()), this.block_.previousConnection) {
        var n = this.block_.previousConnection.getNotchPaths();
        e.core.push("H", BS.NOTCH_WIDTH - BS.NOTCH_PATH_WIDTH), e.highlight.push("H", BS.NOTCH_WIDTH - BS.NOTCH_PATH_WIDTH), e.core.push(n.left), e.highlight.push(n.leftHighlight), n = o.x + oppositeIfRTL(BS.NOTCH_WIDTH), this.block_.previousConnection.moveTo(n, o.y)
    }
    e.core.push("H", t), e.highlight.push("H", t + (Blockly.RTL ? -1 : 0)), e.curX = t
}, Blockly.BlockSvg.prototype.renderDrawRight_ = function(e, t, o, n) {
    for (var i, r = 0; i = o[r]; r++) e.curX = BS.SEP_SPACE_X, 0 === r && (e.curX += oppositeIfRTL(n)), e.highlight.push("M", o.rightEdge - 1 + "," + (e.curY + 1)), this.block_.isCollapsed() ? this.renderDrawRightCollapsed_(e, i) : i.type === INLINE_ROW ? this.renderDrawRightInline_(e, o, r, t) : i.type === Blockly.INPUT_VALUE ? this.renderDrawRightInputValue_(e, o, r, t) : i.type === Blockly.DUMMY_INPUT ? this.renderDrawRightDummyInput_(e, o, r) : i.type === Blockly.NEXT_STATEMENT && this.renderDrawRightNextStatement_(e, o, r, t), e.curY += i.height;
    o.length || (e.curY = BS.MIN_BLOCK_Y, e.core.push("V", e.curY), Blockly.RTL && e.highlight.push("V", e.curY - 1))
}, Blockly.BlockSvg.prototype.renderDrawRightCollapsed_ = function(e, t) {
    e.curX += this.renderTitles_(t[0].titleRow, e.curX, e.curY + BS.TITLE_HEIGHT), e.core.push(BS.JAGGED_TEETH), e.highlight.push(Blockly.RTL ? "l 8,0 0,3.8 7,3.2 m -14.5,9 l 8,4" : "h 8");
    var o = t.height - BS.JAGGED_TEETH_HEIGHT;
    e.core.push("v", o), Blockly.RTL && e.highlight.push("v", o - 2)
}, Blockly.BlockSvg.prototype.renderDrawRightInputValue_ = function(e, t, o, n) {
    var i = t[o];
    o = i[0];
    var r = e.curX,
        l = e.curY + BS.TITLE_HEIGHT;
    if (o.align != Blockly.ALIGN_LEFT) {
        var s = t.rightEdge - o.titleWidth - BS.TAB_WIDTH - 2 * BS.SEP_SPACE_X;
        o.align === Blockly.ALIGN_RIGHT ? r += s : o.align === Blockly.ALIGN_CENTRE && (r += (s + r) / 2)
    }
    e.curX += this.renderTitles_(o.titleRow, r, l), e.core.push(BS.TAB_PATH_DOWN), e.core.push("v", i.height - BS.TAB_HEIGHT), Blockly.RTL ? (e.highlight.push(BS.TAB_PATH_DOWN_HIGHLIGHT_RTL), e.highlight.push("v", i.height - BS.TAB_HEIGHT)) : (e.highlight.push("M", t.rightEdge - 4.2 + "," + (e.curY + BS.TAB_HEIGHT - .4)), e.highlight.push("l", .42 * BS.TAB_WIDTH + ",-1.8")), t = n.x + oppositeIfRTL(t.rightEdge + 1), o.connection.moveTo(t, n.y + e.curY), o.connection.targetConnection && o.connection.tighten_()
}, Blockly.BlockSvg.prototype.renderDrawRightDummyInput_ = function(e, t, o) {
    o = t[o];
    var n = o[0],
        i = e.curX,
        r = e.curY + BS.TITLE_HEIGHT;
    if (n.align === Blockly.ALIGN_RIGHT) {
        var l = t.rightEdge - n.titleWidth - 2 * BS.SEP_SPACE_X;
        t.hasValue && (l -= BS.TAB_WIDTH), i += l
    }
    n.align === Blockly.ALIGN_CENTRE && (i = (t.rightEdge - n.titleWidth) / 2), this.renderTitles_(n.titleRow, i, r), e.core.push("v", o.height), Blockly.RTL && e.highlight.push("v", o.height - 2)
}, Blockly.BlockSvg.prototype.renderDrawRightNextStatement_ = function(e, t, o, n) {
    var i;
    i = t[o];
    var r = i[0];
    0 === o && (e.core.push("v", BS.SEP_SPACE_Y), Blockly.RTL && e.highlight.push("v", BS.SEP_SPACE_Y - 1), e.curY += BS.SEP_SPACE_Y);
    var l = e.curX,
        s = e.curY + BS.TITLE_HEIGHT;
    if (r.align != Blockly.ALIGN_LEFT) {
        var a = t.statementEdge - r.titleWidth - 2 * BS.SEP_SPACE_X;
        r.align == Blockly.ALIGN_RIGHT ? l += a : r.align == Blockly.ALIGN_CENTRE && (l += (a + l) / 2)
    }
    a = r.connection.getNotchPaths(), this.renderTitles_(r.titleRow, l, s), e.curX = t.statementEdge + BS.NOTCH_WIDTH, e.core.push("H", e.curX), e.core.push(this.innerTopLeftCorner(a.right)), e.core.push("v", i.height - 2 * BS.CORNER_RADIUS), e.core.push(BS.INNER_BOTTOM_LEFT_CORNER), e.core.push("H", t.rightEdgeWithoutInline), Blockly.RTL ? (e.highlight.push("M", e.curX - BS.NOTCH_WIDTH + BS.DISTANCE_45_OUTSIDE + "," + (e.curY + BS.DISTANCE_45_OUTSIDE)), e.highlight.push(BS.INNER_TOP_LEFT_CORNER_HIGHLIGHT_RTL), e.highlight.push("v", i.height - 2 * BS.CORNER_RADIUS), e.highlight.push(BS.INNER_BOTTOM_LEFT_CORNER_HIGHLIGHT_RTL), e.highlight.push("H", t.rightEdgeWithoutInline - 1)) : (e.highlight.push("M", e.curX - BS.NOTCH_WIDTH + BS.DISTANCE_45_OUTSIDE + "," + (e.curY + i.height - BS.DISTANCE_45_OUTSIDE)), e.highlight.push(BS.INNER_BOTTOM_LEFT_CORNER_HIGHLIGHT_LTR), e.highlight.push("H", t.rightEdgeWithoutInline)), i = n.x + oppositeIfRTL(e.curX), r.connection.moveTo(i, n.y + e.curY + 1), r.connection.targetConnection && r.connection.tighten_(), (o === t.length - 1 || t[o + 1].type === Blockly.NEXT_STATEMENT) && (e.core.push("v", BS.SEP_SPACE_Y), Blockly.RTL && e.highlight.push("v", BS.SEP_SPACE_Y - 1), e.curY += BS.SEP_SPACE_Y)
}, Blockly.BlockSvg.prototype.renderDrawRightInline_ = function(e, t, o, n) {
    var i, r;
    o = t[o];
    var l = !1,
        s = o[0].align;
    if (o[0].type === Blockly.FUNCTIONAL_INPUT) {
        var a = BS.SEP_SPACE_X * (o.length - 1);
        o.forEach(function(e) {
            a += this.inputWidthToOccupy_(e)
        }, this), t.rightEdge > a && s === Blockly.ALIGN_CENTRE && (e.curX = (t.rightEdge - a) / 2)
    }
    for (var g, s = 0; g = o[s]; s++) i = e.curX, r = e.curY + BS.TITLE_HEIGHT, o.thicker && (r += BS.INLINE_PADDING_Y), e.curX += this.renderTitles_(g.titleRow, i, r), g.type === Blockly.INPUT_VALUE ? (e.curX += g.renderWidth + BS.SEP_SPACE_X, e.inline.push("M", e.curX - BS.SEP_SPACE_X + "," + (e.curY + BS.INLINE_PADDING_Y)), e.inline.push("h", BS.TAB_WIDTH - g.renderWidth), e.inline.push(BS.TAB_PATH_DOWN), e.inline.push("v", g.renderHeight - BS.TAB_HEIGHT), e.inline.push("h", g.renderWidth - BS.TAB_WIDTH), e.inline.push("z"), Blockly.RTL ? (e.highlightInline.push("M", e.curX - BS.SEP_SPACE_X + BS.TAB_WIDTH - g.renderWidth - 1 + "," + (e.curY + BS.INLINE_PADDING_Y + 1)), e.highlightInline.push(BS.TAB_PATH_DOWN_HIGHLIGHT_RTL), e.highlightInline.push("v", g.renderHeight - BS.TAB_HEIGHT + 2), e.highlightInline.push("h", g.renderWidth - BS.TAB_WIDTH)) : (e.highlightInline.push("M", e.curX - BS.SEP_SPACE_X + 1 + "," + (e.curY + BS.INLINE_PADDING_Y + 1)), e.highlightInline.push("v", g.renderHeight), e.highlightInline.push("h", BS.TAB_WIDTH - g.renderWidth), e.highlightInline.push("M", e.curX - g.renderWidth - BS.SEP_SPACE_X + 3.8 + "," + (e.curY + BS.INLINE_PADDING_Y + BS.TAB_HEIGHT - .4)), e.highlightInline.push("l", .42 * BS.TAB_WIDTH + ",-1.8")), i = n.x + oppositeIfRTL(e.curX + BS.TAB_WIDTH - BS.SEP_SPACE_X - g.renderWidth + 1), r = n.y + e.curY + BS.INLINE_PADDING_Y, g.connection.moveTo(i, r), g.connection.targetConnection && g.connection.tighten_()) : g.type === Blockly.FUNCTIONAL_INPUT ? (l = !0, this.renderDrawRightInlineFunctional_(e, g, n)) : g.type != Blockly.DUMMY_INPUT && (e.curX += g.renderWidth + BS.SEP_SPACE_X);
    e.curX = Math.max(e.curX, t.rightEdge), e.core.push("H", e.curX), l || e.highlight.push("H", e.curX + (Blockly.RTL ? -1 : 0)), e.core.push("v", o.height), Blockly.RTL && e.highlight.push("v", o.height - 2)
}, Blockly.BlockSvg.prototype.inputWidthToOccupy_ = function(e) {
    return e.renderWidth + (e.extraSpace || 0)
}, Blockly.BlockSvg.prototype.renderDrawRightInlineFunctional_ = function() {
    throw "Only supported for functional blocks"
}, Blockly.BlockSvg.prototype.renderDrawBottom_ = function(e, t) {
    if (e.core.push(brokenControlPointWorkaround()), this.block_.nextConnection) {
        var o = this.block_.nextConnection.getNotchPaths();
        e.core.push("H", BS.NOTCH_WIDTH + " " + o.right), o = t.x + oppositeIfRTL(BS.NOTCH_WIDTH), this.block_.nextConnection.moveTo(o, t.y + e.curY + 1), this.block_.nextConnection.targetConnection && this.block_.nextConnection.tighten_()
    }
    this.squareBottomLeftCorner_ ? (e.core.push("H 0"), Blockly.RTL || e.highlight.push("M", "1," + e.curY)) : (e.core.push("H", BS.CORNER_RADIUS), e.core.push("a", BS.CORNER_RADIUS + "," + BS.CORNER_RADIUS + " 0 0,1 -" + BS.CORNER_RADIUS + ",-" + BS.CORNER_RADIUS), Blockly.RTL || (e.highlight.push("M", BS.DISTANCE_45_INSIDE + "," + (e.curY - BS.DISTANCE_45_INSIDE)), e.highlight.push("A", BS.CORNER_RADIUS - 1 + "," + (BS.CORNER_RADIUS - 1) + " 0 0,1 1," + (e.curY - BS.CORNER_RADIUS))))
}, Blockly.BlockSvg.prototype.renderDrawLeft_ = function(e) {
    this.block_.outputConnection ? (e.core.push("V", BS.TAB_HEIGHT), e.core.push("c 0,-10 -" + BS.TAB_WIDTH + ",8 -" + BS.TAB_WIDTH + ",-7.5 s " + BS.TAB_WIDTH + ",2.5 " + BS.TAB_WIDTH + ",-7.5"), Blockly.RTL ? (e.highlight.push("M", -.3 * BS.TAB_WIDTH + ",8.9"), e.highlight.push("l", -.45 * BS.TAB_WIDTH + ",-2.1")) : (e.highlight.push("V", BS.TAB_HEIGHT - 1), e.highlight.push("m", -.92 * BS.TAB_WIDTH + ",-1 q " + -.19 * BS.TAB_WIDTH + ",-5.5 0,-11"), e.highlight.push("m", .92 * BS.TAB_WIDTH + ",1 V 1 H 2"))) : Blockly.RTL || e.highlight.push("V", this.squareTopLeftCorner_ ? 1 : BS.CORNER_RADIUS), e.core.push("z")
}, Blockly.BlockSvg.prototype.setVisible = function(e) {
    this.svgGroup_.style.display = e ? "" : "none"
}, Blockly.BlockSvg.prototype.innerTopLeftCorner = function(e) {
    return e + " h -" + (BS.NOTCH_WIDTH - BS.NOTCH_PATH_WIDTH - BS.CORNER_RADIUS) + " a " + BS.CORNER_RADIUS + "," + BS.CORNER_RADIUS + " 0 0,0 -" + BS.CORNER_RADIUS + "," + BS.CORNER_RADIUS
}, Blockly.Field = function(e) {
    this.sourceBlock_ = null, this.fieldGroup_ = Blockly.createSvgElement("g", {}, null), this.borderRect_ = Blockly.createSvgElement("rect", {
        rx: 4,
        ry: 4,
        x: -Blockly.BlockSvg.SEP_SPACE_X / 2,
        y: -12,
        height: 16
    }, this.fieldGroup_), this.textElement_ = Blockly.createSvgElement("text", {
        "class": "blocklyText"
    }, this.fieldGroup_), this.size_ = {
        height: 25,
        width: 0
    }, this.setText(e), this.visible_ = !0
}, Blockly.Field.prototype.getParentEditor_ = function() {
    return this.sourceBlock_.blockSpace.blockSpaceEditor
}, Blockly.Field.prototype.getRootSVGElement_ = function() {
    return this.getParentEditor_().svg_
}, Blockly.Field.NBSP = "\xa0", Blockly.Field.prototype.EDITABLE = !0, Blockly.Field.prototype.init = function(e) {
    if (this.sourceBlock_) throw "Field has already been initialized once.";
    this.sourceBlock_ = e, this.updateEditable(), e.getSvgRoot().appendChild(this.fieldGroup_), this.mouseDownWrapper_ = Blockly.bindEvent_(this.fieldGroup_, "mousedown", this, this.onMouseDown_), this.mouseUpWrapper_ = Blockly.bindEvent_(this.fieldGroup_, "mouseup", this, this.onMouseUp_), this.clickWrapper_ = Blockly.bindEvent_(this.fieldGroup_, "click", this, this.onClick_), this.setText(null)
}, Blockly.Field.prototype.dispose = function() {
    this.mouseDownWrapper_ && (Blockly.unbindEvent_(this.mouseDownWrapper_), this.mouseDownWrapper_ = null), this.mouseUpWrapper_ && (Blockly.unbindEvent_(this.mouseUpWrapper_), this.mouseUpWrapper_ = null), this.clickWrapper_ && (Blockly.unbindEvent_(this.clickWrapper_), this.clickWrapper_ = null), this.sourceBlock_ = null, goog.dom.removeNode(this.fieldGroup_), this.borderRect_ = this.textElement_ = this.fieldGroup_ = null
}, Blockly.Field.prototype.updateEditable = function() {
    this.EDITABLE && (this.sourceBlock_.isEditable() ? (Blockly.addClass_(this.fieldGroup_, "blocklyEditableText"), Blockly.removeClass_(this.fieldGroup_, "blocklyNoNEditableText"), this.fieldGroup_.style.cursor = this.CURSOR) : (Blockly.addClass_(this.fieldGroup_, "blocklyNonEditableText"), Blockly.removeClass_(this.fieldGroup_, "blocklyEditableText"), this.fieldGroup_.style.cursor = ""))
}, Blockly.Field.prototype.isVisible = function() {
    return this.visible_
}, Blockly.Field.prototype.setVisible = function(e) {
    this.visible_ = e, this.getRootElement().style.display = e ? "block" : "none"
}, Blockly.Field.prototype.getRootElement = function() {
    return this.fieldGroup_
}, Blockly.Field.prototype.updateWidth_ = function() {
    var e;
    e = this.textElement_.getComputedTextLength ? this.textElement_.getComputedTextLength() : 1, this.borderRect_ && this.borderRect_.setAttribute("width", e + Blockly.BlockSvg.SEP_SPACE_X), this.size_.width = e
}, Blockly.Field.prototype.getSize = function() {
    return this.size_.width || this.updateWidth_(), this.size_
}, Blockly.Field.prototype.getBufferY = function() {
    return 0
}, Blockly.Field.prototype.getText = function() {
    return this.text_
}, Blockly.Field.prototype.setText = function(e) {
    null !== e && e !== this.text_ && (this.text_ = e, goog.dom.removeChildren(this.textElement_), e = e.replace(/\s/g, Blockly.Field.NBSP), e || (e = Blockly.Field.NBSP), e = document.createTextNode(e), this.textElement_.appendChild(e), this.size_.width = 0, this.refreshRender())
}, Blockly.Field.prototype.refreshRender = function() {
    this.sourceBlock_ && this.sourceBlock_.rendered && (this.sourceBlock_.render(), this.sourceBlock_.bumpNeighbours_(), this.sourceBlock_.blockSpace.fireChangeEvent())
}, Blockly.Field.prototype.getValue = function() {
    return this.getText()
}, Blockly.Field.prototype.setValue = function(e) {
    this.setText(e)
}, Blockly.Field.prototype.isKeyboardInputField_ = function() {
    return !1
}, Blockly.Field.prototype.showEditorOnClick_ = function() {
    return !(!this.isKeyboardInputField_() || !goog.userAgent.ANDROID && !goog.userAgent.MOBILE)
}, Blockly.Field.prototype.onMouseDown_ = function(e) {
    this.showEditorOnClick_() && e.stopPropagation()
}, Blockly.Field.prototype.onMouseUp_ = function(e) {
    this.showEditorOnClick_() || Blockly.isRightButton(e) || Blockly.Block.isFreelyDragging() || this.sourceBlock_.isEditable() && this.showEditor_()
}, Blockly.Field.prototype.onClick_ = function(e) {
    this.showEditorOnClick_() && (Blockly.isRightButton(e) || this.sourceBlock_.isEditable() && this.showEditor_())
}, Blockly.Field.prototype.setTooltip = function() {}, Blockly.FieldImage = function(e, t, o) {
    if (!t && !o) {
        var n = this;
        o = Blockly.ImageDimensionCache.getCachedDimensionsOrDefaultAndUpdate(e, function(e, t) {
            n.isDestroyed_() || n.updateDimensions_(e, t)
        }), t = o.width, o = o.height
    }
    this.initializeWithImage_(e, t, o)
}, goog.inherits(Blockly.FieldImage, Blockly.Field), Blockly.FieldImage.prototype.isDestroyed_ = function() {
    return !this.imageElement_
}, Blockly.FieldImage.IMAGE_LOADING_WIDTH = 40, Blockly.FieldImage.IMAGE_LOADING_HEIGHT = 40, Blockly.FieldImage.IMAGE_OFFSET_Y = 6 - Blockly.BlockSvg.TITLE_HEIGHT, Blockly.FieldImage.BELOW_IMAGE_PADDING = 10, Blockly.FieldImage.prototype.initializeWithImage_ = function(e, t, o) {
    this.sourceBlock_ = null, o = Number(o), t = Number(t), this.size_ = {
        height: o + Blockly.FieldImage.BELOW_IMAGE_PADDING,
        width: t
    }, this.fieldGroup_ = Blockly.createSvgElement("g", {}, null), this.imageElement_ = Blockly.createSvgElement("image", {
        height: o + "px",
        width: t + "px",
        y: Blockly.FieldImage.IMAGE_OFFSET_Y
    }, this.fieldGroup_), this.setText(e), goog.userAgent.GECKO && (this.clickRectElement_ = Blockly.createSvgElement("rect", {
        height: o + "px",
        width: t + "px",
        y: Blockly.FieldImage.IMAGE_OFFSET_Y,
        "fill-opacity": 0
    }, this.fieldGroup_))
}, Blockly.FieldImage.prototype.updateDimensions_ = function(e, t) {
    this.size_ = {
        height: t + Blockly.FieldImage.BELOW_IMAGE_PADDING,
        width: e
    }, this.imageElement_.setAttribute("width", e + "px"), this.imageElement_.setAttribute("height", t + "px"), this.clickRectElement_ && (this.clickRectElement_.setAttribute("width", e + "px"), this.clickRectElement_.setAttribute("height", t + "px")), this.refreshRender()
}, Blockly.FieldImage.prototype.clickRectElement_ = null, Blockly.FieldImage.prototype.EDITABLE = !1, Blockly.FieldImage.prototype.init = function(e) {
    if (this.sourceBlock_) throw "Image has already been initialized once.";
    this.sourceBlock_ = e, e.getSvgRoot().appendChild(this.fieldGroup_), e = this.getClickTarget(), e.tooltip = this.sourceBlock_, Blockly.Tooltip && Blockly.Tooltip.bindMouseEvents(e)
}, Blockly.FieldImage.prototype.dispose = function() {
    goog.dom.removeNode(this.fieldGroup_), this.clickRectElement_ = this.imageElement_ = this.fieldGroup_ = null
}, Blockly.FieldImage.prototype.getClickTarget = function() {
    return this.clickRectElement_ || this.imageElement_
}, Blockly.FieldImage.prototype.setTooltip = function(e) {
    this.getClickTarget().tooltip = e
}, Blockly.FieldImage.prototype.getText = function() {
    return this.src_
}, Blockly.FieldImage.prototype.setText = function(e) {
    null !== e && (this.src_ = e, this.imageElement_.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", goog.isString(e) ? e : ""))
}, Blockly.FieldRectangularDropdown = function(e) {
    this.choices_ = e, e = this.choices_[0], this.value_ = e[Blockly.FieldRectangularDropdown.TUPLE_VALUE_INDEX], e = e[Blockly.FieldRectangularDropdown.TUPLE_PREVIEW_DATA_INDEX], this.size_ = {
        width: Blockly.FieldImage.IMAGE_LOADING_WIDTH,
        height: Blockly.FieldImage.IMAGE_LOADING_HEIGHT
    }, this.buildDOMElements_(), this.updatePreviewData_(e)
}, goog.inherits(Blockly.FieldRectangularDropdown, Blockly.Field), Blockly.FieldRectangularDropdown.TUPLE_PREVIEW_DATA_INDEX = 0, Blockly.FieldRectangularDropdown.TUPLE_VALUE_INDEX = 1, Blockly.FieldRectangularDropdown.BORDER_MARGIN = 2, Blockly.FieldRectangularDropdown.DROPDOWN_MENU_BORDER = 2, Blockly.FieldRectangularDropdown.MENU_CSS_CLASS = "blocklyRectangularDropdownMenu", Blockly.FieldRectangularDropdown.BORDER_OFFSET_X = -Blockly.FieldRectangularDropdown.BORDER_MARGIN, Blockly.FieldRectangularDropdown.BORDER_OFFSET_Y = Blockly.FieldImage.IMAGE_OFFSET_Y - Blockly.FieldRectangularDropdown.BORDER_MARGIN, Blockly.FieldRectangularDropdown.BORDER_RECTANGLE_RADIUS = 4, Blockly.FieldRectangularDropdown.BORDER_EXTRA_ARROW_WIDTH = 30, Blockly.FieldRectangularDropdown.DROPDOWN_ARROW_WIDTH = 20, Blockly.FieldRectangularDropdown.DROPDOWN_ARROW_HEIGHT = 23, Blockly.FieldRectangularDropdown.DROPDOWN_ARROW_X_OFFSET_FROM_PREVIEW_RIGHT = Blockly.FieldRectangularDropdown.BORDER_EXTRA_ARROW_WIDTH / 2 - Blockly.FieldRectangularDropdown.DROPDOWN_ARROW_WIDTH / 2, Blockly.FieldRectangularDropdown.DROPDOWN_ARROW_Y_OFFSET_FROM_PREVIEW_MIDDLE = -Blockly.FieldRectangularDropdown.DROPDOWN_ARROW_HEIGHT / 2 - 4, Blockly.FieldRectangularDropdown.CHECKMARK_OVERHANG = 0, Blockly.FieldRectangularDropdown.DOWN_ARROW_CHARACTER = "\u25bc", Blockly.FieldRectangularDropdown.UP_ARROW_CHARACTER = "\u25b2", Blockly.FieldRectangularDropdown.prototype.CURSOR = "default", Blockly.FieldRectangularDropdown.prototype.EDITABLE = !0, Blockly.FieldRectangularDropdown.prototype.getOptions = function() {
    return this.choices_
}, Blockly.FieldRectangularDropdown.prototype.buildDOMElements_ = function() {
    this.fieldGroup_ = Blockly.createSvgElement("g", {}, null), this.dropdownBorderRectElement_ = Blockly.createSvgElement("rect", {
        rx: Blockly.FieldRectangularDropdown.BORDER_RECTANGLE_RADIUS,
        ry: Blockly.FieldRectangularDropdown.BORDER_RECTANGLE_RADIUS,
        x: Blockly.FieldRectangularDropdown.BORDER_OFFSET_X,
        y: Blockly.FieldRectangularDropdown.BORDER_OFFSET_Y,
        height: Blockly.FieldImage.IMAGE_LOADING_HEIGHT,
        "class": "fieldRectangularDropdownBackdrop"
    }, this.fieldGroup_), this.addPreviewElementTo_(this.fieldGroup_), this.createDropdownArrow_(), this.clickRectElement_ = Blockly.createSvgElement("rect", {
        height: Blockly.FieldImage.IMAGE_LOADING_HEIGHT + "px",
        width: Blockly.FieldImage.IMAGE_LOADING_WIDTH + "px",
        y: Blockly.FieldImage.IMAGE_OFFSET_Y,
        "fill-opacity": 0
    }, this.fieldGroup_)
}, Blockly.FieldRectangularDropdown.prototype.addPreviewElementTo_ = function() {
    throw Error("FieldRectangularDropdown.prototype.addPreviewElementTo_ not implemented")
}, Blockly.FieldRectangularDropdown.prototype.createDropdownArrow_ = function() {
    this.dropdownArrowText_ = Blockly.createSvgElement("text", {
        "class": "blocklyText"
    }, this.fieldGroup_), this.arrowCharacter_ = Blockly.createSvgElement("tspan", {
        "class": "blocklyArrow blocklyRectangularDropdownArrow"
    }, this.dropdownArrowText_), this.arrowCharacter_.appendChild(document.createTextNode(Blockly.FieldRectangularDropdown.DOWN_ARROW_CHARACTER))
}, Blockly.FieldRectangularDropdown.prototype.updatePreviewData_ = function() {
    throw Error("FieldRectangularDropdown.prototype.updatePreviewData_ not implemented")
}, Blockly.FieldRectangularDropdown.prototype.updateDimensions_ = function(e, t) {
    this.previewSize_ = {
        width: e,
        height: t
    };
    var o = t + 2 * Blockly.FieldRectangularDropdown.BORDER_MARGIN,
        n = e + 2 * Blockly.FieldRectangularDropdown.BORDER_MARGIN + Blockly.FieldRectangularDropdown.BORDER_EXTRA_ARROW_WIDTH;
    this.updatePreviewDimensions_(e, t), this.clickRectElement_.setAttribute("width", n + "px"), this.clickRectElement_.setAttribute("height", o + "px"), this.dropdownBorderRectElement_.setAttribute("width", n + "px"), this.dropdownBorderRectElement_.setAttribute("height", o + "px");
    var i = t / 2 - Blockly.FieldImage.IMAGE_OFFSET_Y;
    this.dropdownArrowText_.setAttribute("x", e + Blockly.FieldRectangularDropdown.DROPDOWN_ARROW_X_OFFSET_FROM_PREVIEW_RIGHT), this.dropdownArrowText_.setAttribute("y", i + Blockly.FieldRectangularDropdown.DROPDOWN_ARROW_Y_OFFSET_FROM_PREVIEW_MIDDLE), this.size_ = {
        height: o + Blockly.FieldImage.BELOW_IMAGE_PADDING,
        width: n
    }, this.refreshRender()
}, Blockly.FieldRectangularDropdown.prototype.updatePreviewDimensions_ = function() {
    throw Error("FieldRectangularDropdown.prototype.updatePreviewDimensions_ not implemented")
}, Blockly.FieldRectangularDropdown.prototype.createDropdownPreviewElement_ = function() {
    throw Error("FieldRectangularDropdown.prototype.updatePreviewDimensions_ not implemented")
}, Blockly.FieldRectangularDropdown.prototype.pointArrowUp_ = function() {
    this.setArrowDirection_(!0)
}, Blockly.FieldRectangularDropdown.prototype.pointArrowDown_ = function() {
    this.setArrowDirection_(!1)
}, Blockly.FieldRectangularDropdown.prototype.setArrowDirection_ = function(e) {
    this.arrowCharacter_.firstChild.nodeValue = e ? Blockly.FieldRectangularDropdown.UP_ARROW_CHARACTER : Blockly.FieldRectangularDropdown.DOWN_ARROW_CHARACTER
}, Blockly.FieldRectangularDropdown.prototype.showMenu_ = function() {
    Blockly.WidgetDiv.show(this, this.generateMenuClosedHandler_()), this.menu_ = this.createMenuWithChoices_(this.choices_), goog.events.listen(this.menu_, goog.ui.Component.EventType.ACTION, this.generateMenuItemSelectedHandler_()), this.addPositionAndShowMenu(this.menu_), this.pointArrowUp_()
}, Blockly.FieldRectangularDropdown.prototype.menuAlreadyShowing_ = function() {
    return this.menu_ && Blockly.WidgetDiv.isOwner(this) && Blockly.WidgetDiv.isVisible()
}, Blockly.FieldRectangularDropdown.prototype.createMenuWithChoices_ = function(e) {
    for (var t = new goog.ui.Menu, o = 0; o < e.length; o++) {
        var n = e[o][Blockly.FieldRectangularDropdown.TUPLE_VALUE_INDEX],
            i = n === this.value_,
            r = this.createDropdownPreviewElement_(e[o][Blockly.FieldRectangularDropdown.TUPLE_PREVIEW_DATA_INDEX]),
            r = new goog.ui.MenuItem(r);
        r.setValue(n), n = 1 === chooseNumberOfColumns(e.length), i && n ? t.addItemAt(r, 0) : t.addItem(r)
    }
    return t
}, Blockly.FieldRectangularDropdown.prototype.generateMenuItemSelectedHandler_ = function() {
    var e = this;
    return function(t) {
        (t = t.target) && (t = t.getValue(), null !== t && e.setValue(t)), Blockly.WidgetDiv.hideIfOwner(e)
    }
}, Blockly.FieldRectangularDropdown.prototype.generateMenuClosedHandler_ = function() {
    var e = this;
    return function() {
        e.pointArrowDown_()
    }
}, Blockly.FieldRectangularDropdown.prototype.addPositionAndShowMenu = function(e) {
    var t = goog.dom.getViewportSize(),
        o = goog.style.getViewportPageOffset(document),
        n = Blockly.WidgetDiv.DIV;
    n.style.visibility = "hidden", e.render(n), e.setAllowAutoFocus(!0);
    var i = e.getElement();
    Blockly.addClass_(i, "blocklyDropdownMenu"), Blockly.addClass_(i, Blockly.FieldRectangularDropdown.MENU_CSS_CLASS), Blockly.addClass_(i, "goog-menu-noaccel");
    var r = this.calculateBackdropColourWithoutAlpha_();
    i.style.borderColor = r, i.style.background = r, e = chooseNumberOfColumns(e.getChildCount()), (r = e > 1) && (i.style.width = (this.previewSize_.width + 4) * e + 4 + "px", Blockly.addClass_(i, "blocklyGridDropdownMenu")), i = this.calculateMenuPosition_(this.previewElement_, r), Blockly.WidgetDiv.position(i.x, i.y, t, o), n.style.visibility = "visible"
}, Blockly.FieldRectangularDropdown.prototype.calculateMenuPosition_ = function(e, t) {
    var o = Blockly.getAbsoluteXY_(e, this.getRootSVGElement_()),
        o = {
            x: o.x - Blockly.FieldRectangularDropdown.DROPDOWN_MENU_BORDER,
            y: o.y - Blockly.FieldRectangularDropdown.DROPDOWN_MENU_BORDER
        };
    return t && (o.y += this.previewSize_.height + Blockly.FieldRectangularDropdown.DROPDOWN_MENU_BORDER), o
}, Blockly.FieldRectangularDropdown.prototype.getValue = function() {
    return this.value_
}, Blockly.FieldRectangularDropdown.prototype.setValue = function(e) {
    this.value_ = e, this.refreshPreview_()
}, Blockly.FieldRectangularDropdown.prototype.refreshPreview_ = function() {
    this.updatePreviewData_(this.getCurrentPreviewData_())
}, Blockly.FieldRectangularDropdown.prototype.getCurrentPreviewData_ = function() {
    return this.getPreviewDataForValue_(this.value_)
}, Blockly.FieldRectangularDropdown.prototype.getPreviewDataForValue_ = function(e) {
    for (var t = this.choices_, o = 0; o < t.length; o++)
        if (t[o][Blockly.FieldRectangularDropdown.TUPLE_VALUE_INDEX] == e) return t[o][Blockly.FieldRectangularDropdown.TUPLE_PREVIEW_DATA_INDEX];
    throw 'Preview data for given value "' + e + '" not found'
}, Blockly.FieldRectangularDropdown.prototype.init = function(e) {
    if (this.sourceBlock_) throw "Field has already been initialized once.";
    this.sourceBlock_ = e, this.sourceBlock_.getSvgRoot().appendChild(this.fieldGroup_), this.mouseUpWrapper_ = Blockly.bindEvent_(this.getClickTarget(), "mouseup", this, this.onMouseUp_), this.mouseDownWrapper_ = Blockly.bindEvent_(this.getClickTarget(), "mousedown", this, this.onMouseDown_), this.updateDropdownArrowColour_()
}, Blockly.FieldRectangularDropdown.prototype.updateDropdownArrowColour_ = function() {
    if (!this.sourceBlock_) throw "Cannot update dropdown arrow colour before added to block";
    this.arrowCharacter_.style.fill = this.sourceBlock_.getHexColour()
}, Blockly.FieldRectangularDropdown.prototype.dispose = function() {
    Blockly.WidgetDiv.hideIfOwner(this), this.mouseDownWrapper_ && (Blockly.unbindEvent_(this.mouseDownWrapper_), this.mouseDownWrapper_ = null), Blockly.FieldRectangularDropdown.superClass_.dispose.call(this)
}, Blockly.FieldRectangularDropdown.prototype.onMouseUp_ = function(e) {
    this.doNotOpenEditorNextMouseUp_ ? this.doNotOpenEditorNextMouseUp_ = !1 : Blockly.isRightButton(e) || Blockly.Block.isFreelyDragging() || !this.sourceBlock_.isEditable() || this.showMenu_()
}, Blockly.FieldRectangularDropdown.prototype.onMouseDown_ = function() {
    this.menuAlreadyShowing_() && (this.doNotOpenEditorNextMouseUp_ = !0)
}, Blockly.FieldRectangularDropdown.prototype.getClickTarget = function() {
    return this.clickRectElement_
}, Blockly.FieldRectangularDropdown.prototype.sendClickRectToFront_ = function() {
    this.fieldGroup_.appendChild(this.clickRectElement_)
}, Blockly.FieldRectangularDropdown.prototype.calculateBackdropColourWithoutAlpha_ = function() {
    var e = this.sourceBlock_.getHexColour();
    return Blockly.mixColoursWithForegroundOpacity("#ffffff", e, .6)
}, Blockly.FieldColourDropdown = function(e, t, o) {
    e = this.convertColourChoicesToTuples_(e), Blockly.FieldColourDropdown.superClass_.constructor.call(this, e), this.updateDimensions_(t, o)
}, goog.inherits(Blockly.FieldColourDropdown, Blockly.FieldRectangularDropdown), Blockly.FieldColourDropdown.prototype.convertColourChoicesToTuples_ = function(e) {
    for (var t = [], o = 0; o < e.length; o++) {
        var n = e[o],
            i = [];
        i[Blockly.FieldRectangularDropdown.TUPLE_PREVIEW_DATA_INDEX] = n, i[Blockly.FieldRectangularDropdown.TUPLE_VALUE_INDEX] = n, t.push(i)
    }
    return t
}, Blockly.FieldColourDropdown.prototype.addPreviewElementTo_ = function(e) {
    this.previewElement_ = Blockly.createSvgElement("rect", {
        y: Blockly.FieldImage.IMAGE_OFFSET_Y,
        height: Blockly.FieldImage.IMAGE_LOADING_HEIGHT + "px",
        width: Blockly.FieldImage.IMAGE_LOADING_WIDTH + "px"
    }, e)
}, Blockly.FieldColourDropdown.prototype.createDropdownPreviewElement_ = function(e) {
    var t = document.createElement("div");
    return t.style.backgroundColor = e, t.style.width = this.previewSize_.width + "px", t.style.height = this.previewSize_.height + "px", t
}, Blockly.FieldColourDropdown.prototype.updatePreviewData_ = function(e) {
    this.previewElement_.setAttribute("fill", e)
}, Blockly.FieldColourDropdown.prototype.updatePreviewDimensions_ = function(e, t) {
    this.previewElement_.setAttribute("width", e + "px"), this.previewElement_.setAttribute("height", t + "px")
}, Blockly.Names = function(e) {
    if (this.reservedDict_ = {}, e) {
        e = e.split(",");
        for (var t = 0; t < e.length; t++) this.reservedDict_[Blockly.Names.PREFIX_ + e[t]] = !0
    }
    this.reset()
}, Blockly.Names.PREFIX_ = "$_", Blockly.Names.prototype.reset = function() {
    this.db_ = {}, this.dbSpecificType_ = {}, this.dbReverse_ = {}
}, Blockly.Names.prototype.getName = function(e, t, o) {
    var n = Blockly.Names.PREFIX_ + e.toLowerCase() + "_" + t;
    return n in this.db_ ? this.db_[n] : (e = this.getDistinctName(e, t), this.db_[n] = e, o && (this.dbSpecificType_[n] = o), e)
}, Blockly.Names.prototype.checkSpecificType = function(e, t, o) {
    return e = Blockly.Names.PREFIX_ + e.toLowerCase() + "_" + t, e in this.dbSpecificType_ && this.dbSpecificType_[e] === o
}, Blockly.Names.prototype.getDistinctName = function(e) {
    for (var t = this.safeName_(e), o = ""; this.dbReverse_[Blockly.Names.PREFIX_ + t + o] || Blockly.Names.PREFIX_ + t + o in this.reservedDict_;) o = o ? o + 1 : 2;
    return t += o, this.dbReverse_[Blockly.Names.PREFIX_ + t] = !0, t
}, Blockly.Names.prototype.safeName_ = function(e) {
    return e ? (e = encodeURI(e.replace(/ /g, "_")).replace(/[^\w]/g, "_"), -1 != "0123456789".indexOf(e[0]) && (e = "my_" + e)) : e = "unnamed", e
}, Blockly.Names.equals = function(e, t) {
    return e.toLowerCase() == t.toLowerCase()
}, goog.dom = {}, goog.dom.NodeType = {
    ELEMENT: 1,
    ATTRIBUTE: 2,
    TEXT: 3,
    CDATA_SECTION: 4,
    ENTITY_REFERENCE: 5,
    ENTITY: 6,
    PROCESSING_INSTRUCTION: 7,
    COMMENT: 8,
    DOCUMENT: 9,
    DOCUMENT_TYPE: 10,
    DOCUMENT_FRAGMENT: 11,
    NOTATION: 12
}, goog.debug = {}, goog.debug.Error = function(e) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, goog.debug.Error);
    else {
        var t = Error().stack;
        t && (this.stack = t)
    }
    e && (this.message = String(e))
}, goog.inherits(goog.debug.Error, Error), goog.debug.Error.prototype.name = "CustomError", goog.asserts = {}, goog.asserts.ENABLE_ASSERTS = goog.DEBUG, goog.asserts.AssertionError = function(e, t) {
    t.unshift(e), goog.debug.Error.call(this, goog.string.subs.apply(null, t)), t.shift(), this.messagePattern = e
}, goog.inherits(goog.asserts.AssertionError, goog.debug.Error), goog.asserts.AssertionError.prototype.name = "AssertionError", goog.asserts.doAssertFailure_ = function(e, t, o, n) {
    var i = "Assertion failed";
    if (o) var i = i + (": " + o),
        r = n;
    else e && (i += ": " + e, r = t);
    throw new goog.asserts.AssertionError("" + i, r || [])
}, goog.asserts.assert = function(e, t) {
    return goog.asserts.ENABLE_ASSERTS && !e && goog.asserts.doAssertFailure_("", null, t, Array.prototype.slice.call(arguments, 2)), e
}, goog.asserts.fail = function(e) {
    if (goog.asserts.ENABLE_ASSERTS) throw new goog.asserts.AssertionError("Failure" + (e ? ": " + e : ""), Array.prototype.slice.call(arguments, 1))
}, goog.asserts.assertNumber = function(e, t) {
    return goog.asserts.ENABLE_ASSERTS && !goog.isNumber(e) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
}, goog.asserts.assertString = function(e, t) {
    return goog.asserts.ENABLE_ASSERTS && !goog.isString(e) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
}, goog.asserts.assertFunction = function(e, t) {
    return goog.asserts.ENABLE_ASSERTS && !goog.isFunction(e) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
}, goog.asserts.assertObject = function(e, t) {
    return goog.asserts.ENABLE_ASSERTS && !goog.isObject(e) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
}, goog.asserts.assertArray = function(e, t) {
    return goog.asserts.ENABLE_ASSERTS && !goog.isArray(e) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
}, goog.asserts.assertBoolean = function(e, t) {
    return goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(e) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
}, goog.asserts.assertElement = function(e, t) {
    return !goog.asserts.ENABLE_ASSERTS || goog.isObject(e) && e.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
}, goog.asserts.assertInstanceof = function(e, t, o) {
    return !goog.asserts.ENABLE_ASSERTS || e instanceof t || goog.asserts.doAssertFailure_("instanceof check failed.", null, o, Array.prototype.slice.call(arguments, 3)), e
}, goog.asserts.assertObjectPrototypeIsIntact = function() {
    for (var e in Object.prototype) goog.asserts.fail(e + " should not be enumerable in Object.prototype.")
}, goog.events = {}, goog.events.EventId = function(e) {
    this.id = e
}, goog.events.EventId.prototype.toString = function() {
    return this.id
}, goog.events.Listenable = function() {}, goog.events.Listenable.IMPLEMENTED_BY_PROP = "closure_listenable_" + (1e6 * Math.random() | 0), goog.events.Listenable.addImplementation = function(e) {
    e.prototype[goog.events.Listenable.IMPLEMENTED_BY_PROP] = !0
}, goog.events.Listenable.isImplementedBy = function(e) {
    try {
        return !(!e || !e[goog.events.Listenable.IMPLEMENTED_BY_PROP])
    } catch (t) {
        return !1
    }
}, goog.events.ListenableKey = function() {}, goog.events.ListenableKey.counter_ = 0, goog.events.ListenableKey.reserveKey = function() {
    return ++goog.events.ListenableKey.counter_
}, goog.events.Listener = function(e, t, o, n, i, r) {
    goog.events.Listener.ENABLE_MONITORING && (this.creationStack = Error().stack), this.listener = e, this.proxy = t, this.src = o, this.type = n, this.capture = !!i, this.handler = r, this.key = goog.events.ListenableKey.reserveKey(), this.removed = this.callOnce = !1
}, goog.events.Listener.ENABLE_MONITORING = !1, goog.events.Listener.prototype.markAsRemoved = function() {
    this.removed = !0, this.handler = this.src = this.proxy = this.listener = null
}, goog.object = {}, goog.object.forEach = function(e, t, o) {
    for (var n in e) t.call(o, e[n], n, e)
}, goog.object.filter = function(e, t, o) {
    var n, i = {};
    for (n in e) t.call(o, e[n], n, e) && (i[n] = e[n]);
    return i
}, goog.object.map = function(e, t, o) {
    var n, i = {};
    for (n in e) i[n] = t.call(o, e[n], n, e);
    return i
}, goog.object.some = function(e, t, o) {
    for (var n in e)
        if (t.call(o, e[n], n, e)) return !0;
    return !1
}, goog.object.every = function(e, t, o) {
    for (var n in e)
        if (!t.call(o, e[n], n, e)) return !1;
    return !0
}, goog.object.getCount = function(e) {
    var t, o = 0;
    for (t in e) o++;
    return o
}, goog.object.getAnyKey = function(e) {
    for (var t in e) return t
}, goog.object.getAnyValue = function(e) {
    for (var t in e) return e[t]
}, goog.object.contains = function(e, t) {
    return goog.object.containsValue(e, t)
}, goog.object.getValues = function(e) {
    var t, o = [],
        n = 0;
    for (t in e) o[n++] = e[t];
    return o
}, goog.object.getKeys = function(e) {
    var t, o = [],
        n = 0;
    for (t in e) o[n++] = t;
    return o
}, goog.object.getValueByKeys = function(e, t) {
    for (var o = goog.isArrayLike(t), n = o ? t : arguments, o = o ? 0 : 1; o < n.length && (e = e[n[o]], goog.isDef(e)); o++);
    return e
}, goog.object.containsKey = function(e, t) {
    return t in e
}, goog.object.containsValue = function(e, t) {
    for (var o in e)
        if (e[o] == t) return !0;
    return !1
}, goog.object.findKey = function(e, t, o) {
    for (var n in e)
        if (t.call(o, e[n], n, e)) return n
}, goog.object.findValue = function(e, t, o) {
    return (t = goog.object.findKey(e, t, o)) && e[t]
}, goog.object.isEmpty = function(e) {
    for (var t in e) return !1;
    return !0
}, goog.object.clear = function(e) {
    for (var t in e) delete e[t]
}, goog.object.remove = function(e, t) {
    var o;
    return (o = t in e) && delete e[t], o
}, goog.object.add = function(e, t, o) {
    if (t in e) throw Error('The object already contains the key "' + t + '"');
    goog.object.set(e, t, o)
}, goog.object.get = function(e, t, o) {
    return t in e ? e[t] : o
}, goog.object.set = function(e, t, o) {
    e[t] = o
}, goog.object.setIfUndefined = function(e, t, o) {
    return t in e ? e[t] : e[t] = o
}, goog.object.clone = function(e) {
    var t, o = {};
    for (t in e) o[t] = e[t];
    return o
}, goog.object.unsafeClone = function(e) {
    var t = goog.typeOf(e);
    if ("object" == t || "array" == t) {
        if (e.clone) return e.clone();
        var o, t = "array" == t ? [] : {};
        for (o in e) t[o] = goog.object.unsafeClone(e[o]);
        return t
    }
    return e
}, goog.object.transpose = function(e) {
    var t, o = {};
    for (t in e) o[e[t]] = t;
    return o
}, goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), goog.object.extend = function(e) {
    for (var t, o, n = 1; n < arguments.length; n++) {
        o = arguments[n];
        for (t in o) e[t] = o[t];
        for (var i = 0; i < goog.object.PROTOTYPE_FIELDS_.length; i++) t = goog.object.PROTOTYPE_FIELDS_[i], Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t])
    }
}, goog.object.create = function() {
    var e = arguments.length;
    if (1 == e && goog.isArray(arguments[0])) return goog.object.create.apply(null, arguments[0]);
    if (e % 2) throw Error("Uneven number of arguments");
    for (var t = {}, o = 0; e > o; o += 2) t[arguments[o]] = arguments[o + 1];
    return t
}, goog.object.createSet = function() {
    var e = arguments.length;
    if (1 == e && goog.isArray(arguments[0])) return goog.object.createSet.apply(null, arguments[0]);
    for (var t = {}, o = 0; e > o; o++) t[arguments[o]] = !0;
    return t
}, goog.object.createImmutableView = function(e) {
    var t = e;
    return Object.isFrozen && !Object.isFrozen(e) && (t = Object.create(e), Object.freeze(t)), t
}, goog.object.isImmutableView = function(e) {
    return !!Object.isFrozen && Object.isFrozen(e)
}, goog.array = {}, goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE, goog.array.ASSUME_NATIVE_FUNCTIONS = !1, goog.array.peek = function(e) {
    return e[e.length - 1]
}, goog.array.ARRAY_PROTOTYPE_ = Array.prototype, goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.indexOf) ? function(e, t, o) {
    return goog.asserts.assert(null != e.length), goog.array.ARRAY_PROTOTYPE_.indexOf.call(e, t, o)
} : function(e, t, o) {
    if (o = null == o ? 0 : 0 > o ? Math.max(0, e.length + o) : o, goog.isString(e)) return goog.isString(t) && 1 == t.length ? e.indexOf(t, o) : -1;
    for (; o < e.length; o++)
        if (o in e && e[o] === t) return o;
    return -1
}, goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.lastIndexOf) ? function(e, t, o) {
    return goog.asserts.assert(null != e.length), goog.array.ARRAY_PROTOTYPE_.lastIndexOf.call(e, t, null == o ? e.length - 1 : o)
} : function(e, t, o) {
    if (o = null == o ? e.length - 1 : o, 0 > o && (o = Math.max(0, e.length + o)), goog.isString(e)) return goog.isString(t) && 1 == t.length ? e.lastIndexOf(t, o) : -1;
    for (; o >= 0; o--)
        if (o in e && e[o] === t) return o;
    return -1
}, goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.forEach) ? function(e, t, o) {
    goog.asserts.assert(null != e.length), goog.array.ARRAY_PROTOTYPE_.forEach.call(e, t, o)
} : function(e, t, o) {
    for (var n = e.length, i = goog.isString(e) ? e.split("") : e, r = 0; n > r; r++) r in i && t.call(o, i[r], r, e)
}, goog.array.forEachRight = function(e, t, o) {
    for (var n = e.length, i = goog.isString(e) ? e.split("") : e, n = n - 1; n >= 0; --n) n in i && t.call(o, i[n], n, e)
}, goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.filter) ? function(e, t, o) {
    return goog.asserts.assert(null != e.length), goog.array.ARRAY_PROTOTYPE_.filter.call(e, t, o)
} : function(e, t, o) {
    for (var n = e.length, i = [], r = 0, l = goog.isString(e) ? e.split("") : e, s = 0; n > s; s++)
        if (s in l) {
            var a = l[s];
            t.call(o, a, s, e) && (i[r++] = a)
        }
    return i
}, goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.map) ? function(e, t, o) {
    return goog.asserts.assert(null != e.length), goog.array.ARRAY_PROTOTYPE_.map.call(e, t, o)
} : function(e, t, o) {
    for (var n = e.length, i = Array(n), r = goog.isString(e) ? e.split("") : e, l = 0; n > l; l++) l in r && (i[l] = t.call(o, r[l], l, e));
    return i
}, goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.reduce) ? function(e, t, o, n) {
    return goog.asserts.assert(null != e.length), n && (t = goog.bind(t, n)), goog.array.ARRAY_PROTOTYPE_.reduce.call(e, t, o)
} : function(e, t, o, n) {
    var i = o;
    return goog.array.forEach(e, function(o, r) {
        i = t.call(n, i, o, r, e)
    }), i
}, goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.reduceRight) ? function(e, t, o, n) {
    return goog.asserts.assert(null != e.length), n && (t = goog.bind(t, n)), goog.array.ARRAY_PROTOTYPE_.reduceRight.call(e, t, o)
} : function(e, t, o, n) {
    var i = o;
    return goog.array.forEachRight(e, function(o, r) {
        i = t.call(n, i, o, r, e)
    }), i
}, goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.some) ? function(e, t, o) {
    return goog.asserts.assert(null != e.length), goog.array.ARRAY_PROTOTYPE_.some.call(e, t, o)
} : function(e, t, o) {
    for (var n = e.length, i = goog.isString(e) ? e.split("") : e, r = 0; n > r; r++)
        if (r in i && t.call(o, i[r], r, e)) return !0;
    return !1
}, goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.every) ? function(e, t, o) {
    return goog.asserts.assert(null != e.length), goog.array.ARRAY_PROTOTYPE_.every.call(e, t, o)
} : function(e, t, o) {
    for (var n = e.length, i = goog.isString(e) ? e.split("") : e, r = 0; n > r; r++)
        if (r in i && !t.call(o, i[r], r, e)) return !1;
    return !0
}, goog.array.count = function(e, t, o) {
    var n = 0;
    return goog.array.forEach(e, function(e, i, r) {
        t.call(o, e, i, r) && ++n
    }, o), n
}, goog.array.find = function(e, t, o) {
    return t = goog.array.findIndex(e, t, o), 0 > t ? null : goog.isString(e) ? e.charAt(t) : e[t]
}, goog.array.findIndex = function(e, t, o) {
    for (var n = e.length, i = goog.isString(e) ? e.split("") : e, r = 0; n > r; r++)
        if (r in i && t.call(o, i[r], r, e)) return r;
    return -1
}, goog.array.findRight = function(e, t, o) {
    return t = goog.array.findIndexRight(e, t, o), 0 > t ? null : goog.isString(e) ? e.charAt(t) : e[t]
}, goog.array.findIndexRight = function(e, t, o) {
    for (var n = e.length, i = goog.isString(e) ? e.split("") : e, n = n - 1; n >= 0; n--)
        if (n in i && t.call(o, i[n], n, e)) return n;
    return -1
}, goog.array.contains = function(e, t) {
    return 0 <= goog.array.indexOf(e, t)
}, goog.array.isEmpty = function(e) {
    return 0 == e.length
}, goog.array.clear = function(e) {
    if (!goog.isArray(e))
        for (var t = e.length - 1; t >= 0; t--) delete e[t];
    e.length = 0
}, goog.array.insert = function(e, t) {
    goog.array.contains(e, t) || e.push(t)
}, goog.array.insertAt = function(e, t, o) {
    goog.array.splice(e, o, 0, t)
}, goog.array.insertArrayAt = function(e, t, o) {
    goog.partial(goog.array.splice, e, o, 0).apply(null, t)
}, goog.array.insertBefore = function(e, t, o) {
    var n;
    2 == arguments.length || 0 > (n = goog.array.indexOf(e, o)) ? e.push(t) : goog.array.insertAt(e, t, n)
}, goog.array.remove = function(e, t) {
    var o, n = goog.array.indexOf(e, t);
    return (o = n >= 0) && goog.array.removeAt(e, n), o
}, goog.array.removeAt = function(e, t) {
    return goog.asserts.assert(null != e.length), 1 == goog.array.ARRAY_PROTOTYPE_.splice.call(e, t, 1).length
}, goog.array.removeIf = function(e, t, o) {
    return t = goog.array.findIndex(e, t, o), t >= 0 ? (goog.array.removeAt(e, t), !0) : !1
}, goog.array.concat = function() {
    return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_, arguments)
}, goog.array.toArray = function(e) {
    var t = e.length;
    if (t > 0) {
        for (var o = Array(t), n = 0; t > n; n++) o[n] = e[n];
        return o
    }
    return []
}, goog.array.clone = goog.array.toArray, goog.array.extend = function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var o, n = arguments[t];
        if (goog.isArray(n) || (o = goog.isArrayLike(n)) && Object.prototype.hasOwnProperty.call(n, "callee")) e.push.apply(e, n);
        else if (o)
            for (var i = e.length, r = n.length, l = 0; r > l; l++) e[i + l] = n[l];
        else e.push(n)
    }
}, goog.array.splice = function(e) {
    return goog.asserts.assert(null != e.length), goog.array.ARRAY_PROTOTYPE_.splice.apply(e, goog.array.slice(arguments, 1))
}, goog.array.slice = function(e, t, o) {
    return goog.asserts.assert(null != e.length), 2 >= arguments.length ? goog.array.ARRAY_PROTOTYPE_.slice.call(e, t) : goog.array.ARRAY_PROTOTYPE_.slice.call(e, t, o)
}, goog.array.removeDuplicates = function(e, t, o) {
    t = t || e;
    var n = function() {
        return goog.isObject(l) ? "o" + goog.getUid(l) : (typeof l).charAt(0) + l
    };
    o = o || n;
    for (var n = {}, i = 0, r = 0; r < e.length;) {
        var l = e[r++],
            s = o(l);
        Object.prototype.hasOwnProperty.call(n, s) || (n[s] = !0, t[i++] = l)
    }
    t.length = i
}, goog.array.binarySearch = function(e, t, o) {
    return goog.array.binarySearch_(e, o || goog.array.defaultCompare, !1, t)
}, goog.array.binarySelect = function(e, t, o) {
    return goog.array.binarySearch_(e, t, !0, void 0, o)
}, goog.array.binarySearch_ = function(e, t, o, n, i) {
    for (var r, l = 0, s = e.length; s > l;) {
        var a, g = l + s >> 1;
        a = o ? t.call(i, e[g], g, e) : t(n, e[g]), a > 0 ? l = g + 1 : (s = g, r = !a)
    }
    return r ? l : ~l
}, goog.array.sort = function(e, t) {
    e.sort(t || goog.array.defaultCompare)
}, goog.array.stableSort = function(e, t) {
    for (var o = 0; o < e.length; o++) e[o] = {
        index: o,
        value: e[o]
    };
    var n = t || goog.array.defaultCompare;
    for (goog.array.sort(e, function(e, t) {
            return n(e.value, t.value) || e.index - t.index
        }), o = 0; o < e.length; o++) e[o] = e[o].value
}, goog.array.sortObjectsByKey = function(e, t, o) {
    var n = o || goog.array.defaultCompare;
    goog.array.sort(e, function(e, o) {
        return n(e[t], o[t])
    })
}, goog.array.isSorted = function(e, t, o) {
    t = t || goog.array.defaultCompare;
    for (var n = 1; n < e.length; n++) {
        var i = t(e[n - 1], e[n]);
        if (i > 0 || 0 == i && o) return !1
    }
    return !0
}, goog.array.equals = function(e, t, o) {
    if (!goog.isArrayLike(e) || !goog.isArrayLike(t) || e.length != t.length) return !1;
    var n = e.length;
    o = o || goog.array.defaultCompareEquality;
    for (var i = 0; n > i; i++)
        if (!o(e[i], t[i])) return !1;
    return !0
}, goog.array.compare3 = function(e, t, o) {
    o = o || goog.array.defaultCompare;
    for (var n = Math.min(e.length, t.length), i = 0; n > i; i++) {
        var r = o(e[i], t[i]);
        if (0 != r) return r
    }
    return goog.array.defaultCompare(e.length, t.length)
}, goog.array.defaultCompare = function(e, t) {
    return e > t ? 1 : t > e ? -1 : 0
}, goog.array.defaultCompareEquality = function(e, t) {
    return e === t
}, goog.array.binaryInsert = function(e, t, o) {
    return o = goog.array.binarySearch(e, t, o), 0 > o ? (goog.array.insertAt(e, t, -(o + 1)), !0) : !1
}, goog.array.binaryRemove = function(e, t, o) {
    return t = goog.array.binarySearch(e, t, o), t >= 0 ? goog.array.removeAt(e, t) : !1
}, goog.array.bucket = function(e, t, o) {
    for (var n = {}, i = 0; i < e.length; i++) {
        var r = e[i],
            l = t.call(o, r, i, e);
        goog.isDef(l) && (n[l] || (n[l] = [])).push(r)
    }
    return n
}, goog.array.toObject = function(e, t, o) {
    var n = {};
    return goog.array.forEach(e, function(i, r) {
        n[t.call(o, i, r, e)] = i
    }), n
}, goog.array.range = function(e, t, o) {
    var n = [],
        i = 0,
        r = e;
    if (o = o || 1, void 0 !== t && (i = e, r = t), 0 > o * (r - i)) return [];
    if (o > 0)
        for (e = i; r > e; e += o) n.push(e);
    else
        for (e = i; e > r; e += o) n.push(e);
    return n
}, goog.array.repeat = function(e, t) {
    for (var o = [], n = 0; t > n; n++) o[n] = e;
    return o
}, goog.array.flatten = function() {
    for (var e = [], t = 0; t < arguments.length; t++) {
        var o = arguments[t];
        goog.isArray(o) ? e.push.apply(e, goog.array.flatten.apply(null, o)) : e.push(o)
    }
    return e
}, goog.array.rotate = function(e, t) {
    return goog.asserts.assert(null != e.length), e.length && (t %= e.length, t > 0 ? goog.array.ARRAY_PROTOTYPE_.unshift.apply(e, e.splice(-t, t)) : 0 > t && goog.array.ARRAY_PROTOTYPE_.push.apply(e, e.splice(0, -t))), e
}, goog.array.moveItem = function(e, t, o) {
    goog.asserts.assert(t >= 0 && t < e.length), goog.asserts.assert(o >= 0 && o < e.length), t = goog.array.ARRAY_PROTOTYPE_.splice.call(e, t, 1), goog.array.ARRAY_PROTOTYPE_.splice.call(e, o, 0, t[0])
}, goog.array.zip = function() {
    if (!arguments.length) return [];
    for (var e = [], t = 0;; t++) {
        for (var o = [], n = 0; n < arguments.length; n++) {
            var i = arguments[n];
            if (t >= i.length) return e;
            o.push(i[t])
        }
        e.push(o)
    }
}, goog.array.shuffle = function(e, t) {
    for (var o = t || Math.random, n = e.length - 1; n > 0; n--) {
        var i = Math.floor(o() * (n + 1)),
            r = e[n];
        e[n] = e[i], e[i] = r
    }
}, goog.events.ListenerMap = function(e) {
    this.src = e, this.listeners = {}, this.typeCount_ = 0
}, goog.events.ListenerMap.prototype.getTypeCount = function() {
    return this.typeCount_
}, goog.events.ListenerMap.prototype.getListenerCount = function() {
    var e, t = 0;
    for (e in this.listeners) t += this.listeners[e].length;
    return t
}, goog.events.ListenerMap.prototype.add = function(e, t, o, n, i) {
    var r = e.toString();
    e = this.listeners[r], e || (e = this.listeners[r] = [], this.typeCount_++);
    var l = goog.events.ListenerMap.findListenerIndex_(e, t, n, i);
    return l > -1 ? (t = e[l], o || (t.callOnce = !1)) : (t = new goog.events.Listener(t, null, this.src, r, !!n, i), t.callOnce = o, e.push(t)), t
}, goog.events.ListenerMap.prototype.remove = function(e, t, o, n) {
    if (e = e.toString(), !(e in this.listeners)) return !1;
    var i = this.listeners[e];
    return t = goog.events.ListenerMap.findListenerIndex_(i, t, o, n), t > -1 ? (i[t].markAsRemoved(), goog.array.removeAt(i, t), 0 == i.length && (delete this.listeners[e], this.typeCount_--), !0) : !1
}, goog.events.ListenerMap.prototype.removeByKey = function(e) {
    var t = e.type;
    if (!(t in this.listeners)) return !1;
    var o = goog.array.remove(this.listeners[t], e);
    return o && (e.markAsRemoved(), 0 == this.listeners[t].length && (delete this.listeners[t], this.typeCount_--)), o
}, goog.events.ListenerMap.prototype.removeAll = function(e) {
    e = e && e.toString();
    var t, o = 0;
    for (t in this.listeners)
        if (!e || t == e) {
            for (var n = this.listeners[t], i = 0; i < n.length; i++) ++o, n[i].markAsRemoved();
            delete this.listeners[t], this.typeCount_--
        }
    return o
}, goog.events.ListenerMap.prototype.getListeners = function(e, t) {
    var o = this.listeners[e.toString()],
        n = [];
    if (o)
        for (var i = 0; i < o.length; ++i) {
            var r = o[i];
            r.capture == t && n.push(r)
        }
    return n
}, goog.events.ListenerMap.prototype.getListener = function(e, t, o, n) {
    e = this.listeners[e.toString()];
    var i = -1;
    return e && (i = goog.events.ListenerMap.findListenerIndex_(e, t, o, n)), i > -1 ? e[i] : null
}, goog.events.ListenerMap.prototype.hasListener = function(e, t) {
    var o = goog.isDef(e),
        n = o ? e.toString() : "",
        i = goog.isDef(t);
    return goog.object.some(this.listeners, function(e) {
        for (var r = 0; r < e.length; ++r)
            if (!(o && e[r].type != n || i && e[r].capture != t)) return !0;
        return !1
    })
}, goog.events.ListenerMap.findListenerIndex_ = function(e, t, o, n) {
    for (var i = 0; i < e.length; ++i) {
        var r = e[i];
        if (!r.removed && r.listener == t && r.capture == !!o && r.handler == n) return i
    }
    return -1
}, goog.events.BrowserFeature = {
    HAS_W3C_BUTTON: !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9),
    HAS_W3C_EVENT_SUPPORT: !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9),
    SET_KEY_CODE_TO_PREVENT_DEFAULT: goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("9"),
    HAS_NAVIGATOR_ONLINE_PROPERTY: !goog.userAgent.WEBKIT || goog.userAgent.isVersionOrHigher("528"),
    HAS_HTML5_NETWORK_EVENT_SUPPORT: goog.userAgent.GECKO && goog.userAgent.isVersionOrHigher("1.9b") || goog.userAgent.IE && goog.userAgent.isVersionOrHigher("8") || goog.userAgent.OPERA && goog.userAgent.isVersionOrHigher("9.5") || goog.userAgent.WEBKIT && goog.userAgent.isVersionOrHigher("528"),
    HTML5_NETWORK_EVENTS_FIRE_ON_BODY: goog.userAgent.GECKO && !goog.userAgent.isVersionOrHigher("8") || goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("9"),
    TOUCH_ENABLED: "ontouchstart" in goog.global || !!(goog.global.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!goog.global.navigator || !goog.global.navigator.msMaxTouchPoints)
}, goog.debug.entryPointRegistry = {}, goog.debug.EntryPointMonitor = function() {}, goog.debug.entryPointRegistry.refList_ = [], goog.debug.entryPointRegistry.monitors_ = [], goog.debug.entryPointRegistry.monitorsMayExist_ = !1, goog.debug.entryPointRegistry.register = function(e) {
    if (goog.debug.entryPointRegistry.refList_[goog.debug.entryPointRegistry.refList_.length] = e, goog.debug.entryPointRegistry.monitorsMayExist_)
        for (var t = goog.debug.entryPointRegistry.monitors_, o = 0; o < t.length; o++) e(goog.bind(t[o].wrap, t[o]))
}, goog.debug.entryPointRegistry.monitorAll = function(e) {
    goog.debug.entryPointRegistry.monitorsMayExist_ = !0;
    for (var t = goog.bind(e.wrap, e), o = 0; o < goog.debug.entryPointRegistry.refList_.length; o++) goog.debug.entryPointRegistry.refList_[o](t);
    goog.debug.entryPointRegistry.monitors_.push(e)
}, goog.debug.entryPointRegistry.unmonitorAllIfPossible = function(e) {
    var t = goog.debug.entryPointRegistry.monitors_;
    goog.asserts.assert(e == t[t.length - 1], "Only the most recent monitor can be unwrapped."), e = goog.bind(e.unwrap, e);
    for (var o = 0; o < goog.debug.entryPointRegistry.refList_.length; o++) goog.debug.entryPointRegistry.refList_[o](e);
    t.length--
}, goog.events.getVendorPrefixedName_ = function(e) {
    return goog.userAgent.WEBKIT ? "webkit" + e : goog.userAgent.OPERA ? "o" + e.toLowerCase() : e.toLowerCase()
}, goog.events.EventType = {
    CLICK: "click",
    DBLCLICK: "dblclick",
    MOUSEDOWN: "mousedown",
    MOUSEUP: "mouseup",
    MOUSEOVER: "mouseover",
    MOUSEOUT: "mouseout",
    MOUSEMOVE: "mousemove",
    MOUSEENTER: "mouseenter",
    MOUSELEAVE: "mouseleave",
    SELECTSTART: "selectstart",
    KEYPRESS: "keypress",
    KEYDOWN: "keydown",
    KEYUP: "keyup",
    BLUR: "blur",
    FOCUS: "focus",
    DEACTIVATE: "deactivate",
    FOCUSIN: goog.userAgent.IE ? "focusin" : "DOMFocusIn",
    FOCUSOUT: goog.userAgent.IE ? "focusout" : "DOMFocusOut",
    CHANGE: "change",
    SELECT: "select",
    SUBMIT: "submit",
    INPUT: "input",
    PROPERTYCHANGE: "propertychange",
    DRAGSTART: "dragstart",
    DRAG: "drag",
    DRAGENTER: "dragenter",
    DRAGOVER: "dragover",
    DRAGLEAVE: "dragleave",
    DROP: "drop",
    DRAGEND: "dragend",
    TOUCHSTART: "touchstart",
    TOUCHMOVE: "touchmove",
    TOUCHEND: "touchend",
    TOUCHCANCEL: "touchcancel",
    BEFOREUNLOAD: "beforeunload",
    CONSOLEMESSAGE: "consolemessage",
    CONTEXTMENU: "contextmenu",
    DOMCONTENTLOADED: "DOMContentLoaded",
    ERROR: "error",
    HELP: "help",
    LOAD: "load",
    LOSECAPTURE: "losecapture",
    ORIENTATIONCHANGE: "orientationchange",
    READYSTATECHANGE: "readystatechange",
    RESIZE: "resize",
    SCROLL: "scroll",
    UNLOAD: "unload",
    HASHCHANGE: "hashchange",
    PAGEHIDE: "pagehide",
    PAGESHOW: "pageshow",
    POPSTATE: "popstate",
    COPY: "copy",
    PASTE: "paste",
    CUT: "cut",
    BEFORECOPY: "beforecopy",
    BEFORECUT: "beforecut",
    BEFOREPASTE: "beforepaste",
    ONLINE: "online",
    OFFLINE: "offline",
    MESSAGE: "message",
    CONNECT: "connect",
    ANIMATIONSTART: goog.events.getVendorPrefixedName_("AnimationStart"),
    ANIMATIONEND: goog.events.getVendorPrefixedName_("AnimationEnd"),
    ANIMATIONITERATION: goog.events.getVendorPrefixedName_("AnimationIteration"),
    TRANSITIONEND: goog.events.getVendorPrefixedName_("TransitionEnd"),
    POINTERDOWN: "pointerdown",
    POINTERUP: "pointerup",
    POINTERCANCEL: "pointercancel",
    POINTERMOVE: "pointermove",
    POINTEROVER: "pointerover",
    POINTEROUT: "pointerout",
    POINTERENTER: "pointerenter",
    POINTERLEAVE: "pointerleave",
    GOTPOINTERCAPTURE: "gotpointercapture",
    LOSTPOINTERCAPTURE: "lostpointercapture",
    MSGESTURECHANGE: "MSGestureChange",
    MSGESTUREEND: "MSGestureEnd",
    MSGESTUREHOLD: "MSGestureHold",
    MSGESTURESTART: "MSGestureStart",
    MSGESTURETAP: "MSGestureTap",
    MSGOTPOINTERCAPTURE: "MSGotPointerCapture",
    MSINERTIASTART: "MSInertiaStart",
    MSLOSTPOINTERCAPTURE: "MSLostPointerCapture",
    MSPOINTERCANCEL: "MSPointerCancel",
    MSPOINTERDOWN: "MSPointerDown",
    MSPOINTERENTER: "MSPointerEnter",
    MSPOINTERHOVER: "MSPointerHover",
    MSPOINTERLEAVE: "MSPointerLeave",
    MSPOINTERMOVE: "MSPointerMove",
    MSPOINTEROUT: "MSPointerOut",
    MSPOINTEROVER: "MSPointerOver",
    MSPOINTERUP: "MSPointerUp",
    TEXTINPUT: "textinput",
    COMPOSITIONSTART: "compositionstart",
    COMPOSITIONUPDATE: "compositionupdate",
    COMPOSITIONEND: "compositionend",
    EXIT: "exit",
    LOADABORT: "loadabort",
    LOADCOMMIT: "loadcommit",
    LOADREDIRECT: "loadredirect",
    LOADSTART: "loadstart",
    LOADSTOP: "loadstop",
    RESPONSIVE: "responsive",
    SIZECHANGED: "sizechanged",
    UNRESPONSIVE: "unresponsive",
    VISIBILITYCHANGE: "visibilitychange",
    STORAGE: "storage"
}, goog.disposable = {}, goog.disposable.IDisposable = function() {}, goog.Disposable = function() {
    goog.Disposable.MONITORING_MODE != goog.Disposable.MonitoringMode.OFF && (goog.Disposable.INCLUDE_STACK_ON_CREATION && (this.creationStack = Error().stack), goog.Disposable.instances_[goog.getUid(this)] = this)
}, goog.Disposable.MonitoringMode = {
    OFF: 0,
    PERMANENT: 1,
    INTERACTIVE: 2
}, goog.Disposable.MONITORING_MODE = 0, goog.Disposable.INCLUDE_STACK_ON_CREATION = !0, goog.Disposable.instances_ = {}, goog.Disposable.getUndisposedObjects = function() {
    var e, t = [];
    for (e in goog.Disposable.instances_) goog.Disposable.instances_.hasOwnProperty(e) && t.push(goog.Disposable.instances_[Number(e)]);
    return t
}, goog.Disposable.clearUndisposedObjects = function() {
    goog.Disposable.instances_ = {}
}, goog.Disposable.prototype.disposed_ = !1, goog.Disposable.prototype.isDisposed = function() {
    return this.disposed_
}, goog.Disposable.prototype.getDisposed = goog.Disposable.prototype.isDisposed, goog.Disposable.prototype.dispose = function() {
    if (!this.disposed_ && (this.disposed_ = !0, this.disposeInternal(), goog.Disposable.MONITORING_MODE != goog.Disposable.MonitoringMode.OFF)) {
        var e = goog.getUid(this);
        if (goog.Disposable.MONITORING_MODE == goog.Disposable.MonitoringMode.PERMANENT && !goog.Disposable.instances_.hasOwnProperty(e)) throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
        delete goog.Disposable.instances_[e]
    }
}, goog.Disposable.prototype.registerDisposable = function(e) {
    this.addOnDisposeCallback(goog.partial(goog.dispose, e))
}, goog.Disposable.prototype.addOnDisposeCallback = function(e, t) {
    this.onDisposeCallbacks_ || (this.onDisposeCallbacks_ = []), this.onDisposeCallbacks_.push(goog.bind(e, t))
}, goog.Disposable.prototype.disposeInternal = function() {
    if (this.onDisposeCallbacks_)
        for (; this.onDisposeCallbacks_.length;) this.onDisposeCallbacks_.shift()()
}, goog.Disposable.isDisposed = function(e) {
    return e && "function" == typeof e.isDisposed ? e.isDisposed() : !1
}, goog.dispose = function(e) {
    e && "function" == typeof e.dispose && e.dispose()
}, goog.disposeAll = function() {
    for (var e = 0, t = arguments.length; t > e; ++e) {
        var o = arguments[e];
        goog.isArrayLike(o) ? goog.disposeAll.apply(null, o) : goog.dispose(o)
    }
}, goog.events.Event = function(e, t) {
    this.type = e instanceof goog.events.EventId ? String(e) : e, this.currentTarget = this.target = t, this.defaultPrevented = this.propagationStopped_ = !1, this.returnValue_ = !0
}, goog.events.Event.prototype.disposeInternal = function() {}, goog.events.Event.prototype.dispose = function() {}, goog.events.Event.prototype.stopPropagation = function() {
    this.propagationStopped_ = !0
}, goog.events.Event.prototype.preventDefault = function() {
    this.defaultPrevented = !0, this.returnValue_ = !1
}, goog.events.Event.stopPropagation = function(e) {
    e.stopPropagation()
}, goog.events.Event.preventDefault = function(e) {
    e.preventDefault()
}, goog.reflect = {}, goog.reflect.object = function(e, t) {
    return t
}, goog.reflect.sinkValue = function(e) {
    return goog.reflect.sinkValue[" "](e), e
}, goog.reflect.sinkValue[" "] = goog.nullFunction, goog.reflect.canAccessProperty = function(e, t) {
    try {
        return goog.reflect.sinkValue(e[t]), !0
    } catch (o) {}
    return !1
}, goog.events.BrowserEvent = function(e, t) {
    goog.events.BrowserEvent.base(this, "constructor", e ? e.type : ""), this.relatedTarget = this.currentTarget = this.target = null, this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0, this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.state = null, this.platformModifierKey = !1, this.event_ = null, e && this.init(e, t)
}, goog.inherits(goog.events.BrowserEvent, goog.events.Event), goog.events.BrowserEvent.MouseButton = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
}, goog.events.BrowserEvent.IEButtonMap = [1, 4, 2], goog.events.BrowserEvent.prototype.init = function(e, t) {
    var o = this.type = e.type;
    this.target = e.target || e.srcElement, this.currentTarget = t;
    var n = e.relatedTarget;
    n ? goog.userAgent.GECKO && (goog.reflect.canAccessProperty(n, "nodeName") || (n = null)) : o == goog.events.EventType.MOUSEOVER ? n = e.fromElement : o == goog.events.EventType.MOUSEOUT && (n = e.toElement), this.relatedTarget = n, this.offsetX = goog.userAgent.WEBKIT || void 0 !== e.offsetX ? e.offsetX : e.layerX, this.offsetY = goog.userAgent.WEBKIT || void 0 !== e.offsetY ? e.offsetY : e.layerY, this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX, this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY, this.screenX = e.screenX || 0, this.screenY = e.screenY || 0, this.button = e.button, this.keyCode = e.keyCode || 0, this.charCode = e.charCode || ("keypress" == o ? e.keyCode : 0), this.ctrlKey = e.ctrlKey, this.altKey = e.altKey, this.shiftKey = e.shiftKey, this.metaKey = e.metaKey, this.platformModifierKey = goog.userAgent.MAC ? e.metaKey : e.ctrlKey, this.state = e.state, this.event_ = e, e.defaultPrevented && this.preventDefault()
}, goog.events.BrowserEvent.prototype.isButton = function(e) {
    return goog.events.BrowserFeature.HAS_W3C_BUTTON ? this.event_.button == e : "click" == this.type ? e == goog.events.BrowserEvent.MouseButton.LEFT : !!(this.event_.button & goog.events.BrowserEvent.IEButtonMap[e])
}, goog.events.BrowserEvent.prototype.isMouseActionButton = function() {
    return this.isButton(goog.events.BrowserEvent.MouseButton.LEFT) && !(goog.userAgent.WEBKIT && goog.userAgent.MAC && this.ctrlKey)
}, goog.events.BrowserEvent.prototype.stopPropagation = function() {
    goog.events.BrowserEvent.superClass_.stopPropagation.call(this), this.event_.stopPropagation ? this.event_.stopPropagation() : this.event_.cancelBubble = !0
}, goog.events.BrowserEvent.prototype.preventDefault = function() {
    goog.events.BrowserEvent.superClass_.preventDefault.call(this);
    var e = this.event_;
    if (e.preventDefault) e.preventDefault();
    else if (e.returnValue = !1, goog.events.BrowserFeature.SET_KEY_CODE_TO_PREVENT_DEFAULT) try {
        (e.ctrlKey || 112 <= e.keyCode && 123 >= e.keyCode) && (e.keyCode = -1)
    } catch (t) {}
}, goog.events.BrowserEvent.prototype.getBrowserEvent = function() {
    return this.event_
}, goog.events.BrowserEvent.prototype.disposeInternal = function() {}, goog.events.listeners_ = {}, goog.events.LISTENER_MAP_PROP_ = "closure_lm_" + (1e6 * Math.random() | 0), goog.events.onString_ = "on", goog.events.onStringMap_ = {}, goog.events.CaptureSimulationMode = {
    OFF_AND_FAIL: 0,
    OFF_AND_SILENT: 1,
    ON: 2
}, goog.events.CAPTURE_SIMULATION_MODE = 2, goog.events.listenerCountEstimate_ = 0, goog.events.listen = function(e, t, o, n, i) {
    if (goog.isArray(t)) {
        for (var r = 0; r < t.length; r++) goog.events.listen(e, t[r], o, n, i);
        return null
    }
    return o = goog.events.wrapListener(o), goog.events.Listenable.isImplementedBy(e) ? e.listen(t, o, n, i) : goog.events.listen_(e, t, o, !1, n, i)
}, goog.events.listen_ = function(e, t, o, n, i, r) {
    if (!t) throw Error("Invalid event type");
    var l = !!i;
    if (l && !goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT) {
        if (goog.events.CAPTURE_SIMULATION_MODE == goog.events.CaptureSimulationMode.OFF_AND_FAIL) return goog.asserts.fail("Can not register capture listener in IE8-."), null;
        if (goog.events.CAPTURE_SIMULATION_MODE == goog.events.CaptureSimulationMode.OFF_AND_SILENT) return null
    }
    var s = goog.events.getListenerMap_(e);
    return s || (e[goog.events.LISTENER_MAP_PROP_] = s = new goog.events.ListenerMap(e)), o = s.add(t, o, n, i, r), o.proxy ? o : (n = goog.events.getProxy(), o.proxy = n, n.src = e, n.listener = o, e.addEventListener ? e.addEventListener(t, n, l) : e.attachEvent(goog.events.getOnString_(t), n), goog.events.listenerCountEstimate_++, o)
}, goog.events.getProxy = function() {
    var e = goog.events.handleBrowserEvent_,
        t = goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT ? function(o) {
            return e.call(t.src, t.listener, o)
        } : function(o) {
            return o = e.call(t.src, t.listener, o), o ? void 0 : o
        };
    return t
}, goog.events.listenOnce = function(e, t, o, n, i) {
    if (goog.isArray(t)) {
        for (var r = 0; r < t.length; r++) goog.events.listenOnce(e, t[r], o, n, i);
        return null
    }
    return o = goog.events.wrapListener(o), goog.events.Listenable.isImplementedBy(e) ? e.listenOnce(t, o, n, i) : goog.events.listen_(e, t, o, !0, n, i)
}, goog.events.listenWithWrapper = function(e, t, o, n, i) {
    t.listen(e, o, n, i)
}, goog.events.unlisten = function(e, t, o, n, i) {
    if (goog.isArray(t)) {
        for (var r = 0; r < t.length; r++) goog.events.unlisten(e, t[r], o, n, i);
        return null
    }
    return o = goog.events.wrapListener(o), goog.events.Listenable.isImplementedBy(e) ? e.unlisten(t, o, n, i) : e ? (n = !!n, (e = goog.events.getListenerMap_(e)) && (t = e.getListener(t, o, n, i)) ? goog.events.unlistenByKey(t) : !1) : !1
}, goog.events.unlistenByKey = function(e) {
    if (goog.isNumber(e) || !e || e.removed) return !1;
    var t = e.src;
    if (goog.events.Listenable.isImplementedBy(t)) return t.unlistenByKey(e);
    var o = e.type,
        n = e.proxy;
    return t.removeEventListener ? t.removeEventListener(o, n, e.capture) : t.detachEvent && t.detachEvent(goog.events.getOnString_(o), n), goog.events.listenerCountEstimate_--, (o = goog.events.getListenerMap_(t)) ? (o.removeByKey(e), 0 == o.getTypeCount() && (o.src = null, t[goog.events.LISTENER_MAP_PROP_] = null)) : e.markAsRemoved(), !0
}, goog.events.unlistenWithWrapper = function(e, t, o, n, i) {
    t.unlisten(e, o, n, i)
}, goog.events.removeAll = function(e, t) {
    if (!e) return 0;
    if (goog.events.Listenable.isImplementedBy(e)) return e.removeAllListeners(t);
    var o = goog.events.getListenerMap_(e);
    if (!o) return 0;
    var n, i = 0;
    for (n in o.listeners)
        if (!t || n == t)
            for (var r = goog.array.clone(o.listeners[n]), l = 0; l < r.length; ++l) goog.events.unlistenByKey(r[l]) && ++i;
    return i
}, goog.events.removeAllNativeListeners = function() {
    return goog.events.listenerCountEstimate_ = 0
}, goog.events.getListeners = function(e, t, o) {
    return goog.events.Listenable.isImplementedBy(e) ? e.getListeners(t, o) : e && (e = goog.events.getListenerMap_(e)) ? e.getListeners(t, o) : []
}, goog.events.getListener = function(e, t, o, n, i) {
    return o = goog.events.wrapListener(o), n = !!n, goog.events.Listenable.isImplementedBy(e) ? e.getListener(t, o, n, i) : e && (e = goog.events.getListenerMap_(e)) ? e.getListener(t, o, n, i) : null
}, goog.events.hasListener = function(e, t, o) {
    return goog.events.Listenable.isImplementedBy(e) ? e.hasListener(t, o) : (e = goog.events.getListenerMap_(e), !!e && e.hasListener(t, o))
}, goog.events.expose = function(e) {
    var t, o = [];
    for (t in e) o.push(e[t] && e[t].id ? t + " = " + e[t] + " (" + e[t].id + ")" : t + " = " + e[t]);
    return o.join("\n")
}, goog.events.getOnString_ = function(e) {
    return e in goog.events.onStringMap_ ? goog.events.onStringMap_[e] : goog.events.onStringMap_[e] = goog.events.onString_ + e
}, goog.events.fireListeners = function(e, t, o, n) {
    return goog.events.Listenable.isImplementedBy(e) ? e.fireListeners(t, o, n) : goog.events.fireListeners_(e, t, o, n)
}, goog.events.fireListeners_ = function(e, t, o, n) {
    var i = 1;
    if ((e = goog.events.getListenerMap_(e)) && (t = e.listeners[t]))
        for (t = goog.array.clone(t), e = 0; e < t.length; e++) {
            var r = t[e];
            r && r.capture == o && !r.removed && (i &= !1 !== goog.events.fireListener(r, n))
        }
    return Boolean(i)
}, goog.events.fireListener = function(e, t) {
    var o = e.listener,
        n = e.handler || e.src;
    return e.callOnce && goog.events.unlistenByKey(e), o.call(n, t)
}, goog.events.getTotalListenerCount = function() {
    return goog.events.listenerCountEstimate_
}, goog.events.dispatchEvent = function(e, t) {
    return goog.asserts.assert(goog.events.Listenable.isImplementedBy(e), "Can not use goog.events.dispatchEvent with non-goog.events.Listenable instance."), e.dispatchEvent(t)
}, goog.events.protectBrowserEventEntryPoint = function(e) {
    goog.events.handleBrowserEvent_ = e.protectEntryPoint(goog.events.handleBrowserEvent_)
}, goog.events.handleBrowserEvent_ = function(e, t) {
    if (e.removed) return !0;
    if (!goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT) {
        var o = t || goog.getObjectByName("window.event"),
            n = new goog.events.BrowserEvent(o, this),
            i = !0;
        if (goog.events.CAPTURE_SIMULATION_MODE == goog.events.CaptureSimulationMode.ON) {
            if (!goog.events.isMarkedIeEvent_(o)) {
                goog.events.markIeEvent_(o);
                for (var o = [], r = n.currentTarget; r; r = r.parentNode) o.push(r);
                for (var r = e.type, l = o.length - 1; !n.propagationStopped_ && l >= 0; l--) n.currentTarget = o[l], i &= goog.events.fireListeners_(o[l], r, !0, n);
                for (l = 0; !n.propagationStopped_ && l < o.length; l++) n.currentTarget = o[l], i &= goog.events.fireListeners_(o[l], r, !1, n)
            }
        } else i = goog.events.fireListener(e, n);
        return i
    }
    return goog.events.fireListener(e, new goog.events.BrowserEvent(t, this))
}, goog.events.markIeEvent_ = function(e) {
    var t = !1;
    if (0 == e.keyCode) try {
        return void(e.keyCode = -1)
    } catch (o) {
        t = !0
    }(t || void 0 == e.returnValue) && (e.returnValue = !0)
}, goog.events.isMarkedIeEvent_ = function(e) {
    return 0 > e.keyCode || void 0 != e.returnValue
}, goog.events.uniqueIdCounter_ = 0, goog.events.getUniqueId = function(e) {
    return e + "_" + goog.events.uniqueIdCounter_++
}, goog.events.getListenerMap_ = function(e) {
    return e = e[goog.events.LISTENER_MAP_PROP_], e instanceof goog.events.ListenerMap ? e : null
}, goog.events.LISTENER_WRAPPER_PROP_ = "__closure_events_fn_" + (1e9 * Math.random() >>> 0), goog.events.wrapListener = function(e) {
    return goog.asserts.assert(e, "Listener can not be null."), goog.isFunction(e) ? e : (goog.asserts.assert(e.handleEvent, "An object listener must have handleEvent method."), e[goog.events.LISTENER_WRAPPER_PROP_] || (e[goog.events.LISTENER_WRAPPER_PROP_] = function(t) {
        return e.handleEvent(t)
    }))
}, goog.debug.entryPointRegistry.register(function(e) {
    goog.events.handleBrowserEvent_ = e(goog.events.handleBrowserEvent_)
}), Blockly.FieldDropdown = function(e, t) {
    this.menuGenerator_ = e || [
        [Blockly.FieldDropdown.NO_OPTIONS_MESSAGE, Blockly.FieldDropdown.NO_OPTIONS_MESSAGE]
    ], this.changeHandler_ = t, this.trimOptions_();
    var o = this.getOptions()[0];
    this.value_ = o[1], this.arrow_ = Blockly.createSvgElement("tspan", {
        "class": "blocklyArrow"
    }, null), this.arrow_.appendChild(document.createTextNode(Blockly.RTL ? "\u25bc " : " \u25bc")), Blockly.FieldDropdown.superClass_.constructor.call(this, o[0])
}, goog.inherits(Blockly.FieldDropdown, Blockly.Field), Blockly.FieldDropdown.CHECKMARK_OVERHANG = 25, Blockly.FieldDropdown.NO_OPTIONS_MESSAGE = "uninitialized", Blockly.FieldDropdown.prototype.CURSOR = "default", Blockly.FieldDropdown.prototype.showEditor_ = function() {
    Blockly.WidgetDiv.show(this, null);
    for (var e = this, t = new goog.ui.Menu, o = this.getOptions(), n = 0; n < o.length; n++) {
        var i = o[n][1],
            r = new goog.ui.MenuItem(o[n][0]);
        r.setValue(i), r.setCheckable(!0), t.addItem(r), r.setChecked(i === this.value_)
    }
    goog.events.listen(t, goog.ui.Component.EventType.ACTION, function(t) {
        if (t = t.target) {
            if (t = t.getValue(), e.changeHandler_) {
                var o = e.changeHandler_(t);
                void 0 !== o && (t = o)
            }
            null !== t && e.setValue(t)
        }
        Blockly.WidgetDiv.hideIfOwner(e)
    });
    var o = goog.dom.getViewportSize(),
        n = goog.style.getViewportPageOffset(document),
        i = Blockly.getAbsoluteXY_(this.borderRect_, this.getRootSVGElement_()),
        r = this.borderRect_.getBBox(),
        l = Blockly.WidgetDiv.DIV;
    l.style.visibility = "hidden", t.render(l), t.setAllowAutoFocus(!0), t = t.getElement(), Blockly.addClass_(t, "blocklyDropdownMenu"), Blockly.addClass_(t, "goog-menu-noaccel"), t.style.borderColor = "hsla(" + this.sourceBlock_.getColour() + ", " + 100 * this.sourceBlock_.getSaturation() + "%, " + 100 * this.sourceBlock_.getValue() + "%, 0.5)", t.style.overflowY = "auto", t.style["max-height"] = "250px", t = goog.style.getSize(t), i.y = i.y + t.height + r.height >= o.height + n.y ? i.y - t.height : i.y + r.height, Blockly.RTL ? (i.x += r.width, i.x += Blockly.FieldDropdown.CHECKMARK_OVERHANG, i.x < n.x + t.width && (i.x = n.x + t.width)) : (i.x -= Blockly.FieldDropdown.CHECKMARK_OVERHANG, i.x > o.width + n.x - t.width && (i.x = o.width + n.x - t.width)), Blockly.isIOS() && (i.y -= n.y), Blockly.WidgetDiv.position(i.x, i.y, o, n), l.style.visibility = "visible"
}, Blockly.FieldDropdown.prototype.trimOptions_ = function() {
    this.suffixTitle = this.prefixTitle = null;
    var e = this.menuGenerator_;
    if (goog.isArray(e) && !(2 > e.length)) {
        var t = e.map(function(e) {
                return e[0]
            }),
            o = Blockly.shortestStringLength(t),
            n = Blockly.commonWordPrefix(t, o),
            i = Blockly.commonWordSuffix(t, o);
        if ((n || i) && !(n + i >= o)) {
            for (n && (this.prefixTitle = t[0].substring(0, n - 1)), i && (this.suffixTitle = t[0].substr(1 - i)), t = [], o = 0; o < e.length; o++) {
                var r = e[o][0],
                    l = e[o][1],
                    r = r.substring(n, r.length - i);
                t[o] = [r, l]
            }
            this.menuGenerator_ = t
        }
    }
}, Blockly.FieldDropdown.prototype.getOptions = function() {
    return goog.isFunction(this.menuGenerator_) ? this.menuGenerator_.call(this) : this.menuGenerator_
}, Blockly.FieldDropdown.prototype.getValue = function() {
    return this.value_
}, Blockly.FieldDropdown.prototype.setValue = function(e) {
    this.value_ = e;
    for (var t = this.getOptions(), o = 0; o < t.length; o++)
        if (t[o][1] == e) return void this.setText(t[o][0]);
    this.setText(e)
}, Blockly.FieldDropdown.prototype.setToFirstValue_ = function() {
    this.setValue(this.getOptions()[0][1])
}, Blockly.FieldDropdown.prototype.setConfig = function(e) {
    this.config = e, e = Blockly.printerRangeToNumbers(e), 0 !== e.length && (this.menuGenerator_ = goog.array.map(e, function(e) {
        return [e.toString(), e.toString()]
    }), this.setToFirstValue_())
}, Blockly.FieldDropdown.prototype.setText = function(e) {
    this.sourceBlock_ && (this.arrow_.style.fill = this.sourceBlock_.getHexColour()), null !== e && (this.text_ = e, goog.dom.removeChildren(this.textElement_), e = e.replace(/\s/g, Blockly.Field.NBSP), e || (e = Blockly.Field.NBSP), e = document.createTextNode(e), this.textElement_.appendChild(e), Blockly.RTL ? this.textElement_.insertBefore(this.arrow_, this.textElement_.firstChild) : this.textElement_.appendChild(this.arrow_), this.size_.width = 0, this.sourceBlock_ && this.sourceBlock_.rendered && (this.sourceBlock_.render(), this.sourceBlock_.bumpNeighbours_(), this.sourceBlock_.blockSpace.fireChangeEvent()))
}, Blockly.FieldDropdown.prototype.dispose = function() {
    Blockly.WidgetDiv.hideIfOwner(this), Blockly.FieldDropdown.superClass_.dispose.call(this)
}, Blockly.Msg = {}, Blockly.ScrollbarPair = function(e, t, o) {
    this.blockSpace_ = e, this.oldHostMetrics_ = null, t && (this.hScroll = new Blockly.Scrollbar(e, !0, t && o)), o && (this.vScroll = new Blockly.Scrollbar(e, !1, t && o)), t && o && (this.corner_ = Blockly.createSvgElement("rect", {
        height: Blockly.Scrollbar.scrollbarThickness,
        width: Blockly.Scrollbar.scrollbarThickness,
        style: "fill: #fff"
    }, null), Blockly.Scrollbar.insertAfter_(this.corner_, e.getBubbleCanvas()))
}, Blockly.ScrollbarPair.prototype.dispose = function() {
    Blockly.unbindEvent_(this.onResizeWrapper_), this.onResizeWrapper_ = null, this.corner_ && goog.dom.removeNode(this.corner_), this.oldHostMetrics_ = this.blockSpace_ = this.corner_ = null, this.hScroll && this.hScroll.dispose(), this.hScroll = null, this.vScroll && this.vScroll.dispose(), this.vScroll = null
}, Blockly.ScrollbarPair.prototype.canScrollHorizontally = function() {
    return !!this.hScroll
}, Blockly.ScrollbarPair.prototype.canScrollVertically = function() {
    return !!this.vScroll
}, Blockly.ScrollbarPair.prototype.resize = function() {
    var e = this.blockSpace_.getMetrics();
    if (e) {
        var t = this.metricsChangedOnAxis.bind(this, this.oldHostMetrics_, e),
            o = t(["viewWidth", "absoluteLeft", "viewHeight", "absoluteTop"]),
            n = o || t(["contentWidth", "viewLeft", "contentLeft"]),
            t = o || t(["contentHeight", "viewTop", "contentTop"]);
        this.hScroll && n && this.hScroll.resize(e), this.vScroll && t && this.vScroll.resize(e), this.vScroll && this.hScroll && o && (this.corner_.setAttribute("x", this.vScroll.xCoordinate), this.corner_.setAttribute("y", this.hScroll.yCoordinate)), this.oldHostMetrics_ = e
    }
}, Blockly.ScrollbarPair.prototype.metricsChangedOnAxis = function(e, t, o) {
    return e ? o.some(function(o) {
        return e[o] != t[o]
    }) : !0
}, Blockly.ScrollbarPair.prototype.set = function(e, t) {
    this.hScroll && this.hScroll.set(e, !0), this.vScroll && this.vScroll.set(t, !0)
}, Blockly.ScrollbarSvg = function(e, t, o) {
    this.blockSpace_ = e, this.pair_ = o || !1, this.horizontal_ = t, this.createDom_(), t ? (this.svgBackground_.setAttribute("height", Blockly.Scrollbar.scrollbarThickness), this.svgKnob_.setAttribute("height", Blockly.Scrollbar.scrollbarThickness - 6), this.svgKnob_.setAttribute("y", 3)) : (this.svgBackground_.setAttribute("width", Blockly.Scrollbar.scrollbarThickness), this.svgKnob_.setAttribute("width", Blockly.Scrollbar.scrollbarThickness - 6), this.svgKnob_.setAttribute("x", 3)), this.onMouseDownBarWrapper_ = Blockly.bindEvent_(this.svgBackground_, "mousedown", this, this.onMouseDownBar_), this.onMouseDownKnobWrapper_ = Blockly.bindEvent_(this.svgKnob_, "mousedown", this, this.onMouseDownKnob_)
}, Blockly.ScrollbarSvg.prototype.dispose = function() {
    this.onMouseUpKnob_(), this.onResizeWrapper_ && (Blockly.unbindEvent_(this.onResizeWrapper_), this.onResizeWrapper_ = null), Blockly.unbindEvent_(this.onMouseDownBarWrapper_), this.onMouseDownBarWrapper_ = null, Blockly.unbindEvent_(this.onMouseDownKnobWrapper_), this.onMouseDownKnobWrapper_ = null, goog.dom.removeNode(this.svgGroup_), this.blockSpace_ = this.svgKnob_ = this.svgBackground_ = this.svgGroup_ = null
}, Blockly.ScrollbarSvg.prototype.resize = function(e) {
    if (e || (e = this.blockSpace_.getMetrics())) {
        var t = this.blockSpace_.getScrollableSize(e);
        if (this.horizontal_) {
            var o = e.viewWidth;
            this.pair_ ? o -= Blockly.Scrollbar.scrollbarThickness : this.setVisible(o < t.width), this.ratio_ = o / t.width, (-1 / 0 === this.ratio_ || 1 / 0 === this.ratio_ || isNaN(this.ratio_)) && (this.ratio_ = 0);
            var t = e.viewWidth * this.ratio_,
                n = e.viewLeft * this.ratio_;
            this.svgKnob_.setAttribute("width", Math.max(0, t)), this.xCoordinate = e.absoluteLeft, this.pair_ && Blockly.RTL && (this.xCoordinate += e.absoluteLeft + Blockly.Scrollbar.scrollbarThickness), this.yCoordinate = e.absoluteTop + e.viewHeight - Blockly.Scrollbar.scrollbarThickness, this.svgGroup_.setAttribute("transform", "translate(" + this.xCoordinate + ", " + this.yCoordinate + ")"), this.svgBackground_.setAttribute("width", Math.max(0, o)), this.svgKnob_.setAttribute("x", this.constrainKnob_(n))
        } else o = e.viewHeight, this.pair_ ? o -= Blockly.Scrollbar.scrollbarThickness : this.setVisible(o < t.height), this.ratio_ = o / t.height, (-1 / 0 === this.ratio_ || 1 / 0 === this.ratio_ || isNaN(this.ratio_)) && (this.ratio_ = 0), t = e.viewHeight * this.ratio_, n = e.viewTop * this.ratio_, this.svgKnob_.setAttribute("height", Math.max(0, t)), this.xCoordinate = e.absoluteLeft, Blockly.RTL || (this.xCoordinate += e.viewWidth - Blockly.Scrollbar.scrollbarThickness), this.yCoordinate = e.absoluteTop, this.svgGroup_.setAttribute("transform", "translate(" + this.xCoordinate + ", " + this.yCoordinate + ")"), this.svgBackground_.setAttribute("height", Math.max(0, o)), this.svgKnob_.setAttribute("y", this.constrainKnob_(n));
        this.onScroll_()
    }
}, Blockly.ScrollbarSvg.prototype.createDom_ = function() {
    this.svgGroup_ = Blockly.createSvgElement("g", {}, null), this.svgBackground_ = Blockly.createSvgElement("rect", {
        "class": "blocklyScrollbarBackground"
    }, this.svgGroup_);
    var e = Math.floor((Blockly.Scrollbar.scrollbarThickness - 6) / 2);
    this.svgKnob_ = Blockly.createSvgElement("rect", {
        "class": "blocklyScrollbarKnob",
        rx: e,
        ry: e
    }, this.svgGroup_), Blockly.Scrollbar.insertAfter_(this.svgGroup_, this.blockSpace_.getBubbleCanvas())
}, Blockly.ScrollbarSvg.prototype.isVisible = function() {
    return "none" != this.svgGroup_.getAttribute("display")
}, Blockly.ScrollbarSvg.prototype.setVisible = function(e) {
    if (e != this.isVisible()) {
        if (this.pair_) throw "Unable to toggle visibility of paired scrollbars.";
        e ? this.svgGroup_.setAttribute("display", "block") : (this.blockSpace_.setMetrics({
            x: 0,
            y: 0
        }), this.svgGroup_.setAttribute("display", "none"))
    }
}, Blockly.ScrollbarSvg.prototype.onMouseDownBar_ = function(e) {
    if (this.blockSpace_.blockSpaceEditor.hideChaff(!0), !Blockly.isRightButton(e)) {
        var t = Blockly.mouseToSvg(e, this.blockSpace_.blockSpaceEditor.svg_),
            t = this.horizontal_ ? t.x : t.y,
            o = Blockly.getSvgXY_(this.svgKnob_, this.blockSpace_.blockSpaceEditor.svg_),
            o = this.horizontal_ ? o.x : o.y,
            n = parseFloat(this.svgKnob_.getAttribute(this.horizontal_ ? "width" : "height")),
            i = parseFloat(this.svgKnob_.getAttribute(this.horizontal_ ? "x" : "y")),
            r = .95 * n;
        o >= t ? i -= r : t >= o + n && (i += r), this.svgKnob_.setAttribute(this.horizontal_ ? "x" : "y", this.constrainKnob_(i)), this.onScroll_()
    }
    e.stopPropagation()
}, Blockly.ScrollbarSvg.prototype.onMouseDownKnob_ = function(e) {
    this.blockSpace_.blockSpaceEditor.hideChaff(!0), this.onMouseUpKnob_(), Blockly.isRightButton(e) || (this.startDragKnob = parseFloat(this.svgKnob_.getAttribute(this.horizontal_ ? "x" : "y")), this.startDragMouse = this.horizontal_ ? e.clientX : e.clientY, Blockly.ScrollbarSvg.onMouseUpWrapper_ = Blockly.bindEvent_(document, "mouseup", this, this.onMouseUpKnob_), Blockly.ScrollbarSvg.onMouseMoveWrapper_ = Blockly.bindEvent_(document, "mousemove", this, this.onMouseMoveKnob_)), e.stopPropagation()
}, Blockly.ScrollbarSvg.prototype.onMouseMoveKnob_ = function(e) {
    this.svgKnob_.setAttribute(this.horizontal_ ? "x" : "y", this.constrainKnob_(this.startDragKnob + ((this.horizontal_ ? e.clientX : e.clientY) - this.startDragMouse))), this.onScroll_()
}, Blockly.ScrollbarSvg.prototype.onMouseUpKnob_ = function() {
    Blockly.ScrollbarSvg.onMouseUpWrapper_ && (Blockly.unbindEvent_(Blockly.ScrollbarSvg.onMouseUpWrapper_), Blockly.ScrollbarSvg.onMouseUpWrapper_ = null), Blockly.ScrollbarSvg.onMouseMoveWrapper_ && (Blockly.unbindEvent_(Blockly.ScrollbarSvg.onMouseMoveWrapper_), Blockly.ScrollbarSvg.onMouseMoveWrapper_ = null)
}, Blockly.ScrollbarSvg.prototype.constrainKnob_ = function(e) {
    if (0 >= e || isNaN(e)) e = 0;
    else {
        var t = this.horizontal_ ? "width" : "height",
            o = parseFloat(this.svgBackground_.getAttribute(t)),
            t = parseFloat(this.svgKnob_.getAttribute(t));
        e = Math.min(e, o - t)
    }
    return e
}, Blockly.ScrollbarSvg.prototype.onScroll_ = function() {
    var e = parseFloat(this.svgKnob_.getAttribute(this.horizontal_ ? "x" : "y")),
        t = parseFloat(this.svgBackground_.getAttribute(this.horizontal_ ? "width" : "height")),
        e = e / t;
    isNaN(e) && (e = 0), t = {}, this.horizontal_ ? t.x = e : t.y = e, this.blockSpace_.setMetrics(t)
}, Blockly.ScrollbarSvg.prototype.set = function(e, t) {
    this.svgKnob_.setAttribute(this.horizontal_ ? "x" : "y", e * this.ratio_), t && this.onScroll_()
}, Blockly.Scrollbar = Blockly.ScrollbarSvg, Blockly.Scrollbar.scrollbarThickness = 15, Blockly.Scrollbar.insertAfter_ = function(e, t) {
    var o = t.nextSibling,
        n = t.parentNode;
    if (!n) throw "Reference node has no parent.";
    o ? n.insertBefore(e, o) : n.appendChild(e)
}, goog.math = {}, goog.math.randomInt = function(e) {
    return Math.floor(Math.random() * e)
}, goog.math.uniformRandom = function(e, t) {
    return e + Math.random() * (t - e)
}, goog.math.clamp = function(e, t, o) {
    return Math.min(Math.max(e, t), o)
}, goog.math.modulo = function(e, t) {
    var o = e % t;
    return 0 > o * t ? o + t : o
}, goog.math.lerp = function(e, t, o) {
    return e + o * (t - e)
}, goog.math.nearlyEquals = function(e, t, o) {
    return Math.abs(e - t) <= (o || 1e-6)
}, goog.math.standardAngle = function(e) {
    return goog.math.modulo(e, 360)
}, goog.math.toRadians = function(e) {
    return e * Math.PI / 180
}, goog.math.toDegrees = function(e) {
    return 180 * e / Math.PI
}, goog.math.angleDx = function(e, t) {
    return t * Math.cos(goog.math.toRadians(e))
}, goog.math.angleDy = function(e, t) {
    return t * Math.sin(goog.math.toRadians(e))
}, goog.math.angle = function(e, t, o, n) {
    return goog.math.standardAngle(goog.math.toDegrees(Math.atan2(n - t, o - e)))
}, goog.math.angleDifference = function(e, t) {
    var o = goog.math.standardAngle(t) - goog.math.standardAngle(e);
    return o > 180 ? o -= 360 : -180 >= o && (o = 360 + o), o
}, goog.math.sign = function(e) {
    return 0 == e ? 0 : 0 > e ? -1 : 1
}, goog.math.longestCommonSubsequence = function(e, t, o, n) {
    o = o || function(e, t) {
        return e == t
    }, n = n || function(t) {
        return e[t]
    };
    for (var i = e.length, r = t.length, l = [], s = 0; i + 1 > s; s++) l[s] = [], l[s][0] = 0;
    for (var a = 0; r + 1 > a; a++) l[0][a] = 0;
    for (s = 1; i >= s; s++)
        for (a = 1; r >= a; a++) l[s][a] = o(e[s - 1], t[a - 1]) ? l[s - 1][a - 1] + 1 : Math.max(l[s - 1][a], l[s][a - 1]);
    for (var g = [], s = i, a = r; s > 0 && a > 0;) o(e[s - 1], t[a - 1]) ? (g.unshift(n(s - 1, a - 1)), s--, a--) : l[s - 1][a] > l[s][a - 1] ? s-- : a--;
    return g
}, goog.math.sum = function() {
    return goog.array.reduce(arguments, function(e, t) {
        return e + t
    }, 0)
}, goog.math.average = function() {
    return goog.math.sum.apply(null, arguments) / arguments.length
}, goog.math.sampleVariance = function() {
    var e = arguments.length;
    if (2 > e) return 0;
    var t = goog.math.average.apply(null, arguments);
    return goog.math.sum.apply(null, goog.array.map(arguments, function(e) {
        return Math.pow(e - t, 2)
    })) / (e - 1)
}, goog.math.standardDeviation = function() {
    return Math.sqrt(goog.math.sampleVariance.apply(null, arguments))
}, goog.math.isInt = function(e) {
    return isFinite(e) && 0 == e % 1
}, goog.math.isFiniteNumber = function(e) {
    return isFinite(e) && !isNaN(e)
}, goog.math.log10Floor = function(e) {
    if (e > 0) {
        var t = Math.round(Math.log(e) * Math.LOG10E);
        return t - (Math.pow(10, t) > e)
    }
    return 0 == e ? -1 / 0 : 0 / 0
}, goog.math.safeFloor = function(e, t) {
    return goog.asserts.assert(!goog.isDef(t) || t > 0), Math.floor(e + (t || 2e-15))
}, goog.math.safeCeil = function(e, t) {
    return goog.asserts.assert(!goog.isDef(t) || t > 0), Math.ceil(e - (t || 2e-15))
}, goog.math.Coordinate = function(e, t) {
    this.x = goog.isDef(e) ? e : 0, this.y = goog.isDef(t) ? t : 0
}, goog.math.Coordinate.prototype.clone = function() {
    return new goog.math.Coordinate(this.x, this.y)
}, goog.DEBUG && (goog.math.Coordinate.prototype.toString = function() {
    return "(" + this.x + ", " + this.y + ")"
}), goog.math.Coordinate.equals = function(e, t) {
    return e == t ? !0 : e && t ? e.x == t.x && e.y == t.y : !1
}, goog.math.Coordinate.distance = function(e, t) {
    var o = e.x - t.x,
        n = e.y - t.y;
    return Math.sqrt(o * o + n * n)
}, goog.math.Coordinate.magnitude = function(e) {
    return Math.sqrt(e.x * e.x + e.y * e.y)
}, goog.math.Coordinate.azimuth = function(e) {
    return goog.math.angle(0, 0, e.x, e.y)
}, goog.math.Coordinate.squaredDistance = function(e, t) {
    var o = e.x - t.x,
        n = e.y - t.y;
    return o * o + n * n
}, goog.math.Coordinate.difference = function(e, t) {
    return new goog.math.Coordinate(e.x - t.x, e.y - t.y)
}, goog.math.Coordinate.sum = function(e, t) {
    return new goog.math.Coordinate(e.x + t.x, e.y + t.y)
}, goog.math.Coordinate.prototype.ceil = function() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
}, goog.math.Coordinate.prototype.floor = function() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
}, goog.math.Coordinate.prototype.round = function() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this
}, goog.math.Coordinate.prototype.translate = function(e, t) {
    return e instanceof goog.math.Coordinate ? (this.x += e.x, this.y += e.y) : (this.x += e, goog.isNumber(t) && (this.y += t)), this
}, goog.math.Coordinate.prototype.scale = function(e, t) {
    var o = goog.isNumber(t) ? t : e;
    return this.x *= e, this.y *= o, this
}, goog.math.Coordinate.prototype.rotateRadians = function(e, t) {
    var o = t || new goog.math.Coordinate(0, 0),
        n = this.x,
        i = this.y,
        r = Math.cos(e),
        l = Math.sin(e);
    this.x = (n - o.x) * r - (i - o.y) * l + o.x, this.y = (n - o.x) * l + (i - o.y) * r + o.y
}, goog.math.Coordinate.prototype.rotateDegrees = function(e, t) {
    this.rotateRadians(goog.math.toRadians(e), t)
}, goog.math.Size = function(e, t) {
    this.width = e, this.height = t
}, goog.math.Size.equals = function(e, t) {
    return e == t ? !0 : e && t ? e.width == t.width && e.height == t.height : !1
}, goog.math.Size.prototype.clone = function() {
    return new goog.math.Size(this.width, this.height)
}, goog.DEBUG && (goog.math.Size.prototype.toString = function() {
    return "(" + this.width + " x " + this.height + ")"
}), goog.math.Size.prototype.getLongest = function() {
    return Math.max(this.width, this.height)
}, goog.math.Size.prototype.getShortest = function() {
    return Math.min(this.width, this.height)
}, goog.math.Size.prototype.area = function() {
    return this.width * this.height
}, goog.math.Size.prototype.perimeter = function() {
    return 2 * (this.width + this.height)
}, goog.math.Size.prototype.aspectRatio = function() {
    return this.width / this.height
}, goog.math.Size.prototype.isEmpty = function() {
    return !this.area()
}, goog.math.Size.prototype.ceil = function() {
    return this.width = Math.ceil(this.width), this.height = Math.ceil(this.height), this
}, goog.math.Size.prototype.fitsInside = function(e) {
    return this.width <= e.width && this.height <= e.height
}, goog.math.Size.prototype.floor = function() {
    return this.width = Math.floor(this.width), this.height = Math.floor(this.height), this
}, goog.math.Size.prototype.round = function() {
    return this.width = Math.round(this.width), this.height = Math.round(this.height), this
}, goog.math.Size.prototype.scale = function(e, t) {
    var o = goog.isNumber(t) ? t : e;
    return this.width *= e, this.height *= o, this
}, goog.math.Size.prototype.scaleToFit = function(e) {
    return e = this.aspectRatio() > e.aspectRatio() ? e.width / this.width : e.height / this.height, this.scale(e)
}, goog.math.Box = function(e, t, o, n) {
    this.top = e, this.right = t, this.bottom = o, this.left = n
}, goog.math.Box.boundingBox = function() {
    for (var e = new goog.math.Box(arguments[0].y, arguments[0].x, arguments[0].y, arguments[0].x), t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        e.top = Math.min(e.top, o.y), e.right = Math.max(e.right, o.x), e.bottom = Math.max(e.bottom, o.y), e.left = Math.min(e.left, o.x)
    }
    return e
}, goog.math.Box.prototype.clone = function() {
    return new goog.math.Box(this.top, this.right, this.bottom, this.left)
}, goog.DEBUG && (goog.math.Box.prototype.toString = function() {
    return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
}), goog.math.Box.prototype.contains = function(e) {
    return goog.math.Box.contains(this, e)
}, goog.math.Box.prototype.expand = function(e, t, o, n) {
    return goog.isObject(e) ? (this.top -= e.top, this.right += e.right, this.bottom += e.bottom, this.left -= e.left) : (this.top -= e, this.right += t, this.bottom += o, this.left -= n), this
}, goog.math.Box.prototype.expandToInclude = function(e) {
    this.left = Math.min(this.left, e.left), this.top = Math.min(this.top, e.top), this.right = Math.max(this.right, e.right), this.bottom = Math.max(this.bottom, e.bottom)
}, goog.math.Box.equals = function(e, t) {
    return e == t ? !0 : e && t ? e.top == t.top && e.right == t.right && e.bottom == t.bottom && e.left == t.left : !1
}, goog.math.Box.contains = function(e, t) {
    return e && t ? t instanceof goog.math.Box ? t.left >= e.left && t.right <= e.right && t.top >= e.top && t.bottom <= e.bottom : t.x >= e.left && t.x <= e.right && t.y >= e.top && t.y <= e.bottom : !1
}, goog.math.Box.relativePositionX = function(e, t) {
    return t.x < e.left ? t.x - e.left : t.x > e.right ? t.x - e.right : 0
}, goog.math.Box.relativePositionY = function(e, t) {
    return t.y < e.top ? t.y - e.top : t.y > e.bottom ? t.y - e.bottom : 0
}, goog.math.Box.distance = function(e, t) {
    var o = goog.math.Box.relativePositionX(e, t),
        n = goog.math.Box.relativePositionY(e, t);
    return Math.sqrt(o * o + n * n)
}, goog.math.Box.intersects = function(e, t) {
    return e.left <= t.right && t.left <= e.right && e.top <= t.bottom && t.top <= e.bottom
}, goog.math.Box.intersectsWithPadding = function(e, t, o) {
    return e.left <= t.right + o && t.left <= e.right + o && e.top <= t.bottom + o && t.top <= e.bottom + o
}, goog.math.Box.prototype.ceil = function() {
    return this.top = Math.ceil(this.top), this.right = Math.ceil(this.right), this.bottom = Math.ceil(this.bottom), this.left = Math.ceil(this.left), this
}, goog.math.Box.prototype.floor = function() {
    return this.top = Math.floor(this.top), this.right = Math.floor(this.right), this.bottom = Math.floor(this.bottom), this.left = Math.floor(this.left), this
}, goog.math.Box.prototype.round = function() {
    return this.top = Math.round(this.top), this.right = Math.round(this.right), this.bottom = Math.round(this.bottom), this.left = Math.round(this.left), this
}, goog.math.Box.prototype.translate = function(e, t) {
    return e instanceof goog.math.Coordinate ? (this.left += e.x, this.right += e.x, this.top += e.y, this.bottom += e.y) : (this.left += e, this.right += e, goog.isNumber(t) && (this.top += t, this.bottom += t)), this
}, goog.math.Box.prototype.scale = function(e, t) {
    var o = goog.isNumber(t) ? t : e;
    return this.left *= e, this.right *= e, this.top *= o, this.bottom *= o, this
}, goog.math.Rect = function(e, t, o, n) {
    this.left = e, this.top = t, this.width = o, this.height = n
}, goog.math.Rect.prototype.clone = function() {
    return new goog.math.Rect(this.left, this.top, this.width, this.height)
}, goog.math.Rect.prototype.toBox = function() {
    return new goog.math.Box(this.top, this.left + this.width, this.top + this.height, this.left)
}, goog.math.Rect.createFromBox = function(e) {
    return new goog.math.Rect(e.left, e.top, e.right - e.left, e.bottom - e.top)
}, goog.DEBUG && (goog.math.Rect.prototype.toString = function() {
    return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
}), goog.math.Rect.equals = function(e, t) {
    return e == t ? !0 : e && t ? e.left == t.left && e.width == t.width && e.top == t.top && e.height == t.height : !1
}, goog.math.Rect.prototype.intersection = function(e) {
    var t = Math.max(this.left, e.left),
        o = Math.min(this.left + this.width, e.left + e.width);
    if (o >= t) {
        var n = Math.max(this.top, e.top);
        if (e = Math.min(this.top + this.height, e.top + e.height), e >= n) return this.left = t, this.top = n, this.width = o - t, this.height = e - n, !0
    }
    return !1
}, goog.math.Rect.intersection = function(e, t) {
    var o = Math.max(e.left, t.left),
        n = Math.min(e.left + e.width, t.left + t.width);
    if (n >= o) {
        var i = Math.max(e.top, t.top),
            r = Math.min(e.top + e.height, t.top + t.height);
        if (r >= i) return new goog.math.Rect(o, i, n - o, r - i)
    }
    return null
}, goog.math.Rect.intersects = function(e, t) {
    return e.left <= t.left + t.width && t.left <= e.left + e.width && e.top <= t.top + t.height && t.top <= e.top + e.height
}, goog.math.Rect.prototype.intersects = function(e) {
    return goog.math.Rect.intersects(this, e)
}, goog.math.Rect.difference = function(e, t) {
    var o = goog.math.Rect.intersection(e, t);
    if (!o || !o.height || !o.width) return [e.clone()];
    var o = [],
        n = e.top,
        i = e.height,
        r = e.left + e.width,
        l = e.top + e.height,
        s = t.left + t.width,
        a = t.top + t.height;
    return t.top > e.top && (o.push(new goog.math.Rect(e.left, e.top, e.width, t.top - e.top)), n = t.top, i -= t.top - e.top), l > a && (o.push(new goog.math.Rect(e.left, a, e.width, l - a)), i = a - n), t.left > e.left && o.push(new goog.math.Rect(e.left, n, t.left - e.left, i)), r > s && o.push(new goog.math.Rect(s, n, r - s, i)), o
}, goog.math.Rect.prototype.difference = function(e) {
    return goog.math.Rect.difference(this, e)
}, goog.math.Rect.prototype.boundingRect = function(e) {
    var t = Math.max(this.left + this.width, e.left + e.width),
        o = Math.max(this.top + this.height, e.top + e.height);
    this.left = Math.min(this.left, e.left), this.top = Math.min(this.top, e.top), this.width = t - this.left, this.height = o - this.top
}, goog.math.Rect.boundingRect = function(e, t) {
    if (!e || !t) return null;
    var o = e.clone();
    return o.boundingRect(t), o
}, goog.math.Rect.prototype.contains = function(e) {
    return e instanceof goog.math.Rect ? this.left <= e.left && this.left + this.width >= e.left + e.width && this.top <= e.top && this.top + this.height >= e.top + e.height : e.x >= this.left && e.x <= this.left + this.width && e.y >= this.top && e.y <= this.top + this.height
}, goog.math.Rect.prototype.squaredDistance = function(e) {
    var t = e.x < this.left ? this.left - e.x : Math.max(e.x - (this.left + this.width), 0);
    return e = e.y < this.top ? this.top - e.y : Math.max(e.y - (this.top + this.height), 0), t * t + e * e
}, goog.math.Rect.prototype.distance = function(e) {
    return Math.sqrt(this.squaredDistance(e))
}, goog.math.Rect.prototype.getSize = function() {
    return new goog.math.Size(this.width, this.height)
}, goog.math.Rect.prototype.getTopLeft = function() {
    return new goog.math.Coordinate(this.left, this.top)
}, goog.math.Rect.prototype.getCenter = function() {
    return new goog.math.Coordinate(this.left + this.width / 2, this.top + this.height / 2)
}, goog.math.Rect.prototype.getBottomRight = function() {
    return new goog.math.Coordinate(this.left + this.width, this.top + this.height)
}, goog.math.Rect.prototype.ceil = function() {
    return this.left = Math.ceil(this.left), this.top = Math.ceil(this.top), this.width = Math.ceil(this.width), this.height = Math.ceil(this.height), this
}, goog.math.Rect.prototype.floor = function() {
    return this.left = Math.floor(this.left), this.top = Math.floor(this.top), this.width = Math.floor(this.width), this.height = Math.floor(this.height), this
}, goog.math.Rect.prototype.round = function() {
    return this.left = Math.round(this.left), this.top = Math.round(this.top), this.width = Math.round(this.width), this.height = Math.round(this.height), this
}, goog.math.Rect.prototype.translate = function(e, t) {
    return e instanceof goog.math.Coordinate ? (this.left += e.x, this.top += e.y) : (this.left += e, goog.isNumber(t) && (this.top += t)), this
}, goog.math.Rect.prototype.scale = function(e, t) {
    var o = goog.isNumber(t) ? t : e;
    return this.left *= e, this.width *= e, this.top *= o, this.height *= o, this
}, Blockly.Trashcan = function(e) {
    this.blockSpace_ = e
}, Blockly.Trashcan.CLOSED_URL_ = "media/canclosed.png", Blockly.Trashcan.OPEN_URL_ = "media/canopen.png", Blockly.Trashcan.WIDTH_ = 70, Blockly.Trashcan.HEIGHT_ = 70, Blockly.Trashcan.MARGIN_TOP_ = 15, Blockly.Trashcan.MARGIN_SIDE_ = 22, Blockly.Trashcan.MARGIN_HOTSPOT_ = 25, Blockly.Trashcan.prototype.isOpen = !1, Blockly.Trashcan.prototype.radius = 50, Blockly.Trashcan.prototype.svgGroup_ = null, Blockly.Trashcan.prototype.svgClosedCan_ = null, Blockly.Trashcan.prototype.svgOpenCan_ = null, Blockly.Trashcan.prototype.left_ = 0, Blockly.Trashcan.prototype.top_ = 0, Blockly.Trashcan.prototype.createDom = function() {
    return this.svgGroup_ = Blockly.createSvgElement("g", {
        id: "trashcan",
        filter: "url(#blocklyTrashcanShadowFilter)"
    }, null), this.svgClosedCan_ = Blockly.createSvgElement("image", {
        width: Blockly.Trashcan.WIDTH_,
        height: Blockly.Trashcan.HEIGHT_
    }, this.svgGroup_), this.svgClosedCan_.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", Blockly.assetUrl(Blockly.Trashcan.CLOSED_URL_)), this.svgOpenCan_ = Blockly.createSvgElement("image", {
        width: Blockly.Trashcan.WIDTH_,
        height: Blockly.Trashcan.HEIGHT_
    }, this.svgGroup_), this.svgOpenCan_.setAttribute("visibility", "hidden"), this.svgOpenCan_.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", Blockly.assetUrl(Blockly.Trashcan.OPEN_URL_)), this.svgGroup_
}, Blockly.Trashcan.prototype.dispose = function() {
    this.svgGroup_ && (goog.dom.removeNode(this.svgGroup_), this.svgGroup_ = null), this.blockSpace_ = this.svgOpenCan_ = this.svgClosedCan_ = null
}, Blockly.Trashcan.prototype.getHeight = function() {
    return Blockly.Trashcan.HEIGHT_
}, Blockly.Trashcan.prototype.setOpen_ = function(e) {
    this.isOpen != e && (this.isOpen = e, this.animateLid_())
}, Blockly.Trashcan.prototype.animateLid_ = function() {
    this.isOpen ? this.svgOpenCan_.setAttribute("visibility", "visible") : this.svgOpenCan_.setAttribute("visibility", "hidden")
}, Blockly.Trashcan.prototype.close = function() {
    this.setOpen_(!1)
}, Blockly.PanDragHandler = function(e) {
    this.blockSpace_ = e, this.startScrollY_ = this.startScrollX_ = this.startMouseY_ = this.startMouseX_ = this.mouseUpEventBindData_ = this.mouseMoveEventBindData_ = this.contextMenuBlockEventBindData_ = this.mousewheelEventBindData_ = this.wheelEventBindData_ = this.mouseDownEventBindData_ = this.onTargetMouseDown_ = this.target_ = null
}, Blockly.PanDragHandler.prototype.bindBeginPanDragHandler = function(e, t) {
    this.unbindBeginPanDragHandler(), this.target_ = e, this.onTargetMouseDown_ = t, this.mouseDownEventBindData_ = Blockly.bindEvent_(e, "mousedown", this, this.onPanDragTargetMouseDown_), this.contextMenuBlockEventBindData_ = Blockly.bindEvent_(e, "contextmenu", null, Blockly.blockContextMenu)
}, Blockly.PanDragHandler.prototype.unbindBeginPanDragHandler = function() {
    this.mouseDownEventBindData_ && (Blockly.unbindEvent_(this.mouseDownEventBindData_), this.mouseDownEventBindData_ = null), this.contextMenuBlockEventBindData_ && (Blockly.unbindEvent_(this.contextMenuBlockEventBindData_), this.contextMenuBlockEventBindData_ = null), this.target_ = null
}, Blockly.PanDragHandler.prototype.bindDuringPanDragHandlers_ = function() {
    this.unbindDuringPanDragHandlers_(), this.mouseMoveEventBindData_ = Blockly.bindEvent_(window, "mousemove", this, this.onPanDragMouseMove_, !0), this.mouseUpEventBindData_ = Blockly.bindEvent_(window, "mouseup", this, this.onPanDragMouseUp_, !0)
}, Blockly.PanDragHandler.prototype.unbindDuringPanDragHandlers_ = function() {
    this.mouseMoveEventBindData_ && (Blockly.unbindEvent_(this.mouseMoveEventBindData_), this.mouseMoveEventBindData_ = null), this.mouseUpEventBindData_ && (Blockly.unbindEvent_(this.mouseUpEventBindData_), this.mouseUpEventBindData_ = null)
}, Blockly.PanDragHandler.prototype.onPanDragTargetMouseDown_ = function(e) {
    this.onTargetMouseDown_ && this.onTargetMouseDown_();
    var t = e.target && e.target === this.target_;
    Blockly.selected && !Blockly.readOnly && t && Blockly.selected.unselect();
    var o = Blockly.selected && !Blockly.selected.isMovable() && !Blockly.selected.isEditable(),
        t = t || o || Blockly.readOnly,
        o = !Blockly.isRightButton(e);
    this.blockSpace_.scrollbarPair && o && t && (this.beginDragScroll_(e), e.stopPropagation(), e.preventDefault())
}, Blockly.PanDragHandler.prototype.beginDragScroll_ = function(e) {
    this.startMouseX_ = e.clientX, this.startMouseY_ = e.clientY, this.startScrollX_ = this.blockSpace_.getScrollOffsetX(), this.startScrollY_ = this.blockSpace_.getScrollOffsetY(), this.bindDuringPanDragHandlers_()
}, Blockly.PanDragHandler.prototype.onPanDragMouseMove_ = function(e) {
    Blockly.removeAllRanges(), this.blockSpace_.scrollTo(this.startScrollX_ + -(e.clientX - this.startMouseX_), this.startScrollY_ + -(e.clientY - this.startMouseY_)), e.stopPropagation(), e.preventDefault()
}, Blockly.PanDragHandler.prototype.onPanDragMouseUp_ = function(e) {
    this.unbindDuringPanDragHandlers_(), e.stopPropagation(), e.preventDefault()
}, goog.math.Vec2 = function(e, t) {
    this.x = e, this.y = t
}, goog.inherits(goog.math.Vec2, goog.math.Coordinate), goog.math.Vec2.randomUnit = function() {
    var e = 2 * Math.random() * Math.PI;
    return new goog.math.Vec2(Math.cos(e), Math.sin(e))
}, goog.math.Vec2.random = function() {
    var e = Math.sqrt(Math.random()),
        t = 2 * Math.random() * Math.PI;
    return new goog.math.Vec2(Math.cos(t) * e, Math.sin(t) * e)
}, goog.math.Vec2.fromCoordinate = function(e) {
    return new goog.math.Vec2(e.x, e.y)
}, goog.math.Vec2.prototype.clone = function() {
    return new goog.math.Vec2(this.x, this.y)
}, goog.math.Vec2.prototype.magnitude = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
}, goog.math.Vec2.prototype.squaredMagnitude = function() {
    return this.x * this.x + this.y * this.y
}, goog.math.Vec2.prototype.scale = goog.math.Coordinate.prototype.scale, goog.math.Vec2.prototype.invert = function() {
    return this.x = -this.x, this.y = -this.y, this
}, goog.math.Vec2.prototype.normalize = function() {
    return this.scale(1 / this.magnitude())
}, goog.math.Vec2.prototype.add = function(e) {
    return this.x += e.x, this.y += e.y, this
}, goog.math.Vec2.prototype.subtract = function(e) {
    return this.x -= e.x, this.y -= e.y, this
}, goog.math.Vec2.prototype.rotate = function(e) {
    var t = Math.cos(e);
    e = Math.sin(e);
    var o = this.y * t + this.x * e;
    return this.x = this.x * t - this.y * e, this.y = o, this
}, goog.math.Vec2.rotateAroundPoint = function(e, t, o) {
    return e.clone().subtract(t).rotate(o).add(t)
}, goog.math.Vec2.prototype.equals = function(e) {
    return this == e || !!e && this.x == e.x && this.y == e.y
}, goog.math.Vec2.distance = goog.math.Coordinate.distance, goog.math.Vec2.squaredDistance = goog.math.Coordinate.squaredDistance, goog.math.Vec2.equals = goog.math.Coordinate.equals, goog.math.Vec2.sum = function(e, t) {
    return new goog.math.Vec2(e.x + t.x, e.y + t.y)
}, goog.math.Vec2.difference = function(e, t) {
    return new goog.math.Vec2(e.x - t.x, e.y - t.y)
}, goog.math.Vec2.dot = function(e, t) {
    return e.x * t.x + e.y * t.y
}, goog.math.Vec2.lerp = function(e, t, o) {
    return new goog.math.Vec2(goog.math.lerp(e.x, t.x, o), goog.math.lerp(e.y, t.y, o))
}, goog.functions = {}, goog.functions.constant = function(e) {
    return function() {
        return e
    }
}, goog.functions.FALSE = goog.functions.constant(!1), goog.functions.TRUE = goog.functions.constant(!0), goog.functions.NULL = goog.functions.constant(null), goog.functions.identity = function(e) {
    return e
}, goog.functions.error = function(e) {
    return function() {
        throw Error(e)
    }
}, goog.functions.fail = function(e) {
    return function() {
        throw e
    }
}, goog.functions.lock = function(e, t) {
    return t = t || 0,
        function() {
            return e.apply(this, Array.prototype.slice.call(arguments, 0, t))
        }
}, goog.functions.nth = function(e) {
    return function() {
        return arguments[e]
    }
}, goog.functions.withReturnValue = function(e, t) {
    return goog.functions.sequence(e, goog.functions.constant(t))
}, goog.functions.compose = function() {
    var e = arguments,
        t = e.length;
    return function() {
        var o;
        t && (o = e[t - 1].apply(this, arguments));
        for (var n = t - 2; n >= 0; n--) o = e[n].call(this, o);
        return o
    }
}, goog.functions.sequence = function() {
    var e = arguments,
        t = e.length;
    return function() {
        for (var o, n = 0; t > n; n++) o = e[n].apply(this, arguments);
        return o
    }
}, goog.functions.and = function() {
    var e = arguments,
        t = e.length;
    return function() {
        for (var o = 0; t > o; o++)
            if (!e[o].apply(this, arguments)) return !1;
        return !0
    }
}, goog.functions.or = function() {
    var e = arguments,
        t = e.length;
    return function() {
        for (var o = 0; t > o; o++)
            if (e[o].apply(this, arguments)) return !0;
        return !1
    }
}, goog.functions.not = function(e) {
    return function() {
        return !e.apply(this, arguments)
    }
}, goog.functions.create = function(e) {
    var t = function() {};
    return t.prototype = e.prototype, t = new t, e.apply(t, Array.prototype.slice.call(arguments, 1)), t
}, goog.functions.CACHE_RETURN_VALUE = !0, goog.functions.cacheReturnValue = function(e) {
    var t, o = !1;
    return function() {
        return goog.functions.CACHE_RETURN_VALUE ? (o || (t = e(), o = !0), t) : e()
    }
}, goog.async = {}, goog.async.AnimationDelay = function(e, t, o) {
    goog.async.AnimationDelay.base(this, "constructor"), this.listener_ = e, this.handler_ = o, this.win_ = t || window, this.callback_ = goog.bind(this.doAction_, this)
}, goog.inherits(goog.async.AnimationDelay, goog.Disposable), goog.async.AnimationDelay.prototype.id_ = null, goog.async.AnimationDelay.prototype.usingListeners_ = !1, goog.async.AnimationDelay.TIMEOUT = 20, goog.async.AnimationDelay.MOZ_BEFORE_PAINT_EVENT_ = "MozBeforePaint", goog.async.AnimationDelay.prototype.start = function() {
    this.stop(), this.usingListeners_ = !1;
    var e = this.getRaf_(),
        t = this.getCancelRaf_();
    e && !t && this.win_.mozRequestAnimationFrame ? (this.id_ = goog.events.listen(this.win_, goog.async.AnimationDelay.MOZ_BEFORE_PAINT_EVENT_, this.callback_), this.win_.mozRequestAnimationFrame(null), this.usingListeners_ = !0) : this.id_ = e && t ? e.call(this.win_, this.callback_) : this.win_.setTimeout(goog.functions.lock(this.callback_), goog.async.AnimationDelay.TIMEOUT)
}, goog.async.AnimationDelay.prototype.stop = function() {
    if (this.isActive()) {
        var e = this.getRaf_(),
            t = this.getCancelRaf_();
        e && !t && this.win_.mozRequestAnimationFrame ? goog.events.unlistenByKey(this.id_) : e && t ? t.call(this.win_, this.id_) : this.win_.clearTimeout(this.id_)
    }
    this.id_ = null
}, goog.async.AnimationDelay.prototype.fire = function() {
    this.stop(), this.doAction_()
}, goog.async.AnimationDelay.prototype.fireIfActive = function() {
    this.isActive() && this.fire()
}, goog.async.AnimationDelay.prototype.isActive = function() {
    return null != this.id_
}, goog.async.AnimationDelay.prototype.doAction_ = function() {
    this.usingListeners_ && this.id_ && goog.events.unlistenByKey(this.id_), this.id_ = null, this.listener_.call(this.handler_, goog.now())
}, goog.async.AnimationDelay.prototype.disposeInternal = function() {
    this.stop(), goog.async.AnimationDelay.base(this, "disposeInternal")
}, goog.async.AnimationDelay.prototype.getRaf_ = function() {
    var e = this.win_;
    return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || null
}, goog.async.AnimationDelay.prototype.getCancelRaf_ = function() {
    var e = this.win_;
    return e.cancelRequestAnimationFrame || e.webkitCancelRequestAnimationFrame || e.mozCancelRequestAnimationFrame || e.oCancelRequestAnimationFrame || e.msCancelRequestAnimationFrame || null
}, Blockly.AutoScroll = function(e, t) {
    this.blockSpace_ = e, this.activePanVector_ = t, this.animationDelay_ = new goog.async.AnimationDelay(this.handleAnimationDelay_.bind(this), window), this.lastTime_ = Date.now(), this.animationDelay_.start()
}, Blockly.AutoScroll.prototype.stopAndDestroy = function() {
    this.activePanVector_ = null, this.animationDelay_.dispose(), this.lastMouseY_ = this.lastMouseX_ = null
}, Blockly.AutoScroll.prototype.handleAnimationDelay_ = function(e) {
    var t = e - this.lastTime_;
    this.lastTime_ = e, this.scrollTick_(t), this.animationDelay_.start()
}, Blockly.AutoScroll.prototype.scrollTick_ = function(e) {
    this.blockSpace_.scrollDeltaWithAnySelectedBlock(this.activePanVector_.x * e, this.activePanVector_.y * e, this.lastMouseX_, this.lastMouseY_)
}, Blockly.AutoScroll.prototype.updateProperties = function(e, t, o) {
    this.activePanVector_ = e, this.lastMouseX_ = t, this.lastMouseY_ = o
}, Blockly.ScrollOnBlockDragHandler = function(e) {
    this.blockSpace_ = e, this.SCROLL_DIRECTION_VECTORS = {
        top: new goog.math.Vec2(0, -1),
        bottom: new goog.math.Vec2(0, 1),
        left: new goog.math.Vec2(-1, 0),
        right: new goog.math.Vec2(1, 0)
    }
}, Blockly.ScrollOnBlockDragHandler.prototype.stopAutoScrolling = function() {
    this.activeAutoScroll_ && this.activeAutoScroll_.stopAndDestroy(), this.activeAutoScroll_ = null
};
var MS_PER_SEC = 1e3,
    MOUSE_SPEED_SLOW = .5,
    MOUSE_SPEED_FAST = 1.6,
    BLOCK_SPEED_SLOW = .28,
    BLOCK_SPEED_FAST = 1.4,
    MOUSE_START_DISTANCE = 0,
    MOUSE_START_FAST_DISTANCE = 35,
    BLOCK_START_DISTANCE = 0,
    BLOCK_START_FAST_DISTANCE = 50,
    OVERSIZE_BLOCK_THRESHOLD = .85,
    FALLBACK_DRAG_MARGIN = 15;
Blockly.ScrollOnBlockDragHandler.DEBUG = !1, Blockly.ScrollOnBlockDragHandler.prototype.panIfOverEdge = function(e, t, o) {
    if (this.blockSpace_.currentlyScrollable()) {
        var n = [];
        if (this.blockSpace_.scrollbarPair && this.blockSpace_.scrollbarPair.canScrollHorizontally() && n.push("left", "right"), this.blockSpace_.scrollbarPair && this.blockSpace_.scrollbarPair.canScrollVertically() && n.push("top", "bottom"), 0 !== n.length) {
            var i = Blockly.mouseCoordinatesToSvg(t, o, this.blockSpace_.blockSpaceEditor.svg_),
                i = Blockly.svgCoordinatesToViewport(new goog.math.Coordinate(i.x, i.y), this.blockSpace_),
                i = Blockly.viewportCoordinateToBlockSpace(i, this.blockSpace_),
                r = this.blockSpace_.getViewportBox(),
                l = e.getBox(),
                s = Blockly.getBoxHeight(l),
                a = Blockly.getBoxHeight(r);
            s > a * OVERSIZE_BLOCK_THRESHOLD && (l.top = Math.max(l.top, i.y - FALLBACK_DRAG_MARGIN), l.bottom = Math.min(l.bottom, i.y + FALLBACK_DRAG_MARGIN)), s = Blockly.getBoxWidth(l), a = Blockly.getBoxWidth(r), s > a * OVERSIZE_BLOCK_THRESHOLD && (l.left = Math.max(l.left, i.x - FALLBACK_DRAG_MARGIN), l.right = Math.min(l.right, i.x + FALLBACK_DRAG_MARGIN));
            var g = Blockly.getBoxOverflow(r, l),
                c = Blockly.getPointBoxOverflow(r, new goog.math.Coordinate(i.x, i.y));
            Blockly.ScrollOnBlockDragHandler.DEBUG && (this.blockSpace_.drawDebugCircle("mouse circle", new goog.math.Coordinate(i.x, i.y), "orange"), this.blockSpace_.drawDebugBox("block box" + e.id, l, "purple"), this.blockSpace_.drawDebugBox("block space box", r, "blue"));
            var u = new goog.math.Vec2(0, 0);
            n.forEach(function(e) {
                var t = c[e],
                    o = g[e];
                e = this.SCROLL_DIRECTION_VECTORS[e];
                var n = [];
                Blockly.numberWithin(o, BLOCK_START_DISTANCE, BLOCK_START_FAST_DISTANCE, !1) && n.push(e.clone().scale(BLOCK_SPEED_SLOW)), o > BLOCK_START_FAST_DISTANCE && n.push(e.clone().scale(BLOCK_SPEED_FAST)), Blockly.numberWithin(t, MOUSE_START_DISTANCE, MOUSE_START_FAST_DISTANCE, !1) && n.push(e.clone().scale(MOUSE_SPEED_SLOW)), t > MOUSE_START_FAST_DISTANCE && n.push(e.clone().scale(MOUSE_SPEED_FAST)), (t = n.reduce(function(e, t) {
                    return e && e.magnitude() > t.magnitude() ? e : t
                }, null)) && (u = goog.math.Vec2.sum(u, t))
            }, this), u.equals(new goog.math.Vec2(0, 0)) ? this.stopAutoScrolling() : (this.activeAutoScroll_ = this.activeAutoScroll_ || new Blockly.AutoScroll(this.blockSpace_, u), this.activeAutoScroll_.updateProperties(u, t, o))
        }
    }
}, Blockly.Xml = {}, Blockly.Xml.blockSpaceToDom = function(e) {
    var t = Blockly.isMsie() ? document.createElementNS(null, "xml") : document.createElement("xml");
    e = e.getTopBlocks(!0);
    for (var o, n = 0; n < e.length; n++) o = e[n], o = Blockly.Xml.blockToDom(o), t.appendChild(o);
    return t
}, Blockly.Xml.blockToDom = function(e, t) {
    var o, n, i, r, l, s = goog.dom.createDom("block");
    for (s.setAttribute("type", e.type), e.mutationToDom && (r = e.mutationToDom()) && s.appendChild(r), n = 0; n < e.inputList.length; n++)
        for (r = e.inputList[n], i = 0; i < r.titleRow.length; i++)
            if (l = r.titleRow[i], l.name && l.EDITABLE) {
                var a = goog.dom.createDom("title", null, l.getValue());
                a.setAttribute("name", l.name), l.config && a.setAttribute("config", l.config), s.appendChild(a)
            }
    for (e.comment && (r = goog.dom.createDom("comment", null, e.comment.getText()), r.setAttribute("pinned", e.comment.isVisible()), n = e.comment.getBubbleSize(), r.setAttribute("h", n.height), r.setAttribute("w", n.width), s.appendChild(r)), i = !1, n = 0; n < e.inputList.length; n++)
        if (r = e.inputList[n], l = !0, r.type != Blockly.DUMMY_INPUT) {
            var a = !1,
                g = r.connection.targetBlock();
            r.type === Blockly.INPUT_VALUE ? (o = goog.dom.createDom("value"), i = !0) : r.type === Blockly.NEXT_STATEMENT ? (o = goog.dom.createDom("statement"), a = t) : r.type === Blockly.FUNCTIONAL_INPUT && (o = goog.dom.createDom("functional_input"), a = t, i = !0), g && !a && (o.appendChild(Blockly.Xml.blockToDom(g)), l = !1), o.setAttribute("name", r.name), l || s.appendChild(o)
        }
    return i && s.setAttribute("inline", e.inputsInline), e.isCollapsed() && s.setAttribute("collapsed", !0), e.disabled && s.setAttribute("disabled", !0), e.isDeletable() || s.setAttribute("deletable", !1), e.isMovable() || s.setAttribute("movable", !1), e.isEditable() || s.setAttribute("editable", !1), e.isUserVisible() || s.setAttribute("uservisible", !1), /^procedures_def/.test(e.type) && e.userCreated && s.setAttribute("usercreated", !0), e.htmlId && s.setAttribute("id", e.htmlId), e.nextConnection && !t && (o = e.nextConnection.targetBlock()) && (o = goog.dom.createDom("next", null, Blockly.Xml.blockToDom(o)), s.appendChild(o)), s
}, Blockly.Xml.domToText = function(e) {
    return (new XMLSerializer).serializeToString(e).replace(RegExp(' xmlns="http://www.w3.org/1999/xhtml"', "g"), "")
}, Blockly.Xml.domToPrettyText = function(e) {
    e = Blockly.Xml.domToText(e).split("<");
    for (var t = "", o = 1; o < e.length; o++) {
        var n = e[o];
        "/" == n[0] && (t = t.substring(2)), e[o] = t + "<" + n, "/" != n[0] && "/>" != n.slice(-2) && (t += "  ")
    }
    return e = e.join("\n"), e = e.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, "$1</$2>"), e.replace(/^\n/, "")
}, Blockly.Xml.textToDom = function(e) {
    if (e = (new DOMParser).parseFromString(e, "text/xml"), !e || !e.firstChild || "xml" != e.firstChild.nodeName.toLowerCase()) throw "Blockly.Xml.textToDom did not obtain a valid XML tree.";
    return e.firstChild
}, Blockly.Xml.domToBlockSpace = function(e, t) {
    for (var o, n = e.getMetrics(), i = n ? n.viewWidth : 0, r = Blockly.RTL ? i - Blockly.BlockSpace.AUTO_LAYOUT_PADDING_LEFT : Blockly.BlockSpace.AUTO_LAYOUT_PADDING_LEFT, l = Blockly.BlockSpace.AUTO_LAYOUT_PADDING_TOP, n = function(e) {
            var t = e.blockly_block.getSvgPadding() || {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                o = e.blockly_block.getHeightWidth();
            isNaN(e.x) ? (e.x = r, e.x += Blockly.RTL ? -t.right : t.left) : e.x = Blockly.RTL ? i - e.x : e.x, isNaN(e.y) && (e.y = l + t.top, l += o.height + Blockly.BlockSvg.SEP_SPACE_Y + t.bottom + t.top), e.blockly_block.moveTo(e.x, e.y)
        }, s = [], a = 0; o = t.childNodes[a]; a++)
        if ("block" === o.nodeName.toLowerCase()) {
            var g = Blockly.Xml.domToBlock(e, o),
                c = parseInt(o.getAttribute("x"), 10);
            o = parseInt(o.getAttribute("y"), 10), s.push({
                blockly_block: g,
                x: c,
                y: o
            })
        }
    s.filter(function(e) {
        return e.blockly_block.isVisible()
    }).forEach(n), s.filter(function(e) {
        return !e.blockly_block.isVisible()
    }).forEach(n), e.events.dispatchEvent(Blockly.BlockSpace.EVENTS.EVENT_BLOCKS_IMPORTED)
}, Blockly.Xml.domToBlock = function(e, t) {
    var o = t.getAttribute("type"),
        n = t.getAttribute("id"),
        o = new Blockly.Block(e, o, n);
    o.initSvg(), (n = t.getAttribute("inline")) && o.setInputsInline("true" === n), (n = t.getAttribute("collapsed")) && o.setCollapsed("true" === n), (n = t.getAttribute("disabled")) && o.setDisabled("true" === n), (n = t.getAttribute("deletable")) && o.setDeletable("true" === n), (n = t.getAttribute("movable")) && o.setMovable("true" === n), (n = t.getAttribute("editable")) && o.setEditable("true" === n), (n = t.getAttribute("next_connection_disabled")) && o.setNextConnectionDisabled("true" === n), (n = t.getAttribute("uservisible")) && o.setUserVisible("true" === n), (n = t.getAttribute("usercreated")) && (o.userCreated = "true" === n);
    for (var i, r = null, n = 0; n < t.childNodes.length; n++)
        if (i = t.childNodes[n], 3 != i.nodeType || !i.data.match(/^\s*$/)) {
            for (var l, r = null, s = 0; s < i.childNodes.length; s++) l = i.childNodes[s], 3 == l.nodeType && l.data.match(/^\s*$/) || (r = l);
            switch (s = i.getAttribute("name"), i.nodeName.toLowerCase()) {
                case "mutation":
                    o.domToMutation && o.domToMutation(i);
                    break;
                case "comment":
                    o.setCommentText(i.textContent), (r = i.getAttribute("pinned")) && o.comment.setVisible("true" == r), r = parseInt(i.getAttribute("w"), 10), i = parseInt(i.getAttribute("h"), 10), isNaN(r) || isNaN(i) || o.comment.setBubbleSize(r, i);
                    break;
                case "title":
                    (r = i.getAttribute("config")) && o.setFieldConfig(s, r), o.setTitleValue(i.textContent, s);
                    break;
                case "value":
                case "statement":
                case "functional_input":
                    if (i = o.getInput(s), !i) throw "Input does not exist: " + s;
                    if (r && "block" == r.nodeName.toLowerCase())
                        if (r = Blockly.Xml.domToBlock(e, r), r.outputConnection) i.connection.connect(r.outputConnection);
                        else {
                            if (!r.previousConnection) throw "Child block does not have output or previous statement.";
                            i.connection.connect(r.previousConnection)
                        }
                    break;
                case "next":
                    if (r && "block" == r.nodeName.toLowerCase()) {
                        if (!o.nextConnection) throw "Next statement does not exist.";
                        if (o.nextConnection.targetConnection) throw "Next statement is already connected.";
                        if (r = Blockly.Xml.domToBlock(e, r), !r.previousConnection) throw "Next block does not have previous statement.";
                        o.nextConnection.connect(r.previousConnection)
                    }
            }
        }
    return (n = o.nextConnection && o.nextConnection.targetBlock()) ? n.render() : o.render(), o
}, Blockly.Xml.deleteNext = function(e) {
    for (var t, o = 0; o < e.childNodes.length; o++)
        if (t = e.childNodes[o], "next" == t.nodeName.toLowerCase()) {
            e.removeChild(t);
            break
        }
}, Blockly.ScrollOnWheelHandler = function(e) {
    this.blockSpace_ = e, this.mousewheelEventBindData_ = this.wheelEventBindData_ = null
}, Blockly.ScrollOnWheelHandler.prototype.bindTo = function(e) {
    this.unbindWheelScrollHandler(), this.wheelEventBindData_ = Blockly.bindEvent_(e, "wheel", this, this.onWheel_), this.mousewheelEventBindData_ = Blockly.bindEvent_(e, "mousewheel", this, this.onWheel_)
}, Blockly.ScrollOnWheelHandler.prototype.unbindWheelScrollHandler = function() {
    this.wheelEventBindData_ && (Blockly.unbindEvent_(this.wheelEventBindData_), this.wheelEventBindData_ = null), this.mousewheelEventBindData_ && (Blockly.unbindEvent_(this.mousewheelEventBindData_), this.mousewheelEventBindData_ = null)
}, Blockly.ScrollOnWheelHandler.prototype.onWheel_ = function(e) {
    if (this.blockSpace_.scrollbarPair) {
        var t = Blockly.getNormalizedWheelDeltaY(e);
        t && (this.blockSpace_.scrollWithAnySelectedBlock(this.blockSpace_.getScrollOffsetX(), this.blockSpace_.getScrollOffsetY() + t, e.clientX, e.clientY), e.stopPropagation(), e.preventDefault())
    }
}, Blockly.BlockSpace = function(e, t, o) {
    this.blockSpaceEditor = e, this.getMetrics = t, this.setMetrics = function(e) {
        o(e), Blockly.fireUiEvent(window, "block_space_metrics_set")
    }, this.isFlyout = !1, this.topBlocks_ = [], this.deleteAreas_ = [], this.pickedUpBlockOrigin_ = null, this.maxBlocks = 1 / 0, this.events = new goog.events.EventTarget, this.panDragHandler_ = new Blockly.PanDragHandler(this), this.scrollOnWheelHandler_ = new Blockly.ScrollOnWheelHandler(this), this.scrollOnBlockDragHandler_ = new Blockly.ScrollOnBlockDragHandler(this), Blockly.ConnectionDB.init(this), Blockly.BlockSpace.DEBUG_EVENTS && this.debugLogOnEvents(), this.events.listen(Blockly.BlockSpace.EVENTS.EVENT_BLOCKS_IMPORTED, this.updateScrollableSize.bind(this))
}, Blockly.BlockSpace.DEBUG_EVENTS = !1, Blockly.BlockSpace.EVENTS = {}, Blockly.BlockSpace.EVENTS.EVENT_BLOCKS_IMPORTED = "blocksImported", Blockly.BlockSpace.EVENTS.BLOCK_SPACE_CHANGE = "blockSpaceChange", Blockly.BlockSpace.SCAN_ANGLE = 3, Blockly.BlockSpace.AUTO_LAYOUT_PADDING_TOP = 16, Blockly.BlockSpace.AUTO_LAYOUT_PADDING_LEFT = 16, Blockly.BlockSpace.DROPPED_BLOCK_PAN_MARGIN = 25, Blockly.BlockSpace.SCROLLABLE_MARGIN_BELOW_BOTTOM = 100, Blockly.BlockSpace.prototype.xOffsetFromView = 0, Blockly.BlockSpace.prototype.yOffsetFromView = 0, Blockly.BlockSpace.prototype.trashcan = null;
var fireGlobalChangeEventPid_ = Blockly.BlockSpace.prototype.fireChangeEventPid_ = null;
Blockly.BlockSpace.prototype.scrollbarPair = null, Blockly.BlockSpace.prototype.debugLogOnEvents = function() {
    goog.object.forEach(Blockly.BlockSpace.EVENTS, function(e, t) {
        this.events.listen(e, function(o) {
            console.log(o), console.log(t), console.log(e)
        }, !1, this)
    }, this)
}, Blockly.BlockSpace.prototype.findFunction = function(e) {
    return goog.array.find(this.getTopBlocks(), function(t) {
        return goog.array.contains(Blockly.Procedures.DEFINITION_BLOCK_TYPES, t.type) && Blockly.Names.equals(e, t.getTitleValue("NAME"))
    })
}, Blockly.BlockSpace.prototype.findFunctionExamples = function(e) {
    return goog.array.filter(this.getTopBlocks(), function(t) {
        return Blockly.ContractEditor.EXAMPLE_BLOCK_TYPE === t.type ? (t = t.getInputTargetBlock(Blockly.ContractEditor.EXAMPLE_BLOCK_ACTUAL_INPUT_NAME)) && (!e || Blockly.Names.equals(e, t.getTitleValue("NAME"))) : !1
    })
}, Blockly.BlockSpace.prototype.createDom = function() {
    return this.svgGroup_ = Blockly.createSvgElement("g", {
        "class": "svgGroup"
    }, null), this.clippingGroup_ = Blockly.createSvgElement("g", {
        "class": "svgClippingGroup"
    }, this.svgGroup_), this.svgBlockCanvas_ = Blockly.createSvgElement("g", {
        "class": "svgBlockCanvas"
    }, this.clippingGroup_), this.svgDragCanvas_ = Blockly.createSvgElement("g", {
        "class": "svgDragCanvas"
    }, this.svgGroup_), this.svgBubbleCanvas_ = Blockly.createSvgElement("g", {
        "class": "svgBubbleCanvas"
    }, this.svgGroup_), this.svgDebugCanvas_ = Blockly.createSvgElement("g", {
        "class": "svgDebugCanvas"
    }, this.svgGroup_), this.fireChangeEvent(), this.svgGroup_
}, Blockly.BlockSpace.prototype.moveElementToDragCanvas = function(e) {
    this.getDragCanvas().appendChild(e)
}, Blockly.BlockSpace.prototype.moveElementToMainCanvas = function(e) {
    this.getCanvas().appendChild(e)
}, Blockly.BlockSpace.prototype.dispose = function() {
    this.svgGroup_ && (goog.dom.removeNode(this.svgGroup_), this.svgGroup_ = null), this.svgBubbleCanvas_ = this.svgDebugCanvas_ = this.svgDragCanvas_ = this.svgBlockCanvas_ = null, this.flyout_ && (this.flyout_.dispose(), this.flyout_ = null), this.trashcan && (this.trashcan.dispose(), this.trashcan = null), this.scrollbarPair && (this.scrollbarPair.dispose(), this.scrollbarPair = null)
}, Blockly.BlockSpace.prototype.addTrashcan = function() {
    if (Blockly.hasTrashcan && !Blockly.readOnly) {
        this.trashcan = new Blockly.Trashcan(this);
        var e = this.trashcan.createDom();
        this.svgBlockCanvas_.appendChild(e), this.trashcan.init()
    }
}, Blockly.BlockSpace.prototype.setTrashcan = function(e) {
    this.trashcan = e
}, Blockly.BlockSpace.prototype.getClippingGroup = function() {
    return this.clippingGroup_
}, Blockly.BlockSpace.prototype.getCanvas = function() {
    return this.svgBlockCanvas_
}, Blockly.BlockSpace.prototype.getDragCanvas = function() {
    return this.svgDragCanvas_
}, Blockly.BlockSpace.prototype.getBubbleCanvas = function() {
    return this.svgBubbleCanvas_
}, Blockly.BlockSpace.prototype.addTopBlock = function(e) {
    this.topBlocks_.push(e), this.fireChangeEvent()
}, Blockly.BlockSpace.prototype.removeTopBlock = function(e) {
    for (var t, o = !1, n = 0; n < this.topBlocks_.length; n++)
        if (t = this.topBlocks_[n], t == e) {
            this.topBlocks_.splice(n, 1), o = !0;
            break
        }
    if (!o) throw "Block not present this blockSpace's list of top-most blocks.";
    this.fireChangeEvent()
}, Blockly.BlockSpace.prototype.getTopBlocks = function(e, t) {
    void 0 === e && (e = !1), void 0 === t && (t = !0);
    var o = [],
        o = !t || this !== Blockly.mainBlockSpace && this !== Blockly.modalBlockSpace ? o.concat(this.topBlocks_) : o.concat(Blockly.mainBlockSpace.topBlocks_).concat(Blockly.modalBlockSpace ? Blockly.modalBlockSpace.topBlocks_ : []);
    if (e && 1 < o.length) {
        var n = Math.sin(Blockly.BlockSpace.SCAN_ANGLE / 180 * Math.PI);
        Blockly.RTL && (n *= -1), o.sort(function(e, t) {
            var o = e.getRelativeToSurfaceXY(),
                i = t.getRelativeToSurfaceXY();
            return o.y + n * o.x - (i.y + n * i.x)
        })
    }
    return o
}, Blockly.BlockSpace.prototype.getAllVisibleBlocks = function() {
    return goog.array.filter(this.getAllBlocks(), function(e) {
        return e.isUserVisible()
    })
}, Blockly.BlockSpace.prototype.getAllBlocks = function(e) {
    e = e || {}, e = this.getTopBlocks(!1, e.shareMainModal);
    for (var t = 0; t < e.length; t++) e = e.concat(e[t].getChildren());
    return e
}, Blockly.BlockSpace.prototype.getBlockCount = function() {
    return this.getAllVisibleBlocks().length
}, Blockly.BlockSpace.prototype.clear = function() {
    for (this.blockSpaceEditor.hideChaff(); this.topBlocks_.length;) this.topBlocks_[0].dispose()
}, Blockly.BlockSpace.prototype.render = function() {
    for (var e, t = this.getAllBlocks(), o = 0; o < t.length; o++) e = t[o], e.getChildren().length || e.render()
}, Blockly.BlockSpace.prototype.getBlockById = function(e) {
    for (var t, o = this.getAllBlocks(), n = 0; n < o.length; n++)
        if (t = o[n], t.id == e) return t;
    return null
}, Blockly.BlockSpace.prototype.traceOn = function(e) {
    this.traceOn_ = e, this.traceWrapper_ && (Blockly.unbindEvent_(this.traceWrapper_), this.traceWrapper_ = null), e && (this.traceWrapper_ = Blockly.bindEvent_(this.svgBlockCanvas_, "blocklySelectChange", this, function() {
        this.traceOn_ = !1
    }))
}, Blockly.BlockSpace.prototype.highlightBlock = function(e, t) {
    if (this.traceOn_ && !Blockly.Block.isDragging()) {
        var o = null;
        if (e && (o = this.getBlockById(e), !o)) return;
        this.traceOn(!1), o ? o.select(t) : Blockly.selected && Blockly.selected.unselect(), this.traceOn(!0)
    }
}, Blockly.BlockSpace.prototype.fireChangeEvent = function() {
    this.fireChangeEventPid_ && window.clearTimeout(this.fireChangeEventPid_);
    var e = this.svgBlockCanvas_;
    if (e) {
        var t = this;
        this.fireChangeEventPid_ = window.setTimeout(function() {
            t.events.dispatchEvent(Blockly.BlockSpace.EVENTS.BLOCK_SPACE_CHANGE), Blockly.fireUiEvent(e, "blocklyBlockSpaceChange")
        }, 0)
    }
    fireGlobalChangeEventPid_ && window.clearTimeout(fireGlobalChangeEventPid_), fireGlobalChangeEventPid_ = window.setTimeout(function() {
        Blockly.fireUiEvent(window, "workspaceChange")
    }, 0)
}, Blockly.BlockSpace.prototype.paste = function(e) {
    var t = e.dom;
    if (this !== e.sourceBlockSpace) {
        if ("parameters_get" === t.getAttribute("type")) return;
        goog.array.forEach(t.getElementsByTagName("block"), function(e) {
            "parameters_get" === e.getAttribute("type") && goog.dom.removeNode(e)
        })
    }
    if (!(t.getElementsByTagName("block").length >= this.remainingCapacity())) {
        e = Blockly.Xml.domToBlock(this, t);
        var o = parseInt(t.getAttribute("x"), 10),
            t = parseInt(t.getAttribute("y"), 10);
        if (!isNaN(o) && !isNaN(t)) {
            Blockly.RTL && (o = -o);
            var n;
            do {
                n = !1;
                for (var i, r = this.getAllBlocks(), l = 0; l < r.length; l++) i = r[l], i = i.getRelativeToSurfaceXY(), 1 >= Math.abs(o - i.x) && 1 >= Math.abs(t - i.y) && (o = Blockly.RTL ? o - Blockly.SNAP_RADIUS : o + Blockly.SNAP_RADIUS, t += 2 * Blockly.SNAP_RADIUS, n = !0)
            } while (n);
            e.moveBy(o, t)
        }
        e.setUserVisible(!0), e.select()
    }
}, Blockly.BlockSpace.prototype.remainingCapacity = function() {
    return 1 / 0 == this.maxBlocks ? 1 / 0 : this.maxBlocks - this.getAllBlocks().length
}, Blockly.BlockSpace.prototype.recordPickedUpBlockOrigin = function() {
    var e = this.blockSpaceEditor.getCanvasBBox(this.getDragCanvas());
    this.pickedUpBlockOrigin_ = Blockly.svgRectToRect(e)
}, Blockly.BlockSpace.prototype.clearPickedUpBlockOrigin = function() {
    this.pickedUpBlockOrigin_ = null
}, Blockly.BlockSpace.prototype.recordDeleteAreas = function() {
    this.deleteAreas_ = [], this.trashcan ? (goog.array.extend(this.deleteAreas_, this.trashcan.getRect()), this.deleteAreaTrash_ = this.trashcan.getRect()) : this.deleteAreaTrash_ = null, this.flyout_ && goog.array.extend(this.deleteAreas_, this.flyout_.getRect()), this.blockSpaceEditor && goog.array.extend(this.deleteAreas_, this.blockSpaceEditor.getDeleteAreas())
}, Blockly.BlockSpace.prototype.isDeleteArea = function(e, t, o) {
    if (!Blockly.languageTree) return !1;
    for (e = Blockly.mouseCoordinatesToSvg(e, t, this.blockSpaceEditor.svg_), e = new goog.math.Coordinate(e.x, e.y), o = Blockly.mouseCoordinatesToSvg(o, 0, this.blockSpaceEditor.svg_), o = new goog.math.Coordinate(o.x, o.x), this.deleteAreaTrash_ && this.trashcan.setOpen_(this.deleteAreaTrash_.contains(e) ? !0 : !1), this.drawTrashZone(e.x, o.x), o = 0; o < this.deleteAreas_.length; o++)
        if (t = this.deleteAreas_[o], t.contains(e)) return !0;
    return this.blockSpaceEditor.setCursor(Blockly.Css.Cursor.CLOSED), !1
}, Blockly.BlockSpace.prototype.hideDelete = function() {
    this.drawTrashZone(Blockly.RTL ? -1e4 : 1e4, 0)
}, Blockly.BlockSpace.prototype.drawTrashZone = function(e, t) {
    var o, n, i, r, l = null,
        s = this.blockSpaceEditor.hideTrashRect_ ? Blockly.mainBlockSpaceEditor : this.blockSpaceEditor;
    this.blockSpaceEditor.toolbox ? (r = s.toolbox, o = s.svgBackground_, n = r.tree_.element_, i = r.trashcan, r = r.trashcanHolder, this.blockSpaceEditor.hideTrashRect_ && (l = this.blockSpaceEditor.toolbox.tree_.element_)) : (i = s.flyout_, o = i.svgBackground_, n = i.blockSpace_.svgGroup_, i = i.trashcan, r = i.svgGroup_, this.blockSpaceEditor.hideTrashRect_ && (l = this.blockSpaceEditor.flyout_.svgGroup_));
    var a, g = o.getBoundingClientRect().width,
        c = !1;
    Blockly.RTL ? (c = e > t + 10, g = s.svg_.getBoundingClientRect().width - g, s = g - e, a = g - t - 10) : (c = t - 10 > e, s = e - g, a = t - g - 10);
    var g = 1,
        u = 1 - .8;
    c && (0 >= s ? (g = 0, i.setOpen_(!0)) : (i.setOpen_(!1), g = s >= a ? 1 : 100 > a ? s / a : 100 > s ? .8 * (s / 100) : .8 + (s - 100) / (a - 100) * u)), i = 1 - g, o.style.fill = "rgb(" + Math.floor(170 * i + 221 * g) + ", " + Math.floor(170 * i + 221 * g) + ", " + Math.floor(170 * i + 221 * g) + ")", n.style.opacity = g, l && (l.style.opacity = g), r.style.opacity = i, r.style.display = 0 === i ? "none" : "block"
}, Blockly.BlockSpace.prototype.getScrollableSize = function(e) {
    var t = this.scrollbarPair,
        o = t && t.canScrollHorizontally(),
        t = t && t.canScrollVertically(),
        n = this.isFlyout ? 0 : Blockly.BlockSpace.SCROLLABLE_MARGIN_BELOW_BOTTOM;
    return {
        width: o ? Math.max(e.contentLeft + e.contentWidth, e.viewWidth) : e.viewWidth,
        height: t ? Math.max(e.contentTop + e.contentHeight + n, e.viewHeight) : e.viewHeight
    }
}, Blockly.BlockSpace.prototype.getScrollableBox = function() {
    var e = this.getScrollableSize(this.getMetrics());
    return new goog.math.Box(0, e.width, e.height, 0)
}, Blockly.BlockSpace.prototype.getViewportBox = function() {
    var e = this.getMetrics();
    return new goog.math.Box(this.getScrollOffsetY(), this.getScrollOffsetX() + e.viewWidth, this.getScrollOffsetY() + e.viewHeight, this.getScrollOffsetX())
}, Blockly.BlockSpace.prototype.panIfOverEdge = function(e, t, o) {
    this.scrollOnBlockDragHandler_.panIfOverEdge(e, t, o)
}, Blockly.BlockSpace.prototype.stopAutoScrolling = function() {
    this.scrollOnBlockDragHandler_.stopAutoScrolling()
}, Blockly.BlockSpace.prototype.scrollIntoView = function(e) {
    var t = e.getBox(),
        o = this.getViewportBox();
    e = Blockly.getBoxOverflow(o, t), Blockly.addToNonZeroSides(e, Blockly.BlockSpace.DROPPED_BLOCK_PAN_MARGIN);
    var n = Blockly.isBoxWiderThan(t, o),
        i = Blockly.isBoxTallerThan(t, o),
        t = n || i ? goog.math.Box.intersects(t, o) : !1;
    this.scrollToDelta(n && t ? 0 : e.right - e.left, i && t ? 0 : e.bottom - e.top)
}, Blockly.BlockSpace.prototype.scrollDeltaWithAnySelectedBlock = function(e, t, o, n) {
    this.scrollWithAnySelectedBlock(this.getScrollOffsetX() + e, this.getScrollOffsetY() + t, o, n)
}, Blockly.BlockSpace.prototype.scrollWithAnySelectedBlock = function(e, t, o, n) {
    var i = this.getScrollOffset();
    this.scrollTo(e, t), Blockly.Block.isFreelyDragging() && Blockly.selected && (e = this.getScrollOffset().subtract(i), Blockly.selected.startDragMouseX -= e.x, Blockly.selected.startDragMouseY -= e.y, Blockly.selected.moveBlockBeingDragged_(o, n))
}, Blockly.BlockSpace.prototype.scrollToDelta = function(e, t) {
    this.scrollTo(this.getScrollOffsetX() + e, this.getScrollOffsetY() + t)
}, Blockly.BlockSpace.prototype.scrollTo = function(e, t) {
    if (this.scrollbarPair) {
        var o = this.getMaxScrollOffsets();
        e = goog.math.clamp(e, 0, o.x), t = goog.math.clamp(t, 0, o.y), this.scrollbarPair.set(e, t)
    }
}, Blockly.BlockSpace.prototype.currentlyScrollable = function() {
    var e = this.getMaxScrollOffsets();
    return 0 < e.x || 0 < e.y
}, Blockly.BlockSpace.prototype.getMaxScrollOffsets = function() {
    var e = this.getMetrics(),
        t = this.getScrollableSize(e);
    return {
        x: t.width - e.viewWidth,
        y: t.height - e.viewHeight
    }
}, Blockly.BlockSpace.prototype.getScrollOffset = function() {
    return new goog.math.Vec2(this.getScrollOffsetX(), this.getScrollOffsetY())
}, Blockly.BlockSpace.prototype.getScrollOffsetX = function() {
    return -this.xOffsetFromView
}, Blockly.BlockSpace.prototype.getScrollOffsetY = function() {
    return -this.yOffsetFromView
}, Blockly.BlockSpace.prototype.updateScrollableSize = function() {
    this.scrollbarPair && this.scrollbarPair.resize()
}, Blockly.BlockSpace.prototype.bindBeginPanDragHandler = function(e, t) {
    this.panDragHandler_.bindBeginPanDragHandler(e, t)
}, Blockly.BlockSpace.prototype.bindScrollOnWheelHandler = function(e) {
    this.scrollOnWheelHandler_.bindTo(e)
}, Blockly.BlockSpace.prototype.unbindBeginPanDragHandler = function() {
    this.panDragHandler_.unbindBeginPanDragHandler()
}, Blockly.BlockSpace.prototype.debugRects_ = {}, Blockly.BlockSpace.prototype.drawDebugBox = function(e, t, o) {
    t = goog.math.Rect.createFromBox(t), this.debugRects_[e] || (this.debugRects_[e] = Blockly.createSvgElement("rect", {
        fill: "none",
        style: "pointer-events: none"
    }, this.svgDebugCanvas_)), this.svgDebugCanvas_.setAttribute("transform", this.svgBlockCanvas_.getAttribute("transform")), e = this.debugRects_[e], e.setAttribute("x", t.left), e.setAttribute("y", t.top), e.setAttribute("width", t.width), e.setAttribute("height", t.height), e.setAttribute("stroke", o), e.setAttribute("stroke-width", 3)
}, Blockly.BlockSpace.prototype.debugCircles_ = {}, Blockly.BlockSpace.prototype.drawDebugCircle = function(e, t, o) {
    this.debugCircles_[e] || (this.debugCircles_[e] = Blockly.createSvgElement("circle", {
        cx: "50",
        cy: "50",
        r: "50",
        style: "pointer-events: none"
    }, this.svgDebugCanvas_)), this.svgDebugCanvas_.setAttribute("transform", this.svgBlockCanvas_.getAttribute("transform")), e = this.debugCircles_[e], e.setAttribute("cx", "" + t.x), e.setAttribute("cy", "" + t.y), e.setAttribute("r", 10), e.setAttribute("fill", o)
}, Blockly.BlockSpace.prototype.clearDebugDrawings = function() {
    [this.debugCircles_, this.debugRects_].forEach(function(e) {
        for (var t in e) goog.dom.removeNode(e[t])
    }), this.debugCircles_ = {}, this.debugRects_ = {}
}, goog.string.StringBuffer = function(e) {
    null != e && this.append.apply(this, arguments)
}, goog.string.StringBuffer.prototype.buffer_ = "", goog.string.StringBuffer.prototype.set = function(e) {
    this.buffer_ = "" + e
}, goog.string.StringBuffer.prototype.append = function(e, t) {
    if (this.buffer_ += e, null != t)
        for (var o = 1; o < arguments.length; o++) this.buffer_ += arguments[o];
    return this
}, goog.string.StringBuffer.prototype.clear = function() {
    this.buffer_ = ""
}, goog.string.StringBuffer.prototype.getLength = function() {
    return this.buffer_.length
}, goog.string.StringBuffer.prototype.toString = function() {
    return this.buffer_
}, goog.dom.vendor = {}, goog.dom.vendor.getVendorJsPrefix = function() {
    return goog.userAgent.WEBKIT ? "Webkit" : goog.userAgent.GECKO ? "Moz" : goog.userAgent.IE ? "ms" : goog.userAgent.OPERA ? "O" : null
}, goog.dom.vendor.getVendorPrefix = function() {
    return goog.userAgent.WEBKIT ? "-webkit" : goog.userAgent.GECKO ? "-moz" : goog.userAgent.IE ? "-ms" : goog.userAgent.OPERA ? "-o" : null
}, goog.dom.vendor.getPrefixedPropertyName = function(e, t) {
    if (t && e in t) return e;
    var o = goog.dom.vendor.getVendorJsPrefix();
    return o ? (o = o.toLowerCase(), o += goog.string.toTitleCase(e), !goog.isDef(t) || o in t ? o : null) : null
}, goog.dom.vendor.getPrefixedEventType = function(e) {
    return ((goog.dom.vendor.getVendorJsPrefix() || "") + e).toLowerCase()
}, goog.dom.classes = {}, goog.dom.classes.set = function(e, t) {
    e.className = t
}, goog.dom.classes.get = function(e) {
    return e = e.className, goog.isString(e) && e.match(/\S+/g) || []
}, goog.dom.classes.add = function(e) {
    var t = goog.dom.classes.get(e),
        o = goog.array.slice(arguments, 1),
        n = t.length + o.length;
    return goog.dom.classes.add_(t, o), goog.dom.classes.set(e, t.join(" ")), t.length == n
}, goog.dom.classes.remove = function(e) {
    var t = goog.dom.classes.get(e),
        o = goog.array.slice(arguments, 1),
        n = goog.dom.classes.getDifference_(t, o);
    return goog.dom.classes.set(e, n.join(" ")), n.length == t.length - o.length
}, goog.dom.classes.add_ = function(e, t) {
    for (var o = 0; o < t.length; o++) goog.array.contains(e, t[o]) || e.push(t[o])
}, goog.dom.classes.getDifference_ = function(e, t) {
    return goog.array.filter(e, function(e) {
        return !goog.array.contains(t, e)
    })
}, goog.dom.classes.swap = function(e, t, o) {
    for (var n = goog.dom.classes.get(e), i = !1, r = 0; r < n.length; r++) n[r] == t && (goog.array.splice(n, r--, 1), i = !0);
    return i && (n.push(o), goog.dom.classes.set(e, n.join(" "))), i
}, goog.dom.classes.addRemove = function(e, t, o) {
    var n = goog.dom.classes.get(e);
    goog.isString(t) ? goog.array.remove(n, t) : goog.isArray(t) && (n = goog.dom.classes.getDifference_(n, t)), goog.isString(o) && !goog.array.contains(n, o) ? n.push(o) : goog.isArray(o) && goog.dom.classes.add_(n, o), goog.dom.classes.set(e, n.join(" "))
}, goog.dom.classes.has = function(e, t) {
    return goog.array.contains(goog.dom.classes.get(e), t)
}, goog.dom.classes.enable = function(e, t, o) {
    o ? goog.dom.classes.add(e, t) : goog.dom.classes.remove(e, t)
}, goog.dom.classes.toggle = function(e, t) {
    var o = !goog.dom.classes.has(e, t);
    return goog.dom.classes.enable(e, t, o), o
}, goog.dom.TagName = {
    A: "A",
    ABBR: "ABBR",
    ACRONYM: "ACRONYM",
    ADDRESS: "ADDRESS",
    APPLET: "APPLET",
    AREA: "AREA",
    ARTICLE: "ARTICLE",
    ASIDE: "ASIDE",
    AUDIO: "AUDIO",
    B: "B",
    BASE: "BASE",
    BASEFONT: "BASEFONT",
    BDI: "BDI",
    BDO: "BDO",
    BIG: "BIG",
    BLOCKQUOTE: "BLOCKQUOTE",
    BODY: "BODY",
    BR: "BR",
    BUTTON: "BUTTON",
    CANVAS: "CANVAS",
    CAPTION: "CAPTION",
    CENTER: "CENTER",
    CITE: "CITE",
    CODE: "CODE",
    COL: "COL",
    COLGROUP: "COLGROUP",
    COMMAND: "COMMAND",
    DATA: "DATA",
    DATALIST: "DATALIST",
    DD: "DD",
    DEL: "DEL",
    DETAILS: "DETAILS",
    DFN: "DFN",
    DIALOG: "DIALOG",
    DIR: "DIR",
    DIV: "DIV",
    DL: "DL",
    DT: "DT",
    EM: "EM",
    EMBED: "EMBED",
    FIELDSET: "FIELDSET",
    FIGCAPTION: "FIGCAPTION",
    FIGURE: "FIGURE",
    FONT: "FONT",
    FOOTER: "FOOTER",
    FORM: "FORM",
    FRAME: "FRAME",
    FRAMESET: "FRAMESET",
    H1: "H1",
    H2: "H2",
    H3: "H3",
    H4: "H4",
    H5: "H5",
    H6: "H6",
    HEAD: "HEAD",
    HEADER: "HEADER",
    HGROUP: "HGROUP",
    HR: "HR",
    HTML: "HTML",
    I: "I",
    IFRAME: "IFRAME",
    IMG: "IMG",
    INPUT: "INPUT",
    INS: "INS",
    ISINDEX: "ISINDEX",
    KBD: "KBD",
    KEYGEN: "KEYGEN",
    LABEL: "LABEL",
    LEGEND: "LEGEND",
    LI: "LI",
    LINK: "LINK",
    MAP: "MAP",
    MARK: "MARK",
    MATH: "MATH",
    MENU: "MENU",
    META: "META",
    METER: "METER",
    NAV: "NAV",
    NOFRAMES: "NOFRAMES",
    NOSCRIPT: "NOSCRIPT",
    OBJECT: "OBJECT",
    OL: "OL",
    OPTGROUP: "OPTGROUP",
    OPTION: "OPTION",
    OUTPUT: "OUTPUT",
    P: "P",
    PARAM: "PARAM",
    PRE: "PRE",
    PROGRESS: "PROGRESS",
    Q: "Q",
    RP: "RP",
    RT: "RT",
    RUBY: "RUBY",
    S: "S",
    SAMP: "SAMP",
    SCRIPT: "SCRIPT",
    SECTION: "SECTION",
    SELECT: "SELECT",
    SMALL: "SMALL",
    SOURCE: "SOURCE",
    SPAN: "SPAN",
    STRIKE: "STRIKE",
    STRONG: "STRONG",
    STYLE: "STYLE",
    SUB: "SUB",
    SUMMARY: "SUMMARY",
    SUP: "SUP",
    SVG: "SVG",
    TABLE: "TABLE",
    TBODY: "TBODY",
    TD: "TD",
    TEXTAREA: "TEXTAREA",
    TFOOT: "TFOOT",
    TH: "TH",
    THEAD: "THEAD",
    TIME: "TIME",
    TITLE: "TITLE",
    TR: "TR",
    TRACK: "TRACK",
    TT: "TT",
    U: "U",
    UL: "UL",
    VAR: "VAR",
    VIDEO: "VIDEO",
    WBR: "WBR"
}, goog.dom.BrowserFeature = {
    CAN_ADD_NAME_OR_TYPE_ATTRIBUTES: !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9),
    CAN_USE_CHILDREN_ATTRIBUTE: !goog.userAgent.GECKO && !goog.userAgent.IE || goog.userAgent.IE && goog.userAgent.isDocumentModeOrHigher(9) || goog.userAgent.GECKO && goog.userAgent.isVersionOrHigher("1.9.1"),
    CAN_USE_INNER_TEXT: goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("9"),
    CAN_USE_PARENT_ELEMENT_PROPERTY: goog.userAgent.IE || goog.userAgent.OPERA || goog.userAgent.WEBKIT,
    INNER_HTML_NEEDS_SCOPED_ELEMENT: goog.userAgent.IE
}, goog.dom.ASSUME_QUIRKS_MODE = !1, goog.dom.ASSUME_STANDARDS_MODE = !1, goog.dom.COMPAT_MODE_KNOWN_ = goog.dom.ASSUME_QUIRKS_MODE || goog.dom.ASSUME_STANDARDS_MODE, goog.dom.getDomHelper = function(e) {
    return e ? new goog.dom.DomHelper(goog.dom.getOwnerDocument(e)) : goog.dom.defaultDomHelper_ || (goog.dom.defaultDomHelper_ = new goog.dom.DomHelper)
}, goog.dom.getDocument = function() {
    return document
}, goog.dom.getElement = function(e) {
    return goog.dom.getElementHelper_(document, e)
}, goog.dom.getElementHelper_ = function(e, t) {
    return goog.isString(t) ? e.getElementById(t) : t
}, goog.dom.getRequiredElement = function(e) {
    return goog.dom.getRequiredElementHelper_(document, e)
}, goog.dom.getRequiredElementHelper_ = function(e, t) {
    goog.asserts.assertString(t);
    var o = goog.dom.getElementHelper_(e, t);
    return o = goog.asserts.assertElement(o, "No element found with id: " + t)
}, goog.dom.$ = goog.dom.getElement, goog.dom.getElementsByTagNameAndClass = function(e, t, o) {
    return goog.dom.getElementsByTagNameAndClass_(document, e, t, o)
}, goog.dom.getElementsByClass = function(e, t) {
    var o = t || document;
    return goog.dom.canUseQuerySelector_(o) ? o.querySelectorAll("." + e) : goog.dom.getElementsByTagNameAndClass_(document, "*", e, t)
}, goog.dom.getElementByClass = function(e, t) {
    var o = t || document,
        n = null;
    return (n = goog.dom.canUseQuerySelector_(o) ? o.querySelector("." + e) : goog.dom.getElementsByTagNameAndClass_(document, "*", e, t)[0]) || null
}, goog.dom.getRequiredElementByClass = function(e, t) {
    var o = goog.dom.getElementByClass(e, t);
    return goog.asserts.assert(o, "No element found with className: " + e)
}, goog.dom.canUseQuerySelector_ = function(e) {
    return !(!e.querySelectorAll || !e.querySelector)
}, goog.dom.getElementsByTagNameAndClass_ = function(e, t, o, n) {
    if (e = n || e, t = t && "*" != t ? t.toUpperCase() : "", goog.dom.canUseQuerySelector_(e) && (t || o)) return e.querySelectorAll(t + (o ? "." + o : ""));
    if (o && e.getElementsByClassName) {
        if (e = e.getElementsByClassName(o), t) {
            n = {};
            for (var i, r = 0, l = 0; i = e[l]; l++) t == i.nodeName && (n[r++] = i);
            return n.length = r, n
        }
        return e
    }
    if (e = e.getElementsByTagName(t || "*"), o) {
        for (n = {}, l = r = 0; i = e[l]; l++) t = i.className, "function" == typeof t.split && goog.array.contains(t.split(/\s+/), o) && (n[r++] = i);
        return n.length = r, n
    }
    return e
}, goog.dom.$$ = goog.dom.getElementsByTagNameAndClass, goog.dom.setProperties = function(e, t) {
    goog.object.forEach(t, function(t, o) {
        "style" == o ? e.style.cssText = t : "class" == o ? e.className = t : "for" == o ? e.htmlFor = t : o in goog.dom.DIRECT_ATTRIBUTE_MAP_ ? e.setAttribute(goog.dom.DIRECT_ATTRIBUTE_MAP_[o], t) : goog.string.startsWith(o, "aria-") || goog.string.startsWith(o, "data-") ? e.setAttribute(o, t) : e[o] = t
    })
}, goog.dom.DIRECT_ATTRIBUTE_MAP_ = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
}, goog.dom.getViewportSize = function(e) {
    return goog.dom.getViewportSize_(e || window)
}, goog.dom.getViewportSize_ = function(e) {
    return e = e.document, e = goog.dom.isCss1CompatMode_(e) ? e.documentElement : e.body, new goog.math.Size(e.clientWidth, e.clientHeight)
}, goog.dom.getDocumentHeight = function() {
    return goog.dom.getDocumentHeight_(window)
}, goog.dom.getDocumentHeight_ = function(e) {
    var t = e.document,
        o = 0;
    if (t) {
        e = goog.dom.getViewportSize_(e).height;
        var o = t.body,
            n = t.documentElement;
        if (goog.dom.isCss1CompatMode_(t) && n.scrollHeight) o = n.scrollHeight != e ? n.scrollHeight : n.offsetHeight;
        else {
            var t = n.scrollHeight,
                i = n.offsetHeight;
            n.clientHeight != i && (t = o.scrollHeight, i = o.offsetHeight), o = t > e ? t > i ? t : i : i > t ? t : i
        }
    }
    return o
}, goog.dom.getPageScroll = function(e) {
    return goog.dom.getDomHelper((e || goog.global || window).document).getDocumentScroll()
}, goog.dom.getDocumentScroll = function() {
    return goog.dom.getDocumentScroll_(document)
}, goog.dom.getDocumentScroll_ = function(e) {
    var t = goog.dom.getDocumentScrollElement_(e);
    return e = goog.dom.getWindow_(e), goog.userAgent.IE && goog.userAgent.isVersionOrHigher("10") && e.pageYOffset != t.scrollTop ? new goog.math.Coordinate(t.scrollLeft, t.scrollTop) : new goog.math.Coordinate(e.pageXOffset || t.scrollLeft, e.pageYOffset || t.scrollTop)
}, goog.dom.getDocumentScrollElement = function() {
    return goog.dom.getDocumentScrollElement_(document)
}, goog.dom.getDocumentScrollElement_ = function(e) {
    return !goog.userAgent.WEBKIT && goog.dom.isCss1CompatMode_(e) ? e.documentElement : e.body || e.documentElement
}, goog.dom.getWindow = function(e) {
    return e ? goog.dom.getWindow_(e) : window
}, goog.dom.getWindow_ = function(e) {
    return e.parentWindow || e.defaultView
}, goog.dom.createDom = function() {
    return goog.dom.createDom_(document, arguments)
}, goog.dom.createDom_ = function(e, t) {
    var o = t[0],
        n = t[1];
    if (!goog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES && n && (n.name || n.type)) {
        if (o = ["<", o], n.name && o.push(' name="', goog.string.htmlEscape(n.name), '"'), n.type) {
            o.push(' type="', goog.string.htmlEscape(n.type), '"');
            var i = {};
            goog.object.extend(i, n), delete i.type, n = i
        }
        o.push(">"), o = o.join("")
    }
    return o = e.createElement(o), n && (goog.isString(n) ? o.className = n : goog.isArray(n) ? goog.dom.classes.add.apply(null, [o].concat(n)) : goog.dom.setProperties(o, n)), 2 < t.length && goog.dom.append_(e, o, t, 2), o
}, goog.dom.append_ = function(e, t, o, n) {
    function i(o) {
        o && t.appendChild(goog.isString(o) ? e.createTextNode(o) : o)
    }
    for (; n < o.length; n++) {
        var r = o[n];
        goog.isArrayLike(r) && !goog.dom.isNodeLike(r) ? goog.array.forEach(goog.dom.isNodeList(r) ? goog.array.toArray(r) : r, i) : i(r)
    }
}, goog.dom.$dom = goog.dom.createDom, goog.dom.createElement = function(e) {
    return document.createElement(e)
}, goog.dom.createTextNode = function(e) {
    return document.createTextNode(String(e))
}, goog.dom.createTable = function(e, t, o) {
    return goog.dom.createTable_(document, e, t, !!o)
}, goog.dom.createTable_ = function(e, t, o, n) {
    for (var i = ["<tr>"], r = 0; o > r; r++) i.push(n ? "<td>&nbsp;</td>" : "<td></td>");
    for (i.push("</tr>"), i = i.join(""), o = ["<table>"], r = 0; t > r; r++) o.push(i);
    return o.push("</table>"), e = e.createElement(goog.dom.TagName.DIV), e.innerHTML = o.join(""), e.removeChild(e.firstChild)
}, goog.dom.htmlToDocumentFragment = function(e) {
    return goog.dom.htmlToDocumentFragment_(document, e)
}, goog.dom.htmlToDocumentFragment_ = function(e, t) {
    var o = e.createElement("div");
    if (goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT ? (o.innerHTML = "<br>" + t, o.removeChild(o.firstChild)) : o.innerHTML = t, 1 == o.childNodes.length) return o.removeChild(o.firstChild);
    for (var n = e.createDocumentFragment(); o.firstChild;) n.appendChild(o.firstChild);
    return n
}, goog.dom.isCss1CompatMode = function() {
    return goog.dom.isCss1CompatMode_(document)
}, goog.dom.isCss1CompatMode_ = function(e) {
    return goog.dom.COMPAT_MODE_KNOWN_ ? goog.dom.ASSUME_STANDARDS_MODE : "CSS1Compat" == e.compatMode
}, goog.dom.canHaveChildren = function(e) {
    if (e.nodeType != goog.dom.NodeType.ELEMENT) return !1;
    switch (e.tagName) {
        case goog.dom.TagName.APPLET:
        case goog.dom.TagName.AREA:
        case goog.dom.TagName.BASE:
        case goog.dom.TagName.BR:
        case goog.dom.TagName.COL:
        case goog.dom.TagName.COMMAND:
        case goog.dom.TagName.EMBED:
        case goog.dom.TagName.FRAME:
        case goog.dom.TagName.HR:
        case goog.dom.TagName.IMG:
        case goog.dom.TagName.INPUT:
        case goog.dom.TagName.IFRAME:
        case goog.dom.TagName.ISINDEX:
        case goog.dom.TagName.KEYGEN:
        case goog.dom.TagName.LINK:
        case goog.dom.TagName.NOFRAMES:
        case goog.dom.TagName.NOSCRIPT:
        case goog.dom.TagName.META:
        case goog.dom.TagName.OBJECT:
        case goog.dom.TagName.PARAM:
        case goog.dom.TagName.SCRIPT:
        case goog.dom.TagName.SOURCE:
        case goog.dom.TagName.STYLE:
        case goog.dom.TagName.TRACK:
        case goog.dom.TagName.WBR:
            return !1
    }
    return !0
}, goog.dom.appendChild = function(e, t) {
    e.appendChild(t)
}, goog.dom.append = function(e) {
    goog.dom.append_(goog.dom.getOwnerDocument(e), e, arguments, 1)
}, goog.dom.removeChildren = function(e) {
    for (var t; t = e.firstChild;) e.removeChild(t)
}, goog.dom.insertSiblingBefore = function(e, t) {
    t.parentNode && t.parentNode.insertBefore(e, t)
}, goog.dom.insertSiblingAfter = function(e, t) {
    t.parentNode && t.parentNode.insertBefore(e, t.nextSibling)
}, goog.dom.insertChildAt = function(e, t, o) {
    e.insertBefore(t, e.childNodes[o] || null)
}, goog.dom.removeNode = function(e) {
    return e && e.parentNode ? e.parentNode.removeChild(e) : null
}, goog.dom.replaceNode = function(e, t) {
    var o = t.parentNode;
    o && o.replaceChild(e, t)
}, goog.dom.flattenElement = function(e) {
    var t, o = e.parentNode;
    if (o && o.nodeType != goog.dom.NodeType.DOCUMENT_FRAGMENT) {
        if (e.removeNode) return e.removeNode(!1);
        for (; t = e.firstChild;) o.insertBefore(t, e);
        return goog.dom.removeNode(e)
    }
}, goog.dom.getChildren = function(e) {
    return goog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE && void 0 != e.children ? e.children : goog.array.filter(e.childNodes, function(e) {
        return e.nodeType == goog.dom.NodeType.ELEMENT
    })
}, goog.dom.getFirstElementChild = function(e) {
    return void 0 != e.firstElementChild ? e.firstElementChild : goog.dom.getNextElementNode_(e.firstChild, !0)
}, goog.dom.getLastElementChild = function(e) {
    return void 0 != e.lastElementChild ? e.lastElementChild : goog.dom.getNextElementNode_(e.lastChild, !1)
}, goog.dom.getNextElementSibling = function(e) {
    return void 0 != e.nextElementSibling ? e.nextElementSibling : goog.dom.getNextElementNode_(e.nextSibling, !0)
}, goog.dom.getPreviousElementSibling = function(e) {
    return void 0 != e.previousElementSibling ? e.previousElementSibling : goog.dom.getNextElementNode_(e.previousSibling, !1)
}, goog.dom.getNextElementNode_ = function(e, t) {
    for (; e && e.nodeType != goog.dom.NodeType.ELEMENT;) e = t ? e.nextSibling : e.previousSibling;
    return e
}, goog.dom.getNextNode = function(e) {
    if (!e) return null;
    if (e.firstChild) return e.firstChild;
    for (; e && !e.nextSibling;) e = e.parentNode;
    return e ? e.nextSibling : null
}, goog.dom.getPreviousNode = function(e) {
    if (!e) return null;
    if (!e.previousSibling) return e.parentNode;
    for (e = e.previousSibling; e && e.lastChild;) e = e.lastChild;
    return e
}, goog.dom.isNodeLike = function(e) {
    return goog.isObject(e) && 0 < e.nodeType
}, goog.dom.isElement = function(e) {
    return goog.isObject(e) && e.nodeType == goog.dom.NodeType.ELEMENT
}, goog.dom.isWindow = function(e) {
    return goog.isObject(e) && e.window == e
}, goog.dom.getParentElement = function(e) {
    return !goog.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY || goog.userAgent.IE && goog.userAgent.isVersionOrHigher("9") && !goog.userAgent.isVersionOrHigher("10") && goog.global.SVGElement && e instanceof goog.global.SVGElement ? (e = e.parentNode, goog.dom.isElement(e) ? e : null) : e.parentElement
}, goog.dom.contains = function(e, t) {
    if (e.contains && t.nodeType == goog.dom.NodeType.ELEMENT) return e == t || e.contains(t);
    if ("undefined" != typeof e.compareDocumentPosition) return e == t || Boolean(16 & e.compareDocumentPosition(t));
    for (; t && e != t;) t = t.parentNode;
    return t == e
}, goog.dom.compareNodeOrder = function(e, t) {
    if (e == t) return 0;
    if (e.compareDocumentPosition) return 2 & e.compareDocumentPosition(t) ? 1 : -1;
    if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9)) {
        if (e.nodeType == goog.dom.NodeType.DOCUMENT) return -1;
        if (t.nodeType == goog.dom.NodeType.DOCUMENT) return 1
    }
    if ("sourceIndex" in e || e.parentNode && "sourceIndex" in e.parentNode) {
        var o = e.nodeType == goog.dom.NodeType.ELEMENT,
            n = t.nodeType == goog.dom.NodeType.ELEMENT;
        if (o && n) return e.sourceIndex - t.sourceIndex;
        var i = e.parentNode,
            r = t.parentNode;
        return i == r ? goog.dom.compareSiblingOrder_(e, t) : !o && goog.dom.contains(i, t) ? -1 * goog.dom.compareParentsDescendantNodeIe_(e, t) : !n && goog.dom.contains(r, e) ? goog.dom.compareParentsDescendantNodeIe_(t, e) : (o ? e.sourceIndex : i.sourceIndex) - (n ? t.sourceIndex : r.sourceIndex)
    }
    return n = goog.dom.getOwnerDocument(e), o = n.createRange(), o.selectNode(e), o.collapse(!0), n = n.createRange(), n.selectNode(t), n.collapse(!0), o.compareBoundaryPoints(goog.global.Range.START_TO_END, n)
}, goog.dom.compareParentsDescendantNodeIe_ = function(e, t) {
    var o = e.parentNode;
    if (o == t) return -1;
    for (var n = t; n.parentNode != o;) n = n.parentNode;
    return goog.dom.compareSiblingOrder_(n, e)
}, goog.dom.compareSiblingOrder_ = function(e, t) {
    for (var o = t; o = o.previousSibling;)
        if (o == e) return -1;
    return 1
}, goog.dom.findCommonAncestor = function() {
    var e, t = arguments.length;
    if (!t) return null;
    if (1 == t) return arguments[0];
    var o = [],
        n = 1 / 0;
    for (e = 0; t > e; e++) {
        for (var i = [], r = arguments[e]; r;) i.unshift(r), r = r.parentNode;
        o.push(i), n = Math.min(n, i.length)
    }
    for (i = null, e = 0; n > e; e++) {
        for (var r = o[0][e], l = 1; t > l; l++)
            if (r != o[l][e]) return i;
        i = r
    }
    return i
}, goog.dom.getOwnerDocument = function(e) {
    return e.nodeType == goog.dom.NodeType.DOCUMENT ? e : e.ownerDocument || e.document
}, goog.dom.getFrameContentDocument = function(e) {
    return e.contentDocument || e.contentWindow.document
}, goog.dom.getFrameContentWindow = function(e) {
    return e.contentWindow || goog.dom.getWindow(goog.dom.getFrameContentDocument(e))
}, goog.dom.setTextContent = function(e, t) {
    if (goog.asserts.assert(null != e, "goog.dom.setTextContent expects a non-null value for node"), "textContent" in e) e.textContent = t;
    else if (e.nodeType == goog.dom.NodeType.TEXT) e.data = t;
    else if (e.firstChild && e.firstChild.nodeType == goog.dom.NodeType.TEXT) {
        for (; e.lastChild != e.firstChild;) e.removeChild(e.lastChild);
        e.firstChild.data = t
    } else {
        goog.dom.removeChildren(e);
        var o = goog.dom.getOwnerDocument(e);
        e.appendChild(o.createTextNode(String(t)))
    }
}, goog.dom.getOuterHtml = function(e) {
    if ("outerHTML" in e) return e.outerHTML;
    var t = goog.dom.getOwnerDocument(e).createElement("div");
    return t.appendChild(e.cloneNode(!0)), t.innerHTML
}, goog.dom.findNode = function(e, t) {
    var o = [];
    return goog.dom.findNodes_(e, t, o, !0) ? o[0] : void 0
}, goog.dom.findNodes = function(e, t) {
    var o = [];
    return goog.dom.findNodes_(e, t, o, !1), o
}, goog.dom.findNodes_ = function(e, t, o, n) {
    if (null != e)
        for (e = e.firstChild; e;) {
            if (t(e) && (o.push(e), n) || goog.dom.findNodes_(e, t, o, n)) return !0;
            e = e.nextSibling
        }
    return !1
}, goog.dom.TAGS_TO_IGNORE_ = {
    SCRIPT: 1,
    STYLE: 1,
    HEAD: 1,
    IFRAME: 1,
    OBJECT: 1
}, goog.dom.PREDEFINED_TAG_VALUES_ = {
    IMG: " ",
    BR: "\n"
}, goog.dom.isFocusableTabIndex = function(e) {
    return goog.dom.hasSpecifiedTabIndex_(e) && goog.dom.isTabIndexFocusable_(e)
}, goog.dom.setFocusableTabIndex = function(e, t) {
    t ? e.tabIndex = 0 : (e.tabIndex = -1, e.removeAttribute("tabIndex"))
}, goog.dom.isFocusable = function(e) {
    var t;
    return (t = goog.dom.nativelySupportsFocus_(e) ? !e.disabled && (!goog.dom.hasSpecifiedTabIndex_(e) || goog.dom.isTabIndexFocusable_(e)) : goog.dom.isFocusableTabIndex(e)) && goog.userAgent.IE ? goog.dom.hasNonZeroBoundingRect_(e) : t
}, goog.dom.hasSpecifiedTabIndex_ = function(e) {
    return e = e.getAttributeNode("tabindex"), goog.isDefAndNotNull(e) && e.specified
}, goog.dom.isTabIndexFocusable_ = function(e) {
    return e = e.tabIndex, goog.isNumber(e) && e >= 0 && 32768 > e
}, goog.dom.nativelySupportsFocus_ = function(e) {
    return e.tagName == goog.dom.TagName.A || e.tagName == goog.dom.TagName.INPUT || e.tagName == goog.dom.TagName.TEXTAREA || e.tagName == goog.dom.TagName.SELECT || e.tagName == goog.dom.TagName.BUTTON
}, goog.dom.hasNonZeroBoundingRect_ = function(e) {
    return e = goog.isFunction(e.getBoundingClientRect) ? e.getBoundingClientRect() : {
        height: e.offsetHeight,
        width: e.offsetWidth
    }, goog.isDefAndNotNull(e) && 0 < e.height && 0 < e.width
}, goog.dom.getTextContent = function(e) {
    if (goog.dom.BrowserFeature.CAN_USE_INNER_TEXT && "innerText" in e) e = goog.string.canonicalizeNewlines(e.innerText);
    else {
        var t = [];
        goog.dom.getTextContent_(e, t, !0), e = t.join("")
    }
    return e = e.replace(/ \xAD /g, " ").replace(/\xAD/g, ""), e = e.replace(/\u200B/g, ""), goog.dom.BrowserFeature.CAN_USE_INNER_TEXT || (e = e.replace(/ +/g, " ")), " " != e && (e = e.replace(/^\s*/, "")), e
}, goog.dom.getRawTextContent = function(e) {
    var t = [];
    return goog.dom.getTextContent_(e, t, !1), t.join("")
}, goog.dom.getTextContent_ = function(e, t, o) {
    if (!(e.nodeName in goog.dom.TAGS_TO_IGNORE_))
        if (e.nodeType == goog.dom.NodeType.TEXT) t.push(o ? String(e.nodeValue).replace(/(\r\n|\r|\n)/g, "") : e.nodeValue);
        else if (e.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) t.push(goog.dom.PREDEFINED_TAG_VALUES_[e.nodeName]);
    else
        for (e = e.firstChild; e;) goog.dom.getTextContent_(e, t, o), e = e.nextSibling
}, goog.dom.getNodeTextLength = function(e) {
    return goog.dom.getTextContent(e).length
}, goog.dom.getNodeTextOffset = function(e, t) {
    for (var o = t || goog.dom.getOwnerDocument(e).body, n = []; e && e != o;) {
        for (var i = e; i = i.previousSibling;) n.unshift(goog.dom.getTextContent(i));
        e = e.parentNode
    }
    return goog.string.trimLeft(n.join("")).replace(/ +/g, " ").length
}, goog.dom.getNodeAtOffset = function(e, t, o) {
    e = [e];
    for (var n = 0, i = null; 0 < e.length && t > n;)
        if (i = e.pop(), !(i.nodeName in goog.dom.TAGS_TO_IGNORE_))
            if (i.nodeType == goog.dom.NodeType.TEXT) var r = i.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " "),
                n = n + r.length;
            else if (i.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) n += goog.dom.PREDEFINED_TAG_VALUES_[i.nodeName].length;
    else
        for (r = i.childNodes.length - 1; r >= 0; r--) e.push(i.childNodes[r]);
    return goog.isObject(o) && (o.remainder = i ? i.nodeValue.length + t - n - 1 : 0, o.node = i), i
}, goog.dom.isNodeList = function(e) {
    if (e && "number" == typeof e.length) {
        if (goog.isObject(e)) return "function" == typeof e.item || "string" == typeof e.item;
        if (goog.isFunction(e)) return "function" == typeof e.item
    }
    return !1
}, goog.dom.getAncestorByTagNameAndClass = function(e, t, o) {
    if (!t && !o) return null;
    var n = t ? t.toUpperCase() : null;
    return goog.dom.getAncestor(e, function(e) {
        return !(n && e.nodeName != n || o && !goog.dom.classes.has(e, o))
    }, !0)
}, goog.dom.getAncestorByClass = function(e, t) {
    return goog.dom.getAncestorByTagNameAndClass(e, null, t)
}, goog.dom.getAncestor = function(e, t, o, n) {
    o || (e = e.parentNode), o = null == n;
    for (var i = 0; e && (o || n >= i);) {
        if (t(e)) return e;
        e = e.parentNode, i++
    }
    return null
}, goog.dom.getActiveElement = function(e) {
    try {
        return e && e.activeElement
    } catch (t) {}
    return null
}, goog.dom.getPixelRatio = goog.functions.cacheReturnValue(function() {
    var e = goog.dom.getWindow(),
        t = goog.userAgent.GECKO && goog.userAgent.MOBILE;
    return goog.isDef(e.devicePixelRatio) && !t ? e.devicePixelRatio : e.matchMedia ? goog.dom.matchesPixelRatio_(.75) || goog.dom.matchesPixelRatio_(1.5) || goog.dom.matchesPixelRatio_(2) || goog.dom.matchesPixelRatio_(3) || 1 : 1
}), goog.dom.matchesPixelRatio_ = function(e) {
    return goog.dom.getWindow().matchMedia("(-webkit-min-device-pixel-ratio: " + e + "),(min--moz-device-pixel-ratio: " + e + "),(min-resolution: " + e + "dppx)").matches ? e : 0
}, goog.dom.DomHelper = function(e) {
    this.document_ = e || goog.global.document || document
}, goog.dom.DomHelper.prototype.getDomHelper = goog.dom.getDomHelper, goog.dom.DomHelper.prototype.setDocument = function(e) {
    this.document_ = e
}, goog.dom.DomHelper.prototype.getDocument = function() {
    return this.document_
}, goog.dom.DomHelper.prototype.getElement = function(e) {
    return goog.dom.getElementHelper_(this.document_, e)
}, goog.dom.DomHelper.prototype.getRequiredElement = function(e) {
    return goog.dom.getRequiredElementHelper_(this.document_, e)
}, goog.dom.DomHelper.prototype.$ = goog.dom.DomHelper.prototype.getElement, goog.dom.DomHelper.prototype.getElementsByTagNameAndClass = function(e, t, o) {
    return goog.dom.getElementsByTagNameAndClass_(this.document_, e, t, o)
}, goog.dom.DomHelper.prototype.getElementsByClass = function(e, t) {
    return goog.dom.getElementsByClass(e, t || this.document_)
}, goog.dom.DomHelper.prototype.getElementByClass = function(e, t) {
    return goog.dom.getElementByClass(e, t || this.document_)
}, goog.dom.DomHelper.prototype.getRequiredElementByClass = function(e, t) {
    return goog.dom.getRequiredElementByClass(e, t || this.document_)
}, goog.dom.DomHelper.prototype.$$ = goog.dom.DomHelper.prototype.getElementsByTagNameAndClass, goog.dom.DomHelper.prototype.setProperties = goog.dom.setProperties, goog.dom.DomHelper.prototype.getViewportSize = function(e) {
    return goog.dom.getViewportSize(e || this.getWindow())
}, goog.dom.DomHelper.prototype.getDocumentHeight = function() {
    return goog.dom.getDocumentHeight_(this.getWindow())
}, goog.dom.DomHelper.prototype.createDom = function() {
    return goog.dom.createDom_(this.document_, arguments)
}, goog.dom.DomHelper.prototype.$dom = goog.dom.DomHelper.prototype.createDom, goog.dom.DomHelper.prototype.createElement = function(e) {
    return this.document_.createElement(e)
}, goog.dom.DomHelper.prototype.createTextNode = function(e) {
    return this.document_.createTextNode(String(e))
}, goog.dom.DomHelper.prototype.createTable = function(e, t, o) {
    return goog.dom.createTable_(this.document_, e, t, !!o)
}, goog.dom.DomHelper.prototype.htmlToDocumentFragment = function(e) {
    return goog.dom.htmlToDocumentFragment_(this.document_, e)
}, goog.dom.DomHelper.prototype.isCss1CompatMode = function() {
    return goog.dom.isCss1CompatMode_(this.document_)
}, goog.dom.DomHelper.prototype.getWindow = function() {
    return goog.dom.getWindow_(this.document_)
}, goog.dom.DomHelper.prototype.getDocumentScrollElement = function() {
    return goog.dom.getDocumentScrollElement_(this.document_)
}, goog.dom.DomHelper.prototype.getDocumentScroll = function() {
    return goog.dom.getDocumentScroll_(this.document_)
}, goog.dom.DomHelper.prototype.getActiveElement = function(e) {
    return goog.dom.getActiveElement(e || this.document_)
}, goog.dom.DomHelper.prototype.appendChild = goog.dom.appendChild, goog.dom.DomHelper.prototype.append = goog.dom.append, goog.dom.DomHelper.prototype.canHaveChildren = goog.dom.canHaveChildren, goog.dom.DomHelper.prototype.removeChildren = goog.dom.removeChildren, goog.dom.DomHelper.prototype.insertSiblingBefore = goog.dom.insertSiblingBefore, goog.dom.DomHelper.prototype.insertSiblingAfter = goog.dom.insertSiblingAfter, goog.dom.DomHelper.prototype.insertChildAt = goog.dom.insertChildAt, goog.dom.DomHelper.prototype.removeNode = goog.dom.removeNode, goog.dom.DomHelper.prototype.replaceNode = goog.dom.replaceNode, goog.dom.DomHelper.prototype.flattenElement = goog.dom.flattenElement, goog.dom.DomHelper.prototype.getChildren = goog.dom.getChildren, goog.dom.DomHelper.prototype.getFirstElementChild = goog.dom.getFirstElementChild, goog.dom.DomHelper.prototype.getLastElementChild = goog.dom.getLastElementChild, goog.dom.DomHelper.prototype.getNextElementSibling = goog.dom.getNextElementSibling, goog.dom.DomHelper.prototype.getPreviousElementSibling = goog.dom.getPreviousElementSibling, goog.dom.DomHelper.prototype.getNextNode = goog.dom.getNextNode, goog.dom.DomHelper.prototype.getPreviousNode = goog.dom.getPreviousNode, goog.dom.DomHelper.prototype.isNodeLike = goog.dom.isNodeLike, goog.dom.DomHelper.prototype.isElement = goog.dom.isElement, goog.dom.DomHelper.prototype.isWindow = goog.dom.isWindow, goog.dom.DomHelper.prototype.getParentElement = goog.dom.getParentElement, goog.dom.DomHelper.prototype.contains = goog.dom.contains, goog.dom.DomHelper.prototype.compareNodeOrder = goog.dom.compareNodeOrder, goog.dom.DomHelper.prototype.findCommonAncestor = goog.dom.findCommonAncestor, goog.dom.DomHelper.prototype.getOwnerDocument = goog.dom.getOwnerDocument, goog.dom.DomHelper.prototype.getFrameContentDocument = goog.dom.getFrameContentDocument, goog.dom.DomHelper.prototype.getFrameContentWindow = goog.dom.getFrameContentWindow, goog.dom.DomHelper.prototype.setTextContent = goog.dom.setTextContent, goog.dom.DomHelper.prototype.getOuterHtml = goog.dom.getOuterHtml, goog.dom.DomHelper.prototype.findNode = goog.dom.findNode, goog.dom.DomHelper.prototype.findNodes = goog.dom.findNodes, goog.dom.DomHelper.prototype.isFocusableTabIndex = goog.dom.isFocusableTabIndex, goog.dom.DomHelper.prototype.setFocusableTabIndex = goog.dom.setFocusableTabIndex, goog.dom.DomHelper.prototype.isFocusable = goog.dom.isFocusable, goog.dom.DomHelper.prototype.getTextContent = goog.dom.getTextContent, goog.dom.DomHelper.prototype.getNodeTextLength = goog.dom.getNodeTextLength, goog.dom.DomHelper.prototype.getNodeTextOffset = goog.dom.getNodeTextOffset, goog.dom.DomHelper.prototype.getNodeAtOffset = goog.dom.getNodeAtOffset, goog.dom.DomHelper.prototype.isNodeList = goog.dom.isNodeList, goog.dom.DomHelper.prototype.getAncestorByTagNameAndClass = goog.dom.getAncestorByTagNameAndClass, goog.dom.DomHelper.prototype.getAncestorByClass = goog.dom.getAncestorByClass, goog.dom.DomHelper.prototype.getAncestor = goog.dom.getAncestor, goog.style = {}, goog.style.GET_BOUNDING_CLIENT_RECT_ALWAYS_EXISTS = !1, goog.style.setStyle = function(e, t, o) {
    goog.isString(t) ? goog.style.setStyle_(e, o, t) : goog.object.forEach(t, goog.partial(goog.style.setStyle_, e))
}, goog.style.setStyle_ = function(e, t, o) {
    (o = goog.style.getVendorJsStyleName_(e, o)) && (e.style[o] = t)
}, goog.style.getVendorJsStyleName_ = function(e, t) {
    var o = goog.string.toCamelCase(t);
    if (void 0 === e.style[o]) {
        var n = goog.dom.vendor.getVendorJsPrefix() + goog.string.toTitleCase(t);
        if (void 0 !== e.style[n]) return n
    }
    return o
}, goog.style.getVendorStyleName_ = function(e, t) {
    var o = goog.string.toCamelCase(t);
    return void 0 === e.style[o] && (o = goog.dom.vendor.getVendorJsPrefix() + goog.string.toTitleCase(t), void 0 !== e.style[o]) ? goog.dom.vendor.getVendorPrefix() + "-" + t : t
}, goog.style.getStyle = function(e, t) {
    var o = e.style[goog.string.toCamelCase(t)];
    return "undefined" != typeof o ? o : e.style[goog.style.getVendorJsStyleName_(e, t)] || ""
}, goog.style.getComputedStyle = function(e, t) {
    var o = goog.dom.getOwnerDocument(e);
    return o.defaultView && o.defaultView.getComputedStyle && (o = o.defaultView.getComputedStyle(e, null)) ? o[t] || o.getPropertyValue(t) || "" : ""
}, goog.style.getCascadedStyle = function(e, t) {
    return e.currentStyle ? e.currentStyle[t] : null
}, goog.style.getStyle_ = function(e, t) {
    return goog.style.getComputedStyle(e, t) || goog.style.getCascadedStyle(e, t) || e.style && e.style[t]
}, goog.style.getComputedBoxSizing = function(e) {
    return goog.style.getStyle_(e, "boxSizing") || goog.style.getStyle_(e, "MozBoxSizing") || goog.style.getStyle_(e, "WebkitBoxSizing") || null
}, goog.style.getComputedPosition = function(e) {
    return goog.style.getStyle_(e, "position")
}, goog.style.getBackgroundColor = function(e) {
    return goog.style.getStyle_(e, "backgroundColor")
}, goog.style.getComputedOverflowX = function(e) {
    return goog.style.getStyle_(e, "overflowX")
}, goog.style.getComputedOverflowY = function(e) {
    return goog.style.getStyle_(e, "overflowY")
}, goog.style.getComputedZIndex = function(e) {
    return goog.style.getStyle_(e, "zIndex")
}, goog.style.getComputedTextAlign = function(e) {
    return goog.style.getStyle_(e, "textAlign")
}, goog.style.getComputedCursor = function(e) {
    return goog.style.getStyle_(e, "cursor")
}, goog.style.setPosition = function(e, t, o) {
    var n, i = goog.userAgent.GECKO && (goog.userAgent.MAC || goog.userAgent.X11) && goog.userAgent.isVersionOrHigher("1.9");
    t instanceof goog.math.Coordinate ? (n = t.x, t = t.y) : (n = t, t = o), e.style.left = goog.style.getPixelStyleValue_(n, i), e.style.top = goog.style.getPixelStyleValue_(t, i)
}, goog.style.getPosition = function(e) {
    return new goog.math.Coordinate(e.offsetLeft, e.offsetTop)
}, goog.style.getClientViewportElement = function(e) {
    return e = e ? goog.dom.getOwnerDocument(e) : goog.dom.getDocument(), !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9) || goog.dom.getDomHelper(e).isCss1CompatMode() ? e.documentElement : e.body
}, goog.style.getViewportPageOffset = function(e) {
    var t = e.body;
    return e = e.documentElement, new goog.math.Coordinate(t.scrollLeft || e.scrollLeft, t.scrollTop || e.scrollTop)
}, goog.style.getBoundingClientRect_ = function(e) {
    var t;
    try {
        t = e.getBoundingClientRect()
    } catch (o) {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    }
    return goog.userAgent.IE && e.ownerDocument.body && (e = e.ownerDocument, t.left -= e.documentElement.clientLeft + e.body.clientLeft, t.top -= e.documentElement.clientTop + e.body.clientTop), t
}, goog.style.getOffsetParent = function(e) {
    if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(8)) return e.offsetParent;
    var t = goog.dom.getOwnerDocument(e),
        o = goog.style.getStyle_(e, "position"),
        n = "fixed" == o || "absolute" == o;
    for (e = e.parentNode; e && e != t; e = e.parentNode)
        if (o = goog.style.getStyle_(e, "position"), n = n && "static" == o && e != t.documentElement && e != t.body, !n && (e.scrollWidth > e.clientWidth || e.scrollHeight > e.clientHeight || "fixed" == o || "absolute" == o || "relative" == o)) return e;
    return null
}, goog.style.getVisibleRectForElement = function(e) {
    for (var t = new goog.math.Box(0, 1 / 0, 1 / 0, 0), o = goog.dom.getDomHelper(e), n = o.getDocument().body, i = o.getDocument().documentElement, r = o.getDocumentScrollElement(); e = goog.style.getOffsetParent(e);)
        if (!(goog.userAgent.IE && 0 == e.clientWidth || goog.userAgent.WEBKIT && 0 == e.clientHeight && e == n || e == n || e == i || "visible" == goog.style.getStyle_(e, "overflow"))) {
            var l = goog.style.getPageOffset(e),
                s = goog.style.getClientLeftTop(e);
            l.x += s.x, l.y += s.y, t.top = Math.max(t.top, l.y), t.right = Math.min(t.right, l.x + e.clientWidth), t.bottom = Math.min(t.bottom, l.y + e.clientHeight), t.left = Math.max(t.left, l.x)
        }
    return n = r.scrollLeft, r = r.scrollTop, t.left = Math.max(t.left, n), t.top = Math.max(t.top, r), o = o.getViewportSize(), t.right = Math.min(t.right, n + o.width), t.bottom = Math.min(t.bottom, r + o.height), 0 <= t.top && 0 <= t.left && t.bottom > t.top && t.right > t.left ? t : null
}, goog.style.getContainerOffsetToScrollInto = function(e, t, o) {
    var n = goog.style.getPageOffset(e),
        i = goog.style.getPageOffset(t),
        r = goog.style.getBorderBox(t),
        l = n.x - i.x - r.left,
        n = n.y - i.y - r.top,
        i = t.clientWidth - e.offsetWidth;
    return e = t.clientHeight - e.offsetHeight, r = t.scrollLeft, t = t.scrollTop, o ? (r += l - i / 2, t += n - e / 2) : (r += Math.min(l, Math.max(l - i, 0)), t += Math.min(n, Math.max(n - e, 0))), new goog.math.Coordinate(r, t)
}, goog.style.scrollIntoContainerView = function(e, t, o) {
    e = goog.style.getContainerOffsetToScrollInto(e, t, o), t.scrollLeft = e.x, t.scrollTop = e.y
}, goog.style.getClientLeftTop = function(e) {
    if (goog.userAgent.GECKO && !goog.userAgent.isVersionOrHigher("1.9")) {
        var t = parseFloat(goog.style.getComputedStyle(e, "borderLeftWidth"));
        if (goog.style.isRightToLeft(e)) var o = e.offsetWidth - e.clientWidth - t - parseFloat(goog.style.getComputedStyle(e, "borderRightWidth")),
            t = t + o;
        return new goog.math.Coordinate(t, parseFloat(goog.style.getComputedStyle(e, "borderTopWidth")))
    }
    return new goog.math.Coordinate(e.clientLeft, e.clientTop)
}, goog.style.getPageOffset = function(e) {
    var t, o = goog.dom.getOwnerDocument(e),
        n = goog.style.getStyle_(e, "position");
    goog.asserts.assertObject(e, "Parameter is required");
    var i = !goog.style.GET_BOUNDING_CLIENT_RECT_ALWAYS_EXISTS && goog.userAgent.GECKO && o.getBoxObjectFor && !e.getBoundingClientRect && "absolute" == n && (t = o.getBoxObjectFor(e)) && (0 > t.screenX || 0 > t.screenY),
        r = new goog.math.Coordinate(0, 0),
        l = goog.style.getClientViewportElement(o);
    if (e == l) return r;
    if (goog.style.GET_BOUNDING_CLIENT_RECT_ALWAYS_EXISTS || e.getBoundingClientRect) t = goog.style.getBoundingClientRect_(e), e = goog.dom.getDomHelper(o).getDocumentScroll(), r.x = t.left + e.x, r.y = t.top + e.y;
    else if (o.getBoxObjectFor && !i) t = o.getBoxObjectFor(e), e = o.getBoxObjectFor(l), r.x = t.screenX - e.screenX, r.y = t.screenY - e.screenY;
    else {
        t = e;
        do {
            if (r.x += t.offsetLeft, r.y += t.offsetTop, t != e && (r.x += t.clientLeft || 0, r.y += t.clientTop || 0), goog.userAgent.WEBKIT && "fixed" == goog.style.getComputedPosition(t)) {
                r.x += o.body.scrollLeft, r.y += o.body.scrollTop;
                break
            }
            t = t.offsetParent
        } while (t && t != e);
        for ((goog.userAgent.OPERA || goog.userAgent.WEBKIT && "absolute" == n) && (r.y -= o.body.offsetTop), t = e;
            (t = goog.style.getOffsetParent(t)) && t != o.body && t != l;) r.x -= t.scrollLeft, goog.userAgent.OPERA && "TR" == t.tagName || (r.y -= t.scrollTop)
    }
    return r
}, goog.style.getPageOffsetLeft = function(e) {
    return goog.style.getPageOffset(e).x
}, goog.style.getPageOffsetTop = function(e) {
    return goog.style.getPageOffset(e).y
}, goog.style.getFramedPageOffset = function(e, t) {
    var o = new goog.math.Coordinate(0, 0),
        n = goog.dom.getWindow(goog.dom.getOwnerDocument(e)),
        i = e;
    do {
        var r = n == t ? goog.style.getPageOffset(i) : goog.style.getClientPositionForElement_(goog.asserts.assert(i));
        o.x += r.x, o.y += r.y
    } while (n && n != t && (i = n.frameElement) && (n = n.parent));
    return o
}, goog.style.translateRectForAnotherFrame = function(e, t, o) {
    if (t.getDocument() != o.getDocument()) {
        var n = t.getDocument().body;
        o = goog.style.getFramedPageOffset(n, o.getWindow()), o = goog.math.Coordinate.difference(o, goog.style.getPageOffset(n)), goog.userAgent.IE && !t.isCss1CompatMode() && (o = goog.math.Coordinate.difference(o, t.getDocumentScroll())), e.left += o.x, e.top += o.y
    }
}, goog.style.getRelativePosition = function(e, t) {
    var o = goog.style.getClientPosition(e),
        n = goog.style.getClientPosition(t);
    return new goog.math.Coordinate(o.x - n.x, o.y - n.y)
}, goog.style.getClientPositionForElement_ = function(e) {
    var t;
    if (goog.style.GET_BOUNDING_CLIENT_RECT_ALWAYS_EXISTS || e.getBoundingClientRect) t = goog.style.getBoundingClientRect_(e), t = new goog.math.Coordinate(t.left, t.top);
    else {
        t = goog.dom.getDomHelper(e).getDocumentScroll();
        var o = goog.style.getPageOffset(e);
        t = new goog.math.Coordinate(o.x - t.x, o.y - t.y)
    }
    return goog.userAgent.GECKO && !goog.userAgent.isVersionOrHigher(12) ? goog.math.Coordinate.sum(t, goog.style.getCssTranslation(e)) : t
}, goog.style.getClientPosition = function(e) {
    if (goog.asserts.assert(e), e.nodeType == goog.dom.NodeType.ELEMENT) return goog.style.getClientPositionForElement_(e);
    var t = goog.isFunction(e.getBrowserEvent),
        o = e;
    return e.targetTouches ? o = e.targetTouches[0] : t && e.getBrowserEvent().targetTouches && (o = e.getBrowserEvent().targetTouches[0]), new goog.math.Coordinate(o.clientX, o.clientY)
}, goog.style.setPageOffset = function(e, t, o) {
    var n = goog.style.getPageOffset(e);
    t instanceof goog.math.Coordinate && (o = t.y, t = t.x), goog.style.setPosition(e, e.offsetLeft + (t - n.x), e.offsetTop + (o - n.y))
}, goog.style.setSize = function(e, t, o) {
    if (t instanceof goog.math.Size) o = t.height, t = t.width;
    else if (void 0 == o) throw Error("missing height argument");
    goog.style.setWidth(e, t), goog.style.setHeight(e, o)
}, goog.style.getPixelStyleValue_ = function(e, t) {
    return "number" == typeof e && (e = (t ? Math.round(e) : e) + "px"), e
}, goog.style.setHeight = function(e, t) {
    e.style.height = goog.style.getPixelStyleValue_(t, !0)
}, goog.style.setWidth = function(e, t) {
    e.style.width = goog.style.getPixelStyleValue_(t, !0)
}, goog.style.getSize = function(e) {
    return goog.style.evaluateWithTemporaryDisplay_(goog.style.getSizeWithDisplay_, e)
}, goog.style.evaluateWithTemporaryDisplay_ = function(e, t) {
    if ("none" != goog.style.getStyle_(t, "display")) return e(t);
    var o = t.style,
        n = o.display,
        i = o.visibility,
        r = o.position;
    o.visibility = "hidden", o.position = "absolute", o.display = "inline";
    var l = e(t);
    return o.display = n, o.position = r, o.visibility = i, l
}, goog.style.getSizeWithDisplay_ = function(e) {
    var t = e.offsetWidth,
        o = e.offsetHeight,
        n = goog.userAgent.WEBKIT && !t && !o;
    return goog.isDef(t) && !n || !e.getBoundingClientRect ? new goog.math.Size(t, o) : (e = goog.style.getBoundingClientRect_(e), new goog.math.Size(e.right - e.left, e.bottom - e.top))
}, goog.style.getTransformedSize = function(e) {
    return e.getBoundingClientRect ? (e = goog.style.evaluateWithTemporaryDisplay_(goog.style.getBoundingClientRect_, e), new goog.math.Size(e.right - e.left, e.bottom - e.top)) : null
}, goog.style.getBounds = function(e) {
    var t = goog.style.getPageOffset(e);
    return e = goog.style.getSize(e), new goog.math.Rect(t.x, t.y, e.width, e.height)
}, goog.style.toCamelCase = function(e) {
    return goog.string.toCamelCase(String(e))
}, goog.style.toSelectorCase = function(e) {
    return goog.string.toSelectorCase(e)
}, goog.style.getOpacity = function(e) {
    var t = e.style;
    return e = "", "opacity" in t ? e = t.opacity : "MozOpacity" in t ? e = t.MozOpacity : "filter" in t && (t = t.filter.match(/alpha\(opacity=([\d.]+)\)/)) && (e = String(t[1] / 100)), "" == e ? e : Number(e)
}, goog.style.setOpacity = function(e, t) {
    var o = e.style;
    "opacity" in o ? o.opacity = t : "MozOpacity" in o ? o.MozOpacity = t : "filter" in o && (o.filter = "" === t ? "" : "alpha(opacity=" + 100 * t + ")")
}, goog.style.setTransparentBackgroundImage = function(e, t) {
    var o = e.style;
    goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("8") ? o.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + t + '", sizingMethod="crop")' : (o.backgroundImage = "url(" + t + ")", o.backgroundPosition = "top left", o.backgroundRepeat = "no-repeat")
}, goog.style.clearTransparentBackgroundImage = function(e) {
    e = e.style, "filter" in e ? e.filter = "" : e.backgroundImage = "none"
}, goog.style.showElement = function(e, t) {
    goog.style.setElementShown(e, t)
}, goog.style.setElementShown = function(e, t) {
    e.style.display = t ? "" : "none"
}, goog.style.isElementShown = function(e) {
    return "none" != e.style.display
}, goog.style.installStyles = function(e, t) {
    var o = goog.dom.getDomHelper(t),
        n = null,
        i = o.getDocument();
    return goog.userAgent.IE && i.createStyleSheet ? (n = i.createStyleSheet(), goog.style.setStyles(n, e)) : (i = o.getElementsByTagNameAndClass("head")[0], i || (n = o.getElementsByTagNameAndClass("body")[0], i = o.createDom("head"), n.parentNode.insertBefore(i, n)), n = o.createDom("style"), goog.style.setStyles(n, e), o.appendChild(i, n)), n
}, goog.style.uninstallStyles = function(e) {
    goog.dom.removeNode(e.ownerNode || e.owningElement || e)
}, goog.style.setStyles = function(e, t) {
    goog.userAgent.IE && goog.isDef(e.cssText) ? e.cssText = t : e.innerHTML = t
}, goog.style.setPreWrap = function(e) {
    e = e.style, goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("8") ? (e.whiteSpace = "pre", e.wordWrap = "break-word") : e.whiteSpace = goog.userAgent.GECKO ? "-moz-pre-wrap" : "pre-wrap"
}, goog.style.setInlineBlock = function(e) {
    e = e.style, e.position = "relative", goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("8") ? (e.zoom = "1", e.display = "inline") : e.display = goog.userAgent.GECKO ? goog.userAgent.isVersionOrHigher("1.9a") ? "inline-block" : "-moz-inline-box" : "inline-block"
}, goog.style.isRightToLeft = function(e) {
    return "rtl" == goog.style.getStyle_(e, "direction")
}, goog.style.unselectableStyle_ = goog.userAgent.GECKO ? "MozUserSelect" : goog.userAgent.WEBKIT ? "WebkitUserSelect" : null, goog.style.isUnselectable = function(e) {
    return goog.style.unselectableStyle_ ? "none" == e.style[goog.style.unselectableStyle_].toLowerCase() : goog.userAgent.IE || goog.userAgent.OPERA ? "on" == e.getAttribute("unselectable") : !1
}, goog.style.setUnselectable = function(e, t, o) {
    o = o ? null : e.getElementsByTagName("*");
    var n = goog.style.unselectableStyle_;
    if (n) {
        if (t = t ? "none" : "", e.style[n] = t, o) {
            e = 0;
            for (var i; i = o[e]; e++) i.style[n] = t
        }
    } else if ((goog.userAgent.IE || goog.userAgent.OPERA) && (t = t ? "on" : "", e.setAttribute("unselectable", t), o))
        for (e = 0; i = o[e]; e++) i.setAttribute("unselectable", t)
}, goog.style.getBorderBoxSize = function(e) {
    return new goog.math.Size(e.offsetWidth, e.offsetHeight)
}, goog.style.setBorderBoxSize = function(e, t) {
    var o = goog.dom.getOwnerDocument(e),
        n = goog.dom.getDomHelper(o).isCss1CompatMode();
    if (!goog.userAgent.IE || n && goog.userAgent.isVersionOrHigher("8")) goog.style.setBoxSizingSize_(e, t, "border-box");
    else if (o = e.style, n) {
        var n = goog.style.getPaddingBox(e),
            i = goog.style.getBorderBox(e);
        o.pixelWidth = t.width - i.left - n.left - n.right - i.right, o.pixelHeight = t.height - i.top - n.top - n.bottom - i.bottom
    } else o.pixelWidth = t.width, o.pixelHeight = t.height
}, goog.style.getContentBoxSize = function(e) {
    var t = goog.dom.getOwnerDocument(e),
        o = goog.userAgent.IE && e.currentStyle;
    return o && goog.dom.getDomHelper(t).isCss1CompatMode() && "auto" != o.width && "auto" != o.height && !o.boxSizing ? (t = goog.style.getIePixelValue_(e, o.width, "width", "pixelWidth"), e = goog.style.getIePixelValue_(e, o.height, "height", "pixelHeight"), new goog.math.Size(t, e)) : (o = goog.style.getBorderBoxSize(e), t = goog.style.getPaddingBox(e), e = goog.style.getBorderBox(e), new goog.math.Size(o.width - e.left - t.left - t.right - e.right, o.height - e.top - t.top - t.bottom - e.bottom))
}, goog.style.setContentBoxSize = function(e, t) {
    var o = goog.dom.getOwnerDocument(e),
        n = goog.dom.getDomHelper(o).isCss1CompatMode();
    if (!goog.userAgent.IE || n && goog.userAgent.isVersionOrHigher("8")) goog.style.setBoxSizingSize_(e, t, "content-box");
    else if (o = e.style, n) o.pixelWidth = t.width, o.pixelHeight = t.height;
    else {
        var n = goog.style.getPaddingBox(e),
            i = goog.style.getBorderBox(e);
        o.pixelWidth = t.width + i.left + n.left + n.right + i.right, o.pixelHeight = t.height + i.top + n.top + n.bottom + i.bottom
    }
}, goog.style.setBoxSizingSize_ = function(e, t, o) {
    e = e.style, goog.userAgent.GECKO ? e.MozBoxSizing = o : goog.userAgent.WEBKIT ? e.WebkitBoxSizing = o : e.boxSizing = o, e.width = Math.max(t.width, 0) + "px", e.height = Math.max(t.height, 0) + "px"
}, goog.style.getIePixelValue_ = function(e, t, o, n) {
    if (/^\d+px?$/.test(t)) return parseInt(t, 10);
    var i = e.style[o],
        r = e.runtimeStyle[o];
    return e.runtimeStyle[o] = e.currentStyle[o], e.style[o] = t, t = e.style[n], e.style[o] = i, e.runtimeStyle[o] = r, t
}, goog.style.getIePixelDistance_ = function(e, t) {
    var o = goog.style.getCascadedStyle(e, t);
    return o ? goog.style.getIePixelValue_(e, o, "left", "pixelLeft") : 0
}, goog.style.getBox_ = function(e, t) {
    if (goog.userAgent.IE) {
        var o = goog.style.getIePixelDistance_(e, t + "Left"),
            n = goog.style.getIePixelDistance_(e, t + "Right"),
            i = goog.style.getIePixelDistance_(e, t + "Top"),
            r = goog.style.getIePixelDistance_(e, t + "Bottom");
        return new goog.math.Box(i, n, r, o)
    }
    return o = goog.style.getComputedStyle(e, t + "Left"), n = goog.style.getComputedStyle(e, t + "Right"), i = goog.style.getComputedStyle(e, t + "Top"), r = goog.style.getComputedStyle(e, t + "Bottom"), new goog.math.Box(parseFloat(i), parseFloat(n), parseFloat(r), parseFloat(o))
}, goog.style.getPaddingBox = function(e) {
    return goog.style.getBox_(e, "padding")
}, goog.style.getMarginBox = function(e) {
    return goog.style.getBox_(e, "margin")
}, goog.style.ieBorderWidthKeywords_ = {
    thin: 2,
    medium: 4,
    thick: 6
}, goog.style.getIePixelBorder_ = function(e, t) {
    if ("none" == goog.style.getCascadedStyle(e, t + "Style")) return 0;
    var o = goog.style.getCascadedStyle(e, t + "Width");
    return o in goog.style.ieBorderWidthKeywords_ ? goog.style.ieBorderWidthKeywords_[o] : goog.style.getIePixelValue_(e, o, "left", "pixelLeft")
}, goog.style.getBorderBox = function(e) {
    if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9)) {
        var t = goog.style.getIePixelBorder_(e, "borderLeft"),
            o = goog.style.getIePixelBorder_(e, "borderRight"),
            n = goog.style.getIePixelBorder_(e, "borderTop");
        return e = goog.style.getIePixelBorder_(e, "borderBottom"), new goog.math.Box(n, o, e, t)
    }
    return t = goog.style.getComputedStyle(e, "borderLeftWidth"), o = goog.style.getComputedStyle(e, "borderRightWidth"), n = goog.style.getComputedStyle(e, "borderTopWidth"), e = goog.style.getComputedStyle(e, "borderBottomWidth"), new goog.math.Box(parseFloat(n), parseFloat(o), parseFloat(e), parseFloat(t))
}, goog.style.getFontFamily = function(e) {
    var t = goog.dom.getOwnerDocument(e),
        o = "";
    if (t.body.createTextRange) {
        t = t.body.createTextRange(), t.moveToElementText(e);
        try {
            o = t.queryCommandValue("FontName")
        } catch (n) {
            o = ""
        }
    }
    return o || (o = goog.style.getStyle_(e, "fontFamily")), e = o.split(","), 1 < e.length && (o = e[0]), goog.string.stripQuotes(o, "\"'")
}, goog.style.lengthUnitRegex_ = /[^\d]+$/, goog.style.getLengthUnits = function(e) {
    return (e = e.match(goog.style.lengthUnitRegex_)) && e[0] || null
}, goog.style.ABSOLUTE_CSS_LENGTH_UNITS_ = {
    cm: 1,
    "in": 1,
    mm: 1,
    pc: 1,
    pt: 1
}, goog.style.CONVERTIBLE_RELATIVE_CSS_UNITS_ = {
    em: 1,
    ex: 1
}, goog.style.getFontSize = function(e) {
    var t = goog.style.getStyle_(e, "fontSize"),
        o = goog.style.getLengthUnits(t);
    if (t && "px" == o) return parseInt(t, 10);
    if (goog.userAgent.IE) {
        if (o in goog.style.ABSOLUTE_CSS_LENGTH_UNITS_) return goog.style.getIePixelValue_(e, t, "left", "pixelLeft");
        if (e.parentNode && e.parentNode.nodeType == goog.dom.NodeType.ELEMENT && o in goog.style.CONVERTIBLE_RELATIVE_CSS_UNITS_) return e = e.parentNode, o = goog.style.getStyle_(e, "fontSize"), goog.style.getIePixelValue_(e, t == o ? "1em" : t, "left", "pixelLeft")
    }
    return o = goog.dom.createDom("span", {
        style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"
    }), goog.dom.appendChild(e, o), t = o.offsetHeight, goog.dom.removeNode(o), t
}, goog.style.parseStyleAttribute = function(e) {
    var t = {};
    return goog.array.forEach(e.split(/\s*;\s*/), function(e) {
        e = e.split(/\s*:\s*/), 2 == e.length && (t[goog.string.toCamelCase(e[0].toLowerCase())] = e[1])
    }), t
}, goog.style.toStyleAttribute = function(e) {
    var t = [];
    return goog.object.forEach(e, function(e, o) {
        t.push(goog.string.toSelectorCase(o), ":", e, ";")
    }), t.join("")
}, goog.style.setFloat = function(e, t) {
    e.style[goog.userAgent.IE ? "styleFloat" : "cssFloat"] = t
}, goog.style.getFloat = function(e) {
    return e.style[goog.userAgent.IE ? "styleFloat" : "cssFloat"] || ""
}, goog.style.getScrollbarWidth = function(e) {
    var t = goog.dom.createElement("div");
    return e && (t.className = e), t.style.cssText = "overflow:auto;position:absolute;top:0;width:100px;height:100px", e = goog.dom.createElement("div"), goog.style.setSize(e, "200px", "200px"), t.appendChild(e), goog.dom.appendChild(goog.dom.getDocument().body, t), e = t.offsetWidth - t.clientWidth, goog.dom.removeNode(t), e
}, goog.style.MATRIX_TRANSLATION_REGEX_ = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/, goog.style.getCssTranslation = function(e) {
    var t;
    goog.userAgent.IE ? t = "-ms-transform" : goog.userAgent.WEBKIT ? t = "-webkit-transform" : goog.userAgent.OPERA ? t = "-o-transform" : goog.userAgent.GECKO && (t = "-moz-transform");
    var o;
    return t && (o = goog.style.getStyle_(e, t)), o || (o = goog.style.getStyle_(e, "transform")), o && (e = o.match(goog.style.MATRIX_TRANSLATION_REGEX_)) ? new goog.math.Coordinate(parseFloat(e[1]), parseFloat(e[2])) : new goog.math.Coordinate(0, 0)
}, goog.events.EventHandler = function(e) {
    goog.Disposable.call(this), this.handler_ = e, this.keys_ = {}
}, goog.inherits(goog.events.EventHandler, goog.Disposable), goog.events.EventHandler.typeArray_ = [], goog.events.EventHandler.prototype.listen = function(e, t, o, n) {
    return this.listen_(e, t, o, n)
}, goog.events.EventHandler.prototype.listenWithScope = function(e, t, o, n, i) {
    return this.listen_(e, t, o, n, i)
}, goog.events.EventHandler.prototype.listen_ = function(e, t, o, n, i) {
    goog.isArray(t) || (goog.events.EventHandler.typeArray_[0] = t, t = goog.events.EventHandler.typeArray_);
    for (var r = 0; r < t.length; r++) {
        var l = goog.events.listen(e, t[r], o || this.handleEvent, n || !1, i || this.handler_ || this);
        if (!l) break;
        this.keys_[l.key] = l
    }
    return this
}, goog.events.EventHandler.prototype.listenOnce = function(e, t, o, n) {
    return this.listenOnce_(e, t, o, n)
}, goog.events.EventHandler.prototype.listenOnceWithScope = function(e, t, o, n, i) {
    return this.listenOnce_(e, t, o, n, i)
}, goog.events.EventHandler.prototype.listenOnce_ = function(e, t, o, n, i) {
    if (goog.isArray(t))
        for (var r = 0; r < t.length; r++) this.listenOnce_(e, t[r], o, n, i);
    else {
        if (e = goog.events.listenOnce(e, t, o || this.handleEvent, n, i || this.handler_ || this), !e) return this;
        this.keys_[e.key] = e
    }
    return this
}, goog.events.EventHandler.prototype.listenWithWrapper = function(e, t, o, n) {
    return this.listenWithWrapper_(e, t, o, n)
}, goog.events.EventHandler.prototype.listenWithWrapperAndScope = function(e, t, o, n, i) {
    return this.listenWithWrapper_(e, t, o, n, i)
}, goog.events.EventHandler.prototype.listenWithWrapper_ = function(e, t, o, n, i) {
    return t.listen(e, o, n, i || this.handler_ || this, this), this
}, goog.events.EventHandler.prototype.getListenerCount = function() {
    var e, t = 0;
    for (e in this.keys_) Object.prototype.hasOwnProperty.call(this.keys_, e) && t++;
    return t
}, goog.events.EventHandler.prototype.unlisten = function(e, t, o, n, i) {
    if (goog.isArray(t))
        for (var r = 0; r < t.length; r++) this.unlisten(e, t[r], o, n, i);
    else(e = goog.events.getListener(e, t, o || this.handleEvent, n, i || this.handler_ || this)) && (goog.events.unlistenByKey(e), delete this.keys_[e.key]);
    return this
}, goog.events.EventHandler.prototype.unlistenWithWrapper = function(e, t, o, n, i) {
    return t.unlisten(e, o, n, i || this.handler_ || this, this), this
}, goog.events.EventHandler.prototype.removeAll = function() {
    goog.object.forEach(this.keys_, goog.events.unlistenByKey), this.keys_ = {}
}, goog.events.EventHandler.prototype.disposeInternal = function() {
    goog.events.EventHandler.superClass_.disposeInternal.call(this), this.removeAll()
}, goog.events.EventHandler.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented")
}, goog.ui = {}, goog.ui.IdGenerator = function() {}, goog.addSingletonGetter(goog.ui.IdGenerator), goog.ui.IdGenerator.prototype.nextId_ = 0, goog.ui.IdGenerator.prototype.getNextUniqueId = function() {
    return ":" + (this.nextId_++).toString(36)
}, goog.events.EventTarget = function() {
    goog.Disposable.call(this), this.eventTargetListeners_ = new goog.events.ListenerMap(this), this.actualEventTarget_ = this
}, goog.inherits(goog.events.EventTarget, goog.Disposable), goog.events.Listenable.addImplementation(goog.events.EventTarget), goog.events.EventTarget.MAX_ANCESTORS_ = 1e3, goog.events.EventTarget.prototype.parentEventTarget_ = null, goog.events.EventTarget.prototype.getParentEventTarget = function() {
    return this.parentEventTarget_
}, goog.events.EventTarget.prototype.setParentEventTarget = function(e) {
    this.parentEventTarget_ = e
}, goog.events.EventTarget.prototype.addEventListener = function(e, t, o, n) {
    goog.events.listen(this, e, t, o, n)
}, goog.events.EventTarget.prototype.removeEventListener = function(e, t, o, n) {
    goog.events.unlisten(this, e, t, o, n)
}, goog.events.EventTarget.prototype.dispatchEvent = function(e) {
    this.assertInitialized_();
    var t, o = this.getParentEventTarget();
    if (o) {
        t = [];
        for (var n = 1; o; o = o.getParentEventTarget()) t.push(o), goog.asserts.assert(++n < goog.events.EventTarget.MAX_ANCESTORS_, "infinite loop")
    }
    return goog.events.EventTarget.dispatchEventInternal_(this.actualEventTarget_, e, t)
}, goog.events.EventTarget.prototype.disposeInternal = function() {
    goog.events.EventTarget.superClass_.disposeInternal.call(this), this.removeAllListeners(), this.parentEventTarget_ = null
}, goog.events.EventTarget.prototype.listen = function(e, t, o, n) {
    return this.assertInitialized_(), this.eventTargetListeners_.add(String(e), t, !1, o, n)
}, goog.events.EventTarget.prototype.listenOnce = function(e, t, o, n) {
    return this.eventTargetListeners_.add(String(e), t, !0, o, n)
}, goog.events.EventTarget.prototype.unlisten = function(e, t, o, n) {
    return this.eventTargetListeners_.remove(String(e), t, o, n)
}, goog.events.EventTarget.prototype.unlistenByKey = function(e) {
    return this.eventTargetListeners_.removeByKey(e)
}, goog.events.EventTarget.prototype.removeAllListeners = function(e) {
    return this.eventTargetListeners_ ? this.eventTargetListeners_.removeAll(e) : 0
}, goog.events.EventTarget.prototype.fireListeners = function(e, t, o) {
    if (e = this.eventTargetListeners_.listeners[String(e)], !e) return !0;
    e = goog.array.clone(e);
    for (var n = !0, i = 0; i < e.length; ++i) {
        var r = e[i];
        if (r && !r.removed && r.capture == t) {
            var l = r.listener,
                s = r.handler || r.src;
            r.callOnce && this.unlistenByKey(r), n = !1 !== l.call(s, o) && n
        }
    }
    return n && 0 != o.returnValue_
}, goog.events.EventTarget.prototype.getListeners = function(e, t) {
    return this.eventTargetListeners_.getListeners(String(e), t)
}, goog.events.EventTarget.prototype.getListener = function(e, t, o, n) {
    return this.eventTargetListeners_.getListener(String(e), t, o, n)
}, goog.events.EventTarget.prototype.hasListener = function(e, t) {
    var o = goog.isDef(e) ? String(e) : void 0;
    return this.eventTargetListeners_.hasListener(o, t)
}, goog.events.EventTarget.prototype.setTargetForTesting = function(e) {
    this.actualEventTarget_ = e
}, goog.events.EventTarget.prototype.assertInitialized_ = function() {
    goog.asserts.assert(this.eventTargetListeners_, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
}, goog.events.EventTarget.dispatchEventInternal_ = function(e, t, o) {
    var n = t.type || t;
    if (goog.isString(t)) t = new goog.events.Event(t, e);
    else if (t instanceof goog.events.Event) t.target = t.target || e;
    else {
        var i = t;
        t = new goog.events.Event(n, e), goog.object.extend(t, i)
    }
    var r, i = !0;
    if (o)
        for (var l = o.length - 1; !t.propagationStopped_ && l >= 0; l--) r = t.currentTarget = o[l], i = r.fireListeners(n, !0, t) && i;
    if (t.propagationStopped_ || (r = t.currentTarget = e, i = r.fireListeners(n, !0, t) && i, t.propagationStopped_ || (i = r.fireListeners(n, !1, t) && i)), o)
        for (l = 0; !t.propagationStopped_ && l < o.length; l++) r = t.currentTarget = o[l], i = r.fireListeners(n, !1, t) && i;
    return i
}, goog.ui.Component = function(e) {
    goog.events.EventTarget.call(this), this.dom_ = e || goog.dom.getDomHelper(), this.rightToLeft_ = goog.ui.Component.defaultRightToLeft_
}, goog.inherits(goog.ui.Component, goog.events.EventTarget), goog.ui.Component.ALLOW_DETACHED_DECORATION = !1, goog.ui.Component.prototype.idGenerator_ = goog.ui.IdGenerator.getInstance(), goog.ui.Component.DEFAULT_BIDI_DIR = 0, goog.ui.Component.defaultRightToLeft_ = 1 == goog.ui.Component.DEFAULT_BIDI_DIR ? !1 : -1 == goog.ui.Component.DEFAULT_BIDI_DIR ? !0 : null, goog.ui.Component.EventType = {
    BEFORE_SHOW: "beforeshow",
    SHOW: "show",
    HIDE: "hide",
    DISABLE: "disable",
    ENABLE: "enable",
    HIGHLIGHT: "highlight",
    UNHIGHLIGHT: "unhighlight",
    ACTIVATE: "activate",
    DEACTIVATE: "deactivate",
    SELECT: "select",
    UNSELECT: "unselect",
    CHECK: "check",
    UNCHECK: "uncheck",
    FOCUS: "focus",
    BLUR: "blur",
    OPEN: "open",
    CLOSE: "close",
    ENTER: "enter",
    LEAVE: "leave",
    ACTION: "action",
    CHANGE: "change"
}, goog.ui.Component.Error = {
    NOT_SUPPORTED: "Method not supported",
    DECORATE_INVALID: "Invalid element to decorate",
    ALREADY_RENDERED: "Component already rendered",
    PARENT_UNABLE_TO_BE_SET: "Unable to set parent component",
    CHILD_INDEX_OUT_OF_BOUNDS: "Child component index out of bounds",
    NOT_OUR_CHILD: "Child is not in parent component",
    NOT_IN_DOCUMENT: "Operation not supported while component is not in document",
    STATE_INVALID: "Invalid component state"
}, goog.ui.Component.State = {
    ALL: 255,
    DISABLED: 1,
    HOVER: 2,
    ACTIVE: 4,
    SELECTED: 8,
    CHECKED: 16,
    FOCUSED: 32,
    OPENED: 64
}, goog.ui.Component.getStateTransitionEvent = function(e, t) {
    switch (e) {
        case goog.ui.Component.State.DISABLED:
            return t ? goog.ui.Component.EventType.DISABLE : goog.ui.Component.EventType.ENABLE;
        case goog.ui.Component.State.HOVER:
            return t ? goog.ui.Component.EventType.HIGHLIGHT : goog.ui.Component.EventType.UNHIGHLIGHT;
        case goog.ui.Component.State.ACTIVE:
            return t ? goog.ui.Component.EventType.ACTIVATE : goog.ui.Component.EventType.DEACTIVATE;
        case goog.ui.Component.State.SELECTED:
            return t ? goog.ui.Component.EventType.SELECT : goog.ui.Component.EventType.UNSELECT;
        case goog.ui.Component.State.CHECKED:
            return t ? goog.ui.Component.EventType.CHECK : goog.ui.Component.EventType.UNCHECK;
        case goog.ui.Component.State.FOCUSED:
            return t ? goog.ui.Component.EventType.FOCUS : goog.ui.Component.EventType.BLUR;
        case goog.ui.Component.State.OPENED:
            return t ? goog.ui.Component.EventType.OPEN : goog.ui.Component.EventType.CLOSE
    }
    throw Error(goog.ui.Component.Error.STATE_INVALID)
}, goog.ui.Component.setDefaultRightToLeft = function(e) {
    goog.ui.Component.defaultRightToLeft_ = e
}, goog.ui.Component.prototype.id_ = null, goog.ui.Component.prototype.inDocument_ = !1, goog.ui.Component.prototype.element_ = null, goog.ui.Component.prototype.rightToLeft_ = null, goog.ui.Component.prototype.model_ = null, goog.ui.Component.prototype.parent_ = null, goog.ui.Component.prototype.children_ = null, goog.ui.Component.prototype.childIndex_ = null, goog.ui.Component.prototype.wasDecorated_ = !1, goog.ui.Component.prototype.getId = function() {
    return this.id_ || (this.id_ = this.idGenerator_.getNextUniqueId())
}, goog.ui.Component.prototype.setId = function(e) {
    this.parent_ && this.parent_.childIndex_ && (goog.object.remove(this.parent_.childIndex_, this.id_), goog.object.add(this.parent_.childIndex_, e, this)), this.id_ = e
}, goog.ui.Component.prototype.getElement = function() {
    return this.element_
}, goog.ui.Component.prototype.getElementStrict = function() {
    var e = this.element_;
    return goog.asserts.assert(e, "Can not call getElementStrict before rendering/decorating."), e
}, goog.ui.Component.prototype.setElementInternal = function(e) {
    this.element_ = e
}, goog.ui.Component.prototype.getElementsByClass = function(e) {
    return this.element_ ? this.dom_.getElementsByClass(e, this.element_) : []
}, goog.ui.Component.prototype.getElementByClass = function(e) {
    return this.element_ ? this.dom_.getElementByClass(e, this.element_) : null
}, goog.ui.Component.prototype.getRequiredElementByClass = function(e) {
    var t = this.getElementByClass(e);
    return goog.asserts.assert(t, "Expected element in component with class: %s", e), t
}, goog.ui.Component.prototype.getHandler = function() {
    return this.googUiComponentHandler_ || (this.googUiComponentHandler_ = new goog.events.EventHandler(this)), this.googUiComponentHandler_
}, goog.ui.Component.prototype.setParent = function(e) {
    if (this == e) throw Error(goog.ui.Component.Error.PARENT_UNABLE_TO_BE_SET);
    if (e && this.parent_ && this.id_ && this.parent_.getChild(this.id_) && this.parent_ != e) throw Error(goog.ui.Component.Error.PARENT_UNABLE_TO_BE_SET);
    this.parent_ = e, goog.ui.Component.superClass_.setParentEventTarget.call(this, e)
}, goog.ui.Component.prototype.getParent = function() {
    return this.parent_
}, goog.ui.Component.prototype.setParentEventTarget = function(e) {
    if (this.parent_ && this.parent_ != e) throw Error(goog.ui.Component.Error.NOT_SUPPORTED);
    goog.ui.Component.superClass_.setParentEventTarget.call(this, e)
}, goog.ui.Component.prototype.getDomHelper = function() {
    return this.dom_
}, goog.ui.Component.prototype.isInDocument = function() {
    return this.inDocument_
}, goog.ui.Component.prototype.createDom = function() {
    this.element_ = this.dom_.createElement("div")
}, goog.ui.Component.prototype.render = function(e) {
    this.render_(e)
}, goog.ui.Component.prototype.renderBefore = function(e) {
    this.render_(e.parentNode, e)
}, goog.ui.Component.prototype.render_ = function(e, t) {
    if (this.inDocument_) throw Error(goog.ui.Component.Error.ALREADY_RENDERED);
    this.element_ || this.createDom(), e ? e.insertBefore(this.element_, t || null) : this.dom_.getDocument().body.appendChild(this.element_), this.parent_ && !this.parent_.isInDocument() || this.enterDocument()
}, goog.ui.Component.prototype.decorate = function(e) {
    if (this.inDocument_) throw Error(goog.ui.Component.Error.ALREADY_RENDERED);
    if (!e || !this.canDecorate(e)) throw Error(goog.ui.Component.Error.DECORATE_INVALID);
    this.wasDecorated_ = !0;
    var t = goog.dom.getOwnerDocument(e);
    this.dom_ && this.dom_.getDocument() == t || (this.dom_ = goog.dom.getDomHelper(e)), this.decorateInternal(e), goog.ui.Component.ALLOW_DETACHED_DECORATION && !goog.dom.contains(t, e) || this.enterDocument()
}, goog.ui.Component.prototype.canDecorate = function() {
    return !0
}, goog.ui.Component.prototype.wasDecorated = function() {
    return this.wasDecorated_
}, goog.ui.Component.prototype.decorateInternal = function(e) {
    this.element_ = e
}, goog.ui.Component.prototype.enterDocument = function() {
    this.inDocument_ = !0, this.forEachChild(function(e) {
        !e.isInDocument() && e.getElement() && e.enterDocument()
    })
}, goog.ui.Component.prototype.exitDocument = function() {
    this.forEachChild(function(e) {
        e.isInDocument() && e.exitDocument()
    }), this.googUiComponentHandler_ && this.googUiComponentHandler_.removeAll(), this.inDocument_ = !1
}, goog.ui.Component.prototype.disposeInternal = function() {
    this.inDocument_ && this.exitDocument(), this.googUiComponentHandler_ && (this.googUiComponentHandler_.dispose(), delete this.googUiComponentHandler_), this.forEachChild(function(e) {
        e.dispose()
    }), !this.wasDecorated_ && this.element_ && goog.dom.removeNode(this.element_), this.parent_ = this.model_ = this.element_ = this.childIndex_ = this.children_ = null, goog.ui.Component.superClass_.disposeInternal.call(this)
}, goog.ui.Component.prototype.makeId = function(e) {
    return this.getId() + "." + e
}, goog.ui.Component.prototype.makeIds = function(e) {
    var t, o = {};
    for (t in e) o[t] = this.makeId(e[t]);
    return o
}, goog.ui.Component.prototype.getModel = function() {
    return this.model_
}, goog.ui.Component.prototype.setModel = function(e) {
    this.model_ = e
}, goog.ui.Component.prototype.getFragmentFromId = function(e) {
    return e.substring(this.getId().length + 1)
}, goog.ui.Component.prototype.getElementByFragment = function(e) {
    if (!this.inDocument_) throw Error(goog.ui.Component.Error.NOT_IN_DOCUMENT);
    return this.dom_.getElement(this.makeId(e))
}, goog.ui.Component.prototype.addChild = function(e, t) {
    this.addChildAt(e, this.getChildCount(), t)
}, goog.ui.Component.prototype.addChildAt = function(e, t, o) {
    if (goog.asserts.assert(!!e, "Provided element must not be null."), e.inDocument_ && (o || !this.inDocument_)) throw Error(goog.ui.Component.Error.ALREADY_RENDERED);
    if (0 > t || t > this.getChildCount()) throw Error(goog.ui.Component.Error.CHILD_INDEX_OUT_OF_BOUNDS);
    this.childIndex_ && this.children_ || (this.childIndex_ = {}, this.children_ = []), e.getParent() == this ? (goog.object.set(this.childIndex_, e.getId(), e), goog.array.remove(this.children_, e)) : goog.object.add(this.childIndex_, e.getId(), e), e.setParent(this), goog.array.insertAt(this.children_, e, t), e.inDocument_ && this.inDocument_ && e.getParent() == this ? (o = this.getContentElement(), o.insertBefore(e.getElement(), o.childNodes[t] || null)) : o ? (this.element_ || this.createDom(), t = this.getChildAt(t + 1), e.render_(this.getContentElement(), t ? t.element_ : null)) : this.inDocument_ && !e.inDocument_ && e.element_ && e.element_.parentNode && e.element_.parentNode.nodeType == goog.dom.NodeType.ELEMENT && e.enterDocument()
}, goog.ui.Component.prototype.getContentElement = function() {
    return this.element_
}, goog.ui.Component.prototype.isRightToLeft = function() {
    return null == this.rightToLeft_ && (this.rightToLeft_ = goog.style.isRightToLeft(this.inDocument_ ? this.element_ : this.dom_.getDocument().body)), this.rightToLeft_
}, goog.ui.Component.prototype.setRightToLeft = function(e) {
    if (this.inDocument_) throw Error(goog.ui.Component.Error.ALREADY_RENDERED);
    this.rightToLeft_ = e
}, goog.ui.Component.prototype.hasChildren = function() {
    return !!this.children_ && 0 != this.children_.length
}, goog.ui.Component.prototype.getChildCount = function() {
    return this.children_ ? this.children_.length : 0
}, goog.ui.Component.prototype.getChildIds = function() {
    var e = [];
    return this.forEachChild(function(t) {
        e.push(t.getId())
    }), e
}, goog.ui.Component.prototype.getChild = function(e) {
    return this.childIndex_ && e ? goog.object.get(this.childIndex_, e) || null : null
}, goog.ui.Component.prototype.getChildAt = function(e) {
    return this.children_ ? this.children_[e] || null : null
}, goog.ui.Component.prototype.forEachChild = function(e, t) {
    this.children_ && goog.array.forEach(this.children_, e, t)
}, goog.ui.Component.prototype.indexOfChild = function(e) {
    return this.children_ && e ? goog.array.indexOf(this.children_, e) : -1
}, goog.ui.Component.prototype.removeChild = function(e, t) {
    if (e) {
        var o = goog.isString(e) ? e : e.getId();
        e = this.getChild(o), o && e && (goog.object.remove(this.childIndex_, o), goog.array.remove(this.children_, e), t && (e.exitDocument(), e.element_ && goog.dom.removeNode(e.element_)), e.setParent(null))
    }
    if (!e) throw Error(goog.ui.Component.Error.NOT_OUR_CHILD);
    return e
}, goog.ui.Component.prototype.removeChildAt = function(e, t) {
    return this.removeChild(this.getChildAt(e), t)
}, goog.ui.Component.prototype.removeChildren = function(e) {
    for (var t = []; this.hasChildren();) t.push(this.removeChildAt(0, e));
    return t
}, goog.Timer = function(e, t) {
    goog.events.EventTarget.call(this), this.interval_ = e || 1, this.timerObject_ = t || goog.Timer.defaultTimerObject, this.boundTick_ = goog.bind(this.tick_, this), this.last_ = goog.now()
}, goog.inherits(goog.Timer, goog.events.EventTarget), goog.Timer.MAX_TIMEOUT_ = 2147483647, goog.Timer.prototype.enabled = !1, goog.Timer.defaultTimerObject = goog.global, goog.Timer.intervalScale = .8, goog.Timer.prototype.timer_ = null, goog.Timer.prototype.getInterval = function() {
    return this.interval_
}, goog.Timer.prototype.setInterval = function(e) {
    this.interval_ = e, this.timer_ && this.enabled ? (this.stop(), this.start()) : this.timer_ && this.stop()
}, goog.Timer.prototype.tick_ = function() {
    if (this.enabled) {
        var e = goog.now() - this.last_;
        e > 0 && e < this.interval_ * goog.Timer.intervalScale ? this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_ - e) : (this.timer_ && (this.timerObject_.clearTimeout(this.timer_), this.timer_ = null), this.dispatchTick(), this.enabled && (this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_), this.last_ = goog.now()))
    }
}, goog.Timer.prototype.dispatchTick = function() {
    this.dispatchEvent(goog.Timer.TICK)
}, goog.Timer.prototype.start = function() {
    this.enabled = !0, this.timer_ || (this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_), this.last_ = goog.now())
}, goog.Timer.prototype.stop = function() {
    this.enabled = !1, this.timer_ && (this.timerObject_.clearTimeout(this.timer_), this.timer_ = null)
}, goog.Timer.prototype.disposeInternal = function() {
    goog.Timer.superClass_.disposeInternal.call(this), this.stop(), delete this.timerObject_
}, goog.Timer.TICK = "tick", goog.Timer.callOnce = function(e, t, o) {
    if (goog.isFunction(e)) o && (e = goog.bind(e, o));
    else {
        if (!e || "function" != typeof e.handleEvent) throw Error("Invalid listener argument");
        e = goog.bind(e.handleEvent, e)
    }
    return t > goog.Timer.MAX_TIMEOUT_ ? -1 : goog.Timer.defaultTimerObject.setTimeout(e, t || 0)
}, goog.Timer.clear = function(e) {
    goog.Timer.defaultTimerObject.clearTimeout(e)
}, goog.a11y = {}, goog.a11y.aria = {}, goog.a11y.aria.State = {
    ACTIVEDESCENDANT: "activedescendant",
    ATOMIC: "atomic",
    AUTOCOMPLETE: "autocomplete",
    BUSY: "busy",
    CHECKED: "checked",
    CONTROLS: "controls",
    DESCRIBEDBY: "describedby",
    DISABLED: "disabled",
    DROPEFFECT: "dropeffect",
    EXPANDED: "expanded",
    FLOWTO: "flowto",
    GRABBED: "grabbed",
    HASPOPUP: "haspopup",
    HIDDEN: "hidden",
    INVALID: "invalid",
    LABEL: "label",
    LABELLEDBY: "labelledby",
    LEVEL: "level",
    LIVE: "live",
    MULTILINE: "multiline",
    MULTISELECTABLE: "multiselectable",
    ORIENTATION: "orientation",
    OWNS: "owns",
    POSINSET: "posinset",
    PRESSED: "pressed",
    READONLY: "readonly",
    RELEVANT: "relevant",
    REQUIRED: "required",
    SELECTED: "selected",
    SETSIZE: "setsize",
    SORT: "sort",
    VALUEMAX: "valuemax",
    VALUEMIN: "valuemin",
    VALUENOW: "valuenow",
    VALUETEXT: "valuetext"
}, goog.a11y.aria.AutoCompleteValues = {
    INLINE: "inline",
    LIST: "list",
    BOTH: "both",
    NONE: "none"
}, goog.a11y.aria.DropEffectValues = {
    COPY: "copy",
    MOVE: "move",
    LINK: "link",
    EXECUTE: "execute",
    POPUP: "popup",
    NONE: "none"
}, goog.a11y.aria.LivePriority = {
    OFF: "off",
    POLITE: "polite",
    ASSERTIVE: "assertive"
}, goog.a11y.aria.OrientationValues = {
    VERTICAL: "vertical",
    HORIZONTAL: "horizontal"
}, goog.a11y.aria.RelevantValues = {
    ADDITIONS: "additions",
    REMOVALS: "removals",
    TEXT: "text",
    ALL: "all"
}, goog.a11y.aria.SortValues = {
    ASCENDING: "ascending",
    DESCENDING: "descending",
    NONE: "none",
    OTHER: "other"
}, goog.a11y.aria.CheckedValues = {
    TRUE: "true",
    FALSE: "false",
    MIXED: "mixed",
    UNDEFINED: "undefined"
}, goog.a11y.aria.ExpandedValues = {
    TRUE: "true",
    FALSE: "false",
    UNDEFINED: "undefined"
}, goog.a11y.aria.GrabbedValues = {
    TRUE: "true",
    FALSE: "false",
    UNDEFINED: "undefined"
}, goog.a11y.aria.InvalidValues = {
    FALSE: "false",
    TRUE: "true",
    GRAMMAR: "grammar",
    SPELLING: "spelling"
}, goog.a11y.aria.PressedValues = {
    TRUE: "true",
    FALSE: "false",
    MIXED: "mixed",
    UNDEFINED: "undefined"
}, goog.a11y.aria.SelectedValues = {
    TRUE: "true",
    FALSE: "false",
    UNDEFINED: "undefined"
}, goog.a11y.aria.datatables = {}, goog.a11y.aria.datatables.getDefaultValuesMap = function() {
    return goog.a11y.aria.DefaultStateValueMap_ || (goog.a11y.aria.DefaultStateValueMap_ = goog.object.create(goog.a11y.aria.State.ATOMIC, !1, goog.a11y.aria.State.AUTOCOMPLETE, "none", goog.a11y.aria.State.DROPEFFECT, "none", goog.a11y.aria.State.HASPOPUP, !1, goog.a11y.aria.State.LIVE, "off", goog.a11y.aria.State.MULTILINE, !1, goog.a11y.aria.State.MULTISELECTABLE, !1, goog.a11y.aria.State.ORIENTATION, "vertical", goog.a11y.aria.State.READONLY, !1, goog.a11y.aria.State.RELEVANT, "additions text", goog.a11y.aria.State.REQUIRED, !1, goog.a11y.aria.State.SORT, "none", goog.a11y.aria.State.BUSY, !1, goog.a11y.aria.State.DISABLED, !1, goog.a11y.aria.State.HIDDEN, !1, goog.a11y.aria.State.INVALID, "false")), goog.a11y.aria.DefaultStateValueMap_
}, goog.a11y.aria.Role = {
    ALERT: "alert",
    ALERTDIALOG: "alertdialog",
    APPLICATION: "application",
    ARTICLE: "article",
    BANNER: "banner",
    BUTTON: "button",
    CHECKBOX: "checkbox",
    COLUMNHEADER: "columnheader",
    COMBOBOX: "combobox",
    COMPLEMENTARY: "complementary",
    CONTENTINFO: "contentinfo",
    DEFINITION: "definition",
    DIALOG: "dialog",
    DIRECTORY: "directory",
    DOCUMENT: "document",
    FORM: "form",
    GRID: "grid",
    GRIDCELL: "gridcell",
    GROUP: "group",
    HEADING: "heading",
    IMG: "img",
    LINK: "link",
    LIST: "list",
    LISTBOX: "listbox",
    LISTITEM: "listitem",
    LOG: "log",
    MAIN: "main",
    MARQUEE: "marquee",
    MATH: "math",
    MENU: "menu",
    MENUBAR: "menubar",
    MENU_ITEM: "menuitem",
    MENU_ITEM_CHECKBOX: "menuitemcheckbox",
    MENU_ITEM_RADIO: "menuitemradio",
    NAVIGATION: "navigation",
    NOTE: "note",
    OPTION: "option",
    PRESENTATION: "presentation",
    PROGRESSBAR: "progressbar",
    RADIO: "radio",
    RADIOGROUP: "radiogroup",
    REGION: "region",
    ROW: "row",
    ROWGROUP: "rowgroup",
    ROWHEADER: "rowheader",
    SCROLLBAR: "scrollbar",
    SEARCH: "search",
    SEPARATOR: "separator",
    SLIDER: "slider",
    SPINBUTTON: "spinbutton",
    STATUS: "status",
    TAB: "tab",
    TAB_LIST: "tablist",
    TAB_PANEL: "tabpanel",
    TEXTBOX: "textbox",
    TIMER: "timer",
    TOOLBAR: "toolbar",
    TOOLTIP: "tooltip",
    TREE: "tree",
    TREEGRID: "treegrid",
    TREEITEM: "treeitem"
}, goog.a11y.aria.ARIA_PREFIX_ = "aria-", goog.a11y.aria.ROLE_ATTRIBUTE_ = "role", goog.a11y.aria.TAGS_WITH_ASSUMED_ROLES_ = [goog.dom.TagName.A, goog.dom.TagName.AREA, goog.dom.TagName.BUTTON, goog.dom.TagName.HEAD, goog.dom.TagName.INPUT, goog.dom.TagName.LINK, goog.dom.TagName.MENU, goog.dom.TagName.META, goog.dom.TagName.OPTGROUP, goog.dom.TagName.OPTION, goog.dom.TagName.PROGRESS, goog.dom.TagName.STYLE, goog.dom.TagName.SELECT, goog.dom.TagName.SOURCE, goog.dom.TagName.TEXTAREA, goog.dom.TagName.TITLE, goog.dom.TagName.TRACK], goog.a11y.aria.setRole = function(e, t) {
    t ? (goog.asserts.ENABLE_ASSERTS && goog.asserts.assert(goog.object.containsValue(goog.a11y.aria.Role, t), "No such ARIA role " + t), e.setAttribute(goog.a11y.aria.ROLE_ATTRIBUTE_, t)) : goog.a11y.aria.removeRole(e)
}, goog.a11y.aria.getRole = function(e) {
    return e.getAttribute(goog.a11y.aria.ROLE_ATTRIBUTE_) || null
}, goog.a11y.aria.removeRole = function(e) {
    e.removeAttribute(goog.a11y.aria.ROLE_ATTRIBUTE_)
}, goog.a11y.aria.setState = function(e, t, o) {
    goog.isArrayLike(o) && (o = o.join(" "));
    var n = goog.a11y.aria.getAriaAttributeName_(t);
    "" === o || void 0 == o ? (o = goog.a11y.aria.datatables.getDefaultValuesMap(), t in o ? e.setAttribute(n, o[t]) : e.removeAttribute(n)) : e.setAttribute(n, o)
}, goog.a11y.aria.removeState = function(e, t) {
    e.removeAttribute(goog.a11y.aria.getAriaAttributeName_(t))
}, goog.a11y.aria.getState = function(e, t) {
    var o = e.getAttribute(goog.a11y.aria.getAriaAttributeName_(t));
    return null == o || void 0 == o ? "" : String(o)
}, goog.a11y.aria.getActiveDescendant = function(e) {
    var t = goog.a11y.aria.getState(e, goog.a11y.aria.State.ACTIVEDESCENDANT);
    return goog.dom.getOwnerDocument(e).getElementById(t)
}, goog.a11y.aria.setActiveDescendant = function(e, t) {
    var o = "";
    t && (o = t.id, goog.asserts.assert(o, "The active element should have an id.")), goog.a11y.aria.setState(e, goog.a11y.aria.State.ACTIVEDESCENDANT, o)
}, goog.a11y.aria.getLabel = function(e) {
    return goog.a11y.aria.getState(e, goog.a11y.aria.State.LABEL)
}, goog.a11y.aria.setLabel = function(e, t) {
    goog.a11y.aria.setState(e, goog.a11y.aria.State.LABEL, t)
}, goog.a11y.aria.assertRoleIsSetInternalUtil = function(e, t) {
    if (!goog.array.contains(goog.a11y.aria.TAGS_WITH_ASSUMED_ROLES_, e.tagName)) {
        var o = goog.a11y.aria.getRole(e);
        goog.asserts.assert(null != o, "The element ARIA role cannot be null."), goog.asserts.assert(goog.array.contains(t, o), 'Non existing or incorrect role set for element.The role set is "' + o + '". The role should be any of "' + t + '". Check the ARIA specification for more details http://www.w3.org/TR/wai-aria/roles.')
    }
}, goog.a11y.aria.getStateBoolean = function(e, t) {
    var o = e.getAttribute(goog.a11y.aria.getAriaAttributeName_(t));
    return goog.asserts.assert(goog.isBoolean(o) || null == o || "true" == o || "false" == o), null == o ? o : goog.isBoolean(o) ? o : "true" == o
}, goog.a11y.aria.getStateNumber = function(e, t) {
    var o = e.getAttribute(goog.a11y.aria.getAriaAttributeName_(t));
    return goog.asserts.assert(!(null != o && isNaN(Number(o)) || goog.isBoolean(o))), null == o ? null : Number(o)
}, goog.a11y.aria.getStateString = function(e, t) {
    var o = e.getAttribute(goog.a11y.aria.getAriaAttributeName_(t));
    return goog.asserts.assert((null == o || goog.isString(o)) && isNaN(Number(o)) && "true" != o && "false" != o), null == o ? null : o
}, goog.a11y.aria.getStringArrayStateInternalUtil = function(e, t) {
    var o = e.getAttribute(goog.a11y.aria.getAriaAttributeName_(t));
    return goog.a11y.aria.splitStringOnWhitespace_(o)
}, goog.a11y.aria.splitStringOnWhitespace_ = function(e) {
    return e ? e.split(/\s+/) : []
}, goog.a11y.aria.getAriaAttributeName_ = function(e) {
    return goog.asserts.ENABLE_ASSERTS && (goog.asserts.assert(e, "ARIA attribute cannot be empty."), goog.asserts.assert(goog.object.containsValue(goog.a11y.aria.State, e), "No such ARIA attribute " + e)), goog.a11y.aria.ARIA_PREFIX_ + e
}, goog.events.KeyCodes = {
    WIN_KEY_FF_LINUX: 0,
    MAC_ENTER: 3,
    BACKSPACE: 8,
    TAB: 9,
    NUM_CENTER: 12,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAUSE: 19,
    CAPS_LOCK: 20,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    PRINT_SCREEN: 44,
    INSERT: 45,
    DELETE: 46,
    ZERO: 48,
    ONE: 49,
    TWO: 50,
    THREE: 51,
    FOUR: 52,
    FIVE: 53,
    SIX: 54,
    SEVEN: 55,
    EIGHT: 56,
    NINE: 57,
    FF_SEMICOLON: 59,
    FF_EQUALS: 61,
    FF_DASH: 173,
    QUESTION_MARK: 63,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    META: 91,
    WIN_KEY_RIGHT: 92,
    CONTEXT_MENU: 93,
    NUM_ZERO: 96,
    NUM_ONE: 97,
    NUM_TWO: 98,
    NUM_THREE: 99,
    NUM_FOUR: 100,
    NUM_FIVE: 101,
    NUM_SIX: 102,
    NUM_SEVEN: 103,
    NUM_EIGHT: 104,
    NUM_NINE: 105,
    NUM_MULTIPLY: 106,
    NUM_PLUS: 107,
    NUM_MINUS: 109,
    NUM_PERIOD: 110,
    NUM_DIVISION: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUMLOCK: 144,
    SCROLL_LOCK: 145,
    FIRST_MEDIA_KEY: 166,
    LAST_MEDIA_KEY: 183,
    SEMICOLON: 186,
    DASH: 189,
    EQUALS: 187,
    COMMA: 188,
    PERIOD: 190,
    SLASH: 191,
    APOSTROPHE: 192,
    TILDE: 192,
    SINGLE_QUOTE: 222,
    OPEN_SQUARE_BRACKET: 219,
    BACKSLASH: 220,
    CLOSE_SQUARE_BRACKET: 221,
    WIN_KEY: 224,
    MAC_FF_META: 224,
    MAC_WK_CMD_LEFT: 91,
    MAC_WK_CMD_RIGHT: 93,
    WIN_IME: 229,
    PHANTOM: 255
}, goog.events.KeyCodes.isTextModifyingKeyEvent = function(e) {
    if (e.altKey && !e.ctrlKey || e.metaKey || e.keyCode >= goog.events.KeyCodes.F1 && e.keyCode <= goog.events.KeyCodes.F12) return !1;
    switch (e.keyCode) {
        case goog.events.KeyCodes.ALT:
        case goog.events.KeyCodes.CAPS_LOCK:
        case goog.events.KeyCodes.CONTEXT_MENU:
        case goog.events.KeyCodes.CTRL:
        case goog.events.KeyCodes.DOWN:
        case goog.events.KeyCodes.END:
        case goog.events.KeyCodes.ESC:
        case goog.events.KeyCodes.HOME:
        case goog.events.KeyCodes.INSERT:
        case goog.events.KeyCodes.LEFT:
        case goog.events.KeyCodes.MAC_FF_META:
        case goog.events.KeyCodes.META:
        case goog.events.KeyCodes.NUMLOCK:
        case goog.events.KeyCodes.NUM_CENTER:
        case goog.events.KeyCodes.PAGE_DOWN:
        case goog.events.KeyCodes.PAGE_UP:
        case goog.events.KeyCodes.PAUSE:
        case goog.events.KeyCodes.PHANTOM:
        case goog.events.KeyCodes.PRINT_SCREEN:
        case goog.events.KeyCodes.RIGHT:
        case goog.events.KeyCodes.SCROLL_LOCK:
        case goog.events.KeyCodes.SHIFT:
        case goog.events.KeyCodes.UP:
        case goog.events.KeyCodes.WIN_KEY:
        case goog.events.KeyCodes.WIN_KEY_RIGHT:
            return !1;
        case goog.events.KeyCodes.WIN_KEY_FF_LINUX:
            return !goog.userAgent.GECKO;
        default:
            return e.keyCode < goog.events.KeyCodes.FIRST_MEDIA_KEY || e.keyCode > goog.events.KeyCodes.LAST_MEDIA_KEY
    }
}, goog.events.KeyCodes.firesKeyPressEvent = function(e, t, o, n, i) {
    if (!(goog.userAgent.IE || goog.userAgent.WEBKIT && goog.userAgent.isVersionOrHigher("525"))) return !0;
    if (goog.userAgent.MAC && i) return goog.events.KeyCodes.isCharacterKey(e);
    if (i && !n) return !1;
    if (goog.isNumber(t) && (t = goog.events.KeyCodes.normalizeKeyCode(t)), !o && (t == goog.events.KeyCodes.CTRL || t == goog.events.KeyCodes.ALT || goog.userAgent.MAC && t == goog.events.KeyCodes.META)) return !1;
    if (goog.userAgent.WEBKIT && n && o) switch (e) {
        case goog.events.KeyCodes.BACKSLASH:
        case goog.events.KeyCodes.OPEN_SQUARE_BRACKET:
        case goog.events.KeyCodes.CLOSE_SQUARE_BRACKET:
        case goog.events.KeyCodes.TILDE:
        case goog.events.KeyCodes.SEMICOLON:
        case goog.events.KeyCodes.DASH:
        case goog.events.KeyCodes.EQUALS:
        case goog.events.KeyCodes.COMMA:
        case goog.events.KeyCodes.PERIOD:
        case goog.events.KeyCodes.SLASH:
        case goog.events.KeyCodes.APOSTROPHE:
        case goog.events.KeyCodes.SINGLE_QUOTE:
            return !1
    }
    if (goog.userAgent.IE && n && t == e) return !1;
    switch (e) {
        case goog.events.KeyCodes.ENTER:
            return !(goog.userAgent.IE && goog.userAgent.isDocumentModeOrHigher(9));
        case goog.events.KeyCodes.ESC:
            return !goog.userAgent.WEBKIT
    }
    return goog.events.KeyCodes.isCharacterKey(e)
}, goog.events.KeyCodes.isCharacterKey = function(e) {
    if (e >= goog.events.KeyCodes.ZERO && e <= goog.events.KeyCodes.NINE || e >= goog.events.KeyCodes.NUM_ZERO && e <= goog.events.KeyCodes.NUM_MULTIPLY || e >= goog.events.KeyCodes.A && e <= goog.events.KeyCodes.Z || goog.userAgent.WEBKIT && 0 == e) return !0;
    switch (e) {
        case goog.events.KeyCodes.SPACE:
        case goog.events.KeyCodes.QUESTION_MARK:
        case goog.events.KeyCodes.NUM_PLUS:
        case goog.events.KeyCodes.NUM_MINUS:
        case goog.events.KeyCodes.NUM_PERIOD:
        case goog.events.KeyCodes.NUM_DIVISION:
        case goog.events.KeyCodes.SEMICOLON:
        case goog.events.KeyCodes.FF_SEMICOLON:
        case goog.events.KeyCodes.DASH:
        case goog.events.KeyCodes.EQUALS:
        case goog.events.KeyCodes.FF_EQUALS:
        case goog.events.KeyCodes.COMMA:
        case goog.events.KeyCodes.PERIOD:
        case goog.events.KeyCodes.SLASH:
        case goog.events.KeyCodes.APOSTROPHE:
        case goog.events.KeyCodes.SINGLE_QUOTE:
        case goog.events.KeyCodes.OPEN_SQUARE_BRACKET:
        case goog.events.KeyCodes.BACKSLASH:
        case goog.events.KeyCodes.CLOSE_SQUARE_BRACKET:
            return !0;
        default:
            return !1
    }
}, goog.events.KeyCodes.normalizeKeyCode = function(e) {
    return goog.userAgent.GECKO ? goog.events.KeyCodes.normalizeGeckoKeyCode(e) : goog.userAgent.MAC && goog.userAgent.WEBKIT ? goog.events.KeyCodes.normalizeMacWebKitKeyCode(e) : e
}, goog.events.KeyCodes.normalizeGeckoKeyCode = function(e) {
    switch (e) {
        case goog.events.KeyCodes.FF_EQUALS:
            return goog.events.KeyCodes.EQUALS;
        case goog.events.KeyCodes.FF_SEMICOLON:
            return goog.events.KeyCodes.SEMICOLON;
        case goog.events.KeyCodes.FF_DASH:
            return goog.events.KeyCodes.DASH;
        case goog.events.KeyCodes.MAC_FF_META:
            return goog.events.KeyCodes.META;
        case goog.events.KeyCodes.WIN_KEY_FF_LINUX:
            return goog.events.KeyCodes.WIN_KEY;
        default:
            return e
    }
}, goog.events.KeyCodes.normalizeMacWebKitKeyCode = function(e) {
    switch (e) {
        case goog.events.KeyCodes.MAC_WK_CMD_RIGHT:
            return goog.events.KeyCodes.META;
        default:
            return e
    }
}, goog.ui.tree = {}, goog.ui.tree.BaseNode = function(e, t, o) {
    goog.ui.Component.call(this, o), this.config_ = t || goog.ui.tree.TreeControl.defaultConfig, this.html_ = e
}, goog.inherits(goog.ui.tree.BaseNode, goog.ui.Component), goog.ui.tree.BaseNode.EventType = {
    BEFORE_EXPAND: "beforeexpand",
    EXPAND: "expand",
    BEFORE_COLLAPSE: "beforecollapse",
    COLLAPSE: "collapse"
}, goog.ui.tree.BaseNode.allNodes = {}, goog.ui.tree.BaseNode.prototype.selected_ = !1, goog.ui.tree.BaseNode.prototype.expanded_ = !1, goog.ui.tree.BaseNode.prototype.toolTip_ = null, goog.ui.tree.BaseNode.prototype.afterLabelHtml_ = "", goog.ui.tree.BaseNode.prototype.isUserCollapsible_ = !0, goog.ui.tree.BaseNode.prototype.depth_ = -1, goog.ui.tree.BaseNode.prototype.disposeInternal = function() {
    goog.ui.tree.BaseNode.superClass_.disposeInternal.call(this), this.tree_ && (this.tree_.removeNode(this), this.tree_ = null), this.setElementInternal(null)
}, goog.ui.tree.BaseNode.prototype.initAccessibility = function() {
    var e = this.getElement();
    if (e) {
        var t = this.getLabelElement();
        if (t && !t.id && (t.id = this.getId() + ".label"), goog.a11y.aria.setRole(e, "treeitem"), goog.a11y.aria.setState(e, "selected", !1), goog.a11y.aria.setState(e, "expanded", !1), goog.a11y.aria.setState(e, "level", this.getDepth()), t && goog.a11y.aria.setState(e, "labelledby", t.id), (e = this.getIconElement()) && goog.a11y.aria.setRole(e, "presentation"), (e = this.getExpandIconElement()) && goog.a11y.aria.setRole(e, "presentation"), (e = this.getChildrenElement()) && (goog.a11y.aria.setRole(e, "group"), e.hasChildNodes()))
            for (e = this.getChildCount(), t = 1; e >= t; t++) {
                var o = this.getChildAt(t - 1).getElement();
                goog.asserts.assert(o, "The child element cannot be null"), goog.a11y.aria.setState(o, "setsize", e), goog.a11y.aria.setState(o, "posinset", t)
            }
    }
}, goog.ui.tree.BaseNode.prototype.createDom = function() {
    var e = new goog.string.StringBuffer;
    this.toHtml(e), e = this.getDomHelper().htmlToDocumentFragment(e.toString()), this.setElementInternal(e)
}, goog.ui.tree.BaseNode.prototype.enterDocument = function() {
    goog.ui.tree.BaseNode.superClass_.enterDocument.call(this), goog.ui.tree.BaseNode.allNodes[this.getId()] = this, this.initAccessibility()
}, goog.ui.tree.BaseNode.prototype.exitDocument = function() {
    goog.ui.tree.BaseNode.superClass_.exitDocument.call(this), delete goog.ui.tree.BaseNode.allNodes[this.getId()]
}, goog.ui.tree.BaseNode.prototype.addChildAt = function(e, t, o) {
    goog.asserts.assert(!e.getParent()), o = this.getChildAt(t - 1);
    var n = this.getChildAt(t);
    if (goog.ui.tree.BaseNode.superClass_.addChildAt.call(this, e, t), e.previousSibling_ = o, e.nextSibling_ = n, o ? o.nextSibling_ = e : this.firstChild_ = e, n ? n.previousSibling_ = e : this.lastChild_ = e, (t = this.getTree()) && e.setTreeInternal(t), e.setDepth_(this.getDepth() + 1), this.getElement() && (this.updateExpandIcon(), this.getExpanded())) {
        t = this.getChildrenElement(), e.getElement() || e.createDom();
        var i = e.getElement(),
            r = n && n.getElement();
        t.insertBefore(i, r), this.isInDocument() && e.enterDocument(), n || (o ? o.updateExpandIcon() : (goog.style.setElementShown(t, !0), this.setExpanded(this.getExpanded())))
    }
}, goog.ui.tree.BaseNode.prototype.add = function(e, t) {
    return goog.asserts.assert(!t || t.getParent() == this, "Can only add nodes before siblings"), e.getParent() && e.getParent().removeChild(e), this.addChildAt(e, t ? this.indexOfChild(t) : this.getChildCount()), e
}, goog.ui.tree.BaseNode.prototype.removeChild = function(e) {
    var t = this.getTree(),
        o = t ? t.getSelectedItem() : null;
    if ((o == e || e.contains(o)) && (t.hasFocus() ? (this.select(), goog.Timer.callOnce(this.onTimeoutSelect_, 10, this)) : this.select()), goog.ui.tree.BaseNode.superClass_.removeChild.call(this, e), this.lastChild_ == e && (this.lastChild_ = e.previousSibling_), this.firstChild_ == e && (this.firstChild_ = e.nextSibling_), e.previousSibling_ && (e.previousSibling_.nextSibling_ = e.nextSibling_), e.nextSibling_ && (e.nextSibling_.previousSibling_ = e.previousSibling_), o = e.isLastSibling(), e.tree_ = null, e.depth_ = -1, t && (t.removeNode(this), this.isInDocument())) {
        if (t = this.getChildrenElement(), e.isInDocument()) {
            var n = e.getElement();
            t.removeChild(n), e.exitDocument()
        }
        o && (o = this.getLastChild()) && o.updateExpandIcon(), this.hasChildren() || (t.style.display = "none", this.updateExpandIcon(), this.updateIcon_())
    }
    return e
}, goog.ui.tree.BaseNode.prototype.remove = goog.ui.tree.BaseNode.prototype.removeChild, goog.ui.tree.BaseNode.prototype.onTimeoutSelect_ = function() {
    this.select()
}, goog.ui.tree.BaseNode.prototype.getDepth = function() {
    var e = this.depth_;
    return 0 > e && (e = this.computeDepth_(), this.setDepth_(e)), e
}, goog.ui.tree.BaseNode.prototype.computeDepth_ = function() {
    var e = this.getParent();
    return e ? e.getDepth() + 1 : 0
}, goog.ui.tree.BaseNode.prototype.setDepth_ = function(e) {
    if (e != this.depth_) {
        this.depth_ = e;
        var t = this.getRowElement();
        if (t) {
            var o = this.getPixelIndent_() + "px";
            this.isRightToLeft() ? t.style.paddingRight = o : t.style.paddingLeft = o
        }
        this.forEachChild(function(t) {
            t.setDepth_(e + 1)
        })
    }
}, goog.ui.tree.BaseNode.prototype.contains = function(e) {
    for (; e;) {
        if (e == this) return !0;
        e = e.getParent()
    }
    return !1
}, goog.ui.tree.BaseNode.EMPTY_CHILDREN_ = [], goog.ui.tree.BaseNode.prototype.getChildren = function() {
    var e = [];
    return this.forEachChild(function(t) {
        e.push(t)
    }), e
}, goog.ui.tree.BaseNode.prototype.getFirstChild = function() {
    return this.getChildAt(0)
}, goog.ui.tree.BaseNode.prototype.getLastChild = function() {
    return this.getChildAt(this.getChildCount() - 1)
}, goog.ui.tree.BaseNode.prototype.getPreviousSibling = function() {
    return this.previousSibling_
}, goog.ui.tree.BaseNode.prototype.getNextSibling = function() {
    return this.nextSibling_
}, goog.ui.tree.BaseNode.prototype.isLastSibling = function() {
    return !this.nextSibling_
}, goog.ui.tree.BaseNode.prototype.isSelected = function() {
    return this.selected_
}, goog.ui.tree.BaseNode.prototype.select = function() {
    var e = this.getTree();
    e && e.setSelectedItem(this)
}, goog.ui.tree.BaseNode.prototype.deselect = goog.nullFunction, goog.ui.tree.BaseNode.prototype.setSelectedInternal = function(e) {
    if (this.selected_ != e) {
        this.selected_ = e, this.updateRow();
        var t = this.getElement();
        t && (goog.a11y.aria.setState(t, "selected", e), e && (e = this.getTree().getElement(), goog.asserts.assert(e, "The DOM element for the tree cannot be null"), goog.a11y.aria.setState(e, "activedescendant", this.getId())))
    }
}, goog.ui.tree.BaseNode.prototype.getExpanded = function() {
    return this.expanded_
}, goog.ui.tree.BaseNode.prototype.setExpandedInternal = function(e) {
    this.expanded_ = e
}, goog.ui.tree.BaseNode.prototype.setExpanded = function(e) {
    var t = e != this.expanded_;
    if (!t || this.dispatchEvent(e ? goog.ui.tree.BaseNode.EventType.BEFORE_EXPAND : goog.ui.tree.BaseNode.EventType.BEFORE_COLLAPSE)) {
        var o;
        this.expanded_ = e, o = this.getTree();
        var n = this.getElement();
        if (this.hasChildren()) {
            if (!e && o && this.contains(o.getSelectedItem()) && this.select(), n) {
                if ((o = this.getChildrenElement()) && (goog.style.setElementShown(o, e), e && this.isInDocument() && !o.hasChildNodes())) {
                    var i = new goog.string.StringBuffer;
                    this.forEachChild(function(e) {
                        e.toHtml(i)
                    }), o.innerHTML = i.toString(), this.forEachChild(function(e) {
                        e.enterDocument()
                    })
                }
                this.updateExpandIcon()
            }
        } else(o = this.getChildrenElement()) && goog.style.setElementShown(o, !1);
        n && (this.updateIcon_(), goog.a11y.aria.setState(n, "expanded", e)), t && this.dispatchEvent(e ? goog.ui.tree.BaseNode.EventType.EXPAND : goog.ui.tree.BaseNode.EventType.COLLAPSE)
    }
}, goog.ui.tree.BaseNode.prototype.toggle = function() {
    this.setExpanded(!this.getExpanded())
}, goog.ui.tree.BaseNode.prototype.expand = function() {
    this.setExpanded(!0)
}, goog.ui.tree.BaseNode.prototype.collapse = function() {
    this.setExpanded(!1)
}, goog.ui.tree.BaseNode.prototype.collapseChildren = function() {
    this.forEachChild(function(e) {
        e.collapseAll()
    })
}, goog.ui.tree.BaseNode.prototype.collapseAll = function() {
    this.collapseChildren(), this.collapse()
}, goog.ui.tree.BaseNode.prototype.expandChildren = function() {
    this.forEachChild(function(e) {
        e.expandAll()
    })
}, goog.ui.tree.BaseNode.prototype.expandAll = function() {
    this.expandChildren(), this.expand()
}, goog.ui.tree.BaseNode.prototype.reveal = function() {
    var e = this.getParent();
    e && (e.setExpanded(!0), e.reveal())
}, goog.ui.tree.BaseNode.prototype.setIsUserCollapsible = function(e) {
    (this.isUserCollapsible_ = e) || this.expand(), this.getElement() && this.updateExpandIcon()
}, goog.ui.tree.BaseNode.prototype.isUserCollapsible = function() {
    return this.isUserCollapsible_
}, goog.ui.tree.BaseNode.prototype.toHtml = function(e) {
    var t = this.getTree(),
        t = !t.getShowLines() || t == this.getParent() && !t.getShowRootLines() ? this.config_.cssChildrenNoLines : this.config_.cssChildren,
        o = this.getExpanded() && this.hasChildren();
    e.append('<div class="', this.config_.cssItem, '" id="', this.getId(), '">', this.getRowHtml(), '<div class="', t, '" style="', this.getLineStyle(), o ? "" : "display:none;", '">'), o && this.forEachChild(function(t) {
        t.toHtml(e)
    }), e.append("</div></div>")
}, goog.ui.tree.BaseNode.prototype.getPixelIndent_ = function() {
    return Math.max(0, (this.getDepth() - 1) * this.config_.indentWidth)
}, goog.ui.tree.BaseNode.prototype.getRowHtml = function() {
    var e = new goog.string.StringBuffer;
    return e.append('<div class="', this.getRowClassName(), '" style="padding-', this.isRightToLeft() ? "right:" : "left:", this.getPixelIndent_(), 'px">', this.getExpandIconHtml(), this.getIconHtml(), this.getLabelHtml(), "</div>"), e.toString()
}, goog.ui.tree.BaseNode.prototype.getRowClassName = function() {
    var e;
    return e = this.isSelected() ? " " + this.config_.cssSelectedRow : "", this.config_.cssTreeRow + e
}, goog.ui.tree.BaseNode.prototype.getLabelHtml = function() {
    var e = this.getToolTip(),
        t = new goog.string.StringBuffer;
    return t.append('<span class="', this.config_.cssItemLabel, '"', e ? ' title="' + goog.string.htmlEscape(e) + '"' : "", ">", this.getHtml(), "</span>", "<span>", this.getAfterLabelHtml(), "</span>"), t.toString()
}, goog.ui.tree.BaseNode.prototype.getAfterLabelHtml = function() {
    return this.afterLabelHtml_
}, goog.ui.tree.BaseNode.prototype.setAfterLabelHtml = function(e) {
    this.afterLabelHtml_ = e;
    var t = this.getAfterLabelElement();
    t && (t.innerHTML = e)
}, goog.ui.tree.BaseNode.prototype.getIconHtml = function() {
    return '<span style="display:inline-block" class="' + this.getCalculatedIconClass() + '"></span>'
}, goog.ui.tree.BaseNode.prototype.getExpandIconHtml = function() {
    return '<span type="expand" style="display:inline-block" class="' + this.getExpandIconClass() + '"></span>'
}, goog.ui.tree.BaseNode.prototype.getExpandIconClass = function() {
    var e = this.getTree(),
        t = !e.getShowLines() || e == this.getParent() && !e.getShowRootLines(),
        o = this.config_,
        n = new goog.string.StringBuffer;
    if (n.append(o.cssTreeIcon, " ", o.cssExpandTreeIcon, " "), this.hasChildren()) {
        var i = 0;
        switch (e.getShowExpandIcons() && this.isUserCollapsible_ && (i = this.getExpanded() ? 2 : 1), t || (i = this.isLastSibling() ? i + 4 : i + 8), i) {
            case 1:
                n.append(o.cssExpandTreeIconPlus);
                break;
            case 2:
                n.append(o.cssExpandTreeIconMinus);
                break;
            case 4:
                n.append(o.cssExpandTreeIconL);
                break;
            case 5:
                n.append(o.cssExpandTreeIconLPlus);
                break;
            case 6:
                n.append(o.cssExpandTreeIconLMinus);
                break;
            case 8:
                n.append(o.cssExpandTreeIconT);
                break;
            case 9:
                n.append(o.cssExpandTreeIconTPlus);
                break;
            case 10:
                n.append(o.cssExpandTreeIconTMinus);
                break;
            default:
                n.append(o.cssExpandTreeIconBlank)
        }
    } else n.append(t ? o.cssExpandTreeIconBlank : this.isLastSibling() ? o.cssExpandTreeIconL : o.cssExpandTreeIconT);
    return n.toString()
}, goog.ui.tree.BaseNode.prototype.getLineStyle = function() {
    return "background-position:" + this.getLineStyle2() + ";"
}, goog.ui.tree.BaseNode.prototype.getLineStyle2 = function() {
    return (this.isLastSibling() ? "-100" : (this.getDepth() - 1) * this.config_.indentWidth) + "px 0"
}, goog.ui.tree.BaseNode.prototype.getElement = function() {
    var e = goog.ui.tree.BaseNode.superClass_.getElement.call(this);
    return e || (e = this.getDomHelper().getElement(this.getId()), this.setElementInternal(e)), e
}, goog.ui.tree.BaseNode.prototype.getRowElement = function() {
    var e = this.getElement();
    return e ? e.firstChild : null
}, goog.ui.tree.BaseNode.prototype.getExpandIconElement = function() {
    var e = this.getRowElement();
    return e ? e.firstChild : null
}, goog.ui.tree.BaseNode.prototype.getIconElement = function() {
    var e = this.getRowElement();
    return e ? e.childNodes[1] : null
}, goog.ui.tree.BaseNode.prototype.getLabelElement = function() {
    var e = this.getRowElement();
    return e && e.lastChild ? e.lastChild.previousSibling : null
}, goog.ui.tree.BaseNode.prototype.getAfterLabelElement = function() {
    var e = this.getRowElement();
    return e ? e.lastChild : null
}, goog.ui.tree.BaseNode.prototype.getChildrenElement = function() {
    var e = this.getElement();
    return e ? e.lastChild : null
}, goog.ui.tree.BaseNode.prototype.setIconClass = function(e) {
    this.iconClass_ = e, this.isInDocument() && this.updateIcon_()
}, goog.ui.tree.BaseNode.prototype.getIconClass = function() {
    return this.iconClass_
}, goog.ui.tree.BaseNode.prototype.setExpandedIconClass = function(e) {
    this.expandedIconClass_ = e, this.isInDocument() && this.updateIcon_()
}, goog.ui.tree.BaseNode.prototype.getExpandedIconClass = function() {
    return this.expandedIconClass_
}, goog.ui.tree.BaseNode.prototype.setText = function(e) {
    this.setHtml(goog.string.htmlEscape(e))
}, goog.ui.tree.BaseNode.prototype.getText = function() {
    return goog.string.unescapeEntities(this.getHtml())
}, goog.ui.tree.BaseNode.prototype.setHtml = function(e) {
    this.html_ = e;
    var t = this.getLabelElement();
    t && (t.innerHTML = e), (e = this.getTree()) && e.setNode(this)
}, goog.ui.tree.BaseNode.prototype.getHtml = function() {
    return this.html_
}, goog.ui.tree.BaseNode.prototype.setToolTip = function(e) {
    this.toolTip_ = e;
    var t = this.getLabelElement();
    t && (t.title = e)
}, goog.ui.tree.BaseNode.prototype.getToolTip = function() {
    return this.toolTip_
}, goog.ui.tree.BaseNode.prototype.updateRow = function() {
    var e = this.getRowElement();
    e && (e.className = this.getRowClassName())
}, goog.ui.tree.BaseNode.prototype.updateExpandIcon = function() {
    var e = this.getExpandIconElement();
    e && (e.className = this.getExpandIconClass()), (e = this.getChildrenElement()) && (e.style.backgroundPosition = this.getLineStyle2())
}, goog.ui.tree.BaseNode.prototype.updateIcon_ = function() {
    this.getIconElement().className = this.getCalculatedIconClass()
}, goog.ui.tree.BaseNode.prototype.onMouseDown = function(e) {
    "expand" == e.target.getAttribute("type") && this.hasChildren() ? this.isUserCollapsible_ && this.toggle() : (this.select(), this.updateRow())
}, goog.ui.tree.BaseNode.prototype.onClick_ = goog.events.Event.preventDefault, goog.ui.tree.BaseNode.prototype.onDoubleClick_ = function(e) {
    "expand" == e.target.getAttribute("type") && this.hasChildren() || this.isUserCollapsible_ && this.toggle()
}, goog.ui.tree.BaseNode.prototype.onKeyDown = function(e) {
    var t = !0;
    switch (e.keyCode) {
        case goog.events.KeyCodes.RIGHT:
            if (e.altKey) break;
            this.hasChildren() && (this.getExpanded() ? this.getFirstChild().select() : this.setExpanded(!0));
            break;
        case goog.events.KeyCodes.LEFT:
            if (e.altKey) break;
            if (this.hasChildren() && this.getExpanded() && this.isUserCollapsible_) this.setExpanded(!1);
            else {
                var o = this.getParent(),
                    n = this.getTree();
                o && (n.getShowRootNode() || o != n) && o.select()
            }
            break;
        case goog.events.KeyCodes.DOWN:
            (o = this.getNextShownNode()) && o.select();
            break;
        case goog.events.KeyCodes.UP:
            (o = this.getPreviousShownNode()) && o.select();
            break;
        default:
            t = !1
    }
    return t && (e.preventDefault(), (n = this.getTree()) && n.clearTypeAhead()), t
}, goog.ui.tree.BaseNode.prototype.onKeyPress_ = function(e) {
    !e.altKey && e.keyCode >= goog.events.KeyCodes.LEFT && e.keyCode <= goog.events.KeyCodes.DOWN && e.preventDefault()
}, goog.ui.tree.BaseNode.prototype.getLastShownDescendant = function() {
    return this.getExpanded() && this.hasChildren() ? this.getLastChild().getLastShownDescendant() : this
}, goog.ui.tree.BaseNode.prototype.getNextShownNode = function() {
    if (this.hasChildren() && this.getExpanded()) return this.getFirstChild();
    for (var e, t = this; t != this.getTree();) {
        if (e = t.getNextSibling(), null != e) return e;
        t = t.getParent()
    }
    return null
}, goog.ui.tree.BaseNode.prototype.getPreviousShownNode = function() {
    var e = this.getPreviousSibling();
    if (null != e) return e.getLastShownDescendant();
    var e = this.getParent(),
        t = this.getTree();
    return t.getShowRootNode() || e != t ? e : null
}, goog.ui.tree.BaseNode.prototype.getClientData = goog.ui.tree.BaseNode.prototype.getModel, goog.ui.tree.BaseNode.prototype.setClientData = goog.ui.tree.BaseNode.prototype.setModel, goog.ui.tree.BaseNode.prototype.getConfig = function() {
    return this.config_
}, goog.ui.tree.BaseNode.prototype.setTreeInternal = function(e) {
    this.tree_ != e && (this.tree_ = e, e.setNode(this), this.forEachChild(function(t) {
        t.setTreeInternal(e)
    }))
}, goog.ui.tree.TreeNode = function(e, t, o) {
    goog.ui.tree.BaseNode.call(this, e, t, o)
}, goog.inherits(goog.ui.tree.TreeNode, goog.ui.tree.BaseNode), goog.ui.tree.TreeNode.prototype.tree_ = null, goog.ui.tree.TreeNode.prototype.getTree = function() {
    if (this.tree_) return this.tree_;
    var e = this.getParent();
    return e && (e = e.getTree()) ? (this.setTreeInternal(e), e) : null
}, goog.ui.tree.TreeNode.prototype.getCalculatedIconClass = function() {
    var e = this.getExpanded();
    if (e && this.expandedIconClass_) return this.expandedIconClass_;
    if (!e && this.iconClass_) return this.iconClass_;
    var t = this.getConfig();
    if (this.hasChildren()) {
        if (e && t.cssExpandedFolderIcon) return t.cssTreeIcon + " " + t.cssExpandedFolderIcon;
        if (!e && t.cssCollapsedFolderIcon) return t.cssTreeIcon + " " + t.cssCollapsedFolderIcon
    } else if (t.cssFileIcon) return t.cssTreeIcon + " " + t.cssFileIcon;
    return ""
};
var FRAME_MARGIN_SIDE = 15,
    FRAME_MARGIN_TOP = 10,
    FRAME_MARGIN_BOTTOM = 5,
    FRAME_HEADER_HEIGHT = 25;
Blockly.BlockSvgFramed = function(e) {
    Blockly.BlockSvg.call(this, e)
}, goog.inherits(Blockly.BlockSvgFramed, Blockly.BlockSvg), Blockly.BlockSvgFramed.prototype.initChildren = function() {
    var e = Blockly.createSvgElement("clipPath", {
        id: "frameClip" + this.block_.id
    }, this.svgGroup_);
    this.frameClipRect_ = Blockly.createSvgElement("rect", {
        x: -FRAME_MARGIN_SIDE,
        y: -(FRAME_MARGIN_TOP + FRAME_HEADER_HEIGHT),
        height: FRAME_HEADER_HEIGHT,
        width: "100%"
    }, e), this.frameBase_ = Blockly.createSvgElement("rect", {
        x: -FRAME_MARGIN_SIDE,
        y: -(FRAME_MARGIN_TOP + FRAME_HEADER_HEIGHT),
        fill: "#dddddd",
        stroke: "#aaaaaa",
        rx: 15,
        ry: 15
    }, this.svgGroup_), this.frameHeader_ = Blockly.createSvgElement("rect", {
        x: -FRAME_MARGIN_SIDE,
        y: -(FRAME_MARGIN_TOP + FRAME_HEADER_HEIGHT),
        fill: "#aaaaaa",
        rx: 15,
        ry: 15,
        "clip-path": "url(#frameClip" + this.block_.id + ")"
    }, this.svgGroup_), this.frameText_ = Blockly.createSvgElement("text", {
        "class": "blocklyText",
        style: "font-size: 12pt"
    }, this.svgGroup_), this.frameText_.appendChild(document.createTextNode(Blockly.Msg.FUNCTION_HEADER)), Blockly.BlockSvgFramed.superClass_.initChildren.call(this)
}, Blockly.BlockSvgFramed.prototype.getPadding = function() {
    return {
        top: FRAME_MARGIN_TOP + FRAME_HEADER_HEIGHT,
        right: FRAME_MARGIN_SIDE,
        bottom: FRAME_MARGIN_BOTTOM,
        left: FRAME_MARGIN_SIDE
    }
}, Blockly.BlockSvgFramed.prototype.renderDraw_ = function(e, t) {
    Blockly.BlockSvgFramed.superClass_.renderDraw_.call(this, e, t);
    var o = this.svgPath_.getBoundingClientRect(),
        n = o.width + 2 * FRAME_MARGIN_SIDE,
        o = o.height + FRAME_MARGIN_TOP + FRAME_MARGIN_BOTTOM + FRAME_HEADER_HEIGHT;
    this.frameBase_.setAttribute("width", n), this.frameBase_.setAttribute("height", o), this.frameHeader_.setAttribute("width", n), this.frameHeader_.setAttribute("height", o), Blockly.RTL && (this.frameClipRect_.setAttribute("x", -n + FRAME_MARGIN_SIDE), this.frameHeader_.setAttribute("x", -n + FRAME_MARGIN_SIDE), this.frameBase_.setAttribute("x", -n + FRAME_MARGIN_SIDE), this.frameText_.setAttribute("x", -n + 2 * FRAME_MARGIN_SIDE)), this.frameText_.getAttribute("y") || (n = Math.abs(this.frameText_.getBoundingClientRect().top - this.svgPathDark_.getBoundingClientRect().top), this.frameText_.setAttribute("y", -(FRAME_MARGIN_TOP + (FRAME_HEADER_HEIGHT - n) / 2)))
}, Blockly.BlockSvgFramed.prototype.dispose = function() {
    Blockly.BlockSvgFramed.superClass_.dispose.call(this), this.frameText_ = this.frameHeader_ = this.frameBase_ = this.frameClipRect_ = null
}, goog.dom.classlist = {}, goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST = !1, goog.dom.classlist.get = function(e) {
    return goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || e.classList ? e.classList : (e = e.className, goog.isString(e) && e.match(/\S+/g) || [])
}, goog.dom.classlist.set = function(e, t) {
    e.className = t
}, goog.dom.classlist.contains = function(e, t) {
    return goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || e.classList ? e.classList.contains(t) : goog.array.contains(goog.dom.classlist.get(e), t)
}, goog.dom.classlist.add = function(e, t) {
    goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || e.classList ? e.classList.add(t) : goog.dom.classlist.contains(e, t) || (e.className += 0 < e.className.length ? " " + t : t)
}, goog.dom.classlist.addAll = function(e, t) {
    if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || e.classList) goog.array.forEach(t, function(t) {
        goog.dom.classlist.add(e, t)
    });
    else {
        var o = {};
        goog.array.forEach(goog.dom.classlist.get(e), function(e) {
            o[e] = !0
        }), goog.array.forEach(t, function(e) {
            o[e] = !0
        }), e.className = "";
        for (var n in o) e.className += 0 < e.className.length ? " " + n : n
    }
}, goog.dom.classlist.remove = function(e, t) {
    goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || e.classList ? e.classList.remove(t) : goog.dom.classlist.contains(e, t) && (e.className = goog.array.filter(goog.dom.classlist.get(e), function(e) {
        return e != t
    }).join(" "))
}, goog.dom.classlist.removeAll = function(e, t) {
    goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || e.classList ? goog.array.forEach(t, function(t) {
        goog.dom.classlist.remove(e, t)
    }) : e.className = goog.array.filter(goog.dom.classlist.get(e), function(e) {
        return !goog.array.contains(t, e)
    }).join(" ")
}, goog.dom.classlist.enable = function(e, t, o) {
    o ? goog.dom.classlist.add(e, t) : goog.dom.classlist.remove(e, t)
}, goog.dom.classlist.swap = function(e, t, o) {
    return goog.dom.classlist.contains(e, t) ? (goog.dom.classlist.remove(e, t), goog.dom.classlist.add(e, o), !0) : !1
}, goog.dom.classlist.toggle = function(e, t) {
    var o = !goog.dom.classlist.contains(e, t);
    return goog.dom.classlist.enable(e, t, o), o
}, goog.dom.classlist.addRemove = function(e, t, o) {
    goog.dom.classlist.remove(e, t), goog.dom.classlist.add(e, o)
}, goog.ui.registry = {}, goog.ui.registry.getDefaultRenderer = function(e) {
    for (var t; e && (t = goog.getUid(e), !(t = goog.ui.registry.defaultRenderers_[t]));) e = e.superClass_ ? e.superClass_.constructor : null;
    return t ? goog.isFunction(t.getInstance) ? t.getInstance() : new t : null
}, goog.ui.registry.setDefaultRenderer = function(e, t) {
    if (!goog.isFunction(e)) throw Error("Invalid component class " + e);
    if (!goog.isFunction(t)) throw Error("Invalid renderer class " + t);
    var o = goog.getUid(e);
    goog.ui.registry.defaultRenderers_[o] = t
}, goog.ui.registry.getDecoratorByClassName = function(e) {
    return e in goog.ui.registry.decoratorFunctions_ ? goog.ui.registry.decoratorFunctions_[e]() : null
}, goog.ui.registry.setDecoratorByClassName = function(e, t) {
    if (!e) throw Error("Invalid class name " + e);
    if (!goog.isFunction(t)) throw Error("Invalid decorator function " + t);
    goog.ui.registry.decoratorFunctions_[e] = t
}, goog.ui.registry.getDecorator = function(e) {
    for (var t = goog.dom.classlist.get(e), o = 0, n = t.length; n > o; o++)
        if (e = goog.ui.registry.getDecoratorByClassName(t[o])) return e;
    return null
}, goog.ui.registry.reset = function() {
    goog.ui.registry.defaultRenderers_ = {}, goog.ui.registry.decoratorFunctions_ = {}
}, goog.ui.registry.defaultRenderers_ = {}, goog.ui.registry.decoratorFunctions_ = {}, goog.ui.ContainerRenderer = function(e) {
    this.ariaRole_ = e
}, goog.addSingletonGetter(goog.ui.ContainerRenderer), goog.ui.ContainerRenderer.getCustomRenderer = function(e, t) {
    var o = new e;
    return o.getCssClass = function() {
        return t
    }, o
}, goog.ui.ContainerRenderer.CSS_CLASS = "goog-container", goog.ui.ContainerRenderer.prototype.getAriaRole = function() {
    return this.ariaRole_
}, goog.ui.ContainerRenderer.prototype.enableTabIndex = function(e, t) {
    e && (e.tabIndex = t ? 0 : -1)
}, goog.ui.ContainerRenderer.prototype.createDom = function(e) {
    return e.getDomHelper().createDom("div", this.getClassNames(e).join(" "))
}, goog.ui.ContainerRenderer.prototype.getContentElement = function(e) {
    return e
}, goog.ui.ContainerRenderer.prototype.canDecorate = function(e) {
    return "DIV" == e.tagName
}, goog.ui.ContainerRenderer.prototype.decorate = function(e, t) {
    t.id && e.setId(t.id);
    var o = this.getCssClass(),
        n = !1,
        i = goog.dom.classlist.get(t);
    return i && goog.array.forEach(i, function(t) {
        t == o ? n = !0 : t && this.setStateFromClassName(e, t, o)
    }, this), n || goog.dom.classlist.add(t, o), this.decorateChildren(e, this.getContentElement(t)), t
}, goog.ui.ContainerRenderer.prototype.setStateFromClassName = function(e, t, o) {
    t == o + "-disabled" ? e.setEnabled(!1) : t == o + "-horizontal" ? e.setOrientation(goog.ui.Container.Orientation.HORIZONTAL) : t == o + "-vertical" && e.setOrientation(goog.ui.Container.Orientation.VERTICAL)
}, goog.ui.ContainerRenderer.prototype.decorateChildren = function(e, t, o) {
    if (t) {
        o = o || t.firstChild;
        for (var n; o && o.parentNode == t;) {
            if (n = o.nextSibling, o.nodeType == goog.dom.NodeType.ELEMENT) {
                var i = this.getDecoratorForChild(o);
                i && (i.setElementInternal(o), e.isEnabled() || i.setEnabled(!1), e.addChild(i), i.decorate(o))
            } else o.nodeValue && "" != goog.string.trim(o.nodeValue) || t.removeChild(o);
            o = n
        }
    }
}, goog.ui.ContainerRenderer.prototype.getDecoratorForChild = function(e) {
    return goog.ui.registry.getDecorator(e)
}, goog.ui.ContainerRenderer.prototype.initializeDom = function(e) {
    e = e.getElement(), goog.asserts.assert(e, "The container DOM element cannot be null."), goog.style.setUnselectable(e, !0, goog.userAgent.GECKO), goog.userAgent.IE && (e.hideFocus = !0);
    var t = this.getAriaRole();
    t && goog.a11y.aria.setRole(e, t)
}, goog.ui.ContainerRenderer.prototype.getKeyEventTarget = function(e) {
    return e.getElement()
}, goog.ui.ContainerRenderer.prototype.getCssClass = function() {
    return goog.ui.ContainerRenderer.CSS_CLASS
}, goog.ui.ContainerRenderer.prototype.getClassNames = function(e) {
    var t = this.getCssClass(),
        o = e.getOrientation() == goog.ui.Container.Orientation.HORIZONTAL,
        o = [t, o ? t + "-horizontal" : t + "-vertical"];
    return e.isEnabled() || o.push(t + "-disabled"), o
}, goog.ui.ContainerRenderer.prototype.getDefaultOrientation = function() {
    return goog.ui.Container.Orientation.VERTICAL
}, goog.ui.ControlRenderer = function() {}, goog.addSingletonGetter(goog.ui.ControlRenderer), goog.ui.ControlRenderer.getCustomRenderer = function(e, t) {
    var o = new e;
    return o.getCssClass = function() {
        return t
    }, o
}, goog.ui.ControlRenderer.CSS_CLASS = "goog-control", goog.ui.ControlRenderer.IE6_CLASS_COMBINATIONS = [], goog.ui.ControlRenderer.prototype.getAriaRole = function() {}, goog.ui.ControlRenderer.prototype.createDom = function(e) {
    var t = e.getDomHelper().createDom("div", this.getClassNames(e).join(" "), e.getContent());
    return this.setAriaStates(e, t), t
}, goog.ui.ControlRenderer.prototype.getContentElement = function(e) {
    return e
}, goog.ui.ControlRenderer.prototype.enableClassName = function(e, t, o) {
    if (e = e.getElement ? e.getElement() : e)
        if (goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("7")) {
            var n = this.getAppliedCombinedClassNames_(goog.dom.classes.get(e), t);
            n.push(t), goog.partial(o ? goog.dom.classes.add : goog.dom.classes.remove, e).apply(null, n)
        } else goog.dom.classes.enable(e, t, o)
}, goog.ui.ControlRenderer.prototype.enableExtraClassName = function(e, t, o) {
    this.enableClassName(e, t, o)
}, goog.ui.ControlRenderer.prototype.canDecorate = function() {
    return !0
}, goog.ui.ControlRenderer.prototype.decorate = function(e, t) {
    t.id && e.setId(t.id);
    var o = this.getContentElement(t);
    e.setContentInternal(o && o.firstChild ? o.firstChild.nextSibling ? goog.array.clone(o.childNodes) : o.firstChild : null);
    var n = 0,
        i = this.getCssClass(),
        r = this.getStructuralCssClass(),
        l = !1,
        s = !1,
        o = !1,
        a = goog.dom.classes.get(t);
    goog.array.forEach(a, function(e) {
        l || e != i ? s || e != r ? n |= this.getStateFromClass(e) : s = !0 : (l = !0, r == i && (s = !0))
    }, this), e.setStateInternal(n), l || (a.push(i), r == i && (s = !0)), s || a.push(r);
    var g = e.getExtraClassNames();
    if (g && a.push.apply(a, g), goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("7")) {
        var c = this.getAppliedCombinedClassNames_(a);
        0 < c.length && (a.push.apply(a, c), o = !0)
    }
    return l && s && !g && !o || goog.dom.classes.set(t, a.join(" ")), this.setAriaStates(e, t), t
}, goog.ui.ControlRenderer.prototype.initializeDom = function(e) {
    e.isRightToLeft() && this.setRightToLeft(e.getElement(), !0), e.isEnabled() && this.setFocusable(e, e.isVisible())
}, goog.ui.ControlRenderer.prototype.setAriaRole = function(e, t) {
    var o = t || this.getAriaRole();
    o && (goog.asserts.assert(e, "The element passed as a first parameter cannot be null."), goog.a11y.aria.setRole(e, o))
}, goog.ui.ControlRenderer.prototype.setAriaStates = function(e, t) {
    goog.asserts.assert(e), goog.asserts.assert(t), e.isVisible() || goog.a11y.aria.setState(t, goog.a11y.aria.State.HIDDEN, !e.isVisible()), e.isEnabled() || this.updateAriaState(t, goog.ui.Component.State.DISABLED, !e.isEnabled()), e.isSupportedState(goog.ui.Component.State.SELECTED) && this.updateAriaState(t, goog.ui.Component.State.SELECTED, e.isSelected()), e.isSupportedState(goog.ui.Component.State.CHECKED) && this.updateAriaState(t, goog.ui.Component.State.CHECKED, e.isChecked()), e.isSupportedState(goog.ui.Component.State.OPENED) && this.updateAriaState(t, goog.ui.Component.State.OPENED, e.isOpen())
}, goog.ui.ControlRenderer.prototype.setAllowTextSelection = function(e, t) {
    goog.style.setUnselectable(e, !t, !goog.userAgent.IE && !goog.userAgent.OPERA)
}, goog.ui.ControlRenderer.prototype.setRightToLeft = function(e, t) {
    this.enableClassName(e, this.getStructuralCssClass() + "-rtl", t)
}, goog.ui.ControlRenderer.prototype.isFocusable = function(e) {
    var t;
    return e.isSupportedState(goog.ui.Component.State.FOCUSED) && (t = e.getKeyEventTarget()) ? goog.dom.isFocusableTabIndex(t) : !1
}, goog.ui.ControlRenderer.prototype.setFocusable = function(e, t) {
    var o;
    if (e.isSupportedState(goog.ui.Component.State.FOCUSED) && (o = e.getKeyEventTarget())) {
        if (!t && e.isFocused()) {
            try {
                o.blur()
            } catch (n) {}
            e.isFocused() && e.handleBlur(null)
        }
        goog.dom.isFocusableTabIndex(o) != t && goog.dom.setFocusableTabIndex(o, t)
    }
}, goog.ui.ControlRenderer.prototype.setVisible = function(e, t) {
    goog.style.setElementShown(e, t), e && goog.a11y.aria.setState(e, goog.a11y.aria.State.HIDDEN, !t)
}, goog.ui.ControlRenderer.prototype.setState = function(e, t, o) {
    var n = e.getElement();
    if (n) {
        var i = this.getClassForState(t);
        i && this.enableClassName(e, i, o), this.updateAriaState(n, t, o)
    }
}, goog.ui.ControlRenderer.prototype.updateAriaState = function(e, t, o) {
    goog.ui.ControlRenderer.ARIA_STATE_MAP_ || (goog.ui.ControlRenderer.ARIA_STATE_MAP_ = goog.object.create(goog.ui.Component.State.DISABLED, goog.a11y.aria.State.DISABLED, goog.ui.Component.State.SELECTED, goog.a11y.aria.State.SELECTED, goog.ui.Component.State.CHECKED, goog.a11y.aria.State.CHECKED, goog.ui.Component.State.OPENED, goog.a11y.aria.State.EXPANDED)), (t = goog.ui.ControlRenderer.ARIA_STATE_MAP_[t]) && (goog.asserts.assert(e, "The element passed as a first parameter cannot be null."), goog.a11y.aria.setState(e, t, o))
}, goog.ui.ControlRenderer.prototype.setContent = function(e, t) {
    var o = this.getContentElement(e);
    if (o && (goog.dom.removeChildren(o), t))
        if (goog.isString(t)) goog.dom.setTextContent(o, t);
        else {
            var n = function(e) {
                if (e) {
                    var t = goog.dom.getOwnerDocument(o);
                    o.appendChild(goog.isString(e) ? t.createTextNode(e) : e)
                }
            };
            goog.isArray(t) ? goog.array.forEach(t, n) : !goog.isArrayLike(t) || "nodeType" in t ? n(t) : goog.array.forEach(goog.array.clone(t), n)
        }
}, goog.ui.ControlRenderer.prototype.getKeyEventTarget = function(e) {
    return e.getElement()
}, goog.ui.ControlRenderer.prototype.getCssClass = function() {
    return goog.ui.ControlRenderer.CSS_CLASS
}, goog.ui.ControlRenderer.prototype.getIe6ClassCombinations = function() {
    return []
}, goog.ui.ControlRenderer.prototype.getStructuralCssClass = function() {
    return this.getCssClass()
}, goog.ui.ControlRenderer.prototype.getClassNames = function(e) {
    var t = this.getCssClass(),
        o = [t],
        n = this.getStructuralCssClass();
    return n != t && o.push(n), t = this.getClassNamesForState(e.getState()), o.push.apply(o, t), (e = e.getExtraClassNames()) && o.push.apply(o, e), goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("7") && o.push.apply(o, this.getAppliedCombinedClassNames_(o)), o
}, goog.ui.ControlRenderer.prototype.getAppliedCombinedClassNames_ = function(e, t) {
    var o = [];
    return t && (e = e.concat([t])), goog.array.forEach(this.getIe6ClassCombinations(), function(n) {
        !goog.array.every(n, goog.partial(goog.array.contains, e)) || t && !goog.array.contains(n, t) || o.push(n.join("_"))
    }), o
}, goog.ui.ControlRenderer.prototype.getClassNamesForState = function(e) {
    for (var t = []; e;) {
        var o = e & -e;
        t.push(this.getClassForState(o)), e &= ~o
    }
    return t
}, goog.ui.ControlRenderer.prototype.getClassForState = function(e) {
    return this.classByState_ || this.createClassByStateMap_(), this.classByState_[e]
}, goog.ui.ControlRenderer.prototype.getStateFromClass = function(e) {
    return this.stateByClass_ || this.createStateByClassMap_(), e = parseInt(this.stateByClass_[e], 10), isNaN(e) ? 0 : e
}, goog.ui.ControlRenderer.prototype.createClassByStateMap_ = function() {
    var e = this.getStructuralCssClass();
    this.classByState_ = goog.object.create(goog.ui.Component.State.DISABLED, e + "-disabled", goog.ui.Component.State.HOVER, e + "-hover", goog.ui.Component.State.ACTIVE, e + "-active", goog.ui.Component.State.SELECTED, e + "-selected", goog.ui.Component.State.CHECKED, e + "-checked", goog.ui.Component.State.FOCUSED, e + "-focused", goog.ui.Component.State.OPENED, e + "-open")
}, goog.ui.ControlRenderer.prototype.createStateByClassMap_ = function() {
    this.classByState_ || this.createClassByStateMap_(), this.stateByClass_ = goog.object.transpose(this.classByState_)
}, goog.ui.decorate = function(e) {
    var t = goog.ui.registry.getDecorator(e);
    return t && t.decorate(e), t
}, goog.events.KeyHandler = function(e, t) {
    goog.events.EventTarget.call(this), e && this.attach(e, t)
}, goog.inherits(goog.events.KeyHandler, goog.events.EventTarget), goog.events.KeyHandler.prototype.element_ = null, goog.events.KeyHandler.prototype.keyPressKey_ = null, goog.events.KeyHandler.prototype.keyDownKey_ = null, goog.events.KeyHandler.prototype.keyUpKey_ = null, goog.events.KeyHandler.prototype.lastKey_ = -1, goog.events.KeyHandler.prototype.keyCode_ = -1, goog.events.KeyHandler.prototype.altKey_ = !1, goog.events.KeyHandler.EventType = {
    KEY: "key"
}, goog.events.KeyHandler.safariKey_ = {
    3: goog.events.KeyCodes.ENTER,
    12: goog.events.KeyCodes.NUMLOCK,
    63232: goog.events.KeyCodes.UP,
    63233: goog.events.KeyCodes.DOWN,
    63234: goog.events.KeyCodes.LEFT,
    63235: goog.events.KeyCodes.RIGHT,
    63236: goog.events.KeyCodes.F1,
    63237: goog.events.KeyCodes.F2,
    63238: goog.events.KeyCodes.F3,
    63239: goog.events.KeyCodes.F4,
    63240: goog.events.KeyCodes.F5,
    63241: goog.events.KeyCodes.F6,
    63242: goog.events.KeyCodes.F7,
    63243: goog.events.KeyCodes.F8,
    63244: goog.events.KeyCodes.F9,
    63245: goog.events.KeyCodes.F10,
    63246: goog.events.KeyCodes.F11,
    63247: goog.events.KeyCodes.F12,
    63248: goog.events.KeyCodes.PRINT_SCREEN,
    63272: goog.events.KeyCodes.DELETE,
    63273: goog.events.KeyCodes.HOME,
    63275: goog.events.KeyCodes.END,
    63276: goog.events.KeyCodes.PAGE_UP,
    63277: goog.events.KeyCodes.PAGE_DOWN,
    63289: goog.events.KeyCodes.NUMLOCK,
    63302: goog.events.KeyCodes.INSERT
}, goog.events.KeyHandler.keyIdentifier_ = {
    Up: goog.events.KeyCodes.UP,
    Down: goog.events.KeyCodes.DOWN,
    Left: goog.events.KeyCodes.LEFT,
    Right: goog.events.KeyCodes.RIGHT,
    Enter: goog.events.KeyCodes.ENTER,
    F1: goog.events.KeyCodes.F1,
    F2: goog.events.KeyCodes.F2,
    F3: goog.events.KeyCodes.F3,
    F4: goog.events.KeyCodes.F4,
    F5: goog.events.KeyCodes.F5,
    F6: goog.events.KeyCodes.F6,
    F7: goog.events.KeyCodes.F7,
    F8: goog.events.KeyCodes.F8,
    F9: goog.events.KeyCodes.F9,
    F10: goog.events.KeyCodes.F10,
    F11: goog.events.KeyCodes.F11,
    F12: goog.events.KeyCodes.F12,
    "U+007F": goog.events.KeyCodes.DELETE,
    Home: goog.events.KeyCodes.HOME,
    End: goog.events.KeyCodes.END,
    PageUp: goog.events.KeyCodes.PAGE_UP,
    PageDown: goog.events.KeyCodes.PAGE_DOWN,
    Insert: goog.events.KeyCodes.INSERT
}, goog.events.KeyHandler.USES_KEYDOWN_ = goog.userAgent.IE || goog.userAgent.WEBKIT && goog.userAgent.isVersionOrHigher("525"), goog.events.KeyHandler.SAVE_ALT_FOR_KEYPRESS_ = goog.userAgent.MAC && goog.userAgent.GECKO, goog.events.KeyHandler.prototype.handleKeyDown_ = function(e) {
    goog.userAgent.WEBKIT && (this.lastKey_ == goog.events.KeyCodes.CTRL && !e.ctrlKey || this.lastKey_ == goog.events.KeyCodes.ALT && !e.altKey || goog.userAgent.MAC && this.lastKey_ == goog.events.KeyCodes.META && !e.metaKey) && (this.keyCode_ = this.lastKey_ = -1), -1 == this.lastKey_ && (e.ctrlKey && e.keyCode != goog.events.KeyCodes.CTRL ? this.lastKey_ = goog.events.KeyCodes.CTRL : e.altKey && e.keyCode != goog.events.KeyCodes.ALT ? this.lastKey_ = goog.events.KeyCodes.ALT : e.metaKey && e.keyCode != goog.events.KeyCodes.META && (this.lastKey_ = goog.events.KeyCodes.META)), goog.events.KeyHandler.USES_KEYDOWN_ && !goog.events.KeyCodes.firesKeyPressEvent(e.keyCode, this.lastKey_, e.shiftKey, e.ctrlKey, e.altKey) ? this.handleEvent(e) : (this.keyCode_ = goog.events.KeyCodes.normalizeKeyCode(e.keyCode), goog.events.KeyHandler.SAVE_ALT_FOR_KEYPRESS_ && (this.altKey_ = e.altKey))
}, goog.events.KeyHandler.prototype.resetState = function() {
    this.keyCode_ = this.lastKey_ = -1
}, goog.events.KeyHandler.prototype.handleKeyup_ = function(e) {
    this.resetState(), this.altKey_ = e.altKey
}, goog.events.KeyHandler.prototype.handleEvent = function(e) {
    var t, o, n = e.getBrowserEvent(),
        i = n.altKey;
    goog.userAgent.IE && e.type == goog.events.EventType.KEYPRESS ? (t = this.keyCode_, o = t != goog.events.KeyCodes.ENTER && t != goog.events.KeyCodes.ESC ? n.keyCode : 0) : goog.userAgent.WEBKIT && e.type == goog.events.EventType.KEYPRESS ? (t = this.keyCode_, o = 0 <= n.charCode && 63232 > n.charCode && goog.events.KeyCodes.isCharacterKey(t) ? n.charCode : 0) : goog.userAgent.OPERA ? (t = this.keyCode_, o = goog.events.KeyCodes.isCharacterKey(t) ? n.keyCode : 0) : (t = n.keyCode || this.keyCode_, o = n.charCode || 0, goog.events.KeyHandler.SAVE_ALT_FOR_KEYPRESS_ && (i = this.altKey_), goog.userAgent.MAC && o == goog.events.KeyCodes.QUESTION_MARK && t == goog.events.KeyCodes.WIN_KEY && (t = goog.events.KeyCodes.SLASH));
    var r = t = goog.events.KeyCodes.normalizeKeyCode(t),
        l = n.keyIdentifier;
    t ? t >= 63232 && t in goog.events.KeyHandler.safariKey_ ? r = goog.events.KeyHandler.safariKey_[t] : 25 == t && e.shiftKey && (r = 9) : l && l in goog.events.KeyHandler.keyIdentifier_ && (r = goog.events.KeyHandler.keyIdentifier_[l]), e = r == this.lastKey_, this.lastKey_ = r, n = new goog.events.KeyEvent(r, o, e, n), n.altKey = i, this.dispatchEvent(n)
}, goog.events.KeyHandler.prototype.getElement = function() {
    return this.element_
}, goog.events.KeyHandler.prototype.attach = function(e, t) {
    this.keyUpKey_ && this.detach(), this.element_ = e, this.keyPressKey_ = goog.events.listen(this.element_, goog.events.EventType.KEYPRESS, this, t), this.keyDownKey_ = goog.events.listen(this.element_, goog.events.EventType.KEYDOWN, this.handleKeyDown_, t, this), this.keyUpKey_ = goog.events.listen(this.element_, goog.events.EventType.KEYUP, this.handleKeyup_, t, this)
}, goog.events.KeyHandler.prototype.detach = function() {
    this.keyPressKey_ && (goog.events.unlistenByKey(this.keyPressKey_), goog.events.unlistenByKey(this.keyDownKey_), goog.events.unlistenByKey(this.keyUpKey_), this.keyUpKey_ = this.keyDownKey_ = this.keyPressKey_ = null), this.element_ = null, this.keyCode_ = this.lastKey_ = -1
}, goog.events.KeyHandler.prototype.disposeInternal = function() {
    goog.events.KeyHandler.superClass_.disposeInternal.call(this), this.detach()
}, goog.events.KeyEvent = function(e, t, o, n) {
    goog.events.BrowserEvent.call(this, n), this.type = goog.events.KeyHandler.EventType.KEY, this.keyCode = e, this.charCode = t, this.repeat = o
}, goog.inherits(goog.events.KeyEvent, goog.events.BrowserEvent), goog.ui.Control = function(e, t, o) {
    goog.ui.Component.call(this, o), this.renderer_ = t || goog.ui.registry.getDefaultRenderer(this.constructor), this.setContentInternal(goog.isDef(e) ? e : null)
}, goog.inherits(goog.ui.Control, goog.ui.Component), goog.ui.Control.registerDecorator = goog.ui.registry.setDecoratorByClassName, goog.ui.Control.getDecorator = goog.ui.registry.getDecorator, goog.ui.Control.decorate = goog.ui.decorate, goog.ui.Control.prototype.content_ = null, goog.ui.Control.prototype.state_ = 0, goog.ui.Control.prototype.supportedStates_ = goog.ui.Component.State.DISABLED | goog.ui.Component.State.HOVER | goog.ui.Component.State.ACTIVE | goog.ui.Component.State.FOCUSED, goog.ui.Control.prototype.autoStates_ = goog.ui.Component.State.ALL, goog.ui.Control.prototype.statesWithTransitionEvents_ = 0, goog.ui.Control.prototype.visible_ = !0, goog.ui.Control.prototype.extraClassNames_ = null, goog.ui.Control.prototype.handleMouseEvents_ = !0, goog.ui.Control.prototype.allowTextSelection_ = !1, goog.ui.Control.prototype.preferredAriaRole_ = null, goog.ui.Control.prototype.isHandleMouseEvents = function() {
    return this.handleMouseEvents_
}, goog.ui.Control.prototype.setHandleMouseEvents = function(e) {
    this.isInDocument() && e != this.handleMouseEvents_ && this.enableMouseEventHandling_(e), this.handleMouseEvents_ = e
}, goog.ui.Control.prototype.getKeyEventTarget = function() {
    return this.renderer_.getKeyEventTarget(this)
}, goog.ui.Control.prototype.getKeyHandler = function() {
    return this.keyHandler_ || (this.keyHandler_ = new goog.events.KeyHandler)
}, goog.ui.Control.prototype.getRenderer = function() {
    return this.renderer_
}, goog.ui.Control.prototype.setRenderer = function(e) {
    if (this.isInDocument()) throw Error(goog.ui.Component.Error.ALREADY_RENDERED);
    this.getElement() && this.setElementInternal(null), this.renderer_ = e
}, goog.ui.Control.prototype.getExtraClassNames = function() {
    return this.extraClassNames_
}, goog.ui.Control.prototype.addClassName = function(e) {
    e && (this.extraClassNames_ ? goog.array.contains(this.extraClassNames_, e) || this.extraClassNames_.push(e) : this.extraClassNames_ = [e], this.renderer_.enableExtraClassName(this, e, !0))
}, goog.ui.Control.prototype.removeClassName = function(e) {
    e && this.extraClassNames_ && goog.array.remove(this.extraClassNames_, e) && (0 == this.extraClassNames_.length && (this.extraClassNames_ = null), this.renderer_.enableExtraClassName(this, e, !1))
}, goog.ui.Control.prototype.enableClassName = function(e, t) {
    t ? this.addClassName(e) : this.removeClassName(e)
}, goog.ui.Control.prototype.createDom = function() {
    var e = this.renderer_.createDom(this);
    this.setElementInternal(e), this.renderer_.setAriaRole(e, this.getPreferredAriaRole()), this.isAllowTextSelection() || this.renderer_.setAllowTextSelection(e, !1), this.isVisible() || this.renderer_.setVisible(e, !1)
}, goog.ui.Control.prototype.getPreferredAriaRole = function() {
    return this.preferredAriaRole_
}, goog.ui.Control.prototype.setPreferredAriaRole = function(e) {
    this.preferredAriaRole_ = e
}, goog.ui.Control.prototype.getContentElement = function() {
    return this.renderer_.getContentElement(this.getElement())
}, goog.ui.Control.prototype.canDecorate = function(e) {
    return this.renderer_.canDecorate(e)
}, goog.ui.Control.prototype.decorateInternal = function(e) {
    e = this.renderer_.decorate(this, e), this.setElementInternal(e), this.renderer_.setAriaRole(e, this.getPreferredAriaRole()), this.isAllowTextSelection() || this.renderer_.setAllowTextSelection(e, !1), this.visible_ = "none" != e.style.display
}, goog.ui.Control.prototype.enterDocument = function() {
    if (goog.ui.Control.superClass_.enterDocument.call(this), this.renderer_.initializeDom(this), this.supportedStates_ & ~goog.ui.Component.State.DISABLED && (this.isHandleMouseEvents() && this.enableMouseEventHandling_(!0), this.isSupportedState(goog.ui.Component.State.FOCUSED))) {
        var e = this.getKeyEventTarget();
        if (e) {
            var t = this.getKeyHandler();
            t.attach(e), this.getHandler().listen(t, goog.events.KeyHandler.EventType.KEY, this.handleKeyEvent).listen(e, goog.events.EventType.FOCUS, this.handleFocus).listen(e, goog.events.EventType.BLUR, this.handleBlur)
        }
    }
}, goog.ui.Control.prototype.enableMouseEventHandling_ = function(e) {
    var t = this.getHandler(),
        o = this.getElement();
    e ? (t.listen(o, goog.events.EventType.MOUSEOVER, this.handleMouseOver).listen(o, goog.events.EventType.MOUSEDOWN, this.handleMouseDown).listen(o, goog.events.EventType.MOUSEUP, this.handleMouseUp).listen(o, goog.events.EventType.MOUSEOUT, this.handleMouseOut), this.handleContextMenu != goog.nullFunction && t.listen(o, goog.events.EventType.CONTEXTMENU, this.handleContextMenu), goog.userAgent.IE && t.listen(o, goog.events.EventType.DBLCLICK, this.handleDblClick)) : (t.unlisten(o, goog.events.EventType.MOUSEOVER, this.handleMouseOver).unlisten(o, goog.events.EventType.MOUSEDOWN, this.handleMouseDown).unlisten(o, goog.events.EventType.MOUSEUP, this.handleMouseUp).unlisten(o, goog.events.EventType.MOUSEOUT, this.handleMouseOut), this.handleContextMenu != goog.nullFunction && t.unlisten(o, goog.events.EventType.CONTEXTMENU, this.handleContextMenu), goog.userAgent.IE && t.unlisten(o, goog.events.EventType.DBLCLICK, this.handleDblClick))
}, goog.ui.Control.prototype.exitDocument = function() {
    goog.ui.Control.superClass_.exitDocument.call(this), this.keyHandler_ && this.keyHandler_.detach(), this.isVisible() && this.isEnabled() && this.renderer_.setFocusable(this, !1)
}, goog.ui.Control.prototype.disposeInternal = function() {
    goog.ui.Control.superClass_.disposeInternal.call(this), this.keyHandler_ && (this.keyHandler_.dispose(), delete this.keyHandler_), delete this.renderer_, this.extraClassNames_ = this.content_ = null
}, goog.ui.Control.prototype.getContent = function() {
    return this.content_
}, goog.ui.Control.prototype.setContent = function(e) {
    this.renderer_.setContent(this.getElement(), e), this.setContentInternal(e)
}, goog.ui.Control.prototype.setContentInternal = function(e) {
    this.content_ = e
}, goog.ui.Control.prototype.getCaption = function() {
    var e = this.getContent();
    return e ? (e = goog.isString(e) ? e : goog.isArray(e) ? goog.array.map(e, goog.dom.getRawTextContent).join("") : goog.dom.getTextContent(e), goog.string.collapseBreakingSpaces(e)) : ""
}, goog.ui.Control.prototype.setCaption = function(e) {
    this.setContent(e)
}, goog.ui.Control.prototype.setRightToLeft = function(e) {
    goog.ui.Control.superClass_.setRightToLeft.call(this, e);
    var t = this.getElement();
    t && this.renderer_.setRightToLeft(t, e)
}, goog.ui.Control.prototype.isAllowTextSelection = function() {
    return this.allowTextSelection_
}, goog.ui.Control.prototype.setAllowTextSelection = function(e) {
    this.allowTextSelection_ = e;
    var t = this.getElement();
    t && this.renderer_.setAllowTextSelection(t, e)
}, goog.ui.Control.prototype.isVisible = function() {
    return this.visible_
}, goog.ui.Control.prototype.setVisible = function(e, t) {
    if (t || this.visible_ != e && this.dispatchEvent(e ? goog.ui.Component.EventType.SHOW : goog.ui.Component.EventType.HIDE)) {
        var o = this.getElement();
        return o && this.renderer_.setVisible(o, e), this.isEnabled() && this.renderer_.setFocusable(this, e), this.visible_ = e, !0
    }
    return !1
}, goog.ui.Control.prototype.isEnabled = function() {
    return !this.hasState(goog.ui.Component.State.DISABLED)
}, goog.ui.Control.prototype.isParentDisabled_ = function() {
    var e = this.getParent();
    return !!e && "function" == typeof e.isEnabled && !e.isEnabled()
}, goog.ui.Control.prototype.setEnabled = function(e) {
    !this.isParentDisabled_() && this.isTransitionAllowed(goog.ui.Component.State.DISABLED, !e) && (e || (this.setActive(!1), this.setHighlighted(!1)), this.isVisible() && this.renderer_.setFocusable(this, e), this.setState(goog.ui.Component.State.DISABLED, !e))
}, goog.ui.Control.prototype.isHighlighted = function() {
    return this.hasState(goog.ui.Component.State.HOVER)
}, goog.ui.Control.prototype.setHighlighted = function(e) {
    this.isTransitionAllowed(goog.ui.Component.State.HOVER, e) && this.setState(goog.ui.Component.State.HOVER, e)
}, goog.ui.Control.prototype.isActive = function() {
    return this.hasState(goog.ui.Component.State.ACTIVE)
}, goog.ui.Control.prototype.setActive = function(e) {
    this.isTransitionAllowed(goog.ui.Component.State.ACTIVE, e) && this.setState(goog.ui.Component.State.ACTIVE, e)
}, goog.ui.Control.prototype.isSelected = function() {
    return this.hasState(goog.ui.Component.State.SELECTED)
}, goog.ui.Control.prototype.setSelected = function(e) {
    this.isTransitionAllowed(goog.ui.Component.State.SELECTED, e) && this.setState(goog.ui.Component.State.SELECTED, e)
}, goog.ui.Control.prototype.isChecked = function() {
    return this.hasState(goog.ui.Component.State.CHECKED)
}, goog.ui.Control.prototype.setChecked = function(e) {
    this.isTransitionAllowed(goog.ui.Component.State.CHECKED, e) && this.setState(goog.ui.Component.State.CHECKED, e)
}, goog.ui.Control.prototype.isFocused = function() {
    return this.hasState(goog.ui.Component.State.FOCUSED)
}, goog.ui.Control.prototype.setFocused = function(e) {
    this.isTransitionAllowed(goog.ui.Component.State.FOCUSED, e) && this.setState(goog.ui.Component.State.FOCUSED, e)
}, goog.ui.Control.prototype.isOpen = function() {
    return this.hasState(goog.ui.Component.State.OPENED)
}, goog.ui.Control.prototype.setOpen = function(e) {
    this.isTransitionAllowed(goog.ui.Component.State.OPENED, e) && this.setState(goog.ui.Component.State.OPENED, e)
}, goog.ui.Control.prototype.getState = function() {
    return this.state_
}, goog.ui.Control.prototype.hasState = function(e) {
    return !!(this.state_ & e)
}, goog.ui.Control.prototype.setState = function(e, t) {
    this.isSupportedState(e) && t != this.hasState(e) && (this.renderer_.setState(this, e, t), this.state_ = t ? this.state_ | e : this.state_ & ~e)
}, goog.ui.Control.prototype.setStateInternal = function(e) {
    this.state_ = e
}, goog.ui.Control.prototype.isSupportedState = function(e) {
    return !!(this.supportedStates_ & e)
}, goog.ui.Control.prototype.setSupportedState = function(e, t) {
    if (this.isInDocument() && this.hasState(e) && !t) throw Error(goog.ui.Component.Error.ALREADY_RENDERED);
    !t && this.hasState(e) && this.setState(e, !1), this.supportedStates_ = t ? this.supportedStates_ | e : this.supportedStates_ & ~e
}, goog.ui.Control.prototype.isAutoState = function(e) {
    return !!(this.autoStates_ & e) && this.isSupportedState(e)
}, goog.ui.Control.prototype.setAutoStates = function(e, t) {
    this.autoStates_ = t ? this.autoStates_ | e : this.autoStates_ & ~e
}, goog.ui.Control.prototype.isDispatchTransitionEvents = function(e) {
    return !!(this.statesWithTransitionEvents_ & e) && this.isSupportedState(e)
}, goog.ui.Control.prototype.setDispatchTransitionEvents = function(e, t) {
    this.statesWithTransitionEvents_ = t ? this.statesWithTransitionEvents_ | e : this.statesWithTransitionEvents_ & ~e
}, goog.ui.Control.prototype.isTransitionAllowed = function(e, t) {
    return !(!this.isSupportedState(e) || this.hasState(e) == t || this.statesWithTransitionEvents_ & e && !this.dispatchEvent(goog.ui.Component.getStateTransitionEvent(e, t)) || this.isDisposed())
}, goog.ui.Control.prototype.handleMouseOver = function(e) {
    !goog.ui.Control.isMouseEventWithinElement_(e, this.getElement()) && this.dispatchEvent(goog.ui.Component.EventType.ENTER) && this.isEnabled() && this.isAutoState(goog.ui.Component.State.HOVER) && this.setHighlighted(!0)
}, goog.ui.Control.prototype.handleMouseOut = function(e) {
    !goog.ui.Control.isMouseEventWithinElement_(e, this.getElement()) && this.dispatchEvent(goog.ui.Component.EventType.LEAVE) && (this.isAutoState(goog.ui.Component.State.ACTIVE) && this.setActive(!1), this.isAutoState(goog.ui.Component.State.HOVER) && this.setHighlighted(!1))
}, goog.ui.Control.prototype.handleContextMenu = goog.nullFunction, goog.ui.Control.isMouseEventWithinElement_ = function(e, t) {
    return !!e.relatedTarget && goog.dom.contains(t, e.relatedTarget)
}, goog.ui.Control.prototype.handleMouseDown = function(e) {
    this.isEnabled() && (this.isAutoState(goog.ui.Component.State.HOVER) && this.setHighlighted(!0), e.isMouseActionButton() && (this.isAutoState(goog.ui.Component.State.ACTIVE) && this.setActive(!0), this.renderer_.isFocusable(this) && this.getKeyEventTarget().focus())), !this.isAllowTextSelection() && e.isMouseActionButton() && e.preventDefault()
}, goog.ui.Control.prototype.handleMouseUp = function(e) {
    this.isEnabled() && (this.isAutoState(goog.ui.Component.State.HOVER) && this.setHighlighted(!0), this.isActive() && this.performActionInternal(e) && this.isAutoState(goog.ui.Component.State.ACTIVE) && this.setActive(!1))
}, goog.ui.Control.prototype.handleDblClick = function(e) {
    this.isEnabled() && this.performActionInternal(e)
}, goog.ui.Control.prototype.performActionInternal = function(e) {
    this.isAutoState(goog.ui.Component.State.CHECKED) && this.setChecked(!this.isChecked()), this.isAutoState(goog.ui.Component.State.SELECTED) && this.setSelected(!0), this.isAutoState(goog.ui.Component.State.OPENED) && this.setOpen(!this.isOpen());
    var t = new goog.events.Event(goog.ui.Component.EventType.ACTION, this);
    return e && (t.altKey = e.altKey, t.ctrlKey = e.ctrlKey, t.metaKey = e.metaKey, t.shiftKey = e.shiftKey, t.platformModifierKey = e.platformModifierKey), this.dispatchEvent(t)
}, goog.ui.Control.prototype.handleFocus = function() {
    this.isAutoState(goog.ui.Component.State.FOCUSED) && this.setFocused(!0)
}, goog.ui.Control.prototype.handleBlur = function() {
    this.isAutoState(goog.ui.Component.State.ACTIVE) && this.setActive(!1), this.isAutoState(goog.ui.Component.State.FOCUSED) && this.setFocused(!1)
}, goog.ui.Control.prototype.handleKeyEvent = function(e) {
    return this.isVisible() && this.isEnabled() && this.handleKeyEventInternal(e) ? (e.preventDefault(), e.stopPropagation(), !0) : !1
}, goog.ui.Control.prototype.handleKeyEventInternal = function(e) {
    return e.keyCode == goog.events.KeyCodes.ENTER && this.performActionInternal(e)
}, goog.ui.registry.setDefaultRenderer(goog.ui.Control, goog.ui.ControlRenderer), goog.ui.registry.setDecoratorByClassName(goog.ui.ControlRenderer.CSS_CLASS, function() {
    return new goog.ui.Control(null)
}), goog.ui.MenuSeparatorRenderer = function() {
    goog.ui.ControlRenderer.call(this)
}, goog.inherits(goog.ui.MenuSeparatorRenderer, goog.ui.ControlRenderer), goog.addSingletonGetter(goog.ui.MenuSeparatorRenderer), goog.ui.MenuSeparatorRenderer.CSS_CLASS = "goog-menuseparator", goog.ui.MenuSeparatorRenderer.prototype.createDom = function(e) {
    return e.getDomHelper().createDom("div", this.getCssClass())
}, goog.ui.MenuSeparatorRenderer.prototype.decorate = function(e, t) {
    if (t.id && e.setId(t.id), "HR" == t.tagName) {
        var o = t;
        t = this.createDom(e), goog.dom.insertSiblingBefore(t, o), goog.dom.removeNode(o)
    } else goog.dom.classlist.add(t, this.getCssClass());
    return t
}, goog.ui.MenuSeparatorRenderer.prototype.setContent = function() {}, goog.ui.MenuSeparatorRenderer.prototype.getCssClass = function() {
    return goog.ui.MenuSeparatorRenderer.CSS_CLASS
}, goog.ui.Separator = function(e, t) {
    goog.ui.Control.call(this, null, e || goog.ui.MenuSeparatorRenderer.getInstance(), t), this.setSupportedState(goog.ui.Component.State.DISABLED, !1), this.setSupportedState(goog.ui.Component.State.HOVER, !1), this.setSupportedState(goog.ui.Component.State.ACTIVE, !1), this.setSupportedState(goog.ui.Component.State.FOCUSED, !1), this.setStateInternal(goog.ui.Component.State.DISABLED)
}, goog.inherits(goog.ui.Separator, goog.ui.Control), goog.ui.Separator.prototype.enterDocument = function() {
    goog.ui.Separator.superClass_.enterDocument.call(this);
    var e = this.getElement();
    goog.asserts.assert(e, "The DOM element for the separator cannot be null."), goog.a11y.aria.setRole(e, "separator")
}, goog.ui.registry.setDecoratorByClassName(goog.ui.MenuSeparatorRenderer.CSS_CLASS, function() {
    return new goog.ui.Separator
}), goog.ui.MenuRenderer = function(e) {
    goog.ui.ContainerRenderer.call(this, e || goog.a11y.aria.Role.MENU)
}, goog.inherits(goog.ui.MenuRenderer, goog.ui.ContainerRenderer), goog.addSingletonGetter(goog.ui.MenuRenderer), goog.ui.MenuRenderer.CSS_CLASS = "goog-menu", goog.ui.MenuRenderer.prototype.canDecorate = function(e) {
    return "UL" == e.tagName || goog.ui.MenuRenderer.superClass_.canDecorate.call(this, e)
}, goog.ui.MenuRenderer.prototype.getDecoratorForChild = function(e) {
    return "HR" == e.tagName ? new goog.ui.Separator : goog.ui.MenuRenderer.superClass_.getDecoratorForChild.call(this, e)
}, goog.ui.MenuRenderer.prototype.containsElement = function(e, t) {
    return goog.dom.contains(e.getElement(), t)
}, goog.ui.MenuRenderer.prototype.getCssClass = function() {
    return goog.ui.MenuRenderer.CSS_CLASS
}, goog.ui.MenuRenderer.prototype.initializeDom = function(e) {
    goog.ui.MenuRenderer.superClass_.initializeDom.call(this, e), e = e.getElement(), goog.asserts.assert(e, "The menu DOM element cannot be null."), goog.a11y.aria.setState(e, goog.a11y.aria.State.HASPOPUP, "true")
}, goog.ui.MenuSeparator = function(e) {
    goog.ui.Separator.call(this, goog.ui.MenuSeparatorRenderer.getInstance(), e)
}, goog.inherits(goog.ui.MenuSeparator, goog.ui.Separator), goog.ui.registry.setDecoratorByClassName(goog.ui.MenuSeparatorRenderer.CSS_CLASS, function() {
    return new goog.ui.Separator
}), goog.ui.MenuItemRenderer = function() {
    goog.ui.ControlRenderer.call(this), this.classNameCache_ = []
}, goog.inherits(goog.ui.MenuItemRenderer, goog.ui.ControlRenderer), goog.addSingletonGetter(goog.ui.MenuItemRenderer), goog.ui.MenuItemRenderer.CSS_CLASS = "goog-menuitem", goog.ui.MenuItemRenderer.CompositeCssClassIndex_ = {
    HOVER: 0,
    CHECKBOX: 1,
    CONTENT: 2
}, goog.ui.MenuItemRenderer.prototype.getCompositeCssClass_ = function(e) {
    var t = this.classNameCache_[e];
    if (!t) {
        switch (e) {
            case goog.ui.MenuItemRenderer.CompositeCssClassIndex_.HOVER:
                t = this.getStructuralCssClass() + "-highlight";
                break;
            case goog.ui.MenuItemRenderer.CompositeCssClassIndex_.CHECKBOX:
                t = this.getStructuralCssClass() + "-checkbox";
                break;
            case goog.ui.MenuItemRenderer.CompositeCssClassIndex_.CONTENT:
                t = this.getStructuralCssClass() + "-content"
        }
        this.classNameCache_[e] = t
    }
    return t
}, goog.ui.MenuItemRenderer.prototype.getAriaRole = function() {
    return goog.a11y.aria.Role.MENU_ITEM
}, goog.ui.MenuItemRenderer.prototype.createDom = function(e) {
    var t = e.getDomHelper().createDom("div", this.getClassNames(e).join(" "), this.createContent(e.getContent(), e.getDomHelper()));
    return this.setEnableCheckBoxStructure(e, t, e.isSupportedState(goog.ui.Component.State.SELECTED) || e.isSupportedState(goog.ui.Component.State.CHECKED)), this.setAriaStates(e, t), this.correctAriaRole(e, t), t
}, goog.ui.MenuItemRenderer.prototype.getContentElement = function(e) {
    return e && e.firstChild
}, goog.ui.MenuItemRenderer.prototype.decorate = function(e, t) {
    return this.hasContentStructure(t) || t.appendChild(this.createContent(t.childNodes, e.getDomHelper())), goog.dom.classlist.contains(t, "goog-option") && (e.setCheckable(!0), this.setCheckable(e, t, !0)), goog.ui.MenuItemRenderer.superClass_.decorate.call(this, e, t)
}, goog.ui.MenuItemRenderer.prototype.setContent = function(e, t) {
    var o = this.getContentElement(e),
        n = this.hasCheckBoxStructure(e) ? o.firstChild : null;
    goog.ui.MenuItemRenderer.superClass_.setContent.call(this, e, t), n && !this.hasCheckBoxStructure(e) && o.insertBefore(n, o.firstChild || null)
}, goog.ui.MenuItemRenderer.prototype.hasContentStructure = function(e) {
    e = goog.dom.getFirstElementChild(e);
    var t = this.getCompositeCssClass_(goog.ui.MenuItemRenderer.CompositeCssClassIndex_.CONTENT);
    return !!e && goog.dom.classlist.contains(e, t)
}, goog.ui.MenuItemRenderer.prototype.createContent = function(e, t) {
    var o = this.getCompositeCssClass_(goog.ui.MenuItemRenderer.CompositeCssClassIndex_.CONTENT);
    return t.createDom("div", o, e)
}, goog.ui.MenuItemRenderer.prototype.setSelectable = function(e, t, o) {
    t && (goog.a11y.aria.setRole(t, o ? goog.a11y.aria.Role.MENU_ITEM_RADIO : this.getAriaRole()), this.setEnableCheckBoxStructure(e, t, o))
}, goog.ui.MenuItemRenderer.prototype.setCheckable = function(e, t, o) {
    t && (goog.a11y.aria.setRole(t, o ? goog.a11y.aria.Role.MENU_ITEM_CHECKBOX : this.getAriaRole()), this.setEnableCheckBoxStructure(e, t, o))
}, goog.ui.MenuItemRenderer.prototype.hasCheckBoxStructure = function(e) {
    if (e = this.getContentElement(e)) {
        e = e.firstChild;
        var t = this.getCompositeCssClass_(goog.ui.MenuItemRenderer.CompositeCssClassIndex_.CHECKBOX);
        return !!e && goog.dom.isElement(e) && goog.dom.classlist.contains(e, t)
    }
    return !1
}, goog.ui.MenuItemRenderer.prototype.setEnableCheckBoxStructure = function(e, t, o) {
    o != this.hasCheckBoxStructure(t) && (goog.dom.classlist.enable(t, "goog-option", o), t = this.getContentElement(t), o ? (o = this.getCompositeCssClass_(goog.ui.MenuItemRenderer.CompositeCssClassIndex_.CHECKBOX), t.insertBefore(e.getDomHelper().createDom("div", o), t.firstChild || null)) : t.removeChild(t.firstChild))
}, goog.ui.MenuItemRenderer.prototype.getClassForState = function(e) {
    switch (e) {
        case goog.ui.Component.State.HOVER:
            return this.getCompositeCssClass_(goog.ui.MenuItemRenderer.CompositeCssClassIndex_.HOVER);
        case goog.ui.Component.State.CHECKED:
        case goog.ui.Component.State.SELECTED:
            return "goog-option-selected";
        default:
            return goog.ui.MenuItemRenderer.superClass_.getClassForState.call(this, e)
    }
}, goog.ui.MenuItemRenderer.prototype.getStateFromClass = function(e) {
    var t = this.getCompositeCssClass_(goog.ui.MenuItemRenderer.CompositeCssClassIndex_.HOVER);
    switch (e) {
        case "goog-option-selected":
            return goog.ui.Component.State.CHECKED;
        case t:
            return goog.ui.Component.State.HOVER;
        default:
            return goog.ui.MenuItemRenderer.superClass_.getStateFromClass.call(this, e)
    }
}, goog.ui.MenuItemRenderer.prototype.getCssClass = function() {
    return goog.ui.MenuItemRenderer.CSS_CLASS
}, goog.ui.MenuItemRenderer.prototype.correctAriaRole = function(e, t) {
    (e.isSupportedState(goog.ui.Component.State.SELECTED) || e.isSupportedState(goog.ui.Component.State.CHECKED)) && this.setAriaRole(t, e.isSupportedState(goog.ui.Component.State.CHECKED) ? goog.a11y.aria.Role.MENU_ITEM_CHECKBOX : goog.a11y.aria.Role.MENU_ITEM_RADIO)
}, goog.ui.MenuItem = function(e, t, o, n) {
    goog.ui.Control.call(this, e, n || goog.ui.MenuItemRenderer.getInstance(), o), this.setValue(t)
}, goog.inherits(goog.ui.MenuItem, goog.ui.Control), goog.ui.MenuItem.MNEMONIC_WRAPPER_CLASS_ = "goog-menuitem-mnemonic-separator", goog.ui.MenuItem.ACCELERATOR_CLASS_ = "goog-menuitem-accel", goog.ui.MenuItem.prototype.getValue = function() {
    var e = this.getModel();
    return null != e ? e : this.getCaption()
}, goog.ui.MenuItem.prototype.setValue = function(e) {
    this.setModel(e)
}, goog.ui.MenuItem.prototype.setSelectable = function(e) {
    this.setSupportedState(goog.ui.Component.State.SELECTED, e), this.isChecked() && !e && this.setChecked(!1);
    var t = this.getElement();
    t && this.getRenderer().setSelectable(this, t, e)
}, goog.ui.MenuItem.prototype.setCheckable = function(e) {
    this.setSupportedState(goog.ui.Component.State.CHECKED, e);
    var t = this.getElement();
    t && this.getRenderer().setCheckable(this, t, e)
}, goog.ui.MenuItem.prototype.getCaption = function() {
    var e = this.getContent();
    if (goog.isArray(e)) {
        var t = goog.ui.MenuItem.ACCELERATOR_CLASS_,
            o = goog.ui.MenuItem.MNEMONIC_WRAPPER_CLASS_,
            e = goog.array.map(e, function(e) {
                return goog.dom.isElement(e) && (goog.dom.classlist.contains(e, t) || goog.dom.classlist.contains(e, o)) ? "" : goog.dom.getRawTextContent(e)
            }).join("");
        return goog.string.collapseBreakingSpaces(e)
    }
    return goog.ui.MenuItem.superClass_.getCaption.call(this)
}, goog.ui.MenuItem.prototype.handleMouseUp = function(e) {
    var t = this.getParent();
    if (t) {
        var o = t.openingCoords;
        if (t.openingCoords = null, o && goog.isNumber(e.clientX) && (t = new goog.math.Coordinate(e.clientX, e.clientY), goog.math.Coordinate.equals(o, t))) return
    }
    goog.ui.MenuItem.base(this, "handleMouseUp", e)
}, goog.ui.MenuItem.prototype.handleKeyEventInternal = function(e) {
    return e.keyCode == this.getMnemonic() && this.performActionInternal(e) ? !0 : goog.ui.MenuItem.base(this, "handleKeyEventInternal", e)
}, goog.ui.MenuItem.prototype.setMnemonic = function(e) {
    this.mnemonicKey_ = e
}, goog.ui.MenuItem.prototype.getMnemonic = function() {
    return this.mnemonicKey_
}, goog.ui.registry.setDecoratorByClassName(goog.ui.MenuItemRenderer.CSS_CLASS, function() {
    return new goog.ui.MenuItem(null)
}), goog.ui.MenuItem.prototype.createDom = function() {
    goog.ui.MenuItem.base(this, "createDom"), this.getRenderer().correctAriaRole(this, this.getElement())
}, goog.ui.Container = function(e, t, o) {
    goog.ui.Component.call(this, o), this.renderer_ = t || goog.ui.ContainerRenderer.getInstance(), this.orientation_ = e || this.renderer_.getDefaultOrientation()
}, goog.inherits(goog.ui.Container, goog.ui.Component), goog.ui.Container.EventType = {
    AFTER_SHOW: "aftershow",
    AFTER_HIDE: "afterhide"
}, goog.ui.Container.Orientation = {
    HORIZONTAL: "horizontal",
    VERTICAL: "vertical"
}, goog.ui.Container.prototype.keyEventTarget_ = null, goog.ui.Container.prototype.keyHandler_ = null, goog.ui.Container.prototype.renderer_ = null, goog.ui.Container.prototype.orientation_ = null, goog.ui.Container.prototype.visible_ = !0, goog.ui.Container.prototype.enabled_ = !0, goog.ui.Container.prototype.focusable_ = !0, goog.ui.Container.prototype.highlightedIndex_ = -1, goog.ui.Container.prototype.openItem_ = null, goog.ui.Container.prototype.mouseButtonPressed_ = !1, goog.ui.Container.prototype.allowFocusableChildren_ = !1, goog.ui.Container.prototype.openFollowsHighlight_ = !0, goog.ui.Container.prototype.childElementIdMap_ = null, goog.ui.Container.prototype.getKeyEventTarget = function() {
    return this.keyEventTarget_ || this.renderer_.getKeyEventTarget(this)
}, goog.ui.Container.prototype.setKeyEventTarget = function(e) {
    if (!this.focusable_) throw Error("Can't set key event target for container that doesn't support keyboard focus!");
    var t = this.getKeyEventTarget(),
        o = this.isInDocument();
    this.keyEventTarget_ = e;
    var n = this.getKeyEventTarget();
    o && (this.keyEventTarget_ = t, this.enableFocusHandling_(!1), this.keyEventTarget_ = e, this.getKeyHandler().attach(n), this.enableFocusHandling_(!0))
}, goog.ui.Container.prototype.getKeyHandler = function() {
    return this.keyHandler_ || (this.keyHandler_ = new goog.events.KeyHandler(this.getKeyEventTarget()))
}, goog.ui.Container.prototype.getRenderer = function() {
    return this.renderer_
}, goog.ui.Container.prototype.setRenderer = function(e) {
    if (this.getElement()) throw Error(goog.ui.Component.Error.ALREADY_RENDERED);
    this.renderer_ = e
}, goog.ui.Container.prototype.createDom = function() {
    this.setElementInternal(this.renderer_.createDom(this))
}, goog.ui.Container.prototype.getContentElement = function() {
    return this.renderer_.getContentElement(this.getElement())
}, goog.ui.Container.prototype.canDecorate = function(e) {
    return this.renderer_.canDecorate(e)
}, goog.ui.Container.prototype.decorateInternal = function(e) {
    this.setElementInternal(this.renderer_.decorate(this, e)), "none" == e.style.display && (this.visible_ = !1)
}, goog.ui.Container.prototype.enterDocument = function() {
    goog.ui.Container.superClass_.enterDocument.call(this), this.forEachChild(function(e) {
        e.isInDocument() && this.registerChildId_(e)
    }, this);
    var e = this.getElement();
    this.renderer_.initializeDom(this), this.setVisible(this.visible_, !0), this.getHandler().listen(this, goog.ui.Component.EventType.ENTER, this.handleEnterItem).listen(this, goog.ui.Component.EventType.HIGHLIGHT, this.handleHighlightItem).listen(this, goog.ui.Component.EventType.UNHIGHLIGHT, this.handleUnHighlightItem).listen(this, goog.ui.Component.EventType.OPEN, this.handleOpenItem).listen(this, goog.ui.Component.EventType.CLOSE, this.handleCloseItem).listen(e, goog.events.EventType.MOUSEDOWN, this.handleMouseDown).listen(goog.dom.getOwnerDocument(e), goog.events.EventType.MOUSEUP, this.handleDocumentMouseUp).listen(e, [goog.events.EventType.MOUSEDOWN, goog.events.EventType.MOUSEUP, goog.events.EventType.MOUSEOVER, goog.events.EventType.MOUSEOUT, goog.events.EventType.CONTEXTMENU], this.handleChildMouseEvents), this.isFocusable() && this.enableFocusHandling_(!0)
}, goog.ui.Container.prototype.enableFocusHandling_ = function(e) {
    var t = this.getHandler(),
        o = this.getKeyEventTarget();
    e ? t.listen(o, goog.events.EventType.FOCUS, this.handleFocus).listen(o, goog.events.EventType.BLUR, this.handleBlur).listen(this.getKeyHandler(), goog.events.KeyHandler.EventType.KEY, this.handleKeyEvent) : t.unlisten(o, goog.events.EventType.FOCUS, this.handleFocus).unlisten(o, goog.events.EventType.BLUR, this.handleBlur).unlisten(this.getKeyHandler(), goog.events.KeyHandler.EventType.KEY, this.handleKeyEvent)
}, goog.ui.Container.prototype.exitDocument = function() {
    this.setHighlightedIndex(-1), this.openItem_ && this.openItem_.setOpen(!1), this.mouseButtonPressed_ = !1, goog.ui.Container.superClass_.exitDocument.call(this)
}, goog.ui.Container.prototype.disposeInternal = function() {
    goog.ui.Container.superClass_.disposeInternal.call(this), this.keyHandler_ && (this.keyHandler_.dispose(), this.keyHandler_ = null), this.renderer_ = this.openItem_ = this.childElementIdMap_ = this.keyEventTarget_ = null
}, goog.ui.Container.prototype.handleEnterItem = function() {
    return !0
}, goog.ui.Container.prototype.handleHighlightItem = function(e) {
    var t = this.indexOfChild(e.target);
    if (t > -1 && t != this.highlightedIndex_) {
        var o = this.getHighlighted();
        o && o.setHighlighted(!1), this.highlightedIndex_ = t, o = this.getHighlighted(), this.isMouseButtonPressed() && o.setActive(!0), this.openFollowsHighlight_ && this.openItem_ && o != this.openItem_ && (o.isSupportedState(goog.ui.Component.State.OPENED) ? o.setOpen(!0) : this.openItem_.setOpen(!1))
    }
    t = this.getElement(), goog.asserts.assert(t, "The DOM element for the container cannot be null."), null != e.target.getElement() && goog.a11y.aria.setState(t, goog.a11y.aria.State.ACTIVEDESCENDANT, e.target.getElement().id)
}, goog.ui.Container.prototype.handleUnHighlightItem = function(e) {
    e.target == this.getHighlighted() && (this.highlightedIndex_ = -1), e = this.getElement(), goog.asserts.assert(e, "The DOM element for the container cannot be null."), goog.a11y.aria.removeState(e, goog.a11y.aria.State.ACTIVEDESCENDANT)
}, goog.ui.Container.prototype.handleOpenItem = function(e) {
    (e = e.target) && e != this.openItem_ && e.getParent() == this && (this.openItem_ && this.openItem_.setOpen(!1), this.openItem_ = e)
}, goog.ui.Container.prototype.handleCloseItem = function(e) {
    e.target == this.openItem_ && (this.openItem_ = null)
}, goog.ui.Container.prototype.handleMouseDown = function(e) {
    this.enabled_ && this.setMouseButtonPressed(!0);
    var t = this.getKeyEventTarget();
    t && goog.dom.isFocusableTabIndex(t) ? t.focus() : e.preventDefault()
}, goog.ui.Container.prototype.handleDocumentMouseUp = function() {
    this.setMouseButtonPressed(!1)
}, goog.ui.Container.prototype.handleChildMouseEvents = function(e) {
    var t = this.getOwnerControl(e.target);
    if (t) switch (e.type) {
        case goog.events.EventType.MOUSEDOWN:
            t.handleMouseDown(e);
            break;
        case goog.events.EventType.MOUSEUP:
            t.handleMouseUp(e);
            break;
        case goog.events.EventType.MOUSEOVER:
            t.handleMouseOver(e);
            break;
        case goog.events.EventType.MOUSEOUT:
            t.handleMouseOut(e);
            break;
        case goog.events.EventType.CONTEXTMENU:
            t.handleContextMenu(e)
    }
}, goog.ui.Container.prototype.getOwnerControl = function(e) {
    if (this.childElementIdMap_)
        for (var t = this.getElement(); e && e !== t;) {
            var o = e.id;
            if (o in this.childElementIdMap_) return this.childElementIdMap_[o];
            e = e.parentNode
        }
    return null
}, goog.ui.Container.prototype.handleFocus = function() {}, goog.ui.Container.prototype.handleBlur = function() {
    this.setHighlightedIndex(-1), this.setMouseButtonPressed(!1), this.openItem_ && this.openItem_.setOpen(!1)
}, goog.ui.Container.prototype.handleKeyEvent = function(e) {
    return this.isEnabled() && this.isVisible() && (0 != this.getChildCount() || this.keyEventTarget_) && this.handleKeyEventInternal(e) ? (e.preventDefault(), e.stopPropagation(), !0) : !1
}, goog.ui.Container.prototype.handleKeyEventInternal = function(e) {
    var t = this.getHighlighted();
    if (t && "function" == typeof t.handleKeyEvent && t.handleKeyEvent(e) || this.openItem_ && this.openItem_ != t && "function" == typeof this.openItem_.handleKeyEvent && this.openItem_.handleKeyEvent(e)) return !0;
    if (e.shiftKey || e.ctrlKey || e.metaKey || e.altKey) return !1;
    switch (e.keyCode) {
        case goog.events.KeyCodes.ESC:
            if (!this.isFocusable()) return !1;
            this.getKeyEventTarget().blur();
            break;
        case goog.events.KeyCodes.HOME:
            this.highlightFirst();
            break;
        case goog.events.KeyCodes.END:
            this.highlightLast();
            break;
        case goog.events.KeyCodes.UP:
            if (this.orientation_ != goog.ui.Container.Orientation.VERTICAL) return !1;
            this.highlightPrevious();
            break;
        case goog.events.KeyCodes.LEFT:
            if (this.orientation_ != goog.ui.Container.Orientation.HORIZONTAL) return !1;
            this.isRightToLeft() ? this.highlightNext() : this.highlightPrevious();
            break;
        case goog.events.KeyCodes.DOWN:
            if (this.orientation_ != goog.ui.Container.Orientation.VERTICAL) return !1;
            this.highlightNext();
            break;
        case goog.events.KeyCodes.RIGHT:
            if (this.orientation_ != goog.ui.Container.Orientation.HORIZONTAL) return !1;
            this.isRightToLeft() ? this.highlightPrevious() : this.highlightNext();
            break;
        default:
            return !1
    }
    return !0
}, goog.ui.Container.prototype.registerChildId_ = function(e) {
    var t = e.getElement(),
        t = t.id || (t.id = e.getId());
    this.childElementIdMap_ || (this.childElementIdMap_ = {}), this.childElementIdMap_[t] = e
}, goog.ui.Container.prototype.addChild = function(e, t) {
    goog.asserts.assertInstanceof(e, goog.ui.Control, "The child of a container must be a control"), goog.ui.Container.superClass_.addChild.call(this, e, t)
}, goog.ui.Container.prototype.addChildAt = function(e, t, o) {
    e.setDispatchTransitionEvents(goog.ui.Component.State.HOVER, !0), e.setDispatchTransitionEvents(goog.ui.Component.State.OPENED, !0), !this.isFocusable() && this.isFocusableChildrenAllowed() || e.setSupportedState(goog.ui.Component.State.FOCUSED, !1), e.setHandleMouseEvents(!1), goog.ui.Container.superClass_.addChildAt.call(this, e, t, o), e.isInDocument() && this.isInDocument() && this.registerChildId_(e), t <= this.highlightedIndex_ && this.highlightedIndex_++
}, goog.ui.Container.prototype.removeChild = function(e, t) {
    if (e = goog.isString(e) ? this.getChild(e) : e) {
        var o = this.indexOfChild(e); - 1 != o && (o == this.highlightedIndex_ ? (e.setHighlighted(!1), this.highlightedIndex_ = -1) : o < this.highlightedIndex_ && this.highlightedIndex_--), (o = e.getElement()) && o.id && this.childElementIdMap_ && goog.object.remove(this.childElementIdMap_, o.id)
    }
    return e = goog.ui.Container.superClass_.removeChild.call(this, e, t), e.setHandleMouseEvents(!0), e
}, goog.ui.Container.prototype.getOrientation = function() {
    return this.orientation_
}, goog.ui.Container.prototype.setOrientation = function(e) {
    if (this.getElement()) throw Error(goog.ui.Component.Error.ALREADY_RENDERED);
    this.orientation_ = e
}, goog.ui.Container.prototype.isVisible = function() {
    return this.visible_
}, goog.ui.Container.prototype.setVisible = function(e, t) {
    if (t || this.visible_ != e && this.dispatchEvent(e ? goog.ui.Component.EventType.SHOW : goog.ui.Component.EventType.HIDE)) {
        this.visible_ = e;
        var o = this.getElement();
        return o && (goog.style.setElementShown(o, e), this.isFocusable() && this.renderer_.enableTabIndex(this.getKeyEventTarget(), this.enabled_ && this.visible_), t || this.dispatchEvent(this.visible_ ? goog.ui.Container.EventType.AFTER_SHOW : goog.ui.Container.EventType.AFTER_HIDE)), !0
    }
    return !1
}, goog.ui.Container.prototype.isEnabled = function() {
    return this.enabled_
}, goog.ui.Container.prototype.setEnabled = function(e) {
    this.enabled_ != e && this.dispatchEvent(e ? goog.ui.Component.EventType.ENABLE : goog.ui.Component.EventType.DISABLE) && (e ? (this.enabled_ = !0, this.forEachChild(function(e) {
        e.wasDisabled ? delete e.wasDisabled : e.setEnabled(!0)
    })) : (this.forEachChild(function(e) {
        e.isEnabled() ? e.setEnabled(!1) : e.wasDisabled = !0
    }), this.enabled_ = !1, this.setMouseButtonPressed(!1)), this.isFocusable() && this.renderer_.enableTabIndex(this.getKeyEventTarget(), e && this.visible_))
}, goog.ui.Container.prototype.isFocusable = function() {
    return this.focusable_
}, goog.ui.Container.prototype.setFocusable = function(e) {
    e != this.focusable_ && this.isInDocument() && this.enableFocusHandling_(e), this.focusable_ = e, this.enabled_ && this.visible_ && this.renderer_.enableTabIndex(this.getKeyEventTarget(), e)
}, goog.ui.Container.prototype.isFocusableChildrenAllowed = function() {
    return this.allowFocusableChildren_
}, goog.ui.Container.prototype.setFocusableChildrenAllowed = function(e) {
    this.allowFocusableChildren_ = e
}, goog.ui.Container.prototype.isOpenFollowsHighlight = function() {
    return this.openFollowsHighlight_
}, goog.ui.Container.prototype.setOpenFollowsHighlight = function(e) {
    this.openFollowsHighlight_ = e
}, goog.ui.Container.prototype.getHighlightedIndex = function() {
    return this.highlightedIndex_
}, goog.ui.Container.prototype.setHighlightedIndex = function(e) {
    (e = this.getChildAt(e)) ? e.setHighlighted(!0): -1 < this.highlightedIndex_ && this.getHighlighted().setHighlighted(!1)
}, goog.ui.Container.prototype.setHighlighted = function(e) {
    this.setHighlightedIndex(this.indexOfChild(e))
}, goog.ui.Container.prototype.getHighlighted = function() {
    return this.getChildAt(this.highlightedIndex_)
}, goog.ui.Container.prototype.highlightFirst = function() {
    this.highlightHelper(function(e, t) {
        return (e + 1) % t
    }, this.getChildCount() - 1)
}, goog.ui.Container.prototype.highlightLast = function() {
    this.highlightHelper(function(e, t) {
        return e--, 0 > e ? t - 1 : e
    }, 0)
}, goog.ui.Container.prototype.highlightNext = function() {
    this.highlightHelper(function(e, t) {
        return (e + 1) % t
    }, this.highlightedIndex_)
}, goog.ui.Container.prototype.highlightPrevious = function() {
    this.highlightHelper(function(e, t) {
        return e--, 0 > e ? t - 1 : e
    }, this.highlightedIndex_)
}, goog.ui.Container.prototype.highlightHelper = function(e, t) {
    for (var o = 0 > t ? this.indexOfChild(this.openItem_) : t, n = this.getChildCount(), o = e.call(this, o, n), i = 0; n >= i;) {
        var r = this.getChildAt(o);
        if (r && this.canHighlightItem(r)) return this.setHighlightedIndexFromKeyEvent(o), !0;
        i++, o = e.call(this, o, n)
    }
    return !1
}, goog.ui.Container.prototype.canHighlightItem = function(e) {
    return e.isVisible() && e.isEnabled() && e.isSupportedState(goog.ui.Component.State.HOVER)
}, goog.ui.Container.prototype.setHighlightedIndexFromKeyEvent = function(e) {
    this.setHighlightedIndex(e)
}, goog.ui.Container.prototype.getOpenItem = function() {
    return this.openItem_
}, goog.ui.Container.prototype.isMouseButtonPressed = function() {
    return this.mouseButtonPressed_
}, goog.ui.Container.prototype.setMouseButtonPressed = function(e) {
    this.mouseButtonPressed_ = e
}, goog.ui.MenuHeaderRenderer = function() {
    goog.ui.ControlRenderer.call(this)
}, goog.inherits(goog.ui.MenuHeaderRenderer, goog.ui.ControlRenderer), goog.addSingletonGetter(goog.ui.MenuHeaderRenderer), goog.ui.MenuHeaderRenderer.CSS_CLASS = "goog-menuheader", goog.ui.MenuHeaderRenderer.prototype.getCssClass = function() {
    return goog.ui.MenuHeaderRenderer.CSS_CLASS
}, goog.ui.MenuHeader = function(e, t, o) {
    goog.ui.Control.call(this, e, o || goog.ui.MenuHeaderRenderer.getInstance(), t), this.setSupportedState(goog.ui.Component.State.DISABLED, !1), this.setSupportedState(goog.ui.Component.State.HOVER, !1), this.setSupportedState(goog.ui.Component.State.ACTIVE, !1), this.setSupportedState(goog.ui.Component.State.FOCUSED, !1), this.setStateInternal(goog.ui.Component.State.DISABLED)
}, goog.inherits(goog.ui.MenuHeader, goog.ui.Control), goog.ui.registry.setDecoratorByClassName(goog.ui.MenuHeaderRenderer.CSS_CLASS, function() {
    return new goog.ui.MenuHeader(null)
}), goog.ui.Menu = function(e, t) {
    goog.ui.Container.call(this, goog.ui.Container.Orientation.VERTICAL, t || goog.ui.MenuRenderer.getInstance(), e), this.setFocusable(!1)
}, goog.inherits(goog.ui.Menu, goog.ui.Container), goog.ui.Menu.EventType = {
    BEFORE_SHOW: goog.ui.Component.EventType.BEFORE_SHOW,
    SHOW: goog.ui.Component.EventType.SHOW,
    BEFORE_HIDE: goog.ui.Component.EventType.HIDE,
    HIDE: goog.ui.Component.EventType.HIDE
}, goog.ui.Menu.CSS_CLASS = goog.ui.MenuRenderer.CSS_CLASS, goog.ui.Menu.prototype.allowAutoFocus_ = !0, goog.ui.Menu.prototype.allowHighlightDisabled_ = !1, goog.ui.Menu.prototype.getCssClass = function() {
    return this.getRenderer().getCssClass()
}, goog.ui.Menu.prototype.containsElement = function(e) {
    if (this.getRenderer().containsElement(this, e)) return !0;
    for (var t = 0, o = this.getChildCount(); o > t; t++) {
        var n = this.getChildAt(t);
        if ("function" == typeof n.containsElement && n.containsElement(e)) return !0
    }
    return !1
}, goog.ui.Menu.prototype.addItem = function(e) {
    this.addChild(e, !0)
}, goog.ui.Menu.prototype.addItemAt = function(e, t) {
    this.addChildAt(e, t, !0)
}, goog.ui.Menu.prototype.removeItem = function(e) {
    (e = this.removeChild(e, !0)) && e.dispose()
}, goog.ui.Menu.prototype.removeItemAt = function(e) {
    (e = this.removeChildAt(e, !0)) && e.dispose()
}, goog.ui.Menu.prototype.getItemAt = function(e) {
    return this.getChildAt(e)
}, goog.ui.Menu.prototype.getItemCount = function() {
    return this.getChildCount()
}, goog.ui.Menu.prototype.getItems = function() {
    var e = [];
    return this.forEachChild(function(t) {
        e.push(t)
    }), e
}, goog.ui.Menu.prototype.setPosition = function(e, t) {
    var o = this.isVisible();
    o || goog.style.setElementShown(this.getElement(), !0), goog.style.setPageOffset(this.getElement(), e, t), o || goog.style.setElementShown(this.getElement(), !1)
}, goog.ui.Menu.prototype.getPosition = function() {
    return this.isVisible() ? goog.style.getPageOffset(this.getElement()) : null
}, goog.ui.Menu.prototype.setAllowAutoFocus = function(e) {
    (this.allowAutoFocus_ = e) && this.setFocusable(!0)
}, goog.ui.Menu.prototype.getAllowAutoFocus = function() {
    return this.allowAutoFocus_
}, goog.ui.Menu.prototype.setAllowHighlightDisabled = function(e) {
    this.allowHighlightDisabled_ = e
}, goog.ui.Menu.prototype.getAllowHighlightDisabled = function() {
    return this.allowHighlightDisabled_
}, goog.ui.Menu.prototype.setVisible = function(e, t, o) {
    return (t = goog.ui.Menu.superClass_.setVisible.call(this, e, t)) && e && this.isInDocument() && this.allowAutoFocus_ && this.getKeyEventTarget().focus(), this.openingCoords = e && o && goog.isNumber(o.clientX) ? new goog.math.Coordinate(o.clientX, o.clientY) : null, t
}, goog.ui.Menu.prototype.handleEnterItem = function(e) {
    return this.allowAutoFocus_ && this.getKeyEventTarget().focus(), goog.ui.Menu.superClass_.handleEnterItem.call(this, e)
}, goog.ui.Menu.prototype.highlightNextPrefix = function(e) {
    var t = RegExp("^" + goog.string.regExpEscape(e), "i");
    return this.highlightHelper(function(e, o) {
        var n = 0 > e ? 0 : e,
            i = !1;
        do {
            ++e, e == o && (e = 0, i = !0);
            var r = this.getChildAt(e).getCaption();
            if (r && r.match(t)) return e
        } while (!i || e != n);
        return this.getHighlightedIndex()
    }, this.getHighlightedIndex())
}, goog.ui.Menu.prototype.canHighlightItem = function(e) {
    return (this.allowHighlightDisabled_ || e.isEnabled()) && e.isVisible() && e.isSupportedState(goog.ui.Component.State.HOVER)
}, goog.ui.Menu.prototype.decorateInternal = function(e) {
    this.decorateContent(e), goog.ui.Menu.superClass_.decorateInternal.call(this, e)
}, goog.ui.Menu.prototype.handleKeyEventInternal = function(e) {
    var t = goog.ui.Menu.base(this, "handleKeyEventInternal", e);
    return t || this.forEachChild(function(o) {
        !t && o.getMnemonic && o.getMnemonic() == e.keyCode && (this.isEnabled() && this.setHighlighted(o), t = o.handleKeyEvent(e))
    }, this), t
}, goog.ui.Menu.prototype.setHighlightedIndex = function(e) {
    goog.ui.Menu.base(this, "setHighlightedIndex", e), (e = this.getChildAt(e)) && goog.style.scrollIntoContainerView(e.getElement(), this.getElement())
}, goog.ui.Menu.prototype.decorateContent = function(e) {
    var t = this.getRenderer();
    e = this.getDomHelper().getElementsByTagNameAndClass("div", t.getCssClass() + "-content", e);
    for (var o = e.length, n = 0; o > n; n++) t.decorateChildren(this, e[n])
}, Blockly.ContextMenu = {}, Blockly.ContextMenu.currentBlock = null, Blockly.ContextMenu.show = function(e, t) {
    if (Blockly.WidgetDiv.show(Blockly.ContextMenu, null), t.length) {
        for (var o, n = new goog.ui.Menu, i = 0; o = t[i]; i++) {
            var r = new goog.ui.MenuItem(o.text);
            n.addItem(r), r.setEnabled(o.enabled), o.enabled && goog.events.listen(r, goog.ui.Component.EventType.ACTION, function(e) {
                return function() {
                    Blockly.doCommand(e)
                }
            }(o.callback))
        }
        goog.events.listen(n, goog.ui.Component.EventType.ACTION, Blockly.ContextMenu.hide), o = goog.dom.getViewportSize(), r = goog.style.getViewportPageOffset(document), n.render(Blockly.WidgetDiv.DIV), n.setAllowAutoFocus(!0), i = n.getElement(), Blockly.addClass_(i, "blocklyContextMenu");
        var n = goog.style.getSize(i),
            i = e.clientX + r.x,
            l = e.clientY + r.y;
        e.clientY + n.height >= o.height && (l -= n.height), Blockly.RTL ? n.width >= e.clientX && (i += n.width) : e.clientX + n.width >= o.width && (i -= n.width), Blockly.WidgetDiv.position(i, l, o, r), Blockly.ContextMenu.currentBlock = null
    } else Blockly.ContextMenu.hide()
}, Blockly.ContextMenu.hide = function() {
    Blockly.WidgetDiv.hideIfOwner(Blockly.ContextMenu), Blockly.ContextMenu.currentBlock = null
}, Blockly.ContextMenu.optionToDom_ = function(e) {
    var t = Blockly.createSvgElement("g", {
        "class": "blocklyMenuDiv"
    }, null);
    Blockly.createSvgElement("rect", {
        height: Blockly.ContextMenu.Y_HEIGHT
    }, t);
    var o = Blockly.createSvgElement("text", {
        "class": "blocklyMenuText",
        x: Blockly.ContextMenu.X_PADDING,
        y: 15
    }, t);
    return e = document.createTextNode(e), o.appendChild(e), t
}, Blockly.ContextMenu.hide = function() {
    Blockly.ContextMenu.visible && (Blockly.ContextMenu.svgGroup.style.display = "none", Blockly.ContextMenu.visible = !1)
}, Blockly.ContextMenu.callbackFactory = function(e, t) {
    return function() {
        var o = Blockly.Xml.domToBlock(e.blockSpace, t),
            n = e.getRelativeToSurfaceXY();
        n.x = Blockly.RTL ? n.x - Blockly.SNAP_RADIUS : n.x + Blockly.SNAP_RADIUS, n.y += 2 * Blockly.SNAP_RADIUS, o.moveBy(n.x, n.y), o.select()
    }
}, Blockly.Bubble = function(e, t, o, n, i, r, l) {
    var s = Blockly.Bubble.ARROW_ANGLE;
    if (Blockly.RTL && (s = -s), this.arrow_radians_ = 2 * (s / 360) * Math.PI, this.blockSpace_ = e, this.content_ = t, this.shape_ = o, e.getBubbleCanvas().appendChild(this.createDom_(t, !(!r || !l))), this.setAnchorLocation(n, i), !r || !l) {
        var a;
        try {
            a = t.getBBox()
        } catch (g) {
            a = this.blockSpace_.getCanvas().getBBox()
        }
        r = a.width + 2 * Blockly.Bubble.BORDER_WIDTH, l = a.height + 2 * Blockly.Bubble.BORDER_WIDTH
    }
    this.setBubbleSize(r, l), this.positionBubble_(), this.renderArrow_(), this.rendered_ = !0, Blockly.readOnly || (Blockly.bindEvent_(this.bubbleBack_, "mousedown", this, this.bubbleMouseDown_), this.resizeGroup_ && Blockly.bindEvent_(this.resizeGroup_, "mousedown", this, this.resizeMouseDown_))
}, Blockly.Bubble.BORDER_WIDTH = 6, Blockly.Bubble.ARROW_THICKNESS = 10, Blockly.Bubble.ARROW_ANGLE = 20, Blockly.Bubble.ARROW_BEND = 4, Blockly.Bubble.ANCHOR_RADIUS = 8, Blockly.Bubble.onMouseUpWrapper_ = null, Blockly.Bubble.onMouseMoveWrapper_ = null, Blockly.Bubble.unbindDragEvents_ = function() {
    Blockly.Bubble.onMouseUpWrapper_ && (Blockly.unbindEvent_(Blockly.Bubble.onMouseUpWrapper_), Blockly.Bubble.onMouseUpWrapper_ = null), Blockly.Bubble.onMouseMoveWrapper_ && (Blockly.unbindEvent_(Blockly.Bubble.onMouseMoveWrapper_), Blockly.Bubble.onMouseMoveWrapper_ = null)
}, Blockly.Bubble.prototype.rendered_ = !1, Blockly.Bubble.prototype.anchorX_ = 0, Blockly.Bubble.prototype.anchorY_ = 0, Blockly.Bubble.prototype.relativeLeft_ = 0, Blockly.Bubble.prototype.relativeTop_ = 0, Blockly.Bubble.prototype.width_ = 0, Blockly.Bubble.prototype.height_ = 0, Blockly.Bubble.prototype.autoLayout_ = !0, Blockly.Bubble.prototype.createDom_ = function(e, t) {
    this.bubbleGroup_ = Blockly.createSvgElement("g", {}, null);
    var o = Blockly.createSvgElement("g", {
        filter: "url(#blocklyEmboss)"
    }, this.bubbleGroup_);
    return this.bubbleArrow_ = Blockly.createSvgElement("path", {}, o), this.bubbleBack_ = Blockly.createSvgElement("rect", {
        "class": "blocklyDraggable",
        x: 0,
        y: 0,
        rx: Blockly.Bubble.BORDER_WIDTH,
        ry: Blockly.Bubble.BORDER_WIDTH
    }, o), t ? (this.resizeGroup_ = Blockly.createSvgElement("g", {
        "class": Blockly.RTL ? "blocklyResizeSW" : "blocklyResizeSE"
    }, this.bubbleGroup_), o = 2 * Blockly.Bubble.BORDER_WIDTH, Blockly.createSvgElement("polygon", {
        points: "0,x x,x x,0".replace(/x/g, o.toString())
    }, this.resizeGroup_), Blockly.createSvgElement("line", {
        "class": "blocklyResizeLine",
        x1: o / 3,
        y1: o - 1,
        x2: o - 1,
        y2: o / 3
    }, this.resizeGroup_), Blockly.createSvgElement("line", {
        "class": "blocklyResizeLine",
        x1: 2 * o / 3,
        y1: o - 1,
        x2: o - 1,
        y2: 2 * o / 3
    }, this.resizeGroup_)) : this.resizeGroup_ = null, this.bubbleGroup_.appendChild(e), this.bubbleGroup_
}, Blockly.Bubble.prototype.bubbleMouseDown_ = function(e) {
    this.promote_(), Blockly.Bubble.unbindDragEvents_(), Blockly.isRightButton(e) || Blockly.isTargetInput(e) || (this.blockSpace_.blockSpaceEditor.setCursor(Blockly.CSS.Cursor.CLOSED), this.dragDeltaX = Blockly.RTL ? this.relativeLeft_ + e.clientX : this.relativeLeft_ - e.clientX, this.dragDeltaY = this.relativeTop_ - e.clientY, Blockly.Bubble.onMouseUpWrapper_ = Blockly.bindEvent_(document, "mouseup", this, Blockly.Bubble.unbindDragEvents_), Blockly.Bubble.onMouseMoveWrapper_ = Blockly.bindEvent_(document, "mousemove", this, this.bubbleMouseMove_), this.blockSpace_.blockSpaceEditor.hideChaff(), e.stopPropagation())
}, Blockly.Bubble.prototype.bubbleMouseMove_ = function(e) {
    this.autoLayout_ = !1, this.relativeLeft_ = Blockly.RTL ? this.dragDeltaX - e.clientX : this.dragDeltaX + e.clientX, this.relativeTop_ = this.dragDeltaY + e.clientY, this.positionBubble_(), this.renderArrow_()
}, Blockly.Bubble.prototype.resizeMouseDown_ = function(e) {
    this.promote_(), Blockly.Bubble.unbindDragEvents_(), Blockly.isRightButton(e) || (this.blockSpace_.blockSpaceEditor.setCursor(Blockly.Css.Cursor.CLOSED), this.resizeDeltaWidth = Blockly.RTL ? this.width_ + e.clientX : this.width_ - e.clientX, this.resizeDeltaHeight = this.height_ - e.clientY, Blockly.Bubble.onMouseUpWrapper_ = Blockly.bindEvent_(document, "mouseup", this, Blockly.Bubble.unbindDragEvents_), Blockly.Bubble.onMouseMoveWrapper_ = Blockly.bindEvent_(document, "mousemove", this, this.resizeMouseMove_), this.blockSpace_.blockSpaceEditor.hideChaff(), e.stopPropagation())
}, Blockly.Bubble.prototype.resizeMouseMove_ = function(e) {
    this.autoLayout_ = !1;
    var t = this.resizeDeltaWidth,
        o = this.resizeDeltaHeight + e.clientY,
        t = Blockly.RTL ? t - e.clientX : t + e.clientX;
    this.setBubbleSize(t, o), Blockly.RTL && this.positionBubble_()
}, Blockly.Bubble.prototype.registerResizeEvent = function(e, t) {
    Blockly.bindEvent_(this.bubbleGroup_, "resize", e, t)
}, Blockly.Bubble.prototype.promote_ = function() {
    this.bubbleGroup_.parentNode.appendChild(this.bubbleGroup_)
}, Blockly.Bubble.prototype.setAnchorLocation = function(e, t) {
    this.anchorX_ = e, this.anchorY_ = t, this.rendered_ && this.positionBubble_()
}, Blockly.Bubble.prototype.layoutBubble_ = function() {
    var e = -this.width_ / 4,
        t = -this.height_ - Blockly.BlockSvg.MIN_BLOCK_Y;
    if (this.blockSpace_.scrollbarPair) {
        var o = this.blockSpace_.getMetrics();
        this.anchorX_ + e < Blockly.BlockSvg.SEP_SPACE_X + o.viewLeft ? e = Blockly.BlockSvg.SEP_SPACE_X + o.viewLeft - this.anchorX_ : o.viewLeft + o.viewWidth < this.anchorX_ + e + this.width_ + Blockly.BlockSvg.SEP_SPACE_X + Blockly.Scrollbar.scrollbarThickness && (e = o.viewLeft + o.viewWidth - this.anchorX_ - this.width_ - Blockly.BlockSvg.SEP_SPACE_X - Blockly.Scrollbar.scrollbarThickness), this.anchorY_ + t < Blockly.BlockSvg.SEP_SPACE_Y + o.viewTop && (0 <= navigator.userAgent.indexOf("MSIE") || 0 <= navigator.userAgent.indexOf("Trident") ? (this.shape_.style.display = "inline", t = {
            x: this.shape_.getBBox().x,
            y: this.shape_.getBBox().y,
            width: this.shape_.scrollWidth,
            height: this.shape_.scrollHeight
        }) : t = this.shape_.getBBox(), t = t.height)
    }
    this.relativeLeft_ = e, this.relativeTop_ = t
}, Blockly.Bubble.prototype.positionBubble_ = function() {
    this.bubbleGroup_.setAttribute("transform", "translate(" + (Blockly.RTL ? this.anchorX_ - this.relativeLeft_ - this.width_ : this.anchorX_ + this.relativeLeft_) + ", " + (this.relativeTop_ + this.anchorY_) + ")")
}, Blockly.Bubble.prototype.getBubbleSize = function() {
    return {
        width: this.width_,
        height: this.height_
    }
}, Blockly.Bubble.prototype.setBubbleSize = function(e, t) {
    var o = 2 * Blockly.Bubble.BORDER_WIDTH;
    e = Math.max(e, o + 45), t = Math.max(t, o + Blockly.BlockSvg.TITLE_HEIGHT), this.width_ = e, this.height_ = t, this.bubbleBack_.setAttribute("width", e), this.bubbleBack_.setAttribute("height", t), this.resizeGroup_ && (Blockly.RTL ? this.resizeGroup_.setAttribute("transform", "translate(" + 2 * Blockly.Bubble.BORDER_WIDTH + ", " + (t - o) + ") scale(-1 1)") : this.resizeGroup_.setAttribute("transform", "translate(" + (e - o) + ", " + (t - o) + ")")), this.rendered_ && (this.autoLayout_ && this.layoutBubble_(), this.positionBubble_(), this.renderArrow_()), Blockly.fireUiEvent(this.bubbleGroup_, "resize")
}, Blockly.Bubble.prototype.renderArrow_ = function() {
    var e = [],
        t = this.width_ / 2,
        o = this.height_ / 2,
        n = -this.relativeLeft_,
        i = -this.relativeTop_;
    if (t == n && o == i) e.push("M " + t + "," + o);
    else {
        i -= o, n -= t, Blockly.RTL && (n *= -1);
        var r = Math.sqrt(i * i + n * n),
            l = Math.acos(n / r);
        0 > i && (l = 2 * Math.PI - l);
        var s = l + Math.PI / 2;
        s > 2 * Math.PI && (s -= 2 * Math.PI);
        var a = Math.sin(s),
            g = Math.cos(s),
            c = this.getBubbleSize(),
            s = (c.width + c.height) / Blockly.Bubble.ARROW_THICKNESS,
            s = Math.min(s, c.width, c.height) / 2,
            c = 1 - Blockly.Bubble.ANCHOR_RADIUS / r,
            n = t + c * n,
            i = o + c * i,
            c = t + s * g,
            u = o + s * a,
            t = t - s * g,
            o = o - s * a,
            a = l + this.arrow_radians_;
        a > 2 * Math.PI && (a -= 2 * Math.PI), l = Math.sin(a) * r / Blockly.Bubble.ARROW_BEND, r = Math.cos(a) * r / Blockly.Bubble.ARROW_BEND, e.push("M" + c + "," + u), e.push("C" + (c + r) + "," + (u + l) + " " + n + "," + i + " " + n + "," + i), e.push("C" + n + "," + i + " " + (t + r) + "," + (o + l) + " " + t + "," + o)
    }
    e.push("z"), this.bubbleArrow_.setAttribute("d", e.join(" "))
}, Blockly.Bubble.prototype.setColour = function(e) {
    this.bubbleBack_.setAttribute("fill", e), this.bubbleArrow_.setAttribute("fill", e)
}, Blockly.Bubble.prototype.dispose = function() {
    Blockly.Bubble.unbindDragEvents_(), goog.dom.removeNode(this.bubbleGroup_), this.shape_ = this.content_ = this.blockSpace_ = this.bubbleGroup_ = null
}, Blockly.Icon = function(e) {
    this.block_ = e
}, Blockly.Icon.RADIUS = 8, Blockly.Icon.prototype.bubble_ = null, Blockly.Icon.prototype.iconX_ = 0, Blockly.Icon.prototype.iconY_ = 0, Blockly.Icon.prototype.createIcon_ = function() {
    this.iconGroup_ = Blockly.createSvgElement("g", {}, null), this.block_.getSvgRoot().appendChild(this.iconGroup_), Blockly.bindEvent_(this.iconGroup_, "mouseup", this, this.iconClick_), this.updateEditable()
}, Blockly.Icon.prototype.dispose = function() {
    goog.dom.removeNode(this.iconGroup_), this.iconGroup_ = null, this.setVisible(!1), this.block_ = null
}, Blockly.Icon.prototype.updateEditable = function() {
    this.block_.isEditable() && !this.block_.isInFlyout ? Blockly.addClass_(this.iconGroup_, "blocklyIconGroup") : Blockly.removeClass_(this.iconGroup_, "blocklyIconGroup")
}, Blockly.Icon.prototype.isVisible = function() {
    return !!this.bubble_
}, Blockly.Icon.prototype.iconClick_ = function() {
    this.block_.isEditable() && !this.block_.isInFlyout && this.setVisible(!this.isVisible())
}, Blockly.Icon.prototype.updateColour = function() {
    this.isVisible() && this.bubble_.setColour(this.block_.getHexColour())
}, Blockly.Icon.prototype.renderIcon = function(e) {
    if (this.block_.isCollapsed()) return this.iconGroup_.setAttribute("display", "none"), e;
    this.iconGroup_.setAttribute("display", "block");
    var t = 2 * Blockly.Icon.RADIUS;
    return Blockly.RTL && (e -= t), this.iconGroup_.setAttribute("transform", "translate(" + e + ", 5)"), this.computeIconLocation(), e = Blockly.RTL ? e - Blockly.BlockSvg.SEP_SPACE_X : e + (t + Blockly.BlockSvg.SEP_SPACE_X)
}, Blockly.Icon.prototype.setIconLocation = function(e, t) {
    this.iconX_ = e, this.iconY_ = t, this.isVisible() && this.bubble_.setAnchorLocation(e, t)
}, Blockly.Icon.prototype.computeIconLocation = function() {
    var e = this.block_.getRelativeToSurfaceXY(),
        t = Blockly.getRelativeXY(this.iconGroup_),
        o = e.x + t.x + Blockly.Icon.RADIUS,
        e = e.y + t.y + Blockly.Icon.RADIUS;
    o === this.iconX_ && e === this.iconY_ || this.setIconLocation(o, e)
}, Blockly.Icon.prototype.getIconLocation = function() {
    return {
        x: this.iconX_,
        y: this.iconY_
    }
}, Blockly.Mutator = function(e) {
    Blockly.Mutator.superClass_.constructor.call(this, null), this.quarkXml_ = [];
    for (var t = 0; t < e.length; t++) {
        var o = goog.dom.createDom("block", {
            type: e[t]
        });
        this.quarkXml_[t] = o
    }
}, goog.inherits(Blockly.Mutator, Blockly.Icon), Blockly.Mutator.prototype.blockSpaceWidth_ = 0, Blockly.Mutator.prototype.blockSpaceHeight_ = 0, Blockly.Mutator.prototype.createIcon = function() {
    Blockly.Icon.prototype.createIcon_.call(this);
    var e = Blockly.Icon.RADIUS / 2;
    Blockly.createSvgElement("rect", {
        "class": "blocklyIconShield",
        width: 4 * e,
        height: 4 * e,
        rx: e,
        ry: e
    }, this.iconGroup_), this.iconMark_ = Blockly.createSvgElement("text", {
        "class": "blocklyIconMark",
        x: Blockly.Icon.RADIUS,
        y: 2 * Blockly.Icon.RADIUS - 4
    }, this.iconGroup_), this.iconMark_.appendChild(document.createTextNode("\u2605"))
}, Blockly.Mutator.prototype.createEditor_ = function() {
    this.svgDialog_ = Blockly.createSvgElement("svg", {
        x: Blockly.Bubble.BORDER_WIDTH,
        y: Blockly.Bubble.BORDER_WIDTH
    }, null), this.svgBackground_ = Blockly.createSvgElement("rect", {
        "class": "blocklyMutatorBackground",
        height: "100%",
        width: "100%"
    }, this.svgDialog_);
    var e = this,
        t = this.block_.blockSpace.blockSpaceEditor;
    return this.blockSpace_ = new Blockly.BlockSpace(t, function() {
        return e.getFlyoutMetrics_()
    }, null), this.blockSpace_.flyout_ = new Blockly.Flyout(t), this.blockSpace_.flyout_.autoClose = !1, this.svgDialog_.appendChild(this.blockSpace_.flyout_.createDom()), this.svgDialog_.appendChild(this.blockSpace_.createDom()), this.svgDialog_
}, Blockly.Mutator.prototype.resizeBubble_ = function() {
    var e, t = 2 * Blockly.Bubble.BORDER_WIDTH,
        o = this.blockSpace_.getCanvas().getBBox(),
        n = this.blockSpace_.flyout_.getMetrics_();
    e = Blockly.RTL ? -o.x : o.width + o.x, o = Math.max(o.height + 3 * t, n.contentHeight + 20), e += 3 * t, (Math.abs(this.blockSpaceWidth_ - e) > t || Math.abs(this.blockSpaceHeight_ - o) > t) && (this.blockSpaceWidth_ = e, this.blockSpaceHeight_ = o, this.bubble_.setBubbleSize(e + t, o + t), this.svgDialog_.setAttribute("width", this.blockSpaceWidth_), this.svgDialog_.setAttribute("height", this.blockSpaceHeight_)), Blockly.RTL && (t = "translate(" + this.blockSpaceWidth_ + ",0)", this.blockSpace_.getCanvas().setAttribute("transform", t), this.blockSpace_.getDragCanvas().setAttribute("transform", t))
}, Blockly.Mutator.prototype.setVisible = function(e) {
    if (e != this.isVisible())
        if (e) {
            this.bubble_ = new Blockly.Bubble(this.block_.blockSpace, this.createEditor_(), this.block_.svg_.svgGroup_, this.iconX_, this.iconY_, null, null);
            var t = this;
            this.blockSpace_.flyout_.init(this.blockSpace_, !1), this.blockSpace_.flyout_.show(this.quarkXml_), this.rootBlock_ = this.block_.decompose(this.blockSpace_), e = this.rootBlock_.getDescendants();
            for (var o, n = 0; o = e[n]; n++) o.render();
            this.rootBlock_.setMovable(!1), this.rootBlock_.setDeletable(!1), e = 2 * this.blockSpace_.flyout_.CORNER_RADIUS, n = this.blockSpace_.flyout_.width_ + e, Blockly.RTL && (n = -n), this.rootBlock_.moveBy(n, e), this.block_.saveConnections && (this.block_.saveConnections(this.rootBlock_), this.sourceListener_ = Blockly.bindEvent_(this.block_.blockSpace.getCanvas(), "blocklyBlockSpaceChange", this.block_, function() {
                t.block_.saveConnections(t.rootBlock_)
            })), this.resizeBubble_(), Blockly.bindEvent_(this.blockSpace_.getCanvas(), "blocklyBlockSpaceChange", this.block_, function() {
                t.blockSpaceChanged_()
            }), this.updateColour()
        } else this.svgBackground_ = this.svgDialog_ = null, this.blockSpace_.dispose(), this.rootBlock_ = this.blockSpace_ = null, this.bubble_.dispose(), this.bubble_ = null, this.blockSpaceHeight_ = this.blockSpaceWidth_ = 0, this.sourceListener_ && (Blockly.unbindEvent_(this.sourceListener_), this.sourceListener_ = null)
}, Blockly.Mutator.prototype.blockSpaceChanged_ = function() {
    if (this.blockSpace_) {
        if (!Blockly.Block.isDragging())
            for (var e, t = this.blockSpace_.getTopBlocks(!1), o = 0; e = t[o]; o++) {
                var n = e.getRelativeToSurfaceXY(),
                    i = e.getHeightWidth();
                20 > n.y + i.height && e.moveBy(0, 20 - i.height - n.y)
            }
        this.rootBlock_.blockSpace == this.blockSpace_ && (t = this.block_.rendered, this.block_.rendered = !1, this.block_.compose(this.rootBlock_), this.block_.rendered = t, this.block_.rendered && this.block_.render(), Blockly.Block.isDragging() || this.resizeBubble_(), this.block_.blockSpace.fireChangeEvent())
    }
}, Blockly.Mutator.prototype.getFlyoutMetrics_ = function() {
    var e = 0;
    return Blockly.RTL && (e += this.blockSpaceWidth_), {
        viewHeight: this.blockSpaceHeight_,
        viewWidth: this.blockSpaceWidth_,
        absoluteTop: 0,
        absoluteLeft: e
    }
}, Blockly.Mutator.prototype.dispose = function() {
    this.block_.mutator = null, Blockly.Icon.prototype.dispose.call(this)
};
var ROUNDED_NOTCH_PATHS = {
        left: "l 6,4 3,0 6,-4",
        leftHighlight: "l 6.5,4 2,0 6.5,-4",
        right: "l -6,4 -3,0 -6,-4"
    },
    SQUARE_NOTCH_PATHS = {
        left: "l 0,5 15,0 0,-5",
        leftHighlight: "l 0,5 15,0 0,-5",
        right: "l 0,5 -15,0 0,-5"
    };
Blockly.Connection = function(e, t) {
    this.sourceBlock_ = e, this.targetConnection = null, this.type = t, this.y_ = this.x_ = 0, this.inDB_ = !1, this.dbList_ = this.sourceBlock_.blockSpace.connectionDBList, this.check_ = null
}, Blockly.Connection.prototype.isConnected = function() {
    return null !== this.targetConnection
}, Blockly.Connection.prototype.dispose = function() {
    if (this.isConnected()) throw "Disconnect connection before disposing of it.";
    this.inDB_ && this.dbList_[this.type].removeConnection_(this), this.inDB_ = !1, Blockly.highlightedConnection_ == this && (Blockly.highlightedConnection_ = null), Blockly.localConnection_ == this && (Blockly.localConnection_ = null)
}, Blockly.Connection.prototype.isSuperior = function() {
    return this.type === Blockly.INPUT_VALUE || this.type === Blockly.NEXT_STATEMENT || this.type === Blockly.FUNCTIONAL_INPUT
}, Blockly.Connection.prototype.connect = function(e) {
    if (this.sourceBlock_ == e.sourceBlock_) throw "Attempted to connect a block to itself.";
    if (this.sourceBlock_.blockSpace !== e.sourceBlock_.blockSpace) throw "Blocks are on different blockSpaces.";
    if (Blockly.OPPOSITE_TYPE[this.type] != e.type) throw "Attempt to connect incompatible types.";
    if (this.isConnected()) throw "Source connection already connected.";
    e.targetConnection && this.handleOrphan_(e);
    var t, o;
    this.isSuperior() ? (t = this.sourceBlock_, o = e.sourceBlock_) : (t = e.sourceBlock_, o = this.sourceBlock_), this.targetConnection = e, e.targetConnection = this, o.setParent(t), t.rendered && t.getSvgRenderer().updateDisabled(), o.rendered && o.getSvgRenderer().updateDisabled(), t.rendered && o.rendered && (this.type == Blockly.NEXT_STATEMENT || this.type == Blockly.PREVIOUS_STATEMENT ? o.render() : t.render()), this.sourceBlock_.isUserVisible() || this.sourceBlock_.setUserVisible(!1)
}, Blockly.Connection.prototype.handleOrphan_ = function(e) {
    var t = e.targetBlock();
    if (t.setParent(null), t.setUserVisible(!0), this.type === Blockly.INPUT_VALUE || this.type === Blockly.OUTPUT_VALUE) {
        if (!t.outputConnection) throw "Orphan block does not have an output connection.";
        for (var o = this.sourceBlock_; o = Blockly.Connection.singleConnection_(o, t);) {
            if (!o.targetBlock()) {
                o.connect(t.outputConnection), t = null;
                break
            }
            o = o.targetBlock()
        }
        t && window.setTimeout(function() {
            t.outputConnection.bumpAwayFrom_(e)
        }, Blockly.BUMP_DELAY)
    } else if (this.type === Blockly.FUNCTIONAL_INPUT || this.type === Blockly.FUNCTIONAL_OUTPUT) {
        if (!t.previousConnection) throw "Orphan block does not have a previous connection.";
        window.setTimeout(function() {
            t.previousConnection.bumpAwayFrom_(e)
        }, Blockly.BUMP_DELAY)
    } else {
        if (this.type != Blockly.PREVIOUS_STATEMENT) throw "Can only do a mid-stack connection with the top of a block.";
        if (!t.previousConnection) throw "Orphan block does not have a previous connection.";
        for (o = this.sourceBlock_; o.nextConnection;) {
            if (!o.nextConnection.targetConnection) {
                o.nextConnection.connect(t.previousConnection), t = null;
                break
            }
            o = o.nextConnection.targetBlock()
        }
        t && window.setTimeout(function() {
            t.previousConnection.bumpAwayFrom_(e)
        }, Blockly.BUMP_DELAY)
    }
}, Blockly.Connection.singleConnection_ = function(e, t) {
    for (var o = !1, n = 0; n < e.inputList.length; n++) {
        var i = e.inputList[n].connection;
        if (i && i.type == Blockly.INPUT_VALUE && t.outputConnection.checkAllowedConnectionType_(i)) {
            if (o) return null;
            o = i
        }
    }
    return o
}, Blockly.Connection.prototype.disconnect = function() {
    var e = this.targetConnection;
    if (!e) throw "Source connection not connected.";
    if (e.targetConnection != this) throw "Target connection not connected to source connection.";
    this.targetConnection = e.targetConnection = null, this.sourceBlock_.setUserVisible(!0);
    var t;
    this.isSuperior() ? (t = this.sourceBlock_, e = e.sourceBlock_) : (t = e.sourceBlock_, e = this.sourceBlock_), t.rendered && t.render(), e.rendered && (e.getSvgRenderer().updateDisabled(), e.render())
}, Blockly.Connection.prototype.targetBlock = function() {
    return this.targetConnection ? this.targetConnection.sourceBlock_ : null
}, Blockly.Connection.prototype.bumpAwayFrom_ = function(e) {
    if (!Blockly.Block.isDragging()) {
        var t = this.sourceBlock_.getRootBlock();
        if (!t.isInFlyout) {
            var o = !1;
            if (!t.isMovable()) {
                if (t = e.sourceBlock_.getRootBlock(), !t.isMovable()) return;
                e = this, o = !0
            }
            t.getSvgRoot().parentNode.appendChild(t.getSvgRoot());
            var n = e.x_ + Blockly.SNAP_RADIUS - this.x_;
            e = e.y_ + 2 * Blockly.SNAP_RADIUS - this.y_, o && (e = -e), Blockly.RTL && (n = -n), t.moveBy(n, e)
        }
    }
}, Blockly.Connection.prototype.moveTo = function(e, t) {
    this.inDB_ && this.dbList_[this.type].removeConnection_(this), this.x_ = e, this.y_ = t, this.dbList_[this.type].addConnection_(this)
}, Blockly.Connection.prototype.moveBy = function(e, t) {
    this.moveTo(this.x_ + e, this.y_ + t)
}, Blockly.Connection.prototype.highlight = function() {
    var e;
    if (this.type === Blockly.INPUT_VALUE || this.type === Blockly.OUTPUT_VALUE) e = Blockly.RTL ? -Blockly.BlockSvg.TAB_WIDTH : Blockly.BlockSvg.TAB_WIDTH, e = "m 0,0 v 5 c 0,10 " + -e + ",-8 " + -e + ",7.5 s " + e + ",-2.5 " + e + ",7.5 v 5";
    else {
        e = 5 + Blockly.BlockSvg.NOTCH_PATH_WIDTH;
        var t = this.getNotchPaths();
        e = Blockly.RTL ? "m " + e + ",0 h -5 " + t.right + " h -5" : "m -" + e + ",0 h 5 " + t.left + " h 5"
    }
    t = this.sourceBlock_.getRelativeToSurfaceXY(), Blockly.Connection.highlightedPath_ = Blockly.createSvgElement("path", {
        "class": "blocklyHighlightedConnectionPath",
        d: e,
        transform: "translate(" + (this.x_ - t.x) + ", " + (this.y_ - t.y) + ")"
    }, this.sourceBlock_.getSvgRoot())
}, Blockly.Connection.prototype.unhighlight = function() {
    goog.dom.removeNode(Blockly.Connection.highlightedPath_), delete Blockly.Connection.highlightedPath_
}, Blockly.Connection.prototype.getNotchPaths = function() {
    if (Blockly.Connection.NOTCH_PATHS_OVERRIDE) return Blockly.Connection.NOTCH_PATHS_OVERRIDE;
    var e = this && this.check_ || [];
    return 1 === e.length && e[0] === Blockly.BlockValueType.FUNCTION ? SQUARE_NOTCH_PATHS : ROUNDED_NOTCH_PATHS
}, Blockly.Connection.prototype.tighten_ = function() {
    var e = Math.round(this.targetConnection.x_ - this.x_),
        t = Math.round(this.targetConnection.y_ - this.y_);
    if (0 != e || 0 != t) {
        var o = this.targetBlock(),
            n = o.getSvgRoot();
        if (!n) throw "block is not rendered.";
        n = Blockly.getRelativeXY(n), o.getSvgRoot().setAttribute("transform", "translate(" + (n.x - e) + ", " + (n.y - t) + ")"), o.moveConnections_(-e, -t)
    }
}, Blockly.Connection.prototype.closest = function(e, t, o) {
    function n(n) {
        var s = i[n],
            a = s.sourceBlock_;
        if (!a.isVisible() || (s.type === Blockly.OUTPUT_VALUE || s.type === Blockly.FUNCTIONAL_OUTPUT || s.type === Blockly.PREVIOUS_STATEMENT) && s.targetConnection || s.targetConnection && !s.targetBlock().isMovable() || s.targetConnection && !s.targetBlock().canDisconnectFromParent() || !h.checkAllowedConnectionType_(s)) return !0;
        do {
            if (u == a) return !0;
            a = a.getParent()
        } while (a);
        var g = s.x_,
            a = s.y_;
        return s.sourceBlock_.getDragging() && (g += t, a += o), s = r - g, a = l - a, s = Math.sqrt(s * s + a * a), e >= s && (c = i[n], e = s), e > a
    }
    if (this.isConnected()) return {
        connection: null,
        radius: e
    };
    for (var i = this.dbList_[Blockly.OPPOSITE_TYPE[this.type]], r = this.x_ + t, l = this.y_ + o, s = 0, a = i.length - 2, g = a; g > s;) i[g].y_ < l ? s = g : a = g, g = Math.floor((s + a) / 2);
    var a = s = g,
        c = null,
        u = this.sourceBlock_,
        h = this;
    if (i.length) {
        for (; s >= 0 && n(s);) s--;
        do a++; while (a < i.length && n(a))
    }
    return {
        connection: c,
        radius: e
    }
}, Blockly.Connection.prototype.checkAllowedConnectionType_ = function(e) {
    if (this.acceptsAnyType() || e.acceptsAnyType()) return !0;
    for (var t = 0; t < this.check_.length; t++)
        if (e.acceptsType(this.check_[t])) return !0;
    return !1
}, Blockly.Connection.prototype.acceptsAnyType = function() {
    return !this.check_ || this.acceptsType(Blockly.BlockValueType.NONE)
}, Blockly.Connection.prototype.acceptsType = function(e) {
    return !this.check_ || goog.array.contains(this.check_, e)
}, Blockly.Connection.prototype.setCheck = function(e) {
    return e && e !== Blockly.BlockValueType.NONE ? (e instanceof Array || (e = [e]), this.check_ = e, this.targetConnection && !this.checkAllowedConnectionType_(this.targetConnection) && (this.isSuperior() ? this.targetBlock().setParent(null) : this.sourceBlock_.setParent(null), this.sourceBlock_.bumpNeighbours_())) : this.check_ = null, this
}, Blockly.Connection.prototype.getCheck = function() {
    return this.check_
}, Blockly.Connection.prototype.neighbours_ = function(e) {
    function t(t) {
        var r = o[t],
            l = r.sourceBlock_;
        return Blockly.editBlocks || l.isVisible() ? (l = n - r.x_, r = i - r.y_, Math.sqrt(l * l + r * r) <= e && a.push(o[t]), e > r) : !0
    }
    for (var o = this.dbList_[Blockly.OPPOSITE_TYPE[this.type]], n = this.x_, i = this.y_, r = 0, l = o.length - 2, s = l; s > r;) o[s].y_ < i ? r = s : l = s, s = Math.floor((r + l) / 2);
    var l = r = s,
        a = [];
    if (o.length) {
        for (; r >= 0 && t(r);) r--;
        do l++; while (l < o.length && t(l))
    }
    return a
}, Blockly.Connection.prototype.hideAll = function() {
    if (this.inDB_ && this.dbList_[this.type].removeConnection_(this), this.isConnected())
        for (var e = this.targetBlock().getDescendants(), t = 0; t < e.length; t++) {
            for (var o = e[t], n = o.getConnections_(!0), i = 0; i < n.length; i++) {
                var r = n[i];
                r.inDB_ && this.dbList_[r.type].removeConnection_(r)
            }
            for (o = o.getIcons(), n = 0; n < o.length; n++) o[n].setVisible(!1)
        }
}, Blockly.Connection.prototype.unhideAll = function() {
    this.inDB_ || this.dbList_[this.type].addConnection_(this);
    var e = [];
    if (this.type != Blockly.INPUT_VALUE && this.type != Blockly.NEXT_STATEMENT) return e;
    var t = this.targetBlock();
    if (t) {
        var o;
        t.isCollapsed() ? (o = [], t.outputConnection && o.push(t.outputConnection), t.nextConnection && o.push(t.nextConnection), t.previousConnection && o.push(t.previousConnection)) : o = t.getConnections_(!0);
        for (var n = 0; n < o.length; n++) e = e.concat(o[n].unhideAll());
        0 == e.length && (e[0] = t)
    }
    return e
}, Blockly.ConnectionDB = function() {}, Blockly.ConnectionDB.prototype = [], Blockly.ConnectionDB.constructor = Blockly.ConnectionDB, Blockly.ConnectionDB.prototype.addConnection_ = function(e) {
    if (e.inDB_) throw "Connection already in database.";
    for (var t = 0, o = this.length; o > t;) {
        var n = Math.floor((t + o) / 2);
        if (this[n].y_ < e.y_) t = n + 1;
        else {
            if (!(this[n].y_ > e.y_)) {
                t = n;
                break
            }
            o = n
        }
    }
    this.splice(t, 0, e), e.inDB_ = !0
}, Blockly.ConnectionDB.prototype.removeConnection_ = function(e) {
    if (!e.inDB_) throw "Connection not in database.";
    e.inDB_ = !1;
    for (var t = 0, o = this.length - 2, n = o; n > t;) this[n].y_ < e.y_ ? t = n : o = n, n = Math.floor((t + o) / 2);
    for (o = t = n; t >= 0 && this[t].y_ == e.y_;) {
        if (this[t] == e) return void this.splice(t, 1);
        t--
    }
    do {
        if (this[o] == e) return void this.splice(o, 1);
        o++
    } while (o < this.length && this[o].y_ == e.y_);
    throw "Unable to find connection in connectionDB."
}, Blockly.ConnectionDB.init = function(e) {
    var t = [];
    t[Blockly.INPUT_VALUE] = new Blockly.ConnectionDB, t[Blockly.OUTPUT_VALUE] = new Blockly.ConnectionDB, t[Blockly.NEXT_STATEMENT] = new Blockly.ConnectionDB, t[Blockly.PREVIOUS_STATEMENT] = new Blockly.ConnectionDB, t[Blockly.FUNCTIONAL_INPUT] = new Blockly.ConnectionDB, t[Blockly.FUNCTIONAL_OUTPUT] = new Blockly.ConnectionDB, e.connectionDBList = t
}, Blockly.Blocks = {}, Blockly.BlockSvgFunctional = function(e, t) {
    t = t || {}, this.headerHeight = t.headerHeight || 0, this.rowBuffer = t.rowBuffer || 0, this.patternId_ = null, this.inputMarkers_ = {}, this.inputClickTargets_ = {}, this.forcedInputSpacings = {}, Blockly.BlockSvg.call(this, e)
}, goog.inherits(Blockly.BlockSvgFunctional, Blockly.BlockSvg), Blockly.BlockSvgFunctional.prototype.initChildren = function() {
    var e = Blockly.makeColour(this.block_.getColour(), this.block_.getSaturation(), this.block_.getValue()),
        t = goog.color.lighten(goog.color.hexToRgb(e), .3);
    goog.color.lighten(goog.color.hexToRgb(e), .8), Blockly.BlockSvgFunctional.superClass_.initChildren.call(this), e = Blockly.createSvgElement("clipPath", {
        id: "blockClip" + this.block_.id
    }, this.svgGroup_), this.blockClipRect_ = Blockly.createSvgElement("path", {}, e), this.divider_ = Blockly.createSvgElement("rect", {
        x: 1,
        y: this.headerHeight,
        height: 3,
        width: 0,
        fill: goog.color.rgbArrayToHex(t),
        "clip-path": "url(#blockClip" + this.block_.id + ")",
        visibility: 0 < this.headerHeight ? "visible" : "hidden"
    }, this.svgGroup_), this.createFunctionalMarkers_()
}, Blockly.BlockSvgFunctional.prototype.renderDraw_ = function(e, t) {
    this.createFunctionalMarkers_(), Blockly.BlockSvgFunctional.superClass_.renderDraw_.call(this, e, t), this.blockClipRect_.setAttribute("d", this.svgPath_.getAttribute("d"));
    try {
        var o = this.svgPath_.getBBox();
        this.divider_.setAttribute("width", Math.max(0, o.width - 2))
    } catch (n) {}
}, Blockly.BlockSvgFunctional.prototype.createFunctionalMarkers_ = function() {
    for (var e = [], t = 0; t < this.block_.inputList.length; t++) {
        var o = this.block_.inputList[t];
        e.push(o.name), this.inputMarkers_[o.name] || o.type !== Blockly.FUNCTIONAL_INPUT || (this.inputMarkers_[o.name] = Blockly.createSvgElement("rect", {
            fill: "white"
        }, this.svgGroup_), this.inputClickTargets_[o.name] = Blockly.createSvgElement("path", {
            fill: "white",
            opacity: "0",
            "class": "inputClickTarget"
        }, this.svgGroup_), this.block_.blockSpace.isFlyout || this.addInputClickListener_(o.name))
    }
    Object.keys(this.inputMarkers_).forEach(function(t) {
        if (-1 === e.indexOf(t)) {
            var o = this.inputMarkers_[t];
            o.parentNode.removeChild(o), delete this.inputMarkers_[t], o = this.inputClickTargets_[t], o.parentNode.removeChild(o), delete this.inputMarkers_[t]
        }
    }, this)
}, Blockly.BlockSvgFunctional.prototype.addInputClickListener_ = function(e) {
    var t = this.block_.blockSpace,
        o = this.block_;
    Blockly.bindEvent_(this.inputClickTargets_[e], "mousedown", this, function(n) {
        if (!Blockly.isRightButton(n)) {
            var i = o.getInput(e);
            if (!i.connection.acceptsAnyType()) {
                if (i.connection.acceptsType("Number")) n = "functional_math_number";
                else {
                    if (!i.connection.acceptsType("String")) return;
                    n = "functional_string"
                }
                n = new Blockly.Block(t, n), n.initSvg(), i.connection.connect(n.previousConnection);
                for (var i = n.getTitles(), r = 0; r < i.length; r++) i[r] instanceof Blockly.FieldTextInput && i[r].showEditor_();
                n.render()
            }
        }
    })
}, Blockly.BlockSvgFunctional.prototype.renderDrawRight_ = function(e, t, o, n) {
    this.rowBuffer && (e.core.push("v", this.rowBuffer), e.curY += this.rowBuffer), Blockly.BlockSvgFunctional.superClass_.renderDrawRight_.call(this, e, t, o, n)
}, Blockly.BlockSvgFunctional.prototype.renderDrawRightInlineFunctional_ = function(e, t, o) {
    var n = e.curX,
        i = e.curY + BS.INLINE_PADDING_Y,
        r = BS.NOTCH_WIDTH - BS.NOTCH_PATH_WIDTH,
        l = t.connection.getNotchPaths(),
        s = [];
    s.push("M", n + "," + i), s.push("h", r), s.push(l.left), s.push("H", n + t.renderWidth), s.push("v", t.renderHeight), s.push("H", n), s.push("z"), e.inline = e.inline.concat(s), this.inputClickTargets_[t.name].setAttribute("d", s.join(" ")), this.inputMarkers_[t.name].setAttribute("x", n + 5), this.inputMarkers_[t.name].setAttribute("y", i + 15), this.inputMarkers_[t.name].setAttribute("width", t.renderWidth - 10), this.inputMarkers_[t.name].setAttribute("height", 5), this.inputMarkers_[t.name].setAttribute("fill", t.getHexColour()), this.inputMarkers_[t.name].setAttribute("visibility", t.connection.targetConnection ? "hidden" : "visible"), this.inputClickTargets_[t.name].setAttribute("visibility", t.connection.targetConnection ? "hidden" : "visible"), e.curX += this.inputWidthToOccupy_(t) + BS.SEP_SPACE_X, t.connection.moveTo(o.x + n + BS.NOTCH_WIDTH, o.y + i), t.connection.targetConnection && t.connection.tighten_()
}, Blockly.BlockSvgFunctional.prototype.updateToColour_ = function(e) {
    Blockly.BlockSvgFunctional.superClass_.updateToColour_.call(this, e), this.divider_ && (e = goog.color.lighten(goog.color.hexToRgb(e), .3), this.divider_.setAttribute("fill", goog.color.rgbArrayToHex(e)))
}, Blockly.BlockSvgFunctional.prototype.dispose = function() {
    Blockly.BlockSvgFunctional.superClass_.dispose.call(this), this.divider_ = this.blockClipRect_ = null
}, Blockly.Comment = function(e) {
    Blockly.Comment.superClass_.constructor.call(this, e), this.createIcon_()
}, goog.inherits(Blockly.Comment, Blockly.Icon), Blockly.Comment.prototype.text_ = "", Blockly.Comment.prototype.width_ = 160, Blockly.Comment.prototype.height_ = 80, Blockly.Comment.prototype.createIcon_ = function() {
    Blockly.Icon.prototype.createIcon_.call(this), Blockly.createSvgElement("circle", {
        "class": "blocklyIconShield",
        r: Blockly.Icon.RADIUS,
        cx: Blockly.Icon.RADIUS,
        cy: Blockly.Icon.RADIUS
    }, this.iconGroup_), this.iconMark_ = Blockly.createSvgElement("text", {
        "class": "blocklyIconMark",
        x: Blockly.Icon.RADIUS,
        y: 2 * Blockly.Icon.RADIUS - 3
    }, this.iconGroup_), this.iconMark_.appendChild(document.createTextNode("?"))
}, Blockly.Comment.prototype.createEditor_ = function() {
    this.foreignObject_ = Blockly.createSvgElement("foreignObject", {
        x: Blockly.Bubble.BORDER_WIDTH,
        y: Blockly.Bubble.BORDER_WIDTH
    }, null);
    var e = document.createElementNS(Blockly.HTML_NS, "body");
    return e.setAttribute("xmlns", Blockly.HTML_NS), e.className = "blocklyMinimalBody", this.textarea_ = document.createElementNS(Blockly.HTML_NS, "textarea"), this.textarea_.className = "blocklyCommentTextarea", this.textarea_.setAttribute("dir", Blockly.RTL ? "RTL" : "LTR"), e.appendChild(this.textarea_), this.foreignObject_.appendChild(e), Blockly.bindEvent_(this.textarea_, "mouseup", this, this.textareaFocus_), this.foreignObject_
}, Blockly.Comment.prototype.resizeBubble_ = function() {
    var e = this.bubble_.getBubbleSize(),
        t = 2 * Blockly.Bubble.BORDER_WIDTH;
    this.foreignObject_.setAttribute("width", e.width - t), this.foreignObject_.setAttribute("height", e.height - t), this.textarea_.style.width = e.width - t - 4 + "px", this.textarea_.style.height = e.height - t - 4 + "px"
}, Blockly.Comment.prototype.setVisible = function(e) {
    if (e != this.isVisible()) {
        var t = this.getText(),
            o = this.getBubbleSize();
        e ? (this.bubble_ = new Blockly.Bubble(this.block_.blockSpace, this.createEditor_(), this.block_.svg_.svgGroup_, this.iconX_, this.iconY_, this.width_, this.height_), this.bubble_.registerResizeEvent(this, this.resizeBubble_), this.updateColour(), this.text_ = null) : (this.bubble_.dispose(), this.foreignObject_ = this.textarea_ = this.bubble_ = null), this.setText(t), this.setBubbleSize(o.width, o.height)
    }
}, Blockly.Comment.prototype.textareaFocus_ = function() {
    this.bubble_.promote_(), this.textarea_.focus()
}, Blockly.Comment.prototype.getBubbleSize = function() {
    return this.isVisible() ? this.bubble_.getBubbleSize() : {
        width: this.width_,
        height: this.height_
    }
}, Blockly.Comment.prototype.setBubbleSize = function(e, t) {
    this.isVisible() ? this.bubble_.setBubbleSize(e, t) : (this.width_ = e, this.height_ = t)
}, Blockly.Comment.prototype.getText = function() {
    return this.isVisible() ? this.textarea_.value : this.text_
}, Blockly.Comment.prototype.setText = function(e) {
    this.isVisible() ? this.textarea_.value = e : this.text_ = e
}, Blockly.Comment.prototype.dispose = function() {
    this.block_.comment = null, Blockly.Icon.prototype.dispose.call(this)
}, Blockly.Tooltip = {}, Blockly.Tooltip.visible = !1, Blockly.Tooltip.mouseOutPid_ = 0, Blockly.Tooltip.showPid_ = 0, Blockly.Tooltip.lastXY_ = {
    x: 0,
    y: 0
}, Blockly.Tooltip.element_ = null, Blockly.Tooltip.poisonedElement_ = null, Blockly.Tooltip.svgGroup_ = null, Blockly.Tooltip.svgText_ = null, Blockly.Tooltip.svgBackground_ = null, Blockly.Tooltip.svgShadow_ = null, Blockly.Tooltip.OFFSET_X = 0, Blockly.Tooltip.OFFSET_Y = 10, Blockly.Tooltip.RADIUS_OK = 10, Blockly.Tooltip.HOVER_MS = 1e3, Blockly.Tooltip.MARGINS = 5, Blockly.Tooltip.createDom = function() {
    var e = Blockly.createSvgElement("g", {
        "class": "blocklyHidden"
    }, null);
    return Blockly.Tooltip.svgGroup_ = e, Blockly.Tooltip.svgShadow_ = Blockly.createSvgElement("rect", {
        "class": "blocklyTooltipShadow",
        x: 2,
        y: 2
    }, e), Blockly.Tooltip.svgBackground_ = Blockly.createSvgElement("rect", {
        "class": "blocklyTooltipBackground"
    }, e), Blockly.Tooltip.svgText_ = Blockly.createSvgElement("text", {
        "class": "blocklyTooltipText"
    }, e), e
}, Blockly.Tooltip.bindMouseEvents = function(e) {
    Blockly.bindEvent_(e, "mouseover", null, Blockly.Tooltip.onMouseOver_), Blockly.bindEvent_(e, "mouseout", null, Blockly.Tooltip.onMouseOut_), Blockly.bindEvent_(e, "mousemove", null, Blockly.Tooltip.onMouseMove_)
}, Blockly.Tooltip.onMouseOver_ = function(e) {
    for (e = e.target; !goog.isString(e.tooltip) && !goog.isFunction(e.tooltip);) e = e.tooltip;
    Blockly.Tooltip.element_ != e && (Blockly.Tooltip.hide(), Blockly.Tooltip.poisonedElement_ = null, Blockly.Tooltip.element_ = e), window.clearTimeout(Blockly.Tooltip.mouseOutPid_)
}, Blockly.Tooltip.onMouseOut_ = function() {
    Blockly.Tooltip.mouseOutPid_ = window.setTimeout(function() {
        Blockly.Tooltip.element_ = null, Blockly.Tooltip.poisonedElement_ = null, Blockly.Tooltip.hide()
    }, 1), window.clearTimeout(Blockly.Tooltip.showPid_)
}, Blockly.Tooltip.onMouseMove_ = function(e) {
    if (Blockly.Tooltip.element_ && Blockly.Tooltip.element_.tooltip && !Blockly.Block.isDragging() && !Blockly.WidgetDiv.isVisible())
        if (Blockly.Tooltip.visible) {
            e = Blockly.mouseToSvg(e);
            var t = Blockly.Tooltip.lastXY_.y - e.y;
            Math.sqrt(Math.pow(Blockly.Tooltip.lastXY_.x - e.x, 2) + Math.pow(t, 2)) > Blockly.Tooltip.RADIUS_OK && Blockly.Tooltip.hide()
        } else Blockly.Tooltip.poisonedElement_ != Blockly.Tooltip.element_ && (window.clearTimeout(Blockly.Tooltip.showPid_), Blockly.Tooltip.lastXY_ = Blockly.mouseToSvg(e), Blockly.Tooltip.showPid_ = window.setTimeout(Blockly.Tooltip.show_, Blockly.Tooltip.HOVER_MS))
}, Blockly.Tooltip.hide = function() {
    Blockly.Tooltip.visible && (Blockly.Tooltip.visible = !1, Blockly.Tooltip.svgGroup_ && (Blockly.Tooltip.svgGroup_.style.display = "none")), window.clearTimeout(Blockly.Tooltip.showPid_)
}, Blockly.Tooltip.show_ = function() {
    if (Blockly.Tooltip.poisonedElement_ = Blockly.Tooltip.element_, Blockly.Tooltip.svgGroup_) {
        goog.dom.removeChildren(Blockly.Tooltip.svgText_);
        var e = Blockly.Tooltip.element_.tooltip;
        goog.isFunction(e) && (e = e());
        for (var e = e.split("\n"), t = 0; t < e.length; t++) {
            var o = Blockly.createSvgElement("tspan", {
                    dy: "1em",
                    x: Blockly.Tooltip.MARGINS
                }, Blockly.Tooltip.svgText_),
                n = document.createTextNode(e[t]);
            o.appendChild(n)
        }
        if (Blockly.Tooltip.visible = !0, Blockly.Tooltip.svgGroup_.style.display = "block", 0 <= navigator.userAgent.indexOf("MSIE") || 0 <= navigator.userAgent.indexOf("Trident") ? (Blockly.Tooltip.svgText_.style.display = "inline", e = {
                x: Blockly.Tooltip.svgText_.getBBox().x,
                y: Blockly.Tooltip.svgText_.getBBox().y,
                width: Blockly.Tooltip.svgText_.scrollWidth,
                height: Blockly.Tooltip.svgText_.scrollHeight
            }) : e = Blockly.Tooltip.svgText_.getBBox(), t = 2 * Blockly.Tooltip.MARGINS + e.width, o = e.height, Blockly.Tooltip.svgBackground_.setAttribute("width", t), Blockly.Tooltip.svgBackground_.setAttribute("height", o), Blockly.Tooltip.svgShadow_.setAttribute("width", t), Blockly.Tooltip.svgShadow_.setAttribute("height", o), Blockly.RTL)
            for (var i, o = e.width, n = 0; i = Blockly.Tooltip.svgText_.childNodes[n]; n++) i.setAttribute("text-anchor", "end"), i.setAttribute("x", o + Blockly.Tooltip.MARGINS);
        o = Blockly.Tooltip.lastXY_.x, o = Blockly.RTL ? o - (Blockly.Tooltip.OFFSET_X + t) : o + Blockly.Tooltip.OFFSET_X, t = Blockly.Tooltip.lastXY_.y + Blockly.Tooltip.OFFSET_Y, n = Blockly.mainBlockSpaceEditor.svgSize(), t + e.height > n.height && (t -= e.height + 2 * Blockly.Tooltip.OFFSET_Y), Blockly.RTL ? o = Math.max(Blockly.Tooltip.MARGINS, o) : o + e.width > n.width - 2 * Blockly.Tooltip.MARGINS && (o = n.width - e.width - 2 * Blockly.Tooltip.MARGINS), Blockly.Tooltip.svgGroup_.setAttribute("transform", "translate(" + o + "," + t + ")")
    }
}, Blockly.FieldLabel = function(e, t) {
    t = t || {}, this.sourceBlock_ = null, this.textElement_ = Blockly.createSvgElement("text", {
        "class": "blocklyText"
    }, null);
    var o = {
        width: 0,
        height: 25
    };
    this.forceWidth_ = (this.forceSize_ = t.hasOwnProperty("fixedSize")) && void 0 !== t.fixedSize.width, this.fontSize_ = t.fontSize, this.size_ = this.forceSize_ ? t.fixedSize : o, this.setText(e), this.fieldGroup_ = this.textElement_
}, goog.inherits(Blockly.FieldLabel, Blockly.Field), Blockly.FieldLabel.prototype.EDITABLE = !1, Blockly.FieldLabel.prototype.init = function(e) {
    if (this.sourceBlock_) throw "Text has already been initialized once.";
    this.sourceBlock_ = e, e.getSvgRoot().appendChild(this.textElement_), this.textElement_.tooltip = this.sourceBlock_, Blockly.Tooltip && Blockly.Tooltip.bindMouseEvents(this.textElement_)
}, Blockly.FieldLabel.prototype.getSize = function() {
    return this.size_.width || this.forceWidth_ || this.updateWidth_(), this.size_
}, Blockly.FieldLabel.prototype.getBufferY = function() {
    return this.fontSize_ ? (this.size_.height - this.fontSize_) / 2 : 0
}, Blockly.FieldLabel.prototype.setText = function(e) {
    null !== e && e !== this.text_ && (this.text_ = e, goog.dom.removeChildren(this.textElement_), e = e.replace(/\s/g, Blockly.Field.NBSP), e || (e = Blockly.Field.NBSP), e = document.createTextNode(e), this.textElement_.appendChild(e), this.fontSize_ && (this.textElement_.style.fontSize = this.fontSize_ + "px"), this.forceWidth_ || (this.size_.width = 0), this.refreshRender())
}, Blockly.FieldLabel.prototype.dispose = function() {
    goog.dom.removeNode(this.textElement_), this.textElement_ = null
}, Blockly.FieldLabel.prototype.getRootElement = function() {
    return this.textElement_
}, Blockly.FieldLabel.prototype.setTooltip = function(e) {
    this.textElement_.tooltip = e
}, Blockly.Input = function(e, t, o, n) {
    this.type = e, this.name = t, this.sourceBlock_ = o, this.connection = n, this.titleRow = [], this.align = Blockly.ALIGN_LEFT, this.inline_ = !1, this.visible_ = !0, this.colour_ = {
        hue: null,
        saturation: null,
        value: null
    }
}, Blockly.Input.prototype.appendTitle = function(e, t) {
    return e || t ? (goog.isString(e) && (e = new Blockly.FieldLabel(e)), this.sourceBlock_.svg_ && e.init(this.sourceBlock_), e.name = t, e.prefixTitle && this.appendTitle(e.prefixTitle), this.titleRow.push(e), e.suffixTitle && this.appendTitle(e.suffixTitle), this.sourceBlock_.rendered && (this.sourceBlock_.render(), this.sourceBlock_.bumpNeighbours_()), this) : this
}, Blockly.Input.prototype.isVisible = function() {
    return this.visible_
}, Blockly.Input.prototype.setVisible = function(e) {
    var t = [];
    if (this.visible_ == e) return t;
    for (var o, n = (this.visible_ = e) ? "block" : "none", i = 0; o = this.titleRow[i]; i++) o.setVisible(e);
    return this.connection && (t = e ? this.connection.unhideAll() : this.connection.hideAll(), i = this.connection.targetBlock()) && (i.svg_.getRootElement().style.display = n, e || (i.rendered = !1)), t
}, Blockly.Input.prototype.setCheck = function(e) {
    if (!this.connection) throw "This input does not have a connection.";
    return this.connection.setCheck(e), this
}, Blockly.Input.prototype.setAlign = function(e) {
    return this.align = e, this.sourceBlock_.rendered && this.sourceBlock_.render(), this
}, Blockly.Input.prototype.init = function() {
    for (var e = 0; e < this.titleRow.length; e++) this.titleRow[e].init(this.sourceBlock_)
}, Blockly.Input.prototype.dispose = function() {
    for (var e, t = 0; e = this.titleRow[t]; t++) e.dispose();
    this.connection && this.connection.dispose(), this.sourceBlock_ = null
}, Blockly.Input.prototype.setInline = function(e) {
    if (void 0 === e && (e = !0), this.inline_ = e, this.type === Blockly.NEXT_STATEMENT && e) throw "Can't inline next statement";
    return this
}, Blockly.Input.prototype.isInline = function() {
    return this.type === Blockly.NEXT_STATEMENT ? !1 : this.inline_ || this.sourceBlock_.inputsInline
}, Blockly.Input.prototype.setHSV = function(e, t, o) {
    if (this.type !== Blockly.FUNCTIONAL_INPUT) throw "setColor only for functional inputs";
    return this.colour_ = {
        hue: e,
        saturation: t,
        value: o
    }, this
}, Blockly.Input.prototype.getHexColour = function() {
    return Blockly.makeColour(this.colour_.hue, this.colour_.saturation, this.colour_.value)
}, Blockly.Input.prototype.matchesBlock = function(e) {
    return e.getColour() !== this.colour_.hue || e.getSaturation() !== this.colour_.saturation || e.getValue() !== this.colour_.value ? !1 : !0
}, Blockly.Warning = function(e) {
    Blockly.Warning.superClass_.constructor.call(this, e), this.createIcon_()
}, goog.inherits(Blockly.Warning, Blockly.Icon), Blockly.Warning.prototype.text_ = "", Blockly.Warning.prototype.createIcon_ = function() {
    Blockly.Icon.prototype.createIcon_.call(this), Blockly.createSvgElement("path", {
        "class": "blocklyIconShield",
        d: "M 2,15 Q -1,15 0.5,12 L 6.5,1.7 Q 8,-1 9.5,1.7 L 15.5,12 Q 17,15 14,15 z"
    }, this.iconGroup_), this.iconMark_ = Blockly.createSvgElement("text", {
        "class": "blocklyIconMark",
        x: Blockly.Icon.RADIUS,
        y: 2 * Blockly.Icon.RADIUS - 3
    }, this.iconGroup_), this.iconMark_.appendChild(document.createTextNode("!"))
}, Blockly.Warning.prototype.textToDom_ = function(e) {
    var t = Blockly.createSvgElement("text", {
        "class": "blocklyText",
        y: Blockly.Bubble.BORDER_WIDTH
    }, null);
    e = e.split("\n");
    for (var o = 0; o < e.length; o++) {
        var n = Blockly.createSvgElement("tspan", {
                dy: "1em",
                x: Blockly.Bubble.BORDER_WIDTH
            }, t),
            i = document.createTextNode(e[o]);
        n.appendChild(i)
    }
    return t
}, Blockly.Warning.prototype.setVisible = function(e) {
    if (e != this.isVisible())
        if (e) {
            if (e = this.textToDom_(this.text_), this.bubble_ = new Blockly.Bubble(this.block_.blockSpace, e, this.block_.svg_.svgGroup_, this.iconX_, this.iconY_, null, null), Blockly.RTL) {
                if (0 <= navigator.userAgent.indexOf("MSIE") || 0 <= navigator.userAgent.indexOf("Trident")) {
                    e.style.display = "inline";
                    var t = {
                        x: e.getBBox().x,
                        y: e.getBBox().y,
                        width: e.scrollWidth,
                        height: e.scrollHeight
                    }.width
                } else t = e.getBBox().width;
                for (var o, n = 0; o = e.childNodes[n]; n++) o.setAttribute("text-anchor", "end"), o.setAttribute("x", t + Blockly.Bubble.BORDER_WIDTH)
            }
            this.updateColour(), e = this.bubble_.getBubbleSize(), this.bubble_.setBubbleSize(e.width, e.height)
        } else this.bubble_.dispose(), this.foreignObject_ = this.body_ = this.bubble_ = null
}, Blockly.Warning.prototype.bodyFocus_ = function() {
    this.bubble_.promote_()
}, Blockly.Warning.prototype.setText = function(e) {
    this.text_ = e, this.isVisible() && (this.setVisible(!1), this.setVisible(!0))
}, Blockly.Warning.prototype.dispose = function() {
    this.block_.warning = null, Blockly.Icon.prototype.dispose.call(this)
}, Blockly.uidCounter_ = 0, Blockly.Block = function(e, t, o) {
    if (this.id = ++Blockly.uidCounter_, this.htmlId = o, this.previousConnection = this.nextConnection = this.outputConnection = null, this.inputList = [], this.disabled = this.rendered = this.inputsInline = !1, this.tooltip = "", this.contextMenu = !1, this.parentBlock_ = null, this.childBlocks_ = [], this.userVisible_ = this.editable_ = this.movable_ = this.deletable_ = !0, this.currentlyHidden_ = this.dragging_ = this.collapsed_ = this.nextConnectionDisabled_ = !1, this.canDisconnectFromParent_ = !0, this.editLabel_ = null, this.blockSpace = e, this.isInFlyout = e.isFlyout, this.colourSaturation_ = .45, this.colourValue_ = .65, this.fillPattern_ = null, this.blockSvgClass_ = Blockly.BlockSvg, this.customOptions_ = {}, this.beforeDispose = null, this.setRenderBlockSpace(e), t) {
        if (this.type = t, e = Blockly.Blocks[t], !e) throw 'Error: "' + t + '" is an unknown language block.';
        goog.mixin(this, e)
    }
    goog.isFunction(this.init) && this.init(), this.shouldHideIfInMainBlockSpace && this.shouldHideIfInMainBlockSpace() && this.blockSpace === Blockly.mainBlockSpace && this.setCurrentlyHidden(!0), this.blockEvents = new goog.events.EventTarget
}, Blockly.Block.EVENTS = {
    AFTER_DISPOSED: "afterDisposed",
    AFTER_DROPPED: "afterDropped"
}, Blockly.Block.prototype.svg_ = null, Blockly.Block.prototype.mutator = null, Blockly.Block.prototype.comment = null, Blockly.Block.prototype.warning = null, Blockly.Block.prototype.init = null, Blockly.Block.prototype.onchange = null, Blockly.Block.prototype.setRenderBlockSpace = function(e) {
    this.blockSpace = e, this.blockSpace.addTopBlock(this), goog.isFunction(this.onchange) && Blockly.bindEvent_(this.blockSpace.getCanvas(), "blocklyBlockSpaceChange", this, this.onchange)
}, Blockly.Block.prototype.getIcons = function() {
    var e = [];
    return this.mutator && e.push(this.mutator), this.comment && e.push(this.comment), this.warning && e.push(this.warning), e
}, Blockly.Block.prototype.initSvg = function() {
    this.svg_ = new this.blockSvgClass_(this, this.customOptions_), this.svg_.init(), Blockly.readOnly || Blockly.bindEvent_(this.svg_.getRootElement(), "mousedown", this, this.onMouseDown_), this.setCurrentlyHidden(this.currentlyHidden_), this.moveToFrontOfMainCanvas_()
}, Blockly.Block.prototype.getSvgRoot = function() {
    return this.svg_ && this.svg_.getRootElement()
}, Blockly.Block.DRAG_MODE_NOT_DRAGGING = 0, Blockly.Block.DRAG_MODE_INSIDE_STICKY_RADIUS = 1, Blockly.Block.DRAG_MODE_FREELY_DRAGGING = 2, Blockly.Block.dragMode_ = Blockly.Block.DRAG_MODE_NOT_DRAGGING, Blockly.Block.isDragging = function() {
    return Blockly.Block.dragMode_ !== Blockly.Block.DRAG_MODE_NOT_DRAGGING
}, Blockly.Block.isFreelyDragging = function() {
    return Blockly.Block.dragMode_ === Blockly.Block.DRAG_MODE_FREELY_DRAGGING
}, Blockly.Block.onMouseUpWrapper_ = null, Blockly.Block.onMouseMoveWrapper_ = null, Blockly.Block.terminateDrag_ = function() {
    Blockly.Block.onMouseUpWrapper_ && (Blockly.unbindEvent_(Blockly.Block.onMouseUpWrapper_), Blockly.Block.onMouseUpWrapper_ = null), Blockly.Block.onMouseMoveWrapper_ && (Blockly.unbindEvent_(Blockly.Block.onMouseMoveWrapper_), Blockly.Block.onMouseMoveWrapper_ = null);
    var e = Blockly.selected;
    if (Blockly.Block.isFreelyDragging() && e) {
        e.blockSpace.clearPickedUpBlockOrigin(), e.blockSpace.stopAutoScrolling();
        var t = e.getRelativeToSurfaceXY();
        e.moveConnections_(t.x - e.startDragX, t.y - e.startDragY), delete e.draggedBubbles_, e.setDragging_(!1), e.moveToFrontOfMainCanvas_(), e.render(), goog.Timer.callOnce(e.bumpNeighbours_, Blockly.BUMP_DELAY, e), e.blockSpace.blockSpaceEditor.bumpBlocksIntoBlockSpace(), e.blockSpace.scrollIntoView(e), Blockly.fireUiEvent(window, "resize")
    }
    e ? (e.blockSpace.fireChangeEvent(), e.blockSpace.blockSpaceEditor.setCursor(Blockly.Css.Cursor.OPEN)) : Blockly.Css.setCursor(Blockly.Css.Cursor.OPEN, null), Blockly.Block.dragMode_ = Blockly.Block.DRAG_MODE_NOT_DRAGGING, e && e.blockEvents.dispatchEvent(Blockly.Block.EVENTS.AFTER_DROPPED)
}, Blockly.Block.prototype.select = function(e) {
    if (!this.svg_) throw "Block is not rendered.";
    Blockly.selected && Blockly.selected.unselect(), Blockly.selected = this, this.svg_.addSelect(), e && this.svg_.addSpotlight(), Blockly.fireUiEvent(this.blockSpace.getCanvas(), "blocklySelectChange")
}, Blockly.Block.prototype.unselect = function() {
    if (!this.svg_) throw "Block is not rendered.";
    Blockly.selected = null, this.svg_.removeSelect(), this.svg_.removeSpotlight(), Blockly.fireUiEvent(this.blockSpace.getCanvas(), "blocklySelectChange")
}, Blockly.Block.prototype.isCopyable = function() {
    return !0
}, Blockly.Block.prototype.dispose = function(e, t) {
    goog.isFunction(this.beforeDispose) && this.beforeDispose(), this.rendered = !1, this.unplug(e), t && this.svg_ && this.svg_.disposeUiEffect();
    var o = goog.bind(this.blockSpace.updateScrollableSize, this.blockSpace);
    this.blockSpace.removeTopBlock(this), this.blockSpace = null, Blockly.selected == this && (Blockly.selected = null, Blockly.BlockSpaceEditor.terminateDrag_()), Blockly.ContextMenu.currentBlock == this && Blockly.ContextMenu.hide();
    for (var n = this.childBlocks_.length - 1; n >= 0; n--) this.childBlocks_[n].dispose(!1);
    for (var i = this.getIcons(), n = 0; n < i.length; n++) i[n].dispose();
    for (n = 0; i = this.inputList[n]; n++) i.dispose();
    for (this.inputList = [], i = this.getConnections_(!0), n = 0; n < i.length; n++) {
        var r = i[n];
        r.targetConnection && r.disconnect(), i[n].dispose()
    }
    this.svg_ && (this.svg_.dispose(), this.svg_ = null), this.blockEvents.dispatchEvent(Blockly.Block.EVENTS.AFTER_DISPOSED), o()
}, Blockly.Block.prototype.unplug = function(e, t) {
    if (t = t && !!this.getParent(), this.outputConnection) this.outputConnection.targetConnection && this.setParent(null);
    else {
        var o = null;
        if (this.previousConnection && this.previousConnection.targetConnection && (o = this.previousConnection.targetConnection, this.setParent(null)), e && this.nextConnection && this.nextConnection.targetConnection) {
            var n = this.nextConnection.targetConnection;
            this.nextConnection.targetBlock().setParent(null), o && o.connect(n)
        }
    }
    t && this.moveBy(Blockly.SNAP_RADIUS * (Blockly.RTL ? -1 : 1), 2 * Blockly.SNAP_RADIUS)
}, Blockly.Block.prototype.getRelativeToSurfaceXY = function() {
    var e = 0,
        t = 0,
        o = !1;
    if (this.svg_) {
        var n = this.svg_.getRootElement();
        do o = Blockly.getRelativeXY(n), e += o.x, t += o.y, n = n.parentNode, o = n == this.blockSpace.getCanvas() || n == this.blockSpace.getDragCanvas(); while (n && !o)
    }
    return {
        x: e,
        y: t
    }
}, Blockly.Block.prototype.moveTo = function(e, t) {
    var o = this.getRelativeToSurfaceXY();
    this.svg_.getRootElement().setAttribute("transform", "translate(" + e + ", " + t + ")"), this.moveConnections_(e - o.x, t - o.y)
}, Blockly.Block.prototype.moveBy = function(e, t) {
    var o = this.getRelativeToSurfaceXY();
    this.svg_.getRootElement().setAttribute("transform", "translate(" + (o.x + e) + ", " + (o.y + t) + ")"), this.moveConnections_(e, t)
}, Blockly.Block.prototype.getBox = function() {
    var e = this.getHeightWidth(),
        t = this.getRelativeToSurfaceXY();
    return this.outputConnection && (t.x -= Blockly.BlockSvg.TAB_WIDTH), new goog.math.Box(t.y, t.x + e.width, t.y + e.height, t.x)
}, Blockly.Block.prototype.getSvgPadding = function() {
    return this.svg_ && this.svg_.getPadding()
}, Blockly.Block.prototype.getHeightWidth = function() {
    var e;
    try {
        var t, o = Blockly.ieVersion() && 10 >= Blockly.ieVersion();
        o && (t = this.getSvgRoot().style.display, this.getSvgRoot().style.display = "inline"), e = goog.object.clone(this.getSvgRoot().getBBox()), o && (this.getSvgRoot().style.display = t)
    } catch (n) {
        return {
            height: 0,
            width: 0
        }
    }
    return o = 0, Blockly.BROKEN_CONTROL_POINTS && (e.height -= 10, this.nextConnection && (e.height += 4), o = -5), 0 < e.height && (e.height -= 1), e.height = Math.max(0, e.height + (e.y - o)), e
}, Blockly.Block.prototype.onMouseDown_ = function(e) {
    if (e.preventDefault(), "inputClickTarget" === (e.target.getAttribute && e.target.getAttribute("class"))) e.stopPropagation();
    else if (document.activeElement && document.activeElement.blur && document.activeElement.blur(), !this.isInFlyout) {
        if (this.blockSpace.blockSpaceEditor.svgResize(), Blockly.BlockSpaceEditor.terminateDrag_(), this.select(), this.blockSpace.blockSpaceEditor.hideChaff(), !Blockly.isRightButton(e)) {
            if (!this.isMovable() || !this.canDisconnectFromParent()) return;
            Blockly.removeAllRanges(), this.blockSpace.blockSpaceEditor.setCursor(Blockly.Css.Cursor.CLOSED);
            var t = this.getRelativeToSurfaceXY();
            this.startDragX = t.x, this.startDragY = t.y, void 0 !== e.startDragMouseX_ && void 0 !== e.startDragMouseY_ ? (this.startDragMouseX = e.startDragMouseX_, this.startDragMouseY = e.startDragMouseY_, e.startDragMouseX_ = void 0, e.startDragMouseY_ = void 0) : (this.startDragMouseX = e.clientX, this.startDragMouseY = e.clientY), Blockly.Block.dragMode_ = Blockly.Block.DRAG_MODE_INSIDE_STICKY_RADIUS, Blockly.Block.onMouseUpWrapper_ = Blockly.bindEvent_(document, "mouseup", this, this.onMouseUp_), Blockly.Block.onMouseMoveWrapper_ = Blockly.bindEvent_(document, "mousemove", this, this.onMouseMove_), this.draggedBubbles_ = [];
            for (var o, t = this.getDescendants(), n = 0; o = t[n]; n++) {
                o = o.getIcons();
                for (var i = 0; i < o.length; i++) {
                    var r = o[i].getIconLocation();
                    r.bubble = o[i], this.draggedBubbles_.push(r)
                }
            }
        }
        e.stopPropagation()
    }
}, Blockly.Block.prototype.onMouseUp_ = function(e) {
    var t = this.blockSpace;
    Blockly.BlockSpaceEditor.terminateDrag_(), Blockly.selected && Blockly.highlightedConnection_ ? (Blockly.localConnection_.connect(Blockly.highlightedConnection_), this.svg_ && (Blockly.localConnection_.isSuperior() ? Blockly.highlightedConnection_ : Blockly.localConnection_).sourceBlock_.svg_.connectionUiEffect(), t.trashcan && t.trashcan.close()) : Blockly.selected && Blockly.selected.areBlockAndDescendantsDeletable() && t.isDeleteArea(e.clientX, e.clientY, this.startDragMouseX) && ((e = t.trashcan) && goog.Timer.callOnce(e.close, 100, e), Blockly.selected.dispose(!1, !0), Blockly.fireUiEvent(window, "resize")), Blockly.highlightedConnection_ && (Blockly.highlightedConnection_.unhighlight(), Blockly.highlightedConnection_ = null), t.hideDelete(), t.blockSpaceEditor.setCursor(Blockly.Css.Cursor.OPEN)
}, Blockly.Block.prototype.showHelp_ = function() {
    var e = goog.isFunction(this.helpUrl) ? this.helpUrl() : this.helpUrl;
    e && window.open(e)
}, Blockly.Block.prototype.duplicate_ = function() {
    var e = Blockly.Xml.blockToDom(this);
    Blockly.Xml.deleteNext(e);
    var e = Blockly.Xml.domToBlock(this.blockSpace, e),
        t = this.getRelativeToSurfaceXY();
    return t.x = Blockly.RTL ? t.x - Blockly.SNAP_RADIUS : t.x + Blockly.SNAP_RADIUS, t.y += 2 * Blockly.SNAP_RADIUS, e.moveBy(t.x, t.y), e
}, Blockly.Block.prototype.showContextMenu_ = function(e) {
    if (!Blockly.readOnly && this.contextMenu) {
        var t = this,
            o = [];
        if (this.isDeletable() && !t.isInFlyout) {
            var n = {
                text: Blockly.Msg.DUPLICATE_BLOCK,
                enabled: !0,
                callback: function() {
                    t.duplicate_()
                }
            };
            if (this.getDescendants().length > this.blockSpace.remainingCapacity() && (n.enabled = !1), o.push(n), Blockly.Comment && !this.collapsed_ && (n = {
                    enabled: !0
                }, this.comment ? (n.text = Blockly.Msg.REMOVE_COMMENT, n.callback = function() {
                    t.setCommentText(null)
                }) : (n.text = Blockly.Msg.ADD_COMMENT, n.callback = function() {
                    t.setCommentText("")
                }), o.push(n)), !this.collapsed_)
                for (n = 0; n < this.inputList.length; n++)
                    if (this.inputList[n].type == Blockly.INPUT_VALUE) {
                        n = {
                            enabled: !0
                        }, n.text = this.inputsInline ? Blockly.Msg.EXTERNAL_INPUTS : Blockly.Msg.INLINE_INPUTS, n.callback = function() {
                            t.setInputsInline(!t.inputsInline)
                        }, o.push(n);
                        break
                    }
            Blockly.collapse && (this.collapsed_ ? (n = {
                enabled: !0
            }, n.text = Blockly.Msg.EXPAND_BLOCK, n.callback = function() {
                t.setCollapsed(!1)
            }) : (n = {
                enabled: !0
            }, n.text = Blockly.Msg.COLLAPSE_BLOCK, n.callback = function() {
                t.setCollapsed(!0)
            }), o.push(n)), n = {
                text: this.disabled ? Blockly.Msg.ENABLE_BLOCK : Blockly.Msg.DISABLE_BLOCK,
                enabled: !this.getInheritedDisabled(),
                callback: function() {
                    t.setDisabled(!t.disabled)
                }
            }, o.push(n), n = this.getDescendants().length, t.nextConnection && t.nextConnection.targetConnection && (n -= this.nextConnection.targetBlock().getDescendants().length), n = {
                text: 1 == n ? Blockly.Msg.DELETE_BLOCK : Blockly.Msg.DELETE_X_BLOCKS.replace("%1", n),
                enabled: !0,
                callback: function() {
                    t.dispose(!0, !0)
                }
            }, o.push(n)
        }
        n = {
            enabled: !(goog.isFunction(this.helpUrl) ? !this.helpUrl() : !this.helpUrl)
        }, n.text = Blockly.Msg.HELP, n.callback = function() {
            t.showHelp_()
        }, o.push(n), this.customContextMenu && !t.isInFlyout && this.customContextMenu(o), Blockly.ContextMenu.show(e, o), Blockly.ContextMenu.currentBlock = this
    }
}, Blockly.Block.prototype.getConnections_ = function(e) {
    var t = [];
    if ((e || this.rendered) && (this.outputConnection && t.push(this.outputConnection), this.nextConnection && t.push(this.nextConnection), this.previousConnection && t.push(this.previousConnection), e || !this.collapsed_)) {
        e = 0;
        for (var o; o = this.inputList[e]; e++) o.connection && t.push(o.connection)
    }
    return t
}, Blockly.Block.prototype.getLeafConnections_ = function(e) {
    var t = this,
        o = [],
        n = [this.outputConnection, this.nextConnection, this.previousConnection];
    return this.inputList.forEach(function(e) {
        n.push(e.connection)
    }), n.forEach(function(n) {
        if (n) {
            var i = n.targetBlock();
            i ? i !== e && (o = o.concat(i.getLeafConnections_(t))) : o.push(n)
        }
    }), o
}, Blockly.Block.prototype.moveConnections_ = function(e, t) {
    if (this.rendered) {
        for (var o = this.getConnections_(!1), n = 0; n < o.length; n++) o[n].moveBy(e, t);
        for (o = this.getIcons(), n = 0; n < o.length; n++) o[n].computeIconLocation();
        for (n = 0; n < this.childBlocks_.length; n++) this.childBlocks_[n].moveConnections_(e, t)
    }
}, Blockly.Block.prototype.setDragging_ = function(e) {
    this.setDraggingHandleImmovable_(e, null)
}, Blockly.Block.prototype.getDragging = function() {
    return this.dragging_
}, Blockly.Block.prototype.setDraggingHandleImmovable_ = function(e, t) {
    e ? (this.dragging_ = !0, this.svg_.addDragging()) : (this.dragging_ = !1, this.svg_.removeDragging());
    for (var o = 0; o < this.childBlocks_.length; o++) {
        var n = this.childBlocks_[o];
        if (e && null !== t && !n.isMovable()) {
            t(n);
            break
        }
        n.setDraggingHandleImmovable_(e, t)
    }
}, Blockly.Block.prototype.setCanDisconnectFromParent = function(e) {
    this.canDisconnectFromParent_ = e
}, Blockly.Block.prototype.canDisconnectFromParent = function() {
    return this.canDisconnectFromParent_
}, Blockly.Block.prototype.moveToDragCanvas_ = function() {
    this.svg_ && this.blockSpace.moveElementToDragCanvas(this.svg_.getRootElement())
}, Blockly.Block.prototype.moveToFrontOfMainCanvas_ = function() {
    this.svg_ && this.blockSpace.moveElementToMainCanvas(this.svg_.getRootElement())
}, Blockly.Block.prototype.moveBlockBeingDragged_ = function(e, t) {
    Blockly.removeAllRanges();
    var o = e - this.startDragMouseX,
        n = t - this.startDragMouseY;
    if (Blockly.Block.dragMode_ == Blockly.Block.DRAG_MODE_INSIDE_STICKY_RADIUS && Math.sqrt(Math.pow(o, 2) + Math.pow(n, 2)) > Blockly.DRAG_RADIUS) {
        Blockly.Block.dragMode_ = Blockly.Block.DRAG_MODE_FREELY_DRAGGING;
        var i = this.generateReconnector_(this.previousConnection);
        this.setParent(null), this.setDraggingHandleImmovable_(!0, i), this.moveToDragCanvas_(), this.blockSpace.recordPickedUpBlockOrigin(), this.blockSpace.recordDeleteAreas()
    }
    if (Blockly.Block.dragMode_ == Blockly.Block.DRAG_MODE_FREELY_DRAGGING) {
        var i = this.startDragX + o,
            r = this.startDragY + n;
        for (this.svg_.getRootElement().setAttribute("transform", "translate(" + i + ", " + r + ")"), i = 0; i < this.draggedBubbles_.length; i++) r = this.draggedBubbles_[i], r.bubble.setIconLocation(r.x + o, r.y + n);
        for (var r = this.getLeafConnections_(null), l = null, s = null, a = Blockly.SNAP_RADIUS, i = 0; i < r.length; i++) {
            var g = r[i],
                c = g.closest(a, o, n);
            c.connection && (l = c.connection, s = g, a = c.radius)
        }
        Blockly.highlightedConnection_ && Blockly.highlightedConnection_ != l && (Blockly.highlightedConnection_.unhighlight(), Blockly.highlightedConnection_ = null, Blockly.localConnection_ = null), l && l != Blockly.highlightedConnection_ && (l.highlight(), Blockly.highlightedConnection_ = l, Blockly.localConnection_ = s), this.areBlockAndDescendantsDeletable() && this.blockSpace.isDeleteArea(e, t, this.startDragMouseX)
    }
}, Blockly.Block.prototype.onMouseMove_ = function(e) {
    "mousemove" == e.type && 1 >= e.clientX && 0 == e.clientY && 0 == e.button || (this.moveBlockBeingDragged_(e.clientX, e.clientY), this.blockSpace.panIfOverEdge(this, e.clientX, e.clientY)), e.stopPropagation()
}, Blockly.Block.prototype.generateReconnector_ = function(e) {
    var t;
    return e && e.targetConnection && (t = e.targetConnection),
        function(e) {
            e.previousConnection && (e.setParent(null), t && t.connect(e.previousConnection))
        }
}, Blockly.Block.prototype.bumpNeighbours_ = function() {
    if (!Blockly.Block.isDragging() && Blockly.BUMP_UNCONNECTED) {
        var e = this.getRootBlock();
        if (!e.isInFlyout)
            for (var t = this.getConnections_(!1), o = 0; o < t.length; o++) {
                var n = t[o];
                n.targetConnection && n.isSuperior() && n.targetBlock().bumpNeighbours_();
                for (var i = n.neighbours_(Blockly.SNAP_RADIUS), r = 0; r < i.length; r++) {
                    var l = i[r];
                    n.targetConnection && l.targetConnection || l.sourceBlock_.getRootBlock() != e && (n.isSuperior() ? l.bumpAwayFrom_(n) : n.bumpAwayFrom_(l))
                }
            }
    }
}, Blockly.Block.prototype.getParent = function() {
    return this.parentBlock_
}, Blockly.Block.prototype.getSurroundParent = function() {
    for (var e = this;;) {
        do {
            var t = e,
                e = e.getParent();
            if (!e) return null
        } while (e.nextConnection && e.nextConnection.targetBlock() == t);
        return e
    }
}, Blockly.Block.prototype.getRootBlock = function() {
    var e, t = this;
    do e = t, t = e.parentBlock_; while (t);
    return e
}, Blockly.Block.prototype.getChildren = function() {
    return this.childBlocks_
}, Blockly.Block.prototype.setParent = function(e) {
    if (this.parentBlock_) {
        for (var t, o = this.parentBlock_.childBlocks_, n = 0; t = o[n]; n++)
            if (t == this) {
                o.splice(n, 1);
                break
            }
        o = this.getRelativeToSurfaceXY(), this.moveToFrontOfMainCanvas_(), this.svg_.getRootElement().setAttribute("transform", "translate(" + o.x + ", " + o.y + ")"), this.parentBlock_ = null, this.previousConnection && this.previousConnection.targetConnection && this.previousConnection.disconnect(), this.outputConnection && this.outputConnection.targetConnection && this.outputConnection.disconnect()
    } else this.blockSpace.removeTopBlock(this);
    (this.parentBlock_ = e) ? (e.childBlocks_.push(this), o = this.getRelativeToSurfaceXY(), e.svg_ && this.svg_ && e.svg_.getRootElement().appendChild(this.svg_.getRootElement()), e = this.getRelativeToSurfaceXY(), this.moveConnections_(e.x - o.x, e.y - o.y)) : this.blockSpace.addTopBlock(this)
}, Blockly.Block.prototype.getDescendants = function() {
    for (var e, t = [this], o = 0; e = this.childBlocks_[o]; o++) t = t.concat(e.getDescendants());
    return t
}, Blockly.Block.prototype.areBlockAndDescendantsDeletable = function() {
    var e = this.childBlocks_.some(function(e) {
        return !e.areBlockAndDescendantsDeletable()
    });
    return this.isDeletable() && !e
}, Blockly.Block.prototype.isDeletable = function() {
    return this.deletable_ && !Blockly.readOnly
}, Blockly.Block.prototype.setDeletable = function(e) {
    this.deletable_ = e, this.svg_ && this.svg_.grayOut(this.shouldBeGrayedOut())
}, Blockly.Block.prototype.shouldBeGrayedOut = function() {
    return Blockly.grayOutUndeletableBlocks && !this.isDeletable() && !Blockly.readOnly
}, Blockly.Block.prototype.isMovable = function() {
    return this.movable_ && !Blockly.readOnly
}, Blockly.Block.prototype.setMovable = function(e) {
    this.movable_ = e, this.svg_ && this.svg_.updateMovable()
}, Blockly.Block.prototype.isEditable = function() {
    return this.editable_ && !Blockly.readOnly
}, Blockly.Block.prototype.setEditable = function(e) {
    this.editable_ = e;
    for (var t, o = 0; t = this.inputList[o]; o++)
        for (var n, i = 0; n = t.titleRow[i]; i++) n.updateEditable();
    for (t = this.getIcons(), o = 0; o < t.length; o++) t[o].updateEditable();
    this.editLabel_ && this.editLabel_.setVisible(e)
}, Blockly.Block.prototype.isUserVisible = function() {
    return this.userVisible_
}, Blockly.Block.prototype.setUserVisible = function(e, t) {
    (this.userVisible_ = e) ? this.svg_ && Blockly.removeClass_(this.svg_.svgGroup_, "userHidden"): this.svg_ && Blockly.addClass_(this.svg_.svgGroup_, "userHidden"), this.childBlocks_.forEach(function(o) {
        o.setUserVisible(e, t)
    }), t && e && 0 === this.childBlocks_.length && this.svg_ && this.render()
}, Blockly.Block.prototype.setNextConnectionDisabled = function(e) {
    this.nextConnectionDisabled_ = e, !0 === this.nextConnectionDisabled_ && this.setNextStatement(!1)
}, Blockly.Block.prototype.isCurrentlyBeingDragged = function() {
    return Blockly.selected === this && Blockly.Block.isFreelyDragging()
}, Blockly.Block.prototype.isCurrentlyHidden_ = function() {
    return this.currentlyHidden_
}, Blockly.Block.prototype.setCurrentlyHidden = function(e) {
    this.currentlyHidden_ = e, this.svg_ && (this.svg_.setVisible(!e), e || this.refreshRender())
}, Blockly.Block.prototype.isVisible = function() {
    var e = (!this.parentBlock_ || this.parentBlock_.isVisible()) && !this.isCurrentlyHidden_();
    return Blockly.editBlocks ? e : e && this.isUserVisible()
}, Blockly.Block.prototype.setHelpUrl = function(e) {
    this.helpUrl = e
}, Blockly.Block.prototype.getHexColour = function() {
    return Blockly.makeColour(this.getColour(), this.getSaturation(), this.getValue())
}, Blockly.Block.prototype.getColour = function() {
    return this.colourHue_
}, Blockly.Block.prototype.getSaturation = function() {
    return this.colourSaturation_
}, Blockly.Block.prototype.getFillPattern = function() {
    return this.fillPattern_
}, Blockly.Block.prototype.isFramed = function() {
    return this.blockSvgClass_ === Blockly.BlockSvgFramed
}, Blockly.Block.prototype.getValue = function() {
    return this.colourValue_
}, Blockly.Block.prototype.setColour = function(e) {
    this.colourHue_ = e, this.svg_ && this.svg_.updateColour();
    var t = this.getIcons();
    for (e = 0; e < t.length; e++) t[e].updateColour();
    if (this.rendered) {
        for (e = 0; t = this.inputList[e]; e++)
            for (var o, n = 0; o = t.titleRow[n]; n++) o.setText(null);
        this.render()
    }
}, Blockly.Block.prototype.setFillPattern = function(e) {
    this.fillPattern_ = e
}, Blockly.Block.prototype.setFramed = function(e) {
    this.blockSvgClass_ = e ? Blockly.BlockSvgFramed : Blockly.BlockSvg
}, Blockly.Block.prototype.setFunctional = function(e, t) {
    this.blockSvgClass_ = e ? Blockly.BlockSvgFunctional : Blockly.BlockSvg, this.customOptions_ = e ? t : {}
}, Blockly.Block.prototype.setHSV = function(e, t, o) {
    for (this.colourHue_ = e, this.colourSaturation_ = t, this.colourValue_ = o, this.svg_ && this.svg_.updateColour(), t = this.getIcons(), e = 0; e < t.length; e++) t[e].updateColour();
    if (this.rendered) {
        for (e = 0; t = this.inputList[e]; e++) {
            o = 0;
            for (var n; n = t.titleRow[o]; o++) n.setText(null)
        }
        this.render()
    }
}, Blockly.Block.prototype.getTitle_ = function(e) {
    for (var t, o = 0; t = this.inputList[o]; o++)
        for (var n, i = 0; n = t.titleRow[i]; i++)
            if (n.name === e) return n;
    return null
}, Blockly.Block.prototype.getTitles = function() {
    for (var e, t = [], o = 0; e = this.inputList[o]; o++)
        for (var n, i = 0; n = e.titleRow[i]; i++) t.push(n);
    return t
}, Blockly.Block.prototype.getTitleValue = function(e) {
    return (e = this.getTitle_(e)) ? e.getValue() : null
}, Blockly.Block.prototype.setTitleValue = function(e, t) {
    var o = this.getTitle_(t);
    if (!o) throw 'Title "' + t + '" not found.';
    o.setValue(e)
}, Blockly.Block.prototype.setFieldConfig = function(e, t) {
    var o = this.getTitle_(e);
    if (!o) throw 'Title "' + name + '" not found.';
    o.setConfig && o.setConfig(t)
}, Blockly.Block.prototype.setTooltip = function(e) {
    this.tooltip = e
}, Blockly.Block.prototype.setPreviousStatement = function(e, t) {
    if (this.previousConnection) {
        if (this.previousConnection.targetConnection) throw "Must disconnect previous statement before removing connection.";
        this.previousConnection.dispose(), this.previousConnection = null
    }
    if (e) {
        if (this.outputConnection) throw "Remove output connection prior to adding previous connection.";
        void 0 === t && (t = null), this.previousConnection = new Blockly.Connection(this, Blockly.PREVIOUS_STATEMENT), this.previousConnection.setCheck(t)
    }
    this.refreshRender()
}, Blockly.Block.prototype.setNextStatement = function(e, t) {
    if (this.nextConnection) {
        if (this.nextConnection.targetConnection) throw "Must disconnect next statement before removing connection.";
        this.nextConnection.dispose(), this.nextConnection = null
    }
    e && (void 0 === t && (t = null), this.nextConnection = new Blockly.Connection(this, Blockly.NEXT_STATEMENT), this.nextConnection.setCheck(t)), this.refreshRender()
}, Blockly.Block.prototype.setOutput = function(e, t) {
    if (this.outputConnection) {
        if (this.outputConnection.targetConnection) throw "Must disconnect output value before removing connection.";
        this.outputConnection.dispose(), this.outputConnection = null
    }
    if (e) {
        if (this.previousConnection) throw "Remove previous connection prior to adding output connection.";
        void 0 === t && (t = null), this.outputConnection = new Blockly.Connection(this, Blockly.OUTPUT_VALUE), this.outputConnection.setCheck(t)
    }
    this.refreshRender()
}, Blockly.Block.prototype.refreshRender = function() {
    this.rendered && (this.render(), this.bumpNeighbours_())
}, Blockly.Block.prototype.setFunctionalOutput = function(e, t) {
    if (this.previousConnection) {
        if (this.previousConnection.targetConnection) throw "Must disconnect output value before removing connection.";
        this.previousConnection.dispose(), this.previousConnection = null
    }
    if (e) {
        if (this.previousConnection) throw "Remove previous connection prior to adding output connection.";
        void 0 === t && (t = null), this.previousConnection = new Blockly.Connection(this, Blockly.FUNCTIONAL_OUTPUT), this.previousConnection.setCheck(t)
    }
    this.refreshRender()
}, Blockly.Block.prototype.changeFunctionalOutput = function(e) {
    this.setHSV.apply(this, Blockly.FunctionalTypeColors[e]), this.previousConnection = this.previousConnection || new Blockly.Connection(this, Blockly.FUNCTIONAL_OUTPUT), this.previousConnection.setCheck(e), this.refreshRender()
}, Blockly.Block.prototype.setInputsInline = function(e) {
    this.inputsInline = e, this.rendered && (this.render(), this.bumpNeighbours_(), this.blockSpace.fireChangeEvent())
}, Blockly.Block.prototype.setDisabled = function(e) {
    this.disabled != e && (this.disabled = e, this.svg_.updateDisabled(), this.blockSpace.fireChangeEvent())
}, Blockly.Block.prototype.getInheritedDisabled = function() {
    for (var e = this;;) {
        if (e = e.getSurroundParent(), !e) return !1;
        if (e.disabled) return !0
    }
}, Blockly.Block.prototype.isCollapsed = function() {
    return this.collapsed_
}, Blockly.Block.prototype.setCollapsed = function(e) {
    if (this.collapsed_ != e) {
        this.collapsed_ = e;
        for (var t, o = [], n = 0; t = this.inputList[n]; n++) o = o.concat(t.setVisible(!e));
        if (e) {
            for (e = this.getIcons(), n = 0; n < e.length; n++) e[n].setVisible(!1);
            n = this.toString(Blockly.COLLAPSE_CHARS), this.appendDummyInput("_TEMP_COLLAPSED_INPUT").appendTitle(n)
        } else this.removeInput("_TEMP_COLLAPSED_INPUT");
        if (o.length || (o[0] = this), this.rendered) {
            for (n = 0; e = o[n]; n++) e.render();
            this.bumpNeighbours_()
        }
    }
}, Blockly.Block.prototype.toString = function(e) {
    for (var t, o = [], n = 0; t = this.inputList[n]; n++) {
        for (var i, r = 0; i = t.titleRow[r]; r++) o.push(i.getText());
        t.connection && o.push((t = t.connection.targetBlock()) ? t.toString() : "?")
    }
    return o = goog.string.trim(o.join(" ")) || "???", e && (o = goog.string.truncate(o, e)), o
}, Blockly.Block.prototype.appendValueInput = function(e) {
    return this.appendInput_(Blockly.INPUT_VALUE, e)
}, Blockly.Block.prototype.appendStatementInput = function(e) {
    return this.appendInput_(Blockly.NEXT_STATEMENT, e)
}, Blockly.Block.prototype.appendDummyInput = function(e) {
    return this.appendInput_(Blockly.DUMMY_INPUT, e || "")
}, Blockly.Block.prototype.appendFunctionalInput = function(e) {
    return this.appendInput_(Blockly.FUNCTIONAL_INPUT, e)
}, Blockly.Block.prototype.interpolateMsg = function(e) {
    goog.asserts.assertString(e);
    var t = arguments.length - 1;
    goog.asserts.assertNumber(t);
    for (var o = e.split(/(%\d)/), n = 0; n < o.length; n += 2) {
        var i = goog.string.trim(o[n]),
            r = o[n + 1];
        if (r) {
            var l = window.parseInt(r.charAt(1), 10),
                s = arguments[l];
            goog.asserts.assertArray(s, 'Message symbol "%s" is out of range.', r), this.appendValueInput(s[0]).setCheck(s[1]).setAlign(s[2]).appendTitle(i), arguments[l] = null
        } else i && this.appendDummyInput().setAlign(t).appendTitle(i)
    }
    for (n = 1; n < arguments.length - 1; n++) goog.asserts.assert(null === arguments[n], 'Input "%%s" not used in message: "%s"', n, e);
    this.setInputsInline(!e.match(/%1\s*$/))
}, Blockly.Block.prototype.appendInput_ = function(e, t) {
    var o = null;
    return (e === Blockly.INPUT_VALUE || e === Blockly.NEXT_STATEMENT || e === Blockly.FUNCTIONAL_INPUT) && (o = new Blockly.Connection(this, e)), o = new Blockly.Input(e, t, this, o), this.inputList.push(o), this.rendered && (this.render(), this.bumpNeighbours_()), o
}, Blockly.Block.prototype.moveInputBefore = function(e, t) {
    if (e == t) throw "Can't move \"" + e + '" to itself.';
    for (var o, n = -1, i = -1, r = 0; o = this.inputList[r]; r++)
        if (o.name == e) {
            if (n = r, -1 != i) break
        } else if (o.name == t && (i = r, -1 != n)) break;
    if (-1 == n) throw 'Named input "' + e + '" not found.';
    if (-1 == i) throw 'Reference input "' + e + '" not found.';
    this.inputList.splice(n, 1), i > n && i--, this.inputList.splice(i, 0, o), this.rendered && (this.render(), this.bumpNeighbours_())
}, Blockly.Block.prototype.removeInput = function(e, t) {
    for (var o, n = 0; o = this.inputList[n]; n++)
        if (o.name == e) return o.connection && o.connection.targetConnection && o.connection.targetBlock().setParent(null), o.dispose(), this.inputList.splice(n, 1), void(this.rendered && (this.render(), this.bumpNeighbours_()));
    t || goog.asserts.fail('Input "%s" not found.', e)
}, Blockly.Block.prototype.getInput = function(e) {
    for (var t, o = 0; t = this.inputList[o]; o++)
        if (t.name == e) return t;
    return null
}, Blockly.Block.prototype.getInputTargetBlock = function(e) {
    return (e = this.getInput(e)) && e.connection && e.connection.targetBlock()
}, Blockly.Block.prototype.attachBlockToInputName = function(e, t) {
    var o = this.getInput(t);
    if (!o || !o.connection) throw "Block has no input named " + name;
    e.previousConnection.connect(o.connection)
}, Blockly.Block.prototype.setMutator = function(e) {
    this.mutator && this.mutator !== e && this.mutator.dispose(), e && (e.block_ = this, this.mutator = e, this.svg_ && e.createIcon())
}, Blockly.Block.prototype.getCommentText = function() {
    return this.comment ? this.comment.getText().replace(/\s+$/, "").replace(/ +\n/g, "\n") : ""
}, Blockly.Block.prototype.setCommentText = function(e) {
    if (!Blockly.Comment) throw "Comments not supported.";
    var t = !1;
    goog.isString(e) ? (this.comment || (this.comment = new Blockly.Comment(this), t = !0), this.comment.setText(e)) : this.comment && (this.comment.dispose(), t = !0), this.rendered && (this.render(), t && this.bumpNeighbours_())
}, Blockly.Block.prototype.setWarningText = function(e) {
    if (!Blockly.Warning) throw "Warnings not supported.";
    this.isInFlyout && (e = null);
    var t = !1;
    goog.isString(e) ? (this.warning || (this.warning = new Blockly.Warning(this), t = !0), this.warning.setText(e)) : this.warning && (this.warning.dispose(), t = !0), t && this.rendered && (this.render(), this.bumpNeighbours_())
}, Blockly.Block.prototype.svgInitialized = function() {
    return !!this.svg_
}, Blockly.Block.prototype.render = function() {
    if (!this.svg_) throw "Uninitialized block cannot be rendered.  Call block.initSvg()";
    this.svg_.render()
}, Blockly.Block.prototype.getSvgRenderer = function() {
    return this.svg_
}, Blockly.Block.prototype.getRootBlock = function() {
    for (var e, t = this; t;) e = t, t = t.getParent();
    return e
}, Blockly.Block.prototype.hasUnfilledFunctionalInput = function() {
    return this.inputList.some(function(e) {
        return e.type === Blockly.FUNCTIONAL_INPUT && e.connection && !e.connection.targetBlock()
    })
}, Blockly.Flyout = function(e, t) {
    var o = this;
    this.blockSpaceEditor_ = e, this.blockSpace_ = new Blockly.BlockSpace(e, function() {
        return o.getMetrics_()
    }, function(e) {
        return o.setMetrics_(e)
    }), this.blockSpace_.isFlyout = !0, this.static_ = t, this.changeWrapper_ = null, this.height_ = this.width_ = 0, this.buttons_ = [], this.listeners_ = [], this.enabled_ = !0
}, Blockly.Flyout.prototype.autoClose = !0, Blockly.Flyout.prototype.CORNER_RADIUS = 8, Blockly.Flyout.prototype.onResizeWrapper_ = null, Blockly.Flyout.prototype.createDom = function(e) {
    return this.svgGroup_ = Blockly.createSvgElement("g", {
        "class": "svgFlyoutGroup"
    }, null), this.svgBackground_ = Blockly.createSvgElement("path", {
        "class": "blocklyFlyoutBackground"
    }, this.svgGroup_), this.svgGroup_.appendChild(this.blockSpace_.createDom()), e || (this.trashcan = new Blockly.Trashcan(this), this.svgTrashcan_ = this.trashcan.createDom(), this.svgTrashcan_.setAttribute("style", "display: none; pointer-events: none"), this.svgTrashcan_.setAttribute("transform", "translate(0, 20)"), this.svgGroup_.appendChild(this.svgTrashcan_)), this.svgGroup_
}, Blockly.Flyout.prototype.dispose = function() {
    this.hide(), this.onResizeWrapper_ && (Blockly.unbindEvent_(this.onResizeWrapper_), this.onResizeWrapper_ = null), this.changeWrapper_ && (Blockly.unbindEvent_(this.changeWrapper_), this.changeWrapper_ = null), this.blockSpace_ = null, this.svgGroup_ && (goog.dom.removeNode(this.svgGroup_), this.svgGroup_ = null), this.targetBlockSpace_ = this.svgBackground_ = null
}, Blockly.Flyout.prototype.getMetrics_ = function() {
    if (!this.isVisible()) return null;
    var e = this.height_ - 2 * this.CORNER_RADIUS,
        t = this.width_;
    try {
        if (Blockly.isMsie() || Blockly.isTrident()) {
            this.blockSpace_.getCanvas().style.display = "inline";
            var o = {
                x: this.blockSpace_.getCanvas().getBBox().x,
                y: this.blockSpace_.getCanvas().getBBox().y,
                width: this.blockSpace_.getCanvas().scrollWidth,
                height: this.blockSpace_.getCanvas().scrollHeight
            }
        } else o = this.blockSpace_.getCanvas().getBBox()
    } catch (n) {
        o = {
            height: 0,
            y: 0
        }
    }
    return {
        viewHeight: e,
        viewWidth: t,
        contentHeight: o.height + o.y,
        viewTop: this.blockSpace_.getScrollOffsetY(),
        contentTop: 0,
        absoluteTop: this.CORNER_RADIUS,
        absoluteLeft: 0
    }
}, Blockly.Flyout.prototype.getHeight = function() {
    return this.height_
}, Blockly.Flyout.prototype.setMetrics_ = function(e) {
    var t = this.getMetrics_();
    goog.isNumber(e.y) && (this.blockSpace_.yOffsetFromView = -t.contentHeight * e.y - t.contentTop), e = this.blockSpace_.yOffsetFromView + t.absoluteTop, this.blockSpace_.getCanvas().setAttribute("transform", "translate(0," + e + ")"), this.blockSpace_.getDragCanvas().setAttribute("transform", "translate(0," + e + ")")
}, Blockly.Flyout.prototype.init = function(e, t) {
    this.targetBlockSpace_ = e, t && (this.blockSpace_.scrollbarPair = new Blockly.ScrollbarPair(this.blockSpace_, !1, !0)), this.hide(), this.onResizeWrapper_ = Blockly.bindEvent_(window, goog.events.EventType.RESIZE, this, this.position_), this.position_(), this.changeWrapper_ = Blockly.bindEvent_(this.targetBlockSpace_.getCanvas(), "blocklyBlockSpaceChange", this, this.filterForCapacity_)
}, Blockly.Flyout.prototype.position_ = function() {
    if (this.isVisible()) {
        var e = this.targetBlockSpace_.customFlyoutMetrics_ ? this.targetBlockSpace_.customFlyoutMetrics_() : this.targetBlockSpace_.getMetrics();
        if (e) {
            var t = this.width_ - this.CORNER_RADIUS;
            Blockly.RTL && (t *= -1);
            var o = ["M " + (Blockly.RTL ? this.width_ : 0) + ",0"];
            o.push("h", t), o.push("a", this.CORNER_RADIUS, this.CORNER_RADIUS, 0, 0, Blockly.RTL ? 0 : 1, Blockly.RTL ? -this.CORNER_RADIUS : this.CORNER_RADIUS, this.CORNER_RADIUS), o.push("v", Math.max(0, e.viewHeight - 2 * this.CORNER_RADIUS)), o.push("a", this.CORNER_RADIUS, this.CORNER_RADIUS, 0, 0, Blockly.RTL ? 0 : 1, Blockly.RTL ? this.CORNER_RADIUS : -this.CORNER_RADIUS, this.CORNER_RADIUS), o.push("h", -t), o.push("z"), this.svgBackground_.setAttribute("d", o.join(" ")), t = e.absoluteLeft, o = e.absoluteTop, Blockly.RTL ? (t = this.static_ ? 0 : -this.width_, t += e.viewWidth) : this.static_ && (t -= this.width_), this.svgGroup_.setAttribute("transform", "translate(" + t + "," + o + ")"), this.height_ = e.viewHeight, this.blockSpace_.updateScrollableSize(), this.svgTrashcan_ && (e = this.svgGroup_.getBoundingClientRect().width, e = Math.round(e / 2 - 35), this.svgTrashcan_.setAttribute("transform", "translate(" + e + ", 20)"))
        }
    }
}, Blockly.Flyout.prototype.isVisible = function() {
    return "block" == this.svgGroup_.style.display
}, Blockly.Flyout.prototype.hide = function(e) {
    if (this.isVisible()) {
        this.svgGroup_.style.display = "none", this.blockSpace_.unbindBeginPanDragHandler();
        for (var t, o = 0; t = this.listeners_[o]; o++) Blockly.unbindEvent_(t);
        for (this.listeners_.splice(0), this.reflowWrapper_ && (Blockly.unbindEvent_(this.reflowWrapper_), this.reflowWrapper_ = null), this.blockSpace_.getTopBlocks(!1).forEach(function(t) {
                t !== e && t.dispose(!1, !1)
            }), o = 0; t = this.buttons_[o]; o++) goog.dom.removeNode(t);
        goog.dom.removeNode(goog.dom.getElementByClass("createFunction", this.blockSpace_.svgGroup_)), this.buttons_.splice(0)
    }
}, Blockly.Flyout.prototype.layoutBlock_ = function(e, t, o, n) {
    n = e.getHeightWidth(), e.moveBy(t.x, t.y), t.y += n.height + o
}, Blockly.Flyout.prototype.show = function(e) {
    this.hide(), this.svgGroup_.style.display = "block";
    var t = this.CORNER_RADIUS,
        o = Blockly.RTL ? this.width_ : t + Blockly.BlockSvg.TAB_WIDTH,
        n = {
            x: o,
            y: t
        };
    this.blockSpace_.bindBeginPanDragHandler(this.svgBackground_), this.blockSpace_.bindScrollOnWheelHandler(this.svgGroup_);
    var i = [],
        r = [];
    this.minFlyoutWidth_ = 0;
    var l = e && e[0];
    if (l === Blockly.Variables.NAME_TYPE) {
        for (var s, l = 1; s = e[l]; l++) s.tagName && "BLOCK" === s.tagName.toUpperCase() && (i.push(Blockly.Xml.domToBlock(this.blockSpace_, s)), r.push(3 * t));
        Blockly.Variables.flyoutCategory(i, r, t, this.blockSpace_)
    } else if (l === Blockly.Procedures.NAME_TYPE) Blockly.functionEditor && !Blockly.functionEditor.isOpen() && this.addButtonToFlyout_(n, Blockly.Msg.FUNCTION_CREATE, this.createFunction_), Blockly.Procedures.flyoutCategory(i, r, t, this.blockSpace_, function(e) {
        return !e.isFunctionalVariable
    });
    else if (l === Blockly.Procedures.NAME_TYPE_FUNCTIONAL_VARIABLE) Blockly.functionEditor && !Blockly.functionEditor.isOpen() && this.addButtonToFlyout_(n, Blockly.Msg.FUNCTIONAL_VARIABLE_CREATE, this.createFunctionalVariable_), Blockly.Procedures.flyoutCategory(i, r, t, this.blockSpace_, function(e) {
        return e.isFunctionalVariable
    });
    else
        for (l = 0; s = e[l]; l++) s.tagName && "BLOCK" === s.tagName.toUpperCase() && (i.push(Blockly.Xml.domToBlock(this.blockSpace_, s)), r.push(3 * t));
    for (l = 0; e = i[l]; l++) {
        t = e.getDescendants(), s = 0;
        for (var a; a = t[s]; s++) a.isInFlyout = !0, a.setCommentText(null);
        e.render(), this.layoutBlock_(e, n, r[l], o), t = Blockly.createSvgElement("rect", {
            "fill-opacity": 0
        }, null), this.blockSpace_.getCanvas().insertBefore(t, e.getSvgRoot()), e.flyoutRect_ = t, this.buttons_[l] = t, s = e.getSvgRoot(), this.listeners_.push(this.autoClose ? Blockly.bindEvent_(s, "mousedown", null, this.createBlockFunc_(e)) : Blockly.bindEvent_(s, "mousedown", null, this.blockMouseDown_(e))), this.listeners_.push(Blockly.bindEvent_(s, "mouseover", e.svg_, e.svg_.addSelectNoMove)), this.listeners_.push(Blockly.bindEvent_(s, "mouseout", e.svg_, e.svg_.removeSelect)), this.listeners_.push(Blockly.bindEvent_(t, "mousedown", null, this.createBlockFunc_(e))), this.listeners_.push(Blockly.bindEvent_(t, "mouseover", e.svg_, e.svg_.addSelectNoMove)), this.listeners_.push(Blockly.bindEvent_(t, "mouseout", e.svg_, e.svg_.removeSelect))
    }
    this.width_ = 0, this.reflow(), this.filterForCapacity_(), Blockly.fireUiEvent(window, "resize"), this.reflowWrapper_ = Blockly.bindEvent_(this.blockSpace_.getCanvas(), "blocklyBlockSpaceChange", this, this.reflow), this.blockSpace_.fireChangeEvent()
}, Blockly.Flyout.prototype.addButtonToFlyout_ = function(e, t, o) {
    var n = Blockly.createSvgElement("g", {
            "class": "createFunction"
        }, this.blockSpace_.svgGroup_),
        i = Blockly.createSvgElement("rect", {
            rx: 5,
            ry: 5,
            fill: "orange",
            stroke: "white"
        }, n),
        r = Blockly.createSvgElement("text", {
            x: 5,
            y: 5,
            "class": "blocklyText"
        }, n);
    r.textContent = t, t = r.getBoundingClientRect(), this.minFlyoutWidth_ = t.width + 10, i.setAttribute("width", t.width + 10), i.setAttribute("height", t.height + 10), i.setAttribute("y", -t.height + 5 - 1), n.setAttribute("transform", "translate(17, 25)"), Blockly.bindEvent_(n, "mousedown", this, o), e.y += 40
}, Blockly.Flyout.prototype.reflow = function() {
    for (var e, t = this.minFlyoutWidth_ || 0, o = this.CORNER_RADIUS, n = this.blockSpace_.getTopBlocks(!1), i = 0; e = n[i]; i++) var r = e.getHeightWidth(),
        t = Math.max(t, r.width);
    if (t += o + Blockly.BlockSvg.TAB_WIDTH + o / 2 + Blockly.Scrollbar.scrollbarThickness, this.width_ != t) {
        for (i = 0; e = n[i]; i++) {
            var r = e.getHeightWidth(),
                l = e.getRelativeToSurfaceXY();
            if (Blockly.RTL) {
                var s = t - o - Blockly.BlockSvg.TAB_WIDTH - l.x;
                e.moveBy(s, 0), l.x += s
            }
            e.flyoutRect_ && (e.flyoutRect_.setAttribute("width", r.width), e.flyoutRect_.setAttribute("height", r.height), e.flyoutRect_.setAttribute("x", Blockly.RTL ? l.x - r.width : l.x), e.flyoutRect_.setAttribute("y", l.y))
        }
        this.width_ = t, Blockly.fireUiEvent(window, "resize")
    }
}, Blockly.Flyout.prototype.blockMouseDown_ = function(e) {
    var t = this;
    return function(o) {
        t.enabled_ && (Blockly.BlockSpaceEditor.terminateDrag_(), t.blockSpace_.blockSpaceEditor.hideChaff(), Blockly.isRightButton(o) || (Blockly.removeAllRanges(), t.blockSpace_.blockSpaceEditor.setCursor(Blockly.Css.Cursor.CLOSED), Blockly.Flyout.startDragMouseX_ = o.clientX, Blockly.Flyout.startDragMouseY_ = o.clientY, Blockly.Flyout.startBlock_ = e, Blockly.Flyout.startFlyout_ = t, Blockly.Flyout.onMouseUpWrapper_ = Blockly.bindEvent_(document, "mouseup", this, Blockly.BlockSpaceEditor.terminateDrag_), Blockly.Flyout.onMouseMoveWrapper_ = Blockly.bindEvent_(document, "mousemove", this, t.onMouseMove_)), o.stopPropagation())
    }
}, Blockly.Flyout.prototype.onMouseMove_ = function(e) {
    if ("mousemove" == e.type && 1 >= e.clientX && 0 == e.clientY && 0 == e.button) e.stopPropagation();
    else {
        Blockly.removeAllRanges();
        var t = e.clientY - Blockly.Flyout.startDragMouseY_;
        Math.sqrt(Math.pow(e.clientX - Blockly.Flyout.startDragMouseX_, 2) + Math.pow(t, 2)) > Blockly.DRAG_RADIUS && (e.startDragMouseX_ = Blockly.Flyout.startDragMouseX_, e.startDragMouseY_ = Blockly.Flyout.startDragMouseY_, Blockly.Flyout.startFlyout_.createBlockFunc_(Blockly.Flyout.startBlock_)(e))
    }
}, Blockly.Flyout.prototype.createFunction_ = function() {
    Blockly.functionEditor.openWithNewFunction()
}, Blockly.Flyout.prototype.createFunctionalVariable_ = function() {
    Blockly.contractEditor.openWithNewVariable()
}, Blockly.Flyout.prototype.createBlockFunc_ = function(e) {
    var t = this;
    return function(o) {
        if (t.enabled_ && !Blockly.isRightButton(o) && !e.disabled) {
            var n = Blockly.Xml.blockToDom(e),
                n = Blockly.Xml.domToBlock(t.targetBlockSpace_, n),
                i = e.getSvgRoot();
            if (!i) throw "originBlock is not rendered.";
            var i = Blockly.getSvgXY_(i, e.blockSpace.blockSpaceEditor.svg_),
                r = n.getSvgRoot();
            if (!r) throw "block is not rendered.";
            r = Blockly.getSvgXY_(r, n.blockSpace.blockSpaceEditor.svg_), n.moveBy(i.x - r.x, i.y - r.y), t.autoClose ? (t.hide(e), n.blockEvents.listenOnce(Blockly.Block.EVENTS.AFTER_DROPPED, function() {
                e.dispose(!1, !1)
            })) : t.filterForCapacity_(), n.onMouseDown_(o)
        }
    }
}, Blockly.Flyout.prototype.filterForCapacity_ = function() {
    for (var e, t = this.targetBlockSpace_.remainingCapacity(), o = this.blockSpace_.getTopBlocks(!1), n = 0; e = o[n]; n++) {
        var i = e.getDescendants().length > t;
        e.setDisabled(i)
    }
}, Blockly.Flyout.terminateDrag_ = function() {
    Blockly.Flyout.onMouseUpWrapper_ && (Blockly.unbindEvent_(Blockly.Flyout.onMouseUpWrapper_), Blockly.Flyout.onMouseUpWrapper_ = null), Blockly.Flyout.onMouseMoveWrapper_ && (Blockly.unbindEvent_(Blockly.Flyout.onMouseMoveWrapper_), Blockly.Flyout.onMouseMoveWrapper_ = null), Blockly.Flyout.startDragMouseX_ = 0, Blockly.Flyout.startDragMouseY_ = 0, Blockly.Flyout.startBlock_ = null, Blockly.Flyout.startFlyout_ = null
}, Blockly.Flyout.prototype.setEnabled = function(e) {
    this.enabled_ = e
}, Blockly.Flyout.prototype.getRect = function() {
    var e = Blockly.getSvgXY_(this.svgGroup_).x;
    return Blockly.RTL || (e -= 1e7), new goog.math.Rect(e, -1e7, 1e7 + this.width_, this.height_ + 2e7)
}, goog.structs = {}, goog.structs.getCount = function(e) {
    return "function" == typeof e.getCount ? e.getCount() : goog.isArrayLike(e) || goog.isString(e) ? e.length : goog.object.getCount(e)
}, goog.structs.getValues = function(e) {
    if ("function" == typeof e.getValues) return e.getValues();
    if (goog.isString(e)) return e.split("");
    if (goog.isArrayLike(e)) {
        for (var t = [], o = e.length, n = 0; o > n; n++) t.push(e[n]);
        return t
    }
    return goog.object.getValues(e)
}, goog.structs.getKeys = function(e) {
    if ("function" == typeof e.getKeys) return e.getKeys();
    if ("function" != typeof e.getValues) {
        if (goog.isArrayLike(e) || goog.isString(e)) {
            var t = [];
            e = e.length;
            for (var o = 0; e > o; o++) t.push(o);
            return t
        }
        return goog.object.getKeys(e)
    }
}, goog.structs.contains = function(e, t) {
    return "function" == typeof e.contains ? e.contains(t) : "function" == typeof e.containsValue ? e.containsValue(t) : goog.isArrayLike(e) || goog.isString(e) ? goog.array.contains(e, t) : goog.object.containsValue(e, t)
}, goog.structs.isEmpty = function(e) {
    return "function" == typeof e.isEmpty ? e.isEmpty() : goog.isArrayLike(e) || goog.isString(e) ? goog.array.isEmpty(e) : goog.object.isEmpty(e)
}, goog.structs.clear = function(e) {
    "function" == typeof e.clear ? e.clear() : goog.isArrayLike(e) ? goog.array.clear(e) : goog.object.clear(e)
}, goog.structs.forEach = function(e, t, o) {
    if ("function" == typeof e.forEach) e.forEach(t, o);
    else if (goog.isArrayLike(e) || goog.isString(e)) goog.array.forEach(e, t, o);
    else
        for (var n = goog.structs.getKeys(e), i = goog.structs.getValues(e), r = i.length, l = 0; r > l; l++) t.call(o, i[l], n && n[l], e)
}, goog.structs.filter = function(e, t, o) {
    if ("function" == typeof e.filter) return e.filter(t, o);
    if (goog.isArrayLike(e) || goog.isString(e)) return goog.array.filter(e, t, o);
    var n, i = goog.structs.getKeys(e),
        r = goog.structs.getValues(e),
        l = r.length;
    if (i) {
        n = {};
        for (var s = 0; l > s; s++) t.call(o, r[s], i[s], e) && (n[i[s]] = r[s])
    } else
        for (n = [], s = 0; l > s; s++) t.call(o, r[s], void 0, e) && n.push(r[s]);
    return n
}, goog.structs.map = function(e, t, o) {
    if ("function" == typeof e.map) return e.map(t, o);
    if (goog.isArrayLike(e) || goog.isString(e)) return goog.array.map(e, t, o);
    var n, i = goog.structs.getKeys(e),
        r = goog.structs.getValues(e),
        l = r.length;
    if (i) {
        n = {};
        for (var s = 0; l > s; s++) n[i[s]] = t.call(o, r[s], i[s], e)
    } else
        for (n = [], s = 0; l > s; s++) n[s] = t.call(o, r[s], void 0, e);
    return n
}, goog.structs.some = function(e, t, o) {
    if ("function" == typeof e.some) return e.some(t, o);
    if (goog.isArrayLike(e) || goog.isString(e)) return goog.array.some(e, t, o);
    for (var n = goog.structs.getKeys(e), i = goog.structs.getValues(e), r = i.length, l = 0; r > l; l++)
        if (t.call(o, i[l], n && n[l], e)) return !0;
    return !1
}, goog.structs.every = function(e, t, o) {
    if ("function" == typeof e.every) return e.every(t, o);
    if (goog.isArrayLike(e) || goog.isString(e)) return goog.array.every(e, t, o);
    for (var n = goog.structs.getKeys(e), i = goog.structs.getValues(e), r = i.length, l = 0; r > l; l++)
        if (!t.call(o, i[l], n && n[l], e)) return !1;
    return !0
}, goog.structs.Trie = function(e) {
    this.value_ = void 0, this.childNodes_ = {}, e && this.setAll(e)
}, goog.structs.Trie.prototype.set = function(e, t) {
    this.setOrAdd_(e, t, !1)
}, goog.structs.Trie.prototype.add = function(e, t) {
    this.setOrAdd_(e, t, !0)
}, goog.structs.Trie.prototype.setOrAdd_ = function(e, t, o) {
    for (var n = this, i = 0; i < e.length; i++) {
        var r = e.charAt(i);
        n.childNodes_[r] || (n.childNodes_[r] = new goog.structs.Trie), n = n.childNodes_[r]
    }
    if (o && void 0 !== n.value_) throw Error('The collection already contains the key "' + e + '"');
    n.value_ = t
}, goog.structs.Trie.prototype.setAll = function(e) {
    var t = goog.structs.getKeys(e);
    e = goog.structs.getValues(e);
    for (var o = 0; o < t.length; o++) this.set(t[o], e[o])
}, goog.structs.Trie.prototype.getChildNode_ = function(e) {
    for (var t = this, o = 0; o < e.length; o++) {
        var n = e.charAt(o),
            t = t.childNodes_[n];
        if (!t) return
    }
    return t
}, goog.structs.Trie.prototype.get = function(e) {
    return (e = this.getChildNode_(e)) ? e.value_ : void 0
}, goog.structs.Trie.prototype.getKeyAndPrefixes = function(e, t) {
    var o = this,
        n = {},
        i = t || 0;
    for (void 0 !== o.value_ && (n[i] = o.value_); i < e.length; i++) {
        var r = e.charAt(i);
        if (!(r in o.childNodes_)) break;
        o = o.childNodes_[r], void 0 !== o.value_ && (n[i] = o.value_)
    }
    return n
}, goog.structs.Trie.prototype.getValues = function() {
    var e = [];
    return this.getValuesInternal_(e), e
}, goog.structs.Trie.prototype.getValuesInternal_ = function(e) {
    void 0 !== this.value_ && e.push(this.value_);
    for (var t in this.childNodes_) this.childNodes_[t].getValuesInternal_(e)
}, goog.structs.Trie.prototype.getKeys = function(e) {
    var t = [];
    if (e) {
        for (var o = this, n = 0; n < e.length; n++) {
            var i = e.charAt(n);
            if (!o.childNodes_[i]) return [];
            o = o.childNodes_[i]
        }
        o.getKeysInternal_(e, t)
    } else this.getKeysInternal_("", t);
    return t
}, goog.structs.Trie.prototype.getKeysInternal_ = function(e, t) {
    void 0 !== this.value_ && t.push(e);
    for (var o in this.childNodes_) this.childNodes_[o].getKeysInternal_(e + o, t)
}, goog.structs.Trie.prototype.containsKey = function(e) {
    return void 0 !== this.get(e)
}, goog.structs.Trie.prototype.containsPrefix = function(e) {
    return 0 == e.length ? !this.isEmpty() : !!this.getChildNode_(e)
}, goog.structs.Trie.prototype.containsValue = function(e) {
    if (this.value_ === e) return !0;
    for (var t in this.childNodes_)
        if (this.childNodes_[t].containsValue(e)) return !0;
    return !1
}, goog.structs.Trie.prototype.clear = function() {
    this.childNodes_ = {}, this.value_ = void 0
}, goog.structs.Trie.prototype.remove = function(e) {
    for (var t = this, o = [], n = 0; n < e.length; n++) {
        var i = e.charAt(n);
        if (!t.childNodes_[i]) throw Error('The collection does not have the key "' + e + '"');
        o.push([t, i]), t = t.childNodes_[i]
    }
    for (e = t.value_, delete t.value_; 0 < o.length && (i = o.pop(), t = i[0], i = i[1], t.childNodes_[i].isEmpty());) delete t.childNodes_[i];
    return e
}, goog.structs.Trie.prototype.clone = function() {
    return new goog.structs.Trie(this)
}, goog.structs.Trie.prototype.getCount = function() {
    return goog.structs.getCount(this.getValues())
}, goog.structs.Trie.prototype.isEmpty = function() {
    return void 0 === this.value_ && goog.object.isEmpty(this.childNodes_)
}, goog.ui.tree.TypeAhead = function() {
    this.nodeMap_ = new goog.structs.Trie
}, goog.ui.tree.TypeAhead.prototype.buffer_ = "", goog.ui.tree.TypeAhead.prototype.matchingLabels_ = null, goog.ui.tree.TypeAhead.prototype.matchingNodes_ = null, goog.ui.tree.TypeAhead.prototype.matchingLabelIndex_ = 0, goog.ui.tree.TypeAhead.prototype.matchingNodeIndex_ = 0, goog.ui.tree.TypeAhead.Offset = {
    DOWN: 1,
    UP: -1
}, goog.ui.tree.TypeAhead.prototype.handleNavigation = function(e) {
    var t = !1;
    switch (e.keyCode) {
        case goog.events.KeyCodes.DOWN:
        case goog.events.KeyCodes.UP:
            e.ctrlKey && (this.jumpTo_(e.keyCode == goog.events.KeyCodes.DOWN ? goog.ui.tree.TypeAhead.Offset.DOWN : goog.ui.tree.TypeAhead.Offset.UP), t = !0);
            break;
        case goog.events.KeyCodes.BACKSPACE:
            e = this.buffer_.length - 1, t = !0, e > 0 ? (this.buffer_ = this.buffer_.substring(0, e), this.jumpToLabel_(this.buffer_)) : 0 == e ? this.buffer_ = "" : t = !1;
            break;
        case goog.events.KeyCodes.ESC:
            this.buffer_ = "", t = !0
    }
    return t
}, goog.ui.tree.TypeAhead.prototype.handleTypeAheadChar = function(e) {
    var t = !1;
    return e.ctrlKey || e.altKey || (e = String.fromCharCode(e.charCode || e.keyCode).toLowerCase(), goog.string.isUnicodeChar(e) && (" " != e || this.buffer_) && (this.buffer_ += e, t = this.jumpToLabel_(this.buffer_))), t
}, goog.ui.tree.TypeAhead.prototype.setNodeInMap = function(e) {
    var t = e.getText();
    if (t && !goog.string.isEmptySafe(t)) {
        var t = t.toLowerCase(),
            o = this.nodeMap_.get(t);
        o ? o.push(e) : this.nodeMap_.set(t, [e])
    }
}, goog.ui.tree.TypeAhead.prototype.removeNodeFromMap = function(e) {
    var t = e.getText();
    if (t && !goog.string.isEmptySafe(t)) {
        var t = t.toLowerCase(),
            o = this.nodeMap_.get(t);
        o && (goog.array.remove(o, e), o.length && this.nodeMap_.remove(t))
    }
}, goog.ui.tree.TypeAhead.prototype.jumpToLabel_ = function(e) {
    var t = !1;
    return (e = this.nodeMap_.getKeys(e)) && e.length && (this.matchingLabelIndex_ = this.matchingNodeIndex_ = 0, t = this.nodeMap_.get(e[0]), t = this.selectMatchingNode_(t)) && (this.matchingLabels_ = e), t
}, goog.ui.tree.TypeAhead.prototype.jumpTo_ = function(e) {
    var t = !1,
        o = this.matchingLabels_;
    if (o) {
        var t = null,
            n = !1;
        if (this.matchingNodes_) {
            var i = this.matchingNodeIndex_ + e;
            i >= 0 && i < this.matchingNodes_.length ? (this.matchingNodeIndex_ = i, t = this.matchingNodes_) : n = !0
        }
        t || (i = this.matchingLabelIndex_ + e, i >= 0 && i < o.length && (this.matchingLabelIndex_ = i), o.length > this.matchingLabelIndex_ && (t = this.nodeMap_.get(o[this.matchingLabelIndex_])), t && t.length && n && (this.matchingNodeIndex_ = e == goog.ui.tree.TypeAhead.Offset.UP ? t.length - 1 : 0)), (t = this.selectMatchingNode_(t)) && (this.matchingLabels_ = o)
    }
    return t
}, goog.ui.tree.TypeAhead.prototype.selectMatchingNode_ = function(e) {
    var t;
    return e && (this.matchingNodeIndex_ < e.length && (t = e[this.matchingNodeIndex_], this.matchingNodes_ = e), t && (t.reveal(), t.select())), !!t
}, goog.ui.tree.TypeAhead.prototype.clear = function() {
    this.buffer_ = ""
}, goog.structs.Collection = function() {}, goog.iter = {}, goog.iter.StopIteration = "StopIteration" in goog.global ? goog.global.StopIteration : Error("StopIteration"), goog.iter.Iterator = function() {}, goog.iter.Iterator.prototype.next = function() {
    throw goog.iter.StopIteration
}, goog.iter.Iterator.prototype.__iterator__ = function() {
    return this
}, goog.iter.toIterator = function(e) {
    if (e instanceof goog.iter.Iterator) return e;
    if ("function" == typeof e.__iterator__) return e.__iterator__(!1);
    if (goog.isArrayLike(e)) {
        var t = 0,
            o = new goog.iter.Iterator;
        return o.next = function() {
            for (;;) {
                if (t >= e.length) throw goog.iter.StopIteration;
                if (t in e) return e[t++];
                t++
            }
        }, o
    }
    throw Error("Not implemented")
}, goog.iter.forEach = function(e, t, o) {
    if (goog.isArrayLike(e)) try {
        goog.array.forEach(e, t, o)
    } catch (n) {
        if (n !== goog.iter.StopIteration) throw n
    } else {
        e = goog.iter.toIterator(e);
        try {
            for (;;) t.call(o, e.next(), void 0, e)
        } catch (i) {
            if (i !== goog.iter.StopIteration) throw i
        }
    }
}, goog.iter.filter = function(e, t, o) {
    var n = goog.iter.toIterator(e);
    return e = new goog.iter.Iterator, e.next = function() {
        for (;;) {
            var e = n.next();
            if (t.call(o, e, void 0, n)) return e
        }
    }, e
}, goog.iter.range = function(e, t, o) {
    var n = 0,
        i = e,
        r = o || 1;
    if (1 < arguments.length && (n = e, i = t), 0 == r) throw Error("Range step argument must not be zero");
    var l = new goog.iter.Iterator;
    return l.next = function() {
        if (r > 0 && n >= i || 0 > r && i >= n) throw goog.iter.StopIteration;
        var e = n;
        return n += r, e
    }, l
}, goog.iter.join = function(e, t) {
    return goog.iter.toArray(e).join(t)
}, goog.iter.map = function(e, t, o) {
    var n = goog.iter.toIterator(e);
    return e = new goog.iter.Iterator, e.next = function() {
        var e = n.next();
        return t.call(o, e, void 0, n)
    }, e
}, goog.iter.reduce = function(e, t, o, n) {
    var i = o;
    return goog.iter.forEach(e, function(e) {
        i = t.call(n, i, e)
    }), i
}, goog.iter.some = function(e, t, o) {
    e = goog.iter.toIterator(e);
    try {
        for (;;)
            if (t.call(o, e.next(), void 0, e)) return !0
    } catch (n) {
        if (n !== goog.iter.StopIteration) throw n
    }
    return !1
}, goog.iter.every = function(e, t, o) {
    e = goog.iter.toIterator(e);
    try {
        for (;;)
            if (!t.call(o, e.next(), void 0, e)) return !1
    } catch (n) {
        if (n !== goog.iter.StopIteration) throw n
    }
    return !0
}, goog.iter.chain = function() {
    var e = goog.iter.toIterator(arguments),
        t = new goog.iter.Iterator,
        o = null;
    return t.next = function() {
        for (;;) {
            if (null == o) {
                var t = e.next();
                o = goog.iter.toIterator(t)
            }
            try {
                return o.next()
            } catch (n) {
                if (n !== goog.iter.StopIteration) throw n;
                o = null
            }
        }
    }, t
}, goog.iter.chainFromIterable = function(e) {
    return goog.iter.chain.apply(void 0, e)
}, goog.iter.dropWhile = function(e, t, o) {
    var n = goog.iter.toIterator(e);
    e = new goog.iter.Iterator;
    var i = !0;
    return e.next = function() {
        for (;;) {
            var e = n.next();
            if (!i || !t.call(o, e, void 0, n)) return i = !1, e
        }
    }, e
}, goog.iter.takeWhile = function(e, t, o) {
    var n = goog.iter.toIterator(e);
    e = new goog.iter.Iterator;
    var i = !0;
    return e.next = function() {
        for (;;) {
            if (!i) throw goog.iter.StopIteration;
            var e = n.next();
            if (t.call(o, e, void 0, n)) return e;
            i = !1
        }
    }, e
}, goog.iter.toArray = function(e) {
    if (goog.isArrayLike(e)) return goog.array.toArray(e);
    e = goog.iter.toIterator(e);
    var t = [];
    return goog.iter.forEach(e, function(e) {
        t.push(e)
    }), t
}, goog.iter.equals = function(e, t) {
    var o = goog.iter.zipLongest({}, e, t);
    return goog.iter.every(o, function(e) {
        return e[0] == e[1]
    })
}, goog.iter.nextOrValue = function(e, t) {
    try {
        return goog.iter.toIterator(e).next()
    } catch (o) {
        if (o != goog.iter.StopIteration) throw o;
        return t
    }
}, goog.iter.product = function() {
    if (goog.array.some(arguments, function(e) {
            return !e.length
        }) || !arguments.length) return new goog.iter.Iterator;
    var e = new goog.iter.Iterator,
        t = arguments,
        o = goog.array.repeat(0, t.length);
    return e.next = function() {
        if (o) {
            for (var e = goog.array.map(o, function(e, o) {
                    return t[o][e]
                }), n = o.length - 1; n >= 0; n--) {
                if (goog.asserts.assert(o), o[n] < t[n].length - 1) {
                    o[n]++;
                    break
                }
                if (0 == n) {
                    o = null;
                    break
                }
                o[n] = 0
            }
            return e
        }
        throw goog.iter.StopIteration
    }, e
}, goog.iter.cycle = function(e) {
    var t = goog.iter.toIterator(e),
        o = [],
        n = 0;
    e = new goog.iter.Iterator;
    var i = !1;
    return e.next = function() {
        var e = null;
        if (!i) try {
            return e = t.next(), o.push(e), e
        } catch (r) {
            if (r != goog.iter.StopIteration || goog.array.isEmpty(o)) throw r;
            i = !0
        }
        return e = o[n], n = (n + 1) % o.length, e
    }, e
}, goog.iter.count = function(e, t) {
    var o = e || 0,
        n = goog.isDef(t) ? t : 1,
        i = new goog.iter.Iterator;
    return i.next = function() {
        var e = o;
        return o += n, e
    }, i
}, goog.iter.repeat = function(e) {
    var t = new goog.iter.Iterator;
    return t.next = goog.functions.constant(e), t
}, goog.iter.accumulate = function(e) {
    var t = goog.iter.toIterator(e),
        o = 0;
    return e = new goog.iter.Iterator, e.next = function() {
        return o += t.next()
    }, e
}, goog.iter.zip = function() {
    var e = arguments,
        t = new goog.iter.Iterator;
    if (0 < e.length) {
        var o = goog.array.map(e, goog.iter.toIterator);
        t.next = function() {
            return goog.array.map(o, function(e) {
                return e.next()
            })
        }
    }
    return t
}, goog.iter.zipLongest = function(e) {
    var t = goog.array.slice(arguments, 1),
        o = new goog.iter.Iterator;
    if (0 < t.length) {
        var n = goog.array.map(t, goog.iter.toIterator);
        o.next = function() {
            var t = !1,
                o = goog.array.map(n, function(o) {
                    var n;
                    try {
                        n = o.next(), t = !0
                    } catch (i) {
                        if (i !== goog.iter.StopIteration) throw i;
                        n = e
                    }
                    return n
                });
            if (!t) throw goog.iter.StopIteration;
            return o
        }
    }
    return o
}, goog.iter.compress = function(e, t) {
    var o = goog.iter.toIterator(t);
    return goog.iter.filter(e, function() {
        return !!o.next()
    })
}, goog.iter.GroupByIterator_ = function(e, t) {
    this.iterator = goog.iter.toIterator(e), this.keyFunc = t || goog.functions.identity
}, goog.inherits(goog.iter.GroupByIterator_, goog.iter.Iterator), goog.iter.GroupByIterator_.prototype.next = function() {
    for (; this.currentKey == this.targetKey;) this.currentValue = this.iterator.next(), this.currentKey = this.keyFunc(this.currentValue);
    return this.targetKey = this.currentKey, [this.currentKey, this.groupItems_(this.targetKey)]
}, goog.iter.GroupByIterator_.prototype.groupItems_ = function(e) {
    for (var t = []; this.currentKey == e;) {
        t.push(this.currentValue);
        try {
            this.currentValue = this.iterator.next()
        } catch (o) {
            if (o !== goog.iter.StopIteration) throw o;
            break
        }
        this.currentKey = this.keyFunc(this.currentValue)
    }
    return t
}, goog.iter.groupBy = function(e, t) {
    return new goog.iter.GroupByIterator_(e, t)
}, goog.iter.tee = function(e, t) {
    var o = goog.iter.toIterator(e),
        n = goog.isNumber(t) ? t : 2,
        i = goog.array.map(goog.array.range(n), function() {
            return []
        }),
        r = function() {
            var e = o.next();
            goog.array.forEach(i, function(t) {
                t.push(e)
            })
        };
    return goog.array.map(i, function(e) {
        var t = new goog.iter.Iterator;
        return t.next = function() {
            return goog.array.isEmpty(e) && r(), goog.asserts.assert(!goog.array.isEmpty(e)), e.shift()
        }, t
    })
}, goog.iter.enumerate = function(e, t) {
    return goog.iter.zip(goog.iter.count(t), e)
}, goog.iter.limit = function(e, t) {
    goog.asserts.assert(goog.math.isInt(t) && t >= 0);
    var o = goog.iter.toIterator(e),
        n = new goog.iter.Iterator,
        i = t;
    return n.next = function() {
        if (0 < i--) return o.next();
        throw goog.iter.StopIteration
    }, n
}, goog.iter.consume = function(e, t) {
    goog.asserts.assert(goog.math.isInt(t) && t >= 0);
    for (var o = goog.iter.toIterator(e); 0 < t--;) goog.iter.nextOrValue(o, null);
    return o
}, goog.iter.slice = function(e, t, o) {
    return goog.asserts.assert(goog.math.isInt(t) && t >= 0), e = goog.iter.consume(e, t), goog.isNumber(o) && (goog.asserts.assert(goog.math.isInt(o) && o >= t), e = goog.iter.limit(e, o - t)), e
}, goog.iter.hasDuplicates_ = function(e) {
    var t = [];
    return goog.array.removeDuplicates(e, t), e.length != t.length
}, goog.iter.permutations = function(e, t) {
    var o = goog.iter.toArray(e),
        n = goog.isNumber(t) ? t : o.length,
        o = goog.array.repeat(o, n),
        o = goog.iter.product.apply(void 0, o);
    return goog.iter.filter(o, function(e) {
        return !goog.iter.hasDuplicates_(e)
    })
}, goog.iter.combinations = function(e, t) {
    function o(e) {
        return n[e]
    }
    var n = goog.iter.toArray(e),
        i = goog.iter.range(n.length),
        i = goog.iter.permutations(i, t),
        r = goog.iter.filter(i, function(e) {
            return goog.array.isSorted(e)
        }),
        i = new goog.iter.Iterator;
    return i.next = function() {
        return goog.array.map(r.next(), o)
    }, i
}, goog.iter.combinationsWithReplacement = function(e, t) {
    function o(e) {
        return n[e]
    }
    var n = goog.iter.toArray(e),
        i = goog.array.range(n.length),
        i = goog.array.repeat(i, t),
        i = goog.iter.product.apply(void 0, i),
        r = goog.iter.filter(i, function(e) {
            return goog.array.isSorted(e)
        }),
        i = new goog.iter.Iterator;
    return i.next = function() {
        return goog.array.map(r.next(), o)
    }, i
}, goog.structs.Map = function(e) {
    this.map_ = {}, this.keys_ = [], this.version_ = this.count_ = 0;
    var t = arguments.length;
    if (t > 1) {
        if (t % 2) throw Error("Uneven number of arguments");
        for (var o = 0; t > o; o += 2) this.set(arguments[o], arguments[o + 1])
    } else e && this.addAll(e)
}, goog.structs.Map.prototype.getCount = function() {
    return this.count_
}, goog.structs.Map.prototype.getValues = function() {
    this.cleanupKeysArray_();
    for (var e = [], t = 0; t < this.keys_.length; t++) e.push(this.map_[this.keys_[t]]);
    return e
}, goog.structs.Map.prototype.getKeys = function() {
    return this.cleanupKeysArray_(), this.keys_.concat()
}, goog.structs.Map.prototype.containsKey = function(e) {
    return goog.structs.Map.hasKey_(this.map_, e)
}, goog.structs.Map.prototype.containsValue = function(e) {
    for (var t = 0; t < this.keys_.length; t++) {
        var o = this.keys_[t];
        if (goog.structs.Map.hasKey_(this.map_, o) && this.map_[o] == e) return !0
    }
    return !1
}, goog.structs.Map.prototype.equals = function(e, t) {
    if (this === e) return !0;
    if (this.count_ != e.getCount()) return !1;
    var o = t || goog.structs.Map.defaultEquals;
    this.cleanupKeysArray_();
    for (var n, i = 0; n = this.keys_[i]; i++)
        if (!o(this.get(n), e.get(n))) return !1;
    return !0
}, goog.structs.Map.defaultEquals = function(e, t) {
    return e === t
}, goog.structs.Map.prototype.isEmpty = function() {
    return 0 == this.count_
}, goog.structs.Map.prototype.clear = function() {
    this.map_ = {}, this.version_ = this.count_ = this.keys_.length = 0
}, goog.structs.Map.prototype.remove = function(e) {
    return goog.structs.Map.hasKey_(this.map_, e) ? (delete this.map_[e], this.count_--, this.version_++, this.keys_.length > 2 * this.count_ && this.cleanupKeysArray_(), !0) : !1
}, goog.structs.Map.prototype.cleanupKeysArray_ = function() {
    if (this.count_ != this.keys_.length) {
        for (var e = 0, t = 0; e < this.keys_.length;) {
            var o = this.keys_[e];
            goog.structs.Map.hasKey_(this.map_, o) && (this.keys_[t++] = o), e++
        }
        this.keys_.length = t
    }
    if (this.count_ != this.keys_.length) {
        for (var n = {}, t = e = 0; e < this.keys_.length;) o = this.keys_[e], goog.structs.Map.hasKey_(n, o) || (this.keys_[t++] = o, n[o] = 1), e++;
        this.keys_.length = t
    }
}, goog.structs.Map.prototype.get = function(e, t) {
    return goog.structs.Map.hasKey_(this.map_, e) ? this.map_[e] : t
}, goog.structs.Map.prototype.set = function(e, t) {
    goog.structs.Map.hasKey_(this.map_, e) || (this.count_++, this.keys_.push(e), this.version_++), this.map_[e] = t
}, goog.structs.Map.prototype.addAll = function(e) {
    var t;
    e instanceof goog.structs.Map ? (t = e.getKeys(), e = e.getValues()) : (t = goog.object.getKeys(e), e = goog.object.getValues(e));
    for (var o = 0; o < t.length; o++) this.set(t[o], e[o])
}, goog.structs.Map.prototype.clone = function() {
    return new goog.structs.Map(this)
}, goog.structs.Map.prototype.transpose = function() {
    for (var e = new goog.structs.Map, t = 0; t < this.keys_.length; t++) {
        var o = this.keys_[t];
        e.set(this.map_[o], o)
    }
    return e
}, goog.structs.Map.prototype.toObject = function() {
    this.cleanupKeysArray_();
    for (var e = {}, t = 0; t < this.keys_.length; t++) {
        var o = this.keys_[t];
        e[o] = this.map_[o]
    }
    return e
}, goog.structs.Map.prototype.getKeyIterator = function() {
    return this.__iterator__(!0)
}, goog.structs.Map.prototype.getValueIterator = function() {
    return this.__iterator__(!1)
}, goog.structs.Map.prototype.__iterator__ = function(e) {
    this.cleanupKeysArray_();
    var t = 0,
        o = this.keys_,
        n = this.map_,
        i = this.version_,
        r = this,
        l = new goog.iter.Iterator;
    return l.next = function() {
        for (;;) {
            if (i != r.version_) throw Error("The map has changed since the iterator was created");
            if (t >= o.length) throw goog.iter.StopIteration;
            var l = o[t++];
            return e ? l : n[l]
        }
    }, l
}, goog.structs.Map.hasKey_ = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}, goog.structs.Set = function(e) {
    this.map_ = new goog.structs.Map, e && this.addAll(e)
}, goog.structs.Set.getKey_ = function(e) {
    var t = typeof e;
    return "object" == t && e || "function" == t ? "o" + goog.getUid(e) : t.substr(0, 1) + e
}, goog.structs.Set.prototype.getCount = function() {
    return this.map_.getCount()
}, goog.structs.Set.prototype.add = function(e) {
    this.map_.set(goog.structs.Set.getKey_(e), e)
}, goog.structs.Set.prototype.addAll = function(e) {
    e = goog.structs.getValues(e);
    for (var t = e.length, o = 0; t > o; o++) this.add(e[o])
}, goog.structs.Set.prototype.removeAll = function(e) {
    e = goog.structs.getValues(e);
    for (var t = e.length, o = 0; t > o; o++) this.remove(e[o])
}, goog.structs.Set.prototype.remove = function(e) {
    return this.map_.remove(goog.structs.Set.getKey_(e))
}, goog.structs.Set.prototype.clear = function() {
    this.map_.clear()
}, goog.structs.Set.prototype.isEmpty = function() {
    return this.map_.isEmpty()
}, goog.structs.Set.prototype.contains = function(e) {
    return this.map_.containsKey(goog.structs.Set.getKey_(e))
}, goog.structs.Set.prototype.containsAll = function(e) {
    return goog.structs.every(e, this.contains, this)
}, goog.structs.Set.prototype.intersection = function(e) {
    var t = new goog.structs.Set;
    e = goog.structs.getValues(e);
    for (var o = 0; o < e.length; o++) {
        var n = e[o];
        this.contains(n) && t.add(n)
    }
    return t
}, goog.structs.Set.prototype.difference = function(e) {
    var t = this.clone();
    return t.removeAll(e), t
}, goog.structs.Set.prototype.getValues = function() {
    return this.map_.getValues()
}, goog.structs.Set.prototype.clone = function() {
    return new goog.structs.Set(this)
}, goog.structs.Set.prototype.equals = function(e) {
    return this.getCount() == goog.structs.getCount(e) && this.isSubsetOf(e)
}, goog.structs.Set.prototype.isSubsetOf = function(e) {
    var t = goog.structs.getCount(e);
    return this.getCount() > t ? !1 : (!(e instanceof goog.structs.Set) && t > 5 && (e = new goog.structs.Set(e)), goog.structs.every(this, function(t) {
        return goog.structs.contains(e, t)
    }))
}, goog.structs.Set.prototype.__iterator__ = function() {
    return this.map_.__iterator__(!1)
}, goog.debug.LOGGING_ENABLED = goog.DEBUG, goog.debug.catchErrors = function(e, t, o) {
    o = o || goog.global;
    var n = o.onerror,
        i = !!t;
    goog.userAgent.WEBKIT && !goog.userAgent.isVersionOrHigher("535.3") && (i = !i), o.onerror = function(t, o, r, l, s) {
        return n && n(t, o, r, l, s), e({
            message: t,
            fileName: o,
            line: r,
            col: l,
            error: s
        }), i
    }
}, goog.debug.expose = function(e, t) {
    if ("undefined" == typeof e) return "undefined";
    if (null == e) return "NULL";
    var o, n = [];
    for (o in e)
        if (t || !goog.isFunction(e[o])) {
            var i = o + " = ";
            try {
                i += e[o]
            } catch (r) {
                i += "*** " + r + " ***"
            }
            n.push(i)
        }
    return n.join("\n")
}, goog.debug.deepExpose = function(e, t) {
    var o = [],
        n = function(e, i, r) {
            var l = i + "  ";
            r = new goog.structs.Set(r);
            try {
                if (goog.isDef(e))
                    if (goog.isNull(e)) o.push("NULL");
                    else if (goog.isString(e)) o.push('"' + e.replace(/\n/g, "\n" + i) + '"');
                else if (goog.isFunction(e)) o.push(String(e).replace(/\n/g, "\n" + i));
                else if (goog.isObject(e))
                    if (r.contains(e)) o.push("*** reference loop detected ***");
                    else {
                        r.add(e), o.push("{");
                        for (var s in e)(t || !goog.isFunction(e[s])) && (o.push("\n"), o.push(l), o.push(s + " = "), n(e[s], l, r));
                        o.push("\n" + i + "}")
                    } else o.push(e);
                else o.push("undefined")
            } catch (a) {
                o.push("*** " + a + " ***")
            }
        };
    return n(e, "", new goog.structs.Set), o.join("")
}, goog.debug.exposeArray = function(e) {
    for (var t = [], o = 0; o < e.length; o++) t.push(goog.isArray(e[o]) ? goog.debug.exposeArray(e[o]) : e[o]);
    return "[ " + t.join(", ") + " ]"
}, goog.debug.exposeException = function(e, t) {
    try {
        var o = goog.debug.normalizeErrorObject(e);
        return "Message: " + goog.string.htmlEscape(o.message) + '\nUrl: <a href="view-source:' + o.fileName + '" target="_new">' + o.fileName + "</a>\nLine: " + o.lineNumber + "\n\nBrowser stack:\n" + goog.string.htmlEscape(o.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + goog.string.htmlEscape(goog.debug.getStacktrace(t) + "-> ")
    } catch (n) {
        return "Exception trying to expose exception! You win, we lose. " + n
    }
}, goog.debug.normalizeErrorObject = function(e) {
    var t = goog.getObjectByName("window.location.href");
    if (goog.isString(e)) return {
        message: e,
        name: "Unknown error",
        lineNumber: "Not available",
        fileName: t,
        stack: "Not available"
    };
    var o, n, i = !1;
    try {
        o = e.lineNumber || e.line || "Not available"
    } catch (r) {
        o = "Not available", i = !0
    }
    try {
        n = e.fileName || e.filename || e.sourceURL || goog.global.$googDebugFname || t
    } catch (l) {
        n = "Not available", i = !0
    }
    return !i && e.lineNumber && e.fileName && e.stack && e.message && e.name ? e : {
        message: e.message || "Not available",
        name: e.name || "UnknownError",
        lineNumber: o,
        fileName: n,
        stack: e.stack || "Not available"
    }
}, goog.debug.enhanceError = function(e, t) {
    var o = "string" == typeof e ? Error(e) : e;
    if (o.stack || (o.stack = goog.debug.getStacktrace(arguments.callee.caller)), t) {
        for (var n = 0; o["message" + n];) ++n;
        o["message" + n] = String(t)
    }
    return o
}, goog.debug.getStacktraceSimple = function(e) {
    for (var t = [], o = arguments.callee.caller, n = 0; o && (!e || e > n);) {
        t.push(goog.debug.getFunctionName(o)), t.push("()\n");
        try {
            o = o.caller
        } catch (i) {
            t.push("[exception trying to get caller]\n");
            break
        }
        if (n++, n >= goog.debug.MAX_STACK_DEPTH) {
            t.push("[...long stack...]");
            break
        }
    }
    return t.push(e && n >= e ? "[...reached max depth limit...]" : "[end]"), t.join("")
}, goog.debug.MAX_STACK_DEPTH = 50, goog.debug.getStacktrace = function(e) {
    return goog.debug.getStacktraceHelper_(e || arguments.callee.caller, [])
}, goog.debug.getStacktraceHelper_ = function(e, t) {
    var o = [];
    if (goog.array.contains(t, e)) o.push("[...circular reference...]");
    else if (e && t.length < goog.debug.MAX_STACK_DEPTH) {
        o.push(goog.debug.getFunctionName(e) + "(");
        for (var n = e.arguments, i = 0; n && i < n.length; i++) {
            i > 0 && o.push(", ");
            var r;
            switch (r = n[i], typeof r) {
                case "object":
                    r = r ? "object" : "null";
                    break;
                case "string":
                    break;
                case "number":
                    r = String(r);
                    break;
                case "boolean":
                    r = r ? "true" : "false";
                    break;
                case "function":
                    r = (r = goog.debug.getFunctionName(r)) ? r : "[fn]";
                    break;
                default:
                    r = typeof r
            }
            40 < r.length && (r = r.substr(0, 40) + "..."), o.push(r)
        }
        t.push(e), o.push(")\n");
        try {
            o.push(goog.debug.getStacktraceHelper_(e.caller, t))
        } catch (l) {
            o.push("[exception trying to get caller]\n")
        }
    } else o.push(e ? "[...long stack...]" : "[end]");
    return o.join("")
}, goog.debug.setFunctionResolver = function(e) {
    goog.debug.fnNameResolver_ = e
}, goog.debug.getFunctionName = function(e) {
    if (goog.debug.fnNameCache_[e]) return goog.debug.fnNameCache_[e];
    if (goog.debug.fnNameResolver_) {
        var t = goog.debug.fnNameResolver_(e);
        if (t) return goog.debug.fnNameCache_[e] = t
    }
    return e = String(e), goog.debug.fnNameCache_[e] || (t = /function ([^\(]+)/.exec(e), goog.debug.fnNameCache_[e] = t ? t[1] : "[Anonymous]"), goog.debug.fnNameCache_[e]
}, goog.debug.makeWhitespaceVisible = function(e) {
    return e.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]")
}, goog.debug.fnNameCache_ = {}, goog.debug.LogRecord = function(e, t, o, n, i) {
    this.reset(e, t, o, n, i)
}, goog.debug.LogRecord.prototype.sequenceNumber_ = 0, goog.debug.LogRecord.prototype.exception_ = null, goog.debug.LogRecord.prototype.exceptionText_ = null, goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS = !0, goog.debug.LogRecord.nextSequenceNumber_ = 0, goog.debug.LogRecord.prototype.reset = function(e, t, o, n, i) {
    goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS && (this.sequenceNumber_ = "number" == typeof i ? i : goog.debug.LogRecord.nextSequenceNumber_++), this.time_ = n || goog.now(), this.level_ = e, this.msg_ = t, this.loggerName_ = o, delete this.exception_, delete this.exceptionText_
}, goog.debug.LogRecord.prototype.getLoggerName = function() {
    return this.loggerName_
}, goog.debug.LogRecord.prototype.getException = function() {
    return this.exception_
}, goog.debug.LogRecord.prototype.setException = function(e) {
    this.exception_ = e
}, goog.debug.LogRecord.prototype.getExceptionText = function() {
    return this.exceptionText_
}, goog.debug.LogRecord.prototype.setExceptionText = function(e) {
    this.exceptionText_ = e
}, goog.debug.LogRecord.prototype.setLoggerName = function(e) {
    this.loggerName_ = e
}, goog.debug.LogRecord.prototype.getLevel = function() {
    return this.level_
}, goog.debug.LogRecord.prototype.setLevel = function(e) {
    this.level_ = e
}, goog.debug.LogRecord.prototype.getMessage = function() {
    return this.msg_
}, goog.debug.LogRecord.prototype.setMessage = function(e) {
    this.msg_ = e
}, goog.debug.LogRecord.prototype.getMillis = function() {
    return this.time_
}, goog.debug.LogRecord.prototype.setMillis = function(e) {
    this.time_ = e
}, goog.debug.LogRecord.prototype.getSequenceNumber = function() {
    return this.sequenceNumber_
}, goog.debug.LogBuffer = function() {
    goog.asserts.assert(goog.debug.LogBuffer.isBufferingEnabled(), "Cannot use goog.debug.LogBuffer without defining goog.debug.LogBuffer.CAPACITY."), this.clear()
}, goog.debug.LogBuffer.getInstance = function() {
    return goog.debug.LogBuffer.instance_ || (goog.debug.LogBuffer.instance_ = new goog.debug.LogBuffer), goog.debug.LogBuffer.instance_
}, goog.debug.LogBuffer.CAPACITY = 0, goog.debug.LogBuffer.prototype.addRecord = function(e, t, o) {
    var n = (this.curIndex_ + 1) % goog.debug.LogBuffer.CAPACITY;
    return this.curIndex_ = n, this.isFull_ ? (n = this.buffer_[n], n.reset(e, t, o), n) : (this.isFull_ = n == goog.debug.LogBuffer.CAPACITY - 1, this.buffer_[n] = new goog.debug.LogRecord(e, t, o))
}, goog.debug.LogBuffer.isBufferingEnabled = function() {
    return 0 < goog.debug.LogBuffer.CAPACITY
}, goog.debug.LogBuffer.prototype.clear = function() {
    this.buffer_ = Array(goog.debug.LogBuffer.CAPACITY), this.curIndex_ = -1, this.isFull_ = !1
}, goog.debug.LogBuffer.prototype.forEachRecord = function(e) {
    var t = this.buffer_;
    if (t[0]) {
        var o = this.curIndex_,
            n = this.isFull_ ? o : -1;
        do n = (n + 1) % goog.debug.LogBuffer.CAPACITY, e(t[n]); while (n != o)
    }
}, goog.debug.Logger = function(e) {
    this.name_ = e, this.handlers_ = this.children_ = this.level_ = this.parent_ = null
}, goog.debug.Logger.ENABLE_HIERARCHY = !0, goog.debug.Logger.ENABLE_HIERARCHY || (goog.debug.Logger.rootHandlers_ = []), goog.debug.Logger.Level = function(e, t) {
    this.name = e, this.value = t
}, goog.debug.Logger.Level.prototype.toString = function() {
    return this.name
}, goog.debug.Logger.Level.OFF = new goog.debug.Logger.Level("OFF", 1 / 0), goog.debug.Logger.Level.SHOUT = new goog.debug.Logger.Level("SHOUT", 1200), goog.debug.Logger.Level.SEVERE = new goog.debug.Logger.Level("SEVERE", 1e3), goog.debug.Logger.Level.WARNING = new goog.debug.Logger.Level("WARNING", 900), goog.debug.Logger.Level.INFO = new goog.debug.Logger.Level("INFO", 800), goog.debug.Logger.Level.CONFIG = new goog.debug.Logger.Level("CONFIG", 700), goog.debug.Logger.Level.FINE = new goog.debug.Logger.Level("FINE", 500), goog.debug.Logger.Level.FINER = new goog.debug.Logger.Level("FINER", 400), goog.debug.Logger.Level.FINEST = new goog.debug.Logger.Level("FINEST", 300), goog.debug.Logger.Level.ALL = new goog.debug.Logger.Level("ALL", 0), goog.debug.Logger.Level.PREDEFINED_LEVELS = [goog.debug.Logger.Level.OFF, goog.debug.Logger.Level.SHOUT, goog.debug.Logger.Level.SEVERE, goog.debug.Logger.Level.WARNING, goog.debug.Logger.Level.INFO, goog.debug.Logger.Level.CONFIG, goog.debug.Logger.Level.FINE, goog.debug.Logger.Level.FINER, goog.debug.Logger.Level.FINEST, goog.debug.Logger.Level.ALL], goog.debug.Logger.Level.predefinedLevelsCache_ = null, goog.debug.Logger.Level.createPredefinedLevelsCache_ = function() {
    goog.debug.Logger.Level.predefinedLevelsCache_ = {};
    for (var e, t = 0; e = goog.debug.Logger.Level.PREDEFINED_LEVELS[t]; t++) goog.debug.Logger.Level.predefinedLevelsCache_[e.value] = e, goog.debug.Logger.Level.predefinedLevelsCache_[e.name] = e
}, goog.debug.Logger.Level.getPredefinedLevel = function(e) {
    return goog.debug.Logger.Level.predefinedLevelsCache_ || goog.debug.Logger.Level.createPredefinedLevelsCache_(), goog.debug.Logger.Level.predefinedLevelsCache_[e] || null
}, goog.debug.Logger.Level.getPredefinedLevelByValue = function(e) {
    if (goog.debug.Logger.Level.predefinedLevelsCache_ || goog.debug.Logger.Level.createPredefinedLevelsCache_(), e in goog.debug.Logger.Level.predefinedLevelsCache_) return goog.debug.Logger.Level.predefinedLevelsCache_[e];
    for (var t = 0; t < goog.debug.Logger.Level.PREDEFINED_LEVELS.length; ++t) {
        var o = goog.debug.Logger.Level.PREDEFINED_LEVELS[t];
        if (o.value <= e) return o
    }
    return null
}, goog.debug.Logger.getLogger = function(e) {
    return goog.debug.LogManager.getLogger(e)
}, goog.debug.Logger.logToProfilers = function(e) {
    goog.global.console && (goog.global.console.timeStamp ? goog.global.console.timeStamp(e) : goog.global.console.markTimeline && goog.global.console.markTimeline(e)), goog.global.msWriteProfilerMark && goog.global.msWriteProfilerMark(e)
}, goog.debug.Logger.prototype.getName = function() {
    return this.name_
}, goog.debug.Logger.prototype.addHandler = function(e) {
    goog.debug.LOGGING_ENABLED && (goog.debug.Logger.ENABLE_HIERARCHY ? (this.handlers_ || (this.handlers_ = []), this.handlers_.push(e)) : (goog.asserts.assert(!this.name_, "Cannot call addHandler on a non-root logger when goog.debug.Logger.ENABLE_HIERARCHY is false."), goog.debug.Logger.rootHandlers_.push(e)))
}, goog.debug.Logger.prototype.removeHandler = function(e) {
    if (goog.debug.LOGGING_ENABLED) {
        var t = goog.debug.Logger.ENABLE_HIERARCHY ? this.handlers_ : goog.debug.Logger.rootHandlers_;
        return !!t && goog.array.remove(t, e)
    }
    return !1
}, goog.debug.Logger.prototype.getParent = function() {
    return this.parent_
}, goog.debug.Logger.prototype.getChildren = function() {
    return this.children_ || (this.children_ = {}), this.children_
}, goog.debug.Logger.prototype.setLevel = function(e) {
    goog.debug.LOGGING_ENABLED && (goog.debug.Logger.ENABLE_HIERARCHY ? this.level_ = e : (goog.asserts.assert(!this.name_, "Cannot call setLevel() on a non-root logger when goog.debug.Logger.ENABLE_HIERARCHY is false."), goog.debug.Logger.rootLevel_ = e))
}, goog.debug.Logger.prototype.getLevel = function() {
    return goog.debug.LOGGING_ENABLED ? this.level_ : goog.debug.Logger.Level.OFF
}, goog.debug.Logger.prototype.getEffectiveLevel = function() {
    return goog.debug.LOGGING_ENABLED ? goog.debug.Logger.ENABLE_HIERARCHY ? this.level_ ? this.level_ : this.parent_ ? this.parent_.getEffectiveLevel() : (goog.asserts.fail("Root logger has no level set."), null) : goog.debug.Logger.rootLevel_ : goog.debug.Logger.Level.OFF
}, goog.debug.Logger.prototype.isLoggable = function(e) {
    return goog.debug.LOGGING_ENABLED && e.value >= this.getEffectiveLevel().value
}, goog.debug.Logger.prototype.log = function(e, t, o) {
    goog.debug.LOGGING_ENABLED && this.isLoggable(e) && (goog.isFunction(t) && (t = t()), this.doLogRecord_(this.getLogRecord(e, t, o)))
}, goog.debug.Logger.prototype.getLogRecord = function(e, t, o) {
    var n = goog.debug.LogBuffer.isBufferingEnabled() ? goog.debug.LogBuffer.getInstance().addRecord(e, t, this.name_) : new goog.debug.LogRecord(e, String(t), this.name_);
    return o && (n.setException(o), n.setExceptionText(goog.debug.exposeException(o, arguments.callee.caller))), n
}, goog.debug.Logger.prototype.shout = function(e, t) {
    goog.debug.LOGGING_ENABLED && this.log(goog.debug.Logger.Level.SHOUT, e, t)
}, goog.debug.Logger.prototype.severe = function(e, t) {
    goog.debug.LOGGING_ENABLED && this.log(goog.debug.Logger.Level.SEVERE, e, t)
}, goog.debug.Logger.prototype.warning = function(e, t) {
    goog.debug.LOGGING_ENABLED && this.log(goog.debug.Logger.Level.WARNING, e, t)
}, goog.debug.Logger.prototype.info = function(e, t) {
    goog.debug.LOGGING_ENABLED && this.log(goog.debug.Logger.Level.INFO, e, t)
}, goog.debug.Logger.prototype.config = function(e, t) {
    goog.debug.LOGGING_ENABLED && this.log(goog.debug.Logger.Level.CONFIG, e, t)
}, goog.debug.Logger.prototype.fine = function(e, t) {
    goog.debug.LOGGING_ENABLED && this.log(goog.debug.Logger.Level.FINE, e, t)
}, goog.debug.Logger.prototype.finer = function(e, t) {
    goog.debug.LOGGING_ENABLED && this.log(goog.debug.Logger.Level.FINER, e, t)
}, goog.debug.Logger.prototype.finest = function(e, t) {
    goog.debug.LOGGING_ENABLED && this.log(goog.debug.Logger.Level.FINEST, e, t)
}, goog.debug.Logger.prototype.logRecord = function(e) {
    goog.debug.LOGGING_ENABLED && this.isLoggable(e.getLevel()) && this.doLogRecord_(e)
}, goog.debug.Logger.prototype.doLogRecord_ = function(e) {
    if (goog.debug.Logger.logToProfilers("log:" + e.getMessage()), goog.debug.Logger.ENABLE_HIERARCHY)
        for (var t = this; t;) t.callPublish_(e), t = t.getParent();
    else
        for (var o, t = 0; o = goog.debug.Logger.rootHandlers_[t++];) o(e)
}, goog.debug.Logger.prototype.callPublish_ = function(e) {
    if (this.handlers_)
        for (var t, o = 0; t = this.handlers_[o]; o++) t(e)
}, goog.debug.Logger.prototype.setParent_ = function(e) {
    this.parent_ = e
}, goog.debug.Logger.prototype.addChild_ = function(e, t) {
    this.getChildren()[e] = t
}, goog.debug.LogManager = {}, goog.debug.LogManager.loggers_ = {}, goog.debug.LogManager.rootLogger_ = null, goog.debug.LogManager.initialize = function() {
    goog.debug.LogManager.rootLogger_ || (goog.debug.LogManager.rootLogger_ = new goog.debug.Logger(""), goog.debug.LogManager.loggers_[""] = goog.debug.LogManager.rootLogger_, goog.debug.LogManager.rootLogger_.setLevel(goog.debug.Logger.Level.CONFIG))
}, goog.debug.LogManager.getLoggers = function() {
    return goog.debug.LogManager.loggers_
}, goog.debug.LogManager.getRoot = function() {
    return goog.debug.LogManager.initialize(), goog.debug.LogManager.rootLogger_
}, goog.debug.LogManager.getLogger = function(e) {
    return goog.debug.LogManager.initialize(), goog.debug.LogManager.loggers_[e] || goog.debug.LogManager.createLogger_(e)
}, goog.debug.LogManager.createFunctionForCatchErrors = function(e) {
    return function(t) {
        (e || goog.debug.LogManager.getRoot()).severe("Error: " + t.message + " (" + t.fileName + " @ Line: " + t.line + ")")
    }
}, goog.debug.LogManager.createLogger_ = function(e) {
    var t = new goog.debug.Logger(e);
    if (goog.debug.Logger.ENABLE_HIERARCHY) {
        var o = e.lastIndexOf("."),
            n = e.substr(0, o),
            o = e.substr(o + 1),
            n = goog.debug.LogManager.getLogger(n);
        n.addChild_(o, t), t.setParent_(n)
    }
    return goog.debug.LogManager.loggers_[e] = t
}, goog.log = {}, goog.log.ENABLED = goog.debug.LOGGING_ENABLED, goog.log.Logger = goog.debug.Logger, goog.log.Level = goog.debug.Logger.Level, goog.log.LogRecord = goog.debug.LogRecord, goog.log.getLogger = function(e, t) {
    if (goog.log.ENABLED) {
        var o = goog.debug.LogManager.getLogger(e);
        return t && o && o.setLevel(t), o
    }
    return null
}, goog.log.addHandler = function(e, t) {
    goog.log.ENABLED && e && e.addHandler(t)
}, goog.log.removeHandler = function(e, t) {
    return goog.log.ENABLED && e ? e.removeHandler(t) : !1
}, goog.log.log = function(e, t, o, n) {
    goog.log.ENABLED && e && e.log(t, o, n)
}, goog.log.error = function(e, t, o) {
    goog.log.ENABLED && e && e.severe(t, o)
}, goog.log.warning = function(e, t, o) {
    goog.log.ENABLED && e && e.warning(t, o)
}, goog.log.info = function(e, t, o) {
    goog.log.ENABLED && e && e.info(t, o)
}, goog.log.fine = function(e, t, o) {
    goog.log.ENABLED && e && e.fine(t, o)
}, goog.events.FocusHandler = function(e) {
    goog.events.EventTarget.call(this), this.element_ = e, e = goog.userAgent.IE ? "focusout" : "blur", this.listenKeyIn_ = goog.events.listen(this.element_, goog.userAgent.IE ? "focusin" : "focus", this, !goog.userAgent.IE), this.listenKeyOut_ = goog.events.listen(this.element_, e, this, !goog.userAgent.IE)
}, goog.inherits(goog.events.FocusHandler, goog.events.EventTarget), goog.events.FocusHandler.EventType = {
    FOCUSIN: "focusin",
    FOCUSOUT: "focusout"
}, goog.events.FocusHandler.prototype.handleEvent = function(e) {
    var t = e.getBrowserEvent(),
        t = new goog.events.BrowserEvent(t);
    t.type = "focusin" == e.type || "focus" == e.type ? goog.events.FocusHandler.EventType.FOCUSIN : goog.events.FocusHandler.EventType.FOCUSOUT, this.dispatchEvent(t)
}, goog.events.FocusHandler.prototype.disposeInternal = function() {
    goog.events.FocusHandler.superClass_.disposeInternal.call(this), goog.events.unlistenByKey(this.listenKeyIn_), goog.events.unlistenByKey(this.listenKeyOut_), delete this.element_
}, goog.ui.tree.TreeControl = function(e, t, o) {
    if (goog.ui.tree.BaseNode.call(this, e, t, o), this.setExpandedInternal(!0), this.setSelectedInternal(!0), this.selectedItem_ = this, this.typeAhead_ = new goog.ui.tree.TypeAhead, goog.userAgent.IE) try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (n) {
        goog.log.warning(this.logger_, "Failed to enable background image cache")
    }
}, goog.inherits(goog.ui.tree.TreeControl, goog.ui.tree.BaseNode), goog.ui.tree.TreeControl.prototype.keyHandler_ = null, goog.ui.tree.TreeControl.prototype.focusHandler_ = null, goog.ui.tree.TreeControl.prototype.logger_ = goog.log.getLogger("goog.ui.tree.TreeControl"), goog.ui.tree.TreeControl.prototype.focused_ = !1, goog.ui.tree.TreeControl.prototype.focusedNode_ = null, goog.ui.tree.TreeControl.prototype.showLines_ = !0, goog.ui.tree.TreeControl.prototype.showExpandIcons_ = !0, goog.ui.tree.TreeControl.prototype.showRootNode_ = !0, goog.ui.tree.TreeControl.prototype.showRootLines_ = !0, goog.ui.tree.TreeControl.prototype.getTree = function() {
    return this
}, goog.ui.tree.TreeControl.prototype.getDepth = function() {
    return 0
}, goog.ui.tree.TreeControl.prototype.reveal = function() {}, goog.ui.tree.TreeControl.prototype.handleFocus_ = function() {
    this.focused_ = !0, goog.dom.classlist.add(this.getElement(), "focused"), this.selectedItem_ && this.selectedItem_.select()
}, goog.ui.tree.TreeControl.prototype.handleBlur_ = function() {
    this.focused_ = !1, goog.dom.classlist.remove(this.getElement(), "focused")
}, goog.ui.tree.TreeControl.prototype.hasFocus = function() {
    return this.focused_
}, goog.ui.tree.TreeControl.prototype.getExpanded = function() {
    return !this.showRootNode_ || goog.ui.tree.TreeControl.superClass_.getExpanded.call(this)
}, goog.ui.tree.TreeControl.prototype.setExpanded = function(e) {
    this.showRootNode_ ? goog.ui.tree.TreeControl.superClass_.setExpanded.call(this, e) : this.setExpandedInternal(e)
}, goog.ui.tree.TreeControl.prototype.getExpandIconHtml = function() {
    return ""
}, goog.ui.tree.TreeControl.prototype.getIconElement = function() {
    var e = this.getRowElement();
    return e ? e.firstChild : null
}, goog.ui.tree.TreeControl.prototype.getExpandIconElement = function() {
    return null
}, goog.ui.tree.TreeControl.prototype.updateExpandIcon = function() {}, goog.ui.tree.TreeControl.prototype.getRowClassName = function() {
    return goog.ui.tree.TreeControl.superClass_.getRowClassName.call(this) + (this.showRootNode_ ? "" : " " + this.getConfig().cssHideRoot)
}, goog.ui.tree.TreeControl.prototype.getCalculatedIconClass = function() {
    var e = this.getExpanded();
    if (e && this.expandedIconClass_) return this.expandedIconClass_;
    if (!e && this.iconClass_) return this.iconClass_;
    var t = this.getConfig();
    return e && t.cssExpandedRootIcon ? t.cssTreeIcon + " " + t.cssExpandedRootIcon : !e && t.cssCollapsedRootIcon ? t.cssTreeIcon + " " + t.cssCollapsedRootIcon : ""
}, goog.ui.tree.TreeControl.prototype.setSelectedItem = function(e) {
    if (this.selectedItem_ != e) {
        var t = !1;
        this.selectedItem_ && (t = this.selectedItem_ == this.focusedNode_, this.selectedItem_.setSelectedInternal(!1)), (this.selectedItem_ = e) && (e.setSelectedInternal(!0), t && e.select()), this.dispatchEvent(goog.events.EventType.CHANGE)
    }
}, goog.ui.tree.TreeControl.prototype.getSelectedItem = function() {
    return this.selectedItem_
}, goog.ui.tree.TreeControl.prototype.setShowLines = function(e) {
    this.showLines_ != e && (this.showLines_ = e, this.isInDocument() && this.updateLinesAndExpandIcons_())
}, goog.ui.tree.TreeControl.prototype.getShowLines = function() {
    return this.showLines_
}, goog.ui.tree.TreeControl.prototype.updateLinesAndExpandIcons_ = function() {
    function e(i) {
        var r = i.getChildrenElement();
        if (r) {
            var l = !o || t == i.getParent() && !n ? i.getConfig().cssChildrenNoLines : i.getConfig().cssChildren;
            r.className = l, (r = i.getExpandIconElement()) && (r.className = i.getExpandIconClass())
        }
        i.forEachChild(e)
    }
    var t = this,
        o = t.getShowLines(),
        n = t.getShowRootLines();
    e(this)
}, goog.ui.tree.TreeControl.prototype.setShowRootLines = function(e) {
    this.showRootLines_ != e && (this.showRootLines_ = e, this.isInDocument() && this.updateLinesAndExpandIcons_())
}, goog.ui.tree.TreeControl.prototype.getShowRootLines = function() {
    return this.showRootLines_
}, goog.ui.tree.TreeControl.prototype.setShowExpandIcons = function(e) {
    this.showExpandIcons_ != e && (this.showExpandIcons_ = e, this.isInDocument() && this.updateLinesAndExpandIcons_())
}, goog.ui.tree.TreeControl.prototype.getShowExpandIcons = function() {
    return this.showExpandIcons_
}, goog.ui.tree.TreeControl.prototype.setShowRootNode = function(e) {
    if (this.showRootNode_ != e) {
        if (this.showRootNode_ = e, this.isInDocument()) {
            var t = this.getRowElement();
            t && (t.className = this.getRowClassName())
        }!e && this.getSelectedItem() == this && this.getFirstChild() && this.setSelectedItem(this.getFirstChild())
    }
}, goog.ui.tree.TreeControl.prototype.getShowRootNode = function() {
    return this.showRootNode_
}, goog.ui.tree.TreeControl.prototype.initAccessibility = function() {
    goog.ui.tree.TreeControl.superClass_.initAccessibility.call(this);
    var e = this.getElement();
    goog.asserts.assert(e, "The DOM element for the tree cannot be null."), goog.a11y.aria.setRole(e, "tree"), goog.a11y.aria.setState(e, "labelledby", this.getLabelElement().id)
}, goog.ui.tree.TreeControl.prototype.enterDocument = function() {
    goog.ui.tree.TreeControl.superClass_.enterDocument.call(this);
    var e = this.getElement();
    e.className = this.getConfig().cssRoot, e.setAttribute("hideFocus", "true"), this.attachEvents_(), this.initAccessibility()
}, goog.ui.tree.TreeControl.prototype.exitDocument = function() {
    goog.ui.tree.TreeControl.superClass_.exitDocument.call(this), this.detachEvents_()
}, goog.ui.tree.TreeControl.prototype.attachEvents_ = function() {
    var e = this.getElement();
    e.tabIndex = 0;
    var t = this.keyHandler_ = new goog.events.KeyHandler(e),
        o = this.focusHandler_ = new goog.events.FocusHandler(e);
    this.getHandler().listen(o, goog.events.FocusHandler.EventType.FOCUSOUT, this.handleBlur_).listen(o, goog.events.FocusHandler.EventType.FOCUSIN, this.handleFocus_).listen(t, goog.events.KeyHandler.EventType.KEY, this.handleKeyEvent).listen(e, goog.events.EventType.MOUSEDOWN, this.handleMouseEvent_).listen(e, goog.events.EventType.CLICK, this.handleMouseEvent_).listen(e, goog.events.EventType.DBLCLICK, this.handleMouseEvent_)
}, goog.ui.tree.TreeControl.prototype.detachEvents_ = function() {
    this.keyHandler_.dispose(), this.keyHandler_ = null, this.focusHandler_.dispose(), this.focusHandler_ = null
}, goog.ui.tree.TreeControl.prototype.handleMouseEvent_ = function(e) {
    goog.log.fine(this.logger_, "Received event " + e.type);
    var t = this.getNodeFromEvent_(e);
    if (t) switch (e.type) {
        case goog.events.EventType.MOUSEDOWN:
            t.onMouseDown(e);
            break;
        case goog.events.EventType.CLICK:
            t.onClick_(e);
            break;
        case goog.events.EventType.DBLCLICK:
            t.onDoubleClick_(e)
    }
}, goog.ui.tree.TreeControl.prototype.handleKeyEvent = function(e) {
    var t = !1;
    return (t = this.typeAhead_.handleNavigation(e) || this.selectedItem_ && this.selectedItem_.onKeyDown(e) || this.typeAhead_.handleTypeAheadChar(e)) && e.preventDefault(), t
}, goog.ui.tree.TreeControl.prototype.getNodeFromEvent_ = function(e) {
    var t = null;
    for (e = e.target; null != e;) {
        if (t = goog.ui.tree.BaseNode.allNodes[e.id]) return t;
        if (e == this.getElement()) break;
        e = e.parentNode
    }
    return null
}, goog.ui.tree.TreeControl.prototype.createNode = function(e) {
    return new goog.ui.tree.TreeNode(e || "", this.getConfig(), this.getDomHelper())
}, goog.ui.tree.TreeControl.prototype.setNode = function(e) {
    this.typeAhead_.setNodeInMap(e)
}, goog.ui.tree.TreeControl.prototype.removeNode = function(e) {
    this.typeAhead_.removeNodeFromMap(e)
}, goog.ui.tree.TreeControl.prototype.clearTypeAhead = function() {
    this.typeAhead_.clear()
}, goog.ui.tree.TreeControl.defaultConfig = {
    indentWidth: 19,
    cssRoot: "goog-tree-root goog-tree-item",
    cssHideRoot: "goog-tree-hide-root",
    cssItem: "goog-tree-item",
    cssChildren: "goog-tree-children",
    cssChildrenNoLines: "goog-tree-children-nolines",
    cssTreeRow: "goog-tree-row",
    cssItemLabel: "goog-tree-item-label",
    cssTreeIcon: "goog-tree-icon",
    cssExpandTreeIcon: "goog-tree-expand-icon",
    cssExpandTreeIconPlus: "goog-tree-expand-icon-plus",
    cssExpandTreeIconMinus: "goog-tree-expand-icon-minus",
    cssExpandTreeIconTPlus: "goog-tree-expand-icon-tplus",
    cssExpandTreeIconTMinus: "goog-tree-expand-icon-tminus",
    cssExpandTreeIconLPlus: "goog-tree-expand-icon-lplus",
    cssExpandTreeIconLMinus: "goog-tree-expand-icon-lminus",
    cssExpandTreeIconT: "goog-tree-expand-icon-t",
    cssExpandTreeIconL: "goog-tree-expand-icon-l",
    cssExpandTreeIconBlank: "goog-tree-expand-icon-blank",
    cssExpandedFolderIcon: "goog-tree-expanded-folder-icon",
    cssCollapsedFolderIcon: "goog-tree-collapsed-folder-icon",
    cssFileIcon: "goog-tree-file-icon",
    cssExpandedRootIcon: "goog-tree-expanded-folder-icon",
    cssCollapsedRootIcon: "goog-tree-collapsed-folder-icon",
    cssSelectedRow: "selected"
}, Blockly.Toolbox = function(e) {
    this.blockSpaceEditor_ = e, this.createDom(this.blockSpaceEditor_.svg_)
}, Blockly.Toolbox.prototype.width = 0, Blockly.Toolbox.CONFIG_ = {
    indentWidth: 19,
    cssRoot: "blocklyTreeRoot",
    cssHideRoot: "blocklyHidden",
    cssItem: "",
    cssTreeRow: "blocklyTreeRow",
    cssItemLabel: "blocklyTreeLabel",
    cssTreeIcon: "blocklyTreeIcon",
    cssExpandedFolderIcon: "blocklyTreeIconOpen",
    cssFileIcon: "blocklyTreeIconNone",
    cssSelectedRow: "blocklyTreeSelected"
}, Blockly.Toolbox.prototype.createDom = function(e) {
    this.HtmlDiv = goog.dom.createDom("div", "blocklyToolboxDiv"), this.HtmlDiv.setAttribute("dir", Blockly.RTL ? "RTL" : "LTR"), goog.dom.insertSiblingBefore(this.HtmlDiv, e), this.trashcanHolder = Blockly.createSvgElement("svg", {
        id: "trashcanHolder",
        width: 70,
        height: 90,
        style: "display: none; position: absolute"
    }, this.HtmlDiv), this.trashcan = new Blockly.Trashcan(this), this.svgTrashcan = this.trashcan.createDom(), this.svgTrashcan.setAttribute("transform", "translate(0, 10)"), this.trashcanHolder.appendChild(this.svgTrashcan), this.flyout_ = new Blockly.Flyout(this.blockSpaceEditor_), e.appendChild(this.flyout_.createDom(!0)), Blockly.bindEvent_(this.HtmlDiv, "mousedown", this, function(e) {
        Blockly.fireUiEvent(window, "resize"), this.blockSpaceEditor_.hideChaff(Blockly.isRightButton(e) || e.target == this.HtmlDiv ? !1 : !0)
    })
}, Blockly.Toolbox.prototype.init = function(e, t) {
    Blockly.Toolbox.CONFIG_.cleardotPath = Blockly.assetUrl("media/1x1.gif"), Blockly.Toolbox.CONFIG_.cssCollapsedFolderIcon = "blocklyTreeIconClosed" + (Blockly.RTL ? "Rtl" : "Ltr");
    var o = new Blockly.Toolbox.TreeControl(this, "root", Blockly.Toolbox.CONFIG_);
    this.tree_ = o, o.setShowRootNode(!1), o.setShowLines(!1), o.setShowExpandIcons(!1), o.setSelectedItem(null), this.HtmlDiv.style.display = "block", this.flyout_.init(e, !0), this.populate_(), o.render(this.HtmlDiv), goog.events.listen(window, goog.events.EventType.RESIZE, goog.partial(this.position_, t), !1, this), this.position_(t), this.enabled = !0
}, Blockly.Toolbox.prototype.position_ = function(e) {
    var t = this.HtmlDiv,
        o = goog.style.getBorderBox(e.svg_),
        n = e.svgSize();
    Blockly.RTL ? t.style.right = o.right + "px" : t.style.marginLeft = o.left, t.style.height = n.height + "px", this.width = t.offsetWidth, Blockly.RTL || (this.width -= 1), e.hideTrashRect_ || (e.svgBackground_.setAttribute("x", Blockly.RTL ? n.width - t.offsetWidth : 0), e.svgBackground_.setAttribute("width", t.offsetWidth), e.svgBackground_.setAttribute("height", n.height)), e = t.offsetWidth, t = this.trashcanHolder.getAttribute("width"), e = Math.round(e / 2 - t / 2), this.trashcanHolder.style.left = e + "px"
}, Blockly.Toolbox.prototype.populate_ = function() {
    function e(o, n) {
        for (var i, r = 0; i = o.childNodes[r]; r++)
            if (i.tagName) {
                var l = i.tagName.toUpperCase();
                if ("CATEGORY" === l) {
                    l = t.createNode(i.getAttribute("name")), l.blocks = [], n.add(l);
                    var s = i.getAttribute("custom");
                    s && (l.blocks[0] = s), e(i, l)
                } else "BLOCK" === l && n.blocks.push(i)
            }
    }
    var t = this.tree_;
    if (t.blocks = [], e(Blockly.languageTree, this.tree_), t.blocks.length) throw "Toolbox cannot have both blocks and categories in the root level.";
    Blockly.fireUiEvent(window, "resize")
}, Blockly.Toolbox.prototype.clearSelection = function() {
    this.tree_.setSelectedItem(null)
}, Blockly.Toolbox.prototype.getRect = function() {
    var e = -1e7;
    return Blockly.RTL && (e = Blockly.mainBlockSpaceEditor.svgSize().width - this.width), new goog.math.Rect(e, -1e7, 1e7 + this.width, 2e7)
}, Blockly.Toolbox.TreeControl = function(e, t, o, n) {
    goog.ui.tree.TreeControl.call(this, t, o, n), this.toolbox_ = e
}, goog.inherits(Blockly.Toolbox.TreeControl, goog.ui.tree.TreeControl), Blockly.Toolbox.TreeControl.prototype.enterDocument = function() {
    if (Blockly.Toolbox.TreeControl.superClass_.enterDocument.call(this), goog.events.BrowserFeature.TOUCH_ENABLED || "onpointerdown" in window || "onmspointerdown" in window) {
        var e = this.getElement();
        Blockly.bindEvent_(e, goog.events.EventType.TOUCHSTART, this, this.handleTouchEvent_), Blockly.bindEvent_(e, goog.events.EventType.POINTERDOWN, this, this.handleTouchEvent_), Blockly.bindEvent_(e, goog.events.EventType.MSPOINTERDOWN, this, this.handleTouchEvent_)
    }
}, Blockly.Toolbox.TreeControl.prototype.handleTouchEvent_ = function(e) {
    e.preventDefault();
    var t = this.getNodeFromEvent_(e);
    !t || e.type !== goog.events.EventType.TOUCHSTART && e.type !== goog.events.EventType.POINTERDOWN && e.type !== goog.events.EventType.MSPOINTERDOWN || (e.stopImmediatePropagation(), window.setTimeout(function() {
        t.onMouseDown(e)
    }, 1))
}, Blockly.Toolbox.TreeControl.prototype.createNode = function(e) {
    return new Blockly.Toolbox.TreeNode(this.toolbox_, e || "", this.getConfig(), this.getDomHelper())
}, Blockly.Toolbox.TreeControl.prototype.setSelectedItem = function(e) {
    this.selectedItem_ != e && (goog.ui.tree.TreeControl.prototype.setSelectedItem.call(this, e), e && e.blocks && e.blocks.length ? this.toolbox_.flyout_.show(e.blocks) : this.toolbox_.flyout_.hide())
}, Blockly.Toolbox.TreeNode = function(e, t, o, n) {
    goog.ui.tree.TreeNode.call(this, t, o, n), t = function() {
        Blockly.fireUiEvent(window, "resize")
    }, this.toolbox_ = e, goog.events.listen(this.toolbox_.tree_, goog.ui.tree.BaseNode.EventType.EXPAND, t), goog.events.listen(this.toolbox_.tree_, goog.ui.tree.BaseNode.EventType.COLLAPSE, t)
}, goog.inherits(Blockly.Toolbox.TreeNode, goog.ui.tree.TreeNode), Blockly.Toolbox.TreeNode.prototype.getExpandIconHtml = function() {
    return "<span></span>"
}, Blockly.Toolbox.TreeNode.prototype.getExpandIconElement = function() {
    return null
}, Blockly.Toolbox.TreeNode.prototype.onMouseDown = function(e) {
    this.toolbox_.enabled && (this.hasChildren() && this.isUserCollapsible_ ? (this.toggle(), this.select()) : this.isSelected() ? this.getTree().setSelectedItem(null) : this.select(), this.updateRow(), e.stopPropagation())
}, Blockly.Toolbox.TreeNode.prototype.onDoubleClick_ = function() {}, Blockly.Variables = {}, Blockly.Variables.NAME_TYPE = "VARIABLE", Blockly.Variables.NAME_TYPE_LOCAL = "LOCALVARIABLE", Blockly.Variables.allVariables = function(e) {
    var t;
    if (e) t = e.getDescendants();
    else {
        if (!Blockly.mainBlockSpace) return [];
        t = Blockly.mainBlockSpace.getAllBlocks()
    }
    e = {};
    for (var o = 0; o < t.length; o++) {
        var n = t[o].getVars;
        if (n)
            for (var n = n.call(t[o]), i = 0; i < n.length; i++) {
                var r = n[i];
                r && (e[Blockly.Names.PREFIX_ + r.toLowerCase()] = r)
            }
    }
    t = [];
    for (var l in e) t.push(e[l]);
    return t
}, Blockly.Variables.renameVariable = function(e, t, o) {
    if (t !== e) {
        o = o.getAllBlocks({
            shareMainModal: !1
        });
        for (var n = 0; n < o.length; n++) {
            var i = o[n].renameVar;
            i && i.call(o[n], e, t)
        }
        Blockly.modalBlockSpace && (Blockly.functionEditor.renameParameter(e, t), Blockly.functionEditor.refreshParamsEverywhere())
    }
}, Blockly.Variables.deleteVariable = function(e, t) {
    for (var o = t.getAllBlocks({
            shareMainModal: !1
        }), n = 0; n < o.length; n++) {
        var i = o[n].removeVar;
        i && i.call(o[n], e)
    }
    Blockly.modalBlockSpace && (Blockly.functionEditor.removeParameter(e), Blockly.functionEditor.refreshParamsEverywhere())
}, Blockly.Variables.flyoutCategory = function(e, t, o, n) {
    var i = Blockly.Variables.allVariables();
    i.sort(goog.string.caseInsensitiveCompare), i.unshift(null);
    for (var r = void 0, l = 0; l < i.length; l++)
        if (i[l] !== r) {
            var s = Blockly.Blocks.variables_get ? new Blockly.Block(n, "variables_get") : null;
            s && s.initSvg();
            var a = Blockly.Blocks.variables_set ? new Blockly.Block(n, "variables_set") : null;
            a && a.initSvg(), null === i[l] ? r = (s || a).getVars()[0] : (s && s.setTitleValue(i[l], "VAR"), a && a.setTitleValue(i[l], "VAR")), a && e.push(a), s && e.push(s), s && a ? t.push(o, 3 * o) : t.push(2 * o)
        }
}, Blockly.Variables.generateUniqueName = function(e) {
    if (e) return Blockly.Variables.generateUniqueNameFromBase_(e);
    e = Blockly.Variables.allVariables();
    var t = "";
    if (e.length) {
        e.sort(goog.string.caseInsensitiveCompare);
        for (var o = 0, n = "i", i = 0, r = !1; !t;) {
            for (i = 0, r = !1; i < e.length && !r;) e[i].toLowerCase() == n && (r = !0), i++;
            r ? ("z" === n[0] ? (o++, n = "a") : (n = String.fromCharCode(n.charCodeAt(0) + 1), "l" == n[0] && (n = String.fromCharCode(n.charCodeAt(0) + 1))), o > 0 && (n += o)) : t = n
        }
    } else t = "i";
    return t
}, Blockly.Variables.generateUniqueNameFromBase_ = function(e) {
    var t = Blockly.Variables.allVariables();
    if (-1 === t.indexOf(e)) return e;
    var o = 1,
        n = /^([^\d]*)(\d+)$/.exec(e);
    n && (e = n[1], o = parseInt(n[2], 10) + 1);
    do
        if (n = e + o.toString(), -1 === t.indexOf(n)) return n;
    while (o++)
}, Blockly.FieldVariable = function(e, t, o) {
    var n;
    if (t === Blockly.FieldParameter.dropdownChange) n = t;
    else if (t) {
        var i = this;
        n = function(e) {
            var o = i.dropdownChange(e);
            return e = void 0 === o ? e : null === o ? i.getValue() : o, t.call(i, e), o
        }
    } else n = this.dropdownChange;
    Blockly.FieldVariable.superClass_.constructor.call(this, o || Blockly.FieldVariable.dropdownCreate, n), this.setValue(e ? e : Blockly.Variables.generateUniqueName())
}, goog.inherits(Blockly.FieldVariable, Blockly.FieldDropdown), Blockly.FieldVariable.prototype.getValue = function() {
    return this.getText()
}, Blockly.FieldVariable.prototype.setValue = function(e) {
    this.value_ = e, this.setText(e)
}, Blockly.FieldVariable.dropdownCreate = function() {
    var e = Blockly.Variables.allVariables(),
        t = this.getText();
    t && -1 == e.indexOf(t) && e.push(t), e.sort(goog.string.caseInsensitiveCompare), e.push(Blockly.Msg.RENAME_VARIABLE), e.push(Blockly.Msg.NEW_VARIABLE);
    for (var t = [], o = 0; o < e.length; o++) t[o] = [e[o], e[o]];
    return t
}, Blockly.FieldVariable.prototype.dropdownChange = function(e) {
    if (e === Blockly.Msg.RENAME_VARIABLE) {
        var t = this.getText();
        return this.getParentEditor_().hideChaff(), (e = Blockly.FieldVariable.promptName(Blockly.Msg.RENAME_VARIABLE_TITLE.replace("%1", t), t)) && Blockly.Variables.renameVariable(t, e, this.sourceBlock_.blockSpace), null
    }
    return e === Blockly.Msg.NEW_VARIABLE ? (this.getParentEditor_().hideChaff(), (e = Blockly.FieldVariable.promptName(Blockly.Msg.NEW_VARIABLE_TITLE, "")) ? (Blockly.Variables.renameVariable(e, e, this.sourceBlock_.blockSpace), e) : null) : void 0
}, Blockly.FieldVariable.promptName = function(e, t) {
    var o = window.prompt(e, t);
    return o ? Blockly.FieldVariable.removeExtraWhitespace(o) : o
}, Blockly.FieldVariable.removeExtraWhitespace = function(e) {
    return e.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "")
}, Blockly.Procedures = {}, Blockly.Procedures.NAME_TYPE = "PROCEDURE", Blockly.Procedures.NAME_TYPE_FUNCTIONAL_VARIABLE = "FUNCTIONAL_VARIABLE", Blockly.Procedures.DEFINITION_BLOCK_TYPES = ["procedures_defnoreturn", "procedures_defreturn", "functional_definition"], Blockly.Procedures.PROCEDURAL_TO_FUNCTIONAL_CALL_TYPE = "procedural_to_functional_call", Blockly.Procedures.allProcedures = function() {
    var e = [],
        t = [],
        o = [];
    return Blockly.mainBlockSpace.getAllBlocks().forEach(function(n) {
        if (n.getProcedureInfo) {
            var i = n.getProcedureInfo();
            switch (n.type) {
                case "functional_definition":
                    o.push(i), "start_blocks" === Blockly.editBlocks && (n = goog.object.clone(i), n.callType = Blockly.Procedures.PROCEDURAL_TO_FUNCTIONAL_CALL_TYPE, o.push(n));
                    break;
                case "procedures_defreturn":
                    e.push(i);
                    break;
                case "procedures_defnoreturn":
                    t.push(i)
            }
        }
    }), t.sort(Blockly.Procedures.procedureInfoSort_), e.sort(Blockly.Procedures.procedureInfoSort_), o.sort(Blockly.Procedures.procedureInfoSort_), goog.array.concat(t, e, o)
}, Blockly.Procedures.procedureInfoSort_ = function(e, t) {
    var o = e.name.toLowerCase(),
        n = t.name.toLowerCase();
    return o > n ? 1 : n > o ? -1 : 0
}, Blockly.Procedures.findLegalName = function(e, t) {
    if (t.isInFlyout) return e;
    for (var o = e; !Blockly.Procedures.isLegalName(o, t.blockSpace, t);) var n = o.match(/^(.*?)(\d+)$/),
        o = n ? n[1] + (parseInt(n[2], 10) + 1) : o + "2";
    return o
}, Blockly.Procedures.isLegalName = function(e, t, o) {
    return !t.getAllBlocks().filter(function(e) {
        return e !== o
    }).some(function(t) {
        return t.getProcedureInfo && Blockly.Names.equals(t.getProcedureInfo().name, e)
    })
}, Blockly.Procedures.rename = function(e) {
    e = e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""), e = Blockly.Procedures.findLegalName(e, this.sourceBlock_);
    for (var t = this.sourceBlock_.blockSpace.getAllBlocks(), o = 0; o < t.length; o++) {
        var n = t[o].renameProcedure;
        n && n.call(t[o], this.text_, e)
    }
    return e
}, Blockly.Procedures.flyoutCategory = function(e, t, o, n, i) {
    if (!Blockly.functionEditor) {
        if (Blockly.Blocks.procedures_defnoreturn) {
            var r = new Blockly.Block(n, "procedures_defnoreturn");
            r.initSvg(), e.push(r), t.push(2 * o)
        }
        Blockly.Blocks.procedures_defreturn && (r = new Blockly.Block(n, "procedures_defreturn"), r.initSvg(), e.push(r), t.push(2 * o)), Blockly.Blocks.procedures_ifreturn && (r = new Blockly.Block(n, "procedures_ifreturn"), r.initSvg(), e.push(r), t.push(2 * o)), t.length && (t[t.length - 1] = 3 * o)
    }
    Blockly.Procedures.allProcedures().forEach(function(r) {
        if (!i || i(r)) {
            var l = Blockly.Procedures.createCallerBlock(n, r);
            e.push(l), t.push(2 * o), Blockly.editBlocks && (r = Blockly.Procedures.createFunctionPassingBlock(n, r), e.push(r), t.push(2 * o))
        }
    })
}, Blockly.Procedures.createCallerFromDefinition = function(e, t) {
    return Blockly.Procedures.createCallerBlock(e, t.getProcedureInfo())
}, Blockly.Procedures.createCallerBlock = function(e, t) {
    var o = new Blockly.Block(e, t.callType);
    o.setTitleValue(t.name, "NAME");
    for (var n = [], i = 0; i < t.parameterNames.length; i++) n[i] = "ARG" + i;
    return o.setProcedureParameters(t.parameterNames, n, t.parameterTypes), o.initSvg(), o
}, Blockly.Procedures.createFunctionPassingBlock = function(e, t) {
    var o = new Blockly.Block(e, "functional_pass");
    return o.setTitleValue(t.name, "NAME"), o.initSvg(), o
}, Blockly.Procedures.getCallers = function(e, t) {
    return t.getAllBlocks().filter(function(t) {
        return t.getCallName && Blockly.Names.equals(e, t.getCallName())
    })
}, Blockly.Procedures.disposeCallers = function(e, t) {
    Blockly.Procedures.getCallers(e, t).forEach(function(e) {
        e.dispose(!0, !1)
    })
}, Blockly.Procedures.mutateCallers = function(e, t, o, n, i) {
    Blockly.Procedures.getCallers(e, t).forEach(function(e) {
        e.setProcedureParameters(o, n, i)
    }, this)
}, Blockly.Procedures.getDefinition = function(e, t) {
    return goog.array.find(t.getAllBlocks(), function(t) {
        return t.getProcedureInfo && Blockly.Names.equals(t.getProcedureInfo().name, e)
    })
}, goog.structs.LinkedMap = function(e, t) {
    this.maxCount_ = e || null, this.cache_ = !!t, this.map_ = new goog.structs.Map, this.head_ = new goog.structs.LinkedMap.Node_("", void 0), this.head_.next = this.head_.prev = this.head_
}, goog.structs.LinkedMap.prototype.findAndMoveToTop_ = function(e) {
    return (e = this.map_.get(e)) && this.cache_ && (e.remove(), this.insert_(e)), e
}, goog.structs.LinkedMap.prototype.get = function(e, t) {
    var o = this.findAndMoveToTop_(e);
    return o ? o.value : t
}, goog.structs.LinkedMap.prototype.peekValue = function(e, t) {
    var o = this.map_.get(e);
    return o ? o.value : t
}, goog.structs.LinkedMap.prototype.set = function(e, t) {
    var o = this.findAndMoveToTop_(e);
    o ? o.value = t : (o = new goog.structs.LinkedMap.Node_(e, t), this.map_.set(e, o), this.insert_(o))
}, goog.structs.LinkedMap.prototype.peek = function() {
    return this.head_.next.value
}, goog.structs.LinkedMap.prototype.peekLast = function() {
    return this.head_.prev.value
}, goog.structs.LinkedMap.prototype.shift = function() {
    return this.popNode_(this.head_.next)
}, goog.structs.LinkedMap.prototype.pop = function() {
    return this.popNode_(this.head_.prev)
}, goog.structs.LinkedMap.prototype.remove = function(e) {
    return (e = this.map_.get(e)) ? (this.removeNode(e), !0) : !1
}, goog.structs.LinkedMap.prototype.removeNode = function(e) {
    e.remove(), this.map_.remove(e.key)
}, goog.structs.LinkedMap.prototype.getCount = function() {
    return this.map_.getCount()
}, goog.structs.LinkedMap.prototype.isEmpty = function() {
    return this.map_.isEmpty()
}, goog.structs.LinkedMap.prototype.setMaxCount = function(e) {
    this.maxCount_ = e || null, null != this.maxCount_ && this.truncate_(this.maxCount_)
}, goog.structs.LinkedMap.prototype.getKeys = function() {
    return this.map(function(e, t) {
        return t
    })
}, goog.structs.LinkedMap.prototype.getValues = function() {
    return this.map(function(e) {
        return e
    })
}, goog.structs.LinkedMap.prototype.contains = function(e) {
    return this.some(function(t) {
        return t == e
    })
}, goog.structs.LinkedMap.prototype.containsKey = function(e) {
    return this.map_.containsKey(e)
}, goog.structs.LinkedMap.prototype.clear = function() {
    this.truncate_(0)
}, goog.structs.LinkedMap.prototype.forEach = function(e, t) {
    for (var o = this.head_.next; o != this.head_; o = o.next) e.call(t, o.value, o.key, this)
}, goog.structs.LinkedMap.prototype.map = function(e, t) {
    for (var o = [], n = this.head_.next; n != this.head_; n = n.next) o.push(e.call(t, n.value, n.key, this));
    return o
}, goog.structs.LinkedMap.prototype.some = function(e, t) {
    for (var o = this.head_.next; o != this.head_; o = o.next)
        if (e.call(t, o.value, o.key, this)) return !0;
    return !1
}, goog.structs.LinkedMap.prototype.every = function(e, t) {
    for (var o = this.head_.next; o != this.head_; o = o.next)
        if (!e.call(t, o.value, o.key, this)) return !1;
    return !0
}, goog.structs.LinkedMap.prototype.insert_ = function(e) {
    this.cache_ ? (e.next = this.head_.next, e.prev = this.head_, this.head_.next = e, e.next.prev = e) : (e.prev = this.head_.prev, e.next = this.head_, this.head_.prev = e, e.prev.next = e), null != this.maxCount_ && this.truncate_(this.maxCount_)
}, goog.structs.LinkedMap.prototype.truncate_ = function(e) {
    for (var t = this.map_.getCount(); t > e; t--) this.removeNode(this.cache_ ? this.head_.prev : this.head_.next)
}, goog.structs.LinkedMap.prototype.popNode_ = function(e) {
    return this.head_ != e && this.removeNode(e), e.value
}, goog.structs.LinkedMap.Node_ = function(e, t) {
    this.key = e, this.value = t
}, goog.structs.LinkedMap.Node_.prototype.remove = function() {
    this.prev.next = this.next, this.next.prev = this.prev, delete this.prev, delete this.next
}, Blockly.HorizontalFlyout = function() {
    Blockly.Flyout.apply(this, arguments), this.autoClose = !1, this.height_ = 10, this.customYOffset = this.flyoutRows = 0
}, goog.inherits(Blockly.HorizontalFlyout, Blockly.Flyout), Blockly.HorizontalFlyout.prototype.show = function() {
    var e = this.targetBlockSpace_.getMetrics();
    this.width_ = Math.max(0, e.viewWidth - 2 * this.CORNER_RADIUS), Blockly.HorizontalFlyout.superClass_.show.apply(this, arguments)
}, Blockly.HorizontalFlyout.prototype.hide = function() {
    this.height_ = 10, this.flyoutRows = 0, Blockly.HorizontalFlyout.superClass_.hide.apply(this, arguments)
}, Blockly.HorizontalFlyout.prototype.setVisibility = function(e) {
    e ? this.softShow() : this.softHide()
}, Blockly.HorizontalFlyout.prototype.softHide = function() {
    Blockly.addClass_(this.svgGroup_, "hiddenFlyout")
}, Blockly.HorizontalFlyout.prototype.softShow = function() {
    Blockly.removeClass_(this.svgGroup_, "hiddenFlyout")
}, Blockly.HorizontalFlyout.prototype.position_ = function() {
    if (this.isVisible()) {
        var e = this.targetBlockSpace_.getMetrics();
        if (e) {
            var t = this.height_ - this.CORNER_RADIUS,
                o = Math.max(0, e.viewWidth - 2 * this.CORNER_RADIUS),
                n = ["M 0,0"];
            n.push("v", t), n.push("a", this.CORNER_RADIUS, this.CORNER_RADIUS, 0, 0, 0, this.CORNER_RADIUS, this.CORNER_RADIUS), n.push("h", o), n.push("a", this.CORNER_RADIUS, this.CORNER_RADIUS, 0, 0, 0, this.CORNER_RADIUS, -this.CORNER_RADIUS), n.push("v", -t), n.push("z"), this.svgBackground_.setAttribute("d", n.join(" ")), this.width_ = o, this.svgGroup_.setAttribute("transform", "translate(" + e.absoluteLeft + "," + (e.absoluteTop - this.height_ + this.customYOffset) + ")"), this.scrollbar_ && this.scrollbar_.resize(), this.svgBackground_.style.pointerEvents = this.scrollbar_ ? "initial" : "none"
        }
    }
}, Blockly.HorizontalFlyout.prototype.getYPosition = function() {
    return this.customYOffset || 0
}, Blockly.HorizontalFlyout.prototype.layoutBlock_ = function(e, t, o, n) {
    var i = e.getHeightWidth();
    (Blockly.RTL && 0 > t.x - i.width || !Blockly.RTL && t.x + i.width > this.width_) && (this.flyoutRows++, t.y += i.height + o / 2, t.x = n), e.moveBy(t.x, t.y), e = i.width + o / 2, Blockly.RTL && (e = -e), t.x += e, this.height_ = t.y + i.height + o / 2
}, Blockly.HorizontalFlyout.prototype.reflow = function() {}, Blockly.BlockSpaceEditor = function(e, t, o, n) {
    t && (this.getBlockSpaceMetrics_ = t), o && (this.setBlockSpaceMetrics_ = o), n && (this.hideTrashRect_ = n), this.blockSpace = new Blockly.BlockSpace(this, goog.bind(this.getBlockSpaceMetrics_, this), goog.bind(this.setBlockSpaceMetrics_, this), e), this.createDom_(e), this.init_()
}, Blockly.BlockSpaceEditor.BUMP_ENTIRE_BLOCK = !1, Blockly.BlockSpaceEditor.ENTIRE_BUMP_PADDING_TOP = 2, Blockly.BlockSpaceEditor.ENTIRE_BUMP_PADDING_LEFT = 2, Blockly.BlockSpaceEditor.ENTIRE_BUMP_PADDING_BOTTOM = 2, Blockly.BlockSpaceEditor.ENTIRE_BUMP_PADDING_RIGHT = 2, Blockly.BlockSpaceEditor.BUMP_PADDING_TOP = 15, Blockly.BlockSpaceEditor.BUMP_PADDING_LEFT = 15, Blockly.BlockSpaceEditor.BUMP_PADDING_BOTTOM = 25, Blockly.BlockSpaceEditor.BUMP_PADDING_RIGHT = 25, Blockly.BlockSpaceEditor.BUMP_DEBUG = !1, Blockly.BlockSpaceEditor.SCROLL_DRAG_DEBUG = !1, Blockly.BlockSpaceEditor.prototype.populateSVGEffects_ = function(e) {
    if (!goog.dom.getElement("blocklySvgDefsGlobal")) {
        e = Blockly.createSvgElement("svg", {
            id: "blocklyFilters",
            width: 0,
            height: 0,
            style: "display: block"
        }, e), e = Blockly.createSvgElement("defs", {
            id: "blocklySvgDefsGlobal"
        }, e);
        var t, o;
        t = Blockly.createSvgElement("filter", {
            id: "blocklyEmboss"
        }, e), Blockly.createSvgElement("feGaussianBlur", {
            "in": "SourceAlpha",
            stdDeviation: 1,
            result: "blur"
        }, t), o = Blockly.createSvgElement("feSpecularLighting", {
            "in": "blur",
            surfaceScale: 1,
            specularConstant: .5,
            specularExponent: 10,
            "lighting-color": "white",
            result: "specOut"
        }, t), Blockly.createSvgElement("fePointLight", {
            x: -5e3,
            y: -1e4,
            z: 2e4
        }, o), Blockly.createSvgElement("feComposite", {
            "in": "specOut",
            in2: "SourceAlpha",
            operator: "in",
            result: "specOut"
        }, t), Blockly.createSvgElement("feComposite", {
            "in": "SourceGraphic",
            in2: "specOut",
            operator: "arithmetic",
            k1: 0,
            k2: 1,
            k3: 1,
            k4: 0
        }, t), t = Blockly.createSvgElement("filter", {
            id: "blocklyTrashcanShadowFilter",
            height: "150%",
            y: "-20%"
        }, e), Blockly.createSvgElement("feGaussianBlur", {
            "in": "SourceAlpha",
            stdDeviation: 2,
            result: "blur"
        }, t), Blockly.createSvgElement("feOffset", {
            "in": "blur",
            dx: 1,
            dy: 1,
            result: "offsetBlur"
        }, t), t = Blockly.createSvgElement("feMerge", {}, t), Blockly.createSvgElement("feMergeNode", {
            "in": "offsetBlur"
        }, t), Blockly.createSvgElement("feMergeNode", {
            "in": "SourceGraphic"
        }, t), t = Blockly.createSvgElement("filter", {
            id: "blocklyShadowFilter"
        }, e), Blockly.createSvgElement("feGaussianBlur", {
            stdDeviation: 2
        }, t), e = Blockly.createSvgElement("pattern", {
            id: "blocklyDisabledPattern",
            patternUnits: "userSpaceOnUse",
            width: 10,
            height: 10
        }, e), Blockly.createSvgElement("rect", {
            width: 10,
            height: 10,
            fill: "#aaa"
        }, e), Blockly.createSvgElement("path", {
            d: "M 0 0 L 10 10 M 10 0 L 0 10",
            stroke: "#cc0"
        }, e)
    }
}, Blockly.BlockSpaceEditor.prototype.createDom_ = function(e) {
    e.setAttribute("dir", "LTR"), this.populateSVGEffects_(e);
    var t = Blockly.createSvgElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:html": "http://www.w3.org/1999/xhtml",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        version: "1.1",
        "class": "blocklySvg"
    }, null);
    this.svg_ = t, e.appendChild(t), goog.events.listen(t, "selectstart", function() {
        return !1
    }), this.defs_ = Blockly.createSvgElement("defs", {
        id: "blocklySvgDefs"
    }, t), this.blockSpace.maxBlocks = Blockly.maxBlocks, this.hideTrashRect_ || Blockly.readOnly || !Blockly.hasCategories || (this.svgBackground_ = Blockly.createSvgElement("rect", {
        id: "toolboxRect",
        "class": "blocklyToolboxBackground"
    }, this.svg_)), t.appendChild(this.blockSpace.createDom()), Blockly.readOnly || (this.addToolboxOrFlyout_(), this.addChangeListener(this.bumpBlocksIfNotDragging)), this.setEnableToolbox = function(e) {
        this.flyout_ ? this.flyout_.setEnabled(e) : this.toolbox && (this.toolbox.enabled = e)
    }, t.appendChild(Blockly.Tooltip.createDom()), this.svgResize(), Blockly.WidgetDiv.DIV = goog.dom.createDom("div", "blocklyWidgetDiv"), Blockly.WidgetDiv.DIV.style.direction = Blockly.RTL ? "rtl" : "ltr", document.body.appendChild(Blockly.WidgetDiv.DIV)
}, Blockly.BlockSpaceEditor.prototype.addToSvgDefs = function(e) {
    this.defs_.appendChild(e)
}, Blockly.BlockSpaceEditor.prototype.addToolboxOrFlyout_ = function() {
    Blockly.hasCategories ? this.toolbox = new Blockly.Toolbox(this) : this.addFlyout_()
}, Blockly.BlockSpaceEditor.prototype.addFlyout_ = function() {
    var e = this.flyout_ = new Blockly.Flyout(this, !0),
        t = e.createDom(!1);
    e.init(this.blockSpace, !0), e.autoClose = !1, goog.dom.insertSiblingBefore(t, this.blockSpace.svgGroup_)
}, Blockly.BlockSpaceEditor.prototype.getDeleteAreas = function() {
    var e = [];
    return this.flyout_ && goog.array.extend(e, this.flyout_.getRect()), this.toolbox && goog.array.extend(e, this.toolbox.getRect()), e
}, Blockly.BlockSpaceEditor.prototype.bumpBlocksIfNotDragging = function() {
    Blockly.Block.isDragging() || this.bumpBlocksIntoBlockSpace()
}, Blockly.BlockSpaceEditor.prototype.bumpBlocksIntoBlockSpace = function() {
    var e = this.blockSpace.getMetrics();
    if (e) {
        if (!Blockly.BlockSpaceEditor.BUMP_ENTIRE_BLOCK) var e = this.blockSpace.getScrollableSize(e),
            t = Blockly.BlockSpaceEditor.BUMP_PADDING_TOP,
            o = Blockly.BlockSpaceEditor.BUMP_PADDING_LEFT,
            n = e.height - Blockly.BlockSpaceEditor.BUMP_PADDING_BOTTOM,
            i = e.width - Blockly.BlockSpaceEditor.BUMP_PADDING_RIGHT,
            r = i - o,
            l = n - t;
        this.blockSpace.getTopBlocks(!1, !1).forEach(function(e) {
            if (e.isVisible() && !e.isCurrentlyBeingDragged()) {
                if (!Blockly.BlockSpaceEditor.BUMP_ENTIRE_BLOCK) {
                    var s = e.getHeightWidth();
                    if (s.width > r || s.height > l) return
                }
                var a, g, c;
                if (Blockly.BlockSpaceEditor.BUMP_ENTIRE_BLOCK) {
                    var u = this.blockSpace.getScrollableBox().expand(-Blockly.BlockSpaceEditor.ENTIRE_BUMP_PADDING_TOP, -Blockly.BlockSpaceEditor.ENTIRE_BUMP_PADDING_RIGHT, -Blockly.BlockSpaceEditor.ENTIRE_BUMP_PADDING_BOTTOM, -Blockly.BlockSpaceEditor.ENTIRE_BUMP_PADDING_LEFT),
                        h = e.getBox(),
                        p = Blockly.getBoxOverflow(u, h);
                    a = Math.max(0, p.left), g = Math.max(0, p.right), s = Math.max(0, p.top), c = Math.max(0, p.bottom)
                } else c = e.getRelativeToSurfaceXY(), a = Math.max(0, o - c.x), g = Math.max(0, c.x - i), s = Math.max(0, t - c.y), c = Math.max(0, c.y - n);
                a = a ? a : -g, s = s ? s : -c, Blockly.BlockSpaceEditor.BUMP_ENTIRE_BLOCK && (Blockly.isBoxWiderThan(h, u) && (a = p.left), Blockly.isBoxTallerThan(h, u) && (s = p.top)), (p = a || s) && e.moveBy(a, s), Blockly.BlockSpaceEditor.BUMP_DEBUG && Blockly.BlockSpaceEditor.BUMP_ENTIRE_BLOCK && (s = e.getBox(), this.blockSpace.drawDebugBox("block box" + e.id, h, p ? "red" : "green"), this.blockSpace.drawDebugBox("block after" + e.id, s, "purple"), this.blockSpace.drawDebugBox("block space box" + e.id, u, "blue"))
            }
        }, this)
    }
}, Blockly.BlockSpaceEditor.prototype.init_ = function() {
    this.detectBrokenControlPoints(), this.blockSpace.bindBeginPanDragHandler(this.svg_, goog.bind(this.hideChaff, this)), this.blockSpace.bindScrollOnWheelHandler(this.svg_), Blockly.bindEvent_(Blockly.WidgetDiv.DIV, "contextmenu", null, Blockly.blockContextMenu), Blockly.documentEventsBound_ || (Blockly.bindEvent_(window, "resize", this, this.svgResize), Blockly.bindEvent_(document, "keydown", this, this.onKeyDown_), goog.userAgent.IPAD && Blockly.bindEvent_(window, "orientationchange", document, function() {
        Blockly.fireUiEvent(window, "resize")
    }, !1), Blockly.documentEventsBound_ = !0), Blockly.languageTree && (Blockly.hasCategories ? this.toolbox.init(this.blockSpace, this) : (this.flyout_.init(this.blockSpace, !0), this.flyout_.show(Blockly.languageTree.childNodes))), (Blockly.hasVerticalScrollbars || Blockly.hasHorizontalScrollbars) && (this.blockSpace.scrollbarPair = new Blockly.ScrollbarPair(this.blockSpace, Blockly.hasHorizontalScrollbars, Blockly.hasVerticalScrollbars), this.blockSpace.scrollbarPair.resize())
}, Blockly.BlockSpaceEditor.prototype.detectBrokenControlPoints = function() {
    if (goog.userAgent.WEBKIT) {
        var e = Blockly.createSvgElement("path", {
            d: "m 0,0 c 0,-5 0,-5 0,0 H 50 V 50 z"
        }, this.svg_);
        Blockly.isMsie() || Blockly.isTrident() ? (e.style.display = "inline", e.bBox_ = {
            x: e.getBBox().x,
            y: e.getBBox().y,
            width: e.scrollWidth,
            height: e.scrollHeight
        }) : e.bBox_ = e.getBBox(), 50 < e.bBox_.height && (Blockly.BROKEN_CONTROL_POINTS = !0), this.svg_.removeChild(e)
    }
}, Blockly.BlockSpaceEditor.prototype.svgSize = function() {
    return {
        width: this.svg_.cachedWidth_,
        height: this.svg_.cachedHeight_
    }
}, Blockly.BlockSpaceEditor.prototype.svgResize = function() {
    var e = this.svg_,
        t = window.getComputedStyle(e),
        o = 0;
    t && (o = (parseInt(t.borderLeftWidth, 10) || 0) + (parseInt(t.borderRightWidth, 10) || 0));
    var t = e.parentNode,
        n = this.getWorkspaceTopOffset(),
        o = t.clientWidth - o,
        t = t.clientHeight - n;
    e.cachedWidth_ != o && (e.setAttribute("width", o + "px"), e.cachedWidth_ = o), e.cachedHeight_ != t && (e.setAttribute("height", t + "px"), e.cachedHeight_ = t), this.blockSpace.scrollbarPair ? this.blockSpace.scrollbarPair.resize() : this.setBlockSpaceMetricsNoScroll_()
}, Blockly.BlockSpaceEditor.prototype.getWorkspaceTopOffset = function() {
    var e = this.svg_,
        t = e.parentNode,
        o = window.getComputedStyle(t),
        o = o ? parseInt(o.borderTopWidth, 10) || 0 : 0;
    return goog.style.getPageOffsetTop(e) - (goog.style.getPageOffsetTop(t) + o)
}, Blockly.BlockSpaceEditor.prototype.appendSVGChild = function(e) {
    this.svg_.appendChild(e)
}, Blockly.BlockSpaceEditor.prototype.getSVGElement = function() {
    return this.svg_
}, Blockly.BlockSpaceEditor.prototype.getBlockSpaceWidth = function() {
    var e = this.blockSpace.getMetrics();
    return e ? e.viewWidth : 0
}, Blockly.BlockSpaceEditor.prototype.getToolboxWidth = function() {
    var e = 0,
        t = this.flyout_ || this.toolbox && this.toolbox.flyout_;
    return t && (t = t.blockSpace_.getMetrics()) && (e = t.viewWidth), this.toolbox && (e += this.toolbox.HtmlDiv.getBoundingClientRect().width), e
}, Blockly.BlockSpaceEditor.prototype.setCursor = function(e) {
    Blockly.Css.setCursor(e, this.svg_)
}, Blockly.BlockSpaceEditor.prototype.onKeyDown_ = function(e) {
    if (!Blockly.isTargetInput(e))
        if (27 == e.keyCode) this.hideChaff();
        else if (8 == e.keyCode || 46 == e.keyCode) try {
        Blockly.selected && Blockly.selected.isDeletable() && (this.hideChaff(), Blockly.selected.dispose(!0, !0))
    } finally {
        e.preventDefault()
    } else(e.altKey || e.ctrlKey || e.metaKey) && (Blockly.selected && Blockly.selected.isDeletable() && Blockly.selected.isCopyable() && (this.hideChaff(), 67 == e.keyCode ? Blockly.BlockSpaceEditor.copy_(Blockly.selected) : 88 == e.keyCode && (Blockly.BlockSpaceEditor.copy_(Blockly.selected), Blockly.selected.dispose(!0, !0))), 86 == e.keyCode && Blockly.clipboard_ && Blockly.focusedBlockSpace.paste(Blockly.clipboard_))
}, Blockly.BlockSpaceEditor.terminateDrag_ = function() {
    Blockly.Block.terminateDrag_(), Blockly.Flyout.terminateDrag_()
}, Blockly.BlockSpaceEditor.copy_ = function(e) {
    var t = Blockly.Xml.blockToDom(e);
    Blockly.Xml.deleteNext(t);
    var o = e.getRelativeToSurfaceXY();
    t.setAttribute("x", Blockly.RTL ? -o.x : o.x), t.setAttribute("y", o.y), Blockly.clipboard_ = {
        dom: t,
        sourceBlockSpace: e.blockSpace
    }
}, Blockly.BlockSpaceEditor.showContextMenu_ = function(e) {
    if (!Blockly.readOnly) {
        var t = [];
        if (Blockly.collapse) {
            for (var o = !1, n = !1, i = this.getTopBlocks(!1), r = 0; r < i.length; r++) i[r].isCollapsed() ? o = !0 : n = !0;
            n = {
                enabled: n
            }, n.text = Blockly.Msg.COLLAPSE_ALL, n.callback = function() {
                for (var e = 0; e < i.length; e++) i[e].setCollapsed(!0)
            }, t.push(n), o = {
                enabled: o
            }, o.text = Blockly.Msg.EXPAND_ALL, o.callback = function() {
                for (var e = 0; e < i.length; e++) i[e].setCollapsed(!1)
            }, t.push(o)
        }
        o = {
            enabled: !1
        }, o.text = Blockly.Msg.HELP, o.callback = function() {}, t.push(o), Blockly.ContextMenu.show(e, t)
    }
}, Blockly.BlockSpaceEditor.prototype.hideChaff = function(e) {
    Blockly.Tooltip.hide(), Blockly.WidgetDiv.hide(), this.toolbox && !e && this.toolbox.flyout_ && this.toolbox.flyout_.autoClose && this.toolbox.clearSelection()
}, Blockly.BlockSpaceEditor.prototype.getBlockSpaceMetrics_ = function() {
    var e, t = this.svgSize(),
        o = 0;
    (this.toolbox || this.flyout_) && (o = this.toolbox ? this.toolbox.width : this.flyout_.width_), t.width -= o;
    try {
        var n = this.getCanvasBBox(this.blockSpace.getCanvas());
        e = Blockly.svgRectToRect(n), this.blockSpace.pickedUpBlockOrigin_ && e.boundingRect(this.blockSpace.pickedUpBlockOrigin_)
    } catch (i) {
        return null
    }
    var o = Blockly.RTL ? 0 : o,
        n = this.blockSpace.getScrollOffsetX(),
        r = t.width,
        t = t.height,
        l = this.blockSpace.getScrollOffsetY();
    return {
        viewHeight: t,
        viewWidth: r,
        viewTop: l,
        viewLeft: n,
        contentHeight: e.height,
        contentWidth: e.width,
        contentTop: e.top,
        contentLeft: e.left,
        absoluteTop: 0,
        absoluteLeft: o
    }
}, Blockly.BlockSpaceEditor.prototype.getCanvasBBox = function(e) {
    return Blockly.isMsie() || Blockly.isTrident() ? (e.style.display = "inline", {
        x: e.getBBox().x,
        y: e.getBBox().y,
        width: e.scrollWidth,
        height: e.scrollHeight
    }) : e.getBBox()
}, Blockly.BlockSpaceEditor.prototype.setBlockSpaceMetrics_ = function(e) {
    if (!this.blockSpace.scrollbarPair) throw "Attempt to set editor's scroll position without scrollbars.";
    var t = this.getBlockSpaceMetrics_(),
        o = this.blockSpace.getScrollableSize(t);
    goog.isNumber(e.x) && (this.blockSpace.xOffsetFromView = -o.width * e.x), goog.isNumber(e.y) && (this.blockSpace.yOffsetFromView = -o.height * e.y), e = "translate(" + (this.blockSpace.xOffsetFromView + t.absoluteLeft) + "," + (this.blockSpace.yOffsetFromView + t.absoluteTop) + ")", this.blockSpace.getCanvas().setAttribute("transform", e), this.blockSpace.getDragCanvas().setAttribute("transform", e), this.blockSpace.getBubbleCanvas().setAttribute("transform", e)
}, Blockly.BlockSpaceEditor.prototype.setBlockSpaceMetricsNoScroll_ = function() {
    var e = this.getBlockSpaceMetrics_();
    e && (e = "translate(" + e.absoluteLeft + "," + e.absoluteTop + ")", this.blockSpace.getCanvas().setAttribute("transform", e), this.blockSpace.getDragCanvas().setAttribute("transform", e), this.blockSpace.getBubbleCanvas().setAttribute("transform", e))
}, Blockly.BlockSpaceEditor.prototype.addChangeListener = function(e) {
    return Blockly.bindEvent_(this.blockSpace.getCanvas(), "blocklyBlockSpaceChange", this, e)
}, Blockly.removeChangeListener = function(e) {
    Blockly.unbindEvent_(e)
}, Blockly.FunctionEditor = function() {
    this.created_ = !1, this.orderedParamIDsToBlocks_ = new goog.structs.LinkedMap, this.modalBlockSpace = this.onResizeWrapper_ = this.modalBackground_ = this.frameText_ = this.frameInner_ = this.frameBase_ = this.flyout_ = this.contractDiv_ = this.deleteButton_ = this.closeButton_ = this.container_ = this.functionDefinitionBlock = null
}, Blockly.FunctionEditor.BLOCK_LAYOUT_LEFT_MARGIN = Blockly.BlockSpaceEditor.BUMP_PADDING_LEFT, Blockly.FunctionEditor.BLOCK_LAYOUT_TOP_MARGIN = Blockly.BlockSpaceEditor.BUMP_PADDING_TOP, Blockly.FunctionEditor.DELETE_BUTTON_MARGIN = 25, Blockly.FunctionEditor.CLOSE_BUTTON_OVERHANG = 14, Blockly.FunctionEditor.RTL_CLOSE_BUTTON_OFFSET = 5, Blockly.FunctionEditor.prototype.definitionBlockType = "procedures_defnoreturn", Blockly.FunctionEditor.prototype.parameterBlockType = "parameters_get", Blockly.FunctionEditor.prototype.hasDeleteButton = !1, Blockly.FunctionEditor.prototype.autoOpenFunction = function(e) {
    this.autoOpenWithLevelConfiguration({
        autoOpenFunction: e
    })
}, Blockly.FunctionEditor.prototype.autoOpenWithLevelConfiguration = function(e) {
    e.autoOpenFunction && this.openAndEditFunction(e.autoOpenFunction)
}, Blockly.FunctionEditor.prototype.openEditorForCallBlock_ = function(e) {
    var t = e.getTitleValue("NAME");
    e.blockSpace.blockSpaceEditor.hideChaff(), this.hideIfOpen(), this.openAndEditFunction(t)
}, Blockly.FunctionEditor.prototype.openAndEditFunction = function(e) {
    var t = Blockly.mainBlockSpace.findFunction(e);
    if (!t) throw Error("Can't find definition block to edit");
    this.show(), this.setupUIForBlock_(t), this.functionDefinitionBlock = this.moveToModalBlockSpace(t), this.functionDefinitionBlock.setMovable(!1), this.functionDefinitionBlock.setDeletable(!1), this.functionDefinitionBlock.setEditable(!1), this.populateParamToolbox_(), this.setupUIAfterBlockInEditor_(), goog.dom.getElement("functionNameText").value = e, goog.dom.getElement("functionDescriptionText").value = this.functionDefinitionBlock.description_ || "", Blockly.fireUiEvent(window, "function_editor_opened")
}, Blockly.FunctionEditor.prototype.setupUIForBlock_ = function() {}, Blockly.FunctionEditor.prototype.setupUIAfterBlockInEditor_ = function() {}, Blockly.FunctionEditor.prototype.populateParamToolbox_ = function() {
    this.orderedParamIDsToBlocks_.clear(), this.addParamsFromProcedure_(), this.resetParamIDs_(), this.refreshParamsEverywhere()
}, Blockly.FunctionEditor.prototype.addParamsFromProcedure_ = function() {
    for (var e = this.functionDefinitionBlock.getProcedureInfo(), t = 0; t < e.parameterNames.length; t++) this.addParameter(e.parameterNames[t])
}, Blockly.FunctionEditor.prototype.getParamNameType = function(e) {
    var t = this.orderedParamIDsToBlocks_.get(e);
    if (!t) throw "Block not found for ID " + e;
    return this.paramNameTypeFromXML_(t)
}, Blockly.FunctionEditor.prototype.paramNameTypeFromXML_ = function(e) {
    var t = {};
    return t.name = e.firstElementChild.textContent, t.type = e.childNodes[1].textContent, t
}, Blockly.FunctionEditor.prototype.openWithNewFunction = function() {
    this.ensureCreated_();
    var e = Blockly.Xml.domToBlock(Blockly.mainBlockSpace, Blockly.createSvgElement("block", {
        type: this.definitionBlockType
    }));
    e.userCreated = !0, this.openAndEditFunction(e.getTitleValue("NAME"))
}, Blockly.FunctionEditor.prototype.bindToolboxHandlers_ = function() {
    var e = goog.dom.getElement("paramAddText"),
        t = goog.dom.getElement("paramAddButton");
    Blockly.disableParamEditing || (Blockly.bindEvent_(t, "click", this, goog.bind(this.addParamFromInputField_, this, e)), Blockly.bindEvent_(e, "keydown", this, function(t) {
        t.keyCode === goog.events.KeyCodes.ENTER && this.addParamFromInputField_(e)
    }))
}, Blockly.FunctionEditor.prototype.addParamFromInputField_ = function(e) {
    var t = e.value;
    e.value = "", this.addParameter(t), this.refreshParamsEverywhere()
}, Blockly.FunctionEditor.prototype.addParameter = function(e) {
    this.orderedParamIDsToBlocks_.set(goog.events.getUniqueId("parameter"), this.newParameterBlock(e))
}, Blockly.FunctionEditor.prototype.newParameterBlock = function(e) {
    var t = Blockly.createSvgElement("block", {
        type: this.parameterBlockType
    });
    return Blockly.createSvgElement("title", {
        name: "VAR"
    }, t).textContent = e, t
}, Blockly.FunctionEditor.prototype.renameParameter = function(e, t) {
    this.orderedParamIDsToBlocks_.forEach(function(o) {
        o.firstElementChild && o.firstElementChild.textContent === e && (o.firstElementChild.textContent = t)
    })
}, Blockly.FunctionEditor.prototype.changeParameterTypeInFlyoutXML = function(e, t) {
    this.orderedParamIDsToBlocks_.forEach(function(o) {
        o.firstElementChild && o.firstElementChild.textContent === e && (o.childNodes[1].firstElementChild.textContent = t)
    })
}, Blockly.FunctionEditor.prototype.removeParameter = function(e) {
    var t = [];
    this.orderedParamIDsToBlocks_.forEach(function(o, n) {
        o.firstElementChild && o.firstElementChild.textContent === e && t.push(n)
    }), t.forEach(function(e) {
        this.orderedParamIDsToBlocks_.remove(e)
    }, this), this.refreshParamsEverywhere()
}, Blockly.FunctionEditor.prototype.refreshParamsEverywhere = function() {
    this.refreshParamsInFlyout_(), this.refreshParamsOnFunction_()
}, Blockly.FunctionEditor.prototype.refreshParamsInFlyout_ = function() {
    this.flyout_.show(this.orderedParamIDsToBlocks_.getValues())
}, Blockly.FunctionEditor.prototype.resetParamIDs_ = function() {
    var e = this.paramsAsParallelArrays_();
    e.paramIDs = null, this.functionDefinitionBlock.updateParamsFromArrays(e.paramNames, e.paramIDs, e.paramTypes)
}, Blockly.FunctionEditor.prototype.refreshParamsOnFunction_ = function() {
    var e = this.paramsAsParallelArrays_();
    this.functionDefinitionBlock.updateParamsFromArrays(e.paramNames, e.paramIDs, e.paramTypes)
}, Blockly.FunctionEditor.prototype.paramsAsParallelArrays_ = function() {
    var e = [],
        t = [],
        o = [];
    return this.orderedParamIDsToBlocks_.forEach(function(n, i) {
        e.push(n.firstElementChild.textContent), t.push(i), 1 < n.childNodes.length && o.push(n.childNodes[1].textContent)
    }, this), {
        paramNames: e,
        paramIDs: t,
        paramTypes: o
    }
}, Blockly.FunctionEditor.prototype.show = function() {
    this.ensureCreated_(), this.position_(), goog.style.setElementShown(this.container_, !0), goog.style.setElementShown(this.modalBackground_, !0), Blockly.focusedBlockSpace = this.modalBlockSpace, Blockly.selected && Blockly.selected.unselect()
}, Blockly.FunctionEditor.prototype.isOpen = function() {
    return this.isCreated() && goog.style.isElementShown(this.container_)
}, Blockly.FunctionEditor.prototype.isCreated = function() {
    return !!this.container_
}, Blockly.FunctionEditor.prototype.ensureCreated_ = function() {
    this.isCreated() || this.create_()
}, Blockly.FunctionEditor.prototype.onClose = function() {
    this.hideIfOpen()
}, Blockly.FunctionEditor.prototype.hideIfOpen = function() {
    this.isOpen() && (this.hideAndRestoreBlocks_(), this.modalBlockSpace.clear())
}, Blockly.FunctionEditor.prototype.hideAndRestoreBlocks_ = function() {
    var e = this.functionDefinitionBlock;
    this.functionDefinitionBlock = null, this.moveToMainBlockSpace_(e), goog.dom.getElement("functionNameText").value = "", goog.dom.getElement("functionDescriptionText").value = "", goog.dom.getElement("paramAddText") && (goog.dom.getElement("paramAddText").value = ""), goog.style.setElementShown(this.container_, !1), goog.style.setElementShown(this.modalBackground_, !1), Blockly.focusedBlockSpace = Blockly.mainBlockSpace, Blockly.fireUiEvent(window, "function_editor_closed")
}, Blockly.FunctionEditor.prototype.moveToMainBlockSpace_ = function(e) {
    e.setMovable(!0), e.setDeletable(!0);
    var t = Blockly.Xml.blockToDom(e);
    e.dispose(!1, !1, !0), Blockly.Xml.domToBlock(Blockly.mainBlockSpace, t).setCurrentlyHidden(!0)
}, Blockly.FunctionEditor.prototype.moveToModalBlockSpace = function(e) {
    var t = Blockly.Xml.blockToDom(e);
    return e.dispose(!1, !1, !0), e = Blockly.Xml.domToBlock(this.modalBlockSpace, t), e.moveTo(Blockly.RTL ? this.modalBlockSpace.getMetrics().viewWidth - Blockly.FunctionEditor.BLOCK_LAYOUT_LEFT_MARGIN : Blockly.FunctionEditor.BLOCK_LAYOUT_LEFT_MARGIN, Blockly.FunctionEditor.BLOCK_LAYOUT_TOP_MARGIN), e.setCurrentlyHidden(!1), e.setUserVisible(!0, !0), e
}, Blockly.FunctionEditor.prototype.create_ = function() {
    function e(e) {
        e = e.target.value;
        var t = /\)|\(/g;
        t.test(e) && (e = e.replace(t, ""), goog.dom.getElement("functionNameText").value = e), this.functionDefinitionBlock.setTitleValue(e, "NAME")
    }

    function t(e) {
        this.functionDefinitionBlock.description_ = e.target.value
    }
    if (this.created_) throw "Attempting to re-create already created Function Editor";
    this.container_ = document.createElement("div"), this.container_.setAttribute("id", "modalContainer"), goog.dom.insertSiblingAfter(this.container_, Blockly.mainBlockSpaceEditor.svg_), this.container_.style.top = Blockly.mainBlockSpaceEditor.getWorkspaceTopOffset() + "px";
    var o = this;
    this.modalBlockSpaceEditor = new Blockly.BlockSpaceEditor(this.container_, function() {
        var e = Blockly.BlockSpaceEditor.prototype.getBlockSpaceMetrics_.call(this);
        return e ? (e.absoluteLeft += FRAME_MARGIN_SIDE + Blockly.Bubble.BORDER_WIDTH + 1, e.absoluteTop += o.getBlockSpaceEditorToScreenTop_(), e.viewWidth -= 2 * (FRAME_MARGIN_SIDE + Blockly.Bubble.BORDER_WIDTH), e.viewHeight -= FRAME_MARGIN_TOP + Blockly.Bubble.BORDER_WIDTH + o.getWindowBorderChromeHeight(), e) : null
    }, function(e) {
        Blockly.BlockSpaceEditor.prototype.setBlockSpaceMetrics_.call(this, e), o.contractDiv_ && (o.resizeUIComponents_(), o.layOutBlockSpaceItems_())
    }, !0), this.modalBlockSpace = this.modalBlockSpaceEditor.blockSpace, this.modalBlockSpace.customFlyoutMetrics_ = Blockly.mainBlockSpace.getMetrics, this.modalBlockSpace.bindBeginPanDragHandler(this.container_, goog.bind(function() {
        this.modalBlockSpaceEditor.hideChaff()
    }, this)), this.modalBlockSpace.bindScrollOnWheelHandler(this.container_), Blockly.modalBlockSpace = this.modalBlockSpace, Blockly.modalBlockSpaceEditor = this.modalBlockSpaceEditor;
    var n = Blockly.createSvgElement("clipPath", {
        id: "modalBlockCanvasClipRect"
    });
    this.modalBlockSpaceEditor.addToSvgDefs(n), this.modalBlockSpace.getClippingGroup().setAttribute("clip-path", "url(#modalBlockCanvasClipRect)"), this.clipPathRect_ = Blockly.createSvgElement("rect", {
        x: 0,
        y: 0,
        width: 1,
        height: 1
    }, n), this.modalBlockSpaceEditor.addChangeListener(Blockly.mainBlockSpace.fireChangeEvent), this.modalBackground_ = Blockly.createSvgElement("g", {
        "class": "modalBackground"
    }), Blockly.mainBlockSpaceEditor.appendSVGChild(this.modalBackground_), this.addCloseButton_(), this.addDeleteButton_(), this.addEditorFrame_(), this.createContractDom_(), this.createParameterEditor_(), this.setupParametersToolbox_(), this.resizeUIComponents_(), this.bindToolboxHandlers_(), Blockly.bindEvent_(goog.dom.getElement("modalContainer"), "mousedown", this, function(e) {
        e.target === e.currentTarget && (this.modalBlockSpaceEditor.hideChaff(), Blockly.selected && Blockly.selected.unselect())
    }), Blockly.bindEvent_(goog.dom.getElement("modalEditorClose"), "mousedown", this, this.onClose), Blockly.bindEvent_(goog.dom.getElement("functionNameText"), "input", this, e), Blockly.bindEvent_(goog.dom.getElement("functionNameText"), "keydown", this, e), Blockly.bindEvent_(this.contractDiv_, "mousedown", null, function() {
        Blockly.selected && Blockly.selected.unselect()
    }), Blockly.bindEvent_(goog.dom.getElement("functionDescriptionText"), "input", this, t), Blockly.bindEvent_(goog.dom.getElement("functionDescriptionText"), "keydown", this, t), this.onResizeWrapper_ = Blockly.bindEvent_(window, goog.events.EventType.RESIZE, this, this.position_), this.modalBlockSpaceEditor.svgResize()
}, Blockly.FunctionEditor.prototype.resizeUIComponents_ = function() {
    var e = this.modalBlockSpace.getMetrics();
    this.resizeFrame_(e.viewWidth, e.viewHeight), this.positionClippingRects_(e), this.positionSizeContractDom_(e.viewWidth), this.positionCloseButton_(e.absoluteLeft, e.viewWidth), this.positionDeleteButton_(e.absoluteLeft, e.viewWidth)
}, Blockly.FunctionEditor.prototype.resizeFrame_ = function(e, t) {
    this.frameBase_.setAttribute("width", e + 2 * Blockly.Bubble.BORDER_WIDTH), this.frameBase_.setAttribute("height", t + 2 * Blockly.Bubble.BORDER_WIDTH + FRAME_HEADER_HEIGHT), this.frameInner_.setAttribute("width", e), this.frameInner_.setAttribute("height", t), Blockly.RTL && (this.frameBase_.setAttribute("x", FRAME_MARGIN_SIDE), this.frameInner_.setAttribute("x", FRAME_MARGIN_SIDE + Blockly.Bubble.BORDER_WIDTH + 1), this.frameText_.setAttribute("x", e - 2 * FRAME_MARGIN_SIDE))
}, Blockly.FunctionEditor.prototype.positionClippingRects_ = function(e) {
    var t = e.viewWidth,
        o = e.viewHeight;
    this.clipPathRect_.setAttribute("x", e.absoluteLeft), this.clipPathRect_.setAttribute("y", e.absoluteTop), this.clipPathRect_.setAttribute("width", t), this.clipPathRect_.setAttribute("height", o), this.frameClipDiv_.style.left = e.absoluteLeft + "px", this.frameClipDiv_.style.top = e.absoluteTop + "px", this.frameClipDiv_.style.width = t + "px", this.frameClipDiv_.style.height = o + "px"
}, Blockly.FunctionEditor.prototype.positionSizeContractDom_ = function(e) {
    this.contractDiv_.style.left = this.modalBlockSpace.xOffsetFromView + "px", this.contractDiv_.style.top = this.getContractDomTopY_() + "px", this.contractDiv_.style.width = e + "px", this.positionFlyout_(0)
}, Blockly.FunctionEditor.prototype.positionCloseButton_ = function(e, t) {
    this.closeButton_.setAttribute("transform", "translate(" + (Blockly.RTL ? Blockly.FunctionEditor.RTL_CLOSE_BUTTON_OFFSET : e + t + Blockly.FunctionEditor.CLOSE_BUTTON_OVERHANG - this.closeButton_.firstElementChild.getAttribute("width")) + ",19)")
}, Blockly.FunctionEditor.prototype.positionDeleteButton_ = function(e, t) {
    if (this.hasDeleteButton) {
        var o = this.closeButton_.firstElementChild.getAttribute("width"),
            n = this.deleteButton_.getButtonWidth(),
            n = e + t + (Blockly.FunctionEditor.CLOSE_BUTTON_OVERHANG - o) - n - Blockly.FunctionEditor.DELETE_BUTTON_MARGIN,
            o = Blockly.FunctionEditor.RTL_CLOSE_BUTTON_OFFSET + o + Blockly.FunctionEditor.DELETE_BUTTON_MARGIN;
        this.deleteButton_.renderAt(Blockly.RTL ? o : n, 19)
    }
}, Blockly.FunctionEditor.prototype.getBlockSpaceEditorToScreenTop_ = function() {
    return this.getWindowBorderChromeHeight()
}, Blockly.FunctionEditor.prototype.getWindowBorderChromeHeight = function() {
    return FRAME_MARGIN_TOP + Blockly.Bubble.BORDER_WIDTH + FRAME_HEADER_HEIGHT
}, Blockly.FunctionEditor.prototype.getContractDivHeight = function() {
    return this.contractDiv_ ? this.contractDiv_.getBoundingClientRect().height : 0
}, Blockly.FunctionEditor.prototype.readyToBeLaidOut_ = function() {
    return this.functionDefinitionBlock && this.functionDefinitionBlock.svgInitialized() && this.isOpen()
}, Blockly.FunctionEditor.prototype.positionFlyout_ = function(e) {
    return e += this.flyout_.getHeight(), this.flyout_.customYOffset = e + this.modalBlockSpace.yOffsetFromView, this.flyout_.position_(), e
}, Blockly.FunctionEditor.prototype.layOutBlockSpaceItems_ = function() {
    if (this.readyToBeLaidOut_()) {
        var e = Blockly.RTL ? this.modalBlockSpace.getMetrics().viewWidth - Blockly.FunctionEditor.BLOCK_LAYOUT_LEFT_MARGIN : Blockly.FunctionEditor.BLOCK_LAYOUT_LEFT_MARGIN,
            t = this.getContractDivHeight(),
            t = this.positionFlyout_(t),
            t = t + Blockly.FunctionEditor.BLOCK_LAYOUT_TOP_MARGIN;
        this.functionDefinitionBlock.moveTo(e, t)
    }
}, Blockly.FunctionEditor.prototype.addCloseButton_ = function() {
    this.closeButton_ = Blockly.createSvgElement("g", {
        id: "modalEditorClose",
        filter: "url(#blocklyTrashcanShadowFilter)"
    });
    var e = Blockly.createSvgElement("rect", {
            rx: 12,
            ry: 12,
            fill: "#7665a0",
            stroke: "white",
            "stroke-width": "2.5"
        }, this.closeButton_),
        t = Blockly.createSvgElement("text", {
            x: 7,
            y: 7,
            "class": "blocklyText"
        }, this.closeButton_);
    t.textContent = Blockly.Msg.CLOSE, this.modalBlockSpaceEditor.appendSVGChild(this.closeButton_), t = t.getBoundingClientRect(), e.setAttribute("width", t.width + 14), e.setAttribute("height", t.height + 7), e.setAttribute("y", -t.height + 7 - 1)
}, Blockly.FunctionEditor.prototype.addDeleteButton_ = function() {
    this.hasDeleteButton && (this.deleteButton_ = new Blockly.SvgTextButton(this.modalBlockSpaceEditor.getSVGElement(), Blockly.Msg.DELETE, this.onDeletePressed.bind(this)))
}, Blockly.FunctionEditor.prototype.onDeletePressed = function() {
    var e = this.functionDefinitionBlock.getProcedureInfo().name,
        t = Blockly.Msg.CONFIRM_DELETE_FUNCTION_MESSAGE.replace("%1", e);
    Blockly.showSimpleDialog({
        bodyText: t,
        cancelText: Blockly.Msg.DELETE,
        confirmText: Blockly.Msg.KEEP,
        onConfirm: null,
        onCancel: this.onDeleteConfirmed.bind(this, e),
        cancelButtonClass: "red-delete-button"
    })
}, Blockly.FunctionEditor.prototype.onDeleteConfirmed = function(e) {
    this.hideIfOpen();
    var t = Blockly.mainBlockSpace.findFunction(e);
    Blockly.mainBlockSpace.findFunctionExamples(e).concat(t).forEach(function(e) {
        e.dispose(!1, !1, !0)
    })
}, Blockly.FunctionEditor.prototype.setupParametersToolbox_ = function() {
    this.flyout_ = new Blockly.HorizontalFlyout(this.modalBlockSpaceEditor);
    var e = this.flyout_.createDom();
    this.modalBlockSpace.getClippingGroup().insertBefore(e, this.modalBlockSpace.svgBlockCanvas_), this.flyout_.init(this.modalBlockSpace, !1)
}, Blockly.FunctionEditor.prototype.addEditorFrame_ = function() {
    var e = Blockly.readOnly ? 0 : Blockly.hasCategories ? goog.dom.getElementByClass("blocklyToolboxDiv").getBoundingClientRect().width : goog.dom.getElementByClass("blocklyFlyoutBackground").getBoundingClientRect().width;
    this.frameBase_ = Blockly.createSvgElement("rect", {
        x: e + FRAME_MARGIN_SIDE,
        y: 0 + FRAME_MARGIN_TOP,
        fill: "hsl(94, 73%, 35%)",
        rx: Blockly.Bubble.BORDER_WIDTH,
        ry: Blockly.Bubble.BORDER_WIDTH
    }, this.modalBackground_), this.frameInner_ = Blockly.createSvgElement("rect", {
        x: e + FRAME_MARGIN_SIDE + Blockly.Bubble.BORDER_WIDTH,
        y: 0 + FRAME_MARGIN_TOP + Blockly.Bubble.BORDER_WIDTH + FRAME_HEADER_HEIGHT,
        fill: "#ffffff"
    }, this.modalBackground_), this.frameText_ = Blockly.createSvgElement("text", {
        x: e + FRAME_MARGIN_SIDE + 16,
        y: 0 + FRAME_MARGIN_TOP + 22,
        "class": "blocklyText",
        style: "font-size: 12pt"
    }, this.modalBackground_), this.frameText_.textContent = Blockly.Msg.FUNCTION_HEADER
}, Blockly.FunctionEditor.prototype.position_ = function() {
    if (this.isOpen()) {
        var e = this.modalBlockSpace.getMetrics();
        this.resizeFrame_(e.viewWidth, e.viewHeight), this.positionSizeContractDom_(e.viewWidth), this.layOutBlockSpaceItems_(), this.modalBlockSpaceEditor.svgResize()
    }
}, Blockly.FunctionEditor.prototype.getContractDomTopY_ = function() {
    return this.modalBlockSpace.yOffsetFromView
}, Blockly.FunctionEditor.prototype.createParameterEditor_ = function() {
    Blockly.disableParamEditing || (goog.dom.getElement("paramEditingArea").innerHTML = "<div>" + Blockly.Msg.FUNCTION_PARAMETERS_LABEL + '</div><div><input id="paramAddText" type="text" style="width: 200px;"/> <button id="paramAddButton" class="btn">' + Blockly.Msg.ADD_PARAMETER + "</button></div>")
}, Blockly.FunctionEditor.prototype.createFrameClipDiv_ = function() {
    var e = goog.dom.createDom("div");
    return e.style.position = "absolute", e.style.overflow = "hidden", e.style.pointerEvents = "none", e
}, Blockly.FunctionEditor.prototype.createContractDom_ = function() {
    this.contractDiv_ = goog.dom.createDom("div", "blocklyToolboxDiv paramToolbox blocklyText flyoutColorGray innerModalDiv"), Blockly.RTL && this.contractDiv_.setAttribute("dir", "RTL"), this.contractDiv_.innerHTML = "<div>" + Blockly.Msg.FUNCTION_NAME_LABEL + '</div><div><input id="functionNameText" type="text"></div><div>' + Blockly.Msg.FUNCTION_DESCRIPTION_LABEL + '</div><div><textarea id="functionDescriptionText" rows="2"></textarea></div><div style="margin: 0;" id="paramEditingArea"></div>', this.contractDiv_.style.display = "block", this.frameClipDiv_ = this.createFrameClipDiv_(), this.frameClipDiv_.insertBefore(this.contractDiv_, this.frameClipDiv_.firstChild), this.container_.insertBefore(this.frameClipDiv_, this.container_.firstChild)
}, goog.color = {}, goog.color.names = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
}, goog.color.parse = function(e) {
    var t = {};
    e = String(e);
    var o = goog.color.prependHashIfNecessaryHelper(e);
    if (goog.color.isValidHexColor_(o)) return t.hex = goog.color.normalizeHex(o), t.type = "hex", t;
    if (o = goog.color.isValidRgbColor_(e), o.length) return t.hex = goog.color.rgbArrayToHex(o), t.type = "rgb", t;
    if (goog.color.names && (o = goog.color.names[e.toLowerCase()])) return t.hex = o, t.type = "named", t;
    throw Error(e + " is not a valid color string")
}, goog.color.isValidColor = function(e) {
    var t = goog.color.prependHashIfNecessaryHelper(e);
    return !!(goog.color.isValidHexColor_(t) || goog.color.isValidRgbColor_(e).length || goog.color.names && goog.color.names[e.toLowerCase()])
}, goog.color.parseRgb = function(e) {
    var t = goog.color.isValidRgbColor_(e);
    if (!t.length) throw Error(e + " is not a valid RGB color");
    return t
}, goog.color.hexToRgbStyle = function(e) {
    return goog.color.rgbStyle_(goog.color.hexToRgb(e))
}, goog.color.hexTripletRe_ = /#(.)(.)(.)/, goog.color.normalizeHex = function(e) {
    if (!goog.color.isValidHexColor_(e)) throw Error("'" + e + "' is not a valid hex color");
    return 4 == e.length && (e = e.replace(goog.color.hexTripletRe_, "#$1$1$2$2$3$3")), e.toLowerCase()
}, goog.color.hexToRgb = function(e) {
    e = goog.color.normalizeHex(e);
    var t = parseInt(e.substr(1, 2), 16),
        o = parseInt(e.substr(3, 2), 16);
    return e = parseInt(e.substr(5, 2), 16), [t, o, e]
}, goog.color.rgbToHex = function(e, t, o) {
    if (e = Number(e), t = Number(t), o = Number(o), isNaN(e) || 0 > e || e > 255 || isNaN(t) || 0 > t || t > 255 || isNaN(o) || 0 > o || o > 255) throw Error('"(' + e + "," + t + "," + o + '") is not a valid RGB color');
    return e = goog.color.prependZeroIfNecessaryHelper(e.toString(16)), t = goog.color.prependZeroIfNecessaryHelper(t.toString(16)), o = goog.color.prependZeroIfNecessaryHelper(o.toString(16)), "#" + e + t + o
}, goog.color.rgbArrayToHex = function(e) {
    return goog.color.rgbToHex(e[0], e[1], e[2])
}, goog.color.rgbToHsl = function(e, t, o) {
    e /= 255, t /= 255, o /= 255;
    var n = Math.max(e, t, o),
        i = Math.min(e, t, o),
        r = 0,
        l = 0,
        s = .5 * (n + i);
    return n != i && (n == e ? r = 60 * (t - o) / (n - i) : n == t ? r = 60 * (o - e) / (n - i) + 120 : n == o && (r = 60 * (e - t) / (n - i) + 240), l = s > 0 && .5 >= s ? (n - i) / (2 * s) : (n - i) / (2 - 2 * s)), [Math.round(r + 360) % 360, l, s]
}, goog.color.rgbArrayToHsl = function(e) {
    return goog.color.rgbToHsl(e[0], e[1], e[2])
}, goog.color.hueToRgb_ = function(e, t, o) {
    return 0 > o ? o += 1 : o > 1 && (o -= 1), 1 > 6 * o ? e + 6 * (t - e) * o : 1 > 2 * o ? t : 2 > 3 * o ? e + 6 * (t - e) * (2 / 3 - o) : e
}, goog.color.hslToRgb = function(e, t, o) {
    var n = 0,
        i = 0,
        r = 0;
    if (e /= 360, 0 == t) n = i = r = 255 * o;
    else var l = r = 0,
        l = .5 > o ? o * (1 + t) : o + t - t * o,
        r = 2 * o - l,
        n = 255 * goog.color.hueToRgb_(r, l, e + 1 / 3),
        i = 255 * goog.color.hueToRgb_(r, l, e),
        r = 255 * goog.color.hueToRgb_(r, l, e - 1 / 3);
    return [Math.round(n), Math.round(i), Math.round(r)]
}, goog.color.hslArrayToRgb = function(e) {
    return goog.color.hslToRgb(e[0], e[1], e[2])
}, goog.color.validHexColorRe_ = /^#(?:[0-9a-f]{3}){1,2}$/i, goog.color.isValidHexColor_ = function(e) {
    return goog.color.validHexColorRe_.test(e)
}, goog.color.normalizedHexColorRe_ = /^#[0-9a-f]{6}$/, goog.color.isNormalizedHexColor_ = function(e) {
    return goog.color.normalizedHexColorRe_.test(e)
}, goog.color.rgbColorRe_ = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i, goog.color.isValidRgbColor_ = function(e) {
    var t = e.match(goog.color.rgbColorRe_);
    if (t) {
        e = Number(t[1]);
        var o = Number(t[2]),
            t = Number(t[3]);
        if (e >= 0 && 255 >= e && o >= 0 && 255 >= o && t >= 0 && 255 >= t) return [e, o, t]
    }
    return []
}, goog.color.prependZeroIfNecessaryHelper = function(e) {
    return 1 == e.length ? "0" + e : e
}, goog.color.prependHashIfNecessaryHelper = function(e) {
    return "#" == e.charAt(0) ? e : "#" + e
}, goog.color.rgbStyle_ = function(e) {
    return "rgb(" + e.join(",") + ")"
}, goog.color.hsvToRgb = function(e, t, o) {
    var n = 0,
        i = 0,
        r = 0;
    if (0 == t) r = i = n = o;
    else {
        var l = Math.floor(e / 60),
            s = e / 60 - l;
        e = o * (1 - t);
        var a = o * (1 - t * s);
        switch (t = o * (1 - t * (1 - s)), l) {
            case 1:
                n = a, i = o, r = e;
                break;
            case 2:
                n = e, i = o, r = t;
                break;
            case 3:
                n = e, i = a, r = o;
                break;
            case 4:
                n = t, i = e, r = o;
                break;
            case 5:
                n = o, i = e, r = a;
                break;
            case 6:
            case 0:
                n = o, i = t, r = e
        }
    }
    return [Math.floor(n), Math.floor(i), Math.floor(r)]
}, goog.color.rgbToHsv = function(e, t, o) {
    var n = Math.max(Math.max(e, t), o),
        i = Math.min(Math.min(e, t), o);
    if (i == n) i = e = 0;
    else {
        var r = n - i,
            i = r / n;
        e = 60 * (e == n ? (t - o) / r : t == n ? 2 + (o - e) / r : 4 + (e - t) / r), 0 > e && (e += 360), e > 360 && (e -= 360)
    }
    return [e, i, n]
}, goog.color.rgbArrayToHsv = function(e) {
    return goog.color.rgbToHsv(e[0], e[1], e[2])
}, goog.color.hsvArrayToRgb = function(e) {
    return goog.color.hsvToRgb(e[0], e[1], e[2])
}, goog.color.hexToHsl = function(e) {
    return e = goog.color.hexToRgb(e), goog.color.rgbToHsl(e[0], e[1], e[2])
}, goog.color.hslToHex = function(e, t, o) {
    return goog.color.rgbArrayToHex(goog.color.hslToRgb(e, t, o))
}, goog.color.hslArrayToHex = function(e) {
    return goog.color.rgbArrayToHex(goog.color.hslToRgb(e[0], e[1], e[2]))
}, goog.color.hexToHsv = function(e) {
    return goog.color.rgbArrayToHsv(goog.color.hexToRgb(e))
}, goog.color.hsvToHex = function(e, t, o) {
    return goog.color.rgbArrayToHex(goog.color.hsvToRgb(e, t, o))
}, goog.color.hsvArrayToHex = function(e) {
    return goog.color.hsvToHex(e[0], e[1], e[2])
}, goog.color.hslDistance = function(e, t) {
    var o, n;
    return o = .5 >= e[2] ? e[1] * e[2] : e[1] * (1 - e[2]), n = .5 >= t[2] ? t[1] * t[2] : t[1] * (1 - t[2]), (e[2] - t[2]) * (e[2] - t[2]) + o * o + n * n - 2 * o * n * Math.cos(2 * (e[0] / 360 - t[0] / 360) * Math.PI)
}, goog.color.blend = function(e, t, o) {
    return o = goog.math.clamp(o, 0, 1), [Math.round(o * e[0] + (1 - o) * t[0]), Math.round(o * e[1] + (1 - o) * t[1]), Math.round(o * e[2] + (1 - o) * t[2])]
}, goog.color.darken = function(e, t) {
    return goog.color.blend([0, 0, 0], e, t)
}, goog.color.lighten = function(e, t) {
    return goog.color.blend([255, 255, 255], e, t)
}, goog.color.highContrast = function(e, t) {
    for (var o = [], n = 0; n < t.length; n++) o.push({
        color: t[n],
        diff: goog.color.yiqBrightnessDiff_(t[n], e) + goog.color.colorDiff_(t[n], e)
    });
    return o.sort(function(e, t) {
        return t.diff - e.diff
    }), o[0].color
}, goog.color.yiqBrightness_ = function(e) {
    return Math.round((299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3)
}, goog.color.yiqBrightnessDiff_ = function(e, t) {
    return Math.abs(goog.color.yiqBrightness_(e) - goog.color.yiqBrightness_(t))
}, goog.color.colorDiff_ = function(e, t) {
    return Math.abs(e[0] - t[0]) + Math.abs(e[1] - t[1]) + Math.abs(e[2] - t[2])
};
var FUNCTION_BLOCK_VERTICAL_MARGIN = Blockly.BlockSpaceEditor.BUMP_PADDING_TOP,
    FUNCTION_BLOCK_MIN_HORIZONTAL_MARGIN = Blockly.BlockSpaceEditor.BUMP_PADDING_LEFT;
Blockly.ContractDefinitionSection = function(e) {
    this.definitionTableGroup = Blockly.createSvgElement("g", {}, e), this.grayDefinitionBackground = Blockly.createSvgElement("rect", {
        fill: "#DDD"
    }, this.definitionTableGroup), Blockly.svgIgnoreMouseEvents(this.grayDefinitionBackground), this.verticalDefinitionMidline = Blockly.createSvgElement("rect", {
        fill: Blockly.ContractEditor.GRID_LINE_COLOR
    }, this.definitionTableGroup), this.verticalDefinitionMidline.setAttribute("width", 2), Blockly.svgIgnoreMouseEvents(this.verticalDefinitionMidline), this.horizontalDefinitionTopLine = Blockly.createSvgElement("rect", {
        fill: Blockly.ContractEditor.GRID_LINE_COLOR
    }, this.definitionTableGroup), this.horizontalDefinitionTopLine.setAttribute("height", 2), Blockly.svgIgnoreMouseEvents(this.horizontalDefinitionTopLine), this.horizontalDefinitionBottomLine = Blockly.createSvgElement("rect", {
        fill: Blockly.ContractEditor.GRID_LINE_COLOR
    }, this.definitionTableGroup), this.horizontalDefinitionBottomLine.setAttribute("height", 2), Blockly.svgIgnoreMouseEvents(this.horizontalDefinitionBottomLine)
}, Blockly.ContractDefinitionSection.prototype.handleCollapse = function(e) {
    this.definitionTableGroup.style.display = e ? "none" : "block"
}, Blockly.ContractDefinitionSection.prototype.placeContent = function(e, t, o, n) {
    if (!n) return e;
    var i = e;
    n.isVariable() ? this.definitionTableGroup.style.display = "none" : (this.definitionTableGroup.style.display = "block", this.horizontalDefinitionTopLine.setAttribute("transform", "translate(0," + i + ")"), this.verticalDefinitionMidline.setAttribute("transform", "translate(" + t + "," + i + ")"), this.grayDefinitionBackground.setAttribute("transform", "translate(0," + e + ")"), this.horizontalDefinitionTopLine.setAttribute("width", o)), e += FUNCTION_BLOCK_VERTICAL_MARGIN;
    var r = n.isVariable() ? FUNCTION_BLOCK_MIN_HORIZONTAL_MARGIN : FUNCTION_BLOCK_MIN_HORIZONTAL_MARGIN + t;
    return n.moveTo(r, e), e += n.getHeightWidth().height, e += FUNCTION_BLOCK_VERTICAL_MARGIN, n.isVariable() || (this.horizontalDefinitionBottomLine.setAttribute("transform", "translate(0," + e + ")"), this.horizontalDefinitionBottomLine.setAttribute("width", o), this.verticalDefinitionMidline.setAttribute("height", e - i), this.grayDefinitionBackground.setAttribute("height", e - i), this.grayDefinitionBackground.setAttribute("width", t)), e
}, Blockly.TypeDropdown = function(e) {
    this.buttonColorSquareDiv_ = this.selectComponent_ = null, this.onTypeChanged_ = e.onTypeChanged, this.typeChoices_ = e.typeChoices, this.type_ = e.type, this.changeListenerKey_ = null
}, Blockly.TypeDropdown.prototype.render = function(e) {
    e = this.renderSelectComponent_(e), this.buttonColorSquareDiv_ = this.createColorSquareDiv(), goog.dom.appendChild(e.getElement(), this.buttonColorSquareDiv_), this.setSquareIconColor(this.type_, this.buttonColorSquareDiv_), this.attachListeners_(e), this.selectComponent_ = e, this.setType_(this.type_)
}, Blockly.TypeDropdown.prototype.setType_ = function(e) {
    this.type_ = e, this.setSquareIconColor(this.type_, this.buttonColorSquareDiv_)
}, Blockly.TypeDropdown.prototype.renderSelectComponent_ = function(e) {
    var t = this.createSelect_();
    return t.render(e), t
}, Blockly.TypeDropdown.prototype.createSelect_ = function() {
    var e = new goog.ui.Select(null, null, goog.ui.FlatMenuButtonRenderer.getInstance(), null, new Blockly.CustomCssClassMenuRenderer("colored-type-dropdown"));
    return this.typeChoices_.forEach(function(t) {
        var o = new goog.ui.MenuItem(t);
        e.addItem(o);
        var n = this.createColorSquareDiv();
        goog.dom.insertChildAt(o.getElement(), n, 0), this.setSquareIconColor(t, n)
    }, this), e.setValue(this.type_), e
}, Blockly.TypeDropdown.prototype.createColorSquareDiv = function() {
    return goog.dom.createDom("div", "color-square-icon")
}, Blockly.TypeDropdown.prototype.attachListeners_ = function(e) {
    this.changeListenerKey_ = goog.events.listen(e, goog.ui.Component.EventType.CHANGE, goog.bind(this.selectChanged_, this))
}, Blockly.TypeDropdown.prototype.selectChanged_ = function(e) {
    e = e.target.getContent(), this.setType_(e), this.onTypeChanged_(e)
}, Blockly.TypeDropdown.prototype.setSquareIconColor = function(e, t) {
    var o = Blockly.FunctionalTypeColors[e],
        o = goog.color.hsvToHex(o[0], o[1], 255 * o[2]);
    t.style.background = o
}, Blockly.TypeDropdown.prototype.dispose = function() {
    goog.events.unlistenByKey(this.changeListenerKey_), this.selectComponent_.dispose()
};
var TEXT_PADDING_LEFT = "10",
    SEPARATOR_LINE_HEIGHT = 2;
Blockly.SvgHeader = function(e, t) {
    var o = t || {
            backgroundColor: "#000",
            headerText: "Default Header"
        },
        n = o.onMouseDown ? "" : "pointer-events: none;";
    this.svgGroup_ = Blockly.createSvgElement("g", {
        style: n
    }, e, {
        belowExisting: !0
    }), this.rectangleElement_ = Blockly.createSvgElement("rect", {
        fill: o.backgroundColor,
        style: n
    }, this.svgGroup_), this.separatorElement_ = Blockly.createSvgElement("rect", {
        fill: "#FFF",
        style: n + "opacity:.3;"
    }, this.svgGroup_), this.textElement_ = Blockly.createSvgElement("text", {
        "class": "contractEditorHeaderText",
        style: n
    }, this.svgGroup_), o.headerText && (this.textElement_.textContent = o.headerText), o.onMouseDown && Blockly.bindEvent_(this.svgGroup_, "click", null, o.onMouseDown)
}, Blockly.SvgHeader.prototype.showSeparator = function(e) {
    goog.style.setElementShown(this.separatorElement_, e)
}, Blockly.SvgHeader.prototype.setColor = function(e) {
    this.rectangleElement_.setAttribute("fill", e)
}, Blockly.SvgHeader.prototype.setPositionSize = function(e, t, o) {
    this.svgGroup_.setAttribute("transform", "translate(0," + e + ")"), this.rectangleElement_.setAttribute("width", t + 2), this.separatorElement_.setAttribute("width", t), this.separatorElement_.setAttribute("height", SEPARATOR_LINE_HEIGHT), this.separatorElement_.setAttribute("transform", "translate(0," + (o - 1) + ")"), this.rectangleElement_.setAttribute("height", o), this.textElement_.setAttribute("x", TEXT_PADDING_LEFT), e = o / 2, t = this.textElement_.getBBox().height / 3, this.textElement_.setAttribute("y", e + t)
}, Blockly.SvgHeader.prototype.setText = function(e) {
    this.textElement_.textContent = e
}, Blockly.SvgHeader.prototype.setVisible = function(e) {
    goog.style.setElementShown(this.svgGroup_, e)
}, Blockly.SvgHeader.prototype.removeSelf = function() {
    goog.dom.removeNode(this.svgGroup_)
};
var NO_RESULT_TEXT = "",
    SUCCESS_TEXT = "Matches definition.",
    RESULT_TEXT_TOP_MARGIN = 14,
    EMPTY_EXAMPLE_INPUT_WIDTH = 40;
Blockly.ExampleView = function(e, t, o) {
    this.domParent_ = e, this.svgParent_ = t, this.contractEditor_ = o, this.block_ = null, this.horizontalLine = Blockly.createSvgElement("rect", {
        fill: Blockly.ContractEditor.GRID_LINE_COLOR,
        height: 2
    }, this.svgParent_), Blockly.svgIgnoreMouseEvents(this.horizontalLine), this.grayBackdrop = Blockly.createSvgElement("rect", {
        fill: "#DDD"
    }, this.svgParent_, {
        belowExisting: !0
    }), this.grayBackdrop.style.pointerEvents = "none", Blockly.svgIgnoreMouseEvents(this.grayBackdrop), this.testExampleButton = this.initializeTestButton_("Test", "run26", this.testExample_.bind(this)), this.resetExampleButton = this.initializeTestButton_("Reset", "reset26", this.reset.bind(this)), goog.dom.classes.add(this.resetExampleButton, "resetButton"), goog.dom.append(this.domParent_, this.testExampleButton), goog.dom.append(this.domParent_, this.resetExampleButton), this.resultText = goog.dom.createDom("div", "example-result-text"), Blockly.svgIgnoreMouseEvents(this.resultText), this.resultText.innerHTML = NO_RESULT_TEXT, goog.dom.append(this.domParent_, this.resultText), this.refreshTestingUI(!1)
}, Blockly.ExampleView.prototype.initializeTestButton_ = function(e, t, o) {
    var n = goog.dom.createDom("button", "testButton launch blocklyLaunch exampleAreaButton"),
        i = goog.dom.createDom("div");
    return i.innerHTML = e, e = goog.dom.createDom("img", t), e.setAttribute("src", Blockly.assetUrl("media/1x1.gif")), goog.dom.append(n, e), goog.dom.append(n, i), Blockly.bindEvent_(n, "click", null, o), n
}, Blockly.ExampleView.prototype.getBlock = function() {
    return this.block_
}, Blockly.ExampleView.prototype.testExample_ = function() {
    this.contractEditor_.resetExampleViews();
    var e = this.contractEditor_.testExample(this.block_, !0);
    this.setResult(e || SUCCESS_TEXT), this.refreshTestingUI(!0)
}, Blockly.ExampleView.prototype.reset = function() {
    goog.style.isElementShown(this.resetExampleButton) && (this.contractEditor_.resetExample(this.block_), this.resultText.innerHTML = NO_RESULT_TEXT, this.refreshTestingUI(!1))
}, Blockly.ExampleView.prototype.setResult = function(e) {
    this.resultText.innerHTML = e || SUCCESS_TEXT, this.refreshTestingUI(!1)
}, Blockly.ExampleView.prototype.refreshTestingUI = function(e) {
    goog.style.setElementShown(this.resultText, Blockly.showExampleTestButtons), goog.style.setElementShown(this.testExampleButton, Blockly.showExampleTestButtons && !e), goog.style.setElementShown(this.resetExampleButton, Blockly.showExampleTestButtons && e)
}, Blockly.ExampleView.prototype.placeExampleAndGetNewY = function(e, t, o, n, i, r, l, s) {
    this.block_ = e;
    var a = t;
    if (i /= 2, a += i, !e.isCurrentlyBeingDragged()) {
        var g = e.getInput(Blockly.ContractEditor.EXAMPLE_BLOCK_ACTUAL_INPUT_NAME);
        if (g.type === Blockly.FUNCTIONAL_INPUT) {
            var c = g.extraSpace,
                u = EMPTY_EXAMPLE_INPUT_WIDTH,
                h = e.getInputTargetBlock(Blockly.ContractEditor.EXAMPLE_BLOCK_ACTUAL_INPUT_NAME);
            h && (u = h.getHeightWidth().width), g.extraSpace = o - u, g.extraSpace !== c && e.getSvgRenderer().render(!0)
        }
        e.moveTo(n, a)
    }
    var a = a + e.getHeightWidth().height,
        a = a + i,
        p = l + i;
    return [this.testExampleButton, this.resetExampleButton].forEach(function(e) {
        e.style.top = a - s + "px", e.style.left = p + "px"
    }), e = Math.max(this.resetExampleButton.offsetWidth, this.testExampleButton.offsetWidth), o = Math.max(this.resetExampleButton.offsetHeight, this.testExampleButton.offsetHeight), this.resultText.style.top = a + RESULT_TEXT_TOP_MARGIN - s + "px", this.resultText.style.left = i + (p + e) + "px", a += o, a += i, this.horizontalLine.setAttribute("transform", "translate(0," + a + ")"), this.horizontalLine.setAttribute("width", r), this.grayBackdrop.setAttribute("transform", "translate(0," + t + ")"), this.grayBackdrop.setAttribute("width", l), this.grayBackdrop.setAttribute("height", a - t), a
}, Blockly.ExampleView.prototype.dispose = function() {
    goog.dom.removeNode(this.horizontalLine), goog.dom.removeNode(this.grayBackdrop), goog.dom.removeNode(this.testExampleButton), goog.dom.removeNode(this.resetExampleButton), goog.dom.removeNode(this.resultText)
}, goog.ui.Option = function(e, t, o) {
    goog.ui.MenuItem.call(this, e, t, o), this.setSelectable(!0)
}, goog.inherits(goog.ui.Option, goog.ui.MenuItem), goog.ui.Option.prototype.performActionInternal = function() {
    return this.dispatchEvent(goog.ui.Component.EventType.ACTION)
}, goog.ui.registry.setDecoratorByClassName("goog-option", function() {
    return new goog.ui.Option(null)
}), Blockly.XButton = function(e) {
    this.onButtonPressed = e.onButtonPressed, this.eventsToUnbind_ = [], this.buttonElement_ = null
}, Blockly.XButton.prototype.render = function(e) {
    var t = goog.dom.createDom("button");
    t.className = "btn", t.innerHTML = "Remove", t.style.marginRight = "-10px", e.appendChild(t), this.eventsToUnbind_.push(Blockly.bindEvent_(t, "click", this, goog.bind(function() {
        this.onButtonPressed && this.onButtonPressed()
    }, this))), this.buttonElement_ = t
}, Blockly.XButton.prototype.dispose = function() {
    this.eventsToUnbind_.forEach(function(e) {
        Blockly.unbindEvent_(e)
    }), goog.array.clear(this.eventsToUnbind_), goog.dom.removeNode(this.buttonElement_)
}, Blockly.DomainNameInput = function(e) {
    this.onNameChanged = e.onNameChanged, this.onEnterPressed = e.onEnterPressed, this.name = e.name, this.eventsToUnbind_ = [], this.inputElement_ = null
}, Blockly.DomainNameInput.prototype.render = function(e) {
    var t = goog.dom.createDom("input");
    t.type = "text", t.style.width = "200px", t.style.placeholder = Blockly.Msg.FUNCTIONAL_NAME_LABEL, this.name && (t.value = this.name), e.appendChild(t), this.eventsToUnbind_.push(Blockly.bindEvent_(t, "input", this, this.onInputChange_)), this.eventsToUnbind_.push(Blockly.bindEvent_(t, "keydown", this, this.onInputChange_)), this.inputElement_ = t
}, Blockly.DomainNameInput.prototype.onInputChange_ = function(e) {
    this.onNameChanged && this.onNameChanged(e.target.value)
}, Blockly.DomainNameInput.prototype.dispose = function() {
    this.eventsToUnbind_.forEach(function(e) {
        Blockly.unbindEvent_(e)
    }), goog.array.clear(this.eventsToUnbind_), goog.dom.removeNode(this.inputElement_)
}, Blockly.DomainEditor = function(e) {
    this.options = e, this.nameInput_ = this.typeDropdown_ = this.editorDom_ = null
}, Blockly.DomainEditor.prototype.getParamID = function() {
    return this.options.paramID
}, Blockly.DomainEditor.prototype.render = function(e) {
    var t = goog.dom.createDom("div"),
        o = new Blockly.TypeDropdown({
            onTypeChanged: this.options.onTypeChanged,
            typeChoices: this.options.typeChoices,
            type: this.options.type
        }),
        n = new Blockly.DomainNameInput({
            onNameChanged: this.options.onNameChanged,
            name: this.options.name
        }),
        i = new Blockly.XButton({
            onButtonPressed: this.options.onRemovePress
        });
    n.render(t), o.render(t), i.render(t), e.appendChild(t), this.editorDom_ = t, this.typeDropdown_ = o, this.nameInput_ = n
}, Blockly.DomainEditor.prototype.dispose = function() {
    this.nameInput_.dispose(), this.typeDropdown_.dispose(), goog.dom.removeNode(this.editorDom_)
}, goog.style.bidi = {}, goog.style.bidi.getScrollLeft = function(e) {
    var t = goog.style.isRightToLeft(e);
    return t && goog.userAgent.GECKO ? -e.scrollLeft : !t || goog.userAgent.IE && goog.userAgent.isVersionOrHigher("8") || "visible" == goog.style.getComputedOverflowX(e) ? e.scrollLeft : e.scrollWidth - e.clientWidth - e.scrollLeft
}, goog.style.bidi.getOffsetStart = function(e) {
    var t = e.offsetLeft,
        o = e.offsetParent;
    if (o || "fixed" != goog.style.getComputedPosition(e) || (o = goog.dom.getOwnerDocument(e).documentElement), !o) return t;
    if (goog.userAgent.GECKO) var n = goog.style.getBorderBox(o),
        t = t + n.left;
    else goog.userAgent.isDocumentModeOrHigher(8) && (n = goog.style.getBorderBox(o), t -= n.left);
    return goog.style.isRightToLeft(o) ? o.clientWidth - (t + e.offsetWidth) : t
}, goog.style.bidi.setScrollOffset = function(e, t) {
    t = Math.max(t, 0), e.scrollLeft = goog.style.isRightToLeft(e) ? goog.userAgent.GECKO ? -t : goog.userAgent.IE && goog.userAgent.isVersionOrHigher("8") ? t : e.scrollWidth - t - e.clientWidth : t
}, goog.style.bidi.setPosition = function(e, t, o, n) {
    goog.isNull(o) || (e.style.top = o + "px"), n ? (e.style.right = t + "px", e.style.left = "") : (e.style.left = t + "px", e.style.right = "")
}, goog.positioning = {}, goog.positioning.Corner = {
    TOP_LEFT: 0,
    TOP_RIGHT: 2,
    BOTTOM_LEFT: 1,
    BOTTOM_RIGHT: 3,
    TOP_START: 4,
    TOP_END: 6,
    BOTTOM_START: 5,
    BOTTOM_END: 7
}, goog.positioning.CornerBit = {
    BOTTOM: 1,
    RIGHT: 2,
    FLIP_RTL: 4
}, goog.positioning.Overflow = {
    IGNORE: 0,
    ADJUST_X: 1,
    FAIL_X: 2,
    ADJUST_Y: 4,
    FAIL_Y: 8,
    RESIZE_WIDTH: 16,
    RESIZE_HEIGHT: 32,
    ADJUST_X_EXCEPT_OFFSCREEN: 65,
    ADJUST_Y_EXCEPT_OFFSCREEN: 132
}, goog.positioning.OverflowStatus = {
    NONE: 0,
    ADJUSTED_X: 1,
    ADJUSTED_Y: 2,
    WIDTH_ADJUSTED: 4,
    HEIGHT_ADJUSTED: 8,
    FAILED_LEFT: 16,
    FAILED_RIGHT: 32,
    FAILED_TOP: 64,
    FAILED_BOTTOM: 128,
    FAILED_OUTSIDE_VIEWPORT: 256
}, goog.positioning.OverflowStatus.FAILED = goog.positioning.OverflowStatus.FAILED_LEFT | goog.positioning.OverflowStatus.FAILED_RIGHT | goog.positioning.OverflowStatus.FAILED_TOP | goog.positioning.OverflowStatus.FAILED_BOTTOM | goog.positioning.OverflowStatus.FAILED_OUTSIDE_VIEWPORT, goog.positioning.OverflowStatus.FAILED_HORIZONTAL = goog.positioning.OverflowStatus.FAILED_LEFT | goog.positioning.OverflowStatus.FAILED_RIGHT, goog.positioning.OverflowStatus.FAILED_VERTICAL = goog.positioning.OverflowStatus.FAILED_TOP | goog.positioning.OverflowStatus.FAILED_BOTTOM, goog.positioning.positionAtAnchor = function(e, t, o, n, i, r, l, s, a) {
    goog.asserts.assert(o);
    var g = goog.positioning.getOffsetParentPageOffset(o),
        c = goog.positioning.getVisiblePart_(e);
    goog.style.translateRectForAnotherFrame(c, goog.dom.getDomHelper(e), goog.dom.getDomHelper(o)), e = goog.positioning.getEffectiveCorner(e, t), c = new goog.math.Coordinate(e & goog.positioning.CornerBit.RIGHT ? c.left + c.width : c.left, e & goog.positioning.CornerBit.BOTTOM ? c.top + c.height : c.top), c = goog.math.Coordinate.difference(c, g), i && (c.x += (e & goog.positioning.CornerBit.RIGHT ? -1 : 1) * i.x, c.y += (e & goog.positioning.CornerBit.BOTTOM ? -1 : 1) * i.y);
    var u;
    return l && (a ? u = a : (u = goog.style.getVisibleRectForElement(o)) && (u.top -= g.y, u.right -= g.x, u.bottom -= g.y, u.left -= g.x)), goog.positioning.positionAtCoordinate(c, o, n, r, u, l, s)
}, goog.positioning.getOffsetParentPageOffset = function(e) {
    var t;
    if (e = e.offsetParent) {
        var o = e.tagName == goog.dom.TagName.HTML || e.tagName == goog.dom.TagName.BODY;
        o && "static" == goog.style.getComputedPosition(e) || (t = goog.style.getPageOffset(e), o || (t = goog.math.Coordinate.difference(t, new goog.math.Coordinate(goog.style.bidi.getScrollLeft(e), e.scrollTop))))
    }
    return t || new goog.math.Coordinate
}, goog.positioning.getVisiblePart_ = function(e) {
    var t = goog.style.getBounds(e);
    return (e = goog.style.getVisibleRectForElement(e)) && t.intersection(goog.math.Rect.createFromBox(e)), t
}, goog.positioning.positionAtCoordinate = function(e, t, o, n, i, r, l) {
    e = e.clone();
    var s = goog.positioning.OverflowStatus.NONE;
    o = goog.positioning.getEffectiveCorner(t, o);
    var a = goog.style.getSize(t);
    return l = l ? l.clone() : a.clone(), (n || o != goog.positioning.Corner.TOP_LEFT) && (o & goog.positioning.CornerBit.RIGHT ? e.x -= l.width + (n ? n.right : 0) : n && (e.x += n.left), o & goog.positioning.CornerBit.BOTTOM ? e.y -= l.height + (n ? n.bottom : 0) : n && (e.y += n.top)), r && (s = i ? goog.positioning.adjustForViewport_(e, l, i, r) : goog.positioning.OverflowStatus.FAILED_OUTSIDE_VIEWPORT, s & goog.positioning.OverflowStatus.FAILED) ? s : (goog.style.setPosition(t, e), goog.math.Size.equals(a, l) || goog.style.setBorderBoxSize(t, l), s)
}, goog.positioning.adjustForViewport_ = function(e, t, o, n) {
    var i = goog.positioning.OverflowStatus.NONE,
        r = goog.positioning.Overflow.ADJUST_X_EXCEPT_OFFSCREEN,
        l = goog.positioning.Overflow.ADJUST_Y_EXCEPT_OFFSCREEN;
    return (n & r) == r && (e.x < o.left || e.x >= o.right) && (n &= ~goog.positioning.Overflow.ADJUST_X), (n & l) == l && (e.y < o.top || e.y >= o.bottom) && (n &= ~goog.positioning.Overflow.ADJUST_Y), e.x < o.left && n & goog.positioning.Overflow.ADJUST_X && (e.x = o.left, i |= goog.positioning.OverflowStatus.ADJUSTED_X), e.x < o.left && e.x + t.width > o.right && n & goog.positioning.Overflow.RESIZE_WIDTH && (t.width = Math.max(t.width - (e.x + t.width - o.right), 0), i |= goog.positioning.OverflowStatus.WIDTH_ADJUSTED), e.x + t.width > o.right && n & goog.positioning.Overflow.ADJUST_X && (e.x = Math.max(o.right - t.width, o.left), i |= goog.positioning.OverflowStatus.ADJUSTED_X), n & goog.positioning.Overflow.FAIL_X && (i = i | (e.x < o.left ? goog.positioning.OverflowStatus.FAILED_LEFT : 0) | (e.x + t.width > o.right ? goog.positioning.OverflowStatus.FAILED_RIGHT : 0)), e.y < o.top && n & goog.positioning.Overflow.ADJUST_Y && (e.y = o.top, i |= goog.positioning.OverflowStatus.ADJUSTED_Y), e.y <= o.top && e.y + t.height < o.bottom && n & goog.positioning.Overflow.RESIZE_HEIGHT && (t.height = Math.max(t.height - (o.top - e.y), 0), e.y = o.top, i |= goog.positioning.OverflowStatus.HEIGHT_ADJUSTED), e.y >= o.top && e.y + t.height > o.bottom && n & goog.positioning.Overflow.RESIZE_HEIGHT && (t.height = Math.max(t.height - (e.y + t.height - o.bottom), 0), i |= goog.positioning.OverflowStatus.HEIGHT_ADJUSTED), e.y + t.height > o.bottom && n & goog.positioning.Overflow.ADJUST_Y && (e.y = Math.max(o.bottom - t.height, o.top), i |= goog.positioning.OverflowStatus.ADJUSTED_Y), n & goog.positioning.Overflow.FAIL_Y && (i = i | (e.y < o.top ? goog.positioning.OverflowStatus.FAILED_TOP : 0) | (e.y + t.height > o.bottom ? goog.positioning.OverflowStatus.FAILED_BOTTOM : 0)), i
}, goog.positioning.getEffectiveCorner = function(e, t) {
    return (t & goog.positioning.CornerBit.FLIP_RTL && goog.style.isRightToLeft(e) ? t ^ goog.positioning.CornerBit.RIGHT : t) & ~goog.positioning.CornerBit.FLIP_RTL
}, goog.positioning.flipCornerHorizontal = function(e) {
    return e ^ goog.positioning.CornerBit.RIGHT
}, goog.positioning.flipCornerVertical = function(e) {
    return e ^ goog.positioning.CornerBit.BOTTOM
}, goog.positioning.flipCorner = function(e) {
    return e ^ goog.positioning.CornerBit.BOTTOM ^ goog.positioning.CornerBit.RIGHT
}, goog.userAgent.product = {}, goog.userAgent.product.ASSUME_FIREFOX = !1, goog.userAgent.product.ASSUME_CAMINO = !1, goog.userAgent.product.ASSUME_IPHONE = !1, goog.userAgent.product.ASSUME_IPAD = !1, goog.userAgent.product.ASSUME_ANDROID = !1, goog.userAgent.product.ASSUME_CHROME = !1, goog.userAgent.product.ASSUME_SAFARI = !1, goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_CAMINO || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI, goog.userAgent.product.init_ = function() {
    goog.userAgent.product.detectedFirefox_ = !1, goog.userAgent.product.detectedCamino_ = !1, goog.userAgent.product.detectedIphone_ = !1, goog.userAgent.product.detectedIpad_ = !1, goog.userAgent.product.detectedAndroid_ = !1, goog.userAgent.product.detectedChrome_ = !1, goog.userAgent.product.detectedSafari_ = !1;
    var e = goog.userAgent.getUserAgentString();
    e && (-1 != e.indexOf("Firefox") ? goog.userAgent.product.detectedFirefox_ = !0 : -1 != e.indexOf("Camino") ? goog.userAgent.product.detectedCamino_ = !0 : -1 != e.indexOf("iPhone") || -1 != e.indexOf("iPod") ? goog.userAgent.product.detectedIphone_ = !0 : -1 != e.indexOf("iPad") ? goog.userAgent.product.detectedIpad_ = !0 : -1 != e.indexOf("Chrome") ? goog.userAgent.product.detectedChrome_ = !0 : -1 != e.indexOf("Android") ? goog.userAgent.product.detectedAndroid_ = !0 : -1 != e.indexOf("Safari") && (goog.userAgent.product.detectedSafari_ = !0))
}, goog.userAgent.product.PRODUCT_KNOWN_ || goog.userAgent.product.init_(), goog.userAgent.product.OPERA = goog.userAgent.OPERA, goog.userAgent.product.IE = goog.userAgent.IE, goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.userAgent.product.detectedFirefox_, goog.userAgent.product.CAMINO = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CAMINO : goog.userAgent.product.detectedCamino_, goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.detectedIphone_, goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.userAgent.product.detectedIpad_, goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.userAgent.product.detectedAndroid_, goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.userAgent.product.detectedChrome_, goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.detectedSafari_, goog.positioning.AbstractPosition = function() {}, goog.positioning.AbstractPosition.prototype.reposition = function() {}, goog.positioning.AnchoredPosition = function(e, t, o) {
    this.element = e, this.corner = t, this.overflow_ = o
}, goog.inherits(goog.positioning.AnchoredPosition, goog.positioning.AbstractPosition), goog.positioning.AnchoredPosition.prototype.reposition = function(e, t, o) {
    goog.positioning.positionAtAnchor(this.element, this.corner, e, t, void 0, o, this.overflow_)
}, goog.positioning.AnchoredViewportPosition = function(e, t, o, n) {
    goog.positioning.AnchoredPosition.call(this, e, t), this.lastResortOverflow_ = o ? goog.positioning.Overflow.ADJUST_X | goog.positioning.Overflow.ADJUST_Y : goog.positioning.Overflow.IGNORE, this.overflowConstraint_ = n || void 0
}, goog.inherits(goog.positioning.AnchoredViewportPosition, goog.positioning.AnchoredPosition), goog.positioning.AnchoredViewportPosition.prototype.getOverflowConstraint = function() {
    return this.overflowConstraint_
}, goog.positioning.AnchoredViewportPosition.prototype.setOverflowConstraint = function(e) {
    this.overflowConstraint_ = e
}, goog.positioning.AnchoredViewportPosition.prototype.getLastResortOverflow = function() {
    return this.lastResortOverflow_
}, goog.positioning.AnchoredViewportPosition.prototype.setLastResortOverflow = function(e) {
    this.lastResortOverflow_ = e
}, goog.positioning.AnchoredViewportPosition.prototype.reposition = function(e, t, o, n) {
    var i = goog.positioning.positionAtAnchor(this.element, this.corner, e, t, null, o, goog.positioning.Overflow.FAIL_X | goog.positioning.Overflow.FAIL_Y, n, this.overflowConstraint_);
    if (i & goog.positioning.OverflowStatus.FAILED) {
        var r = this.adjustCorner(i, this.corner);
        t = this.adjustCorner(i, t), i = goog.positioning.positionAtAnchor(this.element, r, e, t, null, o, goog.positioning.Overflow.FAIL_X | goog.positioning.Overflow.FAIL_Y, n, this.overflowConstraint_), i & goog.positioning.OverflowStatus.FAILED && (r = this.adjustCorner(i, r), t = this.adjustCorner(i, t), goog.positioning.positionAtAnchor(this.element, r, e, t, null, o, this.getLastResortOverflow(), n, this.overflowConstraint_))
    }
}, goog.positioning.AnchoredViewportPosition.prototype.adjustCorner = function(e, t) {
    return e & goog.positioning.OverflowStatus.FAILED_HORIZONTAL && (t = goog.positioning.flipCornerHorizontal(t)), e & goog.positioning.OverflowStatus.FAILED_VERTICAL && (t = goog.positioning.flipCornerVertical(t)), t
}, goog.positioning.MenuAnchoredPosition = function(e, t, o, n) {
    goog.positioning.AnchoredViewportPosition.call(this, e, t, o || n), (o || n) && this.setLastResortOverflow(goog.positioning.Overflow.ADJUST_X_EXCEPT_OFFSCREEN | (n ? goog.positioning.Overflow.RESIZE_HEIGHT : goog.positioning.Overflow.ADJUST_Y_EXCEPT_OFFSCREEN))
}, goog.inherits(goog.positioning.MenuAnchoredPosition, goog.positioning.AnchoredViewportPosition), goog.ui.ButtonSide = {
    NONE: 0,
    START: 1,
    END: 2,
    BOTH: 3
}, goog.ui.ButtonRenderer = function() {
    goog.ui.ControlRenderer.call(this)
}, goog.inherits(goog.ui.ButtonRenderer, goog.ui.ControlRenderer), goog.addSingletonGetter(goog.ui.ButtonRenderer), goog.ui.ButtonRenderer.CSS_CLASS = "goog-button", goog.ui.ButtonRenderer.prototype.getAriaRole = function() {
    return goog.a11y.aria.Role.BUTTON
}, goog.ui.ButtonRenderer.prototype.updateAriaState = function(e, t, o) {
    switch (t) {
        case goog.ui.Component.State.SELECTED:
        case goog.ui.Component.State.CHECKED:
            goog.asserts.assert(e, "The button DOM element cannot be null."), goog.a11y.aria.setState(e, goog.a11y.aria.State.PRESSED, o);
            break;
        default:
        case goog.ui.Component.State.OPENED:
        case goog.ui.Component.State.DISABLED:
            goog.ui.ButtonRenderer.base(this, "updateAriaState", e, t, o)
    }
}, goog.ui.ButtonRenderer.prototype.createDom = function(e) {
    var t = goog.ui.ButtonRenderer.base(this, "createDom", e);
    this.setTooltip(t, e.getTooltip());
    var o = e.getValue();
    return o && this.setValue(t, o), e.isSupportedState(goog.ui.Component.State.CHECKED) && this.updateAriaState(t, goog.ui.Component.State.CHECKED, e.isChecked()), t
}, goog.ui.ButtonRenderer.prototype.decorate = function(e, t) {
    return t = goog.ui.ButtonRenderer.superClass_.decorate.call(this, e, t), e.setValueInternal(this.getValue(t)), e.setTooltipInternal(this.getTooltip(t)), e.isSupportedState(goog.ui.Component.State.CHECKED) && this.updateAriaState(t, goog.ui.Component.State.CHECKED, e.isChecked()), t
}, goog.ui.ButtonRenderer.prototype.getValue = goog.nullFunction, goog.ui.ButtonRenderer.prototype.setValue = goog.nullFunction, goog.ui.ButtonRenderer.prototype.getTooltip = function(e) {
    return e.title
}, goog.ui.ButtonRenderer.prototype.setTooltip = function(e, t) {
    e && t && (e.title = t)
}, goog.ui.ButtonRenderer.prototype.setCollapsed = function(e, t) {
    var o = e.isRightToLeft(),
        n = this.getStructuralCssClass() + "-collapse-left",
        i = this.getStructuralCssClass() + "-collapse-right";
    e.enableClassName(o ? i : n, !!(t & goog.ui.ButtonSide.START)), e.enableClassName(o ? n : i, !!(t & goog.ui.ButtonSide.END))
}, goog.ui.ButtonRenderer.prototype.getCssClass = function() {
    return goog.ui.ButtonRenderer.CSS_CLASS
}, goog.ui.NativeButtonRenderer = function() {
    goog.ui.ButtonRenderer.call(this)
}, goog.inherits(goog.ui.NativeButtonRenderer, goog.ui.ButtonRenderer), goog.addSingletonGetter(goog.ui.NativeButtonRenderer), goog.ui.NativeButtonRenderer.prototype.getAriaRole = function() {}, goog.ui.NativeButtonRenderer.prototype.createDom = function(e) {
    return this.setUpNativeButton_(e), e.getDomHelper().createDom("button", {
        "class": this.getClassNames(e).join(" "),
        disabled: !e.isEnabled(),
        title: e.getTooltip() || "",
        value: e.getValue() || ""
    }, e.getCaption() || "")
}, goog.ui.NativeButtonRenderer.prototype.canDecorate = function(e) {
    return "BUTTON" == e.tagName || "INPUT" == e.tagName && ("button" == e.type || "submit" == e.type || "reset" == e.type)
}, goog.ui.NativeButtonRenderer.prototype.decorate = function(e, t) {
    if (this.setUpNativeButton_(e), t.disabled) {
        var o = goog.asserts.assertString(this.getClassForState(goog.ui.Component.State.DISABLED));
        goog.dom.classlist.add(t, o)
    }
    return goog.ui.NativeButtonRenderer.superClass_.decorate.call(this, e, t)
}, goog.ui.NativeButtonRenderer.prototype.initializeDom = function(e) {
    e.getHandler().listen(e.getElement(), goog.events.EventType.CLICK, e.performActionInternal)
}, goog.ui.NativeButtonRenderer.prototype.setAllowTextSelection = goog.nullFunction, goog.ui.NativeButtonRenderer.prototype.setRightToLeft = goog.nullFunction, goog.ui.NativeButtonRenderer.prototype.isFocusable = function(e) {
    return e.isEnabled()
}, goog.ui.NativeButtonRenderer.prototype.setFocusable = goog.nullFunction, goog.ui.NativeButtonRenderer.prototype.setState = function(e, t, o) {
    goog.ui.NativeButtonRenderer.superClass_.setState.call(this, e, t, o), (e = e.getElement()) && t == goog.ui.Component.State.DISABLED && (e.disabled = o)
}, goog.ui.NativeButtonRenderer.prototype.getValue = function(e) {
    return e.value
}, goog.ui.NativeButtonRenderer.prototype.setValue = function(e, t) {
    e && (e.value = t)
}, goog.ui.NativeButtonRenderer.prototype.updateAriaState = goog.nullFunction, goog.ui.NativeButtonRenderer.prototype.setUpNativeButton_ = function(e) {
    e.setHandleMouseEvents(!1), e.setAutoStates(goog.ui.Component.State.ALL, !1), e.setSupportedState(goog.ui.Component.State.FOCUSED, !1)
}, goog.ui.Button = function(e, t, o) {
    goog.ui.Control.call(this, e, t || goog.ui.NativeButtonRenderer.getInstance(), o)
}, goog.inherits(goog.ui.Button, goog.ui.Control), goog.ui.Button.Side = goog.ui.ButtonSide, goog.ui.Button.prototype.getValue = function() {
    return this.value_
}, goog.ui.Button.prototype.setValue = function(e) {
    this.value_ = e, this.getRenderer().setValue(this.getElement(), e)
}, goog.ui.Button.prototype.setValueInternal = function(e) {
    this.value_ = e
}, goog.ui.Button.prototype.getTooltip = function() {
    return this.tooltip_
}, goog.ui.Button.prototype.setTooltip = function(e) {
    this.tooltip_ = e, this.getRenderer().setTooltip(this.getElement(), e)
}, goog.ui.Button.prototype.setTooltipInternal = function(e) {
    this.tooltip_ = e
}, goog.ui.Button.prototype.setCollapsed = function(e) {
    this.getRenderer().setCollapsed(this, e)
}, goog.ui.Button.prototype.disposeInternal = function() {
    goog.ui.Button.superClass_.disposeInternal.call(this), delete this.value_, delete this.tooltip_
}, goog.ui.Button.prototype.enterDocument = function() {
    if (goog.ui.Button.superClass_.enterDocument.call(this), this.isSupportedState(goog.ui.Component.State.FOCUSED)) {
        var e = this.getKeyEventTarget();
        e && this.getHandler().listen(e, goog.events.EventType.KEYUP, this.handleKeyEventInternal)
    }
}, goog.ui.Button.prototype.handleKeyEventInternal = function(e) {
    return e.keyCode == goog.events.KeyCodes.ENTER && e.type == goog.events.KeyHandler.EventType.KEY || e.keyCode == goog.events.KeyCodes.SPACE && e.type == goog.events.EventType.KEYUP ? this.performActionInternal(e) : e.keyCode == goog.events.KeyCodes.SPACE
}, goog.ui.registry.setDecoratorByClassName(goog.ui.ButtonRenderer.CSS_CLASS, function() {
    return new goog.ui.Button(null)
}), goog.ui.INLINE_BLOCK_CLASSNAME = "goog-inline-block", goog.ui.CustomButtonRenderer = function() {
    goog.ui.ButtonRenderer.call(this)
}, goog.inherits(goog.ui.CustomButtonRenderer, goog.ui.ButtonRenderer), goog.addSingletonGetter(goog.ui.CustomButtonRenderer), goog.ui.CustomButtonRenderer.CSS_CLASS = "goog-custom-button", goog.ui.CustomButtonRenderer.prototype.createDom = function(e) {
    var t = this.getClassNames(e),
        t = {
            "class": goog.ui.INLINE_BLOCK_CLASSNAME + " " + t.join(" ")
        },
        t = e.getDomHelper().createDom("div", t, this.createButton(e.getContent(), e.getDomHelper()));
    return this.setTooltip(t, e.getTooltip()), this.setAriaStates(e, t), t
}, goog.ui.CustomButtonRenderer.prototype.getAriaRole = function() {
    return goog.a11y.aria.Role.BUTTON
}, goog.ui.CustomButtonRenderer.prototype.getContentElement = function(e) {
    return e && e.firstChild.firstChild
}, goog.ui.CustomButtonRenderer.prototype.createButton = function(e, t) {
    return t.createDom("div", goog.ui.INLINE_BLOCK_CLASSNAME + " " + (this.getCssClass() + "-outer-box"), t.createDom("div", goog.ui.INLINE_BLOCK_CLASSNAME + " " + (this.getCssClass() + "-inner-box"), e))
}, goog.ui.CustomButtonRenderer.prototype.canDecorate = function(e) {
    return "DIV" == e.tagName
}, goog.ui.CustomButtonRenderer.prototype.hasBoxStructure = function(e, t) {
    var o = e.getDomHelper().getFirstElementChild(t),
        n = this.getCssClass() + "-outer-box";
    return o && goog.dom.classlist.contains(o, n) && (o = e.getDomHelper().getFirstElementChild(o), n = this.getCssClass() + "-inner-box", o && goog.dom.classlist.contains(o, n)) ? !0 : !1
}, goog.ui.CustomButtonRenderer.prototype.decorate = function(e, t) {
    return goog.ui.CustomButtonRenderer.trimTextNodes_(t, !0), goog.ui.CustomButtonRenderer.trimTextNodes_(t, !1), this.hasBoxStructure(e, t) || t.appendChild(this.createButton(t.childNodes, e.getDomHelper())), goog.dom.classlist.addAll(t, [goog.ui.INLINE_BLOCK_CLASSNAME, this.getCssClass()]), goog.ui.CustomButtonRenderer.superClass_.decorate.call(this, e, t)
}, goog.ui.CustomButtonRenderer.prototype.getCssClass = function() {
    return goog.ui.CustomButtonRenderer.CSS_CLASS
}, goog.ui.CustomButtonRenderer.trimTextNodes_ = function(e, t) {
    if (e)
        for (var o, n = t ? e.firstChild : e.lastChild; n && n.parentNode == e && (o = t ? n.nextSibling : n.previousSibling, n.nodeType == goog.dom.NodeType.TEXT);) {
            var i = n.nodeValue;
            if ("" != goog.string.trim(i)) {
                n.nodeValue = t ? goog.string.trimLeft(i) : goog.string.trimRight(i);
                break
            }
            e.removeChild(n), n = o
        }
}, goog.ui.MenuButtonRenderer = function() {
    goog.ui.CustomButtonRenderer.call(this)
}, goog.inherits(goog.ui.MenuButtonRenderer, goog.ui.CustomButtonRenderer), goog.addSingletonGetter(goog.ui.MenuButtonRenderer), goog.ui.MenuButtonRenderer.CSS_CLASS = "goog-menu-button", goog.ui.MenuButtonRenderer.prototype.getContentElement = function(e) {
    return goog.ui.MenuButtonRenderer.superClass_.getContentElement.call(this, e && e.firstChild)
}, goog.ui.MenuButtonRenderer.prototype.decorate = function(e, t) {
    var o = goog.dom.getElementsByTagNameAndClass("*", goog.ui.MenuRenderer.CSS_CLASS, t)[0];
    if (o) {
        goog.style.setElementShown(o, !1), goog.dom.appendChild(goog.dom.getOwnerDocument(o).body, o);
        var n = new goog.ui.Menu;
        n.decorate(o), e.setMenu(n)
    }
    return goog.ui.MenuButtonRenderer.superClass_.decorate.call(this, e, t)
}, goog.ui.MenuButtonRenderer.prototype.createButton = function(e, t) {
    return goog.ui.MenuButtonRenderer.superClass_.createButton.call(this, [this.createCaption(e, t), this.createDropdown(t)], t)
}, goog.ui.MenuButtonRenderer.prototype.createCaption = function(e, t) {
    return goog.ui.MenuButtonRenderer.wrapCaption(e, this.getCssClass(), t)
}, goog.ui.MenuButtonRenderer.wrapCaption = function(e, t, o) {
    return o.createDom("div", goog.ui.INLINE_BLOCK_CLASSNAME + " " + (t + "-caption"), e)
}, goog.ui.MenuButtonRenderer.prototype.createDropdown = function(e) {
    return e.createDom("div", goog.ui.INLINE_BLOCK_CLASSNAME + " " + (this.getCssClass() + "-dropdown"), "\xa0")
}, goog.ui.MenuButtonRenderer.prototype.getCssClass = function() {
    return goog.ui.MenuButtonRenderer.CSS_CLASS
}, goog.ui.MenuButton = function(e, t, o, n, i) {
    goog.ui.Button.call(this, e, o || goog.ui.MenuButtonRenderer.getInstance(), n), this.setSupportedState(goog.ui.Component.State.OPENED, !0), this.menuPosition_ = new goog.positioning.MenuAnchoredPosition(null, goog.positioning.Corner.BOTTOM_START), t && this.setMenu(t), this.menuMargin_ = null, this.timer_ = new goog.Timer(500), !goog.userAgent.product.IPHONE && !goog.userAgent.product.IPAD || goog.userAgent.isVersionOrHigher("533.17.9") || this.setFocusablePopupMenu(!0), this.menuRenderer_ = i || goog.ui.MenuRenderer.getInstance()
}, goog.inherits(goog.ui.MenuButton, goog.ui.Button), goog.ui.MenuButton.prototype.isFocusablePopupMenu_ = !1, goog.ui.MenuButton.prototype.renderMenuAsSibling_ = !1, goog.ui.MenuButton.prototype.enterDocument = function() {
    goog.ui.MenuButton.superClass_.enterDocument.call(this), this.attachKeyDownEventListener_(!0), this.menu_ && this.attachMenuEventListeners_(this.menu_, !0), goog.a11y.aria.setState(this.getElementStrict(), goog.a11y.aria.State.HASPOPUP, !!this.menu_)
}, goog.ui.MenuButton.prototype.exitDocument = function() {
    if (goog.ui.MenuButton.superClass_.exitDocument.call(this), this.attachKeyDownEventListener_(!1), this.menu_) {
        this.setOpen(!1), this.menu_.exitDocument(), this.attachMenuEventListeners_(this.menu_, !1);
        var e = this.menu_.getElement();
        e && goog.dom.removeNode(e)
    }
}, goog.ui.MenuButton.prototype.disposeInternal = function() {
    goog.ui.MenuButton.superClass_.disposeInternal.call(this), this.menu_ && (this.menu_.dispose(), delete this.menu_), delete this.positionElement_, this.timer_.dispose()
}, goog.ui.MenuButton.prototype.handleMouseDown = function(e) {
    goog.ui.MenuButton.superClass_.handleMouseDown.call(this, e), this.isActive() && (this.setOpen(!this.isOpen(), e), this.menu_ && this.menu_.setMouseButtonPressed(this.isOpen()))
}, goog.ui.MenuButton.prototype.handleMouseUp = function(e) {
    goog.ui.MenuButton.superClass_.handleMouseUp.call(this, e), this.menu_ && !this.isActive() && this.menu_.setMouseButtonPressed(!1)
}, goog.ui.MenuButton.prototype.performActionInternal = function() {
    return this.setActive(!1), !0
}, goog.ui.MenuButton.prototype.handleDocumentMouseDown = function(e) {
    this.menu_ && this.menu_.isVisible() && !this.containsElement(e.target) && this.setOpen(!1)
}, goog.ui.MenuButton.prototype.containsElement = function(e) {
    return e && goog.dom.contains(this.getElement(), e) || this.menu_ && this.menu_.containsElement(e) || !1
}, goog.ui.MenuButton.prototype.handleKeyEventInternal = function(e) {
    if (e.keyCode == goog.events.KeyCodes.SPACE) {
        if (e.preventDefault(), e.type != goog.events.EventType.KEYUP) return !0
    } else if (e.type != goog.events.KeyHandler.EventType.KEY) return !1;
    if (this.menu_ && this.menu_.isVisible()) {
        var t = this.menu_.handleKeyEvent(e);
        return e.keyCode == goog.events.KeyCodes.ESC ? (this.setOpen(!1), !0) : t
    }
    return e.keyCode == goog.events.KeyCodes.DOWN || e.keyCode == goog.events.KeyCodes.UP || e.keyCode == goog.events.KeyCodes.SPACE || e.keyCode == goog.events.KeyCodes.ENTER ? (this.setOpen(!0, e), !0) : !1
}, goog.ui.MenuButton.prototype.handleMenuAction = function() {
    this.setOpen(!1)
}, goog.ui.MenuButton.prototype.handleMenuBlur = function() {
    this.isActive() || this.setOpen(!1)
}, goog.ui.MenuButton.prototype.handleBlur = function(e) {
    this.isFocusablePopupMenu() || this.setOpen(!1), goog.ui.MenuButton.superClass_.handleBlur.call(this, e)
}, goog.ui.MenuButton.prototype.getMenu = function() {
    return this.menu_ || this.setMenu(new goog.ui.Menu(this.getDomHelper(), this.menuRenderer_)), this.menu_ || null
}, goog.ui.MenuButton.prototype.setMenu = function(e) {
    var t = this.menu_;
    return e != t && (t && (this.setOpen(!1), this.isInDocument() && this.attachMenuEventListeners_(t, !1), delete this.menu_), this.isInDocument() && goog.a11y.aria.setState(this.getElementStrict(), goog.a11y.aria.State.HASPOPUP, !!e), e && (this.menu_ = e, e.setParent(this), e.setVisible(!1), e.setAllowAutoFocus(this.isFocusablePopupMenu()), this.isInDocument() && this.attachMenuEventListeners_(e, !0))), t
}, goog.ui.MenuButton.prototype.setMenuPosition = function(e) {
    e && (this.menuPosition_ = e, this.positionElement_ = e.element)
}, goog.ui.MenuButton.prototype.setPositionElement = function(e) {
    this.positionElement_ = e, this.positionMenu()
}, goog.ui.MenuButton.prototype.setMenuMargin = function(e) {
    this.menuMargin_ = e
}, goog.ui.MenuButton.prototype.addItem = function(e) {
    this.getMenu().addChild(e, !0)
}, goog.ui.MenuButton.prototype.addItemAt = function(e, t) {
    this.getMenu().addChildAt(e, t, !0)
}, goog.ui.MenuButton.prototype.removeItem = function(e) {
    (e = this.getMenu().removeChild(e, !0)) && e.dispose()
}, goog.ui.MenuButton.prototype.removeItemAt = function(e) {
    (e = this.getMenu().removeChildAt(e, !0)) && e.dispose()
}, goog.ui.MenuButton.prototype.getItemAt = function(e) {
    return this.menu_ ? this.menu_.getChildAt(e) : null
}, goog.ui.MenuButton.prototype.getItemCount = function() {
    return this.menu_ ? this.menu_.getChildCount() : 0
}, goog.ui.MenuButton.prototype.setVisible = function(e, t) {
    var o = goog.ui.MenuButton.superClass_.setVisible.call(this, e, t);
    return o && !this.isVisible() && this.setOpen(!1), o
}, goog.ui.MenuButton.prototype.setEnabled = function(e) {
    goog.ui.MenuButton.superClass_.setEnabled.call(this, e), this.isEnabled() || this.setOpen(!1)
}, goog.ui.MenuButton.prototype.isAlignMenuToStart = function() {
    var e = this.menuPosition_.corner;
    return e == goog.positioning.Corner.BOTTOM_START || e == goog.positioning.Corner.TOP_START
}, goog.ui.MenuButton.prototype.setAlignMenuToStart = function(e) {
    this.menuPosition_.corner = e ? goog.positioning.Corner.BOTTOM_START : goog.positioning.Corner.BOTTOM_END
}, goog.ui.MenuButton.prototype.setScrollOnOverflow = function(e) {
    this.menuPosition_.setLastResortOverflow && this.menuPosition_.setLastResortOverflow(goog.positioning.Overflow.ADJUST_X | (e ? goog.positioning.Overflow.RESIZE_HEIGHT : goog.positioning.Overflow.ADJUST_Y))
}, goog.ui.MenuButton.prototype.isScrollOnOverflow = function() {
    return this.menuPosition_.getLastResortOverflow && !!(this.menuPosition_.getLastResortOverflow() & goog.positioning.Overflow.RESIZE_HEIGHT)
}, goog.ui.MenuButton.prototype.isFocusablePopupMenu = function() {
    return this.isFocusablePopupMenu_
}, goog.ui.MenuButton.prototype.setFocusablePopupMenu = function(e) {
    this.isFocusablePopupMenu_ = e
}, goog.ui.MenuButton.prototype.setRenderMenuAsSibling = function(e) {
    this.renderMenuAsSibling_ = e
}, goog.ui.MenuButton.prototype.showMenu = function() {
    this.setOpen(!0)
}, goog.ui.MenuButton.prototype.hideMenu = function() {
    this.setOpen(!1)
}, goog.ui.MenuButton.prototype.setOpen = function(e, t) {
    if (goog.ui.MenuButton.superClass_.setOpen.call(this, e), this.menu_ && this.hasState(goog.ui.Component.State.OPENED) == e) {
        if (e) this.menu_.isInDocument() || (this.renderMenuAsSibling_ ? this.menu_.render(this.getElement().parentNode) : this.menu_.render()), this.viewportBox_ = goog.style.getVisibleRectForElement(this.getElement()), this.buttonRect_ = goog.style.getBounds(this.getElement()), this.positionMenu(), this.menu_.setHighlightedIndex(!t || t.keyCode != goog.events.KeyCodes.DOWN && t.keyCode != goog.events.KeyCodes.UP ? -1 : 0);
        else {
            this.setActive(!1), this.menu_.setMouseButtonPressed(!1);
            var o = this.getElement();
            o && (goog.a11y.aria.setState(o, goog.a11y.aria.State.ACTIVEDESCENDANT, ""), goog.a11y.aria.setState(o, goog.a11y.aria.State.OWNS, "")), goog.isDefAndNotNull(this.originalSize_) && (this.originalSize_ = void 0, (o = this.menu_.getElement()) && goog.style.setSize(o, "", ""))
        }
        this.menu_.setVisible(e, !1, t), this.isDisposed() || this.attachPopupListeners_(e)
    }
}, goog.ui.MenuButton.prototype.invalidateMenuSize = function() {
    this.originalSize_ = void 0
}, goog.ui.MenuButton.prototype.positionMenu = function() {
    if (this.menu_.isInDocument()) {
        var e = this.positionElement_ || this.getElement(),
            t = this.menuPosition_;
        this.menuPosition_.element = e, e = this.menu_.getElement(), this.menu_.isVisible() || (e.style.visibility = "hidden", goog.style.setElementShown(e, !0)), !this.originalSize_ && this.isScrollOnOverflow() && (this.originalSize_ = goog.style.getSize(e));
        var o = goog.positioning.flipCornerVertical(t.corner);
        t.reposition(e, o, this.menuMargin_, this.originalSize_), this.menu_.isVisible() || (goog.style.setElementShown(e, !1), e.style.visibility = "visible")
    }
}, goog.ui.MenuButton.prototype.onTick_ = function(e) {
    e = goog.style.getBounds(this.getElement());
    var t = goog.style.getVisibleRectForElement(this.getElement());
    goog.math.Rect.equals(this.buttonRect_, e) && goog.math.Box.equals(this.viewportBox_, t) || (this.buttonRect_ = e, this.viewportBox_ = t, this.positionMenu())
}, goog.ui.MenuButton.prototype.attachMenuEventListeners_ = function(e, t) {
    var o = this.getHandler(),
        n = t ? o.listen : o.unlisten;
    n.call(o, e, goog.ui.Component.EventType.ACTION, this.handleMenuAction), n.call(o, e, goog.ui.Component.EventType.HIGHLIGHT, this.handleHighlightItem), n.call(o, e, goog.ui.Component.EventType.UNHIGHLIGHT, this.handleUnHighlightItem)
}, goog.ui.MenuButton.prototype.attachKeyDownEventListener_ = function(e) {
    var t = this.getHandler();
    (e ? t.listen : t.unlisten).call(t, this.getElement(), goog.events.EventType.KEYDOWN, this.handleKeyDownEvent_)
}, goog.ui.MenuButton.prototype.handleHighlightItem = function(e) {
    var t = this.getElement();
    goog.asserts.assert(t, "The menu button DOM element cannot be null."), null != e.target.getElement() && (goog.a11y.aria.setState(t, goog.a11y.aria.State.ACTIVEDESCENDANT, e.target.getElement().id), goog.a11y.aria.setState(t, goog.a11y.aria.State.OWNS, e.target.getElement().id))
}, goog.ui.MenuButton.prototype.handleKeyDownEvent_ = function(e) {
    this.isSupportedState(goog.ui.Component.State.FOCUSED) && this.getKeyEventTarget() && this.menu_ && this.menu_.isVisible() && e.stopPropagation()
}, goog.ui.MenuButton.prototype.handleUnHighlightItem = function(e) {
    this.menu_.getHighlighted() || (e = this.getElement(), goog.asserts.assert(e, "The menu button DOM element cannot be null."), goog.a11y.aria.setState(e, goog.a11y.aria.State.ACTIVEDESCENDANT, ""), goog.a11y.aria.setState(e, goog.a11y.aria.State.OWNS, ""))
}, goog.ui.MenuButton.prototype.attachPopupListeners_ = function(e) {
    var t = this.getHandler(),
        o = e ? t.listen : t.unlisten;
    o.call(t, this.getDomHelper().getDocument(), goog.events.EventType.MOUSEDOWN, this.handleDocumentMouseDown, !0), this.isFocusablePopupMenu() && o.call(t, this.menu_, goog.ui.Component.EventType.BLUR, this.handleMenuBlur), o.call(t, this.timer_, goog.Timer.TICK, this.onTick_), e ? this.timer_.start() : this.timer_.stop()
}, goog.ui.registry.setDecoratorByClassName(goog.ui.MenuButtonRenderer.CSS_CLASS, function() {
    return new goog.ui.MenuButton(null)
}), goog.ui.SelectionModel = function(e) {
    goog.events.EventTarget.call(this), this.items_ = [], this.addItems(e)
}, goog.inherits(goog.ui.SelectionModel, goog.events.EventTarget), goog.ui.SelectionModel.prototype.selectedItem_ = null, goog.ui.SelectionModel.prototype.selectionHandler_ = null, goog.ui.SelectionModel.prototype.getSelectionHandler = function() {
    return this.selectionHandler_
}, goog.ui.SelectionModel.prototype.setSelectionHandler = function(e) {
    this.selectionHandler_ = e
}, goog.ui.SelectionModel.prototype.getItemCount = function() {
    return this.items_.length
}, goog.ui.SelectionModel.prototype.indexOfItem = function(e) {
    return e ? goog.array.indexOf(this.items_, e) : -1
}, goog.ui.SelectionModel.prototype.getFirst = function() {
    return this.items_[0]
}, goog.ui.SelectionModel.prototype.getLast = function() {
    return this.items_[this.items_.length - 1]
}, goog.ui.SelectionModel.prototype.getItemAt = function(e) {
    return this.items_[e] || null
}, goog.ui.SelectionModel.prototype.addItems = function(e) {
    e && (goog.array.forEach(e, function(e) {
        this.selectItem_(e, !1)
    }, this), goog.array.extend(this.items_, e))
}, goog.ui.SelectionModel.prototype.addItem = function(e) {
    this.addItemAt(e, this.getItemCount())
}, goog.ui.SelectionModel.prototype.addItemAt = function(e, t) {
    e && (this.selectItem_(e, !1), goog.array.insertAt(this.items_, e, t))
}, goog.ui.SelectionModel.prototype.removeItem = function(e) {
    e && goog.array.remove(this.items_, e) && e == this.selectedItem_ && (this.selectedItem_ = null, this.dispatchEvent(goog.events.EventType.SELECT))
}, goog.ui.SelectionModel.prototype.removeItemAt = function(e) {
    this.removeItem(this.getItemAt(e))
}, goog.ui.SelectionModel.prototype.getSelectedItem = function() {
    return this.selectedItem_
}, goog.ui.SelectionModel.prototype.getItems = function() {
    return goog.array.clone(this.items_)
}, goog.ui.SelectionModel.prototype.setSelectedItem = function(e) {
    e != this.selectedItem_ && (this.selectItem_(this.selectedItem_, !1), this.selectedItem_ = e, this.selectItem_(e, !0)), this.dispatchEvent(goog.events.EventType.SELECT)
}, goog.ui.SelectionModel.prototype.getSelectedIndex = function() {
    return this.indexOfItem(this.selectedItem_)
}, goog.ui.SelectionModel.prototype.setSelectedIndex = function(e) {
    this.setSelectedItem(this.getItemAt(e))
}, goog.ui.SelectionModel.prototype.clear = function() {
    goog.array.clear(this.items_), this.selectedItem_ = null
}, goog.ui.SelectionModel.prototype.disposeInternal = function() {
    goog.ui.SelectionModel.superClass_.disposeInternal.call(this), delete this.items_, this.selectedItem_ = null
}, goog.ui.SelectionModel.prototype.selectItem_ = function(e, t) {
    e && ("function" == typeof this.selectionHandler_ ? this.selectionHandler_(e, t) : "function" == typeof e.setSelected && e.setSelected(t))
}, goog.ui.Select = function(e, t, o, n, i) {
    goog.ui.Select.base(this, "constructor", e, t, o, n, i || new goog.ui.MenuRenderer(goog.a11y.aria.Role.LISTBOX)), this.defaultCaption_ = this.getContent(), this.initialAriaLabel_ = null
}, goog.inherits(goog.ui.Select, goog.ui.MenuButton), goog.ui.Select.prototype.selectionModel_ = null, goog.ui.Select.prototype.enterDocument = function() {
    goog.ui.Select.superClass_.enterDocument.call(this), this.updateCaption(), this.listenToSelectionModelEvents_()
}, goog.ui.Select.prototype.decorateInternal = function(e) {
    goog.ui.Select.superClass_.decorateInternal.call(this, e), (e = this.getCaption()) ? this.setDefaultCaption(e) : this.getSelectedItem() || this.setSelectedIndex(0)
}, goog.ui.Select.prototype.disposeInternal = function() {
    goog.ui.Select.superClass_.disposeInternal.call(this), this.selectionModel_ && (this.selectionModel_.dispose(), this.selectionModel_ = null), this.defaultCaption_ = null
}, goog.ui.Select.prototype.handleMenuAction = function(e) {
    this.setSelectedItem(e.target), goog.ui.Select.base(this, "handleMenuAction", e), e.stopPropagation(), this.dispatchEvent(goog.ui.Component.EventType.ACTION)
}, goog.ui.Select.prototype.handleSelectionChange = function(e) {
    e = this.getSelectedItem(), goog.ui.Select.superClass_.setValue.call(this, e && e.getValue()), this.updateCaption()
}, goog.ui.Select.prototype.setMenu = function(e) {
    var t = goog.ui.Select.superClass_.setMenu.call(this, e);
    return e != t && (this.selectionModel_ && this.selectionModel_.clear(), e && (this.selectionModel_ ? e.forEachChild(function(e) {
        this.setCorrectAriaRole_(e), this.selectionModel_.addItem(e)
    }, this) : this.createSelectionModel_(e))), t
}, goog.ui.Select.prototype.getDefaultCaption = function() {
    return this.defaultCaption_
}, goog.ui.Select.prototype.setDefaultCaption = function(e) {
    this.defaultCaption_ = e, this.updateCaption()
}, goog.ui.Select.prototype.addItem = function(e) {
    this.setCorrectAriaRole_(e), goog.ui.Select.superClass_.addItem.call(this, e), this.selectionModel_ ? this.selectionModel_.addItem(e) : this.createSelectionModel_(this.getMenu())
}, goog.ui.Select.prototype.addItemAt = function(e, t) {
    this.setCorrectAriaRole_(e), goog.ui.Select.superClass_.addItemAt.call(this, e, t), this.selectionModel_ ? this.selectionModel_.addItemAt(e, t) : this.createSelectionModel_(this.getMenu())
}, goog.ui.Select.prototype.removeItem = function(e) {
    goog.ui.Select.superClass_.removeItem.call(this, e), this.selectionModel_ && this.selectionModel_.removeItem(e)
}, goog.ui.Select.prototype.removeItemAt = function(e) {
    goog.ui.Select.superClass_.removeItemAt.call(this, e), this.selectionModel_ && this.selectionModel_.removeItemAt(e)
}, goog.ui.Select.prototype.setSelectedItem = function(e) {
    if (this.selectionModel_) {
        var t = this.getSelectedItem();
        this.selectionModel_.setSelectedItem(e), e != t && this.dispatchEvent(goog.ui.Component.EventType.CHANGE)
    }
}, goog.ui.Select.prototype.setSelectedIndex = function(e) {
    this.selectionModel_ && this.setSelectedItem(this.selectionModel_.getItemAt(e))
}, goog.ui.Select.prototype.setValue = function(e) {
    if (goog.isDefAndNotNull(e) && this.selectionModel_)
        for (var t, o = 0; t = this.selectionModel_.getItemAt(o); o++)
            if (t && "function" == typeof t.getValue && t.getValue() == e) return void this.setSelectedItem(t);
    this.setSelectedItem(null)
}, goog.ui.Select.prototype.getValue = function() {
    var e = this.getSelectedItem();
    return e ? e.getValue() : null
}, goog.ui.Select.prototype.getSelectedItem = function() {
    return this.selectionModel_ ? this.selectionModel_.getSelectedItem() : null
}, goog.ui.Select.prototype.getSelectedIndex = function() {
    return this.selectionModel_ ? this.selectionModel_.getSelectedIndex() : -1
}, goog.ui.Select.prototype.getSelectionModel = function() {
    return this.selectionModel_
}, goog.ui.Select.prototype.createSelectionModel_ = function(e) {
    this.selectionModel_ = new goog.ui.SelectionModel, e && e.forEachChild(function(e) {
        this.setCorrectAriaRole_(e), this.selectionModel_.addItem(e)
    }, this), this.listenToSelectionModelEvents_()
}, goog.ui.Select.prototype.listenToSelectionModelEvents_ = function() {
    this.selectionModel_ && this.getHandler().listen(this.selectionModel_, goog.events.EventType.SELECT, this.handleSelectionChange)
}, goog.ui.Select.prototype.updateCaption = function() {
    var e = this.getSelectedItem();
    this.setContent(e ? e.getCaption() : this.defaultCaption_);
    var t = this.getRenderer().getContentElement(this.getElement());
    t && this.getDomHelper().isElement(t) && (null == this.initialAriaLabel_ && (this.initialAriaLabel_ = goog.a11y.aria.getLabel(t)), e = e ? e.getElement() : null, goog.a11y.aria.setLabel(t, e ? goog.a11y.aria.getLabel(e) : this.initialAriaLabel_))
}, goog.ui.Select.prototype.setCorrectAriaRole_ = function(e) {
    e.setPreferredAriaRole(e instanceof goog.ui.MenuItem ? goog.a11y.aria.Role.OPTION : goog.a11y.aria.Role.SEPARATOR)
}, goog.ui.Select.prototype.setOpen = function(e, t) {
    goog.ui.Select.superClass_.setOpen.call(this, e, t), this.isOpen() && this.getMenu().setHighlightedIndex(this.getSelectedIndex())
}, goog.ui.registry.setDecoratorByClassName("goog-select", function() {
    return new goog.ui.Select(null)
}), Blockly.BlockValueType = {
    NONE: "None",
    STRING: "String",
    NUMBER: "Number",
    IMAGE: "Image",
    BOOLEAN: "Boolean",
    FUNCTION: "Function",
    COLOUR: "Colour",
    ARRAY: "Array"
}, Blockly.FunctionalBlockUtils = {};
var typesToColors = {};
typesToColors[Blockly.BlockValueType.NONE] = [0, 0, 0], typesToColors[Blockly.BlockValueType.NUMBER] = [192, 1, .99], typesToColors[Blockly.BlockValueType.STRING] = [180, 1, .6], typesToColors[Blockly.BlockValueType.IMAGE] = [285, 1, .8], typesToColors[Blockly.BlockValueType.BOOLEAN] = [90, 1, .4], Blockly.FunctionalTypeColors = typesToColors, Blockly.FunctionalBlockUtils.initTitledFunctionalBlock = function(e, t, o, n, i) {
    i = i || {}, e.setFunctional(!0, {
        headerHeight: 30
    }), e.setHSV.apply(e, Blockly.FunctionalTypeColors[o]);
    var r = {
        fixedSize: {
            height: 35
        },
        fontSize: i.titleFontSize
    };
    for (e.appendDummyInput().appendTitle(new Blockly.FieldLabel(t, r)).setAlign(Blockly.ALIGN_CENTRE), t = 0; t < n.length; t++) {
        var r = n[t],
            l = e.appendFunctionalInput(r.name);
        l.setInline(t > 0 && !i.verticallyStackInputs), l.setHSV.apply(l, Blockly.FunctionalTypeColors[r.type]), l.setCheck(r.type), l.setAlign(Blockly.ALIGN_CENTRE)
    }
    o === Blockly.BlockValueType.NONE ? e.setFunctionalOutput(!1) : e.setFunctionalOutput(!0, o)
}, Blockly.FunctionalBlockUtils.installStringPicker = function(e, t, o) {
    var n = o.values;
    o = o.blockName, e.Blocks[o] = {
        init: function() {
            this.setFunctional(!0, {
                headerHeight: 0,
                rowBuffer: 3
            }), this.setHSV.apply(this, Blockly.FunctionalTypeColors[Blockly.BlockValueType.STRING]), this.appendDummyInput().appendTitle(new Blockly.FieldLabel('"')).appendTitle(new e.FieldDropdown(n), "VAL").appendTitle(new Blockly.FieldLabel('"')).setAlign(Blockly.ALIGN_CENTRE), this.setFunctionalOutput(!0, e.BlockValueType.STRING)
        }
    }, t[o] = function() {
        return e.JavaScript.quote_(this.getTitleValue("VAL"))
    }
}, Blockly.SvgTextButton = function(e, t, o) {
    e = Blockly.createSvgElement("g", {
        "class": "svgTextButton",
        filter: "url(#blocklyTrashcanShadowFilter)"
    }, e), this.buttonRect = Blockly.createSvgElement("rect", {
        rx: 12,
        ry: 12,
        fill: "#7665a0",
        stroke: "white",
        "stroke-width": "2.5"
    }, e);
    var n = Blockly.createSvgElement("text", {
        x: 7,
        y: 7,
        "class": "blocklyText"
    }, e);
    n.textContent = t, t = n.getBoundingClientRect(), this.buttonRect.setAttribute("width", t.width + 14), this.buttonRectHeight = t.height + 7, this.buttonRect.setAttribute("height", this.buttonRectHeight), this.buttonRectYOffset = -t.height + 7 - 1, this.buttonRect.setAttribute("y", this.buttonRectYOffset), Blockly.bindEvent_(e, "click", null, o), this.svgGroup_ = e
}, Blockly.SvgTextButton.prototype.renderAt = function(e, t) {
    return this.svgGroup_.setAttribute("transform", "translate(" + e + "," + t + ")"), t + this.buttonRectHeight
}, Blockly.SvgTextButton.prototype.setVisible = function(e) {
    goog.style.setElementShown(this.svgGroup_, e)
}, Blockly.SvgTextButton.prototype.getButtonWidth = function() {
    return parseInt(this.buttonRect.getAttribute("width"), 10)
}, goog.ui.FlatButtonRenderer = function() {
    goog.ui.ButtonRenderer.call(this)
}, goog.inherits(goog.ui.FlatButtonRenderer, goog.ui.ButtonRenderer), goog.addSingletonGetter(goog.ui.FlatButtonRenderer), goog.ui.FlatButtonRenderer.CSS_CLASS = "goog-flat-button", goog.ui.FlatButtonRenderer.prototype.createDom = function(e) {
    var t = this.getClassNames(e),
        t = {
            "class": goog.ui.INLINE_BLOCK_CLASSNAME + " " + t.join(" ")
        },
        t = e.getDomHelper().createDom("div", t, e.getContent());
    return this.setTooltip(t, e.getTooltip()), this.setAriaStates(e, t), t
}, goog.ui.FlatButtonRenderer.prototype.getAriaRole = function() {
    return goog.a11y.aria.Role.BUTTON
}, goog.ui.FlatButtonRenderer.prototype.canDecorate = function(e) {
    return "DIV" == e.tagName
}, goog.ui.FlatButtonRenderer.prototype.decorate = function(e, t) {
    return goog.dom.classlist.add(t, goog.ui.INLINE_BLOCK_CLASSNAME), goog.ui.FlatButtonRenderer.superClass_.decorate.call(this, e, t)
}, goog.ui.FlatButtonRenderer.prototype.getValue = function() {
    return ""
}, goog.ui.FlatButtonRenderer.prototype.getCssClass = function() {
    return goog.ui.FlatButtonRenderer.CSS_CLASS
}, goog.ui.registry.setDecoratorByClassName(goog.ui.FlatButtonRenderer.CSS_CLASS, function() {
    return new goog.ui.Button(null, goog.ui.FlatButtonRenderer.getInstance())
}), goog.ui.FlatMenuButtonRenderer = function() {
    goog.ui.FlatButtonRenderer.call(this)
}, goog.inherits(goog.ui.FlatMenuButtonRenderer, goog.ui.FlatButtonRenderer), goog.addSingletonGetter(goog.ui.FlatMenuButtonRenderer), goog.ui.FlatMenuButtonRenderer.CSS_CLASS = "goog-flat-menu-button", goog.ui.FlatMenuButtonRenderer.prototype.createDom = function(e) {
    var t = this.getClassNames(e),
        t = {
            "class": goog.ui.INLINE_BLOCK_CLASSNAME + " " + t.join(" ")
        },
        t = e.getDomHelper().createDom("div", t, [this.createCaption(e.getContent(), e.getDomHelper()), this.createDropdown(e.getDomHelper())]);
    return this.setTooltip(t, e.getTooltip()), this.setAriaStates(e, t), t
}, goog.ui.FlatMenuButtonRenderer.prototype.getContentElement = function(e) {
    return e && e.firstChild
}, goog.ui.FlatMenuButtonRenderer.prototype.decorate = function(e, t) {
    var o = goog.dom.getElementsByTagNameAndClass("*", goog.ui.MenuRenderer.CSS_CLASS, t)[0];
    if (o) {
        goog.style.setElementShown(o, !1), e.getDomHelper().getDocument().body.appendChild(o);
        var n = new goog.ui.Menu;
        n.decorate(o), e.setMenu(n)
    }
    return goog.dom.getElementsByTagNameAndClass("*", this.getCssClass() + "-caption", t)[0] || t.appendChild(this.createCaption(t.childNodes, e.getDomHelper())), goog.dom.getElementsByTagNameAndClass("*", this.getCssClass() + "-dropdown", t)[0] || t.appendChild(this.createDropdown(e.getDomHelper())), goog.ui.FlatMenuButtonRenderer.superClass_.decorate.call(this, e, t)
}, goog.ui.FlatMenuButtonRenderer.prototype.createCaption = function(e, t) {
    return t.createDom("div", goog.ui.INLINE_BLOCK_CLASSNAME + " " + (this.getCssClass() + "-caption"), e)
}, goog.ui.FlatMenuButtonRenderer.prototype.createDropdown = function(e) {
    return e.createDom("div", {
        "class": goog.ui.INLINE_BLOCK_CLASSNAME + " " + (this.getCssClass() + "-dropdown"),
        "aria-hidden": !0
    }, "\xa0")
}, goog.ui.FlatMenuButtonRenderer.prototype.getCssClass = function() {
    return goog.ui.FlatMenuButtonRenderer.CSS_CLASS
}, goog.ui.registry.setDecoratorByClassName(goog.ui.FlatMenuButtonRenderer.CSS_CLASS, function() {
    return new goog.ui.MenuButton(null, null, goog.ui.FlatMenuButtonRenderer.getInstance())
}), Blockly.CustomCssClassMenuRenderer = function(e) {
    this.customCssClass_ = e, Blockly.CustomCssClassMenuRenderer.superClass_.constructor.call(this)
}, goog.inherits(Blockly.CustomCssClassMenuRenderer, goog.ui.MenuRenderer), goog.addSingletonGetter(Blockly.CustomCssClassMenuRenderer), Blockly.CustomCssClassMenuRenderer.prototype.getCssClass = function() {
    return goog.ui.MenuRenderer.CSS_CLASS + " " + this.customCssClass_
}, Blockly.SvgHighlightBox = function(e, t) {
    t = t || {};
    var o = t.color || "#000",
        n = t.thickness || "30";
    this.svgGroup_ = Blockly.createSvgElement("g", {
        style: "pointer-events: none;"
    }, e), this.highlightRectangle_ = Blockly.createSvgElement("rect", {
        fill: "none",
        "stroke-width": n,
        stroke: o
    }, this.svgGroup_)
}, Blockly.SvgHighlightBox.prototype.setPositionSize = function(e, t, o) {
    this.svgGroup_.setAttribute("transform", "translate(0," + e + ")"), this.highlightRectangle_.setAttribute("width", t), this.highlightRectangle_.setAttribute("height", o)
};
var DOWN_TRIANGLE_CHARACTER = "\u25bc",
    RIGHT_TRIANGLE_CHARACTER = "\u25b6",
    DARK_GRAY_HEX = "#898989",
    YELLOW_HEX = "#ffa400",
    HIGHLIGHT_BOX_WIDTH = 10,
    DEFAULT_HEADER_HEIGHT = 25;
Blockly.ContractEditorSectionView = function(e, t) {
    this.headerText_ = t.headerText, this.onCollapseCallback_ = t.onCollapseCallback, this.placeContentCallback = t.placeContentCallback, this.headerHeight = t.headerHeight || DEFAULT_HEADER_HEIGHT, this.sectionNumber_ = t.hasOwnProperty("sectionNumber") ? t.sectionNumber : null, this.highlightBox_ = t.highlightBox || null, this.completelyHidden_ = this.highlighted_ = !1, this.header_ = new Blockly.SvgHeader(e, {
        headerText: this.textForCurrentState_(),
        onMouseDown: goog.bind(this.toggleCollapse, this),
        backgroundColor: DARK_GRAY_HEX
    }), this.collapsed_ = !1, this.showHeader_ = !0
}, Blockly.ContractEditorSectionView.prototype.setHeaderColor = function(e) {
    this.header_.setColor(e)
}, Blockly.ContractEditorSectionView.prototype.textForCurrentState_ = function() {
    if (!this.onCollapseCallback_) return this.headerText_;
    var e;
    return e = "" + ((this.collapsed_ ? RIGHT_TRIANGLE_CHARACTER : DOWN_TRIANGLE_CHARACTER) + " "), null !== this.sectionNumber_ && (e += this.sectionNumber_ + ". "), e += this.headerText_
}, Blockly.ContractEditorSectionView.prototype.setHidden = function(e) {
    (this.completelyHidden_ = e) && this.setCollapsed(!0), this.refreshHeaderText_()
}, Blockly.ContractEditorSectionView.prototype.removeSectionNumber = function() {
    this.sectionNumber_ = null, this.refreshHeaderText_()
}, Blockly.ContractEditorSectionView.prototype.toggleCollapse = function() {
    this.setCollapsed(!this.collapsed_)
}, Blockly.ContractEditorSectionView.prototype.setCollapsed = function(e) {
    this.collapsed_ = e, this.header_.showSeparator(e), this.onCollapseCallback_ && this.onCollapseCallback_(this.collapsed_), this.refreshHeaderText_()
}, Blockly.ContractEditorSectionView.prototype.isCollapsed = function() {
    return this.collapsed_
}, Blockly.ContractEditorSectionView.prototype.refreshHeaderText_ = function() {
    this.header_.setText(this.textForCurrentState_())
}, Blockly.ContractEditorSectionView.prototype.setHighlighted = function(e) {
    this.highlighted_ = e
}, Blockly.ContractEditorSectionView.prototype.setHeaderVisible = function(e) {
    this.showHeader_ = e
}, Blockly.ContractEditorSectionView.prototype.placeAndGetNewY = function(e, t) {
    if (this.completelyHidden_) return this.header_.setVisible(!1), e;
    var o = e;
    return this.header_.setVisible(this.showHeader_), this.showHeader_ && (this.header_.setPositionSize(e, t, this.headerHeight), e += this.headerHeight), this.collapsed_ || (e = this.placeAndGetNewYInnerSegment_(e)), this.highlighted_ && this.highlightBox_.setPositionSize(o, t, e - o), e
}, Blockly.ContractEditorSectionView.prototype.placeAndGetNewYInnerSegment_ = function(e) {
    return this.placeContentCallback && (e = this.placeContentCallback(e)), e
};
var EXAMPLE_BLOCK_MARGIN_BELOW = 20,
    EXAMPLE_BLOCK_MARGIN_LEFT = Blockly.FunctionEditor.BLOCK_LAYOUT_LEFT_MARGIN,
    EXAMPLE_BLOCK_SECTION_MAGIN_BELOW = 10,
    EXAMPLE_BLOCK_SECTION_MAGIN_ABOVE = 15,
    HEADER_HEIGHT = 30,
    DEFAULT_EXAMPLE_CALL_SECTION_WIDTH = 100,
    MARGIN_BLOCK_TO_CALL_SLOT = 13,
    USER_TYPE_CHOICES = [Blockly.BlockValueType.NUMBER, Blockly.BlockValueType.STRING, Blockly.BlockValueType.IMAGE, Blockly.BlockValueType.BOOLEAN],
    CONTRACT_SECTION_NAME = "contract",
    EXAMPLES_SECTION_NAME = "examples",
    DEFINITION_SECTION_NAME = "definition",
    HIGHLIGHT_CONFIG_SUFFIX = "Highlight",
    COLLAPSE_CONFIG_SUFFIX = "Collapse",
    DISABLE_EXAMPLES_CONFIG_NAME = "disableExamples";
Blockly.ContractEditor = function(e) {
    Blockly.ContractEditor.superClass_.constructor.call(this), this.disableExamples_ = e[DISABLE_EXAMPLES_CONFIG_NAME], this.outputTypeSelector = null, this.exampleBlocks = [], this.domainEditors_ = [], this.definitionSectionView_ = this.examplesSectionView_ = this.contractSectionView_ = null, this.allSections_ = new goog.structs.LinkedMap, this.autoOpenConfig_ = null, this.testHandler_ = function(e) {
        return "Block ID is " + e.id
    }, this.testResetHandler_ = function() {}, this.customFailureCloseHandler_ = function() {
        return !1
    }, this.exampleViews_ = []
}, goog.inherits(Blockly.ContractEditor, Blockly.FunctionEditor), Blockly.ContractEditor.EXAMPLE_BLOCK_TYPE = "functional_example", Blockly.ContractEditor.EXAMPLE_BLOCK_ACTUAL_INPUT_NAME = "ACTUAL", Blockly.ContractEditor.DEFAULT_OUTPUT_TYPE = Blockly.BlockValueType.NUMBER, Blockly.ContractEditor.DEFAULT_PARAMETER_TYPE = Blockly.BlockValueType.NUMBER, Blockly.ContractEditor.GRID_LINE_COLOR = "#5b6770", Blockly.ContractEditor.prototype.definitionBlockType = "functional_definition", Blockly.ContractEditor.prototype.parameterBlockType = "functional_parameters_get", Blockly.ContractEditor.prototype.hasDeleteButton = !0, Blockly.ContractEditor.prototype.create_ = function() {
    Blockly.ContractEditor.superClass_.create_.call(this);
    var e = this.modalBlockSpace.svgBlockCanvas_,
        t = new Blockly.SvgHighlightBox(e, {
            color: YELLOW_HEX,
            thickness: HIGHLIGHT_BOX_WIDTH
        });
    this.contractSectionView_ = new Blockly.ContractEditorSectionView(e, {
        sectionNumber: 1,
        headerHeight: HEADER_HEIGHT,
        onCollapseCallback: goog.bind(function(e) {
            this.contractDiv_.style.display = e ? "none" : "block", this.position_()
        }, this),
        placeContentCallback: goog.bind(function(e) {
            return e + this.getContractDivHeight()
        }, this),
        highlightBox: t,
        headerText: "Contract and Purpose Statement"
    }), this.hiddenExampleBlocks_ = [], this.exampleAreaDiv = goog.dom.createDom("div", "exampleAreaDiv innerModalDiv"), this.addExampleButton = goog.dom.createDom("button", "exampleAreaButton btn"), this.addExampleButton.innerHTML = "Add Example", Blockly.bindEvent_(this.addExampleButton, "click", this, this.addNewExampleBlock_), goog.dom.append(this.exampleAreaDiv, this.addExampleButton), this.exampleAreaDiv.style.display = "block", this.exampleAreaDiv.style.position = "absolute", goog.dom.insertChildAt(this.frameClipDiv_, this.exampleAreaDiv, 0), this.callText = goog.dom.createDom("div", "callResultText"), this.callText.innerHTML = "Call", Blockly.svgIgnoreMouseEvents(this.callText), goog.dom.appendChild(this.exampleAreaDiv, this.callText), this.resultText = goog.dom.createDom("div", "callResultText"), this.resultText.innerHTML = "Result", goog.dom.appendChild(this.exampleAreaDiv, this.resultText), Blockly.svgIgnoreMouseEvents(this.resultText), this.examplesTableGroup = Blockly.createSvgElement("g", {}, e), this.topHorizontalLine = Blockly.createSvgElement("rect", {
        fill: Blockly.ContractEditor.GRID_LINE_COLOR
    }, this.examplesTableGroup), this.topHorizontalLine.setAttribute("height", 2), Blockly.svgIgnoreMouseEvents(this.topHorizontalLine), this.verticalExampleMidline = Blockly.createSvgElement("rect", {
        fill: Blockly.ContractEditor.GRID_LINE_COLOR
    }, this.examplesTableGroup), this.verticalExampleMidline.setAttribute("width", 2), this.examplesSectionView_ = new Blockly.ContractEditorSectionView(e, {
        sectionNumber: 2,
        headerHeight: HEADER_HEIGHT,
        headerText: "Examples",
        placeContentCallback: this.onPlaceExampleContent.bind(this),
        highlightBox: t,
        onCollapseCallback: goog.bind(function(e) {
            this.exampleAreaDiv.style.display = e ? "none" : "block", this.examplesTableGroup.style.display = e ? "none" : "block", this.hiddenExampleBlocks_ = this.setBlockSubsetVisibility(!e, goog.bind(this.isBlockInExampleArea, this), this.hiddenExampleBlocks_), this.position_()
        }, this)
    }), this.hiddenDefinitionBlocks_ = [], this.definitionSectionLogic_ = new Blockly.ContractDefinitionSection(e), this.definitionSectionView_ = new Blockly.ContractEditorSectionView(e, {
        sectionNumber: 3,
        headerHeight: HEADER_HEIGHT,
        headerText: "Definition",
        onCollapseCallback: goog.bind(function(e) {
            this.flyout_.setVisibility(!e), e || this.refreshParamsInFlyout_(), this.hiddenDefinitionBlocks_ = this.setBlockSubsetVisibility(!e, goog.bind(this.isBlockInFunctionArea, this), this.hiddenDefinitionBlocks_), this.definitionSectionLogic_.handleCollapse(e), this.position_()
        }, this),
        highlightBox: t,
        placeContentCallback: goog.bind(function(e) {
            return this.flyout_ && (e = this.positionFlyout_(e)), this.definitionSectionLogic_.placeContent(e, this.getVerticalMidlineOffset_(), this.getFullWidth(), this.functionDefinitionBlock)
        }, this)
    }), this.allSections_.set(CONTRACT_SECTION_NAME, this.contractSectionView_), this.allSections_.set(EXAMPLES_SECTION_NAME, this.examplesSectionView_), this.allSections_.set(DEFINITION_SECTION_NAME, this.definitionSectionView_)
}, Blockly.ContractEditor.prototype.autoOpenWithLevelConfiguration = function(e) {
    this.autoOpenConfig_ = e, Blockly.ContractEditor.superClass_.autoOpenWithLevelConfiguration.call(this, e)
}, Blockly.ContractEditor.prototype.setBlockSubsetVisibility = function(e, t, o) {
    var n = [];
    return e ? o.forEach(function(e) {
        e.setCurrentlyHidden(!1)
    }, this) : this.modalBlockSpace.getTopBlocks().filter(t).forEach(function(e) {
        n.push(e), e.setCurrentlyHidden(!0)
    }, this), n
}, Blockly.ContractEditor.prototype.isBlockInFunctionArea = function(e) {
    return this.isVisibleInEditor_(e) && !this.isBlockInExampleArea(e)
}, Blockly.ContractEditor.prototype.isBlockInExampleArea = function(e) {
    return this.isAnExampleBlockInEditor_(e) || e !== this.functionDefinitionBlock && this.isVisibleInEditor_(e) && e.getRelativeToSurfaceXY().y < this.getFlyoutTopPosition()
}, Blockly.ContractEditor.prototype.isVisibleInEditor_ = function(e) {
    return e.blockSpace === this.modalBlockSpace && e.isVisible()
}, Blockly.ContractEditor.prototype.getFlyoutTopPosition = function() {
    return this.flyout_.getYPosition() - this.flyout_.getHeight()
}, Blockly.ContractEditor.prototype.isAnExampleBlockInEditor_ = function(e) {
    return goog.array.contains(this.exampleBlocks, e)
}, Blockly.ContractEditor.prototype.hideAndRestoreBlocks_ = function() {
    Blockly.ContractEditor.superClass_.hideAndRestoreBlocks_.call(this), goog.array.clone(this.exampleBlocks).forEach(function(e) {
        this.moveToMainBlockSpace_(e)
    }, this), goog.array.clear(this.exampleBlocks), this.domainEditors_.forEach(function(e) {
        e.dispose()
    }, this), goog.array.clear(this.domainEditors_), this.outputTypeSelector.dispose(), this.outputTypeSelector = null
}, Blockly.ContractEditor.prototype.openAndEditFunction = function(e) {
    Blockly.ContractEditor.superClass_.openAndEditFunction.call(this, e), this.addRangeEditor_(), this.updateFrameColorForType_(this.functionDefinitionBlock.getOutputType()), this.functionDefinitionBlock.setDeletable(!1), this.moveExampleBlocksToModal_(e), this.setupAfterExampleBlocksAdded_(), this.position_(), this.resetParamIDs_(), this.refreshParamsEverywhere()
}, Blockly.ContractEditor.prototype.setSectionHighlighted = function(e) {
    this.allSections_.forEach(function(t) {
        t.setHighlighted(t === e)
    }, this)
}, Blockly.ContractEditor.prototype.addNewExampleBlock_ = function() {
    this.addNewExampleBlockForFunction_(this.functionDefinitionBlock), this.refreshBlockInputTypes_()
}, Blockly.ContractEditor.prototype.addNewExampleBlockForFunction_ = function(e) {
    e = this.createExampleBlock_(e), this.addExampleBlockFromMainBlockSpace(e), this.position_()
}, Blockly.ContractEditor.prototype.moveExampleBlocksToModal_ = function(e) {
    Blockly.mainBlockSpace.findFunctionExamples(e).forEach(function(e) {
        this.addExampleBlockFromMainBlockSpace(e)
    }, this)
}, Blockly.ContractEditor.prototype.registerTestHandler = function(e) {
    this.testHandler_ = e
}, Blockly.ContractEditor.prototype.registerTestResetHandler = function(e) {
    this.testResetHandler_ = e
}, Blockly.ContractEditor.prototype.registerTestsFailedOnCloseHandler = function(e) {
    this.customFailureCloseHandler_ = e
}, Blockly.ContractEditor.prototype.addExampleBlockFromMainBlockSpace = function(e) {
    e = this.moveToModalBlockSpace(e), e.getInputTargetBlock(Blockly.ContractEditor.EXAMPLE_BLOCK_ACTUAL_INPUT_NAME).setCanDisconnectFromParent(!1), this.exampleBlocks.push(e), e.blockEvents.listen(Blockly.Block.EVENTS.AFTER_DROPPED, function() {
        this.layOutBlockSpaceItems_(), this.modalBlockSpace.updateScrollableSize()
    }.bind(this)), e.blockEvents.listenOnce(Blockly.Block.EVENTS.AFTER_DISPOSED, this.removeExampleBlock_.bind(this, e), !1, this)
}, Blockly.ContractEditor.prototype.refreshBlockInputTypes_ = function() {
    this.setBlockInputsToType_(this.currentFunctionDefinitionType_())
}, Blockly.ContractEditor.prototype.setBlockInputsToType_ = function(e) {
    this.exampleBlocks.concat(this.functionDefinitionBlock).forEach(function(t) {
        t.updateInputsToType(e)
    }, this)
}, Blockly.ContractEditor.prototype.currentFunctionDefinitionType_ = function() {
    var e = this.functionDefinitionBlock.previousConnection.getCheck();
    if (!e || 1 !== e.length) throw "Contract editor function definition should have exactly one type check";
    return e[0]
}, Blockly.ContractEditor.prototype.removeExampleBlock_ = function(e) {
    goog.array.remove(this.exampleBlocks, e), this.position_()
}, Blockly.ContractEditor.prototype.openWithNewVariable = function() {
    this.openWithNewFunction(!0)
}, Blockly.ContractEditor.prototype.openWithNewFunction = function(e) {
    this.ensureCreated_();
    var t = Blockly.Xml.domToBlock(Blockly.mainBlockSpace, Blockly.createSvgElement("block", {
        type: this.definitionBlockType
    }));
    if (t.updateOutputType(Blockly.ContractEditor.DEFAULT_OUTPUT_TYPE), e) t.convertToVariable();
    else
        for (e = 0; e < Blockly.defaultNumExampleBlocks; e++) this.addNewExampleBlockForFunction_(t);
    this.openAndEditFunction(t.getTitleValue("NAME"))
}, Blockly.ContractEditor.prototype.createExampleBlock_ = function(e) {
    var t = Blockly.Xml.domToBlock(Blockly.mainBlockSpace, Blockly.createSvgElement("block", {
        type: Blockly.ContractEditor.EXAMPLE_BLOCK_TYPE
    }));
    return e = Blockly.Procedures.createCallerFromDefinition(Blockly.mainBlockSpace, e), t.attachBlockToInputName(e, Blockly.ContractEditor.EXAMPLE_BLOCK_ACTUAL_INPUT_NAME), t
}, Blockly.ContractEditor.prototype.getFullWidth = function() {
    return this.modalBlockSpace.getMetrics().viewWidth
}, Blockly.ContractEditor.prototype.layOutBlockSpaceItems_ = function() {
    if (this.readyToBeLaidOut_()) {
        var e, t = this.getFullWidth();
        e = this.contractSectionView_.placeAndGetNewY(0, t), e = this.examplesSectionView_.placeAndGetNewY(e, t), this.definitionSectionView_.placeAndGetNewY(e, t)
    }
}, Blockly.ContractEditor.prototype.createContractDom_ = function() {
    this.contractDiv_ = goog.dom.createDom("div", "blocklyToolboxDiv paramToolbox blocklyText contractEditor flyoutColorGray innerModalDiv"), Blockly.RTL && this.contractDiv_.setAttribute("dir", "RTL"), this.contractDiv_.innerHTML = "<div>" + Blockly.Msg.FUNCTIONAL_NAME_LABEL + '</div><div><input id="functionNameText" type="text"></div><div><span id="domain-label">' + Blockly.Msg.FUNCTIONAL_DOMAIN_LABEL + '</span> <span class="contract-type-hint"  id="domain-hint">(the domain is the type of input)</span></div><div id="domain-area" style="margin: 0;"></div><div class="clear" style="margin: 0;"></div><button id="paramAddButton" class="btn">Add Domain</button><div class="clear" style="margin: 0;"></div><div id="range-area" style="margin: 0;"><div><span id="outputTypeTitle">' + Blockly.Msg.FUNCTIONAL_RANGE_LABEL + '</span> <span class="contract-type-hint" id="range-hint">(the range is the type of output)</span></div><span id="outputTypeDropdown"></span></div><div id="description-area" style="margin: 0px;"><div>' + Blockly.Msg.FUNCTIONAL_DESCRIPTION_LABEL + '</div><div><textarea id="functionDescriptionText" rows="2"></textarea></div></div>';
    var e = this.modalBlockSpace.getMetrics();
    this.contractDiv_.style.left = e.absoluteLeft + "px", this.contractDiv_.style.top = e.absoluteTop + "px", this.contractDiv_.style.width = e.viewWidth + "px", this.contractDiv_.style.display = "block", this.frameClipDiv_ = this.createFrameClipDiv_(), this.frameClipDiv_.insertBefore(this.contractDiv_, this.frameClipDiv_.firstChild), this.container_.insertBefore(this.frameClipDiv_, this.container_.firstChild), this.initializeAddButton_()
}, Blockly.ContractEditor.prototype.createParameterEditor_ = function() {}, Blockly.ContractEditor.prototype.bindToolboxHandlers_ = function() {}, Blockly.ContractEditor.prototype.chromeBottomToContractDivDistance_ = function() {
    return this.isShowingHeaders_() ? HEADER_HEIGHT : 0
}, Blockly.ContractEditor.prototype.getContractDomTopY_ = function() {
    return this.chromeBottomToContractDivDistance_() + this.modalBlockSpace.yOffsetFromView
}, Blockly.ContractEditor.prototype.setupUIForBlock_ = function(e) {
    e = e.isVariable(), this.frameText_.textContent = e ? Blockly.Msg.FUNCTIONAL_VARIABLE_HEADER : Blockly.Msg.CONTRACT_EDITOR_HEADER, goog.dom.setTextContent(goog.dom.getElement("outputTypeTitle"), e ? Blockly.Msg.FUNCTIONAL_VARIABLE_TYPE : Blockly.Msg.FUNCTIONAL_RANGE_LABEL), goog.style.setElementShown(goog.dom.getElement("domain-area"), !e), goog.style.setElementShown(goog.dom.getElement("domain-label"), !e), goog.style.setElementShown(goog.dom.getElement("paramAddButton"), !e), goog.style.setElementShown(goog.dom.getElement("description-area"), !e), goog.style.setElementShown(goog.dom.getElement("range-hint"), !e), goog.style.setElementShown(goog.dom.getElement("domain-hint"), !e)
}, Blockly.ContractEditor.prototype.setupAfterExampleBlocksAdded_ = function() {
    this.refreshBlockInputTypes_(), this.functionDefinitionBlock.isVariable() ? this.setupSectionsForVariable_() : this.setupSectionsForContract_(this.autoOpenConfig_), this.autoOpenConfig_ = null
}, Blockly.ContractEditor.prototype.setupSectionsForVariable_ = function() {
    this.contractSectionView_.setHidden(!1), this.contractSectionView_.setHeaderVisible(!1), this.examplesSectionView_.setHidden(!0), this.definitionSectionView_.setHidden(!1), this.definitionSectionView_.setHeaderVisible(!1)
}, Blockly.ContractEditor.prototype.setupSectionsForContract_ = function(e) {
    this.allSections_.forEach(function(t, o) {
        e ? (e[o + HIGHLIGHT_CONFIG_SUFFIX] && this.setSectionHighlighted(t), t.setCollapsed(e[o + COLLAPSE_CONFIG_SUFFIX])) : (t.setHighlighted(!1), t.setHidden(!1), t.setHeaderVisible(!0), t.setCollapsed(t.isCollapsed()))
    }, this), this.disableExamples_ && (this.contractSectionView_.removeSectionNumber(), this.definitionSectionView_.removeSectionNumber(), this.examplesSectionView_.setHidden(!0))
}, Blockly.ContractEditor.prototype.isShowingHeaders_ = function() {
    return !this.isEditingVariable()
}, Blockly.ContractEditor.prototype.isEditingVariable = function() {
    return this.functionDefinitionBlock && this.functionDefinitionBlock.isVariable()
}, Blockly.ContractEditor.prototype.addParameter = function(e, t) {
    var o = goog.events.getUniqueId("parameter");
    this.orderedParamIDsToBlocks_.set(o, this.newParameterBlock(e, t)), this.addDomainEditorForParamID_(o)
}, Blockly.ContractEditor.prototype.addDomainEditorForParamID_ = function(e) {
    var t = this.getParamNameType(e);
    e = new Blockly.DomainEditor({
        paramID: e,
        name: t.name,
        type: t.type,
        onRemovePress: goog.bind(this.removeContractParameter_, this, e),
        onTypeChanged: goog.bind(this.changeParameterType_, this, e),
        onNameChanged: goog.bind(this.changeParameterName_, this, e),
        typeChoices: USER_TYPE_CHOICES
    }), e.render(goog.dom.getElement("domain-area")), this.domainEditors_.push(e)
}, Blockly.ContractEditor.prototype.removeContractParameter_ = function(e) {
    this.orderedParamIDsToBlocks_.remove(e), this.refreshParamsEverywhere(), goog.array.removeIf(this.domainEditors_, function(t) {
        return t.getParamID() === e ? (t.dispose(), !0) : !1
    }, this), this.position_()
}, Blockly.ContractEditor.prototype.newParameterBlock = function(e, t) {
    t = t || Blockly.ContractEditor.DEFAULT_PARAMETER_TYPE;
    var o = Blockly.createSvgElement("block", {
        type: this.parameterBlockType
    });
    if (Blockly.createSvgElement("title", {
            name: "VAR"
        }, o).textContent = e, t) {
        var n = Blockly.createSvgElement("mutation", {}, o);
        Blockly.createSvgElement("outputtype", {}, n).textContent = t
    }
    return o
}, Blockly.ContractEditor.prototype.addParamsFromProcedure_ = function() {
    for (var e = this.functionDefinitionBlock.getProcedureInfo(), t = 0; t < e.parameterNames.length; t++) this.addParameter(e.parameterNames[t], e.parameterTypes[t])
}, Blockly.ContractEditor.prototype.addRangeEditor_ = function() {
    this.outputTypeSelector = new Blockly.TypeDropdown({
        onTypeChanged: goog.bind(this.outputTypeChanged_, this),
        typeChoices: USER_TYPE_CHOICES,
        type: this.functionDefinitionBlock.getOutputType() || Blockly.ContractEditor.DEFAULT_OUTPUT_TYPE
    }), this.outputTypeSelector.render(this.getOutputTypeDropdownElement_())
}, Blockly.ContractEditor.prototype.outputTypeChanged_ = function(e) {
    this.updateFrameColorForType_(e), this.functionDefinitionBlock && (this.setBlockInputsToType_(Blockly.BlockValueType.NONE), this.functionDefinitionBlock.updateOutputType(e), this.modalBlockSpace.events.dispatchEvent(Blockly.BlockSpace.EVENTS.BLOCK_SPACE_CHANGE), this.refreshBlockInputTypes_(), this.modalBlockSpace.events.dispatchEvent(Blockly.BlockSpace.EVENTS.BLOCK_SPACE_CHANGE))
}, Blockly.ContractEditor.prototype.updateFrameColorForType_ = function(e) {
    e = Blockly.FunctionalTypeColors[e];
    var t = goog.color.hsvToHex(e[0], e[1], 255 * e[2]);
    this.setFrameColor_(t), this.allSections_.forEach(function(e) {
        e.setHeaderColor(t)
    }, this)
}, Blockly.ContractEditor.prototype.setFrameColor_ = function(e) {
    this.frameBase_.style.fill = e
}, Blockly.ContractEditor.prototype.getOutputTypeDropdownElement_ = function() {
    return goog.dom.getElement("outputTypeDropdown")
}, Blockly.ContractEditor.prototype.initializeAddButton_ = function() {
    var e = goog.dom.getElement("paramAddButton");
    Blockly.bindEvent_(e, "mousedown", this, goog.bind(function() {
        this.addParameter(Blockly.Variables.generateUniqueName()), this.refreshParamsEverywhere()
    }, this))
}, Blockly.ContractEditor.prototype.changeParameterType_ = function(e, t) {
    var o = this.getParamNameType(e).name;
    this.functionDefinitionBlock.changeParamType(o, t), this.changeParameterTypeInFlyoutXML(o, t), this.refreshParamsEverywhere()
}, Blockly.ContractEditor.prototype.changeParameterName_ = function(e, t) {
    var o = this.getParamNameType(e).name;
    Blockly.Variables.renameVariable(o, t, Blockly.modalBlockSpace)
}, Blockly.ContractEditor.prototype.getVerticalMidlineOffset_ = function() {
    return EXAMPLE_BLOCK_MARGIN_LEFT + this.getMaxExampleCallBlockWidth_() + MARGIN_BLOCK_TO_CALL_SLOT
}, Blockly.ContractEditor.prototype.getMaxExampleCallBlockWidth_ = function() {
    return this.exampleBlocks.reduce(function(e, t) {
        var o = t.getInputTargetBlock(Blockly.ContractEditor.EXAMPLE_BLOCK_ACTUAL_INPUT_NAME);
        return o ? (o = o.getHeightWidth().width, Math.max(e, o)) : e
    }, DEFAULT_EXAMPLE_CALL_SECTION_WIDTH)
}, Blockly.ContractEditor.prototype.resetExampleViews = function() {
    this.exampleViews_.forEach(function(e) {
        e.reset()
    })
}, Blockly.ContractEditor.prototype.testExample = function(e, t) {
    var o = this.testHandler_(e, t);
    return this.functionDefinitionBlock.getInput("STACK").connection.isConnected() ? o : Blockly.Msg.DEFINE_FUNCTION_FOR_EXAMPLE
}, Blockly.ContractEditor.prototype.resetExample = function(e) {
    this.testResetHandler_(e)
}, Blockly.ContractEditor.prototype.updateExampleResult = function(e, t) {
    this.exampleViews_.some(function(o) {
        return o.getBlock() === e ? (o.setResult(t), !0) : void 0
    })
}, Blockly.ContractEditor.prototype.onPlaceExampleContent = function(e) {
    var t = this.getMaxExampleCallBlockWidth_(),
        o = this.modalBlockSpace.getMetrics();
    this.exampleAreaDiv.style.left = this.modalBlockSpace.xOffsetFromView + "px", this.exampleAreaDiv.style.top = this.modalBlockSpace.yOffsetFromView + e + "px", this.exampleAreaDiv.style.width = o.viewWidth + "px";
    var o = EXAMPLE_BLOCK_SECTION_MAGIN_BELOW / 2,
        n = e,
        i = this.getVerticalMidlineOffset_(),
        r = n;
    this.verticalExampleMidline.setAttribute("transform", "translate(" + i + "," + n + ")");
    var l = 0 < this.exampleBlocks.length;
    l && (n += o, this.callText.style.top = n - e + "px", this.callText.style.left = EXAMPLE_BLOCK_MARGIN_LEFT + "px", this.resultText.style.top = n - e + "px", this.resultText.style.left = i + EXAMPLE_BLOCK_MARGIN_LEFT + "px", n += this.callText.offsetHeight, n += o, this.topHorizontalLine.setAttribute("transform", "translate(0," + n + ")"), this.topHorizontalLine.setAttribute("width", this.getFullWidth()), this.exampleBlocks.forEach(goog.bind(function(o, r) {
        if (!(this.exampleViews_.length > r)) {
            var l = new Blockly.ExampleView(this.exampleAreaDiv, this.examplesTableGroup, this);
            this.exampleViews_.push(l)
        }
        n = this.exampleViews_[r].placeExampleAndGetNewY(o, n, t, EXAMPLE_BLOCK_MARGIN_LEFT, EXAMPLE_BLOCK_MARGIN_BELOW, this.getFullWidth(), i, e)
    }, this)));
    for (var s = this.exampleBlocks.length; s < this.exampleViews_.length; s++) this.exampleViews_[s].dispose();
    return this.exampleViews_.length = this.exampleBlocks.length, this.verticalExampleMidline.style.display = l ? "block" : "none", this.topHorizontalLine.style.display = l ? "block" : "none", this.callText.style.display = l ? "block" : "none", this.resultText.style.display = l ? "block" : "none", this.verticalExampleMidline.setAttribute("height", n - r), n += o, this.addExampleButton.style.top = n - e + "px", this.addExampleButton.style.left = EXAMPLE_BLOCK_MARGIN_LEFT + "px", n += this.addExampleButton.offsetHeight, n += EXAMPLE_BLOCK_SECTION_MAGIN_BELOW, this.exampleAreaDiv.style.height = n - e + "px", n
}, Blockly.ContractEditor.prototype.onClose = function() {
    if (this.isOpen()) {
        var e = !0;
        this.exampleViews_.forEach(function(t) {
            var o = this.testExample(t.getBlock(), !1);
            t.setResult(o), t.refreshTestingUI(!1), e = e && !o
        }.bind(this)), !e && this.customFailureCloseHandler_() || this.hideIfOpen()
    }
}, Blockly.FieldIcon = function() {
    Blockly.FieldIcon.superClass_.constructor.apply(this, arguments), Blockly.addClass_(this.fieldGroup_, "blocklyIconGroup"), Blockly.addClass_(this.borderRect_, "blocklyIconShield"), this.textElement_.setAttribute("style", "font-size:9pt; cursor:default;")
}, goog.inherits(Blockly.FieldIcon, Blockly.Field), Blockly.FieldIcon.prototype.EDITABLE = !1, Blockly.FieldIcon.prototype.showEditor_ = function() {}, goog.memoize = function(e, t) {
    var o = t || goog.memoize.simpleSerializer;
    return function() {
        if (goog.memoize.ENABLE_MEMOIZE) {
            var t = this || goog.global,
                t = t[goog.memoize.CACHE_PROPERTY_] || (t[goog.memoize.CACHE_PROPERTY_] = {}),
                n = o(goog.getUid(e), arguments);
            return t.hasOwnProperty(n) ? t[n] : t[n] = e.apply(this, arguments)
        }
        return e.apply(this, arguments)
    }
}, goog.memoize.ENABLE_MEMOIZE = !0, goog.memoize.clearCache = function(e) {
    e[goog.memoize.CACHE_PROPERTY_] = {}
}, goog.memoize.CACHE_PROPERTY_ = "closure_memoize_cache_", goog.memoize.simpleSerializer = function(e, t) {
    for (var o = [e], n = t.length - 1; n >= 0; --n) o.push(typeof t[n], t[n]);
    return o.join("")
}, Blockly.utils = {}, Blockly.addClass_ = function(e, t) {
    var o = e.getAttribute("class") || "";
    Blockly.stringContainsClass_(o, t) && (o && (o += " "), e.setAttribute("class", o + t))
}, Blockly.elementHasClass_ = function(e, t) {
    return Blockly.stringContainsClass_(e.getAttribute("class") || "", t)
}, Blockly.stringContainsClass_ = function(e, t) {
    return -1 == (" " + e + " ").indexOf(" " + t + " ")
}, Blockly.removeClass_ = function(e, t) {
    var o = e.getAttribute("class");
    if (-1 != (" " + o + " ").indexOf(" " + t + " ")) {
        for (var o = o.split(/\s+/), n = 0; n < o.length; n++) o[n] && o[n] != t || (o.splice(n, 1), n--);
        o.length ? e.setAttribute("class", o.join(" ")) : e.removeAttribute("class")
    }
}, Blockly.bindEvent_ = function(e, t, o, n, i) {
    i = !!i;
    var r, l = [];
    if (!e.addEventListener) throw "Element is not a DOM node with addEventListener.";
    r = function() {
        n.apply(o, arguments)
    };
    var s = Blockly.bindEvent_.TOUCH_MAP[t];
    return s ? (window.navigator.pointerEnabled || window.navigator.msPointerEnabled || (e.addEventListener(t, r, i), l.push([e, t, r, i])), r = function(e) {
        if (e.target && e.target.style) {
            var t = e.target.style;
            t.touchAction ? t.touchAction = "none" : t.msTouchAction && (t.msTouchAction = "none")
        }
        for (var t = e.changedTouches || [e], i = 0; i < t.length; ++i) e.clientX = t[i].clientX, e.clientY = t[i].clientY, n.apply(o, arguments)
    }, e.addEventListener(s, r, i), l.push([e, s, r, i])) : (e.addEventListener(t, r, i), l.push([e, t, r, i])), l
}, Blockly.bindEvent_.TOUCH_MAP = {}, window.navigator.pointerEnabled ? Blockly.bindEvent_.TOUCH_MAP = {
    mousedown: "pointerdown",
    mousemove: "pointermove",
    mouseup: "pointerup"
} : window.navigator.msPointerEnabled ? Blockly.bindEvent_.TOUCH_MAP = {
    mousedown: "MSPointerDown",
    mousemove: "MSPointerMove",
    mouseup: "MSPointerUp"
} : "ontouchstart" in document.documentElement && (Blockly.bindEvent_.TOUCH_MAP = {
    mousedown: "touchstart",
    mousemove: "touchmove",
    mouseup: "touchend"
}), Blockly.unbindEvent_ = function(e) {
    for (; e.length;) {
        var t = e.pop(),
            o = t[2];
        t[0].removeEventListener(t[1], o, t[3])
    }
    return o
}, Blockly.fireUiEvent = function(e, t) {
    var o = document;
    if (o.createEvent) o = o.createEvent("UIEvents"), o.initEvent(t, !0, !0), e.dispatchEvent(o);
    else {
        if (!o.createEventObject) throw "FireEvent: No event creation mechanism.";
        o = o.createEventObject(), e.fireEvent("on" + t, o)
    }
}, Blockly.noEvent = function(e) {
    e.preventDefault(), e.stopPropagation()
}, Blockly.getRelativeXY = function(e) {
    var t = {
            x: 0,
            y: 0
        },
        o = e.getAttribute("x");
    return o && (t.x = parseFloat(o)), (o = e.getAttribute("y")) && (t.y = parseFloat(o)), (e = (e = e.getAttribute("transform")) && e.match(/translate\(\s*([-\d.]+)([ ,]\s*([-\d.]+)\s*\))?/)) && (t.x += parseFloat(e[1]), e[3] && (t.y += parseFloat(e[3]))), t
}, Blockly.getSvgXY_ = function(e, t) {
    var o = 0,
        n = 0,
        i = t || Blockly.topMostSVGParent(e);
    do {
        var r = Blockly.getRelativeXY(e),
            o = o + r.x,
            n = n + r.y;
        e = e.parentNode
    } while (e && e !== i);
    return {
        x: o,
        y: n
    }
}, Blockly.getAbsoluteXY_ = function(e, t) {
    var o = Blockly.getSvgXY_(e, t);
    return Blockly.convertCoordinates(o.x, o.y, t || Blockly.topMostSVGParent(e), !1)
}, Blockly.topMostSVGParent = function(e) {
    for (var t = null; e;) "svg" === e.tagName && (t = e), e = goog.dom.getParentElement(e);
    return t || Blockly.mainBlockSpaceEditor.getSVGElement()
}, Blockly.createSvgElement = function(e, t, o, n) {
    n = n || {}, e = document.createElementNS(Blockly.SVG_NS, e);
    for (var i in t) e.setAttribute(i, t[i]);
    return document.body.runtimeStyle && (e.runtimeStyle = e.currentStyle = e.style), o && (n.belowExisting ? goog.dom.insertChildAt(o, e, 0) : goog.dom.appendChild(o, e)), e
}, Blockly.isRightButton = function(e) {
    return 2 == e.button || e.ctrlKey
}, Blockly.convertCoordinates = function(e, t, o, n) {
    n && (e -= window.pageXOffset, t -= window.pageYOffset);
    var i = o.createSVGPoint();
    return i.x = e, i.y = t, e = o.getScreenCTM(), n && (e = e.inverse()), i = i.matrixTransform(e), n || (goog.userAgent.IPAD || goog.userAgent.IPHONE) && !goog.userAgent.isVersionOrHigher(538) || (i.x += window.pageXOffset, i.y += window.pageYOffset), i
}, Blockly.mouseToSvg = function(e, t) {
    return Blockly.mouseCoordinatesToSvg(e.clientX, e.clientY, t || Blockly.topMostSVGParent(e.target))
}, Blockly.mouseCoordinatesToSvg = function(e, t, o) {
    return Blockly.convertCoordinates(e + window.pageXOffset, t + window.pageYOffset, o, !0)
}, Blockly.svgCoordinatesToViewport = function(e, t) {
    var o = t.getMetrics();
    return new goog.math.Coordinate(e.x - o.absoluteLeft, e.y - o.absoluteTop)
}, Blockly.viewportCoordinateToBlockSpace = function(e, t) {
    var o = t.getViewportBox();
    return new goog.math.Coordinate(e.x + o.left, e.y + o.top)
}, Blockly.shortestStringLength = function(e) {
    if (!e.length) return 0;
    for (var t = e[0].length, o = 1; o < e.length; o++) t = Math.min(t, e[o].length);
    return t
}, Blockly.commonWordPrefix = function(e, t) {
    if (!e.length) return 0;
    if (1 == e.length) return e[0].length;
    for (var o = 0, n = t || Blockly.shortestStringLength(e), i = 0; n > i; i++) {
        for (var r = e[0][i], l = 1; l < e.length; l++)
            if (r != e[l][i]) return o;
            " " == r && (o = i + 1)
    }
    for (l = 1; l < e.length; l++)
        if ((r = e[l][i]) && " " != r) return o;
    return n
}, Blockly.commonWordSuffix = function(e, t) {
    if (!e.length) return 0;
    if (1 == e.length) return e[0].length;
    for (var o = 0, n = t || Blockly.shortestStringLength(e), i = 0; n > i; i++) {
        for (var r = e[0].substr(-i - 1, 1), l = 1; l < e.length; l++)
            if (r != e[l].substr(-i - 1, 1)) return o;
            " " == r && (o = i + 1)
    }
    for (l = 1; l < e.length; l++)
        if ((r = e[l].charAt(e[l].length - i - 1)) && " " != r) return o;
    return n
}, Blockly.isNumber = function(e) {
    return !!e.match(/^\s*-?\d+(\.\d+)?\s*$/)
}, Blockly.isMsie = function() {
    return 0 <= window.navigator.userAgent.indexOf("MSIE")
}, Blockly.isTrident = function() {
    return 0 <= window.navigator.userAgent.indexOf("Trident")
}, Blockly.isIOS = function() {
    return /iP(hone|od|ad)/.test(navigator.platform)
}, Blockly.ieVersion = function() {
    return document.documentMode
}, Blockly.mixColoursWithForegroundOpacity = function(e, t, o) {
    e = goog.color.hexToRgb(e);
    var n = goog.color.hexToRgb(t);
    t = Math.round(n[0] * (1 - o) + e[0] * o);
    var i = Math.round(n[1] * (1 - o) + e[1] * o);
    return o = Math.round(n[2] * (1 - o) + e[2] * o), goog.color.rgbToHex(t, i, o)
}, Blockly.printerRangeToNumbers = function(e) {
    e = e.replace(/ /g, "").split(",");
    for (var t = [], o = /^(\d+)\-(\d+)$/, n = /^(\d+)$/, i = 0; i < e.length; i++) {
        var r = e[i],
            l = o.exec(r),
            r = n.exec(r);
        l ? (l = goog.array.range(Number(l[1]), Number(l[2]) + 1), t = t.concat(l)) : r && t.push(Number(r[1]))
    }
    return t
}, Blockly.getUID = function() {
    return goog.events.getUniqueId("blocklyUID")
}, Blockly.isTargetInput = function(e) {
    return "textarea" == e.target.type || "text" == e.target.type
}, Blockly.blockContextMenu = function(e) {
    Blockly.isTargetInput(e) || e.preventDefault()
}, Blockly.getNormalizedWheelDeltaY = function(e) {
    return (e = e.deltaY || -e.wheelDeltaY) ? (goog.userAgent.GECKO && (e *= 10), e) : null
}, Blockly.getBoxOverflow = function(e, t) {
    return new goog.math.Box(Math.max(0, e.top - t.top), Math.max(0, t.right - e.right), Math.max(0, t.bottom - e.bottom), Math.max(0, e.left - t.left))
}, Blockly.getPointBoxOverflow = function(e, t) {
    return new goog.math.Box(e.top - t.y, t.x - e.right, t.y - e.bottom, e.left - t.x)
}, Blockly.isBoxWiderThan = function(e, t) {
    return Blockly.getBoxWidth(e) > Blockly.getBoxWidth(t)
}, Blockly.isBoxTallerThan = function(e, t) {
    return Blockly.getBoxHeight(e) > Blockly.getBoxHeight(t)
}, Blockly.getBoxWidth = function(e) {
    return e.right - e.left
}, Blockly.getBoxHeight = function(e) {
    return e.bottom - e.top
}, Blockly.numberWithin = function(e, t, o, n) {
    return n ? e >= t && o >= e : e > t && o > e
}, Blockly.svgRectToRect = function(e) {
    return new goog.math.Rect(e.x, e.y, e.width, e.height)
}, Blockly.showSimpleDialog = function(e) {
    Blockly.customSimpleDialog && Blockly.customSimpleDialog(e)
}, Blockly.BOX_DIRECTIONS = ["top", "right", "bottom", "left"], Blockly.addToNonZeroSides = function(e, t) {
    Blockly.BOX_DIRECTIONS.forEach(function(o) {
        0 !== e[o] && (e[o] += t)
    })
}, Blockly.svgIgnoreMouseEvents = function(e) {
    e.style.pointerEvents = "none"
}, Blockly.fireTestClickSequence = function(e) {
    Blockly.fireTestMouseEvent(e, "mousedown"), Blockly.fireTestMouseEvent(e, "mouseup"), Blockly.fireTestMouseEvent(e, "click")
}, Blockly.fireTestMouseEvent = function(e, t) {
    if (!document.createEvent) throw "fireTestMouseEvent is only for testing in browsers with createEvent";
    e.dispatchEvent(Blockly.makeTestMouseEvent(t))
}, Blockly.makeTestMouseEvent = function(e) {
    var t = document.createEvent("MouseEvents");
    return t.initMouseEvent(e, !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t
}, Blockly.findEmptyContainerBlock = function(e) {
    for (var t = 0; t < e.length; t++) {
        var o = e[t];
        if (Blockly.findEmptyInput(o, Blockly.NEXT_STATEMENT)) return o
    }
    return null
}, Blockly.findEmptyInput = function(e, t) {
    return goog.array.find(e.inputList, function(e) {
        return e.type === t && !e.connection.targetConnection
    })
}, Blockly.FieldImageDropdown = function(e, t, o) {
    this.width_ = t, this.height_ = o, Blockly.FieldImageDropdown.superClass_.constructor.call(this, e), this.hasForcedDimensions_() && this.updateDimensions_(this.width_, this.height_)
}, goog.inherits(Blockly.FieldImageDropdown, Blockly.FieldRectangularDropdown), Blockly.FieldImageDropdown.prototype.hasForcedDimensions_ = function() {
    return !!this.width_
}, Blockly.FieldImageDropdown.prototype.addPreviewElementTo_ = function(e) {
    this.previewElement_ = Blockly.createSvgElement("image", {
        height: Blockly.FieldImage.IMAGE_LOADING_HEIGHT + "px",
        width: Blockly.FieldImage.IMAGE_LOADING_WIDTH + "px",
        y: Blockly.FieldImage.IMAGE_OFFSET_Y,
        preserveAspectRatio: "xMidYMid slice"
    }, e)
}, Blockly.FieldImageDropdown.prototype.updatePreviewData_ = function(e) {
    this.previewElement_.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e), this.hasForcedDimensions_() || this.getUpdatedDimensions_(e)
}, Blockly.FieldImageDropdown.prototype.createDropdownPreviewElement_ = function(e) {
    return this.hasForcedDimensions_() ? this.createAutoSizedDropdownPreviewElement_(e, this.width_, this.height_) : this.createImageDropdownPreviewElement_(e)
}, Blockly.FieldImageDropdown.prototype.createAutoSizedDropdownPreviewElement_ = function(e, t, o) {
    var n = document.createElement("div");
    return n.style.backgroundImage = "url('" + e + "')", n.style.backgroundSize = "cover", n.style.backgroundRepeat = "no-repeat", n.style.backgroundPosition = "50% 50%", n.style.width = t + "px", n.style.height = o + "px", n
}, Blockly.FieldImageDropdown.prototype.createImageDropdownPreviewElement_ = function(e) {
    var t = document.createElement("img");
    return t.setAttribute("src", e), t
}, Blockly.FieldImageDropdown.prototype.getUpdatedDimensions_ = function(e) {
    var t = this;
    e = Blockly.ImageDimensionCache.getCachedDimensionsOrDefaultAndUpdate(e, function(e, o) {
        t.updateDimensions_(e, o)
    }), this.updateDimensions_(e.width, e.height)
}, Blockly.FieldImageDropdown.prototype.updatePreviewDimensions_ = function(e, t) {
    this.previewElement_.setAttribute("width", e + "px"), this.previewElement_.setAttribute("height", t + "px")
}, goog.dom.TagWalkType = {
    START_TAG: 1,
    OTHER: 0,
    END_TAG: -1
}, goog.dom.TagIterator = function(e, t, o, n, i) {
    this.reversed = !!t, e && this.setPosition(e, n), this.depth = void 0 != i ? i : this.tagType || 0, this.reversed && (this.depth *= -1), this.constrained = !o
}, goog.inherits(goog.dom.TagIterator, goog.iter.Iterator), goog.dom.TagIterator.prototype.node = null, goog.dom.TagIterator.prototype.tagType = goog.dom.TagWalkType.OTHER, goog.dom.TagIterator.prototype.started_ = !1, goog.dom.TagIterator.prototype.setPosition = function(e, t, o) {
    (this.node = e) && (this.tagType = goog.isNumber(t) ? t : this.node.nodeType != goog.dom.NodeType.ELEMENT ? goog.dom.TagWalkType.OTHER : this.reversed ? goog.dom.TagWalkType.END_TAG : goog.dom.TagWalkType.START_TAG), goog.isNumber(o) && (this.depth = o)
}, goog.dom.TagIterator.prototype.copyFrom = function(e) {
    this.node = e.node, this.tagType = e.tagType, this.depth = e.depth, this.reversed = e.reversed, this.constrained = e.constrained
}, goog.dom.TagIterator.prototype.clone = function() {
    return new goog.dom.TagIterator(this.node, this.reversed, !this.constrained, this.tagType, this.depth)
}, goog.dom.TagIterator.prototype.skipTag = function() {
    var e = this.reversed ? goog.dom.TagWalkType.END_TAG : goog.dom.TagWalkType.START_TAG;
    this.tagType == e && (this.tagType = -1 * e, this.depth += this.tagType * (this.reversed ? -1 : 1))
}, goog.dom.TagIterator.prototype.restartTag = function() {
    var e = this.reversed ? goog.dom.TagWalkType.START_TAG : goog.dom.TagWalkType.END_TAG;
    this.tagType == e && (this.tagType = -1 * e, this.depth += this.tagType * (this.reversed ? -1 : 1))
}, goog.dom.TagIterator.prototype.next = function() {
    var e;
    if (this.started_) {
        if (!this.node || this.constrained && 0 == this.depth) throw goog.iter.StopIteration;
        e = this.node;
        var t = this.reversed ? goog.dom.TagWalkType.END_TAG : goog.dom.TagWalkType.START_TAG;
        if (this.tagType == t) {
            var o = this.reversed ? e.lastChild : e.firstChild;
            o ? this.setPosition(o) : this.setPosition(e, -1 * t)
        } else(o = this.reversed ? e.previousSibling : e.nextSibling) ? this.setPosition(o) : this.setPosition(e.parentNode, -1 * t);
        this.depth += this.tagType * (this.reversed ? -1 : 1)
    } else this.started_ = !0;
    if (e = this.node, !this.node) throw goog.iter.StopIteration;
    return e
}, goog.dom.TagIterator.prototype.isStarted = function() {
    return this.started_
}, goog.dom.TagIterator.prototype.isStartTag = function() {
    return this.tagType == goog.dom.TagWalkType.START_TAG
}, goog.dom.TagIterator.prototype.isEndTag = function() {
    return this.tagType == goog.dom.TagWalkType.END_TAG
}, goog.dom.TagIterator.prototype.isNonElement = function() {
    return this.tagType == goog.dom.TagWalkType.OTHER
}, goog.dom.TagIterator.prototype.equals = function(e) {
    return e.node == this.node && (!this.node || e.tagType == this.tagType)
}, goog.dom.TagIterator.prototype.splice = function() {
    var e = this.node;
    this.restartTag(), this.reversed = !this.reversed, goog.dom.TagIterator.prototype.next.call(this), this.reversed = !this.reversed;
    for (var t = goog.isArrayLike(arguments[0]) ? arguments[0] : arguments, o = t.length - 1; o >= 0; o--) goog.dom.insertSiblingAfter(t[o], e);
    goog.dom.removeNode(e)
}, goog.dom.NodeIterator = function(e, t, o, n) {
    goog.dom.TagIterator.call(this, e, t, o, null, n)
}, goog.inherits(goog.dom.NodeIterator, goog.dom.TagIterator), goog.dom.NodeIterator.prototype.next = function() {
    do goog.dom.NodeIterator.superClass_.next.call(this); while (this.isEndTag());
    return this.node
}, goog.ui.PaletteRenderer = function() {
    goog.ui.ControlRenderer.call(this)
}, goog.inherits(goog.ui.PaletteRenderer, goog.ui.ControlRenderer), goog.addSingletonGetter(goog.ui.PaletteRenderer), goog.ui.PaletteRenderer.cellId_ = 0, goog.ui.PaletteRenderer.CSS_CLASS = "goog-palette", goog.ui.PaletteRenderer.prototype.createDom = function(e) {
    var t = this.getClassNames(e);
    return e = e.getDomHelper().createDom(goog.dom.TagName.DIV, t ? t.join(" ") : null, this.createGrid(e.getContent(), e.getSize(), e.getDomHelper())), goog.a11y.aria.setRole(e, goog.a11y.aria.Role.GRID), e
}, goog.ui.PaletteRenderer.prototype.createGrid = function(e, t, o) {
    for (var n = [], i = 0, r = 0; i < t.height; i++) {
        for (var l = [], s = 0; s < t.width; s++) {
            var a = e && e[r++];
            l.push(this.createCell(a, o))
        }
        n.push(this.createRow(l, o))
    }
    return this.createTable(n, o)
}, goog.ui.PaletteRenderer.prototype.createTable = function(e, t) {
    var o = t.createDom(goog.dom.TagName.TABLE, this.getCssClass() + "-table", t.createDom(goog.dom.TagName.TBODY, this.getCssClass() + "-body", e));
    return o.cellSpacing = 0, o.cellPadding = 0, o
}, goog.ui.PaletteRenderer.prototype.createRow = function(e, t) {
    var o = t.createDom(goog.dom.TagName.TR, this.getCssClass() + "-row", e);
    return goog.a11y.aria.setRole(o, goog.a11y.aria.Role.ROW), o
}, goog.ui.PaletteRenderer.prototype.createCell = function(e, t) {
    var o = t.createDom(goog.dom.TagName.TD, {
        "class": this.getCssClass() + "-cell",
        id: this.getCssClass() + "-cell-" + goog.ui.PaletteRenderer.cellId_++
    }, e);
    if (goog.a11y.aria.setRole(o, goog.a11y.aria.Role.GRIDCELL), goog.a11y.aria.setState(o, goog.a11y.aria.State.SELECTED, !1), !goog.dom.getTextContent(o) && !goog.a11y.aria.getLabel(o)) {
        var n = this.findAriaLabelForCell_(o);
        n && goog.a11y.aria.setLabel(o, n)
    }
    return o
}, goog.ui.PaletteRenderer.prototype.findAriaLabelForCell_ = function(e) {
    e = new goog.dom.NodeIterator(e);
    for (var t, o = ""; !o && (t = goog.iter.nextOrValue(e, null));) t.nodeType == goog.dom.NodeType.ELEMENT && (o = goog.a11y.aria.getLabel(t) || t.title);
    return o
}, goog.ui.PaletteRenderer.prototype.canDecorate = function() {
    return !1
}, goog.ui.PaletteRenderer.prototype.decorate = function() {
    return null
}, goog.ui.PaletteRenderer.prototype.setContent = function(e, t) {
    if (e) {
        var o = goog.dom.getElementsByTagNameAndClass(goog.dom.TagName.TBODY, this.getCssClass() + "-body", e)[0];
        if (o) {
            var n = 0;
            if (goog.array.forEach(o.rows, function(e) {
                    goog.array.forEach(e.cells, function(e) {
                        if (goog.dom.removeChildren(e), t) {
                            var o = t[n++];
                            o && goog.dom.appendChild(e, o)
                        }
                    })
                }), n < t.length) {
                for (var i = [], r = goog.dom.getDomHelper(e), l = o.rows[0].cells.length; n < t.length;) {
                    var s = t[n++];
                    i.push(this.createCell(s, r)), i.length == l && (s = this.createRow(i, r), goog.dom.appendChild(o, s), i.length = 0)
                }
                if (0 < i.length) {
                    for (; i.length < l;) i.push(this.createCell("", r));
                    s = this.createRow(i, r), goog.dom.appendChild(o, s)
                }
            }
        }
        goog.style.setUnselectable(e, !0, goog.userAgent.GECKO)
    }
}, goog.ui.PaletteRenderer.prototype.getContainingItem = function(e, t) {
    for (var o = e.getElement(); t && t.nodeType == goog.dom.NodeType.ELEMENT && t != o;) {
        if (t.tagName == goog.dom.TagName.TD && goog.dom.classlist.contains(t, this.getCssClass() + "-cell")) return t.firstChild;
        t = t.parentNode
    }
    return null
}, goog.ui.PaletteRenderer.prototype.highlightCell = function(e, t, o) {
    t && (t = this.getCellForItem(t), goog.dom.classlist.enable(t, this.getCssClass() + "-cell-hover", o), goog.a11y.aria.setState(e.getElementStrict(), goog.a11y.aria.State.ACTIVEDESCENDANT, t.id))
}, goog.ui.PaletteRenderer.prototype.getCellForItem = function(e) {
    return e ? e.parentNode : null
}, goog.ui.PaletteRenderer.prototype.selectCell = function(e, t, o) {
    t && (e = t.parentNode, goog.dom.classlist.enable(e, this.getCssClass() + "-cell-selected", o), goog.a11y.aria.setState(e, goog.a11y.aria.State.SELECTED, o))
}, goog.ui.PaletteRenderer.prototype.getCssClass = function() {
    return goog.ui.PaletteRenderer.CSS_CLASS
}, goog.ui.Palette = function(e, t, o) {
    goog.ui.Palette.base(this, "constructor", e, t || goog.ui.PaletteRenderer.getInstance(), o), this.setAutoStates(goog.ui.Component.State.CHECKED | goog.ui.Component.State.SELECTED | goog.ui.Component.State.OPENED, !1), this.currentCellControl_ = new goog.ui.Palette.CurrentCell_, this.currentCellControl_.setParentEventTarget(this), this.lastHighlightedIndex_ = -1
}, goog.inherits(goog.ui.Palette, goog.ui.Control), goog.ui.Palette.EventType = {
    AFTER_HIGHLIGHT: goog.events.getUniqueId("afterhighlight")
}, goog.ui.Palette.prototype.size_ = null, goog.ui.Palette.prototype.highlightedIndex_ = -1, goog.ui.Palette.prototype.selectionModel_ = null, goog.ui.Palette.prototype.disposeInternal = function() {
    goog.ui.Palette.superClass_.disposeInternal.call(this), this.selectionModel_ && (this.selectionModel_.dispose(), this.selectionModel_ = null), this.size_ = null, this.currentCellControl_.dispose()
}, goog.ui.Palette.prototype.setContentInternal = function(e) {
    goog.ui.Palette.superClass_.setContentInternal.call(this, e), this.adjustSize_(), this.selectionModel_ ? (this.selectionModel_.clear(), this.selectionModel_.addItems(e)) : (this.selectionModel_ = new goog.ui.SelectionModel(e), this.selectionModel_.setSelectionHandler(goog.bind(this.selectItem_, this)), this.getHandler().listen(this.selectionModel_, goog.events.EventType.SELECT, this.handleSelectionChange)), this.highlightedIndex_ = -1
}, goog.ui.Palette.prototype.getCaption = function() {
    return ""
}, goog.ui.Palette.prototype.setCaption = function() {}, goog.ui.Palette.prototype.handleMouseOver = function(e) {
    goog.ui.Palette.superClass_.handleMouseOver.call(this, e);
    var t = this.getRenderer().getContainingItem(this, e.target);
    t && e.relatedTarget && goog.dom.contains(t, e.relatedTarget) || t != this.getHighlightedItem() && this.setHighlightedItem(t)
}, goog.ui.Palette.prototype.handleMouseDown = function(e) {
    goog.ui.Palette.superClass_.handleMouseDown.call(this, e), this.isActive() && (e = this.getRenderer().getContainingItem(this, e.target), e != this.getHighlightedItem() && this.setHighlightedItem(e))
}, goog.ui.Palette.prototype.performActionInternal = function(e) {
    var t = this.getHighlightedItem();
    return t ? (this.setSelectedItem(t), goog.ui.Palette.base(this, "performActionInternal", e)) : !1
}, goog.ui.Palette.prototype.handleKeyEvent = function(e) {
    var t = this.getContent(),
        t = t ? t.length : 0,
        o = this.size_.width;
    if (0 == t || !this.isEnabled()) return !1;
    if (e.keyCode == goog.events.KeyCodes.ENTER || e.keyCode == goog.events.KeyCodes.SPACE) return this.performActionInternal(e);
    if (e.keyCode == goog.events.KeyCodes.HOME) return this.setHighlightedIndex(0), !0;
    if (e.keyCode == goog.events.KeyCodes.END) return this.setHighlightedIndex(t - 1), !0;
    var n = 0 > this.highlightedIndex_ ? this.getSelectedIndex() : this.highlightedIndex_;
    switch (e.keyCode) {
        case goog.events.KeyCodes.LEFT:
            return (-1 == n || 0 == n) && (n = t), this.setHighlightedIndex(n - 1), e.preventDefault(), !0;
        case goog.events.KeyCodes.RIGHT:
            return n == t - 1 && (n = -1), this.setHighlightedIndex(n + 1), e.preventDefault(), !0;
        case goog.events.KeyCodes.UP:
            if (-1 == n && (n = t + o - 1), n >= o) return this.setHighlightedIndex(n - o), e.preventDefault(), !0;
            break;
        case goog.events.KeyCodes.DOWN:
            if (-1 == n && (n = -o), t - o > n) return this.setHighlightedIndex(n + o), e.preventDefault(), !0
    }
    return !1
}, goog.ui.Palette.prototype.handleSelectionChange = function() {}, goog.ui.Palette.prototype.getSize = function() {
    return this.size_
}, goog.ui.Palette.prototype.setSize = function(e, t) {
    if (this.getElement()) throw Error(goog.ui.Component.Error.ALREADY_RENDERED);
    this.size_ = goog.isNumber(e) ? new goog.math.Size(e, t) : e, this.adjustSize_()
}, goog.ui.Palette.prototype.getHighlightedIndex = function() {
    return this.highlightedIndex_
}, goog.ui.Palette.prototype.getHighlightedItem = function() {
    var e = this.getContent();
    return e && e[this.highlightedIndex_]
}, goog.ui.Palette.prototype.getHighlightedCellElement_ = function() {
    return this.getRenderer().getCellForItem(this.getHighlightedItem())
}, goog.ui.Palette.prototype.setHighlightedIndex = function(e) {
    e != this.highlightedIndex_ && (this.highlightIndex_(this.highlightedIndex_, !1), this.lastHighlightedIndex_ = this.highlightedIndex_, this.highlightedIndex_ = e, this.highlightIndex_(e, !0), this.dispatchEvent(goog.ui.Palette.EventType.AFTER_HIGHLIGHT))
}, goog.ui.Palette.prototype.setHighlightedItem = function(e) {
    var t = this.getContent();
    this.setHighlightedIndex(t ? goog.array.indexOf(t, e) : -1)
}, goog.ui.Palette.prototype.getSelectedIndex = function() {
    return this.selectionModel_ ? this.selectionModel_.getSelectedIndex() : -1
}, goog.ui.Palette.prototype.getSelectedItem = function() {
    return this.selectionModel_ ? this.selectionModel_.getSelectedItem() : null
}, goog.ui.Palette.prototype.setSelectedIndex = function(e) {
    this.selectionModel_ && this.selectionModel_.setSelectedIndex(e)
}, goog.ui.Palette.prototype.setSelectedItem = function(e) {
    this.selectionModel_ && this.selectionModel_.setSelectedItem(e)
}, goog.ui.Palette.prototype.highlightIndex_ = function(e, t) {
    if (this.getElement()) {
        var o = this.getContent();
        if (o && e >= 0 && e < o.length) {
            var n = this.getHighlightedCellElement_();
            this.currentCellControl_.getElement() != n && this.currentCellControl_.setElementInternal(n), this.currentCellControl_.tryHighlight(t) && this.getRenderer().highlightCell(this, o[e], t)
        }
    }
}, goog.ui.Palette.prototype.setHighlighted = function(e) {
    goog.ui.Palette.base(this, "setHighlighted", e), e && -1 == this.highlightedIndex_ ? this.setHighlightedIndex(-1 < this.lastHighlightedIndex_ ? this.lastHighlightedIndex_ : 0) : e || this.setHighlightedIndex(-1)
}, goog.ui.Palette.prototype.selectItem_ = function(e, t) {
    this.getElement() && this.getRenderer().selectCell(this, e, t)
}, goog.ui.Palette.prototype.adjustSize_ = function() {
    var e = this.getContent();
    e ? this.size_ && this.size_.width ? (e = Math.ceil(e.length / this.size_.width), (!goog.isNumber(this.size_.height) || this.size_.height < e) && (this.size_.height = e)) : (e = Math.ceil(Math.sqrt(e.length)), this.size_ = new goog.math.Size(e, e)) : this.size_ = new goog.math.Size(0, 0)
}, goog.ui.Palette.CurrentCell_ = function() {
    goog.ui.Palette.CurrentCell_.base(this, "constructor", null), this.setDispatchTransitionEvents(goog.ui.Component.State.HOVER, !0)
}, goog.inherits(goog.ui.Palette.CurrentCell_, goog.ui.Control), goog.ui.Palette.CurrentCell_.prototype.tryHighlight = function(e) {
    return this.setHighlighted(e), this.isHighlighted() == e
}, goog.ui.ColorPalette = function(e, t, o) {
    this.colors_ = e || [], goog.ui.Palette.call(this, null, t || goog.ui.PaletteRenderer.getInstance(), o), this.setColors(this.colors_)
}, goog.inherits(goog.ui.ColorPalette, goog.ui.Palette), goog.ui.ColorPalette.prototype.normalizedColors_ = null, goog.ui.ColorPalette.prototype.labels_ = null, goog.ui.ColorPalette.prototype.getColors = function() {
    return this.colors_
}, goog.ui.ColorPalette.prototype.setColors = function(e, t) {
    this.colors_ = e, this.labels_ = t || null, this.normalizedColors_ = null, this.setContent(this.createColorNodes())
}, goog.ui.ColorPalette.prototype.getSelectedColor = function() {
    var e = this.getSelectedItem();
    return e ? (e = goog.style.getStyle(e, "background-color"), goog.ui.ColorPalette.parseColor_(e)) : null
}, goog.ui.ColorPalette.prototype.setSelectedColor = function(e) {
    e = goog.ui.ColorPalette.parseColor_(e), this.normalizedColors_ || (this.normalizedColors_ = goog.array.map(this.colors_, function(e) {
        return goog.ui.ColorPalette.parseColor_(e)
    })), this.setSelectedIndex(e ? goog.array.indexOf(this.normalizedColors_, e) : -1)
}, goog.ui.ColorPalette.prototype.createColorNodes = function() {
    return goog.array.map(this.colors_, function(e, t) {
        var o = this.getDomHelper().createDom("div", {
            "class": this.getRenderer().getCssClass() + "-colorswatch",
            style: "background-color:" + e
        });
        return o.title = this.labels_ && this.labels_[t] ? this.labels_[t] : "#" == e.charAt(0) ? "RGB (" + goog.color.hexToRgb(e).join(", ") + ")" : e, o
    }, this)
}, goog.ui.ColorPalette.parseColor_ = function(e) {
    if (e) try {
        return goog.color.parse(e).hex
    } catch (t) {}
    return null
}, goog.ui.ColorPicker = function(e, t) {
    goog.ui.Component.call(this, e), this.colorPalette_ = t || null, this.getHandler().listen(this, goog.ui.Component.EventType.ACTION, this.onColorPaletteAction_)
}, goog.inherits(goog.ui.ColorPicker, goog.ui.Component), goog.ui.ColorPicker.DEFAULT_NUM_COLS = 5, goog.ui.ColorPicker.EventType = {
    CHANGE: "change"
}, goog.ui.ColorPicker.prototype.focusable_ = !0, goog.ui.ColorPicker.prototype.getColors = function() {
    return this.colorPalette_ ? this.colorPalette_.getColors() : null
}, goog.ui.ColorPicker.prototype.setColors = function(e) {
    this.colorPalette_ ? this.colorPalette_.setColors(e) : this.createColorPalette_(e)
}, goog.ui.ColorPicker.prototype.addColors = function(e) {
    this.setColors(e)
}, goog.ui.ColorPicker.prototype.setSize = function(e) {
    this.colorPalette_ || this.createColorPalette_([]), this.colorPalette_.setSize(e)
}, goog.ui.ColorPicker.prototype.getSize = function() {
    return this.colorPalette_ ? this.colorPalette_.getSize() : null
}, goog.ui.ColorPicker.prototype.setColumnCount = function(e) {
    this.setSize(e)
}, goog.ui.ColorPicker.prototype.getSelectedIndex = function() {
    return this.colorPalette_ ? this.colorPalette_.getSelectedIndex() : -1
}, goog.ui.ColorPicker.prototype.setSelectedIndex = function(e) {
    this.colorPalette_ && this.colorPalette_.setSelectedIndex(e)
}, goog.ui.ColorPicker.prototype.getSelectedColor = function() {
    return this.colorPalette_ ? this.colorPalette_.getSelectedColor() : null
}, goog.ui.ColorPicker.prototype.setSelectedColor = function(e) {
    this.colorPalette_ && this.colorPalette_.setSelectedColor(e)
}, goog.ui.ColorPicker.prototype.isFocusable = function() {
    return this.focusable_
}, goog.ui.ColorPicker.prototype.setFocusable = function(e) {
    this.focusable_ = e, this.colorPalette_ && this.colorPalette_.setSupportedState(goog.ui.Component.State.FOCUSED, e)
}, goog.ui.ColorPicker.prototype.canDecorate = function() {
    return !1
}, goog.ui.ColorPicker.prototype.enterDocument = function() {
    goog.ui.ColorPicker.superClass_.enterDocument.call(this), this.colorPalette_ && this.colorPalette_.render(this.getElement()), this.getElement().unselectable = "on"
}, goog.ui.ColorPicker.prototype.disposeInternal = function() {
    goog.ui.ColorPicker.superClass_.disposeInternal.call(this), this.colorPalette_ && (this.colorPalette_.dispose(), this.colorPalette_ = null)
}, goog.ui.ColorPicker.prototype.focus = function() {
    this.colorPalette_ && this.colorPalette_.getElement().focus()
}, goog.ui.ColorPicker.prototype.onColorPaletteAction_ = function(e) {
    e.stopPropagation(), this.dispatchEvent(goog.ui.ColorPicker.EventType.CHANGE)
}, goog.ui.ColorPicker.prototype.createColorPalette_ = function(e) {
    e = new goog.ui.ColorPalette(e, null, this.getDomHelper()), e.setSize(goog.ui.ColorPicker.DEFAULT_NUM_COLS), e.setSupportedState(goog.ui.Component.State.FOCUSED, this.focusable_), this.addChild(e), this.colorPalette_ = e, this.isInDocument() && this.colorPalette_.render(this.getElement())
}, goog.ui.ColorPicker.createSimpleColorGrid = function(e) {
    return e = new goog.ui.ColorPicker(e), e.setSize(7), e.setColors(goog.ui.ColorPicker.SIMPLE_GRID_COLORS), e
}, goog.ui.ColorPicker.SIMPLE_GRID_COLORS = "#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(" "), Blockly.FieldColour = function(e, t) {
    Blockly.FieldColour.superClass_.constructor.call(this, "\xa0\xa0\xa0"), this.changeHandler_ = t, this.borderRect_.style.fillOpacity = 1, this.setValue(e)
}, goog.inherits(Blockly.FieldColour, Blockly.Field), Blockly.FieldColour.prototype.CURSOR = "default", Blockly.FieldColour.prototype.dispose = function() {
    Blockly.WidgetDiv.hideIfOwner(this), Blockly.FieldColour.superClass_.dispose.call(this)
}, Blockly.FieldColour.prototype.getValue = function() {
    return this.colour_
}, Blockly.FieldColour.prototype.setValue = function(e) {
    this.colour_ = e, this.borderRect_.style.fill = e, this.sourceBlock_ && this.sourceBlock_.rendered && this.sourceBlock_.blockSpace.fireChangeEvent()
}, Blockly.FieldColour.COLOURS = goog.ui.ColorPicker.SIMPLE_GRID_COLORS, Blockly.FieldColour.COLUMNS = 7, Blockly.FieldColour.prototype.showEditor_ = function() {
    Blockly.WidgetDiv.show(this, Blockly.FieldColour.widgetDispose_);
    var e = Blockly.WidgetDiv.DIV,
        t = new goog.ui.ColorPicker;
    t.setSize(Blockly.FieldColour.COLUMNS), t.setColors(Blockly.FieldColour.COLOURS), t.render(e), t.setSelectedColor(this.getValue());
    var o = Blockly.getAbsoluteXY_(this.borderRect_, this.getRootSVGElement_());
    if (0 <= navigator.userAgent.indexOf("MSIE") || 0 <= navigator.userAgent.indexOf("Trident")) {
        this.borderRect_.style.display = "inline";
        var n = {
            x: this.borderRect_.getBBox().x,
            y: this.borderRect_.getBBox().y,
            width: this.borderRect_.scrollWidth,
            height: this.borderRect_.scrollHeight
        }
    } else n = this.borderRect_.getBBox();
    Blockly.RTL && (o.x += n.width), o.y += n.height - 1, Blockly.RTL && (o.x -= e.offsetWidth), e.style.left = o.x + "px", e.style.top = o.y + "px";
    var i = this;
    Blockly.FieldColour.changeEventKey_ = goog.events.listen(t, goog.ui.ColorPicker.EventType.CHANGE, function(e) {
        if (e = e.target.getSelectedColor() || "#000000", Blockly.WidgetDiv.hide(), i.changeHandler_) {
            var t = i.changeHandler_(e);
            void 0 !== t && (e = t)
        }
        null !== e && i.setValue(e)
    })
}, Blockly.FieldColour.widgetDispose_ = function() {
    Blockly.FieldColour.changeEventKey_ && goog.events.unlistenByKey(Blockly.FieldColour.changeEventKey_)
}, Blockly.FieldTextInput = function(e, t) {
    Blockly.FieldTextInput.superClass_.constructor.call(this, e), this.changeHandler_ = t
}, goog.inherits(Blockly.FieldTextInput, Blockly.Field), Blockly.FieldTextInput.prototype.CURSOR = "text", Blockly.FieldTextInput.prototype.dispose = function() {
    Blockly.WidgetDiv.hideIfOwner(this), Blockly.FieldTextInput.superClass_.dispose.call(this)
}, Blockly.FieldTextInput.prototype.setText = function(e) {
    if (null !== e) {
        if (this.changeHandler_) {
            var t = this.changeHandler_(e);
            null !== t && void 0 !== t && (e = t)
        }
        Blockly.Field.prototype.setText.call(this, e)
    }
}, Blockly.FieldTextInput.prototype.showEditor_ = function() {
    Blockly.WidgetDiv.show(this, this.widgetDispose_());
    var e = Blockly.WidgetDiv.DIV,
        t = goog.dom.createDom("input", "blocklyHtmlInput");
    this.changeHandler_ === Blockly.FieldTextInput.numberValidator ? (t.setAttribute("type", "number"), t.setAttribute("step", "any")) : this.changeHandler_ === Blockly.FieldTextInput.nonnegativeIntegerValidator && (t.setAttribute("type", "number"), t.setAttribute("pattern", "\\d*")), Blockly.FieldTextInput.htmlInput_ = t, e.appendChild(t), t.value = t.defaultValue = this.text_, t.oldValue_ = null, this.validate_(), this.resizeEditor_(), t.focus(), goog.userAgent.IPAD || goog.userAgent.IPHONE ? t.setSelectionRange(0, 9999) : t.select(), t.onKeyUpWrapper_ = Blockly.bindEvent_(t, "keydown", this, function(e) {
        e.stopPropagation()
    }), t.onKeyUpWrapper_ = Blockly.bindEvent_(t, "keyup", this, this.onHtmlInputChange_), t.onKeyPressWrapper_ = Blockly.bindEvent_(t, "keypress", this, this.onHtmlInputChange_), e = this.sourceBlock_.blockSpace.getCanvas(), t.onBlockSpaceChangeWrapper_ = Blockly.bindEvent_(e, "blocklyBlockSpaceChange", this, this.resizeEditor_)
}, Blockly.FieldTextInput.prototype.onHtmlInputChange_ = function(e) {
    var t = Blockly.FieldTextInput.htmlInput_;
    13 == e.keyCode ? (Blockly.WidgetDiv.hide(), e.preventDefault()) : 27 == e.keyCode ? (this.setText(t.defaultValue), Blockly.WidgetDiv.hide()) : (e = t.value, e !== t.oldValue_ ? (t.oldValue_ = e, this.setText(e), this.validate_()) : goog.userAgent.WEBKIT && this.sourceBlock_.render())
}, Blockly.FieldTextInput.prototype.validate_ = function() {
    var e = !0;
    goog.asserts.assertObject(Blockly.FieldTextInput.htmlInput_);
    var t = Blockly.FieldTextInput.htmlInput_;
    this.changeHandler_ && (e = this.changeHandler_(t.value)), null === e ? Blockly.addClass_(t, "blocklyInvalidInput") : Blockly.removeClass_(t, "blocklyInvalidInput")
}, Blockly.FieldTextInput.prototype.resizeEditor_ = function() {
    var e = Blockly.WidgetDiv.DIV;
    if (0 <= navigator.userAgent.indexOf("MSIE") || 0 <= navigator.userAgent.indexOf("Trident")) {
        this.fieldGroup_.style.display = "inline";
        var t = {
            x: this.fieldGroup_.getBBox().x,
            y: this.fieldGroup_.getBBox().y,
            width: this.fieldGroup_.scrollWidth,
            height: this.fieldGroup_.scrollHeight
        }
    } else t = this.fieldGroup_.getBBox();
    if (e.style.width = t.width + "px", t = Blockly.getAbsoluteXY_(this.borderRect_, this.getRootSVGElement_()), Blockly.RTL) {
        if (0 <= navigator.userAgent.indexOf("MSIE") || 0 <= navigator.userAgent.indexOf("Trident")) {
            this.borderRect_.style.display = "inline";
            var o = {
                x: this.borderRect_.getBBox().x,
                y: this.borderRect_.getBBox().y,
                width: this.borderRect_.scrollWidth,
                height: this.borderRect_.scrollHeight
            }
        } else o = this.borderRect_.getBBox();
        t.x += o.width, t.x -= e.offsetWidth
    }
    t.y += 1, goog.userAgent.WEBKIT && (t.y -= 3), e.style.left = t.x + "px", e.style.top = t.y + "px"
}, Blockly.FieldTextInput.prototype.widgetDispose_ = function() {
    var e = this;
    return function() {
        var t = Blockly.FieldTextInput.htmlInput_,
            o = t.value;
        e.changeHandler_ && (o = e.changeHandler_(o), null === o && (o = t.defaultValue)), e.setText(o), e.sourceBlock_.rendered && e.sourceBlock_.render(), Blockly.unbindEvent_(t.onKeyUpWrapper_), Blockly.unbindEvent_(t.onKeyPressWrapper_), Blockly.unbindEvent_(t.onBlockSpaceChangeWrapper_), Blockly.FieldTextInput.htmlInput_ = null, Blockly.WidgetDiv.DIV.style.width = "auto"
    }
}, Blockly.FieldTextInput.prototype.isKeyboardInputField_ = function() {
    return !0
}, Blockly.FieldTextInput.numberValidator = function(e) {
    return e = (e || "").replace(/O/gi, "0"), e = e.replace(/,/g, ""), e = parseFloat(e || 0), isNaN(e) ? null : String(e)
}, Blockly.FieldTextInput.nonnegativeIntegerValidator = function(e) {
    return (e = Blockly.FieldTextInput.numberValidator(e)) && (e = String(Math.max(0, Math.floor(e)))), e
}, Blockly.Generator = {}, Blockly.Generator.NAME_TYPE = "generated_function", Blockly.Generator.languages = {}, Blockly.Generator.get = function(e) {
    if (!(e in Blockly.Generator.languages)) {
        var t = new Blockly.CodeGenerator(e);
        Blockly.Generator.languages[e] = t
    }
    return Blockly.Generator.languages[e]
}, Blockly.Generator.blocksToCode = function(e, t) {
    var o = [],
        n = Blockly.Generator.get(e);
    n.init();
    for (var i, r = 0; i = t[r]; r++) {
        var l = n.blockToCode(i);
        l instanceof Array && (l = l[0]), l && (i.outputConnection && n.scrubNakedValue && (l = n.scrubNakedValue(l)), o.push(l))
    }
    return o = o.join("\n"), o = n.finish(o), o = o.replace(/^\s+\n/, ""), o = o.replace(/\n\s+$/, "\n"), o = o.replace(/[ \t]+\n/g, "\n")
}, Blockly.Generator.blockSpaceToCode = function(e, t) {
    var o;
    return t ? ("string" == typeof t && (t = [t]), o = goog.array.filter(Blockly.mainBlockSpace.getTopBlocks(!0), function(e) {
        return goog.array.contains(t, e.type)
    }, this)) : o = Blockly.mainBlockSpace.getTopBlocks(!0), Blockly.Generator.blocksToCode(e, o)
}, Blockly.Generator.prefixLines = function(e, t) {
    return t + e.replace(/\n(.)/g, "\n" + t + "$1")
}, Blockly.Generator.allNestedComments = function(e) {
    var t = [];
    e = e.getDescendants();
    for (var o = 0; o < e.length; o++) {
        var n = e[o].getCommentText();
        n && t.push(n)
    }
    return t.length && t.push(""), t.join("\n")
}, Blockly.CodeGenerator = function(e) {
    this.name_ = e, this.RESERVED_WORDS_ = ""
}, Blockly.CodeGenerator.prototype.blockToCode = function(e) {
    if (!e) return "";
    if (e.disabled) return e = e.nextConnection && e.nextConnection.targetBlock(), this.blockToCode(e);
    var t = this[e.type];
    if (!t) throw 'Language "' + this.name_ + '" does not know how to generate code for block type "' + e.type + '".';
    return t = t.call(e), t instanceof Array ? [this.scrub_(e, t[0]), t[1]] : this.scrub_(e, t)
}, Blockly.CodeGenerator.prototype.valueToCode = function(e, t, o) {
    if (isNaN(o)) throw 'Expecting valid order from block "' + e.type + '".';
    if (e = e.getInputTargetBlock(t), !e) return "";
    var n = this.blockToCode(e);
    if ("" === n) return "";
    if (!(n instanceof Array)) throw 'Expecting tuple from value block "' + e.type + '".';
    if (t = n[0], n = n[1], isNaN(n)) throw 'Expecting valid order from value block "' + e.type + '".';
    return t && n >= o && (t = "(" + t + ")"), t
}, Blockly.CodeGenerator.prototype.statementToCode = function(e, t) {
    var o = e.getInputTargetBlock(t),
        n = this.blockToCode(o);
    if (!goog.isString(n)) throw 'Expecting code from statement block "' + o.type + '".';
    return n && (n = Blockly.Generator.prefixLines(n, "  ")), n
}, Blockly.CodeGenerator.prototype.addReservedWords = function(e) {
    this.RESERVED_WORDS_ += e + ","
}, goog.cssom = {}, goog.cssom.CssRuleType = {
    STYLE: 1,
    IMPORT: 3,
    MEDIA: 4,
    FONT_FACE: 5,
    PAGE: 6,
    NAMESPACE: 7
}, goog.cssom.getAllCssText = function(e) {
    return goog.cssom.getAllCss_(e || document.styleSheets, !0)
}, goog.cssom.getAllCssStyleRules = function(e) {
    return goog.cssom.getAllCss_(e || document.styleSheets, !1)
}, goog.cssom.getCssRulesFromStyleSheet = function(e) {
    var t = null;
    try {
        t = e.rules || e.cssRules
    } catch (o) {
        if (15 == o.code) throw o.styleSheet = e, o
    }
    return t
}, goog.cssom.getAllCssStyleSheets = function(e, t) {
    var o = [],
        n = e || document.styleSheets,
        i = goog.isDef(t) ? t : !1;
    if (n.imports && n.imports.length)
        for (var r = 0, l = n.imports.length; l > r; r++) goog.array.extend(o, goog.cssom.getAllCssStyleSheets(n.imports[r]));
    else if (n.length)
        for (r = 0, l = n.length; l > r; r++) goog.array.extend(o, goog.cssom.getAllCssStyleSheets(n[r]));
    else {
        var s = goog.cssom.getCssRulesFromStyleSheet(n);
        if (s && s.length)
            for (var a, r = 0, l = s.length; l > r; r++) a = s[r], a.styleSheet && goog.array.extend(o, goog.cssom.getAllCssStyleSheets(a.styleSheet))
    }
    return !(n.type || n.rules || n.cssRules) || n.disabled && !i || o.push(n), o
}, goog.cssom.getCssTextFromCssRule = function(e) {
    var t = "";
    return e.cssText ? t = e.cssText : e.style && e.style.cssText && e.selectorText && (t = e.style.cssText.replace(/\s*-closure-parent-stylesheet:\s*\[object\];?\s*/gi, "").replace(/\s*-closure-rule-index:\s*[\d]+;?\s*/gi, ""), t = e.selectorText + " { " + t + " }"), t
}, goog.cssom.getCssRuleIndexInParentStyleSheet = function(e, t) {
    if (e.style && e.style["-closure-rule-index"]) return e.style["-closure-rule-index"];
    var o = t || goog.cssom.getParentStyleSheet(e);
    if (!o) throw Error("Cannot find a parentStyleSheet.");
    if ((o = goog.cssom.getCssRulesFromStyleSheet(o)) && o.length)
        for (var n, i = 0, r = o.length; r > i; i++)
            if (n = o[i], n == e) return i;
    return -1
}, goog.cssom.getParentStyleSheet = function(e) {
    return e.parentStyleSheet || e.style && e.style["-closure-parent-stylesheet"]
}, goog.cssom.replaceCssRule = function(e, t, o, n) {
    if (!(o = o || goog.cssom.getParentStyleSheet(e))) throw Error("Cannot proceed without the parentStyleSheet.");
    if (e = n >= 0 ? n : goog.cssom.getCssRuleIndexInParentStyleSheet(e, o), !(e >= 0)) throw Error("Cannot proceed without the index of the cssRule.");
    goog.cssom.removeCssRule(o, e), goog.cssom.addCssRule(o, t, e)
}, goog.cssom.addCssRule = function(e, t, o) {
    if ((0 > o || void 0 == o) && (o = (e.cssRules || e.rules).length), e.insertRule) e.insertRule(t, o);
    else {
        if (t = /^([^\{]+)\{([^\{]+)\}/.exec(t), 3 != t.length) throw Error("Your CSSRule appears to be ill-formatted.");
        e.addRule(t[1], t[2], o)
    }
}, goog.cssom.removeCssRule = function(e, t) {
    e.deleteRule ? e.deleteRule(t) : e.removeRule(t)
}, goog.cssom.addCssText = function(e, t) {
    var o = t ? t.getDocument() : goog.dom.getDocument(),
        n = o.createElement("style");
    return n.type = "text/css", o.getElementsByTagName("head")[0].appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : (o = o.createTextNode(e), n.appendChild(o)), n
}, goog.cssom.getFileNameFromStyleSheet = function(e) {
    return (e = e.href) ? /([^\/\?]+)[^\/]*$/.exec(e)[1] : null
}, goog.cssom.getAllCss_ = function(e, t) {
    for (var o = [], n = goog.cssom.getAllCssStyleSheets(e), i = 0; e = n[i]; i++) {
        var r = goog.cssom.getCssRulesFromStyleSheet(e);
        if (r && r.length) {
            if (!t) var l = 0;
            for (var s, a = 0, g = r.length; g > a; a++) s = r[a], t && !s.href ? (s = goog.cssom.getCssTextFromCssRule(s), o.push(s)) : s.href || (s.style && (s.parentStyleSheet || (s.style["-closure-parent-stylesheet"] = e), s.style["-closure-rule-index"] = l), o.push(s)), t || l++
        }
    }
    return t ? o.join(" ") : o
}, Blockly.Css = {}, Blockly.Css.Cursor = {
    OPEN: "handopen",
    CLOSED: "handclosed",
    DELETE: "handdelete"
}, Blockly.Css.currentCursor_ = "", Blockly.Css.styleSheet_ = null, Blockly.Css.inject = function(e) {
    var t = Blockly.Css.CONTENT.join("\n"),
        t = t.replace(/%CONTAINER_ID%/g, e.id).replace(/%TREE_PATH%/g, Blockly.assetUrl("media/tree.png"));
    Blockly.Css.styleSheet_ = goog.cssom.addCssText(t).sheet, Blockly.Css.setCursor(Blockly.Css.Cursor.OPEN)
}, Blockly.Css.setCursor = function(e, t) {
    if (!Blockly.readOnly) {
        if (Blockly.Css.currentCursor_ != e) {
            Blockly.Css.currentCursor_ = e;
            var o = e == Blockly.Css.Cursor.OPEN ? "8 5" : "7 3",
                n = "url(" + Blockly.assetUrl("media/" + e + ".cur") + ") " + o + ", auto";
            Blockly.Css.styleSheet_ && 0 < Blockly.Css.styleSheet_.cssRules.length && goog.cssom.replaceCssRule("", ".blocklyDraggable {\ncursor: " + n + ";\n}\n", Blockly.Css.styleSheet_, 0)
        }
        for (var i, o = function(t) {
                t.style.cursor = e == Blockly.Css.Cursor.OPEN ? "" : n
            }, r = document.getElementsByClassName("blocklyToolboxDiv"), l = 0; i = r[l]; l++) o(i);
        t && o(t)
    }
}, Blockly.Css.CONTENT = [".blocklyDraggable {", "}", "#%CONTAINER_ID% {", "  border: 1px solid #ddd;", "}", "#%CONTAINER_ID% .userHidden {", "  display: none;", "}", "#%CONTAINER_ID% .hiddenFlyout {", "  display: none !important;", "}", "#%CONTAINER_ID%.readonly .userHidden {", "  display: inline;", "}", "#%CONTAINER_ID%.readonly {", "  border: 0;", "}", "#%CONTAINER_ID%.edit .userHidden {", "  display: inline;", "  fill-opacity: 0.5;", "}", "#%CONTAINER_ID%.edit .userHidden .blocklyPath {", "  fill-opacity: 0.5;", "}", "#%CONTAINER_ID%.edit .userHidden .blocklyPathDark, #%CONTAINER_ID%.edit .userHidden .blocklyPathLight {", "  display: none;", "}", ".blocklySvg {", "  cursor: pointer;", "  background-color: #fff;", "  overflow: hidden;", "}", "g.blocklyDraggable {", "  -ms-touch-action: none;", "  touch-action: none;", "}", ".blocklyWidgetDiv {", "  position: absolute;", "  display: none;", "  z-index: 999;", "}", ".blocklyResizeSE {", "  fill: #aaa;", "  cursor: se-resize;", "}", ".blocklyResizeSW {", "  fill: #aaa;", "  cursor: sw-resize;", "}", ".blocklyResizeLine {", "  stroke-width: 1;", "  stroke: #888;", "}", ".blocklyHighlightedConnectionPath {", "  stroke-width: 4px;", "  stroke: #fc3;", "  fill: none;", "}", ".blocklyPathLight {", "  fill: none;", "  stroke-width: 2;", "  stroke-linecap: round;", "}", ".blocklySpotlight>.blocklyPath {", "  fill: #fc3;", "}", ".blocklySelected:not(.blocklyUndeletable)>.blocklyPath {", "  stroke-width: 3px;", "  stroke: #fc3;", "}", ".blocklySelected:not(.blocklyUndeletable)>.blocklyPathLight {", "  display: none;", "}", ".blocklyUndeletable>.blocklyEditableText>rect {", "  fill-opacity: 1.0;", "  fill: #ffdb74;", "}", ".blocklyDragging>.blocklyPath,", ".blocklyDragging>.blocklyPathLight {", "  fill-opacity: 0.8;", "  stroke-opacity: 0.8;", "}", ".blocklyDragging>.blocklyPathDark {", "  display: none;", "}", ".blocklyDisabled>.blocklyPath {", "  fill-opacity: 0.50;", "  stroke-opacity: 0.50;", "}", ".blocklyDisabled>.blocklyPathLight,", ".blocklyDisabled>.blocklyPathDark {", "  display: none;", "}", ".blocklyText {", "  cursor: default;", "  font-family: sans-serif;", "  font-size: 11pt;", "  fill: #fff;", "}", ".innerModalDiv {", "  pointer-events: none !important;", "}", ".innerModalDiv .goog-flat-menu-button,", ".innerModalDiv textarea,", ".innerModalDiv input,", ".innerModalDiv button {", "  pointer-events: auto;", "}", ".flyoutColorGray {", "  background-color: #DDD;", "}", ".contractEditor #paramAddButton {", "  margin-top: 3px;", "  margin-left: 10px;", "  margin-bottom: 4px;", "}", ".contractEditorHeaderText {", "  cursor: default;", "  font-size: 12pt;", "  fill: #fff;", "}", ".contract-type-hint {", "  color: #898989;", "  font-size: 11px;", "}", ".exampleAreaDiv {", "  pointer-events: none;", "}", ".callResultText {", "  color: #000;", "  position: absolute;", "}", ".exampleAreaButton {", "  pointer-events: initial;", "  position: absolute;", "}", ".core-clearfix {", "  overflow: auto;", "}", ".testButton {", "  padding: 3px 0 !important;", "  min-width: 95px !important;", "}", ".resetButton {", "  border: 1px solid #0094ca !important;", "  background-color: #0094ca !important;", "}", ".example-result-text {", "  position: absolute;", "  font-size: 16px;", "}", ".color-square-icon {", "  float: left;", "  width: 21px;", "  height: 18px;", "  margin-right: 9px !important;", "  margin-left: 6px !important;", "}", ".goog-menuitem .color-square-icon {", "  margin-left: -3px !important;", "  margin-top: 2px !important;", "}", ".blocklyNonEditableText>text {", "  pointer-events: none;", "}", ".blocklyNonEditableText>rect,", ".blocklyEditableText>rect {", "  fill: #fff;", "  fill-opacity: 0.6;", "}", ".blocklyNonEditableText>text,", ".blocklyEditableText>text {", "  fill: #000;", "}", ".blocklyEditableText:hover>rect {", "  stroke-width: 2;", "  stroke: #fff;", "}", "/*", " * Don't allow users to select text.  It gets annoying when trying to", " * drag a block and selected text moves instead.", " */", ".blocklySvg text {", "  -moz-user-select: none;", "  -webkit-user-select: none;", "  user-select: none;", "  cursor: inherit;", "}", ".blocklyHidden {", "  display: none;", "}", ".blocklyFieldDropdown:not(.blocklyHidden) {", "  display: block;", "}", ".blocklyTooltipBackground {", "  fill: #ffffc7;", "  stroke-width: 1px;", "  stroke: #d8d8d8;", "}", ".blocklyTooltipShadow,", ".blocklyContextMenuShadow,", ".blocklyDropdownMenuShadow {", "  fill: #bbb;", "  filter: url(#blocklyShadowFilter);", "}", ".blocklyTooltipText {", "  font-family: sans-serif;", "  font-size: 9pt;", "  fill: #000;", "}", "#modalEditorClose:hover>rect {", "  fill: #0094ca;", "}", ".svgTextButton:hover>rect {", "  fill: #0094ca;", "}", ".red-delete-button {", "  background-color: #cc0000 !important;", "  border: 1px solid #cc0000 !important;", "}", ".blocklyIconShield {", "  cursor: default;", "  fill: #00c;", "  stroke-width: 1px;", "  stroke: #ccc;", "}", ".blocklyIconGroup:hover>.blocklyIconShield {", "  fill: #00f;", "  stroke: #fff;", "}", ".blocklyIconGroup:hover>.blocklyIconMark {", "  fill: #fff;", "}", ".blocklyIconMark {", "  cursor: default !important;", "  font-family: sans-serif;", "  font-size: 9pt;", "  font-weight: bold;", "  fill: #ccc;", "  text-anchor: middle;", "}", ".blocklyWarningBody {", "}", ".blocklyMinimalBody {", "  margin: 0;", "  padding: 0;", "}", ".blocklyCommentTextarea {", "  margin: 0;", "  padding: 2px;", "  border: 0;", "  resize: none;", "  background-color: #ffc;", "}", ".blocklyHtmlInput {", "  font-family: sans-serif;", "  font-size: 11pt;", "  border: none;", "  outline: none;", "  width: 100%;", "  -moz-appearance: textfield;", "}", ".blocklyHtmlInput::-webkit-inner-spin-button, .blocklyHtmlInput::-webkit-outer-spin-button {", "  -webkit-appearance: none;", "}", ".blocklyContextMenuBackground,", ".blocklyMutatorBackground {", "  fill: #fff;", "  stroke-width: 1;", "  stroke: #ddd;", "}", ".newFunctionDiv {", "  position: absolute;", "  top: 120px;", "  left: 600px;", "}", "#modalContainer .goog-flat-menu-button-caption {", "  color: #555555;", "  margin-left: 1px;", "  margin-right: 0;", "  min-width: 55px;", "}", ".blocklyContextMenuOptions>.blocklyMenuDiv,", ".blocklyContextMenuOptions>.blocklyMenuDivDisabled,", ".blocklyDropdownMenuOptions>.blocklyMenuDiv {", "  fill: #fff;", "}", ".blocklyContextMenuOptions>.blocklyMenuDiv:hover>rect,", ".blocklyDropdownMenuOptions>.blocklyMenuDiv:hover>rect {", "  fill: #57e;", "}", ".blocklyMenuSelected>rect {", "  fill: #57e;", "}", ".blocklyMenuText {", "  cursor: default !important;", "  font-family: sans-serif;", "  font-size: 15px; /* All context menu sizes are based on pixels. */", "  fill: #000;", "}", ".blocklyContextMenuOptions>.blocklyMenuDiv:hover>.blocklyMenuText,", ".blocklyDropdownMenuOptions>.blocklyMenuDiv:hover>.blocklyMenuText {", "  fill: #fff;", "}", ".blocklyMenuSelected>.blocklyMenuText {", "  fill: #fff;", "}", ".blocklyMenuDivDisabled>.blocklyMenuText {", "  fill: #ccc;", "}", ".blocklyFlyoutBackground {", "  fill: #ddd;", "  fill-opacity: 0.8;", "}", ".blocklyToolboxBackground {", "  fill: #ddd;", "}", ".blocklyBackground {", "  fill: #666;", "}", ".blocklyScrollbarBackground {", "  fill: #fff;", "  stroke-width: 1;", "  stroke: #e4e4e4;", "}", ".blocklyScrollbarKnob {", "  fill: #ccc;", "}", ".blocklyScrollbarBackground:hover+.blocklyScrollbarKnob,", ".blocklyScrollbarKnob:hover {", "  fill: #bbb;", "}", ".blocklyInvalidInput {", "  background: #faa;", "}", ".blocklyAngleCircle {", "  stroke: #444;", "  stroke-width: 1;", "  fill: #ddd;", "  fill-opacity: 0.8;", "}", ".blocklyAngleMarks {", "  stroke: #444;", "  stroke-width: 1;", "}", ".blocklyAngleGuage {", "  fill: #d00;", "  fill-opacity: 0.8;  ", "}", ".blocklyContextMenu {", "  border-radius: 4px;", "}", ".blocklyDropdownMenu {", "  padding: 0 !important;", "  position: relative !important;", "}", ".blocklyRectangularDropdownMenu .goog-menuitem {", "  height: 100%;", "  padding: 0 !important;", "  border-radius: 5px;", "  margin-bottom: 4px !important;", "}", ".fieldRectangularDropdownBackdrop {", "  fill: #fff;", "  fill-opacity: 0.6;", "}", ".blocklyRectangularDropdownArrow {", "  fill: #7965a1;", "  font-size: 20px !important;", "}", ".blocklyRectangularDropdownMenu .goog-menuitem-highlight, .goog-menuitem-hover {", "  border-color: #7965a1 !important;", "  border-style: dotted !important;", "  border-width: 0px !important;", "  margin: -4px -4px 0 !important;", "  border-width: 4px !important;", "  border-style: solid !important;", "  padding-bottom: 0px !important;", "  padding-top: 0px !important;", "}", ".colored-type-dropdown .goog-menuitem-content {", "  color: #555555;", "  float: left;", "}", ".colored-type-dropdown > .goog-menuitem {", "  padding: 0px 40px 2px 13px;", "}", ".goog-menu {", "  box-shadow: 4px 4px 6px #bbb;", "  border-width: 2px;", "}", ".goog-menuitem {", "  height: 20px;", "  padding-top: 0;", "  padding-bottom: 0;", "}", ".goog-menuitem-highlight,", ".goog-menuitem-hover {", "  border-width: 0;", "  background-color: #57e;", "}", ".goog-menuitem-highlight .goog-menuitem-content {", "  color: #fff;", "}", ".goog-option-selected .goog-menuitem-checkbox:before {", '  content: "\u2713";', "}", ".goog-menuitem-checkbox {", '  background: ""', "}", ".blocklyRectangularDropdownMenu img {", "  -webkit-border-radius: 5px;", "  -moz-border-radius: 5px;", "  border-radius: 5px;", "}", ".blocklyRectangularDropdownMenu {", "  border-radius: 5px;", "  box-shadow: none !important;", "}", ".goog-option-selected .goog-menuitem-checkbox,", ".goog-option-selected .goog-menuitem-icon {", "}", "/* Category tree in Toolbox. */", ".blocklyToolboxDiv {", "  display: none;", "  overflow-x: visible;", "  overflow-y: auto;", "  position: absolute;", "}", ".blocklyTreeRoot {", "  padding: 4px 0;", "}", ".blocklyTreeRoot:focus {", "  outline: none;", "}", ".blocklyTreeRow {", "  line-height: 22px;", "  height: 22px;", "  padding-right: 1em;", "  white-space: nowrap;", "}", '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {', "  padding-right: 0;", "  padding-left: 1em !important;", "}", ".blocklyTreeRow:hover {", "  background-color: #e4e4e4;", "}", ".blocklyTreeIcon {", "  height: 16px;", "  width: 16px;", "  vertical-align: middle;", "  background-image: url(%TREE_PATH%);", "}", ".blocklyTreeIconClosedLtr {", "  background-position: -32px -1px;", "}", ".blocklyTreeIconClosedRtl {", "  background-position: 0px -1px;", "}", ".blocklyTreeIconOpen {", "  background-position: -16px -1px;", "}", ".blocklyTreeIconNone {", "  background-position: -48px -1px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedLtr {", "  background-position: -32px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedRtl {", "  background-position: 0px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconOpen {", "  background-position: -16px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconNone {", "  background-position: -48px -17px;", "}", ".blocklyTreeLabel {", "  cursor: default;", "  font-family: sans-serif;", "  font-size: 16px;", "  padding: 0 3px;", "  vertical-align: middle;", "  -moz-user-select: none;", "  -webkit-user-select: none;", "  -ms-user-select: none;", "  user-select: none;", "}", ".blocklyTreeSelected {", "  background-color: #57e !important;", "}", ".blocklyTreeSelected .blocklyTreeLabel {", "  color: #fff;", "}", ".blocklyArrow {", "  font-size: 80%;", "}", ".paramToolbox {", "  padding: 0 0 5px 0;", "  pointer-events: auto;", "}", ".paramToolbox input, .paramToolbox textarea {", "  box-sizing: border-box;", "  width: 100%;", "  margin: 0;", "  resize: none;", "}", ".paramToolbox input, .paramToolbox button {", "  height: 30px;", "  margin: 0;", "}", ".paramToolbox div {", "  margin: 4px 10px;", "}", "#modalContainer {", "  position: absolute;", "  width: 100%;", "  bottom: 0;", "}", "#modalContainer > svg {", "  position: absolute;", "  top: 0;", "  left: 0;", "  background: transparent;", "  pointer-events: none;", "}", "#modalContainer > svg * {", "  pointer-events: visiblePainted;", "}", "/*", " * Copyright 2007 The Closure Library Authors. All Rights Reserved.", " *", " * Use of this source code is governed by the Apache License, Version 2.0.", " * See the COPYING file for details.", " */", "/* Author: pupius@google.com (Daniel Pupius) */", "/*", " Styles to make the colorpicker look like the old gmail color picker", " NOTE: without CSS scoping this will override styles defined in palette.css", "*/", ".goog-palette {", "  outline: none;", "  cursor: default;", "}", ".goog-palette-table {", "  border: 1px solid #666;", "  border-collapse: collapse;", "}", ".goog-palette-cell {", "  height: 25px;", "  width: 25px;", "  margin: 0;", "  border: 0;", "  text-align: center;", "  vertical-align: middle;", "  border-right: 1px solid #666;", "  font-size: 1px;", "}", ".goog-palette-colorswatch {", "  position: relative;", "  height: 25px;", "  width: 25px;", "  border: 1px solid #666;", "}", ".goog-palette-cell-hover .goog-palette-colorswatch {", "  border: 1px solid #FFF;", "}", ".goog-palette-cell-selected .goog-palette-colorswatch {", "  border: 1px solid #000;", "  color: #fff;", "}", ".goog-menu {", "  background: #fff;", "  border-color: #ccc #666 #666 #ccc;", "  border-style: solid;", "  border-width: 1px;", "  cursor: default;", "  font: normal 13px Arial, sans-serif;", "  margin: 0;", "  outline: none;", "  padding: 4px 0;", "  position: absolute;", "  z-index: 20000;", "}", ".goog-menuitem {", "  color: #000;", "  font: normal 13px Arial, sans-serif;", "  list-style: none;", "  margin: 0;", "  padding: 4px 7em 4px 28px;", "  white-space: nowrap;", "}", ".goog-menuitem.goog-menuitem-rtl {", "  padding-left: 7em;", "  padding-right: 28px;", "}", ".goog-menu-nocheckbox .goog-menuitem,", ".goog-menu-noicon .goog-menuitem {", "  padding-left: 12px;", "}", ".goog-menu-noaccel .goog-menuitem {", "  padding-right: 20px;", "}", ".goog-menuitem-content {", "  color: #000;", "  font-size: 15px;", "}", ".goog-menuitem-disabled .goog-menuitem-accel,", ".goog-menuitem-disabled .goog-menuitem-content {", "  color: #ccc !important;", "}", ".goog-menuitem-disabled .goog-menuitem-icon {", "  opacity: 0.3;", "  -moz-opacity: 0.3;", "  filter: alpha(opacity=30);", "}", ".goog-menuitem-highlight,", ".goog-menuitem-hover {", "  background-color: #d6e9f8;", "  border-color: #d6e9f8;", "  border-style: dotted;", "  border-width: 1px 0;", "  padding-bottom: 3px;", "  padding-top: 3px;", "}", ".goog-menuitem-checkbox,", ".goog-menuitem-icon {", "  background-repeat: no-repeat;", "  height: 16px;", "  left: 6px;", "  position: absolute;", "  right: auto;", "  vertical-align: middle;", "  width: 16px;", "}", ".goog-menuitem-rtl .goog-menuitem-checkbox,", ".goog-menuitem-rtl .goog-menuitem-icon {", "  left: auto;", "  right: 6px;", "}", ".goog-option-selected .goog-menuitem-checkbox,", ".goog-option-selected .goog-menuitem-icon {", "}", ".goog-menuitem-accel {", "  color: #999;", "  direction: ltr;", "  left: auto;", "  padding: 0 6px;", "  position: absolute;", "  right: 0;", "  text-align: right;", "}", ".goog-menuitem-rtl .goog-menuitem-accel {", "  left: 0;", "  right: auto;", "  text-align: left;", "}", ".goog-menuitem-mnemonic-hint {", "  text-decoration: underline;", "}", ".goog-menuitem-mnemonic-separator {", "  color: #999;", "  font-size: 12px;", "  padding-left: 4px;", "}", ".goog-menuseparator {", "  border-top: 1px solid #ccc;", "  margin: 4px 0;", "  padding: 0;", "}", ".goog-flat-menu-button {", "  background-color: #fff;", "  border: 1px solid #c9c9c9;", "  color: #333;", "  cursor: pointer;", "  font: normal 95%;", "  list-style: none;", "  margin: 0 2px;", "  outline: none;", "  padding: 1px 4px;", "  position: relative;", "  text-decoration: none;", "  vertical-align: middle;", "}", ".goog-flat-menu-button-disabled * {", "  border-color: #ccc;", "  color: #999;", "  cursor: default;", "}", ".goog-flat-menu-button-hover {", "  border-color: #9cf #69e #69e #7af !important; /* Hover border wins. */", "}", ".goog-flat-menu-button-active {", "  background-color: #bbb;", "  background-position: bottom left;", "}", ".goog-flat-menu-button-focused {", "  border-color: #bbb;", "}", ".goog-flat-menu-button-caption {", "  padding-right: 10px;", "  vertical-align: top;", "}", ".goog-flat-menu-button-dropdown {", "  /* Client apps may override the URL at which they serve the sprite. */", "  background: url(https://ssl.gstatic.com/editor/editortoolbar.png) no-repeat -388px 0;", "  position: absolute;", "  right: 2px;", "  top: 0;", "  vertical-align: top;", "  width: 7px;", "}", ".goog-inline-block {", "  position: relative;", "  display: -moz-inline-box; /* Ignored by FF3 and later. */", "  display: inline-block;", "}", ""], Blockly.WidgetDiv = {}, Blockly.WidgetDiv.DIV = null, Blockly.WidgetDiv.owner_ = null, Blockly.WidgetDiv.dispose_ = null, Blockly.WidgetDiv.show = function(e, t) {
    Blockly.WidgetDiv.hide(), Blockly.WidgetDiv.owner_ = e, Blockly.WidgetDiv.dispose_ = t, Blockly.WidgetDiv.DIV.style.display = "block"
}, Blockly.WidgetDiv.isVisible = function() {
    return !!Blockly.WidgetDiv.owner_
}, Blockly.WidgetDiv.hide = function() {
    Blockly.WidgetDiv.owner_ && (Blockly.WidgetDiv.DIV.style.display = "none", Blockly.WidgetDiv.dispose_ && Blockly.WidgetDiv.dispose_(), Blockly.WidgetDiv.owner_ = null, Blockly.WidgetDiv.dispose_ = null, goog.dom.removeChildren(Blockly.WidgetDiv.DIV))
}, Blockly.WidgetDiv.hideIfOwner = function(e) {
    Blockly.WidgetDiv.isOwner(e) && Blockly.WidgetDiv.hide()
}, Blockly.WidgetDiv.isOwner = function(e) {
    return Blockly.WidgetDiv.owner_ == e
}, Blockly.WidgetDiv.position = function(e, t, o, n) {
    t < n.y && (t = n.y), Blockly.RTL ? e > o.width + n.x && (e = o.width + n.x) : e < n.x && (e = n.x), Blockly.WidgetDiv.DIV.style.left = e + "px", Blockly.WidgetDiv.DIV.style.top = t + "px"
}, Blockly.FieldCheckbox = function(e, t) {
    Blockly.FieldCheckbox.superClass_.constructor.call(this, ""), this.changeHandler_ = t, this.checkElement_ = Blockly.createSvgElement("text", {
        "class": "blocklyText",
        x: -3
    }, this.fieldGroup_);
    var o = document.createTextNode("\u2713");
    this.checkElement_.appendChild(o), this.setValue(e)
}, goog.inherits(Blockly.FieldCheckbox, Blockly.Field), Blockly.FieldCheckbox.prototype.CURSOR = "default", Blockly.FieldCheckbox.prototype.getValue = function() {
    return String(this.state_).toUpperCase()
}, Blockly.FieldCheckbox.prototype.setValue = function(e) {
    e = "TRUE" == e, this.state_ !== e && (this.state_ = e, this.checkElement_.style.display = e ? "block" : "none", this.sourceBlock_ && this.sourceBlock_.rendered && this.sourceBlock_.blockSpace.fireChangeEvent())
}, Blockly.FieldCheckbox.prototype.showEditor_ = function() {
    var e = !this.state_;
    if (this.changeHandler_) {
        var t = this.changeHandler_(e);
        void 0 !== t && (e = t)
    }
    null !== e && this.setValue(String(e).toUpperCase())
}, Blockly.FieldParameter = function(e) {
    Blockly.FieldParameter.superClass_.constructor.call(this, e, Blockly.FieldParameter.dropdownChange, Blockly.FieldParameter.dropdownCreate)
}, goog.inherits(Blockly.FieldParameter, Blockly.FieldVariable), Blockly.FieldParameter.dropdownCreate = function() {
    for (var e = [Blockly.Msg.RENAME_PARAMETER, Blockly.Msg.DELETE_PARAMETER], t = [], o = 0; o < e.length; o++) t[o] = [e[o], e[o]];
    return t
}, Blockly.FieldParameter.dropdownChange = function(e) {
    var t = this.getText();
    return e === Blockly.Msg.RENAME_PARAMETER ? (this.getParentEditor_().hideChaff(), (e = Blockly.FieldVariable.promptName(Blockly.Msg.RENAME_PARAMETER_TITLE.replace("%1", t), t)) && Blockly.Variables.renameVariable(t, e, this.sourceBlock_.blockSpace)) : e === Blockly.Msg.DELETE_PARAMETER && window.confirm(Blockly.Msg.DELETE_PARAMETER_TITLE.replace("%1", t)) && Blockly.Variables.deleteVariable(t, this.sourceBlock_.blockSpace), null
}, Blockly.inject = function(e, t, o) {
    if (!goog.dom.contains(document, e)) throw "Error: container is not in current document.";
    t && goog.mixin(Blockly, Blockly.parseOptions_(t)), goog.ui.Component.setDefaultRightToLeft(Blockly.RTL), Blockly.Css.inject(e), o && (Blockly.audioPlayer = o, Blockly.registerUISounds_(Blockly.audioPlayer)), Blockly.mainBlockSpaceEditor = new Blockly.BlockSpaceEditor(e), Blockly.mainBlockSpace = Blockly.mainBlockSpaceEditor.blockSpace, Blockly.useModalFunctionEditor ? Blockly.functionEditor = new Blockly.FunctionEditor : Blockly.useContractEditor && (Blockly.functionEditor = new Blockly.ContractEditor({
        disableExamples: t && t.disableExamples
    }), Blockly.contractEditor = Blockly.functionEditor), Blockly.focusedBlockSpace = Blockly.mainBlockSpace
}, Blockly.parseOptions_ = function(e) {
    var t, o, n, i, r, l = !!e.readOnly;
    return l ? (i = n = o = t = !1, r = null) : ((r = e.toolbox) ? ("string" != typeof r && "undefined" == typeof XSLTProcessor && (r = r.outerHTML), "string" == typeof r && (r = Blockly.Xml.textToDom(r)), t = !!r.getElementsByTagName("category").length) : (r = null, t = !1), o = e.trashcan, void 0 === o && (o = t), n = e.collapse, void 0 === n && (n = t), i = e.grayOutUndeletableBlocks, void 0 === i && (i = !1)), e.scrollbars && (e.hasVerticalScrollbars = !0, e.hasHorizontalScrollbars = !0), {
        RTL: !!e.rtl,
        collapse: n,
        readOnly: l,
        maxBlocks: e.maxBlocks || 1 / 0,
        assetUrl: e.assetUrl || function(e) {
            return "./" + e
        },
        hasCategories: t,
        hasHorizontalScrollbars: e.hasHorizontalScrollbars,
        hasVerticalScrollbars: e.hasVerticalScrollbars,
        customSimpleDialog: e.customSimpleDialog,
        hasTrashcan: o,
        varsInGlobals: e.varsInGlobals || !1,
        languageTree: r,
        disableParamEditing: e.disableParamEditing || !1,
        disableVariableEditing: e.disableVariableEditing || !1,
        useModalFunctionEditor: e.useModalFunctionEditor || !1,
        useContractEditor: e.useContractEditor || !1,
        disableExamples: e.disableExamples || !1,
        defaultNumExampleBlocks: e.defaultNumExampleBlocks || 0,
        grayOutUndeletableBlocks: i,
        editBlocks: e.editBlocks || !1,
        showExampleTestButtons: e.showExampleTestButtons || !1
    }
}, Blockly.registerUISounds_ = function(e) {
    e.register({
        id: "click",
        mp3: Blockly.assetUrl("media/click.mp3"),
        wav: Blockly.assetUrl("media/click.wav"),
        ogg: Blockly.assetUrl("media/click.ogg")
    }), e.register({
        id: "delete",
        mp3: Blockly.assetUrl("media/delete.mp3"),
        wav: Blockly.assetUrl("media/delete.wav"),
        ogg: Blockly.assetUrl("media/delete.ogg")
    })
}, Blockly.FieldAngle = function(e, t) {
    var o;
    if (t) {
        var n = this;
        o = function(e) {
            return e = Blockly.FieldAngle.angleValidator.call(n, e), null !== e && t.call(n, e), e
        }
    } else o = Blockly.FieldAngle.angleValidator;
    this.symbol_ = Blockly.createSvgElement("tspan", {}, null), this.symbol_.appendChild(document.createTextNode("\xb0")), Blockly.FieldAngle.superClass_.constructor.call(this, e, o)
}, goog.inherits(Blockly.FieldAngle, Blockly.FieldTextInput), Blockly.FieldAngle.HALF = 50, Blockly.FieldAngle.RADIUS = Blockly.FieldAngle.HALF - 1, Blockly.FieldAngle.prototype.dispose_ = function() {
    var e = this;
    return function() {
        Blockly.FieldAngle.superClass_.dispose_.call(e)(), e.gauge_ = null, e.clickWrapper_ && Blockly.unbindEvent_(e.clickWrapper_), e.moveWrapper1_ && Blockly.unbindEvent_(e.moveWrapper1_), e.moveWrapper2_ && Blockly.unbindEvent_(e.moveWrapper2_)
    }
}, Blockly.FieldAngle.prototype.showEditor_ = function() {
    Blockly.FieldAngle.superClass_.showEditor_.call(this);
    var e = Blockly.WidgetDiv.DIV;
    if (e.firstChild) {
        var e = Blockly.createSvgElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:html": "http://www.w3.org/1999/xhtml",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                version: "1.1",
                height: 2 * Blockly.FieldAngle.HALF + "px",
                width: 2 * Blockly.FieldAngle.HALF + "px"
            }, e),
            t = Blockly.createSvgElement("circle", {
                cx: Blockly.FieldAngle.HALF,
                cy: Blockly.FieldAngle.HALF,
                r: Blockly.FieldAngle.RADIUS,
                "class": "blocklyAngleCircle"
            }, e);
        this.gauge_ = Blockly.createSvgElement("path", {
            "class": "blocklyAngleGuage"
        }, e);
        for (var o = 0; 360 > o; o += 15) Blockly.createSvgElement("line", {
            x1: Blockly.FieldAngle.HALF + Blockly.FieldAngle.RADIUS,
            y1: Blockly.FieldAngle.HALF,
            x2: Blockly.FieldAngle.HALF + Blockly.FieldAngle.RADIUS - (0 == o % 45 ? 10 : 5),
            y2: Blockly.FieldAngle.HALF,
            "class": "blocklyAngleMarks",
            transform: "rotate(" + o + ", " + Blockly.FieldAngle.HALF + ", " + Blockly.FieldAngle.HALF + ")"
        }, e);
        e.style.marginLeft = "-35px", this.clickWrapper_ = Blockly.bindEvent_(e, "click", this, Blockly.WidgetDiv.hide), this.moveWrapper1_ = Blockly.bindEvent_(t, "mousemove", this, this.onMouseMove), this.moveWrapper2_ = Blockly.bindEvent_(this.gauge_, "mousemove", this, this.onMouseMove), this.updateGraph()
    }
}, Blockly.FieldAngle.prototype.onMouseMove = function(e) {
    var t = this.gauge_.ownerSVGElement.getBoundingClientRect(),
        o = e.clientX - t.left - Blockly.FieldAngle.HALF;
    e = e.clientY - t.top - Blockly.FieldAngle.HALF, t = Math.atan(-e / o), isNaN(t) || (t = 180 * (t / Math.PI), 0 > o ? t += 180 : e > 0 && (t += 360), t = String(Math.round(t)), Blockly.FieldTextInput.htmlInput_.value = t, this.setText(t))
}, Blockly.FieldAngle.prototype.setText = function(e) {
    Blockly.FieldAngle.superClass_.setText.call(this, e), this.updateGraph(), Blockly.RTL ? this.textElement_.insertBefore(this.symbol_, this.textElement_.firstChild) : this.textElement_.appendChild(this.symbol_), this.size_.width = 0
}, Blockly.FieldAngle.prototype.updateGraph = function() {
    if (this.gauge_) {
        var e = Number(this.getText()) / 180 * Math.PI;
        if (isNaN(e)) this.gauge_.setAttribute("d", "M " + Blockly.FieldAngle.HALF + ", " + Blockly.FieldAngle.HALF);
        else {
            var t = Blockly.FieldAngle.HALF + Math.cos(e) * Blockly.FieldAngle.RADIUS,
                o = Blockly.FieldAngle.HALF + Math.sin(e) * -Blockly.FieldAngle.RADIUS;
            this.gauge_.setAttribute("d", "M " + Blockly.FieldAngle.HALF + ", " + Blockly.FieldAngle.HALF + " h " + Blockly.FieldAngle.RADIUS + " A " + Blockly.FieldAngle.RADIUS + "," + Blockly.FieldAngle.RADIUS + " 0 " + (e > Math.PI ? 1 : 0) + " 0 " + t + "," + o + " z")
        }
    }
}, Blockly.FieldAngle.angleValidator = function(e) {
    return e = Blockly.FieldTextInput.numberValidator(e), null !== e && (e %= 360, 0 > e && (e += 360), e = String(e)), e
}, Blockly.assetUrl = void 0, Blockly.SVG_NS = "http://www.w3.org/2000/svg", Blockly.HTML_NS = "http://www.w3.org/1999/xhtml", Blockly.HSV_SATURATION = .45, Blockly.HSV_VALUE = .65, Blockly.makeColour = function(e, t, o) {
    return goog.color.hsvToHex(e, t, 256 * o)
}, Blockly.INPUT_VALUE = 1, Blockly.OUTPUT_VALUE = 2, Blockly.NEXT_STATEMENT = 3, Blockly.PREVIOUS_STATEMENT = 4, Blockly.DUMMY_INPUT = 5, Blockly.FUNCTIONAL_INPUT = 6, Blockly.FUNCTIONAL_OUTPUT = 7, Blockly.ALIGN_LEFT = -1, Blockly.ALIGN_CENTRE = 0, Blockly.ALIGN_RIGHT = 1, Blockly.OPPOSITE_TYPE = [], Blockly.OPPOSITE_TYPE[Blockly.INPUT_VALUE] = Blockly.OUTPUT_VALUE, Blockly.OPPOSITE_TYPE[Blockly.OUTPUT_VALUE] = Blockly.INPUT_VALUE, Blockly.OPPOSITE_TYPE[Blockly.NEXT_STATEMENT] = Blockly.PREVIOUS_STATEMENT, Blockly.OPPOSITE_TYPE[Blockly.PREVIOUS_STATEMENT] = Blockly.NEXT_STATEMENT, Blockly.OPPOSITE_TYPE[Blockly.FUNCTIONAL_INPUT] = Blockly.FUNCTIONAL_OUTPUT, Blockly.OPPOSITE_TYPE[Blockly.FUNCTIONAL_OUTPUT] = Blockly.FUNCTIONAL_INPUT, Blockly.selected = null, Blockly.readOnly = !1, Blockly.highlightedConnection_ = null, Blockly.localConnection_ = null, Blockly.DRAG_RADIUS = 5, Blockly.SNAP_RADIUS = 15, Blockly.BUMP_UNCONNECTED = !0, Blockly.BUMP_DELAY = 250, Blockly.COLLAPSE_CHARS = 30, Blockly.mainBlockSpace = null, Blockly.mainBlockSpaceEditor = null, Blockly.clipboard_ = null, Blockly.playAudio = function(e) {
    Blockly.audioPlayer && Blockly.audioPlayer.play(e)
}, Blockly.removeAllRanges = function() {
    function e() {
        try {
            window.getSelection().removeAllRanges()
        } catch (e) {}
    }
    if (window.getSelection) {
        var t = window.getSelection();
        t && t.removeAllRanges && (e(), window.setTimeout(function() {
            e()
        }, 0))
    }
}, Blockly.Blocks.colour = {}, Blockly.Blocks.colour_picker = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.COLOUR_PICKER_HELPURL), this.setHSV(196, 1, .79), this.appendDummyInput().appendTitle(new Blockly.FieldColour("#ff0000"), "COLOUR"), this.setOutput(!0, Blockly.BlockValueType.COLOUR), this.setTooltip(Blockly.Msg.COLOUR_PICKER_TOOLTIP)
    }
}, Blockly.Blocks.colour_random = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.COLOUR_RANDOM_HELPURL), this.setHSV(196, 1, .79), this.appendDummyInput().appendTitle(Blockly.Msg.COLOUR_RANDOM_TITLE), this.setOutput(!0, Blockly.BlockValueType.COLOUR), this.setTooltip(Blockly.Msg.COLOUR_RANDOM_TOOLTIP)
    }
}, Blockly.Blocks.colour_rgb = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.COLOUR_RGB_HELPURL), this.setHSV(196, 1, .79), this.appendValueInput("RED").setCheck(Blockly.BlockValueType.NUMBER).setAlign(Blockly.ALIGN_RIGHT).appendTitle(Blockly.Msg.COLOUR_RGB_TITLE).appendTitle(Blockly.Msg.COLOUR_RGB_RED), this.appendValueInput("GREEN").setCheck(Blockly.BlockValueType.NUMBER).setAlign(Blockly.ALIGN_RIGHT).appendTitle(Blockly.Msg.COLOUR_RGB_GREEN), this.appendValueInput("BLUE").setCheck(Blockly.BlockValueType.NUMBER).setAlign(Blockly.ALIGN_RIGHT).appendTitle(Blockly.Msg.COLOUR_RGB_BLUE), this.setOutput(!0, Blockly.BlockValueType.COLOUR), this.setTooltip(Blockly.Msg.COLOUR_RGB_TOOLTIP)
    }
}, Blockly.Blocks.colour_blend = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.COLOUR_BLEND_HELPURL), this.setHSV(42, .89, .99), this.appendValueInput("COLOUR1").setCheck(Blockly.BlockValueType.COLOUR).setAlign(Blockly.ALIGN_RIGHT).appendTitle(Blockly.Msg.COLOUR_BLEND_TITLE).appendTitle(Blockly.Msg.COLOUR_BLEND_COLOUR1), this.appendValueInput("COLOUR2").setCheck(Blockly.BlockValueType.COLOUR).setAlign(Blockly.ALIGN_RIGHT).appendTitle(Blockly.Msg.COLOUR_BLEND_COLOUR2), this.appendValueInput("RATIO").setCheck(Blockly.BlockValueType.NUMBER).setAlign(Blockly.ALIGN_RIGHT).appendTitle(Blockly.Msg.COLOUR_BLEND_RATIO), this.setOutput(!0, Blockly.BlockValueType.COLOUR), this.setTooltip(Blockly.Msg.COLOUR_BLEND_TOOLTIP)
    }
}, Blockly.Blocks.lists = {}, Blockly.Blocks.lists_create_empty = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.LISTS_CREATE_EMPTY_HELPURL), this.setHSV(40, 1, .99), this.setOutput(!0, Blockly.BlockValueType.ARRAY), this.appendDummyInput().appendTitle(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE), this.setTooltip(Blockly.Msg.LISTS_CREATE_EMPTY_TOOLTIP)
    }
}, Blockly.Blocks.lists_create_with = {
    init: function() {
        this.setHSV(40, 1, .99), this.appendValueInput("ADD0").appendTitle(Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH), this.appendValueInput("ADD1"), this.appendValueInput("ADD2"), this.setOutput(!0, Blockly.BlockValueType.ARRAY), this.setMutator(new Blockly.Mutator(["lists_create_with_item"])), this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP), this.itemCount_ = 3
    },
    mutationToDom: function(e) {
        return e = document.createElement("mutation"), e.setAttribute("items", this.itemCount_), e
    },
    domToMutation: function(e) {
        for (var t = 0; t < this.itemCount_; t++) this.removeInput("ADD" + t);
        for (this.itemCount_ = window.parseInt(e.getAttribute("items"), 10), t = 0; t < this.itemCount_; t++) e = this.appendValueInput("ADD" + t), 0 == t && e.appendTitle(Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH);
        0 == this.itemCount_ && this.appendDummyInput("EMPTY").appendTitle(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE)
    },
    decompose: function(e) {
        var t = new Blockly.Block(e, "lists_create_with_container");
        t.initSvg();
        for (var o = t.getInput("STACK").connection, n = 0; n < this.itemCount_; n++) {
            var i = new Blockly.Block(e, "lists_create_with_item");
            i.initSvg(), o.connect(i.previousConnection), o = i.nextConnection
        }
        return t
    },
    compose: function(e) {
        if (0 == this.itemCount_) this.removeInput("EMPTY");
        else
            for (var t = this.itemCount_ - 1; t >= 0; t--) this.removeInput("ADD" + t);
        for (this.itemCount_ = 0, e = e.getInputTargetBlock("STACK"); e;) t = this.appendValueInput("ADD" + this.itemCount_), 0 == this.itemCount_ && t.appendTitle(Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH), e.valueConnection_ && t.connection.connect(e.valueConnection_), this.itemCount_++, e = e.nextConnection && e.nextConnection.targetBlock();
        0 == this.itemCount_ && this.appendDummyInput("EMPTY").appendTitle(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE)
    },
    saveConnections: function(e) {
        e = e.getInputTargetBlock("STACK");
        for (var t = 0; e;) {
            var o = this.getInput("ADD" + t);
            e.valueConnection_ = o && o.connection.targetConnection, t++, e = e.nextConnection && e.nextConnection.targetBlock()
        }
    }
}, Blockly.Blocks.lists_create_with_container = {
    init: function() {
        this.setHSV(40, 1, .99), this.appendDummyInput().appendTitle(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD), this.appendStatementInput("STACK"), this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP), this.contextMenu = !1
    }
}, Blockly.Blocks.lists_create_with_item = {
    init: function() {
        this.setHSV(40, 1, .99), this.appendDummyInput().appendTitle(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP), this.contextMenu = !1
    }
}, Blockly.Blocks.lists_repeat = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.LISTS_REPEAT_HELPURL), this.setHSV(40, 1, .99), this.setOutput(!0, Blockly.BlockValueType.ARRAY), this.interpolateMsg(Blockly.Msg.LISTS_REPEAT_TITLE, ["ITEM", null, Blockly.ALIGN_RIGHT], ["NUM", "Number", Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT), this.setTooltip(Blockly.Msg.LISTS_REPEAT_TOOLTIP)
    }
}, Blockly.Blocks.lists_length = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.LISTS_LENGTH_HELPURL), this.setHSV(40, 1, .99), this.appendValueInput("VALUE").setCheck([Blockly.BlockValueType.ARRAY, Blockly.BlockValueType.STRING]).appendTitle(Blockly.Msg.LISTS_LENGTH_INPUT_LENGTH), this.setOutput(!0, Blockly.BlockValueType.NUMBER), this.setTooltip(Blockly.Msg.LISTS_LENGTH_TOOLTIP)
    }
}, Blockly.Blocks.lists_isEmpty = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.LISTS_IS_EMPTY_HELPURL), this.setHSV(40, 1, .99), this.interpolateMsg(Blockly.Msg.LISTS_IS_EMPTY_TITLE, ["VALUE", ["Array", "String"], Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT), this.setInputsInline(!0), this.setOutput(!0, Blockly.BlockValueType.BOOLEAN), this.setTooltip(Blockly.Msg.LISTS_TOOLTIP)
    }
}, Blockly.Blocks.lists_indexOf = {
    init: function() {
        var e = [
            [Blockly.Msg.LISTS_INDEX_OF_FIRST, "FIRST"],
            [Blockly.Msg.LISTS_INDEX_OF_LAST, "LAST"]
        ];
        this.setHelpUrl(Blockly.Msg.LISTS_INDEX_OF_HELPURL), this.setHSV(40, 1, .99), this.setOutput(!0, Blockly.BlockValueType.NUMBER), this.appendValueInput("VALUE").setCheck(Blockly.BlockValueType.ARRAY).appendTitle(Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST), this.appendValueInput("FIND").appendTitle(new Blockly.FieldDropdown(e), "END"), this.setInputsInline(!0), this.setTooltip(Blockly.Msg.LISTS_INDEX_OF_TOOLTIP)
    }
}, Blockly.Blocks.lists_getIndex = {
    init: function() {
        var e = [
            [Blockly.Msg.LISTS_GET_INDEX_GET, "GET"],
            [Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE, "GET_REMOVE"],
            [Blockly.Msg.LISTS_GET_INDEX_REMOVE, "REMOVE"]
        ];
        this.WHERE_OPTIONS = [
            [Blockly.Msg.LISTS_GET_INDEX_FROM_START, "FROM_START"],
            [Blockly.Msg.LISTS_GET_INDEX_FROM_END, "FROM_END"],
            [Blockly.Msg.LISTS_GET_INDEX_FIRST, "FIRST"],
            [Blockly.Msg.LISTS_GET_INDEX_LAST, "LAST"],
            [Blockly.Msg.LISTS_GET_INDEX_RANDOM, "RANDOM"]
        ], this.setHelpUrl(Blockly.Msg.LISTS_GET_INDEX_HELPURL), this.setHSV(40, 1, .99), e = new Blockly.FieldDropdown(e, function(e) {
            this.sourceBlock_.updateStatement("REMOVE" == e)
        }), this.appendValueInput("VALUE").setCheck(Blockly.BlockValueType.ARRAY).appendTitle(Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST), this.appendDummyInput().appendTitle(e, "MODE").appendTitle("", "SPACE"), this.appendDummyInput("AT"), Blockly.Msg.LISTS_GET_INDEX_TAIL && this.appendDummyInput("TAIL").appendTitle(Blockly.Msg.LISTS_GET_INDEX_TAIL), this.setInputsInline(!0), this.setOutput(!0), this.updateAt(!0);
        var t = this;
        this.setTooltip(function() {
            var e = t.getTitleValue("MODE") + "_" + t.getTitleValue("WHERE");
            return Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_" + e]
        })
    },
    mutationToDom: function() {
        var e = document.createElement("mutation");
        e.setAttribute("statement", !this.outputConnection);
        var t = this.getInput("AT").type == Blockly.INPUT_VALUE;
        return e.setAttribute("at", t), e
    },
    domToMutation: function(e) {
        var t = "true" == e.getAttribute("statement");
        this.updateStatement(t), e = "false" != e.getAttribute("at"), this.updateAt(e)
    },
    updateStatement: function(e) {
        e != !this.outputConnection && (this.unplug(!0, !0), e ? (this.setOutput(!1), this.setPreviousStatement(!0), this.setNextStatement(!0)) : (this.setPreviousStatement(!1), this.setNextStatement(!1), this.setOutput(!0)))
    },
    updateAt: function(e) {
        this.removeInput("AT"), this.removeInput("ORDINAL", !0), e ? (this.appendValueInput("AT").setCheck(Blockly.BlockValueType.NUMBER), Blockly.Msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL").appendTitle(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) : this.appendDummyInput("AT");
        var t = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function(t) {
            var o = "FROM_START" == t || "FROM_END" == t;
            if (o != e) {
                var n = this.sourceBlock_;
                return n.updateAt(o), n.setTitleValue(t, "WHERE"), null
            }
        });
        this.getInput("AT").appendTitle(t, "WHERE"), Blockly.Msg.LISTS_GET_INDEX_TAIL && this.moveInputBefore("TAIL", null)
    }
}, Blockly.Blocks.lists_setIndex = {
    init: function() {
        var e = [
            [Blockly.Msg.LISTS_SET_INDEX_SET, "SET"],
            [Blockly.Msg.LISTS_SET_INDEX_INSERT, "INSERT"]
        ];
        this.WHERE_OPTIONS = [
            [Blockly.Msg.LISTS_GET_INDEX_FROM_START, "FROM_START"],
            [Blockly.Msg.LISTS_GET_INDEX_FROM_END, "FROM_END"],
            [Blockly.Msg.LISTS_GET_INDEX_FIRST, "FIRST"],
            [Blockly.Msg.LISTS_GET_INDEX_LAST, "LAST"],
            [Blockly.Msg.LISTS_GET_INDEX_RANDOM, "RANDOM"]
        ], this.setHelpUrl(Blockly.Msg.LISTS_SET_INDEX_HELPURL), this.setHSV(40, 1, .99), this.appendValueInput("LIST").setCheck(Blockly.BlockValueType.ARRAY).appendTitle(Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST), this.appendDummyInput().appendTitle(new Blockly.FieldDropdown(e), "MODE").appendTitle("", "SPACE"), this.appendDummyInput("AT"), this.appendValueInput("TO").appendTitle(Blockly.Msg.LISTS_SET_INDEX_INPUT_TO), this.setInputsInline(!0), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setTooltip(Blockly.Msg.LISTS_SET_INDEX_TOOLTIP), this.updateAt(!0);
        var t = this;
        this.setTooltip(function() {
            var e = t.getTitleValue("MODE") + "_" + t.getTitleValue("WHERE");
            return Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_" + e]
        })
    },
    mutationToDom: function() {
        var e = document.createElement("mutation"),
            t = this.getInput("AT").type == Blockly.INPUT_VALUE;
        return e.setAttribute("at", t), e
    },
    domToMutation: function(e) {
        e = "false" != e.getAttribute("at"), this.updateAt(e)
    },
    updateAt: function(e) {
        this.removeInput("AT"), this.removeInput("ORDINAL", !0), e ? (this.appendValueInput("AT").setCheck(Blockly.BlockValueType.NUMBER), Blockly.Msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL").appendTitle(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) : this.appendDummyInput("AT");
        var t = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function(t) {
            var o = "FROM_START" == t || "FROM_END" == t;
            if (o != e) {
                var n = this.sourceBlock_;
                return n.updateAt(o), n.setTitleValue(t, "WHERE"), null
            }
        });
        this.moveInputBefore("AT", "TO"), this.getInput("ORDINAL") && this.moveInputBefore("ORDINAL", "TO"), this.getInput("AT").appendTitle(t, "WHERE")
    }
}, Blockly.Blocks.lists_getSublist = {
    init: function() {
        this.WHERE_OPTIONS_1 = [
            [Blockly.Msg.LISTS_GET_INDEX_FROM_START, "FROM_START"],
            [Blockly.Msg.LISTS_GET_INDEX_FROM_END, "FROM_END"],
            [Blockly.Msg.LISTS_GET_INDEX_FIRST, "FIRST"]
        ], this.WHERE_OPTIONS_2 = [
            [Blockly.Msg.LISTS_GET_INDEX_FROM_START, "FROM_START"],
            [Blockly.Msg.LISTS_GET_INDEX_FROM_END, "FROM_END"],
            [Blockly.Msg.LISTS_GET_INDEX_LAST, "LAST"]
        ], this.setHelpUrl(Blockly.Msg.LISTS_GET_SUBLIST_HELPURL), this.setHSV(40, 1, .99), this.appendValueInput("LIST").setCheck(Blockly.BlockValueType.ARRAY).appendTitle(Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST), this.appendDummyInput("AT1"), this.appendDummyInput("AT2"), Blockly.Msg.LISTS_GET_SUBLIST_TAIL && this.appendDummyInput("TAIL").appendTitle(Blockly.Msg.LISTS_GET_SUBLIST_TAIL), this.setInputsInline(!0), this.setOutput(!0, Blockly.BlockValueType.ARRAY), this.updateAt(1, !0), this.updateAt(2, !0), this.setTooltip(Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP)
    },
    mutationToDom: function() {
        var e = document.createElement("mutation"),
            t = this.getInput("AT1").type == Blockly.INPUT_VALUE;
        return e.setAttribute("at1", t), t = this.getInput("AT2").type == Blockly.INPUT_VALUE, e.setAttribute("at2", t), e
    },
    domToMutation: function(e) {
        var t = "true" == e.getAttribute("at1");
        e = "true" == e.getAttribute("at2"), this.updateAt(1, t), this.updateAt(2, e)
    },
    updateAt: function(e, t) {
        this.removeInput("AT" + e), this.removeInput("ORDINAL" + e, !0), t ? (this.appendValueInput("AT" + e).setCheck(Blockly.BlockValueType.NUMBER), Blockly.Msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL" + e).appendTitle(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) : this.appendDummyInput("AT" + e);
        var o = new Blockly.FieldDropdown(this["WHERE_OPTIONS_" + e], function(o) {
            var n = "FROM_START" == o || "FROM_END" == o;
            if (n != t) {
                var i = this.sourceBlock_;
                return i.updateAt(e, n), i.setTitleValue(o, "WHERE" + e), null
            }
        });
        this.getInput("AT" + e).appendTitle(o, "WHERE" + e), 1 == e && (this.moveInputBefore("AT1", "AT2"), this.getInput("ORDINAL1") && this.moveInputBefore("ORDINAL1", "AT2")), Blockly.Msg.LISTS_GET_SUBLIST_TAIL && this.moveInputBefore("TAIL", null)
    }
}, Blockly.Blocks.logic = {}, Blockly.Blocks.controls_if = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL), this.setColour(210), this.appendValueInput("IF0").setCheck(Blockly.BlockValueType.BOOLEAN).appendTitle(Blockly.Msg.CONTROLS_IF_MSG_IF), this.appendStatementInput("DO0").appendTitle(Blockly.Msg.CONTROLS_IF_MSG_THEN), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setMutator(new Blockly.Mutator(["controls_if_elseif", "controls_if_else"]));
        var e = this;
        this.setTooltip(function() {
            return e.elseifCount_ || e.elseCount_ ? !e.elseifCount_ && e.elseCount_ ? Blockly.Msg.CONTROLS_IF_TOOLTIP_2 : e.elseifCount_ && !e.elseCount_ ? Blockly.Msg.CONTROLS_IF_TOOLTIP_3 : e.elseifCount_ && e.elseCount_ ? Blockly.Msg.CONTROLS_IF_TOOLTIP_4 : "" : Blockly.Msg.CONTROLS_IF_TOOLTIP_1
        }), this.elseCount_ = this.elseifCount_ = 0
    },
    mutationToDom: function() {
        if (!this.elseifCount_ && !this.elseCount_) return null;
        var e = document.createElement("mutation");
        return this.elseifCount_ && e.setAttribute("elseif", this.elseifCount_), this.elseCount_ && e.setAttribute("else", 1), e
    },
    domToMutation: function(e) {
        for (this.elseifCount_ = window.parseInt(e.getAttribute("elseif"), 10), this.elseCount_ = window.parseInt(e.getAttribute("else"), 10), e = 1; e <= this.elseifCount_; e++) this.appendValueInput("IF" + e).setCheck(Blockly.BlockValueType.BOOLEAN).appendTitle(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF), this.appendStatementInput("DO" + e).appendTitle(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.elseCount_ && this.appendStatementInput("ELSE").appendTitle(Blockly.Msg.CONTROLS_IF_MSG_ELSE)
    },
    decompose: function(e) {
        var t = new Blockly.Block(e, "controls_if_if");
        t.initSvg();
        for (var o = t.getInput("STACK").connection, n = 1; n <= this.elseifCount_; n++) {
            var i = new Blockly.Block(e, "controls_if_elseif");
            i.initSvg(), o.connect(i.previousConnection), o = i.nextConnection
        }
        return this.elseCount_ && (e = new Blockly.Block(e, "controls_if_else"), e.initSvg(), o.connect(e.previousConnection)), t
    },
    compose: function(e) {
        this.elseCount_ && this.removeInput("ELSE"), this.elseCount_ = 0;
        for (var t = this.elseifCount_; t > 0; t--) this.removeInput("IF" + t), this.removeInput("DO" + t);
        for (this.elseifCount_ = 0, e = e.getInputTargetBlock("STACK"); e;) {
            switch (e.type) {
                case "controls_if_elseif":
                    this.elseifCount_++;
                    var t = this.appendValueInput("IF" + this.elseifCount_).setCheck(Blockly.BlockValueType.BOOLEAN).appendTitle(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF),
                        o = this.appendStatementInput("DO" + this.elseifCount_);
                    o.appendTitle(Blockly.Msg.CONTROLS_IF_MSG_THEN), e.valueConnection_ && t.connection.connect(e.valueConnection_), e.statementConnection_ && o.connection.connect(e.statementConnection_);
                    break;
                case "controls_if_else":
                    this.elseCount_++, t = this.appendStatementInput("ELSE"), t.appendTitle(Blockly.Msg.CONTROLS_IF_MSG_ELSE), e.statementConnection_ && t.connection.connect(e.statementConnection_);
                    break;
                default:
                    throw "Unknown block type."
            }
            e = e.nextConnection && e.nextConnection.targetBlock()
        }
    },
    saveConnections: function(e) {
        e = e.getInputTargetBlock("STACK");
        for (var t = 1; e;) {
            switch (e.type) {
                case "controls_if_elseif":
                    var o = this.getInput("IF" + t),
                        n = this.getInput("DO" + t);
                    e.valueConnection_ = o && o.connection.targetConnection, e.statementConnection_ = n && n.connection.targetConnection, t++;
                    break;
                case "controls_if_else":
                    n = this.getInput("ELSE"), e.statementConnection_ = n && n.connection.targetConnection;
                    break;
                default:
                    throw "Unknown block type."
            }
            e = e.nextConnection && e.nextConnection.targetBlock()
        }
    }
}, Blockly.Blocks.controls_if_if = {
    init: function() {
        this.setHSV(196, 1, .79), this.appendDummyInput().appendTitle(Blockly.Msg.CONTROLS_IF_IF_TITLE_IF), this.appendStatementInput("STACK"), this.setTooltip(Blockly.Msg.CONTROLS_IF_IF_TOOLTIP), this.contextMenu = !1
    }
}, Blockly.Blocks.controls_if_elseif = {
    init: function() {
        this.setHSV(196, 1, .79), this.appendDummyInput().appendTitle(Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP), this.contextMenu = !1
    }
}, Blockly.Blocks.controls_if_else = {
    init: function() {
        this.setHSV(196, 1, .79), this.appendDummyInput().appendTitle(Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE), this.setPreviousStatement(!0), this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP), this.contextMenu = !1
    }
}, Blockly.Blocks.logic_compare = {
    init: function() {
        var e = Blockly.RTL ? [
            ["=", "EQ"],
            ["\u2260", "NEQ"],
            [">", "LT"],
            ["\u2265", "LTE"],
            ["<", "GT"],
            ["\u2264", "GTE"]
        ] : [
            ["=", "EQ"],
            ["\u2260", "NEQ"],
            ["<", "LT"],
            ["\u2264", "LTE"],
            [">", "GT"],
            ["\u2265", "GTE"]
        ];
        this.setHelpUrl(Blockly.Msg.LOGIC_COMPARE_HELPURL), this.setHSV(196, 1, .79), this.setOutput(!0, Blockly.BlockValueType.BOOLEAN), this.appendValueInput("A"), this.appendValueInput("B").appendTitle(new Blockly.FieldDropdown(e), "OP"), this.setInputsInline(!0);
        var t = this;
        this.setTooltip(function() {
            var e = t.getTitleValue("OP");
            return {
                EQ: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ,
                NEQ: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ,
                LT: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT,
                LTE: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE,
                GT: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT,
                GTE: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE
            }[e]
        })
    }
}, Blockly.Blocks.logic_operation = {
    init: function() {
        var e = [
            [Blockly.Msg.LOGIC_OPERATION_AND, "AND"],
            [Blockly.Msg.LOGIC_OPERATION_OR, "OR"]
        ];
        this.setHelpUrl(Blockly.Msg.LOGIC_OPERATION_HELPURL), this.setHSV(196, 1, .79), this.setOutput(!0, Blockly.BlockValueType.BOOLEAN), this.appendValueInput("A").setCheck(Blockly.BlockValueType.BOOLEAN), this.appendValueInput("B").setCheck(Blockly.BlockValueType.BOOLEAN).appendTitle(new Blockly.FieldDropdown(e), "OP"), this.setInputsInline(!0);
        var t = this;
        this.setTooltip(function() {
            var e = t.getTitleValue("OP");
            return t.TOOLTIPS[e]
        })
    }
}, Blockly.Blocks.logic_negate = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.LOGIC_NEGATE_HELPURL), this.setHSV(196, 1, .79), this.setOutput(!0, Blockly.BlockValueType.BOOLEAN), this.interpolateMsg(Blockly.Msg.LOGIC_NEGATE_TITLE, ["BOOL", Blockly.BlockValueType.BOOLEAN, Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT), this.setTooltip(Blockly.Msg.LOGIC_NEGATE_TOOLTIP)
    }
}, Blockly.Blocks.logic_boolean = {
    init: function() {
        var e = [
            [Blockly.Msg.LOGIC_BOOLEAN_TRUE, "TRUE"],
            [Blockly.Msg.LOGIC_BOOLEAN_FALSE, "FALSE"]
        ];
        this.setHelpUrl(Blockly.Msg.LOGIC_BOOLEAN_HELPURL), this.setHSV(196, 1, .79), this.setOutput(!0, Blockly.BlockValueType.BOOLEAN), this.appendDummyInput().appendTitle(new Blockly.FieldDropdown(e), "BOOL"), this.setTooltip(Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP)
    }
}, Blockly.Blocks.logic_null = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.LOGIC_NULL_HELPURL), this.setHSV(196, 1, .79), this.setOutput(!0), this.appendDummyInput().appendTitle(Blockly.Msg.LOGIC_NULL), this.setTooltip(Blockly.Msg.LOGIC_NULL_TOOLTIP)
    }
}, Blockly.Blocks.logic_ternary = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.LOGIC_TERNARY_HELPURL), this.setHSV(196, 1, .79), this.appendValueInput("IF").setCheck(Blockly.BlockValueType.BOOLEAN).appendTitle(Blockly.Msg.LOGIC_TERNARY_CONDITION), this.appendValueInput("THEN").appendTitle(Blockly.Msg.LOGIC_TERNARY_IF_TRUE), this.appendValueInput("ELSE").appendTitle(Blockly.Msg.LOGIC_TERNARY_IF_FALSE), this.setOutput(!0), this.setTooltip(Blockly.Msg.LOGIC_TERNARY_TOOLTIP)
    }
}, Blockly.Blocks.loops = {}, Blockly.Blocks.controls_repeat = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.CONTROLS_REPEAT_HELPURL), this.setHSV(322, .9, .95), this.appendDummyInput().appendTitle(Blockly.Msg.CONTROLS_REPEAT_TITLE_REPEAT).appendTitle(new Blockly.FieldTextInput("10", Blockly.FieldTextInput.nonnegativeIntegerValidator), "TIMES").appendTitle(Blockly.Msg.CONTROLS_REPEAT_TITLE_TIMES), this.appendStatementInput("DO").appendTitle(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setTooltip(Blockly.Msg.CONTROLS_REPEAT_TOOLTIP)
    }
}, Blockly.Blocks.controls_repeat_ext = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.CONTROLS_REPEAT_HELPURL), this.setHSV(322, .9, .95), this.interpolateMsg(Blockly.Msg.CONTROLS_REPEAT_TITLE, ["TIMES", "Number", Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT), this.appendStatementInput("DO").appendTitle(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setInputsInline(!0), this.setTooltip(Blockly.Msg.CONTROLS_REPEAT_TOOLTIP)
    }
}, Blockly.Blocks.controls_whileUntil = {
    init: function() {
        var e = [
            [Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE, "WHILE"],
            [Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL, "UNTIL"]
        ];
        this.setHelpUrl(Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL), this.setHSV(322, .9, .95), this.appendValueInput("BOOL").setCheck(Blockly.BlockValueType.BOOLEAN).appendTitle(new Blockly.FieldDropdown(e), "MODE"), this.appendStatementInput("DO").appendTitle(Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO), this.setPreviousStatement(!0), this.setNextStatement(!0);
        var t = this;
        this.setTooltip(function() {
            var e = t.getTitleValue("MODE");
            return {
                WHILE: Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,
                UNTIL: Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL
            }[e]
        })
    }
}, Blockly.Blocks.controls_for = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.CONTROLS_FOR_HELPURL), this.setHSV(322, .9, .95), this.appendDummyInput().appendTitle(Blockly.Msg.CONTROLS_FOR_INPUT_WITH).appendTitle(new Blockly.FieldVariable(null), "VAR"), this.interpolateMsg(Blockly.Msg.CONTROLS_FOR_INPUT_FROM_TO_BY, ["FROM", "Number", Blockly.ALIGN_RIGHT], ["TO", "Number", Blockly.ALIGN_RIGHT], ["BY", "Number", Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT), this.appendStatementInput("DO").appendTitle(Blockly.Msg.CONTROLS_FOR_INPUT_DO), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setInputsInline(!0);
        var e = this;
        this.setTooltip(function() {
            return Blockly.Msg.CONTROLS_FOR_TOOLTIP.replace("%1", e.getTitleValue("VAR"))
        })
    },
    getVars: function() {
        return [this.getTitleValue("VAR")]
    },
    renameVar: function(e, t) {
        Blockly.Names.equals(e, this.getTitleValue("VAR")) && this.setTitleValue(t, "VAR")
    },
    customContextMenu: function(e) {
        var t = {
                enabled: !0
            },
            o = this.getTitleValue("VAR");
        t.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1", o), o = goog.dom.createDom("title", null, o), o.setAttribute("name", "VAR"), o = goog.dom.createDom("block", null, o), o.setAttribute("type", "variables_get"), t.callback = Blockly.ContextMenu.callbackFactory(this, o), e.push(t)
    },
    domToMutation: function(e) {
        "default_var" === e.getAttribute("name") && (e = Blockly.Variables.generateUniqueNameFromBase_(e.childNodes[0].data), this.setTitleValue(e, "VAR"))
    }
}, Blockly.Blocks.controls_forEach = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.CONTROLS_FOREACH_HELPURL), this.setHSV(322, .9, .95), this.appendValueInput("LIST").setCheck(Blockly.BlockValueType.ARRAY).appendTitle(Blockly.Msg.CONTROLS_FOREACH_INPUT_ITEM).appendTitle(new Blockly.FieldVariable(null), "VAR").appendTitle(Blockly.Msg.CONTROLS_FOREACH_INPUT_INLIST), Blockly.Msg.CONTROLS_FOREACH_INPUT_INLIST_TAIL && (this.appendDummyInput().appendTitle(Blockly.Msg.CONTROLS_FOREACH_INPUT_INLIST_TAIL), this.setInputsInline(!0)), this.appendStatementInput("DO").appendTitle(Blockly.Msg.CONTROLS_FOREACH_INPUT_DO), this.setPreviousStatement(!0), this.setNextStatement(!0);
        var e = this;
        this.setTooltip(function() {
            return Blockly.Msg.CONTROLS_FOREACH_TOOLTIP.replace("%1", e.getTitleValue("VAR"))
        })
    },
    getVars: function() {
        return [this.getTitleValue("VAR")]
    },
    renameVar: function(e, t) {
        Blockly.Names.equals(e, this.getTitleValue("VAR")) && this.setTitleValue(t, "VAR")
    },
    customContextMenu: Blockly.Blocks.controls_for.customContextMenu
}, Blockly.Blocks.controls_flow_statements = {
    init: function() {
        var e = [
            [Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK, "BREAK"],
            [Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE, "CONTINUE"]
        ];
        this.setHelpUrl(Blockly.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL), this.setHSV(322, .9, .95), this.appendDummyInput().appendTitle(new Blockly.FieldDropdown(e), "FLOW"), this.setPreviousStatement(!0);
        var t = this;
        this.setTooltip(function() {
            var e = t.getTitleValue("FLOW");
            return t.TOOLTIPS[e]
        })
    },
    onchange: function() {
        if (this.blockSpace) {
            var e = !1,
                t = this;
            do {
                if ("controls_repeat" == t.type || "controls_repeat_ext" == t.type || "controls_forEach" == t.type || "controls_for" == t.type || "controls_whileUntil" == t.type) {
                    e = !0;
                    break
                }
                t = t.getSurroundParent()
            } while (t);
            this.setWarningText(e ? null : Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING)
        }
    }
}, Blockly.Blocks.math = {}, Blockly.Blocks.math_number = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL), this.setHSV(258, .35, .62), this.appendDummyInput().appendTitle(new Blockly.FieldTextInput("0", Blockly.FieldTextInput.numberValidator), "NUM"), this.setOutput(!0, Blockly.BlockValueType.NUMBER), this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP)
    }
}, Blockly.Blocks.math_arithmetic = {
    init: function() {
        var e = [
            [Blockly.Msg.MATH_ADDITION_SYMBOL, "ADD"],
            [Blockly.Msg.MATH_SUBTRACTION_SYMBOL, "MINUS"],
            [Blockly.Msg.MATH_MULTIPLICATION_SYMBOL, "MULTIPLY"],
            [Blockly.Msg.MATH_DIVISION_SYMBOL, "DIVIDE"],
            [Blockly.Msg.MATH_POWER_SYMBOL, "POWER"]
        ];
        this.setHelpUrl(Blockly.Msg.MATH_ARITHMETIC_HELPURL), this.setHSV(258, .35, .62), this.setOutput(!0, Blockly.BlockValueType.NUMBER), this.appendValueInput("A").setCheck(Blockly.BlockValueType.NUMBER), this.appendValueInput("B").setCheck(Blockly.BlockValueType.NUMBER).appendTitle(new Blockly.FieldDropdown(e), "OP"), this.setInputsInline(!0);
        var t = this;
        this.setTooltip(function() {
            var e = t.getTitleValue("OP");
            return {
                ADD: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD,
                MINUS: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS,
                MULTIPLY: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
                DIVIDE: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE,
                POWER: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER
            }[e]
        })
    }
}, Blockly.Blocks.math_single = {
    init: function() {
        var e = [
            [Blockly.Msg.MATH_SINGLE_OP_ROOT, "ROOT"],
            [Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE, "ABS"],
            ["-", "NEG"],
            ["ln", "LN"],
            ["log10", "LOG10"],
            ["e^", "EXP"],
            ["10^", "POW10"]
        ];
        this.setHelpUrl(Blockly.Msg.MATH_SINGLE_HELPURL), this.setHSV(258, .35, .62), this.setOutput(!0, Blockly.BlockValueType.NUMBER), this.appendValueInput("NUM").setCheck(Blockly.BlockValueType.NUMBER).appendTitle(new Blockly.FieldDropdown(e), "OP");
        var t = this;
        this.setTooltip(function() {
            var e = t.getTitleValue("OP");
            return {
                ROOT: Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT,
                ABS: Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS,
                NEG: Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG,
                LN: Blockly.Msg.MATH_SINGLE_TOOLTIP_LN,
                LOG10: Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10,
                EXP: Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP,
                POW10: Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10
            }[e]
        })
    }
}, Blockly.Blocks.math_trig = {
    init: function() {
        var e = [
            [Blockly.Msg.MATH_TRIG_SIN, "SIN"],
            [Blockly.Msg.MATH_TRIG_COS, "COS"],
            [Blockly.Msg.MATH_TRIG_TAN, "TAN"],
            [Blockly.Msg.MATH_TRIG_ASIN, "ASIN"],
            [Blockly.Msg.MATH_TRIG_ACOS, "ACOS"],
            [Blockly.Msg.MATH_TRIG_ATAN, "ATAN"]
        ];
        this.setHelpUrl(Blockly.Msg.MATH_TRIG_HELPURL), this.setHSV(258, .35, .62), this.setOutput(!0, Blockly.BlockValueType.NUMBER), this.appendValueInput("NUM").setCheck(Blockly.BlockValueType.NUMBER).appendTitle(new Blockly.FieldDropdown(e), "OP");
        var t = this;
        this.setTooltip(function() {
            var e = t.getTitleValue("OP");
            return {
                SIN: Blockly.Msg.MATH_TRIG_TOOLTIP_SIN,
                COS: Blockly.Msg.MATH_TRIG_TOOLTIP_COS,
                TAN: Blockly.Msg.MATH_TRIG_TOOLTIP_TAN,
                ASIN: Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN,
                ACOS: Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS,
                ATAN: Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN
            }[e]
        })
    }
}, Blockly.Blocks.math_constant = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.MATH_CONSTANT_HELPURL), this.setHSV(258, .35, .62), this.setOutput(!0, Blockly.BlockValueType.NUMBER), this.appendDummyInput().appendTitle(new Blockly.FieldDropdown([
            ["\u03c0", "PI"],
            ["e", "E"],
            ["\u03c6", "GOLDEN_RATIO"],
            ["sqrt(2)", "SQRT2"],
            ["sqrt(\xbd)", "SQRT1_2"],
            ["\u221e", "INFINITY"]
        ]), "CONSTANT"), this.setTooltip(Blockly.Msg.MATH_CONSTANT_TOOLTIP)
    }
}, Blockly.Blocks.math_number_property = {
    init: function() {
        var e = [
            [Blockly.Msg.MATH_IS_EVEN, "EVEN"],
            [Blockly.Msg.MATH_IS_ODD, "ODD"],
            [Blockly.Msg.MATH_IS_PRIME, "PRIME"],
            [Blockly.Msg.MATH_IS_WHOLE, "WHOLE"],
            [Blockly.Msg.MATH_IS_POSITIVE, "POSITIVE"],
            [Blockly.Msg.MATH_IS_NEGATIVE, "NEGATIVE"],
            [Blockly.Msg.MATH_IS_DIVISIBLE_BY, "DIVISIBLE_BY"]
        ];
        this.setHSV(258, .35, .62), this.appendValueInput("NUMBER_TO_CHECK").setCheck(Blockly.BlockValueType.NUMBER), e = new Blockly.FieldDropdown(e, function(e) {
            this.sourceBlock_.updateShape("DIVISIBLE_BY" == e)
        }), this.appendDummyInput().appendTitle(e, "PROPERTY"), this.setInputsInline(!0), this.setOutput(!0, Blockly.BlockValueType.BOOLEAN), this.setTooltip(Blockly.Msg.MATH_IS_TOOLTIP)
    },
    mutationToDom: function() {
        var e = document.createElement("mutation"),
            t = "DIVISIBLE_BY" == this.getTitleValue("PROPERTY");
        return e.setAttribute("divisor_input", t), e
    },
    domToMutation: function(e) {
        e = "true" == e.getAttribute("divisor_input"), this.updateShape(e)
    },
    updateShape: function(e) {
        var t = this.getInput("DIVISOR");
        e ? t || this.appendValueInput("DIVISOR").setCheck(Blockly.BlockValueType.NUMBER) : t && this.removeInput("DIVISOR")
    }
}, Blockly.Blocks.math_change = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.MATH_CHANGE_HELPURL), this.setHSV(258, .35, .62), this.appendValueInput("DELTA").setCheck(Blockly.BlockValueType.NUMBER).appendTitle(Blockly.Msg.MATH_CHANGE_TITLE_CHANGE).appendTitle(new Blockly.FieldVariable(Blockly.Msg.MATH_CHANGE_TITLE_ITEM), "VAR").appendTitle(Blockly.Msg.MATH_CHANGE_INPUT_BY), this.setPreviousStatement(!0), this.setNextStatement(!0);
        var e = this;
        this.setTooltip(function() {
            return Blockly.Msg.MATH_CHANGE_TOOLTIP.replace("%1", e.getTitleValue("VAR"))
        })
    },
    getVars: function() {
        return [this.getTitleValue("VAR")]
    },
    renameVar: function(e, t) {
        Blockly.Names.equals(e, this.getTitleValue("VAR")) && this.setTitleValue(t, "VAR")
    }
}, Blockly.Blocks.math_round = {
    init: function() {
        var e = [
            [Blockly.Msg.MATH_ROUND_OPERATOR_ROUND, "ROUND"],
            [Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP, "ROUNDUP"],
            [Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN, "ROUNDDOWN"]
        ];
        this.setHelpUrl(Blockly.Msg.MATH_ROUND_HELPURL), this.setHSV(258, .35, .62), this.setOutput(!0, Blockly.BlockValueType.NUMBER), this.appendValueInput("NUM").setCheck(Blockly.BlockValueType.NUMBER).appendTitle(new Blockly.FieldDropdown(e), "OP"), this.setTooltip(Blockly.Msg.MATH_ROUND_TOOLTIP)
    }
}, Blockly.Blocks.math_on_list = {
    init: function() {
        var e = [
                [Blockly.Msg.MATH_ONLIST_OPERATOR_SUM, "SUM"],
                [Blockly.Msg.MATH_ONLIST_OPERATOR_MIN, "MIN"],
                [Blockly.Msg.MATH_ONLIST_OPERATOR_MAX, "MAX"],
                [Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE, "AVERAGE"],
                [Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN, "MEDIAN"],
                [Blockly.Msg.MATH_ONLIST_OPERATOR_MODE, "MODE"],
                [Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV, "STD_DEV"],
                [Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM, "RANDOM"]
            ],
            t = this;
        this.setHelpUrl(Blockly.Msg.MATH_ONLIST_HELPURL), this.setHSV(258, .35, .62), this.setOutput(!0, Blockly.BlockValueType.NUMBER), e = new Blockly.FieldDropdown(e, function(e) {
            t.outputConnection.setCheck("MODE" == e ? Blockly.BlockValueType.ARRAY : Blockly.BlockValueType.NUMBER)
        }), this.appendValueInput("LIST").setCheck(Blockly.BlockValueType.ARRAY).appendTitle(e, "OP"), this.setTooltip(function() {
            var e = t.getTitleValue("OP");
            return t.TOOLTIPS[e]
        })
    }
}, Blockly.Blocks.math_modulo = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.MATH_MODULO_HELPURL), this.setHSV(258, .35, .62), this.setOutput(!0, Blockly.BlockValueType.NUMBER), this.interpolateMsg(Blockly.Msg.MATH_MODULO_TITLE, ["DIVIDEND", "Number", Blockly.ALIGN_RIGHT], ["DIVISOR", "Number", Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT), this.setInputsInline(!0), this.setTooltip(Blockly.Msg.MATH_MODULO_TOOLTIP)
    }
}, Blockly.Blocks.math_constrain = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.MATH_CONSTRAIN_HELPURL), this.setHSV(258, .35, .62), this.setOutput(!0, Blockly.BlockValueType.NUMBER), this.interpolateMsg(Blockly.Msg.MATH_CONSTRAIN_TITLE, ["VALUE", "Number", Blockly.ALIGN_RIGHT], ["LOW", "Number", Blockly.ALIGN_RIGHT], ["HIGH", "Number", Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT), this.setInputsInline(!0), this.setTooltip(Blockly.Msg.MATH_CONSTRAIN_TOOLTIP)
    }
}, Blockly.Blocks.math_random_int = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.MATH_RANDOM_INT_HELPURL), this.setHSV(258, .35, .62), this.setOutput(!0, Blockly.BlockValueType.NUMBER), this.interpolateMsg(Blockly.Msg.MATH_RANDOM_INT_TITLE, ["FROM", "Number", Blockly.ALIGN_RIGHT], ["TO", "Number", Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT), this.setInputsInline(!0), this.setTooltip(Blockly.Msg.MATH_RANDOM_INT_TOOLTIP)
    }
}, Blockly.Blocks.math_random_float = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.MATH_RANDOM_FLOAT_HELPURL), this.setHSV(258, .35, .62), this.setOutput(!0, Blockly.BlockValueType.NUMBER), this.appendDummyInput().appendTitle(Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM), this.setTooltip(Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP)
    }
}, Blockly.Blocks.procedures = {}, Blockly.Blocks.procedures_defnoreturn = {
    shouldHideIfInMainBlockSpace: function() {
        return Blockly.useModalFunctionEditor
    },
    init: function() {
        var e = !Blockly.disableParamEditing && !Blockly.useModalFunctionEditor;
        this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL), this.setHSV(94, .84, .6);
        var t = Blockly.Procedures.findLegalName(Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE, this);
        this.appendDummyInput().appendTitle(e ? "" : " ").appendTitle(new Blockly.FieldTextInput(t, Blockly.Procedures.rename), "NAME").appendTitle("", "PARAMS"), this.appendStatementInput("STACK").appendTitle(Blockly.Msg.PROCEDURES_DEFNORETURN_DO), e && this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"])), this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP), this.setFramed(this.blockSpace === Blockly.mainBlockSpace && !Blockly.readOnly), this.parameterNames_ = []
    },
    updateParams_: function() {
        for (var e = !1, t = {}, o = 0; o < this.parameterNames_.length; o++) {
            if (t["arg_" + this.parameterNames_[o].toLowerCase()]) {
                e = !0;
                break
            }
            t["arg_" + this.parameterNames_[o].toLowerCase()] = !0
        }
        this.setWarningText(e ? Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING : null), e = "", this.parameterNames_.length && (e = Blockly.Msg.PROCEDURES_BEFORE_PARAMS + " " + this.parameterNames_.join(", ")), this.setTitleValue(e, "PARAMS")
    },
    mutationToDom: function() {
        for (var e = document.createElement("mutation"), t = 0; t < this.parameterNames_.length; t++) {
            var o = document.createElement("arg");
            o.setAttribute("name", this.parameterNames_[t]), e.appendChild(o)
        }
        return this.description_ && (t = document.createElement("description"), t.innerHTML = this.description_, e.appendChild(t)), e
    },
    domToMutation: function(e) {
        this.parameterNames_ = [];
        for (var t, o = 0; t = e.childNodes[o]; o++) {
            var n = t.nodeName.toLowerCase();
            "arg" === n ? this.parameterNames_.push(t.getAttribute("name")) : "description" === n && (this.description_ = t.innerHTML)
        }
        this.updateParams_()
    },
    decompose: function(e) {
        var t = new Blockly.Block(e, "procedures_mutatorcontainer");
        t.initSvg();
        for (var o = t.getInput("STACK").connection, n = 0; n < this.parameterNames_.length; n++) {
            var i = new Blockly.Block(e, "procedures_mutatorarg");
            i.initSvg(), i.setTitleValue(this.parameterNames_[n], "NAME"), i.oldLocation = n, o.connect(i.previousConnection), o = i.nextConnection
        }
        return Blockly.Procedures.mutateCallers(this.getTitleValue("NAME"), this.blockSpace, this.parameterNames_, null), t
    },
    compose: function(e) {
        e = e.getInputTargetBlock("STACK");
        for (var t = [], o = []; e;) t.push(e.getTitleValue("NAME")), o.push(e.id), e = e.nextConnection && e.nextConnection.targetBlock();
        this.updateParamsFromArrays(t, o)
    },
    updateParamsFromArrays: function(e, t) {
        this.parameterNames_ = goog.array.clone(e), this.paramIds_ = t ? goog.array.clone(t) : null, this.updateParams_(), this.updateCallerParams_()
    },
    updateCallerParams_: function() {
        Blockly.Procedures.mutateCallers(this.getTitleValue("NAME"), this.blockSpace, this.parameterNames_, this.paramIds_)
    },
    dispose: function(e, t, o) {
        if (!o) {
            var n = this.getTitleValue("NAME");
            Blockly.Procedures.disposeCallers(n, this.blockSpace)
        }
        Blockly.Block.prototype.dispose.apply(this, arguments)
    },
    getProcedureInfo: function() {
        return {
            name: this.getTitleValue("NAME"),
            parameterNames: this.parameterNames_,
            parameterIDs: this.paramIds_,
            type: this.type,
            callType: this.callType_
        }
    },
    getVars: function() {
        return this.parameterNames_
    },
    renameVar: function(e, t) {
        for (var o = !1, n = 0; n < this.parameterNames_.length; n++) Blockly.Names.equals(e, this.parameterNames_[n]) && (this.parameterNames_[n] = t, o = !0);
        if (o && (this.updateParams_(), this.mutator && this.mutator.isVisible()))
            for (var i, o = this.mutator.blockSpace_.getAllBlocks(), n = 0; i = o[n]; n++) "procedures_mutatorarg" == i.type && Blockly.Names.equals(e, i.getTitleValue("NAME")) && i.setTitleValue(t, "NAME")
    },
    removeVar: function(e) {
        e = this.parameterNames_.indexOf(e), e > -1 && (this.parameterNames_.splice(e, 1), this.updateParams_())
    },
    customContextMenu: function(e) {
        var t = {
                enabled: !0
            },
            o = this.getTitleValue("NAME");
        t.text = Blockly.Msg.PROCEDURES_CREATE_DO.replace("%1", o);
        var n = goog.dom.createDom("mutation");
        n.setAttribute("name", o);
        for (var i = 0; i < this.parameterNames_.length; i++) o = goog.dom.createDom("arg"), o.setAttribute("name", this.parameterNames_[i]), n.appendChild(o);
        for (n = goog.dom.createDom("block", null, n), n.setAttribute("type", this.callType_), t.callback = Blockly.ContextMenu.callbackFactory(this, n), e.push(t), i = 0; i < this.parameterNames_.length; i++) t = {
            enabled: !0
        }, o = this.parameterNames_[i], t.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1", o), n = goog.dom.createDom("title", null, o), n.setAttribute("name", "VAR"), n = goog.dom.createDom("block", null, n), n.setAttribute("type", "variables_get"), t.callback = Blockly.ContextMenu.callbackFactory(this, n), e.push(t)
    },
    userCreated: !1,
    shouldBeGrayedOut: function() {
        return !1
    },
    callType_: "procedures_callnoreturn"
}, Blockly.Blocks.procedures_defreturn = {
    shouldHideIfInMainBlockSpace: function() {
        return Blockly.useModalFunctionEditor
    },
    init: function() {
        this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL), this.setHSV(94, .84, .6);
        var e = Blockly.Procedures.findLegalName(Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE, this);
        this.appendDummyInput().appendTitle(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE).appendTitle(new Blockly.FieldTextInput(e, Blockly.Procedures.rename), "NAME").appendTitle("", "PARAMS"), this.appendStatementInput("STACK").appendTitle(Blockly.Msg.PROCEDURES_DEFRETURN_DO), this.appendValueInput("RETURN").setAlign(Blockly.ALIGN_RIGHT).appendTitle(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN), this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"])), this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP), this.setFramed(this.blockSpace === Blockly.mainBlockSpace && !Blockly.readOnly), this.parameterNames_ = []
    },
    updateParams_: Blockly.Blocks.procedures_defnoreturn.updateParams_,
    updateCallerParams_: Blockly.Blocks.procedures_defnoreturn.updateCallerParams_,
    updateParamsFromArrays: Blockly.Blocks.procedures_defnoreturn.updateParamsFromArrays,
    mutationToDom: Blockly.Blocks.procedures_defnoreturn.mutationToDom,
    domToMutation: Blockly.Blocks.procedures_defnoreturn.domToMutation,
    decompose: Blockly.Blocks.procedures_defnoreturn.decompose,
    compose: Blockly.Blocks.procedures_defnoreturn.compose,
    dispose: Blockly.Blocks.procedures_defnoreturn.dispose,
    getProcedureInfo: function() {
        return {
            name: this.getTitleValue("NAME"),
            parameterNames: this.parameterNames_,
            parameterIDs: this.paramIds_,
            type: this.type,
            callType: this.callType_
        }
    },
    getVars: Blockly.Blocks.procedures_defnoreturn.getVars,
    renameVar: Blockly.Blocks.procedures_defnoreturn.renameVar,
    customContextMenu: Blockly.Blocks.procedures_defnoreturn.customContextMenu,
    userCreated: Blockly.Blocks.procedures_defnoreturn.userCreated,
    shouldBeGrayedOut: Blockly.Blocks.procedures_defnoreturn.shouldBeGrayedOut,
    callType_: "procedures_callreturn"
}, Blockly.Blocks.procedures_mutatorcontainer = {
    init: function() {
        this.setHSV(94, .84, .6), this.appendDummyInput().appendTitle(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE), this.appendStatementInput("STACK"), this.setTooltip(""), this.contextMenu = !1
    }
}, Blockly.Blocks.procedures_mutatorarg = {
    init: function() {
        this.setHSV(94, .84, .6), this.appendDummyInput().appendTitle(Blockly.Msg.PROCEDURES_MUTATORARG_TITLE).appendTitle(new Blockly.FieldTextInput("x", this.validator), "NAME"), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setTooltip(""), this.contextMenu = !1
    }
}, Blockly.Blocks.procedures_mutatorarg.validator = function(e) {
    return (e = e.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "")) || null
}, Blockly.Blocks.procedures_callnoreturn = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL), this.setHSV(94, .84, .6);
        var e = this.appendDummyInput().appendTitle(Blockly.Msg.PROCEDURES_CALLNORETURN_CALL).appendTitle("", "NAME");
        if (Blockly.useModalFunctionEditor) {
            var t = new Blockly.FieldIcon(Blockly.Msg.FUNCTION_EDIT);
            Blockly.bindEvent_(t.fieldGroup_, "mousedown", this, this.openEditor), e.appendTitle(t)
        }
        this.setPreviousStatement(!0), this.setNextStatement(!0), this.setTooltip(Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP), this.currentParameterNames_ = [], this.currentParameterIDs = this.parameterIDsToArgumentConnections = null
    },
    openEditor: function(e) {
        e.stopPropagation(), Blockly.functionEditor.openEditorForCallBlock_(this)
    },
    getCallName: function() {
        return this.getTitleValue("NAME")
    },
    renameProcedure: function(e, t) {
        Blockly.Names.equals(e, this.getTitleValue("NAME")) && (this.setTitleValue(t, "NAME"), this.setTooltip((this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP : Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", t)))
    },
    setProcedureParameters: function(e, t) {
        if (t) {
            if (t.length != e.length) throw "Error: paramNames and paramIds must be the same length.";
            this.currentParameterIDs || (this.parameterIDsToArgumentConnections = {}, this.currentParameterIDs = e.join("\n") == this.currentParameterNames_.join("\n") ? t : []);
            var o = this.rendered;
            this.rendered = !1;
            for (var n = this.currentParameterNames_.length - 1; n >= 0; n--) {
                var i = this.getInput("ARG" + n);
                if (i) {
                    var r = i.connection.targetConnection;
                    this.parameterIDsToArgumentConnections[this.currentParameterIDs[n]] = r, this.removeInput("ARG" + n)
                }
            }
            for (this.currentParameterNames_ = [].concat(e), this.currentParameterIDs = t, n = 0; n < this.currentParameterNames_.length; n++)
                if (i = this.appendValueInput("ARG" + n).setAlign(Blockly.ALIGN_RIGHT).appendTitle(this.currentParameterNames_[n]), this.currentParameterIDs) {
                    var l = this.currentParameterIDs[n];
                    l in this.parameterIDsToArgumentConnections && (r = this.parameterIDsToArgumentConnections[l], !r || r.targetConnection || r.sourceBlock_.blockSpace != this.blockSpace ? delete this.parameterIDsToArgumentConnections[l] : i.connection.connect(r))
                }(this.rendered = o) && this.render()
        } else this.parameterIDsToArgumentConnections = {}, this.currentParameterIDs = null
    },
    mutationToDom: function() {
        var e = document.createElement("mutation");
        e.setAttribute("name", this.getTitleValue("NAME"));
        for (var t = 0; t < this.currentParameterNames_.length; t++) {
            var o = document.createElement("arg");
            o.setAttribute("name", this.currentParameterNames_[t]), e.appendChild(o)
        }
        return e
    },
    domToMutation: function(e) {
        var t = e.getAttribute("name");
        if (this.setTitleValue(t, "NAME"), this.setTooltip((this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP : Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", t)), (t = Blockly.Procedures.getDefinition(t, this.blockSpace)) && t.mutator && t.mutator.isVisible()) e = t.getProcedureInfo(), this.setProcedureParameters(e.parameterNames, e.parameterIDs);
        else {
            this.currentParameterNames_ = [];
            for (var o, t = 0; o = e.childNodes[t]; t++) "arg" == o.nodeName.toLowerCase() && this.currentParameterNames_.push(o.getAttribute("name"));
            this.setProcedureParameters(this.currentParameterNames_, this.currentParameterNames_)
        }
    },
    renameVar: function(e, t) {
        for (var o = 0; o < this.currentParameterNames_.length; o++) Blockly.Names.equals(e, this.currentParameterNames_[o]) && (this.currentParameterNames_[o] = t, this.getInput("ARG" + o).titleRow[0].setText(t))
    },
    customContextMenu: function(e) {
        var t = {
            enabled: !0
        };
        t.text = Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF;
        var o = this.getTitleValue("NAME"),
            n = this.blockSpace;
        t.callback = function() {
            var e = Blockly.Procedures.getDefinition(o, n);
            e && e.select()
        }, e.push(t)
    }
}, Blockly.Blocks.procedures_callreturn = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL), this.setHSV(94, .84, .6);
        var e = this.appendDummyInput().appendTitle(Blockly.Msg.PROCEDURES_CALLRETURN_CALL).appendTitle("", "NAME");
        if (Blockly.functionEditor) {
            var t = new Blockly.FieldIcon(Blockly.Msg.FUNCTION_EDIT);
            Blockly.bindEvent_(t.fieldGroup_, "mousedown", this, this.openEditor), e.appendTitle(t)
        }
        this.setOutput(!0), this.setTooltip(Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP), this.currentParameterNames_ = [], this.currentParameterIDs = this.parameterIDsToArgumentConnections = null
    },
    openEditor: Blockly.Blocks.procedures_callnoreturn.openEditor,
    getCallName: Blockly.Blocks.procedures_callnoreturn.getCallName,
    renameProcedure: Blockly.Blocks.procedures_callnoreturn.renameProcedure,
    setProcedureParameters: Blockly.Blocks.procedures_callnoreturn.setProcedureParameters,
    mutationToDom: Blockly.Blocks.procedures_callnoreturn.mutationToDom,
    domToMutation: Blockly.Blocks.procedures_callnoreturn.domToMutation,
    renameVar: Blockly.Blocks.procedures_callnoreturn.renameVar,
    customContextMenu: Blockly.Blocks.procedures_callnoreturn.customContextMenu
}, Blockly.Blocks.procedures_ifreturn = {
    init: function() {
        this.setHelpUrl("http://c2.com/cgi/wiki?GuardClause"), this.setHSV(94, .84, .6), this.appendValueInput("CONDITION").setCheck(Blockly.BlockValueType.BOOLEAN).appendTitle(Blockly.Msg.CONTROLS_IF_MSG_IF), this.appendValueInput("VALUE").appendTitle(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN), this.setInputsInline(!0), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setTooltip(Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP), this.hasReturnValue_ = !0
    },
    mutationToDom: function() {
        var e = document.createElement("mutation");
        return e.setAttribute("value", Number(this.hasReturnValue_)), e
    },
    domToMutation: function(e) {
        this.hasReturnValue_ = 1 == e.getAttribute("value"), this.hasReturnValue_ || (this.removeInput("VALUE"), this.appendDummyInput("VALUE").appendTitle(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN))
    },
    onchange: function() {
        if (this.blockSpace) {
            var e = !1,
                t = this;
            do {
                if ("procedures_defnoreturn" == t.type || "procedures_defreturn" == t.type) {
                    e = !0;
                    break
                }
                t = t.getSurroundParent()
            } while (t);
            e ? ("procedures_defnoreturn" == t.type && this.hasReturnValue_ ? (this.removeInput("VALUE"), this.appendDummyInput("VALUE").appendTitle(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN), this.hasReturnValue_ = !1) : "procedures_defreturn" != t.type || this.hasReturnValue_ || (this.removeInput("VALUE"), this.appendValueInput("VALUE").appendTitle(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN), this.hasReturnValue_ = !0), this.setWarningText(null)) : this.setWarningText(Blockly.Msg.PROCEDURES_IFRETURN_WARNING)
        }
    }
}, Blockly.Blocks.text = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL), this.setColour(160), this.appendDummyInput().appendTitle(new Blockly.FieldImage(Blockly.assetUrl("media/quote0.png"), 12, 12)).appendTitle(new Blockly.FieldTextInput(""), "TEXT").appendTitle(new Blockly.FieldImage(Blockly.assetUrl("media/quote1.png"), 12, 12)), this.setOutput(!0, Blockly.BlockValueType.STRING), this.setTooltip(Blockly.Msg.TEXT_TEXT_TOOLTIP)
    }
}, Blockly.Blocks.text_join = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.TEXT_JOIN_HELPURL), this.setColour(160), this.appendValueInput("ADD0").appendTitle(Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH), this.appendValueInput("ADD1"), this.setOutput(!0, Blockly.BlockValueType.STRING), this.setMutator(new Blockly.Mutator(["text_create_join_item"])), this.setTooltip(Blockly.Msg.TEXT_JOIN_TOOLTIP), this.itemCount_ = 2
    },
    mutationToDom: function() {
        var e = document.createElement("mutation");
        return e.setAttribute("items", this.itemCount_), e
    },
    domToMutation: function(e) {
        for (var t = 0; t < this.itemCount_; t++) this.removeInput("ADD" + t);
        for (this.itemCount_ = window.parseInt(e.getAttribute("items"), 10), t = 0; t < this.itemCount_; t++) e = this.appendValueInput("ADD" + t), 0 == t && e.appendTitle(Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH);
        0 == this.itemCount_ && this.appendDummyInput("EMPTY").appendTitle(new Blockly.FieldImage(Blockly.assetUrl("media/quote0.png"), 12, 12)).appendTitle(new Blockly.FieldImage(Blockly.assetUrl("media/quote1.png"), 12, 12))
    },
    decompose: function(e) {
        var t = new Blockly.Block(e, "text_create_join_container");
        t.initSvg();
        for (var o = t.getInput("STACK").connection, n = 0; n < this.itemCount_; n++) {
            var i = new Blockly.Block(e, "text_create_join_item");
            i.initSvg(), o.connect(i.previousConnection), o = i.nextConnection
        }
        return t
    },
    compose: function(e) {
        if (0 == this.itemCount_) this.removeInput("EMPTY");
        else
            for (var t = this.itemCount_ - 1; t >= 0; t--) this.removeInput("ADD" + t);
        for (this.itemCount_ = 0, e = e.getInputTargetBlock("STACK"); e;) t = this.appendValueInput("ADD" + this.itemCount_), 0 == this.itemCount_ && t.appendTitle(Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH), e.valueConnection_ && t.connection.connect(e.valueConnection_), this.itemCount_++, e = e.nextConnection && e.nextConnection.targetBlock();
        0 == this.itemCount_ && this.appendDummyInput("EMPTY").appendTitle(new Blockly.FieldImage(Blockly.assetUrl("media/quote0.png"), 12, 12)).appendTitle(new Blockly.FieldImage(Blockly.assetUrl("media/quote1.png"), 12, 12))
    },
    saveConnections: function(e) {
        e = e.getInputTargetBlock("STACK");
        for (var t = 0; e;) {
            var o = this.getInput("ADD" + t);
            e.valueConnection_ = o && o.connection.targetConnection, t++, e = e.nextConnection && e.nextConnection.targetBlock()
        }
    }
}, Blockly.Blocks.text_create_join_container = {
    init: function() {
        this.setColour(160), this.appendDummyInput().appendTitle(Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN), this.appendStatementInput("STACK"), this.setTooltip(Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP), this.contextMenu = !1
    }
}, Blockly.Blocks.text_create_join_item = {
    init: function() {
        this.setColour(160), this.appendDummyInput().appendTitle(Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setTooltip(Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP), this.contextMenu = !1
    }
}, Blockly.Blocks.text_append = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.TEXT_APPEND_HELPURL), this.setColour(160), this.appendValueInput("TEXT").appendTitle(Blockly.Msg.TEXT_APPEND_TO).appendTitle(new Blockly.FieldVariable(Blockly.Msg.TEXT_APPEND_VARIABLE), "VAR").appendTitle(Blockly.Msg.TEXT_APPEND_APPENDTEXT), this.setPreviousStatement(!0), this.setNextStatement(!0);
        var e = this;
        this.setTooltip(function() {
            return Blockly.Msg.TEXT_APPEND_TOOLTIP.replace("%1", e.getTitleValue("VAR"))
        })
    },
    getVars: function() {
        return [this.getTitleValue("VAR")]
    },
    renameVar: function(e, t) {
        Blockly.Names.equals(e, this.getTitleValue("VAR")) && this.setTitleValue(t, "VAR")
    }
}, Blockly.Blocks.text_length = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.TEXT_LENGTH_HELPURL), this.setColour(160), this.interpolateMsg(Blockly.Msg.TEXT_LENGTH_TITLE, ["VALUE", ["String", "Array"], Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT), this.setOutput(!0, Blockly.BlockValueType.NUMBER), this.setTooltip(Blockly.Msg.TEXT_LENGTH_TOOLTIP)
    }
}, Blockly.Blocks.text_isEmpty = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.TEXT_ISEMPTY_HELPURL), this.setColour(160), this.interpolateMsg(Blockly.Msg.TEXT_ISEMPTY_TITLE, ["VALUE", ["String", "Array"], Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT), this.setOutput(!0, Blockly.BlockValueType.BOOLEAN), this.setTooltip(Blockly.Msg.TEXT_ISEMPTY_TOOLTIP)
    }
}, Blockly.Blocks.text_indexOf = {
    init: function() {
        var e = [
            [Blockly.Msg.TEXT_INDEXOF_OPERATOR_FIRST, "FIRST"],
            [Blockly.Msg.TEXT_INDEXOF_OPERATOR_LAST, "LAST"]
        ];
        this.setHelpUrl(Blockly.Msg.TEXT_INDEXOF_HELPURL), this.setColour(160), this.setOutput(!0, Blockly.BlockValueType.NUMBER), this.appendValueInput("VALUE").setCheck(Blockly.BlockValueType.STRING).appendTitle(Blockly.Msg.TEXT_INDEXOF_INPUT_INTEXT), this.appendValueInput("FIND").setCheck(Blockly.BlockValueType.STRING).appendTitle(new Blockly.FieldDropdown(e), "END"), Blockly.Msg.TEXT_INDEXOF_TAIL && this.appendDummyInput().appendTitle(Blockly.Msg.TEXT_INDEXOF_TAIL), this.setInputsInline(!0), this.setTooltip(Blockly.Msg.TEXT_INDEXOF_TOOLTIP)
    }
}, Blockly.Blocks.text_charAt = {
    init: function() {
        this.WHERE_OPTIONS = [
            [Blockly.Msg.TEXT_CHARAT_FROM_START, "FROM_START"],
            [Blockly.Msg.TEXT_CHARAT_FROM_END, "FROM_END"],
            [Blockly.Msg.TEXT_CHARAT_FIRST, "FIRST"],
            [Blockly.Msg.TEXT_CHARAT_LAST, "LAST"],
            [Blockly.Msg.TEXT_CHARAT_RANDOM, "RANDOM"]
        ], this.setHelpUrl(Blockly.Msg.TEXT_CHARAT_HELPURL), this.setColour(160), this.setOutput(!0, Blockly.BlockValueType.STRING), this.appendValueInput("VALUE").setCheck(Blockly.BlockValueType.STRING).appendTitle(Blockly.Msg.TEXT_CHARAT_INPUT_INTEXT), this.appendDummyInput("AT"), this.setInputsInline(!0), this.updateAt(!0), this.setTooltip(Blockly.Msg.TEXT_CHARAT_TOOLTIP)
    },
    mutationToDom: function() {
        var e = document.createElement("mutation"),
            t = this.getInput("AT").type == Blockly.INPUT_VALUE;
        return e.setAttribute("at", t), e
    },
    domToMutation: function(e) {
        e = "false" != e.getAttribute("at"), this.updateAt(e)
    },
    updateAt: function(e) {
        this.removeInput("AT"), this.removeInput("ORDINAL", !0), e ? (this.appendValueInput("AT").setCheck(Blockly.BlockValueType.NUMBER), Blockly.Msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL").appendTitle(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) : this.appendDummyInput("AT"), Blockly.Msg.TEXT_CHARAT_TAIL && (this.removeInput("TAIL", !0), this.appendDummyInput("TAIL").appendTitle(Blockly.Msg.TEXT_CHARAT_TAIL));
        var t = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function(t) {
            var o = "FROM_START" == t || "FROM_END" == t;
            if (o != e) {
                var n = this.sourceBlock_;
                return n.updateAt(o), n.setTitleValue(t, "WHERE"), null
            }
        });
        this.getInput("AT").appendTitle(t, "WHERE")
    }
}, Blockly.Blocks.text_getSubstring = {
    init: function() {
        this.WHERE_OPTIONS_1 = [
            [Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START, "FROM_START"],
            [Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END, "FROM_END"],
            [Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST, "FIRST"]
        ], this.WHERE_OPTIONS_2 = [
            [Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START, "FROM_START"],
            [Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END, "FROM_END"],
            [Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST, "LAST"]
        ], this.setHelpUrl(Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL), this.setColour(160), this.appendValueInput("STRING").setCheck(Blockly.BlockValueType.STRING).appendTitle(Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT), this.appendDummyInput("AT1"), this.appendDummyInput("AT2"), Blockly.Msg.TEXT_GET_SUBSTRING_TAIL && this.appendDummyInput("TAIL").appendTitle(Blockly.Msg.TEXT_GET_SUBSTRING_TAIL), this.setInputsInline(!0), this.setOutput(!0, Blockly.BlockValueType.STRING), this.updateAt(1, !0), this.updateAt(2, !0), this.setTooltip(Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP)
    },
    mutationToDom: function() {
        var e = document.createElement("mutation"),
            t = this.getInput("AT1").type == Blockly.INPUT_VALUE;
        return e.setAttribute("at1", t), t = this.getInput("AT2").type == Blockly.INPUT_VALUE, e.setAttribute("at2", t), e
    },
    domToMutation: function(e) {
        var t = "true" == e.getAttribute("at1");
        e = "true" == e.getAttribute("at2"), this.updateAt(1, t), this.updateAt(2, e)
    },
    updateAt: function(e, t) {
        this.removeInput("AT" + e), this.removeInput("ORDINAL" + e, !0), t ? (this.appendValueInput("AT" + e).setCheck(Blockly.BlockValueType.NUMBER), Blockly.Msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL" + e).appendTitle(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) : this.appendDummyInput("AT" + e), 2 == e && Blockly.Msg.TEXT_GET_SUBSTRING_TAIL && (this.removeInput("TAIL", !0), this.appendDummyInput("TAIL").appendTitle(Blockly.Msg.TEXT_GET_SUBSTRING_TAIL));
        var o = new Blockly.FieldDropdown(this["WHERE_OPTIONS_" + e], function(o) {
            var n = "FROM_START" == o || "FROM_END" == o;
            if (n != t) {
                var i = this.sourceBlock_;
                return i.updateAt(e, n), i.setTitleValue(o, "WHERE" + e), null
            }
        });
        this.getInput("AT" + e).appendTitle(o, "WHERE" + e), 1 == e && this.moveInputBefore("AT1", "AT2")
    }
}, Blockly.Blocks.text_changeCase = {
    init: function() {
        var e = [
            [Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE, "UPPERCASE"],
            [Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE, "LOWERCASE"],
            [Blockly.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE, "TITLECASE"]
        ];
        this.setHelpUrl(Blockly.Msg.TEXT_CHANGECASE_HELPURL), this.setColour(160), this.appendValueInput("TEXT").setCheck(Blockly.BlockValueType.STRING).appendTitle(new Blockly.FieldDropdown(e), "CASE"), this.setOutput(!0, Blockly.BlockValueType.STRING), this.setTooltip(Blockly.Msg.TEXT_CHANGECASE_TOOLTIP)
    }
}, Blockly.Blocks.text_trim = {
    init: function() {
        var e = [
            [Blockly.Msg.TEXT_TRIM_OPERATOR_BOTH, "BOTH"],
            [Blockly.Msg.TEXT_TRIM_OPERATOR_LEFT, "LEFT"],
            [Blockly.Msg.TEXT_TRIM_OPERATOR_RIGHT, "RIGHT"]
        ];
        this.setHelpUrl(Blockly.Msg.TEXT_TRIM_HELPURL), this.setColour(160), this.appendValueInput("TEXT").setCheck(Blockly.BlockValueType.STRING).appendTitle(new Blockly.FieldDropdown(e), "MODE"), this.setOutput(!0, Blockly.BlockValueType.STRING), this.setTooltip(Blockly.Msg.TEXT_TRIM_TOOLTIP)
    }
}, Blockly.Blocks.text_print = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.TEXT_PRINT_HELPURL), this.setColour(160), this.interpolateMsg(Blockly.Msg.TEXT_PRINT_TITLE, ["TEXT", null, Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setTooltip(Blockly.Msg.TEXT_PRINT_TOOLTIP)
    }
}, Blockly.Blocks.text_prompt = {
    init: function() {
        var e = [
                [Blockly.Msg.TEXT_PROMPT_TYPE_TEXT, "TEXT"],
                [Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"]
            ],
            t = this;
        this.setHelpUrl(Blockly.Msg.TEXT_PROMPT_HELPURL), this.setColour(160), e = new Blockly.FieldDropdown(e, function(e) {
            t.outputConnection.setCheck("NUMBER" == e ? Blockly.BlockValueType.NUMBER : Blockly.BlockValueType.STRING)
        }), this.appendDummyInput().appendTitle(e, "TYPE").appendTitle(new Blockly.FieldImage(Blockly.assetUrl("media/quote0.png"), 12, 12)).appendTitle(new Blockly.FieldTextInput(""), "TEXT").appendTitle(new Blockly.FieldImage(Blockly.assetUrl("media/quote1.png"), 12, 12)), this.setOutput(!0, Blockly.BlockValueType.STRING), t = this, this.setTooltip(function() {
            return "TEXT" == t.getTitleValue("TYPE") ? Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT : Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER
        })
    }
}, Blockly.Blocks.variables = {}, Blockly.Blocks.variables_get = {
    init: function() {
        var e = new Blockly.FieldLabel(Blockly.Msg.VARIABLES_GET_ITEM);
        e.EDITABLE = !0, this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL), this.setHSV(312, .32, .62), this.appendDummyInput().appendTitle(Blockly.Msg.VARIABLES_GET_TITLE).appendTitle(Blockly.disableVariableEditing ? e : new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), "VAR").appendTitle(Blockly.Msg.VARIABLES_GET_TAIL), this.setOutput(!0), this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP)
    },
    getVars: function() {
        return [this.getTitleValue("VAR")]
    },
    renameVar: function(e, t) {
        Blockly.Names.equals(e, this.getTitleValue("VAR")) && this.setTitleValue(t, "VAR")
    },
    removeVar: function(e) {
        Blockly.Names.equals(e, this.getTitleValue("VAR")) && this.dispose(!0, !0)
    },
    contextMenuType_: "variables_set",
    customContextMenu: function(e) {
        var t = {
                enabled: !0
            },
            o = this.getTitleValue("VAR");
        t.text = Blockly.Msg.VARIABLES_GET_CREATE_SET.replace("%1", o), o = goog.dom.createDom("title", null, o), o.setAttribute("name", "VAR"), o = goog.dom.createDom("block", null, o), o.setAttribute("type", this.contextMenuType_), t.callback = Blockly.ContextMenu.callbackFactory(this, o), e.push(t)
    }
}, Blockly.Blocks.variables_set = {
    init: function() {
        var e = new Blockly.FieldLabel(Blockly.Msg.VARIABLES_SET_ITEM);
        e.EDITABLE = !0, this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL), this.setHSV(312, .32, .62), this.appendValueInput("VALUE").appendTitle(Blockly.Msg.VARIABLES_SET_TITLE).appendTitle(Blockly.disableVariableEditing ? e : new Blockly.FieldVariable(Blockly.Msg.VARIABLES_SET_ITEM), "VAR").appendTitle(Blockly.Msg.VARIABLES_SET_TAIL), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP)
    },
    getVars: function() {
        return [this.getTitleValue("VAR")]
    },
    renameVar: function(e, t) {
        Blockly.Names.equals(e, this.getTitleValue("VAR")) && this.setTitleValue(t, "VAR")
    },
    contextMenuMsg_: Blockly.Msg.VARIABLES_SET_CREATE_GET,
    contextMenuType_: "variables_get",
    customContextMenu: Blockly.Blocks.variables_get.customContextMenu
}, Blockly.Blocks.parameters_get = {
    init: function() {
        var e = new Blockly.FieldLabel(Blockly.Msg.VARIABLES_GET_ITEM);
        e.EDITABLE = !0, this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL), this.setHSV(7, .8, .95), this.appendDummyInput().appendTitle(Blockly.Msg.VARIABLES_GET_TITLE).appendTitle(Blockly.disableVariableEditing ? e : new Blockly.FieldParameter(Blockly.Msg.VARIABLES_GET_ITEM), "VAR").appendTitle(Blockly.Msg.VARIABLES_GET_TAIL), this.setOutput(!0), this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP)
    },
    renameVar: function(e, t) {
        Blockly.functionEditor && (Blockly.functionEditor.renameParameter(e, t), Blockly.functionEditor.refreshParamsEverywhere())
    },
    removeVar: Blockly.Blocks.variables_get.removeVar
}, Blockly.Blocks.functionalProcedures = {}, Blockly.Blocks.functional_definition = {
    shouldHideIfInMainBlockSpace: function() {
        return !0
    },
    init: function() {
        this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL), this.setHSV(94, .84, .6), this.setFunctional(!0, {
            headerHeight: 0,
            rowBuffer: 3
        }), this.setFunctionalOutput(!0, Blockly.BlockValueType.NUMBER);
        var e = Blockly.Procedures.findLegalName(Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE, this);
        this.appendDummyInput().appendTitle(Blockly.Msg.DEFINE_FUNCTION_DEFINE).appendTitle(new Blockly.FieldTextInput(e, Blockly.Procedures.rename), "NAME").appendTitle("", "PARAMS"), this.appendFunctionalInput("STACK"), this.setFunctional(!0), this.setTooltip(Blockly.Msg.FUNCTIONAL_PROCEDURE_DEFINE_TOOLTIP), this.isFunctionalVariable_ = !1, this.parameterNames_ = [], this.paramIds_ = [], this.parameterTypes_ = []
    },
    updateInputsToType: function(e) {
        this.updateInputType_(this.getInput("STACK"), e), this.render()
    },
    updateInputType_: function(e, t) {
        e.setHSV.apply(e, Blockly.FunctionalTypeColors[t]), e.setCheck(t)
    },
    mutationToDom: function() {
        for (var e = document.createElement("mutation"), t = 0; t < this.parameterNames_.length; t++) {
            var o = document.createElement("arg");
            o.setAttribute("name", this.parameterNames_[t]), this.parameterTypes_[t] && o.setAttribute("type", this.parameterTypes_[t]), e.appendChild(o)
        }
        return this.description_ && (t = document.createElement("description"), t.innerHTML = this.description_, e.appendChild(t)), this.outputType_ && (t = document.createElement("outputType"), t.innerHTML = this.outputType_, e.appendChild(t)), this.isFunctionalVariable_ && (t = document.createElement("isfunctionalvariable"), t.innerHTML = "true", e.appendChild(t)), e
    },
    domToMutation: function(e) {
        this.parameterNames_ = [];
        for (var t, o = 0; t = e.childNodes[o]; o++) {
            var n = t.nodeName.toLowerCase();
            "arg" === n ? (this.parameterNames_.push(t.getAttribute("name")), this.parameterTypes_.push(t.getAttribute("type"))) : "description" === n ? this.description_ = t.textContent : "outputtype" === n ? this.updateOutputType(t.textContent) : "isfunctionalvariable" === n && (this.isFunctionalVariable_ = !0)
        }
        this.updateParams_()
    },
    isVariable: function() {
        return this.isFunctionalVariable_
    },
    convertToVariable: function() {
        this.isFunctionalVariable_ = !0
    },
    updateParamsFromArrays: function(e, t, o) {
        this.parameterNames_ = goog.array.clone(e), this.paramIds_ = t ? goog.array.clone(t) : null, this.parameterTypes_ = goog.array.clone(o), this.updateParams_(), this.updateCallerParams_()
    },
    updateParams_: function() {
        for (var e = !1, t = {}, o = 0; o < this.parameterNames_.length; o++) {
            if (t["arg_" + this.parameterNames_[o].toLowerCase()]) {
                e = !0;
                break
            }
            t["arg_" + this.parameterNames_[o].toLowerCase()] = !0
        }
        this.setWarningText(e ? Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING : null), e = "", this.parameterNames_.length && (e = Blockly.Msg.PROCEDURES_BEFORE_PARAMS + " " + this.parameterNames_.join(", ")), this.setTitleValue(e, "PARAMS")
    },
    updateCallerParams_: function() {
        Blockly.Procedures.mutateCallers(this.getTitleValue("NAME"), this.blockSpace, this.parameterNames_, this.paramIds_, this.parameterTypes_)
    },
    getOutputType: function() {
        return this.outputType_
    },
    updateOutputType: function(e) {
        this.outputType_ = e, this.changeFunctionalOutput(this.outputType_)
    },
    dispose: function(e, t, o) {
        if (!o) {
            var n = this.getTitleValue("NAME");
            Blockly.Procedures.disposeCallers(n, this.blockSpace)
        }
        Blockly.Block.prototype.dispose.apply(this, arguments)
    },
    getProcedureInfo: function() {
        return {
            name: this.getTitleValue("NAME"),
            type: this.type,
            callType: this.callType_,
            parameterNames: this.parameterNames_,
            parameterTypes: this.parameterTypes_,
            isFunctionalVariable: this.isFunctionalVariable_
        }
    },
    getVars: function() {
        return this.parameterNames_
    },
    renameVar: function(e, t) {
        for (var o = !1, n = 0; n < this.parameterNames_.length; n++) Blockly.Names.equals(e, this.parameterNames_[n]) && (this.parameterNames_[n] = t, o = !0);
        if (o && (this.updateParams_(), this.mutator && this.mutator.isVisible()))
            for (var i, o = this.mutator.blockSpace_.getAllBlocks(), n = 0; i = o[n]; n++) "functional_procedures_mutatorarg" == i.type && Blockly.Names.equals(e, i.getTitleValue("NAME")) && i.setTitleValue(t, "NAME")
    },
    removeVar: function(e) {
        e = this.parameterNames_.indexOf(e), e > -1 && (this.parameterNames_.splice(e, 1), this.updateParams_())
    },
    changeParamType: function(e, t) {
        for (var o = !1, n = 0; n < this.parameterNames_.length; n++) Blockly.Names.equals(e, this.parameterNames_[n]) && (this.parameterTypes_[n] = t, o = !0);
        o && (this.updateParams_(), this.updateCallerParams_())
    },
    shouldBeGrayedOut: function() {
        return !1
    },
    callType_: "functional_call"
}, Blockly.Blocks.functional_call = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL), this.setTooltip("Calls a user-defined function"), this.setHSV(94, .84, .6);
        var e = this.appendDummyInput().appendTitle(new Blockly.FieldLabel("Function Call", {
            fixedSize: {
                height: 35
            }
        }), "NAME").appendTitle("", "PARAM_TEXT");
        if (Blockly.useContractEditor && this.blockSpace !== Blockly.modalBlockSpace) {
            var t = new Blockly.FieldIcon(Blockly.Msg.FUNCTION_EDIT);
            Blockly.bindEvent_(t.fieldGroup_, "mousedown", this, this.openEditor), e.appendTitle(t), this.editLabel_ = t
        }
        this.setFunctional(!0), this.currentParameterNames_ = [], this.parameterIDsToArgumentConnections_ = {}, this.currentParameterIDs_ = [], this.currentParameterTypes_ = [], this.currentDescription_ = this.currentOutputType_ = null, this.blockSpace.events.listen(Blockly.BlockSpace.EVENTS.BLOCK_SPACE_CHANGE, this.updateAttributesFromDefinition_, !1, this), this.changeFunctionalOutput(Blockly.BlockValueType.NONE)
    },
    updateAttributesFromDefinition_: function() {
        var e = Blockly.Procedures.getDefinition(this.getTitleValue("NAME"), this.blockSpace.blockSpaceEditor.blockSpace);
        e && (e.outputType_ && e.outputType_ !== this.currentOutputType_ && (this.currentOutputType_ = e.outputType_, this.changeFunctionalOutput(e.outputType_)), e.description_ && e.description_ !== this.currentDescription_ && (this.currentDescription_ = e.description_, this.setTooltip(e.description_)))
    },
    beforeDispose: function() {
        this.blockSpace.events.unlisten(Blockly.BlockSpace.EVENTS.BLOCK_SPACE_CHANGE, this.updateAttributesFromDefinition_, !1, this)
    },
    openEditor: function(e) {
        e.stopPropagation(), Blockly.functionEditor.openEditorForCallBlock_(this)
    },
    getCallName: function() {
        return this.getTitleValue("NAME")
    },
    getParamTypes: function() {
        return this.currentParameterTypes_
    },
    renameProcedure: function(e, t) {
        Blockly.Names.equals(e, this.getTitleValue("NAME")) && this.setTitleValue(t, "NAME")
    },
    setProcedureParameters: function(e, t, o) {
        if (t) {
            if (t.length != e.length) throw "Error: paramNames and paramIds must be the same length.";
            this.currentParameterIDs_ || (this.parameterIDsToArgumentConnections_ = {}, this.currentParameterIDs_ = e.join("\n") === this.currentParameterNames_.join("\n") ? t : []);
            var n = this.rendered;
            this.rendered = !1;
            for (var i = this.currentParameterNames_.length - 1; i >= 0; i--) {
                var r = this.getInput("ARG" + i);
                if (r) {
                    var l = r.connection.targetConnection;
                    this.parameterIDsToArgumentConnections_[this.currentParameterIDs_[i]] = l, this.removeInput("ARG" + i)
                }
            }
            for (this.currentParameterNames_ = goog.array.clone(e), this.currentParameterIDs_ = goog.array.clone(t), this.currentParameterTypes_ = goog.array.clone(o), i = 0; i < this.currentParameterNames_.length; i++) r = this.appendFunctionalInput("ARG" + i).setAlign(Blockly.ALIGN_CENTRE).setInline(i > 0), l = this.currentParameterTypes_[i], r.setHSV.apply(r, Blockly.FunctionalTypeColors[l]), r.setCheck(l), this.currentParameterIDs_ && (e = this.currentParameterIDs_[i], e in this.parameterIDsToArgumentConnections_ && (l = this.parameterIDsToArgumentConnections_[e], !l || l.targetConnection || l.sourceBlock_.blockSpace != this.blockSpace ? delete this.parameterIDsToArgumentConnections_[e] : r.connection.connect(l)));
            this.refreshParameterTitleString_(), (this.rendered = n) && this.render()
        } else this.parameterIDsToArgumentConnections_ = {}, this.currentParameterIDs_ = null
    },
    refreshParameterTitleString_: function() {
        var e = 0 < this.currentParameterNames_.length ? " (" + this.currentParameterNames_.join(", ") + ")" : "";
        this.setTitleValue(e, "PARAM_TEXT")
    },
    mutationToDom: function() {
        var e = document.createElement("mutation");
        e.setAttribute("name", this.getTitleValue("NAME"));
        for (var t = 0; t < this.currentParameterNames_.length; t++) {
            var o = document.createElement("arg");
            o.setAttribute("name", this.currentParameterNames_[t]), o.setAttribute("type", this.currentParameterTypes_[t]), e.appendChild(o)
        }
        return e
    },
    domToMutation: function(e) {
        var t = e.getAttribute("name");
        this.setTitleValue(t, "NAME"), this.setTooltip((this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP : Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", t)), this.currentParameterNames_ = [], this.currentParameterIDs_ = [], this.currentParameterTypes_ = [];
        for (var o, t = 0; o = e.childNodes[t]; t++) "arg" == o.nodeName.toLowerCase() && (this.currentParameterNames_.push(o.getAttribute("name")), this.currentParameterTypes_.push(o.getAttribute("type")), this.currentParameterIDs_.push(Blockly.getUID()));
        this.setProcedureParameters(this.currentParameterNames_, this.currentParameterIDs_, this.currentParameterTypes_), this.updateAttributesFromDefinition_()
    },
    renameVar: function(e, t) {
        for (var o = 0; o < this.currentParameterNames_.length; o++) Blockly.Names.equals(e, this.currentParameterNames_[o]) && (this.currentParameterNames_[o] = t, this.refreshParameterTitleString_())
    }
}, Blockly.Blocks.functional_pass = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL), this.setTooltip("Pass a user-defined function"), this.setHSV(94, .84, .6);
        var e = this.appendDummyInput().appendTitle(new Blockly.FieldLabel("Pass Function", {
            fixedSize: {
                height: 35
            }
        }), "NAME").appendTitle("", "PARAM_TEXT");
        if (Blockly.useContractEditor && this.blockSpace !== Blockly.modalBlockSpace) {
            var t = new Blockly.FieldIcon(Blockly.Msg.FUNCTION_EDIT);
            Blockly.bindEvent_(t.fieldGroup_, "mousedown", this, this.openEditor), e.appendTitle(t), this.editLabel_ = t
        }
        this.setFunctional(!0), this.setMovable(!!Blockly.editBlocks), this.setColorFromName_(), this.blockSpace.events.listen(Blockly.BlockSpace.EVENTS.BLOCK_SPACE_CHANGE, this.setColorFromName_, !1, this), this.changeFunctionalOutput(Blockly.BlockValueType.FUNCTION)
    },
    openEditor: function(e) {
        e.stopPropagation(), Blockly.functionEditor.openEditorForCallBlock_(this)
    },
    renameProcedure: function(e, t) {
        Blockly.Names.equals(e, this.getTitleValue("NAME")) && (this.setTitleValue(t, "NAME"), this.setColorFromName_())
    },
    setColorFromName_: function() {
        var e = this.getTitleValue("NAME");
        e && (e = Blockly.mainBlockSpace.findFunction(e)) && (e = e.getOutputType(), this.setHSV.apply(this, Blockly.FunctionalTypeColors[e]))
    },
    mutationToDom: function() {
        var e = document.createElement("mutation");
        return e.setAttribute("name", this.getTitleValue("NAME")), e
    },
    domToMutation: function(e) {
        e = e.getAttribute("name"), this.setTitleValue(e, "NAME"), this.setTooltip((this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP : Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", e)), this.setColorFromName_()
    }
}, Blockly.Blocks.procedural_to_functional_call = Blockly.Blocks.procedures_callreturn, Blockly.Blocks.functionalExamples = {}, Blockly.Blocks.functional_example = {
    shouldHideIfInMainBlockSpace: function() {
        return !0
    },
    isCopyable: function() {
        return !1
    },
    init: function() {
        this.setHSV(0, 0, .49), this.setFunctional(!0, {
            headerHeight: 0,
            rowBuffer: 3
        }), this.setFunctionalOutput(!1), this.appendFunctionalInput("ACTUAL").setAlign(Blockly.ALIGN_CENTRE), this.appendFunctionalInput("EXPECTED").setAlign(Blockly.ALIGN_CENTRE).setInline(!0), this.setTooltip(Blockly.Msg.EXAMPLE_DESCRIPTION)
    },
    mutationToDom: function() {},
    domToMutation: function() {},
    updateOutputType: function(e) {
        this.outputType_ = e, this.changeFunctionalOutput(this.outputType_)
    },
    updateInputsToType: function(e) {
        this.updateInputType_(this.getInput("EXPECTED"), e), this.updateInputType_(this.getInput("ACTUAL"), e), this.render()
    },
    updateInputType_: function(e, t) {
        e.setHSV.apply(e, Blockly.FunctionalTypeColors[t]), e.setCheck(t)
    }
}, Blockly.Blocks.functionalParameters = {}, Blockly.Blocks.functional_parameters_get = {
    init: function() {
        var e = new Blockly.FieldLabel(Blockly.Msg.VARIABLES_GET_ITEM);
        e.EDITABLE = !0, this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL), this.setHSV(312, .32, .62), this.setFunctional(!0, {
            headerHeight: 30
        }), this.appendDummyInput().appendTitle(Blockly.Msg.VARIABLES_GET_TITLE).appendTitle(e, "VAR").appendTitle(Blockly.Msg.VARIABLES_GET_TAIL).setAlign(Blockly.ALIGN_CENTRE), this.setFunctionalOutput(!0), this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP)
    },
    renameVar: function(e, t) {
        if (Blockly.functionEditor) {
            var o = this.getTitle_("VAR");
            o.getText() === e && o.setText(t)
        }
    },
    removeVar: Blockly.Blocks.variables_get.removeVar,
    mutationToDom: function() {
        var e = document.createElement("mutation");
        if (this.description_) {
            var t = document.createElement("description");
            t.textContent = this.description_, e.appendChild(t)
        }
        return this.outputType_ && (t = document.createElement("outputtype"), t.textContent = this.outputType_, e.appendChild(t)), e
    },
    domToMutation: function(e) {
        for (var t, o = 0; t = e.childNodes[o]; o++) {
            var n = t.nodeName.toLowerCase();
            "description" === n ? this.description_ = t.textContent : "outputtype" === n && (this.outputType_ = t.textContent, this.changeFunctionalOutput(this.outputType_))
        }
    }
}, Blockly.JavaScript = Blockly.Generator.get("JavaScript"), Blockly.JavaScript.addReservedWords("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan"), Blockly.JavaScript.ORDER_ATOMIC = 0, Blockly.JavaScript.ORDER_MEMBER = 1, Blockly.JavaScript.ORDER_NEW = 1, Blockly.JavaScript.ORDER_FUNCTION_CALL = 2, Blockly.JavaScript.ORDER_INCREMENT = 3, Blockly.JavaScript.ORDER_DECREMENT = 3, Blockly.JavaScript.ORDER_LOGICAL_NOT = 4, Blockly.JavaScript.ORDER_BITWISE_NOT = 4, Blockly.JavaScript.ORDER_UNARY_PLUS = 4, Blockly.JavaScript.ORDER_UNARY_NEGATION = 4, Blockly.JavaScript.ORDER_TYPEOF = 4, Blockly.JavaScript.ORDER_VOID = 4, Blockly.JavaScript.ORDER_DELETE = 4, Blockly.JavaScript.ORDER_MULTIPLICATION = 5, Blockly.JavaScript.ORDER_DIVISION = 5, Blockly.JavaScript.ORDER_MODULUS = 5, Blockly.JavaScript.ORDER_ADDITION = 6, Blockly.JavaScript.ORDER_SUBTRACTION = 6, Blockly.JavaScript.ORDER_BITWISE_SHIFT = 7, Blockly.JavaScript.ORDER_RELATIONAL = 8, Blockly.JavaScript.ORDER_IN = 8, Blockly.JavaScript.ORDER_INSTANCEOF = 8, Blockly.JavaScript.ORDER_EQUALITY = 9, Blockly.JavaScript.ORDER_BITWISE_AND = 10, Blockly.JavaScript.ORDER_BITWISE_XOR = 11, Blockly.JavaScript.ORDER_BITWISE_OR = 12, Blockly.JavaScript.ORDER_LOGICAL_AND = 13, Blockly.JavaScript.ORDER_LOGICAL_OR = 14, Blockly.JavaScript.ORDER_CONDITIONAL = 15, Blockly.JavaScript.ORDER_ASSIGNMENT = 16, Blockly.JavaScript.ORDER_COMMA = 17, Blockly.JavaScript.ORDER_NONE = 99, Blockly.JavaScript.INFINITE_LOOP_TRAP = null, Blockly.JavaScript.init = function() {
    if (Blockly.JavaScript.definitions_ = {}, Blockly.Variables && (Blockly.JavaScript.variableDB_ ? Blockly.JavaScript.variableDB_.reset() : Blockly.JavaScript.variableDB_ = new Blockly.Names(Blockly.JavaScript.RESERVED_WORDS_), !Blockly.varsInGlobals)) {
        for (var e = [], t = Blockly.Variables.allVariables(), o = 0; o < t.length; o++) e[o] = "var " + Blockly.JavaScript.variableDB_.getName(t[o], Blockly.Variables.NAME_TYPE) + ";";
        Blockly.JavaScript.definitions_.variables = e.join("\n")
    }
}, Blockly.JavaScript.finish = function(e) {
    var t, o = [];
    for (t in Blockly.JavaScript.definitions_) o.push(Blockly.JavaScript.definitions_[t]);
    return o.join("\n\n") + "\n\n\n" + e
}, Blockly.JavaScript.scrubNakedValue = function(e) {
    return e + ";\n"
}, Blockly.JavaScript.quote_ = function(e) {
    return e = e.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'"), "'" + e + "'"
}, Blockly.JavaScript.translateVarName = function(e) {
    var t = Blockly.JavaScript.variableDB_.getName(e, Blockly.Variables.NAME_TYPE);
    return Blockly.varsInGlobals ? Blockly.JavaScript.variableDB_.checkSpecificType(e, Blockly.Variables.NAME_TYPE, Blockly.Variables.NAME_TYPE_LOCAL) ? t : "Globals." + t : t
}, Blockly.JavaScript.scrub_ = function(e, t) {
    if (null === t) return "";
    var o = "";
    if (!e.outputConnection || !e.outputConnection.targetConnection) {
        var n = e.getCommentText();
        n && (o += Blockly.Generator.prefixLines(n, "// ") + "\n");
        for (var i = 0; i < e.inputList.length; i++) e.inputList[i].type == Blockly.INPUT_VALUE && (n = e.inputList[i].connection.targetBlock()) && (n = Blockly.Generator.allNestedComments(n)) && (o += Blockly.Generator.prefixLines(n, "// "))
    }
    return i = e.nextConnection && e.nextConnection.targetBlock(), i = this.blockToCode(i), o + t + i
}, Blockly.JavaScript.colour = {}, Blockly.JavaScript.colour_picker = function() {
    return ["'" + this.getTitleValue("COLOUR") + "'", Blockly.JavaScript.ORDER_ATOMIC]
}, Blockly.JavaScript.colour_random = function() {
    if (!Blockly.JavaScript.definitions_.colour_random) {
        var e = Blockly.JavaScript.variableDB_.getDistinctName("colour_random", Blockly.Generator.NAME_TYPE);
        Blockly.JavaScript.colour_random.functionName = e;
        var t = [];
        t.push("function " + e + "() {"), t.push("  var num = Math.floor(Math.random() * Math.pow(2, 24));"), t.push("  return '#' + ('00000' + num.toString(16)).substr(-6);"), t.push("}"), Blockly.JavaScript.definitions_.colour_random = t.join("\n")
    }
    return [Blockly.JavaScript.colour_random.functionName + "()", Blockly.JavaScript.ORDER_FUNCTION_CALL]
}, Blockly.JavaScript.colour_rgb = function() {
    var e = Blockly.JavaScript.valueToCode(this, "RED", Blockly.JavaScript.ORDER_COMMA) || 0,
        t = Blockly.JavaScript.valueToCode(this, "GREEN", Blockly.JavaScript.ORDER_COMMA) || 0,
        o = Blockly.JavaScript.valueToCode(this, "BLUE", Blockly.JavaScript.ORDER_COMMA) || 0;
    if (!Blockly.JavaScript.definitions_.colour_rgb) {
        var n = Blockly.JavaScript.variableDB_.getDistinctName("colour_rgb", Blockly.Generator.NAME_TYPE);
        Blockly.JavaScript.colour_rgb.functionName = n;
        var i = [];
        i.push("function " + n + "(r, g, b) {"), i.push("  r = Math.round(Math.max(Math.min(Number(r), 255), 0));"), i.push("  g = Math.round(Math.max(Math.min(Number(g), 255), 0));"), i.push("  b = Math.round(Math.max(Math.min(Number(b), 255), 0));"), i.push("  r = ('0' + (r || 0).toString(16)).slice(-2);"), i.push("  g = ('0' + (g || 0).toString(16)).slice(-2);"), i.push("  b = ('0' + (b || 0).toString(16)).slice(-2);"), i.push("  return '#' + r + g + b;"), i.push("}"), Blockly.JavaScript.definitions_.colour_rgb = i.join("\n")
    }
    return [Blockly.JavaScript.colour_rgb.functionName + "(" + e + ", " + t + ", " + o + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL]
}, Blockly.JavaScript.colour_blend = function() {
    var e = Blockly.JavaScript.valueToCode(this, "COLOUR1", Blockly.JavaScript.ORDER_COMMA) || "'#000000'",
        t = Blockly.JavaScript.valueToCode(this, "COLOUR2", Blockly.JavaScript.ORDER_COMMA) || "'#000000'",
        o = Blockly.JavaScript.valueToCode(this, "RATIO", Blockly.JavaScript.ORDER_COMMA) || .5;
    if (!Blockly.JavaScript.definitions_.colour_blend) {
        var n = Blockly.JavaScript.variableDB_.getDistinctName("colour_blend", Blockly.Generator.NAME_TYPE);
        Blockly.JavaScript.colour_blend.functionName = n;
        var i = [];
        i.push("function " + n + "(c1, c2, ratio) {"), i.push("  ratio = Math.max(Math.min(Number(ratio), 1), 0);"), i.push("  var r1 = parseInt(c1.substring(1, 3), 16);"), i.push("  var g1 = parseInt(c1.substring(3, 5), 16);"), i.push("  var b1 = parseInt(c1.substring(5, 7), 16);"), i.push("  var r2 = parseInt(c2.substring(1, 3), 16);"), i.push("  var g2 = parseInt(c2.substring(3, 5), 16);"), i.push("  var b2 = parseInt(c2.substring(5, 7), 16);"), i.push("  var r = Math.round(r1 * (1 - ratio) + r2 * ratio);"), i.push("  var g = Math.round(g1 * (1 - ratio) + g2 * ratio);"), i.push("  var b = Math.round(b1 * (1 - ratio) + b2 * ratio);"), i.push("  r = ('0' + (r || 0).toString(16)).slice(-2);"), i.push("  g = ('0' + (g || 0).toString(16)).slice(-2);"), i.push("  b = ('0' + (b || 0).toString(16)).slice(-2);"), i.push("  return '#' + r + g + b;"), i.push("}"), Blockly.JavaScript.definitions_.colour_blend = i.join("\n")
    }
    return [Blockly.JavaScript.colour_blend.functionName + "(" + e + ", " + t + ", " + o + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL]
}, Blockly.JavaScript.lists = {}, Blockly.JavaScript.lists_create_empty = function() {
    return ["[]", Blockly.JavaScript.ORDER_ATOMIC]
}, Blockly.JavaScript.lists_create_with = function() {
    for (var e = Array(this.itemCount_), t = 0; t < this.itemCount_; t++) e[t] = Blockly.JavaScript.valueToCode(this, "ADD" + t, Blockly.JavaScript.ORDER_COMMA) || "null";
    return e = "[" + e.join(", ") + "]", [e, Blockly.JavaScript.ORDER_ATOMIC]
}, Blockly.JavaScript.lists_repeat = function() {
    if (!Blockly.JavaScript.definitions_.lists_repeat) {
        var e = Blockly.JavaScript.variableDB_.getDistinctName("lists_repeat", Blockly.Generator.NAME_TYPE);
        Blockly.JavaScript.lists_repeat.repeat = e;
        var t = [];
        t.push("function " + e + "(value, n) {"), t.push("  var array = [];"), t.push("  for (var i = 0; i < n; i++) {"), t.push("    array[i] = value;"), t.push("  }"), t.push("  return array;"), t.push("}"), Blockly.JavaScript.definitions_.lists_repeat = t.join("\n")
    }
    return e = Blockly.JavaScript.valueToCode(this, "ITEM", Blockly.JavaScript.ORDER_COMMA) || "null", t = Blockly.JavaScript.valueToCode(this, "NUM", Blockly.JavaScript.ORDER_COMMA) || "0", [Blockly.JavaScript.lists_repeat.repeat + "(" + e + ", " + t + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL]
}, Blockly.JavaScript.lists_length = function() {
    return [(Blockly.JavaScript.valueToCode(this, "VALUE", Blockly.JavaScript.ORDER_FUNCTION_CALL) || "''") + ".length", Blockly.JavaScript.ORDER_MEMBER]
}, Blockly.JavaScript.lists_isEmpty = function() {
    return ["!" + (Blockly.JavaScript.valueToCode(this, "VALUE", Blockly.JavaScript.ORDER_MEMBER) || "[]") + ".length", Blockly.JavaScript.ORDER_LOGICAL_NOT]
}, Blockly.JavaScript.lists_indexOf = function() {
    var e = "FIRST" == this.getTitleValue("END") ? "indexOf" : "lastIndexOf",
        t = Blockly.JavaScript.valueToCode(this, "FIND", Blockly.JavaScript.ORDER_NONE) || "''";
    return [(Blockly.JavaScript.valueToCode(this, "VALUE", Blockly.JavaScript.ORDER_MEMBER) || "[]") + "." + e + "(" + t + ") + 1", Blockly.JavaScript.ORDER_MEMBER]
}, Blockly.JavaScript.lists_getIndex = function() {
    var e = this.getTitleValue("MODE") || "GET",
        t = this.getTitleValue("WHERE") || "FROM_START",
        o = Blockly.JavaScript.valueToCode(this, "AT", Blockly.JavaScript.ORDER_UNARY_NEGATION) || "1",
        n = Blockly.JavaScript.valueToCode(this, "VALUE", Blockly.JavaScript.ORDER_MEMBER) || "[]";
    if ("FIRST" == t) {
        if ("GET" == e) return [n + "[0]", Blockly.JavaScript.ORDER_MEMBER];
        if ("GET_REMOVE" == e) return [n + ".shift()", Blockly.JavaScript.ORDER_MEMBER];
        if ("REMOVE" == e) return n + ".shift();\n"
    } else if ("LAST" == t) {
        if ("GET" == e) return [n + ".slice(-1)[0]", Blockly.JavaScript.ORDER_MEMBER];
        if ("GET_REMOVE" == e) return [n + ".pop()", Blockly.JavaScript.ORDER_MEMBER];
        if ("REMOVE" == e) return n + ".pop();\n"
    } else if ("FROM_START" == t) {
        if (o = Blockly.isNumber(o) ? parseFloat(o) - 1 : o + " - 1", "GET" == e) return [n + "[" + o + "]", Blockly.JavaScript.ORDER_MEMBER];
        if ("GET_REMOVE" == e) return [n + ".splice(" + o + ", 1)[0]", Blockly.JavaScript.ORDER_FUNCTION_CALL];
        if ("REMOVE" == e) return n + ".splice(" + o + ", 1);\n"
    } else if ("FROM_END" == t) {
        if ("GET" == e) return [n + ".slice(-" + o + ")[0]", Blockly.JavaScript.ORDER_FUNCTION_CALL];
        if ("GET_REMOVE" == e || "REMOVE" == e) {
            if (!Blockly.JavaScript.definitions_.lists_remove_from_end) {
                t = Blockly.JavaScript.variableDB_.getDistinctName("lists_remove_from_end", Blockly.Generator.NAME_TYPE), Blockly.JavaScript.lists_getIndex.lists_remove_from_end = t;
                var i = [];
                i.push("function " + t + "(list, x) {"), i.push("  x = list.length - x;"), i.push("  return list.splice(x, 1)[0];"), i.push("}"), Blockly.JavaScript.definitions_.lists_remove_from_end = i.join("\n")
            }
            if (o = Blockly.JavaScript.lists_getIndex.lists_remove_from_end + "(" + n + ", " + o + ")", "GET_REMOVE" == e) return [o, Blockly.JavaScript.ORDER_FUNCTION_CALL];
            if ("REMOVE" == e) return o + ";\n"
        }
    } else if ("RANDOM" == t) {
        if (Blockly.JavaScript.definitions_.lists_get_random_item || (t = Blockly.JavaScript.variableDB_.getDistinctName("lists_get_random_item", Blockly.Generator.NAME_TYPE), Blockly.JavaScript.lists_getIndex.random = t, i = [], i.push("function " + t + "(list, remove) {"), i.push("  var x = Math.floor(Math.random() * list.length);"), i.push("  if (remove) {"), i.push("    return list.splice(x, 1)[0];"), i.push("  } else {"), i.push("    return list[x];"), i.push("  }"), i.push("}"), Blockly.JavaScript.definitions_.lists_get_random_item = i.join("\n")), o = Blockly.JavaScript.lists_getIndex.random + "(" + n + ", " + ("GET" != e) + ")", "GET" == e || "GET_REMOVE" == e) return [o, Blockly.JavaScript.ORDER_FUNCTION_CALL];
        if ("REMOVE" == e) return o + ";\n"
    }
    throw "Unhandled combination (lists_getIndex)."
}, Blockly.JavaScript.lists_setIndex = function() {
    function e() {
        if (t.match(/^\w+$/)) return "";
        var e = Blockly.JavaScript.variableDB_.getDistinctName("tmp_list", Blockly.Variables.NAME_TYPE),
            o = "var " + e + " = " + t + ";\n";
        return t = e, o
    }
    var t = Blockly.JavaScript.valueToCode(this, "LIST", Blockly.JavaScript.ORDER_MEMBER) || "[]",
        o = this.getTitleValue("MODE") || "GET",
        n = this.getTitleValue("WHERE") || "FROM_START",
        i = Blockly.JavaScript.valueToCode(this, "AT", Blockly.JavaScript.ORDER_NONE) || "1",
        r = Blockly.JavaScript.valueToCode(this, "TO", Blockly.JavaScript.ORDER_ASSIGNMENT) || "null";
    if ("FIRST" == n) {
        if ("SET" == o) return t + "[0] = " + r + ";\n";
        if ("INSERT" == o) return t + ".unshift(" + r + ");\n"
    } else if ("LAST" == n) {
        if ("SET" == o) return n = e(), n + (t + "[" + t + ".length - 1] = " + r + ";\n");
        if ("INSERT" == o) return t + ".push(" + r + ");\n"
    } else if ("FROM_START" == n) {
        if (i = Blockly.isNumber(i) ? parseFloat(i) - 1 : i + " - 1", "SET" == o) return t + "[" + i + "] = " + r + ";\n";
        if ("INSERT" == o) return t + ".splice(" + i + ", 0, " + r + ");\n"
    } else if ("FROM_END" == n) {
        if (n = e(), "SET" == o) return n += t + "[" + t + ".length - " + i + "] = " + r + ";\n";
        if ("INSERT" == o) return n += t + ".splice(" + t + ".length - " + i + ", 0, " + r + ");\n"
    } else if ("RANDOM" == n) {
        if (n = e(), i = Blockly.JavaScript.variableDB_.getDistinctName("tmp_x", Blockly.Variables.NAME_TYPE), n += "var " + i + " = Math.floor(Math.random() * " + t + ".length);\n", "SET" == o) return n += t + "[" + i + "] = " + r + ";\n";
        if ("INSERT" == o) return n += t + ".splice(" + i + ", 0, " + r + ");\n"
    }
    throw "Unhandled combination (lists_setIndex)."
}, Blockly.JavaScript.lists_getSublist = function() {
    var e = Blockly.JavaScript.valueToCode(this, "LIST", Blockly.JavaScript.ORDER_MEMBER) || "[]",
        t = this.getTitleValue("WHERE1"),
        o = this.getTitleValue("WHERE2"),
        n = Blockly.JavaScript.valueToCode(this, "AT1", Blockly.JavaScript.ORDER_NONE) || "1",
        i = Blockly.JavaScript.valueToCode(this, "AT2", Blockly.JavaScript.ORDER_NONE) || "1";
    if ("FIRST" == t && "LAST" == o) e += ".concat()";
    else {
        if (!Blockly.JavaScript.definitions_.lists_get_sublist) {
            var r = Blockly.JavaScript.variableDB_.getDistinctName("lists_get_sublist", Blockly.Generator.NAME_TYPE);
            Blockly.JavaScript.lists_getSublist.func = r;
            var l = [];
            l.push("function " + r + "(list, where1, at1, where2, at2) {"), l.push("  function getAt(where, at) {"), l.push("    if (where == 'FROM_START') {"), l.push("      at--;"), l.push("    } else if (where == 'FROM_END') {"), l.push("      at = list.length - at;"), l.push("    } else if (where == 'FIRST') {"), l.push("      at = 0;"), l.push("    } else if (where == 'LAST') {"), l.push("      at = list.length - 1;"), l.push("    } else {"), l.push("      throw 'Unhandled option (lists_getSublist).';"), l.push("    }"), l.push("    return at;"), l.push("  }"), l.push("  at1 = getAt(where1, at1);"), l.push("  at2 = getAt(where2, at2) + 1;"), l.push("  return list.slice(at1, at2);"), l.push("}"), Blockly.JavaScript.definitions_.lists_get_sublist = l.join("\n")
        }
        e = Blockly.JavaScript.lists_getSublist.func + "(" + e + ", '" + t + "', " + n + ", '" + o + "', " + i + ")"
    }
    return [e, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}, Blockly.JavaScript.logic = {}, Blockly.JavaScript.controls_if = function() {
    for (var e = 0, t = Blockly.JavaScript.valueToCode(this, "IF" + e, Blockly.JavaScript.ORDER_NONE) || "false", o = Blockly.JavaScript.statementToCode(this, "DO" + e), n = "if (" + t + ") {\n" + o + "}", e = 1; e <= this.elseifCount_; e++) t = Blockly.JavaScript.valueToCode(this, "IF" + e, Blockly.JavaScript.ORDER_NONE) || "false", o = Blockly.JavaScript.statementToCode(this, "DO" + e), n += " else if (" + t + ") {\n" + o + "}";
    return this.elseCount_ && (o = Blockly.JavaScript.statementToCode(this, "ELSE"), n += " else {\n" + o + "}\n"), n + "\n"
}, Blockly.JavaScript.logic_compare = function() {
    var e = this.getTitleValue("OP"),
        e = Blockly.JavaScript.logic_compare.OPERATORS[e],
        t = "==" == e || "!=" == e ? Blockly.JavaScript.ORDER_EQUALITY : Blockly.JavaScript.ORDER_RELATIONAL,
        o = Blockly.JavaScript.valueToCode(this, "A", t) || "0",
        n = Blockly.JavaScript.valueToCode(this, "B", t) || "0";
    return [o + " " + e + " " + n, t]
}, Blockly.JavaScript.logic_compare.OPERATORS = {
    EQ: "==",
    NEQ: "!=",
    LT: "<",
    LTE: "<=",
    GT: ">",
    GTE: ">="
}, Blockly.JavaScript.logic_operation = function() {
    var e = "AND" == this.getTitleValue("OP") ? "&&" : "||",
        t = "&&" == e ? Blockly.JavaScript.ORDER_LOGICAL_AND : Blockly.JavaScript.ORDER_LOGICAL_OR,
        o = Blockly.JavaScript.valueToCode(this, "A", t) || "false",
        n = Blockly.JavaScript.valueToCode(this, "B", t) || "false";
    return [o + " " + e + " " + n, t]
}, Blockly.JavaScript.logic_negate = function() {
    var e = Blockly.JavaScript.ORDER_LOGICAL_NOT;
    return ["!" + (Blockly.JavaScript.valueToCode(this, "BOOL", e) || "false"), e]
}, Blockly.JavaScript.logic_boolean = function() {
    return ["TRUE" == this.getTitleValue("BOOL") ? "true" : "false", Blockly.JavaScript.ORDER_ATOMIC]
}, Blockly.JavaScript.logic_null = function() {
    return ["null", Blockly.JavaScript.ORDER_ATOMIC]
}, Blockly.JavaScript.logic_ternary = function() {
    var e = Blockly.JavaScript.valueToCode(this, "IF", Blockly.JavaScript.ORDER_CONDITIONAL) || "false",
        t = Blockly.JavaScript.valueToCode(this, "THEN", Blockly.JavaScript.ORDER_CONDITIONAL) || "null",
        o = Blockly.JavaScript.valueToCode(this, "ELSE", Blockly.JavaScript.ORDER_CONDITIONAL) || "null";
    return [e + " ? " + t + " : " + o, Blockly.JavaScript.ORDER_CONDITIONAL]
}, Blockly.JavaScript.loops = {}, Blockly.JavaScript.controls_repeat = function() {
    var e = Number(this.getTitleValue("TIMES")) || 0,
        t = Blockly.JavaScript.statementToCode(this, "DO");
    Blockly.JavaScript.INFINITE_LOOP_TRAP && (t = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + this.id + "'") + t);
    var o = Blockly.JavaScript.variableDB_.getDistinctName("count", Blockly.Variables.NAME_TYPE);
    return "for (var " + o + " = 0; " + o + " < " + e + "; " + o + "++) {\n" + t + "}\n"
}, Blockly.JavaScript.controls_repeat_ext = function() {
    var e = Blockly.JavaScript.valueToCode(this, "TIMES", Blockly.JavaScript.ORDER_ASSIGNMENT) || "0",
        t = Blockly.JavaScript.statementToCode(this, "DO");
    Blockly.JavaScript.INFINITE_LOOP_TRAP && (t = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + this.id + "'") + t);
    var o = "",
        n = Blockly.JavaScript.variableDB_.getDistinctName("count", Blockly.Variables.NAME_TYPE),
        i = e;
    return e.match(/^\w+$/) || Blockly.isNumber(e) || (i = Blockly.JavaScript.variableDB_.getDistinctName("repeat_end", Blockly.Variables.NAME_TYPE), o += "var " + i + " = " + e + ";\n"), o + ("for (var " + n + " = 0; " + n + " < " + i + "; " + n + "++) {\n" + t + "}\n")
}, Blockly.JavaScript.controls_whileUntil = function() {
    var e = "UNTIL" == this.getTitleValue("MODE"),
        t = Blockly.JavaScript.valueToCode(this, "BOOL", e ? Blockly.JavaScript.ORDER_LOGICAL_NOT : Blockly.JavaScript.ORDER_NONE) || "false",
        o = Blockly.JavaScript.statementToCode(this, "DO");
    return Blockly.JavaScript.INFINITE_LOOP_TRAP && (o = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + this.id + "'") + o), e && (t = "!" + t), "while (" + t + ") {\n" + o + "}\n"
}, Blockly.JavaScript.controls_for = function() {
    var e = Blockly.JavaScript.translateVarName(this.getTitleValue("VAR")),
        t = Blockly.JavaScript.valueToCode(this, "FROM", Blockly.JavaScript.ORDER_ASSIGNMENT) || "0",
        o = Blockly.JavaScript.valueToCode(this, "TO", Blockly.JavaScript.ORDER_ASSIGNMENT) || "0",
        n = Blockly.JavaScript.valueToCode(this, "BY", Blockly.JavaScript.ORDER_ASSIGNMENT) || "1",
        i = Blockly.JavaScript.statementToCode(this, "DO");
    Blockly.JavaScript.INFINITE_LOOP_TRAP && (i = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + this.id + "'") + i);
    var r;
    if (Blockly.isNumber(t) && Blockly.isNumber(o) && Blockly.isNumber(n)) {
        var l = parseFloat(t) <= parseFloat(o);
        r = "for (" + e + " = " + t + "; " + e + (l ? " <= " : " >= ") + o + "; " + e, e = Math.abs(parseFloat(n)), 1 === e ? r += l ? "++" : "--" : (r += (l ? " += " : " -= ") + e, 0 === e && (i = "  throw Infinity;\n" + i)), r += ") {\n" + i + "}\n"
    } else {
        r = "";
        var s = Blockly.JavaScript.variableDB_.getName(this.getTitleValue("VAR"), Blockly.Variables.NAME_TYPE),
            l = t;
        t.match(/^\w+$/) || Blockly.isNumber(t) || (l = Blockly.JavaScript.variableDB_.getDistinctName(s + "_start", Blockly.Variables.NAME_TYPE), r += "var " + l + " = " + t + ";\n"), t = o, o.match(/^\w+$/) || Blockly.isNumber(o) || (t = Blockly.JavaScript.variableDB_.getDistinctName(s + "_end", Blockly.Variables.NAME_TYPE), r += "var " + t + " = " + o + ";\n"), o = Blockly.JavaScript.variableDB_.getDistinctName(s + "_inc", Blockly.Variables.NAME_TYPE), r += "var " + o + " = ", r = Blockly.isNumber(n) ? r + (Math.abs(n) + ";\n") : r + ("Math.abs(" + n + ");\n"), r = r + ("if (" + l + " > " + t + ") {\n") + ("  " + o + " = -" + o + ";\n"), r += "}\n", r += "for (" + e + " = " + l + ";\n     " + o + " >= 0 ? " + e + " <= " + t + " : " + e + " >= " + t + ";\n     " + e + " += " + o + ") {\n" + i + "}\n"
    }
    return r
}, Blockly.JavaScript.controls_forEach = function() {
    var e = Blockly.JavaScript.translateVarName(this.getTitleValue("VAR")),
        t = Blockly.JavaScript.valueToCode(this, "LIST", Blockly.JavaScript.ORDER_ASSIGNMENT) || "[]",
        o = Blockly.JavaScript.statementToCode(this, "DO");
    Blockly.JavaScript.INFINITE_LOOP_TRAP && (o = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + this.id + "'") + o);
    var n = Blockly.JavaScript.variableDB_.getName(this.getTitleValue("VAR"), Blockly.Variables.NAME_TYPE),
        i = Blockly.JavaScript.variableDB_.getDistinctName(n + "_index", Blockly.Variables.NAME_TYPE);
    return t.match(/^\w+$/) ? e = "for (var " + i + " in  " + t + ") {\n" + ("  " + e + " = " + t + "[" + i + "];\n" + o) + "}\n" : (n = Blockly.JavaScript.variableDB_.getDistinctName(n + "_list", Blockly.Variables.NAME_TYPE), o = "  " + e + " = " + n + "[" + i + "];\n" + o, e = "var " + n + " = " + t + ";\nfor (var " + i + " in " + n + ") {\n" + o + "}\n"), e
}, Blockly.JavaScript.controls_flow_statements = function() {
    switch (this.getTitleValue("FLOW")) {
        case "BREAK":
            return "break;\n";
        case "CONTINUE":
            return "continue;\n"
    }
    throw "Unknown flow statement."
}, Blockly.JavaScript.math = {}, Blockly.JavaScript.math_number = function() {
    return [window.parseFloat(this.getTitleValue("NUM")) || 0, Blockly.JavaScript.ORDER_ATOMIC]
}, Blockly.JavaScript.math_arithmetic = function() {
    var e = this.getTitleValue("OP"),
        t = Blockly.JavaScript.math_arithmetic.OPERATORS[e],
        e = t[0],
        t = t[1],
        o = Blockly.JavaScript.valueToCode(this, "A", t) || "0",
        n = Blockly.JavaScript.valueToCode(this, "B", t) || "0";
    return e ? [o + e + n, t] : ["Math.pow(" + o + ", " + n + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL]
}, Blockly.JavaScript.math_arithmetic.OPERATORS = {
    ADD: [" + ", Blockly.JavaScript.ORDER_ADDITION],
    MINUS: [" - ", Blockly.JavaScript.ORDER_SUBTRACTION],
    MULTIPLY: [" * ", Blockly.JavaScript.ORDER_MULTIPLICATION],
    DIVIDE: [" / ", Blockly.JavaScript.ORDER_DIVISION],
    POWER: [null, Blockly.JavaScript.ORDER_COMMA]
}, Blockly.JavaScript.math_single = function() {
    var e, t, o = this.getTitleValue("OP");
    if ("NEG" == o) return t = Blockly.JavaScript.valueToCode(this, "NUM", Blockly.JavaScript.ORDER_UNARY_NEGATION) || "0", "-" == t[0] && (t = " " + t), ["-" + t, Blockly.JavaScript.ORDER_UNARY_NEGATION];
    switch (t = "SIN" == o || "COS" == o || "TAN" == o ? Blockly.JavaScript.valueToCode(this, "NUM", Blockly.JavaScript.ORDER_DIVISION) || "0" : Blockly.JavaScript.valueToCode(this, "NUM", Blockly.JavaScript.ORDER_NONE) || "0", o) {
        case "ABS":
            e = "Math.abs(" + t + ")";
            break;
        case "ROOT":
            e = "Math.sqrt(" + t + ")";
            break;
        case "LN":
            e = "Math.log(" + t + ")";
            break;
        case "EXP":
            e = "Math.exp(" + t + ")";
            break;
        case "POW10":
            e = "Math.pow(10," + t + ")";
            break;
        case "ROUND":
            e = "Math.round(" + t + ")";
            break;
        case "ROUNDUP":
            e = "Math.ceil(" + t + ")";
            break;
        case "ROUNDDOWN":
            e = "Math.floor(" + t + ")";
            break;
        case "SIN":
            e = "Math.sin(" + t + " / 180 * Math.PI)";
            break;
        case "COS":
            e = "Math.cos(" + t + " / 180 * Math.PI)";
            break;
        case "TAN":
            e = "Math.tan(" + t + " / 180 * Math.PI)"
    }
    if (e) return [e, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    switch (o) {
        case "LOG10":
            e = "Math.log(" + t + ") / Math.log(10)";
            break;
        case "ASIN":
            e = "Math.asin(" + t + ") / Math.PI * 180";
            break;
        case "ACOS":
            e = "Math.acos(" + t + ") / Math.PI * 180";
            break;
        case "ATAN":
            e = "Math.atan(" + t + ") / Math.PI * 180";
            break;
        default:
            throw "Unknown math operator: " + o
    }
    return [e, Blockly.JavaScript.ORDER_DIVISION]
}, Blockly.JavaScript.math_constant = function() {
    var e = this.getTitleValue("CONSTANT");
    return Blockly.JavaScript.math_constant.CONSTANTS[e]
}, Blockly.JavaScript.math_constant.CONSTANTS = {
    PI: ["Math.PI", Blockly.JavaScript.ORDER_MEMBER],
    E: ["Math.E", Blockly.JavaScript.ORDER_MEMBER],
    GOLDEN_RATIO: ["(1 + Math.sqrt(5)) / 2", Blockly.JavaScript.ORDER_DIVISION],
    SQRT2: ["Math.SQRT2", Blockly.JavaScript.ORDER_MEMBER],
    SQRT1_2: ["Math.SQRT1_2", Blockly.JavaScript.ORDER_MEMBER],
    INFINITY: ["Infinity", Blockly.JavaScript.ORDER_ATOMIC]
}, Blockly.JavaScript.math_number_property = function() {
    var e, t = Blockly.JavaScript.valueToCode(this, "NUMBER_TO_CHECK", Blockly.JavaScript.ORDER_MODULUS) || "0",
        o = this.getTitleValue("PROPERTY");
    if ("PRIME" == o) return Blockly.JavaScript.definitions_.isPrime || (o = Blockly.JavaScript.variableDB_.getDistinctName("isPrime", Blockly.Generator.NAME_TYPE), Blockly.JavaScript.logic_prime = o, e = [], e.push("function " + o + "(n) {"), e.push("  // http://en.wikipedia.org/wiki/Primality_test#Naive_methods"), e.push("  if (n == 2 || n == 3) {"), e.push("    return true;"), e.push("  }"), e.push("  // False if n is NaN, negative, is 1, or not whole."), e.push("  // And false if n is divisible by 2 or 3."), e.push("  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {"), e.push("    return false;"), e.push("  }"), e.push("  // Check all the numbers of form 6k +/- 1, up to sqrt(n)."), e.push("  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {"), e.push("    if (n % (x - 1) == 0 || n % (x + 1) == 0) {"), e.push("      return false;"), e.push("    }"), e.push("  }"), e.push("  return true;"), e.push("}"), Blockly.JavaScript.definitions_.isPrime = e.join("\n")), e = Blockly.JavaScript.logic_prime + "(" + t + ")", [e, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    switch (o) {
        case "EVEN":
            e = t + " % 2 == 0";
            break;
        case "ODD":
            e = t + " % 2 == 1";
            break;
        case "WHOLE":
            e = t + " % 1 == 0";
            break;
        case "POSITIVE":
            e = t + " > 0";
            break;
        case "NEGATIVE":
            e = t + " < 0";
            break;
        case "DIVISIBLE_BY":
            o = Blockly.JavaScript.valueToCode(this, "DIVISOR", Blockly.JavaScript.ORDER_MODULUS) || "0", e = t + " % " + o + " == 0"
    }
    return [e, Blockly.JavaScript.ORDER_EQUALITY]
}, Blockly.JavaScript.math_change = function() {
    var e = Blockly.JavaScript.valueToCode(this, "DELTA", Blockly.JavaScript.ORDER_ADDITION) || "0",
        t = Blockly.JavaScript.translateVarName(this.getTitleValue("VAR"));
    return t + " = (typeof " + t + " == 'number' ? " + t + " : 0) + " + e + ";\n"
}, Blockly.JavaScript.math_round = Blockly.JavaScript.math_single, Blockly.JavaScript.math_trig = Blockly.JavaScript.math_single, Blockly.JavaScript.math_on_list = function() {
    var e = this.getTitleValue("OP");
    switch (e) {
        case "SUM":
            e = Blockly.JavaScript.valueToCode(this, "LIST", Blockly.JavaScript.ORDER_MEMBER) || "[]", e += ".reduce(function(x, y) {return x + y;})";
            break;
        case "MIN":
            e = Blockly.JavaScript.valueToCode(this, "LIST", Blockly.JavaScript.ORDER_COMMA) || "[]", e = "Math.min.apply(null, " + e + ")";
            break;
        case "MAX":
            e = Blockly.JavaScript.valueToCode(this, "LIST", Blockly.JavaScript.ORDER_COMMA) || "[]", e = "Math.max.apply(null, " + e + ")";
            break;
        case "AVERAGE":
            if (!Blockly.JavaScript.definitions_.math_mean) {
                var t = Blockly.JavaScript.variableDB_.getDistinctName("math_mean", Blockly.Generator.NAME_TYPE);
                Blockly.JavaScript.math_on_list.math_mean = t, e = [], e.push("function " + t + "(myList) {"), e.push("  return myList.reduce(function(x, y) {return x + y;}) / myList.length;"), e.push("}"), Blockly.JavaScript.definitions_.math_mean = e.join("\n")
            }
            e = Blockly.JavaScript.valueToCode(this, "LIST", Blockly.JavaScript.ORDER_NONE) || "[]", e = Blockly.JavaScript.math_on_list.math_mean + "(" + e + ")";
            break;
        case "MEDIAN":
            Blockly.JavaScript.definitions_.math_median || (t = Blockly.JavaScript.variableDB_.getDistinctName("math_median", Blockly.Generator.NAME_TYPE), Blockly.JavaScript.math_on_list.math_median = t, e = [], e.push("function " + t + "(myList) {"), e.push("  var localList = myList.filter(function (x) {return typeof x == 'number';});"), e.push("  if (!localList.length) return null;"), e.push("  localList.sort(function(a, b) {return b - a;});"), e.push("  if (localList.length % 2 == 0) {"), e.push("    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;"), e.push("  } else {"), e.push("    return localList[(localList.length - 1) / 2];"), e.push("  }"), e.push("}"), Blockly.JavaScript.definitions_.math_median = e.join("\n")), e = Blockly.JavaScript.valueToCode(this, "LIST", Blockly.JavaScript.ORDER_NONE) || "[]", e = Blockly.JavaScript.math_on_list.math_median + "(" + e + ")";
            break;
        case "MODE":
            Blockly.JavaScript.definitions_.math_modes || (t = Blockly.JavaScript.variableDB_.getDistinctName("math_modes", Blockly.Generator.NAME_TYPE), Blockly.JavaScript.math_on_list.math_modes = t, e = [], e.push("function " + t + "(values) {"), e.push("  var modes = [];"), e.push("  var counts = [];"), e.push("  var maxCount = 0;"), e.push("  for (var i = 0; i < values.length; i++) {"), e.push("    var value = values[i];"), e.push("    var found = false;"), e.push("    var thisCount;"), e.push("    for (var j = 0; j < counts.length; j++) {"), e.push("      if (counts[j][0] === value) {"), e.push("        thisCount = ++counts[j][1];"), e.push("        found = true;"), e.push("        break;"), e.push("      }"), e.push("    }"), e.push("    if (!found) {"), e.push("      counts.push([value, 1]);"), e.push("      thisCount = 1;"), e.push("    }"), e.push("    maxCount = Math.max(thisCount, maxCount);"), e.push("  }"), e.push("  for (var j = 0; j < counts.length; j++) {"), e.push("    if (counts[j][1] == maxCount) {"), e.push("        modes.push(counts[j][0]);"), e.push("    }"), e.push("  }"), e.push("  return modes;"), e.push("}"), Blockly.JavaScript.definitions_.math_modes = e.join("\n")), e = Blockly.JavaScript.valueToCode(this, "LIST", Blockly.JavaScript.ORDER_NONE) || "[]", e = Blockly.JavaScript.math_on_list.math_modes + "(" + e + ")";
            break;
        case "STD_DEV":
            Blockly.JavaScript.definitions_.math_standard_deviation || (t = Blockly.JavaScript.variableDB_.getDistinctName("math_standard_deviation", Blockly.Generator.NAME_TYPE), Blockly.JavaScript.math_on_list.math_standard_deviation = t, e = [], e.push("function " + t + "(numbers) {"), e.push("  var n = numbers.length;"), e.push("  if (!n) return null;"), e.push("  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;"), e.push("  var variance = 0;"), e.push("  for (var j = 0; j < n; j++) {"), e.push("    variance += Math.pow(numbers[j] - mean, 2);"), e.push("  }"), e.push("  variance = variance / n;"), e.push("  return Math.sqrt(variance);"), e.push("}"), Blockly.JavaScript.definitions_.math_standard_deviation = e.join("\n")), e = Blockly.JavaScript.valueToCode(this, "LIST", Blockly.JavaScript.ORDER_NONE) || "[]", e = Blockly.JavaScript.math_on_list.math_standard_deviation + "(" + e + ")";
            break;
        case "RANDOM":
            Blockly.JavaScript.definitions_.math_random_item || (t = Blockly.JavaScript.variableDB_.getDistinctName("math_random_item", Blockly.Generator.NAME_TYPE), Blockly.JavaScript.math_on_list.math_random_item = t, e = [], e.push("function " + t + "(list) {"), e.push("  var x = Math.floor(Math.random() * list.length);"), e.push("  return list[x];"), e.push("}"), Blockly.JavaScript.definitions_.math_random_item = e.join("\n")), e = Blockly.JavaScript.valueToCode(this, "LIST", Blockly.JavaScript.ORDER_NONE) || "[]", e = Blockly.JavaScript.math_on_list.math_random_item + "(" + e + ")";
            break;
        default:
            throw "Unknown operator: " + e
    }
    return [e, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}, Blockly.JavaScript.math_modulo = function() {
    var e = Blockly.JavaScript.valueToCode(this, "DIVIDEND", Blockly.JavaScript.ORDER_MODULUS) || "0",
        t = Blockly.JavaScript.valueToCode(this, "DIVISOR", Blockly.JavaScript.ORDER_MODULUS) || "0";
    return [e + " % " + t, Blockly.JavaScript.ORDER_MODULUS]
}, Blockly.JavaScript.math_constrain = function() {
    var e = Blockly.JavaScript.valueToCode(this, "VALUE", Blockly.JavaScript.ORDER_COMMA) || "0",
        t = Blockly.JavaScript.valueToCode(this, "LOW", Blockly.JavaScript.ORDER_COMMA) || "0",
        o = Blockly.JavaScript.valueToCode(this, "HIGH", Blockly.JavaScript.ORDER_COMMA) || "Infinity";
    return ["Math.min(Math.max(" + e + ", " + t + "), " + o + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL]
}, Blockly.JavaScript.math_random_int = function() {
    var e = Blockly.JavaScript.valueToCode(this, "FROM", Blockly.JavaScript.ORDER_COMMA) || "0",
        t = Blockly.JavaScript.valueToCode(this, "TO", Blockly.JavaScript.ORDER_COMMA) || "0";
    if (!Blockly.JavaScript.definitions_.math_random_int) {
        var o = Blockly.JavaScript.variableDB_.getDistinctName("math_random_int", Blockly.Generator.NAME_TYPE);
        Blockly.JavaScript.math_random_int.random_function = o;
        var n = [];
        n.push("function " + o + "(a, b) {"), n.push("  if (a > b) {"), n.push("    // Swap a and b to ensure a is smaller."), n.push("    var c = a;"), n.push("    a = b;"), n.push("    b = c;"), n.push("  }"), n.push("  return Math.floor(Math.random() * (b - a + 1) + a);"), n.push("}"), Blockly.JavaScript.definitions_.math_random_int = n.join("\n")
    }
    return [Blockly.JavaScript.math_random_int.random_function + "(" + e + ", " + t + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL]
}, Blockly.JavaScript.math_random_float = function() {
    return ["Math.random()", Blockly.JavaScript.ORDER_FUNCTION_CALL]
}, Blockly.JavaScript.procedures = {}, Blockly.JavaScript.procedures_defreturn = function() {
    for (var e = Blockly.JavaScript.variableDB_.getName(this.getTitleValue("NAME"), Blockly.Procedures.NAME_TYPE), t = [], o = 0; o < this.parameterNames_.length; o++) t[o] = Blockly.JavaScript.variableDB_.getName(this.parameterNames_[o], Blockly.Variables.NAME_TYPE, Blockly.Variables.NAME_TYPE_LOCAL);
    o = Blockly.JavaScript.statementToCode(this, "STACK"), Blockly.JavaScript.INFINITE_LOOP_TRAP && (o = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + this.id + "'") + o);
    var n = Blockly.JavaScript.valueToCode(this, "RETURN", Blockly.JavaScript.ORDER_NONE) || "";
    return n && (n = "  return " + n + ";\n"), t = (Blockly.varsInGlobals ? "Globals." + e + " = function" : "function " + e) + "(" + t.join(", ") + ") {\n" + o + n + "}", t = Blockly.JavaScript.scrub_(this, t), Blockly.JavaScript.definitions_[e] = t, null
}, Blockly.JavaScript.procedures_defnoreturn = Blockly.JavaScript.procedures_defreturn, Blockly.JavaScript.procedures_callreturn = function() {
    for (var e = Blockly.JavaScript.variableDB_.getName(this.getTitleValue("NAME"), Blockly.Procedures.NAME_TYPE), t = [], o = 0; o < this.currentParameterNames_.length; o++) t[o] = Blockly.JavaScript.valueToCode(this, "ARG" + o, Blockly.JavaScript.ORDER_COMMA) || "null";
    return [(Blockly.varsInGlobals ? "Globals." : "") + e + "(" + t.join(", ") + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL]
}, Blockly.JavaScript.procedures_callnoreturn = function() {
    for (var e = Blockly.JavaScript.variableDB_.getName(this.getTitleValue("NAME"), Blockly.Procedures.NAME_TYPE), t = [], o = 0; o < this.currentParameterNames_.length; o++) t[o] = Blockly.JavaScript.valueToCode(this, "ARG" + o, Blockly.JavaScript.ORDER_COMMA) || "null";
    return (Blockly.varsInGlobals ? "Globals." : "") + e + "(" + t.join(", ") + ");\n"
}, Blockly.JavaScript.procedures_ifreturn = function() {
    var e = "if (" + (Blockly.JavaScript.valueToCode(this, "CONDITION", Blockly.JavaScript.ORDER_NONE) || "false") + ") {\n";
    if (this.hasReturnValue_) var t = Blockly.JavaScript.valueToCode(this, "VALUE", Blockly.JavaScript.ORDER_NONE) || "null",
        e = e + ("  return " + t + ";\n");
    else e += "  return;\n";
    return e + "}\n"
}, Blockly.JavaScript.functionalProcedures = {}, Blockly.JavaScript.functional_definition = function() {
    for (var e = Blockly.JavaScript.variableDB_.getName(this.getTitleValue("NAME"), Blockly.Procedures.NAME_TYPE), t = [], o = 0; o < this.parameterNames_.length; o++) t[o] = Blockly.JavaScript.variableDB_.getName(this.parameterNames_[o], Blockly.Variables.NAME_TYPE, Blockly.Variables.NAME_TYPE_LOCAL);
    o = Blockly.JavaScript.statementToCode(this, "STACK"), Blockly.JavaScript.INFINITE_LOOP_TRAP && (o = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + this.id + "'") + o);
    var n = Blockly.JavaScript.statementToCode(this, "RETURN", Blockly.JavaScript.ORDER_NONE) || "";
    return n && (n = "  return " + n + ";\n"), t = (Blockly.varsInGlobals ? "Globals." + e + " = function" : "function " + e) + "(" + t.join(", ") + ") {\nreturn " + o + n + "\n}", t = Blockly.JavaScript.scrub_(this, t), Blockly.JavaScript.definitions_[e] = t, null
}, Blockly.JavaScript.functional_call = function() {
    for (var e = Blockly.JavaScript.variableDB_.getName(this.getTitleValue("NAME"), Blockly.Procedures.NAME_TYPE), t = [], o = 0; o < this.currentParameterNames_.length; o++) t[o] = Blockly.JavaScript.statementToCode(this, "ARG" + o, Blockly.JavaScript.ORDER_COMMA) || "null";
    return (Blockly.varsInGlobals ? "Globals." : "") + e + "(" + t.join(", ") + ")"
}, Blockly.JavaScript.functional_pass = function() {
    var e = Blockly.JavaScript.variableDB_.getName(this.getTitleValue("NAME"), Blockly.Procedures.NAME_TYPE);
    return (Blockly.varsInGlobals ? "Globals." : "") + e
}, Blockly.JavaScript.procedural_to_functional_call = function() {
    for (var e = Blockly.JavaScript.variableDB_.getName(this.getTitleValue("NAME"), Blockly.Procedures.NAME_TYPE), t = [], o = 0; o < this.currentParameterNames_.length; o++) {
        var n = Blockly.JavaScript.valueToCode(this, "ARG" + o, Blockly.JavaScript.ORDER_COMMA);
        t[o] = n || "null"
    }
    return [(Blockly.varsInGlobals ? "Globals." : "") + e + "(" + t.join(", ") + ")", Blockly.JavaScript.ORDER_NONE]
}, Blockly.JavaScript.functionalExamples = {}, Blockly.JavaScript.functional_example = function() {
    var e = Blockly.JavaScript.statementToCode(this, "EXPECTED", Blockly.JavaScript.ORDER_NONE) || "null",
        t = Blockly.JavaScript.statementToCode(this, "ACTUAL", Blockly.JavaScript.ORDER_NONE) || "null";
    return ["(" + e + " == " + t + ")", 0]
}, Blockly.JavaScript.functionalParameters = {}, Blockly.JavaScript.functional_parameters_get = function() {
    return Blockly.JavaScript.translateVarName(this.getTitleValue("VAR"))
}, Blockly.JavaScript.text = function() {
    return [Blockly.JavaScript.quote_(this.getTitleValue("TEXT")), Blockly.JavaScript.ORDER_ATOMIC]
}, Blockly.JavaScript.text_join = function() {
    var e;
    if (0 == this.itemCount_) return ["''", Blockly.JavaScript.ORDER_ATOMIC];
    if (1 == this.itemCount_) return e = Blockly.JavaScript.valueToCode(this, "ADD0", Blockly.JavaScript.ORDER_NONE) || "''", ["String(" + e + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL];
    if (2 == this.itemCount_) {
        e = Blockly.JavaScript.valueToCode(this, "ADD0", Blockly.JavaScript.ORDER_NONE) || "''";
        var t = Blockly.JavaScript.valueToCode(this, "ADD1", Blockly.JavaScript.ORDER_NONE) || "''";
        return ["String(" + e + ") + String(" + t + ")", Blockly.JavaScript.ORDER_ADDITION]
    }
    for (e = Array(this.itemCount_), t = 0; t < this.itemCount_; t++) e[t] = Blockly.JavaScript.valueToCode(this, "ADD" + t, Blockly.JavaScript.ORDER_COMMA) || "''";
    return e = "[" + e.join(",") + "].join('')", [e, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}, Blockly.JavaScript.text_append = function() {
    var e = Blockly.JavaScript.translateVarName(this.getTitleValue("VAR")),
        t = Blockly.JavaScript.valueToCode(this, "TEXT", Blockly.JavaScript.ORDER_NONE) || "''";
    return e + " = String(" + e + ") + String(" + t + ");\n"
}, Blockly.JavaScript.text_length = function() {
    return [(Blockly.JavaScript.valueToCode(this, "VALUE", Blockly.JavaScript.ORDER_FUNCTION_CALL) || "''") + ".length", Blockly.JavaScript.ORDER_MEMBER]
}, Blockly.JavaScript.text_isEmpty = function() {
    return ["!" + (Blockly.JavaScript.valueToCode(this, "VALUE", Blockly.JavaScript.ORDER_MEMBER) || "''"), Blockly.JavaScript.ORDER_LOGICAL_NOT]
}, Blockly.JavaScript.text_indexOf = function() {
    var e = "FIRST" == this.getTitleValue("END") ? "indexOf" : "lastIndexOf",
        t = Blockly.JavaScript.valueToCode(this, "FIND", Blockly.JavaScript.ORDER_NONE) || "''";
    return [(Blockly.JavaScript.valueToCode(this, "VALUE", Blockly.JavaScript.ORDER_MEMBER) || "''") + "." + e + "(" + t + ") + 1", Blockly.JavaScript.ORDER_MEMBER]
}, Blockly.JavaScript.text_charAt = function() {
    var e = this.getTitleValue("WHERE") || "FROM_START",
        t = Blockly.JavaScript.valueToCode(this, "AT", Blockly.JavaScript.ORDER_UNARY_NEGATION) || "1",
        o = Blockly.JavaScript.valueToCode(this, "VALUE", Blockly.JavaScript.ORDER_MEMBER) || "''";
    switch (e) {
        case "FIRST":
            return [o + ".charAt(0)", Blockly.JavaScript.ORDER_FUNCTION_CALL];
        case "LAST":
            return [o + ".slice(-1)", Blockly.JavaScript.ORDER_FUNCTION_CALL];
        case "FROM_START":
            return t = Blockly.isNumber(t) ? parseFloat(t) - 1 : t + " - 1", [o + ".charAt(" + t + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL];
        case "FROM_END":
            return [o + ".slice(-" + t + ").charAt(0)", Blockly.JavaScript.ORDER_FUNCTION_CALL];
        case "RANDOM":
            return Blockly.JavaScript.definitions_.text_random_letter || (e = Blockly.JavaScript.variableDB_.getDistinctName("text_random_letter", Blockly.Generator.NAME_TYPE), Blockly.JavaScript.text_charAt.text_random_letter = e, t = [], t.push("function " + e + "(text) {"), t.push("  var x = Math.floor(Math.random() * text.length);"), t.push("  return text[x];"), t.push("}"), Blockly.JavaScript.definitions_.text_random_letter = t.join("\n")), o = Blockly.JavaScript.text_charAt.text_random_letter + "(" + o + ")", [o, Blockly.JavaScript.ORDER_FUNCTION_CALL]
    }
    throw "Unhandled option (text_charAt)."
}, Blockly.JavaScript.text_getSubstring = function() {
    var e = Blockly.JavaScript.valueToCode(this, "STRING", Blockly.JavaScript.ORDER_MEMBER) || "[]",
        t = this.getTitleValue("WHERE1"),
        o = this.getTitleValue("WHERE2"),
        n = Blockly.JavaScript.valueToCode(this, "AT1", Blockly.JavaScript.ORDER_NONE) || "1",
        i = Blockly.JavaScript.valueToCode(this, "AT2", Blockly.JavaScript.ORDER_NONE) || "1";
    if ("FIRST" != t || "LAST" != o) {
        if (!Blockly.JavaScript.definitions_.text_get_substring) {
            var r = Blockly.JavaScript.variableDB_.getDistinctName("text_get_substring", Blockly.Generator.NAME_TYPE);
            Blockly.JavaScript.text_getSubstring.func = r;
            var l = [];
            l.push("function " + r + "(text, where1, at1, where2, at2) {"), l.push("  function getAt(where, at) {"), l.push("    if (where == 'FROM_START') {"), l.push("      at--;"), l.push("    } else if (where == 'FROM_END') {"), l.push("      at = text.length - at;"), l.push("    } else if (where == 'FIRST') {"), l.push("      at = 0;"), l.push("    } else if (where == 'LAST') {"), l.push("      at = text.length - 1;"), l.push("    } else {"), l.push("      throw 'Unhandled option (text_getSubstring).';"), l.push("    }"), l.push("    return at;"), l.push("  }"), l.push("  at1 = getAt(where1, at1);"), l.push("  at2 = getAt(where2, at2) + 1;"), l.push("  return text.slice(at1, at2);"), l.push("}"), Blockly.JavaScript.definitions_.text_get_substring = l.join("\n")
        }
        e = Blockly.JavaScript.text_getSubstring.func + "(" + e + ", '" + t + "', " + n + ", '" + o + "', " + i + ")"
    }
    return [e, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}, Blockly.JavaScript.text_changeCase = function() {
    var e = this.getTitleValue("CASE");
    if (e = Blockly.JavaScript.text_changeCase.OPERATORS[e]) var t = Blockly.JavaScript.valueToCode(this, "TEXT", Blockly.JavaScript.ORDER_MEMBER) || "''",
        e = t + e;
    else Blockly.JavaScript.definitions_.text_toTitleCase || (e = Blockly.JavaScript.variableDB_.getDistinctName("text_toTitleCase", Blockly.Generator.NAME_TYPE), Blockly.JavaScript.text_changeCase.toTitleCase = e, t = [], t.push("function " + e + "(str) {"), t.push("  return str.replace(/\\S+/g,"), t.push("      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});"), t.push("}"), Blockly.JavaScript.definitions_.text_toTitleCase = t.join("\n")), t = Blockly.JavaScript.valueToCode(this, "TEXT", Blockly.JavaScript.ORDER_NONE) || "''", e = Blockly.JavaScript.text_changeCase.toTitleCase + "(" + t + ")";
    return [e, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}, Blockly.JavaScript.text_changeCase.OPERATORS = {
    UPPERCASE: ".toUpperCase()",
    LOWERCASE: ".toLowerCase()",
    TITLECASE: null
}, Blockly.JavaScript.text_trim = function() {
    var e = this.getTitleValue("MODE"),
        e = Blockly.JavaScript.text_trim.OPERATORS[e];
    return [(Blockly.JavaScript.valueToCode(this, "TEXT", Blockly.JavaScript.ORDER_MEMBER) || "''") + e, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}, Blockly.JavaScript.text_trim.OPERATORS = {
    LEFT: ".trimLeft()",
    RIGHT: ".trimRight()",
    BOTH: ".trim()"
}, Blockly.JavaScript.text_print = function() {
    return "window.alert(" + (Blockly.JavaScript.valueToCode(this, "TEXT", Blockly.JavaScript.ORDER_NONE) || "''") + ");\n"
}, Blockly.JavaScript.text_prompt = function() {
    var e = "window.prompt(" + Blockly.JavaScript.quote_(this.getTitleValue("TEXT")) + ")";
    return "NUMBER" == this.getTitleValue("TYPE") && (e = "window.parseFloat(" + e + ")"), [e, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}, Blockly.JavaScript.variables = {}, Blockly.JavaScript.variables_get = function() {
    return [Blockly.JavaScript.translateVarName(this.getTitleValue("VAR")), Blockly.JavaScript.ORDER_ATOMIC]
}, Blockly.JavaScript.variables_set = function() {
    var e = Blockly.JavaScript.valueToCode(this, "VALUE", Blockly.JavaScript.ORDER_ASSIGNMENT) || "0";
    return Blockly.JavaScript.translateVarName(this.getTitleValue("VAR")) + " = " + e + ";\n"
}, Blockly.JavaScript.parameters_get = Blockly.JavaScript.variables_get, Blockly.JavaScript.parameters_set = Blockly.JavaScript.variables_set;