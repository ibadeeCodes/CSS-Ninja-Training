document.querySelector(".dropdown").addEventListener("click", function(){
    document.querySelector(".drop-closed").classList.toggle("opened");
})
/* For Toggle Bar */
document.querySelector(".toggle-bar").addEventListener("click", function(){
    this.classList.toggle("toggled-bar");
})
/* For Toggle Menu */
$(".toggle-bar").click(function(){
    $(".menu").animate({width: 'toggle'}, 600);
});
/* for image toggling */
