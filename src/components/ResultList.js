import React from "react";
import { Link } from "react-router-dom";

import "./styles/ResultList.css";

function useSearchUsers(users) {
  const [query, setQuery] = React.useState("");
  const [filteredUsers, setFilteredUsers] = React.useState(users);

  React.useMemo(() => {
    const result = users.filter(user => {
      return `${user.username} ${user.name}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredUsers(result);
  }, [users, query]);

  return { query, setQuery, filteredUsers };
}

function ResultList(props) {
  const users = props.results;

  const { query, setQuery, filteredUsers } = useSearchUsers(users);

  if (filteredUsers.length === 0) {
    return (
      <React.Fragment>
        <div className="searcher-container">
          <span className="searcher-text">Search</span>
          <input
            className="form-control"
            type="text"
            value={query}
            onChange={event => {
              setQuery(event.target.value);
            }}
          />
        </div>
        <h3>No users were found</h3>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className="searcher-container">
        <span className="searcher-text">Search</span>
        <input
          className="form-control"
          type="text"
          value={query}
          onChange={event => {
            setQuery(event.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredUsers.map(result => {
          return (
            <li className="resultList-item" key={result.id}>
              <Link to={`/user/${result.id}`}>
                <div className="result-container">
                  <div className="result-profile">
                    <figure className="result-photoContainer" />
                    <div className="result-user">
                      <span className="user-username">@{result.username}</span>
                      <span className="user-name">{result.name}</span>
                    </div>
                  </div>
                  <span className="user-see">See Albums</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default ResultList;
