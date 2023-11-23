/*!
 *  build: vue-admin-better 
 *  vue-admin-better.com 
 *  https://gitee.com/chu1204505056/vue-admin-better 
 *  time: 2023-11-23 02:51:18
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2159cd2e"],{"2eaf":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",[e("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"简体中文设置",name:"first"}},[e("el-button",{attrs:{type:"text"},on:{click:t.addBtn}},[e("el-button",{attrs:{type:"primary",icon:"el-icon-edit"}},[t._v("添加")])],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listloading,expression:"listloading"}],staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData,height:t.height}},[e("el-table-column",{attrs:{prop:"id",label:"id",align:"center"}}),e("el-table-column",{attrs:{prop:"name",label:"名字",align:"center"}}),e("el-table-column",{attrs:{prop:"text",label:"内容",align:"center"}}),e("el-table-column",{attrs:{prop:"type",label:"type",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-tag",[t._v(" "+t._s(t._f("countryFormat")(a.row.type))+" ")])]}}])}),e("el-table-column",{attrs:{label:"操作",fixed:"right",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){return t.handleEdit(a.$index,a.row)}}},[t._v(" 编辑 ")])]}}])})],1),e("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[15,50,100,200],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),e("el-dialog",{attrs:{title:t.title,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[e("el-form",{attrs:{model:t.form}},[e("el-form-item",{attrs:{label:"名字"}},[e("el-input",{attrs:{disabled:t.disabled,autocomplete:"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("el-form-item",{attrs:{label:"内容"}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.text,callback:function(e){t.$set(t.form,"text",e)},expression:"form.text"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.sendMsg()}}},[t._v(" 确 定 ")])],1)],1)],1),e("el-tab-pane",{attrs:{label:"配置信息",name:"second"}},[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.addBtn2()}}},[e("el-button",{attrs:{type:"primary",icon:"el-icon-edit"}},[t._v("添加")])],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listloading2,expression:"listloading2"}],staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData2,height:t.height}},[e("el-table-column",{attrs:{prop:"key",label:"KEY"}}),e("el-table-column",{attrs:{prop:"value",label:"值"}}),e("el-table-column",{attrs:{prop:"memo",label:"备注"}}),e("el-table-column",{attrs:{prop:"modified_time",label:"修改时间"}}),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){return t.handleEdit2(a.$index,a.row)}}},[t._v(" 编辑 ")])]}}])})],1),e("el-pagination",{attrs:{"current-page":t.currentPage2,"page-sizes":[15,50,100,200],"page-size":t.pageSize2,layout:"total, sizes, prev, pager, next, jumper",total:t.total2},on:{"size-change":t.handleSizeChange2,"current-change":t.handleCurrentChange2}}),e("el-dialog",{attrs:{title:t.title2,visible:t.dialogFormVisible2},on:{"update:visible":function(e){t.dialogFormVisible2=e}}},[e("el-form",{attrs:{model:t.form2}},[e("el-form-item",{attrs:{label:"名字"}},[e("el-input",{attrs:{disabled:t.disabled2,autocomplete:"off"},model:{value:t.form2.key,callback:function(e){t.$set(t.form2,"key",e)},expression:"form2.key"}})],1),e("el-form-item",{attrs:{label:"内容"}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.form2.value,callback:function(e){t.$set(t.form2,"value",e)},expression:"form2.value"}})],1),e("el-form-item",{attrs:{label:"备注"}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.form2.memo,callback:function(e){t.$set(t.form2,"memo",e)},expression:"form2.memo"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogFormVisible2=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.sendMsg2()}}},[t._v(" 确 定 ")])],1)],1)],1)],1)],1)},n=[],l=a("c24f"),o=a("ed08"),r={data(){return{title:"",title2:"",form:{id:"",name:"",text:""},form2:{key:"",value:"",memo:""},tableData:[],tableData2:[],dialogFormVisible:!1,dialogFormVisible2:!1,activeName:"first",currentPage:1,pageSize:15,total:100,currentPage2:1,pageSize2:15,total2:100,listloading:!0,listloading2:!0,disabled:!0,disabled2:!0}},filters:{countryFormat(t){return Object(o["countryList"])(t)}},computed:{height(){return this.$baseTableHeight()}},created(){this.getlist()},mounted(){},methods:{reset(){this.form.name="",this.form.text="",this.form.id="",this.form2.key="",this.form2.value="",this.form2.memo=""},handleSizeChange(t){this.pageSize=t,this.getlist()},handleCurrentChange(t){this.currentPage=t,this.getlist()},handleSizeChange2(t){this.pageSize2=t,this.getlist2()},handleCurrentChange2(t){this.currentPage2=t,this.getlist2()},handleClick(){"first"==this.activeName?this.getlist():this.getlist2()},handleEdit(t,e){this.dialogFormVisible=!0,this.title="修改",this.disabled=(!0)(e),this.form.name=e.name,this.form.text=e.text,this.form.id=e.id},handleEdit2(t,e){this.dialogFormVisible2=!0,this.title2="修改",this.disabled2=(!0)(e),this.form2.key=e.key,this.form2.value=e.value,this.form2.memo=e.memo(this.form2)},sendMsg(){const t={id:this.form.id,text:this.form.text},e={name:this.form.name,text:this.form.text};"修改"==this.title?Object(l["editLanguagelist"])(t).then(t=>{t.data&&1==t.data.status?(this.$baseNotify(t.data.msg,"修改成功"),this.dialogFormVisible=!1,this.getlist()):(this.$baseNotify(t.data.msg,"修改失败","error"),this.dialogFormVisible=!1)}):Object(l["addLanguagelist"])(e).then(t=>{t.data&&1==t.data.status?(this.$baseNotify(t.data.msg,"创建成功"),this.dialogFormVisible=!1,this.getlist()):(this.$baseNotify(t.data.msg,"创建失败","error"),this.dialogFormVisible=!1)})},sendMsg2(){const t={key:this.form2.key,value:this.form2.value,memo:this.form2.memo}(t);"修改"==this.title2?Object(l["editConifiglist"])(t).then(t=>{t.data&&1==t.data.status?(this.$baseNotify(t.data.msg,"修改成功"),this.dialogFormVisible2=!1,this.getlist2()):(this.$baseNotify(t.data.msg,"修改失败","error"),this.dialogFormVisible2=!1)}):Object(l["addConifiglist"])(t).then(t=>{t.data&&1==t.data.status?(this.$baseNotify(t.data.msg,"创建成功"),this.dialogFormVisible2=!1,this.getlist2()):(this.$baseNotify(t.data.msg,"创建失败","error"),this.dialogFormVisible2=!1)})},getlist(){this.listloading=!0,Object(l["getLanguagelist"])().then(t=>{t.data;const e=t.data.data;this.getTabelData(1,e)})},getlist2(){this.listloading2=!0,Object(l["getConifiglist"])().then(t=>{t.data;const e=t.data.data;this.getTabelData(2,e)})},getTabelData(t,e){1==t?(this.tableData=e.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize),this.total=e.length,this.listloading=!1):(this.tableData2=e.slice((this.currentPage2-1)*this.pageSize2,this.currentPage2*this.pageSize2),this.total2=e.length,this.listloading2=!1)},addBtn(){this.title="创建",this.reset(),this.dialogFormVisible=!0,this.disabled=!1},addBtn2(){this.title2="创建",this.reset(),this.disabled2=!1,this.dialogFormVisible2=!0}}},s=r,d=(a("e7a7"),a("2877")),u=Object(d["a"])(s,i,n,!1,null,"6873fb30",null);e["default"]=u.exports},e7a7:function(t,e,a){"use strict";a("f764")},ed08:function(t,e,a){"use strict";a.r(e),a.d(e,"parseTime",(function(){return i})),a.d(e,"formatTime",(function(){return n})),a.d(e,"paramObj",(function(){return l})),a.d(e,"translateDataToTree",(function(){return o})),a.d(e,"translateTreeToData",(function(){return r})),a.d(e,"tenBitTimestamp",(function(){return s})),a.d(e,"thirteenBitTimestamp",(function(){return d})),a.d(e,"uuid",(function(){return u})),a.d(e,"random",(function(){return c})),a.d(e,"on",(function(){return m})),a.d(e,"off",(function(){return g})),a.d(e,"countryList",(function(){return h}));a("14d9");function i(t,e){if(0===arguments.length)return null;const a=e||"{y}-{m}-{d} {h}:{i}:{s}";let i;"object"===typeof t?i=t:("string"===typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"===typeof t&&10===t.toString().length&&(t*=1e3),i=new Date(t));const n={y:i.getFullYear(),m:i.getMonth()+1,d:i.getDate(),h:i.getHours(),i:i.getMinutes(),s:i.getSeconds(),a:i.getDay()},l=a.replace(/{(y|m|d|h|i|s|a)+}/g,(t,e)=>{let a=n[e];return"a"===e?["日","一","二","三","四","五","六"][a]:(t.length>0&&a<10&&(a="0"+a),a||0)});return l}function n(t,e){t=10===(""+t).length?1e3*parseInt(t):+t;const a=new Date(t),n=Date.now(),l=(n-a)/1e3;return l<30?"刚刚":l<3600?Math.ceil(l/60)+"分钟前":l<86400?Math.ceil(l/3600)+"小时前":l<172800?"1天前":e?i(t,e):a.getMonth()+1+"月"+a.getDate()+"日"+a.getHours()+"时"+a.getMinutes()+"分"}function l(t){const e=t.split("?")[1];return e?JSON.parse('{"'+decodeURIComponent(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"').replace(/\+/g," ")+'"}'):{}}function o(t){const e=t.filter(t=>"undefined"===t.parentId||null==t.parentId),a=t.filter(t=>"undefined"!==t.parentId&&null!=t.parentId),i=(t,e)=>{t.forEach(t=>{e.forEach((a,n)=>{if(a.parentId===t.id){const l=JSON.parse(JSON.stringify(e));l.splice(n,1),i([a],l),"undefined"!==typeof t.children?t.children.push(a):t.children=[a]}})})};return i(e,a),e}function r(t){const e=[];return t.forEach(t=>{const a=t=>{e.push({id:t.id,name:t.name,parentId:t.parentId});const i=t.children;if(i)for(let e=0;e<i.length;e++)a(i[e])};a(t)}),e}function s(t){const e=new Date(1e3*t),a=e.getFullYear();let i=e.getMonth()+1;i=i<10?""+i:i;let n=e.getDate();n=n<10?""+n:n;let l=e.getHours();l=l<10?"0"+l:l;let o=e.getMinutes(),r=e.getSeconds();return o=o<10?"0"+o:o,r=r<10?"0"+r:r,a+"年"+i+"月"+n+"日 "+l+":"+o+":"+r}function d(t){const e=new Date(t/1),a=e.getFullYear();let i=e.getMonth()+1;i=i<10?""+i:i;let n=e.getDate();n=n<10?""+n:n;let l=e.getHours();l=l<10?"0"+l:l;let o=e.getMinutes(),r=e.getSeconds();return o=o<10?"0"+o:o,r=r<10?"0"+r:r,a+"年"+i+"月"+n+"日 "+l+":"+o+":"+r}function u(t=32){const e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";let a="";for(let i=0;i<t;i++)a+=e.charAt(Math.floor(Math.random()*e.length));return a}function c(t,e){return Math.floor(Math.random()*(t-e)+e)}const m=function(){return function(t,e,a,i=!1){t&&e&&a&&t.addEventListener(e,a,i)}}(),g=function(){return function(t,e,a,i=!1){t&&e&&t.removeEventListener(e,a,i)}}();function h(t){const e={0:"🇨🇳 简体中文",1:"🇺🇸 English",2:"🇫🇷 Français",3:"🇷🇺 русский язык",4:"🇪🇸 Español",5:"🇸🇦 عربي",6:"🇭🇰 繁體中文",7:"🇯🇵 日本",8:"🇮🇳 हिन्दी",9:"🇻🇳 Tiếng Việt",10:"🇵🇹 Português",11:"🇹🇷 Türkçe",12:"🇩🇪 Deutsch",13:"🇲🇾 Bahasa Melayu",14:"🇮🇹 italiano",15:"🇹🇭 ภาษาไทย",16:"🇺🇦 українська",17:"🇮🇩 bahasa Indonesia",18:"🇵🇰 اُردُو",19:"🇧🇩 বাংলা",20:"🇪🇹 አማርኛ",21:"🇩🇰 dansk",22:"🇰🇷 조선말",23:"🇵🇱 język polski"};return e[t]}},f764:function(t,e,a){}}]);