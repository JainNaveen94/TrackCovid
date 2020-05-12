import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { INews } from '../interfaces/INews.model';
import { IAdmin } from '../interfaces/IAdmin.model';

@Injectable({
  providedIn: 'root'
})
export class ApiInMemoryDbService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const adminInfo: IAdmin[] = [
      {
        id: 1,
        username: 'admin',
        password: 'admin',
      },
      {
        id: 2,
        username: 'naveen',
        password: 'naveen',
      },
    ];

    const newsInfo: INews[] = [
      {
        id: 1,
        title: 'Coronavirus vaccine',
        description:
          'The race to find a vaccine and cure for coronavirus has reached its zenith. Many companies and countries have made significant strides in the search for a vaccine for COVID-19. The search for a vaccine seems like a race against time as countries, including India, prepare to open up and relax restrictions that have been in place for at least a month. India is heading towards the end of its third phase of lockdown. The country has over 70,000 cases, with more than 46,000 active cases. More than 2,200 people have died in India, while 22,454 people have been discharged according to the Ministry of Home and Family Welfare.',
        uri:
          'https://www.businesstoday.in/current/economy-politics/coronavirus-vaccine-heres-whats-brewing-in-india-and-globally/story/403588.html',
      },
      {
        id: 2,
        title: 'Coronavirus warriors',
        description:
          'Doctors, paramedics, policemen, sanitation workers and others engaged in different duties in the fight against the COVID-19 are called “corona warriors”. The armed forces conducted aerial fly-pasts and shower flower petals on several hospitals across the country on May 3 to express gratitude to lakhs of doctors, paramedics, sanitation staff and other frontline workers engaged in fighting the coronavirus pandemic.',
        uri:
          'https://www.thehindu.com/news/national/coronavirus-amit-shah-salutes-corona-warriors-says-entire-country-stands-with-them/article31494495.ece',
      },
    ];
    return { adminInfo, newsInfo };
  }

  /** Method that generates the ids of user when not passed. */
  genId(newsInfo: INews[]): number {
    return newsInfo.length > 0
      ? Math.max(...newsInfo.map((news) => news.id)) + 1
      : 1;
  }

}
