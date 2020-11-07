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
  shape: "dot",
  color: "green",
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
  shape: "dot",
  color: "black",
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
  shape: "dot",
  color: "yellow",
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
  +  "<div class='dot34_green'></div></div>",
  id: "teaching.4",
  color: "green",
  shape: "dot",
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
  +  "<div class='dot56'></div></div>",
  id: "teaching.5",
  color: "black",
  shape: "dot",
  phrase: "did not wug."
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
  +  "<div class='dot67_yellow'></div></div>",
  id: "teaching.6",
  color: "yellow",
  shape: "dot",
  phrase: "did not wug."
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
  color: "green",
  shape: "dot",
  phrase: "wugged.",
  condition: "AB"
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
  id: "testing.2",
  color: "yellow",
  shape: "dot",
  phrase: "did not wug.",
  condition: "ABneg"
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
            id: "testing.3",
            shape: "dot",
            phrase: "wugged.",
            color: "green",
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
            id: "testing.4",
            phrase: "did not wug.",
            color: "black",
            shape: "dot",
            condition: "AnotB_greyneg"
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
  color: "black",
  shape: "dot",
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
  shape: "dot",
  color: "yellow",
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
    shape: "dot",
    color: "green",
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
    color: "black",
    shape: "dot",
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
    shape: "dot",
    color: "yellow",
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
      shape: "dot",
      color: "green",
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
      color: "black",
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
        +  "<div class='center'></div>"
        +  "<div class='dot45_yellow'></div></div>",
        id: "testing.12",
        phrase: "wugged.",
        shape: "dot",
        color: "yellow",
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
            +  "<div class='dot12_yellow'></div></div>",
            id: "testing.13",
            phrase: "did not wug.",
            shape: "dot",
            color: "yellow",
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
              id: "testing.14",
              shape: "dot",
              phrase: "did not wug.",
              color: "green",
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
          id: "testing.15",
          shape: "dot",
          color: "black",
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
            id: "testing.16",
            shape: "dot",
            color: "yellow",
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
              id: "testing.17",
              shape: "dot",
              color: "green",
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
              id: "testing.18",
              shape: "dot",
              color: "black",
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
                id: "testing.19",
                shape: "dot",
                color: "yellow",
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
                  id: "testing.20",
                  shape: "dot",
                  color: "green",
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
            id: "testing.21",
            phrase: "wugged.",
            color: "black",
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
              +  "<div class='center'></div>"
              +  "<div class='dot45_yellow'></div></div>",
              id: "testing.22",
              phrase: "wugged.",
              color: "yellow",
              shape: "dot",
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
              id: "testing.23",
              shape: "dot",
              color: "green",
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
                id: "testing.24",
                phrase: "did not wug.",
                color: "black",
                shape: "dot",
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
              id: "testing.25",
              phrase: "wugged.",
              color: "green",
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
              +  "<div class='center'></div>"
              +  "<div class='dot76'></div></div>",
              id: "testing.26",
              phrase: "wugged.",
              color: "black",
              shape: "dot",
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
                            id: "testing.27",
                            color: "yellow",
                            phrase: "did not wug.",
                            shape: "dot",
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
                            id: "testing.28",
                            phrase: "did not wug.",
                            color: "green",
                            shape: "dot",
                            condition: "notAnotBneg"
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
                            id: "testing.29",
                            color: "black",
                            shape: "dot",
                            phrase: "wugged.",
                            condition: "notAnotB"
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
                            id: "testing.30",
                            shape: "dot",
                            color: "green",
                            phrase: "did not wug.",
                            condition: "notAnotBneg"
                            },



];
