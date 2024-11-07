document.addEventListener('DOMContentLoaded', function () {

    // Função para atualizar automaticamente as máquinas
    function atualizarMaquinas() {
        const maquinas = document.querySelectorAll('.maquina-card');
        maquinas.forEach(maquina => {
            // Troca automática de status
            const statusElement = maquina.querySelector('.status');
            if (statusElement.classList.contains('ativo')) {
                statusElement.classList.remove('ativo');
                statusElement.classList.add('inativo');
                statusElement.textContent = "Inativo";
            } else if (statusElement.classList.contains('inativo')) {
                statusElement.classList.remove('inativo');
                statusElement.classList.add('alerta');
                statusElement.textContent = "Em Alerta";
            } else {
                statusElement.classList.remove('alerta');
                statusElement.classList.add('ativo');
                statusElement.textContent = "Ativo";
            }

            // Atualizar dados da máquina (temperatura, velocidade, produção, etc.)
            const temperaturaElement = maquina.querySelector('p:nth-of-type(2)');
            const velocidadeElement = maquina.querySelector('p:nth-of-type(3)');
            const producaoElement = maquina.querySelector('p:nth-of-type(4)');
            const manutencaoElement = maquina.querySelector('p:nth-of-type(5)');
            const avisoElement = maquina.querySelector('p:nth-of-type(6)');

            // Alterando valores para simular a troca automática
            temperaturaElement.innerHTML = `<strong>Temperatura:</strong> ${Math.floor(Math.random() * 100)}°C`;
            velocidadeElement.innerHTML = `<strong>Velocidade:</strong> ${Math.floor(Math.random() * 300)} RPM`;
            producaoElement.innerHTML = `<strong>Produção Atual:</strong> ${Math.floor(Math.random() * 1000)} kg/h`;
            manutencaoElement.innerHTML = `<strong>Última Manutenção:</strong> ${new Date().toLocaleDateString()}`;

            // Atualizar o aviso com base no status da máquina
            if (statusElement.classList.contains('alerta')) {
                avisoElement.innerHTML = `<strong>Aviso:</strong> <span class="aviso alerta">Temperatura excedendo o limite seguro</span>`;
            } else {
                avisoElement.innerHTML = `<strong>Aviso:</strong> <span class="aviso">Nenhum problema detectado</span>`;
            }
        });
    }

    // Atualização automática das máquinas a cada 5 segundos
    setInterval(atualizarMaquinas, 5000);

    // Função para atualizar os eventos
    function atualizarEventos() {
        const eventos = document.querySelectorAll('.eventos li');
        eventos.forEach(evento => {
            // Atualizando a descrição do evento automaticamente a cada 10 segundos
            const randomEvent = Math.random();
            const descricao = evento.querySelector('strong');
            
            if (randomEvent < 0.2) {
                descricao.textContent = "Falha no Sistema de Energia";
                evento.innerHTML = `<strong>${descricao.textContent}:</strong> Houve uma falha na rede elétrica durante a noite. Todos os sistemas foram restaurados às 08:00 de hoje.`;
            } else if (randomEvent < 0.4) {
                descricao.textContent = "Manutenção Agendada";
                evento.innerHTML = `<strong>${descricao.textContent}:</strong> Manutenção agendada para a linha de transporte no armazém. Início às 18:00.`;
            } else if (randomEvent < 0.6) {
                descricao.textContent = "Interrupção na Produção";
                evento.innerHTML = `<strong>${descricao.textContent}:</strong> Produção interrompida por 2 horas devido a problemas no sistema de controle de qualidade.`;
            } else if (randomEvent < 0.8) {
                descricao.textContent = "Reunião de Treinamento de Segurança";
                evento.innerHTML = `<strong>${descricao.textContent}:</strong> Treinamento de segurança para todos os operadores de máquinas. Data: 10/11/2024.`;
            } else {
                descricao.textContent = "Visita de Inspeção";
                evento.innerHTML = `<strong>${descricao.textContent}:</strong> Inspeção de segurança realizada pela autoridade sanitária. Não foram encontrados problemas.`;
            }
        });
    }

    // Atualização automática dos eventos a cada 10 segundos
    setInterval(atualizarEventos, 10000);

    // Seção de Eventos: Mostrar detalhes do evento ao clicar
    const eventos = document.querySelectorAll('.eventos li');
    eventos.forEach(evento => {
        evento.addEventListener('click', function () {
            const aviso = evento.querySelector('.aviso.alerta');
            if (aviso) {
                // Exibe um alerta com mais informações sobre o evento
                alert("Detalhes do Evento: " + evento.textContent);
            } else {
                // Se não houver alerta, mostra uma mensagem simples
                alert("Evento: " + evento.textContent);
            }
        });
    });

    // Ações do botão "Adicionar Máquina"
    const adicionarMaquinaBtn = document.getElementById('adicionar-maquina-btn');
    if (adicionarMaquinaBtn) {
        adicionarMaquinaBtn.addEventListener('click', function () {
            // Exemplo: Adiciona uma nova máquina à lista de máquinas
            const novaMaquina = document.createElement('div');
            novaMaquina.classList.add('maquina-card');
            novaMaquina.innerHTML = `
                <img src="https://via.placeholder.com/150" alt="Máquina">
                <h3>Nova Máquina</h3>
                <p class="status ativo">Ativo</p>
                <p><strong>Temperatura:</strong> 60°C</p>
                <p><strong>Velocidade:</strong> 120 RPM</p>
                <p><strong>Produção Atual:</strong> 450 kg/h</p>
                <p><strong>Última Manutenção:</strong> ${new Date().toLocaleDateString()}</p>
                <p><strong>Aviso:</strong> <span class="aviso">Nenhum problema detectado</span></p>
            `;
            document.querySelector('.maquinas-container').appendChild(novaMaquina);
        });
    }

    // Ação de adicionar evento manualmente
    const adicionarEventoBtn = document.getElementById('adicionar-evento-btn');
    if (adicionarEventoBtn) {
        adicionarEventoBtn.addEventListener('click', function () {
            const novaData = new Date().toLocaleString();
            const novoEvento = document.createElement('li');
            novoEvento.innerHTML = `
                Novo evento registrado: ${novaData}
            `;
            document.querySelector('.eventos ul').appendChild(novoEvento);
        });
    }

});
