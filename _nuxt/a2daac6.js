(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{814:function(t,e,r){"use strict";r.r(e);r(20),r(19),r(22),r(27),r(28);var n,o=r(3),c=r(1),l=r(5),f=r(145),O=r(37),y=r(2);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var h=Object(y.c)(O.TextStyled)(n||(n=Object(c.a)(["\n  color: inherit;\n  line-height: normal;\n  font-size: 20px;\n  font-weight: 500;\n"]))),d={components:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},{ButtonPrimary:f.ButtonPrimary,ButtonText:h}),data:function(){return{StatusTypes:l.b}},computed:{status:function(){return this.$store.state.transfer.status}},methods:{transfer:function(){this.$store.dispatch(l.c.CONFIRM)},complete:function(){this.$store.dispatch(l.c.COMPLETE),this.closeModal({modalName:"transfer "})}}},P=r(13),component=Object(P.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.status===t.StatusTypes.AWAITING_CONFIRMATIONS?r("ButtonPrimary",{attrs:{disabled:""}},[r("ButtonText",[t._v("Awaiting confirmations")])],1):t.status===t.StatusTypes.IN_PROGRESS||t.status===t.StatusTypes.COMPLETE?r("ButtonPrimary",{on:{click:t.complete}},[r("ButtonText",[t._v("Complete this transfer")])],1):null===t.status?r("ButtonPrimary",{on:{click:t.transfer}},[r("ButtonText",[t._v("Confirm Transfer")])],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);