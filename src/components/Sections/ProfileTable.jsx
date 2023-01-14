import { useState } from "react";

//Styles
import "../../style/table.css";

//Antd Components
import "antd/dist/reset.css";
import { Button, Table, Modal, Input, Form } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [searchedText, setSearchedText] = useState("");
  const [dataSource, setDataSource] = useState([
    {
      key: 1,
      id: 1,
      firstname: "Keith",
      lastname: "Julian",
      email: "keithjulian@gmail.com",
      password: "blackberrii",
      creationdate: "2022-02-23",
      licensetype: "Basic",
      purchasedate: "2022-02-24",
      expirydate: "2022-03-25",
      serialnumber: "ADGHK-ADSKG-ASH13-AETOU-WEITY",
    },
    {
      key: 2,
      id: 2,
      firstname: "Humaiz",
      lastname: "Uddin",
      email: "humaizuddin@gmail.com",
      password: "humaiz123",
      creationdate: "2022-02-23",
      licensetype: "Professional",
      purchasedate: "2022-02-24",
      expirydate: "2022-03-25",
      serialnumber: "39Q5U-Q4UIE-IHOIH-HJFHF-HUFUY",
    },
    {
      key: 3,
      id: 3,
      firstname: "Farhan",
      lastname: "Saeed",
      email: "farhansaeed@gmail.com",
      password: "farhanthegreat",
      creationdate: "2022-02-23",
      licensetype: "Basic",
      purchasedate: "2022-02-24",
      expirydate: "2022-03-25",
      serialnumber: "0890U-KOIHO-GHXHG-HFUUH-DRZDF",
    },
    {
      key: 4,
      id: 4,
      firstname: "Mustafa",
      lastname: "Jawaid",
      email: "mustafajawaid@gmail.com",
      password: "mustafaisawesome",
      creationdate: "2022-02-23",
      licensetype: "Advanced",
      purchasedate: "2022-02-24",
      expirydate: "2022-03-25",
      serialnumber: "KJGKJ-JXFGK-ZFGUF-ZFJGJ-UYDFI",
    },
    {
      key: 5,
      id: 5,
      firstname: "Daniyal",
      lastname: "Qaiser",
      email: "daniyalqaiser@gmail.com",
      password: "daneeyall",
      creationdate: "2022-02-23",
      licensetype: "Basic",
      purchasedate: "2022-02-24",
      expirydate: "2022-03-25",
      serialnumber: "HGKDH-HGDIK-OYTDY-TUASR-IYHFF",
    },
    {
      key: 6,
      id: 6,
      firstname: "Ahsan",
      lastname: "Ahmed",
      email: "ahsanahmed@gmail.com",
      password: "shapatar123",
      creationdate: "2022-02-23",
      licensetype: "Basic",
      purchasedate: "2022-02-24",
      expirydate: "2022-03-25",
      serialnumber: "UFSI-OTDFO-TODOD-VXNNV-TISDT",
    },
  ]);

