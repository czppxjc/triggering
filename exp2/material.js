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
  +  "<div class='center'></div>"
  +  "<div class='dot12_green'></div></div>",
  id: "teaching.1",
  shape: "green circle",
  adjective: "small",
  phrase: "wugged."
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
  +  "<div class='center'></div>"
  +  "<div class='dot23'></div></div>",
  id: "teaching.2",
  shape: "black circle",
  adjective: "small",
  phrase: "wugged."
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
  +  "<div class='center'></div>"
  +  "<div class='dot34_yellow'></div></div>",
  id: "teaching.3",
  shape: "yellow circle",
  adjective: "small",
  phrase: "wugged."
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
  +  "<div class='center'></div>"
  +  "<div class='dot34_green'></div></div>",
  id: "teaching.4",
  adjective: "small",
  shape: "green circle",
  phrase: "wugged."
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
  +  "<div class='center'></div>"
  +  "<div class='dot67'></div></div>",
  id: "teaching.5",
  adjective: "small",
  shape: "black circle",
  phrase: "wugged."
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
  +  "<div class='center'></div>"
  +  "<div class='dot78_yellow'></div></div>",
  id: "teaching.6",
  adjective: "small",
  shape: "yellow circle",
  phrase: "wugged."
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
  +  "<div class='center'></div>"
  +  "<div class='dot56_green'></div></div>",
  id: "testing.1",
  adjective: "small",
  shape: "green circle",
  phrase: "wugged.",
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
  +  "<div class='center'></div>"
  +  "<div class='dot21'></div></div>",
  id: "testing.2",
  adjective: "small",
  shape: "black circle",
  phrase: "wugged.",
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
  +  "<div class='center'></div>"
  +  "<div class='dot67_yellow'></div></div>",
  id: "testing.3",
  adjective: "small",
  shape: "yellow circle",
  phrase: "did not wug.",
  condition: "ABneg"
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
  +  "<div class='center'></div>"
  +  "<div class='dot43_green'></div></div>",
  id: "testing.4",
  shape: "green circle",
  adjective: "small",
  phrase: "did not wug.",
  condition: "notAnotBneg"
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
  +  "<div class='center'></div>"
  +  "<div class='dot76'></div></div>",
  id: "testing.5",
  adjective: "small",
  shape: "black circle",
  condition: "notAB",
  phrase: "wugged."
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
  +  "<div class='center'></div>"
  +  "<div class='dot32_yellow'></div></div>",
  id: "testing.6",
  shape: "yellow circle",
  adjective: "small",
  condition: "notAB",
  phrase: "wugged."
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
    +  "<div class='center'></div>"
    +  "<div class='dot54_green'></div></div>",
    id: "testing.7",
    shape: "green circle",
    adjective: "small",
    phrase: "wugged.",
    condition: "notAB"
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
    +  "<div class='center'></div>"
    +  "<div class='dot43'></div></div>",
    id: "testing.8",
    adjective: "small",
    shape: "black circle",
    condition: "notABneg",
    phrase: "did not wug."
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
    +  "<div class='center'></div>"
    +  "<div class='dot65_yellow'></div></div>",
    id: "testing.9",
    shape: "yellow circle",
    adjective: "small",
    condition: "notABneg",
    phrase: "did not wug."
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
      +  "<div class='center'></div>"
      +  "<div class='dot32_green'></div></div>",
      id: "testing.10",
      shape: "green circle",
      adjective: "small",
      phrase: "did not wug.",
      condition: "notABneg"
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
      +  "<div class='center'></div>"
      +  "<div class='dot56'></div></div>",
      id: "testing.11",
      phrase: "wugged.",
      adjective: "small",
      shape: "black circle",
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
        +  "<div class='center'></div>"
        +  "<div class='dot45_yellow'></div></div>",
        id: "testing.12",
        phrase: "wugged.",
        shape: "yellow circle",
        adjective: "small",
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
          +  "<div class='center'></div>"
          +  "<div class='dot78_green'></div></div>",
          id: "testing.13",
          shape: "green circle",
          phrase: "wugged.",
          adjective: "small",
          condition: "AnotB_grey"
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
          +  "<div class='center'></div>"
          +  "<div class='dot67'></div></div>",
          id: "testing.14",
          phrase: "did not wug.",
          adjective: "small",
          shape: "black circle",
          condition: "AnotB_greyneg"
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
            +  "<div class='center'></div>"
            +  "<div class='dot12_yellow'></div></div>",
            id: "testing.15",
            phrase: "did not wug.",
            shape: "yellow circle",
            adjective: "small",
            condition: "AnotB_greyneg"
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
              +  "<div class='center'></div>"
              +  "<div class='dot23_green'></div></div>",
              id: "testing.16",
              shape: "green circle",
              phrase: "did not wug.",
              adjective: "small",
              condition: "AnotB_greyneg"
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
          +  "<div class='center'></div>"
          +  "<div class='dot56'></div></div>",
          id: "testing.17",
          shape: "red circle",
          adjective: "small",
          phrase: "wugged.",
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
            +  "<div class='center'></div>"
            +  "<div class='dot12_yellow'></div></div>",
            id: "testing.18",
            shape: "yellow circle",
            adjective: "small",
            phrase: "wugged.",
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
              +  "<div class='center'></div>"
              +  "<div class='dot67_green'></div></div>",
              id: "testing.19",
              shape: "green circle",
              adjective: "small",
              phrase: "wugged.",
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
              +  "<div class='center'></div>"
              +  "<div class='dot67'></div></div>",
              id: "testing.20",
              shape: "black circle",
              adjective: "small",
              phrase: "did not wug.",
              condition: "AnotB_redneg"
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
                +  "<div class='center'></div>"
                +  "<div class='dot23_yellow'></div></div>",
                id: "testing.21",
                shape: "yellow circle",
                adjective: "small",
                phrase: "did not wug.",
                condition: "AnotB_redneg"
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
                  +  "<div class='center'></div>"
                  +  "<div class='dot45_green'></div></div>",
                  id: "testing.22",
                  shape: "green circle",
                  adjective: "small",
                  phrase: "did not wug.",
                  condition: "AnotB_redneg"
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
            +  "<div class='center'></div>"
            +  "<div class='dot23'></div></div>",
            id: "testing.23",
            phrase: "wugged.",
            adjective: "small",
            shape: "black circle",
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
              +  "<div class='center'></div>"
              +  "<div class='dot45_yellow'></div></div>",
              id: "testing.24",
              phrase: "wugged.",
              adjective: "small",
              shape: "yellow circle",
              condition: "AB"
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
              +  "<div class='center'></div>"
              +  "<div class='dot78_green'></div></div>",
              id: "testing.25",
              shape: "green circle",
              adjective: "small",
              phrase: "did not wug.",
              condition: "ABneg"
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
                +  "<div class='center'></div>"
                +  "<div class='dot67'></div></div>",
                id: "testing.26",
                phrase: "did not wug.",
                adjective: "small",
                shape: "red circle",
                condition: "ABneg"
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
              +  "<div class='center'></div>"
              +  "<div class='dot43_green'></div></div>",
              id: "testing.27",
              phrase: "wugged.",
              adjective: "small",
              shape: "green circle",
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
              +  "<div class='center'></div>"
              +  "<div class='dot76'></div></div>",
              id: "testing.28",
              phrase: "wugged.",
              adjective: "small",
              shape: "black circle",
              condition: "notAnotB"
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
                            +  "<div class='center'></div>"
                            +  "<div class='dot32_yellow'></div></div>",
                            id: "testing.29",
                            adjective: "small",
                            phrase: "did not wug.",
                            shape: "yellow circle",
                            condition: "notAnotBneg"
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
                            +  "<div class='center'></div>"
                            +  "<div class='dot54_green'></div></div>",
                            id: "testing.30",
                            phrase: "did not wug.",
                            adjective: "small",
                            shape: "green circle",
                            condition: "notAnotBneg"
                            },

];
