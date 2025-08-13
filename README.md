/* --- Estilos Generales y Reseteo --- */
body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f4f8; /* Color de fondo suave */
    color: #333;
    line-height: 1.6;
}

.header {
    background-color: #ff69b4; /* Rosa */
    color: white;
    text-align: center;
    padding: 2rem 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header h1 {
    margin: 0;
    font-size: 2.5rem;
    font-weight: 600;
}

/* --- Contenedor de la Malla --- */
.malla-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 2rem;
}

/* --- Estilos para los Ciclos y Semestres --- */
.ciclo {
    background-color: #e6f7ff; /* Celeste muy claro */
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    flex: 1 1 300px;
    min-width: 300px;
    text-align: center;
}

.ciclo h2 {
    color: #ff69b4; /* Rosa */
    font-size: 1.8rem;
    margin-top: 0;
    border-bottom: 2px solid #ff69b4;
    padding-bottom: 10px;
}

.semestre {
    margin-bottom: 20px;
    border: 1px solid #cceeff; /* Celeste claro */
    border-radius: 8px;
    padding: 15px;
    background-color: white;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
}

.semestre h3 {
    color: #0077c2; /* Azul medio */
    font-size: 1.2rem;
    margin: 0 0 10px 0;
}

/* --- Estilos para los Ramos --- */
.ramo {
    background-color: #cceeff; /* Celeste claro */
    color: #333;
    padding: 12px;
    margin-bottom: 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    user-select: none; /* Evita selección de texto */
}

.ramo:hover:not(.aprobado):not(.bloqueado) {
    background-color: #a0d8f0; /* Celeste más oscuro al pasar el mouse */
}

/* --- Clases de Estado de los Ramos --- */
.ramo.aprobado {
    background-color: #ffb6c1; /* Rosa claro */
    color: white;
    text-decoration: line-through;
    cursor: default;
    box-shadow: none;
}

.ramo.bloqueado {
    background-color: #f0f0f0; /* Gris claro */
    color: #aaa;
    cursor: not-allowed;
    position: relative;
}

.ramo.bloqueado::after {
    content: '🔒';
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2em;
}

/* --- Media Queries para Responsividad --- */
@media (max-width: 768px) {
    .malla-container {
        flex-direction: column;
        align-items: center;
        padding: 1rem;
    }

    .ciclo {
        width: 100%;
        margin-bottom: 20px;
    }
}
/* --- Estilos Generales y Reseteo --- */
body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f4f8; /* Color de fondo suave */
    color: #333;
    line-height: 1.6;
}

.header {
    background-color: #ff69b4; /* Rosa */
    color: white;
    text-align: center;
    padding: 2rem 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header h1 {
    margin: 0;
    font-size: 2.5rem;
    font-weight: 600;
}

/* --- Contenedor de la Malla --- */
.malla-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 2rem;
}

/* --- Estilos para los Ciclos y Semestres --- */
.ciclo {
    background-color: #e6f7ff; /* Celeste muy claro */
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    flex: 1 1 300px;
    min-width: 300px;
    text-align: center;
}

.ciclo h2 {
    color: #ff69b4; /* Rosa */
    font-size: 1.8rem;
    margin-top: 0;
    border-bottom: 2px solid #ff69b4;
    padding-bottom: 10px;
}

.semestre {
    margin-bottom: 20px;
    border: 1px solid #cceeff; /* Celeste claro */
    border-radius: 8px;
    padding: 15px;
    background-color: white;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
}

.semestre h3 {
    color: #0077c2; /* Azul medio */
    font-size: 1.2rem;
    margin: 0 0 10px 0;
}

/* --- Estilos para los Ramos --- */
.ramo {
    background-color: #cceeff; /* Celeste claro */
    color: #333;
    padding: 12px;
    margin-bottom: 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    user-select: none; /* Evita selección de texto */
}

.ramo:hover:not(.aprobado):not(.bloqueado) {
    background-color: #a0d8f0; /* Celeste más oscuro al pasar el mouse */
}

/* --- Clases de Estado de los Ramos --- */
.ramo.aprobado {
    background-color: #ffb6c1; /* Rosa claro */
    color: white;
    text-decoration: line-through;
    cursor: default;
    box-shadow: none;
}

.ramo.bloqueado {
    background-color: #f0f0f0; /* Gris claro */
    color: #aaa;
    cursor: not-allowed;
    position: relative;
}

.ramo.bloqueado::after {
    content: '🔒';
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2em;
}

/* --- Media Queries para Responsividad --- */
@media (max-width: 768px) {
    .malla-container {
        flex-direction: column;
        align-items: center;
        padding: 1rem;
    }

    .ciclo {
        width: 100%;
        margin-bottom: 20px;
    }
}
# Malla-T.O
