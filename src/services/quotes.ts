import {Quote} from "../data/quote.interface";

export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  addQuoteToFavorite(quote: Quote) {
    this.favoriteQuotes.push(quote);
  }

  removeQuoteFromFavorite(quote: Quote) {
    const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
    this.favoriteQuotes.slice(position, 1);
  }

  getFavoriteQuotes() {
    return this.favoriteQuotes.slice();
  }
}
