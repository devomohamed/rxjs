import { Component, OnInit } from '@angular/core';
import { PromotionAdsService } from './services/promotion-ads.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rxjs';
  constructor(private promoAds:PromotionAdsService) { }
  ngOnInit(): void {
    let observer = {
      next: (value:string) => console.log(value),
      error: (error:string) => console.log(error),
      complete: () => console.log('complete')
    }
    this.promoAds.getScheduledAds(5).subscribe(observer)

  }
}
