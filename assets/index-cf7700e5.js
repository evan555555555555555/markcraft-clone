var fd=Object.defineProperty;var pd=(s,e,t)=>e in s?fd(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Je=(s,e,t)=>(pd(s,typeof e!="symbol"?e+"":e,t),t),el=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var nr=(s,e,t)=>(el(s,e,"read from private field"),t?t.call(s):e.get(s)),ro=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)};var ir=(s,e,t)=>(el(s,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ma="156",md=0,tl=1,gd=2,oh=1,ah=2,In=3,Fn=0,$t=1,Bt=2,$n=0,es=1,zr=2,nl=3,il=4,_d=5,Ki=100,xd=101,vd=102,sl=103,rl=104,yd=200,Md=201,Sd=202,bd=203,lh=204,ch=205,wd=206,Ed=207,Td=208,Ad=209,Rd=210,Cd=0,Ld=1,Pd=2,Ko=3,Id=4,Dd=5,Nd=6,Ud=7,Sa=0,Od=1,Fd=2,Kn=0,kd=1,Bd=2,zd=3,Hd=4,Gd=5,hh=300,rs=301,os=302,Zo=303,Jo=304,Yr=306,kn=1e3,an=1001,Hr=1002,$e=1003,Qo=1004,Or=1005,Wt=1006,dh=1007,_i=1008,Zn=1009,Vd=1010,Wd=1011,ba=1012,uh=1013,jn=1014,Dn=1015,Gs=1016,fh=1017,ph=1018,fi=1020,Xd=1021,ln=1023,Yd=1024,qd=1025,pi=1026,as=1027,jd=1028,mh=1029,$d=1030,gh=1031,_h=1033,oo=33776,ao=33777,lo=33778,co=33779,ol=35840,al=35841,ll=35842,cl=35843,Kd=36196,hl=37492,dl=37496,ul=37808,fl=37809,pl=37810,ml=37811,gl=37812,_l=37813,xl=37814,vl=37815,yl=37816,Ml=37817,Sl=37818,bl=37819,wl=37820,El=37821,ho=36492,Tl=36494,Al=36495,Zd=36283,Rl=36284,Cl=36285,Ll=36286,Vs=2300,ls=2301,uo=2302,Pl=2400,Il=2401,Dl=2402,Jd=2500,Qd=0,xh=1,ea=2,vh=3e3,mi=3001,eu=3200,tu=3201,wa=0,nu=1,gi="",Ae="srgb",It="srgb-linear",qr="display-p3",fo=7680,iu=519,su=512,ru=513,ou=514,au=515,lu=516,cu=517,hu=518,du=519,ta=35044,Nl="300 es",na=1035,Nn=2e3,Gr=2001;class Ei{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ul=1234567;const Ds=Math.PI/180,cs=180/Math.PI;function cn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[s&255]+Ft[s>>8&255]+Ft[s>>16&255]+Ft[s>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Lt(s,e,t){return Math.max(e,Math.min(t,s))}function Ea(s,e){return(s%e+e)%e}function uu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function fu(s,e,t){return s!==e?(t-s)/(e-s):0}function Ns(s,e,t){return(1-t)*s+t*e}function pu(s,e,t,n){return Ns(s,e,1-Math.exp(-t*n))}function mu(s,e=1){return e-Math.abs(Ea(s,e*2)-e)}function gu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function _u(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function xu(s,e){return s+Math.floor(Math.random()*(e-s+1))}function vu(s,e){return s+Math.random()*(e-s)}function yu(s){return s*(.5-Math.random())}function Mu(s){s!==void 0&&(Ul=s);let e=Ul+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Su(s){return s*Ds}function bu(s){return s*cs}function ia(s){return(s&s-1)===0&&s!==0}function yh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Vr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wu(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ot(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Eu={DEG2RAD:Ds,RAD2DEG:cs,generateUUID:cn,clamp:Lt,euclideanModulo:Ea,mapLinear:uu,inverseLerp:fu,lerp:Ns,damp:pu,pingpong:mu,smoothstep:gu,smootherstep:_u,randInt:xu,randFloat:vu,randFloatSpread:yu,seededRandom:Mu,degToRad:Su,radToDeg:bu,isPowerOfTwo:ia,ceilPowerOfTwo:yh,floorPowerOfTwo:Vr,setQuaternionFromProperEuler:wu,normalize:ot,denormalize:xn};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,i,r,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],x=i[4],v=i[7],b=i[2],E=i[5],R=i[8];return r[0]=o*_+a*y+l*b,r[3]=o*m+a*x+l*E,r[6]=o*p+a*v+l*R,r[1]=c*_+h*y+d*b,r[4]=c*m+h*x+d*E,r[7]=c*p+h*v+d*R,r[2]=u*_+f*y+g*b,r[5]=u*m+f*x+g*E,r[8]=u*p+f*v+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=u*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(po.makeScale(e,t)),this}rotate(e){return this.premultiply(po.makeRotation(-e)),this}translate(e,t){return this.premultiply(po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const po=new qe;function Mh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ws(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Tu(){const s=Ws("canvas");return s.style.display="block",s}const Ol={};function Us(s){s in Ol||(Ol[s]=!0,console.warn(s))}function ts(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function mo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Au=new qe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ru=new qe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Cu(s){return s.convertSRGBToLinear().applyMatrix3(Ru)}function Lu(s){return s.applyMatrix3(Au).convertLinearToSRGB()}const Pu={[It]:s=>s,[Ae]:s=>s.convertSRGBToLinear(),[qr]:Cu},Iu={[It]:s=>s,[Ae]:s=>s.convertLinearToSRGB(),[qr]:Lu},Qt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return It},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Pu[e],i=Iu[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let Ti;class Sh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ti===void 0&&(Ti=Ws("canvas")),Ti.width=e.width,Ti.height=e.height;const n=Ti.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ws("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ts(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ts(t[n]/255)*255):t[n]=ts(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Du=0;class bh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=cn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(go(i[o].image)):r.push(go(i[o]))}else r=go(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function go(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Sh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nu=0;class Pt extends Ei{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=an,i=an,r=Wt,o=_i,a=ln,l=Zn,c=Pt.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=cn(),this.name="",this.source=new bh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Us("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===mi?Ae:gi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kn:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case Hr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kn:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case Hr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Us("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ae?mi:vh}set encoding(e){Us("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===mi?Ae:gi}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=hh;Pt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,i=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(f+1)/2,b=(p+1)/2,E=(h+u)/4,R=(d+_)/4,P=(g+m)/4;return x>v&&x>b?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=E/n,r=R/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=P/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=R/r,i=P/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uu extends Ei{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Us("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===mi?Ae:gi),this.texture=new Pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Wt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends Uu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wh extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ou extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ei{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==u||c!==f||h!==g){let m=1-a;const p=l*u+c*f+h*g+d*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const b=Math.sqrt(x),E=Math.atan2(b,p*y);m=Math.sin(m*E)/b,a=Math.sin(a*E)/b}const v=a*y;if(l=l*m+u*v,c=c*m+f*v,h=h*m+g*v,d=d*m+_*v,m===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,h=l*n+a*t-r*i,d=l*i+r*n-o*t,u=-r*t-o*n-a*i;return this.x=c*l+u*-r+h*-a-d*-o,this.y=h*l+u*-o+d*-r-c*-a,this.z=d*l+u*-a+c*-o-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _o.copy(this).projectOnVector(e),this.sub(_o)}reflect(e){return this.sub(_o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _o=new C,Fl=new ei;class Bn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ai.copy(e.boundingBox),Ai.applyMatrix4(e.matrixWorld),this.union(Ai);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)Tn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Tn)}else i.boundingBox===null&&i.computeBoundingBox(),Ai.copy(i.boundingBox),Ai.applyMatrix4(e.matrixWorld),this.union(Ai)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),sr.subVectors(this.max,ys),Ri.subVectors(e.a,ys),Ci.subVectors(e.b,ys),Li.subVectors(e.c,ys),Hn.subVectors(Ci,Ri),Gn.subVectors(Li,Ci),si.subVectors(Ri,Li);let t=[0,-Hn.z,Hn.y,0,-Gn.z,Gn.y,0,-si.z,si.y,Hn.z,0,-Hn.x,Gn.z,0,-Gn.x,si.z,0,-si.x,-Hn.y,Hn.x,0,-Gn.y,Gn.x,0,-si.y,si.x,0];return!xo(t,Ri,Ci,Li,sr)||(t=[1,0,0,0,1,0,0,0,1],!xo(t,Ri,Ci,Li,sr))?!1:(rr.crossVectors(Hn,Gn),t=[rr.x,rr.y,rr.z],xo(t,Ri,Ci,Li,sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const En=[new C,new C,new C,new C,new C,new C,new C,new C],Tn=new C,Ai=new Bn,Ri=new C,Ci=new C,Li=new C,Hn=new C,Gn=new C,si=new C,ys=new C,sr=new C,rr=new C,ri=new C;function xo(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ri.fromArray(s,r);const a=i.x*Math.abs(ri.x)+i.y*Math.abs(ri.y)+i.z*Math.abs(ri.z),l=e.dot(ri),c=t.dot(ri),h=n.dot(ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Fu=new Bn,Ms=new C,vo=new C;class Mn{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Fu.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ms,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(vo)),this.expandByPoint(Ms.copy(e.center).sub(vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new C,yo=new C,or=new C,Vn=new C,Mo=new C,ar=new C,So=new C;class Zs{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){yo.copy(e).add(t).multiplyScalar(.5),or.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(yo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(or),a=Vn.dot(this.direction),l=-Vn.dot(or),c=Vn.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(yo).addScaledVector(or,u),f}intersectSphere(e,t){An.subVectors(e.center,this.origin);const n=An.dot(this.direction),i=An.dot(An)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,i,r){Mo.subVectors(t,e),ar.subVectors(n,e),So.crossVectors(Mo,ar);let o=this.direction.dot(So),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,e);const l=a*this.direction.dot(ar.crossVectors(Vn,ar));if(l<0)return null;const c=a*this.direction.dot(Mo.cross(Vn));if(c<0||l+c>o)return null;const h=-a*Vn.dot(So);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(e,t,n,i,r,o,a,l,c,h,d,u,f,g,_,m){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,d,u,f,g,_,m)}set(e,t,n,i,r,o,a,l,c,h,d,u,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Pi.setFromMatrixColumn(e,0).length(),r=1/Pi.setFromMatrixColumn(e,1).length(),o=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=o*h,f=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u-_*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,f=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ku,e,Bu)}lookAt(e,t,n){const i=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Wn.crossVectors(n,Zt),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Wn.crossVectors(n,Zt)),Wn.normalize(),lr.crossVectors(Zt,Wn),i[0]=Wn.x,i[4]=lr.x,i[8]=Zt.x,i[1]=Wn.y,i[5]=lr.y,i[9]=Zt.y,i[2]=Wn.z,i[6]=lr.z,i[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],v=n[11],b=n[15],E=i[0],R=i[4],P=i[8],M=i[12],w=i[1],G=i[5],O=i[9],I=i[13],D=i[2],H=i[6],K=i[10],Y=i[14],Z=i[3],Q=i[7],J=i[11],U=i[15];return r[0]=o*E+a*w+l*D+c*Z,r[4]=o*R+a*G+l*H+c*Q,r[8]=o*P+a*O+l*K+c*J,r[12]=o*M+a*I+l*Y+c*U,r[1]=h*E+d*w+u*D+f*Z,r[5]=h*R+d*G+u*H+f*Q,r[9]=h*P+d*O+u*K+f*J,r[13]=h*M+d*I+u*Y+f*U,r[2]=g*E+_*w+m*D+p*Z,r[6]=g*R+_*G+m*H+p*Q,r[10]=g*P+_*O+m*K+p*J,r[14]=g*M+_*I+m*Y+p*U,r[3]=y*E+x*w+v*D+b*Z,r[7]=y*R+x*G+v*H+b*Q,r[11]=y*P+x*O+v*K+b*J,r[15]=y*M+x*I+v*Y+b*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*d-i*c*d-r*a*u+n*c*u+i*a*f-n*l*f)+_*(+t*l*f-t*c*u+r*o*u-i*o*f+i*c*h-r*l*h)+m*(+t*c*d-t*a*f-r*o*d+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-t*l*d+t*a*u+i*o*d-n*o*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=d*m*c-_*u*c+_*l*f-a*m*f-d*l*p+a*u*p,x=g*u*c-h*m*c-g*l*f+o*m*f+h*l*p-o*u*p,v=h*_*c-g*d*c+g*a*f-o*_*f-h*a*p+o*d*p,b=g*d*l-h*_*l-g*a*u+o*_*u+h*a*m-o*d*m,E=t*y+n*x+i*v+r*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=y*R,e[1]=(_*u*r-d*m*r-_*i*f+n*m*f+d*i*p-n*u*p)*R,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*R,e[3]=(d*l*r-a*u*r-d*i*c+n*u*c+a*i*f-n*l*f)*R,e[4]=x*R,e[5]=(h*m*r-g*u*r+g*i*f-t*m*f-h*i*p+t*u*p)*R,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*R,e[7]=(o*u*r-h*l*r+h*i*c-t*u*c-o*i*f+t*l*f)*R,e[8]=v*R,e[9]=(g*d*r-h*_*r-g*n*f+t*_*f+h*n*p-t*d*p)*R,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*R,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*f-t*a*f)*R,e[12]=b*R,e[13]=(h*_*i-g*d*i+g*n*u-t*_*u-h*n*m+t*d*m)*R,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*R,e[15]=(o*d*i-h*a*i+h*n*l-t*d*l-o*n*u+t*a*u)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,_=o*h,m=o*d,p=a*d,y=l*c,x=l*h,v=l*d,b=n.x,E=n.y,R=n.z;return i[0]=(1-(_+p))*b,i[1]=(f+v)*b,i[2]=(g-x)*b,i[3]=0,i[4]=(f-v)*E,i[5]=(1-(u+p))*E,i[6]=(m+y)*E,i[7]=0,i[8]=(g+x)*R,i[9]=(m-y)*R,i[10]=(1-(u+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Pi.set(i[0],i[1],i[2]).length();const o=Pi.set(i[4],i[5],i[6]).length(),a=Pi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],un.copy(this);const c=1/r,h=1/o,d=1/a;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=d,un.elements[9]*=d,un.elements[10]*=d,t.setFromRotationMatrix(un),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Nn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i);let f,g;if(a===Nn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Gr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Nn){const l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(o-r),u=(t+e)*c,f=(n+i)*h;let g,_;if(a===Nn)g=(o+r)*d,_=-2*d;else if(a===Gr)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pi=new C,un=new Be,ku=new C(0,0,0),Bu=new C(1,1,1),Wn=new C,lr=new C,Zt=new C,kl=new Be,Bl=new ei;class vi{constructor(e=0,t=0,n=0,i=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bl.setFromEuler(this),this.setFromQuaternion(Bl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class Ta{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zu=0;const zl=new C,Ii=new ei,Rn=new Be,cr=new C,Ss=new C,Hu=new C,Gu=new ei,Hl=new C(1,0,0),Gl=new C(0,1,0),Vl=new C(0,0,1),Vu={type:"added"},Wu={type:"removed"};class ut extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new C,t=new vi,n=new ei,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Be},normalMatrix:{value:new qe}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(Hl,e)}rotateY(e){return this.rotateOnAxis(Gl,e)}rotateZ(e){return this.rotateOnAxis(Vl,e)}translateOnAxis(e,t){return zl.copy(e).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hl,e)}translateY(e){return this.translateOnAxis(Gl,e)}translateZ(e){return this.translateOnAxis(Vl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cr.copy(e):cr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Ss,cr,this.up):Rn.lookAt(cr,Ss,this.up),this.quaternion.setFromRotationMatrix(Rn),i&&(Rn.extractRotation(i.matrixWorld),Ii.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Vu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,Hu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,Gu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ut.DEFAULT_UP=new C(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new C,Cn=new C,bo=new C,Ln=new C,Di=new C,Ni=new C,Wl=new C,wo=new C,Eo=new C,To=new C;let hr=!1;class on{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),fn.subVectors(e,t),i.cross(fn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){fn.subVectors(i,t),Cn.subVectors(n,t),bo.subVectors(e,t);const o=fn.dot(fn),a=fn.dot(Cn),l=fn.dot(bo),c=Cn.dot(Cn),h=Cn.dot(bo),d=o*c-a*a;if(d===0)return r.set(-2,-1,-1);const u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ln),Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getUV(e,t,n,i,r,o,a,l){return hr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hr=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Ln),l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l}static isFrontFacing(e,t,n,i){return fn.subVectors(n,t),Cn.subVectors(e,t),fn.cross(Cn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),fn.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return hr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hr=!0),on.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return on.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Di.subVectors(i,n),Ni.subVectors(r,n),wo.subVectors(e,n);const l=Di.dot(wo),c=Ni.dot(wo);if(l<=0&&c<=0)return t.copy(n);Eo.subVectors(e,i);const h=Di.dot(Eo),d=Ni.dot(Eo);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Di,o);To.subVectors(e,r);const f=Di.dot(To),g=Ni.dot(To);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ni,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Wl.subVectors(r,i),a=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(Wl,a);const p=1/(m+_+u);return o=_*p,a=u*p,t.copy(n).addScaledVector(Di,o).addScaledVector(Ni,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Xu=0;class hn extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=cn(),this.name="",this.type="Material",this.blending=es,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lh,this.blendDst=ch,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fo,this.stencilZFail=fo,this.stencilZPass=fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pn={h:0,s:0,l:0},dr={h:0,s:0,l:0};function Ao(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ae){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Qt.workingColorSpace){if(e=Ea(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ao(o,r,e+1/3),this.g=Ao(o,r,e),this.b=Ao(o,r,e-1/3)}return Qt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ae){const n=Eh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ae){return Qt.fromWorkingColorSpace(kt.copy(this),e),Math.round(Lt(kt.r*255,0,255))*65536+Math.round(Lt(kt.g*255,0,255))*256+Math.round(Lt(kt.b*255,0,255))}getHexString(e=Ae){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qt.workingColorSpace){Qt.fromWorkingColorSpace(kt.copy(this),t);const n=kt.r,i=kt.g,r=kt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Ae){Qt.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,i=kt.b;return e!==Ae?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(pn),pn.h+=e,pn.s+=t,pn.l+=n,this.setHSL(pn.h,pn.s,pn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pn),e.getHSL(dr);const n=Ns(pn.h,dr.h,t),i=Ns(pn.s,dr.s,t),r=Ns(pn.l,dr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Ne;Ne.NAMES=Eh;class it extends hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new C,ur=new pe;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ta,this.updateRange={offset:0,count:-1},this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXY(t,ur.x,ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ta&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Th extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ah extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class rt extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yu=0;const nn=new Be,Ro=new ut,Ui=new C,Jt=new Bn,bs=new Bn,Rt=new C;class Dt extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=cn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mh(e)?Ah:Th)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return Ro.lookAt(e),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(Jt.min,bs.min),Jt.expandByPoint(Rt),Rt.addVectors(Jt.max,bs.max),Jt.expandByPoint(Rt)):(Jt.expandByPoint(bs.min),Jt.expandByPoint(bs.max))}Jt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Rt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Rt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Rt.fromBufferAttribute(a,c),l&&(Ui.fromBufferAttribute(e,c),Rt.add(Ui)),i=Math.max(i,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new C,h[w]=new C;const d=new C,u=new C,f=new C,g=new pe,_=new pe,m=new pe,p=new C,y=new C;function x(w,G,O){d.fromArray(i,w*3),u.fromArray(i,G*3),f.fromArray(i,O*3),g.fromArray(o,w*2),_.fromArray(o,G*2),m.fromArray(o,O*2),u.sub(d),f.sub(d),_.sub(g),m.sub(g);const I=1/(_.x*m.y-m.x*_.y);isFinite(I)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(I),y.copy(f).multiplyScalar(_.x).addScaledVector(u,-m.x).multiplyScalar(I),c[w].add(p),c[G].add(p),c[O].add(p),h[w].add(y),h[G].add(y),h[O].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let w=0,G=v.length;w<G;++w){const O=v[w],I=O.start,D=O.count;for(let H=I,K=I+D;H<K;H+=3)x(n[H+0],n[H+1],n[H+2])}const b=new C,E=new C,R=new C,P=new C;function M(w){R.fromArray(r,w*3),P.copy(R);const G=c[w];b.copy(G),b.sub(R.multiplyScalar(R.dot(G))).normalize(),E.crossVectors(P,G);const I=E.dot(h[w])<0?-1:1;l[w*4]=b.x,l[w*4+1]=b.y,l[w*4+2]=b.z,l[w*4+3]=I}for(let w=0,G=v.length;w<G;++w){const O=v[w],I=O.start,D=O.count;for(let H=I,K=I+D;H<K;H+=3)M(n[H+0]),M(n[H+1]),M(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,d=new C;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Yt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xl=new Be,oi=new Zs,fr=new Mn,Yl=new C,Oi=new C,Fi=new C,ki=new C,Co=new C,pr=new C,mr=new pe,gr=new pe,_r=new pe,ql=new C,jl=new C,$l=new C,xr=new C,vr=new C;class F extends ut{constructor(e=new Dt,t=new it){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Co.fromBufferAttribute(d,e),o?pr.addScaledVector(Co,h):pr.addScaledVector(Co.sub(t),h))}t.add(pr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(r),oi.copy(e.ray).recast(e.near),!(fr.containsPoint(oi.origin)===!1&&(oi.intersectSphere(fr,Yl)===null||oi.origin.distanceToSquared(Yl)>(e.far-e.near)**2))&&(Xl.copy(r).invert(),oi.copy(e.ray).applyMatrix4(Xl),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,oi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,b=x;v<b;v+=3){const E=a.getX(v),R=a.getX(v+1),P=a.getX(v+2);i=yr(this,p,e,n,c,h,d,E,R,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);i=yr(this,o,e,n,c,h,d,y,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,b=x;v<b;v+=3){const E=v,R=v+1,P=v+2;i=yr(this,p,e,n,c,h,d,E,R,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,x=m+1,v=m+2;i=yr(this,o,e,n,c,h,d,y,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function qu(s,e,t,n,i,r,o,a){let l;if(e.side===$t?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Fn,a),l===null)return null;vr.copy(a),vr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(vr);return c<t.near||c>t.far?null:{distance:c,point:vr.clone(),object:s}}function yr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Oi),s.getVertexPosition(l,Fi),s.getVertexPosition(c,ki);const h=qu(s,e,t,n,Oi,Fi,ki,xr);if(h){i&&(mr.fromBufferAttribute(i,a),gr.fromBufferAttribute(i,l),_r.fromBufferAttribute(i,c),h.uv=on.getInterpolation(xr,Oi,Fi,ki,mr,gr,_r,new pe)),r&&(mr.fromBufferAttribute(r,a),gr.fromBufferAttribute(r,l),_r.fromBufferAttribute(r,c),h.uv1=on.getInterpolation(xr,Oi,Fi,ki,mr,gr,_r,new pe),h.uv2=h.uv1),o&&(ql.fromBufferAttribute(o,a),jl.fromBufferAttribute(o,l),$l.fromBufferAttribute(o,c),h.normal=on.getInterpolation(xr,Oi,Fi,ki,ql,jl,$l,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new C,materialIndex:0};on.getNormal(Oi,Fi,ki,d.normal),h.face=d}return h}class de extends Dt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(d,2));function g(_,m,p,y,x,v,b,E,R,P,M){const w=v/R,G=b/P,O=v/2,I=b/2,D=E/2,H=R+1,K=P+1;let Y=0,Z=0;const Q=new C;for(let J=0;J<K;J++){const U=J*G-I;for(let B=0;B<H;B++){const ie=B*w-O;Q[_]=ie*y,Q[m]=U*x,Q[p]=D,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[p]=E>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(B/R),d.push(1-J/P),Y+=1}}for(let J=0;J<P;J++)for(let U=0;U<R;U++){const B=u+U+H*J,ie=u+U+H*(J+1),re=u+(U+1)+H*(J+1),ee=u+(U+1)+H*J;l.push(B,ie,ee),l.push(ie,re,ee),Z+=6}a.addGroup(f,Z,M),f+=Z,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new de(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Vt(s){const e={};for(let t=0;t<s.length;t++){const n=hs(s[t]);for(const i in n)e[i]=n[i]}return e}function ju(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Rh(s){return s.getRenderTarget()===null?s.outputColorSpace:It}const $u={clone:hs,merge:Vt};var Ku=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ku,this.fragmentShader=Zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=ju(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Aa extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Nn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xt extends Aa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ds*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bi=-90,zi=1;class Ju extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new Xt(Bi,zi,e,t);i.layers=this.layers,this.add(i);const r=new Xt(Bi,zi,e,t);r.layers=this.layers,this.add(r);const o=new Xt(Bi,zi,e,t);o.layers=this.layers,this.add(o);const a=new Xt(Bi,zi,e,t);a.layers=this.layers,this.add(a);const l=new Xt(Bi,zi,e,t);l.layers=this.layers,this.add(l);const c=new Xt(Bi,zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,r,o,a,l,c]=this.children,h=e.getRenderTarget(),d=e.xr.enabled;e.xr.enabled=!1;const u=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=u,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Ch extends Pt{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:rs,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qu extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Us("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===mi?Ae:gi),this.texture=new Ch(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new de(5,5,5),r=new yi({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:$n});r.uniforms.tEquirect.value=t;const o=new F(i,r),a=t.minFilter;return t.minFilter===_i&&(t.minFilter=Wt),new Ju(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Lo=new C,ef=new C,tf=new qe;class ci{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Lo.subVectors(n,t).cross(ef.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Lo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||tf.getNormalMatrix(e),i=this.coplanarPoint(Lo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new Mn,Mr=new C;class Ra{constructor(e=new ci,t=new ci,n=new ci,i=new ci,r=new ci,o=new ci){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],y=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-r,u-c,m-f,v-p).normalize(),n[1].setComponents(l+r,u+c,m+f,v+p).normalize(),n[2].setComponents(l+o,u+h,m+g,v+y).normalize(),n[3].setComponents(l-o,u-h,m-g,v-y).normalize(),n[4].setComponents(l-a,u-d,m-_,v-x).normalize(),t===Nn)n[5].setComponents(l+a,u+d,m+_,v+x).normalize();else if(t===Gr)n[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Mr.x=i.normal.x>0?e.max.x:e.min.x,Mr.y=i.normal.y>0?e.max.y:e.min.y,Mr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lh(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function nf(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,f=s.createBuffer();s.bindBuffer(h,f),s.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=s.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=s.SHORT;else if(d instanceof Uint32Array)g=s.UNSIGNED_INT;else if(d instanceof Int32Array)g=s.INT;else if(d instanceof Int8Array)g=s.BYTE;else if(d instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,d){const u=h.array,f=h.updateRange;s.bindBuffer(d,c),f.count===-1?s.bufferSubData(d,0,u):(t?s.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):s.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(r(d.buffer,c,h),d.version=c.version)}return{get:o,remove:a,update:l}}class mt extends Dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*u-o;for(let x=0;x<c;x++){const v=x*d-r;g.push(v,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const x=y+c*p,v=y+c*(p+1),b=y+1+c*(p+1),E=y+1+c*p;f.push(x,v,E),f.push(v,b,E)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mt(e.width,e.height,e.widthSegments,e.heightSegments)}}var sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rf=`#ifdef USE_ALPHAHASH
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
#endif`,of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,af=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mf=`#ifdef USE_IRIDESCENCE
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
#endif`,gf=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ef=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
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
} // validated`,Tf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Af=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,If="gl_FragColor = linearToOutputTexel( gl_FragColor );",Df=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Of=`#ifdef USE_ENVMAP
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
#endif`,Ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vf=`#ifdef USE_GRADIENTMAP
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
}`,Wf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Xf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,Kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ep=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,tp=`struct PhysicalMaterial {
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,np=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ip=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,rp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,op=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,lp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,cp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,up=`#if defined( USE_POINTS_UV )
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
#endif`,fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gp=`#ifdef USE_MORPHNORMALS
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
#endif`,_p=`#ifdef USE_MORPHTARGETS
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
#endif`,xp=`#ifdef USE_MORPHTARGETS
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
#endif`,vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wp=`#ifdef USE_NORMALMAP
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
#endif`,Ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zp=`float getShadowMask() {
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
}`,Hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wp=`#ifdef USE_SKINNING
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
#endif`,Xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$p=`#ifdef USE_TRANSMISSION
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
#endif`,Kp=`#ifdef USE_TRANSMISSION
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
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nm=`uniform sampler2D t2D;
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
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
}`,lm=`#if DEPTH_PACKING == 3200
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
}`,cm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,hm=`#define DISTANCE
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
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`uniform float scale;
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
}`,pm=`uniform vec3 diffuse;
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
}`,mm=`#include <common>
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
}`,gm=`uniform vec3 diffuse;
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
}`,_m=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,xm=`#define LAMBERT
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
}`,vm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,ym=`#define MATCAP
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
}`,Mm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,Sm=`#define NORMAL
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
}`,bm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,wm=`#define PHONG
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
}`,Em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
}`,Tm=`#define STANDARD
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
}`,Rm=`#define TOON
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
}`,Cm=`uniform float size;
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Pm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
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
}`,Im=`uniform vec3 color;
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
}`,Dm=`uniform float rotation;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:sf,alphahash_pars_fragment:rf,alphamap_fragment:of,alphamap_pars_fragment:af,alphatest_fragment:lf,alphatest_pars_fragment:cf,aomap_fragment:hf,aomap_pars_fragment:df,begin_vertex:uf,beginnormal_vertex:ff,bsdfs:pf,iridescence_fragment:mf,bumpmap_pars_fragment:gf,clipping_planes_fragment:_f,clipping_planes_pars_fragment:xf,clipping_planes_pars_vertex:vf,clipping_planes_vertex:yf,color_fragment:Mf,color_pars_fragment:Sf,color_pars_vertex:bf,color_vertex:wf,common:Ef,cube_uv_reflection_fragment:Tf,defaultnormal_vertex:Af,displacementmap_pars_vertex:Rf,displacementmap_vertex:Cf,emissivemap_fragment:Lf,emissivemap_pars_fragment:Pf,colorspace_fragment:If,colorspace_pars_fragment:Df,envmap_fragment:Nf,envmap_common_pars_fragment:Uf,envmap_pars_fragment:Of,envmap_pars_vertex:Ff,envmap_physical_pars_fragment:$f,envmap_vertex:kf,fog_vertex:Bf,fog_pars_vertex:zf,fog_fragment:Hf,fog_pars_fragment:Gf,gradientmap_pars_fragment:Vf,lightmap_fragment:Wf,lightmap_pars_fragment:Xf,lights_lambert_fragment:Yf,lights_lambert_pars_fragment:qf,lights_pars_begin:jf,lights_toon_fragment:Kf,lights_toon_pars_fragment:Zf,lights_phong_fragment:Jf,lights_phong_pars_fragment:Qf,lights_physical_fragment:ep,lights_physical_pars_fragment:tp,lights_fragment_begin:np,lights_fragment_maps:ip,lights_fragment_end:sp,logdepthbuf_fragment:rp,logdepthbuf_pars_fragment:op,logdepthbuf_pars_vertex:ap,logdepthbuf_vertex:lp,map_fragment:cp,map_pars_fragment:hp,map_particle_fragment:dp,map_particle_pars_fragment:up,metalnessmap_fragment:fp,metalnessmap_pars_fragment:pp,morphcolor_vertex:mp,morphnormal_vertex:gp,morphtarget_pars_vertex:_p,morphtarget_vertex:xp,normal_fragment_begin:vp,normal_fragment_maps:yp,normal_pars_fragment:Mp,normal_pars_vertex:Sp,normal_vertex:bp,normalmap_pars_fragment:wp,clearcoat_normal_fragment_begin:Ep,clearcoat_normal_fragment_maps:Tp,clearcoat_pars_fragment:Ap,iridescence_pars_fragment:Rp,opaque_fragment:Cp,packing:Lp,premultiplied_alpha_fragment:Pp,project_vertex:Ip,dithering_fragment:Dp,dithering_pars_fragment:Np,roughnessmap_fragment:Up,roughnessmap_pars_fragment:Op,shadowmap_pars_fragment:Fp,shadowmap_pars_vertex:kp,shadowmap_vertex:Bp,shadowmask_pars_fragment:zp,skinbase_vertex:Hp,skinning_pars_vertex:Gp,skinning_vertex:Vp,skinnormal_vertex:Wp,specularmap_fragment:Xp,specularmap_pars_fragment:Yp,tonemapping_fragment:qp,tonemapping_pars_fragment:jp,transmission_fragment:$p,transmission_pars_fragment:Kp,uv_pars_fragment:Zp,uv_pars_vertex:Jp,uv_vertex:Qp,worldpos_vertex:em,background_vert:tm,background_frag:nm,backgroundCube_vert:im,backgroundCube_frag:sm,cube_vert:rm,cube_frag:om,depth_vert:am,depth_frag:lm,distanceRGBA_vert:cm,distanceRGBA_frag:hm,equirect_vert:dm,equirect_frag:um,linedashed_vert:fm,linedashed_frag:pm,meshbasic_vert:mm,meshbasic_frag:gm,meshlambert_vert:_m,meshlambert_frag:xm,meshmatcap_vert:vm,meshmatcap_frag:ym,meshnormal_vert:Mm,meshnormal_frag:Sm,meshphong_vert:bm,meshphong_frag:wm,meshphysical_vert:Em,meshphysical_frag:Tm,meshtoon_vert:Am,meshtoon_frag:Rm,points_vert:Cm,points_frag:Lm,shadow_vert:Pm,shadow_frag:Im,sprite_vert:Dm,sprite_frag:Nm},me={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},_n={basic:{uniforms:Vt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Vt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Vt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Vt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Vt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Vt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Vt([me.points,me.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Vt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Vt([me.common,me.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Vt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Vt([me.sprite,me.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Vt([me.common,me.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Vt([me.lights,me.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};_n.physical={uniforms:Vt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Sr={r:0,b:0,g:0};function Um(s,e,t,n,i,r,o){const a=new Ne(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(m,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),y=!0);const v=s.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Yr)?(h===void 0&&(h=new F(new de(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:hs(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=x.colorSpace!==Ae,(d!==x||u!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new F(new mt(2,2),new yi({name:"BackgroundMaterial",uniforms:hs(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=x.colorSpace!==Ae,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Sr,Rh(s)),n.buffers.color.setClear(Sr.r,Sr.g,Sr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Om(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let c=l,h=!1;function d(D,H,K,Y,Z){let Q=!1;if(o){const J=_(Y,K,H);c!==J&&(c=J,f(c.object)),Q=p(D,Y,K,Z),Q&&y(D,Y,K,Z)}else{const J=H.wireframe===!0;(c.geometry!==Y.id||c.program!==K.id||c.wireframe!==J)&&(c.geometry=Y.id,c.program=K.id,c.wireframe=J,Q=!0)}Z!==null&&t.update(Z,s.ELEMENT_ARRAY_BUFFER),(Q||h)&&(h=!1,P(D,H,K,Y),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(D){return n.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,H,K){const Y=K.wireframe===!0;let Z=a[D.id];Z===void 0&&(Z={},a[D.id]=Z);let Q=Z[H.id];Q===void 0&&(Q={},Z[H.id]=Q);let J=Q[Y];return J===void 0&&(J=m(u()),Q[Y]=J),J}function m(D){const H=[],K=[],Y=[];for(let Z=0;Z<i;Z++)H[Z]=0,K[Z]=0,Y[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:Y,object:D,attributes:{},index:null}}function p(D,H,K,Y){const Z=c.attributes,Q=H.attributes;let J=0;const U=K.getAttributes();for(const B in U)if(U[B].location>=0){const re=Z[B];let ee=Q[B];if(ee===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),re===void 0||re.attribute!==ee||ee&&re.data!==ee.data)return!0;J++}return c.attributesNum!==J||c.index!==Y}function y(D,H,K,Y){const Z={},Q=H.attributes;let J=0;const U=K.getAttributes();for(const B in U)if(U[B].location>=0){let re=Q[B];re===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(re=D.instanceColor));const ee={};ee.attribute=re,re&&re.data&&(ee.data=re.data),Z[B]=ee,J++}c.attributes=Z,c.attributesNum=J,c.index=Y}function x(){const D=c.newAttributes;for(let H=0,K=D.length;H<K;H++)D[H]=0}function v(D){b(D,0)}function b(D,H){const K=c.newAttributes,Y=c.enabledAttributes,Z=c.attributeDivisors;K[D]=1,Y[D]===0&&(s.enableVertexAttribArray(D),Y[D]=1),Z[D]!==H&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,H),Z[D]=H)}function E(){const D=c.newAttributes,H=c.enabledAttributes;for(let K=0,Y=H.length;K<Y;K++)H[K]!==D[K]&&(s.disableVertexAttribArray(K),H[K]=0)}function R(D,H,K,Y,Z,Q,J){J===!0?s.vertexAttribIPointer(D,H,K,Z,Q):s.vertexAttribPointer(D,H,K,Y,Z,Q)}function P(D,H,K,Y){if(n.isWebGL2===!1&&(D.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const Z=Y.attributes,Q=K.getAttributes(),J=H.defaultAttributeValues;for(const U in Q){const B=Q[U];if(B.location>=0){let ie=Z[U];if(ie===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor)),ie!==void 0){const re=ie.normalized,ee=ie.itemSize,Me=t.get(ie);if(Me===void 0)continue;const ve=Me.buffer,xe=Me.type,Ee=Me.bytesPerElement,ze=n.isWebGL2===!0&&(xe===s.INT||xe===s.UNSIGNED_INT||ie.gpuType===uh);if(ie.isInterleavedBufferAttribute){const Ce=ie.data,N=Ce.stride,Qe=ie.offset;if(Ce.isInstancedInterleavedBuffer){for(let se=0;se<B.locationSize;se++)b(B.location+se,Ce.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let se=0;se<B.locationSize;se++)v(B.location+se);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let se=0;se<B.locationSize;se++)R(B.location+se,ee/B.locationSize,xe,re,N*Ee,(Qe+ee/B.locationSize*se)*Ee,ze)}else{if(ie.isInstancedBufferAttribute){for(let Ce=0;Ce<B.locationSize;Ce++)b(B.location+Ce,ie.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ce=0;Ce<B.locationSize;Ce++)v(B.location+Ce);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let Ce=0;Ce<B.locationSize;Ce++)R(B.location+Ce,ee/B.locationSize,xe,re,ee*Ee,ee/B.locationSize*Ce*Ee,ze)}}else if(J!==void 0){const re=J[U];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(B.location,re);break;case 3:s.vertexAttrib3fv(B.location,re);break;case 4:s.vertexAttrib4fv(B.location,re);break;default:s.vertexAttrib1fv(B.location,re)}}}}E()}function M(){O();for(const D in a){const H=a[D];for(const K in H){const Y=H[K];for(const Z in Y)g(Y[Z].object),delete Y[Z];delete H[K]}delete a[D]}}function w(D){if(a[D.id]===void 0)return;const H=a[D.id];for(const K in H){const Y=H[K];for(const Z in Y)g(Y[Z].object),delete Y[Z];delete H[K]}delete a[D.id]}function G(D){for(const H in a){const K=a[H];if(K[D.id]===void 0)continue;const Y=K[D.id];for(const Z in Y)g(Y[Z].object),delete Y[Z];delete K[D.id]}}function O(){I(),h=!0,c!==l&&(c=l,f(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:I,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:G,initAttributes:x,enableAttribute:v,disableUnusedAttributes:E}}function Fm(s,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,h){s.drawArrays(r,c,h),t.update(h,r,1)}function l(c,h,d){if(d===0)return;let u,f;if(i)u=s,f="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[f](r,c,h,d),t.update(h,r,d)}this.setMode=o,this.render=a,this.renderInstances=l}function km(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,v=o||e.has("OES_texture_float"),b=x&&v,E=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:b,maxSamples:E}}function Bm(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ci,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,x=y*4;let v=p.clippingState||null;l.value=v,v=h(g,u,x,f);for(let b=0;b!==x;++b)v[b]=t[b];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)o.copy(d[x]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function zm(s){let e=new WeakMap;function t(o,a){return a===Zo?o.mapping=rs:a===Jo&&(o.mapping=os),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Zo||a===Jo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Qu(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ca extends Aa{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zi=4,Kl=[.125,.215,.35,.446,.526,.582],di=20,Po=new Ca,Zl=new Ne;let Io=null;const hi=(1+Math.sqrt(5))/2,Hi=1/hi,Jl=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,hi,Hi),new C(0,hi,-Hi),new C(Hi,0,hi),new C(-Hi,0,hi),new C(hi,Hi,0),new C(-hi,Hi,0)];class Ql{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Io=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Io),e.scissorTest=!1,br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Io=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Gs,format:ln,colorSpace:It,depthBuffer:!1},i=ec(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ec(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hm(r)),this._blurMaterial=Gm(r,e,t)}return i}_compileMaterial(e){const t=new F(this._lodPlanes[0],e);this._renderer.compile(t,Po)}_sceneToCubeUV(e,t,n,i){const a=new Xt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Zl),h.toneMapping=Kn,h.autoClear=!1;const f=new it({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),g=new F(new de,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Zl),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;br(i,y*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===rs||e.mapping===os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new F(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;br(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Po)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Jl[(i-1)%Jl.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new F(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*di-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):di;m>di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${di}`);const p=[];let y=0;for(let R=0;R<di;++R){const P=R/_,M=Math.exp(-P*P/2);p.push(M),R===0?y+=M:R<m&&(y+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const v=this._sizeLods[i],b=3*v*(i>x-Zi?i-x+Zi:0),E=4*(this._cubeSize-v);br(t,b,E,3*v,2*v),l.setRenderTarget(t),l.render(d,Po)}}function Hm(s){const e=[],t=[],n=[];let i=s;const r=s-Zi+1+Kl.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Zi?l=Kl[o-s+Zi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let E=0;E<f;E++){const R=E%3*2/3-1,P=E>2?0:-1,M=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];y.set(M,_*g*E),x.set(u,m*g*E);const w=[E,E,E,E,E,E];v.set(w,p*g*E)}const b=new Dt;b.setAttribute("position",new Yt(y,_)),b.setAttribute("uv",new Yt(x,m)),b.setAttribute("faceIndex",new Yt(v,p)),e.push(b),i>Zi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ec(s,e,t){const n=new xi(s,e,t);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function br(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Gm(s,e,t){const n=new Float32Array(di),i=new C(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:La(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function tc(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:La(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function nc(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function La(){return`

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
	`}function Vm(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Zo||l===Jo,h=l===rs||l===os;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Ql(s)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Ql(s));const u=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Wm(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Xm(s,e,t,n){const i={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}u.removeEventListener("dispose",o),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let x=0,v=y.length;x<v;x+=3){const b=y[x+0],E=y[x+1],R=y[x+2];u.push(b,E,E,R,R,b)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const b=x+0,E=x+1,R=x+2;u.push(b,E,E,R,R,b)}}else return;const m=new(Mh(u)?Ah:Th)(u,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Ym(s,e,t,n){const i=n.isWebGL2;let r;function o(u){r=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function h(u,f){s.drawElements(r,f,a,u*l),t.update(f,r,1)}function d(u,f,g){if(g===0)return;let _,m;if(i)_=s,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,f,a,u*l,g),t.update(f,r,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}function qm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function jm(s,e){return s[0]-e[0]}function $m(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Km(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new lt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==_){let H=function(){I.dispose(),r.delete(h),h.removeEventListener("dispose",H)};var f=H;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let M=0;x===!0&&(M=1),v===!0&&(M=2),b===!0&&(M=3);let w=h.attributes.position.count*M,G=1;w>e.maxTextureSize&&(G=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const O=new Float32Array(w*G*4*_),I=new wh(O,w,G,_);I.type=Dn,I.needsUpdate=!0;const D=M*4;for(let K=0;K<_;K++){const Y=E[K],Z=R[K],Q=P[K],J=w*G*4*K;for(let U=0;U<Y.count;U++){const B=U*D;x===!0&&(o.fromBufferAttribute(Y,U),O[J+B+0]=o.x,O[J+B+1]=o.y,O[J+B+2]=o.z,O[J+B+3]=0),v===!0&&(o.fromBufferAttribute(Z,U),O[J+B+4]=o.x,O[J+B+5]=o.y,O[J+B+6]=o.z,O[J+B+7]=0),b===!0&&(o.fromBufferAttribute(Q,U),O[J+B+8]=o.x,O[J+B+9]=o.y,O[J+B+10]=o.z,O[J+B+11]=Q.itemSize===4?o.w:1)}}m={count:_,texture:I,size:new pe(w,G)},r.set(h,m),h.addEventListener("dispose",H)}let p=0;for(let x=0;x<u.length;x++)p+=u[x];const y=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",y),d.getUniforms().setValue(s,"morphTargetInfluences",u),d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=u===void 0?0:u.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let v=0;v<g;v++)_[v]=[v,0];n[h.id]=_}for(let v=0;v<g;v++){const b=_[v];b[0]=v,b[1]=u[v]}_.sort($m);for(let v=0;v<8;v++)v<g&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(jm);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let y=0;for(let v=0;v<8;v++){const b=a[v],E=b[0],R=b[1];E!==Number.MAX_SAFE_INTEGER&&R?(m&&h.getAttribute("morphTarget"+v)!==m[E]&&h.setAttribute("morphTarget"+v,m[E]),p&&h.getAttribute("morphNormal"+v)!==p[E]&&h.setAttribute("morphNormal"+v,p[E]),i[v]=R,y+=R):(m&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const x=h.morphTargetsRelative?1:1-y;d.getUniforms().setValue(s,"morphTargetBaseInfluence",x),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Zm(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Ph=new Pt,Ih=new wh,Dh=new Ou,Nh=new Ch,ic=[],sc=[],rc=new Float32Array(16),oc=new Float32Array(9),ac=new Float32Array(4);function ms(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ic[i];if(r===void 0&&(r=new Float32Array(i),ic[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Tt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function At(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function jr(s,e){let t=sc[e];t===void 0&&(t=new Int32Array(e),sc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Jm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Qm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2fv(this.addr,e),At(t,e)}}function eg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;s.uniform3fv(this.addr,e),At(t,e)}}function tg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4fv(this.addr,e),At(t,e)}}function ng(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;ac.set(n),s.uniformMatrix2fv(this.addr,!1,ac),At(t,n)}}function ig(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;oc.set(n),s.uniformMatrix3fv(this.addr,!1,oc),At(t,n)}}function sg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;rc.set(n),s.uniformMatrix4fv(this.addr,!1,rc),At(t,n)}}function rg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function og(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2iv(this.addr,e),At(t,e)}}function ag(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;s.uniform3iv(this.addr,e),At(t,e)}}function lg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4iv(this.addr,e),At(t,e)}}function cg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function hg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2uiv(this.addr,e),At(t,e)}}function dg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;s.uniform3uiv(this.addr,e),At(t,e)}}function ug(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4uiv(this.addr,e),At(t,e)}}function fg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Ph,i)}function pg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Dh,i)}function mg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Nh,i)}function gg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ih,i)}function _g(s){switch(s){case 5126:return Jm;case 35664:return Qm;case 35665:return eg;case 35666:return tg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return og;case 35668:case 35672:return ag;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return dg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}function xg(s,e){s.uniform1fv(this.addr,e)}function vg(s,e){const t=ms(e,this.size,2);s.uniform2fv(this.addr,t)}function yg(s,e){const t=ms(e,this.size,3);s.uniform3fv(this.addr,t)}function Mg(s,e){const t=ms(e,this.size,4);s.uniform4fv(this.addr,t)}function Sg(s,e){const t=ms(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function bg(s,e){const t=ms(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function wg(s,e){const t=ms(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Eg(s,e){s.uniform1iv(this.addr,e)}function Tg(s,e){s.uniform2iv(this.addr,e)}function Ag(s,e){s.uniform3iv(this.addr,e)}function Rg(s,e){s.uniform4iv(this.addr,e)}function Cg(s,e){s.uniform1uiv(this.addr,e)}function Lg(s,e){s.uniform2uiv(this.addr,e)}function Pg(s,e){s.uniform3uiv(this.addr,e)}function Ig(s,e){s.uniform4uiv(this.addr,e)}function Dg(s,e,t){const n=this.cache,i=e.length,r=jr(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ph,r[o])}function Ng(s,e,t){const n=this.cache,i=e.length,r=jr(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Dh,r[o])}function Ug(s,e,t){const n=this.cache,i=e.length,r=jr(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Nh,r[o])}function Og(s,e,t){const n=this.cache,i=e.length,r=jr(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ih,r[o])}function Fg(s){switch(s){case 5126:return xg;case 35664:return vg;case 35665:return yg;case 35666:return Mg;case 35674:return Sg;case 35675:return bg;case 35676:return wg;case 5124:case 35670:return Eg;case 35667:case 35671:return Tg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Lg;case 36295:return Pg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Og}}class kg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=_g(t.type)}}class Bg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Fg(t.type)}}class zg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Do=/(\w+)(\])?(\[|\.)?/g;function lc(s,e){s.seq.push(e),s.map[e.id]=e}function Hg(s,e,t){const n=s.name,i=n.length;for(Do.lastIndex=0;;){const r=Do.exec(n),o=Do.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){lc(t,c===void 0?new kg(a,s,e):new Bg(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new zg(a),lc(t,d)),t=d}}}class Fr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Hg(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function cc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let Gg=0;function Vg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Wg(s){switch(s){case It:return["Linear","( value )"];case Ae:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function hc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Vg(s.getShaderSource(e),o)}else return i}function Xg(s,e){const t=Wg(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Yg(s,e){let t;switch(e){case kd:t="Linear";break;case Bd:t="Reinhard";break;case zd:t="OptimizedCineon";break;case Hd:t="ACESFilmic";break;case Gd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Is).join(`
`)}function jg(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $g(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Is(s){return s!==""}function dc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function sa(s){return s.replace(Kg,Jg)}const Zg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Jg(s,e){let t=Xe[e];if(t===void 0){const n=Zg.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sa(t)}const Qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fc(s){return s.replace(Qg,e0)}function e0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function pc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function t0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===oh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ah?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function n0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case rs:case os:e="ENVMAP_TYPE_CUBE";break;case Yr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function i0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case os:e="ENVMAP_MODE_REFRACTION";break}return e}function s0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Sa:e="ENVMAP_BLENDING_MULTIPLY";break;case Od:e="ENVMAP_BLENDING_MIX";break;case Fd:e="ENVMAP_BLENDING_ADD";break}return e}function r0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function o0(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=t0(t),c=n0(t),h=i0(t),d=s0(t),u=r0(t),f=t.isWebGL2?"":qg(t),g=jg(r),_=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Is).join(`
`),m.length>0&&(m+=`
`),p=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Is).join(`
`),p.length>0&&(p+=`
`)):(m=[pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),p=[f,pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Kn?Yg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Xg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Is).join(`
`)),o=sa(o),o=dc(o,t),o=uc(o,t),a=sa(a),a=dc(a,t),a=uc(a,t),o=fc(o),a=fc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+o,v=y+p+a,b=cc(i,i.VERTEX_SHADER,x),E=cc(i,i.FRAGMENT_SHADER,v);if(i.attachShader(_,b),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),s.debug.checkShaderErrors){const M=i.getProgramInfoLog(_).trim(),w=i.getShaderInfoLog(b).trim(),G=i.getShaderInfoLog(E).trim();let O=!0,I=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,b,E);else{const D=hc(i,b,"vertex"),H=hc(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+D+`
`+H)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(w===""||G==="")&&(I=!1);I&&(this.diagnostics={runnable:O,programLog:M,vertexShader:{log:w,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(b),i.deleteShader(E);let R;this.getUniforms=function(){return R===void 0&&(R=new Fr(i,_)),R};let P;return this.getAttributes=function(){return P===void 0&&(P=$g(i,_)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=E,this}let a0=0;class l0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new c0(e),t.set(e,n)),n}}class c0{constructor(e){this.id=a0++,this.code=e,this.usedTimes=0}}function h0(s,e,t,n,i,r,o){const a=new Ta,l=new l0,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,w,G,O,I){const D=O.fog,H=I.geometry,K=M.isMeshStandardMaterial?O.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||K),Z=Y&&Y.mapping===Yr?Y.image.height:null,Q=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const J=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,U=J!==void 0?J.length:0;let B=0;H.morphAttributes.position!==void 0&&(B=1),H.morphAttributes.normal!==void 0&&(B=2),H.morphAttributes.color!==void 0&&(B=3);let ie,re,ee,Me;if(Q){const ct=_n[Q];ie=ct.vertexShader,re=ct.fragmentShader}else ie=M.vertexShader,re=M.fragmentShader,l.update(M),ee=l.getVertexShaderID(M),Me=l.getFragmentShaderID(M);const ve=s.getRenderTarget(),xe=I.isInstancedMesh===!0,Ee=!!M.map,ze=!!M.matcap,Ce=!!Y,N=!!M.aoMap,Qe=!!M.lightMap,se=!!M.bumpMap,le=!!M.normalMap,_e=!!M.displacementMap,Oe=!!M.emissiveMap,Ie=!!M.metalnessMap,Pe=!!M.roughnessMap,Ye=M.anisotropy>0,et=M.clearcoat>0,tt=M.iridescence>0,A=M.sheen>0,S=M.transmission>0,k=Ye&&!!M.anisotropyMap,oe=et&&!!M.clearcoatMap,ne=et&&!!M.clearcoatNormalMap,ae=et&&!!M.clearcoatRoughnessMap,Se=tt&&!!M.iridescenceMap,ce=tt&&!!M.iridescenceThicknessMap,X=A&&!!M.sheenColorMap,Le=A&&!!M.sheenRoughnessMap,Te=!!M.specularMap,Re=!!M.specularColorMap,be=!!M.specularIntensityMap,te=S&&!!M.transmissionMap,ye=S&&!!M.thicknessMap,fe=!!M.gradientMap,L=!!M.alphaMap,he=M.alphaTest>0,W=!!M.alphaHash,ue=!!M.extensions,ge=!!H.attributes.uv1,Ve=!!H.attributes.uv2,ft=!!H.attributes.uv3;let yt=Kn;return M.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(yt=s.toneMapping),{isWebGL2:h,shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:ie,fragmentShader:re,defines:M.defines,customVertexShaderID:ee,customFragmentShaderID:Me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,instancing:xe,instancingColor:xe&&I.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:It,map:Ee,matcap:ze,envMap:Ce,envMapMode:Ce&&Y.mapping,envMapCubeUVHeight:Z,aoMap:N,lightMap:Qe,bumpMap:se,normalMap:le,displacementMap:u&&_e,emissiveMap:Oe,normalMapObjectSpace:le&&M.normalMapType===nu,normalMapTangentSpace:le&&M.normalMapType===wa,metalnessMap:Ie,roughnessMap:Pe,anisotropy:Ye,anisotropyMap:k,clearcoat:et,clearcoatMap:oe,clearcoatNormalMap:ne,clearcoatRoughnessMap:ae,iridescence:tt,iridescenceMap:Se,iridescenceThicknessMap:ce,sheen:A,sheenColorMap:X,sheenRoughnessMap:Le,specularMap:Te,specularColorMap:Re,specularIntensityMap:be,transmission:S,transmissionMap:te,thicknessMap:ye,gradientMap:fe,opaque:M.transparent===!1&&M.blending===es,alphaMap:L,alphaTest:he,alphaHash:W,combine:M.combine,mapUv:Ee&&_(M.map.channel),aoMapUv:N&&_(M.aoMap.channel),lightMapUv:Qe&&_(M.lightMap.channel),bumpMapUv:se&&_(M.bumpMap.channel),normalMapUv:le&&_(M.normalMap.channel),displacementMapUv:_e&&_(M.displacementMap.channel),emissiveMapUv:Oe&&_(M.emissiveMap.channel),metalnessMapUv:Ie&&_(M.metalnessMap.channel),roughnessMapUv:Pe&&_(M.roughnessMap.channel),anisotropyMapUv:k&&_(M.anisotropyMap.channel),clearcoatMapUv:oe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:X&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(M.sheenRoughnessMap.channel),specularMapUv:Te&&_(M.specularMap.channel),specularColorMapUv:Re&&_(M.specularColorMap.channel),specularIntensityMapUv:be&&_(M.specularIntensityMap.channel),transmissionMapUv:te&&_(M.transmissionMap.channel),thicknessMapUv:ye&&_(M.thicknessMap.channel),alphaMapUv:L&&_(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(le||Ye),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:ge,vertexUv2s:Ve,vertexUv3s:ft,pointsUvs:I.isPoints===!0&&!!H.attributes.uv&&(Ee||L),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:B,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:yt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ee&&M.map.isVideoTexture===!0&&M.map.colorSpace===Ae,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Bt,flipSided:M.side===$t,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ue&&M.extensions.derivatives===!0,extensionFragDepth:ue&&M.extensions.fragDepth===!0,extensionDrawBuffers:ue&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const G in M.defines)w.push(G),w.push(M.defines[G]);return M.isRawShaderMaterial===!1&&(y(w,M),x(w,M),w.push(s.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function y(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function x(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function v(M){const w=g[M.type];let G;if(w){const O=_n[w];G=$u.clone(O.uniforms)}else G=M.uniforms;return G}function b(M,w){let G;for(let O=0,I=c.length;O<I;O++){const D=c[O];if(D.cacheKey===w){G=D,++G.usedTimes;break}}return G===void 0&&(G=new o0(s,w,M,r),c.push(G)),G}function E(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:E,releaseShaderCache:R,programs:c,dispose:P}}function d0(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function u0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function mc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function gc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,u,f,g,_,m){let p=s[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function a(d,u,f,g,_,m){const p=o(d,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(d,u,f,g,_,m){const p=o(d,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||u0),n.length>1&&n.sort(u||mc),i.length>1&&i.sort(u||mc)}function h(){for(let d=e,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function f0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new gc,s.set(n,[o])):i>=r.length?(o=new gc,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function p0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ne};break;case"SpotLight":t={position:new C,direction:new C,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function m0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let g0=0;function _0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function x0(s,e){const t=new p0,n=m0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new C);const r=new C,o=new Be,a=new Be;function l(h,d){let u=0,f=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let _=0,m=0,p=0,y=0,x=0,v=0,b=0,E=0,R=0,P=0;h.sort(_0);const M=d===!0?Math.PI:1;for(let G=0,O=h.length;G<O;G++){const I=h[G],D=I.color,H=I.intensity,K=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=D.r*H*M,f+=D.g*H*M,g+=D.b*H*M;else if(I.isLightProbe)for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(I.sh.coefficients[Z],H);else if(I.isDirectionalLight){const Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity*M),I.castShadow){const Q=I.shadow,J=n.get(I);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,i.directionalShadow[_]=J,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=I.shadow.matrix,v++}i.directional[_]=Z,_++}else if(I.isSpotLight){const Z=t.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(D).multiplyScalar(H*M),Z.distance=K,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,i.spot[p]=Z;const Q=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,Q.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[p]=Q.matrix,I.castShadow){const J=n.get(I);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,i.spotShadow[p]=J,i.spotShadowMap[p]=Y,E++}p++}else if(I.isRectAreaLight){const Z=t.get(I);Z.color.copy(D).multiplyScalar(H),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),i.rectArea[y]=Z,y++}else if(I.isPointLight){const Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity*M),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){const Q=I.shadow,J=n.get(I);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,J.shadowCameraNear=Q.camera.near,J.shadowCameraFar=Q.camera.far,i.pointShadow[m]=J,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=I.shadow.matrix,b++}i.point[m]=Z,m++}else if(I.isHemisphereLight){const Z=t.get(I);Z.skyColor.copy(I.color).multiplyScalar(H*M),Z.groundColor.copy(I.groundColor).multiplyScalar(H*M),i.hemi[x]=Z,x++}}y>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=g;const w=i.hash;(w.directionalLength!==_||w.pointLength!==m||w.spotLength!==p||w.rectAreaLength!==y||w.hemiLength!==x||w.numDirectionalShadows!==v||w.numPointShadows!==b||w.numSpotShadows!==E||w.numSpotMaps!==R)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+R-P,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=P,w.directionalLength=_,w.pointLength=m,w.spotLength=p,w.rectAreaLength=y,w.hemiLength=x,w.numDirectionalShadows=v,w.numPointShadows=b,w.numSpotShadows=E,w.numSpotMaps=R,i.version=g0++)}function c(h,d){let u=0,f=0,g=0,_=0,m=0;const p=d.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){const v=h[y];if(v.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),u++}else if(v.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),g++}else if(v.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),a.identity(),o.copy(v.matrixWorld),o.premultiply(p),a.extractRotation(o),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const b=i.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function _c(s,e){const t=new x0(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function v0(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new _c(s,e),t.set(r,[l])):o>=a.length?(l=new _c(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class y0 extends hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class M0 extends hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const S0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b0=`uniform sampler2D shadow_pass;
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
}`;function w0(s,e,t){let n=new Ra;const i=new pe,r=new pe,o=new lt,a=new y0({depthPacking:tu}),l=new M0,c={},h=t.maxTextureSize,d={[Fn]:$t,[$t]:Fn,[Bt]:Bt},u=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:S0,fragmentShader:b0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Dt;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new F(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oh;let p=this.type;this.render=function(b,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const P=s.getRenderTarget(),M=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),G=s.state;G.setBlending($n),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const O=p!==In&&this.type===In,I=p===In&&this.type!==In;for(let D=0,H=b.length;D<H;D++){const K=b[D],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const Z=Y.getFrameExtents();if(i.multiply(Z),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Z.x),i.x=r.x*Z.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Z.y),i.y=r.y*Z.y,Y.mapSize.y=r.y)),Y.map===null||O===!0||I===!0){const J=this.type!==In?{minFilter:$e,magFilter:$e}:{};Y.map!==null&&Y.map.dispose(),Y.map=new xi(i.x,i.y,J),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const Q=Y.getViewportCount();for(let J=0;J<Q;J++){const U=Y.getViewport(J);o.set(r.x*U.x,r.y*U.y,r.x*U.z,r.y*U.w),G.viewport(o),Y.updateMatrices(K,J),n=Y.getFrustum(),v(E,R,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===In&&y(Y,R),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(P,M,w)};function y(b,E){const R=e.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new xi(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(E,null,R,u,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(E,null,R,f,_,null)}function x(b,E,R,P){let M=null;const w=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)M=w;else if(M=R.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const G=M.uuid,O=E.uuid;let I=c[G];I===void 0&&(I={},c[G]=I);let D=I[O];D===void 0&&(D=M.clone(),I[O]=D),M=D}if(M.visible=E.visible,M.wireframe=E.wireframe,P===In?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:d[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=s.properties.get(M);G.light=R}return M}function v(b,E,R,P,M){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===In)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const O=e.update(b),I=b.material;if(Array.isArray(I)){const D=O.groups;for(let H=0,K=D.length;H<K;H++){const Y=D[H],Z=I[Y.materialIndex];if(Z&&Z.visible){const Q=x(b,Z,P,M);s.renderBufferDirect(R,null,O,Q,b,Y)}}}else if(I.visible){const D=x(b,I,P,M);s.renderBufferDirect(R,null,O,D,b,null)}}const G=b.children;for(let O=0,I=G.length;O<I;O++)v(G[O],E,R,P,M)}}function E0(s,e,t){const n=t.isWebGL2;function i(){let L=!1;const he=new lt;let W=null;const ue=new lt(0,0,0,0);return{setMask:function(ge){W!==ge&&!L&&(s.colorMask(ge,ge,ge,ge),W=ge)},setLocked:function(ge){L=ge},setClear:function(ge,Ve,ft,yt,zn){zn===!0&&(ge*=yt,Ve*=yt,ft*=yt),he.set(ge,Ve,ft,yt),ue.equals(he)===!1&&(s.clearColor(ge,Ve,ft,yt),ue.copy(he))},reset:function(){L=!1,W=null,ue.set(-1,0,0,0)}}}function r(){let L=!1,he=null,W=null,ue=null;return{setTest:function(ge){ge?ve(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(ge){he!==ge&&!L&&(s.depthMask(ge),he=ge)},setFunc:function(ge){if(W!==ge){switch(ge){case Cd:s.depthFunc(s.NEVER);break;case Ld:s.depthFunc(s.ALWAYS);break;case Pd:s.depthFunc(s.LESS);break;case Ko:s.depthFunc(s.LEQUAL);break;case Id:s.depthFunc(s.EQUAL);break;case Dd:s.depthFunc(s.GEQUAL);break;case Nd:s.depthFunc(s.GREATER);break;case Ud:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}W=ge}},setLocked:function(ge){L=ge},setClear:function(ge){ue!==ge&&(s.clearDepth(ge),ue=ge)},reset:function(){L=!1,he=null,W=null,ue=null}}}function o(){let L=!1,he=null,W=null,ue=null,ge=null,Ve=null,ft=null,yt=null,zn=null;return{setTest:function(ct){L||(ct?ve(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(ct){he!==ct&&!L&&(s.stencilMask(ct),he=ct)},setFunc:function(ct,gn,zt){(W!==ct||ue!==gn||ge!==zt)&&(s.stencilFunc(ct,gn,zt),W=ct,ue=gn,ge=zt)},setOp:function(ct,gn,zt){(Ve!==ct||ft!==gn||yt!==zt)&&(s.stencilOp(ct,gn,zt),Ve=ct,ft=gn,yt=zt)},setLocked:function(ct){L=ct},setClear:function(ct){zn!==ct&&(s.clearStencil(ct),zn=ct)},reset:function(){L=!1,he=null,W=null,ue=null,ge=null,Ve=null,ft=null,yt=null,zn=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,d=new WeakMap;let u={},f={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,v=null,b=null,E=null,R=null,P=null,M=!1,w=null,G=null,O=null,I=null,D=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Y=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Z)[1]),K=Y>=1):Z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),K=Y>=2);let Q=null,J={};const U=s.getParameter(s.SCISSOR_BOX),B=s.getParameter(s.VIEWPORT),ie=new lt().fromArray(U),re=new lt().fromArray(B);function ee(L,he,W,ue){const ge=new Uint8Array(4),Ve=s.createTexture();s.bindTexture(L,Ve),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ft=0;ft<W;ft++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(he,0,s.RGBA,1,1,ue,0,s.RGBA,s.UNSIGNED_BYTE,ge):s.texImage2D(he+ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ge);return Ve}const Me={};Me[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Me[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ve(s.DEPTH_TEST),l.setFunc(Ko),_e(!1),Oe(tl),ve(s.CULL_FACE),se($n);function ve(L){u[L]!==!0&&(s.enable(L),u[L]=!0)}function xe(L){u[L]!==!1&&(s.disable(L),u[L]=!1)}function Ee(L,he){return f[L]!==he?(s.bindFramebuffer(L,he),f[L]=he,n&&(L===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=he),L===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=he)),!0):!1}function ze(L,he){let W=_,ue=!1;if(L)if(W=g.get(he),W===void 0&&(W=[],g.set(he,W)),L.isWebGLMultipleRenderTargets){const ge=L.texture;if(W.length!==ge.length||W[0]!==s.COLOR_ATTACHMENT0){for(let Ve=0,ft=ge.length;Ve<ft;Ve++)W[Ve]=s.COLOR_ATTACHMENT0+Ve;W.length=ge.length,ue=!0}}else W[0]!==s.COLOR_ATTACHMENT0&&(W[0]=s.COLOR_ATTACHMENT0,ue=!0);else W[0]!==s.BACK&&(W[0]=s.BACK,ue=!0);ue&&(t.isWebGL2?s.drawBuffers(W):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(W))}function Ce(L){return m!==L?(s.useProgram(L),m=L,!0):!1}const N={[Ki]:s.FUNC_ADD,[xd]:s.FUNC_SUBTRACT,[vd]:s.FUNC_REVERSE_SUBTRACT};if(n)N[sl]=s.MIN,N[rl]=s.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(N[sl]=L.MIN_EXT,N[rl]=L.MAX_EXT)}const Qe={[yd]:s.ZERO,[Md]:s.ONE,[Sd]:s.SRC_COLOR,[lh]:s.SRC_ALPHA,[Rd]:s.SRC_ALPHA_SATURATE,[Td]:s.DST_COLOR,[wd]:s.DST_ALPHA,[bd]:s.ONE_MINUS_SRC_COLOR,[ch]:s.ONE_MINUS_SRC_ALPHA,[Ad]:s.ONE_MINUS_DST_COLOR,[Ed]:s.ONE_MINUS_DST_ALPHA};function se(L,he,W,ue,ge,Ve,ft,yt){if(L===$n){p===!0&&(xe(s.BLEND),p=!1);return}if(p===!1&&(ve(s.BLEND),p=!0),L!==_d){if(L!==y||yt!==M){if((x!==Ki||E!==Ki)&&(s.blendEquation(s.FUNC_ADD),x=Ki,E=Ki),yt)switch(L){case es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zr:s.blendFunc(s.ONE,s.ONE);break;case nl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case il:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case nl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case il:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,b=null,R=null,P=null,y=L,M=yt}return}ge=ge||he,Ve=Ve||W,ft=ft||ue,(he!==x||ge!==E)&&(s.blendEquationSeparate(N[he],N[ge]),x=he,E=ge),(W!==v||ue!==b||Ve!==R||ft!==P)&&(s.blendFuncSeparate(Qe[W],Qe[ue],Qe[Ve],Qe[ft]),v=W,b=ue,R=Ve,P=ft),y=L,M=!1}function le(L,he){L.side===Bt?xe(s.CULL_FACE):ve(s.CULL_FACE);let W=L.side===$t;he&&(W=!W),_e(W),L.blending===es&&L.transparent===!1?se($n):se(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const ue=L.stencilWrite;c.setTest(ue),ue&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Pe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function _e(L){w!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),w=L)}function Oe(L){L!==md?(ve(s.CULL_FACE),L!==G&&(L===tl?s.cullFace(s.BACK):L===gd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),G=L}function Ie(L){L!==O&&(K&&s.lineWidth(L),O=L)}function Pe(L,he,W){L?(ve(s.POLYGON_OFFSET_FILL),(I!==he||D!==W)&&(s.polygonOffset(he,W),I=he,D=W)):xe(s.POLYGON_OFFSET_FILL)}function Ye(L){L?ve(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function et(L){L===void 0&&(L=s.TEXTURE0+H-1),Q!==L&&(s.activeTexture(L),Q=L)}function tt(L,he,W){W===void 0&&(Q===null?W=s.TEXTURE0+H-1:W=Q);let ue=J[W];ue===void 0&&(ue={type:void 0,texture:void 0},J[W]=ue),(ue.type!==L||ue.texture!==he)&&(Q!==W&&(s.activeTexture(W),Q=W),s.bindTexture(L,he||Me[L]),ue.type=L,ue.texture=he)}function A(){const L=J[Q];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(L){ie.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),ie.copy(L))}function be(L){re.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),re.copy(L))}function te(L,he){let W=d.get(he);W===void 0&&(W=new WeakMap,d.set(he,W));let ue=W.get(L);ue===void 0&&(ue=s.getUniformBlockIndex(he,L.name),W.set(L,ue))}function ye(L,he){const ue=d.get(he).get(L);h.get(he)!==ue&&(s.uniformBlockBinding(he,ue,L.__bindingPointIndex),h.set(he,ue))}function fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},Q=null,J={},f={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,v=null,b=null,E=null,R=null,P=null,M=!1,w=null,G=null,O=null,I=null,D=null,ie.set(0,0,s.canvas.width,s.canvas.height),re.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ve,disable:xe,bindFramebuffer:Ee,drawBuffers:ze,useProgram:Ce,setBlending:se,setMaterial:le,setFlipSided:_e,setCullFace:Oe,setLineWidth:Ie,setPolygonOffset:Pe,setScissorTest:Ye,activeTexture:et,bindTexture:tt,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:k,texImage2D:Le,texImage3D:Te,updateUBOMapping:te,uniformBlockBinding:ye,texStorage2D:ce,texStorage3D:X,texSubImage2D:oe,texSubImage3D:ne,compressedTexSubImage2D:ae,compressedTexSubImage3D:Se,scissor:Re,viewport:be,reset:fe}}function T0(s,e,t,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,S){return p?new OffscreenCanvas(A,S):Ws("canvas")}function x(A,S,k,oe){let ne=1;if((A.width>oe||A.height>oe)&&(ne=oe/Math.max(A.width,A.height)),ne<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ae=S?Vr:Math.floor,Se=ae(ne*A.width),ce=ae(ne*A.height);_===void 0&&(_=y(Se,ce));const X=k?y(Se,ce):_;return X.width=Se,X.height=ce,X.getContext("2d").drawImage(A,0,0,Se,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Se+"x"+ce+")."),X}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function v(A){return ia(A.width)&&ia(A.height)}function b(A){return a?!1:A.wrapS!==an||A.wrapT!==an||A.minFilter!==$e&&A.minFilter!==Wt}function E(A,S){return A.generateMipmaps&&S&&A.minFilter!==$e&&A.minFilter!==Wt}function R(A){s.generateMipmap(A)}function P(A,S,k,oe,ne=!1){if(a===!1)return S;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ae=S;return S===s.RED&&(k===s.FLOAT&&(ae=s.R32F),k===s.HALF_FLOAT&&(ae=s.R16F),k===s.UNSIGNED_BYTE&&(ae=s.R8)),S===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(ae=s.R8UI),k===s.UNSIGNED_SHORT&&(ae=s.R16UI),k===s.UNSIGNED_INT&&(ae=s.R32UI),k===s.BYTE&&(ae=s.R8I),k===s.SHORT&&(ae=s.R16I),k===s.INT&&(ae=s.R32I)),S===s.RG&&(k===s.FLOAT&&(ae=s.RG32F),k===s.HALF_FLOAT&&(ae=s.RG16F),k===s.UNSIGNED_BYTE&&(ae=s.RG8)),S===s.RGBA&&(k===s.FLOAT&&(ae=s.RGBA32F),k===s.HALF_FLOAT&&(ae=s.RGBA16F),k===s.UNSIGNED_BYTE&&(ae=oe===Ae&&ne===!1?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(ae=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(ae=s.RGB5_A1)),(ae===s.R16F||ae===s.R32F||ae===s.RG16F||ae===s.RG32F||ae===s.RGBA16F||ae===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function M(A,S,k){return E(A,k)===!0||A.isFramebufferTexture&&A.minFilter!==$e&&A.minFilter!==Wt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){return A===$e||A===Qo||A===Or?s.NEAREST:s.LINEAR}function G(A){const S=A.target;S.removeEventListener("dispose",G),I(S),S.isVideoTexture&&g.delete(S)}function O(A){const S=A.target;S.removeEventListener("dispose",O),H(S)}function I(A){const S=n.get(A);if(S.__webglInit===void 0)return;const k=A.source,oe=m.get(k);if(oe){const ne=oe[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&D(A),Object.keys(oe).length===0&&m.delete(k)}n.remove(A)}function D(A){const S=n.get(A);s.deleteTexture(S.__webglTexture);const k=A.source,oe=m.get(k);delete oe[S.__cacheKey],o.memory.textures--}function H(A){const S=A.texture,k=n.get(A),oe=n.get(S);if(oe.__webglTexture!==void 0&&(s.deleteTexture(oe.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(k.__webglFramebuffer[ne]))for(let ae=0;ae<k.__webglFramebuffer[ne].length;ae++)s.deleteFramebuffer(k.__webglFramebuffer[ne][ae]);else s.deleteFramebuffer(k.__webglFramebuffer[ne]);k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[ne])}else{if(Array.isArray(k.__webglFramebuffer))for(let ne=0;ne<k.__webglFramebuffer.length;ne++)s.deleteFramebuffer(k.__webglFramebuffer[ne]);else s.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ne=0;ne<k.__webglColorRenderbuffer.length;ne++)k.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[ne]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ne=0,ae=S.length;ne<ae;ne++){const Se=n.get(S[ne]);Se.__webglTexture&&(s.deleteTexture(Se.__webglTexture),o.memory.textures--),n.remove(S[ne])}n.remove(S),n.remove(A)}let K=0;function Y(){K=0}function Z(){const A=K;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),K+=1,A}function Q(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function J(A,S){const k=n.get(A);if(A.isVideoTexture&&et(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const oe=A.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(k,A,S);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+S)}function U(A,S){const k=n.get(A);if(A.version>0&&k.__version!==A.version){Ee(k,A,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+S)}function B(A,S){const k=n.get(A);if(A.version>0&&k.__version!==A.version){Ee(k,A,S);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+S)}function ie(A,S){const k=n.get(A);if(A.version>0&&k.__version!==A.version){ze(k,A,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+S)}const re={[kn]:s.REPEAT,[an]:s.CLAMP_TO_EDGE,[Hr]:s.MIRRORED_REPEAT},ee={[$e]:s.NEAREST,[Qo]:s.NEAREST_MIPMAP_NEAREST,[Or]:s.NEAREST_MIPMAP_LINEAR,[Wt]:s.LINEAR,[dh]:s.LINEAR_MIPMAP_NEAREST,[_i]:s.LINEAR_MIPMAP_LINEAR},Me={[su]:s.NEVER,[du]:s.ALWAYS,[ru]:s.LESS,[au]:s.LEQUAL,[ou]:s.EQUAL,[hu]:s.GEQUAL,[lu]:s.GREATER,[cu]:s.NOTEQUAL};function ve(A,S,k){if(k?(s.texParameteri(A,s.TEXTURE_WRAP_S,re[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,re[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,re[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ee[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ee[S.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==an||S.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,w(S.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==$e&&S.minFilter!==Wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===$e||S.minFilter!==Or&&S.minFilter!==_i||S.type===Dn&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Gs&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(A,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function xe(A,S){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",G));const oe=S.source;let ne=m.get(oe);ne===void 0&&(ne={},m.set(oe,ne));const ae=Q(S);if(ae!==A.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ne[ae].usedTimes++;const Se=ne[A.__cacheKey];Se!==void 0&&(ne[A.__cacheKey].usedTimes--,Se.usedTimes===0&&D(S)),A.__cacheKey=ae,A.__webglTexture=ne[ae].texture}return k}function Ee(A,S,k){let oe=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(oe=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(oe=s.TEXTURE_3D);const ne=xe(A,S),ae=S.source;t.bindTexture(oe,A.__webglTexture,s.TEXTURE0+k);const Se=n.get(ae);if(ae.version!==Se.__version||ne===!0){t.activeTexture(s.TEXTURE0+k),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const ce=b(S)&&v(S.image)===!1;let X=x(S.image,ce,!1,h);X=tt(S,X);const Le=v(X)||a,Te=r.convert(S.format,S.colorSpace);let Re=r.convert(S.type),be=P(S.internalFormat,Te,Re,S.colorSpace,S.isVideoTexture);ve(oe,S,Le);let te;const ye=S.mipmaps,fe=a&&S.isVideoTexture!==!0,L=Se.__version===void 0||ne===!0,he=M(S,X,Le);if(S.isDepthTexture)be=s.DEPTH_COMPONENT,a?S.type===Dn?be=s.DEPTH_COMPONENT32F:S.type===jn?be=s.DEPTH_COMPONENT24:S.type===fi?be=s.DEPTH24_STENCIL8:be=s.DEPTH_COMPONENT16:S.type===Dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===pi&&be===s.DEPTH_COMPONENT&&S.type!==ba&&S.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=jn,Re=r.convert(S.type)),S.format===as&&be===s.DEPTH_COMPONENT&&(be=s.DEPTH_STENCIL,S.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=fi,Re=r.convert(S.type))),L&&(fe?t.texStorage2D(s.TEXTURE_2D,1,be,X.width,X.height):t.texImage2D(s.TEXTURE_2D,0,be,X.width,X.height,0,Te,Re,null));else if(S.isDataTexture)if(ye.length>0&&Le){fe&&L&&t.texStorage2D(s.TEXTURE_2D,he,be,ye[0].width,ye[0].height);for(let W=0,ue=ye.length;W<ue;W++)te=ye[W],fe?t.texSubImage2D(s.TEXTURE_2D,W,0,0,te.width,te.height,Te,Re,te.data):t.texImage2D(s.TEXTURE_2D,W,be,te.width,te.height,0,Te,Re,te.data);S.generateMipmaps=!1}else fe?(L&&t.texStorage2D(s.TEXTURE_2D,he,be,X.width,X.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,X.width,X.height,Te,Re,X.data)):t.texImage2D(s.TEXTURE_2D,0,be,X.width,X.height,0,Te,Re,X.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){fe&&L&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,be,ye[0].width,ye[0].height,X.depth);for(let W=0,ue=ye.length;W<ue;W++)te=ye[W],S.format!==ln?Te!==null?fe?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,te.width,te.height,X.depth,Te,te.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,be,te.width,te.height,X.depth,0,te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?t.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,te.width,te.height,X.depth,Te,Re,te.data):t.texImage3D(s.TEXTURE_2D_ARRAY,W,be,te.width,te.height,X.depth,0,Te,Re,te.data)}else{fe&&L&&t.texStorage2D(s.TEXTURE_2D,he,be,ye[0].width,ye[0].height);for(let W=0,ue=ye.length;W<ue;W++)te=ye[W],S.format!==ln?Te!==null?fe?t.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,te.width,te.height,Te,te.data):t.compressedTexImage2D(s.TEXTURE_2D,W,be,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?t.texSubImage2D(s.TEXTURE_2D,W,0,0,te.width,te.height,Te,Re,te.data):t.texImage2D(s.TEXTURE_2D,W,be,te.width,te.height,0,Te,Re,te.data)}else if(S.isDataArrayTexture)fe?(L&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,be,X.width,X.height,X.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,Te,Re,X.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,be,X.width,X.height,X.depth,0,Te,Re,X.data);else if(S.isData3DTexture)fe?(L&&t.texStorage3D(s.TEXTURE_3D,he,be,X.width,X.height,X.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,Te,Re,X.data)):t.texImage3D(s.TEXTURE_3D,0,be,X.width,X.height,X.depth,0,Te,Re,X.data);else if(S.isFramebufferTexture){if(L)if(fe)t.texStorage2D(s.TEXTURE_2D,he,be,X.width,X.height);else{let W=X.width,ue=X.height;for(let ge=0;ge<he;ge++)t.texImage2D(s.TEXTURE_2D,ge,be,W,ue,0,Te,Re,null),W>>=1,ue>>=1}}else if(ye.length>0&&Le){fe&&L&&t.texStorage2D(s.TEXTURE_2D,he,be,ye[0].width,ye[0].height);for(let W=0,ue=ye.length;W<ue;W++)te=ye[W],fe?t.texSubImage2D(s.TEXTURE_2D,W,0,0,Te,Re,te):t.texImage2D(s.TEXTURE_2D,W,be,Te,Re,te);S.generateMipmaps=!1}else fe?(L&&t.texStorage2D(s.TEXTURE_2D,he,be,X.width,X.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Te,Re,X)):t.texImage2D(s.TEXTURE_2D,0,be,Te,Re,X);E(S,Le)&&R(oe),Se.__version=ae.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ze(A,S,k){if(S.image.length!==6)return;const oe=xe(A,S),ne=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+k);const ae=n.get(ne);if(ne.version!==ae.__version||oe===!0){t.activeTexture(s.TEXTURE0+k),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const Se=S.isCompressedTexture||S.image[0].isCompressedTexture,ce=S.image[0]&&S.image[0].isDataTexture,X=[];for(let W=0;W<6;W++)!Se&&!ce?X[W]=x(S.image[W],!1,!0,c):X[W]=ce?S.image[W].image:S.image[W],X[W]=tt(S,X[W]);const Le=X[0],Te=v(Le)||a,Re=r.convert(S.format,S.colorSpace),be=r.convert(S.type),te=P(S.internalFormat,Re,be,S.colorSpace),ye=a&&S.isVideoTexture!==!0,fe=ae.__version===void 0||oe===!0;let L=M(S,Le,Te);ve(s.TEXTURE_CUBE_MAP,S,Te);let he;if(Se){ye&&fe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,L,te,Le.width,Le.height);for(let W=0;W<6;W++){he=X[W].mipmaps;for(let ue=0;ue<he.length;ue++){const ge=he[ue];S.format!==ln?Re!==null?ye?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,ue,0,0,ge.width,ge.height,Re,ge.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,ue,te,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,ue,0,0,ge.width,ge.height,Re,be,ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,ue,te,ge.width,ge.height,0,Re,be,ge.data)}}}else{he=S.mipmaps,ye&&fe&&(he.length>0&&L++,t.texStorage2D(s.TEXTURE_CUBE_MAP,L,te,X[0].width,X[0].height));for(let W=0;W<6;W++)if(ce){ye?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,X[W].width,X[W].height,Re,be,X[W].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,te,X[W].width,X[W].height,0,Re,be,X[W].data);for(let ue=0;ue<he.length;ue++){const Ve=he[ue].image[W].image;ye?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,ue+1,0,0,Ve.width,Ve.height,Re,be,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,ue+1,te,Ve.width,Ve.height,0,Re,be,Ve.data)}}else{ye?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Re,be,X[W]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,te,Re,be,X[W]);for(let ue=0;ue<he.length;ue++){const ge=he[ue];ye?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,ue+1,0,0,Re,be,ge.image[W]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,ue+1,te,Re,be,ge.image[W])}}}E(S,Te)&&R(s.TEXTURE_CUBE_MAP),ae.__version=ne.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ce(A,S,k,oe,ne,ae){const Se=r.convert(k.format,k.colorSpace),ce=r.convert(k.type),X=P(k.internalFormat,Se,ce,k.colorSpace);if(!n.get(S).__hasExternalTextures){const Te=Math.max(1,S.width>>ae),Re=Math.max(1,S.height>>ae);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,ae,X,Te,Re,S.depth,0,Se,ce,null):t.texImage2D(ne,ae,X,Te,Re,0,Se,ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),Ye(S)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,ne,n.get(k).__webglTexture,0,Pe(S)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,oe,ne,n.get(k).__webglTexture,ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function N(A,S,k){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let oe=s.DEPTH_COMPONENT16;if(k||Ye(S)){const ne=S.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Dn?oe=s.DEPTH_COMPONENT32F:ne.type===jn&&(oe=s.DEPTH_COMPONENT24));const ae=Pe(S);Ye(S)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae,oe,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,oe,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,oe,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const oe=Pe(S);k&&Ye(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,s.DEPTH24_STENCIL8,S.width,S.height):Ye(S)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{const oe=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ne=0;ne<oe.length;ne++){const ae=oe[ne],Se=r.convert(ae.format,ae.colorSpace),ce=r.convert(ae.type),X=P(ae.internalFormat,Se,ce,ae.colorSpace),Le=Pe(S);k&&Ye(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,X,S.width,S.height):Ye(S)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le,X,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,X,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Qe(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J(S.depthTexture,0);const oe=n.get(S.depthTexture).__webglTexture,ne=Pe(S);if(S.depthTexture.format===pi)Ye(S)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,oe,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,oe,0);else if(S.depthTexture.format===as)Ye(S)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,oe,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function se(A){const S=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Qe(S.__webglFramebuffer,A)}else if(k){S.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[oe]),S.__webglDepthbuffer[oe]=s.createRenderbuffer(),N(S.__webglDepthbuffer[oe],A,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),N(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function le(A,S,k){const oe=n.get(A);S!==void 0&&Ce(oe.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&se(A)}function _e(A){const S=A.texture,k=n.get(A),oe=n.get(S);A.addEventListener("dispose",O),A.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture()),oe.__version=S.version,o.memory.textures++);const ne=A.isWebGLCubeRenderTarget===!0,ae=A.isWebGLMultipleRenderTargets===!0,Se=v(A)||a;if(ne){k.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ce]=[];for(let X=0;X<S.mipmaps.length;X++)k.__webglFramebuffer[ce][X]=s.createFramebuffer()}else k.__webglFramebuffer[ce]=s.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)k.__webglFramebuffer[ce]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(ae)if(i.drawBuffers){const ce=A.texture;for(let X=0,Le=ce.length;X<Le;X++){const Te=n.get(ce[X]);Te.__webglTexture===void 0&&(Te.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Ye(A)===!1){const ce=ae?S:[S];k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let X=0;X<ce.length;X++){const Le=ce[X];k.__webglColorRenderbuffer[X]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[X]);const Te=r.convert(Le.format,Le.colorSpace),Re=r.convert(Le.type),be=P(Le.internalFormat,Te,Re,Le.colorSpace,A.isXRRenderTarget===!0),te=Pe(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,te,be,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+X,s.RENDERBUFFER,k.__webglColorRenderbuffer[X])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),N(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ne){t.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture),ve(s.TEXTURE_CUBE_MAP,S,Se);for(let ce=0;ce<6;ce++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let X=0;X<S.mipmaps.length;X++)Ce(k.__webglFramebuffer[ce][X],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,X);else Ce(k.__webglFramebuffer[ce],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);E(S,Se)&&R(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){const ce=A.texture;for(let X=0,Le=ce.length;X<Le;X++){const Te=ce[X],Re=n.get(Te);t.bindTexture(s.TEXTURE_2D,Re.__webglTexture),ve(s.TEXTURE_2D,Te,Se),Ce(k.__webglFramebuffer,A,Te,s.COLOR_ATTACHMENT0+X,s.TEXTURE_2D,0),E(Te,Se)&&R(s.TEXTURE_2D)}t.unbindTexture()}else{let ce=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ce=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,oe.__webglTexture),ve(ce,S,Se),a&&S.mipmaps&&S.mipmaps.length>0)for(let X=0;X<S.mipmaps.length;X++)Ce(k.__webglFramebuffer[X],A,S,s.COLOR_ATTACHMENT0,ce,X);else Ce(k.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,ce,0);E(S,Se)&&R(ce),t.unbindTexture()}A.depthBuffer&&se(A)}function Oe(A){const S=v(A)||a,k=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let oe=0,ne=k.length;oe<ne;oe++){const ae=k[oe];if(E(ae,S)){const Se=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ce=n.get(ae).__webglTexture;t.bindTexture(Se,ce),R(Se),t.unbindTexture()}}}function Ie(A){if(a&&A.samples>0&&Ye(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],k=A.width,oe=A.height;let ne=s.COLOR_BUFFER_BIT;const ae=[],Se=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=n.get(A),X=A.isWebGLMultipleRenderTargets===!0;if(X)for(let Le=0;Le<S.length;Le++)t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Le=0;Le<S.length;Le++){ae.push(s.COLOR_ATTACHMENT0+Le),A.depthBuffer&&ae.push(Se);const Te=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Te===!1&&(A.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),X&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ce.__webglColorRenderbuffer[Le]),Te===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Se]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Se])),X){const Re=n.get(S[Le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Re,0)}s.blitFramebuffer(0,0,k,oe,0,0,k,oe,ne,s.NEAREST),f&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ae)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),X)for(let Le=0;Le<S.length;Le++){t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,ce.__webglColorRenderbuffer[Le]);const Te=n.get(S[Le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,Te,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Pe(A){return Math.min(d,A.samples)}function Ye(A){const S=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function et(A){const S=o.render.frame;g.get(A)!==S&&(g.set(A,S),A.update())}function tt(A,S){const k=A.colorSpace,oe=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===na||k!==It&&k!==gi&&(k===Ae||k===qr?a===!1?e.has("EXT_sRGB")===!0&&oe===ln?(A.format=na,A.minFilter=Wt,A.generateMipmaps=!1):S=Sh.sRGBToLinear(S):(oe!==ln||ne!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}this.allocateTextureUnit=Z,this.resetTextureUnits=Y,this.setTexture2D=J,this.setTexture2DArray=U,this.setTexture3D=B,this.setTextureCube=ie,this.rebindTextures=le,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Ye}const A0=0,wt=1;function R0(s,e,t){const n=t.isWebGL2;function i(r,o=gi){let a;const l=o===Ae||o===qr?wt:A0;if(r===Zn)return s.UNSIGNED_BYTE;if(r===fh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ph)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Vd)return s.BYTE;if(r===Wd)return s.SHORT;if(r===ba)return s.UNSIGNED_SHORT;if(r===uh)return s.INT;if(r===jn)return s.UNSIGNED_INT;if(r===Dn)return s.FLOAT;if(r===Gs)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Xd)return s.ALPHA;if(r===ln)return s.RGBA;if(r===Yd)return s.LUMINANCE;if(r===qd)return s.LUMINANCE_ALPHA;if(r===pi)return s.DEPTH_COMPONENT;if(r===as)return s.DEPTH_STENCIL;if(r===na)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===jd)return s.RED;if(r===mh)return s.RED_INTEGER;if(r===$d)return s.RG;if(r===gh)return s.RG_INTEGER;if(r===_h)return s.RGBA_INTEGER;if(r===oo||r===ao||r===lo||r===co)if(l===wt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===oo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ao)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===lo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===oo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ao)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===lo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===co)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ol||r===al||r===ll||r===cl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ol)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===al)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ll)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===cl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===hl||r===dl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===hl)return l===wt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===dl)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ul||r===fl||r===pl||r===ml||r===gl||r===_l||r===xl||r===vl||r===yl||r===Ml||r===Sl||r===bl||r===wl||r===El)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ul)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fl)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===pl)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ml)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gl)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_l)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xl)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vl)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yl)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ml)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sl)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bl)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wl)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===El)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ho||r===Tl||r===Al)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ho)return l===wt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Tl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Al)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Zd||r===Rl||r===Cl||r===Ll)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ho)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Rl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Cl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ll)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===fi?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class C0 extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dt extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L0={type:"move"};class No{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(L0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class P0 extends Pt{constructor(e,t,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:pi,h!==pi&&h!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===pi&&(n=jn),n===void 0&&h===as&&(n=fi),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$e,this.minFilter=l!==void 0?l:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class I0 extends Ei{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const y=[],x=[],v=new Xt;v.layers.enable(1),v.viewport=new lt;const b=new Xt;b.layers.enable(2),b.viewport=new lt;const E=[v,b],R=new C0;R.layers.enable(1),R.layers.enable(2);let P=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let B=y[U];return B===void 0&&(B=new No,y[U]=B),B.getTargetRaySpace()},this.getControllerGrip=function(U){let B=y[U];return B===void 0&&(B=new No,y[U]=B),B.getGripSpace()},this.getHand=function(U){let B=y[U];return B===void 0&&(B=new No,y[U]=B),B.getHandSpace()};function w(U){const B=x.indexOf(U.inputSource);if(B===-1)return;const ie=y[B];ie!==void 0&&(ie.update(U.inputSource,U.frame,c||o),ie.dispatchEvent({type:U.type,data:U.inputSource}))}function G(){i.removeEventListener("select",w),i.removeEventListener("selectstart",w),i.removeEventListener("selectend",w),i.removeEventListener("squeeze",w),i.removeEventListener("squeezestart",w),i.removeEventListener("squeezeend",w),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",O);for(let U=0;U<y.length;U++){const B=x[U];B!==null&&(x[U]=null,y[U].disconnect(B))}P=null,M=null,e.setRenderTarget(m),f=null,u=null,d=null,i=null,p=null,J.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",w),i.addEventListener("selectstart",w),i.addEventListener("selectend",w),i.addEventListener("squeeze",w),i.addEventListener("squeezestart",w),i.addEventListener("squeezeend",w),i.addEventListener("end",G),i.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,B),i.updateRenderState({baseLayer:f}),p=new xi(f.framebufferWidth,f.framebufferHeight,{format:ln,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let B=null,ie=null,re=null;_.depth&&(re=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,B=_.stencil?as:pi,ie=_.stencil?fi:jn);const ee={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(ee),i.updateRenderState({layers:[u]}),p=new xi(u.textureWidth,u.textureHeight,{format:ln,type:Zn,depthTexture:new P0(u.textureWidth,u.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Me=e.properties.get(p);Me.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),J.setContext(i),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function O(U){for(let B=0;B<U.removed.length;B++){const ie=U.removed[B],re=x.indexOf(ie);re>=0&&(x[re]=null,y[re].disconnect(ie))}for(let B=0;B<U.added.length;B++){const ie=U.added[B];let re=x.indexOf(ie);if(re===-1){for(let Me=0;Me<y.length;Me++)if(Me>=x.length){x.push(ie),re=Me;break}else if(x[Me]===null){x[Me]=ie,re=Me;break}if(re===-1)break}const ee=y[re];ee&&ee.connect(ie)}}const I=new C,D=new C;function H(U,B,ie){I.setFromMatrixPosition(B.matrixWorld),D.setFromMatrixPosition(ie.matrixWorld);const re=I.distanceTo(D),ee=B.projectionMatrix.elements,Me=ie.projectionMatrix.elements,ve=ee[14]/(ee[10]-1),xe=ee[14]/(ee[10]+1),Ee=(ee[9]+1)/ee[5],ze=(ee[9]-1)/ee[5],Ce=(ee[8]-1)/ee[0],N=(Me[8]+1)/Me[0],Qe=ve*Ce,se=ve*N,le=re/(-Ce+N),_e=le*-Ce;B.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(_e),U.translateZ(le),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const Oe=ve+le,Ie=xe+le,Pe=Qe-_e,Ye=se+(re-_e),et=Ee*xe/Ie*Oe,tt=ze*xe/Ie*Oe;U.projectionMatrix.makePerspective(Pe,Ye,et,tt,Oe,Ie),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function K(U,B){B===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(B.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;R.near=b.near=v.near=U.near,R.far=b.far=v.far=U.far,(P!==R.near||M!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),P=R.near,M=R.far);const B=U.parent,ie=R.cameras;K(R,B);for(let re=0;re<ie.length;re++)K(ie[re],B);ie.length===2?H(R,v,b):R.projectionMatrix.copy(v.projectionMatrix),Y(U,R,B)};function Y(U,B,ie){ie===null?U.matrix.copy(B.matrixWorld):(U.matrix.copy(ie.matrixWorld),U.matrix.invert(),U.matrix.multiply(B.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(B.projectionMatrix),U.projectionMatrixInverse.copy(B.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=cs*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(U){l=U,u!==null&&(u.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)};let Z=null;function Q(U,B){if(h=B.getViewerPose(c||o),g=B,h!==null){const ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let re=!1;ie.length!==R.cameras.length&&(R.cameras.length=0,re=!0);for(let ee=0;ee<ie.length;ee++){const Me=ie[ee];let ve=null;if(f!==null)ve=f.getViewport(Me);else{const Ee=d.getViewSubImage(u,Me);ve=Ee.viewport,ee===0&&(e.setRenderTargetTextures(p,Ee.colorTexture,u.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(p))}let xe=E[ee];xe===void 0&&(xe=new Xt,xe.layers.enable(ee),xe.viewport=new lt,E[ee]=xe),xe.matrix.fromArray(Me.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(Me.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(ve.x,ve.y,ve.width,ve.height),ee===0&&(R.matrix.copy(xe.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),re===!0&&R.cameras.push(xe)}}for(let ie=0;ie<y.length;ie++){const re=x[ie],ee=y[ie];re!==null&&ee!==void 0&&ee.update(re,B,c||o)}Z&&Z(U,B),B.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:B}),g=null}const J=new Lh;J.setAnimationLoop(Q),this.setAnimationLoop=function(U){Z=U},this.dispose=function(){}}}function D0(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Rh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$t&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$t&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function N0(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function c(y,x){let v=i[y.id];v===void 0&&(g(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",m));const b=x.program;n.updateUBOMapping(y,b);const E=e.render.frame;r[y.id]!==E&&(u(y),r[y.id]=E)}function h(y){const x=d();y.__bindingPointIndex=x;const v=s.createBuffer(),b=y.__size,E=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,b,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const x=i[y.id],v=y.uniforms,b=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let E=0,R=v.length;E<R;E++){const P=v[E];if(f(P,E,b)===!0){const M=P.__offset,w=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let O=0;O<w.length;O++){const I=w[O],D=_(I);typeof I=="number"?(P.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,M+G,P.__data)):I.isMatrix3?(P.__data[0]=I.elements[0],P.__data[1]=I.elements[1],P.__data[2]=I.elements[2],P.__data[3]=I.elements[0],P.__data[4]=I.elements[3],P.__data[5]=I.elements[4],P.__data[6]=I.elements[5],P.__data[7]=I.elements[0],P.__data[8]=I.elements[6],P.__data[9]=I.elements[7],P.__data[10]=I.elements[8],P.__data[11]=I.elements[0]):(I.toArray(P.__data,G),G+=D.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,M,P.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,x,v){const b=y.value;if(v[x]===void 0){if(typeof b=="number")v[x]=b;else{const E=Array.isArray(b)?b:[b],R=[];for(let P=0;P<E.length;P++)R.push(E[P].clone());v[x]=R}return!0}else if(typeof b=="number"){if(v[x]!==b)return v[x]=b,!0}else{const E=Array.isArray(v[x])?v[x]:[v[x]],R=Array.isArray(b)?b:[b];for(let P=0;P<E.length;P++){const M=E[P];if(M.equals(R[P])===!1)return M.copy(R[P]),!0}}return!1}function g(y){const x=y.uniforms;let v=0;const b=16;let E=0;for(let R=0,P=x.length;R<P;R++){const M=x[R],w={boundary:0,storage:0},G=Array.isArray(M.value)?M.value:[M.value];for(let O=0,I=G.length;O<I;O++){const D=G[O],H=_(D);w.boundary+=H.boundary,w.storage+=H.storage}if(M.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=v,R>0){E=v%b;const O=b-E;E!==0&&O-w.boundary<0&&(v+=b-E,M.__offset=v)}v+=w.storage}return E=v%b,E>0&&(v+=b-E),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class ra{constructor(e={}){const{canvas:t=Tu(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ae,this._useLegacyLights=!1,this.toneMapping=Kn,this.toneMappingExposure=1;const x=this;let v=!1,b=0,E=0,R=null,P=-1,M=null;const w=new lt,G=new lt;let O=null;const I=new Ne(0);let D=0,H=t.width,K=t.height,Y=1,Z=null,Q=null;const J=new lt(0,0,H,K),U=new lt(0,0,H,K);let B=!1;const ie=new Ra;let re=!1,ee=!1,Me=null;const ve=new Be,xe=new pe,Ee=new C,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return R===null?Y:1}let N=n;function Qe(T,z){for(let j=0;j<T.length;j++){const V=T[j],$=t.getContext(V,z);if($!==null)return $}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ma}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",W,!1),t.addEventListener("webglcontextcreationerror",ue,!1),N===null){const z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&z.shift(),N=Qe(z,T),N===null)throw Qe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let se,le,_e,Oe,Ie,Pe,Ye,et,tt,A,S,k,oe,ne,ae,Se,ce,X,Le,Te,Re,be,te,ye;function fe(){se=new Wm(N),le=new km(N,se,e),se.init(le),be=new R0(N,se,le),_e=new E0(N,se,le),Oe=new qm(N),Ie=new d0,Pe=new T0(N,se,_e,Ie,le,be,Oe),Ye=new zm(x),et=new Vm(x),tt=new nf(N,le),te=new Om(N,se,tt,le),A=new Xm(N,tt,Oe,te),S=new Zm(N,A,tt,Oe),Le=new Km(N,le,Pe),Se=new Bm(Ie),k=new h0(x,Ye,et,se,le,te,Se),oe=new D0(x,Ie),ne=new f0,ae=new v0(se,le),X=new Um(x,Ye,et,_e,S,u,l),ce=new w0(x,S,le),ye=new N0(N,Oe,le,_e),Te=new Fm(N,se,Oe,le),Re=new Ym(N,se,Oe,le),Oe.programs=k.programs,x.capabilities=le,x.extensions=se,x.properties=Ie,x.renderLists=ne,x.shadowMap=ce,x.state=_e,x.info=Oe}fe();const L=new I0(x,N);this.xr=L,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(H,K,!1))},this.getSize=function(T){return T.set(H,K)},this.setSize=function(T,z,j=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,K=z,t.width=Math.floor(T*Y),t.height=Math.floor(z*Y),j===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(H*Y,K*Y).floor()},this.setDrawingBufferSize=function(T,z,j){H=T,K=z,Y=j,t.width=Math.floor(T*j),t.height=Math.floor(z*j),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(J)},this.setViewport=function(T,z,j,V){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,z,j,V),_e.viewport(w.copy(J).multiplyScalar(Y).floor())},this.getScissor=function(T){return T.copy(U)},this.setScissor=function(T,z,j,V){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,z,j,V),_e.scissor(G.copy(U).multiplyScalar(Y).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(T){_e.setScissorTest(B=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){Q=T},this.getClearColor=function(T){return T.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor.apply(X,arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha.apply(X,arguments)},this.clear=function(T=!0,z=!0,j=!0){let V=0;if(T){let $=!1;if(R!==null){const we=R.texture.format;$=we===_h||we===gh||we===mh}if($){const we=R.texture.type,De=we===Zn||we===jn||we===ba||we===fi||we===fh||we===ph,Fe=X.getClearColor(),ke=X.getClearAlpha(),je=Fe.r,Ue=Fe.g,We=Fe.b;De?(f[0]=je,f[1]=Ue,f[2]=We,f[3]=ke,N.clearBufferuiv(N.COLOR,0,f)):(g[0]=je,g[1]=Ue,g[2]=We,g[3]=ke,N.clearBufferiv(N.COLOR,0,g))}else V|=N.COLOR_BUFFER_BIT}z&&(V|=N.DEPTH_BUFFER_BIT),j&&(V|=N.STENCIL_BUFFER_BIT),N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",W,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),ne.dispose(),ae.dispose(),Ie.dispose(),Ye.dispose(),et.dispose(),S.dispose(),te.dispose(),ye.dispose(),k.dispose(),L.dispose(),L.removeEventListener("sessionstart",ct),L.removeEventListener("sessionend",gn),Me&&(Me.dispose(),Me=null),zt.stop()};function he(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const T=Oe.autoReset,z=ce.enabled,j=ce.autoUpdate,V=ce.needsUpdate,$=ce.type;fe(),Oe.autoReset=T,ce.enabled=z,ce.autoUpdate=j,ce.needsUpdate=V,ce.type=$}function ue(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ge(T){const z=T.target;z.removeEventListener("dispose",ge),Ve(z)}function Ve(T){ft(T),Ie.remove(T)}function ft(T){const z=Ie.get(T).programs;z!==void 0&&(z.forEach(function(j){k.releaseProgram(j)}),T.isShaderMaterial&&k.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,j,V,$,we){z===null&&(z=ze);const De=$.isMesh&&$.matrixWorld.determinant()<0,Fe=cd(T,z,j,V,$);_e.setMaterial(V,De);let ke=j.index,je=1;if(V.wireframe===!0){if(ke=A.getWireframeAttribute(j),ke===void 0)return;je=2}const Ue=j.drawRange,We=j.attributes.position;let gt=Ue.start*je,xt=(Ue.start+Ue.count)*je;we!==null&&(gt=Math.max(gt,we.start*je),xt=Math.min(xt,(we.start+we.count)*je)),ke!==null?(gt=Math.max(gt,0),xt=Math.min(xt,ke.count)):We!=null&&(gt=Math.max(gt,0),xt=Math.min(xt,We.count));const tn=xt-gt;if(tn<0||tn===1/0)return;te.setup($,V,Fe,j,ke);let wn,Mt=Te;if(ke!==null&&(wn=tt.get(ke),Mt=Re,Mt.setIndex(wn)),$.isMesh)V.wireframe===!0?(_e.setLineWidth(V.wireframeLinewidth*Ce()),Mt.setMode(N.LINES)):Mt.setMode(N.TRIANGLES);else if($.isLine){let Ke=V.linewidth;Ke===void 0&&(Ke=1),_e.setLineWidth(Ke*Ce()),$.isLineSegments?Mt.setMode(N.LINES):$.isLineLoop?Mt.setMode(N.LINE_LOOP):Mt.setMode(N.LINE_STRIP)}else $.isPoints?Mt.setMode(N.POINTS):$.isSprite&&Mt.setMode(N.TRIANGLES);if($.isInstancedMesh)Mt.renderInstances(gt,tn,$.count);else if(j.isInstancedBufferGeometry){const Ke=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,to=Math.min(j.instanceCount,Ke);Mt.renderInstances(gt,tn,to)}else Mt.render(gt,tn)},this.compile=function(T,z){function j(V,$,we){V.transparent===!0&&V.side===Bt&&V.forceSinglePass===!1?(V.side=$t,V.needsUpdate=!0,tr(V,$,we),V.side=Fn,V.needsUpdate=!0,tr(V,$,we),V.side=Bt):tr(V,$,we)}m=ae.get(T),m.init(),y.push(m),T.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(x._useLegacyLights),T.traverse(function(V){const $=V.material;if($)if(Array.isArray($))for(let we=0;we<$.length;we++){const De=$[we];j(De,T,V)}else j($,T,V)}),y.pop(),m=null};let yt=null;function zn(T){yt&&yt(T)}function ct(){zt.stop()}function gn(){zt.start()}const zt=new Lh;zt.setAnimationLoop(zn),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(T){yt=T,L.setAnimationLoop(T),T===null?zt.stop():zt.start()},L.addEventListener("sessionstart",ct),L.addEventListener("sessionend",gn),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(z),z=L.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,z,R),m=ae.get(T,y.length),m.init(),y.push(m),ve.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ie.setFromProjectionMatrix(ve),ee=this.localClippingEnabled,re=Se.init(this.clippingPlanes,ee),_=ne.get(T,p.length),_.init(),p.push(_),ja(T,z,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(Z,Q),this.info.render.frame++,re===!0&&Se.beginShadows();const j=m.state.shadowsArray;if(ce.render(j,T,z),re===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),X.render(_,T),m.setupLights(x._useLegacyLights),z.isArrayCamera){const V=z.cameras;for(let $=0,we=V.length;$<we;$++){const De=V[$];$a(_,T,De,De.viewport)}}else $a(_,T,z);R!==null&&(Pe.updateMultisampleRenderTarget(R),Pe.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(x,T,z),te.resetDefaultState(),P=-1,M=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function ja(T,z,j,V){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ie.intersectsSprite(T)){V&&Ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ve);const De=S.update(T),Fe=T.material;Fe.visible&&_.push(T,De,Fe,j,Ee.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ie.intersectsObject(T))){const De=S.update(T),Fe=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ee.copy(T.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ee.copy(De.boundingSphere.center)),Ee.applyMatrix4(T.matrixWorld).applyMatrix4(ve)),Array.isArray(Fe)){const ke=De.groups;for(let je=0,Ue=ke.length;je<Ue;je++){const We=ke[je],gt=Fe[We.materialIndex];gt&&gt.visible&&_.push(T,De,gt,j,Ee.z,We)}}else Fe.visible&&_.push(T,De,Fe,j,Ee.z,null)}}const we=T.children;for(let De=0,Fe=we.length;De<Fe;De++)ja(we[De],z,j,V)}function $a(T,z,j,V){const $=T.opaque,we=T.transmissive,De=T.transparent;m.setupLightsView(j),re===!0&&Se.setGlobalState(x.clippingPlanes,j),we.length>0&&ld($,we,z,j),V&&_e.viewport(w.copy(V)),$.length>0&&er($,z,j),we.length>0&&er(we,z,j),De.length>0&&er(De,z,j),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function ld(T,z,j,V){const $=le.isWebGL2;Me===null&&(Me=new xi(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")?Gs:Zn,minFilter:_i,samples:$?4:0})),x.getDrawingBufferSize(xe),$?Me.setSize(xe.x,xe.y):Me.setSize(Vr(xe.x),Vr(xe.y));const we=x.getRenderTarget();x.setRenderTarget(Me),x.getClearColor(I),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();const De=x.toneMapping;x.toneMapping=Kn,er(T,j,V),Pe.updateMultisampleRenderTarget(Me),Pe.updateRenderTargetMipmap(Me);let Fe=!1;for(let ke=0,je=z.length;ke<je;ke++){const Ue=z[ke],We=Ue.object,gt=Ue.geometry,xt=Ue.material,tn=Ue.group;if(xt.side===Bt&&We.layers.test(V.layers)){const wn=xt.side;xt.side=$t,xt.needsUpdate=!0,Ka(We,j,V,gt,xt,tn),xt.side=wn,xt.needsUpdate=!0,Fe=!0}}Fe===!0&&(Pe.updateMultisampleRenderTarget(Me),Pe.updateRenderTargetMipmap(Me)),x.setRenderTarget(we),x.setClearColor(I,D),x.toneMapping=De}function er(T,z,j){const V=z.isScene===!0?z.overrideMaterial:null;for(let $=0,we=T.length;$<we;$++){const De=T[$],Fe=De.object,ke=De.geometry,je=V===null?De.material:V,Ue=De.group;Fe.layers.test(j.layers)&&Ka(Fe,z,j,ke,je,Ue)}}function Ka(T,z,j,V,$,we){T.onBeforeRender(x,z,j,V,$,we),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(x,z,j,V,T,we),$.transparent===!0&&$.side===Bt&&$.forceSinglePass===!1?($.side=$t,$.needsUpdate=!0,x.renderBufferDirect(j,z,V,$,T,we),$.side=Fn,$.needsUpdate=!0,x.renderBufferDirect(j,z,V,$,T,we),$.side=Bt):x.renderBufferDirect(j,z,V,$,T,we),T.onAfterRender(x,z,j,V,$,we)}function tr(T,z,j){z.isScene!==!0&&(z=ze);const V=Ie.get(T),$=m.state.lights,we=m.state.shadowsArray,De=$.state.version,Fe=k.getParameters(T,$.state,we,z,j),ke=k.getProgramCacheKey(Fe);let je=V.programs;V.environment=T.isMeshStandardMaterial?z.environment:null,V.fog=z.fog,V.envMap=(T.isMeshStandardMaterial?et:Ye).get(T.envMap||V.environment),je===void 0&&(T.addEventListener("dispose",ge),je=new Map,V.programs=je);let Ue=je.get(ke);if(Ue!==void 0){if(V.currentProgram===Ue&&V.lightsStateVersion===De)return Za(T,Fe),Ue}else Fe.uniforms=k.getUniforms(T),T.onBuild(j,Fe,x),T.onBeforeCompile(Fe,x),Ue=k.acquireProgram(Fe,ke),je.set(ke,Ue),V.uniforms=Fe.uniforms;const We=V.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(We.clippingPlanes=Se.uniform),Za(T,Fe),V.needsLights=dd(T),V.lightsStateVersion=De,V.needsLights&&(We.ambientLightColor.value=$.state.ambient,We.lightProbe.value=$.state.probe,We.directionalLights.value=$.state.directional,We.directionalLightShadows.value=$.state.directionalShadow,We.spotLights.value=$.state.spot,We.spotLightShadows.value=$.state.spotShadow,We.rectAreaLights.value=$.state.rectArea,We.ltc_1.value=$.state.rectAreaLTC1,We.ltc_2.value=$.state.rectAreaLTC2,We.pointLights.value=$.state.point,We.pointLightShadows.value=$.state.pointShadow,We.hemisphereLights.value=$.state.hemi,We.directionalShadowMap.value=$.state.directionalShadowMap,We.directionalShadowMatrix.value=$.state.directionalShadowMatrix,We.spotShadowMap.value=$.state.spotShadowMap,We.spotLightMatrix.value=$.state.spotLightMatrix,We.spotLightMap.value=$.state.spotLightMap,We.pointShadowMap.value=$.state.pointShadowMap,We.pointShadowMatrix.value=$.state.pointShadowMatrix);const gt=Ue.getUniforms(),xt=Fr.seqWithValue(gt.seq,We);return V.currentProgram=Ue,V.uniformsList=xt,Ue}function Za(T,z){const j=Ie.get(T);j.outputColorSpace=z.outputColorSpace,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function cd(T,z,j,V,$){z.isScene!==!0&&(z=ze),Pe.resetTextureUnits();const we=z.fog,De=V.isMeshStandardMaterial?z.environment:null,Fe=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:It,ke=(V.isMeshStandardMaterial?et:Ye).get(V.envMap||De),je=V.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ue=!!j.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),We=!!j.morphAttributes.position,gt=!!j.morphAttributes.normal,xt=!!j.morphAttributes.color;let tn=Kn;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(tn=x.toneMapping);const wn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Mt=wn!==void 0?wn.length:0,Ke=Ie.get(V),to=m.state.lights;if(re===!0&&(ee===!0||T!==M)){const Kt=T===M&&V.id===P;Se.setState(V,T,Kt)}let St=!1;V.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==to.state.version||Ke.outputColorSpace!==Fe||$.isInstancedMesh&&Ke.instancing===!1||!$.isInstancedMesh&&Ke.instancing===!0||$.isSkinnedMesh&&Ke.skinning===!1||!$.isSkinnedMesh&&Ke.skinning===!0||$.isInstancedMesh&&Ke.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ke.instancingColor===!1&&$.instanceColor!==null||Ke.envMap!==ke||V.fog===!0&&Ke.fog!==we||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Se.numPlanes||Ke.numIntersection!==Se.numIntersection)||Ke.vertexAlphas!==je||Ke.vertexTangents!==Ue||Ke.morphTargets!==We||Ke.morphNormals!==gt||Ke.morphColors!==xt||Ke.toneMapping!==tn||le.isWebGL2===!0&&Ke.morphTargetsCount!==Mt)&&(St=!0):(St=!0,Ke.__version=V.version);let ni=Ke.currentProgram;St===!0&&(ni=tr(V,z,$));let Ja=!1,vs=!1,no=!1;const Ht=ni.getUniforms(),ii=Ke.uniforms;if(_e.useProgram(ni.program)&&(Ja=!0,vs=!0,no=!0),V.id!==P&&(P=V.id,vs=!0),Ja||M!==T){Ht.setValue(N,"projectionMatrix",T.projectionMatrix),Ht.setValue(N,"viewMatrix",T.matrixWorldInverse);const Kt=Ht.map.cameraPosition;Kt!==void 0&&Kt.setValue(N,Ee.setFromMatrixPosition(T.matrixWorld)),le.logarithmicDepthBuffer&&Ht.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ht.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,vs=!0,no=!0)}if($.isSkinnedMesh){Ht.setOptional(N,$,"bindMatrix"),Ht.setOptional(N,$,"bindMatrixInverse");const Kt=$.skeleton;Kt&&(le.floatVertexTextures?(Kt.boneTexture===null&&Kt.computeBoneTexture(),Ht.setValue(N,"boneTexture",Kt.boneTexture,Pe),Ht.setValue(N,"boneTextureSize",Kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const io=j.morphAttributes;if((io.position!==void 0||io.normal!==void 0||io.color!==void 0&&le.isWebGL2===!0)&&Le.update($,j,ni),(vs||Ke.receiveShadow!==$.receiveShadow)&&(Ke.receiveShadow=$.receiveShadow,Ht.setValue(N,"receiveShadow",$.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ii.envMap.value=ke,ii.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),vs&&(Ht.setValue(N,"toneMappingExposure",x.toneMappingExposure),Ke.needsLights&&hd(ii,no),we&&V.fog===!0&&oe.refreshFogUniforms(ii,we),oe.refreshMaterialUniforms(ii,V,Y,K,Me),Fr.upload(N,Ke.uniformsList,ii,Pe)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Fr.upload(N,Ke.uniformsList,ii,Pe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ht.setValue(N,"center",$.center),Ht.setValue(N,"modelViewMatrix",$.modelViewMatrix),Ht.setValue(N,"normalMatrix",$.normalMatrix),Ht.setValue(N,"modelMatrix",$.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Kt=V.uniformsGroups;for(let so=0,ud=Kt.length;so<ud;so++)if(le.isWebGL2){const Qa=Kt[so];ye.update(Qa,ni),ye.bind(Qa,ni)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ni}function hd(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function dd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,z,j){Ie.get(T.texture).__webglTexture=z,Ie.get(T.depthTexture).__webglTexture=j;const V=Ie.get(T);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=j===void 0,V.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,z){const j=Ie.get(T);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,j=0){R=T,b=z,E=j;let V=!0,$=null,we=!1,De=!1;if(T){const ke=Ie.get(T);ke.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(N.FRAMEBUFFER,null),V=!1):ke.__webglFramebuffer===void 0?Pe.setupRenderTarget(T):ke.__hasExternalTextures&&Pe.rebindTextures(T,Ie.get(T.texture).__webglTexture,Ie.get(T.depthTexture).__webglTexture);const je=T.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(De=!0);const Ue=Ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ue[z])?$=Ue[z][j]:$=Ue[z],we=!0):le.isWebGL2&&T.samples>0&&Pe.useMultisampledRTT(T)===!1?$=Ie.get(T).__webglMultisampledFramebuffer:Array.isArray(Ue)?$=Ue[j]:$=Ue,w.copy(T.viewport),G.copy(T.scissor),O=T.scissorTest}else w.copy(J).multiplyScalar(Y).floor(),G.copy(U).multiplyScalar(Y).floor(),O=B;if(_e.bindFramebuffer(N.FRAMEBUFFER,$)&&le.drawBuffers&&V&&_e.drawBuffers(T,$),_e.viewport(w),_e.scissor(G),_e.setScissorTest(O),we){const ke=Ie.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+z,ke.__webglTexture,j)}else if(De){const ke=Ie.get(T.texture),je=z||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ke.__webglTexture,j||0,je)}P=-1},this.readRenderTargetPixels=function(T,z,j,V,$,we,De){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe){_e.bindFramebuffer(N.FRAMEBUFFER,Fe);try{const ke=T.texture,je=ke.format,Ue=ke.type;if(je!==ln&&be.convert(je)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ue===Gs&&(se.has("EXT_color_buffer_half_float")||le.isWebGL2&&se.has("EXT_color_buffer_float"));if(Ue!==Zn&&be.convert(Ue)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===Dn&&(le.isWebGL2||se.has("OES_texture_float")||se.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-V&&j>=0&&j<=T.height-$&&N.readPixels(z,j,V,$,be.convert(je),be.convert(Ue),we)}finally{const ke=R!==null?Ie.get(R).__webglFramebuffer:null;_e.bindFramebuffer(N.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(T,z,j=0){const V=Math.pow(2,-j),$=Math.floor(z.image.width*V),we=Math.floor(z.image.height*V);Pe.setTexture2D(z,0),N.copyTexSubImage2D(N.TEXTURE_2D,j,0,0,T.x,T.y,$,we),_e.unbindTexture()},this.copyTextureToTexture=function(T,z,j,V=0){const $=z.image.width,we=z.image.height,De=be.convert(j.format),Fe=be.convert(j.type);Pe.setTexture2D(j,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,j.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,j.unpackAlignment),z.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,V,T.x,T.y,$,we,De,Fe,z.image.data):z.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,V,T.x,T.y,z.mipmaps[0].width,z.mipmaps[0].height,De,z.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,V,T.x,T.y,De,Fe,z.image),V===0&&j.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(T,z,j,V,$=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=T.max.x-T.min.x+1,De=T.max.y-T.min.y+1,Fe=T.max.z-T.min.z+1,ke=be.convert(V.format),je=be.convert(V.type);let Ue;if(V.isData3DTexture)Pe.setTexture3D(V,0),Ue=N.TEXTURE_3D;else if(V.isDataArrayTexture)Pe.setTexture2DArray(V,0),Ue=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment);const We=N.getParameter(N.UNPACK_ROW_LENGTH),gt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),xt=N.getParameter(N.UNPACK_SKIP_PIXELS),tn=N.getParameter(N.UNPACK_SKIP_ROWS),wn=N.getParameter(N.UNPACK_SKIP_IMAGES),Mt=j.isCompressedTexture?j.mipmaps[0]:j.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Mt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Mt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,T.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,T.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,T.min.z),j.isDataTexture||j.isData3DTexture?N.texSubImage3D(Ue,$,z.x,z.y,z.z,we,De,Fe,ke,je,Mt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ue,$,z.x,z.y,z.z,we,De,Fe,ke,Mt.data)):N.texSubImage3D(Ue,$,z.x,z.y,z.z,we,De,Fe,ke,je,Mt),N.pixelStorei(N.UNPACK_ROW_LENGTH,We),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,gt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,xt),N.pixelStorei(N.UNPACK_SKIP_ROWS,tn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,wn),$===0&&V.generateMipmaps&&N.generateMipmap(Ue),_e.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Pe.setTextureCube(T,0):T.isData3DTexture?Pe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Pe.setTexture2DArray(T,0):Pe.setTexture2D(T,0),_e.unbindTexture()},this.resetState=function(){b=0,E=0,R=null,_e.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ae?mi:vh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===mi?Ae:It}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class U0 extends ra{}U0.prototype.isWebGL1Renderer=!0;class Pa{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=n}clone(){return new Pa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class O0 extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Uh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ta,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new C;class Xs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class en extends hn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Gi;const ws=new C,Vi=new C,Wi=new C,Xi=new pe,Es=new pe,Oh=new Be,wr=new C,Ts=new C,Er=new C,xc=new pe,Uo=new pe,vc=new pe;class dn extends ut{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Gi===void 0){Gi=new Dt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Uh(t,5);Gi.setIndex([0,1,2,0,2,3]),Gi.setAttribute("position",new Xs(n,3,0,!1)),Gi.setAttribute("uv",new Xs(n,2,3,!1))}this.geometry=Gi,this.material=e!==void 0?e:new en,this.center=new pe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vi.setFromMatrixScale(this.matrixWorld),Oh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Wi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vi.multiplyScalar(-Wi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Tr(wr.set(-.5,-.5,0),Wi,o,Vi,i,r),Tr(Ts.set(.5,-.5,0),Wi,o,Vi,i,r),Tr(Er.set(.5,.5,0),Wi,o,Vi,i,r),xc.set(0,0),Uo.set(1,0),vc.set(1,1);let a=e.ray.intersectTriangle(wr,Ts,Er,!1,ws);if(a===null&&(Tr(Ts.set(-.5,.5,0),Wi,o,Vi,i,r),Uo.set(0,1),a=e.ray.intersectTriangle(wr,Er,Ts,!1,ws),a===null))return;const l=e.ray.origin.distanceTo(ws);l<e.near||l>e.far||t.push({distance:l,point:ws.clone(),uv:on.getInterpolation(ws,wr,Ts,Er,xc,Uo,vc,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Tr(s,e,t,n,i,r){Xi.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Es.x=r*Xi.x-i*Xi.y,Es.y=i*Xi.x+r*Xi.y):Es.copy(Xi),s.copy(e),s.x+=Es.x,s.y+=Es.y,s.applyMatrix4(Oh)}const yc=new C,Mc=new lt,Sc=new lt,F0=new C,bc=new Be,Yi=new C,Oo=new Mn,wc=new Be,Fo=new Zs;class k0 extends F{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Yi.fromBufferAttribute(t,n),this.applyBoneTransform(n,Yi),this.boundingBox.expandByPoint(Yi)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Yi.fromBufferAttribute(t,n),this.applyBoneTransform(n,Yi),this.boundingSphere.expandByPoint(Yi)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oo.copy(this.boundingSphere),Oo.applyMatrix4(i),e.ray.intersectsSphere(Oo)!==!1&&(wc.copy(i).invert(),Fo.copy(e.ray).applyMatrix4(wc),!(this.boundingBox!==null&&Fo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Mc.fromBufferAttribute(i.attributes.skinIndex,e),Sc.fromBufferAttribute(i.attributes.skinWeight,e),yc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Sc.getComponent(r);if(o!==0){const a=Mc.getComponent(r);bc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(F0.copy(yc).applyMatrix4(bc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Fh extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class B0 extends Pt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=$e,h=$e,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ec=new Be,z0=new Be;class Ia{constructor(e=[],t=[]){this.uuid=cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:z0;Ec.multiplyMatrices(a,t[r]),Ec.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ia(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=yh(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new B0(t,e,e,ln,Dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Fh),this.bones.push(o),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Tc extends Yt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qi=new Be,Ac=new Be,Ar=[],Rc=new Bn,H0=new Be,As=new F,Rs=new Mn;class kh extends F{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,H0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qi),Rc.copy(e.boundingBox).applyMatrix4(qi),this.boundingBox.union(Rc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qi),Rs.copy(e.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(Rs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(As.geometry=this.geometry,As.material=this.material,As.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rs.copy(this.boundingSphere),Rs.applyMatrix4(n),e.ray.intersectsSphere(Rs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,qi),Ac.multiplyMatrices(n,qi),As.matrixWorld=Ac,As.raycast(e,Ar);for(let o=0,a=Ar.length;o<a;o++){const l=Ar[o];l.instanceId=r,l.object=this,t.push(l)}Ar.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Tc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Da extends hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cc=new C,Lc=new C,Pc=new Be,ko=new Zs,Rr=new Mn;class Na extends ut{constructor(e=new Dt,t=new Da){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Cc.fromBufferAttribute(t,i-1),Lc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Cc.distanceTo(Lc);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(i),Rr.radius+=r,e.ray.intersectsSphere(Rr)===!1)return;Pc.copy(i).invert(),ko.copy(e.ray).applyMatrix4(Pc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C,h=new C,d=new C,u=new C,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=p,v=y-1;x<v;x+=f){const b=g.getX(x),E=g.getX(x+1);if(c.fromBufferAttribute(m,b),h.fromBufferAttribute(m,E),ko.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(u);P<e.near||P>e.far||t.push({distance:P,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let x=p,v=y-1;x<v;x+=f){if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),ko.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(u);E<e.near||E>e.far||t.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Ic=new C,Dc=new C;class Bh extends Na{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ic.fromBufferAttribute(t,i),Dc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ic.distanceTo(Dc);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class G0 extends Na{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class zh extends hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nc=new Be,oa=new Zs,Cr=new Mn,Lr=new C;class V0 extends ut{constructor(e=new Dt,t=new zh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(i),Cr.radius+=r,e.ray.intersectsSphere(Cr)===!1)return;Nc.copy(i).invert(),oa.copy(e.ray).applyMatrix4(Nc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,_=f;g<_;g++){const m=c.getX(g);Lr.fromBufferAttribute(d,m),Uc(Lr,m,l,i,e,t,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,_=f;g<_;g++)Lr.fromBufferAttribute(d,g),Uc(Lr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Uc(s,e,t,n,i,r,o){const a=oa.distanceSqToPoint(s);if(a<t){const l=new C;oa.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class st extends Pt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new pe:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new C,i=[],r=[],o=[],a=new C,l=new Be;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Lt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Lt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ua extends Sn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new pe,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class W0 extends Ua{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Oa(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Pr=new C,Bo=new Oa,zo=new Oa,Ho=new Oa;class X0 extends Sn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Pr.subVectors(i[0],i[1]).add(i[0]),c=Pr);const d=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Pr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Pr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Bo.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,_,m),zo.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,_,m),Ho.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Bo.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),zo.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Ho.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Bo.calc(l),zo.calc(l),Ho.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Oc(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Y0(s,e){const t=1-s;return t*t*e}function q0(s,e){return 2*(1-s)*s*e}function j0(s,e){return s*s*e}function Os(s,e,t,n){return Y0(s,e)+q0(s,t)+j0(s,n)}function $0(s,e){const t=1-s;return t*t*t*e}function K0(s,e){const t=1-s;return 3*t*t*s*e}function Z0(s,e){return 3*(1-s)*s*s*e}function J0(s,e){return s*s*s*e}function Fs(s,e,t,n,i){return $0(s,e)+K0(s,t)+Z0(s,n)+J0(s,i)}class Hh extends Sn{constructor(e=new pe,t=new pe,n=new pe,i=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new pe){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fs(e,i.x,r.x,o.x,a.x),Fs(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Q0 extends Sn{constructor(e=new C,t=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new C){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fs(e,i.x,r.x,o.x,a.x),Fs(e,i.y,r.y,o.y,a.y),Fs(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fa extends Sn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class e_ extends Sn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gh extends Sn{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Os(e,i.x,r.x,o.x),Os(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class t_ extends Sn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Os(e,i.x,r.x,o.x),Os(e,i.y,r.y,o.y),Os(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vh extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Oc(a,l.x,c.x,h.x,d.x),Oc(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new pe().fromArray(i))}return this}}var n_=Object.freeze({__proto__:null,ArcCurve:W0,CatmullRomCurve3:X0,CubicBezierCurve:Hh,CubicBezierCurve3:Q0,EllipseCurve:Ua,LineCurve:Fa,LineCurve3:e_,QuadraticBezierCurve:Gh,QuadraticBezierCurve3:t_,SplineCurve:Vh});class i_ extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Fa(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new n_[i.type]().fromJSON(i))}return this}}class Fc extends i_{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Fa(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Gh(this.currentPoint.clone(),new pe(e,t),new pe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Hh(this.currentPoint.clone(),new pe(e,t),new pe(n,i),new pe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Vh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new Ua(e,t,n,i,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ui extends Dt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new C,h=new pe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=n+d/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(a,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ot extends Dt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new rt(d,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(f,2));function y(){const v=new C,b=new C;let E=0;const R=(t-e)/n;for(let P=0;P<=r;P++){const M=[],w=P/r,G=w*(t-e)+e;for(let O=0;O<=i;O++){const I=O/i,D=I*l+a,H=Math.sin(D),K=Math.cos(D);b.x=G*H,b.y=-w*n+m,b.z=G*K,d.push(b.x,b.y,b.z),v.set(H,R,K).normalize(),u.push(v.x,v.y,v.z),f.push(I,1-w),M.push(g++)}_.push(M)}for(let P=0;P<i;P++)for(let M=0;M<r;M++){const w=_[M][P],G=_[M+1][P],O=_[M+1][P+1],I=_[M][P+1];h.push(w,G,I),h.push(G,O,I),E+=6}c.addGroup(p,E,0),p+=E}function x(v){const b=g,E=new pe,R=new C;let P=0;const M=v===!0?e:t,w=v===!0?1:-1;for(let O=1;O<=i;O++)d.push(0,m*w,0),u.push(0,w,0),f.push(.5,.5),g++;const G=g;for(let O=0;O<=i;O++){const D=O/i*l+a,H=Math.cos(D),K=Math.sin(D);R.x=M*K,R.y=m*w,R.z=M*H,d.push(R.x,R.y,R.z),u.push(0,w,0),E.x=H*.5+.5,E.y=K*.5*w+.5,f.push(E.x,E.y),g++}for(let O=0;O<i;O++){const I=b+O,D=G+O;v===!0?h.push(D,D+1,I):h.push(D+1,D,I),P+=3}c.addGroup(p,P,v===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ot(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ys extends Ot{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ys(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class aa extends Fc{constructor(e){super(e),this.uuid=cn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Fc().fromJSON(i))}return this}}const s_={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Wh(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,u,f;if(n&&(r=c_(s,e,r,t)),s.length>80*t){a=c=s[0],l=h=s[1];for(let g=t;g<i;g+=t)d=s[g],u=s[g+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return qs(r,o,t,a,l,f,0),o}};function Wh(s,e,t,n,i){let r,o;if(i===y_(s,e,t,n)>0)for(r=e;r<t;r+=n)o=kc(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=kc(r,s[r],s[r+1],o);return o&&$r(o,o.next)&&($s(o),o=o.next),o}function Mi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&($r(t,t.next)||pt(t.prev,t,t.next)===0)){if($s(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function qs(s,e,t,n,i,r,o){if(!s)return;!o&&r&&p_(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?o_(s,n,i,r):r_(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),$s(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=a_(Mi(s),e,t),qs(s,e,t,n,i,r,2)):o===2&&l_(s,e,t,n,i,r):qs(Mi(s),e,t,n,i,r,1);break}}}function r_(s){const e=s.prev,t=s,n=s.next;if(pt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Ji(i,a,r,l,o,c,g.x,g.y)&&pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function o_(s,e,t,n){const i=s.prev,r=s,o=s.next;if(pt(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,u=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,_=a>l?a>c?a:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,p=la(f,g,e,t,n),y=la(_,m,e,t,n);let x=s.prevZ,v=s.nextZ;for(;x&&x.z>=p&&v&&v.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Ji(a,h,l,d,c,u,x.x,x.y)&&pt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Ji(a,h,l,d,c,u,v.x,v.y)&&pt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Ji(a,h,l,d,c,u,x.x,x.y)&&pt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Ji(a,h,l,d,c,u,v.x,v.y)&&pt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function a_(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!$r(i,r)&&Xh(i,n,n.next,r)&&js(i,r)&&js(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),$s(n),$s(n.next),n=s=r),n=n.next}while(n!==s);return Mi(n)}function l_(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&__(o,a)){let l=Yh(o,a);o=Mi(o,o.next),l=Mi(l,l.next),qs(o,e,t,n,i,r,0),qs(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function c_(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Wh(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(g_(c));for(i.sort(h_),r=0;r<i.length;r++)t=d_(i[r],t);return t}function h_(s,e){return s.x-e.x}function d_(s,e){const t=u_(s,e);if(!t)return e;const n=Yh(t,s);return Mi(n,n.next),Mi(t,t.next)}function u_(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,i=t.x<t.next.x?t:t.next,u===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,d;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Ji(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),js(t,s)&&(d<h||d===h&&(t.x>i.x||t.x===i.x&&f_(i,t)))&&(i=t,h=d)),t=t.next;while(t!==a);return i}function f_(s,e){return pt(s.prev,s,e.prev)<0&&pt(e.next,s,s.next)<0}function p_(s,e,t,n){let i=s;do i.z===0&&(i.z=la(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,m_(i)}function m_(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function la(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function g_(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ji(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function __(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!x_(s,e)&&(js(s,e)&&js(e,s)&&v_(s,e)&&(pt(s.prev,s,e.prev)||pt(s,e.prev,e))||$r(s,e)&&pt(s.prev,s,s.next)>0&&pt(e.prev,e,e.next)>0)}function pt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function $r(s,e){return s.x===e.x&&s.y===e.y}function Xh(s,e,t,n){const i=Dr(pt(s,e,t)),r=Dr(pt(s,e,n)),o=Dr(pt(t,n,s)),a=Dr(pt(t,n,e));return!!(i!==r&&o!==a||i===0&&Ir(s,t,e)||r===0&&Ir(s,n,e)||o===0&&Ir(t,s,n)||a===0&&Ir(t,e,n))}function Ir(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Dr(s){return s>0?1:s<0?-1:0}function x_(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Xh(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function js(s,e){return pt(s.prev,s,s.next)<0?pt(s,e,s.next)>=0&&pt(s,s.prev,e)>=0:pt(s,e,s.prev)<0||pt(s,s.next,e)<0}function v_(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Yh(s,e){const t=new ca(s.i,s.x,s.y),n=new ca(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function kc(s,e,t,n){const i=new ca(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function $s(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ca(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function y_(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class ks{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return ks.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Bc(e),zc(n,e);let o=e.length;t.forEach(Bc);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,zc(n,t[l]);const a=s_.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Bc(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function zc(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Wr extends Dt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let d=e;const u=(t-e)/i,f=new C,g=new pe;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const y=p+m,x=y,v=y+n+1,b=y+n+2,E=y+1;a.push(x,v,E),a.push(v,b,E)}}this.setIndex(a),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Xr extends Dt{constructor(e=new aa([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new rt(i,3)),this.setAttribute("normal",new rt(r,3)),this.setAttribute("uv",new rt(o,2));function c(h){const d=i.length/3,u=h.extractPoints(t);let f=u.shape;const g=u.holes;ks.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];ks.isClockWise(y)===!0&&(g[m]=y.reverse())}const _=ks.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){const y=f[m];i.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=_.length;m<p;m++){const y=_[m],x=y[0]+d,v=y[1]+d,b=y[2]+d;n.push(x,v,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return M_(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new Xr(n,e.curveSegments)}}function M_(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Un extends Dt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new C,u=new C,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){const E=b/t;d.x=-e*Math.cos(i+E*r)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(i+E*r)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(E+v,1-x),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const x=h[p][y+1],v=h[p][y],b=h[p+1][y],E=h[p+1][y+1];(p!==0||o>0)&&f.push(x,v,E),(p!==n-1||l<Math.PI)&&f.push(v,b,E)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ka extends Dt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new C,d=new C,u=new C;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,y=(i+1)*f+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ba extends hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ti extends Ba{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class q extends hn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Xn(s,e,t){return qh(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function Nr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function qh(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function S_(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Hc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function jh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Js{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class b_ extends Js{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pl,endingEnd:Pl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Il:r=e,a=2*t-n;break;case Dl:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Il:o=e,l=2*n-t;break;case Dl:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,y=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let b=0;b!==a;++b)r[b]=p*o[h+b]+y*o[c+b]+x*o[l+b]+v*o[d+b];return r}}class w_ extends Js{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}}class E_ extends Js{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class bn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Nr(t,this.TimeBufferType),this.values=Nr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Nr(e.times,Array),values:Nr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new E_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new w_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new b_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vs:t=this.InterpolantFactoryMethodDiscrete;break;case ls:t=this.InterpolantFactoryMethodLinear;break;case uo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return ls;case this.InterpolantFactoryMethodSmooth:return uo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=Xn(n,r,o),this.values=Xn(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&qh(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Xn(this.times),t=Xn(this.values),n=this.getValueSize(),i=this.getInterpolation()===uo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){const _=t[d+g];if(_!==t[u+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Xn(e,0,o),this.values=Xn(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Xn(this.times,0),t=Xn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=ls;class gs extends bn{}gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Vs;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;class $h extends bn{}$h.prototype.ValueTypeName="color";class ds extends bn{}ds.prototype.ValueTypeName="number";class T_ extends Js{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)ei.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Si extends bn{InterpolantFactoryMethodLinear(e){return new T_(this.times,this.values,this.getValueSize(),e)}}Si.prototype.ValueTypeName="quaternion";Si.prototype.DefaultInterpolation=ls;Si.prototype.InterpolantFactoryMethodSmooth=void 0;class _s extends bn{}_s.prototype.ValueTypeName="string";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=Vs;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;class us extends bn{}us.prototype.ValueTypeName="vector";class A_{constructor(e,t=-1,n,i=Jd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=cn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(C_(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(bn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=S_(l);l=Hc(l,1,h),c=Hc(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ds(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,g,_){if(f.length!==0){const m=[],p=[];jh(f,m,p,g),m.length!==0&&_.push(new d(u,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let _=0;_<u[g].morphTargets.length;_++)f[u[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let y=0;y!==u[g].morphTargets.length;++y){const x=u[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new ds(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+t[d].name+"]";n(us,f+".position",u,"pos",i),n(Si,f+".quaternion",u,"rot",i),n(us,f+".scale",u,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function R_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ds;case"vector":case"vector2":case"vector3":case"vector4":return us;case"color":return $h;case"quaternion":return Si;case"bool":case"boolean":return gs;case"string":return _s}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function C_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=R_(s.type);if(s.times===void 0){const t=[],n=[];jh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const fs={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class L_{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const P_=new L_;class xs{constructor(e){this.manager=e!==void 0?e:P_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}xs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pn={};class I_ extends Error{constructor(e,t){super(e),this.response=t}}class Kh extends xs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=fs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Pn[e]!==void 0){Pn[e].push({onLoad:t,onProgress:n,onError:i});return}Pn[e]=[],Pn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Pn[e],d=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=u?parseInt(u):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){d.read().then(({done:x,value:v})=>{if(x)p.close();else{_+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let E=0,R=h.length;E<R;E++){const P=h[E];P.onProgress&&P.onProgress(b)}p.enqueue(v),y()}})}}});return new Response(m)}else throw new I_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{fs.add(e,c);const h=Pn[e];delete Pn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Pn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Pn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class D_ extends xs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=fs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ws("img");function l(){h(),fs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Zh extends xs{constructor(e){super(e)}load(e,t,n,i){const r=new Pt,o=new D_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Kr extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Go=new Be,Gc=new C,Vc=new C;class za{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ra,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gc),Vc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vc),t.updateMatrixWorld(),Go.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Go),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Go)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class N_ extends za{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=cs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ha extends Kr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new N_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Wc=new Be,Cs=new C,Vo=new C;class U_ extends za{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Cs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Cs),Vo.copy(n.position),Vo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Vo),n.updateMatrixWorld(),i.makeTranslation(-Cs.x,-Cs.y,-Cs.z),Wc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wc)}}class Bs extends Kr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new U_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class O_ extends za{constructor(){super(new Ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jh extends Kr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new O_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class F_ extends Kr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class da{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class k_ extends xs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=fs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){fs.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const Ha="\\[\\]\\.:\\/",B_=new RegExp("["+Ha+"]","g"),Ga="[^"+Ha+"]",z_="[^"+Ha.replace("\\.","")+"]",H_=/((?:WC+[\/:])*)/.source.replace("WC",Ga),G_=/(WCOD+)?/.source.replace("WCOD",z_),V_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ga),W_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ga),X_=new RegExp("^"+H_+G_+V_+W_+"$"),Y_=["material","materials","bones","map"];class q_{constructor(e,t,n){const i=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(B_,"")}static parseTrackName(e){const t=X_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Y_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=q_;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class j_{constructor(e,t,n=0,i=1/0){this.ray=new Zs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ta,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ua(e,this,n,t),n.sort(Xc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ua(e[i],this,n,t);return n.sort(Xc),n}}function Xc(s,e){return s.distance-e.distance}function ua(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)ua(i[r],e,t,!0)}}const Ur=new C,_t=new Aa;class $_ extends Bh{constructor(e){const t=new Dt,n=new Da({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(g,_){l(g),l(_)}function l(g){i.push(0,0,0),r.push(0,0,0),o[g]===void 0&&(o[g]=[]),o[g].push(i.length/3-1)}t.setAttribute("position",new rt(i,3)),t.setAttribute("color",new rt(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const c=new Ne(16755200),h=new Ne(16711680),d=new Ne(43775),u=new Ne(16777215),f=new Ne(3355443);this.setColors(c,h,d,u,f)}setColors(e,t,n,i,r){const a=this.geometry.getAttribute("color");a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;_t.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),vt("c",t,e,_t,0,0,-1),vt("t",t,e,_t,0,0,1),vt("n1",t,e,_t,-n,-i,-1),vt("n2",t,e,_t,n,-i,-1),vt("n3",t,e,_t,-n,i,-1),vt("n4",t,e,_t,n,i,-1),vt("f1",t,e,_t,-n,-i,1),vt("f2",t,e,_t,n,-i,1),vt("f3",t,e,_t,-n,i,1),vt("f4",t,e,_t,n,i,1),vt("u1",t,e,_t,n*.7,i*1.1,-1),vt("u2",t,e,_t,-n*.7,i*1.1,-1),vt("u3",t,e,_t,0,i*2,-1),vt("cf1",t,e,_t,-n,0,1),vt("cf2",t,e,_t,n,0,1),vt("cf3",t,e,_t,0,-i,1),vt("cf4",t,e,_t,0,i,1),vt("cn1",t,e,_t,-n,0,-1),vt("cn2",t,e,_t,n,0,-1),vt("cn3",t,e,_t,0,-i,-1),vt("cn4",t,e,_t,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function vt(s,e,t,n,i,r,o){Ur.set(i,r,o).unproject(n);const a=e[s];if(a!==void 0){const l=t.getAttribute("position");for(let c=0,h=a.length;c<h;c++)l.setXYZ(a[c],Ur.x,Ur.y,Ur.z)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ma);var zs=function(){var s=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),n(++s%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function n(h){for(var d=0;d<e.children.length;d++)e.children[d].style.display=d===h?"block":"none";s=h}var i=(performance||Date).now(),r=i,o=0,a=t(new zs.Panel("FPS","#0ff","#002")),l=t(new zs.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new zs.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){o++;var h=(performance||Date).now();if(l.update(h-i,200),h>=r+1e3&&(a.update(o*1e3/(h-r),100),r=h,o=0,c)){var d=performance.memory;c.update(d.usedJSHeapSize/1048576,d.jsHeapSizeLimit/1048576)}return h},update:function(){i=this.end()},domElement:e,setMode:n}};zs.Panel=function(s,e,t){var n=1/0,i=0,r=Math.round,o=r(window.devicePixelRatio||1),a=80*o,l=48*o,c=3*o,h=2*o,d=3*o,u=15*o,f=74*o,g=30*o,_=document.createElement("canvas");_.width=a,_.height=l,_.style.cssText="width:80px;height:48px";var m=_.getContext("2d");return m.font="bold "+9*o+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,a,l),m.fillStyle=e,m.fillText(s,c,h),m.fillRect(d,u,f,g),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(d,u,f,g),{dom:_,update:function(p,y){n=Math.min(n,p),i=Math.max(i,p),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,a,u),m.fillStyle=e,m.fillText(r(p)+" "+s+" ("+r(n)+"-"+r(i)+")",c,h),m.drawImage(_,d+o,u,f-o,g,d,u,f-o,g),m.fillRect(d+f-o,u,o,g),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(d+f-o,u,o,r((1-p/y)*g))}}};const K_=zs;class Yc{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}noise(e,t){let n,i,r;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,f=c-d,g=e-u,_=t-f;let m,p;g>_?(m=1,p=0):(m=0,p=1);const y=g-m+h,x=_-p+h,v=g-1+2*h,b=_-1+2*h,E=l&255,R=c&255,P=this.perm[E+this.perm[R]]%12,M=this.perm[E+m+this.perm[R+p]]%12,w=this.perm[E+1+this.perm[R+1]]%12;let G=.5-g*g-_*_;G<0?n=0:(G*=G,n=G*G*this.dot(this.grad3[P],g,_));let O=.5-y*y-x*x;O<0?i=0:(O*=O,i=O*O*this.dot(this.grad3[M],y,x));let I=.5-v*v-b*b;return I<0?r=0:(I*=I,r=I*I*this.dot(this.grad3[w],v,b)),70*(n+i+r)}noise3d(e,t,n){let i,r,o,a;const l=.3333333333333333,c=(e+t+n)*l,h=Math.floor(e+c),d=Math.floor(t+c),u=Math.floor(n+c),f=1/6,g=(h+d+u)*f,_=h-g,m=d-g,p=u-g,y=e-_,x=t-m,v=n-p;let b,E,R,P,M,w;y>=x?x>=v?(b=1,E=0,R=0,P=1,M=1,w=0):y>=v?(b=1,E=0,R=0,P=1,M=0,w=1):(b=0,E=0,R=1,P=1,M=0,w=1):x<v?(b=0,E=0,R=1,P=0,M=1,w=1):y<v?(b=0,E=1,R=0,P=0,M=1,w=1):(b=0,E=1,R=0,P=1,M=1,w=0);const G=y-b+f,O=x-E+f,I=v-R+f,D=y-P+2*f,H=x-M+2*f,K=v-w+2*f,Y=y-1+3*f,Z=x-1+3*f,Q=v-1+3*f,J=h&255,U=d&255,B=u&255,ie=this.perm[J+this.perm[U+this.perm[B]]]%12,re=this.perm[J+b+this.perm[U+E+this.perm[B+R]]]%12,ee=this.perm[J+P+this.perm[U+M+this.perm[B+w]]]%12,Me=this.perm[J+1+this.perm[U+1+this.perm[B+1]]]%12;let ve=.6-y*y-x*x-v*v;ve<0?i=0:(ve*=ve,i=ve*ve*this.dot3(this.grad3[ie],y,x,v));let xe=.6-G*G-O*O-I*I;xe<0?r=0:(xe*=xe,r=xe*xe*this.dot3(this.grad3[re],G,O,I));let Ee=.6-D*D-H*H-K*K;Ee<0?o=0:(Ee*=Ee,o=Ee*Ee*this.dot3(this.grad3[ee],D,H,K));let ze=.6-Y*Y-Z*Z-Q*Q;return ze<0?a=0:(ze*=ze,a=ze*ze*this.dot3(this.grad3[Me],Y,Z,Q)),32*(i+r+o+a)}noise4d(e,t,n,i){const r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,d,u,f,g;const _=(e+t+n+i)*l,m=Math.floor(e+_),p=Math.floor(t+_),y=Math.floor(n+_),x=Math.floor(i+_),v=(m+p+y+x)*c,b=m-v,E=p-v,R=y-v,P=x-v,M=e-b,w=t-E,G=n-R,O=i-P,I=M>w?32:0,D=M>G?16:0,H=w>G?8:0,K=M>O?4:0,Y=w>O?2:0,Z=G>O?1:0,Q=I+D+H+K+Y+Z,J=o[Q][0]>=3?1:0,U=o[Q][1]>=3?1:0,B=o[Q][2]>=3?1:0,ie=o[Q][3]>=3?1:0,re=o[Q][0]>=2?1:0,ee=o[Q][1]>=2?1:0,Me=o[Q][2]>=2?1:0,ve=o[Q][3]>=2?1:0,xe=o[Q][0]>=1?1:0,Ee=o[Q][1]>=1?1:0,ze=o[Q][2]>=1?1:0,Ce=o[Q][3]>=1?1:0,N=M-J+c,Qe=w-U+c,se=G-B+c,le=O-ie+c,_e=M-re+2*c,Oe=w-ee+2*c,Ie=G-Me+2*c,Pe=O-ve+2*c,Ye=M-xe+3*c,et=w-Ee+3*c,tt=G-ze+3*c,A=O-Ce+3*c,S=M-1+4*c,k=w-1+4*c,oe=G-1+4*c,ne=O-1+4*c,ae=m&255,Se=p&255,ce=y&255,X=x&255,Le=a[ae+a[Se+a[ce+a[X]]]]%32,Te=a[ae+J+a[Se+U+a[ce+B+a[X+ie]]]]%32,Re=a[ae+re+a[Se+ee+a[ce+Me+a[X+ve]]]]%32,be=a[ae+xe+a[Se+Ee+a[ce+ze+a[X+Ce]]]]%32,te=a[ae+1+a[Se+1+a[ce+1+a[X+1]]]]%32;let ye=.6-M*M-w*w-G*G-O*O;ye<0?h=0:(ye*=ye,h=ye*ye*this.dot4(r[Le],M,w,G,O));let fe=.6-N*N-Qe*Qe-se*se-le*le;fe<0?d=0:(fe*=fe,d=fe*fe*this.dot4(r[Te],N,Qe,se,le));let L=.6-_e*_e-Oe*Oe-Ie*Ie-Pe*Pe;L<0?u=0:(L*=L,u=L*L*this.dot4(r[Re],_e,Oe,Ie,Pe));let he=.6-Ye*Ye-et*et-tt*tt-A*A;he<0?f=0:(he*=he,f=he*he*this.dot4(r[be],Ye,et,tt,A));let W=.6-S*S-k*k-oe*oe-ne*ne;return W<0?g=0:(W*=W,g=W*W*this.dot4(r[te],S,k,oe,ne)),27*(h+d+u+f+g)}}class Z_{constructor(e){Je(this,"m_w",123456789);Je(this,"m_z",987654321);Je(this,"mask",4294967295);this.m_w=123456789+e&this.mask,this.m_z=987654321-e&this.mask}random(){this.m_z=36969*(this.m_z&65535)+(this.m_z>>16)&this.mask,this.m_w=18e3*(this.m_w&65535)+(this.m_w>>16)&this.mask;let e=(this.m_z<<16)+(this.m_w&65535)>>>0;return e/=4294967296,e}}const J_=new Zh;function Nt(s){const e=J_.load(s);return e.colorSpace=Ae,e.magFilter=$e,e.minFilter=$e,e}const He={cactusSide:Nt("textures/cactus_side.png"),cactusTop:Nt("textures/cactus_top.png"),dirt:Nt("textures/dirt.png"),grass:Nt("textures/grass.png"),grassSide:Nt("textures/grass_side.png"),coalOre:Nt("textures/coal_ore.png"),ironOre:Nt("textures/iron_ore.png"),jungleTreeSide:Nt("textures/jungle_tree_side.png"),jungleTreeTop:Nt("textures/jungle_tree_top.png"),jungleLeaves:Nt("textures/jungle_leaves.png"),leaves:Nt("textures/leaves.png"),treeSide:Nt("textures/tree_side.png"),treeTop:Nt("textures/tree_top.png"),sand:Nt("textures/sand.png"),snow:Nt("textures/snow.png"),snowSide:Nt("textures/snow_side.png"),stone:Nt("textures/stone.png")},Ge={empty:{id:0,name:"empty",visible:!1},grass:{id:1,name:"grass",material:[new q({map:He.grassSide}),new q({map:He.grassSide}),new q({map:He.grass}),new q({map:He.dirt}),new q({map:He.grassSide}),new q({map:He.grassSide})]},dirt:{id:2,name:"dirt",material:new q({map:He.dirt})},stone:{id:3,name:"stone",material:new q({map:He.stone}),scale:{x:30,y:30,z:30},scarcity:.8},coalOre:{id:4,name:"coal_ore",material:new q({map:He.coalOre}),scale:{x:20,y:20,z:20},scarcity:.8},ironOre:{id:5,name:"iron_ore",material:new q({map:He.ironOre}),scale:{x:40,y:40,z:40},scarcity:.9},tree:{id:6,name:"tree",visible:!0,material:[new q({map:He.treeSide}),new q({map:He.treeSide}),new q({map:He.treeTop}),new q({map:He.treeTop}),new q({map:He.treeSide}),new q({map:He.treeSide})]},leaves:{id:7,name:"leaves",visible:!0,material:new q({map:He.leaves})},sand:{id:8,name:"sand",visible:!0,material:new q({map:He.sand})},cloud:{id:9,name:"cloud",visible:!0,material:new it({color:15790320})},snow:{id:10,name:"snow",material:[new q({map:He.snowSide}),new q({map:He.snowSide}),new q({map:He.snow}),new q({map:He.dirt}),new q({map:He.snowSide}),new q({map:He.snowSide})]},jungleTree:{id:11,name:"jungleTree",material:[new q({map:He.jungleTreeSide}),new q({map:He.jungleTreeSide}),new q({map:He.jungleTreeTop}),new q({map:He.jungleTreeTop}),new q({map:He.jungleTreeSide}),new q({map:He.jungleTreeSide})]},jungleLeaves:{id:12,name:"jungleLeaves",material:new q({map:He.jungleLeaves})},cactus:{id:13,name:"cactus",material:[new q({map:He.cactusSide}),new q({map:He.cactusSide}),new q({map:He.cactusTop}),new q({map:He.cactusTop}),new q({map:He.cactusSide}),new q({map:He.cactusSide})]},jungleGrass:{id:14,name:"jungleGrass",material:[new q({color:8437888,map:He.grassSide}),new q({color:8437888,map:He.grassSide}),new q({color:8437888,map:He.grass}),new q({color:8437888,map:He.dirt}),new q({color:8437888,map:He.grassSide}),new q({color:8437888,map:He.grassSide})]}},Qh=[Ge.stone,Ge.coalOre,Ge.ironOre],Q_=new de;class ex extends dt{constructor(t,n,i){super();Je(this,"data",[]);this.loaded=!1,this.size=t,this.params=n,this.dataStore=i}generate(){performance.now();const t=new Z_(this.params.seed);this.initializeTerrain(),this.generateTerrain(t),this.generateClouds(t),this.loadPlayerChanges(),this.generateMeshes(),this.loaded=!0}initializeTerrain(){this.data=[];for(let t=0;t<this.size.width;t++){const n=[];for(let i=0;i<this.size.height;i++){const r=[];for(let o=0;o<this.size.width;o++)r.push({id:Ge.empty.id,instanceId:null});n.push(r)}this.data.push(n)}}getBiome(t,n,i){let r=.5*t.noise((this.position.x+n)/this.params.biomes.scale,(this.position.z+i)/this.params.biomes.scale)+.5;return r+=this.params.biomes.variation.amplitude*t.noise((this.position.x+n)/this.params.biomes.variation.scale,(this.position.z+i)/this.params.biomes.variation.scale),r<this.params.biomes.tundraToTemperate?"Tundra":r<this.params.biomes.temperateToJungle?"Temperate":r<this.params.biomes.jungleToDesert?"Jungle":"Desert"}generateTerrain(t){const n=new Yc(t);for(let i=0;i<this.size.width;i++)for(let r=0;r<this.size.width;r++){const o=this.getBiome(n,i,r),a=n.noise((this.position.x+i)/this.params.terrain.scale,(this.position.z+r)/this.params.terrain.scale),l=this.params.terrain.offset+this.params.terrain.magnitude*a;let c=Math.floor(l);c=Math.max(0,Math.min(c,this.size.height-1));for(let h=this.size.height;h>=0;h--)if(h<=this.params.terrain.waterOffset&&h===c)this.setBlockId(i,h,r,Ge.sand.id);else if(h===c){let d;o==="Desert"?d=Ge.sand.id:o==="Temperate"||o==="Jungle"?d=Ge.grass.id:o==="Tundra"?d=Ge.snow.id:o==="Jungle"&&(d=Ge.jungleGrass.id),this.setBlockId(i,h,r,d),t.random()<this.params.trees.frequency&&this.generateTree(t,o,i,c+1,r)}else h<c&&this.getBlock(i,h,r).id===Ge.empty.id&&this.generateResourceIfNeeded(n,i,h,r)}}generateResourceIfNeeded(t,n,i,r){this.setBlockId(n,i,r,Ge.dirt.id),Qh.forEach(o=>{t.noise3d((this.position.x+n)/o.scale.x,(this.position.y+i)/o.scale.y,(this.position.z+r)/o.scale.z)>o.scarcity&&this.setBlockId(n,i,r,o.id)})}generateTree(t,n,i,r,o){const a=this.params.trees.trunk.minHeight,l=this.params.trees.trunk.maxHeight,c=Math.round(a+(l-a)*t.random());for(let h=r;h<r+c;h++)n==="Temperate"||n==="Tundra"?this.setBlockId(i,h,o,Ge.tree.id):n==="Jungle"?this.setBlockId(i,h,o,Ge.jungleTree.id):n==="Desert"&&this.setBlockId(i,h,o,Ge.cactus.id);(n==="Temperate"||n==="Jungle")&&this.generateTreeCanopy(n,i,r+c,o,t)}generateTreeCanopy(t,n,i,r,o){const a=this.params.trees.canopy.minRadius,l=this.params.trees.canopy.maxRadius,c=Math.round(a+(l-a)*o.random());for(let h=-c;h<=c;h++)for(let d=-c;d<=c;d++)for(let u=-c;u<=c;u++){const f=o.random();if(h*h+d*d+u*u>c*c)continue;const g=this.getBlock(n+h,i+d,r+u);g&&g.id!==Ge.empty.id||f<this.params.trees.canopy.density&&(t==="Temperate"?this.setBlockId(n+h,i+d,r+u,Ge.leaves.id):t==="Jungle"&&this.setBlockId(n+h,i+d,r+u,Ge.jungleLeaves.id))}}generateClouds(t){const n=new Yc(t);for(let i=0;i<this.size.width;i++)for(let r=0;r<this.size.width;r++)(n.noise((this.position.x+i)/this.params.clouds.scale,(this.position.z+r)/this.params.clouds.scale)+1)*.5<this.params.clouds.density&&this.setBlockId(i,this.size.height-1,r,Ge.cloud.id)}loadPlayerChanges(){for(let t=0;t<this.size.width;t++)for(let n=0;n<this.size.height;n++)for(let i=0;i<this.size.width;i++)if(this.dataStore.contains(this.position.x,this.position.z,t,n,i)){const r=this.dataStore.get(this.position.x,this.position.z,t,n,i);this.setBlockId(t,n,i,r)}}generateWater(){const t=new q({color:9474272,transparent:!0,opacity:.5,side:Bt}),n=new F(new mt,t);n.rotateX(-Math.PI/2),n.position.set(this.size.width/2,this.params.terrain.waterOffset+.4,this.size.width/2),n.scale.set(this.size.width,this.size.width,1),n.layers.set(1),this.add(n)}generateMeshes(){this.clear(),this.generateWater();const t=this.size.width*this.size.width*this.size.height,n={};Object.values(Ge).filter(r=>r.id!==Ge.empty.id).forEach(r=>{const o=new kh(Q_,r.material,t);o.name=r.id,o.count=0,o.castShadow=!0,o.receiveShadow=!0,n[r.id]=o});const i=new Be;for(let r=0;r<this.size.width;r++)for(let o=0;o<this.size.height;o++)for(let a=0;a<this.size.width;a++){const l=this.getBlock(r,o,a).id;if(l===Ge.empty.id)continue;const c=n[l],h=c.count;this.isBlockObscured(r,o,a)||(i.setPosition(r,o,a),c.setMatrixAt(h,i),this.setBlockInstanceId(r,o,a,h),c.count++)}this.add(...Object.values(n))}getBlock(t,n,i){if(!this.inBounds(t,n,i))return null;const r=this.data[t];if(!r)return null;const o=r[n];return o&&o[i]||null}addBlock(t,n,i,r){this.getBlock(t,n,i).id===Ge.empty.id&&(this.setBlockId(t,n,i,r),this.addBlockInstance(t,n,i),this.dataStore.set(this.position.x,this.position.z,t,n,i,r))}removeBlock(t,n,i){const r=this.getBlock(t,n,i);r&&r.id!==Ge.empty.id&&(this.deleteBlockInstance(t,n,i),this.setBlockId(t,n,i,Ge.empty.id),this.dataStore.set(this.position.x,this.position.z,t,n,i,Ge.empty.id))}deleteBlockInstance(t,n,i){const r=this.getBlock(t,n,i);if(r.id===Ge.empty.id||r.instanceId===null)return;const o=this.children.find(h=>h.name===r.id),a=r.instanceId,l=new Be;o.getMatrixAt(o.count-1,l);const c=new C;c.applyMatrix4(l),this.setBlockInstanceId(c.x,c.y,c.z,a),o.setMatrixAt(a,l),o.count--,o.instanceMatrix.needsUpdate=!0,o.computeBoundingSphere(),this.setBlockInstanceId(t,n,i,null)}addBlockInstance(t,n,i){const r=this.getBlock(t,n,i);if(r&&r.id!==Ge.empty.id&&r.instanceId===null){const o=this.children.find(c=>c.name===r.id),a=o.count++;this.setBlockInstanceId(t,n,i,a);const l=new Be;l.setPosition(t,n,i),o.setMatrixAt(a,l),o.instanceMatrix.needsUpdate=!0,o.computeBoundingSphere()}}setBlockId(t,n,i,r){this.inBounds(t,n,i)&&(this.data[t][n][i].id=r)}setBlockInstanceId(t,n,i,r){this.inBounds(t,n,i)&&(this.data[t][n][i].instanceId=r)}inBounds(t,n,i){return t>=0&&t<this.size.width&&n>=0&&n<this.size.height&&i>=0&&i<this.size.width}isBlockObscured(t,n,i){const r=this.getBlock(t,n+1,i)?.id??Ge.empty.id,o=this.getBlock(t,n-1,i)?.id??Ge.empty.id,a=this.getBlock(t+1,n,i)?.id??Ge.empty.id,l=this.getBlock(t-1,n,i)?.id??Ge.empty.id,c=this.getBlock(t,n,i+1)?.id??Ge.empty.id,h=this.getBlock(t,n,i-1)?.id??Ge.empty.id;return!(r===Ge.empty.id||o===Ge.empty.id||a===Ge.empty.id||l===Ge.empty.id||c===Ge.empty.id||h===Ge.empty.id)}disposeInstances(){this.traverse(t=>{t.dispose&&t.dispose()}),this.clear()}}var is,kr;class tx{constructor(){ro(this,is);this.data={}}clear(){this.data={}}contains(e,t,n,i,r){const o=ir(this,is,kr).call(this,e,t,n,i,r);return this.data[o]!==void 0}get(e,t,n,i,r){const o=ir(this,is,kr).call(this,e,t,n,i,r);return this.data[o]}set(e,t,n,i,r,o){const a=ir(this,is,kr).call(this,e,t,n,i,r);this.data[a]=o}}is=new WeakSet,kr=function(e,t,n,i,r){return`${e},${t},${n},${i},${r}`};class nx extends dt{constructor(t=0){super();Je(this,"asyncLoading",!0);Je(this,"drawDistance",3);Je(this,"chunkSize",{width:32,height:32});Je(this,"params",{seed:0,terrain:{scale:100,magnitude:8,offset:6,waterOffset:4},biomes:{scale:500,variation:{amplitude:.2,scale:50},tundraToTemperate:.25,temperateToJungle:.5,jungleToDesert:.75},trees:{trunk:{minHeight:4,maxHeight:7},canopy:{minRadius:3,maxRadius:3,density:.7},frequency:.005},clouds:{scale:30,density:.3}});Je(this,"dataStore",new tx);this.seed=t,document.addEventListener("keydown",n=>{switch(n.code){case"F1":this.save();break;case"F2":this.load();break}})}save(){localStorage.setItem("minecraft_params",JSON.stringify(this.params)),localStorage.setItem("minecraft_data",JSON.stringify(this.dataStore.data)),document.getElementById("status").innerHTML="GAME SAVED",setTimeout(()=>document.getElementById("status").innerHTML="",3e3)}load(){this.params=JSON.parse(localStorage.getItem("minecraft_params")),this.dataStore.data=JSON.parse(localStorage.getItem("minecraft_data")),document.getElementById("status").innerHTML="GAME LOADED",setTimeout(()=>document.getElementById("status").innerHTML="",3e3),this.generate()}generate(t=!1){t&&this.dataStore.clear(),this.disposeChunks();for(let n=-this.drawDistance;n<=this.drawDistance;n++)for(let i=-this.drawDistance;i<=this.drawDistance;i++)this.generateChunk(n,i)}update(t){const n=this.getVisibleChunks(t),i=this.getChunksToAdd(n);this.removeUnusedChunks(n);for(const r of i)this.generateChunk(r.x,r.z)}getVisibleChunks(t){const n=[],i=this.worldToChunkCoords(t.position.x,t.position.y,t.position.z),r=i.chunk.x,o=i.chunk.z;for(let a=r-this.drawDistance;a<=r+this.drawDistance;a++)for(let l=o-this.drawDistance;l<=o+this.drawDistance;l++)n.push({x:a,z:l});return n}getChunksToAdd(t){return t.filter(n=>!this.children.map(r=>r.userData).find(({x:r,z:o})=>n.x===r&&n.z===o))}removeUnusedChunks(t){const n=this.children.filter(i=>{const{x:r,z:o}=i.userData;return!t.find(l=>l.x===r&&l.z===o)});for(const i of n)i.disposeInstances(),this.remove(i),console.log(`Removing chunk at X: ${i.userData.x} Z: ${i.userData.z}`)}generateChunk(t,n){const i=new ex(this.chunkSize,this.params,this.dataStore);i.position.set(t*this.chunkSize.width,0,n*this.chunkSize.width),i.userData={x:t,z:n},this.asyncLoading?requestIdleCallback(i.generate.bind(i),{timeout:1e3}):i.generate(),this.add(i),console.log(`Adding chunk at X: ${t} Z: ${n}`)}getBlock(t,n,i){const r=this.worldToChunkCoords(t,n,i),o=this.getChunk(r.chunk.x,r.chunk.z);return o&&o.loaded?o.getBlock(r.block.x,r.block.y,r.block.z):null}worldToChunkCoords(t,n,i){const r={x:Math.floor(t/this.chunkSize.width),z:Math.floor(i/this.chunkSize.width)},o={x:t-this.chunkSize.width*r.x,y:n,z:i-this.chunkSize.width*r.z};return{chunk:r,block:o}}getChunk(t,n){return this.children.find(i=>i.userData.x===t&&i.userData.z===n)}disposeChunks(){this.traverse(t=>{t.disposeInstances&&t.disposeInstances()}),this.clear()}addBlock(t,n,i,r){const o=this.worldToChunkCoords(t,n,i),a=this.getChunk(o.chunk.x,o.chunk.z);a&&(a.addBlock(o.block.x,o.block.y,o.block.z,r),this.hideBlock(t-1,n,i),this.hideBlock(t+1,n,i),this.hideBlock(t,n-1,i),this.hideBlock(t,n+1,i),this.hideBlock(t,n,i-1),this.hideBlock(t,n,i+1))}removeBlock(t,n,i){const r=this.worldToChunkCoords(t,n,i),o=this.getChunk(r.chunk.x,r.chunk.z);r.block.y!==0&&o&&(o.removeBlock(r.block.x,r.block.y,r.block.z),this.revealBlock(t-1,n,i),this.revealBlock(t+1,n,i),this.revealBlock(t,n-1,i),this.revealBlock(t,n+1,i),this.revealBlock(t,n,i-1),this.revealBlock(t,n,i+1))}revealBlock(t,n,i){const r=this.worldToChunkCoords(t,n,i),o=this.getChunk(r.chunk.x,r.chunk.z);o&&o.addBlockInstance(r.block.x,r.block.y,r.block.z)}hideBlock(t,n,i){const r=this.worldToChunkCoords(t,n,i),o=this.getChunk(r.chunk.x,r.chunk.z);o&&o.isBlockObscured(r.block.x,r.block.y,r.block.z)&&o.deleteBlockInstance(r.block.x,r.block.y,r.block.z)}}const ji=new vi(0,0,0,"YXZ"),$i=new C,ix={type:"change"},sx={type:"lock"},rx={type:"unlock"},qc=Math.PI/2;class ox extends Ei{constructor(e,t){super(),this.camera=e,this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=ax.bind(this),this._onPointerlockChange=lx.bind(this),this._onPointerlockError=cx.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(e){const t=this.camera;$i.setFromMatrixColumn(t.matrix,0),$i.crossVectors(t.up,$i),t.position.addScaledVector($i,e)}moveRight(e){const t=this.camera;$i.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector($i,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function ax(s){if(this.isLocked===!1)return;const e=s.movementX||s.mozMovementX||s.webkitMovementX||0,t=s.movementY||s.mozMovementY||s.webkitMovementY||0,n=this.camera;ji.setFromQuaternion(n.quaternion),ji.y-=e*.002*this.pointerSpeed,ji.x-=t*.002*this.pointerSpeed,ji.x=Math.max(qc-this.maxPolarAngle,Math.min(qc-this.minPolarAngle,ji.x)),n.quaternion.setFromEuler(ji),this.dispatchEvent(ix)}function lx(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(sx),this.isLocked=!0):(this.dispatchEvent(rx),this.isLocked=!1)}function cx(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const hx=new pe;var ss;class dx{constructor(e,t){Je(this,"height",1.75);Je(this,"radius",.5);Je(this,"maxSpeed",5);Je(this,"jumpSpeed",10);Je(this,"sprinting",!1);Je(this,"onGround",!1);Je(this,"input",new C);Je(this,"velocity",new C);ro(this,ss,new C);Je(this,"camera",new Xt(70,window.innerWidth/window.innerHeight,.1,100));Je(this,"cameraHelper",new $_(this.camera));Je(this,"controls",new ox(this.camera,document.body));Je(this,"debugCamera",!1);Je(this,"raycaster",new j_(new C,new C,0,3));Je(this,"selectedCoords",null);Je(this,"activeBlockId",Ge.empty.id);Je(this,"tool",{container:new dt,animate:!1,animationStart:0,animationSpeed:.025,animation:null});this.world=t,this.position.set(32,32,32),this.cameraHelper.visible=!1,e.add(this.camera),e.add(this.cameraHelper),this.camera.add(this.tool.container),this.raycaster.layers.set(0),this.camera.layers.enable(1),this.boundsHelper=new F(new Ot(this.radius,this.radius,this.height,16),new it({wireframe:!0})),this.boundsHelper.visible=!1,e.add(this.boundsHelper);const n=new it({transparent:!0,opacity:.3,color:16777130}),i=new de(1.01,1.01,1.01);this.selectionHelper=new F(i,n),e.add(this.selectionHelper),document.addEventListener("keyup",this.onKeyUp.bind(this)),document.addEventListener("keydown",this.onKeyDown.bind(this)),document.addEventListener("mousedown",this.onMouseDown.bind(this))}update(e){this.updateBoundsHelper(),this.updateRaycaster(e),this.tool.animate&&this.updateToolAnimation()}updateRaycaster(e){this.raycaster.setFromCamera(hx,this.camera);const t=this.raycaster.intersectObject(e,!0);if(t.length>0){const n=t[0],i=n.object.parent,r=new Be;n.object.getMatrixAt(n.instanceId,r),this.selectedCoords=i.position.clone(),this.selectedCoords.applyMatrix4(r),this.activeBlockId!==Ge.empty.id&&this.selectedCoords.add(n.normal),this.selectionHelper.position.copy(this.selectedCoords),this.selectionHelper.visible=!0}else this.selectedCoords=null,this.selectionHelper.visible=!1}applyInputs(e){this.velocity.x=this.input.x*(this.sprinting?1.5:1),this.velocity.z=this.input.z*(this.sprinting?1.5:1),this.controls.moveRight(this.velocity.x*e),this.controls.moveForward(this.velocity.z*e),this.position.y+=this.velocity.y*e,this.position.y<0&&(this.position.y=0,this.velocity.y=0);const t=document.getElementById("info-player-position");t&&(t.innerHTML=this.toString())}updateBoundsHelper(){this.boundsHelper.position.copy(this.camera.position),this.boundsHelper.position.y-=this.height/2}setTool(e){this.tool.container.clear(),this.tool.container.add(e),this.tool.container.receiveShadow=!0,this.tool.container.castShadow=!0,this.tool.container.position.set(.6,-.3,-.5),this.tool.container.scale.set(.5,.5,.5),this.tool.container.rotation.z=Math.PI/2,this.tool.container.rotation.y=Math.PI+.2}updateToolAnimation(){if(this.tool.container.children.length>0){const e=this.tool.animationSpeed*(performance.now()-this.tool.animationStart);this.tool.container.children[0].rotation.y=.5*Math.sin(e)}}get position(){return this.camera.position}get worldVelocity(){return nr(this,ss).copy(this.velocity),nr(this,ss).applyEuler(new vi(0,this.camera.rotation.y,0)),nr(this,ss)}applyWorldDeltaVelocity(e){e.applyEuler(new vi(0,-this.camera.rotation.y,0)),this.velocity.add(e)}onKeyDown(e){switch(e.code){case"Digit0":case"Digit1":case"Digit2":case"Digit3":case"Digit4":case"Digit5":case"Digit6":case"Digit7":case"Digit8":document.getElementById(`toolbar-${this.activeBlockId}`)?.classList.remove("selected"),document.getElementById(`toolbar-${e.key}`)?.classList.add("selected"),this.activeBlockId=Number(e.key),this.tool.container.visible=this.activeBlockId===0;break;case"KeyW":this.input.z=this.maxSpeed;break;case"KeyA":this.input.x=-this.maxSpeed;break;case"KeyS":this.input.z=-this.maxSpeed;break;case"KeyD":this.input.x=this.maxSpeed;break;case"KeyR":if(this.repeat)break;this.position.y=32,this.velocity.set(0,0,0);break;case"ShiftLeft":case"ShiftRight":this.sprinting=!0;break;case"Space":this.onGround&&(this.velocity.y+=this.jumpSpeed);break}}onKeyUp(e){switch(e.code){case"KeyW":this.input.z=0;break;case"KeyA":this.input.x=0;break;case"KeyS":this.input.z=0;break;case"KeyD":this.input.x=0;break;case"ShiftLeft":case"ShiftRight":this.sprinting=!1;break}}onMouseDown(e){this.controls.isLocked&&this.selectedCoords&&(this.activeBlockId===Ge.empty.id?this.world.removeBlock(this.selectedCoords.x,this.selectedCoords.y,this.selectedCoords.z):this.world.addBlock(this.selectedCoords.x,this.selectedCoords.y,this.selectedCoords.z,this.activeBlockId),this.tool.animate||(this.tool.animate=!0,this.tool.animationStart=performance.now(),clearTimeout(this.tool.animation),this.tool.animation=setTimeout(()=>{this.tool.animate=!1},3*Math.PI/this.tool.animationSpeed)))}toString(){let e="";return e+=`X: ${this.position.x.toFixed(3)} `,e+=`Y: ${this.position.y.toFixed(3)} `,e+=`Z: ${this.position.z.toFixed(3)}`,e}}ss=new WeakMap;const ux=new it({color:16711680,transparent:!0,opacity:.2}),fx=new de(1.001,1.001,1.001),px=new it({wireframe:!0,color:65280}),mx=new Un(.05,6,6);class gx{constructor(e){Je(this,"gravity",32);Je(this,"simulationRate",250);Je(this,"stepSize",1/this.simulationRate);Je(this,"accumulator",0);this.helpers=new dt,this.helpers.visible=!1,e.add(this.helpers)}update(e,t,n){for(this.accumulator+=e;this.accumulator>=this.stepSize;)t.velocity.y-=this.gravity*this.stepSize,t.applyInputs(this.stepSize),this.detectCollisions(t,n),this.accumulator-=this.stepSize}detectCollisions(e,t){e.onGround=!1,this.helpers.clear();const n=this.broadPhase(e,t),i=this.narrowPhase(n,e);i.length>0&&this.resolveCollisions(i,e)}broadPhase(e,t){const n=[],i=Math.floor(e.position.x-e.radius),r=Math.ceil(e.position.x+e.radius),o=Math.floor(e.position.y-e.height),a=Math.ceil(e.position.y),l=Math.floor(e.position.z-e.radius),c=Math.ceil(e.position.z+e.radius);for(let h=i;h<=r;h++)for(let d=o;d<=a;d++)for(let u=l;u<=c;u++){const f=t.getBlock(h,d,u)?.id;if(f&&f!==Ge.empty.id){const g={x:h,y:d,z:u};n.push(g),this.addCollisionHelper(g)}}return n}narrowPhase(e,t){const n=[];for(const i of e){const r={x:Math.max(i.x-.5,Math.min(t.position.x,i.x+.5)),y:Math.max(i.y-.5,Math.min(t.position.y-t.height/2,i.y+.5)),z:Math.max(i.z-.5,Math.min(t.position.z,i.z+.5))},o=r.x-t.position.x,a=r.y-(t.position.y-t.height/2),l=r.z-t.position.z;if(this.pointInPlayerBoundingCylinder(r,t)){const c=t.height/2-Math.abs(a),h=t.radius-Math.sqrt(o*o+l*l);let d,u;c<h?(d=new C(0,-Math.sign(a),0),u=c,t.onGround=!0):(d=new C(-o,0,-l).normalize(),u=h),n.push({block:i,contactPoint:r,normal:d,overlap:u}),this.addContactPointerHelper(r)}}return n}resolveCollisions(e,t){e.sort((n,i)=>n.overlap<i.overlap);for(const n of e){if(!this.pointInPlayerBoundingCylinder(n.contactPoint,t))continue;let i=n.normal.clone();i.multiplyScalar(n.overlap),t.position.add(i);let r=t.worldVelocity.dot(n.normal),o=n.normal.clone().multiplyScalar(r);t.applyWorldDeltaVelocity(o.negate())}}pointInPlayerBoundingCylinder(e,t){const n=e.x-t.position.x,i=e.y-(t.position.y-t.height/2),r=e.z-t.position.z,o=n*n+r*r;return Math.abs(i)<t.height/2&&o<t.radius*t.radius}addCollisionHelper(e){const t=new F(fx,ux);t.position.copy(e),this.helpers.add(t)}addContactPointerHelper(e){const t=new F(mx,px);t.position.copy(e),this.helpers.add(t)}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class vn{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),vn.nextNameID=vn.nextNameID||0,this.$name.id="lil-gui-name-"+ ++vn.nextNameID,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class _x extends vn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function fa(s){let e,t;return(e=s.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!t&&"#"+t}const xx={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:fa,toHexString:fa},Ks={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},vx={isPrimitive:!1,match:Array.isArray,fromHexString(s,e,t=1){const n=Ks.fromHexString(s);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(255&n)/255*t},toHexString:([s,e,t],n=1)=>Ks.toHexString(s*(n=255/n)<<16^e*n<<8^t*n<<0)},yx={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,e,t=1){const n=Ks.fromHexString(s);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(255&n)/255*t},toHexString:({r:s,g:e,b:t},n=1)=>Ks.toHexString(s*(n=255/n)<<16^e*n<<8^t*n<<0)},Mx=[xx,Ks,vx,yx];class Sx extends vn{constructor(e,t,n,i){var r;super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(r=this.initialValue,Mx.find(o=>o.match(r))),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=fa(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Wo extends vn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class bx extends vn{constructor(e,t,n,i,r,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=h=>{const d=parseFloat(this.$input.value);isNaN(d)||(this._snapClampSetValue(d+h),this.$input.value=this.getValue())};let t,n,i,r,o,a=!1;const l=h=>{if(a){const d=h.clientX-t,u=h.clientY-n;Math.abs(u)>5?(h.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(d)>5&&c()}if(!a){const d=h.clientY-i;o-=d*this._step*this._arrowKeyMultiplier(h),r+o>this._max?o=this._max-r:r+o<this._min&&(o=this._min-r),this._snapClampSetValue(r+o)}i=h.clientY},c=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c)};this.$input.addEventListener("input",()=>{let h=parseFloat(this.$input.value);isNaN(h)||(this._stepExplicit&&(h=this._snap(h)),this.setValue(this._clamp(h)))}),this.$input.addEventListener("keydown",h=>{h.code==="Enter"&&this.$input.blur(),h.code==="ArrowUp"&&(h.preventDefault(),e(this._step*this._arrowKeyMultiplier(h))),h.code==="ArrowDown"&&(h.preventDefault(),e(this._step*this._arrowKeyMultiplier(h)*-1))}),this.$input.addEventListener("wheel",h=>{this._inputFocused&&(h.preventDefault(),e(this._step*this._normalizeMouseWheel(h)))},{passive:!1}),this.$input.addEventListener("mousedown",h=>{t=h.clientX,n=i=h.clientY,a=!0,r=this.getValue(),o=0,window.addEventListener("mousemove",l),window.addEventListener("mouseup",c)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=u=>{const f=this.$slider.getBoundingClientRect();let g=(_=u,m=f.left,p=f.right,y=this._min,x=this._max,(_-m)/(p-m)*(x-y)+y);var _,m,p,y,x;this._snapClampSetValue(g)},t=u=>{e(u.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",n)};let i,r,o=!1;const a=u=>{u.preventDefault(),this._setDraggingStyle(!0),e(u.touches[0].clientX),o=!1},l=u=>{if(o){const f=u.touches[0].clientX-i,g=u.touches[0].clientY-r;Math.abs(f)>Math.abs(g)?a(u):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c))}else u.preventDefault(),e(u.touches[0].clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c)},h=this._callOnFinishChange.bind(this);let d;this.$slider.addEventListener("mousedown",u=>{this._setDraggingStyle(!0),e(u.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",u=>{u.touches.length>1||(this._hasScrollBar?(i=u.touches[0].clientX,r=u.touches[0].clientY,o=!0):a(u),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",c))},{passive:!1}),this.$slider.addEventListener("wheel",u=>{if(Math.abs(u.deltaX)<Math.abs(u.deltaY)&&this._hasScrollBar)return;u.preventDefault();const f=this._normalizeMouseWheel(u)*this._step;this._snapClampSetValue(this.getValue()+f),this.$input.value=this.getValue(),clearTimeout(d),d=setTimeout(h,400)},{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class wx extends vn{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const o=document.createElement("option");o.innerHTML=r,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class Ex extends vn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let jc=!1;class Va{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{l.code!=="Enter"&&l.code!=="Space"||(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!jc&&o&&(function(l){const c=document.createElement("style");c.innerHTML=l;const h=document.querySelector("head link[rel=stylesheet], head style");h?document.head.insertBefore(c,h):document.head.appendChild(c)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),jc=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,n,i,r){if(Object(n)===n)return new wx(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new bx(this,e,t,n,i,r);case"boolean":return new _x(this,e,t);case"string":return new Ex(this,e,t);case"function":return new Wo(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new Sx(this,e,t,n)}addFolder(e){return new Va({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Wo||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Wo)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function Tx(s,e,t,n){const i=new Va,r=i.addFolder("Player");r.add(e,"maxSpeed",1,20,.1).name("Max Speed"),r.add(e,"jumpSpeed",1,10,.1).name("Jump Speed"),r.add(e.boundsHelper,"visible").name("Show Player Bounds"),r.add(e.cameraHelper,"visible").name("Show Camera Helper");const o=i.addFolder("Physics");o.add(t.helpers,"visible").name("Visualize Collisions"),o.add(t,"simulationRate",10,1e3).name("Sim Rate");const a=i.addFolder("World");a.add(s,"drawDistance",0,5,1).name("Draw Distance"),a.add(s,"asyncLoading").name("Async Loading"),a.add(n.fog,"near",1,200,1).name("Fog Near"),a.add(n.fog,"far",1,200,1).name("Fog Far");const l=a.addFolder("Terrain").close();l.add(s.params,"seed",0,1e4,1).name("Seed"),l.add(s.params.terrain,"scale",10,100).name("Scale"),l.add(s.params.terrain,"magnitude",0,1).name("Magnitude"),l.add(s.params.terrain,"offset",0,32,1).name("Offset"),l.add(s.params.terrain,"waterOffset",0,32,1).name("Water Offset");const c=i.addFolder("Biomes");c.add(s.params.biomes,"scale",100,1e4).name("Biome Scale"),c.add(s.params.biomes.variation,"amplitude",0,1).name("Variation Amplitude"),c.add(s.params.biomes.variation,"scale",10,500).name("Variation Scale"),c.add(s.params.biomes,"tundraToTemperate",0,1).name("Tundra -> Temperate"),c.add(s.params.biomes,"temperateToJungle",0,1).name("Temperate -> Jungle"),c.add(s.params.biomes,"jungleToDesert",0,1).name("Jungle -> Desert");const h=a.addFolder("Resources").close();for(const f of Qh){const g=h.addFolder(f.name);g.add(f,"scarcity",0,1).name("Scarcity"),g.add(f.scale,"x",10,100).name("Scale X"),g.add(f.scale,"y",10,100).name("Scale Y"),g.add(f.scale,"z",10,100).name("Scale Z")}const d=l.addFolder("Trees").close();d.add(s.params.trees,"frequency",0,.1).name("Frequency"),d.add(s.params.trees.trunk,"minHeight",0,10,1).name("Min Trunk Height"),d.add(s.params.trees.trunk,"maxHeight",0,10,1).name("Max Trunk Height"),d.add(s.params.trees.canopy,"minRadius",0,10,1).name("Min Canopy Size"),d.add(s.params.trees.canopy,"maxRadius",0,10,1).name("Max Canopy Size"),d.add(s.params.trees.canopy,"density",0,1).name("Canopy Density");const u=a.addFolder("Clouds").close();u.add(s.params.clouds,"density",0,1).name("Density"),u.add(s.params.clouds,"scale",1,100,1).name("Scale"),a.onFinishChange(f=>{s.generate(!0)}),document.addEventListener("keydown",f=>{f.code==="KeyU"&&(i._hidden?i.show():i.hide())})}function $c(s,e){if(e===Qd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ea||e===xh){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===ea)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Ax extends xs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ix(t)}),this.register(function(t){return new zx(t)}),this.register(function(t){return new Hx(t)}),this.register(function(t){return new Gx(t)}),this.register(function(t){return new Nx(t)}),this.register(function(t){return new Ux(t)}),this.register(function(t){return new Ox(t)}),this.register(function(t){return new Fx(t)}),this.register(function(t){return new Px(t)}),this.register(function(t){return new kx(t)}),this.register(function(t){return new Dx(t)}),this.register(function(t){return new Bx(t)}),this.register(function(t){return new Cx(t)}),this.register(function(t){return new Vx(t)}),this.register(function(t){return new Wx(t)})}load(e,t,n,i){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=da.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Kh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ed){try{o[Ze.KHR_BINARY_GLTF]=new Xx(e)}catch(d){i&&i(d);return}r=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new sv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case Ze.KHR_MATERIALS_UNLIT:o[d]=new Lx;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[d]=new Yx(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[d]=new qx;break;case Ze.KHR_MESH_QUANTIZATION:o[d]=new jx;break;default:u.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Rx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Cx{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ne(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],It);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Jh(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Bs(h),c.distance=d;break;case"spot":c=new ha(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,qn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Lx{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return it}extendParams(e,t,n){const i=[];e.color=new Ne(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],It),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ae))}return Promise.all(i)}}class Px{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Ix{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pe(a,a)}return Promise.all(r)}}class Dx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Nx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],It)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ae)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Ux{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Ox{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(a[0],a[1],a[2],It),Promise.all(r)}}class Fx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class kx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(a[0],a[1],a[2],It),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ae)),Promise.all(r)}}class Bx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class zx{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Hx{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Gx{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Vx{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}}class Wx{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==rn.TRIANGLES&&c.mode!==rn.TRIANGLE_STRIP&&c.mode!==rn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(const g of d){const _=new Be,m=new C,p=new ei,y=new C(1,1,1),x=new kh(g.geometry,g.material,u);for(let v=0;v<u;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&y.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,_.compose(m,p,y));for(const v in l)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);ut.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const ed="glTF",Ls=12,Kc={JSON:1313821514,BIN:5130562};class Xx{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ls),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ed)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ls,r=new DataView(e,Ls);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Kc.JSON){const c=new Uint8Array(e,Ls+o,a);this.content=n.decode(c)}else if(l===Kc.BIN){const c=Ls+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Yx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const d=pa[h]||h.toLowerCase();a[d]=o[h]}for(const h in e.attributes){const d=pa[h]||h.toLowerCase();if(o[h]!==void 0){const u=n.accessors[e.attributes[h]],f=ns[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d){i.decodeDracoFile(h,function(u){for(const f in u.attributes){const g=u.attributes[f],_=l[f];_!==void 0&&(g.normalized=_)}d(u)},a,c)})})}}class qx{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class jx{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class td extends Js{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,g=e*c,_=g-c,m=-2*f+3*u,p=f-u,y=1-m,x=p-u+d;for(let v=0;v!==a;v++){const b=o[_+v+a],E=o[_+v+l]*h,R=o[g+v+a],P=o[g+v]*h;r[v]=y*b+x*E+m*R+p*P}return r}}const $x=new ei;class Kx extends td{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return $x.fromArray(r).normalize().toArray(r),r}}const rn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ns={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zc={9728:$e,9729:Wt,9984:Qo,9985:dh,9986:Or,9987:_i},Jc={33071:an,33648:Hr,10497:kn},Xo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},pa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Zx={CUBICSPLINE:void 0,LINEAR:ls,STEP:Vs},Yo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Jx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ba({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fn})),s.DefaultMaterial}function li(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function qn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Qx(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(u)}if(r){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],u=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function ev(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function tv(s){let e;const t=s.extensions&&s.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+qo(t.attributes):e=s.indices+":"+qo(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+qo(s.targets[n]);return e}function qo(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ma(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const iv=new Be;class sv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Rx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Zh(this.options.manager):this.textureLoader=new k_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Kh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};li(r,a,i),qn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(da.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Xo[i.type],a=ns[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Yt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Xo[i.type],c=ns[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==d){const p=Math.floor(u/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(y);x||(_=new c(a,p*f,i.count*f/h),x=new Uh(_,f/h),t.cache.add(y,x)),m=new Xs(x,l,u%f/h,g)}else a===null?_=new c(i.count*l):_=new c(a,u,i.count*l),m=new Yt(_,l,g);if(i.sparse!==void 0){const p=Xo.SCALAR,y=ns[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,b=new y(o[1],x,i.sparse.count*p),E=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new Yt(m.array.slice(),m.itemSize,m.normalized));for(let R=0,P=b.length;R<P;R++){const M=b[R];if(m.setX(M,E[R*l]),l>=2&&m.setY(M,E[R*l+1]),l>=3&&m.setZ(M,E[R*l+2]),l>=4&&m.setW(M,E[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const u=(r.samplers||{})[o.sampler]||{};return h.magFilter=Zc[u.magFilter]||Wt,h.minFilter=Zc[u.minFilter]||_i,h.wrapS=Jc[u.wrapS]||kn,h.wrapT=Jc[u.wrapT]||kn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const u=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(u),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Pt(_);m.needsUpdate=!0,u(m)}),t.load(da.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),d.userData.mimeType=o.mimeType||nv(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new zh,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Da,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ba}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){const d=i[Ze.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],It),a.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Ae)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Bt);const h=r.alphaMode||Yo.OPAQUE;if(h===Yo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Yo.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==it&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new pe(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==it&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==it){const d=r.emissiveFactor;a.emissive=new Ne().setRGB(d[0],d[1],d[2],It)}return r.emissiveTexture!==void 0&&o!==it&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ae)),Promise.all(c).then(function(){const d=new o(a);return r.name&&(d.name=r.name),qn(d,r),t.associations.set(d,{materials:e}),r.extensions&&li(i,d,r),d})}createUniqueName(e){const t=nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Qc(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=tv(c),d=i[h];if(d)o.push(d.promise);else{let u;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=Qc(new Dt,c,t),i[h]={primitive:c,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?Jx(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const y=c[f];if(m.mode===rn.TRIANGLES||m.mode===rn.TRIANGLE_STRIP||m.mode===rn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new k0(_,y):new F(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===rn.TRIANGLE_STRIP?p.geometry=$c(p.geometry,xh):m.mode===rn.TRIANGLE_FAN&&(p.geometry=$c(p.geometry,ea));else if(m.mode===rn.LINES)p=new Bh(_,y);else if(m.mode===rn.LINE_STRIP)p=new Na(_,y);else if(m.mode===rn.LINE_LOOP)p=new G0(_,y);else if(m.mode===rn.POINTS)p=new V0(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ev(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),qn(p,r),m.extensions&&li(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&li(i,d[0],r),d[0];const u=new dt;r.extensions&&li(i,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(Eu.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ca(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),qn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const d=o[c];if(d){a.push(d);const u=new Be;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ia(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){const f=i.channels[d],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const u=d[0],f=d[1],g=d[2],_=d[3],m=d[4],p=[];for(let y=0,x=u.length;y<x;y++){const v=u[y],b=f[y],E=g[y],R=_[y],P=m[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const M=n._createAnimationTracks(v,b,E,R,P);if(M)for(let w=0;w<M.length;w++)p.push(M[w])}return new A_(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,iv)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Fh:c.length>1?h=new dt:c.length===1?h=c[0]:h=new ut,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=o),qn(h,r),r.extensions&&li(n,h,r),r.matrix!==void 0){const d=new Be;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new dt;n.name&&(r.name=i.createUniqueName(n.name)),qn(r,n),n.extensions&&li(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,d=l.length;h<d;h++)r.add(l[h]);const c=h=>{const d=new Map;for(const[u,f]of i.associations)(u instanceof hn||u instanceof Pt)&&d.set(u,f);return h.traverse(u=>{const f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];Yn[r.path]===Yn.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(a);let c;switch(Yn[r.path]){case Yn.weights:c=ds;break;case Yn.rotation:c=Si;break;case Yn.position:case Yn.scale:c=us;break;default:switch(n.itemSize){case 1:c=ds;break;case 2:case 3:default:c=us;break}break}const h=i.interpolation!==void 0?Zx[i.interpolation]:ls,d=this._getArrayFromAccessor(n);for(let u=0,f=l.length;u<f;u++){const g=new c(l[u]+"."+Yn[r.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ma(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Si?Kx:td;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function rv(s,e,t){const n=e.attributes,i=new Bn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){const h=ma(ns[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new C,l=new C;for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const _=ma(ns[u.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Mn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Qc(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=pa[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Qt.workingColorSpace!==It&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qt.workingColorSpace}" not supported.`),qn(s,e),rv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Qx(s,e.targets,t):s})}class ov{constructor(e){Je(this,"loader",new Ax);Je(this,"models",{pickaxe:void 0});this.loader.load("./models/pickaxe.glb",t=>{const n=t.scene;this.models.pickaxe=n,e(this.models)})}}function Zr(s=128){const e=document.createElement("canvas");return e.width=s,e.height=s,e}function Jr(s){const e=new st(s);return e.magFilter=$e,e.minFilter=$e,e.colorSpace=Ae,e}function Qr(s,e,t,n){s.fillStyle=e,s.fillRect(0,0,t,n)}function mn(s){const{skin:e,hair:t,beard:n,eyes:i="#1b1b1b",mouth:r="#3a1f1f",shades:o=!1,hat:a,hatText:l,label:c,beardStyle:h="none",glasses:d=!1}=s,u=Zr(128),f=u.getContext("2d");return f.imageSmoothingEnabled=!1,Qr(f,e,128,128),t&&(f.fillStyle=t,f.fillRect(0,0,128,36),f.fillRect(0,0,18,80),f.fillRect(110,0,18,80)),h==="full"?(f.fillStyle=n||"#202020",f.fillRect(20,70,88,40),f.fillRect(34,60,60,18)):h==="goatee"?(f.fillStyle=n||"#202020",f.fillRect(48,86,32,18)):h==="wild"?(f.fillStyle=n||"#e8e8e8",f.fillRect(8,64,112,56),f.fillRect(20,50,88,18)):h==="mustache"&&(f.fillStyle=n||"#202020",f.fillRect(38,78,52,8)),o?(f.fillStyle="#000",f.fillRect(20,50,38,18),f.fillRect(70,50,38,18),f.fillStyle="#222",f.fillRect(58,56,12,6)):d?(f.strokeStyle="#1a1a1a",f.lineWidth=4,f.strokeRect(22,52,32,22),f.strokeRect(74,52,32,22),f.beginPath(),f.moveTo(54,60),f.lineTo(74,60),f.stroke(),f.fillStyle="#cfe8ff",f.fillRect(26,56,24,14),f.fillRect(78,56,24,14),f.fillStyle=i,f.fillRect(34,60,8,8),f.fillRect(86,60,8,8)):(f.fillStyle=i,f.fillRect(28,56,14,14),f.fillRect(86,56,14,14),f.fillStyle="#fff",f.fillRect(30,58,6,6),f.fillRect(88,58,6,6)),h!=="full"&&h!=="wild"&&(f.fillStyle=r,f.fillRect(46,92,36,6)),a&&(f.fillStyle=a,f.fillRect(0,0,128,28),f.fillRect(0,24,128,10),l&&(f.fillStyle="#fff",f.font="bold 18px monospace",f.textAlign="center",f.fillText(l,64,20))),c&&(f.fillStyle="#000",f.fillRect(0,110,128,18),f.fillStyle="#fff",f.font="bold 12px monospace",f.textAlign="center",f.fillText(c,64,124)),Jr(u)}function av(){const s=Zr(128),e=s.getContext("2d");return e.imageSmoothingEnabled=!1,Qr(e,"#d8b193",128,128),e.fillStyle="#3a2a1f",e.fillRect(0,0,128,22),e.fillRect(0,0,14,50),e.fillRect(114,0,14,50),e.fillStyle="#d8b193",e.fillRect(20,14,88,14),e.fillStyle="#888",e.fillRect(28,64,18,14),e.fillRect(82,64,18,14),e.fillStyle="#000",e.fillRect(32,68,10,8),e.fillRect(86,68,10,8),e.fillStyle="#5a4030",e.fillRect(34,90,60,8),e.fillRect(38,96,52,6),e.fillStyle="#7a1010",e.fillRect(50,108,28,6),e.fillStyle="#fff",e.font="bold 9px monospace",e.textAlign="center",e.fillText("TALEB",64,124),Jr(s)}function eh(s={}){const e=Zr(128),t=e.getContext("2d");return t.imageSmoothingEnabled=!1,Qr(t,"#1a1a1a",128,128),t.fillStyle="#fff",t.fillRect(20,30,88,80),t.fillStyle="#1a1a1a",t.fillRect(36,50,14,14),t.fillRect(78,50,14,14),t.fillStyle="#fff",t.fillRect(40,54,4,4),t.fillRect(82,54,4,4),t.fillStyle="#ff9a1f",t.beginPath(),t.moveTo(50,78),t.lineTo(78,78),t.lineTo(64,96),t.closePath(),t.fill(),s.hat&&(t.fillStyle=s.hat,t.fillRect(0,0,128,24),t.fillStyle="#fff",t.font="bold 14px monospace",t.textAlign="center",t.fillText(s.hatText||"FSU",64,18)),Jr(e)}function qt(s,e="#000",t="#fff"){const n=Zr(128),i=n.getContext("2d");i.imageSmoothingEnabled=!1,Qr(i,e,128,128),i.fillStyle=t,i.font="bold 20px monospace",i.textAlign="center",i.textBaseline="middle";const r=s.split(`
`),o=22;return r.forEach((a,l)=>{i.fillText(a,64,64-(r.length-1)*o/2+l*o)}),Jr(n)}const Ut={uncMarks:()=>({face:mn({skin:"#7a4a2a",hair:"#1a1a1a",eyes:"#1a0f08",mouth:"#3a1f1f",beardStyle:"mustache",beard:"#1a1a1a",label:"UNC MARKS"}),body:"#2a2a2a",legs:"#1a1a1a",arms:"#7a4a2a",chest:qt(`HARVARD
ECON`,"#8b1a1a","#f4e3b2")}),taleb:()=>({face:av(),body:"#1a1a2a",legs:"#0a0a1a",arms:"#d8b193",chest:qt("FRAGILE?","#1a1a2a","#ff4444")}),nwa:s=>{const t={eazy:{hat:"#d4af37",hatText:"COMPTON",label:"EAZY-E",skin:"#5a3520"},cube:{hat:"#1f4dff",hatText:"L.A.",label:"ICE CUBE",skin:"#4a2a18"},dre:{hat:"#000",hatText:"RUTHLESS",label:"DR. DRE",skin:"#3a2010"},ren:{hat:"#a52525",hatText:"RAIDERS",label:"MC REN",skin:"#5a3520"},yella:{hat:"#222",hatText:"N.W.A.",label:"DJ YELLA",skin:"#4a2a18"}}[s];return{face:mn({skin:t.skin,eyes:"#1a0f08",shades:!0,beardStyle:s==="dre"?"full":"goatee",beard:"#1a1a1a",hat:t.hat,hatText:t.hatText,label:t.label}),body:"#0a0a0a",legs:"#1a1a2a",arms:t.skin,chest:qt("N.W.A","#000","#fff")}},twoLive:s=>{const t={luke:{label:"LUKE",skin:"#5a3520",shirt:"#a01818",shirtText:"BANNED"},fresh:{label:"FRESH KID",skin:"#4a2a18",shirt:"#1a1a8a",shirtText:"2 LIVE"},mr:{label:"MR. MIXX",skin:"#6a3a20",shirt:"#1a8a1a",shirtText:"CREW"},brother:{label:"BROTHER MARQ",skin:"#4a2a18",shirt:"#a01818",shirtText:"NASTY"}}[s];return{face:mn({skin:t.skin,hair:"#1a1a1a",eyes:"#1a0f08",beardStyle:"goatee",beard:"#1a1a1a",hat:"#222",hatText:"2 LIVE",label:t.label}),body:t.shirt,legs:"#1f2a4a",arms:t.skin,chest:qt(t.shirtText,t.shirt,"#fff")}},marxZombie:()=>({face:mn({skin:"#a8c89a",hair:"#e8e8e8",eyes:"#7a1010",mouth:"#1a1a1a",beardStyle:"wild",beard:"#e8e8e8",label:"KARL MARX"}),body:"#7a1818",legs:"#3a1010",arms:"#a8c89a",chest:qt(`SEIZE
MEANS`,"#7a1818","#f4e3b2")}),smithZombie:()=>({face:mn({skin:"#a8c89a",hair:"#e8e8e8",eyes:"#7a1010",mouth:"#1a1a1a",beardStyle:"none",label:"A.SMITH"}),body:"#7a1818",legs:"#3a1010",arms:"#a8c89a",chest:qt(`INVISIBLE
HAND`,"#7a1818","#f4e3b2")}),linus:()=>({face:mn({skin:"#e8c8a8",hair:"#a87a40",eyes:"#1a3a7a",beardStyle:"mustache",beard:"#7a5020",glasses:!0,label:"LINUS T."}),body:"#1a6a2a",legs:"#202028",arms:"#e8c8a8",chest:qt("LINUX","#1a6a2a","#fff")}),fsuPenguin:()=>({face:eh({hat:"#a52525",hatText:"FSU"}),body:"#a52525",legs:"#ff9a1f",arms:"#1a1a1a",chest:qt("FSU","#a52525","#f4e3b2")}),tux:()=>({face:eh(),body:"#1a1a1a",legs:"#ff9a1f",arms:"#1a1a1a",chest:qt("TUX","#1a1a1a","#fff")}),talebHuman:()=>({face:mn({skin:"#d8b193",hair:"#3a2a1f",eyes:"#1a1a1a",beardStyle:"goatee",beard:"#4a3a2a",glasses:!1,label:"N. TALEB"}),body:"#1a1a2a",legs:"#0a0a1a",arms:"#d8b193",chest:qt("FRAGILE?","#1a1a2a","#ff4444")}),ta:()=>({face:mn({skin:"#e8c8a8",hair:"#1a1a1a",eyes:"#3a3a55",beardStyle:"mustache",beard:"#1a1a1a",glasses:!0,label:"TA · OVERWORKED"}),body:"#1a3a6a",legs:"#222",arms:"#e8c8a8",chest:qt("GRADING","#1a3a6a","#fff")}),dean:()=>({face:mn({skin:"#f0d8b8",hair:"#a8a8a8",eyes:"#1a3a7a",beardStyle:"none",glasses:!0,label:"DEAN"}),body:"#222222",legs:"#1a1a1a",arms:"#f0d8b8",chest:qt("DEAN","#a01818","#fff")}),y2k:()=>({face:mn({skin:"#e8c8a8",hair:"#a8a8a8",eyes:"#7a1010",beardStyle:"wild",beard:"#dadada",label:"Y2K PROPHET"}),body:"#5a3010",legs:"#3a2010",arms:"#e8c8a8",chest:qt(`Y2K
DOOM`,"#5a3010","#ffd54a")}),dormFriend:(s=0)=>{const e=[{skin:"#5a3520",hair:"#0a0a0a",shirt:"#8b1a1a",shirtText:"HARVARD",chestBg:"#8b1a1a",chestFg:"#f4e3b2",legs:"#1a1a2a",beardStyle:"goatee",hat:null},{skin:"#4a2a18",hair:"#0a0a0a",shirt:"#1a1a1a",shirtText:"BULLS",chestBg:"#a01818",chestFg:"#fff",legs:"#3a3a44",beardStyle:"none",hat:"#a01818",hatText:"BULLS"},{skin:"#6a3a20",hair:"#1a1a1a",shirt:"#1a1a8a",shirtText:"FUBU",chestBg:"#1a1a8a",chestFg:"#ffd54a",legs:"#1f2a4a",beardStyle:"mustache",hat:null},{skin:"#3a2010",hair:"#0a0a0a",shirt:"#a01818",shirtText:"CRIMSON",chestBg:"#a01818",chestFg:"#fff",legs:"#1a1a1a",beardStyle:"goatee",hat:"#1a1a1a",hatText:"'99"}],t=e[s%e.length];return{face:mn({skin:t.skin,hair:t.hair,eyes:"#1a0f08",beardStyle:t.beardStyle,beard:"#1a1a1a",hat:t.hat,hatText:t.hatText,label:"DORM FRIEND"}),body:t.shirt,legs:t.legs,arms:t.skin,chest:qt(t.shirtText,t.chestBg,t.chestFg)}}};function Wa(s,e="#7a4a2a"){const t=new q({color:e}),n=new q({map:s});return[t,t,t,t,n,t]}function nd(s,e){const t=new q({color:e}),n=new q({map:s});return[t,t,t,t,n,t]}function sn(s,e={}){const t=new dt,n=e.scale||1,i=new de(.9,.9,.9),r=new F(i,Wa(s.face,s.arms));r.position.y=1.85,r.castShadow=!0,t.add(r),t.userData.head=r;const o=new de(1,1.4,.5),a=new F(o,nd(s.chest,s.body));a.position.y=.7,a.castShadow=!0,t.add(a);const l=new de(.3,1.4,.4),c=new q({color:s.arms}),h=new F(l,c);h.position.set(-.65,.7,0),h.castShadow=!0,t.add(h);const d=new F(l,c);d.position.set(.65,.7,0),d.castShadow=!0,t.add(d),t.userData.arms=[h,d];const u=new de(.45,1,.45),f=new q({color:s.legs}),g=new F(u,f);g.position.set(-.25,-.5,0),g.castShadow=!0,t.add(g);const _=new F(u,f);if(_.position.set(.25,-.5,0),_.castShadow=!0,t.add(_),t.userData.legs=[g,_],e.holdBook){const m=new de(.7,.5,.15),p=document.createElement("canvas");p.width=128,p.height=128;const y=p.getContext("2d");y.fillStyle="#8b1a1a",y.fillRect(0,0,128,128),y.fillStyle="#f4e3b2",y.font="bold 18px serif",y.textAlign="center",y.fillText("HARVARD",64,50),y.fillText("ECON",64,78),y.fillText("PhD",64,102);const x=new st(p);x.magFilter=$e;const v=new q({map:x}),b=new F(m,v);b.position.set(.65,.95,.5),b.castShadow=!0,t.add(b)}if(e.holdSword){const m=new de(.15,1.6,.1),p=document.createElement("canvas");p.width=64,p.height=256;const y=p.getContext("2d");y.fillStyle="#5ad8e0",y.fillRect(0,0,64,200),y.fillStyle="#8b6020",y.fillRect(0,200,64,56),y.fillStyle="#fff",y.font="bold 14px monospace",y.save(),y.translate(32,100),y.rotate(-Math.PI/2),y.textAlign="center",y.fillText("ADA COMPLIANCE",0,5),y.restore();const x=new st(p);x.magFilter=$e;const v=new q({map:x}),b=new F(m,v);b.position.set(-.65,1.4,.5),b.rotation.z=-.3,b.castShadow=!0,t.add(b)}if(e.holdMic){const m=new de(.18,.6,.18),p=new F(m,new q({color:"#222"})),y=new F(new Un(.18,8,6),new q({color:"#888"}));y.position.y=.4,p.add(y),p.position.set(.65,1.1,.4),p.rotation.x=-.4,t.add(p)}return t.scale.set(n,n,n),t}function jo(s,e={}){const t=new dt,n=e.scale||.9,i=new de(1,1.6,.9),r=new F(i,nd(s.chest,s.body));r.position.y=.8,r.castShadow=!0,t.add(r);const o=new de(.85,.85,.85),a=new F(o,Wa(s.face,s.body));a.position.y=2,a.castShadow=!0,t.add(a),t.userData.head=a;const l=new de(.2,1,.5),c=new q({color:s.arms}),h=new F(l,c);h.position.set(-.6,.9,0),t.add(h);const d=new F(l,c);d.position.set(.6,.9,0),t.add(d);const u=new de(.3,.15,.5),f=new q({color:s.legs}),g=new F(u,f);g.position.set(-.25,-.05,.15),t.add(g);const _=new F(u,f);return _.position.set(.25,-.05,.15),t.add(_),t.scale.set(n,n,n),t}function lv(s){const e=new dt,t=new de(3,1.8,5.5),n=new q({color:657940}),i=new F(t,n);i.castShadow=!0,e.add(i);const r=new q({color:1315872}),o=new F(new de(1.2,1.2,1.2),r);o.position.set(0,.7,3),e.add(o);const a=new F(new de(1,1,1),r);a.position.set(0,1.2,3.9),e.add(a);const l=new de(2.4,2.4,2.4),c=new F(l,Wa(s.face,"#d8b193"));c.position.set(0,1.8,5),c.castShadow=!0,e.add(c),e.userData.head=c;const h=new q({map:s.face}),d=new F(new mt(2.4,2.4),h);d.position.set(1.21,1.8,5),d.rotation.y=Math.PI/2,e.add(d);const u=new F(new mt(2.4,2.4),h);u.position.set(-1.21,1.8,5),u.rotation.y=-Math.PI/2,e.add(u);const f=new it({color:16724016}),g=new F(new de(.18,.18,.05),f);g.position.set(-.45,2,6.22),e.add(g);const _=new F(new de(.18,.18,.05),f);_.position.set(.45,2,6.22),e.add(_);const m=new q({color:1706504}),p=new F(new Ys(.3,1.2,5),m);p.position.set(-.9,3.2,5),p.rotation.z=.3,e.add(p);const y=new F(new Ys(.3,1.2,5),m);y.position.set(.9,3.2,5),y.rotation.z=-.3,e.add(y);const x=document.createElement("canvas");x.width=128,x.height=128;const v=x.getContext("2d");v.fillStyle="#1da1f2",v.font="bold 100px sans-serif",v.textAlign="center",v.textBaseline="middle",v.fillText("𝕏",64,70);const b=new st(x);b.colorSpace=Ae;const E=new dn(new en({map:b,transparent:!0}));E.scale.set(1.5,1.5,1),E.position.set(0,4,4),e.add(E);const R=new q({color:526352,side:Bt,transparent:!0,opacity:.95}),P=new mt(5.5,3.2),M=new F(P,R);M.position.set(-3.2,1.4,0),M.rotation.y=Math.PI/2,e.add(M);const w=new F(P,R);w.position.set(3.2,1.4,0),w.rotation.y=-Math.PI/2,e.add(w),e.userData.wings=[M,w];for(let O=0;O<7;O++){const I=new F(new de(.7-O*.07,.7-O*.07,.7),n);I.position.set(0,.3-O*.06,-3-O*.65),e.add(I)}const G=new de(.5,.9,.5);for(const[O,I]of[[-1.1,1.6],[1.1,1.6],[-1.1,-1.6],[1.1,-1.6]]){const D=new F(G,n);D.position.set(O,-1.1,I),e.add(D)}return e}function th(s,e,t,n){const i=s.getContext("2d");i.imageSmoothingEnabled=!1,i.clearRect(0,0,s.width,s.height),i.fillStyle=n,i.fillRect(8,8,496,120),i.fillStyle="#000",i.fillRect(0,0,512,8),i.fillRect(0,128,512,8),i.fillRect(0,0,8,136),i.fillRect(504,0,8,136),i.fillStyle=n,i.beginPath(),i.moveTo(60,128),i.lineTo(110,128),i.lineTo(80,160),i.closePath(),i.fill(),i.strokeStyle="#000",i.lineWidth=8,i.beginPath(),i.moveTo(60,128),i.lineTo(80,160),i.lineTo(110,128),i.stroke(),i.fillStyle=t;const r=String(e).split(`
`);let o=48;i.font=`bold ${o}px monospace`;let a=Math.max(...r.map(h=>i.measureText(h).width));for(;a>460&&o>18;)o-=2,i.font=`bold ${o}px monospace`,a=Math.max(...r.map(h=>i.measureText(h).width));i.textAlign="center",i.textBaseline="middle";const l=o*1.05,c=68-(r.length-1)*l/2;r.forEach((h,d)=>i.fillText(h,256,c+d*l))}function cv(s,e={}){const t=e.fg||"#000",n=e.bg||"#fff",i=document.createElement("canvas");i.width=512,i.height=160,th(i,s,t,n);const r=new st(i);r.magFilter=$e,r.minFilter=Wt,r.colorSpace=Ae;const o=new en({map:r,transparent:!0,depthTest:!1}),a=new dn(o);return a.scale.set(2.4,.75,1),a.renderOrder=999,a.userData.setText=(l,c={})=>{th(i,l,c.fg||t,c.bg||n),r.needsUpdate=!0},a}function hv(s,e="#ffeb3b"){const t=document.createElement("canvas");t.width=512,t.height=64;const n=t.getContext("2d");n.fillStyle="rgba(0,0,0,0.55)",n.fillRect(0,0,512,64),n.fillStyle=e,n.font="bold 40px monospace",n.textAlign="center",n.textBaseline="middle",n.fillText(s,256,34);const i=new st(t);i.magFilter=$e,i.colorSpace=Ae;const r=new en({map:i,transparent:!0,depthTest:!1}),o=new dn(r);return o.scale.set(2,.25,1),o.renderOrder=998,o}function dv(s,e){const t=document.createElement("canvas");t.width=s*64,t.height=e*80;const n=t.getContext("2d"),i="#7a2418",r="#5a1408";n.fillStyle=i,n.fillRect(0,0,t.width,t.height);for(let a=0;a<t.height/8;a++){const l=a*8;n.fillStyle=r,n.fillRect(0,l,t.width,1);const c=a%2*16;for(let h=0;h<t.width/32;h++)n.fillRect(h*32+c,l,1,8)}for(let a=0;a<t.width*t.height/80;a++)n.fillStyle=`rgba(${110+Math.random()*30},${30+Math.random()*20},20,${.35})`,n.fillRect(Math.random()*t.width,Math.random()*t.height,4+Math.random()*6,4);for(let a=0;a<e;a++)for(let l=0;l<s;l++){const c=l*64+14,h=a*80+14,d=36,u=52;n.fillStyle="#fff",n.fillRect(c-3,h-3,d+6,u+6);const f=n.createLinearGradient(c,h,c,h+u);f.addColorStop(0,"#1a1a2a"),f.addColorStop(.5,"#3a3a55"),f.addColorStop(1,"#1a1a2a"),n.fillStyle=f,n.fillRect(c,h,d,u),n.fillStyle="#fff",n.fillRect(c+d/2-1,h,2,u),n.fillRect(c,h+u/2-1,d,2)}n.fillStyle="#e8e0c8",n.fillRect(0,t.height-6,t.width,6);const o=new st(t);return o.magFilter=$e,o.colorSpace=Ae,o}function uv(){const s=document.createElement("canvas");s.width=s.height=64;const e=s.getContext("2d");e.fillStyle="#3a3a4a",e.fillRect(0,0,64,64);for(let n=0;n<16;n++){const i=n*4;e.fillStyle=`rgb(${40+n%3*8},${40+n%3*8},${55+n%3*8})`,e.fillRect(0,i,64,4),e.fillStyle="#1a1a25",e.fillRect(0,i,64,1)}const t=new st(s);return t.wrapS=t.wrapT=kn,t.magFilter=$e,t.colorSpace=Ae,t}function fv(s,e){const t=document.createElement("canvas");t.width=s*64,t.height=e*80;const n=t.getContext("2d");n.fillStyle="#ddd2bb",n.fillRect(0,0,t.width,t.height),n.fillStyle="#aea693";for(let r=0;r<t.height/16;r++){const o=r*16;n.fillRect(0,o,t.width,1);const a=r%2*32;for(let l=0;l<t.width/64+1;l++)n.fillRect(l*64+a,o,1,16)}for(let r=0;r<t.width*t.height/200;r++)n.fillStyle=`rgba(${160+Math.random()*30},${150+Math.random()*30},${130+Math.random()*30},${.25})`,n.fillRect(Math.random()*t.width,Math.random()*t.height,4+Math.random()*8,4);for(let r=0;r<e;r++)for(let o=0;o<s;o++){const a=o*64+14,l=r*80+12,c=36,h=60;n.fillStyle="#5a5040",n.fillRect(a-3,l-3,c+6,h+6);const d=n.createLinearGradient(a,l,a,l+h);d.addColorStop(0,"#1a1a2a"),d.addColorStop(.5,"#3a4055"),d.addColorStop(1,"#1a1a2a"),n.fillStyle=d,n.fillRect(a,l,c,h),n.fillStyle="#ddd2bb",n.beginPath(),n.arc(a+c/2,l,c/2+4,Math.PI,0),n.fill(),n.fillStyle="#aea693",n.fillRect(a+c/2-1,l,2,h),n.fillRect(a,l+h/3-1,c,2),n.fillRect(a,l+2*h/3-1,c,2)}const i=new st(t);return i.magFilter=$e,i.colorSpace=Ae,i}function Qi(s){const{w:e=14,d:t=8,floors:n=3,windowsPerSide:i=5,hasCupola:r=!1,hasColumns:o=!0,signText:a=null,style:l="brick",columnCount:c=2,hasGrandPortico:h=!1}=s,d=new dt,f=n*3.2,g=l==="stone"?fv:dv,_=g(i,n),m=g(Math.max(2,Math.floor(t/2.8)),n),p=new q({map:_}),y=new q({map:m}),x=l==="stone"?11445907:5903368,v=l==="stone"?9077360:3803652,b=new F(new de(e,f,t),[y,y,new q({color:x}),new q({color:v}),p,p]);b.position.y=f/2,b.castShadow=!0,b.receiveShadow=!0,d.add(b);const E=2.6,R=uv();R.repeat.set(e/4,E/2);const P=new q({map:R}),M=e+.6,w=t+.6,G=new mt(M,Math.sqrt((w/2)**2+E**2)),O=new F(G,P);O.position.set(0,f+E/2,w/4),O.rotation.x=-Math.atan2(E,w/2),O.castShadow=!0,d.add(O);const I=new F(G,P);I.position.set(0,f+E/2,-w/4),I.rotation.x=Math.atan2(E,w/2),I.castShadow=!0,d.add(I);const D=new aa;D.moveTo(-M/2,0),D.lineTo(M/2,0),D.lineTo(0,E),D.closePath();const H=new Xr(D),K=new q({color:l==="stone"?14537403:8004632}),Y=new F(H,K);Y.position.set(0,f,-w/2),Y.rotation.y=Math.PI,d.add(Y);const Z=new F(H,K);Z.position.set(0,f,w/2),d.add(Z);const Q=new q({color:3805192}),J=new F(new de(.8,1.6,.8),Q);J.position.set(-e*.32,f+E+.4,0),d.add(J);const U=new F(new de(.8,1.6,.8),Q);if(U.position.set(e*.32,f+E+.4,0),d.add(U),o||h){const B=new q({color:16051152}),ie=h?f:3.6,re=h?1.6:.4,ee=new F(new de(2,3.2,.2),new q({color:3805192}));ee.position.set(0,1.6,t/2+.11),d.add(ee);const Me=new F(new de(2.4,3.6,.15),B);Me.position.set(0,1.8,t/2+.06),d.add(Me);const ve=h?e*.85:3.8,xe=h?.32:.2,Ee=h?1:.6;for(let se=0;se<c;se++){const le=c===1?.5:se/(c-1),_e=-ve/2+ve*le,Oe=new F(new Ot(xe,xe,ie,12),B);Oe.position.set(_e,ie/2,t/2+re),Oe.castShadow=!0,d.add(Oe);const Ie=new F(new de(Ee,.25,Ee),B);Ie.position.set(_e,ie+.12,t/2+re),d.add(Ie);const Pe=new F(new de(Ee,.18,Ee),B);Pe.position.set(_e,.09,t/2+re),d.add(Pe)}const ze=h?ve+1.2:4.6,Ce=new F(new de(ze,.6,re+.6),B);if(Ce.position.set(0,ie+.5,t/2+re),d.add(Ce),h){const se=new aa;se.moveTo(-ze/2,0),se.lineTo(ze/2,0),se.lineTo(0,1.6),se.closePath();const le=new Xr(se),_e=new F(le,B);_e.position.set(0,ie+.8,t/2+re+.31),d.add(_e)}const N=h?6:3,Qe=h?ve+.8:4;for(let se=0;se<N;se++){const le=new F(new de(Qe-se*.3,.2,1.2-se*.15),new q({color:11184810}));le.position.set(0,.1+se*.2,t/2+re+1-se*.15),le.receiveShadow=!0,d.add(le)}}if(r){const B=new q({color:16051152}),ie=new F(new de(2.6,3,2.6),B);ie.position.set(0,f+E+1.5,0),ie.castShadow=!0,d.add(ie);const re=document.createElement("canvas");re.width=re.height=128;const ee=re.getContext("2d");ee.fillStyle="#f4ebd0",ee.fillRect(0,0,128,128),ee.fillStyle="#fff",ee.beginPath(),ee.arc(64,64,42,0,Math.PI*2),ee.fill(),ee.strokeStyle="#000",ee.lineWidth=4,ee.beginPath(),ee.arc(64,64,42,0,Math.PI*2),ee.stroke(),ee.fillStyle="#000";for(let Ce=0;Ce<12;Ce++){const N=Ce*Math.PI/6-Math.PI/2;ee.fillRect(64+Math.cos(N)*36-2,64+Math.sin(N)*36-2,4,4)}ee.lineWidth=4,ee.beginPath(),ee.moveTo(64,64),ee.lineTo(64,32),ee.stroke(),ee.beginPath(),ee.moveTo(64,64),ee.lineTo(86,70),ee.stroke();const Me=new st(re);Me.colorSpace=Ae;const ve=new F(new mt(1.8,1.8),new q({map:Me}));ve.position.set(0,f+E+1.5,1.32),d.add(ve);const xe=new F(new Un(1.4,16,8,0,Math.PI*2,0,Math.PI/2),new q({color:12634288}));xe.position.set(0,f+E+3,0),d.add(xe);const Ee=new F(new Ot(.05,.05,2.4,6),new q({color:546}));Ee.position.set(0,f+E+4.5,0),d.add(Ee);const ze=new F(new mt(1.2,.7),new it({color:10491928,side:Bt}));ze.position.set(.65,f+E+5.2,0),d.add(ze)}if(a){const B=document.createElement("canvas");B.width=256,B.height=64;const ie=B.getContext("2d");ie.fillStyle="#f4ebd0",ie.fillRect(0,0,256,64),ie.fillStyle="#3a1008",ie.font="bold 22px serif",ie.textAlign="center",ie.textBaseline="middle",ie.fillText(a,128,34);const re=new st(B);re.colorSpace=Ae;const ee=new F(new mt(3.6,.9),new q({map:re}));ee.position.set(0,4.6,t/2+.12),d.add(ee)}return d}function pv(s=1){const e=new dt,t=new F(new Ot(.25*s,.32*s,2.4*s,8),new q({color:5910544}));t.position.y=1.2*s,t.castShadow=!0,e.add(t);for(let n=0;n<4;n++){const i=new F(new Un(1*s+Math.random()*.3,8,6),new q({color:2976301}));i.position.set((Math.random()-.5)*1*s,2.6*s+(Math.random()-.3)*.8,(Math.random()-.5)*1*s),i.castShadow=!0,e.add(i)}return e}function ga(s,e,t,n,i,r){const o=(()=>{const l=document.createElement("canvas");l.width=l.height=64;const c=l.getContext("2d");c.fillStyle="#a89070",c.fillRect(0,0,64,64);for(let d=0;d<80;d++)c.fillStyle=`rgba(${100+Math.random()*60},${80+Math.random()*40},${50+Math.random()*30},0.5)`,c.fillRect(Math.random()*64,Math.random()*64,2,2);const h=new st(l);return h.wrapS=h.wrapT=kn,h.repeat.set(n/2,i/2),h.colorSpace=Ae,h.magFilter=$e,h})(),a=new F(new mt(n,i),new q({map:o}));return a.rotation.x=-Math.PI/2,a.position.set(s,e+.05,t),a.receiveShadow=!0,r.add(a),a}function mv(s,e,t,n){const i=new dt,r=9,o=7,a=4.2,l=new q({color:14209724}),c=new q({color:6963248}),h=new q({color:13156520}),d=new F(new de(r,.2,o),c);d.position.set(0,.1,0),d.receiveShadow=!0,i.add(d);const u=new F(new de(r,.2,o),h);u.position.set(0,a,0),i.add(u);const f=new F(new de(r,a,.2),l);f.position.set(0,a/2,-o/2),i.add(f);const g=new F(new de(.2,a,o),l);g.position.set(-r/2,a/2,0),i.add(g);const _=new F(new de(.2,a,o),l);_.position.set(r/2,a/2,0),i.add(_);const m=new q({color:2236962}),p=new q({color:10491928}),y=new q({color:16051152});function x(se){const le=new dt,_e=new F(new de(2.2,.15,1.2),m);_e.position.set(0,.7,0),le.add(_e);const Oe=new F(new de(2,.25,1),p);Oe.position.set(0,.95,0),le.add(Oe);const Ie=new F(new de(1.8,.05,.85),y);Ie.position.set(0,1.1,.05),le.add(Ie);const Pe=new F(new de(2.2,.15,1.2),m);Pe.position.set(0,2.4,0),le.add(Pe);const Ye=new F(new de(2,.25,1),p);Ye.position.set(0,2.65,0),le.add(Ye);for(const et of[-1,1])for(const tt of[-.5,.5]){const A=new F(new de(.12,2.6,.12),m);A.position.set(et,1.5,tt),le.add(A)}return le.position.set(se,.2,-o/2+.7),le}i.add(x(-2.2)),i.add(x(2.2));const v=new q({color:9134112}),b=new F(new de(.9,.1,3),v);b.position.set(-r/2+.55,1.1,1),i.add(b);const E=new F(new de(.9,1.1,.1),v);E.position.set(-r/2+.55,.55,2.45),i.add(E);const R=new F(new de(.9,1.1,.1),v);R.position.set(-r/2+.55,.55,-.45),i.add(R);const P=document.createElement("canvas");P.width=P.height=64;const M=P.getContext("2d");for(let se=0;se<64;se++)for(let le=0;le<64;le++){const _e=Math.floor(Math.random()*255);M.fillStyle=`rgb(${_e},${_e},${_e})`,M.fillRect(le,se,1,1)}M.fillStyle="#ff5252",M.fillRect(0,26,64,4),M.fillStyle="#5ad8e0",M.fillRect(0,30,64,4),M.fillStyle="#ffd54a",M.fillRect(0,34,64,4);const w=new st(P);w.colorSpace=Ae,w.magFilter=$e;const G=new F(new de(1.4,1.3,1.2),new q({color:3816e3}));G.position.set(-r/2+.7,1.85,1),i.add(G);const O=new F(new mt(1,.85),new it({map:w}));O.rotation.y=Math.PI/2,O.position.set(-r/2+1.42,1.95,1),i.add(O);const I=new q({color:11184810}),D=new F(new Ot(.02,.02,1.2,6),I);D.position.set(-r/2+.7,3.1,1.2),D.rotation.z=-.4,i.add(D);const H=new F(new Ot(.02,.02,1.2,6),I);H.position.set(-r/2+.7,3.1,.8),H.rotation.z=.4,i.add(H);const K=new F(new de(1.2,.18,.7),new q({color:15130832}));K.position.set(-r/2+.6,1.25,1),i.add(K);const Y=new F(new de(1.21,.03,.7),new q({color:2236962}));Y.position.set(-r/2+.6,1.16,1),i.add(Y);const Z=new F(new de(.6,.4,1.2),new q({color:1118481}));Z.position.set(-r/2+.55,1.35,2.2),i.add(Z);for(const se of[-.4,.4]){const le=new F(new ui(.13,12),new it({color:16747546}));le.rotation.y=Math.PI/2,le.position.set(-r/2+.86,1.35,2.2+se*.5),i.add(le)}const Q=new q({color:5910544});for(let se=0;se<3;se++){const le=new F(new de(1.2,1,.9),Q);le.position.set(r/2-.6,.7+se*1.05,-1.5),i.add(le);for(let _e=0;_e<3;_e++){const Oe=new F(new de(.18,.8,.2),new q({color:["#a01818","#1a1a8a","#1a6a2a","#ffd54a"][(se+_e)%4]}));Oe.position.set(r/2-.65,.7+se*1.05,-1.85+_e*.3),i.add(Oe)}}const J=new F(new de(1.2,1,1),new q({color:15130832}));J.position.set(r/2-.7,1.65,1.5),i.add(J);const U=new F(new mt(.85,.7),new it({color:662090}));U.rotation.y=-Math.PI/2,U.position.set(r/2-1.31,1.7,1.5),i.add(U);const B=(()=>{const se=document.createElement("canvas");se.width=128,se.height=64;const le=se.getContext("2d");return le.fillStyle="#0a1a4a",le.fillRect(0,0,128,64),le.fillStyle="#fff",le.font="bold 14px monospace",le.textAlign="center",le.fillText("YOU'VE GOT",64,24),le.fillStyle="#ffd54a",le.fillText("MAIL",64,42),le.fillStyle="#fff",le.font="8px monospace",le.fillText("— AOL 4.0 —",64,58),new st(se)})();B.colorSpace=Ae,B.magFilter=$e,U.material=new it({map:B});const ie=new F(new de(.5,1.3,1.2),new q({color:15130832}));ie.position.set(r/2-.4,.85,2.5),i.add(ie);const re=new F(new de(.7,.12,.5),new q({color:2236962}));re.position.set(r/2-.5,1.56,2.5),i.add(re);for(let se=0;se<4;se++){const le=new F(new de(.06,.04,.06),new it({color:[3407667,16755234,16720418,3399167][se]}));le.position.set(r/2-.7,1.62,2.3+se*.1),i.add(le)}const ee=new F(new Ot(.3,.3,.02,24),new it({color:12638463}));ee.position.set(-r/2+.7,1.16,0),ee.rotation.x=-.05,i.add(ee);const Me=new F(new de(.5,.12,.7),new q({color:13156520}));Me.position.set(r/2-.6,1.16,.5),i.add(Me);const ve=new F(new de(.5,.12,.18),new q({color:12103840}));ve.position.set(r/2-.6,1.28,.5),i.add(ve);function xe(se,le,_e,Oe,Ie,Pe,Ye,et=0){const tt=document.createElement("canvas");tt.width=128,tt.height=192;const A=tt.getContext("2d");A.fillStyle=_e,A.fillRect(0,0,128,192),A.fillStyle=Oe,A.font="bold 22px monospace",A.textAlign="center",A.fillText(se,64,110),A.font="11px monospace",A.fillText(le,64,160);const S=new st(tt);S.colorSpace=Ae,S.magFilter=$e;const k=new F(new mt(1,1.5),new q({map:S}));k.position.set(Ie,Pe,Ye),k.rotation.y=et,i.add(k)}xe("BULLS","1996 NBA CHAMPS","#a01818","#fff",0,3,-o/2+.12),xe("CALIFORNIA","LOVE '96","#000","#ffd54a",-1.2,3,-o/2+.12),xe("Y2K","plan accordingly","#1a1a8a","#fff",1.2,3,-o/2+.12);const Ee=document.createElement("canvas");Ee.width=256,Ee.height=64;const ze=Ee.getContext("2d");ze.fillStyle="#1a0a05",ze.fillRect(0,0,256,64),ze.fillStyle="#ffd54a",ze.font="bold 20px monospace",ze.textAlign="center",ze.fillText("UNC MARKS — DORM, 1999",128,28),ze.fillStyle="#fff",ze.font="italic 12px monospace",ze.fillText("pre-internet · Easter egg",128,50);const Ce=new st(Ee);Ce.colorSpace=Ae,Ce.magFilter=$e;const N=new dn(new en({map:Ce,depthTest:!1}));N.scale.set(5,1.25,1),N.position.set(0,a+1.4,o/2-.2),N.renderOrder=998,i.add(N);const Qe=new Bs(16765082,1.4,14,2);return Qe.position.set(0,a-.4,0),i.add(Qe),i.position.set(s,e,t),n.add(i),i}function gv(s,e,t,n,i,r){const o=new dt,a=new F(new Ot(.08,.1,4,8),new q({color:2236962}));a.position.y=2,a.castShadow=!0,o.add(a);const l=document.createElement("canvas");l.width=256,l.height=192;const c=l.getContext("2d");c.fillStyle="#f4ebd0",c.fillRect(0,0,256,192),c.fillStyle=t,c.fillRect(0,0,256,8),c.fillRect(0,184,256,8),c.fillStyle="#000",c.font="bold 14px monospace",c.textAlign="center",c.fillText("LIS3353",128,30),c.fillStyle=t,c.font="bold 22px monospace",c.fillText(s,128,78),c.fillStyle="#000",c.font="14px monospace";const h=e.split(" ");let d="",u=110;for(const _ of h){const m=d+_+" ";c.measureText(m).width>230?(c.fillText(d,128,u),d=_+" ",u+=20):d=m}c.fillText(d,128,u),c.font="italic 11px monospace",c.fillStyle="#5a3010",c.fillText("— Prof. Marks",128,174);const f=new st(l);f.colorSpace=Ae,f.magFilter=$e;const g=new F(new mt(2,1.5),new q({map:f,side:Bt}));return g.position.set(0,3.4,0),g.castShadow=!0,o.add(g),o.rotation.y=Math.random()*Math.PI*2,o.position.set(n,i,r),o}function _v(s,e,t,n){new dt;const i=(()=>{const M=document.createElement("canvas");M.width=M.height=64;const w=M.getContext("2d");w.fillStyle="#3a7a2a",w.fillRect(0,0,64,64);for(let O=0;O<200;O++)w.fillStyle=`rgba(${30+Math.random()*40},${100+Math.random()*40},${30+Math.random()*20},0.7)`,w.fillRect(Math.random()*64,Math.random()*64,2,2);const G=new st(M);return G.wrapS=G.wrapT=kn,G.repeat.set(8,8),G.colorSpace=Ae,G})(),r=new F(new mt(48,36),new q({map:i}));r.rotation.x=-Math.PI/2,r.position.set(e,t+.02,n),r.receiveShadow=!0,s.add(r);const o=Qi({w:18,d:9,floors:4,windowsPerSide:7,hasCupola:!0,hasColumns:!0,signText:"MASSEY HALL"});o.position.set(e,t,n-12),s.add(o);const a=Qi({w:12,d:7,floors:3,windowsPerSide:4,hasCupola:!1,hasColumns:!0,signText:"WIGGLESWORTH"});a.position.set(e-16,t,n-4),a.rotation.y=Math.PI/2,s.add(a);const l=Qi({w:12,d:7,floors:3,windowsPerSide:4,hasCupola:!1,hasColumns:!0,signText:"SEVER HALL"});l.position.set(e+16,t,n-4),l.rotation.y=-Math.PI/2,s.add(l);const c=Qi({w:14,d:6,floors:2,windowsPerSide:5,hasCupola:!1,hasColumns:!0,signText:"WIDENER LIBRARY"});c.position.set(e,t,n+8),c.rotation.y=Math.PI,s.add(c);const h=[{title:"BASH ASSIGNMENT",body:"due Friday — pipes & grep",fg:"#1a6a2a"},{title:"GET LINUX",body:"install Ubuntu or get out",fg:"#a01818"},{title:"GNU GPL v3",body:"free as in freedom",fg:"#000"},{title:"TOR & ENCRYPTION",body:"know your threat model",fg:"#1a1a8a"},{title:"P2P · IoT · IPv6",body:"the protocols that matter",fg:"#7a2418"},{title:"FAIR USE",body:"cite, don’t plagiarize",fg:"#000"},{title:"HELLO, WORLD",body:"every algorithm starts here",fg:"#1a6a2a"},{title:"OFFICE HOURS",body:"by appt — see syllabus",fg:"#a01818"}],d=[[-22,-16],[22,-16],[-18,14],[18,14],[0,16],[-24,0],[24,12],[10,-16]];h.forEach((M,w)=>{const[G,O]=d[w];s.add(gv(M.title,M.body,M.fg,e+G,t,n+O))}),ga(e,t,n,4,36,s),ga(e,t,n,48,4,s);const u=[[-10,4],[10,4],[-12,-2],[12,-2],[-8,-10],[8,-10],[-20,6],[20,6],[-4,10],[4,10]];for(const[M,w]of u){const G=pv(.9+Math.random()*.4);G.position.set(e+M,t,n+w),s.add(G)}const f=new q({color:4866096}),g=new F(new de(1.4,1.2,1.4),new q({color:6974058}));g.position.set(e,t+.6,n-6),s.add(g);const _=new F(new de(.8,1.6,.6),f);_.position.set(e,t+2,n-6),s.add(_);const m=new F(new de(.5,.5,.5),new q({color:6965296}));m.position.set(e,t+3.05,n-6),s.add(m);const p=document.createElement("canvas");p.width=256,p.height=80;const y=p.getContext("2d");y.fillStyle="#8b6020",y.fillRect(0,0,256,80),y.fillStyle="#f4e3b2",y.font="bold 18px serif",y.textAlign="center",y.fillText("JOHN HARVARD",128,28),y.font="bold 13px serif",y.fillText("Founder · 1638",128,50),y.font="italic 11px serif",y.fillText("(statue of 3 lies)",128,68);const x=new st(p);x.colorSpace=Ae;const v=new F(new mt(1.4,.5),new q({map:x}));v.position.set(e,t+.7,n-5.27),s.add(v);const b=document.createElement("canvas");b.width=512,b.height=128;const E=b.getContext("2d");E.fillStyle="#1a0a05",E.fillRect(0,0,512,128),E.fillStyle="#7a2418",E.fillRect(8,8,496,112),E.fillStyle="#f4ebd0",E.font="bold 56px serif",E.textAlign="center",E.fillText("VERITAS",256,60),E.font="italic 18px serif",E.fillText("— Harvard University —",256,96);const R=new st(b);R.colorSpace=Ae;const P=new dn(new en({map:R,depthTest:!1}));P.scale.set(8,2,1),P.position.set(e,t+6,n+16),P.renderOrder=996,s.add(P),mv(e-28,t,n-14,s)}function xv(s,e,t,n){const i=Qi({w:16,d:8,floors:4,windowsPerSide:6,style:"stone",hasCupola:!1,hasColumns:!1,hasGrandPortico:!0,columnCount:6,signText:"COLUMBIA LAW"});i.position.set(e,t,n),s.add(i),ga(e,t,n+6,12,6,s);const r=new q({color:11048056});for(const h of[-3.6,3.6]){const d=new F(new de(1.2,.8,1.2),r);d.position.set(e+h,t+.4,n+4.6),s.add(d);const u=new F(new de(1,.7,1.6),new q({color:12100740}));u.position.set(e+h,t+1.15,n+4.6),s.add(u);const f=new F(new de(.7,.7,.7),new q({color:12100740}));f.position.set(e+h,t+1.85,n+5.3),s.add(f)}const o=document.createElement("canvas");o.width=512,o.height=96;const a=o.getContext("2d");a.fillStyle="#1a3a8a",a.fillRect(0,0,512,96),a.fillStyle="#fff",a.font="bold 44px serif",a.textAlign="center",a.fillText("COLUMBIA LAW",256,50),a.font="italic 18px serif",a.fillText("In lumine Tuo videbimus lumen",256,78);const l=new st(o);l.colorSpace=Ae;const c=new dn(new en({map:l,depthTest:!1}));c.scale.set(8,1.5,1),c.position.set(e,t+12,n),c.renderOrder=996,s.add(c)}function vv(s,e,t,n){const i=new dt,r=new F(new de(20,.3,16),new q({color:13156520}));r.position.set(0,.15,0),r.receiveShadow=!0,i.add(r);const o=30,a=5,l=4.5,c=(()=>{const I=document.createElement("canvas");I.width=64,I.height=256;const D=I.getContext("2d");D.fillStyle="#f0ebe0",D.fillRect(0,0,64,256);for(let K=0;K<24;K++){const Y=K*10+4;D.fillStyle="#3a4055",D.fillRect(8,Y,8,6),D.fillRect(20,Y,8,6),D.fillRect(36,Y,8,6),D.fillRect(48,Y,8,6)}for(let K=0;K<24;K++)D.fillStyle="#d8d0bc",D.fillRect(0,K*10+11,64,1);const H=new st(I);return H.colorSpace=Ae,H.magFilter=$e,H})(),h=new q({map:c}),d=new F(new de(a,o,l),[h,h,new q({color:13156520}),new q({color:11050368}),h,h]);d.position.set(0,o/2+.3,0),d.castShadow=!0,i.add(d);const u=new q({color:15394262}),f=new F(new Ot(2.6,2.6,5,24),u);f.position.set(-4.6,2.8,1.5),f.castShadow=!0,i.add(f);const g=new F(new Un(2.6,16,8,0,Math.PI*2,0,Math.PI/2),u);g.position.set(-4.6,5.3,1.5),i.add(g);const _=new F(new Ot(2.6,2.6,5,24),u);_.position.set(4.6,2.8,1.5),_.castShadow=!0,i.add(_);const m=new F(new Un(2.6,16,8,0,Math.PI*2,0,Math.PI/2),u);m.position.set(4.6,5.3,1.5),i.add(m);const p=new q({color:16051152}),y=new F(new de(6.5,3,4),p);y.position.set(0,1.65,5),y.castShadow=!0,i.add(y);for(let I=-2;I<=2;I++){const D=new F(new Ot(.18,.18,3,12),p);D.position.set(I*1.1,1.65,7.05),i.add(D)}const x=new F(new de(6.5,.5,.6),p);x.position.set(0,3.4,7),i.add(x);const v=new F(new Un(1.6,18,10,0,Math.PI*2,0,Math.PI/2),new q({color:15392968}));v.position.set(0,3.5,5),i.add(v);const b=new F(new Ot(.4,.5,.8,12),new q({color:15392968}));b.position.set(0,5.1,5),i.add(b);const E=new F(new Ys(.18,1.2,8),new q({color:13154416}));E.position.set(0,6.1,5),i.add(E);const R=new F(new Ot(.06,.06,3,6),new q({color:2236962}));R.position.set(0,o+1.8,0),i.add(R);const P=new F(new mt(2,1.2),new it({color:10491928,side:Bt}));P.position.set(1.05,o+2.5,0),i.add(P);const M=document.createElement("canvas");M.width=512,M.height=96;const w=M.getContext("2d");w.fillStyle="#1a0a05",w.fillRect(0,0,512,96),w.fillStyle="#f4ebd0",w.fillRect(8,8,496,80),w.fillStyle="#1a0a05",w.font="bold 36px serif",w.textAlign="center",w.fillText("TALLAHASSEE CAPITOL",256,48),w.font="italic 16px serif",w.fillText("— Capital of the Free State of Florida —",256,76);const G=new st(M);G.colorSpace=Ae;const O=new dn(new en({map:G,depthTest:!1}));return O.scale.set(10,1.9,1),O.position.set(0,9.5,7.5),O.renderOrder=996,i.add(O),i.position.set(e,t,n),s.add(i),i}function yv(s,e,t,n){const i=new dt,r=new F(new mt(36,24),new q({color:3832362}));r.rotation.x=-Math.PI/2,r.position.set(0,.02,0),r.receiveShadow=!0,i.add(r);const o=Qi({w:16,d:8,floors:3,windowsPerSide:6,hasCupola:!0,hasColumns:!0,signText:"WESTCOTT"});o.position.set(0,0,-6),i.add(o);const a=document.createElement("canvas");a.width=512,a.height=96;const l=a.getContext("2d");l.fillStyle="#8b1818",l.fillRect(0,0,512,96),l.strokeStyle="#f4d54a",l.lineWidth=8,l.strokeRect(4,4,504,88),l.fillStyle="#f4d54a",l.font="bold 36px serif",l.textAlign="center",l.fillText("FLORIDA STATE",256,48),l.font="bold 22px serif",l.fillText("U N I V E R S I T Y",256,78);const c=new st(a);c.colorSpace=Ae;const h=new dn(new en({map:c,depthTest:!1}));h.scale.set(10,1.9,1),h.position.set(0,16,-6),h.renderOrder=996,i.add(h);const d=new q({color:2976301}),u=new F(new mt(14,8),d);u.rotation.x=-Math.PI/2,u.position.set(0,.04,8),u.receiveShadow=!0,i.add(u);for(let R=-3;R<=3;R++){const P=new F(new mt(.1,7),new it({color:16777215}));P.rotation.x=-Math.PI/2,P.position.set(R*1.8,.06,8),i.add(P)}const f=document.createElement("canvas");f.width=f.height=128;const g=f.getContext("2d");g.fillStyle="rgba(0,0,0,0)",g.fillRect(0,0,128,128),g.fillStyle="#8b1818",g.beginPath(),g.moveTo(20,64),g.lineTo(108,30),g.lineTo(108,98),g.closePath(),g.fill(),g.fillStyle="#f4d54a",g.font="bold 22px serif",g.textAlign="center",g.fillText("FSU",70,70);const _=new st(f);_.colorSpace=Ae;const m=new F(new mt(2.5,2.5),new it({map:_,transparent:!0}));m.rotation.x=-Math.PI/2,m.position.set(0,.07,8),i.add(m);const p=new q({color:9115672});for(let R=-Math.PI/2;R<=Math.PI/2;R+=Math.PI/16){const M=Math.cos(R)*8.5,w=8+Math.sin(R)*5.5,G=new F(new de(.6,3,1.4),p);G.position.set(M,1.5,w),G.rotation.y=-R,i.add(G)}const y=new q({color:16045386});for(const R of[-7,7]){const P=new F(new Ot(.1,.1,4,6),y);P.position.set(R,2,8),i.add(P);const M=new F(new de(.2,.2,2.6),y);M.position.set(R,3.5,8),i.add(M)}const x=document.createElement("canvas");x.width=512,x.height=96;const v=x.getContext("2d");v.fillStyle="#8b1818",v.fillRect(0,0,512,96),v.fillStyle="#f4d54a",v.font="bold 36px serif",v.textAlign="center",v.fillText("FSU CAMPUS",256,48),v.font="italic 18px serif",v.fillText("Go Noles · LIS3353 represent",256,78);const b=new st(x);b.colorSpace=Ae;const E=new dn(new en({map:b,depthTest:!1}));return E.scale.set(10,1.9,1),E.position.set(0,6,14),E.renderOrder=996,i.add(E),i.position.set(e,t,n),s.add(i),i}const Mv=["EAZY-E","ICE CUBE","DR. DRE","MC REN","DJ YELLA"],Sv=["LUKE","FRESH KID ICE","MR. MIXX","BROTHER MARQ"],jt={unc:[{t:"figure it out",bg:"#fff",fg:"#000"},{t:"open your books",bg:"#fff",fg:"#000"},{t:"this is on the exam",bg:"#fff",fg:"#a01818"},{t:"GET LINUX INSTALLED",bg:"#fff",fg:"#1a6a2a"},{t:"office hours by appt",bg:"#fff",fg:"#000"},{t:"bash assignment due",bg:"#fff",fg:"#000"},{t:"see the syllabus",bg:"#fff",fg:"#a01818"}],uncJr:[{t:"hi dad",bg:"#fff",fg:"#000"},{t:"i love bash",bg:"#fff",fg:"#1a6a2a"},{t:"sudo make me a sandwich",bg:"#fff",fg:"#000"},{t:"when i grow up i want a PhD",bg:"#fff",fg:"#a01818"}],taleb:[{t:"haha get blocked",bg:"#fff",fg:"#000"},{t:"you are FRAGILE",bg:"#1a1a2a",fg:"#ff5252"},{t:"I tweeted this in 2007",bg:"#fff",fg:"#1da1f2"},{t:"read my book",bg:"#fff",fg:"#000"},{t:"IYI detected",bg:"#1a1a2a",fg:"#ffd54a"},{t:"skin in the game?",bg:"#fff",fg:"#a01818"}],nwa_lead:[{t:"STR8 OUTTA COMPTON",bg:"#000",fg:"#fff"},{t:"GANGSTA GANGSTA",bg:"#000",fg:"#ffd54a"},{t:"EXPRESS YOURSELF",bg:"#000",fg:"#fff"},{t:"F THA POLICE",bg:"#000",fg:"#ff5252"},{t:"TODAY WAS A GOOD DAY",bg:"#000",fg:"#ffd54a"},{t:"IT WAS A GOOD DAY",bg:"#fff",fg:"#000"}],nwa_eazy:[{t:"EAZY DOES IT",bg:"#fff",fg:"#000"},{t:"BOYZ-N-THE-HOOD",bg:"#000",fg:"#ffd54a"},{t:"CRUISIN DOWN THE STREET",bg:"#fff",fg:"#000"},{t:"JHERI CURL ON FLEEK",bg:"#000",fg:"#ffd54a"}],nwa_cube:[{t:"TODAY WAS A GOOD DAY",bg:"#000",fg:"#ffd54a"},{t:"I AM ICE CUBE",bg:"#1f4dff",fg:"#fff"},{t:"CHECK YOSELF",bg:"#000",fg:"#fff"},{t:"WICKED",bg:"#000",fg:"#ff5252"}],tlc:[{t:"BANNED IN THE USA",bg:"#a01818",fg:"#fff"},{t:"AS NASTY AS THEY WANNA BE",bg:"#fff",fg:"#a01818"},{t:"ME SO HORNY",bg:"#000",fg:"#ff80ff"},{t:"MOVE SOMETHIN",bg:"#1a1a8a",fg:"#fff"}],marx:[{t:"seize the means",bg:"#7a1818",fg:"#fff"},{t:"workers of the world",bg:"#7a1818",fg:"#fff"},{t:"Rawr ADA Compliance",bg:"#fff",fg:"#a01818"},{t:"unionize the zombies",bg:"#7a1818",fg:"#fff"}],smith:[{t:"invisible hand",bg:"#fff",fg:"#000"},{t:"wealth of nations",bg:"#fff",fg:"#000"},{t:"Rawr ADA Compliance",bg:"#fff",fg:"#a01818"},{t:"free market braiiins",bg:"#fff",fg:"#7a1010"}],linus:[{t:"supported by Linux Foundation",bg:"#1a6a2a",fg:"#fff"},{t:"I do not tolerate bad code",bg:"#1a6a2a",fg:"#ffd54a"},{t:"use git, not svn",bg:"#000",fg:"#fff"},{t:"rewrite it in C",bg:"#1a6a2a",fg:"#fff"},{t:"just a hobby, won’t be big",bg:"#1a6a2a",fg:"#fff"},{t:"GNU GPL v3",bg:"#000",fg:"#ffd54a"}],fsu:[{t:"GO NOLES",bg:"#a52525",fg:"#ffd54a"},{t:"tomahawk chop",bg:"#a52525",fg:"#fff"},{t:"LIS3353 represent",bg:"#a52525",fg:"#ffd54a"},{t:"unconquered",bg:"#a52525",fg:"#ffd54a"}],fsuJr:[{t:"mini noles",bg:"#a52525",fg:"#ffd54a"},{t:"i nibble at the establishment",bg:"#a52525",fg:"#fff"}],tux:[{t:"kernel panic",bg:"#1a1a1a",fg:"#fff"},{t:"sudo apt update && get it together",bg:"#1a1a1a",fg:"#ffd54a"},{t:"I AM the founder mascot",bg:"#1a1a1a",fg:"#fff"},{t:"free as in freedom",bg:"#1a1a1a",fg:"#ffd54a"}],uncWalk:[{t:"where is my coffee",bg:"#fff",fg:"#000"},{t:"I HAVE OFFICE HOURS",bg:"#fff",fg:"#a01818"},{t:"someone fix Steve’s bash script",bg:"#fff",fg:"#1a6a2a"},{t:"the syllabus is on canvas",bg:"#fff",fg:"#000"},{t:"no extensions",bg:"#fff",fg:"#a01818"},{t:"attendance is mandatory",bg:"#fff",fg:"#000"}],talebTroll:[{t:"haha get blocked",bg:"#fff",fg:"#000"},{t:"IYI detected",bg:"#1a1a2a",fg:"#ffd54a"},{t:"you have NO skin in the game",bg:"#fff",fg:"#a01818"},{t:"I called this in 2007",bg:"#fff",fg:"#1da1f2"},{t:"read my BOOK",bg:"#fff",fg:"#000"},{t:"fragility detected",bg:"#1a1a2a",fg:"#ff5252"},{t:"tweeting from a burner",bg:"#fff",fg:"#1da1f2"},{t:"you are an academic clown",bg:"#fff",fg:"#a01818"}],ta:[{t:"I have not slept since Monday",bg:"#fff",fg:"#000"},{t:"this bash script… why",bg:"#fff",fg:"#a01818"},{t:"half marks for missing semicolons",bg:"#fff",fg:"#000"},{t:"office hours are NOT 24/7",bg:"#fff",fg:"#1a3a6a"},{t:"who pipes ls into bash?",bg:"#fff",fg:"#a01818"},{t:"curve? lol no",bg:"#fff",fg:"#000"}],dean:[{t:"NO RUNNING IN THE QUAD",bg:"#a01818",fg:"#fff"},{t:"is that a BOOMBOX?",bg:"#a01818",fg:"#ffd54a"},{t:"who let the dragon in",bg:"#fff",fg:"#a01818"},{t:"where is your STUDENT ID",bg:"#a01818",fg:"#fff"},{t:"I am writing you UP",bg:"#fff",fg:"#a01818"}],y2k:[{t:"THE END IS NIGH",bg:"#5a3010",fg:"#ffd54a"},{t:"PLANES WILL FALL FROM THE SKY",bg:"#5a3010",fg:"#fff"},{t:"BUY CANNED BEANS",bg:"#fff",fg:"#7a1010"},{t:"two-digit dates were a MISTAKE",bg:"#5a3010",fg:"#fff"},{t:"12/31/99 = 12/31/1899??",bg:"#fff",fg:"#000"}],dorm:[{t:"yo the modem is screaming again",bg:"#fff",fg:"#000"},{t:"AOL trial CD #47, baby",bg:"#0a1a4a",fg:"#fff"},{t:"someone is on the phone—can’t dial in",bg:"#fff",fg:"#a01818"},{t:"TGIF is on, shut up",bg:"#fff",fg:"#1a1a8a"},{t:"pass me the boombox",bg:"#000",fg:"#ffd54a"},{t:"who has Goldeneye?",bg:"#a01818",fg:"#fff"},{t:"taping this off the radio",bg:"#fff",fg:"#000"},{t:"Y2K bug? mainframe problem.",bg:"#1a1a8a",fg:"#fff"},{t:"the library closes at midnight",bg:"#fff",fg:"#1a6a2a"},{t:"rewinding the VHS",bg:"#fff",fg:"#000"},{t:"who took my Discman",bg:"#000",fg:"#5ad8e0"},{t:"mark just bought another book",bg:"#fff",fg:"#a01818"},{t:"no email past 9pm — long distance",bg:"#fff",fg:"#000"},{t:"BULLS IN '96 BABY",bg:"#a01818",fg:"#fff"}]},nh={nwa_lead:[{t:"STR8 OUTTA HOMEWORK",bg:"#000",fg:"#fff"},{t:"GOOD VIBES ONLY",bg:"#000",fg:"#ffd54a"},{t:"EXPRESS YOURSELF",bg:"#000",fg:"#fff"},{t:"RESPECT THE POLICE",bg:"#000",fg:"#5ad8e0"},{t:"TODAY WAS A GOOD DAY",bg:"#000",fg:"#ffd54a"},{t:"BE NICE OUT THERE",bg:"#fff",fg:"#000"}],nwa_eazy:[{t:"EAZY DOES IT",bg:"#fff",fg:"#000"},{t:"BOYZ-N-THE-BOOKSHOP",bg:"#000",fg:"#ffd54a"},{t:"CRUISIN TO THE LIBRARY",bg:"#fff",fg:"#000"},{t:"NICE HAIRCUT YOU GOT",bg:"#000",fg:"#ffd54a"}],nwa_cube:[{t:"TODAY WAS A GOOD DAY",bg:"#000",fg:"#ffd54a"},{t:"I AM ICE CUBE",bg:"#1f4dff",fg:"#fff"},{t:"CHECK YOSELF",bg:"#000",fg:"#fff"},{t:"TIME TO STUDY",bg:"#000",fg:"#5ad8e0"}],tlc:[{t:"BANNED FROM RECESS",bg:"#a01818",fg:"#fff"},{t:"AS NICE AS THEY WANNA BE",bg:"#fff",fg:"#1a6a2a"},{t:"EAT YOUR VEGGIES",bg:"#000",fg:"#ff80ff"},{t:"MOVE SOMETHIN",bg:"#1a1a8a",fg:"#fff"}],taleb:[{t:"haha get blocked",bg:"#fff",fg:"#000"},{t:"you are FRAGILE",bg:"#1a1a2a",fg:"#ff5252"},{t:"I tweeted this in 2007",bg:"#fff",fg:"#1da1f2"},{t:"read my book",bg:"#fff",fg:"#000"},{t:"IYI detected",bg:"#1a1a2a",fg:"#ffd54a"},{t:"be antifragile",bg:"#fff",fg:"#1a6a2a"}],talebTroll:[{t:"haha get blocked",bg:"#fff",fg:"#000"},{t:"IYI detected",bg:"#1a1a2a",fg:"#ffd54a"},{t:"I called this in 2007",bg:"#fff",fg:"#1da1f2"},{t:"read my BOOK",bg:"#fff",fg:"#000"},{t:"be antifragile, child",bg:"#fff",fg:"#1a6a2a"},{t:"tweeting from a burner",bg:"#fff",fg:"#1da1f2"}]};function ih(s){return!!(typeof window<"u"&&window.MARKCRAFT_MINI_ME)&&nh[s]?nh[s]:jt[s]}if(typeof window<"u"&&window.MARKCRAFT_MINI_ME===void 0)try{window.MARKCRAFT_MINI_ME=localStorage.getItem("markcraft.miniMe")==="1"}catch{window.MARKCRAFT_MINI_ME=!1}class bv{constructor(e,t,n){this.scene=e,this.world=t,this.player=n,this.entities=[],this.bubbles=[],this.dragon=null,this.fireGroup=null,this.fireParticles=[],this.fireworks=[],this.fireworkPool=[],this.spotLights=[],this.discoLights=[],this.markcraftSign=null,this.spawnCenter=new C(32,0,32),this.arenaRadius=22,this.arenaCleared=!1,this.lastFireworkAt=0,this.harvardCenter=new C(32,0,-8),this.harvardHalf=new pe(40,22),this.fsuCenter=new C(32,0,70),this.fsuHalf=new pe(20,14),this.capitolCenter=new C(-18,0,32),this.capitolHalf=new pe(12,10),this.columbiaCenter=new C(82,0,32),this.columbiaHalf=new pe(12,8)}surfaceY(e,t){const n=Math.floor(e),i=Math.floor(t);let r=!1;for(let o=40;o>=0;o--){const a=this.world.getBlock?.(n,o,i);if(a!==null&&(r=!0,a&&a.id!==0&&a.id!==void 0))return o+1}return r?1:-1}chunksReady(){const e=this.spawnCenter.x,t=this.spawnCenter.z,n=this.arenaRadius;for(const[v,b]of[[-n,-n],[n,-n],[-n,n],[n,n],[0,0]])if(this.surfaceY(e+v,t+b)<0)return!1;const i=this.harvardCenter.x,r=this.harvardCenter.z,o=this.harvardHalf.x,a=this.harvardHalf.y;for(const[v,b]of[[-o,-a],[o,-a],[-o,a],[o,a]])if(this.surfaceY(i+v,r+b)<0)return!1;const l=this.fsuCenter.x,c=this.fsuCenter.z,h=this.fsuHalf.x,d=this.fsuHalf.y;for(const[v,b]of[[-h,-d],[h,-d],[-h,d],[h,d]])if(this.surfaceY(l+v,c+b)<0)return!1;const u=this.capitolCenter.x,f=this.capitolCenter.z,g=this.capitolHalf.x,_=this.capitolHalf.y;for(const[v,b]of[[-g,-_],[g,-_],[-g,_],[g,_]])if(this.surfaceY(u+v,f+b)<0)return!1;const m=this.columbiaCenter.x,p=this.columbiaCenter.z,y=this.columbiaHalf.x,x=this.columbiaHalf.y;for(const[v,b]of[[-y,-x],[y,-x],[-y,x],[y,x]])if(this.surfaceY(m+v,p+b)<0)return!1;return!0}clearRect(e,t,n,i,r,o=28,a=4){for(let l=-i;l<=i;l++)for(let c=-r;c<=r;c++){const h=e+l,d=n+c;for(let u=t;u<t+o;u++){const f=this.world.getBlock?.(h,u,d);f&&f.id!==0&&this.world.removeBlock?.(h,u,d)}}for(let l=-i-a;l<=i+a;l++)for(let c=-r-a;c<=r+a;c++){if(Math.abs(l)<=i&&Math.abs(c)<=r)continue;const d=e+l,u=n+c;for(let f=t+4;f<t+o;f++){const g=this.world.getBlock?.(d,f,u);g&&g.id!==0&&this.world.removeBlock?.(d,f,u)}}}clearArena(){if(this.arenaCleared)return;const e=this.spawnCenter.x,t=this.spawnCenter.z,n=this.arenaRadius;let i=this.surfaceY(e,t);if(i<=1){this.spawnCenter.y=14;return}this.spawnCenter.y=i;for(let o=-n;o<=n;o++)for(let a=-n;a<=n;a++){if(Math.sqrt(o*o+a*a)>n)continue;const c=e+o,h=t+a;for(let d=i;d<i+28;d++){const u=this.world.getBlock?.(c,d,h);u&&u.id!==0&&this.world.removeBlock?.(c,d,h)}}const r=n+4;for(let o=-r;o<=r;o++)for(let a=-r;a<=r;a++){const l=Math.sqrt(o*o+a*a);if(l<=n||l>r)continue;const c=e+o,h=t+a;for(let d=i+4;d<i+28;d++){const u=this.world.getBlock?.(c,d,h);u&&u.id!==0&&this.world.removeBlock?.(c,d,h)}}this.arenaCleared=!0}attach(e,t,n,i={}){let r=i.y??this.surfaceY(t,n);if(r<1&&(r=this.spawnCenter.y>1?this.spawnCenter.y:14),e.position.set(t,r+.5+(i.yOffset||0),n),i.faceCenter!==!1){const o=this.spawnCenter.x-t,a=this.spawnCenter.z-n;e.rotation.y=Math.atan2(o,a)}return this.scene.add(e),e}addLabel(e,t,n="#ffd54a",i=3.4){const r=hv(t,n);return r.position.set(0,i,0),e.add(r),r}addBubble(e,t,n={}){let i=null,r;typeof t=="string"?(i=t,r=ih(i)):r=t;const o=r[0],a=cv(o.t,{fg:o.fg,bg:o.bg});a.position.set(n.x||0,n.y||4.6,0),e.add(a);const l={sprite:a,poolKey:i,pool:r,idx:0,next:performance.now()+1500+Math.random()*4e3};return this.bubbles.push(l),l}buildSpeakerStack(e,t,n){const i=new dt,r=new q({color:657930}),o=new q({color:2236962}),a=new it({color:16747546});for(let l=0;l<3;l++){const c=new F(new de(2,1.6,1.4),r);c.position.y=.8+l*1.7,c.castShadow=!0,i.add(c);const h=new F(new de(1.6,1.2,.05),o);h.position.set(0,.8+l*1.7,.72),i.add(h);const d=new F(new ui(.32,12),a);d.position.set(-.4,.95+l*1.7,.74),i.add(d);const u=new F(new ui(.32,12),a);u.position.set(.4,.95+l*1.7,.74),i.add(u);const f=new F(new ui(.5,12),a);f.position.set(0,.45+l*1.7,.74),i.add(f)}return i.position.set(e,t,n),i}buildStage(e,t,n,i,r,o){const a=new dt,l=new q({color:1710618}),c=new F(new de(i,.4,r),l);c.position.set(e,t+.2,n),c.receiveShadow=!0,c.castShadow=!0,this.scene.add(c),a.add(c);const h=new it({color:o}),d=new F(new de(i,.08,.08),h);d.position.set(e,t+.45,n+r/2),this.scene.add(d);const u=new F(new de(i,.08,.08),h);u.position.set(e,t+.45,n-r/2),this.scene.add(u);const f=new F(new de(.08,.08,r),h);f.position.set(e-i/2,t+.45,n),this.scene.add(f);const g=new F(new de(.08,.08,r),h);return g.position.set(e+i/2,t+.45,n),this.scene.add(g),t+.4}makeFireSprite(){const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(32,32,4,32,32,30);n.addColorStop(0,"rgba(255,255,200,1)"),n.addColorStop(.35,"rgba(255,180,40,0.9)"),n.addColorStop(.7,"rgba(255,80,20,0.6)"),n.addColorStop(1,"rgba(120,10,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);const i=new st(e);return i.colorSpace=Ae,new en({map:i,transparent:!0,depthWrite:!1,blending:zr})}spawnFireBurst(e){if(!this.dragon)return;const t=this.dragon.userData.head;if(!t)return;const n=this.fireMat||(this.fireMat=this.makeFireSprite()),i=new C;t.getWorldPosition(i);const r=new C(0,0,1).applyQuaternion(this.dragon.quaternion);for(let o=0;o<5;o++){const a=new dn(n),l=r.clone().multiplyScalar(1.6+o*.6);l.x+=(Math.random()-.5)*.6,l.y+=(Math.random()-.3)*.4,l.z+=(Math.random()-.5)*.6,a.position.copy(i).add(l);const c=1.4+Math.random()*1.2;a.scale.set(c,c,1),a.renderOrder=900,this.scene.add(a),this.fireParticles.push({sprite:a,born:e,life:700+Math.random()*500,vx:r.x*.012+(Math.random()-.5)*.004,vy:.005+Math.random()*.005,vz:r.z*.012+(Math.random()-.5)*.004})}}makeFireworkSprite(e){const t=document.createElement("canvas");t.width=t.height=32;const n=t.getContext("2d"),i=n.createRadialGradient(16,16,1,16,16,14);i.addColorStop(0,"#fff"),i.addColorStop(.4,e),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,32,32);const r=new st(t);return r.colorSpace=Ae,new en({map:r,transparent:!0,depthWrite:!1,blending:zr})}spawnFirework(e){const t=["#ffd54a","#ff5252","#5ad8e0","#7af07a","#ff80ff"],n=t[Math.floor(Math.random()*t.length)],i=this.makeFireworkSprite(n),r=this.spawnCenter.x+(Math.random()-.5)*14,o=this.spawnCenter.z+(Math.random()-.5)*14,a=(this.spawnCenter.y||12)+18+Math.random()*4;for(let l=0;l<22;l++){const c=new dn(i);c.position.set(r,a,o),c.scale.set(.8,.8,1),c.renderOrder=850,this.scene.add(c);const h=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1),u=.012+Math.random()*.008;this.fireworks.push({sprite:c,born:e,life:1200+Math.random()*600,vx:Math.sin(d)*Math.cos(h)*u,vy:Math.cos(d)*u*.6,vz:Math.sin(d)*Math.sin(h)*u})}}buildPodium(e,t,n){const i=new de(4,1,4),r=new q({color:6974058}),o=new F(i,r);o.position.set(e,t+.5,n),o.castShadow=!0,o.receiveShadow=!0,this.scene.add(o);const a=new de(2.4,1.2,2.4),l=new q({color:9134112}),c=new F(a,l);c.position.set(e,t+1.6,n),c.castShadow=!0,c.receiveShadow=!0,this.scene.add(c);const h=new de(.6,12,.6),d=new it({color:16773800,transparent:!0,opacity:.55}),u=new F(h,d);u.position.set(e,t+10,n),this.scene.add(u),this.beacon=u;const f=new it({color:16766282,transparent:!0,opacity:.35,side:Bt}),g=new F(new Wr(2.6,3,32),f);g.rotation.x=-Math.PI/2,g.position.set(e,t+.05,n),this.scene.add(g),this.podiumRing=g;const _=new ha(16766282,6,30,Math.PI/7,.4,1);_.position.set(e-8,t+14,n-8),_.target.position.set(e,t+2,n),this.scene.add(_),this.scene.add(_.target),this.spotLights.push(_);const m=new ha(5953760,6,30,Math.PI/7,.4,1);m.position.set(e+8,t+14,n-8),m.target.position.set(e,t+2,n),this.scene.add(m),this.scene.add(m.target),this.spotLights.push(m);const p=document.createElement("canvas");p.width=512,p.height=128;const y=p.getContext("2d");y.fillStyle="#1a1a1a",y.fillRect(0,0,512,128),y.fillStyle="#d4a040",y.fillRect(8,8,496,112),y.fillStyle="#1a0a05",y.font="bold 56px monospace",y.textAlign="center",y.textBaseline="middle",y.fillText("MARKCRAFT",256,50),y.font="bold 18px monospace",y.fillText("a rescue mission",256,96);const x=new st(p);x.magFilter=$e,x.colorSpace=Ae;const v=new en({map:x,depthTest:!1}),b=new dn(v);return b.scale.set(5,1.25,1),b.position.set(e,t+14,n),b.renderOrder=997,this.scene.add(b),this.markcraftSign=b,t+1.2+1.6}buildBoombox(e,t,n){const i=new dt,r=new F(new de(4,1.6,1),new q({color:1118481}));r.position.y=.8,r.castShadow=!0,i.add(r);const o=new q({color:16747546});for(const c of[-1.2,1.2]){const h=new F(new ui(.55,16),o);h.position.set(c,.8,.51),i.add(h);const d=new F(new Wr(.55,.65,16),new it({color:13934656}));d.position.set(c,.8,.52),i.add(d)}const a=new F(new de(1.4,.5,.05),new it({color:5953760}));a.position.set(0,1.35,.52),i.add(a);const l=new F(new ka(.6,.06,8,24,Math.PI),new q({color:546}));return l.position.set(0,1.65,0),l.rotation.x=Math.PI,i.add(l),i.position.set(e,t,n),i}spawnAll(){if(this.arenaCleared&&this.entities.length>0||(this.clearArena(),!this.arenaCleared))return;const e=this.spawnCenter.x,t=this.spawnCenter.z,n=this.spawnCenter.y,i=this.harvardCenter.x,r=this.harvardCenter.z,o=this.harvardHalf.x,a=this.harvardHalf.y;this.clearRect(i,n,r,o,a,32,4),this.harvardCenter.y=n,_v(this.scene,i,n,r);const l=this.fsuCenter.x,c=this.fsuCenter.z,h=this.fsuHalf.x,d=this.fsuHalf.y;this.clearRect(l,n,c,h,d,28,4),this.fsuCenter.y=n,yv(this.scene,l,n,c);const u=this.capitolCenter.x,f=this.capitolCenter.z,g=this.capitolHalf.x,_=this.capitolHalf.y;this.clearRect(u,n,f,g,_,36,4),this.capitolCenter.y=n,vv(this.scene,u,n,f);const m=this.columbiaCenter.x,p=this.columbiaCenter.z,y=this.columbiaHalf.x,x=this.columbiaHalf.y;this.clearRect(m,n,p,y,x,24,4),this.columbiaCenter.y=n,xv(this.scene,m,n,p);const v=this.buildPodium(e,n,t),b=sn(Ut.uncMarks(),{holdBook:!0,scale:.95});b.position.set(e,v+1.4,t),b.rotation.y=-Math.PI/4,this.scene.add(b),this.addLabel(b,"UNC MARKS · PROFESSOR","#ffd54a",3.4),this.addBubble(b,jt.unc,{y:4.5}),this.entities.push({mesh:b,kind:"unc"});const E=sn(Ut.uncMarks(),{holdBook:!0,scale:.42});E.position.set(e+1.6,v+.1,t+.8),E.rotation.y=-Math.PI/4,this.scene.add(E),this.addLabel(E,"UNC MARKS JR · MINI ME","#ffd54a",2.4),this.addBubble(E,jt.uncJr,{y:3.3}),this.entities.push({mesh:E,kind:"uncJr",baseY:E.position.y,phase:Math.random()*Math.PI*2}),this.dragon=lv(Ut.taleb()),this.dragon.position.set(e,n+14,t-6),this.scene.add(this.dragon),this.addLabel(this.dragon,"NASSIM TALEB DRAGON · FINAL BOSS","#ff5252",4),this.addBubble(this.dragon,"taleb",{y:5.6});const R=e-11,P=t+2,M=this.buildStage(R,n,P,12,5,16766282),w=this.buildSpeakerStack(R-6.2,M,P);this.scene.add(w);const G=this.buildSpeakerStack(R+6.2,M,P);this.scene.add(G);const O=this.buildBoombox(R,M,P+2);this.scene.add(O);for(let te=0;te<3;te++){const ye=[16732754,5953760,16766282],fe=new Bs(ye[te],4,18,2);fe.position.set(R+(te-1)*4,M+7,P),this.scene.add(fe),this.discoLights.push({light:fe,base:fe.position.clone(),phase:te*1.7})}["eazy","cube","dre","ren","yella"].forEach((te,ye)=>{const fe=sn(Ut.nwa(te),{holdMic:ye%2===0,scale:.78}),L=R+(ye-2)*2.2,he=P;fe.position.set(L,M+2,he),fe.rotation.y=Math.atan2(e-L,t-he),this.scene.add(fe),this.addLabel(fe,Mv[ye],"#ffd54a"),te==="cube"?this.addBubble(fe,"nwa_cube",{y:4.5}):te==="eazy"?this.addBubble(fe,"nwa_eazy",{y:4.5}):te==="dre"&&this.addBubble(fe,"nwa_lead",{y:4.5}),this.entities.push({mesh:fe,kind:"nwa",baseY:fe.position.y})});const D=e+11,H=t+2,K=this.buildStage(D,n,H,11,5,16744703),Y=this.buildSpeakerStack(D-5.7,K,H);this.scene.add(Y);const Z=this.buildSpeakerStack(D+5.7,K,H);this.scene.add(Z);for(let te=0;te<3;te++){const ye=[16744703,10491928,2051583],fe=new Bs(ye[te],4,18,2);fe.position.set(D+(te-1)*4,K+7,H),this.scene.add(fe),this.discoLights.push({light:fe,base:fe.position.clone(),phase:te*1.3+.5})}["luke","fresh","mr","brother"].forEach((te,ye)=>{const fe=sn(Ut.twoLive(te),{holdMic:!0,scale:.78}),L=D+(ye-1.5)*2.2,he=H;fe.position.set(L,K+2,he),fe.rotation.y=Math.atan2(e-L,t-he),this.scene.add(fe),this.addLabel(fe,Sv[ye],"#ff80ff"),(ye===0||ye===2)&&this.addBubble(fe,"tlc",{y:4.5}),this.entities.push({mesh:fe,kind:"twolive",baseY:fe.position.y})});const J=16;for(let te=0;te<J;te++){const ye=te/(J-1),fe=Math.PI/2+(ye-.5)*Math.PI*.85,L=13+te%3*1.5,he=e+Math.cos(fe)*L,W=t+Math.sin(fe)*L,ue=te%2===0,ge=ue?Ut.marxZombie():Ut.smithZombie(),Ve=sn(ge,{scale:.7+te%3*.04});this.attach(Ve,he,W),this.addLabel(Ve,ue?"KARL MARX":"A. SMITH",ue?"#ff5252":"#a8c89a",3.2),(te===1||te===7)&&this.addBubble(Ve,jt.smith,{y:4.4}),(te===4||te===12)&&this.addBubble(Ve,jt.marx,{y:4.4}),this.entities.push({mesh:Ve,kind:"zombie",baseX:Ve.position.x,baseY:Ve.position.y,baseZ:Ve.position.z,phase:Math.random()*Math.PI*2})}const U=sn(Ut.linus(),{holdSword:!0,scale:.78}),B=e+9,ie=t-7,re=5.5;this.attach(U,B+re,ie,{faceCenter:!1}),this.addLabel(U,"LINUS TORVALDS","#7af07a"),this.addBubble(U,jt.linus,{y:4.5}),this.entities.push({mesh:U,kind:"walker",cx:B,cz:ie,radius:re,baseY:U.position.y,speed:4e-4,phase:0});const ee=jo(Ut.tux(),{scale:.82}),Me=e+9,ve=t-7,xe=5.5;this.attach(ee,Me+xe,ve,{faceCenter:!1}),this.addLabel(ee,"TUX · LINUX MASCOT","#fff",3.4),this.addBubble(ee,jt.tux,{y:4.4}),this.entities.push({mesh:ee,kind:"walker",cx:Me,cz:ve,radius:xe,baseY:ee.position.y,speed:4e-4,phase:-.9});const Ee=sn(Ut.talebHuman(),{scale:.82}),ze=e,Ce=t,N=16;this.attach(Ee,ze+N,Ce,{faceCenter:!1}),this.addLabel(Ee,"NASSIM TALEB · TROLLING","#ff5252",3.4),this.addBubble(Ee,"talebTroll",{y:4.6}),this.entities.push({mesh:Ee,kind:"walker",cx:ze,cz:Ce,radius:N,baseY:Ee.position.y,speed:22e-5,phase:1.5});const Qe=sn(Ut.ta(),{holdBook:!0,scale:.78}),se=e-4,le=t+8,_e=3.5;this.attach(Qe,se+_e,le,{faceCenter:!1}),this.addLabel(Qe,"TA · OVERWORKED","#9ad8ff",3.2),this.addBubble(Qe,jt.ta,{y:4.4}),this.entities.push({mesh:Qe,kind:"walker",cx:se,cz:le,radius:_e,baseY:Qe.position.y,speed:6e-4,phase:.4});const Oe=sn(Ut.dean(),{holdBook:!0,scale:.85}),Ie=e+4,Pe=t+9,Ye=4;this.attach(Oe,Ie+Ye,Pe,{faceCenter:!1}),this.addLabel(Oe,"DEAN · WRITING YOU UP","#ff5252",3.4),this.addBubble(Oe,jt.dean,{y:4.6}),this.entities.push({mesh:Oe,kind:"walker",cx:Ie,cz:Pe,radius:Ye,baseY:Oe.position.y,speed:7e-4,phase:2.1});const et=sn(Ut.y2k(),{holdBook:!0,scale:.8}),tt=(this.capitolCenter.x+e)/2,A=t,S=4;this.attach(et,tt+S,A,{faceCenter:!1}),this.addLabel(et,"Y2K PROPHET · END IS NIGH","#ffd54a",3.4),this.addBubble(et,jt.y2k,{y:4.6}),this.entities.push({mesh:et,kind:"walker",cx:tt,cz:A,radius:S,baseY:et.position.y,speed:5e-4,phase:.8});const k=jo(Ut.fsuPenguin(),{scale:.75});this.attach(k,e-9,t-8),this.addLabel(k,"FSU PENGUIN","#ffd54a"),this.addBubble(k,jt.fsu,{y:3.8}),this.entities.push({mesh:k,kind:"fsu"});const oe=jo(Ut.fsuPenguin(),{scale:.38});this.attach(oe,e-7.6,t-7.4),this.addLabel(oe,"MINI NOLE","#ffd54a",2),this.addBubble(oe,jt.fsuJr,{y:2.6}),this.entities.push({mesh:oe,kind:"fsuJr",baseY:oe.position.y,phase:Math.random()*Math.PI*2});const ne=sn(Ut.uncMarks(),{holdBook:!0,scale:.85}),ae=this.harvardCenter.x,Se=this.harvardCenter.z+4,ce=ae+10,X=Se;this.attach(ne,ce,X,{faceCenter:!1}),this.addLabel(ne,"UNC MARKS · ON PATROL","#ffd54a",3.4),this.addBubble(ne,jt.uncWalk,{y:4.5}),this.entities.push({mesh:ne,kind:"uncWalk",cx:ae,cz:Se,radius:10,baseY:ne.position.y,speed:18e-5,phase:0});const Le=this.harvardCenter.x-28,Te=this.harvardCenter.z-14,Re=n+.3;[{dx:-2.2,dz:1.1,ry:0},{dx:2.2,dz:1.1,ry:-.2},{dx:-1.4,dz:2.4,ry:-1.6},{dx:1.6,dz:2.4,ry:1.6}].forEach((te,ye)=>{const fe=sn(Ut.dormFriend(ye),{scale:.72});fe.position.set(Le+te.dx,Re,Te+te.dz),fe.rotation.y=te.ry,this.scene.add(fe),this.addLabel(fe,"DORM FRIEND","#ffd54a",3),this.addBubble(fe,jt.dorm,{y:4}),this.entities.push({mesh:fe,kind:"dormFriend",baseY:fe.position.y,baseRy:te.ry,phase:Math.random()*Math.PI*2})});for(let te=0;te<4;te++){const ye=[16732754,5953760,16766282,16744703],fe=new Bs(ye[te],5,22,2),L=te/4*Math.PI*2;fe.position.set(e+Math.cos(L)*6,n+18,t+Math.sin(L)*6),this.scene.add(fe),this.discoLights.push({light:fe,base:fe.position.clone(),phase:te*1.1+.7})}if(this.player&&this.player.position){const te=this.spawnCenter.x,ye=this.spawnCenter.z+6,fe=this.surfaceY(te,ye),L=fe>1?fe:this.spawnCenter.y>1?this.spawnCenter.y:14;this.player.position.set(te,L+3.5,ye),this.player.velocity&&this.player.velocity.set(0,0,0),this.player.camera&&(this.player.camera.rotation.order="YXZ",this.player.camera.rotation.y=Math.PI,this.player.camera.rotation.x=-.05)}console.log(`[MarkCraft] spawned ${this.entities.length} entities + dragon + stages + 1999 dorm`)}update(e,t){if(this.dragon){const n=this.spawnCenter.x,i=this.spawnCenter.z,r=this.spawnCenter.y||12,o=t*5e-4,a=18;this.dragon.position.x=n+Math.cos(o)*a,this.dragon.position.z=i+Math.sin(o)*a,this.dragon.position.y=r+13+Math.sin(t*.0018)*1.5,this.dragon.rotation.y=-o+Math.PI/2;const l=this.dragon.userData.wings;if(l){const c=Math.sin(t*.012)*.6;l[0].rotation.x=c,l[1].rotation.x=-c}(!this.lastFireAt||t-this.lastFireAt>1400)&&(this.spawnFireBurst(t),this.lastFireAt=t)}for(let n=this.fireParticles.length-1;n>=0;n--){const i=this.fireParticles[n],r=t-i.born;if(r>i.life){this.scene.remove(i.sprite),this.fireParticles.splice(n,1);continue}i.sprite.position.x+=i.vx*e*1e3,i.sprite.position.y+=i.vy*e*1e3,i.sprite.position.z+=i.vz*e*1e3;const o=1-r/i.life;i.sprite.material.opacity=o;const a=i.sprite.scale.x*1.005;i.sprite.scale.set(a,a,1)}t-this.lastFireworkAt>1600&&(this.spawnFirework(t),Math.random()<.45&&this.spawnFirework(t),this.lastFireworkAt=t);for(let n=this.fireworks.length-1;n>=0;n--){const i=this.fireworks[n],r=t-i.born;if(r>i.life){this.scene.remove(i.sprite),this.fireworks.splice(n,1);continue}i.sprite.position.x+=i.vx*e*1e3,i.sprite.position.y+=i.vy*e*1e3,i.sprite.position.z+=i.vz*e*1e3,i.vy-=2e-5*e*1e3;const o=1-r/i.life;i.sprite.material.opacity=o}for(const n of this.discoLights)n.light.intensity=3+Math.sin(t*.005+n.phase)*2.5+1.5,n.light.position.x=n.base.x+Math.sin(t*.001+n.phase)*1.2,n.light.position.z=n.base.z+Math.cos(t*.001+n.phase)*1.2;if(this.spotLights.length===2){const n=this.spawnCenter.x,i=this.spawnCenter.z,r=this.spawnCenter.y||12,o=Math.sin(t*8e-4)*1.5;this.spotLights[0].target.position.set(n+o,r+2,i),this.spotLights[1].target.position.set(n-o,r+2,i)}if(this.podiumRing){const n=.25+.15*Math.sin(t*.004);this.podiumRing.material.opacity=n+.1,this.podiumRing.scale.setScalar(1+Math.sin(t*.003)*.08)}if(this.markcraftSign){this.markcraftSign.position.y=(this.spawnCenter.y||12)+14+Math.sin(t*.002)*.5;const n=1+Math.sin(t*.003)*.05;this.markcraftSign.scale.set(5*n,1.25*n,1)}this.beacon&&(this.beacon.material.opacity=.45+Math.sin(t*.005)*.2);for(const n of this.bubbles)if(t>=n.next){if(n.poolKey){const r=ih(n.poolKey);r!==n.pool&&(n.pool=r,n.idx=0)}n.idx=(n.idx+1)%n.pool.length;const i=n.pool[n.idx];n.sprite.userData.setText?.(i.t,{fg:i.fg,bg:i.bg}),n.next=t+3500+Math.random()*2500}for(const n of this.entities)if(n.kind==="zombie"){const i=Math.sin(t*.003+n.phase);n.mesh.rotation.y=i*.5+Math.PI;const r=Math.abs(Math.sin(t*.005+n.phase))*.15;n.mesh.position.y=n.baseY+r}else if(n.kind==="nwa"||n.kind==="twolive"){const i=Math.sin(t*.012+n.mesh.position.x%7)*.15;n.mesh.position.y=n.baseY+i,n.mesh.rotation.y=Math.atan2(this.spawnCenter.x-n.mesh.position.x,this.spawnCenter.z-n.mesh.position.z)+Math.sin(t*.004+n.mesh.position.x)*.15}else if(n.kind==="uncWalk"||n.kind==="walker"){const i=t*n.speed+n.phase,r=n.cx+Math.cos(i)*n.radius,o=n.cz+Math.sin(i)*n.radius;n.mesh.position.x=r,n.mesh.position.z=o,n.mesh.position.y=n.baseY+Math.abs(Math.sin(t*.008+n.phase))*.15,n.mesh.rotation.y=Math.atan2(-Math.sin(i)*n.radius,Math.cos(i)*n.radius)+Math.PI/2}else if(n.kind==="dormFriend"){const i=Math.sin(t*.003+n.phase)*.04;n.mesh.position.y=n.baseY+i,n.mesh.rotation.y=n.baseRy+Math.sin(t*.0015+n.phase)*.18}else if(n.kind==="uncJr"||n.kind==="fsuJr"){const i=Math.abs(Math.sin(t*.006+n.phase))*.12;n.mesh.position.y=n.baseY+i}}}const Jn=[{title:"Straight Outta Compton",artist:"N.W.A.",src:"./audio/straight-outta-compton.mp3"}];let at=null,bi=0;const _a=new Set;function Qs(){for(const s of _a)try{s(va())}catch{}}function eo(){at||(at=new Audio,at.loop=!1,at.volume=.45,at.preload="auto",at.addEventListener("ended",()=>{xa(!0)}),at.addEventListener("error",()=>{console.warn("[MarkCraft] audio failed to load:",at.src)}));const s=Jn[bi];s&&(at.src&&at.src.endsWith(s.src.replace("./","/"))||(at.src=s.src))}function wv(){return eo(),at}function Xa(){if(eo(),!at)return;const s=at.play();s&&s.catch&&s.catch(()=>{}),Qs()}function Ev(){at&&at.pause(),Qs()}function Tv(){if(!at){Xa();return}at.paused?at.play().catch(()=>{}):at.pause(),Qs()}function xa(s=!0){Jn.length!==0&&(bi=(bi+1)%Jn.length,eo(),s&&at&&at.play().catch(()=>{}),Qs())}function Av(s=!0){Jn.length!==0&&(bi=(bi-1+Jn.length)%Jn.length,eo(),s&&at&&at.play().catch(()=>{}),Qs())}function va(){return{track:Jn[bi]||null,index:bi,total:Jn.length,paused:!at||at.paused,volume:at?at.volume:.45}}function Rv(s){return _a.add(s),()=>_a.delete(s)}function Cv(s,e,t,n){const i=s.createLinearGradient(0,0,0,t);n.forEach(([r,o])=>i.addColorStop(r,o)),s.fillStyle=i,s.fillRect(0,0,e,t)}function Ps(s,e,t,n,i){const r=n;s.fillStyle=i.skin,s.fillRect(e-1.2*r,t-4.2*r,2.4*r,2.4*r),s.strokeStyle="#0a0a0a",s.lineWidth=2,s.strokeRect(e-1.2*r,t-4.2*r,2.4*r,2.4*r),i.hat&&(s.fillStyle=i.hat,s.fillRect(e-1.3*r,t-4.5*r,2.6*r,.8*r)),s.fillStyle="#000",s.fillRect(e-.8*r,t-3.4*r,.4*r,.4*r),s.fillRect(e+.4*r,t-3.4*r,.4*r,.4*r),i.shades&&(s.fillStyle="#000",s.fillRect(e-1*r,t-3.6*r,2*r,.7*r)),i.beard&&(s.fillStyle=i.beard,s.fillRect(e-1*r,t-2.6*r,2*r,.8*r)),s.fillStyle=i.body,s.fillRect(e-1.5*r,t-1.8*r,3*r,3*r),s.strokeRect(e-1.5*r,t-1.8*r,3*r,3*r),s.fillStyle=i.skin,s.fillRect(e-2.4*r,t-1.8*r,.9*r,2.6*r),s.fillRect(e+1.5*r,t-1.8*r,.9*r,2.6*r),s.fillStyle=i.legs,s.fillRect(e-1.4*r,t+1.2*r,1.2*r,2.4*r),s.fillRect(e+.2*r,t+1.2*r,1.2*r,2.4*r)}function Lv(s,e,t){s.fillStyle="#0d0d18",s.fillRect(e-36,t-12,72,24),s.fillRect(e-70,t-30,50,6),s.fillRect(e+20,t-30,50,6),s.fillStyle="#1a1a28",s.beginPath(),s.moveTo(e-70,t-30),s.lineTo(e-100,t-8),s.lineTo(e-60,t),s.closePath(),s.fill(),s.beginPath(),s.moveTo(e+70,t-30),s.lineTo(e+100,t-8),s.lineTo(e+60,t),s.closePath(),s.fill(),s.fillStyle="#d8b193",s.fillRect(e-18,t-36,36,30),s.fillStyle="#3a2a1f",s.fillRect(e-18,t-36,36,6),s.fillStyle="#000",s.fillRect(e-12,t-24,6,6),s.fillRect(e+6,t-24,6,6),s.fillStyle="#5a4030",s.fillRect(e-8,t-14,16,4),s.fillStyle="#fff",s.font="bold 8px monospace",s.textAlign="center",s.fillText("TALEB",e,t+4)}function Pv(s){const e=s.getContext("2d");e.imageSmoothingEnabled=!1;const t=s.width,n=s.height;Cv(e,t,n,[[0,"#0b0b22"],[.45,"#3a1a4a"],[.7,"#7a2018"],[1,"#1a0a0a"]]);for(let c=0;c<80;c++){e.fillStyle=`rgba(255,255,255,${Math.random()*.7})`;const h=Math.random()*2+1;e.fillRect(Math.random()*t,Math.random()*n*.55,h,h)}e.fillStyle="#1a1a2a";for(let c=0;c<t;c+=64){const h=n*.55+Math.sin(c*.01)*30;e.beginPath(),e.moveTo(c,n),e.lineTo(c+32,h),e.lineTo(c+64,n),e.closePath(),e.fill()}e.fillStyle="#3a1010",e.fillRect(0,n*.78,t,n*.22);for(let c=0;c<8;c++){e.fillStyle=`rgba(255,${100+Math.random()*100},20,0.6)`;const h=Math.random()*t,d=n*.78+Math.random()*30;e.fillRect(h,d,8,8)}const i=n*.78;e.fillStyle="#8b6020",e.fillRect(t/2-60,i,120,40),e.strokeStyle="#3a2010",e.lineWidth=3,e.strokeRect(t/2-60,i,120,40),Ps(e,t/2,i-10,14,{skin:"#7a4a2a",hat:null,body:"#2a2a2a",legs:"#1a1a1a",beard:"#1a1a1a"}),e.fillStyle="#8b1a1a",e.fillRect(t/2+14,i-50,28,20),e.fillStyle="#f4e3b2",e.font="bold 10px serif",e.textAlign="center",e.fillText("HARVARD",t/2+28,i-36),Lv(e,t*.5,n*.18),[{skin:"#5a3520",hat:"#d4af37",shades:!0,beard:"#1a1a1a",body:"#0a0a0a",legs:"#1a1a2a"},{skin:"#4a2a18",hat:"#1f4dff",shades:!0,beard:"#1a1a1a",body:"#0a0a0a",legs:"#1a1a2a"},{skin:"#3a2010",hat:"#000",shades:!0,beard:"#1a1a1a",body:"#0a0a0a",legs:"#1a1a2a"},{skin:"#5a3520",hat:"#a52525",shades:!0,beard:"#1a1a1a",body:"#0a0a0a",legs:"#1a1a2a"},{skin:"#4a2a18",hat:"#222",shades:!0,beard:"#1a1a1a",body:"#0a0a0a",legs:"#1a1a2a"}].forEach((c,h)=>{Ps(e,t*.18+h*64,i+10,9,c)}),e.fillStyle="#000",e.fillRect(t*.14,i+60,290,18),e.fillStyle="#fff",e.font="bold 14px monospace",e.fillText("N.W.A. — STR8 OUTTA COMPTON",t*.14+145,i+73),[{skin:"#5a3520",hat:"#222",body:"#a01818",legs:"#1f2a4a",beard:"#1a1a1a"},{skin:"#4a2a18",hat:"#222",body:"#1a1a8a",legs:"#1f2a4a",beard:"#1a1a1a"},{skin:"#6a3a20",hat:"#222",body:"#1a8a1a",legs:"#1f2a4a",beard:"#1a1a1a"},{skin:"#4a2a18",hat:"#222",body:"#a01818",legs:"#1f2a4a",beard:"#1a1a1a"}].forEach((c,h)=>{Ps(e,t*.62+h*64,i+10,9,c)}),e.fillStyle="#000",e.fillRect(t*.6,i+60,250,18),e.fillStyle="#fff",e.fillText("2 LIVE CREW — BANNED IN THE USA",t*.6+125,i+73);for(let c=0;c<4;c++)Ps(e,t*.06+c*36,i-4,6,{skin:"#a8c89a",body:"#7a1818",legs:"#3a1010",beard:"#e8e8e8"});e.fillStyle="#fff",e.fillRect(t*.04,i-70,180,22),e.fillStyle="#a01818",e.font="bold 13px monospace",e.textAlign="left",e.fillText("Rawr ADA Compliance",t*.04+6,i-54),Ps(e,t*.92,i-4,8,{skin:"#e8c8a8",body:"#1a6a2a",legs:"#202028",beard:"#7a5020"}),e.fillStyle="#1a1a1a",e.fillRect(t*.94,i+16,18,22),e.fillStyle="#fff",e.fillRect(t*.94+4,i+22,10,8),e.fillStyle="#ff9a1f",e.beginPath(),e.moveTo(t*.94+6,i+30),e.lineTo(t*.94+12,i+30),e.lineTo(t*.94+9,i+36),e.closePath(),e.fill(),e.fillStyle="#fff",e.fillRect(t*.66,i-84,200,22),e.fillStyle="#000",e.font="bold 13px monospace",e.fillText("haha get blocked",t*.66+8,i-68),e.fillStyle="#5ad8e0",e.fillRect(t*.46,i-30,8,60),e.fillStyle="#8b6020",e.fillRect(t*.45,i+30,12,18),e.fillStyle="#000",e.fillRect(t*.66,i+92,200,24),e.fillStyle="#5ad8e0",e.font="bold 14px monospace",e.textAlign="center",e.fillText("ADA COMPLIANCE +999",t*.66+100,i+109);const a="MARKCRAFT";e.font="bold 110px monospace",e.textAlign="center",e.lineWidth=8,e.strokeStyle="#000",e.strokeText(a,t/2,110);const l=e.createLinearGradient(0,40,0,130);l.addColorStop(0,"#f4e3b2"),l.addColorStop(.5,"#d4a040"),l.addColorStop(1,"#7a3010"),e.fillStyle=l,e.fillText(a,t/2,110),e.font="bold 22px monospace",e.fillStyle="#fff",e.strokeStyle="#000",e.lineWidth=4,e.strokeText("a rescue mission for our professor",t/2,152),e.fillText("a rescue mission for our professor",t/2,152)}function Iv(s){const e=document.createElement("div");e.id="mc-loading",e.innerHTML=`
    <canvas id="mc-loading-bg"></canvas>
    <div id="mc-loading-content">
      <div id="mc-story">
        <h2>THE LORE</h2>
        <p>Steve got fired for a bash assignment he forgot to grade. You are <b class="hl">UNC MARKS</b>, the only Harvard economist with the moral fortitude to rescue him. Also you have a pickaxe.</p>
        <p>The zombies are <b class="hl">Adam Smith</b>. Hit one — it drops a pamphlet on the <b class="hl">invisible hand</b>. Collect 100 to unlock a <b class="hl">Harvard Economics degree</b>. It does nothing. Welcome to economics.</p>
        <p>Kill enough and they respawn as <b class="hl red">Karl Marx</b>. Now they're hitting <i>you</i>. They scream <b class="hl">"Rawr ADA Compliance"</b> while seizing your means of production.</p>
        <p>The final boss is the <b class="hl red">Nassim Taleb dragon</b>. He attacks anyone who prepared for the fight. He sets you on fire. He tweets about it from a burner. He says <b class="hl">"haha get blocked"</b> while you're literally on fire.</p>
        <p>Your allies: <b class="hl gold">N.W.A.</b> on the boombox, <b class="hl gold">2 Live Crew</b> on backup vocals, <b class="hl green">Linus Torvalds</b> wielding the <b class="hl cyan">ADA Compliance</b> sword (+999 to lawsuits), the <b class="hl">FSU Penguin</b>, and one (1) Tux for moral support.</p>
        <p class="mission"><b class="hl red">MISSION:</b> Slay the dragon. Get Unc Marks unblocked on Twitter. <b class="hl">Pass economics.</b></p>
        <div id="mc-credits">held together by Docker, ngrok, and prayer · supported by the Linux Foundation · syllabus pending IRB review</div>
      </div>
      <div id="mc-controls">
        <div id="mc-keys">
          <div><kbd>WASD</kbd> Move</div>
          <div><kbd>SHIFT</kbd> Sprint</div>
          <div><kbd>SPACE</kbd> Jump</div>
          <div><kbd>1-8</kbd> Block · <kbd>0</kbd> Pickaxe</div>
          <div><kbd>M</kbd> Mute music</div>
          <div><kbd>R</kbd> Reset camera</div>
        </div>
        <button id="mc-start-btn">[ ENTER MARKCRAFT ]</button>
        <label id="mc-mini-me" style="display:flex;align-items:center;gap:10px;justify-content:center;margin-top:14px;font-family:monospace;color:#ffd54a;cursor:pointer;font-size:14px;">
          <input type="checkbox" id="mc-mini-me-toggle" style="width:18px;height:18px;cursor:pointer;" />
          <span>MINI-ME MODE <span style="color:#fff;opacity:0.75;font-size:12px;">(kid is watching — clean lyrics &amp; quotes)</span></span>
        </label>
        <div id="mc-music-hint">click to start with N.W.A. — Straight Outta Compton</div>
      </div>
    </div>
  `,document.body.appendChild(e);const t=e.querySelector("#mc-mini-me-toggle");try{t.checked=localStorage.getItem("markcraft.miniMe")==="1"}catch{}window.MARKCRAFT_MINI_ME=!!t.checked,t.addEventListener("change",()=>{window.MARKCRAFT_MINI_ME=!!t.checked;try{localStorage.setItem("markcraft.miniMe",t.checked?"1":"0")}catch{}});const n=e.querySelector("#mc-loading-bg");function i(){n.width=window.innerWidth,n.height=window.innerHeight,Pv(n)}i(),window.addEventListener("resize",i);const r=e.querySelector("#mc-start-btn");function o(){e.style.transition="opacity 0.6s ease",e.style.opacity="0",setTimeout(()=>{e.remove()},650),s&&s()}return r.addEventListener("click",o),e}function Dv(){const s=document.createElement("div");s.id="mc-music-player",s.innerHTML=`
    <div class="mc-mp-row">
      <button class="mc-mp-btn" data-act="prev" title="Previous track">⏮</button>
      <button class="mc-mp-btn mc-mp-play" data-act="toggle" title="Play / Pause">▶</button>
      <button class="mc-mp-btn" data-act="next" title="Next track (N)">⏭</button>
    </div>
    <div class="mc-mp-track">
      <div class="mc-mp-title">—</div>
      <div class="mc-mp-artist">—</div>
    </div>
    <div class="mc-mp-counter">0 / 0</div>
  `,document.body.appendChild(s);const e=s.querySelector(".mc-mp-title"),t=s.querySelector(".mc-mp-artist"),n=s.querySelector(".mc-mp-counter"),i=s.querySelector(".mc-mp-play");function r(o){if(!o.track){e.textContent="no tracks",t.textContent="add mp3s to /audio/",n.textContent="0 / 0",i.textContent="▶";return}e.textContent=o.track.title,t.textContent=o.track.artist,n.textContent=`${o.index+1} / ${o.total}`,i.textContent=o.paused?"▶":"❚❚"}return s.addEventListener("click",o=>{const a=o.target.closest("button");if(!a)return;const l=a.dataset.act;l==="prev"?Av():l==="next"?xa():l==="toggle"&&(va().paused?Xa():Ev()),o.stopPropagation()}),document.addEventListener("keydown",o=>{o.target&&(o.target.tagName==="INPUT"||o.target.tagName==="TEXTAREA")||o.code==="KeyN"&&xa()}),Rv(r),r(va()),Nv(),s}function Nv(){const s=document.createElement("button");s.id="mc-mini-me-badge",s.type="button",s.style.cssText="position:fixed;left:16px;bottom:96px;z-index:55;background:rgba(20,10,4,0.85);color:#ffd54a;border:3px solid #ffd54a;padding:8px 12px;font-family:monospace;font-size:12px;cursor:pointer;line-height:1.3;text-align:left;";function e(){const t=!!window.MARKCRAFT_MINI_ME;s.innerHTML=`<b>MINI-ME MODE</b><br/>${t?'<span style="color:#7af07a;">ON · clean</span>':'<span style="color:#fff;opacity:0.7;">OFF · explicit</span>'}`}s.addEventListener("click",t=>{t.stopPropagation(),window.MARKCRAFT_MINI_ME=!window.MARKCRAFT_MINI_ME;try{localStorage.setItem("markcraft.miniMe",window.MARKCRAFT_MINI_ME?"1":"0")}catch{}e()}),document.body.appendChild(s),e()}function Ya(s,e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;z-index:99999;background:#1a0a05;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px;text-align:center;font-family:monospace;overflow:auto;";const n=e?`<details style="margin-top:18px;max-width:760px;text-align:left;background:#000;border:2px solid #ffd54a;padding:10px;font-size:11px;color:#9ad8ff;"><summary style="cursor:pointer;color:#ffd54a;font-size:13px;">show diagnostic (${e.length} attempts)</summary><pre style="white-space:pre-wrap;word-break:break-all;margin:8px 0 0;">${e.map((i,r)=>`#${r+1}  ${i}`).join(`
`)}</pre></details>`:"";t.innerHTML=`
    <h1 style="color:#ffd54a;font-size:36px;margin:0 0 12px;">MARKCRAFT</h1>
    <p style="color:#ff5252;font-size:18px;max-width:680px;">${s}</p>
    <p style="color:#7af07a;font-size:13px;max-width:680px;margin-top:18px;line-height:1.5;">
      <b>FIX (Chrome):</b> Settings → System → enable "Use hardware acceleration when available" → relaunch Chrome.<br/>
      Then visit <span style="color:#9ad8ff;">chrome://gpu</span> — "WebGL" + "WebGL2" should be green.
    </p>
    <p style="color:#7af07a;font-size:13px;max-width:680px;margin-top:8px;">
      <b>FIX (Safari):</b> Develop menu → Experimental Features → enable WebGL 2.0.
    </p>
    <button onclick="location.reload()" style="margin-top:20px;font-family:monospace;font-size:18px;padding:12px 24px;background:#ffd54a;border:4px solid #000;cursor:pointer;">RETRY</button>
    ${n}
  `,document.body.appendChild(t)}function Uv(){return!!(window.WebGLRenderingContext||window.WebGL2RenderingContext)}if(!Uv())throw Ya("WebGL is not available in this browser. MarkCraft requires WebGL to run."),new Error("WebGL unsupported");const id=new K_;document.body.appendChild(id.dom);window.MARKCRAFT_WEBGL_DEBUG=[];function Ov(){const s=window.MARKCRAFT_WEBGL_DEBUG,e=(r,o)=>s.push(`${r} → ${o}`),t=(r,o)=>{try{return r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.setSize(window.innerWidth,window.innerHeight),r.setClearColor(8429792),r.shadowMap.enabled=!0,r.shadowMap.type=ah,e(o,"OK"),r}catch(a){return e(o,"setup-failed: "+a.message),null}},n=[["no-args",void 0],["default",{antialias:!1,powerPreference:"default",failIfMajorPerformanceCaveat:!1}],["low-power",{antialias:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!1}],["high-perf",{antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1}],["antialias-on",{antialias:!0,powerPreference:"default",failIfMajorPerformanceCaveat:!1}],["alpha-on",{antialias:!1,alpha:!0,failIfMajorPerformanceCaveat:!1}],["no-stencil",{antialias:!1,stencil:!1,depth:!0,failIfMajorPerformanceCaveat:!1}],["no-depth",{antialias:!1,stencil:!1,depth:!1,failIfMajorPerformanceCaveat:!1}]];for(const[r,o]of n)try{const a=t(new ra(o),`THREE ${r}`);if(a)return a}catch(a){e(`THREE ${r}`,a.message)}const i=[["default",{antialias:!1,failIfMajorPerformanceCaveat:!1}],["minimal",{antialias:!1,alpha:!1,depth:!0,stencil:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,failIfMajorPerformanceCaveat:!1}],["bare",{}],["no-perf-caveat",{failIfMajorPerformanceCaveat:!1}]];for(const[r,o]of i)for(const a of["webgl2","webgl","experimental-webgl"])try{const l=document.createElement("canvas"),c=l.getContext(a,o);if(!c){e(`manual ${a} ${r}`,"returned null");continue}const h=t(new ra({canvas:l,context:c}),`manual ${a} ${r}`);if(h)return h}catch(l){e(`manual ${a} ${r}`,l.message)}return console.error("[MarkCraft] all WebGL strategies failed:",s),null}const On=Ov();if(!On)throw Ya("Could not create a WebGL renderer after trying every fallback configuration.",window.MARKCRAFT_WEBGL_DEBUG),new Error("WebGL renderer creation failed");document.body.appendChild(On.domElement);On.domElement.addEventListener("webglcontextlost",s=>{s.preventDefault(),console.warn("[MarkCraft] WebGL context lost, attempting to recover…")},!1);On.domElement.addEventListener("webglcontextrestored",()=>{console.log("[MarkCraft] WebGL context restored."),On.setSize(window.innerWidth,window.innerHeight),On.setClearColor(8429792)},!1);const yn=new O0;yn.fog=new Pa(8429792,80,130);const Qn=new nx;Qn.generate();yn.add(Qn);const ht=new dx(yn,Qn),sd=new gx(yn);new ov(s=>{ht.setTool(s.pickaxe)});let Ct;function Fv(){Ct=new Jh,Ct.intensity=1.5,Ct.position.set(50,50,50),Ct.castShadow=!0,Ct.shadow.camera.left=-40,Ct.shadow.camera.right=40,Ct.shadow.camera.top=40,Ct.shadow.camera.bottom=-40,Ct.shadow.camera.near=.1,Ct.shadow.camera.far=200,Ct.shadow.bias=-1e-4,Ct.shadow.mapSize=new pe(2048,2048),yn.add(Ct),yn.add(Ct.target);const s=new F_;s.intensity=.2,yn.add(s)}const Br=new bv(yn,Qn,ht);let Hs=!1,$o=0;function rd(){if(!Hs){if($o||($o=performance.now()),Br.chunksReady()){Br.spawnAll(),Hs=!0;return}performance.now()-$o>12e3&&(console.warn("[MarkCraft] Chunk load timeout — force-spawning entities anyway."),Br.spawnAll(),Hs=!0)}}let wi=!1,Et={active:!1,lastX:0,lastY:0,yaw:0,pitch:0},ps=!1;const sh=.0028;function kv(){wi||(wi=!0,qa(),od())}function od(){if(document.getElementById("mc-look-hint"))return;const s=document.createElement("div");s.id="mc-look-hint",s.style.cssText="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:60;background:rgba(20,10,4,0.92);color:#ffd54a;border:4px solid #ffd54a;padding:14px 24px;font-family:monospace;font-size:18px;text-align:center;pointer-events:none;letter-spacing:1px;",s.innerHTML="CLICK TO LOOK AROUND",document.body.appendChild(s)}function Bv(){const s=document.getElementById("mc-look-hint");s&&s.remove()}document.addEventListener("pointerlockchange",()=>{document.pointerLockElement?Bv():wi&&!ps&&od()});function qa(){if(!(!ht||!ht.controls||ht.controls.isLocked))try{const s=ht.controls.lock();s&&typeof s.catch=="function"&&s.catch(()=>ya())}catch{ya()}}function ya(){ps||(ps=!0,Et.yaw=ht.camera.rotation.y,Et.pitch=ht.camera.rotation.x,ht&&ht.controls&&(ht.controls.lock=()=>{}),zv())}function zv(){if(document.getElementById("mc-drag-hint"))return;const s=document.createElement("div");s.id="mc-drag-hint",s.style.cssText="position:fixed;top:84px;right:16px;z-index:60;background:rgba(20,10,4,0.85);color:#ffd54a;border:3px solid #ffd54a;padding:8px 14px;font-family:monospace;font-size:13px;max-width:260px;line-height:1.4;pointer-events:none;",s.innerHTML='<b>FIRST-PERSON MODE</b><br/><span style="color:#fff;font-size:11px;opacity:0.9;">click + drag to look · WASD to walk · run locally for mouse-lock</span>',document.body.appendChild(s),setTimeout(()=>{s.style.transition="opacity 1s",s.style.opacity="0",setTimeout(()=>s.remove(),1100)},6e3)}On.domElement.addEventListener("mousedown",s=>{wi&&(ht.controls.isLocked||(ps||qa(),Et.active=!0,Et.lastX=s.clientX,Et.lastY=s.clientY))});document.addEventListener("mousedown",s=>{if(!wi||ht.controls.isLocked||ps)return;const e=s.target.tagName;e==="INPUT"||e==="BUTTON"||e==="SELECT"||qa()});window.addEventListener("mouseup",()=>{Et.active=!1});window.addEventListener("mousemove",s=>{if(!wi||!ps||!Et.active)return;const e=s.clientX-Et.lastX,t=s.clientY-Et.lastY;Et.lastX=s.clientX,Et.lastY=s.clientY,Et.yaw-=e*sh,Et.pitch-=t*sh;const n=Math.PI/2-.05;Et.pitch>n&&(Et.pitch=n),Et.pitch<-n&&(Et.pitch=-n),ht.camera.rotation.order="YXZ",ht.camera.rotation.y=Et.yaw,ht.camera.rotation.x=Et.pitch});let rh=performance.now();function ad(){requestAnimationFrame(ad);try{const s=performance.now(),e=(s-rh)/1e3;Hs||rd(),wi&&(sd.update(e,ht,Qn),ht.update(Qn),Qn.update(ht),Ct&&(Ct.position.copy(ht.camera.position),Ct.position.sub(new C(-50,-50,-50)),Ct.target.position.copy(ht.camera.position))),Hs&&Br.update(e,s),On.render(yn,ht.camera),id.update(),rh=s}catch(s){console.error("[MarkCraft] frame error:",s)}}window.addEventListener("resize",()=>{ht.camera.aspect=window.innerWidth/window.innerHeight,ht.camera.updateProjectionMatrix(),On.setSize(window.innerWidth,window.innerHeight)});document.addEventListener("keydown",s=>{s.code==="KeyM"&&Tv()});window.addEventListener("error",s=>{console.error("[MarkCraft] uncaught error:",s.error||s.message)});window.addEventListener("unhandledrejection",s=>{const e=s.reason&&s.reason.message||String(s.reason||"");if(/pointer lock/i.test(e)){ya(),s.preventDefault();return}console.error("[MarkCraft] unhandled rejection:",s.reason)});try{Tx(Qn,ht,sd,yn),Fv(),ad(),wv(),Dv(),Iv(()=>{Xa(),rd(),kv()})}catch(s){throw Ya(`Failed to start: ${s.message}`),s}
//# sourceMappingURL=index-cf7700e5.js.map
