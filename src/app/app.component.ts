import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'stripe-checkout';
    public stripekey: string = 'pk_~~~~';
    public handler: any;

    public ngOnInit() {
        // イベント
        $('#btn-register-card').on('click', () => {
            this.openHandler();
        });
        this.handler = StripeCheckout.configure({
            key: this.stripekey,
            locale: 'ja',
            opened: () => {},
            token: (source) => {
                console.log(source);
            }
        });
    }

    public openHandler() {
        this.handler.open({
            name: '大久保将広',
            description: 'クレジットカードの変更',
            email: 'info@masahiro.me',
            allowRememberMe: false,
            panelLabel: '変更'
        });
    }
}
