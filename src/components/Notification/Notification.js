import './Notification.css'

import {FaExclamation} from 'react-icons/fa6'

function NotificationFunction(){

    function respostQuest(respost){
        switch(respost){
            case false:
                alert('Agradecemos pela sua resposta! : )')
                window.localStorage.setItem('QuestRequest', true)
                console.log(window.localStorage.getItem('QuestRequest'))
                CloseNotification()
                break
            default:
                alert('Redirecionando usuario')
                window.location = '/quest'
                window.localStorage.setItem('QuestRequest', true)
                console.log(window.localStorage.getItem('QuestRequest'))
                CloseNotification()

        }
    }   
    function NotificationRequest(){
        if(window.localStorage.getItem('QuestRequest') === 'true'){
            console.log(window.localStorage.getItem('ResquestCount'))
            window.localStorage.setItem('QuestRequest', 'false')
            // Mostranddo notification na tela
        }else{
            window.localStorage.setItem('ResquestCount', parseInt(window.localStorage.getItem('ResquestCount')) + 1 )
            if(parseInt(window.localStorage.getItem('ResquestCount')) >= 5){
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
        setTimeout(function(){document.getElementById('NotificationDiv').remove() },1000)
    }

    return(
        <div id='NotificationDiv' className='NotificationDiv'>
            <button onClick={()=> CloseNotification()} className='CloseNot'>X</button>
            <div>
                <FaExclamation size={30}/>
            </div>
            <div>
                <h3>Hey, Olá</h3>
                <span>Voce deseja um site igual a esse?</span>
            </div>
            <button onClick={()=> respostQuest(true)} style={{backgroundColor: '#39ff12a6'}} className='BtnConfirm'>Sim</button>
            <button  onClick={()=> respostQuest(false)} style={{backgroundColor: '#ec0a0a'}} className='BtnConfirm'>Não</button>
        </div>
    )
}


export default NotificationFunction;