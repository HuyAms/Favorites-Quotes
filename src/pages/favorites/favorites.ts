import {Component, OnInit} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";
import {QuotePage} from "../quote/quote";


@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(private quoteService: QuotesService, private modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      console.log(remove);
      if (remove) {
        this.onRemoveFromFavorite(quote);
      }
    });
  }

  onRemoveFromFavorite(quote: Quote) {
    this.quoteService.removeQuoteFromFavorite(quote);
    // this.quotes = this.quoteService.getFavoriteQuotes();
    const foundQuote = this.quotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
    this.quotes.splice(foundQuote, 1);
  }

}
