document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los botones
    const typeButtons = document.querySelectorAll('[data-type]');
    const concentrationButtons = document.querySelectorAll('[data-concentration]');
    
    // Variables para almacenar selecciones
    let selectedType = 'diseñador';
    let selectedConcentration = 'normal';
    
    // Función para actualizar la tabla visible
    function updatePriceTable() {
        // Ocultar todas las tablas
        document.querySelectorAll('.price-table').forEach(table => {
            table.style.display = 'none';
        });
        
        // Mostrar solo la tabla seleccionada
        const activeTable = document.querySelector(`.${selectedType}-${selectedConcentration}`);
        if(activeTable) {
            activeTable.style.display = 'block';
        }
    }
    
    // Event listeners para botones de tipo
    typeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones de tipo
            typeButtons.forEach(btn => btn.classList.remove('active'));
            
            // Añadir clase active al botón clickeado
            this.classList.add('active');
            
            // Actualizar tipo seleccionado
            selectedType = this.dataset.type;
            
            // Actualizar tabla
            updatePriceTable();
        });
    });
    
    // Event listeners para botones de concentración
    concentrationButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones de concentración
            concentrationButtons.forEach(btn => btn.classList.remove('active'));
            
            // Añadir clase active al botón clickeado
            this.classList.add('active');
            
            // Actualizar concentración seleccionada
            selectedConcentration = this.dataset.concentration;
            
            // Actualizar tabla
            updatePriceTable();
        });
    });
    
    // Mostrar tabla inicial (diseñador-normal)
    updatePriceTable();
    document.querySelector('.diseñador-normal').style.display = 'block';
});