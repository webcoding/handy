define("#switchable/0.9.5/plugins/effects",["$"],function(a,b,c){var d=a("$"),e="scrollx",f="scrolly",g="fade";c.exports={isNeeded:function(){return this.get("effect")!=="none"},install:function(){var a=this.panels;a.css("display","block");var b=this.get("effect"),c=this.get("step");if(b.indexOf("scroll")===0){var f=this.content,i=a.eq(0);f.css("position","absolute"),f.parent().css("position")==="static"&&f.parent().css("position","relative"),b===e&&(a.css("float","left"),f.width("9999px"));var j=this.get("viewSize");j[0]||(j[0]=i.get(0).offsetWidth*c,j[1]=i.get(0).offsetHeight*c,this.set("viewSize",j));if(!j[0])throw new Error("Please specify viewSize manually")}else if(b===g){var k=this.get("activeIndex"),l=k*c,m=l+c-1;a.each(function(a,b){var c=a>=l&&a<=m;d(b).css({opacity:c?1:0,position:"absolute",zIndex:c?9:1})})}this._switchPanel=function(a){var b=this.get("effect"),c=d.isFunction(b)?b:h[b];c.call(this,a)}}};var h={fade:function(a){if(this.get("step")>1)throw new Error('Effect "fade" only supports step === 1');var b=a.fromPanels.eq(0),c=a.toPanels.eq(0),d=this.anim;!d,c.css("opacity",1);if(b[0]){var e=this.get("duration"),f=this.get("easing"),g=this;this.anim=b.animate({opacity:0},e,f,function(){g.anim=null,c.css("zIndex",9),b.css("zIndex",1)})}else c.css("zIndex",9)},scroll:function(a){var b=this.get("effect")===e,c=this.get("viewSize")[b?0:1]*a.toIndex,d={};d[b?"left":"top"]=-c+"px",!this.anim;if(a.fromIndex>-1){var f=this,g=this.get("duration"),h=this.get("easing");this.anim=this.content.animate(d,g,h,function(){f.anim=null})}else this.content.css(d)}};h[f]=h.scroll,h[e]=h.scroll,c.exports.Effects=h});