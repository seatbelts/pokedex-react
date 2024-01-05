import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { Pokemon, PokemonStat } from 'pokenode-ts';
import { getTypeColor } from '../../utils/typeColors';
import { useEffect } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

/**
 * @description This component graph regarding Pokemon States with graph.js
 *
 * @function StatsTable A react component
 * @returns {ReactNode} A React element that renders a Pokemon Stats.
 */
const StatsTable = (pokemon: Pokemon) => {
  const globalType: string = pokemon?.types[0]?.type.name;

  const labels = [
    'HP:',
    'Attack:',
    'Defense:',
    'Sp. Attack:',
    'Sp. Defense:',
    'Speed:',
  ];

  const stats = {
    labels,
    datasets: [
      {
        label: `Base Stats for ${pokemon.name}`,
        data: pokemon.stats.map((stat: PokemonStat) => stat.base_stat),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const options = {
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Base Stats',
      },
    },
  };

  useEffect(() => {
    pokemon.stats.map((stat: PokemonStat) => {
      return stat.base_stat;
    });
  }, []);

  return (
    <div
      className="container text-center p-2"
      style={{
        backgroundColor: getTypeColor(globalType ?? ''),
      }}
    >
      <div className="rounded-md bg-white">
        <Bar options={options} data={stats} />
      </div>
    </div>
  );
};

export default StatsTable;
