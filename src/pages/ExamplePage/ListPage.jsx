import { useRef } from "react";
import { Card } from "antd";
import ListPageSearch from "./components/ListPage/ListPageSearch.jsx";
import ListPageTable from "./components/ListPage/ListPageTable.jsx";

const ListPage = () => {
  const refListPageTable = useRef(null);

  const handleSearch = (value) => {
    if (refListPageTable.current) {
      refListPageTable.current.handleSearch(value);
    }
  };

  const handleReset = () => {
    if (refListPageTable.current) {
      refListPageTable.current.handleReset();
    }
  };

  return (
    <Card style={{ borderRadius: "10px", border: "none" }}>
      <ListPageSearch onSearch={handleSearch} onReset={handleReset} />
      <ListPageTable ref={refListPageTable} />
    </Card>
  );
};

export default ListPage;
