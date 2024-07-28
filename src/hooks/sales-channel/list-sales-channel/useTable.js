import { Avatar, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { SvgIcon } from "../../../assets/icons";

export const useTable = () => {
  const data = [
    {
      key: "1",
      id: "1",
      logo: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      title: "lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh",
      type: "woocommerce",
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
      title: <Typography.Text>Logo</Typography.Text>,
      key: "logo",
      align: "center",
      render: (_, record) => {
        return <Avatar src={record?.logo} />;
      },
    },
    {
      title: <Typography.Text>Domain</Typography.Text>,
      key: "thumb",
      render: (_, record) => {
        return <Typography.Text>{record?.title}</Typography.Text>;
      },
    },
    {
      title: <Typography.Text>Type</Typography.Text>,
      key: "type",
      align: "center",
      render: (_, record) => {
        return <Typography.Text>{record?.type}</Typography.Text>;
      },
    },
    {
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/sales-channel/${record?.id}`}>
            <SvgIcon.IconEdit />
          </Link>
          <SvgIcon.IconDelete />
        </Space>
      ),
    },
  ];
  return { data, columns };
};
