exports.soma = async(req, res) => {
    
    let valor1 = req.query.valor1;
    let valor2 = req.query.valor2;
    let soma = await parseInt(valor1) + await parseInt(valor2);
    let multiplica = await multiplicaFunc(soma);
    let divide = await divideFunc(multiplica);
    let subtrai = await subtraiFunc(multiplica, soma);
    res.status(200).send ({soma: soma, multiplica: multiplica, divide : divide, subtrai : subtrai });
};


function multiplicaFunc(soma) {
    return new Promise((resolve) => {
         resolve(parseInt(soma) * parseInt(2));
        });
}

function divideFunc(multiplica) {
    return new Promise((resolve) => {
        resolve(parseInt(multiplica) / parseInt(2));
    });
}

function subtraiFunc(multiplica, subtrai) {
    return new Promise((resolve) =>{
        resolve(parseInt(multiplica) - parseInt(subtrai));
    });
}
