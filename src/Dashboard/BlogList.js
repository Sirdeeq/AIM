/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { _postApi } from "../layouts/api";
import { Button, Modal, ModalHeader, Table } from "react-bootstrap";
import { truncateHTMLContent } from "../components/Project/ProjectMasonry";
import { Link } from "react-router-dom";

export default function BlogList({ setActiveGenre }) {
  const [data, setData] = useState([]);
  const [select, setSelect] = useState({});
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggle = () => setModal(!modal);

  const getBlogData = () => {
    const newForm = { query_type: "select" };
    setLoading(true);
    _postApi(
      "/blog",
      { newForm },
      (data) => {
        setLoading(false);
        setData(data.resp);
      },
      (err) => {
        console.log(err);
        setLoading(false);
      }
    );
  };

  const deleteBlogData = () => {
    const newForm = {
      query_type: "delete",
      ...select,
    };
    setLoading(true);
    _postApi(
      "/blog",
      { newForm },
      (data) => {
        setLoading(false);
        toggle();
        getBlogData();
        setSelect({});
      },
      (err) => {
        console.log(err);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    getBlogData();
  }, []);

  return (
    <div>
      <Modal show={modal} onHide={toggle} centered>
        <ModalHeader>{select.title}</ModalHeader>
        <div className="p-3 bg-secondary text-white">
          Are you sure, You want to delete this?
        </div>
        {/* {JSON.stringify(newForm)} */}
        <center className="m-2">
          <Button className="mx-2" onClick={toggle}>
            Cancel
          </Button>
          <Button className="bg-secondary" onClick={deleteBlogData}>
            Delete
          </Button>
        </center>
      </Modal>
      <Table striped bordered size="sm">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Date</th>
            <th>Title</th>
            <th>Content</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, id) => (
            <tr key={item.id}>
              <td>{id + 1}</td>
              <td>{item.created_at}</td>
              <td>{item.title}</td>
              <td>
                <div
                  dangerouslySetInnerHTML={{
                    __html: truncateHTMLContent(item.content, 200),
                  }}
                />
              </td>
              <td className="d-flex justify-content-between">
                <Link to={`/dashboard?id=${item.id}`}>
                  <Button
                    size="sm"
                    style={{ marginRight: 5 }}
                    onClick={() => {
                      setActiveGenre("Blog");
                    }}
                  >
                    Edit
                  </Button>
                </Link>
                <Button
                  color="secondary"
                  size="sm"
                  onClick={() => {
                    setSelect(item);
                    toggle();
                  }}
                  className="bg-secondary"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
