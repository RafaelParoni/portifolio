import './Notification.css'

import {FaExclamation, FaHand} from 'react-icons/fa6'

function NotificationFunction(){

    function respostQuest(respost){
        switch(respost){
            case false:
                CloseNotification()
                break
            default:
                window.location = '/quest'
                CloseNotification()

        }
    }   
    function NotificationRequest(){

        if(window.localStorage.getItem('QuestRequest') === undefined){
            window.localStorage.setItem('QuestRequest', 'true')
        }
        if(window.localStorage.getItem('QuestRequest') === 'true' || window.localStorage.getItem('QuestRequest') === null){
            // Mostranddo notification na tela
        }else{
            var NumberOriginal = parseInt(window.localStorage.getItem('ResquestCount'))
            if(NumberOriginal < 0){
                NumberOriginal = 0
            }
            window.localStorage.setItem('ResquestCount', NumberOriginal + 1 )
            if(parseInt(window.localStorage.getItem('ResquestCount')) >= 11){
                window.localStorage.setItem('QuestRequest', 'true')
                window.localStorage.setItem('ResquestCount','0')
                 // Voltar a mostrar notification na tela 
            }else{
                document.getElementById('NotificationDiv').remove()
                // não  mostrar notification na tela 
            }
        }
    }
    setTimeout(NotificationRequest, 10)


    function CloseNotification(){
        document.getElementById('NotificationDiv').style.opacity = '0.0'
        window.localStorage.setItem('QuestRequest', false)
        setTimeout(function(){document.getElementById('NotificationDiv').remove() },1000)
    }

    return(
        <div id='NotificationDiv' className='NotificationDiv'>
            <button onClick={()=> CloseNotification()} className='CloseNot'>X</button>
            <div>
                <FaExclamation size={30}/>
            </div>
            <div>
                <h3>Hey, Olá <FaHand/> </h3>
                <span>veja meu projeto QuestProject! </span>
            </div>
            <button onClick={()=> respostQuest(true)} style={{backgroundColor: '#39ff12a6'}} className='BtnConfirm'>Ver</button>
        </div>
    )
}


export default NotificationFunction;