//Table Columns

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
      filteredValue: [searchedText],
      onFilter: (value, record) => {
        return String(record.id)
          .toLowerCase()
          .includes(value.toLowerCase()) ||
          String(record.firstname)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(record.lastname)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(record.email)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(record.password)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(record.creationdate)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(record.licensetype)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(record.purchasedate)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(record.expirydate)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(record.serialnumber)
            .toLowerCase()
            .includes(value.toLowerCase())
      }
    },
    {
      key: "2",
      title: "First Name",
      dataIndex: "firstname",

    },
    {
      key: "3",
      title: "Last Name",
      dataIndex: "lastname",
    },
    {
      key: "4",
      title: "Email Address",
      dataIndex: "email",
    },
    {
      key: "5",
      title: "Password",
      dataIndex: "password",
    },
    {
      key: "6",
      title: "Date of Creation",
      dataIndex: "creationdate",
    },
    {
      key: "7",
      title: "License Type",
      dataIndex: "licensetype",
    },
    {
      key: "8",
      title: "Date of Purchase",
      dataIndex: "purchasedate",
    },
    {
      key: "9",
      title: "Date of Expiry",
      dataIndex: "expirydate",
    },
    {
      key: "10",
      title: "Product Serial Number",
      dataIndex: "serialnumber",
    },
    {
      key: "11",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditRecord(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteRecord(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

//Profile Table Add Customer

const onAddCustomer = () => {
    setIsAdding(true);
  };
  const resetAdding = () => {
    setIsAdding(false);
  };

//Profile Table Edit and Delete Customer

  const onDeleteRecord = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this customer record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((Customer) => Customer.id !== record.id);
        });
      },
    });
  };
  const onEditRecord = (record) => {
    setIsEditing(true);
    setEditingCustomer({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingCustomer(null);
  };

//Front-end Render
  
return (
    <div className="App">
      <header className="App-header">

{/* Search bar */}

        <Input.Search
          placeholder="Search any value here..."
          style={{ marginBottom: 20, marginTop: "8rem", maxWidth: 800 }}
          onSearch={(value) => {
            setSearchedText(value)
          }}
          onChange={(e) => {
            setSearchedText(e.target.value)
          }}
        />

{/* Add Record button */}

        <Button style={{ margin: 10 }} onClick={onAddCustomer}>Add a new customer record</Button>
       
{/* Table Render */}

        <Table  key={"new-table"} style={{ marginTop: 15}} columns={columns} dataSource={dataSource}></Table>

{/* Editing Modal */}

        <Modal
          title="Edit Customer"
          open={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((Customer) => {
                if (Customer.id === editingCustomer.id) {
                  return editingCustomer;
                } else {
                  return Customer;
                }
              });
            });
            resetEditing();
          }}
        >
          <b>First Name: </b> <Input
            value={editingCustomer?.firstname}
            onChange={(e) => {
              setEditingCustomer((pre) => {
                return { ...pre, firstname: e.target.value };
              });
            }}
          />
          <b>Last Name:</b> <Input
            value={editingCustomer?.lastname}
            onChange={(e) => {
              setEditingCustomer((pre) => {
                return { ...pre, lastname: e.target.value };
              });
            }}
          />
          <b>Email: </b><Input
            value={editingCustomer?.email}
            onChange={(e) => {
              setEditingCustomer((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
          <b>Password: </b><Input
            value={editingCustomer?.password}
            onChange={(e) => {
              setEditingCustomer((pre) => {
                return { ...pre, password: e.target.value };
              });
            }}
          />
          <b>Date of Creation: </b><Input
            value={editingCustomer?.creationdate}
            onChange={(e) => {
              setEditingCustomer((pre) => {
                return { ...pre, creationdate: e.target.value };
              });
            }}
          />
          <b>License Type: </b><Input
            value={editingCustomer?.licensetype}
            onChange={(e) => {
              setEditingCustomer((pre) => {
                return { ...pre, licensetype: e.target.value };
              });
            }}
          />
          <b>Date of Purchase: </b><Input
            value={editingCustomer?.purchasedate}
            onChange={(e) => {
              setEditingCustomer((pre) => {
                return { ...pre, purchasedate: e.target.value };
              });
            }}
          />
          <b>Date of Expiry: </b><Input
            value={editingCustomer?.expirydate}
            onChange={(e) => {
              setEditingCustomer((pre) => {
                return { ...pre, expirydate: e.target.value };
              });
            }}
          />
          <b>Product Serial Number: </b><Input
            value={editingCustomer?.serialnumber}
            onChange={(e) => {
              setEditingCustomer((pre) => {
                return { ...pre, serialnumber: e.target.value };
              });
            }}
          />
        </Modal>

{/* Add Customer Modal */}

        <Modal
          title="Add Customer"
          open={isAdding}
          okText="Save"
          onCancel={() => {
            resetAdding();
          }}
          onOk={() => alert("add record function here")}
        >
          <Form>
          <Form.Item label="First Name"><Input />
        </Form.Item>
          <Form.Item label="Last Name"><Input />
        </Form.Item>
          <Form.Item label="Email"><Input />
        </Form.Item>
          <Form.Item label="Password"><Input />
        </Form.Item>
          </Form>
    </Modal>
      </header>
    </div>
    
  );
}

export default App;