// this is an array with all of the materials to be presented, order doesn't
// matter since this will be randomized.  each item needs a unique ID


var teach_first = [


    { subject: "<div class='wug1'></div>",
   id: "teaching.1",
   shape: "The green circle",
   //adjective: "small",
   phrase: "wugs."
  },

  { subject: "<div class='wug2'></div>",
  id: "teaching.2",
  shape: "The green circle",
  //adjective: "small",
  phrase: "wugs."
  },


  

];


var teach_second = [

  { subject: "<div class='wug3'></div>",
  id: "teaching.3",
  shape: "The green circle",
  //adjective: "small",
  phrase: "wugs."
  },

  // { subject: "<div class='wug4'></div>",
  // id: "teaching.4",
  // shape: "The green circle",
  // //adjective: "small",
  // phrase: "wugs."
  // },

  { subject: "<div class='wug1b'></div>",
 id: "teaching.4",
 shape: "The green circle",
 //adjective: "small",
 phrase: "does not wug."
},

{ subject: "<div class='wug2b'></div>",
id: "teaching.5",
shape: "The green circle",
//adjective: "small",
phrase: "does not wug."
},


{ subject: "<div class='wug3b'></div>",
id: "teaching.6",
shape: "The green circle",
//adjective: "small",
phrase: "does not wug."
},

// { subject: "<div class='wug4b'></div>",
// id: "teaching.8",
// shape: "The green circle",
// //adjective: "small",
// phrase: "does not wug."
// },


];


// true/false simple cases (presupposition satisfied)
var test_first = [

  { subject: "<div class='wug1'></div>",
 id: "testing.1",
 shape: "The green circle",
 //adjective: "small",
 phrase: "does not wug.",
 condition: "AB"
},

{ subject: "<div class='wug2'></div>",
id: "testing.2",
shape: "The green circle",
//adjective: "small",
phrase: "wugs.",
condition: "AB"
},


{ subject: "<div class='wug3b'></div>",
id: "testing.3",
shape: "The green circle",
//adjective: "small",
phrase: "does not wug.",
condition: "notAB"
},

{ subject: "<div class='wug4b'></div>",
id: "testing.4",
shape: "The green circle",
//adjective: "small",
phrase: "wugs.",
condition: "notAB"
},

];

// quantifier true/false cases (presupposition satisfied)

var test = [

  { subject: "<div class='wug1c'></div>"
  + "<div class='wug2c'></div>"
  + "<div class='wug3c'></div>"
  + "<div class='wug4c'></div>",
  id: "testing.5",
  shape: "Every green circle",
  // adjective: "small",
  phrase: "wugs.",
  condition: "all_true_universal"
  },

/*   { subject: "<div class='wug1d'></div>"
  + "<div class='wug2d'></div>"
  + "<div class='wug3d'></div>"
  + "<div class='wug4d'></div>",
  id: "testing.6",
  shape: "Every green circle",
  // adjective: "small",
  phrase: "wugs.",
  condition: "all_true_universal"
  }, */

  { subject: "<div class='wug1c'></div>"
  + "<div class='wug2c'></div>"
  + "<div class='wug3d'></div>"
  + "<div class='wug4d'></div>",
  id: "testing.6",
  shape: "None of the green circles",
  // adjective: "small",
  phrase: "wug.",
  condition: "none_true_universal"
  },

 

];

