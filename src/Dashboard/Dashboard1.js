import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Form,
  Spinner,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { _postApi, apiURL, useQuery } from "../layouts/api";
import EditorCom from "./EditorCom";
import moment from "moment";
import { FaPlus } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import DashboardCard from "./DashboardCard";

function Dashboard1() {
  const query = useQuery();
  const id = query.get("id");

  const _form = {
    title: "",
    attechment: "",
    doc_type: "",
    created_at: moment().format("DD/MM/YYYY"),
  };
  const [form, setForm] = useState(_form);
  const [loading, setLoading] = useState(false);
  const [editorData, setEditorData] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };

  const newForm = {
    ...form,
    content: editorData,
    query_type: id ? "update" : "insert",
    id,
  };

  const fetchBlogs = () => {
    _postApi(
      "/blog",
      { query_type: "viewAll" },
      (data) => {
        setBlogs(data.resp);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const getBlogData = () => {
    const newForm = { query_type: "view", id };
    _postApi(
      "/blog",
      { newForm },
      (data) => {
        setForm(data.resp[0]);
        setEditorData(data.resp[0]?.content);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  useEffect(() => {
    fetchBlogs();
    if (id) {
      getBlogData();
    }
  }, [id]);

  const handleAdd = () => {
    setLoading(true);
    _postApi(
      "/blog",
      { newForm },
      (data) => {
        setForm(_form);
        setEditorData("");
        setLoading(false);
        setShowCreateForm(false);
        fetchBlogs();
      },
      (error) => {
        setLoading(false);
        console.error(error);
      }
    );
  };

  const onChangeAttachment = (e) => {
    const attachmentFile = e.target.files[0];
    const formData = new FormData();
    formData.append("media", attachmentFile);

    fetch(apiURL + "/blog-pictures", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setForm((p) => ({ ...p, attechment: data.url }));
        alert("Image Uploaded successfully");
      })
      .catch((error) => {
        console.error("Error uploading attachment:", error);
      });
  };

  const SampleGraph = () => {
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Sample Data",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
        },
      ],
    };

    return <Line data={data} />;
  };

  return (
    <Container fluid>
      {/* <Row>
        <Col lg="3" sm="6">
          <DashboardCard
            // graph={<SampleGraph />}
            title="Monthly Sales"
            number="12,345"
            description="Total sales for the month"
            rangePercentage={15}
            isPositive={false}
          />
        </Col>
        <Col lg="3" sm="6">
          <DashboardCard
            // graph={<SampleGraph />}
            title="Monthly Sales"
            number="12,345"
            description="Total sales for the month"
            rangePercentage={15}
            isPositive={false}
          />
        </Col>
        <Col lg="3" sm="6">
          <DashboardCard
            // graph={<SampleGraph />}
            title="Monthly Sales"
            number="12,345"
            description="Total sales for the month"
            rangePercentage={15}
            isPositive={false}
          />
        </Col>
        <Col lg="3" sm="6">
          <DashboardCard
            // graph={<SampleGraph />}
            title="Monthly Sales"
            number="12,345"
            description="Total sales for the month"
            rangePercentage={15}
            isPositive={false}
          />
        </Col>
      </Row> */}

      <Row>
        {blogs.map((blog) => (
          <Col lg="3" sm="6" key={blog.id}>
            <Card className="card-stats">
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>{blog.content.substring(0, 100)}...</Card.Text>
                <Button
                  variant="link"
                  onClick={() => (window.location.href = `/blog/${blog.id}`)}
                >
                  Read More
                </Button>
              </Card.Body>
              <Card.Footer>
                <hr />
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  {moment(blog.created_at).format("DD/MM/YYYY")}
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
        <Col lg="3" sm="6">
          <Card className="card-stats">
            <Card.Body className="d-flex justify-content-center align-items-center">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="create-blog-tooltip">Add Blog</Tooltip>}
              >
                <Button
                  variant="primary"
                  onClick={() => setShowCreateForm(!showCreateForm)}
                >
                  <FaPlus size={20} className="mr-2" />
                  Add Blog
                </Button>
              </OverlayTrigger>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {showCreateForm && (
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">CREATE BLOG</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Date</label>
                        <Form.Control
                          placeholder="title"
                          type="date"
                          name="created_at"
                          value={form.created_at}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Title</label>
                        <Form.Control
                          placeholder="Title"
                          type="text"
                          name="title"
                          value={form.title}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Attachment</label>
                        <Form.Control
                          placeholder="attachment"
                          disabled={form.attechment?.length > 10}
                          type="file"
                          name="attechment"
                          onChange={onChangeAttachment}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Type</label>
                        <select
                          className="form-control"
                          name="doc_type"
                          onChange={handleChange}
                          value={form.doc_type}
                        >
                          <option value="">Select</option>
                          <option value="health">HEALTH</option>
                          <option value="education">EDUCATION</option>
                          <option value="shelter">SHELTER</option>
                          <option value="food_nutrition">
                            FOOD AND NUTRITION
                          </option>
                          <option value="child_protection">
                            CHILD PROTECTION
                          </option>
                          <option
                            value="psycho_social"
                            title="PSYCHO SOCIAL AND HOUSEHOLD ECONOMIC STRENTHENING"
                          >
                            P.S.H.E.S
                          </option>
                          <option value="legal">LEGAL</option>
                        </select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Content</label>
                        <EditorCom
                          stateData={editorData}
                          setData={setEditorData}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <center>
                    <Button
                      className="btn-fill pull-right px-4 mt-4"
                      variant="info"
                      disabled={loading}
                      onClick={handleAdd}
                    >
                      {loading ? (
                        <Spinner animation="border" />
                      ) : id ? (
                        "Update"
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </center>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Dashboard1;
