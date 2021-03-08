// this is an array with all of the materials to be presented, order doesn't
// matter since this will be randomized.  each item needs a unique ID





var test = [

  { subject: "<div class='wug1'></div>",
 id: "testing.1",
 shape: "The green circle",
 //adjective: "small",
 phrase: "moves from red upward.",
 condition: "AB"
},

{ subject: "<div class='wug2'></div>",
id: "testing.2",
shape: "The green circle",
//adjective: "small",
phrase: "does not move from red upward.",
condition: "AB"
},


{ subject: "<div class='wug3'></div>",
id: "testing.3",
shape: "The green circle",
//adjective: "small",
phrase: "moves from red upward.",
condition: "AB"
},


{ subject: "<div class='wug4'></div>",
id: "testing.4",
shape: "The green circle",
//adjective: "small",
phrase: "does not move from red upward.",
condition: "AB"
},

{ subject: "<div class='dot1'></div>",
id: "testing.5",
shape: "The green circle",
//adjective: "small",
phrase: "moves from red upward.",
condition: "notAB"
},

{ subject: "<div class='dot2'></div>",
id: "testing.6",
shape: "The green circle",
//adjective: "small",
phrase: "does not move from red upward.",
condition: "notAB"
},


{ subject: "<div class='dot3'></div>",
id: "testing.7",
shape: "The green circle",
//adjective: "small",
phrase: "moves from red upward.",
condition: "notAB"
},

{ subject: "<div class='dot4'></div>",
id: "testing.8",
shape: "The green circle",
//adjective: "small",
phrase: "does not move from red upward.",
condition: "notAB"
},

    { subject: "<div class='wug1b'></div>",
   id: "testing.9",
   shape: "The green circle",
   //adjective: "small",
   phrase: "moves from red upward.",
   condition: "AnotB"
  },

  { subject: "<div class='wug2b'></div>",
  id: "testing.10",
  shape: "The green circle",
  //adjective: "small",
  phrase: "moves from red upward.",
  condition: "AnotB"
  },


  { subject: "<div class='wug3b'></div>",
  id: "testing.11",
  shape: "The green circle",
  //adjective: "small",
  phrase: "does not move from red upward.",
  condition: "AnotB"
  },

  { subject: "<div class='wug4b'></div>",
  id: "testing.12",
  shape: "The green circle",
  //adjective: "small",
  phrase: "does not move from red upward.",
  condition: "AnotB"
  },



  { subject: "<div class='dot2a'></div>",
  id: "testing.13",
  shape: "The green circle",
  // adjective: "small",
  phrase: "moves from red upward.",
  condition: "notAnotB"
  },

  { subject: "<div class='dot3a'></div>",
  id: "testing.14",
  shape: "The green circle",
  // adjective: "small",
  phrase: "moves from red upward.",
  condition: "notAnotB"
  },

  { subject: "<div class='dot1a'></div>",
  id: "testing.15",
  shape: "The green circle",
  // adjective: "small",
  phrase: "does not move from red upward.",
  condition: "notAnotB"
  },

  { subject: "<div class='dot4a'></div>",
  id: "testing.16",
  shape: "The green circle",
  // adjective: "small",
  phrase: "does not move from red upward.",
  condition: "notAnotB"
  },

];

var test_last = [

  { subject: "<div class='wug1b'></div>"
  + "<div class='wug2b'></div>"
  + "<div class='wug3b'></div>"
  + "<div class='wug4b'></div>",
  id: "testing.17",
  shape: "Every green circle",
  // adjective: "small",
  phrase: "moves from red upward.",
  condition: "all_true_existential"
  },

  { subject: "<div class='wug1b'></div>"
  + "<div class='wug2b'></div>"
  + "<div class='wug3a'></div>"
  + "<div class='wug4a'></div>",
  id: "testing.18",
  shape: "Every green circle",
  // adjective: "small",
  phrase: "moves from red upward.",
  condition: "all_true_universal"
  },


  { subject: "<div class='wug1a'></div>"
  + "<div class='wug2a'></div>"
  + "<div class='wug3a'></div>"
  + "<div class='wug4a'></div>",
  id: "testing.19",
  shape: "Every green circle",
  // adjective: "small",
  phrase: "moves from red upward.",
  condition: "all_true_no_projection"
  },

  { subject: "<div class='dot1'></div>"
  + "<div class='dot2'></div>"
  + "<div class='dot3'></div>"
  + "<div class='wug4'></div>",
  id: "testing.20",
  shape: "None of the green circles",
  // adjective: "small",
  phrase: "moves from red upward.",
  condition: "none_false"
  },

  { subject: "<div class='wug1b'></div>"
  + "<div class='wug2b'></div>"
  + "<div class='dot3b'></div>"
  + "<div class='wug4b'></div>",
  id: "testing.21",
  shape: "Every green circle",
  // adjective: "small",
  phrase: "moves from red upward.",
  condition: "all_false"
  },

  { subject: "<div class='dot1a'></div>"
  + "<div class='dot2a'></div>"
  + "<div class='dot3a'></div>"
  + "<div class='dot4a'></div>",
  id: "testing.22",
  shape: "None of the green circles",
  // adjective: "small",
  phrase: "moves from red upward.",
  condition: "none_true_existential"
  },

  { subject: "<div class='dot1a'></div>"
  + "<div class='dot2a'></div>"
  + "<div class='dot3b'></div>"
  + "<div class='dot4b'></div>",
  id: "testing.23",
  shape: "None of the green circles",
  // adjective: "small",
  phrase: "moves from red upward.",
  condition: "none_true_no_projection"
  },

  { subject: "<div class='dot7'></div>"
  + "<div class='dot8'></div>"
  + "<div class='dot5'></div>"
  + "<div class='dot6'></div>",
  id: "testing.24",
  shape: "None of the green circles",
  // adjective: "small",
  phrase: "moves from red upward.",
  condition: "none_true_universal"
  },







];
