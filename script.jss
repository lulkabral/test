let renda = 0;
let gastosTotais = 0;

document.getElementById('renda').addEventListener('input', function() {
    renda = parseFloat(this.value);
    atualizarSaldo();
});

document.getElementById('adicionar').addEventListener('click', function() {
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);

    if (descricao && !isNaN(valor)) {
        gastosTotais += valor;
        document.getElementById('gastosTotais').innerText = gastosTotais.toFixed(2);
        atualizarSaldo();
        document.getElementById('descricao').value = '';
        document.getElementById('valor').value = '';
    }
});

function atualizarSaldo() {
    const saldo = renda - gastosTotais;
    document.getElementById('saldo').innerText = saldo.toFixed(2);
}
