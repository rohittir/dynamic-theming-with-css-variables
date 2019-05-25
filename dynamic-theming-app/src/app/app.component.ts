import { Component, OnInit} from '@angular/core';
import { CSSThemingService } from '../services/css-theming.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private themingService: CSSThemingService) {}

  ngOnInit() {
    this.themingService.applyTheme()
  }
}
