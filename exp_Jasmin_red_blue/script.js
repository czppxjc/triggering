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

function DoAnimation() {
  for (let i = 1; i <= 6; i++) {
    for (let d of ["down", "up"]) {
      let elements = document.getElementsByClassName("to"+d+i);
      for (let e of elements) {
        e.classList.remove(d+i);
        void e.offsetWidth;
        e.classList.add(d+i);
      }
    }
  }
}


// defining teaching and testing

var teachMaker = function(material) {
  var stimulus = "<div class='container'><div class='ball_test'>" + material.linetype
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
  var stimulus2 = "<div class='container2'><div class='ball'>" + material.linetype
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
var teaching_set = new Array;

for (var i in teach) {
  teaching_set.push(teaching(teachMaker(teach[i])));
}

teaching_set = jsPsych.randomization.repeat(teaching_set, 1);


// setting first items

var testing_set_first = new Array;

for (var i in test_first) {
  testing_set_first.push(testing(testMaker(test_first[i])));
}

testing_set_first = jsPsych.randomization.repeat(testing_set_first, 1);


//testing stimuli

var teaching_set_main = new Array;

for (var i in test) {
  teaching_set_main.push(testing(testMaker(test[i])));

}

teaching_set_main = jsPsych.randomization.repeat(teaching_set_main, 1);


// setting last items
//
//var stimuli_set_last = new Array;
//
//for (var i in test_last) {
//  stimuli_set_last.push(testing(testMaker(test_last[i])));
//}
//
//stimuli_set_last = jsPsych.randomization.repeat(stimuli_set_last, 1);



var timeline = new Array;

//timeline.push(consent_block);

timeline.push(prolificID);

timeline.push(instructions_block);

 for (var i in teaching_set) {
   timeline.push(teaching_set[i]);
 }

 timeline.push(break_block);

for (var i in testing_set_first) {
  timeline.push(testing_set_first[i]);
}


for (var i in teaching_set_main) {
  timeline.push(teaching_set_main[i]);
}

//for (var i in stimuli_set_last) {
//  timeline.push(stimuli_set_last[i]);
//}


//timeline.push(self_report);

timeline.push(demographics_block);

// and this starts the experiment
jsPsych.init({
  timeline: timeline,
  show_progress_bar: true,
 // on_finish: function(data){ SaveData("triggering4_CB",
   //                                   theSubject,
     //                                 jsPsych.data.get().csv);
       //                       $(".jspsych-content").html("<center><p>Thank you for completing the experiment.  <strong>Please enter the code below on Prolific.</strong></p></center></p></center><center><p> 8FCD555C </p></center>"); }
  on_finish: function(data){ jsPsych.data.displayData("json"); }
});
