import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <div>
      <table className={css.trnsactionTable}>
        <thead className={css.mainRow}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr className={css.tableRow} key={item.id}>
              <td className={css.tableCell}>{item.type}</td>
              <td className={css.tableCell}>{item.amount}</td>
              <td className={css.tableCell}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
