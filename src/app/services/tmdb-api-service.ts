import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieTitle, TVTitle } from '../../interfaces/streaming-Service';


@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  API_KEY = secrets.APIIKEY;

  constructor(private httpClient: HttpClient) {}

  getHomepageTVTitles(pageNumber: number) {
    const headers = {
      Authorization:secrets.BEARERRTOKEN,
    };
    return this.httpClient.get<TVTitle[]>(
      `${secrets.BASEEURL}/tv/popular?page=${pageNumber}&limit=100`,
      { headers }
    );
  }

  getSingleMovieTitle() {
    const headers = {
      Authorization:secrets.BEARERRTOKEN,
    };
    return this.httpClient.get<MovieTitle>(
      `${secrets.BASEEURL}/movie/948549?language=en-US`,
      { headers }
    );
  }

  getHomepageMovieTitles(pageNumber: number) {
    const headers = {
      Authorization:secrets.BEARERRTOKEN,
    };
    return this.httpClient.get<any>(
      `${secrets.BASEEURL}/movie/popular?page=${pageNumber}&limit=100`,
      { headers }
    );
  }

  getSearch(searchText: string) {
    const headers = {
      Authorization:secrets.BEARERRTOKEN,
    };
    return this.httpClient.get<any>(
      `${secrets.BASEEURL}/search/multi?query=${searchText}&include_adult=false&language=en-US&page=1`,
      { headers }
    );
  }

  getTVDetails(seriesId: number) {
    const headers = {
      Authorization:secrets.BEARERRTOKEN,
    };
    return this.httpClient.get<any>(
      `${secrets.BASEEURL}/tv/${seriesId}`,
      { headers }
    );
  }

  getMovieDetails(movieId: number) {
    const headers = {
      Authorization:secrets.BEARERRTOKEN,
    };
    return this.httpClient.get<any>(
      `${secrets.BASEEURL}/movie/${movieId}`,
      { headers }
    );
  }
  
  // Tv providers api call
  getMovieProviders(movieId: number){
    const headers = {
      Authorization:secrets.BEARERRTOKEN,
    };
    return this.httpClient.get<any>(
      `${secrets.BASEEURL}/movie/${movieId}/watch/providers`,
      { headers }
    );
  }

  //Tv providers api call
  getTVProviders(seriesId: number){
    const headers = {
      Authorization:secrets.BEARERRTOKEN,
    };
    return this.httpClient.get<any>(
      `${secrets.BASEEURL}/tv/${seriesId}/watch/providers`,
      { headers }
    );
  }
}
