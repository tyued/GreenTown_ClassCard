import { memo, useRef, useEffect } from 'react'
import * as echarts from 'echarts';
import css from '../../echart.module.scss'

let defaultOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
}

const ChartLine = memo(() => {
  const charts = useRef(null);

  useEffect(() => {
    let echartObj = echarts.getInstanceByDom(charts.current);
    let lineChart = echartObj || echarts.init(charts.current);
    if(!echartObj){
      lineChart.setOption({
          ...defaultOption,
      },true)
  } else {
      setTimeout(()=>{lineChart.resize()},400)
  }
  }, [])
  

  return (
    <div ref={charts} className={css.fullBox}></div>
  )

})

export default ChartLine
