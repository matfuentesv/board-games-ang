import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from "@angular/router";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {AuthService} from "../../core/services/auth/auth.service";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {filter} from "rxjs";
import {CartService} from "../../core/services/cart/cart.service";

@Component({
  selector: 'app-pages',
  templateUrl: 'pages.component.html',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    FooterComponent,
    NgIf,
    NgOptimizedImage
  ],
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  userName: string | null = null;
  userRole: string | null = null;
  cartItemCount: number = 0;

  constructor(
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.authService.userName$.subscribe(userName => {
      this.userName = userName;
      this.cdr.detectChanges();
    });

    this.authService.userRole$.subscribe(userRole => {
      this.userRole = userRole;
      this.cdr.detectChanges();
    });

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.userName = this.authService.getUserName();
        this.userRole = this.authService.getUserRole();
        this.cdr.detectChanges();
      });
    this.cartService.getCartItemCount().subscribe(count => {
      this.cartItemCount = count;
    });
  }

  logout() {
    this.authService.logout();
    this.userName = null;
    this.userRole = null;
    this.cdr.detectChanges();
  }
}
