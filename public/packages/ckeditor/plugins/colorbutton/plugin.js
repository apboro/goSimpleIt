/*
 Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
(function(){var n,k,l;CKEDITOR.plugins.add("colorbutton",{requires:"panelbutton,floatpanel",lang:"af,ar,az,bg,bn,bs,ca,cs,cy,da,de,de-ch,el,en,en-au,en-ca,en-gb,eo,es,es-mx,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,oc,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,tt,ug,uk,vi,zh,zh-cn",icons:"bgcolor,textcolor",hidpi:!0,init:function(a){function b(d){function b(){var d=a.config["colorButton_"+h+"Style"];d.childRule="back"==h?function(a){return f(a)}:
function(a){return!(a.is("a")||a.getElementsByTag("a").count())||f(a)};return d}function z(d,w,e){var c={};d&&(c.color=d);w&&(c.colorName=w);w=!CKEDITOR.tools.isEmpty(c)&&new CKEDITOR.style(b(),c);a.execCommand(m,{newStyle:w});if(d&&e)for(e.addColor(d.substr(1).toUpperCase()),d=t.element.find("[role\x3doption]").toArray(),e=0;e<d.length;e++)d[e].setAttributes({"aria-posinset":e+1,"aria-setsize":d.length})}var g=d.name,h=d.type,k=d.title,C=d.order,m=d.commandName;d=d.contentTransformations||{};var A=
new CKEDITOR.style(r["colorButton_"+h+"Style"]),q=CKEDITOR.tools.getNextId()+"_colorBox",x={type:h},y=new CKEDITOR.style(r["colorButton_"+h+"Style"],{color:"inherit"}),B=function(){return CKEDITOR.tools.addFunction(function(d,b,e){a.focus();a.fire("saveSnapshot");"?"==d?a.getColorFromDialog(function(a){a&&z(a,b,u)},null,x):z(d&&"#"+d,b,u);e&&(e.setAttribute("cke_colorlast",!0),a.once("selectionChange",function(){e.removeAttribute("cke_colorlast")}))})}(),u=l.getRowLimit(a)?new l(a,"back"==h?"background-color":
"color",B):void 0,t;a.addCommand(m,{contextSensitive:!0,exec:function(a,d){if(!a.readOnly){var b=d.newStyle;a.removeStyle(y);a.focus();b&&a.applyStyle(b);a.fire("saveSnapshot")}},refresh:function(a,d){y.checkApplicable(d,a,a.activeFilter)?y.checkActive(d,a)?this.setState(CKEDITOR.TRISTATE_ON):this.setState(CKEDITOR.TRISTATE_OFF):this.setState(CKEDITOR.TRISTATE_DISABLED)}});a.ui.add(g,CKEDITOR.UI_PANELBUTTON,{label:k,title:k,command:m,editorFocus:0,toolbar:"colors,"+C,allowedContent:A,requiredContent:A,
contentTransformations:d,panel:{css:CKEDITOR.skin.getPath("editor"),attributes:{role:"listbox","aria-label":p.panelTitle}},select:function(a){var d=r.colorButton_colors.split(",");a=CKEDITOR.tools.array.find(d,a);a=n.normalizeColor(a);v(t,a);t._.markFirstDisplayed()},onBlock:function(d,b){t=b;b.autoSize=!0;b.element.addClass("cke_colorblock");b.element.setHtml(c(q,B,u?u.getLength():0));b.element.getDocument().getBody().setStyle("overflow","hidden");b.element.getAscendant({html:1}).setStyle("overflow",
"hidden");CKEDITOR.ui.fire("ready",this);var e=b.keys,h="rtl"==a.lang.dir;e[h?37:39]="next";e[40]="next";e[9]="next";e[h?39:37]="prev";e[38]="prev";e[CKEDITOR.SHIFT+9]="prev";e[32]="click";u&&u.setContainer(b.element.findOne(".cke_colorhistory"))},onOpen:function(){var d=a.getSelection(),b=d&&d.getStartElement(),e=a.elementPath(b),c="back"==h?"background-color":"color";if(e){b=e.block||e.blockLimit||a.document.getBody();do e=b&&b.getComputedStyle(c)||"transparent";while("back"==h&&"transparent"==
e&&b&&(b=b.getParent()));e&&"transparent"!=e||(e="#ffffff");r.colorButton_enableAutomatic&&t.element.findOne("#"+q).setStyle("background-color",e);if(b=d&&d.getRanges()[0]){for(var d=new CKEDITOR.dom.walker(b),g=b.collapsed?b.startContainer:d.next(),b="";g;){g.type!==CKEDITOR.NODE_ELEMENT&&(g=g.getParent());g=n.normalizeColor(g.getComputedStyle(c));b=b||g;if(b!==g){b="";break}g=d.next()}"transparent"==b&&(b="");"fore"==h&&(x.automaticTextColor="#"+n.normalizeColor(e));x.selectionColor=b?"#"+b:"";
v(t,b)}return e}}})}function c(b,c,f){var g=[],h=r.colorButton_colors.split(","),k=a.plugins.colordialog&&r.colorButton_enableMore;f=h.length+f+(k?1:0);var v=1;r.colorButton_enableAutomatic&&(f+=1,v+=1,g.push('\x3ca class\x3d"cke_colorauto" _cke_focus\x3d1 hidefocus\x3dtrue',' title\x3d"',p.auto,'"',' draggable\x3d"false"',' ondragstart\x3d"return false;"',' onclick\x3d"CKEDITOR.tools.callFunction(',c,',null);return false;"'," href\x3d\"javascript:void('",p.auto,"')\"",' role\x3d"option" aria-posinset\x3d"1" aria-setsize\x3d"',
f,'"\x3e','\x3ctable role\x3d"presentation" cellspacing\x3d0 cellpadding\x3d0 width\x3d"100%"\x3e',"\x3ctr\x3e",'\x3ctd colspan\x3d"',a.config.colorButton_colorsPerRow,'" align\x3d"center"\x3e','\x3cspan class\x3d"cke_colorbox" id\x3d"',b,'"\x3e\x3c/span\x3e',p.auto,"\x3c/td\x3e","\x3c/tr\x3e","\x3c/table\x3e","\x3c/a\x3e"));g.push('\x3ctable role\x3d"presentation" cellspacing\x3d0 cellpadding\x3d0 width\x3d"100%"\x3e\x3ctbody\x3e');for(b=0;b<h.length;b++){0===b%a.config.colorButton_colorsPerRow&&
g.push("\x3c/tr\x3e\x3ctr\x3e");var m=h[b].split("/"),q=m[0],m=new n(a,{color:m[1]||q,label:m[1]?q:void 0},c);m.setPositionIndex(v+b,f);g.push(m.getHtml())}l.getRowLimit(a)&&l.renderContainer(g,a);k&&g.push("\x3c/tr\x3e","\x3ctr\x3e",'\x3ctd colspan\x3d"',a.config.colorButton_colorsPerRow,'" align\x3d"center"\x3e','\x3ca class\x3d"cke_colormore" _cke_focus\x3d1 hidefocus\x3dtrue',' title\x3d"',p.more,'"',' draggable\x3d"false"',' ondragstart\x3d"return false;"',' onclick\x3d"CKEDITOR.tools.callFunction(',
c,",'?');return false;\""," href\x3d\"javascript:void('",p.more,"')\"",' role\x3d"option" aria-posinset\x3d"',f,'" aria-setsize\x3d"',f,'"\x3e',p.more,"\x3c/a\x3e","\x3c/td\x3e");g.push("\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e");return g.join("")}function f(a){return"false"==a.getAttribute("contentEditable")||a.getAttribute("data-nostyle")}function v(a,b){var c=a._.getItems(),g=a.element.findOne("[aria-selected]"),f=a.element.findOne("[cke_colorlast]");g&&g.removeAttribute("aria-selected");if(f)f.setAttribute("aria-selected",
!0);else for(g=0;g<c.count();g++)if(f=c.getItem(g),b&&b==n.normalizeColor(f.getAttribute("data-value"))){f.setAttribute("aria-selected",!0);break}}var r=a.config,p=a.lang.colorbutton;if(!CKEDITOR.env.hc){b({name:"TextColor",type:"fore",commandName:"textColor",title:p.textColorTitle,order:10,contentTransformations:[[{element:"font",check:"span{color}",left:function(a){return!!a.attributes.color},right:function(a){a.name="span";a.attributes.color&&(a.styles.color=a.attributes.color);delete a.attributes.color}}]]});
var k,q=a.config.colorButton_normalizeBackground;if(void 0===q||q)k=[[{element:"span",left:function(a){var b=CKEDITOR.tools;if("span"!=a.name||!a.styles||!a.styles.background)return!1;a=b.style.parse.background(a.styles.background);return a.color&&1===b.object.keys(a).length},right:function(b){var c=(new CKEDITOR.style(a.config.colorButton_backStyle,{color:b.styles.background})).getDefinition();b.name=c.element;b.styles=c.styles;b.attributes=c.attributes||{};return b}}]];b({name:"BGColor",type:"back",
commandName:"bgColor",title:p.bgColorTitle,order:20,contentTransformations:k})}}});n=CKEDITOR.tools.createClass({$:function(a,b,c){this.$=new CKEDITOR.dom.element("td");this.color=CKEDITOR.tools._isValidColorFormat(b.color)?b.color:"";this.clickFn=c;this.label=b.label||n.colorNames(a)[this.color]||this.color;this.setHtml()},statics:{colorNames:function(a){return a.lang.colorbutton.colors},normalizeColor:function(a){var b=/^(rgb|hsl)a\(/g.test(a),c=/^rgba\((\s*0\s*,?){4}\)$/g.test(a);return b&&!c?
(a=new CKEDITOR.tools.color(a),CKEDITOR.tools.normalizeHex(a.getHex()||"").replace(/#/g,"")):CKEDITOR.tools.normalizeHex("#"+CKEDITOR.tools.convertRgbToHex(a||"")).replace(/#/g,"")}},proto:{getElement:function(){return this.$},getHtml:function(){return this.getElement().getOuterHtml()},setHtml:function(){this.getElement().setHtml('\x3ca class\x3d"cke_colorbox" _cke_focus\x3d1 hidefocus\x3dtrue title\x3d"'+this.label+'" draggable\x3d"false" ondragstart\x3d"return false;" onclick\x3d"CKEDITOR.tools.callFunction('+
this.clickFn+",'"+this.color+"','"+this.label+"', this); return false;\" href\x3d\"javascript:void('"+this.color+'\')" data-value\x3d"'+this.color+'" role\x3d"option"\x3e\x3cspan class\x3d"cke_colorbox" style\x3d"background-color:#'+this.color+'"\x3e\x3c/span\x3e\x3c/a\x3e')},setPositionIndex:function(a,b){this.getElement().getChild(0).setAttributes({"aria-posinset":a,"aria-setsize":b})}}});k=CKEDITOR.tools.createClass({$:function(){this.$=new CKEDITOR.dom.element("tr");this.$.addClass("cke_colorhistory_row");
this.boxes=[]},proto:{getElement:function(){return this.$},removeLastColor:function(){this.getElement().getLast().remove();return this.boxes.pop()},addNewColor:function(a){this.boxes.unshift(a);this.getElement().append(a.getElement(),!0)},extractColorBox:function(a){var b=CKEDITOR.tools.getIndex(this.boxes,function(b){return b.color===a});if(0>b)return null;this.boxes[b].getElement().remove();return this.boxes.splice(b,1)[0]}}});l=CKEDITOR.tools.createClass({$:function(a,b,c){this.editor=a;this.cssProperty=
b;this.clickFn=c;this.rows=[];this._.addNewRow();if(this.editor.config.colorButton_renderContentColors)this.editor.once("instanceReady",function(){this.renderContentColors()},this)},statics:{renderContainer:function(a,b){a.push('\x3c/tbody\x3e\x3ctbody class\x3d"cke_colorhistory" style\x3d"display:none;"\x3e',"\x3ctr\x3e",'\x3ctd colspan\x3d"',b.config.colorButton_colorsPerRow,'" align\x3d"center"\x3e',"\x3cspan\x3e\x3chr\x3e\x3c/span\x3e","\x3c/td\x3e","\x3c/tr\x3e","\x3c/tbody\x3e\x3ctbody\x3e")},
getRowLimit:function(a){return a.config.colorButton_historyRowLimit},getCapacity:function(a){return l.getRowLimit(a)*a.config.colorButton_colorsPerRow},colorList:CKEDITOR.tools.style.parse._colors},_:{countColors:function(){var a=CKEDITOR.tools.getStyledSpans(this.cssProperty,this.editor.editable());return CKEDITOR.tools.array.reduce(a,function(a,c){var f=this._.getHexCode(c,this.cssProperty,l.colorList);a[f]=a[f]||0;a[f]+=1;return a},{},this)},getHexCode:function(a,b,c){var f=a.getStyle(b);return f in
c?c[f].substr(1):n.normalizeColor(a.getComputedStyle(b)).toUpperCase()},sortByOccurrencesAscending:function(a,b){var c=[],f;for(f in a){var k={};k[b]=f;k.frequency=a[f];c.push(k)}c.sort(function(a,b){return b.frequency-a.frequency});this._.trimToCapacity(c);return c.reverse()},trimToCapacity:function(a){a.splice(l.getCapacity(this.editor))},addColors:function(a){CKEDITOR.tools.array.forEach(a,function(a){this.addColor(a.colorCode)},this)},extractColorBox:function(a){for(var b=0;b<this.rows.length;b++){var c=
this.rows[b].extractColorBox(a);if(c)return c}return null},moveToBeginning:function(a){this.rows[0].addNewColor(a)},createAtBeginning:function(a){this._.moveToBeginning(new n(this.editor,{color:a},this.clickFn))},addNewRow:function(){this.rows.push(new k);this.container&&this.container.append(this.rows[this.rows.length-1].getElement())},alignRows:function(){for(var a=0;a<l.getRowLimit(this.editor)&&!(this.rows[a].boxes.length<=this.editor.config.colorButton_colorsPerRow);a++)this.rows[a+1]?this._.moveLastBoxToNextRow(a):
a<l.getRowLimit(this.editor)-1?(this._.addNewRow(),this._.moveLastBoxToNextRow(a)):this.rows[a].removeLastColor()},moveLastBoxToNextRow:function(a){this.rows[a+1].addNewColor(this.rows[a].removeLastColor())},refreshPositions:function(){var a=this._.countPanelElements(),b=this._.calculateFirstPosition(a);CKEDITOR.tools.array.forEach(this.rows,function(c){CKEDITOR.tools.array.forEach(c.boxes,function(c){c.setPositionIndex(b,a);b+=1})})},countPanelElements:function(){var a=this.editor.config.colorButton_colors.split(",").length+
this.getLength();this.editor.plugins.colordialog&&this.editor.config.colorButton_enableMore&&(a+=1);this.editor.config.colorButton_enableAutomatic&&(a+=1);return a},calculateFirstPosition:function(a){return this.editor.plugins.colordialog&&this.editor.config.colorButton_enableMore?a-this.getLength():a-this.getLength()+1},attachRows:function(){CKEDITOR.tools.array.forEach(this.rows,function(a){this.container.append(a.getElement())},this)}},proto:{setContainer:function(a){this.container=a;this._.attachRows();
this.getLength()&&this.show()},show:function(){this.container&&this.container.show()},renderContentColors:function(){var a=this._.countColors();CKEDITOR.tools.isEmpty(a)||(a=this._.sortByOccurrencesAscending(a,"colorCode"),this._.addColors(a),this._.refreshPositions())},addColor:function(a){var b=this._.extractColorBox(a);this.container&&!this.container.isVisible()&&this.show();b?this._.moveToBeginning(b):this._.createAtBeginning(a);this._.alignRows()},getLength:function(){return CKEDITOR.tools.array.reduce(this.rows,
function(a,b){return a+b.boxes.length},0)}}})})();CKEDITOR.config.colorButton_enableMore=!0;CKEDITOR.config.colorButton_colors="1ABC9C,2ECC71,3498DB,9B59B6,4E5F70,F1C40F,16A085,27AE60,2980B9,8E44AD,2C3E50,F39C12,E67E22,E74C3C,ECF0F1,95A5A6,DDD,FFF,D35400,C0392B,BDC3C7,7F8C8D,999,000";CKEDITOR.config.colorButton_foreStyle={element:"span",styles:{color:"#(color)"},overrides:[{element:"font",attributes:{color:null}}]};CKEDITOR.config.colorButton_backStyle={element:"span",styles:{"background-color":"#(color)"}};
CKEDITOR.config.colorButton_enableAutomatic=!0;CKEDITOR.config.colorButton_colorsPerRow=6;CKEDITOR.config.colorButton_historyRowLimit=1;CKEDITOR.config.colorButton_renderContentColors=!0;
