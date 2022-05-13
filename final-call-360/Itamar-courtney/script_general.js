(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('begin', x, this);
                    k['call'](this);
                };
                w['bind']('begin', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"toolTipHorizontalAlign":"center","start":"this.init()","scrollBarMargin":2,"paddingRight":0,"backgroundOpacity":1,"paddingLeft":0,"scrollBarColor":"#000000","children":["this.MainViewer"],"horizontalAlign":"left","desktopMipmappingEnabled":false,"overflow":"hidden","borderRadius":0,"borderSize":0,"mediaActivationMode":"window","scrollBarOpacity":0.5,"backgroundPreloadEnabled":true,"definitions": [{"id":"media_EE3EFF22_E36B_CCD9_41E2_DD5975FB4EAF","video":[{"width":3840,"type":"video/mp4","framerate":29.98,"height":1920,"class":"Video360Resource","bitrate":16577,"url":"media/media_EE3EFF22_E36B_CCD9_41E2_DD5975FB4EAF.mp4","posterURL":"media/media_EE3EFF22_E36B_CCD9_41E2_DD5975FB4EAF_poster.jpg"},{"width":5376,"type":"video/mp4","framerate":29.98,"height":2688,"class":"Video360Resource","bitrate":32492,"url":"media/media_EE3EFF22_E36B_CCD9_41E2_DD5975FB4EAF_1.mp4","posterURL":"media/media_EE3EFF22_E36B_CCD9_41E2_DD5975FB4EAF_poster.jpg"}],"hfovMin":60,"label":trans('media_EE3EFF22_E36B_CCD9_41E2_DD5975FB4EAF.label'),"class":"Video360","loop":false,"hfov":360,"pitch":0,"partial":false,"data":{"label":"Courtney Itamar"},"hfovMax":140,"thumbnailUrl":"media/media_EE3EFF22_E36B_CCD9_41E2_DD5975FB4EAF_t.jpg","vfov":180},{"id":"mainPlayList","class":"PlayList","items":[{"end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","camera":"this.media_EE3EFF22_E36B_CCD9_41E2_DD5975FB4EAF_camera","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)","class":"Video360PlayListItem","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)","media":"this.media_EE3EFF22_E36B_CCD9_41E2_DD5975FB4EAF"}]},{"id":"media_EE3EFF22_E36B_CCD9_41E2_DD5975FB4EAF_camera","automaticZoomSpeed":10,"manualRotationSpeed":1791,"manualZoomSpeed":1,"class":"RotationalCamera","automaticRotationSpeed":13,"initialPosition":{"class":"RotationalCameraPosition","yaw":0.98,"pitch":4.11,"hfov":120}},{"playbackBarHeadBorderColor":"#000000","toolTipPaddingLeft":6,"progressBackgroundColor":["#FFFFFF"],"progressBarOpacity":1,"displayTooltipInSurfaceSelection":true,"toolTipFontFamily":"Arial","subtitlesVerticalAlign":"bottom","borderSize":0,"progressBottom":0,"progressHeight":10,"surfaceReticleOpacity":0.6,"progressBorderSize":0,"surfaceReticleColor":"#FFFFFF","playbackBarProgressOpacity":1,"toolTipFontSize":"1.11vmin","subtitlesTop":0,"subtitlesTextShadowVerticalLength":1,"progressBarBorderSize":0,"toolTipBorderRadius":3,"progressBarBorderRadius":0,"transitionMode":"blending","toolTipBorderSize":1,"subtitlesFontFamily":"Arial","toolTipTextShadowColor":"#000000","toolTipPaddingTop":4,"playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowOpacity":1,"toolTipDisplayTime":600,"progressBackgroundColorRatios":[0],"playbackBarHeadHeight":15,"progressBorderRadius":0,"playbackBarLeft":0,"toolTipFontStyle":"normal","subtitlesBorderSize":0,"playbackBarBackgroundOpacity":1,"paddingTop":0,"toolTipShadowVerticalLength":0,"paddingBottom":0,"shadow":false,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadShadowColor":"#000000","subtitlesFontColor":"#FFFFFF","surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"progressLeft":0,"playbackBarHeadShadow":true,"surfaceReticleSelectionOpacity":1,"playbackBarHeadBorderSize":0,"toolTipTextShadowOpacity":0,"propagateClick":false,"playbackBarHeadOpacity":1,"subtitlesOpacity":1,"playbackBarOpacity":1,"toolTipShadowSpread":0,"paddingLeft":0,"toolTipHorizontalAlign":"center","progressRight":0,"toolTipBorderColor":"#767676","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"displayTooltipInTouchScreens":true,"paddingRight":0,"toolTipShadowColor":"#333333","toolTipFontColor":"#606060","vrPointerSelectionColor":"#FF6600","playbackBarProgressBackgroundColorDirection":"vertical","toolTipTextShadowBlurRadius":3,"progressOpacity":1,"toolTipPaddingRight":6,"toolTipFontWeight":"normal","subtitlesBorderColor":"#FFFFFF","toolTipPaddingBottom":4,"playbackBarHeadShadowVerticalLength":0,"progressBarBackgroundColorDirection":"vertical","playbackBarHeight":10,"transitionDuration":500,"subtitlesPaddingLeft":5,"borderRadius":0,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesFontWeight":"normal","playbackBarHeadWidth":6,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarProgressBorderSize":0,"vrPointerSelectionTime":2000,"playbackBarBackgroundColorDirection":"vertical","subtitlesTextShadowColor":"#000000","subtitlesGap":0,"toolTipOpacity":1,"subtitlesEnabled":true,"width":"100%","playbackBarProgressBorderRadius":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarRight":0,"playbackBarProgressBorderColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"id":"MainViewer","playbackBarHeadShadowHorizontalLength":0,"progressBarBorderColor":"#000000","height":"100%","subtitlesTextDecoration":"none","playbackBarBorderSize":0,"playbackBarHeadShadowOpacity":0.7,"minHeight":50,"progressBarBackgroundColorRatios":[0],"minWidth":100,"subtitlesPaddingTop":5,"class":"ViewerArea","playbackBarHeadBorderRadius":0,"subtitlesBottom":50,"subtitlesTextShadowBlurRadius":0,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesFontSize":"3vmin","progressBackgroundColorDirection":"vertical","firstTransitionDuration":0,"playbackBarBorderColor":"#FFFFFF","subtitlesPaddingBottom":5,"playbackBarBorderRadius":0,"subtitlesBackgroundColor":"#000000","progressBackgroundOpacity":1,"subtitlesShadow":false,"toolTipShadowOpacity":1,"toolTipShadowBlurRadius":3,"subtitlesHorizontalAlign":"center","vrPointerColor":"#FFFFFF","progressBorderColor":"#000000","toolTipShadowHorizontalLength":0,"subtitlesPaddingRight":5,"progressBarBackgroundColor":["#3399FF"],"doubleClickAction":"toggle_fullscreen","data":{"name":"Main Viewer"}},{"id":"MainViewerPanoramaPlayer","aaEnabled":true,"viewerArea":"this.MainViewer","class":"PanoramaPlayer","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"surfaceSelectionEnabled":false,"touchControlMode":"drag_rotation","arrowKeysAction":"translate","gyroscopeVerticalDraggingEnabled":true,"zoomEnabled":true}],"width":"100%","layout":"absolute","vrPolyfillScale":0.75,"backgroundColor":["#FFFFFF"],"id":"rootPlayer","height":"100%","scrollBarVisible":"rollOver","minHeight":20,"paddingTop":0,"minWidth":20,"class":"Player","backgroundColorRatios":[0],"paddingBottom":0,"shadow":false,"contentOpaque":false,"defaultVRPointer":"laser","verticalAlign":"top","propagateClick":false,"gap":10,"scrollBarWidth":10,"scripts":{"keepCompVisible":TDV.Tour.Script.keepCompVisible,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"playAudioList":TDV.Tour.Script.playAudioList,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setValue":TDV.Tour.Script.setValue,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"isPanorama":TDV.Tour.Script.isPanorama,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getComponentByName":TDV.Tour.Script.getComponentByName,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"init":TDV.Tour.Script.init,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setLocale":TDV.Tour.Script.setLocale,"getKey":TDV.Tour.Script.getKey,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"mixObject":TDV.Tour.Script.mixObject,"resumePlayers":TDV.Tour.Script.resumePlayers,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getPixels":TDV.Tour.Script.getPixels,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"cloneCamera":TDV.Tour.Script.cloneCamera,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"quizShowScore":TDV.Tour.Script.quizShowScore,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"registerKey":TDV.Tour.Script.registerKey,"historyGoForward":TDV.Tour.Script.historyGoForward,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"openLink":TDV.Tour.Script.openLink,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizStart":TDV.Tour.Script.quizStart,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"quizFinish":TDV.Tour.Script.quizFinish,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getOverlays":TDV.Tour.Script.getOverlays,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"unregisterKey":TDV.Tour.Script.unregisterKey,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"existsKey":TDV.Tour.Script.existsKey,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"historyGoBack":TDV.Tour.Script.historyGoBack,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"initAnalytics":TDV.Tour.Script.initAnalytics,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"getMediaByName":TDV.Tour.Script.getMediaByName,"initQuiz":TDV.Tour.Script.initQuiz,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getMainViewer":TDV.Tour.Script.getMainViewer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setMapLocation":TDV.Tour.Script.setMapLocation,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"translate":TDV.Tour.Script.translate,"clone":TDV.Tour.Script.clone,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"shareSocial":TDV.Tour.Script.shareSocial,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"showWindow":TDV.Tour.Script.showWindow,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech},"downloadEnabled":false,"mouseWheelEnabled":true,"backgroundColorDirection":"vertical","mobileMipmappingEnabled":false,"data":{"name":"Player4927","textToSpeechConfig":{"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"pitch":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"volume":1,"rate":1},"defaultLocale":"en","locales":{"en":"locale/en.txt"}}};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.0.9.js.map
//Generated with v2021.0.9, Tue Sep 14 2021