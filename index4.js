send.addEventListener("click",fnc);
function fnc(){
    let val_C = C.value;
    let val_I = I.value;
    let val_G = G.value;
    let val_Xn = Xn.value;
    let val_res = parseInt(val_C) + parseInt(val_I) + parseInt(val_G) + parseInt(val_Xn);
    res.innerHTML = val_res;
}