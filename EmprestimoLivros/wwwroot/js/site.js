$(document).ready(function () {

    $('#Emprestimos').DataTable({
        language:
        {
            "decimal": "",
            "emptyTable": "Sem dados disponíveis na tabela",
            "info": "Mostrando _START_ registro de _END_ em um total de _TOTAL_ entradas",
            "infoEmpty": "Mostrando 0 de 0 de 0 entradas",
            "infoFiltered": "(filtrado fr _MAX_ entradas totais)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Msotrar _MENU_ entradas",
            "loadingRecords": "Carregando...",
            "processing": "",
            "search": "Procurar:",
            "zeroRecords": "nenhum registro correspondente encontrado.",
            "paginate": {
                "first": "Primeiro",
                "last": "Ultimo",
                "next": "Proximo",
                "previous": "Anterior"
            },
            "aria": {
                "orderable": "Ordenar por esta coluna",
                "orderableReverse": "Ordem inversa desta coluna"
            }

        }
    });

    setTimeout(function() {
        $(".alert").fadeOut("slow", function () {
            $(this).alert('close');
        })
    }, 4000)
});