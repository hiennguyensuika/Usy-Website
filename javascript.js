/**First Slider*/
/**Call this class name and function slick, when Slick function is called, it will wrap all the carousel items in one row, this is for previous and next button, only needs this one line of code */
$('.slider-one')
.not(".slick-initialized")// if the property is not there, call the function slick below
.slick({
    autoplay: true, // create the inside object to create autoplay animation
    autoplaySpeed: 3000, // 3 second
    dots: true,
    prevArrow:".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next", 
}) 

/**Second Slider*/
$('.slider-two')
.not(".slick-initialized")
.slick({
    prevArrow:".site-slider-two .prev",
    nextArrow: ".site-slider-two .next", 
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
}) 

