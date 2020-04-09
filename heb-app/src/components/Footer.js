import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import React, {Component} from 'react';

export default class FooterNav extends Component {
  render() {
    return(
  <Footer
    columns={[
      {
        icon: (
          <img src="https://en.wikipedia.org/wiki/File:H-E-B_logo.svg#/media/File:H-E-B_logo.svg" alt=" HEB Logo" />
        ),
        title: 'HEB',
        url: 'https://yuque.com',
        description: 'mission statement',
        openExternal: true,
      },
    ]}
    bottom="Made with ❤️ by AFX"
  />
);
}
}
