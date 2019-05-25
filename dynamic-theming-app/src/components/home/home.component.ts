import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CSSThemingService } from '../../services/css-theming.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class AppHomeComponent implements OnInit {
    constructor(private activatedRoute: ActivatedRoute, private themingService: CSSThemingService) {

    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((value) => {
            console.error('ROHIT::::theme', value.theme);
            this.themingService.applyTheme(value.theme);
        });
    }

}
