import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#menu-action").click(function () {
      $(".sidebar").toggleClass("active");
 //     $(".main").toggleClass("active");
      $(this).toggleClass("active");
    
      if ($(".sidebar").hasClass("active")) {
        $(this).find("i").addClass("fas fa-angle-double-left");
        $(this).find("i").removeClass("fa-bars");
      } else {
        $(this).find("i").addClass("fa-bars");
        $(this).find("i").removeClass("fa-close");
      }
    });
    
    // Add hover feedback on menu
    $("#menu-action").hover(function () {
      $(".sidebar").toggleClass("hovered");
    });
    

    
    
  }

}
