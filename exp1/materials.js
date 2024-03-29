// this is an array with all of the materials to be presented, order doesn't
// matter since this will be randomized.  each item needs a unique ID


var teach = [


  { subject: "<div class='container3'><div class='palette'>"
  +  "<div class='color1_red'></div>"
  +  "<div class='color2'></div>"
  +  "<div class='color3'></div>"
  +  "<div class='color4'></div>"
  +  "<div class='color5'></div>"
  +  "<div class='color6'></div>"
  +  "<div class='color7'></div>"
  +  "<div class='color8'></div></div>"
  +  "<div class='dot12'></div></div>",
  id: "teaching.1",
  shape: "dot"
  },

  { subject: "<div class='container3'><div class='palette'>"
  +  "<div class='color1'></div>"
  +  "<div class='color2_red'></div>"
  +  "<div class='color3'></div>"
  +  "<div class='color4'></div>"
  +  "<div class='color5'></div>"
  +  "<div class='color6'></div>"
  +  "<div class='color7'></div>"
  +  "<div class='color8'></div></div>"
  +  "<div class='dot23'></div></div>",
  id: "teaching.2",
  shape: "dot"
  },

  { subject: "<div class='container3'><div class='palette'>"
  +  "<div class='color1'></div>"
  +  "<div class='color2'></div>"
  +  "<div class='color3_red'></div>"
  +  "<div class='color4'></div>"
  +  "<div class='color5'></div>"
  +  "<div class='color6'></div>"
  +  "<div class='color7'></div>"
  +  "<div class='color8'></div></div>"
  +  "<div class='dot34'></div></div>",
  id: "teaching.3",
  shape: "dot"
  },

  { subject: "<div class='container3'><div class='palette'>"
  +  "<div class='color1'></div>"
  +  "<div class='color2'></div>"
  +  "<div class='color3'></div>"
  +  "<div class='color4_red'></div>"
  +  "<div class='color5'></div>"
  +  "<div class='color6'></div>"
  +  "<div class='color7'></div>"
  +  "<div class='color8'></div></div>"
  +  "<div class='dot45'></div></div>",
  id: "teaching.4",
  shape: "dot"
  },

  { subject: "<div class='container3'><div class='palette'>"
  +  "<div class='color1'></div>"
  +  "<div class='color2'></div>"
  +  "<div class='color3'></div>"
  +  "<div class='color4'></div>"
  +  "<div class='color5'></div>"
  +  "<div class='color6_red'></div>"
  +  "<div class='color7'></div>"
  +  "<div class='color8'></div></div>"
  +  "<div class='dot67'></div></div>",
  id: "teaching.5",
  shape: "dot"
  },


  { subject: "<div class='container3'><div class='palette'>"
  +  "<div class='color1'></div>"
  +  "<div class='color2'></div>"
  +  "<div class='color3'></div>"
  +  "<div class='color4'></div>"
  +  "<div class='color5'></div>"
  +  "<div class='color6'></div>"
  +  "<div class='color7_red'></div>"
  +  "<div class='color8'></div></div>"
  +  "<div class='dot78'></div></div>",
  id: "teaching.6",
  shape: "dot"
  },

];

