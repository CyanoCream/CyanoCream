import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  // Active screenshot index per project
  activeImg: number[] = [0, 0];

  // Lightbox state
  lightboxOpen = false;
  lightboxSrc = '';
  lbIndex = 0;
  lbImages: string[] = [];

  private projectImages: string[][] = [
    [
      '../../assets/images/project/synapsync-welcome.png',
      '../../assets/images/project/synapsync-changes.png',
      '../../assets/images/project/synapsync-settings.png',
    ],
    ['../../assets/images/project/kidoland.png'],
  ];

  setActive(project: number, index: number) {
    this.activeImg[project] = index;
  }

  openLightbox(project: number, index: number) {
    this.lbImages = this.projectImages[project];
    this.lbIndex = index;
    this.lightboxSrc = this.lbImages[this.lbIndex];
    this.lightboxOpen = true;
  }

  closeLightbox() {
    this.lightboxOpen = false;
  }

  lbNext() {
    this.lbIndex = (this.lbIndex + 1) % this.lbImages.length;
    this.lightboxSrc = this.lbImages[this.lbIndex];
  }

  lbPrev() {
    this.lbIndex =
      (this.lbIndex - 1 + this.lbImages.length) % this.lbImages.length;
    this.lightboxSrc = this.lbImages[this.lbIndex];
  }
}
