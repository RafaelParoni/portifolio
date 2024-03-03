import "./Curriculo.css"
import curriculoUrl from './../../curriculo.pdf'
import { MdOutlineFileDownload } from "react-icons/md";

function Curriculo(){


    function  DownloadPDF(){
        fetch(curriculoUrl, {
            mode : 'no-cors',
          })
            .then(response => response.blob())
            .then(blob => {
            let blobUrl = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.download = `Currículo - Rafael Paroni - Desenvolvedor web`;
            a.href = blobUrl;
            document.body.appendChild(a);
            a.click();
            a.remove();
          })
    }
    return(
        <div className="PageCurriculo">
            <h2>Curriculo</h2>
            <iframe allowFullScreen src={curriculoUrl} ></iframe>
            <button onClick={DownloadPDF}> <MdOutlineFileDownload /> Download</button>
        </div>
        
    )
}

export default Curriculo;