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
    type: 'html-button-delay-response',
    stimulus: stimulus.stim,
  prompt: "<p style='text-align:center'>The " + stimulus.adjective + " " + stimulus.shape + " " + stimulus.phrase + "</p>",
    choices: ["Next"],
      post_trial_gap: 500,
      prompt_delay: 3000,
      button_delay: 4000,
//    trial_duration: 3500
  };
};



var testing = function(stimulus2) {
  return {
    type: 'html-button-delay-response',
    prompt: "<p style='text-align:center'>The " + stimulus2.adjective + " " + stimulus2.shape + " " + stimulus2.phrase + "</p>",
  //  + "<p> condition:" + stimulus2.condition + " </p> ",
    stimulus: stimulus2.stim,
    choices: ["false", "true"],
    data: stimulus2.data,
    prompt_delay: 3000,
    button_delay: 4000,
    post_trial_gap: 500
  };
};




var teachMaker = function(material) {
  var stimulus = "<div  class = 'container' align ='center'> " + material.subject + " </div></p>"

  var phrase = " " + material.phrase + " "
  var shape = " " + material.shape + " "
  var adjective = " " + material.adjective + " "

  var data = {
    id: material.id,
    type: "teaching",
    shape: material.shape,
    adjective: material.adjective
    };

  return {stim: stimulus,
          phrase: phrase,
          shape: shape,
          adjective: adjective,
          data: data};
};

var testMaker = function(material) {
  var stimulus2 = "<div  class = 'container'> " + material.subject + " </div>"

  var shape = " " + material.shape + " "
  var adjective = " " + material.adjective + " "
  var phrase = " " + material.phrase + " "
  var condition = " " + material.condition + " "

  var data = {
    id: material.id,
    type: "testing",
    shape: material.shape,
    adjective: material.adjective,
    condition: material.condition
  };

  return {stim: stimulus2,
          phrase: phrase,
          shape: shape,
          condition: condition,
          adjective: adjective,
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
