// generate random sequence of 10 characters as subject ID
var theSubject = jsPsych.randomization.randomID(10);

// and add it to the data being saved
jsPsych.data.addProperties({ subjectId: theSubject });
jsPsych.data.addProperties({ group: group });

// set up instructions, reading "instructions_text" from instructions.js
var instructions_block = {
  type: "instructions",
  show_clickable_nav: true,
  pages: instructions_text,
  data: { questionId: "instructions" }

  };

  var break_block = {
    type: "html-button-response",
    stimulus: "<p style='text-align:center'>Now, let's see how <b>you</b> use <i>wug</i>!</p>" 
    + " <p style='text-align:center'> You will see two animations but only one of them is visible, the other hidden. "
    + " Your task is to decide whether the sentence you will see describes the visible animation or the hidden animation. You should choose the hidden scenario if you consider the visible one inappropriate given the sentence you will see. </p>",
    choices: ["Continue"],
    data: { questionId: "break" }
  };

  var prolificID = {
    type: 'survey-text',
    questions: [
      {prompt: "Please enter your Prolific ID below.", name: 'Comments', rows: 1, columns: 30, font_size: 18}
    ],
   data: { questionId: "ProlificID" }
  };

  var self_report = {
    type: 'survey-multi-select',
      questions: [
      {prompt: "<p style='text-align:center'>What do you think wugging was about?</p>",
      options: ["wugging had to do with the direction of the movement", "wugging had to do with the red line", "wugging had to do with the lower or upper half of the grey circle"],
      horizontal: false}],
  //    validation: "request",
   data: { questionId: "self_report" }
  };



// set up consent form
//var consent_block = {
//  type: "consent-dec",
//  data: { questionId: "consent" }
//};

var teaching = function(stimulus) {
  return {
    type: 'html-button-delay-response',
    prompt: "<p style='text-align:center'> " +  stimulus.shape + " " + stimulus.phrase + "</p>",
  //  + "<p> condition:" + stimulus2.condition + " </p> ",
    stimulus: stimulus.stim,
    choices: ["Next"],
    data: stimulus.data,
//    prompt_delay: 3000,
    button_delay: 2000,
    post_trial_gap: 500
  };
};




var testing = function(stimulus2) {
  return {
    type: 'html-button-delay-response',
    prompt: "<p style='text-align:center;font-weight:bold;font-style:italic'> " +  stimulus2.shape + " " + stimulus2.phrase + "</p>"
    + "<p style='text-align:center'> The sentence describes: </p> ",
    stimulus: stimulus2.stim,
    choices: ["The visible scenario on the left", "The hidden scenario on the right"],
    data: stimulus2.data,
  //  prompt_delay: 3000,
    button_delay: 2000,
    post_trial_gap: 500
  };
};


// define animation button

