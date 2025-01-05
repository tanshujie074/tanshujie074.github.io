$(document).ready(function () {
    $("#tabs").tabs();

    $(".all-category-item").addClass("active");


    $(".category-item a").on("click", function (event) {
        event.preventDefault();

        $(".category-item a").removeClass("active");

        $(this).addClass("active");
    });
});