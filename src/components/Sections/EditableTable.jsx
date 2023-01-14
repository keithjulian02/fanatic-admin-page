import { useState } from "react";

//Styles
import "../../style/table.css";

//Antd Components
import "antd/dist/reset.css";
import { Table, Modal, Input, Radio } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function App() {
  const {TextArea} = Input;
  const [isEditing, setIsEditing] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [searchedText, setSearchedText ] = useState("");
  const [dataSource, setDataSource] = useState([
    {
      key:1,
      ticketid: 22231,
      userid: 64748,
      email: "keithjulian@gmail.com",
      issuetype: "Program",
      ticketdate: "2022-02-23",
      ticketdescription: "The program is not booting up despite all the latest updates installed",
      ticketstatus: "New",
      },
    {
      key:2,
      ticketid: 22034,
      userid: 64748,
      email: "keithjulian@gmail.com",
      issuetype: "License",
      ticketdate: "2022-05-11",
      ticketdescription: "License renewed 2 days ago automatically",
      ticketstatus: "New",
      },
    { 
      key:3,
      ticketid: 29348,
      userid: 64748,
      email: "keithjulian@gmail.com",
      issuetype: "Program",
      ticketdate: "2022-02-23",
      ticketdescription: "Hello! \n Thank you for contacting us. \n Have you tried reinstalling the program if the dependencies are not working? \n The previous chat is attached below: \n hello my program isnt working. its giving a dx11 error",
      ticketstatus: "New",
      },
    {
      key:4,
      ticketid: 23083,
      userid: 64748,
      email: "keithjulian@gmail.com",
      issuetype: "Program",
      ticketdate: "2022-02-23",
      ticketdescription: "The program is not booting up despite all the latest updates installed",
      ticketstatus: "New",
      },
    {
      key:5,
      ticketid: 20385,
      userid: 64748,
      email: "keithjulian@gmail.com",
      issuetype: "Program",
      ticketdate: "2022-02-23",
      ticketdescription: "The program is not booting up despite all the latest updates installed",
      ticketstatus: "New",
      },
    {
      key:6,
      ticketid: 86746,
      userid: 64748,
      email: "keithjulian@gmail.com",
      issuetype: "Program",
      ticketdate: "2022-02-23",
      ticketdescription: "The program is not booting up despite all the latest updates installed",
      ticketstatus: "New",
      },
    
   ]);

//Ticket Table Columns

  const columns = [
    {
      key: "1",
      title: "Ticket ID",
      dataIndex: "ticketid",
      filteredValue: [searchedText],
      onFilter: (value,record) => {
        return String(record.id)
        .toLowerCase()
        .includes(value.toLowerCase()) ||
        String(record.ticketid)
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        String(record.userid)
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        String(record.email)
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        String(record.issuetype)
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        String(record.ticketdate)
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        String(record.ticketdescription)
          .toLowerCase()
          .includes(value.toLowerCase()) ||
          String(record.ticketstatus)
          .toLowerCase()
          .includes(value.toLowerCase())         
      }   
    },
    {
      key: "2",
      title: "User ID",
      dataIndex: "userid",
      
    },
    {
      key: "3",
      title: "Email Address",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "Issue Type",
      dataIndex: "issuetype",
    },
    {
      key: "5",
      title: "Ticket Date",
      dataIndex: "ticketdate",
    },
    {
      key: "6",
      title: "Ticket Description",
      dataIndex: "ticketdescription",
    },
    {
      key: "7",
      title: "Ticket Status",
      dataIndex: "ticketstatus",
    },
    {
      key: "8",
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

//Ticket Table Delete and Delete

 const onDeleteRecord = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this ticket?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((Customer) => Customer.ticketid !== record.ticketid);
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
          style={{ marginBottom: 20, marginTop: "8rem" , maxWidth: 800 }}
          onSearch ={(value)=>{
            setSearchedText(value)
          }}
          onChange={(e)=>{
            setSearchedText(e.target.value)
          }}
        />

{/* Table Render */}   

        <Table className="ProfileTable" style={{ marginTop: 15 }} columns={columns} dataSource={dataSource}></Table>

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
                if (Customer.ticketid === editingCustomer.ticketid) {
                  return editingCustomer;
                } else {
                  return Customer;
                }
              });
            });
            resetEditing();
          }}
        >
        <b>Ticket ID: </b> <Input
            value={editingCustomer?.ticketid} readOnly={true}
            onChange={(e) => {
              setEditingCustomer((pre) => {
                return { ...pre, ticketid: e.target.value };
              });
            }}/>
          <b>User ID:</b> <Input
            value={editingCustomer?.userid} readOnly={true}
            onChange={(e) => {
              setEditingCustomer((pre) => {
                return { ...pre, userid: e.target.value };
              });
            }}/>
          <b>Email: </b><Input
            value={editingCustomer?.email}
            readOnly={true}
            onChange={(e) => {
              setEditingCustomer((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}/>
          <b>Issue Type: </b><Input
            value={editingCustomer?.issuetype}
            readOnly={true}
            onChange={(e) => {
              setEditingCustomer((pre) => {
                return { ...pre, issuetype: e.target.value };
              });
            }}/>
          <b>Ticket Date: </b><Input
            value={editingCustomer?.ticketdate}
            readOnly={true}
          onChange={(e) => {
              setEditingCustomer((pre) => {
                return { ...pre, creationdate: e.target.value };
              });
            }}/>
          <b>Ticket Description: </b>
          <TextArea rows={6} placeholder="maxLength is 6" value={editingCustomer?.ticketdescription}
            onChange={(e) => {
              setEditingCustomer((pre) => {
                return { ...pre, ticketdescription: e.target.value };
              });
            }}
          />
          
          <b>Ticket Status: </b><Radio.Group buttonStyle="solid" onChange={(e) => {
              setEditingCustomer((pre) => {
                return { ...pre, ticketstatus: e.target.value };
              });
            }}>
      <Radio.Button value="Answered">Answered</Radio.Button>
      <Radio.Button value="Closed">Closed</Radio.Button>
      </Radio.Group>

    </Modal>
      </header>
    </div>
  );
  }

export default App;