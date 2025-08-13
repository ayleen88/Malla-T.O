<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Malla Curricular Interactiva</title>
    <link rel="stylesheet" href="estilos.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
    <header class="header">
        <h1>Malla Curricular - Terapia Ocupacional</h1>
    </header>
    <main class="malla-container">
        <div class="ciclo">
            <h2>Ciclo Inicial</h2>
            <div class="semestre" id="semestre1">
                <h3>1er Semestre</h3>
                <div class="ramo" id="formacion-biologica" data-prerequisitos='[]'>Formación Biológica</div>
                <div class="ramo" id="formacion-general" data-prerequisitos='[]'>Formación General</div>
                <div class="ramo" id="formacion-practica-1" data-prerequisitos='[]'>Práctica de Formación 1</div>
            </div>
            <div class="semestre" id="semestre2">
                <h3>2do Semestre</h3>
                <div class="ramo" id="psicologia-del-desarrollo" data-prerequisitos='[]'>Psicología del Desarrollo</div>
                <div class="ramo" id="formacion-social" data-prerequisitos='[]'>Formación Social</div>
                <div class="ramo" id="formacion-practica-2" data-prerequisitos='["formacion-practica-1"]'>Práctica de Formación 2</div>
            </div>
            <div class="semestre" id="semestre3">
                <h3>3er Semestre</h3>
                <div class="ramo" id="psicologia-comunitaria" data-prerequisitos='["psicologia-del-desarrollo"]'>Psicología Comunitaria</div>
                <div class="ramo" id="psicologia-social" data-prerequisitos='["formacion-social"]'>Psicología Social</div>
                <div class="ramo" id="formacion-practica-3" data-prerequisitos='["formacion-practica-2"]'>Práctica de Formación 3</div>
            </div>
            <div class="semestre" id="semestre4">
                <h3>4to Semestre</h3>
                <div class="ramo" id="investigacion-en-terapia" data-prerequisitos='["psicologia-comunitaria"]'>Investigación en Terapia</div>
                <div class="ramo" id="ocupacion-humana" data-prerequisitos='["psicologia-social"]'>Ocupación Humana</div>
                <div class="ramo" id="ingles-1" data-prerequisitos='[]'>Inglés I</div>
                <div class="ramo" id="formacion-practica-4" data-prerequisitos='["formacion-practica-3"]'>Práctica de Formación 4</div>
            </div>
        </div>

        <div class="ciclo">
            <h2>Ciclo Intermedio</h2>
            <div class="semestre" id="semestre5">
                <h3>5to Semestre</h3>
                <div class="ramo" id="gestion-administrativa-1" data-prerequisitos='["investigacion-en-terapia"]'>Gestión Administrativa I</div>
                <div class="ramo" id="ocupacion-social" data-prerequisitos='["ocupacion-humana"]'>Ocupación Social</div>
                <div class="ramo" id="ingles-2" data-prerequisitos='["ingles-1"]'>Inglés II</div>
                <div class="ramo" id="practica-integral-1" data-prerequisitos='["formacion-practica-4"]'>Práctica Integral I</div>
            </div>
            <div class="semestre" id="semestre6">
                <h3>6to Semestre</h3>
                <div class="ramo" id="gestion-administrativa-2" data-prerequisitos='["gestion-administrativa-1"]'>Gestión Administrativa II</div>
                <div class="ramo" id="taller-de-intervencion" data-prerequisitos='["ocupacion-social"]'>Taller de Intervención</div>
                <div class="ramo" id="ingles-3" data-prerequisitos='["ingles-2"]'>Inglés III</div>
                <div class="ramo" id="practica-integral-2" data-prerequisitos='["practica-integral-1"]'>Práctica Integral II</div>
            </div>
            <div class="semestre" id="semestre7">
                <h3>7mo Semestre</h3>
                <div class="ramo" id="investigacion-en-terapia-2" data-prerequisitos='["gestion-administrativa-2"]'>Investigación en Terapia II</div>
                <div class="ramo" id="taller-de-terapia" data-prerequisitos='["taller-de-intervencion"]'>Taller de Terapia</div>
                <div class="ramo" id="ingles-4" data-prerequisitos='["ingles-3"]'>Inglés IV</div>
                <div class="ramo" id="practica-integral-3" data-prerequisitos='["practica-integral-2"]'>Práctica Integral III</div>
            </div>
            <div class="semestre" id="semestre8">
                <h3>8vo Semestre</h3>
                <div class="ramo" id="trabajo-de-titulacion" data-prerequisitos='["investigacion-en-terapia-2"]'>Trabajo de Titulación</div>
                <div class="ramo" id="practica-profesional" data-prerequisitos='["taller-de-terapia"]'>Práctica Profesional</div>
                <div class="ramo" id="ingles-5" data-prerequisitos='["ingles-4"]'>Inglés V</div>
                <div class="ramo" id="practica-integral-4" data-prerequisitos='["practica-integral-3"]'>Práctica Integral IV</div>
            </div>
        </div>

        <div class="ciclo">
            <h2>Ciclo de Titulación</h2>
            <div class="semestre" id="semestre9">
                <h3>9no Semestre</h3>
                <div class="ramo" id="seminario-de-titulo" data-prerequisitos='["trabajo-de-titulacion"]'>Seminario de Título</div>
                <div class="ramo" id="practica-de-titulacion" data-prerequisitos='["practica-profesional"]'>Práctica de Titulación</div>
                <div class="ramo" id="taller-de-habilidades" data-prerequisitos='["ingles-5"]'>Taller de Habilidades</div>
            </div>
        </div>
    </main>
    <script src="script.js"></script>
</body>
</html>
  
