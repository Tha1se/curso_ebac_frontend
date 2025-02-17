$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    });

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();

        if (novaTarefa.trim() !== ''){ //verifica se a tarefa não está vazia
            const novoItem = $(`<li style="display:none">
                <div class="tarefa">${novaTarefa}</div>
            </li>`);

            novoItem.appendTo('ul').fadeIn();
            $('#nova-tarefa').val('');
        }
    })

    $('ul').on('click', 'li', function(){
        const tarefa = $(this).find('.tarefa');
        const currentDecoration = tarefa.css('text-decoration');
        
        // Verifica se já está riscado e alterna entre riscado e normal
        if (currentDecoration.includes('line-through')) {
            tarefa.css('text-decoration', 'none');
        } else {
            tarefa.css('text-decoration', 'line-through');
        }
    });
})