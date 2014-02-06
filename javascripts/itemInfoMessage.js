function popup(mylink, windowname)
{
if (! window.focus)return true;
var href;
if (typeof(mylink) == 'string')
   href=mylink;
else
   href="../views/itemInfoMessage.html";
window.open(href, 'notes', 'width=550,height=700,scrollbars=yes');
return false;
}
