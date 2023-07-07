import React from 'react'
import css from './dashboard.module.scss';
import ChartLine from '../../component/echart/line/index.js';

export default function index() {
  return (
    <div>
        <div className={css.block}>
            <ChartLine />
        </div>
    </div>
  )
}
