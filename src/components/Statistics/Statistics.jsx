import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <section class={css.statistics}>
      <h2 class={css.title}>{title}</h2>

      <ul class={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li class={css.item} key={id}>
              <span class={css.label}>{label}</span>
              <span class={css.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.prototype = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};
