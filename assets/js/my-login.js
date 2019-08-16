$(function() {
	$("input[type='password'][data-eye]").each(function(i) {
		var $this = $(this);

		$this.wrap($("<div/>", {
			style: 'position:relative'
		}));
		$this.css({
			paddingRight: 60
		});
		$this.after($("<div/>", {
			html: 'Show',
			class: 'btn btn-primary btn-sm',
			id: 'passeye-toggle-'+i,
			style: 'position:absolute;right:10px;top:50%;transform:translate(0,-50%);-webkit-transform:translate(0,-50%);-o-transform:translate(0,-50%);padding: 2px 7px;font-size:12px;cursor:pointer;'
		}));
		$this.after($("<input/>", {
			type: 'hidden',
			id: 'passeye-' + i
		}));
		$this.on("keyup paste", function() {
			$("#passeye-"+i).val($(this).val());
		});
		$("#passeye-toggle-"+i).on("click", function() {
			if($this.hasClass("show")) {
				$this.attr('type', 'password');
				$this.removeClass("show");
				$(this).removeClass("btn-outline-primary");
			}else{
				$this.attr('type', 'text');
				$this.val($("#passeye-"+i).val());				
				$this.addClass("show");
				$(this).addClass("btn-outline-primary");
			}
		});
	});

	// switch theme 
	$("#theme-switch").on('click', function(){

		let stylesheets = $("link");

		for (let i = 0; i < stylesheets.length; i++)
		{
			if(stylesheets[i].href.includes("second.css")) // ES6
			{
				stylesheets[i].remove(); //ES6
				$("#logo").attr("src", "assets/img/logo.png");
				return;
			}
		}

			let head = document.head;
			let link = document.createElement("link");

			let logo = $("#logo").attr("src", "assets/img/logo2.png");

			link.type = "text/css";
			link.rel  = "stylesheet";
			link.href = "assets/css/second.css";

			head.appendChild(link);

	});
});