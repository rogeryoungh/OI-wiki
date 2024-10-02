(function(S,A){typeof exports=="object"&&typeof module<"u"?A(exports):typeof define=="function"&&define.amd?define(["exports"],A):(S=typeof globalThis<"u"?globalThis:S||self,A(S.OIWikiFeedbackSysFrontend={}))})(this,function(S){"use strict";const A='<svg xmlns="http://www.w3.org/2000/svg" class="iconify-icon iconify-inline" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 14h10q.425 0 .713-.288T18 13t-.288-.712T17 12H7q-.425 0-.712.288T6 13t.288.713T7 14m0-3h10q.425 0 .713-.288T18 10t-.288-.712T17 9H7q-.425 0-.712.288T6 10t.288.713T7 11m0-3h10q.425 0 .713-.288T18 7t-.288-.712T17 6H7q-.425 0-.712.288T6 7t.288.713T7 8M4 18q-.825 0-1.412-.587T2 16V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v15.575q0 .675-.612.938T20.3 20.3L18 18zm14.85-2L20 17.125V4H4v12zM4 16V4z"/></svg>',Q='<svg xmlns="http://www.w3.org/2000/svg" class="iconify-icon iconify-inline" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>';let k="/api";const X=t=>{k=t},Y=async()=>{const t=await fetch(`${k}meta/github-app`,{method:"GET"});if(!t.ok)throw t;return(await t.json()).data},Z=()=>{const t=new URL(window.location.href),n=t.searchParams.get("oauth_token");n&&(document.cookie=`oauth_token=${n}; path=/; expires=${new Date(JSON.parse(atob(n.split(".")[1])).exp*1e3).toUTCString()}; secure`,t.searchParams.delete("oauth_token"),window.history.replaceState(null,"",t.toString()))},H=()=>document.cookie.replace(/(?:(?:^|.*;\s*)oauth_token\s*\=\s*([^;]*).*$)|^.*$/,"$1"),D=()=>{const t=H();if(!t)return;const n=t.split(".")[1],i=Array.from(atob(n),c=>c.charCodeAt(0)),o=new TextDecoder("utf-8").decode(new Uint8Array(i));return JSON.parse(o)},F=()=>{document.cookie="oauth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure"},tt='<svg xmlns="http://www.w3.org/2000/svg" class="iconify-icon iconify-inline" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>',et='<svg xmlns="http://www.w3.org/2000/svg" class="iconify-icon iconify-inline" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 22q-1.25 0-2.125-.875T14 19q0-.15.075-.7L7.05 14.2q-.4.375-.925.588T5 15q-1.25 0-2.125-.875T2 12t.875-2.125T5 9q.6 0 1.125.213t.925.587l7.025-4.1q-.05-.175-.062-.337T14 5q0-1.25.875-2.125T17 2t2.125.875T20 5t-.875 2.125T17 8q-.6 0-1.125-.213T14.95 7.2l-7.025 4.1q.05.175.063.338T8 12t-.012.363t-.063.337l7.025 4.1q.4-.375.925-.587T17 16q1.25 0 2.125.875T20 19t-.875 2.125T17 22"/></svg>',nt='<svg xmlns="http://www.w3.org/2000/svg" class="iconify-icon iconify-inline" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"/></svg>',ot='<svg xmlns="http://www.w3.org/2000/svg" class="iconify-icon iconify-inline" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"/></svg>',at='<svg xmlns="http://www.w3.org/2000/svg" class="iconify-icon iconify-inline" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11t-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/></svg>',it=function(t,n){return t.reduce((i,o)=>((i[n(o)]=i[n(o)]||[]).push(o),i),{})},O=new Intl.DateTimeFormat("zh-CN",{dateStyle:"short",timeStyle:"short"});let d=null,a,j,v;const st=()=>{a=void 0},ct=t=>{j=t},rt=t=>{v=t},mt=async()=>{var w;const n=new URL(window.location.href).hash;if(!n)return;const i=(w=/#comment-(\d+)/.exec(n))==null?void 0:w[1];if(!i)return;const o=parseInt(i);await L();const c=a==null?void 0:a.find(y=>y.id===o);if(!c)return;const e=[c.offset.start,c.offset.end],p=document.querySelector(`[data-review-enabled][data-original-document-start="${e[0]}"][data-original-document-end="${e[1]}"]`);if(!p)return;await N({el:p,forceOpenCommentsPanel:!0});const m=document.querySelector(`.comment[data-id="${o}"]`);m==null||m.classList.add("comment_highlighting"),m==null||m.scrollIntoView({behavior:"smooth",block:"center"})},N=async({el:t,forceOpenCommentsPanel:n=!1})=>{d!==t&&(d==null||delete d.dataset.reviewSelected,d=t),(d!=null&&d.dataset.reviewHasComments||n)&&(delete d.dataset.reviewFocused,d.dataset.reviewSelected="true",await b(n))},dt=()=>{d==null||delete d.dataset.reviewSelected,d=null},b=async(t=!0)=>{const n=[...await L()],i=d;i&&n.find(c=>c.offset.start===parseInt(i.dataset.originalDocumentStart)&&c.offset.end===parseInt(i.dataset.originalDocumentEnd))===void 0&&n.push({id:-1,offset:{start:parseInt(i.dataset.originalDocumentStart),end:parseInt(i.dataset.originalDocumentEnd)},commenter:{name:"",oauth_provider:"github",oauth_user_id:""},comment:"",created_time:new Date().toISOString(),last_edited_time:null,pending:!0}),await _t(n);let o=document.querySelector(`#review-comments-panel .comments_group[data-original-document-start="${d==null?void 0:d.dataset.originalDocumentStart}"][data-original-document-end="${d==null?void 0:d.dataset.originalDocumentEnd}"]`);if(o&&(o.dataset.reviewSelected="true"),o==null||o.scrollIntoView({behavior:"smooth",block:"start"}),t){const c=o==null?void 0:o.querySelector(".comment_actions_panel textarea");c==null||c.focus()}j.classList.add("review_hidden"),v.classList.remove("review_hidden")},P=()=>{v.classList.add("review_hidden"),j.classList.remove("review_hidden")},lt=async({offsets:t,content:n,onPendingFulfilled:i})=>{var w,y,x;const o=sessionStorage.getItem("commitHash");if(!o)throw new Error("找不到 Commit hash，请联系站点管理员");const c={offset:{start:t[0],end:t[1]},comment:n},e=fetch(`${k}comment/${encodeURIComponent(new URL(window.location.href).pathname)}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${H()}`},body:JSON.stringify({...c,commit_hash:o})}),p=(a==null?void 0:a.length)??-1;a&&a.push({...c,commenter:{name:((w=D())==null?void 0:w.name)??"未知用户",oauth_provider:(y=D())==null?void 0:y.provider,oauth_user_id:((x=D())==null?void 0:x.id)??"-1"},id:a.length,created_time:new Date().toISOString(),last_edited_time:null,pending:!0}),await(i==null?void 0:i());const m=await e;if(!m.ok)throw a&&(a=a.filter(g=>g.id!==p)),m;a&&(a=a.map(g=>g.id===p?{...g,pending:!1}:g)),await L(!0),z()},ut=async({id:t,comment:n,onPendingFulfilled:i})=>{const o=fetch(`${k}comment/${encodeURIComponent(new URL(window.location.href).pathname)}/id/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:`Bearer ${H()}`},body:JSON.stringify({comment:n})});a&&(a=a.map(e=>e.id===t?{...e,pending:!0}:e)),await(i==null?void 0:i());const c=await o;if(!c.ok)throw a&&(a=a.map(e=>e.id===t?{...e,pending:!1}:e)),c;a&&(a=a.map(e=>e.id===t?{...e,comment:n,pending:!1}:e)),await L(!0),z()},ft=async({id:t})=>{const n=fetch(`${k}comment/${encodeURIComponent(new URL(window.location.href).pathname)}/id/${t}`,{method:"DELETE",headers:{Authorization:`Bearer ${H()}`}});a&&(a=a.map(o=>o.id===t?{...o,pending:!0}:o));const i=await n;if(!i.ok)throw a&&(a=a.map(o=>o.id===t?{...o,pending:!1}:o)),i;a&&(a=a.filter(o=>o.id!==t)),await L(!0),z()},L=async(t=!1)=>{if(!t&&a)return a;const n=await fetch(`${k}comment/${encodeURIComponent(new URL(window.location.href).pathname)}`);if(!n.ok)throw n;const i=(await n.json()).data;return a=i,i},_t=async t=>{const n=v.querySelector(".panel_main"),i=document.createDocumentFragment(),o=it(t,c=>`${c.offset.start}-${c.offset.end}`);for(const c of Object.keys(o).sort((e,p)=>parseInt(e.split("-")[0])-parseInt(p.split("-")[0]))){const e=document.createElement("div");e.classList.add("comments_group");const p=c.split("-");e.dataset.originalDocumentStart=p[0],e.dataset.originalDocumentEnd=p[1];const m=document.querySelector(`[data-review-enabled][data-original-document-start="${e.dataset.originalDocumentStart}"][data-original-document-end="${e.dataset.originalDocumentEnd}"]`),w=(m==null?void 0:m.textContent)??"";e.innerHTML=`
      <div class="comments_group_header">
        <span class="comments_group_text_content">${w}</span>
      </div>
      <div class="comments_group_main"></div>
      <div class="comments_group_footer">
        <div class="comment_actions_panel">
          <div class="comment_actions_header">
            <span class="comment_username"></span>
            <button class="comment_actions_item" data-action="logout">退出登录</button>
          </div>
          <textarea required placeholder="写下你的评论..."  autocapitalize="sentences" autocomplete="on" spellcheck="true" maxlength="65535"></textarea>
          <div class="comment_actions_footer">
            <span class="comment_actions_notification"></span>
            <div class="comment_actions comment_actions_login">
              <button class="comment_actions_item comment_actions_item_btn comment_actions_item_btn_primary" data-action="login">登录到 GitHub</button>
            </div>
            <div class="comment_actions comment_actions_modify">
              <button class="comment_actions_item comment_actions_item_btn" data-action="modify_cancel">取消</button>
              <button class="comment_actions_item comment_actions_item_btn comment_actions_item_btn_primary" data-action="modify_submit">修改</button>
            </div>
            <div class="comment_actions comment_actions_reply">
              <button class="comment_actions_item comment_actions_item_btn" data-action="cancel">取消</button>
              <button class="comment_actions_item comment_actions_item_btn comment_actions_item_btn_primary" data-action="submit">提交</button>
            </div>
          </div>
        </div>
      </div>
    `.trim();const y=r=>{r.style.height="5px",r.style.height=r.scrollHeight+"px"};e.querySelector(".comment_actions_panel textarea").addEventListener("input",r=>{const s=r.currentTarget;y(s)});const x=e.querySelector(".comment_username"),g=e.querySelector(".comment_actions_login"),R=e.querySelector("button.comment_actions_item[data-action='logout']"),T=D();T?(x.textContent=`作为 ${T.name} 发表评论`,g.style.display="none"):(x.textContent="登录到 GitHub 以发表评论",R.style.display="none");const E=e.querySelector(".comment_actions_modify");E.style.display="none",e.addEventListener("mouseenter",()=>{m&&(m.dataset.reviewFocused="true")}),e.addEventListener("mouseleave",()=>{m==null||delete m.dataset.reviewFocused}),e.addEventListener("click",r=>{var s;r.stopPropagation(),d==null||delete d.dataset.reviewSelected,m==null||delete m.dataset.reviewFocused,m==null||delete m.dataset.reviewSelected,(s=document.querySelector(".comments_group[data-review-selected]"))==null||delete s.dataset.reviewSelected,e.dataset.reviewSelected="true",d=m,d==null||d.scrollIntoView({behavior:"smooth",block:"center"})});const gt=o[c].sort((r,s)=>new Date(r.created_time).getTime()-new Date(s.created_time).getTime()),Tt=e.querySelector(".comments_group_main");for(const r of gt){if(r.id===-1)continue;const s=document.createElement("div");s.classList.add("comment"),r.pending&&s.classList.add("comment_pending"),s.dataset.id=r.id.toString(),s.innerHTML=`
        <div class="comment_container">
          <div class="comment_side">
            <div class="comment_user_avatar">
              <img src="${r.commenter.avatar_url}" alt="user avatar"/>
            </div>
          </div>
          <div class="comment_base">
            <div class="comment_header">
              <a class="comment_commenter"></a>
              <span class="comment_time comment_created_time">发布于 ${O.format(new Date(r.created_time))}</span>
              <span class="comment_time comment_edited_time">最后编辑于 ${r.last_edited_time?O.format(new Date(r.last_edited_time)):""}</span>
              <div class="comment_actions">
                <button class="comment_actions_item" data-action="copy_permalink" title="分享">${et}</button>
                <button class="comment_actions_item comment_actions_item_administration" data-action="modify" title="编辑">${nt}</button>
                <button class="comment_actions_item comment_actions_item_administration" data-action="delete" title="删除">${ot}</button>
              </div>
            </div>
            <div class="comment_main">
              <span class="comment_content"></span>
              <span class="comment_edit_tag">(已编辑)</span>
            </div>
          </div>
        </div>
        <div class="comment_tailing">
          <button class="comment_actions_item comment_expand" data-action="expand">展开</button>
          <button class="comment_actions_item comment_expand" data-action="fold">折叠</button>
        </div>
      `.trim();const f=s.querySelector(".comment_commenter");r.commenter.name&&(f.textContent=r.commenter.name,f.title=r.commenter.name);const _=s.querySelector(".comment_user_avatar");r.commenter.profile_url&&(f.target="_blank",f.href=r.commenter.profile_url,_.style.cursor="pointer",_.addEventListener("click",()=>{window.open(r.commenter.profile_url)})),r.commenter.avatar_url||(_.innerHTML=tt),s.querySelector(".comment_main .comment_content").textContent=r.comment;const I=s.querySelector(".comment_header .comment_actions");let q=!0,V=!0;(!T||T.provider!==r.commenter.oauth_provider||T.id!==r.commenter.oauth_user_id)&&(q=!1),T&&T.isAdmin===!0&&(q=!0),r.id===-1&&(q=!1),q||I.querySelectorAll(".comment_actions_item_administration").forEach(U=>{U.style.display="none"}),!q&&!V&&(I.style.display="none");const M=s.querySelector(".comment_header .comment_created_time"),C=s.querySelector(".comment_header .comment_edited_time");C.style.display="none",r.last_edited_time&&M.addEventListener("click",()=>{M.style.display="none",C.style.display=""}),C.addEventListener("click",()=>{M.style.display="",C.style.display="none"});const B=s.querySelector(".comment_main .comment_edit_tag");r.last_edited_time||(B.style.display="none"),Tt.appendChild(s)}for(const r of e.querySelectorAll(".comment_actions_item"))r.addEventListener("click",async()=>{var q,V,M,C,B,U;const s=r,f=e.querySelector(".comment_actions_panel textarea"),_=e.querySelector(".comment_actions_notification"),I=async l=>{var u;if(console.error(l),l instanceof Error)_.textContent=l.message;else if(l instanceof Response){if(l.status===401){_.textContent="身份验证失效，请重新登录",F();return}if(((u=l.headers.get("content-type"))==null?void 0:u.includes("application/json"))===!0){const h=await l.json();_.textContent=h.error}else _.textContent=`未知接口错误：${l.status}(${l.statusText})`}else _.textContent="提交失败，请稍后再试"};switch(s==null?void 0:s.dataset.action){case"copy_permalink":{s.dataset.tag="using";const l=e.querySelector(`.comment:has([data-tag="using"][data-action="${s==null?void 0:s.dataset.action}"])`);delete s.dataset.tag;const u=(q=l==null?void 0:l.dataset)==null?void 0:q.id;if(u==null)return;const h=new URL(window.location.href);h.hash=`#comment-${u}`,await navigator.clipboard.writeText(h.toString()),_.textContent="已复制评论链接地址";break}case"login":{const l=await Y();window.location.href=`https://github.com/login/oauth/authorize?client_id=${l.client_id}&state=${encodeURIComponent(JSON.stringify({redirect:window.location.href}))}`;break}case"logout":{F(),window.location.reload();break}case"cancel":{f.disabled=!1,f.value="",_.textContent="",y(f);break}case"submit":{if(f.disabled=!0,!f.checkValidity()){_.textContent="请填写评论内容",f.disabled=!1;return}_.textContent="";const l=v.querySelector("[data-review-selected] button[data-action='submit']");l&&(l.disabled=!0);try{await lt({offsets:[parseInt(d.dataset.originalDocumentStart),parseInt(d.dataset.originalDocumentEnd)],content:f.value,onPendingFulfilled:async()=>{await b()}}),f.value="",_.textContent=""}catch(u){I(u)}finally{await b();const u=v.querySelector("[data-review-selected] .comment_actions_notification"),h=v.querySelector("[data-review-selected] .comment_actions_panel textarea");u&&(u.textContent=_.textContent),h&&(h.value=f.value)}break}case"modify":{(V=e.querySelector(`.comment[data-id="${e.dataset.modifingId}"]`))==null||V.classList.remove("comment_pending"),s.dataset.tag="using";const l=e.querySelector(`.comment:has([data-tag="using"][data-action="${s==null?void 0:s.dataset.action}"])`);delete s.dataset.tag;const u=(M=l==null?void 0:l.dataset)==null?void 0:M.id;if(u==null)return;l==null||l.classList.add("comment_pending"),E.style.display="",e.dataset.modifingId=u,f.value=((C=a==null?void 0:a.find($=>$.id===parseInt(u)))==null?void 0:C.comment)??"";const h=e.querySelector(".comments_group_footer");h.style.display="block",y(f),h.style.display="";break}case"modify_cancel":{(B=e.querySelector(`.comment[data-id="${e.dataset.modifingId}"]`))==null||B.classList.remove("comment_pending"),E.style.display="none",delete e.dataset.modifingId,f.disabled=!1,f.value="",_.textContent="",y(f);break}case"modify_submit":{const l=e.dataset.modifingId;if(l==null)return;try{await ut({id:parseInt(l),comment:f.value,onPendingFulfilled:async()=>{await b()}}),f.value="",_.textContent=""}catch(u){I(u)}finally{await b();const u=v.querySelector("[data-review-selected] .comment_actions_notification"),h=v.querySelector("[data-review-selected] .comment_actions_panel textarea");u&&(u.textContent=_.textContent),h&&(h.value=f.value)}break}case"delete":{s.dataset.tag="using";const l=e.querySelector(`.comment:has([data-tag="using"][data-action="${s==null?void 0:s.dataset.action}"])`);delete s.dataset.tag;const u=(U=l.dataset)==null?void 0:U.id;if(u==null)return;ft({id:parseInt(u)}).catch(I).finally(()=>{b().then(()=>{const h=v.querySelector("[data-review-selected] .comment_actions_notification"),$=v.querySelector("[data-review-selected] .comment_actions_panel textarea");h&&(h.textContent=_.textContent),$&&($.value=f.value)})}),b().then(()=>{const h=v.querySelector("[data-review-selected] .comment_actions_notification"),$=v.querySelector(`.comment[data-id="${u}"] button[data-action="delete"]`),K=v.querySelector(`.comment[data-id="${u}"] button[data-action="modify"]`);h&&(h.textContent=_.textContent),$&&($.disabled=!0),K&&(K.disabled=!0)});break}}});i.appendChild(e)}for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(i);for(const c of v.querySelectorAll(".comment")){const e=c.querySelector(".comment_main"),p=c.querySelector('.comment_tailing .comment_expand[data-action="expand"]'),m=c.querySelector('.comment_tailing .comment_expand[data-action="fold"]'),w=e.offsetHeight;e.scrollHeight<=w&&(p.style.display="none"),m.style.display="none",p.addEventListener("click",()=>{p.style.display="none",m.style.display="",e.style.maxHeight=e.scrollHeight+"px"}),m.addEventListener("click",()=>{p.style.display="",m.style.display="none",e.style.maxHeight=`${w}px`})}n.children.length===0&&(n.innerHTML=`
      <div class="comments_empty">
        ${at}
        <span>本页暂无评论，点击段落右侧的评论按钮以添加评论</span>
      </div>
    `.trim())},z=async()=>{const t=Array.from(document.querySelectorAll("[data-review-enabled][data-original-document-start][data-original-document-end]"));await L();for(let n of t)delete n.dataset.reviewHasComments,a.find(i=>i.offset.start===parseInt(n.dataset.originalDocumentStart)&&i.offset.end===parseInt(n.dataset.originalDocumentEnd))&&(n.dataset.reviewHasComments="true")},J=({idOrClass:t,content:n,actions:i=new Map,parent:o=document.body,insertPosition:c="beforeend",tag:e="div",isClass:p=!1,initialize:m=()=>{}})=>{let w=document.querySelector(`#${t}`);if(!p&&w)return w;o.insertAdjacentHTML(c,`
    <${e} ${p?`class="${t}"`:`id="${t}"`}>
      ${n.trim()}
    </${e}>
    `.trim()),w=o.querySelector(p?`.${t}`:`#${t}`),m(w);const y=w.querySelectorAll("[data-action]");for(const x of y)x.addEventListener("click",g=>{var E;g.stopPropagation();const R=g.currentTarget,T=R.dataset.action??"";(E=i.get(T))==null||E(R)});return w},pt='<svg xmlns="http://www.w3.org/2000/svg" class="iconify-icon iconify-inline" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 11v2q0 .425.288.713T12 14t.713-.288T13 13v-2h2q.425 0 .713-.288T16 10t-.288-.712T15 9h-2V7q0-.425-.288-.712T12 6t-.712.288T11 7v2H9q-.425 0-.712.288T8 10t.288.713T9 11zm-5 7l-2.3 2.3q-.475.475-1.088.213T2 19.575V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-.85-2H20V4H4v13.125zM4 16V4z"/></svg>',ht=({el:t})=>{t.querySelector(".review-context-menu")||J({idOrClass:"review-context-menu",content:`
    <button data-action="comment">
      ${pt}
    </button>
    `,parent:t,actions:new Map([["comment",()=>{N({el:t,forceOpenCommentsPanel:!0})}]]),isClass:!0,initialize:n=>{n.addEventListener("mouseenter",()=>{t.dataset.reviewFocused="true"}),n.addEventListener("mouseleave",()=>{delete t.dataset.reviewFocused}),n.style.display="none"}})},wt=({el:t})=>{const n=t.querySelector(".review-context-menu");if(!n){console.error("openContextMenu called but contextMenu not found");return}n.style.display=""},vt=({el:t})=>{const n=t.querySelector('.review-context-menu:not([style*="display: none"])');if(!n){console.error("closeContextMenu called but contextMenu not found");return}n.style.display="none"};let W=!1;const G="0.5.10";function yt(t,{apiEndpoint:n="/api"}={}){X(n.endsWith("/")?n:n+"/"),Z();const i=Array.from(t.querySelectorAll("[data-original-document-start][data-original-document-end]"));if(!i){console.warn("oiwiki-feedback-sys-frontend not found any offsets to inject, quitting...");return}for(let o of i)o.dataset.reviewEnabled="true",o.addEventListener("click",c=>{c.stopPropagation(),N({el:c.currentTarget})}),o.addEventListener("mouseenter",c=>{wt({el:c.currentTarget})}),o.addEventListener("mouseleave",c=>{vt({el:c.currentTarget})}),ht({el:o});if(st(),z(),W){P(),console.log("oiwiki-feedback-sys-frontend has been successfully reset.");return}document.addEventListener("click",()=>{dt()}),ct(J({idOrClass:"review-comments-button",content:`
    <button data-action="open">
      ${A}
    </button>
    `,actions:new Map([["open",()=>b()]])})),rt(J({idOrClass:"review-comments-panel",content:`
    <div class="panel_header">
      <span>本页评论</span>
      <button data-action="close">
        ${Q}
      </button>
    </div>
    <div class="panel_main"></div>
    <div class="panel_footer">
      - Powered by <a href="https://github.com/OI-wiki/feedback-sys" target="_blank">OI Wiki Feedback System</a> -
    </div>
    `,actions:new Map([["close",()=>P()]])})),P(),mt(),console.log(`oiwiki-feedback-sys-frontend version ${G} has been successfully installed.`),W=!0}S.__VERSION__=G,S.setupReview=yt,Object.defineProperty(S,Symbol.toStringTag,{value:"Module"})});
