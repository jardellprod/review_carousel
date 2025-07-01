const carousel_obj = [
    {
        img: "img/actor-img.avif",
        name: "Kyle",
        title: "Actor",
        "About Me": "I'm an actor driven by storytelling that moves people. From stage to screen, I’ve pursued roles that challenge me and reflect real human experiences. Every performance is a chance to connect, grow, and leave something meaningful behind."
    },
        {
        img: "img/comedian-img.avif",
        name: "Danny",
        title: "Comedian",
        "About Me": "I’m Danny, a comedian who finds the funny in the everyday. From open mics to packed clubs, I’ve chased laughs and shared stories that hit home. Comedy’s not just my career — it’s how I connect, cope, and keep people smiling."
    },    
    {
        img: "img/dancer-img.jpg",
        name: "Sarah",
        title: "Dancer",
        "About Me": "I'm a professional dancer with a background in hip-hop and contemporary styles. Trained in both street and studio settings, I've performed on stage, in music videos, and live shows. Dance is not just my art — it’s how I connect, express, and grow."
    },    
    {
        img: "img/dancer2-img.jpg",
        name: "Don",
        title: "Dancer",
        "About Me": "I’m Don, a professional dancer specializing in hip-hop and contemporary. With roots in street performance and studio training, I’ve brought energy and emotion to stages, music videos, and live shows. Dance is my passion, my power, and my voice."
    },
    {
        img: "img/developer-img.webp",
        name: "Sulvie",
        title: "Developer",
        "About Me": "I'm Sulvie, a full-stack developer passionate about building clean, scalable web apps. With experience in JavaScript, React, and Node.js, I love solving problems through code and turning ideas into functional, user-friendly experiences."
    },
    {
        img: "img/doctor-img.jpg",
        name: "Kayra",
        title: "Doctor",
        "About Me": "I’m a dedicated physician committed to compassionate patient care and evidence-based medicine. With experience in diagnosis, treatment, and preventative health, I strive to improve lives through trust, education, and ongoing medical innovation."
    },
    {
        img: "img/hr-img.avif",
        name: "Sarah",
        title: "Senior Recruitment Analyst Lead",
        "About Me": "I’m a Senior Recruitment Analyst Team Lead with expertise in talent acquisition and data-driven hiring strategies. I lead teams to optimize recruitment processes, identify top talent, and deliver insights that drive business growth and workforce success."
    },
    {
        img: "img/model-img.jpeg",
        name: "Jon",
        title: "Model",
        "About Me": "I’m Jon, a professional model passionate about bringing creativity and confidence to every shoot. With experience in fashion and commercial work, I strive to express stories through style and presence, connecting brands with their audiences authentically."
    },
    {
        img: "img/teacher-img.jpeg",
        name: "Sammuel",
        title: "Teacher",
        "About Me": "I’m Sammuel, a teacher who believes learning should be an adventure! Whether it’s math, science, or storytelling, I make lessons fun and memorable. My classroom is where curiosity sparks, questions fly, and every day is a chance to discover something awesome!"
    },

];

const card_img = document.getElementsByClassName('image')[0];
const card_name = document.getElementsByClassName('name')[0];
const card_title = document.getElementsByClassName('title')[0];
const card_about_sec = document.getElementsByClassName('about-me')[0];
const back_arrow = document.getElementsByClassName('back-arrow ')[0];
const fwd_arrow = document.getElementsByClassName('forward-arrow ')[0];
const suprise_btn = document.getElementsByClassName('random-btn')[0];
let arr_index_count = 0; 


fwd_arrow.addEventListener('click', function(e){
    if(arr_index_count >= 8 || arr_index_count < 0){
        arr_index_count = 0;
    }else{
        arr_index_count++;
    }
    card_img.setAttribute('src', carousel_obj[arr_index_count].img);
    card_name.textContent = carousel_obj[arr_index_count].name;
    card_title.textContent = carousel_obj[arr_index_count].title;
    card_about_sec.textContent = carousel_obj[arr_index_count]['About Me'];

});

back_arrow.addEventListener('click', function(e){
    if(arr_index_count <= 0){
        arr_index_count = 8;
    }else{
        arr_index_count--;
    }

    card_img.setAttribute('src', carousel_obj[arr_index_count].img);
    card_name.textContent = carousel_obj[arr_index_count].name;
    card_title.textContent = carousel_obj[arr_index_count].title;
    card_about_sec.textContent = carousel_obj[arr_index_count]['About Me'];

}); 

suprise_btn.addEventListener('click', function(e){
    arr_index_count = Math.floor(Math.random() * 9);

    card_img.setAttribute('src', carousel_obj[arr_index_count].img);
    card_name.textContent = carousel_obj[arr_index_count].name;
    card_title.textContent = carousel_obj[arr_index_count].title;
    card_about_sec.textContent = carousel_obj[arr_index_count]['About Me'];

});