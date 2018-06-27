var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
    flowStep0();
  }, 1000 + (Math.random() * 20) * 100);
}

function windowsOptionManagement() {
  $("#chat-box .options").removeClass("deactivated");
  $("#chat-box").attr("data-opened", "open");
}

$('.message-submit').click(function() {
  insertMessage();
  windowsOptionManagement()
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    windowsOptionManagement()
    return false;
  }
})

function fakeMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#saludo').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
  }, 500 + (Math.random() * 20) * 100);
}

// Tooltips
$('[data-toggle="tooltip"]').tooltip();


//Variables Globales para Funciones
var $chatbox = $("#chat-box");
var $pinLeft = $("#pin-left");
var $pinRight = $("#pin-right");
var $expandBox = $("#expand-box");
var $this = $("this");
var $activeOptions = $("#chat-box .options li");
var $minimizeBox = $("#close-box");
var $messageInput = $(".message-input");
var $personalData = $('#personal-data');
var $dataToPreventExpandClass = $('.data-form-prevent-expanda');


// Funciones de la ventana CHAT
function clearActiveOptions(){
  $activeOptions.removeClass("active-option");
}

function clearPositions(position){
  if (position == 1){
    $chatbox.removeClass('pinnedToRight expandedBox');
  } else if (position == 2){
    $chatbox.removeClass('pinnedToLeft expandedBox');
  } else if (position == 3) {
    $chatbox.removeClass('pinnedToRight pinnedToLeft');
  } else if (position == 4) {
    $chatbox.removeClass('pinnedToRight pinnedToLeft expandedBox');
  } else {
    // alert("Ninguno");
  }
}

function pinLeft(){
  clearPositions(1);
  if ($chatbox.hasClass("pinnedToLeft")) {
    $chatbox.removeClass("pinnedToLeft", 200, "swing");
    setTimeout (function () {
      clearActiveOptions();
    }, 300);
  } else {
    $chatbox.addClass("pinnedToLeft", 200, "swing");
  }
}

function pinRight(){
  clearPositions(2);
  if ($chatbox.hasClass("pinnedToRight")) {
    $chatbox.removeClass("pinnedToRight", 200);
    setTimeout (function () {
      clearActiveOptions();
    }, 300);
  } else {
    $chatbox.addClass("pinnedToRight", 200, "swing");
  }
}

function expandBox(){
  clearPositions(3);
  if ($chatbox.hasClass("expandedBox")) {
    $chatbox.removeClass("expandedBox", 200, "easeInSine");
    $dataToPreventExpandClass.removeClass('maximum-width');
    setTimeout (function () {
      clearActiveOptions();
    }, 300);
  } else {
    $chatbox.addClass("expandedBox", 200, "easeInSine");
    $dataToPreventExpandClass.addClass('maximum-width');
  }
}

function minimizeBox(){
  $chatbox.addClass("starting-minimized");
}



// Llamada de las Funciones
$pinLeft.click(function (){
  $.when( clearActiveOptions() ).done(function() {
      pinLeft();
      setTimeout (function () {
        $pinLeft.addClass("active-option");
      }, 100);
  });
});

$pinRight.click(function (){
  $.when( clearActiveOptions() ).done(function() {
      pinRight();
      setTimeout (function () {
        $pinRight.addClass("active-option");
      }, 100);
  });
});

$expandBox.click(function (){
  $.when( clearActiveOptions() ).done(function() {
      expandBox();
      setTimeout (function () {
        $expandBox.addClass("active-option");
      }, 100);
  });
});

$minimizeBox.click(function (){
  $.when( clearActiveOptions() ).done(function() {
    clearPositions(4);
      setTimeout (function () {
        minimizeBox();
        $("#chat-box .options").addClass("deactivated");
      }, 10);
  });
});

$messageInput.focus(function (){
  $chatbox.removeClass("starting-minimized", 800,"easeOutBounce");
  var $conditionOpened = $("#chat-box").attr("data-opened");
  if ($conditionOpened == 'open') {
    $("#chat-box .options").removeClass("deactivated");
    updateScrollbar();
  }
});

function bg0(){
  $("body").css("background","url('img/bg-0.jpg')");
  setTimeout(function (){
    bg1();
  }, 9000);
}
function bg1(){
  $("body").css("background","url('img/bg-1.jpg')");
  setTimeout(function (){
    bg2();
  }, 9000);
}
function bg2(){
  $("body").css("background","url('img/bg-2.jpg')");
  setTimeout(function (){
    bg3();
  }, 9000);
}
function bg3(){
  $("body").css("background","url('img/bg-3.jpg')");
  setTimeout(function (){
    bg0();
  }, 9000);
}


setTimeout(function (){
  bg1();
}, 9000);


// EMULANDO TODOS LOS MENSAJES
// notificacion
function flowStep0() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#paracontinuar').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
    setTimeout(function (){
      flowStep1();
    }, 1000);
  }, 500 + (Math.random() * 20) * 100);
}

// Aviso y Terminos
function flowStep1() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#aviso-message').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
    setTimeout(function (){
      flowStep2();
    }, 1000);
  }, 500 + (Math.random() * 20) * 100);
}

$(document).on("click", "#btn-toggle-aviso", function() {
  $(".aviso-privacidad").toggleClass('auto-height', 1000, 'swing');
  $(".full-view small").toggleClass('to-hide');
  updateScrollbar();
});

$(document).on("click", "#btn-toggle-terminos", function() {
  $(".terminos").toggleClass('auto-height', 1000, 'swing');
  $(".full-view-terminos small").toggleClass('to-hide');
  updateScrollbar();
});


function flowStep2() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#terminos-block').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');    
    setDate();
    updateScrollbar();
  }, 500 + (Math.random() * 20) * 100);
}


function hideStep2(){
  $("#acepto-aviso").parent().hide();
  $("#acepto-terminos").parent().hide();

  $("#acepto-aviso-label").show();
  $("#acepto-terminos-label").show();
}

function goFlowStep3(){
  $.when( hideStep2() ).done(function() {
      flowStep3();
  });
}

$(document).on("click", "#acepto-aviso", function() {
  if ($("#acepto-aviso").is(':checked') && $("#acepto-terminos").is(':checked')) {
    goFlowStep3();
  }
  updateScrollbar();
});

$(document).on("click", "#acepto-terminos", function() {
  if ($("#acepto-aviso").is(':checked') && $("#acepto-terminos").is(':checked')) {
    goFlowStep3();
  }
  updateScrollbar();
});




function flowStep3() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#comencemos').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new'); 
    setDate();
    updateScrollbar();
    setTimeout (function () {
      flowStep4();
    }, 1000);
  }, 500 + (Math.random() * 20) * 100);
}

function flowStep4() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#personal-data').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
  }, 500 + (Math.random() * 20) * 100);
}

$(document).on("click", "#btn-personal-data", function() {
  $(this).addClass('to-hide');
  flowStep5();
  updateScrollbar();
});

function flowStep5() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#cuentenos').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
    setTimeout (function () {
      flowStep6();
    }, 1000);
  }, 500 + (Math.random() * 20) * 100);
}

function flowStep6() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#domicilio').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
  }, 500 + (Math.random() * 20) * 100);
}

$(document).on("click", "#btn-domicilio", function() {
  $(this).addClass('to-hide');
  flowStep7();
  updateScrollbar();
});

function flowStep7() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#autorizacionbc').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
    setTimeout (function () {
      flowStep8();
    }, 1000);
  }, 500 + (Math.random() * 20) * 100);
}

function flowStep8() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#autorizacionbcacepto').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
  }, 500 + (Math.random() * 20) * 100);
}