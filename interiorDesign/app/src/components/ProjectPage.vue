<template>
    <main class="main">
        <div class="container">
            <div class="content">
                <section class="articles__description">
                    <div class="articles__description__background">
                        <div class="articles__description__background__info">
                            <h1 class="articles__description__background__info__title">
                                Our Project
                            </h1>
                            <h2 class="articles__description__background__info__subtitle">
                                Home / Project
                            </h2>
                        </div>
                    </div>
                </section>
                <section class="projects">
                    <div class="projects__project">
                        <div class="projects__project__buttons">
                            <button class="projects__project__buttons__button" @click="getProject('bathroom')">Bathroom</button>
                            <button class="projects__project__buttons__button" @click="getProject('bedroom')">Bedroom</button>
                            <button class="projects__project__buttons__button" @click="getProject('kitchen')">Kitchen</button>
                            <button class="projects__project__buttons__button" @click="getProject('livingroom')">Living Area</button>
                        </div>
                        <div class="projects__project__content">            
                            <div class="projects__project__content__item"  v-for="project in temp" :key="project.id" @click="addFavourite">
                                <img :class="project.className" :src="project.img" alt="photo">
                                <svg class="star" width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_993_142)">
                                        <path d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z" 
                                        fill="#000"/>
                                    </g>
                                </svg>
                                <div class="projects__project__content__item__text">
                                    <div>
                                        <h3 >{{project.title}}</h3>
                                        <p >{{project.subtitle}}</p>
                                    </div>
                                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>   
                    </div>
                </section>
                <PaginationBlock /> 
            </div>
        </div>
    </main>
</template>

<script>
import PaginationBlock from "./commonComponents/PaginationBlock.vue";
import img21 from "../assets/img/bedroom1.jpg";
import img22 from "../assets/img/bedroom2.jpg";
import img23 from "../assets/img/bedroom3.jpg";
import img24 from "../assets/img/bedroom4.jpg";
import img25 from "../assets/img/bedroom5.jpg";
import img26 from "../assets/img/bedroom6.jpg";
import img27 from "../assets/img/bedroom7.jpg";
import img28 from "../assets/img/bedroom8.jpg";
import img29 from "../assets/img/bathroom1.jpg";
import img30 from "../assets/img/bathroom2.jpg";
import img31 from "../assets/img/bathroom3.jpg";
import img32 from "../assets/img/bathroom4.jpg";
import img33 from "../assets/img/bathroom5.jpg";
import img34 from "../assets/img/bathroom6.jpg";
import img35 from "../assets/img/bathroom7.jpg";
import img36 from "../assets/img/bathroom8.jpg";
import img37 from "../assets/img/kitchen1.jpg";
import img38 from "../assets/img/kitchen2.jpg";
import img39 from "../assets/img/kitchen3.jpg";
import img40 from "../assets/img/kitchen4.jpg";
import img41 from "../assets/img/kitchen5.jpg";
import img42 from "../assets/img/kitchen6.jpg";
import img43 from "../assets/img/kitchen7.jpg";
import img44 from "../assets/img/kitchen8.jpg";
import img45 from "../assets/img/livingroom1.jpg";
import img46 from "../assets/img/livingroom2.jpg";
import img47 from "../assets/img/livingroom3.jpg";
import img48 from "../assets/img/livingroom4.jpg";
import img49 from "../assets/img/livingroom5.jpg";
import img50 from "../assets/img/livingroom6.jpg";
import img51 from "../assets/img/livingroom7.jpg";
import img52 from "../assets/img/livingroom8.jpg";

