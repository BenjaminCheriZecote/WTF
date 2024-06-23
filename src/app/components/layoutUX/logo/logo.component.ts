import { Component, Input } from '@angular/core';

@Component({
  selector: 'logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {
  @Input() width: string;
  @Input() color: string;
}
