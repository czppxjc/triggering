// this is an array with all of the materials to be presented, order doesn't
// matter since this will be randomized.  each item needs a unique ID


var teach = [


  { subject: "<div class='box1'></div>"
  + "<div class='box2'></div>"
  + "<div class='box3'></div>"
  + "<div class='box4'></div>"
  + "<div class='box5'></div>"
  + "<div class='box6'></div>"
  + "<div class='box7'></div>"
  + "<div class='box8'></div>"
  + "<div class='box9'></div>"
  + "<div class='square78'></div>",
  id: "teaching.1",
  nickname: "square78",
  adjective: "red",
  shape: "square",
  phrase: "wugged."
  },


  { subject: "<div class='box1'></div>"
  + "<div class='box2'></div>"
  + "<div class='box3'></div>"
  + "<div class='box4'></div>"
  + "<div class='box5'></div>"
  + "<div class='box6'></div>"
  + "<div class='box7'></div>"
  + "<div class='box8'></div>"
  + "<div class='box9'></div>"
  + "<div class='dot78'></div>",
  id: "teaching.2",
  nickname: "dot78",
  adjective: "red",
  shape: "circle",
  phrase: "wugged."
  },

  { subject: "<div class='box1'></div>"
  + "<div class='box2'></div>"
  + "<div class='box3'></div>"
  + "<div class='box4'></div>"
  + "<div class='box5'></div>"
  + "<div class='box6'></div>"
  + "<div class='box7'></div>"
  + "<div class='box8'></div>"
  + "<div class='box9'></div>"
  + "<div class='dot78_blue'></div>",
  id: "teaching.2",
  nickname: "dot78",
  adjective: "blue",
  shape: "circle",
  phrase: "wugged."
  },



];


var test = [


  { subject: "<div class='box1'></div>"
  + "<div class='box2'></div>"
  + "<div class='box3'></div>"
  + "<div class='box4'></div>"
  + "<div class='box5'></div>"
  + "<div class='box6'></div>"
  + "<div class='box7'></div>"
  + "<div class='box8'></div>"
  + "<div class='box9'></div>"
  + "<div class='square78_blue'></div>",
  id: "testing.5",
  nickname: "square78",
  adjective: "blue",
  shape: "square",
  phrase: "wugged.",
  condition: "AB"
  },



  { subject: "<div class='box1'></div>"
  + "<div class='box2'></div>"
  + "<div class='box3'></div>"
  + "<div class='box4'></div>"
  + "<div class='box5'></div>"
  + "<div class='box6'></div>"
  + "<div class='box7'></div>"
  + "<div class='box8'></div>"
  + "<div class='box9'></div>"
  + "<div class='square45'></div>",
  id: "testing.3",
  adjective: "red",
  shape: "square",
  phrase: "wugged.",
  condition: "notAB"
  },

  { subject: "<div class='box1'></div>"
  + "<div class='box2'></div>"
  + "<div class='box3'></div>"
  + "<div class='box4'></div>"
  + "<div class='box5'></div>"
  + "<div class='box6'></div>"
  + "<div class='box7'></div>"
  + "<div class='box8'></div>"
  + "<div class='box9'></div>"
  + "<div class='dot45_blue'></div>",
  id: "testing.3",
  adjective: "blue",
  shape: "circle",
  phrase: "did not wug.",
  condition: "notAB_neg"
  },

  { subject: "<div class='box1'></div>"
  + "<div class='box2'></div>"
  + "<div class='box3'></div>"
  + "<div class='box4'></div>"
  + "<div class='box5'></div>"
  + "<div class='box6'></div>"
  + "<div class='box7'></div>"
  + "<div class='box8'></div>"
  + "<div class='box9'></div>"
  + "<div class='square23'></div>",
  id: "testing.4",
  adjective: "red",
  shape: "square",
  phrase: "did not wug.",
  condition: "notAB_neg"
  },

  { subject: "<div class='box1'></div>"
  + "<div class='box2'></div>"
  + "<div class='box3'></div>"
  + "<div class='box4'></div>"
  + "<div class='box5'></div>"
  + "<div class='box6'></div>"
  + "<div class='box7'></div>"
  + "<div class='box8'></div>"
  + "<div class='box9'></div>"
  + "<div class='square54'></div>",
  id: "testing.5",
  adjective: "red",
  shape: "square",
  phrase: "wugged.",
  condition: "notAB_neg"
  },

  { subject: "<div class='box1'></div>"
  + "<div class='box2'></div>"
  + "<div class='box3'></div>"
  + "<div class='box4'></div>"
  + "<div class='box5'></div>"
  + "<div class='box6'></div>"
  + "<div class='box7'></div>"
  + "<div class='box8'></div>"
  + "<div class='box9'></div>"
  + "<div class='square12'></div>",
  id: "testing.5",
  adjective: "red",
  shape: "square",
  phrase: "did not wug.",
  condition: "notAB_neg"
  },

  { subject: "<div class='box1'></div>"
  + "<div class='box2'></div>"
  + "<div class='box3'></div>"
  + "<div class='box4'></div>"
  + "<div class='box5'></div>"
  + "<div class='box6'></div>"
  + "<div class='box7'></div>"
  + "<div class='box8'></div>"
  + "<div class='box9'></div>"
  + "<div class='square14'></div>",
  id: "testing.5",
  adjective: "red",
  shape: "square",
  phrase: "wugged.",
  condition: "notAB"
  },

  { subject: "<div class='box1'></div>"
  + "<div class='box2'></div>"
  + "<div class='box3'></div>"
  + "<div class='box4'></div>"
  + "<div class='box5'></div>"
  + "<div class='box6'></div>"
  + "<div class='box7'></div>"
  + "<div class='box8'></div>"
  + "<div class='box9'></div>"
  + "<div class='square74'></div>",
  id: "testing.5",
  adjective: "red",
  shape: "square",
  phrase: "did not wug.",
  condition: "AnotB_neg"
  },

  { subject: "<div class='box1'></div>"
  + "<div class='box2'></div>"
  + "<div class='box3'></div>"
  + "<div class='box4'></div>"
  + "<div class='box5'></div>"
  + "<div class='box6'></div>"
  + "<div class='box7'></div>"
  + "<div class='box8'></div>"
  + "<div class='box9'></div>"
  + "<div class='dot74_blue'></div>",
  id: "testing.5",
  adjective: "blue",
  shape: "circle",
  phrase: "wugged.",
  condition: "AnotB"
  },



];
