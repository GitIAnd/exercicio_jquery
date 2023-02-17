$(document).ready(function() {
    
    $('body button').click(function () {
        $('form').slideDown();
    })

    
    })

    $('form').on('submit', function(e) {
        e.preventDefault()

        const novaTarefa = $('#nova-tarefa').val()
        const novoItem = $('<li></li>')
        $(
            `<div class="tarefa">
                ${novaTarefa}
            </div>
        `).appendTo(novoItem)

        $(novoItem).appendTo('ul')

        $(novoItem).click(function () {
            $('li').css("text-decoration", "line-through")

        console.log(novaTarefa)
    })

    

})
