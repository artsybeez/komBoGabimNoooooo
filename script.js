function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function saveUsername() {
  var user = document.getElementById("typeUser").value;
  if (user !== "") {
    setCookie("username", user, 365);
    window.location.href = "index2.html";
  } else {
    alert("Ju lutem shkruani nje emer para se te vazhdoni.");
  }
}

function checkCookie() {
  var user = getCookie("username");
  if (user !== "") {
    document.getElementById("warmWelcome").innerHTML = "Miresevini, " + user;
  } else {
    document.getElementById("warmWelcome").innerHTML = "Nuk u gjet asnje perdorues.";
  }
}
