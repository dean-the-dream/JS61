const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];


const headshot = document.querySelector("#person-img");
const userName = document.querySelector("#author");
const jobTitle = document.querySelector("#job");
const description = document.querySelector("#info");
const cardInfo = document.querySelector(".review");
let change = 0;
let previous = 0;

headshot.src = `${reviews[0].img}`
userName.innerText = `${reviews[0].name}`
jobTitle.innerHTML = `${reviews[0].job}`
description.innerHTML = `${reviews[0].text}`

function updateReview (e){
    console.log("pressed")
    if(e.target.className.includes("fa-chevron-left")){
        (change === 0) ? null : change--;
    }
    if(e.target.className.includes("fa-chevron-right")){
        (change >= reviews.length-1) ? null : change++
    }
    if(e.target.className.includes("random-btn")){
        change = Math.floor(Math.random() * (reviews.length - 1))
        while(change == previous){
          change = Math.floor(Math.random() * (reviews.length - 1))
        }
    }

    previous = change;
    headshot.src = `${reviews[change].img}`
    userName.innerText = `${reviews[change].name}`
    jobTitle.innerHTML = `${reviews[change].job}`
    description.innerHTML = `${reviews[change].text}`
}

cardInfo.addEventListener("click", updateReview)
