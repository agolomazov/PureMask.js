"use strict";var PureMask=function(){return{format:function(e,t){function a(e){var t,a,n,c,s="",u=r.value;for(n=0,c=1;c&&n<e.length;++n)switch(t=u.charAt(n),a=e.charAt(n),e.charAt(n)){case"#":/\d/.test(t)?s+=t:c=0;break;case"A":/[a-z]/i.test(t)?s+=t:c=0;break;case"N":/[a-z0-9]/i.test(t)?s+=t:c=0;break;case"X":s+=t;break;default:s+=a}r.value=s}var r=document.querySelector(e),n=r.dataset.mask;r.maxLength=n.length;r.value.length;t===!0&&(r.placeholder=n),r.addEventListener("keydown",function(e){8===e.keyCode||46===e.keyCode||a(n)})}}}();