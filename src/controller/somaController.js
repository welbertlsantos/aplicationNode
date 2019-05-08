exports.soma = async(req, res) => {
    
    let valor1 = req.query.valor1;
    let valor2 = req.query.valor2;
    let soma = await parseInt(valor1) + await parseInt(valor2);
    let multiplica = await multiplicaFunc(soma);    
    res.status(200).send ({soma: soma, multiplica: multiplica });
};


function multiplicaFunc(soma) {
    return parseInt(soma) * parseInt(2);
}

