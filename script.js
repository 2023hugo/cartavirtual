// JavaScript para la funcionalidad del menú
document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.category-section');
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    // Función para mostrar una sección específica
    function showSection(categoryId) {
        // Ocultar todas las secciones
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Mostrar la sección seleccionada
        const targetSection = document.getElementById(categoryId);
        if (targetSection) {
            setTimeout(() => {
                targetSection.classList.add('active');
            }, 100);
        }
    }
    
    // Manejar clics en los botones de navegación
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Remover clase activa de todos los botones
            navButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase activa al botón clickeado
            this.classList.add('active');
            
            // Mostrar la sección correspondiente
            showSection(category);
            
            // Scroll suave hacia arriba
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    // Manejar botón de scroll to top
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Mostrar la primera sección por defecto
    showSection('parrillas');
});
