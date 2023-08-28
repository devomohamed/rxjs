import { Component, OnInit } from '@angular/core';
import { PromotionAdsService } from './services/promotion-ads.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rxjs';
  myObs:any
  constructor(private promoAds:PromotionAdsService) { }
  ngOnInit(): void {
    let observer = {
      next: (value:string) => console.log(value),
      error: (error:string) => console.log(error),
      complete: () => console.log('complete')
    }
    // this.myObs = this.promoAds.getScheduledAds(1).subscribe(observer)
    // this.myObs = this.promoAds.getSerialAds().subscribe(observer)
    this.myObs = this.promoAds.getSerialAds().pipe(filter(ad=>ad.includes('sale'))).subscribe(observer)


  }

  ngOnDestroy(): void {
    this.myObs.unsubscribe()
  }
}
