import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {FooterComponent} from "../../shared/components/footer/footer.component";



@Component({
  templateUrl: './pages.component.html',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    NgOptimizedImage,
    FooterComponent
  ],
  styleUrls: ['./pages.component.css']
})
export class PagesComponent  {






}
