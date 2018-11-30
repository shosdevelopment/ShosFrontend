import { Component, OnInit } from '@angular/core';
import { BasePageAbstract } from './Abstracts/base-page.abstract';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BasePageAbstract implements OnInit {
  //#region Constructor
  public constructor(protected router: Router) {
    super(router);
  }

  public ngOnInit(): void {
    $(document).ready(function () {
      $('.menu-icon').on('click', function () {
        $('nav ul').toggleClass('showing');
      });
    });

    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 70) {
        $('nav').addClass('black');
      } else {
        $('nav').removeClass('black');
      }
    });
  }
  //#endregion
}

