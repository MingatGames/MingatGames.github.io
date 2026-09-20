var dl=Object.defineProperty;var fl=(s,t,e)=>t in s?dl(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var I=(s,t,e)=>fl(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tr="160",pl=0,Hr=1,ml=2,yo=1,So=2,un=3,Tn=0,De=1,Ze=2,Sn=0,ui=1,Vr=2,Wr=3,Xr=4,gl=5,Nn=100,_l=101,vl=102,qr=103,Yr=104,xl=200,Ml=201,yl=202,Sl=203,pr=204,mr=205,wl=206,El=207,Tl=208,bl=209,Al=210,Rl=211,Cl=212,Ll=213,Pl=214,Dl=0,Il=1,Ul=2,gs=3,Nl=4,Fl=5,Ol=6,Bl=7,wo=0,Gl=1,zl=2,wn=0,kl=1,Hl=2,Vl=3,Wl=4,Xl=5,ql=6,Eo=300,fi=301,pi=302,gr=303,_r=304,Es=306,vr=1e3,Je=1001,xr=1002,Ce=1003,jr=1004,Is=1005,He=1006,Yl=1007,Pi=1008,En=1009,jl=1010,Kl=1011,br=1012,To=1013,Mn=1014,yn=1015,Di=1016,bo=1017,Ao=1018,Bn=1020,$l=1021,Qe=1023,Zl=1024,Jl=1025,Gn=1026,mi=1027,Ql=1028,Ro=1029,tc=1030,Co=1031,Lo=1033,Us=33776,Ns=33777,Fs=33778,Os=33779,Kr=35840,$r=35841,Zr=35842,Jr=35843,Po=36196,Qr=37492,ta=37496,ea=37808,na=37809,ia=37810,sa=37811,ra=37812,aa=37813,oa=37814,la=37815,ca=37816,ha=37817,ua=37818,da=37819,fa=37820,pa=37821,Bs=36492,ma=36494,ga=36495,ec=36283,_a=36284,va=36285,xa=36286,Do=3e3,zn=3001,nc=3200,ic=3201,Io=0,sc=1,We="",ye="srgb",pn="srgb-linear",Ar="display-p3",Ts="display-p3-linear",_s="linear",se="srgb",vs="rec709",xs="p3",Vn=7680,Ma=519,rc=512,ac=513,oc=514,Uo=515,lc=516,cc=517,hc=518,uc=519,Mr=35044,ya="300 es",yr=1035,dn=2e3,Ms=2001;class _i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sa=1234567;const Ri=Math.PI/180,Ii=180/Math.PI;function fn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[s&255]+we[s>>8&255]+we[s>>16&255]+we[s>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function Le(s,t,e){return Math.max(t,Math.min(e,s))}function Rr(s,t){return(s%t+t)%t}function dc(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function fc(s,t,e){return s!==t?(e-s)/(t-s):0}function Ci(s,t,e){return(1-e)*s+e*t}function pc(s,t,e,n){return Ci(s,t,1-Math.exp(-e*n))}function mc(s,t=1){return t-Math.abs(Rr(s,t*2)-t)}function gc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function _c(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function vc(s,t){return s+Math.floor(Math.random()*(t-s+1))}function xc(s,t){return s+Math.random()*(t-s)}function Mc(s){return s*(.5-Math.random())}function yc(s){s!==void 0&&(Sa=s);let t=Sa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sc(s){return s*Ri}function wc(s){return s*Ii}function Sr(s){return(s&s-1)===0&&s!==0}function Ec(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ys(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Tc(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),m=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*m,a*c);break;case"YXY":s.set(l*m,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function nn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Jt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const $e={DEG2RAD:Ri,RAD2DEG:Ii,generateUUID:fn,clamp:Le,euclideanModulo:Rr,mapLinear:dc,inverseLerp:fc,lerp:Ci,damp:pc,pingpong:mc,smoothstep:gc,smootherstep:_c,randInt:vc,randFloat:xc,randFloatSpread:Mc,seededRandom:yc,degToRad:Sc,radToDeg:wc,isPowerOfTwo:Sr,ceilPowerOfTwo:Ec,floorPowerOfTwo:ys,setQuaternionFromProperEuler:Tc,normalize:Jt,denormalize:nn};class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,i,r,o,a,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],_=i[0],p=i[3],d=i[6],y=i[1],v=i[4],w=i[7],C=i[2],A=i[5],b=i[8];return r[0]=o*_+a*y+l*C,r[3]=o*p+a*v+l*A,r[6]=o*d+a*w+l*b,r[1]=c*_+h*y+u*C,r[4]=c*p+h*v+u*A,r[7]=c*d+h*w+u*b,r[2]=f*_+m*y+g*C,r[5]=f*p+m*v+g*A,r[8]=f*d+m*w+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,m=c*r-o*l,g=e*u+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Gs.makeScale(t,e)),this}rotate(t){return this.premultiply(Gs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gs=new qt;function No(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ss(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bc(){const s=Ss("canvas");return s.style.display="block",s}const wa={};function Li(s){s in wa||(wa[s]=!0,console.warn(s))}const Ea=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ta=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zi={[pn]:{transfer:_s,primaries:vs,toReference:s=>s,fromReference:s=>s},[ye]:{transfer:se,primaries:vs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ts]:{transfer:_s,primaries:xs,toReference:s=>s.applyMatrix3(Ta),fromReference:s=>s.applyMatrix3(Ea)},[Ar]:{transfer:se,primaries:xs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ta),fromReference:s=>s.applyMatrix3(Ea).convertLinearToSRGB()}},Ac=new Set([pn,Ts]),Qt={enabled:!0,_workingColorSpace:pn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ac.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=zi[t].toReference,i=zi[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return zi[s].primaries},getTransfer:function(s){return s===We?_s:zi[s].transfer}};function di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Wn;class Fo{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Wn===void 0&&(Wn=Ss("canvas")),Wn.width=t.width,Wn.height=t.height;const n=Wn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Wn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ss("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=di(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rc=0;class Oo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=fn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ks(i[o].image)):r.push(ks(i[o]))}else r=ks(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function ks(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cc=0;class Ie extends _i{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=Je,i=Je,r=He,o=Pi,a=Qe,l=En,c=Ie.DEFAULT_ANISOTROPY,h=We){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=fn(),this.name="",this.source=new Oo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===zn?ye:We),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Eo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vr:t.x=t.x-Math.floor(t.x);break;case Je:t.x=t.x<0?0:1;break;case xr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vr:t.y=t.y-Math.floor(t.y);break;case Je:t.y=t.y<0?0:1;break;case xr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ye?zn:Do}set encoding(t){Li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===zn?ye:We}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=Eo;Ie.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,i=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,w=(m+1)/2,C=(d+1)/2,A=(h+f)/4,b=(u+_)/4,O=(g+p)/4;return v>w&&v>C?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=A/n,r=b/n):w>C?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=A/i,r=O/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=b/r,i=O/r),this.set(n,i,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lc extends _i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Li("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===zn?ye:We),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ie(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Oo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends Lc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Bo extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pc extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==m||h!==g){let p=1-a;const d=l*f+c*m+h*g+u*_,y=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const C=Math.sqrt(v),A=Math.atan2(C,d*y);p=Math.sin(p*A)/C,a=Math.sin(a*A)/C}const w=a*y;if(l=l*p+f*w,c=c*p+m*w,h=h*p+g*w,u=u*p+_*w,p===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*m-c*f,t[e+1]=l*g+h*f+c*u-a*m,t[e+2]=c*g+h*m+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),m=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ba.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ba.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hs.copy(this).projectOnVector(t),this.sub(Hs)}reflect(t){return this.sub(Hs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hs=new R,ba=new Ni;class Fi{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ye):Ye.fromBufferAttribute(r,o),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ki.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ki.copy(n.boundingBox)),ki.applyMatrix4(t.matrixWorld),this.union(ki)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mi),Hi.subVectors(this.max,Mi),Xn.subVectors(t.a,Mi),qn.subVectors(t.b,Mi),Yn.subVectors(t.c,Mi),mn.subVectors(qn,Xn),gn.subVectors(Yn,qn),Cn.subVectors(Xn,Yn);let e=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-Cn.z,Cn.y,mn.z,0,-mn.x,gn.z,0,-gn.x,Cn.z,0,-Cn.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-Cn.y,Cn.x,0];return!Vs(e,Xn,qn,Yn,Hi)||(e=[1,0,0,0,1,0,0,0,1],!Vs(e,Xn,qn,Yn,Hi))?!1:(Vi.crossVectors(mn,gn),e=[Vi.x,Vi.y,Vi.z],Vs(e,Xn,qn,Yn,Hi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(an),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const an=[new R,new R,new R,new R,new R,new R,new R,new R],Ye=new R,ki=new Fi,Xn=new R,qn=new R,Yn=new R,mn=new R,gn=new R,Cn=new R,Mi=new R,Hi=new R,Vi=new R,Ln=new R;function Vs(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ln.fromArray(s,r);const a=i.x*Math.abs(Ln.x)+i.y*Math.abs(Ln.y)+i.z*Math.abs(Ln.z),l=t.dot(Ln),c=e.dot(Ln),h=n.dot(Ln);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Dc=new Fi,yi=new R,Ws=new R;class Oi{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Dc.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yi.subVectors(t,this.center);const e=yi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(yi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ws.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yi.copy(t.center).add(Ws)),this.expandByPoint(yi.copy(t.center).sub(Ws))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new R,Xs=new R,Wi=new R,_n=new R,qs=new R,Xi=new R,Ys=new R;class Cr{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,on)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=on.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(on.copy(this.origin).addScaledVector(this.direction,e),on.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Xs.copy(t).add(e).multiplyScalar(.5),Wi.copy(e).sub(t).normalize(),_n.copy(this.origin).sub(Xs);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Wi),a=_n.dot(this.direction),l=-_n.dot(Wi),c=_n.lengthSq(),h=Math.abs(1-o*o);let u,f,m,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Xs).addScaledVector(Wi,f),m}intersectSphere(t,e){on.subVectors(t.center,this.origin);const n=on.dot(this.direction),i=on.dot(on)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,on)!==null}intersectTriangle(t,e,n,i,r){qs.subVectors(e,t),Xi.subVectors(n,t),Ys.crossVectors(qs,Xi);let o=this.direction.dot(Ys),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_n.subVectors(this.origin,t);const l=a*this.direction.dot(Xi.crossVectors(_n,Xi));if(l<0)return null;const c=a*this.direction.dot(qs.cross(_n));if(c<0||l+c>o)return null;const h=-a*_n.dot(Ys);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,i,r,o,a,l,c,h,u,f,m,g,_,p){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,f,m,g,_,p)}set(t,e,n,i,r,o,a,l,c,h,u,f,m,g,_,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/jn.setFromMatrixColumn(t,0).length(),r=1/jn.setFromMatrixColumn(t,1).length(),o=1/jn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,m=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,m=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,m=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,m=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ic,t,Uc)}lookAt(t,e,n){const i=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),vn.crossVectors(n,Ne),vn.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),vn.crossVectors(n,Ne)),vn.normalize(),qi.crossVectors(Ne,vn),i[0]=vn.x,i[4]=qi.x,i[8]=Ne.x,i[1]=vn.y,i[5]=qi.y,i[9]=Ne.y,i[2]=vn.z,i[6]=qi.z,i[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],y=n[3],v=n[7],w=n[11],C=n[15],A=i[0],b=i[4],O=i[8],M=i[12],E=i[1],G=i[5],k=i[9],J=i[13],L=i[2],F=i[6],V=i[10],K=i[14],q=i[3],Y=i[7],j=i[11],tt=i[15];return r[0]=o*A+a*E+l*L+c*q,r[4]=o*b+a*G+l*F+c*Y,r[8]=o*O+a*k+l*V+c*j,r[12]=o*M+a*J+l*K+c*tt,r[1]=h*A+u*E+f*L+m*q,r[5]=h*b+u*G+f*F+m*Y,r[9]=h*O+u*k+f*V+m*j,r[13]=h*M+u*J+f*K+m*tt,r[2]=g*A+_*E+p*L+d*q,r[6]=g*b+_*G+p*F+d*Y,r[10]=g*O+_*k+p*V+d*j,r[14]=g*M+_*J+p*K+d*tt,r[3]=y*A+v*E+w*L+C*q,r[7]=y*b+v*G+w*F+C*Y,r[11]=y*O+v*k+w*V+C*j,r[15]=y*M+v*J+w*K+C*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],d=t[15];return g*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*m-n*l*m)+_*(+e*l*m-e*c*f+r*o*f-i*o*m+i*c*h-r*l*h)+p*(+e*c*u-e*a*m-r*o*u+n*o*m+r*a*h-n*c*h)+d*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],d=t[15],y=u*p*c-_*f*c+_*l*m-a*p*m-u*l*d+a*f*d,v=g*f*c-h*p*c-g*l*m+o*p*m+h*l*d-o*f*d,w=h*_*c-g*u*c+g*a*m-o*_*m-h*a*d+o*u*d,C=g*u*l-h*_*l-g*a*f+o*_*f+h*a*p-o*u*p,A=e*y+n*v+i*w+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return t[0]=y*b,t[1]=(_*f*r-u*p*r-_*i*m+n*p*m+u*i*d-n*f*d)*b,t[2]=(a*p*r-_*l*r+_*i*c-n*p*c-a*i*d+n*l*d)*b,t[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*m-n*l*m)*b,t[4]=v*b,t[5]=(h*p*r-g*f*r+g*i*m-e*p*m-h*i*d+e*f*d)*b,t[6]=(g*l*r-o*p*r-g*i*c+e*p*c+o*i*d-e*l*d)*b,t[7]=(o*f*r-h*l*r+h*i*c-e*f*c-o*i*m+e*l*m)*b,t[8]=w*b,t[9]=(g*u*r-h*_*r-g*n*m+e*_*m+h*n*d-e*u*d)*b,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*d+e*a*d)*b,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*m-e*a*m)*b,t[12]=C*b,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*p+e*u*p)*b,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*p-e*a*p)*b,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,m=r*h,g=r*u,_=o*h,p=o*u,d=a*u,y=l*c,v=l*h,w=l*u,C=n.x,A=n.y,b=n.z;return i[0]=(1-(_+d))*C,i[1]=(m+w)*C,i[2]=(g-v)*C,i[3]=0,i[4]=(m-w)*A,i[5]=(1-(f+d))*A,i[6]=(p+y)*A,i[7]=0,i[8]=(g+v)*b,i[9]=(p-y)*b,i[10]=(1-(f+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=jn.set(i[0],i[1],i[2]).length();const o=jn.set(i[4],i[5],i[6]).length(),a=jn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],je.copy(this);const c=1/r,h=1/o,u=1/a;return je.elements[0]*=c,je.elements[1]*=c,je.elements[2]*=c,je.elements[4]*=h,je.elements[5]*=h,je.elements[6]*=h,je.elements[8]*=u,je.elements[9]*=u,je.elements[10]*=u,e.setFromRotationMatrix(je),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=dn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let m,g;if(a===dn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ms)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=dn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*c,m=(n+i)*h;let g,_;if(a===dn)g=(o+r)*u,_=-2*u;else if(a===Ms)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const jn=new R,je=new oe,Ic=new R(0,0,0),Uc=new R(1,1,1),vn=new R,qi=new R,Ne=new R,Aa=new oe,Ra=new Ni;class bs{constructor(t=0,e=0,n=0,i=bs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Le(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Aa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Aa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ra.setFromEuler(this),this.setFromQuaternion(Ra,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bs.DEFAULT_ORDER="XYZ";class Go{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Nc=0;const Ca=new R,Kn=new Ni,ln=new oe,Yi=new R,Si=new R,Fc=new R,Oc=new Ni,La=new R(1,0,0),Pa=new R(0,1,0),Da=new R(0,0,1),Bc={type:"added"},Gc={type:"removed"};class fe extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new R,e=new bs,n=new Ni,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new qt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.premultiply(Kn),this}rotateX(t){return this.rotateOnAxis(La,t)}rotateY(t){return this.rotateOnAxis(Pa,t)}rotateZ(t){return this.rotateOnAxis(Da,t)}translateOnAxis(t,e){return Ca.copy(t).applyQuaternion(this.quaternion),this.position.add(Ca.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(La,t)}translateY(t){return this.translateOnAxis(Pa,t)}translateZ(t){return this.translateOnAxis(Da,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yi.copy(t):Yi.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Si,Yi,this.up):ln.lookAt(Yi,Si,this.up),this.quaternion.setFromRotationMatrix(ln),i&&(ln.extractRotation(i.matrixWorld),Kn.setFromRotationMatrix(ln),this.quaternion.premultiply(Kn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Bc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(ln),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,t,Fc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,Oc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}fe.DEFAULT_UP=new R(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new R,cn=new R,js=new R,hn=new R,$n=new R,Zn=new R,Ia=new R,Ks=new R,$s=new R,Zs=new R;let ji=!1;class Ve{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ke.subVectors(t,e),i.cross(Ke);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ke.subVectors(i,e),cn.subVectors(n,e),js.subVectors(t,e);const o=Ke.dot(Ke),a=Ke.dot(cn),l=Ke.dot(js),c=cn.dot(cn),h=cn.dot(js),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getUV(t,e,n,i,r,o,a,l){return ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ji=!0),this.getInterpolation(t,e,n,i,r,o,a,l)}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hn.x),l.addScaledVector(o,hn.y),l.addScaledVector(a,hn.z),l)}static isFrontFacing(t,e,n,i){return Ke.subVectors(n,e),cn.subVectors(t,e),Ke.cross(cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Ke.cross(cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ve.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ve.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ji=!0),Ve.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return Ve.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ve.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ve.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;$n.subVectors(i,n),Zn.subVectors(r,n),Ks.subVectors(t,n);const l=$n.dot(Ks),c=Zn.dot(Ks);if(l<=0&&c<=0)return e.copy(n);$s.subVectors(t,i);const h=$n.dot($s),u=Zn.dot($s);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector($n,o);Zs.subVectors(t,r);const m=$n.dot(Zs),g=Zn.dot(Zs);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Zn,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Ia.subVectors(r,i),a=(u-h)/(u-h+(m-g)),e.copy(i).addScaledVector(Ia,a);const d=1/(p+_+f);return o=_*d,a=f*d,e.copy(n).addScaledVector($n,o).addScaledVector(Zn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const zo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function Js(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=Rr(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Js(o,r,t+1/3),this.g=Js(o,r,t),this.b=Js(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,i),this}setStyle(t,e=ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const n=zo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return Qt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(Le(Ee.r*255,0,255))*65536+Math.round(Le(Ee.g*255,0,255))*256+Math.round(Le(Ee.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ee.copy(this),e);const n=Ee.r,i=Ee.g,r=Ee.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=ye){Qt.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,i=Ee.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(xn),this.setHSL(xn.h+t,xn.s+e,xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xn),t.getHSL(Ki);const n=Ci(xn.h,Ki.h,e),i=Ci(xn.s,Ki.s,e),r=Ci(xn.l,Ki.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new kt;kt.NAMES=zo;let zc=0;class bn extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=fn(),this.name="",this.type="Material",this.blending=ui,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pr,this.blendDst=mr,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ma,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vn,this.stencilZFail=Vn,this.stencilZPass=Vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pr&&(n.blendSrc=this.blendSrc),this.blendDst!==mr&&(n.blendDst=this.blendDst),this.blendEquation!==Nn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ma&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Be extends bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new R,$i=new It;class qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Mr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$i.fromBufferAttribute(this,e),$i.applyMatrix3(t),this.setXY(e,$i.x,$i.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mr&&(t.usage=this.usage),t}}class ko extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ho extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let kc=0;const ze=new oe,Qs=new fe,Jn=new R,Fe=new Fi,wi=new Fi,ve=new R;class Me extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(No(t)?Ho:ko)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return Qs.lookAt(t),Qs.updateMatrix(),this.applyMatrix4(Qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jn).negate(),this.translate(Jn.x,Jn.y,Jn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ie(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];wi.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(Fe.min,wi.min),Fe.expandByPoint(ve),ve.addVectors(Fe.max,wi.max),Fe.expandByPoint(ve)):(Fe.expandByPoint(wi.min),Fe.expandByPoint(wi.max))}Fe.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ve.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ve));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ve.fromBufferAttribute(a,c),l&&(Jn.fromBufferAttribute(t,c),ve.add(Jn)),i=Math.max(i,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new R,h[E]=new R;const u=new R,f=new R,m=new R,g=new It,_=new It,p=new It,d=new R,y=new R;function v(E,G,k){u.fromArray(i,E*3),f.fromArray(i,G*3),m.fromArray(i,k*3),g.fromArray(o,E*2),_.fromArray(o,G*2),p.fromArray(o,k*2),f.sub(u),m.sub(u),_.sub(g),p.sub(g);const J=1/(_.x*p.y-p.x*_.y);isFinite(J)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(J),y.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(J),c[E].add(d),c[G].add(d),c[k].add(d),h[E].add(y),h[G].add(y),h[k].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let E=0,G=w.length;E<G;++E){const k=w[E],J=k.start,L=k.count;for(let F=J,V=J+L;F<V;F+=3)v(n[F+0],n[F+1],n[F+2])}const C=new R,A=new R,b=new R,O=new R;function M(E){b.fromArray(r,E*3),O.copy(b);const G=c[E];C.copy(G),C.sub(b.multiplyScalar(b.dot(G))).normalize(),A.crossVectors(O,G);const J=A.dot(h[E])<0?-1:1;l[E*4]=C.x,l[E*4+1]=C.y,l[E*4+2]=C.z,l[E*4+3]=J}for(let E=0,G=w.length;E<G;++E){const k=w[E],J=k.start,L=k.count;for(let F=J,V=J+L;F<V;F+=3)M(n[F+0]),M(n[F+1]),M(n[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new qe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ua=new oe,Pn=new Cr,Zi=new Oi,Na=new R,Qn=new R,ti=new R,ei=new R,tr=new R,Ji=new R,Qi=new It,ts=new It,es=new It,Fa=new R,Oa=new R,Ba=new R,ns=new R,is=new R;class D extends fe{constructor(t=new Me,e=new Be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Ji.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(tr.fromBufferAttribute(u,t),o?Ji.addScaledVector(tr,h):Ji.addScaledVector(tr.sub(e),h))}e.add(Ji)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zi.copy(n.boundingSphere),Zi.applyMatrix4(r),Pn.copy(t.ray).recast(t.near),!(Zi.containsPoint(Pn.origin)===!1&&(Pn.intersectSphere(Zi,Na)===null||Pn.origin.distanceToSquared(Na)>(t.far-t.near)**2))&&(Ua.copy(r).invert(),Pn.copy(t.ray).applyMatrix4(Ua),!(n.boundingBox!==null&&Pn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let w=y,C=v;w<C;w+=3){const A=a.getX(w),b=a.getX(w+1),O=a.getX(w+2);i=ss(this,d,t,n,c,h,u,A,b,O),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const y=a.getX(p),v=a.getX(p+1),w=a.getX(p+2);i=ss(this,o,t,n,c,h,u,y,v,w),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let w=y,C=v;w<C;w+=3){const A=w,b=w+1,O=w+2;i=ss(this,d,t,n,c,h,u,A,b,O),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const y=p,v=p+1,w=p+2;i=ss(this,o,t,n,c,h,u,y,v,w),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Hc(s,t,e,n,i,r,o,a){let l;if(t.side===De?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Tn,a),l===null)return null;is.copy(a),is.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(is);return c<e.near||c>e.far?null:{distance:c,point:is.clone(),object:s}}function ss(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Qn),s.getVertexPosition(l,ti),s.getVertexPosition(c,ei);const h=Hc(s,t,e,n,Qn,ti,ei,ns);if(h){i&&(Qi.fromBufferAttribute(i,a),ts.fromBufferAttribute(i,l),es.fromBufferAttribute(i,c),h.uv=Ve.getInterpolation(ns,Qn,ti,ei,Qi,ts,es,new It)),r&&(Qi.fromBufferAttribute(r,a),ts.fromBufferAttribute(r,l),es.fromBufferAttribute(r,c),h.uv1=Ve.getInterpolation(ns,Qn,ti,ei,Qi,ts,es,new It),h.uv2=h.uv1),o&&(Fa.fromBufferAttribute(o,a),Oa.fromBufferAttribute(o,l),Ba.fromBufferAttribute(o,c),h.normal=Ve.getInterpolation(ns,Qn,ti,ei,Fa,Oa,Ba,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new R,materialIndex:0};Ve.getNormal(Qn,ti,ei,u.normal),h.face=u}return h}class st extends Me{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function g(_,p,d,y,v,w,C,A,b,O,M){const E=w/b,G=C/O,k=w/2,J=C/2,L=A/2,F=b+1,V=O+1;let K=0,q=0;const Y=new R;for(let j=0;j<V;j++){const tt=j*G-J;for(let Q=0;Q<F;Q++){const z=Q*E-k;Y[_]=z*y,Y[p]=tt*v,Y[d]=L,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[d]=A>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(Q/b),u.push(1-j/O),K+=1}}for(let j=0;j<O;j++)for(let tt=0;tt<b;tt++){const Q=f+tt+F*j,z=f+tt+F*(j+1),$=f+(tt+1)+F*(j+1),rt=f+(tt+1)+F*j;l.push(Q,z,rt),l.push(z,$,rt),q+=6}a.addGroup(m,q,M),m+=q,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new st(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Re(s){const t={};for(let e=0;e<s.length;e++){const n=gi(s[e]);for(const i in n)t[i]=n[i]}return t}function Vc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Vo(s){return s.getRenderTarget()===null?s.outputColorSpace:Qt.workingColorSpace}const Wc={clone:gi,merge:Re};var Xc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xc,this.fragmentShader=qc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gi(t.uniforms),this.uniformsGroups=Vc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Wo extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Oe extends Wo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ii*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ri*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ii*2*Math.atan(Math.tan(Ri*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ri*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ni=-90,ii=1;class Yc extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Oe(ni,ii,t,e);i.layers=this.layers,this.add(i);const r=new Oe(ni,ii,t,e);r.layers=this.layers,this.add(r);const o=new Oe(ni,ii,t,e);o.layers=this.layers,this.add(o);const a=new Oe(ni,ii,t,e);a.layers=this.layers,this.add(a);const l=new Oe(ni,ii,t,e);l.layers=this.layers,this.add(l);const c=new Oe(ni,ii,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xo extends Ie{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:fi,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jc extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Li("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===zn?ye:We),this.texture=new Xo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:He}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new st(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Sn});r.uniforms.tEquirect.value=e;const o=new D(i,r),a=e.minFilter;return e.minFilter===Pi&&(e.minFilter=He),new Yc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const er=new R,Kc=new R,$c=new qt;class In{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=er.subVectors(n,e).cross(Kc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(er),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||$c.getNormalMatrix(t),i=this.coplanarPoint(er).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new Oi,rs=new R;class Lr{constructor(t=new In,e=new In,n=new In,i=new In,r=new In,o=new In){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=dn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],m=i[8],g=i[9],_=i[10],p=i[11],d=i[12],y=i[13],v=i[14],w=i[15];if(n[0].setComponents(l-r,f-c,p-m,w-d).normalize(),n[1].setComponents(l+r,f+c,p+m,w+d).normalize(),n[2].setComponents(l+o,f+h,p+g,w+y).normalize(),n[3].setComponents(l-o,f-h,p-g,w-y).normalize(),n[4].setComponents(l-a,f-u,p-_,w-v).normalize(),e===dn)n[5].setComponents(l+a,f+u,p+_,w+v).normalize();else if(e===Ms)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(t){return Dn.center.set(0,0,0),Dn.radius=.7071067811865476,Dn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(rs.x=i.normal.x>0?t.max.x:t.min.x,rs.y=i.normal.y>0?t.max.y:t.min.y,rs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(rs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qo(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Zc(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,f=c.usage,m=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){const f=h.array,m=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),m.count===-1&&g.length===0&&s.bufferSubData(u,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const d=g[_];e?s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(e?s.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class Ui extends Me{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,m=[],g=[],_=[],p=[];for(let d=0;d<h;d++){const y=d*f-o;for(let v=0;v<c;v++){const w=v*u-r;g.push(w,-y,0),_.push(0,0,1),p.push(v/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){const v=y+c*d,w=y+c*(d+1),C=y+1+c*(d+1),A=y+1+c*d;m.push(v,w,A),m.push(w,C,A)}this.setIndex(m),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.width,t.height,t.widthSegments,t.heightSegments)}}var Jc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,th=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ih=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ah=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,lh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ch=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Eh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Th=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ah=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ch=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Lh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ph=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ih=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Oh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$h=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,su=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ru=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,au=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ou=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,du=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,fu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,pu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,mu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Su=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Au=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ru=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Du=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Uu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ou=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ku=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$u=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ju=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,td=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,id=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ad=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ld=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ud=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,md=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_d=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Md=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ed=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Td=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ad=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ld=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:Jc,alphahash_pars_fragment:Qc,alphamap_fragment:th,alphamap_pars_fragment:eh,alphatest_fragment:nh,alphatest_pars_fragment:ih,aomap_fragment:sh,aomap_pars_fragment:rh,batching_pars_vertex:ah,batching_vertex:oh,begin_vertex:lh,beginnormal_vertex:ch,bsdfs:hh,iridescence_fragment:uh,bumpmap_pars_fragment:dh,clipping_planes_fragment:fh,clipping_planes_pars_fragment:ph,clipping_planes_pars_vertex:mh,clipping_planes_vertex:gh,color_fragment:_h,color_pars_fragment:vh,color_pars_vertex:xh,color_vertex:Mh,common:yh,cube_uv_reflection_fragment:Sh,defaultnormal_vertex:wh,displacementmap_pars_vertex:Eh,displacementmap_vertex:Th,emissivemap_fragment:bh,emissivemap_pars_fragment:Ah,colorspace_fragment:Rh,colorspace_pars_fragment:Ch,envmap_fragment:Lh,envmap_common_pars_fragment:Ph,envmap_pars_fragment:Dh,envmap_pars_vertex:Ih,envmap_physical_pars_fragment:Xh,envmap_vertex:Uh,fog_vertex:Nh,fog_pars_vertex:Fh,fog_fragment:Oh,fog_pars_fragment:Bh,gradientmap_pars_fragment:Gh,lightmap_fragment:zh,lightmap_pars_fragment:kh,lights_lambert_fragment:Hh,lights_lambert_pars_fragment:Vh,lights_pars_begin:Wh,lights_toon_fragment:qh,lights_toon_pars_fragment:Yh,lights_phong_fragment:jh,lights_phong_pars_fragment:Kh,lights_physical_fragment:$h,lights_physical_pars_fragment:Zh,lights_fragment_begin:Jh,lights_fragment_maps:Qh,lights_fragment_end:tu,logdepthbuf_fragment:eu,logdepthbuf_pars_fragment:nu,logdepthbuf_pars_vertex:iu,logdepthbuf_vertex:su,map_fragment:ru,map_pars_fragment:au,map_particle_fragment:ou,map_particle_pars_fragment:lu,metalnessmap_fragment:cu,metalnessmap_pars_fragment:hu,morphcolor_vertex:uu,morphnormal_vertex:du,morphtarget_pars_vertex:fu,morphtarget_vertex:pu,normal_fragment_begin:mu,normal_fragment_maps:gu,normal_pars_fragment:_u,normal_pars_vertex:vu,normal_vertex:xu,normalmap_pars_fragment:Mu,clearcoat_normal_fragment_begin:yu,clearcoat_normal_fragment_maps:Su,clearcoat_pars_fragment:wu,iridescence_pars_fragment:Eu,opaque_fragment:Tu,packing:bu,premultiplied_alpha_fragment:Au,project_vertex:Ru,dithering_fragment:Cu,dithering_pars_fragment:Lu,roughnessmap_fragment:Pu,roughnessmap_pars_fragment:Du,shadowmap_pars_fragment:Iu,shadowmap_pars_vertex:Uu,shadowmap_vertex:Nu,shadowmask_pars_fragment:Fu,skinbase_vertex:Ou,skinning_pars_vertex:Bu,skinning_vertex:Gu,skinnormal_vertex:zu,specularmap_fragment:ku,specularmap_pars_fragment:Hu,tonemapping_fragment:Vu,tonemapping_pars_fragment:Wu,transmission_fragment:Xu,transmission_pars_fragment:qu,uv_pars_fragment:Yu,uv_pars_vertex:ju,uv_vertex:Ku,worldpos_vertex:$u,background_vert:Zu,background_frag:Ju,backgroundCube_vert:Qu,backgroundCube_frag:td,cube_vert:ed,cube_frag:nd,depth_vert:id,depth_frag:sd,distanceRGBA_vert:rd,distanceRGBA_frag:ad,equirect_vert:od,equirect_frag:ld,linedashed_vert:cd,linedashed_frag:hd,meshbasic_vert:ud,meshbasic_frag:dd,meshlambert_vert:fd,meshlambert_frag:pd,meshmatcap_vert:md,meshmatcap_frag:gd,meshnormal_vert:_d,meshnormal_frag:vd,meshphong_vert:xd,meshphong_frag:Md,meshphysical_vert:yd,meshphysical_frag:Sd,meshtoon_vert:wd,meshtoon_frag:Ed,points_vert:Td,points_frag:bd,shadow_vert:Ad,shadow_frag:Rd,sprite_vert:Cd,sprite_frag:Ld},ot={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},en={basic:{uniforms:Re([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Re([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new kt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Re([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Re([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Re([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new kt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Re([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Re([ot.points,ot.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Re([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Re([ot.common,ot.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Re([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Re([ot.sprite,ot.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Re([ot.common,ot.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Re([ot.lights,ot.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};en.physical={uniforms:Re([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const as={r:0,b:0,g:0};function Pd(s,t,e,n,i,r,o){const a=new kt(0);let l=r===!0?0:1,c,h,u=null,f=0,m=null;function g(p,d){let y=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),y=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Es)?(h===void 0&&(h=new D(new st(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:gi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(v.colorSpace)!==se,(u!==v||f!==v.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new D(new Ui(2,2),new Hn({name:"BackgroundMaterial",uniforms:gi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(v.colorSpace)!==se,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,m=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,d){p.getRGB(as,Vo(s)),n.buffers.color.setClear(as.r,as.g,as.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function Dd(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,h=!1;function u(L,F,V,K,q){let Y=!1;if(o){const j=_(K,V,F);c!==j&&(c=j,m(c.object)),Y=d(L,K,V,q),Y&&y(L,K,V,q)}else{const j=F.wireframe===!0;(c.geometry!==K.id||c.program!==V.id||c.wireframe!==j)&&(c.geometry=K.id,c.program=V.id,c.wireframe=j,Y=!0)}q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,O(L,F,V,K),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,F,V){const K=V.wireframe===!0;let q=a[L.id];q===void 0&&(q={},a[L.id]=q);let Y=q[F.id];Y===void 0&&(Y={},q[F.id]=Y);let j=Y[K];return j===void 0&&(j=p(f()),Y[K]=j),j}function p(L){const F=[],V=[],K=[];for(let q=0;q<i;q++)F[q]=0,V[q]=0,K[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:K,object:L,attributes:{},index:null}}function d(L,F,V,K){const q=c.attributes,Y=F.attributes;let j=0;const tt=V.getAttributes();for(const Q in tt)if(tt[Q].location>=0){const $=q[Q];let rt=Y[Q];if(rt===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(rt=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(rt=L.instanceColor)),$===void 0||$.attribute!==rt||rt&&$.data!==rt.data)return!0;j++}return c.attributesNum!==j||c.index!==K}function y(L,F,V,K){const q={},Y=F.attributes;let j=0;const tt=V.getAttributes();for(const Q in tt)if(tt[Q].location>=0){let $=Y[Q];$===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&($=L.instanceColor));const rt={};rt.attribute=$,$&&$.data&&(rt.data=$.data),q[Q]=rt,j++}c.attributes=q,c.attributesNum=j,c.index=K}function v(){const L=c.newAttributes;for(let F=0,V=L.length;F<V;F++)L[F]=0}function w(L){C(L,0)}function C(L,F){const V=c.newAttributes,K=c.enabledAttributes,q=c.attributeDivisors;V[L]=1,K[L]===0&&(s.enableVertexAttribArray(L),K[L]=1),q[L]!==F&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),q[L]=F)}function A(){const L=c.newAttributes,F=c.enabledAttributes;for(let V=0,K=F.length;V<K;V++)F[V]!==L[V]&&(s.disableVertexAttribArray(V),F[V]=0)}function b(L,F,V,K,q,Y,j){j===!0?s.vertexAttribIPointer(L,F,V,q,Y):s.vertexAttribPointer(L,F,V,K,q,Y)}function O(L,F,V,K){if(n.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const q=K.attributes,Y=V.getAttributes(),j=F.defaultAttributeValues;for(const tt in Y){const Q=Y[tt];if(Q.location>=0){let z=q[tt];if(z===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(z=L.instanceColor)),z!==void 0){const $=z.normalized,rt=z.itemSize,mt=e.get(z);if(mt===void 0)continue;const dt=mt.buffer,St=mt.type,wt=mt.bytesPerElement,Mt=n.isWebGL2===!0&&(St===s.INT||St===s.UNSIGNED_INT||z.gpuType===To);if(z.isInterleavedBufferAttribute){const Ut=z.data,N=Ut.stride,Vt=z.offset;if(Ut.isInstancedInterleavedBuffer){for(let pt=0;pt<Q.locationSize;pt++)C(Q.location+pt,Ut.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let pt=0;pt<Q.locationSize;pt++)w(Q.location+pt);s.bindBuffer(s.ARRAY_BUFFER,dt);for(let pt=0;pt<Q.locationSize;pt++)b(Q.location+pt,rt/Q.locationSize,St,$,N*wt,(Vt+rt/Q.locationSize*pt)*wt,Mt)}else{if(z.isInstancedBufferAttribute){for(let Ut=0;Ut<Q.locationSize;Ut++)C(Q.location+Ut,z.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let Ut=0;Ut<Q.locationSize;Ut++)w(Q.location+Ut);s.bindBuffer(s.ARRAY_BUFFER,dt);for(let Ut=0;Ut<Q.locationSize;Ut++)b(Q.location+Ut,rt/Q.locationSize,St,$,rt*wt,rt/Q.locationSize*Ut*wt,Mt)}}else if(j!==void 0){const $=j[tt];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(Q.location,$);break;case 3:s.vertexAttrib3fv(Q.location,$);break;case 4:s.vertexAttrib4fv(Q.location,$);break;default:s.vertexAttrib1fv(Q.location,$)}}}}A()}function M(){k();for(const L in a){const F=a[L];for(const V in F){const K=F[V];for(const q in K)g(K[q].object),delete K[q];delete F[V]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;const F=a[L.id];for(const V in F){const K=F[V];for(const q in K)g(K[q].object),delete K[q];delete F[V]}delete a[L.id]}function G(L){for(const F in a){const V=a[F];if(V[L.id]===void 0)continue;const K=V[L.id];for(const q in K)g(K[q].object),delete K[q];delete V[L.id]}}function k(){J(),h=!0,c!==l&&(c=l,m(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:k,resetDefaultState:J,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:G,initAttributes:v,enableAttribute:w,disableUnusedAttributes:A}}function Id(s,t,e,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Ud(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,w=o||t.has("OES_texture_float"),C=v&&w,A=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:w,floatVertexTextures:C,maxSamples:A}}function Nd(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new In,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||i;return i=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,d=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{const y=r?0:n,v=y*4;let w=d.clippingState||null;l.value=w,w=h(g,f,v,m);for(let C=0;C!==v;++C)w[C]=e[C];d.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let v=0,w=m;v!==_;++v,w+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Fd(s){let t=new WeakMap;function e(o,a){return a===gr?o.mapping=fi:a===_r&&(o.mapping=pi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===gr||a===_r)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jc(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Yo extends Wo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ci=4,Ga=[.125,.215,.35,.446,.526,.582],Fn=20,nr=new Yo,za=new kt;let ir=null,sr=0,rr=0;const Un=(1+Math.sqrt(5))/2,si=1/Un,ka=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Un,si),new R(0,Un,-si),new R(si,0,Un),new R(-si,0,Un),new R(Un,si,0),new R(-Un,si,0)];class Ha{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ir=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),rr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ir,sr,rr),t.scissorTest=!1,os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fi||t.mapping===pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ir=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),rr=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:Di,format:Qe,colorSpace:pn,depthBuffer:!1},i=Va(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Va(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Od(r)),this._blurMaterial=Bd(r,t,e)}return i}_compileMaterial(t){const e=new D(this._lodPlanes[0],t);this._renderer.compile(e,nr)}_sceneToCubeUV(t,e,n,i){const a=new Oe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(za),h.toneMapping=wn,h.autoClear=!1;const m=new Be({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new D(new st,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(za),_=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):y===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;os(i,y*v,d>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===fi||t.mapping===pi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wa());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new D(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;os(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,nr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ka[(i-1)%ka.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new D(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Fn-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Fn;p>Fn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fn}`);const d=[];let y=0;for(let b=0;b<Fn;++b){const O=b/_,M=Math.exp(-O*O/2);d.push(M),b===0?y+=M:b<p&&(y+=2*M)}for(let b=0;b<d.length;b++)d[b]=d[b]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const w=this._sizeLods[i],C=3*w*(i>v-ci?i-v+ci:0),A=4*(this._cubeSize-w);os(e,C,A,3*w,2*w),l.setRenderTarget(e),l.render(u,nr)}}function Od(s){const t=[],e=[],n=[];let i=s;const r=s-ci+1+Ga.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-ci?l=Ga[o-s+ci-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,d=1,y=new Float32Array(_*g*m),v=new Float32Array(p*g*m),w=new Float32Array(d*g*m);for(let A=0;A<m;A++){const b=A%3*2/3-1,O=A>2?0:-1,M=[b,O,0,b+2/3,O,0,b+2/3,O+1,0,b,O,0,b+2/3,O+1,0,b,O+1,0];y.set(M,_*g*A),v.set(f,p*g*A);const E=[A,A,A,A,A,A];w.set(E,d*g*A)}const C=new Me;C.setAttribute("position",new qe(y,_)),C.setAttribute("uv",new qe(v,p)),C.setAttribute("faceIndex",new qe(w,d)),t.push(C),i>ci&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Va(s,t,e){const n=new kn(s,t,e);return n.texture.mapping=Es,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function os(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Bd(s,t,e){const n=new Float32Array(Fn),i=new R(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Wa(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Xa(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Pr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gd(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===gr||l===_r,h=l===fi||l===pi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Ha(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Ha(s));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function zd(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function kd(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,d=_.length;p<d;p++)t.update(_[p],s.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let v=0,w=y.length;v<w;v+=3){const C=y[v+0],A=y[v+1],b=y[v+2];f.push(C,A,A,b,b,C)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,w=y.length/3-1;v<w;v+=3){const C=v+0,A=v+1,b=v+2;f.push(C,A,A,b,b,C)}}else return;const p=new(No(f)?Ho:ko)(f,1);p.version=_;const d=r.get(u);d&&t.remove(d),r.set(u,p)}function h(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Hd(s,t,e,n){const i=n.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){s.drawElements(r,g,a,m*l),e.update(g,r,1)}function u(m,g,_){if(_===0)return;let p,d;if(i)p=s,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,g,a,m*l,_),e.update(g,r,_)}function f(m,g,_){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<_;d++)this.render(m[d]/l,g[d]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let d=0;for(let y=0;y<_;y++)d+=g[y];e.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Vd(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Wd(s,t){return s[0]-t[0]}function Xd(s,t){return Math.abs(t[1])-Math.abs(s[1])}function qd(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new re,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(h);if(p===void 0||p.count!==_){let F=function(){J.dispose(),r.delete(h),h.removeEventListener("dispose",F)};var m=F;p!==void 0&&p.texture.dispose();const v=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let M=0;v===!0&&(M=1),w===!0&&(M=2),C===!0&&(M=3);let E=h.attributes.position.count*M,G=1;E>t.maxTextureSize&&(G=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const k=new Float32Array(E*G*4*_),J=new Bo(k,E,G,_);J.type=yn,J.needsUpdate=!0;const L=M*4;for(let V=0;V<_;V++){const K=A[V],q=b[V],Y=O[V],j=E*G*4*V;for(let tt=0;tt<K.count;tt++){const Q=tt*L;v===!0&&(o.fromBufferAttribute(K,tt),k[j+Q+0]=o.x,k[j+Q+1]=o.y,k[j+Q+2]=o.z,k[j+Q+3]=0),w===!0&&(o.fromBufferAttribute(q,tt),k[j+Q+4]=o.x,k[j+Q+5]=o.y,k[j+Q+6]=o.z,k[j+Q+7]=0),C===!0&&(o.fromBufferAttribute(Y,tt),k[j+Q+8]=o.x,k[j+Q+9]=o.y,k[j+Q+10]=o.z,k[j+Q+11]=Y.itemSize===4?o.w:1)}}p={count:_,texture:J,size:new It(E,G)},r.set(h,p),h.addEventListener("dispose",F)}let d=0;for(let v=0;v<f.length;v++)d+=f[v];const y=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let w=0;w<g;w++)_[w]=[w,0];n[h.id]=_}for(let w=0;w<g;w++){const C=_[w];C[0]=w,C[1]=f[w]}_.sort(Xd);for(let w=0;w<8;w++)w<g&&_[w][1]?(a[w][0]=_[w][0],a[w][1]=_[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(Wd);const p=h.morphAttributes.position,d=h.morphAttributes.normal;let y=0;for(let w=0;w<8;w++){const C=a[w],A=C[0],b=C[1];A!==Number.MAX_SAFE_INTEGER&&b?(p&&h.getAttribute("morphTarget"+w)!==p[A]&&h.setAttribute("morphTarget"+w,p[A]),d&&h.getAttribute("morphNormal"+w)!==d[A]&&h.setAttribute("morphNormal"+w,d[A]),i[w]=b,y+=b):(p&&h.hasAttribute("morphTarget"+w)===!0&&h.deleteAttribute("morphTarget"+w),d&&h.hasAttribute("morphNormal"+w)===!0&&h.deleteAttribute("morphNormal"+w),i[w]=0)}const v=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Yd(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class jo extends Ie{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:Gn,h!==Gn&&h!==mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Gn&&(n=Mn),n===void 0&&h===mi&&(n=Bn),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ce,this.minFilter=l!==void 0?l:Ce,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ko=new Ie,$o=new jo(1,1);$o.compareFunction=Uo;const Zo=new Bo,Jo=new Pc,Qo=new Xo,qa=[],Ya=[],ja=new Float32Array(16),Ka=new Float32Array(9),$a=new Float32Array(4);function vi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=qa[i];if(r===void 0&&(r=new Float32Array(i),qa[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function pe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function me(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function As(s,t){let e=Ya[t];e===void 0&&(e=new Int32Array(t),Ya[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function jd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Kd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2fv(this.addr,t),me(e,t)}}function $d(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;s.uniform3fv(this.addr,t),me(e,t)}}function Zd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4fv(this.addr,t),me(e,t)}}function Jd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;$a.set(n),s.uniformMatrix2fv(this.addr,!1,$a),me(e,n)}}function Qd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Ka.set(n),s.uniformMatrix3fv(this.addr,!1,Ka),me(e,n)}}function tf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;ja.set(n),s.uniformMatrix4fv(this.addr,!1,ja),me(e,n)}}function ef(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function nf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2iv(this.addr,t),me(e,t)}}function sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;s.uniform3iv(this.addr,t),me(e,t)}}function rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4iv(this.addr,t),me(e,t)}}function af(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function of(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2uiv(this.addr,t),me(e,t)}}function lf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;s.uniform3uiv(this.addr,t),me(e,t)}}function cf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4uiv(this.addr,t),me(e,t)}}function hf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?$o:Ko;e.setTexture2D(t||r,i)}function uf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Jo,i)}function df(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Qo,i)}function ff(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Zo,i)}function pf(s){switch(s){case 5126:return jd;case 35664:return Kd;case 35665:return $d;case 35666:return Zd;case 35674:return Jd;case 35675:return Qd;case 35676:return tf;case 5124:case 35670:return ef;case 35667:case 35671:return nf;case 35668:case 35672:return sf;case 35669:case 35673:return rf;case 5125:return af;case 36294:return of;case 36295:return lf;case 36296:return cf;case 35678:case 36198:case 36298:case 36306:case 35682:return hf;case 35679:case 36299:case 36307:return uf;case 35680:case 36300:case 36308:case 36293:return df;case 36289:case 36303:case 36311:case 36292:return ff}}function mf(s,t){s.uniform1fv(this.addr,t)}function gf(s,t){const e=vi(t,this.size,2);s.uniform2fv(this.addr,e)}function _f(s,t){const e=vi(t,this.size,3);s.uniform3fv(this.addr,e)}function vf(s,t){const e=vi(t,this.size,4);s.uniform4fv(this.addr,e)}function xf(s,t){const e=vi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Mf(s,t){const e=vi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function yf(s,t){const e=vi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Sf(s,t){s.uniform1iv(this.addr,t)}function wf(s,t){s.uniform2iv(this.addr,t)}function Ef(s,t){s.uniform3iv(this.addr,t)}function Tf(s,t){s.uniform4iv(this.addr,t)}function bf(s,t){s.uniform1uiv(this.addr,t)}function Af(s,t){s.uniform2uiv(this.addr,t)}function Rf(s,t){s.uniform3uiv(this.addr,t)}function Cf(s,t){s.uniform4uiv(this.addr,t)}function Lf(s,t,e){const n=this.cache,i=t.length,r=As(e,i);pe(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Ko,r[o])}function Pf(s,t,e){const n=this.cache,i=t.length,r=As(e,i);pe(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Jo,r[o])}function Df(s,t,e){const n=this.cache,i=t.length,r=As(e,i);pe(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Qo,r[o])}function If(s,t,e){const n=this.cache,i=t.length,r=As(e,i);pe(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Zo,r[o])}function Uf(s){switch(s){case 5126:return mf;case 35664:return gf;case 35665:return _f;case 35666:return vf;case 35674:return xf;case 35675:return Mf;case 35676:return yf;case 5124:case 35670:return Sf;case 35667:case 35671:return wf;case 35668:case 35672:return Ef;case 35669:case 35673:return Tf;case 5125:return bf;case 36294:return Af;case 36295:return Rf;case 36296:return Cf;case 35678:case 36198:case 36298:case 36306:case 35682:return Lf;case 35679:case 36299:case 36307:return Pf;case 35680:case 36300:case 36308:case 36293:return Df;case 36289:case 36303:case 36311:case 36292:return If}}class Nf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=pf(e.type)}}class Ff{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Uf(e.type)}}class Of{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const ar=/(\w+)(\])?(\[|\.)?/g;function Za(s,t){s.seq.push(t),s.map[t.id]=t}function Bf(s,t,e){const n=s.name,i=n.length;for(ar.lastIndex=0;;){const r=ar.exec(n),o=ar.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Za(e,c===void 0?new Nf(a,s,t):new Ff(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Of(a),Za(e,u)),e=u}}}class ms{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Bf(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ja(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Gf=37297;let zf=0;function kf(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Hf(s){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(s);let n;switch(t===e?n="":t===xs&&e===vs?n="LinearDisplayP3ToLinearSRGB":t===vs&&e===xs&&(n="LinearSRGBToLinearDisplayP3"),s){case pn:case Ts:return[n,"LinearTransferOETF"];case ye:case Ar:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Qa(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+kf(s.getShaderSource(t),o)}else return i}function Vf(s,t){const e=Hf(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Wf(s,t){let e;switch(t){case kl:e="Linear";break;case Hl:e="Reinhard";break;case Vl:e="OptimizedCineon";break;case Wl:e="ACESFilmic";break;case ql:e="AgX";break;case Xl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Xf(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hi).join(`
`)}function qf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(hi).join(`
`)}function Yf(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jf(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function hi(s){return s!==""}function to(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Kf=/^[ \t]*#include +<([\w\d./]+)>/gm;function wr(s){return s.replace(Kf,Zf)}const $f=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Zf(s,t){let e=zt[t];if(e===void 0){const n=$f.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wr(e)}const Jf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function no(s){return s.replace(Jf,Qf)}function Qf(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function io(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function tp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===yo?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===So?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===un&&(t="SHADOWMAP_TYPE_VSM"),t}function ep(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case fi:case pi:t="ENVMAP_TYPE_CUBE";break;case Es:t="ENVMAP_TYPE_CUBE_UV";break}return t}function np(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case pi:t="ENVMAP_MODE_REFRACTION";break}return t}function ip(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wo:t="ENVMAP_BLENDING_MULTIPLY";break;case Gl:t="ENVMAP_BLENDING_MIX";break;case zl:t="ENVMAP_BLENDING_ADD";break}return t}function sp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function rp(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=tp(e),c=ep(e),h=np(e),u=ip(e),f=sp(e),m=e.isWebGL2?"":Xf(e),g=qf(e),_=Yf(r),p=i.createProgram();let d,y,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(hi).join(`
`),d.length>0&&(d+=`
`),y=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(hi).join(`
`),y.length>0&&(y+=`
`)):(d=[io(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hi).join(`
`),y=[m,io(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?zt.tonemapping_pars_fragment:"",e.toneMapping!==wn?Wf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Vf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hi).join(`
`)),o=wr(o),o=to(o,e),o=eo(o,e),a=wr(a),a=to(a,e),a=eo(a,e),o=no(o),a=no(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ya?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ya?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const w=v+d+o,C=v+y+a,A=Ja(i,i.VERTEX_SHADER,w),b=Ja(i,i.FRAGMENT_SHADER,C);i.attachShader(p,A),i.attachShader(p,b),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function O(k){if(s.debug.checkShaderErrors){const J=i.getProgramInfoLog(p).trim(),L=i.getShaderInfoLog(A).trim(),F=i.getShaderInfoLog(b).trim();let V=!0,K=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,A,b);else{const q=Qa(i,A,"vertex"),Y=Qa(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+q+`
`+Y)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(L===""||F==="")&&(K=!1);K&&(k.diagnostics={runnable:V,programLog:J,vertexShader:{log:L,prefix:d},fragmentShader:{log:F,prefix:y}})}i.deleteShader(A),i.deleteShader(b),M=new ms(i,p),E=jf(i,p)}let M;this.getUniforms=function(){return M===void 0&&O(this),M};let E;this.getAttributes=function(){return E===void 0&&O(this),E};let G=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=i.getProgramParameter(p,Gf)),G},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zf++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=b,this}let ap=0;class op{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new lp(t),e.set(t,n)),n}}class lp{constructor(t){this.id=ap++,this.code=t,this.usedTimes=0}}function cp(s,t,e,n,i,r,o){const a=new Go,l=new op,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,E,G,k,J){const L=k.fog,F=J.geometry,V=M.isMeshStandardMaterial?k.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),q=K&&K.mapping===Es?K.image.height:null,Y=g[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const j=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,tt=j!==void 0?j.length:0;let Q=0;F.morphAttributes.position!==void 0&&(Q=1),F.morphAttributes.normal!==void 0&&(Q=2),F.morphAttributes.color!==void 0&&(Q=3);let z,$,rt,mt;if(Y){const Te=en[Y];z=Te.vertexShader,$=Te.fragmentShader}else z=M.vertexShader,$=M.fragmentShader,l.update(M),rt=l.getVertexShaderID(M),mt=l.getFragmentShaderID(M);const dt=s.getRenderTarget(),St=J.isInstancedMesh===!0,wt=J.isBatchedMesh===!0,Mt=!!M.map,Ut=!!M.matcap,N=!!K,Vt=!!M.aoMap,pt=!!M.lightMap,yt=!!M.bumpMap,lt=!!M.normalMap,Zt=!!M.displacementMap,bt=!!M.emissiveMap,T=!!M.metalnessMap,x=!!M.roughnessMap,B=M.anisotropy>0,nt=M.clearcoat>0,Z=M.iridescence>0,it=M.sheen>0,vt=M.transmission>0,ct=B&&!!M.anisotropyMap,_t=nt&&!!M.clearcoatMap,At=nt&&!!M.clearcoatNormalMap,Nt=nt&&!!M.clearcoatRoughnessMap,et=Z&&!!M.iridescenceMap,$t=Z&&!!M.iridescenceThicknessMap,Bt=it&&!!M.sheenColorMap,Lt=it&&!!M.sheenRoughnessMap,Et=!!M.specularMap,gt=!!M.specularColorMap,Ft=!!M.specularIntensityMap,Kt=vt&&!!M.transmissionMap,le=vt&&!!M.thicknessMap,Wt=!!M.gradientMap,at=!!M.alphaMap,P=M.alphaTest>0,ht=!!M.alphaHash,ut=!!M.extensions,Pt=!!F.attributes.uv1,Rt=!!F.attributes.uv2,te=!!F.attributes.uv3;let ee=wn;return M.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(ee=s.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:z,fragmentShader:$,defines:M.defines,customVertexShaderID:rt,customFragmentShaderID:mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:wt,instancing:St,instancingColor:St&&J.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:dt===null?s.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:pn,map:Mt,matcap:Ut,envMap:N,envMapMode:N&&K.mapping,envMapCubeUVHeight:q,aoMap:Vt,lightMap:pt,bumpMap:yt,normalMap:lt,displacementMap:f&&Zt,emissiveMap:bt,normalMapObjectSpace:lt&&M.normalMapType===sc,normalMapTangentSpace:lt&&M.normalMapType===Io,metalnessMap:T,roughnessMap:x,anisotropy:B,anisotropyMap:ct,clearcoat:nt,clearcoatMap:_t,clearcoatNormalMap:At,clearcoatRoughnessMap:Nt,iridescence:Z,iridescenceMap:et,iridescenceThicknessMap:$t,sheen:it,sheenColorMap:Bt,sheenRoughnessMap:Lt,specularMap:Et,specularColorMap:gt,specularIntensityMap:Ft,transmission:vt,transmissionMap:Kt,thicknessMap:le,gradientMap:Wt,opaque:M.transparent===!1&&M.blending===ui,alphaMap:at,alphaTest:P,alphaHash:ht,combine:M.combine,mapUv:Mt&&_(M.map.channel),aoMapUv:Vt&&_(M.aoMap.channel),lightMapUv:pt&&_(M.lightMap.channel),bumpMapUv:yt&&_(M.bumpMap.channel),normalMapUv:lt&&_(M.normalMap.channel),displacementMapUv:Zt&&_(M.displacementMap.channel),emissiveMapUv:bt&&_(M.emissiveMap.channel),metalnessMapUv:T&&_(M.metalnessMap.channel),roughnessMapUv:x&&_(M.roughnessMap.channel),anisotropyMapUv:ct&&_(M.anisotropyMap.channel),clearcoatMapUv:_t&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:At&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&_(M.sheenRoughnessMap.channel),specularMapUv:Et&&_(M.specularMap.channel),specularColorMapUv:gt&&_(M.specularColorMap.channel),specularIntensityMapUv:Ft&&_(M.specularIntensityMap.channel),transmissionMapUv:Kt&&_(M.transmissionMap.channel),thicknessMapUv:le&&_(M.thicknessMap.channel),alphaMapUv:at&&_(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(lt||B),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Pt,vertexUv2s:Rt,vertexUv3s:te,pointsUvs:J.isPoints===!0&&!!F.attributes.uv&&(Mt||at),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:J.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:Q,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:ee,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Mt&&M.map.isVideoTexture===!0&&Qt.getTransfer(M.map.colorSpace)===se,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ze,flipSided:M.side===De,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ut&&M.extensions.derivatives===!0,extensionFragDepth:ut&&M.extensions.fragDepth===!0,extensionDrawBuffers:ut&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ut&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ut&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const G in M.defines)E.push(G),E.push(M.defines[G]);return M.isRawShaderMaterial===!1&&(y(E,M),v(E,M),E.push(s.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function y(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function v(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function w(M){const E=g[M.type];let G;if(E){const k=en[E];G=Wc.clone(k.uniforms)}else G=M.uniforms;return G}function C(M,E){let G;for(let k=0,J=c.length;k<J;k++){const L=c[k];if(L.cacheKey===E){G=L,++G.usedTimes;break}}return G===void 0&&(G=new rp(s,E,M,r),c.push(G)),G}function A(M){if(--M.usedTimes===0){const E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function b(M){l.remove(M)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:w,acquireProgram:C,releaseProgram:A,releaseShaderCache:b,programs:c,dispose:O}}function hp(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function up(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function so(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ro(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,m,g,_,p){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=p),t++,d}function a(u,f,m,g,_,p){const d=o(u,f,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?i.push(d):e.push(d)}function l(u,f,m,g,_,p){const d=o(u,f,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?i.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||up),n.length>1&&n.sort(f||so),i.length>1&&i.sort(f||so)}function h(){for(let u=t,f=s.length;u<f;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function dp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new ro,s.set(n,[o])):i>=r.length?(o=new ro,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function fp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new kt};break;case"SpotLight":e={position:new R,direction:new R,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function pp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let mp=0;function gp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function _p(s,t){const e=new fp,n=pp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new R);const r=new R,o=new oe,a=new oe;function l(h,u){let f=0,m=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let _=0,p=0,d=0,y=0,v=0,w=0,C=0,A=0,b=0,O=0,M=0;h.sort(gp);const E=u===!0?Math.PI:1;for(let k=0,J=h.length;k<J;k++){const L=h[k],F=L.color,V=L.intensity,K=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=F.r*V*E,m+=F.g*V*E,g+=F.b*V*E;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],V);M++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const j=L.shadow,tt=n.get(L);tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,i.directionalShadow[_]=tt,i.directionalShadowMap[_]=q,i.directionalShadowMatrix[_]=L.shadow.matrix,w++}i.directional[_]=Y,_++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(F).multiplyScalar(V*E),Y.distance=K,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[d]=Y;const j=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,j.updateMatrices(L),L.castShadow&&O++),i.spotLightMatrix[d]=j.matrix,L.castShadow){const tt=n.get(L);tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,i.spotShadow[d]=tt,i.spotShadowMap[d]=q,A++}d++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(F).multiplyScalar(V),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[y]=Y,y++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*E),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const j=L.shadow,tt=n.get(L);tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,tt.shadowCameraNear=j.camera.near,tt.shadowCameraFar=j.camera.far,i.pointShadow[p]=tt,i.pointShadowMap[p]=q,i.pointShadowMatrix[p]=L.shadow.matrix,C++}i.point[p]=Y,p++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(V*E),Y.groundColor.copy(L.groundColor).multiplyScalar(V*E),i.hemi[v]=Y,v++}}y>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const G=i.hash;(G.directionalLength!==_||G.pointLength!==p||G.spotLength!==d||G.rectAreaLength!==y||G.hemiLength!==v||G.numDirectionalShadows!==w||G.numPointShadows!==C||G.numSpotShadows!==A||G.numSpotMaps!==b||G.numLightProbes!==M)&&(i.directional.length=_,i.spot.length=d,i.rectArea.length=y,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=A+b-O,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=M,G.directionalLength=_,G.pointLength=p,G.spotLength=d,G.rectAreaLength=y,G.hemiLength=v,G.numDirectionalShadows=w,G.numPointShadows=C,G.numSpotShadows=A,G.numSpotMaps=b,G.numLightProbes=M,i.version=mp++)}function c(h,u){let f=0,m=0,g=0,_=0,p=0;const d=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const w=h[y];if(w.isDirectionalLight){const C=i.directional[f];C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),f++}else if(w.isSpotLight){const C=i.spot[g];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),g++}else if(w.isRectAreaLight){const C=i.rectArea[_];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(d),a.identity(),o.copy(w.matrixWorld),o.premultiply(d),a.extractRotation(o),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){const C=i.point[m];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(d),m++}else if(w.isHemisphereLight){const C=i.hemi[p];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:i}}function ao(s,t){const e=new _p(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function vp(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new ao(s,t),e.set(r,[l])):o>=a.length?(l=new ao(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class xp extends bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Mp extends bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const yp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wp(s,t,e){let n=new Lr;const i=new It,r=new It,o=new re,a=new xp({depthPacking:ic}),l=new Mp,c={},h=e.maxTextureSize,u={[Tn]:De,[De]:Tn,[Ze]:Ze},f=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:yp,fragmentShader:Sp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Me;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new D(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yo;let d=this.type;this.render=function(A,b,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const M=s.getRenderTarget(),E=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Sn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const J=d!==un&&this.type===un,L=d===un&&this.type!==un;for(let F=0,V=A.length;F<V;F++){const K=A[F],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const Y=q.getFrameExtents();if(i.multiply(Y),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,q.mapSize.y=r.y)),q.map===null||J===!0||L===!0){const tt=this.type!==un?{minFilter:Ce,magFilter:Ce}:{};q.map!==null&&q.map.dispose(),q.map=new kn(i.x,i.y,tt),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const j=q.getViewportCount();for(let tt=0;tt<j;tt++){const Q=q.getViewport(tt);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),k.viewport(o),q.updateMatrices(K,tt),n=q.getFrustum(),w(b,O,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===un&&y(q,O),q.needsUpdate=!1}d=this.type,p.needsUpdate=!1,s.setRenderTarget(M,E,G)};function y(A,b){const O=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new kn(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(b,null,O,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(b,null,O,m,_,null)}function v(A,b,O,M){let E=null;const G=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(G!==void 0)E=G;else if(E=O.isPointLight===!0?l:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const k=E.uuid,J=b.uuid;let L=c[k];L===void 0&&(L={},c[k]=L);let F=L[J];F===void 0&&(F=E.clone(),L[J]=F,b.addEventListener("dispose",C)),E=F}if(E.visible=b.visible,E.wireframe=b.wireframe,M===un?E.side=b.shadowSide!==null?b.shadowSide:b.side:E.side=b.shadowSide!==null?b.shadowSide:u[b.side],E.alphaMap=b.alphaMap,E.alphaTest=b.alphaTest,E.map=b.map,E.clipShadows=b.clipShadows,E.clippingPlanes=b.clippingPlanes,E.clipIntersection=b.clipIntersection,E.displacementMap=b.displacementMap,E.displacementScale=b.displacementScale,E.displacementBias=b.displacementBias,E.wireframeLinewidth=b.wireframeLinewidth,E.linewidth=b.linewidth,O.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const k=s.properties.get(E);k.light=O}return E}function w(A,b,O,M,E){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===un)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);const J=t.update(A),L=A.material;if(Array.isArray(L)){const F=J.groups;for(let V=0,K=F.length;V<K;V++){const q=F[V],Y=L[q.materialIndex];if(Y&&Y.visible){const j=v(A,Y,M,E);A.onBeforeShadow(s,A,b,O,J,j,q),s.renderBufferDirect(O,null,J,j,A,q),A.onAfterShadow(s,A,b,O,J,j,q)}}}else if(L.visible){const F=v(A,L,M,E);A.onBeforeShadow(s,A,b,O,J,F,null),s.renderBufferDirect(O,null,J,F,A,null),A.onAfterShadow(s,A,b,O,J,F,null)}}const k=A.children;for(let J=0,L=k.length;J<L;J++)w(k[J],b,O,M,E)}function C(A){A.target.removeEventListener("dispose",C);for(const O in c){const M=c[O],E=A.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function Ep(s,t,e){const n=e.isWebGL2;function i(){let P=!1;const ht=new re;let ut=null;const Pt=new re(0,0,0,0);return{setMask:function(Rt){ut!==Rt&&!P&&(s.colorMask(Rt,Rt,Rt,Rt),ut=Rt)},setLocked:function(Rt){P=Rt},setClear:function(Rt,te,ee,ge,Te){Te===!0&&(Rt*=ge,te*=ge,ee*=ge),ht.set(Rt,te,ee,ge),Pt.equals(ht)===!1&&(s.clearColor(Rt,te,ee,ge),Pt.copy(ht))},reset:function(){P=!1,ut=null,Pt.set(-1,0,0,0)}}}function r(){let P=!1,ht=null,ut=null,Pt=null;return{setTest:function(Rt){Rt?wt(s.DEPTH_TEST):Mt(s.DEPTH_TEST)},setMask:function(Rt){ht!==Rt&&!P&&(s.depthMask(Rt),ht=Rt)},setFunc:function(Rt){if(ut!==Rt){switch(Rt){case Dl:s.depthFunc(s.NEVER);break;case Il:s.depthFunc(s.ALWAYS);break;case Ul:s.depthFunc(s.LESS);break;case gs:s.depthFunc(s.LEQUAL);break;case Nl:s.depthFunc(s.EQUAL);break;case Fl:s.depthFunc(s.GEQUAL);break;case Ol:s.depthFunc(s.GREATER);break;case Bl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ut=Rt}},setLocked:function(Rt){P=Rt},setClear:function(Rt){Pt!==Rt&&(s.clearDepth(Rt),Pt=Rt)},reset:function(){P=!1,ht=null,ut=null,Pt=null}}}function o(){let P=!1,ht=null,ut=null,Pt=null,Rt=null,te=null,ee=null,ge=null,Te=null;return{setTest:function(ne){P||(ne?wt(s.STENCIL_TEST):Mt(s.STENCIL_TEST))},setMask:function(ne){ht!==ne&&!P&&(s.stencilMask(ne),ht=ne)},setFunc:function(ne,be,tn){(ut!==ne||Pt!==be||Rt!==tn)&&(s.stencilFunc(ne,be,tn),ut=ne,Pt=be,Rt=tn)},setOp:function(ne,be,tn){(te!==ne||ee!==be||ge!==tn)&&(s.stencilOp(ne,be,tn),te=ne,ee=be,ge=tn)},setLocked:function(ne){P=ne},setClear:function(ne){Te!==ne&&(s.clearStencil(ne),Te=ne)},reset:function(){P=!1,ht=null,ut=null,Pt=null,Rt=null,te=null,ee=null,ge=null,Te=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,d=!1,y=null,v=null,w=null,C=null,A=null,b=null,O=null,M=new kt(0,0,0),E=0,G=!1,k=null,J=null,L=null,F=null,V=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Y=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=Y>=1):j.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=Y>=2);let tt=null,Q={};const z=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),rt=new re().fromArray(z),mt=new re().fromArray($);function dt(P,ht,ut,Pt){const Rt=new Uint8Array(4),te=s.createTexture();s.bindTexture(P,te),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ee=0;ee<ut;ee++)n&&(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)?s.texImage3D(ht,0,s.RGBA,1,1,Pt,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(ht+ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return te}const St={};St[s.TEXTURE_2D]=dt(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=dt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(St[s.TEXTURE_2D_ARRAY]=dt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=dt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),wt(s.DEPTH_TEST),l.setFunc(gs),bt(!1),T(Hr),wt(s.CULL_FACE),lt(Sn);function wt(P){f[P]!==!0&&(s.enable(P),f[P]=!0)}function Mt(P){f[P]!==!1&&(s.disable(P),f[P]=!1)}function Ut(P,ht){return m[P]!==ht?(s.bindFramebuffer(P,ht),m[P]=ht,n&&(P===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=ht),P===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=ht)),!0):!1}function N(P,ht){let ut=_,Pt=!1;if(P)if(ut=g.get(ht),ut===void 0&&(ut=[],g.set(ht,ut)),P.isWebGLMultipleRenderTargets){const Rt=P.texture;if(ut.length!==Rt.length||ut[0]!==s.COLOR_ATTACHMENT0){for(let te=0,ee=Rt.length;te<ee;te++)ut[te]=s.COLOR_ATTACHMENT0+te;ut.length=Rt.length,Pt=!0}}else ut[0]!==s.COLOR_ATTACHMENT0&&(ut[0]=s.COLOR_ATTACHMENT0,Pt=!0);else ut[0]!==s.BACK&&(ut[0]=s.BACK,Pt=!0);Pt&&(e.isWebGL2?s.drawBuffers(ut):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ut))}function Vt(P){return p!==P?(s.useProgram(P),p=P,!0):!1}const pt={[Nn]:s.FUNC_ADD,[_l]:s.FUNC_SUBTRACT,[vl]:s.FUNC_REVERSE_SUBTRACT};if(n)pt[qr]=s.MIN,pt[Yr]=s.MAX;else{const P=t.get("EXT_blend_minmax");P!==null&&(pt[qr]=P.MIN_EXT,pt[Yr]=P.MAX_EXT)}const yt={[xl]:s.ZERO,[Ml]:s.ONE,[yl]:s.SRC_COLOR,[pr]:s.SRC_ALPHA,[Al]:s.SRC_ALPHA_SATURATE,[Tl]:s.DST_COLOR,[wl]:s.DST_ALPHA,[Sl]:s.ONE_MINUS_SRC_COLOR,[mr]:s.ONE_MINUS_SRC_ALPHA,[bl]:s.ONE_MINUS_DST_COLOR,[El]:s.ONE_MINUS_DST_ALPHA,[Rl]:s.CONSTANT_COLOR,[Cl]:s.ONE_MINUS_CONSTANT_COLOR,[Ll]:s.CONSTANT_ALPHA,[Pl]:s.ONE_MINUS_CONSTANT_ALPHA};function lt(P,ht,ut,Pt,Rt,te,ee,ge,Te,ne){if(P===Sn){d===!0&&(Mt(s.BLEND),d=!1);return}if(d===!1&&(wt(s.BLEND),d=!0),P!==gl){if(P!==y||ne!==G){if((v!==Nn||A!==Nn)&&(s.blendEquation(s.FUNC_ADD),v=Nn,A=Nn),ne)switch(P){case ui:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vr:s.blendFunc(s.ONE,s.ONE);break;case Wr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ui:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Wr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}w=null,C=null,b=null,O=null,M.set(0,0,0),E=0,y=P,G=ne}return}Rt=Rt||ht,te=te||ut,ee=ee||Pt,(ht!==v||Rt!==A)&&(s.blendEquationSeparate(pt[ht],pt[Rt]),v=ht,A=Rt),(ut!==w||Pt!==C||te!==b||ee!==O)&&(s.blendFuncSeparate(yt[ut],yt[Pt],yt[te],yt[ee]),w=ut,C=Pt,b=te,O=ee),(ge.equals(M)===!1||Te!==E)&&(s.blendColor(ge.r,ge.g,ge.b,Te),M.copy(ge),E=Te),y=P,G=!1}function Zt(P,ht){P.side===Ze?Mt(s.CULL_FACE):wt(s.CULL_FACE);let ut=P.side===De;ht&&(ut=!ut),bt(ut),P.blending===ui&&P.transparent===!1?lt(Sn):lt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const Pt=P.stencilWrite;c.setTest(Pt),Pt&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),B(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?wt(s.SAMPLE_ALPHA_TO_COVERAGE):Mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function bt(P){k!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),k=P)}function T(P){P!==pl?(wt(s.CULL_FACE),P!==J&&(P===Hr?s.cullFace(s.BACK):P===ml?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Mt(s.CULL_FACE),J=P}function x(P){P!==L&&(q&&s.lineWidth(P),L=P)}function B(P,ht,ut){P?(wt(s.POLYGON_OFFSET_FILL),(F!==ht||V!==ut)&&(s.polygonOffset(ht,ut),F=ht,V=ut)):Mt(s.POLYGON_OFFSET_FILL)}function nt(P){P?wt(s.SCISSOR_TEST):Mt(s.SCISSOR_TEST)}function Z(P){P===void 0&&(P=s.TEXTURE0+K-1),tt!==P&&(s.activeTexture(P),tt=P)}function it(P,ht,ut){ut===void 0&&(tt===null?ut=s.TEXTURE0+K-1:ut=tt);let Pt=Q[ut];Pt===void 0&&(Pt={type:void 0,texture:void 0},Q[ut]=Pt),(Pt.type!==P||Pt.texture!==ht)&&(tt!==ut&&(s.activeTexture(ut),tt=ut),s.bindTexture(P,ht||St[P]),Pt.type=P,Pt.texture=ht)}function vt(){const P=Q[tt];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ct(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _t(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function At(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Nt(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function et(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $t(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Bt(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Lt(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Et(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function gt(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ft(P){rt.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),rt.copy(P))}function Kt(P){mt.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),mt.copy(P))}function le(P,ht){let ut=u.get(ht);ut===void 0&&(ut=new WeakMap,u.set(ht,ut));let Pt=ut.get(P);Pt===void 0&&(Pt=s.getUniformBlockIndex(ht,P.name),ut.set(P,Pt))}function Wt(P,ht){const Pt=u.get(ht).get(P);h.get(ht)!==Pt&&(s.uniformBlockBinding(ht,Pt,P.__bindingPointIndex),h.set(ht,Pt))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},tt=null,Q={},m={},g=new WeakMap,_=[],p=null,d=!1,y=null,v=null,w=null,C=null,A=null,b=null,O=null,M=new kt(0,0,0),E=0,G=!1,k=null,J=null,L=null,F=null,V=null,rt.set(0,0,s.canvas.width,s.canvas.height),mt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:wt,disable:Mt,bindFramebuffer:Ut,drawBuffers:N,useProgram:Vt,setBlending:lt,setMaterial:Zt,setFlipSided:bt,setCullFace:T,setLineWidth:x,setPolygonOffset:B,setScissorTest:nt,activeTexture:Z,bindTexture:it,unbindTexture:vt,compressedTexImage2D:ct,compressedTexImage3D:_t,texImage2D:Et,texImage3D:gt,updateUBOMapping:le,uniformBlockBinding:Wt,texStorage2D:Bt,texStorage3D:Lt,texSubImage2D:At,texSubImage3D:Nt,compressedTexSubImage2D:et,compressedTexSubImage3D:$t,scissor:Ft,viewport:Kt,reset:at}}function Tp(s,t,e,n,i,r,o){const a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return m?new OffscreenCanvas(T,x):Ss("canvas")}function _(T,x,B,nt){let Z=1;if((T.width>nt||T.height>nt)&&(Z=nt/Math.max(T.width,T.height)),Z<1||x===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const it=x?ys:Math.floor,vt=it(Z*T.width),ct=it(Z*T.height);u===void 0&&(u=g(vt,ct));const _t=B?g(vt,ct):u;return _t.width=vt,_t.height=ct,_t.getContext("2d").drawImage(T,0,0,vt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+vt+"x"+ct+")."),_t}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function p(T){return Sr(T.width)&&Sr(T.height)}function d(T){return a?!1:T.wrapS!==Je||T.wrapT!==Je||T.minFilter!==Ce&&T.minFilter!==He}function y(T,x){return T.generateMipmaps&&x&&T.minFilter!==Ce&&T.minFilter!==He}function v(T){s.generateMipmap(T)}function w(T,x,B,nt,Z=!1){if(a===!1)return x;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let it=x;if(x===s.RED&&(B===s.FLOAT&&(it=s.R32F),B===s.HALF_FLOAT&&(it=s.R16F),B===s.UNSIGNED_BYTE&&(it=s.R8)),x===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(it=s.R8UI),B===s.UNSIGNED_SHORT&&(it=s.R16UI),B===s.UNSIGNED_INT&&(it=s.R32UI),B===s.BYTE&&(it=s.R8I),B===s.SHORT&&(it=s.R16I),B===s.INT&&(it=s.R32I)),x===s.RG&&(B===s.FLOAT&&(it=s.RG32F),B===s.HALF_FLOAT&&(it=s.RG16F),B===s.UNSIGNED_BYTE&&(it=s.RG8)),x===s.RGBA){const vt=Z?_s:Qt.getTransfer(nt);B===s.FLOAT&&(it=s.RGBA32F),B===s.HALF_FLOAT&&(it=s.RGBA16F),B===s.UNSIGNED_BYTE&&(it=vt===se?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(it=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(it=s.RGB5_A1)}return(it===s.R16F||it===s.R32F||it===s.RG16F||it===s.RG32F||it===s.RGBA16F||it===s.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function C(T,x,B){return y(T,B)===!0||T.isFramebufferTexture&&T.minFilter!==Ce&&T.minFilter!==He?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){return T===Ce||T===jr||T===Is?s.NEAREST:s.LINEAR}function b(T){const x=T.target;x.removeEventListener("dispose",b),M(x),x.isVideoTexture&&h.delete(x)}function O(T){const x=T.target;x.removeEventListener("dispose",O),G(x)}function M(T){const x=n.get(T);if(x.__webglInit===void 0)return;const B=T.source,nt=f.get(B);if(nt){const Z=nt[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(T),Object.keys(nt).length===0&&f.delete(B)}n.remove(T)}function E(T){const x=n.get(T);s.deleteTexture(x.__webglTexture);const B=T.source,nt=f.get(B);delete nt[x.__cacheKey],o.memory.textures--}function G(T){const x=T.texture,B=n.get(T),nt=n.get(x);if(nt.__webglTexture!==void 0&&(s.deleteTexture(nt.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(B.__webglFramebuffer[Z]))for(let it=0;it<B.__webglFramebuffer[Z].length;it++)s.deleteFramebuffer(B.__webglFramebuffer[Z][it]);else s.deleteFramebuffer(B.__webglFramebuffer[Z]);B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer[Z])}else{if(Array.isArray(B.__webglFramebuffer))for(let Z=0;Z<B.__webglFramebuffer.length;Z++)s.deleteFramebuffer(B.__webglFramebuffer[Z]);else s.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&s.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let Z=0;Z<B.__webglColorRenderbuffer.length;Z++)B.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(B.__webglColorRenderbuffer[Z]);B.__webglDepthRenderbuffer&&s.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let Z=0,it=x.length;Z<it;Z++){const vt=n.get(x[Z]);vt.__webglTexture&&(s.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(x[Z])}n.remove(x),n.remove(T)}let k=0;function J(){k=0}function L(){const T=k;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),k+=1,T}function F(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function V(T,x){const B=n.get(T);if(T.isVideoTexture&&Zt(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const nt=T.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(B,T,x);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+x)}function K(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){rt(B,T,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+x)}function q(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){rt(B,T,x);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+x)}function Y(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){mt(B,T,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+x)}const j={[vr]:s.REPEAT,[Je]:s.CLAMP_TO_EDGE,[xr]:s.MIRRORED_REPEAT},tt={[Ce]:s.NEAREST,[jr]:s.NEAREST_MIPMAP_NEAREST,[Is]:s.NEAREST_MIPMAP_LINEAR,[He]:s.LINEAR,[Yl]:s.LINEAR_MIPMAP_NEAREST,[Pi]:s.LINEAR_MIPMAP_LINEAR},Q={[rc]:s.NEVER,[uc]:s.ALWAYS,[ac]:s.LESS,[Uo]:s.LEQUAL,[oc]:s.EQUAL,[hc]:s.GEQUAL,[lc]:s.GREATER,[cc]:s.NOTEQUAL};function z(T,x,B){if(B?(s.texParameteri(T,s.TEXTURE_WRAP_S,j[x.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,j[x.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,j[x.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,tt[x.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,tt[x.minFilter])):(s.texParameteri(T,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(T,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(x.wrapS!==Je||x.wrapT!==Je)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,s.TEXTURE_MAG_FILTER,A(x.magFilter)),s.texParameteri(T,s.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==Ce&&x.minFilter!==He&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,Q[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const nt=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===Ce||x.minFilter!==Is&&x.minFilter!==Pi||x.type===yn&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===Di&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(s.texParameterf(T,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function $(T,x){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",b));const nt=x.source;let Z=f.get(nt);Z===void 0&&(Z={},f.set(nt,Z));const it=F(x);if(it!==T.__cacheKey){Z[it]===void 0&&(Z[it]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Z[it].usedTimes++;const vt=Z[T.__cacheKey];vt!==void 0&&(Z[T.__cacheKey].usedTimes--,vt.usedTimes===0&&E(x)),T.__cacheKey=it,T.__webglTexture=Z[it].texture}return B}function rt(T,x,B){let nt=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(nt=s.TEXTURE_3D);const Z=$(T,x),it=x.source;e.bindTexture(nt,T.__webglTexture,s.TEXTURE0+B);const vt=n.get(it);if(it.version!==vt.__version||Z===!0){e.activeTexture(s.TEXTURE0+B);const ct=Qt.getPrimaries(Qt.workingColorSpace),_t=x.colorSpace===We?null:Qt.getPrimaries(x.colorSpace),At=x.colorSpace===We||ct===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Nt=d(x)&&p(x.image)===!1;let et=_(x.image,Nt,!1,i.maxTextureSize);et=bt(x,et);const $t=p(et)||a,Bt=r.convert(x.format,x.colorSpace);let Lt=r.convert(x.type),Et=w(x.internalFormat,Bt,Lt,x.colorSpace,x.isVideoTexture);z(nt,x,$t);let gt;const Ft=x.mipmaps,Kt=a&&x.isVideoTexture!==!0&&Et!==Po,le=vt.__version===void 0||Z===!0,Wt=C(x,et,$t);if(x.isDepthTexture)Et=s.DEPTH_COMPONENT,a?x.type===yn?Et=s.DEPTH_COMPONENT32F:x.type===Mn?Et=s.DEPTH_COMPONENT24:x.type===Bn?Et=s.DEPTH24_STENCIL8:Et=s.DEPTH_COMPONENT16:x.type===yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Gn&&Et===s.DEPTH_COMPONENT&&x.type!==br&&x.type!==Mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Mn,Lt=r.convert(x.type)),x.format===mi&&Et===s.DEPTH_COMPONENT&&(Et=s.DEPTH_STENCIL,x.type!==Bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Bn,Lt=r.convert(x.type))),le&&(Kt?e.texStorage2D(s.TEXTURE_2D,1,Et,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,Et,et.width,et.height,0,Bt,Lt,null));else if(x.isDataTexture)if(Ft.length>0&&$t){Kt&&le&&e.texStorage2D(s.TEXTURE_2D,Wt,Et,Ft[0].width,Ft[0].height);for(let at=0,P=Ft.length;at<P;at++)gt=Ft[at],Kt?e.texSubImage2D(s.TEXTURE_2D,at,0,0,gt.width,gt.height,Bt,Lt,gt.data):e.texImage2D(s.TEXTURE_2D,at,Et,gt.width,gt.height,0,Bt,Lt,gt.data);x.generateMipmaps=!1}else Kt?(le&&e.texStorage2D(s.TEXTURE_2D,Wt,Et,et.width,et.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,et.width,et.height,Bt,Lt,et.data)):e.texImage2D(s.TEXTURE_2D,0,Et,et.width,et.height,0,Bt,Lt,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Kt&&le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Wt,Et,Ft[0].width,Ft[0].height,et.depth);for(let at=0,P=Ft.length;at<P;at++)gt=Ft[at],x.format!==Qe?Bt!==null?Kt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,gt.width,gt.height,et.depth,Bt,gt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,at,Et,gt.width,gt.height,et.depth,0,gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,gt.width,gt.height,et.depth,Bt,Lt,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,at,Et,gt.width,gt.height,et.depth,0,Bt,Lt,gt.data)}else{Kt&&le&&e.texStorage2D(s.TEXTURE_2D,Wt,Et,Ft[0].width,Ft[0].height);for(let at=0,P=Ft.length;at<P;at++)gt=Ft[at],x.format!==Qe?Bt!==null?Kt?e.compressedTexSubImage2D(s.TEXTURE_2D,at,0,0,gt.width,gt.height,Bt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,at,Et,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage2D(s.TEXTURE_2D,at,0,0,gt.width,gt.height,Bt,Lt,gt.data):e.texImage2D(s.TEXTURE_2D,at,Et,gt.width,gt.height,0,Bt,Lt,gt.data)}else if(x.isDataArrayTexture)Kt?(le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Wt,Et,et.width,et.height,et.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,Bt,Lt,et.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Et,et.width,et.height,et.depth,0,Bt,Lt,et.data);else if(x.isData3DTexture)Kt?(le&&e.texStorage3D(s.TEXTURE_3D,Wt,Et,et.width,et.height,et.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,Bt,Lt,et.data)):e.texImage3D(s.TEXTURE_3D,0,Et,et.width,et.height,et.depth,0,Bt,Lt,et.data);else if(x.isFramebufferTexture){if(le)if(Kt)e.texStorage2D(s.TEXTURE_2D,Wt,Et,et.width,et.height);else{let at=et.width,P=et.height;for(let ht=0;ht<Wt;ht++)e.texImage2D(s.TEXTURE_2D,ht,Et,at,P,0,Bt,Lt,null),at>>=1,P>>=1}}else if(Ft.length>0&&$t){Kt&&le&&e.texStorage2D(s.TEXTURE_2D,Wt,Et,Ft[0].width,Ft[0].height);for(let at=0,P=Ft.length;at<P;at++)gt=Ft[at],Kt?e.texSubImage2D(s.TEXTURE_2D,at,0,0,Bt,Lt,gt):e.texImage2D(s.TEXTURE_2D,at,Et,Bt,Lt,gt);x.generateMipmaps=!1}else Kt?(le&&e.texStorage2D(s.TEXTURE_2D,Wt,Et,et.width,et.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Bt,Lt,et)):e.texImage2D(s.TEXTURE_2D,0,Et,Bt,Lt,et);y(x,$t)&&v(nt),vt.__version=it.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function mt(T,x,B){if(x.image.length!==6)return;const nt=$(T,x),Z=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+B);const it=n.get(Z);if(Z.version!==it.__version||nt===!0){e.activeTexture(s.TEXTURE0+B);const vt=Qt.getPrimaries(Qt.workingColorSpace),ct=x.colorSpace===We?null:Qt.getPrimaries(x.colorSpace),_t=x.colorSpace===We||vt===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const At=x.isCompressedTexture||x.image[0].isCompressedTexture,Nt=x.image[0]&&x.image[0].isDataTexture,et=[];for(let at=0;at<6;at++)!At&&!Nt?et[at]=_(x.image[at],!1,!0,i.maxCubemapSize):et[at]=Nt?x.image[at].image:x.image[at],et[at]=bt(x,et[at]);const $t=et[0],Bt=p($t)||a,Lt=r.convert(x.format,x.colorSpace),Et=r.convert(x.type),gt=w(x.internalFormat,Lt,Et,x.colorSpace),Ft=a&&x.isVideoTexture!==!0,Kt=it.__version===void 0||nt===!0;let le=C(x,$t,Bt);z(s.TEXTURE_CUBE_MAP,x,Bt);let Wt;if(At){Ft&&Kt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,le,gt,$t.width,$t.height);for(let at=0;at<6;at++){Wt=et[at].mipmaps;for(let P=0;P<Wt.length;P++){const ht=Wt[P];x.format!==Qe?Lt!==null?Ft?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,P,0,0,ht.width,ht.height,Lt,ht.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,P,gt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,P,0,0,ht.width,ht.height,Lt,Et,ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,P,gt,ht.width,ht.height,0,Lt,Et,ht.data)}}}else{Wt=x.mipmaps,Ft&&Kt&&(Wt.length>0&&le++,e.texStorage2D(s.TEXTURE_CUBE_MAP,le,gt,et[0].width,et[0].height));for(let at=0;at<6;at++)if(Nt){Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,et[at].width,et[at].height,Lt,Et,et[at].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,gt,et[at].width,et[at].height,0,Lt,Et,et[at].data);for(let P=0;P<Wt.length;P++){const ut=Wt[P].image[at].image;Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,P+1,0,0,ut.width,ut.height,Lt,Et,ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,P+1,gt,ut.width,ut.height,0,Lt,Et,ut.data)}}else{Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Lt,Et,et[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,gt,Lt,Et,et[at]);for(let P=0;P<Wt.length;P++){const ht=Wt[P];Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,P+1,0,0,Lt,Et,ht.image[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,P+1,gt,Lt,Et,ht.image[at])}}}y(x,Bt)&&v(s.TEXTURE_CUBE_MAP),it.__version=Z.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function dt(T,x,B,nt,Z,it){const vt=r.convert(B.format,B.colorSpace),ct=r.convert(B.type),_t=w(B.internalFormat,vt,ct,B.colorSpace);if(!n.get(x).__hasExternalTextures){const Nt=Math.max(1,x.width>>it),et=Math.max(1,x.height>>it);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,it,_t,Nt,et,x.depth,0,vt,ct,null):e.texImage2D(Z,it,_t,Nt,et,0,vt,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),lt(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,Z,n.get(B).__webglTexture,0,yt(x)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,Z,n.get(B).__webglTexture,it),e.bindFramebuffer(s.FRAMEBUFFER,null)}function St(T,x,B){if(s.bindRenderbuffer(s.RENDERBUFFER,T),x.depthBuffer&&!x.stencilBuffer){let nt=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(B||lt(x)){const Z=x.depthTexture;Z&&Z.isDepthTexture&&(Z.type===yn?nt=s.DEPTH_COMPONENT32F:Z.type===Mn&&(nt=s.DEPTH_COMPONENT24));const it=yt(x);lt(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it,nt,x.width,x.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,it,nt,x.width,x.height)}else s.renderbufferStorage(s.RENDERBUFFER,nt,x.width,x.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,T)}else if(x.depthBuffer&&x.stencilBuffer){const nt=yt(x);B&&lt(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,s.DEPTH24_STENCIL8,x.width,x.height):lt(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt,s.DEPTH24_STENCIL8,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,T)}else{const nt=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Z=0;Z<nt.length;Z++){const it=nt[Z],vt=r.convert(it.format,it.colorSpace),ct=r.convert(it.type),_t=w(it.internalFormat,vt,ct,it.colorSpace),At=yt(x);B&&lt(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,At,_t,x.width,x.height):lt(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At,_t,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,_t,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function wt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const nt=n.get(x.depthTexture).__webglTexture,Z=yt(x);if(x.depthTexture.format===Gn)lt(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0);else if(x.depthTexture.format===mi)lt(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Mt(T){const x=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");wt(x.__webglFramebuffer,T)}else if(B){x.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[nt]),x.__webglDepthbuffer[nt]=s.createRenderbuffer(),St(x.__webglDepthbuffer[nt],T,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),St(x.__webglDepthbuffer,T,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(T,x,B){const nt=n.get(T);x!==void 0&&dt(nt.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Mt(T)}function N(T){const x=T.texture,B=n.get(T),nt=n.get(x);T.addEventListener("dispose",O),T.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=x.version,o.memory.textures++);const Z=T.isWebGLCubeRenderTarget===!0,it=T.isWebGLMultipleRenderTargets===!0,vt=p(T)||a;if(Z){B.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(a&&x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ct]=[];for(let _t=0;_t<x.mipmaps.length;_t++)B.__webglFramebuffer[ct][_t]=s.createFramebuffer()}else B.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)B.__webglFramebuffer[ct]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(it)if(i.drawBuffers){const ct=T.texture;for(let _t=0,At=ct.length;_t<At;_t++){const Nt=n.get(ct[_t]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&lt(T)===!1){const ct=it?x:[x];B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let _t=0;_t<ct.length;_t++){const At=ct[_t];B.__webglColorRenderbuffer[_t]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[_t]);const Nt=r.convert(At.format,At.colorSpace),et=r.convert(At.type),$t=w(At.internalFormat,Nt,et,At.colorSpace,T.isXRRenderTarget===!0),Bt=yt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt,$t,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,B.__webglColorRenderbuffer[_t])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),St(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),z(s.TEXTURE_CUBE_MAP,x,vt);for(let ct=0;ct<6;ct++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)dt(B.__webglFramebuffer[ct][_t],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t);else dt(B.__webglFramebuffer[ct],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);y(x,vt)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){const ct=T.texture;for(let _t=0,At=ct.length;_t<At;_t++){const Nt=ct[_t],et=n.get(Nt);e.bindTexture(s.TEXTURE_2D,et.__webglTexture),z(s.TEXTURE_2D,Nt,vt),dt(B.__webglFramebuffer,T,Nt,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,0),y(Nt,vt)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?ct=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,nt.__webglTexture),z(ct,x,vt),a&&x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)dt(B.__webglFramebuffer[_t],T,x,s.COLOR_ATTACHMENT0,ct,_t);else dt(B.__webglFramebuffer,T,x,s.COLOR_ATTACHMENT0,ct,0);y(x,vt)&&v(ct),e.unbindTexture()}T.depthBuffer&&Mt(T)}function Vt(T){const x=p(T)||a,B=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let nt=0,Z=B.length;nt<Z;nt++){const it=B[nt];if(y(it,x)){const vt=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ct=n.get(it).__webglTexture;e.bindTexture(vt,ct),v(vt),e.unbindTexture()}}}function pt(T){if(a&&T.samples>0&&lt(T)===!1){const x=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],B=T.width,nt=T.height;let Z=s.COLOR_BUFFER_BIT;const it=[],vt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=n.get(T),_t=T.isWebGLMultipleRenderTargets===!0;if(_t)for(let At=0;At<x.length;At++)e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let At=0;At<x.length;At++){it.push(s.COLOR_ATTACHMENT0+At),T.depthBuffer&&it.push(vt);const Nt=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(Nt===!1&&(T.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),_t&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ct.__webglColorRenderbuffer[At]),Nt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[vt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[vt])),_t){const et=n.get(x[At]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,et,0)}s.blitFramebuffer(0,0,B,nt,0,0,B,nt,Z,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,it)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_t)for(let At=0;At<x.length;At++){e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,ct.__webglColorRenderbuffer[At]);const Nt=n.get(x[At]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,Nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function yt(T){return Math.min(i.maxSamples,T.samples)}function lt(T){const x=n.get(T);return a&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Zt(T){const x=o.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function bt(T,x){const B=T.colorSpace,nt=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===yr||B!==pn&&B!==We&&(Qt.getTransfer(B)===se?a===!1?t.has("EXT_sRGB")===!0&&nt===Qe?(T.format=yr,T.minFilter=He,T.generateMipmaps=!1):x=Fo.sRGBToLinear(x):(nt!==Qe||Z!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}this.allocateTextureUnit=L,this.resetTextureUnits=J,this.setTexture2D=V,this.setTexture2DArray=K,this.setTexture3D=q,this.setTextureCube=Y,this.rebindTextures=Ut,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=lt}function bp(s,t,e){const n=e.isWebGL2;function i(r,o=We){let a;const l=Qt.getTransfer(o);if(r===En)return s.UNSIGNED_BYTE;if(r===bo)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ao)return s.UNSIGNED_SHORT_5_5_5_1;if(r===jl)return s.BYTE;if(r===Kl)return s.SHORT;if(r===br)return s.UNSIGNED_SHORT;if(r===To)return s.INT;if(r===Mn)return s.UNSIGNED_INT;if(r===yn)return s.FLOAT;if(r===Di)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===$l)return s.ALPHA;if(r===Qe)return s.RGBA;if(r===Zl)return s.LUMINANCE;if(r===Jl)return s.LUMINANCE_ALPHA;if(r===Gn)return s.DEPTH_COMPONENT;if(r===mi)return s.DEPTH_STENCIL;if(r===yr)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Ql)return s.RED;if(r===Ro)return s.RED_INTEGER;if(r===tc)return s.RG;if(r===Co)return s.RG_INTEGER;if(r===Lo)return s.RGBA_INTEGER;if(r===Us||r===Ns||r===Fs||r===Os)if(l===se)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Us)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ns)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Us)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ns)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Os)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kr||r===$r||r===Zr||r===Jr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Kr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$r)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Jr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Po)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Qr||r===ta)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Qr)return l===se?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ta)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ea||r===na||r===ia||r===sa||r===ra||r===aa||r===oa||r===la||r===ca||r===ha||r===ua||r===da||r===fa||r===pa)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ea)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===na)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ia)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sa)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ra)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===aa)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===oa)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===la)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ca)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ha)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ua)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===da)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fa)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===pa)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bs||r===ma||r===ga)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Bs)return l===se?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ma)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ga)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ec||r===_a||r===va||r===xa)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Bs)return a.COMPRESSED_RED_RGTC1_EXT;if(r===_a)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===va)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bn?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Ap extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Yt extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rp={type:"move"};class or{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Cp extends _i{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null;const _=e.getContextAttributes();let p=null,d=null;const y=[],v=[],w=new It;let C=null;const A=new Oe;A.layers.enable(1),A.viewport=new re;const b=new Oe;b.layers.enable(2),b.viewport=new re;const O=[A,b],M=new Ap;M.layers.enable(1),M.layers.enable(2);let E=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let $=y[z];return $===void 0&&($=new or,y[z]=$),$.getTargetRaySpace()},this.getControllerGrip=function(z){let $=y[z];return $===void 0&&($=new or,y[z]=$),$.getGripSpace()},this.getHand=function(z){let $=y[z];return $===void 0&&($=new or,y[z]=$),$.getHandSpace()};function k(z){const $=v.indexOf(z.inputSource);if($===-1)return;const rt=y[$];rt!==void 0&&(rt.update(z.inputSource,z.frame,c||o),rt.dispatchEvent({type:z.type,data:z.inputSource}))}function J(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",L);for(let z=0;z<y.length;z++){const $=v[z];$!==null&&(v[z]=null,y[z].disconnect($))}E=null,G=null,t.setRenderTarget(p),m=null,f=null,u=null,i=null,d=null,Q.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",J),i.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(w),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new kn(m.framebufferWidth,m.framebufferHeight,{format:Qe,type:En,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,rt=null,mt=null;_.depth&&(mt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=_.stencil?mi:Gn,rt=_.stencil?Bn:Mn);const dt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(dt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new kn(f.textureWidth,f.textureHeight,{format:Qe,type:En,depthTexture:new jo(f.textureWidth,f.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const St=t.properties.get(d);St.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Q.setContext(i),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(z){for(let $=0;$<z.removed.length;$++){const rt=z.removed[$],mt=v.indexOf(rt);mt>=0&&(v[mt]=null,y[mt].disconnect(rt))}for(let $=0;$<z.added.length;$++){const rt=z.added[$];let mt=v.indexOf(rt);if(mt===-1){for(let St=0;St<y.length;St++)if(St>=v.length){v.push(rt),mt=St;break}else if(v[St]===null){v[St]=rt,mt=St;break}if(mt===-1)break}const dt=y[mt];dt&&dt.connect(rt)}}const F=new R,V=new R;function K(z,$,rt){F.setFromMatrixPosition($.matrixWorld),V.setFromMatrixPosition(rt.matrixWorld);const mt=F.distanceTo(V),dt=$.projectionMatrix.elements,St=rt.projectionMatrix.elements,wt=dt[14]/(dt[10]-1),Mt=dt[14]/(dt[10]+1),Ut=(dt[9]+1)/dt[5],N=(dt[9]-1)/dt[5],Vt=(dt[8]-1)/dt[0],pt=(St[8]+1)/St[0],yt=wt*Vt,lt=wt*pt,Zt=mt/(-Vt+pt),bt=Zt*-Vt;$.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(bt),z.translateZ(Zt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const T=wt+Zt,x=Mt+Zt,B=yt-bt,nt=lt+(mt-bt),Z=Ut*Mt/x*T,it=N*Mt/x*T;z.projectionMatrix.makePerspective(B,nt,Z,it,T,x),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function q(z,$){$===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices($.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;M.near=b.near=A.near=z.near,M.far=b.far=A.far=z.far,(E!==M.near||G!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,G=M.far);const $=z.parent,rt=M.cameras;q(M,$);for(let mt=0;mt<rt.length;mt++)q(rt[mt],$);rt.length===2?K(M,A,b):M.projectionMatrix.copy(A.projectionMatrix),Y(z,M,$)};function Y(z,$,rt){rt===null?z.matrix.copy($.matrixWorld):(z.matrix.copy(rt.matrixWorld),z.matrix.invert(),z.matrix.multiply($.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy($.projectionMatrix),z.projectionMatrixInverse.copy($.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ii*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)};let j=null;function tt(z,$){if(h=$.getViewerPose(c||o),g=$,h!==null){const rt=h.views;m!==null&&(t.setRenderTargetFramebuffer(d,m.framebuffer),t.setRenderTarget(d));let mt=!1;rt.length!==M.cameras.length&&(M.cameras.length=0,mt=!0);for(let dt=0;dt<rt.length;dt++){const St=rt[dt];let wt=null;if(m!==null)wt=m.getViewport(St);else{const Ut=u.getViewSubImage(f,St);wt=Ut.viewport,dt===0&&(t.setRenderTargetTextures(d,Ut.colorTexture,f.ignoreDepthValues?void 0:Ut.depthStencilTexture),t.setRenderTarget(d))}let Mt=O[dt];Mt===void 0&&(Mt=new Oe,Mt.layers.enable(dt),Mt.viewport=new re,O[dt]=Mt),Mt.matrix.fromArray(St.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(St.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(wt.x,wt.y,wt.width,wt.height),dt===0&&(M.matrix.copy(Mt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),mt===!0&&M.cameras.push(Mt)}}for(let rt=0;rt<y.length;rt++){const mt=v[rt],dt=y[rt];mt!==null&&dt!==void 0&&dt.update(mt,$,c||o)}j&&j(z,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const Q=new qo;Q.setAnimationLoop(tt),this.setAnimationLoop=function(z){j=z},this.dispose=function(){}}}function Lp(s,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Vo(s)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,y,v,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,w)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),_(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,y,v):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===De&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===De&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const y=t.get(d).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*v,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,y,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=v*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===De&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const y=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Pp(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const w=v.program;n.uniformBlockBinding(y,w)}function c(y,v){let w=i[y.id];w===void 0&&(g(y),w=h(y),i[y.id]=w,y.addEventListener("dispose",p));const C=v.program;n.updateUBOMapping(y,C);const A=t.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function h(y){const v=u();y.__bindingPointIndex=v;const w=s.createBuffer(),C=y.__size,A=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,C,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,w),w}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=i[y.id],w=y.uniforms,C=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let A=0,b=w.length;A<b;A++){const O=Array.isArray(w[A])?w[A]:[w[A]];for(let M=0,E=O.length;M<E;M++){const G=O[M];if(m(G,A,M,C)===!0){const k=G.__offset,J=Array.isArray(G.value)?G.value:[G.value];let L=0;for(let F=0;F<J.length;F++){const V=J[F],K=_(V);typeof V=="number"||typeof V=="boolean"?(G.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,k+L,G.__data)):V.isMatrix3?(G.__data[0]=V.elements[0],G.__data[1]=V.elements[1],G.__data[2]=V.elements[2],G.__data[3]=0,G.__data[4]=V.elements[3],G.__data[5]=V.elements[4],G.__data[6]=V.elements[5],G.__data[7]=0,G.__data[8]=V.elements[6],G.__data[9]=V.elements[7],G.__data[10]=V.elements[8],G.__data[11]=0):(V.toArray(G.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(y,v,w,C){const A=y.value,b=v+"_"+w;if(C[b]===void 0)return typeof A=="number"||typeof A=="boolean"?C[b]=A:C[b]=A.clone(),!0;{const O=C[b];if(typeof A=="number"||typeof A=="boolean"){if(O!==A)return C[b]=A,!0}else if(O.equals(A)===!1)return O.copy(A),!0}return!1}function g(y){const v=y.uniforms;let w=0;const C=16;for(let b=0,O=v.length;b<O;b++){const M=Array.isArray(v[b])?v[b]:[v[b]];for(let E=0,G=M.length;E<G;E++){const k=M[E],J=Array.isArray(k.value)?k.value:[k.value];for(let L=0,F=J.length;L<F;L++){const V=J[L],K=_(V),q=w%C;q!==0&&C-q<K.boundary&&(w+=C-q),k.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=w,w+=K.storage}}}const A=w%C;return A>0&&(w+=C-A),y.__size=w,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const w=o.indexOf(v.__bindingPointIndex);o.splice(w,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function d(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:d}}class tl{constructor(t={}){const{canvas:e=bc(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const d=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this._useLegacyLights=!1,this.toneMapping=wn,this.toneMappingExposure=1;const v=this;let w=!1,C=0,A=0,b=null,O=-1,M=null;const E=new re,G=new re;let k=null;const J=new kt(0);let L=0,F=e.width,V=e.height,K=1,q=null,Y=null;const j=new re(0,0,F,V),tt=new re(0,0,F,V);let Q=!1;const z=new Lr;let $=!1,rt=!1,mt=null;const dt=new oe,St=new It,wt=new R,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ut(){return b===null?K:1}let N=n;function Vt(S,U){for(let W=0;W<S.length;W++){const X=S[W],H=e.getContext(X,U);if(H!==null)return H}return null}try{const S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tr}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",ht,!1),N===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),N=Vt(U,S),N===null)throw Vt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let pt,yt,lt,Zt,bt,T,x,B,nt,Z,it,vt,ct,_t,At,Nt,et,$t,Bt,Lt,Et,gt,Ft,Kt;function le(){pt=new zd(N),yt=new Ud(N,pt,t),pt.init(yt),gt=new bp(N,pt,yt),lt=new Ep(N,pt,yt),Zt=new Vd(N),bt=new hp,T=new Tp(N,pt,lt,bt,yt,gt,Zt),x=new Fd(v),B=new Gd(v),nt=new Zc(N,yt),Ft=new Dd(N,pt,nt,yt),Z=new kd(N,nt,Zt,Ft),it=new Yd(N,Z,nt,Zt),Bt=new qd(N,yt,T),Nt=new Nd(bt),vt=new cp(v,x,B,pt,yt,Ft,Nt),ct=new Lp(v,bt),_t=new dp,At=new vp(pt,yt),$t=new Pd(v,x,B,lt,it,f,l),et=new wp(v,it,yt),Kt=new Pp(N,Zt,yt,lt),Lt=new Id(N,pt,Zt,yt),Et=new Hd(N,pt,Zt,yt),Zt.programs=vt.programs,v.capabilities=yt,v.extensions=pt,v.properties=bt,v.renderLists=_t,v.shadowMap=et,v.state=lt,v.info=Zt}le();const Wt=new Cp(v,N);this.xr=Wt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=pt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=pt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(S){S!==void 0&&(K=S,this.setSize(F,V,!1))},this.getSize=function(S){return S.set(F,V)},this.setSize=function(S,U,W=!0){if(Wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=S,V=U,e.width=Math.floor(S*K),e.height=Math.floor(U*K),W===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(F*K,V*K).floor()},this.setDrawingBufferSize=function(S,U,W){F=S,V=U,K=W,e.width=Math.floor(S*W),e.height=Math.floor(U*W),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(j)},this.setViewport=function(S,U,W,X){S.isVector4?j.set(S.x,S.y,S.z,S.w):j.set(S,U,W,X),lt.viewport(E.copy(j).multiplyScalar(K).floor())},this.getScissor=function(S){return S.copy(tt)},this.setScissor=function(S,U,W,X){S.isVector4?tt.set(S.x,S.y,S.z,S.w):tt.set(S,U,W,X),lt.scissor(G.copy(tt).multiplyScalar(K).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(S){lt.setScissorTest(Q=S)},this.setOpaqueSort=function(S){q=S},this.setTransparentSort=function(S){Y=S},this.getClearColor=function(S){return S.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(S=!0,U=!0,W=!0){let X=0;if(S){let H=!1;if(b!==null){const ft=b.texture.format;H=ft===Lo||ft===Co||ft===Ro}if(H){const ft=b.texture.type,Tt=ft===En||ft===Mn||ft===br||ft===Bn||ft===bo||ft===Ao,Ct=$t.getClearColor(),Dt=$t.getClearAlpha(),Ht=Ct.r,Ot=Ct.g,Gt=Ct.b;Tt?(m[0]=Ht,m[1]=Ot,m[2]=Gt,m[3]=Dt,N.clearBufferuiv(N.COLOR,0,m)):(g[0]=Ht,g[1]=Ot,g[2]=Gt,g[3]=Dt,N.clearBufferiv(N.COLOR,0,g))}else X|=N.COLOR_BUFFER_BIT}U&&(X|=N.DEPTH_BUFFER_BIT),W&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),_t.dispose(),At.dispose(),bt.dispose(),x.dispose(),B.dispose(),it.dispose(),Ft.dispose(),Kt.dispose(),vt.dispose(),Wt.dispose(),Wt.removeEventListener("sessionstart",Te),Wt.removeEventListener("sessionend",ne),mt&&(mt.dispose(),mt=null),be.stop()};function at(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const S=Zt.autoReset,U=et.enabled,W=et.autoUpdate,X=et.needsUpdate,H=et.type;le(),Zt.autoReset=S,et.enabled=U,et.autoUpdate=W,et.needsUpdate=X,et.type=H}function ht(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ut(S){const U=S.target;U.removeEventListener("dispose",ut),Pt(U)}function Pt(S){Rt(S),bt.remove(S)}function Rt(S){const U=bt.get(S).programs;U!==void 0&&(U.forEach(function(W){vt.releaseProgram(W)}),S.isShaderMaterial&&vt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,W,X,H,ft){U===null&&(U=Mt);const Tt=H.isMesh&&H.matrixWorld.determinant()<0,Ct=ll(S,U,W,X,H);lt.setMaterial(X,Tt);let Dt=W.index,Ht=1;if(X.wireframe===!0){if(Dt=Z.getWireframeAttribute(W),Dt===void 0)return;Ht=2}const Ot=W.drawRange,Gt=W.attributes.position;let ue=Ot.start*Ht,Ue=(Ot.start+Ot.count)*Ht;ft!==null&&(ue=Math.max(ue,ft.start*Ht),Ue=Math.min(Ue,(ft.start+ft.count)*Ht)),Dt!==null?(ue=Math.max(ue,0),Ue=Math.min(Ue,Dt.count)):Gt!=null&&(ue=Math.max(ue,0),Ue=Math.min(Ue,Gt.count));const _e=Ue-ue;if(_e<0||_e===1/0)return;Ft.setup(H,X,Ct,W,Dt);let rn,ae=Lt;if(Dt!==null&&(rn=nt.get(Dt),ae=Et,ae.setIndex(rn)),H.isMesh)X.wireframe===!0?(lt.setLineWidth(X.wireframeLinewidth*Ut()),ae.setMode(N.LINES)):ae.setMode(N.TRIANGLES);else if(H.isLine){let Xt=X.linewidth;Xt===void 0&&(Xt=1),lt.setLineWidth(Xt*Ut()),H.isLineSegments?ae.setMode(N.LINES):H.isLineLoop?ae.setMode(N.LINE_LOOP):ae.setMode(N.LINE_STRIP)}else H.isPoints?ae.setMode(N.POINTS):H.isSprite&&ae.setMode(N.TRIANGLES);if(H.isBatchedMesh)ae.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)ae.renderInstances(ue,_e,H.count);else if(W.isInstancedBufferGeometry){const Xt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Cs=Math.min(W.instanceCount,Xt);ae.renderInstances(ue,_e,Cs)}else ae.render(ue,_e)};function te(S,U,W){S.transparent===!0&&S.side===Ze&&S.forceSinglePass===!1?(S.side=De,S.needsUpdate=!0,Gi(S,U,W),S.side=Tn,S.needsUpdate=!0,Gi(S,U,W),S.side=Ze):Gi(S,U,W)}this.compile=function(S,U,W=null){W===null&&(W=S),p=At.get(W),p.init(),y.push(p),W.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),S!==W&&S.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights(v._useLegacyLights);const X=new Set;return S.traverse(function(H){const ft=H.material;if(ft)if(Array.isArray(ft))for(let Tt=0;Tt<ft.length;Tt++){const Ct=ft[Tt];te(Ct,W,H),X.add(Ct)}else te(ft,W,H),X.add(ft)}),y.pop(),p=null,X},this.compileAsync=function(S,U,W=null){const X=this.compile(S,U,W);return new Promise(H=>{function ft(){if(X.forEach(function(Tt){bt.get(Tt).currentProgram.isReady()&&X.delete(Tt)}),X.size===0){H(S);return}setTimeout(ft,10)}pt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let ee=null;function ge(S){ee&&ee(S)}function Te(){be.stop()}function ne(){be.start()}const be=new qo;be.setAnimationLoop(ge),typeof self<"u"&&be.setContext(self),this.setAnimationLoop=function(S){ee=S,Wt.setAnimationLoop(S),S===null?be.stop():be.start()},Wt.addEventListener("sessionstart",Te),Wt.addEventListener("sessionend",ne),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Wt.enabled===!0&&Wt.isPresenting===!0&&(Wt.cameraAutoUpdate===!0&&Wt.updateCamera(U),U=Wt.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,U,b),p=At.get(S,y.length),p.init(),y.push(p),dt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),z.setFromProjectionMatrix(dt),rt=this.localClippingEnabled,$=Nt.init(this.clippingPlanes,rt),_=_t.get(S,d.length),_.init(),d.push(_),tn(S,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(q,Y),this.info.render.frame++,$===!0&&Nt.beginShadows();const W=p.state.shadowsArray;if(et.render(W,S,U),$===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),$t.render(_,S),p.setupLights(v._useLegacyLights),U.isArrayCamera){const X=U.cameras;for(let H=0,ft=X.length;H<ft;H++){const Tt=X[H];Fr(_,S,Tt,Tt.viewport)}}else Fr(_,S,U);b!==null&&(T.updateMultisampleRenderTarget(b),T.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(v,S,U),Ft.resetDefaultState(),O=-1,M=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function tn(S,U,W,X){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||z.intersectsSprite(S)){X&&wt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(dt);const Tt=it.update(S),Ct=S.material;Ct.visible&&_.push(S,Tt,Ct,W,wt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||z.intersectsObject(S))){const Tt=it.update(S),Ct=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),wt.copy(S.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),wt.copy(Tt.boundingSphere.center)),wt.applyMatrix4(S.matrixWorld).applyMatrix4(dt)),Array.isArray(Ct)){const Dt=Tt.groups;for(let Ht=0,Ot=Dt.length;Ht<Ot;Ht++){const Gt=Dt[Ht],ue=Ct[Gt.materialIndex];ue&&ue.visible&&_.push(S,Tt,ue,W,wt.z,Gt)}}else Ct.visible&&_.push(S,Tt,Ct,W,wt.z,null)}}const ft=S.children;for(let Tt=0,Ct=ft.length;Tt<Ct;Tt++)tn(ft[Tt],U,W,X)}function Fr(S,U,W,X){const H=S.opaque,ft=S.transmissive,Tt=S.transparent;p.setupLightsView(W),$===!0&&Nt.setGlobalState(v.clippingPlanes,W),ft.length>0&&ol(H,ft,U,W),X&&lt.viewport(E.copy(X)),H.length>0&&Bi(H,U,W),ft.length>0&&Bi(ft,U,W),Tt.length>0&&Bi(Tt,U,W),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function ol(S,U,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const ft=yt.isWebGL2;mt===null&&(mt=new kn(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")?Di:En,minFilter:Pi,samples:ft?4:0})),v.getDrawingBufferSize(St),ft?mt.setSize(St.x,St.y):mt.setSize(ys(St.x),ys(St.y));const Tt=v.getRenderTarget();v.setRenderTarget(mt),v.getClearColor(J),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Ct=v.toneMapping;v.toneMapping=wn,Bi(S,W,X),T.updateMultisampleRenderTarget(mt),T.updateRenderTargetMipmap(mt);let Dt=!1;for(let Ht=0,Ot=U.length;Ht<Ot;Ht++){const Gt=U[Ht],ue=Gt.object,Ue=Gt.geometry,_e=Gt.material,rn=Gt.group;if(_e.side===Ze&&ue.layers.test(X.layers)){const ae=_e.side;_e.side=De,_e.needsUpdate=!0,Or(ue,W,X,Ue,_e,rn),_e.side=ae,_e.needsUpdate=!0,Dt=!0}}Dt===!0&&(T.updateMultisampleRenderTarget(mt),T.updateRenderTargetMipmap(mt)),v.setRenderTarget(Tt),v.setClearColor(J,L),v.toneMapping=Ct}function Bi(S,U,W){const X=U.isScene===!0?U.overrideMaterial:null;for(let H=0,ft=S.length;H<ft;H++){const Tt=S[H],Ct=Tt.object,Dt=Tt.geometry,Ht=X===null?Tt.material:X,Ot=Tt.group;Ct.layers.test(W.layers)&&Or(Ct,U,W,Dt,Ht,Ot)}}function Or(S,U,W,X,H,ft){S.onBeforeRender(v,U,W,X,H,ft),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(v,U,W,X,S,ft),H.transparent===!0&&H.side===Ze&&H.forceSinglePass===!1?(H.side=De,H.needsUpdate=!0,v.renderBufferDirect(W,U,X,H,S,ft),H.side=Tn,H.needsUpdate=!0,v.renderBufferDirect(W,U,X,H,S,ft),H.side=Ze):v.renderBufferDirect(W,U,X,H,S,ft),S.onAfterRender(v,U,W,X,H,ft)}function Gi(S,U,W){U.isScene!==!0&&(U=Mt);const X=bt.get(S),H=p.state.lights,ft=p.state.shadowsArray,Tt=H.state.version,Ct=vt.getParameters(S,H.state,ft,U,W),Dt=vt.getProgramCacheKey(Ct);let Ht=X.programs;X.environment=S.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(S.isMeshStandardMaterial?B:x).get(S.envMap||X.environment),Ht===void 0&&(S.addEventListener("dispose",ut),Ht=new Map,X.programs=Ht);let Ot=Ht.get(Dt);if(Ot!==void 0){if(X.currentProgram===Ot&&X.lightsStateVersion===Tt)return Gr(S,Ct),Ot}else Ct.uniforms=vt.getUniforms(S),S.onBuild(W,Ct,v),S.onBeforeCompile(Ct,v),Ot=vt.acquireProgram(Ct,Dt),Ht.set(Dt,Ot),X.uniforms=Ct.uniforms;const Gt=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Gt.clippingPlanes=Nt.uniform),Gr(S,Ct),X.needsLights=hl(S),X.lightsStateVersion=Tt,X.needsLights&&(Gt.ambientLightColor.value=H.state.ambient,Gt.lightProbe.value=H.state.probe,Gt.directionalLights.value=H.state.directional,Gt.directionalLightShadows.value=H.state.directionalShadow,Gt.spotLights.value=H.state.spot,Gt.spotLightShadows.value=H.state.spotShadow,Gt.rectAreaLights.value=H.state.rectArea,Gt.ltc_1.value=H.state.rectAreaLTC1,Gt.ltc_2.value=H.state.rectAreaLTC2,Gt.pointLights.value=H.state.point,Gt.pointLightShadows.value=H.state.pointShadow,Gt.hemisphereLights.value=H.state.hemi,Gt.directionalShadowMap.value=H.state.directionalShadowMap,Gt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Gt.spotShadowMap.value=H.state.spotShadowMap,Gt.spotLightMatrix.value=H.state.spotLightMatrix,Gt.spotLightMap.value=H.state.spotLightMap,Gt.pointShadowMap.value=H.state.pointShadowMap,Gt.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=Ot,X.uniformsList=null,Ot}function Br(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=ms.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Gr(S,U){const W=bt.get(S);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function ll(S,U,W,X,H){U.isScene!==!0&&(U=Mt),T.resetTextureUnits();const ft=U.fog,Tt=X.isMeshStandardMaterial?U.environment:null,Ct=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:pn,Dt=(X.isMeshStandardMaterial?B:x).get(X.envMap||Tt),Ht=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ot=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Gt=!!W.morphAttributes.position,ue=!!W.morphAttributes.normal,Ue=!!W.morphAttributes.color;let _e=wn;X.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(_e=v.toneMapping);const rn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ae=rn!==void 0?rn.length:0,Xt=bt.get(X),Cs=p.state.lights;if($===!0&&(rt===!0||S!==M)){const Ge=S===M&&X.id===O;Nt.setState(X,S,Ge)}let ce=!1;X.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Cs.state.version||Xt.outputColorSpace!==Ct||H.isBatchedMesh&&Xt.batching===!1||!H.isBatchedMesh&&Xt.batching===!0||H.isInstancedMesh&&Xt.instancing===!1||!H.isInstancedMesh&&Xt.instancing===!0||H.isSkinnedMesh&&Xt.skinning===!1||!H.isSkinnedMesh&&Xt.skinning===!0||H.isInstancedMesh&&Xt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Xt.instancingColor===!1&&H.instanceColor!==null||Xt.envMap!==Dt||X.fog===!0&&Xt.fog!==ft||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Nt.numPlanes||Xt.numIntersection!==Nt.numIntersection)||Xt.vertexAlphas!==Ht||Xt.vertexTangents!==Ot||Xt.morphTargets!==Gt||Xt.morphNormals!==ue||Xt.morphColors!==Ue||Xt.toneMapping!==_e||yt.isWebGL2===!0&&Xt.morphTargetsCount!==ae)&&(ce=!0):(ce=!0,Xt.__version=X.version);let An=Xt.currentProgram;ce===!0&&(An=Gi(X,U,H));let zr=!1,xi=!1,Ls=!1;const Se=An.getUniforms(),Rn=Xt.uniforms;if(lt.useProgram(An.program)&&(zr=!0,xi=!0,Ls=!0),X.id!==O&&(O=X.id,xi=!0),zr||M!==S){Se.setValue(N,"projectionMatrix",S.projectionMatrix),Se.setValue(N,"viewMatrix",S.matrixWorldInverse);const Ge=Se.map.cameraPosition;Ge!==void 0&&Ge.setValue(N,wt.setFromMatrixPosition(S.matrixWorld)),yt.logarithmicDepthBuffer&&Se.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Se.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,xi=!0,Ls=!0)}if(H.isSkinnedMesh){Se.setOptional(N,H,"bindMatrix"),Se.setOptional(N,H,"bindMatrixInverse");const Ge=H.skeleton;Ge&&(yt.floatVertexTextures?(Ge.boneTexture===null&&Ge.computeBoneTexture(),Se.setValue(N,"boneTexture",Ge.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Se.setOptional(N,H,"batchingTexture"),Se.setValue(N,"batchingTexture",H._matricesTexture,T));const Ps=W.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0&&yt.isWebGL2===!0)&&Bt.update(H,W,An),(xi||Xt.receiveShadow!==H.receiveShadow)&&(Xt.receiveShadow=H.receiveShadow,Se.setValue(N,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Rn.envMap.value=Dt,Rn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),xi&&(Se.setValue(N,"toneMappingExposure",v.toneMappingExposure),Xt.needsLights&&cl(Rn,Ls),ft&&X.fog===!0&&ct.refreshFogUniforms(Rn,ft),ct.refreshMaterialUniforms(Rn,X,K,V,mt),ms.upload(N,Br(Xt),Rn,T)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ms.upload(N,Br(Xt),Rn,T),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Se.setValue(N,"center",H.center),Se.setValue(N,"modelViewMatrix",H.modelViewMatrix),Se.setValue(N,"normalMatrix",H.normalMatrix),Se.setValue(N,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ge=X.uniformsGroups;for(let Ds=0,ul=Ge.length;Ds<ul;Ds++)if(yt.isWebGL2){const kr=Ge[Ds];Kt.update(kr,An),Kt.bind(kr,An)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return An}function cl(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function hl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,U,W){bt.get(S.texture).__webglTexture=U,bt.get(S.depthTexture).__webglTexture=W;const X=bt.get(S);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,U){const W=bt.get(S);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,W=0){b=S,C=U,A=W;let X=!0,H=null,ft=!1,Tt=!1;if(S){const Dt=bt.get(S);Dt.__useDefaultFramebuffer!==void 0?(lt.bindFramebuffer(N.FRAMEBUFFER,null),X=!1):Dt.__webglFramebuffer===void 0?T.setupRenderTarget(S):Dt.__hasExternalTextures&&T.rebindTextures(S,bt.get(S.texture).__webglTexture,bt.get(S.depthTexture).__webglTexture);const Ht=S.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Tt=!0);const Ot=bt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ot[U])?H=Ot[U][W]:H=Ot[U],ft=!0):yt.isWebGL2&&S.samples>0&&T.useMultisampledRTT(S)===!1?H=bt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ot)?H=Ot[W]:H=Ot,E.copy(S.viewport),G.copy(S.scissor),k=S.scissorTest}else E.copy(j).multiplyScalar(K).floor(),G.copy(tt).multiplyScalar(K).floor(),k=Q;if(lt.bindFramebuffer(N.FRAMEBUFFER,H)&&yt.drawBuffers&&X&&lt.drawBuffers(S,H),lt.viewport(E),lt.scissor(G),lt.setScissorTest(k),ft){const Dt=bt.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Dt.__webglTexture,W)}else if(Tt){const Dt=bt.get(S.texture),Ht=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Dt.__webglTexture,W||0,Ht)}O=-1},this.readRenderTargetPixels=function(S,U,W,X,H,ft,Tt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=bt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct){lt.bindFramebuffer(N.FRAMEBUFFER,Ct);try{const Dt=S.texture,Ht=Dt.format,Ot=Dt.type;if(Ht!==Qe&&gt.convert(Ht)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Gt=Ot===Di&&(pt.has("EXT_color_buffer_half_float")||yt.isWebGL2&&pt.has("EXT_color_buffer_float"));if(Ot!==En&&gt.convert(Ot)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ot===yn&&(yt.isWebGL2||pt.has("OES_texture_float")||pt.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-X&&W>=0&&W<=S.height-H&&N.readPixels(U,W,X,H,gt.convert(Ht),gt.convert(Ot),ft)}finally{const Dt=b!==null?bt.get(b).__webglFramebuffer:null;lt.bindFramebuffer(N.FRAMEBUFFER,Dt)}}},this.copyFramebufferToTexture=function(S,U,W=0){const X=Math.pow(2,-W),H=Math.floor(U.image.width*X),ft=Math.floor(U.image.height*X);T.setTexture2D(U,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,S.x,S.y,H,ft),lt.unbindTexture()},this.copyTextureToTexture=function(S,U,W,X=0){const H=U.image.width,ft=U.image.height,Tt=gt.convert(W.format),Ct=gt.convert(W.type);T.setTexture2D(W,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment),U.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,X,S.x,S.y,H,ft,Tt,Ct,U.image.data):U.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,X,S.x,S.y,U.mipmaps[0].width,U.mipmaps[0].height,Tt,U.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,X,S.x,S.y,Tt,Ct,U.image),X===0&&W.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),lt.unbindTexture()},this.copyTextureToTexture3D=function(S,U,W,X,H=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ft=S.max.x-S.min.x+1,Tt=S.max.y-S.min.y+1,Ct=S.max.z-S.min.z+1,Dt=gt.convert(X.format),Ht=gt.convert(X.type);let Ot;if(X.isData3DTexture)T.setTexture3D(X,0),Ot=N.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)T.setTexture2DArray(X,0),Ot=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,X.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,X.unpackAlignment);const Gt=N.getParameter(N.UNPACK_ROW_LENGTH),ue=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ue=N.getParameter(N.UNPACK_SKIP_PIXELS),_e=N.getParameter(N.UNPACK_SKIP_ROWS),rn=N.getParameter(N.UNPACK_SKIP_IMAGES),ae=W.isCompressedTexture?W.mipmaps[H]:W.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ae.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ae.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,S.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,S.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,S.min.z),W.isDataTexture||W.isData3DTexture?N.texSubImage3D(Ot,H,U.x,U.y,U.z,ft,Tt,Ct,Dt,Ht,ae.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ot,H,U.x,U.y,U.z,ft,Tt,Ct,Dt,ae.data)):N.texSubImage3D(Ot,H,U.x,U.y,U.z,ft,Tt,Ct,Dt,Ht,ae),N.pixelStorei(N.UNPACK_ROW_LENGTH,Gt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ue),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ue),N.pixelStorei(N.UNPACK_SKIP_ROWS,_e),N.pixelStorei(N.UNPACK_SKIP_IMAGES,rn),H===0&&X.generateMipmaps&&N.generateMipmap(Ot),lt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),lt.unbindTexture()},this.resetState=function(){C=0,A=0,b=null,lt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ar?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===Ts?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ye?zn:Do}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===zn?ye:pn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Dp extends tl{}Dp.prototype.isWebGL1Renderer=!0;class On{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=e}clone(){return new On(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ip extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Up{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Mr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ae=new R;class ws{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=nn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ws(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class el extends bn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ri;const Ei=new R,ai=new R,oi=new R,li=new It,Ti=new It,nl=new oe,ls=new R,bi=new R,cs=new R,oo=new It,lr=new It,lo=new It;class cr extends fe{constructor(t=new el){if(super(),this.isSprite=!0,this.type="Sprite",ri===void 0){ri=new Me;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Up(e,5);ri.setIndex([0,1,2,0,2,3]),ri.setAttribute("position",new ws(n,3,0,!1)),ri.setAttribute("uv",new ws(n,2,3,!1))}this.geometry=ri,this.material=t,this.center=new It(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ai.setFromMatrixScale(this.matrixWorld),nl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),oi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ai.multiplyScalar(-oi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;hs(ls.set(-.5,-.5,0),oi,o,ai,i,r),hs(bi.set(.5,-.5,0),oi,o,ai,i,r),hs(cs.set(.5,.5,0),oi,o,ai,i,r),oo.set(0,0),lr.set(1,0),lo.set(1,1);let a=t.ray.intersectTriangle(ls,bi,cs,!1,Ei);if(a===null&&(hs(bi.set(-.5,.5,0),oi,o,ai,i,r),lr.set(0,1),a=t.ray.intersectTriangle(ls,cs,bi,!1,Ei),a===null))return;const l=t.ray.origin.distanceTo(Ei);l<t.near||l>t.far||e.push({distance:l,point:Ei.clone(),uv:Ve.getInterpolation(Ei,ls,bi,cs,oo,lr,lo,new It),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function hs(s,t,e,n,i,r){li.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ti.x=r*li.x-i*li.y,Ti.y=i*li.x+r*li.y):Ti.copy(li),s.copy(t),s.x+=Ti.x,s.y+=Ti.y,s.applyMatrix4(nl)}class il extends bn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const co=new R,ho=new R,uo=new oe,hr=new Cr,us=new Oi;class Np extends fe{constructor(t=new Me,e=new il){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)co.fromBufferAttribute(e,i-1),ho.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=co.distanceTo(ho);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(i),us.radius+=r,t.ray.intersectsSphere(us)===!1)return;uo.copy(i).invert(),hr.copy(t.ray).applyMatrix4(uo);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new R,h=new R,u=new R,f=new R,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const d=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let v=d,w=y-1;v<w;v+=m){const C=g.getX(v),A=g.getX(v+1);if(c.fromBufferAttribute(p,C),h.fromBufferAttribute(p,A),hr.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const O=t.ray.origin.distanceTo(f);O<t.near||O>t.far||e.push({distance:O,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let v=d,w=y-1;v<w;v+=m){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),hr.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(f);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}class sl extends bn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const fo=new oe,Er=new Cr,ds=new Oi,fs=new R;class Fp extends fe{constructor(t=new Me,e=new sl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(i),ds.radius+=r,t.ray.intersectsSphere(ds)===!1)return;fo.copy(i).invert(),Er.copy(t.ray).applyMatrix4(fo);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,_=m;g<_;g++){const p=c.getX(g);fs.fromBufferAttribute(u,p),po(fs,p,l,i,t,e,this)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=f,_=m;g<_;g++)fs.fromBufferAttribute(u,g),po(fs,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function po(s,t,e,n,i,r,o){const a=Er.distanceSqToPoint(s);if(a<e){const l=new R;Er.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Op extends Ie{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dr extends Me{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new R,h=new It;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const m=n+u/e*i;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class xe extends Me{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],m=[];let g=0;const _=[],p=n/2;let d=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(f,3)),this.setAttribute("uv",new ie(m,2));function y(){const w=new R,C=new R;let A=0;const b=(e-t)/n;for(let O=0;O<=r;O++){const M=[],E=O/r,G=E*(e-t)+t;for(let k=0;k<=i;k++){const J=k/i,L=J*l+a,F=Math.sin(L),V=Math.cos(L);C.x=G*F,C.y=-E*n+p,C.z=G*V,u.push(C.x,C.y,C.z),w.set(F,b,V).normalize(),f.push(w.x,w.y,w.z),m.push(J,1-E),M.push(g++)}_.push(M)}for(let O=0;O<i;O++)for(let M=0;M<r;M++){const E=_[M][O],G=_[M+1][O],k=_[M+1][O+1],J=_[M][O+1];h.push(E,G,J),h.push(G,k,J),A+=6}c.addGroup(d,A,0),d+=A}function v(w){const C=g,A=new It,b=new R;let O=0;const M=w===!0?t:e,E=w===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,p*E,0),f.push(0,E,0),m.push(.5,.5),g++;const G=g;for(let k=0;k<=i;k++){const L=k/i*l+a,F=Math.cos(L),V=Math.sin(L);b.x=M*V,b.y=p*E,b.z=M*F,u.push(b.x,b.y,b.z),f.push(0,E,0),A.x=F*.5+.5,A.y=V*.5*E+.5,m.push(A.x,A.y),g++}for(let k=0;k<i;k++){const J=C+k,L=G+k;w===!0?h.push(L,L+1,J):h.push(L+1,L,J),O+=3}c.addGroup(d,O,w===!0?1:2),d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class he extends xe{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new he(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ir extends Me{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const v=new R,w=new R,C=new R;for(let A=0;A<e.length;A+=3)m(e[A+0],v),m(e[A+1],w),m(e[A+2],C),l(v,w,C,y)}function l(y,v,w,C){const A=C+1,b=[];for(let O=0;O<=A;O++){b[O]=[];const M=y.clone().lerp(w,O/A),E=v.clone().lerp(w,O/A),G=A-O;for(let k=0;k<=G;k++)k===0&&O===A?b[O][k]=M:b[O][k]=M.clone().lerp(E,k/G)}for(let O=0;O<A;O++)for(let M=0;M<2*(A-O)-1;M++){const E=Math.floor(M/2);M%2===0?(f(b[O][E+1]),f(b[O+1][E]),f(b[O][E])):(f(b[O][E+1]),f(b[O+1][E+1]),f(b[O+1][E]))}}function c(y){const v=new R;for(let w=0;w<r.length;w+=3)v.x=r[w+0],v.y=r[w+1],v.z=r[w+2],v.normalize().multiplyScalar(y),r[w+0]=v.x,r[w+1]=v.y,r[w+2]=v.z}function h(){const y=new R;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];const w=p(y)/2/Math.PI+.5,C=d(y)/Math.PI+.5;o.push(w,1-C)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const v=o[y+0],w=o[y+2],C=o[y+4],A=Math.max(v,w,C),b=Math.min(v,w,C);A>.9&&b<.1&&(v<.2&&(o[y+0]+=1),w<.2&&(o[y+2]+=1),C<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function m(y,v){const w=y*3;v.x=t[w+0],v.y=t[w+1],v.z=t[w+2]}function g(){const y=new R,v=new R,w=new R,C=new R,A=new It,b=new It,O=new It;for(let M=0,E=0;M<r.length;M+=9,E+=6){y.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),w.set(r[M+6],r[M+7],r[M+8]),A.set(o[E+0],o[E+1]),b.set(o[E+2],o[E+3]),O.set(o[E+4],o[E+5]),C.copy(y).add(v).add(w).divideScalar(3);const G=p(C);_(A,E+0,y,G),_(b,E+2,v,G),_(O,E+4,w,G)}}function _(y,v,w,C){C<0&&y.x===1&&(o[v]=y.x-1),w.x===0&&w.z===0&&(o[v]=C/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ir(t.vertices,t.indices,t.radius,t.details)}}class Pe extends Ir{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Pe(t.radius,t.detail)}}class Ur extends Me{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/i,m=new R,g=new It;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){const d=r+p/n*o;m.x=u*Math.cos(d),m.y=u*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<i;_++){const p=_*(n+1);for(let d=0;d<n;d++){const y=d+p,v=y,w=y+n+1,C=y+n+2,A=y+1;a.push(v,w,A),a.push(w,C,A)}}this.setIndex(a),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ur(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class sn extends Me{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new R,f=new R,m=[],g=[],_=[],p=[];for(let d=0;d<=n;d++){const y=[],v=d/n;let w=0;d===0&&o===0?w=.5/e:d===n&&l===Math.PI&&(w=-.5/e);for(let C=0;C<=e;C++){const A=C/e;u.x=-t*Math.cos(i+A*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+A*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(A+w,1-v),y.push(c++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){const v=h[d][y+1],w=h[d][y],C=h[d+1][y],A=h[d+1][y+1];(d!==0||o>0)&&m.push(v,w,A),(d!==n-1||l<Math.PI)&&m.push(w,C,A)}this.setIndex(m),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xe extends Me{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new R,u=new R,f=new R;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const _=g/i*r,p=m/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const _=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,d=(i+1)*(m-1)+g,y=(i+1)*m+g;o.push(_,p,y),o.push(p,d,y)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class xt extends bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nr extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ur=new oe,mo=new R,go=new R;class rl{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lr,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;mo.setFromMatrixPosition(t.matrixWorld),e.position.copy(mo),go.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(go),e.updateMatrixWorld(),ur.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ur),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ur)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const _o=new oe,Ai=new R,dr=new R;class Bp extends rl{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ai.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ai),dr.copy(n.position),dr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(dr),n.updateMatrixWorld(),i.makeTranslation(-Ai.x,-Ai.y,-Ai.z),_o.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_o)}}class Gp extends Nr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Bp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class zp extends rl{constructor(){super(new Yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kp extends Nr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new zp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Hp extends Nr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=vo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function vo(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tr);class Wp{constructor(){I(this,"moveVector",new R);I(this,"isStriking",!1);I(this,"isCrackingAir",!1);I(this,"isWhistling",!1);I(this,"keys",{});I(this,"touchActive",!1);I(this,"joystickTouchId",null);I(this,"touchStartPos",{x:0,y:0});I(this,"joystickElement",null);I(this,"joystickKnob",null);window.addEventListener("keydown",t=>this.onKeyDown(t)),window.addEventListener("keyup",t=>this.onKeyUp(t)),window.addEventListener("mousedown",t=>this.onMouseDown(t)),window.addEventListener("mouseup",t=>this.onMouseUp(t)),window.addEventListener("contextmenu",t=>{t.preventDefault()}),window.addEventListener("gesturestart",t=>t.preventDefault(),{passive:!1}),window.addEventListener("gesturechange",t=>t.preventDefault(),{passive:!1}),window.addEventListener("gestureend",t=>t.preventDefault(),{passive:!1}),this.setupTouchControls()}onKeyDown(t){this.keys[t.code]=!0,t.code==="Space"?(this.isStriking=!0,t.preventDefault()):t.code==="ShiftLeft"||t.code==="ShiftRight"||t.code==="KeyE"?(this.isCrackingAir=!0,t.preventDefault()):t.code==="KeyQ"&&(this.isWhistling=!0,t.preventDefault()),this.updateMoveVector()}onKeyUp(t){this.keys[t.code]=!1,this.updateMoveVector()}onMouseDown(t){t.button===0?this.isStriking=!0:t.button===2&&(this.isCrackingAir=!0,t.preventDefault())}onMouseUp(t){}consumeStrike(){return this.isStriking?(this.isStriking=!1,!0):!1}consumeCrackAir(){return this.isCrackingAir?(this.isCrackingAir=!1,!0):!1}consumeWhistle(){return this.isWhistling?(this.isWhistling=!1,!0):!1}updateMoveVector(){this.touchActive||(this.moveVector.set(0,0,0),(this.keys.ArrowUp||this.keys.KeyW)&&(this.moveVector.z-=1),(this.keys.ArrowDown||this.keys.KeyS)&&(this.moveVector.z+=1),(this.keys.ArrowLeft||this.keys.KeyA)&&(this.moveVector.x-=1),(this.keys.ArrowRight||this.keys.KeyD)&&(this.moveVector.x+=1),this.moveVector.lengthSq()>0&&this.moveVector.normalize())}setupTouchControls(){this.joystickElement=document.getElementById("touch-joystick"),this.joystickKnob=document.getElementById("joystick-knob");const t=document.getElementById("btn-touch-strike"),e=document.getElementById("btn-touch-crack"),n=document.getElementById("btn-toggle-touch");if(("ontouchstart"in window||navigator.maxTouchPoints>0)&&document.body.classList.add("touch-enabled"),window.addEventListener("touchstart",()=>{document.body.classList.add("touch-enabled")},{once:!0,passive:!0}),n&&(n.addEventListener("click",a=>{a.stopPropagation(),document.body.classList.toggle("touch-enabled")}),n.addEventListener("touchend",a=>{a.stopPropagation(),a.preventDefault(),document.body.classList.toggle("touch-enabled")})),t){const a=l=>{l.preventDefault(),l.stopPropagation(),this.isStriking=!0};t.addEventListener("touchstart",a,{passive:!1}),t.addEventListener("mousedown",a)}if(e){const a=l=>{l.preventDefault(),l.stopPropagation(),this.isCrackingAir=!0};e.addEventListener("touchstart",a,{passive:!1}),e.addEventListener("mousedown",a)}if(!this.joystickElement)return;const r=50;this.joystickElement.addEventListener("touchstart",a=>{if(a.preventDefault(),a.stopPropagation(),this.touchActive)return;const l=a.changedTouches[0];this.joystickTouchId=l.identifier,this.touchActive=!0;const c=this.joystickElement.getBoundingClientRect();this.touchStartPos={x:c.left+c.width/2,y:c.top+c.height/2},this.handleTouchMove(l.clientX,l.clientY,r)},{passive:!1}),window.addEventListener("touchmove",a=>{if(!(!this.touchActive||this.joystickTouchId===null))for(let l=0;l<a.touches.length;l++){const c=a.touches[l];if(c.identifier===this.joystickTouchId){this.handleTouchMove(c.clientX,c.clientY,r),a.preventDefault();break}}},{passive:!1});const o=a=>{if(!(!this.touchActive||this.joystickTouchId===null)){for(let l=0;l<a.changedTouches.length;l++)if(a.changedTouches[l].identifier===this.joystickTouchId){this.resetJoystick();break}}};window.addEventListener("touchend",o,{passive:!0}),window.addEventListener("touchcancel",o,{passive:!0})}resetJoystick(){this.touchActive=!1,this.joystickTouchId=null,this.moveVector.set(0,0,0),this.joystickKnob&&(this.joystickKnob.style.transform="translate(0px, 0px)")}handleTouchMove(t,e,n){const i=t-this.touchStartPos.x,r=e-this.touchStartPos.y,o=Math.hypot(i,r),a=Math.min(o,n),l=Math.atan2(r,i),c=Math.cos(l)*a,h=Math.sin(l)*a;this.joystickKnob&&(this.joystickKnob.style.transform=`translate(${c}px, ${h}px)`),o>6?this.moveVector.set(Math.cos(l),0,Math.sin(l)):this.moveVector.set(0,0,0)}}class Xp{constructor(t){I(this,"scene");I(this,"particles",[]);I(this,"sparkGeo",new sn(.12,6,6));I(this,"dustGeo",new sn(.2,6,6));I(this,"ringGeo",new Ur(.2,.45,32));I(this,"sparkMat",new Be({color:16766720,transparent:!0}));I(this,"dustMat",new Be({color:14540253,transparent:!0,opacity:.6}));I(this,"shockwaveMat",new Be({color:16777215,side:Ze,transparent:!0,opacity:.8}));this.scene=t}update(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];if(n.life+=t,n.life>=n.maxLife){this.scene.remove(n.mesh),n.mesh instanceof cr&&n.mesh.material.map&&(n.mesh.material.map.dispose(),n.mesh.material.dispose()),n.isDead=!0,this.particles.splice(e,1);continue}const i=n.life/n.maxLife;if(n.mesh.position.addScaledVector(n.velocity,t),n.scaleDelta&&n.mesh.scale.addScalar(n.scaleDelta*t),n.fade){const r=n.mesh.material;r&&"opacity"in r&&(r.opacity=Math.max(0,1-i))}}}spawnShockwave(t,e=8){const n=this.shockwaveMat.clone(),i=new D(this.ringGeo,n);i.position.copy(t),i.position.y=.15,i.rotation.x=-Math.PI/2,this.scene.add(i),this.particles.push({mesh:i,velocity:new R(0,0,0),life:0,maxLife:.45,scaleDelta:e*3.5,fade:!0,isDead:!1})}spawnHitSparks(t,e=8){for(let n=0;n<e;n++){const i=this.sparkMat.clone(),r=new D(this.sparkGeo,i);r.position.copy(t);const o=Math.random()*Math.PI*2,a=3+Math.random()*5,l=new R(Math.cos(o)*a,2+Math.random()*4,Math.sin(o)*a);this.scene.add(r),this.particles.push({mesh:r,velocity:l,life:0,maxLife:.35+Math.random()*.2,fade:!0,isDead:!1})}}spawnDust(t){const e=this.dustMat.clone(),n=new D(this.dustGeo,e);n.position.copy(t),n.position.y=.2;const i=new R((Math.random()-.5)*1.5,.5+Math.random()*1,(Math.random()-.5)*1.5);this.scene.add(n),this.particles.push({mesh:n,velocity:i,life:0,maxLife:.5,scaleDelta:.8,fade:!0,isDead:!1})}spawnFloatingBadge(t,e,n="#FFE838",i=1.6){const r=document.createElement("canvas");r.width=256,r.height=128;const o=r.getContext("2d");if(!o)return;o.fillStyle="rgba(0, 0, 0, 0.6)",o.roundRect(10,10,236,108,20),o.fill(),o.strokeStyle=n,o.lineWidth=6,o.stroke(),o.font="bold 44px sans-serif",o.fillStyle=n,o.textAlign="center",o.textBaseline="middle",o.fillText(e,128,64);const a=new Op(r),l=new el({map:a,transparent:!0}),c=new cr(l);c.position.copy(t),c.position.y+=1.8,c.scale.set(i,i*.5,1),this.scene.add(c),this.particles.push({mesh:c,velocity:new R(0,2.2,0),life:0,maxLife:.9,fade:!0,isDead:!1})}clear(){for(const t of this.particles)this.scene.remove(t.mesh),t.mesh instanceof cr&&t.mesh.material.map&&(t.mesh.material.map.dispose(),t.mesh.material.dispose());this.particles=[]}}class qp{constructor(t){I(this,"scene");I(this,"dirLight");I(this,"ambientLight");I(this,"barnLanternLight");I(this,"grassTufts",[]);I(this,"pollenMotes",null);I(this,"groundMat");I(this,"innerGroundMat");this.scene=t,this.ambientLight=new Hp(16774112,.85),this.scene.add(this.ambientLight),this.dirLight=new kp(16775920,1.25),this.dirLight.position.set(45,60,35),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=.5,this.dirLight.shadow.camera.far=160,this.dirLight.shadow.camera.left=-55,this.dirLight.shadow.camera.right=55,this.dirLight.shadow.camera.top=55,this.dirLight.shadow.camera.bottom=-55,this.dirLight.shadow.bias=-5e-4,this.scene.add(this.dirLight),this.barnLanternLight=new Gp(16758605,1.5,18),this.barnLanternLight.position.set(-27.8,3.2,-17.2),this.barnLanternLight.castShadow=!0,this.scene.add(this.barnLanternLight),this.createGround(),this.createMongolianGer(),this.createOvoo(),this.createMorinyUyaa(),this.createSteppeEnclosures(),this.createSteppeHills(),this.createSteppeFlora(),this.createGrassTufts(),this.createPollenMotes()}createGround(){const t=new Ui(260,260,48,48),e=t.attributes.position;for(let c=0;c<e.count;c++){const h=e.getX(c),u=e.getY(c);if(Math.hypot(h,u)>28){const m=Math.sin(h*.05)*Math.cos(u*.05)*1.2,g=Math.cos(h*.08+u*.04)*.6;e.setZ(c,m+g)}}t.computeVertexNormals(),this.groundMat=new xt({color:6856504,roughness:.92,metalness:.04});const n=new D(t,this.groundMat);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,this.scene.add(n);const i=new Dr(26,36);this.innerGroundMat=new xt({color:8172354,roughness:.95});const r=new D(i,this.innerGroundMat);r.rotation.x=-Math.PI/2,r.position.y=.02,r.receiveShadow=!0,this.scene.add(r);const o=new Ui(5.5,24),a=new xt({color:9268835,roughness:.98}),l=new D(o,a);l.rotation.x=-Math.PI/2,l.rotation.z=-Math.PI/4,l.position.set(-18,.03,-15),l.receiveShadow=!0,this.scene.add(l)}createMongolianGer(){const t=new Yt;t.position.set(-27,0,-20),t.rotation.y=Math.PI/4;const e=new xt({color:16250606,roughness:.9}),n=new xt({color:15526360,roughness:.92}),i=new xt({color:15690752,roughness:.6}),r=new xt({color:16757504,roughness:.5}),o=new xt({color:12364452,roughness:.8}),a=new xt({color:3622735,roughness:.4,metalness:.8}),l=new xt({color:7901340,roughness:.95}),c=new D(new xe(6.4,6.6,.3,32),l);c.position.y=.15,c.receiveShadow=!0,t.add(c);const h=new xe(6,6,3,32,1,!0),u=new D(h,e);u.position.y=1.8,u.castShadow=!0,u.receiveShadow=!0,t.add(u);const f=new D(new Xe(6.02,.08,8,32),i);f.position.y=3.3,f.rotation.x=Math.PI/2,t.add(f),[1,2,2.9].forEach(Q=>{const z=new D(new Xe(6.05,.05,6,32),o);z.position.y=Q,z.rotation.x=Math.PI/2,t.add(z)});const g=new he(6.2,2.4,32,1,!0),_=new D(g,n);_.position.y=4.5,_.castShadow=!0,_.receiveShadow=!0,t.add(_);const p=new Yt;p.position.y=5.7;const d=new D(new Xe(1.2,.14,8,24),i);d.rotation.x=Math.PI/2,d.castShadow=!0,p.add(d);const y=new xe(.04,.04,2.3,8);for(let Q=0;Q<4;Q++){const z=new D(y,i);z.rotation.z=Math.PI/2,z.rotation.y=Q*Math.PI/4,p.add(z)}const v=new D(new Xe(.45,.08,8,16),r);v.rotation.x=Math.PI/2,p.add(v),t.add(p);const w=new Yt;w.position.set(.3,5.6,0);const C=new D(new xe(.18,.18,2.6,12),a);C.position.y=1.3,C.castShadow=!0,w.add(C);const A=new D(new he(.35,.35,12),a);A.position.y=2.65,w.add(A),t.add(w);const b=new Yt;b.position.set(0,1.5,5.92);const O=new D(new st(.24,2.6,.2),i);O.position.x=-1.1,b.add(O);const M=new D(new st(.24,2.6,.2),i);M.position.x=1.1,b.add(M);const E=new D(new st(2.45,.35,.22),i);E.position.y=1.3,b.add(E);const G=new D(new st(1.2,.2,.24),r);G.position.set(0,1.3,.02),b.add(G);const k=new D(new st(2.45,.2,.22),i);k.position.y=-1.3,b.add(k);const J=new D(new st(.95,2.3,.12),i);J.position.set(-.5,0,0),J.castShadow=!0,b.add(J);const L=new D(new st(.95,2.3,.12),i);L.position.set(.5,0,0),L.castShadow=!0,b.add(L);const F=new xt({color:14172949,roughness:.7}),V=new st(.7,.9,.04),K=new D(V,F);K.position.set(-.5,.5,.08),b.add(K);const q=new D(V,F);q.position.set(-.5,-.5,.08),b.add(q);const Y=new D(V,F);Y.position.set(.5,.5,.08),b.add(Y);const j=new D(V,F);j.position.set(.5,-.5,.08),b.add(j),t.add(b);const tt=new D(new xe(.18,.18,2.2,12),n);tt.rotation.z=Math.PI/2,tt.position.set(0,3,6.02),tt.castShadow=!0,t.add(tt),this.scene.add(t)}createOvoo(){const t=new Yt;t.position.set(24,0,-22);const e=new xt({color:7901340,roughness:.95}),n=new xt({color:6111287,roughness:.9}),i=new xt({color:2001125,roughness:.7}),r=new xt({color:16448250,roughness:.7}),o=new Pe(.7,1);[{x:0,y:.4,z:0,s:1.8},{x:1.2,y:.35,z:.3,s:1.4},{x:-1.1,y:.35,z:-.2,s:1.5},{x:.3,y:.35,z:1.2,s:1.3},{x:-.4,y:.35,z:-1.1,s:1.4},{x:.4,y:.9,z:.2,s:1.2},{x:-.5,y:.9,z:-.1,s:1.1},{x:.1,y:.9,z:-.6,s:1},{x:-.2,y:1.3,z:.3,s:.9},{x:0,y:1.7,z:0,s:.85},{x:.2,y:2.1,z:-.1,s:.65}].forEach(m=>{const g=new D(o,e);g.position.set(m.x,m.y,m.z),g.scale.set(m.s,m.s*.7,m.s),g.rotation.set(Math.random()*2,Math.random()*2,Math.random()*2),g.castShadow=!0,g.receiveShadow=!0,t.add(g)});const l=new xe(.06,.08,4.2,6),c=new D(l,n);c.position.set(0,2.6,0),c.rotation.set(.05,0,.08),c.castShadow=!0,t.add(c);const h=new D(l,n);h.position.set(.3,2.5,-.2),h.rotation.set(-.1,.2,-.06),h.castShadow=!0,t.add(h);const u=new D(l,n);u.position.set(-.25,2.4,.25),u.rotation.set(.12,-.15,-.08),u.castShadow=!0,t.add(u);const f=new st(.08,.8,.25);for(let m=0;m<7;m++){const g=m%3!==0,_=new D(f,g?i:r),p=1.8+Math.random()*1.8,d=m/7*Math.PI*2;_.position.set(Math.cos(d)*.25,p,Math.sin(d)*.25),_.rotation.set(.2,d,.3),t.add(_)}this.scene.add(t)}createMorinyUyaa(){const t=new Yt;t.position.set(-19,0,-12);const e=new xt({color:5125166,roughness:.85}),n=new xt({color:13938487,metalness:.8,roughness:.3}),i=new D(new xe(.14,.18,3.2,8),e);i.position.y=1.6,i.castShadow=!0,t.add(i);for(let h=0;h<3;h++){const u=new D(new Xe(.19,.03,6,12),n);u.position.y=1.8+h*.45,u.rotation.x=Math.PI/2,t.add(u)}const r=new Yt;r.position.set(0,3.3,0);const o=new D(new st(.2,.3,.38),e);o.position.set(0,.1,.08),o.rotation.x=.3,r.add(o);const a=new D(new st(.16,.18,.24),e);a.position.set(0,.02,.3),r.add(a);const l=new D(new he(.04,.14,4),e);l.position.set(-.08,.3,.04),l.rotation.set(-.2,0,.2),r.add(l);const c=new D(new he(.04,.14,4),e);c.position.set(.08,.3,.04),c.rotation.set(-.2,0,-.2),r.add(c),t.add(r),this.scene.add(t)}createSteppeEnclosures(){const t=new xt({color:7162945,roughness:.9}),e=new xe(.1,.13,1.35,6),n=new st(3.6,.09,.06),i=38,r=36;for(let o=0;o<r;o++){if(o>=0&&o<=3)continue;const a=o/r*Math.PI*2,l=Math.cos(a)*i,c=Math.sin(a)*i,h=new D(e,t);h.position.set(l,.67,c),h.rotation.set((Math.random()-.5)*.1,0,(Math.random()-.5)*.1),h.castShadow=!0,this.scene.add(h);const u=(o+1)/r*Math.PI*2;if(o+1<r&&!(o+1>=0&&o+1<=3)){const f=Math.cos(u)*i,m=Math.sin(u)*i,g=(l+f)/2,_=(c+m)/2,p=new D(n,t);p.position.set(g,.88,_),p.lookAt(f,.88,m),p.castShadow=!0,this.scene.add(p);const d=new D(n,t);d.position.set(g,.46,_),d.lookAt(f,.46,m),d.castShadow=!0,this.scene.add(d)}}}createSteppeHills(){const t=new xt({color:5140535,roughness:.95}),e=new Pe(20,1),n=16;for(let u=0;u<n;u++){const f=u/n*Math.PI*2+(Math.random()-.5)*.2,m=125+Math.random()*25,g=new D(e,t),_=1.3+Math.random()*.4,p=.45+Math.random()*.25,d=1.2+Math.random()*.3;g.position.set(Math.cos(f)*m,-2,Math.sin(f)*m),g.scale.set(_,p,d),g.receiveShadow=!1,this.scene.add(g)}const i=new xt({color:4073251,roughness:.9}),r=new xt({color:3046706,roughness:.8}),o=new xt({color:9159498,roughness:.8}),a=new xe(.24,.42,3.8,6),l=new he(2.2,3,6),c=new he(1.6,2.4,6),h=new he(1.1,1.8,6);for(let u=0;u<14;u++){const f=Math.random()*Math.PI*2,m=42+Math.random()*22,g=new Yt;g.position.set(Math.cos(f)*m,0,Math.sin(f)*m);const _=new D(a,i);_.position.y=1.9,_.castShadow=!0,g.add(_);const d=Math.random()>.35?r:o,y=new D(l,d);y.position.y=4,y.castShadow=!0,g.add(y);const v=new D(c,d);v.position.y=5.4,v.castShadow=!0,g.add(v);const w=new D(h,d);w.position.y=6.6,w.castShadow=!0,g.add(w);const C=.85+Math.random()*.4;g.scale.set(C,C,C),this.scene.add(g)}}createSteppeFlora(){const t=new xt({color:7901340,roughness:.95}),e=new xt({color:8505220,roughness:.9}),n=new Pe(1,1),i=new Pe(.55,1);for(let c=0;c<22;c++){const h=Math.random()*Math.PI*2,u=14+Math.random()*32,f=Math.cos(h)*u,m=Math.sin(h)*u,g=new Yt;g.position.set(f,.35,m);const _=new D(n,t);_.rotation.set(Math.random()*2,Math.random()*2,Math.random()*2);const p=.5+Math.random()*.85;_.scale.set(p*1.4,p*.65,p*1.1),_.castShadow=!0,g.add(_),this.scene.add(g)}for(let c=0;c<35;c++){const h=Math.random()*Math.PI*2,u=6+Math.random()*35,f=new D(i,e);f.position.set(Math.cos(h)*u,.35,Math.sin(h)*u);const m=.6+Math.random()*.5;f.scale.set(m*1.2,m*.7,m*1.2),f.castShadow=!0,this.scene.add(f)}const r=new Be({color:16645886}),o=new Be({color:16635957}),a=new Be({color:11225020}),l=new Pe(.14,0);for(let c=0;c<75;c++){const h=new Yt,u=Math.random()*Math.PI*2,f=4+Math.random()*34;h.position.set(Math.cos(u)*f,.2,Math.sin(u)*f);const m=Math.random(),g=m<.45?r:m<.8?o:a,_=new D(l,g);h.add(_);const p=.7+Math.random()*.6;h.scale.set(p,p,p),this.scene.add(h)}}createGrassTufts(){const t=new xt({color:9159498,roughness:.9,side:Ze}),e=new he(.08,.65,3);for(let n=0;n<80;n++){const i=new Yt,r=Math.random()*Math.PI*2,o=3+Math.random()*36;i.position.set(Math.cos(r)*o,0,Math.sin(r)*o);for(let l=0;l<3;l++){const c=new D(e,t);c.position.set((l-1)*.08,.32,0),c.rotation.z=(l-1)*.28,c.rotation.y=l*1.2,i.add(c)}const a=.7+Math.random()*.6;i.scale.set(a,a,a),this.scene.add(i),this.grassTufts.push(i)}}createPollenMotes(){const e=new Me,n=new Float32Array(140*3);for(let r=0;r<140;r++)n[r*3]=(Math.random()-.5)*85,n[r*3+1]=.5+Math.random()*8,n[r*3+2]=(Math.random()-.5)*85;e.setAttribute("position",new qe(n,3));const i=new sl({color:16775620,size:.18,transparent:!0,opacity:.65});this.pollenMotes=new Fp(e,i),this.scene.add(this.pollenMotes)}setSeason(t,e="day"){t==="spring"?(this.groundMat.color.setHex(6856504),this.innerGroundMat.color.setHex(8172354)):t==="summer"?(this.groundMat.color.setHex(8172354),this.innerGroundMat.color.setHex(9159498)):t==="autumn"?(this.groundMat.color.setHex(9268835),this.innerGroundMat.color.setHex(7951688)):t==="winter"?(this.groundMat.color.setHex(13621468),this.innerGroundMat.color.setHex(11583173)):t==="night"&&(this.groundMat.color.setHex(1977144),this.innerGroundMat.color.setHex(2570570)),this.setTimeOfDay(e)}setTimeOfDay(t){t==="sunset"?(this.scene.background=new kt(16752762),this.scene.fog=new On(16752762,.012),this.ambientLight.color.setHex(16765312),this.dirLight.color.setHex(16747109),this.dirLight.intensity=1.05,this.barnLanternLight.intensity=2.4):t==="twilight"?(this.scene.background=new kt(1713022),this.scene.fog=new On(1713022,.015),this.ambientLight.color.setHex(3754411),this.dirLight.color.setHex(6056896),this.dirLight.intensity=.75,this.barnLanternLight.intensity=3):t==="night"?(this.scene.background=new kt(659229),this.scene.fog=new On(857641,.018),this.ambientLight.color.setHex(1976635),this.ambientLight.intensity=.6,this.dirLight.color.setHex(3718648),this.dirLight.intensity=.65,this.barnLanternLight.intensity=3.8):(this.scene.background=new kt(4367861),this.scene.fog=new On(8900331,.012),this.ambientLight.color.setHex(16775393),this.ambientLight.intensity=.85,this.dirLight.color.setHex(16775920),this.dirLight.intensity=1.3,this.barnLanternLight.intensity=1.2)}}const ps=[{id:"level-1",number:1,title:"Spring Awakening",titleMn:"Хаврын өглөө",description:"Gentle spring breeze over the fresh pasture. A few wandering steppe wolves test the perimeter. Defend the flock!",difficulty:"easy",season:"spring",timeOfDay:"day",hasBankharDog:!0,initialSheep:10,starThresholds:{twoStarSheep:8,threeStarSheep:10},waves:[{waveNumber:1,title:"WAVE 1/2: Solitary Scouts",subtitle:"Young steppe wolves approach. Strike them with your Tashuur whip!",wolves:[{delayMs:1200,type:"normal"},{delayMs:4500,type:"normal"},{delayMs:8e3,type:"normal"}]},{waveNumber:2,title:"WAVE 2/2: The Spring Pack",subtitle:"More wolves emerge from the hills. Keep the flock together!",wolves:[{delayMs:1200,type:"normal"},{delayMs:4e3,type:"normal"},{delayMs:7e3,type:"normal"},{delayMs:1e4,type:"normal"}]}]},{id:"level-2",number:2,title:"Summer Prowl",titleMn:"Зуны бэлчээр",description:"Under the high summer sun, agile Taiga Runner wolves rush from the northern ridge. Use Tashuur Crack to scatter them!",difficulty:"easy-med",season:"summer",timeOfDay:"day",hasBankharDog:!0,initialSheep:10,starThresholds:{twoStarSheep:7,threeStarSheep:10},waves:[{waveNumber:1,title:"WAVE 1/2: Swift Taiga Runners",subtitle:"Reddish Taiga wolves are faster! Right-click or E to scare them with a sonic crack.",wolves:[{delayMs:1e3,type:"timber"},{delayMs:3e3,type:"normal"},{delayMs:5500,type:"timber"},{delayMs:8e3,type:"normal"}]},{waveNumber:2,title:"WAVE 2/2: Coordinated Rush",subtitle:"Runners flanking from both sides! Whistle (Q) if sheep scatter too far.",wolves:[{delayMs:1e3,type:"timber",angleRad:0},{delayMs:2500,type:"timber",angleRad:Math.PI},{delayMs:5e3,type:"normal"},{delayMs:7500,type:"timber"},{delayMs:9500,type:"normal"},{delayMs:11500,type:"timber"}]}]},{id:"level-3",number:3,title:"Autumn Ambush",titleMn:"Намрын салхи",description:"Golden steppe grass sways in fierce gusts. Massive Iron-Fur Brute wolves have joined the hunt—they take 4 strikes to defeat!",difficulty:"medium",season:"autumn",timeOfDay:"sunset",hasBankharDog:!0,initialSheep:10,starThresholds:{twoStarSheep:6,threeStarSheep:10},waves:[{waveNumber:1,title:"WAVE 1/3: Sunset Vanguard",subtitle:"Watch the ridges! Autumn wolves move under the golden light.",wolves:[{delayMs:1e3,type:"normal"},{delayMs:3e3,type:"timber"},{delayMs:5500,type:"normal"},{delayMs:8e3,type:"timber"},{delayMs:10500,type:"normal"}]},{waveNumber:2,title:"WAVE 2/3: Enter the Iron-Fur Brute",subtitle:"A massive Brute wolf charges! Heavy armor requires multiple whip hits.",wolves:[{delayMs:1e3,type:"brute"},{delayMs:3500,type:"timber",angleRad:Math.PI/2},{delayMs:5500,type:"normal"},{delayMs:8e3,type:"timber",angleRad:-Math.PI/2},{delayMs:1e4,type:"normal"}]},{waveNumber:3,title:"WAVE 3/3: Pincer Attack",subtitle:"Brutes and Runners attacking simultaneously from opposing flanks!",wolves:[{delayMs:1e3,type:"brute",angleRad:.3},{delayMs:2e3,type:"timber",angleRad:Math.PI+.3},{delayMs:5e3,type:"brute",angleRad:-.5},{delayMs:7e3,type:"timber",angleRad:Math.PI-.5},{delayMs:9500,type:"timber"}]}]},{id:"level-4",number:4,title:"Twilight Stalkers",titleMn:"Үдшийн бүрий",description:"Misty twilight blankets the steppe. Shadow Stalker wolves creep through the fog, suddenly dashing when close to sheep!",difficulty:"hard",season:"autumn",timeOfDay:"twilight",hasBankharDog:!0,initialSheep:10,starThresholds:{twoStarSheep:5,threeStarSheep:8},waves:[{waveNumber:1,title:"WAVE 1/3: Shadows in the Mist",subtitle:"Shadow wolves stalk quietly. Listen for the rustling grass!",wolves:[{delayMs:1e3,type:"shadow"},{delayMs:3e3,type:"timber"},{delayMs:5e3,type:"shadow"},{delayMs:7500,type:"normal"},{delayMs:9500,type:"timber"},{delayMs:11500,type:"shadow"}]},{waveNumber:2,title:"WAVE 2/3: Heavy Stalking Pack",subtitle:"Brutes distract the shepherd while Stalkers hunt the perimeter sheep!",wolves:[{delayMs:1e3,type:"brute"},{delayMs:2500,type:"shadow"},{delayMs:4500,type:"timber"},{delayMs:6500,type:"brute"},{delayMs:8500,type:"shadow"},{delayMs:10500,type:"timber"}]},{waveNumber:3,title:"WAVE 3/3: Twilight Swarm",subtitle:"A full tactical pack! Use your Whistle to gather the sheep to safety!",wolves:[{delayMs:1e3,type:"shadow",angleRad:.8},{delayMs:2e3,type:"shadow",angleRad:-.8},{delayMs:4e3,type:"brute",angleRad:Math.PI},{delayMs:6e3,type:"timber"},{delayMs:8e3,type:"shadow"},{delayMs:9500,type:"timber"}]}]},{id:"level-5",number:5,title:"Winter Blizzard",titleMn:"Өвлийн шуурга",description:"A howling blizzard freezes the steppe. Starving packs swarm the pastures. Luckily, your loyal Bankhar Guardian Dog joins the fight!",difficulty:"very-hard",season:"winter",timeOfDay:"day",hasBankharDog:!0,initialSheep:12,starThresholds:{twoStarSheep:5,threeStarSheep:9},waves:[{waveNumber:1,title:"WAVE 1/3: The Hungry Horde",subtitle:"Your Bankhar dog barks to scare wolves and bites attackers!",wolves:[{delayMs:800,type:"timber"},{delayMs:2500,type:"normal"},{delayMs:4500,type:"timber"},{delayMs:6500,type:"shadow"},{delayMs:8500,type:"normal"},{delayMs:10500,type:"timber"},{delayMs:12e3,type:"shadow"}]},{waveNumber:2,title:"WAVE 2/3: Whiteout Assault",subtitle:"Brutes and Shadow Stalkers surging through the snowstorm!",wolves:[{delayMs:800,type:"brute"},{delayMs:2200,type:"shadow"},{delayMs:4e3,type:"brute"},{delayMs:6e3,type:"timber"},{delayMs:7800,type:"shadow"},{delayMs:9500,type:"timber"},{delayMs:11e3,type:"brute"},{delayMs:12500,type:"shadow"}]},{waveNumber:3,title:"WAVE 3/3: The Steppe Siege",subtitle:"Hold the pasture with your Bankhar dog! Defend the five jewels of the steppe!",wolves:[{delayMs:600,type:"timber",angleRad:.5},{delayMs:1800,type:"timber",angleRad:-.5},{delayMs:3200,type:"brute",angleRad:Math.PI},{delayMs:5e3,type:"shadow",angleRad:Math.PI/2},{delayMs:6500,type:"shadow",angleRad:-Math.PI/2},{delayMs:8e3,type:"brute"},{delayMs:9500,type:"timber"}]}]},{id:"level-6",number:6,title:"Trial of Khökh Chono",titleMn:"Хөх Чонын Домог",description:"Beneath the sacred starry night, the legendary Blue Wolf King awakes. Defeat the mythical Khökh Chono to protect the eternal steppe!",difficulty:"boss",season:"night",timeOfDay:"night",hasBankharDog:!0,isBossLevel:!0,initialSheep:12,starThresholds:{twoStarSheep:4,threeStarSheep:8},waves:[{waveNumber:1,title:"WAVE 1/2: The Royal Escort",subtitle:"Clear the royal escort before the King of Wolves descends!",wolves:[{delayMs:1e3,type:"shadow"},{delayMs:2800,type:"timber"},{delayMs:4500,type:"brute"},{delayMs:6500,type:"shadow"},{delayMs:8500,type:"timber"},{delayMs:10500,type:"brute"}]},{waveNumber:2,title:"WAVE 2/2: KHÖKH CHONO DESCENDS",subtitle:"THE ANCIENT BLUE WOLF! Strike him when vulnerable and beware his Alpha Howl!",wolves:[{delayMs:1200,type:"alpha"},{delayMs:4e3,type:"brute",angleRad:1.2},{delayMs:7e3,type:"brute",angleRad:-1.2}]}]}];class Yp{constructor(){I(this,"progressKey","shepherds_guard_progress_v2");I(this,"progress");this.progress=this.loadProgress()}loadProgress(){try{const t=localStorage.getItem(this.progressKey);if(t){const e=JSON.parse(t);if(e&&typeof e.unlockedLevel=="number")return e}}catch(t){console.warn("Failed to parse level progress:",t)}return{unlockedLevel:1,levels:{"level-1":{unlocked:!0,stars:0,highScore:0}},endlessHighScore:0}}saveProgressToStorage(){try{localStorage.setItem(this.progressKey,JSON.stringify(this.progress))}catch(t){console.warn("Failed to save level progress:",t)}}getLevel(t){return typeof t=="number"?ps.find(e=>e.number===t)||null:ps.find(e=>e.id===t)||null}getAllLevels(){return ps}isLevelUnlocked(t){return t<=this.progress.unlockedLevel}getLevelProgress(t){return this.progress.levels[t]||{unlocked:!1,stars:0,highScore:0}}calculateStars(t,e){if(e<=0)return 0;let n=1;return e>=t.starThresholds.twoStarSheep&&(n=2),e>=t.starThresholds.threeStarSheep&&(n=3),n}recordLevelVictory(t,e,n){const i=this.getLevel(t);if(!i)return{stars:0,isNewStarRecord:!1,nextLevelUnlocked:null};const r=this.calculateStars(i,e),o=this.getLevelProgress(t),a=r>o.stars,l=Math.max(o.stars,r),c=Math.max(o.highScore,n);this.progress.levels[t]={unlocked:!0,stars:l,highScore:c};let h=null;if(i.number>=this.progress.unlockedLevel&&i.number<ps.length){this.progress.unlockedLevel=i.number+1;const u=this.getLevel(i.number+1);u&&(this.progress.levels[u.id]?this.progress.levels[u.id].unlocked=!0:this.progress.levels[u.id]={unlocked:!0,stars:0,highScore:0},h=u.number)}return this.saveProgressToStorage(),{stars:r,isNewStarRecord:a,nextLevelUnlocked:h}}recordEndlessScore(t){return t>this.progress.endlessHighScore?(this.progress.endlessHighScore=t,this.saveProgressToStorage(),!0):!1}getEndlessHighScore(){return this.progress.endlessHighScore}getTotalStarsEarned(){return Object.values(this.progress.levels).reduce((t,e)=>t+(e.stars||0),0)}}class jp{constructor(t){I(this,"mesh");I(this,"isDead",!1);I(this,"scene");this.scene=t,this.mesh=new Yt,t.add(this.mesh)}get position(){return this.mesh.position}destroy(t){t.remove(this.mesh)}}class Rs extends jp{constructor(e){super(e);I(this,"health",100);I(this,"speed",5);I(this,"maxHealth",100)}takeDamage(e){this.isDead||(this.health-=e,this.health<=0&&(this.health=0,this.die()))}die(){this.isDead=!0}}var al=(s=>(s[s.IDLE=0]="IDLE",s[s.STRIKING=1]="STRIKING",s[s.CRACKING_AIR=2]="CRACKING_AIR",s))(al||{});class Kp{constructor(){I(this,"group");I(this,"actionState",0);I(this,"timer",0);I(this,"duration",.28);I(this,"handle");I(this,"lashLine");I(this,"lashGeometry");I(this,"segmentCount",14);I(this,"points",[]);I(this,"tipMesh");I(this,"idleTime",0);this.group=new Yt,this.handle=new Yt;const t=new xt({color:6111287,roughness:.7}),e=new xt({color:13938487,metalness:.85,roughness:.3}),n=new xt({color:9268835,roughness:.8}),i=new xe(.045,.04,.48,10),r=new D(i,t);r.position.y=.24,this.handle.add(r);const o=new sn(.065,8,8),a=new D(o,e);a.position.y=0,this.handle.add(a);const l=new Xe(.1,.015,6,16),c=new D(l,n);c.position.set(0,-.08,0),c.rotation.y=Math.PI/2,this.handle.add(c);const h=new D(new Xe(.046,.012,6,12),e);h.position.y=.24,h.rotation.x=Math.PI/2,this.handle.add(h);const u=new xe(.05,.05,.09,10),f=new D(u,e);f.position.y=.48,this.handle.add(f);const m=new xe(.035,.025,.26,8),g=new D(m,t);g.position.y=.61,this.handle.add(g),this.group.add(this.handle);for(let y=0;y<=this.segmentCount;y++)this.points.push(new R(0,.74-y*.12,0));this.lashGeometry=new Me().setFromPoints(this.points);const _=new il({color:4859153,linewidth:3});this.lashLine=new Np(this.lashGeometry,_),this.group.add(this.lashLine);const p=new sn(.045,6,6),d=new Be({color:16766287});this.tipMesh=new D(p,d),this.group.add(this.tipMesh),this.setIdlePose()}update(t){this.actionState===0?this.animateIdle(t):this.actionState===1?this.animateStrike(t):this.actionState===2&&this.animateAirCrack(t)}startStrike(){this.actionState=1,this.timer=0,this.duration=.28}startAirCrack(){this.actionState=2,this.timer=0,this.duration=.35}setIdlePose(){for(let t=0;t<=this.segmentCount;t++){const e=t/this.segmentCount;this.points[t].set(Math.sin(e*Math.PI)*.22,.7-e*.9+Math.cos(e*Math.PI*1.5)*.08,-Math.sin(e*Math.PI*.5)*.15)}this.updateLashGeometry(),this.handle.rotation.set(.3,0,-.2)}animateIdle(t){this.idleTime+=t*2;const e=Math.sin(this.idleTime)*.04;for(let n=2;n<=this.segmentCount;n++){const i=n/this.segmentCount;this.points[n].x+=e*i*.1}this.updateLashGeometry()}animateStrike(t){this.timer+=t;const e=Math.min(this.timer/this.duration,1);if(e<.25){const n=e/.25;this.handle.rotation.set(-1.2*n,.3*n,.5*n);for(let i=0;i<=this.segmentCount;i++){const r=i/this.segmentCount;this.points[i].set(.2*r,.7+r*.8*n,-1.2*r*n)}}else if(e<.75){const n=(e-.25)/.5;this.handle.rotation.set(1.4*n,-.2,0);const i=Math.sin(n*Math.PI)*6.2,r=Math.sin(n*Math.PI*3);for(let o=0;o<=this.segmentCount;o++){const a=o/this.segmentCount;this.points[o].set(Math.sin(a*Math.PI*2+n*4)*.3*(1-n),.7-a*.3+r*.4*(1-a),i*a)}}else{const n=(e-.75)/.25;this.handle.rotation.set(1.4*(1-n)+.3*n,0,-.2*n),this.setIdlePose()}this.updateLashGeometry(),e>=1&&(this.actionState=0,this.setIdlePose())}animateAirCrack(t){this.timer+=t;const e=Math.min(this.timer/this.duration,1);if(e<.45){const n=e/.45,i=n*Math.PI*4;this.handle.rotation.set(-.6,i,.4);for(let r=0;r<=this.segmentCount;r++){const o=r/this.segmentCount,a=i+o*Math.PI*2;this.points[r].set(Math.cos(a)*(.8*o),.9+o*1.5*n,Math.sin(a)*(.8*o))}}else if(e<.75){const n=(e-.45)/.3;this.handle.rotation.set(.2,0,0);for(let i=0;i<=this.segmentCount;i++){const r=i/this.segmentCount;this.points[i].set(Math.sin(n*Math.PI*2)*.15*(1-r),.9+r*4.5*Math.sin(n*Math.PI),0)}}else this.setIdlePose();this.updateLashGeometry(),e>=1&&(this.actionState=0,this.setIdlePose())}updateLashGeometry(){this.lashGeometry.setFromPoints(this.points),this.lashGeometry.attributes.position.needsUpdate=!0;const t=this.points[this.segmentCount];this.tipMesh.position.copy(t)}getTipWorldPosition(){return this.tipMesh.getWorldPosition(new R)}isAtStrikePeak(){if(this.actionState!==1)return!1;const t=this.timer/this.duration;return t>=.45&&t<=.65}}class $p{constructor(){I(this,"ctx",null);I(this,"masterGain",null);I(this,"isMuted",!1);I(this,"isUnlocked",!1)}init(){if(!this.ctx)try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.35,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.isUnlocked=!0}catch(t){console.warn("Web Audio API not supported:",t)}}unlock(){this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().then(()=>{this.isUnlocked=!0}).catch(t=>console.warn("AudioContext resume failed:",t))}toggleMute(){return this.isMuted=!this.isMuted,this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:.35,this.ctx.currentTime),this.isMuted}canPlay(){return!this.isMuted&&this.ctx!==null&&this.isUnlocked}playWhipCrack(){if(this.unlock(),!(!this.canPlay()||!this.ctx||!this.masterGain))try{const t=this.ctx.currentTime,e=Math.floor(this.ctx.sampleRate*.12),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let h=0;h<e;h++)i[h]=(Math.random()*2-1)*Math.exp(-h/(e*.08));const r=this.ctx.createBufferSource();r.buffer=n;const o=this.ctx.createBiquadFilter();o.type="highpass",o.frequency.setValueAtTime(1500,t),o.frequency.exponentialRampToValueAtTime(300,t+.1);const a=this.ctx.createGain();a.gain.setValueAtTime(.9,t),a.gain.exponentialRampToValueAtTime(.001,t+.12),r.connect(o),o.connect(a),a.connect(this.masterGain),r.start(t);const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type="sine",l.frequency.setValueAtTime(220,t),l.frequency.exponentialRampToValueAtTime(45,t+.18),c.gain.setValueAtTime(.7,t),c.gain.exponentialRampToValueAtTime(.001,t+.18),l.connect(c),c.connect(this.masterGain),l.start(t),l.stop(t+.2)}catch(t){console.warn("playWhipCrack error:",t)}}playWhipWhoosh(){if(this.unlock(),!(!this.canPlay()||!this.ctx||!this.masterGain))try{const t=this.ctx.currentTime,e=Math.floor(this.ctx.sampleRate*.1),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let l=0;l<e;l++)i[l]=Math.random()*2-1;const r=this.ctx.createBufferSource();r.buffer=n;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(500,t),o.frequency.exponentialRampToValueAtTime(1800,t+.09),o.Q.value=3;const a=this.ctx.createGain();a.gain.setValueAtTime(.01,t),a.gain.linearRampToValueAtTime(.3,t+.05),a.gain.exponentialRampToValueAtTime(.001,t+.1),r.connect(o),o.connect(a),a.connect(this.masterGain),r.start(t)}catch(t){console.warn("playWhipWhoosh error:",t)}}playWolfYelp(){if(this.unlock(),!(!this.canPlay()||!this.ctx||!this.masterGain))try{const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(750,t),e.frequency.exponentialRampToValueAtTime(260,t+.28);const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.frequency.value=22,r.gain.value=40,i.connect(e.frequency),i.start(t),i.stop(t+.28),n.gain.setValueAtTime(.3,t),n.gain.exponentialRampToValueAtTime(.001,t+.28),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.3)}catch(t){console.warn("playWolfYelp error:",t)}}playWolfGrowl(){if(this.unlock(),!(!this.canPlay()||!this.ctx||!this.masterGain))try{const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(110,t),e.frequency.linearRampToValueAtTime(90,t+.15),n.gain.setValueAtTime(.25,t),n.gain.exponentialRampToValueAtTime(.001,t+.18),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.2)}catch(t){console.warn("playWolfGrowl error:",t)}}playWolfHowl(){if(this.unlock(),!(!this.canPlay()||!this.ctx||!this.masterGain))try{const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="triangle",n.type="sine",n.detune.setValueAtTime(9,t);const r=2.4;e.frequency.setValueAtTime(240,t),e.frequency.exponentialRampToValueAtTime(560,t+.7),e.frequency.linearRampToValueAtTime(540,t+1.4),e.frequency.exponentialRampToValueAtTime(290,t+r),n.frequency.setValueAtTime(240,t),n.frequency.exponentialRampToValueAtTime(560,t+.7),n.frequency.linearRampToValueAtTime(540,t+1.4),n.frequency.exponentialRampToValueAtTime(290,t+r);const o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(5.5,t),a.gain.setValueAtTime(12,t),o.connect(e.frequency),o.connect(n.frequency),o.start(t+.4),o.stop(t+r),i.gain.setValueAtTime(.01,t),i.gain.linearRampToValueAtTime(.35,t+.5),i.gain.setValueAtTime(.32,t+1.3),i.gain.exponentialRampToValueAtTime(.001,t+r),e.connect(i),n.connect(i),i.connect(this.masterGain),e.start(t),n.start(t),e.stop(t+r),n.stop(t+r);const l=t+.45,c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(320,l),c.frequency.exponentialRampToValueAtTime(640,l+.8),c.frequency.exponentialRampToValueAtTime(380,l+2),h.gain.setValueAtTime(.01,l),h.gain.linearRampToValueAtTime(.18,l+.6),h.gain.exponentialRampToValueAtTime(.001,l+2),c.connect(h),h.connect(this.masterGain),c.start(l),c.stop(l+2.1)}catch(t){console.warn("playWolfHowl error:",t)}}playSheepBleat(){if(this.unlock(),!(!this.canPlay()||!this.ctx||!this.masterGain))try{const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(360,t),e.frequency.linearRampToValueAtTime(320,t+.4);const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.frequency.value=14,r.gain.value=35,i.connect(e.frequency),i.start(t),i.stop(t+.45);const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(950,t),o.Q.value=4,n.gain.setValueAtTime(.01,t),n.gain.linearRampToValueAtTime(.22,t+.05),n.gain.exponentialRampToValueAtTime(.001,t+.45),e.connect(o),o.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.45)}catch(t){console.warn("playSheepBleat error:",t)}}playWaveHorn(){if(this.unlock(),!(!this.canPlay()||!this.ctx||!this.masterGain))try{const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sawtooth",n.type="sawtooth",e.frequency.setValueAtTime(146.83,t),n.frequency.setValueAtTime(220,t);const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(650,t),i.gain.setValueAtTime(.01,t),i.gain.linearRampToValueAtTime(.18,t+.15),i.gain.exponentialRampToValueAtTime(.001,t+1.4),e.connect(r),n.connect(r),r.connect(i),i.connect(this.masterGain),e.start(t),n.start(t),e.stop(t+1.45),n.stop(t+1.45),[{f:293.66,start:.1,dur:.35},{f:440,start:.38,dur:.4},{f:587.33,start:.72,dur:.9}].forEach(a=>{const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type="sawtooth",l.frequency.setValueAtTime(a.f,t+a.start);const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(1100,t+a.start),c.gain.setValueAtTime(.01,t+a.start),c.gain.linearRampToValueAtTime(.22,t+a.start+.08),c.gain.exponentialRampToValueAtTime(.001,t+a.start+a.dur),l.connect(h),h.connect(c),c.connect(this.masterGain),l.start(t+a.start),l.stop(t+a.start+a.dur+.05)})}catch(t){console.warn("playWaveHorn error:",t)}}playHit(){if(this.unlock(),!(!this.canPlay()||!this.ctx||!this.masterGain))try{const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(180,t),e.frequency.exponentialRampToValueAtTime(40,t+.1),n.gain.setValueAtTime(.4,t),n.gain.exponentialRampToValueAtTime(.001,t+.1),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.1)}catch(t){console.warn("playHit error:",t)}}playVictory(){if(this.unlock(),!(!this.canPlay()||!this.ctx||!this.masterGain))try{const t=[{f:293.66,dur:.25},{f:369.99,dur:.25},{f:440,dur:.25},{f:493.88,dur:.35},{f:587.33,dur:.85}],e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(146.83,e),i.gain.setValueAtTime(.12,e),i.gain.exponentialRampToValueAtTime(.001,e+1.8),n.connect(i),i.connect(this.masterGain),n.start(e),n.stop(e+1.8);let r=0;t.forEach(o=>{const a=this.ctx.createOscillator(),l=this.ctx.createGain(),c=e+r;a.type="triangle",a.frequency.setValueAtTime(o.f,c),l.gain.setValueAtTime(.24,c),l.gain.exponentialRampToValueAtTime(.001,c+o.dur),a.connect(l),l.connect(this.masterGain),a.start(c),a.stop(c+o.dur+.05),r+=.16})}catch(t){console.warn("playVictory error:",t)}}playGameOver(){if(this.unlock(),!(!this.canPlay()||!this.ctx||!this.masterGain))try{const t=[330,311.13,293.66,261.63],e=this.ctx.currentTime;t.forEach((n,i)=>{const r=this.ctx.createOscillator(),o=this.ctx.createGain(),a=e+i*.2;r.type="sawtooth",r.frequency.setValueAtTime(n,a),o.gain.setValueAtTime(.2,a),o.gain.exponentialRampToValueAtTime(.001,a+.35),r.connect(o),o.connect(this.masterGain),r.start(a),r.stop(a+.4)})}catch(t){console.warn("playGameOver error:",t)}}playShepherdWhistle(){if(this.unlock(),!(!this.canPlay()||!this.ctx||!this.masterGain))try{const t=this.ctx.currentTime;[2600,3100].forEach(n=>{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(n,t),i.frequency.linearRampToValueAtTime(n+300,t+.15),i.frequency.linearRampToValueAtTime(n+100,t+.35),r.gain.setValueAtTime(.01,t),r.gain.linearRampToValueAtTime(.22,t+.05),r.gain.exponentialRampToValueAtTime(.001,t+.4),i.connect(r),r.connect(this.masterGain),i.start(t),i.stop(t+.42)})}catch(t){console.warn("playShepherdWhistle error:",t)}}playDogBark(){if(this.unlock(),!(!this.canPlay()||!this.ctx||!this.masterGain))try{const t=this.ctx.currentTime;[{time:t,startFreq:380,endFreq:130,gain:.65,dur:.22},{time:t+.18,startFreq:340,endFreq:120,gain:.55,dur:.2}].forEach(n=>{if(!this.ctx)return;const i=Math.floor(this.ctx.sampleRate*.08),r=this.ctx.createBuffer(1,i,this.ctx.sampleRate),o=r.getChannelData(0);for(let m=0;m<i;m++)o[m]=(Math.random()*2-1)*Math.exp(-m/(i*.2));const a=this.ctx.createBufferSource();a.buffer=r;const l=this.ctx.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(650,n.time),l.Q.setValueAtTime(2,n.time);const c=this.ctx.createGain();c.gain.setValueAtTime(.4,n.time),c.gain.exponentialRampToValueAtTime(.001,n.time+.08),a.connect(l),l.connect(c),c.connect(this.masterGain),a.start(n.time);const h=this.ctx.createOscillator(),u=this.ctx.createGain();h.type="sawtooth",h.frequency.setValueAtTime(n.startFreq,n.time),h.frequency.exponentialRampToValueAtTime(n.endFreq,n.time+n.dur*.85),u.gain.setValueAtTime(.01,n.time),u.gain.linearRampToValueAtTime(n.gain,n.time+.03),u.gain.exponentialRampToValueAtTime(.001,n.time+n.dur);const f=this.ctx.createBiquadFilter();f.type="lowpass",f.frequency.setValueAtTime(1100,n.time),f.frequency.exponentialRampToValueAtTime(450,n.time+n.dur),h.connect(f),f.connect(u),u.connect(this.masterGain),h.start(n.time),h.stop(n.time+n.dur+.02)})}catch(t){console.warn("playDogBark error:",t)}}playStarChime(t=0){if(this.unlock(),!(!this.canPlay()||!this.ctx||!this.masterGain))try{const e=this.ctx.currentTime,n=[1318.51,1567.98,2093],i=n[Math.min(t,n.length-1)],r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(i,e),o.gain.setValueAtTime(.3,e),o.gain.exponentialRampToValueAtTime(.001,e+.6),r.connect(o),o.connect(this.masterGain),r.start(e),r.stop(e+.65)}catch(e){console.warn("playStarChime error:",e)}}playBossRoar(){if(this.unlock(),!(!this.canPlay()||!this.ctx||!this.masterGain))try{const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(140,t),e.frequency.linearRampToValueAtTime(260,t+.4),e.frequency.exponentialRampToValueAtTime(80,t+1.2),n.gain.setValueAtTime(.05,t),n.gain.linearRampToValueAtTime(.45,t+.2),n.gain.exponentialRampToValueAtTime(.001,t+1.3);const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(600,t),e.connect(i),i.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+1.35)}catch(t){console.warn("playBossRoar error:",t)}}}const jt=new $p;class Zp extends Rs{constructor(e,n,i){super(e);I(this,"inputManager");I(this,"whip");I(this,"particleSystem");I(this,"armL");I(this,"armR");I(this,"legL");I(this,"legR");I(this,"torsoGroup");I(this,"headGroup");I(this,"hatStreamerL",null);I(this,"hatStreamerR",null);I(this,"walkTime",0);I(this,"strikeCooldown",0);I(this,"STRIKE_COOLDOWN_TIME",.45);I(this,"crackAirCooldown",0);I(this,"CRACK_AIR_COOLDOWN_TIME",3.5);I(this,"onStrikeTrigger");I(this,"onCrackAirTrigger");this.inputManager=n,this.particleSystem=i,this.speed=9.5;const r=new xt({color:14723454,roughness:.6}),o=new xt({color:1402304,roughness:.75}),a=new xt({color:870305,roughness:.7}),l=new xt({color:16757504,metalness:.3,roughness:.4}),c=new xt({color:16088855,roughness:.6}),h=new xt({color:14737632,metalness:.85,roughness:.2}),u=new xt({color:2503224,roughness:.8}),f=new xt({color:4073251,roughness:.6}),m=new xt({color:5125166,roughness:.85}),g=new xt({color:1668818,roughness:.7}),_=new xt({color:13840175,roughness:.5}),p=new xt({color:2171169,roughness:.9});this.torsoGroup=new Yt,this.torsoGroup.position.y=1.55,this.mesh.add(this.torsoGroup);const d=new st(.88,1.05,.62),y=new D(d,o);y.castShadow=!0,y.receiveShadow=!0,this.torsoGroup.add(y);const v=new xe(.24,.25,.18,12),w=new D(v,a);w.position.set(0,.58,0),w.castShadow=!0,this.torsoGroup.add(w);const C=new D(new Xe(.245,.02,6,16),l);C.position.set(0,.66,0),C.rotation.x=Math.PI/2,this.torsoGroup.add(C);const A=new st(.48,.6,.08),b=new D(A,a);b.position.set(.18,.22,.32),b.rotation.z=-.15,this.torsoGroup.add(b);const O=new D(new st(.06,.68,.09),l);O.position.set(.42,.2,.33),O.rotation.z=-.05,this.torsoGroup.add(O);const M=new D(new st(.44,.06,.09),l);M.position.set(.2,.48,.33),this.torsoGroup.add(M);const E=new sn(.04,8,8),G=new D(E,h);G.position.set(.38,.46,.38),this.torsoGroup.add(G);const k=new st(.92,.22,.66),J=new D(k,c);J.position.y=-.32,this.torsoGroup.add(J);const L=new D(new st(.22,.16,.06),h);L.position.set(0,-.32,.34),this.torsoGroup.add(L);const F=new st(.14,.18,.06),V=new D(F,h);V.position.set(-.35,-.42,.32),this.torsoGroup.add(V);const K=new st(.12,.4,.04),q=new D(K,c);q.position.set(-.25,-.48,.33),q.rotation.z=.08,this.torsoGroup.add(q);const Y=new st(.86,.35,.6),j=new D(Y,o);j.position.y=-.58,j.castShadow=!0,this.torsoGroup.add(j);const tt=new D(new st(.88,.05,.62),l);tt.position.y=-.74,this.torsoGroup.add(tt),this.headGroup=new Yt,this.headGroup.position.set(0,.82,0),this.torsoGroup.add(this.headGroup);const Q=new xe(.16,.18,.2,8),z=new D(Q,r);z.position.y=-.12,this.headGroup.add(z);const $=new st(.54,.54,.5),rt=new D($,r);rt.castShadow=!0,this.headGroup.add(rt);const mt=new D(new st(.56,.4,.2),p);mt.position.set(0,.02,-.22),this.headGroup.add(mt);const dt=new D(new st(.18,.08,.08),p);dt.position.set(-.1,-.12,.27),dt.rotation.z=-.2,this.headGroup.add(dt);const St=new D(new st(.18,.08,.08),p);St.position.set(.1,-.12,.27),St.rotation.z=.2,this.headGroup.add(St);const wt=new st(.08,.05,.02),Mt=new Be({color:1710618}),Ut=new D(wt,Mt);Ut.position.set(-.14,.04,.26),this.headGroup.add(Ut);const N=new D(wt,Mt);N.position.set(.14,.04,.26),this.headGroup.add(N);const Vt=new st(.13,.04,.03),pt=new D(Vt,p);pt.position.set(-.14,.1,.265),this.headGroup.add(pt);const yt=new D(Vt,p);yt.position.set(.14,.1,.265),this.headGroup.add(yt);const lt=new Yt;lt.position.set(0,.28,0);const Zt=new D(new xe(.72,.68,.2,16),m);Zt.position.y=.08,Zt.castShadow=!0,lt.add(Zt);const bt=new D(new st(.42,.16,.06),m);bt.position.set(0,.14,.35),lt.add(bt);const T=new he(.55,.65,16),x=new D(T,g);x.position.y=.42,x.castShadow=!0,lt.add(x);const B=new D(new sn(.1,8,8),_);B.position.y=.78,lt.add(B);const nt=new st(.06,.45,.02);this.hatStreamerL=new D(nt,_),this.hatStreamerL.position.set(-.06,.5,-.32),this.hatStreamerL.rotation.x=-.25,lt.add(this.hatStreamerL),this.hatStreamerR=new D(nt,_),this.hatStreamerR.position.set(.06,.5,-.32),this.hatStreamerR.rotation.x=-.25,lt.add(this.hatStreamerR),this.headGroup.add(lt),this.armL=new Yt,this.armL.position.set(-.58,.3,0);const Z=new D(new st(.26,.45,.26),o);Z.position.y=-.22,Z.castShadow=!0,this.armL.add(Z);const it=new D(new st(.29,.12,.29),l);it.position.y=-.42,this.armL.add(it);const vt=new D(new st(.2,.38,.2),r);vt.position.y=-.62,vt.castShadow=!0,this.armL.add(vt),this.torsoGroup.add(this.armL),this.armR=new Yt,this.armR.position.set(.58,.3,0);const ct=new D(new st(.26,.45,.26),o);ct.position.y=-.22,ct.castShadow=!0,this.armR.add(ct);const _t=new D(new st(.29,.12,.29),l);_t.position.y=-.42,this.armR.add(_t);const At=new D(new st(.2,.38,.2),r);At.position.y=-.62,At.castShadow=!0,this.armR.add(At),this.whip=new Kp,this.whip.group.position.set(0,-.78,.15),this.armR.add(this.whip.group),this.torsoGroup.add(this.armR);const Nt=new Yt;Nt.position.y=-.72,this.torsoGroup.add(Nt),this.legL=new Yt,this.legL.position.set(-.25,-.05,0);const et=new D(new st(.26,.4,.26),u);et.position.y=-.18,et.castShadow=!0,this.legL.add(et);const $t=new D(new st(.28,.36,.28),f);$t.position.y=-.46,$t.castShadow=!0,this.legL.add($t);const Bt=new D(new st(.26,.2,.38),f);Bt.position.set(0,-.66,.05),Bt.castShadow=!0,this.legL.add(Bt);const Lt=new D(new he(.09,.18,6),f);Lt.position.set(0,-.6,.26),Lt.rotation.x=Math.PI/3,this.legL.add(Lt),Nt.add(this.legL),this.legR=new Yt,this.legR.position.set(.25,-.05,0);const Et=new D(new st(.26,.4,.26),u);Et.position.y=-.18,Et.castShadow=!0,this.legR.add(Et);const gt=new D(new st(.28,.36,.28),f);gt.position.y=-.46,gt.castShadow=!0,this.legR.add(gt);const Ft=new D(new st(.26,.2,.38),f);Ft.position.set(0,-.66,.05),Ft.castShadow=!0,this.legR.add(Ft);const Kt=new D(new he(.09,.18,6),f);Kt.position.set(0,-.6,.26),Kt.rotation.x=Math.PI/3,this.legR.add(Kt),Nt.add(this.legR)}update(e){if(this.isDead)return;const n=this.inputManager.moveVector.clone();if(n.lengthSq()>0){this.mesh.position.add(n.multiplyScalar(this.speed*e));const r=45;this.mesh.position.x=$e.clamp(this.mesh.position.x,-r,r),this.mesh.position.z=$e.clamp(this.mesh.position.z,-r,r);let a=Math.atan2(n.x,n.z)-this.mesh.rotation.y;for(;a<-Math.PI;)a+=Math.PI*2;for(;a>Math.PI;)a-=Math.PI*2;this.mesh.rotation.y+=a*12*e,this.walkTime+=e*12;const l=Math.sin(this.walkTime)*.52;if(this.legL.rotation.x=l,this.legR.rotation.x=-l,this.armL.rotation.x=-l*.75,this.torsoGroup.position.y=1.55+Math.abs(Math.sin(this.walkTime))*.1,this.torsoGroup.rotation.z=Math.sin(this.walkTime*.5)*.04,this.headGroup.rotation.y=-Math.sin(this.walkTime*.5)*.04,this.hatStreamerL&&this.hatStreamerR){const c=Math.sin(this.walkTime*1.5)*.18;this.hatStreamerL.rotation.x=-.25-Math.abs(c),this.hatStreamerL.rotation.z=c*.5,this.hatStreamerR.rotation.x=-.25-Math.abs(c),this.hatStreamerR.rotation.z=-c*.5}Math.random()<.16&&this.particleSystem.spawnDust(this.mesh.position)}else this.walkTime+=e*2,this.legL.rotation.x=$e.lerp(this.legL.rotation.x,0,10*e),this.legR.rotation.x=$e.lerp(this.legR.rotation.x,0,10*e),this.armL.rotation.x=$e.lerp(this.armL.rotation.x,0,10*e),this.torsoGroup.position.y=1.55+Math.sin(this.walkTime)*.02,this.torsoGroup.rotation.z=$e.lerp(this.torsoGroup.rotation.z,0,10*e),this.headGroup.rotation.y=$e.lerp(this.headGroup.rotation.y,0,10*e);this.strikeCooldown>0&&(this.strikeCooldown-=e),this.crackAirCooldown>0&&(this.crackAirCooldown-=e),this.inputManager.consumeStrike()&&this.strikeCooldown<=0&&this.executeStrike(),this.inputManager.consumeCrackAir()&&this.crackAirCooldown<=0&&this.executeAirCrack(),this.whip.update(e)}executeStrike(){this.strikeCooldown=this.STRIKE_COOLDOWN_TIME,this.whip.startStrike(),jt.playWhipWhoosh(),setTimeout(()=>{jt.playWhipCrack();const e=this.whip.getTipWorldPosition();this.particleSystem.spawnShockwave(e,2.8),this.onStrikeTrigger&&this.onStrikeTrigger()},120)}executeAirCrack(){this.crackAirCooldown=this.CRACK_AIR_COOLDOWN_TIME,this.whip.startAirCrack(),setTimeout(()=>{jt.playWhipCrack();const e=this.mesh.position.clone();this.particleSystem.spawnShockwave(e,16.5),this.particleSystem.spawnFloatingBadge(e,"CRACK!","#FFD700",2),this.onCrackAirTrigger&&this.onCrackAirTrigger()},180)}getForwardVector(){return new R(0,0,1).applyAxisAngle(new R(0,1,0),this.mesh.rotation.y)}getWhipTipPosition(){return this.whip.getTipWorldPosition()}isWhipStriking(){return this.whip.actionState===al.STRIKING}}var ke=(s=>(s[s.NORMAL=0]="NORMAL",s[s.TIMBER=1]="TIMBER",s[s.BRUTE=2]="BRUTE",s[s.SHADOW=3]="SHADOW",s[s.ALPHA=4]="ALPHA",s))(ke||{});class xo extends Rs{constructor(e,n,i,r,o=0){super(e);I(this,"state",0);I(this,"wolfType");I(this,"maxHealth",100);I(this,"sheepList");I(this,"particleSystem");I(this,"onBossHowl");I(this,"onBossSummon");I(this,"bossHowlThresholds",[330,220,110]);I(this,"eyesMaterial");I(this,"bodyMaterial");I(this,"bellyMaterial");I(this,"spawnTimer",0);I(this,"attackTimer",0);I(this,"scaredTimer",0);I(this,"deathTimer",0);I(this,"invulnerableTimer",0);I(this,"fleeDirection",new R);I(this,"scoreGiven",!1);I(this,"isFullyDead",!1);I(this,"bodyGroup");I(this,"headGroup");I(this,"jaw");I(this,"tailGroup");I(this,"legs",[]);I(this,"animTime",0);this.sheepList=i,this.particleSystem=r,this.wolfType=o,this.mesh.position.copy(n);let a=9272168,l=14142664,c=6114881,h=16766464;this.wolfType===1?(a=8276533,l=12364452,c=4073251,h=16748800,this.speed=6.2,this.health=70,this.maxHealth=70):this.wolfType===2?(a=3880756,l=5590859,c=2038552,h=16727296,this.speed=3.5,this.health=200,this.maxHealth=200):this.wolfType===3?(a=1974824,l=2765114,c=921878,h=7798531,this.speed=4.6,this.health=85,this.maxHealth=85):this.wolfType===4?(a=1715788,l=2901613,c=923946,h=58879,this.speed=4.8,this.health=450,this.maxHealth=450):(this.speed=4.3,this.health=100,this.maxHealth=100),this.bodyMaterial=new xt({color:a,roughness:.85}),this.bellyMaterial=new xt({color:l,roughness:.85});const u=new xt({color:c,roughness:.9}),f=new xt({color:1118481,roughness:.5}),m=new xt({color:16777200,roughness:.3}),g=new xt({color:7162945,roughness:.8}),_=new xt({color:855309,roughness:.9});this.bodyGroup=new Yt,this.bodyGroup.position.y=.65,this.mesh.add(this.bodyGroup);const p=new st(.65,.7,.85),d=new D(p,this.bodyMaterial);d.position.set(0,.05,.25),d.castShadow=!0,d.receiveShadow=!0,this.bodyGroup.add(d);const y=new st(.48,.55,.65),v=new D(y,this.bellyMaterial);v.position.set(0,-.1,.28),this.bodyGroup.add(v);const w=new st(.52,.55,.65),C=new D(w,this.bodyMaterial);C.position.set(0,.02,-.42),C.castShadow=!0,this.bodyGroup.add(C);const A=new he(.24,.55,4);[{x:0,y:.46,z:.45,rx:-.4,ry:0,rz:0},{x:-.22,y:.38,z:.3,rx:-.3,ry:0,rz:.4},{x:.22,y:.38,z:.3,rx:-.3,ry:0,rz:-.4},{x:0,y:.42,z:.1,rx:-.5,ry:0,rz:0}].forEach(bt=>{const T=new D(A,u);T.position.set(bt.x,bt.y,bt.z),T.rotation.set(bt.rx,bt.ry,bt.rz),T.castShadow=!0,this.bodyGroup.add(T)}),this.headGroup=new Yt,this.headGroup.position.set(0,.38,.72),this.bodyGroup.add(this.headGroup);const O=new st(.52,.48,.52),M=new D(O,this.bodyMaterial);M.castShadow=!0,this.headGroup.add(M);const E=new he(.16,.35,4),G=new D(E,this.bodyMaterial);G.position.set(-.3,-.05,0),G.rotation.set(0,0,1.2),this.headGroup.add(G);const k=new D(E,this.bodyMaterial);k.position.set(.3,-.05,0),k.rotation.set(0,0,-1.2),this.headGroup.add(k);const J=new st(.3,.24,.48),L=new D(J,this.bodyMaterial);L.position.set(0,-.04,.42),L.castShadow=!0,this.headGroup.add(L);const F=new st(.16,.14,.12),V=new D(F,f);V.position.set(0,.08,.26),L.add(V);const K=new st(.26,.12,.44);this.jaw=new D(K,this.bellyMaterial),this.jaw.position.set(0,-.2,.38),this.jaw.rotation.x=.12,this.headGroup.add(this.jaw);const q=new he(.045,.14,4),Y=new D(q,m);Y.position.set(-.11,-.14,.35),Y.rotation.x=Math.PI,L.add(Y);const j=new D(q,m);j.position.set(.11,-.14,.35),j.rotation.x=Math.PI,L.add(j);const tt=new he(.12,.34,4),Q=new D(tt,this.bodyMaterial);Q.position.set(-.18,.36,-.06),Q.rotation.set(-.25,0,.25);const z=new D(new he(.06,.22,4),g);z.position.set(0,0,.04),Q.add(z),this.headGroup.add(Q);const $=new D(tt,this.bodyMaterial);$.position.set(.18,.36,-.06),$.rotation.set(-.25,0,-.25);const rt=new D(new he(.06,.22,4),g);rt.position.set(0,0,.04),$.add(rt),this.headGroup.add($);const mt=new st(.11,.07,.04);this.eyesMaterial=new xt({color:h,emissive:h,emissiveIntensity:.5,roughness:.3});const dt=new D(mt,this.eyesMaterial);dt.position.set(-.16,.1,.26),dt.rotation.y=-.2,this.headGroup.add(dt);const St=new D(mt,this.eyesMaterial);St.position.set(.16,.1,.26),St.rotation.y=.2,this.headGroup.add(St);const wt=new st(.03,.06,.02),Mt=new Be({color:0}),Ut=new D(wt,Mt);Ut.position.z=.025,dt.add(Ut);const N=new D(wt,Mt);N.position.z=.025,St.add(N),this.tailGroup=new Yt,this.tailGroup.position.set(0,.18,-.72);const Vt=new st(.18,.18,.45),pt=new D(Vt,this.bodyMaterial);pt.position.z=-.2,pt.rotation.x=-.6,this.tailGroup.add(pt);const yt=new he(.16,.5,5),lt=new D(yt,u);lt.position.set(0,-.15,-.5),lt.rotation.x=-1.2,this.tailGroup.add(lt),this.bodyGroup.add(this.tailGroup),[{x:-.24,z:.38,isFront:!0},{x:.24,z:.38,isFront:!0},{x:-.24,z:-.38,isFront:!1},{x:.24,z:-.38,isFront:!1}].forEach(bt=>{const T=new Yt;T.position.set(bt.x,-.1,bt.z);const x=bt.isFront?.38:.45,B=new D(new st(.22,x,.26),this.bodyMaterial);B.position.y=-x/2,B.castShadow=!0,T.add(B);const nt=new D(new st(.15,.35,.15),this.bodyMaterial);nt.position.set(0,-x-.12,bt.isFront?0:-.05),nt.castShadow=!0,T.add(nt);const Z=new D(new st(.18,.1,.24),this.bellyMaterial);Z.position.set(0,-x-.32,.04),Z.castShadow=!0;for(let it=-1;it<=1;it++){const vt=new D(new he(.02,.08,4),_);vt.position.set(it*.05,-.02,.12),vt.rotation.x=Math.PI/2,Z.add(vt)}T.add(Z),this.bodyGroup.add(T),this.legs.push(T)}),this.mesh.scale.set(.01,.01,.01)}update(e){if(this.isDead){this.handleDeath(e);return}switch(this.invulnerableTimer>0&&(this.invulnerableTimer-=e),this.state){case 0:this.spawnTimer+=e;const n=this.wolfType===4?1.65:this.wolfType===2?1.25:this.wolfType===1?.92:this.wolfType===3?.96:1.05,i=Math.min(this.spawnTimer*2.2,1)*n;this.mesh.scale.set(i,i,i),this.spawnTimer>=.5&&(this.state=1);break;case 1:const r=this.findNearestSheep();if(r){const a=new R().subVectors(r.position,this.mesh.position);a.y=0;const l=a.length();if(l<2.2)this.state=2,this.attackTimer=0;else{a.normalize();let c=this.speed;this.wolfType===3&&l<15&&(c=6.8,Math.random()<.15&&this.particleSystem.spawnDust(this.mesh.position)),this.mesh.position.addScaledVector(a,c*e);const h=Math.atan2(a.x,a.z);this.mesh.rotation.y=h,this.animateRunning(e,c>5.5?1.5:1)}}break;case 2:const o=this.findNearestSheep();if(!o||o.isDead||o.position.distanceTo(this.mesh.position)>2.8)this.state=1;else{this.attackTimer+=e;const a=Math.sin(this.attackTimer*7);this.headGroup.position.z=.72+Math.max(0,a*.35),this.jaw.rotation.x=.12+Math.abs(Math.sin(this.attackTimer*10))*.35,this.attackTimer>=.75&&(this.attackTimer=0,o.takeDamage(12),jt.playWolfGrowl(),this.particleSystem.spawnDust(this.mesh.position))}break;case 3:if(this.scaredTimer-=e,this.scaredTimer<=0)this.clearFear();else{const a=this.speed*1.55;this.mesh.position.addScaledVector(this.fleeDirection,a*e);const l=48;this.mesh.position.x=$e.clamp(this.mesh.position.x,-l,l),this.mesh.position.z=$e.clamp(this.mesh.position.z,-l,l);const c=Math.atan2(this.fleeDirection.x,this.fleeDirection.z);this.mesh.rotation.y=c,this.animateRunning(e,1.8),Math.random()<.25&&this.particleSystem.spawnDust(this.mesh.position)}break}}animateRunning(e,n){this.animTime+=e*14*n;const i=Math.sin(this.animTime)*.6;this.legs[0].rotation.x=i,this.legs[1].rotation.x=-i,this.legs[2].rotation.x=-i,this.legs[3].rotation.x=i,this.bodyGroup.position.y=.65+Math.abs(Math.sin(this.animTime))*.08,this.tailGroup.rotation.y=Math.cos(this.animTime)*.35,this.tailGroup.rotation.z=Math.sin(this.animTime)*.15}findNearestSheep(){let e=null,n=1/0;for(const i of this.sheepList){if(i.isDead)continue;const r=this.mesh.position.distanceToSquared(i.position);r<n&&(n=r,e=i)}return e}getOriginalEyeColor(){return this.wolfType===4?58879:this.wolfType===2?16727296:this.wolfType===3?7798531:this.wolfType===1?16748800:16766464}getOriginalCoatColor(){return this.wolfType===4?1715788:this.wolfType===2?3880756:this.wolfType===3?1974824:this.wolfType===1?8276533:9272168}clearFear(){if(this.isDead)return;this.state=1,this.scaredTimer=0;const e=this.getOriginalEyeColor();this.eyesMaterial.color.setHex(e),this.eyesMaterial.emissive.setHex(e)}scare(e,n=4.2){this.isDead||(this.wolfType===2&&(n=Math.min(n,2)),this.wolfType===4&&(n=Math.min(n,1.2)),this.state=3,this.scaredTimer=n,this.fleeDirection.subVectors(this.mesh.position,e),this.fleeDirection.y=0,this.fleeDirection.lengthSq()<.1&&this.fleeDirection.set(Math.random()-.5,0,Math.random()-.5),this.fleeDirection.normalize(),this.eyesMaterial.color.setHex(16777215),this.eyesMaterial.emissive.setHex(16777215),jt.playWolfYelp(),this.particleSystem.spawnFloatingBadge(this.mesh.position,"SCARED!","#FF5252",1.5))}takeWhipDamage(e,n){if(this.invulnerableTimer>0||this.isDead)return;super.takeDamage(e),this.invulnerableTimer=.35,jt.playHit(),jt.playWolfYelp();const i=this.wolfType===2?1.2:this.wolfType===4?.7:2.4;if(this.mesh.position.addScaledVector(n,i),this.bodyMaterial.color.setHex(16777215),setTimeout(()=>{this.bodyMaterial&&!this.isDead&&this.bodyMaterial.color.setHex(this.getOriginalCoatColor())},120),this.wolfType===4&&!this.isDead)for(let r=0;r<this.bossHowlThresholds.length;r++){const o=this.bossHowlThresholds[r];if(this.health<=o){this.bossHowlThresholds.splice(r,1),this.triggerBossHowl();break}}this.isDead?this.die():this.scare(this.mesh.position.clone().sub(n),2.5)}triggerBossHowl(){jt.playWolfHowl(),this.particleSystem.spawnFloatingBadge(this.mesh.position.clone().add(new R(0,2,0)),"⚡ ALPHA HOWL! ⚡","#00E5FF",2.5),this.onBossHowl&&this.onBossHowl(),this.onBossSummon&&this.onBossSummon(this.bossHowlThresholds.length)}die(){super.die(),this.state=4,this.eyesMaterial.color.setHex(2236962),this.eyesMaterial.emissive.setHex(0),jt.playWolfYelp()}handleDeath(e){this.deathTimer+=e,this.mesh.rotation.z<Math.PI/2&&(this.mesh.rotation.z+=6*e),this.deathTimer>1.2&&(this.mesh.position.y-=e*.8,this.mesh.scale.multiplyScalar(Math.max(0,1-e*2)),this.deathTimer>2&&!this.isFullyDead&&(this.isFullyDead=!0,this.scene.remove(this.mesh)))}}class Mo extends Rs{constructor(e,n,i){super(e);I(this,"particleSystem");I(this,"navTimer",0);I(this,"navTarget",new R);I(this,"isPanicking",!1);I(this,"panicTimer",0);I(this,"bleatCooldown",0);I(this,"rallyTimer",0);I(this,"rallyTarget",new R);I(this,"bodyGroup");I(this,"headGroup");I(this,"earL");I(this,"earR");I(this,"fatTailGroup");I(this,"tail");I(this,"legs",[]);I(this,"animTime",0);I(this,"isFullyDead",!1);I(this,"deathTimer",0);this.particleSystem=i,this.mesh.position.copy(n),this.speed=2.5,this.health=35;const r=[16448246,16183266,15590870,14208198],o=r[Math.floor(Math.random()*r.length)],a=[2171169,4073251,5125166,6111287],l=a[Math.floor(Math.random()*a.length)],c=16027569,h=1710618,u=14142389,f=Math.random()<.35,m=new xt({color:o,roughness:.92,metalness:.03}),g=new xt({color:l,roughness:.7}),_=new xt({color:c,roughness:.6}),p=new xt({color:h,roughness:.8}),d=new xt({color:u,roughness:.72});this.bodyGroup=new Yt,this.bodyGroup.position.y=.72,this.mesh.add(this.bodyGroup);const y=new st(.74,.6,.95),v=new D(y,m);v.castShadow=!0,v.receiveShadow=!0,this.bodyGroup.add(v);const w=new Pe(.22,1);[{x:-.34,y:.12,z:.28},{x:.34,y:.12,z:.28},{x:-.34,y:.1,z:-.2},{x:.34,y:.1,z:-.2},{x:0,y:.34,z:.14},{x:0,y:.34,z:-.18},{x:-.26,y:.26,z:-.02},{x:.26,y:.26,z:-.02}].forEach(N=>{const Vt=new D(w,m);Vt.position.set(N.x,N.y,N.z),Vt.rotation.set(Math.random(),Math.random(),Math.random()),Vt.castShadow=!0,this.bodyGroup.add(Vt)}),this.fatTailGroup=new Yt,this.fatTailGroup.position.set(0,.18,-.58),this.fatTailGroup.rotation.x=-.15;const A=new Pe(.28,1),b=new D(A,m);b.scale.set(1.3,.95,1.15),b.castShadow=!0,this.fatTailGroup.add(b);const O=new Pe(.24,1),M=new D(O,m);M.position.set(-.2,.02,-.06),M.scale.set(1.05,.95,1.15),M.castShadow=!0,this.fatTailGroup.add(M);const E=new D(O,m);E.position.set(.2,.02,-.06),E.scale.set(1.05,.95,1.15),E.castShadow=!0,this.fatTailGroup.add(E);const G=new D(new Pe(.2,1),m);G.position.set(0,-.12,-.08),G.scale.set(1.2,.75,1),this.fatTailGroup.add(G);const k=new Pe(.12,1);this.tail=new D(k,m),this.tail.position.set(0,-.04,-.28),this.tail.castShadow=!0,this.fatTailGroup.add(this.tail),this.bodyGroup.add(this.fatTailGroup),this.headGroup=new Yt,this.headGroup.position.set(0,.32,.68),this.bodyGroup.add(this.headGroup);const J=new st(.38,.36,.44),L=new D(J,g);L.position.set(0,-.04,.14),L.castShadow=!0,this.headGroup.add(L);const F=new st(.11,.07,.04),V=new xt({color:1118481}),K=new D(F,V);K.position.set(0,.07,.37),this.headGroup.add(K);const q=new st(.07,.07,.03),Y=new Be({color:328965}),j=new st(.022,.022,.01),tt=new Be({color:16777215}),Q=new D(q,Y);Q.position.set(-.2,.05,.22);const z=new D(j,tt);z.position.set(-.018,.018,.018),Q.add(z),this.headGroup.add(Q);const $=new D(q,Y);$.position.set(.2,.05,.22);const rt=new D(j,tt);rt.position.set(.018,.018,.018),$.add(rt),this.headGroup.add($);const mt=new Pe(.26,1),dt=new D(mt,m);if(dt.position.set(0,.2,.04),dt.castShadow=!0,this.headGroup.add(dt),f){const pt=new Xe(.22,.05,8,16,Math.PI*1.35),yt=new D(pt,d);yt.position.set(-.24,.22,.04),yt.rotation.set(.4,-.6,-1.2),yt.castShadow=!0,this.headGroup.add(yt);const lt=new D(pt,d);lt.position.set(.24,.22,.04),lt.rotation.set(.4,.6,1.2),lt.castShadow=!0,this.headGroup.add(lt)}const St=new st(.08,.22,.07);this.earL=new D(St,g),this.earL.position.set(-.24,.1,0),this.earL.rotation.z=.65;const wt=new D(new st(.035,.15,.02),_);wt.position.set(0,-.02,.035),this.earL.add(wt),this.headGroup.add(this.earL),this.earR=new D(St,g),this.earR.position.set(.24,.1,0),this.earR.rotation.z=-.65;const Mt=new D(new st(.035,.15,.02),_);Mt.position.set(0,-.02,.035),this.earR.add(Mt),this.headGroup.add(this.earR),[{x:-.26,z:.34},{x:.26,z:.34},{x:-.26,z:-.34},{x:.26,z:-.34}].forEach(N=>{const Vt=new Yt;Vt.position.set(N.x,-.22,N.z);const pt=new D(new Pe(.12,0),m);pt.position.y=-.06,Vt.add(pt);const yt=new D(new st(.11,.4,.11),g);yt.position.y=-.24,yt.castShadow=!0,Vt.add(yt);const lt=new D(new st(.12,.09,.14),p);lt.position.set(0,-.44,.02),Vt.add(lt),this.bodyGroup.add(Vt),this.legs.push(Vt)}),this.pickPastureTarget()}update(e,n,i){if(this.isDead){this.handleDeath(e);return}this.bleatCooldown>0&&(this.bleatCooldown-=e);let r=null,o=1/0;const a=i&&this.mesh.position.distanceTo(i)<7?4.5:7;if(n)for(const c of n){if(c.isDead)continue;const h=this.mesh.position.distanceToSquared(c.position);h<a*a&&h<o&&(o=h,r=c.position)}if(r){this.isPanicking=!0,this.panicTimer=2.2;const c=new R().subVectors(this.mesh.position,r);c.y=0,c.normalize();const h=this.speed*2.4;this.mesh.position.addScaledVector(c,h*e);const u=Math.atan2(c.x,c.z);this.mesh.rotation.y=u,this.bleatCooldown<=0&&(jt.playSheepBleat(),this.bleatCooldown=2.8+Math.random()*2,this.particleSystem.spawnFloatingBadge(this.mesh.position,"Baa!","#FFFFFF",1.2)),this.animateWalking(e,2.6),this.earL.rotation.z=.8+Math.sin(this.animTime*2)*.3,this.earR.rotation.z=-.8-Math.sin(this.animTime*2)*.3,this.fatTailGroup&&(this.fatTailGroup.rotation.x=-.15+Math.sin(this.animTime*4)*.3,this.fatTailGroup.rotation.y=Math.cos(this.animTime*3)*.25),Math.random()<.2&&this.particleSystem.spawnDust(this.mesh.position)}else if(this.rallyTimer>0){this.rallyTimer-=e;const c=new R().subVectors(this.rallyTarget,this.mesh.position);if(c.y=0,c.length()>1.2){c.normalize();const u=this.speed*2.1;this.mesh.position.addScaledVector(c,u*e);const f=Math.atan2(c.x,c.z);this.mesh.rotation.y=f,this.animateWalking(e,2.2),Math.random()<.1&&this.particleSystem.spawnDust(this.mesh.position)}else this.animateGrazing(e)}else if(this.isPanicking)this.panicTimer-=e,this.panicTimer<=0&&(this.isPanicking=!1,this.pickPastureTarget());else{this.navTimer-=e,this.navTimer<=0&&this.pickPastureTarget();const c=new R().subVectors(this.navTarget,this.mesh.position);if(c.y=0,c.length()>.4){c.normalize(),this.mesh.position.addScaledVector(c,this.speed*e);const u=Math.atan2(c.x,c.z);this.mesh.rotation.y=u,this.animateWalking(e,1)}else this.animateGrazing(e)}const l=36;this.mesh.position.x=$e.clamp(this.mesh.position.x,-l,l),this.mesh.position.z=$e.clamp(this.mesh.position.z,-l,l)}rallyTowards(e,n=4.5){if(this.isDead)return;this.rallyTimer=n;const i=new R((Math.random()-.5)*6,0,(Math.random()-.5)*6);this.rallyTarget.copy(e).add(i),this.isPanicking=!1}pickPastureTarget(){this.navTimer=3.5+Math.random()*4;const e=Math.random()*Math.PI*2,n=Math.random()*22;this.navTarget.set(Math.cos(e)*n,0,Math.sin(e)*n)}animateWalking(e,n){this.animTime+=e*11*n;const i=Math.sin(this.animTime)*.48;this.legs[0].rotation.x=i,this.legs[1].rotation.x=-i,this.legs[2].rotation.x=-i,this.legs[3].rotation.x=i,this.bodyGroup.rotation.z=Math.sin(this.animTime*.5)*.05,this.headGroup.rotation.x=0,this.earL.rotation.z=.6+Math.sin(this.animTime)*.15,this.earR.rotation.z=-.6-Math.sin(this.animTime)*.15,this.fatTailGroup&&(this.fatTailGroup.rotation.x=-.15+Math.sin(this.animTime)*.14,this.fatTailGroup.rotation.y=Math.cos(this.animTime*.5)*.16)}animateGrazing(e){this.animTime+=e*2.2,this.headGroup.rotation.x=.48+Math.sin(this.animTime)*.12,this.headGroup.rotation.y=Math.sin(this.animTime*.5)*.08,this.legs.forEach(n=>n.rotation.x=0),this.bodyGroup.rotation.z=0,this.fatTailGroup&&(this.fatTailGroup.rotation.x=-.15+Math.sin(this.animTime)*.05,this.fatTailGroup.rotation.y=0)}handleDeath(e){this.deathTimer+=e,this.mesh.scale.multiplyScalar(Math.max(0,1-e*3)),this.deathTimer>.8&&!this.isFullyDead&&(this.isFullyDead=!0,this.scene.remove(this.mesh))}}class fr extends Rs{constructor(e,n,i,r,o){super(e);I(this,"state",0);I(this,"particleSystem");I(this,"wolvesList");I(this,"sheepList");I(this,"patrolAnchor");I(this,"targetWolf",null);I(this,"barkCooldown",0);I(this,"attackTimer",0);I(this,"patrolTimer",0);I(this,"patrolOffset",new R);I(this,"bodyGroup");I(this,"headGroup");I(this,"jaw");I(this,"tailGroup");I(this,"legs",[]);I(this,"animTime",0);this.particleSystem=o,this.wolvesList=i,this.sheepList=r,this.patrolAnchor=n.clone(),this.mesh.position.copy(n),this.patrolOffset.set(4,0,3),this.speed=7.5,this.health=250;const a=new xt({color:2368032,roughness:.82}),l=new xt({color:14251812,roughness:.75}),c=new xt({color:657930,roughness:.4}),h=new xt({color:7162945,roughness:.5}),u=new xt({color:2171169,roughness:.9}),f=new xt({color:15680580,roughness:.5}),m=new xt({color:16766720,metalness:.85,roughness:.25});this.bodyGroup=new Yt,this.bodyGroup.position.y=.65,this.mesh.add(this.bodyGroup);const g=new st(.72,.75,.92),_=new D(g,a);_.position.set(0,.06,.22),_.castShadow=!0,_.receiveShadow=!0,this.bodyGroup.add(_);const p=new st(.44,.52,.08),d=new D(p,l);d.position.set(0,-.06,.69),this.bodyGroup.add(d);const y=new st(.62,.65,.72),v=new D(y,a);v.position.set(0,.02,-.42),v.castShadow=!0,this.bodyGroup.add(v);const w=new Xe(.38,.06,6,16),C=new D(w,f);C.position.set(0,.32,.62),C.rotation.x=Math.PI/3,this.bodyGroup.add(C);const A=new D(new sn(.08,8,8),m);A.position.set(0,.16,.88),this.bodyGroup.add(A),this.headGroup=new Yt,this.headGroup.position.set(0,.45,.75),this.bodyGroup.add(this.headGroup);const b=new st(.62,.52,.56),O=new D(b,a);O.castShadow=!0,this.headGroup.add(O);const M=new st(.38,.28,.44),E=new D(M,l);E.position.set(0,-.08,.42),E.castShadow=!0,this.headGroup.add(E);const G=new st(.18,.14,.12),k=new D(G,c);k.position.set(0,.08,.24),E.add(k);const J=new st(.32,.12,.4);this.jaw=new D(J,l),this.jaw.position.set(0,-.22,.38),this.headGroup.add(this.jaw);const L=new st(.16,.32,.12),F=new D(L,a);F.position.set(-.32,.12,.04),F.rotation.set(.2,0,.4),this.headGroup.add(F);const V=new D(L,a);V.position.set(.32,.12,.04),V.rotation.set(.2,0,-.4),this.headGroup.add(V);const K=new st(.09,.07,.04),q=new D(K,h);q.position.set(-.16,.08,.29),this.headGroup.add(q);const Y=new D(K,h);Y.position.set(.16,.08,.29),this.headGroup.add(Y);const j=new sn(.06,6,6),tt=new D(j,l);tt.position.set(-.16,.22,.27),this.headGroup.add(tt);const Q=new D(j,l);Q.position.set(.16,.22,.27),this.headGroup.add(Q),this.tailGroup=new Yt,this.tailGroup.position.set(0,.35,-.72);const z=new st(.18,.18,.38),$=new D(z,a);$.position.set(0,.12,-.12),$.rotation.x=1.1,this.tailGroup.add($);const rt=new st(.22,.22,.42),mt=new D(rt,a);mt.position.set(0,.36,.05),mt.rotation.x=2.4,this.tailGroup.add(mt),this.bodyGroup.add(this.tailGroup),[{x:-.26,z:.34,isFront:!0},{x:.26,z:.34,isFront:!0},{x:-.26,z:-.36,isFront:!1},{x:.26,z:-.36,isFront:!1}].forEach(St=>{const wt=new Yt;wt.position.set(St.x,-.08,St.z);const Mt=St.isFront?.42:.48,Ut=new D(new st(.24,Mt,.28),a);Ut.position.y=-Mt/2,Ut.castShadow=!0,wt.add(Ut);const N=new D(new st(.18,.36,.18),l);N.position.set(0,-Mt-.14,St.isFront?0:-.04),N.castShadow=!0,wt.add(N);const Vt=new D(new st(.22,.12,.26),l);Vt.position.set(0,-Mt-.34,.04),Vt.castShadow=!0;for(let pt=-1;pt<=1;pt++){const yt=new D(new he(.02,.07,4),u);yt.position.set(pt*.06,-.02,.13),yt.rotation.x=Math.PI/2,Vt.add(yt)}wt.add(Vt),this.bodyGroup.add(wt),this.legs.push(wt)})}update(e){if(!this.isDead)switch(this.barkCooldown>0&&(this.barkCooldown-=e),this.state){case 0:this.updatePatrol(e);break;case 1:this.updateChase(e);break;case 2:this.updateBark(e);break;case 3:this.updateAttack(e);break;case 4:this.updateReturn(e);break}}updatePatrol(e){const n=this.findThreateningWolf();if(n){this.targetWolf=n,this.state=1,this.barkCooldown<=0&&this.barkAtWolf();return}if(this.patrolTimer+=e,this.patrolTimer>4){this.patrolTimer=0;const o=Math.random()*Math.PI*2,a=4+Math.random()*8;this.patrolOffset.set(Math.cos(o)*a,0,Math.sin(o)*a)}const r=this.getFlockCenter().add(this.patrolOffset).clone().sub(this.mesh.position);if(r.y=0,r.length()>1.5){r.normalize(),this.mesh.position.addScaledVector(r,3.2*e);const o=Math.atan2(r.x,r.z);this.mesh.rotation.y=o,this.animateTrot(e,.7)}}updateChase(e){if(!this.targetWolf||this.targetWolf.isDead){this.state=4;return}const n=this.targetWolf.position.clone().sub(this.mesh.position);n.y=0;const i=n.length();if(i<=7.5&&this.barkCooldown<=0)this.state=2,this.barkAtWolf();else if(i<=2.2)this.state=3,this.attackTimer=0;else{n.normalize(),this.mesh.position.addScaledVector(n,this.speed*e);const r=Math.atan2(n.x,n.z);this.mesh.rotation.y=r,this.animateTrot(e,1.3)}}bark(){jt.playDogBark(),this.particleSystem.spawnFloatingBadge(this.mesh.position.clone().add(new R(0,1.2,0)),"WOOF! 🐕","#FFD54F",1.5),this.jaw.rotation.x=.35,this.headGroup.position.z=.85,setTimeout(()=>{this.jaw.rotation.x=0,this.headGroup.position.z=.75},300)}barkAtWolf(){this.barkCooldown=3.2,this.bark(),this.targetWolf&&!this.targetWolf.isDead&&this.targetWolf.scare(this.mesh.position,2.8),setTimeout(()=>{this.state===2&&(this.state=1)},450)}updateBark(e){this.jaw.rotation.x=.35,this.headGroup.position.z=.85}updateAttack(e){if(!this.targetWolf||this.targetWolf.isDead){this.state=4;return}this.attackTimer+=e;const n=Math.sin(this.attackTimer*8);if(this.headGroup.position.z=.75+Math.max(0,n*.3),this.jaw.rotation.x=.12+Math.abs(Math.sin(this.attackTimer*12))*.35,this.attackTimer>=.5){this.attackTimer=0;const i=this.targetWolf.position.clone().sub(this.mesh.position).normalize();this.targetWolf.takeWhipDamage(35,i),this.particleSystem.spawnHitSparks(this.targetWolf.position,6),jt.playHit(),this.targetWolf.isDead&&(this.state=4)}}updateReturn(e){const i=this.getFlockCenter().clone().sub(this.mesh.position);if(i.y=0,i.length()>3){i.normalize(),this.mesh.position.addScaledVector(i,4.5*e);const r=Math.atan2(i.x,i.z);this.mesh.rotation.y=r,this.animateTrot(e,.9)}else this.state=0}findThreateningWolf(){let e=null,n=22*22;for(const i of this.wolvesList){if(i.isDead)continue;const r=this.mesh.position.distanceToSquared(i.position);r<n&&(n=r,e=i)}return e}getFlockCenter(){const e=new R;let n=0;for(const i of this.sheepList)i.isDead||(e.add(i.position),n++);return n>0?e.divideScalar(n):e.copy(this.patrolAnchor),e.y=0,e}animateTrot(e,n){this.animTime+=e*12*n;const i=Math.sin(this.animTime)*.55;this.legs[0].rotation.x=i,this.legs[1].rotation.x=-i,this.legs[2].rotation.x=-i,this.legs[3].rotation.x=i,this.bodyGroup.position.y=.65+Math.abs(Math.sin(this.animTime))*.06,this.tailGroup.rotation.y=Math.sin(this.animTime)*.25}}class Jp{constructor(){I(this,"element");I(this,"scene");I(this,"camera");I(this,"renderer");I(this,"clock");I(this,"inputManager");I(this,"particleSystem");I(this,"environment");I(this,"levelManager");I(this,"player");I(this,"dog",null);I(this,"wolves",[]);I(this,"sheep",[]);I(this,"currentLevel",null);I(this,"currentWaveIndex",0);I(this,"isEndless",!1);I(this,"endlessWaveNumber",1);I(this,"score",0);I(this,"highScore",0);I(this,"wolvesRemainingInWave",0);I(this,"wolvesKilledInLevel",0);I(this,"waveInProgress",!1);I(this,"isGameOver",!1);I(this,"isGameStarted",!1);I(this,"bossWolf",null);I(this,"whistleCooldown",0);I(this,"WHISTLE_COOLDOWN_TIME",15);I(this,"screenShakeIntensity",0);I(this,"scoreElement");I(this,"highScoreElement");I(this,"levelElement");I(this,"waveElement");I(this,"sheepCountElement");I(this,"crackCooldownBar");I(this,"whistleCooldownBar");I(this,"bossHealthContainer");I(this,"bossHealthFill");I(this,"startScreenElement");I(this,"gameOverElement");I(this,"levelSelectModal");I(this,"levelCompleteModal");I(this,"totalStarsElement");I(this,"levelsGridElement");I(this,"finalScoreElement");I(this,"finalWaveElement");I(this,"waveBannerElement");I(this,"waveBannerTitle");I(this,"waveBannerSub");I(this,"muteBtn");this.element=document.body,this.scoreElement=document.getElementById("score-display"),this.highScoreElement=document.getElementById("high-score-display"),this.levelElement=document.getElementById("level-display"),this.waveElement=document.getElementById("wave-display"),this.sheepCountElement=document.getElementById("sheep-count-display"),this.crackCooldownBar=document.getElementById("whip-cooldown-fill"),this.whistleCooldownBar=document.getElementById("whistle-cooldown-fill"),this.bossHealthContainer=document.getElementById("boss-health-container"),this.bossHealthFill=document.getElementById("boss-health-fill"),this.startScreenElement=document.getElementById("start-screen"),this.gameOverElement=document.getElementById("game-over"),this.levelSelectModal=document.getElementById("level-select-modal"),this.levelCompleteModal=document.getElementById("level-complete-modal"),this.totalStarsElement=document.getElementById("total-stars-count"),this.levelsGridElement=document.getElementById("levels-grid"),this.finalScoreElement=document.getElementById("final-score"),this.finalWaveElement=document.getElementById("final-wave"),this.waveBannerElement=document.getElementById("wave-banner"),this.waveBannerTitle=document.getElementById("wave-banner-title"),this.waveBannerSub=document.getElementById("wave-banner-sub"),this.muteBtn=document.getElementById("btn-mute"),this.levelManager=new Yp,this.highScore=this.levelManager.getEndlessHighScore(),this.highScoreElement&&(this.highScoreElement.innerText=this.highScore.toString()),this.scene=new Ip,this.scene.background=new kt(8900331),this.scene.fog=new On(8900331,.012),this.camera=new Oe(55,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,16,14),this.renderer=new tl({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=So,this.element.appendChild(this.renderer.domElement),window.addEventListener("resize",()=>this.onWindowResize()),window.addEventListener("orientationchange",()=>setTimeout(()=>this.onWindowResize(),150)),this.clock=new Vp,this.inputManager=new Wp,this.particleSystem=new Xp(this.scene),this.environment=new qp(this.scene),this.player=new Zp(this.scene,this.inputManager,this.particleSystem),this.player.onStrikeTrigger=()=>this.handleWhipStrike(),this.player.onCrackAirTrigger=()=>this.handleWhipAirCrack(),this.spawnSheepFlock(10),this.dog=new fr(this.scene,new R(0,0,5),this.wolves,this.sheep,this.particleSystem),this.setupUIEvents(),this.animate()}setupUIEvents(){const t=document.getElementById("btn-start-game");if(t){const f=m=>{m.stopPropagation(),jt.unlock(),this.startScreenElement&&(this.startScreenElement.style.display="none"),this.startLevel(1)};t.addEventListener("click",f),t.addEventListener("touchstart",f,{passive:!1})}const e=document.getElementById("btn-open-levels-start");e&&e.addEventListener("click",f=>{f.stopPropagation(),jt.unlock(),this.openLevelSelectModal()});const n=document.getElementById("btn-hud-levels");n&&n.addEventListener("click",f=>{f.stopPropagation(),jt.unlock(),this.openLevelSelectModal()});const i=document.getElementById("btn-close-levels");i&&i.addEventListener("click",()=>{this.levelSelectModal&&(this.levelSelectModal.style.display="none"),!this.isGameStarted&&this.startScreenElement&&(this.startScreenElement.style.display="flex")});const r=document.getElementById("btn-start-endless");r&&r.addEventListener("click",f=>{f.stopPropagation(),jt.unlock(),this.levelSelectModal&&(this.levelSelectModal.style.display="none"),this.startScreenElement&&(this.startScreenElement.style.display="none"),this.startEndlessMode()});const o=document.getElementById("btn-next-level");o&&o.addEventListener("click",f=>{f.stopPropagation(),jt.unlock(),this.levelCompleteModal&&(this.levelCompleteModal.style.display="none"),this.currentLevel&&this.currentLevel.number<6?this.startLevel(this.currentLevel.number+1):this.openLevelSelectModal()});const a=document.getElementById("btn-replay-level");a&&a.addEventListener("click",f=>{f.stopPropagation(),jt.unlock(),this.levelCompleteModal&&(this.levelCompleteModal.style.display="none"),this.currentLevel&&this.startLevel(this.currentLevel.id)});const l=document.getElementById("btn-victory-levels");l&&l.addEventListener("click",f=>{f.stopPropagation(),jt.unlock(),this.levelCompleteModal&&(this.levelCompleteModal.style.display="none"),this.openLevelSelectModal()});const c=document.getElementById("btn-restart");c&&c.addEventListener("click",f=>{f.stopPropagation(),jt.unlock(),this.gameOverElement&&(this.gameOverElement.style.display="none"),this.isEndless?this.startEndlessMode():this.currentLevel?this.startLevel(this.currentLevel.id):this.startLevel(1)});const h=document.getElementById("btn-gameover-levels");h&&h.addEventListener("click",f=>{f.stopPropagation(),jt.unlock(),this.gameOverElement&&(this.gameOverElement.style.display="none"),this.openLevelSelectModal()});const u=document.getElementById("btn-touch-whistle");u&&(u.addEventListener("touchstart",f=>{f.stopPropagation(),f.preventDefault(),jt.unlock(),this.triggerShepherdWhistle()},{passive:!1}),u.addEventListener("click",f=>{f.stopPropagation(),jt.unlock(),this.triggerShepherdWhistle()})),this.muteBtn&&this.muteBtn.addEventListener("click",()=>{const f=jt.toggleMute();this.muteBtn.innerText=f?"🔇":"🔊"})}openLevelSelectModal(){this.renderLevelsGrid(),this.totalStarsElement&&(this.totalStarsElement.innerText=this.levelManager.getTotalStarsEarned().toString()),this.levelSelectModal&&(this.levelSelectModal.style.display="flex")}renderLevelsGrid(){const t=this.levelsGridElement;if(!t)return;t.innerHTML="",this.levelManager.getAllLevels().forEach(n=>{const i=this.levelManager.isLevelUnlocked(n.number),r=this.levelManager.getLevelProgress(n.id),o=document.createElement("div");o.className=`level-card ${i?"":"locked"}`;const a=n.difficulty==="boss"?"diff-boss":n.difficulty==="hard"||n.difficulty==="very-hard"?"diff-hard":n.difficulty==="medium"?"diff-med":"diff-easy",l=n.difficulty.toUpperCase();let c="";for(let h=1;h<=3;h++){const u=h<=r.stars;c+=`<span class="${u?"active":""}">★</span>`}o.innerHTML=`
                <div class="level-badge-diff ${a}">${l}</div>
                <div class="level-card-num">LEVEL ${n.number}</div>
                <div class="level-card-title">${n.title}</div>
                <div class="level-card-mn">${n.titleMn}</div>
                <div class="level-card-stars">${i?c:"🔒 LOCKED"}</div>
                ${i&&r.highScore>0?`<div class="level-card-score">Best: ${r.highScore}</div>`:""}
            `,i&&o.addEventListener("click",()=>{jt.unlock(),this.levelSelectModal&&(this.levelSelectModal.style.display="none"),this.startScreenElement&&(this.startScreenElement.style.display="none"),this.startLevel(n.id)}),t.appendChild(o)})}startLevel(t){const e=this.levelManager.getLevel(t);e&&(this.currentLevel=e,this.isEndless=!1,this.currentWaveIndex=0,this.score=0,this.wolvesKilledInLevel=0,this.isGameOver=!1,this.isGameStarted=!0,this.screenShakeIntensity=0,this.gameOverElement&&(this.gameOverElement.style.display="none"),this.levelCompleteModal&&(this.levelCompleteModal.style.display="none"),this.levelSelectModal&&(this.levelSelectModal.style.display="none"),this.startScreenElement&&(this.startScreenElement.style.display="none"),this.bossHealthContainer&&(this.bossHealthContainer.style.display="none"),this.scoreElement&&(this.scoreElement.innerText="Score: 0"),this.levelElement&&(this.levelElement.innerText=`Level ${e.number}: ${e.title}`),this.environment.setSeason(e.season,e.timeOfDay),this.clearWolves(),this.particleSystem.clear(),this.spawnSheepFlock(e.initialSheep),this.player.position.set(0,0,0),this.player.mesh.position.set(0,0,0),this.dog&&(this.scene.remove(this.dog.mesh),this.dog=null),e.hasBankharDog&&(this.dog=new fr(this.scene,new R(0,0,5),this.wolves,this.sheep,this.particleSystem),this.particleSystem.spawnFloatingBadge(new R(0,2,5),"🐕 BANKHAR GUARDIAN JOINED!","#FFD54F",3)),this.startWave(0))}startEndlessMode(){this.isEndless=!0,this.currentLevel=null,this.endlessWaveNumber=1,this.score=0,this.wolvesKilledInLevel=0,this.isGameOver=!1,this.isGameStarted=!0,this.screenShakeIntensity=0,this.levelElement&&(this.levelElement.innerText="Endless Steppe Survival"),this.scoreElement&&(this.scoreElement.innerText="Score: 0"),this.environment.setSeason("summer","day"),this.clearWolves(),this.particleSystem.clear(),this.spawnSheepFlock(12),this.player.position.set(0,0,0),this.player.mesh.position.set(0,0,0),this.dog&&(this.scene.remove(this.dog.mesh),this.dog=null),this.dog=new fr(this.scene,new R(0,0,5),this.wolves,this.sheep,this.particleSystem),this.startEndlessWave(1)}startWave(t){if(!this.currentLevel)return;this.currentWaveIndex=t,this.waveInProgress=!0;const e=this.currentLevel.waves[t];jt.playWaveHorn(),setTimeout(()=>jt.playWolfHowl(),800),this.waveElement&&(this.waveElement.innerText=`Wave ${t+1}/${this.currentLevel.waves.length}`),this.showWaveBanner(e.title,e.subtitle),this.wolvesRemainingInWave=e.wolves.length,e.wolves.forEach((n,i)=>{setTimeout(()=>{!this.isGameOver&&this.waveInProgress&&this.spawnWolfFromConfig(n,i,e.wolves.length)},n.delayMs)})}startEndlessWave(t){this.endlessWaveNumber=t,this.waveInProgress=!0,t%3===2?this.environment.setTimeOfDay("sunset"):t%3===0?this.environment.setTimeOfDay("twilight"):this.environment.setTimeOfDay("day"),jt.playWaveHorn(),setTimeout(()=>jt.playWolfHowl(),800),this.waveElement&&(this.waveElement.innerText=`Endless Wave ${t}`),this.showWaveBanner(`ENDLESS WAVE ${t}`,"Wolves gather across the plains!");const e=3+t*2;this.wolvesRemainingInWave=e;for(let n=0;n<e;n++)setTimeout(()=>{if(!this.isGameOver&&this.waveInProgress){let i="normal";const r=Math.random();t>=4&&r<.25?i="shadow":t>=3&&r<.45?i="brute":t>=2&&r<.7&&(i="timber"),t%5===0&&n===e-1&&(i="alpha"),this.spawnWolfFromConfig({delayMs:0,type:i},n,e)}},800+n*1900)}spawnWolfFromConfig(t,e,n){const i=t.angleRad!==void 0?t.angleRad:Math.random()*Math.PI*2,r=36+Math.random()*8,o=Math.cos(i)*r,a=Math.sin(i)*r;let l=ke.NORMAL;t.type==="timber"?l=ke.TIMBER:t.type==="brute"?l=ke.BRUTE:t.type==="shadow"?l=ke.SHADOW:t.type==="alpha"&&(l=ke.ALPHA);const c=new xo(this.scene,new R(o,0,a),this.sheep,this.particleSystem,l);l===ke.ALPHA?(this.bossWolf=c,jt.playWolfHowl(),this.bossHealthContainer&&(this.bossHealthContainer.style.display="flex",this.bossHealthFill&&(this.bossHealthFill.style.width="100%")),c.onBossHowl=()=>{this.triggerScreenShake(.5);for(const h of this.wolves)h!==c&&!h.isDead&&(h.clearFear(),this.particleSystem.spawnFloatingBadge(h.position,"ENRAGED!","#00E5FF",1.8))},c.onBossSummon=()=>{for(let h=0;h<2;h++){const u=Math.random()*Math.PI*2,f=Math.cos(u)*32,m=Math.sin(u)*32,g=new xo(this.scene,new R(f,0,m),this.sheep,this.particleSystem,ke.TIMBER);this.wolves.push(g),this.particleSystem.spawnDust(g.position)}}):e===0&&jt.playWolfHowl(),this.wolves.push(c)}handleWhipStrike(){const t=this.player.position,e=this.player.getForwardVector(),n=6.8;let i=0;for(const r of this.wolves){if(r.isDead)continue;const o=r.position.clone().sub(t);if(o.y=0,o.length()<=n&&(o.normalize(),o.dot(e)>.4)){if(i++,r.takeWhipDamage(50,e),this.particleSystem.spawnHitSparks(r.position,10),this.particleSystem.spawnFloatingBadge(r.position,"-50","#FF3D00",1.3),r===this.bossWolf&&this.bossHealthFill){const c=Math.max(0,r.health/r.maxHealth*100);this.bossHealthFill.style.width=`${c}%`}this.addScore(50)}}i>0&&this.triggerScreenShake(.35)}handleWhipAirCrack(){const t=this.player.position,e=17;let n=0;for(const i of this.wolves){if(i.isDead)continue;i.position.distanceTo(t)<=e&&(i.scare(t,4.2),n++,this.addScore(25))}this.triggerScreenShake(.2),n>0&&this.particleSystem.spawnFloatingBadge(t.clone().add(new R(0,1.2,0)),`${n} WOLVES SCARED!`,"#FFD700",2)}triggerShepherdWhistle(){if(!(this.whistleCooldown>0||this.isGameOver)){this.whistleCooldown=this.WHISTLE_COOLDOWN_TIME,jt.playShepherdWhistle(),this.particleSystem.spawnFloatingBadge(this.player.position.clone().add(new R(0,1.8,0)),"📢 SHEPHERD CALL!","#00E5FF",2.5);for(const t of this.sheep)t.isDead||t.rallyTowards(this.player.position,4.8);this.dog&&setTimeout(()=>{this.dog&&this.dog.bark()},350)}}addScore(t){this.score+=t,this.scoreElement&&(this.scoreElement.innerText=`Score: ${this.score}`),this.score>this.highScore&&(this.highScore=this.score,this.highScoreElement&&(this.highScoreElement.innerText=this.highScore.toString()))}triggerScreenShake(t){this.screenShakeIntensity=Math.max(this.screenShakeIntensity,t)}animate(){requestAnimationFrame(()=>this.animate());const t=Math.min(this.clock.getDelta(),.1);this.update(t),this.render()}update(t){if(!this.isGameStarted||this.isGameOver)return;if(this.inputManager.consumeWhistle()&&this.triggerShepherdWhistle(),this.whistleCooldown>0&&(this.whistleCooldown-=t),this.whistleCooldownBar){const r=Math.max(0,1-this.whistleCooldown/this.WHISTLE_COOLDOWN_TIME);this.whistleCooldownBar.style.width=`${r*100}%`,this.whistleCooldownBar.style.backgroundColor=r>=1?"#00E5FF":"#546E7A"}if(this.player.update(t),this.crackCooldownBar){const r=Math.max(0,1-this.player.crackAirCooldown/this.player.CRACK_AIR_COOLDOWN_TIME);this.crackCooldownBar.style.width=`${r*100}%`,this.crackCooldownBar.style.backgroundColor=r>=1?"#FFD700":"#757575"}this.dog&&this.dog.update(t);const e=this.player.position.clone();e.y+=16,e.z+=12,this.screenShakeIntensity>0&&(e.x+=(Math.random()-.5)*this.screenShakeIntensity,e.y+=(Math.random()-.5)*this.screenShakeIntensity,e.z+=(Math.random()-.5)*this.screenShakeIntensity,this.screenShakeIntensity=Math.max(0,this.screenShakeIntensity-t*1.8)),this.camera.position.lerp(e,6*t),this.camera.lookAt(this.player.position.x,this.player.position.y+1.2,this.player.position.z);let n=0;for(let r=this.wolves.length-1;r>=0;r--){const o=this.wolves[r];if(o.update(t),!o.isDead)n++;else if(!o.scoreGiven){o.scoreGiven=!0,this.wolvesKilledInLevel++;let a=100;o.wolfType===ke.ALPHA?a=500:o.wolfType===ke.BRUTE?a=250:o.wolfType===ke.TIMBER?a=150:o.wolfType===ke.SHADOW&&(a=200),this.addScore(a),this.particleSystem.spawnFloatingBadge(o.position,`+${a}`,"#00E676",1.6)}o.isFullyDead&&(o===this.bossWolf&&this.bossHealthContainer&&(this.bossHealthContainer.style.display="none",this.bossWolf=null),this.wolves.splice(r,1))}let i=0;for(let r=this.sheep.length-1;r>=0;r--){const o=this.sheep[r];o.update(t,this.wolves,this.player.position),o.isDead?o.isFullyDead&&this.sheep.splice(r,1):i++}this.updateSheepDisplay(),this.particleSystem.update(t),this.waveInProgress&&n===0&&this.wolvesRemainingInWave<=0&&(this.waveInProgress=!1,this.isEndless?this.onEndlessWaveComplete():this.onCampaignWaveComplete()),i===0&&this.sheep.length>0&&this.triggerGameOver()}onCampaignWaveComplete(){if(!this.currentLevel)return;this.currentWaveIndex>=this.currentLevel.waves.length-1?this.onLevelVictory():(jt.playVictory(),this.showWaveBanner("WAVE CLEARED!","Breathe easy, shepherd. The next pack is gathering..."),setTimeout(()=>{this.isGameOver||this.startWave(this.currentWaveIndex+1)},3500))}onEndlessWaveComplete(){jt.playVictory();const t=this.sheep.filter(n=>!n.isDead).length,e=t*100;if(this.addScore(e),this.showWaveBanner("WAVE CLEARED!",`Flock Bonus: +${e} pts!`),t<10){const n=Math.min(2,10-t);for(let i=0;i<n;i++){const r=Math.random()*Math.PI*2,o=5+Math.random()*10,a=new Mo(this.scene,new R(Math.cos(r)*o,0,Math.sin(r)*o),this.particleSystem);this.sheep.push(a)}}setTimeout(()=>{this.isGameOver||this.startEndlessWave(this.endlessWaveNumber+1)},3500)}onLevelVictory(){jt.playVictory();const t=this.sheep.filter(h=>!h.isDead).length,e=t*150;this.addScore(e);const n=this.levelManager.recordLevelVictory(this.currentLevel.id,t,this.score),i=document.getElementById("victory-title"),r=document.getElementById("victory-desc"),o=document.getElementById("victory-sheep"),a=document.getElementById("victory-score"),l=document.getElementById("victory-wolves"),c=document.getElementById("victory-star-label");i&&(i.innerText=`${this.currentLevel.title} Cleared!`),r&&(r.innerText="You defended the steppe with honor and preserved the nomadic tradition!"),o&&(o.innerText=`${t}/${this.currentLevel.initialSheep}`),a&&(a.innerText=this.score.toString()),l&&(l.innerText=this.wolvesKilledInLevel.toString()),c&&(n.stars===3?c.innerText="⭐⭐⭐ Flawless Steppe Guardian!":n.stars===2?c.innerText="⭐⭐ Brave Shepherd!":c.innerText="⭐ Level Complete!");for(let h=1;h<=3;h++){const u=document.getElementById(`star-${h}`);u&&(u.className="star-icon",h<=n.stars&&setTimeout(()=>{u.className="star-icon earned",jt.playStarChime(h-1)},h*350))}this.levelCompleteModal&&(this.levelCompleteModal.style.display="flex")}triggerGameOver(){this.isGameOver=!0,jt.playGameOver(),this.isEndless&&this.levelManager.recordEndlessScore(this.score),this.gameOverElement&&(this.gameOverElement.style.display="flex"),this.finalScoreElement&&(this.finalScoreElement.innerText=this.score.toString()),this.finalWaveElement&&(this.finalWaveElement.innerText=this.isEndless?`Wave ${this.endlessWaveNumber}`:this.currentLevel?`Level ${this.currentLevel.number}`:"1")}clearWolves(){for(const t of this.wolves)this.scene.remove(t.mesh);this.wolves=[],this.bossWolf=null,this.bossHealthContainer&&(this.bossHealthContainer.style.display="none")}spawnSheepFlock(t){for(const e of this.sheep)this.scene.remove(e.mesh);this.sheep=[];for(let e=0;e<t;e++){const n=Math.random()*Math.PI*2,i=3+Math.random()*15,r=Math.cos(n)*i,o=Math.sin(n)*i,a=new Mo(this.scene,new R(r,0,o),this.particleSystem);this.sheep.push(a)}this.updateSheepDisplay()}updateSheepDisplay(){if(!this.sheepCountElement)return;const t=this.sheep.filter(e=>!e.isDead).length;this.sheepCountElement.innerText=`🐑 Flock: ${t}`}showWaveBanner(t,e){!this.waveBannerElement||!this.waveBannerTitle||!this.waveBannerSub||(this.waveBannerTitle.innerText=t,this.waveBannerSub.innerText=e,this.waveBannerElement.classList.add("visible"),setTimeout(()=>{this.waveBannerElement&&this.waveBannerElement.classList.remove("visible")},3200))}render(){this.renderer.render(this.scene,this.camera)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}}document.addEventListener("DOMContentLoaded",()=>{new Jp});
