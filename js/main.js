/**
 * JavaScript principal do portfólio
 */

document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidade para o menu mobile (hamburger)
    const navbarBurgers = document.querySelectorAll('.navbar-burger');
    
    if (navbarBurgers.length > 0) {
        navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                // Obter o alvo do menu a partir do atributo data-target
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                
                // Alternar a classe is-active no botão e no menu
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
    
    // Destacar o item de menu ativo com base na URL atual
    const currentLocation = window.location.pathname;
    const navbarItems = document.querySelectorAll('.navbar-item');
    
    if (navbarItems.length > 0) {
        navbarItems.forEach(item => {
            const href = item.getAttribute('href');
            if (
                currentLocation.endsWith(href) || 
                (currentLocation === '/' && href === 'index.html') ||
                (currentLocation.endsWith('/') && href === 'index.html')
            ) {
                navbarItems.forEach(i => i.classList.remove('is-active'));
                item.classList.add('is-active');
            }
        });
    }
    
    // Scroll suave para links internos
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const yOffset = -80; // Ajuste para a altura do navbar
                const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                
                window.scrollTo({
                    top: y,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Implementar animações ao scroll
    const initAnimations = () => {
        if ('IntersectionObserver' in window) {
            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            });
            
            animatedElements.forEach((element) => {
                element.classList.add('will-animate');
                observer.observe(element);
            });
        } else {
            // Fallback para navegadores que não suportam IntersectionObserver
            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((element) => {
                element.classList.add('is-visible');
            });
        }
    };
    
    // Inicializar animações
    initAnimations();
    
    // Configuração do formulário de contato
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você pode implementar a lógica de envio do formulário
            // Por exemplo, usando fetch para enviar os dados para um endpoint
            
            // Por enquanto, apenas mostraremos um alerta
            alert('Obrigado pelo contato! Esta funcionalidade será implementada em breve.');
            
            // Limpar o formulário
            contactForm.reset();
        });
    }
    
    // Adicionar classe 'is-loaded' ao body quando a página estiver totalmente carregada
    window.addEventListener('load', () => {
        document.body.classList.add('is-loaded');
        
        // Se houver parâmetros na URL, verificar se há um ID de projeto para abrir
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('project');
        
        if (projectId) {
            const projectElement = document.getElementById(projectId);
            if (projectElement) {
                // Scroll suavemente para o projeto após um pequeno delay
                setTimeout(() => {
                    const yOffset = -100;
                    const y = projectElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    
                    window.scrollTo({
                        top: y,
                        behavior: 'smooth'
                    });
                }, 500);
            }
        }
    });
    
    // Função para ajustar a altura da navbar ao rolar
    const handleScroll = () => {
        const navbar = document.querySelector('.navbar');
        
        if (window.scrollY > 50) {
            navbar.classList.add('is-scrolled');
        } else {
            navbar.classList.remove('is-scrolled');
        }
    };
    
    // Adicionar listener de scroll
    window.addEventListener('scroll', handleScroll);
    
    // Executar handleScroll na carga inicial para definir o estado correto
    handleScroll();
});