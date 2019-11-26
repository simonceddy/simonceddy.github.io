(this.webpackJsonpsongmath=this.webpackJsonpsongmath||[]).push([[0],{25:function(e,t,r){e.exports=r(37)},34:function(e,t,r){},35:function(e,t,r){},37:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(15),o=r.n(c),l=r(13),i=r(12),s=(r(34),r(35),r(9));var u=function(e){var t=e.children,r=e.to,n=e.exact,c=void 0!==n&&n;return a.a.createElement(l.b,{className:"nav-button text-lg",to:r,exact:c},t)};var m=function(e){var t=e.children;return a.a.createElement("div",{className:"min-h-full w-full md:w-4/5 flex flex-col bg-blue-800 mx-auto"},a.a.createElement("div",{className:"mx-3 mt-2 flex flex-row justify-start"},a.a.createElement(u,{to:"/",exact:!0},"Note Frequencies"),a.a.createElement(u,{to:"/bpm",exact:!0},"BPM Beat Calculator")),a.a.createElement("div",{className:"flex-1 mx-3 p-2 bg-blue-200"},t))};var f=function(e){var t=e.note,r=e.hz;return a.a.createElement("div",{className:"px-3 py-1 border bg-blue-200 border-blue-500 m-1 flex flex-row justify-center text-sm hover:bg-yellow-200 flex-1"},a.a.createElement("span",{className:"mr-2"},a.a.createElement("span",{className:"font-semibold text-green-800"},t)," :"),a.a.createElement("span",{className:"flex-1"},"".concat(r," "),a.a.createElement("span",{className:"font-semibold text-xs"},"Hz")))};var v=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];var p=function(e){var t=e.notes,r=void 0===t?[]:t,c=Object(n.useMemo)((function(){return function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,r=e.length/12,n=[],a=0;a<r;a++)n.push(e.splice(0,t));return n}(r,v.length)}),[r]);return a.a.createElement("div",{className:"flex flex-row flex-wrap justify-around"},c.map((function(e,t){return a.a.createElement("div",{key:t,className:"flex flex-col p-2 hover:bg-green-200"},e.map((function(e){var t=e.note,r=e.step,n=e.hz;return a.a.createElement(f,{note:t,hz:n,key:r})})))})))},b=r(11),h=r(6),d=r.n(h);var g=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:440,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!(this instanceof e))return new e(t);var n=new d.a(t),a=Math.pow(2,1/12);this.getHz=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(0===e)return n.valueOf();var t=n*Math.pow(a,e),c=new d.a(t);return c.round(r).valueOf()}};function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var E={lowOctave:0,highOctave:8,ref:{note:"A",octave:4}};function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v,n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){Object(b.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},E,{},t),a=new g(e,t.precision);if(n.lowOctave>n.highOctave)throw new Error("The low octave must be lower than the high octave");for(var c=r.findIndex((function(e){return e===n.ref.note})),o=(n.highOctave-(n.lowOctave-1))*r.length,l=0-((n.ref.octave-n.lowOctave)*r.length+c),i=[],s=0;s<o;s++){var u=Math.floor(s/r.length),m=u+n.lowOctave,f=r[s-u*r.length];i.push({note:"".concat(f).concat(m),step:s,hz:a.getHz(l)}),l++}return i}var y="SET_REFERENCE_FREQUENCY",x="SET_LOW_OCTAVE",j="SET_HIGH_OCTAVE",N="RESET_SETTINGS_TO_DEFAULT",P="SET_CURRENT_BPM",D="SET_HZ_PRECISION",z="SET_MS_PRECISION",S="RESET_NOTE_TABLE",T="RESET_BPM_TABLE";var B=function(e){var t=e.children;return a.a.createElement("div",{className:"flex flex-col justify-center items-center flex-1"},t)};var C=function(e){var t=e.children,r=e.label,n=void 0===r?"":r;return a.a.createElement("div",{className:"flex flex-row items-center justify-between m-1 px-3 py-1 w-full font-semibold"},a.a.createElement("span",{className:"px-3 flex-1 text-right"},n,":"),a.a.createElement("span",{className:"flex-1"},t))};var _=function(e){var t=e.type,r=void 0===t?"number":t,n=e.min,c=e.max,o=e.value,l=e.onChange,i=e.className;return a.a.createElement("input",{className:"border border-blue-500 bg-yellow-200 p-1 ".concat(i),type:r,min:n,max:c,value:o,onChange:l})};var H=function(e){var t=e.reset;return a.a.createElement("div",{className:"flex flex-col justify-center items-center flex-1"},a.a.createElement("button",{type:"button",onClick:t,className:"reset-button"},"Reset to defaults"))};var k=Object(i.b)((function(e){return{referenceHz:e.settings.referenceHz,lowOctave:e.settings.lowOctave,highOctave:e.settings.highOctave,precision:e.settings.hzPrecision}}),(function(e){return{setRefHz:function(t){return e(function(e){return{type:y,payload:{hz:e}}}(t))},setLowOct:function(t){return e(function(e){return{type:x,payload:{octave:Number.parseInt(e,10)}}}(t))},setHighOct:function(t){return e(function(e){return{type:j,payload:{octave:Number.parseInt(e,10)}}}(t))},setPrecision:function(t){return e(function(e){return{type:D,payload:{precision:Number.parseInt(e,10)}}}(t))},reset:function(){return e({type:S})}}}))((function(e){var t=e.referenceHz,r=void 0===t?440:t,c=e.lowOctave,o=void 0===c?0:c,l=e.highOctave,i=void 0===l?8:l,s=e.setRefHz,u=e.setLowOct,m=e.setHighOct,f=e.precision,v=void 0===f?3:f,b=e.setPrecision,h=e.reset,d=Object(n.useMemo)((function(){return w(r,{lowOctave:o,highOctave:i,precision:v})}),[r,o,i,v]);return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"flex flex-row justify-between mx-auto"},a.a.createElement(B,null,a.a.createElement(C,{label:"Reference Frequency (Hz)"},a.a.createElement(_,{min:"0",className:"text-right",value:r,onChange:function(e){var t=e.target;return s(t.value||0)}})),a.a.createElement(C,{label:"Low Octave"},a.a.createElement(_,{className:"text-right",value:o,onChange:function(e){var t=e.target;return u(t.value)}})),a.a.createElement(C,{label:"High Octave"},a.a.createElement(_,{className:"text-right",value:i,onChange:function(e){var t=e.target;return m(t.value)}})),a.a.createElement(C,{label:"Decimal precision"},a.a.createElement(_,{min:"0",className:"text-right",value:v,onChange:function(e){var t=e.target;return b(t.value)}}))),a.a.createElement(H,{reset:h})),a.a.createElement(p,{notes:d}))}));var R=["1/256","1/128","1/64","1/32","1/16","1/8","1/4","1/2","1","2","4","8"];var I=function(e){var t=e.beat,r=void 0===t?"1":t,n=e.duration,c=e.beatLength,o=e.tripletDuration,l=e.dottedDuration,i=r.replace("/","-");return a.a.createElement("div",{className:"px-2 py-1 border border-blue-500 m-1 flex flex-row justify-between text-sm hover:bg-blue-100 flex-1 w-full mx-auto items-center"},a.a.createElement("div",{className:"w-8 h-8 mx-2 flex-1 break-words"},a.a.createElement("img",{src:"/songmath/static/img/".concat(i,".svg"),alt:r,style:{width:"auto",maxHeight:"100%"}})),a.a.createElement("div",{className:"flex-1 break-words"},r," note"),a.a.createElement("div",{className:"flex-1 break-words"},c," beat",1===c?null:"s"),a.a.createElement("div",{className:"flex-1 break-words mx-2"},n," ms"),a.a.createElement("div",{className:"flex-1 break-words mx-2"},o," ms triplet"),a.a.createElement("div",{className:"flex-1 break-words mx-2"},l," ms dotted"))};function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var F=Object(i.b)((function(e){return{bpm:e.settings.currentBpm,precision:e.settings.msPrecision}}),(function(e){return{setBpm:function(t){return e(function(e){return{type:P,payload:{bpm:Number.parseInt(e,10)}}}(t))},setPrecision:function(t){return e(function(e){return{type:z,payload:{precision:Number.parseInt(e,10)}}}(t))},reset:function(){return e({type:T})}}}))((function(e){var t=e.bpm,r=void 0===t?120:t,c=e.setBpm,o=e.precision,l=void 0===o?2:o,i=e.setPrecision,s=e.reset,u=Object(n.useMemo)((function(){return R.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){Object(b.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:120,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1/4",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,n=new d.a(e),a=new d.a(t),c=new d.a(60/n*4),o=new d.a(a*c*1e3),l=new d.a(4*a),i=new d.a(2*o/3),s=new d.a(1.5*o);return{duration:o.round(r).valueOf(),beatLength:l.round(r).valueOf(),tripletDuration:i.round(r).valueOf(),dottedDuration:s.round(r).valueOf()}}(r,e,l),{beat:e})}))}),[r,l]);return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"flex flex-row justify-between"},a.a.createElement("div",{className:"flex flex-col flex-1 justify-center items-center"},a.a.createElement(C,{label:"BPM"},a.a.createElement(_,{min:"0",value:r,onChange:function(e){var t=e.target;return c(t.value)}})),a.a.createElement(C,{label:"Decimal precision"},a.a.createElement(_,{min:"0",value:l,onChange:function(e){var t=e.target;return i(t.value)}}))),a.a.createElement(H,{reset:s})),a.a.createElement("div",{className:"flex flex-col w-full"},u.map((function(e){return a.a.createElement(I,Object.assign({key:e.beat},e))}))))}));var L=function(){return a.a.createElement(m,null,a.a.createElement(s.a,{path:"/",exact:!0},a.a.createElement(k,null)),a.a.createElement(s.a,{path:"/bpm",exact:!0},a.a.createElement(F,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=r(10),G={referenceHz:440,lowOctave:0,highOctave:8,currentBpm:120,hzPrecision:3,msPrecision:3};function U(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:99999999;return t<=e?r>=e?e:r:t}function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){Object(b.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var J=Object(A.b)({settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return q({},e,{msPrecision:U(t.payload.precision)});case D:return q({},e,{hzPrecision:U(t.payload.precision)});case y:return q({},e,{referenceHz:U(t.payload.hz)});case x:return t.payload.octave>e.highOctave?q({},e,{lowOctave:t.payload.octave,highOctave:t.payload.octave}):q({},e,{lowOctave:t.payload.octave});case j:return t.payload.octave<e.lowOctave?q({},e,{highOctave:t.payload.octave,lowOctave:t.payload.octave}):q({},e,{highOctave:t.payload.octave});case P:return q({},e,{currentBpm:U(t.payload.bpm,1)});case T:return q({},e,{msPrecision:G.msPrecision,currentBpm:G.currentBpm});case S:return q({},G,{msPrecision:e.msPrecision,currentBpm:e.currentBpm});case N:return G;default:return e}}}),V=Object(A.c)(J);o.a.render(a.a.createElement(i.a,{store:V},a.a.createElement(l.a,{basename:"songmath"},a.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.45203706.chunk.js.map