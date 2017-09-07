var webinarDetails= {
    init: function() {
        var b=$(".event-details__section__item.time");
        var a=b.data("webinarTime");
        var d=b.children(".time__label");
        var c=new Date(a);
        d.text(webinarDetails.formatTime(c))
    }
    ,
    formatTime:function(c) {
        var a="";
        var b=c.toString().match(/\(([A-Za-z\s].*)\)/);
        if(typeof b!="undefined"&&b!==null&&b.length>1) {
            a+=c.getHours()<=12?c.getHours(): c.getHours()-12;
            a+=":";
            a+=c.getMinutes()<10?"0"+c.getMinutes(): c.getMinutes();
            a+=" ";
            a+=c.getHours()<12?"AM": "PM";
            a+=" ";
            a+="( "+b[1]+" )"
        }
        else {
            a=c.toTimeString()
        }
        return a
    }
    ,
    needToInit:function() {
        return $(".event-details.webinar").length>0
    }
}
;
var twoColorText= {
    init: function() {
        $(".two-color-text__container__content__col__expand__link").on("click", function(a) {
            a.preventDefault();
            $(".two-color-text__container__content__col__text").toggleClass("active")
        }
        )
    }
    ,
    needToInit:function() {
        return $(".two-color-text__container").length>0
    }
}
;
var topNav= {
    $subNav: null, $subNavLinks: null, $subNavLinksLevel3: null, $overlay: null, $mobileSearchContainer: null, sticky: false, $el: null, hasSelectedItem: false, $inputSearch: null, init: function() {
        this.$subNav=$(".topnav__nav__container__items__item--industries__subnav");
        this.$subNavLinks=$(".topnav__nav__container__items__item--industries__subnav__item__link");
        this.$subNavLinksLevel3=$(".topnav__nav__container__items__item--industries__subnav__item__third-level");
        this.$subGlobalNav=$(".topnav__nav__container__items__item--global__subnav");
        this.$overlay=$(".topnav__nav__overlay");
        this.$mobileSearchContainer=$(".topnav__nav__container__search--mobile");
        this.$el=$(".topnav__nav");
        this.$inputSearch=$(".topnav__nav__container__search__form__input");
        this.hasSelectedItem=this.$el.data("selectedItem");
        $(".subnav__hook").on("click", this.toggleSubnav.bind(this));
        $(".button-back").on("click", this.goBack.bind(this));
        $(".topnav__nav__container__search__form").each(function(a) {
            var b=$(this).data("searchpage")+".html";
            $(this).attr("action", b)
        }
        );
        topNav.$inputSearch.keyup(function(a) {
            var c=$(this).parent().data("searchpage");
            var b=$(this).val();
            if(b==="") {
                c+=".q.html"
            }
            else {
                c+="."+b+".html"
            }
            $(this).parent().attr("action",
            c)
        }
        );
        $(".topnav__nav__container--mobile__items__item--search, .topnav__nav__container--mobile__items__item--search__icon ").on("click",
        function(a) {
            if(a.target!==this) {
                return
            }
            topNav.toggleSearch();
            topNav.$inputSearch.first().focus()
        }
        );
        $(".topnav__nav__container__items__item--industries__link").on("click",
        topNav.onIndustryMainButtonClick);
        $(".topnav__nav__container__items__item--global__link").on("click",
        topNav.onGlobalMainButtonClick);
        topNav.$overlay.on("click",
        function(a) {
            topNav.closeAll();
            if(MobileDetection.isMobile()) {
                topNav.$el.trigger("topnav-change")
            }
        }
        );
        topNav.$subNavLinks.on("mouseover",
        function(a) {
            topNav.$subNavLinksLevel3.removeClass("active");
            topNav.$subNav.find("li").addClass("inactive");
            var b=$(a.currentTarget).parent();
            b.removeClass("inactive");
            $(a.currentTarget).parent().find(".topnav__nav__container__items__item--industries__subnav__item__third-level").addClass("active")
        }
        );
        topNav.$subNavLinksLevel3.on("mouseleave",
        function(a) {
            $(a.currentTarget).parent().find(".topnav__nav__container__items__item--industries__subnav__item__third-level").removeClass("active")
        }
        );
        topNav.$el.on("topnav-change",
        function() {
            if(topNav.isNavExpanded()) {
                $(window).off("scroll");
                $("html,body").toggleClass("topnav--scroll-disabled")
            }
            else {
                $("html,body").toggleClass("topnav--scroll-disabled");
                $(window).on("scroll", function(a) {
                    if(topNav.isNavExpanded()) {
                        topNav.closeAll()
                    }
                    if($(this).scrollTop()>40&&!topNav.sticky) {
                        topNav.sticky=true;
                        $(".topnav__nav").addClass("topnav__nav--sticky-transition");
                        setTimeout(function() {
                            $(".topnav__nav").removeClass("topnav__nav--sticky-transition");
                            if($(this).scrollTop()>40) {
                                $(".topnav__nav").addClass("topnav__nav--sticky");
                                $("header").css( {
                                    "padding-top": "40px"
                                }
                                )
                            }
                        }
                        ,
                        100)
                    }
                    else {
                        if($(this).scrollTop()<40) {
                            $(".topnav__nav").removeClass("topnav__nav--sticky");
                            $("header").css( {
                                "padding-top": "0"
                            }
                            );
                            topNav.sticky=false
                        }
                    }
                }
                )
            }
        }
        );
        $(window).on("scroll",
        function(b) {
            if($(this).scrollTop()>0) {
                var a=$(this).scrollTop();
                topNav.$mobileSearchContainer.removeClass("active");
                if(topNav.isNavExpanded()) {
                    topNav.closeAll()
                }
            }
            if($(this).scrollTop()>40&&!topNav.sticky) {
                topNav.sticky=true;
                $(".topnav__nav").addClass("topnav__nav--sticky-transition");
                setTimeout(function() {
                    $(".topnav__nav").removeClass("topnav__nav--sticky-transition");
                    if($(this).scrollTop()>40) {
                        $(".topnav__nav").addClass("topnav__nav--sticky");
                        $("header").css( {
                            "padding-top": "40px"
                        }
                        )
                    }
                }
                ,
                100)
            }
            else {
                if($(this).scrollTop()<40) {
                    $(".topnav__nav").removeClass("topnav__nav--sticky");
                    $("header").css( {
                        "padding-top": "0"
                    }
                    );
                    topNav.sticky=false
                }
            }
        }
        );
        $("html, body").animate( {
            scrollTop: 0
        }
        ,
        0);
        if(MobileDetection.isMobileIOS()) {
            $(".topnav__nav__container--mobile__subnav--wrapper").addClass("mobile-ios");
            if(MobileDetection.isSafari()) {
                $(".topnav__nav__container--mobile__subnav--wrapper").addClass("mobile-ios-safari")
            }
        }
    }
    ,
    isNavExpanded:function() {
        return(topNav.$el.hasClass("topnav__nav__overlay--mobile--visible")||topNav.$overlay.hasClass("topnav__nav__overlay--visible"))
    }
    ,
    closeAll:function() {
        topNav.$el.find(".active").removeClass("active");
        topNav.$subNav.find("li").removeClass("inactive");
        topNav.$el.find(".topnav__nav__overlay--mobile--visible").removeClass("topnav__nav__overlay--mobile--visible");
        topNav.$overlay.removeClass("topnav__nav__overlay--visible");
        topNav.toggleMainNavState()
    }
    ,
    toggleMainNavState:function() {
        var a=$(".topnav__nav__container--mobile__items__item--menu__icon");
        if(a.is(":visible")) {
            a.removeClass("icon-close").addClass("fa fa-navicon")
        }
    }
    ,
    goBack:function(c) {
        c.stopPropagation();
        var b=$(c.currentTarget).closest(".active");
        b.removeClass("active");
        var a=b.closest(".active").children(".topnav__nav__overlay--mobile");
        if(!b.hasClass("first")) {
            a.toggleClass("topnav__nav__overlay--mobile--visible")
        }
    }
    ,
    toggleSearch:function() {
        topNav.$mobileSearchContainer.toggleClass("active")
    }
    ,
    toggleSubnav:function(c) {
        c.stopPropagation();
        if(topNav.$mobileSearchContainer.hasClass("active")) {
            topNav.$mobileSearchContainer.removeClass("active")
        }
        var d=$(c.currentTarget);
        var b=d.children(".topnav__nav__container--mobile__subnav");
        var a=d.parent().parent().children(".topnav__nav__overlay--mobile");
        if(b.hasClass("active")) {
            b.removeClass("active");
            if(d.hasClass("first")) {
                d.children("span").removeClass("icon-close").addClass("fa fa-navicon");
                topNav.$overlay.toggleClass("topnav__nav__overlay--visible");
                topNav.closeAll();
                topNav.$el.trigger("topnav-change")
            }
        }
        else {
            b.addClass("active");
            if(d.hasClass("first")) {
                d.children("span").removeClass("fa fa-navicon").addClass("icon-close");
                topNav.$overlay.toggleClass("topnav__nav__overlay--visible");
                topNav.$el.trigger("topnav-change");
                if(this.hasSelectedItem) {
                    d.find(".topnav__nav__container--mobile__subnav__item.selected-item").click()
                }
            }
            else {
                a.toggleClass("topnav__nav__overlay--mobile--visible")
            }
        }
    }
    ,
    onIndustryMainButtonClick:function(a) {
        a.preventDefault();
        topNav.$overlay.toggleClass("topnav__nav__overlay--visible");
        topNav.$subNav.toggleClass("active");
        topNav.$subGlobalNav.removeClass("active");
        topNav.$subNavLinksLevel3.removeClass("active")
    }
    ,
    onGlobalMainButtonClick:function(a) {
        a.preventDefault();
        topNav.$overlay.toggleClass("topnav__nav__overlay--visible");
        topNav.$subNav.removeClass("active");
        topNav.$subGlobalNav.toggleClass("active");
        topNav.$subNavLinksLevel3.removeClass("active")
    }
    ,
    needToInit:function() {
        return $(".topnav__nav").length>0
    }
}
;
var topicsTabContainer= {
    init: function() {
        var a=this;
        $(".topics-tab__container__tabs__topic").on("click", "a.topic-selection", function(h) {
            h.preventDefault();
            var g=$(this);
            var c=g.attr("href");
            var b=$(this).data("active-font-color");
            var f=$(this).closest(".topics-tab__container");
            var d=f.find(".topics-tab__container__tabs__topic a.topic-selection");
            d.removeClass("active");
            d.each(function() {
                var e=$(this);
                var i=e.data("nonactive-font-color");
                e.css("color", i)
            }
            );
            g.addClass("active");
            g.css("color",
            b);
            f.find(".topics-tab__topic").hide();
            $(c).css("opacity",
            0);
            $(c).fadeIn(150,
            function() {
                a.initSlickSliders(c);
                $(c).css("opacity", 1)
            }
            );
            a.showActivesTabs()
        }
        );
        $(".topics-tab__container").each(function() {
            var b=$(this);
            b.first(".topics-tab__topic").fadeIn(150, function() {
                a.initSlickSliders(".topics-tab__topic")
            }
            )
        }
        );
        a.showActivesTabs();
        $(window).resize(function() {
            a.showActivesTabs()
        }
        )
    }
    ,
    initSlickSliders:function(a) {
        if(!($(a).find(".carousel").hasClass("slick-initialized"))) {
            $(a).find(".carousel").on("init", function(c, b) {
                var d=$(b.$slides.get(0)).find("a.btn").attr("href");
                if(d!==undefined) {
                    $(this).siblings(".topics-tab__topic__shared").find(".topics-tab__topic__shared__learn-more a.btn").show(300);
                    $(this).siblings(".topics-tab__topic__shared").find(".topics-tab__topic__shared__learn-more a.btn").attr("href", d)
                }
                else {
                    $(this).siblings(".topics-tab__topic__shared").find(".topics-tab__topic__shared__learn-more a.btn").hide(300)
                }
            }
            );
            $(a).find(".carousel").on("afterChange",
            function(c,
            b,
            e,
            d) {
                var f=$(b.$slides.get(e)).find("a.btn").attr("href");
                if(f!==undefined) {
                    $(this).siblings(".topics-tab__topic__shared").find(".topics-tab__topic__shared__learn-more a.btn").show(300);
                    $(this).siblings(".topics-tab__topic__shared").find(".topics-tab__topic__shared__learn-more a.btn").attr("href", f)
                }
                else {
                    $(this).siblings(".topics-tab__topic__shared").find(".topics-tab__topic__shared__learn-more a.btn").hide(300)
                }
            }
            );
            $(a).find(".carousel").slick( {
                infinite:false, slidesToShow:3, slidesToScroll:3, arrows:false, autoplay:false, dots:false, responsive:[ {
                    breakpoint:840, settings: {
                        slidesToShow: 1, slidesToScroll: 1, dots: true
                    }
                }
                ]
            }
            )
        }
        $(".topics-tab__container").each(function() {
            var c=$(this);
            var b=c.find(".carousel")[0];
            if(b.slick) {
                b.slick.refresh()
            }
        }
        )
    }
    ,
    showActivesTabs:function() {
        $(".topic-selection.active").each(function() {
            var b=$(this).attr("href");
            var c=$(b);
            c.show();
            var a=c.find(".carousel")[0];
            if(a.slick) {
                a.slick.refresh()
            }
        }
        )
    }
    ,
    needToInit:function() {
        return $(".topics-tab__container").length>0&&(typeof $.fn.slick!=="undefined")
    }
}
;
var solutionNav= {
    init: function() {
        $(".solution-navbar__nav__mobile-controller__dropdown").on("click", solutionNav.toggleNavbar)
    }
    ,
    toggleNavbar:function() {
        $(".solution-navbar__nav__items").toggleClass("active")
    }
    ,
    needToInit:function() {
        return $(".solution-navbar__nav").length>0
    }
}
;
var Search= {
    params:[], defaultParams:["q", "industry", "ty", "so", "sg", "ap", "pt", "pu", 0, 10, "sb", "o"], paramsKeys: {
        RESULTSBY: 2, SORTBY: 10, ORDER: 11
    }
    ,
    sortByDOMQuery:'span[class="form-connector__select__menu__option__item"][data-sortby="#sortby"][data-order="#orderby"]',
    queryParams: {},
    defaultQueryParams: {
        SearchTerm: "", industry: "", resultsby: "", solution: "", segment: "", application: "", prodtype: "", produse: "", offset: "", limit: "", sortby: "", order: ""
    }
    ,
    pageIcons: {
        "pall/components/page/event": "icon-calendar", "pall/components/page/webinar": "icon-computer", "pall/components/page/press-release": "icon-globe", "pall/components/page/location": "icon-map-pin", "pall/components/page/rep-details": "icon-user"
    }
    ,
    weekday:["Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"],
    monthNames:["Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"],
    $topNavSearchForm:null,
    $topNavTerm:null,
    $resultsBy:null,
    $resultsBySelect:null,
    $resultsByItems:null,
    $refine:null,
    $term:null,
    $submit:null,
    $clear:null,
    $industry:null,
    $segments:null,
    $applications:null,
    $type:null,
    $use:null,
    $sortBy:null,
    $sortByMobile:null,
    $totalResults:null,
    $pagination:null,
    $itemsPerPage:null,
    $industryFilters:null,
    $filterExpand:null,
    itemsTotal:0,
    $el:null,
    availableLanguagesMap: {},
    gatedFormsMap: {},
    autocompleteSource:[],
    marketoPostUrl:"",
    marketoMunchkinid:"",
    aemReferralUrl:"",
    $noMatchingResults:null,
    numberOfIndustryFilters:0,
    searchPerformed:false,
    initializing:false,
    resetParams:function() {
        Search.params=Search.defaultParams.slice()
    }
    ,
    resetQueryParams:function() {
        Search.queryParams= {}
    }
    ,
    convertParamsToQuery:function() {
        Search.resetQueryParams();
        for(var a=0;
        a<Search.params.length;
        a++) {
            if(Search.params[a]!=Search.defaultParams[a]&&Search.params[a]!=""&&Search.params[a]!=null) {
                Search.queryParams[Object.keys(Search.defaultQueryParams)[a]]=Search.params[a]
            }
        }
        Search.queryParams.site=PallConfig.siteId
    }
    ,
    getParams:function() {
        return Search.params.join(".")
    }
    ,
    getQueryString:function() {
        var c="";
        var b="";
        for(var a in Search.queryParams) {
            if(Search.queryParams.hasOwnProperty(a)) {
                b=Search.queryParams[a];
                if(b!=""&&b!=null) {
                    c=c+a+"="+b+"&"
                }
            }
        }
        return c.slice(0,
        -1)
    }
    ,
    getQueryParams:function() {
        return Search.queryParams
    }
    ,
    getIcon:function(a) {
        return Search.pageIcons[a]
    }
    ,
    getDate:function(c,
    d,
    a) {
        c=new Date(c.replace("ART", "PST"));
        var e=(a!="pall/components/page/press-release"&&a!="pall/components/page/webinar");
        var b= {
            year: c.getFullYear(), month: Search.monthNames[c.getMonth()], fromDay: c.getDate(), fromDayOfWeek: Search.weekday[c.getDay()]
        }
        ;
        if(e) {
            d=new Date(d.replace("ART", "PST"));
            b.toDay=d.getDate();
            b.toDayOfWeek=Search.weekday[d.getDay()]
        }
        return b
    }
    ,
    isCompleted:function(b) {
        b=new Date(b.replace("ART", "PST"));
        var a=new Date();
        return a>b
    }
    ,
    getAssetLanguages:function(a) {
        $.each(a, function(b, c) {
            c.label=Search.availableLanguagesMap[c.extension]
        }
        );
        return a
    }
    ,
    getGatedFormId:function(a) {
        return Search.gatedFormsMap[a]
    }
    ,
    init:function() {
        Search.initializing=true;
        this.$topNavTerm=$("form.topnav__nav__container__search__form").find(".topnav__nav__container__search__form__input:visible");
        this.$resultsBy=$(".search-header__results-by .form-connector__select__menu__option__item");
        this.$resultsBySelect=$(".search-header__results-by .form-connector__select");
        this.$resultsByItems=$(".search-header__results-by .form-connector__select__menu__option__item");
        this.$refine=$(".search-header__refine .form-connector__select");
        this.$term=$("#filterByTerm");
        this.$submit=$(".search-header__submit");
        this.$clear=$(".search-filters__clear");
        this.$industry=$('.search-filter--industries ul > li input:checkbox[data-type="industry"]');
        this.$segments=$(".search-filter--segments ul > li");
        this.$applications=$(".search-filter--applications ul > li");
        this.$type=$(".search-filter--type ul > li");
        this.$use=$(".search-filter--use ul > li");
        this.$sortBy=$(".search-results__filtering__right__sort-by .form-connector__select__menu__option__item");
        this.$sortByMobile=$(".search-results__filtering__sortby-mobile a");
        this.$totalResults=$(".search-results__title__count");
        this.$pagination=$(".search-results__pagination");
        this.$itemsPerPage=$(".search-results__filtering__items-per-page a");
        this.$industryFilters=$(".search-filter--industries .search-filtering__options > ul");
        this.$filterExpand=$(".search-filtering__title .fa");
        this.$el=$(".search-results-component");
        this.$noMatchingResults=$(".search-results__no-matching-results");
        this.$filterIndustryDiv=$(".search-filter--industries");
        this.$filterTypeDiv=$(".search-filter--type");
        this.$filterUseDiv=$(".search-filter--use");
        Search.countTotalOfIndustryFilters();
        Search.resetParams();
        Search.$pagination.pagination( {
            items: Search.itemsTotal, itemsOnPage: Search.params[9], prevText: " ", nextText: " ", onPageClick: Search.changePage, displayedPages: window.matchMedia("(max-width: 839px)").matches?1: 5
        }
        );
        Search.$submit.on("click",
        function(a) {
            a.preventDefault();
            Search.updateTermParam();
            Search.submitSearch()
        }
        );
        Search.$clear.on("click",
        function(a) {
            a.preventDefault();
            Search.clearResults()
        }
        );
        Search.$term.on("focusout",
        function(a) {
            Search.updateTermParam()
        }
        );
        Search.$term.on("keyup",
        function(a) {
            if(a.keyCode==13) {
                $(".ui-autocomplete--search-header").hide();
                Search.updateTermParam();
                Search.submitSearch()
            }
        }
        );
        Search.$industry.on("change",
        function() {
            var a=$(this);
            if(!a.is(":checked")) {
                a.parent().find('input:checkbox[data-type="segment"]').prop("checked", false);
                a.parent().find('input:checkbox[data-type="application"]').prop("checked", false);
                Search.setSegments();
                Search.setApplications()
            }
            Search.industrySelectedHandler();
            Search.submitSearch()
        }
        );
        Search.$segments.find('input:checkbox[data-type="segment"]').on("change",
        function() {
            if(!$(this).is(":checked")) {
                $(this).parent().find('input:checkbox[data-type="application"]').prop("checked", false);
                Search.setApplications()
            }
            Search.setSegments();
            Search.submitSearch()
        }
        );
        Search.$applications.find('input:checkbox[data-type="application"]').on("change",
        function() {
            Search.setApplications();
            Search.submitSearch()
        }
        );
        Search.$type.find("input:checkbox").on("change",
        function() {
            Search.setType();
            Search.submitSearch()
        }
        );
        Search.$use.find("input:checkbox").on("change",
        function() {
            Search.setUse();
            Search.submitSearch()
        }
        );
        Search.$itemsPerPage.on("click",
        function(a) {
            a.preventDefault();
            Search.changeItemsPerPage(a, $(this).data("value"))
        }
        );
        Search.$filterExpand.on("click",
        function(a) {
            $(a.currentTarget).parent().parent().toggleClass("hidden")
        }
        );
        Search.$resultsBy.on("click",
        function(a) {
            Search.resultsByHandler(a);
            Search.$pagination.pagination("selectPage", 1)
        }
        );
        Search.$sortBy.on("click",
        function(a) {
            Search.sortByHandler(a);
            Search.$pagination.pagination("selectPage", 1)
        }
        );
        Search.$sortByMobile.on("click",
        function(a) {
            a.preventDefault();
            Search.$sortByMobile.removeClass("active");
            $(a.currentTarget).addClass("active");
            Search.sortByHandler(a);
            Search.$pagination.pagination("selectPage", 1)
        }
        );
        Search.$refine.on("click",
        function(a) {
            Search.triggerRefineSearch(a)
        }
        );
        Search.createHandlebarsAssetTemplates();
        Search.initializeAvailableLanguages();
        Search.initializeGatedFormsIds();
        Search.initializeMarketoData();
        Search.initializeAutoComplete();
        Search.checkExistingSearch();
        Search.$filterIndustryDiv.removeClass("hide");
        Search.$filterTypeDiv.removeClass("hide");
        Search.$filterUseDiv.removeClass("hide");
        Search.initializing=false
    }
    ,
    countTotalOfIndustryFilters:function() {
        if(Search.$industryFilters.children()) {
            Search.numberOfIndustryFilters=Search.$industryFilters.children().size()
        }
    }
    ,
    initializeAvailableLanguages:function() {
        var a=Search.$el.data("availableLanguages");
        Search.availableLanguagesMap.en="English";
        $.each(a, function(b, c) {
            Search.availableLanguagesMap[c.extension]=c.label
        }
        )
    }
    ,
    initializeGatedFormsIds:function() {
        var a=Search.$el.data("gatedFormsIds");
        $.each(a, function(b, c) {
            Search.gatedFormsMap[c.industry]=c.formid
        }
        )
    }
    ,
    initializeMarketoData:function() {
        Search.marketoPostUrl=Search.$el.data("gatedFormsUrl");
        Search.marketoMunchkinid=Search.$el.data("gatedFormsMunchkinid");
        Search.aemReferralUrl=Search.$el.data("gatedFormsAemreferralurl")
    }
    ,
    initializeAutoComplete:function() {
        var a=this;
        Search.$term.autocomplete( {
            source:Search.autocompleteSourceHandler, minLength:3, classes: {
                "ui-autocomplete": "ui-autocomplete--search-header"
            }
            ,
            appendTo:".search-header"
        }
        );
        Search.$topNavTerm.autocomplete( {
            source:Search.autocompleteSourceHandler, minLength:3, classes: {
                "ui-autocomplete": "ui-autocomplete--topnav"
            }
        }
        )
    }
    ,
    createHandlebarsAssetTemplates:function() {
        $(".hbs-asset-template").each(function() {
            var a=$(this);
            var c=a.attr("id");
            a.find(".form-connector--download__languages__language").each(function() {
                $(this).attr("href", "{{this.path}}")
            }
            );
            var b=a.html();
            a.empty();
            c=c.replace("template",
            "script");
            $("#"+c).append(b)
        }
        )
    }
    ,
    autocompleteSourceHandler:function(c,
    a) {
        if(Search.searchPerformed) {
            a([]);
            Search.searchPerformed=false;
            return
        }
        if(Search.autocompleteSource.length===0||c.term.length===3) {
            var b="/bin/pall/autocomplete."+PallConfig.siteId+"."+c.term;
            var d=$(".topnav__nav__container__search__form").data("industry");
            if(d&&!/^\s*$/.test(d)&&!d.startsWith("pall")) {
                b+="."+d
            }
            b+=".json";
            $.ajax( {
                method: "GET", url: b, dataType: "json"
            }
            ).done(function(e) {
                var f=e.results?e.results: [];
                Search.autocompleteSource=f;
                a(f.slice(0, 9));
                if(Search.searchPerformed) {
                    a([]);
                    Search.searchPerformed=false
                }
            }
            )
        }
        else {
            a($.ui.autocomplete.filter(Search.autocompleteSource, c.term).slice(0, 9))
        }
    }
    ,
    submitSearch:function() {
        var a=Search.$term.val();
        $(".search-results__title__term").html(a);
        Search.$pagination.pagination("selectPage", 1)
    }
    ,
    topNavSearchFormInit:function() {
        Search.$topNavSearchForm.on("submit", function(a) {
            a.preventDefault();
            Search.submitTopNavSearchForm(a)
        }
        )
    }
    ,
    updateTermParam:function() {
        var a=Search.$term.val();
        if(a==="") {
            Search.params[0]="q"
        }
        else {
            Search.params[0]=a
        }
    }
    ,
    resultsByHandler:function(d) {
        var c=$(d.currentTarget).html().toLowerCase();
        Search.params[Search.paramsKeys.RESULTSBY]=c=="all"?"": c;
        var a=Search.params[Search.paramsKeys.SORTBY]==="article_date"&&Search.params[Search.paramsKeys.ORDER]==="desc";
        var b=Search.params[Search.paramsKeys.SORTBY]==="sb"&&Search.params[Search.paramsKeys.ORDER]==="o";
        if(b||a) {
            if(c==="webinar"||c==="press release") {
                Search.params[Search.paramsKeys.SORTBY]="article_date";
                Search.params[Search.paramsKeys.ORDER]="desc"
            }
            else {
                if(c==="event") {
                    Search.params[Search.paramsKeys.SORTBY]="article_date";
                    Search.params[Search.paramsKeys.ORDER]="asc"
                }
                else {
                    if(c==="press-release") {
                        Search.params[Search.paramsKeys.SORTBY]="article_date";
                        Search.params[Search.paramsKeys.ORDER]="desc"
                    }
                }
            }
            Search.selectSortBy(Search.params)
        }
    }
    ,
    sortByHandler:function(c) {
        var b=$(c.currentTarget).attr("data-sortby");
        var a=$(c.currentTarget).attr("data-order");
        Search.params[Search.paramsKeys.SORTBY]=b;
        Search.params[Search.paramsKeys.ORDER]=a
    }
    ,
    triggerRefineSearch:function(a) {
        $(".search-filtering").toggle();
        $(".search-filters__clear").toggle()
    }
    ,
    industrySelectedHandler:function() {
        Search.$type.hide();
        Search.$use.hide();
        var a=0;
        Search.params[1]=Search.$industry.filter(":checked").map(function() {
            if($(this).attr("data-type")!="industry") {
                return
            }
            Search.$type.filter("[data-industries*="+this.value+"]").show();
            Search.$use.filter("[data-industries*="+this.value+"]").show();
            a++;
            return this.value.toLowerCase()
        }
        ).get().join(",");
        if(a==Search.numberOfIndustryFilters) {
            Search.params[1]="industry"
        }
        if(Search.params[1]==="") {
            Search.$type.show();
            Search.$use.show()
        }
    }
    ,
    clearResults:function() {
        Search.$term.val("");
        Search.$industry.filter(":checked").removeAttr("checked");
        Search.$segments.children("input:checkbox").filter(":checked").removeAttr("checked");
        Search.$applications.children("input:checkbox").filter(":checked").removeAttr("checked");
        Search.$type.find("input:checkbox").filter(":checked").removeAttr("checked");
        Search.$use.find("input:checkbox").filter(":checked").removeAttr("checked");
        if(Search.$resultsBy.html()!=="") {
            Search.$resultsBy.html(Search.$resultsBy.prev().html())
        }
        if(Search.$sortBy.html()!=="") {
            Search.$sortBy.html(Search.$sortBy.prev().html())
        }
        Search.resetParams();
        Search.resetQueryParams();
        Search.performSearch()
    }
    ,
    setSegments:function() {
        Search.params[4]=Search.$segments.find("input:checkbox").filter(":checked").map(function() {
            if($(this).attr("data-type")!="segment") {
                return
            }
            return this.value
        }
        ).get().join(",")
    }
    ,
    setApplications:function() {
        Search.params[5]=Search.$applications.find("input:checkbox").filter(":checked").map(function() {
            if($(this).attr("data-type")!="application") {
                return
            }
            return this.value
        }
        ).get().join(",")
    }
    ,
    setType:function() {
        Search.params[6]=Search.$type.find("input:checkbox").filter(":checked").map(function() {
            return this.value
        }
        ).get().join(",")
    }
    ,
    setUse:function() {
        Search.params[7]=Search.$use.find("input:checkbox").filter(":checked").map(function() {
            return this.value
        }
        ).get().join(",")
    }
    ,
    updateItemsTotal:function(a) {
        Search.itemsTotal=a;
        Search.$pagination.pagination("updateItems", Search.itemsTotal);
        Search.$totalResults.html(a)
    }
    ,
    changeItemsPerPage:function(b,
    a) {
        Search.$itemsPerPage.removeClass("active");
        $(b.currentTarget).addClass("active");
        Search.params[9]=a;
        Search.$pagination.pagination("updateItemsOnPage", a);
        Search.performSearch()
    }
    ,
    changePage:function(a,
    b) {
        if(b) {
            b.preventDefault()
        }
        Search.params[8]=(a-1)*Search.params[9];
        Search.performSearch()
    }
    ,
    checkExistingSearch:function() {
        Search.parseResults(window.jsonData);
        if(window.jsonData.filters||window.jsonData.qProcessed) {
            Search.checkExistingFilters(window.jsonData.filters)
        }
        Search.showOrHideFilters(window.jsonData.facets);
        Search.showOrHideSegmentsAndApplications();
        Search.selectSortBy(Search.windowSearchQuery());
        Search.convertParamsToQuery();
        Search.sendVirtualPageView()
    }
    ,
    windowSearchQuery:function() {
        var b=window.location.pathname.split("/").splice(-1).pop();
        var c=b.replace("search.", "").replace(".html", "").split(".");
        var a= {
            resultsby: Search.paramsKeys.RESULTSBY, sortby: Search.paramsKeys.SORTBY, order: Search.paramsKeys.ORDER
        }
        ;
        window.location.search.split("?").splice(-1).pop().split("&").map(function(d) {
            var e=d.split("=").shift();
            var f=d.split("=").splice(-1).pop();
            c[a[e]]=f
        }
        );
        return c
    }
    ,
    selectSortBy:function(c) {
        var a=Search.sortByDOMQuery;
        var d=c[Search.paramsKeys.SORTBY];
        var b=c[Search.paramsKeys.ORDER];
        a=a.replace("#sortby", d);
        a=a.replace("#orderby", b);
        $(a).trigger("click")
    }
    ,
    selectIndustries:function(a) {
        $.each(a, function(b, c) {
            Search.$industry.each(function(d) {
                var e=$(this);
                var f=e.val();
                if(f!==null&&c!==null&&c.toLowerCase()==f.toLowerCase()) {
                    e.attr("checked", true);
                    e.parent().show()
                }
                else {
                    e.attr("checked", false);
                    e.parent().hide()
                }
            }
            )
        }
        )
    }
    ,
    checkExistingFilters:function(d) {
        if(window.jsonData.qProcessed) {
            Search.params[0]=window.jsonData.qProcessed
        }
        if(d) {
            var a=d[0].industry.split(",");
            Search.selectIndustries(a);
            Search.industrySelectedHandler();
            if(d[1]) {
                var c="";
                if(d[1].sling_resource_type) {
                    c=d[1].sling_resource_type.substring(1)
                }
                else {
                    if(d[1].doctype&&d[1].doctype=="asset") {
                        c="brochure"
                    }
                    else {
                        if(d[1].doctype&&d[1].doctype=="product") {
                            c="product"
                        }
                    }
                }
                var b=Search.$resultsByItems.filter("[data-filter*="+c+"]");
                b.trigger("click")
            }
        }
    }
    ,
    showOrHideFilters:function(a) {
        if(a) {
            Search.showOrHideRelevantFilters(a.industry, Search.$industry, true, Search.$filterIndustryDiv);
            Search.showOrHideRelevantFilters(a.segment_ids, Search.$segments.find("input:checkbox"), false, null);
            Search.showOrHideRelevantFilters(a.application_ids, Search.$applications.find("input:checkbox"), false, null);
            Search.showOrHideRelevantFilters(a.product_type, Search.$type.find("input:checkbox"), true, Search.$filterTypeDiv);
            Search.showOrHideRelevantFilters(a.product_use, Search.$use.find("input:checkbox"), true, Search.$filterUseDiv)
        }
    }
    ,
    showOrHideSegmentsAndApplications:function() {
        $(".search-filters--industries").each(function(a) {
            if($(this).find("input:checkbox[data-type='industry']").is(":checked")) {
                $(this).find('input:checkbox[data-type="segment"]').each(function(b) {
                    if($.trim($(this).next().text())!=="") {
                        $(this).parent().show()
                    }
                }
                )
            }
        }
        );
        $(".search-filters--segments").each(function(a) {
            if($(this).find("input:checkbox[data-type='segment']").is(":checked")&&$.trim($(this).find('input:checkbox[data-type="segment"]').next())!=="") {
                $(this).find('input:checkbox[data-type="application"]').each(function(b) {
                    if($.trim($(this).next().text())!=="") {
                        $(this).parent().show()
                    }
                }
                );
                $(this).siblings().hide()
            }
        }
        );
        $(".search-filters--applications").each(function(a) {
            if($(this).find("input:checkbox[data-type='application']").is(":checked")) {
                $(this).siblings().hide()
            }
        }
        )
    }
    ,
    showOrHideRelevantFilters:function(a,
    d,
    b,
    e) {
        if(a) {
            var c=[], f=[];
            $.each(a, function(g, h) {
                if(h>0) {
                    c.push(g);
                    f.push(h)
                }
            }
            );
            d.each(function(g) {
                var i=$(this);
                var j=i.val();
                var h=false;
                $.each(c, function(l, k) {
                    if(j!==null&&k!==null&&k.toLowerCase()==j.toLowerCase()&&f[l]>0) {
                        i.next().html("("+f[l]+")");
                        if(b) {
                            i.parent().show()
                        }
                        else {
                            i.parent().hide()
                        }
                        h=true;
                        return false
                    }
                }
                );
                if(!h) {
                    i.parent().hide();
                    i.next().html("")
                }
            }
            );
            if(e) {
                if(c.length>0) {
                    e.show()
                }
                else {
                    e.hide()
                }
            }
        }
        else {
            d.each(function(g) {
                var h=$(this);
                h.parent().hide();
                h.next().html("")
            }
            );
            if(e) {
                e.hide()
            }
        }
    }
    ,
    submitTopNavSearchForm:function(d) {
        var a=$(d.currentTarget);
        var c=a.find(".topnav__nav__container__search__form__input").val();
        var b=a.data("searchpage");
        if(c&&!/^\s*$/.test(c)) {
            b+="."+c
        }
        b+=".html";
        window.location=b
    }
    ,
    parseResults:function(d) {
        var v=$("#template-product").html();
        var l=$("#template-page").html();
        var y=$("#template-location").html();
        var q=$("#template-solution-story").html();
        var k=Handlebars.compile(v);
        var g=Handlebars.compile(l);
        var p=Handlebars.compile(y);
        var r=Handlebars.compile(q);
        $(".search-results__container").empty();
        Search.updateItemsTotal(d.total);
        if(d.featured&&(d.featured.status||d.featured.status===undefined)) {
            var u=d.featured.featured_items.filter(function(i) {
                return i.status
            }
            );
            var a=u.length;
            if(a>0) {
                var z=Math.floor((Math.random()*a));
                var e=u[z];
                z=Math.floor((Math.random()*e.items.length));
                var c=e.items[z];
                var f=$("#template-featured-product").html();
                var s=Handlebars.compile(f);
                var n=s( {
                    desktopImage: c.desktopImage, mobileImage: c.mobileImage, link: c.link
                }
                );
                $(".search-results__container").append(n)
            }
        }
        Search.showOrHideFilters(d.facets);
        Search.showOrHideSegmentsAndApplications();
        var w=d.results;
        if(w) {
            Search.$noMatchingResults.hide();
            Search.$pagination.show();
            for(var t=0;
            t<w.length;
            t++) {
                var j;
                var x=w[t];
                switch(x.doctype) {
                    case"product":j=k( {
                        image: x.image, description: x.description, short_description: x.short_description?x.short_description.slice(0, 200): "", industry: x.industry_name, price: x.price, url: x.url+"&CatalogID="+x.industry, bgColor: x.industry_color?"bg-"+x.industry_color: "", textColor: x.industry_color?"color-"+x.industry_color: "", segments: x.segments?x.segments.slice(1, x.segments.length-1): "", application: x.application?x.application.slice(1, x.application.length-1): "", product_type: x.product_type?x.product_type.slice(1, x.product_type.length-1): "", product_use: x.product_use?x.product_use.slice(1, x.product_use.length-1): "", sku: x.sku
                    }
                    );
                    break;
                    case"page":switch(x.sling_resource_type) {
                        case"pall/components/page/solution-detail":j=r( {
                            title: x.title, description: x.description, url: x.url, industry: x.industry_name, bgColor: x.industry_color?"bg-"+x.industry_color: "", textColor: x.industry_color?"color-"+x.industry_color: "", icon: x.industry_icon?"icon-"+x.industry_icon: "icon-"+x.industry_color
                        }
                        );
                        break;
                        case"pall/components/page/location":j=p( {
                            title: x.title, description: x.about, url: x.url, industry: x.industry_name, bgColor: x.industry_color?"bg-"+x.industry_color: "", textColor: x.industry_color?"color-"+x.industry_color: "", icon: Search.getIcon(x.sling_resource_type)
                        }
                        );
                        break;
                        case"pall/components/page/rep-details":j=p( {
                            title: x.title, description: x.about, url: x.url, industry: x.industry_name, bgColor: x.industry_color?"bg-"+x.industry_color: "", textColor: x.industry_color?"color-"+x.industry_color: "", icon: Search.getIcon(x.sling_resource_type)
                        }
                        );
                        break;
                        default:j=g( {
                            title: x.title, description: x.description?x.description.slice(0, 150): "", industry: x.industry_name, url: x.url, urlPrefixText: x.url.slice(0, x.url.indexOf("/")), urlText: x.url.slice(x.url.indexOf("/"), x.url.length), bgColor: x.industry_color?"bg-"+x.industry_color: "", textColor: x.industry_color?"color-"+x.industry_color: "", icon: Search.getIcon(x.sling_resource_type), date: Search.getDate(x.article_date, x.end_date, x.sling_resource_type), showLearnMore: (x.sling_resource_type=="pall/components/page/press-release")||(x.sling_resource_type=="pall/components/page/event"&&Search.isCompleted(x.article_date)), showWatch: (x.sling_resource_type=="pall/components/page/webinar")&&Search.isCompleted(x.article_date)
                        }
                        );
                        break
                    }
                    break;
                    case"asset":var o="script-asset-"+x.industry;
                    var h=$("#"+o);
                    if(h.length===0) {
                        break
                    }
                    var b=h[0].children[0].outerHTML;
                    var m=Handlebars.compile(b);
                    j=m( {
                        title: x.title, description: x.description?x.description.slice(0, 150): "", industry: x.industry_name, url: x.id, bgColor: "bg-"+(x.industry_color?x.industry_color: "pallblue"), textColor: "color-"+(x.industry_color?x.industry_color: "pallblue"), icon: Search.getIcon(x.sling_resource_type), isGated: x.is_gated, postUrl: Search.marketoPostUrl, munchkinid: Search.marketoMunchkinid, aemReferralUrl: Search.aemReferralUrl, gatedFormId: x.industry?Search.getGatedFormId(x.industry): "", assetLanguages: Search.getAssetLanguages(x.languages)
                    }
                    );
                    break
                }
                $(".search-results__container").append(j);
                formConnector.init()
            }
        }
        else {
            Search.$noMatchingResults.show();
            Search.$pagination.hide()
        }
    }
    ,
    performSearch:function() {
        if(!Search.initializing) {
            Search.searchPerformed=true;
            Search.convertParamsToQuery();
            $(".loading-spinner").show();
            $.ajax( {
                method: "GET", url: "/bin/pall/search."+PallConfig.siteId+"."+Search.getParams()+".json", dataType: "json"
            }
            ).done(function(a) {
                Search.parseResults(a);
                $(".loading-spinner").hide()
            }
            );
            Search.sendVirtualPageView()
        }
    }
    ,
    sendVirtualPageView:function() {
        var a=Search.getQueryString();
        if(a.length>0) {
            a="?"+a
        }
        dataLayer.push( {
            event: "VirtualPageview", virtualPageURL: "/en/search.html"+a, virtualPageTitle: "Search"
        }
        )
    }
    ,
    needToInit:function() {
        Search.$topNavSearchForm=$("form.topnav__nav__container__search__form");
        Search.topNavSearchFormInit();
        return $(".search-results-component").length>0
    }
}
;
var repsList= {
    params: [], $map: null, $mapOverlay: null, $mapOverlaySlide: null, $regionFilter: null, $industryFilter: null, $resultsBy: null, $resultsByLabel: null, $resultsBySelected: null, $pagination: null, itemsTotal: 0, init: function() {
        this.$map=$(".reps__map");
        this.$mapOverlay=$(".locations__map__overlay");
        this.$mapOverlaySlide=$(".locations__map__overlay__slide");
        this.$regionFilter=$(".locations__filters a");
        this.$industryFilter=$(".locations__map__filters a");
        this.$resultsBy=$(".locations__filters .form-connector__select__menu__option__item");
        this.$resultsByLabel=$(".locations__filters .form-connector__select__title");
        this.$resultsBySelected=$(".locations__filters .form-connector__select__item");
        this.$pagination=$(".locations__pagination");
        formConnector.init();
        repsList.resetParams();
        repsList.initPagination();
        repsList.$mapOverlay.on("mouseenter", repsList.mapRegionSelectedHandler);
        repsList.$regionFilter.on("click", repsList.regionSelectedHandler);
        repsList.$industryFilter.on("click", repsList.industrySelectedHandler);
        repsList.$resultsBy.on("click", repsList.resultsByHandler);
        repsList.$map.on("mouseleave", repsList.mapLeaveHandler);
        repsList.checkExistingSearch();
        $("window").on("resize", repsList.init);
        if(MobileDetection.isMobile()) {
            $(".locations__map__image").remove();
            $(".locations__map__overlay__slide").remove();
            $(".locations__map").slick( {
                slidesToShow: 1, slidesToScroll: 1, arrows: false, dots: true, infinite: true, fade: false
            }
            )
        }
    }
    ,
    resetParams:function() {
        repsList.params=["industry", "region", "country", "offset", "10", "sortby", "order"]
    }
    ,
    getParams:function() {
        return repsList.params.join(".")
    }
    ,
    initPagination:function() {
        repsList.$pagination.pagination( {
            items: repsList.itemsTotal, itemsOnPage: repsList.params[4], prevText: " ", nextText: " ", onPageClick: repsList.changePage, displayedPages: window.matchMedia("(max-width: 839px)").matches?1: 5
        }
        )
    }
    ,
    changePage:function(a,
    b) {
        if(b) {
            b.preventDefault()
        }
        repsList.params[3]=(a-1)*repsList.params[4];
        repsList.performSearch()
    }
    ,
    updateItemsTotal:function(a) {
        repsList.itemsTotal=a;
        repsList.$pagination.pagination("updateItems", repsList.itemsTotal)
    }
    ,
    industrySelectedHandler:function(f) {
        f.preventDefault();
        repsList.resetParams();
        var d=$(this);
        var c=d.data("region");
        var g=d.data("country");
        var b=d.data("industry");
        var a=d.html();
        repsList.selectIndustry(b, a);
        repsList.selectRegion(c, true);
        repsList.params[0]=b;
        repsList.params[1]=c;
        repsList.params[2]=g;
        repsList.$pagination.pagination("selectPage", 1)
    }
    ,
    regionSelectedHandler:function(c) {
        c.preventDefault();
        repsList.resetParams();
        repsList.$regionFilter.removeClass("selected");
        var b=$(this);
        b.addClass("selected");
        if(repsList.$resultsBySelected.html()!=="") {
            repsList.$resultsBySelected.html("");
            repsList.$resultsByLabel.removeClass("hide")
        }
        var a=b.data("region");
        repsList.selectRegion(a);
        if(a=="region") {
            repsList.$mapOverlaySlide.css( {
                width: "0"
            }
            )
        }
        repsList.$pagination.pagination("selectPage",
        1)
    }
    ,
    mapRegionSelectedHandler:function(d) {
        var c=$(this);
        if(c.hasClass("locations__map__overlay--selected")) {
            return
        }
        repsList.$mapOverlay.removeClass("locations__map__overlay--selected");
        var a=c.css("left");
        var b=c.css("width");
        $(".locations__map__overlay__slide").css( {
            left: a, width: b
        }
        );
        c.addClass("locations__map__overlay--selected")
    }
    ,
    resultsByHandler:function(c) {
        var b=$(this);
        var a=b.data("value");
        repsList.params[0]=a;
        repsList.selectIndustry(a, null, true);
        repsList.$pagination.pagination("selectPage", 1)
    }
    ,
    mapLeaveHandler:function(a) {
        if(repsList.params[1]=="region") {
            repsList.$mapOverlay.removeClass("locations__map__overlay--selected");
            repsList.$mapOverlaySlide.css( {
                width: "0"
            }
            )
        }
    }
    ,
    selectRegion:function(b,
    a) {
        b=b.toLowerCase();
        repsList.params[1]=b;
        if(!a) {
            repsList.$mapOverlay.filter("[data-region="+b+"]").trigger("mouseenter");
            repsList.$mapOverlay.removeClass("locations__map__overlay--selected");
            repsList.$mapOverlay.filter("[data-region="+b+"]").addClass("locations__map__overlay--selected")
        }
        repsList.$regionFilter.removeClass("selected");
        repsList.$regionFilter.filter("[data-region="+b+"]").addClass("selected")
    }
    ,
    selectIndustry:function(c,
    b,
    a) {
        c=c.charAt(0).toUpperCase()+c.substr(1);
        repsList.params[0]=c;
        if(!a) {
            repsList.$resultsBySelected.html(b?b: c);
            repsList.$resultsByLabel.addClass("hide")
        }
        repsList.$industryFilter.removeClass("selected");
        repsList.$mapOverlay.filter(".locations__map__overlay--selected").find(repsList.$industryFilter).filter("[data-industry="+c+"]").addClass("selected")
    }
    ,
    selectExistingFilters:function(a) {
        var c=a.region;
        var b=a.industry;
        repsList.selectRegion(c);
        repsList.selectIndustry(b)
    }
    ,
    checkExistingSearch:function() {
        if(window.jsonData.results) {
            repsList.parseResults(window.jsonData);
            if(window.jsonData.filters.industry) {
                repsList.selectExistingFilters(window.jsonData.filters)
            }
        }
    }
    ,
    parseResults:function(e) {
        var c=$("#template-reps-item").html();
        var d=Handlebars.compile(c);
        $(".locations__results").empty();
        repsList.updateItemsTotal(e.total);
        var b=e.results;
        if(b) {
            for(var a=0;
            a<b.length;
            a++) {
                var f=b[a];
                var g=d( {
                    title: f.title, country: f.country, address1: f.address1, address2: f.address2, city: f.city, state: f.state, mobile: f.mobile, phone: f.phone, industry_color: f.industry_color, industry_icon: f.industry_icon?f.industry_icon: f.industry_color, url: f.url, repImage: f.repImage, repName: f.repName, repEmail: f.repEmail
                }
                );
                $(".locations__results").append(g)
            }
        }
    }
    ,
    performSearch:function() {
        $(".loading-spinner").show();
        $.ajax( {
            method: "GET", url: "/bin/pall/reps."+PallConfig.siteId+"."+repsList.getParams()+".json", dataType: "json"
        }
        ).done(function(a) {
            repsList.parseResults(a);
            $(".loading-spinner").hide()
        }
        )
    }
    ,
    needToInit:function() {
        return $(".reps__map").length>0
    }
}
;
var quilt= {
    animationSpeed: 230, $mainContainer: null, $quiltMain: null, $level1: null, $level2: null, $level1Tiles: null, $level2Tiles: null, $level1TilesWrapper: null, $level2TilesWrapper: null, isMobile: window.matchMedia("(max-width: 767px)").matches, init: function() {
        this.$mainContainer=$(".quilt--background");
        this.$quiltMain=$(".quilt-main");
        this.$level1=$(".quilt--level-1");
        this.$level2=$(".quilt--level-2");
        this.$level1Tiles=$(".quilt--level-1 .quilt__tile");
        this.$level2Tiles=$(".quilt--level-2 .quilt__tile");
        this.$level1TilesWrapper=$(".quilt__tile--level-1 > .quilt__tile__wrapper");
        this.$level2TilesWrapper=$(".quilt__tile--level-2 > .quilt__tile__wrapper");
        var a=this;
        bgImageHelper.setBgImageAndColor(a.$mainContainer, "bg-pallblue");
        this.$level1Tiles.on("click", function(b) {
            if($(b.target).hasClass("quilt__tile__button")||$(b.target).parents(".quilt__tile__button").length) {
                return
            }
            var c;
            if(a.isMobile) {
                c=$(this).data("level-id-mobile");
                a.animationSpeed=10
            }
            else {
                c=$(this).data("level-id-desktop")
            }
            if(!c) {
                return
            }
            c=$("#"+c);
            a.performAnimation(c)
        }
        );
        $(".quilt__return").on("click",
        function() {
            a.performAnimation(null)
        }
        );
        a.initDotdotdot();
        $(window).on("resize",
        a.initDotdotdot)
    }
    ,
    initDotdotdot:function() {
        var a=115;
        if(window.matchMedia("(min-width : 767px)").matches&&window.matchMedia("(max-width : 899px)").matches) {
            a=65;
            $(".quilt__tile__description--industry").dotdotdot( {
                height: 65
            }
            )
        }
        if(window.matchMedia("(min-width : 900px)").matches&&window.matchMedia("(max-width : 989px)").matches) {
            a=45
        }
        if(window.matchMedia("(min-width : 990px)").matches&&window.matchMedia("(max-width : 1119px)").matches) {
            a=55
        }
        if(window.matchMedia("(min-width : 1120px)").matches&&window.matchMedia("(max-width : 1179px)").matches) {
            a=75
        }
        if(window.matchMedia("(min-width : 1180px)").matches&&window.matchMedia("(max-width : 1290px)").matches) {
            a=95
        }
        $(".quilt__tile__description--is-product").dotdotdot( {
            height: a
        }
        )
    }
    ,
    needToInit:function() {
        return $(".quilt-container").length>0
    }
    ,
    performAnimation:function(d) {
        var a=this;
        a.$quiltMain.toggleClass("quilt-main--level-2");
        var c=d?d.find(".quilt__tile"): null;
        var b=d?d.find(".quilt__tile__wrapper"): null;
        var e=!!d;
        if(e) {
            a.$level1TilesWrapper.toggleClass("inactive")
        }
        else {
            a.$level2TilesWrapper.addClass("inactive")
        }
        setTimeout(function() {
            if(e) {
                a.$level1Tiles.toggleClass("inactive");
                a.$level1.toggleClass("inactive")
            }
            else {
                a.$level2Tiles.addClass("inactive");
                a.$level2.addClass("inactive")
            }
            if(a.isMobile) {
                a.$mainContainer.toggleClass("quilt--background-level-2")
            }
            setTimeout(function() {
                if(e) {
                    c.toggleClass("inactive");
                    bgImageHelper.setBgImageAndColor(a.$mainContainer, $(".quilt__return:not(.inactive)").data("color-key"));
                    if(!a.isMobile) {
                        a.$level2.masonry( {
                            itemSelector: ".quilt__tile--level-2"
                        }
                        )
                    }
                }
                else {
                    a.$level1Tiles.toggleClass("inactive");
                    bgImageHelper.setBgImageAndColor(a.$mainContainer, "bg-pallblue")
                }
                setTimeout(function() {
                    if(e) {
                        b.toggleClass("inactive");
                        a.$level2.toggleClass("inactive")
                    }
                    else {
                        a.$level1TilesWrapper.toggleClass("inactive");
                        a.$level1.toggleClass("inactive")
                    }
                }
                ,
                a.animationSpeed)
            }
            ,
            a.animationSpeed)
        }
        ,
        a.animationSpeed)
    }
}
;
var parallax= {
    parallaxIt: function() {
        var a=$(window);
        var b=window.pageYOffset||document.documentElement.scrollTop;
        a.on("scroll resize", function() {
            b=window.pageYOffset||document.documentElement.scrollTop
        }
        );
        $('[data-type="content"]').each(function(h,
        i) {
            var l=$(this);
            var c=parseInt(l.offset().top);
            var d;
            var f=(l.data("speed")||1);
            var k=l.height();
            var g=l.parent().hasClass("parallax-component--small");
            var j=window.matchMedia("(max-width: 480px)").matches;
            a.on("scroll resize", function() {
                d=c-b-100;
                if(g) {
                    d-=k
                }
                if(j) {
                    d-=100
                }
                if(d<0) {
                    d=0
                }
                l.css("top",
                d)
            }
            )
        }
        );
        $('[data-type="background"]').each(function() {
            var c=$(this);
            var g=parseInt(c.offset().top);
            var d;
            var f;
            var e=(c.data("speed")||0);
            a.on("scroll resize", function() {
                d=-((b-g)/e);
                f="50% "+d+"px";
                c.css( {
                    backgroundPosition: f
                }
                )
            }
            )
        }
        );
        a.trigger("scroll")
    }
    ,
    init:function() {
        $parallax=$(".parallax-component__image");
        $parallax.each(function() {
            var b=$(this);
            var a=b.data("image-src");
            b.css("background-image", 'url("'+a+'")')
        }
        );
        if(!(/iPhone|iPad|iPod/i.test(navigator.userAgent))) {
            this.parallaxIt()
        }
        else {
            $parallax.parent().addClass("parallax-component--ios")
        }
    }
    ,
    needToInit:function() {
        return $(".parallax-component").length>0
    }
}
;
var basicHeader= {
    init: function() {
        this.setUpRibbon();
        $(window).on("resize", this.setUpRibbon.bind(this));
        if(navigator.userAgent.toLowerCase().indexOf("firefox")>-1) {
            $(".header-basic__tactile").addClass("header-basic__tactile--firefox")
        }
    }
    ,
    setUpRibbon:function() {
        var i=$(".header-basic__content__text-box__container");
        var f=$(".header-basic__content").height();
        var e=i.offset().left;
        var h=30;
        var a=20;
        if(!window.matchMedia("(max-width: 839px)").matches) {
            h=h*2;
            a=30
        }
        var b=f-a;
        var j="polygon(0 0, 100% 0, 100% "+b+"px, "+(e+h*2)+"px "+b+"px, "+(e+h)+"px 100%, "+e+"px "+b+"px, 0 "+b+"px)";
        $(".header-basic__content").css("-webkit-clip-path",
        j);
        var c=$(".header__shadow__container");
        var d=$(".header__shadow");
        var g=$(".locations__map");
        c.css("margin-left",
        e-53);
        if(!Support.isClipPathSupported()) {
            c.hide();
            d.hide();
            g.css("margin-top", "-8px")
        }
    }
    ,
    needToInit:function() {
        return $(".header-basic__content__text-box__container").length>0
    }
}
;
var miniSolutionBlock= {
    init: function() {
        $(".mini-solution-block__container__solution__icon").hover(function() {
            var a=$(this).data("bgcolor");
            $(this).removeClass("bg-darken-"+a);
            $(this).addClass("bg-"+a)
        }
        ,
        function() {
            var a=$(this).data("bgcolor");
            $(this).removeClass("bg-"+a);
            $(this).addClass("bg-darken-"+a)
        }
        );
        $firstMiniSolution=$(".mini-solution-block__container").first();
        $firstMiniSolution.find(".mini-solution-block__container__solution").toggleClass("first-block")
    }
    ,
    needToInit:function() {
        return $(".mini-solution-block").length>0
    }
}
;
var locationsList= {
    params: [], $map: null, $mapOverlay: null, $mapOverlaySlide: null, $regionFilter: null, $industryFilter: null, $resultsBy: null, $resultsByLabel: null, $resultsBySelected: null, $resultsType: null, $pagination: null, itemsTotal: 0, locationType: "offices", init: function() {
        this.$map=$(".locations__map");
        this.$mapOverlay=$(".locations__map__overlay");
        this.$mapOverlaySlide=$(".locations__map__overlay__slide");
        this.$regionFilter=$(".locations__filters a");
        this.$industryFilter=$(".locations__map__filters a");
        this.$resultsBy=$(".locations__filters .form-connector__select__menu__option__item:not(.form-connector__select__menu__option__item--type)");
        this.$resultsByLabel=$(".locations__filters .form-connector__select__title:not(.form-connector__select__title--type)");
        this.$resultsBySelected=$(".locations__filters .form-connector__select__item:not(.form-connector__select__item--type)");
        this.$resultsType=$(".locations__filters .form-connector__select__menu__option__item.form-connector__select__menu__option__item--type");
        this.$pagination=$(".locations__pagination");
        this.locationType="offices";
        locationsList.resetParams();
        locationsList.initPagination();
        locationsList.$mapOverlay.on("mouseenter", locationsList.mapRegionSelectedHandler);
        locationsList.$regionFilter.on("click", locationsList.regionSelectedHandler);
        locationsList.$industryFilter.on("click", locationsList.industrySelectedHandler);
        locationsList.$resultsBy.on("click", locationsList.resultsByHandler);
        locationsList.$resultsType.on("click", locationsList.resultsTypeHandler);
        locationsList.$map.on("mouseleave", locationsList.mapLeaveHandler);
        locationsList.checkExistingSearch();
        $("window").on("resize", locationsList.init);
        if(MobileDetection.isMobile()) {
            $(".locations__map .locations__map__image").remove();
            $(".locations__map .locations__map__overlay__slide").remove();
            $(".locations__map").slick( {
                slidesToShow: 1, slidesToScroll: 1, arrows: false, dots: true, infinite: true, fade: false
            }
            )
        }
    }
    ,
    resetParams:function() {
        locationsList.params=["industry", "region", "offset", "10", "sortby", "order"]
    }
    ,
    getParams:function() {
        return locationsList.params.join(".")
    }
    ,
    initPagination:function() {
        locationsList.$pagination.pagination( {
            items: locationsList.itemsTotal, itemsOnPage: locationsList.params[3], prevText: " ", nextText: " ", onPageClick: locationsList.changePage, displayedPages: window.matchMedia("(max-width: 839px)").matches?1: 5
        }
        )
    }
    ,
    changePage:function(a,
    b) {
        if(b) {
            b.preventDefault()
        }
        locationsList.params[2]=(a-1)*locationsList.params[3];
        locationsList.performSearch()
    }
    ,
    updateItemsTotal:function(a) {
        locationsList.itemsTotal=a;
        locationsList.$pagination.pagination("updateItems", locationsList.itemsTotal)
    }
    ,
    industrySelectedHandler:function(f) {
        f.preventDefault();
        locationsList.resetParams();
        var d=$(this);
        var c=d.data("region");
        var b=d.data("industry");
        var a=d.html();
        locationsList.selectIndustry(b, a);
        locationsList.selectRegion(c, true);
        locationsList.params[0]=b;
        locationsList.params[1]=c;
        locationsList.$pagination.pagination("selectPage", 1)
    }
    ,
    regionSelectedHandler:function(c) {
        c.preventDefault();
        locationsList.resetParams();
        locationsList.$regionFilter.removeClass("selected");
        var b=$(this);
        b.addClass("selected");
        if(locationsList.$resultsBySelected.html()!="") {
            locationsList.$resultsBySelected.html("");
            locationsList.$resultsByLabel.removeClass("hide")
        }
        var a=b.data("region");
        locationsList.selectRegion(a);
        if(a=="region") {
            locationsList.$mapOverlaySlide.css( {
                width: "0"
            }
            )
        }
        locationsList.$pagination.pagination("selectPage",
        1)
    }
    ,
    mapRegionSelectedHandler:function(d) {
        var c=$(this);
        if(c.hasClass("locations__map__overlay--selected")) {
            return
        }
        locationsList.$mapOverlay.removeClass("locations__map__overlay--selected");
        var a=c.css("left");
        var b=c.css("width");
        $(".locations__map__overlay__slide").css( {
            left: a, width: b
        }
        );
        c.addClass("locations__map__overlay--selected")
    }
    ,
    resultsByHandler:function(c) {
        var b=$(this);
        var a=b.data("value");
        locationsList.params[0]=a;
        locationsList.selectIndustry(a, null, true);
        locationsList.$pagination.pagination("selectPage", 1)
    }
    ,
    resultsTypeHandler:function(b) {
        var a=$(this);
        locationsList.locationType=a.data("value");
        locationsList.performSearch()
    }
    ,
    mapLeaveHandler:function(a) {
        if(locationsList.params[1]=="region") {
            locationsList.$mapOverlay.removeClass("locations__map__overlay--selected");
            locationsList.$mapOverlaySlide.css( {
                width: "0"
            }
            )
        }
    }
    ,
    selectRegion:function(b,
    a) {
        var b=b.toLowerCase();
        locationsList.params[1]=b;
        if(!a) {
            locationsList.$mapOverlay.filter("[data-region="+b+"]").trigger("mouseenter");
            locationsList.$mapOverlay.removeClass("locations__map__overlay--selected");
            locationsList.$mapOverlay.filter("[data-region="+b+"]").addClass("locations__map__overlay--selected")
        }
        locationsList.$regionFilter.removeClass("selected");
        locationsList.$regionFilter.filter("[data-region="+b+"]").addClass("selected")
    }
    ,
    selectIndustry:function(d,
    b,
    a) {
        var d=d.charAt(0).toUpperCase()+d.substr(1);
        locationsList.params[0]=d;
        if(!a) {
            var c="";
            $(".form-connector__select__menu__option").each(function() {
                var e=$(this).find("span").data("value");
                if(e&&e.toLowerCase()===d.toLowerCase()) {
                    c=$(this).find("span").html();
                    return false
                }
            }
            );
            locationsList.$resultsBySelected.html(c?c:d);
            locationsList.$resultsByLabel.addClass("hide")
        }
        locationsList.$industryFilter.removeClass("selected");
        locationsList.$mapOverlay.filter(".locations__map__overlay--selected").find(locationsList.$industryFilter).filter("[data-industry="+d+"]").addClass("selected")
    }
    ,
    selectExistingFilters:function(a) {
        if(a.region) {
            locationsList.selectRegion(a.region)
        }
        if(a.industry) {
            locationsList.selectIndustry(a.industry)
        }
    }
    ,
    checkExistingSearch:function() {
        if(window.jsonData.results) {
            locationsList.parseResults(window.jsonData);
            if(window.jsonData.filters) {
                locationsList.selectExistingFilters(window.jsonData.filters)
            }
        }
    }
    ,
    parseResults:function(f) {
        var d=$("#template-location-item").html();
        var e=Handlebars.compile(d);
        $(".locations__results").empty();
        locationsList.updateItemsTotal(f.total);
        var c=f.results;
        if(c) {
            for(var b=0;
            b<c.length;
            b++) {
                var g=c[b];
                var h=e( {
                    title: locationsList.propertyAssign(g.title), country: locationsList.propertyAssign(g.country), address1: locationsList.propertyAssign(g.address1), address2: locationsList.propertyAssign(g.address2)?locationsList.propertyAssign(g.address2)+(locationsList.propertyAssign(g.state)?", ": ""): "", type: (locationsList.locationType==="offices")?"Pall Office": "Distributor", state: locationsList.propertyAssign(g.state), fax: locationsList.propertyAssign(g.fax), phone: locationsList.propertyAssign(g.phone), industry_color: locationsList.propertyAssign(g.industry_color)?locationsList.propertyAssign(g.industry_color): "pallblue", industry_icon: locationsList.propertyAssign(g.industry_icon)?locationsList.propertyAssign(g.industry_icon): locationsList.propertyAssign(g.industry_color), url: locationsList.propertyAssign(g.url)
                }
                );
                if(!g.url||typeof g.url==="undefined") {
                    var a=$(h).clone();
                    a.find(".locations__item__left a").each(function() {
                        $(this).addClass("locations__item__left__disabled-link")
                    }
                    );
                    h=$('<li class="locations__item">').append(a.html())
                }
                $(".locations__results").append(h)
            }
        }
    }
    ,
    propertyAssign:function(a) {
        if(locationsList.locationType=="offices") {
            return a
        }
        else {
            return decodeURIComponent(a)
        }
    }
    ,
    performSearch:function() {
        $(".loading-spinner").show();
        if(locationsList.locationType=="offices") {
            $.ajax( {
                method: "GET", url: "/bin/pall/locations."+PallConfig.siteId+"."+locationsList.getParams()+".json", dataType: "json"
            }
            ).done(function(a) {
                locationsList.parseResults(a)
            }
            )
        }
        else {
            locationsList.parseResults(locationsList.filterJSON(locationsList.distributorsList))
        }
        $(".loading-spinner").hide()
    }
    ,
    filterJSON:function(k) {
        var b=[];
        var j=0;
        var g=locationsList.params[0];
        var h=locationsList.params[1];
        var f=(locationsList.params[2]==="offset")?0: parseInt(locationsList.params[2]);
        var d=parseInt(locationsList.params[3]);
        var e= {
            "Aerospace-Defense-Marine": "aerospace", Biopharmaceuticals: "biopharma", "Chemicals-Polymer": "chemicals", "Food-and-Beverage": "food", "Industrial-Manufacturing": "industrial", Laboratory: "laboratory", Medical: "medical", Microelectronics: "microelec", "Oil-Gas": "oilgas", "Power-Generation": "power", "pall-corp": "pall"
        }
        ;
        if(g!=="industry") {
            b=k.filter(function(i) {
                return i.industry==e[g]
            }
            )
        }
        else {
            b=k
        }
        if(h!=="region") {
            b=b.filter(function(i) {
                return i.region==h
            }
            )
        }
        j=b.length;
        var a=b.slice(f,
        (f+d));
        for(var c=0;
        c<a.length;
        c++) {
            if(typeof a[c].industry==="undefined") {
                a[c].industry=="pall-corp"
            }
            a[c].industry_color=a[c].industry;
            a[c].industry_icon=a[c].industry
        }
        return {
            results: a, total: j
        }
    }
    ,
    needToInit:function() {
        return $(".locations__map").not(".reps__map").length>0
    }
    ,
    distributorsList:[ {
        url: "", industry: "biopharma", title: "Abastecimientos%20S.A.", address1: "Con.%20Perugorria%20S%2FN", address2: "", state: "Canelones", country: "Uruguay", region: "americas", phone: "%2B598%202364%208069", fax: "%2B598%202364%206707"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Abastecimientos%20S.A.", address1: "Con.%20Perugorria%20S%2FN", address2: "", state: "Canelones", country: "Uruguay", region: "americas", phone: "%2B598%202364%208069", fax: "%2B598%202364%206707"
    }
    ,
    {
        url: "", industry: "food", title: "ABASTECIMIENTOS%20S.R.L.", address1: "Camino%20Perugorria%20s%2Fn", address2: "", state: "Las%20Piedras%20Canelones", country: "Uruguay", region: "americas", phone: "%2B5982-364-8069", fax: "%2B5982-364-6707"
    }
    ,
    {
        url: "", industry: "biopharma", title: "Associated%20Capsules%20Group%20EURL", address1: "Cooperative%20immobiliere%20El%20Djamel%20no17%20route%20de%20Bouchbouk,%20Dely%20Ibrahim,%20Algiers%2016320", address2: "", state: "Alger", country: "Algeria", region: "emea", phone: "%2B213%20770278811", fax: "%2B213%20770799324"
    }
    ,
    {
        url: "", industry: "food", title: "ACTICO-%20Arab%20Countries%20Trading%20Company", address1: "Po%20Box%209183", address2: "", state: "Amman", country: "JORDAN", region: "emea", phone: "%2B%20962%206%20462%2015%2074", fax: "%2B%20962%206%20465%2054%206"
    }
    ,
    {
        url: "", industry: "aerospace", title: "Aeroespacio", address1: "Bosque%20de%20Duraznos%2069-502", address2: "", state: "CP", country: "Mexico", region: "americas", phone: "52-55-5596-8638", fax: "52-55-5596-8647"
    }
    ,
    {
        url: "", industry: "laboratory", title: "AGB%20Scientific%20Limited", address1: "Orion%20Business%20Campus", address2: "Northwest%20Business%20Park", state: "Dublin", country: "Ireland", region: "emea", phone: "%2B353%201%208822222", fax: ""
    }
    ,
    {
        url: "", industry: "medical", title: "Ahseco%20Peru%20SA", address1: "Av%20Arenales%20No.%20500-538-550", address2: "", state: "Lima", country: "Per%C3%BA", region: "americas", phone: "51-1-433-6516", fax: "51-1-433-5249"
    }
    ,
    {
        url: "", industry: "biopharma", title: "Akhnaton%20Trading%20%26%20Representation", address1: "9%20El%20Sharekat%20St,%20Opera,%20Cairo%2015116", address2: "", state: "Cairo", country: "Egypt", region: "emea", phone: "%2B20%202%20735%204945", fax: "%2B20%202%20736%202677"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Akhnaton%20Trading%20%26%20Representation", address1: "12%20Muntazah%20Street", address2: "", state: "Cairo", country: "Egypt", region: "emea", phone: "%2B20%202%20735%204945", fax: "%2B20%202%20736%202677"
    }
    ,
    {
        url: "", industry: "food", title: "Alcochim%20Maroc", address1: "34%2C%20rue%20du%206%20Octobre", address2: "3%20%C3%A8me%20%C3%A9tage%20-%20Appart.%20N%C2%B0%206", state: "Casablanca", country: "Morocco", region: "emea", phone: "%2B212%2022%2036%208713", fax: "%2B212%2022%2036%208715"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Alim%20Tech%20S.A.", address1: "", address2: "", state: "San%20Jose", country: "Costa%20Rica", region: "americas", phone: "%2B506%20293%208011", fax: "%2B506%20293%208067"
    }
    ,
    {
        url: "", industry: "chemicals", title: "AMRAN%20Establishment%20LLC", address1: "P.O.Box%3A%20919", address2: "", state: "Sultanate%20of%20Oman", country: "Oman", region: "emea", phone: "%2B968%2024%20688600", fax: "%2B968%2024%20697570"
    }
    ,
    {
        url: "", industry: "laboratory", title: "ANALITICA%20QUIMICA", address1: "Centro%20Comercial%20Molino", address2: "Kilometro%2015", state: "Zona", country: "Guatemala", region: "americas", phone: "%2B502%20595%205360", fax: "%2B502%20595%204464"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Analitica%20Salvadorena%2C%20SA%20de%20CV", address1: "Final%20Avenida%20Washington", address2: "Colonia%20Libertad%20No.%20104", state: "", country: "El%20Salvador", region: "americas", phone: "%2B503%20225%209401", fax: "%2B503%20235%201337"
    }
    ,
    {
        url: "", industry: "laboratory", title: "An%20Loc%20Service%20%26%20Trade%20Co.%2C%20Ltd.", address1: "383%20Tran%20Hung%20Dao%20Blvd.%2C", address2: "District%201%2C", state: "", country: "Vietnam", region: "asiapac", phone: "84.8.3920%203910", fax: "84.8.3920%201255"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Applied%20Filtration%20Services%20(Pty)%20Limited", address1: "Unit%205%2C%20Coventry%20Park", address2: "675%20Old%20Pretoria%20Main%20Road", state: "Johannesburg", country: "South%20Africa", region: "emea", phone: "%2B2711762%202465", fax: "%2B2711312%208482"
    }
    ,
    {
        url: "", industry: "power", title: "Applied%20Filtration%20Services%20(Pty)%20Limited", address1: "Unit%205%2C%20Coventry%20Park", address2: "675%20Old%20Pretoria%20Main%20Road", state: "Johannesburg", country: "South%20Africa", region: "emea", phone: "%2B2711762%202465", fax: "%2B2711312%208482"
    }
    ,
    {
        url: "", industry: "industrial", title: "Applied%20Energy%20Company", address1: "1205%20Venture%20Court", address2: "Suite%20100", state: "TX", country: "USA", region: "americas", phone: "214-355-4200", fax: "214-355-4201"
    }
    ,
    {
        url: "", industry: "industrial", title: "Applied%20Energy%20Company%2C%20LLC.", address1: "9421%20FM-2920%2C%20BLDG%2021", address2: "Tomball", state: "TX", country: "USA", region: "americas", phone: "281-351-2396", fax: "281-351-2670"
    }
    ,
    {
        url: "", industry: "industrial", title: "Applied%20Energy%20Company", address1: "5728%20Plauche%20Street%2C", address2: "Suite%20A", state: "LA", country: "USA", region: "americas", phone: "504-733-9015", fax: "504-734-5734"
    }
    ,
    {
        url: "", industry: "industrial", title: "Applied%20Energy%20Company", address1: "", address2: "", state: "", country: "USA", region: "americas", phone: "405.634.3636", fax: "405.634.3636"
    }
    ,
    {
        url: "", industry: "industrial", title: "Applied%20Energy%20Company", address1: "", address2: "", state: "Arkansas", country: "USA", region: "americas", phone: "800-624-4245", fax: ""
    }
    ,
    {
        url: "", industry: "industrial", title: "Applied%20Energy%20Company", address1: "", address2: "", state: "New%20Mexico", country: "USA", region: "americas", phone: "800-580-1171", fax: ""
    }
    ,
    {
        url: "", industry: "industrial", title: "Applied%20Energy%20Company", address1: "110%20Travis%20St.", address2: "Suite%20%23%20225", state: "Louisiana", country: "USA", region: "americas", phone: "337-839-9730", fax: "337-572-8017"
    }
    ,
    {
        url: "", industry: "biopharma", title: "AQUA%20QUIMICA%20SRL", address1: "Rio%20Acaray%20No.%202937", address2: "Esq.%20Bonifacio%20Ovando", state: "Lambare", country: "Paraguay", region: "americas", phone: "%2B595-2190-9261", fax: "%2B595-2190-9261"
    }
    ,
    {
        url: "", industry: "food", title: "AQUA%20QUIMICA%20SRL", address1: "Rio%20Acaray%20No.%202937", address2: "Esq.%20Bonifacio%20Ovando", state: "Lambare", country: "Paraguay", region: "americas", phone: "%2B595-2190-9261", fax: "%2B595-2190-9261"
    }
    ,
    {
        url: "", industry: "pallwater", title: "Aqua-Engineering%20JSC", address1: "Ordzhonikidze%20Street%2035%2C%20of.1306%2C%20mail%20box%2068", address2: "", state: "Novokuznetsk", country: "Russia", region: "emea", phone: "%2B7%203843%2046-62-66", fax: "%2B7%203843%2045%2004%2003"
    }
    ,
    {
        url: "", industry: "biopharma", title: "Arabian%20Trade%20House%20(ATH)", address1: "P.O.%20Box%206744", address2: "", state: "11452", country: "Saudi%20Arabia", region: "emea", phone: "%2B966%201%20419%201820", fax: "%2B966%201%20419%201831"
    }
    ,
    {
        url: "", industry: "food", title: "Arabian%20Trade%20House%20(ATH)", address1: "P.O.%20Box%206744", address2: "", state: "11452", country: "Saudi%20Arabia", region: "emea", phone: "%2B966%201%20419%201820", fax: "%2B966%201%20419%201831"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Arabian%20Trade%20House%20(ATH)", address1: "P.O.%20Box%206744", address2: "", state: "11452", country: "Saudi%20Arabia", region: "emea", phone: "%2B966%201%20419%201820", fax: "%2B966%201%20419%201831"
    }
    ,
    {
        url: "", industry: "medical", title: "Arabian%20Trade%20House%20(ATH)", address1: "P.O.%20Box%206744", address2: "", state: "11452", country: "Saudi%20Arabia", region: "emea", phone: "%2B966%201%20419%201820", fax: "%2B966%201%20419%201831"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Argenta%20Group%20LLC.", address1: "624%20Harriton%20Rd", address2: "", state: "PA", country: "USA", region: "americas", phone: "610-329-7892", fax: ""
    }
    ,
    {
        url: "", industry: "laboratory", title: "Arquimed", address1: "828%20Arturo%20Prat%20Str.", address2: "", state: "Santiago", country: "Chile", region: "americas", phone: "%2B562%20634%206266", fax: ""
    }
    ,
    {
        url: "", industry: "chemicals", title: "AWC%2C%20Inc.", address1: "3711%20Lakeside%20Ct.", address2: "", state: "AL", country: "USA", region: "americas", phone: "251%20666%207050", fax: "251%20666%200620"
    }
    ,
    {
        url: "", industry: "chemicals", title: "AWC%2C%20Inc.", address1: "6655%20Exchequer%20Drive", address2: "", state: "LA", country: "USA", region: "americas", phone: "225%20752%201100", fax: "225%20751%209029"
    }
    ,
    {
        url: "", industry: "chemicals", title: "AWC%2C%20Inc.", address1: "Filtration%20Center%20of%20Excellence", address2: "4747%20South%20Pinemount%20%23300", state: "TX", country: "USA", region: "americas", phone: "800.292.4636", fax: "832.553.9499"
    }
    ,
    {
        url: "", industry: "pallwater", title: "Baker%20%26%20Associates", address1: "1284%20SOM%20Center%20Rd.%20%23215", address2: "", state: "Ohio", country: "USA", region: "americas", phone: "440-829-8405", fax: ""
    }
    ,
    {
        url: "", industry: "chemicals", title: "BEAMCO%20NIGERIA%20LIMITED", address1: "No.%2033%20Kofo%20Abayomi%20Avenue", address2: "Corner%20of%202%20Itapeju%20street", state: "Lagos", country: "Nigeria", region: "emea", phone: "%2B234-1-4600534", fax: "%2B234-1-5450000"
    }
    ,
    {
        url: "", industry: "power", title: "BEAMCO%20NIGERIA%20LIMITED", address1: "No.%2033%20Kofo%20Abayomi%20Avenue", address2: "Corner%20of%202%20Itapeju%20street", state: "Lagos", country: "Nigeria", region: "emea", phone: "%2B234-1-4600534", fax: "%2B234-1-5450000"
    }
    ,
    {
        url: "", industry: "biopharma", title: "Belpharm%20CSKL%20Ltd", address1: "Logoysky%20trakt%2022a,%2036", address2: "Minsk%2022090", state: "", country: "Belarus", region: "emea", phone: "%2B375%20(17)%20395-41-09", fax: "%2B375%20(17)%20395%2041%2000"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Beijing%20North%20Tong%20Zheng%20Biotech%20Develop.%20Company", address1: "", address2: "", state: "", country: "North%20China", region: "asiapac", phone: "%2B86%2010%206344%201426", fax: ""
    }
    ,
    {
        url: "", industry: "laboratory", title: "Bio%20Laboratories%20Pte%20Ltd", address1: "10%20Ubi%20Crescent%20Lobby%20A%20%2306-02%20Ubi%20Techpark%20", address2: "", state: "Singapore 408564", country: "Singapore", region: "asiapac", phone: "(65)%206713%205283", fax: "(65)%206846%207477"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Bio-Gene%20Technology%20Ltd.", address1: "Unit%2016%2C%2020F%2C%20Grandtech%20Centre%2C", address2: "8%20On%20Ping%20Street", state: "Shatin", country: "Hong%20Kong", region: "asiapac", phone: "%2B852%202646%206101", fax: "%2B852%202686%208806"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Biotech%20A.S.", address1: "V%20Ochozu%2020", address2: "106%2000", state: "Praha", country: "Czech%20Republic", region: "emea", phone: "%2B420%202%20769%20188", fax: ""
    }
    ,
    {
        url: "", industry: "laboratory", title: "Biotech%20s.r.o.", address1: "", address2: "", state: "Dubravska%20cesta", country: "Bratislava%20Slovakia", region: "emea", phone: "%2B421%207%2054%2077%2044%2088", fax: "%2B421%207%2054%2077%2044%2088"
    }
    ,
    {
        url: "", industry: "medical", title: "Blood%20Transfusion%20Services", address1: "142%20Lardphrao%2080%20(Soi%20Chantima)", address2: "", state: "Bangkok", country: "Thailand", region: "asiapac", phone: "%2B66%202530%203003%207", fax: "%2B66%202539%202384"
    }
    ,
    {
        url: "", industry: "biopharma", title: "Blue%20Bird%20Enterprises", address1: "Suite%20%23%201%2C%202nd%20Floor%2C%20Ejaz%20Arcade%2C", address2: "3-E%2C%20Main%20Market%2C%20Gulberg-Ii", state: "Lahore", country: "Pakistan", region: "asiapac", phone: "92-42-578%206163", fax: "92-42-%20578%206165"
    }
    ,
    {
        url: "", industry: "food", title: "Blue%20Bird%20Enterprises", address1: "2nd%20Floor%2C%2025%2FA%20-%20Wahdat%20Road", address2: "P.O.%20Box%203059%2C%20Gulberg%2C%20Lahore", state: "Lahore", country: "Pakistan", region: "emea", phone: "%2B92%2042%20756%206511", fax: "%2B92%2042%20756%206512"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Blue%20Bird%20Enterprises", address1: "Suite%20%231%2C%202nd%20Floor%2C%20Ejaz%20Arcade%2C", address2: "3-E%2C%20Main%20Market%2C%20Gulberg-ll", state: "Lahore", country: "Pakistan", region: "emea", phone: "%2B92-42-578%206163-4", fax: "%2B92-42-578%206165"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Borkit%20Oiltech%20LLP", address1: "", address2: "", state: "", country: "Republic%20of%20Kazakhstan", region: "emea", phone: "%2B7%20(727)%20222%2015%2044", fax: ""
    }
    ,
    {
        url: "", industry: "medical", title: "BPL%20MEDICAL", address1: "Calle%2036%20No.%2014-61", address2: "", state: "Bogota%20D.C.%2C", country: "Colombia", region: "americas", phone: "(011)%20571-338-1028", fax: "(011)%20571-338-2280"
    }
    ,
    {
        url: "", industry: "medical", title: "CEI%20COM%C3%89RCIO%20EXPORTA%C3%87%C3%83O%20IMPORTA%C3%87%C3%83O%20DE%20MATERIAIS", address1: "Estrada%20do%20Engenho%20d%C2%B4%C3%81gua%2C%201248%20Anil", address2: "", state: "Rio%20de%20Janeiro", country: "Brasil", region: "americas", phone: "5521-3525-9463", fax: "5521-3525-9456"
    }
    ,
    {
        url: "", industry: "chemicals", title: "CHAVANAN%20CORPORATION%20LIMITED", address1: "156%20Sukhumvit%2055%20Road%20(Thonglor)%2C", address2: "Klongton%20Nua%2C", state: "Bangkok", country: "THAILAND", region: "asiapac", phone: "%2B66%202714%209088", fax: "%2B66%202381%201832"
    }
    ,
    {
        url: "", industry: "pallwater", title: "Chemaction%20Inc.", address1: "4559%20Boulevard%20Metropolitain%20East", address2: "", state: "Quebec", country: "Canada", region: "americas", phone: "514.593.1515", fax: "514.593.1313"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Claritas%20Co.%2C%20Ltd", address1: "122%2F4%20Moo%202%2C%20Soi%20Vibhawadee-Rangsit%2058%2C", address2: "Vibhawadee-Rangsit%20Road%2C", state: "Bangkok", country: "Thailand", region: "asiapac", phone: "%2B662%205794677", fax: "%2B662%209408158"
    }
    ,
    {
        url: "", industry: "pallblue", title: "Colly%20Filtreringsteknik%20AB", address1: "Raseborgsgatan%207-9", address2: "PO%20Box%2081", state: "Kista", country: "Sweden", region: "emea", phone: "%2B46%208703%200100", fax: "%2B46%208703%209536"
    }
    ,
    {
        url: "", industry: "industrial", title: "Colly%20Filtreringsteknik%20AB", address1: "Raseborgsgatan%207-9", address2: "PO%20Box%2081", state: "Kista", country: "Sweden", region: "emea", phone: "%2B46%208703%200100", fax: "%2B46%208703%209536"
    }
    ,
    {
        url: "", industry: "microelec", title: "Colly%20Filtreringsteknik%20AB", address1: "Raseborgsgatan%207-9", address2: "PO%20Box%2081", state: "Kista", country: "Sweden", region: "emea", phone: "%2B46%208703%200100", fax: "%2B46%208703%209536"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Colly%20Filtreringsteknik%20AB", address1: "Raseborgsgatan%207-9", address2: "PO%20Box%2081", state: "Kista", country: "Sweden", region: "emea", phone: "%2B46%208703%200100", fax: "%2B46%208703%209536"
    }
    ,
    {
        url: "", industry: "food", title: "Colly%20Filtreringsteknik%20AB", address1: "Raseborgsgatan%207-9", address2: "PO%20Box%2081", state: "Kista", country: "Sweden", region: "emea", phone: "%2B46%208703%200100", fax: "%2B46%208703%209536"
    }
    ,
    {
        url: "", industry: "power", title: "Colly%20Filtreringsteknik%20AB", address1: "Raseborgsgatan%207-9", address2: "PO%20Box%2081", state: "Kista", country: "Sweden", region: "emea", phone: "%2B46%208703%200100", fax: "%2B46%208703%209536"
    }
    ,
    {
        url: "", industry: "food", title: "COLUMBIT%20(PTY)%20LIMITED", address1: "P%20O%20Box%202737", address2: "", state: "", country: "South%20Africa", region: "emea", phone: "%2B27%2021%205933%20161", fax: "%2B%2027%2021%205933%20171"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Comerrsa", address1: "KM%2026.5%20Carretera%20Al%20Salvador", address2: "Desvio%20a%20Santa%20Elena%20Barillas", state: "", country: "Guatemala%20C.A.", region: "americas", phone: "011.502.6634-3737", fax: "011.502.6634.3745"
    }
    ,
    {
        url: "", industry: "industrial", title: "Comerrsa", address1: "KM%2026.5%20Carretera%20Al%20Salvador", address2: "Desvio%20a%20Santa%20Elena%20Barillas", state: "", country: "Guatemala%20C.A.", region: "americas", phone: "011.502.6634-3737", fax: "011.502.6634.3745"
    }
    ,
    {
        url: "", industry: "power", title: "Comerrsa", address1: "KM%2026.5%20Carretera%20Al%20Salvador", address2: "Desvio%20a%20Santa%20Elena%20Barillas", state: "", country: "Guatemala%20C.A.", region: "americas", phone: "011.502.6634-3737", fax: "011.502.6634.3745"
    }
    ,
    {
        url: "", industry: "biopharma", title: "Comerrsa", address1: "KM%2026.5%20Carretera%20Al%20Salvador", address2: "Desvio%20a%20Santa%20Elena%20Barillas", state: "", country: "Guatemala%20C.A.", region: "americas", phone: "011.502.6634-3737", fax: "011.502.6634.3745"
    }
    ,
    {
        url: "", industry: "food", title: "Comerrsa", address1: "KM%2026.5%20Carretera%20Al%20Salvador", address2: "Desvio%20a%20Santa%20Elena%20Barillas", state: "", country: "Guatemala%20C.A.", region: "americas", phone: "011.502.6634-3737", fax: "011.502.6634.3745"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Comerrsa", address1: "KM%2026.5%20Carretera%20Al%20Salvador", address2: "Desvio%20a%20Santa%20Elena%20Barillas", state: "", country: "Guatemala%20C.A.", region: "americas", phone: "011.502.6634-3737", fax: "011.502.6634.3745"
    }
    ,
    {
        url: "", industry: "biopharma", title: "Comerrsa", address1: "Ofidepositos%20Tocumen", address2: "Bodega%2013%2C%20Urbanizacion%20Mananitas", state: "Torrilos", country: "Panama%2C%20C.A.", region: "americas", phone: "(011)%20507-394-1695", fax: "(011)%20507-394-1699"
    }
    ,
    {
        url: "", industry: "food", title: "Comerrsa", address1: "Ofidepositos%20Tocumen", address2: "Bodega%2013%2C%20Urbanizacion%20Mananitas", state: "Torrilos", country: "Panama%2C%20C.A.", region: "americas", phone: "(011)%20507-394-1695", fax: "(011)%20507-394-1699"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Comerrsa", address1: "Ofidepositos%20Tocumen", address2: "Bodega%2013%2C%20Urbanizacion%20Mananitas", state: "Torrilos", country: "Panama%2C%20C.A.", region: "americas", phone: "(011)%20507-394-1695", fax: "(011)%20507-394-1699"
    }
    ,
    {
        url: "", industry: "food", title: "Commerce%20d.d.", address1: "Mencingerjeva%207%2C%20p.p.%202598", address2: "", state: "Ljubljana", country: "Slovenia", region: "emea", phone: "%2B386%201%2047%2041%20116", fax: "%2B386%201%2047%2041%20128%20129"
    }
    ,
    {
        url: "", industry: "industrial", title: "Control%20Gear%20(Filtration)%20Ltd", address1: "Hoel%20Groeswen%2C%20Treforest%20Industrial%20Estate", address2: "", state: "Mid%20Glamorgan", country: "United%20Kingdom", region: "emea", phone: "(01443)%20843126", fax: "(01443)%20841821"
    }
    ,
    {
        url: "", industry: "chemicals", title: "CONTROVAL%20C.A.", address1: "Edificio%20No.%20446%2C%20Calle%20Luis%20de%20Camoens", address2: "Urbanizaci%C3%B3n%20Industrial%20La%20Trinidad", state: "Edo%20Miranda", country: "VENEZUELA", region: "americas", phone: "(011)%2058212-944-0966", fax: "(011)%2058212-944-4554"
    }
    ,
    {
        url: "", industry: "power", title: "CONTROVAL%20C.A.", address1: "Edificio%20No.%20446%2C%20Calle%20Luis%20de%20Camoens", address2: "Urbanizaci%C3%B3n%20Industrial%20La%20Trinidad", state: "Edo%20Miranda", country: "VENEZUELA", region: "americas", phone: "(011)%2058212-944-0966", fax: "(011)%2058212-944-4554"
    }
    ,
    {
        url: "", industry: "power", title: "CONTROVAL%20C.A.", address1: "Edificio%20No.%20446%2C%20Calle%20Luis%20de%20Camoens", address2: "Urbanizaci%C3%B3n%20Industrial%20La%20Trinidad", state: "Edo%20Miranda", country: "VENEZUELA", region: "americas", phone: "58212-944-0966", fax: "58212-944-4554"
    }
    ,
    {
        url: "", industry: "laboratory", title: "DAEIL%20TECH", address1: "Flat%20712%2C%20Cresco%20Building%2C%20114%2C%20Gwangjang-dong%2C", address2: "", state: "Seoul", country: "KOREA", region: "asiapac", phone: "82-2-2273-3340", fax: "82-2-466-2618"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Danielcom%20Equipment%20Supply%20Cia%2C%20Ltda.", address1: "Checoslovaquia%20%23317y", address2: "Avenida%206%20De%20Deciembre", state: "Quito", country: "Ecuador", region: "americas", phone: "%2B593%202%20258716", fax: "%2B593%202%20258421"
    }
    ,
    {
        url: "", industry: "power", title: "Danielcom%20Equipment%20Supply%20Cia%2C%20Ltda.", address1: "Checoslovaquia%20%23317y", address2: "Avenida%206%20De%20Deciembre", state: "Quito", country: "Ecuador", region: "americas", phone: "%2B593%202%20258716", fax: "%2B593%202%20258421"
    }
    ,
    {
        url: "", industry: "biopharma", title: "Delta%20Hardware%20%26%20Industry%20Ltd", address1: "64%2F22%2C%20Pho%20Quang%20Street%2C%20Ward%202", address2: "Tan%20Bing%20Dist.%2C%20Ho%20Chi%20Minh%20City", state: "Ho%20Chi%20Minh%20City", country: "Vietnam", region: "asiapac", phone: "%2B848%2039972%20242%20%2F%2039975%20093", fax: "%2B848%2039974%20325"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Diamond%20Energy%20%26%20Process%20Corp%20(DEPCO)", address1: "P.O.Box%202502%2C%20Al%20Khobar", address2: "", state: "", country: "Saudi%20Arabia", region: "emea", phone: "%2B966%203%208950432", fax: "%2B966%203%208954989"
    }
    ,
    {
        url: "", industry: "power", title: "Diamond%20Energy%20%26%20Process%20Corp%20(DEPCO)", address1: "P.O.Box%202502%2C%20Al%20Khobar", address2: "", state: "", country: "Saudi%20Arabia", region: "emea", phone: "%2B966%203%208950432", fax: "%2B966%203%208954989"
    }
    ,
    {
        url: "", industry: "biopharma", title: "Dimerco%20Comercial%20Limitada", address1: "Las%20Rosas%204680", address2: "", state: "Santiago", country: "Chile", region: "americas", phone: "(56-2)%2027532000", fax: "(56-2)%2025380538"
    }
    ,
    {
        url: "", industry: "food", title: "Dimerco%20Comercial%20Limitada", address1: "Las%20Rosas%204680", address2: "", state: "Santiago", country: "Chile", region: "americas", phone: "(56-2)%2027532000", fax: "(56-2)%2025380538"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Dimerco%20Comercial%20Limitada", address1: "Las%20Rosas%204680", address2: "", state: "Santiago", country: "Chile", region: "americas", phone: "(56-2)%2027532000", fax: "(56-2)%2025380538"
    }
    ,
    {
        url: "", industry: "food", title: "DIMERCO%20COMERCIAL%20SAC", address1: "Las%20Camelias%20790%20Int%20605", address2: "", state: "Lima", country: "Peru", region: "americas", phone: "%2B562-757-3780", fax: "%2B562-538-0538"
    }
    ,
    {
        url: "", industry: "biopharma", title: "DMT%20Ltd.", address1: "Belasitza%20St.%2C%20Bl.%2057%2C%20entr.%20G.%20app.8", address2: "BG-1233%20%2F%20Sofia", state: "", country: "Bulgaria", region: "emea", phone: "%2B359%202%20931%200558", fax: "%2B359%202%20931%201257"
    }
    ,
    {
        url: "", industry: "microelec", title: "DMT%20Ltd.", address1: "Belasitza%20St.%2C%20Bl.%2057%2C%20entr.%20G.%20app.8", address2: "BG-1233%20%2F%20Sofia", state: "", country: "Bulgaria", region: "emea", phone: "%2B3592%2F9310558", fax: "%2B3592%2F9311257"
    }
    ,
    {
        url: "", industry: "laboratory", title: "DMT%20Ltd.", address1: "Belasitza%20St.%2C%20Bl.%2057%2C%20entr.%20G.%20app.8", address2: "BG-1233%20%2F%20Sofia", state: "", country: "Bulgaria", region: "emea", phone: "%2B3592%2F9310558", fax: "%2B3592%2F9311257"
    }
    ,
    {
        url: "", industry: "food", title: "DMT%20Ltd.", address1: "Belasitza%20St.%2C%20Bl.%2057%2C%20entr.%20G.%20app.8", address2: "BG-1233%20%2F%20Sofia", state: "", country: "Bulgaria", region: "emea", phone: "%2B3592%2F9310558", fax: "%2B3592%2F9311257"
    }
    ,
    {
        url: "", industry: "medical", title: "DMT%20Ltd.", address1: "Belasitza%20St.%2C%20Bl.%2057%2C%20entr.%20G.%20app.8", address2: "BG-1233%20%2F%20Sofia", state: "", country: "Bulgaria", region: "emea", phone: "%2B3592%2F9310558", fax: "%2B3592%2F9311257"
    }
    ,
    {
        url: "", industry: "chemicals", title: "LLC%20INVENT%20GROUP", address1: "88a%2C%20Dmitry%20Yavornitsky%20ave.%20(ex.%20Karl%20Marks%20ave.)", address2: "", state: "Dnepr", country: "Ukraine", region: "emea", phone: "%2B38(056)%20794-07-00", fax: "%2B38(056)%20794-07-81"
    }
    ,
    {
        url: "", industry: "industrial", title: "LLC%20INVENT%20GROUP", address1: "88a%2C%20Dmitry%20Yavornitsky%20ave.%20(ex.%20Karl%20Marks%20ave.)", address2: "", state: "Dnepr", country: "Ukraine", region: "emea", phone: "%2B38(056)%20794-07-00", fax: "%2B38(056)%20794-07-81"
    }
    ,
    {
        url: "", industry: "power", title: "LLC%20INVENT%20GROUP", address1: "88a%2C%20Dmitry%20Yavornitsky%20ave.%20(ex.%20Karl%20Marks%20ave.)", address2: "", state: "Dnepr", country: "Ukraine", region: "emea", phone: "%2B38(056)%20794-07-00", fax: "%2B38(056)%20794-07-81"
    }
    ,
    {
        url: "", industry: "pallwater", title: "DWG%20Process%20Supply%20Limited", address1: "%23110%2C%2044%20Riel%20Drive", address2: "", state: "Alberta", country: "Canada", region: "americas", phone: "780.460.8433", fax: "780.418.2227"
    }
    ,
    {
        url: "", industry: "industrial", title: "Light%20Metals%20STC", address1: "Krasnoyarskiy%20Rabochiy%20Avenue%20160", address2: "Building%2019%2C%20office%2016", state: "Krasnoyarsk", country: "Russia", region: "emea", phone: "%2B7%20391%20269-56-47", fax: "%2B7%20391%20269-56-53"
    }
    ,
    {
        url: "", industry: "pallwater", title: "Eco-Tech%2C%20Inc.", address1: "156%20Hickory%20Springs%20Industrial%20Drive", address2: "", state: "GA", country: "USA", region: "americas", phone: "770%20345%202118", fax: "770%20345%202699"
    }
    ,
    {
        url: "", industry: "microelec", title: "Ecotip%20d.o.o.", address1: "Ernest%20Telmann%208a", address2: "", state: "MK", country: "Skopje", region: "emea", phone: "%2B38922400568", fax: "%2B38922442120"
    }
    ,
    {
        url: "", industry: "food", title: "Ecotip%20d.o.o.", address1: "Ernest%20Telmann%208a", address2: "", state: "MK", country: "Skopje", region: "emea", phone: "%2B38922400568", fax: "%2B38922442120"
    }
    ,
    {
        url: "", industry: "pallwater", title: "Ecotip%20d.o.o.", address1: "Ernest%20Telmann%208a", address2: "", state: "MK", country: "Skopje", region: "emea", phone: "%2B38922400568", fax: "%2B38922442120"
    }
    ,
    {
        url: "", industry: "oem-media-membranes-and-materials", title: "Ecotip%20d.o.o.", address1: "Ernest%20Telmann%208a", address2: "", state: "MK", country: "Skopje", region: "emea", phone: "%2B38922400568", fax: "%2B38922442120"
    }
    ,
    {
        url: "", industry: "power", title: "Ecotip%20d.o.o.", address1: "Ernest%20Telmann%208a", address2: "", state: "MK", country: "Skopje", region: "emea", phone: "%2B38922400568", fax: "%2B38922442120"
    }
    ,
    {
        url: "", industry: "biopharma", title: "Ecotip%20C.O.O.", address1: "Str.%20Vasil%20Levski%20br.1,%20Skopje%201000", address2: "", state: "Macedonia", country: "Macedonia", region: "emea", phone: "%2B%2B38923176920", fax: "%2B%2B38923177206"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Ecotip%20d.o.o.", address1: "Str.Vasil%20Levski%20nr.1", address2: "", state: "Macedonia", country: "Skopje", region: "emea", phone: "%2B38923176920", fax: "%2B38923177206"
    }
    ,
    {
        url: "", industry: "medical", title: "Ecotip%20d.o.o.", address1: "Str.Vasil%20Levski%20nr.1", address2: "", state: "Macedonia", country: "Skopje", region: "emea", phone: "%2B38923176920", fax: "%2B38923177206"
    }
    ,
    {
        url: "", industry: "pallwater", title: "EI2%20-%20Environmental%20Improvements%2C%20Inc.", address1: "1183%20Brittmoore%2C%20Suite%20100", address2: "", state: "TX", country: "USA", region: "americas", phone: "713%20461%201111", fax: "713%20461%201821"
    }
    ,
    {
        url: "", industry: "pallwater", title: "EI2%20-%20Environmental%20Improvements%2C%20Inc.", address1: "517%20North%20Kealy", address2: "", state: "TX", country: "USA", region: "americas", phone: "972%20436%202536", fax: "972%20436%208670"
    }
    ,
    {
        url: "", industry: "pallwater", title: "EI2%20-%20Environmental%20Improvements%2C%20Inc.", address1: "235%20Trademark%20Dr.", address2: "", state: "TX", country: "USA", region: "americas", phone: "512%20295%203733", fax: "512%20295%204028"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Eisenberg%20Bros.%20Ltd.", address1: "Airport%20City", address2: "P.O.B.%20234", state: "", country: "Israel", region: "emea", phone: "%2B972%203%209777000", fax: "%2B972%203%209777001"
    }
    ,
    {
        url: "", industry: "laboratory", title: "EKSMA%20MTC%20Ltd.", address1: "11%20Mokslininku", address2: "", state: "Vilnius", country: "Lithuania", region: "emea", phone: "%2B3702%20729721", fax: "%2B3702%20729715"
    }
    ,
    {
        url: "", industry: "laboratory", title: "El%20Crisol%2C%20S.A.%20de%20C.V.", address1: "San%20Luis%20Potosi%2025%20y%2025-A", address2: "", state: "D.F.%20D.F.", country: "Mexico", region: "americas", phone: "%2B52%2055%205264%205500", fax: "%2B52%2055%205264%207798"
    }
    ,
    {
        url: "", industry: "food", title: "Elena%20Gruzdeva", address1: "", address2: "", state: "Kazintsa%20st", country: "Russia", region: "emea", phone: "%2B%20375%20172%2078%2090%2086", fax: ""
    }
    ,
    {
        url: "", industry: "pallwater", title: "Energenecs", address1: "Q59%20N249%20Cardinal%20Avenue", address2: "", state: "WI", country: "", region: "emea", phone: "262.377.6360", fax: "262.377.1515"
    }
    ,
    {
        url: "", industry: "industrial", title: "EnerMech%20Ltd", address1: "Enermech%20House%2C%20Howes%20Rd", address2: "", state: "Aberdeen", country: "", region: "emea", phone: "01224%20723300", fax: "08456386441"
    }
    ,
    {
        url: "", industry: "pallwater", title: "ENG%20Environmental%20Technologies%2C%20Inc.", address1: "1096%20Queen%20Street%2C%20Suite%20300", address2: "", state: "Nova%20Scotia", country: "Canada", region: "americas", phone: "902.478.4137", fax: "902.423.4106"
    }
    ,
    {
        url: "", industry: "food", title: "Enogrup%20LLC", address1: "Tairov%20District%2C%20Stroytelnaya%20str.%2035", address2: "", state: "Odessa", country: "Ukraine", region: "emea", phone: "%2B380%2048%20717%2012%2071", fax: "%2B380%2048%20717%2012%2069"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Enpro%2C%20Inc.", address1: "121%20S.%20Lombard%20Road", address2: "", state: "IL", country: "USA", region: "americas", phone: "630-629-3504", fax: "630-629-3512"
    }
    ,
    {
        url: "", industry: "pallblue", title: "Enpro%2C%20Inc.", address1: "121%20S.%20Lombard%20Road", address2: "", state: "IL", country: "USA", region: "americas", phone: "630-629-3504", fax: "630-629-3512"
    }
    ,
    {
        url: "", industry: "industrial", title: "Enpro%2C%20Inc.", address1: "121%20S.%20Lombard%20Road", address2: "", state: "IL", country: "USA", region: "americas", phone: "630-629-3504", fax: "630-629-3512"
    }
    ,
    {
        url: "", industry: "microelec", title: "Enpro%2C%20Inc.", address1: "121%20S.%20Lombard%20Road", address2: "", state: "IL", country: "USA", region: "americas", phone: "630-629-3504", fax: "630-629-3512"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Enpro%2C%20Inc.", address1: "8888%20Keystone%20Crossing", address2: "Suite%201300", state: "IN", country: "USA", region: "americas", phone: "(317)%20872-1422", fax: "(317)%20872-1554"
    }
    ,
    {
        url: "", industry: "pallblue", title: "Enpro%2C%20Inc.", address1: "8888%20Keystone%20Crossing", address2: "Suite%201300", state: "IN", country: "USA", region: "americas", phone: "(317)%20872-1422", fax: "(317)%20872-1554"
    }
    ,
    {
        url: "", industry: "industrial", title: "Enpro%2C%20Inc.", address1: "8888%20Keystone%20Crossing", address2: "Suite%201300", state: "IN", country: "USA", region: "americas", phone: "(317)%20872-1422", fax: "(317)%20872-1554"
    }
    ,
    {
        url: "", industry: "microelec", title: "Enpro%2C%20Inc.", address1: "8888%20Keystone%20Crossing", address2: "Suite%201300", state: "IN", country: "USA", region: "americas", phone: "(317)%20872-1422", fax: "(317)%20872-1554"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Enpro%2C%20Inc.", address1: "7300%20West%20110th%20St.%2C%207th%20Floor", address2: "", state: "KS", country: "USA", region: "americas", phone: "(913)%20327-8400", fax: "(913)%20327-8401"
    }
    ,
    {
        url: "", industry: "pallblue", title: "Enpro%2C%20Inc.", address1: "7300%20West%20110th%20St.%2C%207th%20Floor", address2: "", state: "KS", country: "USA", region: "americas", phone: "(913)%20327-8400", fax: "(913)%20327-8401"
    }
    ,
    {
        url: "", industry: "industrial", title: "Enpro%2C%20Inc.", address1: "7300%20West%20110th%20St.%2C%207th%20Floor", address2: "", state: "KS", country: "USA", region: "americas", phone: "(913)%20327-8400", fax: "(913)%20327-8401"
    }
    ,
    {
        url: "", industry: "microelec", title: "Enpro%2C%20Inc.", address1: "7300%20West%20110th%20St.%2C%207th%20Floor", address2: "", state: "KS", country: "USA", region: "americas", phone: "(913)%20327-8400", fax: "(913)%20327-8401"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Enpro%2C%20Inc.", address1: "7825%20Washington%20Ave.%2C%20Ste.%20504", address2: "", state: "MN", country: "USA", region: "americas", phone: "(952)%20943-3930", fax: "(952)%20943-8022"
    }
    ,
    {
        url: "", industry: "pallblue", title: "Enpro%2C%20Inc.", address1: "7825%20Washington%20Ave.%2C%20Ste.%20504", address2: "", state: "MN", country: "USA", region: "americas", phone: "(952)%20943-3930", fax: "(952)%20943-8022"
    }
    ,
    {
        url: "", industry: "microelec", title: "Enpro%2C%20Inc.", address1: "7825%20Washington%20Ave.%2C%20Ste.%20504", address2: "", state: "MN", country: "USA", region: "americas", phone: "(952)%20943-3930", fax: "(952)%20943-8022"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Enpro%2C%20Inc.", address1: "1001%20Craig%20Road", address2: "Suite%20260", state: "MO", country: "USA", region: "americas", phone: "(314)%20878-6161", fax: "(314)%20878-0470"
    }
    ,
    {
        url: "", industry: "pallblue", title: "Enpro%2C%20Inc.", address1: "1001%20Craig%20Road", address2: "Suite%20260", state: "MO", country: "USA", region: "americas", phone: "(314)%20878-6161", fax: "(314)%20878-0470"
    }
    ,
    {
        url: "", industry: "industrial", title: "Enpro%2C%20Inc.", address1: "1001%20Craig%20Road", address2: "Suite%20260", state: "MO", country: "USA", region: "americas", phone: "(314)%20878-6161", fax: "(314)%20878-0470"
    }
    ,
    {
        url: "", industry: "microelec", title: "Enpro%2C%20Inc.", address1: "1001%20Craig%20Road", address2: "Suite%20260", state: "MO", country: "USA", region: "americas", phone: "(314)%20878-6161", fax: "(314)%20878-0470"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Enpro%2C%20Inc.", address1: "11329%20P%20St.%2C%20Ste%20110", address2: "", state: "NE", country: "USA", region: "americas", phone: "(402)%20597-2306", fax: "(402)%20597-2320"
    }
    ,
    {
        url: "", industry: "pallblue", title: "Enpro%2C%20Inc.", address1: "11329%20P%20St.%2C%20Ste%20110", address2: "", state: "NE", country: "USA", region: "americas", phone: "(402)%20597-2306", fax: "(402)%20597-2320"
    }
    ,
    {
        url: "", industry: "industrial", title: "Enpro%2C%20Inc.", address1: "11329%20P%20St.%2C%20Ste%20110", address2: "", state: "NE", country: "USA", region: "americas", phone: "(402)%20597-2306", fax: "(402)%20597-2320"
    }
    ,
    {
        url: "", industry: "microelec", title: "Enpro%2C%20Inc.", address1: "11329%20P%20St.%2C%20Ste%20110", address2: "", state: "NE", country: "USA", region: "americas", phone: "(402)%20597-2306", fax: "(402)%20597-2320"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Enpro%2C%20Inc.", address1: "3030%20Northwest%20Expressway", address2: "Ste.%20200%2C%20%23121", state: "OK", country: "USA", region: "americas", phone: "(405)%20728-9500", fax: "(405)%20728-9520"
    }
    ,
    {
        url: "", industry: "pallblue", title: "Enpro%2C%20Inc.", address1: "3030%20Northwest%20Expressway", address2: "Ste.%20200%2C%20%23121", state: "OK", country: "USA", region: "americas", phone: "(405)%20728-9500", fax: "(405)%20728-9520"
    }
    ,
    {
        url: "", industry: "microelec", title: "Enpro%2C%20Inc.", address1: "3030%20Northwest%20Expressway", address2: "Ste.%20200%2C%20%23121", state: "OK", country: "USA", region: "americas", phone: "(405)%20728-9500", fax: "(405)%20728-9520"
    }
    ,
    {
        url: "", industry: "pallblue", title: "Enpro%2C%20Inc.", address1: "5865%20Ridgeway%20Center%20Pkwy.%2C%20Ste.%20300", address2: "", state: "TN", country: "USA", region: "americas", phone: "(901)%20685-2929", fax: "(901)%20685-2930"
    }
    ,
    {
        url: "", industry: "microelec", title: "Enpro%2C%20Inc.", address1: "5865%20Ridgeway%20Center%20Pkwy.%2C%20Ste.%20300", address2: "", state: "TN", country: "USA", region: "americas", phone: "(901)%20685-2929", fax: "(901)%20685-2930"
    }
    ,
    {
        url: "", industry: "industrial", title: "Eriks", address1: "Unit%202%20Hotchkiss%20Wav", address2: "Binley%20Industrial%20Estate", state: "", country: "", region: "emea", phone: "(02476)%20233700", fax: "(02476)%20233701"
    }
    ,
    {
        url: "", industry: "industrial", title: "Eriks", address1: "Unit%2013%20Eastern%20Avenue%20Trading%20Estate", address2: "Eastville%20Close%20Eastern%20Avenue", state: "", country: "", region: "emea", phone: "(01452)%20522265", fax: "(01452)%20306700"
    }
    ,
    {
        url: "", industry: "industrial", title: "Eriks", address1: "UK%20Distribution%20Centre", address2: "Amberway%20Halesowen", state: "", country: "", region: "emea", phone: "(01215)%20086000", fax: "(01215)%20086343"
    }
    ,
    {
        url: "", industry: "industrial", title: "Eriks", address1: "St.%20James%20Business%20Park", address2: "Units%207%20%26%208%2C", state: "Northants", country: "", region: "emea", phone: "(01604)%20%20751377", fax: "(01604)%20%20758973"
    }
    ,
    {
        url: "", industry: "industrial", title: "Eriks", address1: "Unit%201%2C%20Enterprise%20Park", address2: "Burty%20St.%20Edmunds", state: "", country: "", region: "emea", phone: "(01284)%20769656", fax: "(01284)%20769526"
    }
    ,
    {
        url: "", industry: "industrial", title: "Eriks", address1: "Unit%209%2C%20Horton%20Court", address2: "Hortonwood%2050", state: "", country: "", region: "emea", phone: "(01952)%20%20606696", fax: "(01952)%20%20670333ERIKS"
    }
    ,
    {
        url: "", industry: "industrial", title: "Eriks", address1: "Unit%204a%2C%20Parsonage%20Farm%20Business%20Park", address2: "Parsonage%20Way%2C%20Horsham", state: "", country: "", region: "emea", phone: "(01403)%20%20240000", fax: "(01403)%20%20217153"
    }
    ,
    {
        url: "", industry: "biopharma", title: "EUROMAGHREB", address1: "Residence%20Yasmina%202eme%20%C3%A9tage", address2: "27%20av.%20Taieb%20M'HIRI%20Ariana%202037", state: "", country: "Tunisia", region: "emea", phone: "(%2B216)%2071%20709%20979", fax: "(%2B216)%2071%20717%20892"
    }
    ,
    {
        url: "", industry: "food", title: "EUROMAGHREB", address1: "Residence%20Yasmina%202eme%20%C3%A9tage", address2: "27%20av.%20Taieb%20M'HIRI%20Ariana%202037", state: "", country: "Tunisia", region: "emea", phone: "(%2B216)%2071%20709%20979", fax: "(%2B216)%2071%20717%20892"
    }
    ,
    {
        url: "", industry: "laboratory", title: "EUROMAGHREB", address1: "Residence%20Yasmina%202eme%20%C3%A9tage", address2: "27%20av.%20Taieb%20M'HIRI%20Ariana%202037", state: "", country: "Tunisia", region: "emea", phone: "(%2B216)%2071%20709%20979", fax: "(%2B216)%2071%20717%20892"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Evoelution%20SA%20de%20CV", address1: "Miguel%20N.%20Lira%20No.%20292", address2: "Col.Villa%20De%20Cortes", state: "D.F.%20C.P.", country: "Mexico", region: "americas", phone: "(52)%2055%205579%200756", fax: "(52)%2055%205579%200742"
    }
    ,
    {
        url: "", industry: "power", title: "Evrotekhservice%20K%20LLP", address1: "Startoviy%20per.%2C%20bld.%2062", address2: "", state: "Karagandy", country: "Kazakhstan", region: "emea", phone: "%2B7%207212%20933%20364", fax: ""
    }
    ,
    {
        url: "", industry: "laboratory", title: "Ewell%20Biotechnology%20Ltd.", address1: "", address2: "", state: "", country: "Guangdong%20Province", region: "asiapac", phone: "%2B86%2020-8554%201889", fax: "%2B86%2020%208554%201891"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Ewell%20Biotechnology%20Ltd.", address1: "", address2: "", state: "", country: "South%20China", region: "asiapac", phone: "%2B86%2020%208554%201889", fax: "%2B86%2020%208554%201891"
    }
    ,
    {
        url: "", industry: "pallwater", title: "F.%20R.%20Mahony%20%26%20Associates", address1: "273%20Weymouth%20St.", address2: "", state: "MA", country: "", region: "emea", phone: "781.982.9300", fax: "781.982.1056"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Falcor%20and%20Contract%20Services", address1: "P.O.Box%2048576%2C", address2: "", state: "Abu%20Dhabi", country: "United%20Arab%20Emirates", region: "emea", phone: "%2B971%202%206342555", fax: "%2B971%202%206348562"
    }
    ,
    {
        url: "", industry: "food", title: "FAWAZ%20%26%20SONS%20LTD", address1: "97%20Kournish%20El%20Nile", address2: "Road%20El%20Farag", state: "Cairo", country: "Egypt", region: "emea", phone: "%2B%20202%202%2045%2075%20199", fax: "%2B%20202%202%2045%2075%20199"
    }
    ,
    {
        url: "", industry: "biopharma", title: "FIL-PRO%20sal.", address1: "Harboyan%20Trade%20Center", address2: "Bourj%20Hammoud", state: "", country: "Lebanon", region: "emea", phone: "%2B961125237", fax: "%2B961125237"
    }
    ,
    {
        url: "", industry: "food", title: "Filtermedia", address1: "Sretenskij%20blvd.%2C%206%2F1%20-%2038", address2: "", state: "Moscow", country: "Russia", region: "emea", phone: "%2B7%20495%20623%201925", fax: "%2B7%20495%20628%202144"
    }
    ,
    {
        url: "", industry: "food", title: "Filtra%20Handels%20GmbH", address1: "Triesterstra%C3%9Fe%204a", address2: "", state: "Guntramsdorf", country: "Austria", region: "emea", phone: "0043%20(0)%202236%20%2F%20533%2088%200", fax: "0043%20(0)%202236%20%2F%2053289"
    }
    ,
    {
        url: "", industry: "industrial", title: "Finnconsult%20Ltd", address1: "Bogoridi%20Str.%2059", address2: "", state: "", country: "Bulgaria", region: "emea", phone: "%2B36%2099%20312%20633", fax: "%2B36%2099%20322%20633"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Fisher%20M%C3%A9xico%20S%20de%20R.L%20de%20C.V", address1: "Prof.%20D%C3%ADaz%20Ordaz%20No%20304%20Int.4", address2: "Col.%20Bosques%20del%20Nogalar.%2C%20San%20Nicol%C3%A1s%20de%20los%20Garz", state: "NL", country: "CDMX.%20Mexico", region: "americas", phone: "%2B52%2081%208042%205200", fax: ""
    }
    ,
    {
        url: "", industry: "industrial", title: "Flodraulic%20Group%20-%20West%20Coast", address1: "2125%20East%205th%20Street%2C%20Suite%20113", address2: "", state: "AZ", country: "", region: "emea", phone: "480.921.5440", fax: "480.921.3272"
    }
    ,
    {
        url: "", industry: "industrial", title: "Flodraulic%20Group%20-%20West%20Coast", address1: "2881A%20Saturn%20Street", address2: "", state: "CA", country: "USA", region: "americas", phone: "714%20578%202940", fax: "714%20578%202954"
    }
    ,
    {
        url: "", industry: "industrial", title: "Flodraulic%20Group", address1: "2881A%20Saturn%20Street", address2: "", state: "CA", country: "USA", region: "americas", phone: "714%20578%202940", fax: "714%20578%202954"
    }
    ,
    {
        url: "", industry: "industrial", title: "Flodraulic%20Group", address1: "3539%20North%20700%20West", address2: "", state: "IN", country: "USA", region: "americas", phone: "317-890-3700", fax: "317-890-3707"
    }
    ,
    {
        url: "", industry: "industrial", title: "Flodraulic%20Group%20-%20Mid%20West", address1: "765%20N.%20Hague%20Ave", address2: "", state: "OH", country: "USA", region: "americas", phone: "614-276-8141", fax: "614-274-6766"
    }
    ,
    {
        url: "", industry: "industrial", title: "Flodraulic%20Group", address1: "2125%20East%205th%20Street%2C%20Suite%20113", address2: "", state: "AZ", country: "USA", region: "americas", phone: "480.921.5440", fax: "480.921.3272"
    }
    ,
    {
        url: "", industry: "industrial", title: "Flosolve%20(Pty)%20Ltd", address1: "16%20Borax%20Street", address2: "Alrode%20Ext%207", state: "Gauteng", country: "South%20Africa", region: "emea", phone: "%2B27%2011%20389%205300", fax: "%2B27%2011%20389%205460"
    }
    ,
    {
        url: "", industry: "pallwater", title: "Fluid%20Equipment%20Co.%2C%20Inc.", address1: "500%20w.%205th%20Street", address2: "", state: "MO", country: "USA", region: "americas", phone: "816%20795%208511", fax: "816%20795%208926"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Fluid%20Flow%20Products%2C%20Inc.", address1: "2108%20Crown%20View%20Drive", address2: "", state: "NC", country: "USA", region: "americas", phone: "704%20847%204464", fax: "704%20847%202377"
    }
    ,
    {
        url: "", industry: "power", title: "Fluid%20Flow%20Products%2C%20Inc.", address1: "2108%20Crown%20View%20Drive", address2: "", state: "NC", country: "USA", region: "americas", phone: "704%20847%204464", fax: "704%20847%202377"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Fluid%20Flow%20Products%2C%20Inc.", address1: "1%20Ivybrook%20Blvd", address2: "", state: "PA", country: "", region: "emea", phone: "215-675-8670", fax: "215-675-9682"
    }
    ,
    {
        url: "", industry: "power", title: "Fluid%20Flow%20Products%2C%20Inc.", address1: "1%20Ivybrook%20Blvd", address2: "", state: "PA", country: "", region: "emea", phone: "215-675-8670", fax: "215-675-9682"
    }
    ,
    {
        url: "", industry: "industrial", title: "Focus%20Computers%20d.o.o", address1: "Hala%20Pinki", address2: "Zemun%2C%20Gradski%20Park%202", state: "RS", country: "Belgrade", region: "emea", phone: "%2B381%20316%203097", fax: "%2B381%20316%203097"
    }
    ,
    {
        url: "", industry: "aerospace", title: "Focus%20Computers%20d.o.o", address1: "Hala%20Pinki", address2: "Zemun%2C%20Gradski%20Park%202", state: "RS", country: "Belgrade", region: "emea", phone: "%2B381%20316%203097", fax: "%2B381%20316%203097"
    }
    ,
    {
        url: "", industry: "chemicals", title: "G%20Eitan%20Advanced%20Technology%20Ltd.", address1: "PO%20Box%202371", address2: "", state: "Rehovot", country: "Israel", region: "emea", phone: "%2B972%208%20936%206776", fax: "%2B972%208%20936%206773"
    }
    ,
    {
        url: "", industry: "industrial", title: "G%20Eitan%20Advanced%20Technology%20Ltd.", address1: "PO%20Box%202371", address2: "", state: "Rehovot", country: "Israel", region: "emea", phone: "%2B972%208%20936%206776", fax: "%2B972%208%20936%206773"
    }
    ,
    {
        url: "", industry: "power", title: "G%20Eitan%20Advanced%20Technology%20Ltd.", address1: "PO%20Box%202371", address2: "", state: "Rehovot", country: "Israel", region: "emea", phone: "%2B972%208%20936%206776", fax: "%2B972%208%20936%206773"
    }
    ,
    {
        url: "", industry: "biopharma", title: "G%20Eitan%20Advanced%20Technology%20Ltd.", address1: "10%20Plaut%20St,%20PO%20Box%202371,%20Rabin%20Park,%20Rehovot%2076123", address2: "", state: "Rehovot", country: "Israel", region: "emea", phone: "%2B972%208%20936%206776", fax: "%2B972%208%20936%206773"
    }
    ,
    {
        url: "", industry: "food", title: "G%20Eitan%20Advanced%20Technology%20Ltd.", address1: "PO%20Box%202371", address2: "", state: "Rehovot", country: "Israel", region: "emea", phone: "%2B972%208%20936%206776", fax: "%2B972%208%20936%206773"
    }
    ,
    {
        url: "", industry: "medical", title: "G%20Eitan%20Advanced%20Technology%20Ltd.", address1: "PO%20Box%202371", address2: "", state: "Rehovot", country: "Israel", region: "emea", phone: "%2B972%208%20936%206776", fax: "%2B972%208%20936%206773"
    }
    ,
    {
        url: "", industry: "food", title: "GABO%20SRL", address1: "Bulevardul%20Dacia%204%2015", address2: "Chisinau%20MD%202043", state: "Rehovot", country: "Moldova", region: "emea", phone: "%2B373%2069178349", fax: ""
    }
    ,
    {
        url: "", industry: "laboratory", title: "Gallay%20Medical%20and%20Scientific%20Pty%20Ltd", address1: "13-19%20Dunlop%20Rd", address2: "Mulgrave%20VIC%203170", state: "", country: "Australia", region: "asiapac", phone: "03%209590%200688", fax: "03%209590%200622"
    }
    ,
    {
        url: "", industry: "pallblue", title: "Gibthai%20Co.%20Ltd.", address1: "44%2F6%20Gibthai%20Bldg.%2C", address2: "Suthisarnvinitchai%20Road", state: "Bangkok", country: "Thailand", region: "asiapac", phone: "%2B66%202%20274%208331", fax: "%2B66%202%20274%208336"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Global%20Science%20a%20VWR%20Company", address1: "241%20Bush%20Road%2C%20Albany%200632%2C%20Auckland", address2: "PO%20Box%20101253%2C%20North%20Shore%200745", state: "", country: "New%20Zealand", region: "asiapac", phone: "0800%20734%20100", fax: "0800%20999%20002"
    }
    ,
    {
        url: "", industry: "pallwater", title: "Goble%20Sampson%20Associates%20Inc.", address1: "Dave%20Ritter%2C%20P.E.", address2: "3500%20S.%20Main%20St.%2C%20Suite%20200", state: "UT", country: "", region: "emea", phone: "801.268.8790", fax: "801.268.8792"
    }
    ,
    {
        url: "", industry: "pallwater", title: "Goble%20Sampson%20Associates%2C%20Inc.", address1: "4735%20E.%20Virginia%20St.%20-%20Building%202", address2: "", state: "AZ", country: "", region: "emea", phone: "480-969-3667", fax: "480-969-4096"
    }
    ,
    {
        url: "", industry: "medical", title: "GRIFOLS%20CHILE%20S.A.%20-%20Blood", address1: "Am%C3%A9rico%20Vespucio%202242", address2: "", state: "Santiago%20De%20Chile", country: "", region: "emea", phone: "562-355-7200", fax: "562-355-7242"
    }
    ,
    {
        url: "", industry: "industrial", title: "GRP%20Group", address1: "Startovyi%20per%2C%2062", address2: "", state: "Karaganda", country: "Kazakhstan", region: "emea", phone: "%2B7%207212%2092-23-63", fax: "%2B7%207212%2092-23-64"
    }
    ,
    {
        url: "", industry: "medical", title: "GRUPO%20EOLICA", address1: "Coahuila%2028-2%20Col.%20Roma", address2: "", state: "DF%20MEXICO", country: "M%C3%A9xico", region: "emea", phone: "%2B5255-5584-4699", fax: "%2B5255-5584-4635"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Ha'erbin%20Wuxianfeng%20Technology%20Co.%2C%20Ltd.", address1: "", address2: "", state: "Northeast", country: "", region: "emea", phone: "%2B86%20451%205178%201777", fax: ""
    }
    ,
    {
        url: "", industry: "food", title: "Havlimex%20SRL", address1: "B-dul%20Iuliu%20Maniu%20257-259", address2: "Bucharest%20sector%206", state: "", country: "Romania", region: "emea", phone: "%2B4021%20300%200281", fax: "%2B4021318-1262"
    }
    ,
    {
        url: "", industry: "medical", title: "HEMOMEDICA%20S.R.L.", address1: "Edificio%20Central%20Park", address2: "California%20No.%202000%2C%20Oficina%20D-217", state: "", country: "Argentina", region: "americas", phone: "54-1-14-301-0556", fax: "54-1-14-301-0556"
    }
    ,
    {
        url: "", industry: "medical", title: "HIGIA%20SRL", address1: "", address2: "", state: "Montevideo", country: "Uruguay", region: "americas", phone: "%2B5982-506-8044", fax: "%2B5982-506-9169"
    }
    ,
    {
        url: "", industry: "food", title: "HOMSI", address1: "SOCIETE%20DU%20MOYEN%20ORIENT", address2: "", state: "Damas", country: "SYRIA", region: "emea", phone: "%2B%2000963114465076", fax: "%2B%2000963114465067"
    }
    ,
    {
        url: "", industry: "laboratory", title: "HongKong%20Bio-gene%20Technology%20Ltd.", address1: "", address2: "", state: "", country: "Hongkong%20and%20Macao", region: "asiapac", phone: "%2B852%2026466101", fax: ""
    }
    ,
    {
        url: "", industry: "industrial", title: "Hydra%20Air%20Pacific", address1: "3169%20Koapaka%20Street", address2: "", state: "HI", country: "USA", region: "americas", phone: "808%20834%207656", fax: "808%20839%207040"
    }
    ,
    {
        url: "", industry: "industrial", title: "Hydra-Fab%20Fluid%20Power", address1: "3585%20Laird%20Road%2C%20Unit%205", address2: "", state: "Ontario", country: "Canada", region: "americas", phone: "905-569-1819", fax: "905%20569%207801"
    }
    ,
    {
        url: "", industry: "industrial", title: "Hydra-Fab%20Industrial", address1: "", address2: "", state: "", country: "", region: "emea", phone: "506-382-3200", fax: "506-382-3201"
    }
    ,
    {
        url: "", industry: "industrial", title: "Hydralogie", address1: "4005%2C%20Lavoisier", address2: "", state: "", country: "Canada", region: "americas", phone: "450%20419%209411", fax: "450%20419%209412"
    }
    ,
    {
        url: "", industry: "industrial", title: "Hypower%20Systems", address1: "39%20Terracon%20Place", address2: "", state: "Manitoba", country: "", region: "emea", phone: "(204)%20231-2328", fax: "(204)%20231-1393"
    }
    ,
    {
        url: "", industry: "industrial", title: "Hypower%20Systems", address1: "488%20South%20Industrial%20Dr.", address2: "", state: "SK", country: "", region: "emea", phone: "306-764-9034", fax: "306-922-2359"
    }
    ,
    {
        url: "", industry: "industrial", title: "Hypower%20Systems", address1: "Corporate%20Office", address2: "8616%2018th%20Street", state: "AB", country: "Canada", region: "americas", phone: "780%20464%205528", fax: "780%20449%205080"
    }
    ,
    {
        url: "", industry: "industrial", title: "Hypower%20Systems", address1: "11450%20-%2098th%20Avenue", address2: "", state: "Alberta", country: "", region: "emea", phone: "(780)%20532-5754", fax: "(780)%20539-5510"
    }
    ,
    {
        url: "", industry: "industrial", title: "Hypower%20Systems", address1: "%233%2C%204600%20-%205th%20Street%20NE", address2: "", state: "Alberta", country: "", region: "emea", phone: "(403)%20230-2227", fax: "(403)%20277-4023"
    }
    ,
    {
        url: "", industry: "industrial", title: "Hypower%20Systems", address1: "8620%20-%2018th%20Street", address2: "", state: "Alberta", country: "", region: "emea", phone: "(780)%20449-0600", fax: "(780)%20449-1215"
    }
    ,
    {
        url: "", industry: "industrial", title: "Hypower%20Systems", address1: "385%20Taiganova%20Crescent", address2: "", state: "Alberta", country: "", region: "emea", phone: "(780)%20791-1880", fax: "(780)%20791-0263"
    }
    ,
    {
        url: "", industry: "industrial", title: "Hypower%20Systems", address1: "1639%20Foster's%20Way", address2: "", state: "BC", country: "", region: "emea", phone: "(604)%20525-0081", fax: "(604)%20525-0084"
    }
    ,
    {
        url: "", industry: "industrial", title: "Hypower%20Systems", address1: "1084%20Eastern%20Street", address2: "", state: "BC", country: "", region: "emea", phone: "(250)%20564-5406", fax: "(250)%20562-8188"
    }
    ,
    {
        url: "", industry: "industrial", title: "Hypower%20Systems", address1: "3223%20Millar%20Avenue", address2: "", state: "SK", country: "", region: "emea", phone: "(306)%20242-3111", fax: "(306)%20242-0860"
    }
    ,
    {
        url: "", industry: "industrial", title: "Hypower%20Systems", address1: "760%20-%201st%20Avenue%20East", address2: "", state: "SK", country: "", region: "emea", phone: "(306)%20721-2712", fax: "(306)%20721-2613"
    }
    ,
    {
        url: "", industry: "chemicals", title: "IMEX%20Filtertechnika%20Kft.", address1: "Tarczy-Hornoch%20Antal%20u%208", address2: "Aranyhegyi%20Ipari%20Park", state: "Sopron", country: "Hungary", region: "emea", phone: "%2B36.99.312.633", fax: "%2B36.99.322.633"
    }
    ,
    {
        url: "", industry: "industrial", title: "IMEX%20Filtertechnika%20Kft.", address1: "Tarczy-Hornoch%20Antal%20u%208", address2: "Aranyhegyi%20Ipari%20Park", state: "Sopron", country: "Hungary", region: "emea", phone: "%2B36.99.312.633", fax: "%2B36.99.322.633"
    }
    ,
    {
        url: "", industry: "power", title: "IMEX%20Filtertechnika%20Kft.", address1: "Tarczy-Hornoch%20Antal%20u%208", address2: "Aranyhegyi%20Ipari%20Park", state: "Sopron", country: "Hungary", region: "emea", phone: "%2B36.99.312.633", fax: "%2B36.99.322.633"
    }
    ,
    {
        url: "", industry: "medical", title: "IMP%20International%20Medical%20Products%20SA%2FNV", address1: "Chauss%C3%A9e%20de%20la%20Hulpe%20181%2F21", address2: "", state: "Brussels", country: "Belgium", region: "emea", phone: "%2B32%202%20660%2050%2075", fax: ""
    }
    ,
    {
        url: "", industry: "biopharma", title: "Importadora%20Schiller%20Cia%2C%20Ltda.", address1: "Santa%20Rosa%20Oe7-178%20y%20Pasaje%20Herrrera", address2: "", state: "Quito", country: "Ecuador", region: "americas", phone: "001.59.32.254.77.60%20%2F%205932.256.2891", fax: ""
    }
    ,
    {
        url: "", industry: "food", title: "Importadora%20Schiller%20Cia%2C%20Ltda.", address1: "Santa%20Rosa%20Oe7-178%20y%20Pasaje%20Herrrera", address2: "", state: "Quito", country: "Ecuador", region: "americas", phone: "001.59.32.254.77.60%20%2F%205932.256.2891", fax: ""
    }
    ,
    {
        url: "", industry: "food", title: "Industrial%20Focus%20Limited", address1: "16-18%20Simpson%20Brown%20Terrace", address2: "", state: "", country: "Trinidad%20West%20Indies", region: "americas", phone: "868-656-0694", fax: "868-656-8068"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Industrial%20Focus%20Limited", address1: "16-18%20Simpson%20Brown%20Terrace", address2: "", state: "", country: "Trinidad%20West%20Indies", region: "americas", phone: "868-656-0694", fax: "868-656-8068"
    }
    ,
    {
        url: "", industry: "food", title: "Industrial%20Focus%20Limited", address1: "16-18%20Simpson%20Brown%20Terrace", address2: "", state: "", country: "Trinidad%20West%20Indies", region: "americas", phone: "868-656-0694", fax: "868-656-8068"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Industrial%20Focus%20Limited", address1: "16-18%20Simpson%20Brown%20Terrace", address2: "", state: "", country: "Trinidad%20West%20Indies", region: "americas", phone: "868-656-0694", fax: "868-656-8068"
    }
    ,
    {
        url: "", industry: "food", title: "Industrial%20Focus%20Limited", address1: "16-18%20Simpson%20Brown%20Terrace", address2: "", state: "", country: "Trinidad%20West%20Indies", region: "americas", phone: "868-656-0694", fax: "868-656-8068"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Industrial%20Focus%20Limited", address1: "16-18%20Simpson%20Brown%20Terrace", address2: "", state: "", country: "Trinidad%20West%20Indies", region: "americas", phone: "868-656-0694", fax: "868-656-8068"
    }
    ,
    {
        url: "", industry: "food", title: "Industrial%20Focus%20Limited", address1: "16-18%20Simpson%20Brown%20Terrace", address2: "", state: "Cocoyea%2C%20City%20of%20San%20Fernando", country: "Trinidad%20West%20Indies", region: "americas", phone: "868-656-0694", fax: "868-656-8068"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Industrial%20Focus%20Limited", address1: "16-18%20Simpson%20Brown%20Terrace", address2: "", state: "Cocoyea%2C%20City%20of%20San%20Fernando", country: "Trinidad%20West%20Indies", region: "americas", phone: "868-656-0694", fax: "868-656-8068"
    }
    ,
    {
        url: "", industry: "industrial", title: "Industrial%20Focus%20Limited", address1: "16-18%20Simpson%20Brown%20Terrace", address2: "", state: "Cocoyea%2C%20City%20of%20San%20Fernando", country: "Trinidad%20West%20Indies", region: "americas", phone: "868-656-0694", fax: "868-656-8068"
    }
    ,
    {
        url: "", industry: "power", title: "Industrial%20Focus%20Limited", address1: "16-18%20Simpson%20Brown%20Terrace", address2: "", state: "Cocoyea%2C%20City%20of%20San%20Fernando", country: "Trinidad%20West%20Indies", region: "americas", phone: "868-656-0694", fax: "868-656-8068"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Inesco-Tech", address1: "Calle%20B%20%234%2C%20Dominicanos%20Ausentes", address2: "", state: "", country: "", region: "emea", phone: "(809)%20508-6500", fax: "(809)%20532-0741"
    }
    ,
    {
        url: "", industry: "food", title: "INNOFILT%20d.o.o", address1: "Gospodar%20Jevremova%2048", address2: "", state: "", country: "SERBIA", region: "emea", phone: "%2B381%2011%203283%20%20785", fax: "%2B381%2011%203283%20424"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Inseco%2C%20Incorporated", address1: "Mario%20Julia%20Industrial%20Park", address2: "C%20Street%20%23%20730", state: "San%20Juan", country: "PUERTO%20RICO", region: "americas", phone: "787.781.2655", fax: "787.793.3620"
    }
    ,
    {
        url: "", industry: "pallblue", title: "Inseco%2C%20Incorporated", address1: "Mario%20Julia%20Industrial%20Park", address2: "C%20Street%20%23%20730", state: "San%20Juan", country: "PUERTO%20RICO", region: "americas", phone: "787.781.2655", fax: "787.793.3620"
    }
    ,
    {
        url: "", industry: "industrial", title: "Inseco%2C%20Incorporated", address1: "Mario%20Julia%20Industrial%20Park", address2: "C%20Street%20%23%20730", state: "San%20Juan", country: "PUERTO%20RICO", region: "americas", phone: "787.781.2655", fax: "787.793.3620"
    }
    ,
    {
        url: "", industry: "microelec", title: "Inseco%2C%20Incorporated", address1: "Mario%20Julia%20Industrial%20Park", address2: "C%20Street%20%23%20730", state: "San%20Juan", country: "PUERTO%20RICO", region: "americas", phone: "787.781.2655", fax: "787.793.3620"
    }
    ,
    {
        url: "", industry: "power", title: "Inseco%2C%20Incorporated", address1: "Mario%20Julia%20Industrial%20Park", address2: "C%20Street%20%23%20730", state: "San%20Juan", country: "PUERTO%20RICO", region: "americas", phone: "787.781.2655", fax: "787.793.3620"
    }
    ,
    {
        url: "", industry: "pallwater", title: "Inseco%2C%20Incorporated", address1: "Mario%20Julia%20Industrial%20Park", address2: "C%20Street%20%23%20730", state: "San%20Juan", country: "PUERTO%20RICO", region: "americas", phone: "787.781.2655", fax: "787.793.3620"
    }
    ,
    {
        url: "", industry: "food", title: "Inseco%2C%20Incorporated", address1: "Mario%20Julia%20Industrial%20Park", address2: "C%20Street%20%23%20730", state: "San%20Juan", country: "PUERTO%20RICO", region: "americas", phone: "787.781.2655", fax: "787.793.3620"
    }
    ,
    {
        url: "", industry: "consumer-water", title: "Inseco%2C%20Incorporated", address1: "Mario%20Julia%20Industrial%20Park", address2: "C%20Street%20%23%20730", state: "San%20Juan", country: "PUERTO%20RICO", region: "americas", phone: "787.781.2655", fax: "787.793.3620"
    }
    ,
    {
        url: "", industry: "medical", title: "Inseco%2C%20Incorporated", address1: "Mario%20Julia%20Industrial%20Park", address2: "C%20Street%20%23%20730", state: "San%20Juan", country: "PUERTO%20RICO", region: "americas", phone: "787.781.2655", fax: "787.793.3620"
    }
    ,
    {
        url: "", industry: "biopharma", title: "Inseco%2C%20Incorporated", address1: "Mario%20Julia%20Industrial%20Park", address2: "C%20Street%20%23%20730", state: "San%20Juan", country: "PUERTO%20RICO", region: "americas", phone: "787.781.2655", fax: "787.793.3620"
    }
    ,
    {
        url: "", industry: "biopharma", title: "Inseco%2C%20Incorporated", address1: "Mario%20Julia%20Industrial%20Park", address2: "C%20Street%20%23%20730", state: "San%20Juan", country: "PUERTO%20RICO", region: "americas", phone: "787-781-2655", fax: "787-793-3620"
    }
    ,
    {
        url: "", industry: "pallwater", title: "Instrument%20%26%20Supply%2C%20Inc.", address1: "Newton%20White%2C%20P.E.", address2: "141%20Technic%20Circle", state: "AR", country: "USA", region: "americas", phone: "501%20262%203282", fax: "501%20262%204847"
    }
    ,
    {
        url: "", industry: "pallwater", title: "Instrument%20%26%20Supply%2C%20Inc.%20West", address1: "Marc%20Hatfield", address2: "4175%20Mulligan%20Drive", state: "CO", country: "USA", region: "americas", phone: "970.535.0571", fax: ""
    }
    ,
    {
        url: "", industry: "medical", title: "INSUMOS%20MEDICOS%20HOSPITALARIOS%20LTDA.-%20Critical%20Care", address1: "Hernando%20De%20Aguirre%20%23162%2C%20%20Oficina%20803-805", address2: "", state: "", country: "Santiago%20De%20Chile", region: "americas", phone: "562-234-4089", fax: "562-234-4089"
    }
    ,
    {
        url: "", industry: "food", title: "InTeCo%20Group%20Ltd.", address1: "8%2C%20Vsevolod%20Nesayko%20Street%20Office%2076", address2: "Kiev%204108", state: "", country: "Ukraine", region: "emea", phone: "%2B38%20044%205011995", fax: ""
    }
    ,
    {
        url: "", industry: "food", title: "Inter%20Technology%20Company", address1: "Milchakova%20Str.%2C%208%2C%20office%2076", address2: "", state: "Kiew", country: "Ukraine", region: "emea", phone: "%2B380%2044%20501%2019%2095", fax: "%2B380%2044%20501%2019%2096"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Intergain%20International%20Pvt.%20Ltd.", address1: "837%2C%20St.%2026%2C%20G%20-%209%2F%201%2C", address2: "", state: "Islamabad", country: "Pakistan", region: "emea", phone: "%2B92-51-2261389", fax: "%2B92-51-2261399"
    }
    ,
    {
        url: "", industry: "biopharma", title: "INTERSCIENCE%20SDN%20BHD", address1: "2%2C%20JLN%20SG%20KAYU%20ARA%2032%2F38", address2: "BERJAYA%20INDUSTRIAL%20PARK", state: "SELANGOR", country: "MALAYSIA", region: "asiapac", phone: "%2B%2060%203%205740%209888", fax: "%2B%2060%203%205740%209898"
    }
    ,
    {
        url: "", industry: "pallwater", title: "Interstate%20Utility%20Sales%2C%20Inc.", address1: "Robert%20Gotherman", address2: "6831-B%20Fairview%20Road", state: "NC", country: "", region: "emea", phone: "704.367.1970", fax: "704.367.1690"
    }
    ,
    {
        url: "", industry: "pallblue", title: "Ipexa%20Sarl", address1: "Rue%20Banafsaj%2C%20Angle%20Omar%20Al%20Khayam", address2: "Beaus%C3%A9jour%20-%20R%C3%A9sidence%20%22Yasmine%20B%22", state: "", country: "Maroc", region: "emea", phone: "%2B212%20522%2094%2077%2066", fax: "%2B212%20522%2094%2008%2086"
    }
    ,
    {
        url: "", industry: "microelec", title: "Ipexa%20Sarl", address1: "Rue%20Banafsaj%2C%20Angle%20Omar%20Al%20Khayam", address2: "Beaus%C3%A9jour%20-%20R%C3%A9sidence%20%22Yasmine%20B%22", state: "", country: "Maroc", region: "emea", phone: "%2B212%20522%2094%2077%2066", fax: "%2B212%20522%2094%2008%2086"
    }
    ,
    {
        url: "", industry: "biopharma", title: "Intenta%20LLC", address1: "Shchorsa%20Str.,%20House%2015,%20Block%203", address2: "Kiev%2003150", state: "", country: "Ukraine", region: "emea", phone: "%2B380%2044%20388%204375", fax: "%2B380%2044%20388%204375"
    }
    ,
    {
        url: "", industry: "biopharma", title: "Ipexa%20Sarl", address1: "Rue%20Banafsaj%2C%20Angle%20Omar%20El%20Khayam", address2: "R%C3%A9sidence%20Yasmine%20B%2C%20Beaus%C3%A9jour,%20Casablanca%2020000", state: "", country: "Morocco", region: "emea", phone: "%2B212%20522%2094%2077%2066", fax: "%2B212%20522%2094%2008%2086"
    }
    ,
    {
        url: "", industry: "food", title: "Ipexa%20Sarl", address1: "Rue%20Banafsaj%2C%20Angle%20Omar%20Al%20Khayam", address2: "Beaus%C3%A9jour%20-%20R%C3%A9sidence%20%22Yasmine%20B%22", state: "", country: "Maroc", region: "emea", phone: "%2B212%20522%2094%2077%2066", fax: "%2B212%20522%2094%2008%2086"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Ipexa%20Sarl", address1: "Rue%20Banafsaj%2C%20Angle%20Omar%20Al%20Khayam", address2: "Beaus%C3%A9jour%20-%20R%C3%A9sidence%20%22Yasmine%20B%22", state: "", country: "Maroc", region: "emea", phone: "%2B212%20522%2094%2077%2066", fax: "%2B212%20522%2094%2008%2086"
    }
    ,
    {
        url: "", industry: "biopharma", title: "Ipros%20d.o.o.", address1: "Cesta%20v%20Gorice%2030,%20Ljublana%201000", address2: "", state: "", country: "Slovenia", region: "emea", phone: "%2B386%201%20200%2026%2020", fax: "%2B386%201%20423%2018%2024"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Ipros%20d.o.o.", address1: "Cesta%20v%20Gorice%2030%20%20%2F%201000%20Ljubljana", address2: "", state: "", country: "Slovenia", region: "emea", phone: "%2B386%201%20200%2026%2020", fax: "%2B386%201%20423%2018%2024"
    }
    ,
    {
        url: "", industry: "medical", title: "Ipros%20d.o.o.", address1: "Cesta%20v%20Gorice%2030%20%20%2F%201000%20Ljubljana", address2: "", state: "", country: "Slovenia", region: "emea", phone: "%2B386%201%20200%2026%2020", fax: "%2B386%201%20423%2018%2024"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Independent%20Trading%20Group%20Company%20W.L.L", address1: "Office%2011%20%26%2012%2C%20Waha%20Mall%2C%20Dajeej%20Area%2C", address2: "", state: "Farwania", country: "Kuwait", region: "emea", phone: "%2B965%204317474", fax: "%2B965%204336186"
    }
    ,
    {
        url: "", industry: "power", title: "Independent%20Trading%20Group%20Company%20W.L.L", address1: "Office%2011%20%26%2012%2C%20Waha%20Mall%2C%20Dajeej%20Area%2C", address2: "", state: "Farwania", country: "Kuwait", region: "emea", phone: "%2B965%204317474", fax: "%2B965%204336186"
    }
    ,
    {
        url: "", industry: "chemicals", title: "J.A.%20DIAZ%20%26%20CIA%2C%20S.A.%20DE%20C.V.", address1: "Ave.%20La%20Paz%20%232604%2C%20Arcos%20Vallarta", address2: "", state: "Jal", country: "Mexico", region: "americas", phone: "011.5233.3124.4000", fax: "011.5233.3124.4001"
    }
    ,
    {
        url: "", industry: "power", title: "J.A.%20DIAZ%20%26%20CIA%2C%20S.A.%20DE%20C.V.", address1: "Ave.%20La%20Paz%20%232604%2C%20Arcos%20Vallarta", address2: "", state: "Jal", country: "Mexico", region: "americas", phone: "011.5233.3124.4000", fax: "011.5233.3124.4001"
    }
    ,
    {
        url: "", industry: "industrial", title: "J.M.%20Grimstad%20Inc.", address1: "S84%20W18887%20Enterprise%20Drive", address2: "", state: "WI", country: "USA", region: "americas", phone: "414.422.2300", fax: "414.422.2339"
    }
    ,
    {
        url: "", industry: "medical", title: "JB%20REPRESENTACIONES", address1: "Pedregal%20N34-42%20y%20Rumipamba", address2: "", state: "Quito", country: "Ecuador", region: "americas", phone: "(011)%205932-243-5401", fax: "224-3800%3B%20225-6064"
    }
    ,
    {
        url: "", industry: "pallwater", title: "JBI%20Water", address1: "3386%20Tartan%20Trail", address2: "", state: "CA", country: "USA", region: "americas", phone: "916%20933%205500", fax: "916%20933%205573"
    }
    ,
    {
        url: "", industry: "pallwater", title: "JBI%20Water", address1: "2299%20Loch%20Way", address2: "", state: "CA", country: "USA", region: "americas", phone: "916%20939%200728", fax: "916%20939%200276"
    }
    ,
    {
        url: "", industry: "pallwater", title: "JBI%20Water", address1: "26602%20Estanciero%20Drive", address2: "", state: "CA", country: "USA", region: "americas", phone: "949%20859%202333", fax: "949%20859%202882"
    }
    ,
    {
        url: "", industry: "industrial", title: "J.M.%20Grimstad%20Inc.", address1: "6203%20Chancellor%20Drive", address2: "", state: "IA", country: "", region: "emea", phone: "319.277.8550", fax: "319.277.1691"
    }
    ,
    {
        url: "", industry: "industrial", title: "J.M.%20Grimstad%20Inc.", address1: "1100%20Zane%20Avenue%20North", address2: "", state: "MN", country: "", region: "emea", phone: "763.544.6100", fax: "763.544.0282"
    }
    ,
    {
        url: "", industry: "industrial", title: "John%20Morfield%20Limited", address1: "Unit%2098%2C%20Sadler%20Forster%20Way%2C", address2: "Teeside%20Industrial%20Estate%2C", state: "Cleveland.", country: "", region: "emea", phone: "(01642)%20760555", fax: "(01642)%20765124"
    }
    ,
    {
        url: "", industry: "pallwater", title: "Johnson%20Equipment%20Company", address1: "1200%20S.%20Acadian%20Thruway", address2: "", state: "LA", country: "USA", region: "americas", phone: "225-383-4999", fax: "225-383-4998"
    }
    ,
    {
        url: "", industry: "biopharma", title: "Klarwin", address1: "Str.%20Horei%20nr.29,%202nd%20District", address2: "Bucharest%20021377", state: "", country: "Moldavia", region: "emea", phone: "%2B4%20021%20313%2054%2073", fax: "%2B4%20021%20252%2044%2071"
    }
    ,
    {
        url: "", industry: "biopharma", title: "Klarwin", address1: "Str.%20Horei%20nr.29,%202nd%20District", address2: "Bucharest%20021377", state: "", country: "Romania", region: "emea", phone: "%2B4%20021%20313%2054%2073", fax: "%2B4%20021%20252%2044%2071"
    }
    ,
    {
        url: "", industry: "pallwater", title: "Koester%20%26%20Associates", address1: "RR%235%2C%20Box%20620%2C%20Suite%207", address2: "Madison%20Blvd.", state: "NY", country: "", region: "emea", phone: "315.697.3800", fax: "315.697.3888"
    }
    ,
    {
        url: "", industry: "biopharma", title: "KOSSODO%20SAC", address1: "Chota%201161%20Cercado%20de%20Lima", address2: "", state: "Lima", country: "Peru", region: "americas", phone: "%2B511-619-8400", fax: "%2B511-619-8401"
    }
    ,
    {
        url: "", industry: "laboratory", title: "KOSSODO%20SAC", address1: "Chota%201161%20Cercado%20de%20Lima", address2: "", state: "Lima", country: "Peru", region: "americas", phone: "%2B511-619-8400", fax: "%2B511-619-8401"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Labart%20Sp.%20z%20o.o.", address1: "A%20VWR%20International%20Company", address2: "Limbowa%205", state: "", country: "", region: "emea", phone: "058%2032%2038%20210", fax: "058%2032%2038%20205"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Labomar", address1: "Draghe%20Ivanisevica%2014", address2: "", state: "Zagreb", country: "Croatia", region: "emea", phone: "%2B385%201%20389%200156", fax: "%2B385%201%20389%208125"
    }
    ,
    {
        url: "", industry: "medical", title: "LABOQUIMICA%20%20AUE%20S.A.", address1: "Urb.%20Industrial%20Lebrun", address2: "Av.%20Principal%2C%20Edif%20Cofasa%2C%20PB", state: "Petare%2C", country: "Venezuela", region: "americas", phone: "%2B58-212-256-6833", fax: "%2B58-212-256-8464"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Laboratorios%20Cienvar%2C%20S.A.", address1: "Pte.%20Restaurada%20a%20Rio", address2: "Edif%20Cienvar%20Oeste%2020%2C%20Quinta%20Crespo", state: "Caracas", country: "Venezuela", region: "americas", phone: "%2B58212-484-0241", fax: "%2B58212-481-0697"
    }
    ,
    {
        url: "", industry: "medical", title: "Laboratorios%20Cienvar%2C%20S.A.", address1: "Pte.%20Restaurada%20a%20Rio", address2: "Edif%20Cienvar%20Oeste%2020%2C%20Quinta%20Crespo", state: "Caracas", country: "Venezuela", region: "americas", phone: "%2B58212-484-0241", fax: "%2B58212-481-0697"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Hexis%20Cient%C3%ADfica%20LTDA", address1: "Av.%20Antonieta%20Piva%20Barranqueiros%2C%20385", address2: "Distrito%20Industrial%2C%20CEP%2013208-990", state: "Jundia%C3%AD", country: "Brazil", region: "americas", phone: "%2B55%2011%204589-2600", fax: ""
    }
    ,
    {
        url: "", industry: "pallwater", title: "Ley%20%26%20Assoc", address1: "David%20Crain", address2: "5400%20Newport%20Drive%2C%20Suite%2010", state: "IL", country: "USA", region: "americas", phone: "847-392-0990", fax: "847.392.1095"
    }
    ,
    {
        url: "", industry: "power", title: "Light%20Metals%20STC", address1: "Krasnoyarskiy%20Rabochiy%20Avenue%20160", address2: "Building%2019%2C%20office%2016", state: "", country: "Russia", region: "emea", phone: "%2B7%20391%20269-56-47", fax: "%2B7%20391%20269-56-53"
    }
    ,
    {
        url: "", industry: "biopharma", title: "Likkon%20Ltd.", address1: "Konaklar%20Mah.%20Zencefil%20Sok.%205%2F3", address2: "4.%20Levent%2034330,%20Istanbul", state: "Istanbul", country: "Turkey", region: "emea", phone: "%2B90%20212%20279%2087%2083", fax: "%2B90%20212%20269%2099%2061"
    }
    ,
    {
        url: "", industry: "industrial", title: "LubriTec%20LLC", address1: "Obukhovskoy%20Oborony%20pr.%2C%20271%2C%20office%20833", address2: "", state: "", country: "Russia", region: "emea", phone: "%2B7%20(812)%20633-35-38", fax: ""
    }
    ,
    {
        url: "", industry: "medical", title: "M.S%20Jacovides%20%26%20Co.%20Ltd.", address1: "8%20Ayios%20Nicolaos%20Street", address2: "1055%20NicosiaS", state: "Nicosia", country: "CYPRUS", region: "emea", phone: "%2B357%2022%20757188", fax: "%2B357%2022%20750604"
    }
    ,
    {
        url: "", industry: "medical", title: "M.S.%20Jacovides%20Hellas%20S.A.", address1: "24%20Filellinon%20Street%2C", address2: "", state: "", country: "Athens", region: "emea", phone: "%2B30210%206856870", fax: "%2B30210%206817608"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Maquinaria%20Doga%20S.A.%20de%20C.V.", address1: "Puerto%20Vallarta%20No.%20685%2C%20Col.%20La%20F%C3%A9", address2: "", state: "N.L.", country: "Mexico", region: "americas", phone: "(011)%205281-8144-1100", fax: ""
    }
    ,
    {
        url: "", industry: "medical", title: "Medica%20Europe%20BV", address1: "Gallieresweg%2020", address2: "Postbus%20746", state: "", country: "Netherlands", region: "emea", phone: "%2B31%20412%2067%2013%2000", fax: "%2B31%20412%2067%201310"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Interscience%20Sdn%20Bhd", address1: "2%2C%20Jalan%20Sg.%20Kayu%20Ara%2032/38%2C%20Berjaya%20Industrial%20Park", address2: "40460%20Shah%20Alam", state: "Selangor", country: "Malaysia", region: "asiapac", phone: "%2B%20(60)%203%205740%209888%2C%20Ext%20235%20", fax: "%2B%20(60)%203%205740%209866%20"
    }
    ,
    {
        url: "", industry: "pallwater", title: "Moss%20Kelley%2C%20INC.", address1: "725%20Primera%20Blvd.%20%23155", address2: "", state: "FL", country: "USA", region: "americas", phone: "407-805-0063", fax: ""
    }
    ,
    {
        url: "", industry: "power", title: "Munay%20Ecology%20LLC", address1: "Timiryazeva%20str.%2C%2042", address2: "%22ExpoCity%22%2C%20Pavillion%2023a", state: "Almaty", country: "Kazakhstan", region: "emea", phone: "%2B8%20727%20245-88-16", fax: "%2B8%20727%20245-88-34"
    }
    ,
    {
        url: "", industry: "pallwater", title: "Municipal%20Equipment%20Company", address1: "2735%20Mercantile%20Drive", address2: "", state: "MO", country: "USA", region: "americas", phone: "314%20645%202400", fax: "314%20645%205309"
    }
    ,
    {
        url: "", industry: "industrial", title: "NAMHAI%20TECHNOLOGY%20COMPANY%20LIMITED", address1: "10%2FF%2C%20COTANA%20GROUP%20Building%2C%20Lot%20CC5A", address2: "", state: "Hoang%20Mai%20Dist%2C%20Hanoi", country: "Vietnam", region: "asiapac", phone: "%2B%2084%204%203642%205535", fax: "%2B%2084%204%203221%206301"
    }
    ,
    {
        url: "", industry: "food", title: "Noblex%20Ltd.", address1: "8%20Shanidze%20Str.%200179", address2: "51%20Kakhety%20Hwy.%200190", state: "Tbilisi", country: "Georgia", region: "emea", phone: "%2B995%599%655757", fax: ""
    }
    ,
    {
        url: "", industry: "food", title: "Noramut", address1: "Komitasa%20st.%2C%2025%2C%20office%2021", address2: "", state: "Armenia", country: "", region: "emea", phone: "%2B%20(374%2010)%20272985", fax: "%2B%20(374%2010)%20477227"
    }
    ,
    {
        url: "", industry: "laboratory", title: "NOVA%20ANALITICA%20IMP.%20EXP.%20LTDA", address1: "Rua%20Assungui%2C%20432", address2: "Bosque%20de%20Saude", state: "", country: "Brazil", region: "americas", phone: "%2B5511-2162-8080", fax: "%2B5511-2162-8081"
    }
    ,
    {
        url: "", industry: "industrial", title: "NOVATEC%20INDUSTRIAL", address1: "Ofibodega%20Milano%20%2331", address2: "100%20N%20y%20900%20O%20del%20puente%20rio%20Virilla", state: "Belen", country: "COSTA%20RICA", region: "americas", phone: "%2B506-2239-1111", fax: "%2B506-2239-1212"
    }
    ,
    {
        url: "", industry: "biopharma", title: "NOVATEC%20INDUSTRIAL", address1: "Ofibodega%20Milano%20%2331", address2: "100%20N%20y%20900%20O%20del%20puente%20rio%20Virilla", state: "Belen", country: "COSTA%20RICA", region: "americas", phone: "%2B506-2239-1111", fax: "%2B506-2239-1212"
    }
    ,
    {
        url: "", industry: "microelec", title: "NOVATEC%20INDUSTRIAL", address1: "Ofibodega%20Milano%20%2331", address2: "100%20N%20y%20900%20O%20del%20puente%20rio%20Virilla", state: "Belen", country: "COSTA%20RICA", region: "americas", phone: "%2B506-2239-1111", fax: "%2B506-2239-1212"
    }
    ,
    {
        url: "", industry: "laboratory", title: "NOVATEC%20INDUSTRIAL", address1: "Ofibodega%20Milano%20%2331", address2: "100%20N%20y%20900%20O%20del%20puente%20rio%20Virilla", state: "Belen", country: "COSTA%20RICA", region: "americas", phone: "%2B506-2239-1111", fax: "%2B506-2239-1212"
    }
    ,
    {
        url: "", industry: "chemicals", title: "NOVATEC%20INDUSTRIAL", address1: "Ofibodega%20Milano%20%2331", address2: "100%20N%20y%20900%20O%20del%20puente%20rio%20Virilla", state: "Belen", country: "COSTA%20RICA", region: "americas", phone: "%2B506-2239-1111", fax: "%2B506-2239-1212"
    }
    ,
    {
        url: "", industry: "food", title: "NOVATEC%20INDUSTRIAL", address1: "Ofibodega%20Milano%20%2331", address2: "100%20N%20y%20900%20O%20del%20puente%20rio%20Virilla", state: "Belen", country: "COSTA%20RICA", region: "americas", phone: "%2B506-2239-1111", fax: "%2B506-2239-1212"
    }
    ,
    {
        url: "", industry: "power", title: "NOVATEC%20INDUSTRIAL", address1: "Ofibodega%20Milano%20%2331", address2: "100%20N%20y%20900%20O%20del%20puente%20rio%20Virilla", state: "Belen", country: "COSTA%20RICA", region: "americas", phone: "%2B506-2239-1111", fax: "%2B506-2239-1212"
    }
    ,
    {
        url: "", industry: "power", title: "NPO%20DST%20LLC", address1: "Moskovskaya%20street%2068", address2: "", state: "", country: "Russia", region: "emea", phone: "%2B7%20912%2026%2011%20020", fax: ""
    }
    ,
    {
        url: "", industry: "industrial", title: "NPO%20DST%20LLC", address1: "Moskovskaya%C2%A0street%2068", address2: "Yekaterinburg", state: "Russia", country: "", region: "emea", phone: "%2B7%20912%2026%2011%20020", fax: ""
    }
    ,
    {
        url: "", industry: "medical", title: "Obex%20Medical%20Ltd", address1: "303%20Manukau%20Road", address2: "P%20O%20Box%2026%20511", state: "Auckland", country: "", region: "emea", phone: "%2B64%209%20630%203456", fax: "%2B64%209%20630%209009"
    }
    ,
    {
        url: "", industry: "medical", title: "OMNICARE%20GROUP", address1: "13557%20Parkland%20Court", address2: "", state: "IL", country: "", region: "emea", phone: "(708)%20949-8802", fax: "(708)%20301-0438"
    }
    ,
    {
        url: "", industry: "medical", title: "OXI-RENT%20(Critical%20Care%20products)", address1: "Intersecci%C3%B3n%20Ave.%20Jerusalem%20y%20Carretera%20Panamerica", address2: "Hiper%20Mall%20Las%20Cascadas%2C%20Local%20No.%20210-B", state: "La%20Libertad", country: "El%20Salvador", region: "americas", phone: "%2B503-2243-1156", fax: "%2B503-2243-1156"
    }
    ,
    {
        url: "", industry: "medical", title: "OXI-RENT%20S.A.", address1: "Boulevard%20Vista%20Hermosa%2025-19", address2: "Zona%2015%2C%20Edificio%20Multimedica", state: "Ciudad%20de%20Guatemala", country: "Guatemala", region: "americas", phone: "502-385-7573", fax: "502-385-7574"
    }
    ,
    {
        url: "", industry: "pallblue", title: "Oy%20Colly%20Company%20Ab", address1: "Hankasuontie%203%20A%20FIN-00391%20Helsinki", address2: "", state: "", country: "", region: "emea", phone: "%2B358%20(0)29%20006%20150", fax: "%2B358%20(0)29%20006%201150"
    }
    ,
    {
        url: "", industry: "industrial", title: "Oy%20Colly%20Company%20Ab", address1: "Hankasuontie%203%20A%20FIN-00391%20Helsinki", address2: "", state: "", country: "", region: "emea", phone: "%2B358%20(0)29%20006%20150", fax: "%2B358%20(0)29%20006%201150"
    }
    ,
    {
        url: "", industry: "biopharma", title: "Oy%20Colly%20Company%20Ab", address1: "PO%20Box%20103%20(Hankasuontie%203%20A)", address2: "Helsinki%2000391", state: "", country: "Finland", region: "emea", phone: "%2B358%20(0)29%20006%20150", fax: "%2B358%20(0)29%20006%201150"
    }
    ,
    {
        url: "", industry: "microelec", title: "Oy%20Colly%20Company%20Ab", address1: "Hankasuontie%203%20A%20FIN-00391%20Helsinki", address2: "", state: "", country: "", region: "emea", phone: "%2B358%20(0)29%20006%20150", fax: "%2B358%20(0)29%20006%201150"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Oy%20Colly%20Company%20Ab", address1: "Hankasuontie%203%20A%20FIN-00391%20Helsinki", address2: "", state: "", country: "", region: "emea", phone: "%2B358%20(0)29%20006%20150", fax: "%2B358%20(0)29%20006%201150"
    }
    ,
    {
        url: "", industry: "food", title: "Oy%20Colly%20Company%20Ab", address1: "Hankasuontie%203%20A%20FIN-00391%20Helsinki", address2: "", state: "", country: "", region: "emea", phone: "%2B358%20(0)29%20006%20150", fax: "%2B358%20(0)29%20006%201150"
    }
    ,
    {
        url: "", industry: "power", title: "Oy%20Colly%20Company%20Ab", address1: "Hankasuontie%203%20A%20FIN-00391%20Helsinki", address2: "", state: "", country: "", region: "emea", phone: "%2B358%20(0)29%20006%20150", fax: "%2B358%20(0)29%20006%201150"
    }
    ,
    {
        url: "", industry: "laboratory", title: "P.Intertrade%20Equipment%20Co.%2CLtd", address1: "250%2F1%20Soi%20Charoennakorn%2034", address2: "Charoennakorn%20Rd", state: "Bangkok", country: "Thailand", region: "asiapac", phone: "%2B66-2862-4092-6", fax: "%2B66-2862-4099"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Panid%20Engineering%20Co%20Ltd", address1: "448%20Asadabadi%20Street", address2: "PO%20Box%2014155-5618", state: "Tehran", country: "Iran", region: "emea", phone: "%2B98%2021%208804%209697", fax: "%2B98%2021%208804%209889"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Panid%20Engineering%20Co%20Ltd", address1: "448%20Asadabadi%20Street", address2: "PO%20Box%2014155-5618", state: "Tehran", country: "Iran", region: "emea", phone: "%2B98%2021%208804%209697", fax: "%2B98%2021%208804%209889"
    }
    ,
    {
        url: "", industry: "food", title: "Panid%20Engineering%20Co%20Ltd", address1: "448%20Asadabadi%20Street", address2: "PO%20Box%2014155-5618", state: "Tehran", country: "Iran", region: "emea", phone: "%2B98%2021%208804%209697", fax: "%2B98%2021%208804%209889"
    }
    ,
    {
        url: "", industry: "power", title: "PCo%20Limited", address1: "Ba%C4%9Fdat%20Caddesi%20No%20193", address2: "D%209-10%20Ciftehavuzlar", state: "", country: "Turkey", region: "emea", phone: "%2B90%20(216)%20340%203739", fax: "%2B90%20(%20216)%20428%209211"
    }
    ,
    {
        url: "", industry: "food", title: "PCo%20Limited", address1: "Ba%C4%9Fdat%20Caddesi%20No%20193", address2: "D%209-10%20Ciftehavuzlar", state: "Istanbul", country: "Turkey", region: "emea", phone: "%2B90%20216%20340%203739", fax: "%2B90%20216%20428%209211"
    }
    ,
    {
        url: "", industry: "chemicals", title: "PCo%20Limited", address1: "Ba%C4%9Fdat%20Caddesi%20No%20193", address2: "D%209-10%20Ciftehavuzlar", state: "Istanbul", country: "Turkey", region: "emea", phone: "%2B90%20216%20340%203739", fax: "%2B90%20216%20428%209211"
    }
    ,
    {
        url: "", industry: "industrial", title: "PCo%20Limited", address1: "Ba%C4%9Fdat%20Caddesi%20No%20193", address2: "D%209-10%20Ciftehavuzlar", state: "Istanbul", country: "Turkey", region: "emea", phone: "%2B90%20216%20340%203739", fax: "%2B90%20216%20428%209211"
    }
    ,
    {
        url: "", industry: "power", title: "PCo%20Limited", address1: "Ba%C4%9Fdat%20Caddesi%20No%20193", address2: "D%209-10%20Ciftehavuzlar", state: "Istanbul", country: "Turkey", region: "emea", phone: "%2B90%20216%20340%203739", fax: "%2B90%20216%20428%209211"
    }
    ,
    {
        url: "", industry: "food", title: "PETALS%20INTERNATIONAL%20TRADING", address1: "P.O.Box%2020542%2C", address2: "", state: "Manama", country: "Kingdom%20Of%20Bahrain", region: "emea", phone: "%2B973%2017712752", fax: "%2B973%2017714724"
    }
    ,
    {
        url: "", industry: "chemicals", title: "PETROMECH", address1: "Petroleum%20Mechanical%20Trading%20Co", address2: "Po%20Box%20828", state: "Doha", country: "Qatar", region: "emea", phone: "%2B%20974%204434802", fax: "%2B%20974%204327022"
    }
    ,
    {
        url: "", industry: "power", title: "PETROMECH", address1: "Petroleum%20Mechanical%20Trading%20Co", address2: "Po%20Box%20828", state: "Doha", country: "Qatar", region: "emea", phone: "%2B%20974%204434802", fax: "%2B%20974%204327022"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Pnoi%20Lab", address1: "7%20Valaoritou%20Str", address2: "", state: "Athens", country: "Greece", region: "emea", phone: "%2B30%20210%206896%20515", fax: "%2B30%20210%206985%20374"
    }
    ,
    {
        url: "", industry: "power", title: "PowerFlow%20Fluid%20Systems", address1: "3775%20Marquis%20Drive", address2: "Suite%20125", state: "Texas", country: "USA", region: "americas", phone: "972.276.5554", fax: "972.276.2350"
    }
    ,
    {
        url: "", industry: "power", title: "PowerFlow%20Fluid%20Systems", address1: "3606%20East%20Southern%20Ave.%20%232", address2: "", state: "AZ", country: "USA", region: "americas", phone: "(866)%20371-2175", fax: "(602)%20438-7127"
    }
    ,
    {
        url: "", industry: "power", title: "PowerFlow%20Fluid%20Systems", address1: "100%20SW%20Scherer%20Road", address2: "", state: "MO", country: "USA", region: "americas", phone: "(816)%20531-3800", fax: "(816)%20531-3806"
    }
    ,
    {
        url: "", industry: "aerospace", title: "Powerpack", address1: "R.%20Gal.%20Rabelo%2052%20%E2%80%93%20Gavea", address2: "", state: "Rio%20de%20Janeiro%20%E2%80%93%20RJ", country: "Brasil", region: "americas", phone: "55-21-2512-9900", fax: "55-21-2512-8027"
    }
    ,
    {
        url: "", industry: "industrial", title: "Precision%20Chile", address1: "Avda.%20El%20Salto%204291%20Huechuraba", address2: "", state: "", country: "Chile", region: "americas", phone: "%2B562.24226000", fax: ""
    }
    ,
    {
        url: "", industry: "industrial", title: "PRECISION%20PERU%20S.A.", address1: "Av.%20Republica%20de%20Panama%202131", address2: "", state: "Lima", country: "Peru", region: "americas", phone: "%2B511-%20265-6666", fax: "%2B511-265-1058"
    }
    ,
    {
        url: "", industry: "chemicals", title: "PRECISION%20PERU%20S.A.", address1: "Av.%20Republica%20de%20Panama%202131", address2: "", state: "Lima", country: "Peru", region: "americas", phone: "%2B511-%20265-6666", fax: "%2B511-265-1058"
    }
    ,
    {
        url: "", industry: "power", title: "PRECISION%20PERU%20S.A.", address1: "Av.%20Republica%20de%20Panama%202131", address2: "", state: "Lima", country: "Peru", region: "americas", phone: "%2B511-%20265-6666", fax: "%2B511-265-1058"
    }
    ,
    {
        url: "", industry: "industrial", title: "Pressure%20Hydraulics%20Limited", address1: "Centaur%20Street", address2: "Carlow%2C", state: "", country: "Ireland", region: "emea", phone: "00%20353%20503%2043601", fax: "00%20353%20503%2043731"
    }
    ,
    {
        url: "", industry: "power", title: "Primorskiy%20BRIZ%20LLC", address1: "Borisenko%20str.%2C%2033%2C%20office%20303", address2: "", state: "", country: "Russia", region: "emea", phone: "%2B7%20(423)%20263-86-56", fax: ""
    }
    ,
    {
        url: "", industry: "chemicals", title: "Klarwin", address1: "29%20Horei%20Street", address2: "District%202", state: "", country: "Romania", region: "emea", phone: "%2B40%2021%20313%2054%2073", fax: "%2B40%2021%20315%2072%2064"
    }
    ,
    {
        url: "", industry: "pallblue", title: "Klarwin", address1: "29%20Horei%20Street", address2: "District%202", state: "", country: "Romania", region: "emea", phone: "%2B40%2021%20313%2054%2073", fax: "%2B40%2021%20315%2072%2064"
    }
    ,
    {
        url: "", industry: "industrial", title: "Klarwin", address1: "29%20Horei%20Street", address2: "District%202", state: "", country: "Romania", region: "emea", phone: "%2B40%2021%20313%2054%2073", fax: "%2B40%2021%20315%2072%2064"
    }
    ,
    {
        url: "", industry: "microelec", title: "Klarwin", address1: "29%20Horei%20Street", address2: "District%202", state: "", country: "Romania", region: "emea", phone: "%2B40%2021%20313%2054%2073", fax: "%2B40%2021%20315%2072%2064"
    }
    ,
    {
        url: "", industry: "power", title: "Klarwin", address1: "29%20Horei%20Street", address2: "District%202", state: "", country: "Romania", region: "emea", phone: "%2B40%2021%20313%2054%2073", fax: "%2B40%2021%20315%2072%2064"
    }
    ,
    {
        url: "", industry: "pallwater", title: "Klarwin", address1: "29%20Horei%20Street", address2: "District%202", state: "", country: "Romania", region: "emea", phone: "%2B40%2021%20313%2054%2073", fax: "%2B40%2021%20315%2072%2064"
    }
    ,
    {
        url: "", industry: "food", title: "Klarwin", address1: "29%20Horei%20Street", address2: "District%202", state: "", country: "Romania", region: "emea", phone: "%2B40%2021%20313%2054%2073", fax: "%2B40%2021%20315%2072%2064"
    }
    ,
    {
        url: "", industry: "medical", title: "Klarwin", address1: "29%20Horei%20Street", address2: "District%202", state: "", country: "Romania", region: "emea", phone: "%2B40%2021%20313%2054%2073", fax: "%2B40%2021%20315%2072%2064"
    }
    ,
    {
        url: "", industry: "food", title: "Profilter%20Kazakhstan%20Ltd", address1: "Seifullina%2011%2D2%20050011%20Almaty", address2: "", state: "Almaty", country: "Kazachstan", region: "emea", phone: "%2B7%20727%203514464", fax: ""
    }
    ,
    {
        url: "", industry: "medical", title: "PROMED", address1: "Parque%20Industrial%20Costa%20Del%20Este", address2: "Calle%202nda%2C%20Edificio%20PROMED", state: "Panam%C3%A1", country: "Republica%20De%20Panam%C3%A1", region: "americas", phone: "507-271-3156", fax: "507-271-3115"
    }
    ,
    {
        url: "", industry: "medical", title: "PROMED%20%20EL%20SALVADOR%20S.A.%20DE%20C.V.%20%20(Blood%20products)", address1: "Pasaje%20Los%20Pinos%2C%20241%2C%20Colonia%20Escalon", address2: "Entre%2077%20y%2079%20Avenida%20Norte", state: "San%20Salvador", country: "El%20Salvador", region: "americas", phone: "%2B503-2263-5650", fax: "%2B503-2263-5658"
    }
    ,
    {
        url: "", industry: "industrial", title: "Promfiltratsiya%20LLC", address1: "Kievskaya%20Street%2010", address2: "Office%20203", state: "Samara", country: "Russia", region: "emea", phone: "%2B7%20846%20272-85-27", fax: "%2B7%20846%20926-86-09"
    }
    ,
    {
        url: "", industry: "power", title: "Promfiltratsiya%20LLC", address1: "Kievskaya%20Street%2010", address2: "Office%20203", state: "", country: "Russia", region: "emea", phone: "%2B7%20846%20272-85-27", fax: "%2B7%20846%20926-86-09"
    }
    ,
    {
        url: "", industry: "laboratory", title: "PT%20Fluida%20Teknika", address1: "Jl%20Raya%20Kebayoran%20Lama%2016%2C%203rd%20Floor%2C", address2: "", state: "Jakarta", country: "Indonesia", region: "asiapac", phone: "%2B6221%2053678971", fax: "%2B622153675889"
    }
    ,
    {
        url: "", industry: "biopharma", title: "PT.%20Fluida%20Teknika", address1: "Jl.Raya%20Kebayoran%20Lama%20no.16", address2: "Jakarta%2012210", state: "Jakarta", country: "Indonesia", region: "asiapac", phone: "62-21-%20536%2078971/72", fax: "62-21-53675889"
    }
    ,
    {
        url: "", industry: "laboratory", title: "PT%20Multilab%20Adisurya%20Mandiri", address1: "Jl%20Tanjung%20Selor%20No.%207", address2: "", state: "Jakarta", country: "", region: "emea", phone: "%2B6221%206385%209557", fax: "%2B6221%20634%200914"
    }
    ,
    {
        url: "", industry: "medical", title: "PUERTO%20RICO%20SALES%20%26%20MEDICAL%20SERVICES", address1: "Campo%20Rico%20Office%20Plaza%2C%20Suite%20112", address2: "10000%20Campo%20Rico%20Ave.", state: "Carolina", country: "Puerto%20Rico", region: "americas", phone: "787-474-3380", fax: "787-474-3386"
    }
    ,
    {
        url: "", industry: "laboratory", title: "QUIMAYIN%20CIA.%20LTDA", address1: "Av%20Los%20Shyris%20N%2033-134%20y", address2: "Rep%C3%BAblica%20de%20El%20Salvador%2C%20Piso%207%2C%20Of%20702", state: "Quito", country: "Ecuador", region: "americas", phone: "%2B593-2-382-4635", fax: "%2B593-2-382-4617"
    }
    ,
    {
        url: "", industry: "biopharma", title: "Quimicos%20Y%20Reactivos%20Ltda.", address1: "Av.%20Calle%2024%20No.%2095-12%20Bodega%208", address2: "", state: "Bogota", country: "Colombia", region: "americas", phone: "%2B571%20428.4277", fax: "%2B571%20428.4255"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Quimicos%20Y%20Reactivos%20Ltda.", address1: "Av.%20Calle%2024%20No.%2095-12%20Bodega%208", address2: "", state: "Bogota", country: "Colombia", region: "americas", phone: "%2B571%20428.4277", fax: "%2B571%20428.4255"
    }
    ,
    {
        url: "", industry: "biopharma", title: "QUIMIZA%09LTDA", address1: "Avenida%20Los%20Alamos%20No.%2030", address2: "La%20Florida%20(Zona%20Sur)", state: "La%20Paz", country: "Bolivia", region: "americas", phone: "%2B5912-277-3818", fax: "%2B5912-277-3213"
    }
    ,
    {
        url: "", industry: "food", title: "QUIMIZA%09LTDA", address1: "Avenida%20Los%20Alamos%20No.%2030", address2: "La%20Florida%20(Zona%20Sur)", state: "La%20Paz", country: "Bolivia", region: "americas", phone: "%2B5912-277-3818", fax: "%2B5912-277-3213"
    }
    ,
    {
        url: "", industry: "industrial", title: "Ralph%20W.%20Earl%20Company", address1: "5930%20Easy%20Molloy%20Road", address2: "", state: "NY", country: "USA", region: "americas", phone: "315%20454%204431", fax: "315%20454%200977"
    }
    ,
    {
        url: "", industry: "food", title: "Ramco%20of%20Puerto%20Rico", address1: "PO%20Box%202013", address2: "", state: "Hatillo", country: "PUERTO%20RICO", region: "americas", phone: "787.717.8844", fax: "787.820.2467"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Ramguz%20LTDA", address1: "Cra.%2055%20B%20No.%2079%20B%2040", address2: "", state: "Bogot%C3%A1", country: "Colombia", region: "americas", phone: "011-57-1-3099333", fax: "011-57-1-3099333"
    }
    ,
    {
        url: "", industry: "industrial", title: "Ramguz%20LTDA", address1: "Cra.%2055%20B%20No.%2079%20B%2040", address2: "", state: "Bogot%C3%A1", country: "Colombia", region: "americas", phone: "011-57-1-3099333", fax: "011-57-1-3099333"
    }
    ,
    {
        url: "", industry: "power", title: "Ramguz%20LTDA", address1: "Cra.%2055%20B%20No.%2079%20B%2040", address2: "", state: "Bogot%C3%A1", country: "Colombia", region: "americas", phone: "011-57-1-3099333", fax: "011-57-1-3099333"
    }
    ,
    {
        url: "", industry: "food", title: "Ramguz%20LTDA", address1: "Cra.%2055%20B%20No.%2079%20B%2040", address2: "", state: "Bogot%C3%A1", country: "Colombia", region: "americas", phone: "011-57-1-3099333", fax: "011-57-1-3099333"
    }
    ,
    {
        url: "", industry: "chemicals", title: "RAMGUZ%20PANAMA%2C%20S.A.", address1: "Edificio%20Ocean%20Business%20Plaza%20(Torre%20Banesco)", address2: "Piso%2011%2C%20Oficina%201108", state: "Panama", country: "Rep%20de%20Panama", region: "americas", phone: "%2B507-6670-1083", fax: ""
    }
    ,
    {
        url: "", industry: "industrial", title: "RAMGUZ%20PANAMA%2C%20S.A.", address1: "Edificio%20Ocean%20Business%20Plaza%20(Torre%20Banesco)", address2: "Piso%2011%2C%20Oficina%201108", state: "Panama", country: "Rep%20de%20Panama", region: "americas", phone: "%2B507-6670-1083", fax: ""
    }
    ,
    {
        url: "", industry: "power", title: "RAMGUZ%20PANAMA%2C%20S.A.", address1: "Edificio%20Ocean%20Business%20Plaza%20(Torre%20Banesco)", address2: "Piso%2011%2C%20Oficina%201108", state: "Panama", country: "Rep%20de%20Panama", region: "americas", phone: "%2B507-6670-1083", fax: ""
    }
    ,
    {
        url: "", industry: "laboratory", title: "Reactivos%20y%20Equipo%20S.A.%20de%20C.V", address1: "Jos%C3%A9%20Silvestre%20Aramberri%201442%20Pte.", address2: "Col.%20Centro%2C%20%20CP%2064000", state: "Nuevo%20Le%C3%B3n", country: "Mexico", region: "americas", phone: "%2B52%2081%208333%206691", fax: ""
    }
    ,
    {
        url: "", industry: "industrial", title: "Representaciones%20Lufran%20C.A.", address1: "Av.%20Principal%20de%20Los%20Ruices", address2: "Centro%20Empresarila%20Los%20Ruices", state: "Caracas", country: "Venezuela", region: "americas", phone: "011.58.212.239.7320", fax: "011.58.212.235.9168"
    }
    ,
    {
        url: "", industry: "biopharma", title: "Representaciones%20Lufran%20C.A.", address1: "Av.%20Principal%20de%20Los%20Ruices", address2: "Centro%20Empresarila%20Los%20Ruices", state: "Caracas", country: "Venezuela", region: "americas", phone: "011.58.212.239.7320", fax: "011.58.212.235.9168"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Representaciones%20Lufran%20C.A.", address1: "Av.%20Principal%20de%20Los%20Ruices", address2: "Centro%20Empresarila%20Los%20Ruices", state: "Caracas", country: "Venezuela", region: "americas", phone: "011.58.212.239.7320", fax: "011.58.212.235.9168"
    }
    ,
    {
        url: "", industry: "food", title: "Representaciones%20Lufran%20C.A.", address1: "Av.%20Principal%20de%20Los%20Ruices", address2: "Centro%20Empresarila%20Los%20Ruices", state: "Caracas", country: "Venezuela", region: "americas", phone: "011.58.212.239.7320", fax: "011.58.212.235.9168"
    }
    ,
    {
        url: "", industry: "aerospace", title: "Rusky%20Group", address1: "proezd%20Serebryakova%20%2014", address2: "", state: "Moscow", country: "Russia", region: "emea", phone: "%2B%207%204959892327", fax: ""
    }
    ,
    {
        url: "", industry: "pallblue", title: "Ryan%20Herco%20Flow%20Solutions", address1: "10405%20Metric%20Blvd.%20Suite%20A", address2: "", state: "TX", country: "USA", region: "americas", phone: "(800)%20848-1141", fax: "(800)%20899-3121"
    }
    ,
    {
        url: "", industry: "microelec", title: "Ryan%20Herco%20Flow%20Solutions", address1: "10405%20Metric%20Blvd.%20Suite%20A", address2: "", state: "TX", country: "USA", region: "americas", phone: "(800)%20848-1141", fax: "(800)%20899-3121"
    }
    ,
    {
        url: "", industry: "pallblue", title: "Ryan%20Herco%20Flow%20Solutions", address1: "3010%20N%20San%20Fernando%20Boulevard", address2: "P.O.%20Box%20588", state: "CA", country: "USA", region: "americas", phone: "", fax: "(818)%20973-2600"
    }
    ,
    {
        url: "", industry: "microelec", title: "Ryan%20Herco%20Flow%20Solutions", address1: "3010%20N%20San%20Fernando%20Boulevard", address2: "P.O.%20Box%20588", state: "CA", country: "USA", region: "americas", phone: "", fax: "(818)%20973-2600"
    }
    ,
    {
        url: "", industry: "pallblue", title: "Ryan%20Herco%20Flow%20Solutions", address1: "9845%20South%20500%20West", address2: "", state: "UT", country: "USA", region: "americas", phone: "(800)%20848-1141", fax: "(801)%20562-1181"
    }
    ,
    {
        url: "", industry: "microelec", title: "Ryan%20Herco%20Flow%20Solutions", address1: "9845%20South%20500%20West", address2: "", state: "UT", country: "USA", region: "americas", phone: "(800)%20848-1141", fax: "(801)%20562-1181"
    }
    ,
    {
        url: "", industry: "pallblue", title: "Ryan%20Herco%20Flow%20Solutions", address1: "1248%20West%20Geneva%20Drive", address2: "", state: "AZ", country: "USA", region: "americas", phone: "(800)%20848-1141", fax: "(480)%20967-7337"
    }
    ,
    {
        url: "", industry: "microelec", title: "Ryan%20Herco%20Flow%20Solutions", address1: "1248%20West%20Geneva%20Drive", address2: "", state: "AZ", country: "USA", region: "americas", phone: "(800)%20848-1141", fax: "(480)%20967-7337"
    }
    ,
    {
        url: "", industry: "industrial", title: "S.S.A.%20Kimya%20San.%20Ve%20Tic.%20Ltd.%20Sti", address1: "Poligon%20Mah%20Sariyer%20Cad.%20ABC%20Plaza", address2: "117%20%2F%20B%20Kat%3A%204%20No%3A10%20Istinye", state: "", country: "Turkey", region: "emea", phone: "0%20532%20706%2062%2016", fax: "0%20212%20299%2005%2004"
    }
    ,
    {
        url: "", industry: "industrial", title: "S.G.%20Morris%20Company", address1: "699%20Miner%20Road", address2: "", state: "OH", country: "USA", region: "americas", phone: "866-746-6774", fax: "866-746-2556"
    }
    ,
    {
        url: "", industry: "industrial", title: "S.G.%20Morris%20Company", address1: "217%20Executive%20Drive%2C%20Suite%20%23201", address2: "", state: "PA", country: "USA", region: "americas", phone: "724.779.0010", fax: "724.779.0090"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Sakaimex%20Ltd.", address1: "Dhaka%20Chamber%20of%20Commerce%20Bldg.", address2: "65-66%20Mothijeel", state: "Dhaka", country: "Bangladesh", region: "asiapac", phone: "%2B880%202%2044287", fax: "%2B880%202%20863508"
    }
    ,
    {
        url: "", industry: "aerospace", title: "For%20Commercial%20Aircraft%20Spares%3A%20SATAIR%20A%2FS", address1: "Amager%20Landevej%20147A", address2: "DK-2770%20Kastrup", state: "", country: "Denmark", region: "emea", phone: "0045%2032%20470%20100", fax: "0045%2032%20513%20434"
    }
    ,
    {
        url: "", industry: "aerospace", title: "For%20Commercial%20Aircraft%20Spares%3A%20Satair%20Pte.%20Ltd.", address1: "12%20Seletar%20Aerospace%20Link", address2: "", state: "", country: "Singapore", region: "asiapac", phone: "%2B65%206543%200977", fax: "%2B65%206543%200737"
    }
    ,
    {
        url: "", industry: "aerospace", title: "For%20Commercial%20Aircraft%20Spares%3A%20Satair%20China", address1: "Satair%20(Beijing)%20Co.%20Ltd.", address2: "Tianzhu%20Lu%208", state: "Beijing", country: "China", region: "asiapac", phone: "%2B86%2010%208048%206161", fax: "%2B86%2010%208048%206599"
    }
    ,
    {
        url: "", industry: "aerospace", title: "For%20Commercial%20Aircraft%20Spares%3A%20SATAIR%20USA%2C%20Inc.", address1: "3993%20Tradeport%20Blvd.", address2: "", state: "GA.", country: "USA", region: "americas", phone: "1%20404%20675%206333", fax: "1%20404%20675%206311"
    }
    ,
    {
        url: "", industry: "aerospace", title: "Sawler%20International%20S.A.", address1: "Av.%20Carrera%209%20No%20113-52", address2: "Torres%20Unidas%20II%20%E2%80%93%20Of.%201401", state: "Bogota", country: "Colombia", region: "americas", phone: "57-1-213-1707", fax: "57-1-213-1707"
    }
    ,
    {
        url: "", industry: "biopharma", title: "SCH%20Life%20Sciences%20Co.%20Ltd", address1: "No.11%2C%20Lane%20596%2C%20Sec%203%2C%20Jiansing%20Road", address2: "Sin-Fong%20Township%2C%20Hsin-chu%20County%20304", state: "Ho%20Chi%20Minh%20City", country: "Taiwan", region: "asiapac", phone: "%2B886%203%205590988", fax: "%2B886%203%205592220"
    }
    ,
    {
        url: "", industry: "chemicals", title: "SCHMIDT%20VIETNAM%20JSC", address1: "Hanoi%20Head%20Office", address2: "8%2FF%2C%20Room%20804%2C%20Schmidt%20Tower", state: "Cau%20Giay%20Dist.%2C%20Hanoi", country: "Vietnam", region: "asiapac", phone: "%2B84-4-3767%203186", fax: "%2B84-4-3767%203188"
    }
    ,
    {
        url: "", industry: "power", title: "SCHMIDT%20VIETNAM%20JSC", address1: "Hanoi%20Head%20Office", address2: "8%2FF%2C%20Room%20804%2C%20Schmidt%20Tower", state: "Cau%20Giay%20Dist.%2C%20Hanoi", country: "Vietnam", region: "asiapac", phone: "%2B84-4-3767%203186", fax: "%2B84-4-3767%203188"
    }
    ,
    {
        url: "", industry: "chemicals", title: "SCHMIDT%20VIETNAM%20JSC", address1: "Da%20Nang%20Branch%20Office", address2: "166%20Nguyen%20Van%20Linh%20Street", state: "", country: "Vietnam", region: "asiapac", phone: "%2B84-511-3691%20444", fax: "%2B84-511-3691%20149"
    }
    ,
    {
        url: "", industry: "power", title: "SCHMIDT%20VIETNAM%20JSC", address1: "Da%20Nang%20Branch%20Office", address2: "166%20Nguyen%20Van%20Linh%20Street", state: "", country: "Vietnam", region: "asiapac", phone: "%2B84-511-3691%20444", fax: "%2B84-511-3691%20149"
    }
    ,
    {
        url: "", industry: "chemicals", title: "SCHMIDT%20VIETNAM%20JSC", address1: "Ho%20Chi%20Minh%20City%20Branch%20Office%3A", address2: "10%2FF%2C%20My%20Thinh%20Building%2C%20137%20Le%20Quang%20Dinh%20Str.", state: "Ho%20Chi%20Minh%20City", country: "Vietnam", region: "asiapac", phone: "%2B84-8-6258%203401", fax: "%2B84-8-6258%203405"
    }
    ,
    {
        url: "", industry: "power", title: "SCHMIDT%20VIETNAM%20JSC", address1: "Ho%20Chi%20Minh%20City%20Branch%20Office%3A", address2: "10%2FF%2C%20My%20Thinh%20Building%2C%20137%20Le%20Quang%20Dinh%20Str.", state: "Ho%20Chi%20Minh%20City", country: "Vietnam", region: "asiapac", phone: "%2B84-8-6258%203401", fax: "%2B84-8-6258%203405"
    }
    ,
    {
        url: "", industry: "industrial", title: "Scientific%20Centre%20for%20Industrial%20Service%20(SCIS)", address1: "17%2C%20Amin%20Zaki%20St", address2: "Behind%20Air%20Force%20Base", state: "Cairo", country: "", region: "emea", phone: "02%2024140006", fax: "02%2024152819"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Scientific%20Partners%20Australia%20Pty%20Ltd", address1: "PO%20Box%201778", address2: "Canning%20Vale%20WA%206155", state: "Australia", country: "", region: "emea", phone: "0447733832", fax: "08%209456%200363"
    }
    ,
    {
        url: "", industry: "industrial", title: "SCIS", address1: "1%2C%20Abd%20El%20Monsef%20Ghazy%20St", address2: "Saba%20Basha%20Alexandria", state: "", country: "Egypt", region: "emea", phone: "%2B%20971%204%203406204", fax: "%2B%20971%204%203406205"
    }
    ,
    {
        url: "", industry: "biopharma", title: "Separations", address1: "227%20Main%20avenue%20Ferndale%20Johannesburg%202194", address2: "%20PO%20Box%204181,%20Randburg%202125", state: "Randburg", country: "South%20Africa", region: "emea", phone: "0027%20011%20919%201000", fax: "0027%2086%20585%204676"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Separations", address1: "PO%20Box%204181", address2: "", state: "Randburg", country: "South%20Africa", region: "emea", phone: "0027%20011%20919%201000", fax: "0027%20011%20919%201200"
    }
    ,
    {
        url: "", industry: "aerospace", title: "Servicios%20Helicenter%20S.A.", address1: "Avenida%20Espana%203250", address2: "Puerto%20Madero%20(C1%20107AMK)", state: "Buenos%20Aires", country: "Argentina", region: "americas", phone: "54-11-4307-7228", fax: "54-11%204307-7535"
    }
    ,
    {
        url: "", industry: "laboratory", title: "ShanDong%20AIBO%20Technology%20%26%20Trading%20Co.%2C%20Ltd.", address1: "Shandong%20Province", address2: "", state: "", country: "", region: "emea", phone: "%2B86%20531%208695%209973", fax: "%2B86%20531%208695%208360"
    }
    ,
    {
        url: "", industry: "laboratory", title: "ShanDong%20AIBO%20Technoloty%20%26%20Trading%20Co.%2CLtd", address1: "", address2: "", state: "", country: "Shandong%20Province", region: "asiapac", phone: "%2B86%20531%2086959973", fax: "%2B86%20531%208695%208360"
    }
    ,
    {
        url: "", industry: "laboratory", title: "ShangHai%20Bio-Gene%20technology%20company%20limited", address1: "", address2: "", state: "", country: "Shanghai%20and%20Jiangsu%20province", region: "asiapac", phone: "%2B86%2021-64518230%20ext.8007", fax: ""
    }
    ,
    {
        url: "", industry: "laboratory", title: "Sintorgan%2C%20S.A.", address1: "French%20320", address2: "Villa%20Martelli", state: "Buenos%20Aires", country: "Argentina", region: "americas", phone: "%2B54%2011%204709%201228", fax: "%2B54%2011%204709%201228"
    }
    ,
    {
        url: "", industry: "aerospace", title: "SISDEF%20Ltd", address1: "Parque%20Industrial%20Aconcagua", address2: "Camino%20Concon%20%E2%80%93%20Quintero%20Km%202", state: "", country: "Chile", region: "americas", phone: "56-32-281-0777", fax: "56-32-281-1190"
    }
    ,
    {
        url: "", industry: "industrial", title: "Sistemas%20Industriales%20de%20Mexico%20S.A.%20de%20C.V.%20SIMEX", address1: "Zamora%20No.%2093", address2: "Colonia%20Condesa", state: "", country: "M%C3%A9xico", region: "emea", phone: "(52-55)%205286-1067", fax: "(52-55)%205211-3443"
    }
    ,
    {
        url: "", industry: "industrial", title: "SMS%20Equipment%20Inc.", address1: "14%20Ellesmere%20Drive", address2: "", state: "North%20West%20Territories", country: "Canada", region: "americas", phone: "867-669-0738", fax: "867-669-0897"
    }
    ,
    {
        url: "", industry: "pallwater", title: "Solberg%2C%20Knowles%2C%20%26%20Associates", address1: "5720%20Wealthy%20Street", address2: "", state: "", country: "", region: "emea", phone: "231.652.1934", fax: "231.652.1938"
    }
    ,
    {
        url: "", industry: "chemicals", title: "SOLTEX", address1: "Avenida%20Victor%20Uribe%202260", address2: "Parque%20Industrial%20Aconcagua", state: "Santiago", country: "Chile", region: "americas", phone: "%2B562-730-4700", fax: "%2B562-730-4800"
    }
    ,
    {
        url: "", industry: "industrial", title: "SOLTEX", address1: "Avenida%20Victor%20Uribe%202260", address2: "Parque%20Industrial%20Aconcagua", state: "Santiago", country: "Chile", region: "americas", phone: "%2B562-730-4700", fax: "%2B562-730-4800"
    }
    ,
    {
        url: "", industry: "power", title: "SOLTEX", address1: "Avenida%20Victor%20Uribe%202260", address2: "Parque%20Industrial%20Aconcagua", state: "Santiago", country: "Chile", region: "americas", phone: "%2B562-730-4700", fax: "%2B562-730-4800"
    }
    ,
    {
        url: "", industry: "biopharma", title: "SPECTO%20Ltd.", address1: "17%20Triq%20Il-Karmnu", address2: "Birkirkara%20BKR1248", state: "Malta", country: "Malta", region: "emea", phone: "%2B%20356%202147%200287", fax: "%2B%20356%202147%200339"
    }
    ,
    {
        url: "", industry: "laboratory", title: "SPECTO%20Ltd.", address1: "17%20Carmel%20Street", address2: "Birkirkara%20BKR%2005", state: "", country: "", region: "emea", phone: "%2B%20356%202147%200287", fax: "%2B%20356%202147%200339"
    }
    ,
    {
        url: "", industry: "food", title: "SPULT", address1: "Sumgait%20highway%2010%20A", address2: "", state: "", country: "Azerbaijan", region: "emea", phone: "%2B994%2012%20347%208201%20%2F%208202", fax: "%2B994%2012%20347%208203"
    }
    ,
    {
        url: "", industry: "chemicals", title: "SUMARA%20for%20Trading%20and%20Services", address1: "P.O.Box%2016182", address2: "Sana'a", state: "", country: "Republic%20of%20Yemen", region: "emea", phone: "%2B967%201%20428953", fax: "%2B967%201%20422021"
    }
    ,
    {
        url: "", industry: "power", title: "SUMARA%20for%20Trading%20and%20Services", address1: "P.O.Box%2016182", address2: "Sana'a", state: "", country: "Republic%20of%20Yemen", region: "emea", phone: "%2B967%201%20428953", fax: "%2B967%201%20422021"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Systems%20Specialties%2C%20Inc.", address1: "390%20Enterprise%20Court%2C%20Suite%20200", address2: "", state: "MI", country: "USA", region: "americas", phone: "248%20332%200099", fax: "248%20332%204919"
    }
    ,
    {
        url: "", industry: "pallblue", title: "Systems%20Specialties%2C%20Inc.", address1: "390%20Enterprise%20Court%2C%20Suite%20200", address2: "", state: "MI", country: "USA", region: "americas", phone: "248%20332%200099", fax: "248%20332%204919"
    }
    ,
    {
        url: "", industry: "industrial", title: "Systems%20Specialties%2C%20Inc.", address1: "390%20Enterprise%20Court%2C%20Suite%20200", address2: "", state: "MI", country: "USA", region: "americas", phone: "248%20332%200099", fax: "248%20332%204919"
    }
    ,
    {
        url: "", industry: "microelec", title: "Systems%20Specialties%2C%20Inc.", address1: "390%20Enterprise%20Court%2C%20Suite%20200", address2: "", state: "MI", country: "USA", region: "americas", phone: "248%20332%200099", fax: "248%20332%204919"
    }
    ,
    {
        url: "", industry: "pallwater", title: "T.%20J.%20Stanton%20Associates", address1: "9311%20Bandock%20Road", address2: "", state: "Virginia", country: "USA", region: "americas", phone: "(804)%20833-6870", fax: "(804)%20833-6870"
    }
    ,
    {
        url: "", industry: "biopharma", title: "Taawon", address1: "Str.Bld.No.24,%201st%20Floor,%20PO%20Box%20840281", address2: "Amman%2011181", state: "", country: "Iraq", region: "emea", phone: "%2B962%206%204654704", fax: "%2B962%206%204654705"
    }
    ,
    {
        url: "", industry: "biopharma", title: "Taawon", address1: "Str.Bld.No.24,%201st%20Floor,%20PO%20Box%20840281", address2: "Amman%2011181", state: "", country: "Jordan", region: "emea", phone: "%2B962%206%204654704", fax: "%2B962%206%204654705"
    }
    ,
    {
        url: "", industry: "laboratory", title: "TAAWON", address1: "P.O.Box%3A%20840281%20Amman", address2: "", state: "", country: "Jordan", region: "emea", phone: "%2B962%206%204654704", fax: "%2B962%206%204654705"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Tanajib%20for%20Trading%20Company%20Limited", address1: "King%20Abdulaziz%20Street", address2: "Near%20Silver%20Tower", state: "", country: "Saudi%20Arabia", region: "emea", phone: "%2B966%20(013)%20864%204567", fax: ""
    }
    ,
    {
        url: "", industry: "pallwater", title: "TC%20Tech", address1: "Tom%20Carmody", address2: "100%20Oakwood%20Drive", state: "NJ", country: "", region: "emea", phone: "973.692.0484", fax: ""
    }
    ,
    {
        url: "", industry: "pallblue", title: "Tech%20Star%2C%20Inc.", address1: "200%20West%2034th%20Avenue", address2: "Suite%20381", state: "AK", country: "USA", region: "americas", phone: "907%20277%206624", fax: "907%20277%206629"
    }
    ,
    {
        url: "", industry: "industrial", title: "Tech%20Star%2C%20Inc.", address1: "200%20West%2034th%20Avenue", address2: "Suite%20381", state: "AK", country: "USA", region: "americas", phone: "907%20277%206624", fax: "907%20277%206629"
    }
    ,
    {
        url: "", industry: "microelec", title: "Tech%20Star%2C%20Inc.", address1: "200%20West%2034th%20Avenue", address2: "Suite%20381", state: "AK", country: "USA", region: "americas", phone: "907%20277%206624", fax: "907%20277%206629"
    }
    ,
    {
        url: "", industry: "pallwater", title: "Tecnologia%20y%20Filtracion%20Industrial%20SRL%20(TECNOFIL)", address1: "Calle%205%20No.%202%2C%20Urb%20Los%20Prados", address2: "", state: "Republica%20Dominicana", country: "", region: "emea", phone: "809-931-8478", fax: ""
    }
    ,
    {
        url: "", industry: "laboratory", title: "Technoworths%20Associates%20Ltd.", address1: "78%20Mothijeel%20Commercial%20Area", address2: "1st%20Floor%20(Northern%20side)", state: "Dhaka", country: "Bangladesh", region: "asiapac", phone: "%2B880%202%209555646", fax: "%2B880%202%209562215"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Tecnologia%20y%20Filtracion%20Industrial%20SRL%20(TECNOFIL)", address1: "Calle%205%20No.%202", address2: "Urb%20Los%20Prados", state: "", country: "Republica%20Dominicana", region: "americas", phone: "809-931-8478", fax: ""
    }
    ,
    {
        url: "", industry: "industrial", title: "Tecnologia%20y%20Filtracion%20Industrial%20SRL%20(TECNOFIL)", address1: "Calle%205%20No.%202", address2: "Urb%20Los%20Prados", state: "", country: "Republica%20Dominicana", region: "americas", phone: "809-931-8478", fax: ""
    }
    ,
    {
        url: "", industry: "power", title: "Tecnologia%20y%20Filtracion%20Industrial%20SRL%20(TECNOFIL)", address1: "Calle%205%20No.%202", address2: "Urb%20Los%20Prados", state: "", country: "Republica%20Dominicana", region: "americas", phone: "809-931-8478", fax: ""
    }
    ,
    {
        url: "", industry: "biopharma", title: "Tecnologia%20y%20Filtracion%20Industrial%20SRL%20(TECNOFIL)", address1: "Calle%205%20No.%202", address2: "Urb%20Los%20Prados", state: "", country: "Republica%20Dominicana", region: "americas", phone: "809-931-8478", fax: ""
    }
    ,
    {
        url: "", industry: "food", title: "Tecnologia%20y%20Filtracion%20Industrial%20SRL%20(TECNOFIL)", address1: "Calle%205%20No.%202", address2: "Urb%20Los%20Prados", state: "", country: "Republica%20Dominicana", region: "americas", phone: "809-931-8478", fax: ""
    }
    ,
    {
        url: "", industry: "biopharma", title: "Th%20Chalimas%20Ltd", address1: "9,%20Sarantaporou%20Str.", address2: "Holargos,%20Athens%2015561", state: "Athens", country: "Greece", region: "emea", phone: "%2B30%201%20652%206392", fax: "%2B30%201%20654%207784"
    }
    ,
    {
        url: "", industry: "microelec", title: "Th%20Chalimas%20EPE", address1: "9%20Sarantaporou%20Str", address2: "Gr-%20155%2061%20Holargos", state: "Athens", country: "Greece", region: "emea", phone: "%2B30%201%20652%206392", fax: "%2B30%201%20654%207784"
    }
    ,
    {
        url: "", industry: "food", title: "Th%20Chalimas%20EPE", address1: "9%20Sarantaporou%20Str", address2: "Gr-%20155%2061%20Holargos", state: "Athens", country: "Greece", region: "emea", phone: "%2B30%201%20652%206392", fax: "%2B30%201%20654%207784"
    }
    ,
    {
        url: "", industry: "pallwater", title: "Treatment%20Equipment%20Co.", address1: "1949%20Williamette%20Falls%20Drive%2C%20Suite%20B", address2: "", state: "OR", country: "USA", region: "americas", phone: "503%20816%208690", fax: "503%20292%204694"
    }
    ,
    {
        url: "", industry: "medical", title: "TRI-DM%20S.A.", address1: "125%20Metros%20Oeste%20De%20Cruz%20Roja", address2: "Calles%2016-18%2C%20Avenida%208", state: "San%20Jos%C3%A9", country: "Costa%20Rica", region: "americas", phone: "506-257-7676", fax: "506-257-6380"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Tribologie", address1: "6%20Rue%20de%20Gascogne", address2: "20%20300%20CASABLANCA", state: "", country: "Morocco", region: "emea", phone: "00.212.5.22.20.85.71", fax: "00.212.5.22.47.45.06"
    }
    ,
    {
        url: "", industry: "industrial", title: "Tribologie", address1: "6%20Rue%20de%20Gascogne", address2: "20%20300%20CASABLANCA", state: "", country: "Morocco", region: "emea", phone: "00.212.5.22.20.85.71", fax: "00.212.5.22.47.45.06"
    }
    ,
    {
        url: "", industry: "power", title: "Tribologie", address1: "6%20Rue%20de%20Gascogne", address2: "20%20300%20CASABLANCA", state: "", country: "Morocco", region: "emea", phone: "00.212.5.22.20.85.71", fax: "00.212.5.22.47.45.06"
    }
    ,
    {
        url: "", industry: "pallblue", title: "Tribologie", address1: "6%20Rue%20de%20Gascogne", address2: "20%20300%20CASABLANCA", state: "", country: "Morocco", region: "emea", phone: "00.212.5.22.20.85.71", fax: "00.212.5.22.47.45.06"
    }
    ,
    {
        url: "", industry: "pallwater", title: "Tribologie", address1: "6%20Rue%20de%20Gascogne", address2: "20%20300%20CASABLANCA", state: "", country: "Morocco", region: "emea", phone: "00.212.5.22.20.85.71", fax: "00.212.5.22.47.45.06"
    }
    ,
    {
        url: "", industry: "laboratory", title: "U-GEN%20SCIENCE", address1: "1F%20750-18%2C%20Gwangmyong%206-dong%2C%20Gwangmyong-si%2C", address2: "", state: "Gyeongkki-Do", country: "KOREA", region: "asiapac", phone: "82-2-2060-0379", fax: "82-2-2060-0360"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Universal%20Adsorbents%20%26%20Chemicals%20Co.%2C%20Ltd.", address1: "1%2C%20TP%26T%20TOWER%2C%2019TH%20FLOOR%2C%20ROOM%2019A", address2: "VIBHAVADIRANGSIT%20ROAD%2C%20CHATUCHAK%20SUB-DISTRICT", state: "BANGKOK", country: "THAILAND", region: "asiapac", phone: "0-2936-1701-06", fax: "0-2936-1700"
    }
    ,
    {
        url: "", industry: "power", title: "Universal%20Adsorbents%20%26%20Chemicals%20Co.%2C%20Ltd.", address1: "1%2C%20TP%26T%20TOWER%2C%2019TH%20FLOOR%2C%20ROOM%2019A", address2: "VIBHAVADIRANGSIT%20ROAD%2C%20CHATUCHAK%20SUB-DISTRICT", state: "BANGKOK", country: "THAILAND", region: "asiapac", phone: "0-2936-1701-06", fax: "0-2936-1700"
    }
    ,
    {
        url: "", industry: "pallwater", title: "Van%20Bergen%20%26%20Markson%2C%20Inc.", address1: "8814%20Seventh%20Ave%20N.", address2: "", state: "MN", country: "USA", region: "americas", phone: "763-546-4340", fax: "763-546-0973"
    }
    ,
    {
        url: "", industry: "aerospace", title: "Victor%20Perez", address1: "Calle%20Uno%20%23729%20%E2%80%93%20Dpto%20308", address2: "", state: "", country: "Peru", region: "americas", phone: "511%20224%200823", fax: ""
    }
    ,
    {
        url: "", industry: "chemicals", title: "Viet%20My%20International%20Oil%20JSC", address1: "529%20Hoang%20Hoa%20Tham%20street", address2: "Ba%20Dinh%20district", state: "", country: "Vietnam", region: "asiapac", phone: "%2B84%204%203761%207088%2F9", fax: "%2B84%204%203761%207090"
    }
    ,
    {
        url: "", industry: "power", title: "Viet%20My%20International%20Oil%20JSC", address1: "529%20Hoang%20Hoa%20Tham%20street", address2: "Ba%20Dinh%20district", state: "", country: "Vietnam", region: "asiapac", phone: "%2B84%204%203761%207088%2F9", fax: "%2B84%204%203761%207090"
    }
    ,
    {
        url: "", industry: "laboratory", title: "VNDAT%20Co.%2CLtd", address1: "6th%20Floor%2C%20No.%20314%20Minh%20Khai%20Str.", address2: "Hai%20Ba%20Trung%20Dist.", state: "Hanoi", country: "Vietnam", region: "asiapac", phone: "%2B84-4-3773%208992%2F93", fax: "%2B84-4-3773%208991"
    }
    ,
    {
        url: "", industry: "chemicals", title: "VORTO%20GAMA", address1: "Gedimino%20av.%2050", address2: "", state: "Vilnius", country: "Lithuania", region: "emea", phone: "%2B370%205%2024-98-404", fax: "%2B370%205%2024-98-399"
    }
    ,
    {
        url: "", industry: "industrial", title: "VORTO%20GAMA", address1: "Gedimino%20av.%2050", address2: "", state: "Vilnius", country: "Lithuania", region: "emea", phone: "%2B370%205%2024-98-404", fax: "%2B370%205%2024-98-399"
    }
    ,
    {
        url: "", industry: "power", title: "VORTO%20GAMA", address1: "Gedimino%20av.%2050", address2: "", state: "Vilnius", country: "Lithuania", region: "emea", phone: "%2B370%205%2024-98-404", fax: "%2B370%205%2024-98-399"
    }
    ,
    {
        url: "", industry: "biopharma", title: "VORTO%20GAMA", address1: "Gedimino%20av.%2050", address2: "Vilinus%2001110", state: "", country: "Estonia", region: "emea", phone: "%2B370%205%2024-98-404", fax: "%2B370%205%2024-98-399"
    }
    ,
    {
        url: "", industry: "biopharma", title: "VORTO%20GAMA", address1: "Gedimino%20av.%2050", address2: "Vilinus%2001110", state: "", country: "Latvia", region: "emea", phone: "%2B370%205%2024-98-404", fax: "%2B370%205%2024-98-399"
    }
    ,
    {
        url: "", industry: "biopharma", title: "VORTO%20GAMA", address1: "Gedimino%20av.%2050", address2: "Vilinus%2001110", state: "", country: "Lithuania", region: "emea", phone: "%2B370%205%2024-98-404", fax: "%2B370%205%2024-98-399"
    }
    ,
    {
        url: "", industry: "food", title: "VORTO%20GAMA", address1: "Gedimino%20av.%2050", address2: "", state: "Vilnius", country: "Lithuania", region: "emea", phone: "%2B370%205%2024-98-404", fax: "%2B370%205%2024-98-399"
    }
    ,
    {
        url: "", industry: "laboratory", title: "VORTO%20GAMA", address1: "Gedimino%20av.%2050", address2: "", state: "Vilnius", country: "Lithuania", region: "emea", phone: "%2B370%205%2024-98-404", fax: "%2B370%205%2024-98-399"
    }
    ,
    {
        url: "", industry: "laboratory", title: "VWR%20International%20Oy", address1: "Valimotie%209", address2: "00380%20Helsinki", state: "", country: "", region: "emea", phone: "09%2080%2045%2051", fax: "09%2080%2045%2052%2000"
    }
    ,
    {
        url: "", industry: "laboratory", title: "VWR%20International%20AS", address1: "Haavard%20Martinsensvei%2030", address2: "", state: "OSLO", country: "Norway", region: "emea", phone: "%2B47%2022%2090%2000%2000", fax: "%2B%2047%2022%2090%2000%2040"
    }
    ,
    {
        url: "", industry: "laboratory", title: "VWR%20International%2C%20Pty%20Ltd.", address1: "Unit%201%2F31%20Archimedes%20Place", address2: "Murarrie%20QLD%204172", state: "Australia", country: "", region: "emea", phone: "1300%20727%20696", fax: "1300%20135%20123"
    }
    ,
    {
        url: "", industry: "laboratory", title: "VWR%20International%20B.V.", address1: "Postbus%208198%20-1005", address2: "", state: "AD%20Amsterdam", country: "Netherlands", region: "emea", phone: "%2B31%20204%20808%20400", fax: "%2B31%20204%20808%20480"
    }
    ,
    {
        url: "", industry: "laboratory", title: "VWR%20International%20bvba", address1: "Researchpark%20Haasrode%202020", address2: "Geldenaaksebaan%20464", state: "", country: "", region: "emea", phone: "016%20385%20011", fax: "016%20385%20385"
    }
    ,
    {
        url: "", industry: "laboratory", title: "VWR%20International", address1: "2360%20Argentia%20Road", address2: "", state: "Ontario", country: "Canada", region: "americas", phone: "800%20932%205000", fax: "800%20668%206348"
    }
    ,
    {
        url: "", industry: "laboratory", title: "VWR%20International%20China%20Co.%2C%20Ltd.", address1: "Suite%203B02%2C%20Qilai%20Building%2C%20No.%20889", address2: "Yishan%20Road", state: "Shanghai", country: "China", region: "asiapac", phone: "%2B86-%2021%20521%20388%2022", fax: "%2B86-%2021%20521%2033%20933"
    }
    ,
    {
        url: "", industry: "laboratory", title: "VWR%20-%20Bie%20%26%20Berntsen", address1: "Transformervej%208", address2: "2730%20Herlev", state: "", country: "", region: "emea", phone: "43%2086%2087%2088", fax: "43%2086%2087%2090"
    }
    ,
    {
        url: "", industry: "laboratory", title: "VWR%20International%20GmbH", address1: "Hilperstra%C3%9Fe%2020a", address2: "D-64295%20Darmstadt", state: "", country: "Deutschland", region: "emea", phone: "%2B49%20(0)800-702%2000%2007", fax: "%2B49%20(0)180-570%2022%2022"
    }
    ,
    {
        url: "", industry: "laboratory", title: "VWR%20International%20GmbH", address1: "Graumanngasse%207", address2: "A-1150%20Wien", state: "", country: "Austria", region: "emea", phone: "%2B43%201%2097%20002%20-%200", fax: "%2B43%201%2097%20002%20-%20600"
    }
    ,
    {
        url: "", industry: "laboratory", title: "VWR%20International%20Kft.", address1: "Simon%20L%C3%A1szl%C3%B3%20u.%204.", address2: "4034%20Debrecen", state: "", country: "", region: "emea", phone: "(52)%20521-130", fax: "(52)%20470-069"
    }
    ,
    {
        url: "", industry: "laboratory", title: "VWR%20Lab%20Products%20Pte%20Lt", address1: "2nd%20Floor%2C%20Front%20Wing%2C%20135%2F12%2C%20Brigade%20Towers", address2: "Brigade%20Road", state: "", country: "India", region: "asiapac", phone: "%2B91-2522-647911%2F922", fax: "%2B91-80-41117120"
    }
    ,
    {
        url: "", industry: "laboratory", title: "VWR%20International%20Ltd.", address1: "Hunter%20Boulevard", address2: "Magna%20Park%20Lutterworth", state: "", country: "United%20Kingdom", region: "emea", phone: "01455%20558600", fax: "01455%20558586"
    }
    ,
    {
        url: "", industry: "laboratory", title: "VWR%20International%20-%20Material%20de%20Laborat%C3%B3rio%2C%20Lda", address1: "Edif%C3%ADcio%20Neopark", address2: "Av.%20Tom%C3%A1s%20Ribeiro%2C%2043-%203%20D", state: "", country: "Carnaxide", region: "americas", phone: "21%203600%20770", fax: "21%203600%20798%2F9"
    }
    ,
    {
        url: "", industry: "laboratory", title: "VWR%20International%2C%20S.%20de%20R.L.%20de%20C.V", address1: "Km.%2014.5%20Carretera%20Tlalnepantla-Cuautitl%C3%A1n%2C", address2: "Col.%20Lecher%C3%ADa%2C%20Mpio.%20Tultit%C3%A1n", state: "", country: "Estado%20de%20M%C3%A9xico", region: "americas", phone: "%2B%2052%2055%205005%200100", fax: "%2B%2052%2055%205005%200126"
    }
    ,
    {
        url: "", industry: "laboratory", title: "VWR%20International%20S.A.S.", address1: "201%2C%20rue%20Carnot", address2: "F-94126%20Fontenay-sous-Bois%20Cedex", state: "", country: "France", region: "emea", phone: "%2B33%201%2045%2014%2085%2000", fax: ""
    }
    ,
    {
        url: "", industry: "laboratory", title: "VWR%20International%20Eurolab%20S.L.", address1: "C%2F%20Tecnolog%C3%ADa%205-17", address2: "A-7%20Llinars%20Park", state: "", country: "Barcelona", region: "emea", phone: "902%20222%20897", fax: "902%20430%20657"
    }
    ,
    {
        url: "", industry: "laboratory", title: "VWR%20International%20s.r.l", address1: "Via%20San%20Giusto%2085", address2: "20163%20Milano%20(MI)", state: "", country: "", region: "emea", phone: "02-3320311%2F02-487791", fax: "02-332031307%2F02-40090010"
    }
    ,
    {
        url: "", industry: "laboratory", title: "VWR%20Singapore%20Pte%20Ltd", address1: "18%20Gul%20Drive", address2: "", state: "", country: "Singapore", region: "asiapac", phone: "%2B65%206505%200760", fax: "%2B65%206264%203780"
    }
    ,
    {
        url: "", industry: "laboratory", title: "VWR%20International%20AB", address1: "Fagerstagatan%2018A", address2: "S-16394%20Stockholm", state: "", country: "Sweden", region: "emea", phone: "%2B46%208621%203400", fax: "%2B46%208760%204520"
    }
    ,
    {
        url: "", industry: "laboratory", title: "VWR%20International%20AG", address1: "Lerzenstrasse%2016%2F18", address2: "CH-8953%20Dietikon", state: "", country: "Switzerland", region: "emea", phone: "0041%2044%20745%2013%2013", fax: "0041%2044%20745%2013%2010"
    }
    ,
    {
        url: "", industry: "laboratory", title: "VWR%20International%2C%20LLC", address1: "Radnor%20Corporate%20Center%2C%20Building%20One%2C%20Suite%20200", address2: "100%20Matsonford%20Road", state: "Radnor%2C%20PA", country: "USA", region: "americas", phone: "800.932.5000", fax: "866.329.2897"
    }
    ,
    {
        url: "", industry: "pallwater", title: "W.C.%20Weil%20Company", address1: "PO%20Box%20199", address2: "3812%20William%20Flynn%20Highway%2C%20Bldg.%20%232", state: "PA", country: "USA", region: "americas", phone: "412%20487%207140", fax: "412%20487%207144"
    }
    ,
    {
        url: "", industry: "chemicals", title: "Wilhelm%20Tell%20Consulting", address1: "77%2C%20Przedzalniana", address2: "PL-93-114%20LODZ", state: "", country: "Poland", region: "emea", phone: "%2B48%2042%20681%2084%2093", fax: "%2B48%2042%20681%2084%2095"
    }
    ,
    {
        url: "", industry: "pallblue", title: "Wilhelm%20Tell%20Consulting", address1: "77%2C%20Przedzalniana", address2: "PL-93-114%20LODZ", state: "", country: "Poland", region: "emea", phone: "%2B48%2042%20681%2084%2093", fax: "%2B48%2042%20681%2084%2095"
    }
    ,
    {
        url: "", industry: "microelec", title: "Wilhelm%20Tell%20Consulting", address1: "77%2C%20Przedzalniana", address2: "PL-93-114%20LODZ", state: "", country: "Poland", region: "emea", phone: "%2B48%2042%20681%2084%2093", fax: "%2B48%2042%20681%2084%2095"
    }
    ,
    {
        url: "", industry: "power", title: "Wilhelm%20Tell%20Consulting", address1: "77%2C%20Przedzalniana", address2: "PL-93-114%20LODZ", state: "", country: "Poland", region: "emea", phone: "%2B48%2042%20681%2084%2093", fax: "%2B48%2042%20681%2084%2095"
    }
    ,
    {
        url: "", industry: "pallwater", title: "Wilhelm%20Tell%20Consulting", address1: "77%2C%20Przedzalniana", address2: "PL-93-114%20LODZ", state: "", country: "Poland", region: "emea", phone: "%2B48%2042%20681%2084%2093", fax: "%2B48%2042%20681%2084%2095"
    }
    ,
    {
        url: "", industry: "food", title: "Wilhelm%20Tell%20Consulting", address1: "77%2C%20Przedzalniana", address2: "PL-93-114%20LODZ", state: "", country: "Poland", region: "emea", phone: "%2B48%2042%20681%2084%2093", fax: "%2B48%2042%20681%2084%2095"
    }
    ,
    {
        url: "", industry: "industrial", title: "R%26W", address1: "Dystrybucja%20i%20Serwis", address2: "Sp%C3%B3%C5%82ka%20z%20o.o%2C%20ul.%20Miko%C5%82owska%20135", state: "", country: "Poland", region: "emea", phone: "%2B48%2032%2022%2011%20480", fax: "%2B48%2032%2022%2011%20480"
    }
    ,
    {
        url: "", industry: "laboratory", title: "XinJiang%20Henglida%20Technology%20Development%20Co.%2CLtd.", address1: "", address2: "", state: "", country: "Xinjiang%20Province", region: "asiapac", phone: "%2B86%20991-4501851", fax: ""
    }
    ,
    {
        url: "", industry: "biopharma", title: "Yana%20Chemodities%20Inc.", address1: "151%20Kaliraya%20St.%2C", address2: "", state: "", country: "Philippines", region: "asiapac", phone: "%2B63%202%20732%200171", fax: "%2B63%202%20781%201048"
    }
    ,
    {
        url: "", industry: "laboratory", title: "Yana%20Chemodities%20Inc.", address1: "151%20Kaliraya%20St.%2C", address2: "", state: "", country: "Philippines", region: "asiapac", phone: "%2B63%202%20732%200171", fax: "%2B63%202%20781%201048"
    }
    ,
    {
        url: "", industry: "laboratory", title: "YOUNG%20SCIENCE%20INC", address1: "Flat%201304%2C%20Bldg.301%2C%203rd%20Ssangyong%20Buchun%20Technopa", address2: "No.36-1%2C%20Samjung-dong%2C%20Ojung-gu%2C%20Buchun%2C%20Gyunggi%2C", state: "", country: "KOREA", region: "asiapac", phone: "82-32-624-4500", fax: "82-32-624-4505"
    }
    ,
    {
        url: "", industry: "food", title: "Zoran%20Golubovic", address1: "Metohijska%2029", address2: "11%20000%20Belgrade", state: "", country: "Serbia", region: "emea", phone: "%2B381%201130%2088%20962", fax: "%2B381%201130%2088%20962"
    }
    ]
}
;
var literatureLibrary= {
    init: function() {
        $(".toggle_form").on("click", function(b) {
            b.preventDefault();
            var a=$("#download_form_pannel_"+this.id);
            a.toggleClass("disabled");
            a.parent().toggleClass("color-disabled")
        }
        )
    }
    ,
    needToInit:function() {
        return $(".literature-library__content").length>0
    }
}
;
var leadGenProductSelector= {
    mainCarouselContainerClass: ".lead-gen-product-selector__container__carousel-container", carouselDotsContainerClass: "lead-gen-product-selector__container__carousel-dots-container", productsContainerClass: ".lead-gen-product-selector__container__products", init: function() {
        $(leadGenProductSelector.mainCarouselContainerClass+"__carousel").slick( {
            dots:false, infinite:false, speed:300, slidesToShow:6, slidesToScroll:1, prevArrow:'<span class="fa fa-arrow-circle-left slick-prev-pall" aria-hidden="true"</span>', nextArrow:'<span class="fa fa-arrow-circle-right slick-next-pall" aria-hidden="true"</span>', responsive:[ {
                breakpoint:1240, settings: {
                    slidesToShow: 5
                }
            }
            ,
            {
                breakpoint:1060, settings: {
                    slidesToShow: 4
                }
            }
            ,
            {
                breakpoint:1024, settings: {
                    slidesToShow: 6
                }
            }
            ]
        }
        );
        $(leadGenProductSelector.mainCarouselContainerClass+"__carousel__item").on("click",
        function(c) {
            var b=$(this);
            var a=b.data("productContainerSelector");
            $(leadGenProductSelector.mainCarouselContainerClass+"__carousel__item.active").each(function() {
                $(this).removeClass("active").find("div").removeClass("active")
            }
            );
            b.addClass("active").find("div").addClass("active");
            var d=$("#"+a);
            $(leadGenProductSelector.productsContainerClass+"__item.active").removeClass("active");
            d.addClass("active")
        }
        );
        $(leadGenProductSelector.mainCarouselContainerClass+"__carousel__item.active").click();
        $(window).resize(function() {
            if(!leadGenProductSelector.productsCarouselInitialized&&leadGenProductSelector.isMobile()) {
                leadGenProductSelector.initializeProductsCarousel()
            }
            else {
                if(leadGenProductSelector.productsCarouselInitialized&&!leadGenProductSelector.isMobile()) {
                    leadGenProductSelector.productsCarouselInitialized=false;
                    $(leadGenProductSelector.productsContainerClass).slick("unslick")
                }
            }
        }
        );
        if(leadGenProductSelector.isMobile()) {
            leadGenProductSelector.initializeProductsCarousel()
        }
    }
    ,
    productsCarouselInitialized:false,
    isMobile:function() {
        return window.matchMedia("(max-width: 839px)").matches
    }
    ,
    initializeProductsCarousel:function() {
        leadGenProductSelector.productsCarouselInitialized=true;
        $(leadGenProductSelector.productsContainerClass).slick( {
            slidesToShow:1, slidesToScroll:1, arrows:false, dots:true, infinite:true, centerMode:true, centerPadding:"90px", fade:false, appendDots:"."+leadGenProductSelector.carouselDotsContainerClass, dotsClass:leadGenProductSelector.carouselDotsContainerClass+"__slick-dots-pall", responsive:[ {
                breakpoint:600, settings: {
                    centerPadding: "70px"
                }
            }
            ,
            {
                breakpoint:400, settings: {
                    centerPadding: "50px"
                }
            }
            ]
        }
        )
    }
    ,
    needToInit:function() {
        return $(".lead-gen-product-selector").length>0&&(typeof $.fn.slick!=="undefined")
    }
}
;
var leadGen= {
    init: function() {
        $(".lead-gen-block__container__content__forms-block__forms__formbox__tabs__tab").on("click", function(c) {
            c.preventDefault();
            var b=$(c.currentTarget);
            if(!b.hasClass("active")) {
                b.addClass("active");
                b.siblings(".active").removeClass("active");
                var a=$("#"+b.data("tab"));
                a.siblings(".active").removeClass("active");
                a.addClass("active")
            }
        }
        )
    }
    ,
    needToInit:function() {
        return $(".lead-gen-block__container").length>0
    }
}
;
var fullBleedVideo= {
    init: function() {
        this.$el=$(".full-bleed-video");
        var b=this.$el.find(".full-bleed-video__content__responsive-player");
        var c=b.data("videoid");
        var a= {
            videoURL: c, containment: "self", showControls: false, autoPlay: true, loop: true, mute: true, startAt: 0, opacity: 1, optimizeDisplay: true, showYTLogo: false, addRaster: false, quality: "default"
        }
        ;
        b.YTPlayer(a)
    }
    ,
    needToInit:function() {
        return $(".full-bleed-video").length>0
    }
}
;
var formConnector= {
    init: function() {
        this.setUp();
        formConnector.setSelectedLanguageOnLinks(formConnector.getSelectedLanguage());
        $(".download-language--gated").unbind("click").bind("click", function(c) {
            var b=$(c.currentTarget);
            var a=b.parents(".form-connector__download-links-wrapper").siblings(".form-connector--download");
            if(!a.is("form")||formConnector.validateForm(a)) {
                formConnector.makeDownloadPostToMarketo(a, b, c)
            }
            else {
                c.preventDefault()
            }
        }
        )
    }
    ,
    _validatedForms:[],
    clearDownloadLinks:function() {
        $(".download-language.active").removeClass("active")
    }
    ,
    setSelectedLanguage:function(a) {
        if(!(window.localStorage)) {
            localStorage.pallSelectedDownloadLanguage=a
        }
    }
    ,
    getSelectedLanguage:function() {
        return !(window.localStorage)?localStorage.pallSelectedDownloadLanguage: null
    }
    ,
    activeLanguageLink:function(a) {
        a.addClass("active")
    }
    ,
    setSelectedLanguageOnLinks:function(a) {
        a=a!==null?a: "en";
        $(".form-connector--download__languages").each(function() {
            var b=$(this);
            var c=false;
            b.find(".download-language").each(function() {
                var d=$(this).data("lang");
                if(d==a) {
                    formConnector.activeLanguageLink($(this));
                    c=true
                }
            }
            );
            if(!c) {
                formConnector.activeLanguageLink(b.find(".download-language--en"))
            }
        }
        )
    }
    ,
    validateDropdown:function(b) {
        var a=b.find(".form-connector__select__item");
        if(a.is(":empty")) {
            b.addClass("invalid");
            return false
        }
        else {
            b.removeClass("invalid");
            return true
        }
    }
    ,
    validateForm:function(a) {
        var c=a.find('input[name="formid"]').val();
        if($.inArray(c, this._validatedForms)>-1) {
            return true
        }
        a.removeAttr("novalidate");
        a.find("input:not(:hidden)").addClass("validate");
        var b=true;
        a.find(".form-connector__select:not(.novalidate)").each(function() {
            b=formConnector.validateDropdown($(this))&&b
        }
        );
        if(a[0].checkValidity()&&b) {
            this._validatedForms.push(c);
            return true
        }
        return false
    }
    ,
    hideFormsOnCurrentPage:function(a) {
        var c=a.find('input[name="formid"]').val();
        var b=true;
        a.find(".form-connector__select:not(.novalidate)").each(function() {
            b=formConnector.validateDropdown($(this))&&b
        }
        );
        if(b) {
            $('input[name="formid"]').each(function() {
                var d=$(this);
                if(d.val()==c) {
                    d.closest("form").hide()
                }
            }
            )
        }
    }
    ,
    clearEvents:function() {
        var a=this;
        var b=$(".form-connector__field");
        b.unbind("checkval");
        b.off("keyup", a.keyupHandler).off("focus").off("blur");
        $(".form-connector__input-container__label").off();
        $(".form-connector__select").off("click", a.selectItemHandler);
        $(".form-connector__select__menu__option__item").each(function() {
            $(this).off("click", a.dropdownItemClickHandler)
        }
        );
        $(".form-connector__submit-button").off();
        $("body").off("click",
        a.hideExpandedDropdowns)
    }
    ,
    selectItemHandler:function(a) {
        a.stopPropagation();
        $(a.currentTarget).siblings(".form-connector__select__menu").toggleClass("hide-menu")
    }
    ,
    keyupHandler:function() {
        $(this).trigger("checkval")
    }
    ,
    hideExpandedDropdowns:function(a) {
        $(".form-connector__select__menu").addClass("hide-menu")
    }
    ,
    setUp:function() {
        var a=this;
        this.clearEvents();
        var c="on";
        var b="show";
        $(".form-connector__field").bind("checkval", function() {
            var d=$(this).prev("label");
            if(this.value!=="") {
                d.addClass(b)
            }
            else {
                d.removeClass(b)
            }
        }
        ).on("keyup",
        a.keyupHandler).on("focus",
        function() {
            $(this).prev("label").addClass(c)
        }
        ).on("blur",
        function() {
            $(this).prev("label").removeClass(c)
        }
        ).trigger("checkval");
        $(".form-connector__input-container__label").on("click",
        function() {
            var d=$(this).next("input");
            d.focus()
        }
        );
        $(".form-connector__select").on("click",
        a.selectItemHandler);
        $(".form-connector__select__menu__option__item").each(function() {
            $(this).on("click", a.dropdownItemClickHandler)
        }
        );
        $(".form-connector__submit-button").on("click",
        function(h) {
            var g=$(h.currentTarget);
            g.prop("disabled", true);
            var f=g.parents("form");
            if(formConnector.validateForm(f)) {
                var d=formConnector.makePostToMarketo(f);
                d.always(function() {
                    g.prop("disabled", false)
                }
                )
            }
        }
        );
        $("body").on("click",
        a.hideExpandedDropdowns)
    }
    ,
    dropdownItemClickHandler:function(f) {
        var d=$(f.currentTarget);
        var b=d.parents(".form-connector__select__menu");
        var a=b.siblings(".form-connector__select");
        d.removeClass("active");
        b.toggleClass("hide-menu");
        a.find(".form-connector__select__title").addClass("hide");
        d.addClass("active");
        var c=$(this).html();
        a.find(".form-connector__select__item").html(c);
        a.find("input:hidden").first().val(c)
    }
    ,
    setCustomSubmit:function(a,
    b) {
        a.unbind("click").bind("click", b)
    }
    ,
    makePostToMarketo:function(a) {
        return $.ajax( {
            type: "POST", url: a.attr("action"), data: a.serialize(), success: function(c) {
                formConnector.hideFormsOnCurrentPage(a);
                var b=a.find("input[name=returnURL]");
                if(b.length!==0) {
                    formConnector.makePostToFullStory();
                    window.location=b.val()
                }
                else {
                    formConnector.displayThankYouMessage(a)
                }
            }
        }
        )
    }
    ,
    makeDownloadPostToMarketo:function(b,
    a,
    c) {
        $.ajax( {
            type: "POST", url: b.attr("action"), async: false, data: b.serialize(), success: function(e) {
                formConnector.hideFormsOnCurrentPage(b);
                formConnector.clearDownloadLinks();
                formConnector.setSelectedLanguage(a.data("lang"));
                formConnector.setSelectedLanguageOnLinks(a.data("lang"));
                formConnector.activeLanguageLink(a);
                var d=b.find("input[name=returnURL]");
                if(d.length!==0) {
                    formConnector.makePostToFullStory();
                    window.location=d.val()
                }
                else {
                    formConnector.displayThankYouMessage(b)
                }
            }
            ,
            error:function(f,
            d,
            e) {
                c.preventDefault()
            }
        }
        )
    }
    ,
    displayThankYouMessage:function(b) {
        var a=b.siblings(".form-connector__thankyou-message");
        b.hide();
        a.show();
        formConnector.makePostToFullStory()
    }
    ,
    makePostToFullStory:function() {
        FS.identify($("#Email").val(), {
            displayName: $("#FirstName").val()+" "+$("#LastName").val(), email: $("#Email").val(), company_str: $("#Company").val(), industry_str: $("#AEMIndustry").val(), queryType_str: $("#shortQueryType").val(), formUrl_str: $("#AEMReferralURL").val()
        }
        )
    }
    ,
    needToInit:function() {
        return $(".form-connector").length>0||$(".search-results-component").length>0
    }
}
;
var stickyFooter= {
    siteId:PallConfig.siteId, bgColor:"", industryTag:"", locationRegionDropdown:".form-connector__input-container.region", locationCountryDropdown:".form-connector__input-container.country", phoneCountryDropdown:".form-connector__input-container.country-phones", emailIndustryDropdownInput:"input[name=AEMIndustry]", $countryPhone:null, $countryPhoneLabel:null, $countryPhoneSelected:null, emailIndustryDropDownAutoSelector: {
        "biopharmaceuticals.pall.com": "Biopharmaceuticals", "food-beverage.pall.com": "Food\\ \\&\\ Beverage", "laboratory.pall.com": "Laboratory", "oil-gas.pall.com": "Oil\\ \\&\\ Gas", "aerospace.pall.com": "Aerospace", "industrial-manufacturing.pall.com": "Industrial\\ Manufacturing", "microelectronics.pall.com": "Microelectronics", "medical.pall.com": "Medical", "power-utilites.pall.com": "Power\\ \\&\\ Utilities", "chemicals-polymers.pall.com": "Chemicals\\ \\&\\ Polymers"
    }
    ,
    init:function() {
        this.$countryPhone=$(".footer-sticky__phone__content .form-connector__select__menu__option__item");
        this.$countryPhoneLabel=$(".footer-sticky__phone__content .form-connector__select__title");
        this.$countryPhoneSelected=$(".footer-sticky__phone__content .form-connector__select__item");
        stickyFooter.footerStickyRelocate();
        $(window).scroll(stickyFooter.footerStickyRelocate);
        stickyFooter.footerOpenContent();
        stickyFooter.setUpEmailIndustryDropDown();
        stickyFooter.bgColor=$(".footer-sticky__content").data("footercolor");
        stickyFooter.industryTag=$(".footer-sticky__content").data("industry");
        stickyFooter.templateCountryDropdownOption=$("#template-country-dropdown-option").html();
        stickyFooter.compiledTemplateCountryDropdownOption=Handlebars.compile(stickyFooter.templateCountryDropdownOption);
        $(stickyFooter.locationRegionDropdown+" .form-connector__select__menu__option__item").on("click", function(d) {
            var c=$(d.currentTarget);
            stickyFooter.populateCountryDropdown(c.data("countries"))
        }
        );
        var b=$(".footer-sticky__content .submit-button--locations");
        formConnector.setCustomSubmit(b,
        function(i) {
            i.preventDefault();
            var h=$(stickyFooter.locationRegionDropdown+" .form-connector__select__item").text();
            var j=$(stickyFooter.locationCountryDropdown+" .form-connector__select__item").text();
            var f=$(i.currentTarget);
            var c=f.parents("form");
            if(formConnector.validateForm(c)) {
                var g=f.data("industry");
                var d=[f.data("redirectUrl"), g?g.toLowerCase(): "industry", h?h: "region", j?j: "country", "html"];
                window.open(d.join("."), "_self")
            }
        }
        );
        var a=$(".footer-sticky__content .submit-button--phones");
        formConnector.setCustomSubmit(a,
        function(h) {
            h.preventDefault();
            var i=$(stickyFooter.phoneCountryDropdown+" .form-connector__select__item").text();
            var f=$(h.currentTarget);
            var c=f.parents("form");
            if(formConnector.validateForm(c)) {
                var g=stickyFooter.industryTag;
                var d=[f.data("redirectUrl"), g?g.toLowerCase(): "industry", "region", i?i: "country", "html"];
                window.open(d.join("."), "_self")
            }
        }
        );
        $(".footer-sticky__phone").on("click",
        function() {
            if($(this).hasClass("transform-phone-down")||!stickyFooter.industryTag) {
                return
            }
            var c=$.ajax("/bin/pall/location-phone."+PallConfig.siteId+"."+stickyFooter.industryTag+".json");
            var d=c.then(function(e) {
                stickyFooter.populateCountryPhoneDropdown(e.results);
                $(".footer-sticky__phone__content .form-connector__select__menu__option__item").on("click", function() {
                    stickyFooter.populatePhones($(this))
                }
                );
                return $.ajax("https://freegeoip.net/json/")
            }
            );
            d.done(function(e) {
                var f=e.country_name=="United States"?"USA": e.country_name;
                stickyFooter.$countryPhoneSelected.html(f);
                stickyFooter.$countryPhoneLabel.addClass("hide");
                var g=$(".footer-sticky__phone__content .form-connector__select__menu__option__item").filter("[data-country="+f+"]");
                if(g.length>0) {
                    stickyFooter.populatePhones(g)
                }
                else {
                    stickyFooter.populateNoPhones()
                }
            }
            )
        }
        )
    }
    ,
    populatePhones:function(b) {
        var e=b.data("location1-phone");
        var f=b.data("location1-title");
        var h=b.data("location2-phone");
        var i=b.data("location2-title");
        var a=$(".form-connector__phones");
        var c=$("#template-country-phones").html();
        var g=Handlebars.compile(c);
        var d=g( {
            location1Phone: e, location1Title: f, location2Phone: h, location2Title: i
        }
        );
        a.empty();
        a.append(d)
    }
    ,
    populateNoPhones:function() {
        var d=$(".form-connector__phones");
        var e=d.data("noPhonesText");
        var a=$("#template-country-no-phones").html();
        var c=Handlebars.compile(a);
        var b=c( {
            text: e
        }
        );
        d.empty();
        d.append(b)
    }
    ,
    populateCountryPhoneDropdown:function(b) {
        var a=$(".footer-sticky__phone__content .form-connector__select__menu");
        a.empty();
        $.each(b, function() {
            var c=stickyFooter.compiledTemplateCountryDropdownOption( {
                title: this.country, location1Phone: this.location1?this.location1.phone: "", location1Title: this.location1?this.location1.title: "", location2Phone: this.location2?this.location2.phone: "", location2Title: this.location2?this.location2.title: ""
            }
            );
            a.append(c)
        }
        );
        a.find(".form-connector__select__menu__option__item").each(function() {
            $(this).on("click", formConnector.dropdownItemClickHandler)
        }
        )
    }
    ,
    populateCountryDropdown:function(b) {
        var c=$(stickyFooter.locationCountryDropdown);
        c.find(".form-connector__select__title").removeClass("hide").text(c.data("title"));
        c.find(".form-connector__select__item").empty();
        var a=c.find(".form-connector__select__menu");
        a.empty();
        $.each(b, function() {
            var d=stickyFooter.compiledTemplateCountryDropdownOption( {
                title: this.title, id: this.id
            }
            );
            a.append(d)
        }
        );
        a.find(".form-connector__select__menu__option__item").each(function() {
            $(this).on("click", formConnector.dropdownItemClickHandler)
        }
        )
    }
    ,
    activeFooterItem:function(c,
    a,
    f,
    j,
    d) {
        c.toggleClass(f+" "+j);
        var i=1000;
        var h=2500;
        if(MobileDetection.isMobile()) {
            i=h=250
        }
        if(!$("."+a).hasClass("active")) {
            var b=0;
            if($(".footer-sticky__item__content.active").length!==0) {
                b=i
            }
            var g=setInterval(function() {
                if(!c.hasClass(f)) {
                    clearInterval(g);
                    $("."+a).addClass("active")
                }
            }
            ,
            300)
        }
        else {
            var e=setInterval(function() {
                if(c.hasClass(f)) {
                    clearInterval(e);
                    setTimeout(function() {
                        $("."+a).removeClass("active")
                    }
                    ,
                    600)
                }
            }
            ,
            300)
        }
        if(MobileDetection.isMobile()) {
            $("."+d).toggleClass("active")
        }
    }
    ,
    footerOpenContent:function() {
        var b=$(".footer-sticky__item__action");
     // var c=$(".footer-sticky__email");
        var d=$(".footer-sticky__phone");
        var a=$(".footer-sticky__share");
        var e=$(".footer-sticky__locations");
        b.on("click", function(g) {
            $(".footer-sticky__item").removeClass("visible-item");
            var f=$(this);
            if(!MobileDetection.isMobile()) {
                $(".footer-sticky__content__items").toggleClass("transform-content-down transform-content-up");
                if(f.siblings().first().hasClass("hidden-item")) {
                    setTimeout(function() {
                        f.siblings().removeClass("hidden-item").addClass("visible-item");
                        $(".footer-sticky__item__points").toggleClass("active")
                    }
                    ,
                    1000)
                }
                else {
                    f.siblings().addClass("hidden-item").removeClass("visible-item");
                    setTimeout(function() {
                        $(".footer-sticky__item__points").toggleClass("active")
                    }
                    ,
                    1000)
                }
            }
            else {
                $(".footer-sticky__content__items").toggleClass("transform-content-down transform-content-up "+f.data("animation"));
                f.siblings().each(function() {
                    var h=$(this);
                   // if(h.hasClass("active")) {
                     //  if(h.hasClass("transform-email-up")) {
                        //    stickyFooter.activeFooterItem(h, "footer-sticky__email__content", "transform-email-down", "transform-email-up", "footer-sticky__item__arrow__email")
                      //  }
                       // else {
                            if(h.hasClass("transform-phone-up")) {
                                stickyFooter.activeFooterItem(h, "footer-sticky__phone__content", "transform-phone-down", "transform-phone-up", "footer-sticky__item__arrow__phone")
                            }
                            else {
                                if(h.hasClass("transform-share-up")) {
                                    stickyFooter.activeFooterItem(h, "footer-sticky__share__content", "transform-share-down", "transform-share-up", "footer-sticky__item__arrow__share")
                                }
                                else {
                                    if(h.hasClass("transform-locations-up")) {
                                        stickyFooter.activeFooterItem(h, "footer-sticky__locations__content", "transform-locations-down", "transform-locations-up", "footer-sticky__item__arrow__locations")
                                    }
                                }
                           // }
                      // }
                        h.toggleClass("active").toggleClass(stickyFooter.bgColor);
                        setTimeout(function() {
                            $(".footer-sticky__content__items").toggleClass("transform-content-down transform-content-up "+h.data("animation"))
                        }
                        ,
                        500)
                    }
                }
                );
                f.toggleClass("active").toggleClass(stickyFooter.bgColor)
            }
        }
        );
      //  c.on("click",
       // function() {
      //      stickyFooter.activeFooterItem($(this), "footer-sticky__email__content", "transform-email-down", "transform-email-up", "footer-sticky__item__arrow__email")
      //  }
       // );
        d.on("click",
        function() {
            stickyFooter.activeFooterItem($(this), "footer-sticky__phone__content", "transform-phone-down", "transform-phone-up", "footer-sticky__item__arrow__phone")
        }
        );
        a.on("click",
        function() {
            stickyFooter.activeFooterItem($(this), "footer-sticky__share__content", "transform-share-down", "transform-share-up", "footer-sticky__item__arrow__share")
        }
        );
        e.on("click",
        function() {
            stickyFooter.activeFooterItem($(this), "footer-sticky__locations__content", "transform-locations-down", "transform-locations-up", "footer-sticky__item__arrow__locations")
        }
        )
    }
    ,
    setUpEmailIndustryDropDown:function() {
        var a=function() {
            var d=window.location.host;
            if(stickyFooter.emailIndustryDropDownAutoSelector[d]!==undefined) {
                var c='span[id="'+stickyFooter.emailIndustryDropDownAutoSelector[d]+'"]';
                var e=setInterval(function() {
                    if($(c).length==$(stickyFooter.emailIndustryDropdownInput).length) {
                        clearInterval(e);
                        $(c).trigger("click");
                        $(stickyFooter.emailIndustryDropdownInput).each(function() {
                            if($(this).closest(".footer-sticky__content__items__body__email__pannel").length>0) {
                                $(this).closest(".form-connector__input-container").addClass("hide")
                            }
                            else {
                                $(this).closest(".form-connector__input-container").addClass("hidden")
                            }
                        }
                        )
                    }
                }
                ,
                100)
            }
        }
        ;
        var b=function() {
            $(stickyFooter.emailIndustryDropdownInput).closest(".form-connector__input-container").find(".form-connector__select__menu__option").on("click", function() {
                $(stickyFooter.emailIndustryDropdownInput).trigger("change")
            }
            );
            $(stickyFooter.emailIndustryDropdownInput).on("change",
            function() {
                var c=$(this).val();
                var d=c.replace("&amp;", "&");
                $(this).val(d)
            }
            )
        }
        ;
        a();
        b()
    }
    ,
    footerStickyRelocate:function() {
        var c=$(window);
        var a=c.scrollTop();
        var b=$(".footer").offset().top-c.height();
        if(a>b) {
            $(".footer-sticky").css("position", "absolute")
        }
        else {
            $(".footer-sticky").css( {
                position: "fixed", top: "inherit"
            }
            )
        }
    }
    ,
    needToInit:function() {
        return $(".footer-sticky").length>0
    }
}
;
var externalVideoPlayer= {
    ytAPIURL:"https://www.googleapis.com/youtube/v3/videos?id={YTID}&key={YTAPIKEY}&fields=items(id,snippet(description))&part=snippet", ytPlayer: null, init: function() {
        this.$el=$(".external-video-player__container__content__text-box");
        $(document).on("YTIFAPIReady", this.onIFrameReady.bind(this))
    }
    ,
    onIFrameReady:function() {
        ytPlayer=new YT.Player("youtube-iframe", {
            events: {
                onReady: this.onPlayerReady.bind(this), onStateChange: this.onVideoChange.bind(this)
            }
        }
        )
    }
    ,
    onPlayerReady:function() {
        this.setupVideoTitle();
        this.setupVideoDescription()
    }
    ,
    onVideoChange:function(a) {
        if(a.data&&a.data==-1) {
            this.setupVideoTitle();
            this.setupVideoDescription()
        }
    }
    ,
    setupVideoTitle:function() {
        var a=ytPlayer.getVideoData().title;
        this.$el.find(".external-video-player__container__content__text-box__title").text(a)
    }
    ,
    setupVideoDescription:function() {
        var a=this.ytAPIURL.replace("{YTID}", ytPlayer.getVideoData().video_id).replace("{YTAPIKEY}", PallConfig.youTubeAPIKey);
        $.ajax( {
            async: true, context: this, global: false, url: a, dataType: "json", success: function(c) {
                if(c&&c.items[0]&&c.items[0].snippet.description) {
                    var b=c.items[0].snippet.description;
                    this.$el.find(".external-video-player__container__content__text-box__text").text(b)
                }
            }
        }
        )
    }
    ,
    needToInit:function() {
        return $("#youtube-iframe").length>0&&$(".external-video-player__container__content__text-box").length>0
    }
}
;
var countDown= {
    rings: {
        DAYS: {
            s: 86400000, max: 60
        }
        ,
        HOURS: {
            s: 3600000, max: 24
        }
        ,
        MIN: {
            s: 60000, max: 60
        }
        ,
        SEC: {
            s: 1000, max: 60
        }
        ,
        MICROSEC: {
            s: 10, max: 100
        }
    }
    ,
    r_count:4,
    r_spacing:13,
    r_size:120,
    r_thickness:10,
    update_interval:100,
    init:function() {
        $el=$(".event-countdown__event-date");
        $r=countDown;
        $r.countdown_to=$el.text();
        $r.strokeColor=$(".header-basic__content").css("backgroundColor");
        if(window.matchMedia("(max-width: 480px)").matches) {
            $r.r_size=60;
            $r.r_thickness=6
        }
        $r.cvs=document.createElement("canvas");
        $r.size= {
            w: ($r.r_size+$r.r_thickness)*$r.r_count+($r.r_spacing*($r.r_count-1)), h: ($r.r_size+$r.r_thickness)
        }
        ;
        $r.cvs.setAttribute("width",
        $r.size.w*window.devicePixelRatio);
        $r.cvs.setAttribute("height",
        $r.size.h*window.devicePixelRatio);
        $r.ctx=$r.cvs.getContext("2d");
        $r.ctx.scale(window.devicePixelRatio,
        window.devicePixelRatio);
        $(".event-countdown__countdown__graph").append($r.cvs);
        $r.cvs=$($r.cvs);
        $r.ctx.textAlign="center";
        $r.actual_size=$r.r_size+$r.r_thickness;
        $r.countdown_to_time=new Date($r.countdown_to).getTime();
        $r.cvs.css( {
            width: $r.size.w+"px", height: $r.size.h+"px"
        }
        );
        $r.go()
    }
    ,
    ctx:null,
    go:function() {
        var a=0;
        $r.time=(new Date().getTime())-$r.countdown_to_time;
        for(var b in $r.rings) {
            $r.unit(a++, b, $r.rings[b])
        }
        setTimeout($r.go,
        $r.update_interval)
    }
    ,
    unit:function(j,
    g,
    d) {
        var h, f, i, a=d.s;
        i=parseFloat($r.time/a);
        $r.time-=Math.round(parseInt(i))*a;
        i=Math.abs(i);
        h=($r.r_size*0.5+$r.r_thickness*0.5);
        h+=+(j*($r.r_size+$r.r_spacing+$r.r_thickness));
        f=$r.r_size*0.5;
        f+=$r.r_thickness*0.5;
        var c=270-(i/d.max)*360;
        var b=c*(Math.PI/180);
        $r.ctx.save();
        $r.ctx.translate(h, f);
        $r.ctx.clearRect($r.actual_size*-0.5, $r.actual_size*-0.5, $r.actual_size, $r.actual_size);
        $r.ctx.strokeStyle=$r.strokeColor;
        $r.ctx.beginPath();
        $r.ctx.arc(0, 0, $r.r_size/2, 1.5*Math.PI, -0.5*Math.PI, 1);
        $r.ctx.lineWidth=$r.r_thickness;
        $r.ctx.stroke();
        $r.ctx.strokeStyle="#000";
        $r.ctx.beginPath();
        $r.ctx.arc(0, 0, $r.r_size/2, 1.5*Math.PI, b, 1);
        $r.ctx.lineWidth=$r.r_thickness;
        $r.ctx.stroke();
        $r.ctx.fillStyle="#fff";
        var e=window.matchMedia("(max-width: 480px)").matches;
        $r.ctx.font="200 10px proxima-nova-regular";
        if(e) {
            $r.ctx.font="200 8px proxima-nova-regular"
        }
        $r.ctx.fillText(g,
        0,
        20);
        $r.ctx.font="200 32px proxima-nova-bold";
        if(e) {
            $r.ctx.font="200 20px proxima-nova-bold"
        }
        $r.ctx.fillStyle="#fff";
        $r.ctx.fillText(Math.floor(i),
        0,
        5);
        $r.ctx.restore()
    }
    ,
    needToInit:function() {
        return $(".event-countdown__event-date").length>0
    }
}
;
var supportTabContainer= {
    industryColor: "", init: function() {
        var b=this;
        var a=$(".cta-support-tab__container");
        b.industryColor=a.data("industrycolor");
        b.editmode=a.data("editmode");
        if(b.editmode) {
            return
        }
        $(".cta-support-tab__container__main__panel").first().toggleClass("active");
        $(".cta-support-tab__container__main__tabs__tab__links").on("click",
        function(c) {
            c.preventDefault();
            b.setActiveTab(this, b.industryColor)
        }
        );
        $(".cta-support-tab__container__qa__content").slick( {
            dots: false, infinite: true, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 10000, speed: 700, useTransform: true, cssEase: "cubic-bezier(0.470, 0.005, 0.095, 0.995)", arrows:false, responsive:[ {
                breakpoint:840, settings: {
                    autoplay: false
                }
            }
            ]
        }
        )
    }
    ,
    setActiveTab:function(d,
    c) {
        var b="#"+d.id;
        var a="#tabcontent__"+d.id;
        $(".cta-support-tab__container__main__tabs__tab__links").each(function() {
            var g=$(this);
            g.removeClass("active");
            g.removeClass(c)
        }
        );
        var f=$(b);
        f.addClass("active").addClass(c);
        $(".cta-support-tab__container__main__panel").each(function() {
            var g=$(this);
            g.removeClass("active")
        }
        );
        var e=$(a);
        e.addClass("active")
    }
    ,
    needToInit:function() {
        return $(".cta-support-tab__container").length>0
    }
}
;
var contentStrip= {
    onMobile: null, textBlockClass: ".content-strip__container__content__text-block", mobileBlockClass: ".content-strip__container__content__mobile-block", init: function() {
        contentStrip.setUpRibbon();
        contentStrip.onMobile=contentStrip.isMobile();
        $(contentStrip.textBlockClass+"__read-more").on("click", function(c) {
            c.preventDefault();
            var d=$(c.currentTarget);
            var b=d.siblings(contentStrip.mobileBlockClass);
            var a=d.siblings(contentStrip.textBlockClass+"__description:not("+contentStrip.textBlockClass+"__description--read-more)");
            b.toggleClass("active");
            d.toggleClass("active");
            a.trigger("isTruncated", function(e) {
                if(e) {
                    var f=d.siblings(contentStrip.textBlockClass+"__description--read-more");
                    a.hide();
                    f.show()
                }
            }
            );
            contentStrip.toggleRibbon(d)
        }
        );
        $(contentStrip.mobileBlockClass+"__read-less").on("click",
        function(c) {
            c.preventDefault();
            var d=$(c.currentTarget);
            var b=d.closest(contentStrip.mobileBlockClass);
            var a=b.siblings(contentStrip.textBlockClass+"__description:not("+contentStrip.textBlockClass+"__description--read-more)");
            b.toggleClass("active");
            d.parent().siblings(contentStrip.textBlockClass+"__read-more").toggleClass("active");
            a.trigger("isTruncated", function(e) {
                if(e) {
                    var f=a.siblings(contentStrip.textBlockClass+"__description--read-more");
                    f.hide();
                    a.show()
                }
            }
            );
            contentStrip.toggleRibbon(d)
        }
        );
        $(window).on("resize",
        function() {
            contentStrip.setUpRibbon();
            var b=contentStrip.isMobile();
            if(!b&&contentStrip.onMobile) {
                contentStrip.onMobile=false;
                $(contentStrip.textBlockClass+"__description:not("+contentStrip.textBlockClass+"__description--read-more)").each(function() {
                    $descriptionBlock=$(this);
                    var d=$descriptionBlock.siblings(contentStrip.textBlockClass+"__description--read-more");
                    if(d.is(":visible")) {
                        d.hide();
                        $descriptionBlock.show();
                        $descriptionBlock.siblings(contentStrip.mobileBlockClass).toggleClass("active")
                    }
                    var c=$descriptionBlock.siblings(contentStrip.textBlockClass+"__read-more");
                    if(c.hasClass("active")) {
                        c.removeClass("active")
                    }
                }
                )
            }
            else {
                if(b&&!contentStrip.onMobile) {
                    contentStrip.onMobile=true;
                    var a=$(contentStrip.textBlockClass+"__read-more");
                    if(!a.hasClass("active")) {
                        a.addClass("active")
                    }
                }
            }
        }
        );
        if(contentStrip.onMobile) {
            $(contentStrip.textBlockClass+"__read-more").addClass("active")
        }
    }
    ,
    isMobile:function() {
        return window.matchMedia("(max-width: 839px)").matches
    }
    ,
    toggleRibbon:function(a) {
        var b=a.closest(".content-strip__container");
        if(b.hasClass("sub-content-strip")) {
            b.removeClass("sub-content-strip").addClass("sub-content-strip--disabled");
            b.css("-webkit-clip-path", "none")
        }
        else {
            if(b.hasClass("sub-content-strip--disabled")) {
                b.removeClass("sub-content-strip--disabled").addClass("sub-content-strip");
                contentStrip.setUpRibbon()
            }
        }
    }
    ,
    setUpRibbon:function() {
        var i=$(".content-strip__container.sub-content-strip");
        if(!i||i.length===0) {
            return
        }
        var j=i.find(".content-strip__container__content__image-block");
        var e=j.offset().left;
        var g=60;
        var h;
        if(!window.matchMedia("(max-width : 839px)").matches) {
            h="polygon(0 0, 100% 0, 100% 90%, "+(e+g*2)+"px 90%, "+(e+g)+"px 100%, "+e+"px 90%, 0 90%)"
        }
        else {
            var d=$(".solution-story-component__container__content");
            if(!d||d.size()===0) {
                d=$(".sub-content-strip-component__container__content")
            }
            var f=parseInt(d.first().css("padding-left").replace("px",
            ""));
            h="polygon(0 0, 100% 0, 100% 75%, "+(f+18)+"px 100%, 0 90%)"
        }
        i.css("-webkit-clip-path",
        h);
        var b=$(".header__shadow__container--content-strip");
        var c=$(".header__shadow--content-strip");
        var a=$(".content-strip__subcontent");
        b.css("margin-left",
        e-53);
        if(!Support.isClipPathSupported()) {
            b.hide();
            c.hide();
            a.css("margin-top", 0)
        }
    }
    ,
    needToInit:function() {
        return $(".content-strip__container").length>0
    }
}
;
var CardSlider= {
    $cards: null, $cardsList: null, $container: null, $shadow: null, $cardTitle: null, $cardSubtitle: null, timeouts: [], cardWidth: 300, cardWidthMobile: 200, cardsTotal: null, cardsVisible: 0, lastOffset: 0, currentMargin: 0, maxMargin: 0, cardOffset: 4, init: function() {
        this.$cards=$(".card-slider__container__list__card");
        this.$cardsList=$(".card-slider__container__list");
        this.$container=$(".card-slider__container__headline");
        this.$shadow=$(".card-slider__shadow");
        this.$cardTitle=$(".card-slider__container__list__card__content__title");
        this.$cardSubtitle=$(".card-slider__container__list__card__content__subtitle");
        this.cardsTotal=$(".card-slider__container__list__card").length;
        var c=this;
        var d=$("#card-slider-video");
        if(MobileDetection.isMobile()||MobileDetection.isMobileDevice()) {
            this.$cardTitle.dotdotdot( {
                ellipsis: "", height: 75
            }
            );
            this.$cardSubtitle.dotdotdot( {
                ellipsis: "", height: 33
            }
            );
            var f=$(".card-slider__container__list-container");
            var b=$(".card-slider__container__list");
            var e=new Sly(f,
            {
                horizontal: 1, itemNav: "basic", smart: 1, activateOn: "click", mouseDragging: 1, touchDragging: 1, releaseSwing: 1, scrollBy: 1, activatePageOn: "click", speed: 300, elasticBounds: 1, easing: "easeOutExpo", dragHandle: 1, dynamicHandle: 1, clickBar: 1
            }
            );
            e.init();
            $(window).on("orientationchange",
            function(g) {
                e.reload()
            }
            )
        }
        else {
            this.setDimensions();
            this.$cardTitle.dotdotdot( {
                ellipsis: "", height: 75
            }
            );
            this.$cardSubtitle.dotdotdot( {
                ellipsis: "", height: 45
            }
            );
            var a=document.getElementById("card-slider-video");
            a.setAttribute("src",
            d.data("video-src"));
            a.play();
            this.$cardsList.on("mouseenter",
            function() {
                c.performHoverEffect()
            }
            );
            this.$cardsList.on("mouseleave",
            function() {
                c.performHoverEffect(true)
            }
            );
            this.$cards.on("mouseover",
            function(g) {
                c.performSlideEffect(g)
            }
            );
            $(window).on("resize",
            function() {
                c.setDimensions();
                c.$cardsList.animate( {
                    marginLeft: 0
                }
                ,
                500)
            }
            )
        }
    }
    ,
    setDimensions:function() {
        var d=MobileDetection.isMobile()?this.cardWidthMobile: this.cardWidth;
        var a=$(window).width();
        var c=(a/(d+this.cardOffset));
        this.cardsVisible=Math.ceil(c);
        this.extraMargin=a-(((this.cardsVisible-1)*d)+((this.cardsVisible-1)*this.cardOffset));
        this.extraMargin=(d-this.extraMargin)*-1;
        this.maxMargin=((((this.cardsTotal-this.cardsVisible)*d)+((this.cardsTotal-this.cardsVisible)*this.cardOffset))*-1)+this.extraMargin;
        this.$cards.first().css( {
            "margin-left": 0
        }
        );
        this.$cards.last().css( {
            "margin-right": 0
        }
        );
        var b=(this.cardsTotal*d)+((this.cardsTotal-1)*this.cardOffset*2);
        this.$cardsList.css( {
            width: b
        }
        )
    }
    ,
    getMarginLeft:function(a) {
        var b=this.$cards.index(a)+1;
        var g=Math.ceil(this.cardsVisible/2)+1;
        var e=this.cardsTotal-this.cardsVisible+Math.ceil(this.cardsVisible/2);
        var f=b<g?0: b;
        f=f>0?f-Math.ceil(this.cardsVisible/2): 0;
        f=b>e?this.lastOffset: f;
        this.lastOffset=f;
        var d=f>0?(f-1)*this.cardOffset: 0;
        var c=((this.cardWidth*f)+d)*-1;
        if(b+1==this.cardsTotal||b==this.cardsTotal) {
            c+=this.extraMargin
        }
        return c
    }
    ,
    performHoverEffect:function(b) {
        var a=this;
        for(var c=0;
        c<this.timeouts.length;
        c++) {
            window.clearTimeout(this.timeouts[c])
        }
        var e=0;
        this.timeouts=[];
        var d=b?$(this.$cards.get().reverse()):this.$cards;
        d.each(function() {
            var f=$(this);
            a.timeouts.push(setTimeout(function() {
                if(b) {
                    f.removeClass("active");
                    a.$container.removeClass("active");
                    a.$shadow.removeClass("active")
                }
                else {
                    f.addClass("active");
                    a.$container.addClass("active");
                    a.$shadow.addClass("active")
                }
            }
            ,
            e));
            e+=40
        }
        )
    }
    ,
    performSlideEffect:function(a) {
        this.$cardsList.stop();
        this.$cardsList.animate( {
            marginLeft: this.getMarginLeft($(a.currentTarget)), easing: "easein"
        }
        ,
        500)
    }
    ,
    needToInit:function() {
        return $(".card-slider").length>0
    }
}
;
var ApplicationList= {
    init: function() {
        $(".application-list__content__items__item__outer-wrapper > a").on("click", function(b) {
            b.preventDefault();
            var a=$($(this).attr("href"));
            $("html, body").animate( {
                scrollTop: a.offset().top-40
            }
            ,
            1000)
        }
        )
    }
    ,
    needToInit:function() {
        return $(".application-list").length>0
    }
}
;
var alertNotificationBar= {
    $el: null, init: function() {
        this.$el=$(".alert-notification-bar.alert-notification-bar--section");
        if(alertNotificationBar.checkVisibility()) {
            topNav.$el.prepend(alertNotificationBar.$el);
            alertNotificationBar.$el.show()
        }
        $(".alert-notification-bar__close__button").on("click",
        function() {
            alertNotificationBar.$el.hide();
            alertNotificationBar.save()
        }
        );
        $(".alert-notification-bar__container__bar-wrapper__expand__button").on("click",
        function() {
            $(".alert-notification-bar__container__mobile").toggleClass("active");
            $(this).remove()
        }
        )
    }
    ,
    save:function() {
        if(window.localStorage!==null) {
            localStorage.pallAlertNotificationClosed=true
        }
    }
    ,
    checkVisibility:function() {
        var a=window.localStorage!==null?localStorage.pallAlertNotificationClosed: null;
        if(a) {
            return false
        }
        return true
    }
    ,
    needToInit:function() {
        return $(".alert-notification-bar.alert-notification-bar--section").length>0
    }
}
;
var bgImageHelper= {
    transparency:0.5, colorPallete: {
        "bg-pallblue": "rgba(24, 77, 157,0.6)", "bg-aerospace": "rgba(0,174,239,0.6)", "bg-power": "rgba(233,111,20,0.6)", "bg-biopharma": "rgba(83,46,98,0.6)", "bg-food": "rgba(58,126,7,0.6)", "bg-chemicals": "rgba(89,157,118,0.6)", "bg-industrial": "rgba(33,42,74,0.6)", "bg-medical": "rgba(27,139,234,0.6)", "bg-oilgas": "rgba(84,24,1,0.6)", "bg-microelec": "rgba(128,166,4,0.6)", "bg-laboratory": "rgba(59,168,184,0.6)"
    }
    ,
    init:function() {
        $(".bg-image-helper").each(function() {
            var b=$(this);
            var a=b.data("image-src");
            b.css("background-image", 'url("'+a+'")');
            b.css("background-repeat", "no-repeat")
        }
        );
        $(".bg-image-helper--cover").each(function() {
            var a=$(this);
            a.css("background-size", "cover")
        }
        )
    }
    ,
    setBgImageAndColor:function(c,
    b) {
        var a=c.data("image-src");
        c.css("background", 'url("'+a+'") 0 0/cover '+this.colorPallete[b])
    }
    ,
    setBgImageRemoveColor:function(b) {
        var a=b.data("image-src");
        b.css("background", 'url("'+a+'") 0 0/cover')
    }
    ,
    needToInit:function() {
        return $(".bg-image-helper").length>0
    }
}
;
var MobileDetection= {
    isMobile: function() {
        return window.matchMedia("(max-width: 839px)").matches
    }
    ,
    isMobileDevice:function() {
        mobileExp=new RegExp("Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile", "i");
        return mobileExp.test(navigator.userAgent)
    }
    ,
    isMobileIOS:function() {
        return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream
    }
    ,
    isSafari:function() {
        return/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)&&!navigator.userAgent.match("CriOS")
    }
}
;
var Support= {
    isClipPathSupported: function() {
        var a="clipPath", f=["webkit", "moz", "ms", "o"], h=[a], b=document.createElement("testelement"), c="polygon(50% 0%, 0% 100%, 100% 100%)";
        for(var g=0;
        g<f.length;
        g++) {
            var d=f[g]+a.charAt(0).toUpperCase()+a.slice(1);
            h.push(d)
        }
        for(var e=0;
        e<h.length;
        e++) {
            var k=h[e];
            if(b.style[k]==="") {
                b.style[k]=c;
                if(b.style[k]!=="") {
                    return true
                }
            }
        }
        return false
    }
}
;
var Language= {
    isChinese: function() {
        return window.location.pathname.indexOf("/zh_cn/")!==-1&&window.location.hostname.indexOf("zh.pall.com")===0
    }
    ,
    setup:function() {
        if(Language.isChinese()) {
            $("body").addClass("language-chinese")
        }
    }
}
;
var Main= {
    initialized: false, initializeArray: [countDown, parallax, externalVideoPlayer, fullBleedVideo, bgImageHelper, quilt, miniSolutionBlock, topicsTabContainer, topNav, basicHeader, solutionNav, alertNotificationBar, twoColorText, stickyFooter, contentStrip, leadGen, literatureLibrary, formConnector, supportTabContainer, Search, leadGenProductSelector, webinarDetails, locationsList, repsList, ApplicationList, CardSlider], init: function() {
        if(Main.initialized) {
            return
        }
        else {
            Main.initialized=true
        }
        window.onYouTubeIframeAPIReady=function() {
            if(!externalVideoPlayer.YTAPIReady) {
                externalVideoPlayer.YTAPIReady=true;
                $(document).trigger("YTIFAPIReady")
            }
            if(!ytp.YTAPIReady) {
                ytp.YTAPIReady=true;
                $(document).trigger("YTAPIReady")
            }
        }
        ;
        Main.initializeArray.map(function(a) {
            if(typeof a.needToInit==="function"&&a.needToInit()) {
                a.init()
            }
        }
        );
        Language.setup()
    }
}
;