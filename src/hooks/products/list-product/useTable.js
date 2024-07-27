import { SpotifyOutlined, TikTokOutlined } from "@ant-design/icons";
import { Space } from "antd";

export const useTable = () => {
  const data = [
    {
      key: "1",
      id: "1",
      thumb: "thumb",
      title: "lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh",
      tags: ["nice", "developer"],
    },
  ];

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      render: text => <a>{text}</a>,
    },
    {
      title: "thumb",
      dataIndex: "thumb",
      key: "thumb",
    },
    {
      title: "title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>
            <TikTokOutlined />
          </a>
          <a>
            <SpotifyOutlined />
          </a>
        </Space>
      ),
    },
  ];
  return { data, columns };
};
