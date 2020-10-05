(this.webpackJsonpbooksapi=this.webpackJsonpbooksapi||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),l=a.n(o),c=(a(12),a(1)),i=a(2),s=a(4),u=a(3),m=(a(13),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={filterlist:["partial","full","free-ebooks","paid-ebooks","ebooks"],filter:"No Filter"},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"section--row search--filters"},r.a.createElement("label",{htmlFor:"printType"},"Print Type:"),r.a.createElement("select",{name:"printType",defaultValue:"all",id:"printType"},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"books"},"Books"),r.a.createElement("option",{value:"magazines"},"Magazines")),r.a.createElement("label",{htmlFor:"searchFilter"},"Book Type:"),r.a.createElement("select",{name:"searchFilter",defaultValue:"",id:"searchFilter"},r.a.createElement("option",{value:""},"No Filter"),r.a.createElement("option",{value:"partial"},"Partial"),r.a.createElement("option",{value:"full"},"Full"),r.a.createElement("option",{value:"free-ebooks"},"Free eBooks"),r.a.createElement("option",{value:"paid-ebooks"},"Paid eBooks"),r.a.createElement("option",{value:"ebooks"},"eBooks")))}}]),a}(n.Component)),p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleFormSubmit=function(t){t.preventDefault();var a=new FormData(t.target),n={searchterm:a.get("searchterm"),printType:a.get("printType"),searchFilter:a.get("searchFilter")};e.props.fetchBooks(n)},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"section--row search--term"},r.a.createElement("label",{htmlFor:"searchterm"},"Search:"),r.a.createElement("input",{type:"text",name:"searchterm",id:"searchterm",placeholder:"henry",required:!0}),r.a.createElement("button",{type:"submit"},"Search")),r.a.createElement(m,null))}}]),a}(n.Component),h=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),f=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={visible:!1},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.author,o=t.price,l=t.description,c=t.picture,i="FOR_SALE"!==t.saleability?"Not Available":h.format(o),s=this.state.visible?"book--visible":"";return r.a.createElement("li",{className:s,onClick:function(){e.setState({visible:!e.state.visible})}},r.a.createElement("h3",null,a),r.a.createElement("div",{className:"section--row"},r.a.createElement("img",{alt:"",src:c}),r.a.createElement("div",{className:"section--column book--details"},r.a.createElement("p",null,"Author: ",n),r.a.createElement("p",null,"Price: ",i),r.a.createElement("br",null),r.a.createElement("p",null,l))))}}]),a}(n.Component),b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).getBooks=function(){if("object"===typeof e.props.books)return e.props.books.map((function(e,t){var a="FOR_SALE"===e.saleInfo.saleability?e.saleInfo.listPrice.amount:0,n="object"===typeof e.volumeInfo.authors?e.volumeInfo.authors.join(", "):"None Listed";return r.a.createElement(f,{key:t,title:e.volumeInfo.title,author:n,price:a,description:e.volumeInfo.description,picture:e.volumeInfo.imageLinks.thumbnail,saleability:e.saleInfo.saleability})}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("ul",null,this.getBooks())}}]),a}(n.Component),v=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={search:"henry",books:[],url:"https://www.googleapis.com/books/v1/volumes"},e.fetchBooks=function(t){var a=t.searchterm,n=t.printType,r=t.searchFilter,o=""!==r?"filter=".concat(r,"&"):"",l=""!==n?"printType=".concat(n,"&"):"";fetch("".concat(e.state.url,"?q=").concat(a,"&").concat(o).concat(l,"key=AIzaSyCXDiXJ3rTJyW24jRwe-4FoFVVIW1kv8oc")).then((function(e){return e.json()})).then((function(t){return e.handleBooksReturn(t.items)})).catch((function(e){return console.log("Error: ".concat(e.message))}))},e.handleBooksReturn=function(t){e.setState({books:t})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e={searchterm:this.state.search,printType:"all",searchFilter:""};this.fetchBooks(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"Google Book Search")),r.a.createElement(p,{fetchBooks:this.fetchBooks}),r.a.createElement(b,{books:this.state.books}))}}]),a}(n.Component);l.a.render(r.a.createElement(v,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.4778b4aa.chunk.js.map