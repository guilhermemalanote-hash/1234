document.addEventListener('DOMContentLoaded', () => {

  // --- Elementos ---
  const btnOpiniao = document.getElementById('btn-opiniao');
  const opiniaoContent = document.getElementById('opiniao-professor');
  const btnProxima = document.getElementById('btn-proxima');
  const btnLimpar = document.getElementById('btn-limpar');

  // --- Toggle Acessível para "Ver opinião do professor" ---
  if (btnOpiniao && opiniaoContent) {
    btnOpiniao.addEventListener('click', () => {
      // Verifica o estado atual do atributo ARIA
      const isExpanded = btnOpiniao.getAttribute('aria-expanded') === 'true';

      // Alterna o estado de visibilidade
      btnOpiniao.setAttribute('aria-expanded', !isExpanded);
      opiniaoContent.hidden = isExpanded;

      // Atualiza o texto e ícone para leitores de tela e usuários visuais
      const btnText = btnOpiniao.querySelector('.btn-text');
      const icon = btnOpiniao.querySelector('.icon');

      if (!isExpanded) {
        btnText.textContent = 'Ocultar opinião do professor';
        icon.textContent = '▲';
      } else {
        btnText.textContent = 'Ver opinião do professor';
        icon.textContent = '▼';
      }
    });
  }

  // --- Ação: Próxima Atividade ---
  if (btnProxima) {
    btnProxima.addEventListener('click', () => {
      alert('Navegando para a próxima atividade...');
    });
  }

  // --- Ação: Limpar Conversa ---
  if (btnLimpar) {
    btnLimpar.addEventListener('click', () => {
      const confirmacao = confirm('Tem certeza que deseja limpar a conversa?');
      if (confirmacao) {
        alert('Conversa limpa com sucesso!');
      }
    });
  }

});