function DoAnimation(){

//   if (document.getElementsByClassName("wug1_up1")[0] !== undefined)
//   {
//     var targetElement1 = document.getElementsByClassName("wug1_up1")[0];
//
//     targetElement1.classList.remove("up1");
//     void targetElement1.offsetWidth;
//     targetElement1.classList.add("up1");
// }
// else
 if (document.getElementsByClassName("wug2")[0] !== undefined &&
document.getElementsByClassName("wug1")[0] == undefined) {
  var targetElement = document.getElementsByClassName("wug2")[0];

  targetElement.classList.remove("up2");
  void targetElement.offsetWidth;
  targetElement.classList.add("up2");
}

if (document.getElementsByClassName("wug1")[0] !== undefined &&
document.getElementsByClassName("wug2")[0] == undefined) {
 var targetElement = document.getElementsByClassName("wug1")[0];

 targetElement.classList.remove("up1");
 void targetElement.offsetWidth;
 targetElement.classList.add("up1");
}

 else if (document.getElementsByClassName("wug1b")[0] !== undefined &&
document.getElementsByClassName("wug2b")[0] !== undefined &&
document.getElementsByClassName("wug3b")[0] !== undefined &&
document.getElementsByClassName("wug4b")[0] !== undefined) {

  var elements = document.querySelectorAll(".wug1b");
  var elements2 = document.querySelectorAll(".wug2b");
  var elements3 = document.querySelectorAll(".wug3b");
  var elements4 = document.querySelectorAll(".wug4b");


  var array = Array.from(elements);
var array2 = Array.from(elements2);
var array3 = Array.from(elements3);
var array4 = Array.from(elements4);

array.forEach(function(x) {
      x.classList.remove("up1");
      void x.offsetWidth;
       x.classList.add("up1");
});

array2.forEach(function(x) {
      x.classList.remove("up2");
      void x.offsetWidth;
       x.classList.add("up2");
});

array3.forEach(function(x) {
      x.classList.remove("up3");
      void x.offsetWidth;
       x.classList.add("up3");
});

array4.forEach(function(x) {
      x.classList.remove("up4");
      void x.offsetWidth;
       x.classList.add("up4");
});

}

else if (document.getElementsByClassName("wug1b")[0] !== undefined &&
document.getElementsByClassName("wug2b")[0] !== undefined &&
document.getElementsByClassName("wug3a")[0] !== undefined &&
document.getElementsByClassName("wug4a")[0] !== undefined) {

 var elements = document.querySelectorAll(".wug1b");
 var elements2 = document.querySelectorAll(".wug2b");
 var elements3 = document.querySelectorAll(".wug3a");
 var elements4 = document.querySelectorAll(".wug4a");


 var array = Array.from(elements);
var array2 = Array.from(elements2);
var array3 = Array.from(elements3);
var array4 = Array.from(elements4);

array.forEach(function(x) {
     x.classList.remove("up1");
     void x.offsetWidth;
      x.classList.add("up1");
});

array2.forEach(function(x) {
     x.classList.remove("up2");
     void x.offsetWidth;
      x.classList.add("up2");
});


array3.forEach(function(x) {
      x.classList.remove("down3");
      void x.offsetWidth;
       x.classList.add("down3");
});

array4.forEach(function(x) {
      x.classList.remove("up4");
      void x.offsetWidth;
       x.classList.add("up4");
});

}

else if (document.getElementsByClassName("wug1b")[0] !== undefined &&
document.getElementsByClassName("wug2b")[0] !== undefined &&
document.getElementsByClassName("dot3b")[0] !== undefined &&
document.getElementsByClassName("wug4b")[0] !== undefined) {

 var elements = document.querySelectorAll(".wug1b");
 var elements2 = document.querySelectorAll(".wug2b");
 var elements3 = document.querySelectorAll(".dot3b");
 var elements4 = document.querySelectorAll(".wug4b");


 var array = Array.from(elements);
var array2 = Array.from(elements2);
var array3 = Array.from(elements3);
var array4 = Array.from(elements4);

array.forEach(function(x) {
     x.classList.remove("up1");
     void x.offsetWidth;
      x.classList.add("up1");
});

array2.forEach(function(x) {
     x.classList.remove("up2");
     void x.offsetWidth;
      x.classList.add("up2");
});

array3.forEach(function(x) {
     x.classList.remove("up3");
     void x.offsetWidth;
      x.classList.add("up3");
});

array4.forEach(function(x) {
     x.classList.remove("up4");
     void x.offsetWidth;
      x.classList.add("up4");
});

}

else if (document.getElementsByClassName("wug1a")[0] !== undefined &&
document.getElementsByClassName("wug2a")[0] !== undefined &&
document.getElementsByClassName("wug3a")[0] !== undefined &&
document.getElementsByClassName("wug4a")[0] !== undefined) {

 var elements = document.querySelectorAll(".wug1a");
 var elements2 = document.querySelectorAll(".wug2a");
 var elements3 = document.querySelectorAll(".wug3a");
 var elements4 = document.querySelectorAll(".wug4a");


 var array = Array.from(elements);
var array2 = Array.from(elements2);
var array3 = Array.from(elements3);
var array4 = Array.from(elements4);

array.forEach(function(x) {
     x.classList.remove("down1");
     void x.offsetWidth;
      x.classList.add("down1");
});

array2.forEach(function(x) {
     x.classList.remove("down2");
     void x.offsetWidth;
      x.classList.add("down2");
});

array3.forEach(function(x) {
     x.classList.remove("down3");
     void x.offsetWidth;
      x.classList.add("down3");
});

array4.forEach(function(x) {
     x.classList.remove("down4");
     void x.offsetWidth;
      x.classList.add("down4");
});

}

else if (document.getElementsByClassName("wug1a")[0] !== undefined &&
document.getElementsByClassName("wug2b")[0] !== undefined &&
document.getElementsByClassName("wug3a")[0] !== undefined &&
document.getElementsByClassName("wug4b")[0] !== undefined) {

 var elements = document.querySelectorAll(".wug1a");
 var elements2 = document.querySelectorAll(".wug2b");
 var elements3 = document.querySelectorAll(".wug3a");
 var elements4 = document.querySelectorAll(".wug4b");


 var array = Array.from(elements);
var array2 = Array.from(elements2);
var array3 = Array.from(elements3);
var array4 = Array.from(elements4);

array.forEach(function(x) {
     x.classList.remove("down1");
     void x.offsetWidth;
      x.classList.add("down1");
});

array2.forEach(function(x) {
     x.classList.remove("up2");
     void x.offsetWidth;
      x.classList.add("up2");
});

array3.forEach(function(x) {
     x.classList.remove("down3");
     void x.offsetWidth;
      x.classList.add("down3");
});

array4.forEach(function(x) {
     x.classList.remove("down4");
     void x.offsetWidth;
      x.classList.add("down4");
});

}

else if (document.getElementsByClassName("wug1a")[0] !== undefined &&
document.getElementsByClassName("dot2a")[0] !== undefined &&
document.getElementsByClassName("wug3a")[0] !== undefined &&
document.getElementsByClassName("wug4a")[0] !== undefined) {

 var elements = document.querySelectorAll(".wug1a");
 var elements2 = document.querySelectorAll(".dot2a");
 var elements3 = document.querySelectorAll(".wug3a");
 var elements4 = document.querySelectorAll(".wug4a");


 var array = Array.from(elements);
var array2 = Array.from(elements2);
var array3 = Array.from(elements3);
var array4 = Array.from(elements4);

array.forEach(function(x) {
     x.classList.remove("down1");
     void x.offsetWidth;
      x.classList.add("down1");
});

array2.forEach(function(x) {
     x.classList.remove("down2");
     void x.offsetWidth;
      x.classList.add("down2");
});

array3.forEach(function(x) {
     x.classList.remove("down3");
     void x.offsetWidth;
      x.classList.add("down3");
});

array4.forEach(function(x) {
     x.classList.remove("down4");
     void x.offsetWidth;
      x.classList.add("down4");
});

}

else if (document.getElementsByClassName("dot1a")[0] !== undefined &&
document.getElementsByClassName("dot2a")[0] !== undefined &&
document.getElementsByClassName("dot3b")[0] !== undefined &&
document.getElementsByClassName("dot4b")[0] !== undefined) {

 var elements = document.querySelectorAll(".dot1a");
 var elements2 = document.querySelectorAll(".dot2a");
 var elements3 = document.querySelectorAll(".dot3b");
 var elements4 = document.querySelectorAll(".dot4b");


 var array = Array.from(elements);
var array2 = Array.from(elements2);
var array3 = Array.from(elements3);
var array4 = Array.from(elements4);

array.forEach(function(x) {
     x.classList.remove("down4");
     void x.offsetWidth;
      x.classList.add("down4");
});

array2.forEach(function(x) {
     x.classList.remove("down1");
     void x.offsetWidth;
      x.classList.add("down1");
});


array3.forEach(function(x) {
      x.classList.remove("down3");
      void x.offsetWidth;
       x.classList.add("down3");
});

array4.forEach(function(x) {
      x.classList.remove("down2");
      void x.offsetWidth;
       x.classList.add("down2");
});

}

else if (document.getElementsByClassName("dot7")[0] !== undefined &&
document.getElementsByClassName("dot8")[0] !== undefined &&
document.getElementsByClassName("dot5")[0] !== undefined &&
document.getElementsByClassName("dot6")[0] !== undefined) {

 var elements = document.querySelectorAll(".dot7");
 var elements2 = document.querySelectorAll(".dot8");
 var elements3 = document.querySelectorAll(".dot5");
 var elements4 = document.querySelectorAll(".dot6");


 var array = Array.from(elements);
var array2 = Array.from(elements2);
var array3 = Array.from(elements3);
var array4 = Array.from(elements4);

array.forEach(function(x) {
     x.classList.remove("up3");
     void x.offsetWidth;
      x.classList.add("up3");
});

array2.forEach(function(x) {
     x.classList.remove("up2");
     void x.offsetWidth;
      x.classList.add("up2");
});


array3.forEach(function(x) {
      x.classList.remove("up4");
      void x.offsetWidth;
       x.classList.add("up4");
});

array4.forEach(function(x) {
      x.classList.remove("up1");
      void x.offsetWidth;
       x.classList.add("up1");
});

}



else if (document.getElementsByClassName("wug3")[0] !== undefined) {
  var targetElement = document.getElementsByClassName("wug3")[0];

  targetElement.classList.remove("up3");
  void targetElement.offsetWidth;
  targetElement.classList.add("up3");
}

else if (document.getElementsByClassName("wug3b")[0] !== undefined) {
  var targetElement = document.getElementsByClassName("wug3b")[0];

  targetElement.classList.remove("down3");
  void targetElement.offsetWidth;
  targetElement.classList.add("down3");
}

else if (document.getElementsByClassName("wug4")[0] !== undefined) {
  var targetElement = document.getElementsByClassName("wug4")[0];

  targetElement.classList.remove("up4");
  void targetElement.offsetWidth;
  targetElement.classList.add("up4");
}

else if (document.getElementsByClassName("wug4b")[0] !== undefined) {
  var targetElement = document.getElementsByClassName("wug4b")[0];

  targetElement.classList.remove("down4");
  void targetElement.offsetWidth;
  targetElement.classList.add("down4");
}

else if (document.getElementsByClassName("wug1b")[0] !== undefined) {
  var targetElement = document.getElementsByClassName("wug1b")[0];

  targetElement.classList.remove("down1");
  void targetElement.offsetWidth;
  targetElement.classList.add("down1");
}

else if (document.getElementsByClassName("wug2b")[0] !== undefined) {
  var targetElement = document.getElementsByClassName("wug2b")[0];

  targetElement.classList.remove("down2");
  void targetElement.offsetWidth;
  targetElement.classList.add("down2");
}

else if (document.getElementsByClassName("dot1")[0] !== undefined) {
  var targetElement = document.getElementsByClassName("dot1")[0];

  targetElement.classList.remove("up1");
  void targetElement.offsetWidth;
  targetElement.classList.add("up1");
}

else if (document.getElementsByClassName("dot2")[0] !== undefined) {
  var targetElement = document.getElementsByClassName("dot2")[0];

  targetElement.classList.remove("up2");
  void targetElement.offsetWidth;
  targetElement.classList.add("up2");
}

else if (document.getElementsByClassName("dot3")[0] !== undefined) {
  var targetElement = document.getElementsByClassName("dot3")[0];

  targetElement.classList.remove("up3");
  void targetElement.offsetWidth;
  targetElement.classList.add("up3");
}

else if (document.getElementsByClassName("dot1a")[0] !== undefined) {
  var targetElement = document.getElementsByClassName("dot1a")[0];

  targetElement.classList.remove("down1");
  void targetElement.offsetWidth;
  targetElement.classList.add("down1");
}

else if (document.getElementsByClassName("dot2a")[0] !== undefined) {
  var targetElement = document.getElementsByClassName("dot2a")[0];

  targetElement.classList.remove("down2");
  void targetElement.offsetWidth;
  targetElement.classList.add("down2");
}

else if (document.getElementsByClassName("dot3a")[0] !== undefined) {
  var targetElement = document.getElementsByClassName("dot3a")[0];

  targetElement.classList.remove("down3");
  void targetElement.offsetWidth;
  targetElement.classList.add("down3");
}

else if (document.getElementsByClassName("dot4a")[0] !== undefined) {
  var targetElement = document.getElementsByClassName("dot4a")[0];

  targetElement.classList.remove("down4");
  void targetElement.offsetWidth;
  targetElement.classList.add("down4");
}

else if (document.getElementsByClassName("dot4")[0] !== undefined){

  var targetElement = document.getElementsByClassName("dot4")[0];

  targetElement.classList.remove("up4");
  void targetElement.offsetWidth;
  targetElement.classList.add("up4");

}
};


