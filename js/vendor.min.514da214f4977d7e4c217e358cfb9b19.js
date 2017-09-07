/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(bg,al,a1,A){var t=["","webkit","Moz","MS","ms","o"];
var D=al.createElement("div");
var Y="function";
var S=Math.round;
var ai=Math.abs;
var bi=Date.now;
function k(bz,bA,by){return setTimeout(I(bz,by),bA)
}function ac(by,bA,bz){if(Array.isArray(by)){bv(by,bz[bA],bz);
return true
}return false
}function bv(bB,bA,bz){var by;
if(!bB){return
}if(bB.forEach){bB.forEach(bA,bz)
}else{if(bB.length!==A){by=0;
while(by<bB.length){bA.call(bz,bB[by],by,bB);
by++
}}else{for(by in bB){bB.hasOwnProperty(by)&&bA.call(bz,bB[by],by,bB)
}}}}function br(bB,by,bA){var bz="DEPRECATED METHOD: "+by+"\n"+bA+" AT \n";
return function(){var bE=new Error("get-stack-trace");
var bC=bE&&bE.stack?bE.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace";
var bD=bg.console&&(bg.console.warn||bg.console.log);
if(bD){bD.call(bg.console,bz,bC)
}return bB.apply(this,arguments)
}
}var bd;
if(typeof Object.assign!=="function"){bd=function bd(bC){if(bC===A||bC===null){throw new TypeError("Cannot convert undefined or null to object")
}var bz=Object(bC);
for(var bA=1;
bA<arguments.length;
bA++){var bB=arguments[bA];
if(bB!==A&&bB!==null){for(var by in bB){if(bB.hasOwnProperty(by)){bz[by]=bB[by]
}}}}return bz
}
}else{bd=Object.assign
}var aK=br(function aK(by,bB,bC){var bA=Object.keys(bB);
var bz=0;
while(bz<bA.length){if(!bC||(bC&&by[bA[bz]]===A)){by[bA[bz]]=bB[bA[bz]]
}bz++
}return by
},"extend","Use `assign`.");
var F=br(function F(by,bz){return aK(by,bz,true)
},"merge","Use `assign`.");
function G(bC,bA,bz){var by=bA.prototype,bB;
bB=bC.prototype=Object.create(by);
bB.constructor=bC;
bB._super=by;
if(bz){bd(bB,bz)
}}function I(bA,by){return function bz(){return bA.apply(by,arguments)
}
}function an(bz,by){if(typeof bz==Y){return bz.apply(by?by[0]||A:A,by)
}return bz
}function aI(bz,by){return(bz===A)?by:bz
}function aJ(bA,by,bz){bv(aW(by),function(bB){bA.addEventListener(bB,bz,false)
})
}function N(bA,by,bz){bv(aW(by),function(bB){bA.removeEventListener(bB,bz,false)
})
}function n(bz,by){while(bz){if(bz==by){return true
}bz=bz.parentNode
}return false
}function j(bz,by){return bz.indexOf(by)>-1
}function aW(by){return by.trim().split(/\s+/g)
}function z(bB,bA,bz){if(bB.indexOf&&!bz){return bB.indexOf(bA)
}else{var by=0;
while(by<bB.length){if((bz&&bB[by][bz]==bA)||(!bz&&bB[by]===bA)){return by
}by++
}return -1
}}function Z(by){return Array.prototype.slice.call(by,0)
}function bk(bF,bC,bB){var bA=[];
var by=[];
var bz=0;
while(bz<bF.length){var bE=bC?bF[bz][bC]:bF[bz];
if(z(by,bE)<0){bA.push(bF[bz])
}by[bz]=bE;
bz++
}if(bB){if(!bC){bA=bA.sort()
}else{bA=bA.sort(function bD(bH,bG){return bH[bC]>bG[bC]
})
}}return bA
}function ar(bC,bB){var bA,bD;
var by=bB[0].toUpperCase()+bB.slice(1);
var bz=0;
while(bz<t.length){bA=t[bz];
bD=(bA)?bA+by:bB;
if(bD in bC){return bD
}bz++
}return A
}var s=1;
function aL(){return s++
}function K(by){var bz=by.ownerDocument||by;
return(bz.defaultView||bz.parentWindow||bg)
}var u=/mobile|tablet|ip(ad|hone|od)|android/i;
var b=("ontouchstart" in bg);
var ah=ar(bg,"PointerEvent")!==A;
var aC=b&&u.test(navigator.userAgent);
var aG="touch";
var p="pen";
var P="mouse";
var T="kinect";
var bp=25;
var a9=1;
var a5=2;
var g=4;
var v=8;
var aB=1;
var l=2;
var B=4;
var ag=8;
var a6=16;
var bl=l|B;
var aA=ag|a6;
var O=bl|aA;
var aj=["x","y"];
var aq=["clientX","clientY"];
function a(bz,bA){var by=this;
this.manager=bz;
this.callback=bA;
this.element=bz.element;
this.target=bz.options.inputTarget;
this.domHandler=function(bB){if(an(bz.options.enable,[bz])){by.handler(bB)
}};
this.init()
}a.prototype={handler:function(){},init:function(){this.evEl&&aJ(this.element,this.evEl,this.domHandler);
this.evTarget&&aJ(this.target,this.evTarget,this.domHandler);
this.evWin&&aJ(K(this.element),this.evWin,this.domHandler)
},destroy:function(){this.evEl&&N(this.element,this.evEl,this.domHandler);
this.evTarget&&N(this.target,this.evTarget,this.domHandler);
this.evWin&&N(K(this.element),this.evWin,this.domHandler)
}};
function x(bA){var bz;
var by=bA.options.inputClass;
if(by){bz=by
}else{if(ah){bz=aR
}else{if(aC){bz=ay
}else{if(!b){bz=az
}else{bz=bn
}}}}return new (bz)(bA,ax)
}function ax(bD,bC,bA){var bz=bA.pointers.length;
var bB=bA.changedPointers.length;
var by=(bC&a9&&(bz-bB===0));
var bE=(bC&(g|v)&&(bz-bB===0));
bA.isFirst=!!by;
bA.isFinal=!!bE;
if(by){bD.session={}
}bA.eventType=bC;
ba(bD,bA);
bD.emit("hammer.input",bA);
bD.recognize(bA);
bD.session.prevInput=bA
}function ba(bC,bH){var bF=bC.session;
var bI=bH.pointers;
var bG=bI.length;
if(!bF.firstInput){bF.firstInput=o(bH)
}if(bG>1&&!bF.firstMultiple){bF.firstMultiple=o(bH)
}else{if(bG===1){bF.firstMultiple=false
}}var bA=bF.firstInput;
var bD=bF.firstMultiple;
var bz=bD?bD.center:bA.center;
var by=bH.center=R(bI);
bH.timeStamp=bi();
bH.deltaTime=bH.timeStamp-bA.timeStamp;
bH.angle=au(bz,by);
bH.distance=bq(bz,by);
aw(bF,bH);
bH.offsetDirection=aO(bH.deltaX,bH.deltaY);
var bB=V(bH.deltaTime,bH.deltaX,bH.deltaY);
bH.overallVelocityX=bB.x;
bH.overallVelocityY=bB.y;
bH.overallVelocity=(ai(bB.x)>ai(bB.y))?bB.x:bB.y;
bH.scale=bD?e(bD.pointers,bI):1;
bH.rotation=bD?bj(bD.pointers,bI):0;
bH.maxPointers=!bF.prevInput?bH.pointers.length:((bH.pointers.length>bF.prevInput.maxPointers)?bH.pointers.length:bF.prevInput.maxPointers);
aa(bF,bH);
var bE=bC.element;
if(n(bH.srcEvent.target,bE)){bE=bH.srcEvent.target
}bH.target=bE
}function aw(bC,bA){var bz=bA.center;
var bD=bC.offsetDelta||{};
var by=bC.prevDelta||{};
var bB=bC.prevInput||{};
if(bA.eventType===a9||bB.eventType===g){by=bC.prevDelta={x:bB.deltaX||0,y:bB.deltaY||0};
bD=bC.offsetDelta={x:bz.x,y:bz.y}
}bA.deltaX=by.x+(bz.x-bD.x);
bA.deltaY=by.y+(bz.y-bD.y)
}function aa(bC,bF){var bI=bC.lastInterval||bF,bB=bF.timeStamp-bI.timeStamp,bz,bG,bD,bE;
if(bF.eventType!=v&&(bB>bp||bI.velocity===A)){var bA=bF.deltaX-bI.deltaX;
var by=bF.deltaY-bI.deltaY;
var bH=V(bB,bA,by);
bG=bH.x;
bD=bH.y;
bz=(ai(bH.x)>ai(bH.y))?bH.x:bH.y;
bE=aO(bA,by);
bC.lastInterval=bF
}else{bz=bI.velocity;
bG=bI.velocityX;
bD=bI.velocityY;
bE=bI.direction
}bF.velocity=bz;
bF.velocityX=bG;
bF.velocityY=bD;
bF.direction=bE
}function o(bz){var by=[];
var bA=0;
while(bA<bz.pointers.length){by[bA]={clientX:S(bz.pointers[bA].clientX),clientY:S(bz.pointers[bA].clientY)};
bA++
}return{timeStamp:bi(),pointers:by,center:R(by),deltaX:bz.deltaX,deltaY:bz.deltaY}
}function R(bA){var bz=bA.length;
if(bz===1){return{x:S(bA[0].clientX),y:S(bA[0].clientY)}
}var by=0,bC=0,bB=0;
while(bB<bz){by+=bA[bB].clientX;
bC+=bA[bB].clientY;
bB++
}return{x:S(by/bz),y:S(bC/bz)}
}function V(bz,by,bA){return{x:by/bz||0,y:bA/bz||0}
}function aO(by,bz){if(by===bz){return aB
}if(ai(by)>=ai(bz)){return by<0?l:B
}return bz<0?ag:a6
}function bq(bB,bA,bz){if(!bz){bz=aj
}var by=bA[bz[0]]-bB[bz[0]],bC=bA[bz[1]]-bB[bz[1]];
return Math.sqrt((by*by)+(bC*bC))
}function au(bB,bA,bz){if(!bz){bz=aj
}var by=bA[bz[0]]-bB[bz[0]],bC=bA[bz[1]]-bB[bz[1]];
return Math.atan2(bC,by)*180/Math.PI
}function bj(bz,by){return au(by[1],by[0],aq)+au(bz[1],bz[0],aq)
}function e(bz,by){return bq(by[0],by[1],aq)/bq(bz[0],bz[1],aq)
}var aX={mousedown:a9,mousemove:a5,mouseup:g};
var C="mousedown";
var w="mousemove mouseup";
function az(){this.evEl=C;
this.evWin=w;
this.pressed=false;
a.apply(this,arguments)
}G(az,a,{handler:function U(bz){var by=aX[bz.type];
if(by&a9&&bz.button===0){this.pressed=true
}if(by&a5&&bz.which!==1){by=g
}if(!this.pressed){return
}if(by&g){this.pressed=false
}this.callback(this.manager,by,{pointers:[bz],changedPointers:[bz],pointerType:P,srcEvent:bz})
}});
var aM={pointerdown:a9,pointermove:a5,pointerup:g,pointercancel:v,pointerout:v};
var H={2:aG,3:p,4:P,5:T};
var bf="pointerdown";
var h="pointermove pointerup pointercancel";
if(bg.MSPointerEvent&&!bg.PointerEvent){bf="MSPointerDown";
h="MSPointerMove MSPointerUp MSPointerCancel"
}function aR(){this.evEl=bf;
this.evWin=h;
a.apply(this,arguments);
this.store=(this.manager.session.pointerEvents=[])
}G(aR,a,{handler:function a8(bD){var bB=this.store;
var bF=false;
var bA=bD.type.toLowerCase().replace("ms","");
var bC=aM[bA];
var by=H[bD.pointerType]||bD.pointerType;
var bz=(by==aG);
var bE=z(bB,bD.pointerId,"pointerId");
if(bC&a9&&(bD.button===0||bz)){if(bE<0){bB.push(bD);
bE=bB.length-1
}}else{if(bC&(g|v)){bF=true
}}if(bE<0){return
}bB[bE]=bD;
this.callback(this.manager,bC,{pointers:bB,changedPointers:[bD],pointerType:by,srcEvent:bD});
if(bF){bB.splice(bE,1)
}}});
var am={touchstart:a9,touchmove:a5,touchend:g,touchcancel:v};
var aP="touchstart";
var aT="touchstart touchmove touchend touchcancel";
function y(){this.evTarget=aP;
this.evWin=aT;
this.started=false;
a.apply(this,arguments)
}G(y,a,{handler:function aQ(bz){var by=am[bz.type];
if(by===a9){this.started=true
}if(!this.started){return
}var bA=c.call(this,bz,by);
if(by&(g|v)&&bA[0].length-bA[1].length===0){this.started=false
}this.callback(this.manager,by,{pointers:bA[0],changedPointers:bA[1],pointerType:aG,srcEvent:bz})
}});
function c(bA,bz){var by=Z(bA.touches);
var bB=Z(bA.changedTouches);
if(bz&(g|v)){by=bk(by.concat(bB),"identifier",true)
}return[by,bB]
}var aU={touchstart:a9,touchmove:a5,touchend:g,touchcancel:v};
var aE="touchstart touchmove touchend touchcancel";
function ay(){this.evTarget=aE;
this.targetIds={};
a.apply(this,arguments)
}G(ay,a,{handler:function X(bz){var by=aU[bz.type];
var bA=aF.call(this,bz,by);
if(!bA){return
}this.callback(this.manager,by,{pointers:bA[0],changedPointers:bA[1],pointerType:aG,srcEvent:bz})
}});
function aF(bE,bD){var bz=Z(bE.touches);
var by=this.targetIds;
if(bD&(a9|a5)&&bz.length===1){by[bz[0].identifier]=true;
return[bz,bz]
}var bA,bC,bF=Z(bE.changedTouches),bG=[],bB=this.target;
bC=bz.filter(function(bH){return n(bH.target,bB)
});
if(bD===a9){bA=0;
while(bA<bC.length){by[bC[bA].identifier]=true;
bA++
}}bA=0;
while(bA<bF.length){if(by[bF[bA].identifier]){bG.push(bF[bA])
}if(bD&(g|v)){delete by[bF[bA].identifier]
}bA++
}if(!bG.length){return
}return[bk(bC.concat(bG),"identifier",true),bG]
}var E=2500;
var f=25;
function bn(){a.apply(this,arguments);
var by=I(this.handler,this);
this.touch=new ay(this.manager,by);
this.mouse=new az(this.manager,by);
this.primaryTouch=null;
this.lastTouches=[]
}G(bn,a,{handler:function a7(bz,bC,bB){var by=(bB.pointerType==aG),bA=(bB.pointerType==P);
if(bA&&bB.sourceCapabilities&&bB.sourceCapabilities.firesTouchEvents){return
}if(by){bb.call(this,bC,bB)
}else{if(bA&&W.call(this,bB)){return
}}this.callback(bz,bC,bB)
},destroy:function m(){this.touch.destroy();
this.mouse.destroy()
}});
function bb(by,bz){if(by&a9){this.primaryTouch=bz.changedPointers[0].identifier;
bx.call(this,bz)
}else{if(by&(g|v)){bx.call(this,bz)
}}}function bx(bB){var bC=bB.changedPointers[0];
if(bC.identifier===this.primaryTouch){var bA={x:bC.clientX,y:bC.clientY};
this.lastTouches.push(bA);
var by=this.lastTouches;
var bz=function(){var bD=by.indexOf(bA);
if(bD>-1){by.splice(bD,1)
}};
setTimeout(bz,E)
}}function W(bD){var by=bD.srcEvent.clientX,bE=bD.srcEvent.clientY;
for(var bC=0;
bC<this.lastTouches.length;
bC++){var bB=this.lastTouches[bC];
var bA=Math.abs(by-bB.x),bz=Math.abs(bE-bB.y);
if(bA<=f&&bz<=f){return true
}}return false
}var at=ar(D.style,"touchAction");
var bt=at!==A;
var bu="compute";
var ao="auto";
var bo="manipulation";
var i="none";
var a3="pan-x";
var a2="pan-y";
var af=bh();
function bs(by,bz){this.manager=by;
this.set(bz)
}bs.prototype={set:function(by){if(by==bu){by=this.compute()
}if(bt&&this.manager.element.style&&af[by]){this.manager.element.style[at]=by
}this.actions=by.toLowerCase().trim()
},update:function(){this.set(this.manager.options.touchAction)
},compute:function(){var by=[];
bv(this.manager.recognizers,function(bz){if(an(bz.options.enable,[bz])){by=by.concat(bz.getTouchAction())
}});
return bw(by.join(" "))
},preventDefaults:function(bH){var bC=bH.srcEvent;
var bG=bH.offsetDirection;
if(this.manager.session.prevented){bC.preventDefault();
return
}var bD=this.actions;
var bA=j(bD,i)&&!af[i];
var bz=j(bD,a2)&&!af[a2];
var bB=j(bD,a3)&&!af[a3];
if(bA){var by=bH.pointers.length===1;
var bF=bH.distance<2;
var bE=bH.deltaTime<250;
if(by&&bF&&bE){return
}}if(bB&&bz){return
}if(bA||(bz&&bG&bl)||(bB&&bG&aA)){return this.preventSrc(bC)
}},preventSrc:function(by){this.manager.session.prevented=true;
by.preventDefault()
}};
function bw(bA){if(j(bA,i)){return i
}var bz=j(bA,a3);
var by=j(bA,a2);
if(bz&&by){return i
}if(bz||by){return bz?a3:a2
}if(j(bA,bo)){return bo
}return ao
}function bh(){if(!bt){return false
}var by={};
var bz=bg.CSS&&bg.CSS.supports;
["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(bA){by[bA]=bz?bg.CSS.supports("touch-action",bA):true
});
return by
}var ad=1;
var ap=2;
var ak=4;
var aS=8;
var r=aS;
var M=16;
var aN=32;
function L(by){this.options=bd({},this.defaults,by||{});
this.id=aL();
this.manager=null;
this.options.enable=aI(this.options.enable,true);
this.state=ad;
this.simultaneous={};
this.requireFail=[]
}L.prototype={defaults:{},set:function(by){bd(this.options,by);
this.manager&&this.manager.touchAction.update();
return this
},recognizeWith:function(by){if(ac(by,"recognizeWith",this)){return this
}var bz=this.simultaneous;
by=ae(by,this);
if(!bz[by.id]){bz[by.id]=by;
by.recognizeWith(this)
}return this
},dropRecognizeWith:function(by){if(ac(by,"dropRecognizeWith",this)){return this
}by=ae(by,this);
delete this.simultaneous[by.id];
return this
},requireFailure:function(by){if(ac(by,"requireFailure",this)){return this
}var bz=this.requireFail;
by=ae(by,this);
if(z(bz,by)===-1){bz.push(by);
by.requireFailure(this)
}return this
},dropRequireFailure:function(bz){if(ac(bz,"dropRequireFailure",this)){return this
}bz=ae(bz,this);
var by=z(this.requireFail,bz);
if(by>-1){this.requireFail.splice(by,1)
}return this
},hasRequireFailures:function(){return this.requireFail.length>0
},canRecognizeWith:function(by){return !!this.simultaneous[by.id]
},emit:function(bz){var by=this;
var bB=this.state;
function bA(bC){by.manager.emit(bC,bz)
}if(bB<aS){bA(by.options.event+be(bB))
}bA(by.options.event);
if(bz.additionalEvent){bA(bz.additionalEvent)
}if(bB>=aS){bA(by.options.event+be(bB))
}},tryEmit:function(by){if(this.canEmit()){return this.emit(by)
}this.state=aN
},canEmit:function(){var by=0;
while(by<this.requireFail.length){if(!(this.requireFail[by].state&(aN|ad))){return false
}by++
}return true
},recognize:function(by){var bz=bd({},by);
if(!an(this.options.enable,[this,bz])){this.reset();
this.state=aN;
return
}if(this.state&(r|M|aN)){this.state=ad
}this.state=this.process(bz);
if(this.state&(ap|ak|aS|M)){this.tryEmit(bz)
}},process:function(by){},getTouchAction:function(){},reset:function(){}};
function be(by){if(by&M){return"cancel"
}else{if(by&aS){return"end"
}else{if(by&ak){return"move"
}else{if(by&ap){return"start"
}}}}return""
}function a4(by){if(by==a6){return"down"
}else{if(by==ag){return"up"
}else{if(by==l){return"left"
}else{if(by==B){return"right"
}}}}return""
}function ae(bA,by){var bz=by.manager;
if(bz){return bz.get(bA)
}return bA
}function aD(){L.apply(this,arguments)
}G(aD,L,{defaults:{pointers:1},attrTest:function(by){var bz=this.options.pointers;
return bz===0||by.pointers.length===bz
},process:function(bz){var bB=this.state;
var bA=bz.eventType;
var by=bB&(ap|ak);
var bC=this.attrTest(bz);
if(by&&(bA&v||!bC)){return bB|M
}else{if(by||bC){if(bA&g){return bB|aS
}else{if(!(bB&ap)){return ap
}}return bB|ak
}}return aN
}});
function q(){aD.apply(this,arguments);
this.pX=null;
this.pY=null
}G(q,aD,{defaults:{event:"pan",threshold:10,pointers:1,direction:O},getTouchAction:function(){var by=this.options.direction;
var bz=[];
if(by&bl){bz.push(a2)
}if(by&aA){bz.push(a3)
}return bz
},directionTest:function(bA){var bB=this.options;
var bz=true;
var bE=bA.distance;
var bC=bA.direction;
var by=bA.deltaX;
var bD=bA.deltaY;
if(!(bC&bB.direction)){if(bB.direction&bl){bC=(by===0)?aB:(by<0)?l:B;
bz=by!=this.pX;
bE=Math.abs(bA.deltaX)
}else{bC=(bD===0)?aB:(bD<0)?ag:a6;
bz=bD!=this.pY;
bE=Math.abs(bA.deltaY)
}}bA.direction=bC;
return bz&&bE>bB.threshold&&bC&bB.direction
},attrTest:function(by){return aD.prototype.attrTest.call(this,by)&&(this.state&ap||(!(this.state&ap)&&this.directionTest(by)))
},emit:function(by){this.pX=by.deltaX;
this.pY=by.deltaY;
var bz=a4(by.direction);
if(bz){by.additionalEvent=this.options.event+bz
}this._super.emit.call(this,by)
}});
function bc(){aD.apply(this,arguments)
}G(bc,aD,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[i]
},attrTest:function(by){return this._super.attrTest.call(this,by)&&(Math.abs(by.scale-1)>this.options.threshold||this.state&ap)
},emit:function(bz){if(bz.scale!==1){var by=bz.scale<1?"in":"out";
bz.additionalEvent=this.options.event+by
}this._super.emit.call(this,bz)
}});
function aV(){L.apply(this,arguments);
this._timer=null;
this._input=null
}G(aV,L,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[ao]
},process:function(bz){var bA=this.options;
var bC=bz.pointers.length===bA.pointers;
var by=bz.distance<bA.threshold;
var bB=bz.deltaTime>bA.time;
this._input=bz;
if(!by||!bC||(bz.eventType&(g|v)&&!bB)){this.reset()
}else{if(bz.eventType&a9){this.reset();
this._timer=k(function(){this.state=r;
this.tryEmit()
},bA.time,this)
}else{if(bz.eventType&g){return r
}}}return aN
},reset:function(){clearTimeout(this._timer)
},emit:function(by){if(this.state!==r){return
}if(by&&(by.eventType&g)){this.manager.emit(this.options.event+"up",by)
}else{this._input.timeStamp=bi();
this.manager.emit(this.options.event,this._input)
}}});
function aH(){aD.apply(this,arguments)
}G(aH,aD,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[i]
},attrTest:function(by){return this._super.attrTest.call(this,by)&&(Math.abs(by.rotation)>this.options.threshold||this.state&ap)
}});
function aZ(){aD.apply(this,arguments)
}G(aZ,aD,{defaults:{event:"swipe",threshold:10,velocity:0.3,direction:bl|aA,pointers:1},getTouchAction:function(){return q.prototype.getTouchAction.call(this)
},attrTest:function(by){var bA=this.options.direction;
var bz;
if(bA&(bl|aA)){bz=by.overallVelocity
}else{if(bA&bl){bz=by.overallVelocityX
}else{if(bA&aA){bz=by.overallVelocityY
}}}return this._super.attrTest.call(this,by)&&bA&by.offsetDirection&&by.distance>this.options.threshold&&by.maxPointers==this.options.pointers&&ai(bz)>this.options.velocity&&by.eventType&g
},emit:function(by){var bz=a4(by.offsetDirection);
if(bz){this.manager.emit(this.options.event+bz,by)
}this.manager.emit(this.options.event,by)
}});
function av(){L.apply(this,arguments);
this.pTime=false;
this.pCenter=false;
this._timer=null;
this._input=null;
this.count=0
}G(av,L,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[bo]
},process:function(bA){var bC=this.options;
var bF=bA.pointers.length===bC.pointers;
var bz=bA.distance<bC.threshold;
var bB=bA.deltaTime<bC.time;
this.reset();
if((bA.eventType&a9)&&(this.count===0)){return this.failTimeout()
}if(bz&&bB&&bF){if(bA.eventType!=g){return this.failTimeout()
}var bE=this.pTime?(bA.timeStamp-this.pTime<bC.interval):true;
var bD=!this.pCenter||bq(this.pCenter,bA.center)<bC.posThreshold;
this.pTime=bA.timeStamp;
this.pCenter=bA.center;
if(!bD||!bE){this.count=1
}else{this.count+=1
}this._input=bA;
var by=this.count%bC.taps;
if(by===0){if(!this.hasRequireFailures()){return r
}else{this._timer=k(function(){this.state=r;
this.tryEmit()
},bC.interval,this);
return ap
}}}return aN
},failTimeout:function(){this._timer=k(function(){this.state=aN
},this.options.interval,this);
return aN
},reset:function(){clearTimeout(this._timer)
},emit:function(){if(this.state==r){this._input.tapCount=this.count;
this.manager.emit(this.options.event,this._input)
}}});
function Q(bz,by){by=by||{};
by.recognizers=aI(by.recognizers,Q.defaults.preset);
return new bm(bz,by)
}Q.VERSION="2.0.7";
Q.defaults={domEvents:false,touchAction:bu,enable:true,inputTarget:null,inputClass:null,preset:[[aH,{enable:false}],[bc,{enable:false},["rotate"]],[aZ,{direction:bl}],[q,{direction:bl},["swipe"]],[av],[av,{event:"doubletap",taps:2},["tap"]],[aV]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};
var J=1;
var a0=2;
function bm(bz,by){this.options=bd({},Q.defaults,by||{});
this.options.inputTarget=this.options.inputTarget||bz;
this.handlers={};
this.session={};
this.recognizers=[];
this.oldCssProps={};
this.element=bz;
this.input=x(this);
this.touchAction=new bs(this,this.options.touchAction);
ab(this,true);
bv(this.options.recognizers,function(bB){var bA=this.add(new (bB[0])(bB[1]));
bB[2]&&bA.recognizeWith(bB[2]);
bB[3]&&bA.requireFailure(bB[3])
},this)
}bm.prototype={set:function(by){bd(this.options,by);
if(by.touchAction){this.touchAction.update()
}if(by.inputTarget){this.input.destroy();
this.input.target=by.inputTarget;
this.input.init()
}return this
},stop:function(by){this.session.stopped=by?a0:J
},recognize:function(bC){var bD=this.session;
if(bD.stopped){return
}this.touchAction.preventDefaults(bC);
var by;
var bz=this.recognizers;
var bB=bD.curRecognizer;
if(!bB||(bB&&bB.state&r)){bB=bD.curRecognizer=null
}var bA=0;
while(bA<bz.length){by=bz[bA];
if(bD.stopped!==a0&&(!bB||by==bB||by.canRecognizeWith(bB))){by.recognize(bC)
}else{by.reset()
}if(!bB&&by.state&(ap|ak|aS)){bB=bD.curRecognizer=by
}bA++
}},get:function(by){if(by instanceof L){return by
}var bz=this.recognizers;
for(var bA=0;
bA<bz.length;
bA++){if(bz[bA].options.event==by){return bz[bA]
}}return null
},add:function(by){if(ac(by,"add",this)){return this
}var bz=this.get(by.options.event);
if(bz){this.remove(bz)
}this.recognizers.push(by);
by.manager=this;
this.touchAction.update();
return by
},remove:function(by){if(ac(by,"remove",this)){return this
}by=this.get(by);
if(by){var bz=this.recognizers;
var bA=z(bz,by);
if(bA!==-1){bz.splice(bA,1);
this.touchAction.update()
}}return this
},on:function(bz,bA){if(bz===A){return
}if(bA===A){return
}var by=this.handlers;
bv(aW(bz),function(bB){by[bB]=by[bB]||[];
by[bB].push(bA)
});
return this
},off:function(bz,bA){if(bz===A){return
}var by=this.handlers;
bv(aW(bz),function(bB){if(!bA){delete by[bB]
}else{by[bB]&&by[bB].splice(z(by[bB],bA),1)
}});
return this
},emit:function(bA,bB){if(this.options.domEvents){d(bA,bB)
}var by=this.handlers[bA]&&this.handlers[bA].slice();
if(!by||!by.length){return
}bB.type=bA;
bB.preventDefault=function(){bB.srcEvent.preventDefault()
};
var bz=0;
while(bz<by.length){by[bz](bB);
bz++
}},destroy:function(){this.element&&ab(this,false);
this.handlers={};
this.session={};
this.input.destroy();
this.element=null
}};
function ab(bz,bA){var by=bz.element;
if(!by.style){return
}var bB;
bv(bz.options.cssProps,function(bD,bC){bB=ar(by.style,bC);
if(bA){bz.oldCssProps[bB]=by.style[bB];
by.style[bB]=bD
}else{by.style[bB]=bz.oldCssProps[bB]||""
}});
if(!bA){bz.oldCssProps={}
}}function d(by,bz){var bA=al.createEvent("Event");
bA.initEvent(by,true,true);
bA.gesture=bz;
bz.target.dispatchEvent(bA)
}bd(Q,{INPUT_START:a9,INPUT_MOVE:a5,INPUT_END:g,INPUT_CANCEL:v,STATE_POSSIBLE:ad,STATE_BEGAN:ap,STATE_CHANGED:ak,STATE_ENDED:aS,STATE_RECOGNIZED:r,STATE_CANCELLED:M,STATE_FAILED:aN,DIRECTION_NONE:aB,DIRECTION_LEFT:l,DIRECTION_RIGHT:B,DIRECTION_UP:ag,DIRECTION_DOWN:a6,DIRECTION_HORIZONTAL:bl,DIRECTION_VERTICAL:aA,DIRECTION_ALL:O,Manager:bm,Input:a,TouchAction:bs,TouchInput:ay,MouseInput:az,PointerEventInput:aR,TouchMouseInput:bn,SingleTouchInput:y,Recognizer:L,AttrRecognizer:aD,Tap:av,Pan:q,Swipe:aZ,Pinch:bc,Rotate:aH,Press:aV,on:aJ,off:N,each:bv,merge:F,extend:aK,assign:bd,inherit:G,bindFn:I,prefixed:ar});
var aY=(typeof bg!=="undefined"?bg:(typeof self!=="undefined"?self:{}));
aY.Hammer=Q;
if(typeof define==="function"&&define.amd){define(function(){return Q
})
}else{if(typeof module!="undefined"&&module.exports){module.exports=Q
}else{bg[a1]=Q
}}})(window,document,"Hammer");
var ytp=ytp||{};
var getYTPVideoID=function(a){var c,b;
if(a.indexOf("youtu.be")>0){c=a.substr(a.lastIndexOf("/")+1,a.length);
b=c.indexOf("?list=")>0?c.substr(c.lastIndexOf("="),c.length):null;
c=b?c.substr(0,c.lastIndexOf("?")):c
}else{if(a.indexOf("http")>-1){c=a.match(/[\\?&]v=([^&#]*)/)[1];
b=a.indexOf("list=")>0?a.match(/[\\?&]list=([^&#]*)/)[1]:null
}else{c=a.length>15?null:a;
b=c?null:a
}}return{videoID:c,playlistID:b}
};
(function(jQuery,ytp){jQuery.mbYTPlayer={name:"jquery.mb.YTPlayer",version:"3.0.10",build:"6057",author:"Matteo Bicocchi",apiKey:"",defaults:{containment:"body",ratio:"auto",videoURL:null,playlistURL:null,startAt:0,stopAt:0,autoPlay:true,vol:50,addRaster:false,mask:false,opacity:1,quality:"default",mute:false,loop:true,showControls:true,showAnnotations:false,showYTLogo:true,stopMovieOnBlur:true,realfullscreen:true,mobileFallbackImage:null,gaTrack:true,optimizeDisplay:true,align:"center,center",onReady:function(player){}},controls:{play:"P",pause:"p",mute:"M",unmute:"A",onlyYT:"O",showSite:"R",ytLogo:"Y"},controlBar:null,loading:null,locationProtocol:"https:",filters:{grayscale:{value:0,unit:"%"},hue_rotate:{value:0,unit:"deg"},invert:{value:0,unit:"%"},opacity:{value:0,unit:"%"},saturate:{value:0,unit:"%"},sepia:{value:0,unit:"%"},brightness:{value:0,unit:"%"},contrast:{value:0,unit:"%"},blur:{value:0,unit:"px"}},buildPlayer:function(options){return this.each(function(){var YTPlayer=this;
var $YTPlayer=jQuery(YTPlayer);
YTPlayer.loop=0;
YTPlayer.opt={};
YTPlayer.state={};
YTPlayer.filters=jQuery.mbYTPlayer.filters;
YTPlayer.filtersEnabled=true;
YTPlayer.id=YTPlayer.id||"YTP_"+new Date().getTime();
$YTPlayer.addClass("mb_YTPlayer");
var property=$YTPlayer.data("property")&&typeof $YTPlayer.data("property")=="string"?eval("("+$YTPlayer.data("property")+")"):$YTPlayer.data("property");
if(typeof property!="undefined"&&typeof property.vol!="undefined"){property.vol=property.vol===0?property.vol=1:property.vol
}jQuery.extend(YTPlayer.opt,jQuery.mbYTPlayer.defaults,options,property);
if(!YTPlayer.hasChanged){YTPlayer.defaultOpt={};
jQuery.extend(YTPlayer.defaultOpt,jQuery.mbYTPlayer.defaults,options)
}if(YTPlayer.opt.loop=="true"){YTPlayer.opt.loop=9999
}YTPlayer.isRetina=(window.retina||window.devicePixelRatio>1);
var isIframe=function(){var isIfr=false;
try{if(self.location.href!=top.location.href){isIfr=true
}}catch(e){isIfr=true
}return isIfr
};
YTPlayer.canGoFullScreen=!(jQuery.browser.msie||jQuery.browser.opera||isIframe());
if(!YTPlayer.canGoFullScreen){YTPlayer.opt.realfullscreen=false
}if(!$YTPlayer.attr("id")){$YTPlayer.attr("id","video_"+new Date().getTime())
}var playerID="mbYTP_"+YTPlayer.id;
YTPlayer.isAlone=false;
YTPlayer.hasFocus=true;
YTPlayer.videoID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).videoID:$YTPlayer.attr("href")?getYTPVideoID($YTPlayer.attr("href")).videoID:false;
YTPlayer.playlistID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).playlistID:$YTPlayer.attr("href")?getYTPVideoID($YTPlayer.attr("href")).playlistID:false;
YTPlayer.opt.showAnnotations=YTPlayer.opt.showAnnotations?"0":"3";
var playerVars={modestbranding:1,autoplay:0,controls:0,showinfo:0,rel:0,enablejsapi:1,version:3,playerapiid:playerID,origin:"*",allowfullscreen:true,wmode:"transparent",iv_load_policy:YTPlayer.opt.showAnnotations};
if(document.createElement("video").canPlayType){jQuery.extend(playerVars,{html5:1})
}if(jQuery.browser.msie&&jQuery.browser.version<9){this.opt.opacity=1
}YTPlayer.isSelf=YTPlayer.opt.containment=="self";
YTPlayer.defaultOpt.containment=YTPlayer.opt.containment=YTPlayer.opt.containment=="self"?jQuery(this):jQuery(YTPlayer.opt.containment);
YTPlayer.isBackground=YTPlayer.opt.containment.is("body");
if(YTPlayer.isBackground&&ytp.backgroundIsInited){return
}var isPlayer=YTPlayer.opt.containment.is(jQuery(this));
YTPlayer.canPlayOnMobile=isPlayer&&jQuery(this).children().length===0;
YTPlayer.isPlayer=false;
if(!isPlayer){$YTPlayer.hide()
}else{YTPlayer.isPlayer=true
}var overlay=jQuery("<div/>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%"}).addClass("YTPOverlay");
if(YTPlayer.isPlayer){overlay.on("click",function(){$YTPlayer.YTPTogglePlay()
})
}var wrapper=jQuery("<div/>").addClass("mbYTP_wrapper").attr("id","wrapper_"+playerID);
wrapper.css({position:"absolute",zIndex:0,minWidth:"100%",minHeight:"100%",left:0,top:0,overflow:"hidden",opacity:0});
var playerBox=jQuery("<div/>").attr("id",playerID).addClass("playerBox");
playerBox.css({position:"absolute",zIndex:0,width:"100%",height:"100%",top:0,left:0,overflow:"hidden"});
wrapper.append(playerBox);
YTPlayer.opt.containment.children().not("script, style").each(function(){if(jQuery(this).css("position")=="static"){jQuery(this).css("position","relative")
}});
if(YTPlayer.isBackground){jQuery("body").css({boxSizing:"border-box"});
wrapper.css({position:"fixed",top:0,left:0,zIndex:0});
$YTPlayer.hide()
}else{if(YTPlayer.opt.containment.css("position")=="static"){YTPlayer.opt.containment.css({position:"relative"})
}}YTPlayer.opt.containment.prepend(wrapper);
YTPlayer.wrapper=wrapper;
playerBox.css({opacity:1});
if(!jQuery.browser.mobile){playerBox.after(overlay);
YTPlayer.overlay=overlay
}if(!YTPlayer.isBackground){overlay.on("mouseenter",function(){if(YTPlayer.controlBar.length){YTPlayer.controlBar.addClass("visible")
}}).on("mouseleave",function(){if(YTPlayer.controlBar.length){YTPlayer.controlBar.removeClass("visible")
}})
}if(!ytp.YTAPIReady){jQuery("#YTAPI").remove();
var tag=jQuery("<script><\/script>").attr({src:jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/iframe_api?v="+jQuery.mbYTPlayer.version,id:"YTAPI"});
jQuery("head").prepend(tag)
}else{setTimeout(function(){jQuery(document).trigger("YTAPIReady")
},100)
}if(jQuery.browser.mobile&&!YTPlayer.canPlayOnMobile){if(YTPlayer.opt.mobileFallbackImage){YTPlayer.opt.containment.css({backgroundImage:"url("+YTPlayer.opt.mobileFallbackImage+")",backgroundPosition:"center center",backgroundSize:"cover",backgroundRepeat:"no-repeat"})
}$YTPlayer.remove();
jQuery(document).trigger("YTPUnavailable");
return
}jQuery(document).on("YTAPIReady",function(){if((YTPlayer.isBackground&&ytp.backgroundIsInited)||YTPlayer.isInit){return
}if(YTPlayer.isBackground){ytp.backgroundIsInited=true
}YTPlayer.opt.autoPlay=typeof YTPlayer.opt.autoPlay=="undefined"?(YTPlayer.isBackground?true:false):YTPlayer.opt.autoPlay;
YTPlayer.opt.vol=YTPlayer.opt.vol?YTPlayer.opt.vol:100;
jQuery.mbYTPlayer.getDataFromAPI(YTPlayer);
jQuery(YTPlayer).on("YTPChanged",function(){if(YTPlayer.isInit){return
}YTPlayer.isInit=true;
if(jQuery.browser.mobile&&YTPlayer.canPlayOnMobile){if(YTPlayer.opt.containment.outerWidth()>jQuery(window).width()){YTPlayer.opt.containment.css({maxWidth:"100%"});
var h=YTPlayer.opt.containment.outerWidth()*0.563;
YTPlayer.opt.containment.css({maxHeight:h})
}new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),width:"100%",height:h,playerVars:playerVars,events:{onReady:function(event){YTPlayer.player=event.target;
playerBox.css({opacity:1});
YTPlayer.wrapper.css({opacity:1})
}}});
return
}new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),playerVars:playerVars,events:{onReady:function(event){YTPlayer.player=event.target;
if(YTPlayer.isReady){return
}YTPlayer.isReady=YTPlayer.isPlayer&&!YTPlayer.opt.autoPlay?false:true;
YTPlayer.playerEl=YTPlayer.player.getIframe();
jQuery(YTPlayer.playerEl).unselectable();
$YTPlayer.optimizeDisplay();
jQuery(window).off("resize.YTP_"+YTPlayer.id).on("resize.YTP_"+YTPlayer.id,function(){$YTPlayer.optimizeDisplay()
});
jQuery.mbYTPlayer.checkForState(YTPlayer)
},onStateChange:function(event){if(typeof event.target.getPlayerState!="function"){return
}var state=event.target.getPlayerState();
if(YTPlayer.preventTrigger){YTPlayer.preventTrigger=false;
return
}YTPlayer.state=state;
var eventType;
switch(state){case -1:eventType="YTPUnstarted";
break;
case 0:eventType="YTPEnd";
break;
case 1:eventType="YTPPlay";
if(YTPlayer.controlBar.length){YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause)
}if(typeof _gaq!="undefined"&&eval(YTPlayer.opt.gaTrack)){_gaq.push(["_trackEvent","YTPlayer","Play",(YTPlayer.hasData?YTPlayer.videoData.title:YTPlayer.videoID.toString())])
}if(typeof ga!="undefined"&&eval(YTPlayer.opt.gaTrack)){ga("send","event","YTPlayer","play",(YTPlayer.hasData?YTPlayer.videoData.title:YTPlayer.videoID.toString()))
}break;
case 2:eventType="YTPPause";
if(YTPlayer.controlBar.length){YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play)
}break;
case 3:YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality);
eventType="YTPBuffering";
if(YTPlayer.controlBar.length){YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play)
}break;
case 5:eventType="YTPCued";
break;
default:break
}var YTPEvent=jQuery.Event(eventType);
YTPEvent.time=YTPlayer.currentTime;
if(YTPlayer.canTrigger){jQuery(YTPlayer).trigger(YTPEvent)
}},onPlaybackQualityChange:function(e){var quality=e.target.getPlaybackQuality();
var YTPQualityChange=jQuery.Event("YTPQualityChange");
YTPQualityChange.quality=quality;
jQuery(YTPlayer).trigger(YTPQualityChange)
},onError:function(err){if(err.data==150){console.log("Embedding this video is restricted by Youtube.");
if(YTPlayer.isPlayList){jQuery(YTPlayer).playNext()
}}if(err.data==2&&YTPlayer.isPlayList){jQuery(YTPlayer).playNext()
}if(typeof YTPlayer.opt.onError=="function"){YTPlayer.opt.onError($YTPlayer,err)
}}}})
})
});
$YTPlayer.off("YTPTime.mask");
jQuery.mbYTPlayer.applyMask(YTPlayer)
})
},getDataFromAPI:function(YTPlayer){YTPlayer.videoData=jQuery.mbStorage.get("YTPlayer_data_"+YTPlayer.videoID);
jQuery(YTPlayer).off("YTPData.YTPlayer").on("YTPData.YTPlayer",function(){if(YTPlayer.hasData){if(YTPlayer.isPlayer&&!YTPlayer.opt.autoPlay){var bgndURL=YTPlayer.videoData.thumb_max||YTPlayer.videoData.thumb_high||YTPlayer.videoData.thumb_medium;
YTPlayer.opt.containment.css({background:"rgba(0,0,0,0.5) url("+bgndURL+") center center",backgroundSize:"cover"});
YTPlayer.opt.backgroundUrl=bgndURL
}}});
if(YTPlayer.videoData){setTimeout(function(){YTPlayer.opt.ratio=YTPlayer.opt.ratio=="auto"?"16/9":YTPlayer.opt.ratio;
YTPlayer.dataReceived=true;
jQuery(YTPlayer).trigger("YTPChanged");
var YTPData=jQuery.Event("YTPData");
YTPData.prop={};
for(var x in YTPlayer.videoData){YTPData.prop[x]=YTPlayer.videoData[x]
}jQuery(YTPlayer).trigger(YTPData)
},500);
YTPlayer.hasData=true
}else{if(jQuery.mbYTPlayer.apiKey){jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol+"//www.googleapis.com/youtube/v3/videos?id="+YTPlayer.videoID+"&key="+jQuery.mbYTPlayer.apiKey+"&part=snippet",function(data){YTPlayer.dataReceived=true;
jQuery(YTPlayer).trigger("YTPChanged");
function parseYTPlayer_data(data){YTPlayer.videoData={};
YTPlayer.videoData.id=YTPlayer.videoID;
YTPlayer.videoData.channelTitle=data.channelTitle;
YTPlayer.videoData.title=data.title;
YTPlayer.videoData.description=data.description.length<400?data.description:data.description.substring(0,400)+" ...";
YTPlayer.videoData.aspectratio=YTPlayer.opt.ratio=="auto"?"16/9":YTPlayer.opt.ratio;
YTPlayer.opt.ratio=YTPlayer.videoData.aspectratio;
YTPlayer.videoData.thumb_max=data.thumbnails.maxres?data.thumbnails.maxres.url:null;
YTPlayer.videoData.thumb_high=data.thumbnails.high?data.thumbnails.high.url:null;
YTPlayer.videoData.thumb_medium=data.thumbnails.medium?data.thumbnails.medium.url:null;
jQuery.mbStorage.set("YTPlayer_data_"+YTPlayer.videoID,YTPlayer.videoData)
}parseYTPlayer_data(data.items[0].snippet);
YTPlayer.hasData=true;
var YTPData=jQuery.Event("YTPData");
YTPData.prop={};
for(var x in YTPlayer.videoData){YTPData.prop[x]=YTPlayer.videoData[x]
}jQuery(YTPlayer).trigger(YTPData)
})
}else{setTimeout(function(){jQuery(YTPlayer).trigger("YTPChanged")
},50);
if(YTPlayer.isPlayer&&!YTPlayer.opt.autoPlay){var bgndURL=jQuery.mbYTPlayer.locationProtocol+"//i.ytimg.com/vi/"+YTPlayer.videoID+"/hqdefault.jpg";
YTPlayer.opt.containment.css({background:"rgba(0,0,0,0.5) url("+bgndURL+") center center",backgroundSize:"cover"});
YTPlayer.opt.backgroundUrl=bgndURL
}YTPlayer.videoData=null;
YTPlayer.opt.ratio=YTPlayer.opt.ratio=="auto"?"16/9":YTPlayer.opt.ratio
}}if(YTPlayer.isPlayer&&!YTPlayer.opt.autoPlay&&!jQuery.browser.mobile){YTPlayer.loading=jQuery("<div/>").addClass("loading").html("Loading").hide();
jQuery(YTPlayer).append(YTPlayer.loading);
YTPlayer.loading.fadeIn()
}},removeStoredData:function(){jQuery.mbStorage.remove()
},getVideoData:function(){var YTPlayer=this.get(0);
return YTPlayer.videoData
},getVideoID:function(){var YTPlayer=this.get(0);
return YTPlayer.videoID||false
},setVideoQuality:function(quality){var YTPlayer=this.get(0);
YTPlayer.player.setPlaybackQuality(quality)
},playlist:function(videos,shuffle,callback,loopList){var $YTPlayer=this;
var YTPlayer=$YTPlayer.get(0);
YTPlayer.isPlayList=true;
if(shuffle){videos=jQuery.shuffle(videos)
}if(!YTPlayer.videoID){YTPlayer.videos=videos;
YTPlayer.videoCounter=0;
YTPlayer.videoLength=videos.length;
jQuery(YTPlayer).data("property",videos[0]);
jQuery(YTPlayer).mb_YTPlayer()
}if(typeof callback=="function"){jQuery(YTPlayer).one("YTPChanged",function(){callback(YTPlayer)
})
}jQuery(YTPlayer).on("YTPEnd",function(){loopList=typeof loopList=="undefined"?true:loopList;
jQuery(YTPlayer).playNext(loopList)
});
return this
},playNext:function(loopList){var YTPlayer=this.get(0);
if(YTPlayer.checkForStartAt){clearTimeout(YTPlayer.checkForStartAt);
clearInterval(YTPlayer.getState)
}YTPlayer.videoCounter++;
if(YTPlayer.videoCounter>=YTPlayer.videoLength&&loopList){YTPlayer.videoCounter=0
}if(YTPlayer.videoCounter<YTPlayer.videoLength){jQuery(YTPlayer).changeMovie(YTPlayer.videos[YTPlayer.videoCounter])
}else{YTPlayer.videoCounter--
}return this
},playPrev:function(){var YTPlayer=this.get(0);
if(YTPlayer.checkForStartAt){clearInterval(YTPlayer.checkForStartAt);
clearInterval(YTPlayer.getState)
}YTPlayer.videoCounter--;
if(YTPlayer.videoCounter<0){YTPlayer.videoCounter=YTPlayer.videoLength-1
}jQuery(YTPlayer).changeMovie(YTPlayer.videos[YTPlayer.videoCounter]);
return this
},playIndex:function(idx){var YTPlayer=this.get(0);
idx=idx-1;
if(YTPlayer.checkForStartAt){clearInterval(YTPlayer.checkForStartAt);
clearInterval(YTPlayer.getState)
}YTPlayer.videoCounter=idx;
if(YTPlayer.videoCounter>=YTPlayer.videoLength-1){YTPlayer.videoCounter=YTPlayer.videoLength-1
}jQuery(YTPlayer).changeMovie(YTPlayer.videos[YTPlayer.videoCounter]);
return this
},changeMovie:function(opt){var $YTPlayer=this;
var YTPlayer=$YTPlayer.get(0);
YTPlayer.opt.startAt=0;
YTPlayer.opt.stopAt=0;
YTPlayer.opt.mask=false;
YTPlayer.opt.mute=true;
YTPlayer.hasData=false;
YTPlayer.hasChanged=true;
YTPlayer.player.loopTime=undefined;
if(opt){jQuery.extend(YTPlayer.opt,opt)
}YTPlayer.videoID=getYTPVideoID(YTPlayer.opt.videoURL).videoID;
if(YTPlayer.opt.loop=="true"){YTPlayer.opt.loop=9999
}jQuery(YTPlayer.playerEl).CSSAnimate({opacity:0},200,function(){var YTPChangeMovie=jQuery.Event("YTPChangeMovie");
YTPChangeMovie.time=YTPlayer.currentTime;
YTPChangeMovie.videoId=YTPlayer.videoID;
jQuery(YTPlayer).trigger(YTPChangeMovie);
jQuery(YTPlayer).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/v/"+YTPlayer.videoID),1,YTPlayer.opt.quality);
jQuery(YTPlayer).optimizeDisplay();
jQuery.mbYTPlayer.checkForState(YTPlayer);
jQuery.mbYTPlayer.getDataFromAPI(YTPlayer)
});
jQuery.mbYTPlayer.applyMask(YTPlayer)
},getPlayer:function(){return jQuery(this).get(0).player
},playerDestroy:function(){var YTPlayer=this.get(0);
ytp.YTAPIReady=true;
ytp.backgroundIsInited=false;
YTPlayer.isInit=false;
YTPlayer.videoID=null;
var playerBox=YTPlayer.wrapper;
playerBox.remove();
jQuery("#controlBar_"+YTPlayer.id).remove();
clearInterval(YTPlayer.checkForStartAt);
clearInterval(YTPlayer.getState);
return this
},fullscreen:function(real){var YTPlayer=this.get(0);
if(typeof real=="undefined"){real=YTPlayer.opt.realfullscreen
}real=eval(real);
var controls=jQuery("#controlBar_"+YTPlayer.id);
var fullScreenBtn=controls.find(".mb_OnlyYT");
var videoWrapper=YTPlayer.isSelf?YTPlayer.opt.containment:YTPlayer.wrapper;
if(real){var fullscreenchange=jQuery.browser.mozilla?"mozfullscreenchange":jQuery.browser.webkit?"webkitfullscreenchange":"fullscreenchange";
jQuery(document).off(fullscreenchange).on(fullscreenchange,function(){var isFullScreen=RunPrefixMethod(document,"IsFullScreen")||RunPrefixMethod(document,"FullScreen");
if(!isFullScreen){YTPlayer.isAlone=false;
fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT);
jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality);
videoWrapper.removeClass("YTPFullscreen");
videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},500);
videoWrapper.css({zIndex:0});
if(YTPlayer.isBackground){jQuery("body").after(controls)
}else{YTPlayer.wrapper.before(controls)
}jQuery(window).resize();
jQuery(YTPlayer).trigger("YTPFullScreenEnd")
}else{jQuery(YTPlayer).YTPSetVideoQuality("default");
jQuery(YTPlayer).trigger("YTPFullScreenStart")
}})
}if(!YTPlayer.isAlone){function hideMouse(){YTPlayer.overlay.css({cursor:"none"})
}jQuery(document).on("mousemove.YTPlayer",function(e){YTPlayer.overlay.css({cursor:"auto"});
clearTimeout(YTPlayer.hideCursor);
if(!jQuery(e.target).parents().is(".mb_YTPBar")){YTPlayer.hideCursor=setTimeout(hideMouse,3000)
}});
hideMouse();
if(real){videoWrapper.css({opacity:0});
videoWrapper.addClass("YTPFullscreen");
launchFullscreen(videoWrapper.get(0));
setTimeout(function(){videoWrapper.CSSAnimate({opacity:1},1000);
YTPlayer.wrapper.append(controls);
jQuery(YTPlayer).optimizeDisplay();
YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime()+0.1,true)
},500)
}else{videoWrapper.css({zIndex:10000}).CSSAnimate({opacity:1},1000)
}fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite);
YTPlayer.isAlone=true
}else{jQuery(document).off("mousemove.YTPlayer");
clearTimeout(YTPlayer.hideCursor);
YTPlayer.overlay.css({cursor:"auto"});
if(real){cancelFullscreen()
}else{videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},500);
videoWrapper.css({zIndex:0})
}fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT);
YTPlayer.isAlone=false
}function RunPrefixMethod(obj,method){var pfx=["webkit","moz","ms","o",""];
var p=0,m,t;
while(p<pfx.length&&!obj[m]){m=method;
if(pfx[p]==""){m=m.substr(0,1).toLowerCase()+m.substr(1)
}m=pfx[p]+m;
t=typeof obj[m];
if(t!="undefined"){pfx=[pfx[p]];
return(t=="function"?obj[m]():obj[m])
}p++
}}function launchFullscreen(element){RunPrefixMethod(element,"RequestFullScreen")
}function cancelFullscreen(){if(RunPrefixMethod(document,"FullScreen")||RunPrefixMethod(document,"IsFullScreen")){RunPrefixMethod(document,"CancelFullScreen")
}}return this
},toggleLoops:function(){var YTPlayer=this.get(0);
var data=YTPlayer.opt;
if(data.loop==1){data.loop=0
}else{if(data.startAt){YTPlayer.player.seekTo(data.startAt)
}else{YTPlayer.player.playVideo()
}data.loop=1
}return this
},play:function(){var YTPlayer=this.get(0);
if(!YTPlayer.isReady){return this
}YTPlayer.player.playVideo();
YTPlayer.wrapper.CSSAnimate({opacity:YTPlayer.isAlone?1:YTPlayer.opt.opacity},2000);
jQuery(YTPlayer.playerEl).CSSAnimate({opacity:1},1000);
var controls=jQuery("#controlBar_"+YTPlayer.id);
var playBtn=controls.find(".mb_YTPPlaypause");
playBtn.html(jQuery.mbYTPlayer.controls.pause);
YTPlayer.state=1;
jQuery(YTPlayer).css("background-image","none");
return this
},togglePlay:function(callback){var YTPlayer=this.get(0);
if(YTPlayer.state==1){this.YTPPause()
}else{this.YTPPlay()
}if(typeof callback=="function"){callback(YTPlayer.state)
}return this
},stop:function(){var YTPlayer=this.get(0);
var controls=jQuery("#controlBar_"+YTPlayer.id);
var playBtn=controls.find(".mb_YTPPlaypause");
playBtn.html(jQuery.mbYTPlayer.controls.play);
YTPlayer.player.stopVideo();
return this
},pause:function(){var YTPlayer=this.get(0);
YTPlayer.player.pauseVideo();
YTPlayer.state=2;
return this
},seekTo:function(val){var YTPlayer=this.get(0);
YTPlayer.player.seekTo(val,true);
return this
},setVolume:function(val){var YTPlayer=this.get(0);
if(!val&&!YTPlayer.opt.vol&&YTPlayer.player.getVolume()==0){jQuery(YTPlayer).YTPUnmute()
}else{if((!val&&YTPlayer.player.getVolume()>0)||(val&&YTPlayer.opt.vol==val)){if(!YTPlayer.isMute){jQuery(YTPlayer).YTPMute()
}else{jQuery(YTPlayer).YTPUnmute()
}}else{YTPlayer.opt.vol=val;
YTPlayer.player.setVolume(YTPlayer.opt.vol);
if(YTPlayer.volumeBar&&YTPlayer.volumeBar.length){YTPlayer.volumeBar.updateSliderVal(val)
}}}return this
},toggleVolume:function(){var YTPlayer=this.get(0);
if(!YTPlayer){return
}if(YTPlayer.player.isMuted()){jQuery(YTPlayer).YTPUnmute();
return true
}else{jQuery(YTPlayer).YTPMute();
return false
}},mute:function(){var YTPlayer=this.get(0);
if(YTPlayer.isMute){return
}YTPlayer.player.mute();
YTPlayer.isMute=true;
YTPlayer.player.setVolume(0);
if(YTPlayer.volumeBar&&YTPlayer.volumeBar.length&&YTPlayer.volumeBar.width()>10){YTPlayer.volumeBar.updateSliderVal(0)
}var controls=jQuery("#controlBar_"+YTPlayer.id);
var muteBtn=controls.find(".mb_YTPMuteUnmute");
muteBtn.html(jQuery.mbYTPlayer.controls.unmute);
jQuery(YTPlayer).addClass("isMuted");
if(YTPlayer.volumeBar&&YTPlayer.volumeBar.length){YTPlayer.volumeBar.addClass("muted")
}var YTPEvent=jQuery.Event("YTPMuted");
YTPEvent.time=YTPlayer.currentTime;
if(YTPlayer.canTrigger){jQuery(YTPlayer).trigger(YTPEvent)
}return this
},unmute:function(){var YTPlayer=this.get(0);
if(!YTPlayer.isMute){return
}YTPlayer.player.unMute();
YTPlayer.isMute=false;
YTPlayer.player.setVolume(YTPlayer.opt.vol);
if(YTPlayer.volumeBar&&YTPlayer.volumeBar.length){YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol>10?YTPlayer.opt.vol:10)
}var controls=jQuery("#controlBar_"+YTPlayer.id);
var muteBtn=controls.find(".mb_YTPMuteUnmute");
muteBtn.html(jQuery.mbYTPlayer.controls.mute);
jQuery(YTPlayer).removeClass("isMuted");
if(YTPlayer.volumeBar&&YTPlayer.volumeBar.length){YTPlayer.volumeBar.removeClass("muted")
}var YTPEvent=jQuery.Event("YTPUnmuted");
YTPEvent.time=YTPlayer.currentTime;
if(YTPlayer.canTrigger){jQuery(YTPlayer).trigger(YTPEvent)
}return this
},applyFilter:function(filter,value){return this.each(function(){var YTPlayer=this;
YTPlayer.filters[filter].value=value;
if(YTPlayer.filtersEnabled){jQuery(YTPlayer).YTPEnableFilters()
}})
},applyFilters:function(filters){return this.each(function(){var YTPlayer=this;
if(!YTPlayer.isReady){jQuery(YTPlayer).on("YTPReady",function(){jQuery(YTPlayer).YTPApplyFilters(filters)
});
return
}for(var key in filters){jQuery(YTPlayer).YTPApplyFilter(key,filters[key])
}jQuery(YTPlayer).trigger("YTPFiltersApplied")
})
},toggleFilter:function(filter,value){return this.each(function(){var YTPlayer=this;
if(!YTPlayer.filters[filter].value){YTPlayer.filters[filter].value=value
}else{YTPlayer.filters[filter].value=0
}if(YTPlayer.filtersEnabled){jQuery(this).YTPEnableFilters()
}})
},toggleFilters:function(callback){return this.each(function(){var YTPlayer=this;
if(YTPlayer.filtersEnabled){jQuery(YTPlayer).trigger("YTPDisableFilters");
jQuery(YTPlayer).YTPDisableFilters()
}else{jQuery(YTPlayer).YTPEnableFilters();
jQuery(YTPlayer).trigger("YTPEnableFilters")
}if(typeof callback=="function"){callback(YTPlayer.filtersEnabled)
}})
},disableFilters:function(){return this.each(function(){var YTPlayer=this;
var iframe=jQuery(YTPlayer.playerEl);
iframe.css("-webkit-filter","");
iframe.css("filter","");
YTPlayer.filtersEnabled=false
})
},enableFilters:function(){return this.each(function(){var YTPlayer=this;
var iframe=jQuery(YTPlayer.playerEl);
var filterStyle="";
for(var key in YTPlayer.filters){if(YTPlayer.filters[key].value){filterStyle+=key.replace("_","-")+"("+YTPlayer.filters[key].value+YTPlayer.filters[key].unit+") "
}}iframe.css("-webkit-filter",filterStyle);
iframe.css("filter",filterStyle);
YTPlayer.filtersEnabled=true
})
},removeFilter:function(filter,callback){return this.each(function(){var YTPlayer=this;
if(typeof filter=="function"){callback=filter;
filter=null
}if(!filter){for(var key in YTPlayer.filters){jQuery(this).YTPApplyFilter(key,0);
if(typeof callback=="function"){callback(key)
}}}else{jQuery(this).YTPApplyFilter(filter,0);
if(typeof callback=="function"){callback(filter)
}}})
},getFilters:function(){var YTPlayer=this.get(0);
return YTPlayer.filters
},addMask:function(mask){var YTPlayer=this.get(0);
var overlay=YTPlayer.overlay;
if(!mask){mask=YTPlayer.actualMask
}var tempImg=jQuery("<img/>").attr("src",mask).on("load",function(){overlay.CSSAnimate({opacity:0},500,function(){YTPlayer.hasMask=true;
tempImg.remove();
overlay.css({backgroundImage:"url("+mask+")",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover"});
overlay.CSSAnimate({opacity:1},500)
})
});
return this
},removeMask:function(){var YTPlayer=this.get(0);
var overlay=YTPlayer.overlay;
overlay.CSSAnimate({opacity:0},500,function(){YTPlayer.hasMask=false;
overlay.css({backgroundImage:"",backgroundRepeat:"",backgroundPosition:"",backgroundSize:""});
overlay.CSSAnimate({opacity:1},500)
});
return this
},applyMask:function(YTPlayer){var $YTPlayer=jQuery(YTPlayer);
$YTPlayer.off("YTPTime.mask");
if(YTPlayer.opt.mask){if(typeof YTPlayer.opt.mask=="string"){$YTPlayer.YTPAddMask(YTPlayer.opt.mask);
YTPlayer.actualMask=YTPlayer.opt.mask
}else{if(typeof YTPlayer.opt.mask=="object"){for(var time in YTPlayer.opt.mask){if(YTPlayer.opt.mask[time]){var img=jQuery("<img/>").attr("src",YTPlayer.opt.mask[time])
}}if(YTPlayer.opt.mask[0]){$YTPlayer.YTPAddMask(YTPlayer.opt.mask[0])
}$YTPlayer.on("YTPTime.mask",function(e){for(var time in YTPlayer.opt.mask){if(e.time==time){if(!YTPlayer.opt.mask[time]){$YTPlayer.YTPRemoveMask()
}else{$YTPlayer.YTPAddMask(YTPlayer.opt.mask[time]);
YTPlayer.actualMask=YTPlayer.opt.mask[time]
}}}})
}}}},toggleMask:function(){var YTPlayer=this.get(0);
var $YTPlayer=$(YTPlayer);
if(YTPlayer.hasMask){$YTPlayer.YTPRemoveMask()
}else{$YTPlayer.YTPAddMask()
}return this
},manageProgress:function(){var YTPlayer=this.get(0);
var controls=jQuery("#controlBar_"+YTPlayer.id);
var progressBar=controls.find(".mb_YTPProgress");
var loadedBar=controls.find(".mb_YTPLoaded");
var timeBar=controls.find(".mb_YTPseekbar");
var totW=progressBar.outerWidth();
var currentTime=Math.floor(YTPlayer.player.getCurrentTime());
var totalTime=Math.floor(YTPlayer.player.getDuration());
var timeW=(currentTime*totW)/totalTime;
var startLeft=0;
var loadedW=YTPlayer.player.getVideoLoadedFraction()*100;
loadedBar.css({left:startLeft,width:loadedW+"%"});
timeBar.css({left:0,width:timeW});
return{totalTime:totalTime,currentTime:currentTime}
},buildControls:function(YTPlayer){var data=YTPlayer.opt;
data.showYTLogo=data.showYTLogo||data.printUrl;
if(jQuery("#controlBar_"+YTPlayer.id).length){return
}YTPlayer.controlBar=jQuery("<span/>").attr("id","controlBar_"+YTPlayer.id).addClass("mb_YTPBar").css({whiteSpace:"noWrap",position:YTPlayer.isBackground?"fixed":"absolute",zIndex:YTPlayer.isBackground?10000:1000}).hide();
var buttonBar=jQuery("<div/>").addClass("buttonBar");
var playpause=jQuery("<span>"+jQuery.mbYTPlayer.controls.play+"</span>").addClass("mb_YTPPlaypause ytpicon").click(function(){if(YTPlayer.player.getPlayerState()==1){jQuery(YTPlayer).YTPPause()
}else{jQuery(YTPlayer).YTPPlay()
}});
var MuteUnmute=jQuery("<span>"+jQuery.mbYTPlayer.controls.mute+"</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function(){if(YTPlayer.player.getVolume()==0){jQuery(YTPlayer).YTPUnmute()
}else{jQuery(YTPlayer).YTPMute()
}});
var volumeBar=jQuery("<div/>").addClass("mb_YTPVolumeBar").css({display:"inline-block"});
YTPlayer.volumeBar=volumeBar;
var idx=jQuery("<span/>").addClass("mb_YTPTime");
var vURL=data.videoURL?data.videoURL:"";
if(vURL.indexOf("http")<0){vURL=jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/watch?v="+data.videoURL
}var movieUrl=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title","view on YouTube").on("click",function(){window.open(vURL,"viewOnYT")
});
var onlyVideo=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click",function(){jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)
});
var progressBar=jQuery("<div/>").addClass("mb_YTPProgress").css("position","absolute").click(function(e){timeBar.css({width:(e.clientX-timeBar.offset().left)});
YTPlayer.timeW=e.clientX-timeBar.offset().left;
YTPlayer.controlBar.find(".mb_YTPLoaded").css({width:0});
var totalTime=Math.floor(YTPlayer.player.getDuration());
YTPlayer._goto=(timeBar.outerWidth()*totalTime)/progressBar.outerWidth();
YTPlayer.player.seekTo(parseFloat(YTPlayer._goto),true);
YTPlayer.controlBar.find(".mb_YTPLoaded").css({width:0})
});
var loadedBar=jQuery("<div/>").addClass("mb_YTPLoaded").css("position","absolute");
var timeBar=jQuery("<div/>").addClass("mb_YTPseekbar").css("position","absolute");
progressBar.append(loadedBar).append(timeBar);
buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx);
if(data.showYTLogo){buttonBar.append(movieUrl)
}if(YTPlayer.isBackground||(eval(YTPlayer.opt.realfullscreen)&&!YTPlayer.isBackground)){buttonBar.append(onlyVideo)
}YTPlayer.controlBar.append(buttonBar).append(progressBar);
if(!YTPlayer.isBackground){YTPlayer.controlBar.addClass("inlinePlayer");
YTPlayer.wrapper.before(YTPlayer.controlBar)
}else{jQuery("body").after(YTPlayer.controlBar)
}volumeBar.simpleSlider({initialval:YTPlayer.opt.vol,scale:100,orientation:"h",callback:function(el){if(el.value==0){jQuery(YTPlayer).YTPMute()
}else{jQuery(YTPlayer).YTPUnmute()
}YTPlayer.player.setVolume(el.value);
if(!YTPlayer.isMute){YTPlayer.opt.vol=el.value
}}})
},checkForState:function(YTPlayer){var interval=YTPlayer.opt.showControls?100:400;
clearInterval(YTPlayer.getState);
if(!jQuery.contains(document,YTPlayer)){jQuery(YTPlayer).YTPPlayerDestroy();
clearInterval(YTPlayer.getState);
clearInterval(YTPlayer.checkForStartAt);
return
}jQuery.mbYTPlayer.checkForStart(YTPlayer);
YTPlayer.getState=setInterval(function(){var prog=jQuery(YTPlayer).YTPManageProgress();
var $YTPlayer=jQuery(YTPlayer);
var data=YTPlayer.opt;
var startAt=YTPlayer.opt.startAt?YTPlayer.opt.startAt:1;
var stopAt=YTPlayer.opt.stopAt>YTPlayer.opt.startAt?YTPlayer.opt.stopAt:0;
stopAt=stopAt<YTPlayer.player.getDuration()?stopAt:0;
if(YTPlayer.currentTime!=prog.currentTime){var YTPEvent=jQuery.Event("YTPTime");
YTPEvent.time=YTPlayer.currentTime;
jQuery(YTPlayer).trigger(YTPEvent)
}YTPlayer.currentTime=prog.currentTime;
YTPlayer.totalTime=YTPlayer.player.getDuration();
if(YTPlayer.player.getVolume()==0){$YTPlayer.addClass("isMuted")
}else{$YTPlayer.removeClass("isMuted")
}if(YTPlayer.opt.showControls){if(prog.totalTime){YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime)+" / "+jQuery.mbYTPlayer.formatTime(prog.totalTime))
}else{YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")
}}if(eval(YTPlayer.opt.stopMovieOnBlur)){if(!document.hasFocus()){if(YTPlayer.state==1){YTPlayer.hasFocus=false;
$YTPlayer.YTPPause()
}}else{if(document.hasFocus()&&!YTPlayer.hasFocus&&!(YTPlayer.state==-1||YTPlayer.state==0)){YTPlayer.hasFocus=true;
$YTPlayer.YTPPlay()
}}}if(YTPlayer.controlBar.length&&YTPlayer.controlBar.outerWidth()<=400&&!YTPlayer.isCompact){YTPlayer.controlBar.addClass("compact");
YTPlayer.isCompact=true;
if(!YTPlayer.isMute&&YTPlayer.volumeBar){YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)
}}else{if(YTPlayer.controlBar.length&&YTPlayer.controlBar.outerWidth()>400&&YTPlayer.isCompact){YTPlayer.controlBar.removeClass("compact");
YTPlayer.isCompact=false;
if(!YTPlayer.isMute&&YTPlayer.volumeBar){YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)
}}}if(YTPlayer.player.getPlayerState()==1&&(parseFloat(YTPlayer.player.getDuration()-1.5)<YTPlayer.player.getCurrentTime()||(stopAt>0&&parseFloat(YTPlayer.player.getCurrentTime())>stopAt))){if(YTPlayer.isEnded){return
}YTPlayer.isEnded=true;
setTimeout(function(){YTPlayer.isEnded=false
},1000);
if(YTPlayer.isPlayList){if(!data.loop||(data.loop>0&&YTPlayer.player.loopTime===data.loop-1)){YTPlayer.player.loopTime=undefined;
clearInterval(YTPlayer.getState);
var YTPEnd=jQuery.Event("YTPEnd");
YTPEnd.time=YTPlayer.currentTime;
jQuery(YTPlayer).trigger(YTPEnd);
return
}}else{if(!data.loop||(data.loop>0&&YTPlayer.player.loopTime===data.loop-1)){YTPlayer.player.loopTime=undefined;
YTPlayer.preventTrigger=true;
YTPlayer.state=2;
jQuery(YTPlayer).YTPPause();
YTPlayer.wrapper.CSSAnimate({opacity:0},500,function(){if(YTPlayer.controlBar.length){YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play)
}var YTPEnd=jQuery.Event("YTPEnd");
YTPEnd.time=YTPlayer.currentTime;
jQuery(YTPlayer).trigger(YTPEnd);
YTPlayer.player.seekTo(startAt,true);
if(!YTPlayer.isBackground){YTPlayer.opt.containment.css({background:"rgba(0,0,0,0.5) url("+YTPlayer.opt.backgroundUrl+") center center",backgroundSize:"cover"})
}});
return
}}YTPlayer.player.loopTime=YTPlayer.player.loopTime?++YTPlayer.player.loopTime:1;
startAt=startAt||1;
YTPlayer.preventTrigger=true;
YTPlayer.state=2;
jQuery(YTPlayer).YTPPause();
YTPlayer.player.seekTo(startAt,true);
$YTPlayer.YTPPlay()
}},interval)
},getTime:function(){var YTPlayer=this.get(0);
return jQuery.mbYTPlayer.formatTime(YTPlayer.currentTime)
},getTotalTime:function(){var YTPlayer=this.get(0);
return jQuery.mbYTPlayer.formatTime(YTPlayer.totalTime)
},checkForStart:function(YTPlayer){var $YTPlayer=jQuery(YTPlayer);
if(!jQuery.contains(document,YTPlayer)){jQuery(YTPlayer).YTPPlayerDestroy();
return
}YTPlayer.preventTrigger=true;
YTPlayer.state=2;
jQuery(YTPlayer).YTPPause();
jQuery(YTPlayer).muteYTPVolume();
jQuery("#controlBar_"+YTPlayer.id).remove();
YTPlayer.controlBar=false;
if(YTPlayer.opt.showControls){jQuery.mbYTPlayer.buildControls(YTPlayer)
}if(YTPlayer.opt.addRaster){var classN=YTPlayer.opt.addRaster=="dot"?"raster-dot":"raster";
YTPlayer.overlay.addClass(YTPlayer.isRetina?classN+" retina":classN)
}else{YTPlayer.overlay.removeClass(function(index,classNames){var current_classes=classNames.split(" "),classes_to_remove=[];
jQuery.each(current_classes,function(index,class_name){if(/raster.*/.test(class_name)){classes_to_remove.push(class_name)
}});
classes_to_remove.push("retina");
return classes_to_remove.join(" ")
})
}var startAt=YTPlayer.opt.startAt?YTPlayer.opt.startAt:1;
YTPlayer.player.playVideo();
YTPlayer.player.seekTo(startAt,true);
YTPlayer.checkForStartAt=setInterval(function(){jQuery(YTPlayer).YTPMute();
var canPlayVideo=YTPlayer.player.getVideoLoadedFraction()>=startAt/YTPlayer.player.getDuration();
if(YTPlayer.player.getDuration()>0&&YTPlayer.player.getCurrentTime()>=startAt&&canPlayVideo){clearInterval(YTPlayer.checkForStartAt);
if(typeof YTPlayer.opt.onReady=="function"){YTPlayer.opt.onReady(YTPlayer)
}YTPlayer.isReady=true;
var YTPready=jQuery.Event("YTPReady");
YTPready.time=YTPlayer.currentTime;
jQuery(YTPlayer).trigger(YTPready);
YTPlayer.preventTrigger=true;
YTPlayer.state=2;
jQuery(YTPlayer).YTPPause();
if(!YTPlayer.opt.mute){jQuery(YTPlayer).YTPUnmute()
}YTPlayer.canTrigger=true;
if(YTPlayer.opt.autoPlay){var YTPStart=jQuery.Event("YTPStart");
YTPStart.time=YTPlayer.currentTime;
jQuery(YTPlayer).trigger(YTPStart);
$YTPlayer.css("background-image","none");
jQuery(YTPlayer.playerEl).CSSAnimate({opacity:1},1000);
$YTPlayer.YTPPlay();
YTPlayer.wrapper.CSSAnimate({opacity:YTPlayer.isAlone?1:YTPlayer.opt.opacity},1000);
if(jQuery.browser.safari){YTPlayer.safariPlay=setInterval(function(){if(YTPlayer.state!=1){$YTPlayer.YTPPlay()
}else{clearInterval(YTPlayer.safariPlay)
}},10)
}$YTPlayer.on("YTPReady",function(){$YTPlayer.YTPPlay()
})
}else{YTPlayer.player.pauseVideo();
if(!YTPlayer.isPlayer){jQuery(YTPlayer.playerEl).CSSAnimate({opacity:1},500);
YTPlayer.wrapper.CSSAnimate({opacity:YTPlayer.isAlone?1:YTPlayer.opt.opacity},500)
}if(YTPlayer.controlBar.length){YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play)
}}if(YTPlayer.isPlayer&&!YTPlayer.opt.autoPlay&&(YTPlayer.loading&&YTPlayer.loading.length)){YTPlayer.loading.html("Ready");
setTimeout(function(){YTPlayer.loading.fadeOut()
},100)
}if(YTPlayer.controlBar&&YTPlayer.controlBar.length){YTPlayer.controlBar.slideDown(1000)
}}else{if(jQuery.browser.safari){YTPlayer.player.playVideo();
if(startAt>=0){YTPlayer.player.seekTo(startAt,true)
}}}},1)
},setAlign:function(align){var $YTplayer=this;
$YTplayer.optimizeDisplay(align)
},getAlign:function(){var YTPlayer=this.get(0);
return YTPlayer.opt.align
},formatTime:function(s){var min=Math.floor(s/60);
var sec=Math.floor(s-(60*min));
return(min<=9?"0"+min:min)+" : "+(sec<=9?"0"+sec:sec)
}};
jQuery.fn.optimizeDisplay=function(align){var YTPlayer=this.get(0);
var playerBox=jQuery(YTPlayer.playerEl);
var vid={};
YTPlayer.opt.align=align||YTPlayer.opt.align;
YTPlayer.opt.align=typeof YTPlayer.opt.align!="undefined "?YTPlayer.opt.align:"center,center";
var YTPAlign=YTPlayer.opt.align.split(",");
if(YTPlayer.opt.optimizeDisplay){var abundance=100;
var win={};
var el=YTPlayer.wrapper;
win.width=el.outerWidth();
win.height=el.outerHeight();
vid.width=win.width+abundance;
vid.height=YTPlayer.opt.ratio=="16/9"?Math.ceil(vid.width*(9/16)):Math.ceil(vid.width*(3/4));
vid.marginTop=-((vid.height-win.height)/2);
vid.marginLeft=0;
var lowest=vid.height<win.height;
if(lowest){vid.height=win.height+abundance;
vid.width=YTPlayer.opt.ratio=="16/9"?Math.floor(vid.height*(16/9)):Math.floor(vid.height*(4/3));
vid.marginTop=0;
vid.marginLeft=-((vid.width-win.width)/2)
}for(var a in YTPAlign){var al=YTPAlign[a].replace(/ /g,"");
switch(al){case"top":vid.marginTop=lowest?-((vid.height-win.height)/2):0;
break;
case"bottom":vid.marginTop=lowest?0:-(vid.height-win.height);
break;
case"left":vid.marginLeft=0;
break;
case"right":vid.marginLeft=lowest?-(vid.width-win.width):0;
break;
default:break
}}}else{vid.width="100%";
vid.height="100%";
vid.marginTop=0;
vid.marginLeft=0
}playerBox.css({width:vid.width,height:vid.height,marginTop:vid.marginTop,marginLeft:vid.marginLeft})
};
jQuery.shuffle=function(arr){var newArray=arr.slice();
var len=newArray.length;
var i=len;
while(i--){var p=parseInt(Math.random()*len);
var t=newArray[i];
newArray[i]=newArray[p];
newArray[p]=t
}return newArray
};
jQuery.fn.unselectable=function(){return this.each(function(){jQuery(this).css({"-moz-user-select":"none","-webkit-user-select":"none","user-select":"none"}).attr("unselectable","on")
})
};
jQuery.fn.YTPlayer=jQuery.mbYTPlayer.buildPlayer;
jQuery.fn.YTPGetPlayer=jQuery.mbYTPlayer.getPlayer;
jQuery.fn.YTPGetVideoID=jQuery.mbYTPlayer.getVideoID;
jQuery.fn.YTPChangeMovie=jQuery.mbYTPlayer.changeMovie;
jQuery.fn.YTPPlayerDestroy=jQuery.mbYTPlayer.playerDestroy;
jQuery.fn.YTPPlay=jQuery.mbYTPlayer.play;
jQuery.fn.YTPTogglePlay=jQuery.mbYTPlayer.togglePlay;
jQuery.fn.YTPStop=jQuery.mbYTPlayer.stop;
jQuery.fn.YTPPause=jQuery.mbYTPlayer.pause;
jQuery.fn.YTPSeekTo=jQuery.mbYTPlayer.seekTo;
jQuery.fn.YTPlaylist=jQuery.mbYTPlayer.playlist;
jQuery.fn.YTPPlayNext=jQuery.mbYTPlayer.playNext;
jQuery.fn.YTPPlayPrev=jQuery.mbYTPlayer.playPrev;
jQuery.fn.YTPPlayIndex=jQuery.mbYTPlayer.playIndex;
jQuery.fn.YTPMute=jQuery.mbYTPlayer.mute;
jQuery.fn.YTPUnmute=jQuery.mbYTPlayer.unmute;
jQuery.fn.YTPToggleVolume=jQuery.mbYTPlayer.toggleVolume;
jQuery.fn.YTPSetVolume=jQuery.mbYTPlayer.setVolume;
jQuery.fn.YTPGetVideoData=jQuery.mbYTPlayer.getVideoData;
jQuery.fn.YTPFullscreen=jQuery.mbYTPlayer.fullscreen;
jQuery.fn.YTPToggleLoops=jQuery.mbYTPlayer.toggleLoops;
jQuery.fn.YTPSetVideoQuality=jQuery.mbYTPlayer.setVideoQuality;
jQuery.fn.YTPManageProgress=jQuery.mbYTPlayer.manageProgress;
jQuery.fn.YTPApplyFilter=jQuery.mbYTPlayer.applyFilter;
jQuery.fn.YTPApplyFilters=jQuery.mbYTPlayer.applyFilters;
jQuery.fn.YTPToggleFilter=jQuery.mbYTPlayer.toggleFilter;
jQuery.fn.YTPToggleFilters=jQuery.mbYTPlayer.toggleFilters;
jQuery.fn.YTPRemoveFilter=jQuery.mbYTPlayer.removeFilter;
jQuery.fn.YTPDisableFilters=jQuery.mbYTPlayer.disableFilters;
jQuery.fn.YTPEnableFilters=jQuery.mbYTPlayer.enableFilters;
jQuery.fn.YTPGetFilters=jQuery.mbYTPlayer.getFilters;
jQuery.fn.YTPGetTime=jQuery.mbYTPlayer.getTime;
jQuery.fn.YTPGetTotalTime=jQuery.mbYTPlayer.getTotalTime;
jQuery.fn.YTPAddMask=jQuery.mbYTPlayer.addMask;
jQuery.fn.YTPRemoveMask=jQuery.mbYTPlayer.removeMask;
jQuery.fn.YTPToggleMask=jQuery.mbYTPlayer.toggleMask;
jQuery.fn.YTPSetAlign=jQuery.mbYTPlayer.setAlign;
jQuery.fn.YTPGetAlign=jQuery.mbYTPlayer.getAlign;
jQuery.fn.mb_YTPlayer=jQuery.mbYTPlayer.buildPlayer;
jQuery.fn.playNext=jQuery.mbYTPlayer.playNext;
jQuery.fn.playPrev=jQuery.mbYTPlayer.playPrev;
jQuery.fn.changeMovie=jQuery.mbYTPlayer.changeMovie;
jQuery.fn.getVideoID=jQuery.mbYTPlayer.getVideoID;
jQuery.fn.getPlayer=jQuery.mbYTPlayer.getPlayer;
jQuery.fn.playerDestroy=jQuery.mbYTPlayer.playerDestroy;
jQuery.fn.fullscreen=jQuery.mbYTPlayer.fullscreen;
jQuery.fn.buildYTPControls=jQuery.mbYTPlayer.buildControls;
jQuery.fn.playYTP=jQuery.mbYTPlayer.play;
jQuery.fn.toggleLoops=jQuery.mbYTPlayer.toggleLoops;
jQuery.fn.stopYTP=jQuery.mbYTPlayer.stop;
jQuery.fn.pauseYTP=jQuery.mbYTPlayer.pause;
jQuery.fn.seekToYTP=jQuery.mbYTPlayer.seekTo;
jQuery.fn.muteYTPVolume=jQuery.mbYTPlayer.mute;
jQuery.fn.unmuteYTPVolume=jQuery.mbYTPlayer.unmute;
jQuery.fn.setYTPVolume=jQuery.mbYTPlayer.setVolume;
jQuery.fn.setVideoQuality=jQuery.mbYTPlayer.setVideoQuality;
jQuery.fn.manageYTPProgress=jQuery.mbYTPlayer.manageProgress;
jQuery.fn.YTPGetDataFromFeed=jQuery.mbYTPlayer.getVideoData
})(jQuery,ytp);
function uncamel(a){return a.replace(/([A-Z])/g,function(b){return"-"+b.toLowerCase()
})
}function setUnit(b,a){return"string"!=typeof b||b.match(/^[\-0-9\.]+jQuery/)?""+b+a:b
}function setFilter(d,b,c){var a=uncamel(b),f=jQuery.browser.mozilla?"":jQuery.CSS.sfx;
d[f+"filter"]=d[f+"filter"]||"",c=setUnit(c>jQuery.CSS.filters[b].max?jQuery.CSS.filters[b].max:c,jQuery.CSS.filters[b].unit),d[f+"filter"]+=a+"("+c+") ",delete d[b]
}jQuery.support.CSStransition=function(){var b=document.body||document.documentElement,a=b.style;
return void 0!==a.transition||void 0!==a.WebkitTransition||void 0!==a.MozTransition||void 0!==a.MsTransition||void 0!==a.OTransition
}(),jQuery.CSS={name:"mb.CSSAnimate",author:"Matteo Bicocchi",version:"2.0.0",transitionEnd:"transitionEnd",sfx:"",filters:{blur:{min:0,max:100,unit:"px"},brightness:{min:0,max:400,unit:"%"},contrast:{min:0,max:400,unit:"%"},grayscale:{min:0,max:100,unit:"%"},hueRotate:{min:0,max:360,unit:"deg"},invert:{min:0,max:100,unit:"%"},saturate:{min:0,max:400,unit:"%"},sepia:{min:0,max:100,unit:"%"}},normalizeCss:function(d){var b=jQuery.extend(!0,{},d);
jQuery.browser.webkit||jQuery.browser.opera?jQuery.CSS.sfx="-webkit-":jQuery.browser.mozilla?jQuery.CSS.sfx="-moz-":jQuery.browser.msie&&(jQuery.CSS.sfx="-ms-");
for(var c in b){"transform"===c&&(b[jQuery.CSS.sfx+"transform"]=b[c],delete b[c]),"transform-origin"===c&&(b[jQuery.CSS.sfx+"transform-origin"]=d[c],delete b[c]),"filter"!==c||jQuery.browser.mozilla||(b[jQuery.CSS.sfx+"filter"]=d[c],delete b[c]),"blur"===c&&setFilter(b,"blur",d[c]),"brightness"===c&&setFilter(b,"brightness",d[c]),"contrast"===c&&setFilter(b,"contrast",d[c]),"grayscale"===c&&setFilter(b,"grayscale",d[c]),"hueRotate"===c&&setFilter(b,"hueRotate",d[c]),"invert"===c&&setFilter(b,"invert",d[c]),"saturate"===c&&setFilter(b,"saturate",d[c]),"sepia"===c&&setFilter(b,"sepia",d[c]);
var a="";
"x"===c&&(a=jQuery.CSS.sfx+"transform",b[a]=b[a]||"",b[a]+=" translateX("+setUnit(d[c],"px")+")",delete b[c]),"y"===c&&(a=jQuery.CSS.sfx+"transform",b[a]=b[a]||"",b[a]+=" translateY("+setUnit(d[c],"px")+")",delete b[c]),"z"===c&&(a=jQuery.CSS.sfx+"transform",b[a]=b[a]||"",b[a]+=" translateZ("+setUnit(d[c],"px")+")",delete b[c]),"rotate"===c&&(a=jQuery.CSS.sfx+"transform",b[a]=b[a]||"",b[a]+=" rotate("+setUnit(d[c],"deg")+")",delete b[c]),"rotateX"===c&&(a=jQuery.CSS.sfx+"transform",b[a]=b[a]||"",b[a]+=" rotateX("+setUnit(d[c],"deg")+")",delete b[c]),"rotateY"===c&&(a=jQuery.CSS.sfx+"transform",b[a]=b[a]||"",b[a]+=" rotateY("+setUnit(d[c],"deg")+")",delete b[c]),"rotateZ"===c&&(a=jQuery.CSS.sfx+"transform",b[a]=b[a]||"",b[a]+=" rotateZ("+setUnit(d[c],"deg")+")",delete b[c]),"scale"===c&&(a=jQuery.CSS.sfx+"transform",b[a]=b[a]||"",b[a]+=" scale("+setUnit(d[c],"")+")",delete b[c]),"scaleX"===c&&(a=jQuery.CSS.sfx+"transform",b[a]=b[a]||"",b[a]+=" scaleX("+setUnit(d[c],"")+")",delete b[c]),"scaleY"===c&&(a=jQuery.CSS.sfx+"transform",b[a]=b[a]||"",b[a]+=" scaleY("+setUnit(d[c],"")+")",delete b[c]),"scaleZ"===c&&(a=jQuery.CSS.sfx+"transform",b[a]=b[a]||"",b[a]+=" scaleZ("+setUnit(d[c],"")+")",delete b[c]),"skew"===c&&(a=jQuery.CSS.sfx+"transform",b[a]=b[a]||"",b[a]+=" skew("+setUnit(d[c],"deg")+")",delete b[c]),"skewX"===c&&(a=jQuery.CSS.sfx+"transform",b[a]=b[a]||"",b[a]+=" skewX("+setUnit(d[c],"deg")+")",delete b[c]),"skewY"===c&&(a=jQuery.CSS.sfx+"transform",b[a]=b[a]||"",b[a]+=" skewY("+setUnit(d[c],"deg")+")",delete b[c]),"perspective"===c&&(a=jQuery.CSS.sfx+"transform",b[a]=b[a]||"",b[a]+=" perspective("+setUnit(d[c],"px")+")",delete b[c])
}return b
},getProp:function(c){var a=[];
for(var b in c){a.indexOf(b)<0&&a.push(uncamel(b))
}return a.join(",")
},animate:function(d,b,c,a,f){return this.each(function(){function t(){r.called=!0,r.CSSAIsRunning=!1,q.off(jQuery.CSS.transitionEnd+"."+r.id),clearTimeout(r.timeout),q.css(jQuery.CSS.sfx+"transition",""),"function"==typeof f&&f.apply(r),"function"==typeof r.CSSqueue&&(r.CSSqueue(),r.CSSqueue=null)
}var r=this,q=jQuery(this);
r.id=r.id||"CSSA_"+(new Date).getTime();
var e=e||{type:"noEvent"};
if(r.CSSAIsRunning&&r.eventType==e.type&&!jQuery.browser.msie&&jQuery.browser.version<=9){return void (r.CSSqueue=function(){q.CSSAnimate(d,b,c,a,f)
})
}if(r.CSSqueue=null,r.eventType=e.type,0!==q.length&&d){if(d=jQuery.normalizeCss(d),r.CSSAIsRunning=!0,"function"==typeof b&&(f=b,b=jQuery.fx.speeds._default),"function"==typeof c&&(a=c,c=0),"string"==typeof c&&(f=c,c=0),"function"==typeof a&&(f=a,a="cubic-bezier(0.65,0.03,0.36,0.72)"),"string"==typeof b){for(var j in jQuery.fx.speeds){if(b==j){b=jQuery.fx.speeds[j];
break
}b=jQuery.fx.speeds._default
}}if(b||(b=jQuery.fx.speeds._default),"string"==typeof f&&(a=f,f=null),!jQuery.support.CSStransition){for(var n in d){if("transform"===n&&delete d[n],"filter"===n&&delete d[n],"transform-origin"===n&&delete d[n],"auto"===d[n]&&delete d[n],"x"===n){var i=d[n],h="left";
d[h]=i,delete d[n]
}if("y"===n){var i=d[n],h="top";
d[h]=i,delete d[n]
}("-ms-transform"===n||"-ms-filter"===n)&&delete d[n]
}return void q.delay(c).animate(d,b,f)
}var p={"default":"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};
p[a]&&(a=p[a]),q.off(jQuery.CSS.transitionEnd+"."+r.id);
var g=jQuery.CSS.getProp(d),k={};
jQuery.extend(k,d),k[jQuery.CSS.sfx+"transition-property"]=g,k[jQuery.CSS.sfx+"transition-duration"]=b+"ms",k[jQuery.CSS.sfx+"transition-delay"]=c+"ms",k[jQuery.CSS.sfx+"transition-timing-function"]=a,setTimeout(function(){q.one(jQuery.CSS.transitionEnd+"."+r.id,t),q.css(k)
},1),r.timeout=setTimeout(function(){return r.called||!f?(r.called=!1,void (r.CSSAIsRunning=!1)):(q.css(jQuery.CSS.sfx+"transition",""),f.apply(r),r.CSSAIsRunning=!1,void ("function"==typeof r.CSSqueue&&(r.CSSqueue(),r.CSSqueue=null)))
},b+c+10)
}})
}},jQuery.fn.CSSAnimate=jQuery.CSS.animate,jQuery.normalizeCss=jQuery.CSS.normalizeCss,jQuery.fn.css3=function(a){return this.each(function(){var b=jQuery(this),c=jQuery.normalizeCss(a);
b.css(c)
})
};
var nAgt=navigator.userAgent;
if(!jQuery.browser){jQuery.browser={},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.safari=!1,jQuery.browser.chrome=!1,jQuery.browser.androidStock=!1,jQuery.browser.msie=!1,jQuery.browser.ua=nAgt,jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);
var nameOffset,verOffset,ix;
if(-1!=(verOffset=nAgt.indexOf("Opera"))){jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))
}else{if(-1!=(verOffset=nAgt.indexOf("OPR"))){jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+4)
}else{if(-1!=(verOffset=nAgt.indexOf("MSIE"))){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5)
}else{if(-1!=nAgt.indexOf("Trident")||-1!=nAgt.indexOf("Edge")){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer";
var start=nAgt.indexOf("rv:")+3,end=start+4;
jQuery.browser.fullVersion=nAgt.substring(start,end)
}else{-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):nAgt.indexOf("mozilla/5.0")>-1&&nAgt.indexOf("android ")>-1&&nAgt.indexOf("applewebkit")>-1&&!(nAgt.indexOf("chrome")>-1)?(verOffset=nAgt.indexOf("Chrome"),jQuery.browser.webkit=!0,jQuery.browser.androidStock=!0,jQuery.browser.name="androidStock",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName))
}}}}-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion
}jQuery.browser.android=/Android/i.test(nAgt),jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt),jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt),jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt),jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt),jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt),jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle,jQuery.isMobile=jQuery.browser.mobile,jQuery.isTablet=jQuery.browser.mobile&&jQuery(window).width()>765,jQuery.isAndroidDefault=jQuery.browser.android&&!/chrome/i.test(nAgt);
var nAgt=navigator.userAgent;
if(!jQuery.browser){jQuery.browser={},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.safari=!1,jQuery.browser.chrome=!1,jQuery.browser.androidStock=!1,jQuery.browser.msie=!1,jQuery.browser.ua=nAgt,jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);
var nameOffset,verOffset,ix;
if(-1!=(verOffset=nAgt.indexOf("Opera"))){jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))
}else{if(-1!=(verOffset=nAgt.indexOf("OPR"))){jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+4)
}else{if(-1!=(verOffset=nAgt.indexOf("MSIE"))){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5)
}else{if(-1!=nAgt.indexOf("Trident")||-1!=nAgt.indexOf("Edge")){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer";
var start=nAgt.indexOf("rv:")+3,end=start+4;
jQuery.browser.fullVersion=nAgt.substring(start,end)
}else{-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):nAgt.indexOf("mozilla/5.0")>-1&&nAgt.indexOf("android ")>-1&&nAgt.indexOf("applewebkit")>-1&&!(nAgt.indexOf("chrome")>-1)?(verOffset=nAgt.indexOf("Chrome"),jQuery.browser.webkit=!0,jQuery.browser.androidStock=!0,jQuery.browser.name="androidStock",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName))
}}}}-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion
}jQuery.browser.android=/Android/i.test(nAgt),jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt),jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt),jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt),jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt),jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt),jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle,jQuery.isMobile=jQuery.browser.mobile,jQuery.isTablet=jQuery.browser.mobile&&jQuery(window).width()>765,jQuery.isAndroidDefault=jQuery.browser.android&&!/chrome/i.test(nAgt);
(function(a){a.simpleSlider={defaults:{initialval:0,scale:100,orientation:"h",readonly:!1,callback:!1},events:{start:a.browser.mobile?"touchstart":"mousedown",end:a.browser.mobile?"touchend":"mouseup",move:a.browser.mobile?"touchmove":"mousemove"},init:function(b){return this.each(function(){var c=this,g=a(c);
g.addClass("simpleSlider");
c.opt={};
a.extend(c.opt,a.simpleSlider.defaults,b);
a.extend(c.opt,g.data());
var f="h"==c.opt.orientation?"horizontal":"vertical",f=a("<div/>").addClass("level").addClass(f);
g.prepend(f);
c.level=f;
g.css({cursor:"default"});
"auto"==c.opt.scale&&(c.opt.scale=a(c).outerWidth());
g.updateSliderVal();
c.opt.readonly||(g.on(a.simpleSlider.events.start,function(d){a.browser.mobile&&(d=d.changedTouches[0]);
c.canSlide=!0;
g.updateSliderVal(d);
"h"==c.opt.orientation?g.css({cursor:"col-resize"}):g.css({cursor:"row-resize"});
d.preventDefault();
d.stopPropagation()
}),a(document).on(a.simpleSlider.events.move,function(d){a.browser.mobile&&(d=d.changedTouches[0]);
c.canSlide&&(a(document).css({cursor:"default"}),g.updateSliderVal(d),d.preventDefault(),d.stopPropagation())
}).on(a.simpleSlider.events.end,function(){a(document).css({cursor:"auto"});
c.canSlide=!1;
g.css({cursor:"auto"})
}))
})
},updateSliderVal:function(h){var b=this.get(0);
if(b.opt){b.opt.initialval="number"==typeof b.opt.initialval?b.opt.initialval:b.opt.initialval(b);
var g=a(b).outerWidth(),f=a(b).outerHeight();
b.x="object"==typeof h?h.clientX+document.body.scrollLeft-this.offset().left:"number"==typeof h?h*g/b.opt.scale:b.opt.initialval*g/b.opt.scale;
b.y="object"==typeof h?h.clientY+document.body.scrollTop-this.offset().top:"number"==typeof h?(b.opt.scale-b.opt.initialval-h)*f/b.opt.scale:b.opt.initialval*f/b.opt.scale;
b.y=this.outerHeight()-b.y;
b.scaleX=b.x*b.opt.scale/g;
b.scaleY=b.y*b.opt.scale/f;
b.outOfRangeX=b.scaleX>b.opt.scale?b.scaleX-b.opt.scale:0>b.scaleX?b.scaleX:0;
b.outOfRangeY=b.scaleY>b.opt.scale?b.scaleY-b.opt.scale:0>b.scaleY?b.scaleY:0;
b.outOfRange="h"==b.opt.orientation?b.outOfRangeX:b.outOfRangeY;
b.value="undefined"!=typeof h?"h"==b.opt.orientation?b.x>=this.outerWidth()?b.opt.scale:0>=b.x?0:b.scaleX:b.y>=this.outerHeight()?b.opt.scale:0>=b.y?0:b.scaleY:"h"==b.opt.orientation?b.scaleX:b.scaleY;
"h"==b.opt.orientation?b.level.width(Math.floor(100*b.x/g)+"%"):b.level.height(Math.floor(100*b.y/f));
"function"==typeof b.opt.callback&&b.opt.callback(b)
}}};
a.fn.simpleSlider=a.simpleSlider.init;
a.fn.updateSliderVal=a.simpleSlider.updateSliderVal
})(jQuery);
!function(b){b.mbCookie={set:function(h,g,l,k){g=JSON.stringify(g),l||(l=7),k=k?"; domain="+k:"";
var i,j=new Date;
j.setTime(j.getTime()+1000*60*60*24*l),i="; expires="+j.toGMTString(),document.cookie=h+"="+g+i+"; path=/"+k
},get:function(g){for(var f=g+"=",j=document.cookie.split(";"),i=0;
i<j.length;
i++){for(var h=j[i];
" "==h.charAt(0);
){h=h.substring(1,h.length)
}if(0==h.indexOf(f)){return JSON.parse(h.substring(f.length,h.length))
}}return null
},remove:function(a){b.mbCookie.set(a,"",-1)
}},b.mbStorage={set:function(d,c){c=JSON.stringify(c),localStorage.setItem(d,c)
},get:function(c){return localStorage[c]?JSON.parse(localStorage[c]):null
},remove:function(c){c?localStorage.removeItem(c):localStorage.clear()
}}
}(jQuery);
(function(j,d){if(j.fn.dotdotdot){return
}j.fn.dotdotdot=function(x){if(this.length==0){j.fn.dotdotdot.debug('No element found for "'+this.selector+'".');
return this
}if(this.length>1){return this.each(function(){j(this).dotdotdot(x)
})
}var t=this;
var y=t.contents();
if(t.data("dotdotdot")){t.trigger("destroy.dot")
}t.data("dotdotdot-style",t.attr("style")||"");
t.css("word-wrap","break-word");
if(t.css("white-space")==="nowrap"){t.css("white-space","normal")
}t.bind_events=function(){t.bind("update.dot",function(A,C){t.removeClass("is-truncated");
A.preventDefault();
A.stopPropagation();
switch(typeof v.height){case"number":v.maxHeight=v.height;
break;
case"function":v.maxHeight=v.height.call(t[0]);
break;
default:v.maxHeight=q(t);
break
}v.maxHeight+=v.tolerance;
if(typeof C!="undefined"){if(typeof C=="string"||("nodeType" in C&&C.nodeType===1)){C=j("<div />").append(C).contents()
}if(C instanceof j){y=C
}}u=t.wrapInner('<div class="dotdotdot" />').children();
u.contents().detach().end().append(y.clone(true)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});
var B=false,z=false;
if(s.afterElement){B=s.afterElement.clone(true);
B.show();
s.afterElement.detach()
}if(m(u,v)){if(v.wrap=="children"){z=c(u,v,B)
}else{z=o(u,t,u,v,B)
}}u.replaceWith(u.contents());
u=null;
if(j.isFunction(v.callback)){v.callback.call(t[0],z,y)
}s.isTruncated=z;
return z
}).bind("isTruncated.dot",function(A,z){A.preventDefault();
A.stopPropagation();
if(typeof z=="function"){z.call(t[0],s.isTruncated)
}return s.isTruncated
}).bind("originalContent.dot",function(A,z){A.preventDefault();
A.stopPropagation();
if(typeof z=="function"){z.call(t[0],y)
}return y
}).bind("destroy.dot",function(z){z.preventDefault();
z.stopPropagation();
t.unwatch().unbind_events().contents().detach().end().append(y).attr("style",t.data("dotdotdot-style")||"").removeClass("is-truncated").data("dotdotdot",false)
});
return t
};
t.unbind_events=function(){t.unbind(".dot");
return t
};
t.watch=function(){t.unwatch();
if(v.watch=="window"){var B=j(window),A=B.width(),z=B.height();
B.bind("resize.dot"+s.dotId,function(){if(A!=B.width()||z!=B.height()||!v.windowResizeFix){A=B.width();
z=B.height();
if(r){clearInterval(r)
}r=setTimeout(function(){t.trigger("update.dot")
},100)
}})
}else{w=l(t);
r=setInterval(function(){if(t.is(":visible")){var C=l(t);
if(w.width!=C.width||w.height!=C.height){t.trigger("update.dot");
w=C
}}},500)
}return t
};
t.unwatch=function(){j(window).unbind("resize.dot"+s.dotId);
if(r){clearInterval(r)
}return t
};
var v=j.extend(true,{},j.fn.dotdotdot.defaults,x),s={},w={},r=null,u=null;
if(!(v.lastCharacter.remove instanceof Array)){v.lastCharacter.remove=j.fn.dotdotdot.defaultArrays.lastCharacter.remove
}if(!(v.lastCharacter.noEllipsis instanceof Array)){v.lastCharacter.noEllipsis=j.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis
}s.afterElement=b(v.after,t);
s.isTruncated=false;
s.dotId=n++;
t.data("dotdotdot",true).bind_events().trigger("update.dot");
if(v.watch){t.watch()
}return t
};
j.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:true,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:false,windowResizeFix:true};
j.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","\u3000",",",";",".","!","?"],noEllipsis:[]}};
j.fn.dotdotdot.debug=function(r){};
var n=1;
function c(u,y,x){var w=u.children(),r=false;
u.empty();
for(var t=0,s=w.length;
t<s;
t++){var v=w.eq(t);
u.append(v);
if(x){u.append(x)
}if(m(u,y)){v.remove();
r=true;
break
}else{if(x){x.detach()
}}}return r
}function o(s,t,y,x,w){var r=false;
var v="a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style";
var u="script, .dotdotdot-keep";
s.contents().detach().each(function(){var A=this,z=j(A);
if(typeof A=="undefined"){return true
}else{if(z.is(u)){s.append(z)
}else{if(r){return true
}else{s.append(z);
if(w&&!z.is(x.after)&&!z.find(x.after).length){s[s.is(v)?"after":"append"](w)
}if(m(y,x)){if(A.nodeType==3){r=e(z,t,y,x,w)
}else{r=o(z,t,y,x,w)
}}if(!r){if(w){w.detach()
}}}}}});
t.addClass("is-truncated");
return r
}function e(s,t,r,A,u){var E=s[0];
if(!E){return false
}var x=i(E),F=(x.indexOf(" ")!==-1)?" ":"\u3000",v=(A.wrap=="letter")?"":F,w=x.split(v),H=-1,z=-1,I=0,C=w.length-1;
if(A.fallbackToLetter&&I==0&&C==0){v="";
w=x.split(v);
C=w.length-1
}while(I<=C&&!(I==0&&C==0)){var B=Math.floor((I+C)/2);
if(B==z){break
}z=B;
a(E,w.slice(0,z+1).join(v)+A.ellipsis);
r.children().each(function(){j(this).toggle().toggle()
});
if(!m(r,A)){H=z;
I=z
}else{C=z;
if(A.fallbackToLetter&&I==0&&C==0){v="";
w=w[0].split(v);
H=-1;
z=-1;
I=0;
C=w.length-1
}}}if(H!=-1&&!(w.length==1&&w[0].length==0)){x=g(w.slice(0,H+1).join(v),A);
a(E,x)
}else{var D=s.parent();
s.detach();
var G=(u&&u.closest(D).length)?u.length:0;
if(D.contents().length>G){E=f(D.contents().eq(-1-G),t)
}else{E=f(D,t,true);
if(!G){D.detach()
}}if(E){x=g(i(E),A);
a(E,x);
if(G&&u){var y=u.parent();
j(E).parent().append(u);
if(!j.trim(y.html())){y.remove()
}}}}return true
}function m(s,r){return s.innerHeight()>r.maxHeight
}function g(r,s){while(j.inArray(r.slice(-1),s.lastCharacter.remove)>-1){r=r.slice(0,-1)
}if(j.inArray(r.slice(-1),s.lastCharacter.noEllipsis)<0){r+=s.ellipsis
}return r
}function l(r){return{width:r.innerWidth(),height:r.innerHeight()}
}function a(s,r){if(s.innerText){s.innerText=r
}else{if(s.nodeValue){s.nodeValue=r
}else{if(s.textContent){s.textContent=r
}}}}function i(r){if(r.innerText){return r.innerText
}else{if(r.nodeValue){return r.nodeValue
}else{if(r.textContent){return r.textContent
}else{return""
}}}}function k(r){do{r=r.previousSibling
}while(r&&r.nodeType!==1&&r.nodeType!==3);
return r
}function f(s,v,r){var u=s&&s[0],t;
if(u){if(!r){if(u.nodeType===3){return u
}if(j.trim(s.text())){return f(s.contents().last(),v)
}}t=k(u);
while(!t){s=s.parent();
if(s.is(v)||!s.length){return false
}t=k(s[0])
}if(t){return f(j(t),v)
}}return false
}function b(r,s){if(!r){return false
}if(typeof r==="string"){r=j(r,s);
return(r.length)?r:false
}return !r.jquery?false:r
}function q(u){var v=u.innerHeight(),t=["paddingTop","paddingBottom"];
for(var w=0,s=t.length;
w<s;
w++){var r=parseInt(u.css(t[w]),10);
if(isNaN(r)){r=0
}v-=r
}return v
}var p=j.fn.html;
j.fn.html=function(r){if(r!=d&&!j.isFunction(r)&&this.data("dotdotdot")){return this.trigger("update",[r])
}return p.apply(this,arguments)
};
var h=j.fn.text;
j.fn.text=function(r){if(r!=d&&!j.isFunction(r)&&this.data("dotdotdot")){r=j("<div />").text(r).html();
return this.trigger("update",[r])
}return h.apply(this,arguments)
}
})(jQuery);
jQuery(document).ready(function(a){a(".dot-ellipsis").each(function(){var f=a(this).hasClass("dot-resize-update");
var d=a(this).hasClass("dot-timer-update");
var c=0;
var e=a(this).attr("class").split(/\s+/);
a.each(e,function(h,i){var g=i.match(/^dot-height-(\d+)$/);
if(g!==null){c=Number(g[1])
}});
var b=new Object();
if(d){b.watch=true
}if(f){b.watch="window"
}if(c>0){b.height=c
}a(this).dotdotdot(b)
})
});
jQuery(window).on("load",function(){jQuery(".dot-ellipsis.dot-load-update").trigger("update.dot")
});
/*!
 * Masonry PACKAGED v4.1.1
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
;
!function(a,b){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(c){return b(a,c)
}):"object"==typeof module&&module.exports?module.exports=b(a,require("jquery")):a.jQueryBridget=b(a,a.jQuery)
}(window,function(b,f){function a(k,m,e){function l(i,q,u){var s,p="$()."+k+'("'+q+'")';
return i.each(function(r,v){var o=e.data(v,k);
if(!o){return void c(k+" not initialized. Cannot call methods, i.e. "+p)
}var w=o[q];
if(!w||"_"==q.charAt(0)){return void c(p+" is not a valid method")
}var n=w.apply(o,u);
s=void 0===s?n:s
}),void 0!==s?s:i
}function j(i,n){i.each(function(p,r){var q=e.data(r,k);
q?(q.option(n),q._init()):(q=new m(r,n),e.data(r,k,q))
})
}e=e||f||b.jQuery,e&&(m.prototype.option||(m.prototype.option=function(i){e.isPlainObject(i)&&(this.options=e.extend(!0,this.options,i))
}),e.fn[k]=function(i){if("string"==typeof i){var n=g.call(arguments,1);
return l(this,i,n)
}return j(this,i),this
},h(e))
}function h(e){!e||e&&e.bridget||(e.bridget=a)
}var g=Array.prototype.slice,d=b.console,c="undefined"==typeof d?function(){}:function(e){d.error(e)
};
return h(f||b.jQuery),a
}),function(a,b){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",b):"object"==typeof module&&module.exports?module.exports=b():a.EvEmitter=b()
}("undefined"!=typeof window?window:this,function(){function a(){}var b=a.prototype;
return b.on=function(d,f){if(d&&f){var c=this._events=this._events||{},g=c[d]=c[d]||[];
return -1==g.indexOf(f)&&g.push(f),this
}},b.once=function(d,f){if(d&&f){this.on(d,f);
var c=this._onceEvents=this._onceEvents||{},g=c[d]=c[d]||{};
return g[f]=!0,this
}},b.off=function(d,f){var c=this._events&&this._events[d];
if(c&&c.length){var g=c.indexOf(f);
return -1!=g&&c.splice(g,1),this
}},b.emitEvent=function(d,h){var c=this._events&&this._events[d];
if(c&&c.length){var k=0,j=c[k];
h=h||[];
for(var g=this._onceEvents&&this._onceEvents[d];
j;
){var f=g&&g[j];
f&&(this.off(d,j),delete g[j]),j.apply(this,h),k+=f?0:1,j=c[k]
}return this
}},a
}),function(a,b){"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return b()
}):"object"==typeof module&&module.exports?module.exports=b():a.getSize=b()
}(window,function(){function q(d){var h=parseFloat(d),a=-1==d.indexOf("%")&&!isNaN(h);
return a&&h
}function k(){}function g(){for(var d={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},h=0;
p>h;
h++){var a=j[h];
d[a]=0
}return d
}function f(a){var d=getComputedStyle(a);
return d||m("Style returned "+d+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),d
}function c(){if(!l){l=!0;
var d=document.createElement("div");
d.style.width="200px",d.style.padding="1px 2px 3px 4px",d.style.borderStyle="solid",d.style.borderWidth="1px 2px 3px 4px",d.style.boxSizing="border-box";
var a=document.body||document.documentElement;
a.appendChild(d);
var h=f(d);
b.isBoxSizeOuter=v=200==q(h.width),a.removeChild(d)
}}function b(u){if(c(),"string"==typeof u&&(u=document.querySelector(u)),u&&"object"==typeof u&&u.nodeType){var h=f(u);
if("none"==h.display){return g()
}var G={};
G.width=u.offsetWidth,G.height=u.offsetHeight;
for(var w=G.isBorderBox="border-box"==h.boxSizing,o=0;
p>o;
o++){var B=j[o],t=h[B],n=parseFloat(t);
G[B]=isNaN(n)?0:n
}var i=G.paddingLeft+G.paddingRight,s=G.paddingTop+G.paddingBottom,D=G.marginLeft+G.marginRight,I=G.marginTop+G.marginBottom,H=G.borderLeftWidth+G.borderRightWidth,J=G.borderTopWidth+G.borderBottomWidth,A=w&&v,C=q(h.width);
C!==!1&&(G.width=C+(A?0:i+H));
var F=q(h.height);
return F!==!1&&(G.height=F+(A?0:s+J)),G.innerWidth=G.width-(i+H),G.innerHeight=G.height-(s+J),G.outerWidth=G.width+D,G.outerHeight=G.height+I,G
}}var v,m="undefined"==typeof console?k:function(a){console.error(a)
},j=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],p=j.length,l=!1;
return b
}),function(a,b){"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",b):"object"==typeof module&&module.exports?module.exports=b():a.matchesSelector=b()
}(window,function(){var a=function(){var c=Element.prototype;
if(c.matches){return"matches"
}if(c.matchesSelector){return"matchesSelector"
}for(var d=["webkit","moz","ms","o"],b=0;
b<d.length;
b++){var g=d[b],f=g+"MatchesSelector";
if(c[f]){return f
}}}();
return function(c,b){return c[a](b)
}
}),function(a,b){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(c){return b(a,c)
}):"object"==typeof module&&module.exports?module.exports=b(a,require("desandro-matches-selector")):a.fizzyUIUtils=b(a,a.matchesSelector)
}(window,function(b,c){var a={};
a.extend=function(g,h){for(var f in h){g[f]=h[f]
}return g
},a.modulo=function(f,g){return(f%g+g)%g
},a.makeArray=function(g){var h=[];
if(Array.isArray(g)){h=g
}else{if(g&&"number"==typeof g.length){for(var f=0;
f<g.length;
f++){h.push(g[f])
}}else{h.push(g)
}}return h
},a.removeFrom=function(g,h){var f=g.indexOf(h);
-1!=f&&g.splice(f,1)
},a.getParent=function(f,e){for(;
f!=document.body;
){if(f=f.parentNode,c(f,e)){return f
}}},a.getQueryElement=function(e){return"string"==typeof e?document.querySelector(e):e
},a.handleEvent=function(f){var g="on"+f.type;
this[g]&&this[g](f)
},a.filterFindElements=function(e,g){e=a.makeArray(e);
var f=[];
return e.forEach(function(j){if(j instanceof HTMLElement){if(!g){return void f.push(j)
}c(j,g)&&f.push(j);
for(var h=j.querySelectorAll(g),k=0;
k<h.length;
k++){f.push(h[k])
}}}),f
},a.debounceMethod=function(g,h,f){var k=g.prototype[h],j=h+"Timeout";
g.prototype[h]=function(){var i=this[j];
i&&clearTimeout(i);
var m=arguments,l=this;
this[j]=setTimeout(function(){k.apply(l,m),delete l[j]
},f||100)
}
},a.docReady=function(f){var g=document.readyState;
"complete"==g||"interactive"==g?f():document.addEventListener("DOMContentLoaded",f)
},a.toDashed=function(e){return e.replace(/(.)([A-Z])/g,function(g,h,f){return h+"-"+f
}).toLowerCase()
};
var d=b.console;
return a.htmlInit=function(f,g){a.docReady(function(){var n=a.toDashed(g),m="data-"+n,i=document.querySelectorAll("["+m+"]"),k=document.querySelectorAll(".js-"+n),j=a.makeArray(i).concat(a.makeArray(k)),o=m+"-options",e=b.jQuery;
j.forEach(function(q){var p,u=q.getAttribute(m)||q.getAttribute(o);
try{p=u&&JSON.parse(u)
}catch(l){return void (d&&d.error("Error parsing "+m+" on "+q.className+": "+l))
}var s=new f(q,p);
e&&e.data(q,g,s)
})
})
},a
}),function(a,b){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],b):"object"==typeof module&&module.exports?module.exports=b(require("ev-emitter"),require("get-size")):(a.Outlayer={},a.Outlayer.Item=b(a.EvEmitter,a.getSize))
}(window,function(A,v){function m(a){for(var c in a){return !1
}return c=null,!0
}function j(a,c){a&&(this.element=a,this.layout=c,this.position={x:0,y:0},this._create())
}function g(a){return a.replace(/([A-Z])/g,function(c){return"-"+c.toLowerCase()
})
}var b=document.documentElement.style,B="string"==typeof b.transition?"transition":"WebkitTransition",y="string"==typeof b.transform?"transform":"WebkitTransform",p={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[B],z={transform:y,transition:B,transitionDuration:B+"Duration",transitionProperty:B+"Property",transitionDelay:B+"Delay"},w=j.prototype=Object.create(A.prototype);
w.constructor=j,w._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})
},w.handleEvent=function(a){var c="on"+a.type;
this[c]&&this[c](a)
},w.getSize=function(){this.size=v(this.element)
},w.css=function(c){var d=this.element.style;
for(var a in c){var f=z[a]||a;
d[f]=c[a]
}},w.getPosition=function(){var f=getComputedStyle(this.element),u=this.layout._getOption("originLeft"),d=this.layout._getOption("originTop"),D=f[u?"left":"right"],C=f[d?"top":"bottom"],l=this.layout.size,h=-1!=D.indexOf("%")?parseFloat(D)/100*l.width:parseInt(D,10),c=-1!=C.indexOf("%")?parseFloat(C)/100*l.height:parseInt(C,10);
h=isNaN(h)?0:h,c=isNaN(c)?0:c,h-=u?l.paddingLeft:l.paddingRight,c-=d?l.paddingTop:l.paddingBottom,this.position.x=h,this.position.y=c
},w.layoutPosition=function(){var K=this.layout.size,G={},E=this.layout._getOption("originLeft"),C=this.layout._getOption("originTop"),f=E?"paddingLeft":"paddingRight",c=E?"left":"right",L=E?"right":"left",I=this.position.x+K[f];
G[c]=this.getXValue(I),G[L]="";
var F=C?"paddingTop":"paddingBottom",J=C?"top":"bottom",H=C?"bottom":"top",D=this.position.y+K[F];
G[J]=this.getYValue(D),G[H]="",this.css(G),this.emitEvent("layout",[this])
},w.getXValue=function(a){var c=this.layout._getOption("horizontal");
return this.layout.options.percentPosition&&!c?a/this.layout.size.width*100+"%":a+"px"
},w.getYValue=function(a){var c=this.layout._getOption("horizontal");
return this.layout.options.percentPosition&&c?a/this.layout.size.height*100+"%":a+"px"
},w._transitionTo=function(G,D){this.getPosition();
var l=this.position.x,f=this.position.y,d=parseInt(G,10),c=parseInt(D,10),H=d===this.position.x&&c===this.position.y;
if(this.setPosition(G,D),H&&!this.isTransitioning){return void this.layoutPosition()
}var E=G-l,C=D-f,F={};
F.transform=this.getTranslate(E,C),this.transition({to:F,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})
},w.getTranslate=function(c,d){var a=this.layout._getOption("originLeft"),f=this.layout._getOption("originTop");
return c=a?c:-c,d=f?d:-d,"translate3d("+c+"px, "+d+"px, 0)"
},w.goTo=function(a,c){this.setPosition(a,c),this.layoutPosition()
},w.moveTo=w._transitionTo,w.setPosition=function(a,c){this.position.x=parseInt(a,10),this.position.y=parseInt(c,10)
},w._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);
for(var c in a.onTransitionEnd){a.onTransitionEnd[c].call(this)
}},w.transition=function(c){if(!parseFloat(this.layout.options.transitionDuration)){return void this._nonTransition(c)
}var d=this._transn;
for(var a in c.onTransitionEnd){d.onEnd[a]=c.onTransitionEnd[a]
}for(a in c.to){d.ingProperties[a]=!0,c.isCleaning&&(d.clean[a]=!0)
}if(c.from){this.css(c.from);
var f=this.element.offsetHeight;
f=null
}this.enableTransition(c.to),this.css(c.to),this.isTransitioning=!0
};
var k="opacity,"+g(y);
w.enableTransition=function(){if(!this.isTransitioning){var a=this.layout.options.transitionDuration;
a="number"==typeof a?a+"ms":a,this.css({transitionProperty:k,transitionDuration:a,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(p,this,!1)
}},w.onwebkitTransitionEnd=function(a){this.ontransitionend(a)
},w.onotransitionend=function(a){this.ontransitionend(a)
};
var x={"-webkit-transform":"transform"};
w.ontransitionend=function(a){if(a.target===this.element){var c=this._transn,f=x[a.propertyName]||a.propertyName;
if(delete c.ingProperties[f],m(c.ingProperties)&&this.disableTransition(),f in c.clean&&(this.element.style[a.propertyName]="",delete c.clean[f]),f in c.onEnd){var d=c.onEnd[f];
d.call(this),delete c.onEnd[f]
}this.emitEvent("transitionEnd",[this])
}},w.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(p,this,!1),this.isTransitioning=!1
},w._removeStyles=function(c){var d={};
for(var a in c){d[a]=""
}this.css(d)
};
var q={transitionProperty:"",transitionDuration:"",transitionDelay:""};
return w.removeTransitionStyles=function(){this.css(q)
},w.stagger=function(a){a=isNaN(a)?0:a,this.staggerDelay=a+"ms"
},w.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])
},w.remove=function(){return B&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()
}),void this.hide()):void this.removeElem()
},w.reveal=function(){delete this.isHidden,this.css({display:""});
var c=this.layout.options,d={},a=this.getHideRevealTransitionEndProperty("visibleStyle");
d[a]=this.onRevealTransitionEnd,this.transition({from:c.hiddenStyle,to:c.visibleStyle,isCleaning:!0,onTransitionEnd:d})
},w.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")
},w.getHideRevealTransitionEndProperty=function(c){var d=this.layout.options[c];
if(d.opacity){return"opacity"
}for(var a in d){return a
}},w.hide=function(){this.isHidden=!0,this.css({display:""});
var c=this.layout.options,d={},a=this.getHideRevealTransitionEndProperty("hiddenStyle");
d[a]=this.onHideTransitionEnd,this.transition({from:c.visibleStyle,to:c.hiddenStyle,isCleaning:!0,onTransitionEnd:d})
},w.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))
},w.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})
},j
}),function(a,b){"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(c,f,e,d){return b(a,c,f,e,d)
}):"object"==typeof module&&module.exports?module.exports=b(a,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.EvEmitter,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)
}(window,function(C,x,q,j,g){function b(c,f){var a=j.getQueryElement(c);
if(!a){return void (v&&v.error("Bad element for "+this.constructor.namespace+": "+(a||c)))
}this.element=a,B&&(this.$element=B(this.element)),this.options=j.extend({},this.constructor.defaults),this.option(f);
var h=++p;
this.element.outlayerGUID=h,z[h]=this,this._create();
var d=this._getOption("initLayout");
d&&this.layout()
}function D(a){function c(){a.apply(this,arguments)
}return c.prototype=Object.create(a.prototype),c.prototype.constructor=c,c
}function A(c){if("number"==typeof c){return c
}var d=c.match(/(^\d*\.?\d*)(\w*)/),a=d&&d[1],h=d&&d[2];
if(!a.length){return 0
}a=parseFloat(a);
var f=k[h]||1;
return a*f
}var v=C.console,B=C.jQuery,y=function(){},p=0,z={};
b.namespace="outlayer",b.Item=g,b.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};
var w=b.prototype;
j.extend(w,x.prototype),w.option=function(a){j.extend(this.options,a)
},w._getOption=function(a){var c=this.constructor.compatOptions[a];
return c&&void 0!==this.options[c]?this.options[c]:this.options[a]
},b.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},w._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),j.extend(this.element.style,this.options.containerStyle);
var a=this._getOption("resize");
a&&this.bindResize()
},w.reloadItems=function(){this.items=this._itemize(this.element.children)
},w._itemize=function(c){for(var h=this._filterFindItemElements(c),a=this.constructor.Item,m=[],l=0;
l<h.length;
l++){var f=h[l],d=new a(f,this);
m.push(d)
}return m
},w._filterFindItemElements=function(a){return j.filterFindElements(a,this.options.itemSelector)
},w.getItemElements=function(){return this.items.map(function(a){return a.element
})
},w.layout=function(){this._resetLayout(),this._manageStamps();
var a=this._getOption("layoutInstant"),c=void 0!==a?a:!this._isLayoutInited;
this.layoutItems(this.items,c),this._isLayoutInited=!0
},w._init=w.layout,w._resetLayout=function(){this.getSize()
},w.getSize=function(){this.size=q(this.element)
},w._getMeasurement=function(a,c){var f,d=this.options[a];
d?("string"==typeof d?f=this.element.querySelector(d):d instanceof HTMLElement&&(f=d),this[a]=f?q(f)[c]:d):this[a]=0
},w.layoutItems=function(a,c){a=this._getItemsForLayout(a),this._layoutItems(a,c),this._postLayout()
},w._getItemsForLayout=function(a){return a.filter(function(c){return !c.isIgnored
})
},w._layoutItems=function(c,d){if(this._emitCompleteOnItems("layout",c),c&&c.length){var a=[];
c.forEach(function(e){var f=this._getItemLayoutPosition(e);
f.item=e,f.isInstant=d||e.isLayoutInstant,a.push(f)
},this),this._processLayoutQueue(a)
}},w._getItemLayoutPosition=function(){return{x:0,y:0}
},w._processLayoutQueue=function(a){this.updateStagger(),a.forEach(function(c,d){this._positionItem(c.item,c.x,c.y,c.isInstant,d)
},this)
},w.updateStagger=function(){var a=this.options.stagger;
return null===a||void 0===a?void (this.stagger=0):(this.stagger=A(a),this.stagger)
},w._positionItem=function(c,d,a,h,f){h?c.goTo(d,a):(c.stagger(f*this.stagger),c.moveTo(d,a))
},w._postLayout=function(){this.resizeContainer()
},w.resizeContainer=function(){var a=this._getOption("resizeContainer");
if(a){var c=this._getContainerSize();
c&&(this._setContainerMeasure(c.width,!0),this._setContainerMeasure(c.height,!1))
}},w._getContainerSize=y,w._setContainerMeasure=function(c,d){if(void 0!==c){var a=this.size;
a.isBorderBox&&(c+=d?a.paddingLeft+a.paddingRight+a.borderLeftWidth+a.borderRightWidth:a.paddingBottom+a.paddingTop+a.borderTopWidth+a.borderBottomWidth),c=Math.max(c,0),this.element.style[d?"width":"height"]=c+"px"
}},w._emitCompleteOnItems=function(c,h){function a(){l.dispatchEvent(c+"Complete",null,[h])
}function m(){d++,d==f&&a()
}var l=this,f=h.length;
if(!h||!f){return void a()
}var d=0;
h.forEach(function(i){i.once(c,m)
})
},w.dispatchEvent=function(c,d,a){var h=d?[d].concat(a):a;
if(this.emitEvent(c,h),B){if(this.$element=this.$element||B(this.element),d){var f=B.Event(d);
f.type=c,this.$element.trigger(f,a)
}else{this.$element.trigger(c,a)
}}},w.ignore=function(a){var c=this.getItem(a);
c&&(c.isIgnored=!0)
},w.unignore=function(a){var c=this.getItem(a);
c&&delete c.isIgnored
},w.stamp=function(a){a=this._find(a),a&&(this.stamps=this.stamps.concat(a),a.forEach(this.ignore,this))
},w.unstamp=function(a){a=this._find(a),a&&a.forEach(function(c){j.removeFrom(this.stamps,c),this.unignore(c)
},this)
},w._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=j.makeArray(a)):void 0
},w._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))
},w._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),c=this.size;
this._boundingRect={left:a.left+c.paddingLeft+c.borderLeftWidth,top:a.top+c.paddingTop+c.borderTopWidth,right:a.right-(c.paddingRight+c.borderRightWidth),bottom:a.bottom-(c.paddingBottom+c.borderBottomWidth)}
},w._manageStamp=y,w._getElementOffset=function(a){var d=a.getBoundingClientRect(),h=this._boundingRect,f=q(a),c={left:d.left-h.left-f.marginLeft,top:d.top-h.top-f.marginTop,right:h.right-d.right-f.marginRight,bottom:h.bottom-d.bottom-f.marginBottom};
return c
},w.handleEvent=j.handleEvent,w.bindResize=function(){C.addEventListener("resize",this),this.isResizeBound=!0
},w.unbindResize=function(){C.removeEventListener("resize",this),this.isResizeBound=!1
},w.onresize=function(){this.resize()
},j.debounceMethod(b,"onresize",100),w.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()
},w.needsResizeLayout=function(){var a=q(this.element),c=this.size&&a;
return c&&a.innerWidth!==this.size.innerWidth
},w.addItems=function(a){var c=this._itemize(a);
return c.length&&(this.items=this.items.concat(c)),c
},w.appended=function(a){var c=this.addItems(a);
c.length&&(this.layoutItems(c,!0),this.reveal(c))
},w.prepended=function(c){var d=this._itemize(c);
if(d.length){var a=this.items.slice(0);
this.items=d.concat(a),this._resetLayout(),this._manageStamps(),this.layoutItems(d,!0),this.reveal(d),this.layoutItems(a)
}},w.reveal=function(a){if(this._emitCompleteOnItems("reveal",a),a&&a.length){var c=this.updateStagger();
a.forEach(function(e,d){e.stagger(d*c),e.reveal()
})
}},w.hide=function(a){if(this._emitCompleteOnItems("hide",a),a&&a.length){var c=this.updateStagger();
a.forEach(function(e,d){e.stagger(d*c),e.hide()
})
}},w.revealItemElements=function(a){var c=this.getItems(a);
this.reveal(c)
},w.hideItemElements=function(a){var c=this.getItems(a);
this.hide(c)
},w.getItem=function(c){for(var d=0;
d<this.items.length;
d++){var a=this.items[d];
if(a.element==c){return a
}}},w.getItems=function(a){a=j.makeArray(a);
var c=[];
return a.forEach(function(e){var d=this.getItem(e);
d&&c.push(d)
},this),c
},w.remove=function(a){var c=this.getItems(a);
this._emitCompleteOnItems("remove",c),c&&c.length&&c.forEach(function(d){d.remove(),j.removeFrom(this.items,d)
},this)
},w.destroy=function(){var a=this.element.style;
a.height="",a.position="",a.width="",this.items.forEach(function(d){d.destroy()
}),this.unbindResize();
var c=this.element.outlayerGUID;
delete z[c],delete this.element.outlayerGUID,B&&B.removeData(this.element,this.constructor.namespace)
},b.data=function(a){a=j.getQueryElement(a);
var c=a&&a.outlayerGUID;
return c&&z[c]
},b.create=function(c,d){var a=D(b);
return a.defaults=j.extend({},b.defaults),j.extend(a.defaults,d),a.compatOptions=j.extend({},b.compatOptions),a.namespace=c,a.data=b.data,a.Item=D(g),j.htmlInit(a,c),B&&B.bridget&&B.bridget(c,a),a
};
var k={ms:1,s:1000};
return b.Item=g,b
}),function(a,b){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],b):"object"==typeof module&&module.exports?module.exports=b(require("outlayer"),require("get-size")):a.Masonry=b(a.Outlayer,a.getSize)
}(window,function(b,c){var a=b.create("masonry");
return a.compatOptions.fitWidth="isFitWidth",a.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];
for(var d=0;
d<this.cols;
d++){this.colYs.push(0)
}this.maxY=0
},a.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var f=this.items[0],e=f&&f.element;
this.columnWidth=e&&c(e).outerWidth||this.containerWidth
}var k=this.columnWidth+=this.gutter,j=this.containerWidth+this.gutter,h=j/k,g=k-j%k,d=g&&1>g?"round":"floor";
h=Math[d](h),this.cols=Math.max(h,1)
},a.prototype.getContainerWidth=function(){var e=this._getOption("fitWidth"),d=e?this.element.parentNode:this.element,f=c(d);
this.containerWidth=f&&f.innerWidth
},a.prototype._getItemLayoutPosition=function(w){w.getSize();
var m=w.size.outerWidth%this.columnWidth,k=m&&1>m?"round":"ceil",j=Math[k](w.size.outerWidth/this.columnWidth);
j=Math.min(j,this.cols);
for(var g=this._getColGroup(j),f=Math.min.apply(Math,g),x=g.indexOf(f),q={x:this.columnWidth*x,y:f},l=f+w.size.outerHeight,v=this.cols+1-g.length,p=0;
v>p;
p++){this.colYs[x+p]=l
}return q
},a.prototype._getColGroup=function(f){if(2>f){return this.colYs
}for(var g=[],d=this.cols+1-f,j=0;
d>j;
j++){var h=this.colYs.slice(j,j+f);
g[j]=Math.max.apply(Math,h)
}return g
},a.prototype._manageStamp=function(w){var k=c(w),g=this._getElementOffset(w),f=this._getOption("originLeft"),e=f?g.left:g.right,x=e+k.outerWidth,q=Math.floor(e/this.columnWidth);
q=Math.max(0,q);
var m=Math.floor(x/this.columnWidth);
m-=x%this.columnWidth?0:1,m=Math.min(this.cols-1,m);
for(var v=this._getOption("originTop"),p=(v?g.top:g.bottom)+k.outerHeight,j=q;
m>=j;
j++){this.colYs[j]=Math.max(p,this.colYs[j])
}},a.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);
var d={height:this.maxY};
return this._getOption("fitWidth")&&(d.width=this._getContainerFitWidth()),d
},a.prototype._getContainerFitWidth=function(){for(var d=0,f=this.cols;
--f&&0===this.colYs[f];
){d++
}return(this.cols-d)*this.columnWidth-this.gutter
},a.prototype.needsResizeLayout=function(){var d=this.containerWidth;
return this.getContainerWidth(),d!=this.containerWidth
},a
});
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{if(typeof exports!=="undefined"){module.exports=a(require("jquery"))
}else{a(jQuery)
}}}(function(a){var b=window.Slick||{};
b=(function(){var c=0;
function d(g,h){var f=this,e;
f.defaults={accessibility:true,adaptiveHeight:false,appendArrows:a(g),appendDots:a(g),arrows:true,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:false,autoplaySpeed:3000,centerMode:false,centerPadding:"50px",cssEase:"ease",customPaging:function(k,j){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(j+1)
},dots:false,dotsClass:"slick-dots",draggable:true,easing:"linear",edgeFriction:0.35,fade:false,focusOnSelect:false,infinite:true,initialSlide:0,lazyLoad:"ondemand",mobileFirst:false,pauseOnHover:true,pauseOnFocus:true,pauseOnDotsHover:false,respondTo:"window",responsive:null,rows:1,rtl:false,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:true,swipeToSlide:false,touchMove:true,touchThreshold:5,useCSS:true,useTransform:true,variableWidth:false,vertical:false,verticalSwiping:false,waitForAnimate:true,zIndex:1000};
f.initials={animating:false,dragging:false,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:false,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:false,unslicked:false};
a.extend(f,f.initials);
f.activeBreakpoint=null;
f.animType=null;
f.animProp=null;
f.breakpoints=[];
f.breakpointSettings=[];
f.cssTransitions=false;
f.focussed=false;
f.interrupted=false;
f.hidden="hidden";
f.paused=true;
f.positionProp=null;
f.respondTo=null;
f.rowCount=1;
f.shouldClick=true;
f.$slider=a(g);
f.$slidesCache=null;
f.transformType=null;
f.transitionType=null;
f.visibilityChange="visibilitychange";
f.windowWidth=0;
f.windowTimer=null;
e=a(g).data("slick")||{};
f.options=a.extend({},f.defaults,h,e);
f.currentSlide=f.options.initialSlide;
f.originalSettings=f.options;
if(typeof document.mozHidden!=="undefined"){f.hidden="mozHidden";
f.visibilityChange="mozvisibilitychange"
}else{if(typeof document.webkitHidden!=="undefined"){f.hidden="webkitHidden";
f.visibilityChange="webkitvisibilitychange"
}}f.autoPlay=a.proxy(f.autoPlay,f);
f.autoPlayClear=a.proxy(f.autoPlayClear,f);
f.autoPlayIterator=a.proxy(f.autoPlayIterator,f);
f.changeSlide=a.proxy(f.changeSlide,f);
f.clickHandler=a.proxy(f.clickHandler,f);
f.selectHandler=a.proxy(f.selectHandler,f);
f.setPosition=a.proxy(f.setPosition,f);
f.swipeHandler=a.proxy(f.swipeHandler,f);
f.dragHandler=a.proxy(f.dragHandler,f);
f.keyHandler=a.proxy(f.keyHandler,f);
f.instanceUid=c++;
f.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;
f.registerBreakpoints();
f.init(true)
}return d
}());
b.prototype.activateADA=function(){var c=this;
c.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})
};
b.prototype.addSlide=b.prototype.slickAdd=function(c,e,f){var d=this;
if(typeof(e)==="boolean"){f=e;
e=null
}else{if(e<0||(e>=d.slideCount)){return false
}}d.unload();
if(typeof(e)==="number"){if(e===0&&d.$slides.length===0){a(c).appendTo(d.$slideTrack)
}else{if(f){a(c).insertBefore(d.$slides.eq(e))
}else{a(c).insertAfter(d.$slides.eq(e))
}}}else{if(f===true){a(c).prependTo(d.$slideTrack)
}else{a(c).appendTo(d.$slideTrack)
}}d.$slides=d.$slideTrack.children(this.options.slide);
d.$slideTrack.children(this.options.slide).detach();
d.$slideTrack.append(d.$slides);
d.$slides.each(function(g,h){a(h).attr("data-slick-index",g)
});
d.$slidesCache=d.$slides;
d.reinit()
};
b.prototype.animateHeight=function(){var d=this;
if(d.options.slidesToShow===1&&d.options.adaptiveHeight===true&&d.options.vertical===false){var c=d.$slides.eq(d.currentSlide).outerHeight(true);
d.$list.animate({height:c},d.options.speed)
}};
b.prototype.animateSlide=function(f,e){var d={},c=this;
c.animateHeight();
if(c.options.rtl===true&&c.options.vertical===false){f=-f
}if(c.transformsEnabled===false){if(c.options.vertical===false){c.$slideTrack.animate({left:f},c.options.speed,c.options.easing,e)
}else{c.$slideTrack.animate({top:f},c.options.speed,c.options.easing,e)
}}else{if(c.cssTransitions===false){if(c.options.rtl===true){c.currentLeft=-(c.currentLeft)
}a({animStart:c.currentLeft}).animate({animStart:f},{duration:c.options.speed,easing:c.options.easing,step:function(g){g=Math.ceil(g);
if(c.options.vertical===false){d[c.animType]="translate("+g+"px, 0px)";
c.$slideTrack.css(d)
}else{d[c.animType]="translate(0px,"+g+"px)";
c.$slideTrack.css(d)
}},complete:function(){if(e){e.call()
}}})
}else{c.applyTransition();
f=Math.ceil(f);
if(c.options.vertical===false){d[c.animType]="translate3d("+f+"px, 0px, 0px)"
}else{d[c.animType]="translate3d(0px,"+f+"px, 0px)"
}c.$slideTrack.css(d);
if(e){setTimeout(function(){c.disableTransition();
e.call()
},c.options.speed)
}}}};
b.prototype.getNavTarget=function(){var d=this,c=d.options.asNavFor;
if(c&&c!==null){c=a(c).not(d.$slider)
}return c
};
b.prototype.asNavFor=function(e){var d=this,c=d.getNavTarget();
if(c!==null&&typeof c==="object"){c.each(function(){var f=a(this).slick("getSlick");
if(!f.unslicked){f.slideHandler(e,true)
}})
}};
b.prototype.applyTransition=function(c){var d=this,e={};
if(d.options.fade===false){e[d.transitionType]=d.transformType+" "+d.options.speed+"ms "+d.options.cssEase
}else{e[d.transitionType]="opacity "+d.options.speed+"ms "+d.options.cssEase
}if(d.options.fade===false){d.$slideTrack.css(e)
}else{d.$slides.eq(c).css(e)
}};
b.prototype.autoPlay=function(){var c=this;
c.autoPlayClear();
if(c.slideCount>c.options.slidesToShow){c.autoPlayTimer=setInterval(c.autoPlayIterator,c.options.autoplaySpeed)
}};
b.prototype.autoPlayClear=function(){var c=this;
if(c.autoPlayTimer){clearInterval(c.autoPlayTimer)
}};
b.prototype.autoPlayIterator=function(){var c=this,d=c.currentSlide+c.options.slidesToScroll;
if(!c.paused&&!c.interrupted&&!c.focussed){if(c.options.infinite===false){if(c.direction===1&&(c.currentSlide+1)===(c.slideCount-1)){c.direction=0
}else{if(c.direction===0){d=c.currentSlide-c.options.slidesToScroll;
if(c.currentSlide-1===0){c.direction=1
}}}}c.slideHandler(d)
}};
b.prototype.buildArrows=function(){var c=this;
if(c.options.arrows===true){c.$prevArrow=a(c.options.prevArrow).addClass("slick-arrow");
c.$nextArrow=a(c.options.nextArrow).addClass("slick-arrow");
if(c.slideCount>c.options.slidesToShow){c.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
c.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
if(c.htmlExpr.test(c.options.prevArrow)){c.$prevArrow.prependTo(c.options.appendArrows)
}if(c.htmlExpr.test(c.options.nextArrow)){c.$nextArrow.appendTo(c.options.appendArrows)
}if(c.options.infinite!==true){c.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")
}}else{c.$prevArrow.add(c.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"})
}}};
b.prototype.buildDots=function(){var d=this,e,c;
if(d.options.dots===true&&d.slideCount>d.options.slidesToShow){d.$slider.addClass("slick-dotted");
c=a("<ul />").addClass(d.options.dotsClass);
for(e=0;
e<=d.getDotCount();
e+=1){c.append(a("<li />").append(d.options.customPaging.call(this,d,e)))
}d.$dots=c.appendTo(d.options.appendDots);
d.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")
}};
b.prototype.buildOut=function(){var c=this;
c.$slides=c.$slider.children(c.options.slide+":not(.slick-cloned)").addClass("slick-slide");
c.slideCount=c.$slides.length;
c.$slides.each(function(d,e){a(e).attr("data-slick-index",d).data("originalStyling",a(e).attr("style")||"")
});
c.$slider.addClass("slick-slider");
c.$slideTrack=(c.slideCount===0)?a('<div class="slick-track"/>').appendTo(c.$slider):c.$slides.wrapAll('<div class="slick-track"/>').parent();
c.$list=c.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
c.$slideTrack.css("opacity",0);
if(c.options.centerMode===true||c.options.swipeToSlide===true){c.options.slidesToScroll=1
}a("img[data-lazy]",c.$slider).not("[src]").addClass("slick-loading");
c.setupInfinite();
c.buildArrows();
c.buildDots();
c.updateDots();
c.setSlideClasses(typeof c.currentSlide==="number"?c.currentSlide:0);
if(c.options.draggable===true){c.$list.addClass("draggable")
}};
b.prototype.buildRows=function(){var m=this,l,k,i,d,j,h,e;
d=document.createDocumentFragment();
h=m.$slider.children();
if(m.options.rows>1){e=m.options.slidesPerRow*m.options.rows;
j=Math.ceil(h.length/e);
for(l=0;
l<j;
l++){var f=document.createElement("div");
for(k=0;
k<m.options.rows;
k++){var n=document.createElement("div");
for(i=0;
i<m.options.slidesPerRow;
i++){var g=(l*e+((k*m.options.slidesPerRow)+i));
if(h.get(g)){n.appendChild(h.get(g))
}}f.appendChild(n)
}d.appendChild(f)
}m.$slider.empty().append(d);
m.$slider.children().children().children().css({width:(100/m.options.slidesPerRow)+"%",display:"inline-block"})
}};
b.prototype.checkResponsive=function(h,j){var k=this,i,c,e,f=false;
var g=k.$slider.width();
var d=window.innerWidth||a(window).width();
if(k.respondTo==="window"){e=d
}else{if(k.respondTo==="slider"){e=g
}else{if(k.respondTo==="min"){e=Math.min(d,g)
}}}if(k.options.responsive&&k.options.responsive.length&&k.options.responsive!==null){c=null;
for(i in k.breakpoints){if(k.breakpoints.hasOwnProperty(i)){if(k.originalSettings.mobileFirst===false){if(e<k.breakpoints[i]){c=k.breakpoints[i]
}}else{if(e>k.breakpoints[i]){c=k.breakpoints[i]
}}}}if(c!==null){if(k.activeBreakpoint!==null){if(c!==k.activeBreakpoint||j){k.activeBreakpoint=c;
if(k.breakpointSettings[c]==="unslick"){k.unslick(c)
}else{k.options=a.extend({},k.originalSettings,k.breakpointSettings[c]);
if(h===true){k.currentSlide=k.options.initialSlide
}k.refresh(h)
}f=c
}}else{k.activeBreakpoint=c;
if(k.breakpointSettings[c]==="unslick"){k.unslick(c)
}else{k.options=a.extend({},k.originalSettings,k.breakpointSettings[c]);
if(h===true){k.currentSlide=k.options.initialSlide
}k.refresh(h)
}f=c
}}else{if(k.activeBreakpoint!==null){k.activeBreakpoint=null;
k.options=k.originalSettings;
if(h===true){k.currentSlide=k.options.initialSlide
}k.refresh(h);
f=c
}}if(!h&&f!==false){k.$slider.trigger("breakpoint",[k,f])
}}};
b.prototype.changeSlide=function(g,j){var e=this,c=a(g.currentTarget),i,f,h;
if(c.is("a")){g.preventDefault()
}if(!c.is("li")){c=c.closest("li")
}h=(e.slideCount%e.options.slidesToScroll!==0);
i=h?0:(e.slideCount-e.currentSlide)%e.options.slidesToScroll;
switch(g.data.message){case"previous":f=i===0?e.options.slidesToScroll:e.options.slidesToShow-i;
if(e.slideCount>e.options.slidesToShow){e.slideHandler(e.currentSlide-f,false,j)
}break;
case"next":f=i===0?e.options.slidesToScroll:i;
if(e.slideCount>e.options.slidesToShow){e.slideHandler(e.currentSlide+f,false,j)
}break;
case"index":var d=g.data.index===0?0:g.data.index||c.index()*e.options.slidesToScroll;
e.slideHandler(e.checkNavigable(d),false,j);
c.children().trigger("focus");
break;
default:return
}};
b.prototype.checkNavigable=function(d){var c=this,e,f;
e=c.getNavigableIndexes();
f=0;
if(d>e[e.length-1]){d=e[e.length-1]
}else{for(var g in e){if(d<e[g]){d=f;
break
}f=e[g]
}}return d
};
b.prototype.cleanUpEvents=function(){var c=this;
if(c.options.dots&&c.$dots!==null){a("li",c.$dots).off("click.slick",c.changeSlide).off("mouseenter.slick",a.proxy(c.interrupt,c,true)).off("mouseleave.slick",a.proxy(c.interrupt,c,false))
}c.$slider.off("focus.slick blur.slick");
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow&&c.$prevArrow.off("click.slick",c.changeSlide);
c.$nextArrow&&c.$nextArrow.off("click.slick",c.changeSlide)
}c.$list.off("touchstart.slick mousedown.slick",c.swipeHandler);
c.$list.off("touchmove.slick mousemove.slick",c.swipeHandler);
c.$list.off("touchend.slick mouseup.slick",c.swipeHandler);
c.$list.off("touchcancel.slick mouseleave.slick",c.swipeHandler);
c.$list.off("click.slick",c.clickHandler);
a(document).off(c.visibilityChange,c.visibility);
c.cleanUpSlideEvents();
if(c.options.accessibility===true){c.$list.off("keydown.slick",c.keyHandler)
}if(c.options.focusOnSelect===true){a(c.$slideTrack).children().off("click.slick",c.selectHandler)
}a(window).off("orientationchange.slick.slick-"+c.instanceUid,c.orientationChange);
a(window).off("resize.slick.slick-"+c.instanceUid,c.resize);
a("[draggable!=true]",c.$slideTrack).off("dragstart",c.preventDefault);
a(window).off("load.slick.slick-"+c.instanceUid,c.setPosition);
a(document).off("ready.slick.slick-"+c.instanceUid,c.setPosition)
};
b.prototype.cleanUpSlideEvents=function(){var c=this;
c.$list.off("mouseenter.slick",a.proxy(c.interrupt,c,true));
c.$list.off("mouseleave.slick",a.proxy(c.interrupt,c,false))
};
b.prototype.cleanUpRows=function(){var d=this,c;
if(d.options.rows>1){c=d.$slides.children().children();
c.removeAttr("style");
d.$slider.empty().append(c)
}};
b.prototype.clickHandler=function(d){var c=this;
if(c.shouldClick===false){d.stopImmediatePropagation();
d.stopPropagation();
d.preventDefault()
}};
b.prototype.destroy=function(d){var c=this;
c.autoPlayClear();
c.touchObject={};
c.cleanUpEvents();
a(".slick-cloned",c.$slider).detach();
if(c.$dots){c.$dots.remove()
}if(c.$prevArrow&&c.$prevArrow.length){c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display","");
if(c.htmlExpr.test(c.options.prevArrow)){c.$prevArrow.remove()
}}if(c.$nextArrow&&c.$nextArrow.length){c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display","");
if(c.htmlExpr.test(c.options.nextArrow)){c.$nextArrow.remove()
}}if(c.$slides){c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))
});
c.$slideTrack.children(this.options.slide).detach();
c.$slideTrack.detach();
c.$list.detach();
c.$slider.append(c.$slides)
}c.cleanUpRows();
c.$slider.removeClass("slick-slider");
c.$slider.removeClass("slick-initialized");
c.$slider.removeClass("slick-dotted");
c.unslicked=true;
if(!d){c.$slider.trigger("destroy",[c])
}};
b.prototype.disableTransition=function(c){var d=this,e={};
e[d.transitionType]="";
if(d.options.fade===false){d.$slideTrack.css(e)
}else{d.$slides.eq(c).css(e)
}};
b.prototype.fadeSlide=function(d,e){var c=this;
if(c.cssTransitions===false){c.$slides.eq(d).css({zIndex:c.options.zIndex});
c.$slides.eq(d).animate({opacity:1},c.options.speed,c.options.easing,e)
}else{c.applyTransition(d);
c.$slides.eq(d).css({opacity:1,zIndex:c.options.zIndex});
if(e){setTimeout(function(){c.disableTransition(d);
e.call()
},c.options.speed)
}}};
b.prototype.fadeSlideOut=function(d){var c=this;
if(c.cssTransitions===false){c.$slides.eq(d).animate({opacity:0,zIndex:c.options.zIndex-2},c.options.speed,c.options.easing)
}else{c.applyTransition(d);
c.$slides.eq(d).css({opacity:0,zIndex:c.options.zIndex-2})
}};
b.prototype.filterSlides=b.prototype.slickFilter=function(d){var c=this;
if(d!==null){c.$slidesCache=c.$slides;
c.unload();
c.$slideTrack.children(this.options.slide).detach();
c.$slidesCache.filter(d).appendTo(c.$slideTrack);
c.reinit()
}};
b.prototype.focusHandler=function(){var c=this;
c.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(e){e.stopImmediatePropagation();
var d=a(this);
setTimeout(function(){if(c.options.pauseOnFocus){c.focussed=d.is(":focus");
c.autoPlay()
}},0)
})
};
b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var c=this;
return c.currentSlide
};
b.prototype.getDotCount=function(){var d=this;
var f=0;
var c=0;
var e=0;
if(d.options.infinite===true){while(f<d.slideCount){++e;
f=c+d.options.slidesToScroll;
c+=d.options.slidesToScroll<=d.options.slidesToShow?d.options.slidesToScroll:d.options.slidesToShow
}}else{if(d.options.centerMode===true){e=d.slideCount
}else{if(!d.options.asNavFor){e=1+Math.ceil((d.slideCount-d.options.slidesToShow)/d.options.slidesToScroll)
}else{while(f<d.slideCount){++e;
f=c+d.options.slidesToScroll;
c+=d.options.slidesToScroll<=d.options.slidesToShow?d.options.slidesToScroll:d.options.slidesToShow
}}}}return e-1
};
b.prototype.getLeft=function(f){var d=this,h,e,c=0,g;
d.slideOffset=0;
e=d.$slides.first().outerHeight(true);
if(d.options.infinite===true){if(d.slideCount>d.options.slidesToShow){d.slideOffset=(d.slideWidth*d.options.slidesToShow)*-1;
c=(e*d.options.slidesToShow)*-1
}if(d.slideCount%d.options.slidesToScroll!==0){if(f+d.options.slidesToScroll>d.slideCount&&d.slideCount>d.options.slidesToShow){if(f>d.slideCount){d.slideOffset=((d.options.slidesToShow-(f-d.slideCount))*d.slideWidth)*-1;
c=((d.options.slidesToShow-(f-d.slideCount))*e)*-1
}else{d.slideOffset=((d.slideCount%d.options.slidesToScroll)*d.slideWidth)*-1;
c=((d.slideCount%d.options.slidesToScroll)*e)*-1
}}}}else{if(f+d.options.slidesToShow>d.slideCount){d.slideOffset=((f+d.options.slidesToShow)-d.slideCount)*d.slideWidth;
c=((f+d.options.slidesToShow)-d.slideCount)*e
}}if(d.slideCount<=d.options.slidesToShow){d.slideOffset=0;
c=0
}if(d.options.centerMode===true&&d.options.infinite===true){d.slideOffset+=d.slideWidth*Math.floor(d.options.slidesToShow/2)-d.slideWidth
}else{if(d.options.centerMode===true){d.slideOffset=0;
d.slideOffset+=d.slideWidth*Math.floor(d.options.slidesToShow/2)
}}if(d.options.vertical===false){h=((f*d.slideWidth)*-1)+d.slideOffset
}else{h=((f*e)*-1)+c
}if(d.options.variableWidth===true){if(d.slideCount<=d.options.slidesToShow||d.options.infinite===false){g=d.$slideTrack.children(".slick-slide").eq(f)
}else{g=d.$slideTrack.children(".slick-slide").eq(f+d.options.slidesToShow)
}if(d.options.rtl===true){if(g[0]){h=(d.$slideTrack.width()-g[0].offsetLeft-g.width())*-1
}else{h=0
}}else{h=g[0]?g[0].offsetLeft*-1:0
}if(d.options.centerMode===true){if(d.slideCount<=d.options.slidesToShow||d.options.infinite===false){g=d.$slideTrack.children(".slick-slide").eq(f)
}else{g=d.$slideTrack.children(".slick-slide").eq(f+d.options.slidesToShow+1)
}if(d.options.rtl===true){if(g[0]){h=(d.$slideTrack.width()-g[0].offsetLeft-g.width())*-1
}else{h=0
}}else{h=g[0]?g[0].offsetLeft*-1:0
}h+=(d.$list.width()-g.outerWidth())/2
}}return h
};
b.prototype.getOption=b.prototype.slickGetOption=function(d){var c=this;
return c.options[d]
};
b.prototype.getNavigableIndexes=function(){var f=this,g=0,d=0,e=[],c;
if(f.options.infinite===false){c=f.slideCount
}else{g=f.options.slidesToScroll*-1;
d=f.options.slidesToScroll*-1;
c=f.slideCount*2
}while(g<c){e.push(g);
g=d+f.options.slidesToScroll;
d+=f.options.slidesToScroll<=f.options.slidesToShow?f.options.slidesToScroll:f.options.slidesToShow
}return e
};
b.prototype.getSlick=function(){return this
};
b.prototype.getSlideCount=function(){var e=this,d,f,c;
c=e.options.centerMode===true?e.slideWidth*Math.floor(e.options.slidesToShow/2):0;
if(e.options.swipeToSlide===true){e.$slideTrack.find(".slick-slide").each(function(h,g){if(g.offsetLeft-c+(a(g).outerWidth()/2)>(e.swipeLeft*-1)){f=g;
return false
}});
d=Math.abs(a(f).attr("data-slick-index")-e.currentSlide)||1;
return d
}else{return e.options.slidesToScroll
}};
b.prototype.goTo=b.prototype.slickGoTo=function(c,e){var d=this;
d.changeSlide({data:{message:"index",index:parseInt(c)}},e)
};
b.prototype.init=function(c){var d=this;
if(!a(d.$slider).hasClass("slick-initialized")){a(d.$slider).addClass("slick-initialized");
d.buildRows();
d.buildOut();
d.setProps();
d.startLoad();
d.loadSlider();
d.initializeEvents();
d.updateArrows();
d.updateDots();
d.checkResponsive(true);
d.focusHandler()
}if(c){d.$slider.trigger("init",[d])
}if(d.options.accessibility===true){d.initADA()
}if(d.options.autoplay){d.paused=false;
d.autoPlay()
}};
b.prototype.initADA=function(){var c=this;
c.$slides.add(c.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"});
c.$slideTrack.attr("role","listbox");
c.$slides.not(c.$slideTrack.find(".slick-cloned")).each(function(d){a(this).attr({role:"option","aria-describedby":"slick-slide"+c.instanceUid+d+""})
});
if(c.$dots!==null){c.$dots.attr("role","tablist").find("li").each(function(d){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+c.instanceUid+d+"",id:"slick-slide"+c.instanceUid+d+""})
}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar")
}c.activateADA()
};
b.prototype.initArrowEvents=function(){var c=this;
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},c.changeSlide);
c.$nextArrow.off("click.slick").on("click.slick",{message:"next"},c.changeSlide)
}};
b.prototype.initDotEvents=function(){var c=this;
if(c.options.dots===true&&c.slideCount>c.options.slidesToShow){a("li",c.$dots).on("click.slick",{message:"index"},c.changeSlide)
}if(c.options.dots===true&&c.options.pauseOnDotsHover===true){a("li",c.$dots).on("mouseenter.slick",a.proxy(c.interrupt,c,true)).on("mouseleave.slick",a.proxy(c.interrupt,c,false))
}};
b.prototype.initSlideEvents=function(){var c=this;
if(c.options.pauseOnHover){c.$list.on("mouseenter.slick",a.proxy(c.interrupt,c,true));
c.$list.on("mouseleave.slick",a.proxy(c.interrupt,c,false))
}};
b.prototype.initializeEvents=function(){var c=this;
c.initArrowEvents();
c.initDotEvents();
c.initSlideEvents();
c.$list.on("touchstart.slick mousedown.slick",{action:"start"},c.swipeHandler);
c.$list.on("touchmove.slick mousemove.slick",{action:"move"},c.swipeHandler);
c.$list.on("touchend.slick mouseup.slick",{action:"end"},c.swipeHandler);
c.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},c.swipeHandler);
c.$list.on("click.slick",c.clickHandler);
a(document).on(c.visibilityChange,a.proxy(c.visibility,c));
if(c.options.accessibility===true){c.$list.on("keydown.slick",c.keyHandler)
}if(c.options.focusOnSelect===true){a(c.$slideTrack).children().on("click.slick",c.selectHandler)
}a(window).on("orientationchange.slick.slick-"+c.instanceUid,a.proxy(c.orientationChange,c));
a(window).on("resize.slick.slick-"+c.instanceUid,a.proxy(c.resize,c));
a("[draggable!=true]",c.$slideTrack).on("dragstart",c.preventDefault);
a(window).on("load.slick.slick-"+c.instanceUid,c.setPosition);
a(document).on("ready.slick.slick-"+c.instanceUid,c.setPosition)
};
b.prototype.initUI=function(){var c=this;
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow.show();
c.$nextArrow.show()
}if(c.options.dots===true&&c.slideCount>c.options.slidesToShow){c.$dots.show()
}};
b.prototype.keyHandler=function(d){var c=this;
if(!d.target.tagName.match("TEXTAREA|INPUT|SELECT")){if(d.keyCode===37&&c.options.accessibility===true){c.changeSlide({data:{message:c.options.rtl===true?"next":"previous"}})
}else{if(d.keyCode===39&&c.options.accessibility===true){c.changeSlide({data:{message:c.options.rtl===true?"previous":"next"}})
}}}};
b.prototype.lazyLoad=function(){var e=this,c,h,g,f;
function d(i){a("img[data-lazy]",i).each(function(){var k=a(this),l=a(this).attr("data-lazy"),j=document.createElement("img");
j.onload=function(){k.animate({opacity:0},100,function(){k.attr("src",l).animate({opacity:1},200,function(){k.removeAttr("data-lazy").removeClass("slick-loading")
});
e.$slider.trigger("lazyLoaded",[e,k,l])
})
};
j.onerror=function(){k.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
e.$slider.trigger("lazyLoadError",[e,k,l])
};
j.src=l
})
}if(e.options.centerMode===true){if(e.options.infinite===true){g=e.currentSlide+(e.options.slidesToShow/2+1);
f=g+e.options.slidesToShow+2
}else{g=Math.max(0,e.currentSlide-(e.options.slidesToShow/2+1));
f=2+(e.options.slidesToShow/2+1)+e.currentSlide
}}else{g=e.options.infinite?e.options.slidesToShow+e.currentSlide:e.currentSlide;
f=Math.ceil(g+e.options.slidesToShow);
if(e.options.fade===true){if(g>0){g--
}if(f<=e.slideCount){f++
}}}c=e.$slider.find(".slick-slide").slice(g,f);
d(c);
if(e.slideCount<=e.options.slidesToShow){h=e.$slider.find(".slick-slide");
d(h)
}else{if(e.currentSlide>=e.slideCount-e.options.slidesToShow){h=e.$slider.find(".slick-cloned").slice(0,e.options.slidesToShow);
d(h)
}else{if(e.currentSlide===0){h=e.$slider.find(".slick-cloned").slice(e.options.slidesToShow*-1);
d(h)
}}}};
b.prototype.loadSlider=function(){var c=this;
c.setPosition();
c.$slideTrack.css({opacity:1});
c.$slider.removeClass("slick-loading");
c.initUI();
if(c.options.lazyLoad==="progressive"){c.progressiveLazyLoad()
}};
b.prototype.next=b.prototype.slickNext=function(){var c=this;
c.changeSlide({data:{message:"next"}})
};
b.prototype.orientationChange=function(){var c=this;
c.checkResponsive();
c.setPosition()
};
b.prototype.pause=b.prototype.slickPause=function(){var c=this;
c.autoPlayClear();
c.paused=true
};
b.prototype.play=b.prototype.slickPlay=function(){var c=this;
c.autoPlay();
c.options.autoplay=true;
c.paused=false;
c.focussed=false;
c.interrupted=false
};
b.prototype.postSlide=function(d){var c=this;
if(!c.unslicked){c.$slider.trigger("afterChange",[c,d]);
c.animating=false;
c.setPosition();
c.swipeLeft=null;
if(c.options.autoplay){c.autoPlay()
}if(c.options.accessibility===true){c.initADA()
}}};
b.prototype.prev=b.prototype.slickPrev=function(){var c=this;
c.changeSlide({data:{message:"previous"}})
};
b.prototype.preventDefault=function(c){c.preventDefault()
};
b.prototype.progressiveLazyLoad=function(e){e=e||1;
var d=this,c=a("img[data-lazy]",d.$slider),g,h,f;
if(c.length){g=c.first();
h=g.attr("data-lazy");
f=document.createElement("img");
f.onload=function(){g.attr("src",h).removeAttr("data-lazy").removeClass("slick-loading");
if(d.options.adaptiveHeight===true){d.setPosition()
}d.$slider.trigger("lazyLoaded",[d,g,h]);
d.progressiveLazyLoad()
};
f.onerror=function(){if(e<3){setTimeout(function(){d.progressiveLazyLoad(e+1)
},500)
}else{g.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
d.$slider.trigger("lazyLoadError",[d,g,h]);
d.progressiveLazyLoad()
}};
f.src=h
}else{d.$slider.trigger("allImagesLoaded",[d])
}};
b.prototype.refresh=function(d){var e=this,f,c;
c=e.slideCount-e.options.slidesToShow;
if(!e.options.infinite&&(e.currentSlide>c)){e.currentSlide=c
}if(e.slideCount<=e.options.slidesToShow){e.currentSlide=0
}f=e.currentSlide;
e.destroy(true);
a.extend(e,e.initials,{currentSlide:f});
e.init();
if(!d){e.changeSlide({data:{message:"index",index:f}},false)
}};
b.prototype.registerBreakpoints=function(){var e=this,d,f,c,g=e.options.responsive||null;
if(a.type(g)==="array"&&g.length){e.respondTo=e.options.respondTo||"window";
for(d in g){c=e.breakpoints.length-1;
f=g[d].breakpoint;
if(g.hasOwnProperty(d)){while(c>=0){if(e.breakpoints[c]&&e.breakpoints[c]===f){e.breakpoints.splice(c,1)
}c--
}e.breakpoints.push(f);
e.breakpointSettings[f]=g[d].settings
}}e.breakpoints.sort(function(i,h){return(e.options.mobileFirst)?i-h:h-i
})
}};
b.prototype.reinit=function(){var c=this;
c.$slides=c.$slideTrack.children(c.options.slide).addClass("slick-slide");
c.slideCount=c.$slides.length;
if(c.currentSlide>=c.slideCount&&c.currentSlide!==0){c.currentSlide=c.currentSlide-c.options.slidesToScroll
}if(c.slideCount<=c.options.slidesToShow){c.currentSlide=0
}c.registerBreakpoints();
c.setProps();
c.setupInfinite();
c.buildArrows();
c.updateArrows();
c.initArrowEvents();
c.buildDots();
c.updateDots();
c.initDotEvents();
c.cleanUpSlideEvents();
c.initSlideEvents();
c.checkResponsive(false,true);
if(c.options.focusOnSelect===true){a(c.$slideTrack).children().on("click.slick",c.selectHandler)
}c.setSlideClasses(typeof c.currentSlide==="number"?c.currentSlide:0);
c.setPosition();
c.focusHandler();
c.paused=!c.options.autoplay;
c.autoPlay();
c.$slider.trigger("reInit",[c])
};
b.prototype.resize=function(){var c=this;
if(a(window).width()!==c.windowWidth){clearTimeout(c.windowDelay);
c.windowDelay=window.setTimeout(function(){c.windowWidth=a(window).width();
c.checkResponsive();
if(!c.unslicked){c.setPosition()
}},50)
}};
b.prototype.removeSlide=b.prototype.slickRemove=function(d,f,e){var c=this;
if(typeof(d)==="boolean"){f=d;
d=f===true?0:c.slideCount-1
}else{d=f===true?--d:d
}if(c.slideCount<1||d<0||d>c.slideCount-1){return false
}c.unload();
if(e===true){c.$slideTrack.children().remove()
}else{c.$slideTrack.children(this.options.slide).eq(d).remove()
}c.$slides=c.$slideTrack.children(this.options.slide);
c.$slideTrack.children(this.options.slide).detach();
c.$slideTrack.append(c.$slides);
c.$slidesCache=c.$slides;
c.reinit()
};
b.prototype.setCSS=function(d){var e=this,f={},c,g;
if(e.options.rtl===true){d=-d
}c=e.positionProp=="left"?Math.ceil(d)+"px":"0px";
g=e.positionProp=="top"?Math.ceil(d)+"px":"0px";
f[e.positionProp]=d;
if(e.transformsEnabled===false){e.$slideTrack.css(f)
}else{f={};
if(e.cssTransitions===false){f[e.animType]="translate("+c+", "+g+")";
e.$slideTrack.css(f)
}else{f[e.animType]="translate3d("+c+", "+g+", 0px)";
e.$slideTrack.css(f)
}}};
b.prototype.setDimensions=function(){var c=this;
if(c.options.vertical===false){if(c.options.centerMode===true){c.$list.css({padding:("0px "+c.options.centerPadding)})
}}else{c.$list.height(c.$slides.first().outerHeight(true)*c.options.slidesToShow);
if(c.options.centerMode===true){c.$list.css({padding:(c.options.centerPadding+" 0px")})
}}c.listWidth=c.$list.width();
c.listHeight=c.$list.height();
if(c.options.vertical===false&&c.options.variableWidth===false){c.slideWidth=Math.ceil(c.listWidth/c.options.slidesToShow);
c.$slideTrack.width(Math.ceil((c.slideWidth*c.$slideTrack.children(".slick-slide").length)))
}else{if(c.options.variableWidth===true){c.$slideTrack.width(5000*c.slideCount)
}else{c.slideWidth=Math.ceil(c.listWidth);
c.$slideTrack.height(Math.ceil((c.$slides.first().outerHeight(true)*c.$slideTrack.children(".slick-slide").length)))
}}var d=c.$slides.first().outerWidth(true)-c.$slides.first().width();
if(c.options.variableWidth===false){c.$slideTrack.children(".slick-slide").width(c.slideWidth-d)
}};
b.prototype.setFade=function(){var c=this,d;
c.$slides.each(function(e,f){d=(c.slideWidth*e)*-1;
if(c.options.rtl===true){a(f).css({position:"relative",right:d,top:0,zIndex:c.options.zIndex-2,opacity:0})
}else{a(f).css({position:"relative",left:d,top:0,zIndex:c.options.zIndex-2,opacity:0})
}});
c.$slides.eq(c.currentSlide).css({zIndex:c.options.zIndex-1,opacity:1})
};
b.prototype.setHeight=function(){var d=this;
if(d.options.slidesToShow===1&&d.options.adaptiveHeight===true&&d.options.vertical===false){var c=d.$slides.eq(d.currentSlide).outerHeight(true);
d.$list.css("height",c)
}};
b.prototype.setOption=b.prototype.slickSetOption=function(){var d=this,c,h,g,i,f=false,e;
if(a.type(arguments[0])==="object"){g=arguments[0];
f=arguments[1];
e="multiple"
}else{if(a.type(arguments[0])==="string"){g=arguments[0];
i=arguments[1];
f=arguments[2];
if(arguments[0]==="responsive"&&a.type(arguments[1])==="array"){e="responsive"
}else{if(typeof arguments[1]!=="undefined"){e="single"
}}}}if(e==="single"){d.options[g]=i
}else{if(e==="multiple"){a.each(g,function(j,k){d.options[j]=k
})
}else{if(e==="responsive"){for(h in i){if(a.type(d.options.responsive)!=="array"){d.options.responsive=[i[h]]
}else{c=d.options.responsive.length-1;
while(c>=0){if(d.options.responsive[c].breakpoint===i[h].breakpoint){d.options.responsive.splice(c,1)
}c--
}d.options.responsive.push(i[h])
}}}}}if(f){d.unload();
d.reinit()
}};
b.prototype.setPosition=function(){var c=this;
c.setDimensions();
c.setHeight();
if(c.options.fade===false){c.setCSS(c.getLeft(c.currentSlide))
}else{c.setFade()
}c.$slider.trigger("setPosition",[c])
};
b.prototype.setProps=function(){var d=this,c=document.body.style;
d.positionProp=d.options.vertical===true?"top":"left";
if(d.positionProp==="top"){d.$slider.addClass("slick-vertical")
}else{d.$slider.removeClass("slick-vertical")
}if(c.WebkitTransition!==undefined||c.MozTransition!==undefined||c.msTransition!==undefined){if(d.options.useCSS===true){d.cssTransitions=true
}}if(d.options.fade){if(typeof d.options.zIndex==="number"){if(d.options.zIndex<3){d.options.zIndex=3
}}else{d.options.zIndex=d.defaults.zIndex
}}if(c.OTransform!==undefined){d.animType="OTransform";
d.transformType="-o-transform";
d.transitionType="OTransition";
if(c.perspectiveProperty===undefined&&c.webkitPerspective===undefined){d.animType=false
}}if(c.MozTransform!==undefined){d.animType="MozTransform";
d.transformType="-moz-transform";
d.transitionType="MozTransition";
if(c.perspectiveProperty===undefined&&c.MozPerspective===undefined){d.animType=false
}}if(c.webkitTransform!==undefined){d.animType="webkitTransform";
d.transformType="-webkit-transform";
d.transitionType="webkitTransition";
if(c.perspectiveProperty===undefined&&c.webkitPerspective===undefined){d.animType=false
}}if(c.msTransform!==undefined){d.animType="msTransform";
d.transformType="-ms-transform";
d.transitionType="msTransition";
if(c.msTransform===undefined){d.animType=false
}}if(c.transform!==undefined&&d.animType!==false){d.animType="transform";
d.transformType="transform";
d.transitionType="transition"
}d.transformsEnabled=d.options.useTransform&&(d.animType!==null&&d.animType!==false)
};
b.prototype.setSlideClasses=function(f){var e=this,c,d,h,g;
d=e.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true");
e.$slides.eq(f).addClass("slick-current");
if(e.options.centerMode===true){c=Math.floor(e.options.slidesToShow/2);
if(e.options.infinite===true){if(f>=c&&f<=(e.slideCount-1)-c){e.$slides.slice(f-c,f+c+1).addClass("slick-active").attr("aria-hidden","false")
}else{h=e.options.slidesToShow+f;
d.slice(h-c+1,h+c+2).addClass("slick-active").attr("aria-hidden","false")
}if(f===0){d.eq(d.length-1-e.options.slidesToShow).addClass("slick-center")
}else{if(f===e.slideCount-1){d.eq(e.options.slidesToShow).addClass("slick-center")
}}}e.$slides.eq(f).addClass("slick-center")
}else{if(f>=0&&f<=(e.slideCount-e.options.slidesToShow)){e.$slides.slice(f,f+e.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")
}else{if(d.length<=e.options.slidesToShow){d.addClass("slick-active").attr("aria-hidden","false")
}else{g=e.slideCount%e.options.slidesToShow;
h=e.options.infinite===true?e.options.slidesToShow+f:f;
if(e.options.slidesToShow==e.options.slidesToScroll&&(e.slideCount-f)<e.options.slidesToShow){d.slice(h-(e.options.slidesToShow-g),h+g).addClass("slick-active").attr("aria-hidden","false")
}else{d.slice(h,h+e.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")
}}}}if(e.options.lazyLoad==="ondemand"){e.lazyLoad()
}};
b.prototype.setupInfinite=function(){var c=this,d,f,e;
if(c.options.fade===true){c.options.centerMode=false
}if(c.options.infinite===true&&c.options.fade===false){f=null;
if(c.slideCount>c.options.slidesToShow){if(c.options.centerMode===true){e=c.options.slidesToShow+1
}else{e=c.options.slidesToShow
}for(d=c.slideCount;
d>(c.slideCount-e);
d-=1){f=d-1;
a(c.$slides[f]).clone(true).attr("id","").attr("data-slick-index",f-c.slideCount).prependTo(c.$slideTrack).addClass("slick-cloned")
}for(d=0;
d<e;
d+=1){f=d;
a(c.$slides[f]).clone(true).attr("id","").attr("data-slick-index",f+c.slideCount).appendTo(c.$slideTrack).addClass("slick-cloned")
}c.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")
})
}}};
b.prototype.interrupt=function(c){var d=this;
if(!c){d.autoPlay()
}d.interrupted=c
};
b.prototype.selectHandler=function(f){var e=this;
var d=a(f.target).is(".slick-slide")?a(f.target):a(f.target).parents(".slick-slide");
var c=parseInt(d.attr("data-slick-index"));
if(!c){c=0
}if(e.slideCount<=e.options.slidesToShow){e.setSlideClasses(c);
e.asNavFor(c);
return
}e.slideHandler(c)
};
b.prototype.slideHandler=function(f,i,e){var d,l,h,j,g=null,k=this,c;
i=i||false;
if(k.animating===true&&k.options.waitForAnimate===true){return
}if(k.options.fade===true&&k.currentSlide===f){return
}if(k.slideCount<=k.options.slidesToShow){return
}if(i===false){k.asNavFor(f)
}d=f;
g=k.getLeft(d);
j=k.getLeft(k.currentSlide);
k.currentLeft=k.swipeLeft===null?j:k.swipeLeft;
if(k.options.infinite===false&&k.options.centerMode===false&&(f<0||f>k.getDotCount()*k.options.slidesToScroll)){if(k.options.fade===false){d=k.currentSlide;
if(e!==true){k.animateSlide(j,function(){k.postSlide(d)
})
}else{k.postSlide(d)
}}return
}else{if(k.options.infinite===false&&k.options.centerMode===true&&(f<0||f>(k.slideCount-k.options.slidesToScroll))){if(k.options.fade===false){d=k.currentSlide;
if(e!==true){k.animateSlide(j,function(){k.postSlide(d)
})
}else{k.postSlide(d)
}}return
}}if(k.options.autoplay){clearInterval(k.autoPlayTimer)
}if(d<0){if(k.slideCount%k.options.slidesToScroll!==0){l=k.slideCount-(k.slideCount%k.options.slidesToScroll)
}else{l=k.slideCount+d
}}else{if(d>=k.slideCount){if(k.slideCount%k.options.slidesToScroll!==0){l=0
}else{l=d-k.slideCount
}}else{l=d
}}k.animating=true;
k.$slider.trigger("beforeChange",[k,k.currentSlide,l]);
h=k.currentSlide;
k.currentSlide=l;
k.setSlideClasses(k.currentSlide);
if(k.options.asNavFor){c=k.getNavTarget();
c=c.slick("getSlick");
if(c.slideCount<=c.options.slidesToShow){c.setSlideClasses(k.currentSlide)
}}k.updateDots();
k.updateArrows();
if(k.options.fade===true){if(e!==true){k.fadeSlideOut(h);
k.fadeSlide(l,function(){k.postSlide(l)
})
}else{k.postSlide(l)
}k.animateHeight();
return
}if(e!==true){k.animateSlide(g,function(){k.postSlide(l)
})
}else{k.postSlide(l)
}};
b.prototype.startLoad=function(){var c=this;
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow.hide();
c.$nextArrow.hide()
}if(c.options.dots===true&&c.slideCount>c.options.slidesToShow){c.$dots.hide()
}c.$slider.addClass("slick-loading")
};
b.prototype.swipeDirection=function(){var c,f,e,g,d=this;
c=d.touchObject.startX-d.touchObject.curX;
f=d.touchObject.startY-d.touchObject.curY;
e=Math.atan2(f,c);
g=Math.round(e*180/Math.PI);
if(g<0){g=360-Math.abs(g)
}if((g<=45)&&(g>=0)){return(d.options.rtl===false?"left":"right")
}if((g<=360)&&(g>=315)){return(d.options.rtl===false?"left":"right")
}if((g>=135)&&(g<=225)){return(d.options.rtl===false?"right":"left")
}if(d.options.verticalSwiping===true){if((g>=35)&&(g<=135)){return"down"
}else{return"up"
}}return"vertical"
};
b.prototype.swipeEnd=function(e){var d=this,c,f;
d.dragging=false;
d.interrupted=false;
d.shouldClick=(d.touchObject.swipeLength>10)?false:true;
if(d.touchObject.curX===undefined){return false
}if(d.touchObject.edgeHit===true){d.$slider.trigger("edge",[d,d.swipeDirection()])
}if(d.touchObject.swipeLength>=d.touchObject.minSwipe){f=d.swipeDirection();
switch(f){case"left":case"down":c=d.options.swipeToSlide?d.checkNavigable(d.currentSlide+d.getSlideCount()):d.currentSlide+d.getSlideCount();
d.currentDirection=0;
break;
case"right":case"up":c=d.options.swipeToSlide?d.checkNavigable(d.currentSlide-d.getSlideCount()):d.currentSlide-d.getSlideCount();
d.currentDirection=1;
break;
default:}if(f!="vertical"){d.slideHandler(c);
d.touchObject={};
d.$slider.trigger("swipe",[d,f])
}}else{if(d.touchObject.startX!==d.touchObject.curX){d.slideHandler(d.currentSlide);
d.touchObject={}
}}};
b.prototype.swipeHandler=function(d){var c=this;
if((c.options.swipe===false)||("ontouchend" in document&&c.options.swipe===false)){return
}else{if(c.options.draggable===false&&d.type.indexOf("mouse")!==-1){return
}}c.touchObject.fingerCount=d.originalEvent&&d.originalEvent.touches!==undefined?d.originalEvent.touches.length:1;
c.touchObject.minSwipe=c.listWidth/c.options.touchThreshold;
if(c.options.verticalSwiping===true){c.touchObject.minSwipe=c.listHeight/c.options.touchThreshold
}switch(d.data.action){case"start":c.swipeStart(d);
break;
case"move":c.swipeMove(d);
break;
case"end":c.swipeEnd(d);
break
}};
b.prototype.swipeMove=function(f){var e=this,j=false,h,d,g,c,i;
i=f.originalEvent!==undefined?f.originalEvent.touches:null;
if(!e.dragging||i&&i.length!==1){return false
}h=e.getLeft(e.currentSlide);
e.touchObject.curX=i!==undefined?i[0].pageX:f.clientX;
e.touchObject.curY=i!==undefined?i[0].pageY:f.clientY;
e.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(e.touchObject.curX-e.touchObject.startX,2)));
if(e.options.verticalSwiping===true){e.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(e.touchObject.curY-e.touchObject.startY,2)))
}d=e.swipeDirection();
if(d==="vertical"){return
}if(f.originalEvent!==undefined&&e.touchObject.swipeLength>4){f.preventDefault()
}c=(e.options.rtl===false?1:-1)*(e.touchObject.curX>e.touchObject.startX?1:-1);
if(e.options.verticalSwiping===true){c=e.touchObject.curY>e.touchObject.startY?1:-1
}g=e.touchObject.swipeLength;
e.touchObject.edgeHit=false;
if(e.options.infinite===false){if((e.currentSlide===0&&d==="right")||(e.currentSlide>=e.getDotCount()&&d==="left")){g=e.touchObject.swipeLength*e.options.edgeFriction;
e.touchObject.edgeHit=true
}}if(e.options.vertical===false){e.swipeLeft=h+g*c
}else{e.swipeLeft=h+(g*(e.$list.height()/e.listWidth))*c
}if(e.options.verticalSwiping===true){e.swipeLeft=h+g*c
}if(e.options.fade===true||e.options.touchMove===false){return false
}if(e.animating===true){e.swipeLeft=null;
return false
}e.setCSS(e.swipeLeft)
};
b.prototype.swipeStart=function(d){var c=this,e;
c.interrupted=true;
if(c.touchObject.fingerCount!==1||c.slideCount<=c.options.slidesToShow){c.touchObject={};
return false
}if(d.originalEvent!==undefined&&d.originalEvent.touches!==undefined){e=d.originalEvent.touches[0]
}c.touchObject.startX=c.touchObject.curX=e!==undefined?e.pageX:d.clientX;
c.touchObject.startY=c.touchObject.curY=e!==undefined?e.pageY:d.clientY;
c.dragging=true
};
b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var c=this;
if(c.$slidesCache!==null){c.unload();
c.$slideTrack.children(this.options.slide).detach();
c.$slidesCache.appendTo(c.$slideTrack);
c.reinit()
}};
b.prototype.unload=function(){var c=this;
a(".slick-cloned",c.$slider).remove();
if(c.$dots){c.$dots.remove()
}if(c.$prevArrow&&c.htmlExpr.test(c.options.prevArrow)){c.$prevArrow.remove()
}if(c.$nextArrow&&c.htmlExpr.test(c.options.nextArrow)){c.$nextArrow.remove()
}c.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")
};
b.prototype.unslick=function(d){var c=this;
c.$slider.trigger("unslick",[c,d]);
c.destroy()
};
b.prototype.updateArrows=function(){var d=this,c;
c=Math.floor(d.options.slidesToShow/2);
if(d.options.arrows===true&&d.slideCount>d.options.slidesToShow&&!d.options.infinite){d.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false");
d.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false");
if(d.currentSlide===0){d.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true");
d.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")
}else{if(d.currentSlide>=d.slideCount-d.options.slidesToShow&&d.options.centerMode===false){d.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true");
d.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")
}else{if(d.currentSlide>=d.slideCount-1&&d.options.centerMode===true){d.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true");
d.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")
}}}}};
b.prototype.updateDots=function(){var c=this;
if(c.$dots!==null){c.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true");
c.$dots.find("li").eq(Math.floor(c.currentSlide/c.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false")
}};
b.prototype.visibility=function(){var c=this;
if(c.options.autoplay){if(document[c.hidden]){c.interrupted=true
}else{c.interrupted=false
}}};
a.fn.slick=function(){var f=this,h=arguments[0],e=Array.prototype.slice.call(arguments,1),c=f.length,g,d;
for(g=0;
g<c;
g++){if(typeof h=="object"||typeof h=="undefined"){f[g].slick=new b(f[g],h)
}else{d=f[g].slick[h].apply(f[g].slick,e)
}if(typeof d!="undefined"){return d
}}return f
}
}));
/*!

 handlebars v4.0.5

Copyright (C) 2011-2015 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
(function webpackUniversalModuleDefinition(a,b){if(typeof exports==="object"&&typeof module==="object"){module.exports=b()
}else{if(typeof define==="function"&&define.amd){define([],b)
}else{if(typeof exports==="object"){exports.Handlebars=b()
}else{a.Handlebars=b()
}}}})(this,function(){return(function(a){var b={};
function c(e){if(b[e]){return b[e].exports
}var d=b[e]={exports:{},id:e,loaded:false};
a[e].call(d.exports,d,d.exports,c);
d.loaded=true;
return d.exports
}c.m=a;
c.c=b;
c.p="";
return c(0)
})([function(c,s,e){var a=e(1)["default"];
s.__esModule=true;
var g=e(2);
var d=a(g);
var b=e(21);
var n=a(b);
var h=e(22);
var o=e(27);
var i=e(28);
var j=a(i);
var p=e(25);
var r=a(p);
var l=e(20);
var k=a(l);
var q=d["default"].create;
function m(){var t=q();
t.compile=function(u,v){return o.compile(u,v,t)
};
t.precompile=function(u,v){return o.precompile(u,v,t)
};
t.AST=n["default"];
t.Compiler=o.Compiler;
t.JavaScriptCompiler=j["default"];
t.Parser=h.parser;
t.parse=h.parse;
return t
}var f=m();
f.create=m;
k["default"](f);
f.Visitor=r["default"];
f["default"]=f;
s["default"]=f;
c.exports=s["default"]
},function(b,a){a["default"]=function(c){return c&&c.__esModule?c:{"default":c}
};
a.__esModule=true
},function(b,s,d){var p=d(3)["default"];
var a=d(1)["default"];
s.__esModule=true;
var r=d(4);
var g=p(r);
var q=d(18);
var h=a(q);
var l=d(6);
var n=a(l);
var m=d(5);
var c=p(m);
var f=d(19);
var o=p(f);
var j=d(20);
var i=a(j);
function k(){var t=new g.HandlebarsEnvironment();
c.extend(t,g);
t.SafeString=h["default"];
t.Exception=n["default"];
t.Utils=c;
t.escapeExpression=c.escapeExpression;
t.VM=o;
t.template=function(u){return o.template(u,t)
};
return t
}var e=k();
e.create=k;
i["default"](e);
e["default"]=e;
s["default"]=e;
b.exports=s["default"]
},function(b,a){a["default"]=function(e){if(e&&e.__esModule){return e
}else{var c={};
if(e!=null){for(var d in e){if(Object.prototype.hasOwnProperty.call(e,d)){c[d]=e[d]
}}}c["default"]=e;
return c
}};
a.__esModule=true
},function(e,v,g){var c=g(1)["default"];
v.__esModule=true;
v.HandlebarsEnvironment=k;
var n=g(5);
var t=g(6);
var f=c(t);
var h=g(7);
var w=g(15);
var m=g(17);
var d=c(m);
var u="4.0.5";
v.VERSION=u;
var q=7;
v.COMPILER_REVISION=q;
var s={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};
v.REVISION_CHANGES=s;
var p="[object Object]";
function k(z,y,x){this.helpers=z||{};
this.partials=y||{};
this.decorators=x||{};
h.registerDefaultHelpers(this);
w.registerDefaultDecorators(this)
}k.prototype={constructor:k,logger:d["default"],log:d["default"].log,registerHelper:function o(x,y){if(n.toString.call(x)===p){if(y){throw new f["default"]("Arg not supported with multiple helpers")
}n.extend(this.helpers,x)
}else{this.helpers[x]=y
}},unregisterHelper:function i(x){delete this.helpers[x]
},registerPartial:function j(y,x){if(n.toString.call(y)===p){n.extend(this.partials,y)
}else{if(typeof x==="undefined"){throw new f["default"]('Attempting to register a partial called "'+y+'" as undefined')
}this.partials[y]=x
}},unregisterPartial:function r(x){delete this.partials[x]
},registerDecorator:function b(x,y){if(n.toString.call(x)===p){if(y){throw new f["default"]("Arg not supported with multiple decorators")
}n.extend(this.decorators,x)
}else{this.decorators[x]=y
}},unregisterDecorator:function a(x){delete this.decorators[x]
}};
var l=d["default"].log;
v.log=l;
v.createFrame=n.createFrame;
v.logger=d["default"]
},function(d,g){g.__esModule=true;
g.extend=l;
g.indexOf=m;
g.escapeExpression=i;
g.isEmpty=h;
g.createFrame=o;
g.blockParams=k;
g.appendContextPath=e;
var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"};
var a=/[&<>"'`=]/g,f=/[&<>"'`=]/;
function p(q){return n[q]
}function l(s){for(var r=1;
r<arguments.length;
r++){for(var q in arguments[r]){if(Object.prototype.hasOwnProperty.call(arguments[r],q)){s[q]=arguments[r][q]
}}}return s
}var c=Object.prototype.toString;
g.toString=c;
var b=function b(q){return typeof q==="function"
};
if(b(/x/)){g.isFunction=b=function(q){return typeof q==="function"&&c.call(q)==="[object Function]"
}
}g.isFunction=b;
var j=Array.isArray||function(q){return q&&typeof q==="object"?c.call(q)==="[object Array]":false
};
g.isArray=j;
function m(t,s){for(var r=0,q=t.length;
r<q;
r++){if(t[r]===s){return r
}}return -1
}function i(q){if(typeof q!=="string"){if(q&&q.toHTML){return q.toHTML()
}else{if(q==null){return""
}else{if(!q){return q+""
}}}q=""+q
}if(!f.test(q)){return q
}return q.replace(a,p)
}function h(q){if(!q&&q!==0){return true
}else{if(j(q)&&q.length===0){return true
}else{return false
}}}function o(q){var r=l({},q);
r._parent=q;
return r
}function k(r,q){r.path=q;
return r
}function e(q,r){return(q?q+".":"")+r
}},function(c,a){a.__esModule=true;
var d=["description","fileName","lineNumber","message","name","number","stack"];
function b(j,i){var k=i&&i.loc,f=undefined,h=undefined;
if(k){f=k.start.line;
h=k.start.column;
j+=" - "+f+":"+h
}var g=Error.prototype.constructor.call(this,j);
for(var e=0;
e<d.length;
e++){this[d[e]]=g[d[e]]
}if(Error.captureStackTrace){Error.captureStackTrace(this,b)
}if(k){this.lineNumber=f;
this.column=h
}}b.prototype=new Error();
a["default"]=b;
c.exports=a["default"]
},function(e,s,f){var c=f(1)["default"];
s.__esModule=true;
s.registerDefaultHelpers=o;
var a=f(8);
var m=c(a);
var k=f(9);
var d=c(k);
var g=f(10);
var r=c(g);
var i=f(11);
var b=c(i);
var n=f(12);
var p=c(n);
var l=f(13);
var h=c(l);
var j=f(14);
var q=c(j);
function o(t){m["default"](t);
d["default"](t);
r["default"](t);
b["default"](t);
p["default"](t);
h["default"](t);
q["default"](t)
}},function(b,a,d){a.__esModule=true;
var c=d(5);
a["default"]=function(e){e.registerHelper("blockHelperMissing",function(h,g){var f=g.inverse,i=g.fn;
if(h===true){return i(this)
}else{if(h===false||h==null){return f(this)
}else{if(c.isArray(h)){if(h.length>0){if(g.ids){g.ids=[g.name]
}return e.helpers.each(h,g)
}else{return f(this)
}}else{if(g.data&&g.ids){var j=c.createFrame(g.data);
j.contextPath=c.appendContextPath(g.data.contextPath,g.name);
g={data:j}
}return i(h,g)
}}}})
};
b.exports=a["default"]
},function(c,a,f){var d=f(1)["default"];
a.__esModule=true;
var e=f(5);
var b=f(6);
var g=d(b);
a["default"]=function(h){h.registerHelper("each",function(k,v){if(!v){throw new g["default"]("Must pass iterator to #each")
}var t=v.fn,o=v.inverse,q=0,s="",p=undefined,l=undefined;
if(v.data&&v.ids){l=e.appendContextPath(v.data.contextPath,v.ids[0])+"."
}if(e.isFunction(k)){k=k.call(this)
}if(v.data){p=e.createFrame(v.data)
}function m(w,i,j){if(p){p.key=w;
p.index=i;
p.first=i===0;
p.last=!!j;
if(l){p.contextPath=l+w
}}s=s+t(k[w],{data:p,blockParams:e.blockParams([k[w],w],[l+w,null])})
}if(k&&typeof k==="object"){if(e.isArray(k)){for(var n=k.length;
q<n;
q++){if(q in k){m(q,q,q===k.length-1)
}}}else{var r=undefined;
for(var u in k){if(k.hasOwnProperty(u)){if(r!==undefined){m(r,q-1)
}r=u;
q++
}}if(r!==undefined){m(r,q-1,true)
}}}if(q===0){s=o(this)
}return s
})
};
c.exports=a["default"]
},function(c,a,e){var d=e(1)["default"];
a.__esModule=true;
var b=e(6);
var f=d(b);
a["default"]=function(g){g.registerHelper("helperMissing",function(){if(arguments.length===1){return undefined
}else{throw new f["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')
}})
};
c.exports=a["default"]
},function(b,a,d){a.__esModule=true;
var c=d(5);
a["default"]=function(e){e.registerHelper("if",function(g,f){if(c.isFunction(g)){g=g.call(this)
}if(!f.hash.includeZero&&!g||c.isEmpty(g)){return f.inverse(this)
}else{return f.fn(this)
}});
e.registerHelper("unless",function(g,f){return e.helpers["if"].call(this,g,{fn:f.inverse,inverse:f.fn,hash:f.hash})
})
};
b.exports=a["default"]
},function(b,a){a.__esModule=true;
a["default"]=function(c){c.registerHelper("log",function(){var e=[undefined],d=arguments[arguments.length-1];
for(var f=0;
f<arguments.length-1;
f++){e.push(arguments[f])
}var g=1;
if(d.hash.level!=null){g=d.hash.level
}else{if(d.data&&d.data.level!=null){g=d.data.level
}}e[0]=g;
c.log.apply(c,e)
})
};
b.exports=a["default"]
},function(b,a){a.__esModule=true;
a["default"]=function(c){c.registerHelper("lookup",function(e,d){return e&&e[d]
})
};
b.exports=a["default"]
},function(b,a,d){a.__esModule=true;
var c=d(5);
a["default"]=function(e){e.registerHelper("with",function(g,f){if(c.isFunction(g)){g=g.call(this)
}var h=f.fn;
if(!c.isEmpty(g)){var i=f.data;
if(f.data&&f.ids){i=c.createFrame(f.data);
i.contextPath=c.appendContextPath(f.data.contextPath,f.ids[0])
}return h(g,{data:i,blockParams:c.blockParams([g],[i&&i.contextPath])})
}else{return f.inverse(this)
}})
};
b.exports=a["default"]
},function(d,c,g){var f=g(1)["default"];
c.__esModule=true;
c.registerDefaultDecorators=e;
var b=g(16);
var a=f(b);
function e(h){a["default"](h)
}},function(b,a,d){a.__esModule=true;
var c=d(5);
a["default"]=function(e){e.registerDecorator("inline",function(j,i,f,h){var g=j;
if(!i.partials){i.partials={};
g=function(n,l){var m=f.partials;
f.partials=c.extend({},m,i.partials);
var k=j(n,l);
f.partials=m;
return k
}
}i.partials[h.args[0]]=h.fn;
return g
})
};
b.exports=a["default"]
},function(c,a,f){a.__esModule=true;
var e=f(5);
var b={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function g(i){if(typeof i==="string"){var h=e.indexOf(b.methodMap,i.toLowerCase());
if(h>=0){i=h
}else{i=parseInt(i,10)
}}return i
},log:function d(l){l=b.lookupLevel(l);
if(typeof console!=="undefined"&&b.lookupLevel(b.level)<=l){var k=b.methodMap[l];
if(!console[k]){k="log"
}for(var h=arguments.length,j=Array(h>1?h-1:0),i=1;
i<h;
i++){j[i-1]=arguments[i]
}console[k].apply(console,j)
}}};
a["default"]=b;
c.exports=a["default"]
},function(b,a){a.__esModule=true;
function c(d){this.string=d
}c.prototype.toString=c.prototype.toHTML=function(){return""+this.string
};
a["default"]=c;
b.exports=a["default"]
},function(b,q,e){var p=e(3)["default"];
var a=e(1)["default"];
q.__esModule=true;
q.checkRevision=k;
q.template=n;
q.wrapProgram=h;
q.resolvePartial=j;
q.invokePartial=r;
q.noop=f;
var i=e(5);
var d=p(i);
var l=e(6);
var c=a(l);
var m=e(4);
function k(u){var t=u&&u[0]||1,w=m.COMPILER_REVISION;
if(t!==w){if(t<w){var s=m.REVISION_CHANGES[w],v=m.REVISION_CHANGES[t];
throw new c["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+s+") or downgrade your runtime to an older version ("+v+").")
}else{throw new c["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+u[1]+").")
}}}function n(C,w){if(!w){throw new c["default"]("No environment passed to template")
}if(!C||!C.main){throw new c["default"]("Unknown template object: "+typeof C)
}C.main.decorator=C.main_d;
w.VM.checkRevision(C.compiler);
function D(H,K,I){if(I.hash){K=d.extend({},K,I.hash);
if(I.ids){I.ids[0]=true
}}H=w.VM.resolvePartial.call(this,H,K,I);
var E=w.VM.invokePartial.call(this,H,K,I);
if(E==null&&w.compile){I.partials[I.name]=w.compile(H,C.compilerOptions,w);
E=I.partials[I.name](K,I)
}if(E!=null){if(I.indent){var G=E.split("\n");
for(var J=0,F=G.length;
J<F;
J++){if(!G[J]&&J+1===F){break
}G[J]=I.indent+G[J]
}E=G.join("\n")
}return E
}else{throw new c["default"]("The partial "+I.name+" could not be compiled when running in runtime-only mode")
}}var s={strict:function B(F,E){if(!(E in F)){throw new c["default"]('"'+E+'" not defined in '+F)
}return F[E]
},lookup:function t(H,F){var E=H.length;
for(var G=0;
G<E;
G++){if(H[G]&&H[G][F]!=null){return H[G][F]
}}},lambda:function x(F,E){return typeof F==="function"?F.call(E):F
},escapeExpression:d.escapeExpression,invokePartial:D,fn:function A(F){var E=C[F];
E.decorator=C[F+"_d"];
return E
},programs:[],program:function v(G,J,F,I,K){var E=this.programs[G],H=this.fn(G);
if(J||K||I||F){E=h(this,G,H,J,F,I,K)
}else{if(!E){E=this.programs[G]=h(this,G,H)
}}return E
},data:function u(E,F){while(E&&F--){E=E._parent
}return E
},merge:function z(G,E){var F=G||E;
if(G&&E&&G!==E){F=d.extend({},E,G)
}return F
},noop:w.VM.noop,compilerInfo:C.compiler};
function y(G){var F=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];
var I=F.data;
y._setup(F);
if(!F.partial&&C.useData){I=o(G,I)
}var J=undefined,H=C.useBlockParams?[]:undefined;
if(C.useDepths){if(F.depths){J=G!==F.depths[0]?[G].concat(F.depths):F.depths
}else{J=[G]
}}function E(K){return""+C.main(s,K,s.helpers,s.partials,I,H,J)
}E=g(C.main,E,s,F.depths||[],I,H);
return E(G,F)
}y.isTop=true;
y._setup=function(E){if(!E.partial){s.helpers=s.merge(E.helpers,w.helpers);
if(C.usePartial){s.partials=s.merge(E.partials,w.partials)
}if(C.usePartial||C.useDecorators){s.decorators=s.merge(E.decorators,w.decorators)
}}else{s.helpers=E.helpers;
s.partials=E.partials;
s.decorators=E.decorators
}};
y._child=function(E,G,F,H){if(C.useBlockParams&&!F){throw new c["default"]("must pass block params")
}if(C.useDepths&&!H){throw new c["default"]("must pass parent depths")
}return h(s,E,C[E],G,0,F,H)
};
return y
}function h(s,u,v,x,t,w,z){function y(B){var A=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];
var C=z;
if(z&&B!==z[0]){C=[B].concat(z)
}return v(s,B,s.helpers,s.partials,A.data||x,w&&[A.blockParams].concat(w),C)
}y=g(v,y,s,z,x,w);
y.program=u;
y.depth=z?z.length:0;
y.blockParams=t||0;
return y
}function j(s,u,t){if(!s){if(t.name==="@partial-block"){s=t.data["partial-block"]
}else{s=t.partials[t.name]
}}else{if(!s.call&&!t.name){t.name=s;
s=t.partials[s]
}}return s
}function r(s,u,t){t.partial=true;
if(t.ids){t.data.contextPath=t.ids[0]||t.data.contextPath
}var v=undefined;
if(t.fn&&t.fn!==f){t.data=m.createFrame(t.data);
v=t.data["partial-block"]=t.fn;
if(v.partials){t.partials=d.extend({},t.partials,v.partials)
}}if(s===undefined&&v){s=v
}if(s===undefined){throw new c["default"]("The partial "+t.name+" could not be found")
}else{if(s instanceof Function){return s(u,t)
}}}function f(){return""
}function o(s,t){if(!t||!("root" in t)){t=t?m.createFrame(t):{};
t.root=s
}return t
}function g(u,x,s,y,w,v){if(u.decorator){var t={};
x=u.decorator(x,t,s,y&&y[0],w,v,y);
d.extend(x,t)
}return x
}},function(b,a){(function(c){a.__esModule=true;
a["default"]=function(f){var d=typeof c!=="undefined"?c:window,e=d.Handlebars;
f.noConflict=function(){if(d.Handlebars===f){d.Handlebars=e
}return f
}
};
b.exports=a["default"]
}.call(a,(function(){return this
}())))
},function(c,a){a.__esModule=true;
var e={helpers:{helperExpression:function d(g){return g.type==="SubExpression"||(g.type==="MustacheStatement"||g.type==="BlockStatement")&&!!(g.params&&g.params.length||g.hash)
},scopedId:function f(g){return(/^\.|this\b/.test(g.original))
},simpleId:function b(g){return g.parts.length===1&&!e.helpers.scopedId(g)&&!g.depth
}}};
a["default"]=e;
c.exports=a["default"]
},function(c,e,b){var m=b(1)["default"];
var g=b(3)["default"];
e.__esModule=true;
e.parse=d;
var h=b(23);
var i=m(h);
var f=b(24);
var l=m(f);
var a=b(26);
var k=g(a);
var n=b(5);
e.parser=i["default"];
var j={};
n.extend(j,k);
function d(o,p){if(o.type==="Program"){return o
}i["default"].yy=j;
j.locInfo=function(r){return new j.SourceLocation(p&&p.srcName,r)
};
var q=new l["default"](p);
return q.accept(i["default"].parse(o))
}},function(c,b){var a=(function(){var j={trace:function f(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition_plus0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,"$accept":0,"$end":1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,1],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function e(p,q,k,r,s,t,m){var n=t.length-1;
switch(s){case 1:return t[n-1];
break;
case 2:this.$=r.prepareProgram(t[n]);
break;
case 3:this.$=t[n];
break;
case 4:this.$=t[n];
break;
case 5:this.$=t[n];
break;
case 6:this.$=t[n];
break;
case 7:this.$=t[n];
break;
case 8:this.$=t[n];
break;
case 9:this.$={type:"CommentStatement",value:r.stripComment(t[n]),strip:r.stripFlags(t[n],t[n]),loc:r.locInfo(this._$)};
break;
case 10:this.$={type:"ContentStatement",original:t[n],value:t[n],loc:r.locInfo(this._$)};
break;
case 11:this.$=r.prepareRawBlock(t[n-2],t[n-1],t[n],this._$);
break;
case 12:this.$={path:t[n-3],params:t[n-2],hash:t[n-1]};
break;
case 13:this.$=r.prepareBlock(t[n-3],t[n-2],t[n-1],t[n],false,this._$);
break;
case 14:this.$=r.prepareBlock(t[n-3],t[n-2],t[n-1],t[n],true,this._$);
break;
case 15:this.$={open:t[n-5],path:t[n-4],params:t[n-3],hash:t[n-2],blockParams:t[n-1],strip:r.stripFlags(t[n-5],t[n])};
break;
case 16:this.$={path:t[n-4],params:t[n-3],hash:t[n-2],blockParams:t[n-1],strip:r.stripFlags(t[n-5],t[n])};
break;
case 17:this.$={path:t[n-4],params:t[n-3],hash:t[n-2],blockParams:t[n-1],strip:r.stripFlags(t[n-5],t[n])};
break;
case 18:this.$={strip:r.stripFlags(t[n-1],t[n-1]),program:t[n]};
break;
case 19:var l=r.prepareBlock(t[n-2],t[n-1],t[n],t[n],false,this._$),o=r.prepareProgram([l],t[n-1].loc);
o.chained=true;
this.$={strip:t[n-2].strip,program:o,chain:true};
break;
case 20:this.$=t[n];
break;
case 21:this.$={path:t[n-1],strip:r.stripFlags(t[n-2],t[n])};
break;
case 22:this.$=r.prepareMustache(t[n-3],t[n-2],t[n-1],t[n-4],r.stripFlags(t[n-4],t[n]),this._$);
break;
case 23:this.$=r.prepareMustache(t[n-3],t[n-2],t[n-1],t[n-4],r.stripFlags(t[n-4],t[n]),this._$);
break;
case 24:this.$={type:"PartialStatement",name:t[n-3],params:t[n-2],hash:t[n-1],indent:"",strip:r.stripFlags(t[n-4],t[n]),loc:r.locInfo(this._$)};
break;
case 25:this.$=r.preparePartialBlock(t[n-2],t[n-1],t[n],this._$);
break;
case 26:this.$={path:t[n-3],params:t[n-2],hash:t[n-1],strip:r.stripFlags(t[n-4],t[n])};
break;
case 27:this.$=t[n];
break;
case 28:this.$=t[n];
break;
case 29:this.$={type:"SubExpression",path:t[n-3],params:t[n-2],hash:t[n-1],loc:r.locInfo(this._$)};
break;
case 30:this.$={type:"Hash",pairs:t[n],loc:r.locInfo(this._$)};
break;
case 31:this.$={type:"HashPair",key:r.id(t[n-2]),value:t[n],loc:r.locInfo(this._$)};
break;
case 32:this.$=r.id(t[n-1]);
break;
case 33:this.$=t[n];
break;
case 34:this.$=t[n];
break;
case 35:this.$={type:"StringLiteral",value:t[n],original:t[n],loc:r.locInfo(this._$)};
break;
case 36:this.$={type:"NumberLiteral",value:Number(t[n]),original:Number(t[n]),loc:r.locInfo(this._$)};
break;
case 37:this.$={type:"BooleanLiteral",value:t[n]==="true",original:t[n]==="true",loc:r.locInfo(this._$)};
break;
case 38:this.$={type:"UndefinedLiteral",original:undefined,value:undefined,loc:r.locInfo(this._$)};
break;
case 39:this.$={type:"NullLiteral",original:null,value:null,loc:r.locInfo(this._$)};
break;
case 40:this.$=t[n];
break;
case 41:this.$=t[n];
break;
case 42:this.$=r.preparePath(true,t[n],this._$);
break;
case 43:this.$=r.preparePath(false,t[n],this._$);
break;
case 44:t[n-2].push({part:r.id(t[n]),original:t[n],separator:t[n-1]});
this.$=t[n-2];
break;
case 45:this.$=[{part:r.id(t[n]),original:t[n]}];
break;
case 46:this.$=[];
break;
case 47:t[n-1].push(t[n]);
break;
case 48:this.$=[t[n]];
break;
case 49:t[n-1].push(t[n]);
break;
case 50:this.$=[];
break;
case 51:t[n-1].push(t[n]);
break;
case 58:this.$=[];
break;
case 59:t[n-1].push(t[n]);
break;
case 64:this.$=[];
break;
case 65:t[n-1].push(t[n]);
break;
case 70:this.$=[];
break;
case 71:t[n-1].push(t[n]);
break;
case 78:this.$=[];
break;
case 79:t[n-1].push(t[n]);
break;
case 82:this.$=[];
break;
case 83:t[n-1].push(t[n]);
break;
case 86:this.$=[];
break;
case 87:t[n-1].push(t[n]);
break;
case 90:this.$=[];
break;
case 91:t[n-1].push(t[n]);
break;
case 94:this.$=[];
break;
case 95:t[n-1].push(t[n]);
break;
case 98:this.$=[t[n]];
break;
case 99:t[n-1].push(t[n]);
break;
case 100:this.$=[t[n]];
break;
case 101:t[n-1].push(t[n]);
break
}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{13:40,15:[1,20],17:39},{20:42,56:41,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:45,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:48,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:42,56:49,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:50,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,51]},{72:[1,35],86:52},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:53,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:54,38:56,39:[1,58],43:57,44:[1,59],45:55,47:[2,54]},{28:60,43:61,44:[1,59],47:[2,56]},{13:63,15:[1,20],18:[1,62]},{15:[2,48],18:[2,48]},{33:[2,86],57:64,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:65,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:66,47:[1,67]},{30:68,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:69,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:70,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:71,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:75,33:[2,80],50:72,63:73,64:76,65:[1,44],69:74,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,80]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,51]},{20:75,53:81,54:[2,84],63:82,64:76,65:[1,44],69:83,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:84,47:[1,67]},{47:[2,55]},{4:85,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:86,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:87,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:88,47:[1,67]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:75,33:[2,88],58:89,63:90,64:76,65:[1,44],69:91,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:92,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:93,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,31:94,33:[2,60],63:95,64:76,65:[1,44],69:96,70:77,71:78,72:[1,79],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,66],36:97,63:98,64:76,65:[1,44],69:99,70:77,71:78,72:[1,79],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,22:100,23:[2,52],63:101,64:76,65:[1,44],69:102,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,92],62:103,63:104,64:76,65:[1,44],69:105,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,106]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:107,72:[1,108],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,109],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,110]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:56,39:[1,58],43:57,44:[1,59],45:112,46:111,47:[2,76]},{33:[2,70],40:113,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,114]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:75,63:116,64:76,65:[1,44],67:115,68:[2,96],69:117,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,118]},{32:119,33:[2,62],74:120,75:[1,121]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:122,74:123,75:[1,121]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,124]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,125]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,109]},{20:75,63:126,64:76,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:75,33:[2,72],41:127,63:128,64:76,65:[1,44],69:129,70:77,71:78,72:[1,79],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,130]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,131]},{33:[2,63]},{72:[1,133],76:132},{33:[1,134]},{33:[2,69]},{15:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:135,74:136,75:[1,121]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,138],77:[1,137]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,139]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],55:[2,55],57:[2,20],61:[2,57],74:[2,81],83:[2,85],87:[2,18],91:[2,89],102:[2,53],105:[2,93],111:[2,19],112:[2,77],117:[2,97],120:[2,63],123:[2,69],124:[2,12],136:[2,75],137:[2,32]},parseError:function g(l,k){throw new Error(l)
},parse:function i(v){var C=this,s=[0],L=[null],x=[],M=this.table,l="",w=0,J=0,n=0,u=2,z=1;
this.lexer.setInput(v);
this.lexer.yy=this.yy;
this.yy.lexer=this.lexer;
this.yy.parser=this;
if(typeof this.lexer.yylloc=="undefined"){this.lexer.yylloc={}
}var m=this.lexer.yylloc;
x.push(m);
var o=this.lexer.options&&this.lexer.options.ranges;
if(typeof this.yy.parseError==="function"){this.parseError=this.yy.parseError
}function B(p){s.length=s.length-2*p;
L.length=L.length-p;
x.length=x.length-p
}function A(){var p;
p=C.lexer.lex()||1;
if(typeof p!=="number"){p=C.symbols_[p]||p
}return p
}var I,E,q,H,N,y,G={},D,K,k,t;
while(true){q=s[s.length-1];
if(this.defaultActions[q]){H=this.defaultActions[q]
}else{if(I===null||typeof I=="undefined"){I=A()
}H=M[q]&&M[q][I]
}if(typeof H==="undefined"||!H.length||!H[0]){var F="";
if(!n){t=[];
for(D in M[q]){if(this.terminals_[D]&&D>2){t.push("'"+this.terminals_[D]+"'")
}}if(this.lexer.showPosition){F="Parse error on line "+(w+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+t.join(", ")+", got '"+(this.terminals_[I]||I)+"'"
}else{F="Parse error on line "+(w+1)+": Unexpected "+(I==1?"end of input":"'"+(this.terminals_[I]||I)+"'")
}this.parseError(F,{text:this.lexer.match,token:this.terminals_[I]||I,line:this.lexer.yylineno,loc:m,expected:t})
}}if(H[0] instanceof Array&&H.length>1){throw new Error("Parse Error: multiple actions possible at state: "+q+", token: "+I)
}switch(H[0]){case 1:s.push(I);
L.push(this.lexer.yytext);
x.push(this.lexer.yylloc);
s.push(H[1]);
I=null;
if(!E){J=this.lexer.yyleng;
l=this.lexer.yytext;
w=this.lexer.yylineno;
m=this.lexer.yylloc;
if(n>0){n--
}}else{I=E;
E=null
}break;
case 2:K=this.productions_[H[1]][1];
G.$=L[L.length-K];
G._$={first_line:x[x.length-(K||1)].first_line,last_line:x[x.length-1].last_line,first_column:x[x.length-(K||1)].first_column,last_column:x[x.length-1].last_column};
if(o){G._$.range=[x[x.length-(K||1)].range[0],x[x.length-1].range[1]]
}y=this.performAction.call(G,l,J,w,this.yy,H[1],L,x);
if(typeof y!=="undefined"){return y
}if(K){s=s.slice(0,-1*K*2);
L=L.slice(0,-1*K);
x=x.slice(0,-1*K)
}s.push(this.productions_[H[1]][0]);
L.push(G.$);
x.push(G._$);
k=M[s[s.length-2]][s[s.length-1]];
s.push(k);
break;
case 3:return true
}}return true
}};
var d=(function(){var m={EOF:1,parseError:function o(C,B){if(this.yy.parser){this.yy.parser.parseError(C,B)
}else{throw new Error(C)
}},setInput:function n(B){this._input=B;
this._more=this._less=this.done=false;
this.yylineno=this.yyleng=0;
this.yytext=this.matched=this.match="";
this.conditionStack=["INITIAL"];
this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};
if(this.options.ranges){this.yylloc.range=[0,0]
}this.offset=0;
return this
},input:function x(){var C=this._input[0];
this.yytext+=C;
this.yyleng++;
this.offset++;
this.match+=C;
this.matched+=C;
var B=C.match(/(?:\r\n?|\n).*/g);
if(B){this.yylineno++;
this.yylloc.last_line++
}else{this.yylloc.last_column++
}if(this.options.ranges){this.yylloc.range[1]++
}this._input=this._input.slice(1);
return C
},unput:function v(D){var B=D.length;
var C=D.split(/(?:\r\n?|\n)/g);
this._input=D+this._input;
this.yytext=this.yytext.substr(0,this.yytext.length-B-1);
this.offset-=B;
var F=this.match.split(/(?:\r\n?|\n)/g);
this.match=this.match.substr(0,this.match.length-1);
this.matched=this.matched.substr(0,this.matched.length-1);
if(C.length-1){this.yylineno-=C.length-1
}var E=this.yylloc.range;
this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:C?(C.length===F.length?this.yylloc.first_column:0)+F[F.length-C.length].length-C[0].length:this.yylloc.first_column-B};
if(this.options.ranges){this.yylloc.range=[E[0],E[0]+this.yyleng-B]
}return this
},more:function t(){this._more=true;
return this
},less:function y(B){this.unput(this.match.slice(B))
},pastInput:function r(){var B=this.matched.substr(0,this.matched.length-this.match.length);
return(B.length>20?"...":"")+B.substr(-20).replace(/\n/g,"")
},upcomingInput:function z(){var B=this.match;
if(B.length<20){B+=this._input.substr(0,20-B.length)
}return(B.substr(0,20)+(B.length>20?"...":"")).replace(/\n/g,"")
},showPosition:function u(){var B=this.pastInput();
var C=new Array(B.length+1).join("-");
return B+this.upcomingInput()+"\n"+C+"^"
},next:function q(){if(this.done){return this.EOF
}if(!this._input){this.done=true
}var H,F,C,E,D,B;
if(!this._more){this.yytext="";
this.match=""
}var I=this._currentRules();
for(var G=0;
G<I.length;
G++){C=this._input.match(this.rules[I[G]]);
if(C&&(!F||C[0].length>F[0].length)){F=C;
E=G;
if(!this.options.flex){break
}}}if(F){B=F[0].match(/(?:\r\n?|\n).*/g);
if(B){this.yylineno+=B.length
}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:B?B[B.length-1].length-B[B.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+F[0].length};
this.yytext+=F[0];
this.match+=F[0];
this.matches=F;
this.yyleng=this.yytext.length;
if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]
}this._more=false;
this._input=this._input.slice(F[0].length);
this.matched+=F[0];
H=this.performAction.call(this,this.yy,this,I[E],this.conditionStack[this.conditionStack.length-1]);
if(this.done&&this._input){this.done=false
}if(H){return H
}else{return
}}if(this._input===""){return this.EOF
}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})
}},lex:function k(){var B=this.next();
if(typeof B!=="undefined"){return B
}else{return this.lex()
}},begin:function l(B){this.conditionStack.push(B)
},popState:function p(){return this.conditionStack.pop()
},_currentRules:function A(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules
},topState:function s(){return this.conditionStack[this.conditionStack.length-2]
},pushState:function l(B){this.begin(B)
}};
m.options={};
m.performAction=function w(G,C,F,B){function D(I,H){return C.yytext=C.yytext.substr(I,C.yyleng-H)
}var E=B;
switch(F){case 0:if(C.yytext.slice(-2)==="\\\\"){D(0,1);
this.begin("mu")
}else{if(C.yytext.slice(-1)==="\\"){D(0,1);
this.begin("emu")
}else{this.begin("mu")
}}if(C.yytext){return 15
}break;
case 1:return 15;
break;
case 2:this.popState();
return 15;
break;
case 3:this.begin("raw");
return 15;
break;
case 4:this.popState();
if(this.conditionStack[this.conditionStack.length-1]==="raw"){return 15
}else{C.yytext=C.yytext.substr(5,C.yyleng-9);
return"END_RAW_BLOCK"
}break;
case 5:return 15;
break;
case 6:this.popState();
return 14;
break;
case 7:return 65;
break;
case 8:return 68;
break;
case 9:return 19;
break;
case 10:this.popState();
this.begin("raw");
return 23;
break;
case 11:return 55;
break;
case 12:return 60;
break;
case 13:return 29;
break;
case 14:return 47;
break;
case 15:this.popState();
return 44;
break;
case 16:this.popState();
return 44;
break;
case 17:return 34;
break;
case 18:return 39;
break;
case 19:return 51;
break;
case 20:return 48;
break;
case 21:this.unput(C.yytext);
this.popState();
this.begin("com");
break;
case 22:this.popState();
return 14;
break;
case 23:return 48;
break;
case 24:return 73;
break;
case 25:return 72;
break;
case 26:return 72;
break;
case 27:return 87;
break;
case 28:break;
case 29:this.popState();
return 54;
break;
case 30:this.popState();
return 33;
break;
case 31:C.yytext=D(1,2).replace(/\\"/g,'"');
return 80;
break;
case 32:C.yytext=D(1,2).replace(/\\'/g,"'");
return 80;
break;
case 33:return 85;
break;
case 34:return 82;
break;
case 35:return 82;
break;
case 36:return 83;
break;
case 37:return 84;
break;
case 38:return 81;
break;
case 39:return 75;
break;
case 40:return 77;
break;
case 41:return 72;
break;
case 42:C.yytext=C.yytext.replace(/\\([\\\]])/g,"$1");
return 72;
break;
case 43:return"INVALID";
break;
case 44:return 5;
break
}};
m.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/];
m.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:false},emu:{rules:[2],inclusive:false},com:{rules:[6],inclusive:false},raw:{rules:[3,4,5],inclusive:false},INITIAL:{rules:[0,1,44],inclusive:true}};
return m
})();
j.lexer=d;
function h(){this.yy={}
}h.prototype=j;
j.Parser=h;
return new h()
})();
b.__esModule=true;
b["default"]=a
},function(b,c,a){var j=a(1)["default"];
c.__esModule=true;
var e=a(25);
var k=j(e);
function d(){var l=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
this.options=l
}d.prototype=new k["default"]();
d.prototype.Program=function(t){var v=!this.options.ignoreStandalone;
var p=!this.isRootSeen;
this.isRootSeen=true;
var u=t.body;
for(var s=0,q=u.length;
s<q;
s++){var w=u[s],m=this.accept(w);
if(!m){continue
}var o=f(u,s,p),r=h(u,s,p),n=m.openStandalone&&o,y=m.closeStandalone&&r,x=m.inlineStandalone&&o&&r;
if(m.close){g(u,s,true)
}if(m.open){i(u,s,true)
}if(v&&x){g(u,s);
if(i(u,s)){if(w.type==="PartialStatement"){w.indent=/([ \t]+$)/.exec(u[s-1].original)[1]
}}}if(v&&n){g((w.program||w.inverse).body);
i(u,s)
}if(v&&y){g(u,s);
i((w.inverse||w.program).body)
}}return t
};
d.prototype.BlockStatement=d.prototype.DecoratorBlock=d.prototype.PartialBlockStatement=function(r){this.accept(r.program);
this.accept(r.inverse);
var n=r.program||r.inverse,l=r.program&&r.inverse,m=l,q=l;
if(l&&l.chained){m=l.body[0].program;
while(q.chained){q=q.body[q.body.length-1].program
}}var o={open:r.openStrip.open,close:r.closeStrip.close,openStandalone:h(n.body),closeStandalone:f((m||n).body)};
if(r.openStrip.close){g(n.body,null,true)
}if(l){var p=r.inverseStrip;
if(p.open){i(n.body,null,true)
}if(p.close){g(m.body,null,true)
}if(r.closeStrip.open){i(q.body,null,true)
}if(!this.options.ignoreStandalone&&f(n.body)&&h(m.body)){i(n.body);
g(m.body)
}}else{if(r.closeStrip.open){i(n.body,null,true)
}}return o
};
d.prototype.Decorator=d.prototype.MustacheStatement=function(l){return l.strip
};
d.prototype.PartialStatement=d.prototype.CommentStatement=function(m){var l=m.strip||{};
return{inlineStandalone:true,open:l.open,close:l.close}
};
function f(l,n,m){if(n===undefined){n=l.length
}var p=l[n-1],o=l[n-2];
if(!p){return m
}if(p.type==="ContentStatement"){return(o||!m?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(p.original)
}}function h(l,n,m){if(n===undefined){n=-1
}var p=l[n+1],o=l[n+2];
if(!p){return m
}if(p.type==="ContentStatement"){return(o||!m?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(p.original)
}}function g(m,o,l){var p=m[o==null?0:o+1];
if(!p||p.type!=="ContentStatement"||!l&&p.rightStripped){return
}var n=p.value;
p.value=p.value.replace(l?/^\s+/:/^[ \t]*\r?\n?/,"");
p.rightStripped=p.value!==n
}function i(m,o,l){var p=m[o==null?m.length-1:o-1];
if(!p||p.type!=="ContentStatement"||!l&&p.leftStripped){return
}var n=p.value;
p.value=p.value.replace(l?/\s+$/:/[ \t]+$/,"");
p.leftStripped=p.value!==n;
return p.leftStripped
}c["default"]=d;
b.exports=c["default"]
},function(c,y,e){var a=e(1)["default"];
y.__esModule=true;
var t=e(6);
var d=a(t);
function x(){this.parents=[]
}x.prototype={constructor:x,mutating:false,acceptKey:function q(B,A){var C=this.accept(B[A]);
if(this.mutating){if(C&&!x.prototype[C.type]){throw new d["default"]('Unexpected node type "'+C.type+'" found when accepting '+A+" on "+B.type)
}B[A]=C
}},acceptRequired:function u(B,A){this.acceptKey(B,A);
if(!B[A]){throw new d["default"](B.type+" requires "+A)
}},acceptArray:function v(C){for(var B=0,A=C.length;
B<A;
B++){this.acceptKey(C,B);
if(!C[B]){C.splice(B,1);
B--;
A--
}}},accept:function f(B){if(!B){return
}if(!this[B.type]){throw new d["default"]("Unknown type: "+B.type,B)
}if(this.current){this.parents.unshift(this.current)
}this.current=B;
var A=this[B.type](B);
this.current=this.parents.shift();
if(!this.mutating||A){return A
}else{if(A!==false){return B
}}},Program:function w(A){this.acceptArray(A.body)
},MustacheStatement:n,Decorator:n,BlockStatement:h,DecoratorBlock:h,PartialStatement:z,PartialBlockStatement:function b(A){z.call(this,A);
this.acceptKey(A,"program")
},ContentStatement:function s(){},CommentStatement:function m(){},SubExpression:n,PathExpression:function g(){},StringLiteral:function p(){},NumberLiteral:function r(){},BooleanLiteral:function l(){},UndefinedLiteral:function o(){},NullLiteral:function k(){},Hash:function i(A){this.acceptArray(A.pairs)
},HashPair:function j(A){this.acceptRequired(A,"value")
}};
function n(A){this.acceptRequired(A,"path");
this.acceptArray(A.params);
this.acceptKey(A,"hash")
}function h(A){n.call(this,A);
this.acceptKey(A,"program");
this.acceptKey(A,"inverse")
}function z(A){this.acceptRequired(A,"name");
this.acceptArray(A.params);
this.acceptKey(A,"hash")
}y["default"]=x;
c.exports=y["default"]
},function(d,h,c){var q=c(1)["default"];
h.__esModule=true;
h.SourceLocation=l;
h.id=b;
h.stripFlags=g;
h.stripComment=o;
h.preparePath=f;
h.prepareMustache=k;
h.prepareRawBlock=n;
h.prepareBlock=p;
h.prepareProgram=j;
h.preparePartialBlock=m;
var e=c(6);
var a=q(e);
function i(r,t){t=t.path?t.path.original:t;
if(r.path.original!==t){var s={loc:r.path.loc};
throw new a["default"](r.path.original+" doesn't match "+t,s)
}}function l(s,r){this.source=s;
this.start={line:r.first_line,column:r.first_column};
this.end={line:r.last_line,column:r.last_column}
}function b(r){if(/^\[.*\]$/.test(r)){return r.substr(1,r.length-2)
}else{return r
}}function g(r,s){return{open:r.charAt(2)==="~",close:s.charAt(s.length-3)==="~"}
}function o(r){return r.replace(/^\{\{~?\!-?-?/,"").replace(/-?-?~?\}\}$/,"")
}function f(y,w,A){A=this.locInfo(A);
var u=y?"@":"",B=[],x=0,t="";
for(var z=0,v=w.length;
z<v;
z++){var s=w[z].part,r=w[z].original!==s;
u+=(w[z].separator||"")+s;
if(!r&&(s===".."||s==="."||s==="this")){if(B.length>0){throw new a["default"]("Invalid path: "+u,{loc:A})
}else{if(s===".."){x++;
t+="../"
}}}else{B.push(s)
}}return{type:"PathExpression",data:y,depth:x,parts:B,original:u,loc:A}
}function k(z,t,v,w,s,y){var x=w.charAt(3)||w.charAt(2),r=x!=="{"&&x!=="&";
var u=/\*/.test(w);
return{type:u?"Decorator":"MustacheStatement",path:z,params:t,hash:v,escaped:r,strip:s,loc:this.locInfo(y)}
}function n(r,u,v,t){i(r,v);
t=this.locInfo(t);
var s={type:"Program",body:u,strip:{},loc:t};
return{type:"BlockStatement",path:r.path,params:r.params,hash:r.hash,program:s,openStrip:{},inverseStrip:{},closeStrip:{},loc:t}
}function p(w,v,x,z,s,y){if(z&&z.path){i(w,z)
}var t=/\*/.test(w.open);
v.blockParams=w.blockParams;
var u=undefined,r=undefined;
if(x){if(t){throw new a["default"]("Unexpected inverse block on decorator",x)
}if(x.chain){x.program.body[0].closeStrip=z.strip
}r=x.strip;
u=x.program
}if(s){s=u;
u=v;
v=s
}return{type:t?"DecoratorBlock":"BlockStatement",path:w.path,params:w.params,hash:w.hash,program:v,inverse:u,openStrip:w.strip,inverseStrip:r,closeStrip:z&&z.strip,loc:this.locInfo(y)}
}function j(r,u){if(!u&&r.length){var t=r[0].loc,s=r[r.length-1].loc;
if(t&&s){u={source:t.source,start:{line:t.start.line,column:t.start.column},end:{line:s.end.line,column:s.end.column}}
}}return{type:"Program",body:r,strip:{},loc:u}
}function m(s,r,u,t){i(s,u);
return{type:"PartialBlockStatement",name:s.path,params:s.params,hash:s.hash,program:r,openStrip:s.strip,closeStrip:u&&u.strip,loc:this.locInfo(t)}
}},function(d,J,j){var S=j(1)["default"];
J.__esModule=true;
J.Compiler=x;
J.precompile=R;
J.compile=k;
var Q=j(6);
var t=S(Q);
var b=j(5);
var a=j(21);
var e=S(a);
var p=[].slice;
function x(){}x.prototype={compiler:x,equals:function w(U){var T=this.opcodes.length;
if(U.opcodes.length!==T){return false
}for(var W=0;
W<T;
W++){var X=this.opcodes[W],V=U.opcodes[W];
if(X.opcode!==V.opcode||!v(X.args,V.args)){return false
}}T=this.children.length;
for(var W=0;
W<T;
W++){if(!this.children[W].equals(U.children[W])){return false
}}return true
},guid:0,compile:function k(U,V){this.sourceNode=[];
this.opcodes=[];
this.children=[];
this.options=V;
this.stringParams=V.stringParams;
this.trackIds=V.trackIds;
V.blockParams=V.blockParams||[];
var W=V.knownHelpers;
V.knownHelpers={helperMissing:true,blockHelperMissing:true,each:true,"if":true,unless:true,"with":true,log:true,lookup:true};
if(W){for(var T in W){if(T in W){V.knownHelpers[T]=W[T]
}}}return this.accept(U)
},compileProgram:function o(U){var W=new this.compiler(),T=W.compile(U,this.options),V=this.guid++;
this.usePartial=this.usePartial||T.usePartial;
this.children[V]=T;
this.useDepths=this.useDepths||T.useDepths;
return V
},accept:function f(U){if(!this[U.type]){throw new t["default"]("Unknown type: "+U.type,U)
}this.sourceNode.unshift(U);
var T=this[U.type](U);
this.sourceNode.shift();
return T
},Program:function P(U){this.options.blockParams.unshift(U.blockParams);
var T=U.body,W=T.length;
for(var V=0;
V<W;
V++){this.accept(T[V])
}this.options.blockParams.shift();
this.isSimple=W===1;
this.blockParams=U.blockParams?U.blockParams.length:0;
return this
},BlockStatement:function O(W){g(W);
var U=W.program,T=W.inverse;
U=U&&this.compileProgram(U);
T=T&&this.compileProgram(T);
var V=this.classifySexpr(W);
if(V==="helper"){this.helperSexpr(W,U,T)
}else{if(V==="simple"){this.simpleSexpr(W);
this.opcode("pushProgram",U);
this.opcode("pushProgram",T);
this.opcode("emptyHash");
this.opcode("blockValue",W.path.original)
}else{this.ambiguousSexpr(W,U,T);
this.opcode("pushProgram",U);
this.opcode("pushProgram",T);
this.opcode("emptyHash");
this.opcode("ambiguousBlockValue")
}}this.opcode("append")
},DecoratorBlock:function r(U){var T=U.program&&this.compileProgram(U.program);
var W=this.setupFullMustacheParams(U,T,undefined),V=U.path;
this.useDecorators=true;
this.opcode("registerDecorator",W.length,V.original)
},PartialStatement:function K(W){this.usePartial=true;
var V=W.program;
if(V){V=this.compileProgram(W.program)
}var Y=W.params;
if(Y.length>1){throw new t["default"]("Unsupported number of partial arguments: "+Y.length,W)
}else{if(!Y.length){if(this.options.explicitPartialContext){this.opcode("pushLiteral","undefined")
}else{Y.push({type:"PathExpression",parts:[],depth:0})
}}}var X=W.name.original,U=W.name.type==="SubExpression";
if(U){this.accept(W.name)
}this.setupFullMustacheParams(W,V,undefined,true);
var T=W.indent||"";
if(this.options.preventIndent&&T){this.opcode("appendContent",T);
T=""
}this.opcode("invokePartial",U,X,T);
this.opcode("append")
},PartialBlockStatement:function G(T){this.PartialStatement(T)
},MustacheStatement:function z(T){this.SubExpression(T);
if(T.escaped&&!this.options.noEscape){this.opcode("appendEscaped")
}else{this.opcode("append")
}},Decorator:function h(T){this.DecoratorBlock(T)
},ContentStatement:function i(T){if(T.value){this.opcode("appendContent",T.value)
}},CommentStatement:function y(){},SubExpression:function H(U){g(U);
var T=this.classifySexpr(U);
if(T==="simple"){this.simpleSexpr(U)
}else{if(T==="helper"){this.helperSexpr(U)
}else{this.ambiguousSexpr(U)
}}},ambiguousSexpr:function u(X,V,U){var Y=X.path,W=Y.parts[0],T=V!=null||U!=null;
this.opcode("getContext",Y.depth);
this.opcode("pushProgram",V);
this.opcode("pushProgram",U);
Y.strict=true;
this.accept(Y);
this.opcode("invokeAmbiguous",W,T)
},simpleSexpr:function E(T){var U=T.path;
U.strict=true;
this.accept(U);
this.opcode("resolvePossibleLambda")
},helperSexpr:function q(W,U,T){var Y=this.setupFullMustacheParams(W,U,T),X=W.path,V=X.parts[0];
if(this.options.knownHelpers[V]){this.opcode("invokeKnownHelper",Y.length,V)
}else{if(this.options.knownHelpersOnly){throw new t["default"]("You specified knownHelpersOnly, but used the unknown helper "+V,W)
}else{X.strict=true;
X.falsy=true;
this.accept(X);
this.opcode("invokeHelper",Y.length,X.original,e["default"].helpers.simpleId(X))
}}},PathExpression:function c(U){this.addDepth(U.depth);
this.opcode("getContext",U.depth);
var T=U.parts[0],W=e["default"].helpers.scopedId(U),V=!U.depth&&!W&&this.blockParamIndex(T);
if(V){this.opcode("lookupBlockParam",V,U.parts)
}else{if(!T){this.opcode("pushContext")
}else{if(U.data){this.options.data=true;
this.opcode("lookupData",U.depth,U.parts,U.strict)
}else{this.opcode("lookupOnContext",U.parts,U.falsy,U.strict,W)
}}}},StringLiteral:function l(T){this.opcode("pushString",T.value)
},NumberLiteral:function C(T){this.opcode("pushLiteral",T.value)
},BooleanLiteral:function M(T){this.opcode("pushLiteral",T.value)
},UndefinedLiteral:function m(){this.opcode("pushLiteral","undefined")
},NullLiteral:function N(){this.opcode("pushLiteral","null")
},Hash:function B(W){var V=W.pairs,U=0,T=V.length;
this.opcode("pushHash");
for(;
U<T;
U++){this.pushParam(V[U].value)
}while(U--){this.opcode("assignToHash",V[U].key)
}this.opcode("popHash")
},opcode:function D(T){this.opcodes.push({opcode:T,args:p.call(arguments,1),loc:this.sourceNode[0].loc})
},addDepth:function s(T){if(!T){return
}this.useDepths=true
},classifySexpr:function I(W){var X=e["default"].helpers.simpleId(W.path);
var Y=X&&!!this.blockParamIndex(W.path.parts[0]);
var V=!Y&&e["default"].helpers.helperExpression(W);
var Z=!Y&&(V||X);
if(Z&&!V){var T=W.path.parts[0],U=this.options;
if(U.knownHelpers[T]){V=true
}else{if(U.knownHelpersOnly){Z=false
}}}if(V){return"helper"
}else{if(Z){return"ambiguous"
}else{return"simple"
}}},pushParams:function L(V){for(var U=0,T=V.length;
U<T;
U++){this.pushParam(V[U])
}},pushParam:function F(W){var V=W.value!=null?W.value:W.original||"";
if(this.stringParams){if(V.replace){V=V.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")
}if(W.depth){this.addDepth(W.depth)
}this.opcode("getContext",W.depth||0);
this.opcode("pushStringParam",V,W.type);
if(W.type==="SubExpression"){this.accept(W)
}}else{if(this.trackIds){var U=undefined;
if(W.parts&&!e["default"].helpers.scopedId(W)&&!W.depth){U=this.blockParamIndex(W.parts[0])
}if(U){var T=W.parts.slice(1).join(".");
this.opcode("pushId","BlockParam",U,T)
}else{V=W.original||V;
if(V.replace){V=V.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")
}this.opcode("pushId",W.type,V)
}}this.accept(W)
}},setupFullMustacheParams:function A(W,U,T,V){var X=W.params;
this.pushParams(X);
this.opcode("pushProgram",U);
this.opcode("pushProgram",T);
if(W.hash){this.accept(W.hash)
}else{this.opcode("emptyHash",V)
}return X
},blockParamIndex:function n(U){for(var X=0,T=this.options.blockParams.length;
X<T;
X++){var V=this.options.blockParams[X],W=V&&b.indexOf(V,U);
if(V&&W>=0){return[X,W]
}}}};
function R(V,W,X){if(V==null||typeof V!=="string"&&V.type!=="Program"){throw new t["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+V)
}W=W||{};
if(!("data" in W)){W.data=true
}if(W.compat){W.useDepths=true
}var U=X.parse(V,W),T=new X.Compiler().compile(U,W);
return new X.JavaScriptCompiler().compile(T,W)
}function k(T,V,W){if(V===undefined){V={}
}if(T==null||typeof T!=="string"&&T.type!=="Program"){throw new t["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+T)
}if(!("data" in V)){V.data=true
}if(V.compat){V.useDepths=true
}var Y=undefined;
function X(){var ab=W.parse(T,V),aa=new W.Compiler().compile(ab,V),Z=new W.JavaScriptCompiler().compile(aa,V,undefined,true);
return W.template(Z)
}function U(Z,aa){if(!Y){Y=X()
}return Y.call(this,Z,aa)
}U._setup=function(Z){if(!Y){Y=X()
}return Y._setup(Z)
};
U._child=function(Z,ab,aa,ac){if(!Y){Y=X()
}return Y._child(Z,ab,aa,ac)
};
return U
}function v(U,T){if(U===T){return true
}if(b.isArray(U)&&b.isArray(T)&&U.length===T.length){for(var V=0;
V<U.length;
V++){if(!v(U[V],T[V])){return false
}}return true
}}function g(U){if(!U.path.parts){var T=U.path;
U.path={type:"PathExpression",data:false,depth:0,parts:[T.original+""],original:T.original+"",loc:T.loc}
}}},function(g,ag,p){var ap=p(1)["default"];
ag.__esModule=true;
var E=p(4);
var al=p(6);
var I=ap(al);
var b=p(5);
var Y=p(29);
var J=ap(Y);
function j(ar){this.value=ar
}function c(){}c.prototype={nameLookup:function O(at,ar){if(c.isValidJavaScriptVariableName(ar)){return[at,".",ar]
}else{return[at,"[",JSON.stringify(ar),"]"]
}},depthedLookup:function P(ar){return[this.aliasable("container.lookup"),'(depths, "',ar,'")']
},compilerInfo:function z(){var at=E.COMPILER_REVISION,ar=E.REVISION_CHANGES[at];
return[at,ar]
},appendToBuffer:function an(au,ar,at){if(!b.isArray(au)){au=[au]
}au=this.source.wrap(au,ar);
if(this.environment.isSimple){return["return ",au,";"]
}else{if(at){return["buffer += ",au,";"]
}else{au.appendToBuffer=true;
return au
}}},initializeBuffer:function aj(){return this.quotedString("")
},compile:function q(aw,aF,at,az){this.environment=aw;
this.options=aF;
this.stringParams=this.options.stringParams;
this.trackIds=this.options.trackIds;
this.precompile=!az;
this.name=this.environment.name;
this.isChild=!!at;
this.context=at||{decorators:[],programs:[],environments:[]};
this.preamble();
this.stackSlot=0;
this.stackVars=[];
this.aliases={};
this.registers={list:[]};
this.hashes=[];
this.compileStack=[];
this.inlineStack=[];
this.blockParams=[];
this.compileChildren(aw,aF);
this.useDepths=this.useDepths||aw.useDepths||aw.useDecorators||this.options.compat;
this.useBlockParams=this.useBlockParams||aw.useBlockParams;
var aB=aw.opcodes,ax=undefined,aD=undefined,ay=undefined,av=undefined;
for(ay=0,av=aB.length;
ay<av;
ay++){ax=aB[ay];
this.source.currentLocation=ax.loc;
aD=aD||ax.loc;
this[ax.opcode].apply(this,ax.args)
}this.source.currentLocation=aD;
this.pushSource("");
if(this.stackSlot||this.inlineStack.length||this.compileStack.length){throw new I["default"]("Compile completed with content left on stack")
}if(!this.decorators.isEmpty()){this.useDecorators=true;
this.decorators.prepend("var decorators = container.decorators;\n");
this.decorators.push("return fn;");
if(az){this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()])
}else{this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n");
this.decorators.push("}\n");
this.decorators=this.decorators.merge()
}}else{this.decorators=undefined
}var aC=this.createFunctionContext(az);
if(!this.isChild){var aA={compiler:this.compilerInfo(),main:aC};
if(this.decorators){aA.main_d=this.decorators;
aA.useDecorators=true
}var ar=this.context;
var au=ar.programs;
var aE=ar.decorators;
for(ay=0,av=au.length;
ay<av;
ay++){if(au[ay]){aA[ay]=au[ay];
if(aE[ay]){aA[ay+"_d"]=aE[ay];
aA.useDecorators=true
}}}if(this.environment.usePartial){aA.usePartial=true
}if(this.options.data){aA.useData=true
}if(this.useDepths){aA.useDepths=true
}if(this.useBlockParams){aA.useBlockParams=true
}if(this.options.compat){aA.compat=true
}if(!az){aA.compiler=JSON.stringify(aA.compiler);
this.source.currentLocation={start:{line:1,column:0}};
aA=this.objectLiteral(aA);
if(aF.srcName){aA=aA.toStringWithSourceMap({file:aF.destName});
aA.map=aA.map&&aA.map.toString()
}else{aA=aA.toString()
}}else{aA.compilerOptions=this.options
}return aA
}else{return aC
}},preamble:function X(){this.lastContext=0;
this.source=new J["default"](this.options.srcName);
this.decorators=new J["default"](this.options.srcName)
},createFunctionContext:function am(at){var ay="";
var ax=this.stackVars.concat(this.registers.list);
if(ax.length>0){ay+=", "+ax.join(", ")
}var aw=0;
for(var ar in this.aliases){var au=this.aliases[ar];
if(this.aliases.hasOwnProperty(ar)&&au.children&&au.referenceCount>1){ay+=", alias"+ ++aw+"="+ar;
au.children[0]="alias"+aw
}}var az=["container","depth0","helpers","partials","data"];
if(this.useBlockParams||this.useDepths){az.push("blockParams")
}if(this.useDepths){az.push("depths")
}var av=this.mergeSource(ay);
if(at){az.push(av);
return Function.apply(this,az)
}else{return this.source.wrap(["function(",az.join(","),") {\n  ",av,"}"])
}},mergeSource:function C(ax){var av=this.environment.isSimple,au=!this.forceBuffer,ar=undefined,at=undefined,aw=undefined,ay=undefined;
this.source.each(function(az){if(az.appendToBuffer){if(aw){az.prepend("  + ")
}else{aw=az
}ay=az
}else{if(aw){if(!at){ar=true
}else{aw.prepend("buffer += ")
}ay.add(";");
aw=ay=undefined
}at=true;
if(!av){au=false
}}});
if(au){if(aw){aw.prepend("return ");
ay.add(";")
}else{if(!at){this.source.push('return "";')
}}}else{ax+=", buffer = "+(ar?"":this.initializeBuffer());
if(aw){aw.prepend("return buffer + ");
ay.add(";")
}else{this.source.push("return buffer;")
}}if(ax){this.source.prepend("var "+ax.substring(2)+(ar?"":";\n"))
}return this.source.merge()
},blockValue:function d(at){var au=this.aliasable("helpers.blockHelperMissing"),av=[this.contextName(0)];
this.setupHelperArgs(at,0,av);
var ar=this.popStack();
av.splice(1,0,ar);
this.push(this.source.functionCall(au,"call",av))
},ambiguousBlockValue:function T(){var ar=this.aliasable("helpers.blockHelperMissing"),au=[this.contextName(0)];
this.setupHelperArgs("",0,au,true);
this.flushInline();
var at=this.topStack();
au.splice(1,0,at);
this.pushSource(["if (!",this.lastHelper,") { ",at," = ",this.source.functionCall(ar,"call",au),"}"])
},appendContent:function f(ar){if(this.pendingContent){ar=this.pendingContent+ar
}else{this.pendingLocation=this.source.currentLocation
}this.pendingContent=ar
},append:function aa(){if(this.isInline()){this.replaceStack(function(at){return[" != null ? ",at,' : ""']
});
this.pushSource(this.appendToBuffer(this.popStack()))
}else{var ar=this.popStack();
this.pushSource(["if (",ar," != null) { ",this.appendToBuffer(ar,undefined,true)," }"]);
if(this.environment.isSimple){this.pushSource(["else { ",this.appendToBuffer("''",undefined,true)," }"])
}}},appendEscaped:function m(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))
},getContext:function A(ar){this.lastContext=ar
},pushContext:function t(){this.pushStackLiteral(this.contextName(this.lastContext))
},lookupOnContext:function aq(av,au,ar,aw){var at=0;
if(!aw&&this.options.compat&&!this.lastContext){this.push(this.depthedLookup(av[at++]))
}else{this.pushContext()
}this.resolvePath("context",av,at,au,ar)
},lookupBlockParam:function B(at,ar){this.useBlockParams=true;
this.push(["blockParams[",at[0],"][",at[1],"]"]);
this.resolvePath("context",ar,1)
},lookupData:function o(au,at,ar){if(!au){this.pushStackLiteral("data")
}else{this.pushStackLiteral("container.data(data, "+au+")")
}this.resolvePath("data",at,0,true,ar)
},resolvePath:function Q(av,ax,au,aw,at){var ay=this;
if(this.options.strict||this.options.assumeObjects){this.push(V(this.options.strict&&at,this,ax,av));
return
}var ar=ax.length;
for(;
au<ar;
au++){this.replaceStack(function(aA){var az=ay.nameLookup(aA,ax[au],av);
if(!aw){return[" != null ? ",az," : ",aA]
}else{return[" && ",az]
}})
}},resolvePossibleLambda:function af(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])
},pushStringParam:function ao(ar,at){this.pushContext();
this.pushString(at);
if(at!=="SubExpression"){if(typeof ar==="string"){this.pushString(ar)
}else{this.pushStackLiteral(ar)
}}},emptyHash:function x(ar){if(this.trackIds){this.push("{}")
}if(this.stringParams){this.push("{}");
this.push("{}")
}this.pushStackLiteral(ar?"undefined":"{}")
},pushHash:function R(){if(this.hash){this.hashes.push(this.hash)
}this.hash={values:[],types:[],contexts:[],ids:[]}
},popHash:function N(){var ar=this.hash;
this.hash=this.hashes.pop();
if(this.trackIds){this.push(this.objectLiteral(ar.ids))
}if(this.stringParams){this.push(this.objectLiteral(ar.contexts));
this.push(this.objectLiteral(ar.types))
}this.push(this.objectLiteral(ar.values))
},pushString:function k(ar){this.pushStackLiteral(this.quotedString(ar))
},pushLiteral:function H(ar){this.pushStackLiteral(ar)
},pushProgram:function v(ar){if(ar!=null){this.pushStackLiteral(this.programExpression(ar))
}else{this.pushStackLiteral(null)
}},registerDecorator:function K(av,au){var ar=this.nameLookup("decorators",au,"decorator"),at=this.setupHelperArgs(au,av);
this.decorators.push(["fn = ",this.decorators.functionCall(ar,"",["fn","props","container",at])," || fn;"])
},invokeHelper:function Z(aw,ar,au){var ay=this.popStack(),at=this.setupHelper(aw,ar),ax=au?[at.name," || "]:"";
var av=["("].concat(ax,ay);
if(!this.options.strict){av.push(" || ",this.aliasable("helpers.helperMissing"))
}av.push(")");
this.push(this.source.functionCall(av,"call",at.callParams))
},invokeKnownHelper:function n(au,ar){var at=this.setupHelper(au,ar);
this.push(this.source.functionCall(at.name,"call",at.callParams))
},invokeAmbiguous:function ak(ar,aw){this.useRegister("helper");
var ax=this.popStack();
this.emptyHash();
var at=this.setupHelper(0,ar,aw);
var au=this.lastHelper=this.nameLookup("helpers",ar,"helper");
var av=["(","(helper = ",au," || ",ax,")"];
if(!this.options.strict){av[0]="(helper = ";
av.push(" != null ? helper : ",this.aliasable("helpers.helperMissing"))
}this.push(["(",av,at.paramsInit?["),(",at.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",at.callParams)," : helper))"])
},invokePartial:function S(at,av,ar){var aw=[],au=this.setupParams(av,1,aw);
if(at){av=this.popStack();
delete au.name
}if(ar){au.indent=JSON.stringify(ar)
}au.helpers="helpers";
au.partials="partials";
au.decorators="container.decorators";
if(!at){aw.unshift(this.nameLookup("partials",av,"partial"))
}else{aw.unshift(av)
}if(this.options.compat){au.depths="depths"
}au=this.objectLiteral(au);
aw.push(au);
this.push(this.source.functionCall("container.invokePartial","",aw))
},assignToHash:function i(at){var av=this.popStack(),ar=undefined,au=undefined,ax=undefined;
if(this.trackIds){ax=this.popStack()
}if(this.stringParams){au=this.popStack();
ar=this.popStack()
}var aw=this.hash;
if(ar){aw.contexts[at]=ar
}if(au){aw.types[at]=au
}if(ax){aw.ids[at]=ax
}aw.values[at]=av
},pushId:function e(at,ar,au){if(at==="BlockParam"){this.pushStackLiteral("blockParams["+ar[0]+"].path["+ar[1]+"]"+(au?" + "+JSON.stringify("."+au):""))
}else{if(at==="PathExpression"){this.pushString(ar)
}else{if(at==="SubExpression"){this.pushStackLiteral("true")
}else{this.pushStackLiteral("null")
}}}},compiler:c,compileChildren:function F(ar,av){var ax=ar.children,az=undefined,ay=undefined;
for(var aw=0,at=ax.length;
aw<at;
aw++){az=ax[aw];
ay=new this.compiler();
var au=this.matchExistingProgram(az);
if(au==null){this.context.programs.push("");
au=this.context.programs.length;
az.index=au;
az.name="program"+au;
this.context.programs[au]=ay.compile(az,av,this.context,!this.precompile);
this.context.decorators[au]=ay.decorators;
this.context.environments[au]=az;
this.useDepths=this.useDepths||ay.useDepths;
this.useBlockParams=this.useBlockParams||ay.useBlockParams
}else{az.index=au;
az.name="program"+au;
this.useDepths=this.useDepths||az.useDepths;
this.useBlockParams=this.useBlockParams||az.useBlockParams
}}},matchExistingProgram:function s(av){for(var au=0,at=this.context.environments.length;
au<at;
au++){var ar=this.context.environments[au];
if(ar&&ar.equals(av)){return au
}}},programExpression:function G(ar){var au=this.environment.children[ar],at=[au.index,"data",au.blockParams];
if(this.useBlockParams||this.useDepths){at.push("blockParams")
}if(this.useDepths){at.push("depths")
}return"container.program("+at.join(", ")+")"
},useRegister:function W(ar){if(!this.registers[ar]){this.registers[ar]=true;
this.registers.list.push(ar)
}},push:function ae(ar){if(!(ar instanceof j)){ar=this.source.wrap(ar)
}this.inlineStack.push(ar);
return ar
},pushStackLiteral:function l(ar){this.push(new j(ar))
},pushSource:function u(ar){if(this.pendingContent){this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation));
this.pendingContent=undefined
}if(ar){this.source.push(ar)
}},replaceStack:function a(az){var ax=["("],ar=undefined,aw=undefined,au=undefined;
if(!this.isInline()){throw new I["default"]("replaceStack on non-inline")
}var ay=this.popStack(true);
if(ay instanceof j){ar=[ay.value];
ax=["(",ar];
au=true
}else{aw=true;
var at=this.incrStack();
ax=["((",this.push(at)," = ",ay,")"];
ar=this.topStack()
}var av=az.call(this,ar);
if(!au){this.popStack()
}if(aw){this.stackSlot--
}this.push(ax.concat(av,")"))
},incrStack:function U(){this.stackSlot++;
if(this.stackSlot>this.stackVars.length){this.stackVars.push("stack"+this.stackSlot)
}return this.topStackName()
},topStackName:function ai(){return"stack"+this.stackSlot
},flushInline:function ah(){var av=this.inlineStack;
this.inlineStack=[];
for(var au=0,at=av.length;
au<at;
au++){var aw=av[au];
if(aw instanceof j){this.compileStack.push(aw)
}else{var ar=this.incrStack();
this.pushSource([ar," = ",aw,";"]);
this.compileStack.push(ar)
}}},isInline:function w(){return this.inlineStack.length
},popStack:function h(ar){var au=this.isInline(),at=(au?this.inlineStack:this.compileStack).pop();
if(!ar&&at instanceof j){return at.value
}else{if(!au){if(!this.stackSlot){throw new I["default"]("Invalid stack pop")
}this.stackSlot--
}return at
}},topStack:function D(){var ar=this.isInline()?this.inlineStack:this.compileStack,at=ar[ar.length-1];
if(at instanceof j){return at.value
}else{return at
}},contextName:function ad(ar){if(this.useDepths&&ar){return"depths["+ar+"]"
}else{return"depth"+ar
}},quotedString:function y(ar){return this.source.quotedString(ar)
},objectLiteral:function r(ar){return this.source.objectLiteral(ar)
},aliasable:function ac(at){var ar=this.aliases[at];
if(ar){ar.referenceCount++;
return ar
}ar=this.aliases[at]=this.source.wrap(at);
ar.aliasable=true;
ar.referenceCount=1;
return ar
},setupHelper:function ab(aw,au,at){var av=[],ay=this.setupHelperArgs(au,aw,av,at);
var ar=this.nameLookup("helpers",au,"helper"),ax=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : {}");
return{params:av,paramsInit:ay,name:ar,callParams:[ax].concat(av)}
},setupParams:function M(au,ay,aw){var aD={},aB=[],aC=[],at=[],ar=!aw,av=undefined;
if(ar){aw=[]
}aD.name=this.quotedString(au);
aD.hash=this.popStack();
if(this.trackIds){aD.hashIds=this.popStack()
}if(this.stringParams){aD.hashTypes=this.popStack();
aD.hashContexts=this.popStack()
}var ax=this.popStack(),aA=this.popStack();
if(aA||ax){aD.fn=aA||"container.noop";
aD.inverse=ax||"container.noop"
}var az=ay;
while(az--){av=this.popStack();
aw[az]=av;
if(this.trackIds){at[az]=this.popStack()
}if(this.stringParams){aC[az]=this.popStack();
aB[az]=this.popStack()
}}if(ar){aD.args=this.source.generateArray(aw)
}if(this.trackIds){aD.ids=this.source.generateArray(at)
}if(this.stringParams){aD.types=this.source.generateArray(aC);
aD.contexts=this.source.generateArray(aB)
}if(this.options.data){aD.data="data"
}if(this.useBlockParams){aD.blockParams="blockParams"
}return aD
},setupHelperArgs:function L(au,aw,av,at){var ar=this.setupParams(au,aw,av);
ar=this.objectLiteral(ar);
if(at){this.useRegister("options");
av.push("options");
return["options=",ar]
}else{if(av){av.push(ar);
return""
}else{return ar
}}}};
(function(){var ar=("break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false").split(" ");
var av=c.RESERVED_WORDS={};
for(var au=0,at=ar.length;
au<at;
au++){av[ar[au]]=true
}})();
c.isValidJavaScriptVariableName=function(ar){return !c.RESERVED_WORDS[ar]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(ar)
};
function V(ay,aw,ax,av){var at=aw.popStack(),au=0,ar=ax.length;
if(ay){ar--
}for(;
au<ar;
au++){at=aw.nameLookup(at,ax[au],av)
}if(ay){return[aw.aliasable("container.strict"),"(",at,", ",aw.quotedString(ax[au]),")"]
}else{return at
}}ag["default"]=c;
g.exports=ag["default"]
},function(b,x,d){x.__esModule=true;
var p=d(5);
var g=undefined;
try{if(false){var s=require("source-map");
g=s.SourceNode
}}catch(h){}if(!g){g=function(y,z,A,B){this.src="";
if(B){this.add(B)
}};
g.prototype={add:function r(y){if(p.isArray(y)){y=y.join("")
}this.src+=y
},prepend:function w(y){if(p.isArray(y)){y=y.join("")
}this.src=y+this.src
},toStringWithSourceMap:function e(){return{code:this.toString()}
},toString:function u(){return this.src
}}
}function c(B,z,D){if(p.isArray(B)){var A=[];
for(var C=0,y=B.length;
C<y;
C++){A.push(z.wrap(B[C],D))
}return A
}else{if(typeof B==="boolean"||typeof B==="number"){return B+""
}}return B
}function k(y){this.srcFile=y;
this.source=[]
}k.prototype={isEmpty:function q(){return !this.source.length
},prepend:function w(y,z){this.source.unshift(this.wrap(y,z))
},push:function l(y,z){this.source.push(this.wrap(y,z))
},merge:function i(){var y=this.empty();
this.each(function(z){y.add(["  ",z,"\n"])
});
return y
},each:function f(z){for(var A=0,y=this.source.length;
A<y;
A++){z(this.source[A])
}},empty:function o(){var y=this.currentLocation||{start:{}};
return new g(y.start.line,y.start.column,this.srcFile)
},wrap:function n(y){var z=arguments.length<=1||arguments[1]===undefined?this.currentLocation||{start:{}}:arguments[1];
if(y instanceof g){return y
}y=c(y,this,z);
return new g(z.start.line,z.start.column,this.srcFile,y)
},functionCall:function v(z,y,A){A=this.generateList(A);
return this.wrap([z,y?"."+y+"(":"(",A,")"])
},quotedString:function m(y){return'"'+(y+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'
},objectLiteral:function t(C){var B=[];
for(var z in C){if(C.hasOwnProperty(z)){var A=c(C[z],this);
if(A!=="undefined"){B.push([this.quotedString(z),":",A])
}}}var y=this.generateList(B);
y.prepend("{");
y.add("}");
return y
},generateList:function a(z){var A=this.empty();
for(var B=0,y=z.length;
B<y;
B++){if(B){A.add(",")
}A.add(c(z[B],this))
}return A
},generateArray:function j(y){var z=this.generateList(y);
z.prepend("[");
z.add("]");
return z
}};
x["default"]=k;
b.exports=x["default"]
}])
});
(function(b){var a={init:function(d){var e=b.extend({items:1,itemsOnPage:1,pages:0,displayedPages:5,edges:2,currentPage:0,hrefTextPrefix:"#page-",hrefTextSuffix:"",prevText:"Prev",nextText:"Next",ellipseText:"&hellip;",ellipsePageSet:true,cssStyle:"light-theme",listStyle:"",labelMap:[],selectOnClick:true,nextAtFront:false,invertPageOrder:false,useStartEdge:true,useEndEdge:true,onPageClick:function(f,g){},onInit:function(){}},d||{});
var c=this;
e.pages=e.pages?e.pages:Math.ceil(e.items/e.itemsOnPage)?Math.ceil(e.items/e.itemsOnPage):1;
if(e.currentPage){e.currentPage=e.currentPage-1
}else{e.currentPage=!e.invertPageOrder?0:e.pages-1
}e.halfDisplayed=e.displayedPages/2;
this.each(function(){c.addClass(e.cssStyle+" simple-pagination").data("pagination",e);
a._draw.call(c)
});
e.onInit();
return this
},selectPage:function(c){a._selectPage.call(this,c-1);
return this
},prevPage:function(){var c=this.data("pagination");
if(!c.invertPageOrder){if(c.currentPage>0){a._selectPage.call(this,c.currentPage-1)
}}else{if(c.currentPage<c.pages-1){a._selectPage.call(this,c.currentPage+1)
}}return this
},nextPage:function(){var c=this.data("pagination");
if(!c.invertPageOrder){if(c.currentPage<c.pages-1){a._selectPage.call(this,c.currentPage+1)
}}else{if(c.currentPage>0){a._selectPage.call(this,c.currentPage-1)
}}return this
},getPagesCount:function(){return this.data("pagination").pages
},setPagesCount:function(c){this.data("pagination").pages=c
},getCurrentPage:function(){return this.data("pagination").currentPage+1
},destroy:function(){this.empty();
return this
},drawPage:function(c){var d=this.data("pagination");
d.currentPage=c-1;
this.data("pagination",d);
a._draw.call(this);
return this
},redraw:function(){a._draw.call(this);
return this
},disable:function(){var c=this.data("pagination");
c.disabled=true;
this.data("pagination",c);
a._draw.call(this);
return this
},enable:function(){var c=this.data("pagination");
c.disabled=false;
this.data("pagination",c);
a._draw.call(this);
return this
},updateItems:function(c){var d=this.data("pagination");
d.items=c;
d.pages=a._getPages(d);
this.data("pagination",d);
a._draw.call(this)
},updateItemsOnPage:function(c){var d=this.data("pagination");
d.itemsOnPage=c;
d.pages=a._getPages(d);
this.data("pagination",d);
a._selectPage.call(this,0);
return this
},getItemsOnPage:function(){return this.data("pagination").itemsOnPage
},_draw:function(){var j=this.data("pagination"),d=a._getInterval(j),f,e;
a.destroy.call(this);
e=(typeof this.prop==="function")?this.prop("tagName"):this.attr("tagName");
var h=e==="UL"?this:b("<ul"+(j.listStyle?' class="'+j.listStyle+'"':"")+"></ul>").appendTo(this);
if(j.prevText){a._appendItem.call(this,!j.invertPageOrder?j.currentPage-1:j.currentPage+1,{text:j.prevText,classes:"prev"})
}if(j.nextText&&j.nextAtFront){a._appendItem.call(this,!j.invertPageOrder?j.currentPage+1:j.currentPage-1,{text:j.nextText,classes:"next"})
}if(!j.invertPageOrder){if(d.start>0&&j.edges>0){if(j.useStartEdge){var c=Math.min(j.edges,d.start);
for(f=0;
f<c;
f++){a._appendItem.call(this,f)
}}if(j.edges<d.start&&(d.start-j.edges!=1)){h.append('<li class="disabled"><span class="ellipse">'+j.ellipseText+"</span></li>")
}else{if(d.start-j.edges==1){a._appendItem.call(this,j.edges)
}}}}else{if(d.end<j.pages&&j.edges>0){if(j.useStartEdge){var g=Math.max(j.pages-j.edges,d.end);
for(f=j.pages-1;
f>=g;
f--){a._appendItem.call(this,f)
}}if(j.pages-j.edges>d.end&&(j.pages-j.edges-d.end!=1)){h.append('<li class="disabled"><span class="ellipse">'+j.ellipseText+"</span></li>")
}else{if(j.pages-j.edges-d.end==1){a._appendItem.call(this,d.end)
}}}}if(!j.invertPageOrder){for(f=d.start;
f<d.end;
f++){a._appendItem.call(this,f)
}}else{for(f=d.end-1;
f>=d.start;
f--){a._appendItem.call(this,f)
}}if(!j.invertPageOrder){if(d.end<j.pages&&j.edges>0){if(j.pages-j.edges>d.end&&(j.pages-j.edges-d.end!=1)){h.append('<li class="disabled"><span class="ellipse">'+j.ellipseText+"</span></li>")
}else{if(j.pages-j.edges-d.end==1){a._appendItem.call(this,d.end)
}}if(j.useEndEdge){var g=Math.max(j.pages-j.edges,d.end);
for(f=g;
f<j.pages;
f++){a._appendItem.call(this,f)
}}}}else{if(d.start>0&&j.edges>0){if(j.edges<d.start&&(d.start-j.edges!=1)){h.append('<li class="disabled"><span class="ellipse">'+j.ellipseText+"</span></li>")
}else{if(d.start-j.edges==1){a._appendItem.call(this,j.edges)
}}if(j.useEndEdge){var c=Math.min(j.edges,d.start);
for(f=c-1;
f>=0;
f--){a._appendItem.call(this,f)
}}}}if(j.nextText&&!j.nextAtFront){a._appendItem.call(this,!j.invertPageOrder?j.currentPage+1:j.currentPage-1,{text:j.nextText,classes:"next"})
}if(j.ellipsePageSet&&!j.disabled){a._ellipseClick.call(this,h)
}},_getPages:function(d){var c=Math.ceil(d.items/d.itemsOnPage);
return c||1
},_getInterval:function(c){return{start:Math.ceil(c.currentPage>c.halfDisplayed?Math.max(Math.min(c.currentPage-c.halfDisplayed,(c.pages-c.displayedPages)),0):0),end:Math.ceil(c.currentPage>c.halfDisplayed?Math.min(c.currentPage+c.halfDisplayed,c.pages):Math.min(c.displayedPages,c.pages))}
},_appendItem:function(c,i){var f=this,h,e,j=f.data("pagination"),d=b("<li></li>"),g=f.find("ul");
c=c<0?0:(c<j.pages?c:j.pages-1);
h={text:c+1,classes:""};
if(j.labelMap.length&&j.labelMap[c]){h.text=j.labelMap[c]
}h=b.extend(h,i||{});
if(c==j.currentPage||j.disabled){if(j.disabled||h.classes==="prev"||h.classes==="next"){d.addClass("disabled")
}else{d.addClass("active")
}e=b('<span class="current">'+(h.text)+"</span>")
}else{e=b('<a href="'+j.hrefTextPrefix+(c+1)+j.hrefTextSuffix+'" class="page-link">'+(h.text)+"</a>");
e.click(function(k){return a._selectPage.call(f,c,k)
})
}if(h.classes){e.addClass(h.classes)
}d.append(e);
if(g.length){g.append(d)
}else{f.append(d)
}},_selectPage:function(c,d){var e=this.data("pagination");
e.currentPage=c;
if(e.selectOnClick){a._draw.call(this)
}return e.onPageClick(c+1,d)
},_ellipseClick:function(e){var c=this,d=this.data("pagination"),f=e.find(".ellipse");
f.addClass("clickable").parent().removeClass("disabled");
f.click(function(g){if(!d.disable){var h=b(this),i=(parseInt(h.parent().prev().text(),10)||0)+1;
h.html('<input type="number" min="1" max="'+d.pages+'" step="1" value="'+i+'">').find("input").focus().click(function(j){j.stopPropagation()
}).keyup(function(j){var k=b(this).val();
if(j.which===13&&k!==""){if((k>0)&&(k<=d.pages)){a._selectPage.call(c,k-1)
}}else{if(j.which===27){f.empty().html(d.ellipseText)
}}}).bind("blur",function(j){var k=b(this).val();
if(k!==""){a._selectPage.call(c,k-1)
}f.empty().html(d.ellipseText);
return false
})
}return false
})
}};
b.fn.pagination=function(c){if(a[c]&&c.charAt(0)!="_"){return a[c].apply(this,Array.prototype.slice.call(arguments,1))
}else{if(typeof c==="object"||!c){return a.init.apply(this,arguments)
}else{b.error("Method "+c+" does not exist on jQuery.pagination")
}}}
})(jQuery);
/*! jQuery UI - v1.12.1 - 2016-09-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{a(jQuery)
}}(function(ak){ak.ui=ak.ui||{};
var y=ak.ui.version="1.12.1";
/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var I=0;
var al=Array.prototype.slice;
ak.cleanData=(function(av){return function(aw){var ay,az,ax;
for(ax=0;
(az=aw[ax])!=null;
ax++){try{ay=ak._data(az,"events");
if(ay&&ay.remove){ak(az).triggerHandler("remove")
}}catch(aA){}}av(aw)
}
})(ak.cleanData);
ak.widget=function(av,aw,aD){var aB,ay,aC;
var ax={};
var aA=av.split(".")[0];
av=av.split(".")[1];
var az=aA+"-"+av;
if(!aD){aD=aw;
aw=ak.Widget
}if(ak.isArray(aD)){aD=ak.extend.apply(null,[{}].concat(aD))
}ak.expr[":"][az.toLowerCase()]=function(aE){return !!ak.data(aE,az)
};
ak[aA]=ak[aA]||{};
aB=ak[aA][av];
ay=ak[aA][av]=function(aE,aF){if(!this._createWidget){return new ay(aE,aF)
}if(arguments.length){this._createWidget(aE,aF)
}};
ak.extend(ay,aB,{version:aD.version,_proto:ak.extend({},aD),_childConstructors:[]});
aC=new aw();
aC.options=ak.widget.extend({},aC.options);
ak.each(aD,function(aF,aE){if(!ak.isFunction(aE)){ax[aF]=aE;
return
}ax[aF]=(function(){function aG(){return aw.prototype[aF].apply(this,arguments)
}function aH(aI){return aw.prototype[aF].apply(this,aI)
}return function(){var aK=this._super;
var aI=this._superApply;
var aJ;
this._super=aG;
this._superApply=aH;
aJ=aE.apply(this,arguments);
this._super=aK;
this._superApply=aI;
return aJ
}
})()
});
ay.prototype=ak.widget.extend(aC,{widgetEventPrefix:aB?(aC.widgetEventPrefix||av):av},ax,{constructor:ay,namespace:aA,widgetName:av,widgetFullName:az});
if(aB){ak.each(aB._childConstructors,function(aF,aG){var aE=aG.prototype;
ak.widget(aE.namespace+"."+aE.widgetName,ay,aG._proto)
});
delete aB._childConstructors
}else{aw._childConstructors.push(ay)
}ak.widget.bridge(av,ay);
return ay
};
ak.widget.extend=function(aA){var aw=al.call(arguments,1);
var az=0;
var av=aw.length;
var ax;
var ay;
for(;
az<av;
az++){for(ax in aw[az]){ay=aw[az][ax];
if(aw[az].hasOwnProperty(ax)&&ay!==undefined){if(ak.isPlainObject(ay)){aA[ax]=ak.isPlainObject(aA[ax])?ak.widget.extend({},aA[ax],ay):ak.widget.extend({},ay)
}else{aA[ax]=ay
}}}}return aA
};
ak.widget.bridge=function(aw,av){var ax=av.prototype.widgetFullName||aw;
ak.fn[aw]=function(aA){var ay=typeof aA==="string";
var az=al.call(arguments,1);
var aB=this;
if(ay){if(!this.length&&aA==="instance"){aB=undefined
}else{this.each(function(){var aD;
var aC=ak.data(this,ax);
if(aA==="instance"){aB=aC;
return false
}if(!aC){return ak.error("cannot call methods on "+aw+" prior to initialization; attempted to call method '"+aA+"'")
}if(!ak.isFunction(aC[aA])||aA.charAt(0)==="_"){return ak.error("no such method '"+aA+"' for "+aw+" widget instance")
}aD=aC[aA].apply(aC,az);
if(aD!==aC&&aD!==undefined){aB=aD&&aD.jquery?aB.pushStack(aD.get()):aD;
return false
}})
}}else{if(az.length){aA=ak.widget.extend.apply(null,[aA].concat(az))
}this.each(function(){var aC=ak.data(this,ax);
if(aC){aC.option(aA||{});
if(aC._init){aC._init()
}}else{ak.data(this,ax,new av(aA,this))
}})
}return aB
}
};
ak.Widget=function(){};
ak.Widget._childConstructors=[];
ak.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:false,create:null},_createWidget:function(av,aw){aw=ak(aw||this.defaultElement||this)[0];
this.element=ak(aw);
this.uuid=I++;
this.eventNamespace="."+this.widgetName+this.uuid;
this.bindings=ak();
this.hoverable=ak();
this.focusable=ak();
this.classesElementLookup={};
if(aw!==this){ak.data(aw,this.widgetFullName,this);
this._on(true,this.element,{remove:function(ax){if(ax.target===aw){this.destroy()
}}});
this.document=ak(aw.style?aw.ownerDocument:aw.document||aw);
this.window=ak(this.document[0].defaultView||this.document[0].parentWindow)
}this.options=ak.widget.extend({},this.options,this._getCreateOptions(),av);
this._create();
if(this.options.disabled){this._setOptionDisabled(this.options.disabled)
}this._trigger("create",null,this._getCreateEventData());
this._init()
},_getCreateOptions:function(){return{}
},_getCreateEventData:ak.noop,_create:ak.noop,_init:ak.noop,destroy:function(){var av=this;
this._destroy();
ak.each(this.classesElementLookup,function(aw,ax){av._removeClass(ax,aw)
});
this.element.off(this.eventNamespace).removeData(this.widgetFullName);
this.widget().off(this.eventNamespace).removeAttr("aria-disabled");
this.bindings.off(this.eventNamespace)
},_destroy:ak.noop,widget:function(){return this.element
},option:function(ay,az){var av=ay;
var aA;
var ax;
var aw;
if(arguments.length===0){return ak.widget.extend({},this.options)
}if(typeof ay==="string"){av={};
aA=ay.split(".");
ay=aA.shift();
if(aA.length){ax=av[ay]=ak.widget.extend({},this.options[ay]);
for(aw=0;
aw<aA.length-1;
aw++){ax[aA[aw]]=ax[aA[aw]]||{};
ax=ax[aA[aw]]
}ay=aA.pop();
if(arguments.length===1){return ax[ay]===undefined?null:ax[ay]
}ax[ay]=az
}else{if(arguments.length===1){return this.options[ay]===undefined?null:this.options[ay]
}av[ay]=az
}}this._setOptions(av);
return this
},_setOptions:function(av){var aw;
for(aw in av){this._setOption(aw,av[aw])
}return this
},_setOption:function(av,aw){if(av==="classes"){this._setOptionClasses(aw)
}this.options[av]=aw;
if(av==="disabled"){this._setOptionDisabled(aw)
}return this
},_setOptionClasses:function(ay){var av,ax,aw;
for(av in ay){aw=this.classesElementLookup[av];
if(ay[av]===this.options.classes[av]||!aw||!aw.length){continue
}ax=ak(aw.get());
this._removeClass(aw,av);
ax.addClass(this._classes({element:ax,keys:av,classes:ay,add:true}))
}},_setOptionDisabled:function(av){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!av);
if(av){this._removeClass(this.hoverable,null,"ui-state-hover");
this._removeClass(this.focusable,null,"ui-state-focus")
}},enable:function(){return this._setOptions({disabled:false})
},disable:function(){return this._setOptions({disabled:true})
},_classes:function(av){var aw=[];
var ax=this;
av=ak.extend({element:this.element,classes:this.options.classes||{}},av);
function ay(aA,aC){var aB,az;
for(az=0;
az<aA.length;
az++){aB=ax.classesElementLookup[aA[az]]||ak();
if(av.add){aB=ak(ak.unique(aB.get().concat(av.element.get())))
}else{aB=ak(aB.not(av.element).get())
}ax.classesElementLookup[aA[az]]=aB;
aw.push(aA[az]);
if(aC&&av.classes[aA[az]]){aw.push(av.classes[aA[az]])
}}}this._on(av.element,{remove:"_untrackClassesElement"});
if(av.keys){ay(av.keys.match(/\S+/g)||[],true)
}if(av.extra){ay(av.extra.match(/\S+/g)||[])
}return aw.join(" ")
},_untrackClassesElement:function(aw){var av=this;
ak.each(av.classesElementLookup,function(ax,ay){if(ak.inArray(aw.target,ay)!==-1){av.classesElementLookup[ax]=ak(ay.not(aw.target).get())
}})
},_removeClass:function(aw,ax,av){return this._toggleClass(aw,ax,av,false)
},_addClass:function(aw,ax,av){return this._toggleClass(aw,ax,av,true)
},_toggleClass:function(ay,az,av,aA){aA=(typeof aA==="boolean")?aA:av;
var aw=(typeof ay==="string"||ay===null),ax={extra:aw?az:av,keys:aw?ay:az,element:aw?this.element:ay,add:aA};
ax.element.toggleClass(this._classes(ax),aA);
return this
},_on:function(ay,ax,aw){var az;
var av=this;
if(typeof ay!=="boolean"){aw=ax;
ax=ay;
ay=false
}if(!aw){aw=ax;
ax=this.element;
az=this.widget()
}else{ax=az=ak(ax);
this.bindings=this.bindings.add(ax)
}ak.each(aw,function(aF,aE){function aC(){if(!ay&&(av.options.disabled===true||ak(this).hasClass("ui-state-disabled"))){return
}return(typeof aE==="string"?av[aE]:aE).apply(av,arguments)
}if(typeof aE!=="string"){aC.guid=aE.guid=aE.guid||aC.guid||ak.guid++
}var aD=aF.match(/^([\w:-]*)\s*(.*)$/);
var aB=aD[1]+av.eventNamespace;
var aA=aD[2];
if(aA){az.on(aB,aA,aC)
}else{ax.on(aB,aC)
}})
},_off:function(aw,av){av=(av||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;
aw.off(av).off(av);
this.bindings=ak(this.bindings.not(aw).get());
this.focusable=ak(this.focusable.not(aw).get());
this.hoverable=ak(this.hoverable.not(aw).get())
},_delay:function(ay,ax){function aw(){return(typeof ay==="string"?av[ay]:ay).apply(av,arguments)
}var av=this;
return setTimeout(aw,ax||0)
},_hoverable:function(av){this.hoverable=this.hoverable.add(av);
this._on(av,{mouseenter:function(aw){this._addClass(ak(aw.currentTarget),null,"ui-state-hover")
},mouseleave:function(aw){this._removeClass(ak(aw.currentTarget),null,"ui-state-hover")
}})
},_focusable:function(av){this.focusable=this.focusable.add(av);
this._on(av,{focusin:function(aw){this._addClass(ak(aw.currentTarget),null,"ui-state-focus")
},focusout:function(aw){this._removeClass(ak(aw.currentTarget),null,"ui-state-focus")
}})
},_trigger:function(av,aw,ax){var aA,az;
var ay=this.options[av];
ax=ax||{};
aw=ak.Event(aw);
aw.type=(av===this.widgetEventPrefix?av:this.widgetEventPrefix+av).toLowerCase();
aw.target=this.element[0];
az=aw.originalEvent;
if(az){for(aA in az){if(!(aA in aw)){aw[aA]=az[aA]
}}}this.element.trigger(aw,ax);
return !(ak.isFunction(ay)&&ay.apply(this.element[0],[aw].concat(ax))===false||aw.isDefaultPrevented())
}};
ak.each({show:"fadeIn",hide:"fadeOut"},function(aw,av){ak.Widget.prototype["_"+aw]=function(az,ay,aB){if(typeof ay==="string"){ay={effect:ay}
}var aA;
var ax=!ay?aw:ay===true||typeof ay==="number"?av:ay.effect||av;
ay=ay||{};
if(typeof ay==="number"){ay={duration:ay}
}aA=!ak.isEmptyObject(ay);
ay.complete=aB;
if(ay.delay){az.delay(ay.delay)
}if(aA&&ak.effects&&ak.effects.effect[ax]){az[aw](ay)
}else{if(ax!==aw&&az[ax]){az[ax](ay.duration,ay.easing,aB)
}else{az.queue(function(aC){ak(this)[aw]();
if(aB){aB.call(az[0])
}aC()
})
}}}
});
var l=ak.widget;
/*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
(function(){var aC,aD=Math.max,aG=Math.abs,ax=/left|center|right/,aA=/top|center|bottom/,av=/[\+\-]\d+(\.[\d]+)?%?/,aE=/^\w+/,aw=/%$/,az=ak.fn.position;
function aF(aJ,aI,aH){return[parseFloat(aJ[0])*(aw.test(aJ[0])?aI/100:1),parseFloat(aJ[1])*(aw.test(aJ[1])?aH/100:1)]
}function aB(aH,aI){return parseInt(ak.css(aH,aI),10)||0
}function ay(aI){var aH=aI[0];
if(aH.nodeType===9){return{width:aI.width(),height:aI.height(),offset:{top:0,left:0}}
}if(ak.isWindow(aH)){return{width:aI.width(),height:aI.height(),offset:{top:aI.scrollTop(),left:aI.scrollLeft()}}
}if(aH.preventDefault){return{width:0,height:0,offset:{top:aH.pageY,left:aH.pageX}}
}return{width:aI.outerWidth(),height:aI.outerHeight(),offset:aI.offset()}
}ak.position={scrollbarWidth:function(){if(aC!==undefined){return aC
}var aI,aH,aK=ak("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),aJ=aK.children()[0];
ak("body").append(aK);
aI=aJ.offsetWidth;
aK.css("overflow","scroll");
aH=aJ.offsetWidth;
if(aI===aH){aH=aK[0].clientWidth
}aK.remove();
return(aC=aI-aH)
},getScrollInfo:function(aL){var aK=aL.isWindow||aL.isDocument?"":aL.element.css("overflow-x"),aJ=aL.isWindow||aL.isDocument?"":aL.element.css("overflow-y"),aI=aK==="scroll"||(aK==="auto"&&aL.width<aL.element[0].scrollWidth),aH=aJ==="scroll"||(aJ==="auto"&&aL.height<aL.element[0].scrollHeight);
return{width:aH?ak.position.scrollbarWidth():0,height:aI?ak.position.scrollbarWidth():0}
},getWithinInfo:function(aJ){var aK=ak(aJ||window),aH=ak.isWindow(aK[0]),aL=!!aK[0]&&aK[0].nodeType===9,aI=!aH&&!aL;
return{element:aK,isWindow:aH,isDocument:aL,offset:aI?ak(aJ).offset():{left:0,top:0},scrollLeft:aK.scrollLeft(),scrollTop:aK.scrollTop(),width:aK.outerWidth(),height:aK.outerHeight()}
}};
ak.fn.position=function(aR){if(!aR||!aR.of){return az.apply(this,arguments)
}aR=ak.extend({},aR);
var aS,aO,aM,aQ,aL,aH,aN=ak(aR.of),aK=ak.position.getWithinInfo(aR.within),aI=ak.position.getScrollInfo(aK),aP=(aR.collision||"flip").split(" "),aJ={};
aH=ay(aN);
if(aN[0].preventDefault){aR.at="left top"
}aO=aH.width;
aM=aH.height;
aQ=aH.offset;
aL=ak.extend({},aQ);
ak.each(["my","at"],function(){var aV=(aR[this]||"").split(" "),aU,aT;
if(aV.length===1){aV=ax.test(aV[0])?aV.concat(["center"]):aA.test(aV[0])?["center"].concat(aV):["center","center"]
}aV[0]=ax.test(aV[0])?aV[0]:"center";
aV[1]=aA.test(aV[1])?aV[1]:"center";
aU=av.exec(aV[0]);
aT=av.exec(aV[1]);
aJ[this]=[aU?aU[0]:0,aT?aT[0]:0];
aR[this]=[aE.exec(aV[0])[0],aE.exec(aV[1])[0]]
});
if(aP.length===1){aP[1]=aP[0]
}if(aR.at[0]==="right"){aL.left+=aO
}else{if(aR.at[0]==="center"){aL.left+=aO/2
}}if(aR.at[1]==="bottom"){aL.top+=aM
}else{if(aR.at[1]==="center"){aL.top+=aM/2
}}aS=aF(aJ.at,aO,aM);
aL.left+=aS[0];
aL.top+=aS[1];
return this.each(function(){var aU,a3,aW=ak(this),aY=aW.outerWidth(),aV=aW.outerHeight(),aX=aB(this,"marginLeft"),aT=aB(this,"marginTop"),a2=aY+aX+aB(this,"marginRight")+aI.width,a1=aV+aT+aB(this,"marginBottom")+aI.height,aZ=ak.extend({},aL),a0=aF(aJ.my,aW.outerWidth(),aW.outerHeight());
if(aR.my[0]==="right"){aZ.left-=aY
}else{if(aR.my[0]==="center"){aZ.left-=aY/2
}}if(aR.my[1]==="bottom"){aZ.top-=aV
}else{if(aR.my[1]==="center"){aZ.top-=aV/2
}}aZ.left+=a0[0];
aZ.top+=a0[1];
aU={marginLeft:aX,marginTop:aT};
ak.each(["left","top"],function(a5,a4){if(ak.ui.position[aP[a5]]){ak.ui.position[aP[a5]][a4](aZ,{targetWidth:aO,targetHeight:aM,elemWidth:aY,elemHeight:aV,collisionPosition:aU,collisionWidth:a2,collisionHeight:a1,offset:[aS[0]+a0[0],aS[1]+a0[1]],my:aR.my,at:aR.at,within:aK,elem:aW})
}});
if(aR.using){a3=function(a7){var a9=aQ.left-aZ.left,a6=a9+aO-aY,a8=aQ.top-aZ.top,a5=a8+aM-aV,a4={target:{element:aN,left:aQ.left,top:aQ.top,width:aO,height:aM},element:{element:aW,left:aZ.left,top:aZ.top,width:aY,height:aV},horizontal:a6<0?"left":a9>0?"right":"center",vertical:a5<0?"top":a8>0?"bottom":"middle"};
if(aO<aY&&aG(a9+a6)<aO){a4.horizontal="center"
}if(aM<aV&&aG(a8+a5)<aM){a4.vertical="middle"
}if(aD(aG(a9),aG(a6))>aD(aG(a8),aG(a5))){a4.important="horizontal"
}else{a4.important="vertical"
}aR.using.call(this,a7,a4)
}
}aW.offset(ak.extend(aZ,{using:a3}))
})
};
ak.ui.position={fit:{left:function(aL,aK){var aJ=aK.within,aN=aJ.isWindow?aJ.scrollLeft:aJ.offset.left,aP=aJ.width,aM=aL.left-aK.collisionPosition.marginLeft,aO=aN-aM,aI=aM+aK.collisionWidth-aP-aN,aH;
if(aK.collisionWidth>aP){if(aO>0&&aI<=0){aH=aL.left+aO+aK.collisionWidth-aP-aN;
aL.left+=aO-aH
}else{if(aI>0&&aO<=0){aL.left=aN
}else{if(aO>aI){aL.left=aN+aP-aK.collisionWidth
}else{aL.left=aN
}}}}else{if(aO>0){aL.left+=aO
}else{if(aI>0){aL.left-=aI
}else{aL.left=aD(aL.left-aM,aL.left)
}}}},top:function(aK,aJ){var aI=aJ.within,aO=aI.isWindow?aI.scrollTop:aI.offset.top,aP=aJ.within.height,aM=aK.top-aJ.collisionPosition.marginTop,aN=aO-aM,aL=aM+aJ.collisionHeight-aP-aO,aH;
if(aJ.collisionHeight>aP){if(aN>0&&aL<=0){aH=aK.top+aN+aJ.collisionHeight-aP-aO;
aK.top+=aN-aH
}else{if(aL>0&&aN<=0){aK.top=aO
}else{if(aN>aL){aK.top=aO+aP-aJ.collisionHeight
}else{aK.top=aO
}}}}else{if(aN>0){aK.top+=aN
}else{if(aL>0){aK.top-=aL
}else{aK.top=aD(aK.top-aM,aK.top)
}}}}},flip:{left:function(aN,aM){var aL=aM.within,aR=aL.offset.left+aL.scrollLeft,aU=aL.width,aJ=aL.isWindow?aL.scrollLeft:aL.offset.left,aO=aN.left-aM.collisionPosition.marginLeft,aS=aO-aJ,aI=aO+aM.collisionWidth-aU-aJ,aQ=aM.my[0]==="left"?-aM.elemWidth:aM.my[0]==="right"?aM.elemWidth:0,aT=aM.at[0]==="left"?aM.targetWidth:aM.at[0]==="right"?-aM.targetWidth:0,aK=-2*aM.offset[0],aH,aP;
if(aS<0){aH=aN.left+aQ+aT+aK+aM.collisionWidth-aU-aR;
if(aH<0||aH<aG(aS)){aN.left+=aQ+aT+aK
}}else{if(aI>0){aP=aN.left-aM.collisionPosition.marginLeft+aQ+aT+aK-aJ;
if(aP>0||aG(aP)<aI){aN.left+=aQ+aT+aK
}}}},top:function(aM,aL){var aK=aL.within,aT=aK.offset.top+aK.scrollTop,aU=aK.height,aH=aK.isWindow?aK.scrollTop:aK.offset.top,aO=aM.top-aL.collisionPosition.marginTop,aQ=aO-aH,aN=aO+aL.collisionHeight-aU-aH,aR=aL.my[1]==="top",aP=aR?-aL.elemHeight:aL.my[1]==="bottom"?aL.elemHeight:0,aV=aL.at[1]==="top"?aL.targetHeight:aL.at[1]==="bottom"?-aL.targetHeight:0,aJ=-2*aL.offset[1],aS,aI;
if(aQ<0){aI=aM.top+aP+aV+aJ+aL.collisionHeight-aU-aT;
if(aI<0||aI<aG(aQ)){aM.top+=aP+aV+aJ
}}else{if(aN>0){aS=aM.top-aL.collisionPosition.marginTop+aP+aV+aJ-aH;
if(aS>0||aG(aS)<aN){aM.top+=aP+aV+aJ
}}}}},flipfit:{left:function(){ak.ui.position.flip.left.apply(this,arguments);
ak.ui.position.fit.left.apply(this,arguments)
},top:function(){ak.ui.position.flip.top.apply(this,arguments);
ak.ui.position.fit.top.apply(this,arguments)
}}}
})();
var ah=ak.ui.position;
/*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var q=ak.extend(ak.expr[":"],{data:ak.expr.createPseudo?ak.expr.createPseudo(function(av){return function(aw){return !!ak.data(aw,av)
}
}):function(ax,aw,av){return !!ak.data(ax,av[3])
}});
/*!
 * jQuery UI Disable Selection 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var m=ak.fn.extend({disableSelection:(function(){var av="onselectstart" in document.createElement("div")?"selectstart":"mousedown";
return function(){return this.on(av+".ui-disableSelection",function(aw){aw.preventDefault()
})
}
})(),enableSelection:function(){return this.off(".ui-disableSelection")
}});
/*!
 * jQuery UI Effects 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var t="ui-effects-",ad="ui-effects-style",ap="ui-effects-animated",b=ak;
ak.effects={effect:{}};
/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
(function(aJ,ay){var aF="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",aC=/^([\-+])=\s*(\d+\.?\d*)/,aB=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(aK){return[aK[1],aK[2],aK[3],aK[4]]
}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(aK){return[aK[1]*2.55,aK[2]*2.55,aK[3]*2.55,aK[4]]
}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(aK){return[parseInt(aK[1],16),parseInt(aK[2],16),parseInt(aK[3],16)]
}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(aK){return[parseInt(aK[1]+aK[1],16),parseInt(aK[2]+aK[2],16),parseInt(aK[3]+aK[3],16)]
}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(aK){return[aK[1],aK[2]/100,aK[3]/100,aK[4]]
}}],az=aJ.Color=function(aL,aM,aK,aN){return new aJ.Color.fn.parse(aL,aM,aK,aN)
},aE={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},aI={"byte":{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},aH=az.support={},aw=aJ("<p>")[0],av,aG=aJ.each;
aw.style.cssText="background-color:rgba(1,1,1,.5)";
aH.rgba=aw.style.backgroundColor.indexOf("rgba")>-1;
aG(aE,function(aK,aL){aL.cache="_"+aK;
aL.props.alpha={idx:3,type:"percent",def:1}
});
function aD(aL,aN,aM){var aK=aI[aN.type]||{};
if(aL==null){return(aM||!aN.def)?null:aN.def
}aL=aK.floor?~~aL:parseFloat(aL);
if(isNaN(aL)){return aN.def
}if(aK.mod){return(aL+aK.mod)%aK.mod
}return 0>aL?0:aK.max<aL?aK.max:aL
}function aA(aK){var aM=az(),aL=aM._rgba=[];
aK=aK.toLowerCase();
aG(aB,function(aR,aS){var aP,aQ=aS.re.exec(aK),aO=aQ&&aS.parse(aQ),aN=aS.space||"rgba";
if(aO){aP=aM[aN](aO);
aM[aE[aN].cache]=aP[aE[aN].cache];
aL=aM._rgba=aP._rgba;
return false
}});
if(aL.length){if(aL.join()==="0,0,0,0"){aJ.extend(aL,av.transparent)
}return aM
}return av[aK]
}az.fn=aJ.extend(az.prototype,{parse:function(aQ,aO,aK,aP){if(aQ===ay){this._rgba=[null,null,null,null];
return this
}if(aQ.jquery||aQ.nodeType){aQ=aJ(aQ).css(aO);
aO=ay
}var aN=this,aM=aJ.type(aQ),aL=this._rgba=[];
if(aO!==ay){aQ=[aQ,aO,aK,aP];
aM="array"
}if(aM==="string"){return this.parse(aA(aQ)||av._default)
}if(aM==="array"){aG(aE.rgba.props,function(aR,aS){aL[aS.idx]=aD(aQ[aS.idx],aS)
});
return this
}if(aM==="object"){if(aQ instanceof az){aG(aE,function(aR,aS){if(aQ[aS.cache]){aN[aS.cache]=aQ[aS.cache].slice()
}})
}else{aG(aE,function(aS,aT){var aR=aT.cache;
aG(aT.props,function(aU,aV){if(!aN[aR]&&aT.to){if(aU==="alpha"||aQ[aU]==null){return
}aN[aR]=aT.to(aN._rgba)
}aN[aR][aV.idx]=aD(aQ[aU],aV,true)
});
if(aN[aR]&&aJ.inArray(null,aN[aR].slice(0,3))<0){aN[aR][3]=1;
if(aT.from){aN._rgba=aT.from(aN[aR])
}}})
}return this
}},is:function(aM){var aK=az(aM),aN=true,aL=this;
aG(aE,function(aO,aQ){var aR,aP=aK[aQ.cache];
if(aP){aR=aL[aQ.cache]||aQ.to&&aQ.to(aL._rgba)||[];
aG(aQ.props,function(aS,aT){if(aP[aT.idx]!=null){aN=(aP[aT.idx]===aR[aT.idx]);
return aN
}})
}return aN
});
return aN
},_space:function(){var aK=[],aL=this;
aG(aE,function(aM,aN){if(aL[aN.cache]){aK.push(aM)
}});
return aK.pop()
},transition:function(aL,aR){var aM=az(aL),aN=aM._space(),aO=aE[aN],aP=this.alpha()===0?az("transparent"):this,aQ=aP[aO.cache]||aO.to(aP._rgba),aK=aQ.slice();
aM=aM[aO.cache];
aG(aO.props,function(aV,aX){var aU=aX.idx,aT=aQ[aU],aS=aM[aU],aW=aI[aX.type]||{};
if(aS===null){return
}if(aT===null){aK[aU]=aS
}else{if(aW.mod){if(aS-aT>aW.mod/2){aT+=aW.mod
}else{if(aT-aS>aW.mod/2){aT-=aW.mod
}}}aK[aU]=aD((aS-aT)*aR+aT,aX)
}});
return this[aN](aK)
},blend:function(aN){if(this._rgba[3]===1){return this
}var aM=this._rgba.slice(),aL=aM.pop(),aK=az(aN)._rgba;
return az(aJ.map(aM,function(aO,aP){return(1-aL)*aK[aP]+aL*aO
}))
},toRgbaString:function(){var aL="rgba(",aK=aJ.map(this._rgba,function(aM,aN){return aM==null?(aN>2?1:0):aM
});
if(aK[3]===1){aK.pop();
aL="rgb("
}return aL+aK.join()+")"
},toHslaString:function(){var aL="hsla(",aK=aJ.map(this.hsla(),function(aM,aN){if(aM==null){aM=aN>2?1:0
}if(aN&&aN<3){aM=Math.round(aM*100)+"%"
}return aM
});
if(aK[3]===1){aK.pop();
aL="hsl("
}return aL+aK.join()+")"
},toHexString:function(aK){var aL=this._rgba.slice(),aM=aL.pop();
if(aK){aL.push(~~(aM*255))
}return"#"+aJ.map(aL,function(aN){aN=(aN||0).toString(16);
return aN.length===1?"0"+aN:aN
}).join("")
},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()
}});
az.fn.parse.prototype=az.fn;
function ax(aM,aL,aK){aK=(aK+1)%1;
if(aK*6<1){return aM+(aL-aM)*aK*6
}if(aK*2<1){return aL
}if(aK*3<2){return aM+(aL-aM)*((2/3)-aK)*6
}return aM
}aE.hsla.to=function(aM){if(aM[0]==null||aM[1]==null||aM[2]==null){return[null,null,null,aM[3]]
}var aK=aM[0]/255,aP=aM[1]/255,aQ=aM[2]/255,aS=aM[3],aR=Math.max(aK,aP,aQ),aN=Math.min(aK,aP,aQ),aT=aR-aN,aU=aR+aN,aL=aU*0.5,aO,aV;
if(aN===aR){aO=0
}else{if(aK===aR){aO=(60*(aP-aQ)/aT)+360
}else{if(aP===aR){aO=(60*(aQ-aK)/aT)+120
}else{aO=(60*(aK-aP)/aT)+240
}}}if(aT===0){aV=0
}else{if(aL<=0.5){aV=aT/aU
}else{aV=aT/(2-aU)
}}return[Math.round(aO)%360,aV,aL,aS==null?1:aS]
};
aE.hsla.from=function(aO){if(aO[0]==null||aO[1]==null||aO[2]==null){return[null,null,null,aO[3]]
}var aN=aO[0]/360,aM=aO[1],aL=aO[2],aK=aO[3],aP=aL<=0.5?aL*(1+aM):aL+aM-aL*aM,aQ=2*aL-aP;
return[Math.round(ax(aQ,aP,aN+(1/3))*255),Math.round(ax(aQ,aP,aN)*255),Math.round(ax(aQ,aP,aN-(1/3))*255),aK]
};
aG(aE,function(aL,aN){var aM=aN.props,aK=aN.cache,aP=aN.to,aO=aN.from;
az.fn[aL]=function(aU){if(aP&&!this[aK]){this[aK]=aP(this._rgba)
}if(aU===ay){return this[aK].slice()
}var aR,aT=aJ.type(aU),aQ=(aT==="array"||aT==="object")?aU:arguments,aS=this[aK].slice();
aG(aM,function(aV,aX){var aW=aQ[aT==="object"?aV:aX.idx];
if(aW==null){aW=aS[aX.idx]
}aS[aX.idx]=aD(aW,aX)
});
if(aO){aR=az(aO(aS));
aR[aK]=aS;
return aR
}else{return az(aS)
}};
aG(aM,function(aQ,aR){if(az.fn[aQ]){return
}az.fn[aQ]=function(aV){var aX=aJ.type(aV),aU=(aQ==="alpha"?(this._hsla?"hsla":"rgba"):aL),aT=this[aU](),aW=aT[aR.idx],aS;
if(aX==="undefined"){return aW
}if(aX==="function"){aV=aV.call(this,aW);
aX=aJ.type(aV)
}if(aV==null&&aR.empty){return this
}if(aX==="string"){aS=aC.exec(aV);
if(aS){aV=aW+parseFloat(aS[2])*(aS[1]==="+"?1:-1)
}}aT[aR.idx]=aV;
return this[aU](aT)
}
})
});
az.hook=function(aL){var aK=aL.split(" ");
aG(aK,function(aM,aN){aJ.cssHooks[aN]={set:function(aR,aS){var aP,aQ,aO="";
if(aS!=="transparent"&&(aJ.type(aS)!=="string"||(aP=aA(aS)))){aS=az(aP||aS);
if(!aH.rgba&&aS._rgba[3]!==1){aQ=aN==="backgroundColor"?aR.parentNode:aR;
while((aO===""||aO==="transparent")&&aQ&&aQ.style){try{aO=aJ.css(aQ,"backgroundColor");
aQ=aQ.parentNode
}catch(aT){}}aS=aS.blend(aO&&aO!=="transparent"?aO:"_default")
}aS=aS.toRgbaString()
}try{aR.style[aN]=aS
}catch(aT){}}};
aJ.fx.step[aN]=function(aO){if(!aO.colorInit){aO.start=az(aO.elem,aN);
aO.end=az(aO.end);
aO.colorInit=true
}aJ.cssHooks[aN].set(aO.elem,aO.start.transition(aO.end,aO.pos))
}
})
};
az.hook(aF);
aJ.cssHooks.borderColor={expand:function(aL){var aK={};
aG(["Top","Right","Bottom","Left"],function(aN,aM){aK["border"+aM+"Color"]=aL
});
return aK
}};
av=aJ.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}
})(b);
(function(){var aw=["add","remove","toggle"],ax={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
ak.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(az,aA){ak.fx.step[aA]=function(aB){if(aB.end!=="none"&&!aB.setAttr||aB.pos===1&&!aB.setAttr){b.style(aB.elem,aA,aB.end);
aB.setAttr=true
}}
});
function ay(aD){var aA,az,aB=aD.ownerDocument.defaultView?aD.ownerDocument.defaultView.getComputedStyle(aD,null):aD.currentStyle,aC={};
if(aB&&aB.length&&aB[0]&&aB[aB[0]]){az=aB.length;
while(az--){aA=aB[az];
if(typeof aB[aA]==="string"){aC[ak.camelCase(aA)]=aB[aA]
}}}else{for(aA in aB){if(typeof aB[aA]==="string"){aC[aA]=aB[aA]
}}}return aC
}function av(az,aB){var aD={},aA,aC;
for(aA in aB){aC=aB[aA];
if(az[aA]!==aC){if(!ax[aA]){if(ak.fx.step[aA]||!isNaN(parseFloat(aC))){aD[aA]=aC
}}}}return aD
}if(!ak.fn.addBack){ak.fn.addBack=function(az){return this.add(az==null?this.prevObject:this.prevObject.filter(az))
}
}ak.effects.animateClass=function(az,aA,aD,aC){var aB=ak.speed(aA,aD,aC);
return this.queue(function(){var aG=ak(this),aE=aG.attr("class")||"",aF,aH=aB.children?aG.find("*").addBack():aG;
aH=aH.map(function(){var aI=ak(this);
return{el:aI,start:ay(this)}
});
aF=function(){ak.each(aw,function(aI,aJ){if(az[aJ]){aG[aJ+"Class"](az[aJ])
}})
};
aF();
aH=aH.map(function(){this.end=ay(this.el[0]);
this.diff=av(this.start,this.end);
return this
});
aG.attr("class",aE);
aH=aH.map(function(){var aK=this,aI=ak.Deferred(),aJ=ak.extend({},aB,{queue:false,complete:function(){aI.resolve(aK)
}});
this.el.animate(this.diff,aJ);
return aI.promise()
});
ak.when.apply(ak,aH.get()).done(function(){aF();
ak.each(arguments,function(){var aI=this.el;
ak.each(this.diff,function(aJ){aI.css(aJ,"")
})
});
aB.complete.call(aG[0])
})
})
};
ak.fn.extend({addClass:(function(az){return function(aB,aA,aD,aC){return aA?ak.effects.animateClass.call(this,{add:aB},aA,aD,aC):az.apply(this,arguments)
}
})(ak.fn.addClass),removeClass:(function(az){return function(aB,aA,aD,aC){return arguments.length>1?ak.effects.animateClass.call(this,{remove:aB},aA,aD,aC):az.apply(this,arguments)
}
})(ak.fn.removeClass),toggleClass:(function(az){return function(aC,aB,aA,aE,aD){if(typeof aB==="boolean"||aB===undefined){if(!aA){return az.apply(this,arguments)
}else{return ak.effects.animateClass.call(this,(aB?{add:aC}:{remove:aC}),aA,aE,aD)
}}else{return ak.effects.animateClass.call(this,{toggle:aC},aB,aA,aE)
}}
})(ak.fn.toggleClass),switchClass:function(az,aB,aA,aD,aC){return ak.effects.animateClass.call(this,{add:aB,remove:az},aA,aD,aC)
}})
})();
(function(){if(ak.expr&&ak.expr.filters&&ak.expr.filters.animated){ak.expr.filters.animated=(function(ay){return function(az){return !!ak(az).data(ap)||ay(az)
}
})(ak.expr.filters.animated)
}if(ak.uiBackCompat!==false){ak.extend(ak.effects,{save:function(az,aB){var ay=0,aA=aB.length;
for(;
ay<aA;
ay++){if(aB[ay]!==null){az.data(t+aB[ay],az[0].style[aB[ay]])
}}},restore:function(az,aC){var aB,ay=0,aA=aC.length;
for(;
ay<aA;
ay++){if(aC[ay]!==null){aB=az.data(t+aC[ay]);
az.css(aC[ay],aB)
}}},setMode:function(ay,az){if(az==="toggle"){az=ay.is(":hidden")?"show":"hide"
}return az
},createWrapper:function(az){if(az.parent().is(".ui-effects-wrapper")){return az.parent()
}var aA={width:az.outerWidth(true),height:az.outerHeight(true),"float":az.css("float")},aD=ak("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),ay={width:az.width(),height:az.height()},aC=document.activeElement;
try{aC.id
}catch(aB){aC=document.body
}az.wrap(aD);
if(az[0]===aC||ak.contains(az[0],aC)){ak(aC).trigger("focus")
}aD=az.parent();
if(az.css("position")==="static"){aD.css({position:"relative"});
az.css({position:"relative"})
}else{ak.extend(aA,{position:az.css("position"),zIndex:az.css("z-index")});
ak.each(["top","left","bottom","right"],function(aE,aF){aA[aF]=az.css(aF);
if(isNaN(parseInt(aA[aF],10))){aA[aF]="auto"
}});
az.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})
}az.css(ay);
return aD.css(aA).show()
},removeWrapper:function(ay){var az=document.activeElement;
if(ay.parent().is(".ui-effects-wrapper")){ay.parent().replaceWith(ay);
if(ay[0]===az||ak.contains(ay[0],az)){ak(az).trigger("focus")
}}return ay
}})
}ak.extend(ak.effects,{version:"1.12.1",define:function(ay,aA,az){if(!az){az=aA;
aA="effect"
}ak.effects.effect[ay]=az;
ak.effects.effect[ay].mode=aA;
return az
},scaledDimensions:function(az,aA,aB){if(aA===0){return{height:0,width:0,outerHeight:0,outerWidth:0}
}var ay=aB!=="horizontal"?((aA||100)/100):1,aC=aB!=="vertical"?((aA||100)/100):1;
return{height:az.height()*aC,width:az.width()*ay,outerHeight:az.outerHeight()*aC,outerWidth:az.outerWidth()*ay}
},clipToBox:function(ay){return{width:ay.clip.right-ay.clip.left,height:ay.clip.bottom-ay.clip.top,left:ay.clip.left,top:ay.clip.top}
},unshift:function(az,aB,aA){var ay=az.queue();
if(aB>1){ay.splice.apply(ay,[1,0].concat(ay.splice(aB,aA)))
}az.dequeue()
},saveStyle:function(ay){ay.data(ad,ay[0].style.cssText)
},restoreStyle:function(ay){ay[0].style.cssText=ay.data(ad)||"";
ay.removeData(ad)
},mode:function(ay,aA){var az=ay.is(":hidden");
if(aA==="toggle"){aA=az?"show":"hide"
}if(az?aA==="hide":aA==="show"){aA="none"
}return aA
},getBaseline:function(az,aA){var aB,ay;
switch(az[0]){case"top":aB=0;
break;
case"middle":aB=0.5;
break;
case"bottom":aB=1;
break;
default:aB=az[0]/aA.height
}switch(az[1]){case"left":ay=0;
break;
case"center":ay=0.5;
break;
case"right":ay=1;
break;
default:ay=az[1]/aA.width
}return{x:ay,y:aB}
},createPlaceholder:function(az){var aB,aA=az.css("position"),ay=az.position();
az.css({marginTop:az.css("marginTop"),marginBottom:az.css("marginBottom"),marginLeft:az.css("marginLeft"),marginRight:az.css("marginRight")}).outerWidth(az.outerWidth()).outerHeight(az.outerHeight());
if(/^(static|relative)/.test(aA)){aA="absolute";
aB=ak("<"+az[0].nodeName+">").insertAfter(az).css({display:/^(inline|ruby)/.test(az.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:az.css("marginTop"),marginBottom:az.css("marginBottom"),marginLeft:az.css("marginLeft"),marginRight:az.css("marginRight"),"float":az.css("float")}).outerWidth(az.outerWidth()).outerHeight(az.outerHeight()).addClass("ui-effects-placeholder");
az.data(t+"placeholder",aB)
}az.css({position:aA,left:ay.left,top:ay.top});
return aB
},removePlaceholder:function(ay){var aA=t+"placeholder",az=ay.data(aA);
if(az){az.remove();
ay.removeData(aA)
}},cleanUp:function(ay){ak.effects.restoreStyle(ay);
ak.effects.removePlaceholder(ay)
},setTransition:function(az,aB,ay,aA){aA=aA||{};
ak.each(aB,function(aD,aC){var aE=az.cssUnit(aC);
if(aE[0]>0){aA[aC]=aE[0]*ay+aE[1]
}});
return aA
}});
function aw(az,ay,aA,aB){if(ak.isPlainObject(az)){ay=az;
az=az.effect
}az={effect:az};
if(ay==null){ay={}
}if(ak.isFunction(ay)){aB=ay;
aA=null;
ay={}
}if(typeof ay==="number"||ak.fx.speeds[ay]){aB=aA;
aA=ay;
ay={}
}if(ak.isFunction(aA)){aB=aA;
aA=null
}if(ay){ak.extend(az,ay)
}aA=aA||ay.duration;
az.duration=ak.fx.off?0:typeof aA==="number"?aA:aA in ak.fx.speeds?ak.fx.speeds[aA]:ak.fx.speeds._default;
az.complete=aB||ay.complete;
return az
}function ax(ay){if(!ay||typeof ay==="number"||ak.fx.speeds[ay]){return true
}if(typeof ay==="string"&&!ak.effects.effect[ay]){return true
}if(ak.isFunction(ay)){return true
}if(typeof ay==="object"&&!ay.effect){return true
}return false
}ak.fn.extend({effect:function(){var aG=aw.apply(this,arguments),aF=ak.effects.effect[aG.effect],aC=aF.mode,aE=aG.queue,aB=aE||"fx",ay=aG.complete,aD=aG.mode,az=[],aH=function(aK){var aJ=ak(this),aI=ak.effects.mode(aJ,aD)||aC;
aJ.data(ap,true);
az.push(aI);
if(aC&&(aI==="show"||(aI===aC&&aI==="hide"))){aJ.show()
}if(!aC||aI!=="none"){ak.effects.saveStyle(aJ)
}if(ak.isFunction(aK)){aK()
}};
if(ak.fx.off||!aF){if(aD){return this[aD](aG.duration,ay)
}else{return this.each(function(){if(ay){ay.call(this)
}})
}}function aA(aK){var aL=ak(this);
function aJ(){aL.removeData(ap);
ak.effects.cleanUp(aL);
if(aG.mode==="hide"){aL.hide()
}aI()
}function aI(){if(ak.isFunction(ay)){ay.call(aL[0])
}if(ak.isFunction(aK)){aK()
}}aG.mode=az.shift();
if(ak.uiBackCompat!==false&&!aC){if(aL.is(":hidden")?aD==="hide":aD==="show"){aL[aD]();
aI()
}else{aF.call(aL[0],aG,aI)
}}else{if(aG.mode==="none"){aL[aD]();
aI()
}else{aF.call(aL[0],aG,aJ)
}}}return aE===false?this.each(aH).each(aA):this.queue(aB,aH).queue(aB,aA)
},show:(function(ay){return function(aA){if(ax(aA)){return ay.apply(this,arguments)
}else{var az=aw.apply(this,arguments);
az.mode="show";
return this.effect.call(this,az)
}}
})(ak.fn.show),hide:(function(ay){return function(aA){if(ax(aA)){return ay.apply(this,arguments)
}else{var az=aw.apply(this,arguments);
az.mode="hide";
return this.effect.call(this,az)
}}
})(ak.fn.hide),toggle:(function(ay){return function(aA){if(ax(aA)||typeof aA==="boolean"){return ay.apply(this,arguments)
}else{var az=aw.apply(this,arguments);
az.mode="toggle";
return this.effect.call(this,az)
}}
})(ak.fn.toggle),cssUnit:function(ay){var az=this.css(ay),aA=[];
ak.each(["em","px","%","pt"],function(aB,aC){if(az.indexOf(aC)>0){aA=[parseFloat(az),aC]
}});
return aA
},cssClip:function(ay){if(ay){return this.css("clip","rect("+ay.top+"px "+ay.right+"px "+ay.bottom+"px "+ay.left+"px)")
}return av(this.css("clip"),this)
},transfer:function(aJ,aB){var aD=ak(this),aF=ak(aJ.to),aI=aF.css("position")==="fixed",aE=ak("body"),aG=aI?aE.scrollTop():0,aH=aI?aE.scrollLeft():0,ay=aF.offset(),aA={top:ay.top-aG,left:ay.left-aH,height:aF.innerHeight(),width:aF.innerWidth()},aC=aD.offset(),az=ak("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(aJ.className).css({top:aC.top-aG,left:aC.left-aH,height:aD.innerHeight(),width:aD.innerWidth(),position:aI?"fixed":"absolute"}).animate(aA,aJ.duration,aJ.easing,function(){az.remove();
if(ak.isFunction(aB)){aB()
}})
}});
function av(aD,aA){var aC=aA.outerWidth(),aB=aA.outerHeight(),az=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,ay=az.exec(aD)||["",0,aC,aB,0];
return{top:parseFloat(ay[1])||0,right:ay[2]==="auto"?aC:parseFloat(ay[2]),bottom:ay[3]==="auto"?aB:parseFloat(ay[3]),left:parseFloat(ay[4])||0}
}ak.fx.step.clip=function(ay){if(!ay.clipInit){ay.start=ak(ay.elem).cssClip();
if(typeof ay.end==="string"){ay.end=av(ay.end,ay.elem)
}ay.clipInit=true
}ak(ay.elem).cssClip({top:ay.pos*(ay.end.top-ay.start.top)+ay.start.top,right:ay.pos*(ay.end.right-ay.start.right)+ay.start.right,bottom:ay.pos*(ay.end.bottom-ay.start.bottom)+ay.start.bottom,left:ay.pos*(ay.end.left-ay.start.left)+ay.start.left})
}
})();
(function(){var av={};
ak.each(["Quad","Cubic","Quart","Quint","Expo"],function(ax,aw){av[aw]=function(ay){return Math.pow(ay,ax+2)
}
});
ak.extend(av,{Sine:function(aw){return 1-Math.cos(aw*Math.PI/2)
},Circ:function(aw){return 1-Math.sqrt(1-aw*aw)
},Elastic:function(aw){return aw===0||aw===1?aw:-Math.pow(2,8*(aw-1))*Math.sin(((aw-1)*80-7.5)*Math.PI/15)
},Back:function(aw){return aw*aw*(3*aw-2)
},Bounce:function(ay){var aw,ax=4;
while(ay<((aw=Math.pow(2,--ax))-1)/11){}return 1/Math.pow(4,3-ax)-7.5625*Math.pow((aw*3-2)/22-ay,2)
}});
ak.each(av,function(ax,aw){ak.easing["easeIn"+ax]=aw;
ak.easing["easeOut"+ax]=function(ay){return 1-aw(1-ay)
};
ak.easing["easeInOut"+ax]=function(ay){return ay<0.5?aw(ay*2)/2:1-aw(ay*-2+2)/2
}
})
})();
var H=ak.effects;
/*!
 * jQuery UI Effects Blind 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var E=ak.effects.define("blind","hide",function(ax,av){var aA={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},ay=ak(this),az=ax.direction||"up",aC=ay.cssClip(),aw={clip:ak.extend({},aC)},aB=ak.effects.createPlaceholder(ay);
aw.clip[aA[az][0]]=aw.clip[aA[az][1]];
if(ax.mode==="show"){ay.cssClip(aw.clip);
if(aB){aB.css(ak.effects.clipToBox(aw))
}aw.clip=aC
}if(aB){aB.animate(ak.effects.clipToBox(aw),ax.duration,ax.easing)
}ay.animate(aw,{queue:false,duration:ax.duration,easing:ax.easing,complete:av})
});
/*!
 * jQuery UI Effects Bounce 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var z=ak.effects.define("bounce",function(aw,aD){var az,aH,aK,av=ak(this),aC=aw.mode,aB=aC==="hide",aL=aC==="show",aM=aw.direction||"up",ax=aw.distance,aA=aw.times||5,aN=aA*2+(aL||aB?1:0),aJ=aw.duration/aN,aF=aw.easing,ay=(aM==="up"||aM==="down")?"top":"left",aE=(aM==="up"||aM==="left"),aI=0,aG=av.queue().length;
ak.effects.createPlaceholder(av);
aK=av.css(ay);
if(!ax){ax=av[ay==="top"?"outerHeight":"outerWidth"]()/3
}if(aL){aH={opacity:1};
aH[ay]=aK;
av.css("opacity",0).css(ay,aE?-ax*2:ax*2).animate(aH,aJ,aF)
}if(aB){ax=ax/Math.pow(2,aA-1)
}aH={};
aH[ay]=aK;
for(;
aI<aA;
aI++){az={};
az[ay]=(aE?"-=":"+=")+ax;
av.animate(az,aJ,aF).animate(aH,aJ,aF);
ax=aB?ax*2:ax/2
}if(aB){az={opacity:0};
az[ay]=(aE?"-=":"+=")+ax;
av.animate(az,aJ,aF)
}av.queue(aD);
ak.effects.unshift(av,aG,aN+1)
});
/*!
 * jQuery UI Effects Clip 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var ae=ak.effects.define("clip","hide",function(aD,az){var aw,ax={},aA=ak(this),aC=aD.direction||"vertical",aB=aC==="both",av=aB||aC==="horizontal",ay=aB||aC==="vertical";
aw=aA.cssClip();
ax.clip={top:ay?(aw.bottom-aw.top)/2:aw.top,right:av?(aw.right-aw.left)/2:aw.right,bottom:ay?(aw.bottom-aw.top)/2:aw.bottom,left:av?(aw.right-aw.left)/2:aw.left};
ak.effects.createPlaceholder(aA);
if(aD.mode==="show"){aA.cssClip(ax.clip);
ax.clip=aw
}aA.animate(ax,{queue:false,duration:aD.duration,easing:aD.easing,complete:az})
});
/*!
 * jQuery UI Effects Drop 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var V=ak.effects.define("drop","hide",function(aF,ay){var av,az=ak(this),aB=aF.mode,aD=aB==="show",aC=aF.direction||"left",aw=(aC==="up"||aC==="down")?"top":"left",aE=(aC==="up"||aC==="left")?"-=":"+=",aA=(aE==="+=")?"-=":"+=",ax={opacity:0};
ak.effects.createPlaceholder(az);
av=aF.distance||az[aw==="top"?"outerHeight":"outerWidth"](true)/2;
ax[aw]=aE+av;
if(aD){az.css(ax);
ax[aw]=aA+av;
ax.opacity=1
}az.animate(ax,{queue:false,duration:aF.duration,easing:aF.easing,complete:ay})
});
/*!
 * jQuery UI Effects Explode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var at=ak.effects.define("explode","hide",function(aw,aI){var aL,aK,ay,aG,aF,aD,aC=aw.pieces?Math.round(Math.sqrt(aw.pieces)):3,ax=aC,av=ak(this),aE=aw.mode,aM=aE==="show",aA=av.show().css("visibility","hidden").offset(),aJ=Math.ceil(av.outerWidth()/ax),aH=Math.ceil(av.outerHeight()/aC),aB=[];
function aN(){aB.push(this);
if(aB.length===aC*ax){az()
}}for(aL=0;
aL<aC;
aL++){aG=aA.top+aL*aH;
aD=aL-(aC-1)/2;
for(aK=0;
aK<ax;
aK++){ay=aA.left+aK*aJ;
aF=aK-(ax-1)/2;
av.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-aK*aJ,top:-aL*aH}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:aJ,height:aH,left:ay+(aM?aF*aJ:0),top:aG+(aM?aD*aH:0),opacity:aM?0:1}).animate({left:ay+(aM?0:aF*aJ),top:aG+(aM?0:aD*aH),opacity:aM?1:0},aw.duration||500,aw.easing,aN)
}}function az(){av.css({visibility:"visible"});
ak(aB).remove();
aI()
}});
/*!
 * jQuery UI Effects Fade 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var au=ak.effects.define("fade","toggle",function(ax,aw){var av=ax.mode==="show";
ak(this).css("opacity",av?0:1).animate({opacity:av?1:0},{queue:false,duration:ax.duration,easing:ax.easing,complete:aw})
});
/*!
 * jQuery UI Effects Fold 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var u=ak.effects.define("fold","hide",function(aL,aA){var aB=ak(this),aC=aL.mode,aI=aC==="show",aD=aC==="hide",aK=aL.size||15,aE=/([0-9]+)%/.exec(aK),aJ=!!aL.horizFirst,ay=aJ?["right","bottom"]:["bottom","right"],az=aL.duration/2,aH=ak.effects.createPlaceholder(aB),aw=aB.cssClip(),aG={clip:ak.extend({},aw)},aF={clip:ak.extend({},aw)},av=[aw[ay[0]],aw[ay[1]]],ax=aB.queue().length;
if(aE){aK=parseInt(aE[1],10)/100*av[aD?0:1]
}aG.clip[ay[0]]=aK;
aF.clip[ay[0]]=aK;
aF.clip[ay[1]]=0;
if(aI){aB.cssClip(aF.clip);
if(aH){aH.css(ak.effects.clipToBox(aF))
}aF.clip=aw
}aB.queue(function(aM){if(aH){aH.animate(ak.effects.clipToBox(aG),az,aL.easing).animate(ak.effects.clipToBox(aF),az,aL.easing)
}aM()
}).animate(aG,az,aL.easing).animate(aF,az,aL.easing).queue(aA);
ak.effects.unshift(aB,ax,4)
});
/*!
 * jQuery UI Effects Highlight 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var J=ak.effects.define("highlight","show",function(aw,av){var ax=ak(this),ay={backgroundColor:ax.css("backgroundColor")};
if(aw.mode==="hide"){ay.opacity=0
}ak.effects.saveStyle(ax);
ax.css({backgroundImage:"none",backgroundColor:aw.color||"#ffff99"}).animate(ay,{queue:false,duration:aw.duration,easing:aw.easing,complete:av})
});
/*!
 * jQuery UI Effects Size 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var S=ak.effects.define("size",function(ay,aE){var aC,aD,aI,av=ak(this),aA=["fontSize"],aJ=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],ax=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],aB=ay.mode,aH=aB!=="effect",aM=ay.scale||"both",aK=ay.origin||["middle","center"],aL=av.css("position"),az=av.position(),aF=ak.effects.scaledDimensions(av),aG=ay.from||aF,aw=ay.to||ak.effects.scaledDimensions(av,0);
ak.effects.createPlaceholder(av);
if(aB==="show"){aI=aG;
aG=aw;
aw=aI
}aD={from:{y:aG.height/aF.height,x:aG.width/aF.width},to:{y:aw.height/aF.height,x:aw.width/aF.width}};
if(aM==="box"||aM==="both"){if(aD.from.y!==aD.to.y){aG=ak.effects.setTransition(av,aJ,aD.from.y,aG);
aw=ak.effects.setTransition(av,aJ,aD.to.y,aw)
}if(aD.from.x!==aD.to.x){aG=ak.effects.setTransition(av,ax,aD.from.x,aG);
aw=ak.effects.setTransition(av,ax,aD.to.x,aw)
}}if(aM==="content"||aM==="both"){if(aD.from.y!==aD.to.y){aG=ak.effects.setTransition(av,aA,aD.from.y,aG);
aw=ak.effects.setTransition(av,aA,aD.to.y,aw)
}}if(aK){aC=ak.effects.getBaseline(aK,aF);
aG.top=(aF.outerHeight-aG.outerHeight)*aC.y+az.top;
aG.left=(aF.outerWidth-aG.outerWidth)*aC.x+az.left;
aw.top=(aF.outerHeight-aw.outerHeight)*aC.y+az.top;
aw.left=(aF.outerWidth-aw.outerWidth)*aC.x+az.left
}av.css(aG);
if(aM==="content"||aM==="both"){aJ=aJ.concat(["marginTop","marginBottom"]).concat(aA);
ax=ax.concat(["marginLeft","marginRight"]);
av.find("*[width]").each(function(){var aQ=ak(this),aN=ak.effects.scaledDimensions(aQ),aP={height:aN.height*aD.from.y,width:aN.width*aD.from.x,outerHeight:aN.outerHeight*aD.from.y,outerWidth:aN.outerWidth*aD.from.x},aO={height:aN.height*aD.to.y,width:aN.width*aD.to.x,outerHeight:aN.height*aD.to.y,outerWidth:aN.width*aD.to.x};
if(aD.from.y!==aD.to.y){aP=ak.effects.setTransition(aQ,aJ,aD.from.y,aP);
aO=ak.effects.setTransition(aQ,aJ,aD.to.y,aO)
}if(aD.from.x!==aD.to.x){aP=ak.effects.setTransition(aQ,ax,aD.from.x,aP);
aO=ak.effects.setTransition(aQ,ax,aD.to.x,aO)
}if(aH){ak.effects.saveStyle(aQ)
}aQ.css(aP);
aQ.animate(aO,ay.duration,ay.easing,function(){if(aH){ak.effects.restoreStyle(aQ)
}})
})
}av.animate(aw,{queue:false,duration:ay.duration,easing:ay.easing,complete:function(){var aN=av.offset();
if(aw.opacity===0){av.css("opacity",aG.opacity)
}if(!aH){av.css("position",aL==="static"?"relative":aL).offset(aN);
ak.effects.saveStyle(av)
}aE()
}})
});
/*!
 * jQuery UI Effects Scale 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var O=ak.effects.define("scale",function(aw,av){var ax=ak(this),aA=aw.mode,ay=parseInt(aw.percent,10)||(parseInt(aw.percent,10)===0?0:(aA!=="effect"?0:100)),az=ak.extend(true,{from:ak.effects.scaledDimensions(ax),to:ak.effects.scaledDimensions(ax,ay,aw.direction||"both"),origin:aw.origin||["middle","center"]},aw);
if(aw.fade){az.from.opacity=1;
az.to.opacity=0
}ak.effects.effect.size.call(this,az,av)
});
/*!
 * jQuery UI Effects Puff 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var A=ak.effects.define("puff","hide",function(aw,av){var ax=ak.extend(true,{},aw,{fade:true,percent:parseInt(aw.percent,10)||150});
ak.effects.effect.scale.call(this,ax,av)
});
/*!
 * jQuery UI Effects Pulsate 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var x=ak.effects.define("pulsate","show",function(aG,ax){var az=ak(this),aA=aG.mode,aE=aA==="show",aB=aA==="hide",aF=aE||aB,aC=((aG.times||5)*2)+(aF?1:0),aw=aG.duration/aC,aD=0,ay=1,av=az.queue().length;
if(aE||!az.is(":visible")){az.css("opacity",0).show();
aD=1
}for(;
ay<aC;
ay++){az.animate({opacity:aD},aw,aG.easing);
aD=1-aD
}az.animate({opacity:aD},aw,aG.easing);
az.queue(ax);
ak.effects.unshift(az,av,aC+1)
});
/*!
 * jQuery UI Effects Shake 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var aj=ak.effects.define("shake",function(aJ,aC){var aD=1,aE=ak(this),aG=aJ.direction||"left",av=aJ.distance||20,aw=aJ.times||3,aH=aw*2+1,aA=Math.round(aJ.duration/aH),az=(aG==="up"||aG==="down")?"top":"left",ax=(aG==="up"||aG==="left"),aB={},aI={},aF={},ay=aE.queue().length;
ak.effects.createPlaceholder(aE);
aB[az]=(ax?"-=":"+=")+av;
aI[az]=(ax?"+=":"-=")+av*2;
aF[az]=(ax?"-=":"+=")+av*2;
aE.animate(aB,aA,aJ.easing);
for(;
aD<aw;
aD++){aE.animate(aI,aA,aJ.easing).animate(aF,aA,aJ.easing)
}aE.animate(aI,aA,aJ.easing).animate(aB,aA/2,aJ.easing).queue(aC);
ak.effects.unshift(aE,ay,aH+1)
});
/*!
 * jQuery UI Effects Slide 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var ai=ak.effects.define("slide","show",function(aG,aC){var az,aw,aD=ak(this),ax={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},aE=aG.mode,aF=aG.direction||"left",aA=(aF==="up"||aF==="down")?"top":"left",ay=(aF==="up"||aF==="left"),av=aG.distance||aD[aA==="top"?"outerHeight":"outerWidth"](true),aB={};
ak.effects.createPlaceholder(aD);
az=aD.cssClip();
aw=aD.position()[aA];
aB[aA]=(ay?-1:1)*av+aw;
aB.clip=aD.cssClip();
aB.clip[ax[aF][1]]=aB.clip[ax[aF][0]];
if(aE==="show"){aD.cssClip(aB.clip);
aD.css(aA,aB[aA]);
aB.clip=az;
aB[aA]=aw
}aD.animate(aB,{queue:false,duration:aG.duration,easing:aG.easing,complete:aC})
});
/*!
 * jQuery UI Effects Transfer 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var H;
if(ak.uiBackCompat!==false){H=ak.effects.define("transfer",function(aw,av){ak(this).transfer(aw,av)
})
}var M=H;
/*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
ak.ui.focusable=function(ay,aw){var aB,az,ax,aA,av,aC=ay.nodeName.toLowerCase();
if("area"===aC){aB=ay.parentNode;
az=aB.name;
if(!ay.href||!az||aB.nodeName.toLowerCase()!=="map"){return false
}ax=ak("img[usemap='#"+az+"']");
return ax.length>0&&ax.is(":visible")
}if(/^(input|select|textarea|button|object)$/.test(aC)){aA=!ay.disabled;
if(aA){av=ak(ay).closest("fieldset")[0];
if(av){aA=!av.disabled
}}}else{if("a"===aC){aA=ay.href||aw
}else{aA=aw
}}return aA&&ak(ay).is(":visible")&&o(ak(ay))
};
function o(aw){var av=aw.css("visibility");
while(av==="inherit"){aw=aw.parent();
av=aw.css("visibility")
}return av!=="hidden"
}ak.extend(ak.expr[":"],{focusable:function(av){return ak.ui.focusable(av,ak.attr(av,"tabindex")!=null)
}});
var ar=ak.ui.focusable;
var i=ak.fn.form=function(){return typeof this[0].form==="string"?this.closest("form"):ak(this[0].form)
};
/*!
 * jQuery UI Form Reset Mixin 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var N=ak.ui.formResetMixin={_formResetHandler:function(){var av=ak(this);
setTimeout(function(){var aw=av.data("ui-form-reset-instances");
ak.each(aw,function(){this.refresh()
})
})
},_bindFormResetHandler:function(){this.form=this.element.form();
if(!this.form.length){return
}var av=this.form.data("ui-form-reset-instances")||[];
if(!av.length){this.form.on("reset.ui-form-reset",this._formResetHandler)
}av.push(this);
this.form.data("ui-form-reset-instances",av)
},_unbindFormResetHandler:function(){if(!this.form.length){return
}var av=this.form.data("ui-form-reset-instances");
av.splice(ak.inArray(this,av),1);
if(av.length){this.form.data("ui-form-reset-instances",av)
}else{this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
}}};
/*!
 * jQuery UI Support for jQuery core 1.7.x 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
;
if(ak.fn.jquery.substring(0,3)==="1.7"){ak.each(["Width","Height"],function(ax,av){var aw=av==="Width"?["Left","Right"]:["Top","Bottom"],ay=av.toLowerCase(),aA={innerWidth:ak.fn.innerWidth,innerHeight:ak.fn.innerHeight,outerWidth:ak.fn.outerWidth,outerHeight:ak.fn.outerHeight};
function az(aD,aC,aB,aE){ak.each(aw,function(){aC-=parseFloat(ak.css(aD,"padding"+this))||0;
if(aB){aC-=parseFloat(ak.css(aD,"border"+this+"Width"))||0
}if(aE){aC-=parseFloat(ak.css(aD,"margin"+this))||0
}});
return aC
}ak.fn["inner"+av]=function(aB){if(aB===undefined){return aA["inner"+av].call(this)
}return this.each(function(){ak(this).css(ay,az(this,aB)+"px")
})
};
ak.fn["outer"+av]=function(aB,aC){if(typeof aB!=="number"){return aA["outer"+av].call(this,aB)
}return this.each(function(){ak(this).css(ay,az(this,aB,true,aC)+"px")
})
}
});
ak.fn.addBack=function(av){return this.add(av==null?this.prevObject:this.prevObject.filter(av))
}
}
/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var n=ak.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38};
var h=ak.ui.escapeSelector=(function(){var av=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
return function(aw){return aw.replace(av,"\\$1")
}
})();
/*!
 * jQuery UI Labels 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var am=ak.fn.labels=function(){var aw,av,az,ay,ax;
if(this[0].labels&&this[0].labels.length){return this.pushStack(this[0].labels)
}ay=this.eq(0).parents("label");
az=this.attr("id");
if(az){aw=this.eq(0).parents().last();
ax=aw.add(aw.length?aw.siblings():this.siblings());
av="label[for='"+ak.ui.escapeSelector(az)+"']";
ay=ay.add(ax.find(av).addBack(av))
}return this.pushStack(ay)
};
/*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var Z=ak.fn.scrollParent=function(ax){var aw=this.css("position"),av=aw==="absolute",ay=ax?/(auto|scroll|hidden)/:/(auto|scroll)/,az=this.parents().filter(function(){var aA=ak(this);
if(av&&aA.css("position")==="static"){return false
}return ay.test(aA.css("overflow")+aA.css("overflow-y")+aA.css("overflow-x"))
}).eq(0);
return aw==="fixed"||!az.length?ak(this[0].ownerDocument||document):az
};
/*!
 * jQuery UI Tabbable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var f=ak.extend(ak.expr[":"],{tabbable:function(ax){var aw=ak.attr(ax,"tabindex"),av=aw!=null;
return(!av||aw>=0)&&ak.ui.focusable(ax,av)
}});
/*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var aa=ak.fn.extend({uniqueId:(function(){var av=0;
return function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++av)
}})
}
})(),removeUniqueId:function(){return this.each(function(){if(/^ui-id-\d+$/.test(this.id)){ak(this).removeAttr("id")
}})
}});
/*!
 * jQuery UI Accordion 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var d=ak.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:false,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var av=this.options;
this.prevShow=this.prevHide=ak();
this._addClass("ui-accordion","ui-widget ui-helper-reset");
this.element.attr("role","tablist");
if(!av.collapsible&&(av.active===false||av.active==null)){av.active=0
}this._processPanels();
if(av.active<0){av.active+=this.headers.length
}this._refresh()
},_getCreateEventData:function(){return{header:this.active,panel:!this.active.length?ak():this.active.next()}
},_createIcons:function(){var ax,aw,av=this.options.icons;
if(av){ax=ak("<span>");
this._addClass(ax,"ui-accordion-header-icon","ui-icon "+av.header);
ax.prependTo(this.headers);
aw=this.active.children(".ui-accordion-header-icon");
this._removeClass(aw,av.header)._addClass(aw,null,av.activeHeader)._addClass(this.headers,"ui-accordion-icons")
}},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons");
this.headers.children(".ui-accordion-header-icon").remove()
},_destroy:function(){var av;
this.element.removeAttr("role");
this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId();
this._destroyIcons();
av=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId();
if(this.options.heightStyle!=="content"){av.css("height","")
}},_setOption:function(av,aw){if(av==="active"){this._activate(aw);
return
}if(av==="event"){if(this.options.event){this._off(this.headers,this.options.event)
}this._setupEvents(aw)
}this._super(av,aw);
if(av==="collapsible"&&!aw&&this.options.active===false){this._activate(0)
}if(av==="icons"){this._destroyIcons();
if(aw){this._createIcons()
}}},_setOptionDisabled:function(av){this._super(av);
this.element.attr("aria-disabled",av);
this._toggleClass(null,"ui-state-disabled",!!av);
this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!av)
},_keydown:function(ay){if(ay.altKey||ay.ctrlKey){return
}var az=ak.ui.keyCode,ax=this.headers.length,av=this.headers.index(ay.target),aw=false;
switch(ay.keyCode){case az.RIGHT:case az.DOWN:aw=this.headers[(av+1)%ax];
break;
case az.LEFT:case az.UP:aw=this.headers[(av-1+ax)%ax];
break;
case az.SPACE:case az.ENTER:this._eventHandler(ay);
break;
case az.HOME:aw=this.headers[0];
break;
case az.END:aw=this.headers[ax-1];
break
}if(aw){ak(ay.target).attr("tabIndex",-1);
ak(aw).attr("tabIndex",0);
ak(aw).trigger("focus");
ay.preventDefault()
}},_panelKeyDown:function(av){if(av.keyCode===ak.ui.keyCode.UP&&av.ctrlKey){ak(av.currentTarget).prev().trigger("focus")
}},refresh:function(){var av=this.options;
this._processPanels();
if((av.active===false&&av.collapsible===true)||!this.headers.length){av.active=false;
this.active=ak()
}else{if(av.active===false){this._activate(0)
}else{if(this.active.length&&!ak.contains(this.element[0],this.active[0])){if(this.headers.length===this.headers.find(".ui-state-disabled").length){av.active=false;
this.active=ak()
}else{this._activate(Math.max(0,av.active-1))
}}else{av.active=this.headers.index(this.active)
}}}this._destroyIcons();
this._refresh()
},_processPanels:function(){var aw=this.headers,av=this.panels;
this.headers=this.element.find(this.options.header);
this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default");
this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide();
this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content");
if(av){this._off(aw.not(this.headers));
this._off(av.not(this.panels))
}},_refresh:function(){var ay,aw=this.options,av=aw.heightStyle,ax=this.element.parent();
this.active=this._findActive(aw.active);
this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed");
this._addClass(this.active.next(),"ui-accordion-content-active");
this.active.next().show();
this.headers.attr("role","tab").each(function(){var aC=ak(this),aB=aC.uniqueId().attr("id"),az=aC.next(),aA=az.uniqueId().attr("id");
aC.attr("aria-controls",aA);
az.attr("aria-labelledby",aB)
}).next().attr("role","tabpanel");
this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide();
if(!this.active.length){this.headers.eq(0).attr("tabIndex",0)
}else{this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"})
}this._createIcons();
this._setupEvents(aw.event);
if(av==="fill"){ay=ax.height();
this.element.siblings(":visible").each(function(){var aA=ak(this),az=aA.css("position");
if(az==="absolute"||az==="fixed"){return
}ay-=aA.outerHeight(true)
});
this.headers.each(function(){ay-=ak(this).outerHeight(true)
});
this.headers.next().each(function(){ak(this).height(Math.max(0,ay-ak(this).innerHeight()+ak(this).height()))
}).css("overflow","auto")
}else{if(av==="auto"){ay=0;
this.headers.next().each(function(){var az=ak(this).is(":visible");
if(!az){ak(this).show()
}ay=Math.max(ay,ak(this).css("height","").height());
if(!az){ak(this).hide()
}}).height(ay)
}}},_activate:function(av){var aw=this._findActive(av)[0];
if(aw===this.active[0]){return
}aw=aw||this.active[0];
this._eventHandler({target:aw,currentTarget:aw,preventDefault:ak.noop})
},_findActive:function(av){return typeof av==="number"?this.headers.eq(av):ak()
},_setupEvents:function(aw){var av={keydown:"_keydown"};
if(aw){ak.each(aw.split(" "),function(ay,ax){av[ax]="_eventHandler"
})
}this._off(this.headers.add(this.headers.next()));
this._on(this.headers,av);
this._on(this.headers.next(),{keydown:"_panelKeyDown"});
this._hoverable(this.headers);
this._focusable(this.headers)
},_eventHandler:function(aw){var ax,ay,aF=this.options,aA=this.active,aB=ak(aw.currentTarget),aD=aB[0]===aA[0],az=aD&&aF.collapsible,av=az?ak():aB.next(),aC=aA.next(),aE={oldHeader:aA,oldPanel:aC,newHeader:az?ak():aB,newPanel:av};
aw.preventDefault();
if((aD&&!aF.collapsible)||(this._trigger("beforeActivate",aw,aE)===false)){return
}aF.active=az?false:this.headers.index(aB);
this.active=aD?ak():aB;
this._toggle(aE);
this._removeClass(aA,"ui-accordion-header-active","ui-state-active");
if(aF.icons){ax=aA.children(".ui-accordion-header-icon");
this._removeClass(ax,null,aF.icons.activeHeader)._addClass(ax,null,aF.icons.header)
}if(!aD){this._removeClass(aB,"ui-accordion-header-collapsed")._addClass(aB,"ui-accordion-header-active","ui-state-active");
if(aF.icons){ay=aB.children(".ui-accordion-header-icon");
this._removeClass(ay,null,aF.icons.header)._addClass(ay,null,aF.icons.activeHeader)
}this._addClass(aB.next(),"ui-accordion-content-active")
}},_toggle:function(ax){var av=ax.newPanel,aw=this.prevShow.length?this.prevShow:ax.oldPanel;
this.prevShow.add(this.prevHide).stop(true,true);
this.prevShow=av;
this.prevHide=aw;
if(this.options.animate){this._animate(av,aw,ax)
}else{aw.hide();
av.show();
this._toggleComplete(ax)
}aw.attr({"aria-hidden":"true"});
aw.prev().attr({"aria-selected":"false","aria-expanded":"false"});
if(av.length&&aw.length){aw.prev().attr({tabIndex:-1,"aria-expanded":"false"})
}else{if(av.length){this.headers.filter(function(){return parseInt(ak(this).attr("tabIndex"),10)===0
}).attr("tabIndex",-1)
}}av.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})
},_animate:function(av,aE,aA){var aD,aC,az,aB=this,aF=0,ay=av.css("box-sizing"),aG=av.length&&(!aE.length||(av.index()<aE.index())),ax=this.options.animate||{},aH=aG&&ax.down||ax,aw=function(){aB._toggleComplete(aA)
};
if(typeof aH==="number"){az=aH
}if(typeof aH==="string"){aC=aH
}aC=aC||aH.easing||ax.easing;
az=az||aH.duration||ax.duration;
if(!aE.length){return av.animate(this.showProps,az,aC,aw)
}if(!av.length){return aE.animate(this.hideProps,az,aC,aw)
}aD=av.show().outerHeight();
aE.animate(this.hideProps,{duration:az,easing:aC,step:function(aI,aJ){aJ.now=Math.round(aI)
}});
av.hide().animate(this.showProps,{duration:az,easing:aC,complete:aw,step:function(aI,aJ){aJ.now=Math.round(aI);
if(aJ.prop!=="height"){if(ay==="content-box"){aF+=aJ.now
}}else{if(aB.options.heightStyle!=="content"){aJ.now=Math.round(aD-aE.outerHeight()-aF);
aF=0
}}}})
},_toggleComplete:function(ax){var av=ax.oldPanel,aw=av.prev();
this._removeClass(av,"ui-accordion-content-active");
this._removeClass(aw,"ui-accordion-header-active")._addClass(aw,"ui-accordion-header-collapsed");
if(av.length){av.parent()[0].className=av.parent()[0].className
}this._trigger("activate",null,ax)
}});
var j=ak.ui.safeActiveElement=function(av){var ax;
try{ax=av.activeElement
}catch(aw){ax=av.body
}if(!ax){ax=av.body
}if(!ax.nodeName){ax=av.body
}return ax
};
/*!
 * jQuery UI Menu 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var p=ak.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;
this.mouseHandled=false;
this.element.uniqueId().attr({role:this.options.role,tabIndex:0});
this._addClass("ui-menu","ui-widget ui-widget-content");
this._on({"mousedown .ui-menu-item":function(av){av.preventDefault()
},"click .ui-menu-item":function(av){var ax=ak(av.target);
var aw=ak(ak.ui.safeActiveElement(this.document[0]));
if(!this.mouseHandled&&ax.not(".ui-state-disabled").length){this.select(av);
if(!av.isPropagationStopped()){this.mouseHandled=true
}if(ax.has(".ui-menu").length){this.expand(av)
}else{if(!this.element.is(":focus")&&aw.closest(".ui-menu").length){this.element.trigger("focus",[true]);
if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer)
}}}}},"mouseenter .ui-menu-item":function(av){if(this.previousFilter){return
}var aw=ak(av.target).closest(".ui-menu-item"),ax=ak(av.currentTarget);
if(aw[0]!==ax[0]){return
}this._removeClass(ax.siblings().children(".ui-state-active"),null,"ui-state-active");
this.focus(av,ax)
},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(ax,av){var aw=this.active||this.element.find(this.options.items).eq(0);
if(!av){this.focus(ax,aw)
}},blur:function(av){this._delay(function(){var aw=!ak.contains(this.element[0],ak.ui.safeActiveElement(this.document[0]));
if(aw){this.collapseAll(av)
}})
},keydown:"_keydown"});
this.refresh();
this._on(this.document,{click:function(av){if(this._closeOnDocumentClick(av)){this.collapseAll(av)
}this.mouseHandled=false
}})
},_destroy:function(){var aw=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),av=aw.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show();
av.children().each(function(){var ax=ak(this);
if(ax.data("ui-menu-submenu-caret")){ax.remove()
}})
},_keydown:function(az){var aw,ay,aA,ax,av=true;
switch(az.keyCode){case ak.ui.keyCode.PAGE_UP:this.previousPage(az);
break;
case ak.ui.keyCode.PAGE_DOWN:this.nextPage(az);
break;
case ak.ui.keyCode.HOME:this._move("first","first",az);
break;
case ak.ui.keyCode.END:this._move("last","last",az);
break;
case ak.ui.keyCode.UP:this.previous(az);
break;
case ak.ui.keyCode.DOWN:this.next(az);
break;
case ak.ui.keyCode.LEFT:this.collapse(az);
break;
case ak.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(az)
}break;
case ak.ui.keyCode.ENTER:case ak.ui.keyCode.SPACE:this._activate(az);
break;
case ak.ui.keyCode.ESCAPE:this.collapse(az);
break;
default:av=false;
ay=this.previousFilter||"";
ax=false;
aA=az.keyCode>=96&&az.keyCode<=105?(az.keyCode-96).toString():String.fromCharCode(az.keyCode);
clearTimeout(this.filterTimer);
if(aA===ay){ax=true
}else{aA=ay+aA
}aw=this._filterMenuItems(aA);
aw=ax&&aw.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):aw;
if(!aw.length){aA=String.fromCharCode(az.keyCode);
aw=this._filterMenuItems(aA)
}if(aw.length){this.focus(az,aw);
this.previousFilter=aA;
this.filterTimer=this._delay(function(){delete this.previousFilter
},1000)
}else{delete this.previousFilter
}}if(av){az.preventDefault()
}},_activate:function(av){if(this.active&&!this.active.is(".ui-state-disabled")){if(this.active.children("[aria-haspopup='true']").length){this.expand(av)
}else{this.select(av)
}}},refresh:function(){var aC,ax,aA,ay,av,aB=this,az=this.options.icons.submenu,aw=this.element.find(this.options.menus);
this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length);
aA=aw.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var aF=ak(this),aD=aF.prev(),aE=ak("<span>").data("ui-menu-submenu-caret",true);
aB._addClass(aE,"ui-menu-icon","ui-icon "+az);
aD.attr("aria-haspopup","true").prepend(aE);
aF.attr("aria-labelledby",aD.attr("id"))
});
this._addClass(aA,"ui-menu","ui-widget ui-widget-content ui-front");
aC=aw.add(this.element);
ax=aC.find(this.options.items);
ax.not(".ui-menu-item").each(function(){var aD=ak(this);
if(aB._isDivider(aD)){aB._addClass(aD,"ui-menu-divider","ui-widget-content")
}});
ay=ax.not(".ui-menu-item, .ui-menu-divider");
av=ay.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()});
this._addClass(ay,"ui-menu-item")._addClass(av,"ui-menu-item-wrapper");
ax.filter(".ui-state-disabled").attr("aria-disabled","true");
if(this.active&&!ak.contains(this.element[0],this.active[0])){this.blur()
}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]
},_setOption:function(aw,ax){if(aw==="icons"){var av=this.element.find(".ui-menu-icon");
this._removeClass(av,null,this.options.icons.submenu)._addClass(av,null,ax.submenu)
}this._super(aw,ax)
},_setOptionDisabled:function(av){this._super(av);
this.element.attr("aria-disabled",String(av));
this._toggleClass(null,"ui-state-disabled",!!av)
},focus:function(ax,aw){var az,ay,av;
this.blur(ax,ax&&ax.type==="focus");
this._scrollIntoView(aw);
this.active=aw.first();
ay=this.active.children(".ui-menu-item-wrapper");
this._addClass(ay,null,"ui-state-active");
if(this.options.role){this.element.attr("aria-activedescendant",ay.attr("id"))
}av=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper");
this._addClass(av,null,"ui-state-active");
if(ax&&ax.type==="keydown"){this._close()
}else{this.timer=this._delay(function(){this._close()
},this.delay)
}az=aw.children(".ui-menu");
if(az.length&&ax&&(/^mouse/.test(ax.type))){this._startOpening(az)
}this.activeMenu=aw.parent();
this._trigger("focus",ax,{item:aw})
},_scrollIntoView:function(ay){var aB,ax,az,av,aw,aA;
if(this._hasScroll()){aB=parseFloat(ak.css(this.activeMenu[0],"borderTopWidth"))||0;
ax=parseFloat(ak.css(this.activeMenu[0],"paddingTop"))||0;
az=ay.offset().top-this.activeMenu.offset().top-aB-ax;
av=this.activeMenu.scrollTop();
aw=this.activeMenu.height();
aA=ay.outerHeight();
if(az<0){this.activeMenu.scrollTop(av+az)
}else{if(az+aA>aw){this.activeMenu.scrollTop(av+az-aw+aA)
}}}},blur:function(aw,av){if(!av){clearTimeout(this.timer)
}if(!this.active){return
}this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active");
this._trigger("blur",aw,{item:this.active});
this.active=null
},_startOpening:function(av){clearTimeout(this.timer);
if(av.attr("aria-hidden")!=="true"){return
}this.timer=this._delay(function(){this._close();
this._open(av)
},this.delay)
},_open:function(aw){var av=ak.extend({of:this.active},this.options.position);
clearTimeout(this.timer);
this.element.find(".ui-menu").not(aw.parents(".ui-menu")).hide().attr("aria-hidden","true");
aw.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(av)
},collapseAll:function(aw,av){clearTimeout(this.timer);
this.timer=this._delay(function(){var ax=av?this.element:ak(aw&&aw.target).closest(this.element.find(".ui-menu"));
if(!ax.length){ax=this.element
}this._close(ax);
this.blur(aw);
this._removeClass(ax.find(".ui-state-active"),null,"ui-state-active");
this.activeMenu=ax
},this.delay)
},_close:function(av){if(!av){av=this.active?this.active.parent():this.element
}av.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")
},_closeOnDocumentClick:function(av){return !ak(av.target).closest(".ui-menu").length
},_isDivider:function(av){return !/[^\-\u2014\u2013\s]/.test(av.text())
},collapse:function(aw){var av=this.active&&this.active.parent().closest(".ui-menu-item",this.element);
if(av&&av.length){this._close();
this.focus(aw,av)
}},expand:function(aw){var av=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();
if(av&&av.length){this._open(av.parent());
this._delay(function(){this.focus(aw,av)
})
}},next:function(av){this._move("next","first",av)
},previous:function(av){this._move("prev","last",av)
},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},_move:function(ay,aw,ax){var av;
if(this.active){if(ay==="first"||ay==="last"){av=this.active[ay==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1)
}else{av=this.active[ay+"All"](".ui-menu-item").eq(0)
}}if(!av||!av.length||!this.active){av=this.activeMenu.find(this.options.items)[aw]()
}this.focus(ax,av)
},nextPage:function(ax){var aw,ay,av;
if(!this.active){this.next(ax);
return
}if(this.isLastItem()){return
}if(this._hasScroll()){ay=this.active.offset().top;
av=this.element.height();
this.active.nextAll(".ui-menu-item").each(function(){aw=ak(this);
return aw.offset().top-ay-av<0
});
this.focus(ax,aw)
}else{this.focus(ax,this.activeMenu.find(this.options.items)[!this.active?"first":"last"]())
}},previousPage:function(ax){var aw,ay,av;
if(!this.active){this.next(ax);
return
}if(this.isFirstItem()){return
}if(this._hasScroll()){ay=this.active.offset().top;
av=this.element.height();
this.active.prevAll(".ui-menu-item").each(function(){aw=ak(this);
return aw.offset().top-ay+av>0
});
this.focus(ax,aw)
}else{this.focus(ax,this.activeMenu.find(this.options.items).first())
}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")
},select:function(av){this.active=this.active||ak(av.target).closest(".ui-menu-item");
var aw={item:this.active};
if(!this.active.has(".ui-menu").length){this.collapseAll(av,true)
}this._trigger("select",av,aw)
},_filterMenuItems:function(ax){var av=ax.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),aw=new RegExp("^"+av,"i");
return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return aw.test(ak.trim(ak(this).children(".ui-menu-item-wrapper").text()))
})
}});
/*!
 * jQuery UI Autocomplete 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
ak.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var ax,av,ay,aA=this.element[0].nodeName.toLowerCase(),az=aA==="textarea",aw=aA==="input";
this.isMultiLine=az||!aw&&this._isContentEditable(this.element);
this.valueMethod=this.element[az||aw?"val":"text"];
this.isNewMenu=true;
this._addClass("ui-autocomplete-input");
this.element.attr("autocomplete","off");
this._on(this.element,{keydown:function(aB){if(this.element.prop("readOnly")){ax=true;
ay=true;
av=true;
return
}ax=false;
ay=false;
av=false;
var aC=ak.ui.keyCode;
switch(aB.keyCode){case aC.PAGE_UP:ax=true;
this._move("previousPage",aB);
break;
case aC.PAGE_DOWN:ax=true;
this._move("nextPage",aB);
break;
case aC.UP:ax=true;
this._keyEvent("previous",aB);
break;
case aC.DOWN:ax=true;
this._keyEvent("next",aB);
break;
case aC.ENTER:if(this.menu.active){ax=true;
aB.preventDefault();
this.menu.select(aB)
}break;
case aC.TAB:if(this.menu.active){this.menu.select(aB)
}break;
case aC.ESCAPE:if(this.menu.element.is(":visible")){if(!this.isMultiLine){this._value(this.term)
}this.close(aB);
aB.preventDefault()
}break;
default:av=true;
this._searchTimeout(aB);
break
}},keypress:function(aB){if(ax){ax=false;
if(!this.isMultiLine||this.menu.element.is(":visible")){aB.preventDefault()
}return
}if(av){return
}var aC=ak.ui.keyCode;
switch(aB.keyCode){case aC.PAGE_UP:this._move("previousPage",aB);
break;
case aC.PAGE_DOWN:this._move("nextPage",aB);
break;
case aC.UP:this._keyEvent("previous",aB);
break;
case aC.DOWN:this._keyEvent("next",aB);
break
}},input:function(aB){if(ay){ay=false;
aB.preventDefault();
return
}this._searchTimeout(aB)
},focus:function(){this.selectedItem=null;
this.previous=this._value()
},blur:function(aB){if(this.cancelBlur){delete this.cancelBlur;
return
}clearTimeout(this.searching);
this.close(aB);
this._change(aB)
}});
this._initSource();
this.menu=ak("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance");
this._addClass(this.menu.element,"ui-autocomplete","ui-front");
this._on(this.menu.element,{mousedown:function(aB){aB.preventDefault();
this.cancelBlur=true;
this._delay(function(){delete this.cancelBlur;
if(this.element[0]!==ak.ui.safeActiveElement(this.document[0])){this.element.trigger("focus")
}})
},menufocus:function(aD,aE){var aB,aC;
if(this.isNewMenu){this.isNewMenu=false;
if(aD.originalEvent&&/^mouse/.test(aD.originalEvent.type)){this.menu.blur();
this.document.one("mousemove",function(){ak(aD.target).trigger(aD.originalEvent)
});
return
}}aC=aE.item.data("ui-autocomplete-item");
if(false!==this._trigger("focus",aD,{item:aC})){if(aD.originalEvent&&/^key/.test(aD.originalEvent.type)){this._value(aC.value)
}}aB=aE.item.attr("aria-label")||aC.value;
if(aB&&ak.trim(aB).length){this.liveRegion.children().hide();
ak("<div>").text(aB).appendTo(this.liveRegion)
}},menuselect:function(aD,aE){var aC=aE.item.data("ui-autocomplete-item"),aB=this.previous;
if(this.element[0]!==ak.ui.safeActiveElement(this.document[0])){this.element.trigger("focus");
this.previous=aB;
this._delay(function(){this.previous=aB;
this.selectedItem=aC
})
}if(false!==this._trigger("select",aD,{item:aC})){this._value(aC.value)
}this.term=this._value();
this.close(aD);
this.selectedItem=aC
}});
this.liveRegion=ak("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body);
this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible");
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_destroy:function(){clearTimeout(this.searching);
this.element.removeAttr("autocomplete");
this.menu.element.remove();
this.liveRegion.remove()
},_setOption:function(av,aw){this._super(av,aw);
if(av==="source"){this._initSource()
}if(av==="appendTo"){this.menu.element.appendTo(this._appendTo())
}if(av==="disabled"&&aw&&this.xhr){this.xhr.abort()
}},_isEventTargetInWidget:function(av){var aw=this.menu.element[0];
return av.target===this.element[0]||av.target===aw||ak.contains(aw,av.target)
},_closeOnClickOutside:function(av){if(!this._isEventTargetInWidget(av)){this.close()
}},_appendTo:function(){var av=this.options.appendTo;
if(av){av=av.jquery||av.nodeType?ak(av):this.document.find(av).eq(0)
}if(!av||!av[0]){av=this.element.closest(".ui-front, dialog")
}if(!av.length){av=this.document[0].body
}return av
},_initSource:function(){var ax,av,aw=this;
if(ak.isArray(this.options.source)){ax=this.options.source;
this.source=function(az,ay){ay(ak.ui.autocomplete.filter(ax,az.term))
}
}else{if(typeof this.options.source==="string"){av=this.options.source;
this.source=function(az,ay){if(aw.xhr){aw.xhr.abort()
}aw.xhr=ak.ajax({url:av,data:az,dataType:"json",success:function(aA){ay(aA)
},error:function(){ay([])
}})
}
}else{this.source=this.options.source
}}},_searchTimeout:function(av){clearTimeout(this.searching);
this.searching=this._delay(function(){var ax=this.term===this._value(),aw=this.menu.element.is(":visible"),ay=av.altKey||av.ctrlKey||av.metaKey||av.shiftKey;
if(!ax||(ax&&!aw&&!ay)){this.selectedItem=null;
this.search(null,av)
}},this.options.delay)
},search:function(aw,av){aw=aw!=null?aw:this._value();
this.term=this._value();
if(aw.length<this.options.minLength){return this.close(av)
}if(this._trigger("search",av)===false){return
}return this._search(aw)
},_search:function(av){this.pending++;
this._addClass("ui-autocomplete-loading");
this.cancelSearch=false;
this.source({term:av},this._response())
},_response:function(){var av=++this.requestIndex;
return ak.proxy(function(aw){if(av===this.requestIndex){this.__response(aw)
}this.pending--;
if(!this.pending){this._removeClass("ui-autocomplete-loading")
}},this)
},__response:function(av){if(av){av=this._normalize(av)
}this._trigger("response",null,{content:av});
if(!this.options.disabled&&av&&av.length&&!this.cancelSearch){this._suggest(av);
this._trigger("open")
}else{this._close()
}},close:function(av){this.cancelSearch=true;
this._close(av)
},_close:function(av){this._off(this.document,"mousedown");
if(this.menu.element.is(":visible")){this.menu.element.hide();
this.menu.blur();
this.isNewMenu=true;
this._trigger("close",av)
}},_change:function(av){if(this.previous!==this._value()){this._trigger("change",av,{item:this.selectedItem})
}},_normalize:function(av){if(av.length&&av[0].label&&av[0].value){return av
}return ak.map(av,function(aw){if(typeof aw==="string"){return{label:aw,value:aw}
}return ak.extend({},aw,{label:aw.label||aw.value,value:aw.value||aw.label})
})
},_suggest:function(av){var aw=this.menu.element.empty();
this._renderMenu(aw,av);
this.isNewMenu=true;
this.menu.refresh();
aw.show();
this._resizeMenu();
aw.position(ak.extend({of:this.element},this.options.position));
if(this.options.autoFocus){this.menu.next()
}this._on(this.document,{mousedown:"_closeOnClickOutside"})
},_resizeMenu:function(){var av=this.menu.element;
av.outerWidth(Math.max(av.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(aw,av){var ax=this;
ak.each(av,function(ay,az){ax._renderItemData(aw,az)
})
},_renderItemData:function(av,aw){return this._renderItem(av,aw).data("ui-autocomplete-item",aw)
},_renderItem:function(av,aw){return ak("<li>").append(ak("<div>").text(aw.label)).appendTo(av)
},_move:function(aw,av){if(!this.menu.element.is(":visible")){this.search(null,av);
return
}if(this.menu.isFirstItem()&&/^previous/.test(aw)||this.menu.isLastItem()&&/^next/.test(aw)){if(!this.isMultiLine){this._value(this.term)
}this.menu.blur();
return
}this.menu[aw](av)
},widget:function(){return this.menu.element
},_value:function(){return this.valueMethod.apply(this.element,arguments)
},_keyEvent:function(aw,av){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(aw,av);
av.preventDefault()
}},_isContentEditable:function(aw){if(!aw.length){return false
}var av=aw.prop("contentEditable");
if(av==="inherit"){return this._isContentEditable(aw.parent())
}return av==="true"
}});
ak.extend(ak.ui.autocomplete,{escapeRegex:function(av){return av.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
},filter:function(ax,av){var aw=new RegExp(ak.ui.autocomplete.escapeRegex(av),"i");
return ak.grep(ax,function(ay){return aw.test(ay.label||ay.value||ay)
})
}});
ak.widget("ui.autocomplete",ak.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(av){return av+(av>1?" results are":" result is")+" available, use up and down arrow keys to navigate."
}}},__response:function(aw){var av;
this._superApply(arguments);
if(this.options.disabled||this.cancelSearch){return
}if(aw&&aw.length){av=this.options.messages.results(aw.length)
}else{av=this.options.messages.noResults
}this.liveRegion.children().hide();
ak("<div>").text(av).appendTo(this.liveRegion)
}});
var an=ak.ui.autocomplete;
/*!
 * jQuery UI Controlgroup 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var g=/ui-corner-([a-z]){2,6}/g;
var v=ak.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:true,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()
},_enhance:function(){this.element.attr("role","toolbar");
this.refresh()
},_destroy:function(){this._callChildMethod("destroy");
this.childWidgets.removeData("ui-controlgroup-data");
this.element.removeAttr("role");
if(this.options.items.controlgroupLabel){this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
}},_initWidgets:function(){var aw=this,av=[];
ak.each(this.options.items,function(az,ax){var aA;
var ay={};
if(!ax){return
}if(az==="controlgroupLabel"){aA=aw.element.find(ax);
aA.each(function(){var aB=ak(this);
if(aB.children(".ui-controlgroup-label-contents").length){return
}aB.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
});
aw._addClass(aA,null,"ui-widget ui-widget-content ui-state-default");
av=av.concat(aA.get());
return
}if(!ak.fn[az]){return
}if(aw["_"+az+"Options"]){ay=aw["_"+az+"Options"]("middle")
}else{ay={classes:{}}
}aw.element.find(ax).each(function(){var aC=ak(this);
var aB=aC[az]("instance");
var aD=ak.widget.extend({},ay);
if(az==="button"&&aC.parent(".ui-spinner").length){return
}if(!aB){aB=aC[az]()[az]("instance")
}if(aB){aD.classes=aw._resolveClassesValues(aD.classes,aB)
}aC[az](aD);
var aE=aC[az]("widget");
ak.data(aE[0],"ui-controlgroup-data",aB?aB:aC[az]("instance"));
av.push(aE[0])
})
});
this.childWidgets=ak(ak.unique(av));
this._addClass(this.childWidgets,"ui-controlgroup-item")
},_callChildMethod:function(av){this.childWidgets.each(function(){var aw=ak(this),ax=aw.data("ui-controlgroup-data");
if(ax&&ax[av]){ax[av]()
}})
},_updateCornerClass:function(ax,aw){var av="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all";
var ay=this._buildSimpleOptions(aw,"label").classes.label;
this._removeClass(ax,null,av);
this._addClass(ax,null,ay)
},_buildSimpleOptions:function(aw,ax){var ay=this.options.direction==="vertical";
var av={classes:{}};
av.classes[ax]={middle:"",first:"ui-corner-"+(ay?"top":"left"),last:"ui-corner-"+(ay?"bottom":"right"),only:"ui-corner-all"}[aw];
return av
},_spinnerOptions:function(av){var aw=this._buildSimpleOptions(av,"ui-spinner");
aw.classes["ui-spinner-up"]="";
aw.classes["ui-spinner-down"]="";
return aw
},_buttonOptions:function(av){return this._buildSimpleOptions(av,"ui-button")
},_checkboxradioOptions:function(av){return this._buildSimpleOptions(av,"ui-checkboxradio-label")
},_selectmenuOptions:function(av){var aw=this.options.direction==="vertical";
return{width:aw?"auto":false,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(aw?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(aw?"top":"left")},last:{"ui-selectmenu-button-open":aw?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(aw?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[av]}
},_resolveClassesValues:function(ax,aw){var av={};
ak.each(ax,function(ay){var az=aw.options.classes[ay]||"";
az=ak.trim(az.replace(g,""));
av[ay]=(az+" "+ax[ay]).replace(/\s+/g," ")
});
return av
},_setOption:function(av,aw){if(av==="direction"){this._removeClass("ui-controlgroup-"+this.options.direction)
}this._super(av,aw);
if(av==="disabled"){this._callChildMethod(aw?"disable":"enable");
return
}this.refresh()
},refresh:function(){var av,aw=this;
this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction);
if(this.options.direction==="horizontal"){this._addClass(null,"ui-helper-clearfix")
}this._initWidgets();
av=this.childWidgets;
if(this.options.onlyVisible){av=av.filter(":visible")
}if(av.length){ak.each(["first","last"],function(az,aA){var ax=av[aA]().data("ui-controlgroup-data");
if(ax&&aw["_"+ax.widgetName+"Options"]){var ay=aw["_"+ax.widgetName+"Options"](av.length===1?"only":aA);
ay.classes=aw._resolveClassesValues(ay.classes,ax);
ax.element[ax.widgetName](ay)
}else{aw._updateCornerClass(av[aA](),aA)
}});
this._callChildMethod("refresh")
}}});
/*!
 * jQuery UI Checkboxradio 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
ak.widget("ui.checkboxradio",[ak.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:true,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var aw,ay;
var ax=this;
var av=this._super()||{};
this._readType();
ay=this.element.labels();
this.label=ak(ay[ay.length-1]);
if(!this.label.length){ak.error("No label found for checkboxradio widget")
}this.originalLabel="";
this.label.contents().not(this.element[0]).each(function(){ax.originalLabel+=this.nodeType===3?ak(this).text():this.outerHTML
});
if(this.originalLabel){av.label=this.originalLabel
}aw=this.element[0].disabled;
if(aw!=null){av.disabled=aw
}return av
},_create:function(){var av=this.element[0].checked;
this._bindFormResetHandler();
if(this.options.disabled==null){this.options.disabled=this.element[0].disabled
}this._setOption("disabled",this.options.disabled);
this._addClass("ui-checkboxradio","ui-helper-hidden-accessible");
this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget");
if(this.type==="radio"){this._addClass(this.label,"ui-checkboxradio-radio-label")
}if(this.options.label&&this.options.label!==this.originalLabel){this._updateLabel()
}else{if(this.originalLabel){this.options.label=this.originalLabel
}}this._enhance();
if(av){this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active");
if(this.icon){this._addClass(this.icon,null,"ui-state-hover")
}}this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")
},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")
}})
},_readType:function(){var av=this.element[0].nodeName.toLowerCase();
this.type=this.element[0].type;
if(av!=="input"||!/radio|checkbox/.test(this.type)){ak.error("Can't create checkboxradio on element.nodeName="+av+" and element.type="+this.type)
}},_enhance:function(){this._updateIcon(this.element[0].checked)
},widget:function(){return this.label
},_getRadioGroup:function(){var ax;
var av=this.element[0].name;
var aw="input[name='"+ak.ui.escapeSelector(av)+"']";
if(!av){return ak([])
}if(this.form.length){ax=ak(this.form[0].elements).filter(aw)
}else{ax=ak(aw).filter(function(){return ak(this).form().length===0
})
}return ax.not(this.element)
},_toggleClasses:function(){var av=this.element[0].checked;
this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",av);
if(this.options.icon&&this.type==="checkbox"){this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",av)._toggleClass(this.icon,null,"ui-icon-blank",!av)
}if(this.type==="radio"){this._getRadioGroup().each(function(){var aw=ak(this).checkboxradio("instance");
if(aw){aw._removeClass(aw.label,"ui-checkboxradio-checked","ui-state-active")
}})
}},_destroy:function(){this._unbindFormResetHandler();
if(this.icon){this.icon.remove();
this.iconSpace.remove()
}},_setOption:function(av,aw){if(av==="label"&&!aw){return
}this._super(av,aw);
if(av==="disabled"){this._toggleClass(this.label,null,"ui-state-disabled",aw);
this.element[0].disabled=aw;
return
}this.refresh()
},_updateIcon:function(aw){var av="ui-icon ui-icon-background ";
if(this.options.icon){if(!this.icon){this.icon=ak("<span>");
this.iconSpace=ak("<span> </span>");
this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")
}if(this.type==="checkbox"){av+=aw?"ui-icon-check ui-state-checked":"ui-icon-blank";
this._removeClass(this.icon,null,aw?"ui-icon-blank":"ui-icon-check")
}else{av+="ui-icon-blank"
}this._addClass(this.icon,"ui-checkboxradio-icon",av);
if(!aw){this._removeClass(this.icon,null,"ui-icon-check ui-state-checked")
}this.icon.prependTo(this.label).after(this.iconSpace)
}else{if(this.icon!==undefined){this.icon.remove();
this.iconSpace.remove();
delete this.icon
}}},_updateLabel:function(){var av=this.label.contents().not(this.element[0]);
if(this.icon){av=av.not(this.icon[0])
}if(this.iconSpace){av=av.not(this.iconSpace[0])
}av.remove();
this.label.append(this.options.label)
},refresh:function(){var aw=this.element[0].checked,av=this.element[0].disabled;
this._updateIcon(aw);
this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",aw);
if(this.options.label!==null){this._updateLabel()
}if(av!==this.options.disabled){this._setOptions({disabled:av})
}}}]);
var ao=ak.ui.checkboxradio;
/*!
 * jQuery UI Button 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
ak.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:true},_getCreateOptions:function(){var aw,av=this._super()||{};
this.isInput=this.element.is("input");
aw=this.element[0].disabled;
if(aw!=null){av.disabled=aw
}this.originalLabel=this.isInput?this.element.val():this.element.html();
if(this.originalLabel){av.label=this.originalLabel
}return av
},_create:function(){if(!this.option.showLabel&!this.options.icon){this.options.showLabel=true
}if(this.options.disabled==null){this.options.disabled=this.element[0].disabled||false
}this.hasTitle=!!this.element.attr("title");
if(this.options.label&&this.options.label!==this.originalLabel){if(this.isInput){this.element.val(this.options.label)
}else{this.element.html(this.options.label)
}}this._addClass("ui-button","ui-widget");
this._setOption("disabled",this.options.disabled);
this._enhance();
if(this.element.is("a")){this._on({keyup:function(av){if(av.keyCode===ak.ui.keyCode.SPACE){av.preventDefault();
if(this.element[0].click){this.element[0].click()
}else{this.element.trigger("click")
}}}})
}},_enhance:function(){if(!this.element.is("button")){this.element.attr("role","button")
}if(this.options.icon){this._updateIcon("icon",this.options.icon);
this._updateTooltip()
}},_updateTooltip:function(){this.title=this.element.attr("title");
if(!this.options.showLabel&&!this.title){this.element.attr("title",this.options.label)
}},_updateIcon:function(ax,az){var aw=ax!=="iconPosition",av=aw?this.options.iconPosition:az,ay=av==="top"||av==="bottom";
if(!this.icon){this.icon=ak("<span>");
this._addClass(this.icon,"ui-button-icon","ui-icon");
if(!this.options.showLabel){this._addClass("ui-button-icon-only")
}}else{if(aw){this._removeClass(this.icon,null,this.options.icon)
}}if(aw){this._addClass(this.icon,null,az)
}this._attachIcon(av);
if(ay){this._addClass(this.icon,null,"ui-widget-icon-block");
if(this.iconSpace){this.iconSpace.remove()
}}else{if(!this.iconSpace){this.iconSpace=ak("<span> </span>");
this._addClass(this.iconSpace,"ui-button-icon-space")
}this._removeClass(this.icon,null,"ui-wiget-icon-block");
this._attachIconSpace(av)
}},_destroy:function(){this.element.removeAttr("role");
if(this.icon){this.icon.remove()
}if(this.iconSpace){this.iconSpace.remove()
}if(!this.hasTitle){this.element.removeAttr("title")
}},_attachIconSpace:function(av){this.icon[/^(?:end|bottom)/.test(av)?"before":"after"](this.iconSpace)
},_attachIcon:function(av){this.element[/^(?:end|bottom)/.test(av)?"append":"prepend"](this.icon)
},_setOptions:function(aw){var ax=aw.showLabel===undefined?this.options.showLabel:aw.showLabel,av=aw.icon===undefined?this.options.icon:aw.icon;
if(!ax&&!av){aw.showLabel=true
}this._super(aw)
},_setOption:function(av,aw){if(av==="icon"){if(aw){this._updateIcon(av,aw)
}else{if(this.icon){this.icon.remove();
if(this.iconSpace){this.iconSpace.remove()
}}}}if(av==="iconPosition"){this._updateIcon(av,aw)
}if(av==="showLabel"){this._toggleClass("ui-button-icon-only",null,!aw);
this._updateTooltip()
}if(av==="label"){if(this.isInput){this.element.val(aw)
}else{this.element.html(aw);
if(this.icon){this._attachIcon(this.options.iconPosition);
this._attachIconSpace(this.options.iconPosition)
}}}this._super(av,aw);
if(av==="disabled"){this._toggleClass(null,"ui-state-disabled",aw);
this.element[0].disabled=aw;
if(aw){this.element.blur()
}}},refresh:function(){var av=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");
if(av!==this.options.disabled){this._setOptions({disabled:av})
}this._updateTooltip()
}});
if(ak.uiBackCompat!==false){ak.widget("ui.button",ak.ui.button,{options:{text:true,icons:{primary:null,secondary:null}},_create:function(){if(this.options.showLabel&&!this.options.text){this.options.showLabel=this.options.text
}if(!this.options.showLabel&&this.options.text){this.options.text=this.options.showLabel
}if(!this.options.icon&&(this.options.icons.primary||this.options.icons.secondary)){if(this.options.icons.primary){this.options.icon=this.options.icons.primary
}else{this.options.icon=this.options.icons.secondary;
this.options.iconPosition="end"
}}else{if(this.options.icon){this.options.icons.primary=this.options.icon
}}this._super()
},_setOption:function(av,aw){if(av==="text"){this._super("showLabel",aw);
return
}if(av==="showLabel"){this.options.text=aw
}if(av==="icon"){this.options.icons.primary=aw
}if(av==="icons"){if(aw.primary){this._super("icon",aw.primary);
this._super("iconPosition","beginning")
}else{if(aw.secondary){this._super("icon",aw.secondary);
this._super("iconPosition","end")
}}}this._superApply(arguments)
}});
ak.fn.button=(function(av){return function(){if(!this.length||(this.length&&this[0].tagName!=="INPUT")||(this.length&&this[0].tagName==="INPUT"&&(this.attr("type")!=="checkbox"&&this.attr("type")!=="radio"))){return av.apply(this,arguments)
}if(!ak.ui.checkboxradio){ak.error("Checkboxradio widget missing")
}if(arguments.length===0){return this.checkboxradio({icon:false})
}return this.checkboxradio.apply(this,arguments)
}
})(ak.fn.button);
ak.fn.buttonset=function(){if(!ak.ui.controlgroup){ak.error("Controlgroup widget missing")
}if(arguments[0]==="option"&&arguments[1]==="items"&&arguments[2]){return this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]])
}if(arguments[0]==="option"&&arguments[1]==="items"){return this.controlgroup.apply(this,[arguments[0],"items.button"])
}if(typeof arguments[0]==="object"&&arguments[0].items){arguments[0].items={button:arguments[0].items}
}return this.controlgroup.apply(this,arguments)
}
}var C=ak.ui.button;
/*!
 * jQuery UI Datepicker 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
ak.extend(ak.ui,{datepicker:{version:"1.12.1"}});
var aq;
function af(aw){var av,ax;
while(aw.length&&aw[0]!==document){av=aw.css("position");
if(av==="absolute"||av==="relative"||av==="fixed"){ax=parseInt(aw.css("zIndex"),10);
if(!isNaN(ax)&&ax!==0){return ax
}}aw=aw.parent()
}return 0
}function P(){this._curInst=null;
this._keyEvent=false;
this._disabledInputs=[];
this._datepickerShowing=false;
this._inDialog=false;
this._mainDivId="ui-datepicker-div";
this._inlineClass="ui-datepicker-inline";
this._appendClass="ui-datepicker-append";
this._triggerClass="ui-datepicker-trigger";
this._dialogClass="ui-datepicker-dialog";
this._disableClass="ui-datepicker-disabled";
this._unselectableClass="ui-datepicker-unselectable";
this._currentClass="ui-datepicker-current-day";
this._dayOverClass="ui-datepicker-days-cell-over";
this.regional=[];
this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};
ak.extend(this._defaults,this.regional[""]);
this.regional.en=ak.extend(true,{},this.regional[""]);
this.regional["en-US"]=ak.extend(true,{},this.regional.en);
this.dpDiv=X(ak("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
}ak.extend(P.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(av){F(this._defaults,av||{});
return this
},_attachDatepicker:function(ay,av){var az,ax,aw;
az=ay.nodeName.toLowerCase();
ax=(az==="div"||az==="span");
if(!ay.id){this.uuid+=1;
ay.id="dp"+this.uuid
}aw=this._newInst(ak(ay),ax);
aw.settings=ak.extend({},av||{});
if(az==="input"){this._connectDatepicker(ay,aw)
}else{if(ax){this._inlineDatepicker(ay,aw)
}}},_newInst:function(aw,av){var ax=aw[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");
return{id:ax,input:aw,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:av,dpDiv:(!av?this.dpDiv:X(ak("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))}
},_connectDatepicker:function(ax,aw){var av=ak(ax);
aw.append=ak([]);
aw.trigger=ak([]);
if(av.hasClass(this.markerClassName)){return
}this._attachments(av,aw);
av.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp);
this._autoSize(aw);
ak.data(ax,"datepicker",aw);
if(aw.settings.disabled){this._disableDatepicker(ax)
}},_attachments:function(ax,aA){var aw,az,av,aB=this._get(aA,"appendText"),ay=this._get(aA,"isRTL");
if(aA.append){aA.append.remove()
}if(aB){aA.append=ak("<span class='"+this._appendClass+"'>"+aB+"</span>");
ax[ay?"before":"after"](aA.append)
}ax.off("focus",this._showDatepicker);
if(aA.trigger){aA.trigger.remove()
}aw=this._get(aA,"showOn");
if(aw==="focus"||aw==="both"){ax.on("focus",this._showDatepicker)
}if(aw==="button"||aw==="both"){az=this._get(aA,"buttonText");
av=this._get(aA,"buttonImage");
aA.trigger=ak(this._get(aA,"buttonImageOnly")?ak("<img/>").addClass(this._triggerClass).attr({src:av,alt:az,title:az}):ak("<button type='button'></button>").addClass(this._triggerClass).html(!av?az:ak("<img/>").attr({src:av,alt:az,title:az})));
ax[ay?"before":"after"](aA.trigger);
aA.trigger.on("click",function(){if(ak.datepicker._datepickerShowing&&ak.datepicker._lastInput===ax[0]){ak.datepicker._hideDatepicker()
}else{if(ak.datepicker._datepickerShowing&&ak.datepicker._lastInput!==ax[0]){ak.datepicker._hideDatepicker();
ak.datepicker._showDatepicker(ax[0])
}else{ak.datepicker._showDatepicker(ax[0])
}}return false
})
}},_autoSize:function(aB){if(this._get(aB,"autoSize")&&!aB.inline){var ay,aw,ax,aA,az=new Date(2009,12-1,20),av=this._get(aB,"dateFormat");
if(av.match(/[DM]/)){ay=function(aC){aw=0;
ax=0;
for(aA=0;
aA<aC.length;
aA++){if(aC[aA].length>aw){aw=aC[aA].length;
ax=aA
}}return ax
};
az.setMonth(ay(this._get(aB,(av.match(/MM/)?"monthNames":"monthNamesShort"))));
az.setDate(ay(this._get(aB,(av.match(/DD/)?"dayNames":"dayNamesShort")))+20-az.getDay())
}aB.input.attr("size",this._formatDate(aB,az).length)
}},_inlineDatepicker:function(aw,av){var ax=ak(aw);
if(ax.hasClass(this.markerClassName)){return
}ax.addClass(this.markerClassName).append(av.dpDiv);
ak.data(aw,"datepicker",av);
this._setDate(av,this._getDefaultDate(av),true);
this._updateDatepicker(av);
this._updateAlternate(av);
if(av.settings.disabled){this._disableDatepicker(aw)
}av.dpDiv.css("display","block")
},_dialogDatepicker:function(aC,aw,aA,ax,aB){var av,aF,az,aE,aD,ay=this._dialogInst;
if(!ay){this.uuid+=1;
av="dp"+this.uuid;
this._dialogInput=ak("<input type='text' id='"+av+"' style='position: absolute; top: -100px; width: 0px;'/>");
this._dialogInput.on("keydown",this._doKeyDown);
ak("body").append(this._dialogInput);
ay=this._dialogInst=this._newInst(this._dialogInput,false);
ay.settings={};
ak.data(this._dialogInput[0],"datepicker",ay)
}F(ay.settings,ax||{});
aw=(aw&&aw.constructor===Date?this._formatDate(ay,aw):aw);
this._dialogInput.val(aw);
this._pos=(aB?(aB.length?aB:[aB.pageX,aB.pageY]):null);
if(!this._pos){aF=document.documentElement.clientWidth;
az=document.documentElement.clientHeight;
aE=document.documentElement.scrollLeft||document.body.scrollLeft;
aD=document.documentElement.scrollTop||document.body.scrollTop;
this._pos=[(aF/2)-100+aE,(az/2)-150+aD]
}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");
ay.settings.onSelect=aA;
this._inDialog=true;
this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);
if(ak.blockUI){ak.blockUI(this.dpDiv)
}ak.data(this._dialogInput[0],"datepicker",ay);
return this
},_destroyDatepicker:function(ax){var ay,av=ak(ax),aw=ak.data(ax,"datepicker");
if(!av.hasClass(this.markerClassName)){return
}ay=ax.nodeName.toLowerCase();
ak.removeData(ax,"datepicker");
if(ay==="input"){aw.append.remove();
aw.trigger.remove();
av.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)
}else{if(ay==="div"||ay==="span"){av.removeClass(this.markerClassName).empty()
}}if(aq===aw){aq=null
}},_enableDatepicker:function(ay){var az,ax,av=ak(ay),aw=ak.data(ay,"datepicker");
if(!av.hasClass(this.markerClassName)){return
}az=ay.nodeName.toLowerCase();
if(az==="input"){ay.disabled=false;
aw.trigger.filter("button").each(function(){this.disabled=false
}).end().filter("img").css({opacity:"1.0",cursor:""})
}else{if(az==="div"||az==="span"){ax=av.children("."+this._inlineClass);
ax.children().removeClass("ui-state-disabled");
ax.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false)
}}this._disabledInputs=ak.map(this._disabledInputs,function(aA){return(aA===ay?null:aA)
})
},_disableDatepicker:function(ay){var az,ax,av=ak(ay),aw=ak.data(ay,"datepicker");
if(!av.hasClass(this.markerClassName)){return
}az=ay.nodeName.toLowerCase();
if(az==="input"){ay.disabled=true;
aw.trigger.filter("button").each(function(){this.disabled=true
}).end().filter("img").css({opacity:"0.5",cursor:"default"})
}else{if(az==="div"||az==="span"){ax=av.children("."+this._inlineClass);
ax.children().addClass("ui-state-disabled");
ax.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true)
}}this._disabledInputs=ak.map(this._disabledInputs,function(aA){return(aA===ay?null:aA)
});
this._disabledInputs[this._disabledInputs.length]=ay
},_isDisabledDatepicker:function(aw){if(!aw){return false
}for(var av=0;
av<this._disabledInputs.length;
av++){if(this._disabledInputs[av]===aw){return true
}}return false
},_getInst:function(aw){try{return ak.data(aw,"datepicker")
}catch(av){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(aB,aw,aA){var ax,av,az,aC,ay=this._getInst(aB);
if(arguments.length===2&&typeof aw==="string"){return(aw==="defaults"?ak.extend({},ak.datepicker._defaults):(ay?(aw==="all"?ak.extend({},ay.settings):this._get(ay,aw)):null))
}ax=aw||{};
if(typeof aw==="string"){ax={};
ax[aw]=aA
}if(ay){if(this._curInst===ay){this._hideDatepicker()
}av=this._getDateDatepicker(aB,true);
az=this._getMinMaxDate(ay,"min");
aC=this._getMinMaxDate(ay,"max");
F(ay.settings,ax);
if(az!==null&&ax.dateFormat!==undefined&&ax.minDate===undefined){ay.settings.minDate=this._formatDate(ay,az)
}if(aC!==null&&ax.dateFormat!==undefined&&ax.maxDate===undefined){ay.settings.maxDate=this._formatDate(ay,aC)
}if("disabled" in ax){if(ax.disabled){this._disableDatepicker(aB)
}else{this._enableDatepicker(aB)
}}this._attachments(ak(aB),ay);
this._autoSize(ay);
this._setDate(ay,av);
this._updateAlternate(ay);
this._updateDatepicker(ay)
}},_changeDatepicker:function(ax,av,aw){this._optionDatepicker(ax,av,aw)
},_refreshDatepicker:function(aw){var av=this._getInst(aw);
if(av){this._updateDatepicker(av)
}},_setDateDatepicker:function(ax,av){var aw=this._getInst(ax);
if(aw){this._setDate(aw,av);
this._updateDatepicker(aw);
this._updateAlternate(aw)
}},_getDateDatepicker:function(ax,av){var aw=this._getInst(ax);
if(aw&&!aw.inline){this._setDateFromField(aw,av)
}return(aw?this._getDate(aw):null)
},_doKeyDown:function(ay){var aw,av,aA,az=ak.datepicker._getInst(ay.target),aB=true,ax=az.dpDiv.is(".ui-datepicker-rtl");
az._keyEvent=true;
if(ak.datepicker._datepickerShowing){switch(ay.keyCode){case 9:ak.datepicker._hideDatepicker();
aB=false;
break;
case 13:aA=ak("td."+ak.datepicker._dayOverClass+":not(."+ak.datepicker._currentClass+")",az.dpDiv);
if(aA[0]){ak.datepicker._selectDay(ay.target,az.selectedMonth,az.selectedYear,aA[0])
}aw=ak.datepicker._get(az,"onSelect");
if(aw){av=ak.datepicker._formatDate(az);
aw.apply((az.input?az.input[0]:null),[av,az])
}else{ak.datepicker._hideDatepicker()
}return false;
case 27:ak.datepicker._hideDatepicker();
break;
case 33:ak.datepicker._adjustDate(ay.target,(ay.ctrlKey?-ak.datepicker._get(az,"stepBigMonths"):-ak.datepicker._get(az,"stepMonths")),"M");
break;
case 34:ak.datepicker._adjustDate(ay.target,(ay.ctrlKey?+ak.datepicker._get(az,"stepBigMonths"):+ak.datepicker._get(az,"stepMonths")),"M");
break;
case 35:if(ay.ctrlKey||ay.metaKey){ak.datepicker._clearDate(ay.target)
}aB=ay.ctrlKey||ay.metaKey;
break;
case 36:if(ay.ctrlKey||ay.metaKey){ak.datepicker._gotoToday(ay.target)
}aB=ay.ctrlKey||ay.metaKey;
break;
case 37:if(ay.ctrlKey||ay.metaKey){ak.datepicker._adjustDate(ay.target,(ax?+1:-1),"D")
}aB=ay.ctrlKey||ay.metaKey;
if(ay.originalEvent.altKey){ak.datepicker._adjustDate(ay.target,(ay.ctrlKey?-ak.datepicker._get(az,"stepBigMonths"):-ak.datepicker._get(az,"stepMonths")),"M")
}break;
case 38:if(ay.ctrlKey||ay.metaKey){ak.datepicker._adjustDate(ay.target,-7,"D")
}aB=ay.ctrlKey||ay.metaKey;
break;
case 39:if(ay.ctrlKey||ay.metaKey){ak.datepicker._adjustDate(ay.target,(ax?-1:+1),"D")
}aB=ay.ctrlKey||ay.metaKey;
if(ay.originalEvent.altKey){ak.datepicker._adjustDate(ay.target,(ay.ctrlKey?+ak.datepicker._get(az,"stepBigMonths"):+ak.datepicker._get(az,"stepMonths")),"M")
}break;
case 40:if(ay.ctrlKey||ay.metaKey){ak.datepicker._adjustDate(ay.target,+7,"D")
}aB=ay.ctrlKey||ay.metaKey;
break;
default:aB=false
}}else{if(ay.keyCode===36&&ay.ctrlKey){ak.datepicker._showDatepicker(this)
}else{aB=false
}}if(aB){ay.preventDefault();
ay.stopPropagation()
}},_doKeyPress:function(ax){var aw,av,ay=ak.datepicker._getInst(ax.target);
if(ak.datepicker._get(ay,"constrainInput")){aw=ak.datepicker._possibleChars(ak.datepicker._get(ay,"dateFormat"));
av=String.fromCharCode(ax.charCode==null?ax.keyCode:ax.charCode);
return ax.ctrlKey||ax.metaKey||(av<" "||!aw||aw.indexOf(av)>-1)
}},_doKeyUp:function(ax){var av,ay=ak.datepicker._getInst(ax.target);
if(ay.input.val()!==ay.lastVal){try{av=ak.datepicker.parseDate(ak.datepicker._get(ay,"dateFormat"),(ay.input?ay.input.val():null),ak.datepicker._getFormatConfig(ay));
if(av){ak.datepicker._setDateFromField(ay);
ak.datepicker._updateAlternate(ay);
ak.datepicker._updateDatepicker(ay)
}}catch(aw){}}return true
},_showDatepicker:function(aw){aw=aw.target||aw;
if(aw.nodeName.toLowerCase()!=="input"){aw=ak("input",aw.parentNode)[0]
}if(ak.datepicker._isDisabledDatepicker(aw)||ak.datepicker._lastInput===aw){return
}var ay,aC,ax,aA,aB,av,az;
ay=ak.datepicker._getInst(aw);
if(ak.datepicker._curInst&&ak.datepicker._curInst!==ay){ak.datepicker._curInst.dpDiv.stop(true,true);
if(ay&&ak.datepicker._datepickerShowing){ak.datepicker._hideDatepicker(ak.datepicker._curInst.input[0])
}}aC=ak.datepicker._get(ay,"beforeShow");
ax=aC?aC.apply(aw,[aw,ay]):{};
if(ax===false){return
}F(ay.settings,ax);
ay.lastVal=null;
ak.datepicker._lastInput=aw;
ak.datepicker._setDateFromField(ay);
if(ak.datepicker._inDialog){aw.value=""
}if(!ak.datepicker._pos){ak.datepicker._pos=ak.datepicker._findPos(aw);
ak.datepicker._pos[1]+=aw.offsetHeight
}aA=false;
ak(aw).parents().each(function(){aA|=ak(this).css("position")==="fixed";
return !aA
});
aB={left:ak.datepicker._pos[0],top:ak.datepicker._pos[1]};
ak.datepicker._pos=null;
ay.dpDiv.empty();
ay.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});
ak.datepicker._updateDatepicker(ay);
aB=ak.datepicker._checkOffset(ay,aB,aA);
ay.dpDiv.css({position:(ak.datepicker._inDialog&&ak.blockUI?"static":(aA?"fixed":"absolute")),display:"none",left:aB.left+"px",top:aB.top+"px"});
if(!ay.inline){av=ak.datepicker._get(ay,"showAnim");
az=ak.datepicker._get(ay,"duration");
ay.dpDiv.css("z-index",af(ak(aw))+1);
ak.datepicker._datepickerShowing=true;
if(ak.effects&&ak.effects.effect[av]){ay.dpDiv.show(av,ak.datepicker._get(ay,"showOptions"),az)
}else{ay.dpDiv[av||"show"](av?az:null)
}if(ak.datepicker._shouldFocusInput(ay)){ay.input.trigger("focus")
}ak.datepicker._curInst=ay
}},_updateDatepicker:function(ay){this.maxRows=4;
aq=ay;
ay.dpDiv.empty().append(this._generateHTML(ay));
this._attachHandlers(ay);
var aA,av=this._getNumberOfMonths(ay),az=av[1],ax=17,aw=ay.dpDiv.find("."+this._dayOverClass+" a");
if(aw.length>0){K.apply(aw.get(0))
}ay.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
if(az>1){ay.dpDiv.addClass("ui-datepicker-multi-"+az).css("width",(ax*az)+"em")
}ay.dpDiv[(av[0]!==1||av[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi");
ay.dpDiv[(this._get(ay,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");
if(ay===ak.datepicker._curInst&&ak.datepicker._datepickerShowing&&ak.datepicker._shouldFocusInput(ay)){ay.input.trigger("focus")
}if(ay.yearshtml){aA=ay.yearshtml;
setTimeout(function(){if(aA===ay.yearshtml&&ay.yearshtml){ay.dpDiv.find("select.ui-datepicker-year:first").replaceWith(ay.yearshtml)
}aA=ay.yearshtml=null
},0)
}},_shouldFocusInput:function(av){return av.input&&av.input.is(":visible")&&!av.input.is(":disabled")&&!av.input.is(":focus")
},_checkOffset:function(aA,ay,ax){var az=aA.dpDiv.outerWidth(),aD=aA.dpDiv.outerHeight(),aC=aA.input?aA.input.outerWidth():0,av=aA.input?aA.input.outerHeight():0,aB=document.documentElement.clientWidth+(ax?0:ak(document).scrollLeft()),aw=document.documentElement.clientHeight+(ax?0:ak(document).scrollTop());
ay.left-=(this._get(aA,"isRTL")?(az-aC):0);
ay.left-=(ax&&ay.left===aA.input.offset().left)?ak(document).scrollLeft():0;
ay.top-=(ax&&ay.top===(aA.input.offset().top+av))?ak(document).scrollTop():0;
ay.left-=Math.min(ay.left,(ay.left+az>aB&&aB>az)?Math.abs(ay.left+az-aB):0);
ay.top-=Math.min(ay.top,(ay.top+aD>aw&&aw>aD)?Math.abs(aD+av):0);
return ay
},_findPos:function(ay){var av,ax=this._getInst(ay),aw=this._get(ax,"isRTL");
while(ay&&(ay.type==="hidden"||ay.nodeType!==1||ak.expr.filters.hidden(ay))){ay=ay[aw?"previousSibling":"nextSibling"]
}av=ak(ay).offset();
return[av.left,av.top]
},_hideDatepicker:function(ax){var aw,aA,az,av,ay=this._curInst;
if(!ay||(ax&&ay!==ak.data(ax,"datepicker"))){return
}if(this._datepickerShowing){aw=this._get(ay,"showAnim");
aA=this._get(ay,"duration");
az=function(){ak.datepicker._tidyDialog(ay)
};
if(ak.effects&&(ak.effects.effect[aw]||ak.effects[aw])){ay.dpDiv.hide(aw,ak.datepicker._get(ay,"showOptions"),aA,az)
}else{ay.dpDiv[(aw==="slideDown"?"slideUp":(aw==="fadeIn"?"fadeOut":"hide"))]((aw?aA:null),az)
}if(!aw){az()
}this._datepickerShowing=false;
av=this._get(ay,"onClose");
if(av){av.apply((ay.input?ay.input[0]:null),[(ay.input?ay.input.val():""),ay])
}this._lastInput=null;
if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});
if(ak.blockUI){ak.unblockUI();
ak("body").append(this.dpDiv)
}}this._inDialog=false
}},_tidyDialog:function(av){av.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
},_checkExternalClick:function(aw){if(!ak.datepicker._curInst){return
}var av=ak(aw.target),ax=ak.datepicker._getInst(av[0]);
if(((av[0].id!==ak.datepicker._mainDivId&&av.parents("#"+ak.datepicker._mainDivId).length===0&&!av.hasClass(ak.datepicker.markerClassName)&&!av.closest("."+ak.datepicker._triggerClass).length&&ak.datepicker._datepickerShowing&&!(ak.datepicker._inDialog&&ak.blockUI)))||(av.hasClass(ak.datepicker.markerClassName)&&ak.datepicker._curInst!==ax)){ak.datepicker._hideDatepicker()
}},_adjustDate:function(az,ay,ax){var aw=ak(az),av=this._getInst(aw[0]);
if(this._isDisabledDatepicker(aw[0])){return
}this._adjustInstDate(av,ay+(ax==="M"?this._get(av,"showCurrentAtPos"):0),ax);
this._updateDatepicker(av)
},_gotoToday:function(ay){var av,ax=ak(ay),aw=this._getInst(ax[0]);
if(this._get(aw,"gotoCurrent")&&aw.currentDay){aw.selectedDay=aw.currentDay;
aw.drawMonth=aw.selectedMonth=aw.currentMonth;
aw.drawYear=aw.selectedYear=aw.currentYear
}else{av=new Date();
aw.selectedDay=av.getDate();
aw.drawMonth=aw.selectedMonth=av.getMonth();
aw.drawYear=aw.selectedYear=av.getFullYear()
}this._notifyChange(aw);
this._adjustDate(ax)
},_selectMonthYear:function(az,av,ay){var ax=ak(az),aw=this._getInst(ax[0]);
aw["selected"+(ay==="M"?"Month":"Year")]=aw["draw"+(ay==="M"?"Month":"Year")]=parseInt(av.options[av.selectedIndex].value,10);
this._notifyChange(aw);
this._adjustDate(ax)
},_selectDay:function(aA,ay,av,az){var aw,ax=ak(aA);
if(ak(az).hasClass(this._unselectableClass)||this._isDisabledDatepicker(ax[0])){return
}aw=this._getInst(ax[0]);
aw.selectedDay=aw.currentDay=ak("a",az).html();
aw.selectedMonth=aw.currentMonth=ay;
aw.selectedYear=aw.currentYear=av;
this._selectDate(aA,this._formatDate(aw,aw.currentDay,aw.currentMonth,aw.currentYear))
},_clearDate:function(aw){var av=ak(aw);
this._selectDate(av,"")
},_selectDate:function(az,av){var aw,ay=ak(az),ax=this._getInst(ay[0]);
av=(av!=null?av:this._formatDate(ax));
if(ax.input){ax.input.val(av)
}this._updateAlternate(ax);
aw=this._get(ax,"onSelect");
if(aw){aw.apply((ax.input?ax.input[0]:null),[av,ax])
}else{if(ax.input){ax.input.trigger("change")
}}if(ax.inline){this._updateDatepicker(ax)
}else{this._hideDatepicker();
this._lastInput=ax.input[0];
if(typeof(ax.input[0])!=="object"){ax.input.trigger("focus")
}this._lastInput=null
}},_updateAlternate:function(az){var ay,ax,av,aw=this._get(az,"altField");
if(aw){ay=this._get(az,"altFormat")||this._get(az,"dateFormat");
ax=this._getDate(az);
av=this.formatDate(ay,ax,this._getFormatConfig(az));
ak(aw).val(av)
}},noWeekends:function(aw){var av=aw.getDay();
return[(av>0&&av<6),""]
},iso8601Week:function(av){var aw,ax=new Date(av.getTime());
ax.setDate(ax.getDate()+4-(ax.getDay()||7));
aw=ax.getTime();
ax.setMonth(0);
ax.setDate(1);
return Math.floor(Math.round((aw-ax)/86400000)/7)+1
},parseDate:function(aL,aG,aN){if(aL==null||aG==null){throw"Invalid arguments"
}aG=(typeof aG==="object"?aG.toString():aG+"");
if(aG===""){return null
}var ay,aI,aw,aM=0,aB=(aN?aN.shortYearCutoff:null)||this._defaults.shortYearCutoff,ax=(typeof aB!=="string"?aB:new Date().getFullYear()%100+parseInt(aB,10)),aE=(aN?aN.dayNamesShort:null)||this._defaults.dayNamesShort,aP=(aN?aN.dayNames:null)||this._defaults.dayNames,av=(aN?aN.monthNamesShort:null)||this._defaults.monthNamesShort,az=(aN?aN.monthNames:null)||this._defaults.monthNames,aA=-1,aQ=-1,aK=-1,aD=-1,aJ=false,aO,aF=function(aS){var aT=(ay+1<aL.length&&aL.charAt(ay+1)===aS);
if(aT){ay++
}return aT
},aR=function(aU){var aS=aF(aU),aV=(aU==="@"?14:(aU==="!"?20:(aU==="y"&&aS?4:(aU==="o"?3:2)))),aX=(aU==="y"?aV:1),aW=new RegExp("^\\d{"+aX+","+aV+"}"),aT=aG.substring(aM).match(aW);
if(!aT){throw"Missing number at position "+aM
}aM+=aT[0].length;
return parseInt(aT[0],10)
},aC=function(aT,aU,aW){var aS=-1,aV=ak.map(aF(aT)?aW:aU,function(aY,aX){return[[aX,aY]]
}).sort(function(aY,aX){return -(aY[1].length-aX[1].length)
});
ak.each(aV,function(aY,aZ){var aX=aZ[1];
if(aG.substr(aM,aX.length).toLowerCase()===aX.toLowerCase()){aS=aZ[0];
aM+=aX.length;
return false
}});
if(aS!==-1){return aS+1
}else{throw"Unknown name at position "+aM
}},aH=function(){if(aG.charAt(aM)!==aL.charAt(ay)){throw"Unexpected literal at position "+aM
}aM++
};
for(ay=0;
ay<aL.length;
ay++){if(aJ){if(aL.charAt(ay)==="'"&&!aF("'")){aJ=false
}else{aH()
}}else{switch(aL.charAt(ay)){case"d":aK=aR("d");
break;
case"D":aC("D",aE,aP);
break;
case"o":aD=aR("o");
break;
case"m":aQ=aR("m");
break;
case"M":aQ=aC("M",av,az);
break;
case"y":aA=aR("y");
break;
case"@":aO=new Date(aR("@"));
aA=aO.getFullYear();
aQ=aO.getMonth()+1;
aK=aO.getDate();
break;
case"!":aO=new Date((aR("!")-this._ticksTo1970)/10000);
aA=aO.getFullYear();
aQ=aO.getMonth()+1;
aK=aO.getDate();
break;
case"'":if(aF("'")){aH()
}else{aJ=true
}break;
default:aH()
}}}if(aM<aG.length){aw=aG.substr(aM);
if(!/^\s+/.test(aw)){throw"Extra/unparsed characters found in date: "+aw
}}if(aA===-1){aA=new Date().getFullYear()
}else{if(aA<100){aA+=new Date().getFullYear()-new Date().getFullYear()%100+(aA<=ax?0:-100)
}}if(aD>-1){aQ=1;
aK=aD;
do{aI=this._getDaysInMonth(aA,aQ-1);
if(aK<=aI){break
}aQ++;
aK-=aI
}while(true)
}aO=this._daylightSavingAdjust(new Date(aA,aQ-1,aK));
if(aO.getFullYear()!==aA||aO.getMonth()+1!==aQ||aO.getDate()!==aK){throw"Invalid date"
}return aO
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(aE,ay,az){if(!ay){return""
}var aG,aH=(az?az.dayNamesShort:null)||this._defaults.dayNamesShort,aw=(az?az.dayNames:null)||this._defaults.dayNames,aC=(az?az.monthNamesShort:null)||this._defaults.monthNamesShort,aA=(az?az.monthNames:null)||this._defaults.monthNames,aF=function(aI){var aJ=(aG+1<aE.length&&aE.charAt(aG+1)===aI);
if(aJ){aG++
}return aJ
},av=function(aK,aL,aI){var aJ=""+aL;
if(aF(aK)){while(aJ.length<aI){aJ="0"+aJ
}}return aJ
},aB=function(aI,aK,aJ,aL){return(aF(aI)?aL[aK]:aJ[aK])
},ax="",aD=false;
if(ay){for(aG=0;
aG<aE.length;
aG++){if(aD){if(aE.charAt(aG)==="'"&&!aF("'")){aD=false
}else{ax+=aE.charAt(aG)
}}else{switch(aE.charAt(aG)){case"d":ax+=av("d",ay.getDate(),2);
break;
case"D":ax+=aB("D",ay.getDay(),aH,aw);
break;
case"o":ax+=av("o",Math.round((new Date(ay.getFullYear(),ay.getMonth(),ay.getDate()).getTime()-new Date(ay.getFullYear(),0,0).getTime())/86400000),3);
break;
case"m":ax+=av("m",ay.getMonth()+1,2);
break;
case"M":ax+=aB("M",ay.getMonth(),aC,aA);
break;
case"y":ax+=(aF("y")?ay.getFullYear():(ay.getFullYear()%100<10?"0":"")+ay.getFullYear()%100);
break;
case"@":ax+=ay.getTime();
break;
case"!":ax+=ay.getTime()*10000+this._ticksTo1970;
break;
case"'":if(aF("'")){ax+="'"
}else{aD=true
}break;
default:ax+=aE.charAt(aG)
}}}}return ax
},_possibleChars:function(az){var ay,ax="",aw=false,av=function(aA){var aB=(ay+1<az.length&&az.charAt(ay+1)===aA);
if(aB){ay++
}return aB
};
for(ay=0;
ay<az.length;
ay++){if(aw){if(az.charAt(ay)==="'"&&!av("'")){aw=false
}else{ax+=az.charAt(ay)
}}else{switch(az.charAt(ay)){case"d":case"m":case"y":case"@":ax+="0123456789";
break;
case"D":case"M":return null;
case"'":if(av("'")){ax+="'"
}else{aw=true
}break;
default:ax+=az.charAt(ay)
}}}return ax
},_get:function(aw,av){return aw.settings[av]!==undefined?aw.settings[av]:this._defaults[av]
},_setDateFromField:function(aA,ax){if(aA.input.val()===aA.lastVal){return
}var av=this._get(aA,"dateFormat"),aC=aA.lastVal=aA.input?aA.input.val():null,aB=this._getDefaultDate(aA),aw=aB,ay=this._getFormatConfig(aA);
try{aw=this.parseDate(av,aC,ay)||aB
}catch(az){aC=(ax?"":aC)
}aA.selectedDay=aw.getDate();
aA.drawMonth=aA.selectedMonth=aw.getMonth();
aA.drawYear=aA.selectedYear=aw.getFullYear();
aA.currentDay=(aC?aw.getDate():0);
aA.currentMonth=(aC?aw.getMonth():0);
aA.currentYear=(aC?aw.getFullYear():0);
this._adjustInstDate(aA)
},_getDefaultDate:function(av){return this._restrictMinMax(av,this._determineDate(av,this._get(av,"defaultDate"),new Date()))
},_determineDate:function(az,aw,aA){var ay=function(aC){var aB=new Date();
aB.setDate(aB.getDate()+aC);
return aB
},ax=function(aI){try{return ak.datepicker.parseDate(ak.datepicker._get(az,"dateFormat"),aI,ak.datepicker._getFormatConfig(az))
}catch(aH){}var aC=(aI.toLowerCase().match(/^c/)?ak.datepicker._getDate(az):null)||new Date(),aD=aC.getFullYear(),aG=aC.getMonth(),aB=aC.getDate(),aF=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,aE=aF.exec(aI);
while(aE){switch(aE[2]||"d"){case"d":case"D":aB+=parseInt(aE[1],10);
break;
case"w":case"W":aB+=parseInt(aE[1],10)*7;
break;
case"m":case"M":aG+=parseInt(aE[1],10);
aB=Math.min(aB,ak.datepicker._getDaysInMonth(aD,aG));
break;
case"y":case"Y":aD+=parseInt(aE[1],10);
aB=Math.min(aB,ak.datepicker._getDaysInMonth(aD,aG));
break
}aE=aF.exec(aI)
}return new Date(aD,aG,aB)
},av=(aw==null||aw===""?aA:(typeof aw==="string"?ax(aw):(typeof aw==="number"?(isNaN(aw)?aA:ay(aw)):new Date(aw.getTime()))));
av=(av&&av.toString()==="Invalid Date"?aA:av);
if(av){av.setHours(0);
av.setMinutes(0);
av.setSeconds(0);
av.setMilliseconds(0)
}return this._daylightSavingAdjust(av)
},_daylightSavingAdjust:function(av){if(!av){return null
}av.setHours(av.getHours()>12?av.getHours()+2:0);
return av
},_setDate:function(aB,ay,aA){var av=!ay,ax=aB.selectedMonth,az=aB.selectedYear,aw=this._restrictMinMax(aB,this._determineDate(aB,ay,new Date()));
aB.selectedDay=aB.currentDay=aw.getDate();
aB.drawMonth=aB.selectedMonth=aB.currentMonth=aw.getMonth();
aB.drawYear=aB.selectedYear=aB.currentYear=aw.getFullYear();
if((ax!==aB.selectedMonth||az!==aB.selectedYear)&&!aA){this._notifyChange(aB)
}this._adjustInstDate(aB);
if(aB.input){aB.input.val(av?"":this._formatDate(aB))
}},_getDate:function(aw){var av=(!aw.currentYear||(aw.input&&aw.input.val()==="")?null:this._daylightSavingAdjust(new Date(aw.currentYear,aw.currentMonth,aw.currentDay)));
return av
},_attachHandlers:function(aw){var av=this._get(aw,"stepMonths"),ax="#"+aw.id.replace(/\\\\/g,"\\");
aw.dpDiv.find("[data-handler]").map(function(){var ay={prev:function(){ak.datepicker._adjustDate(ax,-av,"M")
},next:function(){ak.datepicker._adjustDate(ax,+av,"M")
},hide:function(){ak.datepicker._hideDatepicker()
},today:function(){ak.datepicker._gotoToday(ax)
},selectDay:function(){ak.datepicker._selectDay(ax,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);
return false
},selectMonth:function(){ak.datepicker._selectMonthYear(ax,this,"M");
return false
},selectYear:function(){ak.datepicker._selectMonthYear(ax,this,"Y");
return false
}};
ak(this).on(this.getAttribute("data-event"),ay[this.getAttribute("data-handler")])
})
},_generateHTML:function(bb){var aO,aN,a6,aY,az,bf,a9,a2,bi,aW,bm,aG,aI,aH,aw,be,aE,aR,bh,a4,bn,aQ,aV,aF,aA,a7,a0,a3,a1,aD,aT,aJ,ba,bd,ay,bg,bk,aZ,aK,bc=new Date(),aP=this._daylightSavingAdjust(new Date(bc.getFullYear(),bc.getMonth(),bc.getDate())),bj=this._get(bb,"isRTL"),bl=this._get(bb,"showButtonPanel"),a5=this._get(bb,"hideIfNoPrevNext"),aU=this._get(bb,"navigationAsDateFormat"),aL=this._getNumberOfMonths(bb),aC=this._get(bb,"showCurrentAtPos"),aX=this._get(bb,"stepMonths"),aS=(aL[0]!==1||aL[1]!==1),ax=this._daylightSavingAdjust((!bb.currentDay?new Date(9999,9,9):new Date(bb.currentYear,bb.currentMonth,bb.currentDay))),aB=this._getMinMaxDate(bb,"min"),aM=this._getMinMaxDate(bb,"max"),av=bb.drawMonth-aC,a8=bb.drawYear;
if(av<0){av+=12;
a8--
}if(aM){aO=this._daylightSavingAdjust(new Date(aM.getFullYear(),aM.getMonth()-(aL[0]*aL[1])+1,aM.getDate()));
aO=(aB&&aO<aB?aB:aO);
while(this._daylightSavingAdjust(new Date(a8,av,1))>aO){av--;
if(av<0){av=11;
a8--
}}}bb.drawMonth=av;
bb.drawYear=a8;
aN=this._get(bb,"prevText");
aN=(!aU?aN:this.formatDate(aN,this._daylightSavingAdjust(new Date(a8,av-aX,1)),this._getFormatConfig(bb)));
a6=(this._canAdjustMonth(bb,-1,a8,av)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+aN+"'><span class='ui-icon ui-icon-circle-triangle-"+(bj?"e":"w")+"'>"+aN+"</span></a>":(a5?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+aN+"'><span class='ui-icon ui-icon-circle-triangle-"+(bj?"e":"w")+"'>"+aN+"</span></a>"));
aY=this._get(bb,"nextText");
aY=(!aU?aY:this.formatDate(aY,this._daylightSavingAdjust(new Date(a8,av+aX,1)),this._getFormatConfig(bb)));
az=(this._canAdjustMonth(bb,+1,a8,av)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+aY+"'><span class='ui-icon ui-icon-circle-triangle-"+(bj?"w":"e")+"'>"+aY+"</span></a>":(a5?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+aY+"'><span class='ui-icon ui-icon-circle-triangle-"+(bj?"w":"e")+"'>"+aY+"</span></a>"));
bf=this._get(bb,"currentText");
a9=(this._get(bb,"gotoCurrent")&&bb.currentDay?ax:aP);
bf=(!aU?bf:this.formatDate(bf,a9,this._getFormatConfig(bb)));
a2=(!bb.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(bb,"closeText")+"</button>":"");
bi=(bl)?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(bj?a2:"")+(this._isInRange(bb,a9)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+bf+"</button>":"")+(bj?"":a2)+"</div>":"";
aW=parseInt(this._get(bb,"firstDay"),10);
aW=(isNaN(aW)?0:aW);
bm=this._get(bb,"showWeek");
aG=this._get(bb,"dayNames");
aI=this._get(bb,"dayNamesMin");
aH=this._get(bb,"monthNames");
aw=this._get(bb,"monthNamesShort");
be=this._get(bb,"beforeShowDay");
aE=this._get(bb,"showOtherMonths");
aR=this._get(bb,"selectOtherMonths");
bh=this._getDefaultDate(bb);
a4="";
for(aQ=0;
aQ<aL[0];
aQ++){aV="";
this.maxRows=4;
for(aF=0;
aF<aL[1];
aF++){aA=this._daylightSavingAdjust(new Date(a8,av,bb.selectedDay));
a7=" ui-corner-all";
a0="";
if(aS){a0+="<div class='ui-datepicker-group";
if(aL[1]>1){switch(aF){case 0:a0+=" ui-datepicker-group-first";
a7=" ui-corner-"+(bj?"right":"left");
break;
case aL[1]-1:a0+=" ui-datepicker-group-last";
a7=" ui-corner-"+(bj?"left":"right");
break;
default:a0+=" ui-datepicker-group-middle";
a7="";
break
}}a0+="'>"
}a0+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+a7+"'>"+(/all|left/.test(a7)&&aQ===0?(bj?az:a6):"")+(/all|right/.test(a7)&&aQ===0?(bj?a6:az):"")+this._generateMonthYearHeader(bb,av,a8,aB,aM,aQ>0||aF>0,aH,aw)+"</div><table class='ui-datepicker-calendar'><thead><tr>";
a3=(bm?"<th class='ui-datepicker-week-col'>"+this._get(bb,"weekHeader")+"</th>":"");
for(bn=0;
bn<7;
bn++){a1=(bn+aW)%7;
a3+="<th scope='col'"+((bn+aW+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+aG[a1]+"'>"+aI[a1]+"</span></th>"
}a0+=a3+"</tr></thead><tbody>";
aD=this._getDaysInMonth(a8,av);
if(a8===bb.selectedYear&&av===bb.selectedMonth){bb.selectedDay=Math.min(bb.selectedDay,aD)
}aT=(this._getFirstDayOfMonth(a8,av)-aW+7)%7;
aJ=Math.ceil((aT+aD)/7);
ba=(aS?this.maxRows>aJ?this.maxRows:aJ:aJ);
this.maxRows=ba;
bd=this._daylightSavingAdjust(new Date(a8,av,1-aT));
for(ay=0;
ay<ba;
ay++){a0+="<tr>";
bg=(!bm?"":"<td class='ui-datepicker-week-col'>"+this._get(bb,"calculateWeek")(bd)+"</td>");
for(bn=0;
bn<7;
bn++){bk=(be?be.apply((bb.input?bb.input[0]:null),[bd]):[true,""]);
aZ=(bd.getMonth()!==av);
aK=(aZ&&!aR)||!bk[0]||(aB&&bd<aB)||(aM&&bd>aM);
bg+="<td class='"+((bn+aW+6)%7>=5?" ui-datepicker-week-end":"")+(aZ?" ui-datepicker-other-month":"")+((bd.getTime()===aA.getTime()&&av===bb.selectedMonth&&bb._keyEvent)||(bh.getTime()===bd.getTime()&&bh.getTime()===aA.getTime())?" "+this._dayOverClass:"")+(aK?" "+this._unselectableClass+" ui-state-disabled":"")+(aZ&&!aE?"":" "+bk[1]+(bd.getTime()===ax.getTime()?" "+this._currentClass:"")+(bd.getTime()===aP.getTime()?" ui-datepicker-today":""))+"'"+((!aZ||aE)&&bk[2]?" title='"+bk[2].replace(/'/g,"&#39;")+"'":"")+(aK?"":" data-handler='selectDay' data-event='click' data-month='"+bd.getMonth()+"' data-year='"+bd.getFullYear()+"'")+">"+(aZ&&!aE?"&#xa0;":(aK?"<span class='ui-state-default'>"+bd.getDate()+"</span>":"<a class='ui-state-default"+(bd.getTime()===aP.getTime()?" ui-state-highlight":"")+(bd.getTime()===ax.getTime()?" ui-state-active":"")+(aZ?" ui-priority-secondary":"")+"' href='#'>"+bd.getDate()+"</a>"))+"</td>";
bd.setDate(bd.getDate()+1);
bd=this._daylightSavingAdjust(bd)
}a0+=bg+"</tr>"
}av++;
if(av>11){av=0;
a8++
}a0+="</tbody></table>"+(aS?"</div>"+((aL[0]>0&&aF===aL[1]-1)?"<div class='ui-datepicker-row-break'></div>":""):"");
aV+=a0
}a4+=aV
}a4+=bi;
bb._keyEvent=false;
return a4
},_generateMonthYearHeader:function(az,ax,aH,aB,aF,aI,aD,av){var aM,aw,aN,aK,aA,aJ,aG,aC,ay=this._get(az,"changeMonth"),aO=this._get(az,"changeYear"),aP=this._get(az,"showMonthAfterYear"),aE="<div class='ui-datepicker-title'>",aL="";
if(aI||!ay){aL+="<span class='ui-datepicker-month'>"+aD[ax]+"</span>"
}else{aM=(aB&&aB.getFullYear()===aH);
aw=(aF&&aF.getFullYear()===aH);
aL+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
for(aN=0;
aN<12;
aN++){if((!aM||aN>=aB.getMonth())&&(!aw||aN<=aF.getMonth())){aL+="<option value='"+aN+"'"+(aN===ax?" selected='selected'":"")+">"+av[aN]+"</option>"
}}aL+="</select>"
}if(!aP){aE+=aL+(aI||!(ay&&aO)?"&#xa0;":"")
}if(!az.yearshtml){az.yearshtml="";
if(aI||!aO){aE+="<span class='ui-datepicker-year'>"+aH+"</span>"
}else{aK=this._get(az,"yearRange").split(":");
aA=new Date().getFullYear();
aJ=function(aR){var aQ=(aR.match(/c[+\-].*/)?aH+parseInt(aR.substring(1),10):(aR.match(/[+\-].*/)?aA+parseInt(aR,10):parseInt(aR,10)));
return(isNaN(aQ)?aA:aQ)
};
aG=aJ(aK[0]);
aC=Math.max(aG,aJ(aK[1]||""));
aG=(aB?Math.max(aG,aB.getFullYear()):aG);
aC=(aF?Math.min(aC,aF.getFullYear()):aC);
az.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
for(;
aG<=aC;
aG++){az.yearshtml+="<option value='"+aG+"'"+(aG===aH?" selected='selected'":"")+">"+aG+"</option>"
}az.yearshtml+="</select>";
aE+=az.yearshtml;
az.yearshtml=null
}}aE+=this._get(az,"yearSuffix");
if(aP){aE+=(aI||!(ay&&aO)?"&#xa0;":"")+aL
}aE+="</div>";
return aE
},_adjustInstDate:function(ay,aB,aA){var ax=ay.selectedYear+(aA==="Y"?aB:0),az=ay.selectedMonth+(aA==="M"?aB:0),av=Math.min(ay.selectedDay,this._getDaysInMonth(ax,az))+(aA==="D"?aB:0),aw=this._restrictMinMax(ay,this._daylightSavingAdjust(new Date(ax,az,av)));
ay.selectedDay=aw.getDate();
ay.drawMonth=ay.selectedMonth=aw.getMonth();
ay.drawYear=ay.selectedYear=aw.getFullYear();
if(aA==="M"||aA==="Y"){this._notifyChange(ay)
}},_restrictMinMax:function(ay,aw){var ax=this._getMinMaxDate(ay,"min"),az=this._getMinMaxDate(ay,"max"),av=(ax&&aw<ax?ax:aw);
return(az&&av>az?az:av)
},_notifyChange:function(aw){var av=this._get(aw,"onChangeMonthYear");
if(av){av.apply((aw.input?aw.input[0]:null),[aw.selectedYear,aw.selectedMonth+1,aw])
}},_getNumberOfMonths:function(aw){var av=this._get(aw,"numberOfMonths");
return(av==null?[1,1]:(typeof av==="number"?[1,av]:av))
},_getMinMaxDate:function(aw,av){return this._determineDate(aw,this._get(aw,av+"Date"),null)
},_getDaysInMonth:function(av,aw){return 32-this._daylightSavingAdjust(new Date(av,aw,32)).getDate()
},_getFirstDayOfMonth:function(av,aw){return new Date(av,aw,1).getDay()
},_canAdjustMonth:function(ay,aA,ax,az){var av=this._getNumberOfMonths(ay),aw=this._daylightSavingAdjust(new Date(ax,az+(aA<0?aA:av[0]*av[1]),1));
if(aA<0){aw.setDate(this._getDaysInMonth(aw.getFullYear(),aw.getMonth()))
}return this._isInRange(ay,aw)
},_isInRange:function(az,ax){var aw,aC,ay=this._getMinMaxDate(az,"min"),av=this._getMinMaxDate(az,"max"),aD=null,aA=null,aB=this._get(az,"yearRange");
if(aB){aw=aB.split(":");
aC=new Date().getFullYear();
aD=parseInt(aw[0],10);
aA=parseInt(aw[1],10);
if(aw[0].match(/[+\-].*/)){aD+=aC
}if(aw[1].match(/[+\-].*/)){aA+=aC
}}return((!ay||ax.getTime()>=ay.getTime())&&(!av||ax.getTime()<=av.getTime())&&(!aD||ax.getFullYear()>=aD)&&(!aA||ax.getFullYear()<=aA))
},_getFormatConfig:function(av){var aw=this._get(av,"shortYearCutoff");
aw=(typeof aw!=="string"?aw:new Date().getFullYear()%100+parseInt(aw,10));
return{shortYearCutoff:aw,dayNamesShort:this._get(av,"dayNamesShort"),dayNames:this._get(av,"dayNames"),monthNamesShort:this._get(av,"monthNamesShort"),monthNames:this._get(av,"monthNames")}
},_formatDate:function(ay,av,az,ax){if(!av){ay.currentDay=ay.selectedDay;
ay.currentMonth=ay.selectedMonth;
ay.currentYear=ay.selectedYear
}var aw=(av?(typeof av==="object"?av:this._daylightSavingAdjust(new Date(ax,az,av))):this._daylightSavingAdjust(new Date(ay.currentYear,ay.currentMonth,ay.currentDay)));
return this.formatDate(this._get(ay,"dateFormat"),aw,this._getFormatConfig(ay))
}});
function X(aw){var av="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return aw.on("mouseout",av,function(){ak(this).removeClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!==-1){ak(this).removeClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!==-1){ak(this).removeClass("ui-datepicker-next-hover")
}}).on("mouseover",av,K)
}function K(){if(!ak.datepicker._isDisabledDatepicker(aq.inline?aq.dpDiv.parent()[0]:aq.input[0])){ak(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
ak(this).addClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!==-1){ak(this).addClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!==-1){ak(this).addClass("ui-datepicker-next-hover")
}}}function F(ax,aw){ak.extend(ax,aw);
for(var av in aw){if(aw[av]==null){ax[av]=aw[av]
}}return ax
}ak.fn.datepicker=function(aw){if(!this.length){return this
}if(!ak.datepicker.initialized){ak(document).on("mousedown",ak.datepicker._checkExternalClick);
ak.datepicker.initialized=true
}if(ak("#"+ak.datepicker._mainDivId).length===0){ak("body").append(ak.datepicker.dpDiv)
}var av=Array.prototype.slice.call(arguments,1);
if(typeof aw==="string"&&(aw==="isDisabled"||aw==="getDate"||aw==="widget")){return ak.datepicker["_"+aw+"Datepicker"].apply(ak.datepicker,[this[0]].concat(av))
}if(aw==="option"&&arguments.length===2&&typeof arguments[1]==="string"){return ak.datepicker["_"+aw+"Datepicker"].apply(ak.datepicker,[this[0]].concat(av))
}return this.each(function(){typeof aw==="string"?ak.datepicker["_"+aw+"Datepicker"].apply(ak.datepicker,[this].concat(av)):ak.datepicker._attachDatepicker(this,aw)
})
};
ak.datepicker=new P();
ak.datepicker.initialized=false;
ak.datepicker.uuid=new Date().getTime();
ak.datepicker.version="1.12.1";
var k=ak.datepicker;
var L=ak.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
/*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var ab=false;
ak(document).on("mouseup",function(){ab=false
});
var a=ak.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var av=this;
this.element.on("mousedown."+this.widgetName,function(aw){return av._mouseDown(aw)
}).on("click."+this.widgetName,function(aw){if(true===ak.data(aw.target,av.widgetName+".preventClickEvent")){ak.removeData(aw.target,av.widgetName+".preventClickEvent");
aw.stopImmediatePropagation();
return false
}});
this.started=false
},_mouseDestroy:function(){this.element.off("."+this.widgetName);
if(this._mouseMoveDelegate){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)
}},_mouseDown:function(ax){if(ab){return
}this._mouseMoved=false;
(this._mouseStarted&&this._mouseUp(ax));
this._mouseDownEvent=ax;
var aw=this,ay=(ax.which===1),av=(typeof this.options.cancel==="string"&&ax.target.nodeName?ak(ax.target).closest(this.options.cancel).length:false);
if(!ay||av||!this._mouseCapture(ax)){return true
}this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){aw.mouseDelayMet=true
},this.options.delay)
}if(this._mouseDistanceMet(ax)&&this._mouseDelayMet(ax)){this._mouseStarted=(this._mouseStart(ax)!==false);
if(!this._mouseStarted){ax.preventDefault();
return true
}}if(true===ak.data(ax.target,this.widgetName+".preventClickEvent")){ak.removeData(ax.target,this.widgetName+".preventClickEvent")
}this._mouseMoveDelegate=function(az){return aw._mouseMove(az)
};
this._mouseUpDelegate=function(az){return aw._mouseUp(az)
};
this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate);
ax.preventDefault();
ab=true;
return true
},_mouseMove:function(av){if(this._mouseMoved){if(ak.ui.ie&&(!document.documentMode||document.documentMode<9)&&!av.button){return this._mouseUp(av)
}else{if(!av.which){if(av.originalEvent.altKey||av.originalEvent.ctrlKey||av.originalEvent.metaKey||av.originalEvent.shiftKey){this.ignoreMissingWhich=true
}else{if(!this.ignoreMissingWhich){return this._mouseUp(av)
}}}}}if(av.which||av.button){this._mouseMoved=true
}if(this._mouseStarted){this._mouseDrag(av);
return av.preventDefault()
}if(this._mouseDistanceMet(av)&&this._mouseDelayMet(av)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,av)!==false);
(this._mouseStarted?this._mouseDrag(av):this._mouseUp(av))
}return !this._mouseStarted
},_mouseUp:function(av){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;
if(av.target===this._mouseDownEvent.target){ak.data(av.target,this.widgetName+".preventClickEvent",true)
}this._mouseStop(av)
}if(this._mouseDelayTimer){clearTimeout(this._mouseDelayTimer);
delete this._mouseDelayTimer
}this.ignoreMissingWhich=false;
ab=false;
av.preventDefault()
},_mouseDistanceMet:function(av){return(Math.max(Math.abs(this._mouseDownEvent.pageX-av.pageX),Math.abs(this._mouseDownEvent.pageY-av.pageY))>=this.options.distance)
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true
}});
var G=ak.ui.plugin={add:function(aw,ax,az){var av,ay=ak.ui[aw].prototype;
for(av in az){ay.plugins[av]=ay.plugins[av]||[];
ay.plugins[av].push([ax,az[av]])
}},call:function(av,ay,ax,aw){var az,aA=av.plugins[ay];
if(!aA){return
}if(!aw&&(!av.element[0].parentNode||av.element[0].parentNode.nodeType===11)){return
}for(az=0;
az<aA.length;
az++){if(av.options[aA[az][0]]){aA[az][1].apply(av.element,ax)
}}}};
var c=ak.ui.safeBlur=function(av){if(av&&av.nodeName.toLowerCase()!=="body"){ak(av).trigger("blur")
}};
/*!
 * jQuery UI Draggable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
ak.widget("ui.draggable",ak.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"){this._setPositionRelative()
}if(this.options.addClasses){this._addClass("ui-draggable")
}this._setHandleClassName();
this._mouseInit()
},_setOption:function(av,aw){this._super(av,aw);
if(av==="handle"){this._removeHandleClassName();
this._setHandleClassName()
}},_destroy:function(){if((this.helper||this.element).is(".ui-draggable-dragging")){this.destroyOnClear=true;
return
}this._removeHandleClassName();
this._mouseDestroy()
},_mouseCapture:function(av){var aw=this.options;
if(this.helper||aw.disabled||ak(av.target).closest(".ui-resizable-handle").length>0){return false
}this.handle=this._getHandle(av);
if(!this.handle){return false
}this._blurActiveElement(av);
this._blockFrames(aw.iframeFix===true?"iframe":aw.iframeFix);
return true
},_blockFrames:function(av){this.iframeBlocks=this.document.find(av).map(function(){var aw=ak(this);
return ak("<div>").css("position","absolute").appendTo(aw.parent()).outerWidth(aw.outerWidth()).outerHeight(aw.outerHeight()).offset(aw.offset())[0]
})
},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();
delete this.iframeBlocks
}},_blurActiveElement:function(aw){var av=ak.ui.safeActiveElement(this.document[0]),ax=ak(aw.target);
if(ax.closest(av).length){return
}ak.ui.safeBlur(av)
},_mouseStart:function(av){var aw=this.options;
this.helper=this._createHelper(av);
this._addClass(this.helper,"ui-draggable-dragging");
this._cacheHelperProportions();
if(ak.ui.ddmanager){ak.ui.ddmanager.current=this
}this._cacheMargins();
this.cssPosition=this.helper.css("position");
this.scrollParent=this.helper.scrollParent(true);
this.offsetParent=this.helper.offsetParent();
this.hasFixedAncestor=this.helper.parents().filter(function(){return ak(this).css("position")==="fixed"
}).length>0;
this.positionAbs=this.element.offset();
this._refreshOffsets(av);
this.originalPosition=this.position=this._generatePosition(av,false);
this.originalPageX=av.pageX;
this.originalPageY=av.pageY;
(aw.cursorAt&&this._adjustOffsetFromHelper(aw.cursorAt));
this._setContainment();
if(this._trigger("start",av)===false){this._clear();
return false
}this._cacheHelperProportions();
if(ak.ui.ddmanager&&!aw.dropBehaviour){ak.ui.ddmanager.prepareOffsets(this,av)
}this._mouseDrag(av,true);
if(ak.ui.ddmanager){ak.ui.ddmanager.dragStart(this,av)
}return true
},_refreshOffsets:function(av){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:false,parent:this._getParentOffset(),relative:this._getRelativeOffset()};
this.offset.click={left:av.pageX-this.offset.left,top:av.pageY-this.offset.top}
},_mouseDrag:function(av,ax){if(this.hasFixedAncestor){this.offset.parent=this._getParentOffset()
}this.position=this._generatePosition(av,true);
this.positionAbs=this._convertPositionTo("absolute");
if(!ax){var aw=this._uiHash();
if(this._trigger("drag",av,aw)===false){this._mouseUp(new ak.Event("mouseup",av));
return false
}this.position=aw.position
}this.helper[0].style.left=this.position.left+"px";
this.helper[0].style.top=this.position.top+"px";
if(ak.ui.ddmanager){ak.ui.ddmanager.drag(this,av)
}return false
},_mouseStop:function(aw){var av=this,ax=false;
if(ak.ui.ddmanager&&!this.options.dropBehaviour){ax=ak.ui.ddmanager.drop(this,aw)
}if(this.dropped){ax=this.dropped;
this.dropped=false
}if((this.options.revert==="invalid"&&!ax)||(this.options.revert==="valid"&&ax)||this.options.revert===true||(ak.isFunction(this.options.revert)&&this.options.revert.call(this.element,ax))){ak(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(av._trigger("stop",aw)!==false){av._clear()
}})
}else{if(this._trigger("stop",aw)!==false){this._clear()
}}return false
},_mouseUp:function(av){this._unblockFrames();
if(ak.ui.ddmanager){ak.ui.ddmanager.dragStop(this,av)
}if(this.handleElement.is(av.target)){this.element.trigger("focus")
}return ak.ui.mouse.prototype._mouseUp.call(this,av)
},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp(new ak.Event("mouseup",{target:this.element[0]}))
}else{this._clear()
}return this
},_getHandle:function(av){return this.options.handle?!!ak(av.target).closest(this.element.find(this.options.handle)).length:true
},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element;
this._addClass(this.handleElement,"ui-draggable-handle")
},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")
},_createHelper:function(aw){var ay=this.options,ax=ak.isFunction(ay.helper),av=ax?ak(ay.helper.apply(this.element[0],[aw])):(ay.helper==="clone"?this.element.clone().removeAttr("id"):this.element);
if(!av.parents("body").length){av.appendTo((ay.appendTo==="parent"?this.element[0].parentNode:ay.appendTo))
}if(ax&&av[0]===this.element[0]){this._setPositionRelative()
}if(av[0]!==this.element[0]&&!(/(fixed|absolute)/).test(av.css("position"))){av.css("position","absolute")
}return av
},_setPositionRelative:function(){if(!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"
}},_adjustOffsetFromHelper:function(av){if(typeof av==="string"){av=av.split(" ")
}if(ak.isArray(av)){av={left:+av[0],top:+av[1]||0}
}if("left" in av){this.offset.click.left=av.left+this.margins.left
}if("right" in av){this.offset.click.left=this.helperProportions.width-av.right+this.margins.left
}if("top" in av){this.offset.click.top=av.top+this.margins.top
}if("bottom" in av){this.offset.click.top=this.helperProportions.height-av.bottom+this.margins.top
}},_isRootNode:function(av){return(/(html|body)/i).test(av.tagName)||av===this.document[0]
},_getParentOffset:function(){var aw=this.offsetParent.offset(),av=this.document[0];
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==av&&ak.contains(this.scrollParent[0],this.offsetParent[0])){aw.left+=this.scrollParent.scrollLeft();
aw.top+=this.scrollParent.scrollTop()
}if(this._isRootNode(this.offsetParent[0])){aw={top:0,left:0}
}return{top:aw.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:aw.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition!=="relative"){return{top:0,left:0}
}var av=this.element.position(),aw=this._isRootNode(this.scrollParent[0]);
return{top:av.top-(parseInt(this.helper.css("top"),10)||0)+(!aw?this.scrollParent.scrollTop():0),left:av.left-(parseInt(this.helper.css("left"),10)||0)+(!aw?this.scrollParent.scrollLeft():0)}
},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var aw,az,ax,ay=this.options,av=this.document[0];
this.relativeContainer=null;
if(!ay.containment){this.containment=null;
return
}if(ay.containment==="window"){this.containment=[ak(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,ak(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,ak(window).scrollLeft()+ak(window).width()-this.helperProportions.width-this.margins.left,ak(window).scrollTop()+(ak(window).height()||av.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return
}if(ay.containment==="document"){this.containment=[0,0,ak(av).width()-this.helperProportions.width-this.margins.left,(ak(av).height()||av.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return
}if(ay.containment.constructor===Array){this.containment=ay.containment;
return
}if(ay.containment==="parent"){ay.containment=this.helper[0].parentNode
}az=ak(ay.containment);
ax=az[0];
if(!ax){return
}aw=/(scroll|auto)/.test(az.css("overflow"));
this.containment=[(parseInt(az.css("borderLeftWidth"),10)||0)+(parseInt(az.css("paddingLeft"),10)||0),(parseInt(az.css("borderTopWidth"),10)||0)+(parseInt(az.css("paddingTop"),10)||0),(aw?Math.max(ax.scrollWidth,ax.offsetWidth):ax.offsetWidth)-(parseInt(az.css("borderRightWidth"),10)||0)-(parseInt(az.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(aw?Math.max(ax.scrollHeight,ax.offsetHeight):ax.offsetHeight)-(parseInt(az.css("borderBottomWidth"),10)||0)-(parseInt(az.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];
this.relativeContainer=az
},_convertPositionTo:function(aw,ay){if(!ay){ay=this.position
}var av=aw==="absolute"?1:-1,ax=this._isRootNode(this.scrollParent[0]);
return{top:(ay.top+this.offset.relative.top*av+this.offset.parent.top*av-((this.cssPosition==="fixed"?-this.offset.scroll.top:(ax?0:this.offset.scroll.top))*av)),left:(ay.left+this.offset.relative.left*av+this.offset.parent.left*av-((this.cssPosition==="fixed"?-this.offset.scroll.left:(ax?0:this.offset.scroll.left))*av))}
},_generatePosition:function(aw,aC){var av,aD,aE,ay,ax=this.options,aB=this._isRootNode(this.scrollParent[0]),aA=aw.pageX,az=aw.pageY;
if(!aB||!this.offset.scroll){this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}
}if(aC){if(this.containment){if(this.relativeContainer){aD=this.relativeContainer.offset();
av=[this.containment[0]+aD.left,this.containment[1]+aD.top,this.containment[2]+aD.left,this.containment[3]+aD.top]
}else{av=this.containment
}if(aw.pageX-this.offset.click.left<av[0]){aA=av[0]+this.offset.click.left
}if(aw.pageY-this.offset.click.top<av[1]){az=av[1]+this.offset.click.top
}if(aw.pageX-this.offset.click.left>av[2]){aA=av[2]+this.offset.click.left
}if(aw.pageY-this.offset.click.top>av[3]){az=av[3]+this.offset.click.top
}}if(ax.grid){aE=ax.grid[1]?this.originalPageY+Math.round((az-this.originalPageY)/ax.grid[1])*ax.grid[1]:this.originalPageY;
az=av?((aE-this.offset.click.top>=av[1]||aE-this.offset.click.top>av[3])?aE:((aE-this.offset.click.top>=av[1])?aE-ax.grid[1]:aE+ax.grid[1])):aE;
ay=ax.grid[0]?this.originalPageX+Math.round((aA-this.originalPageX)/ax.grid[0])*ax.grid[0]:this.originalPageX;
aA=av?((ay-this.offset.click.left>=av[0]||ay-this.offset.click.left>av[2])?ay:((ay-this.offset.click.left>=av[0])?ay-ax.grid[0]:ay+ax.grid[0])):ay
}if(ax.axis==="y"){aA=this.originalPageX
}if(ax.axis==="x"){az=this.originalPageY
}}return{top:(az-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.offset.scroll.top:(aB?0:this.offset.scroll.top))),left:(aA-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.offset.scroll.left:(aB?0:this.offset.scroll.left)))}
},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging");
if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()
}this.helper=null;
this.cancelHelperRemoval=false;
if(this.destroyOnClear){this.destroy()
}},_trigger:function(av,aw,ax){ax=ax||this._uiHash();
ak.ui.plugin.call(this,av,[aw,ax,this],true);
if(/^(drag|start|stop)/.test(av)){this.positionAbs=this._convertPositionTo("absolute");
ax.offset=this.positionAbs
}return ak.Widget.prototype._trigger.call(this,av,aw,ax)
},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}});
ak.ui.plugin.add("draggable","connectToSortable",{start:function(ax,ay,av){var aw=ak.extend({},ay,{item:av.element});
av.sortables=[];
ak(av.options.connectToSortable).each(function(){var az=ak(this).sortable("instance");
if(az&&!az.options.disabled){av.sortables.push(az);
az.refreshPositions();
az._trigger("activate",ax,aw)
}})
},stop:function(ax,ay,av){var aw=ak.extend({},ay,{item:av.element});
av.cancelHelperRemoval=false;
ak.each(av.sortables,function(){var az=this;
if(az.isOver){az.isOver=0;
av.cancelHelperRemoval=true;
az.cancelHelperRemoval=false;
az._storedCSS={position:az.placeholder.css("position"),top:az.placeholder.css("top"),left:az.placeholder.css("left")};
az._mouseStop(ax);
az.options.helper=az.options._helper
}else{az.cancelHelperRemoval=true;
az._trigger("deactivate",ax,aw)
}})
},drag:function(aw,ax,av){ak.each(av.sortables,function(){var ay=false,az=this;
az.positionAbs=av.positionAbs;
az.helperProportions=av.helperProportions;
az.offset.click=av.offset.click;
if(az._intersectsWith(az.containerCache)){ay=true;
ak.each(av.sortables,function(){this.positionAbs=av.positionAbs;
this.helperProportions=av.helperProportions;
this.offset.click=av.offset.click;
if(this!==az&&this._intersectsWith(this.containerCache)&&ak.contains(az.element[0],this.element[0])){ay=false
}return ay
})
}if(ay){if(!az.isOver){az.isOver=1;
av._parent=ax.helper.parent();
az.currentItem=ax.helper.appendTo(az.element).data("ui-sortable-item",true);
az.options._helper=az.options.helper;
az.options.helper=function(){return ax.helper[0]
};
aw.target=az.currentItem[0];
az._mouseCapture(aw,true);
az._mouseStart(aw,true,true);
az.offset.click.top=av.offset.click.top;
az.offset.click.left=av.offset.click.left;
az.offset.parent.left-=av.offset.parent.left-az.offset.parent.left;
az.offset.parent.top-=av.offset.parent.top-az.offset.parent.top;
av._trigger("toSortable",aw);
av.dropped=az.element;
ak.each(av.sortables,function(){this.refreshPositions()
});
av.currentItem=av.element;
az.fromOutside=av
}if(az.currentItem){az._mouseDrag(aw);
ax.position=az.position
}}else{if(az.isOver){az.isOver=0;
az.cancelHelperRemoval=true;
az.options._revert=az.options.revert;
az.options.revert=false;
az._trigger("out",aw,az._uiHash(az));
az._mouseStop(aw,true);
az.options.revert=az.options._revert;
az.options.helper=az.options._helper;
if(az.placeholder){az.placeholder.remove()
}ax.helper.appendTo(av._parent);
av._refreshOffsets(aw);
ax.position=av._generatePosition(aw,true);
av._trigger("fromSortable",aw);
av.dropped=false;
ak.each(av.sortables,function(){this.refreshPositions()
})
}}})
}});
ak.ui.plugin.add("draggable","cursor",{start:function(ax,ay,av){var aw=ak("body"),az=av.options;
if(aw.css("cursor")){az._cursor=aw.css("cursor")
}aw.css("cursor",az.cursor)
},stop:function(aw,ax,av){var ay=av.options;
if(ay._cursor){ak("body").css("cursor",ay._cursor)
}}});
ak.ui.plugin.add("draggable","opacity",{start:function(ax,ay,av){var aw=ak(ay.helper),az=av.options;
if(aw.css("opacity")){az._opacity=aw.css("opacity")
}aw.css("opacity",az.opacity)
},stop:function(aw,ax,av){var ay=av.options;
if(ay._opacity){ak(ax.helper).css("opacity",ay._opacity)
}}});
ak.ui.plugin.add("draggable","scroll",{start:function(aw,ax,av){if(!av.scrollParentNotHidden){av.scrollParentNotHidden=av.helper.scrollParent(false)
}if(av.scrollParentNotHidden[0]!==av.document[0]&&av.scrollParentNotHidden[0].tagName!=="HTML"){av.overflowOffset=av.scrollParentNotHidden.offset()
}},drag:function(ay,az,ax){var aA=ax.options,aw=false,aB=ax.scrollParentNotHidden[0],av=ax.document[0];
if(aB!==av&&aB.tagName!=="HTML"){if(!aA.axis||aA.axis!=="x"){if((ax.overflowOffset.top+aB.offsetHeight)-ay.pageY<aA.scrollSensitivity){aB.scrollTop=aw=aB.scrollTop+aA.scrollSpeed
}else{if(ay.pageY-ax.overflowOffset.top<aA.scrollSensitivity){aB.scrollTop=aw=aB.scrollTop-aA.scrollSpeed
}}}if(!aA.axis||aA.axis!=="y"){if((ax.overflowOffset.left+aB.offsetWidth)-ay.pageX<aA.scrollSensitivity){aB.scrollLeft=aw=aB.scrollLeft+aA.scrollSpeed
}else{if(ay.pageX-ax.overflowOffset.left<aA.scrollSensitivity){aB.scrollLeft=aw=aB.scrollLeft-aA.scrollSpeed
}}}}else{if(!aA.axis||aA.axis!=="x"){if(ay.pageY-ak(av).scrollTop()<aA.scrollSensitivity){aw=ak(av).scrollTop(ak(av).scrollTop()-aA.scrollSpeed)
}else{if(ak(window).height()-(ay.pageY-ak(av).scrollTop())<aA.scrollSensitivity){aw=ak(av).scrollTop(ak(av).scrollTop()+aA.scrollSpeed)
}}}if(!aA.axis||aA.axis!=="y"){if(ay.pageX-ak(av).scrollLeft()<aA.scrollSensitivity){aw=ak(av).scrollLeft(ak(av).scrollLeft()-aA.scrollSpeed)
}else{if(ak(window).width()-(ay.pageX-ak(av).scrollLeft())<aA.scrollSensitivity){aw=ak(av).scrollLeft(ak(av).scrollLeft()+aA.scrollSpeed)
}}}}if(aw!==false&&ak.ui.ddmanager&&!aA.dropBehaviour){ak.ui.ddmanager.prepareOffsets(ax,ay)
}}});
ak.ui.plugin.add("draggable","snap",{start:function(aw,ax,av){var ay=av.options;
av.snapElements=[];
ak(ay.snap.constructor!==String?(ay.snap.items||":data(ui-draggable)"):ay.snap).each(function(){var aA=ak(this),az=aA.offset();
if(this!==av.element[0]){av.snapElements.push({item:this,width:aA.outerWidth(),height:aA.outerHeight(),top:az.top,left:az.left})
}})
},drag:function(aH,aE,ay){var av,aM,aA,aB,aG,aD,aC,aN,aI,az,aF=ay.options,aL=aF.snapTolerance,aK=aE.offset.left,aJ=aK+ay.helperProportions.width,ax=aE.offset.top,aw=ax+ay.helperProportions.height;
for(aI=ay.snapElements.length-1;
aI>=0;
aI--){aG=ay.snapElements[aI].left-ay.margins.left;
aD=aG+ay.snapElements[aI].width;
aC=ay.snapElements[aI].top-ay.margins.top;
aN=aC+ay.snapElements[aI].height;
if(aJ<aG-aL||aK>aD+aL||aw<aC-aL||ax>aN+aL||!ak.contains(ay.snapElements[aI].item.ownerDocument,ay.snapElements[aI].item)){if(ay.snapElements[aI].snapping){(ay.options.snap.release&&ay.options.snap.release.call(ay.element,aH,ak.extend(ay._uiHash(),{snapItem:ay.snapElements[aI].item})))
}ay.snapElements[aI].snapping=false;
continue
}if(aF.snapMode!=="inner"){av=Math.abs(aC-aw)<=aL;
aM=Math.abs(aN-ax)<=aL;
aA=Math.abs(aG-aJ)<=aL;
aB=Math.abs(aD-aK)<=aL;
if(av){aE.position.top=ay._convertPositionTo("relative",{top:aC-ay.helperProportions.height,left:0}).top
}if(aM){aE.position.top=ay._convertPositionTo("relative",{top:aN,left:0}).top
}if(aA){aE.position.left=ay._convertPositionTo("relative",{top:0,left:aG-ay.helperProportions.width}).left
}if(aB){aE.position.left=ay._convertPositionTo("relative",{top:0,left:aD}).left
}}az=(av||aM||aA||aB);
if(aF.snapMode!=="outer"){av=Math.abs(aC-ax)<=aL;
aM=Math.abs(aN-aw)<=aL;
aA=Math.abs(aG-aK)<=aL;
aB=Math.abs(aD-aJ)<=aL;
if(av){aE.position.top=ay._convertPositionTo("relative",{top:aC,left:0}).top
}if(aM){aE.position.top=ay._convertPositionTo("relative",{top:aN-ay.helperProportions.height,left:0}).top
}if(aA){aE.position.left=ay._convertPositionTo("relative",{top:0,left:aG}).left
}if(aB){aE.position.left=ay._convertPositionTo("relative",{top:0,left:aD-ay.helperProportions.width}).left
}}if(!ay.snapElements[aI].snapping&&(av||aM||aA||aB||az)){(ay.options.snap.snap&&ay.options.snap.snap.call(ay.element,aH,ak.extend(ay._uiHash(),{snapItem:ay.snapElements[aI].item})))
}ay.snapElements[aI].snapping=(av||aM||aA||aB||az)
}}});
ak.ui.plugin.add("draggable","stack",{start:function(ax,ay,av){var aw,aA=av.options,az=ak.makeArray(ak(aA.stack)).sort(function(aC,aB){return(parseInt(ak(aC).css("zIndex"),10)||0)-(parseInt(ak(aB).css("zIndex"),10)||0)
});
if(!az.length){return
}aw=parseInt(ak(az[0]).css("zIndex"),10)||0;
ak(az).each(function(aB){ak(this).css("zIndex",aw+aB)
});
this.css("zIndex",(aw+az.length))
}});
ak.ui.plugin.add("draggable","zIndex",{start:function(ax,ay,av){var aw=ak(ay.helper),az=av.options;
if(aw.css("zIndex")){az._zIndex=aw.css("zIndex")
}aw.css("zIndex",az.zIndex)
},stop:function(aw,ax,av){var ay=av.options;
if(ay._zIndex){ak(ax.helper).css("zIndex",ay._zIndex)
}}});
var w=ak.ui.draggable;
/*!
 * jQuery UI Resizable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
ak.widget("ui.resizable",ak.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(av){return parseFloat(av)||0
},_isNumber:function(av){return !isNaN(parseFloat(av))
},_hasScroll:function(ay,aw){if(ak(ay).css("overflow")==="hidden"){return false
}var av=(aw&&aw==="left")?"scrollLeft":"scrollTop",ax=false;
if(ay[av]>0){return true
}ay[av]=1;
ax=(ay[av]>0);
ay[av]=0;
return ax
},_create:function(){var aw,ax=this.options,av=this;
this._addClass("ui-resizable");
ak.extend(this,{_aspectRatio:!!(ax.aspectRatio),aspectRatio:ax.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:ax.helper||ax.ghost||ax.animate?ax.helper||"ui-resizable-helper":null});
if(this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)){this.element.wrap(ak("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));
this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance"));
this.elementIsWrapper=true;
aw={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")};
this.element.css(aw);
this.originalElement.css("margin",0);
this.originalResizeStyle=this.originalElement.css("resize");
this.originalElement.css("resize","none");
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));
this.originalElement.css(aw);
this._proportionallyResize()
}this._setupHandles();
if(ax.autoHide){ak(this.element).on("mouseenter",function(){if(ax.disabled){return
}av._removeClass("ui-resizable-autohide");
av._handles.show()
}).on("mouseleave",function(){if(ax.disabled){return
}if(!av.resizing){av._addClass("ui-resizable-autohide");
av._handles.hide()
}})
}this._mouseInit()
},_destroy:function(){this._mouseDestroy();
var aw,av=function(ax){ak(ax).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
};
if(this.elementIsWrapper){av(this.element);
aw=this.element;
this.originalElement.css({position:aw.css("position"),width:aw.outerWidth(),height:aw.outerHeight(),top:aw.css("top"),left:aw.css("left")}).insertAfter(aw);
aw.remove()
}this.originalElement.css("resize",this.originalResizeStyle);
av(this.originalElement);
return this
},_setOption:function(av,aw){this._super(av,aw);
switch(av){case"handles":this._removeHandles();
this._setupHandles();
break;
default:break
}},_setupHandles:function(){var aA=this.options,az,aw,aB,av,ax,ay=this;
this.handles=aA.handles||(!ak(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});
this._handles=ak();
if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw"
}aB=this.handles.split(",");
this.handles={};
for(aw=0;
aw<aB.length;
aw++){az=ak.trim(aB[aw]);
av="ui-resizable-"+az;
ax=ak("<div>");
this._addClass(ax,"ui-resizable-handle "+av);
ax.css({zIndex:aA.zIndex});
this.handles[az]=".ui-resizable-"+az;
this.element.append(ax)
}}this._renderAxis=function(aG){var aD,aE,aC,aF;
aG=aG||this.element;
for(aD in this.handles){if(this.handles[aD].constructor===String){this.handles[aD]=this.element.children(this.handles[aD]).first().show()
}else{if(this.handles[aD].jquery||this.handles[aD].nodeType){this.handles[aD]=ak(this.handles[aD]);
this._on(this.handles[aD],{mousedown:ay._mouseDown})
}}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)){aE=ak(this.handles[aD],this.element);
aF=/sw|ne|nw|se|n|s/.test(aD)?aE.outerHeight():aE.outerWidth();
aC=["padding",/ne|nw|n/.test(aD)?"Top":/se|sw|s/.test(aD)?"Bottom":/^e$/.test(aD)?"Right":"Left"].join("");
aG.css(aC,aF);
this._proportionallyResize()
}this._handles=this._handles.add(this.handles[aD])
}};
this._renderAxis(this.element);
this._handles=this._handles.add(this.element.find(".ui-resizable-handle"));
this._handles.disableSelection();
this._handles.on("mouseover",function(){if(!ay.resizing){if(this.className){ax=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
}ay.axis=ax&&ax[1]?ax[1]:"se"
}});
if(aA.autoHide){this._handles.hide();
this._addClass("ui-resizable-autohide")
}},_removeHandles:function(){this._handles.remove()
},_mouseCapture:function(ax){var aw,ay,av=false;
for(aw in this.handles){ay=ak(this.handles[aw])[0];
if(ay===ax.target||ak.contains(ay,ax.target)){av=true
}}return !this.options.disabled&&av
},_mouseStart:function(aw){var aA,ax,az,ay=this.options,av=this.element;
this.resizing=true;
this._renderProxy();
aA=this._num(this.helper.css("left"));
ax=this._num(this.helper.css("top"));
if(ay.containment){aA+=ak(ay.containment).scrollLeft()||0;
ax+=ak(ay.containment).scrollTop()||0
}this.offset=this.helper.offset();
this.position={left:aA,top:ax};
this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:av.width(),height:av.height()};
this.originalSize=this._helper?{width:av.outerWidth(),height:av.outerHeight()}:{width:av.width(),height:av.height()};
this.sizeDiff={width:av.outerWidth()-av.width(),height:av.outerHeight()-av.height()};
this.originalPosition={left:aA,top:ax};
this.originalMousePosition={left:aw.pageX,top:aw.pageY};
this.aspectRatio=(typeof ay.aspectRatio==="number")?ay.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);
az=ak(".ui-resizable-"+this.axis).css("cursor");
ak("body").css("cursor",az==="auto"?this.axis+"-resize":az);
this._addClass("ui-resizable-resizing");
this._propagate("start",aw);
return true
},_mouseDrag:function(aA){var aB,az,aC=this.originalMousePosition,aw=this.axis,ax=(aA.pageX-aC.left)||0,av=(aA.pageY-aC.top)||0,ay=this._change[aw];
this._updatePrevProperties();
if(!ay){return false
}aB=ay.apply(this,[aA,ax,av]);
this._updateVirtualBoundaries(aA.shiftKey);
if(this._aspectRatio||aA.shiftKey){aB=this._updateRatio(aB,aA)
}aB=this._respectSize(aB,aA);
this._updateCache(aB);
this._propagate("resize",aA);
az=this._applyChanges();
if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()
}if(!ak.isEmptyObject(az)){this._updatePrevProperties();
this._trigger("resize",aA,this.ui());
this._applyChanges()
}return false
},_mouseStop:function(ay){this.resizing=false;
var ax,av,aw,aB,aE,aA,aD,az=this.options,aC=this;
if(this._helper){ax=this._proportionallyResizeElements;
av=ax.length&&(/textarea/i).test(ax[0].nodeName);
aw=av&&this._hasScroll(ax[0],"left")?0:aC.sizeDiff.height;
aB=av?0:aC.sizeDiff.width;
aE={width:(aC.helper.width()-aB),height:(aC.helper.height()-aw)};
aA=(parseFloat(aC.element.css("left"))+(aC.position.left-aC.originalPosition.left))||null;
aD=(parseFloat(aC.element.css("top"))+(aC.position.top-aC.originalPosition.top))||null;
if(!az.animate){this.element.css(ak.extend(aE,{top:aD,left:aA}))
}aC.helper.height(aC.size.height);
aC.helper.width(aC.size.width);
if(this._helper&&!az.animate){this._proportionallyResize()
}}ak("body").css("cursor","auto");
this._removeClass("ui-resizable-resizing");
this._propagate("stop",ay);
if(this._helper){this.helper.remove()
}return false
},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left};
this.prevSize={width:this.size.width,height:this.size.height}
},_applyChanges:function(){var av={};
if(this.position.top!==this.prevPosition.top){av.top=this.position.top+"px"
}if(this.position.left!==this.prevPosition.left){av.left=this.position.left+"px"
}if(this.size.width!==this.prevSize.width){av.width=this.size.width+"px"
}if(this.size.height!==this.prevSize.height){av.height=this.size.height+"px"
}this.helper.css(av);
return av
},_updateVirtualBoundaries:function(ax){var az,ay,aw,aB,av,aA=this.options;
av={minWidth:this._isNumber(aA.minWidth)?aA.minWidth:0,maxWidth:this._isNumber(aA.maxWidth)?aA.maxWidth:Infinity,minHeight:this._isNumber(aA.minHeight)?aA.minHeight:0,maxHeight:this._isNumber(aA.maxHeight)?aA.maxHeight:Infinity};
if(this._aspectRatio||ax){az=av.minHeight*this.aspectRatio;
aw=av.minWidth/this.aspectRatio;
ay=av.maxHeight*this.aspectRatio;
aB=av.maxWidth/this.aspectRatio;
if(az>av.minWidth){av.minWidth=az
}if(aw>av.minHeight){av.minHeight=aw
}if(ay<av.maxWidth){av.maxWidth=ay
}if(aB<av.maxHeight){av.maxHeight=aB
}}this._vBoundaries=av
},_updateCache:function(av){this.offset=this.helper.offset();
if(this._isNumber(av.left)){this.position.left=av.left
}if(this._isNumber(av.top)){this.position.top=av.top
}if(this._isNumber(av.height)){this.size.height=av.height
}if(this._isNumber(av.width)){this.size.width=av.width
}},_updateRatio:function(ax){var ay=this.position,aw=this.size,av=this.axis;
if(this._isNumber(ax.height)){ax.width=(ax.height*this.aspectRatio)
}else{if(this._isNumber(ax.width)){ax.height=(ax.width/this.aspectRatio)
}}if(av==="sw"){ax.left=ay.left+(aw.width-ax.width);
ax.top=null
}if(av==="nw"){ax.top=ay.top+(aw.height-ax.height);
ax.left=ay.left+(aw.width-ax.width)
}return ax
},_respectSize:function(aA){var ax=this._vBoundaries,aD=this.axis,aF=this._isNumber(aA.width)&&ax.maxWidth&&(ax.maxWidth<aA.width),aB=this._isNumber(aA.height)&&ax.maxHeight&&(ax.maxHeight<aA.height),ay=this._isNumber(aA.width)&&ax.minWidth&&(ax.minWidth>aA.width),aE=this._isNumber(aA.height)&&ax.minHeight&&(ax.minHeight>aA.height),aw=this.originalPosition.left+this.originalSize.width,aC=this.originalPosition.top+this.originalSize.height,az=/sw|nw|w/.test(aD),av=/nw|ne|n/.test(aD);
if(ay){aA.width=ax.minWidth
}if(aE){aA.height=ax.minHeight
}if(aF){aA.width=ax.maxWidth
}if(aB){aA.height=ax.maxHeight
}if(ay&&az){aA.left=aw-ax.minWidth
}if(aF&&az){aA.left=aw-ax.maxWidth
}if(aE&&av){aA.top=aC-ax.minHeight
}if(aB&&av){aA.top=aC-ax.maxHeight
}if(!aA.width&&!aA.height&&!aA.left&&aA.top){aA.top=null
}else{if(!aA.width&&!aA.height&&!aA.top&&aA.left){aA.left=null
}}return aA
},_getPaddingPlusBorderDimensions:function(ax){var aw=0,ay=[],az=[ax.css("borderTopWidth"),ax.css("borderRightWidth"),ax.css("borderBottomWidth"),ax.css("borderLeftWidth")],av=[ax.css("paddingTop"),ax.css("paddingRight"),ax.css("paddingBottom"),ax.css("paddingLeft")];
for(;
aw<4;
aw++){ay[aw]=(parseFloat(az[aw])||0);
ay[aw]+=(parseFloat(av[aw])||0)
}return{height:ay[0]+ay[2],width:ay[1]+ay[3]}
},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return
}var ax,aw=0,av=this.helper||this.element;
for(;
aw<this._proportionallyResizeElements.length;
aw++){ax=this._proportionallyResizeElements[aw];
if(!this.outerDimensions){this.outerDimensions=this._getPaddingPlusBorderDimensions(ax)
}ax.css({height:(av.height()-this.outerDimensions.height)||0,width:(av.width()-this.outerDimensions.width)||0})
}},_renderProxy:function(){var av=this.element,aw=this.options;
this.elementOffset=av.offset();
if(this._helper){this.helper=this.helper||ak("<div style='overflow:hidden;'></div>");
this._addClass(this.helper,this._helper);
this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++aw.zIndex});
this.helper.appendTo("body").disableSelection()
}else{this.helper=this.element
}},_change:{e:function(aw,av){return{width:this.originalSize.width+av}
},w:function(ax,av){var aw=this.originalSize,ay=this.originalPosition;
return{left:ay.left+av,width:aw.width-av}
},n:function(ay,aw,av){var ax=this.originalSize,az=this.originalPosition;
return{top:az.top+av,height:ax.height-av}
},s:function(ax,aw,av){return{height:this.originalSize.height+av}
},se:function(ax,aw,av){return ak.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[ax,aw,av]))
},sw:function(ax,aw,av){return ak.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[ax,aw,av]))
},ne:function(ax,aw,av){return ak.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[ax,aw,av]))
},nw:function(ax,aw,av){return ak.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[ax,aw,av]))
}},_propagate:function(aw,av){ak.ui.plugin.call(this,aw,[av,this.ui()]);
(aw!=="resize"&&this._trigger(aw,av,this.ui()))
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}});
ak.ui.plugin.add("resizable","animate",{stop:function(ay){var aD=ak(this).resizable("instance"),aA=aD.options,ax=aD._proportionallyResizeElements,av=ax.length&&(/textarea/i).test(ax[0].nodeName),aw=av&&aD._hasScroll(ax[0],"left")?0:aD.sizeDiff.height,aC=av?0:aD.sizeDiff.width,az={width:(aD.size.width-aC),height:(aD.size.height-aw)},aB=(parseFloat(aD.element.css("left"))+(aD.position.left-aD.originalPosition.left))||null,aE=(parseFloat(aD.element.css("top"))+(aD.position.top-aD.originalPosition.top))||null;
aD.element.animate(ak.extend(az,aE&&aB?{top:aE,left:aB}:{}),{duration:aA.animateDuration,easing:aA.animateEasing,step:function(){var aF={width:parseFloat(aD.element.css("width")),height:parseFloat(aD.element.css("height")),top:parseFloat(aD.element.css("top")),left:parseFloat(aD.element.css("left"))};
if(ax&&ax.length){ak(ax[0]).css({width:aF.width,height:aF.height})
}aD._updateCache(aF);
aD._propagate("resize",ay)
}})
}});
ak.ui.plugin.add("resizable","containment",{start:function(){var aD,ax,aF,av,aC,ay,aG,aE=ak(this).resizable("instance"),aB=aE.options,aA=aE.element,aw=aB.containment,az=(aw instanceof ak)?aw.get(0):(/parent/.test(aw))?aA.parent().get(0):aw;
if(!az){return
}aE.containerElement=ak(az);
if(/document/.test(aw)||aw===document){aE.containerOffset={left:0,top:0};
aE.containerPosition={left:0,top:0};
aE.parentData={element:ak(document),left:0,top:0,width:ak(document).width(),height:ak(document).height()||document.body.parentNode.scrollHeight}
}else{aD=ak(az);
ax=[];
ak(["Top","Right","Left","Bottom"]).each(function(aI,aH){ax[aI]=aE._num(aD.css("padding"+aH))
});
aE.containerOffset=aD.offset();
aE.containerPosition=aD.position();
aE.containerSize={height:(aD.innerHeight()-ax[3]),width:(aD.innerWidth()-ax[1])};
aF=aE.containerOffset;
av=aE.containerSize.height;
aC=aE.containerSize.width;
ay=(aE._hasScroll(az,"left")?az.scrollWidth:aC);
aG=(aE._hasScroll(az)?az.scrollHeight:av);
aE.parentData={element:az,left:aF.left,top:aF.top,width:ay,height:aG}
}},resize:function(aw){var aC,aH,aB,az,aD=ak(this).resizable("instance"),ay=aD.options,aF=aD.containerOffset,aE=aD.position,aG=aD._aspectRatio||aw.shiftKey,av={top:0,left:0},ax=aD.containerElement,aA=true;
if(ax[0]!==document&&(/static/).test(ax.css("position"))){av=aF
}if(aE.left<(aD._helper?aF.left:0)){aD.size.width=aD.size.width+(aD._helper?(aD.position.left-aF.left):(aD.position.left-av.left));
if(aG){aD.size.height=aD.size.width/aD.aspectRatio;
aA=false
}aD.position.left=ay.helper?aF.left:0
}if(aE.top<(aD._helper?aF.top:0)){aD.size.height=aD.size.height+(aD._helper?(aD.position.top-aF.top):aD.position.top);
if(aG){aD.size.width=aD.size.height*aD.aspectRatio;
aA=false
}aD.position.top=aD._helper?aF.top:0
}aB=aD.containerElement.get(0)===aD.element.parent().get(0);
az=/relative|absolute/.test(aD.containerElement.css("position"));
if(aB&&az){aD.offset.left=aD.parentData.left+aD.position.left;
aD.offset.top=aD.parentData.top+aD.position.top
}else{aD.offset.left=aD.element.offset().left;
aD.offset.top=aD.element.offset().top
}aC=Math.abs(aD.sizeDiff.width+(aD._helper?aD.offset.left-av.left:(aD.offset.left-aF.left)));
aH=Math.abs(aD.sizeDiff.height+(aD._helper?aD.offset.top-av.top:(aD.offset.top-aF.top)));
if(aC+aD.size.width>=aD.parentData.width){aD.size.width=aD.parentData.width-aC;
if(aG){aD.size.height=aD.size.width/aD.aspectRatio;
aA=false
}}if(aH+aD.size.height>=aD.parentData.height){aD.size.height=aD.parentData.height-aH;
if(aG){aD.size.width=aD.size.height*aD.aspectRatio;
aA=false
}}if(!aA){aD.position.left=aD.prevPosition.left;
aD.position.top=aD.prevPosition.top;
aD.size.width=aD.prevSize.width;
aD.size.height=aD.prevSize.height
}},stop:function(){var aA=ak(this).resizable("instance"),aw=aA.options,aB=aA.containerOffset,av=aA.containerPosition,ax=aA.containerElement,ay=ak(aA.helper),aD=ay.offset(),aC=ay.outerWidth()-aA.sizeDiff.width,az=ay.outerHeight()-aA.sizeDiff.height;
if(aA._helper&&!aw.animate&&(/relative/).test(ax.css("position"))){ak(this).css({left:aD.left-av.left-aB.left,width:aC,height:az})
}if(aA._helper&&!aw.animate&&(/static/).test(ax.css("position"))){ak(this).css({left:aD.left-av.left-aB.left,width:aC,height:az})
}}});
ak.ui.plugin.add("resizable","alsoResize",{start:function(){var av=ak(this).resizable("instance"),aw=av.options;
ak(aw.alsoResize).each(function(){var ax=ak(this);
ax.data("ui-resizable-alsoresize",{width:parseFloat(ax.width()),height:parseFloat(ax.height()),left:parseFloat(ax.css("left")),top:parseFloat(ax.css("top"))})
})
},resize:function(aw,ay){var av=ak(this).resizable("instance"),az=av.options,ax=av.originalSize,aB=av.originalPosition,aA={height:(av.size.height-ax.height)||0,width:(av.size.width-ax.width)||0,top:(av.position.top-aB.top)||0,left:(av.position.left-aB.left)||0};
ak(az.alsoResize).each(function(){var aE=ak(this),aF=ak(this).data("ui-resizable-alsoresize"),aD={},aC=aE.parents(ay.originalElement[0]).length?["width","height"]:["width","height","top","left"];
ak.each(aC,function(aG,aI){var aH=(aF[aI]||0)+(aA[aI]||0);
if(aH&&aH>=0){aD[aI]=aH||null
}});
aE.css(aD)
})
},stop:function(){ak(this).removeData("ui-resizable-alsoresize")
}});
ak.ui.plugin.add("resizable","ghost",{start:function(){var aw=ak(this).resizable("instance"),av=aw.size;
aw.ghost=aw.originalElement.clone();
aw.ghost.css({opacity:0.25,display:"block",position:"relative",height:av.height,width:av.width,margin:0,left:0,top:0});
aw._addClass(aw.ghost,"ui-resizable-ghost");
if(ak.uiBackCompat!==false&&typeof aw.options.ghost==="string"){aw.ghost.addClass(this.options.ghost)
}aw.ghost.appendTo(aw.helper)
},resize:function(){var av=ak(this).resizable("instance");
if(av.ghost){av.ghost.css({position:"relative",height:av.size.height,width:av.size.width})
}},stop:function(){var av=ak(this).resizable("instance");
if(av.ghost&&av.helper){av.helper.get(0).removeChild(av.ghost.get(0))
}}});
ak.ui.plugin.add("resizable","grid",{resize:function(){var ay,aD=ak(this).resizable("instance"),aH=aD.options,aB=aD.size,aC=aD.originalSize,aE=aD.originalPosition,aM=aD.axis,av=typeof aH.grid==="number"?[aH.grid,aH.grid]:aH.grid,aK=(av[0]||1),aJ=(av[1]||1),aA=Math.round((aB.width-aC.width)/aK)*aK,az=Math.round((aB.height-aC.height)/aJ)*aJ,aF=aC.width+aA,aI=aC.height+az,ax=aH.maxWidth&&(aH.maxWidth<aF),aG=aH.maxHeight&&(aH.maxHeight<aI),aL=aH.minWidth&&(aH.minWidth>aF),aw=aH.minHeight&&(aH.minHeight>aI);
aH.grid=av;
if(aL){aF+=aK
}if(aw){aI+=aJ
}if(ax){aF-=aK
}if(aG){aI-=aJ
}if(/^(se|s|e)$/.test(aM)){aD.size.width=aF;
aD.size.height=aI
}else{if(/^(ne)$/.test(aM)){aD.size.width=aF;
aD.size.height=aI;
aD.position.top=aE.top-az
}else{if(/^(sw)$/.test(aM)){aD.size.width=aF;
aD.size.height=aI;
aD.position.left=aE.left-aA
}else{if(aI-aJ<=0||aF-aK<=0){ay=aD._getPaddingPlusBorderDimensions(this)
}if(aI-aJ>0){aD.size.height=aI;
aD.position.top=aE.top-az
}else{aI=aJ-ay.height;
aD.size.height=aI;
aD.position.top=aE.top+aC.height-aI
}if(aF-aK>0){aD.size.width=aF;
aD.position.left=aE.left-aA
}else{aF=aK-ay.width;
aD.size.width=aF;
aD.position.left=aE.left+aC.width-aF
}}}}}});
var B=ak.ui.resizable;
/*!
 * jQuery UI Dialog 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
ak.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:true,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:true,closeText:"Close",draggable:true,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(aw){var av=ak(this).css(aw).offset().top;
if(av<0){ak(this).css("top",aw.top-av)
}}},resizable:true,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},resizableRelatedOptions:{maxHeight:true,maxWidth:true,minHeight:true,minWidth:true},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};
this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};
this.originalTitle=this.element.attr("title");
if(this.options.title==null&&this.originalTitle!=null){this.options.title=this.originalTitle
}if(this.options.disabled){this.options.disabled=false
}this._createWrapper();
this.element.show().removeAttr("title").appendTo(this.uiDialog);
this._addClass("ui-dialog-content","ui-widget-content");
this._createTitlebar();
this._createButtonPane();
if(this.options.draggable&&ak.fn.draggable){this._makeDraggable()
}if(this.options.resizable&&ak.fn.resizable){this._makeResizable()
}this._isOpen=false;
this._trackFocus()
},_init:function(){if(this.options.autoOpen){this.open()
}},_appendTo:function(){var av=this.options.appendTo;
if(av&&(av.jquery||av.nodeType)){return ak(av)
}return this.document.find(av||"body").eq(0)
},_destroy:function(){var aw,av=this.originalPosition;
this._untrackInstance();
this._destroyOverlay();
this.element.removeUniqueId().css(this.originalCss).detach();
this.uiDialog.remove();
if(this.originalTitle){this.element.attr("title",this.originalTitle)
}aw=av.parent.children().eq(av.index);
if(aw.length&&aw[0]!==this.element[0]){aw.before(this.element)
}else{av.parent.append(this.element)
}},widget:function(){return this.uiDialog
},disable:ak.noop,enable:ak.noop,close:function(aw){var av=this;
if(!this._isOpen||this._trigger("beforeClose",aw)===false){return
}this._isOpen=false;
this._focusedElement=null;
this._destroyOverlay();
this._untrackInstance();
if(!this.opener.filter(":focusable").trigger("focus").length){ak.ui.safeBlur(ak.ui.safeActiveElement(this.document[0]))
}this._hide(this.uiDialog,this.options.hide,function(){av._trigger("close",aw)
})
},isOpen:function(){return this._isOpen
},moveToTop:function(){this._moveToTop()
},_moveToTop:function(az,av){var ay=false,ax=this.uiDialog.siblings(".ui-front:visible").map(function(){return +ak(this).css("z-index")
}).get(),aw=Math.max.apply(null,ax);
if(aw>=+this.uiDialog.css("z-index")){this.uiDialog.css("z-index",aw+1);
ay=true
}if(ay&&!av){this._trigger("focus",az)
}return ay
},open:function(){var av=this;
if(this._isOpen){if(this._moveToTop()){this._focusTabbable()
}return
}this._isOpen=true;
this.opener=ak(ak.ui.safeActiveElement(this.document[0]));
this._size();
this._position();
this._createOverlay();
this._moveToTop(null,true);
if(this.overlay){this.overlay.css("z-index",this.uiDialog.css("z-index")-1)
}this._show(this.uiDialog,this.options.show,function(){av._focusTabbable();
av._trigger("focus")
});
this._makeFocusTarget();
this._trigger("open")
},_focusTabbable:function(){var av=this._focusedElement;
if(!av){av=this.element.find("[autofocus]")
}if(!av.length){av=this.element.find(":tabbable")
}if(!av.length){av=this.uiDialogButtonPane.find(":tabbable")
}if(!av.length){av=this.uiDialogTitlebarClose.filter(":tabbable")
}if(!av.length){av=this.uiDialog
}av.eq(0).trigger("focus")
},_keepFocus:function(av){function aw(){var ay=ak.ui.safeActiveElement(this.document[0]),ax=this.uiDialog[0]===ay||ak.contains(this.uiDialog[0],ay);
if(!ax){this._focusTabbable()
}}av.preventDefault();
aw.call(this);
this._delay(aw)
},_createWrapper:function(){this.uiDialog=ak("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());
this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front");
this._on(this.uiDialog,{keydown:function(ax){if(this.options.closeOnEscape&&!ax.isDefaultPrevented()&&ax.keyCode&&ax.keyCode===ak.ui.keyCode.ESCAPE){ax.preventDefault();
this.close(ax);
return
}if(ax.keyCode!==ak.ui.keyCode.TAB||ax.isDefaultPrevented()){return
}var aw=this.uiDialog.find(":tabbable"),ay=aw.filter(":first"),av=aw.filter(":last");
if((ax.target===av[0]||ax.target===this.uiDialog[0])&&!ax.shiftKey){this._delay(function(){ay.trigger("focus")
});
ax.preventDefault()
}else{if((ax.target===ay[0]||ax.target===this.uiDialog[0])&&ax.shiftKey){this._delay(function(){av.trigger("focus")
});
ax.preventDefault()
}}},mousedown:function(av){if(this._moveToTop(av)){this._focusTabbable()
}}});
if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})
}},_createTitlebar:function(){var av;
this.uiDialogTitlebar=ak("<div>");
this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix");
this._on(this.uiDialogTitlebar,{mousedown:function(aw){if(!ak(aw.target).closest(".ui-dialog-titlebar-close")){this.uiDialog.trigger("focus")
}}});
this.uiDialogTitlebarClose=ak("<button type='button'></button>").button({label:ak("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:false}).appendTo(this.uiDialogTitlebar);
this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close");
this._on(this.uiDialogTitlebarClose,{click:function(aw){aw.preventDefault();
this.close(aw)
}});
av=ak("<span>").uniqueId().prependTo(this.uiDialogTitlebar);
this._addClass(av,"ui-dialog-title");
this._title(av);
this.uiDialogTitlebar.prependTo(this.uiDialog);
this.uiDialog.attr({"aria-labelledby":av.attr("id")})
},_title:function(av){if(this.options.title){av.text(this.options.title)
}else{av.html("&#160;")
}},_createButtonPane:function(){this.uiDialogButtonPane=ak("<div>");
this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix");
this.uiButtonSet=ak("<div>").appendTo(this.uiDialogButtonPane);
this._addClass(this.uiButtonSet,"ui-dialog-buttonset");
this._createButtons()
},_createButtons:function(){var aw=this,av=this.options.buttons;
this.uiDialogButtonPane.remove();
this.uiButtonSet.empty();
if(ak.isEmptyObject(av)||(ak.isArray(av)&&!av.length)){this._removeClass(this.uiDialog,"ui-dialog-buttons");
return
}ak.each(av,function(ax,ay){var az,aA;
ay=ak.isFunction(ay)?{click:ay,text:ax}:ay;
ay=ak.extend({type:"button"},ay);
az=ay.click;
aA={icon:ay.icon,iconPosition:ay.iconPosition,showLabel:ay.showLabel,icons:ay.icons,text:ay.text};
delete ay.click;
delete ay.icon;
delete ay.iconPosition;
delete ay.showLabel;
delete ay.icons;
if(typeof ay.text==="boolean"){delete ay.text
}ak("<button></button>",ay).button(aA).appendTo(aw.uiButtonSet).on("click",function(){az.apply(aw.element[0],arguments)
})
});
this._addClass(this.uiDialog,"ui-dialog-buttons");
this.uiDialogButtonPane.appendTo(this.uiDialog)
},_makeDraggable:function(){var ax=this,aw=this.options;
function av(ay){return{position:ay.position,offset:ay.offset}
}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(ay,az){ax._addClass(ak(this),"ui-dialog-dragging");
ax._blockFrames();
ax._trigger("dragStart",ay,av(az))
},drag:function(ay,az){ax._trigger("drag",ay,av(az))
},stop:function(ay,az){var aB=az.offset.left-ax.document.scrollLeft(),aA=az.offset.top-ax.document.scrollTop();
aw.position={my:"left top",at:"left"+(aB>=0?"+":"")+aB+" top"+(aA>=0?"+":"")+aA,of:ax.window};
ax._removeClass(ak(this),"ui-dialog-dragging");
ax._unblockFrames();
ax._trigger("dragStop",ay,av(az))
}})
},_makeResizable:function(){var aA=this,ay=this.options,az=ay.resizable,av=this.uiDialog.css("position"),ax=typeof az==="string"?az:"n,e,s,w,se,sw,ne,nw";
function aw(aB){return{originalPosition:aB.originalPosition,originalSize:aB.originalSize,position:aB.position,size:aB.size}
}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:ay.maxWidth,maxHeight:ay.maxHeight,minWidth:ay.minWidth,minHeight:this._minHeight(),handles:ax,start:function(aB,aC){aA._addClass(ak(this),"ui-dialog-resizing");
aA._blockFrames();
aA._trigger("resizeStart",aB,aw(aC))
},resize:function(aB,aC){aA._trigger("resize",aB,aw(aC))
},stop:function(aB,aC){var aF=aA.uiDialog.offset(),aE=aF.left-aA.document.scrollLeft(),aD=aF.top-aA.document.scrollTop();
ay.height=aA.uiDialog.height();
ay.width=aA.uiDialog.width();
ay.position={my:"left top",at:"left"+(aE>=0?"+":"")+aE+" top"+(aD>=0?"+":"")+aD,of:aA.window};
aA._removeClass(ak(this),"ui-dialog-resizing");
aA._unblockFrames();
aA._trigger("resizeStop",aB,aw(aC))
}}).css("position",av)
},_trackFocus:function(){this._on(this.widget(),{focusin:function(av){this._makeFocusTarget();
this._focusedElement=ak(av.target)
}})
},_makeFocusTarget:function(){this._untrackInstance();
this._trackingInstances().unshift(this)
},_untrackInstance:function(){var aw=this._trackingInstances(),av=ak.inArray(this,aw);
if(av!==-1){aw.splice(av,1)
}},_trackingInstances:function(){var av=this.document.data("ui-dialog-instances");
if(!av){av=[];
this.document.data("ui-dialog-instances",av)
}return av
},_minHeight:function(){var av=this.options;
return av.height==="auto"?av.minHeight:Math.min(av.minHeight,av.height)
},_position:function(){var av=this.uiDialog.is(":visible");
if(!av){this.uiDialog.show()
}this.uiDialog.position(this.options.position);
if(!av){this.uiDialog.hide()
}},_setOptions:function(ax){var ay=this,aw=false,av={};
ak.each(ax,function(az,aA){ay._setOption(az,aA);
if(az in ay.sizeRelatedOptions){aw=true
}if(az in ay.resizableRelatedOptions){av[az]=aA
}});
if(aw){this._size();
this._position()
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",av)
}},_setOption:function(ax,ay){var aw,az,av=this.uiDialog;
if(ax==="disabled"){return
}this._super(ax,ay);
if(ax==="appendTo"){this.uiDialog.appendTo(this._appendTo())
}if(ax==="buttons"){this._createButtons()
}if(ax==="closeText"){this.uiDialogTitlebarClose.button({label:ak("<a>").text(""+this.options.closeText).html()})
}if(ax==="draggable"){aw=av.is(":data(ui-draggable)");
if(aw&&!ay){av.draggable("destroy")
}if(!aw&&ay){this._makeDraggable()
}}if(ax==="position"){this._position()
}if(ax==="resizable"){az=av.is(":data(ui-resizable)");
if(az&&!ay){av.resizable("destroy")
}if(az&&typeof ay==="string"){av.resizable("option","handles",ay)
}if(!az&&ay!==false){this._makeResizable()
}}if(ax==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
}},_size:function(){var av,ax,ay,aw=this.options;
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});
if(aw.minWidth>aw.width){aw.width=aw.minWidth
}av=this.uiDialog.css({height:"auto",width:aw.width}).outerHeight();
ax=Math.max(0,aw.minHeight-av);
ay=typeof aw.maxHeight==="number"?Math.max(0,aw.maxHeight-av):"none";
if(aw.height==="auto"){this.element.css({minHeight:ax,maxHeight:ay,height:"auto"})
}else{this.element.height(Math.max(0,aw.height-av))
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())
}},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var av=ak(this);
return ak("<div>").css({position:"absolute",width:av.outerWidth(),height:av.outerHeight()}).appendTo(av.parent()).offset(av.offset())[0]
})
},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();
delete this.iframeBlocks
}},_allowInteraction:function(av){if(ak(av.target).closest(".ui-dialog").length){return true
}return !!ak(av.target).closest(".ui-datepicker").length
},_createOverlay:function(){if(!this.options.modal){return
}var av=true;
this._delay(function(){av=false
});
if(!this.document.data("ui-dialog-overlays")){this._on(this.document,{focusin:function(aw){if(av){return
}if(!this._allowInteraction(aw)){aw.preventDefault();
this._trackingInstances()[0]._focusTabbable()
}}})
}this.overlay=ak("<div>").appendTo(this._appendTo());
this._addClass(this.overlay,null,"ui-widget-overlay ui-front");
this._on(this.overlay,{mousedown:"_keepFocus"});
this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)
},_destroyOverlay:function(){if(!this.options.modal){return
}if(this.overlay){var av=this.document.data("ui-dialog-overlays")-1;
if(!av){this._off(this.document,"focusin");
this.document.removeData("ui-dialog-overlays")
}else{this.document.data("ui-dialog-overlays",av)
}this.overlay.remove();
this.overlay=null
}}});
if(ak.uiBackCompat!==false){ak.widget("ui.dialog",ak.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super();
this.uiDialog.addClass(this.options.dialogClass)
},_setOption:function(av,aw){if(av==="dialogClass"){this.uiDialog.removeClass(this.options.dialogClass).addClass(aw)
}this._superApply(arguments)
}})
}var ac=ak.ui.dialog;
/*!
 * jQuery UI Droppable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
ak.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:true,greedy:false,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var aw,ax=this.options,av=ax.accept;
this.isover=false;
this.isout=true;
this.accept=ak.isFunction(av)?av:function(ay){return ay.is(av)
};
this.proportions=function(){if(arguments.length){aw=arguments[0]
}else{return aw?aw:aw={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}
}};
this._addToManager(ax.scope);
ax.addClasses&&this._addClass("ui-droppable")
},_addToManager:function(av){ak.ui.ddmanager.droppables[av]=ak.ui.ddmanager.droppables[av]||[];
ak.ui.ddmanager.droppables[av].push(this)
},_splice:function(av){var aw=0;
for(;
aw<av.length;
aw++){if(av[aw]===this){av.splice(aw,1)
}}},_destroy:function(){var av=ak.ui.ddmanager.droppables[this.options.scope];
this._splice(av)
},_setOption:function(aw,ax){if(aw==="accept"){this.accept=ak.isFunction(ax)?ax:function(ay){return ay.is(ax)
}
}else{if(aw==="scope"){var av=ak.ui.ddmanager.droppables[this.options.scope];
this._splice(av);
this._addToManager(ax)
}}this._super(aw,ax)
},_activate:function(aw){var av=ak.ui.ddmanager.current;
this._addActiveClass();
if(av){this._trigger("activate",aw,this.ui(av))
}},_deactivate:function(aw){var av=ak.ui.ddmanager.current;
this._removeActiveClass();
if(av){this._trigger("deactivate",aw,this.ui(av))
}},_over:function(aw){var av=ak.ui.ddmanager.current;
if(!av||(av.currentItem||av.element)[0]===this.element[0]){return
}if(this.accept.call(this.element[0],(av.currentItem||av.element))){this._addHoverClass();
this._trigger("over",aw,this.ui(av))
}},_out:function(aw){var av=ak.ui.ddmanager.current;
if(!av||(av.currentItem||av.element)[0]===this.element[0]){return
}if(this.accept.call(this.element[0],(av.currentItem||av.element))){this._removeHoverClass();
this._trigger("out",aw,this.ui(av))
}},_drop:function(aw,ax){var av=ax||ak.ui.ddmanager.current,ay=false;
if(!av||(av.currentItem||av.element)[0]===this.element[0]){return false
}this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var az=ak(this).droppable("instance");
if(az.options.greedy&&!az.options.disabled&&az.options.scope===av.options.scope&&az.accept.call(az.element[0],(av.currentItem||av.element))&&s(av,ak.extend(az,{offset:az.element.offset()}),az.options.tolerance,aw)){ay=true;
return false
}});
if(ay){return false
}if(this.accept.call(this.element[0],(av.currentItem||av.element))){this._removeActiveClass();
this._removeHoverClass();
this._trigger("drop",aw,this.ui(av));
return this.element
}return false
},ui:function(av){return{draggable:(av.currentItem||av.element),helper:av.helper,position:av.position,offset:av.positionAbs}
},_addHoverClass:function(){this._addClass("ui-droppable-hover")
},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")
},_addActiveClass:function(){this._addClass("ui-droppable-active")
},_removeActiveClass:function(){this._removeClass("ui-droppable-active")
}});
var s=ak.ui.intersect=(function(){function av(ax,aw,ay){return(ax>=aw)&&(ax<(aw+ay))
}return function(aH,aB,aF,ax){if(!aB.offset){return false
}var az=(aH.positionAbs||aH.position.absolute).left+aH.margins.left,aE=(aH.positionAbs||aH.position.absolute).top+aH.margins.top,ay=az+aH.helperProportions.width,aD=aE+aH.helperProportions.height,aA=aB.offset.left,aG=aB.offset.top,aw=aA+aB.proportions().width,aC=aG+aB.proportions().height;
switch(aF){case"fit":return(aA<=az&&ay<=aw&&aG<=aE&&aD<=aC);
case"intersect":return(aA<az+(aH.helperProportions.width/2)&&ay-(aH.helperProportions.width/2)<aw&&aG<aE+(aH.helperProportions.height/2)&&aD-(aH.helperProportions.height/2)<aC);
case"pointer":return av(ax.pageY,aG,aB.proportions().height)&&av(ax.pageX,aA,aB.proportions().width);
case"touch":return((aE>=aG&&aE<=aC)||(aD>=aG&&aD<=aC)||(aE<aG&&aD>aC))&&((az>=aA&&az<=aw)||(ay>=aA&&ay<=aw)||(az<aA&&ay>aw));
default:return false
}}
})();
ak.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(ay,aA){var ax,aw,av=ak.ui.ddmanager.droppables[ay.options.scope]||[],az=aA?aA.type:null,aB=(ay.currentItem||ay.element).find(":data(ui-droppable)").addBack();
droppablesLoop:for(ax=0;
ax<av.length;
ax++){if(av[ax].options.disabled||(ay&&!av[ax].accept.call(av[ax].element[0],(ay.currentItem||ay.element)))){continue
}for(aw=0;
aw<aB.length;
aw++){if(aB[aw]===av[ax].element[0]){av[ax].proportions().height=0;
continue droppablesLoop
}}av[ax].visible=av[ax].element.css("display")!=="none";
if(!av[ax].visible){continue
}if(az==="mousedown"){av[ax]._activate.call(av[ax],aA)
}av[ax].offset=av[ax].element.offset();
av[ax].proportions({width:av[ax].element[0].offsetWidth,height:av[ax].element[0].offsetHeight})
}},drop:function(av,aw){var ax=false;
ak.each((ak.ui.ddmanager.droppables[av.options.scope]||[]).slice(),function(){if(!this.options){return
}if(!this.options.disabled&&this.visible&&s(av,this,this.options.tolerance,aw)){ax=this._drop.call(this,aw)||ax
}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(av.currentItem||av.element))){this.isout=true;
this.isover=false;
this._deactivate.call(this,aw)
}});
return ax
},dragStart:function(av,aw){av.element.parentsUntil("body").on("scroll.droppable",function(){if(!av.options.refreshPositions){ak.ui.ddmanager.prepareOffsets(av,aw)
}})
},drag:function(av,aw){if(av.options.refreshPositions){ak.ui.ddmanager.prepareOffsets(av,aw)
}ak.each(ak.ui.ddmanager.droppables[av.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return
}var aA,ay,ax,az=s(av,this,this.options.tolerance,aw),aB=!az&&this.isover?"isout":(az&&!this.isover?"isover":null);
if(!aB){return
}if(this.options.greedy){ay=this.options.scope;
ax=this.element.parents(":data(ui-droppable)").filter(function(){return ak(this).droppable("instance").options.scope===ay
});
if(ax.length){aA=ak(ax[0]).droppable("instance");
aA.greedyChild=(aB==="isover")
}}if(aA&&aB==="isover"){aA.isover=false;
aA.isout=true;
aA._out.call(aA,aw)
}this[aB]=true;
this[aB==="isout"?"isover":"isout"]=false;
this[aB==="isover"?"_over":"_out"].call(this,aw);
if(aA&&aB==="isout"){aA.isout=false;
aA.isover=true;
aA._over.call(aA,aw)
}})
},dragStop:function(av,aw){av.element.parentsUntil("body").off("scroll.droppable");
if(!av.options.refreshPositions){ak.ui.ddmanager.prepareOffsets(av,aw)
}}};
if(ak.uiBackCompat!==false){ak.widget("ui.droppable",ak.ui.droppable,{options:{hoverClass:false,activeClass:false},_addActiveClass:function(){this._super();
if(this.options.activeClass){this.element.addClass(this.options.activeClass)
}},_removeActiveClass:function(){this._super();
if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}},_addHoverClass:function(){this._super();
if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)
}},_removeHoverClass:function(){this._super();
if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}}})
}var W=ak.ui.droppable;
/*!
 * jQuery UI Progressbar 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var Y=ak.widget("ui.progressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue();
this.element.attr({role:"progressbar","aria-valuemin":this.min});
this._addClass("ui-progressbar","ui-widget ui-widget-content");
this.valueDiv=ak("<div>").appendTo(this.element);
this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header");
this._refreshValue()
},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow");
this.valueDiv.remove()
},value:function(av){if(av===undefined){return this.options.value
}this.options.value=this._constrainedValue(av);
this._refreshValue()
},_constrainedValue:function(av){if(av===undefined){av=this.options.value
}this.indeterminate=av===false;
if(typeof av!=="number"){av=0
}return this.indeterminate?false:Math.min(this.options.max,Math.max(this.min,av))
},_setOptions:function(av){var aw=av.value;
delete av.value;
this._super(av);
this.options.value=this._constrainedValue(aw);
this._refreshValue()
},_setOption:function(av,aw){if(av==="max"){aw=Math.max(this.min,aw)
}this._super(av,aw)
},_setOptionDisabled:function(av){this._super(av);
this.element.attr("aria-disabled",av);
this._toggleClass(null,"ui-state-disabled",!!av)
},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)
},_refreshValue:function(){var aw=this.options.value,av=this._percentage();
this.valueDiv.toggle(this.indeterminate||aw>this.min).width(av.toFixed(0)+"%");
this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,aw===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate);
if(this.indeterminate){this.element.removeAttr("aria-valuenow");
if(!this.overlayDiv){this.overlayDiv=ak("<div>").appendTo(this.valueDiv);
this._addClass(this.overlayDiv,"ui-progressbar-overlay")
}}else{this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":aw});
if(this.overlayDiv){this.overlayDiv.remove();
this.overlayDiv=null
}}if(this.oldValue!==aw){this.oldValue=aw;
this._trigger("change")
}if(aw===this.options.max){this._trigger("complete")
}}});
/*!
 * jQuery UI Selectable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var r=ak.widget("ui.selectable",ak.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var av=this;
this._addClass("ui-selectable");
this.dragged=false;
this.refresh=function(){av.elementPos=ak(av.element[0]).offset();
av.selectees=ak(av.options.filter,av.element[0]);
av._addClass(av.selectees,"ui-selectee");
av.selectees.each(function(){var ax=ak(this),aw=ax.offset(),ay={left:aw.left-av.elementPos.left,top:aw.top-av.elementPos.top};
ak.data(this,"selectable-item",{element:this,$element:ax,left:ay.left,top:ay.top,right:ay.left+ax.outerWidth(),bottom:ay.top+ax.outerHeight(),startselected:false,selected:ax.hasClass("ui-selected"),selecting:ax.hasClass("ui-selecting"),unselecting:ax.hasClass("ui-unselecting")})
})
};
this.refresh();
this._mouseInit();
this.helper=ak("<div>");
this._addClass(this.helper,"ui-selectable-helper")
},_destroy:function(){this.selectees.removeData("selectable-item");
this._mouseDestroy()
},_mouseStart:function(ax){var aw=this,av=this.options;
this.opos=[ax.pageX,ax.pageY];
this.elementPos=ak(this.element[0]).offset();
if(this.options.disabled){return
}this.selectees=ak(av.filter,this.element[0]);
this._trigger("start",ax);
ak(av.appendTo).append(this.helper);
this.helper.css({left:ax.pageX,top:ax.pageY,width:0,height:0});
if(av.autoRefresh){this.refresh()
}this.selectees.filter(".ui-selected").each(function(){var ay=ak.data(this,"selectable-item");
ay.startselected=true;
if(!ax.metaKey&&!ax.ctrlKey){aw._removeClass(ay.$element,"ui-selected");
ay.selected=false;
aw._addClass(ay.$element,"ui-unselecting");
ay.unselecting=true;
aw._trigger("unselecting",ax,{unselecting:ay.element})
}});
ak(ax.target).parents().addBack().each(function(){var ay,az=ak.data(this,"selectable-item");
if(az){ay=(!ax.metaKey&&!ax.ctrlKey)||!az.$element.hasClass("ui-selected");
aw._removeClass(az.$element,ay?"ui-unselecting":"ui-selected")._addClass(az.$element,ay?"ui-selecting":"ui-unselecting");
az.unselecting=!ay;
az.selecting=ay;
az.selected=ay;
if(ay){aw._trigger("selecting",ax,{selecting:az.element})
}else{aw._trigger("unselecting",ax,{unselecting:az.element})
}return false
}})
},_mouseDrag:function(aC){this.dragged=true;
if(this.options.disabled){return
}var az,aB=this,ax=this.options,aw=this.opos[0],aA=this.opos[1],av=aC.pageX,ay=aC.pageY;
if(aw>av){az=av;
av=aw;
aw=az
}if(aA>ay){az=ay;
ay=aA;
aA=az
}this.helper.css({left:aw,top:aA,width:av-aw,height:ay-aA});
this.selectees.each(function(){var aD=ak.data(this,"selectable-item"),aE=false,aF={};
if(!aD||aD.element===aB.element[0]){return
}aF.left=aD.left+aB.elementPos.left;
aF.right=aD.right+aB.elementPos.left;
aF.top=aD.top+aB.elementPos.top;
aF.bottom=aD.bottom+aB.elementPos.top;
if(ax.tolerance==="touch"){aE=(!(aF.left>av||aF.right<aw||aF.top>ay||aF.bottom<aA))
}else{if(ax.tolerance==="fit"){aE=(aF.left>aw&&aF.right<av&&aF.top>aA&&aF.bottom<ay)
}}if(aE){if(aD.selected){aB._removeClass(aD.$element,"ui-selected");
aD.selected=false
}if(aD.unselecting){aB._removeClass(aD.$element,"ui-unselecting");
aD.unselecting=false
}if(!aD.selecting){aB._addClass(aD.$element,"ui-selecting");
aD.selecting=true;
aB._trigger("selecting",aC,{selecting:aD.element})
}}else{if(aD.selecting){if((aC.metaKey||aC.ctrlKey)&&aD.startselected){aB._removeClass(aD.$element,"ui-selecting");
aD.selecting=false;
aB._addClass(aD.$element,"ui-selected");
aD.selected=true
}else{aB._removeClass(aD.$element,"ui-selecting");
aD.selecting=false;
if(aD.startselected){aB._addClass(aD.$element,"ui-unselecting");
aD.unselecting=true
}aB._trigger("unselecting",aC,{unselecting:aD.element})
}}if(aD.selected){if(!aC.metaKey&&!aC.ctrlKey&&!aD.startselected){aB._removeClass(aD.$element,"ui-selected");
aD.selected=false;
aB._addClass(aD.$element,"ui-unselecting");
aD.unselecting=true;
aB._trigger("unselecting",aC,{unselecting:aD.element})
}}}});
return false
},_mouseStop:function(aw){var av=this;
this.dragged=false;
ak(".ui-unselecting",this.element[0]).each(function(){var ax=ak.data(this,"selectable-item");
av._removeClass(ax.$element,"ui-unselecting");
ax.unselecting=false;
ax.startselected=false;
av._trigger("unselected",aw,{unselected:ax.element})
});
ak(".ui-selecting",this.element[0]).each(function(){var ax=ak.data(this,"selectable-item");
av._removeClass(ax.$element,"ui-selecting")._addClass(ax.$element,"ui-selected");
ax.selecting=false;
ax.selected=true;
ax.startselected=true;
av._trigger("selected",aw,{selected:ax.element})
});
this._trigger("stop",aw);
this.helper.remove();
return false
}});
/*!
 * jQuery UI Selectmenu 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var e=ak.widget("ui.selectmenu",[ak.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:false,change:null,close:null,focus:null,open:null,select:null},_create:function(){var av=this.element.uniqueId().attr("id");
this.ids={element:av,button:av+"-button",menu:av+"-menu"};
this._drawButton();
this._drawMenu();
this._bindFormResetHandler();
this._rendered=false;
this.menuItems=ak()
},_drawButton:function(){var av,ax=this,aw=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);
this.labels=this.element.labels().attr("for",this.ids.button);
this._on(this.labels,{click:function(ay){this.button.focus();
ay.preventDefault()
}});
this.element.hide();
this.button=ak("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element);
this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget");
av=ak("<span>").appendTo(this.button);
this._addClass(av,"ui-selectmenu-icon","ui-icon "+this.options.icons.button);
this.buttonItem=this._renderButtonItem(aw).appendTo(this.button);
if(this.options.width!==false){this._resizeButton()
}this._on(this.button,this._buttonEvents);
this.button.one("focusin",function(){if(!ax._rendered){ax._refreshMenu()
}})
},_drawMenu:function(){var av=this;
this.menu=ak("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu});
this.menuWrap=ak("<div>").append(this.menu);
this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front");
this.menuWrap.appendTo(this._appendTo());
this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(aw,ax){aw.preventDefault();
av._setSelection();
av._select(ax.item.data("ui-selectmenu-item"),aw)
},focus:function(ax,ay){var aw=ay.item.data("ui-selectmenu-item");
if(av.focusIndex!=null&&aw.index!==av.focusIndex){av._trigger("focus",ax,{item:aw});
if(!av.isOpen){av._select(aw,ax)
}}av.focusIndex=aw.index;
av.button.attr("aria-activedescendant",av.menuItems.eq(aw.index).attr("id"))
}}).menu("instance");
this.menuInstance._off(this.menu,"mouseleave");
this.menuInstance._closeOnDocumentClick=function(){return false
};
this.menuInstance._isDivider=function(){return false
}
},refresh:function(){this._refreshMenu();
this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{}));
if(this.options.width===null){this._resizeButton()
}},_refreshMenu:function(){var aw,av=this.element.find("option");
this.menu.empty();
this._parseOptions(av);
this._renderMenu(this.menu,this.items);
this.menuInstance.refresh();
this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper");
this._rendered=true;
if(!av.length){return
}aw=this._getSelectedItem();
this.menuInstance.focus(null,aw);
this._setAria(aw.data("ui-selectmenu-item"));
this._setOption("disabled",this.element.prop("disabled"))
},open:function(av){if(this.options.disabled){return
}if(!this._rendered){this._refreshMenu()
}else{this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active");
this.menuInstance.focus(null,this._getSelectedItem())
}if(!this.menuItems.length){return
}this.isOpen=true;
this._toggleAttr();
this._resizeMenu();
this._position();
this._on(this.document,this._documentClick);
this._trigger("open",av)
},_position:function(){this.menuWrap.position(ak.extend({of:this.button},this.options.position))
},close:function(av){if(!this.isOpen){return
}this.isOpen=false;
this._toggleAttr();
this.range=null;
this._off(this.document);
this._trigger("close",av)
},widget:function(){return this.button
},menuWidget:function(){return this.menu
},_renderButtonItem:function(aw){var av=ak("<span>");
this._setText(av,aw.label);
this._addClass(av,"ui-selectmenu-text");
return av
},_renderMenu:function(ax,aw){var ay=this,av="";
ak.each(aw,function(aA,aB){var az;
if(aB.optgroup!==av){az=ak("<li>",{text:aB.optgroup});
ay._addClass(az,"ui-selectmenu-optgroup","ui-menu-divider"+(aB.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""));
az.appendTo(ax);
av=aB.optgroup
}ay._renderItemData(ax,aB)
})
},_renderItemData:function(av,aw){return this._renderItem(av,aw).data("ui-selectmenu-item",aw)
},_renderItem:function(aw,ax){var av=ak("<li>"),ay=ak("<div>",{title:ax.element.attr("title")});
if(ax.disabled){this._addClass(av,null,"ui-state-disabled")
}this._setText(ay,ax.label);
return av.append(ay).appendTo(aw)
},_setText:function(av,aw){if(aw){av.text(aw)
}else{av.html("&#160;")
}},_move:function(az,ay){var ax,aw,av=".ui-menu-item";
if(this.isOpen){ax=this.menuItems.eq(this.focusIndex).parent("li")
}else{ax=this.menuItems.eq(this.element[0].selectedIndex).parent("li");
av+=":not(.ui-state-disabled)"
}if(az==="first"||az==="last"){aw=ax[az==="first"?"prevAll":"nextAll"](av).eq(-1)
}else{aw=ax[az+"All"](av).eq(0)
}if(aw.length){this.menuInstance.focus(ay,aw)
}},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
},_toggle:function(av){this[this.isOpen?"close":"open"](av)
},_setSelection:function(){var av;
if(!this.range){return
}if(window.getSelection){av=window.getSelection();
av.removeAllRanges();
av.addRange(this.range)
}else{this.range.select()
}this.button.focus()
},_documentClick:{mousedown:function(av){if(!this.isOpen){return
}if(!ak(av.target).closest(".ui-selectmenu-menu, #"+ak.ui.escapeSelector(this.ids.button)).length){this.close(av)
}}},_buttonEvents:{mousedown:function(){var av;
if(window.getSelection){av=window.getSelection();
if(av.rangeCount){this.range=av.getRangeAt(0)
}}else{this.range=document.selection.createRange()
}},click:function(av){this._setSelection();
this._toggle(av)
},keydown:function(aw){var av=true;
switch(aw.keyCode){case ak.ui.keyCode.TAB:case ak.ui.keyCode.ESCAPE:this.close(aw);
av=false;
break;
case ak.ui.keyCode.ENTER:if(this.isOpen){this._selectFocusedItem(aw)
}break;
case ak.ui.keyCode.UP:if(aw.altKey){this._toggle(aw)
}else{this._move("prev",aw)
}break;
case ak.ui.keyCode.DOWN:if(aw.altKey){this._toggle(aw)
}else{this._move("next",aw)
}break;
case ak.ui.keyCode.SPACE:if(this.isOpen){this._selectFocusedItem(aw)
}else{this._toggle(aw)
}break;
case ak.ui.keyCode.LEFT:this._move("prev",aw);
break;
case ak.ui.keyCode.RIGHT:this._move("next",aw);
break;
case ak.ui.keyCode.HOME:case ak.ui.keyCode.PAGE_UP:this._move("first",aw);
break;
case ak.ui.keyCode.END:case ak.ui.keyCode.PAGE_DOWN:this._move("last",aw);
break;
default:this.menu.trigger(aw);
av=false
}if(av){aw.preventDefault()
}}},_selectFocusedItem:function(aw){var av=this.menuItems.eq(this.focusIndex).parent("li");
if(!av.hasClass("ui-state-disabled")){this._select(av.data("ui-selectmenu-item"),aw)
}},_select:function(aw,av){var ax=this.element[0].selectedIndex;
this.element[0].selectedIndex=aw.index;
this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(aw));
this._setAria(aw);
this._trigger("select",av,{item:aw});
if(aw.index!==ax){this._trigger("change",av,{item:aw})
}this.close(av)
},_setAria:function(av){var aw=this.menuItems.eq(av.index).attr("id");
this.button.attr({"aria-labelledby":aw,"aria-activedescendant":aw});
this.menu.attr("aria-activedescendant",aw)
},_setOption:function(av,ax){if(av==="icons"){var aw=this.button.find("span.ui-icon");
this._removeClass(aw,null,this.options.icons.button)._addClass(aw,null,ax.button)
}this._super(av,ax);
if(av==="appendTo"){this.menuWrap.appendTo(this._appendTo())
}if(av==="width"){this._resizeButton()
}},_setOptionDisabled:function(av){this._super(av);
this.menuInstance.option("disabled",av);
this.button.attr("aria-disabled",av);
this._toggleClass(this.button,null,"ui-state-disabled",av);
this.element.prop("disabled",av);
if(av){this.button.attr("tabindex",-1);
this.close()
}else{this.button.attr("tabindex",0)
}},_appendTo:function(){var av=this.options.appendTo;
if(av){av=av.jquery||av.nodeType?ak(av):this.document.find(av).eq(0)
}if(!av||!av[0]){av=this.element.closest(".ui-front, dialog")
}if(!av.length){av=this.document[0].body
}return av
},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen);
this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen);
this.menu.attr("aria-hidden",!this.isOpen)
},_resizeButton:function(){var av=this.options.width;
if(av===false){this.button.css("width","");
return
}if(av===null){av=this.element.show().outerWidth();
this.element.hide()
}this.button.outerWidth(av)
},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))
},_getCreateOptions:function(){var av=this._super();
av.disabled=this.element.prop("disabled");
return av
},_parseOptions:function(av){var aw=this,ax=[];
av.each(function(ay,az){ax.push(aw._parseOption(ak(az),ay))
});
this.items=ax
},_parseOption:function(ax,aw){var av=ax.parent("optgroup");
return{element:ax,index:aw,value:ax.val(),label:ax.text(),optgroup:av.attr("label")||"",disabled:av.prop("disabled")||ax.prop("disabled")}
},_destroy:function(){this._unbindFormResetHandler();
this.menuWrap.remove();
this.button.remove();
this.element.show();
this.element.removeUniqueId();
this.labels.attr("for",this.ids.element)
}}]);
/*!
 * jQuery UI Slider 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var Q=ak.widget("ui.slider",ak.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:false,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=false;
this._mouseSliding=false;
this._animateOff=true;
this._handleIndex=null;
this._detectOrientation();
this._mouseInit();
this._calculateNewMax();
this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content");
this._refresh();
this._animateOff=false
},_refresh:function(){this._createRange();
this._createHandles();
this._setupEvents();
this._refreshValue()
},_createHandles:function(){var ay,av,aw=this.options,aA=this.element.find(".ui-slider-handle"),az="<span tabindex='0'></span>",ax=[];
av=(aw.values&&aw.values.length)||1;
if(aA.length>av){aA.slice(av).remove();
aA=aA.slice(0,av)
}for(ay=aA.length;
ay<av;
ay++){ax.push(az)
}this.handles=aA.add(ak(ax.join("")).appendTo(this.element));
this._addClass(this.handles,"ui-slider-handle","ui-state-default");
this.handle=this.handles.eq(0);
this.handles.each(function(aB){ak(this).data("ui-slider-handle-index",aB).attr("tabIndex",0)
})
},_createRange:function(){var av=this.options;
if(av.range){if(av.range===true){if(!av.values){av.values=[this._valueMin(),this._valueMin()]
}else{if(av.values.length&&av.values.length!==2){av.values=[av.values[0],av.values[0]]
}else{if(ak.isArray(av.values)){av.values=av.values.slice(0)
}}}}if(!this.range||!this.range.length){this.range=ak("<div>").appendTo(this.element);
this._addClass(this.range,"ui-slider-range")
}else{this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max");
this.range.css({left:"",bottom:""})
}if(av.range==="min"||av.range==="max"){this._addClass(this.range,"ui-slider-range-"+av.range)
}}else{if(this.range){this.range.remove()
}this.range=null
}},_setupEvents:function(){this._off(this.handles);
this._on(this.handles,this._handleEvents);
this._hoverable(this.handles);
this._focusable(this.handles)
},_destroy:function(){this.handles.remove();
if(this.range){this.range.remove()
}this._mouseDestroy()
},_mouseCapture:function(ax){var aB,aE,aw,az,aD,aF,aA,av,aC=this,ay=this.options;
if(ay.disabled){return false
}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};
this.elementOffset=this.element.offset();
aB={x:ax.pageX,y:ax.pageY};
aE=this._normValueFromMouse(aB);
aw=this._valueMax()-this._valueMin()+1;
this.handles.each(function(aG){var aH=Math.abs(aE-aC.values(aG));
if((aw>aH)||(aw===aH&&(aG===aC._lastChangedValue||aC.values(aG)===ay.min))){aw=aH;
az=ak(this);
aD=aG
}});
aF=this._start(ax,aD);
if(aF===false){return false
}this._mouseSliding=true;
this._handleIndex=aD;
this._addClass(az,null,"ui-state-active");
az.trigger("focus");
aA=az.offset();
av=!ak(ax.target).parents().addBack().is(".ui-slider-handle");
this._clickOffset=av?{left:0,top:0}:{left:ax.pageX-aA.left-(az.width()/2),top:ax.pageY-aA.top-(az.height()/2)-(parseInt(az.css("borderTopWidth"),10)||0)-(parseInt(az.css("borderBottomWidth"),10)||0)+(parseInt(az.css("marginTop"),10)||0)};
if(!this.handles.hasClass("ui-state-hover")){this._slide(ax,aD,aE)
}this._animateOff=true;
return true
},_mouseStart:function(){return true
},_mouseDrag:function(ax){var av={x:ax.pageX,y:ax.pageY},aw=this._normValueFromMouse(av);
this._slide(ax,this._handleIndex,aw);
return false
},_mouseStop:function(av){this._removeClass(this.handles,null,"ui-state-active");
this._mouseSliding=false;
this._stop(av,this._handleIndex);
this._change(av,this._handleIndex);
this._handleIndex=null;
this._clickOffset=null;
this._animateOff=false;
return false
},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"
},_normValueFromMouse:function(aw){var av,az,ay,ax,aA;
if(this.orientation==="horizontal"){av=this.elementSize.width;
az=aw.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)
}else{av=this.elementSize.height;
az=aw.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)
}ay=(az/av);
if(ay>1){ay=1
}if(ay<0){ay=0
}if(this.orientation==="vertical"){ay=1-ay
}ax=this._valueMax()-this._valueMin();
aA=this._valueMin()+ay*ax;
return this._trimAlignValue(aA)
},_uiHash:function(ax,ay,av){var aw={handle:this.handles[ax],handleIndex:ax,value:ay!==undefined?ay:this.value()};
if(this._hasMultipleValues()){aw.value=ay!==undefined?ay:this.values(ax);
aw.values=av||this.values()
}return aw
},_hasMultipleValues:function(){return this.options.values&&this.options.values.length
},_start:function(aw,av){return this._trigger("start",aw,this._uiHash(av))
},_slide:function(aA,ay,ax){var aB,av,az=this.value(),aw=this.values();
if(this._hasMultipleValues()){av=this.values(ay?0:1);
az=this.values(ay);
if(this.options.values.length===2&&this.options.range===true){ax=ay===0?Math.min(av,ax):Math.max(av,ax)
}aw[ay]=ax
}if(ax===az){return
}aB=this._trigger("slide",aA,this._uiHash(ay,ax,aw));
if(aB===false){return
}if(this._hasMultipleValues()){this.values(ay,ax)
}else{this.value(ax)
}},_stop:function(aw,av){this._trigger("stop",aw,this._uiHash(av))
},_change:function(aw,av){if(!this._keySliding&&!this._mouseSliding){this._lastChangedValue=av;
this._trigger("change",aw,this._uiHash(av))
}},value:function(av){if(arguments.length){this.options.value=this._trimAlignValue(av);
this._refreshValue();
this._change(null,0);
return
}return this._value()
},values:function(aw,az){var ay,av,ax;
if(arguments.length>1){this.options.values[aw]=this._trimAlignValue(az);
this._refreshValue();
this._change(null,aw);
return
}if(arguments.length){if(ak.isArray(arguments[0])){ay=this.options.values;
av=arguments[0];
for(ax=0;
ax<ay.length;
ax+=1){ay[ax]=this._trimAlignValue(av[ax]);
this._change(null,ax)
}this._refreshValue()
}else{if(this._hasMultipleValues()){return this._values(aw)
}else{return this.value()
}}}else{return this._values()
}},_setOption:function(aw,ax){var av,ay=0;
if(aw==="range"&&this.options.range===true){if(ax==="min"){this.options.value=this._values(0);
this.options.values=null
}else{if(ax==="max"){this.options.value=this._values(this.options.values.length-1);
this.options.values=null
}}}if(ak.isArray(this.options.values)){ay=this.options.values.length
}this._super(aw,ax);
switch(aw){case"orientation":this._detectOrientation();
this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation);
this._refreshValue();
if(this.options.range){this._refreshRange(ax)
}this.handles.css(ax==="horizontal"?"bottom":"left","");
break;
case"value":this._animateOff=true;
this._refreshValue();
this._change(null,0);
this._animateOff=false;
break;
case"values":this._animateOff=true;
this._refreshValue();
for(av=ay-1;
av>=0;
av--){this._change(null,av)
}this._animateOff=false;
break;
case"step":case"min":case"max":this._animateOff=true;
this._calculateNewMax();
this._refreshValue();
this._animateOff=false;
break;
case"range":this._animateOff=true;
this._refresh();
this._animateOff=false;
break
}},_setOptionDisabled:function(av){this._super(av);
this._toggleClass(null,"ui-state-disabled",!!av)
},_value:function(){var av=this.options.value;
av=this._trimAlignValue(av);
return av
},_values:function(av){var ay,ax,aw;
if(arguments.length){ay=this.options.values[av];
ay=this._trimAlignValue(ay);
return ay
}else{if(this._hasMultipleValues()){ax=this.options.values.slice();
for(aw=0;
aw<ax.length;
aw+=1){ax[aw]=this._trimAlignValue(ax[aw])
}return ax
}else{return[]
}}},_trimAlignValue:function(ay){if(ay<=this._valueMin()){return this._valueMin()
}if(ay>=this._valueMax()){return this._valueMax()
}var av=(this.options.step>0)?this.options.step:1,ax=(ay-this._valueMin())%av,aw=ay-ax;
if(Math.abs(ax)*2>=av){aw+=(ax>0)?av:(-av)
}return parseFloat(aw.toFixed(5))
},_calculateNewMax:function(){var av=this.options.max,aw=this._valueMin(),ax=this.options.step,ay=Math.round((av-aw)/ax)*ax;
av=ay+aw;
if(av>this.options.max){av-=ax
}this.max=parseFloat(av.toFixed(this._precision()))
},_precision:function(){var av=this._precisionOf(this.options.step);
if(this.options.min!==null){av=Math.max(av,this._precisionOf(this.options.min))
}return av
},_precisionOf:function(aw){var ax=aw.toString(),av=ax.indexOf(".");
return av===-1?0:ax.length-av-1
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.max
},_refreshRange:function(av){if(av==="vertical"){this.range.css({width:"",left:""})
}if(av==="horizontal"){this.range.css({height:"",bottom:""})
}},_refreshValue:function(){var aA,az,aD,aB,aE,ay=this.options.range,ax=this.options,aC=this,aw=(!this._animateOff)?ax.animate:false,av={};
if(this._hasMultipleValues()){this.handles.each(function(aF){az=(aC.values(aF)-aC._valueMin())/(aC._valueMax()-aC._valueMin())*100;
av[aC.orientation==="horizontal"?"left":"bottom"]=az+"%";
ak(this).stop(1,1)[aw?"animate":"css"](av,ax.animate);
if(aC.options.range===true){if(aC.orientation==="horizontal"){if(aF===0){aC.range.stop(1,1)[aw?"animate":"css"]({left:az+"%"},ax.animate)
}if(aF===1){aC.range[aw?"animate":"css"]({width:(az-aA)+"%"},{queue:false,duration:ax.animate})
}}else{if(aF===0){aC.range.stop(1,1)[aw?"animate":"css"]({bottom:(az)+"%"},ax.animate)
}if(aF===1){aC.range[aw?"animate":"css"]({height:(az-aA)+"%"},{queue:false,duration:ax.animate})
}}}aA=az
})
}else{aD=this.value();
aB=this._valueMin();
aE=this._valueMax();
az=(aE!==aB)?(aD-aB)/(aE-aB)*100:0;
av[this.orientation==="horizontal"?"left":"bottom"]=az+"%";
this.handle.stop(1,1)[aw?"animate":"css"](av,ax.animate);
if(ay==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[aw?"animate":"css"]({width:az+"%"},ax.animate)
}if(ay==="max"&&this.orientation==="horizontal"){this.range.stop(1,1)[aw?"animate":"css"]({width:(100-az)+"%"},ax.animate)
}if(ay==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[aw?"animate":"css"]({height:az+"%"},ax.animate)
}if(ay==="max"&&this.orientation==="vertical"){this.range.stop(1,1)[aw?"animate":"css"]({height:(100-az)+"%"},ax.animate)
}}},_handleEvents:{keydown:function(az){var aA,ax,aw,ay,av=ak(az.target).data("ui-slider-handle-index");
switch(az.keyCode){case ak.ui.keyCode.HOME:case ak.ui.keyCode.END:case ak.ui.keyCode.PAGE_UP:case ak.ui.keyCode.PAGE_DOWN:case ak.ui.keyCode.UP:case ak.ui.keyCode.RIGHT:case ak.ui.keyCode.DOWN:case ak.ui.keyCode.LEFT:az.preventDefault();
if(!this._keySliding){this._keySliding=true;
this._addClass(ak(az.target),null,"ui-state-active");
aA=this._start(az,av);
if(aA===false){return
}}break
}ay=this.options.step;
if(this._hasMultipleValues()){ax=aw=this.values(av)
}else{ax=aw=this.value()
}switch(az.keyCode){case ak.ui.keyCode.HOME:aw=this._valueMin();
break;
case ak.ui.keyCode.END:aw=this._valueMax();
break;
case ak.ui.keyCode.PAGE_UP:aw=this._trimAlignValue(ax+((this._valueMax()-this._valueMin())/this.numPages));
break;
case ak.ui.keyCode.PAGE_DOWN:aw=this._trimAlignValue(ax-((this._valueMax()-this._valueMin())/this.numPages));
break;
case ak.ui.keyCode.UP:case ak.ui.keyCode.RIGHT:if(ax===this._valueMax()){return
}aw=this._trimAlignValue(ax+ay);
break;
case ak.ui.keyCode.DOWN:case ak.ui.keyCode.LEFT:if(ax===this._valueMin()){return
}aw=this._trimAlignValue(ax-ay);
break
}this._slide(az,av,aw)
},keyup:function(aw){var av=ak(aw.target).data("ui-slider-handle-index");
if(this._keySliding){this._keySliding=false;
this._stop(aw,av);
this._change(aw,av);
this._removeClass(ak(aw.target),null,"ui-state-active")
}}}});
/*!
 * jQuery UI Sortable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var T=ak.widget("ui.sortable",ak.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(aw,av,ax){return(aw>=av)&&(aw<(av+ax))
},_isFloating:function(av){return(/left|right/).test(av.css("float"))||(/inline|table-cell/).test(av.css("display"))
},_create:function(){this.containerCache={};
this._addClass("ui-sortable");
this.refresh();
this.offset=this.element.offset();
this._mouseInit();
this._setHandleClassName();
this.ready=true
},_setOption:function(av,aw){this._super(av,aw);
if(av==="handle"){this._setHandleClassName()
}},_setHandleClassName:function(){var av=this;
this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle");
ak.each(this.items,function(){av._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")
})
},_destroy:function(){this._mouseDestroy();
for(var av=this.items.length-1;
av>=0;
av--){this.items[av].item.removeData(this.widgetName+"-item")
}return this
},_mouseCapture:function(ax,ay){var av=null,az=false,aw=this;
if(this.reverting){return false
}if(this.options.disabled||this.options.type==="static"){return false
}this._refreshItems(ax);
ak(ax.target).parents().each(function(){if(ak.data(this,aw.widgetName+"-item")===aw){av=ak(this);
return false
}});
if(ak.data(ax.target,aw.widgetName+"-item")===aw){av=ak(ax.target)
}if(!av){return false
}if(this.options.handle&&!ay){ak(this.options.handle,av).find("*").addBack().each(function(){if(this===ax.target){az=true
}});
if(!az){return false
}}this.currentItem=av;
this._removeCurrentsFromItems();
return true
},_mouseStart:function(ay,az,aw){var ax,av,aA=this.options;
this.currentContainer=this;
this.refreshPositions();
this.helper=this._createHelper(ay);
this._cacheHelperProportions();
this._cacheMargins();
this.scrollParent=this.helper.scrollParent();
this.offset=this.currentItem.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
ak.extend(this.offset,{click:{left:ay.pageX-this.offset.left,top:ay.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.helper.css("position","absolute");
this.cssPosition=this.helper.css("position");
this.originalPosition=this._generatePosition(ay);
this.originalPageX=ay.pageX;
this.originalPageY=ay.pageY;
(aA.cursorAt&&this._adjustOffsetFromHelper(aA.cursorAt));
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide()
}this._createPlaceholder();
if(aA.containment){this._setContainment()
}if(aA.cursor&&aA.cursor!=="auto"){av=this.document.find("body");
this.storedCursor=av.css("cursor");
av.css("cursor",aA.cursor);
this.storedStylesheet=ak("<style>*{ cursor: "+aA.cursor+" !important; }</style>").appendTo(av)
}if(aA.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")
}this.helper.css("opacity",aA.opacity)
}if(aA.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")
}this.helper.css("zIndex",aA.zIndex)
}if(this.scrollParent[0]!==this.document[0]&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset()
}this._trigger("start",ay,this._uiHash());
if(!this._preserveHelperProportions){this._cacheHelperProportions()
}if(!aw){for(ax=this.containers.length-1;
ax>=0;
ax--){this.containers[ax]._trigger("activate",ay,this._uiHash(this))
}}if(ak.ui.ddmanager){ak.ui.ddmanager.current=this
}if(ak.ui.ddmanager&&!aA.dropBehaviour){ak.ui.ddmanager.prepareOffsets(this,ay)
}this.dragging=true;
this._addClass(this.helper,"ui-sortable-helper");
this._mouseDrag(ay);
return true
},_mouseDrag:function(az){var ax,ay,aw,aB,aA=this.options,av=false;
this.position=this._generatePosition(az);
this.positionAbs=this._convertPositionTo("absolute");
if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs
}if(this.options.scroll){if(this.scrollParent[0]!==this.document[0]&&this.scrollParent[0].tagName!=="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-az.pageY<aA.scrollSensitivity){this.scrollParent[0].scrollTop=av=this.scrollParent[0].scrollTop+aA.scrollSpeed
}else{if(az.pageY-this.overflowOffset.top<aA.scrollSensitivity){this.scrollParent[0].scrollTop=av=this.scrollParent[0].scrollTop-aA.scrollSpeed
}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-az.pageX<aA.scrollSensitivity){this.scrollParent[0].scrollLeft=av=this.scrollParent[0].scrollLeft+aA.scrollSpeed
}else{if(az.pageX-this.overflowOffset.left<aA.scrollSensitivity){this.scrollParent[0].scrollLeft=av=this.scrollParent[0].scrollLeft-aA.scrollSpeed
}}}else{if(az.pageY-this.document.scrollTop()<aA.scrollSensitivity){av=this.document.scrollTop(this.document.scrollTop()-aA.scrollSpeed)
}else{if(this.window.height()-(az.pageY-this.document.scrollTop())<aA.scrollSensitivity){av=this.document.scrollTop(this.document.scrollTop()+aA.scrollSpeed)
}}if(az.pageX-this.document.scrollLeft()<aA.scrollSensitivity){av=this.document.scrollLeft(this.document.scrollLeft()-aA.scrollSpeed)
}else{if(this.window.width()-(az.pageX-this.document.scrollLeft())<aA.scrollSensitivity){av=this.document.scrollLeft(this.document.scrollLeft()+aA.scrollSpeed)
}}}if(av!==false&&ak.ui.ddmanager&&!aA.dropBehaviour){ak.ui.ddmanager.prepareOffsets(this,az)
}}this.positionAbs=this._convertPositionTo("absolute");
if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"
}for(ax=this.items.length-1;
ax>=0;
ax--){ay=this.items[ax];
aw=ay.item[0];
aB=this._intersectsWithPointer(ay);
if(!aB){continue
}if(ay.instance!==this.currentContainer){continue
}if(aw!==this.currentItem[0]&&this.placeholder[aB===1?"next":"prev"]()[0]!==aw&&!ak.contains(this.placeholder[0],aw)&&(this.options.type==="semi-dynamic"?!ak.contains(this.element[0],aw):true)){this.direction=aB===1?"down":"up";
if(this.options.tolerance==="pointer"||this._intersectsWithSides(ay)){this._rearrange(az,ay)
}else{break
}this._trigger("change",az,this._uiHash());
break
}}this._contactContainers(az);
if(ak.ui.ddmanager){ak.ui.ddmanager.drag(this,az)
}this._trigger("sort",az,this._uiHash());
this.lastPositionAbs=this.positionAbs;
return false
},_mouseStop:function(ax,az){if(!ax){return
}if(ak.ui.ddmanager&&!this.options.dropBehaviour){ak.ui.ddmanager.drop(this,ax)
}if(this.options.revert){var aw=this,aA=this.placeholder.offset(),av=this.options.axis,ay={};
if(!av||av==="x"){ay.left=aA.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)
}if(!av||av==="y"){ay.top=aA.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)
}this.reverting=true;
ak(this.helper).animate(ay,parseInt(this.options.revert,10)||500,function(){aw._clear(ax)
})
}else{this._clear(ax,az)
}return false
},cancel:function(){if(this.dragging){this._mouseUp(new ak.Event("mouseup",{target:null}));
if(this.options.helper==="original"){this.currentItem.css(this._storedCSS);
this._removeClass(this.currentItem,"ui-sortable-helper")
}else{this.currentItem.show()
}for(var av=this.containers.length-1;
av>=0;
av--){this.containers[av]._trigger("deactivate",null,this._uiHash(this));
if(this.containers[av].containerCache.over){this.containers[av]._trigger("out",null,this._uiHash(this));
this.containers[av].containerCache.over=0
}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])
}if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()
}ak.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});
if(this.domPosition.prev){ak(this.domPosition.prev).after(this.currentItem)
}else{ak(this.domPosition.parent).prepend(this.currentItem)
}}return this
},serialize:function(ax){var av=this._getItemsAsjQuery(ax&&ax.connected),aw=[];
ax=ax||{};
ak(av).each(function(){var ay=(ak(ax.item||this).attr(ax.attribute||"id")||"").match(ax.expression||(/(.+)[\-=_](.+)/));
if(ay){aw.push((ax.key||ay[1]+"[]")+"="+(ax.key&&ax.expression?ay[1]:ay[2]))
}});
if(!aw.length&&ax.key){aw.push(ax.key+"=")
}return aw.join("&")
},toArray:function(ax){var av=this._getItemsAsjQuery(ax&&ax.connected),aw=[];
ax=ax||{};
av.each(function(){aw.push(ak(ax.item||this).attr(ax.attribute||"id")||"")
});
return aw
},_intersectsWith:function(aG){var ax=this.positionAbs.left,aw=ax+this.helperProportions.width,aE=this.positionAbs.top,aD=aE+this.helperProportions.height,ay=aG.left,av=ay+aG.width,aH=aG.top,aC=aH+aG.height,aI=this.offset.click.top,aB=this.offset.click.left,aA=(this.options.axis==="x")||((aE+aI)>aH&&(aE+aI)<aC),aF=(this.options.axis==="y")||((ax+aB)>ay&&(ax+aB)<av),az=aA&&aF;
if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>aG[this.floating?"width":"height"])){return az
}else{return(ay<ax+(this.helperProportions.width/2)&&aw-(this.helperProportions.width/2)<av&&aH<aE+(this.helperProportions.height/2)&&aD-(this.helperProportions.height/2)<aC)
}},_intersectsWithPointer:function(ax){var aw,aA,ay=(this.options.axis==="x")||this._isOverAxis(this.positionAbs.top+this.offset.click.top,ax.top,ax.height),av=(this.options.axis==="y")||this._isOverAxis(this.positionAbs.left+this.offset.click.left,ax.left,ax.width),az=ay&&av;
if(!az){return false
}aw=this._getDragVerticalDirection();
aA=this._getDragHorizontalDirection();
return this.floating?((aA==="right"||aw==="down")?2:1):(aw&&(aw==="down"?2:1))
},_intersectsWithSides:function(ay){var aw=this._isOverAxis(this.positionAbs.top+this.offset.click.top,ay.top+(ay.height/2),ay.height),ax=this._isOverAxis(this.positionAbs.left+this.offset.click.left,ay.left+(ay.width/2),ay.width),av=this._getDragVerticalDirection(),az=this._getDragHorizontalDirection();
if(this.floating&&az){return((az==="right"&&ax)||(az==="left"&&!ax))
}else{return av&&((av==="down"&&aw)||(av==="up"&&!aw))
}},_getDragVerticalDirection:function(){var av=this.positionAbs.top-this.lastPositionAbs.top;
return av!==0&&(av>0?"down":"up")
},_getDragHorizontalDirection:function(){var av=this.positionAbs.left-this.lastPositionAbs.left;
return av!==0&&(av>0?"right":"left")
},refresh:function(av){this._refreshItems(av);
this._setHandleClassName();
this.refreshPositions();
return this
},_connectWith:function(){var av=this.options;
return av.connectWith.constructor===String?[av.connectWith]:av.connectWith
},_getItemsAsjQuery:function(av){var ax,aw,aC,az,aA=[],ay=[],aB=this._connectWith();
if(aB&&av){for(ax=aB.length-1;
ax>=0;
ax--){aC=ak(aB[ax],this.document[0]);
for(aw=aC.length-1;
aw>=0;
aw--){az=ak.data(aC[aw],this.widgetFullName);
if(az&&az!==this&&!az.options.disabled){ay.push([ak.isFunction(az.options.items)?az.options.items.call(az.element):ak(az.options.items,az.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),az])
}}}}ay.push([ak.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):ak(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);
function aD(){aA.push(this)
}for(ax=ay.length-1;
ax>=0;
ax--){ay[ax][0].each(aD)
}return ak(aA)
},_removeCurrentsFromItems:function(){var av=this.currentItem.find(":data("+this.widgetName+"-item)");
this.items=ak.grep(this.items,function(ax){for(var aw=0;
aw<av.length;
aw++){if(av[aw]===ax.item[0]){return false
}}return true
})
},_refreshItems:function(av){this.items=[];
this.containers=[this];
var az,ax,aE,aA,aD,aw,aG,aF,aB=this.items,ay=[[ak.isFunction(this.options.items)?this.options.items.call(this.element[0],av,{item:this.currentItem}):ak(this.options.items,this.element),this]],aC=this._connectWith();
if(aC&&this.ready){for(az=aC.length-1;
az>=0;
az--){aE=ak(aC[az],this.document[0]);
for(ax=aE.length-1;
ax>=0;
ax--){aA=ak.data(aE[ax],this.widgetFullName);
if(aA&&aA!==this&&!aA.options.disabled){ay.push([ak.isFunction(aA.options.items)?aA.options.items.call(aA.element[0],av,{item:this.currentItem}):ak(aA.options.items,aA.element),aA]);
this.containers.push(aA)
}}}}for(az=ay.length-1;
az>=0;
az--){aD=ay[az][1];
aw=ay[az][0];
for(ax=0,aF=aw.length;
ax<aF;
ax++){aG=ak(aw[ax]);
aG.data(this.widgetName+"-item",aD);
aB.push({item:aG,instance:aD,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(av){this.floating=this.items.length?this.options.axis==="x"||this._isFloating(this.items[0].item):false;
if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()
}var ax,ay,aw,az;
for(ax=this.items.length-1;
ax>=0;
ax--){ay=this.items[ax];
if(ay.instance!==this.currentContainer&&this.currentContainer&&ay.item[0]!==this.currentItem[0]){continue
}aw=this.options.toleranceElement?ak(this.options.toleranceElement,ay.item):ay.item;
if(!av){ay.width=aw.outerWidth();
ay.height=aw.outerHeight()
}az=aw.offset();
ay.left=az.left;
ay.top=az.top
}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(ax=this.containers.length-1;
ax>=0;
ax--){az=this.containers[ax].element.offset();
this.containers[ax].containerCache.left=az.left;
this.containers[ax].containerCache.top=az.top;
this.containers[ax].containerCache.width=this.containers[ax].element.outerWidth();
this.containers[ax].containerCache.height=this.containers[ax].element.outerHeight()
}}return this
},_createPlaceholder:function(aw){aw=aw||this;
var av,ax=aw.options;
if(!ax.placeholder||ax.placeholder.constructor===String){av=ax.placeholder;
ax.placeholder={element:function(){var az=aw.currentItem[0].nodeName.toLowerCase(),ay=ak("<"+az+">",aw.document[0]);
aw._addClass(ay,"ui-sortable-placeholder",av||aw.currentItem[0].className)._removeClass(ay,"ui-sortable-helper");
if(az==="tbody"){aw._createTrPlaceholder(aw.currentItem.find("tr").eq(0),ak("<tr>",aw.document[0]).appendTo(ay))
}else{if(az==="tr"){aw._createTrPlaceholder(aw.currentItem,ay)
}else{if(az==="img"){ay.attr("src",aw.currentItem.attr("src"))
}}}if(!av){ay.css("visibility","hidden")
}return ay
},update:function(ay,az){if(av&&!ax.forcePlaceholderSize){return
}if(!az.height()){az.height(aw.currentItem.innerHeight()-parseInt(aw.currentItem.css("paddingTop")||0,10)-parseInt(aw.currentItem.css("paddingBottom")||0,10))
}if(!az.width()){az.width(aw.currentItem.innerWidth()-parseInt(aw.currentItem.css("paddingLeft")||0,10)-parseInt(aw.currentItem.css("paddingRight")||0,10))
}}}
}aw.placeholder=ak(ax.placeholder.element.call(aw.element,aw.currentItem));
aw.currentItem.after(aw.placeholder);
ax.placeholder.update(aw,aw.placeholder)
},_createTrPlaceholder:function(aw,av){var ax=this;
aw.children().each(function(){ak("<td>&#160;</td>",ax.document[0]).attr("colspan",ak(this).attr("colspan")||1).appendTo(av)
})
},_contactContainers:function(av){var aA,ay,aE,aB,aC,aG,aH,az,aD,ax,aw=null,aF=null;
for(aA=this.containers.length-1;
aA>=0;
aA--){if(ak.contains(this.currentItem[0],this.containers[aA].element[0])){continue
}if(this._intersectsWith(this.containers[aA].containerCache)){if(aw&&ak.contains(this.containers[aA].element[0],aw.element[0])){continue
}aw=this.containers[aA];
aF=aA
}else{if(this.containers[aA].containerCache.over){this.containers[aA]._trigger("out",av,this._uiHash(this));
this.containers[aA].containerCache.over=0
}}}if(!aw){return
}if(this.containers.length===1){if(!this.containers[aF].containerCache.over){this.containers[aF]._trigger("over",av,this._uiHash(this));
this.containers[aF].containerCache.over=1
}}else{aE=10000;
aB=null;
aD=aw.floating||this._isFloating(this.currentItem);
aC=aD?"left":"top";
aG=aD?"width":"height";
ax=aD?"pageX":"pageY";
for(ay=this.items.length-1;
ay>=0;
ay--){if(!ak.contains(this.containers[aF].element[0],this.items[ay].item[0])){continue
}if(this.items[ay].item[0]===this.currentItem[0]){continue
}aH=this.items[ay].item.offset()[aC];
az=false;
if(av[ax]-aH>this.items[ay][aG]/2){az=true
}if(Math.abs(av[ax]-aH)<aE){aE=Math.abs(av[ax]-aH);
aB=this.items[ay];
this.direction=az?"up":"down"
}}if(!aB&&!this.options.dropOnEmpty){return
}if(this.currentContainer===this.containers[aF]){if(!this.currentContainer.containerCache.over){this.containers[aF]._trigger("over",av,this._uiHash());
this.currentContainer.containerCache.over=1
}return
}aB?this._rearrange(av,aB,null,true):this._rearrange(av,null,this.containers[aF].element,true);
this._trigger("change",av,this._uiHash());
this.containers[aF]._trigger("change",av,this._uiHash(this));
this.currentContainer=this.containers[aF];
this.options.placeholder.update(this.currentContainer,this.placeholder);
this.containers[aF]._trigger("over",av,this._uiHash(this));
this.containers[aF].containerCache.over=1
}},_createHelper:function(aw){var ax=this.options,av=ak.isFunction(ax.helper)?ak(ax.helper.apply(this.element[0],[aw,this.currentItem])):(ax.helper==="clone"?this.currentItem.clone():this.currentItem);
if(!av.parents("body").length){ak(ax.appendTo!=="parent"?ax.appendTo:this.currentItem[0].parentNode)[0].appendChild(av[0])
}if(av[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}
}if(!av[0].style.width||ax.forceHelperSize){av.width(this.currentItem.width())
}if(!av[0].style.height||ax.forceHelperSize){av.height(this.currentItem.height())
}return av
},_adjustOffsetFromHelper:function(av){if(typeof av==="string"){av=av.split(" ")
}if(ak.isArray(av)){av={left:+av[0],top:+av[1]||0}
}if("left" in av){this.offset.click.left=av.left+this.margins.left
}if("right" in av){this.offset.click.left=this.helperProportions.width-av.right+this.margins.left
}if("top" in av){this.offset.click.top=av.top+this.margins.top
}if("bottom" in av){this.offset.click.top=this.helperProportions.height-av.bottom+this.margins.top
}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var av=this.offsetParent.offset();
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==this.document[0]&&ak.contains(this.scrollParent[0],this.offsetParent[0])){av.left+=this.scrollParent.scrollLeft();
av.top+=this.scrollParent.scrollTop()
}if(this.offsetParent[0]===this.document[0].body||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&ak.ui.ie)){av={top:0,left:0}
}return{top:av.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:av.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var av=this.currentItem.position();
return{top:av.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:av.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var aw,ay,av,ax=this.options;
if(ax.containment==="parent"){ax.containment=this.helper[0].parentNode
}if(ax.containment==="document"||ax.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,ax.containment==="document"?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,(ax.containment==="document"?(this.document.height()||document.body.parentNode.scrollHeight):this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!(/^(document|window|parent)$/).test(ax.containment)){aw=ak(ax.containment)[0];
ay=ak(ax.containment).offset();
av=(ak(aw).css("overflow")!=="hidden");
this.containment=[ay.left+(parseInt(ak(aw).css("borderLeftWidth"),10)||0)+(parseInt(ak(aw).css("paddingLeft"),10)||0)-this.margins.left,ay.top+(parseInt(ak(aw).css("borderTopWidth"),10)||0)+(parseInt(ak(aw).css("paddingTop"),10)||0)-this.margins.top,ay.left+(av?Math.max(aw.scrollWidth,aw.offsetWidth):aw.offsetWidth)-(parseInt(ak(aw).css("borderLeftWidth"),10)||0)-(parseInt(ak(aw).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,ay.top+(av?Math.max(aw.scrollHeight,aw.offsetHeight):aw.offsetHeight)-(parseInt(ak(aw).css("borderTopWidth"),10)||0)-(parseInt(ak(aw).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]
}},_convertPositionTo:function(ax,az){if(!az){az=this.position
}var aw=ax==="absolute"?1:-1,av=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==this.document[0]&&ak.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,ay=(/(html|body)/i).test(av[0].tagName);
return{top:(az.top+this.offset.relative.top*aw+this.offset.parent.top*aw-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(ay?0:av.scrollTop()))*aw)),left:(az.left+this.offset.relative.left*aw+this.offset.parent.left*aw-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():ay?0:av.scrollLeft())*aw))}
},_generatePosition:function(ay){var aA,az,aB=this.options,ax=ay.pageX,aw=ay.pageY,av=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==this.document[0]&&ak.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,aC=(/(html|body)/i).test(av[0].tagName);
if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()
}if(this.originalPosition){if(this.containment){if(ay.pageX-this.offset.click.left<this.containment[0]){ax=this.containment[0]+this.offset.click.left
}if(ay.pageY-this.offset.click.top<this.containment[1]){aw=this.containment[1]+this.offset.click.top
}if(ay.pageX-this.offset.click.left>this.containment[2]){ax=this.containment[2]+this.offset.click.left
}if(ay.pageY-this.offset.click.top>this.containment[3]){aw=this.containment[3]+this.offset.click.top
}}if(aB.grid){aA=this.originalPageY+Math.round((aw-this.originalPageY)/aB.grid[1])*aB.grid[1];
aw=this.containment?((aA-this.offset.click.top>=this.containment[1]&&aA-this.offset.click.top<=this.containment[3])?aA:((aA-this.offset.click.top>=this.containment[1])?aA-aB.grid[1]:aA+aB.grid[1])):aA;
az=this.originalPageX+Math.round((ax-this.originalPageX)/aB.grid[0])*aB.grid[0];
ax=this.containment?((az-this.offset.click.left>=this.containment[0]&&az-this.offset.click.left<=this.containment[2])?az:((az-this.offset.click.left>=this.containment[0])?az-aB.grid[0]:az+aB.grid[0])):az
}}return{top:(aw-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(aC?0:av.scrollTop())))),left:(ax-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():aC?0:av.scrollLeft())))}
},_rearrange:function(az,ay,aw,ax){aw?aw[0].appendChild(this.placeholder[0]):ay.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction==="down"?ay.item[0]:ay.item[0].nextSibling));
this.counter=this.counter?++this.counter:1;
var av=this.counter;
this._delay(function(){if(av===this.counter){this.refreshPositions(!ax)
}})
},_clear:function(aw,ay){this.reverting=false;
var av,az=[];
if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)
}this._noFinalSort=null;
if(this.helper[0]===this.currentItem[0]){for(av in this._storedCSS){if(this._storedCSS[av]==="auto"||this._storedCSS[av]==="static"){this._storedCSS[av]=""
}}this.currentItem.css(this._storedCSS);
this._removeClass(this.currentItem,"ui-sortable-helper")
}else{this.currentItem.show()
}if(this.fromOutside&&!ay){az.push(function(aA){this._trigger("receive",aA,this._uiHash(this.fromOutside))
})
}if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!ay){az.push(function(aA){this._trigger("update",aA,this._uiHash())
})
}if(this!==this.currentContainer){if(!ay){az.push(function(aA){this._trigger("remove",aA,this._uiHash())
});
az.push((function(aA){return function(aB){aA._trigger("receive",aB,this._uiHash(this))
}
}).call(this,this.currentContainer));
az.push((function(aA){return function(aB){aA._trigger("update",aB,this._uiHash(this))
}
}).call(this,this.currentContainer))
}}function ax(aC,aA,aB){return function(aD){aB._trigger(aC,aD,aA._uiHash(aA))
}
}for(av=this.containers.length-1;
av>=0;
av--){if(!ay){az.push(ax("deactivate",this,this.containers[av]))
}if(this.containers[av].containerCache.over){az.push(ax("out",this,this.containers[av]));
this.containers[av].containerCache.over=0
}}if(this.storedCursor){this.document.find("body").css("cursor",this.storedCursor);
this.storedStylesheet.remove()
}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)
}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex)
}this.dragging=false;
if(!ay){this._trigger("beforeStop",aw,this._uiHash())
}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
if(!this.cancelHelperRemoval){if(this.helper[0]!==this.currentItem[0]){this.helper.remove()
}this.helper=null
}if(!ay){for(av=0;
av<az.length;
av++){az[av].call(this,aw)
}this._trigger("stop",aw,this._uiHash())
}this.fromOutside=false;
return !this.cancelHelperRemoval
},_trigger:function(){if(ak.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()
}},_uiHash:function(av){var aw=av||this;
return{helper:aw.helper,placeholder:aw.placeholder||ak([]),position:aw.position,originalPosition:aw.originalPosition,offset:aw.positionAbs,item:aw.currentItem,sender:av?av.element:null}
}});
/*!
 * jQuery UI Spinner 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
function U(av){return function(){var aw=this.element.val();
av.apply(this,arguments);
this._refresh();
if(aw!==this.element.val()){this._trigger("change")
}}
}ak.widget("ui.spinner",{version:"1.12.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:true,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);
this._setOption("min",this.options.min);
this._setOption("step",this.options.step);
if(this.value()!==""){this._value(this.element.val(),true)
}this._draw();
this._on(this._events);
this._refresh();
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_getCreateOptions:function(){var av=this._super();
var aw=this.element;
ak.each(["min","max","step"],function(ax,ay){var az=aw.attr(ay);
if(az!=null&&az.length){av[ay]=az
}});
return av
},_events:{keydown:function(av){if(this._start(av)&&this._keydown(av)){av.preventDefault()
}},keyup:"_stop",focus:function(){this.previous=this.element.val()
},blur:function(av){if(this.cancelBlur){delete this.cancelBlur;
return
}this._stop();
this._refresh();
if(this.previous!==this.element.val()){this._trigger("change",av)
}},mousewheel:function(av,aw){if(!aw){return
}if(!this.spinning&&!this._start(av)){return false
}this._spin((aw>0?1:-1)*this.options.step,av);
clearTimeout(this.mousewheelTimer);
this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(av)
}},100);
av.preventDefault()
},"mousedown .ui-spinner-button":function(aw){var av;
av=this.element[0]===ak.ui.safeActiveElement(this.document[0])?this.previous:this.element.val();
function ax(){var ay=this.element[0]===ak.ui.safeActiveElement(this.document[0]);
if(!ay){this.element.trigger("focus");
this.previous=av;
this._delay(function(){this.previous=av
})
}}aw.preventDefault();
ax.call(this);
this.cancelBlur=true;
this._delay(function(){delete this.cancelBlur;
ax.call(this)
});
if(this._start(aw)===false){return
}this._repeat(null,ak(aw.currentTarget).hasClass("ui-spinner-up")?1:-1,aw)
},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(av){if(!ak(av.currentTarget).hasClass("ui-state-active")){return
}if(this._start(av)===false){return false
}this._repeat(null,ak(av.currentTarget).hasClass("ui-spinner-up")?1:-1,av)
},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")
},_draw:function(){this._enhance();
this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content");
this._addClass("ui-spinner-input");
this.element.attr("role","spinbutton");
this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",true).button({classes:{"ui-button":""}});
this._removeClass(this.buttons,"ui-corner-all");
this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up");
this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down");
this.buttons.first().button({icon:this.options.icons.up,showLabel:false});
this.buttons.last().button({icon:this.options.icons.down,showLabel:false});
if(this.buttons.height()>Math.ceil(this.uiSpinner.height()*0.5)&&this.uiSpinner.height()>0){this.uiSpinner.height(this.uiSpinner.height())
}},_keydown:function(aw){var av=this.options,ax=ak.ui.keyCode;
switch(aw.keyCode){case ax.UP:this._repeat(null,1,aw);
return true;
case ax.DOWN:this._repeat(null,-1,aw);
return true;
case ax.PAGE_UP:this._repeat(null,av.page,aw);
return true;
case ax.PAGE_DOWN:this._repeat(null,-av.page,aw);
return true
}return false
},_start:function(av){if(!this.spinning&&this._trigger("start",av)===false){return false
}if(!this.counter){this.counter=1
}this.spinning=true;
return true
},_repeat:function(aw,av,ax){aw=aw||500;
clearTimeout(this.timer);
this.timer=this._delay(function(){this._repeat(40,av,ax)
},aw);
this._spin(av*this.options.step,ax)
},_spin:function(aw,av){var ax=this.value()||0;
if(!this.counter){this.counter=1
}ax=this._adjustValue(ax+aw*this._increment(this.counter));
if(!this.spinning||this._trigger("spin",av,{value:ax})!==false){this._value(ax);
this.counter++
}},_increment:function(av){var aw=this.options.incremental;
if(aw){return ak.isFunction(aw)?aw(av):Math.floor(av*av*av/50000-av*av/500+17*av/200+1)
}return 1
},_precision:function(){var av=this._precisionOf(this.options.step);
if(this.options.min!==null){av=Math.max(av,this._precisionOf(this.options.min))
}return av
},_precisionOf:function(aw){var ax=aw.toString(),av=ax.indexOf(".");
return av===-1?0:ax.length-av-1
},_adjustValue:function(ax){var aw,ay,av=this.options;
aw=av.min!==null?av.min:0;
ay=ax-aw;
ay=Math.round(ay/av.step)*av.step;
ax=aw+ay;
ax=parseFloat(ax.toFixed(this._precision()));
if(av.max!==null&&ax>av.max){return av.max
}if(av.min!==null&&ax<av.min){return av.min
}return ax
},_stop:function(av){if(!this.spinning){return
}clearTimeout(this.timer);
clearTimeout(this.mousewheelTimer);
this.counter=0;
this.spinning=false;
this._trigger("stop",av)
},_setOption:function(av,ax){var ay,az,aw;
if(av==="culture"||av==="numberFormat"){ay=this._parse(this.element.val());
this.options[av]=ax;
this.element.val(this._format(ay));
return
}if(av==="max"||av==="min"||av==="step"){if(typeof ax==="string"){ax=this._parse(ax)
}}if(av==="icons"){az=this.buttons.first().find(".ui-icon");
this._removeClass(az,null,this.options.icons.up);
this._addClass(az,null,ax.up);
aw=this.buttons.last().find(".ui-icon");
this._removeClass(aw,null,this.options.icons.down);
this._addClass(aw,null,ax.down)
}this._super(av,ax)
},_setOptionDisabled:function(av){this._super(av);
this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!av);
this.element.prop("disabled",!!av);
this.buttons.button(av?"disable":"enable")
},_setOptions:U(function(av){this._super(av)
}),_parse:function(av){if(typeof av==="string"&&av!==""){av=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(av,10,this.options.culture):+av
}return av===""||isNaN(av)?null:av
},_format:function(av){if(av===""){return""
}return window.Globalize&&this.options.numberFormat?Globalize.format(av,this.options.numberFormat,this.options.culture):av
},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})
},isValid:function(){var av=this.value();
if(av===null){return false
}return av===this._adjustValue(av)
},_value:function(ax,av){var aw;
if(ax!==""){aw=this._parse(ax);
if(aw!==null){if(!av){aw=this._adjustValue(aw)
}ax=this._format(aw)
}}this.element.val(ax);
this._refresh()
},_destroy:function(){this.element.prop("disabled",false).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow");
this.uiSpinner.replaceWith(this.element)
},stepUp:U(function(av){this._stepUp(av)
}),_stepUp:function(av){if(this._start()){this._spin((av||1)*this.options.step);
this._stop()
}},stepDown:U(function(av){this._stepDown(av)
}),_stepDown:function(av){if(this._start()){this._spin((av||1)*-this.options.step);
this._stop()
}},pageUp:U(function(av){this._stepUp((av||1)*this.options.page)
}),pageDown:U(function(av){this._stepDown((av||1)*this.options.page)
}),value:function(av){if(!arguments.length){return this._parse(this.element.val())
}U(this._value).call(this,av)
},widget:function(){return this.uiSpinner
}});
if(ak.uiBackCompat!==false){ak.widget("ui.spinner",ak.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
},_uiSpinnerHtml:function(){return"<span>"
},_buttonHtml:function(){return"<a></a><a></a>"
}})
}var ag=ak.ui.spinner;
/*!
 * jQuery UI Tabs 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
ak.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:(function(){var av=/#.*$/;
return function(ax){var az,ay;
az=ax.href.replace(av,"");
ay=location.href.replace(av,"");
try{az=decodeURIComponent(az)
}catch(aw){}try{ay=decodeURIComponent(ay)
}catch(aw){}return ax.hash.length>1&&az===ay
}
})(),_create:function(){var aw=this,av=this.options;
this.running=false;
this._addClass("ui-tabs","ui-widget ui-widget-content");
this._toggleClass("ui-tabs-collapsible",null,av.collapsible);
this._processTabs();
av.active=this._initialActive();
if(ak.isArray(av.disabled)){av.disabled=ak.unique(av.disabled.concat(ak.map(this.tabs.filter(".ui-state-disabled"),function(ax){return aw.tabs.index(ax)
}))).sort()
}if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(av.active)
}else{this.active=ak()
}this._refresh();
if(this.active.length){this.load(av.active)
}},_initialActive:function(){var aw=this.options.active,av=this.options.collapsible,ax=location.hash.substring(1);
if(aw===null){if(ax){this.tabs.each(function(ay,az){if(ak(az).attr("aria-controls")===ax){aw=ay;
return false
}})
}if(aw===null){aw=this.tabs.index(this.tabs.filter(".ui-tabs-active"))
}if(aw===null||aw===-1){aw=this.tabs.length?0:false
}}if(aw!==false){aw=this.tabs.index(this.tabs.eq(aw));
if(aw===-1){aw=av?false:0
}}if(!av&&aw===false&&this.anchors.length){aw=0
}return aw
},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?ak():this._getPanelForTab(this.active)}
},_tabKeydown:function(ax){var aw=ak(ak.ui.safeActiveElement(this.document[0])).closest("li"),av=this.tabs.index(aw),ay=true;
if(this._handlePageNav(ax)){return
}switch(ax.keyCode){case ak.ui.keyCode.RIGHT:case ak.ui.keyCode.DOWN:av++;
break;
case ak.ui.keyCode.UP:case ak.ui.keyCode.LEFT:ay=false;
av--;
break;
case ak.ui.keyCode.END:av=this.anchors.length-1;
break;
case ak.ui.keyCode.HOME:av=0;
break;
case ak.ui.keyCode.SPACE:ax.preventDefault();
clearTimeout(this.activating);
this._activate(av);
return;
case ak.ui.keyCode.ENTER:ax.preventDefault();
clearTimeout(this.activating);
this._activate(av===this.options.active?false:av);
return;
default:return
}ax.preventDefault();
clearTimeout(this.activating);
av=this._focusNextTab(av,ay);
if(!ax.ctrlKey&&!ax.metaKey){aw.attr("aria-selected","false");
this.tabs.eq(av).attr("aria-selected","true");
this.activating=this._delay(function(){this.option("active",av)
},this.delay)
}},_panelKeydown:function(av){if(this._handlePageNav(av)){return
}if(av.ctrlKey&&av.keyCode===ak.ui.keyCode.UP){av.preventDefault();
this.active.trigger("focus")
}},_handlePageNav:function(av){if(av.altKey&&av.keyCode===ak.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false));
return true
}if(av.altKey&&av.keyCode===ak.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true));
return true
}},_findNextTab:function(aw,ax){var av=this.tabs.length-1;
function ay(){if(aw>av){aw=0
}if(aw<0){aw=av
}return aw
}while(ak.inArray(ay(),this.options.disabled)!==-1){aw=ax?aw+1:aw-1
}return aw
},_focusNextTab:function(av,aw){av=this._findNextTab(av,aw);
this.tabs.eq(av).trigger("focus");
return av
},_setOption:function(av,aw){if(av==="active"){this._activate(aw);
return
}this._super(av,aw);
if(av==="collapsible"){this._toggleClass("ui-tabs-collapsible",null,aw);
if(!aw&&this.options.active===false){this._activate(0)
}}if(av==="event"){this._setupEvents(aw)
}if(av==="heightStyle"){this._setupHeightStyle(aw)
}},_sanitizeSelector:function(av){return av?av.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""
},refresh:function(){var aw=this.options,av=this.tablist.children(":has(a[href])");
aw.disabled=ak.map(av.filter(".ui-state-disabled"),function(ax){return av.index(ax)
});
this._processTabs();
if(aw.active===false||!this.anchors.length){aw.active=false;
this.active=ak()
}else{if(this.active.length&&!ak.contains(this.tablist[0],this.active[0])){if(this.tabs.length===aw.disabled.length){aw.active=false;
this.active=ak()
}else{this._activate(this._findNextTab(Math.max(0,aw.active-1),false))
}}else{aw.active=this.tabs.index(this.active)
}}this._refresh()
},_refresh:function(){this._setOptionDisabled(this.options.disabled);
this._setupEvents(this.options.event);
this._setupHeightStyle(this.options.heightStyle);
this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1});
this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"});
if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0)
}else{this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0});
this._addClass(this.active,"ui-tabs-active","ui-state-active");
this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})
}},_processTabs:function(){var ax=this,ay=this.tabs,aw=this.anchors,av=this.panels;
this.tablist=this._getList().attr("role","tablist");
this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header");
this.tablist.on("mousedown"+this.eventNamespace,"> li",function(az){if(ak(this).is(".ui-state-disabled")){az.preventDefault()
}}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){if(ak(this).closest("li").is(".ui-state-disabled")){this.blur()
}});
this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1});
this._addClass(this.tabs,"ui-tabs-tab","ui-state-default");
this.anchors=this.tabs.map(function(){return ak("a",this)[0]
}).attr({role:"presentation",tabIndex:-1});
this._addClass(this.anchors,"ui-tabs-anchor");
this.panels=ak();
this.anchors.each(function(aE,aC){var az,aA,aD,aB=ak(aC).uniqueId().attr("id"),aF=ak(aC).closest("li"),aG=aF.attr("aria-controls");
if(ax._isLocal(aC)){az=aC.hash;
aD=az.substring(1);
aA=ax.element.find(ax._sanitizeSelector(az))
}else{aD=aF.attr("aria-controls")||ak({}).uniqueId()[0].id;
az="#"+aD;
aA=ax.element.find(az);
if(!aA.length){aA=ax._createPanel(aD);
aA.insertAfter(ax.panels[aE-1]||ax.tablist)
}aA.attr("aria-live","polite")
}if(aA.length){ax.panels=ax.panels.add(aA)
}if(aG){aF.data("ui-tabs-aria-controls",aG)
}aF.attr({"aria-controls":aD,"aria-labelledby":aB});
aA.attr("aria-labelledby",aB)
});
this.panels.attr("role","tabpanel");
this._addClass(this.panels,"ui-tabs-panel","ui-widget-content");
if(ay){this._off(ay.not(this.tabs));
this._off(aw.not(this.anchors));
this._off(av.not(this.panels))
}},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)
},_createPanel:function(av){return ak("<div>").attr("id",av).data("ui-tabs-destroy",true)
},_setOptionDisabled:function(ay){var ax,av,aw;
if(ak.isArray(ay)){if(!ay.length){ay=false
}else{if(ay.length===this.anchors.length){ay=true
}}}for(aw=0;
(av=this.tabs[aw]);
aw++){ax=ak(av);
if(ay===true||ak.inArray(aw,ay)!==-1){ax.attr("aria-disabled","true");
this._addClass(ax,null,"ui-state-disabled")
}else{ax.removeAttr("aria-disabled");
this._removeClass(ax,null,"ui-state-disabled")
}}this.options.disabled=ay;
this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,ay===true)
},_setupEvents:function(aw){var av={};
if(aw){ak.each(aw.split(" "),function(ay,ax){av[ax]="_eventHandler"
})
}this._off(this.anchors.add(this.tabs).add(this.panels));
this._on(true,this.anchors,{click:function(ax){ax.preventDefault()
}});
this._on(this.anchors,av);
this._on(this.tabs,{keydown:"_tabKeydown"});
this._on(this.panels,{keydown:"_panelKeydown"});
this._focusable(this.tabs);
this._hoverable(this.tabs)
},_setupHeightStyle:function(av){var ax,aw=this.element.parent();
if(av==="fill"){ax=aw.height();
ax-=this.element.outerHeight()-this.element.height();
this.element.siblings(":visible").each(function(){var az=ak(this),ay=az.css("position");
if(ay==="absolute"||ay==="fixed"){return
}ax-=az.outerHeight(true)
});
this.element.children().not(this.panels).each(function(){ax-=ak(this).outerHeight(true)
});
this.panels.each(function(){ak(this).height(Math.max(0,ax-ak(this).innerHeight()+ak(this).height()))
}).css("overflow","auto")
}else{if(av==="auto"){ax=0;
this.panels.each(function(){ax=Math.max(ax,ak(this).height("").height())
}).height(ax)
}}},_eventHandler:function(av){var aE=this.options,az=this.active,aA=ak(av.currentTarget),ay=aA.closest("li"),aC=ay[0]===az[0],aw=aC&&aE.collapsible,ax=aw?ak():this._getPanelForTab(ay),aB=!az.length?ak():this._getPanelForTab(az),aD={oldTab:az,oldPanel:aB,newTab:aw?ak():ay,newPanel:ax};
av.preventDefault();
if(ay.hasClass("ui-state-disabled")||ay.hasClass("ui-tabs-loading")||this.running||(aC&&!aE.collapsible)||(this._trigger("beforeActivate",av,aD)===false)){return
}aE.active=aw?false:this.tabs.index(ay);
this.active=aC?ak():ay;
if(this.xhr){this.xhr.abort()
}if(!aB.length&&!ax.length){ak.error("jQuery UI Tabs: Mismatching fragment identifier.")
}if(ax.length){this.load(this.tabs.index(ay),av)
}this._toggle(av,aD)
},_toggle:function(aB,aA){var az=this,av=aA.newPanel,ay=aA.oldPanel;
this.running=true;
function ax(){az.running=false;
az._trigger("activate",aB,aA)
}function aw(){az._addClass(aA.newTab.closest("li"),"ui-tabs-active","ui-state-active");
if(av.length&&az.options.show){az._show(av,az.options.show,ax)
}else{av.show();
ax()
}}if(ay.length&&this.options.hide){this._hide(ay,this.options.hide,function(){az._removeClass(aA.oldTab.closest("li"),"ui-tabs-active","ui-state-active");
aw()
})
}else{this._removeClass(aA.oldTab.closest("li"),"ui-tabs-active","ui-state-active");
ay.hide();
aw()
}ay.attr("aria-hidden","true");
aA.oldTab.attr({"aria-selected":"false","aria-expanded":"false"});
if(av.length&&ay.length){aA.oldTab.attr("tabIndex",-1)
}else{if(av.length){this.tabs.filter(function(){return ak(this).attr("tabIndex")===0
}).attr("tabIndex",-1)
}}av.attr("aria-hidden","false");
aA.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})
},_activate:function(aw){var av,ax=this._findActive(aw);
if(ax[0]===this.active[0]){return
}if(!ax.length){ax=this.active
}av=ax.find(".ui-tabs-anchor")[0];
this._eventHandler({target:av,currentTarget:av,preventDefault:ak.noop})
},_findActive:function(av){return av===false?ak():this.tabs.eq(av)
},_getIndex:function(av){if(typeof av==="string"){av=this.anchors.index(this.anchors.filter("[href$='"+ak.ui.escapeSelector(av)+"']"))
}return av
},_destroy:function(){if(this.xhr){this.xhr.abort()
}this.tablist.removeAttr("role").off(this.eventNamespace);
this.anchors.removeAttr("role tabIndex").removeUniqueId();
this.tabs.add(this.panels).each(function(){if(ak.data(this,"ui-tabs-destroy")){ak(this).remove()
}else{ak(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
}});
this.tabs.each(function(){var av=ak(this),aw=av.data("ui-tabs-aria-controls");
if(aw){av.attr("aria-controls",aw).removeData("ui-tabs-aria-controls")
}else{av.removeAttr("aria-controls")
}});
this.panels.show();
if(this.options.heightStyle!=="content"){this.panels.css("height","")
}},enable:function(av){var aw=this.options.disabled;
if(aw===false){return
}if(av===undefined){aw=false
}else{av=this._getIndex(av);
if(ak.isArray(aw)){aw=ak.map(aw,function(ax){return ax!==av?ax:null
})
}else{aw=ak.map(this.tabs,function(ax,ay){return ay!==av?ay:null
})
}}this._setOptionDisabled(aw)
},disable:function(av){var aw=this.options.disabled;
if(aw===true){return
}if(av===undefined){aw=true
}else{av=this._getIndex(av);
if(ak.inArray(av,aw)!==-1){return
}if(ak.isArray(aw)){aw=ak.merge([av],aw).sort()
}else{aw=[av]
}}this._setOptionDisabled(aw)
},load:function(ay,aC){ay=this._getIndex(ay);
var aB=this,az=this.tabs.eq(ay),ax=az.find(".ui-tabs-anchor"),aw=this._getPanelForTab(az),aA={tab:az,panel:aw},av=function(aE,aD){if(aD==="abort"){aB.panels.stop(false,true)
}aB._removeClass(az,"ui-tabs-loading");
aw.removeAttr("aria-busy");
if(aE===aB.xhr){delete aB.xhr
}};
if(this._isLocal(ax[0])){return
}this.xhr=ak.ajax(this._ajaxSettings(ax,aC,aA));
if(this.xhr&&this.xhr.statusText!=="canceled"){this._addClass(az,"ui-tabs-loading");
aw.attr("aria-busy","true");
this.xhr.done(function(aE,aD,aF){setTimeout(function(){aw.html(aE);
aB._trigger("load",aC,aA);
av(aF,aD)
},1)
}).fail(function(aE,aD){setTimeout(function(){av(aE,aD)
},1)
})
}},_ajaxSettings:function(av,ay,ax){var aw=this;
return{url:av.attr("href").replace(/#.*$/,""),beforeSend:function(aA,az){return aw._trigger("beforeLoad",ay,ak.extend({jqXHR:aA,ajaxSettings:az},ax))
}}
},_getPanelForTab:function(av){var aw=ak(av).attr("aria-controls");
return this.element.find(this._sanitizeSelector("#"+aw))
}});
if(ak.uiBackCompat!==false){ak.widget("ui.tabs",ak.ui.tabs,{_processTabs:function(){this._superApply(arguments);
this._addClass(this.tabs,"ui-tab")
}})
}var R=ak.ui.tabs;
/*!
 * jQuery UI Tooltip 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
ak.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var av=ak(this).attr("title")||"";
return ak("<a>").text(av).html()
},hide:true,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:true,track:false,close:null,open:null},_addDescribedBy:function(aw,ax){var av=(aw.attr("aria-describedby")||"").split(/\s+/);
av.push(ax);
aw.data("ui-tooltip-id",ax).attr("aria-describedby",ak.trim(av.join(" ")))
},_removeDescribedBy:function(ax){var ay=ax.data("ui-tooltip-id"),aw=(ax.attr("aria-describedby")||"").split(/\s+/),av=ak.inArray(ay,aw);
if(av!==-1){aw.splice(av,1)
}ax.removeData("ui-tooltip-id");
aw=ak.trim(aw.join(" "));
if(aw){ax.attr("aria-describedby",aw)
}else{ax.removeAttr("aria-describedby")
}},_create:function(){this._on({mouseover:"open",focusin:"open"});
this.tooltips={};
this.parents={};
this.liveRegion=ak("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body);
this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible");
this.disabledTitles=ak([])
},_setOption:function(av,ax){var aw=this;
this._super(av,ax);
if(av==="content"){ak.each(this.tooltips,function(az,ay){aw._updateContent(ay.element)
})
}},_setOptionDisabled:function(av){this[av?"_disable":"_enable"]()
},_disable:function(){var av=this;
ak.each(this.tooltips,function(ay,ax){var aw=ak.Event("blur");
aw.target=aw.currentTarget=ax.element[0];
av.close(aw,true)
});
this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var aw=ak(this);
if(aw.is("[title]")){return aw.data("ui-tooltip-title",aw.attr("title")).removeAttr("title")
}}))
},_enable:function(){this.disabledTitles.each(function(){var av=ak(this);
if(av.data("ui-tooltip-title")){av.attr("title",av.data("ui-tooltip-title"))
}});
this.disabledTitles=ak([])
},open:function(aw){var av=this,ax=ak(aw?aw.target:this.element).closest(this.options.items);
if(!ax.length||ax.data("ui-tooltip-id")){return
}if(ax.attr("title")){ax.data("ui-tooltip-title",ax.attr("title"))
}ax.data("ui-tooltip-open",true);
if(aw&&aw.type==="mouseover"){ax.parents().each(function(){var az=ak(this),ay;
if(az.data("ui-tooltip-open")){ay=ak.Event("blur");
ay.target=ay.currentTarget=this;
av.close(ay,true)
}if(az.attr("title")){az.uniqueId();
av.parents[this.id]={element:this,title:az.attr("title")};
az.attr("title","")
}})
}this._registerCloseHandlers(aw,ax);
this._updateContent(ax,aw)
},_updateContent:function(aA,az){var ay,av=this.options.content,ax=this,aw=az?az.type:null;
if(typeof av==="string"||av.nodeType||av.jquery){return this._open(az,aA,av)
}ay=av.call(aA[0],function(aB){ax._delay(function(){if(!aA.data("ui-tooltip-open")){return
}if(az){az.type=aw
}this._open(az,aA,aB)
})
});
if(ay){this._open(az,aA,ay)
}},_open:function(aw,az,aA){var av,aD,aC,ax,aB=ak.extend({},this.options.position);
if(!aA){return
}av=this._find(az);
if(av){av.tooltip.find(".ui-tooltip-content").html(aA);
return
}if(az.is("[title]")){if(aw&&aw.type==="mouseover"){az.attr("title","")
}else{az.removeAttr("title")
}}av=this._tooltip(az);
aD=av.tooltip;
this._addDescribedBy(az,aD.attr("id"));
aD.find(".ui-tooltip-content").html(aA);
this.liveRegion.children().hide();
ax=ak("<div>").html(aD.find(".ui-tooltip-content").html());
ax.removeAttr("name").find("[name]").removeAttr("name");
ax.removeAttr("id").find("[id]").removeAttr("id");
ax.appendTo(this.liveRegion);
function ay(aE){aB.of=aE;
if(aD.is(":hidden")){return
}aD.position(aB)
}if(this.options.track&&aw&&/^mouse/.test(aw.type)){this._on(this.document,{mousemove:ay});
ay(aw)
}else{aD.position(ak.extend({of:az},this.options.position))
}aD.hide();
this._show(aD,this.options.show);
if(this.options.track&&this.options.show&&this.options.show.delay){aC=this.delayedShow=setInterval(function(){if(aD.is(":visible")){ay(aB.of);
clearInterval(aC)
}},ak.fx.interval)
}this._trigger("open",aw,{tooltip:aD})
},_registerCloseHandlers:function(aw,ax){var av={keyup:function(ay){if(ay.keyCode===ak.ui.keyCode.ESCAPE){var az=ak.Event(ay);
az.currentTarget=ax[0];
this.close(az,true)
}}};
if(ax[0]!==this.element[0]){av.remove=function(){this._removeTooltip(this._find(ax).tooltip)
}
}if(!aw||aw.type==="mouseover"){av.mouseleave="close"
}if(!aw||aw.type==="focusin"){av.focusout="close"
}this._on(true,ax,av)
},close:function(aw){var ay,av=this,az=ak(aw?aw.currentTarget:this.element),ax=this._find(az);
if(!ax){az.removeData("ui-tooltip-open");
return
}ay=ax.tooltip;
if(ax.closing){return
}clearInterval(this.delayedShow);
if(az.data("ui-tooltip-title")&&!az.attr("title")){az.attr("title",az.data("ui-tooltip-title"))
}this._removeDescribedBy(az);
ax.hiding=true;
ay.stop(true);
this._hide(ay,this.options.hide,function(){av._removeTooltip(ak(this))
});
az.removeData("ui-tooltip-open");
this._off(az,"mouseleave focusout keyup");
if(az[0]!==this.element[0]){this._off(az,"remove")
}this._off(this.document,"mousemove");
if(aw&&aw.type==="mouseleave"){ak.each(this.parents,function(aB,aA){ak(aA.element).attr("title",aA.title);
delete av.parents[aB]
})
}ax.closing=true;
this._trigger("close",aw,{tooltip:ay});
if(!ax.hiding){ax.closing=false
}},_tooltip:function(av){var ax=ak("<div>").attr("role","tooltip"),aw=ak("<div>").appendTo(ax),ay=ax.uniqueId().attr("id");
this._addClass(aw,"ui-tooltip-content");
this._addClass(ax,"ui-tooltip","ui-widget ui-widget-content");
ax.appendTo(this._appendTo(av));
return this.tooltips[ay]={element:av,tooltip:ax}
},_find:function(av){var aw=av.data("ui-tooltip-id");
return aw?this.tooltips[aw]:null
},_removeTooltip:function(av){av.remove();
delete this.tooltips[av.attr("id")]
},_appendTo:function(aw){var av=aw.closest(".ui-front, dialog");
if(!av.length){av=this.document[0].body
}return av
},_destroy:function(){var av=this;
ak.each(this.tooltips,function(az,ay){var ax=ak.Event("blur"),aw=ay.element;
ax.target=ax.currentTarget=aw[0];
av.close(ax,true);
ak("#"+az).remove();
if(aw.data("ui-tooltip-title")){if(!aw.attr("title")){aw.attr("title",aw.data("ui-tooltip-title"))
}aw.removeData("ui-tooltip-title")
}});
this.liveRegion.remove()
}});
if(ak.uiBackCompat!==false){ak.widget("ui.tooltip",ak.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var av=this._superApply(arguments);
if(this.options.tooltipClass){av.tooltip.addClass(this.options.tooltipClass)
}return av
}})
}var D=ak.ui.tooltip
}));
window.Modernizr=function(at,ae,aj){function ag(a){aw.cssText=a
}function ai(b,a){return ag(B.join(b+";")+(a||""))
}function ax(b,a){return typeof b===a
}function ao(b,a){return !!~(""+b).indexOf(a)
}function av(c,a){for(var b in c){var d=c[b];
if(!ao(d,"-")&&aw[d]!==aj){return"pfx"==a?d:!0
}}return !1
}function af(d,b,c){for(var f in d){var a=b[d[f]];
if(a!==aj){return c===!1?d[f]:ax(a,"function")?a.bind(c||b):a
}}return !1
}function ad(c,a,f){var b=c.charAt(0).toUpperCase()+c.slice(1),d=(c+" "+am.join(b+" ")+b).split(" ");
return ax(a,"string")||ax(a,"undefined")?av(d,a):(d=(c+" "+q.join(b+" ")+b).split(" "),af(d,a,f))
}function al(){ah.input=function(c){for(var a=0,b=c.length;
b>a;
a++){an[c[a]]=!!(c[a] in R)
}return an.list&&(an.list=!(!ae.createElement("datalist")||!at.HTMLDataListElement)),an
}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),ah.inputtypes=function(g){for(var f,h,b,d=0,j=g.length;
j>d;
d++){R.setAttribute("type",h=g[d]),f="text"!==R.type,f&&(R.value=aa,R.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(h)&&R.style.WebkitAppearance!==aj?(aq.appendChild(R),b=ae.defaultView,f=b.getComputedStyle&&"textfield"!==b.getComputedStyle(R,null).WebkitAppearance&&0!==R.offsetHeight,aq.removeChild(R)):/^(search|tel)$/.test(h)||(f=/^(url|email)$/.test(h)?R.checkValidity&&R.checkValidity()===!1:R.value!=aa)),G[g[d]]=!!f
}return G
}("search tel url email datetime date month week time datetime-local number range color".split(" "))
}var au,ar,ak="2.8.3",ah={},ap=!0,aq=ae.documentElement,ac="modernizr",Z=ae.createElement(ac),aw=Z.style,R=ae.createElement("input"),aa=":)",ab={}.toString,B=" -webkit- -moz- -o- -ms- ".split(" "),V="Webkit Moz O ms",am=V.split(" "),q=V.toLowerCase().split(" "),I={svg:"http://www.w3.org/2000/svg"},J={},G={},an={},X=[],U=X.slice,Q=function(k,g,b,f){var t,j,p,w,v=ae.createElement("div"),h=ae.body,m=h||ae.createElement("body");
if(parseInt(b,10)){for(;
b--;
){p=ae.createElement("div"),p.id=f?f[b]:ac+(b+1),v.appendChild(p)
}}return t=["&#173;",'<style id="s',ac,'">',k,"</style>"].join(""),v.id=ac,(h?v:m).innerHTML+=t,m.appendChild(v),h||(m.style.background="",m.style.overflow="hidden",w=aq.style.overflow,aq.style.overflow="hidden",aq.appendChild(m)),j=g(v,k),h?v.parentNode.removeChild(v):(m.parentNode.removeChild(m),aq.style.overflow=w),!!j
},Y=function(a){var c=at.matchMedia||at.msMatchMedia;
if(c){return c(a)&&c(a).matches||!1
}var b;
return Q("@media "+a+" { #"+ac+" { position: absolute; } }",function(d){b="absolute"==(at.getComputedStyle?getComputedStyle(d,null):d.currentStyle).position
}),b
},W=function(){function b(d,f){f=f||ae.createElement(a[d]||"div"),d="on"+d;
var c=d in f;
return c||(f.setAttribute||(f=ae.createElement("div")),f.setAttribute&&f.removeAttribute&&(f.setAttribute(d,""),c=ax(f[d],"function"),ax(f[d],"undefined")||(f[d]=aj),f.removeAttribute(d))),f=null,c
}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};
return b
}(),K={}.hasOwnProperty;
ar=ax(K,"undefined")||ax(K.call,"undefined")?function(b,a){return a in b&&ax(b.constructor.prototype[a],"undefined")
}:function(b,a){return K.call(b,a)
},Function.prototype.bind||(Function.prototype.bind=function(c){var a=this;
if("function"!=typeof a){throw new TypeError
}var d=U.call(arguments,1),b=function(){if(this instanceof b){var g=function(){};
g.prototype=a.prototype;
var e=new g,f=a.apply(e,d.concat(U.call(arguments)));
return Object(f)===f?f:e
}return a.apply(c,d.concat(U.call(arguments)))
};
return b
}),J.flexbox=function(){return ad("flexWrap")
},J.flexboxlegacy=function(){return ad("boxDirection")
},J.canvas=function(){var a=ae.createElement("canvas");
return !(!a.getContext||!a.getContext("2d"))
},J.canvastext=function(){return !(!ah.canvas||!ax(ae.createElement("canvas").getContext("2d").fillText,"function"))
},J.webgl=function(){return !!at.WebGLRenderingContext
},J.touch=function(){var a;
return"ontouchstart" in at||at.DocumentTouch&&ae instanceof DocumentTouch?a=!0:Q(["@media (",B.join("touch-enabled),("),ac,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(b){a=9===b.offsetTop
}),a
},J.geolocation=function(){return"geolocation" in navigator
},J.postmessage=function(){return !!at.postMessage
},J.websqldatabase=function(){return !!at.openDatabase
},J.indexedDB=function(){return !!ad("indexedDB",at)
},J.hashchange=function(){return W("hashchange",at)&&(ae.documentMode===aj||ae.documentMode>7)
},J.history=function(){return !(!at.history||!history.pushState)
},J.draganddrop=function(){var a=ae.createElement("div");
return"draggable" in a||"ondragstart" in a&&"ondrop" in a
},J.websockets=function(){return"WebSocket" in at||"MozWebSocket" in at
},J.rgba=function(){return ag("background-color:rgba(150,255,150,.5)"),ao(aw.backgroundColor,"rgba")
},J.hsla=function(){return ag("background-color:hsla(120,40%,100%,.5)"),ao(aw.backgroundColor,"rgba")||ao(aw.backgroundColor,"hsla")
},J.multiplebgs=function(){return ag("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(aw.background)
},J.backgroundsize=function(){return ad("backgroundSize")
},J.borderimage=function(){return ad("borderImage")
},J.borderradius=function(){return ad("borderRadius")
},J.boxshadow=function(){return ad("boxShadow")
},J.textshadow=function(){return""===ae.createElement("div").style.textShadow
},J.opacity=function(){return ai("opacity:.55"),/^0.55$/.test(aw.opacity)
},J.cssanimations=function(){return ad("animationName")
},J.csscolumns=function(){return ad("columnCount")
},J.cssgradients=function(){var b="background-image:",a="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";
return ag((b+"-webkit- ".split(" ").join(a+b)+B.join(c+b)).slice(0,-b.length)),ao(aw.backgroundImage,"gradient")
},J.cssreflections=function(){return ad("boxReflect")
},J.csstransforms=function(){return !!ad("transform")
},J.csstransforms3d=function(){var a=!!ad("perspective");
return a&&"webkitPerspective" in aq.style&&Q("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b){a=9===b.offsetLeft&&3===b.offsetHeight
}),a
},J.csstransitions=function(){return ad("transition")
},J.fontface=function(){var a;
return Q('@font-face {font-family:"font";src:url("https://")}',function(f,d){var e=ae.getElementById("smodernizr"),b=e.sheet||e.styleSheet,c=b?b.cssRules&&b.cssRules[0]?b.cssRules[0].cssText:b.cssText||"":"";
a=/src/i.test(c)&&0===c.indexOf(d.split(" ")[0])
}),a
},J.generatedcontent=function(){var a;
return Q(["#",ac,"{font:0/0 a}#",ac,':after{content:"',aa,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3
}),a
},J.video=function(){var b=ae.createElement("video"),c=!1;
try{(c=!!b.canPlayType)&&(c=new Boolean(c),c.ogg=b.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=b.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=b.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))
}catch(a){}return c
},J.audio=function(){var b=ae.createElement("audio"),c=!1;
try{(c=!!b.canPlayType)&&(c=new Boolean(c),c.ogg=b.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=b.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=b.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(b.canPlayType("audio/x-m4a;")||b.canPlayType("audio/aac;")).replace(/^no$/,""))
}catch(a){}return c
},J.localstorage=function(){try{return localStorage.setItem(ac,ac),localStorage.removeItem(ac),!0
}catch(a){return !1
}},J.sessionstorage=function(){try{return sessionStorage.setItem(ac,ac),sessionStorage.removeItem(ac),!0
}catch(a){return !1
}},J.webworkers=function(){return !!at.Worker
},J.applicationcache=function(){return !!at.applicationCache
},J.svg=function(){return !!ae.createElementNS&&!!ae.createElementNS(I.svg,"svg").createSVGRect
},J.inlinesvg=function(){var a=ae.createElement("div");
return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==I.svg
},J.smil=function(){return !!ae.createElementNS&&/SVGAnimate/.test(ab.call(ae.createElementNS(I.svg,"animate")))
},J.svgclippaths=function(){return !!ae.createElementNS&&/SVGClipPath/.test(ab.call(ae.createElementNS(I.svg,"clipPath")))
};
for(var O in J){ar(J,O)&&(au=O.toLowerCase(),ah[au]=J[O](),X.push((ah[au]?"":"no-")+au))
}return ah.input||al(),ah.addTest=function(c,a){if("object"==typeof c){for(var b in c){ar(c,b)&&ah.addTest(b,c[b])
}}else{if(c=c.toLowerCase(),ah[c]!==aj){return ah
}a="function"==typeof a?a():a,"undefined"!=typeof ap&&ap&&(aq.className+=" "+(a?"":"no-")+c),ah[c]=a
}return ah
},ag(""),Z=R=null,function(P,w){function D(d,a){var f=d.createElement("p"),c=d.getElementsByTagName("head")[0]||d.documentElement;
return f.innerHTML="x<style>"+a+"</style>",c.insertBefore(f.lastChild,c.firstChild)
}function z(){var a=b.elements;
return"string"==typeof a?a.split(" "):a
}function C(c){var a=j[c[L]];
return a||(a={},M++,c[L]=M,j[M]=a),a
}function ay(f,g,d){if(g||(g=w),F){return g.createElement(f)
}d||(d=C(g));
var c;
return c=d.cache[f]?d.cache[f].cloneNode():A.test(f)?(d.cache[f]=d.createElem(f)).cloneNode():d.createElem(f),!c.canHaveChildren||E.test(f)||c.tagUrn?c:d.frag.appendChild(c)
}function H(h,m){if(h||(h=w),F){return h.createDocumentFragment()
}m=m||C(h);
for(var d=m.frag.cloneNode(),f=0,l=z(),g=l.length;
g>f;
f++){d.createElement(l[f])
}return d
}function T(c,a){a.cache||(a.cache={},a.createElem=c.createElement,a.createFrag=c.createDocumentFragment,a.frag=a.createFrag()),c.createElement=function(d){return b.shivMethods?ay(d,c,a):a.createElem(d)
},c.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+z().join().replace(/[\w\-]+/g,function(d){return a.createElem(d),a.frag.createElement(d),'c("'+d+'")'
})+");return n}")(b,a.frag)
}function x(c){c||(c=w);
var a=C(c);
return !b.shivCSS||k||a.hasCSS||(a.hasCSS=!!D(c,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),F||T(c,a),c
}var k,F,S="3.7.0",N=P.html5||{},E=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,A=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,L="_html5shiv",M=0,j={};
!function(){try{var a=w.createElement("a");
a.innerHTML="<xyz></xyz>",k="hidden" in a,F=1==a.childNodes.length||function(){w.createElement("a");
var d=w.createDocumentFragment();
return"undefined"==typeof d.cloneNode||"undefined"==typeof d.createDocumentFragment||"undefined"==typeof d.createElement
}()
}catch(c){k=!0,F=!0
}}();
var b={elements:N.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:S,shivCSS:N.shivCSS!==!1,supportsUnknownElements:F,shivMethods:N.shivMethods!==!1,type:"default",shivDocument:x,createElement:ay,createDocumentFragment:H};
P.html5=b,x(w)
}(this,ae),ah._version=ak,ah._prefixes=B,ah._domPrefixes=q,ah._cssomPrefixes=am,ah.mq=Y,ah.hasEvent=W,ah.testProp=function(a){return av([a])
},ah.testAllProps=ad,ah.testStyles=Q,ah.prefixed=function(b,a,c){return a?ad(b,a,c):ad(b,"pfx")
},aq.className=aq.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(ap?" js "+X.join(" "):""),ah
}(this,this.document);
/*!
 * sly 1.6.1 - 8th Aug 2015
 * https://github.com/darsain/sly
 *
 * Licensed under the MIT license.
 * http://opensource.org/licenses/MIT
 */
;
(function(s,x,e){var F="sly";
var E="Sly";
var y=F;
var p=x.cancelAnimationFrame||x.cancelRequestAnimationFrame;
var B=x.requestAnimationFrame;
var l,r;
var G=s(document);
var q="touchstart."+y+" mousedown."+y;
var k="mousemove."+y+" mouseup."+y;
var f="touchmove."+y+" touchend."+y;
var u=(document.implementation.hasFeature("Event.wheel","3.0")?"wheel.":"mousewheel.")+y;
var K="click."+y;
var a="mousedown."+y;
var t=["INPUT","SELECT","BUTTON","TEXTAREA"];
var b=[];
var A;
var o=Math.abs;
var v=Math.sqrt;
var m=Math.pow;
var C=Math.round;
var i=Math.max;
var H=Math.min;
var g=0;
G.on(u,function(w){var M=w.originalEvent[y];
var L=+new Date();
if(!M||M.options.scrollHijack<L-g){g=L
}});
function D(aA,aL,az){if(!(this instanceof D)){return new D(aA,aL,az)
}var aq=s.extend({},D.defaults,aL);
var aV=this;
var aF=I(aA);
var S=s(aA);
var a3=aq.slidee?s(aq.slidee).eq(0):S.children().eq(0);
var Y=0;
var a6=0;
var a7={start:0,center:0,end:0,cur:0,dest:0};
var aO=s(aq.scrollBar).eq(0);
var W=aO.children().eq(0);
var M=0;
var ai=0;
var aJ={start:0,end:0,cur:0};
var X=s(aq.pagesBar);
var a5=0;
var Z=[];
var at=0;
var aW=[];
var ax={firstItem:0,lastItem:0,centerItem:0,activeItem:null,activePage:0};
var aZ=new h(S[0]);
var aG=new h(a3[0]);
var R=new h(aO[0]);
var aw=new h(W[0]);
var ag=aq.itemNav==="basic";
var aX=aq.itemNav==="forceCentered";
var aS=aq.itemNav==="centered"||aX;
var ap=!aF&&(ag||aS||aX);
var a9=aq.scrollSource?s(aq.scrollSource):S;
var ae=aq.dragSource?s(aq.dragSource):S;
var U=s(aq.forward);
var bb=s(aq.backward);
var bf=s(aq.prev);
var N=s(aq.next);
var am=s(aq.prevPage);
var L=s(aq.nextPage);
var aa={};
var aC={};
var bc={};
var aN={};
var O={released:1};
var a0={last:0,delta:0,resetTime:200};
var al=0;
var ao=0;
var be=0;
var w=0;
var av,au;
if(!aF){aA=S[0]
}aV.initialized=0;
aV.frame=aA;
aV.slidee=a3[0];
aV.pos=a7;
aV.rel=ax;
aV.items=aW;
aV.pages=Z;
aV.isPaused=0;
aV.options=aq;
aV.dragging=O;
function P(bm){var bh=0;
var bi=Z.length;
a7.old=s.extend({},a7);
Y=aF?0:S[aq.horizontal?"width":"height"]();
M=aO[aq.horizontal?"width":"height"]();
a6=aF?aA:a3[aq.horizontal?"outerWidth":"outerHeight"]();
Z.length=0;
a7.start=0;
a7.end=i(a6-Y,0);
if(ap){bh=aW.length;
at=a3.children(aq.itemSelector);
aW.length=0;
var bl=j(a3,aq.horizontal?"paddingLeft":"paddingTop");
var bo=j(a3,aq.horizontal?"paddingRight":"paddingBottom");
var bg=s(at).css("boxSizing")==="border-box";
var bt=at.css("float")!=="none";
var bn=0;
var bp=at.length-1;
var br;
a6=0;
at.each(function(bv,bw){var bB=s(bw);
var by=bw.getBoundingClientRect();
var bC=C(aq.horizontal?by.width||by.right-by.left:by.height||by.bottom-by.top);
var bx=j(bB,aq.horizontal?"marginLeft":"marginTop");
var bu=j(bB,aq.horizontal?"marginRight":"marginBottom");
var bA=bC+bx+bu;
var bz=!bx||!bu;
var bD={};
bD.el=bw;
bD.size=bz?bC:bA;
bD.half=bD.size/2;
bD.start=a6+(bz?bx:0);
bD.center=bD.start-C(Y/2-bD.size/2);
bD.end=bD.start-Y+bD.size;
if(!bv){a6+=bl
}a6+=bA;
if(!aq.horizontal&&!bt){if(bu&&bx&&bv>0){a6-=H(bx,bu)
}}if(bv===bp){bD.end+=bo;
a6+=bo;
bn=bz?bu:0
}aW.push(bD);
br=bD
});
a3[0].style[aq.horizontal?"width":"height"]=(bg?a6:a6-bl-bo)+"px";
a6-=bn;
if(aW.length){a7.start=aW[0][aX?"center":"start"];
a7.end=aX?br.center:Y<a6?br.end:a7.start
}else{a7.start=a7.end=0
}}a7.center=C(a7.end/2+a7.start/2);
ah();
if(W.length&&M>0){if(aq.dynamicHandle){ai=a7.start===a7.end?M:C(M*Y/a6);
ai=z(ai,aq.minHandleSize,M);
W[0].style[aq.horizontal?"width":"height"]=ai+"px"
}else{ai=W[aq.horizontal?"outerWidth":"outerHeight"]()
}aJ.end=M-ai;
if(!al){ar()
}}if(!aF&&Y>0){var bs=a7.start;
var bq="";
if(ap){s.each(aW,function(bu,bv){if(aX){Z.push(bv.center)
}else{if(bv.start+bv.size>bs&&bs<=a7.end){bs=bv.start;
Z.push(bs);
bs+=Y;
if(bs>a7.end&&bs<a7.end+Y){Z.push(a7.end)
}}}})
}else{while(bs-Y<a7.end){Z.push(bs);
bs+=Y
}}if(X[0]&&bi!==Z.length){for(var bk=0;
bk<Z.length;
bk++){bq+=aq.pageBuilder.call(aV,bk)
}a5=X.html(bq).children();
a5.eq(ax.activePage).addClass(aq.activeClass)
}}ax.slideeSize=a6;
ax.frameSize=Y;
ax.sbSize=M;
ax.handleSize=ai;
if(ap){if(bm&&aq.startAt!=null){aH(aq.startAt);
aV[aS?"toCenter":"toStart"](aq.startAt)
}var bj=aW[ax.activeItem];
aQ(aS&&bj?bj.center:z(a7.dest,a7.start,a7.end))
}else{if(bm){if(aq.startAt!=null){aQ(aq.startAt,1)
}}else{aQ(z(a7.dest,a7.start,a7.end))
}}aT("load")
}aV.reload=function(){P()
};
function aQ(bk,bh,bi){if(ap&&O.released&&!bi){var bj=aE(bk);
var bg=bk>a7.start&&bk<a7.end;
if(aS){if(bg){bk=aW[bj.centerItem].center
}if(aX&&aq.activateMiddle){aH(bj.centerItem)
}}else{if(bg){bk=aW[bj.firstItem].start
}}}if(O.init&&O.slidee&&aq.elasticBounds){if(bk>a7.end){bk=a7.end+(bk-a7.end)/6
}else{if(bk<a7.start){bk=a7.start+(bk-a7.start)/6
}}}else{bk=z(bk,a7.start,a7.end)
}bc.start=+new Date();
bc.time=0;
bc.from=a7.cur;
bc.to=bk;
bc.delta=bk-a7.cur;
bc.tweesing=O.tweese||O.init&&!O.slidee;
bc.immediate=!bc.tweesing&&(bh||O.init&&O.slidee||!aq.speed);
O.tweese=0;
if(bk!==a7.dest){a7.dest=bk;
aT("change");
if(!al){aB()
}}aP();
ah();
af();
aD()
}function aB(){if(!aV.initialized){return
}if(!al){al=B(aB);
if(O.released){aT("moveStart")
}return
}if(bc.immediate){a7.cur=bc.to
}else{if(bc.tweesing){bc.tweeseDelta=bc.to-a7.cur;
if(o(bc.tweeseDelta)<0.1){a7.cur=bc.to
}else{a7.cur+=bc.tweeseDelta*(O.released?aq.swingSpeed:aq.syncSpeed)
}}else{bc.time=H(+new Date()-bc.start,aq.speed);
a7.cur=bc.from+bc.delta*s.easing[aq.easing](bc.time/aq.speed,bc.time,0,1,aq.speed)
}}if(bc.to===a7.cur){a7.cur=bc.to;
O.tweese=al=0
}else{al=B(aB)
}aT("move");
if(!aF){if(l){a3[0].style[l]=r+(aq.horizontal?"translateX":"translateY")+"("+(-a7.cur)+"px)"
}else{a3[0].style[aq.horizontal?"left":"top"]=-C(a7.cur)+"px"
}}if(!al&&O.released){aT("moveEnd")
}ar()
}function ar(){if(W.length){aJ.cur=a7.start===a7.end?0:(((O.init&&!O.slidee)?a7.dest:a7.cur)-a7.start)/(a7.end-a7.start)*aJ.end;
aJ.cur=z(C(aJ.cur),aJ.start,aJ.end);
if(aC.hPos!==aJ.cur){aC.hPos=aJ.cur;
if(l){W[0].style[l]=r+(aq.horizontal?"translateX":"translateY")+"("+aJ.cur+"px)"
}else{W[0].style[aq.horizontal?"left":"top"]=aJ.cur+"px"
}}}}function aD(){if(a5[0]&&aC.page!==ax.activePage){aC.page=ax.activePage;
a5.removeClass(aq.activeClass).eq(ax.activePage).addClass(aq.activeClass);
aT("activePage",aC.page)
}}aV.getPos=function(bj){if(ap){var bh=T(bj);
return bh!==-1?aW[bh]:false
}else{var bg=a3.find(bj).eq(0);
if(bg[0]){var bk=aq.horizontal?bg.offset().left-a3.offset().left:bg.offset().top-a3.offset().top;
var bi=bg[aq.horizontal?"outerWidth":"outerHeight"]();
return{start:bk,center:bk-Y/2+bi/2,end:bk-Y+bi,size:bi}
}else{return false
}}};
aV.moveBy=function(bg){aN.speed=bg;
if(O.init||!aN.speed||a7.cur===(aN.speed>0?a7.end:a7.start)){return
}aN.lastTime=+new Date();
aN.startPos=a7.cur;
aR("button");
O.init=1;
aT("moveStart");
p(w);
ak()
};
function ak(){if(!aN.speed||a7.cur===(aN.speed>0?a7.end:a7.start)){aV.stop()
}w=O.init?B(ak):0;
aN.now=+new Date();
aN.pos=a7.cur+(aN.now-aN.lastTime)/1000*aN.speed;
aQ(O.init?aN.pos:C(aN.pos));
if(!O.init&&a7.cur===a7.dest){aT("moveEnd")
}aN.lastTime=aN.now
}aV.stop=function(){if(O.source==="button"){O.init=0;
O.released=1
}};
aV.prev=function(){aV.activate(ax.activeItem==null?0:ax.activeItem-1)
};
aV.next=function(){aV.activate(ax.activeItem==null?0:ax.activeItem+1)
};
aV.prevPage=function(){aV.activatePage(ax.activePage-1)
};
aV.nextPage=function(){aV.activatePage(ax.activePage+1)
};
aV.slideBy=function(bh,bg){if(!bh){return
}if(ap){aV[aS?"toCenter":"toStart"](z((aS?ax.centerItem:ax.firstItem)+aq.scrollBy*bh,0,aW.length))
}else{aQ(a7.dest+bh,bg)
}};
aV.slideTo=function(bh,bg){aQ(bh,bg)
};
function aK(bg,bj,bh){if(J(bj)==="boolean"){bh=bj;
bj=e
}if(bj===e){aQ(a7[bg],bh)
}else{if(aS&&bg!=="center"){return
}var bi=aV.getPos(bj);
if(bi){aQ(bi[bg],bh,!aS)
}}}aV.toStart=function(bh,bg){aK("start",bh,bg)
};
aV.toEnd=function(bh,bg){aK("end",bh,bg)
};
aV.toCenter=function(bh,bg){aK("center",bh,bg)
};
function T(bg){return bg!=null?I(bg)?bg>=0&&bg<aW.length?bg:-1:at.index(bg):-1
}aV.getIndex=T;
function bd(bg){return T(I(bg)&&bg<0?bg+aW.length:bg)
}function aH(bh,bi){var bg=T(bh);
if(!ap||bg<0){return false
}if(aC.active!==bg||bi){at.eq(ax.activeItem).removeClass(aq.activeClass);
at.eq(bg).addClass(aq.activeClass);
aC.active=ax.activeItem=bg;
af();
aT("active",bg)
}return bg
}aV.activate=function(bi,bg){var bh=aH(bi);
if(aq.smart&&bh!==false){if(aS){aV.toCenter(bh,bg)
}else{if(bh>=ax.lastItem){aV.toStart(bh,bg)
}else{if(bh<=ax.firstItem){aV.toEnd(bh,bg)
}else{aP()
}}}}};
aV.activatePage=function(bh,bg){if(I(bh)){aQ(Z[z(bh,0,Z.length-1)],bg)
}};
function aE(bm){bm=z(I(bm)?bm:a7.dest,a7.start,a7.end);
var bk={};
var bn=aX?0:Y/2;
if(!aF){for(var bh=0,bi=Z.length;
bh<bi;
bh++){if(bm>=a7.end||bh===Z.length-1){bk.activePage=Z.length-1;
break
}if(bm<=Z[bh]+bn){bk.activePage=bh;
break
}}}if(ap){var bl=false;
var bp=false;
var bg=false;
for(var bj=0,bo=aW.length;
bj<bo;
bj++){if(bl===false&&bm<=aW[bj].start+aW[bj].half){bl=bj
}if(bg===false&&bm<=aW[bj].center+aW[bj].half){bg=bj
}if(bj===bo-1||bm<=aW[bj].end+aW[bj].half){bp=bj;
break
}}bk.firstItem=I(bl)?bl:0;
bk.centerItem=I(bg)?bg:bk.firstItem;
bk.lastItem=I(bp)?bp:bk.centerItem
}return bk
}function ah(bg){s.extend(ax,aE(bg))
}function af(){var bh=a7.dest<=a7.start;
var bk=a7.dest>=a7.end;
var bi=(bh?1:0)|(bk?2:0);
if(aC.slideePosState!==bi){aC.slideePosState=bi;
if(am.is("button,input")){am.prop("disabled",bh)
}if(L.is("button,input")){L.prop("disabled",bk)
}am.add(bb)[bh?"addClass":"removeClass"](aq.disabledClass);
L.add(U)[bk?"addClass":"removeClass"](aq.disabledClass)
}if(aC.fwdbwdState!==bi&&O.released){aC.fwdbwdState=bi;
if(bb.is("button,input")){bb.prop("disabled",bh)
}if(U.is("button,input")){U.prop("disabled",bk)
}}if(ap&&ax.activeItem!=null){var bg=ax.activeItem===0;
var bj=ax.activeItem>=aW.length-1;
var bl=(bg?1:0)|(bj?2:0);
if(aC.itemsButtonState!==bl){aC.itemsButtonState=bl;
if(bf.is("button,input")){bf.prop("disabled",bg)
}if(N.is("button,input")){N.prop("disabled",bj)
}bf[bg?"addClass":"removeClass"](aq.disabledClass);
N[bj?"addClass":"removeClass"](aq.disabledClass)
}}}aV.resume=function(bg){if(!aq.cycleBy||!aq.cycleInterval||aq.cycleBy==="items"&&(!aW[0]||ax.activeItem==null)||bg<aV.isPaused){return
}aV.isPaused=0;
if(be){be=clearTimeout(be)
}else{aT("resume")
}be=setTimeout(function(){aT("cycle");
switch(aq.cycleBy){case"items":aV.activate(ax.activeItem>=aW.length-1?0:ax.activeItem+1);
break;
case"pages":aV.activatePage(ax.activePage>=Z.length-1?0:ax.activePage+1);
break
}},aq.cycleInterval)
};
aV.pause=function(bg){if(bg<aV.isPaused){return
}aV.isPaused=bg||100;
if(be){be=clearTimeout(be);
aT("pause")
}};
aV.toggle=function(){aV[be?"pause":"resume"]()
};
aV.set=function(bg,bh){if(s.isPlainObject(bg)){s.extend(aq,bg)
}else{if(aq.hasOwnProperty(bg)){aq[bg]=bh
}}};
aV.add=function(bi,bh){var bg=s(bi);
if(ap){if(bh==null||!aW[0]||bh>=aW.length){bg.appendTo(a3)
}else{if(aW.length){bg.insertBefore(aW[bh].el)
}}if(ax.activeItem!=null&&bh<=ax.activeItem){aC.active=ax.activeItem+=bg.length
}}else{a3.append(bg)
}P()
};
aV.remove=function(bh){if(ap){var bg=bd(bh);
if(bg>-1){at.eq(bg).remove();
var bi=bg===ax.activeItem;
if(ax.activeItem!=null&&bg<ax.activeItem){aC.active=--ax.activeItem
}P();
if(bi){aC.active=null;
aV.activate(ax.activeItem)
}}}else{s(bh).remove();
P()
}};
function aY(bi,bg,bl){bi=bd(bi);
bg=bd(bg);
if(bi>-1&&bg>-1&&bi!==bg&&(!bl||bg!==bi-1)&&(bl||bg!==bi+1)){at.eq(bi)[bl?"insertAfter":"insertBefore"](aW[bg].el);
var bk=bi<bg?bi:(bl?bg:bg-1);
var bh=bi>bg?bi:(bl?bg+1:bg);
var bj=bi>bg;
if(ax.activeItem!=null){if(bi===ax.activeItem){aC.active=ax.activeItem=bl?(bj?bg+1:bg):(bj?bg:bg-1)
}else{if(ax.activeItem>bk&&ax.activeItem<bh){aC.active=ax.activeItem+=bj?1:-1
}}}P()
}}aV.moveAfter=function(bh,bg){aY(bh,bg,1)
};
aV.moveBefore=function(bh,bg){aY(bh,bg)
};
aV.on=function(bh,bj){if(J(bh)==="object"){for(var bi in bh){if(bh.hasOwnProperty(bi)){aV.on(bi,bh[bi])
}}}else{if(J(bj)==="function"){var bm=bh.split(" ");
for(var bn=0,bg=bm.length;
bn<bg;
bn++){aa[bm[bn]]=aa[bm[bn]]||[];
if(Q(bm[bn],bj)===-1){aa[bm[bn]].push(bj)
}}}else{if(J(bj)==="array"){for(var bl=0,bk=bj.length;
bl<bk;
bl++){aV.on(bh,bj[bl])
}}}}};
aV.one=function(bg,bi){function bh(){bi.apply(aV,arguments);
aV.off(bg,bh)
}aV.on(bg,bh)
};
aV.off=function(bi,bj){if(bj instanceof Array){for(var bl=0,bk=bj.length;
bl<bk;
bl++){aV.off(bi,bj[bl])
}}else{var bm=bi.split(" ");
for(var bn=0,bg=bm.length;
bn<bg;
bn++){aa[bm[bn]]=aa[bm[bn]]||[];
if(bj==null){aa[bm[bn]].length=0
}else{var bh=Q(bm[bn],bj);
if(bh!==-1){aa[bm[bn]].splice(bh,1)
}}}}};
function Q(bh,bj){for(var bi=0,bg=aa[bh].length;
bi<bg;
bi++){if(aa[bh][bi]===bj){return bi
}}return -1
}function aP(){if(O.released&&!aV.isPaused){aV.resume()
}}function aM(bg){return C(z(bg,aJ.start,aJ.end)/aJ.end*(a7.end-a7.start))+a7.start
}function a2(){O.history[0]=O.history[1];
O.history[1]=O.history[2];
O.history[2]=O.history[3];
O.history[3]=O.delta
}function aR(bg){O.released=0;
O.source=bg;
O.slidee=bg==="slidee"
}function a8(bi){var bg=bi.type==="touchstart";
var bj=bi.data.source;
var bh=bj==="slidee";
if(O.init||!bg&&aI(bi.target)){return
}if(bj==="handle"&&(!aq.dragHandle||aJ.start===aJ.end)){return
}if(bh&&!(bg?aq.touchDragging:aq.mouseDragging&&bi.which<2)){return
}if(!bg){n(bi)
}aR(bj);
O.init=0;
O.$source=s(bi.target);
O.touch=bg;
O.pointer=bg?bi.originalEvent.touches[0]:bi;
O.initX=O.pointer.pageX;
O.initY=O.pointer.pageY;
O.initPos=bh?a7.cur:aJ.cur;
O.start=+new Date();
O.time=0;
O.path=0;
O.delta=0;
O.locked=0;
O.history=[0,0,0,0];
O.pathToLock=bh?bg?30:10:0;
G.on(bg?f:k,V);
aV.pause(1);
(bh?a3:W).addClass(aq.draggedClass);
aT("moveStart");
if(bh){ao=setInterval(a2,10)
}}function V(bg){O.released=bg.type==="mouseup"||bg.type==="touchend";
O.pointer=O.touch?bg.originalEvent[O.released?"changedTouches":"touches"][0]:bg;
O.pathX=O.pointer.pageX-O.initX;
O.pathY=O.pointer.pageY-O.initY;
O.path=v(m(O.pathX,2)+m(O.pathY,2));
O.delta=aq.horizontal?O.pathX:O.pathY;
if(!O.released&&O.path<1){return
}if(!O.init){if(O.path<aq.dragThreshold){return O.released?a4():e
}else{if(aq.horizontal?o(O.pathX)>o(O.pathY):o(O.pathX)<o(O.pathY)){O.init=1
}else{return a4()
}}}n(bg);
if(!O.locked&&O.path>O.pathToLock&&O.slidee){O.locked=1;
O.$source.on(K,c)
}if(O.released){a4();
if(aq.releaseSwing&&O.slidee){O.swing=(O.delta-O.history[0])/40*300;
O.delta+=O.swing;
O.tweese=o(O.swing)>10
}}aQ(O.slidee?C(O.initPos-O.delta):aM(O.initPos+O.delta))
}function a4(){clearInterval(ao);
O.released=true;
G.off(O.touch?f:k,V);
(O.slidee?a3:W).removeClass(aq.draggedClass);
setTimeout(function(){O.$source.off(K,c)
});
if(a7.cur===a7.dest&&O.init){aT("moveEnd")
}aV.resume(1);
O.init=0
}function aI(bg){return ~s.inArray(bg.nodeName,t)||s(bg).is(aq.interactive)
}function ay(){aV.stop();
G.off("mouseup",ay)
}function ad(bg){n(bg);
switch(this){case U[0]:case bb[0]:aV.moveBy(U.is(this)?aq.moveBy:-aq.moveBy);
G.on("mouseup",ay);
break;
case bf[0]:aV.prev();
break;
case N[0]:aV.next();
break;
case am[0]:aV.prevPage();
break;
case L[0]:aV.nextPage();
break
}}function aj(bg){a0.curDelta=((aq.horizontal?bg.deltaY||bg.deltaX:bg.deltaY)||-bg.wheelDelta);
a0.curDelta/=bg.deltaMode===1?3:100;
if(!ap){return a0.curDelta
}A=+new Date();
if(a0.last<A-a0.resetTime){a0.delta=0
}a0.last=A;
a0.delta+=a0.curDelta;
if(o(a0.delta)<1){a0.finalDelta=0
}else{a0.finalDelta=C(a0.delta/1);
a0.delta%=1
}return a0.finalDelta
}function aU(bg){bg.originalEvent[y]=aV;
var bh=+new Date();
if(g+aq.scrollHijack>bh&&a9[0]!==document&&a9[0]!==window){g=bh;
return
}if(!aq.scrollBy||a7.start===a7.end){return
}var bi=aj(bg.originalEvent);
if(aq.scrollTrap||bi>0&&a7.dest<a7.end||bi<0&&a7.dest>a7.start){n(bg,1)
}aV.slideBy(aq.scrollBy*bi)
}function ba(bg){if(aq.clickBar&&bg.target===aO[0]){n(bg);
aQ(aM((aq.horizontal?bg.pageX-aO.offset().left:bg.pageY-aO.offset().top)-ai/2))
}}function ac(bg){if(!aq.keyboardNavBy){return
}switch(bg.which){case aq.horizontal?37:38:n(bg);
aV[aq.keyboardNavBy==="pages"?"prevPage":"prev"]();
break;
case aq.horizontal?39:40:n(bg);
aV[aq.keyboardNavBy==="pages"?"nextPage":"next"]();
break
}}function ab(bg){if(aI(this)){bg.originalEvent[y+"ignore"]=true;
return
}if(this.parentNode!==a3[0]||bg.originalEvent[y+"ignore"]){return
}aV.activate(this)
}function a1(){if(this.parentNode===X[0]){aV.activatePage(a5.index(this))
}}function an(bg){if(aq.pauseOnHover){aV[bg.type==="mouseenter"?"pause":"resume"](2)
}}function aT(bh,bg){if(aa[bh]){au=aa[bh].length;
b.length=0;
for(av=0;
av<au;
av++){b.push(aa[bh][av])
}for(av=0;
av<au;
av++){b[av].call(aV,bh,bg)
}}}aV.destroy=function(){D.removeInstance(aA);
a9.add(W).add(aO).add(X).add(U).add(bb).add(bf).add(N).add(am).add(L).off("."+y);
G.off("keydown",ac);
bf.add(N).add(am).add(L).removeClass(aq.disabledClass);
if(at&&ax.activeItem!=null){at.eq(ax.activeItem).removeClass(aq.activeClass)
}X.empty();
if(!aF){S.off("."+y);
aZ.restore();
aG.restore();
R.restore();
aw.restore();
s.removeData(aA,y)
}aW.length=Z.length=0;
aC={};
aV.initialized=0;
return aV
};
aV.init=function(){if(aV.initialized){return
}if(D.getInstance(aA)){throw new Error("There is already a Sly instance on this element")
}D.storeInstance(aA,aV);
aV.on(az);
var bg=["overflow","position"];
var bh=["position","webkitTransform","msTransform","transform","left","top","width","height"];
aZ.save.apply(aZ,bg);
R.save.apply(R,bg);
aG.save.apply(aG,bh);
aw.save.apply(aw,bh);
var bi=W;
if(!aF){bi=bi.add(a3);
S.css("overflow","hidden");
if(!l&&S.css("position")==="static"){S.css("position","relative")
}}if(l){if(r){bi.css(l,r)
}}else{if(aO.css("position")==="static"){aO.css("position","relative")
}bi.css({position:"absolute"})
}if(aq.forward){U.on(a,ad)
}if(aq.backward){bb.on(a,ad)
}if(aq.prev){bf.on(K,ad)
}if(aq.next){N.on(K,ad)
}if(aq.prevPage){am.on(K,ad)
}if(aq.nextPage){L.on(K,ad)
}a9.on(u,aU);
if(aO[0]){aO.on(K,ba)
}if(ap&&aq.activateOn){S.on(aq.activateOn+"."+y,"*",ab)
}if(X[0]&&aq.activatePageOn){X.on(aq.activatePageOn+"."+y,"*",a1)
}ae.on(q,{source:"slidee"},a8);
if(W){W.on(q,{source:"handle"},a8)
}G.on("keydown",ac);
if(!aF){S.on("mouseenter."+y+" mouseleave."+y,an);
S.on("scroll."+y,d)
}aV.initialized=1;
P(true);
if(aq.cycleBy&&!aF){aV[aq.startPaused?"pause":"resume"]()
}return aV
}
}D.getInstance=function(w){return s.data(w,y)
};
D.storeInstance=function(w,L){return s.data(w,y,L)
};
D.removeInstance=function(w){return s.removeData(w,y)
};
function J(w){if(w==null){return String(w)
}if(typeof w==="object"||typeof w==="function"){return Object.prototype.toString.call(w).match(/\s([a-z]+)/i)[1].toLowerCase()||"object"
}return typeof w
}function n(L,w){L.preventDefault();
if(w){L.stopPropagation()
}}function c(w){n(w,1);
s(this).off(w.type,c)
}function d(){this.scrollLeft=0;
this.scrollTop=0
}function I(w){return !isNaN(parseFloat(w))&&isFinite(w)
}function j(w,L){return 0|C(String(w.css(L)).replace(/[^\-0-9.]/g,""))
}function z(M,L,w){return M<L?L:M>w?w:M
}function h(L){var w={};
w.style={};
w.save=function(){if(!L||!L.nodeType){return
}for(var M=0;
M<arguments.length;
M++){w.style[arguments[M]]=L.style[arguments[M]]
}return w
};
w.restore=function(){if(!L||!L.nodeType){return
}for(var M in w.style){if(w.style.hasOwnProperty(M)){L.style[M]=w.style[M]
}}return w
};
return w
}(function(L){B=L.requestAnimationFrame||L.webkitRequestAnimationFrame||O;
var N=new Date().getTime();
function O(P){var R=new Date().getTime();
var w=Math.max(0,16-(R-N));
var Q=setTimeout(P,w);
N=R;
return Q
}var M=L.cancelAnimationFrame||L.webkitCancelAnimationFrame||L.clearTimeout;
p=function(w){M.call(L,w)
}
}(window));
(function(){var M=["","Webkit","Moz","ms","O"];
var w=document.createElement("div");
function L(Q){for(var P=0,O=M.length;
P<O;
P++){var N=M[P]?M[P]+Q.charAt(0).toUpperCase()+Q.slice(1):Q;
if(w.style[N]!=null){return N
}}}l=L("transform");
r=L("perspective")?"translateZ(0) ":""
}());
x[E]=D;
s.fn[F]=function(L,M){var N,w;
if(!s.isPlainObject(L)){if(J(L)==="string"||L===false){N=L===false?"destroy":L;
w=Array.prototype.slice.call(arguments,1)
}L={}
}return this.each(function(P,O){var Q=D.getInstance(O);
if(!Q&&!N){Q=new D(O,L,M).init()
}else{if(Q&&N){if(Q[N]){Q[N].apply(Q,w)
}}}})
};
D.defaults={slidee:null,horizontal:false,itemNav:null,itemSelector:null,smart:false,activateOn:null,activateMiddle:false,scrollSource:null,scrollBy:0,scrollHijack:300,scrollTrap:false,dragSource:null,mouseDragging:false,touchDragging:false,releaseSwing:false,swingSpeed:0.2,elasticBounds:false,dragThreshold:3,interactive:null,scrollBar:null,dragHandle:false,dynamicHandle:false,minHandleSize:50,clickBar:false,syncSpeed:0.5,pagesBar:null,activatePageOn:null,pageBuilder:function(w){return"<li>"+(w+1)+"</li>"
},forward:null,backward:null,prev:null,next:null,prevPage:null,nextPage:null,cycleBy:null,cycleInterval:5000,pauseOnHover:false,startPaused:false,moveBy:300,speed:0,easing:"swing",startAt:null,keyboardNavBy:null,draggedClass:"dragged",activeClass:"active",disabledClass:"disabled"}
}(jQuery,window));