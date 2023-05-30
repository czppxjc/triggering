// this is an array with all of the materials to be presented, order doesn't
// matter since this will be randomized.  each item needs a unique ID

var teach = [
  {
    subject: "<div class='dot dot1 toup1'></div>",
    linetype: "<div class='line redline'></div>",
    id: "teaching.1",
    shape: "The green circle",
    //adjective: "small",
    phrase: "wugs."
  },

  {
    subject: "<div class='dot dot3 toup3'></div>",
    linetype: "<div class='line redline'></div>",
    id: "teaching.2",
    shape: "The green circle",
    //adjective: "small",
    phrase: "wugs."
  },


  {
    subject: "<div class='dot dot4 toup4'></div>",
    linetype: "<div class='line redline'></div>",
    id: "teaching.3",
    shape: "The green circle",
    //adjective: "small",
    phrase: "wugs."
  },

  {
    subject: "<div class='dot dot6 toup6'></div>",
    linetype: "<div class='line redline'></div>",
    id: "teaching.4",
    shape: "The green circle",
    //adjective: "small",
    phrase: "wugs."
  },

  {
    subject: "<div class='dot dot2 toup2'></div>",
    linetype: "<div class='line blueline'></div>",
    id: "teaching.5",
    shape: "The green circle",
    //adjective: "small",
    phrase: "does not wug."
  },

  {
    subject: "<div class='dot dot3 toup1'></div>",
    linetype: "<div class='line blueline'></div>",
    id: "teaching.6",
    shape: "The green circle",
    //adjective: "small",
    phrase: "does not wug."
  },


  {
    subject: "<div class='dot dot5 toup5'></div>",
    linetype: "<div class='line blueline'></div>",
    id: "teaching.7",
    shape: "The green circle",
    //adjective: "small",
    phrase: "does not wug."
  },

  {
    subject: "<div class='dot dot6 toup4'></div>",
    linetype: "<div class='line blueline'></div>",
    id: "teaching.8",
    shape: "The green circle",
    //adjective: "small",
    phrase: "does not wug."
  },
];


var test_first = [
  {
    subject: "<div class='dot dot5 toup5'></div>",
    linetype: "<div class='line redline'></div>",
    id: "testing.1",
    shape: "The green circle",
    //adjective: "small",
    phrase: "does not wug.",
    condition: "AB"
  },

  {
    subject: "<div class='dot dot2 toup2'></div>",
    linetype: "<div class='line redline'></div>",
    id: "testing.2",
    shape: "The green circle",
    //adjective: "small",
    phrase: "wugs.",
    condition: "AB"
  },

  {
    subject: "<div class='dot dot4 toup2'></div>",
    linetype: "<div class='line blueline'></div>",
    id: "testing.5",
    shape: "The green circle",
    //adjective: "small",
    phrase: "does not wug.",
    condition: "AnotB"
  },

  {
    subject: "<div class='dot dot1 toup3'></div>",
    linetype: "<div class='line blueline'></div>",
    id: "testing.6",
    shape: "The green circle",
    //adjective: "small",
    phrase: "wugs.",
    condition: "AnotB"
  },
];


