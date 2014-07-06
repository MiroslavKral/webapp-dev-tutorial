var main = function () {
	"use strict";

    var toDos = [
        "Finish writing this book",
        "Finish reading this book",
        "Read more books about JavaScript",
        "Read more books about AngularJS",
        "Write much more code a tests"
    ];

	$('.tabs a span').toArray().forEach(function (element) {
		$(element).on('click', function() {
            var $element = $(element);

			$('.tabs a span').removeClass('active');
			$element.addClass('active');
			$('main .content').empty();

            if($element.parent().is(':nth-child(1)')) {
                console.log("First tab clicked!");
            } else if ($element.parent().is(":nth-child(2)")) {
                console.log("Second tab clicked!");

                var $content = $("<ul>");
                toDos.forEach(function(todo){
                    var $contentElement = $("<li>").text(todo);
                    $content.append($contentElement);
                });
                $("main div.content").append($content);
            } else if ($element.parent().is(":nth-child(3)")) {
                console.log("Third tab clicked!");
            }

			return false;
		});
	});

    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);