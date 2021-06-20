function addMessage(nombre, apellido, dni){
    return new Promise((resolve, reject) => {
        if((!apellido || !dni) || (JSON.stringify(dni)).length > 10){
            reject('No se pudo enviar el JSON');
            return false;
        }
        if(typeof nombre != 'string' || typeof apellido != 'string' || typeof dni != 'number') {
            reject('No se pudo enviar el JSON');
            return false;
        }
            
        const fullMessage = {
            nombre: nombre,
            apellido: apellido,
            dni: dni,
       };       
        console.log(fullMessage);
        resolve(fullMessage);
    });
}

module.exports = {
    addMessage,
};