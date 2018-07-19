(function (){//función anonima autoinvocada

const alanPoe = (number) =>{
    let crow = " ";
    for (let i = 0; i < number; i ++){
        crow += "nunca más ";
    }
    return crow;
}


if(typeof window  == 'undefined'){
    module.exports = alanPoe;
    // console.log("consola");
} else {
    window.alanPoe = alanPoe;
    // console.log("navegador");
};

})();