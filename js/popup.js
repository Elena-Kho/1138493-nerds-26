var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".modal-writeus");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var username = popup.querySelector("[name=username]");
var usermail = popup.querySelector("[name=usermail]");
var message = popup.querySelector("[name=message]");
var isStorageSupport = true;
var namestorage = "";
var mailstorage = "";

try {
  namestorage = localStorage.getItem("username");
} catch (err) {
    isStorageSupport = false;
  }

try {
  mailstorage = localStorage.getItem("usermail");
} catch (err) {
    isStorageSupport = false;
  }

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (namestorage) {
    username.value = namestorage;
    usermail.focus();
    if (mailstorage) {
      usermail.value = mailstorage;
      message.focus();
    } else {
    usermail.focus();
    }
  } else {
    username.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (username.value && isStorageSupport) {
    evt.preventDefault();
    localStorage.setItem("username", username.value);
    usermail.focus();
  }

  if (usermail.value && isStorageSupport) {
    evt.preventDefault();
    localStorage.setItem("usermail", usermail.value);
    message.focus();
  }

  if (username.value && usermail.value && message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});
