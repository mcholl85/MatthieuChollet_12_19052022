import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

function ScoreChart({ score }) {
  const data = [
    { name: 'sucessed', value: score },
    { name: 'goal', value: 1 - score },
  ];

  return (
    <div className="score">
      <h2 className="score__title">Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            innerRadius={70}
            outerRadius={80}
            fill="#FF0000"
            startAngle={90}
            endAngle={450}
            cornerRadius={5}
          >
            <Cell name="sucessed" fillOpacity="1" />
            <Cell name="goal" fillOpacity="0" stroke="#fbfbfb" />
          </Pie>
          <Pie
            dataKey="value"
            data={data}
            innerRadius={0}
            outerRadius={70}
            fill="#FFFFFF"
            isAnimationActive={false}
          />
          <text
            x="50%"
            y="45%"
            fontSize={26}
            fontStyle="normal"
            fontWeight={700}
            textAnchor="middle"
          >{`${score * 100}%`}</text>
          <text
            x="50%"
            y="55%"
            fontSize={16}
            fontWeight={500}
            textAnchor="middle"
            fill="#74798C"
          >
            de votre objectif
          </text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ScoreChart;