// defining teaching and testing

var teachMaker = function(material) {
  var stimulus = "<div class='container'><div class='ball_test'><div class='redline'></div>"
  + " " + material.subject +  "</div></div></div>"
  + "<button onclick = 'DoAnimation();'>Please click here for animation!</button>"

  var target = " " + material.subject + " "

  var phrase = " " + material.phrase + " "
  var shape = " " + material.shape + " "
  //var adjective = " " + material.adjective + " "

  var data = {
    id: material.id,
    type: "teaching",
    shape: material.shape,
  //  adjective: material.adjective
    };

  return {stim: stimulus,
          phrase: phrase,
          shape: shape,
          target: target,
        //  adjective: adjective,
          data: data};
};




var testMaker = function(material) {
  var stimulus2 = "<div class='container2'><div class='ball'><div class='redline'></div>"
  + " " + material.subject + " </div><div class = 'ball2'></div></div>"
  + "<button onclick = 'DoAnimation();'>Please click here for animation!</button>"

  var shape = " " + material.shape + " "
//  var adjective = " " + material.adjective + " "
  var phrase = " " + material.phrase + " "
  var condition = " " + material.condition + " "

  var data = {
    id: material.id,
    type: "testing",
    shape: material.shape,
    phrase: material.phrase,
    condition: material.condition
  };

  return {stim: stimulus2,
          phrase: phrase,
          shape: shape,
          condition: condition,
      //    adjective: adjective,
          data: data};
};



