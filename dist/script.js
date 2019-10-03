function ip_render() {
  
  
  
}









































// Vue.component("doughnut", {
//   props: ["data", "labels"],
//   data: function() {
//     ctx: null;
//   },
//   template: `
//     <canvas></canvas>
//   `,
//   mounted: function() {
//     let self = this;
//     this.ctx = this.$el.getContext("2d");

//     new Chart(this.ctx, {
//       type: "doughnut",
//       options: {
//         cutoutPercentage: 80
//       },
//       data: {
//         labels: self.labels,
//         datasets: [{
//           data: self.data,
//           backgroundColor: ["#1BC98E", "#1CA8DD"],
//           hoverBackgroundColor: ["#1BC98E", "#1CA8DD"]
//         }]
//       }
//     });
//   }
// });

// Vue.component("sparkline", {
//   props: ["title", "value"],
//   data: function() {
//     ctx: null;
//   },
//   template: `
//     <div class="br2">
//       <div class="pa3 flex-auto bb b--white-10">
//         <h3 class="mt0 mb1 f6 ttu white o-70">{{ title }}</h3>
//         <h2 class="mv0 f2 fw5 white">{{ value }}</h2>
//       </div>
//       <div class="pt2">
//         <canvas></canvas>
//       </div>
//     </div>
//   `,
//   mounted: function() {
//     this.ctx = this.$el.querySelector("canvas").getContext("2d");
//     let sparklineGradient = this.ctx.createLinearGradient(0, 0, 0, 135);
//     sparklineGradient.addColorStop(0, "rgba(255,255,255,0.35)");
//     sparklineGradient.addColorStop(1, "rgba(255,255,255,0)");

//     let data = {
//       labels: ["A", "B", "C", "D", "E", "F"],
//       datasets: [{
//         backgroundColor: sparklineGradient,
//         borderColor: "#FFFFFF",
//         data: [2, 4, 6, 4, 8, 10]
//       }]
//     };

//     Chart.Line(this.ctx, {
//       data: data,
//       options: {
//         elements: {
//           point: {
//             radius: 0
//           }
//         },
//         scales: {
//           xAxes: [{
//             display: false
//           }],
//           yAxes: [{
//             display: false
//           }]
//         }
//       }
//     });
//   }
// });

// Vue.component("metric-list-item", {
//   props: ["name", "value", "showBar"],
//   computed: {
//     barWidth: function() {
//       return `${this.value}%`;
//     }
//   },
//   template: `
//     <a href="#" class="link dark-gray flex justify-between relative pa3 bb b--black-10 hover-bg-near-white">
//       <span v-if="showBar" class="absolute top-0 left-0 right-0 bottom-0 h-100 bg-near-white" v-bind:style="{ width: barWidth, zIndex: -1 }"></span>
//       <span>{{ name }}</span>
//       <span>{{ value }}</span>
//     </a>
//   `
// });

// new Vue({
//   el: "#dashboard",
//   data: {
//     newVsReturning: {
//       data: [130, 230],
//       labels: ["New", "Returning"]
//     },
//     newVsRecurring: {
//       data: [30, 330],
//       labels: ["New", "Recurring"]
//     },
//     directVsReferrals: {
//       data: [260, 160],
//       labels: ["Direct", "Referrals"]
//     },
//     countryData: [{
//         name: "United States",
//         value: "62.4",
//         showBar: true
//       },
//       {
//         name: "India",
//         value: "15",
//         showBar: true
//       },
//       {
//         name: "United Kingdom",
//         value: "5",
//         showBar: true
//       },
//       {
//         name: "Canada",
//         value: "5",
//         showBar: true
//       },
//       {
//         name: "Russia",
//         value: "4.5",
//         showBar: true
//       },
//       {
//         name: "Mexico",
//         value: "2.3",
//         showBar: true
//       },
//       {
//         name: "Spain",
//         value: "1.7",
//         showBar: true
//       }
//     ],
//     pageData: [{
//         name: "/ (Logged out)",
//         value: "3,929,481",
//         showBar: false
//       },

//       {
//         name: "/ (Logged in)",
//         value: "1,143,393",
//         showBar: false
//       },

//       {
//         name: "/tour",
//         value: "938,287",
//         showBar: false
//       },

//       {
//         name: "/features/something",
//         value: "749,393",
//         showBar: false
//       },

//       {
//         name: "/features/another-thing",
//         value: "695,912",
//         showBar: false
//       },

//       {
//         name: "/users/username",
//         value: "501,938",
//         showBar: false
//       },

//       {
//         name: "/page-title",
//         value: "392,842",
//         showBar: false
//       }
//     ],
//     deviceData: [{
//         name: "Desktop (1920x1080)",
//         value: "3,929,481",
//         showBar: false
//       },

//       {
//         name: "Desktop (1366x768)",
//         value: "1,143,393",
//         showBar: false
//       },

//       {
//         name: "Desktop (1440x900)",
//         value: "938,287",
//         showBar: false
//       },

//       {
//         name: "Desktop (1280x800)",
//         value: "749,393",
//         showBar: false
//       },

//       {
//         name: "Tablet (1024x768)",
//         value: "695,912",
//         showBar: false
//       },

//       {
//         name: "Tablet (768x1024)",
//         value: "501,938",
//         showBar: false
//       },

//       {
//         name: "Phone (320x480)",
//         value: "392,842",
//         showBar: false
//       },

//       {
//         name: "Phone (720x450)",
//         value: "298,183",
//         showBar: false
//       },

//       {
//         name: "Desktop (2560x1080)",
//         value: "193,129",
//         showBar: false
//       },

//       {
//         name: "Desktop (2560x1600)",
//         value: "93,382",
//         showBar: false
//       }
//     ]
//   },
//   created: function() {
//     Chart.defaults.global.legend.display = false;
//   }
// });