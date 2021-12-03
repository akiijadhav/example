import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ReactPaginate from "react-paginate";

function Users() {
  //state of users
  let history = useHistory();

  const [users, setUsers] = useState([]);

  //fetch data on mount
  useEffect(() => {
    axios.get(`https://reqres.in/api/users`).then((res) => {
      setUsers(res.data.data);
    });
  }, []);

  //change to profile page of user
  const handleClick = (user) => {
    console.log(user, "id clicked");
    history.push({
      pathname: `/profile/${user.id}`,
      state: {
        data: user,
      },
    });
    console.log(history, "history");
  };

  //test data
  //   console.log(users, "users");

  //pagination
  //current page number assumin u start from 0
  const [pageNumber, setPageNumber] = useState(0);
  //show per page
  const usersPerPage = 6;
  //on visited page numer = that page number * 6 users
  const pagesVisited = pageNumber * usersPerPage;

  //page count to count how many pages we need
  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      show list of users
      <div className="cotainer">
        <div className="containerPaginate">
          <div className="justify-content-center">
            {users
              .slice(pagesVisited, pagesVisited + usersPerPage)
              .map((user, index) => {
                return (
                  <li key={index}>
                    <img
                      src={user.avatar}
                      alt="avatar"
                      onClick={() => handleClick(user)}
                    />
                    {user.first_name}
                  </li>
                );
              })}
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              breakClassName={"paginationBreak"}
              containerClassName={"paginationButtns"}
              previousLinkClassName={"previousBttn"}
              marginPagesDisplayed={1}
              breakLabel={"..."}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
              pageRangeDisplayed={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
