import css from './Filter.module.css';

const Filter = ({ value, handlerFilter }) => {
  return (
    <>
      <input
        type="text"
        name="find"
        value={value}
        onChange={handlerFilter}
        className={css.input}
        required
      />
    </>
  );
};

export default Filter;
