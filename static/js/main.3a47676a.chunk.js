(this.webpackJsonpapiarytoopenapi=this.webpackJsonpapiarytoopenapi||[]).push([[0],{1092:function(e,t,i){"use strict";i.r(t);var n=i(0),r=i.n(n),a=i(509),s=i.n(a),o=(i(565),i(546)),d=i(1),m=(i(566),i(4)),p=i(510),l=i.n(p),c=i.p+"static/media/zennya.be197840.svg",u=i(2),b=function(e){var t,i=e.spec,r=Object(n.useState)(null),a=Object(m.a)(r,2),s=a[0],o=a[1],p=Object(n.useState)(null),b=Object(m.a)(p,2),g=b[0],h=b[1],y=Object(n.useState)(null),_=Object(m.a)(y,2),f=_[0],x=_[1],v=Object(n.useState)(null),j=Object(m.a)(v,2),k=j[0],A=j[1],T=Object(n.useState)(null),O=Object(m.a)(T,2),q=O[0],C=O[1];return Object(n.useEffect)((function(){if(i){l.a.dereference(i,{},(function(e,t){var i,n,r;e?console.error(e):(o(null===t||void 0===t||null===(i=t.info)||void 0===i?void 0:i.description),h(null===t||void 0===t||null===(n=t.info)||void 0===n?void 0:n.version),A(null===t||void 0===t?void 0:t.openapi),x(null===t||void 0===t?void 0:t.servers),C(null===t||void 0===t||null===(r=t.info)||void 0===r?void 0:r.title))}))}}),[i]),Object(u.jsxs)(d.i,{h:"3xl",shrink:0,px:5,alignItems:"center",bg:"canvas-dark",children:[Object(u.jsxs)(d.j,{w:"1/3",alignItems:"center",spacing:4,children:[Object(u.jsx)(d.m,{className:"logo",src:c}),Object(u.jsxs)(d.N,{children:[Object(u.jsx)(d.K,{fontSize:"lg",fontWeight:"semibold",lineHeight:"none",children:q}),Object(u.jsxs)(d.K,{fontSize:"sm",fontWeight:"normal",lineHeight:"none",children:["OpenAPI ",k]}),Object(u.jsxs)(d.K,{fontSize:"sm",fontWeight:"normal",lineHeight:"none",children:["Documentation ",g]})]})]}),Object(u.jsx)(d.i,{w:"1/3",justifyContent:"center",children:Object(u.jsx)(d.K,{fontSize:"base",fontWeight:"bold",lineHeight:"relaxed",children:s})}),Object(u.jsx)(d.j,{w:"1/3",flex:1,justifyContent:"end",children:Object(u.jsx)(d.K,{fontSize:"base",fontWeight:"normal",lineHeight:"none",children:null===f||void 0===f||null===(t=f.map((function(e){return e.url})))||void 0===t?void 0:t.join(", ")})})]})},g=i(3),h=i(326),y=function(e){var t=e.header,i=e.children;return Object(u.jsxs)(h.StickyContainer,{children:[Object(u.jsx)(h.Sticky,{children:function(e){var i=e.style;return Object(u.jsx)("div",{style:Object(g.a)(Object(g.a)({},i),{},{zIndex:1}),children:t})}}),i]})},_=i(327);var f=function(){var e=Object(n.useCallback)((function(){var e=document.createElement("link");e.rel="stylesheet",e.href="".concat("/apiarytoopenapi","/stoplight.css"),e.type="text/css",document.head.appendChild(e)}),[]);return Object(n.useLayoutEffect)((function(){Object(d.P)({mode:"dark"});var t=document.querySelector("#mosaic-provider-react-aria-0-2 > div > div > div > div.sl-flex > div.sl-flex.sl-overflow-y-auto.sl-flex-col.sl-sticky.sl-inset-y-0.sl-pt-8.sl-bg-canvas-100.sl-border-r > a");null===t||void 0===t||t.remove(),e()}),[e]),Object(u.jsx)("div",{className:"rootcontainer",children:Object(u.jsx)(y,{header:Object(u.jsx)(b,{spec:_}),children:Object(u.jsx)(o.a,{apiDescriptionDocument:_,router:"hash"})})})},x=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,1113)).then((function(t){var i=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;i(e),n(e),r(e),a(e),s(e)}))};s.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(f,{})})),x()},327:function(e){e.exports=JSON.parse('{"swagger":"2.0","info":{"title":"WhiteLabel Admin","version":"","description":"WhiteLabel Partner Admin Web App APIs"},"host":"dev.api.zennya.com","basePath":"/","schemes":["https"],"paths":{"/api/1/admins/login":{"post":{"responses":{"200":{"description":"OK","headers":{},"examples":{}}},"summary":"Login","operationId":"Login","description":"","tags":[],"parameters":[{"name":"body","in":"body","schema":{"type":"object","properties":{"email":{"type":"string"},"password":{"type":"string"}},"example":{"email":"email@zennya.com","password":"pass"}}}]}},"/api/1/maxicare/member_info?card_number={card_number}":{"get":{"responses":{"200":{"description":"OK","headers":{},"examples":{}}},"summary":"Get Member Info","operationId":"Get Member Info","description":"","tags":[],"parameters":[{"name":"card_number","in":"path","description":"Maxicare member card number","required":true,"type":"string"},{"name":"X-Auth-Token","in":"header","description":"e.g. AnAuthToken","required":false,"x-example":"AnAuthToken","type":"string"}]}},"/api/1/whitelabel/customers":{"post":{"responses":{"200":{"description":"OK","headers":{},"examples":{"application/json":{"id":3,"first_name":"fname3","middle_name":"mname3","last_name":"lname3","email":"email3","mobile_number":"+639000000003","gender":"M","birth_date":"1980-02-02T00:00:00Z","address":"address3","latitude":8.474664000000104,"longitude":124.71138911904904,"card_number":"cn-000000-000003","client":{"id":1429},"verified_email":{"email":"theEmail","verified":true,"date_verified":"2022-05-01T00:00:00Z"},"verified_mobile_number":{"mobile_number":"+639000000000","verified":true,"date_verified":"2022-05-01T00:00:00Z"}}},"schema":{"type":"object","properties":{"id":{"type":"number"},"first_name":{"type":"string"},"middle_name":{"type":"string"},"last_name":{"type":"string"},"email":{"type":"string"},"mobile_number":{"type":"string"},"gender":{"type":"string"},"birth_date":{"type":"string"},"address":{"type":"string"},"latitude":{"type":"number"},"longitude":{"type":"number"},"card_number":{"type":"string"},"client":{"type":"object","properties":{"id":{"type":"number"}}},"verified_email":{"type":"object","properties":{"email":{"type":"string"},"verified":{"type":"boolean"},"date_verified":{"type":"string"}}},"verified_mobile_number":{"type":"object","properties":{"mobile_number":{"type":"string"},"verified":{"type":"boolean"},"date_verified":{"type":"string"}}}},"example":{"id":3,"first_name":"fname3","middle_name":"mname3","last_name":"lname3","email":"email3","mobile_number":"+639000000003","gender":"M","birth_date":"1980-02-02T00:00:00Z","address":"address3","latitude":8.474664000000104,"longitude":124.71138911904904,"card_number":"cn-000000-000003","client":{"id":1429},"verified_email":{"email":"theEmail","verified":true,"date_verified":"2022-05-01T00:00:00Z"},"verified_mobile_number":{"mobile_number":"+639000000000","verified":true,"date_verified":"2022-05-01T00:00:00Z"}}}}},"summary":"Create Customer","operationId":"Create Customer","description":"","tags":[],"parameters":[{"name":"X-Auth-Token","in":"header","description":"e.g. AnAuthToken","required":false,"x-example":"AnAuthToken","type":"string"},{"name":"body","in":"body","schema":{"type":"object","properties":{"full_name":{"type":"string"},"first_name":{"type":"string"},"middle_name":{"type":"string"},"last_name":{"type":"string"},"email":{"type":"string"},"mobile_number":{"type":"string"},"gender":{"type":"string"},"birth_date":{"type":"string"},"address":{"type":"string"},"latitude":{"type":"number"},"longitude":{"type":"number"},"card_number":{"type":"string"},"verified_email":{"type":"object","properties":{"email":{"type":"string"},"verified":{"type":"boolean"},"date_verified":{"type":"string"}}},"verified_mobile_number":{"type":"object","properties":{"mobile_number":{"type":"string"},"verified":{"type":"boolean"},"date_verified":{"type":"string"}}}},"example":{"full_name":"fname3 lname3","first_name":"fname3","middle_name":"mname3","last_name":"lname3","email":"email3","mobile_number":"+639000000003","gender":"M","birth_date":"1980-2-2","address":"address3","latitude":8.474664000000104,"longitude":124.71138911904904,"card_number":"cn-000000-000003","verified_email":{"email":"theEmail","verified":true,"date_verified":"2022-05-01T00:00:00Z"},"verified_mobile_number":{"mobile_number":"+639000000000","verified":true,"date_verified":"2022-05-01T00:00:00Z"}}}}],"produces":["application/json"]}},"/api/1/whitelabel/customers?page_size={page_size}&page_offset={page_offset}&query={query}":{"get":{"responses":{"200":{"description":"OK","headers":{},"examples":{"application/json":{"count":3,"list":[{"id":3,"first_name":"fname3","middle_name":"mname3","last_name":"lname3","email":"email3","mobile_number":"+639000000003","gender":"M","birth_date":"1980-02-02T00:00:00Z","address":"address3","latitude":8.47,"longitude":124.71,"card_number":"cn-000000-000003","client":{"id":1429}},{"id":2,"first_name":"fname2","middle_name":"mname2","last_name":"lname2","email":"email2","mobile_number":"mobile2","gender":"M","birth_date":"1980-01-01T00:00:00Z","address":"address2","latitude":8.47,"longitude":124.71,"card_number":"cn000002","client":{"id":1428}},{"id":1,"first_name":"fname1","middle_name":"mname1","last_name":"lname1","email":"email1","mobile_number":"mobile1","gender":"M","birth_date":"0006-06-03T00:00:00Z","address":"address1","latitude":8.47,"longitude":124.71,"card_number":null,"client":null}]}},"schema":{"type":"object","properties":{"count":{"type":"number"},"list":{"type":"array","items":{"type":"object","properties":{"id":{"type":"number"},"first_name":{"type":"string"},"middle_name":{"type":"string"},"last_name":{"type":"string"},"email":{"type":"string"},"mobile_number":{"type":"string"},"gender":{"type":"string"},"birth_date":{"type":"string"},"address":{"type":"string"},"latitude":{"type":"number"},"longitude":{"type":"number"},"card_number":{"type":["string","null"]},"client":{"type":["object","null"],"properties":{"id":{"type":"number"}}}},"required":["id","first_name","middle_name","last_name","email","mobile_number","gender","birth_date","address","latitude","longitude","card_number","client"]}}},"example":{"count":3,"list":[{"id":3,"first_name":"fname3","middle_name":"mname3","last_name":"lname3","email":"email3","mobile_number":"+639000000003","gender":"M","birth_date":"1980-02-02T00:00:00Z","address":"address3","latitude":8.47,"longitude":124.71,"card_number":"cn-000000-000003","client":{"id":1429}},{"id":2,"first_name":"fname2","middle_name":"mname2","last_name":"lname2","email":"email2","mobile_number":"mobile2","gender":"M","birth_date":"1980-01-01T00:00:00Z","address":"address2","latitude":8.47,"longitude":124.71,"card_number":"cn000002","client":{"id":1428}},{"id":1,"first_name":"fname1","middle_name":"mname1","last_name":"lname1","email":"email1","mobile_number":"mobile1","gender":"M","birth_date":"0006-06-03T00:00:00Z","address":"address1","latitude":8.47,"longitude":124.71,"card_number":null,"client":null}]}}}},"summary":"List Customers","operationId":"List Customers","description":"","tags":[],"parameters":[{"name":"page_size","in":"path","description":"","required":false,"type":"string"},{"name":"page_offset","in":"path","description":"","required":false,"type":"string"},{"name":"query","in":"path","description":"Either first name, last name or card number","required":false,"type":"string"},{"name":"X-Auth-Token","in":"header","description":"e.g. AnAuthToken","required":false,"x-example":"AnAuthToken","type":"string"}],"produces":["application/json"]}},"/api/1/clients/{client_id}/locations":{"get":{"responses":{"200":{"description":"OK","headers":{},"examples":{}}},"summary":"List Client Locations","operationId":"List Client Locations","description":"","tags":[],"parameters":[{"name":"client_id","in":"path","description":"From the client.id property of the customer object","required":true,"type":"string"},{"name":"X-Auth-Token","in":"header","description":"e.g. AnAuthToken","required":false,"x-example":"AnAuthToken","type":"string"}]}},"/api/1/clients/{client_id}/bookings/calculate":{"post":{"responses":{"200":{"description":"OK","headers":{},"examples":{}}},"summary":"Calculate Booking Amounts","operationId":"Calculate Booking Amounts","description":"","tags":[],"parameters":[{"name":"client_id","in":"path","description":"From the client.id property of the customer object","required":true,"type":"string"},{"name":"X-Auth-Token","in":"header","description":"e.g. AnAuthToken","required":false,"x-example":"AnAuthToken","type":"string"}]}},"/api/1/clients/{client_id}/bookings/scheduled/verify":{"post":{"responses":{"200":{"description":"OK","headers":{},"examples":{}}},"summary":"Verify Booking Schedules","operationId":"Verify Booking Schedules","description":"","tags":[],"parameters":[{"name":"client_id","in":"path","description":"From the client.id property of the customer object","required":true,"type":"string"},{"name":"X-Auth-Token","in":"header","description":"e.g. AnAuthToken","required":false,"x-example":"AnAuthToken","type":"string"}]}},"/api/1/clients/{client_id}/bookings/createSingle":{"post":{"responses":{"200":{"description":"OK","headers":{},"examples":{}}},"summary":"Create WhiteLabel Booking","operationId":"Create WhiteLabel Booking","description":"","tags":[],"parameters":[{"name":"client_id","in":"path","description":"From the client.id property of the customer object","required":true,"type":"string"},{"name":"X-Auth-Token","in":"header","description":"e.g. AnAuthToken","required":false,"x-example":"AnAuthToken","type":"string"},{"name":"body","in":"body","schema":{"type":"object","properties":{"date_scheduled":{"type":"string"},"media_files":{"type":"array","items":{}},"service_addon_order":{"type":"array","items":{"type":"object","properties":{"type":{"type":"string"},"service_addon_id":{"type":"number"},"priority":{"type":"number"}}}},"type":{"type":"number"},"extended_packages":{"type":"array","items":{"type":"number"}},"extended_package_items":{"type":"array","items":{"type":"number"}},"white_label_customer":{"type":"number"},"wlp_id":{"type":"number"},"city":{"type":"number"}},"example":{"date_scheduled":"2023-01-20T00:00:00Z","media_files":[],"service_addon_order":[{"type":"service","service_addon_id":30,"priority":1}],"type":15,"extended_packages":[23],"extended_package_items":[2,4,27,8,101,3,1,26,29,5,185,15,6,7,14,28],"white_label_customer":118,"wlp_id":1,"city":1}}}]}},"/api/1/whitelabel/bookings?page_size={page_size}&page_offset={page_offset}":{"get":{"responses":{"200":{"description":"OK","headers":{},"examples":{}}},"summary":"List Bookings","operationId":"List Bookings","description":"","tags":[],"parameters":[{"name":"page_size","in":"path","description":"","required":false,"type":"string"},{"name":"page_offset","in":"path","description":"","required":false,"type":"string"},{"name":"X-Auth-Token","in":"header","description":"e.g. AnAuthToken","required":false,"x-example":"AnAuthToken","type":"string"}]}},"/api/1/whitelabel/bookings/media/upload":{"post":{"responses":{"200":{"description":"OK","headers":{},"examples":{}}},"summary":"Upload Booking Document","operationId":"Upload Booking Document","description":"","tags":[],"parameters":[{"name":"X-Auth-Token","in":"header","description":"e.g. AnAuthToken","required":false,"x-example":"AnAuthToken","type":"string"}]}},"/api/1/whitelabel/bookings/media?request_id={request_id}":{"get":{"responses":{"200":{"description":"OK","headers":{},"examples":{}}},"summary":"List Booking Documents","operationId":"List Booking Documents","description":"","tags":[],"parameters":[{"name":"request_id","in":"path","description":"Service Request ID","required":true,"type":"string"},{"name":"X-Auth-Token","in":"header","description":"e.g. AnAuthToken","required":false,"x-example":"AnAuthToken","type":"string"}]}},"/api/1/whitelabel/bookings/media/{media_id}/download":{"get":{"responses":{"200":{"description":"OK","headers":{},"examples":{}}},"summary":"Download Booking Document","operationId":"Download Booking Document","description":"","tags":[],"parameters":[{"name":"media_id","in":"path","description":"Media ID","required":true,"type":"string"},{"name":"X-Auth-Token","in":"header","description":"e.g. AnAuthToken","required":false,"x-example":"AnAuthToken","type":"string"}]}},"/api/1/whitelabel/bookings/notifications/confirmation":{"post":{"responses":{"204":{"description":"No Content","headers":{},"examples":{}}},"summary":"Send Booking Confirmation Notification","operationId":"Send Booking Confirmation Notification","description":"","tags":[],"parameters":[{"name":"X-Auth-Token","in":"header","description":"e.g. AnAuthToken","required":false,"x-example":"AnAuthToken","type":"string"},{"name":"body","in":"body","schema":{"type":"object","properties":{"request_id":{"type":"string"}},"example":{"request_id":"624eec596c805b4d63583438"}}}]}},"/whitelabel/services?latitude={latitude}&longitude={longitude}":{"get":{"responses":{"200":{"description":"OK","headers":{},"examples":{}}},"summary":"List Services","operationId":"List Services","description":"","tags":[],"parameters":[{"name":"latitude","in":"path","description":"","required":true,"type":"string"},{"name":"longitude","in":"path","description":"","required":true,"type":"string"},{"name":"X-Auth-Token","in":"header","description":"e.g. AnAuthToken","required":false,"x-example":"AnAuthToken","type":"string"}]}},"/api/1/cities":{"get":{"responses":{"200":{"description":"OK","headers":{},"examples":{}}},"summary":"List Cities","operationId":"List Cities","description":"","tags":[],"parameters":[{"name":"X-Auth-Token","in":"header","description":"e.g. AnAuthToken","required":false,"x-example":"AnAuthToken","type":"string"}]}}},"definitions":{"Admin Login":{},"Maxicare Member Info":{},"WhiteLabel Customers":{},"WhiteLabel Bookings":{},"WhiteLabel Services":{},"Cities":{}},"securityDefinitions":{},"tags":[]}')},565:function(e,t,i){},566:function(e,t,i){},581:function(e,t){},686:function(e,t){},690:function(e,t){},692:function(e,t){},884:function(e,t){}},[[1092,1,2]]]);
//# sourceMappingURL=main.3a47676a.chunk.js.map