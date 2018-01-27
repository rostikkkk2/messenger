$(document).ready(function(){
  // при нажатии мышки чтоб значение кнопки было в инпуте
  $(".btn-js").click(function(){
     document.getElementById("input_iphone_messege").value += this.value;
  });
//


//смена языка кнопок на клавиатуре самсунг
  var ru_keiboard =$(".ru");
  var en_keiboard =$(".en");
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
  //
});
