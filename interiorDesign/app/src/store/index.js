import { createStore } from "vuex";
import img1 from "../assets/img/projectDetails_swiper1.jpg";
import img2 from "../assets/img/projectDetails_swiper2.jpg";
import img3 from "../assets/img/projectDetails_swiper3.jpg";
import img4 from "../assets/img/projectDetails_swiper4.jpg";
import img5 from "../assets/img/projectDetails_swiper5.jpg";
import img6 from "../assets/img/projectDetails_swiper6.jpg";
import img7 from "../assets/img/projectDetails_swiper7.jpg";
import img8 from "../assets/img/projectDetails_swiper8.jpg";


export default createStore({
  state: {
    articles: [
      {
        id: 1,
        header: "Minimal Bedrooms",
        text1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, 
        vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh
        in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. `,
        text2: `In nec sem suscipit, convallis leo vitae, lacinia nibh. 
        Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id,
        pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,
        elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta.
        Proin tincidunt ligula id purus porttitor.`,
        img1: img1,
        img2: img2,
        img3: img3
      },
      {
        id: 2,
        header: "Classic Bedroom",
        text1: `Shyness continual household shewing things recommend 
        surrounded received excited child needed ladyship felicity. 
        Coming unable thoughts matters would removing such together believing cordially 
        excellent chief correct knew discourse. Affixed terms table.`,
        text2: `Invitation service manner parlors wholly mutual formed into shortly. 
        Minutes passage meant hold visited hastily. Oh prospect each being daughter sending feel under asked.`,
        img1: img4,
        img2: img5,
        img3: img6
      },
      {
        id: 3,
        header: "Modern Bedroom",
        text1: `Unfeeling recommend into improved anxious remain merits rapturous natural proposal mutual. 
        Cease tried settled equally husbands gay many besides offended continual delay several oppose knew.`,
        text2: `Match domestic discretion dining far. Visitor cordial speedily enable then like looking furnished stimulated. 
        Had sweetness well mother other absolute confined were looking breeding plan agreeable.`,
        img1: img7,
        img2: img8,
        img3: img1
      },
      {
        id: 4,
        header: "Minimal Look Bedrooms",
        text1: `Dashwoods insipidity mutual humoured winter months bred lain 
        purse ten earnestly motionless breakfast ﻿no than ever valley. Went ﻿no followed. Beyond early coming.`,
        text2: `Boy delightful little man design wishes this feel. Musical ladies admiration shade venture sportsman 
        play call matters into real evening voice play having.`,
        img1: img2,
        img2: img3,
        img3: img4
      },
      {
        id: 5,
        header: "New Bedrooms",
        text1: `Village three fifteen appear. Civil stand child coming believe than peculiar replied gave welcome suspicion. 
        Timed elinor real occasional laughing. Sorry behind evil happen oppose twenty six. Game difficult decay elderly see commanded sussex explain country.`,
        text2: `Private pulled perceive felt stand gone result likewise entered he was ready. Looking shew replied  form natural weather than. Defective turned 
        determine exercise material style. Age there easy even enjoy voice feet everything wanted leaf. Noisier warrant anxious demesne gay tall face.`,
        img1: img5,
        img2: img6,
        img3: img7
      },
      {
        id: 6,
        header: "Good Looking Bedrooms",
        text1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, 
        vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh
        in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. `,
        text2: `In nec sem suscipit, convallis leo vitae, lacinia nibh. 
        Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id,
        pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,
        elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta.
        Proin tincidunt ligula id purus porttitor.`,
        img1: img8,
        img2: img1,
        img3: img2
      },
      {
        id: 7,
        header: "Nice Bedrooms",
        text1: `Against held remark esteem home form be some friend determine taken they merry. 
        First connection children voice engaged large room music drew missed. Placing ye suitable will covered.`,
        text2: `September belonging get defective feelings man neat appearance matters weddings prepared. 
        Limits furniture himself views finished sportsman delay. Girl draw sir form neglected from cheerful cannot 
        disposed opinion greater feebly denied tiled concerns landlord. Explained minuter fruit extended. Merely now felicity.`,
        img1: img3,
        img2: img4,
        img3: img5
      },
      {
        id: 8,
        header: "Classic Minimal Bedroom",
        text1: `Put matter whole certainty offending again possible behaved rooms denote drawn sufficient. Entreaties manners find attended civilly. 
        Daughter something repulsive introduced passage village families addition.`,
        text2: `He expect vexed studied looked fond the addition want. Cousins carriage prevailed sociable agreement continual call propriety 
        sweetness prevent law shot fruit shy. Mrs advantage stanhill discourse unfeeling direct exeter three fancy income even speaking private saw polite. 
        Little more nearer almost.`,
        img1: img6,
        img2: img7,
        img3: img8
      }
    ]    
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {

  }
});
