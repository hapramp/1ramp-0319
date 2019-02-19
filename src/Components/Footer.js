import React, { Component } from 'react';

import style from './style.module.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className={style.footerSection}>
        <div className={`container ${style.footerContainer}`}>
            <div className={style.footerWrapper}>
                <div className={style.footerGroup}>
                    <h3 className={style.footerGroupHeader}>Links</h3>
                    <a href="https://1ramp.io/" className={style.footerGroupItem} target="_blank">Home</a>
                    <a href="https://1ramp.io/about.html" className={style.footerGroupItem} target="_blank">About</a>
                    <a href="https://1ramp.io/faq.html" className={style.footerGroupItem} target="_blank">FAQs</a>
                </div>
                <div className={style.footerGroup}>
                    <h3 className={style.footerGroupHeader}>Social</h3>
                    <a href="https://www.facebook.com/the1ramp/"  className={style.footerGroupItem} target="_blank">Facebook</a>
                    <a href="https://twitter.com/the1ramp" className={style.footerGroupItem} target="_blank">Twitter</a>
                    <a href="https://www.instagram.com/the1ramp/" className={style.footerGroupItem} target="_blank">Instagram</a>
                    <a href="https://www.linkedin.com/company/13405668/" className={style.footerGroupItem} target="_blank">LinkedIn</a>
                </div>
                <div className={style.footerGroup}>
                    <h3 className={style.footerGroupHeader}>Blogs</h3>
                    <a href="https://steemit.com/@the1ramp" className={style.footerGroupItem} target="_blank">Steemit</a>
                    <a href="https://medium.com/1ramp" className={style.footerGroupItem} target="_blank">Medium</a>
                </div>
                <div className={style.footerGroup}>
                    <h3 className={style.footerGroupHeader}>Contact</h3>
                    <a href="mailto:hi@1ramp.io" className={style.footerGroupItem} target="_blank">hi@1ramp.io</a>
                    <a href="https://discord.gg/PkgCv8j" className={style.footerGroupItem} target="_blank">Discord</a>
                </div>                
            </div>
            <div className={style.footerCr}>
            Copyright 2018 | <a className="text-color-white" href="">Terms</a>
            </div>
        </div>
      </footer>
    )
  }
}
