/* ex-graph5c.js */
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var l=0;return function(){return l<a.length?{done:!1,value:a[l++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.makeIterator=function(a){var l="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(l)return l.call(a);if("number"==typeof a.length)return $jscomp.arrayIterator(a);throw Error(String(a)+" is not an iterable or ArrayLike");};window.SHW.EX_GRAPH=window.SHW.EX_GRAPH||[];(function(a,l,k,v,d){function t(b,f){if(0>b.indexOf("Highcharts.theme_zaimu"))return b;if(0<=b.indexOf("yAxis:")&&0<=b.indexOf("tickAmount:",b.indexOf("yAxis:"))){var c=b.indexOf("tickAmount:",b.indexOf("yAxis:"))+11,e=b.indexOf(",",c);c=b.substring(0,c);e=b.substring(e);b=c+f+e}else c=b.indexOf("title:",b.indexOf("yAxis:")),e=b.substring(0,c),c=b.substring(c),b=e+"tickAmount:"+f+",\n"+c;c=b.lastIndexOf('tickAmount("#');e=b.indexOf(");",c)+2;c=b.substring(0,c);e=b.substring(e);return b=c+e}function q(){var b=a(k).height(),f=a(k).scrollTop(),c=Math.floor(b/8);30>c&&(c=30);100<c&&(c=100);for(var e in d.codePlot){var g=a("#"+e);if(!a(g).attr("data-visible")){var h=a(g).height(),p=a(g).offset().top;h=Math.floor(h/2);300<h&&(h=300);f+b-c>=p+h&&(a(g).attr("data-visible",!0),a(g).html(d.codePlot[e]))}}}d._strMediaQuery="screen and (min-width: 768px)";d.bSp=!k.matchMedia(d._strMediaQuery).matches;d.codePlot=[];d.paramPlot=[];d.idAjax=[];d.codeAjax=[];a(l).ready(function(){d.bEnable=0<a('[data-page-marker~="js-graph-ex-draw"]').length;d.bEffect=0<a('[data-page-marker~="js-graph-effect"]').length;d.bEnable&&(a('#sharewithmain .highlights-2nd div[id^="highlights-graph-"]').each(function(){var b="",f=a(this).parent().prevAll('script[src*="/resources/graphtheme-tdnet/zaimutheme.js"]');if(0>=a(f).length)return!0;var c=a(this).attr("id");f=new URL(a(f).last().attr("src"),a(location).attr("href"));b+='<script src="'+f.href+'">\x3c/script>';b+='<script type="text/javascript">'+a(this).parent().prev("script").html()+"\x3c/script>";if(!(0>b.indexOf("Highcharts.theme_zaimu")||0>b.indexOf("setLegend"))){var e=b.lastIndexOf('setLegend("#');f=b.indexOf(");",e)+2;e=b.substring(0,e);b=b.substring(f);b=e+b}if(0<=b.indexOf("type: 'column'")&&!(0<=b.indexOf("type: 'line'")||0<b.indexOf("data-adjust-max-value"))){var g=b.indexOf("max:",b.indexOf("yAxis:"))+4,h=b.indexOf(",",g);f=b.substring(0,g);e=b.substring(h);g=b.substring(g,h);g=parseFloat(g);isNaN(g)||(b=f+(g+g/9.1)+e)}d.codePlot[c]=b;a(this).parent().prevUntil("*:not(script)").remove()}),a('#sharewithmain .haitou-graph-2nd div[id^="haitouContainer-"]').each(function(){var b="",f=a(this).prevAll('script[src*="/resources/graphtheme-tdnet/haitoutheme.js"]');if(0>=a(f).length)return!0;f=new URL(a(f).last().attr("src"),a(location).attr("href"));b+='<script src="'+f.href+'">\x3c/script>';b+='<script type="text/javascript">'+a(this).prev("script").html()+"\x3c/script>";f=a(this).attr("id");d.codePlot[f]=b;a(this).prevUntil("*:not(script)").remove()}),k.setTimeout(function(){try{if(d.bEffect)for(var b in d.codePlot)c=a("#"+b),e=a(c).highcharts(),g=e.options.yAxis[0].tickAmount,d.codePlot[b]=t(d.codePlot[b],g),a(c).empty();else for(var f in d.codePlot){var c=a("#"+f),e=a(c).highcharts(),g=e.options.yAxis[0].tickAmount;d.codePlot[f]=t(d.codePlot[f],g);a(c).attr("data-visible",!0);a(c).html(d.codePlot[f])}}catch(h){console.assert(!1,"Err: "+h.message+" in ex-graph.js")}},0),a('#sharewithmain .graph > [id^="graphComponent-"]').each(function(){var b=a(this).attr("id");d.idAjax.push(b);var f="";a(this).prevAll("script[src]").each(function(){if(0>(a(this).attr("src")||"").indexOf("resources/graphtheme/"))return!0;var e=new URL(a(this).attr("src"),a(location).attr("href"));f+='<script src="'+e.href+'">\x3c/script>'});d.codeAjax[b]=f;var c=a(this).outerHeight();a(this).prevUntil("*:not(script)").remove();a(this).after('<div id="'+b+'-ajax"></div>');0<c&&a("#"+b+"-ajax").css("height",c+"px");a(this).remove()}),0<d.idAjax.length&&a.get(a(location).attr("href")).done(function(b){0<=b.indexOf('<div id="wrapper-3"')&&(b=b.substring(b.indexOf('<div id="wrapper-3"'),b.indexOf("\x3c!-- end wrapper-3 --\x3e")));for(var f=$jscomp.makeIterator(d.idAjax),c=f.next();!c.done;c=f.next()){c=c.value;var e=b;e=e.substring(e.indexOf('<div id="'+c+'"'));e=e.substring(e.indexOf("<script>"),e.indexOf("\x3c/script>")+9);d.codePlot[c]=d.codeAjax[c]||"";d.codePlot[c]+=e}k.setTimeout(function(){try{if(d.bEffect){var g=$jscomp.makeIterator(d.idAjax);for(m=g.next();!m.done;m=g.next()){var h=m.value;n=a("#"+h+"-ajax");a(n).attr("id",h)}q()}else for(var p=$jscomp.makeIterator(d.idAjax),m=p.next();!m.done;m=p.next()){var r=m.value,n=a("#"+r+"-ajax");a(n).attr("id",r);a(n).attr("data-visible",!0);a(n).html(d.codePlot[r])}}catch(u){console.assert(!1,"Err: "+u.message+" in ex-graph.js")}},0)}).fail(function(){console.assert(!1,"Err: load fail in ex-graph.js")}));if(d.bEnable&&(a(k).bind("resize scroll",function(){try{d.bEffect&&q();var b=!k.matchMedia(d._strMediaQuery).matches;if(b!=d.bSp&&(d.bSp=b,0>=a('[data-page-marker~="js-graph-no-redraw"]').length))for(var f in d.codePlot){var c=a("#"+f);a(c).attr("data-visible")&&a(c).html(d.codePlot[f])}}catch(e){console.assert(!1,"Err: "+e.message+" in ex-graph.js")}}),d.bEffect))a(k).on("load",function(){k.setTimeout(function(){q()},0)})})})(jQuery,document,window,SHW,SHW.EX_GRAPH);
/* title7.js */
(function(b,d,e){b(d).ready(function(){try{b("head title").each(function(){var a=b(this).text();if(!(0>a.indexOf(" - "))){var c=a.substring(0,a.indexOf(" - ")).trim();a=a.substring(a.indexOf(" - ")+3).trim();c===a?b(this).text(c):0<=a.indexOf(" | ")?b(this).text(a):(a=a.replace(/<br.*\/>/,""),b(this).text(a+" | "+c))}})}catch(a){console.log("Err: "+a.message+" in title.js")}})})(jQuery,document,window);

// scroll_s1.js
(function(a,g,e){var k=function(c){var b=g.getElementById(c.substr(1));c.match(/^#\d[A-Za-z0-9_\-]*/)&&(b=a(c));if(b){var d=a(b).offset().top-10;a("a[data-href]").each(function(){a(this).attr("data-href")==c&&(d=a(this).offset().top-10)});b=0;767<a(e).width()?a("#header.pad").length&&(b=a("#header.pad").outerHeight()):a("#header").length&&(b=a("#header").outerHeight());d-=b;0>d&&(d=0);a("body,html").animate({scrollTop:d},500)}};a(g).ready(function(){try{var c={setting:{startline:100},togglecontrol:function(){try{a(e).scrollTop()>=this.setting.startline?a("#topcontrol,.topcontrol").addClass("visible"):a("#topcontrol,.topcontrol").removeClass("visible")}catch(b){console.log("Err: "+b.message+" in scroll.js")}try{0<a(".ox_to_page_top").length&&(a(e).height()+a(e).scrollTop()>=a(".ox_to_page_top").offset().top?a("#topcontrol,.topcontrol").addClass("fix-bottom"):a("#topcontrol,.topcontrol").removeClass("fix-bottom"))}catch(b){console.log("Err: "+b.message+" in scroll.js")}},init:function(){try{c.togglecontrol(),a(e).bind("scroll resize",function(b){c.togglecontrol()})}catch(b){console.log("Err: "+b.message+" in scroll.js")}}};c.init()}catch(b){console.log("Err: "+b.message+" in scroll.js")}try{e.setTimeout(function(){a("a[href]").each(function(){try{var b=this,d=a(this).attr("href");if(!(!d||0>d.indexOf("#")||0!=d.indexOf("#")&&0>d.indexOf(e.location.pathname))){var f=this.hash,l=g.getElementById(f.substr(1));f.match(/^#\d[A-Za-z0-9_\-]*/)&&(l=a(f));a(l).length?a(this).click(function(){try{if(!a(b).hasClass("disabled"))return k(f),!1}catch(h){console.log("Err: "+h.message+" in scroll.js")}}):a(this).addClass("non-targeted")}}catch(h){console.log("Err: "+h.message+" in scroll.js")}})},20)}catch(b){console.log("Err: "+b.message+" in scroll.js")}});a(e).on("load",function(){e.setTimeout(function(){try{var c=a(location).attr("hash");k(c)}catch(b){console.log("Err: "+b.message+" in scroll.js")}},20)})})(jQuery,document,window);
/* column9a.js */
(function(a,k,f){f.setTimeout(function(){try{f.magnoliaFrontendData.isEdit?a("body").addClass("in-editor"):a("body").addClass("in-view")}catch(c){console.log("Err: "+c.message+" in column.js")}},20);a(k).ready(function(){try{var c=(a("body").attr("data-page-marker")||"").split(" ");a(".html-paragraph").find("[data-page-marker]").each(function(){c=c.concat((a(this).attr("data-page-marker")||"").split(" "))});c=c.filter(function(b,l,m){return!!b&&m.indexOf(b)===l});0<c.length&&a("body").attr("data-page-marker",c.join(" "))}catch(b){console.log("Err: "+b.message+" in column.js")}try{var d=a(location).attr("pathname").replace(/\.html.*/,"").replace(/[;\?#].*/,"");if(!a("body").attr("data-page-path")){var e="",h=a("head").html().match(/cms:page content="website:(.*)" dialog="standard-templating-kit:/);h&&(e=h[1]);""==e&&(e=d.replace(/.*\.swcms\.net\//,""),e=d.substr(d.indexOf("/")),0<=f.magnoliaFrontendData.contextPath.indexOf("Public")&&(e=e.replace(""+f.magnoliaFrontendData.contextPath,"")));"/"==e.substr(-1)&&(e=e.substr(0,e.length-1));a("body").attr("data-page-path",e)}if(!a("body").attr("data-current-level")){var g=d.split("/").length-1;a(location).attr("href").match(/https:\/\/(ssl|cloud).?\.swcms\.net\//)&&--g;"/"==d.substr(-1)&&--g;0==d.length-5-d.indexOf("index")&&--g;a("body").attr("data-current-level",g)}}catch(b){console.log("Err: "+b.message+" in column.js")}try{a(".column1, .column2, .column3, .column4, .column5").each(function(){0==(""+a(this).html().trim()).length&&a(this).addClass("empty")}),a(".multiColumn1, .multiColumn2, .multiColumn3, .multiColumn4, .multiColumn5").each(function(){0==a(this).children(":not(.empty)").length&&a(this).addClass("empty")})}catch(b){console.log("Err: "+b.message+" in column.js")}try{d=a(location).attr("pathname").replace(/\.html.*/,"").replace(/[;\?#].*/,""),a("#sharewithmain,.promos,#site-info").find("a[href]").each(function(){var b=a(this).attr("href");0!=b.indexOf("#")&&(0<=b.indexOf(d+".")?(a(this).addClass("act"),a(this).parent("li,h2,h3").addClass("act"),a(this).parent().parent("li,h2,h3").addClass("act")):(b=b.replace(/\.html.*/,"").replace(/\?.*/,"").replace(/#.*/,""),0<=d.indexOf(b+"/")&&(a(this).addClass("within"),a(this).parent("li,h2,h3").addClass("within"),a(this).parent().parent("li,h2,h3").addClass("within"))))})}catch(b){console.log("Err: "+b.message+" in column.js")}f.setTimeout(function(){try{a("body").addClass("ready")}catch(b){console.log("Err: "+b.message+" in assist.js")}},50)});a(f).on("load",function(){f.setTimeout(function(){try{f.magnoliaFrontendData.isEdit&&a(".promos, #site-info").find(".reuse-component, .reuse-main-area").find("a").click(function(){var c=a(this).attr("href"),d=a(this).attr("target");d||(d="_self");"_blank"!=d&&"_parent"!=d&&(c=c.replace(/\?.*/,"")+"?"+a(location).attr("href").replace(/.*\?/,""));f.open(c,d);return!1})}catch(c){console.log("Err: "+c.message+" in column.js")}},10);f.setTimeout(function(){try{a("body").addClass("loaded")}catch(c){console.log("Err: "+c.message+" in column.js")}},20)})})(jQuery,document,window);
/* contact10b.js */
(function(a,n,h,m){a(n).ready(function(){function p(){var b,c,e;a("body.form").find(".form-edit, .form-selection").each(function(){var f=a(this).children("label").text().trim();0<=f.indexOf("\u90f5\u4fbf\u756a\u53f7")&&(b=this);0<=f.indexOf("\u90fd\u9053\u5e9c\u770c")&&(c=this);0<=f.indexOf("\u5e02\u533a\u753a\u6751")&&(e=this)});if(0<a(b).length&&0<a(c).length&&0<a(e).length){var g=a(b).find("input").eq(0).attr("id"),d=a(c).find("input,select").eq(0).attr("id"),k=a(e).find("input").eq(0).attr("id"),l='{"postcode":["input#'+g+'"], "address":{"#'+d+'":"%3", "#'+k+'":"%4%5 %6"}}';d==k&&(l='{"postcode":["input#'+g+'"], "address":{"#'+d+'":"%3 %4%5 %6"}}');a(b).find("input").jpostal(JSON.parse(l))}}function q(b){b.find(".external-teaser:not(.with-checkbox)").each(function(){a(this).find("a[href]").attr("href").match(/inquiry/i)&&0<a(this).find("p").length&&a(this).addClass("pre-with-checkbox")});b.find(".ux_add_teaser_checkbox").find(".teaser:not(.with-checkbox), .external-teaser:not(.with-checkbox)").each(function(){0<a(this).find("p").length&&a(this).addClass("pre-with-checkbox")});b.find(".teaser.pre-with-checkbox, .external-teaser.pre-with-checkbox").each(function(){var c=this;a(this).find("p").wrapInner('<label for="sw_'+a(this).attr("id")+'">');a(this).find("p").prepend('<input type="checkbox" id="sw_'+a(this).attr("id")+'" />');a(this).find("a").click(function(){if(a(this).hasClass("disabled"))return!1});a(this).find("label, input[type=checkbox]").click(function(){h.setTimeout(function(){a(c).find("input[type=checkbox]").prop("checked")?(a(c).removeClass("disabled"),a(c).find("a").removeClass("disabled")):(a(c).addClass("disabled"),a(c).find("a").addClass("disabled"))},0)});a(this).removeClass("pre-with-checkbox");a(this).addClass("with-checkbox").addClass("disabled");a(this).find("a").addClass("disabled")})}function r(b){a(".form-summary table").each(function(){var c=a(this).find("tr > td:first-child"),e=c.eq(0);for(i=1;i<c.length;i++)e.text().trim()==c.eq(i).text().trim()?(e.attr("rowspan",Math.floor(e.attr("rowspan")||1)+1),c.eq(i).hide()):e=c.eq(i)})}try{a('#formErrorsDisplay a[href^="#"]').each(function(){var b=a(this).attr("href");0<=b.indexOf("_label")&&(b=b.replace(/#/,"").replace(/_label/,""),bTargetItem=!1,a("input[id], select[id], textarea[id]").each(function(){a(this).attr("id")==b&&(bTargetItem=!0)}),bTargetItem&&a(this).attr("href","#"+b))}),a("body.form textarea").attr("maxlength","2000")}catch(b){console.assert(!1,"Err: "+b.message+" in contact.js")}try{a("body.form #Inquiry .form-submit input:last-child").click(function(){try{var b=a('[id^="email"][required]');if(2<=a(b).length){for(var c=!1,e=a(b).eq(0).val(),g=1;g<a(b).length;g++)e!=a(b).eq(g).val()&&(c=!0);if(c){var d="E-mail address unmatch.";if(0<a("body>#pagetop.ja").length||a("#header").hasClass("ja"))d="\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u304c\u4e00\u81f4\u3057\u3066\u3044\u307e\u305b\u3093\u3002";"undefined"==typeof a.alerts||"undefined"==typeof a.alerts.alert?h.alert(d):a.alerts.alert(d);a(b).eq(0).focus();return!1}}var k=a("select[required] option:first-child:selected");if(1<=k.length){var l=a(k).eq(0).parents(".form-selection").eq(0).children("label");b="";if(l){var f=a(l).clone();a(f).find("dfn").remove();b=a(f).text().trim()}d="Select : "+b;if(0<a("body>#pagetop.ja").length||a("#header").hasClass("ja"))d=b+"\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002";"undefined"==typeof a.alerts.alert?h.alert(d):a.alerts.alert(d);return!1}}catch(t){console.assert(!1,"Err: "+t.message+" in contact.js")}})}catch(b){console.assert(!1,"Err: "+b.message+" in contact.js")}try{"undefined"!=typeof a.fn.jpostal?p():(""+h.location).match(/inquiry/i)&&m.includeJS("https://jpostal-1006.appspot.com/jquery.jpostal.js",function(){p()})}catch(b){console.assert(!1,"Err: "+b.message+" in contact.js")}try{q(a(n)),r(a(n)),m.AJAX_HOOK&&m.AJAX_HOOK.bind&&m.AJAX_HOOK.bind("post",q)}catch(b){console.assert(!1,"Err: "+b.message+" in contact.js")}});a(h).on("load",function(){a(".teaser.with-checkbox, .external-teaser.with-checkbox").each(function(){a(this).find("input[type=checkbox]").prop("checked",!1)})})})(jQuery,document,window,SHW);
// table8y.js
(function(a,l,k){a(l).ready(function(){try{a(".shwTable").each(function(){var g=this;a(g).find(".ht_master table.htCore").each(function(){var b=0;a(this).find(".tableRowHead").each(function(){var d=1,h=a(this).attr("rowspan");""!=h&&(d=parseInt(h,10));b<d&&(b=d)});var c=0;if(0<a(this).find(".tableColumnHead").length){var e=a(this).find(".tableRowHead").eq(0);0<e.length&&(a(e).addClass("tableColumnHead"),c=1,(e=a(e).attr("colspan"))&&""!=e&&(c=parseInt(e,10)))}a(this).find(".tableColumnHead").each(function(){var d=1,h=a(this).attr("colspan");""!=h&&(d=parseInt(h,10));c<d&&(c=d)});a(g).addClass("RowHead"+b);a(g).addClass("ColHead"+c);for(var f=2;f<=b;f++)a(this).find("tr").eq(f-1).find("td").addClass("tableRowHead");for(f=2;f<=c;f++)a(this).find("tr").each(function(){a(this).find("td").eq(f-1).addClass("tableColumnHead")})});a(g).find("table.tbCore").each(function(){var b=0;a(this).find(".tbRowHead").each(function(){var d=1,h=a(this).attr("rowspan");""!=h&&(d=parseInt(h,10));b<d&&(b=d)});var c=0;if(0<a(this).find(".tbColumnHead").length){var e=a(this).find(".tbRowHead:first-child");0<e.length&&(a(e).addClass("tbColumnHead"),c=1,(e=a(e).attr("colspan"))&&""!=e&&(c=parseInt(e,10)))}a(this).find(".tbColumnHead").each(function(){var d=1,h=a(this).attr("colspan");""!=h&&(d=parseInt(h,10));c<d&&(c=d)});a(g).addClass("RowHead"+b);a(g).addClass("ColHead"+c);for(var f=1;f<=b;f++)a(this).find("tr").eq(f-1).find("td").addClass("tbRowHead");for(f=1;f<=c;f++)a(this).find("tr").each(function(){a(this).find("td").eq(f-1).addClass("tbColumnHead")})})})}catch(g){console.log("Err: "+g.message+" in table.js")}try{a(".highlight-quoted-text, .faq-item, #sharewithmain .text-section").each(function(){a(this).find("table:not(.clearbox)").each(function(){a(this).addClass("icell");a(this).parent().addClass("has-icell icon-swip")})}),a(".icell .icell").parent().removeClass("has-icell").removeClass("icon-swip"),a(".icell .icell").removeClass("icell"),a(".layout_sp_scrolltable,.lx_table_sp_swipable,.ux_table_sp_swipable").find(".vertical-table, .ircalendar").addClass("icon-swip"),a(".uni-table, .shwTable, .highlights-table, .highlights-alltable-2nd, .haitou-table, .haitou-table-2nd").addClass("icon-swip"),a(".icon-swip").bind("scroll",function(){a(this).addClass("icon-swip-done")})}catch(g){console.log("Err: "+g.message+" in table.js")}});a(k).on("load",function(){try{var g=function(b){var c=!0,e=a(b).width();a(b).find("div, table").each(function(){e<a(this).width()&&(c=!1)});c?a(b).addClass("no-scroll"):a(b).removeClass("no-scroll")};a(".icon-swip").each(function(){g(this)});a(k).bind("resize",function(){a(".icon-swip").each(function(){g(this)})})}catch(b){console.log("Err: "+b.message+" in table.js")}})})(jQuery,document,window);
/* marge_result11kx.js */
(function(a,z,C,A){'use strict';function n(c){return parseInt(c||"0",10)}function t(c){try{var e=70;0<=c.indexOf("1\u56db\u534a\u671f")?e=10:0<=c.indexOf("2\u56db\u534a\u671f")?e=20:0<=c.indexOf("3\u56db\u534a\u671f")?e=30:0<=c.indexOf("\uff11\u56db\u534a\u671f")?e=10:0<=c.indexOf("\uff12\u56db\u534a\u671f")?e=20:0<=c.indexOf("\uff13\u56db\u534a\u671f")?e=30:0<=c.indexOf("\u4e2d\u9593")?e=20:0<=c.indexOf("1Q")?e=10:0<=c.indexOf("2Q")?e=20:0<=c.indexOf("3Q")?e=30:0<=c.indexOf("Q1")?e=10:0<=c.indexOf("Q2")?e=20:0<=c.indexOf("Q3")?e=30:(" "+c).match(/[^\u56db]\u534a\u671f/)?e=20:c.match(/(1st|first) quarter/i)?e=10:c.match(/(2nd|second) quarter/i)?e=20:c.match(/(3rd|third) quarter/i)&&(e=30);return e}catch(l){console.assert(!1,"Err: "+l.message+" in merge_result.js")}}function q(c){try{var e=0;0<=c.indexOf("\u5e74")?(c.substr(0,c.indexOf("\u5e74")),e=n(c.substr(0,c.indexOf("\u5e74")).match(/(\d*)/))):0<=c.indexOf("FY")?e=n(c.match(/FY(\d\d\d\d)/)[1]):c.match(/fiscal year/i)?e=n(c.match(/fiscal year.*(\d\d\d\d)/i)[1]):c.match(/year end'/i)&&(e=n(c.match(/year end.*\s(\d\d\d\d)/i)[1]));return e}catch(l){console.assert(!1,"Err: "+l.message+" in merge_result.js")}}function v(c,e,l){try{var d="";"string"!=typeof l&&(l="");l+=" merged";a(c).hasClass("highlight")&&(l+=" highlight");a(c).hasClass("download-link-text")||(l+=" no-download");a(c).hasClass("text-without-link")?l+=" no-link":0<a(c).children("a.d_icon.front").length&&(d+=' <span class="d_icon pdf_front"> '+a(c).children("a.d_icon.front").html()+" </span>");0<a(c).children("img:first-child").length&&(d+=' <span class="d_icon pdf_front"> '+a(c).children("img:first-child").prop("outerHTML")+" </span> ");d+=a(c).children("a:not(.d_icon), span").prop("outerHTML");0<a(c).children("a.d_icon.rear").length&&(d+=' <span class="d_icon pdf_rear"> '+a(c).children("a.d_icon.rear").html()+" </span> ");0<a(c).children("a:not(.d_icon) + img").length&&(d+=' <span class="d_icon pdf_rear"> '+a(c).children("a:not(.d_icon) + img").prop("outerHTML")+" </span> ");0<a(c).children("em").length&&(d+=' <span class="filesize">'+a(c).children("em").html()+"</span> ");return' <dd class="'+l+'" data-sort-index="'+e+'"> '+d+" </dd> "}catch(f){console.assert(!1,"Err: "+f.message+" in merge_result.js")}}function w(c){const e=/[\uff08\u3014\uff3b\(\[]\u9023\u7d50[\]\)\uff3d\u3015\uff09]/g,l=/[\uff08\u3014\uff3b\(\[]\u975e\u9023\u7d50[\]\)\uff3d\u3015\uff09]/g,d=/[\uff08\u3014\uff3b\(\[]\u5358\u4f53[\]\)\uff3d\u3015\uff09]/g,f=/[\uff08\u3014\uff3b\(\[]\u65e5\u672c\u57fa\u6e96[\]\)\uff3d\u3015\uff09]/g,m=/[\uff08\u3014\uff3b\(\[]\u7c73\u56fd\u57fa\u6e96[\]\)\uff3d\u3015\uff09]/g,r=/[\uff08\u3014\uff3b\(\[]\uff29\uff26\uff32\uff33[\]\)\uff3d\u3015\uff09]/g,b=/[\uff08\u3014\uff3b\(\[]IFRS[\]\)\uff3d\u3015\uff09]/g;try{return c=c.replace(e,""),c=c.replace(l,""),c=c.replace(d,""),c=c.replace(f,""),c=c.replace(m,""),c=c.replace(r,""),c=c.replace(b,"")}catch(g){console.assert(!1,"Err: "+g.message+" in merge_result.js")}}function x(c,e){try{var l="";a(c).find(e).find("dl").each(function(){var d=a(this).find("dt").text().trim(),f=0;if(0<=d.indexOf("\u5e74"))if(0<=d.indexOf("\u6708\u671f")){var m=d.substr(0,d.indexOf("\u5e74"));f=n(d.substr(0,d.indexOf("\u5e74")).match(/(\d*)/));m=m.substr(0,m.indexOf(""+f));var r=d.match(/\u5e74.*\u6708\u671f/)+(d.match(/\(\u7b2c\d*\u671f\)/)||"")}else m=d.substr(0,d.indexOf("\u5e74")),f=n(d.substr(0,d.indexOf("\u5e74")).match(/(\d*)/)),m=m.substr(0,m.indexOf(""+f)),r="\u5e74\u5ea6"+(d.match(/\(\u7b2c\d*\u671f\)/)||""),--f;else if(0<=d.indexOf("FY"))f=n(d.match(/FY(\d\d\d\d)/)[1]),m="FY",r="";else if(d.match(/fiscal year/i)){if(f=n(d.match(/fiscal year.*(\d\d\d\d)/i)[1]),m="Fiscal year ",r="",0==f)return}else d.match(/year end/i)&&(f=n(d.match(/year end.*\s(\d\d\d\d)/i)[1]),m=d.match(/(year end.*)\s\d\d\d\d/i)[1],r="");0>f||l==""+f||(l=""+f,a(this).before('<h2 data-year="'+l+'">'+m+f+r+"</h2>"))});a(c).find(e).children("h2").each(function(){a(this).nextUntil("h2").wrapAll('<div class="group_year" />')})}catch(d){console.assert(!1,"Err: "+d.message+" in merge_result.js")}}function u(c,e,l){try{a(c).find(e).each(function(){if(!(0<a(this).closest(".merged_list").length)){var d=a(this).closest(".multiColumn1, .multiColumn2, .multiColumn3, .multiColumn4, .multiColumn5");if(0!=a(d).length){if(a(d).prev().hasClass("merged_list"))var f=a(d).prev();else a(d).before('<div class="multiColumn1 merged_list"> <div class="column1"> </div> </div>'),f=a(d).prev(),a(f).find(".column1").append(a(d).find(e)),a(f).addClass(a(d).attr("class")),a(f).removeClass("multiColumn2 multiColumn3 multiColumn4 multiColumn5"),a(d).addClass("processed");var m=!1;0<a(d).closest(".ux_omit_result_modifier").length&&(m=!0);x(f,e);var r=q(a(f).find(e).find("dl").find("dt").text().trim());a(f).find(e).find("dl").each(function(){var b=a(this).find("dt").text().trim();r!=q(b)&&(b=b.replace(/(year\s*end)ing/ig,"$1ed"),a(this).find("dt").text(b),a(this).find("dd").each(function(){var g=a(this).html();g=g.replace(/(year\s*end)ing/ig,"$1ed");a(this).html(g)}))});a(d).find(".link-list").each(function(){var b=a(this).find("h2").text().trim();a(this).find(".internal-link-text, .external-link-text, .download-link-text, .text-without-link").each(function(){var g=a(this),h=0;h=t(a(this).find("a:not(.d_icon), span").text().trim());h-=5;a(f).find(e).find("dl").each(function(){var k=a(this).find("dt"),p=a(this).find("dt").text().trim();q(p)==q(b)&&(a(this).find("dd").each(function(){var B=t(a(this).find("a:not(.d_icon)").text().trim());h<=B&&(k=a(this))}),p=v(g,h,l),a(k).after(p))})});a(f).find(e).find("dl").each(function(){var g=a(this).find("dt").text().trim();q(g)==q(b)&&(a(this).find("dt").text(b),g!=b&&a(this).find("dt").attr("data-original",g))});a(this).remove()});a(f).find(e).find("dd").each(function(){var b=a(this).html();b=b.replace(/[\uff08\u3014\uff3b\(\[]delayed[\]\)\uff3d\u3015\uff09]/ig,"");m&&(b=w(b));a(this).html(b)});0<a(d).find("[data-custom-sort-list]").length&&(a(d).find("[data-custom-sort-list]").each(function(){try{var b=Hjson.parse(a(this).attr("data-custom-sort-list").replace(/'/g,'"'));b=b.filter(function(h){return!!h[0]});for(var g=0;g<b.length;g++)b[g][1]=n(b[g][1])}catch(h){console.assert(!1,"wrong parameter. skip custom sort."),b=null}b&&a(f).find(e).find("dd").each(function(){for(var h=a(this).text(),k=n(a(this).attr("data-custom-sort")),p=0;p<b.length;p++)0<=h.indexOf(b[p][0])&&(k+=b[p][1]);a(this).attr("data-custom-sort",k)})}),a(f).find(e).find("dl").each(function(){var b=this;a(this).children("dd").sort(function(g,h){return n(a(h).attr("data-custom-sort"))-n(a(g).attr("data-custom-sort"))}).each(function(){a(this).appendTo(b)})}));0>=a(f).find(e).find("dl").length?a(f).addClass("no-news"):a(f).removeClass("no-news")}}})}catch(d){console.assert(!1,"Err: "+d.message+" in merge_result.js")}}function y(c,e,l){try{a(c).find(e).each(function(){if(!(0<a(this).closest(".merged_list").length)){var d=a(this).closest(".multiColumn1, .multiColumn2, .multiColumn3, .multiColumn4, .multiColumn5");if(0!=a(d).length){if(a(d).prev().hasClass("merged_list"))var f=a(d).prev();else a(d).before('<div class="multiColumn1 merged_list merged_material"> <div class="column1"> </div> </div>'),f=a(d).prev(),a(f).find(".column1").append(a(d).find(e)),a(f).addClass(a(d).attr("class")),a(f).removeClass("multiColumn2 multiColumn3 multiColumn4 multiColumn5"),a(d).addClass("processed");var m=!1;0<a(d).closest(".ux_omit_result_modifier").length&&(m=!0);x(f,e);var r=q(a(f).find(e).find("dl").find("dt").text().trim());a(f).find(e).find("dl").each(function(){var b=a(this).find("dt").text().trim();r!=q(b)&&(b=b.replace(/(year\s*end)ing/ig,"$1ed"),a(this).find("dt").text(b),a(this).find("dd").each(function(){var g=a(this).html();g=g.replace(/(year\s*end)ing/ig,"$1ed");a(this).html(g)}))});a(f).find(e).find("dl").each(function(){var b=a(this).find("dt").text().trim();a(this).find("dd").each(function(){var g=a(this).find("a:not(.d_icon)");if(!(0<a(g).find("*").length)){var h=a(g).html();if(0<=h.indexOf("\u56db\u534a\u671f"))h=h.replace(/^(\u7b2c[123\uff11\uff12\uff13\u4e00\u4e8c\u4e09]\u56db\u534a\u671f\s*)/,'<span class="prefix-quarter">$1</span>');else if(h.match(/of\s*(the|)\s*(fiscal|year|FY).*\d\d\d\d/i)){var k=q(b),p=t(h);k='<span class="addition-quarter">'+(10==p?"(1Q/FY"+k+")":20==p?"(2Q/FY"+k+")":30==p?"(3Q/FY"+k+")":"(FY"+k+")")+"</span>";h=h.match(/for\s*(the|)\s*(first\s*(three|six|nine)\s*months|(1st|2nd|3rd|first|second|third)\s*quarter|[123]Q|Q[123])\s*.*\d\d\d\d/i)?h.replace(/(for\s*(the|)\s*(first\s*(three|six|nine)\s*months|(1st|2nd|3rd|first|second|third)\s*quarter|[123]Q|Q[123])\s*.*\d\d\d\d)/i,'<span class="prefix-quarter">$1 </span>'):h.replace(/(of\s*(the|)\s*(fiscal|year|FY).*\d\d\d\d)/i,'<span class="prefix-quarter">$1 </span>');h+=k}a(g).html(h)}})});a(d).find(".link-list").each(function(){var b=a(this).find("h2").text().trim();a(this).find(".internal-link-text, .external-link-text, .download-link-text, .text-without-link").each(function(){var g=a(this);a(f).find(e).find("dl").each(function(){var h=a(this).find("dd").last(),k=a(this).find("dt").text().trim();q(k)==q(b)&&t(k)==t(b)&&(k=t(a(this).find("a:not(.d_icon), span").text().trim()),k=v(g,k,l),a(h).after(k))})});a(f).find(e).find("dl").each(function(){var g=a(this).find("dt").text().trim();q(g)==q(b)&&t(g)==t(b)&&(a(this).find("dt").text(b),g!=b&&a(this).find("dt").attr("data-original",g))});a(this).remove()});a(f).find(e).find("dl").each(function(){var b=a(this).find("dt").text().trim();if(!a(this).find("dt").attr("data-original")&&0<a(this).parent().prevAll("h2").length){var g=a(this).parent().prevAll("h2").first().text().trim();if(0<=b.indexOf(g)){var h=b.substr(0,b.indexOf(g)).trim(),k=b.substr(b.indexOf(g)+g.length).trim();0<h.length&&(h+=" ");0<=b.indexOf("\u5e74")?0==k.length&&(k='<span class="title-q4">\u901a\u671f</span>'):0==k.length?k='<span class="title-q4">4Q</span>':k.match(/^\(.*\)$/)&&(k=k.replace(/^\((.*)\)$/,"$1"));b=h+'<span class="title-quater">'+g+" </span>"+k}a(this).find("dt").html(b)}});a(f).find(e).find("dd").each(function(){var b=a(this).html();b=b.replace(/[\uff08\u3014\uff3b\(\[]delayed[\]\)\uff3d\u3015\uff09]/ig,"");m&&(b=w(b));a(this).html(b)});0<a(d).find("[data-custom-sort-list]").length&&(a(d).find("[data-custom-sort-list]").each(function(){try{var b=Hjson.parse(a(this).attr("data-custom-sort-list").replace(/'/g,'"'));b=b.filter(function(h){return!!h[0]});for(var g=0;g<b.length;g++)b[g][1]=n(b[g][1])}catch(h){console.assert(!1,"wrong parameter. skip custom sort."),b=null}b&&a(f).find(e).find("dd").each(function(){for(var h=a(this).text(),k=n(a(this).attr("data-custom-sort")),p=0;p<b.length;p++)0<=h.indexOf(b[p][0])&&(k+=b[p][1]);a(this).attr("data-custom-sort",k)})}),a(f).find(e).find("dl").each(function(){var b=this;a(this).children("dd").sort(function(g,h){return n(a(h).attr("data-custom-sort"))-n(a(g).attr("data-custom-sort"))}).each(function(){a(this).appendTo(b)})}));0>=a(f).find(e).find("dl").length?a(f).addClass("no-news"):a(f).removeClass("no-news")}}})}catch(d){console.assert(!1,"Err: "+d.message+" in merge_result.js")}}a(z).ready(function(){try{A.isEdit()?(u(".reuse-main-area .ux_merge_result, .reuse-component .ux_merge_result",".news-result","news_result_member"),u(".reuse-main-area .ux_merge_result, .reuse-component .ux_merge_result",".news-yuho","news_result_member"),u(".reuse-main-area .ux_merge_result, .reuse-component .ux_merge_result",".news-presentation","news_presentation_member"),y(".reuse-main-area .ux_merge_result, .reuse-component .ux_merge_result",".news-material","news_latest_member"),a(".reuse-main-area, .reuse-component").find(".ux_merge_result .processed").remove(),a(".reuse-main-area, .reuse-component").find(".ux_merge_result.processed").remove(),a("#sharewithmain > .ux_merge_result:not(.processed)").addClass("visible"),a("#sharewithmain > .ux_merge_result.visible .comment-in-edit").each(function(){a(this).html('<div class="text-section">'+a(this).html().replace("\x3c!--","").replace("--\x3e","")+"</div>")})):(u(".ux_merge_result",".news-result","news_result_member"),u(".ux_merge_result",".news-yuho","news_result_member"),u(".ux_merge_result",".news-presentation","news_presentation_member"),y(".ux_merge_result",".news-material","news_latest_member"),a(".ux_merge_result .processed").remove(),a(".ux_merge_result.processed").remove())}catch(c){console.assert(!1,"Err: "+c.message+" in merge_result.js")}})})(jQuery,document,window,SHW);
/* tab2.js */
(function(a,f,g){a(f).ready(function(){try{a(".ux_tab_mcol5").each(function(){var b=this,c=a(this).children(".column1").find(".link-list").last();a(c).find("li[class]").eq(0).click(function(){a(c).find("li[class]").removeClass("act");a(this).addClass("act");a(b).children(".column3, .column4, .column5").removeClass("open").addClass("close");a(b).children(".column2").removeClass("close").addClass("open");a(c).trigger("update");return!1});a(c).find("li[class]").eq(1).click(function(){a(c).find("li[class]").removeClass("act");a(this).addClass("act");a(b).children(".column2, .column4, .column5").removeClass("open").addClass("close");a(b).children(".column3").removeClass("close").addClass("open");a(c).trigger("update");return!1});a(c).find("li[class]").eq(2).click(function(){a(c).find("li[class]").removeClass("act");a(this).addClass("act");a(b).children(".column2, .column3, .column5").removeClass("open").addClass("close");a(b).children(".column4").removeClass("close").addClass("open");return!1});a(c).find("li[class]").eq(3).click(function(){a(c).find("li[class]").removeClass("act");a(this).addClass("act");a(b).children(".column2, .column3, .column4").removeClass("open").addClass("close");a(b).children(".column5").removeClass("close").addClass("open");a(c).trigger("update");return!1});a(c).find("li[class]").removeClass("act");a(c).find("li[class]").eq(0).addClass("act");a(b).children(".column3, .column4, .column5").removeClass("open").addClass("close");a(b).children(".column2").removeClass("close").addClass("open")})}catch(b){console.log("Err: "+b.message+" in tab.js")}try{var f=!0!==g.magnoliaFrontendData.isEdit?a("body"):a(".reuse-main-area, .reuse-component");a(f).find(".ux_tab_next_mcol").each(function(){var b=a(this).children(".column1").find(".link-list").last().find("li[class]"),c=a(b).length,d=a(this).nextAll(".multiColumn1, .multiColumn2, .multiColumn3, .multiColumn4, .multiColumn5").slice(0,c);a(b).addClass("ux_tab_select");a(d).addClass("ux_tab_content");a(b).each(function(){a(this).click(function(){a(b).removeClass("act");a(d).removeClass("open").addClass("close");a(this).addClass("act");for(var e=0;e<c;e++)a(b).eq(e).is(this)&&a(d).eq(e).removeClass("close").addClass("open");a(this).parent().parent().trigger("update");return!1})});a(d).removeClass("open").addClass("close");a(b).removeClass("act");a(d).eq(0).removeClass("close").addClass("open");a(b).eq(0).addClass("act")})}catch(b){console.log("Err: "+b.message+" in tab.js")}})})(jQuery,document,window);
/* graph-customize2.js */
$(document).ready( function() {
	window.setTimeout( function() {
        // 驟榊ｽ馴≡繧ｰ繝ｩ繝輔�繝��繧ｿ繝ｩ繝吶Ν縺後ぞ繝ｭ縺ｪ繧蛾撼陦ｨ遉ｺ
		try {
			$('.haitou-graph-2nd').find('g.highcharts-data-labels > g').each( function() {
				var _t = $(this).find('text tspan');
				if(_t.length == 1) {
					if(_t.text() === '0') {
						$(this).css('display', 'none');
					}
				}
			});
			$('.haitou-graph-2nd').find('div.highcharts-data-labels > div').each( function() {
				var _t = $(this).find('span');
				if(_t.length == 1) {
					if(_t.text() === '0') {
						$(this).css('display', 'none');
					}
				}
			});
		} catch(e) {
			console.log("Err: "+ e.message +" in graph-customize.js");
		}
	}, 10);
});
/* modal-customize2.js */
$(document).ready( function() {
	try {
        if( typeof $.fn.modaal != "undefined" ) {
            // YouTube 繝｢繝ｼ繝繝ｫ繝繧､繧｢繝ｭ繧ｰ
            $('a[href*="//www.youtube.com/embed/"]').each( function() {
                $(this).attr('target','_movie');
                $(this).modaal({type:"video"});
            });
            $('a[href*="//youtu.be/embed/"]').each( function() {
                $(this).attr('target','_movie');
                $(this).modaal({type:"video"});
            });

            // J繧ｹ繝医Μ繝ｼ繝��� 繝｢繝ｼ繝繝ｫ繝繧､繧｢繝ｭ繧ｰ
            $('a[href*="//api01-platform.stream.co.jp/apiservice/"]').each( function() {
                $(this).attr('target','_movie');
                $(this).modaal({type:"video"});
            });

            // mp4 (html險倩ｿｰ) 繝｢繝ｼ繝繝ｫ繝繧､繧｢繝ｭ繧ｰ
            $('a[target="movie"]').each( function() {
                $(this).attr('target','_movie');
                $(this).modaal({
                    type:"video"
//                    ,after_open: function() { $('.modaal-wrapper.modaal-video video').play(); }
//                    ,after_open: function() { $('video', $('.modaal-video iframe')[0].contentWindow.document ).play(); }
                });
            });

        }

	} catch(e) {
		console.log("Err: "+ e.message +" in modal-customize.js");
	}
});
/* slick-customize5a.js */

// 繝槭Ν繝√き繝ｩ繝�蜊倅ｽ阪〒縺ｮ繧ｹ繝ｩ繧､繝峨�蛟句挨縺ｮ隱ｭ縺ｿ霎ｼ縺ｿ繝壹�繧ｸ縺ｫ險倩ｿｰ縲�

// 繝槭Ν繝�ｼ謎ｸ隕ｧ�医し繝�繝阪う繝ｫ莉倥″��
// 繧ｿ繧､繝ｫ蝙九ル繝･繝ｼ繧ｹ縲∵ｨｪ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
(function($, document, window){
	$(document).ready( function() {
            $('.ux_slick_multi3_tile').each( function() {
                var eSlideFrame = this;

                $(eSlideFrame).find('.basic-list2').find('ul.tabItems').after('<div class="arrow-dots"></div>');
                var eSlide = $(this).find('.basic-list2').find('ul.tabItems').slick({
                    autoplay: true,
                    infinite: true,
                    autoplaySpeed: 5000,
                    speed: 2000,
                    vertical: false,
                    verticalSwiping: false,
                    fade: false,
                    arrows: true,
                    dots: true,
                    appendDots: $(eSlideFrame).find('.arrow-dots'),
                    appendArrows: $(eSlideFrame).find('.arrow-dots'),
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    waitForAnimate: false,
                    focusOnSelect: false,
                    pauseOnHover: false,
                    responsive: [
                      {
                        breakpoint: 768,
                        settings: {
                          slidesToShow: 1
                        }
                      }
                    ]
                });
                $(eSlideFrame).find('.basic-list2 ul.tabItems .item').matchHeight({byRow: false});

                window.setTimeout( function() {
                    $(eSlideFrame).addClass('ready');
//                    $(eSlide).slick('slickGoTo', -1, true).slick('slickGoTo', 0, true);
                }, 10);
            });
	});
})(jQuery, document, window);


// 繝槭Ν繝�ｼ謎ｸ隕ｧ�医し繝�繝阪う繝ｫ縺ｪ縺暦ｼ�
// 繝九Η繝ｼ繧ｹ繝�ぅ繝�き繝ｼ 邵ｦ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
(function($, document, window){
	$(document).ready( function() {
            $('.ux_slick_multi3_ticker').each( function() {
                var eSlideFrame = this;

                $(eSlideFrame).find('.basic-list2').find('ul.tabItems').after('<div class="arrow-dots"></div>');
                var eSlide = $(this).find('.basic-list2').find('ul.tabItems').slick({
                    autoplay: true,
                    infinite: true,
                    autoplaySpeed: 4000,
                    speed: 1000,
                    vertical: true,
                    fade: false,
                    arrows: true,
                    dots: true,
                    appendDots: $(eSlideFrame).find('.arrow-dots'),
                    appendArrows: $(eSlideFrame).find('.arrow-dots'),
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    waitForAnimate: false,
                    focusOnSelect: false,
                    pauseOnHover: false
                });
                $(eSlideFrame).find('.basic-list2 ul.tabItems .item').matchHeight({byRow: false});

                window.setTimeout( function() {
                    $(eSlideFrame).addClass('ready');
//                    $(eSlide).slick('slickGoTo', -1, true).slick('slickGoTo', 0, true);
                }, 10);
            });
	});
})(jQuery, document, window);

/* dialog-outer-link.js */
(function($, document, window) {
	$(document).ready( function() {
        if( $('.ux_modal_outer_link').length >0 ) {
            $('#site-info .ux_modal_outer_link').children('div').children('.reuse-main-area').attr('id', 'ux_modal_outer_link_box');
            $('#ux_modal_outer_link_box').wrap('<div />');
            $('#ux_modal_outer_link_box').parent().attr('id', 'ux_outer_link');
            
            var txtConfirm = $('#ux_modal_outer_link_box .external-teaser.no-img a').text();
            var txtCancel = $('#ux_modal_outer_link_box .teaser.no-img a').text();
            $('#ux_modal_outer_link_box .external-teaser.no-img').remove();
            $('#ux_modal_outer_link_box .teaser.no-img').remove();
            var htmlDialogBox = $('#ux_modal_outer_link').html();
            $('#ux_modal_outer_link').remove();
            
            $('a[href]').each( function() {
                var strHref = $(this).attr('href');
                if( $(this).parents('.ux_modal_outer_link').length >0) return;
                var strStieName;
                if( $(this).find('img').length >0 ) {
                	strStieName =$(this).find('img').first().attr('alt').trim();
                }
                if(!strStieName) {
                	strStieName =$(this).text().trim();
                }

                if( (strHref.indexOf('//') > 0)
                 && (strHref.indexOf('https://ssl.swcms.net') != 0)
                 && (strHref.indexOf('http://file.swcms.net') != 0)
                 && (strHref.indexOf('https://file.swcms.net') != 0)
                 && (strHref.indexOf('http://mother.swcms.net') != 0)
                 && (strHref.indexOf('https://www.share-with.info') != 0) ) {
                    $(this).addClass('outer-site');
                    $(this).modaal({
                        type:'confirm',
                        custom_class: 'dialog-outer-link',
                        confirm_content: htmlDialogBox,
                        confirm_title: '',
                        confirm_button_text: txtConfirm,
                        confirm_cancel_button_text: txtCancel,
                        confirm_callback : function() { window.open(strHref , '_blank'); },
                        after_open: function() {
                            $('#ux_modal_outer_link_box .text-section.highlight').append('<p><a href="'+ strHref +'" target="_blank">'+ strHref +'</a></p>');
                            if(!!strStieName) {$('#ux_modal_outer_link_box .text-section.highlight em').text(' '+ strStieName +' ');} 
                        }
                    });
                }
            });
        }
	});
})(jQuery, document, window);

/* search-dialog.js */
$(document).ready( function() {
	try {
        // 讀懃ｴ｢box 髢�
        $('#dialog_search .close_btn').click( function() {
            $('#dialog_search').removeClass('open');
        });

        // 讀懃ｴ｢box 髢�
		$('.ux_search_btn').find('.search_btn, .text-section.highlight').click( function() {
            $('#dialog_search').addClass('open');
            window.setTimeout( function() {
                $('#dialog_search input[type="text"]').focus();
            }, 100);
		});
	} catch(e) {
		console.log("Err: "+ e.message +" in search-dialog.js");
	}
});
/* gnav8.js */
(function($, document, window){
	$(document).ready(function(){
		try {
			// 繧ｳ繝ｳ繝代け繝医�繝�ム繝ｼ
			if( $('#header').length >0 ) {
				var fixedFlag = false;
				var float_header = function(){
					var float_line = $('#wrapper-3').offset().top;
					var $h_area = $('#site-info .ax_header.on-pc > div, #site-info .on-sp .hx_panel, #panel2-btn')
					if(fixedFlag === false && $(window).scrollTop() >= float_line) {
						$('#header').addClass('float');
						$h_area.stop(true,true).velocity({
							'translateY': '-100%',
							'opacity': 0.1
						}, 0).velocity({
							'translateY': 0,
							'opacity': 1
						}, 300, 'easeOutExpo');
						fixedFlag = true;
					} else if ( fixedFlag === true && $(window).scrollTop() < float_line) {
						// $('#header').removeClass('float');
						fixedFlag = false;
						$h_area.stop(true,true).velocity({
							'translateY': '-100%',
							'opacity': 0.1
						}, 200, 'easeOutQuart', function(){
							$h_area.attr('style', '');
							$('#header').removeClass('float');
						});
					}
				};

				float_header();
				$(window).bind('scroll resize', function(e){
					float_header();
				});
			}
		} catch(e) {
			console.log("Err: "+ e.message +" in gnav.js");
		}

		try {
			// 荳ｻ縺ｫ繝｡繧ｬ繝峨Ο繝��逕ｨ

			// 繧ｵ繧､繝医�繝��縺九ｉ驥崎､�Μ繝ｳ繧ｯ繧貞炎髯､
			$('.ux_uniq_indexmap').each( function() {
				var eDropMenu = this;
				$(eDropMenu).find('.link-list, .teaser, .internal-link-area').find('a').each( function() {
					var txCustomLink = $(this).attr('href').replace(/\?.*/,"").replace(/\#.*/,"");
					$(eDropMenu).find('.index-map .item a').each( function() {
						var txLink = $(this).attr('href').replace(/\?.*/,"").replace(/\#.*/,"");
						if( txCustomLink == txLink ) {
							$(this).parent().parent('li').remove();
						}
					});
				});
			});

			// 謚倥ｊ霑斐＠
			$('.ux_fold_indexmap').each( function() {
				var eDropMenu = this;
				if( $(eDropMenu).hasClass('fold4') ) {
					$(eDropMenu).find('.index-map .indexLevel_1').each( function() {
//console.log( "ul a =" +$(this).find('a').first().text() );
						var nLiItemLeft = $(this).children('li').length;
						var nLiItemRight;

						var eAfter3 = $(this).clone();
						var eAfter2 = $(this).clone();
						var eAfter1 = $(this).clone();

						nLiItemRight = Math.floor(nLiItemLeft / 4);
						nLiItemLeft -= Math.floor(nLiItemLeft / 4);
//console.log( "nLi =" +nLiItemLeft );
						$(eAfter3).children('li').filter(':lt(' +nLiItemLeft+ ')').remove();

						nLiItemRight = Math.floor(nLiItemLeft / 3);
						nLiItemLeft -= Math.floor(nLiItemLeft / 3);
//console.log( "nLi =" +nLiItemLeft );
						$(eAfter2).children('li').filter(':lt(' +nLiItemLeft+ ')').remove();
						$(eAfter2).children('li').filter(':gt(' +(nLiItemRight-1)+ ')').remove();

						nLiItemRight = Math.floor(nLiItemLeft / 2);
						nLiItemLeft -= Math.floor(nLiItemLeft / 2);
//console.log( "nLi =" +nLiItemLeft );
						$(eAfter1).children('li').filter(':lt(' +nLiItemLeft+ ')').remove();
						$(eAfter1).children('li').filter(':gt(' +(nLiItemRight-1)+ ')').remove();

						$(eAfter3).insertAfter($(this));
						$(eAfter2).insertAfter($(this));
						$(eAfter1).insertAfter($(this));

						$(this).children('li').filter(':gt(' +(nLiItemLeft-1)+ ')').remove();
					});
				} else
				if( $(eDropMenu).hasClass('fold3') ) {
					$(eDropMenu).find('.index-map .indexLevel_1').each( function() {
//console.log( "ul a =" +$(this).find('a').first().text() );
						var nLiItemLeft = $(this).children('li').length;
						var nLiItemRight;

						var eAfter2 = $(this).clone();
						var eAfter1 = $(this).clone();

						nLiItemRight = Math.floor(nLiItemLeft / 3);
						nLiItemLeft -= Math.floor(nLiItemLeft / 3);
//console.log( "nLi =" +nLiItemLeft );
						$(eAfter2).children('li').filter(':lt(' +nLiItemLeft+ ')').remove();
						$(eAfter2).children('li').filter(':gt(' +(nLiItemRight-1)+ ')').remove();

						nLiItemRight = Math.floor(nLiItemLeft / 2);
						nLiItemLeft -= Math.floor(nLiItemLeft / 2);
//console.log( "nLi =" +nLiItemLeft );
						$(eAfter1).children('li').filter(':lt(' +nLiItemLeft+ ')').remove();
						$(eAfter1).children('li').filter(':gt(' +(nLiItemRight-1)+ ')').remove();

						$(eAfter2).insertAfter($(this));
						$(eAfter1).insertAfter($(this));

						$(this).children('li').filter(':gt(' +(nLiItemLeft-1)+ ')').remove();
					});
				} else {
					$(eDropMenu).find('.index-map .indexLevel_1').each( function() {
//console.log( "ul a =" +$(this).find('a').first().text() );
						var nLiItem = $(this).children('li').length;
						nLiItem -= Math.floor(nLiItem / 2);
						var eAfterHalf = $(this).clone();

//console.log( "nLi =" +nLiItem );
						$(this).children('li').filter(':lt(' +nLiItem+ ')').remove();
						$(eAfterHalf).children('li').filter(':gt(' +(nLiItem-1)+ ')').remove();
						$(eAfterHalf).insertBefore($(this));
					});
				}
			});

			// 謾ｹ陦後ｒwrap
			$('.ux_wrap_indexmap_br').each( function() {
				$(this).find('br').each( function() {
					$(this).wrap('<span class="br">');
				});
			});
		} catch(e) {
			console.log("Err: "+ e.message +" in gnav.js");
		}

		try {
			/* 迴ｾ繝壹�繧ｸ */
			var strUrl = $(location).attr('pathname').replace(/\.html.*/,"").replace(/[\;\?\#].*/,"");

			/* SP 繝｡繝九Η繝ｼ 3way繝翫ン 繧､繝ｳ繝�ャ繧ｯ繧ｹ繧ｵ繧､繝医�繝��繝代�繝�畑 */
			$('.ux_navi_3way').each( function() {
				var eMenu = this;
				var eGnav = $(this).find('.hx_gnavi');

				$(eGnav).find('.index-map').find('.date, .c_icon, .n_icon').remove();

				/* 隨ｬ0髫主ｱ､繧置nwrap縺励※縲∵ｧ矩�繧堤ｵｱ荳縺吶ｋ */
				$(eGnav).find('.index-map ul.indexLevel_0').each( function() {
					$(this).find('.item').insertBefore( $(this) );
				});
				$(eGnav).find('.index-map ul.indexLevel_0').remove();

				/* 蜷�ヵ繧ｩ繝ｫ繝縺ｫ縲。ACK縺ｨ縲√ヵ繧ｩ繝ｫ繝繝医ャ繝励ｒ霑ｽ蜉� */
				$(eGnav).find('.index-map ul').each( function() {
					// 繝輔か繝ｫ繝繝医ャ繝�
					$(this).prev('.item').clone().addClass('gn-folder-top').prependTo( $(this) );
					// 荳企嚴螻､縺ｸ(BACK)
					$(this).prepend('<div class="gn-back item"><span>BACK</span></div>');
					// 荳矩嚴螻､縺ｸ(繝輔か繝ｫ繝繧ｪ繝ｼ繝励Φ)
					$(this).prev('.item').addClass('gn-to-folder');
				});

				/* 荳矩嚴螻､縺ｸ縺ｮ遘ｻ蜍輔ｒ險ｭ螳� */
				$(eGnav).find('.index-map ul').prev('.item').each( function() {
					$(this).click( function() {
						// 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ菴咲ｽｮ繧呈綾縺励※縺翫￥
						$(eGnav).find('.index-map ul').each( function() {
							if($(this).scrollTop() != 0) {
								$(this).animate({scrollTop: 0}, 500);
							}
						});
						// 蜈ｨ繝輔か繝ｫ繝繧帝哩縺倥ｋ
						$(eGnav).find('.index-map ul').removeClass('open').removeClass('active');
						// 閾ｪ霄ｫ縺ｮ蜈ｨ縺ｦ縺ｮ荳企嚴螻､繧帝幕迥ｶ諷九↓
						$(this).parents('ul').addClass('open');
						// 遘ｻ蜍募�繝輔か繝ｫ繝繧帝幕縺�※縲√い繧ｯ繝�ぅ繝悶↓險ｭ螳�
						$(this).next('ul').addClass('open').addClass('active');

						return false;
					});
				});

				/* 荳企嚴螻､縺ｸ縺ｮ遘ｻ蜍輔ｒ險ｭ螳� */
				$(eGnav).find('.index-map ul > .gn-back').each( function() {
					$(this).click( function() {
						// 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ菴咲ｽｮ繧呈綾縺励※縺翫￥
						$(eGnav).find('.index-map ul').each( function() {
							if($(this).scrollTop() != 0) {
								$(this).animate({scrollTop: 0}, 500);
							}
						});
						// 蜈ｨ繝輔か繝ｫ繝繧帝哩縺倥ｋ
						$(eGnav).find('.index-map ul').removeClass('open').removeClass('active');
						// 閾ｪ霄ｫ縺ｮ繝輔か繝ｫ繝繧貞性縺ｾ縺ｪ縺��縺ｦ縺ｮ荳企嚴螻､繧帝幕迥ｶ諷九↓
						$(this).parent().parents('ul').addClass('open');
						// 遘ｻ蜍募�繝輔か繝ｫ繝繧偵い繧ｯ繝�ぅ繝悶↓險ｭ螳�
						$(this).parent().parent().parent('ul').addClass('active');
					});
				});
			});
		} catch(e) {
			console.log("Err: "+ e.message +" in gnav.js");
		}

	});
})(jQuery, document, window);

/* snav2.js */
(function($, document, window){
	$(document).ready(function(){
		try {
			/* 迴ｾ繝壹�繧ｸ */
			var strUrl = $(location).attr('pathname').replace(/\.html.*/,"").replace(/[\;\?\#].*/,"");

			/* 繝ｭ繝ｼ繧ｫ繝ｫ繝翫ン謾ｯ謠ｴ */
			$('#nav-box li').each( function() {
				if( $(this).find('ul').length <=0) {
					$(this).addClass('no-children');
				}
			});

            /* 迴ｾ蝨ｨ繝壹�繧ｸ遒ｺ隱� */
			if( $('#nav-box .on').length >0 ) {
			    /* 迴ｾ蝨ｨ繝壹�繧ｸ(on)縺後リ繝薙↓縺ゅｋ蝣ｴ蜷医｛n繧貞渕貅悶→縺励※險ｭ螳� */
    			$('#nav-box .on').parent().parent().addClass('within');
				if( $('#nav-box .on ul').length <=0 ) {
					$('#nav-box').addClass('on-leaf');
				}
			} else {
			    /* 迴ｾ蝨ｨ繝壹�繧ｸ(on)縺後リ繝薙↓辟｡縺��ｴ蜷医√Μ繝ｳ繧ｯ縺九ｉ蛻､螳� */
                $('#nav-box a[href]').each( function() {
    				var strHref = $(this).attr('href');
					strHref = strHref.replace(/\.html.*/,"").replace(/\?.*/,"").replace(/\#.*/,"");
					if(strUrl.indexOf(strHref +'/') >=0) {
						$(this).parent('li').addClass('within_temp');
					}
				});

				$('#nav-box li.within_temp').last().addClass('within');
				$('#nav-box li.within_temp').removeClass('within_temp');

				if($('#nav-box li.within').length <= 0) {
					$('#nav-box').addClass('stray');
				}
			}

		} catch(e) {
			console.log("Err: "+ e.message +" in snav.js");
		}
	});
})(jQuery, document, window);

/* effect4.js */
$(function() {
	$(document).ready(function(){
		window.setTimeout(function(){
			try {
				var bFade = false;

				// 繝槭Ν繝√き繝ｩ繝�蜊倅ｽ�
				if( $('body[data-page-marker~="effect-fade-obj1"]').length > 0) {
				    bFade = true;
					$("#sharewithmain > div").addClass('fadeObjX');
				}

				// 繧ｫ繝ｩ繝�蜊倅ｽ�
				if( $('body[data-page-marker~="effect-fade-obj2"]').length > 0) {
				    bFade = true;
					$("#sharewithmain > div > div").addClass('fadeObjX');
				}

				// 繝代�繝�腰菴�
				if( $('body[data-page-marker~="effect-fade-obj3"]').length > 0) {
				    bFade = true;
					$("#sharewithmain > div > div > div").addClass('fadeObjX');
				}

				if( bFade ) {
					// 繧ｵ繝悶ヱ繝ｼ繝�腰菴阪↓螟画峩
					$('.ux_effect_subparts > *> .link-list > ul > li').addClass('fadeObjX');
					$('.ux_effect_subparts > *> .link-list-url > ul > li').addClass('fadeObjX');
					$('.ux_effect_subparts > *> *> *> .vtable-item').addClass('fadeObjX');
					$('.ux_effect_subparts > *> *> *> .ircalendar-title').addClass('fadeObjX');
					$('.ux_effect_subparts > *> *> *> .ircalendar-item').addClass('fadeObjX');

					// 繝槭Ν繝�ｼ偵い繧､繝�Β蜊倅ｽ阪↓螟画峩
					$('.ux_effect_multi2_item .basic-list ul.tabItems > li').addClass('fadeObjX');
					$('.ux_effect_multi2_item .basic-list').find('.yearTabs, .tabs').addClass('fadeObjX');

					// 繝槭Ν繝�ｼ薙い繧､繝�Β蜊倅ｽ阪↓螟画峩
					$('.ux_effect_multi3_item .basic-list2 .item').addClass('fadeObjX');
					$('.ux_effect_multi2_item .basic-list2').find('.yearTabs, .tabs').addClass('fadeObjX');

					// 繝代�繝�腰菴阪↓螟画峩
					$('.ux_effect_parts > *> *> div:not(script)').addClass('fadeObjX');

					// 繧ｫ繝ｩ繝�蜊倅ｽ阪↓螟画峩
					// 繝代�繝��繧ｵ繝悶ヱ繝ｼ繝��蟇ｾ雎｡縺ｨ縺励↑縺�
					$('.ux_effect_col * .fadeObjX').removeClass('fadeObjX');
					$('.ux_effect_col > div').addClass('fadeObjX');

					// 繝槭Ν繝√き繝ｩ繝�蜊倅ｽ阪↓螟画峩
					// 繧ｫ繝ｩ繝�繝ｻ繝代�繝��繧ｵ繝悶ヱ繝ｼ繝��蟇ｾ雎｡縺ｨ縺励↑縺�
					$('.ux_effect_mcol .fadeObjX').removeClass('fadeObjX');
					$('.ux_effect_mcol').addClass('fadeObjX');

					// 繧ｨ繝輔ぉ繧ｯ繝亥ｯｾ雎｡縺ｫ縺励↑縺�
					$('.ux_no_fade_effect .fadeObjX').removeClass('fadeObjX');
					$('.ux_no_fade_effect.fadeObjX').removeClass('fadeObjX');

					// 繧ｨ繝輔ぉ繧ｯ繝医が繝悶ず繧ｧ繧ｯ繝医�驥崎､�☆繧句�ｴ蜷医�縲∽ｸ倶ｽ埼嚴螻､蜊倅ｽ阪ｒ蜆ｪ蜈医☆繧�
					$('.fadeObjX').each( function() {
						$(this).parents('fadeObjX').removeClass('fadeObjX');
					});

					// 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ譎ゅ�繧ｨ繝輔ぉ繧ｯ繝亥�逅�
					$(window).on("resize scroll", function() {
						try {
							var hWin = $(window).height();
							var yWin = $(window).scrollTop();
							var h4Win = Math.floor(hWin/4);

							$('.fadeObjX').each( function() {
								var hObj = $(this).height();
								var yObj = $(this).offset().top;
								var h2Obj = Math.floor(hObj/2);
								var areaObj = h2Obj;
								if(hObj*4 > hWin) { areaObj = Math.floor(hWin/8); }

								var y1Obj = yObj + h2Obj - areaObj;
								var y2Obj = yObj + h2Obj + areaObj;

//  							if(yObj+hObj < yWin || yWin+hWin < yObj) {
//  								$(this).removeClass('visible');
//  							}
//  							if(y2Obj >= yWin && yWin+hWin >= y1Obj && yWin+hWin >= y2Obj && y1Obj >= yWin) 
								if(yWin+hWin-h4Win >= yObj) {
									$(this).addClass('visible');
								}
							});
						} catch(e) {
							console.log("Err: "+ e.message +" in effect.js");
						}
					});
				}

			} catch(e) {
				console.log("Err: "+ e.message +" in effect.js");
			}
		}, 10);
	});

	$(window).on("load", function() {
		window.setTimeout( function() {
			try {
				if( ($('body[data-page-marker~="effect-fade-obj"]').length > 0)
				 || ($('body[data-page-marker~="effect-fade-obj2"]').length > 0)
				 || ($('body[data-page-marker~="effect-fade-obj3"]').length > 0) ) {
					$(window).trigger("scroll");
				}
			} catch(e) {
				console.log("Err: "+ e.message +" in effect.js");
			}
		}, 100);
	});

	$(window).bind("load resize", function() {
		window.setTimeout( function() {
			try {
				if( ($('body[data-page-marker~="effect-fade-obj"]').length > 0)
				 || ($('body[data-page-marker~="effect-fade-obj2"]').length > 0)
				 || ($('body[data-page-marker~="effect-fade-obj3"]').length > 0) ) {
					var efadeObjX = $('.fadeObjX');

					// 邵ｦ譁ｹ蜷台ｽ咲ｽｮ縺悟酔縺倥が繝悶ず繧ｧ繧ｯ繝医�縲√お繝輔ぉ繧ｯ繝医ち繧､繝溘Φ繧ｰ繧偵★繧峨☆縺溘ａ縺ｮ繧ｯ繝ｩ繧ｹ蜷堺ｻ倅ｸ�
					if( $(efadeObjX).length >1 ) {
						for(i=0; i<10; i++) {
							$(efadeObjX).removeClass('fadeObjX' +i);
						}

						// 蜷�ｺｧ讓吶ｒ邂怜�縲∽ｸ�1bit蛻�ｊ謐ｨ縺ｦ
						var arObj = [];
						$(efadeObjX).each( function(index) {
							arObj.push({
								x: Math.floor( $(this).offset().left ),
								y: Math.floor( $(this).offset().top / 2) *2,
								n: index
							});
						});

						// 繧ｨ繝輔ぉ繧ｯ繝医が繝悶ず繧ｧ繧ｯ繝医ｒ蠎ｧ讓咎��↓繧ｽ繝ｼ繝�
						arObj.sort( function(a, b) {
							return( (a.y == b.y)?(a.y > b.y):(a.x > b.x) );
						});

						// 蜷後Λ繧､繝ｳ繧貞ｷｦ縺九ｉ繧ｯ繝ｩ繧ｹ蜷堺ｻ倅ｸ�
						var nSame = 0;
						var x = 0;
						for(i=0; i<arObj.length; i++) {
							if( x != arObj[i].y ) {
								nSame = 0;
								x = arObj[i].y;
							}
							if( ++nSame > 9 ) {
								nSame = 9;
							}
							$(efadeObjX).eq( arObj[i].n ).addClass('fadeObjX' +nSame);
						}
					}
				}
			} catch(e) {
				console.log("Err: "+ e.message +" in effect.js");
			}
		}, 100);
	});
});

/* result-customize.js */
$(document).ready( function() {
    window.setTimeout( function() {
        try {
            $('.ux_accordion_result').find('.news-result, .news-yuho ,.news-presentation, .news-material').each( function() {
                // 蟷ｴ豈弱↓繧｢繧ｳ繝ｼ繝�ぅ繧ｪ繝ｳ蛹�
				if($(this).closest('.ux_accordion_always_open').length >0) {
				} else {
                    // 繧｢繧ｳ繝ｼ繝�ぅ繧ｪ繝ｳ莉倅ｸ�
                    $(this).children('h2').addClass('close');
                    $(this).children('h2').eq(0).addClass('open').removeClass('close');
                    $(this).children('h2.open').next('.group_year').show();
                    $(this).children('h2.close').next('.group_year').hide();

                    // 繧｢繧ｳ繝ｼ繝�ぅ繧ｪ繝ｳ 髢矩哩
                    $(this).children('h2').click( function() {
                        if( $(this).hasClass('open') ) {
                            $(this).removeClass('open').addClass('close');
                            $(this).next('.group_year').slideUp();
                        } else {
                            $(this).removeClass('close').addClass('open');
                            $(this).next('.group_year').slideDown();
                        }
                    });
				}
            });

        } catch(e) {
            console.log("Err: "+ e.message +" in result-customize.js");
        }
    }, 20);
});
/* multi3child1c.js */
$(document).ready( function() {
	try {
		// 繝槭Ν繝�ｼ薙ル繝･繝ｼ繧ｹ蟄舌�繝ｼ繧ｸ
		if( $('body.multi3[data-page-marker~="news-folder"]').length > 0 || $('body[data-page-marker~="news-folder"][data-page-path^="/ja/ir"]').length > 0 || $('body[data-page-marker~="news-folder"][data-page-path^="/en/ir"]').length > 0 || $('body[data-page-marker~="news-folder"][data-page-path^="/ja/sustainability"]').length > 0 || $('body[data-page-marker~="news-folder"][data-page-path^="/en/sustainability"]').length > 0 ) {
			if( $('#page-intro .h0').length <=0 ) {
				// 繝九Η繝ｼ繧ｹ繝輔か繝ｫ繝繧ｿ繧､繝医Ν莉倅ｸ�
				var txNewsFolder = "繝九Η繝ｼ繧ｹ";
				if( $('*[data-news-folder-title]').length >0 ) {
					txNewsFolder = $('*[data-news-folder-title]').attr('data-news-folder-title');
				}
				$('#page-intro > h1, .page-intro > h1').before('<div class="h0">' +txNewsFolder+ '</div>' );
			}

			window.setTimeout( function() {
				try {
					if( $('#page-intro .category-icon').length <=0 && $('body[data-page-marker~="news-folder"][data-page-path^="/ja/ir"]').length < 1 && $('body[data-page-marker~="news-folder"][data-page-path^="/en/ir"]').length < 1 && $('body[data-page-marker~="news-folder"][data-page-path^="/ja/sustainability"]').length < 1 && $('body[data-page-marker~="news-folder"][data-page-path^="/en/sustainability"]').length < 1 ) {
						// 繧ｫ繝�ざ繝ｪ繧｢繧､繧ｳ繝ｳ霑ｽ蜉�
                        $('#page-intro, .page-intro').find('.text-meta').before('<div class="category-icon"></div>');
						var astrCategory = $('body').attr('data-category').split(' ');

						$('.basic-list2 .tabs').first().find('span').each( function() {
							var eUl = $(this).parent().parent('ul[data-category-level]');
							if( $(eUl).length >0 ) {
								$(this).attr('data-category-level', $(eUl).attr('data-category-level') );
							}
						});

						$.each( astrCategory, function( i, v ) {
							if( v ) {
								$('.basic-list2 .tabs').first().find('span.' +v).clone().appendTo('#page-intro .category-icon, .page-intro .category-icon');
							}
						});
						$('#page-intro, .page-intro').find('.category-icon span').each( function() {
							$(this).removeAttr('hidden').attr('aria-hidden','false');
							$(this).text( ''+$(this).attr('alt') );
						});
					}

				} catch(e) {
					console.log("Err: "+ e.message +" in multi3child.js");
				}
			}, 20); // 荳蠢彡hangeTabBasic.js蜃ｦ逅�ｾ�■
		}

	} catch(e) {
		console.log("Err: "+ e.message +" in multi3child.js");
	}
});
/* dup-page-intro5x.js */
$(document).ready(function(){function c(a){var d=$(a).attr("id");$(a).addClass(d);$(a).removeAttr("id")}try{if(!(0<$("#page-intro.cloned").length)){0>=$(".page-intro-wrapper").length&&$("#wrapper-2").before('<div class="page-intro-wrapper"></div>');var b=$("#page-intro").clone();$("#page-intro").addClass("cloned");c(b);$(b).find("*[id]").each(function(){c(this)});$(b).each(function(){$(this).find('h1[style*="display:none"],h1[style*="display: none"]').remove();0<$(this).find("h1").length&&($(this).find("h1").wrap('<div class="h1" />'),$(this).find(".h1").html($(this).find("h1").html()))});$(".page-intro-wrapper .page-intro").remove();$(".page-intro-wrapper").append(b);0>=$(".page-intro-wrapper .page-intro >.h1").length&&$(".page-intro-wrapper").addClass("no-title-text");0>=$(".page-intro-wrapper").find(".page-intro >.h1, .page-intro .titleImage").length?$(".page-intro-wrapper").addClass("no-title"):0<$(".page-intro-wrapper .page-intro >.h1").length?$(".page-intro-wrapper").addClass("no-img"):0<$(".page-intro-wrapper .page-intro .titleImage").length&&$(".page-intro-wrapper").addClass("has-img");0<=$(location).attr("search").indexOf("mgnlPreview=false")&&($(".page-intro-wrapper").addClass("in-editor"),$("#page-intro").addClass("in-editor"))}}catch(a){console.debug("Err: "+a.message+" in dup-page-intro.js")}});
/* toggle-fileicon-pos3a.js */
$(document).ready( function() {
	try {
		// 豎ｺ邂礼洒菫｡繝ｻ譛我ｾ｡險ｼ蛻ｸ蝣ｱ蜻頑嶌縺ｮPDF繧｢繧､繧ｳ繝ｳ繧堤ｧｻ蜍包ｼ亥ｼｷ蛻ｶ逧�↓蠕後ｍ��
		$('.news-result, .news-yuho').find('dl dd').each( function() {
			if( $(this).children('.d_icon.pdf_front').length >0 ) {
				$(this).children('a:not(.d_icon), span:not(.d_icon):not(.filesize)').after( $(this).find('.d_icon.pdf_front') );
				$(this).children('.d_icon.pdf_front').removeClass('pdf_front').addClass('pdf_rear');
				$(this).children('.d_icon.pdf_rear').before(" ");
/*
			} else if( $(this).children('.d_icon.pdf_rear').length >0 ) {
				$(this).children('a:not(.d_icon), span:not(.d_icon):not(.filesize)').before( $(this).find('.d_icon.pdf_rear') );
				$(this).children('.d_icon.pdf_rear').removeClass('pdf_rear').addClass('pdf_front');
				$(this).children('.d_icon.pdf_front').after(" ");
*/
			}
		});

		// 隱ｬ譏惹ｼ夊ｳ�侭繝ｻ譛譁ｰ豎ｺ邂苓ｳ�侭縺ｮPDF繧｢繧､繧ｳ繝ｳ繧堤ｧｻ蜍包ｼ亥燕竊絶�蠕後ｍ��
		$('.news-presentation, .news-material').find('dl dd').each( function() {
			if( $(this).children('.d_icon.pdf_front').length >0 ) {
				$(this).children('a:not(.d_icon), span:not(.d_icon):not(.filesize)').after( $(this).find('.d_icon.pdf_front') );
				$(this).children('.d_icon.pdf_front').removeClass('pdf_front').addClass('pdf_rear');
				$(this).children('.d_icon.pdf_rear').before(" ");
			} else if( $(this).children('.d_icon.pdf_rear').length >0 ) {
				$(this).children('a:not(.d_icon), span:not(.d_icon):not(.filesize)').before( $(this).find('.d_icon.pdf_rear') );
				$(this).children('.d_icon.pdf_rear').removeClass('pdf_rear').addClass('pdf_front');
				$(this).children('.d_icon.pdf_front').after(" ");
			}
		});

		// 繝ｪ繝ｳ繧ｯ繝ｪ繧ｹ繝医�繝輔ぃ繧､繝ｫ繧｢繧､繧ｳ繝ｳ繧堤ｧｻ蜍包ｼ亥燕竊絶�蠕後ｍ��
		$('.link-list, .link-list-url').find('li.download-link-text, li.download-link-url').each( function() {
			if( $(this).children('a.d_icon.front').length >0 ) {
				$(this).children('a:not(.d_icon), span:not(.d_icon)').after( $(this).find('.d_icon.front') );
				$(this).children('.d_icon.front').removeClass('front').addClass('rear');
				$(this).children('.d_icon.rear').before(" ");
			} else if( $(this).find('a.d_icon.rear').length >0 ) {
				$(this).children('a:not(.d_icon), span:not(.d_icon)').before( $(this).find('.d_icon.rear') );
				$(this).children('.d_icon.rear').removeClass('rear').addClass('front');
				$(this).children('.d_icon.front').after(" ");
			} else if( $(this).children('img:first-child').length >0 ) {
				$(this).children('a:not(.d_icon), span:not(.d_icon)').after( $(this).children('img:first-child') );
				$(this).children('img').before(" ");
			} else if( $(this).find('a:not(.d_icon) + img, span:not(.d_icon) + img').length >0 ) {
				$(this).children('a:not(.d_icon), span:not(.d_icon)').before( $(this).find('a:not(.d_icon) + img, span:not(.d_icon) + img') );
				$(this).children('img').after(" ");
			}
		});

	} catch(e) {
		console.log("Err: "+ e.message +" in toggle-fileicon-pos.js");
	}
});

/* accordion4.js */
$(document).ready( function() {
	try {
		if( window.magnoliaFrontendData.isEdit !== true ) {
			/* 蜈ｨ驛ｨ髢九�髢峨�繧ｿ繝ｳ縺ｫ迥ｶ諷九ｒ蜿肴丐縺吶ｋ */
			var check_all_open = function() {
				if( $('.ux_accordion.close').length > 0 ) {
					$('.ux_accordion_btn_set').removeClass('close').addClass('open');
				} else {
					$('.ux_accordion_btn_set').removeClass('open').addClass('close');
				}
			};

			/* 髢矩哩 */
			var acc_open = function(eAcc, bImidiate) {
				eAcc.removeClass('close');
				eAcc.addClass('open');
				if( bImidiate ) {
					eAcc.children('.column2, .column3, .column4, .column5').show();
				} else {
					eAcc.children('.column2, .column3, .column4, .column5').slideDown();
				}
			};

			var acc_close = function(eAcc, bImidiate) {
				eAcc.removeClass('open');
				eAcc.addClass('close');
				if( bImidiate ) {
					eAcc.children('.column2, .column3, .column4, .column5').hide();
				} else {
					eAcc.children('.column2, .column3, .column4, .column5').slideUp();
				}
			};

            $('.ux_accordion').each( function() {
				// 繝�ヵ繧ｩ繝ｫ繝医が繝ｼ繝励Φ
				if( $(this).closest('.ux_accordion_default_open').length >0 ) {
					acc_open( $(this), true );
				} else {
					$(this).addClass('close');

					if(window.matchMedia('print, screen and (min-width: 768px)').matches) {
						/* PC蟶ｸ譎Ｐr蛻晄悄陦ｨ遉ｺ繝ｼ繝励Φ */
						if( ($(this).closest('.ux_accordion_always_open_pc').length >0)
						 || ($(this).closest('.ux_accordion_default_open_pc').length >0) ) {
							$(this).removeClass('close');
							$(this).addClass('open');
						}
					} else if(window.matchMedia('handheld, only screen and (max-width: 767px)').matches) {
						/* SP蟶ｸ譎Ｐr蛻晄悄陦ｨ遉ｺ繝ｼ繝励Φ */
						if( ($(this).closest('.ux_accordion_always_open_sp').length >0)
						 || ($(this).closest('.ux_accordion_default_open_sp').length >0) ) {
							$(this).removeClass('close');
							$(this).addClass('open');
						}
					}


					if( $(this).hasClass('open') ) {
						acc_open( $(this), true );
					} else {
						acc_close( $(this), true );
					}
				}

				// 繧｢繧ｳ繝ｼ繝�ぅ繧ｪ繝ｳ 髢矩哩
				$(this).children('.column1').click( function() {
					/* PC蟶ｸ譎ゅが繝ｼ繝励Φ */
					if($(this).closest('.ux_accordion_always_open_pc').length >0) {
						if(window.matchMedia('print, screen and (min-width: 768px)').matches) {
							return;
						}
					}

					/* SP蟶ｸ譎ゅが繝ｼ繝励Φ */
					if($(this).closest('.ux_accordion_always_open_sp').length >0) {
						if(window.matchMedia('handheld, only screen and (max-width: 767px)').matches) {
							return;
						}
					}

					if( $(this).parent().hasClass('open') ) {
						acc_close( $(this).parent(), false );
					} else {
						acc_open( $(this).parent(), false );
					}

					check_all_open();
				});
			});

			// 蜈ｨ縺ｦ縺ｮ繧｢繧ｳ繝ｼ繝�ぅ繧ｪ繝ｳ繧帝幕縺代ｋ
			$('.ux_accordion_btn_all_open, .ux_accordion_btn_set > .column1').click( function() {
				$('.ux_accordion').each( function() {
					acc_open( $(this), false );
				});

				check_all_open();
			});

			// 蜈ｨ縺ｦ縺ｮ繧｢繧ｳ繝ｼ繝�ぅ繧ｪ繝ｳ繧帝哩縺倥ｋ
			$('.ux_accordion_btn_all_close, .ux_accordion_btn_set > .column2').click( function() {
				$('.ux_accordion').each( function() {
					acc_close( $(this), false );
				});

				check_all_open();
			});

			/* 譛蛻昴�繧｢繧ｳ繝ｼ繝�ぅ繧ｪ繝ｳ繧帝幕迥ｶ諷九↓ */
			$('body[data-page-marker~="first-accordion-open"]').each( function() {
				acc_open( $('.ux_accordion').first(), false );
			});

			check_all_open();

			$(window).on("resize", function() {
				try {
					$('.ux_accordion').each( function() {
						/* PC蟶ｸ譎ゅが繝ｼ繝励Φ */
						if($(this).closest('.ux_accordion_always_open_pc').length >0) {
							if(window.matchMedia('print, screen and (min-width: 768px)').matches) {
								acc_open( $(this), true );
							}
						}

						/* SP蟶ｸ譎ゅが繝ｼ繝励Φ */
						if($(this).closest('.ux_accordion_always_open_sp').length >0) {
							if(window.matchMedia('handheld, only screen and (max-width: 767px)').matches) {
								acc_open( $(this), true );
							}
						}
					});

					check_all_open();
				} catch(e) {
					console.log("Err: "+ e.message +" in accordion.js");
				}
			});

		}

	} catch(e) {
		console.log("Err: "+ e.message +" in accordion.js");
	}
});

/* ajax_load5_custom.js */
(function($, document, window){
	$(document).ready( function() {
		try {
			// ---- core code ----
			if( SHW.isEdit() ) {
				var loadAjax = function(eSrc, aParam, fPre, fPost) {
					$(eSrc).find('.link-list-url').addClass('in-editor');
				};
			} else {
				var nAjax = 0;

				var relabelId = function(eTarget, strPostfix) {
					// ID驥崎､�ｒ驕ｿ縺代ｋ縺溘ａ縺ｫID螟画峩
					var id = $(eTarget).attr('id');
					id = id +strPostfix;
					$(eTarget).attr('id', id);

					$(eTarget).find('[id]').each( function() {
						var id = $(this).attr('id');
						id = id +strPostfix;
						$(this).attr('id', id);
					});
				};

				var parseParam = function(eSetting, aParam) {
					if( typeof(aParam) == 'undefined' ) {
						aParam = {};
					}

					$(eSetting).find('li.text-without-link > span').each( function() {
						var strParam = $(this).text().trim();
						if( strParam != '' ) {
							aParam = $.extend(true, aParam, Hjson.parse(strParam));
						}
					});

					return(aParam);
				};

				var loadAjax = function(eSrc, aParam, fPre, fPost) {
					if( $(eSrc).filter(':visible').length <=0 ) {
						// 髱櫁｡ｨ遉ｺ縺ｮ蝣ｴ蜷医∝炎髯､
						$(eSrc).find('.link-list-url').remove();

					} else {
						$(eSrc).find('.link-list-url').each( function() {
							var eDst = this;
							var strSrc = $(eDst).find('li.internal-link-text > a[href]').first().attr('href');

							$(eDst).addClass('loading');

							aParam = parseParam(eDst, aParam);
							$(eDst).empty();

							window.setTimeout( function() {
								$.get(strSrc).done( function(data) {
									data = data.replace(/<!--.*-->/g,'');
									var eParsed = $($.parseHTML(data)).find('#sharewithmain');

									if( aParam.no_img == true ) {
										$(eParsed).find('img').remove();
									}

									// ID驥崎､�ｒ驕ｿ縺代ｋ縺溘ａ縺ｫID螟画峩
									$(eParsed).each( function() {
										nAjax++;
										relabelId(this, '-ajax' +nAjax );
									});

									// 蜑榊�逅�
									if( typeof(fPre) == 'function' ) {
										fPre( eParsed, aParam );
									}

									// 繝ｩ繝ｳ繝繝�繧ｽ繝ｼ繝�
									if( (aParam.random_sort == true)
									 && (!!aParam.item) ) {
										$(eParsed).each( function() {
											var eItem = $(this).find(aParam.item);
											var nItem = $(eItem).length;

											for(var i=0; i<nItem; i++) {
												var r = Math.floor(Math.random() * nItem);
												$(eItem).eq(i).insertBefore( $(eItem).eq(r) );
											}
										});
									}

									// 莉ｶ謨ｰ蛻ｶ髯�
									if(!!aParam.parts) {
										if(aParam.parts_start > 0) {
											$(eParsed).find(aParam.parts).filter(':lt(' +(aParam.parts_start) +')').remove();
										}
										if(aParam.parts_max > 0) {
											$(eParsed).find(aParam.parts).filter(':gt(' +(aParam.parts_max-1) +')').remove();
										}
									}
									if(!!aParam.item) {
										if(aParam.item_max > 0) {
											$(eParsed).find(aParam.item).filter(':gt(' +(aParam.item_max-1) +')').remove();
										}
									}

                                    // svg繧｢繧､繧ｳ繝ｳ
                                    $(eParsed).find('img[src*="/dam/"][src$="pdfIcon.png"], img[src*="/resources/templating-kit/themes/pop/img/defaulticon/"][src$=".png"]').each( function () {
                                        var txSrc = $(this).attr('src').replace(/\.png/,".svg");
                                        $(this).attr('src', txSrc);
                                    });

									// 險ｭ鄂ｮ
									var nPost = $(eParsed).find(aParam.parts).length;
									$(eDst).after(  $(eParsed).find(aParam.parts) );
									var ePosted = $(eDst).nextAll(aParam.parts).filter(':lt(' +(nPost) +')');
									$(eDst).remove();

									// 蠕悟�逅�
									if( typeof(fPost) == 'function' ) {
										fPost( ePosted, aParam );
									}

									// 騾夂衍
									if( !!aParam.after_trigger ) {
										window.setTimeout( function() {
											try {
												$(window).trigger( aParam.after_trigger );
											} catch(e) {
												console.log("Err: "+ e.message +" in ajax-load.js");
											}
										}, 10);
									}

									$(eSrc).trigger('ajaxload');
								});
							}, 30);

						});
					}
				};
			}

			// ---- 蜷�ｵｷ蜍募ｼ� ----

			// 豎ｺ邂礼洒菫｡繧偵�撼蜷梧悄縺ｧ隱ｭ縺ｿ霎ｼ繧
			$('.ux_ajax_result').each( function() {
				loadAjax(this,
					{
						parts: '.news-result',
						item: 'dl dd'
					},
					function(eParsed) {
						$(eParsed).find('dl').each( function() {
							if( $(this).find('dd').length <= 0 ) {
								$(this).remove();
							}
						});
					});
			});

			// 譛我ｾ｡險ｼ蛻ｸ蝣ｱ蜻頑嶌繧偵�撼蜷梧悄縺ｧ隱ｭ縺ｿ霎ｼ繧
			$('.ux_ajax_yuho').each( function() {
				loadAjax(this,
					{
						parts: '.news-yuho',
						item: 'dl dd'
					},
					function(eParsed) {
						$(eParsed).find('dl').each( function() {
							if( $(this).find('dd').length <= 0 ) {
								$(this).remove();
							}
						});

                		// 豎ｺ邂礼洒菫｡繝ｻ譛我ｾ｡險ｼ蛻ｸ蝣ｱ蜻頑嶌縺ｮPDF繧｢繧､繧ｳ繝ｳ繧堤ｧｻ蜍包ｼ亥ｼｷ蛻ｶ逧�↓蠕後ｍ��
                        $(eParsed).find('dl dd').each( function() {
                			if( $(this).children('.d_icon.pdf_front').length >0 ) {
                				$(this).children('a:not(.d_icon), span:not(.d_icon):not(.filesize)').after( $(this).find('.d_icon.pdf_front') );
                				$(this).children('.d_icon.pdf_front').removeClass('pdf_front').addClass('pdf_rear');
                				$(this).children('.d_icon.pdf_rear').before(" ");
/*
                			} else if( $(this).children('.d_icon.pdf_rear').length >0 ) {
                				$(this).children('a:not(.d_icon), span:not(.d_icon):not(.filesize)').before( $(this).find('.d_icon.pdf_rear') );
                				$(this).children('.d_icon.pdf_rear').removeClass('pdf_rear').addClass('pdf_front');
                				$(this).children('.d_icon.pdf_front').after(" ");
*/
                			}
                		});
					});
			});

			// 豎ｺ邂苓ｳ�侭繧偵�撼蜷梧悄縺ｧ隱ｭ縺ｿ霎ｼ繧
			$('.ux_ajax_material').each( function() {
				loadAjax(this,
					{
						parts: '.news-material',
						item: 'dl'
					},
					function(eParsed) {
						$(eParsed).find('dl').each( function() {
							if( $(this).find('dd').length <= 0 ) {
								$(this).remove();
							}
						});

                        // 隱ｬ譏惹ｼ夊ｳ�侭繝ｻ譛譁ｰ豎ｺ邂苓ｳ�侭縺ｮPDF繧｢繧､繧ｳ繝ｳ繧堤ｧｻ蜍包ｼ亥燕竊絶�蠕後ｍ��
                        $(eParsed).find('dl dd').each( function() {
                			if( $(this).children('.d_icon.pdf_front').length >0 ) {
                				$(this).children('a:not(.d_icon), span:not(.d_icon):not(.filesize)').after( $(this).find('.d_icon.pdf_front') );
                				$(this).children('.d_icon.pdf_front').removeClass('pdf_front').addClass('pdf_rear');
                				$(this).children('.d_icon.pdf_rear').before(" ");
                			} else if( $(this).children('.d_icon.pdf_rear').length >0 ) {
                				$(this).children('a:not(.d_icon), span:not(.d_icon):not(.filesize)').before( $(this).find('.d_icon.pdf_rear') );
                				$(this).children('.d_icon.pdf_rear').removeClass('pdf_rear').addClass('pdf_front');
                				$(this).children('.d_icon.pdf_front').after(" ");
                			}
                		});
					});
			});

			// 繝ｪ繝ｳ繧ｯ繝ｪ繧ｹ繝医ｒ縲�撼蜷梧悄縺ｧ隱ｭ縺ｿ霎ｼ繧
			$('.ux_ajax_list').each( function() {
				loadAjax(this,
					{
						parts: '.link-list',
						item: 'li'
					},
					function(eParsed) {
						$(eParsed).find('.link-list').each( function() {
							if( $(this).find('li').length <= 0 ) {
								$(this).remove();
							}
						});

                		// 繝ｪ繝ｳ繧ｯ繝ｪ繧ｹ繝医�繝輔ぃ繧､繝ｫ繧｢繧､繧ｳ繝ｳ繧堤ｧｻ蜍包ｼ亥燕竊絶�蠕後ｍ��
                		$(eParsed).find('li.download-link-text, li.download-link-url').each( function() {
                			if( $(this).children('a.d_icon.front').length >0 ) {
                				$(this).children('a:not(.d_icon), span:not(.d_icon)').after( $(this).find('.d_icon.front') );
                				$(this).children('.d_icon.front').removeClass('front').addClass('rear');
                				$(this).children('.d_icon.rear').before(" ");
                			} else if( $(this).find('a.d_icon.rear').length >0 ) {
                				$(this).children('a:not(.d_icon), span:not(.d_icon)').before( $(this).find('.d_icon.rear') );
                				$(this).children('.d_icon.rear').removeClass('rear').addClass('front');
                				$(this).children('.d_icon.front').after(" ");
                			} else if( $(this).children('img:first-child').length >0 ) {
                				$(this).children('a:not(.d_icon), span:not(.d_icon)').after( $(this).children('img:first-child') );
                				$(this).children('img').before(" ");
                			} else if( $(this).find('a:not(.d_icon) + img, span:not(.d_icon) + img').length >0 ) {
                				$(this).children('a:not(.d_icon), span:not(.d_icon)').before( $(this).find('a:not(.d_icon) + img, span:not(.d_icon) + img') );
                				$(this).children('img').after(" ");
                			}
                		});
					});
			});

			// 繧ｨ繝ｪ繧｢繝ｪ繝ｳ繧ｯ繧偵�撼蜷梧悄縺ｧ隱ｭ縺ｿ霎ｼ繧
			$('.ux_ajax_arealink').each( function() {
				loadAjax(this,
					{
						parts: '.internal-link-area,.external-link-area,.download-link-area'
					});
			});

			// 隕句�縺揺3繧偵�撼蜷梧悄縺ｧ隱ｭ縺ｿ霎ｼ繧
			$('.ux_ajax_title3').each( function() {
				loadAjax(this,
					{
						parts: '.title3'
					});
			});

			// 繝槭Ν繝�ｼ謎ｸ隕ｧ繧偵�撼蜷梧悄縺ｧ隱ｭ縺ｿ霎ｼ繧
			$('.ux_ajax_multi3').each( function() {
				loadAjax(this,
					{
						parts: '.basic-list2',
						item: '.tabItems > li'
					},function(eParsed, aParam) {
						// 逕ｻ蜒城≦蟒ｶ繝ｭ繝ｼ繝�
						if( aParam.lazy == true ) {
							$(eParsed).find('.tabItems > li').each( function() {
								if( $(this).find('.n_img').length >0 ) {
									$(this).addClass('lazy');
									$(this).find('.n_img').each( function() {
										$(this).html('<!--' + $(this).html() + '-->');
									});
								}
							});
						}

						// 髱櫁｡ｨ遉ｺ迥ｶ諷九〒霑ｽ蜉�縺励※縲∫ｵ槭ｊ霎ｼ縺ｿ蠕後↓蠢�ｦ∝�縺�縺題｡ｨ遉ｺ縺輔ｌ繧�
						$(eParsed).find('.tabItems > li').addClass('hidden');
					},function(ePosted, aParam) {
						$(ePosted).each( function() {
							var eP = this;
							initTabs( $(eP).attr('id') );
							showNewIcon( $(eP).attr('id') );
							if( aParam.lazy == true ) {
								// 逕ｻ蜒城≦蟒ｶ繝ｭ繝ｼ繝�
								$(eP).bind('change', function() {
									$(eP).find('.tabItems > li.lazy').filter(':visible').each( function() {
										$(this).removeClass('lazy');
										$(this).html( $(this).html().replace(/<!--/,'').replace(/-->/,'') );
									});
								});
								$(eP).trigger('update');
							}
						});
					});
			});

			// 繝槭Ν繝�ｼ謎ｸ隕ｧ繧帝撼蜷梧悄縺ｧ隱ｭ縺ｿ霎ｼ繧薙〒縺ｮ繧ｹ繝ｩ繧､繝峨＆縺帙ｋ
			var slide_start = function( id ) {
				if(!id) return;
				var eSlideFrame = $('#' +id);

				$(eSlideFrame).find('ul.tabItems').after('<div class="arrow-dots"></div>');
				var eSlide = $(eSlideFrame).find('ul.tabItems').slick({
					autoplay: false,
					infinite: true,
					autoplaySpeed: 5000,
					speed: 500,
					vertical: false,
					verticalSwiping: false,
					fade: false,
					arrows: true,
					dots: true,
					swipeToSlide: true,
					lazyLoad: 'ondemand',
					appendDots: $(eSlideFrame).find('.arrow-dots'),
					appendArrows: $(eSlideFrame).find('.arrow-dots'),
					slidesToShow: 5,
					slidesToScroll: 1,
					waitForAnimate: false,
					focusOnSelect: false,
					pauseOnHover: false,
					responsive: [
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 2
							}
						}
					]
				});
				$(eSlideFrame).find('ul.tabItems .item').matchHeight({bRow: false});

				window.setTimeout( function() {
					$(eSlideFrame).addClass('ready');
				}, 10);
			};

			$('.ux_ajax_multi3_slide').each( function() {
				loadAjax(this,
					{
						parts: '.basic-list2',
						item: '.tabItems > li'
					},function(eParsed, aParam) {
						$(eParsed).find('.yearTabs, .tabs').remove();
						var astrCategory = $('body').attr('data-category').split(' ');
						var eItem = $(eParsed).find('.tabItems > li');

						// 蜷御ｸ繧ｫ繝�ざ繝ｪ縺後≠繧九ｂ縺ｮ莉･螟悶ｒhidden
						if( aParam.ignore_caegory == false ) {
							$(eItem).addClass('pre-hidden');
							$.each( astrCategory, function( i, v ) {
								if( v ) {
									$('.basic-list2 .tabs').last().find('span.' +v).each( function() {
										var eUl = $(this).parent().parent('ul:not(.categoryLv_1');
										if( $(eUl).length >0 ) {
											$(eItem).filter('.' +v+ 'Elm').removeClass('pre-hidden');
										}
									});
								}
							});
							$(eItem).filter('.pre-hidden').remove();
						}

						// 閾ｪ繝壹�繧ｸ縺ｮ繧｢繧､繝�Β縺ｯhidden
						if( aParam.view_self == false ) {
							$(eParsed).find('.tabItems > li').each( function() {
								var eLink = $(this).find('a[href]');
								if( $(eLink).length >0 ) {
									if( (''+window.location).indexOf( $(eLink).attr('href').replace(/[#\?].*/, '') ) >=0 ) {
										$(this).addClass('pre-hidden');
										return;
									}
								}
							});
							$(eItem).filter('.pre-hidden').remove();
						}

						// 莉ｶ謨ｰ蛻ｶ髯舌�繧ｪ繝励す繝ｧ繝ｳitem_max縺ｧ謖�ｮ�
						// 髱櫁｡ｨ遉ｺ迥ｶ諷九〒霑ｽ蜉�縺励※縲∫ｵ槭ｊ霎ｼ縺ｿ蠕後↓蠢�ｦ∝�縺�縺題｡ｨ遉ｺ縺輔ｌ繧�
						$(eItem).addClass('hidden');
					},function(ePosted) {
						$(ePosted).each( function() {
							var eP = this;
							initTabs( $(eP).attr('id') );
							showNewIcon( $(eP).attr('id') );
							slide_start( $(eP).attr('id') );
						});
					});
			});


		} catch(e) {
			console.log("Err: "+ e.message +" in ajax-load.js");
		}

	});
})(jQuery, document, window);

/* utility.js */
$(document).ready( function() {
    try {
        // 繝励Ο繝｢繧ｹ1縺ｫ逕ｻ蜒上′縺ゅｋ縺句愛螳�
        if( $('#promos1 .text-section img').length >0 ) {
            $('body').attr('data-promos1', 'has-img');
        }

        window.setTimeout( function() {
            objectFitImages( $('.promos img') );
            objectFitImages( $('.text-section.highlight img, .text-section img.pos-4') );
        }, 10);
	} catch(e) {
		console.log("Err: "+ e.message +" in utility.js");
	}

    try {
        // 繧ｯ繝ｪ繝�き繝悶Ν繝槭ャ繝� SP蟇ｾ蠢�
        if( typeof $.fn.rwdImageMaps != "undefined" ) {
            $('img[usemap]').rwdImageMaps();
        }
	} catch(e) {
		console.log("Err: "+ e.message +" in utility.js");
	}

    try {
        // svg繧｢繧､繧ｳ繝ｳ
     $('img[src*="/dam/"][src$="pdfIcon.png"], img[src*="/resources/templating-kit/themes/pop/img/defaulticon/"][src$=".png"]').each( function () {
         var txSrc = $(this).attr('src').replace(/\.png/,".svg");
         $(this).attr('src', txSrc);
     });

	} catch(e) {
		console.log("Err: "+ e.message +" in assist.js");
	}

	try {
        // IR繧ｫ繝ｬ繝ｳ繝繝ｼ type03 隕�
        $('.ux_wrap_inner_table .shwTable .tbCore td:not(:empty)').wrapInner('<p />');

	} catch(e) {
		console.log("Err: "+ e.message +" in utility.js");
	}

    try {
        // 鬮倥＆蜷医ｏ縺�
        $('.ux_match_col_height').children('.column1:not(.empty),.column2:not(.empty),.column3:not(.empty),.column4:not(.empty),.column5:not(.empty)').matchHeight();
        $('.ux_match_text_height').find('.text-section').matchHeight();
        $('.ux_match_teaser_height').find('.teaser, .external-teaser, .download-teaser').matchHeight();
        $('.ux_match_teaser_text_height').find('.teaser, .external-teaser, .download-teaser').find('h2 a').matchHeight();
        $('.ux_match_arealink_height').find('.internal-link-area > a, .external-link-area > a, .download-link-area > a').matchHeight();
        $('.ux_match_list_text_height').find('.link-list').find('li > a, li > span').matchHeight();

	    // 鬮倥＆蜷医ｏ縺�
        $('.ux_justify_list_item').find('.link-list li[class]').matchHeight();
        $('.ux_justify_list_link').find('.link-list li[class]').children('a, span').matchHeight();
        $('.ux_justify_teaser_text').find('.teaser h2 a, .external-teaser h2 a, .download-teaser h2 a').matchHeight();
	} catch(e) {
		console.log("Err: "+ e.message +" in utility.js");
	}

});
/* assist.js */
$(document).ready( function() {
    try {
        // 螟也ｪ�
//      $('#nav a[href*="/ja/ir/stock/price.html"]').attr('target','_blank');

	} catch(e) {
		console.log("Err: "+ e.message +" in assist.js");
	}

    try {

  /*==========================
  slideOutAnimation
  ==========================*/
  var defaultAppearanceMargin = 30;
  var appearanceMargin = defaultAppearanceMargin;
  var appearanceTopDistance, appearanceBottomDistance;
  var winH;
  var _target = '#sharewithmain > .multiColumn1:not(.mask-hidden), #sharewithmain > .multiColumn2:not(.mask-hidden), #sharewithmain > .multiColumn3:not(.mask-hidden), #sharewithmain > .multiColumn4:not(.mask-hidden), #sharewithmain > .multiColumn5:not(.mask-hidden) '

//  var target_in_box = $('#sharewithmain > :not(.child-mask)');
//  _target = $(_target).filter(target_in_box);

  var child_in_box = $('#sharewithmain > .child-mask > * > *').children('.multiColumn1, .multiColumn2, .multiColumn3, .multiColumn4, .multiColumn5');
  _target = $(_target).add(child_in_box);


if ( $('#sharewithmain .mgnlEditorBar').length < 1 ) {
  $(_target).append('<div class="js-mask">');
  var innerContW = $('.l-inner-content').width();
  $('.js-scrollout-mask.width-auto .inner').width(innerContW);
}
  var slideOutAnimation = function(_scrollTop){
        if ( $('#sharewithmain .mgnlEditorBar').length < 1 ) {
    winH = $(window).height();
    $(_target).each(function(){
      if(!$(this).hasClass('app-hide') && !$(this).hasClass('app-show')){
        $(this).addClass('app-hide');
      }
      appearanceMargin = defaultAppearanceMargin;
      appearanceTopDistance = $(this).offset().top - _scrollTop;
      appearanceBottomDistance = winH - appearanceTopDistance;

      if($(this).hasClass('app-hide') && (appearanceBottomDistance > appearanceMargin)){
        $(this).removeClass('app-hide');
        $(this).addClass('app-show');
      }
      // else if($(this).hasClass('app-show') && (appearanceBottomDistance < appearanceMargin)) {
      //   $(this).removeClass('app-show');
      //   $(this).addClass('app-hide');
      // }
    });
}
  };


    var _scrollTop = '';
	$(window).on('load', function() {
        _scrollTop = $(this).scrollTop();
        slideOutAnimation(_scrollTop);
	});

	$(window).on('scroll', function() {
        _scrollTop = $(this).scrollTop();
        slideOutAnimation(_scrollTop);

	});

	} catch(e) {
		console.log("Err: "+ e.message +" in assist.js");
	}


    try {
		// 繝槭Ν繝�ｼ薙ル繝･繝ｼ繧ｹ蟄舌�繝ｼ繧ｸ
		if( $('body.form[data-page-marker~="news-folder"]').length >0 || $('body.multi[data-page-marker~="news-folder"]').length >0 ) {
			if( $('#page-intro .h0').length <=0 ) {
				// 繝九Η繝ｼ繧ｹ繝輔か繝ｫ繝繧ｿ繧､繝医Ν莉倅ｸ�
				var txNewsFolder = "繝九Η繝ｼ繧ｹ";
				if( $('*[data-news-folder-title]').length >0 ) {
					txNewsFolder = $('*[data-news-folder-title]').attr('data-news-folder-title');
				}
				$('#page-intro > h1, .page-intro > h1').before('<div class="h0">' +txNewsFolder+ '</div>' );
			}

			window.setTimeout( function() {
				try {
					if( $('#page-intro .category-icon').length <=0 ) {
						// 繧ｫ繝�ざ繝ｪ繧｢繧､繧ｳ繝ｳ霑ｽ蜉�
                        $('#page-intro, .page-intro').find('.text-meta').before('<div class="category-icon"></div>');
						var astrCategory = $('body').attr('data-category').split(' ');

						$('.basic-list2 .tabs').first().find('span').each( function() {
							var eUl = $(this).parent().parent('ul[data-category-level]');
							if( $(eUl).length >0 ) {
								$(this).attr('data-category-level', $(eUl).attr('data-category-level') );
							}
						});

						$.each( astrCategory, function( i, v ) {
							if( v ) {
								$('.basic-list2 .tabs').first().find('span.' +v).clone().appendTo('#page-intro .category-icon, .page-intro .category-icon');
							}
						});
						$('#page-intro, .page-intro').find('.category-icon span').each( function() {
							$(this).removeAttr('hidden').attr('aria-hidden','false');
							$(this).text( ''+$(this).attr('alt') );
						});
					}

				} catch(e) {
					console.log("Err: "+ e.message +" in multi3child.js");
				}
			}, 20); // 荳蠢彡hangeTabBasic.js蜃ｦ逅�ｾ�■
		}

	} catch(e) {
		console.log("Err: "+ e.message +" in multi3child.js");
	}

    try {

		var headerMenu = function() {
			var hm_check = '#panel2-sw';
			var hm_open = 'hm_open';
			var hm_target = '#site-info .on-sp .hx_menu';

	
			$(hm_check).change(function() {
				if ( $(this).is(':checked') == true ) {
					$(hm_target).show();
					$(hm_target).fadeIn( 100, function(){
						$('body').addClass(hm_open);
						$(hm_target).attr('style','');
					});
				} else {
					$(hm_target).show();
					$(hm_target).fadeOut( 100, function(){
						$('body').removeClass(hm_open);
						$(hm_target).attr('style','');
					});
				}
			});

			$(hm_target).find('.hx_gnavi a').click( function() {
				$(hm_target).show();
				$(hm_target).fadeOut( 100, function(){
					$('body').removeClass(hm_open);
					$(hm_target).attr('style','');
					$('#panel2-sw').prop('checked', false);
				});
			});
		};

		$(window).on('load', function(){
			headerMenu();
		});


	} catch(e) {
		console.log("Err: "+ e.message +" in assist.js");
	}

});

window.onpageshow = function(event) {
	if (event.persisted) {
		$('#panel2-sw').prop('checked', false);
		$('#panel2-sw').removeAttr('checked');
		$('body').removeClass('hm_open');
	}
 };

/*! VelocityJS.org (1.4.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(a){"use strict";function b(a){var b=a.length,d=c.type(a);return"function"!==d&&!c.isWindow(a)&&(!(1!==a.nodeType||!b)||("array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a))}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return a&&a===a.window},c.type=function(a){return a?"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a:a+""},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return void 0===b||f.call(a,b)},c.each=function(a,c,d){var e,f=0,g=a.length,h=b(a);if(d){if(h)for(;f<g&&(e=c.apply(a[f],d),e!==!1);f++);else for(f in a)if(a.hasOwnProperty(f)&&(e=c.apply(a[f],d),e===!1))break}else if(h)for(;f<g&&(e=c.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(a.hasOwnProperty(f)&&(e=c.call(a[f],f,a[f]),e===!1))break;return a},c.data=function(a,b,e){if(void 0===e){var f=a[c.expando],g=f&&d[f];if(void 0===b)return g;if(g&&b in g)return g[b]}else if(void 0!==b){var h=a[c.expando]||(a[c.expando]=++c.uuid);return d[h]=d[h]||{},d[h][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&(b?c.each(b,function(a,b){delete f[b]}):delete d[e])},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);i<j;i++)if(f=arguments[i])for(e in f)f.hasOwnProperty(e)&&(a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):void 0!==d&&(h[e]=d)));return h},c.queue=function(a,d,e){function f(a,c){var d=c||[];return a&&(b(Object(a))?!function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}if(a){d=(d||"fx")+"queue";var g=c.data(a,d);return e?(!g||c.isArray(e)?g=c.data(a,d,f(e)):g.push(e),g):g||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function a(a){for(var b=a.offsetParent;b&&"html"!==b.nodeName.toLowerCase()&&b.style&&"static"===b.style.position;)b=b.offsetParent;return b||document}var b=this[0],d=a(b),e=this.offset(),f=/^(?:body|html)$/i.test(d.nodeName)?{top:0,left:0}:c(d).offset();return e.top-=parseFloat(b.style.marginTop)||0,e.left-=parseFloat(b.style.marginLeft)||0,d.style&&(f.top+=parseFloat(d.style.borderTopWidth)||0,f.left+=parseFloat(d.style.borderLeftWidth)||0),{top:e.top-f.top,left:e.left-f.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){"use strict";return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return t.isWrapped(a)?a=s.call(a):t.isNode(a)&&(a=[a]),a}function g(a){var b=o.data(a,"velocity");return null===b?d:b}function h(a,b){var c=g(a);c&&c.delayTimer&&!c.delayPaused&&(c.delayRemaining=c.delay-b+c.delayBegin,c.delayPaused=!0,clearTimeout(c.delayTimer.setTimeout))}function i(a,b){var c=g(a);c&&c.delayTimer&&c.delayPaused&&(c.delayPaused=!1,c.delayTimer.setTimeout=setTimeout(c.delayTimer.next,c.delayRemaining))}function j(a){return function(b){return Math.round(b*a)*(1/a)}}function k(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;e<p;++e){var f=j(c,a,d);if(0===f)return c;var g=i(c,a,d)-b;c-=g/f}return c}function l(){for(var b=0;b<t;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g;while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!==f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0===i?h:m(b,c,c+u)}function o(){y=!0,a===c&&d===e||l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;w<4;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function l(a,b){var c=a;return t.isString(a)?x.Easings[a]||(c=!1):c=t.isArray(a)&&1===a.length?j.apply(null,a):t.isArray(a)&&2===a.length?y.apply(null,a.concat([b])):!(!t.isArray(a)||4!==a.length)&&k.apply(null,a),c===!1&&(c=x.Easings[x.defaults.easing]?x.defaults.easing:w),c}function m(a){if(a){var b=x.timestamp&&a!==!0?a:r.now(),c=x.State.calls.length;c>1e4&&(x.State.calls=e(x.State.calls),c=x.State.calls.length);for(var f=0;f<c;f++)if(x.State.calls[f]){var h=x.State.calls[f],i=h[0],j=h[2],k=h[3],l=!!k,q=null,s=h[5],u=h[6];if(k||(k=x.State.calls[f][3]=b-16),s){if(s.resume!==!0)continue;k=h[3]=Math.round(b-u-16),h[5]=null}u=h[6]=b-k;for(var v=Math.min(u/j.duration,1),w=0,y=i.length;w<y;w++){var A=i[w],C=A.element;if(g(C)){var D=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var E=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];o.each(E,function(a,b){z.setPropertyValue(C,"display",b)})}z.setPropertyValue(C,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&z.setPropertyValue(C,"visibility",j.visibility);for(var F in A)if(A.hasOwnProperty(F)&&"element"!==F){var G,H=A[F],I=t.isString(H.easing)?x.Easings[H.easing]:H.easing;if(t.isString(H.pattern)){var J=1===v?function(a,b,c){var d=H.endValue[b];return c?Math.round(d):d}:function(a,b,c){var d=H.startValue[b],e=H.endValue[b]-d,f=d+e*I(v,j,e);return c?Math.round(f):f};G=H.pattern.replace(/{(\d+)(!)?}/g,J)}else if(1===v)G=H.endValue;else{var K=H.endValue-H.startValue;G=H.startValue+K*I(v,j,K)}if(!l&&G===H.currentValue)continue;if(H.currentValue=G,"tween"===F)q=G;else{var L;if(z.Hooks.registered[F]){L=z.Hooks.getRoot(F);var M=g(C).rootPropertyValueCache[L];M&&(H.rootPropertyValue=M)}var N=z.setPropertyValue(C,F,H.currentValue+(p<9&&0===parseFloat(G)?"":H.unitType),H.rootPropertyValue,H.scrollData);z.Hooks.registered[F]&&(z.Normalizations.registered[L]?g(C).rootPropertyValueCache[L]=z.Normalizations.registered[L]("extract",null,N[1]):g(C).rootPropertyValueCache[L]=N[1]),"transform"===N[0]&&(D=!0)}}j.mobileHA&&g(C).transformCache.translate3d===d&&(g(C).transformCache.translate3d="(0px, 0px, 0px)",D=!0),D&&z.flushTransformCache(C)}}j.display!==d&&"none"!==j.display&&(x.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(x.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],v,Math.max(0,k+j.duration-b),k,q),1===v&&n(f)}}x.State.isTicking&&B(m)}function n(a,b){if(!x.State.calls[a])return!1;for(var c=x.State.calls[a][0],e=x.State.calls[a][1],f=x.State.calls[a][2],h=x.State.calls[a][4],i=!1,j=0,k=c.length;j<k;j++){var l=c[j].element;b||f.loop||("none"===f.display&&z.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&z.setPropertyValue(l,"visibility",f.visibility));var m=g(l);if(f.loop!==!0&&(o.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(o.queue(l)[1]))&&m){m.isAnimating=!1,m.rootPropertyValueCache={};var n=!1;o.each(z.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=m.transformCache[b];m.transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete m.transformCache[b])}),f.mobileHA&&(n=!0,delete m.transformCache.translate3d),n&&z.flushTransformCache(l),z.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(p){setTimeout(function(){throw p},1)}h&&f.loop!==!0&&h(e),m&&f.loop===!0&&!b&&(o.each(m.tweensContainer,function(a,b){if(/^rotate/.test(a)&&(parseFloat(b.startValue)-parseFloat(b.endValue))%360===0){var c=b.startValue;b.startValue=b.endValue,b.endValue=c}/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),x(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&o.dequeue(l,f.queue)}x.State.calls[a]=!1;for(var q=0,r=x.State.calls.length;q<r;q++)if(x.State.calls[q]!==!1){i=!0;break}i===!1&&(x.State.isTicking=!1,delete x.State.calls,x.State.calls=[])}var o,p=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),q=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),r=function(){var a=b.performance||{};if(!Object.prototype.hasOwnProperty.call(a,"now")){var c=a.timing&&a.timing.domComplete?a.timing.domComplete:(new Date).getTime();a.now=function(){return(new Date).getTime()-c}}return a}(),s=function(){var a=Array.prototype.slice;try{a.call(c.documentElement)}catch(b){a=function(){for(var a=this.length,b=[];--a>0;)b[a]=this[a];return b}}return a}(),t={isNumber:function(a){return"number"==typeof a},isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isWrapped:function(a){return a&&t.isNumber(a.length)&&!t.isString(a)&&!t.isFunction(a)&&!t.isNode(a)&&(0===a.length||t.isNode(a[0]))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}},u=!1;if(a.fn&&a.fn.jquery?(o=a,u=!0):o=b.Velocity.Utilities,p<=8&&!u)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(p<=7)return void(jQuery.fn.velocity=jQuery.fn.animate);var v=400,w="swing",x={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[],delayedElements:{count:0}},CSS:{},Utilities:o,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:v,easing:w,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0,promiseRejectEmpty:!0},init:function(a){o.data(a,"velocity",{isSVG:t.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:4,patch:2},debug:!1,timestamp:!0,pauseAll:function(a){var b=(new Date).getTime();o.each(x.State.calls,function(b,c){if(c){if(a!==d&&(c[2].queue!==a||c[2].queue===!1))return!0;c[5]={resume:!1}}}),o.each(x.State.delayedElements,function(a,c){c&&h(c,b)})},resumeAll:function(a){var b=(new Date).getTime();o.each(x.State.calls,function(b,c){if(c){if(a!==d&&(c[2].queue!==a||c[2].queue===!1))return!0;c[5]&&(c[5].resume=!0)}}),o.each(x.State.delayedElements,function(a,c){c&&i(c,b)})}};b.pageYOffset!==d?(x.State.scrollAnchor=b,x.State.scrollPropertyLeft="pageXOffset",x.State.scrollPropertyTop="pageYOffset"):(x.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,x.State.scrollPropertyLeft="scrollLeft",x.State.scrollPropertyTop="scrollTop");var y=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;;)if(h=c(h||i,g),j.push(1+h.x),k+=16,!(Math.abs(h.x)>l&&Math.abs(h.v)>l))break;return f?function(a){return j[a*(j.length-1)|0]}:k}}();x.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},o.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){x.Easings[b[0]]=k.apply(null,b[1])});var z=x.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"],units:["%","em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","Q","in","pc","pt","px","deg","grad","rad","turn","s","ms"],colorNames:{aliceblue:"240,248,255",antiquewhite:"250,235,215",aquamarine:"127,255,212",aqua:"0,255,255",azure:"240,255,255",beige:"245,245,220",bisque:"255,228,196",black:"0,0,0",blanchedalmond:"255,235,205",blueviolet:"138,43,226",blue:"0,0,255",brown:"165,42,42",burlywood:"222,184,135",cadetblue:"95,158,160",chartreuse:"127,255,0",chocolate:"210,105,30",coral:"255,127,80",cornflowerblue:"100,149,237",cornsilk:"255,248,220",crimson:"220,20,60",cyan:"0,255,255",darkblue:"0,0,139",darkcyan:"0,139,139",darkgoldenrod:"184,134,11",darkgray:"169,169,169",darkgrey:"169,169,169",darkgreen:"0,100,0",darkkhaki:"189,183,107",darkmagenta:"139,0,139",darkolivegreen:"85,107,47",darkorange:"255,140,0",darkorchid:"153,50,204",darkred:"139,0,0",darksalmon:"233,150,122",darkseagreen:"143,188,143",darkslateblue:"72,61,139",darkslategray:"47,79,79",darkturquoise:"0,206,209",darkviolet:"148,0,211",deeppink:"255,20,147",deepskyblue:"0,191,255",dimgray:"105,105,105",dimgrey:"105,105,105",dodgerblue:"30,144,255",firebrick:"178,34,34",floralwhite:"255,250,240",forestgreen:"34,139,34",fuchsia:"255,0,255",gainsboro:"220,220,220",ghostwhite:"248,248,255",gold:"255,215,0",goldenrod:"218,165,32",gray:"128,128,128",grey:"128,128,128",greenyellow:"173,255,47",green:"0,128,0",honeydew:"240,255,240",hotpink:"255,105,180",indianred:"205,92,92",indigo:"75,0,130",ivory:"255,255,240",khaki:"240,230,140",lavenderblush:"255,240,245",lavender:"230,230,250",lawngreen:"124,252,0",lemonchiffon:"255,250,205",lightblue:"173,216,230",lightcoral:"240,128,128",lightcyan:"224,255,255",lightgoldenrodyellow:"250,250,210",lightgray:"211,211,211",lightgrey:"211,211,211",lightgreen:"144,238,144",lightpink:"255,182,193",lightsalmon:"255,160,122",lightseagreen:"32,178,170",lightskyblue:"135,206,250",lightslategray:"119,136,153",lightsteelblue:"176,196,222",lightyellow:"255,255,224",limegreen:"50,205,50",lime:"0,255,0",linen:"250,240,230",magenta:"255,0,255",maroon:"128,0,0",mediumaquamarine:"102,205,170",mediumblue:"0,0,205",mediumorchid:"186,85,211",mediumpurple:"147,112,219",mediumseagreen:"60,179,113",mediumslateblue:"123,104,238",mediumspringgreen:"0,250,154",mediumturquoise:"72,209,204",mediumvioletred:"199,21,133",midnightblue:"25,25,112",mintcream:"245,255,250",mistyrose:"255,228,225",moccasin:"255,228,181",navajowhite:"255,222,173",navy:"0,0,128",oldlace:"253,245,230",olivedrab:"107,142,35",olive:"128,128,0",orangered:"255,69,0",orange:"255,165,0",orchid:"218,112,214",palegoldenrod:"238,232,170",palegreen:"152,251,152",paleturquoise:"175,238,238",palevioletred:"219,112,147",papayawhip:"255,239,213",peachpuff:"255,218,185",peru:"205,133,63",pink:"255,192,203",plum:"221,160,221",powderblue:"176,224,230",purple:"128,0,128",red:"255,0,0",rosybrown:"188,143,143",royalblue:"65,105,225",saddlebrown:"139,69,19",salmon:"250,128,114",sandybrown:"244,164,96",seagreen:"46,139,87",seashell:"255,245,238",sienna:"160,82,45",silver:"192,192,192",skyblue:"135,206,235",slateblue:"106,90,205",slategray:"112,128,144",snow:"255,250,250",springgreen:"0,255,127",steelblue:"70,130,180",tan:"210,180,140",teal:"0,128,128",thistle:"216,191,216",tomato:"255,99,71",turquoise:"64,224,208",violet:"238,130,238",wheat:"245,222,179",whitesmoke:"245,245,245",white:"255,255,255",yellowgreen:"154,205,50",yellow:"255,255,0"}},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<z.Lists.colors.length;a++){var b="color"===z.Lists.colors[a]?"0 0 0 1":"255 255 255 1";z.Hooks.templates[z.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(p)for(c in z.Hooks.templates)if(z.Hooks.templates.hasOwnProperty(c)){d=z.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(z.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),z.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in z.Hooks.templates)if(z.Hooks.templates.hasOwnProperty(c)){d=z.Hooks.templates[c],e=d[0].split(" ");for(var g in e)if(e.hasOwnProperty(g)){var h=c+e[g],i=g;z.Hooks.registered[h]=[c,i]}}},getRoot:function(a){var b=z.Hooks.registered[a];return b?b[0]:a},getUnit:function(a,b){var c=(a.substr(b||0,5).match(/^[a-z%]+/)||[])[0]||"";return c&&z.Lists.units.indexOf(c)>=0?c:""},fixColors:function(a){return a.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g,function(a,b,c){return z.Lists.colorNames.hasOwnProperty(c)?(b?b:"rgba(")+z.Lists.colorNames[c]+(b?"":",1)"):b+c})},cleanRootPropertyValue:function(a,b){return z.RegEx.valueUnwrap.test(b)&&(b=b.match(z.RegEx.valueUnwrap)[1]),z.Values.isCSSNullValue(b)&&(b=z.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=z.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=z.Hooks.cleanRootPropertyValue(d,b),b.toString().match(z.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=z.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=z.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(z.RegEx.valueSplit),e[h]=b,f=e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return z.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(z.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return x.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(p<=8)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){function a(a,b,c){var d="border-box"===z.getPropertyValue(b,"boxSizing").toString().toLowerCase();if(d===(c||!1)){var e,f,g=0,h="width"===a?["Left","Right"]:["Top","Bottom"],i=["padding"+h[0],"padding"+h[1],"border"+h[0]+"Width","border"+h[1]+"Width"];for(e=0;e<i.length;e++)f=parseFloat(z.getPropertyValue(b,i[e])),isNaN(f)||(g+=f);return c?-g:g}return 0}function b(b,c){return function(d,e,f){switch(d){case"name":return b;case"extract":return parseFloat(f)+a(b,e,c);case"inject":return parseFloat(f)-a(b,e,c)+"px"}}}p&&!(p>9)||x.State.isGingerbread||(z.Lists.transformsBase=z.Lists.transformsBase.concat(z.Lists.transforms3D));for(var c=0;c<z.Lists.transformsBase.length;c++)!function(){var a=z.Lists.transformsBase[c];z.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[a]===d?/^scale/i.test(a)?1:0:g(c).transformCache[a].replace(/[()]/g,"");case"inject":var f=!1;switch(a.substr(0,a.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":x.State.isAndroid&&g(c).transformCache[a]===d&&e<1&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[a]="("+e+")"),g(c).transformCache[a]}}}();for(var e=0;e<z.Lists.colors.length;e++)!function(){var a=z.Lists.colors[e];z.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return a;case"extract":var f;if(z.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:z.RegEx.isHex.test(e)?g="rgb("+z.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(z.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return(!p||p>8)&&3===f.split(" ").length&&(f+=" 1"),f;case"inject":return/^rgb/.test(e)?e:(p<=8?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(p<=8?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")")}}}();z.Normalizations.registered.innerWidth=b("width",!0),z.Normalizations.registered.innerHeight=b("height",!0),z.Normalizations.registered.outerWidth=b("width"),z.Normalizations.registered.outerHeight=b("height")}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(p||x.State.isAndroid&&!x.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(x.State.prefixMatches[a])return[x.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;c<d;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),t.isString(x.State.prefixElement.style[e]))return x.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return!a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){if(a)if(a.classList)a.classList.add(b);else if(t.isString(a.className))a.className+=(a.className.length?" ":"")+b;else{var c=a.getAttribute(p<=7?"className":"class")||"";a.setAttribute("class",c+(c?" ":"")+b)}},removeClass:function(a,b){if(a)if(a.classList)a.classList.remove(b);else if(t.isString(a.className))a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ");else{var c=a.getAttribute(p<=7?"className":"class")||"";a.setAttribute("class",c.replace(new RegExp("(^|s)"+b.split(" ").join("|")+"(s|$)","gi")," "))}}},getPropertyValue:function(a,c,e,f){function h(a,c){var e=0;if(p<=8)e=o.css(a,c);else{var i=!1;/^(width|height)$/.test(c)&&0===z.getPropertyValue(a,"display")&&(i=!0,z.setPropertyValue(a,"display",z.Values.getDisplayType(a)));var j=function(){i&&z.setPropertyValue(a,"display","none")};if(!f){if("height"===c&&"border-box"!==z.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(z.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(z.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(z.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(z.getPropertyValue(a,"paddingBottom"))||0);return j(),k}if("width"===c&&"border-box"!==z.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(z.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(z.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(z.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(z.getPropertyValue(a,"paddingRight"))||0);return j(),l}}var m;m=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),e=9===p&&"filter"===c?m.getPropertyValue(c):m[c],""!==e&&null!==e||(e=a.style[c]),j()}if("auto"===e&&/^(top|right|bottom|left)$/i.test(c)){var n=h(a,"position");("fixed"===n||"absolute"===n&&/top|left/i.test(c))&&(e=o(a).position()[c]+"px")}return e}var i;if(z.Hooks.registered[c]){var j=c,k=z.Hooks.getRoot(j);e===d&&(e=z.getPropertyValue(a,z.Names.prefixCheck(k)[0])),z.Normalizations.registered[k]&&(e=z.Normalizations.registered[k]("extract",a,e)),i=z.Hooks.extractValue(j,e)}else if(z.Normalizations.registered[c]){var l,m;l=z.Normalizations.registered[c]("name",a),"transform"!==l&&(m=h(a,z.Names.prefixCheck(l)[0]),z.Values.isCSSNullValue(m)&&z.Hooks.templates[c]&&(m=z.Hooks.templates[c][1])),i=z.Normalizations.registered[c]("extract",a,m)}if(!/^[\d-]/.test(i)){var n=g(a);if(n&&n.isSVG&&z.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(q){i=0}else i=a.getAttribute(c);else i=h(a,z.Names.prefixCheck(c)[0])}return z.Values.isCSSNullValue(i)&&(i=0),x.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(z.Normalizations.registered[c]&&"transform"===z.Normalizations.registered[c]("name",a))z.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(z.Hooks.registered[c]){var i=c,j=z.Hooks.getRoot(c);e=e||z.getPropertyValue(a,j),d=z.Hooks.injectValue(i,d,e),c=j}if(z.Normalizations.registered[c]&&(d=z.Normalizations.registered[c]("inject",a,d),c=z.Normalizations.registered[c]("name",a)),h=z.Names.prefixCheck(c)[0],p<=8)try{a.style[h]=d}catch(k){x.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else{var l=g(a);l&&l.isSVG&&z.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d}x.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){var b="",c=g(a);if((p||x.State.isAndroid&&!x.State.isChrome)&&c&&c.isSVG){var d=function(b){return parseFloat(z.getPropertyValue(a,b))},e={translate:[d("translateX"),d("translateY")],skewX:[d("skewX")],skewY:[d("skewY")],scale:1!==d("scale")?[d("scale"),d("scale")]:[d("scaleX"),d("scaleY")],rotate:[d("rotateZ"),0,0]};o.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),e[a]&&(b+=a+"("+e[a].join(" ")+") ",delete e[a])})}else{var f,h;o.each(g(a).transformCache,function(c){return f=g(a).transformCache[c],"transformPerspective"===c?(h=f,!0):(9===p&&"rotateZ"===c&&(c="rotate"),void(b+=c+f+" "))}),h&&(b="perspective"+h+" "+b)}z.setPropertyValue(a,"transform",b)}};z.Hooks.register(),z.Normalizations.register(),x.hook=function(a,b,c){var e;return a=f(a),o.each(a,function(a,f){if(g(f)===d&&x.init(f),c===d)e===d&&(e=z.getPropertyValue(f,b));else{var h=z.setPropertyValue(f,b,c);"transform"===h[0]&&x.CSS.flushTransformCache(f),e=h}}),e};var A=function(){function a(){return k?y.promise||null:p}function e(a,e){function f(f){var k,n;if(i.begin&&0===C)try{i.begin.call(r,r)}catch(p){setTimeout(function(){throw p},1)}if("scroll"===F){var q,v,w,A=/^x$/i.test(i.axis)?"Left":"Top",D=parseFloat(i.offset)||0;i.container?t.isWrapped(i.container)||t.isNode(i.container)?(i.container=i.container[0]||i.container,q=i.container["scroll"+A],w=q+o(a).position()[A.toLowerCase()]+D):i.container=null:(q=x.State.scrollAnchor[x.State["scrollProperty"+A]],v=x.State.scrollAnchor[x.State["scrollProperty"+("Left"===A?"Top":"Left")]],w=o(a).offset()[A.toLowerCase()]+D),j={scroll:{rootPropertyValue:!1,startValue:q,currentValue:q,endValue:w,unitType:"",easing:i.easing,scrollData:{container:i.container,direction:A,alternateValue:v}},element:a},x.debug&&console.log("tweensContainer (scroll): ",j.scroll,a)}else if("reverse"===F){if(k=g(a),!k)return;if(!k.tweensContainer)return void o.dequeue(a,i.queue);"none"===k.opts.display&&(k.opts.display="auto"),"hidden"===k.opts.visibility&&(k.opts.visibility="visible"),k.opts.loop=!1,k.opts.begin=null,k.opts.complete=null,u.easing||delete i.easing,u.duration||delete i.duration,i=o.extend({},k.opts,i),n=o.extend(!0,{},k?k.tweensContainer:null);for(var E in n)if(n.hasOwnProperty(E)&&"element"!==E){var G=n[E].startValue;n[E].startValue=n[E].currentValue=n[E].endValue,n[E].endValue=G,t.isEmptyObject(u)||(n[E].easing=i.easing),x.debug&&console.log("reverse tweensContainer ("+E+"): "+JSON.stringify(n[E]),a)}j=n}else if("start"===F){k=g(a),k&&k.tweensContainer&&k.isAnimating===!0&&(n=k.tweensContainer);var H=function(b,c){var d,f,g;return t.isFunction(b)&&(b=b.call(a,e,B)),t.isArray(b)?(d=b[0],!t.isArray(b[1])&&/^[\d-]/.test(b[1])||t.isFunction(b[1])||z.RegEx.isHex.test(b[1])?g=b[1]:t.isString(b[1])&&!z.RegEx.isHex.test(b[1])&&x.Easings[b[1]]||t.isArray(b[1])?(f=c?b[1]:l(b[1],i.duration),g=b[2]):g=b[1]||b[2]):d=b,c||(f=f||i.easing),t.isFunction(d)&&(d=d.call(a,e,B)),t.isFunction(g)&&(g=g.call(a,e,B)),[d||0,f,g]},I=function(e,f){var g,l=z.Hooks.getRoot(e),m=!1,p=f[0],q=f[1],r=f[2];
if(!(k&&k.isSVG||"tween"===l||z.Names.prefixCheck(l)[1]!==!1||z.Normalizations.registered[l]!==d))return void(x.debug&&console.log("Skipping ["+l+"] due to a lack of browser support."));(i.display!==d&&null!==i.display&&"none"!==i.display||i.visibility!==d&&"hidden"!==i.visibility)&&/opacity|filter/.test(e)&&!r&&0!==p&&(r=0),i._cacheValues&&n&&n[e]?(r===d&&(r=n[e].endValue+n[e].unitType),m=k.rootPropertyValueCache[l]):z.Hooks.registered[e]?r===d?(m=z.getPropertyValue(a,l),r=z.getPropertyValue(a,e,m)):m=z.Hooks.templates[l][1]:r===d&&(r=z.getPropertyValue(a,e));var s,u,v,w=!1,y=function(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=z.Values.getUnitType(a)),[d,c]};if(r!==p&&t.isString(r)&&t.isString(p)){g="";var A=0,B=0,C=[],D=[],E=0,F=0,G=0;for(r=z.Hooks.fixColors(r),p=z.Hooks.fixColors(p);A<r.length&&B<p.length;){var H=r[A],I=p[B];if(/[\d\.-]/.test(H)&&/[\d\.-]/.test(I)){for(var J=H,K=I,M=".",N=".";++A<r.length;){if(H=r[A],H===M)M="..";else if(!/\d/.test(H))break;J+=H}for(;++B<p.length;){if(I=p[B],I===N)N="..";else if(!/\d/.test(I))break;K+=I}var O=z.Hooks.getUnit(r,A),P=z.Hooks.getUnit(p,B);if(A+=O.length,B+=P.length,O===P)J===K?g+=J+O:(g+="{"+C.length+(F?"!":"")+"}"+O,C.push(parseFloat(J)),D.push(parseFloat(K)));else{var Q=parseFloat(J),R=parseFloat(K);g+=(E<5?"calc":"")+"("+(Q?"{"+C.length+(F?"!":"")+"}":"0")+O+" + "+(R?"{"+(C.length+(Q?1:0))+(F?"!":"")+"}":"0")+P+")",Q&&(C.push(Q),D.push(0)),R&&(C.push(0),D.push(R))}}else{if(H!==I){E=0;break}g+=H,A++,B++,0===E&&"c"===H||1===E&&"a"===H||2===E&&"l"===H||3===E&&"c"===H||E>=4&&"("===H?E++:(E&&E<5||E>=4&&")"===H&&--E<5)&&(E=0),0===F&&"r"===H||1===F&&"g"===H||2===F&&"b"===H||3===F&&"a"===H||F>=3&&"("===H?(3===F&&"a"===H&&(G=1),F++):G&&","===H?++G>3&&(F=G=0):(G&&F<(G?5:4)||F>=(G?4:3)&&")"===H&&--F<(G?5:4))&&(F=G=0)}}A===r.length&&B===p.length||(x.debug&&console.error('Trying to pattern match mis-matched strings ["'+p+'", "'+r+'"]'),g=d),g&&(C.length?(x.debug&&console.log('Pattern found "'+g+'" -> ',C,D,"["+r+","+p+"]"),r=C,p=D,u=v=""):g=d)}g||(s=y(e,r),r=s[0],v=s[1],s=y(e,p),p=s[0].replace(/^([+-\/*])=/,function(a,b){return w=b,""}),u=s[1],r=parseFloat(r)||0,p=parseFloat(p)||0,"%"===u&&(/^(fontSize|lineHeight)$/.test(e)?(p/=100,u="em"):/^scale/.test(e)?(p/=100,u=""):/(Red|Green|Blue)$/i.test(e)&&(p=p/100*255,u="")));var S=function(){var d={myParent:a.parentNode||c.body,position:z.getPropertyValue(a,"position"),fontSize:z.getPropertyValue(a,"fontSize")},e=d.position===L.lastPosition&&d.myParent===L.lastParent,f=d.fontSize===L.lastFontSize;L.lastParent=d.myParent,L.lastPosition=d.position,L.lastFontSize=d.fontSize;var g=100,h={};if(f&&e)h.emToPx=L.lastEmToPx,h.percentToPxWidth=L.lastPercentToPxWidth,h.percentToPxHeight=L.lastPercentToPxHeight;else{var i=k&&k.isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");x.init(i),d.myParent.appendChild(i),o.each(["overflow","overflowX","overflowY"],function(a,b){x.CSS.setPropertyValue(i,b,"hidden")}),x.CSS.setPropertyValue(i,"position",d.position),x.CSS.setPropertyValue(i,"fontSize",d.fontSize),x.CSS.setPropertyValue(i,"boxSizing","content-box"),o.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){x.CSS.setPropertyValue(i,b,g+"%")}),x.CSS.setPropertyValue(i,"paddingLeft",g+"em"),h.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(z.getPropertyValue(i,"width",null,!0))||1)/g,h.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(z.getPropertyValue(i,"height",null,!0))||1)/g,h.emToPx=L.lastEmToPx=(parseFloat(z.getPropertyValue(i,"paddingLeft"))||1)/g,d.myParent.removeChild(i)}return null===L.remToPx&&(L.remToPx=parseFloat(z.getPropertyValue(c.body,"fontSize"))||16),null===L.vwToPx&&(L.vwToPx=parseFloat(b.innerWidth)/100,L.vhToPx=parseFloat(b.innerHeight)/100),h.remToPx=L.remToPx,h.vwToPx=L.vwToPx,h.vhToPx=L.vhToPx,x.debug>=1&&console.log("Unit ratios: "+JSON.stringify(h),a),h};if(/[\/*]/.test(w))u=v;else if(v!==u&&0!==r)if(0===p)u=v;else{h=h||S();var T=/margin|padding|left|right|width|text|word|letter/i.test(e)||/X$/.test(e)||"x"===e?"x":"y";switch(v){case"%":r*="x"===T?h.percentToPxWidth:h.percentToPxHeight;break;case"px":break;default:r*=h[v+"ToPx"]}switch(u){case"%":r*=1/("x"===T?h.percentToPxWidth:h.percentToPxHeight);break;case"px":break;default:r*=1/h[u+"ToPx"]}}switch(w){case"+":p=r+p;break;case"-":p=r-p;break;case"*":p*=r;break;case"/":p=r/p}j[e]={rootPropertyValue:m,startValue:r,currentValue:r,endValue:p,unitType:u,easing:q},g&&(j[e].pattern=g),x.debug&&console.log("tweensContainer ("+e+"): "+JSON.stringify(j[e]),a)};for(var J in s)if(s.hasOwnProperty(J)){var K=z.Names.camelCase(J),N=H(s[J]);if(z.Lists.colors.indexOf(K)>=0){var O=N[0],P=N[1],Q=N[2];if(z.RegEx.isHex.test(O)){for(var R=["Red","Green","Blue"],S=z.Values.hexToRgb(O),T=Q?z.Values.hexToRgb(Q):d,U=0;U<R.length;U++){var V=[S[U]];P&&V.push(P),T!==d&&V.push(T[U]),I(K+R[U],V)}continue}}I(K,N)}j.element=a}j.element&&(z.Values.addClass(a,"velocity-animating"),M.push(j),k=g(a),k&&(""===i.queue&&(k.tweensContainer=j,k.opts=i),k.isAnimating=!0),C===B-1?(x.State.calls.push([M,r,i,null,y.resolver,null,0]),x.State.isTicking===!1&&(x.State.isTicking=!0,m())):C++)}var h,i=o.extend({},x.defaults,u),j={};switch(g(a)===d&&x.init(a),parseFloat(i.delay)&&i.queue!==!1&&o.queue(a,i.queue,function(b){x.velocityQueueEntryFlag=!0;var c=x.State.delayedElements.count++;x.State.delayedElements[c]=a;var d=function(a){return function(){x.State.delayedElements[a]=!1,b()}}(c);g(a).delayBegin=(new Date).getTime(),g(a).delay=parseFloat(i.delay),g(a).delayTimer={setTimeout:setTimeout(b,parseFloat(i.delay)),next:d}}),i.duration.toString().toLowerCase()){case"fast":i.duration=200;break;case"normal":i.duration=v;break;case"slow":i.duration=600;break;default:i.duration=parseFloat(i.duration)||1}if(x.mock!==!1&&(x.mock===!0?i.duration=i.delay=1:(i.duration*=parseFloat(x.mock)||1,i.delay*=parseFloat(x.mock)||1)),i.easing=l(i.easing,i.duration),i.begin&&!t.isFunction(i.begin)&&(i.begin=null),i.progress&&!t.isFunction(i.progress)&&(i.progress=null),i.complete&&!t.isFunction(i.complete)&&(i.complete=null),i.display!==d&&null!==i.display&&(i.display=i.display.toString().toLowerCase(),"auto"===i.display&&(i.display=x.CSS.Values.getDisplayType(a))),i.visibility!==d&&null!==i.visibility&&(i.visibility=i.visibility.toString().toLowerCase()),i.mobileHA=i.mobileHA&&x.State.isMobile&&!x.State.isGingerbread,i.queue===!1)if(i.delay){var k=x.State.delayedElements.count++;x.State.delayedElements[k]=a;var n=function(a){return function(){x.State.delayedElements[a]=!1,f()}}(k);g(a).delayBegin=(new Date).getTime(),g(a).delay=parseFloat(i.delay),g(a).delayTimer={setTimeout:setTimeout(f,parseFloat(i.delay)),next:n}}else f();else o.queue(a,i.queue,function(a,b){return b===!0?(y.promise&&y.resolver(r),!0):(x.velocityQueueEntryFlag=!0,void f(a))});""!==i.queue&&"fx"!==i.queue||"inprogress"===o.queue(a)[0]||o.dequeue(a)}var j,k,p,q,r,s,u,w=arguments[0]&&(arguments[0].p||o.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||t.isString(arguments[0].properties));t.isWrapped(this)?(k=!1,q=0,r=this,p=this):(k=!0,q=1,r=w?arguments[0].elements||arguments[0].e:arguments[0]);var y={promise:null,resolver:null,rejecter:null};if(k&&x.Promise&&(y.promise=new x.Promise(function(a,b){y.resolver=a,y.rejecter=b})),w?(s=arguments[0].properties||arguments[0].p,u=arguments[0].options||arguments[0].o):(s=arguments[q],u=arguments[q+1]),r=f(r),!r)return void(y.promise&&(s&&u&&u.promiseRejectEmpty===!1?y.resolver():y.rejecter()));var B=r.length,C=0;if(!/^(stop|finish|finishAll|pause|resume)$/i.test(s)&&!o.isPlainObject(u)){var D=q+1;u={};for(var E=D;E<arguments.length;E++)t.isArray(arguments[E])||!/^(fast|normal|slow)$/i.test(arguments[E])&&!/^\d/.test(arguments[E])?t.isString(arguments[E])||t.isArray(arguments[E])?u.easing=arguments[E]:t.isFunction(arguments[E])&&(u.complete=arguments[E]):u.duration=arguments[E]}var F;switch(s){case"scroll":F="scroll";break;case"reverse":F="reverse";break;case"pause":var G=(new Date).getTime();return o.each(r,function(a,b){h(b,G)}),o.each(x.State.calls,function(a,b){var c=!1;b&&o.each(b[1],function(a,e){var f=u===d?"":u;return f!==!0&&b[2].queue!==f&&(u!==d||b[2].queue!==!1)||(o.each(r,function(a,d){if(d===e)return b[5]={resume:!1},c=!0,!1}),!c&&void 0)})}),a();case"resume":return o.each(r,function(a,b){i(b,G)}),o.each(x.State.calls,function(a,b){var c=!1;b&&o.each(b[1],function(a,e){var f=u===d?"":u;return f!==!0&&b[2].queue!==f&&(u!==d||b[2].queue!==!1)||(!b[5]||(o.each(r,function(a,d){if(d===e)return b[5].resume=!0,c=!0,!1}),!c&&void 0))})}),a();case"finish":case"finishAll":case"stop":o.each(r,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer),"finishAll"!==s||u!==!0&&!t.isString(u)||(o.each(o.queue(b,t.isString(u)?u:""),function(a,b){t.isFunction(b)&&b()}),o.queue(b,t.isString(u)?u:"",[]))});var H=[];return o.each(x.State.calls,function(a,b){b&&o.each(b[1],function(c,e){var f=u===d?"":u;return f!==!0&&b[2].queue!==f&&(u!==d||b[2].queue!==!1)||void o.each(r,function(c,d){if(d===e)if((u===!0||t.isString(u))&&(o.each(o.queue(d,t.isString(u)?u:""),function(a,b){t.isFunction(b)&&b(null,!0)}),o.queue(d,t.isString(u)?u:"",[])),"stop"===s){var h=g(d);h&&h.tweensContainer&&f!==!1&&o.each(h.tweensContainer,function(a,b){b.endValue=b.currentValue}),H.push(a)}else"finish"!==s&&"finishAll"!==s||(b[2].duration=1)})})}),"stop"===s&&(o.each(H,function(a,b){n(b,!0)}),y.promise&&y.resolver(r)),a();default:if(!o.isPlainObject(s)||t.isEmptyObject(s)){if(t.isString(s)&&x.Redirects[s]){j=o.extend({},u);var I=j.duration,J=j.delay||0;return j.backwards===!0&&(r=o.extend(!0,[],r).reverse()),o.each(r,function(a,b){parseFloat(j.stagger)?j.delay=J+parseFloat(j.stagger)*a:t.isFunction(j.stagger)&&(j.delay=J+j.stagger.call(b,a,B)),j.drag&&(j.duration=parseFloat(I)||(/^(callout|transition)/.test(s)?1e3:v),j.duration=Math.max(j.duration*(j.backwards?1-a/B:(a+1)/B),.75*j.duration,200)),x.Redirects[s].call(b,b,j||{},a,B,r,y.promise?y:d)}),a()}var K="Velocity: First argument ("+s+") was not a property map, a known action, or a registered redirect. Aborting.";return y.promise?y.rejecter(new Error(K)):console.log(K),a()}F="start"}var L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},M=[];o.each(r,function(a,b){t.isNode(b)&&e(b,a)}),j=o.extend({},x.defaults,u),j.loop=parseInt(j.loop,10);var N=2*j.loop-1;if(j.loop)for(var O=0;O<N;O++){var P={delay:j.delay,progress:j.progress};O===N-1&&(P.display=j.display,P.visibility=j.visibility,P.complete=j.complete),A(r,"reverse",P)}return a()};x=o.extend(A,x),x.animate=A;var B=b.requestAnimationFrame||q;if(!x.State.isMobile&&c.hidden!==d){var C=function(){c.hidden?(B=function(a){return setTimeout(function(){a(!0)},16)},m()):B=b.requestAnimationFrame||q};C(),c.addEventListener("visibilitychange",C)}return a.Velocity=x,a!==b&&(a.fn.velocity=A,a.fn.velocity.defaults=x.defaults),o.each(["Down","Up"],function(a,b){x.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=o.extend({},c),j=i.begin,k=i.complete,l={},m={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""};i.display===d&&(i.display="Down"===b?"inline"===x.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){0===e&&j&&j.call(g,g);for(var c in m)if(m.hasOwnProperty(c)){l[c]=a.style[c];var d=z.getPropertyValue(a,c);m[c]="Down"===b?[d,0]:[0,d]}l.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in l)l.hasOwnProperty(b)&&(a.style[b]=l[b]);e===f-1&&(k&&k.call(g,g),h&&h.resolver(g))},x(a,m,i)}}),o.each(["In","Out"],function(a,b){x.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=o.extend({},c),j=i.complete,k={opacity:"In"===b?1:0};0!==e&&(i.begin=null),e!==f-1?i.complete=null:i.complete=function(){j&&j.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),x(this,k,i)}}),x}(window.jQuery||window.Zepto||window,window,window?window.document:void 0)});
(function($){

	var tabsPulldown = function() {
		var tsp_active = 'is-active';
		var targetPc = '.ux_multi3_pulldown_pc';		// 繝槭Ν繝�3縺ｮ縺ｿ
		var targetExclude = '.ux_careers_multi3_tabs';		// 繝槭Ν繝�3縺ｮ縺ｿ

		var tsp_target = '.lx_list_tabstyle01 div.link-list:not(.highlight) ul, .lx_list_tabstyle02 div.link-list:not(.highlight) ul';
			
		$(tsp_target).find('li a, li span').click( function(e) {
			var $this = $(this);
			var $wrap =  $this.closest(tsp_target);
			console.log('test');

			if ( !$wrap.hasClass(tsp_active) ) {
				if( $(window).width() < 768 ) {
					e.preventDefault();
				}
				$wrap.addClass(tsp_active);
			} else {
				$wrap.removeClass(tsp_active);
			}
		});


		var mtp_target = '.basic-list2 .yearTabs ul ,.basic-list2 .tabs ul.categoryLv_2';
		// var mtp_target02 = '.basic-list2 .tabs ul.categoryLv_2';
		var tsp_active = 'is-active';
		
		$(mtp_target).find('li span').click( function(){
			var $this = $(this);
			var $mtp_wrap = $this.closest(mtp_target);

			if( $mtp_wrap.closest(targetExclude).length < 1 ) {
				if ($(window).width() < 768) {

					if( $this.closest(mtp_target).hasClass(tsp_active) ) {
						$mtp_wrap.removeClass(tsp_active);
					} else {
						$(mtp_target).removeClass(tsp_active);
						$mtp_wrap.addClass(tsp_active);
					}
				} else {
					if( $mtp_wrap.closest(targetPc).length > 0 ) {
						var _tabH = $mtp_wrap.parent().height();
						$mtp_wrap.css('height', _tabH);
						setTimeout(function(){
							$mtp_wrap.attr('style','');
						},100);
					}
				}
			}
		});

		$(document).click(function(event) {
			
			if(!$(event.target).closest(mtp_target).length && $(window).width() < 768) {
				$(mtp_target).removeClass(tsp_active);
			}

			if( !$(event.target).closest(tsp_target).length && $(window).width() < 768 ) {
				$(tsp_target).removeClass(tsp_active);
			}
		
		});

	};
	

	$(window).on('load', function(){
		tabsPulldown();
	});


})(jQuery);
(function($){

	var localNaviAnchor = function() {

		var _target = '#promos2 .lx_list_lnav .link-list';
		var _act;
		function navScrollLeft( $item ) {
			var _x = $item.offset().left;
			var _xUl = $item.closest('ul').offset().left;
			$(_target).animate({scrollLeft:(_x - _xUl)},10);
		}
			
		if( $(_target).length > 0 && $(window).width() < 768 ) {
			if( $(_target).find('li.act').length > 0 ) {
				navScrollLeft($(_target).find('li.act'));
			} else if( $(_target).find('li:not(.highlight).within').length > 0 ) {
				navScrollLeft($(_target).find('li:not(.highlight).within'));
			} 
		}

	};


	$(window).on('load', function(){
		localNaviAnchor();
	});


})(jQuery);
(function($){

	var basicListTxt = function() {
	
        var news_txt = '陦ｨ遉ｺ縺吶ｋ鬆�岼縺後≠繧翫∪縺帙ｓ';
        var news_txt_en = 'As of now, nothing new is to be uploaded to this page.';

        var target_en = '.basic-list2.english > ul > p';

		if( $(target_en).length > 0 ) {
		    for (var i = 0; $(target_en).length > i; i++) {
		        var $t = $(target_en).eq(i);
		        if( $t.text() == news_txt ) {
		            $t.text(news_txt_en);
		        }
		    }
		}

	};
	

	$(window).on('load', function(){
		basicListTxt();
	});


})(jQuery);
