var passwords = document.getElementById("password"),
  allpasswords = document.getElementById("allpassword"),
  clickToCopys = document.getElementById("clickToCopy"),
  generatePass = document.getElementById("generate"),
  checkNumbers = document.getElementById("Numbers"),
  optionLength = document.getElementById("OptionLength"),
  numberQuantity = document.getElementById("NumberQuantity"),
  errors = document.getElementById("error"),
  errorTrues = document.getElementById("errorTrue"),
  MyResult =
    "{}[]()/~;:.<>=-_^%$#@!?>:[]*&123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  finalPass = "",
  finalPassArray = "",
  autoCopierva = true,
  Numbers = "123456789",
  Lowercase = "abcdefghijklmnopqrstuvwxyz",
  Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  Ambiguous = "{}[]()/~;:.<>=-_^%$#@!?>:[]*&",
  i,
  j,
  k,
  passLength = 10,
  nQuantity = 1;

generatePass.onclick = function(e) {
  e.preventDefault();
  passwords.value = "";
  if (MyResult !== "") {
    errors.textContent = "";

    allpasswords.innerHTML = "";

    for (k = 0; k < nQuantity; k = k + 1) {
      for (i = 0; i < passLength; i = i + 1) {
        var randomPass = Math.floor(Math.random() * MyResult.length);
        finalPass += MyResult.substring(randomPass, randomPass + 1);
      }
    }

    if (nQuantity > 1) {
      errorTrues.textContent = "";
      finalPassArray = finalPass.match(
        new RegExp(".{1," + passLength + "}", "g")
      );

      var str = finalPassArray.toString();
      var res = str.split(",");
      var h = 0;

      for (h; h < res.length; h = h + 1) {
        allpasswords.innerHTML +=
          " " +
          (h + 1) +
          (' = <input type="text" id="id-' +
            h +
            '" value="' +
            res[h] +
            '" onfocus="autoCopieA(this.value)" onblur="msgCopyEmpty()"/><br/>');
      }
      allpasswords.innerHTML +=
        "<span style='font-size:10px;color:red;'>Focus Password && Click Button Copy to Copy Your Password ";
    } else {
      errorTrues.textContent = "";
      passwords.value = finalPass;
      autoCopieOne();
    }

    finalPass = "";
  } else {
    finalPass = "";
    allpasswords.innerHTML = "";
    passwords.setAttribute("value", "");
    errors.textContent = "Add Include !!";
    errorTrues.textContent = "";
  }
};

//  Auto Copy

function autoCopieOne() {
  if (autoCopierva === true && passwords.value !== "") {
    errors.textContent = "";
    passwords.select();
    document.execCommand("copy");
    errorTrues.textContent = "is Copy";
  } else {
    if (autoCopierva === false) {
      errors.textContent = "Please Checked to Auto-Copier";
    } else {
      errors.textContent = "Please Generate Your Password First";
    }
  }
}

function autoCopieA(value) {
  passwords.value = value;
}

//  Button Click to Copy

clickToCopys.onclick = function(e) {
  e.preventDefault();

  autoCopieOne();
};

//  Select Password Length

function msgCopyEmpty() {
  errorTrues.textContent = "";
}

//  Select Password Length

optionLength.onchange = function() {
  var strUser = optionLength.options[optionLength.selectedIndex].value;
  passLength = strUser;
};

//  Select Number Quantity

numberQuantity.onchange = function() {
  var numberQ = numberQuantity.options[numberQuantity.selectedIndex].value;
  nQuantity = numberQ;
  passwords.value = "";
};

//  Select Option Length && Number Quantity

window.onload = function() {
  for (j = 0; j < 30; j++) {
    optionLength.innerHTML += "<option value=" + j + ">" + j + "</option>";
  }
  for (j = 1; j < 20; j++) {
    numberQuantity.innerHTML += "<option value=" + j + ">" + j + "</option>";
  }
};

//  isChecked

function isChecked(type, value) {
  if (value === true) {
    if (type === "Numbers") {
      MyResult += Numbers;
    }
    if (type === "Lowercase") {
      MyResult += Lowercase;
    }
    if (type === "Uppercase") {
      MyResult += Uppercase;
    }
    if (type === "Ambiguous") {
      MyResult += Ambiguous;
    }
    if (type === "autoCopier") {
      autoCopierva = value;
    }
  } else {
    if (type === "Numbers") {
      MyResult = MyResult.replace(Numbers, "");
    }
    if (type === "Lowercase") {
      MyResult = MyResult.replace(Lowercase, "");
    }
    if (type === "Uppercase") {
      MyResult = MyResult.replace(Uppercase, "");
    }
    if (type === "Ambiguous") {
      MyResult = MyResult.replace(Ambiguous, "");
    }
    if (type === "autoCopier") {
      autoCopierva = value;
    }
  }
}

/* App info
  1 - Select Password Length
  3 - Include Numbers: ( e.g. 123456 )
  4 - Include Lowercase Characters: ( e.g. abcdefgh )
  5 - Include Uppercase Characters: ( e.g. ABCDEFGH )
  6 - Exclude Ambiguous Characters: ( { } [ ] ( ) / \ ' " ` ~ , ; : . < > )
  7 - Auto- Copy :( select the password automatically )
  8 - Select Number Quantity Password & Auto Copy For All
  9 - Include Symbols add sam charcters
*/
