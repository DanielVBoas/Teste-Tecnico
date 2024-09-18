Este é um projeto  simples que utiliza a API ViaCEP para consulta de endereços a partir de um CEP. O usuário pode inserir um CEP no campo de entrada e, ao clicar no botão de consulta, o sistema retorna informações como rua, bairro, cidade e estado. Além disso, o projeto armazena a última consulta no localStorage, para que os dados sejam recarregados automaticamente ao acessar novamente a página. A interface é responsiva, funcionando tanto em dispositivos móveis quanto em desktops.

Instruções para Rodar o Projeto Localmente
Clone o repositório para sua máquina:
git clone https://github.com/seu-usuario/consultacpf.git
cd consulta-cepfrontend
open index.html  # para macOS
start index.html # para Windows

Tecnologias Utilizadas
HTML5: Estruturação do conteúdo da página.
CSS3: Estilos para tornar a interface visualmente agradável e responsiva.
JavaScript (Puro): Manipulação do DOM e integração com a API ViaCEP para buscar os dados do endereço.
API ViaCEP: Serviço gratuito para consulta de endereços a partir do CEP.
LocalStorage: Armazenamento local da última consulta realizada, permitindo que os dados sejam mantidos mesmo após o recarregamento da página.
