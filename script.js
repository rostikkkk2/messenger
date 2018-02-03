$(document).ready(function(){
  // AOS.init();
  //wright value btn on iphone and samsung
  $(".btn-js-iphone").click(function(){
    if ($(".btn-iphone-do-big-js").hasClass("color-btn-big-white")) {
      document.getElementById("input_iphone_messege").value += this.value;
    }else{
      document.getElementById("input_iphone_messege").value += this.value.toUpperCase();
    }
  });

  $(".btn-js-samsung").click(function(){
    if ($(".btn-samsung-do-big-js").hasClass("color-btn-big-grey")) {
     document.getElementById("part-to-show-messeges").value += this.value;
  }else{
    document.getElementById("part-to-show-messeges").value += this.value.toUpperCase();
  }
  });

//смена языка кнопок на клавиатуре самсунг
  var ru_keiboard = $(".ru");
  var en_keiboard = $(".en");
  var number = $(".numb_keyboard");
  $(".language_ru").click(function(){
    ru_keiboard.removeClass("hide");
    en_keiboard.addClass("hide");
  });
  $(".language_en").click(function(){
    ru_keiboard.addClass("hide");
    en_keiboard.removeClass("hide");
  });
  $(".numb").click(function(){
    number.removeClass("hide");
    en_keiboard.addClass("hide");
    ru_keiboard.addClass("hide");
  });
  $(".let").click(function(){
    number.addClass("hide");
    en_keiboard.removeClass("hide");
    ru_keiboard.addClass("hide");
  });

// смена кнопок языков на клавиатуре айфон
  $("#show_simbols_iphone").click(function(){
    $(".simbols-iphone").removeClass("hide");
    $(".ru-js-iphone").addClass("hide");
  });
  $("#show_leters_iphone").click(function(){
    $(".simbols-iphone").addClass("hide");
    $(".ru-js-iphone").removeClass("hide");
  });
  $("#show_en_leters_iphone").click(function(){
    $(".en-js-iphone").removeClass("hide");
    $(".ru-js-iphone").addClass("hide");
  });
  $("#show_ru_leters_iphone").click(function(){
    $(".en-js-iphone").addClass("hide");
    $(".ru-js-iphone").removeClass("hide");
  });
  $("#show_simbols_iphone_from_en").click(function(){
    $(".en-js-iphone").addClass("hide");
    $(".simbols-iphone").removeClass("hide");
  });
  $("#from_simbols_on_letters").click(function(){
    $(".simbols-iphone").addClass("hide");
    $(".ru-js-iphone").removeClass("hide");
  });

//клавиша удалить символ на самсунге и айфоне
    $(".do-back-simbol-iphone-js").click(function(){
      var value_input_iphone = $("#input_iphone_messege").val();
      var arr = value_input_iphone.split("");
      arr.splice(-1, 1);
      document.getElementById("input_iphone_messege").value = arr.join("");
    });

    $(".do-back-simbol-samsung-js").click(function(){
      var value_input_iphone = $("#part-to-show-messeges").val();
      var arr = value_input_iphone.split("");
      arr.splice(-1, 1);
      document.getElementById("part-to-show-messeges").value = arr.join("");
    });

//кнопка айфона и самсунга отвечает за большие символы
    $(".btn-iphone-do-big-js").click(function(){
      if ($(".btn-iphone-do-big-js").hasClass("color-btn-big-white")) {
        $(".btn-iphone-do-big-js").addClass("color-btn-big-violet");
        $(".btn-iphone-do-big-js").removeClass("color-btn-big-white");
      }else{
        $(".btn-iphone-do-big-js").addClass("color-btn-big-white");
        $(".btn-iphone-do-big-js").removeClass("color-btn-big-violet");
      }
    });

    $(".btn-samsung-do-big-js").click(function(){
      if ($(".btn-samsung-do-big-js").hasClass("color-btn-big-grey")) {
        $(".btn-samsung-do-big-js").addClass("color-btn-big-violet");
        $(".btn-samsung-do-big-js").removeClass("color-btn-big-grey");
      }else{
        $(".btn-samsung-do-big-js").addClass("color-btn-big-grey");
        $(".btn-samsung-do-big-js").removeClass("color-btn-big-violet");
      }
    });

// показывание и прятание клaвинатуры айфон
  $("#input_iphone_messege").click(function(){
    if (!$(".part-to-send-messege").hasClass("h-237")) {
      $(".part-to-send-messege").addClass("h-237").animate({"height": "237px"}, "3000");
      setTimeout(function() {
        $(".ru-js-iphone").removeClass("hide");
      }, 320);
      $(".icon-paperclip").addClass("hide");
      $(".arrow-down").removeClass("hide");
    }

  });

  $(".arrow-down").click(function(){
    $(".ru-js-iphone").addClass("hide");
    $(".en-js-iphone").addClass("hide");
    $(".simbols-iphone").addClass("hide");
    $(".part-to-send-messege").removeClass("h-237").animate({"height": "370px"}, 500);
    $(".icon-paperclip").removeClass("hide");
    $(".arrow-down").addClass("hide");
  });

//показывание и прятание клвинатуры samsung
  $("#part-to-show-messeges").click(function(){
   if (!$(".part-to-show-messeges").hasClass("h-275")) {
     $(".part-to-show-messeges").addClass("h-275").animate({"height": "275px"}, "3000")
     setTimeout(function() {
       $(".en").removeClass("hide");
     }, 320);
   }
  });

  $(".btn-do-samsung-keyboard-hide").click(function(){
    $(".en").addClass("hide");
    $(".ru").addClass("hide");
    $(".samsung-keyboard-simbols").addClass("hide");
    $(".part-to-show-messeges").removeClass("h-275").animate({"height": "379px"}, 500);
  });




  //отправка сообщений айфон
    $('#send_btn').click(function(){
       var message = document.createElement("div");
       message.classList.add('view_of_send_message');
       var parent_elem = document.getElementById('message');
       parent_elem.appendChild(message);
       message.innerHTML = document.getElementById("input_iphone_messege").value;

       var parent_to_send_messege = document.getElementById('show-sending-messages');
        var sending_message = document.createElement('div');
        sending_message.classList.add('view_of_send_message_for_samsung');
        parent_to_send_messege.appendChild(sending_message);
        sending_message.innerHTML = document.getElementById("input_iphone_messege").value;
        parent_elem.scrollTop = 9999;
        parent_to_send_messege.scrollTop = 9999;

        document.getElementById("input_iphone_messege").value = "";
      });
      //отправка сообщений самсунг
      $('#sending_btn').click(function(){
         var message = document.createElement("div");
         message.classList.add('view_of_send_message');
         var parent_elem = document.getElementById('show-sending-messages');
         parent_elem.appendChild(message);
         message.innerHTML = document.getElementById('part-to-show-messeges').value;

          var parent_to_send_messege = document.getElementById('message');
          var sending_message = document.createElement('div');
          sending_message.classList.add('view_of_send_message_for_samsung');
          parent_to_send_messege.appendChild(sending_message);
          sending_message.innerHTML = document.getElementById("part-to-show-messeges").value;
          parent_elem.scrollTop = 9999;
          parent_to_send_messege.scrollTop = 9999;
          document.getElementById("part-to-show-messeges").value = "";

        });


});
