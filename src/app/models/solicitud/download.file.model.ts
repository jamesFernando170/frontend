export class DownloadFileModel{
    constructor(){}

    static downloadFile(path: string, fileName: string){
        const downloadInstance = document.createElement('a')
        downloadInstance.href = path;
        downloadInstance.target = '_blank';// lo navego por otra pestaña
        downloadInstance.download = fileName//cambio el nombre por comodidad del usuario

        document.body.appendChild(downloadInstance);
        downloadInstance.click();
        document.body.removeChild(downloadInstance);
    }
}