"use client";
import { useEffect, useState } from "react";
import { Table } from "antd";
const columns = [
  { key: "id", title: "Id", dataIndex: "id", rowScope: "row" },
  { key: "id", title: "Name", dataIndex: "name", rowScope: "row" },
  { key: "id", title: "Phone", dataIndex: "phone", rowScope: "row" },
  { key: "id", title: "Email", dataIndex: "email", rowScope: "row" },
  {
    key: "id",
    title: "City",
    render: (text) => text.address.city,
    rowScope: "row",
  },
];

const UserData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <div className="mx-5 overflow-x-scroll">
      <Table pagination={false} columns={columns} dataSource={users} bordered />
    </div>
  );
};

export default UserData;