var test_last = [

  // every true universal items

 

  { subject: "<div class='wug1a'></div>"
  + "<div class='wug2a'></div>"
  + "<div class='wug3b'></div>"
  + "<div class='wug4b'></div>",
  id: "testing.7",
  shape: "Every green circle",
  // adjective: "small",
  phrase: "wugs.",
  condition: "all_true_universal"
  },


  { subject: "<div class='wug1a'></div>"
  + "<div class='wug2a'></div>"
  + "<div class='wug3a'></div>"
  + "<div class='wug4b'></div>",
  id: "testing.8",
  shape: "Every green circle",
  // adjective: "small",
  phrase: "wugs.",
  condition: "all_true_universal"
  },



  { subject: "<div class='wug1b'></div>"
  + "<div class='wug2b'></div>"
  + "<div class='wug3b'></div>"
  + "<div class='wug4b'></div>",
  id: "testing.9",
  shape: "Every green circle",
  // adjective: "small",
  phrase: "wugs.",
  condition: "all_true_universal"
  },




  // every false (from red) items

  { subject: "<div class='wug1a'></div>"
  + "<div class='wug2a'></div>"
  + "<div class='wug3b'></div>"
  + "<div class='wug4a'></div>",
  id: "testing.10",
  shape: "Every green circle",
  // adjective: "small",
  phrase: "wugs.",
  condition: "all_false"
  },

  { subject: "<div class='wug1a'></div>"
  + "<div class='wug2a'></div>"
  + "<div class='wug3b'></div>"
  + "<div class='wug4a'></div>",
  id: "testing.11",
  shape: "Every green circle",
  // adjective: "small",
  phrase: "wugs.",
  condition: "all_false"
  },

  { subject: "<div class='wug1a'></div>"
  + "<div class='wug2b'></div>"
  + "<div class='wug3a'></div>"
  + "<div class='wug4a'></div>",
  id: "testing.12",
  shape: "Every green circle",
  // adjective: "small",
  phrase: "wugs.",
  condition: "all_false"
  },

  

  // all true, existential projection

  { subject: "<div class='dot1b'></div>"
  + "<div class='wug2b'></div>"
  + "<div class='dot3b'></div>"
  + "<div class='wug4b'></div>",
  id: "testing.13",
  shape: "Every green circle",
  // adjective: "small",
  phrase: "wugs.",
  condition: "all_true_existential"
  },

  { subject: "<div class='dot1a'></div>"
  + "<div class='dot2a'></div>"
  + "<div class='wug3b'></div>"
  + "<div class='wug4b'></div>",
  id: "testing.14",
  shape: "Every green circle",
  // adjective: "small",
  phrase: "wugs.",
  condition: "all_true_existential"
  },

    { subject: "<div class='wug1b'></div>"
  + "<div class='wug2b'></div>"
  + "<div class='dot3b'></div>"
  + "<div class='dot4b'></div>",
  id: "testing.15",
  shape: "Every green circle",
  // adjective: "small",
  phrase: "wugs.",
  condition: "all_true_existential"
  },

  { subject: "<div class='wug1b'></div>"
  + "<div class='wug2b'></div>"
  + "<div class='dot3b'></div>"
  + "<div class='dot2a'></div>",
  id: "testing.16",
  shape: "Every green circle",
  // adjective: "small",
  phrase: "wugs.",
  condition: "all_true_existential"
  },



// all true no projection

  { subject: "<div class='dot7'></div>"
  + "<div class='dot8'></div>"
  + "<div class='dot5'></div>"
  + "<div class='dot6'></div>",
  id: "testing.17",
  shape: "Every green circle",
  // adjective: "small",
  phrase: "wugs.",
  condition: "all_true_no_projection"
  },

   { subject: "<div class='dot5'></div>"
  + "<div class='dot6'></div>"
  + "<div class='dot3b'></div>"
  + "<div class='dot4b'></div>",
  id: "testing.18",
  shape: "Every green circle",
  // adjective: "small",
  phrase: "wugs.",
  condition: "all_true_no_projection"
  },

   { subject: "<div class='dot7'></div>"
  + "<div class='dot8'></div>"
  + "<div class='dot1b'></div>"
  + "<div class='dot2b'></div>",
  id: "testing.19",
  shape: "Every green circle",
  // adjective: "small",
  phrase: "wugs.",
  condition: "all_true_no_projection"
  },

  { subject: "<div class='dot5'></div>"
  + "<div class='dot6'></div>"
  + "<div class='dot7'></div>"
  + "<div class='dot2b'></div>",
  id: "testing.20",
  shape: "Every green circle",
  // adjective: "small",
  phrase: "wugs.",
  condition: "all_true_no_projection"
  },


   // none items

   // none true universal

  { subject: "<div class='wug1a'></div>"
  + "<div class='wug2a'></div>"
  + "<div class='wug3a'></div>"
  + "<div class='wug4a'></div>",
  id: "testing.21",
  shape: "None of the green circles",
  // adjective: "small",
  phrase: "wug.",
  condition: "none_true_universal"
  },

   { subject: "<div class='wug1b'></div>"
  + "<div class='wug2a'></div>"
  + "<div class='wug3b'></div>"
  + "<div class='wug4a'></div>",
  id: "testing.22",
  shape: "None of the green circles",
  // adjective: "small",
  phrase: "wug.",
  condition: "none_true_universal"
  },


   { subject: "<div class='wug1b'></div>"
  + "<div class='wug2b'></div>"
  + "<div class='wug3b'></div>"
  + "<div class='wug4a'></div>",
  id: "testing.23",
  shape: "None of the green circles",
  // adjective: "small",
  phrase: "wug.",
  condition: "none_true_universal"
  },


  // none true existential projection

 { subject: "<div class='wug1a'></div>"
  + "<div class='dot3a'></div>"
  + "<div class='wug3a'></div>"
  + "<div class='dot4a'></div>",
  id: "testing.24",
  shape: "None of the green circles",
  // adjective: "small",
  phrase: "wug.",
  condition: "none_true_existential"
  },

   { subject: "<div class='wug1a'></div>"
  + "<div class='wug2a'></div>"
  + "<div class='dot3a'></div>"
  + "<div class='dot4a'></div>",
  id: "testing.25",
  shape: "None of the green circles",
  // adjective: "small",
  phrase: "wug.",
  condition: "none_true_existential"
  },

   { subject: "<div class='dot1b'></div>"
  + "<div class='dot2b'></div>"
  + "<div class='wug3a'></div>"
  + "<div class='wug4a'></div>",
  id: "testing.26",
  shape: "None of the green circles",
  // adjective: "small",
  phrase: "wug.",
  condition: "none_true_existential"
  },

  { subject: "<div class='dot1b'></div>"
  + "<div class='dot4a'></div>"
  + "<div class='wug3a'></div>"
  + "<div class='wug4a'></div>",
  id: "testing.27",
  shape: "None of the green circles",
  // adjective: "small",
  phrase: "wug.",
  condition: "none_true_existential"
  },


 
// none no projection

  { subject: "<div class='dot9'></div>"
  + "<div class='dot10'></div>"
  + "<div class='dot11'></div>"
  + "<div class='dot12'></div>",
  id: "testing.28",
  shape: "None of the green circles",
  // adjective: "small",
  phrase: "wug.",
  condition: "none_true_no_projection"
  },

  { subject: "<div class='dot9'></div>"
  + "<div class='dot10'></div>"
  + "<div class='dot3a'></div>"
  + "<div class='dot4a'></div>",
  id: "testing.29",
  shape: "None of the green circles",
  // adjective: "small",
  phrase: "wug.",
  condition: "none_true_no_projection"
  },

  { subject: "<div class='dot11'></div>"
  + "<div class='dot12'></div>"
  + "<div class='dot3a'></div>"
  + "<div class='dot4a'></div>",
  id: "testing.30",
  shape: "None of the green circles",
  // adjective: "small",
  phrase: "wug.",
  condition: "none_true_no_projection"
  },


  { subject: "<div class='dot11'></div>"
  + "<div class='dot12'></div>"
  + "<div class='dot9'></div>"
  + "<div class='dot3a'></div>",
  id: "testing.31",
  shape: "None of the green circles",
  // adjective: "small",
  phrase: "wug.",
  condition: "none_true_no_projection"
  },

// none false (from red) items

  { subject: "<div class='wug1a'></div>"
  + "<div class='wug2b'></div>"
  + "<div class='wug3a'></div>"
  + "<div class='wug4b'></div>",
  id: "testing.32",
  shape: "None of the green circles",
  // adjective: "small",
  phrase: "wug.",
  condition: "none_false"
  },

  { subject: "<div class='wug1b'></div>"
  + "<div class='wug2a'></div>"
  + "<div class='wug3a'></div>"
  + "<div class='wug4a'></div>",
  id: "testing.33",
  shape: "None of the green circles",
  // adjective: "small",
  phrase: "wug.",
  condition: "none_false"
  },

  { subject: "<div class='wug1b'></div>"
  + "<div class='wug2a'></div>"
  + "<div class='wug3a'></div>"
  + "<div class='wug4b'></div>",
  id: "testing.34",
  shape: "None of the green circles",
  // adjective: "small",
  phrase: "wug.",
  condition: "none_false"
  },


  // some (true controls)

  { subject: "<div class='wug1a'></div>"
  + "<div class='wug2a'></div>"
  + "<div class='wug3b'></div>"
  + "<div class='wug4a'></div>",
  id: "testing.35",
  shape: "Some of the green circles",
  // adjective: "small",
  phrase: "wug.",
  condition: "some_true"
  },

  { subject: "<div class='wug1a'></div>"
  + "<div class='wug2b'></div>"
  + "<div class='wug3a'></div>"
  + "<div class='wug4a'></div>",
  id: "testing.36",
  shape: "Some of the green circles",
  // adjective: "small",
  phrase: "wug.",
  condition: "some_true"
  },

  // some (false controls)

  { subject: "<div class='wug1d'></div>"
  + "<div class='wug2d'></div>"
  + "<div class='wug3c'></div>"
  + "<div class='wug4c'></div>",
  id: "testing.37",
  shape: "Some of the green circles",
  // adjective: "small",
  phrase: "wug.",
  condition: "some_false"
  },

  { subject: "<div class='wug1b'></div>"
  + "<div class='wug2a'></div>"
  + "<div class='wug3b'></div>"
  + "<div class='wug4a'></div>",
  id: "testing.38",
  shape: "Some of the green circles",
  // adjective: "small",
  phrase: "wug.",
  condition: "some_false"
  },

  // { subject: "<div class='wug1b'></div>"
  // + "<div class='wug2a'></div>"
  // + "<div class='wug3a'></div>"
  // + "<div class='wug4b'></div>",
  // id: "testing.35",
  // shape: "Some of the green circles",
  // // adjective: "small",
  // phrase: "wug.",
  // condition: "some_true"
  // },

  // { subject: "<div class='wug1b'></div>"
  // + "<div class='wug2a'></div>"
  // + "<div class='wug3a'></div>"
  // + "<div class='wug4a'></div>",
  // id: "testing.36",
  // shape: "Some of the green circles",
  // // adjective: "small",
  // phrase: "wug.",
  // condition: "some_true"
  // },



];


