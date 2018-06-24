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
    fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

var Fake = [
  'Hola! ¿En que puedo ayudarte?',
  'Nice to meet you',
  'How are you?',
  'Not too bad, thanks',
  'What do you do?',
  'That\'s awesome',
  'Codepen is a nice place to stay',
  'I think you\'re a nice person',
  'Why do you think that?',
  'Can you explain?',
  'Anyway I\'ve gotta go now',
  'It was a pleasure chat with you',
  'Time to make a new codepen',
  'Bye',
  ':)'
]

function fakeMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="img/android_black.svg" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 500 + (Math.random() * 20) * 100);

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
      setTimeout (function () {
        clearActiveOptions();
      }, 300);
    } else {
      $chatbox.addClass("expandedBox", 200, "easeInSine");
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
        }, 10);
    });
  });

  $messageInput.focus(function (){
    $chatbox.removeClass("starting-minimized", 800,"easeOutBounce");
  });

  function bg0(){
    $("body").css("background","url('img/bg-0.jpg')");
    setTimeout(function (){
      bg1();
    }, 6000);
  }
  function bg1(){
    $("body").css("background","url('img/bg-1.jpg')");
    setTimeout(function (){
      bg2();
    }, 6000);
  }
  function bg2(){
    $("body").css("background","url('img/bg-2.png')");
    setTimeout(function (){
      bg3();
    }, 6000);
  }
  function bg3(){
    $("body").css("background","url('img/bg-3.jpg')");
    setTimeout(function (){
      bg4();
    }, 6000);
  }
  function bg4(){
    $("body").css("background","url('img/bg-4.jpg')");
    setTimeout(function (){
      bg0();
    }, 6000);
  }

  setTimeout(function (){
    bg1();
  }, 6000);


}

