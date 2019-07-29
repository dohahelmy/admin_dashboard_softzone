// Clients script
$('#new_client').click(function(){
    $('#clients').css('display', 'none');
    $('#client_edit_form').css('display', 'block');
});

$('#save_client_data').click(function(){
    $('#clients').css('display', 'block');
    $('#client_edit_form').css('display', 'none');
});

$('#contact_edit_btn').click(function(){
    $('#contact_info').css('display', 'none');
    $('#contact_messages').css('display', 'none');
    $('#reply_form').css('display', 'none');
    $('#info_edit_form').css('display', 'block');
});

$('#info_save_btn').click(function(){
    $('#contact_info').css('display', 'block');
    $('#contact_messages').css('display', 'block');
    $('#info_edit_form').css('display', 'none');
});

$('.reply').click(function(){
    $('#contact_info').css('display', 'none');
    $('#contact_messages').css('display', 'none');
    $('#reply_form').css('display', 'block');
    $('#info_edit_form').css('display', 'none')
});

$('#send_reply').click(function(){
    $('#reply_form').css('display', 'none');
    $('#contact_info').css('display', 'block');
    $('#contact_messages').css('display', 'block');

})
