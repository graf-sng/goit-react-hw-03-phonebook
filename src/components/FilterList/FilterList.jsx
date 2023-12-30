import FilterItem from '../FilterItem/FilterItem';

const FilterList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, tel }) => (
          <FilterItem
            name={name}
            tel={tel}
            id={id}
            key={id}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </>
  );
};

export default FilterList;
