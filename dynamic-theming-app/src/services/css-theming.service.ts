import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CSSThemingService {

    constructor(private http: HttpClient) {}

    public applyTheme(name: string = null): void {
        if (!name) {
            name = 'theme1';
        }
        this.http.get(`assets/${name}.json`).toPromise()
            .then((res: any) => {
                const colors: Array<any> = res.colors;
                colors.forEach((color: any) => {
                document.documentElement.style.setProperty(`--${color.name}`, `${color.value}`);
                });

                const fonts: Array<any> = res.fonts;
                fonts.forEach((font: any) => {
                document.documentElement.style.setProperty(`--${font.name}`, `${font.value}`);
                });
            })
            .catch((err: any) => {
                console.error('ERROR Applying Theme:::', err);
            });
    }
}

