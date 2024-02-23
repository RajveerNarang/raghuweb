import React from 'react'
import { 
  Chart as ChartJS,
  registerables
} from "chart.js";

import BarChart2 from '@components/Basics/Charts/BarChart2';
import { dataFilter, optionRender } from '@utils/charts';
import skillData from '@json/skills.json';

ChartJS.register(...registerables);


const Skills = () => {

  const filterData = dataFilter(skillData, "Backend")

  return (
	<>
    <BarChart2 data={filterData} options={optionRender(filterData)} />
  </>
  )
}

export default Skills