const apps = [
  {
    name: "Recycle Bin",
    icon: "https://win98icons.alexmeub.com/icons/png/recycle_bin_full_cool-0.png",
    app: "recyclebin",
    path: "Recycle-Bin",
    position: [0.01, 0.02],
  },
  {
    name: "Who Am I?",
    icon: "https://win98icons.alexmeub.com/icons/png/address_book_pad.png",
    app: "aboutme",
    path: "Who-Am-I?.txt",
    position: [0.25, 0.37],
  },
  {
    name: "Projects",
    icon: "https://win98icons.alexmeub.com/icons/png/directory_admin_tools-4.png",
    app: "projects",
    path: "Projects/",
    position: [0.75, 0.24],
  },
  {
    name: "Lola.png",
    icon: "https://win98icons.alexmeub.com/icons/png/msagent_file-1.png",
    app: "lola",
    path: "Lola.png",
    position: [0.4, 0.7],
  },
  {
    name: "Resume",
    icon: "https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-5.png",
    app: "resume",
    position: [0.5, 0.1],
  },
];

apps.forEach(function (app) {
  if (app.name === "Resume") {
    return;
  } else {
    createWindow(app);
  }
});

//Boot Screen
setTimeout(function () {
  $("#loadingScreen").remove();
}, 3000);

//Open About Me
setTimeout(function () {
  createWindow(apps[1]);
}, 5000);

// Mobile Device Detection
var isMobile = false;
if (
  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
    navigator.userAgent
  ) ||
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
    navigator.userAgent.substr(0, 4)
  )
) {
  isMobile = true;
}

//Window Creation Function
function createWindow(app) {
  if (document.getElementById(`${app.app}Window`) == null) {
    const desktop = document.getElementById("desktop");
    const window = document.getElementById("window");
    const newWindow = window.cloneNode(true);
    newWindow.className = app.app + "Window" + " window";
    newWindow.children[1].innerHTML = app.content;
    newWindow.children[1].id = app.app + "Window";
    newWindow.children[2].innerText = "C:/Desktop/" + app.path;

    //Window Ribbon Buttons
    newWindow.children[0].children[0].addEventListener(
      "click" || "touchStart",
      function () {
        $(
          "." + this.parentElement.parentElement.className.split(" ")[0]
        ).hide();
      }
    );
    newWindow.children[0].children[1].addEventListener(
      "click" || "touchStart",
      function () {
        if (minimized) {
          return;
        } else {
          $(`.${app.app}Window`)
            .css("top", "15%")
            .css("left", "15%")
            .css("width", "75%")
            .css("height", "75%");
          minimized = true;
        }
      }
    );
    newWindow.children[0].children[2].addEventListener(
      "click" || "touchStart",
      function () {
        $(`.${app.app}Window`)
          .css("top", "0")
          .css("left", "0")
          .css("width", "100%")
          .css("height", "100%");
        minimized = false;
      }
    );

    newWindow.addEventListener("click" || "touchStart", function () {
      this.style.zIndex = 100;
      $(".window").not(this).css("z-index", "5");
    });

    desktop.appendChild(newWindow);
    $(`#${app.app}Window`).load(`/apps/${app.app}.html #container`);
    $(`.${app.app}Window`)
      .hide()
      .draggable({ containment: "parent", handle: ".windowRibbonInteract" });

    //Z-Index
    $(`.${app.app}Window`).css("z-index", "100");
    $(".window").not(this).css("z-index", "5");

    //Window Ribbon Double Click
    let minimized = true;
    newWindow.children[0].children[3].addEventListener(
      "dblclick" || "touchStart",
      function () {
        if (minimized) {
          $(`.${app.app}Window`)
            .css("top", "0")
            .css("left", "0")
            .css("width", "100%")
            .css("height", "100%");
          minimized = false;
        } else {
          $(`.${app.app}Window`)
            .css("top", "13%")
            .css("left", "13%")
            .css("width", "75%")
            .css("height", "75%");
          minimized = true;
        }
      }
    );
  } else {
    $(".window").not(this).css("z-index", "5");
    document.querySelector(`.${app.app}Window`).style.zIndex = 100;
    $(`.${app.app}Window`).show();
  }
}

// Create App Icons and Positions them on the Desktop
apps.forEach(function (app) {
  const iconDiv = document.createElement("div");
  iconDiv.className = "icon " + app.app;
  iconDiv.id = app.app;
  iconDiv.innerHTML = `<img src="${app.icon}" alt="${app.name}"><p>${app.name}</p>`;
  iconDiv.style.left = app.position[0] * 100 + "%";
  iconDiv.style.top = app.position[1] * 100 + "%";
  document.getElementById("desktop").appendChild(iconDiv);
});

