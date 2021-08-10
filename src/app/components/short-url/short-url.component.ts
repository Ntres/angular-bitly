import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css'],
})
export class ShortUrlComponent implements OnInit {
  nombreUrl: string;
  urlShort: string;
  urlProcesada: boolean;
  loading: boolean;
  mostrarError: boolean;
  textError: string;

  constructor(private _shortUrlService: ShortUrlService) {
    this.nombreUrl = '';
    this.urlShort = '';
    this.urlProcesada = false;
    this.loading = false;
    this.mostrarError = false;
    this.textError = '';
  }

  ngOnInit(): void {}

  procesarUrl() {
    // Validamos si la url esta vacía
    if (this.nombreUrl === '') {
      this.error('Porfavor ingrese una URL');
      return;
    }

    this.urlProcesada = false;
    this.loading = true;

    console.log(this.nombreUrl);
    this._shortUrlService.getUrlShort(this.nombreUrl).subscribe(
      (data) => {
        this.loading = false;
        this.urlShort = data.link;
        this.urlProcesada = true;
      },
      (error) => {
        this.error('Introduce una URL válida');
      }
    );
  }

  error(text: string) {
    this.loading = false;
    this.nombreUrl = '';
    this.mostrarError = true;
    this.textError = text;

    setTimeout(() => {
      this.mostrarError = false;
    }, 4000);
  }
}
