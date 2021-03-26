import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

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
  }

}
