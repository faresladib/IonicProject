import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AnnoncesService {
  // Get all announces
  getAllAnnonces(): Observable<any> {
    
    return this.httpClient.get(
      'https://gestion-des-annonces-default-rtdb.europe-west1.firebasedatabase.app/annonce.json'
    );
  }
  // ajouter une annonce
  addAnnonce(annonce: any): Observable<any> {
    return this.httpClient.post(
      'https://gestion-des-annonces-default-rtdb.europe-west1.firebasedatabase.app/annonce.json',
      annonce
    );
  }
  // Recuperer annonce par id
  getAnnonceById(id: any): Observable<any> {
    return this.httpClient.get(
      'https://gestion-des-annonces-default-rtdb.europe-west1.firebasedatabase.app/annonce/' +
        id +
        '.json'
    );
  }

  // Get Annonce By Email
  getAnnonceByUId(Mail: any): Observable<any> {

    return this.httpClient.get(
      'https://gestion-des-annonces-default-rtdb.europe-west1.firebasedatabase.app/annonce.json?orderBy="createdBy"&equalTo="'+Mail+'"'
    );
  }
  // Delete annonce
  deleteAnnonceById(id: any): Observable<any> {
    return this.httpClient.delete(
      'https://gestion-des-annonces-default-rtdb.europe-west1.firebasedatabase.app/annonce/' +
        id +
        '.json'
    );
  }
  // Update annonce
  updateAnnonce(annonce: any): Observable<any> {
    return this.httpClient.put(
      'https://gestion-des-annonces-default-rtdb.europe-west1.firebasedatabase.app/annonce/' +
        annonce.id +
        '.json',
      annonce
    );
  }
  constructor(private httpClient: HttpClient) {}
}
