$(document).ready(function(){
  // чтоб значение кнопки было в инпуте самсунг и айфон
  $(".btn-js-iphone").click(function(){
    if ($(".btn-iphone-do-big-js").hasClass("color-btn-big-white")) {
      document.getElementById("input_iphone_messege").value += this.value;
    }else{
      document.getElementById("input_iphone_messege").value += this.value.toUpperCase();
    }

  });

  $(".btn-js-samsung").click(function(){
    if ($(".btn-samsung-do-big-js").hasClass("color-btn-big-grey")) {
     document.getElementById("input_samsung_messege").value += this.value;
  }else{
    document.getElementById("input_samsung_messege").value += this.value.toUpperCase();
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
      var value_input_iphone = $("#input_samsung_messege").val();
      var arr = value_input_iphone.split("");
      arr.splice(-1, 1);
      document.getElementById("input_samsung_messege").value = arr.join("");
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

  });
