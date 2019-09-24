import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

import style from './style.module.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className={style.footerSection}>
        <div className={`container ${style.footerContainer}`}>
            <div className={style.footerWrapper}>
                <div className={style.footerGroup}>
                    <h3 className={style.footerGroupHeader}>Links</h3>
                    <NavLink exact to='/' className={style.footerGroupItem} >Home</NavLink>
                    <NavLink to='/about' className={style.footerGroupItem} >About</NavLink>
                    <NavLink to='/communities' className={style.footerGroupItem} >Communities</NavLink>
                
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
                    <a href="mailto:hi@hapramp.com" className={style.footerGroupItem} target="_blank">hi@hapramp.com</a>
                </div>                
            </div>
            <div className={style.footerCr}>
            By <a className="text-color-white" href="http://hapramp.com" target="_blank">Hapramp Studio</a> 
            </div>
        </div>
      </footer>
    )
  }
}
