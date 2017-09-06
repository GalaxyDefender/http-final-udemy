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
          apiKey: "AIzaSyCDbCL2J0CmDy8WXBww5I8NCs0C7P1KxeA",
          authDomain: "ng-recipe-book-fd02a.firebaseapp.com"
      });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
