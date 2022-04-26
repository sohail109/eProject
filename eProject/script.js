var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlides(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
           if (n > slides.length){ slideIndex = 1 }
          if (n < 1){ slideIndex = slides.length }
        for ( i = 0; i < slides.length; i++ ){
        slides[i].style .display = "none";
    }
         for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
       dots[slideIndex - 1].className +=" active";
}
  

      var slideIndex = 0;
        showSlides();

        function showSlides(){
        var i;
       var slides = document.getElementsByClassName("mySlides");
       for (i = 0; i < slides.length; i++ ){
           slides[i].style.display = "none";
       }
       slideIndex++;
       if (slideIndex > slides.length){
           slideIndex = 1
       }
      slides[slideIndex - 1].style.display = "block"; 
        
      setTimeout(showSlides, 4000);    
    }

  function showAlert(){
      var names = document.getElementById('names').value
      var emali = document.getElementById('email').value
      var textArea = document.getElementById('textArea').value

      if( names == "" && emali == "" && textArea == ""){
          alert('All Fields is Required! Please Fill The All Fields! ')
      }

      else if(names==""){
          alert('Name is Required!')
      }

      else if(emali==""){
        alert('Email is Required!')
    }

    else if(textArea==""){
        alert('Text Area is Required!')
    }
    else if(names != "" && emali != "" && textArea != ""){
        alert('Login Successfully!')
    }
  }
