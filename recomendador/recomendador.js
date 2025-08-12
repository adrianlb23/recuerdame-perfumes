// Límite de palabras para el prompt
const WORD_LIMIT = 30;

const form = document.getElementById('form-recomendador');
const promptEl = document.getElementById('prompt');
const wordCountEl = document.getElementById('word-count');
const respuestaEl = document.getElementById('respuesta');

// Contador y restricción de palabras en tiempo real
function countWords(text) {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

promptEl.addEventListener('input', () => {
  const words = promptEl.value.trim().split(/\s+/).filter(Boolean);
  if (words.length > WORD_LIMIT) {
    // Recorta al límite si se pasa
    promptEl.value = words.slice(0, WORD_LIMIT).join(' ');
  }
  wordCountEl.textContent = countWords(promptEl.value);
});

// Manejo del submit (estático por ahora)
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Valida selects mínimos
  const genero = document.getElementById('genero').value;
  const ocasion = document.getElementById('ocasion').value;
  const edad = document.getElementById('edad').value;
  const clima = document.getElementById('clima').value;

  if (!ocasion || !edad || !clima) {
    respuestaEl.innerHTML = `
      <h3>Recomendación de la IA</h3>
      <p>Por favor, completa <strong>ocasión</strong>, <strong>edad</strong> y <strong>clima</strong> para una sugerencia más precisa.</p>
    `;
    return;
  }

  // Respuesta de ejemplo (estática)
  respuestaEl.innerHTML = `
    <h3>Recomendación de la IA</h3>
    <p>
      Para <strong>${genero}</strong>, <strong>${ocasion}</strong>, clima <strong>${clima}</strong> y un perfil <strong>${edad}</strong>,
      considera <em>YSL Y EDT</em> o <em>Montblanc Explorer</em> si buscas algo versátil y fácil de usar.
      Si prefieres algo más dulce y juvenil para citas, prueba <em>Armaf Club de Nuit Intense Woman</em> o
      <em>Carolina Herrera Good Girl Blush</em>.
    </p>
  `;
});
