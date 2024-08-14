
// ex 1
$(document).ready(function(){
    // draggable
    $( "#dragg" ).draggable();
});
// ex 2
$(document).ready(function(){
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
});
// ex 3
$(document).ready(function(){
    $( "#resizable" ).resizable();
});
// ex 4
$(document).ready(function(){
    $( "#selectable" ).selectable();
});
// ex 5
$(document).ready(function(){
    $( "#sortable" ).sortable();
});
// ex 6
$(document).ready(function(){
    $( "#accordion" ).accordion({
        collapsible: true
      });
});
// ex 7
$(document).ready(function(){
    let availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
      ];
      $( "#tags" ).autocomplete({
        source: availableTags
      });
});
$( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "transfer" ) {
        options = { to: "#button", className: "ui-effects-transfer" };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( "#effect" ).effect( selectedEffect, options, 500, callback );
    };
 
    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( "#button" ).on( "click", function() {
      runEffect();
      return false;
    });
  } );
//   ex 9
$( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes1" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( "#effect1" ).hide( selectedEffect, options, 1000, callback );
    };
 
    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect1" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( "#button1" ).on( "click", function() {
      runEffect();
    });
  } );
//   ex 10 
$( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes2" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 280, height: 185 } };
      }
 
      // Run the effect
      $( "#effect2" ).show( selectedEffect, options, 500, callback );
    };
 
    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( "#button2" ).on( "click", function() {
      runEffect();
    });
 
    $( "#effect2" ).hide();
  } );
  // ex 11
$(document).ready(function(){
    $( "#datepicker" ).datepicker();
});
  // ex 12
  $(document).ready(function(){
    $( "#dialog" ).dialog({
      autoOpen: false,
    }
    );
});
$("#open").on("click", function () {
  $("#dialog").dialog("open");
});
  // ex 13
  $(document).ready(function(){
    $( "input" ).checkboxradio();
});
  // ex 14
  $(document).ready(function(){
    $( "#tabs" ).tabs();
});
 // ex 15
 $( function() {
    $( "#button4" ).on( "click", function() {
      $( ".newClass" ).switchClass( "newClass", "anotherNewClass", 1000 );
      $( ".anotherNewClass" ).switchClass( "anotherNewClass", "newClass", 1000 );
    });
  } );