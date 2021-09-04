// page loader 

window.addEventListener("load",function(){
  document.querySelector(".preloader").classList.add("opacity-0");

  setTimeout(function(){
      document.querySelector(".preloader").style.display="none";
  },1000)
})


window.addEventListener("load",function(){
  // animation on scroll 
     AOS.init();
  // AOS.init({disable: 'mobile'});
});

// portfolio Lightbox


const portfolioItems = document.querySelectorAll(".portfolio-item-inner"),
totalportfolioItem =  portfolioItems.length;

const lightbox = document.querySelector(".lightbox"),
      lightboxImg = lightbox.querySelector(".lightbox-img"),
      lightboxClose = lightbox.querySelector(".lightbox-close"),
      lightboxText = lightbox.querySelector(".caption-text"),
      lightboxCounter = lightbox.querySelector(".caption-counter");
    


      let itemIndex = 0;

      for(let i=0; i<totalportfolioItem; i++){
          portfolioItems[i].addEventListener("click",function(){
            itemIndex = i;
            changeItem();
            toggleLightbox();
          });
      }

      function nextItem(){
          if(itemIndex === totalportfolioItem-1){
              itemIndex=0;
          }
          else{
            itemIndex++;
          }
          changeItem();
      }

      function prevItem(){
          if(itemIndex === 0){
            itemIndex=totalportfolioItem - 1;
          }
          else{
            itemIndex--;
          }
          changeItem();
      }

      function toggleLightbox(){
          lightbox.classList.toggle("open");
      }

     
      function changeItem(){
          imgSrc =  portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
          lightboxImg.src = imgSrc;
          lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
          lightboxCounter.innerHTML = (itemIndex+1) + "of" + totalportfolioItem;
      }

// portfolio Lightbox ends


lightbox.addEventListener("click",function(event){
      if(event.target === lightboxClose || event.target === lightbox){
        toggleLightbox();
      }


})






