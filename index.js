function Slider() {
  let container = document.getElementById("container");

  const slides = [
    {
      title: "1/6",
      image:
        "https://images.unsplash.com/photo-1524591431555-cc7876d14adf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2xpZGVyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      title: "2/6",
      image:
        "https://images.unsplash.com/photo-1532716303749-62ba9821e104?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2xpZGVyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      title: "3/6",
      image:
        "https://images.unsplash.com/photo-1554941426-a965fb2b9258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNsaWRlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60",
    },
    {
      title: "4/6",
      image:
        "https://images.unsplash.com/photo-1598387846419-a2c870ad3ecd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNsaWRlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60",
    },
    {
      title: "5/6",
      image:
        "https://images.unsplash.com/photo-1524680319993-fe837ad4bf2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2xpZGVyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      title: "6/6",
      image:
        "https://images.unsplash.com/photo-1524680319993-fe837ad4bf2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2xpZGVyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    },
  ];

  container.innerHTML = slides
    .map(
      (slide, index) =>
        `<div class="container">
        <div id='slides'
        onmousemove='showButtons()'
onmouseout='hideButtons()'
        class='slides' key=${index}>
<div id='img' className="image">
<img src=${slide.image} style="width:100%"  alt='Carousel image'/>

</div>        <p
 class="text"
 >${slide.title}</p>
        </div>
       
        </div>
`
    )
    .join("");
}

Slider();

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}
let buttons = document.getElementById("buttons");
function showButtons() {
  // let image = document.getElementById("img");
  buttons.style.display = "block";
}

// function hideButtons() {
//   buttons.style.display = "none";
// }

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
