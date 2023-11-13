import './Notification.css'

import {FaExclamation} from 'react-icons/fa6'

function NotificationFunction(){

    function respostQuest(respost){
        switch(respost){
            case false:
                alert('Agradecemos pela sua resposta! : )')
                CloseNotification()
                break
            default:
                alert('Redirecionando usuario')
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
                <h3>Hey, Olá</h3>
                <span>Voce deseja um site igual a esse?</span>
            </div>
            <button onClick={()=> respostQuest(true)} style={{backgroundColor: '#39ff12a6'}} className='BtnConfirm'>Sim</button>
            <button  onClick={()=> respostQuest(false)} style={{backgroundColor: '#ec0a0a'}} className='BtnConfirm'>Não</button>
        </div>
    )
}


export default NotificationFunction;