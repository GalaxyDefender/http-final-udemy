import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit() {
      firebase.initializeApp({
          apiKey: "AIzaSyDoth9CyUigpT7eR6nr92bHyFgcBYNdVqw",
          authDomain: "ng-recipe-book-bb6d1.firebaseapp.com"
      });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
