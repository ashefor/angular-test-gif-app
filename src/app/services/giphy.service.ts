import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http: HttpClient) { }
  private apiKey = 'deokzgUjxm6QHQdp3H3aca1LSZcCpucc'
  // private getUrl = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&limit=50"
  private getUrl = "http://api.giphy.com/v1/gifs/"

  getResults(){
    return this.http.get(`${this.getUrl}search?q=ferrari&api_key=${this.apiKey}`)
  }
  searchDatabase(itemToFind: any, limit, offset){
    return this.http.get(`${this.getUrl}search?api_key=${this.apiKey}&q=${itemToFind}&limit=${limit}&offset=${offset}`)
  }
  getSingleGif(gifId: any){
    return this.http.get(`${this.getUrl}${gifId}`)
  }
  getoneSingleGif(){
    const headers = new HttpHeaders();
    headers.set('api_key','deokzgUjxm6QHQdp3H3aca1LSZcCpucc')
    return this.http.get(`http://api.giphy.com/v1/gifs/xT4uQulxzV39haRFjG`, {headers:headers})
  }
  getASingleGif(GifId){
    return this.http.get(`${this.getUrl}${GifId}?api_key=${this.apiKey}`)
  }
  getRandomGif(){
    return this.http.get(`${this.getUrl}random?api_key=${this.apiKey}&tag=burrito&limit=50`)
  }
  getGifs(){
    return this.http.get(`${this.getUrl}api_key=${this.apiKey}?id=xT4uQulxzV39haRFjG,3og0IPxMM0erATueVW`)
  }
}