// teaching stimuli
var stimuli_set = new Array;

for (var i in teach) {
  stimuli_set.push(teaching(teachMaker(teach[i])));
}

stimuli_set = jsPsych.randomization.repeat(stimuli_set, 1);


//testing stimuli

var stimuli_set2 = new Array;

for (var i in test) {
  stimuli_set2.push(testing(testMaker(test[i])));

}

stimuli_set2 = jsPsych.randomization.repeat(stimuli_set2, 1);

// setting first items

var stimuli_set_first = new Array;

for (var i in test_first) {
  stimuli_set_first.push(testing(testMaker(test_first[i])));
}

stimuli_set_first = jsPsych.randomization.repeat(stimuli_set_first, 1);

var timeline = new Array;

// setting last items

var stimuli_set_last = new Array;

for (var i in test_last) {
  stimuli_set_last.push(testing(testMaker(test_last[i])));
}

stimuli_set_last = jsPsych.randomization.repeat(stimuli_set_last, 1);

var timeline = new Array;



//timeline.push(consent_block);

timeline.push(prolificID);

timeline.push(instructions_block);



 for (var i in stimuli_set) {
   timeline.push(stimuli_set[i]);
 }

 timeline.push(break_block);

for (var i in stimuli_set_first) {
  timeline.push(stimuli_set_first[i]);
}


for (var i in stimuli_set2) {
  timeline.push(stimuli_set2[i]);
}

for (var i in stimuli_set_last) {
  timeline.push(stimuli_set_last[i]);
}




//timeline.push(self_report);


timeline.push(demographics_block);

// and this starts the experiment
jsPsych.init({
  timeline: timeline,
  show_progress_bar: true,
  on_finish: function(data){ SaveData("triggering4_CB",
                                      theSubject,
                                      jsPsych.data.get().csv);
                              $(".jspsych-content").html("<center><p>Thank you for completing the experiment.  <strong>Please enter the code below on Prolific.</strong></p></center></p></center><center><p> 412F87F3 </p></center>"); }
//  on_finish: function(data){ jsPsych.data.displayData("json"); }
});
