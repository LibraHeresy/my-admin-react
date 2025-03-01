import React, { useState, useRef, useEffect } from "react";
import { Button, Popconfirm, Alert, Table } from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import AddOrderModal from "./AddOrderModal";
import { ListPageColumns } from "../../configs/config";
import { ListPageData } from "../../configs/data";
import useStore from "@/store/order";

const ListPageTable = React.forwardRef((_, ref) => {
  const navigate = useNavigate();
  const refAddOrderModal = useRef(null);

  const [tableData, setTableData] = useState([...ListPageData]);
  const [columns, setColumns] = useState(ListPageColumns);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const hasSelected = selectedRowKeys.length > 0;
  const message = `${selectedRowKeys.length || 0} 条数据已选择`;

  const { setOrder } = useStore();

  const onSelectChange = (selectedKeys) => {
    setSelectedRowKeys(selectedKeys);
  };

  const handleResetSelected = () => {
    setSelectedRowKeys([]);
  };

  const handleAdd = () => {
    if (refAddOrderModal.current) {
      refAddOrderModal.current.showModal();
    }
  };

  const handleDelete = () => {
    setTableData(
      tableData.filter((item) => !selectedRowKeys.includes(item.orderNo))
    );
    handleResetSelected();
  };

  const handleSearch = (value) => {
    setIsLoading(true);
    setTimeout(() => {
      const filteredData = tableData.filter((item) => {
        return Object.keys(value).every((key) => {
          if (value[key]) {
            if (typeof value[key] === "string") {
              return item[key]?.includes(value[key]);
            } else if (typeof value[key] === "number") {
              return item[key] === value[key];
            }
          }
          return true;
        });
      });
      setTableData(filteredData);
      setIsLoading(false);
    }, 1000);
  };

  const handleReset = () => {
    setTableData([...ListPageData]);
  };

  React.useImperativeHandle(ref, () => ({
    handleSearch,
    handleReset,
  }));

  const toDetailPage = (order) => {
    setOrder(order);
    navigate(`/example-page/detail-page/:${order.orderNo}`);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  useEffect(() => {
    const indexCol = columns.find((item) => item.dataIndex === "index");
    const orderNoCol = columns.find((item) => item.dataIndex === "orderNo");

    indexCol.render = (_, record, index) => index + 1;
    orderNoCol.render = (_, record) => {
      return (
        <Button type="link" onClick={() => toDetailPage(record)}>
          {record.orderNo}
        </Button>
      );
    };

    setColumns([...columns]);
  }, []);

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          disabled={hasSelected}
          onClick={handleAdd}
        >
          新建
        </Button>
        <Popconfirm
          title="你确定要删除选择的订单吗?"
          okText="确定"
          cancelText="取消"
          disabled={!hasSelected}
          onConfirm={handleDelete}
        >
          <Button
            style={{ marginLeft: 12 }}
            danger
            icon={<CloseOutlined />}
            disabled={!hasSelected}
          >
            删除
          </Button>
        </Popconfirm>
        <Button style={{ marginLeft: 12 }} onClick={handleResetSelected}>
          重置选择
        </Button>
      </div>
      <div style={{ marginBottom: 16 }}>
        <Alert message={message} type="info" showIcon />
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={tableData}
        loading={isLoading}
        rowKey="orderNo"
        bodyCell={(column, record, index) => {
          if (column.dataIndex === "index") {
            return <span>{index + 1}</span>;
          }
          if (column.dataIndex === "orderNo") {
            return (
              <Button onClick={() => toDetailPage(record)}>
                {record.orderNo}
              </Button>
            );
          }
          return null;
        }}
      ></Table>
      <AddOrderModal
        ref={refAddOrderModal}
        onSubmit={(value) => {
          setTableData((prevData) => [value, ...prevData]);
        }}
      />
    </div>
  );
});

ListPageTable.displayName = "ListPageTable";

export default ListPageTable;
