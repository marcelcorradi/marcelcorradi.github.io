/**
 * Função para inicializar o carrossel de logos de clientes
 */
function initClientCarousel() {
    const clientsContainer = document.querySelector('.client-logos-container');
    const carousel = document.querySelector('.client-logos-carousel');
    
    if (!clientsContainer || !carousel) return;
    
    // Clonar os logos para criar um efeito infinito
    const cloneLogos = () => {
        const logos = document.querySelectorAll('.client-logo');
        logos.forEach(logo => {
            const clone = logo.cloneNode(true);
            carousel.appendChild(clone);
        });
    };
    
    // Ativar carrossel automático
    const startCarousel = () => {
        carousel.style.width = 'calc(170px * 12)'; // Ajuste conforme necessário
        carousel.style.display = 'flex';
        carousel.style.animation = 'scroll 20s linear infinite';
        
        // Pausar animação quando o mouse estiver sobre o carrossel
        clientsContainer.addEventListener('mouseenter', () => {
            carousel.style.animationPlayState = 'paused';
        });
        
        clientsContainer.addEventListener('mouseleave', () => {
            carousel.style.animationPlayState = 'running';
        });
    };
    
    // Para ativar o carrossel automático, descomente estas linhas
    // cloneLogos();
    // startCarousel();
}

// Adicionar ao evento DOMContentLoaded existente
document.addEventListener('DOMContentLoaded', function() {
    // O código existente do DOMContentLoaded permanece aqui
    
    // Inicializar o carrossel de clientes
    initClientCarousel();
});