var test_weird = [

  // weird cases

  { subject: "<div class='wug1b'></div>"
  + "<div class='wug2b'></div>"
  + "<div class='wug3a'></div>"
  + "<div class='wug4b'></div>",
  id: "testing.39",
  shape: "None of the green circles",
  // adjective: "small",
  phrase: "wug.",
  condition: "none_weird_red"
  },


  { subject: "<div class='wug1a'></div>"
  + "<div class='wug2b'></div>"
  + "<div class='wug3b'></div>"
  + "<div class='wug4b'></div>",
  id: "testing.40",
  shape: "Every green circle",
  // adjective: "small",
  phrase: "wugs.",
  condition: "every_weird_red"
  },
 
  { subject: "<div class='dot5'></div>"
  + "<div class='dot7'></div>"
  + "<div class='dot10'></div>"
  + "<div class='dot11'></div>",
  id: "testing.41",
  shape: "None of the green circles",
  // adjective: "small",
  phrase: "wug.",
  condition: "none_weird_nored"
  },

  { subject: "<div class='dot12'></div>"
  + "<div class='dot9'></div>"
  + "<div class='dot7'></div>"
  + "<div class='dot11'></div>",
  id: "testing.42",
  shape: "Every green circle",
  // adjective: "small",
  phrase: "wugs.",
  condition: "every_weird_nored"
  },



];