var typed = new Typed(".auto-Typed",{
strings : ["Flutter Developer","UI/UX Designer","Web Developer","Intraday Trader.."],
typeSpeed:150,
backSpeed:150,
loop:true,
});

AOS.init();
/*--------About Section---------*/

var tablinks = document.getElementsByClassName("tab-Links");
var tabcontents = document.getElementsByClassName("tab-content")

function opentab(tabname){
      for(Tablink of tablinks){
        Tablink.classList.remove("active-link");
      }
      for(Tabcontent of tabcontents){
        Tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");

}

 /*--------For Small Screens---------*/

 var sidemeu = document.getElementById("sidemenu");

  function openmenu(){
    sidemeu.style.right = "0";
  }
  function  closemenu(){
    sidemeu.style.right = "-200px";
  }

  /*--------For contact form ---------*/

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzc6z04toeVNau6m2DAQE-P46ilXzyQkzoIu3fIl26Esw1vx4yaxGsi1qOfr17gAf8B/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


