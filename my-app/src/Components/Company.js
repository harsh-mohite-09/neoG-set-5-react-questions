import { company } from "../constants";

const Company = () => {
  return (
    <>
      <h1>Company</h1>
      <ul>
        {company.map(({ id, name, department, salary }) => {
          return (
            <li key={id}>
              {name} | {department} | {salary}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Company;
