import { Component, ViewEncapsulation } from '@angular/core';
import { Images } from 'src/app/data';

import SwiperCore, {
  SwiperOptions,
  Autoplay,
  Pagination,
  Navigation,
} from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  images: string[] = Images;

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    keyboard: true,
    centeredSlides: true,
    navigation: true,
    autoplay: {
      delay: 2200,
      disableOnInteraction: true,
    },
    // pagination: { clickable: true },
    scrollbar: { draggable: true },
    breakpoints: {
      800: {
        slidesPerView: 3,
      },
      600: {
        slidesPerView: 2,
      },
    },
  };
}
