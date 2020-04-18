function change_tab(pageName, button) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("page-container");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("page-button");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].id = "";
      if (tablinks[i] === button) {
        tablinks[i].id = "selected"
      }
    }

    document.getElementById(pageName).style.display = "block";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();