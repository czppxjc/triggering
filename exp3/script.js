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
    stimulus: "<p style='text-align:center'>Now, let's see how <b>you</b> use <i>wug</i>! You will see animations and will be asked to make a decision.</p>",
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
      options: ["wugging had to do with the direction of the movement/rotation direction", "wugging had to do with the size of the shape", "wugging had to do with the colors"],
      horizontal: false}],
  //    validation: "request",
   data: { questionId: "self_report" }
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
  prompt: "<p style='text-align:center'>Move the curser on the object to see an instance of wugging!</p>",
    choices: ["Show me another case!"],
      post_trial_gap: 500,
  //    prompt_delay: 2000,
      button_delay: 3000,
//    trial_duration: 3500
  };
};



var testing = function(stimulus2) {
  return {
    type: 'html-button-delay-response',
    prompt: "<p style='text-align:center'>The " +  stimulus2.shape + " " + stimulus2.phrase + "</p>",
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
  var stimulus = "<div  class = 'container'> " + material.subject + " </div>"

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
        //  adjective: adjective,
          data: data};
};

var testMaker = function(material) {
  var stimulus2 = "<div  class = 'container'> " + material.subject + " </div>"

  var shape = " " + material.shape + " "
//  var adjective = " " + material.adjective + " "
  var phrase = " " + material.phrase + " "
  var condition = " " + material.condition + " "

  var data = {
    id: material.id,
    type: "testing",
    shape: material.shape,
  //  adjective: material.adjective,
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

//var stimuli_set_first = new Array;

//for (var i in test_first) {
//  stimuli_set_first.push(testing(testMaker(test_first[i])));
//}



var timeline = new Array;


//timeline.push(consent_block);

timeline.push(prolificID);

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




timeline.push(self_report);


timeline.push(demographics_block);

// and this starts the experiment
jsPsych.init({
  timeline: timeline,
  show_progress_bar: true,
  on_finish: function(data){ SaveData("triggering2",
                                      theSubject,
                                      jsPsych.data.get().csv);
                              $(".jspsych-content").html("<center><p>Thank you for completing the experiment.  <strong>Please enter the code below on Prolific.</strong></p></center></p></center><center><p> 15039F44 </p></center>"); }
//  on_finish: function(data){ jsPsych.data.displayData("json"); }
});
