/* eslint-disable no-nested-ternary */

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">My name is {name}</h2>

        {age && <p className="Person__age">I am {age}</p>}

        <p className="Person__partner">
          {isMarried
            ? sex === 'm'
              ? `${partnerName} is my wife`
              : `${partnerName} is my husband`
            : 'I am not married'}
        </p>
      </section>
    </div>
  );
};
