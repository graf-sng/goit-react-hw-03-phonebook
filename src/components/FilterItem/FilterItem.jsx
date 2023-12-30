import css from './FilterItem.module.css';

const FilterItem = ({ id, name, tel, deleteContact }) => {
  const handlerDel = () => {
    deleteContact(id);
  };

  return (
    <>
      <li key={id}>
        <span>{name} : </span>
        <span>{tel}</span>

        <button onClick={handlerDel} className={css.btn}>
          Delete
        </button>
      </li>
    </>
  );
};

export default FilterItem;