var test = [
  {
    subject: "<div class='dot dot1 todown1'></div>",
    linetype: "<div class='line redline'></div>",
    id: "testing.3",
    shape: "The green circle",
    // adjective: "small",
    phrase: "does not wug.",
    condition: "notAB"
  },

  {
    subject: "<div class='dot dot4 todown4'></div>",
    linetype: "<div class='line redline'></div>",
    id: "testing.4",
    shape: "The green circle",
    // adjective: "small",
    phrase: "wugs.",
    condition: "notAB"
  },

  {
    subject: "<div class='dot dot5 todown4'></div>",
    linetype: "<div class='line blueline'></div>",
    id: "testing.7",
    shape: "The green circle",
    // adjective: "small",
    phrase: "does not wug.",
    condition: "notAnotB"
  },

  {
    subject: "<div class='dot dot2 todown3'></div>",
    linetype: "<div class='line blueline'></div>",
    id: "testing.8",
    shape: "The green circle",
    // adjective: "small",
    phrase: "wugs.",
    condition: "notAnotB",
  },

  {
    subject: "<div class='dot dot3 toup6'></div>",
    linetype: "<div class='line redline'></div>",
    id: "testing.9",
    shape: "The green circle",
    // adjective: "small",
    phrase: "does not wug.",
    condition: "AB"
  },

  {
    subject: "<div class='dot dot5 toup2'></div>",
    linetype: "<div class='line redline'></div>",
    id: "testing.10",
    shape: "The green circle",
    // adjective: "small",
    phrase: "wugs.",
    condition: "AB"
  },

  {
    subject: "<div class='dot dot6 toup4'></div>",
    linetype: "<div class='line blueline'></div>",
    id: "testing.11",
    shape: "The green circle",
    // adjective: "small",
    phrase: "does not wug.",
    condition: "AnotB"
  },

  {
    subject: "<div class='dot dot4 toup3'></div>",
    linetype: "<div class='line blueline'></div>",
    id: "testing.12",
    shape: "The green circle",
    // adjective: "small",
    phrase: "wugs.",
    condition: "AnotB"
  },

  {
    subject: "<div class='dot dot2 todown2'></div>",
    linetype: "<div class='line redline'></div>",
    id: "testing.9",
    shape: "The green circle",
    // adjective: "small",
    phrase: "does not wug.",
    condition: "notAB"
  },

  {
    subject: "<div class='dot dot3 todown4'></div>",
    linetype: "<div class='line redline'></div>",
    id: "testing.10",
    shape: "The green circle",
    // adjective: "small",
    phrase: "wugs.",
    condition: "notAB"
  },
];


/*
var test_last = [

  { subject: "<div class='wug1b'></div>"
  + "<div class='wug2b'></div>"
  + "<div class='wug3b'></div>"
  + "<div class='wug4b'></div>",
  id: "testing.13",
  shape: "Every green circle",
  // adjective: "small",
  phrase: "wugs.",
  condition: "all_true_universal"
  },

  { subject: "<div class='wug1b'></div>"
  + "<div class='wug2b'></div>"
  + "<div class='wug3a'></div>"
  + "<div class='wug4a'></div>",
  id: "testing.14",
  shape: "Every green circle",
  // adjective: "small",
  phrase: "wugs.",
  condition: "all_false"
  },

  { subject: "<div class='wug1a'></div>"
  + "<div class='wug2a'></div>"
  + "<div class='wug3a'></div>"
  + "<div class='wug4a'></div>",
  id: "testing.15",
  shape: "None of the green circles",
  // adjective: "small",
  phrase: "wugs.",
  condition: "none_true_universal"
  },

  { subject: "<div class='wug1a'></div>"
  + "<div class='wug2b'></div>"
  + "<div class='wug3a'></div>"
  + "<div class='wug4b'></div>",
  id: "testing.16",
  shape: "None of the green circles",
  // adjective: "small",
  phrase: "wugs.",
  condition: "none_false"
  },

  { subject: "<div class='wug1b'></div>"
  + "<div class='wug2b'></div>"
  + "<div class='dot3b'></div>"
  + "<div class='wug4b'></div>",
  id: "testing.17",
  shape: "Every green circle",
  // adjective: "small",
  phrase: "wugs.",
  condition: "all_true_existential"
  },

  { subject: "<div class='wug1a'></div>"
  + "<div class='dot2a'></div>"
  + "<div class='wug3a'></div>"
  + "<div class='wug4a'></div>",
  id: "testing.18",
  shape: "None of the green circles",
  // adjective: "small",
  phrase: "wugs.",
  condition: "none_true_existential"
  },

  { subject: "<div class='dot1a'></div>"
  + "<div class='dot2a'></div>"
  + "<div class='dot3b'></div>"
  + "<div class='dot4b'></div>",
  id: "testing.19",
  shape: "None of the green circles",
  // adjective: "small",
  phrase: "wugs.",
  condition: "none_true_no_projection"
  },

  { subject: "<div class='dot7'></div>"
  + "<div class='dot8'></div>"
  + "<div class='dot5'></div>"
  + "<div class='dot6'></div>",
  id: "testing.20",
  shape: "Every green circles",
  // adjective: "small",
  phrase: "wugs.",
  condition: "all_true_no_projection"
  },
];
*/
