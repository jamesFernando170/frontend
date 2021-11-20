function openGeneralMessageModal(message){
    document.querySelector("#pMessageText").innerHTML = message;
    let elemento = document.querySelector('#modal-general-message')
    var instance = M.Modal.getInstance(elemento);
    instance.open();
}