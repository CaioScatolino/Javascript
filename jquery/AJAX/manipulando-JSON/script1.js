$(function() {

    $('#form').bind('submit', function(e){
        e.preventDefault()

        var txt = $(this).serialize()

        $.ajax({
            type:'POST',
            url:'ajax1.php',
            data:txt,
            dataType:'json',
            success:function(json) {
               alert(json.status)
            }
        })

        })


    })




