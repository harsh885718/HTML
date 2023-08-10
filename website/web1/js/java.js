num = document.querySelector('#num');
c = setInterval("count()",30);
client = 0;
function count()
{
    num.innerHTML = ++client;

    if(client==26)
    {
        clearInterval(c);
    }
}
count();