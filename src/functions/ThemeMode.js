
var Theme = 'Light'
var id = document.getElementById("html")
var log = document.getElementById("log")

function AutoModeDetection(){

    if(window.localStorage.getItem("Theme") === ' ' || window.localStorage.getItem("Theme") === undefined || window.localStorage.getItem("Theme") === null){
       
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // dark mode

            window.localStorage.setItem("Theme", 'Dark')
            Theme = 'Dark'
        }else{
            // Light Mode

            window.localStorage.setItem("Theme", 'Light')
            Theme = 'Light'
        }

        return Theme
    }else{  
        Theme = window.localStorage.getItem('Theme')
        return Theme
    }
}


export {AutoModeDetection, Theme}