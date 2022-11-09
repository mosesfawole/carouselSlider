function carouselSlider() {
  let slider = document.getElementById("slider");

  const slides = [
    {
      title: "1/6",
      image:
        "https://images.unsplash.com/photo-1664574654589-8f6c9b94c02d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      title: "2/6",
      image:
        "https://images.unsplash.com/photo-1668000819543-ec8a570939ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    },
    {
      title: "3/6",
      image:
        "https://images.unsplash.com/photo-1667977549554-51ab4fcacd7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      title: "4/6",
      image:
        "https://images.unsplash.com/photo-1667827576128-374c6ab46ee2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      title: "5/6",
      image:
        "https://images.unsplash.com/photo-1667926964370-840afdde03e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      title: "6/6",
      image:
        "https://plus.unsplash.com/premium_photo-1666544989783-13fc7091024f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
    },
  ];

  slider.innerHTML = slides
    .map(
      (slide, index) =>
        `
    <div className="slides fade" key=${index}>
<img src=${slide.image} alt='Carousel image'/>
    <p className="text">${slide.title}</p>
    </div>
`
    )
    .join("");
}

carouselSlider();
