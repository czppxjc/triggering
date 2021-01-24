// generate random sequence of 10 characters as subject ID
var theSubject = jsPsych.randomization.randomID(10);

// and add it to the data being saved
jsPsych.data.addProperties({ subjectId: theSubject });
jsPsych.data.addProperties({ group_name: "group1" });

// set up instructions, reading "instructions_text" from instructions.js
var instructions_block = {
  type: "instructions",
  show_clickable_nav: true,
  pages: instructions_text,
  data: { questionId: "instructions" }

  };

  var break_block = {
    type: "html-button-response",
    stimulus: "<p style='text-align:center'>Now, let's see how <b>you</b> use <i>wug</i>!</p>",
    choices: ["Continue"],
    data: { questionId: "break" }
  };



// set up consent form
//var consent_block = {
//  type: "consent-dec",
//  data: { questionId: "consent" }
//};

var teaching = function(stimulus){
  return{
    type: 'html-keyboard-response',
    stimulus: stimulus.stim,
    prompt: "<p style='text-align:center'> Press any key to move on </p>"
  //  choices: [""],
  //  trial_duration: 4000,
  };
};



var testing = function(stimulus2) {
  return {
    type: 'html-button-delay-response',
    prompt: "<p style='text-align:center'>The " + stimulus2.shape + " just wugged.</p>",
    stimulus: stimulus2.stim,
    choices: ["completely false", "neither", "completely true"],
    data: stimulus2.data,
    prompt_delay: 4000,
    button_delay: 5000
  };
};




var teachMaker = function(material) {
  var stimulus = "<p style='text-align:center'>The " + material.shape + " is going to wug:</p>"
              + "<div  class = 'container3'><div  class = 'container2a'> " + material.subject + " </div>"
              + "<div  class = 'container2b'> " + material.subject2 + " </div>"
              + "<div  class = 'container2c'> " + material.subject3 + " </div></div>"

  var data = {
    id: material.id,
    type: "teaching",
    shape: material.shape,
    nickname: material.nickname
  };

  return {stim: stimulus,
          data: data};
};

var testMaker = function(material) {
  var stimulus2 = "<div  class = 'container'> " + material.subject + " </div>"

  var shape = " " + material.shape + " "

  var data = {
    id: material.id,
    type: "teaching",
    shape: material.shape,
    nickname: material.nickname
  };

  return {stim: stimulus2,
          shape: shape,
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

//var stimuli_set_first = new Array;

//for (var i in test_first) {
//  stimuli_set_first.push(testing(testMaker(test_first[i])));
//}



var timeline = new Array;

//timeline.push(consent_block);
timeline.push(instructions_block);

for (var i in stimuli_set) {
  timeline.push(stimuli_set[i]);
}

timeline.push(break_block);

//for (var i in stimuli_set_first) {
//  timeline.push(stimuli_set_first[i]);
//}


for (var i in stimuli_set2) {
  timeline.push(stimuli_set2[i]);
}







timeline.push(demographics_block);

// and this starts the experiment
jsPsych.init({
  timeline: timeline,
  show_progress_bar: true,
//  on_finish: function(data){ SaveData("package-deals-2-new",
                    //                  theSubject,
                    //                  jsPsych.data.get().csv);
                    //         $(".jspsych-content").html("<center><p>Thank you for completing the experiment.  <strong>Please enter the code below into mTurk</strong>.  Your payment will be processed <strong>within 24 hours</strong>.</p></center><div class='jspsych-submit-code'>" + theSubject + "</div>"); }
  on_finish: function(data){ jsPsych.data.displayData("json"); }
});
