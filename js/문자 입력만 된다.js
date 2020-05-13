var write = prompt("아이디를 입력하세요");
function WinClose()
{

    window.open('https://jakonthebridge.github.io/','_self').close();     
 
}
if(write=="jaeone01")
{
    var passwd = prompt("비밀번호를 입력하시요");
    if(passwd == "loadof01@")
    {
        document.write("로그인 성공");
    }
    else
    {
        alert("로그인 실패");
        WinClose();
 
    }
    
}
else
{
    alert("아이디가 틀림");
}

