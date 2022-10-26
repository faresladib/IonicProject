import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnoncesService } from 'src/app/services/annonces.service';
@Component({
  selector: 'app-annonce-details',
  templateUrl: './annonce-details.page.html',
  styleUrls: ['./annonce-details.page.scss'],
})
export class AnnonceDetailsPage implements OnInit {
  id: any;
  annonce: any;
  userEmail: string;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private annoncesService: AnnoncesService
  ) {}
  ngOnInit() {
    //charger l'email a partir du local Storage
    this.userEmail = localStorage.getItem('email');
     // recuperer l'id de l'annonce
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
     // recuperer l'annonce
    this.annonce = this.annoncesService.getAnnonceById(this.id);
    this.annoncesService.getAnnonceById(this.id).subscribe({
      next: (data) => {
        this.annonce = data;
        console.log('data', data);
      },
      error: (error) => {
        console.log('error', error);
      },
    });
    console.log('AnnonceDetailsPage ngOnInit', this.annonce);
  }
  //Delete annonce
  deleteAnnonce() {
    this.annoncesService.deleteAnnonceById(this.id).subscribe({
      next: (data) => {
        console.log('id', this.id);
        this.router.navigate(['/annonces']);
      },
      error: (error) => {
        console.log('error', error);
      },
    });
  }

}
