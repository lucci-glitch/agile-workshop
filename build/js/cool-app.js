function n(r){return"bcdfghjklmnpqrstvwxz".indexOf(r.toLowerCase())!=-1}function s(r){let t="";for(let e of r)n(e)?t+=e+"o"+e.toLowerCase():t+=e;return t}function a(r){let t=!0,e="";for(let o of r)n(o)&&t?(e+=o+"all",t=!1):(o===" "&&(t=!0),e+=o);return e}function i(r){for(let t=0;t<r.length;++t){let e=r.charAt(t);if(n(e)){let o=r.charAt(t+1);return o==="o"?d(r):o==="a"?h(r):r}}return r}function d(r){let t="";for(let e=0;e<r.length;++e){let o=r.charAt(e);t+=o,n(o)&&(e+=2)}return t}function h(r){let t="",e=!0;for(let o=0;o<r.length;++o){let l=r.charAt(o);t+=l,n(l)&&e?(o+=3,e=!1):l===" "&&(e=!0)}return t}var c=document.createElement("template");c.innerHTML=`<div>
                        <h1>The cool application!</h1>
                        <textarea rows="20" cols="50" id="text"></textarea><br>
                        <input type="button" value="To Robber" id="robber">
                        <input type="button" value="To Allsprak" id="allsprak">
                        <input type="button" value="Reverse" id="reverse">
                      </div>`;var u=class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).appendChild(c.content.cloneNode(!0)),this.shadowRoot.getElementById("robber").addEventListener("click",this.convertTo(s)),this.shadowRoot.getElementById("allsprak").addEventListener("click",this.convertTo(a)),this.shadowRoot.getElementById("reverse").addEventListener("click",this.convertTo(i))}convertTo(t){return()=>{let e=this.shadowRoot.getElementById("text"),o=t(e.value);e.value=o}}};window.customElements.define("cool-app",u);
