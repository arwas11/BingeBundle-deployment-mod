import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage, Location } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { MediaSearchService } from '../../services/media-search-service.service';

@Component({
  selector: 'app-search-list',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatCardModule,
    MatIconModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatIconButton,
    MatButtonModule,
    MatIcon
  ],
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.css',
})
export class SearchListComponent implements OnInit {
  search_list: any[] = [];
  subscription: Subscription | null = null;
  errorMessage: string | null = null;

  constructor(private MediaSearchService: MediaSearchService, private _location: Location) {}

  ngOnInit(): void {
    this.showSearchResults();
    console.log('Search', this.search_list);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  showSearchResults() {
    console.log('Search List Length', this.search_list.length);
    this.MediaSearchService.getResults().subscribe((response) => {
      if (response.length > 0) {
        console.log(response);
        this.search_list = response;
        this.errorMessage = null;
        console.log('Search List Length', this.search_list.length);
      } else {
        console.error('Error retrieving search results');
        this.search_list = []; // Set empty array for search results
        this.errorMessage = 'No search results found.';
      }
    });
  }
  backClicked() {
    this._location.back();
  }
}