export default {      
    data(){
       const projects = [
                {
                    id: 1,
                    tag: "bedroom",
                    img: img21,
                    title: "Minimal Bedroom",
                    subtitle: "Decor / Artchitecture",
                    className: "big"                     
                },
                {
                    id: 2,
                    tag: "bedroom",
                    img: img22,
                    title: "Modern Bedroom",
                    subtitle: "Decor / Artchitecture",
                    className: "little" 
                },
                {
                    id: 3,
                    tag: "bedroom",
                    img: img23,
                    title: "System Table",
                    subtitle: "Decor / Artchitecture",
                    className: "big" 
                },
                {
                    id: 4,
                    tag: "bedroom",
                    img: img24,
                    title: "Modern Bedroom",
                    subtitle: "Decor / Artchitecture",
                    className: "little" 
                },
                {
                    id: 5,
                    tag: "bedroom",
                    img: img25,
                    title: "Modern Bedroom",
                    subtitle: "Decor / Artchitecture",
                    className: "little" 
                },
                {
                    id: 6,
                    tag: "bedroom",
                    img: img26,
                    title: "Modern Bedroom",
                    subtitle: "Decor / Artchitecture",
                    className: "big" 
                },
                {
                    id: 7,
                    tag: "bedroom",
                    img: img27,
                    title: "Modern Bedroom",
                    subtitle: "Decor / Artchitecture",
                    className: "little" 
                },
                {
                    id: 8,
                    tag: "bedroom",
                    img: img28,
                    title: "Modern Bedroom",
                    subtitle: "Decor / Artchitecture",
                    className: "little" 
                },
                {
                    id: 9,
                    tag: "bathroom",
                    img: img29,
                    title: "Bathroom Suites",
                    subtitle: "Decor / Artchitecture",
                    className: "big" 
                },
                {
                    id: 10,
                    tag: "bathroom",
                    img: img30,
                    title: "Bathroom Furniture & Cabinets",
                    subtitle: "Decor / Artchitecture",
                    className: "little" 
                },
                {
                    id: 11,
                    tag: "bathroom",
                    img: img31,
                    title: "Baths & Accessories",
                    subtitle: "Decor / Artchitecture",
                    className: "big" 
                },
                {
                    id: 12,
                    tag: "bathroom",
                    img: img32,
                    title: "Bathroom Wall & Floor Tiles",
                    subtitle: "Decor / Artchitecture",
                    className: "little" 
                },
                {
                    id: 13,
                    tag: "bathroom",
                    img: img33,
                    title: "Bathroom Lighting",
                    subtitle: "Decor / Artchitecture",
                    className: "little" 
                },
                {
                    id: 14,
                    tag: "bathroom",
                    img: img34,
                    title: "Bathroom Flooring",
                    subtitle: "Decor / Artchitecture",
                    className: "big" 
                },
                {
                    id: 15,
                    tag: "bathroom",
                    img: img35,
                    title: "Bathroom Paint",
                    subtitle: "Decor / Artchitecture",
                    className: "little" 
                },
                {
                    id: 16,
                    tag: "bathroom",
                    img: img36,
                    title: "Bathroom Suite Packages",
                    subtitle: "Decor / Artchitecture",
                    className: "little" 
                },
                {
                    id: 17,
                    tag: "kitchen",
                    img: img37,
                    title: "Kitchen island",
                    subtitle: "Decor / Artchitecture",
                    className: "big" 
                },
                {
                    id: 18,
                    tag: "kitchen",
                    img: img38,
                    title: "Luxury kitchen",
                    subtitle: "Decor / Artchitecture",
                    className: "little" 
                },
                {
                    id: 19,
                    tag: "kitchen",
                    img: img39,
                    title: "Restaurant interior",
                    subtitle: "Decor / Artchitecture",
                    className: "big" 
                },
                {
                    id: 20,
                    tag: "kitchen",
                    img: img40,
                    title: "Kitchen wall",
                    subtitle: "Decor / Artchitecture",
                    className: "little" 
                },
                {
                    id: 21,
                    tag: "kitchen",
                    img: img41,
                    title: "Kitchen countertop",
                    subtitle: "Decor / Artchitecture",
                    className: "little" 
                },
                {
                    id: 22,
                    tag: "kitchen",
                    img: img42,
                    title: "Modern kitchen",
                    subtitle: "Decor / Artchitecture",
                    className: "big" 
                },
                {
                    id: 23,
                    tag: "kitchen",
                    img: img43,
                    title: "Kitchen background",
                    subtitle: "Decor / Artchitecture",
                    className: "little" 
                },
                {
                    id: 24,
                    tag: "kitchen",
                    img: img44,
                    title: "Kitchen furniture",
                    subtitle: "Decor / Artchitecture",
                    className: "little" 
                },
                {
                    id: 25,
                    tag: "livingroom",
                    img: img45,
                    title: "Levitate Your Living",
                    subtitle: "Decor / Artchitecture",
                    className: "big" 
                },
                {
                    id: 26,
                    tag: "livingroom",
                    img: img46,
                    title: "Living Room Trend",
                    subtitle: "Decor / Artchitecture",
                    className: "little" 
                },
                {
                    id: 27,
                    tag: "livingroom",
                    img: img47,
                    title: "Try More Observant Design",
                    subtitle: "Decor / Artchitecture",
                    className: "big" 
                },
                {
                    id: 28,
                    tag: "livingroom",
                    img: img48,
                    title: "Multifunctional, Airy Spaces",
                    subtitle: "Decor / Artchitecture",
                    className: "little" 
                },
                {
                    id: 29,
                    tag: "livingroom",
                    img: img49,
                    title: "Colour Living",
                    subtitle: "Decor / Artchitecture",
                    className: "little" 
                },
                {
                    id: 30,
                    tag: "livingroom",
                    img: img50,
                    title: "Modern Scandinavian Interiors",
                    subtitle: "Decor / Artchitecture",
                    className: "big" 
                },
                {
                    id: 31,
                    tag: "livingroom",
                    img: img51,
                    title: "Zoning Out",
                    subtitle: "Decor / Artchitecture",
                    className: "little" 
                },
                {
                    id: 32,
                    tag: "livingroom",
                    img: img52,
                    title: "Wallpapers & Wallcoverings",
                    subtitle: "Decor / Artchitecture",
                    className: "little" 
                },
            ]
        return{
            projects: projects,
            temp:[
            {
                    id: 1,
                    tag: "bedroom",
                    img: img21,
                    title: "Minimal Bedroom",
                    subtitle: "Decor / Artchitecture",
                    className: "big" 
                },
                {
                    id: 2,
                    tag: "bedroom",
                    img: img22,
                    title: "Modern Bedroom",
                    subtitle: "Decor / Artchitecture",
                    className: "little" 
                },
                {
                    id: 3,
                    tag: "bedroom",
                    img: img23,
                    title: "System Table",
                    subtitle: "Decor / Artchitecture",
                    className: "big" 
                },
                {
                    id: 4,
                    tag: "bedroom",
                    img: img24,
                    title: "Modern Bedroom",
                    subtitle: "Decor / Artchitecture",
                    className: "little" 
                },
                {
                    id: 5,
                    tag: "bedroom",
                    img: img25,
                    title: "Modern Bedroom",
                    subtitle: "Decor / Artchitecture",
                    className: "little" 
                },
                {
                    id: 6,
                    tag: "bedroom",
                    img: img26,
                    title: "Modern Bedroom",
                    subtitle: "Decor / Artchitecture",
                    className: "big" 
                },
                {
                    id: 7,
                    tag: "bedroom",
                    img: img27,
                    title: "Modern Bedroom",
                    subtitle: "Decor / Artchitecture",
                    className: "little" 
                },
                {
                    id: 8,
                    tag: "bedroom",
                    img: img28,
                    title: "Modern Bedroom",
                    subtitle: "Decor / Artchitecture",
                    className: "little" 
                },
            ],
        }
    },
    components: {
        PaginationBlock
    },
    methods: {
        getProject(tag){
            this.temp = this.projects.filter(item => item.tag === tag);
              
        },
        addFavourite(event){
            const img = event.target;
            const svg = img.nextSibling;
            const path = svg.getElementsByTagName('path');
            if (path[0].style.fill === ""){
                path[0].style.fill = "#FFA928";
            } else {
                path[0].style.fill = "";
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .projects__project {
        padding-left: calc(50% - 600px);
        padding-right: calc(50% - 600px);
        margin-bottom: 61px;
        &__buttons {            
            width: 880px;
            border: 1px solid #CDA274;
            border-radius: 18px;
            display: flex;
            flex-direction: row;
            align-content: center;
            justify-content: space-around;
            margin: 0 auto;
            margin-bottom: 61px;
            &__button {
                border: none;
                background-color: #fff;
                width: 219px;
                height: 75px;
                border-radius: 18px;
                font-family: "Jost";
                font-size: 18px;
               font-weight: 700;
               
            }
            &__button:hover {
                color: #fff;
                background-color: #CDA274;
                cursor: pointer;
            }
        }
        &__content {
            column-count: 2;
            column-gap: 27px;
            
            &__item {
               break-inside: avoid;
               max-width: 585px;
               position: relative;
               margin-bottom: 36px;

               img {
                max-width: 100%;
                margin-bottom: 24px;
               }

               .little {
                height: 522px;
                width: 585px;
               }

               .big {
                height: 853px;
                width: 585px;
               }
               .star {
                    position: absolute;
                    right: 5px;
                    top: 5px;
                    path {
                        fill: none;
                    }
                    
               }

               &__text {
                display: flex;
                align-items: center;
                justify-content: space-between;
                    div {
                        h3 {
                            font-family: "DM Serif Display", serif;
                            font-size: 25px;
                        }
                        p {
                            font-family: "Jost", sans-serif;
                            font-size: 22px;
                        }
                    }
                }
            }
            &__item:hover {
                cursor: pointer;
            }
        }
    }  
</style>
