
var Theme = 'Light'
var id = document.getElementById("html")

function AutoModeDetection(){
    if(window.localStorage.getItem("Theme") === ' ' || window.localStorage.getItem("Theme") === undefined || window.localStorage.getItem("Theme") === null){
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // dark mode
            window.localStorage.setItem("Theme", 'Dark')
            id.setAttribute('class', 'Dark')
            Theme = 'Dark'
        }else{
            // Light Mode
            window.localStorage.setItem("Theme", 'Light')
            id.setAttribute('class', 'Light')
            Theme = 'Light'
        }
        return Theme
    }else{  
        Theme = window.localStorage.getItem('Theme')
        id.setAttribute('class', Theme)
        return Theme
    }
}

function SetNewMode(Mode){
    id.setAttribute('class', Mode)
    if(Mode === 'Dark' || Mode === 'Light'){
        id.setAttribute('class', Mode)
        window.localStorage.setItem("Theme", Mode)
    }else{
        console.log("Algo errado: " + Mode)
    }
}


export {AutoModeDetection, Theme, SetNewMode}