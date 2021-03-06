var main = function () {
	"use strict";

    var toDos = [
        "Finish writing this book",
        "Finish reading this book",
        "Read more books about JavaScript",
        "Read more books about AngularJS",
        "Write much more code and tests"
    ];

	$('.tabs a span').toArray().forEach(function (element) {
        var $element = $(element);

		$element.on('click', function() {
            var $content;

			$('.tabs a span').removeClass('active');
			$element.addClass('active');
			$('main .content').empty();

            if($element.parent().is(':nth-child(1)')) {
                $content = shotTodosFromNewest();
            } else if ($element.parent().is(":nth-child(2)")) {
                $content = showTodosFromOldest();
            } else if ($element.parent().is(":nth-child(3)")) {
                $content = addTodoButton();
            }

            $("main div.content").append($content);

			return false;
		});
	});

    var showTodosFromOldest = function() {
        var $content = $("<ul>");
        toDos.forEach(function(todo){
            var $contentElement = $("<li>").text(todo);
            $content.append($contentElement);
        });

        return $content;
    };

    var shotTodosFromNewest = function() {
        var $content = $("<ul>");

        var index;
        for (index = toDos.length - 1; index >= 0; index = index - 1) {
            var $todoText = $("<li>").text(toDos[index]);
            $content.append($todoText);
        }

        return $content;
    };

    var addTodoButton = function() {
        var $todoInput = $("<input>");
        var $addTodoButton = $("<button>").text("+");

        $addTodoButton.on("click", function() {
            if ($todoInput.val() !== "") {
                toDos.push($todoInput.val());
                $todoInput.val("");
            }
        });

        return $("<div>").append($todoInput, $addTodoButton);
    };

    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);