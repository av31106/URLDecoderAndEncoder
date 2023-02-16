import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'URL Decoder And Encoder';
  
  decode(inputArea: HTMLTextAreaElement, outputArea: HTMLTextAreaElement) {
    outputArea.value = decodeURIComponent(inputArea.value);
  }

  encode(inputArea: HTMLTextAreaElement, outputArea: HTMLTextAreaElement) {
    outputArea.value = encodeURIComponent(inputArea.value);
  }

  copyToClipboard(outputArea: HTMLTextAreaElement) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(outputArea.value).then(() => {
        alert('Copied to Clipboard')
      }, (error) => {
        console.log(error)
      });
    } else {
      console.log('Browser do not support Clipboard API')
    }
  }
}
