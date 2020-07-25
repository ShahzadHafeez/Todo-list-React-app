import React, { Component } from "react";
import { getList } from "./ListFunctions";

class myList extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    getList().then((data) => {
      this.setState({ list: [...data] });
    });
  }
  render() {
    const { list } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1 className="text-center">New List</h1>
            <table className="table">
              <tbody>
                {list.length > 0 &&
                  list.map((item, index) => (
                    <tr key={index}>
                      <td className="text-left">{item.task_name}</td>
                      <td className="text-right"></td>
                    </tr>
                  ))}
                {list.length === 0 && (
                  <tr>
                    <td>Loading...</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default myList;
