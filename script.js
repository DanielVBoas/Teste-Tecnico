document.addEventListener('DOMContentLoaded', () => {
    const cepInput = document.getElementById('cep');
    const consultarBtn = document.getElementById('consultar');
    const limparBtn = document.getElementById('limpar');
    const ruaElem = document.getElementById('rua');
    const bairroElem = document.getElementById('bairro');
    const cidadeElem = document.getElementById('cidade');
    const estadoElem = document.getElementById('estado');

    // Função para aplicar máscara no CEP
    const aplicarMascara = (valor) => {
        valor = valor.replace(/\D/g, ''); // Remove tudo que não é dígito
        return valor.replace(/^(\d{5})(\d{0,3})$/, '$1-$2');
    };

    // Função para buscar endereço
    const buscarEndereco = async (cep) => {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if (data.erro) {
                alert('CEP inválido.');
                return;
            }

            ruaElem.textContent = `Rua: ${data.logradouro}`;
            bairroElem.textContent = `Bairro: ${data.bairro}`;
            cidadeElem.textContent = `Cidade: ${data.localidade}`;
            estadoElem.textContent = `Estado: ${data.uf}`;

            // Salvar no localStorage
            localStorage.setItem('endereco', JSON.stringify(data));
        } catch (error) {
            alert('Erro ao buscar endereço.');
        }
    };

    // Função para carregar endereço do localStorage
    const carregarEndereco = () => {
        const endereco = JSON.parse(localStorage.getItem('endereco'));

        if (endereco) {
            ruaElem.textContent = `Rua: ${endereco.logradouro}`;
            bairroElem.textContent = `Bairro: ${endereco.bairro}`;
            cidadeElem.textContent = `Cidade: ${endereco.localidade}`;
            estadoElem.textContent = `Estado: ${endereco.uf}`;
        }
    };

    // Evento de entrada do CEP com máscara
    cepInput.addEventListener('input', () => {
        cepInput.value = aplicarMascara(cepInput.value);
    });

    // Evento do botão de consultar
    consultarBtn.addEventListener('click', () => {
        const cep = cepInput.value.replace('-', '');
        if (cep.length === 8) {
            buscarEndereco(cep);
        } else {
            alert('Digite um CEP válido.');
        }
    });

    // Evento do botão de limpar
    limparBtn.addEventListener('click', () => {
        localStorage.removeItem('endereco');
        ruaElem.textContent = 'Rua: ';
        bairroElem.textContent = 'Bairro: ';
        cidadeElem.textContent = 'Cidade: ';
        estadoElem.textContent = 'Estado: ';
    });

    // Carregar o endereço ao iniciar a página
    carregarEndereco();
});