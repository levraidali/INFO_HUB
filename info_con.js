function controle() {
    p=document.getElementById("p").value;
    u=document.getElementById("u").value;
    f=document.getElementById("pf").value;
    ch=""
    if (p=="" || p.length<8) {
        ch=ch+"check the password\n"
    }
    if (u=="" || !alpha(u)) {
        ch=ch+"check the user name\n"
    }
    if (f=="") {
        ch=ch+"check the Platform Name\n"
    }
    if (ch!="") {
        alert(ch)
        return false
    }
    return true
}
function alpha(ch) {
    i=0
    while (i<ch.length && ch[i].toUpperCase()<="Z" && ch[i].toUpperCase()>="A") {
        i=i+1
    }
    return i== ch.length
}