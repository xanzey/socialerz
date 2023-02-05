let sms = document.getElementById('massege');
let smsSpace = document.getElementById('sms-space');

let sendsms = ()=>{
  
  smsSpace.innerHTML=sms.value;
  sms.value='';
}
