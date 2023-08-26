import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {
  private adsList:string[] = [];
  constructor() {
    this.adsList = [
      'Big Discount',
      'sale up to 50%',
      'check our white friday offers',
      // '',
      'special white friday offers up to 70%'
    ]
  }

  getScheduledAds(intervalSeconds:number):Observable<string>{
    let addsObservable = new Observable<string>((observer)=>{
      // observer.next()
      // observer.error()
      // observer.complete()
      let counter = 0
      let adsTimer = setInterval(()=>{
        console.log('interval');

        if (counter == this.adsList.length){
          observer.complete()
          // clearInterval(adsTimer)
        }
        if(this.adsList[counter] == ''){
          observer.error('error: no ads found')
        }
        observer.next(this.adsList[counter])
        counter++
      }, intervalSeconds*1000)
      return {
        unsubscribe(){
          clearInterval(adsTimer)
          console.log('in obs unsubscribed');

        }
      }
    })
    return addsObservable
  }











}
