import{m as W,ai as F,o as D,aa as I,i as Q,O as le,a9 as De,bf as Ke,u as we,Z as xe,am as _,aX as oe,v as Se,ak as Te,M as R,x as he,T as U,s as K,aH as te,aK as Ae,f as Be,bg as Oe,y as ge,aO as Ie,z as w,C as ue,bh as Le,r as O,X as de,Y as se,c as P,a as ae,ac as $e,al as x,a0 as A,b as j,d as ne,$ as Me,F as ye,G as Ne,aF as He,aD as Pe,Q as fe,B as ze,W as Fe,b2 as qe,bi as je,n as Re,bj as Ue,t as We}from"./index_entry_e97BpdQx.js";import{E as Ye}from"./el-checkbox_chunk.js";import{E as B}from"./aria_chunk.js";import{u as Xe}from"./index_chunk3.js";const Ge=W({name:"ElCollapseTransition"}),Qe=W({...Ge,setup(n){const e=F("collapse-transition"),o=t=>{t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom},d={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height&&(t.dataset.elExistsHeight=t.style.height),t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){requestAnimationFrame(()=>{t.dataset.oldOverflow=t.style.overflow,t.dataset.elExistsHeight?t.style.maxHeight=t.dataset.elExistsHeight:t.scrollHeight!==0?t.style.maxHeight=`${t.scrollHeight}px`:t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom,t.style.overflow="hidden"})},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},enterCancelled(t){o(t)},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){o(t)},leaveCancelled(t){o(t)}};return(t,s)=>(D(),I(xe,De({name:we(e).b()},Ke(d)),{default:Q(()=>[le(t.$slots,"default")]),_:3},16,["name"]))}});var Z=_(Qe,[["__file","collapse-transition.vue"]]);Z.install=n=>{n.component(Z.name,Z)};const Ze=Z,z="$treeNodeId",pe=function(n,e){!e||e[z]||Object.defineProperty(e,z,{value:n.id,enumerable:!1,configurable:!1,writable:!1})},ce=function(n,e){return n?e[n]:e[z]},re=(n,e,o)=>{const d=n.value.currentNode;o();const t=n.value.currentNode;d!==t&&e("current-change",t?t.data:null,t)},ie=n=>{let e=!0,o=!0,d=!0;for(let t=0,s=n.length;t<s;t++){const r=n[t];(r.checked!==!0||r.indeterminate)&&(e=!1,r.disabled||(d=!1)),(r.checked!==!1||r.indeterminate)&&(o=!1)}return{all:e,none:o,allWithoutDisable:d,half:!e&&!o}},J=function(n){if(n.childNodes.length===0||n.loading)return;const{all:e,none:o,half:d}=ie(n.childNodes);e?(n.checked=!0,n.indeterminate=!1):d?(n.checked=!1,n.indeterminate=!0):o&&(n.checked=!1,n.indeterminate=!1);const t=n.parent;!t||t.level===0||n.store.checkStrictly||J(t)},G=function(n,e){const o=n.store.props,d=n.data||{},t=o[e];if(typeof t=="function")return t(d,n);if(typeof t=="string")return d[t];if(typeof t>"u"){const s=d[e];return s===void 0?"":s}};let Je=0;class L{constructor(e){this.id=Je++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1;for(const o in e)oe(e,o)&&(this[o]=e[o]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}initialize(){const e=this.store;if(!e)throw new Error("[Node]store is required!");e.registerNode(this);const o=e.props;if(o&&typeof o.isLeaf<"u"){const s=G(this,"isLeaf");typeof s=="boolean"&&(this.isLeafByUser=s)}if(e.lazy!==!0&&this.data?(this.setData(this.data),e.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&e.lazy&&e.defaultExpandAll&&this.expand(),Array.isArray(this.data)||pe(this,this.data),!this.data)return;const d=e.defaultExpandedKeys,t=e.key;t&&d&&d.includes(this.key)&&this.expand(null,e.autoExpandParent),t&&e.currentNodeKey!==void 0&&this.key===e.currentNodeKey&&(e.currentNode=this,e.currentNode.isCurrent=!0),e.lazy&&e._initDefaultCheckedNode(this),this.updateLeafState(),this.parent&&(this.level===1||this.parent.expanded===!0)&&(this.canFocus=!0)}setData(e){Array.isArray(e)||pe(this,e),this.data=e,this.childNodes=[];let o;this.level===0&&Array.isArray(this.data)?o=this.data:o=G(this,"children")||[];for(let d=0,t=o.length;d<t;d++)this.insertChild({data:o[d]})}get label(){return G(this,"label")}get key(){const e=this.store.key;return this.data?this.data[e]:null}get disabled(){return G(this,"disabled")}get nextSibling(){const e=this.parent;if(e){const o=e.childNodes.indexOf(this);if(o>-1)return e.childNodes[o+1]}return null}get previousSibling(){const e=this.parent;if(e){const o=e.childNodes.indexOf(this);if(o>-1)return o>0?e.childNodes[o-1]:null}return null}contains(e,o=!0){return(this.childNodes||[]).some(d=>d===e||o&&d.contains(e))}remove(){const e=this.parent;e&&e.removeChild(this)}insertChild(e,o,d){if(!e)throw new Error("InsertChild error: child is required.");if(!(e instanceof L)){if(!d){const t=this.getChildren(!0);t.includes(e.data)||(typeof o>"u"||o<0?t.push(e.data):t.splice(o,0,e.data))}Object.assign(e,{parent:this,store:this.store}),e=Se(new L(e)),e instanceof L&&e.initialize()}e.level=this.level+1,typeof o>"u"||o<0?this.childNodes.push(e):this.childNodes.splice(o,0,e),this.updateLeafState()}insertBefore(e,o){let d;o&&(d=this.childNodes.indexOf(o)),this.insertChild(e,d)}insertAfter(e,o){let d;o&&(d=this.childNodes.indexOf(o),d!==-1&&(d+=1)),this.insertChild(e,d)}removeChild(e){const o=this.getChildren()||[],d=o.indexOf(e.data);d>-1&&o.splice(d,1);const t=this.childNodes.indexOf(e);t>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(t,1)),this.updateLeafState()}removeChildByData(e){let o=null;for(let d=0;d<this.childNodes.length;d++)if(this.childNodes[d].data===e){o=this.childNodes[d];break}o&&this.removeChild(o)}expand(e,o){const d=()=>{if(o){let t=this.parent;for(;t.level>0;)t.expanded=!0,t=t.parent}this.expanded=!0,e&&e(),this.childNodes.forEach(t=>{t.canFocus=!0})};this.shouldLoadData()?this.loadData(t=>{Array.isArray(t)&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||J(this),d())}):d()}doCreateChildren(e,o={}){e.forEach(d=>{this.insertChild(Object.assign({data:d},o),void 0,!0)})}collapse(){this.expanded=!1,this.childNodes.forEach(e=>{e.canFocus=!1})}shouldLoadData(){return this.store.lazy===!0&&this.store.load&&!this.loaded}updateLeafState(){if(this.store.lazy===!0&&this.loaded!==!0&&typeof this.isLeafByUser<"u"){this.isLeaf=this.isLeafByUser;return}const e=this.childNodes;if(!this.store.lazy||this.store.lazy===!0&&this.loaded===!0){this.isLeaf=!e||e.length===0;return}this.isLeaf=!1}setChecked(e,o,d,t){if(this.indeterminate=e==="half",this.checked=e===!0,this.store.checkStrictly)return;if(!(this.shouldLoadData()&&!this.store.checkDescendants)){const{all:r,allWithoutDisable:i}=ie(this.childNodes);!this.isLeaf&&!r&&i&&(this.checked=!1,e=!1);const f=()=>{if(o){const N=this.childNodes;for(let a=0,p=N.length;a<p;a++){const y=N[a];t=t||e!==!1;const k=y.disabled?y.checked:t;y.setChecked(k,o,!0,t)}const{half:h,all:c}=ie(N);c||(this.checked=c,this.indeterminate=h)}};if(this.shouldLoadData()){this.loadData(()=>{f(),J(this)},{checked:e!==!1});return}else f()}const s=this.parent;!s||s.level===0||d||J(s)}getChildren(e=!1){if(this.level===0)return this.data;const o=this.data;if(!o)return null;const d=this.store.props;let t="children";return d&&(t=d.children||"children"),o[t]===void 0&&(o[t]=null),e&&!o[t]&&(o[t]=[]),o[t]}updateChildren(){const e=this.getChildren()||[],o=this.childNodes.map(s=>s.data),d={},t=[];e.forEach((s,r)=>{const i=s[z];!!i&&o.findIndex(N=>N[z]===i)>=0?d[i]={index:r,data:s}:t.push({index:r,data:s})}),this.store.lazy||o.forEach(s=>{d[s[z]]||this.removeChildByData(s)}),t.forEach(({index:s,data:r})=>{this.insertChild({data:r},s)}),this.updateLeafState()}loadData(e,o={}){if(this.store.lazy===!0&&this.store.load&&!this.loaded&&(!this.loading||Object.keys(o).length)){this.loading=!0;const d=t=>{this.childNodes=[],this.doCreateChildren(t,o),this.loaded=!0,this.loading=!1,this.updateLeafState(),e&&e.call(this,t)};this.store.load(this,d)}else e&&e.call(this)}}class Ve{constructor(e){this.currentNode=null,this.currentNodeKey=null;for(const o in e)oe(e,o)&&(this[o]=e[o]);this.nodesMap={}}initialize(){if(this.root=new L({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load){const e=this.load;e(this.root,o=>{this.root.doCreateChildren(o),this._initDefaultCheckedNodes()})}else this._initDefaultCheckedNodes()}filter(e){const o=this.filterNodeMethod,d=this.lazy,t=function(s){const r=s.root?s.root.childNodes:s.childNodes;if(r.forEach(i=>{i.visible=o.call(i,e,i.data,i),t(i)}),!s.visible&&r.length){let i=!0;i=!r.some(f=>f.visible),s.root?s.root.visible=i===!1:s.visible=i===!1}e&&s.visible&&!s.isLeaf&&(!d||s.loaded)&&s.expand()};t(this)}setData(e){e!==this.root.data?(this.root.setData(e),this._initDefaultCheckedNodes()):this.root.updateChildren()}getNode(e){if(e instanceof L)return e;const o=Te(e)?ce(this.key,e):e;return this.nodesMap[o]||null}insertBefore(e,o){const d=this.getNode(o);d.parent.insertBefore({data:e},d)}insertAfter(e,o){const d=this.getNode(o);d.parent.insertAfter({data:e},d)}remove(e){const o=this.getNode(e);o&&o.parent&&(o===this.currentNode&&(this.currentNode=null),o.parent.removeChild(o))}append(e,o){const d=o?this.getNode(o):this.root;d&&d.insertChild({data:e})}_initDefaultCheckedNodes(){const e=this.defaultCheckedKeys||[],o=this.nodesMap;e.forEach(d=>{const t=o[d];t&&t.setChecked(!0,!this.checkStrictly)})}_initDefaultCheckedNode(e){(this.defaultCheckedKeys||[]).includes(e.key)&&e.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}registerNode(e){const o=this.key;!e||!e.data||(o?e.key!==void 0&&(this.nodesMap[e.key]=e):this.nodesMap[e.id]=e)}deregisterNode(e){!this.key||!e||!e.data||(e.childNodes.forEach(d=>{this.deregisterNode(d)}),delete this.nodesMap[e.key])}getCheckedNodes(e=!1,o=!1){const d=[],t=function(s){(s.root?s.root.childNodes:s.childNodes).forEach(i=>{(i.checked||o&&i.indeterminate)&&(!e||e&&i.isLeaf)&&d.push(i.data),t(i)})};return t(this),d}getCheckedKeys(e=!1){return this.getCheckedNodes(e).map(o=>(o||{})[this.key])}getHalfCheckedNodes(){const e=[],o=function(d){(d.root?d.root.childNodes:d.childNodes).forEach(s=>{s.indeterminate&&e.push(s.data),o(s)})};return o(this),e}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map(e=>(e||{})[this.key])}_getAllNodes(){const e=[],o=this.nodesMap;for(const d in o)oe(o,d)&&e.push(o[d]);return e}updateChildren(e,o){const d=this.nodesMap[e];if(!d)return;const t=d.childNodes;for(let s=t.length-1;s>=0;s--){const r=t[s];this.remove(r.data)}for(let s=0,r=o.length;s<r;s++){const i=o[s];this.append(i,d.data)}}_setCheckedKeys(e,o=!1,d){const t=this._getAllNodes().sort((f,N)=>f.level-N.level),s=Object.create(null),r=Object.keys(d);t.forEach(f=>f.setChecked(!1,!1));const i=f=>{f.childNodes.forEach(N=>{var h;s[N.data[e]]=!0,(h=N.childNodes)!=null&&h.length&&i(N)})};for(let f=0,N=t.length;f<N;f++){const h=t[f],c=h.data[e].toString();if(!r.includes(c)){h.checked&&!s[c]&&h.setChecked(!1,!1);continue}if(h.childNodes.length&&i(h),h.isLeaf||this.checkStrictly){h.setChecked(!0,!1);continue}if(h.setChecked(!0,!0),o){h.setChecked(!1,!1);const p=function(y){y.childNodes.forEach(v=>{v.isLeaf||v.setChecked(!1,!1),p(v)})};p(h)}}}setCheckedNodes(e,o=!1){const d=this.key,t={};e.forEach(s=>{t[(s||{})[d]]=!0}),this._setCheckedKeys(d,o,t)}setCheckedKeys(e,o=!1){this.defaultCheckedKeys=e;const d=this.key,t={};e.forEach(s=>{t[s]=!0}),this._setCheckedKeys(d,o,t)}setDefaultExpandedKeys(e){e=e||[],this.defaultExpandedKeys=e,e.forEach(o=>{const d=this.getNode(o);d&&d.expand(null,this.autoExpandParent)})}setChecked(e,o,d){const t=this.getNode(e);t&&t.setChecked(!!o,d)}getCurrentNode(){return this.currentNode}setCurrentNode(e){const o=this.currentNode;o&&(o.isCurrent=!1),this.currentNode=e,this.currentNode.isCurrent=!0}setUserCurrentNode(e,o=!0){const d=e[this.key],t=this.nodesMap[d];this.setCurrentNode(t),o&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}setCurrentNodeKey(e,o=!0){if(e==null){this.currentNode&&(this.currentNode.isCurrent=!1),this.currentNode=null;return}const d=this.getNode(e);d&&(this.setCurrentNode(d),o&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}const _e=W({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup(n){const e=F("tree"),o=R("NodeInstance"),d=R("RootTree");return()=>{const t=n.node,{data:s,store:r}=t;return n.renderContent?n.renderContent(he,{_self:o,node:t,data:s,store:r}):le(d.ctx.slots,"default",{node:t,data:s},()=>[he("span",{class:e.be("node","label")},[t.label])])}}});var et=_(_e,[["__file","tree-node-content.vue"]]);function Ce(n){const e=R("TreeNodeMap",null),o={treeNodeExpand:d=>{n.node!==d&&n.node.collapse()},children:[]};return e&&e.children.push(o),U("TreeNodeMap",o),{broadcastExpanded:d=>{if(n.accordion)for(const t of o.children)t.treeNodeExpand(d)}}}const ke=Symbol("dragEvents");function tt({props:n,ctx:e,el$:o,dropIndicator$:d,store:t}){const s=F("tree"),r=K({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null});return U(ke,{treeNodeDragStart:({event:h,treeNode:c})=>{if(typeof n.allowDrag=="function"&&!n.allowDrag(c.node))return h.preventDefault(),!1;h.dataTransfer.effectAllowed="move";try{h.dataTransfer.setData("text/plain","")}catch{}r.value.draggingNode=c,e.emit("node-drag-start",c.node,h)},treeNodeDragOver:({event:h,treeNode:c})=>{const a=c,p=r.value.dropNode;p&&p.node.id!==a.node.id&&te(p.$el,s.is("drop-inner"));const y=r.value.draggingNode;if(!y||!a)return;let k=!0,v=!0,b=!0,T=!0;typeof n.allowDrop=="function"&&(k=n.allowDrop(y.node,a.node,"prev"),T=v=n.allowDrop(y.node,a.node,"inner"),b=n.allowDrop(y.node,a.node,"next")),h.dataTransfer.dropEffect=v||k||b?"move":"none",(k||v||b)&&(p==null?void 0:p.node.id)!==a.node.id&&(p&&e.emit("node-drag-leave",y.node,p.node,h),e.emit("node-drag-enter",y.node,a.node,h)),k||v||b?r.value.dropNode=a:r.value.dropNode=null,a.node.nextSibling===y.node&&(b=!1),a.node.previousSibling===y.node&&(k=!1),a.node.contains(y.node,!1)&&(v=!1),(y.node===a.node||y.node.contains(a.node))&&(k=!1,v=!1,b=!1);const S=a.$el.querySelector(`.${s.be("node","content")}`).getBoundingClientRect(),$=o.value.getBoundingClientRect();let E;const Y=k?v?.25:b?.45:1:-1,X=b?v?.75:k?.55:0:1;let M=-9999;const u=h.clientY-S.top;u<S.height*Y?E="before":u>S.height*X?E="after":v?E="inner":E="none";const C=a.$el.querySelector(`.${s.be("node","expand-icon")}`).getBoundingClientRect(),m=d.value;E==="before"?M=C.top-$.top:E==="after"&&(M=C.bottom-$.top),m.style.top=`${M}px`,m.style.left=`${C.right-$.left}px`,E==="inner"?Ae(a.$el,s.is("drop-inner")):te(a.$el,s.is("drop-inner")),r.value.showDropIndicator=E==="before"||E==="after",r.value.allowDrop=r.value.showDropIndicator||T,r.value.dropType=E,e.emit("node-drag-over",y.node,a.node,h)},treeNodeDragEnd:h=>{const{draggingNode:c,dropType:a,dropNode:p}=r.value;if(h.preventDefault(),h.dataTransfer.dropEffect="move",c&&p){const y={data:c.node.data};a!=="none"&&c.node.remove(),a==="before"?p.node.parent.insertBefore(y,p.node):a==="after"?p.node.parent.insertAfter(y,p.node):a==="inner"&&p.node.insertChild(y),a!=="none"&&t.value.registerNode(y),te(p.$el,s.is("drop-inner")),e.emit("node-drag-end",c.node,p.node,a,h),a!=="none"&&e.emit("node-drop",c.node,p.node,a,h)}c&&!p&&e.emit("node-drag-end",c.node,null,a,h),r.value.showDropIndicator=!1,r.value.draggingNode=null,r.value.dropNode=null,r.value.allowDrop=!0}}),{dragState:r}}const nt=W({name:"ElTreeNode",components:{ElCollapseTransition:Ze,ElCheckbox:Ye,NodeContent:et,ElIcon:Be,Loading:Oe},props:{node:{type:L,default:()=>({})},props:{type:Object,default:()=>({})},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup(n,e){const o=F("tree"),{broadcastExpanded:d}=Ce(n),t=R("RootTree"),s=K(!1),r=K(!1),i=K(null),f=K(null),N=K(null),h=R(ke),c=ge();U("NodeInstance",c),t||Ie("Tree","Can not find node's tree."),n.node.expanded&&(s.value=!0,r.value=!0);const a=t.props.props.children||"children";w(()=>{const u=n.node.data[a];return u&&[...u]},()=>{n.node.updateChildren()}),w(()=>n.node.indeterminate,u=>{k(n.node.checked,u)}),w(()=>n.node.checked,u=>{k(u,n.node.indeterminate)}),w(()=>n.node.expanded,u=>{ue(()=>s.value=u),u&&(r.value=!0)});const p=u=>ce(t.props.nodeKey,u.data),y=u=>{const C=n.props.class;if(!C)return{};let m;if(He(C)){const{data:ee}=u;m=C(ee,u)}else m=C;return Pe(m)?{[m]:!0}:m},k=(u,C)=>{(i.value!==u||f.value!==C)&&t.ctx.emit("check-change",n.node.data,u,C),i.value=u,f.value=C},v=u=>{re(t.store,t.ctx.emit,()=>t.store.value.setCurrentNode(n.node)),t.currentNode.value=n.node,t.props.expandOnClickNode&&T(),t.props.checkOnClickNode&&!n.node.disabled&&S(null,{target:{checked:!n.node.checked}}),t.ctx.emit("node-click",n.node.data,n.node,c,u)},b=u=>{t.instance.vnode.props.onNodeContextmenu&&(u.stopPropagation(),u.preventDefault()),t.ctx.emit("node-contextmenu",u,n.node.data,n.node,c)},T=()=>{n.node.isLeaf||(s.value?(t.ctx.emit("node-collapse",n.node.data,n.node,c),n.node.collapse()):(n.node.expand(),e.emit("node-expand",n.node.data,n.node,c)))},S=(u,C)=>{n.node.setChecked(C.target.checked,!t.props.checkStrictly),ue(()=>{const m=t.store.value;t.ctx.emit("check",n.node.data,{checkedNodes:m.getCheckedNodes(),checkedKeys:m.getCheckedKeys(),halfCheckedNodes:m.getHalfCheckedNodes(),halfCheckedKeys:m.getHalfCheckedKeys()})})};return{ns:o,node$:N,tree:t,expanded:s,childNodeRendered:r,oldChecked:i,oldIndeterminate:f,getNodeKey:p,getNodeClass:y,handleSelectChange:k,handleClick:v,handleContextMenu:b,handleExpandIconClick:T,handleCheckChange:S,handleChildNodeExpand:(u,C,m)=>{d(C),t.ctx.emit("node-expand",u,C,m)},handleDragStart:u=>{t.props.draggable&&h.treeNodeDragStart({event:u,treeNode:n})},handleDragOver:u=>{u.preventDefault(),t.props.draggable&&h.treeNodeDragOver({event:u,treeNode:{$el:N.value,node:n.node}})},handleDrop:u=>{u.preventDefault()},handleDragEnd:u=>{t.props.draggable&&h.treeNodeDragEnd(u)},CaretRight:Le}}}),ot=["aria-expanded","aria-disabled","aria-checked","draggable","data-key"],dt=["aria-expanded"];function st(n,e,o,d,t,s){const r=O("el-icon"),i=O("el-checkbox"),f=O("loading"),N=O("node-content"),h=O("el-tree-node"),c=O("el-collapse-transition");return de((D(),P("div",{ref:"node$",class:x([n.ns.b("node"),n.ns.is("expanded",n.expanded),n.ns.is("current",n.node.isCurrent),n.ns.is("hidden",!n.node.visible),n.ns.is("focusable",!n.node.disabled),n.ns.is("checked",!n.node.disabled&&n.node.checked),n.getNodeClass(n.node)]),role:"treeitem",tabindex:"-1","aria-expanded":n.expanded,"aria-disabled":n.node.disabled,"aria-checked":n.node.checked,draggable:n.tree.props.draggable,"data-key":n.getNodeKey(n.node),onClick:e[1]||(e[1]=A((...a)=>n.handleClick&&n.handleClick(...a),["stop"])),onContextmenu:e[2]||(e[2]=(...a)=>n.handleContextMenu&&n.handleContextMenu(...a)),onDragstart:e[3]||(e[3]=A((...a)=>n.handleDragStart&&n.handleDragStart(...a),["stop"])),onDragover:e[4]||(e[4]=A((...a)=>n.handleDragOver&&n.handleDragOver(...a),["stop"])),onDragend:e[5]||(e[5]=A((...a)=>n.handleDragEnd&&n.handleDragEnd(...a),["stop"])),onDrop:e[6]||(e[6]=A((...a)=>n.handleDrop&&n.handleDrop(...a),["stop"]))},[ae("div",{class:x(n.ns.be("node","content")),style:Me({paddingLeft:(n.node.level-1)*n.tree.props.indent+"px"})},[n.tree.props.icon||n.CaretRight?(D(),I(r,{key:0,class:x([n.ns.be("node","expand-icon"),n.ns.is("leaf",n.node.isLeaf),{expanded:!n.node.isLeaf&&n.expanded}]),onClick:A(n.handleExpandIconClick,["stop"])},{default:Q(()=>[(D(),I($e(n.tree.props.icon||n.CaretRight)))]),_:1},8,["class","onClick"])):j("v-if",!0),n.showCheckbox?(D(),I(i,{key:1,"model-value":n.node.checked,indeterminate:n.node.indeterminate,disabled:!!n.node.disabled,onClick:e[0]||(e[0]=A(()=>{},["stop"])),onChange:n.handleCheckChange},null,8,["model-value","indeterminate","disabled","onChange"])):j("v-if",!0),n.node.loading?(D(),I(r,{key:2,class:x([n.ns.be("node","loading-icon"),n.ns.is("loading")])},{default:Q(()=>[ne(f)]),_:1},8,["class"])):j("v-if",!0),ne(N,{node:n.node,"render-content":n.renderContent},null,8,["node","render-content"])],6),ne(c,null,{default:Q(()=>[!n.renderAfterExpand||n.childNodeRendered?de((D(),P("div",{key:0,class:x(n.ns.be("node","children")),role:"group","aria-expanded":n.expanded},[(D(!0),P(ye,null,Ne(n.node.childNodes,a=>(D(),I(h,{key:n.getNodeKey(a),"render-content":n.renderContent,"render-after-expand":n.renderAfterExpand,"show-checkbox":n.showCheckbox,node:a,accordion:n.accordion,props:n.props,onNodeExpand:n.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"]))),128))],10,dt)),[[se,n.expanded]]):j("v-if",!0)]),_:1})],42,ot)),[[se,n.node.visible]])}var at=_(nt,[["render",st],["__file","tree-node.vue"]]);function rt({el$:n},e){const o=F("tree"),d=fe([]),t=fe([]);ze(()=>{r()}),Fe(()=>{d.value=Array.from(n.value.querySelectorAll("[role=treeitem]")),t.value=Array.from(n.value.querySelectorAll("input[type=checkbox]"))}),w(t,i=>{i.forEach(f=>{f.setAttribute("tabindex","-1")})}),qe(n,"keydown",i=>{const f=i.target;if(!f.className.includes(o.b("node")))return;const N=i.code;d.value=Array.from(n.value.querySelectorAll(`.${o.is("focusable")}[role=treeitem]`));const h=d.value.indexOf(f);let c;if([B.up,B.down].includes(N)){if(i.preventDefault(),N===B.up){c=h===-1?0:h!==0?h-1:d.value.length-1;const p=c;for(;!e.value.getNode(d.value[c].dataset.key).canFocus;){if(c--,c===p){c=-1;break}c<0&&(c=d.value.length-1)}}else{c=h===-1?0:h<d.value.length-1?h+1:0;const p=c;for(;!e.value.getNode(d.value[c].dataset.key).canFocus;){if(c++,c===p){c=-1;break}c>=d.value.length&&(c=0)}}c!==-1&&d.value[c].focus()}[B.left,B.right].includes(N)&&(i.preventDefault(),f.click());const a=f.querySelector('[type="checkbox"]');[B.enter,B.space].includes(N)&&a&&(i.preventDefault(),a.click())});const r=()=>{var i;d.value=Array.from(n.value.querySelectorAll(`.${o.is("focusable")}[role=treeitem]`)),t.value=Array.from(n.value.querySelectorAll("input[type=checkbox]"));const f=n.value.querySelectorAll(`.${o.is("checked")}[role=treeitem]`);if(f.length){f[0].setAttribute("tabindex","0");return}(i=d.value[0])==null||i.setAttribute("tabindex","0")}}const it=W({name:"ElTree",components:{ElTreeNode:at},props:{data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:{type:je}},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup(n,e){const{t:o}=Xe(),d=F("tree"),t=K(new Ve({key:n.nodeKey,data:n.data,lazy:n.lazy,props:n.props,load:n.load,currentNodeKey:n.currentNodeKey,checkStrictly:n.checkStrictly,checkDescendants:n.checkDescendants,defaultCheckedKeys:n.defaultCheckedKeys,defaultExpandedKeys:n.defaultExpandedKeys,autoExpandParent:n.autoExpandParent,defaultExpandAll:n.defaultExpandAll,filterNodeMethod:n.filterNodeMethod}));t.value.initialize();const s=K(t.value.root),r=K(null),i=K(null),f=K(null),{broadcastExpanded:N}=Ce(n),{dragState:h}=tt({props:n,ctx:e,el$:i,dropIndicator$:f,store:t});rt({el$:i},t);const c=Re(()=>{const{childNodes:l}=s.value;return!l||l.length===0||l.every(({visible:g})=>!g)});w(()=>n.currentNodeKey,l=>{t.value.setCurrentNodeKey(l)}),w(()=>n.defaultCheckedKeys,l=>{t.value.setDefaultCheckedKey(l)}),w(()=>n.defaultExpandedKeys,l=>{t.value.setDefaultExpandedKeys(l)}),w(()=>n.data,l=>{t.value.setData(l)},{deep:!0}),w(()=>n.checkStrictly,l=>{t.value.checkStrictly=l});const a=l=>{if(!n.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");t.value.filter(l)},p=l=>ce(n.nodeKey,l.data),y=l=>{if(!n.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const g=t.value.getNode(l);if(!g)return[];const H=[g.data];let q=g.parent;for(;q&&q!==s.value;)H.push(q.data),q=q.parent;return H.reverse()},k=(l,g)=>t.value.getCheckedNodes(l,g),v=l=>t.value.getCheckedKeys(l),b=()=>{const l=t.value.getCurrentNode();return l?l.data:null},T=()=>{if(!n.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const l=b();return l?l[n.nodeKey]:null},S=(l,g)=>{if(!n.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");t.value.setCheckedNodes(l,g)},$=(l,g)=>{if(!n.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");t.value.setCheckedKeys(l,g)},E=(l,g,H)=>{t.value.setChecked(l,g,H)},Y=()=>t.value.getHalfCheckedNodes(),X=()=>t.value.getHalfCheckedKeys(),M=(l,g=!0)=>{if(!n.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");re(t,e.emit,()=>t.value.setUserCurrentNode(l,g))},u=(l,g=!0)=>{if(!n.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");re(t,e.emit,()=>t.value.setCurrentNodeKey(l,g))},C=l=>t.value.getNode(l),m=l=>{t.value.remove(l)},ee=(l,g)=>{t.value.append(l,g)},ve=(l,g)=>{t.value.insertBefore(l,g)},me=(l,g)=>{t.value.insertAfter(l,g)},be=(l,g,H)=>{N(g),e.emit("node-expand",l,g,H)},Ee=(l,g)=>{if(!n.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");t.value.updateChildren(l,g)};return U("RootTree",{ctx:e,props:n,store:t,root:s,currentNode:r,instance:ge()}),U(Ue,void 0),{ns:d,store:t,root:s,currentNode:r,dragState:h,el$:i,dropIndicator$:f,isEmpty:c,filter:a,getNodeKey:p,getNodePath:y,getCheckedNodes:k,getCheckedKeys:v,getCurrentNode:b,getCurrentKey:T,setCheckedNodes:S,setCheckedKeys:$,setChecked:E,getHalfCheckedNodes:Y,getHalfCheckedKeys:X,setCurrentNode:M,setCurrentKey:u,t:o,getNode:C,remove:m,append:ee,insertBefore:ve,insertAfter:me,handleNodeExpand:be,updateKeyChildren:Ee}}});function lt(n,e,o,d,t,s){const r=O("el-tree-node");return D(),P("div",{ref:"el$",class:x([n.ns.b(),n.ns.is("dragging",!!n.dragState.draggingNode),n.ns.is("drop-not-allow",!n.dragState.allowDrop),n.ns.is("drop-inner",n.dragState.dropType==="inner"),{[n.ns.m("highlight-current")]:n.highlightCurrent}]),role:"tree"},[(D(!0),P(ye,null,Ne(n.root.childNodes,i=>(D(),I(r,{key:n.getNodeKey(i),node:i,props:n.props,accordion:n.accordion,"render-after-expand":n.renderAfterExpand,"show-checkbox":n.showCheckbox,"render-content":n.renderContent,onNodeExpand:n.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"]))),128)),n.isEmpty?(D(),P("div",{key:0,class:x(n.ns.e("empty-block"))},[le(n.$slots,"empty",{},()=>{var i;return[ae("span",{class:x(n.ns.e("empty-text"))},We((i=n.emptyText)!=null?i:n.t("el.tree.emptyText")),3)]})],2)):j("v-if",!0),de(ae("div",{ref:"dropIndicator$",class:x(n.ns.e("drop-indicator"))},null,2),[[se,n.dragState.showDropIndicator]])],2)}var V=_(it,[["render",lt],["__file","tree.vue"]]);V.install=n=>{n.component(V.name,V)};const ct=V,gt=ct;export{gt as E,ct as _};
