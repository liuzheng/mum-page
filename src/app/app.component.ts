import {Component} from '@angular/core';

interface Link {
  image: string;
  url: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  list: Array<Link>;

  constructor() {
    this.list = [{
      image: '/assets/imgs/taobao.svg',
      url: 'https://www.taobao.com/',
      name: '淘宝'
    }, {
      image: '/assets/imgs/alibaba.svg',
      url: 'https://www.alibaba.com/',
      name: '阿里巴巴'
    }, {
      image: '/assets/imgs/baidu.svg',
      url: 'https://www.baidu.com/',
      name: '百度'
    }, {
      image: '/assets/imgs/icbc.png',
      url: 'https://www.icbc.com.cn/',
      name: '工商银行'
    }, {
      image: '/assets/imgs/youzhen.jpg',
      url: 'http://www.psbc.com/',
      name: '邮政银行'
    }, {
      image: '/assets/imgs/jd.png',
      url: 'https://www.jd.com/',
      name: '京东'
    }];
  }

}
