import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsCardComponent } from './news-card.component';

describe('NewsCardComponent', () => {
  let component: NewsCardComponent;
  let fixture: ComponentFixture<NewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NewsCardComponent);
    component = fixture.componentInstance;
    // Mock input data
    component.article = {
      source: { id: 'test', name: 'Test Source' },
      author: 'Test Author',
      title: 'Test Title',
      description: 'Test Description',
      url: 'https://test.com',
      urlToImage: 'https://test.com/image.jpg',
      publishedAt: '2023-01-01T00:00:00Z',
      content: 'Test Content'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