var test_first = [

  { subject: "<div class='container3'><div class='palette'>"
  +  "<div class='color1'></div>"
  +  "<div class='color2'></div>"
  +  "<div class='color3'></div>"
  +  "<div class='color4'></div>"
  +  "<div class='color5_red'></div>"
  +  "<div class='color6'></div>"
  +  "<div class='color7'></div>"
  +  "<div class='color8'></div></div>"
  +  "<div class='dot56'></div></div>",
  id: "testing.1",
  shape: "dot",
  condition: "AB"
  },

  { subject: "<div class='container3'><div class='palette'>"
  +  "<div class='color1_red'></div>"
  +  "<div class='color2'></div>"
  +  "<div class='color3'></div>"
  +  "<div class='color4'></div>"
  +  "<div class='color5'></div>"
  +  "<div class='color6'></div>"
  +  "<div class='color7'></div>"
  +  "<div class='color8'></div></div>"
  +  "<div class='dot21'></div></div>",
  id: "testing.2",
  shape: "dot",
  condition: "notAnotB"
  },


];
// A clockwise, B red-grey
var test = [


  { subject: "<div class='container3'><div class='palette'>"
  +  "<div class='color1'></div>"
  +  "<div class='color2'></div>"
  +  "<div class='color3'></div>"
  +  "<div class='color4'></div>"
  +  "<div class='color5'></div>"
  +  "<div class='color6'></div>"
  +  "<div class='color7_red'></div>"
  +  "<div class='color8'></div></div>"
  +  "<div class='dot76'></div></div>",
  id: "testing.3",
  shape: "dot",
  condition: "notAB"
  },

  { subject: "<div class='container3'><div class='palette'>"
  +  "<div class='color1'></div>"
  +  "<div class='color2'></div>"
  +  "<div class='color3_red'></div>"
  +  "<div class='color4'></div>"
  +  "<div class='color5'></div>"
  +  "<div class='color6'></div>"
  +  "<div class='color7'></div>"
  +  "<div class='color8'></div></div>"
  +  "<div class='dot32'></div></div>",
  id: "testing.4",
  shape: "dot",
  condition: "notAB"
  },


    { subject: "<div class='container3'><div class='palette'>"
    +  "<div class='color1'></div>"
    +  "<div class='color2'></div>"
    +  "<div class='color3'></div>"
    +  "<div class='color4'></div>"
    +  "<div class='color5_red'></div>"
    +  "<div class='color6'></div>"
    +  "<div class='color7'></div>"
    +  "<div class='color8'></div></div>"
    +  "<div class='dot54'></div></div>",
    id: "testing.5",
    shape: "dot",
    condition: "notAB"
    },



      { subject: "<div class='container3'><div class='palette'>"
      +  "<div class='color1'></div>"
      +  "<div class='color2_red'></div>"
      +  "<div class='color3'></div>"
      +  "<div class='color4'></div>"
      +  "<div class='color5'></div>"
      +  "<div class='color6'></div>"
      +  "<div class='color7'></div>"
      +  "<div class='color8'></div></div>"
      +  "<div class='dot56'></div></div>",
      id: "testing.6",
      shape: "dot",
      condition: "AnotB_grey"
      },


        { subject: "<div class='container3'><div class='palette'>"
        +  "<div class='color1'></div>"
        +  "<div class='color2'></div>"
        +  "<div class='color3'></div>"
        +  "<div class='color4'></div>"
        +  "<div class='color5'></div>"
        +  "<div class='color6'></div>"
        +  "<div class='color7_red'></div>"
        +  "<div class='color8'></div></div>"
        +  "<div class='dot45'></div></div>",
        id: "testing.7",
        shape: "dot",
        condition: "AnotB_grey"
        },



          { subject: "<div class='container3'><div class='palette'>"
          +  "<div class='color1'></div>"
          +  "<div class='color2'></div>"
          +  "<div class='color3'></div>"
          +  "<div class='color4'></div>"
          +  "<div class='color5_red'></div>"
          +  "<div class='color6'></div>"
          +  "<div class='color7'></div>"
          +  "<div class='color8'></div></div>"
          +  "<div class='dot78'></div></div>",
          id: "testing.8",
          shape: "dot",
          condition: "AnotB_grey"
          },

          { subject: "<div class='container3'><div class='palette'>"
          +  "<div class='color1'></div>"
          +  "<div class='color2'></div>"
          +  "<div class='color3'></div>"
          +  "<div class='color4'></div>"
          +  "<div class='color5'></div>"
          +  "<div class='color6_red'></div>"
          +  "<div class='color7'></div>"
          +  "<div class='color8'></div></div>"
          +  "<div class='dot56'></div></div>",
          id: "testing.9",
          shape: "dot",
          condition: "AnotB_red"
          },


            { subject: "<div class='container3'><div class='palette'>"
            +  "<div class='color1'></div>"
            +  "<div class='color2_red'></div>"
            +  "<div class='color3'></div>"
            +  "<div class='color4'></div>"
            +  "<div class='color5'></div>"
            +  "<div class='color6'></div>"
            +  "<div class='color7'></div>"
            +  "<div class='color8'></div></div>"
            +  "<div class='dot12'></div></div>",
            id: "testing.10",
            shape: "dot",
            condition: "AnotB_red"
            },



              { subject: "<div class='container3'><div class='palette'>"
              +  "<div class='color1'></div>"
              +  "<div class='color2'></div>"
              +  "<div class='color3'></div>"
              +  "<div class='color4'></div>"
              +  "<div class='color5'></div>"
              +  "<div class='color6'></div>"
              +  "<div class='color7_red'></div>"
              +  "<div class='color8'></div></div>"
              +  "<div class='dot67'></div></div>",
              id: "testing.11",
              shape: "dot",
              condition: "AnotB_red"
              },


            { subject: "<div class='container3'><div class='palette'>"
            +  "<div class='color1'></div>"
            +  "<div class='color2_red'></div>"
            +  "<div class='color3'></div>"
            +  "<div class='color4'></div>"
            +  "<div class='color5'></div>"
            +  "<div class='color6'></div>"
            +  "<div class='color7'></div>"
            +  "<div class='color8'></div></div>"
            +  "<div class='dot23'></div></div>",
            id: "testing.12",
            shape: "dot",
            condition: "AB"
            },



              { subject: "<div class='container3'><div class='palette'>"
              +  "<div class='color1'></div>"
              +  "<div class='color2'></div>"
              +  "<div class='color3'></div>"
              +  "<div class='color4_red'></div>"
              +  "<div class='color5'></div>"
              +  "<div class='color6'></div>"
              +  "<div class='color7'></div>"
              +  "<div class='color8'></div></div>"
              +  "<div class='dot45'></div></div>",
              id: "testing.13",
              shape: "dot",
              condition: "AB"
              },




              { subject: "<div class='container3'><div class='palette'>"
              +  "<div class='color1'></div>"
              +  "<div class='color2'></div>"
              +  "<div class='color3_red'></div>"
              +  "<div class='color4'></div>"
              +  "<div class='color5'></div>"
              +  "<div class='color6'></div>"
              +  "<div class='color7'></div>"
              +  "<div class='color8'></div></div>"
              +  "<div class='dot43'></div></div>",
              id: "testing.14",
              shape: "dot",
              condition: "notAnotB"
              },



              { subject: "<div class='container3'><div class='palette'>"
              +  "<div class='color1'></div>"
              +  "<div class='color2'></div>"
              +  "<div class='color3'></div>"
              +  "<div class='color4'></div>"
              +  "<div class='color5'></div>"
              +  "<div class='color6_red'></div>"
              +  "<div class='color7'></div>"
              +  "<div class='color8'></div></div>"
              +  "<div class='dot76'></div></div>",
              id: "testing.15",
              shape: "dot",
              condition: "notAnotB"
              },

];
