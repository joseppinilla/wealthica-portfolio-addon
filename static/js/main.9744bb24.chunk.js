(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,n,t){e.exports=t(22)},17:function(e,n,t){},18:function(e,n,t){},22:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(2),c=t.n(r),i=(t(17),t(3)),l=t(4),s=t(9),u=t(5),d=t(10),h=t(6),f=t.n(h),m=(t(18),t(7)),p=t(8),g=t.n(p),v=function(e){var n=function(e){return g()(e.slice(0,10),"YYYY-MM-DD")}(e.from);return e.data.reduce(function(e,t){return t&&(e[n.format("YYYY-MM-DD")]=Number(t)),n.add(1,"days"),e},{})},w=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).getAddon=function(){try{var e=new m.Addon({});return e.on("init",function(e){t.loadCurrenciesCache()}),e.on("reload",function(){}),e.on("update",function(e){console.log(e)}),e}catch(n){console.log(n)}return null},t.state={addon:t.getAddon(),currencyCache:{},portfolio:null,transactions:null},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"loadCurrenciesCache",value:function(){var e=this;console.log("Loading currencies data."),this.state.addon.request({method:"GET",endpoint:"currencies/usd/history",query:{base:"cad"}}).then(function(n){var t=v(n);console.log("Currency cache: ",t),e.setState({currencyCache:t})}).catch(function(e){console.error("Failed to load currency data.",e)})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",null,"Wealthica React Portfolio add using highcharts."),a.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.9744bb24.chunk.js.map