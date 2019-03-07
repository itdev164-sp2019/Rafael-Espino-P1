var hidden =false;
export default ()=>(
    function myFone(){
        hidden =!hidden
        if (hidden) {
            document.getElementById("vegies").style.visibility="visible";
            document.getElementById("spices").style.visibility="visible";
        } else {
            document.getElementById("vegies").style.visibility="hidden";
            document.getElementById("spices").style.visibility="hidden";
        }
    }
)