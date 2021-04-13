$(document).ready(function(){

   $('#login').click(function(){
     
    var password1 =$('#pass1').val();
    var password2 =$('#pass2').val();
    if(password1 != "" && password2 != ""){
        if(password1==password2){
            alert('Successfully login')
        }else{
            alert('password mismatch')
        }
    }else{
        alert("Please enter password")
    }

   });

   $('#show1').click(function(){
    var x = $('#pass1');
    var xtype= x.attr('type')
    if(xtype==='password'){
        x.attr('type', 'text');
      

    }else{
      x.attr('type', 'password');
    }
    })
    $('#show2').click(function(){
    var x = $('#pass2');
    var xtype= x.attr('type')
    if(xtype==='password'){
        x.attr('type', 'text');
        $(this).text('hide')

    }else{
    x.attr('type', 'password');
    }
    })
    
  });