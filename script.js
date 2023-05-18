

 document.addEventListener('postchange', function(event) {
    document.querySelector('ons-toolbar .center')
    .innerHTML = event.tabItem.getAttribute('label');
    });







var dark = document.getElementById("dark");

 dark.onclick = function(){
    var SetTheme = document.body;
    SetTheme.classList.toggle("dark-theme")
    var theme;
    if(SetTheme.classList.contains("dark-theme")){
        console.log("Dark mode");
        theme = "DARK";
        dark.src ="img/sun.png"; 
    }else{
        console.log("Light mode");
        theme = "LIGHT";
        dark.src ="img/moon.png";
        
    }
    
    localStorage.setItem("PageTheme", JSON.stringify(theme));
    
}

setInterval(() => {
    let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
    console.log(GetTheme);
    if(GetTheme === "DARK"){
        document.body.classList = "dark-theme";
        dark.src ="img/sun.png"; 
    }else{
        document.body.classList = "";
        dark.src ="img/moon.png";
    }
}, 5);
