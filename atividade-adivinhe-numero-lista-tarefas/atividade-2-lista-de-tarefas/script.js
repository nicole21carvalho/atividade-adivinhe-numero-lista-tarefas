const formTarefa = document.getElementById('formTarefa');
const inputTarefa = document.getElementById('inputTarefa');
const listaTarefas = document.getElementById('listaTarefas');

formTarefa.addEventListener('submit', function(event) {
  event.preventDefault();

  const textoTarefa = inputTarefa.value.trim();

  if (textoTarefa === '') {
    alert('Digite uma tarefa válida.');
    return;
  }

  adicionarTarefa(textoTarefa);
  inputTarefa.value = '';
  inputTarefa.focus();
});

function adicionarTarefa(texto) {
  const item = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = texto;

  span.addEventListener('click', function() {
    item.classList.toggle('concluida');
  });

  const botaoRemover = document.createElement('button');
  botaoRemover.textContent = 'Remover';
  botaoRemover.classList.add('botao-remover');

  botaoRemover.addEventListener('click', function() {
    listaTarefas.removeChild(item);
  });

  item.appendChild(span);
  item.appendChild(botaoRemover);

  listaTarefas.appendChild(item);
}
