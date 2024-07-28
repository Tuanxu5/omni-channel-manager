import { Avatar, Space, Typography } from "antd";
import { SvgIcon } from "../../../assets/icons";

export const useTable = () => {
  const data = [
    {
      key: "1",
      id: "1",
      thumb: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      title: "lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh",
      salesChannel: "Doraemon.com",
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
      title: <Typography.Text>Thumb</Typography.Text>,
      key: "thumb",
      align: "center",
      render: (_, record) => {
        return <Avatar src={record?.thumb} />;
      },
    },
    {
      title: <Typography.Text>Title</Typography.Text>,
      key: "thumb",
      render: (_, record) => {
        return <Typography.Text>{record?.title}</Typography.Text>;
      },
    },
    {
      title: <Typography.Text>Sales Channel</Typography.Text>,
      key: "salesChannel",
      align: "center",
      render: (_, record) => {
        return <Typography.Text>{record?.salesChannel}</Typography.Text>;
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
