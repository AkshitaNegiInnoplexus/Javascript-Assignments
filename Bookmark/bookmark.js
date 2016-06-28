var dict = {}
var result;

function clear()
{
  document.getElementById("disp").innerHTML = "";
}

function disp(tab)
{
  result = "";
  //document.getElementById("disp").innerHTML = result;
  for(var j=0; j < dict[tab.id].length; j++)
      result += dict[tab.id][j] + "<br />";
  document.getElementById("disp").innerHTML = result;
}

function counter(button,val){

   if(button.value == "Bookmark")
   {
        button.value = "Bookmarked";
        var sn = (document.getElementById("demo").innerHTML).split(' ');
        document.getElementById("demo").innerHTML = 'Bookmarks ' + (Number(sn[1])+1);
        if(!dict[val])
          dict[val] = [];
        dict[val].push(button.id);

    }
  else
  {
      button.value = "Bookmark";
      var sn = (document.getElementById("demo").innerHTML).split(' ');
      document.getElementById("demo").innerHTML = 'Bookmarks ' + (Number(sn[1])-1);
      var index = dict[val].indexOf(button.id);
      //alert(index);
      if (index > -1) {
        dict[val].splice(index, 1);
      }
  }

}


function openCity(evt, cityName) {
    clear();
    //check();
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}
