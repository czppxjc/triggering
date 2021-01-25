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
  + "<div class='box10'></div>"
  + "<div class='box11'></div>"
  + "<div class='box12'></div>"
  + "<div class='box13'></div>"
  + "<div class='box14'></div>"
  + "<div class='box15'></div>"
  + "<div class='box16'></div>"
  + "<div class='slide78'></div>",
  id: "teaching.1",
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
  + "<div class='box10'></div>"
  + "<div class='box11'></div>"
  + "<div class='box12'></div>"
  + "<div class='box13'></div>"
  + "<div class='box14'></div>"
  + "<div class='box15'></div>"
  + "<div class='box16'></div>"
  + "<div class='slide1011_blue'></div>",
  id: "teaching.2",
  adjective: "blue",
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
  + "<div class='box10'></div>"
  + "<div class='box11'></div>"
  + "<div class='box12'></div>"
  + "<div class='box13'></div>"
  + "<div class='box14'></div>"
  + "<div class='box15'></div>"
  + "<div class='box16'></div>"
  + "<div class='dot1314'></div>",
  id: "teaching.3",
  adjective: "red",
  shape: "cirlce",
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
  + "<div class='box10'></div>"
  + "<div class='box11'></div>"
  + "<div class='box12'></div>"
  + "<div class='box13'></div>"
  + "<div class='box14'></div>"
  + "<div class='box15'></div>"
  + "<div class='box16'></div>"
  + "<div class='dot78_blue'></div>",
  id: "teaching.4",
  adjective: "blue",
  shape: "cirlce",
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
  + "<div class='box10'></div>"
  + "<div class='box11'></div>"
  + "<div class='box12'></div>"
  + "<div class='box13'></div>"
  + "<div class='box14'></div>"
  + "<div class='box15'></div>"
  + "<div class='box16'></div>"
  + "<div class='dot711'></div>",
  id: "testing.1",
  adjective: "red",
  shape: "cirlce",
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
  + "<div class='box10'></div>"
  + "<div class='box11'></div>"
  + "<div class='box12'></div>"
  + "<div class='box13'></div>"
  + "<div class='box14'></div>"
  + "<div class='box15'></div>"
  + "<div class='box16'></div>"
  + "<div class='slide1112_blue'></div>",
  id: "testing.2",
  adjective: "blue",
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
  + "<div class='box10'></div>"
  + "<div class='box11'></div>"
  + "<div class='box12'></div>"
  + "<div class='box13'></div>"
  + "<div class='box14'></div>"
  + "<div class='box15'></div>"
  + "<div class='box16'></div>"
  + "<div class='slide1516'></div>",
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
  + "<div class='box10'></div>"
  + "<div class='box11'></div>"
  + "<div class='box12'></div>"
  + "<div class='box13'></div>"
  + "<div class='box14'></div>"
  + "<div class='box15'></div>"
  + "<div class='box16'></div>"
  + "<div class='slide106'></div>",
  id: "testing.4",
  adjective: "red",
  shape: "square",
  phrase: "did not wug.",
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
  + "<div class='box10'></div>"
  + "<div class='box11'></div>"
  + "<div class='box12'></div>"
  + "<div class='box13'></div>"
  + "<div class='box14'></div>"
  + "<div class='box15'></div>"
  + "<div class='box16'></div>"
  + "<div class='slide1314_blue'></div>",
  id: "testing.5",
  adjective: "blue",
  shape: "square",
  phrase: "did not wug.",
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
  + "<div class='box10'></div>"
  + "<div class='box11'></div>"
  + "<div class='box12'></div>"
  + "<div class='box13'></div>"
  + "<div class='box14'></div>"
  + "<div class='box15'></div>"
  + "<div class='box16'></div>"
  + "<div class='dot1516'></div>",
  id: "testing.6",
  adjective: "red",
  shape: "circle",
  phrase: "did not wug.",
  condition: "notAB"
  },






];
