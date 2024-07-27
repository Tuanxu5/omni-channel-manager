import { Space, Typography } from "antd";
import { SvgIcon } from "../../../assets/icons";

export const useTable = () => {
  const data = [
    {
      key: "1",
      id: "1",
      name: "lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh",
      subcategories_count: 3,
    },
  ];

  const columns = [
    {
      title: <Typography.Text>ID</Typography.Text>,
      key: "id",
      align: "center",
      render: (_, record) => {
        return <Typography.Text>{record?.id}</Typography.Text>;
      },
    },
    {
      title: <Typography.Text>Name</Typography.Text>,
      key: "name",
      align: "left",
      render: (_, record) => {
        return <Typography.Text>{record?.name}</Typography.Text>;
      },
    },
    {
      title: <Typography.Text>Subcategories count</Typography.Text>,
      key: "subcategories_count",
      align: "center",
      render: (_, record) => {
        return <Typography.Text>{record?.subcategories_count}</Typography.Text>;
      },
    },
    {
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <SvgIcon.IconEdit />
          <SvgIcon.IconDelete />
        </Space>
      ),
    },
  ];
  return { data, columns };
};
