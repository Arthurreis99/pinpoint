// Funções para exibir e fechar as caixas de login e registro
function showBox(type) {
    closeBox(); // Garante que todas as janelas sejam fechadas antes de abrir uma nova

    if (type === 'login') {
        document.getElementById('login-box').style.display = 'block';
    } else if (type === 'register') {
        document.getElementById('register-box').style.display = 'block';
    }
}

function closeBox() {
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('register-box').style.display = 'none';
}

// Função para exibir notificações temporárias
function showNotification(message, color, duration = 3000) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'relative';
    notification.style.margin = '10px auto';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '50px';
    notification.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    notification.style.color = '#fff';
    notification.style.backgroundColor = color; // Cor da notificação
    notification.style.textAlign = 'center';
    notification.style.maxWidth = '400px'; // Reduz a largura para uma notificação mais compacta
    notification.style.zIndex = '1000';

    // Adiciona a notificação abaixo do header
    const header = document.querySelector('.header');
    header.insertAdjacentElement('afterend', notification);

    // Remove a notificação após o tempo especificado
    setTimeout(() => {
        notification.remove();
    }, duration);
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('sidebar-open')) {
        sidebar.classList.remove('sidebar-open');
        setTimeout(() => {
            sidebar.style.display = 'none'; // Oculta a barra após a transição
        }, 300); // Delay correspondente ao tempo da transição de 0.3s
    } else {
        sidebar.style.display = 'block'; // Exibe a barra antes de adicionar a classe
        setTimeout(() => {
            sidebar.classList.add('sidebar-open');
        }, 10); // Pequeno delay para garantir a transição
    }
}


