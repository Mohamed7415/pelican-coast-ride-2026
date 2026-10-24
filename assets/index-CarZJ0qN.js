(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const gl="186",Ts={ROTATE:0,DOLLY:1,PAN:2},bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wu=0,Gl=1,Xu=2,Qr=1,Ph=2,Qs=3,Xi=0,Sn=1,Ln=2,wi=0,ar=1,Vl=2,Wl=3,Xl=4,Lh=5,ys=100,qu=101,Yu=102,Ku=103,Zu=104,$u=200,yo=201,ju=202,Ju=203,Dh=204,ua=205,Qu=206,ed=207,td=208,nd=209,id=210,sd=211,rd=212,ad=213,od=214,bo=0,wo=1,To=2,ur=3,Eo=4,Ao=5,Ro=6,Co=7,_l=0,ld=1,cd=2,ci=0,Ih=1,Nh=2,Uh=3,Fh=4,Oh=5,Bh=6,kh=7,ql="attached",hd="detached",zh=300,ns=301,Ps=302,Pa=303,La=304,wa=306,In=1e3,pn=1001,da=1002,jt=1003,Hh=1004,er=1005,Et=1006,ea=1007,zn=1008,Vt=1009,Gh=1010,Vh=1011,dr=1012,xl=1013,hi=1014,on=1015,yn=1016,vl=1017,Ml=1018,fr=1020,Wh=35902,Xh=35899,qh=1021,Yh=1022,Bt=1023,Ai=1026,es=1027,ri=1028,Sl=1029,qi=1030,yl=1031,bl=1033,ta=33776,na=33777,ia=33778,sa=33779,Po=35840,Lo=35841,Do=35842,Io=35843,No=36196,Uo=37492,Fo=37496,Oo=37488,Bo=37489,fa=37490,ko=37491,zo=37808,Ho=37809,Go=37810,Vo=37811,Wo=37812,Xo=37813,qo=37814,Yo=37815,Ko=37816,Zo=37817,$o=37818,jo=37819,Jo=37820,Qo=37821,el=36492,tl=36494,nl=36495,il=36283,sl=36284,pa=36285,rl=36286,pr=2300,mr=2301,Da=2302,Yl=2303,Kl=2400,Zl=2401,$l=2402,ud=2500,dd=0,Kh=1,al=2,fd=3200,ma=0,pd=1,ai="",Gt="srgb",Xt="srgb-linear",ga="linear",Rt="srgb",Ia=7680,md=519,gd=512,_d=513,xd=514,wl=515,vd=516,Md=517,Tl=518,Sd=519,Zh=35044,jl="300 es",oi=2e3,gr=2001;function yd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wd(){const i=_r("canvas");return i.style.display="block",i}const Jl={};function _a(...i){const e="THREE."+i.shift();console.log(e,...i)}function $h(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function nt(...i){i=$h(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function dt(...i){i=$h(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Es(...i){const e=i.join(" ");e in Jl||(Jl[e]=!0,nt(...i))}function Td(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Ed={[bo]:wo,[To]:Ro,[Eo]:Co,[ur]:Ao,[wo]:bo,[Ro]:To,[Co]:Eo,[Ao]:ur};class Yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ql=1234567;const or=Math.PI/180,Ls=180/Math.PI;function Zn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function El(i,e){return(i%e+e)%e}function Ad(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Rd(i,e,t){return i!==e?(t-i)/(e-i):0}function lr(i,e,t){return(1-t)*i+t*e}function Cd(i,e,t,n){return lr(i,e,1-Math.exp(-t*n))}function Pd(i,e=1){return e-Math.abs(El(i,e*2)-e)}function Ld(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Dd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Id(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Nd(i,e){return i+Math.random()*(e-i)}function Ud(i){return i*(.5-Math.random())}function Fd(i){i!==void 0&&(Ql=i);let e=Ql+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Od(i){return i*or}function Bd(i){return i*Ls}function kd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function zd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gd(i,e,t,n,s){const r=Math.cos,a=Math.sin,l=r(t/2),o=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(l*h,o*u,o*d,l*c);break;case"YZY":i.set(o*d,l*h,o*u,l*c);break;case"ZXZ":i.set(o*u,o*d,l*h,l*c);break;case"XZX":i.set(l*h,o*g,o*f,l*c);break;case"YXY":i.set(o*f,l*h,o*g,l*c);break;case"ZYZ":i.set(o*g,o*f,l*h,l*c);break;default:nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Kn={DEG2RAD:or,RAD2DEG:Ls,generateUUID:Zn,clamp:gt,euclideanModulo:El,mapLinear:Ad,inverseLerp:Rd,lerp:lr,damp:Cd,pingpong:Pd,smoothstep:Ld,smootherstep:Dd,randInt:Id,randFloat:Nd,randFloatSpread:Ud,seededRandom:Fd,degToRad:Od,radToDeg:Bd,isPowerOfTwo:kd,ceilPowerOfTwo:zd,floorPowerOfTwo:Hd,setQuaternionFromProperEuler:Gd,normalize:Ct,denormalize:qn};class st{static{st.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,l){let o=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(u!==v||o!==d||c!==f||h!==g){let m=o*d+c*f+h*g+u*v;m<0&&(d=-d,f=-f,g=-g,v=-v,m=-m);let p=1-l;if(m<.9995){const y=Math.acos(m),E=Math.sin(y);p=Math.sin(p*y)/E,l=Math.sin(l*y)/E,o=o*p+d*l,c=c*p+f*l,h=h*p+g*l,u=u*p+v*l}else{o=o*p+d*l,c=c*p+f*l,h=h*p+g*l,u=u*p+v*l;const y=1/Math.sqrt(o*o+c*c+h*h+u*u);o*=y,c*=y,h*=y,u*=y}}e[t]=o,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const l=n[s],o=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=l*g+h*u+o*f-c*d,e[t+1]=o*g+h*d+c*u-l*f,e[t+2]=c*g+h*f+l*d-o*u,e[t+3]=h*g-l*u-o*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,l=Math.cos,o=Math.sin,c=l(n/2),h=l(s/2),u=l(r/2),d=o(n/2),f=o(s/2),g=o(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],l=t[5],o=t[9],c=t[2],h=t[6],u=t[10],d=n+l+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-o)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>l&&n>u){const f=2*Math.sqrt(1+n-l-u);this._w=(h-o)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(l>u){const f=2*Math.sqrt(1+l-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(o+h)/f}else{const f=2*Math.sqrt(1+u-n-l);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(o+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,l=t._x,o=t._y,c=t._z,h=t._w;return this._x=n*h+a*l+s*c-r*o,this._y=s*h+a*o+r*l-n*c,this._z=r*h+a*c+n*o-s*l,this._w=a*h-n*l-s*o-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,l=this.dot(e);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let o=1-t;if(l<.9995){const c=Math.acos(l),h=Math.sin(c);o=Math.sin(o*c)/h,t=Math.sin(t*c)/h,this._x=this._x*o+n*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this._onChangeCallback()}else this._x=this._x*o+n*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{static{H.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ec.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ec.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,l=e.z,o=e.w,c=2*(a*s-l*n),h=2*(l*t-r*s),u=2*(r*n-a*t);return this.x=t+o*c+a*u-l*h,this.y=n+o*h+l*c-r*u,this.z=s+o*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,l=t.y,o=t.z;return this.x=s*o-r*l,this.y=r*a-n*o,this.z=n*l-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Na.copy(this).projectOnVector(e),this.sub(Na)}reflect(e){return this.sub(Na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new H,ec=new mn;class pt{static{pt.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,l,o,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,l,o,c)}set(e,t,n,s,r,a,l,o,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=l,h[3]=t,h[4]=r,h[5]=o,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],l=n[3],o=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],y=s[1],E=s[4],_=s[7],S=s[2],w=s[5],R=s[8];return r[0]=a*v+l*y+o*S,r[3]=a*m+l*E+o*w,r[6]=a*p+l*_+o*R,r[1]=c*v+h*y+u*S,r[4]=c*m+h*E+u*w,r[7]=c*p+h*_+u*R,r[2]=d*v+f*y+g*S,r[5]=d*m+f*E+g*w,r[8]=d*p+f*_+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],c=e[7],h=e[8];return t*a*h-t*l*c-n*r*h+n*l*o+s*r*c-s*a*o}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],c=e[7],h=e[8],u=h*a-l*c,d=l*o-h*r,f=c*r-a*o,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(l*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*o)*v,e[5]=(s*r-l*t)*v,e[6]=f*v,e[7]=(n*o-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,l){const o=Math.cos(r),c=Math.sin(r);return this.set(n*o,n*c,-n*(o*a+c*l)+a+e,-s*c,s*o,-s*(-c*a+o*l)+l+t,0,0,1),this}scale(e,t){return Es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ua.makeScale(e,t)),this}rotate(e){return Es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ua.makeRotation(-e)),this}translate(e,t){return Es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ua=new pt,tc=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nc=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vd(){const i={enabled:!0,workingColorSpace:Xt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Rt&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Rt&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?ga:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xt]:{primaries:e,whitePoint:n,transfer:ga,toXYZ:tc,fromXYZ:nc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:Rt,toXYZ:tc,fromXYZ:nc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}const xt=Vd();function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function As(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let as;class Wd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{as===void 0&&(as=_r("canvas")),as.width=e.width,as.height=e.height;const s=as.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=as}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_r("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ti(t[n]/255)*255):t[n]=Ti(t[n]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xd=0;class Al{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(Fa(s[a].image)):r.push(Fa(s[a]))}else r=Fa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Fa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let qd=0;const Oa=new H;class sn extends Yi{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,n=pn,s=pn,r=Et,a=zn,l=Bt,o=Vt,c=sn.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Zn(),this.name="",this.source=new Al(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=o,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Oa).x}get height(){return this.source.getSize(Oa).y}get depth(){return this.source.getSize(Oa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case In:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case In:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=zh;sn.DEFAULT_ANISOTROPY=1;class ut{static{ut.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const o=e.elements,c=o[0],h=o[4],u=o[8],d=o[1],f=o[5],g=o[9],v=o[2],m=o[6],p=o[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,_=(f+1)/2,S=(p+1)/2,w=(h+d)/4,R=(u+v)/4,x=(g+m)/4;return E>_&&E>S?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=R/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=x/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=R/r,s=x/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yd extends Yi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new sn(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Al(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends Yd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jh extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kd extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class mt{static{mt.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,l,o,c,h,u,d,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,l,o,c,h,u,d,f,g,v,m)}set(e,t,n,s,r,a,l,o,c,h,u,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=l,p[13]=o,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/os.setFromMatrixColumn(e,0).length(),r=1/os.setFromMatrixColumn(e,1).length(),a=1/os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),l=Math.sin(n),o=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,g=l*h,v=l*u;t[0]=o*h,t[4]=-o*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-l*o,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*o}else if(e.order==="YXZ"){const d=o*h,f=o*u,g=c*h,v=c*u;t[0]=d+v*l,t[4]=g*l-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-l,t[2]=f*l-g,t[6]=v+d*l,t[10]=a*o}else if(e.order==="ZXY"){const d=o*h,f=o*u,g=c*h,v=c*u;t[0]=d-v*l,t[4]=-a*u,t[8]=g+f*l,t[1]=f+g*l,t[5]=a*h,t[9]=v-d*l,t[2]=-a*c,t[6]=l,t[10]=a*o}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=l*h,v=l*u;t[0]=o*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=o*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=l*o,t[10]=a*o}else if(e.order==="YZX"){const d=a*o,f=a*c,g=l*o,v=l*c;t[0]=o*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-l*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*o,f=a*c,g=l*o,v=l*c;t[0]=o*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=l*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zd,e,$d)}lookAt(e,t,n){const s=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Ni.crossVectors(n,Cn),Ni.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Ni.crossVectors(n,Cn)),Ni.normalize(),wr.crossVectors(Cn,Ni),s[0]=Ni.x,s[4]=wr.x,s[8]=Cn.x,s[1]=Ni.y,s[5]=wr.y,s[9]=Cn.y,s[2]=Ni.z,s[6]=wr.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],l=n[4],o=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],E=n[7],_=n[11],S=n[15],w=s[0],R=s[4],x=s[8],T=s[12],P=s[1],k=s[5],z=s[9],K=s[13],N=s[2],Z=s[6],ie=s[10],te=s[14],J=s[3],Y=s[7],ue=s[11],me=s[15];return r[0]=a*w+l*P+o*N+c*J,r[4]=a*R+l*k+o*Z+c*Y,r[8]=a*x+l*z+o*ie+c*ue,r[12]=a*T+l*K+o*te+c*me,r[1]=h*w+u*P+d*N+f*J,r[5]=h*R+u*k+d*Z+f*Y,r[9]=h*x+u*z+d*ie+f*ue,r[13]=h*T+u*K+d*te+f*me,r[2]=g*w+v*P+m*N+p*J,r[6]=g*R+v*k+m*Z+p*Y,r[10]=g*x+v*z+m*ie+p*ue,r[14]=g*T+v*K+m*te+p*me,r[3]=y*w+E*P+_*N+S*J,r[7]=y*R+E*k+_*Z+S*Y,r[11]=y*x+E*z+_*ie+S*ue,r[15]=y*T+E*K+_*te+S*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],l=e[5],o=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],y=o*f-c*d,E=l*f-c*u,_=l*d-o*u,S=a*f-c*h,w=a*d-o*h,R=a*u-l*h;return t*(v*y-m*E+p*_)-n*(g*y-m*S+p*w)+s*(g*E-v*S+p*R)-r*(g*_-v*w+m*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],l=e[9],o=e[2],c=e[6],h=e[10];return t*(a*h-l*c)-n*(r*h-l*o)+s*(r*c-a*o)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=t*l-n*a,E=t*o-s*a,_=t*c-r*a,S=n*o-s*l,w=n*c-r*l,R=s*c-r*o,x=h*v-u*g,T=h*m-d*g,P=h*p-f*g,k=u*m-d*v,z=u*p-f*v,K=d*p-f*m,N=y*K-E*z+_*k+S*P-w*T+R*x;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/N;return e[0]=(l*K-o*z+c*k)*Z,e[1]=(s*z-n*K-r*k)*Z,e[2]=(v*R-m*w+p*S)*Z,e[3]=(d*w-u*R-f*S)*Z,e[4]=(o*P-a*K-c*T)*Z,e[5]=(t*K-s*P+r*T)*Z,e[6]=(m*_-g*R-p*E)*Z,e[7]=(h*R-d*_+f*E)*Z,e[8]=(a*z-l*P+c*x)*Z,e[9]=(n*P-t*z-r*x)*Z,e[10]=(g*w-v*_+p*y)*Z,e[11]=(u*_-h*w-f*y)*Z,e[12]=(l*T-a*k-o*x)*Z,e[13]=(t*k-n*T+s*x)*Z,e[14]=(v*E-g*S-m*y)*Z,e[15]=(h*S-u*E+d*y)*Z,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,l=e.y,o=e.z,c=r*a,h=r*l;return this.set(c*a+n,c*l-s*o,c*o+s*l,0,c*l+s*o,h*l+n,h*o-s*a,0,c*o-s*l,h*o+s*a,r*o*o+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,l=t._z,o=t._w,c=r+r,h=a+a,u=l+l,d=r*c,f=r*h,g=r*u,v=a*h,m=a*u,p=l*u,y=o*c,E=o*h,_=o*u,S=n.x,w=n.y,R=n.z;return s[0]=(1-(v+p))*S,s[1]=(f+_)*S,s[2]=(g-E)*S,s[3]=0,s[4]=(f-_)*w,s[5]=(1-(d+p))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(g+E)*R,s[9]=(m-y)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=os.set(s[0],s[1],s[2]).length();const l=os.set(s[4],s[5],s[6]).length(),o=os.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Hn.copy(this);const c=1/a,h=1/l,u=1/o;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,t.setFromRotationMatrix(Hn),n.x=a,n.y=l,n.z=o,this}makePerspective(e,t,n,s,r,a,l=oi,o=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let g,v;if(o)g=r/(a-r),v=a*r/(a-r);else if(l===oi)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(l===gr)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,l=oi,o=!1){const c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,v;if(o)g=1/(a-r),v=a/(a-r);else if(l===oi)g=-2/(a-r),v=-(a+r)/(a-r);else if(l===gr)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const os=new H,Hn=new mt,Zd=new H(0,0,0),$d=new H(1,1,1),Ni=new H,wr=new H,Cn=new H,ic=new mt,sc=new mn;class ui{constructor(e=0,t=0,n=0,s=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],l=s[8],o=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,f),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(l,f));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ic.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ic,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sc.setFromEuler(this),this.setFromQuaternion(sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class Jh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jd=0;const rc=new H,ls=new mn,di=new mt,Tr=new H,zs=new H,Jd=new H,Qd=new mn,ac=new H(1,0,0),oc=new H(0,1,0),lc=new H(0,0,1),cc={type:"added"},ef={type:"removed"},cs={type:"childadded",child:null},Ba={type:"childremoved",child:null};class kt extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new H,t=new ui,n=new mn,s=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new pt}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(ac,e)}rotateY(e){return this.rotateOnAxis(oc,e)}rotateZ(e){return this.rotateOnAxis(lc,e)}translateOnAxis(e,t){return rc.copy(e).applyQuaternion(this.quaternion),this.position.add(rc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ac,e)}translateY(e){return this.translateOnAxis(oc,e)}translateZ(e){return this.translateOnAxis(lc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Tr.copy(e):Tr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(zs,Tr,this.up):di.lookAt(Tr,zs,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(di),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cc),cs.child=e,this.dispatchEvent(cs),cs.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ef),Ba.child=e,this.dispatchEvent(Ba),Ba.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cc),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,Jd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,Qd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const o=l.shapes;if(Array.isArray(o))for(let c=0,h=o.length;c<h;c++){const u=o[c];r(e.shapes,u)}else r(e.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let o=0,c=this.material.length;o<c;o++)l.push(r(e.materials,this.material[o]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const o=this.animations[l];s.animations.push(r(e.animations,o))}}if(t){const l=a(e.geometries),o=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);l.length>0&&(n.geometries=l),o.length>0&&(n.materials=o),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(l){const o=[];for(const c in l){const h=l[c];delete h.metadata,o.push(h)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}kt.DEFAULT_UP=new H(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gn extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tf={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const l=this._targetRay,o=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(tf)))}return l!==null&&(l.visible=s!==null),o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Er={h:0,s:0,l:0};function za(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=xt.workingColorSpace){if(e=El(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=za(a,r,e+1/3),this.g=za(a,r,e),this.b=za(a,r,e-1/3)}return xt.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=Qh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return xt.workingToColorSpace(cn.copy(this),e),Math.round(gt(cn.r*255,0,255))*65536+Math.round(gt(cn.g*255,0,255))*256+Math.round(gt(cn.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(cn.copy(this),t);const n=cn.r,s=cn.g,r=cn.b,a=Math.max(n,s,r),l=Math.min(n,s,r);let o,c;const h=(l+a)/2;if(l===a)o=0,c=0;else{const u=a-l;switch(c=h<=.5?u/(a+l):u/(2-a-l),a){case n:o=(s-r)/u+(s<r?6:0);break;case s:o=(r-n)/u+2;break;case r:o=(n-s)/u+4;break}o/=6}return e.h=o,e.s=c,e.l=h,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Gt){xt.workingToColorSpace(cn.copy(this),e);const t=cn.r,n=cn.g,s=cn.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+t,Ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL(Er);const n=lr(Ui.h,Er.h,t),s=lr(Ui.s,Er.s,t),r=lr(Ui.l,Er.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new $e;$e.NAMES=Qh;class Rl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new $e(e),this.near=t,this.far=n}clone(){return new Rl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class eu extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Gn=new H,fi=new H,Ha=new H,pi=new H,hs=new H,us=new H,hc=new H,Ga=new H,Va=new H,Wa=new H,Xa=new ut,qa=new ut,Ya=new ut;class Yn{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Gn.subVectors(e,t),s.cross(Gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Gn.subVectors(s,t),fi.subVectors(n,t),Ha.subVectors(e,t);const a=Gn.dot(Gn),l=Gn.dot(fi),o=Gn.dot(Ha),c=fi.dot(fi),h=fi.dot(Ha),u=a*c-l*l;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*o-l*h)*d,g=(a*h-l*o)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,s,r,a,l,o){return this.getBarycoord(e,t,n,s,pi)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,pi.x),o.addScaledVector(a,pi.y),o.addScaledVector(l,pi.z),o)}static getInterpolatedAttribute(e,t,n,s,r,a){return Xa.setScalar(0),qa.setScalar(0),Ya.setScalar(0),Xa.fromBufferAttribute(e,t),qa.fromBufferAttribute(e,n),Ya.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Xa,r.x),a.addScaledVector(qa,r.y),a.addScaledVector(Ya,r.z),a}static isFrontFacing(e,t,n,s){return Gn.subVectors(n,t),fi.subVectors(e,t),Gn.cross(fi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Gn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Yn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,l;hs.subVectors(s,n),us.subVectors(r,n),Ga.subVectors(e,n);const o=hs.dot(Ga),c=us.dot(Ga);if(o<=0&&c<=0)return t.copy(n);Va.subVectors(e,s);const h=hs.dot(Va),u=us.dot(Va);if(h>=0&&u<=h)return t.copy(s);const d=o*u-h*c;if(d<=0&&o>=0&&h<=0)return a=o/(o-h),t.copy(n).addScaledVector(hs,a);Wa.subVectors(e,r);const f=hs.dot(Wa),g=us.dot(Wa);if(g>=0&&f<=g)return t.copy(r);const v=f*c-o*g;if(v<=0&&c>=0&&g<=0)return l=c/(c-g),t.copy(n).addScaledVector(us,l);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return hc.subVectors(r,s),l=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(hc,l);const p=1/(m+v+d);return a=v*p,l=d*p,t.copy(n).addScaledVector(hs,a).addScaledVector(us,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class bn{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ar.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(e.matrixWorld),this.union(Ar)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),Rr.subVectors(this.max,Hs),ds.subVectors(e.a,Hs),fs.subVectors(e.b,Hs),ps.subVectors(e.c,Hs),Fi.subVectors(fs,ds),Oi.subVectors(ps,fs),Ki.subVectors(ds,ps);let t=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-Ki.z,Ki.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,Ki.z,0,-Ki.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-Ki.y,Ki.x,0];return!Ka(t,ds,fs,ps,Rr)||(t=[1,0,0,0,1,0,0,0,1],!Ka(t,ds,fs,ps,Rr))?!1:(Cr.crossVectors(Fi,Oi),t=[Cr.x,Cr.y,Cr.z],Ka(t,ds,fs,ps,Rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mi=[new H,new H,new H,new H,new H,new H,new H,new H],Vn=new H,Ar=new bn,ds=new H,fs=new H,ps=new H,Fi=new H,Oi=new H,Ki=new H,Hs=new H,Rr=new H,Cr=new H,Zi=new H;function Ka(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Zi.fromArray(i,r);const l=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),o=e.dot(Zi),c=t.dot(Zi),h=n.dot(Zi);if(Math.max(-Math.max(o,c,h),Math.min(o,c,h))>l)return!1}return!0}const yi=nf();function nf(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let o=0;o<256;++o){const c=o-127;c<-27?(n[o]=0,n[o|256]=32768,s[o]=24,s[o|256]=24):c<-14?(n[o]=1024>>-c-14,n[o|256]=1024>>-c-14|32768,s[o]=-c-1,s[o|256]=-c-1):c<=15?(n[o]=c+15<<10,n[o|256]=c+15<<10|32768,s[o]=13,s[o|256]=13):c<128?(n[o]=31744,n[o|256]=64512,s[o]=24,s[o|256]=24):(n[o]=31744,n[o|256]=64512,s[o]=13,s[o|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),l=new Uint32Array(64);for(let o=1;o<1024;++o){let c=o<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[o]=c|h}for(let o=1024;o<2048;++o)r[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)a[o]=o<<23;a[31]=1199570944,a[32]=2147483648;for(let o=33;o<63;++o)a[o]=2147483648+(o-32<<23);a[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(l[o]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:l}}function sf(i){Math.abs(i)>65504&&nt("DataUtils.toHalfFloat(): Value out of range."),i=gt(i,-65504,65504),yi.floatView[0]=i;const e=yi.uint32View[0],t=e>>23&511;return yi.baseTable[t]+((e&8388607)>>yi.shiftTable[t])}function rf(i){const e=i>>10;return yi.uint32View[0]=yi.mantissaTable[yi.offsetTable[e]+(i&1023)]+yi.exponentTable[e],yi.floatView[0]}class Cl{static toHalfFloat(e){return sf(e)}static fromHalfFloat(e){return rf(e)}}const Zt=new H,Pr=new st;let af=0;class Ut extends Yi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:af++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zh,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pr.fromBufferAttribute(this,t),Pr.applyMatrix3(e),this.setXY(t,Pr.x,Pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class tu extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class nu extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class It extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}const of=new bn,Gs=new H,Za=new H;class _n{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):of.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);const t=Gs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Gs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(Za)),this.expandByPoint(Gs.copy(e.center).sub(Za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let lf=0;const On=new mt,$a=new kt,ms=new H,Pn=new bn,Vs=new bn,nn=new H;class Ot extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yd(e)?nu:tu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return $a.lookAt(e),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new It(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Vs.setFromBufferAttribute(l),this.morphTargetsRelative?(nn.addVectors(Pn.min,Vs.min),Pn.expandByPoint(nn),nn.addVectors(Pn.max,Vs.max),Pn.expandByPoint(nn)):(Pn.expandByPoint(Vs.min),Pn.expandByPoint(Vs.max))}Pn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(nn));if(t)for(let r=0,a=t.length;r<a;r++){const l=t[r],o=this.morphTargetsRelative;for(let c=0,h=l.count;c<h;c++)nn.fromBufferAttribute(l,c),o&&(ms.fromBufferAttribute(e,c),nn.add(ms)),s=Math.max(s,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ut(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const l=[],o=[];for(let x=0;x<n.count;x++)l[x]=new H,o[x]=new H;const c=new H,h=new H,u=new H,d=new st,f=new st,g=new st,v=new H,m=new H;function p(x,T,P){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,P),d.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const k=1/(f.x*g.y-g.x*f.y);isFinite(k)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(k),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(k),l[x].add(v),l[T].add(v),l[P].add(v),o[x].add(m),o[T].add(m),o[P].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,T=y.length;x<T;++x){const P=y[x],k=P.start,z=P.count;for(let K=k,N=k+z;K<N;K+=3)p(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const E=new H,_=new H,S=new H,w=new H;function R(x){S.fromBufferAttribute(s,x),w.copy(S);const T=l[x];E.copy(T),E.sub(S.multiplyScalar(S.dot(T))).normalize(),_.crossVectors(w,T);const k=_.dot(o[x])<0?-1:1;a.setXYZW(x,E.x,E.y,E.z,k)}for(let x=0,T=y.length;x<T;++x){const P=y[x],k=P.start,z=P.count;for(let K=k,N=k+z;K<N;K+=3)R(e.getX(K+0)),R(e.getX(K+1)),R(e.getX(K+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new H,r=new H,a=new H,l=new H,o=new H,c=new H,h=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),l.fromBufferAttribute(n,g),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),l.add(h),o.add(h),c.add(h),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(l,o){const c=l.array,h=l.itemSize,u=l.normalized,d=new c.constructor(o.length*h);let f=0,g=0;for(let v=0,m=o.length;v<m;v++){l.isInterleavedBufferAttribute?f=o[v]*l.data.stride+l.offset:f=o[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ut(d,h,u)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,s=this.attributes;for(const l in s){const o=s[l],c=e(o,n);t.setAttribute(l,c)}const r=this.morphAttributes;for(const l in r){const o=[],c=r[l];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);o.push(f)}t.morphAttributes[l]=o}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,o=a.length;l<o;l++){const c=a[l];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const o=this.parameters;for(const c in o)o[c]!==void 0&&(e[c]=o[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const o in n){const c=n[o];e.data.attributes[o]=c.toJSON(e.data)}const s={};let r=!1;for(const o in this.morphAttributes){const c=this.morphAttributes[o],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[o]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class iu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zh,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const un=new H;class Ta{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){_a("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ta(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_a("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ja=new H,cf=new H,hf=new pt;class Si{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ja.subVectors(n,t).cross(cf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(ja),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||hf.getNormalMatrix(e),s=this.coplanarPoint(ja).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let uf=0;class $n extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=ar,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dh,this.blendDst=ua,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ia,this.stencilZFail=Ia,this.stencilZPass=Ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const l in r){const o=r[l];delete o.metadata,a.push(o)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Si().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new st().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const gi=new H,Ja=new H,Lr=new H,Dr=new H;class Sr{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ja.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),Dr.copy(this.origin).sub(Ja);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Lr),l=Dr.dot(this.direction),o=-Dr.dot(Lr),c=Dr.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*o-l,d=a*l-o,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*l)+d*(a*u+d+2*o)+c}else d=r,u=Math.max(0,-(a*d+l)),f=-u*u+d*(d+2*o)+c;else d=-r,u=Math.max(0,-(a*d+l)),f=-u*u+d*(d+2*o)+c;else d<=-g?(u=Math.max(0,-(-a*r+l)),d=u>0?-r:Math.min(Math.max(-r,-o),r),f=-u*u+d*(d+2*o)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-o),r),f=d*(d+2*o)+c):(u=Math.max(0,-(a*r+l)),d=u>0?r:Math.min(Math.max(-r,-o),r),f=-u*u+d*(d+2*o)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+l)),f=-u*u+d*(d+2*o)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ja).addScaledVector(Lr,d),f}intersectSphere(e,t){if(e.radius<0)return null;gi.subVectors(e.center,this.origin);const n=gi.dot(this.direction),s=gi.dot(gi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),l=n-a,o=n+a;return o<0?null:l<0?this.at(o,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,l,o;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(l=(e.min.z-d.z)*u,o=(e.max.z-d.z)*u):(l=(e.max.z-d.z)*u,o=(e.min.z-d.z)*u),n>o||l>s)||((l>n||n!==n)&&(n=l),(o<s||s!==s)&&(s=o),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,l=this.direction,o=l.x,c=l.y,h=l.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,v=t.y-a.y,m=t.z-a.z,p=n.x-a.x,y=n.y-a.y,E=n.z-a.z,_=Math.abs(o),S=Math.abs(c),w=Math.abs(h);let R,x,T,P,k,z,K,N,Z,ie,te,J;if(_>=S&&_>=w?(T=o,z=u,Z=g,J=p,o>=0?(R=c,x=h,P=d,k=f,K=v,N=m,ie=y,te=E):(R=h,x=c,P=f,k=d,K=m,N=v,ie=E,te=y)):S>=w?(T=c,z=d,Z=v,J=y,c>=0?(R=h,x=o,P=f,k=u,K=m,N=g,ie=E,te=p):(R=o,x=h,P=u,k=f,K=g,N=m,ie=p,te=E)):(T=h,z=f,Z=m,J=E,h>=0?(R=o,x=c,P=u,k=d,K=g,N=v,ie=p,te=y):(R=c,x=o,P=d,k=u,K=v,N=g,ie=y,te=p)),T===0)return null;const Y=R/T,ue=x/T,me=1/T,Be=P-Y*z,se=k-ue*z,He=K-Y*Z,oe=N-ue*Z,F=ie-Y*J,I=te-ue*J,D=F*oe-I*He,Q=Be*I-se*F,O=He*se-oe*Be;if(s){if(D<0||Q<0||O<0)return null}else if((D<0||Q<0||O<0)&&(D>0||Q>0||O>0))return null;const re=D+Q+O;if(re===0)return null;const ve=me*(D*z+Q*Z+O*J);return(re>0?ve<0:ve>0)?null:this.at(ve/re,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ts extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const uc=new mt,$i=new Sr,Ir=new _n,dc=new H,Nr=new H,Ur=new H,Fr=new H,Qa=new H,Or=new H,fc=new H,Br=new H;class qt extends kt{constructor(e=new Ot,t=new ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(r&&l){Or.set(0,0,0);for(let o=0,c=r.length;o<c;o++){const h=l[o],u=r[o];h!==0&&(Qa.fromBufferAttribute(u,e),a?Or.addScaledVector(Qa,h):Or.addScaledVector(Qa.sub(t),h))}t.add(Or)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(r),$i.copy(e.ray).recast(e.near),!(Ir.containsPoint($i.origin)===!1&&($i.intersectSphere(Ir,dc)===null||$i.origin.distanceToSquared(dc)>(e.far-e.near)**2))&&(uc.copy(r).invert(),$i.copy(e.ray).applyMatrix4(uc),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,l=r.index,o=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,S=E;_<S;_+=3){const w=l.getX(_),R=l.getX(_+1),x=l.getX(_+2);s=kr(this,p,e,n,c,h,u,w,R,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=l.getX(m),E=l.getX(m+1),_=l.getX(m+2);s=kr(this,a,e,n,c,h,u,y,E,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(o!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,S=E;_<S;_+=3){const w=_,R=_+1,x=_+2;s=kr(this,p,e,n,c,h,u,w,R,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=m,E=m+1,_=m+2;s=kr(this,a,e,n,c,h,u,y,E,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function df(i,e,t,n,s,r,a,l){let o;if(e.side===Sn?o=n.intersectTriangle(a,r,s,!0,l):o=n.intersectTriangle(s,r,a,e.side===Xi,l),o===null)return null;Br.copy(l),Br.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Br);return c<t.near||c>t.far?null:{distance:c,point:Br.clone(),object:i}}function kr(i,e,t,n,s,r,a,l,o,c){i.getVertexPosition(l,Nr),i.getVertexPosition(o,Ur),i.getVertexPosition(c,Fr);const h=df(i,e,t,n,Nr,Ur,Fr,fc);if(h){const u=new H;Yn.getBarycoord(fc,Nr,Ur,Fr,u),s&&(h.uv=Yn.getInterpolatedAttribute(s,l,o,c,u,new st)),r&&(h.uv1=Yn.getInterpolatedAttribute(r,l,o,c,u,new st)),a&&(h.normal=Yn.getInterpolatedAttribute(a,l,o,c,u,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:l,b:o,c,normal:new H,materialIndex:0};Yn.getNormal(Nr,Ur,Fr,d.normal),h.face=d,h.barycoord=u}return h}const Ws=new ut,pc=new ut,mc=new ut,ff=new ut,gc=new mt,zr=new H,eo=new _n,_c=new mt,to=new Sr;class pf extends qt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ql,this.bindMatrix=new mt,this.bindMatrixInverse=new mt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zr),this.boundingBox.expandByPoint(zr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zr),this.boundingSphere.expandByPoint(zr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),eo.copy(this.boundingSphere),eo.applyMatrix4(s),e.ray.intersectsSphere(eo)!==!1&&(_c.copy(s).invert(),to.copy(e.ray).applyMatrix4(_c),!(this.boundingBox!==null&&to.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,to)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ql?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hd?this.bindMatrixInverse.copy(this.bindMatrix).invert():nt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;pc.fromBufferAttribute(s.attributes.skinIndex,e),mc.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Ws.copy(t),t.set(0,0,0,0)):(Ws.set(...t,1),t.set(0,0,0)),Ws.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=mc.getComponent(r);if(a!==0){const l=pc.getComponent(r);gc.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(ff.copy(Ws).applyMatrix4(gc),a)}}return t.isVector4&&(t.w=Ws.w),t.applyMatrix4(this.bindMatrixInverse)}}class su extends kt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wn extends sn{constructor(e=null,t=1,n=1,s,r,a,l,o,c=jt,h=jt,u,d){super(null,a,l,o,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xc=new mt,mf=new mt;class Pl{constructor(e=[],t=[]){this.uuid=Zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){nt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new mt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new mt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const l=e[r]?e[r].matrixWorld:mf;xc.multiplyMatrices(l,t[r]),xc.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Pl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new wn(t,e,e,Bt,on);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(nt("Skeleton: No bone found with UUID:",r),a=new su),this.bones.push(a),this.boneInverses.push(new mt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const l=n[s];e.boneInverses.push(l.toArray())}return e}}class xa extends Ut{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gs=new mt,vc=new mt,Hr=[],Mc=new bn,gf=new mt,Xs=new qt,qs=new _n;class ru extends qt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),Mc.copy(e.boundingBox).applyMatrix4(gs),this.boundingBox.union(Mc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),qs.copy(e.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),e.ray.intersectsSphere(qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gs),vc.multiplyMatrices(n,gs),Xs.matrixWorld=vc,Xs.raycast(e,Hr);for(let a=0,l=Hr.length;a<l;a++){const o=Hr[a];o.instanceId=r,o.object=this,t.push(o)}Hr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new xa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wn(new Float32Array(s*this.count),s,this.count,ri,on));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const l=this.geometry.morphTargetsRelative?1:1-a,o=s*e;return r[o]=l,r.set(n,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ji=new _n,_f=new st(.5,.5),Gr=new H;class Ea{constructor(e=new Si,t=new Si,n=new Si,s=new Si,r=new Si,a=new Si){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=oi,n=!1){const s=this.planes,r=e.elements,a=r[0],l=r[1],o=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],y=r[12],E=r[13],_=r[14],S=r[15];if(s[0].setComponents(c-a,f-h,p-g,S-y).normalize(),s[1].setComponents(c+a,f+h,p+g,S+y).normalize(),s[2].setComponents(c+l,f+u,p+v,S+E).normalize(),s[3].setComponents(c-l,f-u,p-v,S-E).normalize(),n)s[4].setComponents(o,d,m,_).normalize(),s[5].setComponents(c-o,f-d,p-m,S-_).normalize();else if(s[4].setComponents(c-o,f-d,p-m,S-_).normalize(),t===oi)s[5].setComponents(c+o,f+d,p+m,S+_).normalize();else if(t===gr)s[5].setComponents(o,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){ji.center.set(0,0,0);const t=_f.distanceTo(e.center);return ji.radius=.7071067811865476+t,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Gr.x=s.normal.x>0?e.max.x:e.min.x,Gr.y=s.normal.y>0?e.max.y:e.min.y,Gr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class au extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const va=new H,Ma=new H,Sc=new mt,Ys=new Sr,Vr=new _n,no=new H,yc=new H;class Ll extends kt{constructor(e=new Ot,t=new au){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)va.fromBufferAttribute(t,s-1),Ma.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=va.distanceTo(Ma);e.setAttribute("lineDistance",new It(n,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,e.ray.intersectsSphere(Vr)===!1)return;Sc.copy(s).invert(),Ys.copy(e.ray).applyMatrix4(Sc);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=h.getX(v),y=h.getX(v+1),E=Wr(this,e,Ys,o,p,y,v);E&&t.push(E)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=Wr(this,e,Ys,o,v,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=Wr(this,e,Ys,o,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Wr(this,e,Ys,o,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function Wr(i,e,t,n,s,r,a){const l=i.geometry.attributes.position;if(va.fromBufferAttribute(l,s),Ma.fromBufferAttribute(l,r),t.distanceSqToSegment(va,Ma,no,yc)>n)return;no.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(no);if(!(c<e.near||c>e.far))return{distance:c,point:yc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const bc=new H,wc=new H;class xf extends Ll{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)bc.fromBufferAttribute(t,s),wc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bc.distanceTo(wc);e.setAttribute("lineDistance",new It(n,1))}else nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vf extends Ll{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Dl extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tc=new mt,ol=new Sr,Xr=new _n,qr=new H;class ou extends kt{constructor(e=new Ot,t=new Dl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(s),Xr.radius+=r,e.ray.intersectsSphere(Xr)===!1)return;Tc.copy(s).invert(),ol.copy(e.ray).applyMatrix4(Tc);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){const m=c.getX(g);qr.fromBufferAttribute(u,m),Ec(qr,m,o,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)qr.fromBufferAttribute(u,g),Ec(qr,g,o,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function Ec(i,e,t,n,s,r,a){const l=ol.distanceSqToPoint(i);if(l<t){const o=new H;ol.closestPointToPoint(i,o),o.applyMatrix4(n);const c=s.ray.origin.distanceTo(o);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(l),point:o,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class lu extends sn{constructor(e=[],t=ns,n,s,r,a,l,o,c,h){super(e,t,n,s,r,a,l,o,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xr extends sn{constructor(e,t,n=hi,s,r,a,l=jt,o=jt,c,h=Ai,u=1){if(h!==Ai&&h!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,a,l,o,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Al(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Mf extends xr{constructor(e,t=hi,n=ns,s,r,a=jt,l=jt,o,c=Ai){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,l,o,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class cu extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ri extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const o=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(o),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(u,2));function g(v,m,p,y,E,_,S,w,R,x,T){const P=_/R,k=S/x,z=_/2,K=S/2,N=w/2,Z=R+1,ie=x+1;let te=0,J=0;const Y=new H;for(let ue=0;ue<ie;ue++){const me=ue*k-K;for(let Be=0;Be<Z;Be++){const se=Be*P-z;Y[v]=se*y,Y[m]=me*E,Y[p]=N,c.push(Y.x,Y.y,Y.z),Y[v]=0,Y[m]=0,Y[p]=w>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(Be/R),u.push(1-ue/x),te+=1}}for(let ue=0;ue<x;ue++)for(let me=0;me<R;me++){const Be=d+me+Z*ue,se=d+me+Z*(ue+1),He=d+(me+1)+Z*(ue+1),oe=d+(me+1)+Z*ue;o.push(Be,se,oe),o.push(se,He,oe),J+=6}l.addGroup(f,J,T),f+=J,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Il extends Ot{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:o};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;y(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(d,3)),this.setAttribute("uv",new It(f,2));function y(){const _=new H,S=new H;let w=0;const R=(t-e)/n;for(let x=0;x<=r;x++){const T=[],P=x/r,k=P*(t-e)+e;for(let z=0;z<=s;z++){const K=z/s,N=K*o+l,Z=Math.sin(N),ie=Math.cos(N);S.x=k*Z,S.y=-P*n+m,S.z=k*ie,u.push(S.x,S.y,S.z),_.set(Z,R,ie).normalize(),d.push(_.x,_.y,_.z),f.push(K,1-P),T.push(g++)}v.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){const P=v[T][x],k=v[T+1][x],z=v[T+1][x+1],K=v[T][x+1];(e>0||T!==0)&&(h.push(P,k,K),w+=3),(t>0||T!==r-1)&&(h.push(k,z,K),w+=3)}c.addGroup(p,w,0),p+=w}function E(_){const S=g,w=new st,R=new H;let x=0;const T=_===!0?e:t,P=_===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*P,0),d.push(0,P,0),f.push(.5,.5),g++;const k=g;for(let z=0;z<=s;z++){const N=z/s*o+l,Z=Math.cos(N),ie=Math.sin(N);R.x=T*ie,R.y=m*P,R.z=T*Z,u.push(R.x,R.y,R.z),d.push(0,P,0),w.x=Z*.5+.5,w.y=ie*.5*P+.5,f.push(w.x,w.y),g++}for(let z=0;z<s;z++){const K=S+z,N=k+z;_===!0?h.push(N,N+1,K):h.push(N+1,N,K),x+=3}c.addGroup(p,x,_===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yr extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,l=Math.floor(n),o=Math.floor(s),c=l+1,h=o+1,u=e/l,d=t/o,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const y=p*d-a;for(let E=0;E<c;E++){const _=E*u-r;g.push(_,-y,0),v.push(0,0,1),m.push(E/l),m.push(1-p/o)}}for(let p=0;p<o;p++)for(let y=0;y<l;y++){const E=y+c*p,_=y+c*(p+1),S=y+1+c*(p+1),w=y+1+c*p;f.push(E,_,w),f.push(_,S,w)}this.setIndex(f),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(v,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sa extends Ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const o=Math.min(a+l,Math.PI);let c=0;const h=[],u=new H,d=new H,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const y=[],E=p/n,_=a+E*l,S=e*Math.cos(_),w=Math.sqrt(e*e-S*S);let R=0;p===0&&a===0?R=.5/t:p===n&&o===Math.PI&&(R=-.5/t);for(let x=0;x<=t;x++){const T=x/t,P=s+T*r;u.x=-w*Math.cos(P),u.y=S,u.z=w*Math.sin(P),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(T+R,1-E),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const E=h[p][y+1],_=h[p][y],S=h[p+1][y],w=h[p+1][y+1];(p!==0||a>0)&&f.push(E,_,w),(p!==n-1||o<Math.PI)&&f.push(_,S,w)}this.setIndex(f),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(v,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cr extends Ot{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:l},n=Math.floor(n),s=Math.floor(s);const o=[],c=[],h=[],u=[],d=new H,f=new H,g=new H;for(let v=0;v<=n;v++){const m=a+v/n*l;for(let p=0;p<=s;p++){const y=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){const p=(s+1)*v+m-1,y=(s+1)*(v-1)+m-1,E=(s+1)*(v-1)+m,_=(s+1)*v+m;o.push(p,y,_),o.push(y,E,_)}this.setIndex(o),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ds(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Ac(s))s.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ac(s[0])){const r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function dn(i){const e={};for(let t=0;t<i.length;t++){const n=Ds(i[t]);for(const s in n)e[s]=n[s]}return e}function Ac(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Sf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function hu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const yf={clone:Ds,merge:dn};var bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bf,this.fragmentShader=wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=Sf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new $e().setHex(s.value);break;case"v2":this.uniforms[n].value=new st().fromArray(s.value);break;case"v3":this.uniforms[n].value=new H().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ut().fromArray(s.value);break;case"m3":this.uniforms[n].value=new pt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new mt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Tf extends Mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Us extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jn extends Us{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class uu extends $n{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=_l,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ef extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Af extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function zi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ra(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Rf(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Rc(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const l=t[r]*e;for(let o=0;o!==e;++o)s[a++]=i[l+o]}return s}function Cf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class Fs{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const l=t[1];e<l&&(n=2,r=l);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const l=n+a>>>1;e<t[l]?a=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Pf extends Fs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kl,endingEnd:Kl}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,l=s[r],o=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Zl:r=e,l=2*t-n;break;case $l:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(o===void 0)switch(this.getSettings_().endingEnd){case Zl:a=e,o=2*n-t;break;case $l:a=1,o=n+s[1]-s[0];break;default:a=e-1,o=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-l),this._weightNext=c/(o-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=e*l,c=o-l,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,y=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,E=(-1-f)*m+(1.5+f)*v+.5*g,_=f*m-f*v;for(let S=0;S!==l;++S)r[S]=p*a[h+S]+y*a[c+S]+E*a[o+S]+_*a[u+S];return r}}class Lf extends Fs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=e*l,c=o-l,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==l;++d)r[d]=a[c+d]*u+a[o+d]*h;return r}}class Df extends Fs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class If extends Fs{interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=e*l,c=o-l,h=this.inTangents,u=this.outTangents;if(!h||!u){const g=(n-t)/(s-t),v=1-g;for(let m=0;m!==l;++m)r[m]=a[c+m]*v+a[o+m]*g;return r}const d=l*2,f=e-1;for(let g=0;g!==l;++g){const v=a[c+g],m=a[o+g],p=f*d+g*2,y=u[p],E=u[p+1],_=e*d+g*2,S=h[_],w=h[_+1],R=Uf(n,t,y,S,s);r[g]=du(R,v,E,w,m)}return r}}function du(i,e,t,n,s){const r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Nf(i,e,t,n,s){const r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Uf(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){const l=du(r,e,t,n,s)-i;if(Math.abs(l)<1e-10)break;const o=Nf(r,e,t,n,s);if(Math.abs(o)<1e-10)break;r=Math.max(0,Math.min(1,r-l/o))}return r}class Jn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zi(t,this.TimeBufferType),this.values=zi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:zi(e.times,Array),values:zi(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ra(e.settings)&&(n.settings={inTangents:zi(e.settings.inTangents,Array),outTangents:zi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Df(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new If(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case pr:t=this.InterpolantFactoryMethodDiscrete;break;case mr:t=this.InterpolantFactoryMethodLinear;break;case Da:t=this.InterpolantFactoryMethodSmooth;break;case Yl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return nt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pr;case this.InterpolantFactoryMethodLinear:return mr;case this.InterpolantFactoryMethodSmooth:return Da;case this.InterpolantFactoryMethodBezier:return Yl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ra(this.settings)&&(Cc(this.settings.inTangents,e),Cc(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(dt("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(dt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==r;l++){const o=n[l];if(typeof o=="number"&&isNaN(o)){dt("KeyframeTrack: Time is not a valid number.",this,l,o),e=!1;break}if(a!==null&&a>o){dt("KeyframeTrack: Out of order keys.",this,l,o,a),e=!1;break}a=o}if(s!==void 0&&bd(s))for(let l=0,o=s.length;l!==o;++l){const c=s[l];if(isNaN(c)){dt("KeyframeTrack: Value is not a valid number.",this,l,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Da,r=e.length-1;let a=1;for(let l=1;l<r;++l){let o=!1;const c=e[l],h=e[l+1];if(c!==h&&(l!==1||c!==e[0]))if(s)o=!0;else{const u=l*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){o=!0;break}}}if(o){if(l!==a){e[a]=e[l];const u=l*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let l=r*n,o=a*n,c=0;c!==n;++c)t[o+c]=t[l+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ra(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}}function Cc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Jn.prototype.ValueTypeName="";Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=mr;class Os extends Jn{constructor(e,t,n){super(e,t,n)}}Os.prototype.ValueTypeName="bool";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=pr;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class fu extends Jn{constructor(e,t,n,s){super(e,t,n,s)}}fu.prototype.ValueTypeName="color";class vr extends Jn{constructor(e,t,n,s){super(e,t,n,s)}}vr.prototype.ValueTypeName="number";class Ff extends Fs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=(n-t)/(s-t);let c=e*l;for(let h=c+l;c!==h;c+=4)mn.slerpFlat(r,0,a,c-l,a,c,o);return r}}class Mr extends Jn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ff(this.times,this.values,this.getValueSize(),e)}}Mr.prototype.ValueTypeName="quaternion";Mr.prototype.InterpolantFactoryMethodSmooth=void 0;class Bs extends Jn{constructor(e,t,n){super(e,t,n)}}Bs.prototype.ValueTypeName="string";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=pr;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class ya extends Jn{constructor(e,t,n,s){super(e,t,n,s)}}ya.prototype.ValueTypeName="vector";class Of{constructor(e="",t=-1,n=[],s=ud){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Zn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,l=n.length;a!==l;++a)t.push(kf(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Jn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let l=0;l<r;l++){let o=[],c=[];o.push((l+r-1)%r,l,(l+1)%r),c.push(0,1,0);const h=Rf(o);o=Rc(o,1,h),c=Rc(c,1,h),!s&&o[0]===0&&(o.push(r),c.push(c[0])),a.push(new vr(".morphTargetInfluences["+t[l].name+"]",o,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let l=0,o=e.length;l<o;l++){const c=e[l],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(c)}}const a=[];for(const l in s)a.push(this.CreateFromMorphTargetSequence(l,s[l],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Bf(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vr;case"vector":case"vector2":case"vector3":case"vector4":return ya;case"color":return fu;case"quaternion":return Mr;case"bool":case"boolean":return Os;case"string":return Bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function kf(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Bf(i.type);if(i.times===void 0){const n=[],s=[];Cf(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),ra(i.settings)&&(t.settings={inTangents:zi(i.settings.inTangents,Float32Array),outTangents:zi(i.settings.outTangents,Float32Array)}),t}const bi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Pc(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Pc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Pc(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class zf{constructor(e,t,n){const s=this;let r=!1,a=0,l=0,o;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){l++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,l),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Hf=new zf;class is{constructor(e){this.manager=e!==void 0?e:Hf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}is.DEFAULT_MATERIAL_NAME="__DEFAULT";const _i={};class Gf extends Error{constructor(e,t){super(e),this.response=t}}class ba extends is{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=bi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(_i[e]!==void 0){_i[e].push({onLoad:t,onProgress:n,onError:s});return}_i[e]=[],_i[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),l=this.mimeType,o=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&nt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=_i[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:E,value:_})=>{if(E)p.close();else{v+=_.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let w=0,R=h.length;w<R;w++){const x=h[w];x.onProgress&&x.onProgress(S)}p.enqueue(_),y()}},E=>{p.error(E)})}}});return new Response(m)}else throw new Gf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(o){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,l));case"json":return c.json();default:if(l==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(l),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{bi.add(`file:${e}`,c);const h=_i[e];delete _i[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=_i[e];if(h===void 0)throw this.manager.itemError(e),c;delete _i[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const _s=new WeakMap;class Vf extends is{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=bi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=_s.get(a);u===void 0&&(u=[],_s.set(a,u)),u.push({onLoad:t,onError:s})}return a}const l=_r("img");function o(){h(),t&&t(this);const u=_s.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}_s.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),bi.remove(`image:${e}`);const d=_s.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}_s.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){l.removeEventListener("load",o,!1),l.removeEventListener("error",c,!1)}return l.addEventListener("load",o,!1),l.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),bi.add(`image:${e}`,l),r.manager.itemStart(e),l.src=e,l}}class Wf extends is{constructor(e){super(e)}load(e,t,n,s){const r=new sn,a=new Vf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Aa extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Xf extends Aa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const io=new mt,Lc=new H,Dc=new H;class Nl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=Vt,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ea,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Lc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lc),Dc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(io,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,o=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===gr||e.reversedDepth?t.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+c,0,0,.5,.5,0,0,0,1),t.multiply(io)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yr=new H,Kr=new mn,ei=new H;class pu extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yr,Kr,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,Kr,ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Yr,Kr,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,Kr,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new H,Ic=new st,Nc=new st;class fn extends pu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,Ic,Nc),t.subVectors(Nc,Ic)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(or*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const o=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/o,t-=a.offsetY*n/c,s*=a.width/o,n*=a.height/c}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class qf extends Nl{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ls*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Yf extends Aa{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new qf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Kf extends Nl{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0}}class Zf extends Aa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Kf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class br extends pu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,l=s+t,o=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,l-=h*this.view.offsetY,o=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $f extends Nl{constructor(){super(new br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mu extends Aa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new $f}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Wi{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class jf extends Ot{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const so=new WeakMap;class Jf extends is{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&nt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&nt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=bi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{so.has(a)===!0?(s&&s(so.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader,l.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const o=fetch(e,l).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return bi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),so.set(o,c),bi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});bi.add(`image-bitmap:${e}`,o),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const xs=-90,vs=1;class Qf extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(xs,vs,e,t);s.layers=this.layers,this.add(s);const r=new fn(xs,vs,e,t);r.layers=this.layers,this.add(r);const a=new fn(xs,vs,e,t);a.layers=this.layers,this.add(a);const l=new fn(xs,vs,e,t);l.layers=this.layers,this.add(l);const o=new fn(xs,vs,e,t);o.layers=this.layers,this.add(o);const c=new fn(xs,vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,l,o]=t;for(const c of t)this.remove(c);if(e===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,l,o,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ep extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ul="\\[\\]\\.:\\/",tp=new RegExp("["+Ul+"]","g"),Fl="[^"+Ul+"]",np="[^"+Ul.replace("\\.","")+"]",ip=/((?:WC+[\/:])*)/.source.replace("WC",Fl),sp=/(WCOD+)?/.source.replace("WCOD",np),rp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fl),ap=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fl),op=new RegExp("^"+ip+sp+rp+ap+"$"),lp=["material","materials","bones","map"];class cp{constructor(e,t,n){const s=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Pt{constructor(e,t,n){this.path=t,this.parsedPath=n||Pt.parseTrackName(t),this.node=Pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Pt.Composite(e,t,n):new Pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tp,"")}static parseTrackName(e){const t=op.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);lp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const l=r[a];if(l.name===t||l.uuid===t)return l;const o=n(l.children);if(o)return o}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;dt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}o=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(o=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Pt.Composite=cp;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class hp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,nt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Uc{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class gu{static{gu.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}}class up extends Yi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Fc(i,e,t,n){const s=dp(n);switch(t){case qh:return i*e;case ri:return i*e/s.components*s.byteLength;case Sl:return i*e/s.components*s.byteLength;case qi:return i*e*2/s.components*s.byteLength;case yl:return i*e*2/s.components*s.byteLength;case Yh:return i*e*3/s.components*s.byteLength;case Bt:return i*e*4/s.components*s.byteLength;case bl:return i*e*4/s.components*s.byteLength;case ta:case na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lo:case Io:return Math.max(i,16)*Math.max(e,8)/4;case Po:case Do:return Math.max(i,8)*Math.max(e,8)/2;case No:case Uo:case Oo:case Bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fo:case fa:case ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Go:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case qo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Yo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case $o:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case jo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Jo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Qo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case el:case tl:case nl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case il:case sl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case pa:case rl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dp(i){switch(i){case Vt:case Gh:return{byteLength:1,components:1};case dr:case Vh:case yn:return{byteLength:2,components:1};case vl:case Ml:return{byteLength:2,components:4};case hi:case xl:case on:return{byteLength:4,components:1};case Wh:case Xh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gl}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gl);function _u(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function fp(i){const e=new WeakMap;function t(l,o){const c=l.array,h=l.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(o,d),i.bufferData(o,c,h),l.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:u}}function n(l,o,c){const h=o.array,u=o.updateRanges;if(i.bindBuffer(c,l),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const o=e.get(l);o&&(i.deleteBuffer(o.buffer),e.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=e.get(l);if(c===void 0)e.set(l,t(l,o));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,l,o),c.version=l.version}}return{get:s,remove:r,update:a}}var pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mp=`#ifdef USE_ALPHAHASH
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
#endif`,gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mp=`#ifdef USE_AOMAP
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
#endif`,Sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ep=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ap=`#ifdef USE_IRIDESCENCE
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
#endif`,Rp=`#ifdef USE_BUMPMAP
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
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Op=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Bp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kp=`vec3 transformedNormal = objectNormal;
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
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tm=`#ifdef USE_GRADIENTMAP
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
}`,nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rm=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,am=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,um=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,dm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fm=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,_m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ym=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wm=`#if defined( USE_POINTS_UV )
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
#endif`,Tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Am=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Im=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Om=`#ifdef USE_NORMALMAP
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
#endif`,Bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Qm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,e0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t0=`#ifdef USE_SKINNING
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
#endif`,n0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i0=`#ifdef USE_SKINNING
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
#endif`,s0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o0=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,l0=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,c0=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const p0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m0=`uniform sampler2D t2D;
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
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,S0=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,y0=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,b0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R0=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,C0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,P0=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,L0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,D0=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,I0=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,N0=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,U0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,F0=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,O0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,B0=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,k0=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,z0=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,H0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,G0=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,V0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,W0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,X0=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,q0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Y0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,ft={alphahash_fragment:pp,alphahash_pars_fragment:mp,alphamap_fragment:gp,alphamap_pars_fragment:_p,alphatest_fragment:xp,alphatest_pars_fragment:vp,aomap_fragment:Mp,aomap_pars_fragment:Sp,batching_pars_vertex:yp,batching_vertex:bp,begin_vertex:wp,beginnormal_vertex:Tp,bsdfs:Ep,iridescence_fragment:Ap,bumpmap_pars_fragment:Rp,clipping_planes_fragment:Cp,clipping_planes_pars_fragment:Pp,clipping_planes_pars_vertex:Lp,clipping_planes_vertex:Dp,color_fragment:Ip,color_pars_fragment:Np,color_pars_vertex:Up,color_vertex:Fp,common:Op,cube_uv_reflection_fragment:Bp,defaultnormal_vertex:kp,displacementmap_pars_vertex:zp,displacementmap_vertex:Hp,emissivemap_fragment:Gp,emissivemap_pars_fragment:Vp,colorspace_fragment:Wp,colorspace_pars_fragment:Xp,envmap_fragment:qp,envmap_common_pars_fragment:Yp,envmap_pars_fragment:Kp,envmap_pars_vertex:Zp,envmap_physical_pars_fragment:am,envmap_vertex:$p,fog_vertex:jp,fog_pars_vertex:Jp,fog_fragment:Qp,fog_pars_fragment:em,gradientmap_pars_fragment:tm,lightmap_pars_fragment:nm,lights_lambert_fragment:im,lights_lambert_pars_fragment:sm,lights_pars_begin:rm,lights_toon_fragment:om,lights_toon_pars_fragment:lm,lights_phong_fragment:cm,lights_phong_pars_fragment:hm,lights_physical_fragment:um,lights_physical_pars_fragment:dm,lights_fragment_begin:fm,lights_fragment_maps:pm,lights_fragment_end:mm,lightprobes_pars_fragment:gm,logdepthbuf_fragment:_m,logdepthbuf_pars_fragment:xm,logdepthbuf_pars_vertex:vm,logdepthbuf_vertex:Mm,map_fragment:Sm,map_pars_fragment:ym,map_particle_fragment:bm,map_particle_pars_fragment:wm,metalnessmap_fragment:Tm,metalnessmap_pars_fragment:Em,morphinstance_vertex:Am,morphcolor_vertex:Rm,morphnormal_vertex:Cm,morphtarget_pars_vertex:Pm,morphtarget_vertex:Lm,normal_fragment_begin:Dm,normal_fragment_maps:Im,normal_pars_fragment:Nm,normal_pars_vertex:Um,normal_vertex:Fm,normalmap_pars_fragment:Om,clearcoat_normal_fragment_begin:Bm,clearcoat_normal_fragment_maps:km,clearcoat_pars_fragment:zm,iridescence_pars_fragment:Hm,opaque_fragment:Gm,packing:Vm,premultiplied_alpha_fragment:Wm,project_vertex:Xm,dithering_fragment:qm,dithering_pars_fragment:Ym,roughnessmap_fragment:Km,roughnessmap_pars_fragment:Zm,shadowmap_pars_fragment:$m,shadowmap_pars_vertex:jm,shadowmap_vertex:Jm,shadowmask_pars_fragment:Qm,skinbase_vertex:e0,skinning_pars_vertex:t0,skinning_vertex:n0,skinnormal_vertex:i0,specularmap_fragment:s0,specularmap_pars_fragment:r0,tonemapping_fragment:a0,tonemapping_pars_fragment:o0,transmission_fragment:l0,transmission_pars_fragment:c0,uv_pars_fragment:h0,uv_pars_vertex:u0,uv_vertex:d0,worldpos_vertex:f0,background_vert:p0,background_frag:m0,backgroundCube_vert:g0,backgroundCube_frag:_0,cube_vert:x0,cube_frag:v0,depth_vert:M0,depth_frag:S0,distance_vert:y0,distance_frag:b0,equirect_vert:w0,equirect_frag:T0,linedashed_vert:E0,linedashed_frag:A0,meshbasic_vert:R0,meshbasic_frag:C0,meshlambert_vert:P0,meshlambert_frag:L0,meshmatcap_vert:D0,meshmatcap_frag:I0,meshnormal_vert:N0,meshnormal_frag:U0,meshphong_vert:F0,meshphong_frag:O0,meshphysical_vert:B0,meshphysical_frag:k0,meshtoon_vert:z0,meshtoon_frag:H0,points_vert:G0,points_frag:V0,shadow_vert:W0,shadow_frag:X0,sprite_vert:q0,sprite_frag:Y0},je={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},kn={basic:{uniforms:dn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:dn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:dn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:dn([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:dn([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new $e(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:dn([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:dn([je.points,je.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:dn([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:dn([je.common,je.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:dn([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:dn([je.sprite,je.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:dn([je.common,je.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:dn([je.lights,je.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};kn.physical={uniforms:dn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Zr={r:0,b:0,g:0},K0=new mt,xu=new pt;xu.set(-1,0,0,0,1,0,0,0,1);function Z0(i,e,t,n,s,r){const a=new $e(0);let l=s===!0?0:1,o,c,h=null,u=0,d=null;function f(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){const _=y.backgroundBlurriness>0;E=e.get(E,_)}return E}function g(y){let E=!1;const _=f(y);_===null?m(a,l):_&&_.isColor&&(m(_,1),E=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(y,E){const _=f(E);_&&(_.isCubeTexture||_.mapping===wa)?(c===void 0&&(c=new qt(new Ri(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Ds(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(K0.makeRotationFromEuler(E.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(xu),c.material.toneMapped=xt.getTransfer(_.colorSpace)!==Rt,(h!==_||u!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(o===void 0&&(o=new qt(new yr(2,2),new Mn({name:"BackgroundMaterial",uniforms:Ds(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=_,o.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,o.material.toneMapped=xt.getTransfer(_.colorSpace)!==Rt,_.matrixAutoUpdate===!0&&_.updateMatrix(),o.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==i.toneMapping)&&(o.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),o.layers.enableAll(),y.unshift(o,o.geometry,o.material,0,0,null))}function m(y,E){y.getRGB(Zr,hu(i)),t.buffers.color.setClear(Zr.r,Zr.g,Zr.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,E=1){a.set(y),l=E,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:g,addToRenderList:v,dispose:p}}function $0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function l(k,z,K,N,Z){let ie=!1;const te=u(k,N,K,z);r!==te&&(r=te,c(r.object)),ie=f(k,N,K,Z),ie&&g(k,N,K,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,_(k,z,K,N),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function o(){return i.createVertexArray()}function c(k){return i.bindVertexArray(k)}function h(k){return i.deleteVertexArray(k)}function u(k,z,K,N){const Z=N.wireframe===!0;let ie=n[z.id];ie===void 0&&(ie={},n[z.id]=ie);const te=k.isInstancedMesh===!0?k.id:0;let J=ie[te];J===void 0&&(J={},ie[te]=J);let Y=J[K.id];Y===void 0&&(Y={},J[K.id]=Y);let ue=Y[Z];return ue===void 0&&(ue=d(o()),Y[Z]=ue),ue}function d(k){const z=[],K=[],N=[];for(let Z=0;Z<t;Z++)z[Z]=0,K[Z]=0,N[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:K,attributeDivisors:N,object:k,attributes:{},index:null}}function f(k,z,K,N){const Z=r.attributes,ie=z.attributes;let te=0;const J=K.getAttributes();for(const Y in J)if(J[Y].location>=0){const me=Z[Y];let Be=ie[Y];if(Be===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(Be=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(Be=k.instanceColor)),me===void 0||me.attribute!==Be||Be&&me.data!==Be.data)return!0;te++}return r.attributesNum!==te||r.index!==N}function g(k,z,K,N){const Z={},ie=z.attributes;let te=0;const J=K.getAttributes();for(const Y in J)if(J[Y].location>=0){let me=ie[Y];me===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(me=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(me=k.instanceColor));const Be={};Be.attribute=me,me&&me.data&&(Be.data=me.data),Z[Y]=Be,te++}r.attributes=Z,r.attributesNum=te,r.index=N}function v(){const k=r.newAttributes;for(let z=0,K=k.length;z<K;z++)k[z]=0}function m(k){p(k,0)}function p(k,z){const K=r.newAttributes,N=r.enabledAttributes,Z=r.attributeDivisors;K[k]=1,N[k]===0&&(i.enableVertexAttribArray(k),N[k]=1),Z[k]!==z&&(i.vertexAttribDivisor(k,z),Z[k]=z)}function y(){const k=r.newAttributes,z=r.enabledAttributes;for(let K=0,N=z.length;K<N;K++)z[K]!==k[K]&&(i.disableVertexAttribArray(K),z[K]=0)}function E(k,z,K,N,Z,ie,te){te===!0?i.vertexAttribIPointer(k,z,K,Z,ie):i.vertexAttribPointer(k,z,K,N,Z,ie)}function _(k,z,K,N){v();const Z=N.attributes,ie=K.getAttributes(),te=z.defaultAttributeValues;for(const J in ie){const Y=ie[J];if(Y.location>=0){let ue=Z[J];if(ue===void 0&&(J==="instanceMatrix"&&k.instanceMatrix&&(ue=k.instanceMatrix),J==="instanceColor"&&k.instanceColor&&(ue=k.instanceColor)),ue!==void 0){const me=ue.normalized,Be=ue.itemSize,se=e.get(ue);if(se===void 0)continue;const He=se.buffer,oe=se.type,F=se.bytesPerElement,I=oe===i.INT||oe===i.UNSIGNED_INT||ue.gpuType===xl;if(ue.isInterleavedBufferAttribute){const D=ue.data,Q=D.stride,O=ue.offset;if(D.isInstancedInterleavedBuffer){for(let re=0;re<Y.locationSize;re++)p(Y.location+re,D.meshPerAttribute);k.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let re=0;re<Y.locationSize;re++)m(Y.location+re);i.bindBuffer(i.ARRAY_BUFFER,He);for(let re=0;re<Y.locationSize;re++)E(Y.location+re,Be/Y.locationSize,oe,me,Q*F,(O+Be/Y.locationSize*re)*F,I)}else{if(ue.isInstancedBufferAttribute){for(let D=0;D<Y.locationSize;D++)p(Y.location+D,ue.meshPerAttribute);k.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let D=0;D<Y.locationSize;D++)m(Y.location+D);i.bindBuffer(i.ARRAY_BUFFER,He);for(let D=0;D<Y.locationSize;D++)E(Y.location+D,Be/Y.locationSize,oe,me,Be*F,Be/Y.locationSize*D*F,I)}}else if(te!==void 0){const me=te[J];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(Y.location,me);break;case 3:i.vertexAttrib3fv(Y.location,me);break;case 4:i.vertexAttrib4fv(Y.location,me);break;default:i.vertexAttrib1fv(Y.location,me)}}}}y()}function S(){T();for(const k in n){const z=n[k];for(const K in z){const N=z[K];for(const Z in N){const ie=N[Z];for(const te in ie)h(ie[te].object),delete ie[te];delete N[Z]}}delete n[k]}}function w(k){if(n[k.id]===void 0)return;const z=n[k.id];for(const K in z){const N=z[K];for(const Z in N){const ie=N[Z];for(const te in ie)h(ie[te].object),delete ie[te];delete N[Z]}}delete n[k.id]}function R(k){for(const z in n){const K=n[z];for(const N in K){const Z=K[N];if(Z[k.id]===void 0)continue;const ie=Z[k.id];for(const te in ie)h(ie[te].object),delete ie[te];delete Z[k.id]}}}function x(k){for(const z in n){const K=n[z],N=k.isInstancedMesh===!0?k.id:0,Z=K[N];if(Z!==void 0){for(const ie in Z){const te=Z[ie];for(const J in te)h(te[J].object),delete te[J];delete Z[ie]}delete K[N],Object.keys(K).length===0&&delete n[z]}}}function T(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:T,resetDefaultState:P,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function j0(i,e,t){let n;function s(o){n=o}function r(o,c){i.drawArrays(n,o,c),t.update(c,n,1)}function a(o,c,h){h!==0&&(i.drawArraysInstanced(n,o,c,h),t.update(c,n,h))}function l(o,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,o,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function J0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Bt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(R){const x=R===yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Vt&&R!==on&&!x&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function o(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=o(c);h!==c&&(nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:_,maxSamples:S,samples:w}}function Q0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Si,l=new pt,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,E=y*4;let _=p.clippingState||null;o.value=_,_=h(g,d,E,f);for(let S=0;S!==E;++S)_[S]=t[S];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){o.value!==t&&(o.value=t,o.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=o.value,g!==!0||m===null){const p=f+v*4,y=d.matrixWorldInverse;l.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,_=f;E!==v;++E,_+=4)a.copy(u[E]).applyMatrix4(y,l),a.normal.toArray(m,_),m[_+3]=a.constant}o.value=m,o.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const ws=4,eg=6,tg=20,ng=256,Ks=new br,Oc=new $e;let ro=null,ao=0,oo=0,lo=!1;const ig=new H,Ji=new H;class ll{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:l=ig}=r;ro=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,s,o,l),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ro,ao,oo),this._renderer.xr.enabled=lo,e.scissorTest=!1,Ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ns||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ro=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:yn,format:Bt,colorSpace:Xt,depthBuffer:!1},s=Bc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bc(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=sg(r)),this._blurMaterial=ag(r,e,t),this._ggxMaterial=rg(r,e,t)}return s}_compileMaterial(e){const t=new qt(new Ot,e);this._renderer.compile(t,Ks)}_sceneToCubeUV(e,t,n,s,r){const o=new fn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Oc),u.toneMapping=ci,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qt(new Ri,new ts({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(Oc),p=!0);for(let E=0;E<6;E++){const _=E%3;_===0?(o.up.set(0,c[E],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x+h[E],r.y,r.z)):_===1?(o.up.set(0,0,c[E]),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y+h[E],r.z)):(o.up.set(0,c[E],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y,r.z+h[E]));const S=this._cubeSize;Ms(s,_*S,E>2?S:0,S,S),u.setRenderTarget(s),p&&u.render(v,o),u.render(e,o)}u.toneMapping=f,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ns||e.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const l=r.uniforms;l.envMap.value=e;const o=this._cubeSize;Ms(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Ks)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;const o=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-ws?n-g+ws:0),p=4*(this._cubeSize-v);o.envMap.value=e.texture,o.roughness.value=f,o.mipInt.value=g-t,Ms(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(l,Ks),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=g-n,Ms(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(l,Ks)}_blur(e,t,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){const a=this._renderer,l=this._blurMaterial,o=this._lodMeshes[s];o.material=l;const c=l.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],u=3*h*(s>this._lodMax-ws?s-this._lodMax+ws:0),d=4*(this._cubeSize-h);Ms(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(o,Ks)}}function sg(i){const e=[],t=[];let n=i;const s=i-ws+1+eg;for(let r=0;r<s;r++){const a=Math.pow(2,n);e.push(a);const l=1/(a-2),o=-l,c=1+l,h=[o,o,c,o,c,c,o,o,c,c,o,c],u=6,d=6,f=3,g=new Float32Array(f*d*u),v=new Float32Array(f*d*u);for(let p=0;p<u;p++){const y=p%3*2/3-1,E=p>2?0:-1,_=[y,E,0,y+2/3,E,0,y+2/3,E+1,0,y,E,0,y+2/3,E+1,0,y,E+1,0];g.set(_,f*d*p);for(let S=0;S<d;S++){const w=h[S*2]*2-1,R=h[S*2+1]*2-1;p===0?Ji.set(1,R,w):p===1?Ji.set(-w,1,-R):p===2?Ji.set(-w,R,1):p===3?Ji.set(-1,R,-w):p===4?Ji.set(-w,-1,R):Ji.set(w,R,-1),Ji.toArray(v,(p*d+S)*f)}}const m=new Ot;m.setAttribute("position",new Ut(g,f)),m.setAttribute("outputDirection",new Ut(v,f)),t.push(new qt(m,null)),n>ws&&n--}return{lodMeshes:t,sizeLods:e}}function Bc(i,e,t){const n=new Nn(i,e,t);return n.texture.mapping=wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ms(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function rg(i,e,t){return new Mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ng,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ra(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function ag(i,e,t){return new Mn({name:"SphericalGaussianBlur",defines:{SAMPLES:tg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ra(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function kc(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ra(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function zc(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Ra(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class vu extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new lu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ri(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:wi});r.uniforms.tEquirect.value=t;const a=new qt(s,r),l=t.minFilter;return t.minFilter===zn&&(t.minFilter=Et),new Qf(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function og(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Pa||f===La)if(e.has(d)){const g=e.get(d).texture;return l(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const v=new vu(g.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",c),l(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,g=f===Pa||f===La,v=f===ns||f===Ps;if(g||v){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new ll(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const y=d.image;return g&&y&&y.height>0||v&&y&&o(y)?(n===null&&(n=new ll(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function l(d,f){return f===Pa?d.mapping=ns:f===La&&(d.mapping=Ps),d}function o(d){let f=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&f++;return f===g}function c(d){const f=d.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function lg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Es("WebGLRenderer: "+n+" extension not supported."),s}}}function cg(i,e,t,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function l(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function o(u){const d=u.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(g===void 0)return;if(f!==null){const y=f.array;v=f.version;for(let E=0,_=y.length;E<_;E+=3){const S=y[E+0],w=y[E+1],R=y[E+2];d.push(S,w,w,R,R,S)}}else{const y=g.array;v=g.version;for(let E=0,_=y.length/3-1;E<_;E+=3){const S=E+0,w=E+1,R=E+2;d.push(S,w,w,R,R,S)}}const m=new(g.count>=65535?nu:tu)(d,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:l,update:o,getWireframeAttribute:h}}function hg(i,e,t){let n;function s(u){n=u}let r,a;function l(u){r=u.type,a=u.bytesPerElement}function o(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];t.update(v,n,1)}this.setMode=s,this.setIndex=l,this.render=o,this.renderInstances=c,this.renderMultiDraw=h}function ug(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:dt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function dg(i,e,t){const n=new WeakMap,s=new ut;function r(a,l,o){const c=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(l);if(d===void 0||d.count!==u){let T=function(){R.dispose(),n.delete(l),l.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();const f=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],y=l.morphAttributes.color||[];let E=0;f===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let _=l.attributes.position.count*E,S=1;_>e.maxTextureSize&&(S=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const w=new Float32Array(_*S*4*u),R=new jh(w,_,S,u);R.type=on,R.needsUpdate=!0;const x=E*4;for(let P=0;P<u;P++){const k=m[P],z=p[P],K=y[P],N=_*S*4*P;for(let Z=0;Z<k.count;Z++){const ie=Z*x;f===!0&&(s.fromBufferAttribute(k,Z),w[N+ie+0]=s.x,w[N+ie+1]=s.y,w[N+ie+2]=s.z,w[N+ie+3]=0),g===!0&&(s.fromBufferAttribute(z,Z),w[N+ie+4]=s.x,w[N+ie+5]=s.y,w[N+ie+6]=s.z,w[N+ie+7]=0),v===!0&&(s.fromBufferAttribute(K,Z),w[N+ie+8]=s.x,w[N+ie+9]=s.y,w[N+ie+10]=s.z,w[N+ie+11]=K.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new st(_,S)},n.set(l,d),l.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=l.morphTargetsRelative?1:1-f;o.getUniforms().setValue(i,"morphTargetBaseInfluence",g),o.getUniforms().setValue(i,"morphTargetInfluences",c)}o.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function fg(i,e,t,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function l(){r=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:l}}const pg={[Ih]:"LINEAR_TONE_MAPPING",[Nh]:"REINHARD_TONE_MAPPING",[Uh]:"CINEON_TONE_MAPPING",[Fh]:"ACES_FILMIC_TONE_MAPPING",[Bh]:"AGX_TONE_MAPPING",[kh]:"NEUTRAL_TONE_MAPPING",[Oh]:"CUSTOM_TONE_MAPPING"};function mg(i,e,t,n,s,r){const a=new Nn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,o=null;const c=new Ot;c.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new It([0,2,0,0,2,0],2));const h=new Tf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new qt(c,h),d=new br(-1,1,1,-1,0,1);let f=null,g=null,v=!1,m,p=null,y=[],E=!1;this.setSize=function(_,S){a.setSize(_,S),l!==null&&l.setSize(_,S),o!==null&&o.setSize(_,S);for(let w=0;w<y.length;w++){const R=y[w];R.setSize&&R.setSize(_,S)}},this.setEffects=function(_){y=_,E=y.length>0&&y[0].isRenderPass===!0;const S=a.width,w=a.height;y.length>0&&l===null&&(l=new Nn(S,w,{type:yn,depthBuffer:!1,stencilBuffer:!1}),o=new Nn(S,w,{type:yn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<y.length;R++){const x=y[R];x.setSize&&x.setSize(S,w)}},this.begin=function(_,S){if(v||_.toneMapping===ci&&y.length===0)return!1;if(p=S,S!==null){const w=S.width,R=S.height;(a.width!==w||a.height!==R)&&this.setSize(w,R)}return E===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=ci,!0},this.hasRenderPass=function(){return E},this.end=function(_,S){_.toneMapping=m,v=!0;let w=a,R=l;for(let x=0;x<y.length;x++){const T=y[x];T.enabled!==!1&&(T.render(_,R,w,S),T.needsSwap!==!1&&(w=R,R=R===l?o:l))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,h.defines={},xt.getTransfer(f)===Rt&&(h.defines.SRGB_TRANSFER="");const x=pg[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(p),_.render(u,d),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),o!==null&&o.dispose(),c.dispose(),h.dispose()}}const Mu=new sn,cl=new xr(1,1),Su=new jh,yu=new Kd,bu=new lu,Hc=[],Gc=[],Vc=new Float32Array(16),Wc=new Float32Array(9),Xc=new Float32Array(4);function ks(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Hc[s];if(r===void 0&&(r=new Float32Array(s),Hc[s]=r),e!==0){n.toArray(r,0);for(let a=1,l=0;a!==e;++a)l+=t,i[a].toArray(r,l)}return r}function Qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function en(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ca(i,e){let t=Gc[e];t===void 0&&(t=new Int32Array(e),Gc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function gg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2fv(this.addr,e),en(t,e)}}function xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;i.uniform3fv(this.addr,e),en(t,e)}}function vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4fv(this.addr,e),en(t,e)}}function Mg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Xc.set(n),i.uniformMatrix2fv(this.addr,!1,Xc),en(t,n)}}function Sg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Wc.set(n),i.uniformMatrix3fv(this.addr,!1,Wc),en(t,n)}}function yg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Vc.set(n),i.uniformMatrix4fv(this.addr,!1,Vc),en(t,n)}}function bg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2iv(this.addr,e),en(t,e)}}function Tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3iv(this.addr,e),en(t,e)}}function Eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4iv(this.addr,e),en(t,e)}}function Ag(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2uiv(this.addr,e),en(t,e)}}function Cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3uiv(this.addr,e),en(t,e)}}function Pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4uiv(this.addr,e),en(t,e)}}function Lg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(cl.compareFunction=t.isReversedDepthBuffer()?Tl:wl,r=cl):r=Mu,t.setTexture2D(e||r,s)}function Dg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||yu,s)}function Ig(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||bu,s)}function Ng(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Su,s)}function Ug(i){switch(i){case 5126:return gg;case 35664:return _g;case 35665:return xg;case 35666:return vg;case 35674:return Mg;case 35675:return Sg;case 35676:return yg;case 5124:case 35670:return bg;case 35667:case 35671:return wg;case 35668:case 35672:return Tg;case 35669:case 35673:return Eg;case 5125:return Ag;case 36294:return Rg;case 36295:return Cg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Ng}}function Fg(i,e){i.uniform1fv(this.addr,e)}function Og(i,e){const t=ks(e,this.size,2);i.uniform2fv(this.addr,t)}function Bg(i,e){const t=ks(e,this.size,3);i.uniform3fv(this.addr,t)}function kg(i,e){const t=ks(e,this.size,4);i.uniform4fv(this.addr,t)}function zg(i,e){const t=ks(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Hg(i,e){const t=ks(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gg(i,e){const t=ks(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vg(i,e){i.uniform1iv(this.addr,e)}function Wg(i,e){i.uniform2iv(this.addr,e)}function Xg(i,e){i.uniform3iv(this.addr,e)}function qg(i,e){i.uniform4iv(this.addr,e)}function Yg(i,e){i.uniform1uiv(this.addr,e)}function Kg(i,e){i.uniform2uiv(this.addr,e)}function Zg(i,e){i.uniform3uiv(this.addr,e)}function $g(i,e){i.uniform4uiv(this.addr,e)}function jg(i,e,t){const n=this.cache,s=e.length,r=Ca(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=cl:a=Mu;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||a,r[l])}function Jg(i,e,t){const n=this.cache,s=e.length,r=Ca(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||yu,r[a])}function Qg(i,e,t){const n=this.cache,s=e.length,r=Ca(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||bu,r[a])}function e_(i,e,t){const n=this.cache,s=e.length,r=Ca(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Su,r[a])}function t_(i){switch(i){case 5126:return Fg;case 35664:return Og;case 35665:return Bg;case 35666:return kg;case 35674:return zg;case 35675:return Hg;case 35676:return Gg;case 5124:case 35670:return Vg;case 35667:case 35671:return Wg;case 35668:case 35672:return Xg;case 35669:case 35673:return qg;case 5125:return Yg;case 36294:return Kg;case 36295:return Zg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return Qg;case 36289:case 36303:case 36311:case 36292:return e_}}class n_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ug(t.type)}}class i_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=t_(t.type)}}class s_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const l=s[r];l.setValue(e,t[l.id],n)}}}const co=/(\w+)(\])?(\[|\.)?/g;function qc(i,e){i.seq.push(e),i.map[e.id]=e}function r_(i,e,t){const n=i.name,s=n.length;for(co.lastIndex=0;;){const r=co.exec(n),a=co.lastIndex;let l=r[1];const o=r[2]==="]",c=r[3];if(o&&(l=l|0),c===void 0||c==="["&&a+2===s){qc(t,c===void 0?new n_(l,i,e):new i_(l,i,e));break}else{let u=t.map[l];u===void 0&&(u=new s_(l),qc(t,u)),t=u}}}class aa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const l=e.getActiveUniform(t,a),o=e.getUniformLocation(t,l.name);r_(l,o,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const l=t[r],o=n[l.id];o.needsUpdate!==!1&&l.setValue(e,o.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Yc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const a_=37297;let o_=0;function l_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}const Kc=new pt;function c_(i){xt._getMatrix(Kc,xt.workingColorSpace,i);const e=`mat3( ${Kc.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(i)){case ga:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+l_(i.getShaderSource(e),l)}else return r}function h_(i,e){const t=c_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const u_={[Ih]:"Linear",[Nh]:"Reinhard",[Uh]:"Cineon",[Fh]:"ACESFilmic",[Bh]:"AgX",[kh]:"Neutral",[Oh]:"Custom"};function d_(i,e){const t=u_[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $r=new H;function f_(){xt.getLuminanceCoefficients($r);const i=$r.x.toFixed(4),e=$r.y.toFixed(4),t=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function m_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function g_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:l}}return t}function tr(i){return i!==""}function $c(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const __=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(i){return i.replace(__,v_)}const x_=new Map;function v_(i,e){let t=ft[e];if(t===void 0){const n=x_.get(e);if(n!==void 0)t=ft[n],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return hl(t)}const M_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jc(i){return i.replace(M_,S_)}function S_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const y_={[Qr]:"SHADOWMAP_TYPE_PCF",[Qs]:"SHADOWMAP_TYPE_VSM"};function b_(i){return y_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const w_={[ns]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE",[wa]:"ENVMAP_TYPE_CUBE_UV"};function T_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":w_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const E_={[Ps]:"ENVMAP_MODE_REFRACTION"};function A_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":E_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const R_={[_l]:"ENVMAP_BLENDING_MULTIPLY",[ld]:"ENVMAP_BLENDING_MIX",[cd]:"ENVMAP_BLENDING_ADD"};function C_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":R_[i.combine]||"ENVMAP_BLENDING_NONE"}function P_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function L_(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,l=t.fragmentShader;const o=b_(t),c=T_(t),h=A_(t),u=C_(t),d=P_(t),f=p_(t),g=m_(r),v=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(tr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(tr).join(`
`),p.length>0&&(p+=`
`)):(m=[Qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),p=[Qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?ft.tonemapping_pars_fragment:"",t.toneMapping!==ci?d_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,h_("linearToOutputTexel",t.outputColorSpace),f_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),a=hl(a),a=$c(a,t),a=jc(a,t),l=hl(l),l=$c(l,t),l=jc(l,t),a=Jc(a),l=Jc(l),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=y+m+a,_=y+p+l,S=Yc(s,s.VERTEX_SHADER,E),w=Yc(s,s.FRAGMENT_SHADER,_);s.attachShader(v,S),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(k){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(v)||"",K=s.getShaderInfoLog(S)||"",N=s.getShaderInfoLog(w)||"",Z=z.trim(),ie=K.trim(),te=N.trim();let J=!0,Y=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,S,w);else{const ue=Zc(s,S,"vertex"),me=Zc(s,w,"fragment");dt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+Z+`
`+ue+`
`+me)}else Z!==""?nt("WebGLProgram: Program Info Log:",Z):(ie===""||te==="")&&(Y=!1);Y&&(k.diagnostics={runnable:J,programLog:Z,vertexShader:{log:ie,prefix:m},fragmentShader:{log:te,prefix:p}})}s.deleteShader(S),s.deleteShader(w),x=new aa(s,v),T=g_(s,v)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(v,a_)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=o_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=w,this}let D_=0;class I_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new N_(e),t.set(e,n)),n}}class N_{constructor(e){this.id=D_++,this.code=e,this.usedTimes=0}}function U_(i){return i===qi||i===fa||i===pa}function F_(i,e,t,n,s,r){const a=new Jh,l=new I_,o=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return o.add(x),x===0?"uv":`uv${x}`}function v(x,T,P,k,z,K){const N=k.fog,Z=z.geometry,ie=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?k.environment:null,te=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,J=e.get(x.envMap||ie,te),Y=J&&J.mapping===wa?J.image.height:null,ue=f[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&nt("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const me=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Be=me!==void 0?me.length:0;let se=0;Z.morphAttributes.position!==void 0&&(se=1),Z.morphAttributes.normal!==void 0&&(se=2),Z.morphAttributes.color!==void 0&&(se=3);let He,oe,F,I;if(ue){const lt=kn[ue];He=lt.vertexShader,oe=lt.fragmentShader}else{He=x.vertexShader,oe=x.fragmentShader;const lt=l.getVertexShaderStage(x),ct=l.getFragmentShaderStage(x);l.update(x,lt,ct),F=lt.id,I=ct.id}const D=i.getRenderTarget(),Q=i.state.buffers.depth.getReversed(),O=z.isInstancedMesh===!0,re=z.isBatchedMesh===!0,ve=!!x.map,Ie=!!x.matcap,Se=!!J,Ne=!!x.aoMap,Ce=!!x.lightMap,L=!!x.bumpMap&&x.wireframe===!1,ne=!!x.normalMap,_e=!!x.displacementMap,xe=!!x.emissiveMap,ee=!!x.metalnessMap,de=!!x.roughnessMap,C=x.anisotropy>0,Ae=x.clearcoat>0,Ge=x.dispersion>0,A=x.retroreflectivity>0,M=x.iridescence>0,B=x.sheen>0,q=x.transmission>0,W=C&&!!x.anisotropyMap,pe=Ae&&!!x.clearcoatMap,le=Ae&&!!x.clearcoatNormalMap,ae=Ae&&!!x.clearcoatRoughnessMap,fe=M&&!!x.iridescenceMap,we=M&&!!x.iridescenceThicknessMap,ye=B&&!!x.sheenColorMap,De=B&&!!x.sheenRoughnessMap,be=!!x.specularMap,Ve=!!x.specularColorMap,We=!!x.specularIntensityMap,Je=q&&!!x.transmissionMap,V=q&&!!x.thicknessMap,Oe=!!x.gradientMap,he=!!x.alphaMap,Ee=x.alphaTest>0,Te=!!x.alphaHash,Me=!!x.extensions;let Ze=ci;x.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ze=i.toneMapping);const qe={shaderID:ue,shaderType:x.type,shaderName:x.name,vertexShader:He,fragmentShader:oe,defines:x.defines,customVertexShaderID:F,customFragmentShaderID:I,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:re,batchingColor:re&&z._colorsTexture!==null,instancing:O,instancingColor:O&&z.instanceColor!==null,instancingMorph:O&&z.morphTexture!==null,outputColorSpace:D===null?i.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ve,matcap:Ie,envMap:Se,envMapMode:Se&&J.mapping,envMapCubeUVHeight:Y,aoMap:Ne,lightMap:Ce,bumpMap:L,normalMap:ne,displacementMap:_e,emissiveMap:xe,normalMapObjectSpace:ne&&x.normalMapType===pd,normalMapTangentSpace:ne&&x.normalMapType===ma,packedNormalMap:ne&&x.normalMapType===ma&&U_(x.normalMap.format),metalnessMap:ee,roughnessMap:de,anisotropy:C,anisotropyMap:W,clearcoat:Ae,clearcoatMap:pe,clearcoatNormalMap:le,clearcoatRoughnessMap:ae,dispersion:Ge,retroreflection:A,iridescence:M,iridescenceMap:fe,iridescenceThicknessMap:we,sheen:B,sheenColorMap:ye,sheenRoughnessMap:De,specularMap:be,specularColorMap:Ve,specularIntensityMap:We,transmission:q,transmissionMap:Je,thicknessMap:V,gradientMap:Oe,opaque:x.transparent===!1&&x.blending===ar&&x.alphaToCoverage===!1,alphaMap:he,alphaTest:Ee,alphaHash:Te,combine:x.combine,mapUv:ve&&g(x.map.channel),aoMapUv:Ne&&g(x.aoMap.channel),lightMapUv:Ce&&g(x.lightMap.channel),bumpMapUv:L&&g(x.bumpMap.channel),normalMapUv:ne&&g(x.normalMap.channel),displacementMapUv:_e&&g(x.displacementMap.channel),emissiveMapUv:xe&&g(x.emissiveMap.channel),metalnessMapUv:ee&&g(x.metalnessMap.channel),roughnessMapUv:de&&g(x.roughnessMap.channel),anisotropyMapUv:W&&g(x.anisotropyMap.channel),clearcoatMapUv:pe&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:we&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:De&&g(x.sheenRoughnessMap.channel),specularMapUv:be&&g(x.specularMap.channel),specularColorMapUv:Ve&&g(x.specularColorMap.channel),specularIntensityMapUv:We&&g(x.specularIntensityMap.channel),transmissionMapUv:Je&&g(x.transmissionMap.channel),thicknessMapUv:V&&g(x.thicknessMap.channel),alphaMapUv:he&&g(x.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ne||C),vertexNormals:!!Z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(ve||he),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||Z.attributes.normal===void 0&&ne===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Q,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:se,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,decodeVideoTexture:ve&&x.map.isVideoTexture===!0&&xt.getTransfer(x.map.colorSpace)===Rt,decodeVideoTextureEmissive:xe&&x.emissiveMap.isVideoTexture===!0&&xt.getTransfer(x.emissiveMap.colorSpace)===Rt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ln,flipSided:x.side===Sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Me&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&x.extensions.multiDraw===!0||re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qe.vertexUv1s=o.has(1),qe.vertexUv2s=o.has(2),qe.vertexUv3s=o.has(3),o.clear(),qe}function m(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(T,x),y(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function y(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function E(x){const T=f[x.type];let P;if(T){const k=kn[T];P=yf.clone(k.uniforms)}else P=x.uniforms;return P}function _(x,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new L_(i,T,x,s),c.push(P),h.set(T,P)),P}function S(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){l.remove(x)}function R(){l.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:E,acquireProgram:_,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:R}}function O_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,o){i.get(a)[l]=o}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function B_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function eh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function th(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function l(d,f,g,v,m,p){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:p},i[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=g,y.materialVariant=a(d),y.groupOrder=v,y.renderOrder=d.renderOrder,y.z=m,y.group=p),e++,y}function o(d,f,g,v,m,p,y){y.reversedDepth===!0&&(m=-m);const E=l(d,f,g,v,m,p);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):t.push(E)}function c(d,f,g,v,m,p){const y=l(d,f,g,v,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function h(d,f){t.length>1&&t.sort(d||B_),n.length>1&&n.sort(f||eh),s.length>1&&s.sort(f||eh)}function u(){for(let d=e,f=i.length;d<f;d++){const g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:h}}function k_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new th,i.set(n,[a])):s>=r.length?(a=new th,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function z_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new $e};break;case"SpotLight":t={position:new H,direction:new H,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function H_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let G_=0;function V_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function W_(i){const e=new z_,t=H_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const s=new H,r=new mt,a=new mt;function l(c){let h=0,u=0,d=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,y=0,E=0,_=0,S=0,w=0,R=0,x=0,T=0,P=0;c.sort(V_);for(let z=0,K=c.length;z<K;z++){const N=c[z],Z=N.color,ie=N.intensity,te=N.distance;let J=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===qi?J=N.shadow.map.texture:J=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=Z.r*ie,u+=Z.g*ie,d+=Z.b*ie;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(N.sh.coefficients[Y],ie);P++}else if(N.isSunLight){const Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ue=N.shadow,me=t.get(N);me.shadowIntensity=ue.intensity,me.shadowBias=ue.bias,me.shadowNormalBias=ue.normalBias,me.shadowRadius=ue.radius,me.shadowMapSize.copy(ue.mapSize).multiply(ue.getFrameExtents()),n.sunShadow[g]=me,n.sunShadowMap[g]=J;const Be=ue.getViewportCount();for(let se=0;se<Be;se++)n.sunShadowMatrix[v+se]=ue.getMatrix(se),n.sunShadowCascade[v+se]=ue._cascadeData[se];v+=Be,g++}n.sun[f]=Y,f++}else if(N.isDirectionalLight){const Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ue=N.shadow,me=t.get(N);me.shadowIntensity=ue.intensity,me.shadowBias=ue.bias,me.shadowNormalBias=ue.normalBias,me.shadowRadius=ue.radius,me.shadowMapSize=ue.mapSize,n.directionalShadow[m]=me,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=N.shadow.matrix,S++}n.directional[m]=Y,m++}else if(N.isSpotLight){const Y=e.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(Z).multiplyScalar(ie),Y.distance=te,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,n.spot[y]=Y;const ue=N.shadow;if(N.map&&(n.spotLightMap[x]=N.map,x++,ue.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[y]=ue.matrix,N.castShadow){const me=t.get(N);me.shadowIntensity=ue.intensity,me.shadowBias=ue.bias,me.shadowNormalBias=ue.normalBias,me.shadowRadius=ue.radius,me.shadowMapSize=ue.mapSize,n.spotShadow[y]=me,n.spotShadowMap[y]=J,R++}y++}else if(N.isRectAreaLight){const Y=e.get(N);Y.color.copy(Z).multiplyScalar(ie),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),n.rectArea[E]=Y,E++}else if(N.isPointLight){const Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){const ue=N.shadow,me=t.get(N);me.shadowIntensity=ue.intensity,me.shadowBias=ue.bias,me.shadowNormalBias=ue.normalBias,me.shadowRadius=ue.radius,me.shadowMapSize=ue.mapSize,me.shadowCameraNear=ue.camera.near,me.shadowCameraFar=ue.camera.far,n.pointShadow[p]=me,n.pointShadowMap[p]=J,n.pointShadowMatrix[p]=N.shadow.matrix,w++}n.point[p]=Y,p++}else if(N.isHemisphereLight){const Y=e.get(N);Y.skyColor.copy(N.color).multiplyScalar(ie),Y.groundColor.copy(N.groundColor).multiplyScalar(ie),n.hemi[_]=Y,_++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=je.LTC_FLOAT_1,n.rectAreaLTC2=je.LTC_FLOAT_2):(n.rectAreaLTC1=je.LTC_HALF_1,n.rectAreaLTC2=je.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const k=n.hash;(k.sunLength!==f||k.directionalLength!==m||k.pointLength!==p||k.spotLength!==y||k.rectAreaLength!==E||k.hemiLength!==_||k.numSunShadows!==g||k.numDirectionalShadows!==S||k.numPointShadows!==w||k.numSpotShadows!==R||k.numSpotMaps!==x||k.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=E,n.point.length=p,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,k.sunLength=f,k.directionalLength=m,k.pointLength=p,k.spotLength=y,k.rectAreaLength=E,k.hemiLength=_,k.numSunShadows=g,k.numDirectionalShadows=S,k.numPointShadows=w,k.numSpotShadows=R,k.numSpotMaps=x,k.numLightProbes=P,n.version=G_++)}function o(c,h){let u=0,d=0,f=0,g=0,v=0,m=0;const p=h.matrixWorldInverse;for(let y=0,E=c.length;y<E;y++){const _=c[y];if(_.isSunLight){const S=n.sun[u];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(p),u++}else if(_.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(_.isSpotLight){const S=n.spot[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(_.isRectAreaLight){const S=n.rectArea[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){const S=n.hemi[m];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:l,setupView:o,state:n}}function nh(i){const e=new W_(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function l(d){n.push(d)}function o(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:l,pushLightProbeGrid:o}}function X_(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let l;return a===void 0?(l=new nh(i),e.set(s,[l])):r>=a.length?(l=new nh(i),a.push(l)):l=a[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,K_=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Z_=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],ih=new mt,Zs=new H,ho=new H;function $_(i,e,t){let n=new Ea;const s=new st,r=new st,a=new ut,l=new Ef,o=new Af,c={},h=t.maxTextureSize,u={[Xi]:Sn,[Sn]:Xi,[Ln]:Ln},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:q_,fragmentShader:Y_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ot;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new qt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qr;let p=this.type;this.render=function(w,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Ph&&(nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qr);const T=i.getRenderTarget(),P=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),z=i.state;z.setBlending(wi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const K=p!==this.type;K&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(Z=>Z.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,Z=w.length;N<Z;N++){const ie=w[N],te=ie.shadow;if(te===void 0){nt("WebGLShadowMap:",ie,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;s.copy(te.mapSize);const J=te.getFrameExtents();s.multiply(J),r.copy(te.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,te.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,te.mapSize.y=r.y));const Y=i.state.buffers.depth.getReversed();if(te.camera._reversedDepth=Y,te.map===null||K===!0){if(te.map!==null&&(te.map.depthTexture!==null&&(te.map.depthTexture.dispose(),te.map.depthTexture=null),te.map.dispose()),this.type===Qs){if(ie.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}te.map=new Nn(s.x,s.y,{format:qi,type:yn,minFilter:Et,magFilter:Et,generateMipmaps:!1}),te.map.texture.name=ie.name+".shadowMap",te.map.depthTexture=new xr(s.x,s.y,on),te.map.depthTexture.name=ie.name+".shadowMapDepth",te.map.depthTexture.format=Ai,te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=jt,te.map.depthTexture.magFilter=jt}else ie.isPointLight?(te.map=new vu(s.x),te.map.depthTexture=new Mf(s.x,hi)):(te.map=new Nn(s.x,s.y),te.map.depthTexture=new xr(s.x,s.y,hi)),te.map.depthTexture.name=ie.name+".shadowMap",te.map.depthTexture.format=Ai,this.type===Qr?(te.map.depthTexture.compareFunction=Y?Tl:wl,te.map.depthTexture.minFilter=Et,te.map.depthTexture.magFilter=Et):(te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=jt,te.map.depthTexture.magFilter=jt);te.camera.updateProjectionMatrix()}te.map.isWebGLCubeRenderTarget!==!0&&(te.map.width!==s.x||te.map.height!==s.y)&&te.map.setSize(s.x,s.y);const ue=te.map.isWebGLCubeRenderTarget?6:te.getViewportCount();ie.isPointLight!==!0&&te.updateMatrices(ie,x);for(let me=0;me<ue;me++){const Be=te.getCamera(me);if(ie.isPointLight){const se=te.camera,He=te.matrix,oe=ie.distance||se.far;oe!==se.far&&(se.far=oe,se.updateProjectionMatrix()),Zs.setFromMatrixPosition(ie.matrixWorld),se.position.copy(Zs),ho.copy(se.position),ho.add(K_[me]),se.up.copy(Z_[me]),se.lookAt(ho),se.updateMatrixWorld(),He.makeTranslation(-Zs.x,-Zs.y,-Zs.z),ih.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),te._frustum.setFromProjectionMatrix(ih,se.coordinateSystem,se.reversedDepth)}if(te.map.isWebGLCubeRenderTarget)i.setRenderTarget(te.map,me),i.clear();else{me===0&&(i.setRenderTarget(te.map),i.clear());const se=te.getViewport(me);a.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),z.viewport(a)}n=te.getFrustum(me),_(R,x,Be,ie,this.type)}te.isPointLightShadow!==!0&&this.type===Qs&&y(te,x),te.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,P,k)};function y(w,R){const x=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Nn(s.x,s.y,{format:qi,type:yn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,x,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,x,f,v,null)}function E(w,R,x,T){let P=null;const k=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(k!==void 0)P=k;else if(P=x.isPointLight===!0?o:l,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const z=P.uuid,K=R.uuid;let N=c[z];N===void 0&&(N={},c[z]=N);let Z=N[K];Z===void 0&&(Z=P.clone(),N[K]=Z,R.addEventListener("dispose",S)),P=Z}if(P.visible=R.visible,P.wireframe=R.wireframe,T===Qs?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:u[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const z=i.properties.get(P);z.light=x}return P}function _(w,R,x,T,P){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Qs)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const K=e.update(w),N=w.material;if(Array.isArray(N)){const Z=K.groups;for(let ie=0,te=Z.length;ie<te;ie++){const J=Z[ie],Y=N[J.materialIndex];if(Y&&Y.visible){const ue=E(w,Y,T,P);w.onBeforeShadow(i,w,R,x,K,ue,J),i.renderBufferDirect(x,null,K,ue,w,J),w.onAfterShadow(i,w,R,x,K,ue,J)}}}else if(N.visible){const Z=E(w,N,T,P);w.onBeforeShadow(i,w,R,x,K,Z,null),i.renderBufferDirect(x,null,K,Z,w,null),w.onAfterShadow(i,w,R,x,K,Z,null)}}const z=w.children;for(let K=0,N=z.length;K<N;K++)_(z[K],R,x,T,P)}function S(w){w.target.removeEventListener("dispose",S);for(const x in c){const T=c[x],P=w.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function j_(i,e){function t(){let V=!1;const Oe=new ut;let he=null;const Ee=new ut(0,0,0,0);return{setMask:function(Te){he!==Te&&!V&&(i.colorMask(Te,Te,Te,Te),he=Te)},setLocked:function(Te){V=Te},setClear:function(Te,Me,Ze,qe,lt){lt===!0&&(Te*=qe,Me*=qe,Ze*=qe),Oe.set(Te,Me,Ze,qe),Ee.equals(Oe)===!1&&(i.clearColor(Te,Me,Ze,qe),Ee.copy(Oe))},reset:function(){V=!1,he=null,Ee.set(-1,0,0,0)}}}function n(){let V=!1,Oe=!1,he=null,Ee=null,Te=null;return{setReversed:function(Me){if(Oe!==Me){const Ze=e.get("EXT_clip_control");Me?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Oe=Me;const qe=Te;Te=null,this.setClear(qe)}},getReversed:function(){return Oe},setTest:function(Me){Me?D(i.DEPTH_TEST):Q(i.DEPTH_TEST)},setMask:function(Me){he!==Me&&!V&&(i.depthMask(Me),he=Me)},setFunc:function(Me){if(Oe&&(Me=Ed[Me]),Ee!==Me){switch(Me){case bo:i.depthFunc(i.NEVER);break;case wo:i.depthFunc(i.ALWAYS);break;case To:i.depthFunc(i.LESS);break;case ur:i.depthFunc(i.LEQUAL);break;case Eo:i.depthFunc(i.EQUAL);break;case Ao:i.depthFunc(i.GEQUAL);break;case Ro:i.depthFunc(i.GREATER);break;case Co:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=Me}},setLocked:function(Me){V=Me},setClear:function(Me){Te!==Me&&(Te=Me,Oe&&(Me=1-Me),i.clearDepth(Me))},reset:function(){V=!1,he=null,Ee=null,Te=null,Oe=!1}}}function s(){let V=!1,Oe=null,he=null,Ee=null,Te=null,Me=null,Ze=null,qe=null,lt=null;return{setTest:function(ct){V||(ct?D(i.STENCIL_TEST):Q(i.STENCIL_TEST))},setMask:function(ct){Oe!==ct&&!V&&(i.stencilMask(ct),Oe=ct)},setFunc:function(ct,yt,Nt){(he!==ct||Ee!==yt||Te!==Nt)&&(i.stencilFunc(ct,yt,Nt),he=ct,Ee=yt,Te=Nt)},setOp:function(ct,yt,Nt){(Me!==ct||Ze!==yt||qe!==Nt)&&(i.stencilOp(ct,yt,Nt),Me=ct,Ze=yt,qe=Nt)},setLocked:function(ct){V=ct},setClear:function(ct){lt!==ct&&(i.clearStencil(ct),lt=ct)},reset:function(){V=!1,Oe=null,he=null,Ee=null,Te=null,Me=null,Ze=null,qe=null,lt=null}}}const r=new t,a=new n,l=new s,o=new WeakMap,c=new WeakMap;let h={},u={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,y=null,E=null,_=null,S=null,w=null,R=null,x=new $e(0,0,0),T=0,P=!1,k=null,z=null,K=null,N=null,Z=null;const ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,J=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Y)[1]),te=J>=1):Y.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),te=J>=2);let ue=null,me={};const Be=i.getParameter(i.SCISSOR_BOX),se=i.getParameter(i.VIEWPORT),He=new ut().fromArray(Be),oe=new ut().fromArray(se);function F(V,Oe,he,Ee){const Te=new Uint8Array(4),Me=i.createTexture();i.bindTexture(V,Me),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<he;Ze++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(Oe,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(Oe+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return Me}const I={};I[i.TEXTURE_2D]=F(i.TEXTURE_2D,i.TEXTURE_2D,1),I[i.TEXTURE_CUBE_MAP]=F(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[i.TEXTURE_2D_ARRAY]=F(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),I[i.TEXTURE_3D]=F(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),D(i.DEPTH_TEST),a.setFunc(ur),L(!1),ne(Gl),D(i.CULL_FACE),Ne(wi);function D(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function Q(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function O(V,Oe){return d[V]!==Oe?(i.bindFramebuffer(V,Oe),d[V]=Oe,V===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Oe),V===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Oe),!0):!1}function re(V,Oe){let he=g,Ee=!1;if(V){he=f.get(Oe),he===void 0&&(he=[],f.set(Oe,he));const Te=V.textures;if(he.length!==Te.length||he[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,Ze=Te.length;Me<Ze;Me++)he[Me]=i.COLOR_ATTACHMENT0+Me;he.length=Te.length,Ee=!0}}else he[0]!==i.BACK&&(he[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(he)}function ve(V){return v!==V?(i.useProgram(V),v=V,!0):!1}const Ie={[ys]:i.FUNC_ADD,[qu]:i.FUNC_SUBTRACT,[Yu]:i.FUNC_REVERSE_SUBTRACT};Ie[Ku]=i.MIN,Ie[Zu]=i.MAX;const Se={[$u]:i.ZERO,[yo]:i.ONE,[ju]:i.SRC_COLOR,[Dh]:i.SRC_ALPHA,[id]:i.SRC_ALPHA_SATURATE,[td]:i.DST_COLOR,[Qu]:i.DST_ALPHA,[Ju]:i.ONE_MINUS_SRC_COLOR,[ua]:i.ONE_MINUS_SRC_ALPHA,[nd]:i.ONE_MINUS_DST_COLOR,[ed]:i.ONE_MINUS_DST_ALPHA,[sd]:i.CONSTANT_COLOR,[rd]:i.ONE_MINUS_CONSTANT_COLOR,[ad]:i.CONSTANT_ALPHA,[od]:i.ONE_MINUS_CONSTANT_ALPHA};function Ne(V,Oe,he,Ee,Te,Me,Ze,qe,lt,ct){if(V===wi){m===!0&&(Q(i.BLEND),m=!1);return}if(m===!1&&(D(i.BLEND),m=!0),V!==Lh){if(V!==p||ct!==P){if((y!==ys||S!==ys)&&(i.blendEquation(i.FUNC_ADD),y=ys,S=ys),ct)switch(V){case ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vl:i.blendFunc(i.ONE,i.ONE);break;case Wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:dt("WebGLState: Invalid blending: ",V);break}else switch(V){case ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wl:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xl:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",V);break}E=null,_=null,w=null,R=null,x.set(0,0,0),T=0,p=V,P=ct}return}Te=Te||Oe,Me=Me||he,Ze=Ze||Ee,(Oe!==y||Te!==S)&&(i.blendEquationSeparate(Ie[Oe],Ie[Te]),y=Oe,S=Te),(he!==E||Ee!==_||Me!==w||Ze!==R)&&(i.blendFuncSeparate(Se[he],Se[Ee],Se[Me],Se[Ze]),E=he,_=Ee,w=Me,R=Ze),(qe.equals(x)===!1||lt!==T)&&(i.blendColor(qe.r,qe.g,qe.b,lt),x.copy(qe),T=lt),p=V,P=!1}function Ce(V,Oe){V.side===Ln?Q(i.CULL_FACE):D(i.CULL_FACE);let he=V.side===Sn;Oe&&(he=!he),L(he),V.blending===ar&&V.transparent===!1?Ne(wi):Ne(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);const Ee=V.stencilWrite;l.setTest(Ee),Ee&&(l.setMask(V.stencilWriteMask),l.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),l.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),xe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?D(i.SAMPLE_ALPHA_TO_COVERAGE):Q(i.SAMPLE_ALPHA_TO_COVERAGE)}function L(V){k!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),k=V)}function ne(V){V!==Wu?(D(i.CULL_FACE),V!==z&&(V===Gl?i.cullFace(i.BACK):V===Xu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Q(i.CULL_FACE),z=V}function _e(V){V!==K&&(te&&i.lineWidth(V),K=V)}function xe(V,Oe,he){V?(D(i.POLYGON_OFFSET_FILL),(N!==Oe||Z!==he)&&(N=Oe,Z=he,a.getReversed()&&(Oe=-Oe),i.polygonOffset(Oe,he))):Q(i.POLYGON_OFFSET_FILL)}function ee(V){V?D(i.SCISSOR_TEST):Q(i.SCISSOR_TEST)}function de(V){V===void 0&&(V=i.TEXTURE0+ie-1),ue!==V&&(i.activeTexture(V),ue=V)}function C(V,Oe,he){he===void 0&&(ue===null?he=i.TEXTURE0+ie-1:he=ue);let Ee=me[he];Ee===void 0&&(Ee={type:void 0,texture:void 0},me[he]=Ee),(Ee.type!==V||Ee.texture!==Oe)&&(ue!==he&&(i.activeTexture(he),ue=he),i.bindTexture(V,Oe||I[V]),Ee.type=V,Ee.texture=Oe)}function Ae(){const V=me[ue];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Ge(){try{i.compressedTexImage2D(...arguments)}catch(V){dt("WebGLState:",V)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(V){dt("WebGLState:",V)}}function M(){try{i.texSubImage2D(...arguments)}catch(V){dt("WebGLState:",V)}}function B(){try{i.texSubImage3D(...arguments)}catch(V){dt("WebGLState:",V)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(V){dt("WebGLState:",V)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(V){dt("WebGLState:",V)}}function pe(){try{i.texStorage2D(...arguments)}catch(V){dt("WebGLState:",V)}}function le(){try{i.texStorage3D(...arguments)}catch(V){dt("WebGLState:",V)}}function ae(){try{i.texImage2D(...arguments)}catch(V){dt("WebGLState:",V)}}function fe(){try{i.texImage3D(...arguments)}catch(V){dt("WebGLState:",V)}}function we(V){return u[V]!==void 0?u[V]:i.getParameter(V)}function ye(V,Oe){u[V]!==Oe&&(i.pixelStorei(V,Oe),u[V]=Oe)}function De(V){He.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),He.copy(V))}function be(V){oe.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),oe.copy(V))}function Ve(V,Oe){let he=c.get(Oe);he===void 0&&(he=new WeakMap,c.set(Oe,he));let Ee=he.get(V);Ee===void 0&&(Ee=i.getUniformBlockIndex(Oe,V.name),he.set(V,Ee))}function We(V,Oe){const Ee=c.get(Oe).get(V);o.get(Oe)!==Ee&&(i.uniformBlockBinding(Oe,Ee,V.__bindingPointIndex),o.set(Oe,Ee))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ue=null,me={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,y=null,E=null,_=null,S=null,w=null,R=null,x=new $e(0,0,0),T=0,P=!1,k=null,z=null,K=null,N=null,Z=null,He.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:D,disable:Q,bindFramebuffer:O,drawBuffers:re,useProgram:ve,setBlending:Ne,setMaterial:Ce,setFlipSided:L,setCullFace:ne,setLineWidth:_e,setPolygonOffset:xe,setScissorTest:ee,activeTexture:de,bindTexture:C,unbindTexture:Ae,compressedTexImage2D:Ge,compressedTexImage3D:A,texImage2D:ae,texImage3D:fe,pixelStorei:ye,getParameter:we,updateUBOMapping:Ve,uniformBlockBinding:We,texStorage2D:pe,texStorage3D:le,texSubImage2D:M,texSubImage3D:B,compressedTexSubImage2D:q,compressedTexSubImage3D:W,scissor:De,viewport:be,reset:Je}}function J_(i,e,t,n,s,r,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap,u=new Set;let d;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,M){return g?new OffscreenCanvas(A,M):_r("canvas")}function m(A,M,B){let q=1;const W=Ge(A);if((W.width>B||W.height>B)&&(q=B/Math.max(W.width,W.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const pe=Math.floor(q*W.width),le=Math.floor(q*W.height);d===void 0&&(d=v(pe,le));const ae=M?v(pe,le):d;return ae.width=pe,ae.height=le,ae.getContext("2d").drawImage(A,0,0,pe,le),nt("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+pe+"x"+le+")."),ae}else return"data"in A&&nt("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),A;return A}function p(A){return A.generateMipmaps}function y(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(A,M,B,q,W,pe=!1){if(A!==null){if(i[A]!==void 0)return i[A];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let le;q&&(le=e.get("EXT_texture_norm16"),le||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=M;if(M===i.RED&&(B===i.FLOAT&&(ae=i.R32F),B===i.HALF_FLOAT&&(ae=i.R16F),B===i.UNSIGNED_BYTE&&(ae=i.R8),B===i.UNSIGNED_SHORT&&le&&(ae=le.R16_EXT),B===i.SHORT&&le&&(ae=le.R16_SNORM_EXT)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(ae=i.R8UI),B===i.UNSIGNED_SHORT&&(ae=i.R16UI),B===i.UNSIGNED_INT&&(ae=i.R32UI),B===i.BYTE&&(ae=i.R8I),B===i.SHORT&&(ae=i.R16I),B===i.INT&&(ae=i.R32I)),M===i.RG&&(B===i.FLOAT&&(ae=i.RG32F),B===i.HALF_FLOAT&&(ae=i.RG16F),B===i.UNSIGNED_BYTE&&(ae=i.RG8),B===i.UNSIGNED_SHORT&&le&&(ae=le.RG16_EXT),B===i.SHORT&&le&&(ae=le.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(ae=i.RG8UI),B===i.UNSIGNED_SHORT&&(ae=i.RG16UI),B===i.UNSIGNED_INT&&(ae=i.RG32UI),B===i.BYTE&&(ae=i.RG8I),B===i.SHORT&&(ae=i.RG16I),B===i.INT&&(ae=i.RG32I)),M===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(ae=i.RGB8UI),B===i.UNSIGNED_SHORT&&(ae=i.RGB16UI),B===i.UNSIGNED_INT&&(ae=i.RGB32UI),B===i.BYTE&&(ae=i.RGB8I),B===i.SHORT&&(ae=i.RGB16I),B===i.INT&&(ae=i.RGB32I)),M===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(ae=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(ae=i.RGBA16UI),B===i.UNSIGNED_INT&&(ae=i.RGBA32UI),B===i.BYTE&&(ae=i.RGBA8I),B===i.SHORT&&(ae=i.RGBA16I),B===i.INT&&(ae=i.RGBA32I)),M===i.RGB&&(B===i.UNSIGNED_SHORT&&le&&(ae=le.RGB16_EXT),B===i.SHORT&&le&&(ae=le.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(ae=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(ae=i.R11F_G11F_B10F)),M===i.RGBA){const fe=pe?ga:xt.getTransfer(W);B===i.FLOAT&&(ae=i.RGBA32F),B===i.HALF_FLOAT&&(ae=i.RGBA16F),B===i.UNSIGNED_BYTE&&(ae=fe===Rt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&le&&(ae=le.RGBA16_EXT),B===i.SHORT&&le&&(ae=le.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function S(A,M){let B;return A?M===null||M===hi||M===fr?B=i.DEPTH24_STENCIL8:M===on?B=i.DEPTH32F_STENCIL8:M===dr&&(B=i.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===hi||M===fr?B=i.DEPTH_COMPONENT24:M===on?B=i.DEPTH_COMPONENT32F:M===dr&&(B=i.DEPTH_COMPONENT16),B}function w(A,M){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==jt&&A.minFilter!==Et?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function R(A){const M=A.target;M.removeEventListener("dispose",R),T(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&u.delete(M)}function x(A){const M=A.target;M.removeEventListener("dispose",x),k(M)}function T(A){const M=n.get(A);if(M.__webglInit===void 0)return;const B=A.source,q=f.get(B);if(q){const W=q[M.__cacheKey];W.usedTimes--,W.usedTimes===0&&P(A),Object.keys(q).length===0&&f.delete(B)}n.remove(A)}function P(A){const M=n.get(A);i.deleteTexture(M.__webglTexture);const B=A.source,q=f.get(B);delete q[M.__cacheKey],a.memory.textures--}function k(A){const M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let W=0;W<M.__webglFramebuffer[q].length;W++)i.deleteFramebuffer(M.__webglFramebuffer[q][W]);else i.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)i.deleteFramebuffer(M.__webglFramebuffer[q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=A.textures;for(let q=0,W=B.length;q<W;q++){const pe=n.get(B[q]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(B[q])}n.remove(A)}let z=0;function K(){z=0}function N(){return z}function Z(A){z=A}function ie(){const A=z;return A>=s.maxTextures&&nt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,A}function te(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function J(A,M){const B=n.get(A);if(A.isVideoTexture&&C(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const q=A.image;if(q===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(B,A,M);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function Y(A,M){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Q(B,A,M);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function ue(A,M){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Q(B,A,M);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function me(A,M){const B=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){O(B,A,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}const Be={[In]:i.REPEAT,[pn]:i.CLAMP_TO_EDGE,[da]:i.MIRRORED_REPEAT},se={[jt]:i.NEAREST,[Hh]:i.NEAREST_MIPMAP_NEAREST,[er]:i.NEAREST_MIPMAP_LINEAR,[Et]:i.LINEAR,[ea]:i.LINEAR_MIPMAP_NEAREST,[zn]:i.LINEAR_MIPMAP_LINEAR},He={[gd]:i.NEVER,[Sd]:i.ALWAYS,[_d]:i.LESS,[wl]:i.LEQUAL,[xd]:i.EQUAL,[Tl]:i.GEQUAL,[vd]:i.GREATER,[Md]:i.NOTEQUAL};function oe(A,M){if(M.type===on&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Et||M.magFilter===ea||M.magFilter===er||M.magFilter===zn||M.minFilter===Et||M.minFilter===ea||M.minFilter===er||M.minFilter===zn)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Be[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Be[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Be[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,se[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,se[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,He[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===jt||M.minFilter!==er&&M.minFilter!==zn||M.type===on&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function F(A,M){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",R));const q=M.source;let W=f.get(q);W===void 0&&(W={},f.set(q,W));const pe=te(M);if(pe!==A.__cacheKey){W[pe]===void 0&&(W[pe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),W[pe].usedTimes++;const le=W[A.__cacheKey];le!==void 0&&(W[A.__cacheKey].usedTimes--,le.usedTimes===0&&P(M)),A.__cacheKey=pe,A.__webglTexture=W[pe].texture}return B}function I(A,M,B){return Math.floor(Math.floor(A/B)/M)}function D(A,M,B,q){const pe=A.updateRanges;if(pe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,B,q,M.data);else{pe.sort((ye,De)=>ye.start-De.start);let le=0;for(let ye=1;ye<pe.length;ye++){const De=pe[le],be=pe[ye],Ve=De.start+De.count,We=I(be.start,M.width,4),Je=I(De.start,M.width,4);be.start<=Ve+1&&We===Je&&I(be.start+be.count-1,M.width,4)===We?De.count=Math.max(De.count,be.start+be.count-De.start):(++le,pe[le]=be)}pe.length=le+1;const ae=t.getParameter(i.UNPACK_ROW_LENGTH),fe=t.getParameter(i.UNPACK_SKIP_PIXELS),we=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let ye=0,De=pe.length;ye<De;ye++){const be=pe[ye],Ve=Math.floor(be.start/4),We=Math.ceil(be.count/4),Je=Ve%M.width,V=Math.floor(Ve/M.width),Oe=We,he=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Je),t.pixelStorei(i.UNPACK_SKIP_ROWS,V),t.texSubImage2D(i.TEXTURE_2D,0,Je,V,Oe,he,B,q,M.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ae),t.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function Q(A,M,B){let q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=i.TEXTURE_3D);const W=F(A,M),pe=M.source;t.bindTexture(q,A.__webglTexture,i.TEXTURE0+B);const le=n.get(pe);if(pe.version!==le.__version||W===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const he=xt.getPrimaries(xt.workingColorSpace),Ee=M.colorSpace===ai?null:xt.getPrimaries(M.colorSpace),Te=M.colorSpace===ai||he===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let fe=m(M.image,!1,s.maxTextureSize);fe=Ae(M,fe);const we=r.convert(M.format,M.colorSpace),ye=r.convert(M.type);let De=_(M.internalFormat,we,ye,M.normalized,M.colorSpace,M.isVideoTexture);oe(q,M);let be;const Ve=M.mipmaps,We=M.isVideoTexture!==!0,Je=le.__version===void 0||W===!0,V=pe.dataReady,Oe=w(M,fe);if(M.isDepthTexture)De=S(M.format===es,M.type),Je&&(We?t.texStorage2D(i.TEXTURE_2D,1,De,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,De,fe.width,fe.height,0,we,ye,null));else if(M.isDataTexture)if(Ve.length>0){We&&Je&&t.texStorage2D(i.TEXTURE_2D,Oe,De,Ve[0].width,Ve[0].height);for(let he=0,Ee=Ve.length;he<Ee;he++)be=Ve[he],We?V&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,be.width,be.height,we,ye,be.data):t.texImage2D(i.TEXTURE_2D,he,De,be.width,be.height,0,we,ye,be.data);M.generateMipmaps=!1}else We?(Je&&t.texStorage2D(i.TEXTURE_2D,Oe,De,fe.width,fe.height),V&&D(M,fe,we,ye)):t.texImage2D(i.TEXTURE_2D,0,De,fe.width,fe.height,0,we,ye,fe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,De,Ve[0].width,Ve[0].height,fe.depth);for(let he=0,Ee=Ve.length;he<Ee;he++)if(be=Ve[he],M.format!==Bt)if(we!==null)if(We){if(V)if(M.layerUpdates.size>0){const Te=Fc(be.width,be.height,M.format,M.type);for(const Me of M.layerUpdates){const Ze=be.data.subarray(Me*Te/be.data.BYTES_PER_ELEMENT,(Me+1)*Te/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,Me,be.width,be.height,1,we,Ze)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,be.width,be.height,fe.depth,we,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,De,be.width,be.height,fe.depth,0,be.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,be.width,be.height,fe.depth,we,ye,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,De,be.width,be.height,fe.depth,0,we,ye,be.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{We&&Je&&t.texStorage2D(i.TEXTURE_2D,Oe,De,Ve[0].width,Ve[0].height);for(let he=0,Ee=Ve.length;he<Ee;he++)be=Ve[he],M.format!==Bt?we!==null?We?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,be.width,be.height,we,be.data):t.compressedTexImage2D(i.TEXTURE_2D,he,De,be.width,be.height,0,be.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?V&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,be.width,be.height,we,ye,be.data):t.texImage2D(i.TEXTURE_2D,he,De,be.width,be.height,0,we,ye,be.data)}else if(M.isDataArrayTexture)if(We){if(Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,De,fe.width,fe.height,fe.depth),V)if(M.layerUpdates.size>0){const he=Fc(fe.width,fe.height,M.format,M.type);for(const Ee of M.layerUpdates){const Te=fe.data.subarray(Ee*he/fe.data.BYTES_PER_ELEMENT,(Ee+1)*he/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ee,fe.width,fe.height,1,we,ye,Te)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,we,ye,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,fe.width,fe.height,fe.depth,0,we,ye,fe.data);else if(M.isData3DTexture)We?(Je&&t.texStorage3D(i.TEXTURE_3D,Oe,De,fe.width,fe.height,fe.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,we,ye,fe.data)):t.texImage3D(i.TEXTURE_3D,0,De,fe.width,fe.height,fe.depth,0,we,ye,fe.data);else if(M.isFramebufferTexture){if(Je)if(We)t.texStorage2D(i.TEXTURE_2D,Oe,De,fe.width,fe.height);else{let he=fe.width,Ee=fe.height;for(let Te=0;Te<Oe;Te++)t.texImage2D(i.TEXTURE_2D,Te,De,he,Ee,0,we,ye,null),he>>=1,Ee>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){const he=i.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),fe.parentNode!==he){he.appendChild(fe),u.add(M),he.onpaint=Ee=>{const Te=Ee.changedElements;for(const Me of u)Te.includes(Me.image)&&(Me.needsUpdate=!0)},he.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,fe);else{const Te=i.RGBA,Me=i.RGBA,Ze=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Te,Me,Ze,fe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ve.length>0){if(We&&Je){const he=Ge(Ve[0]);t.texStorage2D(i.TEXTURE_2D,Oe,De,he.width,he.height)}for(let he=0,Ee=Ve.length;he<Ee;he++)be=Ve[he],We?V&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,we,ye,be):t.texImage2D(i.TEXTURE_2D,he,De,we,ye,be);M.generateMipmaps=!1}else if(We){if(Je){const he=Ge(fe);t.texStorage2D(i.TEXTURE_2D,Oe,De,he.width,he.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,ye,fe)}else t.texImage2D(i.TEXTURE_2D,0,De,we,ye,fe);p(M)&&y(q),le.__version=pe.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function O(A,M,B){if(M.image.length!==6)return;const q=F(A,M),W=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);const pe=n.get(W);if(W.version!==pe.__version||q===!0){t.activeTexture(i.TEXTURE0+B);const le=xt.getPrimaries(xt.workingColorSpace),ae=M.colorSpace===ai?null:xt.getPrimaries(M.colorSpace),fe=M.colorSpace===ai||le===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const we=M.isCompressedTexture||M.image[0].isCompressedTexture,ye=M.image[0]&&M.image[0].isDataTexture,De=[];for(let Me=0;Me<6;Me++)!we&&!ye?De[Me]=m(M.image[Me],!0,s.maxCubemapSize):De[Me]=ye?M.image[Me].image:M.image[Me],De[Me]=Ae(M,De[Me]);const be=De[0],Ve=r.convert(M.format,M.colorSpace),We=r.convert(M.type),Je=_(M.internalFormat,Ve,We,M.normalized,M.colorSpace),V=M.isVideoTexture!==!0,Oe=pe.__version===void 0||q===!0,he=W.dataReady;let Ee=w(M,be);oe(i.TEXTURE_CUBE_MAP,M);let Te;if(we){V&&Oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,Je,be.width,be.height);for(let Me=0;Me<6;Me++){Te=De[Me].mipmaps;for(let Ze=0;Ze<Te.length;Ze++){const qe=Te[Ze];M.format!==Bt?Ve!==null?V?he&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,0,0,qe.width,qe.height,Ve,qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,Je,qe.width,qe.height,0,qe.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,0,0,qe.width,qe.height,Ve,We,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,Je,qe.width,qe.height,0,Ve,We,qe.data)}}}else{if(Te=M.mipmaps,V&&Oe){Te.length>0&&Ee++;const Me=Ge(De[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,Je,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(ye){V?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,De[Me].width,De[Me].height,Ve,We,De[Me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Je,De[Me].width,De[Me].height,0,Ve,We,De[Me].data);for(let Ze=0;Ze<Te.length;Ze++){const lt=Te[Ze].image[Me].image;V?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,0,0,lt.width,lt.height,Ve,We,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,Je,lt.width,lt.height,0,Ve,We,lt.data)}}else{V?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ve,We,De[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Je,Ve,We,De[Me]);for(let Ze=0;Ze<Te.length;Ze++){const qe=Te[Ze];V?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,0,0,Ve,We,qe.image[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,Je,Ve,We,qe.image[Me])}}}p(M)&&y(i.TEXTURE_CUBE_MAP),pe.__version=W.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function re(A,M,B,q,W,pe){const le=r.convert(B.format,B.colorSpace),ae=r.convert(B.type),fe=_(B.internalFormat,le,ae,B.normalized,B.colorSpace),we=n.get(M),ye=n.get(B);if(ye.__renderTarget=M,!we.__hasExternalTextures){const De=Math.max(1,M.width>>pe),be=Math.max(1,M.height>>pe);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,pe,fe,De,be,M.depth,0,le,ae,null):t.texImage2D(W,pe,fe,De,be,0,le,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),de(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,W,ye.__webglTexture,0,ee(M)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,W,ye.__webglTexture,pe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(A,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){const q=M.depthTexture,W=q&&q.isDepthTexture?q.type:null,pe=S(M.stencilBuffer,W),le=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;de(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee(M),pe,M.width,M.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee(M),pe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,pe,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,A)}else{const q=M.textures;for(let W=0;W<q.length;W++){const pe=q[W],le=r.convert(pe.format,pe.colorSpace),ae=r.convert(pe.type),fe=_(pe.internalFormat,le,ae,pe.normalized,pe.colorSpace);de(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee(M),fe,M.width,M.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee(M),fe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,fe,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(A,M,B){const q=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const W=n.get(M.depthTexture);if(W.__renderTarget=M,(!W.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q){if(W.__webglInit===void 0&&(W.__webglInit=!0,M.depthTexture.addEventListener("dispose",R)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),oe(i.TEXTURE_CUBE_MAP,M.depthTexture);const we=r.convert(M.depthTexture.format),ye=r.convert(M.depthTexture.type);let De;M.depthTexture.format===Ai?De=i.DEPTH_COMPONENT24:M.depthTexture.format===es&&(De=i.DEPTH24_STENCIL8);for(let be=0;be<6;be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,De,M.width,M.height,0,we,ye,null)}}else J(M.depthTexture,0);const pe=W.__webglTexture,le=ee(M),ae=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,fe=M.depthTexture.format===es?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ai)de(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ae,pe,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,fe,ae,pe,0);else if(M.depthTexture.format===es)de(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ae,pe,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,fe,ae,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Se(A){const M=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){const W=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",W)};q.addEventListener("dispose",W),M.__depthDisposeCallback=W}M.__boundDepthTexture=q}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let q=0;q<6;q++)Ie(M.__webglFramebuffer[q],A,q);else{const q=A.texture.mipmaps;q&&q.length>0?Ie(M.__webglFramebuffer[0],A,0):Ie(M.__webglFramebuffer,A,0)}else if(B){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=i.createRenderbuffer(),ve(M.__webglDepthbuffer[q],A,!1);else{const W=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=M.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,pe)}}else{const q=A.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ve(M.__webglDepthbuffer,A,!1);else{const W=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,pe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(A,M,B){const q=n.get(A);M!==void 0&&re(q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Se(A)}function Ce(A){const M=A.texture,B=n.get(A),q=n.get(M);A.addEventListener("dispose",x);const W=A.textures,pe=A.isWebGLCubeRenderTarget===!0,le=W.length>1;if(le||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=M.version,a.memory.textures++),pe){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let fe=0;fe<M.mipmaps.length;fe++)B.__webglFramebuffer[ae][fe]=i.createFramebuffer()}else B.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)B.__webglFramebuffer[ae]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(le)for(let ae=0,fe=W.length;ae<fe;ae++){const we=n.get(W[ae]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&de(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ae=0;ae<W.length;ae++){const fe=W[ae];B.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ae]);const we=r.convert(fe.format,fe.colorSpace),ye=r.convert(fe.type),De=_(fe.internalFormat,we,ye,fe.normalized,fe.colorSpace,A.isXRRenderTarget===!0),be=ee(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,De,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,B.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pe){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),oe(i.TEXTURE_CUBE_MAP,M);for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)re(B.__webglFramebuffer[ae][fe],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,fe);else re(B.__webglFramebuffer[ae],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(M)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let ae=0,fe=W.length;ae<fe;ae++){const we=W[ae],ye=n.get(we);let De=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(De=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(De,ye.__webglTexture),oe(De,we),re(B.__webglFramebuffer,A,we,i.COLOR_ATTACHMENT0+ae,De,0),p(we)&&y(De)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ae=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,q.__webglTexture),oe(ae,M),M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)re(B.__webglFramebuffer[fe],A,M,i.COLOR_ATTACHMENT0,ae,fe);else re(B.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,ae,0);p(M)&&y(ae),t.unbindTexture()}A.depthBuffer&&Se(A)}function L(A){const M=A.textures;for(let B=0,q=M.length;B<q;B++){const W=M[B];if(p(W)){const pe=E(A),le=n.get(W).__webglTexture;t.bindTexture(pe,le),y(pe),t.unbindTexture()}}}const ne=[],_e=[];function xe(A){if(A.samples>0){if(de(A)===!1){const M=A.textures,B=A.width,q=A.height;let W=i.COLOR_BUFFER_BIT;const pe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(A),ae=M.length>1;if(ae)for(let we=0;we<M.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const fe=A.texture.mipmaps;fe&&fe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let we=0;we<M.length;we++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[we]);const ye=n.get(M[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ye,0)}i.blitFramebuffer(0,0,B,q,0,0,B,q,W,i.NEAREST),o===!0&&(ne.length=0,_e.length=0,ne.push(i.COLOR_ATTACHMENT0+we),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ne.push(pe),_e.push(pe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_e)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let we=0;we<M.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,le.__webglColorRenderbuffer[we]);const ye=n.get(M[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&o){const M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ee(A){return Math.min(s.maxSamples,A.samples)}function de(A){const M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function C(A){const M=a.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Ae(A,M){const B=A.colorSpace,q=A.format,W=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Xt&&B!==ai&&(xt.getTransfer(B)===Rt?(q!==Bt||W!==Vt)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",B)),M}function Ge(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=ie,this.resetTextureUnits=K,this.getTextureUnits=N,this.setTextureUnits=Z,this.setTexture2D=J,this.setTexture2DArray=Y,this.setTexture3D=ue,this.setTextureCube=me,this.rebindTextures=Ne,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=re,this.useMultisampledRTT=de,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Q_(i,e){function t(n,s=ai){let r;const a=xt.getTransfer(s);if(n===Vt)return i.UNSIGNED_BYTE;if(n===vl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gh)return i.BYTE;if(n===Vh)return i.SHORT;if(n===dr)return i.UNSIGNED_SHORT;if(n===xl)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===yn)return i.HALF_FLOAT;if(n===qh)return i.ALPHA;if(n===Yh)return i.RGB;if(n===Bt)return i.RGBA;if(n===Ai)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===ri)return i.RED;if(n===Sl)return i.RED_INTEGER;if(n===qi)return i.RG;if(n===yl)return i.RG_INTEGER;if(n===bl)return i.RGBA_INTEGER;if(n===ta||n===na||n===ia||n===sa)if(a===Rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Po||n===Lo||n===Do||n===Io)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===fa||n===ko)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===No||n===Uo)return a===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Oo)return r.COMPRESSED_R11_EAC;if(n===Bo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===fa)return r.COMPRESSED_RG11_EAC;if(n===ko)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===zo||n===Ho||n===Go||n===Vo||n===Wo||n===Xo||n===qo||n===Yo||n===Ko||n===Zo||n===$o||n===jo||n===Jo||n===Qo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ho)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Go)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ko)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$o)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===el||n===tl||n===nl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===el)return a===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===il||n===sl||n===pa||n===rl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===il)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const ex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new cu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Mn({vertexShader:ex,fragmentShader:tx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qt(new yr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ix extends Yi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,l="local-floor",o=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new nx,p={},y=t.getContextAttributes();let E=null,_=null;const S=[],w=[],R=new st;let x=null,T=null;const P=new fn;P.viewport=new ut;const k=new fn;k.viewport=new ut;const z=[P,k],K=new ep;let N=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let D=S[I];return D===void 0&&(D=new ka,S[I]=D),D.getTargetRaySpace()},this.getControllerGrip=function(I){let D=S[I];return D===void 0&&(D=new ka,S[I]=D),D.getGripSpace()},this.getHand=function(I){let D=S[I];return D===void 0&&(D=new ka,S[I]=D),D.getHandSpace()};function ie(I){const D=w.indexOf(I.inputSource);if(D===-1)return;const Q=S[D];Q!==void 0&&(Q.update(I.inputSource,I.frame,c||a),Q.dispatchEvent({type:I.type,data:I.inputSource}))}function te(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",J);for(let I=0;I<S.length;I++){const D=w[I];D!==null&&(w[I]=null,S[I].disconnect(D))}N=null,Z=null,m.reset();for(const I in p)delete p[I];if(e.setRenderTarget(E),f=null,d=null,u=null,s=null,_=null,F.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),T!==null){const I=T.camera;I.fov=T.fov,I.zoom=T.zoom,I.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,n.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){l=I,n.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",te),s.addEventListener("inputsourceschange",J),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,O=null,re=null;y.depth&&(re=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=y.stencil?es:Ai,O=y.stencil?fr:hi);const ve={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Nn(d.textureWidth,d.textureHeight,{format:Bt,type:Vt,depthTexture:new xr(d.textureWidth,d.textureHeight,O,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Q={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Nn(f.framebufferWidth,f.framebufferHeight,{format:Bt,type:Vt,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(o),c=null,a=await s.requestReferenceSpace(l),F.setContext(s),F.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(I){for(let D=0;D<I.removed.length;D++){const Q=I.removed[D],O=w.indexOf(Q);O>=0&&(w[O]=null,S[O].disconnect(Q))}for(let D=0;D<I.added.length;D++){const Q=I.added[D];let O=w.indexOf(Q);if(O===-1){for(let ve=0;ve<S.length;ve++)if(ve>=w.length){w.push(Q),O=ve;break}else if(w[ve]===null){w[ve]=Q,O=ve;break}if(O===-1)break}const re=S[O];re&&re.connect(Q)}}const Y=new H,ue=new H;function me(I,D,Q){Y.setFromMatrixPosition(D.matrixWorld),ue.setFromMatrixPosition(Q.matrixWorld);const O=Y.distanceTo(ue),re=D.projectionMatrix.elements,ve=Q.projectionMatrix.elements,Ie=re[14]/(re[10]-1),Se=re[14]/(re[10]+1),Ne=(re[9]+1)/re[5],Ce=(re[9]-1)/re[5],L=(re[8]-1)/re[0],ne=(ve[8]+1)/ve[0],_e=Ie*L,xe=Ie*ne,ee=O/(-L+ne),de=ee*-L;if(D.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(de),I.translateZ(ee),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),re[10]===-1)I.projectionMatrix.copy(D.projectionMatrix),I.projectionMatrixInverse.copy(D.projectionMatrixInverse);else{const C=Ie+ee,Ae=Se+ee,Ge=_e-de,A=xe+(O-de),M=Ne*Se/Ae*C,B=Ce*Se/Ae*C;I.projectionMatrix.makePerspective(Ge,A,M,B,C,Ae),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function Be(I,D){D===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(D.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;let D=I.near,Q=I.far;m.texture!==null&&(m.depthNear>0&&(D=m.depthNear),m.depthFar>0&&(Q=m.depthFar)),K.near=k.near=P.near=D,K.far=k.far=P.far=Q,(N!==K.near||Z!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),N=K.near,Z=K.far),K.layers.mask=I.layers.mask|6,P.layers.mask=K.layers.mask&-5,k.layers.mask=K.layers.mask&-3;const O=I.parent,re=K.cameras;Be(K,O);for(let ve=0;ve<re.length;ve++)Be(re[ve],O);re.length===2?me(K,P,k):K.projectionMatrix.copy(P.projectionMatrix),T===null&&I.isPerspectiveCamera&&(T={camera:I,fov:I.fov,zoom:I.zoom}),se(I,K,O)};function se(I,D,Q){Q===null?I.matrix.copy(D.matrixWorld):(I.matrix.copy(Q.matrixWorld),I.matrix.invert(),I.matrix.multiply(D.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(D.projectionMatrix),I.projectionMatrixInverse.copy(D.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Ls*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(d===null&&f===null))return o},this.setFoveation=function(I){o=I,d!==null&&(d.fixedFoveation=I),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=I)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(K)},this.getCameraTexture=function(I){return p[I]};let He=null;function oe(I,D){if(h=D.getViewerPose(c||a),g=D,h!==null){const Q=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let O=!1;Q.length!==K.cameras.length&&(K.cameras.length=0,O=!0);for(let Se=0;Se<Q.length;Se++){const Ne=Q[Se];let Ce=null;if(f!==null)Ce=f.getViewport(Ne);else{const ne=u.getViewSubImage(d,Ne);Ce=ne.viewport,Se===0&&(e.setRenderTargetTextures(_,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(_))}let L=z[Se];L===void 0&&(L=new fn,L.layers.enable(Se),L.viewport=new ut,z[Se]=L),L.matrix.fromArray(Ne.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Ne.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Se===0&&(K.matrix.copy(L.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),O===!0&&K.cameras.push(L)}const re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const Se=u.getDepthInformation(Q[0]);Se&&Se.isValid&&Se.texture&&m.init(Se,s.renderState)}if(re&&re.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let Se=0;Se<Q.length;Se++){const Ne=Q[Se].camera;if(Ne){let Ce=p[Ne];Ce||(Ce=new cu,p[Ne]=Ce);const L=u.getCameraImage(Ne);Ce.sourceTexture=L}}}}for(let Q=0;Q<S.length;Q++){const O=w[Q],re=S[Q];O!==null&&re!==void 0&&re.update(O,D,c||a)}He&&He(I,D),D.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:D}),g=null}const F=new _u;F.setAnimationLoop(oe),this.setAnimationLoop=function(I){He=I},this.dispose=function(){}}}const sx=new mt,wu=new pt;wu.set(-1,0,0,0,1,0,0,0,1);function rx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,hu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,E,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&l(m,p)):p.isPointsMaterial?o(m,p,y,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),E=y.envMap,_=y.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(sx.makeRotationFromEuler(_)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(wu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function l(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,y,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ax(i,e,t,n){let s={},r={},a=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function o(_,S){const w=S.program;n.uniformBlockBinding(_,w)}function c(_,S){let w=s[_.id];w===void 0&&(m(_),w=h(_),s[_.id]=w,_.addEventListener("dispose",y));const R=S.program;n.updateUBOMapping(_,R);const x=e.render.frame;r[_.id]!==x&&(d(_),r[_.id]=x)}function h(_){const S=u();_.__bindingPointIndex=S;const w=i.createBuffer(),R=_.__size,x=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,R,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function u(){for(let _=0;_<l;_++)if(a.indexOf(_)===-1)return a.push(_),_;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const S=s[_.id],w=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let x=0,T=w.length;x<T;x++){const P=w[x];if(Array.isArray(P))for(let k=0,z=P.length;k<z;k++)f(P[k],x,k,R);else f(P,x,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,S,w,R){if(v(_,S,w,R)===!0){const x=_.__offset,T=_.value;if(Array.isArray(T)){let P=0;for(let k=0;k<T.length;k++){const z=T[k],K=p(z);g(z,_.__data,P),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(P+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,_.__data)}}function g(_,S,w){typeof _=="number"||typeof _=="boolean"?S[0]=_:_.isMatrix3?(S[0]=_.elements[0],S[1]=_.elements[1],S[2]=_.elements[2],S[3]=0,S[4]=_.elements[3],S[5]=_.elements[4],S[6]=_.elements[5],S[7]=0,S[8]=_.elements[6],S[9]=_.elements[7],S[10]=_.elements[8],S[11]=0):ArrayBuffer.isView(_)?S.set(new _.constructor(_.buffer,_.byteOffset,S.length)):_.toArray(S,w)}function v(_,S,w,R){const x=_.value,T=S+"_"+w;if(R[T]===void 0)return typeof x=="number"||typeof x=="boolean"?R[T]=x:ArrayBuffer.isView(x)?R[T]=x.slice():R[T]=x.clone(),!0;{const P=R[T];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return R[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(_){const S=_.uniforms;let w=0;const R=16;for(let T=0,P=S.length;T<P;T++){const k=Array.isArray(S[T])?S[T]:[S[T]];for(let z=0,K=k.length;z<K;z++){const N=k[z],Z=Array.isArray(N.value)?N.value:[N.value];for(let ie=0,te=Z.length;ie<te;ie++){const J=Z[ie],Y=p(J),ue=w%R,me=ue%Y.boundary,Be=ue+me;w+=me,Be!==0&&R-Be<Y.storage&&(w+=R-Be),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=Y.storage}}}const x=w%R;return x>0&&(w+=R-x),_.__size=w,_.__cache={},this}function p(_){const S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",_),S}function y(_){const S=_.target;S.removeEventListener("dispose",y);const w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function E(){for(const _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:o,update:c,dispose:E}}const ox=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ti=null;function lx(){return ti===null&&(ti=new wn(ox,16,16,qi,yn),ti.name="DFG_LUT",ti.minFilter=Et,ti.magFilter=Et,ti.wrapS=pn,ti.wrapT=pn,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}class cx{constructor(e={}){const{canvas:t=wd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Vt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const v=f,m=new Set([bl,yl,Sl]),p=new Set([Vt,hi,dr,fr,vl,Ml]),y=new Uint32Array(4),E=new Int32Array(4),_=new H;let S=null,w=null;const R=[],x=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let k=!1,z=null,K=null,N=null,Z=null;this._outputColorSpace=Gt;let ie=0,te=0,J=null,Y=-1,ue=null;const me=new ut,Be=new ut;let se=null;const He=new $e(0);let oe=0,F=t.width,I=t.height,D=1,Q=null,O=null;const re=new ut(0,0,F,I),ve=new ut(0,0,F,I);let Ie=!1;const Se=new Ea;let Ne=!1,Ce=!1;const L=new mt,ne=new H,_e=new ut,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function de(){return J===null?D:1}let C=n;function Ae(b,U){return t.getContext(b,U)}let Ge,A,M,B,q,W,pe,le,ae,fe,we,ye,De,be,Ve,We,Je,V,Oe,he,Ee,Te,Me;try{const b={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gl}`),t.addEventListener("webglcontextlost",lt,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",yt,!1),C===null){const U="webgl2";if(C=Ae(U,b),C===null)throw Ae(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(b){throw t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",yt,!1),dt("WebGLRenderer: "+b.message),b}function Ze(){Ge=new lg(C),Ge.init(),Ee=new Q_(C,Ge),A=new J0(C,Ge,e,Ee),M=new j_(C,Ge),A.reversedDepthBuffer&&d&&M.buffers.depth.setReversed(!0),K=C.createFramebuffer(),N=C.createFramebuffer(),Z=C.createFramebuffer(),B=new ug(C),q=new O_,W=new J_(C,Ge,M,q,A,Ee,B),pe=new og(P),le=new fp(C),Te=new $0(C,le),ae=new cg(C,le,B,Te),fe=new fg(C,ae,le,Te,B),V=new dg(C,A,W),Ve=new Q0(q),we=new F_(P,pe,Ge,A,Te,Ve),ye=new rx(P,q),De=new k_,be=new X_(Ge),Je=new Z0(P,pe,M,fe,g,o),We=new $_(P,fe,A),Me=new ax(C,B,A,M),Oe=new j0(C,Ge,B),he=new hg(C,Ge,B),B.programs=we.programs,P.capabilities=A,P.extensions=Ge,P.properties=q,P.renderLists=De,P.shadowMap=We,P.state=M,P.info=B}v!==Vt&&(T=new mg(v,t.width,t.height,l,s,r));const qe=new ix(P,C);this.xr=qe,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=Ge.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ge.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(b){b!==void 0&&(D=b,this.setSize(F,I,!1))},this.getSize=function(b){return b.set(F,I)},this.setSize=function(b,U,$=!0){if(qe.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}F=b,I=U,t.width=Math.floor(b*D),t.height=Math.floor(U*D),$===!0&&(t.style.width=b+"px",t.style.height=U+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(F*D,I*D).floor()},this.setDrawingBufferSize=function(b,U,$){F=b,I=U,D=$,t.width=Math.floor(b*$),t.height=Math.floor(U*$),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(v===Vt){dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(me)},this.getViewport=function(b){return b.copy(re)},this.setViewport=function(b,U,$,G){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,U,$,G),M.viewport(me.copy(re).multiplyScalar(D).round())},this.getScissor=function(b){return b.copy(ve)},this.setScissor=function(b,U,$,G){b.isVector4?ve.set(b.x,b.y,b.z,b.w):ve.set(b,U,$,G),M.scissor(Be.copy(ve).multiplyScalar(D).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(b){M.setScissorTest(Ie=b)},this.setOpaqueSort=function(b){Q=b},this.setTransparentSort=function(b){O=b},this.getClearColor=function(b){return b.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,$=!0){let G=0;if(b){let j=!1;if(J!==null){const Le=J.texture.format;j=m.has(Le)}if(j){const Le=J.texture.type,ke=p.has(Le),ze=Je.getClearColor(),Ue=Je.getClearAlpha(),Ye=ze.r,at=ze.g,ot=ze.b;ke?(y[0]=Ye,y[1]=at,y[2]=ot,y[3]=Ue,C.clearBufferuiv(C.COLOR,0,y)):(E[0]=Ye,E[1]=at,E[2]=ot,E[3]=Ue,C.clearBufferiv(C.COLOR,0,E))}else G|=C.COLOR_BUFFER_BIT}U&&(G|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(G|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&C.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),z=b},this.dispose=function(){t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",yt,!1),Je.dispose(),De.dispose(),be.dispose(),q.dispose(),pe.dispose(),fe.dispose(),Te.dispose(),Me.dispose(),we.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",rn),qe.removeEventListener("sessionend",En),An.stop()};function lt(b){b.preventDefault(),_a("WebGLRenderer: Context Lost."),k=!0}function ct(){_a("WebGLRenderer: Context Restored."),k=!1;const b=B.autoReset,U=We.enabled,$=We.autoUpdate,G=We.needsUpdate,j=We.type;Ze(),B.autoReset=b,We.enabled=U,We.autoUpdate=$,We.needsUpdate=G,We.type=j}function yt(b){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Nt(b){const U=b.target;U.removeEventListener("dispose",Nt),tn(U)}function tn(b){Tn(b),q.remove(b)}function Tn(b){const U=q.get(b).programs;U!==void 0&&(U.forEach(function($){we.releaseProgram($)}),b.isShaderMaterial&&we.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,$,G,j,Le){U===null&&(U=xe);const ke=j.isMesh&&j.matrixWorld.determinantAffine()<0,ze=rt(b,U,$,G,j);M.setMaterial(G,ke);let Ue=$.index,Ye=1;if(G.wireframe===!0){if(Ue=ae.getWireframeAttribute($),Ue===void 0)return;Ye=2}const at=$.drawRange,ot=$.attributes.position;let et=at.start*Ye,_t=(at.start+at.count)*Ye;Le!==null&&(et=Math.max(et,Le.start*Ye),_t=Math.min(_t,(Le.start+Le.count)*Ye)),Ue!==null?(et=Math.max(et,0),_t=Math.min(_t,Ue.count)):ot!=null&&(et=Math.max(et,0),_t=Math.min(_t,ot.count));const At=_t-et;if(At<0||At===1/0)return;Te.setup(j,G,ze,$,Ue);let bt,Mt=Oe;if(Ue!==null&&(bt=le.get(Ue),Mt=he,Mt.setIndex(bt)),j.isMesh)G.wireframe===!0?(M.setLineWidth(G.wireframeLinewidth*de()),Mt.setMode(C.LINES)):Mt.setMode(C.TRIANGLES);else if(j.isLine){let zt=G.linewidth;zt===void 0&&(zt=1),M.setLineWidth(zt*de()),j.isLineSegments?Mt.setMode(C.LINES):j.isLineLoop?Mt.setMode(C.LINE_LOOP):Mt.setMode(C.LINE_STRIP)}else j.isPoints?Mt.setMode(C.POINTS):j.isSprite&&Mt.setMode(C.TRIANGLES);if(j.isBatchedMesh)if(Ge.get("WEBGL_multi_draw"))Mt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const zt=j._multiDrawStarts,Qe=j._multiDrawCounts,Kt=j._multiDrawCount,St=Ue?le.get(Ue).bytesPerElement:1,xn=q.get(G).currentProgram.getUniforms();for(let Rn=0;Rn<Kt;Rn++)xn.setValue(C,"_gl_DrawID",Rn),Mt.render(zt[Rn]/St,Qe[Rn])}else if(j.isInstancedMesh)Mt.renderInstances(et,At,j.count);else if($.isInstancedBufferGeometry){const zt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Qe=Math.min($.instanceCount,zt);Mt.renderInstances(et,At,Qe)}else Mt.render(et,At)};function Fn(b,U,$,G){z!==null&&b.isNodeMaterial&&z.setObject(G,b),Ne===!0&&Ve.setState(b,$,!1),b.transparent===!0&&b.side===Ln&&b.forceSinglePass===!1?(b.side=Sn,b.needsUpdate=!0,ge(b,U,G),b.side=Xi,b.needsUpdate=!0,ge(b,U,G),b.side=Ln):ge(b,U,G)}this.compile=function(b,U,$=null){$===null&&($=b),z!==null&&z.renderStart(b,U,$),w=be.get($),w.init(U),x.push(w),$.traverseVisible(function(j){j.isLight&&j.layers.test(U.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),b!==$&&b.traverseVisible(function(j){j.isLight&&j.layers.test(U.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),Ce=this.localClippingEnabled,Ne=Ve.init(this.clippingPlanes,Ce),Ne===!0&&Ve.setGlobalState(this.clippingPlanes,U),z!==null&&We.render(w.state.shadowsArray,$,U);const G=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Le=j.material;if(Le)if(Array.isArray(Le))for(let ke=0;ke<Le.length;ke++){const ze=Le[ke];Fn(ze,$,U,j),G.add(ze)}else Fn(Le,$,U,j),G.add(Le)}),w=x.pop(),z!==null&&z.renderEnd(),G},this.compileAsync=function(b,U,$=null){const G=this.compile(b,U,$);return new Promise(j=>{function Le(){if(G.forEach(function(ke){const Ue=q.get(ke).currentProgram;(Ue===void 0||Ue.isReady())&&G.delete(ke)}),G.size===0){j(b);return}setTimeout(Le,10)}Ge.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let hn=null;function Ci(b){hn&&hn(b)}function rn(){An.stop()}function En(){An.start()}const An=new _u;An.setAnimationLoop(Ci),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(b){hn=b,qe.setAnimationLoop(b),b===null?An.stop():An.start()},qe.addEventListener("sessionstart",rn),qe.addEventListener("sessionend",En),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;z!==null&&z.renderStart(b,U);const $=qe.enabled===!0&&qe.isPresenting===!0,G=T!==null&&(J===null||$)&&T.begin(P,J);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(U),U=qe.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,U,J),w=be.get(b,x.length),w.init(U),w.state.textureUnits=W.getTextureUnits(),x.push(w),L.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Se.setFromProjectionMatrix(L,oi,U.reversedDepth),Ce=this.localClippingEnabled,Ne=Ve.init(this.clippingPlanes,Ce),S=De.get(b,R.length),S.init(),R.push(S),qe.enabled===!0&&qe.isPresenting===!0){const ke=P.xr.getDepthSensingMesh();ke!==null&&Pi(ke,U,-1/0,P.sortObjects)}Pi(b,U,0,P.sortObjects),S.finish(),z!==null&&z.updateLights(w.state.lightsArray),P.sortObjects===!0&&S.sort(Q,O),ee=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,ee&&Je.addToRenderList(S,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ne===!0&&Ve.beginShadows();const j=w.state.shadowsArray;if(We.render(j,b,U),Ne===!0&&Ve.endShadows(),(G&&T.hasRenderPass())===!1){const ke=S.opaque,ze=S.transmissive;if(w.setupLights(),U.isArrayCamera){const Ue=U.cameras;if(ze.length>0)for(let Ye=0,at=Ue.length;Ye<at;Ye++){const ot=Ue[Ye];X(ke,ze,b,ot)}ee&&Je.render(b);for(let Ye=0,at=Ue.length;Ye<at;Ye++){const ot=Ue[Ye];ss(S,b,ot,ot.viewport)}}else ze.length>0&&X(ke,ze,b,U),ee&&Je.render(b),ss(S,b,U)}J!==null&&te===0&&(W.updateMultisampleRenderTarget(J),W.updateRenderTargetMipmap(J)),G&&T.end(P),b.isScene===!0&&b.onAfterRender(P,b,U),Te.resetDefaultState(),Y=-1,ue=null,x.pop(),x.length>0?(w=x[x.length-1],W.setTextureUnits(w.state.textureUnits),Ne===!0&&Ve.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,z!==null&&z.renderEnd()};function Pi(b,U,$,G){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Se)){G&&_e.setFromMatrixPosition(b.matrixWorld).applyMatrix4(L);const ke=fe.update(b),ze=b.material;ze.visible&&S.push(b,ke,ze,$,_e.z,null,U)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Se))){const ke=fe.update(b),ze=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),_e.copy(b.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),_e.copy(ke.boundingSphere.center)),_e.applyMatrix4(b.matrixWorld).applyMatrix4(L)),Array.isArray(ze)){const Ue=ke.groups;for(let Ye=0,at=Ue.length;Ye<at;Ye++){const ot=Ue[Ye],et=ze[ot.materialIndex];et&&et.visible&&S.push(b,ke,et,$,_e.z,ot,U)}}else ze.visible&&S.push(b,ke,ze,$,_e.z,null,U)}}const Le=b.children;for(let ke=0,ze=Le.length;ke<ze;ke++)Pi(Le[ke],U,$,G)}function ss(b,U,$,G){const{opaque:j,transmissive:Le,transparent:ke}=b;w.setupLightsView($),Ne===!0&&Ve.setGlobalState(P.clippingPlanes,$),G&&M.viewport(me.copy(G)),j.length>0&&ce(j,U,$),Le.length>0&&ce(Le,U,$),ke.length>0&&ce(ke,U,$),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function X(b,U,$,G){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){const et=Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new Nn(1,1,{generateMipmaps:!0,type:et?yn:Vt,minFilter:zn,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xt.workingColorSpace})}const Le=w.state.transmissionRenderTarget[G.id],ke=G.viewport||me;Le.setSize(ke.z*P.transmissionResolutionScale,ke.w*P.transmissionResolutionScale);const ze=P.getRenderTarget(),Ue=P.getActiveCubeFace(),Ye=P.getActiveMipmapLevel();P.setRenderTarget(Le),P.getClearColor(He),oe=P.getClearAlpha(),oe<1&&P.setClearColor(16777215,.5),P.clear(),ee&&Je.render($);const at=P.toneMapping;P.toneMapping=ci;const ot=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),Ne===!0&&Ve.setGlobalState(P.clippingPlanes,G),ce(b,$,G),W.updateMultisampleRenderTarget(Le),W.updateRenderTargetMipmap(Le),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let _t=0,At=U.length;_t<At;_t++){const bt=U[_t],{object:Mt,geometry:zt,material:Qe,group:Kt}=bt;if(Qe.side===Ln&&Mt.layers.test(G.layers)){const St=Qe.side;Qe.side=Sn,Qe.needsUpdate=!0,Pe(Mt,$,G,zt,Qe,Kt),Qe.side=St,Qe.needsUpdate=!0,et=!0}}et===!0&&(W.updateMultisampleRenderTarget(Le),W.updateRenderTargetMipmap(Le))}P.setRenderTarget(ze,Ue,Ye),P.setClearColor(He,oe),ot!==void 0&&(G.viewport=ot),P.toneMapping=at}function ce(b,U,$){const G=U.isScene===!0?U.overrideMaterial:null;for(let j=0,Le=b.length;j<Le;j++){const ke=b[j],{object:ze,geometry:Ue,group:Ye}=ke;let at=ke.material;at.allowOverride===!0&&G!==null&&(at=G),ze.layers.test($.layers)&&Pe(ze,U,$,Ue,at,Ye)}}function Pe(b,U,$,G,j,Le){z!==null&&j.isNodeMaterial&&z.setObject(b,j),b.onBeforeRender(P,U,$,G,j,Le),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(P,U,$,G,b,Le),j.transparent===!0&&j.side===Ln&&j.forceSinglePass===!1?(j.side=Sn,j.needsUpdate=!0,P.renderBufferDirect($,U,G,j,b,Le),j.side=Xi,j.needsUpdate=!0,P.renderBufferDirect($,U,G,j,b,Le),j.side=Ln):P.renderBufferDirect($,U,G,j,b,Le),b.onAfterRender(P,U,$,G,j,Le)}function ge(b,U,$){U.isScene!==!0&&(U=xe);const G=q.get(b),j=w.state.lights,Le=w.state.shadowsArray,ke=j.state.version,ze=we.getParameters(b,j.state,Le,U,$,w.state.lightProbeGridArray),Ue=we.getProgramCacheKey(ze);let Ye=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;const at=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=pe.get(b.envMap||G.environment,at),G.envMapRotation=G.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ye===void 0&&(b.addEventListener("dispose",Nt),Ye=new Map,G.programs=Ye);let ot=Ye.get(Ue);if(ot!==void 0){if(G.currentProgram===ot&&G.lightsStateVersion===ke)return Fe(b,ze),ot}else ze.uniforms=we.getUniforms(b),z!==null&&b.isNodeMaterial&&z.build(b,$,ze),b.onBeforeCompile(ze,P),ot=we.acquireProgram(ze,Ue),Ye.set(Ue,ot),G.uniforms=ze.uniforms;const et=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(et.clippingPlanes=Ve.uniform),Fe(b,ze),G.needsLights=ht(b),G.lightsStateVersion=ke,G.needsLights&&(et.ambientLightColor.value=j.state.ambient,et.lightProbe.value=j.state.probe,et.sunLights.value=j.state.sun,et.sunLightShadows.value=j.state.sunShadow,et.directionalLights.value=j.state.directional,et.directionalLightShadows.value=j.state.directionalShadow,et.spotLights.value=j.state.spot,et.spotLightShadows.value=j.state.spotShadow,et.rectAreaLights.value=j.state.rectArea,et.ltc_1.value=j.state.rectAreaLTC1,et.ltc_2.value=j.state.rectAreaLTC2,et.pointLights.value=j.state.point,et.pointLightShadows.value=j.state.pointShadow,et.hemisphereLights.value=j.state.hemi,et.sunShadowMatrix.value=j.state.sunShadowMatrix,et.sunShadowCascade.value=j.state.sunShadowCascade,et.directionalShadowMatrix.value=j.state.directionalShadowMatrix,et.spotLightMatrix.value=j.state.spotLightMatrix,et.spotLightMap.value=j.state.spotLightMap,et.pointShadowMatrix.value=j.state.pointShadowMatrix),G.lightProbeGrid=w.state.lightProbeGridArray.length>0,G.currentProgram=ot,G.uniformsList=null,ot}function Re(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=aa.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Fe(b,U){const $=q.get(b);$.outputColorSpace=U.outputColorSpace,$.batching=U.batching,$.batchingColor=U.batchingColor,$.instancing=U.instancing,$.instancingColor=U.instancingColor,$.instancingMorph=U.instancingMorph,$.skinning=U.skinning,$.morphTargets=U.morphTargets,$.morphNormals=U.morphNormals,$.morphColors=U.morphColors,$.morphTargetsCount=U.morphTargetsCount,$.numClippingPlanes=U.numClippingPlanes,$.numIntersection=U.numClipIntersection,$.vertexAlphas=U.vertexAlphas,$.vertexTangents=U.vertexTangents,$.toneMapping=U.toneMapping}function tt(b,U){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;_.setFromMatrixPosition(U.matrixWorld);for(let $=0,G=b.length;$<G;$++){const j=b[$];if(j.texture!==null&&j.boundingBox.containsPoint(_))return j}return null}function rt(b,U,$,G,j){U.isScene!==!0&&(U=xe),W.resetTextureUnits();const Le=U.fog,ke=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,ze=J===null?P.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:xt.workingColorSpace,Ue=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ye=pe.get(G.envMap||ke,Ue),at=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ot=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),et=!!$.morphAttributes.position,_t=!!$.morphAttributes.normal,At=!!$.morphAttributes.color;let bt=ci;G.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(bt=P.toneMapping);const Mt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,zt=Mt!==void 0?Mt.length:0,Qe=q.get(G),Kt=w.state.lights;if(Ne===!0&&(Ce===!0||b!==ue)){const Ft=b===ue&&G.id===Y;Ve.setState(G,b,Ft)}let St=!1;G.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Kt.state.version||Qe.outputColorSpace!==ze||j.isBatchedMesh&&Qe.batching===!1||!j.isBatchedMesh&&Qe.batching===!0||j.isBatchedMesh&&Qe.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Qe.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Qe.instancing===!1||!j.isInstancedMesh&&Qe.instancing===!0||j.isSkinnedMesh&&Qe.skinning===!1||!j.isSkinnedMesh&&Qe.skinning===!0||j.isInstancedMesh&&Qe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Qe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Qe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Qe.instancingMorph===!1&&j.morphTexture!==null||Qe.envMap!==Ye||G.fog===!0&&Qe.fog!==Le||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ve.numPlanes||Qe.numIntersection!==Ve.numIntersection)||Qe.vertexAlphas!==at||Qe.vertexTangents!==ot||Qe.morphTargets!==et||Qe.morphNormals!==_t||Qe.morphColors!==At||Qe.toneMapping!==bt||Qe.morphTargetsCount!==zt||!!Qe.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(St=!0):(St=!0,Qe.__version=G.version);let xn=Qe.currentProgram;St===!0&&(xn=ge(G,U,j),z&&G.isNodeMaterial&&z.onUpdateProgram(G,xn,Qe));let Rn=!1,Qn=!1,Li=!1;const Tt=xn.getUniforms(),Wt=Qe.uniforms;if(M.useProgram(xn.program)&&(Rn=!0,Qn=!0,Li=!0),G.id!==Y&&(Y=G.id,Qn=!0),Qe.needsLights){const Ft=tt(w.state.lightProbeGridArray,j);Qe.lightProbeGrid!==Ft&&(Qe.lightProbeGrid=Ft,Qn=!0)}if(Rn||ue!==b){M.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Tt.setValue(C,"projectionMatrix",b.projectionMatrix),Tt.setValue(C,"viewMatrix",b.matrixWorldInverse);const Ii=Tt.map.cameraPosition;Ii!==void 0&&Ii.setValue(C,ne.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&Tt.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Tt.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),ue!==b&&(ue=b,Qn=!0,Li=!0)}if(Qe.needsLights&&(Kt.state.sunShadowMap.length>0&&Tt.setValue(C,"sunShadowMap",Kt.state.sunShadowMap,W),Kt.state.directionalShadowMap.length>0&&Tt.setValue(C,"directionalShadowMap",Kt.state.directionalShadowMap,W),Kt.state.spotShadowMap.length>0&&Tt.setValue(C,"spotShadowMap",Kt.state.spotShadowMap,W),Kt.state.pointShadowMap.length>0&&Tt.setValue(C,"pointShadowMap",Kt.state.pointShadowMap,W)),j.isSkinnedMesh){Tt.setOptional(C,j,"bindMatrix"),Tt.setOptional(C,j,"bindMatrixInverse");const Ft=j.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),Tt.setValue(C,"boneTexture",Ft.boneTexture,W))}j.isBatchedMesh&&(Tt.setOptional(C,j,"batchingTexture"),Tt.setValue(C,"batchingTexture",j._matricesTexture,W),Tt.setOptional(C,j,"batchingIdTexture"),Tt.setValue(C,"batchingIdTexture",j._indirectTexture,W),Tt.setOptional(C,j,"batchingColorTexture"),j._colorsTexture!==null&&Tt.setValue(C,"batchingColorTexture",j._colorsTexture,W));const Di=$.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&V.update(j,$,xn),(Qn||Qe.receiveShadow!==j.receiveShadow)&&(Qe.receiveShadow=j.receiveShadow,Tt.setValue(C,"receiveShadow",j.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Wt.envMapIntensity.value=U.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=lx()),Qn){if(Tt.setValue(C,"toneMappingExposure",P.toneMappingExposure),Qe.needsLights&&Xe(Wt,Li),Le&&G.fog===!0&&ye.refreshFogUniforms(Wt,Le),ye.refreshMaterialUniforms(Wt,G,D,I,w.state.transmissionRenderTarget[b.id]),Qe.needsLights&&Qe.lightProbeGrid){const Ft=Qe.lightProbeGrid;Wt.probesSH.value=Ft.texture,Wt.probesMin.value.copy(Ft.boundingBox.min),Wt.probesMax.value.copy(Ft.boundingBox.max),Wt.probesResolution.value.copy(Ft.resolution)}aa.upload(C,Re(Qe),Wt,W)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(aa.upload(C,Re(Qe),Wt,W),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Tt.setValue(C,"center",j.center),Tt.setValue(C,"modelViewMatrix",j.modelViewMatrix),Tt.setValue(C,"normalMatrix",j.normalMatrix),Tt.setValue(C,"modelMatrix",j.matrixWorld),G.uniformsGroups!==void 0){const Ft=G.uniformsGroups;for(let Ii=0,rs=Ft.length;Ii<rs;Ii++){const Hl=Ft[Ii];Me.update(Hl,xn),Me.bind(Hl,xn)}}return xn}function Xe(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function ht(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(b,U,$){const G=q.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),q.get(b.texture).__webglTexture=U,q.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:$,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){const $=q.get(b);$.__webglFramebuffer=U,$.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,$=0){J=b,ie=U,te=$;let G=null,j=!1,Le=!1;if(b){const ze=q.get(b);if(ze.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(C.FRAMEBUFFER,ze.__webglFramebuffer),me.copy(b.viewport),Be.copy(b.scissor),se=b.scissorTest,M.viewport(me),M.scissor(Be),M.setScissorTest(se),Y=-1;return}else if(ze.__webglFramebuffer===void 0)W.setupRenderTarget(b);else if(ze.__hasExternalTextures)W.rebindTextures(b,q.get(b.texture).__webglTexture,q.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const at=b.depthTexture;if(ze.__boundDepthTexture!==at){if(at!==null&&q.has(at)&&(b.width!==at.image.width||b.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(b)}}const Ue=b.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Le=!0);const Ye=q.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ye[U])?G=Ye[U][$]:G=Ye[U],j=!0):b.samples>0&&W.useMultisampledRTT(b)===!1?G=q.get(b).__webglMultisampledFramebuffer:Array.isArray(Ye)?G=Ye[$]:G=Ye,me.copy(b.viewport),Be.copy(b.scissor),se=b.scissorTest}else me.copy(re).multiplyScalar(D).floor(),Be.copy(ve).multiplyScalar(D).floor(),se=Ie;if($!==0&&(G=K),M.bindFramebuffer(C.FRAMEBUFFER,G)&&M.drawBuffers(b,G),M.viewport(me),M.scissor(Be),M.setScissorTest(se),j){const ze=q.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,ze.__webglTexture,$)}else if(Le){const ze=U;for(let Ue=0;Ue<b.textures.length;Ue++){const Ye=q.get(b.textures[Ue]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ue,Ye.__webglTexture,$,ze)}}else if(b!==null&&$!==0){const ze=q.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ze.__webglTexture,$)}Y=-1};function it(b){const U=q.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=A.textureFormatReadable(b.format),U.__typeReadable=A.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,$,G,j,Le,ke,ze=0){if(!(b&&b.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ke!==void 0&&(Ue=Ue[ke]),Ue){M.bindFramebuffer(C.FRAMEBUFFER,Ue);try{const Ye=b.textures[ze],at=Ye.format,ot=Ye.type;b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ze);const et=it(Ye);if(et.__formatReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(et.__typeReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-G&&$>=0&&$<=b.height-j&&C.readPixels(U,$,G,j,Ee.convert(at),Ee.convert(ot),Le)}finally{const Ye=J!==null?q.get(J).__webglFramebuffer:null;M.bindFramebuffer(C.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(b,U,$,G,j,Le,ke,ze=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ke!==void 0&&(Ue=Ue[ke]),Ue)if(U>=0&&U<=b.width-G&&$>=0&&$<=b.height-j){M.bindFramebuffer(C.FRAMEBUFFER,Ue);const Ye=b.textures[ze],at=Ye.format,ot=Ye.type;b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ze);const et=it(Ye);if(et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _t=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,_t),C.bufferData(C.PIXEL_PACK_BUFFER,Le.byteLength,C.STREAM_READ),C.readPixels(U,$,G,j,Ee.convert(at),Ee.convert(ot),0),C.bindBuffer(C.PIXEL_PACK_BUFFER,null);const At=J!==null?q.get(J).__webglFramebuffer:null;M.bindFramebuffer(C.FRAMEBUFFER,At);const bt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Td(C,bt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,_t),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Le),C.bindBuffer(C.PIXEL_PACK_BUFFER,null),C.deleteBuffer(_t),C.deleteSync(bt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,$=0){const G=Math.pow(2,-$),j=Math.floor(b.image.width*G),Le=Math.floor(b.image.height*G),ke=U!==null?U.x:0,ze=U!==null?U.y:0;W.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,$,0,0,ke,ze,j,Le),M.unbindTexture()},this.copyTextureToTexture=function(b,U,$=null,G=null,j=0,Le=0){let ke,ze,Ue,Ye,at,ot,et,_t,At;const bt=b.isCompressedTexture?b.mipmaps[Le]:b.image;if($!==null)ke=$.max.x-$.min.x,ze=$.max.y-$.min.y,Ue=$.isBox3?$.max.z-$.min.z:1,Ye=$.min.x,at=$.min.y,ot=$.isBox3?$.min.z:0;else{const Wt=Math.pow(2,-j);ke=Math.floor(bt.width*Wt),ze=Math.floor(bt.height*Wt),b.isDataArrayTexture?Ue=bt.depth:b.isData3DTexture?Ue=Math.floor(bt.depth*Wt):Ue=1,Ye=0,at=0,ot=0}G!==null?(et=G.x,_t=G.y,At=G.z):(et=0,_t=0,At=0);const Mt=Ee.convert(U.format),zt=Ee.convert(U.type);let Qe;U.isData3DTexture?(W.setTexture3D(U,0),Qe=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(W.setTexture2DArray(U,0),Qe=C.TEXTURE_2D_ARRAY):(W.setTexture2D(U,0),Qe=C.TEXTURE_2D),M.activeTexture(C.TEXTURE0),M.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),M.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),M.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const Kt=M.getParameter(C.UNPACK_ROW_LENGTH),St=M.getParameter(C.UNPACK_IMAGE_HEIGHT),xn=M.getParameter(C.UNPACK_SKIP_PIXELS),Rn=M.getParameter(C.UNPACK_SKIP_ROWS),Qn=M.getParameter(C.UNPACK_SKIP_IMAGES);M.pixelStorei(C.UNPACK_ROW_LENGTH,bt.width),M.pixelStorei(C.UNPACK_IMAGE_HEIGHT,bt.height),M.pixelStorei(C.UNPACK_SKIP_PIXELS,Ye),M.pixelStorei(C.UNPACK_SKIP_ROWS,at),M.pixelStorei(C.UNPACK_SKIP_IMAGES,ot);const Li=b.isDataArrayTexture||b.isData3DTexture,Tt=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const Wt=q.get(b),Di=q.get(U),Ft=q.get(Wt.__renderTarget),Ii=q.get(Di.__renderTarget);M.bindFramebuffer(C.READ_FRAMEBUFFER,Ft.__webglFramebuffer),M.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let rs=0;rs<Ue;rs++)Li&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,q.get(b).__webglTexture,j,ot+rs),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,q.get(U).__webglTexture,Le,At+rs)),C.blitFramebuffer(Ye,at,ke,ze,et,_t,ke,ze,C.DEPTH_BUFFER_BIT,C.NEAREST);M.bindFramebuffer(C.READ_FRAMEBUFFER,null),M.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(j!==0||b.isRenderTargetTexture||q.has(b)){const Wt=q.get(b),Di=q.get(U);M.bindFramebuffer(C.READ_FRAMEBUFFER,N),M.bindFramebuffer(C.DRAW_FRAMEBUFFER,Z);for(let Ft=0;Ft<Ue;Ft++)Li?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Wt.__webglTexture,j,ot+Ft):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Wt.__webglTexture,j),Tt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Di.__webglTexture,Le,At+Ft):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Di.__webglTexture,Le),j!==0?C.blitFramebuffer(Ye,at,ke,ze,et,_t,ke,ze,C.COLOR_BUFFER_BIT,C.NEAREST):Tt?C.copyTexSubImage3D(Qe,Le,et,_t,At+Ft,Ye,at,ke,ze):C.copyTexSubImage2D(Qe,Le,et,_t,Ye,at,ke,ze);M.bindFramebuffer(C.READ_FRAMEBUFFER,null),M.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Tt?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(Qe,Le,et,_t,At,ke,ze,Ue,Mt,zt,bt.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(Qe,Le,et,_t,At,ke,ze,Ue,Mt,bt.data):C.texSubImage3D(Qe,Le,et,_t,At,ke,ze,Ue,Mt,zt,bt):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Le,et,_t,ke,ze,Mt,zt,bt.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Le,et,_t,bt.width,bt.height,Mt,bt.data):C.texSubImage2D(C.TEXTURE_2D,Le,et,_t,ke,ze,Mt,zt,bt);M.pixelStorei(C.UNPACK_ROW_LENGTH,Kt),M.pixelStorei(C.UNPACK_IMAGE_HEIGHT,St),M.pixelStorei(C.UNPACK_SKIP_PIXELS,xn),M.pixelStorei(C.UNPACK_SKIP_ROWS,Rn),M.pixelStorei(C.UNPACK_SKIP_IMAGES,Qn),Le===0&&U.generateMipmaps&&C.generateMipmap(Qe),M.unbindTexture()},this.initRenderTarget=function(b){q.get(b).__webglFramebuffer===void 0&&W.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?W.setTextureCube(b,0):b.isData3DTexture?W.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?W.setTexture2DArray(b,0):W.setTexture2D(b,0),M.unbindTexture()},this.resetState=function(){ie=0,te=0,J=null,M.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}function sh(i,e){if(e===dd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===al||e===Kh){let t=i.getIndex();if(t===null){const r=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===al)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function hx(i){const e=new Map,t=new Map,n=i.clone();return Tu(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=e.get(s),l=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=l.map(function(o){return t.get(o)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Tu(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Tu(i.children[n],e.children[n],t)}class ux extends is{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new gx(t)}),this.register(function(t){return new _x(t)}),this.register(function(t){return new Ex(t)}),this.register(function(t){return new Ax(t)}),this.register(function(t){return new Rx(t)}),this.register(function(t){return new vx(t)}),this.register(function(t){return new Mx(t)}),this.register(function(t){return new Sx(t)}),this.register(function(t){return new yx(t)}),this.register(function(t){return new mx(t)}),this.register(function(t){return new bx(t)}),this.register(function(t){return new xx(t)}),this.register(function(t){return new Tx(t)}),this.register(function(t){return new wx(t)}),this.register(function(t){return new fx(t)}),this.register(function(t){return new rh(t,vt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new rh(t,vt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Cx(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Wi.extractUrlBase(e);a=Wi.resolveURL(c,this.path)}else a=Wi.extractUrlBase(e);this.manager.itemStart(e);const l=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},o=new ba(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},l)}catch(h){l(h)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},l={},o=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(o.decode(new Uint8Array(e,0,4))===Eu){try{a[vt.KHR_BINARY_GLTF]=new Px(e)}catch(u){s&&s(u);return}r=JSON.parse(a[vt.KHR_BINARY_GLTF].content)}else r=JSON.parse(o.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Vx(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case vt.KHR_MATERIALS_UNLIT:a[u]=new px;break;case vt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Lx(r,this.dracoLoader);break;case vt.KHR_TEXTURE_TRANSFORM:a[u]=new Dx;break;case vt.KHR_MESH_QUANTIZATION:a[u]=new Ix;break;default:d.indexOf(u)>=0&&l[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(l),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function dx(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Yt(i,e,t){const n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class fx{constructor(e){this.parser=e,this.name=vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,o=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new $e(16777215);o.color!==void 0&&h.setRGB(o.color[0],o.color[1],o.color[2],Xt);const u=o.range!==void 0?o.range:0;switch(o.type){case"directional":c=new mu(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Zf(h),c.distance=u;break;case"spot":c=new Yf(h),c.distance=u,o.spot=o.spot||{},o.spot.innerConeAngle=o.spot.innerConeAngle!==void 0?o.spot.innerConeAngle:0,o.spot.outerConeAngle=o.spot.outerConeAngle!==void 0?o.spot.outerConeAngle:Math.PI/4,c.angle=o.spot.outerConeAngle,c.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+o.type)}return c.position.set(0,0,0),ni(c,o),o.intensity!==void 0&&(c.intensity=o.intensity),c.name=t.createUniqueName(o.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],l=(r.extensions&&r.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(o){return n._getNodeRef(t.cache,l,o)})}}class px{constructor(){this.name=vt.KHR_MATERIALS_UNLIT}getMaterialType(){return ts}extendParams(e,t,n){const s=[];e.color=new $e(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Xt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Gt))}return Promise.all(s)}}class mx{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class gx{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new st(r,r)}return Promise.all(s)}}class _x{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class xx{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}}class vx{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(t.sheenColor=new $e(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Xt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Gt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}}class Mx{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}}class Sx{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new $e().setRGB(r[0],r[1],r[2],Xt),Promise.all(s)}}class yx{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IOR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class bx{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new $e().setRGB(r[0],r[1],r[2],Xt),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Gt)),Promise.all(s)}}class wx{constructor(e){this.parser=e,this.name=vt.EXT_MATERIALS_BUMP}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}}class Tx{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}}class Ex{constructor(e){this.parser=e,this.name=vt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Ax{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],l=s.images[a.source];let o=n.textureLoader;if(l.uri){const c=n.options.manager.getHandler(l.uri);c!==null&&(o=c)}return n.loadTextureImage(e,a.source,o)}}class Rx{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],l=s.images[a.source];let o=n.textureLoader;if(l.uri){const c=n.options.manager.getHandler(l.uri);c!==null&&(o=c)}return n.loadTextureImage(e,a.source,o)}}class rh{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(l){const o=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(l,o,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class Cx{constructor(e){this.name=vt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Bn.TRIANGLES&&c.mode!==Bn.TRIANGLE_STRIP&&c.mode!==Bn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,l=[],o={};for(const c in a)l.push(this.parser.getDependency("accessor",a[c]).then(h=>(o[c]=h,o[c])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const v=new mt,m=new H,p=new mn,y=new H(1,1,1),E=new ru(g.geometry,g.material,d);for(let S=0;S<d;S++)o.TRANSLATION&&m.fromBufferAttribute(o.TRANSLATION,S),o.ROTATION&&p.fromBufferAttribute(o.ROTATION,S),o.SCALE&&y.fromBufferAttribute(o.SCALE,S),E.setMatrixAt(S,v.compose(m,p,y));let _=null;for(const S in o)if(S==="_COLOR_0"){const w=o[S];E.instanceColor=new xa(w.array,w.itemSize,w.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(_===null){const R=E.geometry;_=new Ot,_.name=R.name;for(const x in R.attributes)_.setAttribute(x,R.attributes[x]);for(const x in R.morphAttributes)_.morphAttributes[x]=R.morphAttributes[x];R.index!==null&&_.setIndex(R.index),_.morphTargetsRelative=R.morphTargetsRelative;for(const x of R.groups)_.addGroup(x.start,x.count,x.materialIndex);R.boundingBox!==null&&(_.boundingBox=R.boundingBox.clone()),R.boundingSphere!==null&&(_.boundingSphere=R.boundingSphere.clone()),_.drawRange.start=R.drawRange.start,_.drawRange.count=R.drawRange.count,_.userData=Object.assign({},R.userData),E.geometry=_}const w=o[S];_.setAttribute(S,new xa(w.array,w.itemSize,w.normalized))}kt.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),f.push(E)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Eu="glTF",$s=12,ah={JSON:1313821514,BIN:5130562};class Px{constructor(e){this.name=vt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,$s),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Eu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-$s,r=new DataView(e,$s);let a=0;for(;a<s;){const l=r.getUint32(a,!0);a+=4;const o=r.getUint32(a,!0);if(a+=4,o===ah.JSON){const c=new Uint8Array(e,$s+a,l);this.content=n.decode(c)}else if(o===ah.BIN){const c=$s+a;this.body=e.slice(c,c+l)}a+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Lx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=vt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,l={},o={},c={};for(const h in a){const u=ul[h]||h.toLowerCase();l[u]=a[h]}for(const h in e.attributes){const u=ul[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Rs[d.componentType];c[u]=f.name,o[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const g in f.attributes){const v=f.attributes[g],m=o[g];m!==void 0&&(v.normalized=m)}u(f)},l,c,Xt,d)})})}}class Dx{constructor(){this.name=vt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class Ix{constructor(){this.name=vt.KHR_MESH_QUANTIZATION}}class Au extends Fs{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=l*2,c=l*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,v=g-c,m=-2*f+3*d,p=f-d,y=1-m,E=p-d+u;for(let _=0;_!==l;_++){const S=a[v+_+l],w=a[v+_+o]*h,R=a[g+_+l],x=a[g+_]*h;r[_]=y*S+E*w+m*R+p*x}return r}}const Nx=new mn;class Ux extends Au{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return Nx.fromArray(r).normalize().toArray(r),r}}const Bn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Rs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},oh={9728:jt,9729:Et,9984:Hh,9985:ea,9986:er,9987:zn},lh={33071:pn,33648:da,10497:In},uo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ul={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ki={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Fx={CUBICSPLINE:void 0,LINEAR:mr,STEP:pr},fo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ox(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Us({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xi})),i.DefaultMaterial}function Qi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ni(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Bx(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],l=[],o=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;l.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;o.push(d)}}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(o)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function kx(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function zx(i){let e;const t=i.extensions&&i.extensions[vt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+po(t.attributes):e=i.indices+":"+po(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+po(i.targets[n]);return e}function po(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function dl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Hx(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Gx=new mt;class Vx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new dx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const l=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(l)===!0;const o=l.match(/Version\/(\d+)/);s=n&&o?parseInt(o[1],10):-1,r=l.indexOf("Firefox")>-1,a=r?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Wf(this.options.manager):this.textureLoader=new Jf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ba(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const l={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Qi(r,l,s),ni(l,s),Promise.all(n._invokeAll(function(o){return o.afterRoot&&o.afterRoot(l)})).then(function(){for(const o of l.scenes)o.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let l=0,o=a.length;l<o;l++)e[a[l]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,l)=>{const o=this.associations.get(a);o!=null&&this.associations.set(l,o);for(const[c,h]of a.children.entries())r(h,l.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[vt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(Wi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=uo[s.type],l=Rs[s.componentType],o=s.normalized===!0,c=new l(s.count*a);return Promise.resolve(new Ut(c,a,o))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const l=a[0],o=uo[s.type],c=Rs[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*o,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let v,m;if(f&&f!==u){const p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let E=t.cache.get(y);E||(v=new c(l,p*f,s.count*f/h),E=new iu(v,f/h),t.cache.add(y,E)),m=new Ta(E,o,d%f/h,g)}else l===null?v=new c(s.count*o):v=new c(l,d,s.count*o),m=new Ut(v,o,g);if(s.sparse!==void 0){const p=uo.SCALAR,y=Rs[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,S=new y(a[1],E,s.sparse.count*p),w=new c(a[2],_,s.sparse.count*o);l!==null&&(m=new Ut(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,x=S.length;R<x;R++){const T=S[R];if(m.setX(T,w[R*o]),o>=2&&m.setY(T,w[R*o+1]),o>=3&&m.setZ(T,w[R*o+2]),o>=4&&m.setW(T,w[R*o+3]),o>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let l=this.textureLoader;if(a.uri){const o=n.manager.getHandler(a.uri);o!==null&&(l=o)}return this.loadTextureImage(e,r,l)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],l=r.images[t],o=(l.uri||l.bufferView)+":"+a.sampler;if(this.textureCache[o])return this.textureCache[o];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||l.name||"",h.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(h.name=l.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=oh[d.magFilter]||Et,h.minFilter=oh[d.minFilter]||zn,h.wrapS=lh[d.wrapS]||In,h.wrapT=lh[d.wrapT]||In,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==jt&&h.minFilter!==Et,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[o]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=s.images[e],l=self.URL||self.webkitURL;let o=a.uri||"",c=!1;if(a.bufferView!==void 0)o=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return o=l.createObjectURL(d),o});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(o).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new sn(v);m.needsUpdate=!0,d(m)}),t.load(Wi.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&l.revokeObjectURL(o),ni(u,a),u.userData.mimeType=a.mimeType||Hx(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[vt.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[vt.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const o=r.associations.get(a);a=r.extensions[vt.KHR_TEXTURE_TRANSFORM].extendTexture(a,l),r.associations.set(a,o)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let o=this.cache.get(l);o||(o=new Dl,$n.prototype.copy.call(o,n),o.color.copy(n.color),o.map=n.map,o.sizeAttenuation=!1,this.cache.add(l,o)),n=o}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let o=this.cache.get(l);o||(o=new au,$n.prototype.copy.call(o,n),o.color.copy(n.color),o.map=n.map,this.cache.add(l,o)),n=o}if(s||r||a){let l="ClonedMaterial:"+n.uuid+":";s&&(l+="derivative-tangents:"),r&&(l+="vertex-colors:"),a&&(l+="flat-shading:");let o=this.cache.get(l);o||(o=n.clone(),r&&(o.vertexColors=!0),a&&(o.flatShading=!0),s&&(o.normalScale&&(o.normalScale.y*=-1),o.clearcoatNormalScale&&(o.clearcoatNormalScale.y*=-1)),this.cache.add(l,o),this.associations.set(o,this.associations.get(n))),n=o}e.material=n}getMaterialType(){return Us}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const l={},o=r.extensions||{},c=[];if(o[vt.KHR_MATERIALS_UNLIT]){const u=s[vt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(l,r,t))}else{const u=r.pbrMetallicRoughness||{};if(l.color=new $e(1,1,1),l.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;l.color.setRGB(d[0],d[1],d[2],Xt),l.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(l,"map",u.baseColorTexture,Gt)),l.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,l.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(l,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(l,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,l)})))}r.doubleSided===!0&&(l.side=Ln);const h=r.alphaMode||fo.OPAQUE;if(h===fo.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,h===fo.MASK&&(l.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ts&&(c.push(t.assignTexture(l,"normalMap",r.normalTexture)),l.normalScale=new st(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;l.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==ts&&(c.push(t.assignTexture(l,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ts){const u=r.emissiveFactor;l.emissive=new $e().setRGB(u[0],u[1],u[2],Xt)}return r.emissiveTexture!==void 0&&a!==ts&&c.push(t.assignTexture(l,"emissiveMap",r.emissiveTexture,Gt)),Promise.all(c).then(function(){const u=new a(l);return r.name&&(u.name=r.name),ni(u,r),t.associations.set(u,{materials:e}),r.extensions&&Qi(s,u,r),u})}createUniqueName(e){const t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(l){return n[vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(o){return ch(o,l,t)})}const a=[];for(let l=0,o=e.length;l<o;l++){const c=e[l],h=zx(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[vt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=ch(new Ot,c,t),c.mode===Bn.TRIANGLE_STRIP?d=d.then(f=>sh(f,Kh)):c.mode===Bn.TRIANGLE_FAN&&(d=d.then(f=>sh(f,al))),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,l=[];for(let o=0,c=a.length;o<c;o++){const h=a[o].material===void 0?Ox(this.cache):this.getDependency("material",a[o].material);l.push(h)}return l.push(t.loadGeometries(a)),Promise.all(l).then(async function(o){const c=o.slice(0,o.length-1),h=o[o.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const v=h[f],m=a[f];let p;const y=c[f];if(m.mode===Bn.TRIANGLES||m.mode===Bn.TRIANGLE_STRIP||m.mode===Bn.TRIANGLE_FAN||m.mode===void 0){const E=r.isSkinnedMesh===!0,_=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");E&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=E&&_?new pf(v,y):new qt(v,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===Bn.LINES)p=new xf(v,y);else if(m.mode===Bn.LINE_STRIP)p=new Ll(v,y);else if(m.mode===Bn.LINE_LOOP)p=new vf(v,y);else if(m.mode===Bn.POINTS)p=new ou(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&kx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ni(p,r),m.extensions&&Qi(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Qi(s,u[0],r),u[0];const d=new gn;r.extensions&&Qi(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new fn(Kn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new br(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ni(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,l=[],o=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){l.push(u);const d=new mt;r!==null&&d.fromArray(r.array,c*16),o.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Pl(l,o)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],l=[],o=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],g=s.samplers[f.sampler],v=f.target,m=v.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),l.push(this.getDependency("accessor",p)),o.push(this.getDependency("accessor",y)),c.push(g),h.push(v))}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(o),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let E=0,_=d.length;E<_;E++){const S=d[E],w=f[E],R=g[E],x=v[E],T=m[E];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const P=n._createAnimationTracks(S,w,R,x,T);if(P)for(let k=0;k<P.length;k++)p.push(P[k])}const y=new Of(r,void 0,p);return ni(y,s),y})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(l){if(l.isMesh)for(let o=0,c=s.weights.length;o<c;o++)l.morphTargetInfluences[o]=s.weights[o]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],l=s.children||[];for(let c=0,h=l.length;c<h;c++)a.push(n.getDependency("node",l[c]));const o=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),o]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Gx)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){const f=h.userData.pivot,g=u[0];h.pivot=new H().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",l=[],o=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return o&&l.push(o),r.camera!==void 0&&l.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){l.push(c)}),this.nodeCache[e]=Promise.all(l).then(function(c){let h;if(r.isBone===!0?h=new su:c.length>1?h=new gn:c.length===1?h=c[0]:h=new kt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),ni(h,r),r.extensions&&Qi(n,h,r),r.matrix!==void 0){const u=new mt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new gn;n.name&&(r.name=s.createUniqueName(n.name)),ni(r,n),n.extensions&&Qi(t,r,n);const a=n.nodes||[],l=[];for(let o=0,c=a.length;o<c;o++)l.push(s.getDependency("node",a[o]));return Promise.all(l).then(function(o){for(let h=0,u=o.length;h<u;h++){const d=o[h];d.parent!==null?r.add(hx(d)):r.add(d)}const c=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof $n||d instanceof sn)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],l=e.name?e.name:e.uuid,o=[];function c(f){f.morphTargetInfluences&&o.push(f.name?f.name:f.uuid)}ki[r.path]===ki.weights?(c(e),e.isGroup&&e.children.forEach(c)):o.push(l);let h;switch(ki[r.path]){case ki.weights:h=vr;break;case ki.rotation:h=Mr;break;case ki.translation:case ki.scale:h=ya;break;default:n.itemSize===1?h=vr:h=ya;break}const u=s.interpolation!==void 0?Fx[s.interpolation]:mr,d=this._getArrayFromAccessor(n);for(let f=0,g=o.length;f<g;f++){const v=new h(o[f]+"."+ki[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=dl(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Mr?Ux:Au;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Wx(i,e,t){const n=e.attributes,s=new bn;if(n.POSITION!==void 0){const l=t.json.accessors[n.POSITION],o=l.min,c=l.max;if(o!==void 0&&c!==void 0){if(s.set(new H(o[0],o[1],o[2]),new H(c[0],c[1],c[2])),l.normalized){const h=dl(Rs[l.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const l=new H,o=new H;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(o.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),o.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),o.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=dl(Rs[d.componentType]);o.multiplyScalar(v)}l.max(o)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(l)}i.boundingBox=s;const a=new _n;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function ch(i,e,t){const n=e.attributes,s=[];function r(a,l){return t.getDependency("accessor",a).then(function(o){i.setAttribute(l,o)})}for(const a in n){const l=ul[a]||a.toLowerCase();l in i.attributes||s.push(r(n[a],l))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(l){i.setIndex(l)});s.push(a)}return xt.workingColorSpace!==Xt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${xt.workingColorSpace}" not supported.`),ni(i,e),Wx(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Bx(i,e.targets,t):i})}const mo=new WeakMap,Xx=new URL("/assets/draco_decoder-C32yEggz.wasm",import.meta.url).toString(),qx=new URL("/assets/draco_wasm_wrapper-DxJM36Ib.js",import.meta.url).toString(),Yx=new URL("/assets/draco_decoder-fzg4nYZr.js",import.meta.url).toString();new URL("/assets/draco_wasm_wrapper-fZCQGLGb.js",import.meta.url).toString(),new URL("/assets/draco_decoder-Z1_iN-Ht.wasm",import.meta.url).toString();class Kx extends is{constructor(e){super(e),this.decoderPaths={js:qx,wasm:Xx,dep_js:Yx},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){const{decoderPaths:t}=this;return typeof e=="object"?(t.js=e.js,t.wasm=e.wasm,t.dep_js=null):(t.js=Wi.resolveURL("draco_wasm_wrapper.js",e),t.wasm=Wi.resolveURL("draco_decoder.wasm",e),t.dep_js=Wi.resolveURL("draco_decoder.js",e)),this}setDecoderConfig(e){return console.warn("THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194."),this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){const r=new ba(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Gt,n).catch(n)}decodeDracoFile(e,t,n,s,r=Xt,a=()=>{}){const l={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,l).then(t).catch(a)}decodeGeometry(e,t){const n=JSON.stringify(t);if(mo.has(e)){const o=mo.get(e);if(o.key===n)return o.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s;const r=this.workerNextTaskID++,a=e.byteLength,l=this._getWorker(r,a).then(o=>(s=o,new Promise((c,h)=>{s._callbacks[r]={resolve:c,reject:h},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(o=>this._createGeometry(o.geometry));return l.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),mo.set(e,{key:n,promise:l}),l}_createGeometry(e){const t=new Ot;e.index&&t.setIndex(new Ut(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const{name:s,array:r,itemSize:a,stride:l,vertexColorSpace:o}=e.attributes[n];let c;if(a===l)c=new Ut(r,a);else{const h=new iu(r,l);c=new Ta(h,a,0)}s==="color"&&(this._assignVertexColorSpace(c,o),c.normalized=!(r instanceof Float32Array)),t.setAttribute(s,c)}return t}_assignVertexColorSpace(e,t){if(t!==Gt)return;const n=new $e;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s),xt.colorSpaceToWorking(n,Gt),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new ba(this.manager);return n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[],{decoderPaths:n}=this;if(e){if(n.dep_js===null)throw new Error("THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.");t.push(this._loadLibrary(n.dep_js,"text"))}else t.push(this._loadLibrary(n.js,"text")),t.push(this._loadLibrary(n.wasm,"arraybuffer"));return this.decoderPending=Promise.all(t).then(s=>{const r=s[0];e||(this.decoderConfig.wasmBinary=s[1]);const a=Zx.toString(),l=["/* draco decoder */",r,"","/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){const a=r.data;switch(a.type){case"decode":s._callbacks[a.id].resolve(a);break;case"error":s._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Zx(){let i,e;onmessage=function(a){const l=a.data;switch(l.type){case"init":i=l.decoderConfig,e=new Promise(function(h){i.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(i)});break;case"decode":const o=l.buffer,c=l.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(o),c),g=f.attributes.map(v=>v.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:l.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:l.id,error:f.message})}finally{u.destroy(d)}});break}};function t(a,l,o,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const g=l.GetEncodedGeometryType(o);if(g===a.TRIANGULAR_MESH)d=new a.Mesh,f=l.DecodeArrayToMesh(o,o.byteLength,d);else if(g===a.POINT_CLOUD)d=new a.PointCloud,f=l.DecodeArrayToPointCloud(o,o.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const v={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let y,E;if(c.useUniqueIDs)E=h[m],y=l.GetAttributeByUniqueId(d,E);else{if(E=l.GetAttributeId(d,a[h[m]]),E===-1)continue;y=l.GetAttribute(d,E)}const _=s(a,l,d,m,p,y);m==="color"&&(_.vertexColorSpace=c.vertexColorSpace),v.attributes.push(_)}return g===a.TRIANGULAR_MESH&&(v.index=n(a,l,d)),a.destroy(d),v}function n(a,l,o){const h=o.num_faces()*3,u=h*4,d=a._malloc(u);l.GetTrianglesUInt32Array(o,u,d);const f=new Uint32Array(a.HEAPF32.buffer,d,h).slice();return a._free(d),{array:f,itemSize:1}}function s(a,l,o,c,h,u){const d=o.num_points(),f=u.num_components(),g=r(a,h),v=f*h.BYTES_PER_ELEMENT,m=Math.ceil(v/4)*4,p=m/h.BYTES_PER_ELEMENT,y=d*v,E=d*m,_=a._malloc(y);l.GetAttributeDataArrayForAllPoints(o,u,g,y,_);const S=new h(a.HEAPF32.buffer,_,y/h.BYTES_PER_ELEMENT);let w;if(v===m)w=S.slice();else{w=new h(E/h.BYTES_PER_ELEMENT);let R=0;for(let x=0,T=S.length;x<T;x++){for(let P=0;P<f;P++)w[R+P]=S[x*f+P];R+=p}}return a._free(_),{name:c,count:d,itemSize:f,array:w,stride:p}}function r(a,l){switch(l){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}const hh={type:"change"},Ol={type:"start"},Ru={type:"end"},jr=new Sr,uh=new Si,$x=Math.cos(70*Kn.DEG2RAD),Jt=new H,vn=2*Math.PI,Lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},go=1e-6;class jx extends up{constructor(e,t=null){super(e,t),this.state=Lt.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ts.ROTATE,MIDDLE:Ts.DOLLY,RIGHT:Ts.PAN},this.touches={ONE:bs.ROTATE,TWO:bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new mn,this._lastTargetPosition=new H,this._quat=new mn().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Uc,this._sphericalDelta=new Uc,this._scale=1,this._panOffset=new H,this._rotateStart=new st,this._rotateEnd=new st,this._rotateDelta=new st,this._panStart=new st,this._panEnd=new st,this._panDelta=new st,this._dollyStart=new st,this._dollyEnd=new st,this._dollyDelta=new st,this._dollyDirection=new H,this._mouse=new st,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Qx.bind(this),this._onPointerDown=Jx.bind(this),this._onPointerUp=ev.bind(this),this._onContextMenu=ov.bind(this),this._onMouseWheel=iv.bind(this),this._onKeyDown=sv.bind(this),this._onTouchStart=rv.bind(this),this._onTouchMove=av.bind(this),this._onMouseDown=tv.bind(this),this._onMouseMove=nv.bind(this),this._interceptControlDown=lv.bind(this),this._interceptControlUp=cv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Lt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hh),this.update(),this.state=Lt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Jt.copy(t).sub(this.target),Jt.applyQuaternion(this._quat),this._spherical.setFromVector3(Jt),this.autoRotate&&this.state===Lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=vn:n>Math.PI&&(n-=vn),s<-Math.PI?s+=vn:s>Math.PI&&(s-=vn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Jt.setFromSpherical(this._spherical),Jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const l=Jt.length();a=this._clampDistance(l*this._scale);const o=l-a;this.object.position.addScaledVector(this._dollyDirection,o),this.object.updateMatrixWorld(),r=!!o}else if(this.object.isOrthographicCamera){const l=new H(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=o!==this.object.zoom;const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(l),this.object.updateMatrixWorld(),a=Jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(jr.origin.copy(this.object.position),jr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(jr.direction))<$x?this.object.lookAt(this.target):(uh.setFromNormalAndCoplanarPoint(this.object.up,this.target),jr.intersectPlane(uh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>go||8*(1-this._lastQuaternion.dot(this.object.quaternion))>go||this._lastTargetPosition.distanceToSquared(this.target)>go?(this.dispatchEvent(hh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vn/60*this.autoRotateSpeed*e:vn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Jt.setFromMatrixColumn(t,0),Jt.multiplyScalar(-e),this._panOffset.add(Jt)}_panUp(e,t){this.screenSpacePanning===!0?Jt.setFromMatrixColumn(t,1):(Jt.setFromMatrixColumn(t,0),Jt.crossVectors(this.object.up,Jt)),Jt.multiplyScalar(e),this._panOffset.add(Jt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Jt.copy(s).sub(this.target);let r=Jt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,l=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(a,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new st,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Jx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Qx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ev(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ru),this.state=Lt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function tv(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Lt.DOLLY;break;case Ts.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Lt.ROTATE}break;case Ts.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Lt.PAN}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(Ol)}function nv(i){switch(this.state){case Lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function iv(i){this.enabled===!1||this.enableZoom===!1||this.state!==Lt.NONE||(i.preventDefault(),this.dispatchEvent(Ol),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ru))}function sv(i){this.enabled!==!1&&this._handleKeyDown(i)}function rv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case bs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Lt.TOUCH_ROTATE;break;case bs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Lt.TOUCH_PAN;break;default:this.state=Lt.NONE}break;case 2:switch(this.touches.TWO){case bs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Lt.TOUCH_DOLLY_PAN;break;case bs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Lt.TOUCH_DOLLY_ROTATE;break;default:this.state=Lt.NONE}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(Ol)}function av(i){switch(this._trackPointer(i),this.state){case Lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Lt.NONE}}function ov(i){this.enabled!==!1&&i.preventDefault()}function lv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const hv={aces:`
    const mat3 tmIn = mat3( vec3( 0.59719, 0.07600, 0.02840 ), vec3( 0.35458, 0.90834, 0.13383 ), vec3( 0.04823, 0.01566, 0.83777 ) );
    const mat3 tmOut = mat3( vec3( 1.60475, -0.10208, -0.00327 ), vec3( -0.53108, 1.10813, -0.07276 ), vec3( -0.07367, -0.00605, 1.07602 ) );
    vec3 tmC = tmIn * ( gl_FragColor.rgb * ( TM_EXPOSURE / 0.6 ) );
    tmC = ( tmC * ( tmC + 0.0245786 ) - 0.000090537 ) / ( tmC * ( 0.983729 * tmC + 0.4329510 ) + 0.238081 );
    gl_FragColor.rgb = clamp( tmOut * tmC, 0.0, 1.0 );`,neutral:`
    vec3 tmC = gl_FragColor.rgb * TM_EXPOSURE;
    float tmX = min( tmC.r, min( tmC.g, tmC.b ) );
    tmC -= tmX < 0.08 ? tmX - 6.25 * tmX * tmX : 0.04;
    float tmPeak = max( tmC.r, max( tmC.g, tmC.b ) );
    if ( tmPeak >= 0.76 ) {
      float tmNew = 1.0 - 0.0576 / ( tmPeak + 0.24 - 0.76 );
      tmC *= tmNew / tmPeak;
      tmC = mix( tmC, vec3( tmNew ), 1.0 - 1.0 / ( 0.15 * ( tmPeak - tmNew ) + 1.0 ) );
    }
    gl_FragColor.rgb = tmC;`},uv=`
  #ifdef TM_NIGHT_UNIFORM
    float tmNight = clamp( 1.0 - toneMappingExposure, 0.0, 1.0 );
    if ( tmNight > 0.0 ) {
      vec3 tmN = mix( gl_FragColor.rgb, pow( max( gl_FragColor.rgb, vec3( 1e-5 ) ), vec3( 0.8 ) ) * 0.870551, tmNight );
      float tmLum = dot( tmN, vec3( 0.2126, 0.7152, 0.0722 ) );
      gl_FragColor.rgb = mix( tmN, tmLum * vec3( 0.74, 0.92, 1.32 ), tmNight * smoothstep( 0.26, 0.015, tmLum ) * 0.62 );
    }
  #endif`,dv=ft.colorspace_pars_fragment,fv=`
#ifndef TONE_MAPPING
uniform float toneMappingExposure;
#endif
#define TM_NIGHT_UNIFORM
`;function pv({curve:i="aces",exposure:e=1}={}){const t=hv[i];if(!t)throw new Error(`enableToneMapping: unknown curve "${i}" (aces | neutral)`);ft.colorspace_pars_fragment.includes("TM_NIGHT_UNIFORM")||(ft.colorspace_pars_fragment=dv+fv),ft.tonemapping_fragment=`{
#define TM_EXPOSURE ${e.toFixed(4)}
${uv}
${t}
#undef TM_EXPOSURE
}`}const $t=Math.PI,si=6371e3,Is=6471e3,Bl=8e3,kl=1200,mv=[55e-7,13e-6,224e-7],Cu=600,dh=16,fh=6,oa=28,gv=.6,an=256,Dn=128,la=Dn+2,Ns=-.012,nr=.85,_v=2*$t*nr,xv=.62,Jr=[.548,.71,1],Pu=384,Lu=112,Du=256,Iu=128,vi=(i,e,t)=>{const n=Math.min(Math.max((t-i)/(e-i),0),1);return n*n*(3-2*n)};function ph(i,e,t=new H){const n=e*$t/180*Math.sin((i-6)/12*$t),s=(90+(i-6)*15)*$t/180;return t.set(Math.cos(n)*Math.sin(s),Math.sin(n),Math.cos(n)*Math.cos(s))}const hr=64,Hi=384;let Ss=null;function vv(){if(Ss)return Ss;Ss=new Float32Array(hr*Hi*2);for(let i=0;i<hr;i++){const e=i/(hr-1),t=si+e*e*1e5;for(let n=0;n<Hi;n++){const s=n/(Hi-1)*2-1,r=Math.sign(s)*s*s,a=t*r,l=-a+Math.sqrt(Math.max(a*a-t*t+Is*Is,0)),o=l/fh;let c=0,h=0;for(let d=0;d<fh;d++){const f=(d+.5)*o,g=Math.sqrt(t*t+2*a*f+f*f)-si;c+=Math.exp(-g/Bl)*o,h+=Math.exp(-g/kl)*o}const u=(i*Hi+n)*2;Ss[u]=Math.min(c,1e12),Ss[u+1]=Math.min(h,1e12)}}return Ss}function Mv(i,e,t,n,s){const r=vv(),a=Math.sqrt(Math.max(1-e*e,0)),l=e,o=si+Cu,c=s,h=c*c,u=t[0],d=t[1],f=t[2],g=vi(.04,-.14,e),v=si*.9986,m=si*1.0022,p=$t/2-Ns;for(let y=0;y<an/2;y++){const E=((y+.5)/an-.5)*2*$t,_=Math.cos(E),S=Math.sin(E);for(let w=0;w<Dn;w++){const R=w/(Dn-1),x=Ns+R*R*p,T=Math.cos(x),P=T*_,k=Math.sin(x),z=T*S,K=o*k;let N=-K+Math.sqrt(Math.max(K*K-o*o+Is*Is,0));const Z=K*K-o*o+si*si;if(Z>=0){const de=-K-Math.sqrt(Z);de>=0&&(N=Math.min(N,de))}const ie=N/dh;let te=0,J=0,Y=0,ue=0,me=0,Be=0,se=0,He=0;for(let de=0;de<dh;de++){const C=(de+.5)*ie,Ae=P*C,Ge=o+k*C,A=z*C,M=Math.sqrt(Ae*Ae+Ge*Ge+A*A),B=M-si,q=Math.exp(-B/Bl)*ie,W=Math.exp(-B/kl)*ie;te+=q,J+=W;const pe=Ae*a+Ge*l;let le=1;if(pe<=0){const Tn=Math.sqrt(Math.max(M*M-pe*pe,0));if(le=Tn<=v?0:Tn>=m?1:vi(v,m,Tn),le===0)continue}const ae=pe/M,fe=Math.sqrt(Math.min(Math.max(B/1e5,0),1))*(hr-1),we=(Math.sign(ae)*Math.sqrt(Math.abs(ae))+1)*.5*(Hi-1),ye=Math.min(fe|0,hr-2),De=Math.min(we|0,Hi-2),be=fe-ye,Ve=we-De,We=(ye*Hi+De)*2,Je=We+2,V=We+Hi*2,Oe=V+2,he=(1-be)*(1-Ve),Ee=(1-be)*Ve,Te=be*(1-Ve),Me=be*Ve,Ze=r[We]*he+r[Je]*Ee+r[V]*Te+r[Oe]*Me,qe=r[We+1]*he+r[Je+1]*Ee+r[V+1]*Te+r[Oe+1]*Me,lt=Math.exp(-n*(J+qe))*le,ct=te+Ze,yt=Math.exp(-u*ct)*lt,Nt=Math.exp(-d*ct)*lt,tn=Math.exp(-f*ct)*lt;Y+=q*yt,ue+=q*Nt,me+=q*tn,Be+=W*yt,se+=W*Nt,He+=W*tn}const oe=P*a+k*l,F=oe*oe,I=3/(16*$t)*(1+F),D=3/(8*$t)*(1-h)*(1+F)/(Math.pow(1+h-2*oe*c,1.5)*(h+2)),Q=gv/(4*$t),O=u*Y,re=d*ue,ve=f*me,Ie=n*Be,Se=n*se,Ne=n*He,Ce=g*(Math.exp(-3*Math.max(k,0))*.85+.3),L=oa*(O*I+Ie*D+(O+Ie)*Q)+.0026*Ce,ne=oa*(re*I+Se*D+(re+Se)*Q)+.0044*Ce,_e=oa*(ve*I+Ne*D+(ve+Ne)*Q)+.006*Ce,xe=(w*an+y)*4,ee=(w*an+(an-1-y))*4;i[xe]=i[ee]=L,i[xe+1]=i[ee+1]=ne,i[xe+2]=i[ee+2]=_e,i[xe+3]=i[ee+3]=1}}i.copyWithin(Dn*an*4,(Dn-1)*an*4,Dn*an*4)}const Nu=`
#define SKY_PI 3.14159265359
vec2 skyLutUV( vec3 d, float sunAz ) {
  float u = ( atan( d.z, d.x ) - sunAz ) * ( 0.5 / SKY_PI ) + 0.5;
  float el = asin( clamp( d.y, -1.0, 1.0 ) );
  float v = sqrt( clamp( ( el - (${Ns.toFixed(4)}) ) / ( 0.5 * SKY_PI - (${Ns.toFixed(4)}) ), 0.0, 1.0 ) );
  return vec2( u, ( 0.5 + v * ${(Dn-1).toFixed(1)} ) / ${la.toFixed(1)} );
}
// The sky's own shoulder: one factor from the brightest channel compresses the range and keeps the
// ratios, so a sunset stays amber under ACES instead of being painted cream.
vec3 skyShoulder( vec3 c ) {
  float m = max( max( c.r, c.g ), c.b );
  float soft = min( m, 0.75 ) + 1.65 * ( 1.0 - exp( -max( m - 0.75, 0.0 ) / 1.65 ) );
  return c * ( soft / max( m, 1e-5 ) );
}
// moonlight in-scatter: a cheap cool Rayleigh copy — blue whatever colour the moon is
vec3 skyMoonGlow( vec3 dir, vec3 moonDir, float moonNight ) {
  float cosM = dot( dir, moonDir );
  float horizonExt = smoothstep( -0.05, 0.22, dir.y );
  return vec3( 0.055, 0.075, 0.13 ) * ( 1.0 + cosM * cosM ) * pow( max( moonDir.y, 0.0 ), 0.4 )
    * ( horizonExt * 0.8 + 0.2 ) * moonNight * 0.09;
}
`,Sv=`
#ifdef USE_FOG
	varying vec3 vSkyFogDelta;
#endif
`,yv=`
#ifdef USE_FOG
	vSkyFogDelta = mvPosition.xyz * mat3( viewMatrix ); // camera → fragment, world axes
#endif
`,bv=`
#ifdef USE_FOG
varying vec3 vSkyFogDelta;
uniform sampler2D skyAerialLut;
${Nu}
// Extinction toward the sky in the VIEW direction (not one fog colour): far land goes blue at noon,
// amber toward a low sun, and the horizon matches the backdrop because it is the same LUT.
vec3 skyAerial( vec3 col, vec3 delta, float scale ) {
  vec4 p0 = texelFetch( skyAerialLut, ivec2( 0, ${Dn+1} ), 0 ); // sun dir, sky gain
  vec4 p1 = texelFetch( skyAerialLut, ivec2( 1, ${Dn+1} ), 0 ); // extinction ×1e4 per metre
  vec4 p2 = texelFetch( skyAerialLut, ivec2( 2, ${Dn+1} ), 0 ); // moon dir, moon level × night
  float dist = length( delta );
  vec3 dir = delta / max( dist, 1e-4 );
  float meanY = max( cameraPosition.y + 0.5 * delta.y, 0.0 ); // haze thins with altitude
  float rho = exp( -meanY / 900.0 ) * 0.86 + 0.14;
  vec3 trans = exp( -p1.rgb * ( 1e-4 * dist * scale * rho ) );
  vec3 d = normalize( vec3( dir.x + 1e-5, max( dir.y, 0.0 ), dir.z ) );
  vec3 ins = texture2D( skyAerialLut, skyLutUV( d, atan( p0.z, p0.x ) ) ).rgb + skyMoonGlow( d, p2.xyz, p2.w );
  return col * trans + skyShoulder( ins ) * p0.w * ( 1.0 - trans );
}
#endif
`,wv=`
#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
		gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
	#else
		if ( fogNear < 0.0 ) {
			gl_FragColor.rgb = skyAerial( gl_FragColor.rgb, vSkyFogDelta, fogFar ); // sky.fog: near = -1, far = scale
		} else {
			float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
			gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
		}
	#endif
#endif
`;let mh=!1;function Tv(){if(mh)return;mh=!0;const i=ft;i.fog_pars_vertex+=Sv,i.fog_vertex+=yv,i.fog_pars_fragment+=bv,i.fog_fragment=wv}function gh(i){for(const t of Object.keys(kn)){const n=kn[t].uniforms;n&&n.fogColor&&(n.skyAerialLut?n.skyAerialLut.value=i:n.skyAerialLut={value:i})}const e=je.fog;e.skyAerialLut?e.skyAerialLut.value=i:e.skyAerialLut={value:i}}const Uu=`
uniform sampler2D uLut;
uniform sampler2D uAurora;
uniform vec3 uSunDir;
uniform vec3 uMoonDir;
uniform vec3 uSunColor;     // transmittance × above-horizon
uniform vec3 uMoonColor;
uniform vec3 uGroundRad;
uniform vec2 uSeed;
uniform float uSunAz;
uniform float uSunCosR;
uniform float uMoonCosR;
uniform float uMoonBrightness;
uniform float uMoonLevel;
uniform float uNight;
uniform float uStarDens;
uniform float uStarBrightness;
uniform float uStarRot;
uniform float uTime;
uniform float uCloudTime;
uniform float uCloudCoverage;
uniform float uCloudScale;
uniform float uCloudSpeed;
uniform float uCloudOpacity;
uniform float uAuroraLevel;
uniform float uGain;
uniform float uSeaLevel;
${Nu}
vec3 lutAt( vec3 d ) { return texture2D( uLut, skyLutUV( d, uSunAz ) ).rgb; }

float hash2( vec2 p ) { return fract( sin( dot( p, vec2( 127.1, 311.7 ) ) ) * 43758.5453123 ); }
float noise2( vec2 p ) {
  vec2 i = floor( p ), f = fract( p ), ff = f * f * ( 3.0 - 2.0 * f );
  return mix( mix( hash2( i ), hash2( i + vec2( 1.0, 0.0 ) ), ff.x ), mix( hash2( i + vec2( 0.0, 1.0 ) ), hash2( i + vec2( 1.0 ) ), ff.x ), ff.y );
}
vec2 rotq( vec2 q, float s ) { return vec2( q.x * 0.8 - q.y * 0.6, q.x * 0.6 + q.y * 0.8 ) * s; }
float fbm( vec2 p ) {
  float f = noise2( p ) * 0.5; p = rotq( p, 2.02 );
  f += noise2( p ) * 0.25; p = rotq( p, 2.03 );
  f += noise2( p ) * 0.125; p = rotq( p, 2.01 );
  f += noise2( p ) * 0.0625; p = rotq( p, 2.04 );
  f += noise2( p ) * 0.03125;
  return f / 0.96875;
}

#ifndef SKY_ENV
// ---- the night sky: four star lattices (bright-and-sparse → faint-and-dense) and the Milky Way
float starHash( vec2 p ) {
  vec3 q = fract( vec3( p.x, p.y, p.x ) * 0.1031 );
  q += dot( q, q.yzx + 33.33 );
  return fract( ( q.x + q.y ) * q.z );
}
float starNoise( vec2 p ) {
  vec2 i = floor( p ), f = fract( p ), ff = f * f * ( 3.0 - 2.0 * f );
  return mix( mix( starHash( i ), starHash( i + vec2( 1.0, 0.0 ) ), ff.x ), mix( starHash( i + vec2( 0.0, 1.0 ) ), starHash( i + vec2( 1.0 ) ), ff.x ), ff.y );
}
vec3 starTint( float t ) {
  return mix( mix( vec3( 1.0, 0.55, 0.28 ), vec3( 1.0, 0.96, 0.92 ), clamp( t * 2.2, 0.0, 1.0 ) ), vec3( 0.55, 0.70, 1.0 ), clamp( t * 2.4 - 1.4, 0.0, 1.0 ) );
}
vec2 turn( vec2 q, float c, float s, float k ) { return vec2( q.x * c - q.y * s, q.x * s + q.y * c ) * k; }
vec3 starLayer( float theta, float phi, float sinT, float dens, float clump, float band, float s, float i ) {
  float dim = ( 0.055 - 0.0475 * s ) * SKY_PI;
  float KC = 1500.0 + 1900.0 * s, KH = 300.0 + 240.0 * s;
  float keepP = clamp( dens * ( clump * ( 0.42 + 0.30 * s ) + band * ( 0.12 + 0.34 * s ) ), 0.0, 1.0 );
  vec2 q = vec2( theta / dim + i * 0.37, phi / dim + i * 0.91 );
  vec2 cell = floor( q ), local = fract( q ) - 0.5;
  float hx = starHash( cell + 11.0 + i * 17.3 );
  float hy = starHash( cell + vec2( 91.7, 43.1 ) + i * 5.0 );
  float hp = starHash( cell + vec2( 311.0, 157.0 ) + i * 3.0 );
  float ht = starHash( cell + vec2( 57.3, 233.9 ) + i * 7.0 );
  float hm = starHash( cell + vec2( 613.0, 71.9 ) + i * 11.0 );
  vec2 dd = local - ( vec2( hx, hy ) - 0.5 ) * 0.94;
  float l = length( vec2( dd.x, dd.y * sinT ) ) * dim;
  float keep = step( hp, sinT ) * step( ht, keepP );
  float mag = mix( pow( hm, 5.0 ) * 8.5 + 0.22, pow( hm, 4.0 ) * 0.75 + 0.03, s );
  float tw = sin( uTime * ( hx * 3.0 + 1.4 ) + hp * 39.0 ) * 0.16 + 0.86;
  float shape = exp( -l * KC ) + exp( -l * KH ) * 0.055;
  return starTint( hx * hx ) * ( shape * mag * tw * keep );
}
const vec3 GAL_N = vec3( 0.641, 0.451, -0.621 );
const vec3 GAL_C = vec3( 0.179, 0.699, 0.692 );
const vec3 GAL_A = vec3( 0.746, -0.555, 0.367 );
vec3 nightSky( vec3 dir ) {
  float ca = cos( uStarRot ), sa = sin( uStarRot );
  vec3 d = vec3( dir.x * ca + dir.z * sa, dir.y, dir.z * ca - dir.x * sa );
  float theta = acos( clamp( d.y, -1.0, 1.0 ) );
  float phi = atan( d.z, d.x );
  float sinT = max( sin( theta ), 0.04 );
  float lat = asin( clamp( dot( d, GAL_N ), -1.0, 1.0 ) );
  float band = exp( -lat * lat * 20.0 );
  float dens = clamp( ( 1.0 - uStarDens ) / 0.016, 0.0, 2.0 );
  float clump = starNoise( vec2( d.x + d.y * 0.6, d.z - d.y * 0.4 ) * 2.4 ) * 0.90 + 0.55;
  vec3 col = starLayer( theta, phi, sinT, dens, clump, band, 0.0, 0.0 )
    + starLayer( theta, phi, sinT, dens, clump, band, 1.0 / 3.0, 1.0 )
    + starLayer( theta, phi, sinT, dens, clump, band, 2.0 / 3.0, 2.0 )
    + starLayer( theta, phi, sinT, dens, clump, band, 1.0, 3.0 );
  col *= 1.0 - 0.45 * uMoonLevel; // a bright moon washes the faint sky out
  // the Galaxy: radians on both axes (isotropic structure), every octave rotated (no quilting)
  float gu = atan( dot( d, GAL_A ), dot( d, GAL_C ) );
  vec2 gp = vec2( gu, lat );
  vec2 gw = gp + ( vec2( starNoise( turn( gp, 0.80, 0.60, 2.3 ) ), starNoise( turn( gp, 0.28, -0.96, 2.6 ) + 19.0 ) ) - 0.5 ) * 0.30;
  float clouds = starNoise( gw * 3.1 ) * 0.50 + starNoise( turn( gw, 0.62, 0.78, 7.7 ) + 11.0 ) * 0.31
    + starNoise( turn( gw, -0.31, 0.95, 17.3 ) + 29.0 ) * 0.19;
  float prof = exp( -pow( lat * 5.0, 2.0 ) );
  float lon = exp( -gu * gu * 0.55 ) * 0.62 + 0.38;
  float riftY = ( lat - sin( gu * 1.7 ) * 0.030 ) * 22.0;
  float rift = 1.0 - 0.78 * exp( -riftY * riftY );
  float bulge = exp( -gu * gu * 2.6 ) * exp( -pow( lat * 8.0, 2.0 ) );
  float grain = starNoise( turn( gp, 0.71, -0.71, 46.0 ) + 7.0 ) * 0.30 + 0.85;
  float cs = smoothstep( 0.22, 0.84, clouds );
  float glow = ( prof * lon * rift * ( cs * 1.55 + 0.14 ) * 0.072 + bulge * 0.17 ) * grain;
  vec3 dust = mix( vec3( 0.90, 0.68, 0.50 ), vec3( 0.60, 0.72, 1.00 ), cs );
  col += mix( dust, vec3( 1.00, 0.86, 0.64 ), bulge ) * glow * ( 1.0 - 0.62 * uMoonLevel );
  return col;
}
#endif

vec2 auroraUV( vec3 d ) {
  return vec2( atan( d.z, d.x ) * ( 0.5 / SKY_PI ) + 0.5, sqrt( asin( clamp( d.y, 0.0, 1.0 ) ) / ( 0.5 * SKY_PI ) ) );
}

// the sky above the horizon, before uGain
vec3 skyColor( vec3 dir ) {
  vec3 col = lutAt( dir );
  float cosS = dot( dir, uSunDir );
  float cosM = dot( dir, uMoonDir );
  float night = uNight;
  float horizonExt = smoothstep( -0.05, 0.22, dir.y );
  if ( night > 0.003 ) {
#ifndef SKY_ENV
    col += nightSky( dir ) * uStarBrightness * night * horizonExt;
#endif
    if ( uAuroraLevel > 0.0 ) col += texture2D( uAurora, auroraUV( dir ) ).rgb * uAuroraLevel * night;
    col += skyMoonGlow( dir, uMoonDir, uMoonLevel * night );
    // the aureole is Mie: it carries the moon's own colour and dies within a few degrees
    float cm = max( cosM, 0.0 );
    col += uMoonColor * ( pow( cm, 220.0 ) * 0.90 + pow( cm, 26.0 ) * 0.055 ) * uMoonLevel * night * 0.38;
  }
#ifndef SKY_ENV
  // the moon: a sphere lit by the actual sun direction — the phase and terminator are geometry
  float alphaM = smoothstep( uMoonCosR, uMoonCosR + 0.00012, cosM );
  if ( alphaM > 0.0 ) {
    vec3 t1 = normalize( cross( uMoonDir, vec3( 0.0001, 1.0001, 0.0001 ) ) );
    vec3 t2 = cross( t1, uMoonDir );
    float sinR = sqrt( 1.0 - uMoonCosR * uMoonCosR );
    vec3 q = dir - uMoonDir * cosM;
    float mu = dot( q, t1 ) / sinR, mv = dot( q, t2 ) / sinR;
    float r2 = clamp( mu * mu + mv * mv, 0.0, 1.0 );
    vec3 n = t1 * mu + t2 * mv - uMoonDir * sqrt( 1.0 - r2 );
    float lit = max( dot( n, uSunDir ), 0.0 );
    float maria = ( 0.72 + noise2( vec2( mu, mv ) * 3.1 + 7.3 ) * 0.28 ) * ( 0.86 + noise2( vec2( mu, mv ) * 8.7 + 2.1 ) * 0.14 );
    vec3 surface = uMoonColor * ( lit * 0.80 + 0.015 ) * maria * uMoonBrightness * smoothstep( -0.04, 0.06, dir.y );
    col = mix( col, surface, alphaM );
  }
  col += uMoonColor * pow( max( cosM, 0.0 ), 900.0 ) * uMoonLevel * 0.12;
#endif
  // the sun's radiance: sunColor's hue, pinned just over the shoulder's ceiling (composited last)
  float peak = max( max( uSunColor.r, uSunColor.g ), uSunColor.b );
  float aboveH = smoothstep( -0.012, 0.004, uSunDir.y );
  vec3 sunRad = uSunColor / max( peak, 1e-4 ) * ( 2.4 * 1.9 ) * aboveH;

  // ---- clouds: an fbm slab on a curved shell, lit by marching the noise up-sun (Beer + powder)
  float cy = max( dir.y, 0.012 );
  float shell = min( 1.0 / ( cy + cy * cy * 0.9 ), 30.0 );
  vec2 cuv = dir.xz * ( shell * uCloudScale * 3.2 ) + vec2( 0.006, 0.0023 ) * uCloudTime * uCloudSpeed + uSeed;
  float thr = 0.90 - uCloudCoverage;
  float cover = 0.0;
  vec3 cloudCol = vec3( 0.0 );
  if ( uCloudCoverage > 0.0 && dir.y > 0.0 ) {
    float den = fbm( cuv ) - fbm( cuv * 3.7 + 5.1 ) * 0.22;
    cover = smoothstep( thr, thr + 0.20, den ) * smoothstep( 0.0, 0.055, dir.y ) * uCloudOpacity;
    if ( cover > 0.004 ) {
      vec2 sunUV = normalize( uSunDir.xz + 1e-4 );
      float d1 = smoothstep( thr, thr + 0.20, fbm( cuv + sunUV * 0.20 ) );
      float d2 = smoothstep( thr, thr + 0.20, fbm( cuv + sunUV * 0.52 ) );
      float beer = exp( -( d1 * 0.62 + d2 * 0.38 ) * 2.6 );
      float powder = 1.0 - exp( -cover * 3.0 );
      float cs = max( cosS, 0.0 );
      float hg = pow( cs, 6.0 ) * 0.8 + pow( cs, 48.0 ) * 2.6;
      vec3 cloudLit = uSunColor * ${oa.toFixed(1)} * aboveH * ( beer * ( powder * 0.6 + 0.4 ) * ( hg + 0.9 ) ) * 0.058;
      // ambient from the sky the cloud sits in: a low cloud over a burning horizon is lit orange
      vec3 cloudAmb = lutAt( vec3( dir.x, max( dir.y, 0.09 ), dir.z ) ) * 0.7 + vec3( 0.03, 0.04, 0.07 ) * uMoonLevel * night * 0.4;
      cloudCol = cloudLit + cloudAmb * ( beer * 0.4 + 0.6 );
      cloudCol = mix( cloudCol, col, smoothstep( 0.30, 0.015, dir.y ) * 0.85 ); // far clouds dissolve
    }
  }
  vec3 sky = skyShoulder( mix( col, cloudCol, cover ) );
#ifndef SKY_ENV
  float clear = 1.0 - cover;
  float disc = smoothstep( uSunCosR, uSunCosR + 0.00010, cosS );
  sky = mix( sky, sunRad, disc * clear );
  float cs2 = max( cosS, 0.0 );
  sky += sunRad * peak * ( pow( cs2, 2200.0 ) * 0.55 + pow( cs2, 180.0 ) * 0.07 ) * clear;
#endif
  return sky;
}

// below the horizon: the horizon haze of that azimuth (what the aerial perspective converges to),
// or for an ocean the sky it mirrors, hazed over the range the ray travels (eyeHeight / |dir.y|)
vec3 skyBelow( vec3 d ) {
  vec3 hz = vec3( d.x, 0.0, d.z ) + vec3( 1e-5, 0.0, 0.0 );
  vec3 horizon = lutAt( normalize( hz ) ) + skyMoonGlow( normalize( hz ), uMoonDir, uMoonLevel * uNight );
#ifdef SKY_SEA
  float down = max( -d.y, 1e-4 );
  float range = max( cameraPosition.y - uSeaLevel, 0.5 ) / down;
  vec3 mirror = lutAt( normalize( vec3( d.x, down, d.z ) ) );
  return skyShoulder( mix( horizon, mirror * 0.92, exp( -range / 26000.0 ) ) );
#else
  return skyShoulder( horizon );
#endif
}
`,_h=`
void main() { gl_Position = vec4( position.xy, 0.0, 1.0 ); }
`,Ev=`
varying vec3 vSkyDir;
void main() {
  vec4 farPoint = inverse( projectionMatrix ) * vec4( position.xy, 1.0, 1.0 );
  vSkyDir = ( farPoint.xyz / farPoint.w ) * mat3( viewMatrix ); // view ray in world axes
  gl_Position = vec4( position.xy, 1.0, 1.0 );                  // on the far plane: behind everything
}
`,Av=`
varying vec3 vSkyDir;
${Uu}
void main() {
  vec3 d = normalize( vSkyDir );
  vec3 c = d.y < 0.0 ? skyBelow( d ) : skyColor( d );
  gl_FragColor = vec4( c * uGain, 1.0 );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  gl_FragColor.rgb += ( fract( 52.9829189 * fract( dot( gl_FragCoord.xy, vec2( 0.06711056, 0.00583715 ) ) ) ) - 0.5 ) / 255.0;
}
`,Rv=`
#define SKY_ENV
${Uu}
void main() {
  vec2 uv = gl_FragCoord.xy / vec2( ${Du.toFixed(1)}, ${Iu.toFixed(1)} );
  float phi = ( uv.x - 0.5 ) * 2.0 * SKY_PI, theta = ( uv.y - 0.5 ) * SKY_PI;
  vec3 d = vec3( cos( theta ) * cos( phi ), sin( theta ), cos( theta ) * sin( phi ) );
  vec3 c;
  if ( d.y >= 0.0 ) c = skyColor( d ) * uGain;
  else c = mix( skyBelow( d ) * uGain, uGroundRad, smoothstep( 0.0, 0.12, -d.y ) ); // ground bounce
  gl_FragColor = vec4( c, 1.0 );
}
`,Cv=`
#define SKY_PI 3.14159265359
uniform float aTime, aSpeed, aSeed, aGain;
uniform vec3 aColorBase, aColorHigh;
float hash1( float v ) { vec3 p = fract( vec3( v ) * 0.1031 ); p += dot( p, p.yzx + 19.19 ); return fract( ( p.x + p.y ) * p.z ); }
float hash3( vec3 v ) { vec3 p = fract( v * vec3( 0.1031, 0.1030, 0.0973 ) ); p += dot( p, p.yxz + 33.33 ); return fract( ( p.xxy + p.yxx ) * p.zyx ).x; }
float valueNoise3( vec3 c ) {
  vec3 g = floor( c ), f = fract( c ); f = f * f * ( 3.0 - 2.0 * f );
  return mix(
    mix( mix( hash3( g ), hash3( g + vec3( 1, 0, 0 ) ), f.x ), mix( hash3( g + vec3( 0, 1, 0 ) ), hash3( g + vec3( 1, 1, 0 ) ), f.x ), f.y ),
    mix( mix( hash3( g + vec3( 0, 0, 1 ) ), hash3( g + vec3( 1, 0, 1 ) ), f.x ), mix( hash3( g + vec3( 0, 1, 1 ) ), hash3( g + vec3( 1, 1, 1 ) ), f.x ), f.y ), f.z );
}
// a 1D noise whose slope sign comes from a hash parity: a kinked, folded line (the curtain wobble)
float pickGradient( float h, float v ) { return mod( floor( h * 1e4 ), 2.0 ) < 0.5 ? v : -v; }
float lineNoise( float pt ) {
  float i = floor( pt ), f = pt - i, w = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 );
  return mix( pickGradient( hash1( i ), f ), pickGradient( hash1( i + 1.0 ), f - 1.0 ), w ) * 2.0;
}
float fractalVolume( vec3 p ) {
  float acc = ( 1.0 - valueNoise3( p ) ) + ( 1.0 - valueNoise3( p * 2.0 ) ) * 0.5 + ( 1.0 - valueNoise3( p * 4.0 ) ) * 0.25;
  return clamp( acc / 1.75, 0.0, 1.0 );
}
float density( vec3 p ) {
  float t = aTime * aSpeed;
  float nh = ( p.y - 50.0 ) / 75.0;
  vec3 sp = vec3( p.x, t * 2.0, p.z * 0.225 + t * 0.5 ) * 0.04;
  sp.x += aSeed * 17.3 + nh * 0.3 + cos( p.z * 0.005 ) * 5.5 + lineNoise( p.z * 0.1 + t * 2.0 ) * 0.02;
  sp.z += aSeed * 29.1;
  float base = fractalVolume( sp );
  vec3 sq = vec3( base, ( p.y - 50.0 ) * 0.006 + 0.48, base );
  sq.y += lineNoise( t + sp.z ) * 0.015 + lineNoise( -2.0 * t + sp.z ) * 0.015;
  return max( pow( 0.55 / max( length( sq ), 1e-7 ), 12.0 ) * cos( sp.x * 0.13 ), 0.0 );
}
void main() {
  vec2 uv = gl_FragCoord.xy / vec2( ${Pu.toFixed(1)}, ${Lu.toFixed(1)} );
  float az = ( uv.x - 0.5 ) * 2.0 * SKY_PI, el = uv.y * uv.y * 0.5 * SKY_PI;
  vec3 dir = vec3( cos( el ) * cos( az ), sin( el ), cos( el ) * sin( az ) );
  vec3 origin = vec3( 0.0, 10.0, 0.0 ) + dir * 10.0;
  vec3 inv = 1.0 / dir;
  vec3 tA = ( vec3( -250.0, 50.0, -500.0 ) - origin ) * inv, tB = ( vec3( 250.0, 125.0, 500.0 ) - origin ) * inv;
  vec3 tmin = min( tA, tB ), tmax = max( tA, tB );
  float near = max( max( tmin.x, tmin.y ), tmin.z ), far = min( min( tmax.x, tmax.y ), tmax.z );
  vec3 acc = vec3( 0.0 );
  if ( near > 0.0 && near < far ) {
    float stepLength = ( far - near ) / 48.0;
    float travel = near + stepLength * hash3( vec3( gl_FragCoord.xy, aTime * 13.0 ) ) * 0.25; // de-band
    for ( int i = 0; i < 48; i++ ) {
      vec3 p = origin + dir * travel;
      acc += mix( aColorBase, aColorHigh, ( p.y - 50.0 ) / 75.0 ) * density( p ) * stepLength;
      travel += stepLength;
    }
  }
  gl_FragColor = vec4( acc * 0.05 * aGain, 1.0 );
}
`,Pv={hour:17.2,sunElevation:58,sunSize:.9,clouds:.38,cloudScale:1,cloudSpeed:1,cloudOpacity:.9,moonPhase:11,moonElevation:54,moonSize:1.3,moonBrightness:1,moonTint:[1,.87,.62],stars:1.5,starDensity:.984,aurora:0,auroraSpeed:.65,auroraColorBase:"#59ff03",auroraColorHigh:"#00aaff",haze:1,aerialScale:1,turbidity:2.4,rayleigh:1.15,mieCoefficient:.0032,mieG:.8,below:"haze",seaLevel:0,groundColor:"#6b6450",seed:0,name:"Sky"};function Lv(i={}){const e={...Pv,...i};Tv();const t=new Float32Array(an*la*4),n=new Uint16Array(an*la*4),s=new wn(n,an,la,Bt,yn);s.name="Sky LUT",s.wrapS=In,s.wrapT=pn,s.magFilter=s.minFilter=Et,s.generateMipmaps=!1,s.colorSpace=ai,gh(s);const r=new H(0,.3,1).normalize(),a=new H(0,-.4,-1).normalize(),l=new $e(1,1,1),o=[0,0,0];let c=0;const h={uLut:{value:s},uAurora:{value:null},uSunDir:{value:r},uMoonDir:{value:a},uSunColor:{value:new H(1,1,1)},uMoonColor:{value:new $e},uGroundRad:{value:new H},uSeed:{value:new st},uSunAz:{value:0},uSunCosR:{value:0},uMoonCosR:{value:0},uMoonBrightness:{value:1},uMoonLevel:{value:0},uNight:{value:0},uStarDens:{value:.984},uStarBrightness:{value:1.5},uStarRot:{value:0},uTime:{value:0},uCloudTime:{value:0},uCloudCoverage:{value:.38},uCloudScale:{value:1},uCloudSpeed:{value:1},uCloudOpacity:{value:.9},uAuroraLevel:{value:0},uGain:{value:nr},uSeaLevel:{value:0}},u=new gn;u.name=e.name;const d=new Ot;d.setAttribute("position",new It([-1,-1,0,3,-1,0,-1,3,0],3)),d.boundingBox=new bn,d.boundingSphere=new _n(new H,0);const f=new Mn({name:"Sky backdrop",uniforms:h,vertexShader:Ev,fragmentShader:Av,depthWrite:!1,depthTest:!0,fog:!1}),g=new qt(d,f);g.name="Sky backdrop",g.frustumCulled=!1,g.renderOrder=1e9,g.raycast=()=>{};const v=new Mn({name:"Sky pre-pass",vertexShader:"void main() { gl_Position = vec4( 2.0, 2.0, 2.0, 1.0 ); }",fragmentShader:"void main() { gl_FragColor = vec4( 0.0 ); }",depthWrite:!1,depthTest:!1,colorWrite:!1}),m=new qt(d,v);m.name="Sky pre-pass",m.frustumCulled=!1,m.renderOrder=-1e9,m.raycast=()=>{};const p=new Xf(16777215,0,0);p.color.setRGB(.44,.57,1,Xt),p.name="Sky night fill",u.add(m,g,p);const y=new br(-1,1,1,-1,0,1),E=new Ot;E.setAttribute("position",new It([-1,-1,0,3,-1,0,-1,3,0],3));const _=new Mn({name:"Sky environment bake",uniforms:h,vertexShader:_h,fragmentShader:Rv,depthTest:!1,depthWrite:!1}),S={aTime:{value:0},aSpeed:{value:e.auroraSpeed},aSeed:{value:19.6},aGain:{value:1},aColorBase:{value:new $e},aColorHigh:{value:new $e}},w=new Mn({name:"Sky aurora bake",uniforms:S,vertexShader:_h,fragmentShader:Cv,depthTest:!1,depthWrite:!1}),R=new qt(E,_);R.frustumCulled=!1;const x=new eu;x.add(R);const T=new Map,P={env:0,aurora:0},k=new WeakSet;function z(ee){return{type:yn,format:Bt,magFilter:Et,minFilter:Et,generateMipmaps:!1,depthBuffer:!1,wrapS:ee,colorSpace:ai}}function K(ee,de,C){const Ae=ee.getRenderTarget(),Ge=ee.xr.enabled,A=ee.autoClear;ee.xr.enabled=!1,ee.autoClear=!1,R.material=de,ee.setRenderTarget(C),ee.render(x,y),ee.setRenderTarget(Ae),ee.xr.enabled=Ge,ee.autoClear=A}const N={lutMs:0,lutBakes:0,envBakes:0,auroraBakes:0};function Z(ee,de){gh(s),ee.toneMappingExposure=1-ue;let C=T.get(ee);C||(C={lutVersion:-1,env:-1,aurora:-1,envRT:null,auroraRT:null,pmrem:null,pmremRT:null},T.set(ee,C)),C.lutVersion!==s.version&&(ee.initTexture(s),C.lutVersion=s.version),h.uAuroraLevel.value>0&&(C.auroraRT||(C.auroraRT=new Nn(Pu,Lu,z(In))),C.aurora!==P.aurora&&(K(ee,w,C.auroraRT),C.aurora=P.aurora,N.auroraBakes++),h.uAurora.value=C.auroraRT.texture),k.has(de)&&(C.envRT||(C.envRT=new Nn(Du,Iu,z(In))),(C.env!==P.env||!C.pmremRT)&&(K(ee,_,C.envRT),C.pmrem?C.pmrem.fromEquirectangular(C.envRT.texture,C.pmremRT):(C.pmrem=new ll(ee),C.pmremRT=C.pmrem.fromEquirectangular(C.envRT.texture)),C.env=P.env,N.envBakes++),de.environment=C.pmremRT.texture,de.environmentIntensity=xe.envIntensity)}v.onBeforeRender=(ee,de)=>Z(ee,de);let ie=NaN,te=NaN,J=NaN,Y=NaN,ue=0,me=1,Be=0;const se={sun:null,hemi:null,targets:[]},He=new Rl(11584728,-1,e.aerialScale);He.name="Sky aerial perspective";const oe=new H,F=new $e,I={sky:new $e,ground:new $e,intensity:$t},D={direction:new H,color:new $e,intensity:0,isMoon:!1};function Q(){const ee=(Dn+1)*an*4,de=[0,1,2].map(Ae=>(o[Ae]*4+c*5*e.haze)*1e4),C=[r.x,r.y,r.z,nr,de[0],de[1],de[2],0,a.x,a.y,a.z,h.uMoonLevel.value*h.uNight.value];for(let Ae=0;Ae<C.length;Ae++)t[ee+Ae]=C[Ae]}function O(){const ee=Cl.toHalfFloat;for(let de=0;de<t.length;de++)n[de]=ee(t[de]);s.needsUpdate=!0}function re(ee,de){const Ae=(((Math.atan2(ee.z,ee.x)-h.uSunAz.value)/(2*$t)+.5)%1+1)%1*an-.5,Ge=Math.asin(Math.min(Math.max(ee.y,-1),1)),A=Math.sqrt(Math.min(Math.max((Ge-Ns)/($t/2-Ns),0),1))*(Dn-1),M=Math.floor(Ae),B=Ae-M,q=Math.min(Math.floor(A),Dn-2),W=A-q,pe=(M+an)%an,le=(M+1)%an,ae=[0,0,0];for(let fe=0;fe<3;fe++){const we=(ye,De)=>t[(De*an+ye)*4+fe];ae[fe]=(we(pe,q)*(1-B)+we(le,q)*B)*(1-W)+(we(pe,q+1)*(1-B)+we(le,q+1)*B)*W}return de.set(ae[0],ae[1],ae[2])}function ve(ee,de=new $e){const C=oe.copy(ee);C.y=Math.max(C.y,0),C.normalize();const Ae=re(C,new H),Ge=C.dot(a),A=h.uMoonLevel.value*h.uNight.value,M=(1+Ge*Ge)*Math.pow(Math.max(a.y,0),.4)*(vi(-.05,.22,C.y)*.8+.2)*A*.09;Ae.x+=.055*M,Ae.y+=.075*M,Ae.z+=.13*M;const B=Math.max(Ae.x,Ae.y,Ae.z),W=(Math.min(B,.75)+1.65*(1-Math.exp(-Math.max(B-.75,0)/1.65)))/Math.max(B,1e-5)*nr;return de.setRGB(Ae.x*W,Ae.y*W,Ae.z*W,Xt)}function Ie(){for(let C=0;C<3;C++)o[C]=mv[C]*e.rayleigh;c=e.mieCoefficient*e.turbidity*.00195,h.uSunCosR.value=Math.cos(e.sunSize*$t/180),h.uMoonCosR.value=Math.cos(e.moonSize*$t/180),h.uMoonBrightness.value=e.moonBrightness,h.uMoonColor.value.setRGB(...e.moonTint,Gt),h.uStarDens.value=e.starDensity,h.uStarBrightness.value=e.stars,h.uCloudCoverage.value=e.clouds,h.uCloudScale.value=e.cloudScale,h.uCloudSpeed.value=e.cloudSpeed,h.uCloudOpacity.value=e.cloudOpacity,h.uSeaLevel.value=e.seaLevel;const ee=e.seed||0;h.uSeed.value.set(ee?ee*.6180339%1*97:0,ee?ee*.4142135%1*89:0),S.aSpeed.value=e.auroraSpeed,S.aSeed.value=19.6+ee*3.7,S.aGain.value=Math.max(e.aurora,0),S.aColorBase.value.set(e.auroraColorBase),S.aColorHigh.value.set(e.auroraColorHigh),He.far=e.aerialScale;const de=e.below==="sea";if(!!f.defines.SKY_SEA!==de||!!_.defines.SKY_SEA!==de)for(const C of[f,_])de?C.defines.SKY_SEA="":delete C.defines.SKY_SEA,C.needsUpdate=!0;ie=NaN,P.aurora++}function Se(ee){ee=(ee%24+24)%24,te=ee,ph(ee,e.sunElevation,r),ph(ee-e.moonPhase,e.moonElevation,a);const de=9*$t/180,C=Math.cos(de),Ae=Math.sin(de),Ge=a;Ge.set(Ge.x*C+Ge.z*Ae,Ge.y,Ge.z*C-Ge.x*Ae),h.uSunAz.value=Math.atan2(r.z,r.x),h.uStarRot.value=ee/24*$t*2;const A=r.y,M=Math.hypot(r.x,r.z),B=si+Cu,q=2*B*A,W=B*B-Is*Is,pe=(-q+Math.sqrt(Math.max(q*q-4*W,0)))/2,le=24,ae=pe/le;let fe=0,we=0;for(let En=0;En<le;En++){const An=(En+.5)*ae,Pi=B+A*An,ss=M*An,X=Math.hypot(ss,Pi)-si;fe+=Math.exp(-X/Bl)*ae,we+=Math.exp(-X/kl)*ae}const ye=[0,1,2].map(En=>Math.exp(-(o[En]*fe+c*we))),De=vi(-.02,.01,A),be=Math.max(ye[0],1e-6);l.setRGB(ye[0]/be,ye[1]/be,ye[2]/be,Xt);const Ve=be*De;h.uSunColor.value.set(ye[0]*De,ye[1]*De,ye[2]*De);const We=Kn.clamp((1-r.dot(a))*.5,0,1);if(h.uMoonLevel.value=We*vi(-.02,.25,a.y),h.uNight.value=vi(.04,-.14,A),me=vi(-.06,.18,A),Be=vi(0,.3,a.y)*We,ue=1-vi(-.14,-.02,A),!(Math.abs(A-ie)<=1e-6)){const En=performance.now();Mv(t,A,o,c,e.mieG),N.lutMs=+(performance.now()-En).toFixed(1),N.lutBakes++,ie=A}Q(),O();const Je=e.aurora>0?Kn.clamp((-.06-A)/.14,0,1):0;h.uAuroraLevel.value=Je,xe.sunIntensity=_v*Ve;const V=Be*(1-me),Oe=xv*V;D.isMoon=Oe>xe.sunIntensity,D.isMoon?(D.direction.copy(a),D.color.setRGB(...Jr,Xt),D.intensity=Oe):(D.direction.copy(r),D.color.copy(l),D.intensity=xe.sunIntensity),p.intensity=$t*nr*.054*(.4+Be)*(1-me),xe.envIntensity=1;const he=r.x,Ee=r.z,Te=Math.hypot(he,Ee)||1,Me=.16,Ze=Math.sqrt(1-Me*Me),qe=.5,lt=Math.sqrt(1-qe*qe),ct=ve(new H(0,1,0)),yt=ve(new H(he/Te*Ze,Me,Ee/Te*Ze)),Nt=ve(new H(-he/Te*lt,qe,-Ee/Te*lt));I.sky.setRGB(ct.r*.42+yt.r*.34+Nt.r*.24,ct.g*.42+yt.g*.34+Nt.g*.24,ct.b*.42+yt.b*.34+Nt.b*.24,Xt);const tn=F.set(e.groundColor),Tn=xe.sunIntensity*Math.max(A,0)/$t,Fn=D.isMoon?D.intensity*Math.max(a.y,0)/$t:0,hn=p.intensity/$t;I.ground.setRGB(tn.r*(Tn*l.r+Fn*Jr[0]+I.sky.r+hn*.44),tn.g*(Tn*l.g+Fn*Jr[1]+I.sky.g+hn*.57),tn.b*(Tn*l.b+Fn*Jr[2]+I.sky.b+hn*1),Xt),h.uGroundRad.value.set(I.ground.r,I.ground.g,I.ground.b);const Ci=ve(new H(he,0,Ee)),rn=ve(new H(-he,0,-Ee));return He.color.setRGB((Ci.r+rn.r)/2,(Ci.g+rn.g)/2,(Ci.b+rn.b)/2,Xt),P.env++,Ne(),xe}function Ne(){const ee=se.sun;if(ee){const C=Math.max(ee.position.distanceTo(ee.target.position),1)||50;ee.position.copy(ee.target.position).addScaledVector(D.direction,C),ee.color.copy(D.color),ee.intensity=D.intensity,ee.visible=!0}se.hemi&&(se.hemi.color.copy(I.sky),se.hemi.groundColor.copy(I.ground),se.hemi.intensity=I.intensity);const de=F.copy(D.color).multiplyScalar(D.intensity);for(const C of se.targets)C?.setSun?.(D.direction,de)}function Ce(ee){if(ee===J)return;J=ee,h.uTime.value=ee,h.uCloudTime.value=ee,h.uAuroraLevel.value>0&&(S.aTime.value=ee,P.aurora++);const de=Math.floor(ee/2);(de!==Y||h.uAuroraLevel.value>0)&&(Y=de,P.env++)}function L(ee={}){return Object.assign(e,ee),Ie(),Se("hour"in ee||Number.isNaN(te)?e.hour:te),xe}function ne(ee,{sun:de=null,hemi:C=null,targets:Ae=[],background:Ge=!0,environment:A=!0,fog:M=!0}={}){return u.parent||ee.add(u),Ge&&(ee.background=null),A&&k.add(ee),M&&(ee.fog=He),se.sun=de||se.sun,se.hemi=C||se.hemi,Ae.length&&(se.targets=Ae),Ne(),xe}function _e(){for(const ee of T.values())ee.envRT?.dispose(),ee.auroraRT?.dispose(),ee.pmremRT?.dispose(),ee.pmrem?.dispose();T.clear();for(const ee of[f,v,_,w])ee.dispose();d.dispose(),E.dispose(),s.dispose()}const xe={object:u,backdrop:g,fill:p,fog:He,lut:s,stats:N,ambient:I,light:D,sunDirection:r,sunColor:l,moonDirection:a,sunIntensity:0,envIntensity:1,get hour(){return te},get options(){return{...e}},setHour:Se,update:Ce,set:L,applyTo:ne,inscatter:ve,dispose:_e};return Ie(),Se(e.hour),Ce(0),xe}const Ke=(i,e,t)=>{let n=(t-i)/(e-i);return n=n<0?0:n>1?1:n,n*n*(3-2*n)},Dt=(i,e,t)=>i<e?e:i>t?t:i;function fl(i){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Gi(i,e,t){let n=Math.imul(i,374761393)+Math.imul(e,668265263)+t|0;return n=Math.imul(n^n>>>13,1274126177),n=Math.imul(n^n>>>16,2246822519),(n^n>>>13)>>>0}const ir=new Float32Array(32),sr=new Float32Array(32);for(let i=0;i<32;i++)ir[i]=Math.cos((i+.37)/32*Math.PI*2),sr[i]=Math.sin((i+.37)/32*Math.PI*2);let Vi=0;function Dv(i,e){const t=1/i;return(n,s)=>{const r=n*t,a=s*t,l=Math.floor(r),o=Math.floor(a);let c=r-l,h=a-o;c=c*c*(3-2*c),h=h*h*(3-2*h);const u=Gi(l,o,e)/4294967296,d=Gi(l+1,o,e)/4294967296,f=Gi(l,o+1,e)/4294967296,g=Gi(l+1,o+1,e)/4294967296,v=u+(d-u)*c,m=v+(f+(g-f)*c-v)*h;return Vi===0?m:.5+(m-.5)*Dt((i/Vi-1.5)/1.5,0,1)}}function Iv(i,e){const t=1/i;return(n,s)=>{const r=n*t,a=s*t,l=Math.floor(r),o=Math.floor(a),c=r-l,h=a-o,u=Gi(l,o,e)&31,d=Gi(l+1,o,e)&31,f=Gi(l,o+1,e)&31,g=Gi(l+1,o+1,e)&31,v=ir[u]*c+sr[u]*h,m=ir[d]*(c-1)+sr[d]*h,p=ir[f]*c+sr[f]*(h-1),y=ir[g]*(c-1)+sr[g]*(h-1),E=c*c*c*(c*(c*6-15)+10),_=h*h*h*(h*(h*6-15)+10),S=v+(m-v)*E+(p-v+(v-m-p+y)*E)*_;return Vi===0?.5+S*.95:.5+S*.95*Dt((i/Vi-1.5)/1.5,0,1)}}const li=i=>{const e=1-Math.abs(2*i-1);return e*e},Cs=.4,xh=1+Cs-Math.sqrt(1+Cs*Cs),_o=i=>{const e=2*i-1,t=(1+Cs-Math.sqrt(e*e+Cs*Cs)-xh)/(1-xh);return t*t},Fu=`
float shoreStep(float a, float b, float x) { float t = clamp((x - a) / (b - a), 0.0, 1.0); return t * t * (3.0 - 2.0 * t); }
float shoreHash(vec2 p) { vec3 q = fract(vec3(p.xyx) * 0.1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
float shoreNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  return mix(mix(shoreHash(i), shoreHash(i + vec2(1.0, 0.0)), u.x), mix(shoreHash(i + vec2(0.0, 1.0)), shoreHash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float shoreField(vec2 p) { return 0.5 + (shoreNoise(p) * 0.67 + shoreNoise(p * 2.03 + 17.1) * 0.33 - 0.5) * 0.85; }
vec4 shoreSample(vec2 xz, float bedH, float dS, float time) {
  float dd = max(-bedH, 0.0);
  float shoreNear = shoreStep(45.0, 3.0, dS);
  float nW = shoreField(xz / 48.0);
  float nZ = shoreField(xz / 12.0 + 31.7);
  float dr = time * 0.55;
  vec2 q = vec2(xz.x + dr, xz.y - dr * 0.62);
  float tW = shoreField(q / 21.5 + 7.3);
  float tZ = shoreField(q / 5.4 + 53.1);
  float mag = exp(-dd / 1.45);
  float p = dd * 3.1 + time * 1.30 + (nW - 0.5) * 0.9 + (tW - 0.5) * 0.75;
  float sw = sin(p + cos(p) * (1.0 - mag)) * -0.5 + 0.5;
  float shape = pow(clamp(mix(tZ, nZ, 0.32), 0.0, 1.0), 1.35);
  float shorePatch = mix(0.24, 1.28, shape);
  float swing = sqrt(mag) * shorePatch * shoreNear * 0.36;
  float envelope = swing * (1.0 - 0.30);
  float level = (sw - shoreStep(0.22, 0.0, dd) * 0.30) * swing;
  float trail = (sin(p - 3.14159265 * 0.85) * 0.5 + 0.5) * mag * shorePatch * shoreNear;
  float fray = (shoreNoise(vec2(xz.x - dr * 1.4, xz.y + dr * 0.4) / 1.75) - 0.5) * 0.075 * shoreNear;
  return vec4(level, trail, envelope, fray);
}
float shoreLip(float dh) {
  float e = clamp(1.0 - (dh + 0.02) * 5.0, 0.0, 1.0);
  return sqrt(max(1.0 - e * e, 0.0)) * shoreStep(0.55, 0.12, dh) * shoreStep(-0.07, 0.015, dh) * 0.085;
}
float shoreFoam(float trail, float dh) {
  float dry = shoreStep(-0.045, 0.012, dh);
  float edge = dry * shoreStep(0.13, 0.03, dh);
  return clamp(max(trail * shoreStep(0.45, 0.03, dh) * dry * 0.55, edge), 0.0, 1.0);
}
`;let xo=null;function Ou(){if(xo)return xo;const i=256,e=i*i,t=new Float32Array(e*4),n=fl(90210),s=[0,0,0],r=v=>{const m=new Float32Array(v*v),p=new Float32Array(v*v);for(let y=0;y<m.length;y++){const E=n()*Math.PI*2;m[y]=Math.cos(E),p[y]=Math.sin(E)}return(y,E)=>{const _=y*v,S=E*v,w=Math.floor(_),R=Math.floor(S),x=_-w,T=S-R,P=w%v,k=R%v,z=(P+1)%v,K=(k+1)%v,N=k*v+P,Z=k*v+z,ie=K*v+P,te=K*v+z,J=m[N]*x+p[N]*T,Y=m[Z]*(x-1)+p[Z]*T,ue=m[ie]*x+p[ie]*(T-1),me=m[te]*(x-1)+p[te]*(T-1),Be=x*x*x*(x*(x*6-15)+10),se=T*T*T*(T*(T*6-15)+10),He=30*x*x*(x*(x-2)+1),oe=30*T*T*(T*(T-2)+1),F=J+Be*(Y-J),I=ue+Be*(me-ue),D=m[N]+Be*(m[Z]-m[N])+He*(Y-J),Q=m[ie]+Be*(m[te]-m[ie])+He*(me-ue),O=p[N]+Be*(p[Z]-p[N]),re=p[ie]+Be*(p[te]-p[ie]);s[0]=F+se*(I-F),s[1]=(D+se*(Q-D))*v,s[2]=(O+se*(re-O)+oe*(I-F))*v}},a=(v,m)=>{for(const p of v){const y=r(p),E=1/p;for(let _=0;_<i;_++)for(let S=0;S<i;S++)y(S/i,_/i),m((_*i+S)*4,E)}};a([8,16,32,64],(v,m)=>{t[v]+=s[1]*m,t[v+1]+=s[2]*m,t[v+2]+=s[0]*m}),a([2,4,8,16],(v,m)=>{t[v+3]+=s[0]*m});let l=0,o=1/0,c=-1/0,h=1/0,u=-1/0;for(let v=0;v<e;v++){const m=v*4;l+=t[m]*t[m]+t[m+1]*t[m+1],o=Math.min(o,t[m+2]),c=Math.max(c,t[m+2]),h=Math.min(h,t[m+3]),u=Math.max(u,t[m+3])}const d=1/(3*Math.sqrt(l/(2*e))),f=new Uint8Array(e*4);for(let v=0;v<e;v++){const m=v*4;f[m]=Math.round((Dt(t[m]*d,-1,1)*.5+.5)*255),f[m+1]=Math.round((Dt(t[m+1]*d,-1,1)*.5+.5)*255),f[m+2]=Math.round((t[m+2]-o)/(c-o)*255),f[m+3]=Math.round((t[m+3]-h)/(u-h)*255)}const g=new wn(f,i,i,Bt,Vt);return g.wrapS=g.wrapT=In,g.magFilter=Et,g.minFilter=zn,g.generateMipmaps=!0,g.anisotropy=8,g.name="terrain-detail",g.needsUpdate=!0,xo=g,g}const vh={island:{size:1400,sea:!0,swash:!0},coast:{size:800,sea:!0,swash:!0},hills:{size:800,sea:!1,swash:!1},valley:{size:800,sea:!0,swash:!1}};function Nv(i,e){const t=i.size,n=t/2200,s=i.heightScale,r=J=>t/J,a=e(r(3)),l=e(r(3)),o=e(r(9)),c=e(r(9)),h=e(r(27)),u=e(r(27)),d=e(r(4)),f=e(r(7)),g=e(r(13)),v=e(r(26)),m=e(r(8)),p=e(r(16)),y=e(r(33)),E=e(r(67)),_=e(1/5),S=e(1/11),w=e(1/23),R=e(1/47),x=e(r(9)),T=e(r(23)),P=e(r(21)),k=Math.cos(-.55),z=Math.sin(-.55),K=Math.cos(.62),N=Math.sin(.62),Z=[{x:330*n,z:-140*n,r:720*n,core:120*n,p:1.25,h:255*n*s,dome:120*n*s},{x:-80*n,z:300*n,r:480*n,core:90*n,p:1.5,h:130*n*s,dome:55*n*s}],ie=t/2,te=-22;return{sandTop:3.3,treeLine:190*n*s,seaFloor:te,rampRate:9/700,depoTop:17,macro(J,Y,ue){const me=J+(a(J,Y)-.5)*400*n+(o(J,Y)-.5)*300*n+(h(J,Y)-.5)*130*n,Be=Y+(l(J,Y)-.5)*400*n+(c(J,Y)-.5)*300*n+(u(J,Y)-.5)*130*n,se=(me*k-Be*z)/(860*n),He=(me*z+Be*k)/(590*n),oe=d(J,Y),F=f(J,Y),I=E(J,Y);let D=1-Math.hypot(se,He)+(.4*oe+.26*F+.2*g(J,Y)+.14*v(J,Y)-.5)*.78;D-=Ke(.7,.97,Math.max(Math.abs(J),Math.abs(Y))/ie)*.7;const Q=D-.18,O=Q*n*700,re=Ke(.53,.33,.62*oe+.38*F),ve=-1.5+O*(145-88*re)/700,Ie=(O+36.4)/21,Se=2.2*re*Math.exp(-Ie*Ie)*Ke(.3,.62,P(J,Y)),Ne=Math.max(te,ve+Se),Ce=Ke(0,.14,Q),L=.52*m(J,Y)+.27*p(J,Y)+.14*y(J,Y)+.07*I,ne=1-Math.pow(1-Dt(L,0,1),1.7),_e=46*n*s*ne*(.35+.65*Ce),xe=(J*K+Y*N)/t*.75+.31,ee=(-J*N+Y*K)/t*2.4+.77;let de=0,C=-1;for(let A=0;A<2;A++){const M=Z[A],B=Math.pow(Ke(M.r,M.core,Math.hypot(me-M.x,Be-M.z)),M.p);B<=.003||(C<0&&(C=Math.pow(.58*_o(_(xe,ee))+.32*_o(S(xe,ee))+.07*_o(w(xe,ee))+.03*li(R(xe,ee)),1.35)),de=Math.max(de,B*(C*M.h+B*M.dome)))}const Ae=2.3+4.5*Ce+_e+de*Ce+(I-.5)*2.4*(.3+.7*Ce),Ge=Math.max(Ne+(Ae-Ne)*Ke(-12.6,29.4,O),te);ue[0]=Ge,ue[1]=O,ue[2]=re,ue[3]=Dt(.1+.66*Ke(40*n*s,210*n*s,Ge)+.3*(.6*x(J,Y)+.4*T(J,Y))-.15+Ke(2,-3,Ge),.05,1),ue[4]=0}}}function Uv(i,e,t){const n=i.size,s=i.heightScale,r=e(n*.5),a=e(n*.2),l=e(n*.07),o=e(23),c=e(150),h=e(150),u=e(41),d=e(41),f=e(n*.45),g=e(110),v=e(21),m=e(8.5),p=e(13),y=e(4.7),E=e(n*.38),_=e(n*.17),S=e(n*.08),w=e(31),R=e(n*.33),x=e(n*.14),T=e(70),P=e(105),k=e(170),z=e(95),K=e(64),N=e(29),Z=e(140),ie=e(57),te=e(45),J=e(17),Y=n*.04,ue=oe=>Y+(r(oe,0)-.5)*n*.5+(a(oe,31.7)-.5)*n*.16+(l(oe,7.1)-.5)*n*.04+(o(oe,3.3)-.5)*7,me=(oe,F)=>Math.max(14,36+(f(oe,F)-.5)*44+(g(oe,F)-.5)*16+(te(oe,F)-.5)*12)*s,Be=(oe,F)=>Ke(.52,.4,.62*oe+.38*F),se=oe=>Ke(.3,.7,1-Be(r(oe,0),a(oe,31.7))),He=[];{const oe=[];for(let I=-n*.4;I<=n*.4;I+=10){const D=se(I);D>.85&&oe.push({x:I,k:D+t()*.1})}oe.sort((I,D)=>D.k-I.k);const F=1+Math.floor(t()*2.6);for(const I of oe){if(He.length>=F)break;if(He.some(Q=>Math.abs(Q.x-I.x)<140))continue;const D=ue(I.x);He.push({x:I.x,z:D+30+t()*40,r:8+t()*8,h:(.5+t()*.4)*me(I.x,D-30),ph:t()*6.28})}}return{sandTop:3.3,treeLine:400,seaFloor:-26,rampRate:1/22,depoTop:12,stacks:He,macro(oe,F,I){const D=oe+(c(oe,F)-.5)*34+(u(oe,F)-.5)*11,Q=F+(h(oe,F)-.5)*34+(d(oe,F)-.5)*11,O=ue(D)-Q,re=Ke(5,220,Math.abs(O)),ve=D+(k(oe,F)-.5)*160*re,Ie=Be(r(ve,0),a(ve,31.7)),Se=Ke(.3-.25*re,.7+.25*re,1-Ie),Ne=me(oe,F),Ce=Ne/2.5,L=1-Math.pow(1-Dt(.5*E(oe,F)+.28*_(oe,F)+.15*S(oe,F)+.07*w(oe,F),0,1),1.6),ne=.7*li(R(oe,F))+.3*li(x(oe,F)),_e=(L*30*Ke(20,260,O)+ne*110*Ke(n*.18,n*.7,O))*s,xe=(O+42)/15,ee=1.8*Math.exp(-xe*xe)*Ke(.3,.62,P(oe,F)),de=Math.max(-26,-.25+O/30-4*(O/120)*(O/120)+ee),C=.9+O*.06+(Ne-.9-O*.06)*Ke(30,260,O),Ae=de+(C-de)*Ke(-8,8,O),Ge=.25+1.5*Ke(.25,.75,z(oe,.5)),A=((li(v(oe+O*.35,.5))-.35)*8+(m(oe-O*.2,.5)-.5)*3.5)*Ge+(K(oe,.5)-.5)*34+(N(oe,.5)-.5)*12,M=(O-A)/Ce,B=Ke(.56,.7,Z(oe,.5)),q=1+1.6*ie(oe,F);let W=.1*Ke(-.7,.15,M)+.9*Ke(.05,q,M);W+=(.42*Ke(-.6,.5,M)+.58*Ke(1.4,2.8+q,M)-W)*B,W+=(li(J(oe,F))-.45)*.1*Ke(.4,1,M)*Ke(2.6+q,1.2,M);const le=-.75+((p(oe,F)-.5)*1.3+(y(oe,F)-.5)*.7)+Math.min(0,O+24)*.5,ae=Math.max(-26,-.4+(Ne+.4)*W+(le+.4)*(1-Ke(-.7*Ce,.05*Ce,O-A))),fe=B*Ke(-.3,.6,M)*Ke(3.5,1.5,M);let we=Ae+(ae-Ae)*Se+_e,ye=0;for(let De=0;De<He.length;De++){const be=He[De],Ve=oe-be.x,We=F-be.z,Je=Math.hypot(Ve,We);if(Je>be.r*2.2)continue;const V=Math.atan2(We,Ve),Oe=Je*(1+.16*Math.sin(3*V+be.ph)+.08*Math.sin(7*V-be.ph)),he=-.6+(be.h+.6)*(.12*Ke(be.r*1.9,be.r*1.1,Oe)+.88*Ke(be.r,be.r*.55,Oe));he>we&&(we=he),ye=Math.max(ye,Ke(be.r*2,be.r,Je))}I[0]=we,I[1]=O,I[2]=Ie,I[3]=Dt(Math.max(ye,.28+.68*Se*(1-.6*fe)*Ke(-30,-5,O)*Ke(Ce+45,Ce+5,O))+.2*(T(oe,F)-.5)+.45*Ke(80*s,150*s,we)+Ke(2,-3,we),.05,1),I[4]=Math.max(Se*Ke(8,-2,O)*Ke(2.5,.5,we),ye*Ke(2.5,.5,we))}}}function Fv(i,e){const t=i.size,n=i.heightScale,s=e(t*.5),r=e(t*.23),a=e(t*.11),l=e(t*.05),o=e(19),c=e(t*.32),h=e(t*.14),u=e(t*.35),d=e(t*.35),f=e(80);return{sandTop:0,treeLine:400,seaFloor:0,rampRate:0,depoTop:0,macro(g,v,m){const p=g+(u(g,v)-.5)*t*.18,y=v+(d(g,v)-.5)*t*.18,E=.5*s(p,y)+.27*r(p,y)+.15*a(g,v)+.08*l(g,v),_=1-Math.pow(1-Dt((E-.18)/.66,0,1),1.7),S=(.6*li(c(p,y))+.4*li(h(g,v)))*Ke(.4,.75,E),w=7+(_*74+S*30+(o(g,v)-.5)*2.4)*n;m[0]=w,m[1]=1e4,m[2]=0,m[3]=Dt(.22+.5*Ke(55*n,95*n,w)+.25*(f(g,v)-.5),.05,1),m[4]=0}}}function Ov(i,e){const t=i.size,n=i.heightScale,s=e(t*.8),r=e(t*.27),a=e(170),l=e(57),o=e(t*.3),c=e(90),h=e(t*.3),u=e(t*.13),d=e(t*.06),f=e(29),g=e(t*.22),v=e(t*.09),m=e(t*.04),p=e(70),y=_=>(s(_,0)-.5)*t*.26+(r(_,.5)-.5)*t*.08,E=_=>y(_)+(a(_,.25)-.5)*80+(l(_,.75)-.5)*20;return{sandTop:1.1,treeLine:125*n,seaFloor:-3,rampRate:0,depoTop:0,macro(_,S,w){const R=Math.abs(S-y(_)),x=70+(o(_,0)-.5)*50,T=Math.pow(Ke(x,x+290,R),1.15)*120,P=(.5*li(g(_,S))+.32*li(v(_,S))+.18*li(m(_,S)))*95*Ke(x+60,x+300,R),k=(.5*h(_,S)+.27*u(_,S)+.15*d(_,S)+.08*f(_,S)-.5)*26*Ke(x*.6,x+80,R),z=2.4+(c(_,S)-.5)*1.4+(T+P+k)*n;w[0]=z,w[1]=Math.abs(S-E(_))-10,w[2]=0,w[3]=Dt(.2+.72*Ke(45*n,110*n,z)+.2*(p(_,S)-.5),.05,1),w[4]=0},post(_,S,w){const R=Math.abs(S-E(_)),x=10;if(R>60)return w;const T=R<x?-1.7+R/x*(R/x)*2.05:.35+(R-x)*.09;return Math.min(w,T)}}}function Bv(i,e,t,n,s){const r=i*i,a=.03,l=.012,o=.02,c=.6,h=.3,u=.5,d=9.81,f=.15,g=6,v=.06,m=.1;let p=new Float32Array(r),y=new Float32Array(r),E=new Float32Array(r),_=new Float32Array(r);const S=new Float32Array(r),w=new Float32Array(r),R=new Float32Array(r),x=new Float32Array(r),T=new Float32Array(r),P=new Float32Array(r),k=new Float32Array(r),z=new Float32Array(r),K=new Float32Array(r),N=new Float32Array(r),Z=new Float32Array(r),ie=new Float32Array(r);for(let se=0;se<r;se++){const He=s[se];N[se]=.55+He*He*2.6,Z[se]=Math.pow(1-He,1.5)*f*a*e,ie[se]=1-He*.92}const te=a*d/e,J=i-1,Y=e,ue=e*Math.SQRT2,me=a/e,Be=1/(2*e);for(let se=0;se<t;se++){for(let oe=0;oe<i;oe++){const F=oe*i,I=(oe>0?oe-1:0)*i,D=(oe<J?oe+1:J)*i;for(let Q=0;Q<i;Q++){const O=F+Q,re=F+(Q>0?Q-1:0),ve=F+(Q<J?Q+1:J),Ie=n[O]+p[O];let Se=w[O]+(Ie-n[re]-p[re])*te;Se<0&&(Se=0);let Ne=R[O]+(Ie-n[ve]-p[ve])*te;Ne<0&&(Ne=0);let Ce=x[O]+(Ie-n[I+Q]-p[I+Q])*te;Ce<0&&(Ce=0);let L=T[O]+(Ie-n[D+Q]-p[D+Q])*te;L<0&&(L=0);const ne=Se+Ne+Ce+L;let _e=ne>1e-6?p[O]/(ne*a):1;_e>1&&(_e=1),w[O]=Se*_e,R[O]=Ne*_e,x[O]=Ce*_e,T[O]=L*_e}}for(let oe=0;oe<i;oe++){const F=oe*i,I=(oe>0?oe-1:0)*i,D=(oe<J?oe+1:J)*i,Q=oe<1||oe>i-2;for(let O=0;O<i;O++){const re=F+O,ve=F+(O>0?O-1:0),Ie=F+(O<J?O+1:J),Se=I+O,Ne=D+O,Ce=p[re];let L=Ce+(R[ve]+w[Ie]+T[Se]+x[Ne]-w[re]-R[re]-x[re]-T[re])*a;L<0&&(L=0),y[re]=Q||O<1||O>i-2?0:L*(1-o*a)+l*a;let ne=(Ce+L)*.5;ne<1e-4&&(ne=1e-4);let _e=(R[ve]-w[re]+R[re]-w[Ie])*.5/(ne*e),xe=(T[Se]-x[re]+T[re]-x[Ne])*.5/(ne*e);const ee=Math.sqrt(_e*_e+xe*xe);if(ee>g){const de=g/ee;_e*=de,xe*=de}P[re]=_e,k[re]=xe}}for(let oe=0;oe<i;oe++){const F=oe*i,I=(oe>0?oe-1:0)*i,D=(oe<J?oe+1:J)*i;for(let Q=0;Q<i;Q++){const O=F+Q,re=(n[F+(Q<J?Q+1:J)]-n[F+(Q>0?Q-1:0)])*Be,ve=(n[D+Q]-n[I+Q])*Be,Ie=Math.sqrt(re*re+ve*ve);let Se=Ie/Math.sqrt(Ie*Ie+1);Se<.012&&(Se=.012);let Ne=y[O]*4;Ne>1&&(Ne=1);const Ce=c*Se*Math.sqrt(P[O]*P[O]+k[O]*k[O])*Ne,L=E[O];let ne=Ce>L?(Ce-L)*h*a*ie[O]:0;ne>v&&(ne=v);let _e=L>Ce?(L-Ce)*u*a:0;_e>m&&(_e=m),z[O]=n[O]+_e-ne,S[O]=L+ne-_e,K[O]+=_e}}for(let oe=0;oe<i;oe++)for(let F=0;F<i;F++){const I=oe*i+F;let D=F-P[I]*me,Q=oe-k[I]*me;D=D<0?0:D>J?J:D,Q=Q<0?0:Q>J?J:Q;const O=D|0,re=Q|0,ve=D-O,Ie=Q-re,Se=O<J?O+1:J,Ne=re<J?re+1:J,Ce=S[re*i+O],L=S[re*i+Se],ne=S[Ne*i+O],_e=S[Ne*i+Se];_[I]=(Ce+(L-Ce)*ve)*(1-Ie)+(ne+(_e-ne)*ve)*Ie}for(let oe=0;oe<i;oe++){const F=oe*i,I=(oe>0?oe-1:0)*i,D=(oe<J?oe+1:J)*i;for(let Q=0;Q<i;Q++){const O=F+Q,re=Q>0?Q-1:0,ve=Q<J?Q+1:J,Ie=z[O],Se=N[O],Ne=Z[O];let Ce=0,L,ne;L=F+re,ne=(z[L]-Ie)/Y,ne>N[L]?Ce+=(ne-N[L])*Z[L]:-ne>Se&&(Ce-=(-ne-Se)*Ne),L=F+ve,ne=(z[L]-Ie)/Y,ne>N[L]?Ce+=(ne-N[L])*Z[L]:-ne>Se&&(Ce-=(-ne-Se)*Ne),L=I+Q,ne=(z[L]-Ie)/Y,ne>N[L]?Ce+=(ne-N[L])*Z[L]:-ne>Se&&(Ce-=(-ne-Se)*Ne),L=D+Q,ne=(z[L]-Ie)/Y,ne>N[L]?Ce+=(ne-N[L])*Z[L]:-ne>Se&&(Ce-=(-ne-Se)*Ne),L=I+re,ne=(z[L]-Ie)/ue,ne>N[L]?Ce+=(ne-N[L])*Z[L]:-ne>Se&&(Ce-=(-ne-Se)*Ne),L=D+ve,ne=(z[L]-Ie)/ue,ne>N[L]?Ce+=(ne-N[L])*Z[L]:-ne>Se&&(Ce-=(-ne-Se)*Ne),L=D+re,ne=(z[L]-Ie)/ue,ne>N[L]?Ce+=(ne-N[L])*Z[L]:-ne>Se&&(Ce-=(-ne-Se)*Ne),L=I+ve,ne=(z[L]-Ie)/ue,ne>N[L]?Ce+=(ne-N[L])*Z[L]:-ne>Se&&(Ce-=(-ne-Se)*Ne),n[O]=Ie+(Ce>.22?.22:Ce<-.22?-.22:Ce)}}let He=p;p=y,y=He,He=E,E=_,_=He}return{height:n,water:p,sediment:K}}const Ht=(i,e,t)=>{const n=new $e().setRGB(i,e,t,Gt);return`vec3(${n.r.toFixed(5)}, ${n.g.toFixed(5)}, ${n.b.toFixed(5)})`},Bu=`
float tStep(float a, float b, float x) { float t = clamp((x - a) / (b - a), 0.0, 1.0); return t * t * (3.0 - 2.0 * t); }
vec4 tDet(vec2 p) { vec4 d = texture2D(uTerrDetail, p); d.xy = d.xy * 2.0 - 1.0; return d; }
// triplanar tap: xyz = world-space gradient of the tile's relief, w = relief. stretch < 1 elongates the
// side projections vertically (joints and flutes run down a face, not across it)
vec4 rkTri(vec3 p, vec3 w, float period, float stretch) {
  vec4 ax = tDet(vec2(p.z, p.y * stretch) / period);
  vec4 ay = tDet(p.xz / period + 0.37);
  vec4 az = tDet(vec2(p.x, p.y * stretch) / period + 0.71);
  vec3 g = w.x * vec3(0.0, ax.y * stretch, ax.x) + w.y * vec3(ay.x, 0.0, ay.y) + w.z * vec3(az.x, az.y * stretch, 0.0);
  return vec4(g, w.x * ax.z + w.y * ay.z + w.z * az.z);
}
vec3 rkPerturb(vec3 N, vec3 g) { return normalize(N - (g - N * dot(N, g))); }
float rkBed(float y) { float f = fract(y); return tStep(0.0, 0.16, f) * tStep(1.0, 0.62, f); } // hard bed proud of a soft parting
// p: metres in the rock's own frame, N: unit geometric normal in that frame, damp: 0..1, near: 1 close, 0 far
vec3 terrRock(vec3 p, vec3 N, float damp, float near, out vec3 Nout) {
  vec3 w = pow(abs(N), vec3(4.0)); w /= (w.x + w.y + w.z);
  vec4 meso = rkTri(p, w, 13.0, 0.42);
  vec4 fine = rkTri(p, w, 3.1, 0.8);
  vec4 grit = rkTri(p, w, 0.83, 1.0);
  float warp = (meso.w - 0.5) * 5.4 + (fine.w - 0.5) * 1.7;
  float broad = sin(p.y * 0.085 + warp) * 0.5 + 0.5;
  float bedT = 1.1 + 0.9 * meso.w;                          // bed thickness 1.1–2 m
  float by = p.y / bedT + (meso.w - 0.5) * 1.6 + (fine.w - 0.5) * 0.35;
  float bed = rkBed(by), dBed = (rkBed(by + 0.04) - rkBed(by - 0.04)) / (0.08 * bedT);
  float parting = 1.0 - tStep(0.0, 0.09, fract(by)) * tStep(1.0, 0.91, fract(by));
  vec3 rock = mix(${Ht(.2,.185,.165)}, ${Ht(.44,.4,.35)}, broad * 0.55 + 0.25);
  rock = mix(rock, ${Ht(.34,.21,.13)}, tStep(0.55, 0.85, fine.w) * 0.45);   // iron staining
  rock = mix(rock, ${Ht(.16,.2,.12)}, tStep(0.25, 0.7, damp) * 0.35);      // lichen in the damp
  rock *= 0.89 + 0.22 * grit.w;
  rock *= mix(1.0, 0.86 + 0.24 * bed, 0.7) * (1.0 - 0.28 * parting * near);
  float joint = tStep(0.07, 0.0, abs(meso.w - 0.5)) * tStep(0.2, 0.6, 1.0 - abs(N.y));
  rock *= 1.0 - 0.38 * joint * near;
  vec3 g = meso.xyz * 0.55 + fine.xyz * 0.32 * (0.4 + 0.6 * near) + grit.xyz * 0.16 * near + vec3(0.0, -dBed * 0.22, 0.0);
  Nout = rkPerturb(N, g);
  // weathering: up-facing ledges hold dust and a little moss
  rock = mix(rock, ${Ht(.3,.31,.22)}, tStep(0.62, 0.92, mix(N.y, Nout.y, 0.4)) * (0.25 + 0.3 * fine.w));
  return rock;
}
`,kv=`
vec3 terrN; float terrRough = 0.9; float terrAO = 1.0; float terrSpark = 0.0; vec3 terrFacet = vec3(0.0, 1.0, 0.0);
vec3 terrCaustic = vec3(0.0);
{
  vec3 P = vTerrPos;
  float hgt = P.y - uSeaLevel;
  vec2 xz = P.xz;
  vec2 tuv = (xz - uBoundsMin) / uBoundsSize;
  float inMap = step(0.0, tuv.x) * step(tuv.x, 1.0) * step(0.0, tuv.y) * step(tuv.y, 1.0);
  vec4 HS = texture2D(uHeightTex, tuv);
  vec4 FL = texture2D(uFields, tuv);
  vec4 MK = texture2D(uMasks, tuv);
  vec3 Ng = normalize(vTerrNrm);
  float grad = sqrt(max(1.0 - Ng.y * Ng.y, 0.0)) / max(Ng.y, 0.05);   // rise / run of the mesh
  float slopeF = min(1.0, grad / 2.2);
  float dS = mix(hgt * 30.0 + 20.0, HS.y, inMap);
  float flow = FL.x * inMap, sed = FL.y * inMap, concav = (FL.z * 2.0 - 1.0) * inMap;
  float density = mix(tStep(uSandTop - 0.6, uSandTop + 1.1, hgt) * (1.0 - tStep(1.6, 2.5, grad)) * (1.0 - tStep(uTreeLine, uTreeLine * 1.45, hgt)), HS.w, inMap);
  float bedrock = MK.a * inMap;
  terrAO = mix(1.0, FL.w, inMap);
  float dCam = length(vTerrWorld - cameraPosition);
  float near = tStep(260.0, 40.0, dCam);

  // meadow-scale noise from the Perlin tile (never a value-noise lattice: it prints squares)
  vec4 nA = tDet(vec2(xz.x * 0.8 - xz.y * 0.6, xz.x * 0.6 + xz.y * 0.8) / 57.0);
  vec4 nB = tDet(xz / 17.0 + 0.31);
  vec4 nC = tDet(xz / 4.3 + 0.67);
  float fine = nA.z, fine2 = nB.z, micro = nC.z;
  float mottle = fine * 0.5 + fine2 * 0.32 + micro * 0.18;

  // ---- meadow (world/island.js): dries on convex ground, stays green where water runs
  float convex = tStep(0.03, 0.30, -concav);
  vec3 turf = mix(${Ht(.1,.16,.08)}, ${Ht(.24,.38,.19)}, clamp(fine * 0.44 + fine2 * 0.22 + convex * 0.16 + nA.w * 0.25 - 0.05, 0.0, 1.0));
  float dry = clamp(convex * 0.32 + tStep(0.14, 0.64, slopeF) * 0.14 + tStep(30.0, 140.0, hgt) * 0.12 + (fine - 0.5) * 0.26
    + tStep(0.30, 0.04, density) * 0.30 - flow * 0.45 - sed * 0.25, 0.0, 1.0);
  turf = mix(turf, ${Ht(.46,.42,.22)}, dry);
  turf = mix(turf, uMeadowColor * (0.85 + 0.3 * mottle), uMeadowMix);
  turf *= 1.0 + (micro - 0.5) * 0.32 * near;
  turf *= mix(1.0, uUnderBlades, tStep(0.05, 0.55, density));
  vec3 soil = mix(${Ht(.21,.175,.1)}, ${Ht(.32,.27,.15)}, mottle);
  vec3 scrub = mix(${Ht(.105,.145,.075)}, ${Ht(.2,.26,.115)}, fine2 * 0.55 + mottle * 0.45);
  float bareW = max(max(tStep(0.58, 0.98, slopeF), tStep(uTreeLine * 0.85, uTreeLine * 1.15, hgt)), tStep(0.45, 0.85, flow) * tStep(0.10, 0.30, slopeF));
  vec3 land = mix(mix(scrub, soil, bareW), turf, tStep(0.015, 0.26, density));
  vec3 scree = mix(${Ht(.3,.28,.25)}, ${Ht(.46,.43,.38)}, fine2) * (0.85 + 0.3 * micro);
  vec3 gravel = mix(${Ht(.36,.34,.3)}, ${Ht(.52,.49,.44)}, micro);

  // ---- class weights, continuous (bedrock from the slope the mesh actually has, broken by noise)
  float gN = grad + (fine2 - 0.5) * 0.5 + (fine - 0.5) * 0.3;
  float rockW = max(max(tStep(uRockSlope.x, uRockSlope.y, gN), tStep(uTreeLine, uTreeLine * 1.5, hgt)), bedrock);
  float screeW = tStep(0.85, 1.25, grad) * tStep(2.2, 1.6, grad) * tStep(8.0, 40.0, hgt) * tStep(0.05, 0.35, concav) * (1.0 - rockW);
  float gravelW = tStep(0.50, 0.92, flow) * tStep(0.13, 0.48, grad) * tStep(1.32, 0.75, grad) * (1.0 - rockW);
  land = mix(land, gravel, gravelW * 0.7);
  land = mix(land, scree, screeW);
  vec3 N = Ng;
  // ground meso-detail is a few degrees, never more (the "camouflage at golden hour" trap)
  N = normalize(N + vec3(nB.x + nC.x * 0.7, 0.0, nB.y + nC.y * 0.7) * 0.05 * near);
  float rough = 0.92;
  if (rockW > 0.003) {
    vec3 rN;
    vec3 rock = terrRock(P, Ng, flow, near, rN);
    land = mix(land, rock, rockW);
    N = normalize(mix(N, rN, rockW));
    rough = mix(rough, 0.82, rockW);
  }
  // building pads: compacted soil and fine gravel, flat-normalled
  float padS = texture2D(uPads, tuv).r * inMap;
  if (padS > 0.002) {
    vec3 padCol = mix(${Ht(.33,.29,.23)}, ${Ht(.47,.43,.36)}, clamp(micro * 0.7 + fine2 * 0.3, 0.0, 1.0)) * (0.92 + 0.16 * tDet(xz / 1.3).z);
    land = mix(land, padCol, padS);
    N = normalize(mix(N, normalize(Ng + vec3(nC.x, 0.0, nC.y) * 0.03), padS));
    rough = mix(rough, 0.95, padS);
  }
  float wetL = clamp(tStep(0.25, 0.75, flow) * 0.45 + tStep(0.1, 0.6, concav) * 0.15, 0.0, 0.55);
  land *= 1.0 - wetL * 0.5;
  rough = mix(rough, 0.55, wetL);

  // ---- the beach (world/sand.js beachSurface + the shared waterline)
  float sandF = tStep(uSandTop + 0.7, uSandTop - 0.6, hgt) * tStep(0.55, 0.28, slopeF) * tStep(260.0, 120.0, dS) * (1.0 - bedrock) * (1.0 - padS);
  vec3 base = land;
  float wetness = 0.0;
  vec4 W = vec4(0.0);
  if (hgt < 3.5 && dS < 60.0) {
    W = shoreSample(xz, hgt, dS, uTime * uSwash);
    float lvl = W.x - W.w;
    float wetNow = tStep(lvl + 0.14, lvl - 0.02, hgt);
    float wetDamp = tStep(W.z + 0.22, W.z + 0.01, hgt) * 0.6;
    float wetPool = tStep(0.14, -0.02, hgt) * tStep(45.0, 6.0, dS);
    wetness = max(max(wetNow, wetDamp), wetPool);
  }
  if (sandF > 0.002) {
    vec2 e2 = vec2(uTexel, 0.0);
    float gxS = texture2D(uHeightTex, tuv + e2.xy).y - texture2D(uHeightTex, tuv - e2.xy).y;
    float gzS = texture2D(uHeightTex, tuv + e2.yx).y - texture2D(uHeightTex, tuv - e2.yx).y;
    vec2 shoreDir = normalize(vec2(gxS, gzS) + 1e-5);
    vec4 dF = tDet(xz / 0.55);
    vec2 rm = vec2(xz.x * 0.8196 - xz.y * 0.5729, xz.x * 0.5729 + xz.y * 0.8196);   // rotated 0.61 rad
    vec2 rp = vec2(xz.x * 0.9582 + xz.y * 0.2860, -xz.x * 0.2860 + xz.y * 0.9582);  // rotated -0.29 rad
    vec4 dM = tDet(rm / 9.0);
    vec4 dP = tDet(rp / 67.0);
    float onSand = tStep(3.4, 0.9, hgt) * (1.0 - wetness * wetness * 0.85);
    float ridge = (pow(1.0 - abs(sin(dS * 0.48 + (dP.z - 0.5) * 4.4)), 1.5) - 0.27) * tStep(220.0, 40.0, dCam) * 0.10 * onSand;
    vec2 windDir = vec2(0.80, 0.60);
    float comb = (pow(1.0 - abs(sin(dot(xz, windDir) * 24.0 + (dM.z - 0.5) * 5.2 + (dP.z - 0.5) * 3.0)), 1.5) - 0.27)
      * tStep(48.0, 6.0, dCam) * 0.105 * onSand * tStep(0.28, 0.60, dP.w);
    float clump = dM.w * 0.9 + 0.55;
    vec2 gM = vec2(dM.x * 0.8196 + dM.y * 0.5729, dM.y * 0.8196 - dM.x * 0.5729);
    vec2 relief = (dF.xy * clump * 0.24 + gM * 0.17) * (onSand * 0.75 + 0.25);
    vec3 sandN = normalize(Ng + vec3(relief.x, 0.0, relief.y) + vec3(shoreDir.x, 0.0, shoreDir.y) * ridge + vec3(windDir.x, 0.0, windDir.y) * comb);
    float heavies = dP.z * 0.55 + dM.z * 0.45;
    vec3 sandDry = mix(${Ht(.78,.715,.595)}, ${Ht(.44,.36,.26)}, tStep(0.34, 0.90, heavies) * 0.32);
    sandDry *= 1.0 + (dF.z - 0.5) * clump * 0.17;
    sandDry *= 1.0 + (dM.z - 0.5) * 0.24;
    vec2 gc = floor(xz * 26.0), gf = fract(xz * 26.0);
    float g1 = fract(sin(dot(gc, vec2(127.1, 311.7))) * 43758.5453), g2 = fract(sin(dot(gc + 5.3, vec2(127.1, 311.7))) * 43758.5453);
    float grain = fract(sin(dot(gc + 11.7, vec2(127.1, 311.7))) * 43758.5453);
    float gD = length(gf - (vec2(g1, g2) * 0.66 + 0.17));
    float drowned = tStep(0.05, -0.5, hgt);
    float shell = tStep(0.34, 0.12, gD) * tStep(0.90, 0.98, grain) * tStep(30.0, 4.0, dCam);
    sandDry = mix(sandDry, ${Ht(.94,.91,.84)}, shell * mix(0.5, 0.12, drowned));
    vec3 sandA = pow(sandDry, vec3(wetness + 1.0)) * (1.0 - wetness * 0.05)
      * (tStep(0.5, 0.15, gD) * 0.09 * tStep(90.0, 10.0, dCam) + 0.965) * (1.0 + (ridge + comb) * 0.8);
    float sandR = mix(mix(0.95, 0.09, pow(wetness, 0.65)), 0.62, drowned);
    terrFacet = normalize(sandN + vec3(g1 - 0.5, 0.0, g2 - 0.5) * 0.9);
    terrSpark = tStep(0.42, 0.16, gD) * (1.0 - wetness) * tStep(90.0, 12.0, dCam) * sandF * (1.0 - drowned);
    base = mix(land, sandA, sandF);
    N = normalize(mix(N, sandN, sandF));
    rough = mix(rough, sandR, sandF);
  }
  // wet ground that is not sand (rock, gravel at the waterline) darkens and glosses too
  base *= 1.0 - wetness * (1.0 - sandF) * 0.35;
  rough = mix(rough, 0.25, wetness * (1.0 - sandF) * 0.7);
  // foam drying on the sand between waves: the residue of the sheet, a lace of bubble rafts
  if (W.y > 0.001) {
    float lvl = W.x - W.w;
    float lace = tDet(xz / 2.6).z;
    float drying = W.y * tStep(W.z + 0.02, W.z - 0.22, hgt) * tStep(lvl - 0.05, lvl + 0.10, hgt) * tStep(0.36, 0.76, lace) * 0.8;
    base = mix(base, vec3(0.80, 0.82, 0.82), clamp(drying, 0.0, 1.0));
    rough = mix(rough, 0.7, clamp(drying, 0.0, 1.0));
  }
  // ---- the bed: light reaches it through a water column, and the surface focuses it into caustics
  float column = max(-hgt, 0.0) * uUnderwater;
  base *= exp(-vec3(0.115, 0.028, 0.016) * column);
  if (column > 0.01) {
    vec2 tt = vec2(0.023, 0.011) * uTime, tu = vec2(-0.017, 0.019) * uTime;
    float capA = tDet(xz / 7.0 + tt).x, capB = tDet(xz / 4.6 + tu).x;
    float web = pow(max(1.0 - abs(capA + capB) * 2.6, 0.0), 4.0);
    terrCaustic = vec3(web * exp(-column * 0.12) * tStep(0.03, 0.30, column) * 0.22);
    base = mix(base, ${Ht(.03,.06,.075)}, clamp((column - 1.4) / 7.0, 0.0, 1.0));
  }
  diffuseColor.rgb = base;
  terrN = N; terrRough = rough;
}
`;function zv(i,e){const t=new Us({name:e,roughness:.9,metalness:0});return t.onBeforeCompile=n=>{Object.assign(n.uniforms,i),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTerrPos;
varying vec3 vTerrNrm;
varying vec3 vTerrWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTerrPos = transformed; vTerrNrm = objectNormal; vTerrWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vTerrPos; varying vec3 vTerrNrm; varying vec3 vTerrWorld;
uniform sampler2D uTerrDetail, uHeightTex, uFields, uMasks, uSunVis, uPads;
uniform vec2 uBoundsMin, uBoundsSize, uRockSlope; uniform float uSeaLevel, uSandTop, uTreeLine, uTime, uSwash, uUnderwater, uTexel, uUnderBlades, uMeadowMix;
uniform vec3 uMeadowColor, uSunDirW;
${Fu}
${Bu}
float terrSunVisFor(vec3 dirView) {
  vec2 tuv = (vTerrPos.xz - uBoundsMin) / uBoundsSize;
  float inMap = step(0.0, tuv.x) * step(tuv.x, 1.0) * step(0.0, tuv.y) * step(tuv.y, 1.0);
  float match = smoothstep(0.990, 0.999, dot(dirView, normalize((viewMatrix * vec4(uSunDirW, 0.0)).xyz)));
  return mix(1.0, texture2D(uSunVis, tuv).r, match * inMap);
}`).replace("#include <color_fragment>",kv).replace("#include <roughnessmap_fragment>","float roughnessFactor = terrRough;").replace("#include <normal_fragment_maps>","normal = normalize((viewMatrix * vec4(terrN, 0.0)).xyz);").replace("#include <lights_fragment_begin>",ft.lights_fragment_begin.replace("getDirectionalLightInfo( directionalLight, directLight );",`getDirectionalLightInfo( directionalLight, directLight );
		directLight.color *= terrSunVisFor( directLight.direction );`)).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
#if NUM_DIR_LIGHTS > 0
  {
    // sand sparkle: the few quartz facets aligned sun-to-eye; and caustics on the bed
    vec3 Ld = directionalLights[0].direction, Vv = normalize(vViewPosition);
    float vis = terrSunVisFor(Ld);
    vec3 fN = normalize((viewMatrix * vec4(terrFacet, 0.0)).xyz);
    float sp = pow(max(dot(reflect(-Vv, fN), Ld), 0.0), 900.0) * terrSpark;
    reflectedLight.directSpecular += directionalLights[0].color * (sp * 2.4 * vis);
    reflectedLight.directDiffuse += directionalLights[0].color * terrCaustic * vis * max(dot(geometryNormal, Ld), 0.0);
  }
#endif`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
reflectedLight.indirectDiffuse *= terrAO; reflectedLight.indirectSpecular *= mix(1.0, terrAO, 0.6);`)},t.customProgramCacheKey=()=>"terrain-v2",t}function Mh(i={}){const e=performance.now(),t={};let n=e;const s=X=>{const ce=performance.now();t[X]=Math.round(ce-n),n=ce},r=vh[i.preset]?i.preset:"island",a=vh[r],l={size:i.size??a.size,resolution:Math.round(Dt(i.resolution??512,64,1024)),seed:(i.seed??1)|0,seaLevel:i.seaLevel??0,heightScale:i.heightScale??1,erosion:Dt(i.erosion??1,0,1),erosionIterations:i.erosionIterations??130,apron:i.apron??2500,swash:i.swash??a.swash,grassCover:!!i.grassCover,name:i.name??"Terrain"},o=l.resolution,c=Math.round(Dt(i.erosionResolution??o/2,32,o)),h=fl(l.seed*7919+13),u=X=>Iv(X,h()*2147483647|0),f=r==="coast"?Uv(l,u,h):r==="hills"?Fv(l,u):r==="valley"?Ov(l,u):Nv(l,X=>Dv(X,h()*2147483647|0)),{sandTop:g,treeLine:v}=f,m=l.size/2,p=l.size/o,y=-m,E=-m,_=o*o,S=new Float32Array(_),w=new Float32Array(_),R=new Float32Array(_),x=new Float32Array(_),T=new Float32Array(_),P=new Float64Array(5);Vi=0;for(let X=0;X<o;X++){const ce=E+(X+.5)*p;for(let Pe=0;Pe<o;Pe++){const ge=X*o+Pe;f.macro(y+(Pe+.5)*p,ce,P),S[ge]=P[0],w[ge]=P[1],R[ge]=P[2],x[ge]=P[3],T[ge]=P[4]}}s("synthesis");const k=new Float32Array(_),z=new Float32Array(_);if(l.erosion>0&&l.erosionIterations>0){const X=o/c,ce=new Float32Array(c*c),Pe=new Float32Array(c*c);for(let U=0;U<c;U++)for(let $=0;$<c;$++){let G=0,j=0,Le=0;const ke=Math.floor($*X),ze=Math.max(ke+1,Math.floor(($+1)*X)),Ue=Math.floor(U*X),Ye=Math.max(Ue+1,Math.floor((U+1)*X));for(let at=Ue;at<Ye;at++)for(let ot=ke;ot<ze;ot++)G+=S[at*o+ot],j+=x[at*o+ot],Le++;ce[U*c+$]=G/Le,Pe[U*c+$]=j/Le}const ge=Float32Array.from(ce),Re=2.15/(l.size/c);for(let U=0;U<c*c;U++)ce[U]*=Re;const Fe=Bv(c,2.15,l.erosionIterations,ce,Pe);let tt=1e-6,rt=1e-6;for(let U=0;U<c*c;U++)Fe.water[U]>tt&&(tt=Fe.water[U]),Fe.sediment[U]>rt&&(rt=Fe.sediment[U]);const Xe=new Float32Array(c*c);for(let U=0;U<c*c;U++)Xe[U]=(Fe.height[U]/Re-ge[U])*Ke(-3,1.5,ge[U])*l.erosion;s("erosion");const ht=(U,$,G,j,Le)=>$+.5*Le*(G-U+Le*(2*U-5*$+4*G-j+Le*(3*($-G)+j-U))),it=(U,$,G)=>U[(G<0?0:G>=c?c-1:G)*c+($<0?0:$>=c?c-1:$)],b=Math.max(4,o*.04);for(let U=0;U<o;U++){const $=(U+.5)/X-.5,G=Math.floor($),j=$-G,Le=Ke(0,b,Math.min(U,o-1-U));for(let ke=0;ke<o;ke++){const ze=(ke+.5)/X-.5,Ue=Math.floor(ze),Ye=ze-Ue,at=U*o+ke,ot=Le*Ke(0,b,Math.min(ke,o-1-ke)),et=ht(it(Xe,Ue-1,G-1),it(Xe,Ue,G-1),it(Xe,Ue+1,G-1),it(Xe,Ue+2,G-1),Ye),_t=ht(it(Xe,Ue-1,G),it(Xe,Ue,G),it(Xe,Ue+1,G),it(Xe,Ue+2,G),Ye),At=ht(it(Xe,Ue-1,G+1),it(Xe,Ue,G+1),it(Xe,Ue+1,G+1),it(Xe,Ue+2,G+1),Ye),bt=ht(it(Xe,Ue-1,G+2),it(Xe,Ue,G+2),it(Xe,Ue+1,G+2),it(Xe,Ue+2,G+2),Ye);S[at]+=ht(et,_t,At,bt,j)*ot;const Mt=it(Fe.water,Ue,G),zt=it(Fe.water,Ue+1,G),Qe=it(Fe.water,Ue,G+1),Kt=it(Fe.water,Ue+1,G+1),St=it(Fe.sediment,Ue,G),xn=it(Fe.sediment,Ue+1,G),Rn=it(Fe.sediment,Ue,G+1),Qn=it(Fe.sediment,Ue+1,G+1),Li=(Mt+(zt-Mt)*Ye)*(1-j)+(Qe+(Kt-Qe)*Ye)*j,Tt=(St+(xn-St)*Ye)*(1-j)+(Rn+(Qn-Rn)*Ye)*j;k[at]=Math.min(1,Li/(tt*.18))*ot*l.erosion,z[at]=Math.min(1,Tt/(rt*.35))*ot*l.erosion}}s("upsample")}if(r==="island"){const X=new Int32Array(_).fill(-1),ce=[];let Pe=0,ge=-1,Re=0;for(let Xe=0;Xe<_;Xe++){if(S[Xe]<=0||X[Xe]>=0)continue;const ht=Pe++;let it=0;for(ce.push(Xe);ce.length;){const b=ce.pop();if(X[b]>=0||S[b]<=0)continue;X[b]=ht,it++;const U=b%o,$=b/o|0;U>0&&ce.push(b-1),U<o-1&&ce.push(b+1),$>0&&ce.push(b-o),$<o-1&&ce.push(b+o)}it>Re&&(Re=it,ge=ht)}const Fe=Math.round(118/p),tt=new Int16Array(_).fill(-1),rt=[];for(let Xe=0;Xe<_;Xe++)X[Xe]>=0&&X[Xe]!==ge&&(tt[Xe]=0,rt.push(Xe));for(let Xe=0;Xe<rt.length;Xe++){const ht=rt[Xe];if(tt[ht]>=Fe)continue;const it=ht%o,b=ht/o|0,U=[it>0?ht-1:-1,it<o-1?ht+1:-1,b>0?ht-o:-1,b<o-1?ht+o:-1];for(const $ of U)$<0||tt[$]>=0||X[$]===ge||(tt[$]=tt[ht]+1,rt.push($))}for(const Xe of rt)S[Xe]=Math.min(S[Xe],-18*(1-Ke(0,Fe,tt[Xe])))}const K=(X,ce,Pe,ge,Re)=>{if(f.rampRate>0&&Re>.002){const Fe=.15+f.rampRate*Math.max(0,ge);if(Pe>Fe){const tt=Re*Ke(f.depoTop,3,Pe);tt>.002&&(Pe+=(Fe-Pe)*tt)}}return f.post?f.post(X,ce,Pe):Pe};for(let X=0;X<o;X++)for(let ce=0;ce<o;ce++){const Pe=X*o+ce;S[Pe]=K(y+(ce+.5)*p,E+(X+.5)*p,S[Pe],w[Pe],R[Pe])}if(a.sea){const ce=new Uint8Array(_),Pe=[];for(let ge=0;ge<o;ge++)Pe.push(ge,(o-1)*o+ge);for(let ge=0;ge<o;ge++)Pe.push(ge*o,ge*o+o-1);for(;Pe.length;){const ge=Pe.pop();if(ce[ge]||S[ge]>=.25)continue;ce[ge]=1;const Re=ge%o,Fe=ge/o|0;Re>0&&Pe.push(ge-1),Re<o-1&&Pe.push(ge+1),Fe>0&&Pe.push(ge-o),Fe<o-1&&Pe.push(ge+o)}for(let ge=0;ge<_;ge++)S[ge]<.25&&!ce[ge]&&(S[ge]=Math.max(.12,.25+(S[ge]-.25)*.1))}const N=new Float32Array(_),Z=[];for(const X of i.pads??[]){const ce={...X},Pe=Math.max(.5,ce.blend??12),ge=Math.cos(ce.angle??0),Re=Math.sin(ce.angle??0),Fe=ce.radius!==void 0,tt=(ce.width??10)/2,rt=(ce.depth??10)/2,Xe=(j,Le)=>{const ke=j-ce.x,ze=Le-ce.z;if(Fe)return Math.max(0,Math.hypot(ke,ze)-ce.radius);const Ue=Math.abs(ke*ge+ze*Re)-tt,Ye=Math.abs(-ke*Re+ze*ge)-rt;return Math.hypot(Math.max(Ue,0),Math.max(Ye,0))+Math.min(Math.max(Ue,Ye),0)},ht=(Fe?ce.radius:Math.hypot(tt,rt))+Pe,it=Dt(Math.floor((ce.x-ht-y)/p),0,o-1),b=Dt(Math.ceil((ce.x+ht-y)/p),0,o-1),U=Dt(Math.floor((ce.z-ht-E)/p),0,o-1),$=Dt(Math.ceil((ce.z+ht-E)/p),0,o-1);if(ce.y===void 0){let j=0,Le=0;for(let ke=U;ke<=$;ke++)for(let ze=it;ze<=b;ze++)Xe(y+(ze+.5)*p,E+(ke+.5)*p)<=0&&(j+=S[ke*o+ze],Le++);ce.y=(Le?j/Le:S[Dt(Math.round((ce.z-E)/p-.5),0,o-1)*o+Dt(Math.round((ce.x-y)/p-.5),0,o-1)])+l.seaLevel}const G=ce.y-l.seaLevel;for(let j=U;j<=$;j++)for(let Le=it;Le<=b;Le++){const ke=j*o+Le,ze=Xe(y+(Le+.5)*p,E+(j+.5)*p),Ue=S[ke],Ye=Ue>G?Ke(Pe,0,ze):Ke(Pe*.5,0,ze);S[ke]=Ue+(G-Ue)*Ye,N[ke]=Math.max(N[ke],Ke(2.5,0,ze))}Z.push(ce)}for(let X=0;X<_;X++)N[X]>0&&(T[X]*=1-N[X]);s("coast");const ie=new Float32Array(_),te=new Float32Array(_),J=new Float32Array(_),Y=new Float32Array(_),ue=u(51),me=u(25),Be=u(12),se=u(6.3),He=u(l.size/7>300?300:l.size/7),oe=u(110),F=u(140);for(let X=0;X<o;X++){const ce=(X>0?X-1:0)*o,Pe=(X<o-1?X+1:o-1)*o,ge=E+(X+.5)*p;for(let Re=0;Re<o;Re++){const Fe=X*o+Re,tt=S[Fe],rt=S[X*o+(Re>0?Re-1:0)],Xe=S[X*o+(Re<o-1?Re+1:o-1)],ht=S[ce+Re],it=S[Pe+Re],b=Math.hypot(Xe-rt,it-ht)/(2*p);ie[Fe]=b;const U=Math.min(1,b/2.2),$=Dt((rt+Xe+ht+it-4*tt)/(p*1.6)*(p/2.15),-1,1);te[Fe]=$;const G=y+(Re+.5)*p,j=.44*ue(G,ge)+.28*me(G,ge)+.18*Be(G,ge)+.1*se(G,ge);let Le=.87+.13*Ke(.3,.7,j);Le*=1-.14*Math.max(0,-$),Le*=Ke(g-.6,g+1.1,tt),Le*=1-Ke(1.6,2.5,b),Le*=1-Ke(v,v*1.45,tt),Le*=1-.55*Ke(.48,.95,k[Fe])*Ke(.1,.34,U),Le*=.96+.06*Ke(.02,.25,k[Fe])+.1*z[Fe],Le*=1-Ke(.4,.8,T[Fe]),Le*=1-N[Fe],J[Fe]=Math.min(1,Math.max(0,Le)),Y[Fe]=Math.min(1,.8+.2*(1-U)-.22*Math.max(0,$))}}s("fields");const I=new Float32Array(_);{const ce=new Float32Array(_),Pe=new Float32Array(_);for(let Re=0;Re<_;Re++){const Fe=S[Re]>0;ce[Re]=Fe?0:1e7,Pe[Re]=Fe?1e7:0}const ge=Re=>{for(let Fe=0;Fe<o;Fe++)for(let tt=0;tt<o;tt++){const rt=Fe*o+tt;let Xe=Re[rt];tt>0&&(Xe=Math.min(Xe,Re[rt-1]+1)),Fe>0&&(Xe=Math.min(Xe,Re[rt-o]+1),tt>0&&(Xe=Math.min(Xe,Re[rt-o-1]+1.4142)),tt<o-1&&(Xe=Math.min(Xe,Re[rt-o+1]+1.4142))),Re[rt]=Xe}for(let Fe=o-1;Fe>=0;Fe--)for(let tt=o-1;tt>=0;tt--){const rt=Fe*o+tt;let Xe=Re[rt];tt<o-1&&(Xe=Math.min(Xe,Re[rt+1]+1)),Fe<o-1&&(Xe=Math.min(Xe,Re[rt+o]+1),tt<o-1&&(Xe=Math.min(Xe,Re[rt+o+1]+1.4142)),tt>0&&(Xe=Math.min(Xe,Re[rt+o-1]+1.4142))),Re[rt]=Xe}};ge(ce),ge(Pe);for(let Re=0;Re<_;Re++)I[Re]=Math.min(S[Re]>0?Pe[Re]*p:-ce[Re]*p,5e3)}s("shore");const D=new Uint8Array(_),Q=new Uint8Array(_),O=new Uint8Array(_),re=new Uint8Array(_),ve=new Uint8Array(_),Ie=new Float32Array(_);for(let X=0;X<o;X++){const ce=E+(X+.5)*p;for(let Pe=0;Pe<o;Pe++){const ge=X*o+Pe,Re=S[ge],Fe=ie[ge],tt=I[ge],rt=y+(Pe+.5)*p,Xe=Ke(g+.7,g-.6,Re)*Ke(1.21,.62,Fe)*Ke(260,120,tt)*(1-T[ge])*(Re>-1.5?1:0),ht=Math.max(Ke(1.25,2,Fe),Ke(v,v*1.5,Re),T[ge]*(Re>-1?1:0)),it=.64*He(rt,ce)+.36*oe(rt,ce),b=Ke(.3,.42,it)*Ke(Math.min(40,l.size*.03),Math.min(60,l.size*.05),tt)*Ke(g+1,g+2.5,Re)*Ke(v*.95,v*.85,Re)*Ke(1.2,.9,Fe)*Ke(.75,.6,k[ge])*(1-ht),U=a.sea?Ke(.26,.36,F(rt,ce))*Ke(5,9,tt)*Ke(150,120,tt)*Ke(.4,.8,Re)*Ke(18,14,Re)*Ke(.95,.8,Fe)*(1-ht):0,$=1-N[ge];D[ge]=Math.round(J[ge]*255),O[ge]=Math.round(Xe*$*255),re[ge]=Math.round(ht*$*255),Q[ge]=Math.round(b*$*255),ve[ge]=Math.round(U*$*255),Ie[ge]=ht*$}}const Se=new Uint8Array(_);{const X=Math.max(1,Math.round(12/p)),ce=new Float32Array(_),Pe=new Float32Array(_);for(let ge=0;ge<o;ge++){let Re=0;for(let Fe=-X;Fe<=X;Fe++)Re+=Ie[ge*o+Dt(Fe,0,o-1)];for(let Fe=0;Fe<o;Fe++)ce[ge*o+Fe]=Re/(2*X+1),Re+=Ie[ge*o+Math.min(o-1,Fe+X+1)]-Ie[ge*o+Math.max(0,Fe-X)]}for(let ge=0;ge<o;ge++){let Re=0;for(let Fe=-X;Fe<=X;Fe++)Re+=ce[Dt(Fe,0,o-1)*o+ge];for(let Fe=0;Fe<o;Fe++)Pe[Fe*o+ge]=Re/(2*X+1),Re+=ce[Math.min(o-1,Fe+X+1)*o+ge]-ce[Math.max(0,Fe-X)*o+ge]}for(let ge=0;ge<_;ge++){const Re=Ke(.08,.35,Pe[ge])*(1-Ke(.3,.7,Ie[ge]))*Ke(1.4,.6,ie[ge])*Ke(-1.5,-.3,S[ge]);Se[ge]=Math.round(Dt(Re+.6*T[ge]*Ke(-1.2,.2,S[ge]),0,1)*(1-N[ge])*255)}}s("masks");const Ne=Cl.toHalfFloat,Ce=new Uint16Array(_*4),L=new Uint8Array(_*4),ne=new Uint8Array(_*4);for(let X=0;X<_;X++)Ce[X*4]=Ne(S[X]+l.seaLevel),Ce[X*4+1]=Ne(I[X]),Ce[X*4+2]=Ne(ie[X]),Ce[X*4+3]=Ne(J[X]),L[X*4]=k[X]*255,L[X*4+1]=z[X]*255,L[X*4+2]=(te[X]*.5+.5)*255,L[X*4+3]=Y[X]*255,ne[X*4]=D[X],ne[X*4+1]=Q[X],ne[X*4+2]=O[X],ne[X*4+3]=Math.round(T[X]*255);const _e=(X,ce,Pe,ge)=>{const Re=new wn(X,o,o,ce,Pe);return Re.wrapS=Re.wrapT=pn,Re.magFilter=Re.minFilter=Et,Re.generateMipmaps=!1,Re.name=ge,Re.needsUpdate=!0,Re},xe=_e(Ce,Bt,yn,"terrain-height"),ee=_e(L,Bt,Vt,"terrain-fields"),de=_e(ne,Bt,Vt,"terrain-masks"),C=_e(D,ri,Vt,"terrain-grass-mask"),Ae=_e(Q,ri,Vt,"terrain-tree-mask"),Ge=_e(O,ri,Vt,"terrain-sand-mask"),A=_e(Uint8Array.from(N,X=>Math.round(X*255)),ri,Vt,"terrain-pads"),M=Ou();s("textures");const B=l.apron>0?16:0;let q=1;if(B){let X=1.0001,ce=3;for(let Pe=0;Pe<50;Pe++){const ge=(X+ce)/2;p*ge*(Math.pow(ge,B)-1)/(ge-1)>l.apron?ce=ge:X=ge}q=(X+ce)/2}const W=o+2*B,pe=new Float64Array(W);for(let X=0;X<o;X++)pe[B+X]=y+(X+.5)*p;for(let X=1,ce=p,Pe=0;X<=B;X++)ce*=q,Pe+=ce,pe[B-X]=y+.5*p-Pe,pe[B+o-1+X]=-y-.5*p+Pe;const le=new Float32Array(W*W);for(let X=0;X<W;X++)for(let ce=0;ce<W;ce++){const Pe=ce-B,ge=X-B;if(Pe>=0&&Pe<o&&ge>=0&&ge<o){le[X*W+ce]=S[ge*o+Pe];continue}const Re=ce===0?pe[1]-pe[0]:pe[ce]-pe[ce-1],Fe=X===0?pe[1]-pe[0]:pe[X]-pe[X-1];Vi=Math.max(Re,Fe),f.macro(pe[ce],pe[X],P),le[X*W+ce]=K(pe[ce],pe[X],P[0],P[1],P[2])}Vi=0;const ae=new Float32Array(W*W*3),fe=new Float32Array(W*W*3);for(let X=0;X<W;X++)for(let ce=0;ce<W;ce++){const Pe=X*W+ce,ge=B&&(ce===0||X===0||ce===W-1||X===W-1)?80:0;ae[Pe*3]=pe[ce],ae[Pe*3+1]=le[Pe]+l.seaLevel-ge,ae[Pe*3+2]=pe[X];const Re=ce>0?ce-1:ce,Fe=ce<W-1?ce+1:ce,tt=X>0?X-1:X,rt=X<W-1?X+1:X,Xe=(le[X*W+Fe]-le[X*W+Re])/(pe[Fe]-pe[Re]),ht=(le[rt*W+ce]-le[tt*W+ce])/(pe[rt]-pe[tt]),it=1/Math.sqrt(Xe*Xe+1+ht*ht);fe[Pe*3]=-Xe*it,fe[Pe*3+1]=it,fe[Pe*3+2]=-ht*it}const we=new Uint8Array((W-1)*(W-1)),ye=new Uint32Array((W-1)*(W-1)*6);for(let X=0,ce=0;X<W-1;X++)for(let Pe=0;Pe<W-1;Pe++){const ge=X*W+Pe,Re=ge+1,Fe=ge+W,tt=Fe+1,rt=Math.abs(le[ge]-le[tt])<Math.abs(le[Re]-le[Fe])?1:0;we[X*(W-1)+Pe]=rt,rt?(ye[ce++]=ge,ye[ce++]=Fe,ye[ce++]=tt,ye[ce++]=ge,ye[ce++]=tt,ye[ce++]=Re):(ye[ce++]=ge,ye[ce++]=Fe,ye[ce++]=Re,ye[ce++]=Re,ye[ce++]=Fe,ye[ce++]=tt)}const De=new Ot;De.setAttribute("position",new Ut(ae,3)),De.setAttribute("normal",new Ut(fe,3)),De.setIndex(new Ut(ye,1)),De.computeBoundingSphere(),De.computeBoundingBox(),s("mesh");const be=X=>{if(X<=pe[0])return[0,0];if(X>=pe[W-1])return[W-2,1];let ce=Math.floor((X-y)/p-.5)+B;if(ce<B||ce>=B+o-1){let Pe=0,ge=W-1;for(;ge-Pe>1;){const Re=Pe+ge>>1;pe[Re]<=X?Pe=Re:ge=Re}ce=Pe}return[ce,(X-pe[ce])/(pe[ce+1]-pe[ce])]},Ve=(X,ce)=>{if(X<pe[0]||X>pe[W-1]||ce<pe[0]||ce>pe[W-1])return Vi=0,f.macro(X,ce,P),K(X,ce,P[0],P[1],P[2])+l.seaLevel;const[Pe,ge]=be(X),[Re,Fe]=be(ce),tt=le[Re*W+Pe],rt=le[Re*W+Pe+1],Xe=le[(Re+1)*W+Pe],ht=le[(Re+1)*W+Pe+1];let it;return we[Re*(W-1)+Pe]?it=ge>=Fe?tt+(rt-tt)*ge+(ht-rt)*Fe:tt+(Xe-tt)*Fe+(ht-Xe)*ge:it=ge+Fe<=1?tt+(rt-tt)*ge+(Xe-tt)*Fe:ht+(Xe-ht)*(1-ge)+(rt-ht)*(1-Fe),it+l.seaLevel},We=(X,ce,Pe,ge=0)=>{const Re=(ce-y)/p-.5,Fe=(Pe-E)/p-.5;if(Re<-.5||Fe<-.5||Re>o-.5||Fe>o-.5)return ge;const tt=Dt(Math.floor(Re),0,o-1),rt=Dt(Math.floor(Fe),0,o-1),Xe=Math.min(o-1,tt+1),ht=Math.min(o-1,rt+1),it=Dt(Re-tt,0,1),b=Dt(Fe-rt,0,1),U=X[rt*o+tt],$=X[rt*o+Xe],G=X[ht*o+tt],j=X[ht*o+Xe];return(U+($-U)*it)*(1-b)+(G+(j-G)*it)*b},Je=(X,ce,Pe=new H)=>{const ge=p*.75;return Pe.set(Ve(X-ge,ce)-Ve(X+ge,ce),2*ge,Ve(X,ce-ge)-Ve(X,ce+ge)).normalize()},V=(X,ce)=>{const Pe=p*.75;return Math.hypot(Ve(X+Pe,ce)-Ve(X-Pe,ce),Ve(X,ce+Pe)-Ve(X,ce-Pe))/(2*Pe)},Oe=X=>(ce,Pe)=>We(X,ce,Pe,0)/255,he={grass:Oe(D),tree:Oe(Q),palm:Oe(ve),sand:Oe(O),rock:Oe(re),boulder:Oe(Se)},Ee=(X,ce)=>We(I,X,ce,Ve(X,ce)-l.seaLevel>0?5e3:-5e3),Te=Math.min(o,192),Me=new Uint8Array(Te*Te).fill(255),Ze=new wn(Me,Te,Te,ri,Vt);Ze.wrapS=Ze.wrapT=pn,Ze.magFilter=Ze.minFilter=Et,Ze.name="terrain-sun-shadow",Ze.needsUpdate=!0;const qe=new Float32Array(Te*Te);for(let X=0;X<Te;X++)for(let ce=0;ce<Te;ce++)qe[X*Te+ce]=We(S,y+(ce+.5)*l.size/Te,E+(X+.5)*l.size/Te);const lt=new H(0,1,0),ct=X=>{const ce=performance.now(),Pe=44,ge=l.size/Te,Re=Math.max(Math.hypot(X.x,X.z),.001),Fe=X.x/Re,tt=X.z/Re,rt=Math.max(X.y,.009)/Re;let Xe=ge*1.2,ht=1.08;{let b=1.0001,U=1.5;for(let $=0;$<40;$++){const G=(b+U)/2;Xe*G*(Math.pow(G,Pe)-1)/(G-1)>l.size*1.2?U=G:b=G}ht=(b+U)/2}const it=new Float32Array(Pe);for(let b=0,U=Xe,$=Xe;b<Pe;b++)it[b]=U,$*=ht,U+=$;for(let b=0;b<Te;b++)for(let U=0;U<Te;U++){const $=qe[b*Te+U];let G=-10;for(let j=0;j<Pe;j++){const Le=it[j],ke=U+Fe*Le/ge,ze=b+tt*Le/ge;if(ke<0||ze<0||ke>Te-1||ze>Te-1)break;const Ue=ke|0,Ye=ze|0,at=Ue<Te-1?Ue+1:Ue,ot=Ye<Te-1?Ye+1:Ye,et=ke-Ue,_t=ze-Ye,At=qe[Ye*Te+Ue],bt=qe[Ye*Te+at],Mt=qe[ot*Te+Ue],zt=qe[ot*Te+at],Kt=((At+(bt-At)*et)*(1-_t)+(Mt+(zt-Mt)*et)*_t-$)/Le;Kt>G&&(G=Kt)}Me[b*Te+U]=Math.round((1-Ke(rt+.012,rt+.062,G))*255)}Ze.needsUpdate=!0,lt.copy(X),t.sunBake=Math.round(performance.now()-ce)},yt=new $e(4880944),Nt={uTerrDetail:{value:M},uHeightTex:{value:xe},uFields:{value:ee},uMasks:{value:de},uSunVis:{value:Ze},uPads:{value:A},uBoundsMin:{value:new st(y,E)},uBoundsSize:{value:new st(l.size,l.size)},uRockSlope:{value:new st(1.15,2)},uSeaLevel:{value:l.seaLevel},uSandTop:{value:g},uTreeLine:{value:v},uTime:{value:6},uSwash:{value:l.swash?1:0},uUnderwater:{value:a.sea?1:0},uTexel:{value:1/o},uUnderBlades:{value:l.grassCover?.5:.92},uMeadowMix:{value:0},uMeadowColor:{value:yt},uSunDirW:{value:lt}};let tn,Tn=Nt;const Fn=i.material?.userData?.terrainUniforms;if(Fn){tn=i.material;for(const X in Nt)Fn[X]?Fn[X].value=Nt[X].value:Fn[X]=Nt[X];Tn=Fn}else tn=zv(Nt,`${l.name} ground`),tn.userData.terrainUniforms=Nt;const hn=new qt(De,tn);hn.name=l.name,hn.castShadow=!0,hn.receiveShadow=!0,hn.frustumCulled=!1;let Ci=!1,rn=null;const En=new H,An=new H,Pi=X=>{X.y>-.05&&Math.abs(X.x-lt.x)+Math.abs(X.y-lt.y)+Math.abs(X.z-lt.z)>.009&&ct(X)};hn.onBeforeRender=(X,ce)=>{Ci||((!rn||!rn.parent)&&(rn=null,ce.traverse(Pe=>{!rn&&Pe.isDirectionalLight&&Pe.visible&&(rn=Pe)})),rn&&(rn.updateMatrixWorld(),rn.target.updateMatrixWorld(),En.setFromMatrixPosition(rn.matrixWorld).sub(An.setFromMatrixPosition(rn.target.matrixWorld)).normalize(),Pi(En)))},s("material"),t.total=Math.round(performance.now()-e);const ss=({count:X=100,mask:ce="grass",minSpacing:Pe=2,seed:ge=1,threshold:Re=0,area:Fe}={})=>{const tt=fl(ge*104729+7),rt=typeof ce=="function"?ce:he[ce]??he.grass,Xe=Fe?.minX??y,ht=Fe?.minZ??E,it=Fe?.maxX??-y,b=Fe?.maxZ??-E,U=[],$=Math.max(Pe,.5),G=new Map,j=(Le,ke)=>Le*73856093^ke*19349663;for(let Le=0;U.length<X&&Le<X*60;Le++){const ke=Xe+tt()*(it-Xe),ze=ht+tt()*(b-ht),Ue=rt(ke,ze);if(Ue<=Re||tt()>Ue)continue;const Ye=Math.floor(ke/$),at=Math.floor(ze/$);let ot=!0;for(let At=-1;At<=1&&ot;At++)for(let bt=-1;bt<=1&&ot;bt++){const Mt=G.get(j(Ye+bt,at+At));if(Mt){for(const zt of Mt)if((zt.x-ke)**2+(zt.z-ze)**2<Pe*Pe){ot=!1;break}}}if(!ot)continue;const et={x:ke,y:Ve(ke,ze),z:ze,m:Ue};U.push(et);const _t=j(Ye,at);G.has(_t)||G.set(_t,[]),G.get(_t).push(et)}return U};return{mesh:hn,object:hn,material:tn,preset:r,options:l,seaLevel:l.seaLevel,sandTop:g+l.seaLevel,treeLine:v+l.seaLevel,bounds:{minX:y,minZ:E,maxX:-y,maxZ:-E},resolution:o,heightTexture:xe,grassMask:C,treeMask:Ae,sandMask:Ge,masksTexture:de,fieldsTexture:ee,detailTexture:M,sunShadowTexture:Ze,shoreGLSL:Fu,stacks:f.stacks??[],pads:Z,heightAt:Ve,normalAt:Je,slopeAt:V,shoreAt:Ee,grassAt:he.grass,treeAt:he.tree,palmAt:he.palm,sandAt:he.sand,rockAt:he.rock,boulderAt:he.boulder,scatter:ss,data:{res:o,height:S,slope:ie,flow:k,sediment:z,density:J,dShore:I,bare:T,padW:N,masks:{grass:D,tree:Q,palm:ve,sand:O,rock:re,boulder:Se}},timings:t,update(X){Tn.uTime.value=X},setSun(X){Ci=!0,Pi(An.copy(X).normalize())},setMeadowColor(X,ce=1){yt.set(X),Tn.uMeadowMix.value=ce},dispose(X=!1){De.dispose(),X||tn.dispose();for(const ce of[xe,ee,de,C,Ae,Ge,Ze,A])ce.dispose()}}}function Hv({name:i="Rock",moss:e=.3,color:t}={}){const n=new Us({name:i,roughness:.85,metalness:0}),s=new $e(t??16777215);return n.onBeforeCompile=r=>{r.uniforms.uTerrDetail={value:Ou()},r.uniforms.uRockMoss={value:e},r.uniforms.uRockTint={value:s},r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRkP; varying vec3 vRkN; varying vec3 vRkR0; varying vec3 vRkR1; varying vec3 vRkR2; varying float vRkBase; varying float vRkSz;`).replace("#include <begin_vertex>",`#include <begin_vertex>
mat4 rkM = modelMatrix;
#ifdef USE_INSTANCING
rkM = modelMatrix * instanceMatrix;
#endif
vec3 rkS = vec3(length(rkM[0].xyz), length(rkM[1].xyz), length(rkM[2].xyz));
// texture scale follows the rock: below ~3.5 m the strata, joints and grit shrink with it (up to 3x), so
// a cobble carries a boulder's few beds instead of being cut by metre-scale contour rings
float rkSz = max(rkS.x, max(rkS.y, rkS.z));
vRkP = transformed * rkS * clamp(3.5 / max(rkSz, 1e-3), 1.0, 3.0) + floor(rkM[3].xyz) * 1.731;
vRkSz = rkSz;
vRkN = normalize(objectNormal / rkS);
vRkR0 = rkM[0].xyz / rkS.x; vRkR1 = rkM[1].xyz / rkS.y; vRkR2 = rkM[2].xyz / rkS.z;
vRkBase = transformed.y;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uTerrDetail; uniform float uRockMoss; uniform vec3 uRockTint;
varying vec3 vRkP; varying vec3 vRkN; varying vec3 vRkR0; varying vec3 vRkR1; varying vec3 vRkR2; varying float vRkBase; varying float vRkSz;
${Bu}
vec3 rkNW; float rkAO;`).replace("#include <color_fragment>",`
{
  vec3 nL;
  // partings, joints and grit normals are close-range detail: weaker on small rocks
  float nearR = tStep(160.0, 20.0, length(vViewPosition)) * mix(0.35, 0.8, tStep(0.6, 4.0, vRkSz));
  vec3 alb = terrRock(vRkP, normalize(vRkN), 0.0, nearR, nL);
  mat3 rot = mat3(vRkR0, vRkR1, vRkR2);
  rkNW = normalize(rot * nL);
  float mossW = tStep(0.55, 0.95, rkNW.y) * uRockMoss * tStep(0.35, 0.65, tDet(vRkP.xz / 3.3).w + 0.15);
  alb = mix(alb, ${Ht(.2,.25,.12)}, mossW);
  rkAO = mix(0.5, 1.0, tStep(0.0, 0.22, vRkBase));   // ground contact: the sunk base sits in its own shade
  diffuseColor.rgb = alb * uRockTint * mix(0.75, 1.0, rkAO);
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
  diffuseColor.rgb *= vColor.rgb;   // per-instance tint
#endif
}`).replace("#include <normal_fragment_maps>","normal = normalize((viewMatrix * vec4(rkNW, 0.0)).xyz);").replace("#include <aomap_fragment>",`#include <aomap_fragment>
reflectedLight.indirectDiffuse *= rkAO; reflectedLight.indirectSpecular *= rkAO;`)},n.customProgramCacheKey=()=>"terrain-rock-v2",n}const Ei=9.81,ca=140,Gv=`
float shoreStep(float a, float b, float x) { float t = clamp((x - a) / (b - a), 0.0, 1.0); return t * t * (3.0 - 2.0 * t); }
float shoreHash(vec2 p) { vec3 q = fract(vec3(p.xyx) * 0.1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
float shoreNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  return mix(mix(shoreHash(i), shoreHash(i + vec2(1.0, 0.0)), u.x), mix(shoreHash(i + vec2(0.0, 1.0)), shoreHash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float shoreField(vec2 p) { return 0.5 + (shoreNoise(p) * 0.67 + shoreNoise(p * 2.03 + 17.1) * 0.33 - 0.5) * 0.85; }
vec4 shoreSample(vec2 xz, float bedH, float dS, float time) {
  float dd = max(-bedH, 0.0);
  float shoreNear = shoreStep(45.0, 3.0, dS);
  float nW = shoreField(xz / 48.0);
  float nZ = shoreField(xz / 12.0 + 31.7);
  float dr = time * 0.55;
  vec2 q = vec2(xz.x + dr, xz.y - dr * 0.62);
  float tW = shoreField(q / 21.5 + 7.3);
  float tZ = shoreField(q / 5.4 + 53.1);
  float mag = exp(-dd / 1.45);
  float p = dd * 3.1 + time * 1.30 + (nW - 0.5) * 0.9 + (tW - 0.5) * 0.75;
  float sw = sin(p + cos(p) * (1.0 - mag)) * -0.5 + 0.5;
  float shape = pow(clamp(mix(tZ, nZ, 0.32), 0.0, 1.0), 1.35);
  float shorePatch = mix(0.24, 1.28, shape);
  float swing = sqrt(mag) * shorePatch * shoreNear * 0.36;
  float envelope = swing * (1.0 - 0.30);
  float level = (sw - shoreStep(0.22, 0.0, dd) * 0.30) * swing;
  float trail = (sin(p - 3.14159265 * 0.85) * 0.5 + 0.5) * mag * shorePatch * shoreNear;
  float fray = (shoreNoise(vec2(xz.x - dr * 1.4, xz.y + dr * 0.4) / 1.75) - 0.5) * 0.075 * shoreNear;
  return vec4(level, trail, envelope, fray);
}
float shoreLip(float dh) {
  float e = clamp(1.0 - (dh + 0.02) * 5.0, 0.0, 1.0);
  return sqrt(max(1.0 - e * e, 0.0)) * shoreStep(0.55, 0.12, dh) * shoreStep(-0.07, 0.015, dh) * 0.085;
}
float shoreFoam(float trail, float dh) {
  float dry = shoreStep(-0.045, 0.012, dh);
  float edge = dry * shoreStep(0.13, 0.03, dh);
  return clamp(max(trail * shoreStep(0.45, 0.03, dh) * dry * 0.55, edge), 0.0, 1.0);
}
`;function Vv(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Wv(i){const e=Math.log2(i),t=new Uint16Array(i);for(let c=0;c<i;c++){let h=0;for(let u=0;u<e;u++)h|=(c>>u&1)<<e-1-u;t[c]=h}const n=new Float64Array(i),s=new Float64Array(i);for(let c=0;c<i;c++)n[c]=Math.cos(2*Math.PI*c/i),s[c]=Math.sin(2*Math.PI*c/i);const r=new Float64Array(i),a=new Float64Array(i),l=e&1;function o(c,h,u,d){for(let g=0;g<i;g++){const v=u+t[g]*d;r[g]=c[v],a[g]=h[v]}let f=1;if(l){for(let g=0;g<i;g+=2){const v=r[g+1],m=a[g+1];r[g+1]=r[g]-v,a[g+1]=a[g]-m,r[g]+=v,a[g]+=m}f=2}for(;f<i;f<<=2){const g=f*4,v=i/g;for(let m=0;m<f;m++){const p=n[m*v],y=s[m*v],E=n[2*m*v],_=s[2*m*v];for(let S=m;S<i;S+=g){const w=S+f,R=S+2*f,x=S+3*f,T=r[w]*E-a[w]*_,P=r[w]*_+a[w]*E,k=r[x]*E-a[x]*_,z=r[x]*_+a[x]*E,K=r[S]+T,N=a[S]+P,Z=r[S]-T,ie=a[S]-P,te=r[R]+k,J=a[R]+z,Y=r[R]-k,ue=a[R]-z,me=te*p-J*y,Be=te*y+J*p,se=-(Y*y+ue*p),He=Y*p-ue*y;r[S]=K+me,a[S]=N+Be,r[R]=K-me,a[R]=N-Be,r[w]=Z+se,a[w]=ie+He,r[x]=Z-se,a[x]=ie-He}}}for(let g=0;g<i;g++){const v=u+g*d;c[v]=r[g],h[v]=a[g]}}return(c,h)=>{for(let u=0;u<i;u++)o(c,h,u*i,1);for(let u=0;u<i;u++)o(c,h,u,i)}}const Xv=(i,e)=>.076*Math.pow(Ei*i/(e*e),-.22),qv=(i,e)=>22*Math.pow(e*i/(Ei*Ei),-.33);function Yv(i,e){const t=i*Math.sqrt(e/Ei);return t<1?.5*t*t:t<2?1-.5*(2-t)*(2-t):1}function Kv(i){const e=i*i,t=e*i,n=t*i;return i<5?-564e-6*n+.00776*t-.044*e+.192*i+.163:-48e-9*n+107e-7*t-953e-6*e+.059*i+.393}function Zv(i,e,t,n){const s=n.peakOmega,r=i<s?.07:.09,a=i-s,l=Math.exp(-a*a/(2*r*r*s*s)),o=n.alpha*Ei*Ei*Math.pow(i,-5)*Math.exp(-1.25*Math.pow(s/i,4))*Math.pow(n.gamma,l)*Yv(i,t),c=i/s,h=c<1?6.97*Math.pow(c,5):9.77*Math.pow(c,-2.5),u=Math.min(Math.max(h+Math.tanh(Math.min(c,20))*16*n.swell*n.swell,0),60),d=Kv(u)*Math.pow(Math.max(Math.abs(Math.cos((e-n.dir)*.5)),1e-5),2*u),f=Math.cos(e-n.dir),g=2/Math.PI*f*f;return o*(g+(d-g)*n.spreadBlend)*n.scale}function Sh(i,e,t,n,s,r){return{scale:i,alpha:Xv(n,e),peakOmega:qv(n,e),gamma:3.3,spreadBlend:s,swell:r,dir:t*Math.PI/180,fade:.01}}let Wn=null;function $v(){if(Wn)return Wn;const i=128,e=new Uint8Array(i*i*4);let t=7;const n=()=>(t=t*16807%2147483647)/2147483647,s=[];for(let l=0;l<4;l++)for(let o=0;o<10;o++)s.push({ch:l,fx:Math.round(1+n()*5)*(n()>.5?1:-1),fy:Math.round(1+n()*5)*(n()>.5?1:-1),ph:n()*Math.PI*2,amp:.5+n()});const r=new Float32Array(i*i*4),a=[0,0,0,0];for(const l of s){a[l.ch]+=l.amp;const o=new Float32Array(i),c=new Float32Array(i);for(let h=0;h<i;h++)o[h]=Math.sin(2*Math.PI*l.fx*h/i),c[h]=Math.cos(2*Math.PI*l.fx*h/i);for(let h=0;h<i;h++){const u=2*Math.PI*l.fy*h/i+l.ph,d=Math.sin(u)*l.amp,f=Math.cos(u)*l.amp;for(let g=0;g<i;g++)r[(h*i+g)*4+l.ch]+=o[g]*f+c[g]*d}}for(let l=0;l<r.length;l++)e[l]=Math.round((r[l]/a[l&3]*.5+.5)*255);return Wn=new wn(e,i,i,Bt),Wn.wrapS=Wn.wrapT=In,Wn.magFilter=Et,Wn.minFilter=zn,Wn.generateMipmaps=!0,Wn.anisotropy=4,Wn.needsUpdate=!0,Wn}function yh(i,e,t){const n=new wn(i,e,e,Bt,on);return n.wrapS=n.wrapT=In,n.magFilter=Et,n.minFilter=zn,n.generateMipmaps=t,n.anisotropy=8,n.needsUpdate=!0,n}function jv(i,e,t,n=256){const{minX:s,minZ:r,maxX:a,maxZ:l}=e,o=new Float32Array(n*n*4),c=new Uint8Array(n*n),h=(a-s)/(n-1),u=(l-r)/(n-1);for(let p=0;p<n;p++)for(let y=0;y<n;y++){const E=i(s+y*h,r+p*u),_=p*n+y;o[_*4]=E,c[_]=E>t?1:0}const d=new Float32Array(n*n),f=1e9,g=Math.min(h,u),v=Math.hypot(h,u);for(let p=0;p<d.length;p++){const y=p%n,E=p/n|0,_=c[p],S=y>0&&c[p-1]!==_||y<n-1&&c[p+1]!==_||E>0&&c[p-n]!==_||E<n-1&&c[p+n]!==_;d[p]=S?g*.5:f}for(let p=0;p<n;p++)for(let y=0;y<n;y++){const E=p*n+y;let _=d[E];y>0&&(_=Math.min(_,d[E-1]+h)),p>0&&(_=Math.min(_,d[E-n]+u),y>0&&(_=Math.min(_,d[E-n-1]+v)),y<n-1&&(_=Math.min(_,d[E-n+1]+v))),d[E]=_}for(let p=n-1;p>=0;p--)for(let y=n-1;y>=0;y--){const E=p*n+y;let _=d[E];y<n-1&&(_=Math.min(_,d[E+1]+h)),p<n-1&&(_=Math.min(_,d[E+n]+u),y<n-1&&(_=Math.min(_,d[E+n+1]+v)),y>0&&(_=Math.min(_,d[E+n-1]+v))),d[E]=_}for(let p=0;p<d.length;p++)o[p*4+1]=c[p]?d[p]:-d[p];const m=new wn(o,n,n,Bt,on);return m.wrapS=m.wrapT=pn,m.magFilter=m.minFilter=Et,m.generateMipmaps=!1,m.needsUpdate=!0,{texture:m,data:o,res:n,bounds:{minX:s-h/2,minZ:r-u/2,maxX:a+h/2,maxZ:l+u/2}}}const bh=`
uniform sampler2D oDisp0; uniform sampler2D oDisp1; uniform sampler2D oDisp2;
uniform vec3 oL; uniform vec3 oTexel; uniform vec3 oOn;
uniform float oTime; uniform float oSeaLevel; uniform float oSwash;
uniform sampler2D oBed; uniform vec4 oBedRect; uniform float oBedMix;
varying vec2 vOXZ; varying vec3 vOWorld;
${Gv}
// 1 inside the seabed rectangle (fading over its last 3%), times the seabed switch
float oBedIn( vec2 uv ) { vec2 e = min( uv, 1.0 - uv ); return shoreStep( 0.0, 0.03, min( e.x, e.y ) ) * oBedMix; }
`,Jv=`
uniform float oCellK; uniform float oCellMin; uniform float oFar;
`,Qv=`
vec3 transformed = vec3( position );
vec2 oXZ = ( modelMatrix * vec4( position, 1.0 ) ).xz;
float oCell = max( length( position.xz ) * oCellK, oCellMin );
vec3 oD = vec3( 0.0 );
oD += oOn.x * textureLod( oDisp0, oXZ / oL.x, max( log2( oCell / oTexel.x ) - 0.5, 0.0 ) ).xyz;
oD += oOn.y * textureLod( oDisp1, oXZ / oL.y, max( log2( oCell / oTexel.y ) - 0.5, 0.0 ) ).xyz;
oD += oOn.z * textureLod( oDisp2, oXZ / oL.z, max( log2( oCell / oTexel.z ) - 0.5, 0.0 ) ).xyz;
float oGeo = 1.0, oSurge = 0.0, oStill = 1e4, oPitchK = 0.0;
vec2 oPitch = vec2( 0.0 );
#ifdef OCEAN_SEABED
  vec2 oUV = ( oXZ - oBedRect.xy ) * oBedRect.zw;
  vec2 oHD = textureLod( oBed, oUV, 0.0 ).xy;
  float oBedH = oHD.x - oSeaLevel;
  float oSD = max( -oBedH, 0.0 );
  float oIn = oBedIn( oUV );
  // Green's-law gain on the way in, collapse over the last couple of metres
  oGeo = mix( 1.0, ( 1.0 + 0.55 * shoreStep( 17.0, 3.5, oSD ) ) * shoreStep( 0.25, 2.6, oSD ), oIn );
  oStill = mix( 1e4, oSD, oIn );
  vec2 oEx = vec2( 4.0 * oBedRect.z, 0.0 ), oEz = vec2( 0.0, 4.0 * oBedRect.w );
  vec2 oUp = vec2( textureLod( oBed, oUV + oEx, 0.0 ).x - textureLod( oBed, oUV - oEx, 0.0 ).x,
                   textureLod( oBed, oUV + oEz, 0.0 ).x - textureLod( oBed, oUV - oEz, 0.0 ).x );
  oPitch = oUp / max( length( oUp ), 1e-4 );
  oPitchK = shoreStep( 11.0, 1.2, oSD ) * oIn * 0.55;
  oSurge = shoreSample( oXZ, oBedH, oHD.y, oTime ).x * oIn * oSwash;
#endif
float oDy = oD.y * oGeo;
float oRoom = oStill * 0.62 + 0.04;
float oPos = max( oDy, 0.0 );
float oFlat = oPos + oRoom * ( exp( ( oDy - oPos ) / oRoom ) - 1.0 );
float oY = mix( oDy, oFlat, shoreStep( 9.0, 0.4, oStill ) ) + oSurge;
#ifdef OCEAN_SEABED
  oY += shoreLip( oY - oBedH ) * oIn;
#endif
float oLean = max( oY, 0.0 ) * oPitchK;
transformed.x += oD.x * oGeo + oPitch.x * oLean;
transformed.y += oY;
transformed.z += oD.z * oGeo + oPitch.y * oLean;
vOXZ = oXZ;
vOWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;
`,eM=`
vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );
vec4 oMv = mvPosition;
if ( oFar > 0.0 ) oMv.xyz *= min( 1.0, oFar / length( oMv.xyz ) );
gl_Position = projectionMatrix * oMv;
`,tM=`
uniform sampler2D oDer0; uniform sampler2D oDer1; uniform sampler2D oDer2; uniform sampler2D oNoise;
uniform vec3 oScatter; uniform vec3 oFoamCol; uniform vec3 oBedColor; uniform vec3 oAbsorb;
uniform vec3 oSunDir; uniform vec3 oSunCol;
uniform float oDetail; uniform float oSSS; uniform float oCaustics; uniform float oPxPerM;
uniform float oBodyGain; uniform float oRoughFar; uniform float oFlatten; uniform float oFoamAmt;
uniform vec3 oSlopeVar; uniform vec3 oBandMin; uniform vec2 oWind; uniform float oShoreFoamK;
`,nM=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
vec3 oPosW = vOWorld;
vec3 oToCam = cameraPosition - oPosW;
float oDist = length( oToCam );
vec3 oV = oToCam / max( oDist, 1e-3 );
float oPx = oDist * oPxPerM;   // metres per pixel at this range
vec2 oUV0 = vOXZ / oL.x, oUV1 = vOXZ / oL.y, oUV2 = vOXZ / oL.z;
// slopes + fold terms; each band fades once its longest wave (L/6) stops covering pixels,
// on top of the mip/anisotropic filtering, so ripples go first and the swell reaches the horizon
vec3 oFade = vec3( shoreStep( oL.x / 12.0, oL.x / 60.0, oPx ), shoreStep( oL.y / 12.0, oL.y / 60.0, oPx ), shoreStep( oL.z / 12.0, oL.z / 60.0, oPx ) );
vec4 oDer = oOn.x * texture2D( oDer0, oUV0 ) * oFade.x
          + oOn.y * texture2D( oDer1, oUV1 ) * oFade.y
          + oOn.z * texture2D( oDer2, oUV2 ) * oFade.z;
// specular AA: slope variance the pixel can no longer resolve (faded bands + what the mip
// filter averages away, with the footprint stretched at grazing view) widens the GGX lobe,
// so far water reads as smooth glitter streaks instead of white grain
float oPxA = oPx / max( sqrt( abs( oV.y ) ), 0.5 );
vec3 oResolved = oFade * ( 1.0 - vec3( shoreStep( oBandMin.x * 0.3, oBandMin.x * 3.0, oPxA ),
    shoreStep( oBandMin.y * 0.3, oBandMin.y * 3.0, oPxA ), shoreStep( oBandMin.z * 0.3, oBandMin.z * 3.0, oPxA ) ) );
float oLost = 0.5 * dot( oSlopeVar * oOn, 1.0 - oResolved );
float oCarve = shoreStep( 0.5, 0.08, oPxA ); // sub-texel foam carving only where it is resolved
// whitecaps: the persistent Jacobian of the two long bands, thresholded per pixel (not per texel)
// (the threshold wanders with a drifting noise so a cap's outline is ragged, not the texel grid)
vec4 oFN = texture2D( oNoise, vOXZ * 0.31 + oTime * vec2( 0.009, -0.012 ) );
float oWob = ( oFN.x * 0.6 + oFN.y * 0.4 - 0.5 ) * 0.34 * oCarve;
// the 100 m band's caps are a metre or two across: gone once a pixel covers them
float oTurb = oOn.x * clamp( ( 0.4 + oWob - texture2D( oDisp0, oUV0 ).w ) * 2.5, 0.0, 1.0 )
            + oOn.y * clamp( ( 0.4 + oWob - texture2D( oDisp1, oUV1 ).w ) * 2.5, 0.0, 1.0 ) * shoreStep( 0.9, 0.25, oPxA );
oTurb *= oFoamAmt;
float oSX = oDer.x / max( 1.0 + oDer.z, 0.2 );
float oSZ = oDer.y / max( 1.0 + oDer.w, 0.2 );
// sub-grid detail: one baked noise, two drifting scales, gone where it would only shimmer
float oNear = shoreStep( 900.0, 90.0, oDist ) * shoreStep( 0.35, 0.06, oPxA );
oLost += oDetail * oDetail * 0.2 * ( 1.0 - oNear );
vec4 oN1 = texture2D( oNoise, vOXZ * 0.06 + oTime * vec2( 0.014, 0.011 ) );
vec4 oN2 = texture2D( oNoise, vOXZ * 0.17 + oTime * vec2( -0.021, 0.017 ) );
oSX += ( oN1.x + oN2.x - 1.0 ) * oDetail * oNear;
oSZ += ( oN1.y + oN2.y - 1.0 ) * oDetail * oNear;
vec3 oN = normalize( vec3( -oSX, 1.0, -oSZ ) );
oN = normalize( mix( oN, vec3( 0.0, 1.0, 0.0 ), clamp( sqrt( oDist / 2600.0 ) * 0.55, 0.0, oFlatten ) ) );

// water column: clamped for the optics, signed for deciding where the sea stops
float oDepth = ${ca.toFixed(1)}, oColumn = ${ca.toFixed(1)}, oShoreK = 0.0;
vec2 oBedHD = vec2( 0.0, 1e4 );
#ifdef OCEAN_SEABED
  vec2 oBUV = ( oPosW.xz - oBedRect.xy ) * oBedRect.zw;
  vec2 oHDf = texture2D( oBed, oBUV ).xy;
  oShoreK = oBedIn( oBUV );
  oBedHD = vec2( oHDf.x - oSeaLevel, oHDf.y );
  oColumn = mix( ${ca.toFixed(1)}, oPosW.y - oHDf.x, oShoreK );
  oDepth = max( oColumn, 0.0 );
#endif

// downwelling light on a level surface, from whatever lights + environment the scene has
vec3 oUpV = normalize( ( viewMatrix * vec4( 0.0, 1.0, 0.0, 0.0 ) ).xyz );
vec3 oSkyE = getAmbientLightIrradiance( ambientLightColor );
#if NUM_HEMI_LIGHTS > 0
  for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) oSkyE += getHemisphereLightIrradiance( hemisphereLights[ i ], oUpV );
#endif
#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
  oSkyE += getIBLIrradiance( oUpV );
#endif
vec3 oE = ( oSkyE + oSunCol * max( oSunDir.y, 0.0 ) ) * RECIPROCAL_PI;

// Beer-Lambert down the column and back up the (slanted) view path
float oPath = oDepth * ( 1.0 + 1.0 / max( abs( oV.y ), 0.22 ) );
vec3 oTrans = exp( -oAbsorb * oPath );
vec2 oBedUV = oPosW.xz + oN.xz * oDepth * 0.5;
float oBedN = texture2D( oNoise, oBedUV * 0.055 ).x * 0.55 + texture2D( oNoise, oBedUV * 0.21 ).y * 0.45;
// caustics for free: horizontal compression of the wave field is where refracted sun converges
float oFocus = max( 1.0 - ( oDer.z + oDer.w ) * 2.6, 0.0 );
float oCaus = clamp( oFocus * oFocus * oFocus - 0.9, -0.3, 1.6 ) * oCaustics * shoreStep( 14.0, 1.0, oDepth ) * max( oSunDir.y, 0.0 );
vec3 oBedLit = oBedColor * ( oBedN * 0.5 + 0.7 ) * ( 1.0 + oCaus ) * oE;
vec3 oVolume = mix( diffuse, oScatter, exp( -oDepth / 7.0 ) ) * ( 1.0 - oTrans );
#ifdef OCEAN_SEETHROUGH
  vec3 oBody = oVolume * oE * oBodyGain;   // the floor itself is the geometry behind, seen through
#else
  vec3 oBody = oBedLit * oTrans + oVolume * oE * oBodyGain;
#endif
// crest scatter: refracted view ray toward the sun, plus a height gate (crests glow, troughs dark)
vec3 oRF = refract( -oV, oN, 0.75 );
float oThrough = pow( max( dot( oRF, oSunDir ), 0.0 ), 14.0 ) * smoothstep( -0.02, 0.25, oSunDir.y );
float oRel = oPosW.y - oSeaLevel;
float oCrest = clamp( oRel * 0.42 + 0.38, 0.0, 1.0 );
oBody += vec3( 0.28, 0.62, 0.55 ) * oSunCol * RECIPROCAL_PI * ( oThrough * oSSS * 1.8 + oCrest * 0.025 ) * oBodyGain;
float oFres = 0.02 + 0.98 * pow( 1.0 - max( dot( oN, oV ), 0.0 ), 5.0 );

// foam: persistent Jacobian whitecaps (baked on the CPU), depth-limited breakers, lace, swash
// whitecaps: drawn out downwind into streaks and holed into broken patches (only where a
// pixel resolves it), translucent like the original's
vec2 oWp = vec2( -oWind.y, oWind.x );
vec2 oSC = vec2( dot( vOXZ, oWind ) * 0.03, dot( vOXZ, oWp ) * 0.22 ) + oTime * vec2( 0.006, 0.0 );
float oStreak = texture2D( oNoise, oSC ).x * 0.65 + texture2D( oNoise, oSC * 2.3 + 0.37 ).y * 0.35;
float oCov = smoothstep( 0.15, 1.6, oTurb * mix( 1.0, 0.3 + 1.5 * oStreak, oCarve ) );
oCov *= mix( 1.0, smoothstep( 0.28, 0.6, oFN.w * 0.75 + oStreak * 0.25 + oCov * 0.3 ), oCarve );
oCov *= 0.8 * mix( 0.5, 1.0, oFN.z );
float oSheet = smoothstep( 0.35, 0.72, oN2.x * 0.6 + oN1.y * 0.4 );
float oSteep = ( oRel + 0.3 ) / max( oDepth, 0.35 );
float oSurf = smoothstep( 0.30, 0.85, oSteep ) * shoreStep( 7.0, 0.5, oDepth ) * mix( 0.5, 1.0, oN1.w * 0.5 + oN2.z * 0.5 );
float oLace = smoothstep( 0.10, 0.48, oSteep ) * shoreStep( 2.6, 0.05, oDepth ) * smoothstep( -0.02, 0.07, oColumn )
            * smoothstep( 0.34, 0.78, oN2.w ) * 0.55;
oCov = clamp( max( oCov, max( oSurf, oLace ) * oShoreFoamK ), 0.0, 1.0 ) * mix( 1.0, 0.5, smoothstep( 350.0, 2200.0, oDist ) );
oCov *= mix( oSheet, 1.0, smoothstep( 0.05, 0.45, oDepth ) );
float oShoreFoam = 0.0, oEdge = oColumn;
#ifdef OCEAN_SEABED
  vec4 oSw = shoreSample( oPosW.xz, oBedHD.x, oBedHD.y, oTime );
  oEdge -= oSw.w * oShoreK;
  oShoreFoam = shoreFoam( oSw.y * oSwash, oEdge ) * oShoreK * oSheet * oShoreFoamK;
  oCov = max( oCov, oShoreFoam );
#endif
float oFoamN = mix( 0.55, 0.9, oN1.z * 0.5 + oN2.w * 0.5 );
diffuseColor.rgb = oFoamCol * oFoamN * oCov;   // foam is the only diffuse surface: lit by three
diffuseColor.a = clamp( max( smoothstep( 0.0, 0.18, oEdge ), oShoreFoam ), 0.0, 1.0 );
#ifdef OCEAN_SEETHROUGH
  // premultiplied: reflection + body added in full, what is behind kept by transmittance x (1 - F)
  diffuseColor.a *= clamp( 1.0 - dot( oTrans, vec3( 0.3333 ) ) * ( 1.0 - oFres ) * ( 1.0 - oCov ), 0.0, 1.0 );
#endif
float oA = roughnessFactor * roughnessFactor;
roughnessFactor = sqrt( sqrt( oA * oA + oLost ) );
roughnessFactor = mix( max( roughnessFactor, oRoughFar * smoothstep( 30.0, 2500.0, oDist ) ), 0.85, oCov );
vec3 normal = normalize( ( viewMatrix * vec4( oN, 0.0 ) ).xyz );
vec3 nonPerturbedNormal = normal;   // pixel-to-pixel normal change becomes roughness (specular AA)
`,iM=`
#include <lights_fragment_end>
float oKeep = 1.0 - oCov;
reflectedLight.directSpecular *= oKeep;
reflectedLight.indirectSpecular *= oKeep;
#ifndef USE_ENVMAP
  // no environment: reflect the hemisphere/ambient sky so the sea is never a black mirror
  vec3 oR = reflect( -oV, oN );
  vec3 oRefl = getAmbientLightIrradiance( ambientLightColor );
  #if NUM_HEMI_LIGHTS > 0
    for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) oRefl += getHemisphereLightIrradiance( hemisphereLights[ i ], normalize( ( viewMatrix * vec4( oR, 0.0 ) ).xyz ) );
  #endif
  reflectedLight.indirectSpecular += oRefl * RECIPROCAL_PI * oFres * oKeep;
#endif
totalEmissiveRadiance += oBody * ( 1.0 - oFres ) * oKeep;
`,sM={ocean:{windSpeed:9,fetch:1e5,choppiness:1.3,foam:1,swell:1,detail:.1,deepColor:"#0a2432",scatterColor:"#2f7d6d",absorb:[.42,.085,.033],roughness:.06,roughFar:.3,flatten:.6,sss:.55},calm:{windSpeed:3,fetch:3e3,choppiness:.7,foam:0,swell:0,detail:.03,deepColor:"#06100f",scatterColor:"#18392f",absorb:[.6,.22,.2],roughness:.03,roughFar:.08,flatten:.85,sss:.25}};function rM(i={}){const e=performance.now(),t=i.mode==="calm"?"calm":"ocean",n=sM[t],s=t==="calm"&&i.size&&Math.max(...[].concat(i.size))<30,r={windSpeed:i.windSpeed??(s?2:n.windSpeed),windDirection:i.windDirection??45,swellDirection:i.swellDirection,waveScale:i.waveScale??(s?.12:1),choppiness:i.choppiness??n.choppiness,foam:i.foam??n.foam,swell:i.swell??n.swell,fetch:i.fetch??n.fetch,depth:i.depth??500},a=i.seaLevel??0,l=i.seed??1,o=i.name??(t==="calm"?"Calm water":"Ocean"),c=[{L:1e3,N:128,foam:!0},{L:100,N:128,foam:!0},{L:10,N:64,foam:!1}];t==="calm"&&(c[0].off=!0),c.forEach((F,I)=>{F.lo=I===0?1e-4:2*Math.PI/F.L*6,F.hi=I===c.length-1?1e6:2*Math.PI/c[I+1].L*6;const D=F.N*F.N;F.dk=2*Math.PI/F.L,F.nf=F.foam?5:3,F.kx=new Float32Array(D),F.kz=new Float32Array(D),F.kl=new Float32Array(D),F.ki=new Float32Array(D),F.om=new Float32Array(D),F.h0r=new Float32Array(D),F.h0i=new Float32Array(D),F.hmr=new Float32Array(D),F.hmi=new Float32Array(D),F.live=new Uint8Array(D),F.re=[],F.im=[];for(let O=0;O<F.nf;O++)F.re.push(new Float32Array(D)),F.im.push(new Float32Array(D));F.fft=Wv(F.N),F.disp=new Float32Array(D*4),F.der=new Float32Array(D*4),F.dispTex=yh(F.disp,F.N,!0),F.derTex=yh(F.der,F.N,!0);const Q=Vv(l*7919+I*104729+13);F.xi=new Float32Array(D*2);for(let O=0;O<D;O++){const re=Math.max(Q(),1e-9),ve=Q(),Ie=Math.sqrt(-2*Math.log(re));F.xi[O*2]=Ie*Math.cos(2*Math.PI*ve),F.xi[O*2+1]=Ie*Math.sin(2*Math.PI*ve)}for(let O=0;O<F.N;O++)for(let re=0;re<F.N;re++){const ve=O*F.N+re,Ie=re<F.N/2?re:re-F.N,Se=O<F.N/2?O:O-F.N,Ne=Ie*F.dk,Ce=Se*F.dk,L=Math.hypot(Ne,Ce);F.kx[ve]=Ne,F.kz[ve]=Ce,F.kl[ve]=L,F.ki[ve]=L>1e-6?1/L:0}});const h={updateMs:0,buildMs:0,waveHeight:0,peakWavelength:0,triangles:0,vertices:0,draws:1},u=[[.2,.45,.75,1.1],[.12,.25,.4],[]],d=.55;function f(){const F=r.swellDirection??r.windDirection+25,I=[Sh(1,Math.max(r.windSpeed,.5),r.windDirection,r.fetch,t==="calm"?.6:.9,.2)];r.swell>0&&I.push(Sh(.12*r.swell,14,F,8e5,1,1));let D=0;for(const O of c){const re=O.N*O.N;let ve=0,Ie=0,Se=0,Ne=0,Ce=0;for(let L=0;L<re;L++){const ne=O.kl[L],_e=!O.off&&ne>=O.lo&&ne<O.hi,xe=Math.max(ne,O.lo),ee=Math.min(xe*r.depth,20),de=Math.tanh(ee),C=Math.sqrt(Ei*xe*de),Ae=Math.cosh(ee),Ge=Ei*(r.depth*xe/(Ae*Ae)+de)/(2*C);if(O.om[L]=C,!_e){O.h0r[L]=O.h0i[L]=0;continue}const A=Math.atan2(O.kz[L],O.kx[L]);let M=0;for(const q of I)M+=Zv(C,A,r.depth,q)*Math.exp(-xe*xe*q.fade*q.fade);const B=Math.sqrt(Math.max(2*M*Math.abs(Ge)/xe,0))*O.dk*r.waveScale;O.h0r[L]=O.xi[L*2]*B,O.h0i[L]=O.xi[L*2+1]*B}for(let L=0;L<O.N;L++)for(let ne=0;ne<O.N;ne++){const _e=L*O.N+ne,xe=(O.N-L)%O.N*O.N+(O.N-ne)%O.N;O.hmr[_e]=O.h0r[xe],O.hmi[_e]=-O.h0i[xe],O.live[_e]=O.h0r[_e]!==0||O.h0i[_e]!==0||O.hmr[_e]!==0||O.hmi[_e]!==0?1:0;const ee=O.h0r[_e]**2+O.h0i[_e]**2+O.hmr[_e]**2+O.hmi[_e]**2;D+=ee,Se+=ee*O.om[_e],Ne+=ee;const de=ee*O.kl[_e]*O.kl[_e];ve+=de*O.om[_e],Ie+=de,Ce+=de}O.wH=Ne>0?Se/Ne:1,O.wD=Ie>0?ve/Ie:1,O.slopeVar=Ce,O.hist=u[c.indexOf(O)],O.hc=O.hist.map(L=>Math.cos(O.wD*L)),O.hs=O.hist.map(L=>Math.sin(O.wD*L))}if(h.waveHeight=+(4*Math.sqrt(D)).toFixed(2),R){R.oSlopeVar.value.set(...c.map(re=>re.slopeVar));const O=Kn.degToRad(r.windDirection);R.oWind.value.set(Math.cos(O),Math.sin(O))}const Q=I[0].peakOmega;h.peakWavelength=+(2*Math.PI*Ei/(Q*Q)).toFixed(1)}let g=null;function v(F){const I=r.choppiness;R.oFoamAmt.value=r.foam;for(const D of c){if(D.off)continue;const Q=D.N*D.N,[O,re,ve,Ie,Se]=D.re,[Ne,Ce,L,ne,_e]=D.im,{h0r:xe,h0i:ee,hmr:de,hmi:C,kx:Ae,kz:Ge,kl:A,ki:M,om:B}=D,q=D.live;for(let le=0;le<Q;le++){if(!q[le]){O[le]=Ne[le]=re[le]=Ce[le]=ve[le]=L[le]=0,D.foam&&(Ie[le]=ne[le]=Se[le]=_e[le]=0);continue}const ae=B[le]*F,fe=Math.cos(ae),we=Math.sin(ae),ye=xe[le],De=ee[le],be=de[le],Ve=C[le],We=ye*fe+De*we,Je=De*fe-ye*we,V=be*fe-Ve*we,Oe=be*we+Ve*fe,he=We+V,Ee=Je+Oe,Te=Ae[le],Me=Ge[le],Ze=M[le],qe=Te*Ze,lt=Me*Ze;if(O[le]=-qe*Ee-lt*he,Ne[le]=qe*he-lt*Ee,ve[le]=-Te*Ee-Me*he,L[le]=Te*he-Me*Ee,D.foam){re[le]=2*We,Ce[le]=2*Je;const ct=Te*qe,yt=Me*lt,Nt=Te*lt,tn=A[le];Ie[le]=-ct*he+yt*Ee,ne[le]=-ct*Ee-yt*he,Se[le]=-Nt*he-tn*(We-V),_e[le]=-Nt*Ee-tn*(Je-Oe)}else{const ct=A[le];re[le]=he+ct*Ee,Ce[le]=Ee-ct*he}}for(let le=0;le<D.nf;le++)D.fft(D.re[le],D.im[le]);const W=D.disp,pe=D.der;if(D.foam){const le=D.hc,ae=D.hs,fe=D.hist,we=fe.length;for(let ye=0;ye<Q;ye++){const De=Ie[ye],be=ne[ye],Ve=Se[ye],We=De+be,Je=_e[ye],V=ye*4;W[V]=I*O[ye],W[V+1]=re[ye],W[V+2]=I*Ne[ye],pe[V]=ve[ye],pe[V+1]=L[ye],pe[V+2]=I*De,pe[V+3]=I*be;const Oe=(1+I*De)*(1+I*be)-I*I*Ve*Ve;let he=Oe;for(let Ee=0;Ee<we;Ee++){const Te=Oe+I*(We*le[Ee]-Je*ae[Ee]-We)+d*fe[Ee];Te<he&&(he=Te)}W[V+3]=he}}else for(let le=0;le<Q;le++){const ae=le*4,fe=.5*I*Ce[le];W[ae]=I*O[le],W[ae+1]=re[le],W[ae+2]=I*Ne[le],W[ae+3]=0,pe[ae]=ve[le],pe[ae+1]=L[le],pe[ae+2]=fe,pe[ae+3]=fe}D.dispTex.needsUpdate=!0,D.derTex.needsUpdate=!0}}let m=null;const p=new ut(0,0,1,1),y=new wn(new Float32Array([-ca,-1e4,0,0]),1,1,Bt,on);y.needsUpdate=!0;const E=new H(.3,.6,-.5).normalize(),_=new $e(3,2.9,2.7);let S=i.sun??null,w=!1;const R={oDisp0:{value:c[0].dispTex},oDisp1:{value:c[1].dispTex},oDisp2:{value:c[2].dispTex},oDer0:{value:c[0].derTex},oDer1:{value:c[1].derTex},oDer2:{value:c[2].derTex},oNoise:{value:$v()},oL:{value:new H(...c.map(F=>F.L))},oTexel:{value:new H(...c.map(F=>F.L/F.N))},oOn:{value:new H(...c.map(F=>F.off?0:1))},oTime:{value:0},oSeaLevel:{value:a},oSwash:{value:i.swash??(s?0:t==="calm"?.25:1)},oBed:{value:y},oBedRect:{value:p},oBedMix:{value:1},oCellK:{value:0},oCellMin:{value:.25},oFar:{value:0},oScatter:{value:new $e(i.scatterColor??n.scatterColor)},oFoamCol:{value:new $e(i.foamColor??"#e9efe6")},oBedColor:{value:new $e(i.seabedColor??"#8a7d64")},oAbsorb:{value:new H(...i.absorb??n.absorb)},oSunDir:{value:E},oSunCol:{value:_},oDetail:{value:n.detail},oSSS:{value:i.sss??n.sss},oCaustics:{value:.9},oPxPerM:{value:.0013},oBodyGain:{value:i.bodyGain??.55},oRoughFar:{value:n.roughFar},oFlatten:{value:n.flatten},oFoamAmt:{value:r.foam},oSlopeVar:{value:new H},oBandMin:{value:new H(c[1].L/6,c[2].L/6,2*c[2].L/c[2].N)},oWind:{value:new st(1,0)},oShoreFoamK:{value:t==="calm"?0:1}},x=new jn({color:i.deepColor??n.deepColor,roughness:n.roughness,metalness:0,ior:1.333,specularIntensity:1,side:Ln});x.forceSinglePass=!0,x.name=i.materialName??(t==="calm"?"Water · Calm":"Ocean · Water"),x.onBeforeCompile=F=>{Object.assign(F.uniforms,R),F.vertexShader=F.vertexShader.replace("#include <common>",`#include <common>
`+bh+Jv).replace("#include <begin_vertex>",Qv).replace("#include <project_vertex>",eM),F.fragmentShader=F.fragmentShader.replace("#include <common>",`#include <common>
`+bh+tM).replace("#include <normal_fragment_begin>",nM).replace("#include <lights_fragment_end>",iM)},x.customProgramCacheKey=()=>"edit3d-ocean-v2";let T,P=!i.size;const k=i.detail??1;if(P){const F=Math.max(64,Math.round(256*Math.sqrt(k)/4)*4),I=Math.exp(2*Math.PI/F),D=.25,Q=D/(I-1),O=i.radius??6e4,re=Math.ceil(Math.log(O/Q+1)/Math.log(I)),ve=new Float32Array((1+re*F)*3);for(let L=1;L<=re;L++){const ne=Math.min(O,Q*(Math.pow(I,L)-1));for(let _e=0;_e<F;_e++){const xe=_e/F*Math.PI*2,ee=(1+(L-1)*F+_e)*3;ve[ee]=Math.cos(xe)*ne,ve[ee+2]=Math.sin(xe)*ne}}const Ie=new Uint32Array((F+(re-1)*F*2)*3);let Se=0;const Ne=(L,ne)=>1+(L-1)*F+ne%F;for(let L=0;L<F;L++)Ie[Se++]=0,Ie[Se++]=Ne(1,L+1),Ie[Se++]=Ne(1,L);for(let L=1;L<re;L++)for(let ne=0;ne<F;ne++){const _e=Ne(L,ne),xe=Ne(L,ne+1),ee=Ne(L+1,ne),de=Ne(L+1,ne+1);Ie[Se++]=_e,Ie[Se++]=xe,Ie[Se++]=de,Ie[Se++]=_e,Ie[Se++]=de,Ie[Se++]=ee}T=new Ot,T.setAttribute("position",new Ut(ve,3));const Ce=new Float32Array(ve.length);for(let L=1;L<Ce.length;L+=3)Ce[L]=1;T.setAttribute("normal",new Ut(Ce,3)),T.setIndex(new Ut(Ie,1)),T.boundingSphere=new _n(new H,O),R.oCellK.value=I-1,R.oCellMin.value=D}else{const[F,I]=Array.isArray(i.size)?i.size:[i.size,i.size],D=Math.max(.3/Math.sqrt(k),Math.max(F,I)/512,Math.sqrt(F*I/4e4));T=new yr(F,I,Math.ceil(F/D),Math.ceil(I/D)),T.rotateX(-Math.PI/2),R.oCellK.value=0,R.oCellMin.value=D}h.triangles=(T.index?T.index.count:T.attributes.position.count)/3,h.vertices=T.attributes.position.count;const z=new qt(T,x);z.name=o,z.frustumCulled=!1,z.receiveShadow=!0,z.castShadow=!1;const K=i.center??[0,0];z.position.set(P?0:K[0],a,P?0:K[1]);const N=new H,Z=new H,ie=new st;let te=null,J=null;z.onBeforeRender=(F,I,D)=>{if(N.setFromMatrixPosition(D.matrixWorld),P&&(z.position.set(N.x,a,N.z),z.updateMatrixWorld()),R.oFar.value=D.isPerspectiveCamera?D.far*.9:0,F.getDrawingBufferSize(ie),R.oPxPerM.value=D.isPerspectiveCamera?2*Math.tan(Kn.degToRad(D.fov)/2)/D.zoom/Math.max(ie.y,1):.001,!w){let Q=S;Q||((J!==I||!te||!te.parent)&&(J=I,te=null,I.traverse(O=>{!te&&O.isDirectionalLight&&O.visible&&(te=O)})),Q=te),Q&&(Q.updateMatrixWorld(),Z.setFromMatrixPosition(Q.target.matrixWorld),E.setFromMatrixPosition(Q.matrixWorld).sub(Z).normalize(),_.copy(Q.color).multiplyScalar(Q.intensity))}};const Y=i.seeThrough??t==="calm";function ue(F){if(m=null,F)if(F.heightTexture&&F.bounds)m={texture:F.heightTexture,bounds:F.bounds,heightAt:F.heightAt?.bind(F)};else if((F.heightAt||F.depthAt)&&F.bounds){const I=F.heightAt?(Q,O)=>F.heightAt(Q,O):(Q,O)=>a-F.depthAt(Q,O),D=jv(I,F.bounds,a,F.resolution??256);m={texture:D.texture,bounds:D.bounds,heightAt:I,baked:!0}}else console.warn("createOcean: seabed needs { heightTexture, bounds } or { heightAt | depthAt, bounds }");if(m){const I=m.bounds;p.set(I.minX,I.minZ,1/(I.maxX-I.minX),1/(I.maxZ-I.minZ)),R.oBed.value=m.texture,x.defines={OCEAN_SEABED:""},x.transparent=!0,x.depthWrite=!0,Y&&(x.defines.OCEAN_SEETHROUGH="",x.blending=Lh,x.blendSrc=yo,x.blendDst=ua,x.blendSrcAlpha=yo,x.blendDstAlpha=ua)}else R.oBed.value=y,x.defines={},x.transparent=!1;x.needsUpdate=!0}i.seabed&&ue(i.seabed);function me(F,I,D,Q){const O=F.N,re=I/F.L*O-.5,ve=D/F.L*O-.5,Ie=Math.floor(re),Se=Math.floor(ve),Ne=re-Ie,Ce=ve-Se,L=((Ie+1)%O+O)%O,ne=((Se+1)%O+O)%O,_e=(Ie%O+O)%O,xe=(Se%O+O)%O,ee=F.disp;for(let de=0;de<3;de++){const C=ee[(xe*O+_e)*4+de],Ae=ee[(xe*O+L)*4+de],Ge=ee[(ne*O+_e)*4+de],A=ee[(ne*O+L)*4+de];Q[de]+=(C*(1-Ne)+Ae*Ne)*(1-Ce)+(Ge*(1-Ne)+A*Ne)*Ce}}const Be=[0,0,0];function se(F,I){Be[0]=Be[1]=Be[2]=0;for(const D of c)D.off||me(D,F,I,Be);return Be}function He(F,I){let D=F,Q=I;for(let re=0;re<3;re++){const ve=se(D,Q);D=F-ve[0],Q=I-ve[2]}let O=se(D,Q)[1];if(m?.heightAt){const re=m.bounds,ve=(F-re.minX)/(re.maxX-re.minX),Ie=(I-re.minZ)/(re.maxZ-re.minZ);if(ve>0&&ve<1&&Ie>0&&Ie<1){const Se=Math.max(a-m.heightAt(F,I),0),Ne=(ne,_e,xe)=>{const ee=Math.min(Math.max((xe-ne)/(_e-ne),0),1);return ee*ee*(3-2*ee)};O*=(1+.55*Ne(17,3.5,Se))*Ne(.25,2.6,Se);const Ce=Se*.62+.04,L=Math.max(O,0);O=O+(L+Ce*(Math.exp((O-L)/Ce)-1)-O)*Ne(9,.4,Se)}}return a+O}f();const oe=i.time??0;return v(oe),g=oe,R.oTime.value=oe,h.buildMs=+(performance.now()-e).toFixed(1),{mesh:z,material:x,stats:h,params:r,mode:t,update(F,I=!1){if(F===g&&!I)return;const D=performance.now();v(F),g=F,R.oTime.value=F,h.updateMs=+(performance.now()-D).toFixed(2)},setWaves(F={}){let I=!1;for(const D of["windSpeed","windDirection","swellDirection","swell","waveScale","fetch","depth"])F[D]!==void 0&&F[D]!==r[D]&&(r[D]=F[D],I=!0);for(const D of["choppiness","foam"])F[D]!==void 0&&(r[D]=F[D]);I&&f(),v(g??0)},setSun(F,I){w=!0,E.copy(F).normalize(),I&&_.copy(I)},followLight(F){S=F,w=!1},setSeabed:ue,setSeabedVisible(F){R.oBedMix.value=F?1:0},heightAt:He,normalAt(F,I,D=new H){const O=He(F,I);return D.set(O-He(F+.5,I),.5,O-He(F,I+.5)).normalize()},uniforms:R,dispose(){T.dispose(),x.dispose(),y.dispose();for(const F of c)F.dispTex.dispose(),F.derTex.dispose();m?.baked&&m.texture.dispose()}}}const pl=1.75,aM=.15,oM=.73,rr=32,Xn=[{seg:7,spacing:1,outer:.15},{seg:4,spacing:1.6,outer:.42},{seg:2,spacing:2.7,outer:1}],wh=.11,lM={dark:[.07,.15,.055],base:[.19,.4,.15],tip:[.31,.46,.26],warm:[.6,.54,.38],rust:[.38,.19,.11]},Th={dark:[.09,.15,.075],base:[.23,.38,.19],tip:[.35,.43,.32],warm:[.66,.53,.41],rust:[.38,.19,.11]},cM={dark:[.24,.2,.1],base:[.58,.5,.29],tip:[.76,.68,.46],warm:[.8,.66,.44],rust:[.47,.29,.15]};function js(i){const e=Math.imul(i>>>0,747796405)+2891336453>>>0,t=Math.imul((e>>>(e>>>28)+4^e)>>>0,277803737)>>>0;return(t>>>22^t)>>>0}const vo=i=>i/4294967295;function hM(i=128){let e=977;const t=()=>(e=e*16807%2147483647)/2147483647,n=[];for(let l=0;l<4;l++){const o=[];for(let c=0;c<9;c++)o.push({fx:Math.round(1+t()*4)*(t()>.5?1:-1),fy:Math.round(1+t()*4)*(t()>.5?1:-1),phase:t()*Math.PI*2,amp:.5+t()});n.push(o)}const s=new Uint8Array(i*i*4),r=new Float32Array(i*i);for(let l=0;l<4;l++){r.fill(0);let o=0;for(const c of n[l]){o+=c.amp;const h=new Float32Array(i),u=new Float32Array(i),d=new Float32Array(i),f=new Float32Array(i);for(let g=0;g<i;g++){const v=2*Math.PI*c.fx*g/i+c.phase,m=2*Math.PI*c.fy*g/i;h[g]=Math.sin(v),u[g]=Math.cos(v),d[g]=Math.sin(m),f[g]=Math.cos(m)}for(let g=0;g<i;g++)for(let v=0;v<i;v++)r[g*i+v]+=c.amp*(h[v]*f[g]+u[v]*d[g])}for(let c=0;c<i*i;c++)s[c*4+l]=Math.round((r[c]/o*.5+.5)*255)}const a=new wn(s,i,i,Bt);return a.wrapS=a.wrapT=In,a.magFilter=a.minFilter=Et,a.name="grass.noise",a.needsUpdate=!0,a}function Js(i,e=0,t=!1){const n=i?.image;if(!n?.data)return null;const{width:s,height:r,data:a}=n,l=i.format===ri?1:i.format===qi?2:4,o=i.type===yn,c=a instanceof Uint8Array?1/255:1,h=(u,d)=>{t?(u=(u%s+s)%s,d=(d%r+r)%r):(u=Math.min(Math.max(u,0),s-1),d=Math.min(Math.max(d,0),r-1));const f=a[(d*s+u)*l+e];return o?Cl.fromHalfFloat(f):f*c};return(u,d)=>{const f=u*s-.5,g=d*r-.5,v=Math.floor(f),m=Math.floor(g),p=f-v,y=g-m,E=h(v,m),_=h(v+1,m),S=h(v,m+1),w=h(v+1,m+1);return(E+(_-E)*p)*(1-y)+(S+(w-S)*p)*y}}function Eh(i,e,t,n){const s=t,r=t,a=n?new Uint8Array(s*r):new Float32Array(s*r),l=(e.maxX-e.minX)/s,o=(e.maxZ-e.minZ)/r;for(let h=0;h<r;h++){const u=e.minZ+(h+.5)*o;for(let d=0;d<s;d++){const f=i(e.minX+(d+.5)*l,u);a[h*s+d]=n?Math.round(Math.min(Math.max(f,0),1)*255):f}}const c=new wn(a,s,r,ri,n?Vt:on);return c.magFilter=c.minFilter=n?Et:jt,c.wrapS=c.wrapT=pn,c.needsUpdate=!0,c}const Mo=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);function Ah(i){return i?.isColor?i.clone():Array.isArray(i)?new $e(Mo(i[0]),Mo(i[1]),Mo(i[2])):new $e(i)}function uM(i){let e=(i*48271+20260816)%2147483647||1;const t=()=>(e=e*48271%2147483647)/2147483647,n=[];let s=0,r=.35,a=0;const l=["idle","direction","ramp","hold","decay"];for(let c=0;s<1800;c++){const h=l[c%5],u={type:h,t0:s,l0:r,l1:r,v0:a,v1:a};h==="idle"?u.dur=2+t()*5:h==="direction"?(u.dur=1.5+t()*2,u.v1=(t()-.5)*Math.PI*.5):h==="ramp"?(u.dur=1+t()*2.5,u.l1=.55+t()*.45):h==="hold"?u.dur=2+t()*6:(u.dur=2.5+t()*4,u.l1=.15+t()*.25),u.t1=s+u.dur,s=u.t1,r=u.l1,a=u.v1,n.push(u)}const o=s;return c=>{const h=(c%o+o)%o;let u=0,d=n.length-1;for(;u<d;){const m=u+d>>1;n[m].t1<=h?u=m+1:d=m}const f=n[u],g=Math.min((h-f.t0)/f.dur,1),v=g*g*(3-2*g);return{level:f.l0+(f.l1-f.l0)*v,veer:f.v0+(f.v1-f.v0)*v}}}const dM=`
#define BLADE_HEIGHT ${pl.toFixed(3)}
#define BLADE_WIDTH ${aM.toFixed(3)}
#define MAX_EXCL ${rr}
uniform float uTime;
uniform vec2 uWindDir;
uniform vec4 uWindA;    // strength, speed, uvScale, event
uniform vec4 uWindB;    // lull, coverage, eddy, sway
uniform vec4 uBend;     // baseBending, curveP1, curveP2, bendControlPoint
uniform vec4 uBlade;    // size, minScale, maxScale, widthMul
uniform vec4 uBlade2;   // bendDrop, rotationRandomness, seed, farWidthGain
uniform vec4 uBlade3;   // baseSpacing, spacingCompExp, rootSink, gustShade
uniform vec4 uColCfg2;  // 1 / patchSize, -, -, -
uniform sampler2D uNoise;
uniform sampler2D uHeightTex;
uniform vec4 uHeightRect; // minX, minZ, 1/spanX, 1/spanZ
uniform vec4 uHeightCfg;  // mode (0 flat, 1 texture), flatY, outsideKeep, -
uniform vec4 uHeightChan;
uniform sampler2D uMaskTex;
uniform vec4 uMaskRect;
uniform vec4 uMaskCfg;    // mode (0 none, 1 texture), scalar density, -, -
uniform vec4 uMaskChan;
uniform vec4 uArea;       // cx, cz, hx, hz
uniform vec4 uAreaCfg;    // mode (0 none, 1 rect, 2 ellipse), feather, cos(angle), sin(angle)
uniform vec4 uExcl[ MAX_EXCL * 2 ];
uniform int uExclCount;
uniform vec4 uRingA[ 3 ]; // originX, originZ, widthInCells, spacing
uniform vec4 uRingB[ 3 ]; // r0, r1, bandIn, bandOut
uniform vec4 uField;      // reach, -, farShadeStart, farShadeEnd
uniform vec3 uColDark;
uniform vec3 uColBase;
uniform vec3 uColTip;
uniform vec3 uColWarm;
uniform vec3 uColRust;
uniform vec3 uColGround;
uniform vec4 uColCfg;     // tipMix, variation, warmStrength, rustStrength
varying vec3 vGAlbedo;
varying vec4 vGData;      // h along blade, far factor, translucency weight, -

uint gPcg( uint v ) {
  uint s = v * 747796405u + 2891336453u;
  uint w = ( ( s >> ( ( s >> 28u ) + 4u ) ) ^ s ) * 277803737u;
  return ( w >> 22u ) ^ w;
}
float gU01( uint h ) { return float( h ) * ( 1.0 / 4294967295.0 ); }

float gHeightAt( vec2 xz, out vec2 grad, out float inside ) {
  grad = vec2( 0.0 ); inside = 1.0;
  if ( uHeightCfg.x < 0.5 ) return uHeightCfg.y;
  ivec2 sz = textureSize( uHeightTex, 0 );
  vec2 uv = ( xz - uHeightRect.xy ) * uHeightRect.zw;
  inside = ( uv.x >= 0.0 && uv.x <= 1.0 && uv.y >= 0.0 && uv.y <= 1.0 ) ? 1.0 : uHeightCfg.z;
  vec2 p = uv * vec2( sz ) - 0.5;
  vec2 i0 = floor( p ); vec2 f = p - i0;
  ivec2 a = clamp( ivec2( i0 ), ivec2( 0 ), sz - 1 );
  ivec2 b = clamp( ivec2( i0 ) + 1, ivec2( 0 ), sz - 1 );
  float h00 = dot( texelFetch( uHeightTex, a, 0 ), uHeightChan );
  float h10 = dot( texelFetch( uHeightTex, ivec2( b.x, a.y ), 0 ), uHeightChan );
  float h01 = dot( texelFetch( uHeightTex, ivec2( a.x, b.y ), 0 ), uHeightChan );
  float h11 = dot( texelFetch( uHeightTex, b, 0 ), uHeightChan );
  vec2 texelM = 1.0 / ( vec2( sz ) * uHeightRect.zw );
  grad = vec2( mix( h10 - h00, h11 - h01, f.y ) / texelM.x, mix( h01 - h00, h11 - h10, f.x ) / texelM.y );
  return mix( mix( h00, h10, f.x ), mix( h01, h11, f.x ), f.y );
}

float gArea( vec2 p ) {
  vec2 q = p - uArea.xy;
  q = vec2( q.x * uAreaCfg.z + q.y * uAreaCfg.w, - q.x * uAreaCfg.w + q.y * uAreaCfg.z );
  float sd;
  if ( uAreaCfg.x < 1.5 ) { vec2 d = abs( q ) - uArea.zw; sd = length( max( d, 0.0 ) ) + min( max( d.x, d.y ), 0.0 ); }
  else { float r = min( uArea.z, uArea.w ); sd = ( length( q / uArea.zw ) - 1.0 ) * r; }
  return 1.0 - smoothstep( - max( uAreaCfg.y, 1e-3 ), 0.0, sd );
}

float gExclusion( vec2 p ) {
  float k = 1.0;
  for ( int i = 0; i < MAX_EXCL; i ++ ) {
    if ( i >= uExclCount ) break;
    vec4 A = uExcl[ 2 * i ]; vec4 B = uExcl[ 2 * i + 1 ];
    vec2 a = A.xy; vec2 ab = A.zw - A.xy;
    float len2 = max( dot( ab, ab ), 1e-8 );
    float sd;
    if ( B.z < 0.5 ) {
      float t = clamp( dot( p - a, ab ) / len2, 0.0, 1.0 );
      sd = length( p - a - ab * t ) - B.x;
    } else {
      float L = sqrt( len2 ); vec2 u = ab / L; vec2 q = p - ( a + ab * 0.5 );
      vec2 d = abs( vec2( dot( q, u ), dot( q, vec2( - u.y, u.x ) ) ) ) - vec2( L * 0.5, B.x );
      sd = length( max( d, 0.0 ) ) + min( max( d.x, d.y ), 0.0 );
    }
    k *= smoothstep( 0.0, max( B.y, 1e-3 ), sd );
  }
  return k;
}
`,fM=`
vec3 gPos = vec3( 0.0 );
vec3 objectNormal = vec3( 0.0, 1.0, 0.0 );
bool gCulled = true;
vGAlbedo = vec3( 0.0 );
vGData = vec4( 0.0 );
{
  int ring = int( position.z + 0.5 );
  vec4 RA = uRingA[ ring ];
  vec4 RB = uRingB[ ring ];
  int W = max( int( RA.z + 0.5 ), 1 );
  ivec2 cell = ivec2( int( RA.x ) + gl_InstanceID % W, int( RA.y ) + gl_InstanceID / W );
  uint h0 = gPcg( uint( cell.x ) * 1597334677u ^ gPcg( uint( cell.y ) + uint( uBlade2.z ) + uint( ring ) * 2654435769u ) );
  uint h1 = gPcg( h0 ); uint h2 = gPcg( h1 ); uint h3 = gPcg( h2 );
  vec2 jit = vec2( gU01( h0 ), gU01( h1 ) ) - 0.5;
  vec2 rootXZ = ( vec2( cell ) + 0.5 + jit * 1.4 ) * RA.w;
  vec2 dxz = rootXZ - cameraPosition.xz;
  float rOut = RB.y + RB.w;
  if ( dot( dxz, dxz ) < rOut * rOut ) {
    vec2 grad; float inside;
    float groundY = gHeightAt( rootXZ, grad, inside );
    vec3 root = vec3( rootXZ.x, groundY - uBlade3.z, rootXZ.y );
    float d = distance( root, cameraPosition );
    // ring membership: stochastic crossfade between rings, and the field's outer fade
    float wIn = ring == 0 ? 1.0 : smoothstep( RB.x - RB.z, RB.x + RB.z, d );
    float wOut = 1.0 - smoothstep( RB.y - RB.w, RB.y + RB.w, d );
    float w = wIn * wOut;
    float keep = gU01( h3 );
    // density: mask texture × patch area × exclusions (paths, footprints)
    float m = inside * uMaskCfg.y;
    if ( uMaskCfg.x > 0.5 ) {
      vec2 muv = ( rootXZ - uMaskRect.xy ) * uMaskRect.zw;
      float mm = dot( texture( uMaskTex, clamp( muv, 0.0, 1.0 ) ), uMaskChan );
      m *= ( muv.x >= 0.0 && muv.x <= 1.0 && muv.y >= 0.0 && muv.y <= 1.0 ) ? mm : 0.0;
    }
    if ( uAreaCfg.x > 0.5 ) m *= gArea( rootXZ );
    if ( uExclCount > 0 && m > 0.0 ) m *= gExclusion( rootXZ );
    // spatial patches: tall/short and colour vary over metres, not per blade
    vec4 n0 = texture( uNoise, rootXZ * ( 1.0 / 65.0 ) + vec2( 0.37, 0.61 ) );
    // colour patches: two decorrelated taps (rotated, ~patchSize and 65 m) so dry/lush areas read as
    // irregular blobs instead of the parallel bands a single sum-of-sines tap shows from above
    float pA = texture( uNoise, mat2( 0.62, 0.78, - 0.78, 0.62 ) * rootXZ * uColCfg2.x + vec2( 0.11, 0.83 ) ).g;
    float posNoise = clamp( 0.5 + ( pA + n0.a - 1.0 ) * 0.75, 0.0, 1.0 );
    float scale0 = mix( uBlade.y, uBlade.z, n0.b * n0.b );
    float scale = scale0 * m * smoothstep( 0.0, 0.12, w - keep );
    float bladeLen = scale * BLADE_HEIGHT * uBlade.x;
    // frustum test on a sphere around the (possibly bent) blade
    vec3 ctr = root + vec3( 0.0, bladeLen * 0.45, 0.0 );
    float rad = bladeLen * 0.85 + 0.25 * uBlade.x;
    vec4 c = projectionMatrix * ( viewMatrix * vec4( ctr, 1.0 ) );
    float wp = max( c.w, 1e-4 );
    bool inFrustum = c.w > - rad && abs( c.x ) < wp + rad * projectionMatrix[ 0 ][ 0 ] && abs( c.y ) < wp + rad * projectionMatrix[ 1 ][ 1 ];
    if ( keep < w && scale0 * m > 0.11 && inFrustum ) {
      gCulled = false;
      float side = position.x;
      float hh = position.y;
      float bladeHash = gU01( h2 );
      // ---- wind: gust field advected along the wind with coverage/lull shaping, rare strong events
      vec2 dir = uWindDir; vec2 perp = vec2( - dir.y, dir.x );
      float lag = ( 1.2 - posNoise ) * 0.5 * fract( bladeHash * 7.31 );
      vec2 scrollDir = perp * 0.3717 - dir;
      vec4 gn = texture( uNoise, rootXZ * uWindA.z + scrollDir * ( uWindA.y * ( uTime - lag ) ) );
      float fastGust = sin( gn.g * 18.85 ) * 0.5 + 0.5;
      float field = mix( gn.r, fastGust, uWindA.w );
      float gStart = 1.0 - uWindB.y;
      float gust = smoothstep( gStart, gStart + 0.25, field );
      float windFactor = uWindA.x * mix( uWindB.x, 1.0, gust ) * mix( 1.0, 4.0, uWindA.w );
      float veer = ( gn.g - 0.5 ) * 2.0 * uWindB.z;
      vec2 windXZ = clamp( ( dir + perp * veer ) * windFactor, - 2.0, 2.0 );
      // response: cubic Bezier over blade scale — tall blades ride the wind, short ones stay planted
      float tS = clamp( scale / uBlade.z, 0.0, 1.0 ); float inv = 1.0 - tS;
      float resp = 3.0 * inv * inv * tS * uBend.y + 3.0 * inv * tS * tS * uBend.z + tS * tS * tS;
      float instanceNoise = bladeHash * 0.25 - 0.125;
      float spriteNoise = fract( bladeHash * 31.7 ) * 2.0 - 1.0;
      float windNoiseFactor = max( clamp( dot( windXZ, windXZ ) * 3.5, 0.0, 1.0 ), smoothstep( 0.2, 1.0, gust ) * 0.45 );
      float swayEnv = mix( 0.75, 1.35, windNoiseFactor );
      float randomPhase = instanceNoise * 25.13;
      float heightPhase = swayEnv * 0.55;
      float swayRate = spriteNoise * 0.375 + 1.075;
      float swayA = sin( uTime * swayRate * 1.35 + randomPhase + heightPhase );
      float swayB = sin( uTime * swayRate * 2.15 + rootXZ.x * 0.17 + rootXZ.y * 0.11 + randomPhase * 1.7 + heightPhase * 1.6 ) * 0.45;
      float bladeAngle = fract( bladeHash * 53.3 ) * 6.28318;
      vec2 restDir = vec2( cos( bladeAngle ), sin( bladeAngle ) );
      vec2 ambient = restDir * ( ( swayA + swayB ) * uWindB.w * swayEnv );
      float bendStrength = uBend.x * resp;
      float flutterPhase = fract( bladeHash * 97.13 ) * 6.28318 + rootXZ.x * 0.13 + rootXZ.y * 0.07;
      float flutter = sin( uTime * uWindA.y * 1.7 + flutterPhase * 1.3 + heightPhase * 2.2 ) * 0.025 * windNoiseFactor * bendStrength;
      vec2 bend = ( windXZ * bendStrength + ambient * resp + perp * flutter ) * uBlade.x;
      // ---- blade: cylindrical billboard, flare-and-taper width, per-vertex curl, bend with tip drop
      vec3 tc = root - cameraPosition;
      vec2 rxz = vec2( tc.z, - tc.x ); float rl = length( rxz );
      vec3 right = rl > 1e-4 ? vec3( rxz.x, 0.0, rxz.y ) / rl : vec3( 1.0, 0.0, 0.0 );
      float widthGain = mix( 1.0, uBlade2.w, smoothstep( 0.18 * uField.x, 0.7 * uField.x, d ) ) * pow( RA.w / uBlade3.x, uBlade3.y );
      float profile = min( 1.0, hh / 0.26 * 0.72 + 0.28 ) * pow( 1.0 - hh, 1.22 );
      float halfW = profile * BLADE_WIDTH * 0.5 * ( posNoise + 0.5 ) * scale * uBlade.x * uBlade.w * widthGain;
      float bendW = hh * hh;
      float roll = spriteNoise * uBlade2.y + ( ( posNoise - 0.5 ) * 0.25 + instanceNoise ) * bendW * uBend.x;
      float px = side * halfW; float py = hh * bladeLen;
      float cr = cos( roll ); float sr = sin( roll );
      float rx = px * cr - py * sr; float ry = px * sr + py * cr;
      float bendShape = uBend.w * 2.0 * hh * ( 1.0 - hh ) + bendW;
      float drop = dot( bend, bend ) / max( bladeLen * 2.0, 1e-3 ) * uBlade2.x;
      gPos = root + right * rx + vec3( bend.x * bendShape, ry - drop * bendShape, bend.y * bendShape );
      // ---- shading inputs: resting normal tilting skyward toward the tip, converging on the ground
      // normal (and the ground colour) in the far field so the meadow ends in matching turf
      float far = smoothstep( uField.z, uField.w, d );
      vec3 nGround = normalize( vec3( - grad.x, 1.0, - grad.y ) );
      vec3 nBlade = normalize( vec3( restDir.x, 0.25 + 0.75 * hh, restDir.y ) );
      objectNormal = normalize( mix( nBlade, nGround, far ) );
      float colorVar = mix( 1.0, posNoise, uColCfg.y );
      vec3 green = mix( uColDark, uColBase, colorVar );
      float rustMask = posNoise * ( 1.0 - posNoise ) * 4.0 * uColCfg.w;
      float warmMask = clamp( ( posNoise - 0.6 ) * 2.5, 0.0, 1.0 ) * uColCfg.z;
      vec3 col = mix( mix( green, uColRust, rustMask ), uColWarm, warmMask );
      col = mix( col, uColTip, smoothstep( 0.25, 1.0, hh ) * uColCfg.x );
      col *= 0.9 + 0.2 * fract( bladeHash * 13.7 );
      col = mix( col, uColGround, far );
      // travelling gusts lift the sheen of the blades they lean over (visible across the whole field)
      col *= 1.0 + uBlade3.w * gust * ( 0.4 + 0.6 * hh ) * wOut * min( uWindA.x / 0.32, 1.5 );
      vGAlbedo = col;
      vGData = vec4( hh, far, smoothstep( 0.1, 0.9, hh ) * ( 1.0 - far ), 0.0 );
    }
  }
}
`,pM=`
varying vec3 vGAlbedo;
varying vec4 vGData;
uniform vec4 uShade;     // rootAO, rootSkyVisibility, translucency, diffuseContrast
uniform vec3 uSunDir;    // fallback sun (world, toward the sun) when the scene has no DirectionalLight
uniform vec3 uSunRad;
`,mM=`
// Blade canopy response to a direct light: soft two-sided wrap (thin leaves light from both sides),
// root occlusion, and transmission when looking toward the light. Converges to plain Lambert on the
// ground normal in the far field so blades and the turf beyond them read as one surface.
void RE_Direct_Grass( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
  float h = vGData.x; float far = vGData.y;
  float ndl = dot( geometryNormal, directLight.direction );
  float horizon = smoothstep( - 0.03, 0.2, dot( directLight.direction, viewMatrix[ 1 ].xyz ) );
  float canopy = mix( 0.35, 1.0, mix( 0.65, abs( ndl ), uShade.w ) ) * horizon;
  float resp = mix( canopy, saturate( ndl ), far );
  float ao = mix( mix( uShade.x, 1.0, smoothstep( 0.0, 0.6, h ) ), 1.0, far );
  reflectedLight.directDiffuse += directLight.color * ( resp * ao ) * BRDF_Lambert( material.diffuseColor );
  float align = saturate( dot( geometryViewDir, - directLight.direction ) );
  float lobe = 0.3 * ( 0.5 + 0.5 * align ) + 0.7 * pow( align, 4.0 );
  vec3 transColor = mix( material.diffuseColor * 1.6, vec3( 0.45, 0.5, 0.2 ), 0.35 );
  reflectedLight.directDiffuse += directLight.color * RECIPROCAL_PI * transColor * ( lobe * horizon * vGData.z * uShade.z );
}
#undef RE_Direct
#define RE_Direct RE_Direct_Grass
`,gM=`
#if NUM_DIR_LIGHTS == 0
if ( uSunRad.r + uSunRad.g + uSunRad.b > 0.0 ) {
  IncidentLight gSun;
  gSun.color = uSunRad;
  gSun.direction = normalize( mat3( viewMatrix ) * uSunDir );
  gSun.visible = true;
  RE_Direct_Grass( gSun, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
}
#endif
`,_M=`
reflectedLight.indirectDiffuse *= mix( mix( uShade.y, 1.0, vGData.x ) * mix( uShade.x, 1.0, smoothstep( 0.0, 0.6, vGData.x ) ), 1.0, vGData.y );
`;function xM(i,e){const t=new Float32Array((i*2+1)*3);for(let r=0;r<i;r++){const a=r/i;t.set([-1,a,e],r*6),t.set([1,a,e],r*6+3)}t.set([0,1,e],i*6);const n=[];for(let r=0;r<i-1;r++){const a=r*2,l=a+1,o=a+2,c=a+3;n.push(a,l,o,l,c,o)}n.push(i*2-2,i*2-1,i*2);const s=new jf;return s.setAttribute("position",new Ut(t,3)),s.setAttribute("normal",new Ut(new Float32Array(t.length),3)),s.setIndex(n),s.instanceCount=0,s.boundingSphere=new _n(new H,0),s.boundingBox=new bn,s}function vM(i={}){const e=performance.now(),t={height:1,density:1,radius:100,dryness:.2,patchSize:100,seed:1,y:0,translucency:1,rootAO:.45,maskChannel:void 0,heightChannel:0,maxInstances:15e5,...i},n={strength:.32,speed:.18,direction:[1,.2],coverage:.6,events:1,eddy:.9,sway:.055,...i.wind||{}},s=hM(),r=Js(s,1,!0),a=Js(s,2,!0),l=Js(s,3,!0),o=[s];let c=t.heightTexture||null,h=t.bounds||null;if(!c&&t.heightAt){h=h||{minX:-256,minZ:-256,maxX:256,maxZ:256};const L=Math.max(h.maxX-h.minX,h.maxZ-h.minZ);c=Eh(t.heightAt,h,Math.min(1024,Math.max(64,Math.ceil(L/.75))),!1),c.name="grass.height",o.push(c)}const u=c&&!t.heightAt?Js(c,t.heightChannel):null,d=(L,ne)=>t.heightAt?t.heightAt(L,ne):u&&h?u((L-h.minX)/(h.maxX-h.minX),(ne-h.minZ)/(h.maxZ-h.minZ)):t.y;t.mask===void 0&&t.heightTexture?.name==="terrain-height"&&(t.mask=t.heightTexture);let f=null,g=t.maskBounds||h,v=1,m=t.maskChannel??0;if(typeof t.mask=="number")v=t.mask;else if(typeof t.mask=="function"){g=g||{minX:-256,minZ:-256,maxX:256,maxZ:256};const L=Math.max(g.maxX-g.minX,g.maxZ-g.minZ);f=Eh(t.mask,g,Math.min(1024,Math.max(64,Math.ceil(L/.5))),!0),f.name="grass.mask",o.push(f),m=0}else t.mask?.isTexture?(f=t.mask,t.maskChannel===void 0&&t.mask===t.heightTexture&&(m=3)):t.mask?.texture&&(f=t.mask.texture,g=t.mask.bounds||g,m=t.mask.channel??m);if(f&&!g)throw new Error("createGrass: a mask texture needs bounds");const p=f?Js(f,m):null,y=L=>new ut(L===0?1:0,L===1?1:0,L===2?1:0,L===3?1:0),E=L=>L?new ut(L.minX,L.minZ,1/(L.maxX-L.minX),1/(L.maxZ-L.minZ)):new ut(0,0,1,1),_=new wn(new Float32Array(4),1,1,Bt,on);_.needsUpdate=!0,o.push(_);const S={uTime:{value:0},uWindDir:{value:new st(1,0)},uWindA:{value:new ut},uWindB:{value:new ut},uBend:{value:new ut(2.5,.003,.85,.4)},uBlade:{value:new ut(1,.52,1.3,1)},uBlade2:{value:new ut(1.3,.05,(t.seed>>>0)%16777216,2.2)},uBlade3:{value:new ut(wh,.55,.04,.14)},uNoise:{value:s},uHeightTex:{value:c||_},uHeightRect:{value:E(h)},uHeightCfg:{value:new ut(c?1:0,t.y,t.outside==="keep"?1:0,0)},uHeightChan:{value:y(t.heightChannel)},uMaskTex:{value:f||_},uMaskRect:{value:E(g)},uMaskCfg:{value:new ut(f?1:0,v,0,0)},uMaskChan:{value:y(m)},uArea:{value:new ut},uAreaCfg:{value:new ut},uExcl:{value:Array.from({length:rr*2},()=>new ut)},uExclCount:{value:0},uRingA:{value:Xn.map(()=>new ut)},uRingB:{value:Xn.map(()=>new ut)},uField:{value:new ut},uColDark:{value:new $e},uColBase:{value:new $e},uColTip:{value:new $e},uColWarm:{value:new $e},uColRust:{value:new $e},uColGround:{value:new $e},uColCfg:{value:new ut(.4,.9,.4,.08)},uColCfg2:{value:new ut(1/(t.patchSize||100),0,0,0)},uShade:{value:new ut(.45,.6,.18,.5)},uSunDir:{value:new H(.4,.55,.6).normalize()},uSunRad:{value:new $e(0,0,0)}},w=new uu({name:"Grass blades",side:Ln});w.onBeforeCompile=L=>{Object.assign(L.uniforms,S),L.vertexShader=L.vertexShader.replace("#include <common>",`#include <common>
`+dM).replace("#include <beginnormal_vertex>",fM).replace("#include <defaultnormal_vertex>","vec3 transformedNormal = mat3( viewMatrix ) * objectNormal;").replace("#include <begin_vertex>","vec3 transformed = gPos;").replace("#include <project_vertex>",`vec4 mvPosition = viewMatrix * vec4( transformed, 1.0 );
gl_Position = projectionMatrix * mvPosition;
if ( gCulled ) gl_Position = vec4( 0.0, 0.0, 2.0, 1.0 );`).replace("#include <worldpos_vertex>",`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
vec4 worldPosition = vec4( transformed, 1.0 );
#endif`),L.fragmentShader=L.fragmentShader.replace("#include <common>",`#include <common>
`+pM).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= vGAlbedo;`).replace("#include <normal_fragment_begin>",`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
vec3 normal = normalize( vNormal );
vec3 nonPerturbedNormal = normal;`).replace("#include <lights_lambert_pars_fragment>",`#include <lights_lambert_pars_fragment>
`+mM).replace("#include <lights_fragment_end>",gM+`#include <lights_fragment_end>
`+_M)},w.customProgramCacheKey=()=>"edit3d-grass-v1";const R=new gn;R.name="Grass";const x=Xn.map((L,ne)=>{const _e=new qt(xM(L.seg,ne),w);return _e.name=`Grass LOD${ne}`,_e.frustumCulled=!1,_e.receiveShadow=!0,_e.castShadow=!1,_e.matrixAutoUpdate=!1,_e.raycast=()=>{},_e.onBeforeRender=(xe,ee,de)=>Q(de,xe),R.add(_e),_e}),T=new $e,P={height:t.height,density:t.density,radius:t.radius,dryness:t.dryness,translucency:t.translucency,colors:t.colors||{},wind:n};let k=uM(t.seed),z=0;function K(){const L=Kn.clamp(P.dryness,0,1),[ne,_e,xe]=L<.2?[lM,Th,L/.2]:[Th,cM,(L-.2)/.8],ee=B=>P.colors[B]!==void 0?Ah(P.colors[B]):Ah(ne[B].map((q,W)=>q+(_e[B][W]-q)*xe));S.uColDark.value.copy(ee("dark")),S.uColBase.value.copy(ee("base")),S.uColTip.value.copy(ee("tip")),S.uColWarm.value.copy(ee("warm")),S.uColRust.value.copy(ee("rust")),S.uColCfg.value.z=.3+.2*L;const de=S.uColCfg.value,C=new $e(0,0,0),Ae=new $e,Ge=40,A=S.uColCfg2.value.x;let M=0;for(let B=0;B<Ge;B++)for(let q=0;q<Ge;q++){const W=(q+.5)*9.7,pe=(B+.5)*9.7,le=r((.62*W-.78*pe)*A+.11,(.78*W+.62*pe)*A+.83),ae=Math.min(Math.max(.5+(le+l(W/65+.37,pe/65+.61)-1)*.75,0),1);Ae.copy(S.uColDark.value).lerp(S.uColBase.value,1+(ae-1)*de.y),Ae.lerp(S.uColRust.value,ae*(1-ae)*4*de.w).lerp(S.uColWarm.value,Math.min(Math.max((ae-.6)*2.5,0),1)*de.z),C.add(Ae),M++}C.multiplyScalar(1/M),T.copy(C).lerp(S.uColTip.value,.35*de.x).multiplyScalar(.82),S.uColGround.value.copy(T)}function N(){const L=P.height/(oM*pl);S.uBlade.value.x=L,S.uBlade.value.w=Math.pow(Math.max(L,.05),-.35),S.uBlade3.value.x=wh/Math.sqrt(Math.max(P.density,.05)),S.uBlade3.value.z=.04*L,S.uShade.value.z=.18*P.translucency}function Z(){const L=P.wind;let ne=L.direction;typeof ne=="number"&&(ne=[Math.cos(Kn.degToRad(ne)),Math.sin(Kn.degToRad(ne))]),z=Math.atan2(ne[1],ne[0]),S.uWindA.value.set(L.strength,L.speed,L.uvScale??.0135,0),S.uWindB.value.set(L.lull??.09,L.coverage,L.eddy,L.sway),te=NaN,J(ie)}let ie=t.time??8,te=NaN;function J(L){if(ie=L,L===te)return;te=L;const ne=k(L),_e=z+ne.veer;S.uTime.value=L,S.uWindDir.value.set(Math.cos(_e),Math.sin(_e)),S.uWindA.value.w=Kn.smoothstep(ne.level,.6,.98)*(P.wind.events??1)}function Y(L=[]){const ne=[];for(const xe of L){const ee=xe.feather??.6;if(xe.path){const de=(xe.width??1.5)/2;for(let C=0;C+1<xe.path.length;C++)ne.push([xe.path[C][0],xe.path[C][1],xe.path[C+1][0],xe.path[C+1][1],de,ee,0]);xe.path.length===1&&ne.push([xe.path[0][0],xe.path[0][1],xe.path[0][0],xe.path[0][1],de,ee,0])}else if(xe.circle)ne.push([xe.circle[0],xe.circle[1],xe.circle[0],xe.circle[1],xe.circle[2],ee,0]);else if(xe.rect){const[de,C,Ae,Ge]=xe.rect,A=xe.angle||0,M=Math.cos(A),B=-Math.sin(A);ne.push([de-M*Ae/2,C-B*Ae/2,de+M*Ae/2,C+B*Ae/2,Ge/2,ee,1])}}ne.length>rr&&console.warn(`createGrass: ${ne.length} exclusion shapes, only the first ${rr} apply`);const _e=Math.min(ne.length,rr);for(let xe=0;xe<_e;xe++){const ee=ne[xe];S.uExcl.value[2*xe].set(ee[0],ee[1],ee[2],ee[3]),S.uExcl.value[2*xe+1].set(ee[4],ee[5],ee[6],0)}S.uExclCount.value=_e,ue=ne.slice(0,_e)}let ue=[],me=null;function Be(L){if(!L){S.uAreaCfg.value.set(0,0,1,0),me=null;return}const[ne,_e]=L.center||[0,0],xe=L.radius!==void 0||L.shape==="ellipse",ee=L.radius??L.size[0]/2,de=L.radius??L.size[1]/2,C=L.angle||0;S.uArea.value.set(ne,_e,ee,de),S.uAreaCfg.value.set(xe?2:1,L.feather??.5,Math.cos(C),Math.sin(C));const Ae=Math.abs(Math.cos(C))*ee+Math.abs(Math.sin(C))*de,Ge=Math.abs(Math.sin(C))*ee+Math.abs(Math.cos(C))*de;me={minX:ne-Ae,maxX:ne+Ae,minZ:_e-Ge,maxZ:_e+Ge}}const se=new H,He=new H,oe=[];for(let L=0;L<8;L++)oe.push(new H);let F="";const I=Xn.map(()=>({count:0}));let D=!1;function Q(L,ne){const _e=L.matrixWorld.elements,xe=L.projectionMatrix.elements,ee=`${ne?.info?.render?.frame}|${L.id}|${_e[12]},${_e[13]},${_e[14]},${_e[8]},${_e[9]},${_e[10]},${xe[0]},${xe[5]}|${P.radius}|${S.uBlade3.value.x}|${S.uBlade.value.x}`;if(ee===F)return;F=ee,He.setFromMatrixPosition(L.matrixWorld);const de=Math.max(0,He.y-d(He.x,He.z)),C=P.radius*Math.min(1+de/120,3),Ae=.25;S.uField.value.set(C,0,.25*C,.95*C);const Ge=2.4*S.uBlade.value.x*S.uBlade.value.z+.5,A=!L.isOrthographicCamera,M=L.projectionMatrixInverse;let B=0;for(let q=0;q<Xn.length;q++){const W=Xn[q],pe=q===0?0:Xn[q-1].outer*C,le=q===Xn.length-1,ae=le?C*(1-Ae/2):W.outer*C,fe=q===0?0:.12*pe,we=le?C*Ae/2:.12*ae,ye=S.uBlade3.value.x*W.spacing,De=ae+we+Ge;let be=He.x,Ve=He.x,We=He.z,Je=He.z,V=0;for(const Ze of[-1,1])for(const qe of[-1,1]){se.set(Ze,qe,-1).applyMatrix4(M);const lt=oe[V++].copy(se),ct=oe[V++];A?ct.copy(se).multiplyScalar(De/Math.max(-se.z,1e-6)):ct.set(se.x,se.y,-De);for(const yt of[lt,ct])yt.applyMatrix4(L.matrixWorld),be=Math.min(be,yt.x),Ve=Math.max(Ve,yt.x),We=Math.min(We,yt.z),Je=Math.max(Je,yt.z)}const Oe=ae+we+Ge;be=Math.max(be-Ge,He.x-Oe),Ve=Math.min(Ve+Ge,He.x+Oe),We=Math.max(We-Ge,He.z-Oe),Je=Math.min(Je+Ge,He.z+Oe),me&&(be=Math.max(be,me.minX-ye),Ve=Math.min(Ve,me.maxX+ye),We=Math.max(We,me.minZ-ye),Je=Math.min(Je,me.maxZ+ye)),c&&h&&t.outside!=="keep"&&(be=Math.max(be,h.minX-ye),Ve=Math.min(Ve,h.maxX+ye),We=Math.max(We,h.minZ-ye),Je=Math.min(Je,h.maxZ+ye));let he=0,Ee=0,Te=0,Me=1;if(Ve>be&&Je>We&&(q===0||pe-fe<C)){Ee=Math.floor(be/ye),Te=Math.floor(We/ye),Me=Math.floor(Ve/ye)-Ee+1;const Ze=Math.floor(Je/ye)-Te+1;he=Me*Ze,he>t.maxInstances&&(D||(console.warn(`createGrass: ring ${q} wants ${he} blades, capped at ${t.maxInstances} (lower density or radius)`),D=!0),he=t.maxInstances)}S.uRingA.value[q].set(Ee,Te,Me,ye),S.uRingB.value[q].set(pe,ae,fe,we),x[q].geometry.instanceCount=he,I[q]={count:he,ix0:Ee,iz0:Te,W:Me,s:ye,r0:pe,r1:ae,bandIn:fe,bandOut:we},B+=he}return B}const O=new Ea,re=new mt,ve=new _n;function Ie(L){L.updateMatrixWorld(),F="",Q(L,null),F="",O.setFromProjectionMatrix(re.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse));const ne=new H().setFromMatrixPosition(L.matrixWorld),_e=S.uBlade.value,xe=S.uBlade2.value.z,ee=S.uBlade3.value.z,de={rings:[],blades:0,triangles:0,instances:0};for(let C=0;C<Xn.length;C++){const Ae=I[C];let Ge=0;for(let M=0;M<Ae.count;M++){const B=Ae.ix0+M%Ae.W,q=Ae.iz0+Math.floor(M/Ae.W),W=js((Math.imul(B,1597334677)^js(q+xe+Math.imul(C,2654435769)>>>0))>>>0),pe=js(W),le=js(pe),ae=js(le),fe=(B+.5+(vo(W)-.5)*1.4)*Ae.s,we=(q+.5+(vo(pe)-.5)*1.4)*Ae.s,ye=fe-ne.x,De=we-ne.z,be=Ae.r1+Ae.bandOut;if(ye*ye+De*De>=be*be)continue;let Ve=1;c&&h&&t.outside!=="keep"&&(Ve=fe>=h.minX&&fe<=h.maxX&&we>=h.minZ&&we<=h.maxZ?1:0);const We=d(fe,we)-ee,Je=Math.hypot(ye,We-ne.y,De),V=(qe,lt,ct)=>{const yt=Math.min(Math.max((ct-qe)/(lt-qe||1e-6),0),1);return yt*yt*(3-2*yt)},Oe=(C===0?1:V(Ae.r0-Ae.bandIn,Ae.r0+Ae.bandIn,Je))*(1-V(Ae.r1-Ae.bandOut,Ae.r1+Ae.bandOut,Je));if(vo(ae)>=Oe)continue;let Ee=Ve*v;if(p){const qe=(fe-g.minX)/(g.maxX-g.minX),lt=(we-g.minZ)/(g.maxZ-g.minZ);Ee*=qe>=0&&qe<=1&&lt>=0&&lt<=1?p(qe,lt):0}if(Ee<=0)continue;me&&(Ee*=Se(fe,we)),Ee>0&&ue.length&&(Ee*=Ne(fe,we));const Te=a(fe/65+.37,we/65+.61),Me=_e.y+(_e.z-_e.y)*Te*Te;if(Me*Ee<=.11)continue;const Ze=Me*Ee*pl*_e.x;ve.center.set(fe,We+Ze*.45,we),ve.radius=Ze*.85+.25*_e.x,O.intersectsSphere(ve)&&Ge++}const A=Ge*(Xn[C].seg*2-1);de.rings.push({segments:Xn[C].seg,instances:Ae.count,blades:Ge,triangles:A}),de.blades+=Ge,de.triangles+=A,de.instances+=Ae.count}return de}function Se(L,ne){const _e=S.uArea.value,xe=S.uAreaCfg.value;let ee=L-_e.x,de=ne-_e.y;const C=ee*xe.z+de*xe.w,Ae=-ee*xe.w+de*xe.z;let Ge;if(xe.x<1.5){const M=Math.abs(C)-_e.z,B=Math.abs(Ae)-_e.w;Ge=Math.hypot(Math.max(M,0),Math.max(B,0))+Math.min(Math.max(M,B),0)}else Ge=(Math.hypot(C/_e.z,Ae/_e.w)-1)*Math.min(_e.z,_e.w);const A=Math.min(Math.max((Ge+xe.y)/xe.y,0),1);return 1-A*A*(3-2*A)}function Ne(L,ne){let _e=1;for(const xe of ue){const ee=xe[2]-xe[0],de=xe[3]-xe[1],C=Math.max(ee*ee+de*de,1e-8);let Ae;if(xe[6]<.5){const A=Math.min(Math.max(((L-xe[0])*ee+(ne-xe[1])*de)/C,0),1);Ae=Math.hypot(L-xe[0]-ee*A,ne-xe[1]-de*A)-xe[4]}else{const A=Math.sqrt(C),M=ee/A,B=de/A,q=L-(xe[0]+ee/2),W=ne-(xe[1]+de/2),pe=Math.abs(q*M+W*B)-A/2,le=Math.abs(-q*B+W*M)-xe[4];Ae=Math.hypot(Math.max(pe,0),Math.max(le,0))+Math.min(Math.max(pe,le),0)}const Ge=Math.min(Math.max(Ae/xe[5],0),1);_e*=Ge*Ge*(3-2*Ge)}return _e}function Ce(L={}){L.height!==void 0&&(P.height=L.height),L.density!==void 0&&(P.density=L.density),L.radius!==void 0&&(P.radius=L.radius),L.translucency!==void 0&&(P.translucency=L.translucency),L.dryness!==void 0&&(P.dryness=L.dryness),L.colors&&(P.colors={...P.colors,...L.colors}),L.wind&&Object.assign(P.wind,L.wind),L.exclude&&Y(L.exclude),L.area!==void 0&&Be(L.area),L.mask!==void 0&&typeof L.mask=="number"&&(S.uMaskCfg.value.y=L.mask),N(),K(),Z(),F=""}return Y(t.exclude||[]),Be(t.area),N(),K(),Z(),J(ie),{object:R,meshes:x,material:w,uniforms:S,groundColor:T,params:P,update:J,set:Ce,setSun(L,ne){L&&S.uSunDir.value.copy(L).normalize(),ne&&S.uSunRad.value.copy(ne)},stats:Ie,groundAt:d,buildMs:performance.now()-e,dispose(){for(const L of x)L.geometry.dispose();w.dispose();for(const L of o)L.dispose()}}}const MM=(i,e,t)=>{let n=(t-i)/(e-i);return n=n<0?0:n>1?1:n,n*n*(3-2*n)};function zl(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function SM(i){const e=zl(i),t=new Uint8Array(512),n=[...Array(256).keys()];for(let a=255;a>0;a--){const l=Math.floor(e()*(a+1));[n[a],n[l]]=[n[l],n[a]]}for(let a=0;a<512;a++)t[a]=n[a&255];const s=a=>a*a*a*(a*(a*6-15)+10),r=(a,l,o,c)=>{a&=15;const h=a<8?l:o,u=a<4?o:a===12||a===14?l:c;return(a&1?-h:h)+(a&2?-u:u)};return(a,l,o)=>{const c=Math.floor(a),h=Math.floor(l),u=Math.floor(o);a-=c,l-=h,o-=u;const d=c&255,f=h&255,g=u&255,v=s(a),m=s(l),p=s(o),y=t[d]+f,E=t[y]+g,_=t[y+1]+g,S=t[d+1]+f,w=t[S]+g,R=t[S+1]+g,x=(T,P,k)=>T+(P-T)*k;return x(x(x(r(t[E],a,l,o),r(t[w],a-1,l,o),v),x(r(t[_],a,l-1,o),r(t[R],a-1,l-1,o),v),m),x(x(r(t[E+1],a,l,o-1),r(t[w+1],a-1,l,o-1),v),x(r(t[_+1],a,l-1,o-1),r(t[R+1],a-1,l-1,o-1),v),m),p)}}function yM(i){const e=(1+Math.sqrt(5))/2;let t=[[-1,e,0],[1,e,0],[-1,-e,0],[1,-e,0],[0,-1,e],[0,1,e],[0,-1,-e],[0,1,-e],[e,0,-1],[e,0,1],[-e,0,-1],[-e,0,1]].map(([s,r,a])=>{const l=Math.hypot(s,r,a);return[s/l,r/l,a/l]}),n=[[0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],[1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],[3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],[4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1]];for(let s=0;s<i;s++){const r=new Map,a=[],l=(o,c)=>{const h=o<c?o*65536+c:c*65536+o;let u=r.get(h);if(u===void 0){const d=t[o],f=t[c],g=d[0]+f[0],v=d[1]+f[1],m=d[2]+f[2],p=Math.hypot(g,v,m);u=t.length,t.push([g/p,v/p,m/p]),r.set(h,u)}return u};for(const[o,c,h]of n){const u=l(o,c),d=l(c,h),f=l(h,o);a.push([o,u,f],[c,d,u],[h,f,d],[u,d,f])}n=a}return{verts:t,faces:n}}const ha={boulder:{sx:1,sy:.74,sz:.86,planes:6,d:[.74,.9],k:.07,lump:.1,mid:.035,crack:.035,weight:.32},block:{sx:1,sy:.82,sz:.8,planes:9,d:[.56,.7],k:.028,lump:.05,mid:.025,crack:.04,weight:.24},slab:{sx:1.25,sy:.42,sz:.95,planes:7,d:[.6,.78],k:.032,lump:.05,mid:.022,crack:.03,top:.34,weight:.18},shard:{sx:.62,sy:1.2,sz:.55,planes:8,d:[.52,.72],k:.024,lump:.05,mid:.025,crack:.035,weight:.1},cobble:{sx:1,sy:.58,sz:.78,planes:3,d:[.86,.96],k:.14,lump:.05,mid:.012,crack:0,weight:.16}};function bM(i,e,t){const n=ha[i],s=zl(e*7919+17),r=SM(e*31+5),{verts:a,faces:l}=yM(t),o=[];for(let P=0;P<n.planes;P++){let k,z,K,N;do k=s()*2-1,z=s()*2-1,K=s()*2-1,N=Math.hypot(k,z,K);while(N>1||N<.2||z/N<-.55);o.push([k/N,z/N,K/N,n.d[0]+s()*(n.d[1]-n.d[0])])}n.top&&o.push([s()*.16-.08,1,s()*.16-.08,n.top]);const c=[s()*50,s()*50,s()*50],h=new Float32Array(a.length*3);let u=1/0,d=-1/0;for(let P=0;P<a.length;P++){const[k,z,K]=a[P];let N=Math.exp(-1/n.k);for(const[oe,F,I,D]of o){const Q=oe*k+F*z+I*K;Q>.001&&(N+=Math.exp(-(D/Q)/n.k))}let Z=-n.k*Math.log(N);const ie=k*1.3+c[0],te=z*1.3+c[1],J=K*1.3+c[2],Y=r(ie,te,J)+r(ie*2.1,te*2.1,J*2.1)*.5,ue=r(ie*5.3,te*5.3,J*5.3)+r(ie*11,te*11,J*11)*.45,me=1-Math.abs(r(ie*2.6+9,te*2.6,J*2.6));Z*=1+n.lump*Y+n.mid*ue-n.crack*Math.pow(me,14);const Be=k*Z*n.sx,se=z*Z*n.sy,He=K*Z*n.sz;h[P*3]=Be,h[P*3+1]=se,h[P*3+2]=He,se<u&&(u=se),se>d&&(d=se)}const f=u+(d-u)*.2,g=(d-u)*.06;let v=1/0,m=-1/0,p=1/0,y=-1/0,E=1/0;for(let P=0;P<a.length;P++){const k=h[P*3+1],z=k-f;h[P*3+1]=.5*(k+f+Math.sqrt(z*z+g*g)),h[P*3+1]<E&&(E=h[P*3+1])}for(let P=0;P<a.length;P++){const k=h[P*3],z=h[P*3+2];k<v&&(v=k),k>m&&(m=k),z<p&&(p=z),z>y&&(y=z)}const _=(v+m)/2,S=(p+y)/2,w=1/Math.max(m-v,y-p);let R=0;for(let P=0;P<a.length;P++)h[P*3]=(h[P*3]-_)*w,h[P*3+1]=(h[P*3+1]-E)*w,h[P*3+2]=(h[P*3+2]-S)*w,h[P*3+1]>R&&(R=h[P*3+1]);const x=new(a.length>65535?Uint32Array:Uint16Array)(l.length*3);l.forEach(([P,k,z],K)=>{x[K*3]=P,x[K*3+1]=k,x[K*3+2]=z});const T=new Ot;return T.setAttribute("position",new Ut(h,3)),T.setIndex(new Ut(x,1)),T.computeVertexNormals(),T.computeBoundingBox(),T.computeBoundingSphere(),T.userData.height=R,T.name=`rock-${i}`,T}function wM(i={}){const e=performance.now(),{count:t=60,heightAt:n=()=>0,mask:s,positions:r,sizeRange:a=[.4,3],seed:l=1,sink:o=.15,alignToGround:c=.65,detail:h=4,moss:u=.3,color:d,name:f="Rocks",material:g}=i,v=(i.variants??Object.keys(ha)).filter(se=>ha[se]),m=i.area??{minX:-50,minZ:-50,maxX:50,maxZ:50},p=m.radius!==void 0?{minX:m.x-m.radius,maxX:m.x+m.radius,minZ:m.z-m.radius,maxZ:m.z+m.radius,cx:m.x,cz:m.z,r:m.radius}:m,y=zl(l*2654435761+11),E=v.map((se,He)=>bM(se,l*13+He*101+3,Kn.clamp(Math.round(h),2,5))),_=g??Hv({name:`${f} · Stone`,moss:u,color:d}),S=se=>{const He=MM(1.2,.5,se);let oe=0;const F=v.map(D=>{const Q=ha[D].weight*(D==="cobble"?.4+3*He:D==="shard"?1-He:1);return oe+=Q,Q});let I=y()*oe;for(let D=0;D<v.length;D++)if(I-=F[D],I<=0)return D;return v.length-1},w=[];if(r)for(const se of r){const He=se.size??1.5,oe=se.variant!==void 0?Math.max(0,v.indexOf(se.variant)):S(He);w.push({x:se.x,z:se.z,size:He,vi:oe,yaw:se.yaw??y()*Math.PI*2})}else{const[se,He]=a,oe=[];for(let F=0;w.length<t&&F<t*80;F++){const I=p.minX+y()*(p.maxX-p.minX),D=p.minZ+y()*(p.maxZ-p.minZ);if(p.r!==void 0&&Math.hypot(I-p.cx,D-p.cz)>p.r)continue;if(s){const ve=s(I,D);if(!(ve>0)||y()>ve)continue}const Q=se*Math.pow(He/se,Math.pow(y(),2.2));let O=!0;for(const ve of oe){const Ie=(Q+ve.size)*.5;if((ve.x-I)**2+(ve.z-D)**2<Ie*Ie){O=!1;break}}if(!O)continue;const re={x:I,z:D,size:Q,vi:S(Q),yaw:y()*Math.PI*2};oe.push(re),w.push(re)}}const R=new H(0,1,0),x=new H,T=new mn,P=new mn,k=new mn,z=new mt,K=new H,N=new H,Z=v.map(()=>[]),ie=[];for(const se of w){const He=E[se.vi],oe=He.userData.height*se.size,F=Math.max(.25,se.size*.5),I=n(se.x,se.z);x.set(n(se.x-F,se.z)-n(se.x+F,se.z),2*F,n(se.x,se.z-F)-n(se.x,se.z+F)).normalize();let D=I;for(let Ie=0;Ie<6;Ie++){const Se=Ie*Math.PI/3+se.yaw;D=Math.min(D,n(se.x+Math.cos(Se)*se.size*.42,se.z+Math.sin(Se)*se.size*.42))}const Q=x.clone().lerp(R,1-c).normalize();k.setFromUnitVectors(R,Q);const O=new ui((y()-.5)*.18,0,(y()-.5)*.18);P.setFromAxisAngle(R,se.yaw),T.copy(k).multiply(new mn().setFromEuler(O)).multiply(P);const re=I-(1-c)*(I-D)-o*oe-.02*se.size,ve=.88+y()*.24;K.set(se.size*ve,se.size*(.85+y()*.3),se.size*(2-ve)),N.set(se.x,re,se.z),z.compose(N,T,K),Z[se.vi].push(z.clone()),ie.push({x:se.x,y:re,z:se.z,size:se.size,variant:v[se.vi]})}const te=new gn;te.name=f;const J=[],Y=new $e;Z.forEach((se,He)=>{const oe=new ru(E[He],_,Math.max(1,se.length));oe.count=se.length,oe.name=`${f} · ${v[He]}`,se.forEach((F,I)=>{oe.setMatrixAt(I,F);const D=.86+y()*.22,Q=(y()-.5)*.06;oe.setColorAt(I,Y.setRGB(D*(1+Q),D,D*(1-Q)))}),oe.instanceMatrix.needsUpdate=!0,oe.instanceColor&&(oe.instanceColor.needsUpdate=!0),oe.castShadow=!0,oe.receiveShadow=!0,oe.computeBoundingBox(),oe.computeBoundingSphere(),te.add(oe),J.push(oe)});const ue=Math.round(performance.now()-e),me=J.reduce((se,He)=>se+He.count*He.geometry.index.count/3,0),Be=J.filter(se=>se.count>0).length;return{group:te,object:te,meshes:J,material:_,instances:ie,geometries:E,stats:{rocks:ie.length,draws:Be,triangles:me,buildMs:ue},dispose(){for(const se of E)se.dispose();g||_.dispose();for(const se of J)se.dispose()}}}const So=7;function TM(i,e){const{positions:t,normals:n,shapes:s,orbits:r,flights:a,drifts:l,indices:o}=e,c=(p,y,E,_,S,w,R,x,T)=>(t.push(p,y,E),n.push(_,S,w),s.push(R,x,T),r.push(i.cx,i.cz,i.radius,i.alt),a.push(i.omega,i.phase,i.flapOff,i.scale),l.push(i.driftR,i.driftW,i.driftP,i.bob),t.length/3-1),h=[[-.34,.01],[-.26,.038],[-.14,.064],[-.02,.074],[.09,.068],[.18,.05],[.25,.038],[.32,.012]],u=7,d=[];for(const[p,y]of h){d.push(t.length/3);for(let E=0;E<u;E++){const _=E/u*Math.PI*2,S=Math.cos(_),w=Math.sin(_);c(S*y*1.15,w*y*.86-.012,p,S,w,0,0,0,0)}}for(let p=0;p<h.length-1;p++){const y=d[p],E=d[p+1];for(let _=0;_<u;_++){const S=(_+1)%u;o.push(y+_,E+_,y+S,y+S,E+_,E+S)}}for(const p of[-1,1]){const y=[],E=[];for(let _=0;_<So;_++){const S=_/(So-1),w=p*(.055+.945*Math.pow(S,.98)),R=.115-.3*Math.pow(S,1.35),x=.245*(1-.8*Math.pow(S,1.25)),T=.026*(1-S);y.push(c(w,T,R,0,1,0,p,S,1)),E.push(c(w,T,R-x,0,1,0,p,S,1))}for(let _=0;_<So-1;_++)p>0?o.push(y[_],E[_],y[_+1],y[_+1],E[_],E[_+1]):o.push(y[_],y[_+1],E[_],E[_],y[_+1],E[_+1])}const f=c(0,-.006,-.28,0,1,0,0,0,2),g=c(-.085,-.006,-.53,0,1,0,0,0,2),v=c(.085,-.006,-.53,0,1,0,0,0,2),m=c(0,-.006,-.56,0,1,0,0,0,2);o.push(f,g,m,f,m,v)}const EM=`
uniform float uTime;
attribute vec3 aShape;
attribute vec4 aOrbit;
attribute vec4 aFlight;
attribute vec4 aDrift;
varying vec3 vShape;
`,AM=`
float gSide = aShape.x; float gSpan = aShape.y;
float omega = aFlight.x; float phase = aFlight.y; float flapOff = aFlight.z; float gScale = aFlight.w;
float T = uTime;
float ocx = aOrbit.x + aDrift.x * cos( aDrift.y * T + aDrift.z );
float ocz = aOrbit.y + aDrift.x * sin( aDrift.y * T * 0.83 + aDrift.z * 1.7 );
float R = aOrbit.z * ( sin( T * 0.11 + phase ) * 0.18 + 1.0 );
float ang = phase + omega * T;
float ca = cos( ang ); float sa = sin( ang );
float bobPh = T * 0.37 + phase * 2.1;
float alt = aOrbit.w + aDrift.w * sin( bobPh ) + sin( T * 0.13 + phase ) * 0.6;
vec3 centre = vec3( ocx + R * ca, alt, ocz + R * sa );
float sgn = clamp( omega * 1e4, - 1.0, 1.0 );
float climb = aDrift.w * 0.37 * cos( bobPh ) / max( abs( omega ) * R, 0.5 );
vec3 fwd = normalize( vec3( - sa * sgn, climb, ca * sgn ) );
vec3 right0 = normalize( cross( vec3( 0.0, 1.0, 0.0 ), fwd ) );
vec3 up0 = cross( fwd, right0 );
float bank = sgn * ( sin( T * 0.29 + phase ) * 0.13 + 0.40 );
float cb = cos( bank ); float sb = sin( bank );
vec3 bRight = right0 * cb + up0 * sb;
vec3 bUp = up0 * cb - right0 * sb;
// bursts of beating between long glides; inside a burst a travelling wave down the span
float burst = smoothstep( 0.52, 0.86, sin( T * 0.21 + flapOff * 6.3 ) * 0.5 + 0.5 );
float beat = T * 17.0 + flapOff * 11.0 - gSpan * 1.5;
float flapA = ( 0.13 - gSpan * gSpan * 0.30 + burst * 0.62 * sin( beat ) ) * gSide;
float twistA = - burst * 0.34 * cos( beat ) * gSpan;
float cw = cos( twistA ); float sw = sin( twistA ); float cf = cos( flapA ); float sf = sin( flapA );
mat3 gDeform = mat3( cf, sf, 0.0, - sf, cf, 0.0, 0.0, 0.0, 1.0 ) * mat3( 1.0, 0.0, 0.0, 0.0, cw, sw, 0.0, - sw, cw );
mat3 gToWorld = mat3( bRight, bUp, fwd );
vec3 objectNormal = normalize( gToWorld * ( gDeform * normal ) );
vec3 gPos = centre + gToWorld * ( gDeform * position ) * gScale;
vShape = aShape;
`,RM=`
varying vec3 vShape;
`,CM=`
{
  // herring gull: white body and tail, pale grey mantle over the inner wing, black outer primaries
  vec3 white = vec3( 0.83, 0.83, 0.79 );
  vec3 mantle = vec3( 0.30, 0.34, 0.39 );
  vec3 tipC = vec3( 0.010, 0.010, 0.012 );
  vec3 wing = mix( white, mantle, smoothstep( 0.10, 0.55, vShape.y ) );
  wing = mix( wing, tipC, smoothstep( 0.76, 0.90, vShape.y ) );
  float isWing = smoothstep( 0.5, 1.0, vShape.z ) * smoothstep( 1.5, 1.2, vShape.z );
  diffuseColor.rgb *= mix( white, wing, isWing );
}
`,PM=`
#if NUM_DIR_LIGHTS > 0
{
  float isWingT = smoothstep( 0.5, 1.0, vShape.z ) * smoothstep( 1.5, 1.2, vShape.z );
  float through = pow( saturate( dot( - geometryViewDir, directionalLights[ 0 ].direction ) ), 4.0 ) * isWingT * 0.7;
  reflectedLight.directDiffuse += material.diffuseColor * directionalLights[ 0 ].color * ( through * RECIPROCAL_PI );
}
#endif
`;function LM(i={}){const e=performance.now(),t={count:24,groups:4,height:[8,30],seed:1,size:1,area:{center:[0,0],radius:80},...i},[n,s]=t.area.center||[0,0],r=t.area.radius??80,a=(_,S)=>t.heightAt?t.heightAt(_,S):t.groundY??0;let l=(Math.abs(Math.floor(t.seed))*48271+20260818)%2147483647||1;const o=()=>(l=l*48271%2147483647)/2147483647,c=(_,S)=>_+o()*(S-_),h=[];if(t.view){const[_,,S]=t.view.eye,[w,,R]=t.view.target,x=Math.atan2(R-S,w-_);for(const[T,P]of[[20,42],[70,140]]){const k=x+c(-.96,.96),z=c(T,P);h.push({x:_+Math.cos(k)*z,z:S+Math.sin(k)*z,home:!0})}}const u=Math.max(1,Math.round(t.groups)),d=Math.max(r*.5,10);for(let _=0;_<4e3&&h.length<u+(t.view?2:0);_++){const S=o()*Math.PI*2,w=Math.sqrt(o())*r,R=n+Math.cos(S)*w,x=s+Math.sin(S)*w;_<3e3&&h.some(T=>(T.x-R)**2+(T.z-x)**2<d*d)||h.push({x:R,z:x,home:!1})}const f=[];h.forEach((_,S)=>f.push(S,..._.home?[S]:[]));const g={positions:[],normals:[],shapes:[],orbits:[],flights:[],drifts:[],indices:[]},v=Math.max(8,r*.7);for(let _=0;_<t.count;_++){const S=h[f[_%f.length]],w=o()<.5?-1:1,R=S.home?c(8,19):c(Math.min(16,v*.4),Math.min(62,v)),x=c(8.5,13),T=S.home?10:Math.min(26,r*.3),P=S.x+c(-T,T),k=S.z+c(-T,T);TM({cx:P,cz:k,radius:R,alt:a(P,k)+c(t.height[0],t.height[1]),omega:w*x/R,phase:c(0,Math.PI*2),flapOff:c(0,1),scale:c(.62,.78)*t.size,driftR:c(8,34)*Math.min(1,r/80),driftW:c(.02,.055)*(o()<.5?-1:1),driftP:c(0,Math.PI*2),bob:c(.8,3.4)},g)}const m=new Ot;m.setAttribute("position",new It(g.positions,3)),m.setAttribute("normal",new It(g.normals,3)),m.setAttribute("aShape",new It(g.shapes,3)),m.setAttribute("aOrbit",new It(g.orbits,4)),m.setAttribute("aFlight",new It(g.flights,4)),m.setAttribute("aDrift",new It(g.drifts,4)),m.setIndex(g.indices),m.boundingSphere=new _n(new H(n,0,s),0),m.boundingBox=new bn;const p={value:t.time??6},y=new uu({name:"Gull",side:Ln});y.onBeforeCompile=_=>{_.uniforms.uTime=p,_.vertexShader=_.vertexShader.replace("#include <common>",`#include <common>
`+EM).replace("#include <beginnormal_vertex>",AM).replace("#include <begin_vertex>","vec3 transformed = gPos;"),_.fragmentShader=_.fragmentShader.replace("#include <common>",`#include <common>
`+RM).replace("#include <color_fragment>",`#include <color_fragment>
`+CM).replace("#include <lights_fragment_end>",PM+"#include <lights_fragment_end>")},y.customProgramCacheKey=()=>"edit3d-gulls-v1";const E=new qt(m,y);return E.name="Gulls",E.frustumCulled=!1,E.raycast=()=>{},E.castShadow=!1,{object:E,mesh:E,material:y,count:t.count,triangles:g.indices.length/3,buildMs:performance.now()-e,update(_){p.value=_},dispose(){m.dispose(),y.dispose()}}}function Rh(i,e,t,n,s,r){i.registerParams(e,t,n,r);const a=i.subscribe(({type:l})=>{l==="change"&&s(t)});return s(t),a}function DM(...i){for(const e of i)e.traverse(t=>{t.geometry&&(t.geometry.boundingBox=new bn,t.boundingBox!==void 0&&(t.boundingBox=new bn))})}const wt=(i,e,t)=>new H(i,e,t);function Mi(i,e,t=.6,n=0){const s=new Us({color:e,roughness:t,metalness:n});return s.name=i,s}function ii(i,e,t,n=!0){const s=new qt(i,e);return s.castShadow=n,s.receiveShadow=n,t.add(s),s}function xi(i,e,t,n,s){const r=e.clone().sub(i),a=ii(new Il(t,t,r.length(),12),n,s);return a.position.copy(i).add(e).multiplyScalar(.5),a.quaternion.setFromUnitVectors(wt(0,1,0),r.normalize()),a}function IM(i){const e=i.bounds,t=e.maxX-e.minX;let n=null,s=-1e9;for(let a=0;a<60;a++)for(let l=0;l<60;l++){const o=e.minX+t*(.15+.7*l/60),c=e.minZ+t*(.15+.7*a/60),h=i.heightAt(o,c),u=i.shoreAt(o,c),d=i.slopeAt(o,c);if(h<i.seaLevel+2)continue;const f=u*2-d*8-Math.abs(h-i.seaLevel-8)*.08;f>s&&(s=f,n={x:o,z:c,y:h,seaward:i.shoreNormalAt?i.shoreNormalAt(o,c):wt(0,0,1)})}n||(n={x:0,z:0,y:i.heightAt(0,0),seaward:wt(0,0,1)});const r=i.shoreNormalAt?.(n.x,n.z);return n.seaward=r?wt(r.x??r[0]??0,0,r.z??r[1]??1).normalize():wt(0,0,1),n}function NM(){const i=new gn;i.name="珊瑚红旅行自行车";const e=Mi("自行车 · 珊瑚红烤漆","#D95848",.28,.35),t=Mi("自行车 · 深青橡胶","#183C46",.82),n=Mi("自行车 · 奶油胎壁","#E9DDC4",.72),s=Mi("自行车 · 拉丝金属","#B8C2C0",.26,1),r=Mi("自行车 · 黄铜车铃","#D9A84E",.24,.85),a=Mi("自行车 · 焦糖皮革","#7B4530",.58),l=[];for(const f of[-.78,.78]){const g=new gn;g.position.set(0,.64,f),i.add(g),ii(new cr(.61,.055,12,64),t,g),ii(new cr(.53,.032,10,64),n,g),ii(new cr(.49,.018,8,64),s,g);for(let v=0;v<20;v++){const m=v*Math.PI/10;xi(wt(0,0,0),wt(0,Math.cos(m)*.48,Math.sin(m)*.48),.006,s,g)}xi(wt(-.09,0,0),wt(.09,0,0),.055,s,g),l.push(g)}const o={rear:wt(0,.64,-.78),front:wt(0,.64,.78),crank:wt(0,.68,-.05),seat:wt(0,1.25,-.38),head:wt(0,1.25,.48)};for(const[f,g]of[[o.rear,o.crank],[o.rear,o.seat],[o.seat,o.crank],[o.seat,o.head],[o.head,o.crank],[o.head,o.front]])xi(f,g,.032,e,i);xi(o.seat,wt(0,1.43,-.4),.025,s,i);const c=ii(new Sa(.18,20,12),a,i);c.scale.set(.75,.25,1.35),c.position.set(0,1.45,-.43),xi(o.head,wt(0,1.48,.53),.025,s,i),xi(wt(-.29,1.48,.53),wt(.29,1.48,.53),.022,s,i);for(const f of[-.29,.29])xi(wt(f,1.48,.53),wt(f,1.48,.67),.032,t,i);const h=new gn;h.position.copy(o.crank),i.add(h),xi(wt(-.16,0,0),wt(.16,0,0),.035,s,h);for(const f of[-1,1])xi(wt(f*.14,0,0),wt(f*.14,f*.19,0),.018,s,h),ii(new Ri(.2,.035,.11),t,h).position.set(f*.14,f*.19,0);const u=ii(new Sa(.07,16,10,0,Math.PI*2,0,Math.PI/2),r,i);u.position.set(.18,1.52,.54);const d=ii(new Ri(.42,.25,.32,4,3,3),Mi("自行车 · 藤编车篮","#B8844D",.9),i);return d.position.set(0,1.28,.84),d.material.wireframe=!0,{root:i,wheels:l,crank:h,bell:u}}function UM(i){const e=document.createElement("div");return e.innerHTML=`<style>
 .pr-hud{position:absolute;inset:0;pointer-events:none;font-family:Inter,"PingFang SC",sans-serif;color:#183c46}.pr-top{position:absolute;left:28px;top:24px}.pr-kicker{font-size:11px;letter-spacing:.22em;font-weight:800;opacity:.68}.pr-title{font-family:Georgia,"Songti SC",serif;font-size:34px;margin:5px 0 2px;color:#fff8e8;text-shadow:0 2px 18px #183c4660}.pr-sub{font-size:12px;color:#fff8e8}.pr-speed{position:absolute;right:26px;top:24px;text-align:right;background:#fff8e8dc;border:1px solid #fff;padding:12px 16px;border-radius:18px;backdrop-filter:blur(12px)}.pr-num{font:700 30px Georgia}.pr-unit{font-size:11px;margin-left:4px}.pr-bottom{position:absolute;left:50%;bottom:24px;transform:translateX(-50%);display:flex;gap:8px;align-items:center;pointer-events:auto;background:#fff8e8e8;padding:8px;border:1px solid #fff;border-radius:22px;box-shadow:0 12px 40px #183c4630;backdrop-filter:blur(14px);white-space:nowrap}.pr-btn{border:0;background:transparent;color:#183c46;padding:10px 13px;border-radius:14px;font-weight:700;cursor:pointer;font-size:12px}.pr-btn:hover,.pr-btn.on{background:#d95848;color:#fff8e8}.pr-btn kbd{display:block;font:9px Inter;opacity:.6;margin-top:3px}.pr-hint{position:absolute;bottom:94px;width:100%;text-align:center;font-size:11px;color:#fff8e8;text-shadow:0 1px 6px #183c46}.pr-toast{position:absolute;left:50%;top:26%;transform:translateX(-50%);font:700 22px Georgia;color:#fff8e8;text-shadow:0 2px 10px #183c46;opacity:0;transition:opacity .2s}.pr-toast.show{opacity:1}@media(max-width:700px){.pr-title{font-size:24px}.pr-bottom{max-width:94%;overflow-x:auto}.pr-btn{padding:9px}.pr-hint{display:none}}</style>
 <div class="pr-hud"><div class="pr-top"><div class="pr-kicker">PELICAN COAST CLUB · 07</div><div class="pr-title">风从海上来</div><div class="pr-sub">一只鹈鹕的日落骑行</div></div><div class="pr-speed"><span class="pr-num">12</span><span class="pr-unit">km/h</span><div class="pr-kicker">COASTAL PACE</div></div><div class="pr-toast"></div><div class="pr-hint">拖拽环视 · 滚轮缩放 · W / ↑ 加速 · S / ↓ 刹车</div><div class="pr-bottom"><button class="pr-btn" data-a="fast">加速<kbd>W</kbd></button><button class="pr-btn" data-a="slow">刹车<kbd>S</kbd></button><button class="pr-btn" data-a="bell">铃铛<kbd>B</kbd></button><button class="pr-btn" data-a="hello">欢呼<kbd>H</kbd></button><button class="pr-btn" data-a="camera">镜头<kbd>C</kbd></button><button class="pr-btn" data-a="sound">声音<kbd>M</kbd></button></div></div>`,i.appendChild(e),e}async function FM({asset:i}){pv({curve:"aces"});const e=new eu,t=new fn(42,1,.08,2200),n={speed:12,hour:17.65,waves:.65,headSize:1},s=Mh({preset:"coast",seed:11,heightScale:.55,grassCover:!0}),r=IM(s),a=r.seaward,l=wt(-a.z,0,a.x),o={x:r.x,z:r.z,width:190,depth:12,angle:-Math.atan2(l.x,l.z)},c=Mh({preset:"coast",seed:11,heightScale:.55,grassCover:!0,material:s.material,pads:[o]});s.dispose(!0),r.y=c.pads[0].y;const h=vM({heightTexture:c.heightTexture,bounds:c.bounds,height:.48,dryness:.55,seed:8,density:.7});c.setMeadowColor(h.groundColor);const u=rM({windSpeed:7,waveScale:n.waves,seabed:c,time:12}),d=wM({heightAt:c.heightAt,mask:c.boulderAt,area:{x:r.x,z:r.z,radius:130},count:70,sizeRange:[.4,2.4],seed:4}),f=LM({count:16,area:{x:r.x+a.x*90,z:r.z+a.z*90,radius:90},height:[8,26],heightAt:c.heightAt,seed:2}),g=Lv({hour:n.hour,clouds:.28,below:"sea"}),v=new mu("#ffffff",3);v.name="夕阳 · 海岸主光",v.castShadow=!0,v.shadow.mapSize.set(2048,2048),Object.assign(v.shadow.camera,{left:-16,right:16,top:16,bottom:-16,near:1,far:500}),v.shadow.normalBias=.035,v.target.position.set(r.x,r.y,r.z),e.add(c.mesh,h.object,u.mesh,d.group,f.object,v,v.target),g.applyTo(e,{sun:v,targets:[u]});const m=new gn,p=Mi("海岸公路 · 暖灰沥青","#6C716D",.94),y=Mi("海岸公路 · 奶油标线","#E9DDC4",.8),E=ii(new Ri(190,.09,7.2),p,m);E.position.y=.015;for(let Y=-90;Y<90;Y+=8)ii(new Ri(4,.012,.1),y,m,!1).position.set(Y,.069,0);m.position.set(r.x,r.y+.03,r.z),m.rotation.y=-Math.atan2(l.z,l.x),e.add(m);const _=NM(),S=new gn;S.add(_.root),S.position.set(r.x,r.y+.13,r.z),S.rotation.y=Math.atan2(l.x,l.z),e.add(S);const w=await i.loadModel("/models/pelican.glb"),R=w.object;R.position.set(0,.31,-.12),S.add(R);const x={};for(const Y of["hips","chest","neck","head","wing_L","wing_R","forewing_L","forewing_R","thigh_L","thigh_R","shin_L","shin_R"])x[Y]=R.getObjectByName(Y);const T={};for(const[Y,ue]of Object.entries(x))ue&&(T[Y]=ue.quaternion.clone());const P=[R.getObjectByName("Eye_L"),R.getObjectByName("Eye_R")].filter(Boolean);let k=731;const z=()=>(k=k*16807%2147483647,(k-1)/2147483646),K=new Ot,N=new Float32Array(540);for(let Y=0;Y<180;Y++)N[Y*3]=(z()-.5)*18,N[Y*3+1]=z()*5,N[Y*3+2]=(z()-.5)*18;K.setAttribute("position",new Ut(N,3));const Z=new ou(K,new Dl({color:"#FFE5AF",size:.035,transparent:!0,opacity:.55,depthWrite:!1}));Z.material.name="海风 · 金色飞沫",S.add(Z),t.position.copy(S.position).addScaledVector(l,4.8).addScaledVector(a,-5.7).add(wt(0,3.1,0)),t.lookAt(S.position.clone().add(wt(0,1.25,0))),e.add(t),DM(c.mesh,h.object,u.mesh,d.group,f.object,m),i.register("rider",S,{name:"鹈鹕与自行车"}),i.register("bike",_.root,{name:"珊瑚红旅行自行车",parent:"rider"}),i.register("pelican",R,{name:"鹈鹕骑手",parent:"rider"}),i.register("ocean",u.mesh,{name:"海岸与海浪"}),i.register("camera",t,{name:"主镜头"}),i.register("sky",g.object,{name:"日落天空"});const ie=Rh(i,"ride",n,{speed:{label:"骑行速度",type:"number",min:0,max:30,step:1},headSize:{label:"鹈鹕 · 头部比例",type:"number",min:.8,max:1.25,step:.05}},()=>{x.head&&x.head.scale.setScalar(n.headSize)},{name:"骑行控制",objectId:"rider"}),te=Rh(i,"environment",n,{hour:{label:"海岸时间",type:"number",min:6,max:22,step:.05},waves:{label:"海浪高度",type:"number",min:.1,max:1.5,step:.05}},()=>{g.setHour(n.hour),u.setWaves({waveScale:n.waves})},{name:"海岸氛围",objectId:"sky"}),J=Y=>{u.update(12+Y),c.update(Y),h.update(Y),f.update(Y),g.update(Y)};return J(0),{scene:e,camera:t,play({canvas:Y,container:ue,signal:me}){const Be=new jx(t,Y);Be.target.copy(S.position).add(wt(0,1.25,0)),Be.enableDamping=!0,Be.minDistance=3.5,Be.maxDistance=15,Be.maxPolarAngle=1.52;const se=UM(ue),He=se.querySelector(".pr-num"),oe=se.querySelector(".pr-toast");let F=0,I=n.speed,D=0,Q=0,O=!0,re=null,ve=null;const Ie=new Set,Se={v:0};function Ne(de){oe.textContent=de,oe.classList.add("show"),Se.v=1.6}function Ce(){if(re)return;re=new(window.AudioContext||window.webkitAudioContext);const de=re.createBuffer(1,re.sampleRate*2,re.sampleRate),C=de.getChannelData(0);for(let A=0;A<C.length;A++)C[A]=(Math.random()*2-1)*.12;ve=re.createBufferSource(),ve.buffer=de,ve.loop=!0;const Ae=re.createBiquadFilter();Ae.type="lowpass",Ae.frequency.value=650;const Ge=re.createGain();Ge.gain.value=O?.15:0,ve.connect(Ae).connect(Ge).connect(re.destination),ve.start(),ve.gain=Ge}function L(de,C=.25,Ae="sine",Ge=0){if(Ce(),!O)return;const A=re.createOscillator(),M=re.createGain(),B=re.currentTime+Ge;A.type=Ae,A.frequency.setValueAtTime(de,B),A.frequency.exponentialRampToValueAtTime(de*1.35,B+C),M.gain.setValueAtTime(1e-4,B),M.gain.exponentialRampToValueAtTime(.22,B+.015),M.gain.exponentialRampToValueAtTime(1e-4,B+C),A.connect(M).connect(re.destination),A.start(B),A.stop(B+C+.02)}function ne(de){Ce(),de==="bell"&&(L(1280,.32,"sine"),L(1680,.4,"sine",.09),_.bell.rotation.z=.4,Ne("叮铃——借过一下！")),de==="hello"&&(D=2.2,L(420,.22,"triangle"),L(620,.3,"triangle",.12),Ne("今天也要迎风出发！")),de==="camera"&&(Q=(Q+1)%3,Ne(["跟随镜头","电影侧拍","鹈鹕特写"][Q])),de==="sound"&&(O=!O,ve&&(ve.gain.gain.value=O?.15:0),se.querySelector("[data-a=sound]").classList.toggle("on",!O),Ne(O?"海浪声已开启":"已静音")),de==="fast"&&(I=Math.min(30,I+3)),de==="slow"&&(I=Math.max(0,I-5))}se.querySelectorAll("button").forEach(de=>de.addEventListener("click",()=>ne(de.dataset.a),{signal:me})),Y.addEventListener("pointerdown",Ce,{signal:me});const _e=de=>{Ie.add(de.code),de.code==="KeyB"&&ne("bell"),de.code==="KeyH"&&ne("hello"),de.code==="KeyC"&&ne("camera"),de.code==="KeyM"&&ne("sound")},xe=de=>Ie.delete(de.code),ee=()=>Ie.clear();return window.addEventListener("keydown",_e,{signal:me}),window.addEventListener("keyup",xe,{signal:me}),window.addEventListener("blur",ee,{signal:me}),Ne("你好，海岸骑手！"),{update(de){F+=de,(Ie.has("KeyW")||Ie.has("ArrowUp"))&&(I=Math.min(30,I+8*de)),(Ie.has("KeyS")||Ie.has("ArrowDown"))&&(I=Math.max(0,I-12*de));const C=F*(1.4+I*.12);for(const M of _.wheels)M.rotation.x=-F*I/2.3;_.crank.rotation.x=-C,_.bell.rotation.z*=.88;for(const[M,B]of Object.entries(x))B&&B.quaternion.copy(T[M]);const Ae=Math.sin(F*2)*.018;x.chest&&(x.chest.rotation.x=Ae),x.neck&&(x.neck.rotation.x=-Ae*.7),x.head&&(x.head.rotation.y=Math.sin(F*.55)*.09,x.head.rotation.x=Math.sin(F*1.3)*.025);for(const M of["L","R"]){const B=C+(M==="L"?0:Math.PI),q=x["thigh_"+M],W=x["shin_"+M];q&&(q.rotation.x=Math.sin(B)*.48-.12),W&&(W.rotation.x=-Math.sin(B+.5)*.6-.25);const pe=x["forewing_"+M];pe&&D>0&&(pe.rotation.z=(M==="L"?1:-1)*(1.2+Math.sin(F*12)*.25))}D>0&&(D-=de,x.head&&(x.head.rotation.z=Math.sin(F*10)*.08));const Ge=Math.pow(Math.max(0,Math.sin(F*.73+1.2)),42);P.forEach(M=>M.scale.y=1-Ge*.92),S.position.y=r.y+.13+Math.sin(C*2)*.012,Z.rotation.y=F*.025,He.textContent=Math.round(I),Se.v>0&&(Se.v-=de,Se.v<=0&&oe.classList.remove("show"));const A=S.position.clone().add(wt(0,Q===2?1.8:1.2,0));if(Be.target.lerp(A,.06),Q===1){const M=wt(6,1.6,-1).applyAxisAngle(wt(0,1,0),S.rotation.y);t.position.lerp(S.position.clone().add(M),.035)}else if(Q===2){const M=wt(2.3,2.1,3.2).applyAxisAngle(wt(0,1,0),S.rotation.y);t.position.lerp(S.position.clone().add(M),.04)}J(F),Be.update()},dispose(){Be.dispose(),se.remove(),ve&&ve.stop(),re&&re.close()}}},dispose(){ie(),te();const Y=new Set;e.traverse(ue=>{ue.geometry&&Y.add(ue.geometry);for(const me of[ue.material].flat())me&&Y.add(me)}),Y.forEach(ue=>ue.dispose()),c.dispose(),u.dispose(),h.dispose(),f.dispose(),g.dispose()}}}const ku=document.getElementById("app"),Un=new cx({antialias:!0,powerPreference:"high-performance"});Un.setPixelRatio(Math.min(devicePixelRatio,1.75));Un.setSize(innerWidth,innerHeight);Un.shadowMap.enabled=!0;Un.shadowMap.type=Ph;Un.outputColorSpace=Gt;ku.appendChild(Un.domElement);Un.domElement.tabIndex=0;const zu=new Kx().setDecoderPath("/draco/"),OM=new ux().setDRACOLoader(zu),Ch=new Set,BM={register(){},registerParams(){},subscribe(i){return Ch.add(i),()=>Ch.delete(i)},async loadModel(i){const e=await OM.loadAsync(i);return{object:e.scene,animations:e.animations}}},{scene:kM,camera:ml,play:zM,dispose:HM}=await FM({asset:BM}),Hu=new AbortController,Gu=zM({canvas:Un.domElement,container:ku,signal:Hu.signal});function Vu(){ml.aspect=innerWidth/innerHeight,ml.updateProjectionMatrix(),Un.setSize(innerWidth,innerHeight)}addEventListener("resize",Vu);Vu();const GM=new hp;Un.setAnimationLoop(()=>{Gu.update(Math.min(GM.getDelta(),.1)),Un.render(kM,ml)});document.getElementById("loading").style.opacity="0";setTimeout(()=>document.getElementById("loading")?.remove(),550);addEventListener("pagehide",()=>{Un.setAnimationLoop(null),Hu.abort(),Gu.dispose(),HM(),zu.dispose(),Un.dispose()},{once:!0});
