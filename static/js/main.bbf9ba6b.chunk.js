(this["webpackJsonpfriends-list"]=this["webpackJsonpfriends-list"]||[]).push([[0],{86:function(e,n,t){},92:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(11),i=t.n(c),o=(t(86),t(42)),s=t(58),l=t(10),d=t(72),u=t(144),j=t(152),h=t(155),b=t(63),O=t.n(b),f=t(65),g=t.n(f),m=t(67),x=t.n(m),p=t(66),v=t.n(p),I=t(68),C=t.n(I),w=t(69),k=t.n(w),M=t(70),y=t.n(M),F=t(71),S=t.n(F),L={StarBorderIcon:O.a,StarIcon:g.a,FaceIcon:v.a,DeleteIcon:x.a,PersonAddIcon:C.a,SearchIcon:k.a,AddIcon:y.a,CloseIcon:S.a},N=t(138),P=t(139),B=t(140),D=t(142),T=t(141),z=t(158),E=t(143),W=t(5);function A(e){var n=K();return Object(W.jsx)(a.a.Fragment,{children:Object(W.jsxs)(N.a,{className:n.list,children:[e.list.map((function(t){return Object(W.jsxs)(P.a,{className:n.listItem,children:[Object(W.jsx)(B.a,{children:Object(W.jsx)(z.a,{className:n.avatar,children:Object(W.jsx)(L.FaceIcon,{})})}),Object(W.jsx)(T.a,{primary:t.name,secondary:"Is your friend"}),Object(W.jsxs)(D.a,{children:[Object(W.jsx)(E.a,{onClick:function(){return e.toggleFavorite(t.id)},children:t.favorite?Object(W.jsx)(L.StarIcon,{className:n.starIcon}):Object(W.jsx)(L.StarBorderIcon,{className:n.starIcon})}),Object(W.jsx)(E.a,{onClick:function(){return e.delete(t.id,t.name)},children:Object(W.jsx)(L.DeleteIcon,{className:n.deleteIcon})})]})]},t.id)})),0===e.list.length&&"No Friends found..."]})})}var K=Object(u.a)((function(e){return{list:{height:"320px"},listItem:{backgroundColor:"white",marginBottom:"10px",padding:"5px 10px","& .MuiListItemText-primary":{fontWeight:"bold"}},starIcon:{color:"#0066e5"},deleteIcon:{color:"#e23232"},avatar:{background:"#3066b0"}}})),R=t(154),J=t(146);function V(e){var n=G();return Object(W.jsx)("div",{className:n.root,children:Object(W.jsx)(R.a,{name:e.name,variant:"outlined",size:"small",value:e.value,margin:"dense",onChange:function(n){e.onChange(n.target.value)},placeholder:e.placeholder,onKeyPress:e.onKeyPress,helperText:e.errorMsg,error:void 0!==e.errorMsg&&""!==e.errorMsg.trim(),InputProps:{endAdornment:Object(W.jsx)(J.a,{position:"end",children:Object(W.jsx)(E.a,{onClick:e.onEndIconClick,size:"small",children:e.endIcon})})}},e.name)})}var G=Object(u.a)((function(e){return{root:{"& .MuiTextField-root":{margin:0,width:"100%","& .MuiFormHelperText-contained":{margin:"0 5px"}},"& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline ":{border:"1px solid rgba(0, 0, 0, 0.23)"},"&:hover .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline ":{border:"1px solid rgba(0, 0, 0, 0.23)"},"& .MuiFormLabel-root.Mui-error":{color:"rgba(0, 0, 0, 0.54)"}}}})),H=[{id:"1",name:"MS Dhoni",favorite:!1},{id:"2",name:"Virat Kohli",favorite:!1},{id:"3",name:"Rohit Sharma",favorite:!1},{id:"4",name:"Surya Kumar",favorite:!1},{id:"5",name:"Rishabh Pant",favorite:!1},{id:"6",name:"Hardik Pandya",favorite:!1},{id:"7",name:"Jasprit Bumrah",favorite:!1}],U={generateID:function(){return Math.floor(1e4*Math.random())},capitalizeName:function(e){return e.replace(/\b(\w)/g,(function(e){return e.toUpperCase()}))},sortList:function(e){var n=[],t=[];return e.sort((function(e,n){return e.name.localeCompare(n.name)})),e.forEach((function(e){e.favorite?n.push(e):t.push(e)})),[].concat(n,t)},filterList:function(e,n){return e&&""!==e.trim()?n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):n}},Y=t(151),Z=t(157),$=t(150),q=t(148),Q=t(149),X=t(147),_=a.a.forwardRef((function(e,n){return Object(W.jsx)(X.a,Object(l.a)({direction:"up",ref:n},e))}));function ee(e){return Object(W.jsxs)(Z.a,{open:e.open,TransitionComponent:_,keepMounted:!0,onClose:e.toggleDialoge,children:[Object(W.jsx)(q.a,{children:Object(W.jsx)(Q.a,{children:e.dialogeMessage})}),Object(W.jsx)($.a,{children:e.showCancel?Object(W.jsxs)(a.a.Fragment,{children:[Object(W.jsx)(Y.a,{color:"primary",onClick:e.handleOk,children:"Ok"}),Object(W.jsx)(Y.a,{color:"secondary",onClick:e.toggleDialoge,children:"Cancel"})]}):Object(W.jsx)(Y.a,{color:"primary",onClick:e.toggleDialoge,children:"Ok"})})]})}var ne=t(41);function te(e){var n=re();return Object(W.jsxs)("div",{className:n.titleWrapper,children:[Object(W.jsx)(ne.a,{variant:"h6",className:n.title,children:"Friends List"}),Object(W.jsx)("div",{className:n.searchWrapper,children:e.showSearchBox?Object(W.jsx)(V,{name:"addFriend",value:e.searchValue,onChange:e.search,placeholder:"Search",endIcon:Object(W.jsx)(L.CloseIcon,{}),onEndIconClick:e.clearSearch}):Object(W.jsx)(E.a,{size:"small",onClick:e.enableSearch,children:Object(W.jsx)(L.SearchIcon,{className:n.searchButton})})})]})}var re=Object(u.a)((function(e){return{titleWrapper:{display:"flex",marginBottom:"10px",alignItems:"center",justifyContent:"space-between",margin:0,height:"40px"},title:{whiteSpace:"nowrap",paddingRight:"10px"},searchButton:{color:"black"},searchWrapper:{display:"flex",alignItems:"center"}}}));function ae(){var e=ce(),n=a.a.useState({friendsList:[],searchedText:"",showSearchBox:!1,newFriend:"",currentPage:1,error:" ",openDialog:!1,message:"",handleOk:function(){},showCancel:!1}),t=Object(d.a)(n,2),r=t[0],c=t[1];a.a.useEffect((function(){c(Object(l.a)(Object(l.a)({},r),{},{friendsList:U.sortList(H)}))}),[]);var i=function(e){var n=r.friendsList.filter((function(n){return n.id!==e})),t=r.currentPage;r.currentPage>Math.ceil(n.length/4)&&(t=Math.ceil(n.length/4)),c(Object(l.a)(Object(l.a)({},r),{},{currentPage:t,friendsList:n}))},o=function(){var e="";if(""===r.newFriend.trim()?e="Please enter a name.":r.newFriend.length<3&&(e="Name should be of atleast 3 characters"),""===e){var n=Object(s.a)(r.friendsList);n.push({id:U.generateID(),name:U.capitalizeName(r.newFriend),favorite:!1}),c(Object(l.a)(Object(l.a)({},r),{},{newFriend:"",error:" ",friendsList:U.sortList(n),openDialog:!0,message:"Your friend "+U.capitalizeName(r.newFriend)+" added successfully.",showCancel:!1}))}else c(Object(l.a)(Object(l.a)({},r),{},{error:e}))},u=""!==r.searchedText.trim()?U.filterList(r.searchedText,r.friendsList):r.friendsList,b=4*r.currentPage,O=b-4,f=u.slice(O,b),g=Math.ceil(u.length/4);return Object(W.jsxs)("div",{className:e.root,children:[Object(W.jsxs)(j.a,{maxWidth:"md",children:[Object(W.jsx)(te,{showSearchBox:r.showSearchBox,searchValue:r.searchedText,search:function(e){c(Object(l.a)(Object(l.a)({},r),{},{searchedText:e}))},clearSearch:function(){c(Object(l.a)(Object(l.a)({},r),{},{searchedText:"",showSearchBox:!1}))},enableSearch:function(){return c(Object(l.a)(Object(l.a)({},r),{},{showSearchBox:!0}))}}),Object(W.jsx)(V,{name:"addFriend",value:r.newFriend,onChange:function(e){var n=" ";""===e.trim()||/^[a-zA-Z ]*$/.test(e)||(n="Name can consists of alphabets only."),c(Object(l.a)(Object(l.a)({},r),{},{error:n,newFriend:e}))},onKeyPress:function(e){"Enter"===e.key&&""===r.error.trim()&&o()},placeholder:"Enter your friend's name",endIcon:Object(W.jsx)(L.AddIcon,{}),onEndIconClick:o,errorMsg:r.error}),Object(W.jsx)(A,{list:f,delete:function(e,n){c(Object(l.a)(Object(l.a)({},r),{},{openDialog:!0,message:"Are you sure you want to delete your friend "+U.capitalizeName(n)+".",showCancel:!0,handleOk:function(){i(e)}}))},toggleFavorite:function(e){var n=Object(s.a)(r.friendsList),t=r.friendsList.findIndex((function(n){return n.id===e}));t>-1&&(n[t]=Object(l.a)(Object(l.a)({},n[t]),{},{favorite:!n[t].favorite})),c(Object(l.a)(Object(l.a)({},r),{},{friendsList:U.sortList(n)}))}}),g>1&&Object(W.jsx)(h.a,{className:e.pagination,count:g,color:"primary",onChange:function(e,n){c(Object(l.a)(Object(l.a)({},r),{},{currentPage:n}))},page:r.currentPage})]}),Object(W.jsx)(ee,{toggleDialoge:function(){c(Object(l.a)(Object(l.a)({},r),{},{openDialog:!r.openDialog}))},open:r.openDialog,dialogeMessage:r.message,handleOk:r.handleOk,showCancel:r.showCancel})]})}var ce=Object(u.a)((function(e){var n;return{root:(n={flexGrow:1,margin:"20px 0",border:"5px solid black",borderRadius:"20px",boxSizing:"border-box"},Object(o.a)(n,"margin","0 180px"),Object(o.a)(n,"padding","20px 0"),n),addButton:{color:"#1976d2"},pagination:{marginTop:"20px","& .MuiPagination-ul":{justifyContent:"center"}}}})),ie=t(153);var oe=Object(u.a)((function(e){return{root:{background:"white"},logo:{width:"100px"}}})),se=function(){var e=oe();return Object(W.jsx)("div",{className:e.root,children:Object(W.jsx)(j.a,{maxWidth:"xl",children:Object(W.jsx)(ie.a,{disableGutters:!0})})})};var le=function(){return Object(W.jsxs)("div",{className:"appWrapper",children:[Object(W.jsx)(se,{}),Object(W.jsx)(ae,{})]})},de=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,159)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(W.jsx)(a.a.StrictMode,{children:Object(W.jsx)(le,{})}),document.getElementById("root")),de()}},[[92,1,2]]]);
//# sourceMappingURL=main.bbf9ba6b.chunk.js.map