import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  lightbox:any;
  constructor() { }

  ngOnInit() {
    function handleSidebarActiveClass() {
      // if we open in tablet devices
      //sidebar will have active class
      if ($(window).width() >= 768) {
        $("#sidebar").addClass("active");
      } else {
        $("#sidebar").removeClass("active");
      }
    }
    handleSidebarActiveClass();
    // resize eventlistener
    $(window).resize(() => {
      handleSidebarActiveClass();
    });
    $(document).ready(function () {
      $("#sidebarCollapse").on("click", function () {
        $("#sidebar").toggleClass("active");
      });
    });

    // this.lightbox.option({
    //   'albumLabel':	"picture %1 of %2",
    //   'fadeDuration': 300,
    //   'resizeDuration': 150,
    //   'wrapAround': true
    // })
   


    $(".multi-item-carousel").on("slide.bs.carousel", function (e) {
      let $e = $(e.relatedTarget),
        itemsPerSlide = 3,
        totalItems = $(".carousel-item", this).length,
        $itemsContainer = $(".carousel-inner", this),
        it = itemsPerSlide - (totalItems - $e.index());
      if (it > 0) {
        for (var i = 0; i < it; i++) {
          $(".carousel-item", this)
            .eq(e.direction == "left" ? i : 0)
            // append slides to the end/beginning
            .appendTo($itemsContainer);
        }
      }
    });
    
  
  }


}
