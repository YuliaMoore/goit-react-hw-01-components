import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

//     id — унікальний ідентифікатор транзакції
//     type — тип транзакції
//     amount - сума транзакції
// currency - тип валюти

export const TransactionHistory = ({ items }) => {
  return (
    <table class={css.transactionHistory}>
      <thead class={css.tableHead}>
        <tr class={css.transactionDeskHead}>
          <th class={css.headItem}>Type</th>
          <th class={css.headItem}>Amount</th>
          <th class={css.headItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr class={css.deskRow} id={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
    })
  ),
};
