import { SearchOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Input, Row, Tree, Typography, Upload } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SvgIcon } from "../../../assets/icons";
import { CustomButton } from "../../../components/custom-button/CustomButton";
import { CustomDetailPage } from "../../../layouts/custom-detail-page/CustomDetailPage";

const treeData = [
  {
    title: "0-0",
    key: "0-0",
    children: [
      {
        title: "0-0-0",
        key: "0-0-0",
        children: [
          {
            title: "0-0-0-0",
            key: "0-0-0-0",
          },
          {
            title: "0-0-0-1",
            key: "0-0-0-1",
          },
          {
            title: "0-0-0-2",
            key: "0-0-0-2",
          },
        ],
      },
      {
        title: "0-0-1",
        key: "0-0-1",
        children: [
          {
            title: "0-0-1-0",
            key: "0-0-1-0",
          },
          {
            title: "0-0-1-1",
            key: "0-0-1-1",
          },
          {
            title: "0-0-1-2",
            key: "0-0-1-2",
          },
        ],
      },
      {
        title: "0-0-2",
        key: "0-0-2",
      },
    ],
  },
  {
    title: "0-1",
    key: "0-1",
    children: [
      {
        title: "0-1-0-0",
        key: "0-1-0-0",
      },
      {
        title: "0-1-0-1",
        key: "0-1-0-1",
      },
      {
        title: "0-1-0-2",
        key: "0-1-0-2",
      },
    ],
  },
  {
    title: "0-2",
    key: "0-2",
  },
];

export const UploadProductSection = () => {
  const fileList = [];

  const [expandedKeys, setExpandedKeys] = useState(["0-0-0", "0-0-1"]);
  const [checkedKeys, setCheckedKeys] = useState(["0-0-0"]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(treeData);

  const onExpand = expandedKeysValue => {
    console.log("onExpand", expandedKeysValue);
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck = checkedKeysValue => {
    console.log("onCheck", checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
  };

  const onSelect = (selectedKeysValue, info) => {
    console.log("onSelect", info);
    setSelectedKeys(selectedKeysValue);
  };

  const onSearchChange = e => {
    const { value } = e.target;
    setSearchValue(value);

    if (!value) {
      setFilteredData(treeData);
      return;
    }

    const filterTree = (data, searchTerm) => {
      return data.reduce((acc, node) => {
        if (node.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          acc.push(node);
        } else if (node.children) {
          const children = filterTree(node.children, searchTerm);
          if (children.length) {
            acc.push({ ...node, children });
          }
        }
        return acc;
      }, []);
    };

    setFilteredData(filterTree(treeData, value));
  };

  return (
    <CustomDetailPage
      title="Upload Product"
      actionButton={
        <div style={{ display: "flex", gap: "12px" }}>
          <Link to={"/categories"}>
            <CustomButton title="Back" type="default" />
          </Link>
          <CustomButton title="Save" type="primary" icon={<SvgIcon.IconImportFile />} />
        </div>
      }
      contentCard={
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Row>
            <Typography.Text strong>Images</Typography.Text>
            <div style={{ width: "100%" }}>
              <Upload
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                listType="picture"
                defaultFileList={[...fileList]}
              >
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </div>
          </Row>
          <Row>
            <div>
              <Typography.Text strong>Select Category</Typography.Text>
              <div className="flex-center-between">
                <Input
                  placeholder="Search categories..."
                  prefix={<SearchOutlined />}
                  value={searchValue}
                  onChange={onSearchChange}
                />{" "}
                <CustomButton title="Save" type="primary" icon={<SvgIcon.IconImportFile />} />
              </div>
              <div>
                <Tree
                  checkable
                  onExpand={onExpand}
                  expandedKeys={expandedKeys}
                  autoExpandParent={autoExpandParent}
                  onCheck={onCheck}
                  checkedKeys={checkedKeys}
                  onSelect={onSelect}
                  selectedKeys={selectedKeys}
                  treeData={filteredData}
                />
              </div>
            </div>
          </Row>
        </div>
      }
    />
  );
};
