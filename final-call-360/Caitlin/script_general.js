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
    var d = {"start":"this.init()","scrollBarVisible":"rollOver","gap":10,"mouseWheelEnabled":true,"children":["this.MainViewer"],"downloadEnabled":false,"backgroundOpacity":1,"paddingLeft":0,"borderRadius":0,"horizontalAlign":"left","borderSize":0,"defaultVRPointer":"laser","paddingRight":0,"data":{"name":"Player525","defaultLocale":"en","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"pitch":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"rate":1,"speechOnTooltip":false}},"width":"100%","desktopMipmappingEnabled":false,"backgroundColor":["#FFFFFF"],"id":"rootPlayer","class":"Player","propagateClick":false,"height":"100%","backgroundColorRatios":[0],"paddingTop":0,"scrollBarColor":"#000000","scrollBarOpacity":0.5,"scripts":{"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getComponentByName":TDV.Tour.Script.getComponentByName,"historyGoForward":TDV.Tour.Script.historyGoForward,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getMediaByName":TDV.Tour.Script.getMediaByName,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"mixObject":TDV.Tour.Script.mixObject,"setLocale":TDV.Tour.Script.setLocale,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"init":TDV.Tour.Script.init,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getKey":TDV.Tour.Script.getKey,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getPixels":TDV.Tour.Script.getPixels,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"playAudioList":TDV.Tour.Script.playAudioList,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"cloneCamera":TDV.Tour.Script.cloneCamera,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"registerKey":TDV.Tour.Script.registerKey,"existsKey":TDV.Tour.Script.existsKey,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"openLink":TDV.Tour.Script.openLink,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"isPanorama":TDV.Tour.Script.isPanorama,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"initQuiz":TDV.Tour.Script.initQuiz,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getMainViewer":TDV.Tour.Script.getMainViewer,"quizShowScore":TDV.Tour.Script.quizShowScore,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"historyGoBack":TDV.Tour.Script.historyGoBack,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizFinish":TDV.Tour.Script.quizFinish,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizStart":TDV.Tour.Script.quizStart,"unregisterKey":TDV.Tour.Script.unregisterKey,"shareSocial":TDV.Tour.Script.shareSocial,"textToSpeech":TDV.Tour.Script.textToSpeech,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"initAnalytics":TDV.Tour.Script.initAnalytics,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setValue":TDV.Tour.Script.setValue,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getOverlays":TDV.Tour.Script.getOverlays,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"showWindow":TDV.Tour.Script.showWindow,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setMapLocation":TDV.Tour.Script.setMapLocation,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"translate":TDV.Tour.Script.translate,"clone":TDV.Tour.Script.clone,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode},"paddingBottom":0,"contentOpaque":false,"mediaActivationMode":"window","scrollBarMargin":2,"backgroundColorDirection":"vertical","definitions": [{"id":"media_ED1BFDF1_E61F_A94D_41DA_FDAD1C8AB691","class":"Video360","partial":false,"label":trans('media_ED1BFDF1_E61F_A94D_41DA_FDAD1C8AB691.label'),"loop":true,"hfovMin":60,"vfov":180,"pitch":0,"hfovMax":140,"hfov":360,"data":{"label":"Caitlin Franzmann"},"thumbnailUrl":"media/media_ED1BFDF1_E61F_A94D_41DA_FDAD1C8AB691_t.jpg","video":[{"width":3840,"class":"Video360Resource","height":1920,"framerate":29.97,"type":"video/mp4","posterURL":"media/media_ED1BFDF1_E61F_A94D_41DA_FDAD1C8AB691_poster.jpg","bitrate":16572,"url":"media/media_ED1BFDF1_E61F_A94D_41DA_FDAD1C8AB691.mp4"},{"width":5376,"class":"Video360Resource","height":2688,"framerate":29.97,"type":"video/mp4","posterURL":"media/media_ED1BFDF1_E61F_A94D_41DA_FDAD1C8AB691_poster.jpg","bitrate":32481,"url":"media/media_ED1BFDF1_E61F_A94D_41DA_FDAD1C8AB691_1.mp4"}]},{"id":"media_ED1BFDF1_E61F_A94D_41DA_FDAD1C8AB691_camera","automaticRotationSpeed":10,"initialPosition":{"hfov":120,"class":"RotationalCameraPosition","yaw":-170.31,"pitch":3.41},"class":"RotationalCamera","manualZoomSpeed":1,"automaticZoomSpeed":10,"manualRotationSpeed":1800},{"displayTooltipInSurfaceSelection":true,"subtitlesEnabled":true,"borderRadius":0,"progressBarBackgroundColorDirection":"vertical","progressBarBorderColor":"#000000","shadow":false,"paddingLeft":0,"toolTipPaddingLeft":6,"subtitlesVerticalAlign":"bottom","playbackBarHeadBorderRadius":0,"progressBackgroundColorDirection":"vertical","progressRight":0,"playbackBarProgressBorderSize":0,"progressBarBackgroundColorRatios":[0],"playbackBarBackgroundColorDirection":"vertical","borderSize":0,"paddingRight":0,"subtitlesBorderColor":"#FFFFFF","subtitlesPaddingTop":5,"toolTipShadowColor":"#333333","progressBorderColor":"#000000","data":{"name":"Main Viewer"},"playbackBarRight":0,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipDisplayTime":600,"subtitlesTextDecoration":"none","progressBarBackgroundColor":["#3399FF"],"progressBarOpacity":1,"vrPointerSelectionColor":"#FF6600","playbackBarOpacity":1,"toolTipFontColor":"#606060","playbackBarProgressBackgroundColorRatios":[0],"playbackBarProgressBorderRadius":0,"subtitlesFontWeight":"normal","subtitlesTextShadowHorizontalLength":1,"toolTipFontSize":"1.11vmin","class":"ViewerArea","paddingTop":0,"toolTipOpacity":1,"toolTipShadowVerticalLength":0,"progressBorderSize":0,"toolTipPaddingBottom":4,"progressHeight":10,"paddingBottom":0,"progressBarBorderRadius":0,"progressBarBorderSize":0,"playbackBarHeadBorderColor":"#000000","progressBottom":0,"progressBackgroundColor":["#FFFFFF"],"subtitlesTop":0,"subtitlesTextShadowOpacity":1,"toolTipShadowSpread":0,"subtitlesPaddingBottom":5,"playbackBarProgressBackgroundColor":["#3399FF"],"minHeight":50,"playbackBarProgressBorderColor":"#000000","subtitlesTextShadowVerticalLength":1,"minWidth":100,"playbackBarHeadShadowColor":"#000000","playbackBarBorderColor":"#FFFFFF","progressBorderRadius":0,"doubleClickAction":"toggle_fullscreen","firstTransitionDuration":0,"toolTipHorizontalAlign":"center","playbackBarBottom":5,"subtitlesBackgroundOpacity":0.2,"progressLeft":0,"subtitlesOpacity":1,"toolTipFontWeight":"normal","subtitlesFontSize":"3vmin","transitionMode":"blending","progressBackgroundOpacity":1,"subtitlesTextShadowBlurRadius":0,"subtitlesPaddingLeft":5,"playbackBarBorderRadius":0,"playbackBarHeadShadow":true,"surfaceReticleColor":"#FFFFFF","playbackBarHeadShadowHorizontalLength":0,"surfaceReticleOpacity":0.6,"playbackBarHeight":10,"subtitlesGap":0,"subtitlesShadow":false,"toolTipBorderColor":"#767676","playbackBarHeadBorderSize":0,"playbackBarBorderSize":0,"playbackBarHeadShadowVerticalLength":0,"playbackBarProgressOpacity":1,"vrPointerSelectionTime":2000,"toolTipTextShadowBlurRadius":3,"subtitlesBottom":50,"surfaceReticleSelectionColor":"#FFFFFF","toolTipPaddingRight":6,"toolTipBackgroundColor":"#F6F6F6","id":"MainViewer","width":"100%","propagateClick":false,"surfaceReticleSelectionOpacity":1,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadShadowBlurRadius":3,"subtitlesPaddingRight":5,"height":"100%","toolTipBorderRadius":3,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadHeight":15,"playbackBarLeft":0,"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarHeadBackgroundColorDirection":"vertical","subtitlesFontFamily":"Arial","displayTooltipInTouchScreens":true,"subtitlesBorderSize":0,"toolTipShadowOpacity":1,"playbackBarHeadOpacity":1,"subtitlesFontColor":"#FFFFFF","toolTipTextShadowColor":"#000000","toolTipPaddingTop":4,"toolTipBorderSize":1,"subtitlesHorizontalAlign":"center","playbackBarBackgroundOpacity":1,"subtitlesBackgroundColor":"#000000","progressBackgroundColorRatios":[0],"toolTipTextShadowOpacity":0,"toolTipFontStyle":"normal","playbackBarHeadWidth":6,"playbackBarHeadBackgroundColor":["#111111","#666666"],"transitionDuration":500,"subtitlesTextShadowColor":"#000000","toolTipShadowHorizontalLength":0,"progressOpacity":1,"toolTipShadowBlurRadius":3,"toolTipFontFamily":"Arial","vrPointerColor":"#FFFFFF"},{"id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","aaEnabled":true,"arrowKeysAction":"translate","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"viewerArea":"this.MainViewer","zoomEnabled":true,"surfaceSelectionEnabled":false,"touchControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true},{"id":"mainPlayList","class":"PlayList","items":[{"end":"this.trigger('tourEnded')","class":"Video360PlayListItem","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)","camera":"this.media_ED1BFDF1_E61F_A94D_41DA_FDAD1C8AB691_camera","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)","player":"this.MainViewerPanoramaPlayer","media":"this.media_ED1BFDF1_E61F_A94D_41DA_FDAD1C8AB691"}]}],"mobileMipmappingEnabled":false,"scrollBarWidth":10,"minHeight":20,"vrPolyfillScale":0.75,"minWidth":20,"verticalAlign":"top","layout":"absolute","toolTipHorizontalAlign":"center","overflow":"hidden","backgroundPreloadEnabled":true,"shadow":false};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.0.9.js.map
//Generated with v2021.0.9, Wed Sep 15 2021