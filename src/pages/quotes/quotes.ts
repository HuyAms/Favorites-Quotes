import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteGroup: { category: string, quotes: Quote[], icon: string };

  constructor(private navParams: NavParams, private alertCtrl: AlertController, private quoteService: QuotesService) {
  }

  ngOnInit(): void {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.quoteService.addQuoteToFavorite(selectedQuote);
          }
        }, {
          text: 'No, I changed my mind!',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    alert.present();
  }

  onRemoveFromFavorite(quote: Quote) {
    console.log(quote.id);
    this.quoteService.removeQuoteFromFavorite(quote);
  }

  isFavorite(quote: Quote) {
    return this.quoteService.isQuoteFavorite(quote);
  }

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  //  Add elvis operator (?) in template to use this approach
  // }

}