//JQuery Functions
$(function () {
  //Hide Parent Nodes
  $("#window").hide();
  $("#icon").hide();

  //Initialize Menus as Hidden
  $("#fileMenu").hide();
  $("#contactMenu").hide();
  $("#linkMenu").hide();

  //Ribbon Button Functionality
  $("#file").hover(function () {
    $("#fileMenu").toggle();
  });

  $("#contact").hover(function () {
    $("#contactMenu").toggle();
  });

  $("#links").hover(function () {
    $("#linkMenu").toggle();
  });

  //Draggable
  $(".icon").draggable({ containment: "parent" });

  //BSOD div
  const bsod = document.createElement("div");
  bsod.className = "bsod";
  bsod.innerHTML = `<div class="error">
  <div class="error-header"><span>ERROR<span></div>
    It said "Do Not Open" and there was a large warning icon.<br><br>
    Now I know you are a rulebreaker.<br><br>
    I will be logging your IP address and sending it to your boss.
    <br><br>
    Please restart the computer to fix the error.
  </div>`;
  bsod.style.left = "0px";
  bsod.style.top = "0px";
  bsod.style.position = "absolute";
  bsod.style.zIndex = "10000";
  bsod.style.width = "100%";
  bsod.style.height = "100%";
  bsod.style.backgroundColor = "blue";
  bsod.style.display = "flex";
  bsod.style.justifyContent = "center";
  bsod.style.alignItems = "center";
  bsod.style.pointerEvents = "none";

  //Icon Double Click
  $(".icon").dblclick(function () {
    appName = this.id;
    if (appName === "resume") {
      window.open(
        "https://drive.google.com/file/d/1LDUDgqzx-L2G2JhH4HJFi28cDLi1eZyb/view?usp=sharing",
        "_blank"
      );
    } else if (appName === "donotopen") {
      console.log("Crashing Website");
      // creates a blue screen over the website
      $("body").append(bsod);
    } else {
      apps.forEach(function (app) {
        if (app.app === appName) {
          createWindow(app);
        }
      });
    }
  });

  //If Mobile, enable tap mode
  if (isMobile) {
    $(".icon").on("tap", function () {
      appName = this.id;
      if (appName === "resume") {
        window.open(
          "https://drive.google.com/file/d/1LDUDgqzx-L2G2JhH4HJFi28cDLi1eZyb/view?usp=sharing",
          "_blank"
        );
      } else if (appName === "donotopen") {
        console.log("Crashing Website");
        $("body").append(bsod);
      } else {
        apps.forEach(function (app) {
          if (app.app === appName) {
            createWindow(app);
          }
        });
      }
    });
  }

  //File Menu
  $(".aboutMeMenuItem").click(function () {
    createWindow(apps[1]);
  });
  $(".projectsMenuItem").click(function () {
    createWindow(apps[2]);
  });

  //Icon Highlight
  $(".icon").mousedown(function () {
    $(this)
      .css("background-color", "rgba(0,0,0,0.2)")
      .css("border", "1px dotted black");
    $(".icon")
      .not(this)
      .css("background-color", "rgba(0,0,0,0)")
      .css("border", "none");
  });
  $(".wallpaper").mousedown(function () {
    $(".icon").css("background-color", "rgba(0,0,0,0)");
  });
  $(".ribbon").mousedown(function () {
    $(".icon").css("background-color", "rgba(0,0,0,0)");
  });

  $("#donotopen").mousedown(function () {
    $(this)
      .css("background-color", "rgba(0,0,0,0.2)")
      .css("border", "1px dotted black");
    $(".icon")
      .not(this)
      .css("background-color", "rgba(0,0,0,0)")
      .css("border", "none");
  });

  //Time
  function checkTime(i) {
    return i < 10 ? "0" + i : i;
  }

  function startTime() {
    var today = new Date(),
      h = checkTime(today.getHours()),
      AmOrPm = h >= 12 ? "pm" : "am",
      h = h % 12 || 12,
      m = checkTime(today.getMinutes());
    $(".time").html(h + ":" + m + " " + AmOrPm);
    t = setTimeout(function () {
      startTime();
    }, 500);
  }
  startTime();
});

//Media Query
var windowWithMin = window.matchMedia("(max-width: 430px)");

//Hides Time if Window is smaller than 430px
function listener(windowWithMin) {
  if (windowWithMin.matches) {
    $(".ribbonTime").hide();
  } else {
    $(".ribbonTime").show();
  }
}

//Call Listener Function
listener(windowWithMin);
