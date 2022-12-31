let dropdownMobile = document.getElementById("dropdownMobile");
      let bioBtn = document.getElementById("btn");
      let description = document.querySelector("#desc");
      let closeDesc = document.querySelector("#closeDesc");
      bioBtn.addEventListener("click", reveal);

      function reveal() {
        if (description.classList.contains("unreveal")) {
          description.classList.remove("unreveal");
        }
        description.classList.toggle("reveal");
        bioBtn.style.pointerEvents = "none";
        bioBtn.style.opacity = 0.8;
      }

      closeDesc.addEventListener("click", unreveal);

      function unreveal() {
        description.classList.toggle("reveal");
        description.classList.toggle("unreveal");
        bioBtn.style.pointerEvents = "auto";
        bioBtn.style.opacity = 1;
      }

      function myFunction() {
        dropdownMobile.classList.toggle("show");
      }
      window.onclick = function (e) {
        if (!e.target.matches(".more")) {
          var dropDowns = document.getElementsByClassName("dropdownMobile");
          var i;
          for (i = 0; i <= dropDowns.length; i++) {
            var openDropdown = dropDowns[i];
            if (openDropdown.classList.contains("show")) {
              openDropdown.classList.remove("show");
            }
          }
        }
      };